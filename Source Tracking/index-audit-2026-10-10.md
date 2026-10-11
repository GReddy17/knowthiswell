# Index audit, 2026-10-10 (read-only)

Scope: read-only audit of unindexed pages. No src edits, no indexing requests, nothing posted. Built from the live GSC Page indexing lists (read in the browser; GSC data was last refreshed 2026-10-03) cross-referenced locally against all 931 post files.

## 1. Summary

**Headline: unindexed pages are a quality/crawl-priority problem, not a linking problem, and most of the backlog is simply the August batch Google never got around to.**

| Number | Value |
|---|---|
| Posts in repo | 931 |
| Discovered, not indexed (DNI) matched locally | 647 (69%) |
| Crawled, not indexed (CNI) matched locally | 76 posts (3 of them also appear on the DNI list) |
| Posts on neither list (presumed indexed) | 208 to 211 (about 23%) |
| GSC headline "indexed" | 433 (down from 489) |
| Sitemap URLs | 982 = 931 posts + 43 category hubs + 8 static |

Findings that matter:

1. **Date drives DNI.** Aug 2026: 518 of 710 posts DNI (73%). Sep: 129 of 191 DNI and 49 CNI. Oct: 0 of 30 DNI, 10 CNI, 20 not listed. Mass-publishing 710 pages in about 5 weeks on a new domain left Google with a discovery backlog; the 1-post-a-day October pages are being crawled within days.
2. **Length correlates with getting indexed.** Posts from Sep 17 onward (n=140): under 700 words, 0 of 29 are outside the unindexed lists; 700 to 850 words, 10 of 59 (17%); 850 to 1000, 15 of 39 (38%); 1000+, 6 of 13 (46%). The median CNI page is about 790 words; the median across the site is 779, so length alone is not the whole story, but the sub-700 pages are the clear loser group.
3. **CNI is not a linking gap.** Median editorial inbound links: CNI 4, DNI 3, other 3. Pages with up to 17 inbound links are CNI (how-large-language-models-actually-work, what-active-listening-actually-looks-like-in-practice). More links will not fix these; more distinct content will.
4. **Templated titles are over-represented.** 258 posts use "actually" in the title. Within the same month the share outside the unindexed lists is similar (Sep: 10 of 143 vs 3 of 48), so the title pattern is a weak signal by itself. The real issue is that 10 September deep-dive categories (11 posts each, 110 posts) re-cover topics already in foundation categories (23 cross-category title pairs at Jaccard 0.5+).
5. **Category skew.** technology-basics 100 of 102 DNI, legal-documentation 48 of 50, personal-finance 47 of 50, home-diy 46 of 50, career 43 of 50, general-awareness 42 of 50. language-vocabulary (19 of 50 DNI) and math (21 of 50) are the healthiest. The ten September deep-dive categories hold 39 of the 76 CNI pages.
6. **Orphans: 31 posts** (23 DNI, 8 other) with zero body links, zero seeAlso inbound, not in a learning path, and zero auto-related inbound.
7. **Technical hygiene is mostly clean.** www and http redirect to the apex with 308; canonical and robots meta on posts are correct (index, follow, self-canonical); robots.txt fine. Two real issues: **18 of the 43 category hubs have zero posts** ("Coming Soon" copy, still indexable, canonical, in the sitemap at priority 0.8), and opengraph-image PNG routes return 200 with no X-Robots-Tag.
8. **Thin tail is small:** only 7 posts under 500 words (6 in math-numbers). Word p10/p50/p90 = 617 / 779 / 976.

## 2. Verdicts, CNI pages (76 posts)

Word counts are approximate (visible JSX text). "Inbound" = editorial inbound (body links + seeAlso + learning paths). "Keep (wait)" means under 3 weeks old and only worth revisiting after a crawl cycle.

| Post | Published | Words | Inbound | Verdict | Reason |
|---|---|---|---|---|---|
| ai-future-tech-literacy/how-large-language-models-actually-work | 2026-09-21 | 605 | 17 | strengthen | 605 words, highest inbound (17) of its cluster yet CNI; too short for the topic, expand to 1000+ |
| ai-future-tech-literacy/how-ai-image-generators-actually-create-pictures | 2026-09-26 | 861 | 5 | keep (wait) | only 14 days old; give it 3-4 weeks, add inbound links where inbound is low |
| ai-future-tech-literacy/how-ai-chatbots-are-trained | 2026-09-30 | 799 | 6 | strengthen | overlaps how-large-language-models-actually-work; split angle (training pipeline vs architecture) and link both ways |
| ai-future-tech-literacy/what-prompt-engineering-actually-is | 2026-10-01 | 1037 | 5 | keep (wait) | only 9 days old; give it 3-4 weeks, add inbound links where inbound is low |
| business-entrepreneurship-basics/what-a-business-plan-actually-needs-to-include | 2026-09-21 | 791 | 12 | strengthen | 791 words, templated "actually" format; add a unique example/data point and sources |
| business-entrepreneurship-basics/what-an-llc-actually-protects-you-from | 2026-09-25 | 766 | 8 | keep (wait) | only 15 days old; give it 3-4 weeks, add inbound links where inbound is low |
| business-entrepreneurship-basics/what-a-business-license-actually-requires | 2026-10-01 | 1046 | 4 | keep (wait) | only 9 days old; give it 3-4 weeks, add inbound links where inbound is low |
| career-study-skills/active-recall-vs-rereading-explained | 2026-08-30 | 717 | 8 | keep | distinct claim with research behind it; add 1-2 study citations |
| career-study-skills/how-procrastination-actually-works | 2026-08-30 | 711 | 7 | merge-into psychology-human-behavior/how-procrastination-actually-works-in-the-brain | same topic, shorter (711 vs 931 words); keep the longer one |
| career-study-skills/how-job-boards-actually-rank-listings | 2026-09-02 | 737 | 5 | strengthen | 0 body links; add concrete ranking factors with sources |
| career-study-skills/chronological-vs-functional-resume-formats | 2026-09-02 | 689 | 3 | strengthen | 689 words, overlaps many resume guides; add a side-by-side example |
| digital-safety-privacy/what-two-factor-authentication-actually-does | 2026-09-21 | 603 | 14 | strengthen | 603 words, under the 700 line; expand with a worked example and sources |
| digital-safety-privacy/what-a-vpn-actually-protects-you-from | 2026-09-25 | 729 | 6 | keep (wait) | only 15 days old; give it 3-4 weeks, add inbound links where inbound is low |
| digital-safety-privacy/how-data-breaches-actually-happen | 2026-09-26 | 777 | 8 | strengthen | differentiate from technology-basics/what-a-data-breach-actually-means-for-you (how vs aftermath); add real breach case studies, cross-link |
| digital-safety-privacy/how-identity-theft-actually-starts | 2026-09-30 | 887 | 4 | keep (wait) | only 10 days old; give it 3-4 weeks, add inbound links where inbound is low |
| digital-safety-privacy/what-public-wi-fi-risks-actually-are | 2026-10-01 | 1021 | 3 | keep (wait) | only 9 days old; give it 3-4 weeks, add inbound links where inbound is low |
| economics/what-gdp-actually-measures | 2026-09-21 | 727 | 13 | strengthen | 727 words, templated "actually" format; add a unique example/data point and sources |
| economics/what-supply-and-demand-actually-predicts | 2026-09-25 | 790 | 8 | keep (wait) | only 15 days old; give it 3-4 weeks, add inbound links where inbound is low |
| economics/how-tariffs-actually-affect-prices | 2026-09-30 | 786 | 4 | keep (wait) | only 10 days old; give it 3-4 weeks, add inbound links where inbound is low |
| economics/what-minimum-wage-debates-actually-center-on | 2026-10-01 | 1023 | 4 | keep (wait) | only 9 days old; give it 3-4 weeks, add inbound links where inbound is low |
| environment-nature/building-a-personal-sustainability-habit-checklist | 2026-08-22 | 733 | 1 | strengthen | 1 inbound, checklist-style; add sourced impact numbers |
| environment-nature/sustainable-and-renewable-energy-at-home | 2026-08-22 | 771 | 2 | strengthen | 2 inbound; add cost/payback ranges with sources |
| festivals-culture/world-dance-traditions-overview | 2026-08-16 | 610 | 3 | strengthen | 610 words generic overview; add 6-8 named traditions with specifics |
| festivals-culture/ganesh-chaturthi | 2026-08-16 | 499 | 1 | strengthen | 499 words, thinnest CNI; add rituals, regional variants, dates table, sources |
| festivals-culture/raksha-bandhan | 2026-08-16 | 547 | 1 | strengthen | 547 words, 1 inbound; add history, regional variants, FAQ depth |
| festivals-culture/vesak-buddhist-festival-explained | 2026-08-16 | 644 | 2 | strengthen | 644 words, 2 inbound; add practice detail by country |
| general-science-facts/do-thick-and-thin-wires-carry-the-same-current-safely | 2026-09-19 | 839 | 2 | strengthen | 839 words, templated "actually" format; add a unique example/data point and sources |
| general-science-facts/does-a-microwave-really-heat-food-from-the-inside-out | 2026-09-19 | 1002 | 3 | strengthen | 1002 words, templated "actually" format; add a unique example/data point and sources |
| general-science-facts/does-pure-water-actually-conduct-electricity | 2026-09-19 | 984 | 4 | strengthen | 984 words, templated "actually" format; add a unique example/data point and sources |
| general-science-facts/why-heavier-objects-dont-actually-fall-faster | 2026-09-19 | 820 | 2 | strengthen | 820 words, templated "actually" format; add a unique example/data point and sources |
| general-science-facts/why-heavier-things-dont-always-sink | 2026-09-19 | 958 | 1 | strengthen | 958 words, templated "actually" format; add a unique example/data point and sources |
| general-science-facts/why-metal-feels-colder-than-wood-at-the-same-temperature | 2026-09-19 | 900 | 1 | strengthen | 900 words, templated "actually" format; add a unique example/data point and sources |
| general-science-facts/why-theres-no-such-thing-as-cold-only-less-heat | 2026-09-19 | 822 | 2 | strengthen | 822 words, templated "actually" format; add a unique example/data point and sources |
| general-science-facts/why-you-see-lightning-before-you-hear-the-thunder | 2026-09-19 | 810 | 1 | strengthen | 810 words, templated "actually" format; add a unique example/data point and sources |
| general-science-facts/el-nino-and-la-nina-explained | 2026-09-22 | 727 | 7 | strengthen | 727 words, templated "actually" format; add a unique example/data point and sources |
| general-science-facts/what-makes-a-noreaster-different-from-a-hurricane | 2026-09-22 | 908 | 5 | strengthen | 908 words, templated "actually" format; add a unique example/data point and sources |
| general-science-facts/real-parasites-that-control-their-hosts-behavior | 2026-09-22 | 827 | 4 | strengthen | 827 words, templated "actually" format; add a unique example/data point and sources |
| general-science-facts/why-bears-need-to-double-their-body-fat-before-hibernation | 2026-09-22 | 725 | 4 | strengthen | 725 words, templated "actually" format; add a unique example/data point and sources |
| geography-world-facts/geographic-records-extreme-points-on-earth | 2026-08-16 | 1006 | 2 | keep | 1006 words, solid; listed in both DNI and CNI, re-check live |
| geography-world-facts/gps-and-how-location-technology-works | 2026-08-16 | 905 | 2 | strengthen | 2 inbound; overlaps technology-basics GPS-type content, add unique angle + link |
| geography-world-facts/countries-and-capitals-overview | 2026-08-16 | 994 | 8 | keep | 8 inbound, 994 words; listed in both DNI and CNI (likely a hash collision or GSC churn), re-check live |
| geography-world-facts/geography-of-europe | 2026-08-16 | 854 | 3 | strengthen | generic overview; add a map-style table and 5 specific facts per region |
| government-schemes-benefits/what-social-security-actually-pays-out-and-when | 2026-09-21 | 696 | 12 | strengthen | 696 words, under the 700 line; expand with a worked example and sources |
| government-schemes-benefits/what-housing-assistance-programs-actually-offer | 2026-10-01 | 1014 | 5 | keep (wait) | only 9 days old; give it 3-4 weeks, add inbound links where inbound is low |
| health-body-basics/why-the-collarbone-is-the-most-commonly-broken-bone | 2026-09-22 | 731 | 3 | keep | distinctive angle, 731 words; add 150 words (healing, why) and one inbound from a skeleton post |
| health-wellness-deep-dive/what-cortisol-actually-does-to-the-body-under-stress | 2026-09-21 | 567 | 11 | strengthen | 567 words, under the 700 line; expand with a worked example and sources |
| health-wellness-deep-dive/what-resting-heart-rate-actually-reveals-about-fitness | 2026-09-25 | 707 | 4 | keep (wait) | only 15 days old; give it 3-4 weeks, add inbound links where inbound is low |
| health-wellness-deep-dive/how-chronic-stress-actually-damages-long-term-health | 2026-09-30 | 956 | 6 | keep (wait) | only 10 days old; give it 3-4 weeks, add inbound links where inbound is low |
| health-wellness-deep-dive/what-burnout-actually-is-medically | 2026-10-02 | 1015 | 3 | keep (wait) | only 8 days old; give it 3-4 weeks, add inbound links where inbound is low |
| history-timeline-facts/the-russian-revolution | 2026-08-16 | 935 | 2 | strengthen | 935 words but overview-style; add timeline table + sources; in both lists, re-check live |
| history-timeline-facts/major-global-events-of-the-2010s | 2026-08-16 | 749 | 4 | strengthen | decade-list cluster with 2000s and 2020s posts; add per-year specifics so it is not interchangeable |
| home-diy-knowledge/how-a-sump-pump-actually-prevents-flooding | 2026-09-17 | 888 | 2 | strengthen | 888 words, templated "actually" format; add a unique example/data point and sources |
| home-diy-knowledge/why-hardwood-floors-expand-and-contract | 2026-09-17 | 836 | 2 | strengthen | 836 words, templated "actually" format; add a unique example/data point and sources |
| home-diy-knowledge/how-often-household-systems-actually-need-maintenance | 2026-09-17 | 835 | 1 | strengthen | 835 words, templated "actually" format; add a unique example/data point and sources |
| investing-markets-deep-dive/what-a-mutual-fund-actually-is | 2026-09-21 | 725 | 13 | strengthen | 725 words, templated "actually" format; add a unique example/data point and sources |
| investing-markets-deep-dive/how-diversification-actually-reduces-risk | 2026-10-01 | 947 | 7 | keep (wait) | only 9 days old; give it 3-4 weeks, add inbound links where inbound is low |
| life-skills-etiquette/what-active-listening-actually-looks-like-in-practice | 2026-09-21 | 549 | 16 | keep | canonical of the pair (16 inbound, in life-skills); strengthen to 800+ words with a worked example the career-study twin lacks |
| life-skills-etiquette/what-professional-email-etiquette-actually-requires | 2026-09-25 | 800 | 5 | keep (wait) | only 15 days old; give it 3-4 weeks, add inbound links where inbound is low |
| life-skills-etiquette/how-to-actually-apologize-in-a-way-that-lands | 2026-09-30 | 876 | 3 | keep (wait) | only 10 days old; give it 3-4 weeks, add inbound links where inbound is low |
| life-skills-etiquette/what-small-talk-is-actually-for | 2026-10-01 | 950 | 3 | keep (wait) | only 9 days old; give it 3-4 weeks, add inbound links where inbound is low |
| math-numbers/math-for-budgeting-and-shopping | 2026-08-16 | 792 | 2 | strengthen | 2 inbound; add 3 worked examples |
| math-numbers/reading-graphs-and-charts | 2026-08-16 | 911 | 3 | strengthen | 911 words, fine length; add inline example charts and 1 contextual link from percentages/ratios posts |
| personal-finance-basics/how-credit-reports-work | 2026-08-22 | 753 | 3 | strengthen | Aug 22 foundation post; 3 inbound; very generic topic, add unique angle (what is on each bureau, how to read one) |
| professional-skills-certifications/how-to-actually-choose-between-competing-certifications | 2026-09-21 | 577 | 15 | strengthen | 577 words, under the 700 line; expand with a worked example and sources |
| professional-skills-certifications/how-agile-and-scrum-actually-differ | 2026-09-25 | 717 | 5 | keep (wait) | only 15 days old; give it 3-4 weeks, add inbound links where inbound is low |
| professional-skills-certifications/what-a-pmp-certification-actually-requires | 2026-09-26 | 775 | 3 | keep (wait) | only 14 days old; give it 3-4 weeks, add inbound links where inbound is low |
| professional-skills-certifications/how-cloud-certifications-actually-boost-a-resume | 2026-09-27 | 722 | 5 | keep (wait) | only 13 days old; give it 3-4 weeks, add inbound links where inbound is low |
| professional-skills-certifications/what-google-analytics-certification-actually-verifies | 2026-09-30 | 815 | 3 | keep (wait) | only 10 days old; give it 3-4 weeks, add inbound links where inbound is low |
| professional-skills-certifications/how-to-actually-prepare-for-a-certification-exam | 2026-10-01 | 886 | 3 | keep (wait) | only 9 days old; give it 3-4 weeks, add inbound links where inbound is low |
| psychology-human-behavior/what-cognitive-dissonance-actually-feels-like | 2026-09-21 | 607 | 10 | strengthen | 607 words, under the 700 line; expand with a worked example and sources |
| psychology-human-behavior/how-social-proof-actually-influences-behavior | 2026-09-26 | 802 | 6 | keep (wait) | only 14 days old; give it 3-4 weeks, add inbound links where inbound is low |
| psychology-human-behavior/what-the-placebo-effect-actually-reveals-about-the-mind | 2026-09-27 | 747 | 3 | keep (wait) | only 13 days old; give it 3-4 weeks, add inbound links where inbound is low |
| psychology-human-behavior/how-procrastination-actually-works-in-the-brain | 2026-09-30 | 931 | 6 | keep | merge target; absorb unique points from career-study twin, strengthen |
| psychology-human-behavior/what-imposter-syndrome-actually-is | 2026-10-01 | 961 | 4 | keep (wait) | only 9 days old; give it 3-4 weeks, add inbound links where inbound is low |
| technology-basics/why-one-outage-can-ground-flights-and-break-half-the-internet | 2026-09-22 | 778 | 2 | keep | distinctive angle (news-hooked); add inbound links from cloud/internet posts |
| technology-basics/why-deleting-a-file-doesnt-erase-it-right-away | 2026-09-22 | 839 | 2 | keep | distinctive angle; add inbound from digital-safety privacy posts |

Verdict counts: strengthen 41, keep 34, merge-into 1. Nothing in the CNI list is a prune candidate: all are on-brand topics and most are under 4 weeks old.

### CNI rows that are not posts (from the live GSC list)
| URL type | Verdict | Reason |
|---|---|---|
| www.knowthiswell.com duplicates | no action | www returns 308 to apex; will drop out as Google recrawls |
| category hub pages | see section 5 (empty hubs) | hubs with no posts are the likeliest hub CNIs |
| /…/opengraph-image PNG routes | optional low-risk fix | 200 image/png, no noindex header; they do not hurt page rankings but pollute the Pages report |

## 3. DNI sample (647 pages, so category-level plus targeted rows)

DNI means Google found the URL but has not crawled it. Per-URL verdicts here add no value: the cause is crawl budget and site-level quality trust, and the fix is the same for all of them (let the daily cadence build trust, fix the cluster and thin issues below, do not mass-republish). Rows below are the DNI pages that carry a specific problem.

| Category | Posts | DNI | CNI | Not listed |
|---|---|---|---|---|
| general-science-facts | 66 | 49 | 12 | 5 |
| math-numbers | 50 | 21 | 2 | 27 |
| geography-world-facts | 50 | 33 | 2 | 15 |
| history-timeline-facts | 50 | 30 | 1 | 19 |
| language-vocabulary | 50 | 19 | 0 | 31 |
| festivals-culture | 50 | 19 | 4 | 27 |
| units-measurement-conversions | 50 | 37 | 0 | 13 |
| general-awareness-basics | 50 | 42 | 0 | 8 |
| health-body-basics | 53 | 41 | 1 | 11 |
| environment-nature | 50 | 28 | 2 | 20 |
| personal-finance-basics | 50 | 47 | 1 | 2 |
| legal-documentation-howtos | 50 | 48 | 0 | 2 |
| technology-basics | 102 | 100 | 2 | 0 |
| career-study-skills | 50 | 43 | 4 | 3 |
| home-diy-knowledge | 50 | 46 | 3 | 1 |
| health-wellness-deep-dive | 11 | 5 | 4 | 2 |
| business-entrepreneurship-basics | 11 | 6 | 3 | 2 |
| investing-markets-deep-dive | 11 | 4 | 2 | 5 |
| government-schemes-benefits | 11 | 5 | 2 | 4 |
| professional-skills-certifications | 11 | 3 | 6 | 2 |
| ai-future-tech-literacy | 11 | 4 | 4 | 3 |
| digital-safety-privacy | 11 | 4 | 5 | 2 |
| life-skills-etiquette | 11 | 5 | 4 | 2 |
| psychology-human-behavior | 11 | 3 | 5 | 3 |
| economics | 11 | 5 | 4 | 2 |

| Post | State | Words | Inbound | Verdict | Reason |
|---|---|---|---|---|---|
| technology-basics/what-a-password-manager-actually-does | DNI | 756 | 3 | merge-into digital-safety-privacy/how-password-managers-actually-protect-you | near-duplicate topic (title overlap 0.67); keep the digital-safety one |
| technology-basics/what-a-digital-footprint-actually-means | DNI | 851 | 8 | merge-into digital-safety-privacy/what-your-digital-footprint-actually-reveals | same topic; target is the one not on either unindexed list |
| career-study-skills/what-active-listening-actually-looks-like | DNI | 715 | 5 | merge-into life-skills-etiquette/what-active-listening-actually-looks-like-in-practice | same topic, shorter-lived; fold unique points into the target |
| personal-finance-basics/saving-for-short-term-vs-long-term-goals | DNI | 627 | 2 | merge-into personal-finance-basics/setting-financial-goals-short-vs-long-term | both DNI, same intent; keep the one with more inbound |
| personal-finance-basics/understanding-tax-deductions-vs-tax-credits | DNI | 645 | 5 | merge-into government-schemes-benefits/what-tax-credits-actually-differ-from-tax-deductions | target already outside the unindexed lists |
| general-awareness-basics/freedom-of-information-what-it-means | DNI | 605 | 0 | merge-into legal-documentation-howtos/freedom-of-information-requests-explained | orphan + overlap; target has the practical intent |
| technology-basics/what-smart-home-ecosystem-compatibility-means | DNI | 905 | 5 | merge-into technology-basics/what-compatibility-actually-means | narrow variant of a general post; fold in |
| math-numbers/factors-and-multiples | DNI | 457 | 4 | strengthen | 457 words, under 500; thinnest posts on site, bring to 800+ with worked examples |
| math-numbers/fractions-explained | DNI | 394 | 6 | strengthen | 394 words, under 500; thinnest posts on site, bring to 800+ with worked examples |
| math-numbers/lcm-and-hcf-gcd | DNI | 440 | 3 | strengthen | 440 words, under 500; thinnest posts on site, bring to 800+ with worked examples |
| math-numbers/ratios-and-proportions | DNI | 368 | 19 | strengthen | 368 words, under 500; thinnest posts on site, bring to 800+ with worked examples |
| history-timeline-facts/mesoamerican-civilizations-maya-aztec-inca | DNI | 740 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| history-timeline-facts/common-history-myths-and-misconceptions | DNI | 923 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| units-measurement-conversions/screen-size-and-resolution-units-explained | DNI | 654 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| units-measurement-conversions/shoe-and-clothing-size-conversion-across-countries | DNI | 707 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| units-measurement-conversions/shipping-container-and-packaging-volume-standards | DNI | 653 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| units-measurement-conversions/carats-and-precious-metal-weight-units | DNI | 528 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| units-measurement-conversions/understanding-stone-as-a-weight-unit | DNI | 569 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| general-awareness-basics/how-international-sporting-events-get-awarded-olympics-world-cup | DNI | 636 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| general-awareness-basics/how-to-build-a-personal-news-reading-habit | DNI | 596 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| general-awareness-basics/understanding-refugee-and-migration-terminology | DNI | 715 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| general-awareness-basics/what-makes-something-breaking-news | DNI | 603 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| general-awareness-basics/nobel-prizes-categories-and-how-winners-are-chosen | DNI | 713 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| health-body-basics/how-the-body-regulates-temperature-everyday-framing | DNI | 655 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| health-body-basics/understanding-growth-and-development-milestones-general-informational | DNI | 685 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| health-body-basics/when-a-headache-needs-medical-attention-general-guidance | DNI | 724 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| health-body-basics/oral-hygiene-basics-explained | DNI | 649 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| health-body-basics/preventing-common-household-injuries | DNI | 559 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| health-body-basics/skin-care-basics-general-non-diagnostic | DNI | 589 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| environment-nature/sustainable-fashion-and-fast-fashions-impact | DNI | 699 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| personal-finance-basics/how-inflation-proofing-strategies-work-conceptual-overview | DNI | 553 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| personal-finance-basics/understanding-currency-and-exchange-rates-in-daily-life | DNI | 559 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |
| legal-documentation-howtos/power-of-attorney-explained | DNI | 607 | 0 | keep + link | orphan: zero body links, zero seeAlso inbound, not in a path; add 2-3 contextual inbound links and one seeAlso entry |

All other DNI pages: **keep**. Do not prune on DNI alone; a page Google has not crawled gives no quality signal to act on.

## 4. Top 5 cannibalisation clusters

Detected by title-token Jaccard (>= 0.5), 40 pairs total, 23 of them across categories. False positives noted: WWI vs WWII (roman numerals stripped by the tokenizer), and the festival "around the world" posts (distinct topics).

1. **Procrastination (2 CNI posts):** career-study-skills/how-procrastination-actually-works and psychology-human-behavior/how-procrastination-actually-works-in-the-brain. Same query. Merge the career one into the psychology one.
2. **Active listening (DNI + CNI):** career-study-skills/what-active-listening-actually-looks-like and life-skills-etiquette/what-active-listening-actually-looks-like-in-practice (title similarity 0.80). Merge the career-study one into the life-skills one.
3. **Password manager (DNI + DNI):** technology-basics/what-a-password-manager-actually-does and digital-safety-privacy/how-password-managers-actually-protect-you (0.67). Merge technology-basics into digital-safety.
4. **Data breach and digital footprint (technology-basics vs digital-safety-privacy):** what-a-data-breach-actually-means-for-you vs how-data-breaches-actually-happen (differentiate and cross-link, keep both), and what-a-digital-footprint-actually-means vs what-your-digital-footprint-actually-reveals (merge). This is the pattern behind most cross-category pairs: the September deep-dive categories re-cover foundation topics.
5. **"Common X myths and misconceptions" template (6 posts, 0.5 to 0.6 pairwise):** history, festival, health, vaccine, environmental, current-affairs. Not duplicates by topic, but identical title shape and likely identical structure. Differentiate titles and intros; no merge.

Next tier (same treatment): tax credits vs deductions (personal-finance-basics vs government-schemes-benefits), unemployment rate calculation (government-schemes-benefits vs economics), freedom-of-information pair, short- vs long-term goals pair, decade-events cluster (2000s/2010s/2020s), AI chatbots-trained vs LLM-work, wall-anchor pair, smart-home compatibility pair.

## 5. Technical findings

| Check | Result | Action |
|---|---|---|
| www to apex | 308 redirect, path preserved | none |
| http to https | 308 | none |
| Post canonical and robots meta | self-canonical, index follow | none |
| robots.txt | Googlebot allowed, AI training crawlers blocked, sitemap declared | none |
| Empty category hubs | 18 of 43 hubs have 0 posts: technology-deep-dives, travel-local-guides, trivia-fun-facts, competitive-exam-prep, philosophy-ethics-wisdom, food-cooking, agriculture-farming, religion-beliefs, literature-books, arts-design, music, movies-entertainment, sports, gaming-esports, fashion-beauty, photography-video, automotive-industry, manufacturing-industry. Indexable, canonical, in sitemap at priority 0.8, "Coming Soon" copy. | **Highest-value quick fix:** drop empty hubs from the sitemap (and consider noindex until 5+ posts). Needs a code change, so it goes through the normal change gate. |
| opengraph-image routes | 200 image/png, no X-Robots-Tag | optional: add noindex header on /opengraph-image paths |

## 6. Orphans (31)

No body link, no seeAlso inbound, not in a learning path, no auto-related inbound. Fix: 2 to 3 contextual body links each plus one seeAlso from the nearest hub post.

- math-numbers/vedic-math-basics (other)
- history-timeline-facts/mesoamerican-civilizations-maya-aztec-inca (DNI)
- history-timeline-facts/common-history-myths-and-misconceptions (DNI)
- units-measurement-conversions/screen-size-and-resolution-units-explained (DNI)
- units-measurement-conversions/shoe-and-clothing-size-conversion-across-countries (DNI)
- units-measurement-conversions/height-measurement-conventions-feet-inches-vs-centimeters (other)
- units-measurement-conversions/historical-origins-of-length-units-foot-cubit-yard (other)
- units-measurement-conversions/leap-years-and-calendar-math (other)
- units-measurement-conversions/shipping-container-and-packaging-volume-standards (DNI)
- units-measurement-conversions/carats-and-precious-metal-weight-units (DNI)
- units-measurement-conversions/understanding-stone-as-a-weight-unit (DNI)
- general-awareness-basics/how-international-sporting-events-get-awarded-olympics-world-cup (DNI)
- general-awareness-basics/how-to-build-a-personal-news-reading-habit (DNI)
- general-awareness-basics/understanding-refugee-and-migration-terminology (DNI)
- general-awareness-basics/what-makes-something-breaking-news (DNI)
- general-awareness-basics/freedom-of-information-what-it-means (DNI)
- general-awareness-basics/nobel-prizes-categories-and-how-winners-are-chosen (DNI)
- general-awareness-basics/understanding-press-freedom-rankings (other)
- health-body-basics/how-the-body-regulates-temperature-everyday-framing (DNI)
- health-body-basics/understanding-growth-and-development-milestones-general-informational (DNI)
- health-body-basics/when-a-headache-needs-medical-attention-general-guidance (DNI)
- health-body-basics/oral-hygiene-basics-explained (DNI)
- health-body-basics/preventing-common-household-injuries (DNI)
- health-body-basics/skin-care-basics-general-non-diagnostic (DNI)
- health-body-basics/understanding-public-health-campaigns (other)
- environment-nature/everyday-actions-with-outsized-environmental-impact (other)
- environment-nature/plastic-bans-and-policy-around-the-world (other)
- environment-nature/sustainable-fashion-and-fast-fashions-impact (DNI)
- personal-finance-basics/how-inflation-proofing-strategies-work-conceptual-overview (DNI)
- personal-finance-basics/understanding-currency-and-exchange-rates-in-daily-life (DNI)
- legal-documentation-howtos/power-of-attorney-explained (DNI)

## 7. Prune and merge plan (max 5 per week, 301 only, existing URL segments only, no new URLs)

Applies only after the founder lifts the pause and /seo-committee confirms. Each merge: fold unique paragraphs and sources into the target, add a permanent redirect in next.config, remove the source from the registry and sitemap, repoint inbound links and seeAlso, and note it in the roadmap log. Nothing is pruned outright.

**Week 1**
1. career-study-skills/how-procrastination-actually-works to psychology-human-behavior/how-procrastination-actually-works-in-the-brain
2. career-study-skills/what-active-listening-actually-looks-like to life-skills-etiquette/what-active-listening-actually-looks-like-in-practice
3. technology-basics/what-a-password-manager-actually-does to digital-safety-privacy/how-password-managers-actually-protect-you
4. technology-basics/what-a-digital-footprint-actually-means to digital-safety-privacy/what-your-digital-footprint-actually-reveals
5. personal-finance-basics/saving-for-short-term-vs-long-term-goals to personal-finance-basics/setting-financial-goals-short-vs-long-term

**Week 2**
1. personal-finance-basics/understanding-tax-deductions-vs-tax-credits to government-schemes-benefits/what-tax-credits-actually-differ-from-tax-deductions
2. general-awareness-basics/freedom-of-information-what-it-means to legal-documentation-howtos/freedom-of-information-requests-explained
3. technology-basics/what-smart-home-ecosystem-compatibility-means to technology-basics/what-compatibility-actually-means
4. Review after reading both: government-schemes-benefits/how-unemployment-benefits-actually-get-calculated vs economics/how-unemployment-rate-actually-gets-calculated (likely distinct; merge only if content overlaps)
5. Review after reading both: home-diy-knowledge wall-anchor pair

**Week 3 and beyond:** decide per page from fresh GSC data; only act on pages still CNI after 4+ weeks.

Parallel non-redirect work, no cap needed: expand the 7 thin posts, add inbound links for the 31 orphans, differentiate the myths template.

## 8. What this audit could not verify

- GSC data is frozen at 2026-10-03 (Google's "last update"), so counts are 7 days old.
- Counts do not reconcile: 647 DNI + 76 CNI + about 210 not listed = 931, but GSC says 433 indexed. At most about 210 posts can be indexed by this arithmetic, so either part of the 433 is non-post URLs (hubs, og-image routes, www duplicates) or the lists lag. The "not listed = indexed" assumption is unconfirmed.
- 3 posts appear on both DNI and CNI lists; likely hash collision in my 4-character matching or GSC churn.
- DNI/CNI URLs were matched via a short hash of each URL (browser output limits), 647 of 664 matched; 17 DNI URLs did not match a local post (www, hubs, og routes, deleted).
- No per-URL traffic, impressions or query data was used, so "no value" verdicts are from content and structure only.
- Word counts are approximate JSX-text counts, not rendered text.
- No live rendering, Core Web Vitals, or JS-rendering check was done here (item 3 of the parent task).
- Empty hubs were identified from local post counts and one live fetch (technology-deep-dives, religion-beliefs); the rest of the 18 were not each fetched.
- Correlations (length, date, category) are confounded with each other; the strongest causal claim is only the date/batch effect.
