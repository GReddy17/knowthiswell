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
  title: "Air Pollution: Sources & Health Impact",
  category: "environment-nature",
  order: 9,
  subtopic: "pollution-and-its-sources",
  tags: ["air pollution", "AQI", "PM2.5", "air quality", "public health"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "The Air Quality Index isn't a raw pollutant reading — it's a converted 0-500 health-risk scale built from the worst-performing pollutant of the moment, most often fine particulate matter (PM2.5).",
  summary: "Air pollution comes from a handful of major source categories — vehicle exhaust, power generation, industrial combustion, and wildfire smoke — and its health impact is tracked through the Air Quality Index, a standardized scale that converts raw pollutant concentrations into a single comparable health-risk number.",
  sources: [
    { label: "US EPA — AirNow: AQI Basics", url: "https://www.airnow.gov/aqi/aqi-basics/" },
    { label: "World Health Organization — Ambient (outdoor) air pollution", url: "https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health" },
    { label: "US EPA — Particulate Matter (PM) Basics", url: "https://www.epa.gov/pm-pollution/particulate-matter-pm-basics" },
  ],
  seeAlso: [
    "environment-nature/water-pollution-causes-and-consequences",
    "environment-nature/industrial-pollution-and-regulation-basics",
    "environment-nature/light-pollution-and-its-effects",
  ],
  glossary: [
    {"term":"PM2.5","definition":"Fine particulate matter 2.5 micrometers or smaller in diameter, small enough to penetrate deep into the lungs and bloodstream — the pollutant that most often drives a high AQI reading."},
    {"term":"Air Quality Index (AQI)","definition":"A standardized 0-500 scale published by the EPA that converts raw pollutant concentrations into a single comparable health-risk number, divided into six color-coded categories."},
    {"term":"Ground-level ozone","definition":"A secondary pollutant formed when vehicle and industrial emissions react with sunlight, distinct from the protective ozone layer high in the stratosphere."},
    {"term":"Criteria pollutant","definition":"One of six pollutants (particulate matter, ozone, carbon monoxide, sulfur dioxide, nitrogen dioxide, and lead) that the EPA regulates because of well-documented health and environmental effects."},
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
      "Air pollution comes overwhelmingly from a small number of source categories: vehicle exhaust, power generation, industrial combustion, agricultural burning, and (increasingly) wildfire smoke.",
      "The Air Quality Index (AQI) is not a direct pollutant concentration — it's a converted 0-500 health-risk scale, calculated from whichever regulated pollutant is performing worst at that moment.",
      "PM2.5, fine particulate matter small enough to reach deep into the lungs and bloodstream, is the pollutant most likely to be driving a high AQI reading in most cities most of the time.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Air pollution is a mix of gases and particles released mostly by burning things — gasoline in car engines, coal or gas in power plants, fuel in factories, and increasingly, wildfires. To make all of that comparable and easy to act on, agencies like the EPA convert raw pollution measurements into the <TermLink href="/environment-nature/air-pollution-sources-and-health-impact">Air Quality Index (AQI)</TermLink>, a single number from 0 to 500 where higher means worse for your health.</div>}
      detailed={<div className="prose-p">The AQI is calculated separately for each <TermLink href="/environment-nature/air-pollution-sources-and-health-impact">criteria pollutant</TermLink> — <TermLink href="/environment-nature/air-pollution-sources-and-health-impact">PM2.5</TermLink>, PM10, <TermLink href="/environment-nature/air-pollution-sources-and-health-impact">ground-level ozone</TermLink>, carbon monoxide, sulfur dioxide, and nitrogen dioxide — using EPA-published breakpoint tables that map a raw concentration range (say, 12.1-35.4 micrograms per cubic meter of PM2.5) onto a corresponding AQI range (51-100, &quot;Moderate&quot;). The reported AQI for a location is simply the highest of these six sub-index values, since that&apos;s the pollutant posing the greatest health risk at that moment. This is why AQI composition shifts by season and geography: PM2.5 typically dominates during wildfire smoke events and winter inversions, while ozone tends to dominate on hot, sunny summer afternoons when sunlight drives the photochemical reactions that form it.</div>}
      />
      <FootnoteAside>PM2.5&apos;s health danger comes from its size, not just its chemistry — particles under 2.5 micrometers (about 3% the width of a human hair) are small enough to bypass the lungs&apos; natural filtering and reach the bloodstream directly, which is why PM2.5 exposure is linked to cardiovascular disease, not just respiratory illness.</FootnoteAside>

      <p>
      Because the AQI is a converted risk scale rather than a raw measurement, the same numeric AQI value always represents roughly the same health risk, whether it was driven by wildfire smoke in California or vehicle exhaust in a dense city — that comparability is the entire point of the system.
      </p>

      <QuickCheck
      question="A city reports an AQI of 165, driven by ozone, on a hot summer afternoon. Does this mean the raw ozone concentration in the air is literally 165 micrograms per cubic meter?"
      options={[
      { text: "Yes, AQI values are the same number as the pollutant's raw concentration in micrograms per cubic meter", correct: false, explanation: "AQI is a converted scale, not a direct concentration reading. A raw ozone concentration gets mapped onto the 0-500 AQI scale using EPA breakpoint tables — the two numbers are related but not numerically identical." },
      { text: "No — 165 is the converted AQI value from EPA breakpoint tables, which fall into the 'Unhealthy' category (151-200); the raw ozone concentration behind it is a different number in different units (parts per billion)", correct: true, explanation: "Correct. The AQI deliberately abstracts away the raw units and concentration ranges of six different pollutants so they're all comparable on one 0-500 health-risk scale." },
      { text: "AQI only applies to particulate matter, so an ozone-driven reading wouldn't be reported as an AQI value at all", correct: false, explanation: "AQI is calculated for all six criteria pollutants, including ozone — whichever pollutant's sub-index is highest at a given time and place becomes the reported AQI." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Reading a daily AQI report (baseline case)</h3>
      <div className="prose-p">
      A city&apos;s air quality app shows AQI 42 for the day, categorized &quot;Good.&quot; That single number already accounts for PM2.5, ozone, and the other four criteria pollutants — the app is reporting whichever sub-index came out highest, and 42 means even the worst-performing pollutant that day posed minimal health risk to the general public.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A wildfire smoke event (edge case / variation)</h3>
      <div className="prose-p">
      During a nearby wildfire, PM2.5 concentrations spike sharply while ozone and the other pollutants stay roughly normal. The reported AQI jumps from 45 to 210 (&quot;Very Unhealthy&quot;) within hours, driven entirely by the PM2.5 sub-index now dominating the calculation — a clear illustration of why AQI is defined as the maximum across pollutants rather than an average, since averaging would have diluted the smoke spike with the unaffected pollutants and understated the real risk.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Comparing two cities with different pollution profiles (real-world / applied case)</h3>
      <div className="prose-p">
      A coastal city with heavy port and highway traffic reports AQI 95, driven by PM2.5 from diesel exhaust. An inland city with heavy summer sun and traffic reports the same AQI 95, but driven by ground-level ozone. Both residents face comparable overall health risk that day despite the pollution having entirely different chemical sources — which is exactly why regulators built a converted index instead of just publishing raw pollutant concentrations city by city.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The EPA Air Quality Index (AQI) scale"
      type="comparison"
      svgSrc="/diagrams/environment-nature-air-pollution-sources-and-health-impact-aqi-scale.svg"
      altText="The EPA Air Quality Index scale shown as six horizontal bands from left to right: Good 0 to 50, Moderate 51 to 100, Unhealthy for Sensitive Groups 101 to 150, Unhealthy 151 to 200, Very Unhealthy 201 to 300, and Hazardous 301 to 500, each band labeled with its name and numeric range."
      />
      <p>
      Each band corresponds to a specific public-health guidance level — at &quot;Unhealthy for Sensitive Groups,&quot; people with asthma, children, and older adults are advised to reduce prolonged outdoor exertion, while the general public isn&apos;t yet advised to change behavior until the &quot;Unhealthy&quot; band begins.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a 'Good' AQI day means zero pollution.", fix: "AQI 'Good' (0-50) means pollutant levels pose minimal risk, not zero pollutant presence — there is essentially no outdoor environment with literally zero measurable pollutants." },
      { mistake: "Treating AQI as an average of all pollutants rather than the worst one.", fix: "Remember AQI reports the maximum sub-index across the six criteria pollutants, specifically so a spike in one dangerous pollutant (like wildfire PM2.5) isn't diluted by other, unaffected pollutants." },
      { mistake: "Assuming indoor air is automatically safer during a high-AQI outdoor event.", fix: "PM2.5 from wildfire smoke and vehicle exhaust can infiltrate indoor spaces through gaps and ventilation systems — indoor air quality during a high-AQI event depends heavily on filtration, not just closed doors and windows." },
      ]}
      />
      <MisconceptionCallout
      myth="Air pollution is mostly a problem for heavily industrialized cities with visible smog — if you can't see haze, the air is fine."
      reality={<p>PM2.5, the pollutant most often driving elevated AQI readings, is frequently invisible to the naked eye at concentrations that still pose real health risk — visible haze typically only appears at much higher concentrations than the level where health guidance already recommends caution. Clear-looking air is not the same as clean air on the AQI scale.</p>}
      />

      <QuickCheck
      question="Why can air look perfectly clear on a day when the AQI is elevated into the 'Unhealthy for Sensitive Groups' range?"
      options={[
      { text: "The AQI reading must be wrong if the air looks clear, since visible haze always accompanies elevated pollution", correct: false, explanation: "PM2.5 concentrations that trigger health guidance are frequently well below the concentration needed to produce visible haze — clear air is not proof of a low AQI." },
      { text: "PM2.5, the pollutant that most often drives elevated AQI, is small and can be present at health-relevant concentrations well below what's needed to visibly haze the air", correct: true, explanation: "Correct. Visibility and health risk are correlated but not equivalent — by the time pollution is visibly hazy, AQI is often already well into unhealthy territory, not just approaching it." },
      { text: "AQI only measures gases, not particles, so it wouldn't correlate with visible haze anyway", correct: false, explanation: "AQI explicitly includes PM2.5 and PM10, both particulate pollutants — the issue isn't that AQI ignores particles, it's that health-relevant particle concentrations can be lower than visibility-relevant ones." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Check your local AQI (via AirNow.gov in the US, or your national equivalent) before planning extended outdoor exercise, especially if you have asthma or another respiratory condition.",
      "Treat 'clear-looking air' as no guarantee of a low AQI — check the actual number rather than judging by visibility alone.",
      "During a wildfire smoke event, understand that the AQI can be driven almost entirely by PM2.5 — check which pollutant is dominant, since that shapes the specific guidance (e.g. N95 masks specifically target particulates).",
      "If you're in a sensitive group (asthma, heart disease, pregnancy, young children, older adults), pay attention starting at the 'Unhealthy for Sensitive Groups' band, not just the 'Unhealthy' band meant for the general public.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is a good AQI number?", answer: "0-50 is categorized 'Good' by the EPA, meaning air quality poses little or no health risk. 51-100 ('Moderate') is still acceptable for most people, though unusually sensitive individuals may want to consider limiting prolonged outdoor exertion." },
      { question: "What causes most air pollution?", answer: "The largest ongoing sources are vehicle exhaust, fossil-fuel power generation, and industrial combustion. Wildfire smoke is an increasingly significant seasonal and regional source of PM2.5 specifically." },
      { question: "Is PM2.5 worse than ozone?", answer: "Both are regulated criteria pollutants with real health effects, but PM2.5 is generally considered the more dangerous pollutant per unit of exposure because its small particle size lets it penetrate deep into the lungs and bloodstream, contributing to both respiratory and cardiovascular disease." },
      { question: "Does AQI account for indoor air quality?", answer: "No — the published AQI reflects outdoor ambient air monitored at fixed stations. Indoor air quality during a high-AQI event depends on a building's ventilation, filtration, and how well it's sealed against outdoor air infiltration." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
