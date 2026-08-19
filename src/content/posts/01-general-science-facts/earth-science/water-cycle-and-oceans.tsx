import React from 'react';
import { PostMeta, PostFrontmatter } from '@/types/post';
import {
  KeyTakeaways,
  ModeToggle,
  FootnoteAside,
  QuickCheck,
  DiagramBlock,
  MistakeList,
  MisconceptionCallout,
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Water Cycle & Oceans: Where Earth's Water Actually Is, and How It Moves",
  category: "general-science-facts",
  order: 42,
  subtopic: "earth-science",
  tags: [
    "water cycle",
    "oceans",
    "evaporation",
    "precipitation",
    "groundwater",
    "earth science",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Over 96% of Earth's water is ocean saltwater, and most of the remaining freshwater is locked in ice or deep underground — here's how the water cycle moves it all.",
  summary: "The water cycle is the continuous movement of water between oceans, atmosphere, and land through evaporation, condensation, precipitation, and runoff.",
  sources: [
    { label: "USGS Water Science School", url: "https://www.usgs.gov/special-topics/water-science-school" },
    { label: "NOAA — National Ocean Service", url: "https://oceanservice.noaa.gov/" },
    { label: "NASA Earth Observatory", url: "https://earthobservatory.nasa.gov/" },
  ],
  seeAlso: [
    "general-science-facts/matter-and-states-of-matter",
    "general-science-facts/heat-and-temperature",
    "general-science-facts/weather-and-climate-basics",
    "general-science-facts/seasons-and-earths-tilt",
    "general-science-facts/natural-disasters",
  ],
  glossary: [
    { term: "Evaporation", definition: "The process by which liquid water absorbs enough heat energy to turn into water vapor, primarily from oceans, lakes, and rivers." },
    { term: "Condensation", definition: "The process by which water vapor cools and turns back into liquid droplets, forming clouds and fog." },
    { term: "Precipitation", definition: "Water falling from the atmosphere to Earth's surface as rain, snow, sleet, or hail." },
    { term: "Transpiration", definition: "The release of water vapor from plants through pores in their leaves, part of the water cycle alongside evaporation." },
    { term: "Groundwater", definition: "Water stored underground in the pore spaces and cracks of soil and rock, often accessed through wells." },
    { term: "Residence time", definition: "The average length of time a water molecule stays in a particular part of the water cycle — atmosphere, ocean, ice, or groundwater — before moving on." },
    { term: "Thermohaline circulation", definition: "A global pattern of deep ocean currents driven by differences in water density caused by temperature and salinity." },
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
          "About 96.5% of all water on Earth is saltwater in the oceans; of the remaining freshwater, most is locked in glaciers and ice or deep groundwater, leaving less than 1% of Earth's total water as accessible surface freshwater in lakes and rivers.",
          "The water cycle moves the same fixed amount of water endlessly between ocean, atmosphere, and land through evaporation, condensation, precipitation, and runoff — no water is created or destroyed in the process, only relocated and changed in state.",
          "Different parts of the cycle hold onto water for wildly different lengths of time: water vapor lasts about 9 days in the atmosphere on average, while deep groundwater can take centuries to millennia to move, which is why aquifer depletion doesn't reverse quickly.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/general-science-facts/water-cycle-and-oceans">water cycle</TermLink> is the ongoing loop water travels through: the sun heats the ocean surface, turning some of that water into invisible vapor that rises into the sky (<TermLink href="/general-science-facts/water-cycle-and-oceans">evaporation</TermLink>). High in the cooler atmosphere, that vapor turns back into tiny water droplets, forming clouds (<TermLink href="/general-science-facts/water-cycle-and-oceans">condensation</TermLink>). When those droplets combine and get heavy enough, they fall back down as rain or snow (<TermLink href="/general-science-facts/water-cycle-and-oceans">precipitation</TermLink>), which then flows into rivers, soaks into the ground, or runs straight back to the ocean — where the whole cycle starts again.</div>}
        detailed={<div className="prose-p">Plants add a second pathway into the atmosphere alongside evaporation: <TermLink href="/general-science-facts/water-cycle-and-oceans">transpiration</TermLink>, the release of water vapor through pores in leaves, which combined with evaporation is often called evapotranspiration. Not all precipitation runs off immediately — a portion infiltrates the soil and becomes <TermLink href="/general-science-facts/water-cycle-and-oceans">groundwater</TermLink>, moving through rock and sediment far more slowly than surface water. Each reservoir in the cycle has a characteristic <TermLink href="/general-science-facts/water-cycle-and-oceans">residence time</TermLink> — the average time a water molecule spends there before moving on — ranging from about 9 days in the atmosphere to roughly 3,200 years in the ocean overall, and far longer in deep aquifers or polar ice sheets. Ocean water itself isn&apos;t static either: <TermLink href="/general-science-facts/water-cycle-and-oceans">thermohaline circulation</TermLink>, a global &quot;conveyor belt&quot; of deep currents driven by differences in temperature and salinity (and therefore density), redistributes heat and water around the planet over centuries.</div>}
      />
      <FootnoteAside>The average depth of Earth&apos;s oceans is about 3,682 meters (roughly 12,080 feet) — deep enough that if Mount Everest were dropped into the deepest known point, the Challenger Deep in the Mariana Trench (nearly 11,000 meters), its peak would still sit over 2 kilometers underwater.</FootnoteAside>

      <p>
      That&apos;s the loop in outline. The details worth knowing are how unevenly Earth&apos;s water is actually distributed, and how differently each part of the system holds onto it before letting go.
      </p>

      <QuickCheck
        question="If evaporation, condensation, and precipitation just keep cycling water endlessly, is any new water being created in the process?"
        options={[
          { text: "No — the water cycle relocates and changes the state of a fixed total amount of water; it doesn't create or destroy any of it", correct: true, explanation: "Correct. The water cycle is a closed loop that moves and changes the state of existing water — evaporation, condensation, and precipitation don't add or remove water from the planet overall." },
          { text: "Yes — evaporation actually creates new water molecules from the surrounding air", correct: false, explanation: "Evaporation is a physical state change (liquid to vapor) of existing water molecules, not a chemical process that creates new ones." },
          { text: "Yes — rain is newly formed water that didn't exist before it fell", correct: false, explanation: "Rain is condensed water vapor that was already part of the cycle, having evaporated from a surface earlier — it isn't newly created matter." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Tracing a single water molecule through the cycle (baseline case)</h3>
      <div className="prose-p">
      A water molecule evaporates from the surface of the Pacific Ocean, absorbing latent heat energy as it turns to vapor. It rises, cools, and condenses into a cloud droplet within roughly 9 days on average — the typical residence time of water vapor in the atmosphere, according to USGS estimates. That droplet falls as rain over a mountain range, and from there its path forks: it might run off immediately into a stream and reach the ocean again within weeks, or it might infiltrate the soil and become groundwater, where it could sit for decades, centuries, or in some deep aquifers, thousands of years before re-emerging. The same molecule, over Earth&apos;s history, has likely made this loop — ocean to air to land and back — countless times.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The scale of a major river&apos;s daily discharge (edge case / variation)</h3>
      <div className="prose-p">
      Most water cycle discussions focus on the invisible, slow parts — vapor and groundwater. Rivers are the visible, fast-moving exception, and their scale is easy to underestimate. The Mississippi River discharges roughly 16,800 cubic meters of water into the Gulf of Mexico every second on average, according to USGS gauging data. Multiplied across a full day (86,400 seconds), that&apos;s over 1.45 billion cubic meters of water — more than 580,000 Olympic swimming pools&apos; worth — returning to the ocean in a single 24-hour period from just one river system, illustrating how much of the water cycle&apos;s total flow moves through a comparatively small number of major rivers.
      </div>

      <QuickCheck
        question="A river discharges a large, steady volume of water into the ocean every day. Where did that water most directly come from?"
        options={[
          { text: "Precipitation and runoff collected across the river's entire watershed, including surface runoff, tributary streams, and groundwater seeping into the riverbed", correct: true, explanation: "Correct. A river's discharge is the accumulated output of precipitation falling across its whole drainage basin, funneled together through smaller streams, surface runoff, and groundwater inflow." },
          { text: "The river creates its own water independently of rainfall or groundwater in its watershed", correct: false, explanation: "Rivers don't generate water on their own — their flow is entirely sourced from precipitation, runoff, and groundwater within their watershed." },
          { text: "Ocean water flows upstream into the river and is simply being returned to where it came from", correct: false, explanation: "River flow moves downstream toward the ocean, not the reverse (tidal effects near river mouths are a minor, localized exception) — the water discharged originated from precipitation over land, not from the ocean itself." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why oceans moderate coastal climates (real-world / applied case)</h3>
      <div className="prose-p">
      Water has an unusually high specific heat capacity — it takes a large amount of energy to change its temperature compared to most other common substances, including air and land. Because oceans cover about 71% of Earth&apos;s surface and absorb enormous amounts of solar energy without heating up quickly, they act as a massive thermal buffer. This is why coastal cities typically experience milder seasonal temperature swings than inland cities at the same latitude: the nearby ocean absorbs heat slowly through summer and releases it slowly through winter, moderating both extremes. Inland regions, lacking that buffer, swing to hotter summers and colder winters for the same amount of incoming sunlight over the year.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The water cycle: evaporation, condensation, precipitation, and runoff between ocean, atmosphere, and land"
        type="flow"
        svgSrc="/diagrams/general-science-facts-water-cycle-and-oceans-cycle-diagram.svg"
        altText="Diagram showing the ocean on one side and mountains and land on the other, with arrows labeled evaporation rising from the ocean surface into clouds, transpiration rising from plants on land, condensation forming clouds, precipitation falling as rain and snow onto mountains, surface runoff flowing through rivers back to the ocean, and infiltration arrows showing water soaking into the ground to become groundwater that also flows back toward the ocean."
      />
      <p>
      Follow the arrows starting at the ocean surface, the largest source in the diagram by far: solar heating drives evaporation upward, water vapor condenses into clouds, and precipitation falls over both ocean and land. Over land, precipitation splits into two paths — fast surface runoff through streams and rivers back to the ocean, and slow infiltration into groundwater, which can take a vastly longer route back. Every arrow in this diagram represents the same water being relocated and changing physical state, never created or destroyed, which is the core idea the whole cycle rests on.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking rain comes from 'empty' sky rather than water vapor that was already there, evaporated from a surface earlier.", fix: "Rain is condensed water vapor falling back down — trace it backward and it always leads to an earlier evaporation event, usually from an ocean, lake, or plant." },
          { mistake: "Treating the water cycle as strictly one-directional: ocean evaporates, it rains, done.", fix: "The cycle includes multiple parallel pathways — transpiration from plants, infiltration into groundwater, and surface runoff — not just a single ocean-to-rain loop." },
          { mistake: "Assuming freshwater and saltwater differ only in taste, with roughly similar amounts of each available worldwide.", fix: "The difference in scale is enormous: saltwater makes up about 96.5% of all water on Earth, and most of the remaining freshwater is locked in ice or deep groundwater, not readily accessible surface freshwater." },
        ]}
      />
      <MisconceptionCallout
        myth="Most of the water on Earth is available freshwater we could use if we needed to."
        reality={<p>The opposite is true. According to USGS estimates, roughly 96.5% of all water on Earth is saline ocean water. Of the remaining 2.5% that&apos;s freshwater, about 68.7% is locked in glaciers and ice caps and roughly 30.1% is groundwater, much of it too deep or too slow-moving to access easily. That leaves well under 1% of all water on Earth as the surface freshwater in lakes, rivers, and shallow accessible groundwater that supplies most human use — a strikingly small slice of the total, which is exactly why freshwater scarcity is a real regional issue even though water, in total, seems abundant.</p>}
      />

      <QuickCheck
        question="If nearly 71% of Earth's surface is covered in water, why do some regions still face serious freshwater shortages?"
        options={[
          { text: "The vast majority of that water is ocean saltwater, and most of the small remaining freshwater share is locked in ice or deep groundwater, leaving well under 1% of Earth's total water as easily accessible freshwater", correct: true, explanation: "Correct. Total water coverage doesn't reflect usable freshwater availability — nearly all of Earth's water is saline or otherwise inaccessible, so regional freshwater access depends on local precipitation, rivers, and shallow groundwater, not global totals." },
          { text: "Freshwater shortages only happen in regions with no ocean access nearby", correct: false, explanation: "Ocean proximity doesn't solve freshwater scarcity, since seawater isn't directly usable for drinking or most agriculture without energy-intensive desalination — many coastal regions still face freshwater shortages." },
          { text: "Global freshwater totals fluctuate dramatically year to year, causing temporary regional shortages", correct: false, explanation: "The global distribution between saltwater, ice, groundwater, and surface freshwater is relatively stable — regional shortages come from uneven distribution and local precipitation/usage patterns, not large year-to-year swings in the global total." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Calculate a river's daily water volume from its discharge rate"
        fields={[
          { key: "dischargeCubicMPerSec", label: "River discharge rate (cubic meters/second)", defaultValue: 16800 },
        ]}
        resultLabel="Water volume moved per day (cubic meters)"
        formula="riverDailyDischarge"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time it rains, trace the water backward in your head: cloud, condensation, evaporation, an ocean or lake surface somewhere upwind.",
          "Try the calculator above with a river near you (discharge rates are published by USGS gauging stations) to see the real daily volume moving past a single point.",
          "Notice whether you live in a coastal or inland location and connect it to milder or more extreme seasonal temperature swings, driven by the ocean's high specific heat capacity.",
          "Read the related entry on Weather & Climate Basics to see how evaporation and condensation also drive day-to-day weather, not just the long-term cycle.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What percentage of Earth's water is fresh?", answer: "About 2.5% of all water on Earth is freshwater, according to USGS estimates. The rest, roughly 96.5%, is saline ocean water. Of that small freshwater share, most is locked in glaciers, ice caps, or deep groundwater." },
          { question: "How does the water cycle work?", answer: "Solar heat evaporates water from oceans and land surfaces (and plants release it through transpiration); the vapor rises, cools, and condenses into clouds; it falls back down as precipitation; and it either runs off into rivers back to the ocean or infiltrates the ground as groundwater." },
          { question: "Why is the ocean salty?", answer: "Rivers carry small amounts of dissolved minerals and salts from weathered rock into the ocean continuously; because water evaporates from the ocean surface but the dissolved salts don't, those salts have accumulated and concentrated in seawater over hundreds of millions of years." },
          { question: "How long does water stay in the atmosphere?", answer: "On average, about 9 days, according to USGS estimates — a much shorter residence time than water spends in the ocean (roughly 3,200 years) or in deep groundwater, which can range from decades to millennia." },
          { question: "What is groundwater?", answer: "Water stored underground in the pore spaces and cracks of soil and rock, typically accessed through wells. It's replenished by precipitation infiltrating the ground, but often much more slowly than it's withdrawn, which is why groundwater depletion is a serious long-term concern in many regions." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
