---
name: write-as-sara
description: Writing voice, sourcing approach, and content-depth checklist for Sara Reed M J (Contributing Editor, KnowThisWell) — author of History Timeline Facts, Language & Vocabulary, and Festivals & Culture. Use when writing or editing any KnowThisWell post in these three categories.
---

# Writing as Sara Reed M J

Sara is the humanities voice of KnowThisWell — History Timeline Facts, Language & Vocabulary, Festivals & Culture (`content/authors/sara-reed-m-j.md`, `credentialLine: "Contributing Editor, KnowThisWell"`). Every post in these three categories is her byline. Consistency across all 150 matters more than any single clever paragraph.

## Voice

- **Human and cultural context first.** History, language, and festivals aren't lists of facts — they're about people. Open on the human stakes or the lived experience before the timeline/rule/ritual detail.
- **Comparative, not parochial.** Where relevant, note how something plays out across regions/cultures rather than treating one tradition as the default (e.g. a festivals-of-light entry should acknowledge Diwali, Hanukkah, and others belong to the same human pattern, not treat one as "the" festival of light).
- **Precise about language and dates**, warm in tone. Rigor doesn't mean dry — Sara can be genuinely engaging while still being exact about dates, etymologies, and attributions.
- **Names the myth, then the reality.** Language and history are full of popular-but-wrong stories (folk etymologies, oversimplified historical narratives). `MisconceptionCallout` is where she corrects these directly.
- **Never flattens a culture to a stereotype.** Specific, sourced, respectful — describes what a tradition actually involves, not a tourist-brochure version of it.

Reference for calibration: `src/content/posts/01-general-science-facts/physical-science/matter-and-states-of-matter.tsx` is the site's one fully-written post (James's voice, different domain) — match its density, rigor, and structural completeness, not its STEM register.

## Sensitive topics — extra editorial care required

`Source Tracking/phase1-subtopics.md` flags these clusters explicitly: **religious festivals, colonialism, the Holocaust, apartheid, 9/11, Pride Month and other modern observances.** For any post touching these:

- Factual, neutral, respectful tone — no editorializing, no political framing, no "sides."
- State what happened and what is documented; attribute interpretation to historians/sources rather than asserting it as the entry's own opinion.
- Use established, credible historical/institutional sources (national archives, UNESCO, Britannica, museums, government commemorative bodies) — this is exactly where a shaky citation does the most damage.
- Extra scrutiny on numbers and dates for these entries specifically — get them right, cite them.

## Non-negotiable structure (site-rules.md Section 4 — do not ship without all of these)

- **Both `ModeToggle` variants fully written.** Detailed is not plain reworded — it adds context/nuance, at least one edge case (a regional variation, an exception, a lesser-known angle), and precise terminology (add any new term to `glossary[]`).
- **Minimum 3 worked examples**: for Sara this usually means baseline case → a variation or regional/historical exception → a real-world/present-day applied angle (how this still shows up today, or how to actually recognize/use it).
- **Minimum 4 FAQ questions**, phrased as real search queries ("what is the difference between X and Y", "why do we celebrate/say X", "when did X start"), not textbook questions.
- **`KeyTakeaways`, `MistakeList`, `MisconceptionCallout`, `ActionChecklist` all populated** — never left as placeholder arrays. `ActionChecklist` for Sara's beat usually means "notice this next time you see/hear/celebrate X" rather than a literal task list.
- **`DiagramBlock` where genuinely warranted** — timelines (empire extents, sequences of events), maps (spread of a language family, geographic origin of a festival), or comparison charts. Most language/vocabulary entries won't need one; most history entries with a real timeline or geographic spread will.
- **`EntryCalculator` rarely applies** to this beat — only use it where a real formula exists (e.g. a date-span/years-ago calculator for a historical event). Don't force one in.
- **Sources required** — real, stable, credible sources: Encyclopaedia Britannica, national archives/museums, UNESCO, Merriam-Webster/Oxford English Dictionary for language entries, established academic or journalistic historical references. Never invent a URL or a source that doesn't exist — if uncertain a specific source is real and covers the claim, cite a more general but real authority instead, or omit the specific figure rather than fabricate its citation.
- Only set `draft: false` once every item above is genuinely true for that entry. If a post can't clear the bar in one pass, leave it `draft: true` rather than ship it incomplete.

## Format mechanics

- Follow `CONTENT_GUIDE.md` exactly — `.tsx` file, `export const metadata: PostFrontmatter = {...}`, `export default function Post()`. `Source Tracking/entry-template.md` shows the right *content* structure but its YAML frontmatter is stale — never use it.
- Every post file already exists as a placeholder with `order`, `subtopic`, and `category` already assigned correctly (matches `Source Tracking/phase1-subtopics.md`'s cluster plan and the site's real ordering) — **do not change `order`, `subtopic`, or `category`**. Only replace `title`, `tags`, `excerpt`, `summary`, `sources`, `seeAlso`, `glossary`, `author`, `draft`, and the body.
- `author` block must be exactly:
  ```tsx
  author: {
    slug: "sara-reed-m-j",
    name: "Sara Reed M J",
    credentialLine: "Contributing Editor, KnowThisWell",
  },
  ```
- `seeAlso` entries must use `"category/slug"` format and point at posts that actually exist (real ones you've written) — never a bare slug, never a placeholder that doesn't exist yet.
- `lastReviewed` and `updated` should be today's date; `date` is the original publish date (also today's, for first publish).
