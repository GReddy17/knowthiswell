# Content Authoring Guide

Content is authored as **`.tsx` React components**, not markdown. This
was a deliberate architecture decision, not an accident — Next.js/
webpack needs statically-analyzable imports for code to bundle
correctly, and a plain-text markdown pipeline (tried earlier) became
too complex to render reliably at this content volume. If you're
looking at an older doc or AI-generated instructions describing YAML
frontmatter in a `.md` file, that's stale — this is the real format.

## 1. File naming & organization

- **Category folders**: `NN-category-slug` (e.g. `01-general-science-facts`).
  The number is for YOUR ordering convenience in the file tree only —
  it is stripped automatically and never appears in the public URL.
- **Subtopic-cluster subfolders** (optional, one level deep): once a
  category has enough posts to group, nest them under a subfolder named
  for the cluster (e.g. `01-general-science-facts/physical-science/`,
  `01-general-science-facts/chemistry/`). This mirrors the clusters in
  `Source Tracking/phase1-subtopics.md` and is purely a file-tree
  convenience — `scripts/generate-post-registry.mjs` scans recursively,
  so posts work identically whether flat in the category folder or
  nested one level under a cluster subfolder. The cluster subfolder name
  has no effect on routing; it's the post's own `subtopic:` frontmatter
  field that actually drives the on-site subtopic grouping (Knowledge
  Map, Library sidebar, category hub sections) — keep the folder name
  and the `subtopic:` value in sync (slugified cluster name) so the
  file tree matches what the site displays.
- **Files**: plain `slug-name.tsx` — **no leading number**, no `:`,
  `'`, em-dashes, or other special characters. Use only lowercase
  letters, numbers, and hyphens. (`scripts/generate-post-registry.mjs`
  will warn loudly at build time if it finds a file that breaks this.)
- A category with zero real content yet should contain a single
  `coming-soon.tsx` placeholder file directly in the category folder
  (not inside a cluster subfolder) — see the template below.

## 2. Required file structure

Every post file exports two things: a `metadata` object (typed
`PostFrontmatter`) and a default-exported `Post()` component.

```tsx
import React from 'react';
import { PostFrontmatter } from '@/types/post';
import {
  KeyTakeaways,
  ModeToggle,
  FootnoteAside,
  QuickCheck,
  DiagramBlock,
  MistakeList,
  MisconceptionCallout,
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Exact Title of the Entry",
  category: "general-science-facts",   // must match the containing folder, prefix stripped
  subtopic: "optional-grouping-slug",  // optional
  tags: ["tag1", "tag2"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Short ~155-char summary for search results and cards.",
  summary: "The definitional lede — appears in italics under the title.",
  sources: [
    { label: "Source Name", url: "https://..." },
  ],
  // IMPORTANT: always "category/slug", never a bare slug — a bare
  // filename isn't unique once two categories both have e.g. "intro.tsx".
  seeAlso: [
    "general-science-facts/forces-and-motion",
  ],
  glossary: [
    { term: "Term", definition: "Plain-language definition." },
  ],
  author: {
    slug: "hari-knowthiswell",
    name: "Hari",
    credentialLine: "Founder, knowthiswell",
  },
  youtubeStatus: "not-started",
  youtubeUrl: "",
  draft: false,
};

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">
        Key Takeaways
      </h2>
      <KeyTakeaways points={["First takeaway.", "Second takeaway."]} />

      {/* ... body sections using the components above ... */}
    </>
  );
}
```

## 3. Cross-linking rules

- `TermLink href="/category/slug"` and `seeAlso: ["category/slug"]`
  must **always** use the clean, prefix-stripped category and slug —
  the same values that appear in the live URL, never the folder/file
  names on disk (which may still carry an ordering number).
- After adding, renaming, or removing any post, regenerate the
  registry — **never hand-edit `src/content/posts/index.ts`**:

  ```
  node scripts/generate-post-registry.mjs
  ```

  This also auto-syncs each category's `active`/`coming-soon` status in
  `content/taxonomy.json` to the real post count, so that flag can't
  drift out of sync with actual content the way it did before.

## 4. Before committing new content

- [ ] Filename has no leading number, no `:`/`'`/em-dash
- [ ] `category` in `metadata` matches the containing folder (prefix stripped)
- [ ] Every `seeAlso` and `TermLink href` uses `category/slug` format, pointing at posts that actually exist
- [ ] Ran `node scripts/generate-post-registry.mjs` after the change
- [ ] `npm run build` succeeds locally before pushing
