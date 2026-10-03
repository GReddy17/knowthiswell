#!/usr/bin/env node
/**
 * SEO score (0-100) + Short-fit score (0-100) for every post.
 *
 *   node scripts/seo-score.mjs                 # score all, write src/content/generated/seo-scores.json
 *   node scripts/seo-score.mjs --write         # also write seoScore / seoScoredOn into each post's frontmatter
 *   node scripts/seo-score.mjs --post <path>   # score one post file, print breakdown (use right after writing a post)
 *
 * SEO score = how well the page is built to rank and be quoted, judged ONLY from the post's own
 * title and content (never Search Console / traffic: most pages aren't indexed yet, so search
 * data would punish new pages for Google's delay, not for quality). LOW score = weak page =
 * Shorts priority (a Short lifts it). Short-fit = hook/visual/seasonal potential from the title
 * and content. Both are heuristics, not Google's numbers.
 *
 * Raw points: title 15, excerpt 10, tags 5, freshness 10, depth 30 (words, sources, FAQ, diagram,
 * glossary, headings, QuickCheck), linking 15, format 10 = 95, scaled to 100.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const POSTS = path.join(ROOT, 'src', 'content', 'posts');
const OUT = path.join(ROOT, 'src', 'content', 'generated', 'seo-scores.json');
const TODAY = new Date().toISOString().slice(0, 10);

const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const ONE = args.includes('--post') ? args[args.indexOf('--post') + 1] : null;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.tsx') && e.name !== 'coming-soon.tsx') out.push(p);
  }
  return out;
}

function extractMeta(src) {
  const start = src.indexOf('export const metadata');
  if (start < 0) return null;
  const open = src.indexOf('{', src.indexOf('=', start));
  let depth = 0, i = open, q = null;
  for (; i < src.length; i++) {
    const c = src[i];
    if (q) { if (c === '\\') i++; else if (c === q) q = null; continue; }
    if (c === '"' || c === "'" || c === '`') { q = c; continue; }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) break; }
  }
  const text = src.slice(open, i + 1);
  try { return { meta: new Function(`return (${text})`)(), start, end: i + 1 }; } catch { return null; }
}

const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
const daysAgo = (d) => (d ? (Date.now() - Date.parse(d)) / 864e5 : 9999);
const stop = new Set('the a an of to in on for and or is are was why how what does do did your you it its with from at by as this that not no'.split(' '));
const words = (s) => (s.toLowerCase().match(/[a-z0-9']+/g) || []).filter((w) => !stop.has(w));

function loadAll() {
  const files = walk(POSTS);
  const posts = files.map((file) => {
    const src = fs.readFileSync(file, 'utf8');
    const m = extractMeta(src);
    if (!m) return null;
    const rel = path.relative(POSTS, file).replace(/\\/g, '/');
    const parts = rel.replace(/\.tsx$/, '').split('/');
    const cat = parts[0].replace(/^\d+-/, '');
    const slug = parts[parts.length - 1];
    const key = `${cat}/${slug}`;
    const body = src.slice(m.end);
    const quizIdx = body.indexOf('export const quiz');
    const quizEnd = quizIdx >= 0 ? body.indexOf('];', quizIdx) : -1;
    const quizText = quizIdx >= 0 ? body.slice(quizIdx, quizEnd) : '';
    const quizCount = (quizText.match(/"question"\s*:/g) || []).length;
    const jsx = quizIdx >= 0 ? body.slice(0, quizIdx) + body.slice(quizEnd) : body;
    const text = jsx.replace(/className=("[^"]*"|\{[^{}]*\})/g, ' ').replace(/<\/?[A-Za-z][A-Za-z0-9]*/g, ' ').replace(/href="[^"]*"/g, ' ').replace(/\b(const|return|export|import|from|true|false|label|term|definition|question|answer|difficulty|text|correct|explanation)\b/g, ' ').replace(/&[a-z#0-9]+;/g, ' ');
    const wordCount = (text.match(/[A-Za-z]{2,}/g) || []).length;
    const links = new Set();
    for (const mm of src.matchAll(/href=["']\/([a-z0-9-]+\/[a-z0-9-]+)["']/g)) links.add(mm[1]);
    for (const s of m.meta.seeAlso || []) links.add(s);
    return {
      file, rel, key, cat, slug, meta: m.meta, src, wordCount, quizCount,
      hasFaq: /<FAQBlock/.test(src), hasDiagram: /<DiagramBlock/.test(src),
      outLinks: [...links].filter((l) => l !== key),
    };
  }).filter(Boolean);
  const incoming = {};
  for (const p of posts) for (const l of p.outLinks) incoming[l] = (incoming[l] || 0) + 1;
  for (const p of posts) p.incoming = incoming[p.key] || 0;
  return posts;
}

function scoreSeo(p) {
  const m = p.meta, b = {};
  const title = m.title || '';
  const tw = new Set(words(title));
  const tags = (m.tags || []).join(' ').toLowerCase();
  let t = 0;
  t += title.length >= 30 && title.length <= 65 ? 6 : title.length <= 80 ? 3 : 0;
  t += /^(why|how|what|does|do|is|are|can|when|which|who)\b|\?|\b\d/i.test(title) ? 6 : 2;
  t += [...tw].some((w) => tags.includes(w)) ? 3 : 0;
  b.title = t;
  const ex = m.excerpt || '';
  let e = 0;
  e += ex.length >= 110 && ex.length <= 165 ? 5 : ex.length >= 70 && ex.length <= 200 ? 3 : 0;
  e += m.summary && m.summary.length > 60 ? 2 : 0;
  e += [...tw].filter((w) => ex.toLowerCase().includes(w)).length >= Math.min(2, tw.size) ? 3 : 0;
  b.excerpt = e;
  b.tags = clamp((m.tags || []).length, 0, 5);
  const upd = daysAgo(m.updated || m.date);
  b.freshness = (upd <= 45 ? 5 : upd <= 120 ? 3 : 1) + (m.lastReviewed && daysAgo(m.lastReviewed) <= 180 ? 5 : 0);
  let d = 0;
  d += clamp(Math.round((p.wordCount / 1400) * 10), 0, 10);
  d += clamp((m.sources || []).length, 0, 3) * (5 / 3);
  d += p.hasFaq ? 5 : 0;
  d += p.hasDiagram ? 3 : 0;
  d += (m.glossary || []).length >= 3 ? 2 : 0;
  d += clamp(Math.round(((p.src.match(/<h2/g) || []).length / 6) * 3), 0, 3);
  d += /<QuickCheck/.test(p.src) ? 2 : 0;
  b.depth = Math.round(d);
  b.linking = clamp(Math.round((p.incoming / 8) * 10), 0, 10) + clamp(p.outLinks.length, 0, 5);
  b.format = (p.quizCount >= 9 ? 4 : p.quizCount >= 3 ? 2 : 0)
    + (m.youtubeStatus && !['not-started', ''].includes(m.youtubeStatus) ? 4 : 0) + (m.pillar ? 2 : 0);
  const total = Math.round((Object.values(b).reduce((a, c) => a + c, 0) * 100) / 95);
  return { total: clamp(total, 0, 100), b };
}

const CAT_PRIOR = {
  'general-science-facts': 20, 'geography-world-facts': 18, 'math-numbers': 17, 'environment-nature': 16,
  'technology-basics': 15, 'trivia-fun-facts': 15, 'history-timeline-facts': 14, 'psychology-human-behavior': 14,
  'health-body-basics': 13, 'home-diy-knowledge': 13, 'language-vocabulary': 12, 'festivals-culture': 12,
  'digital-safety-privacy': 12, 'general-awareness-basics': 11, 'units-measurement-conversions': 10,
  'personal-finance-basics': 9, 'legal-documentation-howtos': 8,
};
const HOOKS = [
  [/\b(myth|misconception|really|actually|isn'?t|aren'?t|doesn'?t|don'?t|never|not what|wrong)\b/i, 12],
  [/\b(why)\b/i, 8], [/\?/, 4], [/\b\d[\d,.]*\b/, 5],
  [/\b(largest|smallest|biggest|most|only|first|fastest|deepest|oldest|highest)\b/i, 6],
  [/\b(paradox|secret|hidden|surprising)\b/i, 4],
];
// Oct 5-30 2026 seasonal/event windows: Dussehra Oct 20, Navratri Oct 11-19, World Space Week Oct 4-10,
// World Mental Health Day Oct 10, World Food Day Oct 16, Cybersecurity Awareness Month, Halloween Oct 31,
// US clocks go back Nov 1, Fat Bear Week / hibernation, flu season, hurricane/nor'easter season.
const SEASON = [
  [/halloween|spider|\bbats?\b|ghost|pumpkin|candy|skeleton|haunt/i, 15],
  [/hibernat|bear|autumn|\bfall\b|leaves|migrat/i, 12],
  [/daylight saving|time change|clocks? go back/i, 15],
  [/dussehra|navratri|diwali|durga|festival of lights/i, 14],
  [/phishing|password|scam|cyber|two-factor|\bvpn\b|malware|privacy/i, 11],
  [/hurricane|nor'?easter|el ni[nñ]o|storm|tornado/i, 10],
  [/moon|eclipse|\bspace\b|planet|asteroid|meteor|milky way|light pollution/i, 9],
  [/sleep|insomnia|\bflu\b|immune|handwash|mental health|stress|anxiety/i, 8],
  [/\bfood\b|nutrition|\bnobel\b/i, 5],
];

function scoreShort(p, tier) {
  const m = p.meta, s = `${m.title} ${(m.tags || []).join(' ')} ${m.excerpt}`;
  let hook = 0;
  for (const [re, w] of HOOKS) if (re.test(m.title)) hook += w;
  hook = clamp(hook, 0, 30);
  const cat = CAT_PRIOR[p.cat] ?? 6;
  const vis = (p.hasDiagram ? 6 : 0) + (/\b(how|why)\b.*\b(work|works|float|fall|freeze|burn|spread|glow|fly|sink|heat|cool|move)\b/i.test(m.title) ? 4 : 0);
  let season = 0;
  for (const [re, w] of SEASON) if (re.test(s)) season = Math.max(season, w);
  const bonus = tier || 0;
  const total = clamp(hook + cat + vis + season + bonus + (m.pillar ? 3 : 0), 0, 100);
  return { total, hook, cat, vis, season, bonus };
}

function main() {
  const posts = loadAll();
    const tierS = new Set([
    'general-awareness-basics/nobel-prizes-categories-and-how-winners-are-chosen',
    'environment-nature/light-pollution-and-its-effects',
    'language-vocabulary/most-spoken-languages-in-the-world',
  ]);
  const rows = posts.map((p) => {
    const seo = scoreSeo(p);
    const sf = scoreShort(p, tierS.has(p.key) ? 10 : 0);
    return {
      key: p.key, title: p.meta.title, cat: p.cat, words: p.wordCount, quiz: p.quizCount,
      incoming: p.incoming, seoScore: seo.total, seoBreakdown: seo.b, shortFit: sf.total,
      shortBreakdown: sf, video: p.meta.youtubeStatus || 'not-started', youtubeShort: !!p.meta.youtubeShort, youtubeLong: !!p.meta.youtubeLong, file: p.rel,
    };
  });

  if (ONE) {
    const p = posts.find((x) => x.file === path.resolve(ONE) || x.rel === ONE || x.key === ONE || x.slug === ONE || x.file.endsWith(ONE));
    if (!p) { console.error('post not found'); process.exit(1); }
    const r = rows.find((x) => x.key === p.key);
    console.log(`SEO ${r.seoScore}/100  ShortFit ${r.shortFit}/100  ${r.key}`);
    console.log(JSON.stringify(r.seoBreakdown), `words=${r.words} quiz=${r.quiz} incoming=${r.incoming}`);
    if (WRITE) {
      let src = p.src.replace(/\n\s*seoScore:\s*\d+,\s*seoScoredOn:\s*"[^"]*",/, '');
      const re = /(\n(\s*)updated:\s*"[^"]*",)/;
      if (re.test(src)) {
        src = src.replace(re, (_, all, ind) => `${all}\n${ind}seoScore: ${r.seoScore}, seoScoredOn: "${TODAY}",`);
        fs.writeFileSync(p.file, src);
        console.log('frontmatter stamped');
      }
    }
    return;
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify({ scoredOn: TODAY, count: rows.length, rows }, null, 1));
  const avg = Math.round(rows.reduce((a, r) => a + r.seoScore, 0) / rows.length);
  console.log(`scored ${rows.length} posts, avg SEO ${avg}, wrote ${path.relative(ROOT, OUT)}`);

  if (WRITE) {
    let n = 0;
    for (const p of posts) {
      const r = rows.find((x) => x.key === p.key);
      let src = p.src;
      src = src.replace(/\n\s*seoScore:\s*\d+,\s*seoScoredOn:\s*"[^"]*",/, '');
      const re = /(\n(\s*)updated:\s*"[^"]*",)/;
      if (!re.test(src)) continue;
      src = src.replace(re, (_, all, ind) => `${all}\n${ind}seoScore: ${r.seoScore}, seoScoredOn: "${TODAY}",`);
      if (src !== p.src) { fs.writeFileSync(p.file, src); n++; }
    }
    console.log(`frontmatter updated in ${n} posts`);
  }
}
main();
