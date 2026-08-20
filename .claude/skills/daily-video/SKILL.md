---
name: daily-video
description: Generates one NotebookLM video overview per day from a live KnowThisWell post, reviews it, schedules it on YouTube at a good posting time, and closes the loop by linking the video back to the site post (and vice versa). Use when the user says "make today's video", "generate a video", "post to YouTube", or as part of a daily-marketing run.
---

# Daily video pipeline

Turns one already-published KnowThisWell post into a NotebookLM video overview and gets it live on YouTube, linked both directions with the source post. Runs once a day when asked.

## Before anything: check the accounts registry

Read `Source Tracking/accounts-registry.md` first. If the YouTube / NotebookLM row is still blank or unconfirmed, or the logged-in Google session doesn't match what's on file, **stop and ask the user to confirm/log in** — do not guess which Google account to use. If it's simply not logged in today, skip this run (log it in `Source Tracking/marketing-log.md` as `skipped - not logged in`) and continue with any other platforms that are ready; don't block the rest of the day's marketing run over this one channel.

## Step 1 — Pick the post

Pick one post that has `youtubeStatus: "not-started"` in its frontmatter, from a category that's actually live (check `content/taxonomy.json` for `status: "active"`). Prefer working through a category roughly in `order` sequence rather than jumping around, so coverage stays even. Don't repeat a post that's already `scripted`/`generated`/`published` — check `Source Tracking/marketing-log.md` too as a second check against repeats.

## Step 2 — Feed NotebookLM

Per `Source Tracking/site-rules.md` Section 7: feed NotebookLM the full rendered entry (frontmatter stripped, component tags flattened to plain text — read the actual rendered post, not the raw `.tsx` source with JSX markup). Generate a Video Overview.

## Step 3 — Quality check (and its real limits)

Check what's actually checkable:
- Does it cover the post's real key facts without introducing anything the source didn't say (NotebookLM can occasionally overgeneralize — spot-check against the post's Key Takeaways).
- Reasonable length/pacing, nothing obviously broken (cut off, garbled slide).
- Per site-rules: NotebookLM's own visuals won't know the site's custom `DiagramBlock` SVGs — note if the post's diagram is genuinely load-bearing and flag to the user that a manual overlay might be worth doing (this skill doesn't do video editing itself).

**Be upfront about the limit**: audio narration quality/tone is not something reliably checkable this way — say so plainly rather than implying a full review happened. If anything looks structurally off, flag it to the user before proceeding rather than publishing on autopilot.

## Step 4 — Publish, scheduled at a good time

Upload to YouTube. Use YouTube Studio's native scheduled-publish (not "publish now") so it goes live at a chosen time rather than whenever the pipeline happens to run.

**Default posting time: 12:00 PM ET**, weekdays — reasonable US lunch-hour overlap plus early-evening UK/Europe. This is a starting hypothesis, not measured data (the channel has no history yet). Once YouTube Analytics has real "when your viewers are online" data, switch to that instead of this default — treat it the same way the 1,000 views/day milestone gets revisited once real numbers exist.

Video description must include a direct link to the source post: `https://knowthiswell.com/{category}/{slug}`.

## Step 5 — Close the loop on the site side

Once the video is actually live (not just scheduled — confirm it published):
1. Update that post's frontmatter: `youtubeStatus: "published"`, `youtubeUrl: "<real URL>"`.
2. This alone makes it show up automatically — `src/components/VideoEmbed.tsx` renders the embedded video on the post page whenever `youtubeStatus === "published"` and a valid `youtubeUrl` is set. No other code change needed per video.
3. Commit, push, redeploy (`npm run build` first — this project has been bitten before by ESLint failures `tsc --noEmit` doesn't catch; always full-build before `vercel --prod`).

## Step 6 — Log it

Append to `Source Tracking/marketing-log.md`:

```
- 2026-08-20 | YouTube | [post title] video, scheduled 12:00 PM ET | posted
```

If skipped for login reasons instead, log that per the accounts-registry skip rule above.
