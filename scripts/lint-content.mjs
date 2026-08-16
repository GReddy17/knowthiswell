#!/usr/bin/env node
/**
 * Content lint, run in CI before build. Fails the build (non-zero exit)
 * for anything that would otherwise only surface as a runtime crash or
 * a silent broken link.
 *
 * Mirrors lib/content.ts's folder → category/subtopic derivation exactly
 * (root file → frontmatter category; {topic}/post.md → folder category;
 * {topic}/{subtopic}/post.md → folder category + subtopic) so lint
 * failures match what the actual build will do, not a simplified guess.
 *
 * Checks, per Proposal A:
 *   1. All required frontmatter fields present.
 *   2. No duplicate slugs WITHIN the same category — this is the real
 *      collision surface given the fixed /{category}/{slug} URL shape;
 *      two different categories can each have an "intro" post safely.
 *   3. Every seeAlso[] reference ("{category}/{slug}") actually exists.
 *   4. Every content/terms.json entry actually exists — same failure
 *      mode as #3 but for the glossary auto-linker instead of seeAlso.
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

const YMYL_CATEGORIES = new Set([
  'money-personal-finance',
  'health-human-body',
  'legal-contracts-regular-people',
  'government-law-civic-systems',
  'real-estate-housing',
]);

const REQUIRED_FIELDS = ['title', 'tags', 'date', 'updated', 'excerpt', 'summary', 'author'];

function walk(dir, relSegments = []) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(fullPath, [...relSegments, entry.name]));
    } else if (entry.isFile() && /\.mdx?$/.test(entry.name)) {
      results.push({ absPath: fullPath, relSegments: [...relSegments, entry.name] });
    }
  }
  return results;
}

function deriveCategoryAndSubtopic(relSegments, frontmatterCategory, frontmatterSubtopic) {
  const folderSegments = relSegments.slice(0, -1);
  if (folderSegments.length === 0) {
    return { category: frontmatterCategory, subtopic: frontmatterSubtopic, error: !frontmatterCategory };
  }
  if (folderSegments.length === 1) {
    return { category: folderSegments[0], subtopic: frontmatterSubtopic, error: false };
  }
  return { category: folderSegments[0], subtopic: folderSegments[1], error: false };
}

function main() {
  const files = walk(POSTS_DIR);
  if (files.length === 0) {
    console.log('No posts found yet — skipping content lint.');
    return;
  }

  const errors = [];
  const posts = []; // { pathLabel, category, slug, data }
  const seenPerCategory = new Map(); // category -> Map(slug -> pathLabel)

  for (const { absPath, relSegments } of files) {
    const pathLabel = relSegments.join('/');
    const raw = fs.readFileSync(absPath, 'utf-8');
    const { data } = matter(raw);
    const filename = relSegments[relSegments.length - 1];
    const slug = filename.replace(/\.mdx?$/, '');

    const { category, error: missingRootCategory } = deriveCategoryAndSubtopic(
      relSegments,
      data.category,
      data.subtopic
    );

    if (missingRootCategory) {
      errors.push(`${pathLabel}: root-level post is missing required "category" frontmatter field (no folder to derive it from)`);
      continue; // can't check anything else meaningfully without a category
    }

    // 1. Required fields
    for (const field of REQUIRED_FIELDS) {
      if (!data[field]) {
        errors.push(`${pathLabel}: missing required field "${field}"`);
      }
    }

    // YMYL sourcing requirement
    if (YMYL_CATEGORIES.has(category)) {
      if (!Array.isArray(data.sources) || data.sources.length === 0) {
        errors.push(`${pathLabel}: category "${category}" is YMYL and requires at least one entry in "sources"`);
      }
    }

    if (data.title && data.title.length > 70) {
      errors.push(`${pathLabel}: title exceeds 70 chars, will likely truncate in search results`);
    }
    if (data.excerpt && data.excerpt.length > 160) {
      errors.push(`${pathLabel}: excerpt exceeds 160 chars, will truncate in meta description`);
    }

    // seeAlso format check — must be "{category}/{slug}", not a bare slug,
    // since a bare filename isn't globally unique across categories.
    if (data.seeAlso) {
      for (const ref of data.seeAlso) {
        if (!ref.includes('/')) {
          errors.push(
            `${pathLabel}: seeAlso entry "${ref}" should be in "{category}/{slug}" format, not a bare slug — bare slugs aren't unique across categories`
          );
        }
      }
    }

    // 2. Duplicate slug within the same category
    if (!seenPerCategory.has(category)) seenPerCategory.set(category, new Map());
    const categoryMap = seenPerCategory.get(category);
    if (categoryMap.has(slug)) {
      errors.push(
        `${pathLabel}: duplicate slug "${slug}" within category "${category}" (also used by ${categoryMap.get(slug)}) — both would resolve to the same URL /${category}/${slug}`
      );
    } else {
      categoryMap.set(slug, pathLabel);
    }

    posts.push({ pathLabel, category, slug, data });
  }

  // 3. seeAlso targets actually exist
  const allRefs = new Set(posts.map((p) => `${p.category}/${p.slug}`));
  for (const post of posts) {
    for (const ref of post.data.seeAlso || []) {
      if (ref.includes('/') && !allRefs.has(ref)) {
        errors.push(`${post.pathLabel}: seeAlso references "${ref}", which doesn't exist`);
      }
    }
  }

  // 4. terms.json glossary entries actually exist
  const termsPath = path.join(process.cwd(), 'content', 'terms.json');
  if (fs.existsSync(termsPath)) {
    const terms = JSON.parse(fs.readFileSync(termsPath, 'utf-8'));
    for (const [term, ref] of Object.entries(terms)) {
      if (!allRefs.has(ref)) {
        errors.push(`content/terms.json: term "${term}" points to "${ref}", which doesn't exist`);
      }
    }
  }

  if (errors.length > 0) {
    console.error(`\nContent lint failed — ${errors.length} issue(s):\n`);
    errors.forEach((e) => console.error(`  ✗ ${e}`));
    console.error('');
    process.exit(1);
  }

  console.log(`Content lint passed — ${posts.length} post(s) checked across ${seenPerCategory.size} categor${seenPerCategory.size === 1 ? 'y' : 'ies'}.`);
}

main();
