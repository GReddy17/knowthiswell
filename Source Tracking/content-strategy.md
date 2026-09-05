# Content strategy (authoritative — read before any automated content run)

_Adopted 2026-09-05. Supersedes the "20 posts/day across 43 categories" rollout._

Full reasoning: `Source Tracking/growth-plan.html`.

## Why this changed

720 posts, ~293 indexed, average Google position 66, ~4 clicks in 28 days,
traffic trending down. That is what a broad, fast, automated content push looks
like after Google's helpful-content and scaled-content updates — the volume
works against the domain (crawl budget spread thin, no topical authority
anywhere). The only thing in the data that worked is two counterintuitive
science Shorts (~1,000 and ~750 views, zero promotion).

So: stop spreading thin, go deep in two clusters, and feed the short-form video
surfaces that distribute to new accounts for free.

## The two active streams

### 1. Pillar — Counterintuitive everyday science (daily)

One surprising, everyday, physical fact per day, explained misconception-first.
Lives in `src/content/posts/01-general-science-facts/`. Queue of fact ideas:
`Source Tracking/pillar-topics.md`.

- ~700–1,000 words, always opens by naming the wrong intuition, then the mechanism.
- Full `author-voice-guide.md` structure still applies (ModeToggle, worked
  examples + QuickCheck, FAQ, KeyTakeaways/MistakeList/MisconceptionCallout/
  ActionChecklist, a real SVG diagram, real institutional sources).
- Frontmatter must set `pillar: true` and `videoQueue: true` — the video
  pipeline reads `videoQueue` to know a Short/TikTok is owed for this post.
- `seeAlso` (3–4) + ≥2 inline `<TermLink>` as before.

### 2. Workhorse — Technology Basics (2×/week, search-first)

Two genuinely deep articles a week (target Mon + Thu), resuming the existing
100-post Technology Basics plan
(`Source Tracking/technology-basics-subtopics.md`). Evergreen "what is X"
search intent — no video owed. Heavier interlinking than the pillar posts.

### Everything else: parked

Categories 14–43 stop receiving new content. Not deleted — parked. Their
`coming-soon.tsx` stays. Thaw a category later, from authority, only if the
data asks for it. `category-rollout-status.md` keeps the old table for
reference but is no longer a live work queue.

## Cadence summary

| Day | Output |
|-----|--------|
| Every day | 1 pillar post (+ its Short/TikTok/Reel owed to the video pipeline) |
| Mon, Thu | + 1 Technology Basics deep article |
| Every run | Internal-linking pass (unchanged from before) |

Roughly 7 pillar + 2 tech = **9 posts/week**, down from ~140/week.

## Production gate

During the transition, automated content runs push to a branch, not `main`.
Production deploys only on a reviewed merge. (Old routine pushed straight to
`main` — that is suspended. See `daily-content-routine.draft.md` for the
replacement prompt, pending review.)

## What to stop measuring / start measuring

Stop: total post count, raw search impressions, "categories launched".
Start: indexed-page count and the "discovered-not-indexed" trend, average
position for striking-distance terms (5–20), Shorts + TikTok views/day,
subscribers/followers per week, Google Discover impressions.
