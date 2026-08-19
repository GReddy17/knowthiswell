# KnowThisTopic — Site Rules & Objectives

_Last updated: 2026-08-19_

This file is the standing reference for how KnowThisTopic content should be created, reviewed, and expanded. Any AI assistant (Claude, Claude Code, NotebookLM prep) or human contributor working on this site should follow these rules by default, without needing to be reminded per task.

---

## 1. Purpose

KnowThisTopic is a large-scale **practical knowledge reference site** — the digital equivalent of a "Pedda Bala Siksha" for 2026: a single place someone can go to get a clear, trustworthy, no-fluff explanation of practical, everyday, and foundational topics, written for both kids and adults.

The site is not a blog, not a news site, and not a course platform. Every entry should read like a well-written reference/encyclopedia page — something a reader trusts, skims quickly, and can act on.

## 2. Target audience

- **Students / kids** — general knowledge, foundational facts, exam-adjacent content (Phase 1–2 topics)
- **Adults / general public** — practical life skills, finance, tech, career, health-adjacent basics (Phase 3+ topics)
- **Search-driven readers** — people arriving via Google/AI Overviews with a specific question, not necessarily site loyalists. Every entry must stand alone and answer the query that brought them there.

## 3. Core objectives

1. **Be the clearest explanation on the internet for a given topic** — not the longest, not the most SEO-stuffed, the clearest.
2. **Scale to 500+ posts across 25–27 core topics** without sacrificing depth — depth and scale are both required, not a tradeoff.
3. **Be genuinely useful without reading a paragraph** — Key Takeaways, diagrams, and checklists exist so a skimmer still leaves informed.
4. **Rank and get cited by AI systems (Google AI Overviews, ChatGPT, etc.)** — structured FAQ content, clear Q&A pairs, and schema markup are not optional extras, they're core to the content strategy.
5. **Convert into video** — every entry should be written well enough that it can be fed into NotebookLM and produce a coherent 5–10 min explainer without additional scripting work.
6. **Build compounding trust** — sources, author credential lines, and a visible "last reviewed" date signal this is maintained, not abandoned content.

## 4. Non-negotiable content depth rules

These apply to every entry before it can be marked `draft: false`:

- **Both `ModeToggle` variants (plain + detailed) must be fully written.** Detailed is not a reworded version of plain — it must add mechanism/reasoning, at least one edge case, and precise terminology (added to `glossary[]` if introduced).
- **Minimum 3 worked examples**, structured as: baseline case → edge/variation case → real-world applied case.
- **Minimum 4 FAQ questions**, phrased as real search queries (researched via People Also Ask / autocomplete / keyword tools), not invented textbook questions.
- **Key Takeaways, Common Mistakes, Misconceptions, and Action Checklist must all be populated** — not left as placeholders.
- **At least one diagram or visual** where the topic has any process, comparison, or relationship that benefits from being seen rather than read.
- **Sources are required.** No entry ships without at least one credible, linkable source in `sources[]`.
- Entries not meeting all of the above stay `draft: true` and are excluded from publishing, sitemap inclusion, and NotebookLM video conversion.

## 5. Tone & voice rules

- Direct, plain-language first. No filler intros ("In today's world, more than ever...").
- No fear-based or clickbait framing — this is a reference site, not engagement-bait content.
- Avoid absolute claims on YMYL-adjacent topics (health, legal, finance) — state facts, cite sources, avoid giving direct personal advice ("consult a professional for your specific situation" where relevant).
- Consistent author credential line across entries for E-E-A-T — do not vary author identity per post without reason.

## 6. SEO & AI-visibility rules

- Every entry needs a unique `excerpt` (under ~155 characters) written for meta description use — not a copy-paste of the first sentence.
- FAQ blocks must emit `FAQPage` JSON-LD structured data.
- Internal linking via `seeAlso[]` is required — no orphaned entries with zero internal links in or out.
- Target one primary keyword/query per entry; don't try to rank one page for multiple unrelated queries.
- `lastReviewed` must be updated any time factual content changes — this date is a trust signal and should never go stale silently.

## 7. Video (YouTube / NotebookLM) pipeline rules

- Only entries with `draft: false` (i.e., meeting Section 4 in full) may be sent to NotebookLM for video generation.
- Track status per entry using frontmatter:
  ```yaml
  youtubeStatus: "not-started"   # not-started | scripted | generated | published
  youtubeUrl: ""
  ```
- NotebookLM should be fed the full rendered entry (frontmatter stripped, component tags flattened to plain text) as its source — the entry text itself is the script source, not a separately written script.
- Diagrams/visuals from `DiagramBlock` should be manually overlaid or reproduced in the video edit pass — NotebookLM's native visuals will not know the site's specific SVGs.
- Maintain a consistent intro/outro branding wrapper across all published videos.

## 8. Topic structure

Topics are organized into 5 phases based on search volume, competition, and content-production ease. New topics should be evaluated against this same framework — search demand, evergreen-ness, ease of accurate batch production — before being added to a phase.

### Phase 1 — Kids & General Knowledge (start here)
1. General Science Facts
2. Math & Numbers
3. Geography & World Facts
4. History Timeline Facts
5. Language & Vocabulary
6. Festivals & Culture

### Phase 2 — Everyday Practical Knowledge (bridges kids/adults)
7. Units & Measurement Conversions
8. General Awareness & Current Affairs Basics
9. Health & Body Basics
10. Environment & Nature

### Phase 3 — Adult Practical Life Skills
11. Personal Finance Basics
12. Legal & Documentation How-Tos
13. Technology Basics
14. Career & Study Skills
15. Home & DIY Knowledge

### Phase 4 — Higher-competition, high-value (build once domain authority is established)
16. Health & Wellness Deep Dive
17. Technology Deep Dives
18. Business & Entrepreneurship Basics
19. Travel & Local Guides
20. Trivia & Fun Facts

### Phase 5 — Advanced, Niche & Monetization-Focused (long-term)
21. Investing & Markets Deep Dive
22. Government Schemes & Benefits
23. Competitive Exam Prep
24. Professional Skills & Certifications
25. AI & Future Tech Literacy
26. Digital Safety & Privacy
27. Life Skills & Etiquette

**Sequencing note:** Phase 1–2 come first because they mirror the core reference-content spirit — dense, factual, low risk of being "wrong" in a costly way, and evergreen search demand. Phase 3 follows once a content pipeline and initial domain authority exist. Phase 4 is deprioritized due to higher competition or liability (health, business). Phase 5 topics (#21 Investing, #22 Schemes) require ongoing maintenance since policy/market content changes over time — `lastReviewed` discipline matters most here. #23 (Competitive Exam Prep) and #25 (AI & Future Tech Literacy) can be pulled forward earlier than the rest of Phase 5 if quick wins are wanted — #23 pairs naturally with QuizQuery for content/traffic sharing, and #25 currently has unusually low competition relative to its search volume. #26 (Digital Safety & Privacy) and #27 (Life Skills & Etiquette) read like natural Phase 2 candidates by subject matter, but are numbered/phased here to match `content/taxonomy.json` — the live site's actual source of truth for phase and ordering. If you want them pulled forward, update `taxonomy.json` first and this file second, in that order, so they never drift apart again.

## 9. What NOT to do

- Do not publish an entry just to hit a volume target — depth rules in Section 4 override any publishing-cadence goal.
- Do not give direct medical, legal, or financial advice phrased as personal recommendation — inform, cite, and point to professional consultation where relevant.
- Do not let "detailed" mode become jargon-for-jargon's-sake — it should be precise, not needlessly complex.
- Do not skip source citation on any factual claim, even ones that feel like "common knowledge."
- Do not let entries go stale — `lastReviewed` should be revisited periodically, especially for policy/finance/schemes-related topics (Phase 5) that change over time.
