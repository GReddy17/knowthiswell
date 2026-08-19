#!/usr/bin/env node
/**
 * YMYL sourcing gate. Fails the build if a post in a "Your Money or Your
 * Life" category (flagged via `"ymyl": true` in content/taxonomy.json —
 * currently money/health/legal/government categories) ships with no
 * `sources` in its frontmatter.
 *
 * Static text scan rather than a real import: posts are .tsx files using
 * the `@/` path alias, which a plain node script can't resolve without
 * pulling in a TS loader. generate-post-registry.mjs takes the same
 * approach for the same reason — see the note at the top of that file.
 */
import fs from 'node:fs';
import path from 'node:path';

const POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'posts');
const TAXONOMY_PATH = path.join(process.cwd(), 'content', 'taxonomy.json');

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

function main() {
  const taxonomy = JSON.parse(fs.readFileSync(TAXONOMY_PATH, 'utf-8'));
  const ymylCategories = new Set(
    Object.entries(taxonomy)
      .filter(([, entry]) => entry.ymyl === true)
      .map(([category]) => category)
  );

  if (ymylCategories.size === 0) {
    console.log('No categories flagged "ymyl": true in taxonomy.json — nothing to check.');
    return;
  }

  const folders = fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);

  const violations = [];
  let checked = 0;

  for (const folder of folders) {
    const category = folder.replace(/^\d+-/, '');
    if (!ymylCategories.has(category)) continue;

    const folderPath = path.join(POSTS_DIR, folder);
    const filePaths = listTsxFilesRecursive(folderPath).filter((f) => path.basename(f) !== 'coming-soon.tsx');

    for (const filePath of filePaths) {
      const text = fs.readFileSync(filePath, 'utf-8');

      if (/\bdraft\s*:\s*true\b/.test(text)) continue; // unpublished, don't gate

      checked++;
      const sourcesMatch = text.match(/\bsources\s*:\s*\[([\s\S]*?)\]/);
      const hasRealSource = Boolean(sourcesMatch && /\{/.test(sourcesMatch[1]));

      if (!hasRealSource) {
        violations.push(`${path.relative(POSTS_DIR, filePath)} (category: ${category})`);
      }
    }
  }

  if (violations.length > 0) {
    console.error(`\n${violations.length} YMYL post(s) missing required \`sources\`:\n`);
    violations.forEach((v) => console.error(`  ✗ ${v}`));
    console.error('\nAdd a non-empty `sources: [{ label, url }, ...]` to frontmatter, or mark the post `draft: true` if unpublished.\n');
    process.exit(1);
  }

  console.log(`YMYL sourcing check passed — ${checked} post(s) checked across ${ymylCategories.size} flagged categor${ymylCategories.size === 1 ? 'y' : 'ies'}.`);
}

main();
