#!/usr/bin/env node
/**
 * Weekly content health check: broken cross-links and taxonomy drift.
 * Static text scan (see the note in lint-content.mjs for why — .tsx
 * posts use the `@/` alias, which a plain node script can't resolve).
 *
 * Checks:
 *  1. `seeAlso: ["category/slug"]` entries in frontmatter pointing at
 *     posts that don't exist.
 *  2. `<TermLink href="/category/slug">` in post bodies pointing at
 *     posts that don't exist.
 *  3. A post's `category:` frontmatter field (when present) not matching
 *     the folder it actually lives in — CONTENT_GUIDE.md requires these
 *     to match; the loader trusts the folder, so a mismatch is silent
 *     drift rather than a build break.
 *  4. `<DiagramBlock svgSrc="/diagrams/...">` and `<ResponsiveImage
 *     name="...">` referencing files that don't exist under public/ —
 *     Next.js doesn't validate these at build time, so a missing asset
 *     otherwise ships as a silent broken image with a 200 status.
 *
 * Exits non-zero if any problem is found — this runs in CI on every
 * push (not just the weekly cron), so it's a real merge gate, not just
 * a weekly report.
 *
 * Writes a snapshot to .health-check-snapshot.json (committed by the
 * scheduled workflow) so problem counts can be diffed run over run.
 */
import fs from 'node:fs';
import path from 'node:path';

const POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'posts');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SNAPSHOT_PATH = path.join(process.cwd(), '.health-check-snapshot.json');

/** Posts may live directly in a category folder or nested one level
 *  deeper in a subtopic-cluster subfolder (see CONTENT_GUIDE.md). */
function listTsxFilesRecursive(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let results = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) results = results.concat(listTsxFilesRecursive(fullPath));
    else if (entry.name.endsWith('.tsx')) results.push(fullPath);
  }
  return results;
}

function loadRealPosts() {
  const folders = fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);

  const posts = [];
  for (const folder of folders) {
    const category = folder.replace(/^\d+-/, '');
    const folderPath = path.join(POSTS_DIR, folder);
    const filePaths = listTsxFilesRecursive(folderPath).filter((f) => path.basename(f) !== 'coming-soon.tsx');

    for (const filePath of filePaths) {
      const filename = path.basename(filePath);
      const slug = filename.replace(/\.tsx$/, '');
      const text = fs.readFileSync(filePath, 'utf-8');
      posts.push({ category, slug, folder, filename: path.relative(folderPath, filePath), text });
    }
  }
  return posts;
}

function main() {
  const posts = loadRealPosts();
  const known = new Set(posts.map((p) => `${p.category}/${p.slug}`));
  const problems = [];

  for (const post of posts) {
    const origin = `${post.folder}/${post.filename}`;

    // 1. seeAlso references
    const seeAlsoMatch = post.text.match(/\bseeAlso\s*:\s*\[([\s\S]*?)\]/);
    if (seeAlsoMatch) {
      const refs = [...seeAlsoMatch[1].matchAll(/["']([^"']+)["']/g)].map((m) => m[1]);
      for (const ref of refs) {
        const key = ref.includes('/') ? ref : `${post.category}/${ref}`;
        if (!known.has(key)) {
          problems.push(`⚠ ${origin}: seeAlso references "${ref}", which doesn't exist`);
        }
      }
    }

    // 2. TermLink hrefs
    const termLinks = [...post.text.matchAll(/TermLink\s+href=["']\/([^"'#]+)["']/g)].map((m) => m[1]);
    for (const ref of termLinks) {
      if (!known.has(ref)) {
        problems.push(`⚠ ${origin}: TermLink href="/${ref}" doesn't exist`);
      }
    }

    // 3. category/folder drift
    const categoryMatch = post.text.match(/\bcategory\s*:\s*["']([^"']+)["']/);
    if (categoryMatch && categoryMatch[1] !== post.category) {
      problems.push(`⚠ ${origin}: frontmatter category "${categoryMatch[1]}" doesn't match its folder ("${post.category}")`);
    }

    // 4. DiagramBlock svgSrc pointing at a file that doesn't exist
    const svgSrcs = [...post.text.matchAll(/svgSrc=["']([^"']+)["']/g)].map((m) => m[1]);
    for (const src of svgSrcs) {
      if (!fs.existsSync(path.join(PUBLIC_DIR, src))) {
        problems.push(`⚠ ${origin}: DiagramBlock svgSrc="${src}" — file doesn't exist in public/`);
      }
    }

    // 5. ResponsiveImage name pointing at variants that don't exist
    // (process-images.mjs generates -480w/-720w/-1440w.webp from `name`)
    const imageNames = [...post.text.matchAll(/<ResponsiveImage\s+name=["']([^"']+)["']/g)].map((m) => m[1]);
    for (const name of imageNames) {
      const missing = ['480w', '720w', '1440w'].filter(
        (size) => !fs.existsSync(path.join(PUBLIC_DIR, 'images', `${name}-${size}.webp`))
      );
      if (missing.length > 0) {
        problems.push(`⚠ ${origin}: ResponsiveImage name="${name}" — missing ${missing.join(', ')} variant(s) in public/images/`);
      }
    }
  }

  const snapshot = {
    checkedAt: new Date().toISOString(),
    totalPosts: posts.length,
    problemCount: problems.length,
  };

  let previous = null;
  if (fs.existsSync(SNAPSHOT_PATH)) {
    try {
      previous = JSON.parse(fs.readFileSync(SNAPSHOT_PATH, 'utf-8'));
    } catch {
      previous = null;
    }
  }
  fs.writeFileSync(SNAPSHOT_PATH, JSON.stringify(snapshot, null, 2) + '\n');

  if (problems.length > 0) {
    console.error(`${problems.length} problem(s) found across ${posts.length} posts:\n`);
    problems.forEach((p) => console.error(p));
  } else {
    console.log(`No problems found across ${posts.length} posts.`);
  }

  if (previous) {
    const delta = snapshot.problemCount - previous.problemCount;
    console.log(`\nSince last check (${previous.checkedAt}): ${delta >= 0 ? '+' : ''}${delta} problem(s), ${snapshot.totalPosts - previous.totalPosts >= 0 ? '+' : ''}${snapshot.totalPosts - previous.totalPosts} post(s).`);
  }

  if (problems.length > 0) process.exit(1);
}

main();
