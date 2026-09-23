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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "El Niño and La Niña Explained",
  category: "general-science-facts",
  order: 48,
  subtopic: "earth-science",
  pillar: true,
  videoQueue: true,
  tags: ["el nino", "la nina", "ENSO", "ocean currents", "weather patterns"],
  date: "2026-09-22",
  updated: "2026-09-22",
  lastReviewed: "2026-09-22",
  excerpt: "El Niño isn't a storm — it's a shift in Pacific Ocean temperature that rearranges weather patterns worldwide for months at a time.",
  summary: "El Niño and La Niña are the warm and cool phases of a single, recurring Pacific Ocean cycle (ENSO) driven by trade winds. Neither is a storm itself — each is a persistent temperature shift in the tropical Pacific that redirects where the atmosphere rains, and where it stays dry, across much of the planet for months.",
  sources: [
    { label: "NOAA Climate.gov — What are El Niño and La Niña?", url: "https://www.climate.gov/news-features/understanding-climate/el-ni%C3%B1o-and-la-ni%C3%B1a-two-sides-same-coin" },
    { label: "NOAA Climate Prediction Center — ENSO Diagnostic Discussion", url: "https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/ensodisc.shtml" },
  ],
  seeAlso: [
    "general-science-facts/weather-and-climate-basics",
    "general-science-facts/what-makes-a-noreaster-different-from-a-hurricane",
    "general-science-facts/water-cycle-and-oceans",
    "environment-nature/global-warming-vs-climate-change-whats-the-difference",
  ],
  glossary: [
    { term: "ENSO", definition: "El Niño-Southern Oscillation — the full name for the recurring warm/cool cycle in the tropical Pacific that produces El Niño and La Niña." },
    { term: "Trade winds", definition: "Steady winds near the equator that normally blow east to west, from the Americas toward Asia." },
    { term: "Thermocline", definition: "The boundary layer in the ocean where temperature drops sharply from warm surface water to cold deep water." },
    { term: "Walker Circulation", definition: "A loop of rising and sinking air over the tropical Pacific that shifts location depending on ocean temperature." },
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
          "El Niño and La Niña are opposite phases of one ocean cycle (ENSO) — a shift in Pacific surface temperature, not a storm or a single weather event.",
          "The trigger is trade winds: when they weaken, warm water that's normally piled up near Asia sloshes back east toward South America, and the atmosphere's rain patterns follow the heat.",
          "An event is declared only once the Pacific stays 0.5°C or more above (El Niño) or below (La Niña) average for several months running — a one-week warm spell doesn't count.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Most of the time, steady <TermLink href="/general-science-facts/el-nino-and-la-nina-explained">trade winds</TermLink> blow warm surface water from South America across the Pacific toward Asia, piling it up near Indonesia and Australia. El Niño happens when those winds weaken and that warm water sloshes back east toward South America instead. That single shift in where the ocean&apos;s heat sits changes where storms form and where rain falls across a huge stretch of the planet, for months at a time. La Niña is the mirror image — the trade winds strengthen instead of weaken, and the eastern Pacific gets even cooler than normal.</div>}
        detailed={<div className="prose-p">The atmosphere and ocean are locked together here: rising warm, moist air over the western Pacific&apos;s pool of warm water forms the ascending branch of the <TermLink href="/general-science-facts/el-nino-and-la-nina-explained">Walker Circulation</TermLink>, a loop that sinks dry air back down over the cooler eastern Pacific. When trade winds relax, the warm pool spreads east, and the Walker Circulation&apos;s rising branch — along with the rain it produces — moves with it. This also flattens the ocean&apos;s <TermLink href="/general-science-facts/el-nino-and-la-nina-explained">thermocline</TermLink>, suppressing the cold-water upwelling that normally feeds Peru and Ecuador&apos;s coastal fisheries. Scientists track the whole system with the Oceanic Niño Index (ONI): a rolling 3-month average sea-surface temperature anomaly in a specific patch of the equatorial Pacific called the Niño 3.4 region. Five consecutive overlapping 3-month periods at or above +0.5°C is what officially defines an El Niño event; at or below −0.5°C defines La Niña.</div>}
      />
      <FootnoteAside>Peruvian fishermen are credited with naming the pattern &quot;El Niño&quot; (Spanish for &quot;the boy,&quot; referring to the Christ child) centuries ago, because the warm-water shift tends to arrive and peak around Christmas.</FootnoteAside>

      <p>
      That&apos;s the mechanism. What it actually does to weather on the other side of the planet depends on where you are relative to that shifted heat — which is where the effects stop being abstract.
      </p>

      <QuickCheck
        question="Trade winds over the tropical Pacific suddenly weaken for several months. What is the most direct consequence?"
        options={[
          { text: "A single hurricane forms immediately in the eastern Pacific", correct: false, explanation: "ENSO shifts the odds and location of storm activity over months — it doesn't directly spawn one specific storm the way a warm patch of ocean might feed an individual hurricane." },
          { text: "Warm surface water shifts east toward South America, moving rainfall patterns with it", correct: true, explanation: "Correct. Weaker trade winds let the western Pacific's warm pool spread east, dragging the Walker Circulation's rain-producing rising air along with it — the defining mechanism of El Niño." },
          { text: "Ocean temperatures return to average within a few days", correct: false, explanation: "The opposite happens — weakened trade winds let a sustained temperature shift build over months, which is exactly why ENSO events are declared on a multi-month basis, not a daily one." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The normal (neutral) Pacific state</h3>
      <div className="prose-p">
      In a typical year, trade winds pile warm water so high near Indonesia that sea level there runs about 40-50 cm higher than off South America. Cold, nutrient-rich water wells up along the Peruvian and Ecuadorian coast to replace the warm water being pushed away, feeding one of the world&apos;s most productive fisheries. This is the baseline the whole ENSO cycle deviates from in either direction.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A strong El Niño (1997-98)</h3>
      <div className="prose-p">
      During the 1997-98 event, the Niño 3.4 region peaked at roughly 2.3°C above average — one of the strongest on record. Upwelling off South America nearly shut down, collapsing anchovy catches. Meanwhile the shifted rain belt brought severe flooding to Peru and Ecuador, drought and wildfires to Indonesia and parts of Australia, and an unusually wet, mild winter across the southern United States. The same ocean shift produced flood in one hemisphere and drought in another — a genuine variation from the baseline case, not just &quot;more rain everywhere.&quot;
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How forecasters use it in practice</h3>
      <div className="prose-p">
      Agricultural planners, water utilities, and disaster-preparedness agencies watch NOAA&apos;s ENSO outlook months ahead of winter because a declared El Niño or La Niña shifts the odds — not the certainty — of a wetter or drier season in specific regions. California water managers, for instance, treat a strong El Niño winter as a higher-than-normal chance of heavy rain and plan reservoir capacity accordingly, while still tracking the season as it unfolds rather than assuming the seasonal outlook alone.
      </div>

      <QuickCheck
        question="Why did the 1997-98 El Niño cause flooding in Peru and drought in Indonesia at the same time?"
        options={[
          { text: "Coincidence — the two events were unrelated to each other", correct: false, explanation: "They share the same cause: the same shift in warm water and rising air that brings extra rain to one region reliably starves the other of the moisture it normally gets." },
          { text: "The shifted Walker Circulation moved the rain-producing rising air east, so rainfall increased where it arrived and dropped where it left", correct: true, explanation: "Correct. It's one mechanism producing opposite effects in different places — the rising, rain-making air didn't disappear, it moved from Indonesia's usual position toward the eastern Pacific." },
          { text: "Peru and Indonesia have opposite seasons, so one was always going to flood while the other dried out", correct: false, explanation: "Seasonal calendars alone don't explain it — both regions' typical rainfall patterns actually reversed that year specifically because of the ENSO-driven circulation shift, not ordinary season timing." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Normal Pacific vs. El Niño: where the warm water and rain go"
        type="detail"
        svgSrc="/diagrams/general-science-facts-el-nino-and-la-nina-explained-pacific.svg"
        altText="Diagram comparing the normal Pacific Ocean state, where trade winds pile warm water and rain near Indonesia while cold water upwells off South America, against the El Nino state, where weakened trade winds let warm water and rainfall shift east toward South America."
      />
      <p>
      Notice that nothing in the diagram adds or removes heat from the planet overall — the warm water and the rain it produces simply relocate from one side of the Pacific to the other, which is why El Niño&apos;s effects show up as opposite anomalies (wet vs. dry) in different regions simultaneously.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Calling El Niño itself \"a storm\" or a single weather event.", fix: "El Niño is a sustained ocean-temperature pattern lasting months; it changes the odds and location of storms and rainfall, but isn't a storm on its own." },
          { mistake: "Assuming El Niño means \"wetter everywhere\" and La Niña means \"drier everywhere.\"", fix: "Each phase brings wetter conditions to some regions and drier conditions to others, depending on where the shifted rain belt lands — check region-specific outlooks, not a single global rule." },
          { mistake: "Treating El Niño and climate change as the same phenomenon.", fix: "ENSO is a natural, recurring cycle that has operated for centuries; climate change is a separate long-term warming trend that can influence how intense individual El Niño/La Niña events become, but doesn't cause the cycle itself." },
        ]}
      />
      <MisconceptionCallout
        myth="El Niño is a specific storm or hurricane that forms in the Pacific."
        reality={<p>El Niño is a temperature pattern, not a storm. It describes a stretch of the equatorial Pacific Ocean running warmer than average for several consecutive months, driven by weakened trade winds. That warmth reorganizes where the atmosphere&apos;s rain-producing rising air sits, which in turn shifts storm tracks and rainfall across the Americas, Asia, and Australia — but the phenomenon itself is oceanic and atmospheric-scale, not a single identifiable storm system.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check NOAA's Climate Prediction Center ENSO outlook before making seasonal plans that depend on rainfall (agriculture, water storage, travel timing) in an ENSO-sensitive region.",
          "Remember that ENSO shifts probabilities, not certainties — treat a seasonal outlook as a tilted set of odds, not a guaranteed forecast.",
          "If you live somewhere ENSO-sensitive (the U.S. West Coast, Peru, Indonesia, eastern Australia, India's monsoon belt), look up which phase historically means wetter vs. drier for your specific region rather than assuming a global default.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is El Niño caused by climate change?", answer: "No — ENSO is a natural cycle that has been documented for centuries, well before modern climate change. Research suggests a warming climate may be changing how intense or frequent certain El Niño/La Niña patterns become, but it doesn't create the underlying cycle." },
          { question: "How often does El Niño happen?", answer: "El Niño and La Niña events occur irregularly, typically every 2 to 7 years, and a single event usually lasts 9 to 12 months, though some persist longer." },
          { question: "Does El Niño mean a wetter winter everywhere?", answer: "No. El Niño typically brings wetter conditions to the southern United States and parts of South America while bringing drier conditions to Indonesia, Australia, and parts of southern Asia — the effect depends on region." },
          { question: "What's the difference between El Niño and La Niña?", answer: "El Niño is the warm phase, when weakened trade winds let warm Pacific water shift east toward South America. La Niña is the cool phase, when stronger-than-normal trade winds push even more warm water west, leaving the eastern Pacific cooler than average." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
    </>
  );
}
