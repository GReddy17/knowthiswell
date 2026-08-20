---
name: daily-marketing
description: Daily traffic-growth check-in for KnowThisWell — reads real view/visitor data from Vercel Analytics and Search Console, then drafts that day's human-voiced content candidates for the user's personal X/Twitter, Reddit, and Quora accounts. Never posts on its own. Use when the user says "do marketing", "marketing for today", "traffic pull", or similar.
---

# Daily marketing check-in

This skill runs once a day when the user asks for it. Its job is to (1) tell the user honestly where traffic actually stands, and (2) hand them a short list of ready-to-personalize content, never to post anything itself.

## Non-negotiable rule

**Never type, submit, or post content into any logged-in X/Twitter, Reddit, or Quora session on the user's behalf**, even when technically possible (session already authenticated, no credential entry needed). These are the user's **personal accounts** (see memory `social_accounts_personal`), and "human touch, not AI-generated" was the explicit brief that started this whole effort — an AI auto-posting scripted content is exactly the failure mode being avoided, regardless of how good the draft is. Always output drafts in chat for the user to copy, personalize, and post themselves.

## Step 1 — Check real numbers

1. Vercel Analytics: navigate to `https://vercel.com/sirisha2709/knowthiswell/analytics`, read Visitors / Page Views for the last 24h and last 7 days. This is the actual "views per day" number the user is tracking toward the 1,000/day milestone.
2. Search Console: check `https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain%3Aknowthiswell.com` for clicks/impressions trend — a leading indicator even before Analytics shows much.
3. If a metric hasn't loaded yet (new data always lags ~a day), say so plainly rather than presenting a stale/zero number as current.

Report these numbers first, plainly, before anything else — no burying a flat week under enthusiasm.

## Step 2 — Check the posting log

Read `Source Tracking/marketing-log.md` (create it on first run if missing — see template below). This prevents repeating the same post/topic/platform combination and shows what's already gone out.

## Step 3 — Draft today's candidates

Pull from the site's actual content (`Source Tracking/phase1-subtopics.md` and the 300 live posts under `src/content/posts/01-general-science-facts/` etc. — check `content/taxonomy.json` for which categories are actually live before drafting from a category that's still coming-soon).

For each platform selected that day, draft 1-2 candidates:

- **X/Twitter**: a single fact or a short thread (3-5 tweets), first-person/conversational voice, not a copy-paste of the site's reference-page tone (no "Key Takeaways" structure, no FAQ format). Vary the opening every time — don't let every post start the same way (that's the single biggest tell of scripted/bot content).
- **Reddit**: only draft for a subreddit + likely-question pattern (see the channel list already given to the user) — do NOT invent a specific live thread to reply to unless one was actually found by browsing that day. A real answer needs a real question underneath it.
- **Quora**: same constraint as Reddit — draft against a realistic question pattern, not a fabricated specific one, unless a real live question was found.

Keep the 9:1 ratio principle in mind for Reddit/Quora — most days should be "no link, just a genuinely good answer" rather than every answer carrying a link back to the site.

## Step 4 — Occasional-channel reminder (not every day)

Once a month or so, remind the user (don't push every single day — this gets ignored/annoying if repeated):
- **IndieHackers**: good fit for "building in public" progress posts — better ongoing fit than Hacker News for a content site.
- **Hacker News**: only as a single one-time "Show HN" launch post, framed around the build/pipeline story, not the content. Never resubmit — repeated submissions from the same domain get flagged as spam by HN's own community.

## Step 5 — Log what actually got posted

After the user tells you what they actually posted (only after they confirm, never assume), append a line to `Source Tracking/marketing-log.md`:

```
- 2026-08-20 | X | [1-line topic] | posted
- 2026-08-20 | Reddit r/askscience | [1-line topic] | drafted, not posted
```

## marketing-log.md template (create if missing)

```markdown
# KnowThisWell Marketing Log

Tracks what's been drafted/posted per platform to avoid repeats. Updated by the daily-marketing skill.

| Date | Platform | Topic | Status |
|------|----------|-------|--------|
```

## Milestone check

Once Page Views crosses ~1,000/day sustained (not a single spike day), flag this explicitly to the user — that was the threshold they set for revisiting whether X stays on the personal account or moves to a dedicated brand account, and for reconsidering paid ads now that there's real conversion data to evaluate against.
