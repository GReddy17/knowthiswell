#!/usr/bin/env node
/**
 * Extracts real <QuickCheck> and <FAQBlock> question/answer content out of
 * every post's .tsx source and writes public/question-pool.json — the pool
 * the homepage's "General Knowledge" widget rotates through client-side.
 *
 * Parses with the TypeScript compiler API (not regex) because the props
 * are JSX-embedded object/array literals with nested quotes and braces —
 * exactly the case regex reliably mangles. Only literal values are
 * evaluated; anything computed or containing JSX (e.g. an <FAQBlock>
 * answer with a nested <TermLink>) is skipped, same as FAQBlock's own
 * JSON-LD filter already does for non-string answers.
 *
 * Run via `npm run prebuild` (wired below `generate-post-registry`, which
 * this script depends on for the real, current file list) or directly:
 *   node scripts/generate-question-pool.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const ROOT = process.cwd();
const POSTS_DIR = path.join(ROOT, 'src', 'content', 'posts');
const REGISTRY_PATH = path.join(POSTS_DIR, 'index.ts');
const TAXONOMY_PATH = path.join(ROOT, 'content', 'taxonomy.json');
const OUTPUT_PATH = path.join(ROOT, 'public', 'question-pool.json');

// The homepage widget that consumes this pool is a client component, and
// lib/taxonomy.ts does Node `fs` reads at module scope — importing it
// client-side breaks the browser bundle. So the display-ready category
// label is baked into each pool entry here (server-side, build time)
// instead of being looked up in the browser.
const taxonomy = JSON.parse(fs.readFileSync(TAXONOMY_PATH, 'utf-8'));
function categoryLabelFor(category) {
  const raw = taxonomy[category]?.label ?? category;
  return raw.replace(/^\d+\.\s*/, '').replace(/-/g, ' ');
}

// Cap the shipped pool so the client fetch stays small — this is a
// decorative homepage widget, not primary content, and doesn't need to
// carry every QuickCheck/FAQ on the site. Re-running this script reshuffles
// which slice of the real pool gets shipped.
const MAX_POOL_SIZE = 250;

function readRegistryImportPaths() {
  const text = fs.readFileSync(REGISTRY_PATH, 'utf-8');
  const paths = [];
  const importRe = /from\s+"(\.\/[^"]+)"/g;
  let m;
  while ((m = importRe.exec(text))) paths.push(m[1]);
  return paths;
}

function categoryAndSlugFromImportPath(importPath) {
  // e.g. "./01-general-science-facts/chemistry/acids-bases-and-ph"
  const parts = importPath.replace(/^\.\//, '').split('/');
  const rawCategory = parts[0];
  const category = rawCategory.replace(/^(\d+[.\d]*)-/, '');
  const slug = parts[parts.length - 1];
  return { category, slug };
}

/** Evaluate a syntactic literal AST node into a plain JS value. Returns
 *  `undefined` for anything not a plain literal (JSX children, computed
 *  expressions, identifiers) — callers must treat undefined as "skip". */
function literalToJs(node) {
  if (!node) return undefined;
  if (ts.isParenthesizedExpression(node)) return literalToJs(node.expression);
  if (ts.isStringLiteralLike(node)) return node.text;
  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (ts.isArrayLiteralExpression(node)) {
    const out = [];
    for (const el of node.elements) {
      const v = literalToJs(el);
      if (v !== undefined) out.push(v);
    }
    return out;
  }
  if (ts.isObjectLiteralExpression(node)) {
    const obj = {};
    for (const prop of node.properties) {
      if (!ts.isPropertyAssignment(prop)) continue;
      const key = ts.isIdentifier(prop.name) || ts.isStringLiteralLike(prop.name)
        ? prop.name.text
        : undefined;
      if (!key) continue;
      obj[key] = literalToJs(prop.initializer);
    }
    return obj;
  }
  return undefined;
}

function getJsxAttrs(node) {
  if (ts.isJsxSelfClosingElement(node)) return node.attributes;
  if (ts.isJsxElement(node)) return node.openingElement.attributes;
  return undefined;
}

function getTagName(node) {
  const tag = ts.isJsxSelfClosingElement(node) ? node.tagName : ts.isJsxElement(node) ? node.openingElement.tagName : undefined;
  return tag && ts.isIdentifier(tag) ? tag.text : undefined;
}

function getAttrValue(attrs, name) {
  for (const attr of attrs.properties) {
    if (!ts.isJsxAttribute(attr)) continue;
    if (attr.name.text !== name) continue;
    if (!attr.initializer) return undefined;
    if (ts.isJsxExpression(attr.initializer)) return literalToJs(attr.initializer.expression);
    if (ts.isStringLiteral(attr.initializer)) return attr.initializer.text;
    return undefined;
  }
  return undefined;
}

function extractPostTitle(sourceFile) {
  let title;
  sourceFile.forEachChild((node) => {
    if (title) return;
    if (!ts.isVariableStatement(node)) return;
    for (const decl of node.declarationList.declarations) {
      if (!ts.isIdentifier(decl.name) || decl.name.text !== 'metadata') continue;
      if (!decl.initializer || !ts.isObjectLiteralExpression(decl.initializer)) continue;
      const meta = literalToJs(decl.initializer);
      if (meta && typeof meta.title === 'string') title = meta.title;
    }
  });
  return title;
}

function extractFromFile(absPath, category, slug) {
  const text = fs.readFileSync(absPath, 'utf-8');
  const sourceFile = ts.createSourceFile(absPath, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const postTitle = extractPostTitle(sourceFile) ?? slug.replace(/-/g, ' ');
  const href = `/${category}/${slug}`;
  const categoryLabel = categoryLabelFor(category);
  const entries = [];
  let quickCheckIdx = 0;
  let faqIdx = 0;

  function visit(node) {
    const tag = getTagName(node);
    if (tag === 'QuickCheck' || tag === 'FAQBlock') {
      const attrs = getJsxAttrs(node);
      if (attrs) {
        if (tag === 'QuickCheck') {
          const question = getAttrValue(attrs, 'question');
          const options = getAttrValue(attrs, 'options');
          if (
            typeof question === 'string' &&
            Array.isArray(options) &&
            options.length >= 2 &&
            options.every((o) => o && typeof o.text === 'string' && typeof o.explanation === 'string') &&
            options.some((o) => o.correct === true)
          ) {
            entries.push({
              id: `${category}/${slug}#qc-${quickCheckIdx++}`,
              type: 'quickcheck',
              question,
              options,
              category,
              categoryLabel,
              slug,
              postTitle,
              href,
            });
          }
        } else {
          const items = getAttrValue(attrs, 'items');
          if (Array.isArray(items)) {
            for (const item of items) {
              if (item && typeof item.question === 'string' && typeof item.answer === 'string') {
                entries.push({
                  id: `${category}/${slug}#faq-${faqIdx++}`,
                  type: 'faq',
                  question: item.question,
                  answer: item.answer,
                  category,
                  categoryLabel,
                  slug,
                  postTitle,
                  href,
                });
              }
            }
          }
        }
      }
    }
    node.forEachChild(visit);
  }
  visit(sourceFile);
  return entries;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function main() {
  const importPaths = readRegistryImportPaths();
  let scanned = 0;
  let allEntries = [];

  for (const importPath of importPaths) {
    const absPath = path.join(POSTS_DIR, `${importPath.replace(/^\.\//, '')}.tsx`);
    if (!fs.existsSync(absPath)) continue;
    const { category, slug } = categoryAndSlugFromImportPath(importPath);
    scanned++;
    allEntries = allEntries.concat(extractFromFile(absPath, category, slug));
  }

  const pool = shuffle(allEntries).slice(0, MAX_POOL_SIZE);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(pool));

  console.log(
    `generate-question-pool: scanned ${scanned} posts, found ${allEntries.length} real QuickCheck/FAQ entries, ` +
    `shipped ${pool.length} in ${path.relative(ROOT, OUTPUT_PATH)}.`
  );

  writeArticleQuizzes(importPaths, allEntries);
}

/**
 * Per-article quiz data for the end-of-article "Test yourself" block
 * (src/components/TestYourself.tsx, wired in [category]/[slug]/page.tsx).
 * Only multiple-choice QuickChecks qualify — FAQ items have no options.
 * Also writes a coverage audit so posts with too few extractable questions
 * can be fixed (see the content skills' "Test yourself" rule).
 */
function writeArticleQuizzes(importPaths, allEntries) {
  const byPost = {};
  for (const importPath of importPaths) {
    const parts = importPath.replace(/^\.\//, '').split('/');
    const { category, slug } = categoryAndSlugFromImportPath(importPath);
    const subtopic = parts.length >= 3 ? parts[1] : null;
    byPost[`${category}/${slug}`] = { subtopic, title: null, questions: [] };
  }
  for (const e of allEntries) {
    if (e.type !== 'quickcheck') continue;
    const key = `${e.category}/${e.slug}`;
    if (!byPost[key]) continue;
    byPost[key].title = e.postTitle;
    byPost[key].questions.push({
      question: e.question,
      options: e.options.map((o) => ({ text: o.text, correct: o.correct === true, explanation: o.explanation })),
    });
  }

  const outDir = path.join(ROOT, 'src', 'content', 'generated');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'article-quizzes.json'), JSON.stringify(byPost));

  const counts = { zero: [], one: [], twoPlus: 0 };
  for (const [key, v] of Object.entries(byPost)) {
    if (v.questions.length === 0) counts.zero.push(key);
    else if (v.questions.length === 1) counts.one.push(key);
    else counts.twoPlus++;
  }
  fs.writeFileSync(
    path.join(outDir, 'quiz-coverage.json'),
    JSON.stringify({ posts: Object.keys(byPost).length, twoPlus: counts.twoPlus, one: counts.one, zero: counts.zero }, null, 1)
  );
  console.log(
    `generate-question-pool: article quizzes for ${Object.keys(byPost).length} posts — ` +
    `${counts.twoPlus} with 2+ questions, ${counts.one.length} with 1, ${counts.zero.length} with 0 ` +
    `(see src/content/generated/quiz-coverage.json).`
  );
}

main();
