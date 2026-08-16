/**
 * Content loader. Reads content/posts/**\/*.md recursively.
 *
 * FOLDER → TOPIC WIRING
 *   content/posts/post.md                    → category from frontmatter (required at root)
 *   content/posts/{topic}/post.md            → category = {topic}, subtopic = undefined
 *   content/posts/{topic}/{subtopic}/post.md → category = {topic}, subtopic = {subtopic}
 *
 * ARCHITECTURE:
 * - Memory Optimized: Only metadata is cached. Full bodies are read on-demand.
 * - Non-Blocking: Uses async fs for non-blocking I/O.
 * - Secure: Reserved words prevent routing collisions with Next.js internals.
 */
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { z } from 'zod';
import { ALL_GLOSSARY_LETTERS } from './taxonomy';
import { PostSchema } from './schema';
import type { PostMeta } from '@/types/post';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');
const TERMS_PATH = path.join(process.cwd(), 'content', 'terms.json');

const RESERVED_CATEGORIES = new Set(['api', '_next', 'static', 'public', 'favicon.ico', 'robots.txt', 'sitemap.xml']);

interface RawPost extends PostMeta {
  body: string;
}

interface ContentCache {
  meta: Map<string, PostMeta>;
  categories: string[];
  relatedMap: Map<string, { slug: string; title: string; href: string }[]>;
}

let _cache: ContentCache | null = null;

export function slugify(text: string): string {
  const result = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
  return result || `untitled-${Math.random().toString(36).substring(2, 7)}`;
}

function extractHeadings(body: string): PostMeta['headings'] {
  const headings: PostMeta['headings'] = [];
  const lines = body.split('\n');
  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+)/);
    const h3 = line.match(/^###\s+(.+)/);
    const match = h2 ?? h3;
    if (!match) continue;
    const text = match[1].trim();
    headings.push({ id: slugify(text), text, depth: h2 ? 2 : 3 });
  }
  return headings;
}

async function walkPostsDir(dir: string, relSegments: string[] = []): Promise<{ absPath: string; relSegments: string[] }[]> {
  if (!existsSync(dir)) return [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const results: { absPath: string; relSegments: string[] }[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await walkPostsDir(fullPath, [...relSegments, entry.name])));
    } else if (entry.isFile() && /\.mdx?$/.test(entry.name)) {
      results.push({ absPath: fullPath, relSegments: [...relSegments, entry.name] });
    }
  }
  return results;
}

async function loadMetadata(): Promise<ContentCache> {
  if (_cache && process.env.NODE_ENV === 'production') return _cache;

  const files = await walkPostsDir(POSTS_DIR);
  const metaMap = new Map<string, PostMeta>();
  const allPostsForRelated: PostMeta[] = [];

  for (const { absPath, relSegments } of files) {
    const raw = await fs.readFile(absPath, 'utf-8');
    const { data, content } = matter(raw);

    const result = PostSchema.safeParse(data);
    let validated = result.success ? result.data : {
      title: 'Untitled Post',
      excerpt: 'No excerpt provided.',
      summary: 'No summary provided.',
      date: new Date().toISOString(),
      category: undefined,
      subtopic: undefined,
      author: { slug: 'unknown', name: 'Unknown Author', credentialLine: 'Unknown' },
      updated: new Date().toISOString(),
      tags: [],
      seeAlso: [],
      draft: false,
      ...data
    };

    const filename = relSegments[relSegments.length - 1];
    const slug = filename.replace(/\.mdx?$/, '').toLowerCase();
    const folderSegments = relSegments.slice(0, -1);

    let category: string;
    let subtopic: string | undefined;

    if (folderSegments.length === 0) {
      category = validated.category || 'general';
      subtopic = validated.subtopic;
    } else if (folderSegments.length === 1) {
      category = slugify(folderSegments[0]);
      subtopic = validated.subtopic;
    } else {
      category = slugify(folderSegments[0]);
      subtopic = slugify(folderSegments[1]);
    }

    if (RESERVED_CATEGORIES.has(category)) {
      category = 'general';
    }

    const meta = {
      ...validated,
      category,
      subtopic,
      slug,
      absPath, // Store the actual path for on-demand reading
      readingTimeMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
      headings: extractHeadings(content),
    };

    if (process.env.NODE_ENV === 'production' && meta.draft) continue;

    const key = `${category}/${slug}`;
    metaMap.set(key, meta);
    allPostsForRelated.push(meta);
  }

  const categories = [...new Set(allPostsForRelated.map(p => p.category))].sort();

  const relatedMap = new Map<string, { slug: string; title: string; href: string }[]>();
  for (const post of allPostsForRelated) {
    const key = `${post.category}/${post.slug}`;
    if (post.seeAlso && post.seeAlso.length > 0) {
      const explicit = post.seeAlso
        .map((ref: string) => {
          const [refCat, refSlug] = ref.includes('/') ? ref.split('/') : [post.category, ref];
          return allPostsForRelated.find(p => p.category === refCat && p.slug === refSlug);
        })
        .filter(Boolean)
        .map(p => {
          if (!p) return { slug: '', title: '', href: '' };
          return { slug: p.slug, title: p.title, href: `/${p.category}/${p.slug}` };
        });
      relatedMap.set(key, explicit);
    } else {
      const scored = allPostsForRelated
        .filter(p => !(p.slug === post.slug && p.category === post.category))
        .map(p => {
          const tagOverlap = p.tags.filter(t => post.tags.includes(t)).length;
          const sameCategory = p.category === post.category ? 1 : 0;
          const sameSubtopic = p.subtopic && p.subtopic === post.subtopic ? 2 : 0;
          return { post: p, score: tagOverlap * 2 + sameCategory + sameSubtopic };
        })
        .filter(s => s.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 4)
        .map(({ post: p }) => ({
          slug: p.slug,
          title: p.title,
          href: `/${p.category}/${p.slug}`,
        }));
      relatedMap.set(key, scored);
    }
  }

  _cache = { meta: metaMap, categories, relatedMap };
  return _cache;
}

export async function getAllPostsMeta() {
  const cache = await loadMetadata();
  return Array.from(cache.meta.values());
}

export async function getAllCategories(): Promise<string[]> {
  const cache = await loadMetadata();
  return cache.categories;
}

export async function getAllPostSlugs(): Promise<{ category: string; slug: string }[]> {
  const cache = await loadMetadata();
  return Array.from(cache.meta.values()).map(p => ({ category: p.category, slug: p.slug }));
}

export async function getPostBySlug(category: string, slug: string): Promise<RawPost | null> {
  const cache = await loadMetadata();
  const meta = cache.meta.get(`${category}/${slug}`);
  if (!meta) return null;

  try {
    const raw = await fs.readFile(meta.absPath, 'utf-8');
    const { content } = matter(raw);
    return { ...meta, body: content };
  } catch {
    return { ...meta, body: '' };
  }
}

export async function getPostsByCategory(category: string): Promise<RawPost[]> {
  const cache = await loadMetadata();
  const postsMeta = Array.from(cache.meta.values()).filter(p => p.category === category);

  const posts = await Promise.all(postsMeta.map(async (meta) => {
    try {
      const raw = await fs.readFile(meta.absPath, 'utf-8');
      const { content } = matter(raw);
      return { ...meta, body: content };
    } catch {
      return { ...meta, body: '' };
    }
  }));

  return posts.sort((a, b) => (a.title > b.title ? 1 : -1));
}

export function groupBySubtopic(posts: RawPost[]) {
  const map = new Map<string | undefined, RawPost[]>();
  for (const post of posts) {
    const key = post.subtopic;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(post);
  }
  return [...map.entries()]
    .sort(([a], [b]) => (a === undefined ? -1 : b === undefined ? 1 : a.localeCompare(b)))
    .map(([subtopic, posts]) => ({ subtopic, posts }));
}

export function getRelatedPosts(post: RawPost) {
  const cache = _cache || { relatedMap: new Map() };
  const key = `${post.category}/${post.slug}`;
  return cache.relatedMap.get(key) ?? [];
}

export async function getAllTags(): Promise<string[]> {
  const cache = await loadMetadata();
  const tags = new Set<string>();
  cache.meta.forEach(p => p.tags.forEach((t: string) => tags.add(t)));
  return [...tags].sort();
}

export async function getPostsByTag(tag: string): Promise<RawPost[]> {
  const cache = await loadMetadata();
  const meta = Array.from(cache.meta.values()).filter(p => p.tags.includes(tag));

  const posts = await Promise.all(meta.map(async (m) => {
    try {
      const raw = await fs.readFile(m.absPath, 'utf-8');
      const { content } = matter(raw);
      return { ...m, body: content };
    } catch {
      return { ...m, body: '' };
    }
  }));

  return posts.sort((a, b) => (a.title > b.title ? 1 : -1));
}

const AUTHORS_DIR = path.join(process.cwd(), 'content', 'authors');

export interface AuthorProfile {
  slug: string;
  name: string;
  credentialLine: string;
  bio: string;
}

let _authorCache: AuthorProfile[] | null = null;

async function loadAllAuthors(): Promise<AuthorProfile[]> {
  if (_authorCache && process.env.NODE_ENV === 'production') return _authorCache;
  if (!existsSync(AUTHORS_DIR)) return [];
  const files = await fs.readdir(AUTHORS_DIR);
  const mdFiles = files.filter(f => f.endsWith('.md'));
  const authors = await Promise.all(mdFiles.map(async (filename) => {
    const raw = await fs.readFile(path.join(AUTHORS_DIR, filename), 'utf-8');
    const { data, content } = matter(raw);
    return {
      slug: data.slug ?? filename.replace(/\.md$/, '').toLowerCase(),
      name: data.name,
      credentialLine: data.credentialLine,
      bio: content.trim(),
    };
  }));
  _authorCache = authors;
  return authors;
}

export async function getAllAuthorSlugs(): Promise<{ slug: string }[]> {
  return (await loadAllAuthors()).map(a => ({ slug: a.slug }));
}

export async function getAuthorBySlug(slug: string): Promise<AuthorProfile | null> {
  return (await loadAllAuthors()).find(a => a.slug === slug) ?? null;
}

export async function getPostsByAuthor(slug: string): Promise<RawPost[]> {
  const cache = await loadMetadata();
  const meta = Array.from(cache.meta.values()).filter(p => p.author.slug === slug);

  const posts = await Promise.all(meta.map(async (m) => {
    try {
      const raw = await fs.readFile(m.absPath, 'utf-8');
      const { content } = matter(raw);
      return { ...m, body: content };
    } catch {
      return { ...m, body: '' };
    }
  }));

  return posts;
}

interface TermsMap {
  [term: string]: string;
}

export async function getTermsByLetter(letter: string): Promise<{ term: string; slug: string; category: string }[]> {
  if (!existsSync(TERMS_PATH)) return [];
  const termsData = await fs.readFile(TERMS_PATH, 'utf-8');
  const terms: TermsMap = JSON.parse(termsData);
  const cache = await loadMetadata();

  return Object.entries(terms)
    .filter(([term]) => term.toLowerCase().startsWith(letter.toLowerCase()))
    .map(([term, ref]) => {
      const [category, slug] = ref.includes('/') ? ref.split('/') : [null, ref];
      const meta = category
        ? cache.meta.get(`${category}/${slug}`)
        : Array.from(cache.meta.values()).find(p => p.slug === slug);
      return meta ? { term, slug: meta.slug, category: meta.category } : null;
    })
    .filter((t): t is { term: string; slug: string; category: string } => Boolean(t))
    .sort((a, b) => a.term.localeCompare(b.term));
}

export async function getLibraryStructure() {
  const cache = await loadMetadata();
  const categories = cache.categories;

  return categories.map(cat => {
    const posts = Array.from(cache.meta.values()).filter(p => p.category === cat);
    const subtopicsMap = new Map<string, PostMeta[]>();


    posts.forEach((p: PostMeta) => {
      if (p.subtopic) {
        if (!subtopicsMap.has(p.subtopic)) {
          subtopicsMap.set(p.subtopic, []);
        }
        subtopicsMap.get(p.subtopic)!.push(p);
      }
    });

    const subtopics = Array.from(subtopicsMap.entries()).map(([label, posts]) => ({
      id: label,
      label,
      posts: posts.map(p => ({ label: p.title, href: `/${p.category}/${p.slug}` }))
    }));

    const rootPosts = posts
      .filter(p => !p.subtopic)
      .map((p: PostMeta) => ({ label: p.title, href: `/${p.category}/${p.slug}` }));

    return {
      id: cat,
      label: cat, // In a real app, we'd use getCategoryLabel(cat) here, but this is a server func
      posts: rootPosts,
      subtopics
    };
  });
}
