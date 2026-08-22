import React from 'react';
import { PostFrontmatter } from '@/types/post';
import {
  KeyTakeaways,
  ModeToggle,
  FootnoteAside,
  QuickCheck,
  DiagramBlock,
  MistakeList,
  MisconceptionCallout,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Global Warming vs Climate Change: What's the Difference",
  category: "environment-nature",
  order: 3,
  subtopic: "climate-change-fundamentals",
  tags: ["global warming", "climate change", "terminology", "weather vs climate", "NASA"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Global warming is one specific measurement — rising average temperature. Climate change is the broader set of effects that rising temperature triggers, including some regions getting colder or wetter, not just hotter.",
  summary: "Global warming refers specifically to the long-term rise in Earth's average surface temperature, while climate change is the broader term covering all the resulting shifts — in precipitation, storm intensity, sea level, and regional weather patterns — some of which don't look like simple warming at all.",
  sources: [
    { label: "NASA — Global Climate Change: Global Warming vs. Climate Change", url: "https://climate.nasa.gov/global-warming-vs-climate-change/" },
    { label: "NOAA — Climate.gov: What's the Difference Between Global Warming and Climate Change?", url: "https://www.climate.gov/news-features/climate-qa/whats-difference-between-global-warming-and-climate-change" },
    { label: "IPCC — Sixth Assessment Report, Working Group I Summary for Policymakers", url: "https://www.ipcc.ch/report/ar6/wg1/" },
  ],
  seeAlso: [
    "environment-nature/what-causes-climate-change-human-driven-mechanisms",
    "environment-nature/extreme-weather-and-the-climate-change-connection",
    "environment-nature/understanding-climate-models-and-predictions-general-literacy",
  ],
  glossary: [
    {"term":"Global warming","definition":"The long-term rise in Earth's average surface temperature, primarily driven by human greenhouse gas emissions since the mid-20th century."},
    {"term":"Climate change","definition":"The broader set of long-term shifts in temperature, precipitation, storm patterns, sea level, and other climate indicators, of which global warming is the primary driver but not the only observable effect."},
    {"term":"Weather","definition":"The short-term, local state of the atmosphere — a specific day's temperature, rain, or wind — as distinct from climate, which describes long-term statistical patterns over decades."},
    {"term":"Polar vortex disruption","definition":"A weakening or splitting of the normal circulating winds around the Arctic, which some research links to a warming Arctic, and which can push unusually cold air into mid-latitude regions even as the global average trends warmer."},
  ],
  author: {
    slug: "james-h-rivers",
    name: "James H. Rivers",
    credentialLine: "Founder, KnowThisWell",
  },
  youtubeStatus: "not-started",
  youtubeUrl: "",
  draft: false,
};

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "Global warming is a specific measurement: the rise in Earth's average surface temperature over time. Climate change is the umbrella term for everything that rising average temperature sets in motion.",
      "A single unusually cold winter in one region is a weather event, not evidence against either global warming or climate change — climate is a decades-long statistical pattern, not a single data point.",
      "Scientists shifted toward preferring 'climate change' as the broader term partly because some real effects — like certain polar vortex disruptions bringing extreme cold snaps — don't sound like 'warming' locally even though they're consistent with a warming-driven shift in atmospheric circulation.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p"><TermLink href="/environment-nature/global-warming-vs-climate-change-whats-the-difference">Global warming</TermLink> is the rise in Earth&apos;s average temperature — about 1.1°C since the late 1800s, per NASA and NOAA records. <TermLink href="/environment-nature/global-warming-vs-climate-change-whats-the-difference">Climate change</TermLink> is the wider term for everything that warming causes: shifting rainfall patterns, more intense heatwaves and storms in some regions, melting ice, rising seas, and yes, occasionally colder extreme weather in specific places due to disrupted atmospheric circulation. Warming is the driver; climate change is the full set of downstream effects.</div>}
      detailed={<div className="prose-p">The distinction matters because <TermLink href="/environment-nature/global-warming-vs-climate-change-whats-the-difference">weather</TermLink> and climate operate on different timescales and different spatial scales. A single cold week in one city is weather — noisy, local, and not evidence about the multi-decade global trend. Climate change describes statistical shifts measured over decades and averaged globally, including some counterintuitive regional effects: research increasingly links Arctic warming (which is happening roughly twice as fast as the global average) to <TermLink href="/environment-nature/global-warming-vs-climate-change-whats-the-difference">polar vortex disruption</TermLink> events that can push unusually cold Arctic air into mid-latitude regions like the central United States or Europe for a week or two, even as the planet&apos;s yearly average temperature keeps climbing. This is exactly why NASA and NOAA both actively promote &quot;climate change&quot; as the more accurate umbrella term — &quot;global warming&quot; alone invites confusion when a specific place experiences an unusually cold spell.</div>}
      />
      <FootnoteAside>The term &quot;global warming&quot; dates to a 1975 paper by geochemist Wallace Broecker; &quot;climate change&quot; became the more common scientific and institutional term afterward as research revealed the wider range of regional and precipitation-related effects beyond a simple uniform temperature rise — the terminology shift reflects growing scientific understanding, not a rebranding to obscure anything.</FootnoteAside>

      <p>
      The practical test for telling the two terms apart: if a claim is about the specific number (a temperature trend), it&apos;s about global warming; if it&apos;s about the broader pattern of effects (storms, droughts, sea level, ecosystem shifts), it&apos;s about climate change.
      </p>

      <QuickCheck
      question="A news report says 'a record cold snap hit the Midwest this week, disproving climate change.' What's the actual flaw in this reasoning?"
      options={[
      { text: "Cold snaps genuinely can't happen if climate change is real, so the report must be fabricated", correct: false, explanation: "Cold snaps are real, documented weather events and can absolutely happen during a long-term warming trend — the flaw isn't that the cold snap didn't occur, it's in what conclusion is drawn from it." },
      { text: "It confuses a single local weather event (one region, one week) with the global, multi-decade climate trend — regional cold snaps, sometimes linked to disrupted circulation from a warming Arctic, are consistent with climate change, not evidence against it", correct: true, explanation: "Correct. Climate change describes long-term, globally-averaged shifts; a single regional cold week is weather, and some cold-snap mechanisms (like polar vortex disruption) are themselves linked to a warming Arctic, making them consistent with the broader trend rather than contradicting it." },
      { text: "The report is correct — one clear counterexample is enough to disprove a scientific trend", correct: false, explanation: "A single data point can't disprove a statistical, multi-decade, globally-averaged trend — that's true of any trend in any field, not just climate. The trend itself is assessed from the full record, not from any one week or region." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Reading a global temperature anomaly chart correctly (baseline case)</h3>
      <div className="prose-p">
      NASA&apos;s GISS temperature record shows global average temperature roughly 1.1°C above the late-1800s baseline, as a smoothed multi-year trend line with year-to-year noise around it. Some individual years sit below the trend line, some above — 2023 and 2024 both ran notably warmer than the trend due to a strong El Niño pattern layered on top of the underlying warming. The trend line, not any single year, is the &quot;global warming&quot; figure.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A region getting wetter, not just hotter (edge case / variation)</h3>
      <div className="prose-p">
      Some regions, particularly parts of the northeastern United States and Northern Europe, have seen measurably increased heavy-precipitation events as part of climate change, per NOAA&apos;s National Climate Assessment — warmer air holds more moisture (about 7% more per degree Celsius of warming, a well-established physical relationship called the Clausius-Clapeyron relation), so when storms do form, they can dump more rain. This is a genuine climate change effect that isn&apos;t captured by the phrase &quot;global warming&quot; alone, since the headline experience locally is &quot;wetter,&quot; not &quot;hotter.&quot;
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The 2021 Texas winter storm and Arctic connection (real-world / applied case)</h3>
      <div className="prose-p">
      In February 2021, an unusually severe cold snap hit Texas, causing widespread power failures. Several peer-reviewed studies have investigated a potential link between a disrupted, weakened polar vortex — a pattern some research connects to faster Arctic warming — and increased odds of this kind of extreme cold intrusion into mid-latitude regions. The research on the specific vortex-to-cold-snap link continues to develop, but the broader point stands regardless: a severe cold event in one region during one week says nothing about the multi-decade global average trend, and &quot;climate change&quot; is the term built to hold both the warming trend and events like this one without contradiction.
      </div>

      <QuickCheck
      question="Why do NASA and NOAA prefer 'climate change' over 'global warming' as the primary umbrella term in their public communications?"
      options={[
      { text: "Because global warming isn't actually happening and they needed a vaguer term", correct: false, explanation: "Global warming — the rise in average global temperature — is a real, measured trend documented by both agencies. The terminology preference isn't about disputing that; it's about accuracy for the wider range of effects." },
      { text: "Because 'climate change' more accurately captures the full range of effects — including regional cooling events, shifting precipitation, and storm pattern changes — that 'global warming' alone doesn't clearly convey", correct: true, explanation: "Correct. Global warming (rising average temperature) is one real, specific measurement and the primary driver, but climate change is the more complete term for everything that measurement sets in motion regionally, including some effects that don't sound like simple warming." },
      { text: "The two terms are actually interchangeable with no meaningful distinction, and the preference is arbitrary", correct: false, explanation: "There is a real, meaningful distinction — global warming is a specific temperature-trend measurement, while climate change is the broader umbrella covering the full set of resulting shifts, some of which (like certain regional cold-snap mechanisms) aren't intuitively described by the word 'warming.'" },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Global warming as one measurement inside the broader climate change umbrella"
      type="comparison"
      svgSrc="/diagrams/environment-nature-global-warming-vs-climate-change-whats-the-difference-umbrella.svg"
      altText="A large outer circle labeled climate change containing several smaller connected circles labeled rising average temperature (global warming), shifting precipitation patterns, more intense storms in some regions, melting ice and rising seas, and disrupted circulation causing regional cold snaps, illustrating that global warming is one specific measurement inside the broader set of climate change effects."
      />
      <p>
      Global warming sits inside climate change as one specific, well-measured driver — the outer circle includes several other effects that follow from it but aren&apos;t themselves simply &quot;warming.&quot;
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating any single cold day, week, or storm as evidence against climate change.", fix: "Compare against the multi-decade, globally-averaged trend, not a single local event — weather is noisy on short timescales; climate is the pattern that emerges over decades." },
      { mistake: "Using 'global warming' and 'climate change' as if they mean exactly the same thing in every context.", fix: "Use 'global warming' specifically when referring to the average temperature trend itself, and 'climate change' when referring to the broader set of resulting effects, including ones that aren't simple temperature increases." },
      { mistake: "Assuming a region getting colder or wetter is inconsistent with a warming planet.", fix: "Regional and even seasonal cooling or increased precipitation events are documented, real parts of climate change — global averages and local, short-term experiences are not the same measurement." },
      ]}
      />
      <MisconceptionCallout
      myth="If climate change is real, every place on Earth should be getting uniformly hotter every year, with no exceptions."
      reality={<p>Climate change describes a global, multi-decade average trend, not a uniform, region-by-region, year-by-year guarantee. Some regions warm faster than others (the Arctic warms roughly twice as fast as the global average), some effects show up as more intense precipitation rather than heat, and disrupted atmospheric circulation patterns can occasionally push extreme cold into specific regions even during a warming decade. None of this contradicts the underlying trend — it&apos;s exactly the kind of regional and seasonal variability climate science accounts for.</p>}
      />

      <QuickCheck
      question="Does a genuinely warming global climate rule out the possibility of any region experiencing an unusually cold winter in a given year?"
      options={[
      { text: "Yes — if the planet is warming, every region must show warming every year without exception", correct: false, explanation: "This isn't how averaged, global, multi-decade trends work in any scientific field — a global average trend is fully compatible with regional and yearly variation around it." },
      { text: "No — global warming describes a long-term, globally-averaged trend, and individual regions can still experience unusually cold events in a given year or season, sometimes even linked to warming-driven circulation changes", correct: true, explanation: "Correct. The global average trend and any single region's short-term weather are different measurements on different timescales — regional cold events remain fully possible, and are documented, even during a decades-long warming trend." },
      { text: "No, but only because temperature records before 1950 are unreliable", correct: false, explanation: "Record reliability isn't the relevant issue here — the reason a warming global average and a regional cold event can coexist is the basic distinction between weather (local, short-term) and climate (global, long-term average), not a data quality question." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Use 'global warming' specifically when discussing the average temperature trend, and 'climate change' for the broader set of effects — precision helps avoid talking past people in a discussion.",
      "When you see a single weather event cited as proof for or against climate change, check whether the claim is really about the multi-decade average trend or just one data point.",
      "Look at NASA's or NOAA's actual temperature anomaly charts directly if you want to see the real trend line versus individual noisy years for yourself.",
      "Read the extreme weather post in this cluster to see how climate change connects to storm intensity specifically, beyond the temperature-trend headline.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Is global warming the same thing as climate change?", answer: "No. Global warming refers specifically to the rise in Earth's average surface temperature. Climate change is the broader term covering all the resulting effects — shifting precipitation, more intense storms, melting ice, sea level rise, and even some regional cold-snap mechanisms — of which warming is the primary driver." },
      { question: "Why did scientists start using 'climate change' instead of 'global warming'?", answer: "Because 'climate change' more accurately captures the full range of observed effects, some of which — like a disrupted polar vortex pushing cold air into a normally milder region — don't intuitively sound like 'warming' even though they're linked to the same underlying trend." },
      { question: "Can it snow more or get colder somewhere even if global warming is real?", answer: "Yes. A globally-averaged, multi-decade warming trend is fully compatible with individual regions experiencing colder-than-normal weeks or increased snowfall in specific years — these are documented, real weather events, not evidence against the broader trend." },
      { question: "What is the actual measured amount of global warming so far?", answer: "Roughly 1.1°C above the late-1800s pre-industrial baseline, according to NASA and NOAA's combined temperature records, with the Arctic warming at roughly twice that global average rate." },
      { question: "Does climate change only mean things are getting hotter?", answer: "No — climate change includes shifting rainfall patterns, more intense storms and heatwaves in some regions, melting glaciers and sea ice, rising sea levels, and altered atmospheric circulation that can bring unusual cold to specific places, in addition to the underlying average warming trend." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
