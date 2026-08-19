---
name: write-as-james
description: Writing voice, sourcing approach, and content-depth checklist for James H. Rivers (Founder, KnowThisWell) — author of General Science Facts, Math & Numbers, and Geography & World Facts. Use when writing or editing any KnowThisWell post in these three categories.
---

# Writing as James H. Rivers

James is the founder and STEM voice of KnowThisWell — General Science Facts, Math & Numbers, Geography & World Facts (`content/authors/james-h-rivers.md`, `credentialLine: "Founder, KnowThisWell"`). Every post in these three categories is his byline. Consistency across all 150 matters more than any single clever paragraph.

## Voice

- **Mechanism-first.** Don't just state a fact — explain *why* it's true. "Ice cools a drink better than cold water" is a fact; "because melting absorbs ~334 J/g of latent heat on top of ordinary temperature-difference cooling" is James.
- **Numbers, not vibes.** Wherever a claim can carry a real number (a rate, a formula, a measurement, a scale comparison), put the number in. James's readers trust him because he shows the arithmetic, not because he asserts confidently.
- **Direct, no throat-clearing.** No "In today's world..." or "Have you ever wondered...". Open on the concept itself.
- **Corrects intuition.** STEM topics are full of things that feel true but aren't (heavier objects don't fall faster; "cold" isn't a substance). Naming and correcting the intuitive-but-wrong belief is core to his voice — it's what `MisconceptionCallout` is for.
- **Practical landing.** Every entry ties back to something the reader can observe, calculate, or use — not abstract for its own sake.

Reference for calibration: `src/content/posts/01-general-science-facts/physical-science/matter-and-states-of-matter.tsx` is the one fully-written post in his voice today. Match its density and rigor, not its exact sentence patterns.

## Non-negotiable structure (site-rules.md Section 4 — do not ship without all of these)

- **Both `ModeToggle` variants fully written.** Detailed is not plain reworded — it adds mechanism, at least one edge case, and precise terminology (add any new term to `glossary[]`).
- **Minimum 3 worked examples**: baseline case → edge/variation case → real-world applied case. For James this almost always means real numbers running through a real calculation.
- **Minimum 4 FAQ questions**, phrased as real search queries ("how does X work", "why does Y happen", "is X the same as Y"), not textbook questions.
- **`KeyTakeaways`, `MistakeList`, `MisconceptionCallout`, `ActionChecklist` all populated** — never left as placeholder arrays.
- **At least one `DiagramBlock`** where the topic has a process, structure, comparison, or relationship that's genuinely clearer visually — a phase diagram, a force diagram, a cross-section, a map, a comparison chart. Don't force one where the topic is purely definitional (e.g. "Types of Numbers" doesn't need a diagram; "Forces & Motion" does).
- **`EntryCalculator` wherever a real formula exists** — this is James's strongest tool. Unit conversions, physics/chemistry formulas, math operations, geographic calculations (distance, scale) all qualify. If you add a `formula="newFormulaName"` prop, you must also add that formula to `FORMULAS` in `src/components/EntryCalculator.tsx` — a calculator pointing at a formula that doesn't exist silently shows "—" forever (this exact bug shipped once already).
- **Sources required** — real, stable, institutional sources appropriate to the claim: NASA, NOAA, USGS, NIST, National Geographic, Encyclopaedia Britannica, Royal Society of Chemistry, American Physical Society, Smithsonian, relevant government science/statistics agencies. Never invent a URL or a source that doesn't exist — if you're not certain a specific source is real and covers the claim, cite a more general but real authority instead, or omit the specific number rather than fabricate its citation.
- Only set `draft: false` once every item above is genuinely true for that entry. If a post can't clear the bar in one pass, leave it `draft: true` rather than ship it incomplete.

## Format mechanics

- Follow `CONTENT_GUIDE.md` exactly — `.tsx` file, `export const metadata: PostFrontmatter = {...}`, `export default function Post()`. `Source Tracking/entry-template.md` shows the right *content* structure but its YAML frontmatter is stale — never use it.
- Every post file already exists as a placeholder with `order`, `subtopic`, and `category` already assigned correctly (matches `Source Tracking/phase1-subtopics.md`'s cluster plan and the site's real ordering) — **do not change `order`, `subtopic`, or `category`**. Only replace `title`, `tags`, `excerpt`, `summary`, `sources`, `seeAlso`, `glossary`, `author`, `draft`, and the body.
- `author` block must be exactly:
  ```tsx
  author: {
    slug: "james-h-rivers",
    name: "James H. Rivers",
    credentialLine: "Founder, KnowThisWell",
  },
  ```
- `seeAlso` entries must use `"category/slug"` format and point at posts that actually exist (real ones you've written, or the one existing real post where topically relevant) — never a bare slug, never a placeholder that doesn't exist yet.
- `lastReviewed` and `updated` should be today's date; `date` is the original publish date (also today's, for first publish).
- Sensitive-adjacent edges even in STEM (evolution, climate change, health-adjacent biology topics) get factual, source-backed treatment — state the science, cite it, don't editorialize or hedge into vagueness.
