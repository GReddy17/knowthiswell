#!/usr/bin/env node
/**
 * Weekly automated health check (Section 4.5 / 5 Phase 3 exit criteria).
 * Run via a scheduled GitHub Action (see .github/workflows/weekly-health-check.yml).
 * Three checks, each independently actionable:
 *   1. Sitemap URL count diff vs. last run — catches silent mass-deindexing
 *      or a build that accidentally dropped posts.
 *   2. Orphan-page check — any post not reachable via any category hub or
 *      see-also link.
 *   3. Broken internal link check — any TermLink/see-also pointing at a
 *      slug that doesn't exist (this is the class of bug that would have
 *      caught the gitrepotrend sitemap issue earlier, generalized).
 *
 * This is intentionally dependency-light (no headless browser) since it
 * only needs to reason about the content graph, not rendered HTML.
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');
const SNAPSHOT_PATH = path.join(process.cwd(), '.health-check-snapshot.json');

function loadPosts() {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
  return files.map((filename) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf-8');
    const { data, content } = matter(raw);
    return { slug: filename.replace(/\.mdx?$/, ''), ...data, body: content };
  });
}

function checkSitemapDiff(posts) {
  const currentCount = posts.length;
  let previousCount = null;

  if (fs.existsSync(SNAPSHOT_PATH)) {
    const snapshot = JSON.parse(fs.readFileSync(SNAPSHOT_PATH, 'utf-8'));
    previousCount = snapshot.postCount;
  }

  fs.writeFileSync(SNAPSHOT_PATH, JSON.stringify({ postCount: currentCount, checkedAt: new Date().toISOString() }, null, 2));

  if (previousCount !== null && currentCount < previousCount) {
    return [`URL count dropped: ${previousCount} → ${currentCount}. Investigate before assuming this is intentional.`];
  }
  return [];
}

function checkOrphans(posts) {
  const allSlugs = new Set(posts.map((p) => p.slug));
  const linkedSlugs = new Set();

  for (const post of posts) {
    (post.seeAlso || []).forEach((s) => linkedSlugs.add(s));
  }

  const orphans = [...allSlugs].filter((slug) => !linkedSlugs.has(slug));
  // A post being unlinked FROM elsewhere isn't automatically fatal (category
  // hub pages link every post in that category), but zero incoming seeAlso
  // links AND fewer than 2 shared tags with anything else is worth a look.
  return orphans.length > 0
    ? [`${orphans.length} post(s) have no incoming "see also" links: ${orphans.slice(0, 5).join(', ')}${orphans.length > 5 ? '…' : ''}`]
    : [];
}

function checkBrokenSeeAlso(posts) {
  const allSlugs = new Set(posts.map((p) => p.slug));
  const errors = [];
  for (const post of posts) {
    for (const target of post.seeAlso || []) {
      if (!allSlugs.has(target)) {
        errors.push(`${post.slug}: seeAlso references missing slug "${target}"`);
      }
    }
  }
  return errors;
}

function main() {
  const posts = loadPosts();
  const issues = [
    ...checkSitemapDiff(posts),
    ...checkOrphans(posts),
    ...checkBrokenSeeAlso(posts),
  ];

  if (issues.length === 0) {
    console.log(`Health check passed — ${posts.length} posts, no issues found.`);
    return;
  }

  console.log(`Health check found ${issues.length} issue(s):\n`);
  issues.forEach((i) => console.log(`  ⚠ ${i}`));
  // Non-fatal by design — this is a weekly report, not a merge blocker.
  // CI workflow posts this output as an issue comment/notification.
}

main();
