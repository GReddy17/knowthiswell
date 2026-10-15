@AGENTS.md

# Video lane rule (founder, 2026-10-01)
Use the `daily-video` skill (HyperFrames, topic + article) for every Short. Use `notebooklm-video` ONLY when the founder explicitly says "use NotebookLM". Never delete or edit the legacy skill to avoid it.

# Channel focus (founder, 2026-10-04)
YouTube runs on two lines only: Finance and English. Daily: 1 Short (finance or English). Monday: finance long 12-15 min. Thursday: quiz (English or finance, 10-15 questions). Saturday: English long 12-15 min. No science/general-topic videos. Platforms (founder, 2026-10-13): all social media again, YouTube + TikTok + Instagram + Facebook, same video same date (YouTube date is the anchor).

# YouTube growth (founder, 2026-10-04)
Goal: 50,000 subscribers by 2027-10-04. The `youtube-growth` skill runs itself every Sunday 20:00 (launchd `com.knowthiswell.yt-weekly`), reviews analytics + benchmark channels + topics, and writes `Source Tracking/youtube-weekly-plan.md`. Plans only; production skills (`daily-video`, `quiz-episode`) consume the plan; nothing ships without the panel gate.

# True inspiration, not copying (founder HARD RULE, 2026-10-08)
Whenever we generate a video or decide a topic: study 2-3 reference videos (format, voice, narration, pacing, visuals), write `reference-teardown.md` with a beat list, make our own version (own script, sources, visuals, voice), and beat the reference on quality. Never copy wording, titles, charts or footage. The panel scores against the teardown. Full rule: `.claude/skills/youtube-growth/references/playbook.md` section 0.

# No AI wording in videos (founder HARD RULE, 2026-10-09)
Never say or show "AI generated", "AI narration", "AI voice" or similar: not spoken, not on screen (chips/cards), not in titles, descriptions, pinned comments or captions. Where a trust line is useful, use the channel name plus trust: e.g. "KnowThisWell: well researched, explained with simple visuals." Sources lines stay. Applies to every Short, long and quiz, new and already scheduled. (YouTube's own "altered or synthetic content" setting in Studio is separate and stays the founder's call.)

# Voice rules for every video, long or short (founder HARD RULE, 2026-10-09, effective for builds from the week of Oct 12)
1. Speed: 0.95 when the content needs a slow pace, 1.05 as the normal pace. Pick any value between 0.95 and 1.05 per video based on need. Never slower than 0.95 or faster than 1.05. (Supersedes earlier 0.9-0.95 finance-long and fast-Short speed notes.)
2. Human style and emotion: narration words and delivery must sound like a person talking, with feeling, warmth, emphasis and natural rhythm. No flat, robotic wording or flat voice: conversational sentences, contractions, reactions, curiosity and stakes in the script; expressive voice settings and per-line delivery in the render.

# Shorts = one topic, fully explained (founder HARD RULE, 2026-10-14)
Shorts explain one topic completely, like Instagram's Quiet Wolf and Neuron Visuals: 75-120 s (150 s ceiling), origin/mechanism story with dated, named, sourced facts. Never promote a long video inside a Short (no "full breakdown in...", no part 2, no Related Video link). Research = a primary-source dossier (`research.md`); comments, Reddit and other creators are leads only. Full rule: `.claude/skills/daily-video/references/deep-short-format.md`.
