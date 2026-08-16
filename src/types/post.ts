/**
 * Post frontmatter schema.
 * Extends the base architecture doc's frontmatter with the fields
 * needed for encyclopedic trust signals and cross-linking:
 *  - summary        (distinct from `excerpt`; the on-page dek/definition)
 *  - lastReviewed    (separate from `updated` — substantive fact-check date)
 *  - sources[]        (citation list, required for YMYL categories)
 *  - seeAlso[]        (curated related-entry slugs; falls back to
 *                      tag/subtopic overlap at build time if omitted)
 *  - subtopic          (adds a third breadcrumb level: Topic > Subtopic > Entry)
 *  - readingTimeMinutes (computed at build time, not authored by hand)
 */

/**
 * Category is now a dynamic string, not a hardcoded union — topics
 * auto-discover from the content/posts/ folder structure (see
 * lib/content.ts's recursive loader) rather than being enumerated here.
 * Friendly labels live in content/taxonomy.json, with a fallback to the
 * raw folder name if a topic has no registered label yet.
 */
export type Category = string;

export interface SourceRef {
  label: string;   // "Investor.gov — Compound Interest Calculator"
  url: string;
}

export interface AuthorRef {
  slug: string;      // matches /content/authors/{slug}.md
  name: string;
  credentialLine: string; // "Founder, KnowThisWell" — short, factual, not marketing copy
}

export interface PostFrontmatter {
  title: string;
  /** Required only for root-level posts (content/posts/post.md) — for
   *  any post inside a topic folder, the category is derived from the
   *  folder path and this field is ignored if present (see
   *  lib/content.ts's loadAll() for the enforced precedence). */
  category?: Category;
  subtopic?: string;          // e.g. "investing-basics" — drives 3-tier breadcrumb
  tags: string[];
  date: string;                // ISO date, original publish
  updated: string;             // ISO date, any edit (typos included)
  lastReviewed?: string;       // ISO date, substantive fact re-check — surfaced in UI
  excerpt: string;             // meta description / card blurb, ~155 chars
  summary: string;             // on-page italic dek — the "definitional lede"
  sources?: SourceRef[];       // required in CI lint for YMYL categories
  /**
   * Related-entry references, in "{category}/{slug}" format — e.g.
   * "money-personal-finance/compound-interest-explained" — NOT bare
   * slugs. A bare slug isn't globally unique once posts live in nested
   * topic/subtopic folders (two different categories can each have a
   * file named intro.md); category/slug matches the actual URL and is
   * guaranteed unique. Falls back to tag/subtopic overlap if omitted.
   */
  seeAlso?: string[];
  author: AuthorRef;
  draft?: boolean;
}

export interface PostMeta extends Omit<PostFrontmatter, 'category'> {
  /** Unlike PostFrontmatter.category (optional, since it's often
   *  folder-derived rather than authored), category is ALWAYS resolved
   *  to a concrete string by the time a PostMeta exists — loadAll() in
   *  lib/content.ts guarantees this before returning any post. */
  category: Category;
  slug: string;
  absPath: string; // Path on disk for on-demand reading
  readingTimeMinutes: number;  // computed at build time from word count
  headings: { id: string; text: string; depth: 2 | 3 }[]; // for TocRail
}
