#!/usr/bin/env node
/**
 * Regenerates src/content/posts/index.ts by scanning the content folders
 * directly. Run this any time a post is added, removed, or renamed —
 * NEVER hand-edit index.ts.
 *
 * Why this file has to exist at all (rather than dynamic fs-based
 * loading like a markdown site would use): content here is authored as
 * real .tsx React components, not text files read at runtime. Webpack
 * needs statically-analyzable import paths to bundle each post's code
 * and code-split correctly — a computed `import(variablePath)` doesn't
 * work reliably for this. So every post needs an explicit static import
 * line, and this script is what keeps that list correct and in sync
 * with what's actually on disk, instead of a human maintaining it by hand.
 *
 * Registry key format: "{category}/{slug}" — category is the containing
 * folder name with any numeric ordering prefix stripped (folders keep
 * their "NN-" prefix on disk for author ordering; it never appears in
 * the registry key or the public URL). Slug is the filename without
 * extension, already sanitized (see scripts/sanitize-filenames.py) —
 * this script does NOT sanitize, it assumes filenames are already clean
 * and will warn loudly if it finds one that isn't.
 */
import fs from 'node:fs';
import path from 'node:path';
import readingTime from 'reading-time';

const POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'posts');
const OUTPUT_PATH = path.join(POSTS_DIR, 'index.ts');
const TAXONOMY_PATH = path.join(process.cwd(), 'content', 'taxonomy.json');
const TERMS_PATH = path.join(process.cwd(), 'content', 'terms.json');

const UNSAFE_CHARS = /[:'\u2019\u2014\u2013]/;

function toImportIdentifier(category, slug) {
  const clean = (category + '_' + slug).replace(/[^a-zA-Z0-9]/g, '');
  return 'p_' + clean;
}

// Attributes that hold markup/technical values rather than reading
// content (SVG geometry, styling, wiring) — stripped before word-counting
// so they don't inflate or distort the estimate.
const NON_PROSE_ATTRS = [
  'className', 'href', 'id', 'key', 'src', 'style', 'width', 'height',
  'viewBox', 'stroke', 'fill', 'type', 'role', 'xmlns', 'strokeWidth',
  'strokeLinecap', 'strokeLinejoin', 'cx', 'cy', 'points', 'x', 'y',
  'x1', 'y1', 'x2', 'y2', 'rx', 'ry', 'transform', 'defaultValue',
  'formula', 'formatResult', 'svgSrc', 'step', 'label',
];
const NON_PROSE_ATTR_PATTERN = new RegExp(
  `\\b(?:${NON_PROSE_ATTRS.join('|')})=(["'])(?:(?!\\1).)*\\1`, 'g'
);

/** Rough reading-time estimate straight from a post's .tsx source — this
 *  is prose embedded in JSX children and component props (question text,
 *  mistake/fix pairs, etc.), not plain markdown, so there's no clean text
 *  layer to read; strip the parts that clearly aren't prose and count
 *  what's left. Good enough for a UI estimate, not a precise word count. */
function estimateReadingMinutes(fileText) {
  const bodyStart = fileText.indexOf('export default function Post()');
  const body = bodyStart === -1 ? fileText : fileText.slice(bodyStart);
  const stripped = body
    .replace(NON_PROSE_ATTR_PATTERN, ' ')
    .replace(/<\/?[A-Za-z][^>]*>/g, ' ')
    .replace(/[{}[\]]/g, ' ');
  return Math.max(1, Math.ceil(readingTime(stripped).minutes));
}

/**
 * Syncs content/taxonomy.json's `status` field to the REAL post count
 * for each category, rather than trusting a hand-maintained flag.
 *
 * This exists because of a real bug: taxonomy.json said "coming-soon"
 * for 6 categories that actually had 50 real posts each, and the
 * category hub page trusted that flag over the actual post count —
 * silently hiding 300 live posts behind a "coming soon" placeholder.
 * A hand-maintained status field will drift the moment someone writes
 * content and forgets to also flip a JSON flag elsewhere, so this
 * script now derives it automatically every time it runs instead.
 */
function syncTaxonomyStatus(realPostCountByCategory) {
  if (!fs.existsSync(TAXONOMY_PATH)) return;
  const taxonomy = JSON.parse(fs.readFileSync(TAXONOMY_PATH, 'utf-8'));
  let changed = 0;

  for (const [category, entry] of Object.entries(taxonomy)) {
    const realCount = realPostCountByCategory.get(category) ?? 0;
    const correctStatus = realCount > 0 ? 'active' : 'coming-soon';
    if (entry.status !== correctStatus) {
      console.log(`  taxonomy.json: ${category} status "${entry.status}" -> "${correctStatus}" (${realCount} real posts)`);
      entry.status = correctStatus;
      changed++;
    }
  }

  if (changed > 0) {
    fs.writeFileSync(TAXONOMY_PATH, JSON.stringify(taxonomy, null, 2) + '\n');
    console.log(`Synced ${changed} taxonomy status field(s) to match real content.`);
  }
}

/**
 * Rebuilds content/terms.json (term -> "category/slug") from every real
 * post's `glossary: [{ term, definition }]` frontmatter, so the site-wide
 * A-Z glossary index (getTermsByLetter, /glossary/[letter]) actually
 * reflects what posts define instead of a hand-maintained file nobody
 * updates. Definitions themselves stay in the post — this index only
 * needs to know which post to link a term to.
 */
function syncGlossaryTerms(glossaryTerms) {
  const sorted = Object.fromEntries([...glossaryTerms.entries()].sort(([a], [b]) => a.localeCompare(b)));
  const previous = fs.existsSync(TERMS_PATH) ? fs.readFileSync(TERMS_PATH, 'utf-8') : '';
  const next = JSON.stringify(sorted, null, 2) + '\n';
  if (next !== previous) {
    fs.writeFileSync(TERMS_PATH, next);
    console.log(`Synced content/terms.json — ${glossaryTerms.size} glossary term(s).`);
  }
}

/** Recursively lists .tsx files under dir, returning paths relative to
 *  dir (posix-style, no leading ./) — posts may now live directly in a
 *  category folder or nested one level deeper in a subtopic-cluster
 *  subfolder (see CONTENT_GUIDE.md). */
function listTsxFilesRecursive(dir, base = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let results = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(listTsxFilesRecursive(fullPath, base));
    } else if (entry.name.endsWith('.tsx')) {
      results.push(path.relative(base, fullPath).split(path.sep).join('/'));
    }
  }
  return results;
}

function main() {
  const folders = fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

  const imports = [];
  const registryEntries = [];
  const warnings = [];
  const realPostCountByCategory = new Map();
  const glossaryTerms = new Map(); // term -> "category/slug"

  for (const folder of folders) {
    const category = folder.replace(/^\d+-/, '');
    const folderPath = path.join(POSTS_DIR, folder);
    // relPaths may be "slug.tsx" (flat) or "cluster-slug/slug.tsx"
    // (nested one level under a subtopic-cluster subfolder).
    const relPaths = listTsxFilesRecursive(folderPath).sort();

    let realCount = 0;

    for (const relPath of relPaths) {
      const filename = relPath.split('/').pop();
      const slug = filename.replace(/\.tsx$/, '');

      // coming-soon.tsx is a placeholder for an empty category (see
      // CONTENT_GUIDE.md) — it must not be indexed as a real post. Doing
      // so used to make it show up as a fake content card in category
      // grids and search, and suppressed the real "coming soon" empty
      // state (posts.length was never actually 0).
      if (slug === 'coming-soon') continue;

      if (UNSAFE_CHARS.test(slug)) {
        warnings.push(`${folder}/${relPath}: slug still has unsafe characters — run scripts/sanitize-filenames.py first`);
        continue;
      }
      if (/^\d+-/.test(slug)) {
        warnings.push(`${folder}/${relPath}: slug still has a numeric ordering prefix — this will leak into the public URL`);
      }

      realCount++;

      const ident = toImportIdentifier(category, slug);
      const importPath = `./${folder}/${relPath.replace(/\.tsx$/, '')}`;
      imports.push(`import ${ident}, { metadata as ${ident}Meta } from ${JSON.stringify(importPath)};`);

      const fileText = fs.readFileSync(path.join(folderPath, relPath), 'utf-8');
      const readingTimeMinutes = estimateReadingMinutes(fileText);
      registryEntries.push(
        `  ${JSON.stringify(`${category}/${slug}`)}: { metadata: ${ident}Meta, Component: ${ident}, readingTimeMinutes: ${readingTimeMinutes} },`
      );

      // Aggregate this post's `glossary: [{ term, definition }]` entries
      // into the site-wide A-Z glossary index (content/terms.json) —
      // the glossary page reads only that file, never post frontmatter
      // directly, so without this step every authored glossary term is
      // invisible outside its own post's in-article GlossaryStrip.
      for (const m of fileText.matchAll(/\{"term":"([^"]+)","definition":"[^"]*"\}/g)) {
        glossaryTerms.set(m[1], `${category}/${slug}`);
      }
    }

    realPostCountByCategory.set(category, realCount);
  }

  if (warnings.length > 0) {
    console.warn(`\n${warnings.length} warning(s):\n`);
    warnings.forEach((w) => console.warn(`  ⚠ ${w}`));
    console.warn('');
  }

  syncTaxonomyStatus(realPostCountByCategory);
  syncGlossaryTerms(glossaryTerms);

  const output = `/**
 * AUTO-GENERATED by scripts/generate-post-registry.mjs — do not hand-edit.
 * Regenerate with: node scripts/generate-post-registry.mjs
 * Generated ${new Date().toISOString()} — ${registryEntries.length} posts.
 */
import { PostMeta, PostFrontmatter } from '@/types/post';

${imports.join('\n')}

export const POSTS_REGISTRY: Record<string, { metadata: PostFrontmatter; Component: React.ComponentType; readingTimeMinutes: number }> = {
${registryEntries.join('\n')}
};

export function getPostFromRegistry(category: string, slug: string) {
  return POSTS_REGISTRY[\`\${category}/\${slug}\`];
}
`;

  fs.writeFileSync(OUTPUT_PATH, output);
  console.log(`Generated index.ts with ${registryEntries.length} posts across ${folders.length} categories.`);
}

main();
