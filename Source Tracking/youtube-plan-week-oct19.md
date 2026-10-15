# Plan: week of Mon 2026-10-19 (built 2026-10-13, manual; Sunday youtube-growth job is paused)
Status: APPROVED by founder 2026-10-13 and BUILT + SCHEDULED 2026-10-13/14 (7 Shorts on YouTube + FB + IG, TikTok pending; 3 longs on YouTube). Note: built Fri 10-23 Short + Sat Short + Sat long per final topic list below; longs: Mon 401k (SvZUKOv3LHg), Thu Quiz #3 (ITIqhOh6kVA), Sat English Story #2 (kiCWSjBmCWA). Each video still needs its reference teardown, >= 3 sources + claim ledger, panel gate and QC (`daily-video/references/production-playbook.md`).

## Research method (founder rule 2026-10-13)
Topics come from **what is performing NOW on social media, not from our channel's numbers.**
- Scan: `.claude/private/tools/social_scan.py`, YouTube Data API, 35 finance + English queries, videos published in the last 21 days, US / English, 817 videos. Raw data: `.claude/private/yt-growth/social-scan-2026-10-13.json`.
- Signal = views / channel subscribers (small channels with huge views = the topic carried it, not the audience), views >= 20k.
- Reddit blocks scripted reads; TikTok/Instagram have no public API. This pass is YouTube-wide only. Gap noted; a manual TikTok/IG trend look would strengthen it.
- Excluded from picks: political ads, celebrity/real-person clips (Caleb Hammer audits, athletes), fear framing ("The FED just issued a WARNING"), kids' content, non-US markets.

## What is performing now (evidence, last 21 days)
| Theme | Proof (views, channel subs, x subs) | Fits us as |
|---|---|---|
| **Slow English story listening (A2)** | Learn Slow English 432K on 1.4K subs (318x); Ana Daily English 721K on 10.9K (66x); TVAE 1.80M and 1.18M on 29.8K (60x, 40x); DG Slow English 2.05M on 52K (39x) | Saturday English long |
| **Retirement money by age** | "How Much Should You Have in Your 401(k) By Age? (2026)" 25K on 919 (25x); "Social Security + Pension + 401(k): Real Retirement Paycheck" 35K on 4K (8.8x); "If You're in Your 40s or 50s..." 1.14M on 99K (11.5x); "Retired Americans Living in RVs" 527K on 5K (105x) | Monday finance long |
| **"Who made more money?" comparison** | Money Meets Medicine 1.22M on 4.4K (274x, 97 s) | Finance Short (Tricky Q) |
| **Compounding story ("How $100 became...")** | The Curious Plot 588K on 5.4K (109x) | Finance Short |
| **State income tax** | Texas "No State Income Tax" ad 36.5M (political, topic interest only) | Finance Short, facts only |
| **Car loans / car buying** | "Car Loan Crisis is Getting Scary" 257K on 55K; "Don't BUY A CAR Before Watching This" 104K on 17K (6x) | Finance Short |
| **US vs UK words** | "CRISPS vs FRIES vs CHIPS" 201K on 866 subs (201x) | English Short |
| **Spelling challenges** | Spelling battle 8.9M on 5.7K; spelling-bee reaction 1.43M on 1.7K | English Short + Thursday quiz |
| **Word-meaning curiosities** | "The saddest word in the dictionary" 624K on 4.3K (147x) | English Short |
| **English quizzes** | "English Quizz IQ test" 100K on 423 subs (100x); "Complete The English Phrase" 91K on 4.2K (22x); "Common Grammar Mistakes" 90K on 759 (119x) | Thursday quiz |
| Hardest-to-pronounce ranking | Rankrizz 2.71M on 4K (668x) | Parked: 10/04 panel said no pronunciation content until week 5 (founder can lift) |

## Shorts (daily, YouTube 16:00 UTC; number via `series_number.py`)
| Date | Lane | Title draft (<60 chars) | Trend it rides | Sources to fetch |
|---|---|---|---|---|
| Mon 10-19 | Finance | Nurse or Electrician: Who Earns More by 40? | "Who made more money?" 274x | BLS OEWS median wages + BLS education data; no advice |
| Tue 10-20 | English | Chips, Crisps, Fries: 5 Words the US and UK Swap | US vs UK words 201x | Cambridge/Merriam-Webster entries; site post `british-vs-american-english-differences` |
| Wed 10-21 | Finance | $100 a Month From 25: What It Grows To | compounding story 109x | Investor.gov compound calculator; label rate as illustrative, no forecast |
| Thu 10-22 | English | Can You Spell These 5 Words? Most Adults Miss 3 | spelling battle / bee | Merriam-Webster; "most adults" only if a sourced list (else drop the claim) |
| Fri 10-23 | Finance | 9 States With No Income Tax: What They Charge Instead | state income tax interest | Tax Foundation + state revenue pages; neutral, no politics |
| Sat 10-24 | English | One English Word With No Opposite (or similar word-meaning hook) | saddest-word 147x | Merriam-Webster/OED/Etymonline; pick the word on build day with a sourced meaning |
| Sun 10-25 | Finance | The Average Car Loan Now: What It Really Costs | car loan crisis | Fed G.19 consumer credit, Experian/Edmunds data with as-of date; illustrative payment math |

## Longs and quiz
- **Mon 10-19 finance long: "How Much Should You Have in Your 401(k) by Age? (2026 Data)"**, 12-15 min. Story spine: one worker from 25 to 67, what the median and average actually are at each age (Vanguard How America Saves 2026, Fidelity quarterly data), what a real retirement paycheck looks like (SSA benefit estimates), what changes the gap. Data and definitions only, no advice, disclaimer on screen. Replaces "Great Depression, Explained" (no current trend).
- **Thu 10-22 quiz: "Spell It Right: 12 Words Most Adults Get Wrong"** (or "Complete the English Phrase"). Spelling challenges plus English IQ-style quizzes are both pulling 22-100x on small channels. KBC renderer.
- **Sat 10-24 English long: Slow English story (A2), ~10-15 min.** Strongest signal in the scan: 5 independent channels, 39-318x, all in 21 days. Original story only (everyday situation: lost key, first day at a new job), slow read with recaps, vocabulary cards, 5 check questions. Note: this targets learners, not the native-US audience chosen 10/04; founder approved one test on 10/08.

## Measure
Judge at the Oct 26 review: 72 h views per video vs the reference videos' trend, plus Studio traffic sources. Our own numbers are for post-publish learning, not topic choice.

## Needs founder
1. Approve this plan (social-trend topics, Sat = slow English story).
2. Lift the "no pronunciation until week 5" rule? (Unlocks the hardest-words ranking: 668x.)
3. Automation is fully paused since 2026-10-10: manual production runs, or resume the pipeline?
