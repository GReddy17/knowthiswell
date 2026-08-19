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
  title: "Energy Resources Around the World: Why Some Regions Run on Oil and Others on Geothermal",
  category: "geography-world-facts",
  order: 37,
  subtopic: "economic-and-resource-geography",
  tags: [
    "energy resources",
    "fossil fuels",
    "renewable energy",
    "energy geography",
    "oil reserves",
    "geothermal energy",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why the Middle East sits on nearly half the world's oil, coal turns up on every continent including Antarctica, and Iceland runs almost entirely on geothermal power.",
  summary: "Energy resources are distributed by two separate logics — fossil fuels follow ancient sedimentary geology, while renewable potential follows present-day climate, terrain, and tectonic activity.",
  sources: [
    { label: "U.S. Energy Information Administration — Energy Explained", url: "https://www.eia.gov/energyexplained/" },
    { label: "U.S. Energy Information Administration — International Energy Data", url: "https://www.eia.gov/international/" },
    { label: "Encyclopaedia Britannica — Fossil Fuel", url: "https://www.britannica.com/science/fossil-fuel" },
    { label: "USGS — Energy and Minerals Mission Area", url: "https://www.usgs.gov/mission-areas/energy-and-minerals" },
  ],
  seeAlso: [
    "general-science-facts/renewable-vs-non-renewable-resources",
    "geography-world-facts/natural-resources-by-region",
    "geography-world-facts/volcanoes-around-the-world",
    "geography-world-facts/major-trade-routes-historical-and-modern",
  ],
  glossary: [
    { term: "Fossil fuel", definition: "An energy source — oil, natural gas, or coal — formed from the remains of ancient organisms buried and transformed by heat and pressure over millions of years." },
    { term: "Reserve-to-production ratio", definition: "A resource's known remaining reserves divided by its current annual extraction rate, giving a rough 'years remaining at today's rate' estimate; it typically rises over time as exploration finds more reserves." },
    { term: "Geothermal energy", definition: "Energy harnessed from heat stored inside the Earth, most economically accessible in tectonically or volcanically active regions." },
    { term: "Sedimentary basin", definition: "A large, bowl-shaped depression in Earth's crust where sediment and organic matter accumulate over millions of years, the setting in which oil and natural gas form." },
    { term: "Nonrenewable resource", definition: "A resource, like oil, gas, or coal, that forms far slower than humans consume it, so it is effectively finite on a human timescale." },
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
          "Fossil fuels and renewable energy potential follow two completely different maps — fossil fuels follow ancient sedimentary geology from millions of years ago, while renewable potential follows today's climate, terrain, and tectonic activity.",
          "Coal has been found on every continent, including Antarctica, because ancient swamp forests existed on landmasses that later drifted apart via plate tectonics — coal's location is a fossilized record of continental drift.",
          "A country's renewable energy mix is shaped directly by its geography: Iceland runs largely on geothermal and hydro because of its volcanic, glacial terrain, not because of policy choices alone.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Energy resources aren&apos;t spread evenly across the globe. Oil and natural gas cluster heavily in the Middle East and a handful of other regions. Coal shows up on nearly every continent. Meanwhile, renewable energy potential follows a completely different map — sunny deserts are best for solar, mountainous rainy regions are best for hydropower, and volcanically active places like Iceland are uniquely suited to <TermLink href="/geography-world-facts/energy-resources-around-the-world">geothermal energy</TermLink>. Where a country sits on the map largely decides which energy sources are cheapest and most abundant for it to use.</div>}
        detailed={<div className="prose-p"><TermLink href="/geography-world-facts/energy-resources-around-the-world">Fossil fuels</TermLink> form through a slow geologic process: oil and gas require a marine <TermLink href="/geography-world-facts/energy-resources-around-the-world">sedimentary basin</TermLink> where ancient plankton and algae were buried deep enough to reach roughly 60–120°C, the &quot;oil window,&quot; converting organic matter into hydrocarbons; coal instead forms from ancient swamp-forest plant matter compressed under sediment, mostly during the Carboniferous period around 300 million years ago. Because these are ancient processes tied to where landmasses sat hundreds of millions of years ago — not where they sit today — coal deposits show up on every continent including Antarctica, direct evidence that these landmasses have since drifted apart via plate tectonics. Renewable energy potential runs on an entirely separate, present-day logic: solar output tracks sun angle and cloud cover (so it favors sunny, low-latitude, arid regions), wind potential tracks pressure gradients and open terrain, hydropower tracks elevation drop combined with reliable rainfall or snowmelt, and geothermal energy tracks proximity to tectonic plate boundaries and volcanic activity, where Earth&apos;s internal heat sits close enough to the surface to tap economically.</div>}
      />
      <FootnoteAside>Coal seams have been mapped beneath the Antarctic ice sheet — proof that a landmass now buried in permanent ice once hosted the warm swamp forests coal requires, before continental drift carried it to the pole over hundreds of millions of years.</FootnoteAside>

      <p>
      That split between &quot;ancient geology&quot; and &quot;present-day geography&quot; is the key to understanding almost every regional energy story — and nowhere is it clearer than in a country that runs almost entirely on one renewable source because of a geographic accident.
      </p>

      <QuickCheck
        question="Coal deposits have been found on every continent, including Antarctica, despite Antarctica's current climate being far too cold for the swamp forests that form coal. What explains this?"
        options={[
          { text: "Antarctica's coal formed hundreds of millions of years ago, when the landmass sat in a much warmer location before plate tectonics carried it to its current polar position", correct: true, explanation: "Correct. Coal formation requires ancient swamp forests, and Antarctica's coal is fossil evidence that the continent occupied a warmer latitude long before drifting to its present position." },
          { text: "Coal can form in extremely cold climates just as easily as in warm ones", correct: false, explanation: "Coal specifically requires ancient swamp-forest vegetation, which doesn't grow in polar climates — the coal's presence indicates Antarctica's climate was very different when that coal formed, not that coal formation tolerates cold." },
          { text: "The coal found in Antarctica was transported there recently by ocean currents", correct: false, explanation: "Coal seams are found in place within Antarctic rock layers, not deposited by currents — their location reflects where the ancient swamp forest actually grew, before continental drift moved the land." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Why the Middle East holds so much of the world&apos;s oil (baseline case)</h3>
      <div className="prose-p">
      The Persian Gulf region sits atop an unusually large, unusually productive set of sedimentary basins that formed from an ancient shallow sea rich in marine organic matter, later buried under the right depth and temperature conditions to convert that organic matter into oil at enormous scale, and then capped by rock layers that trapped it in place rather than letting it escape to the surface. That specific, rare combination — rich source rock, ideal burial depth, and an effective trap — is why the Middle East holds roughly half of the world&apos;s proven oil reserves even though sedimentary basins exist on every continent; most other basins simply didn&apos;t hit all three conditions at the same scale.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Iceland&apos;s near-total renewable electricity (edge case / variation)</h3>
      <div className="prose-p">
      Iceland sits directly on the Mid-Atlantic Ridge, a tectonic plate boundary where magma rises close to the surface, and is heavily glaciated with abundant meltwater runoff. That combination gives it two renewable resources most countries can&apos;t match at the same intensity: geothermal heat close enough to the surface to tap directly, and reliable hydropower from glacial and rainfall-fed rivers with significant elevation drop. As a result, Iceland generates the overwhelming majority of its electricity from geothermal and hydropower sources combined — a striking edge case showing that a country&apos;s renewable mix can be dictated almost entirely by tectonic and glacial geography rather than by policy alone, in sharp contrast to a flat, non-volcanic country with no comparable geothermal or hydro potential.
      </div>

      <QuickCheck
        question="Iceland generates the large majority of its electricity from geothermal and hydropower. What makes this possible in a way most countries can't replicate?"
        options={[
          { text: "Iceland sits on a tectonic plate boundary with near-surface magma and has glacier-fed rivers with strong elevation drop, giving it unusually strong geothermal and hydropower potential", correct: true, explanation: "Correct. Iceland's specific tectonic and glacial geography — not just policy choices — is what makes such a high share of geothermal and hydropower generation physically possible." },
          { text: "Iceland has simply chosen not to use fossil fuels for cultural reasons, despite having large reserves", correct: false, explanation: "Iceland doesn't have significant domestic fossil fuel reserves to begin with — its renewable-heavy mix reflects genuine geographic advantage in geothermal and hydro potential, not a rejection of available fossil fuels." },
          { text: "Geothermal and hydropower are available in equal abundance in every country, and Iceland just built more infrastructure", correct: false, explanation: "Geothermal potential specifically requires proximity to tectonic or volcanic activity, which most countries don't have — it isn't equally available everywhere regardless of infrastructure investment." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Estimating years of remaining oil reserves (real-world / applied case)</h3>
      <div className="prose-p">
      Using commonly cited global figures of roughly 1,650 billion barrels of proven oil reserves against annual global production of roughly 36 billion barrels per year, dividing reserves by annual production gives a reserve-to-production ratio of about 46 years. This is the standard &quot;years of oil left at current rates&quot; figure often cited in energy reporting — but it&apos;s worth reading carefully: this ratio has hovered in a similar range for decades, not because consumption has stopped, but because ongoing exploration and improved extraction technology keep adding to the &quot;known reserves&quot; side of the equation almost as fast as production draws it down.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="World map: major fossil fuel reserves and renewable energy hotspots"
        type="detail"
        svgSrc="/diagrams/geography-world-facts-energy-resources-around-the-world-reserves-map.svg"
        altText="World map shaded to show major oil and gas reserve regions concentrated around the Persian Gulf, coal deposits spread across multiple continents including Antarctica, and renewable energy hotspots marked for solar in desert latitude bands, hydropower in mountainous high-rainfall regions, wind along coastal plains, and geothermal along tectonic plate boundaries such as Iceland and the Pacific Ring of Fire."
      />
      <p>
      Compare the fossil fuel shading to the renewable shading and the two maps barely overlap — fossil fuel wealth follows ancient sedimentary basins from tens or hundreds of millions of years ago, while renewable potential follows today&apos;s climate and tectonic activity. A country can be poor in one map and rich in the other, which is exactly the situation many nations are now navigating as they shift their energy mix.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a country's fossil fuel wealth predicts its renewable energy potential, or vice versa.", fix: "These follow separate geologic and geographic logics — a country can have world-class solar or geothermal potential with little to no fossil fuel reserves, and the reverse is just as common." },
          { mistake: "Treating the 'reserve-to-production ratio' as a literal countdown to running out.", fix: "It's a snapshot estimate that changes as exploration finds new reserves and technology improves extraction — the ratio has stayed roughly stable for decades precisely because of this, not because consumption stopped." },
          { mistake: "Assuming renewable energy potential is equally strong everywhere.", fix: "Solar, wind, hydro, and geothermal potential are all geographically constrained — a landlocked, flat, cloudy, non-volcanic region genuinely has weaker options across all four than a sunny, mountainous, tectonically active one." },
        ]}
      />
      <MisconceptionCallout
        myth="Fossil fuel deposits form directly from the remains of dinosaurs."
        reality={<p>Oil and natural gas form almost entirely from the remains of ancient marine microorganisms — plankton and algae — buried in sedimentary basins and transformed by heat and pressure over millions of years; coal forms from ancient swamp-forest plants, not animals at all. Dinosaurs contributed essentially no meaningful mass to fossil fuel deposits. The dinosaur association is a marketing myth traceable in large part to Sinclair Oil&apos;s dinosaur logo, adopted in the 1930s to suggest deep geologic age — not an accurate description of what fossil fuels are actually made from.</p>}
      />

      <QuickCheck
        question="What are oil and natural gas actually formed from?"
        options={[
          { text: "Ancient marine microorganisms like plankton and algae, buried and transformed by heat and pressure in sedimentary basins over millions of years", correct: true, explanation: "Correct. Oil and gas form from marine organic matter, not from dinosaur remains — the dinosaur association is a well-known marketing myth, not geology." },
          { text: "The compressed remains of dinosaurs and other large land animals", correct: false, explanation: "Dinosaurs contributed essentially no meaningful mass to fossil fuel formation — this is a persistent myth traceable largely to 20th-century oil company marketing." },
          { text: "Volcanic rock that has been chemically altered by seawater over time", correct: false, explanation: "Oil and gas are organic in origin, formed from buried marine organic matter — not a product of volcanic rock alteration." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Reserve-to-production ratio: years of a fuel remaining at current production"
        fields={[
          { key: "reserveQuantity", label: "Proven reserves (billion barrels or equivalent)", defaultValue: 1650 },
          { key: "annualConsumptionRate", label: "Annual production (billion barrels or equivalent per year)", defaultValue: 36 },
        ]}
        resultLabel="Years remaining at current rate"
        formula="resourceDepletionYears"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Try the calculator above with your country's specific reserve and production figures, if published by its energy ministry or the EIA, to see its own reserve-to-production ratio.",
          "Next time you see a country described as 'energy rich,' check whether that's fossil fuel wealth, renewable potential, or both — they're driven by different geography.",
          "Look up your region's dominant renewable source (solar, wind, hydro, geothermal) and connect it to the specific geographic feature — sun, terrain, rainfall, or tectonics — that makes it viable there.",
          "Read the related entry on Renewable vs. Non-Renewable Resources for the underlying science of why fossil fuels are finite on a human timescale and renewables aren't.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do fossil fuels form?", answer: "Oil and natural gas form from ancient marine plankton and algae buried in sedimentary basins and transformed by heat and pressure over millions of years; coal forms from ancient swamp-forest plant matter compressed under sediment, mostly during the Carboniferous period roughly 300 million years ago." },
          { question: "Why does the Middle East have so much oil?", answer: "The Persian Gulf region sits atop unusually large and productive sedimentary basins that combined rich organic source rock, ideal burial depth for oil formation, and effective rock traps to hold the oil in place — a rare combination at that scale." },
          { question: "Which country produces the most renewable energy?", answer: "It depends on the measure — China leads in total installed solar and wind capacity, while countries like Iceland and Norway lead in the share of their electricity that comes from renewables, due to strong geothermal, hydro, or both." },
          { question: "Will the world run out of oil?", answer: "Reserve-to-production ratios (currently around several decades at present rates) estimate years remaining at today's consumption, but this figure has stayed roughly stable for decades as exploration and technology add new reserves — it's a planning estimate, not a fixed countdown." },
          { question: "Why is Iceland almost 100% renewable?", answer: "Iceland sits on the Mid-Atlantic Ridge tectonic boundary, giving it near-surface geothermal heat, and has glacier-fed rivers with strong elevation drop for hydropower — a geographic combination that makes an almost entirely renewable electricity mix physically achievable." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
