# October Shorts picks (Oct 5-30, 2026) - SEO-scored

> **SUPERSEDED 2026-10-04 (founder):** the channel now runs on finance and English only: daily Short (finance or English), Monday finance long 12-15 min, Thursday quiz (10-15 questions), Saturday English long 12-15 min, YouTube only. Science/general Shorts picks below are on hold. See `.claude/skills/daily-video/references/series-and-formulas.md`.


Founder ask 2026-10-01: from 900+ posts, pick 25-30 unique, potentially trending/viral topics to post till Oct 30; add an SEO rating /100; the lower the rating, the more the page needs a video.

**This file replaces `daily-shorts-plan-sep28-oct31.md` for Oct 5-30.** Oct 1-4 (file deletion, LLC house, placebo, apology) are already booked.

## How the rating works (content + title only)
- `scripts/seo-score.mjs` scores every post /100 from its own title and content. **Never from Search Console or Vercel traffic**: most pages are not indexed yet, so search data would punish new pages for Google delay.
- Points (95 raw, scaled to 100): title 15, excerpt 10, tags 5, freshness 10, depth 30 (words, sources, FAQ, diagram, glossary, headings, QuickCheck), internal linking 15, format 10.
- **Low SEO score = weak page = video first** (a Short lifts it). **ShortFit** (/100) = hook strength, visual fit, seasonal window; this is the viral side.
- Heuristic, not Google numbers. Stored in each post frontmatter as `seoScore` + `seoScoredOn`; full table in `src/content/generated/seo-scores.json`.
- Pick rule: unique topic, not already shot/scheduled, not vaccine/medical-controversy, high ShortFit, seasonal ones placed on their date, <=8 per category.

## Calendar (one Short per day)
| Date | Topic | Category | SEO | ShortFit | Video priority (1 = lowest SEO) | Season hook |
|---|---|---|---|---|---|---|
| 10-05 | Why Bears Need to Double Their Body Fat Before Hibernation (`why-bears-need-to-double-their-body-fat-before-hibernation`) | general-science-facts | 78 | 49 | 13 | Fat Bear Week |
| 10-06 | Why We Always See the Same Side of the Moon (`why-we-always-see-the-same-side-of-the-moon`) | general-science-facts | 81 | 46 | 20 | World Space Week |
| 10-07 | Does a Microwave Really Heat Food From the Inside Out? (`does-a-microwave-really-heat-food-from-the-inside-out`) | general-science-facts | 81 | 50 | 21 | - |
| 10-08 | Space Exploration & Technology: How Rockets, Orbits, and Space Travel Actually Work (`space-exploration-and-technology`) | general-science-facts | 69 | 51 | 6 | World Space Week |
| 10-09 | Why Strong Passwords Actually Matter (The Math Behind It) (`why-strong-passwords-actually-matter`) | technology-basics | 79 | 52 | 16 | Cybersecurity Awareness Month |
| 10-10 | How Chronic Stress Actually Damages Long-Term Health (`how-chronic-stress-actually-damages-long-term-health`) | health-wellness-deep-dive | 80 | 32 | 17 | World Mental Health Day |
| 10-11 | Why Bruises Change Color as They Heal (`why-bruises-change-color-as-they-heal`) | health-body-basics | 78 | 30 | 14 | - |
| 10-12 | Ocean Acidification Explained (`ocean-acidification-explained`) | environment-nature | 67 | 37 | 1 | - |
| 10-13 | How Phishing Scams Actually Work (`how-phishing-scams-actually-work`) | digital-safety-privacy | 80 | 45 | 18 | Cybersecurity Awareness Month |
| 10-14 | Why Public WiFi Is Riskier (And What Actually Protects You) (`why-public-wifi-is-riskier`) | technology-basics | 78 | 52 | 15 | Cybersecurity Awareness Month |
| 10-15 | Handwashing: Why It Actually Works (`handwashing-why-it-actually-works`) | health-body-basics | 67 | 51 | 2 | Global Handwashing Day |
| 10-16 | Reducing Food Waste at Home (`reducing-food-waste-at-home`) | environment-nature | 68 | 27 | 4 | World Food Day |
| 10-17 | Light Pollution & Its Effects (`light-pollution-and-its-effects`) | environment-nature | 67 | 44 | 3 | Tier S |
| 10-18 | Why Drywall Cracks Appear (And What They're Actually Telling You) (`why-drywall-cracks-appear-explained`) | home-diy-knowledge | 92 | 47 | 26 | - |
| 10-19 | Mass vs Weight: What's Actually Different (`mass-vs-weight-whats-actually-different`) | units-measurement-conversions | 74 | 37 | 9 | - |
| 10-20 | Navratri & Durga Puja (`navratri-and-durga-puja`) | festivals-culture | 75 | 26 | 10 | Dussehra |
| 10-21 | Most Spoken Languages in the World (`most-spoken-languages-in-the-world`) | language-vocabulary | 72 | 34 | 7 | Tier S |
| 10-22 | Why the Collarbone Is the Most Commonly Broken Bone (`why-the-collarbone-is-the-most-commonly-broken-bone`) | health-body-basics | 80 | 36 | 19 | - |
| 10-23 | Why a Bird Can Safely Sit on a Live Power Line (`why-a-bird-can-safely-sit-on-a-live-power-line`) | general-science-facts | 83 | 37 | 23 | - |
| 10-24 | Does Pure Water Actually Conduct Electricity? (`does-pure-water-actually-conduct-electricity`) | general-science-facts | 81 | 45 | 22 | - |
| 10-25 | How a Home's Foundation Actually Supports the House (`how-a-home-foundation-actually-supports-a-house`) | home-diy-knowledge | 85 | 43 | 25 | - |
| 10-26 | What Makes a Nor'easter Different From a Hurricane? (`what-makes-a-noreaster-different-from-a-hurricane`) | general-science-facts | 83 | 43 | 25 | Nor'easter season |
| 10-27 | How CAPTCHA Actually Tells Humans From Bots (`how-captcha-tells-humans-from-bots`) | technology-basics | 75 | 44 | 11 | - |
| 10-28 | Phillips vs. Flathead Screwdrivers: Why the Shape Actually Matters (`phillips-vs-flathead-screwdrivers-explained`) | home-diy-knowledge | 72 | 39 | 8 | - |
| 10-29 | Daylight Saving Time Explained (`daylight-saving-time-explained`) | units-measurement-conversions | 75 | 31 | 12 | Clocks go back Nov 1 |
| 10-30 | Halloween Explained (`halloween-explained`) | festivals-culture | 68 | 33 | 5 | Halloween Oct 31 |

## Rules for using this list
- Calendar order is seasonal; if a day is missed, shoot the lowest-SEO unshot pick next, but keep seasonal items on or just before their date (Dussehra Oct 20, Halloween Oct 30).
- Reserves if a pick fails checks: lightning-never-strikes-twice (SEO 87), how-a-home-foundation-supports-a-house (85), two-factor-authentication-explained (77), why-theres-no-such-thing-as-cold-only-less-heat (83, only after the pilot is judged), the-greenhouse-effect-applied (68), diwali-explained (75, hold for Nov 8).
- Redundancy check 2026-10-01 against the real channel (47 videos, see `youtubeShort`/`youtubeLong` flags): no pick is already on YouTube. `why-theres-no-such-thing-as-cold-only-less-heat` was dropped (same heat-flow idea as the fridge Short and the metal-vs-wood pilot); also parked: lightning-never-strikes-twice (right next to the lightning-before-thunder Short). Mass vs weight (10-19) sits next to the heavier-objects-fall Short; keep only if the hook is different (weight on other planets).
- Pilot topic metal-feels-colder-than-wood is consumed by the HyperFrames pilot; do not re-pick.
- Any new post gets scored when written (see site-rules). Re-run `node scripts/seo-score.mjs --write` weekly (Monday) and re-check this list against new low scorers.
