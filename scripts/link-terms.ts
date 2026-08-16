/**
 * Glossary auto-linker.
 *
 * Runs as a build step (see package.json: "prebuild") after markdown
 * parsing and before HTML render. For each post body:
 *   1. Loads /content/terms.json — a flat map of { term: "{category}/{slug}" }.
 *   2. Finds the FIRST case-insensitive mention of each known term in the
 *      post body (excluding the post's own term, headings, and any text
 *      already inside a markdown link).
 *   3. Wraps that first mention in a special `[[term|category/slug]]`
 *      marker that MDXRenderer turns into a <TermLink href="/category/slug">.
 *
 * Only the first mention per post is linked — repeated linking of the
 * same term in one entry is noisy and looks automated rather than curated.
 *
 * Term values MUST be "{category}/{slug}", not a bare slug — a bare
 * filename isn't globally unique once posts live in nested topic/
 * subtopic folders (see lib/content.ts's identity notes).
 */

import fs from 'node:fs';
import path from 'node:path';

interface TermsMap {
  [term: string]: string; // "{category}/{slug}"
}

const TERMS_PATH = path.join(process.cwd(), 'content', 'terms.json');

function loadTerms(): TermsMap {
  const raw = fs.readFileSync(TERMS_PATH, 'utf-8');
  return JSON.parse(raw) as TermsMap;
}

/** Escapes a string for safe use inside a RegExp. */
function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * @param body raw markdown body
 * @param currentPostRef this post's own "{category}/{slug}" — prevents
 *        a post from auto-linking to itself
 */
export function autoLinkTerms(body: string, currentPostRef: string): string {
  const terms = loadTerms();

  // Longest term first, so "compound interest" matches before "interest".
  const sortedTerms = Object.keys(terms).sort((a, b) => b.length - a.length);

  let result = body;
  const alreadyLinked = new Set<string>();

  for (const term of sortedTerms) {
    const ref = terms[term];
    if (ref === currentPostRef) continue; // never self-link
    if (alreadyLinked.has(term.toLowerCase())) continue;

    // Skip text already inside [..](..) or [[..]] markers, and skip
    // headings (lines starting with #).
    const pattern = new RegExp(
      `(?<!\\[)(?<!\\]\\()\\b(${escapeRegExp(term)})\\b(?!\\]|\\))`,
      'i'
    );

    const match = result.match(pattern);
    if (match && match.index !== undefined) {
      const lineStart = result.lastIndexOf('\n', match.index) + 1;
      const isHeading = result.slice(lineStart, lineStart + 1) === '#';
      if (!isHeading) {
        const matchedText = match[0];
        result =
          result.slice(0, match.index) +
          `[[${matchedText}|${ref}]]` +
          result.slice(match.index + matchedText.length);
        alreadyLinked.add(term.toLowerCase());
      }
    }
  }

  return result;
}
