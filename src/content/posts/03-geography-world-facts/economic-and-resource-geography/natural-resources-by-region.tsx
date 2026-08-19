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
  title: "Natural Resources by Region: Why Some Places Have Them and Others Don't",
  category: "geography-world-facts",
  order: 34,
  subtopic: "economic-and-resource-geography",
  tags: [
    "natural resources",
    "resource geography",
    "mineral deposits",
    "resource curse",
    "economic geography",
    "mining",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why cobalt clusters in one African country, oil pools under the Middle East, and lithium sits in South American salt flats — the geology behind uneven resource maps.",
  summary: "Natural resources are distributed unevenly across the world because the geologic processes that create them — ancient plate collisions, sedimentary burial, volcanic activity — only happened in specific places.",
  sources: [
    { label: "USGS — Energy and Minerals Mission Area", url: "https://www.usgs.gov/mission-areas/energy-and-minerals" },
    { label: "National Geographic Education", url: "https://education.nationalgeographic.org/" },
    { label: "U.S. Energy Information Administration — International Energy Data", url: "https://www.eia.gov/international/" },
    { label: "Encyclopaedia Britannica — Natural Resource", url: "https://www.britannica.com/science/natural-resource" },
  ],
  seeAlso: [
    "geography-world-facts/energy-resources-around-the-world",
    "geography-world-facts/agriculture-and-geography-why-crops-grow-where-they-grow",
    "geography-world-facts/mountains-and-mountain-ranges",
    "general-science-facts/rocks-minerals-and-natural-resources",
    "general-science-facts/renewable-vs-non-renewable-resources",
  ],
  glossary: [
    { term: "Natural resource", definition: "A material or substance found in nature that has economic value — minerals, fossil fuels, timber, fresh water, and fertile soil are all examples." },
    { term: "Ore deposit", definition: "A concentrated pocket of a valuable mineral, dense enough to be profitably mined, formed by specific geologic processes rather than spread evenly through rock." },
    { term: "Sedimentary basin", definition: "A large, bowl-shaped depression in Earth's crust where layers of sediment — and often organic material that later becomes oil and gas — accumulate over millions of years." },
    { term: "Reserve-to-production ratio", definition: "A resource's known remaining reserves divided by its current annual extraction rate, giving a rough 'years remaining at today's rate' estimate." },
    { term: "Resource curse", definition: "The pattern where countries rich in natural resources sometimes end up with slower economic growth, more corruption, or more conflict than resource-poor countries, due to overreliance on extraction industries." },
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
          "Resources aren't scattered randomly — metal ores concentrate near ancient volcanic and tectonic activity, while oil and gas form only in sedimentary basins that buried organic matter under the right heat and pressure for millions of years.",
          "A small number of countries can dominate a global resource because the geology that created it is genuinely rare — the Democratic Republic of the Congo alone accounts for the large majority of the world's mined cobalt.",
          "Having abundant resources doesn't automatically make a country wealthy — the 'resource curse' describes how resource-rich economies can underperform resource-poor ones without strong institutions to manage the windfall.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/geography-world-facts/natural-resources-by-region">natural resource</TermLink> is anything useful pulled from the earth — oil, copper, timber, fresh water, fertile soil. These aren&apos;t spread evenly around the globe. The Middle East sits on roughly half the world&apos;s proven oil reserves. Chile and Australia dominate lithium. Central Africa holds most of the world&apos;s cobalt. This isn&apos;t random luck — it comes down to what happened to that specific patch of ground over millions or billions of years of geologic history.</div>}
        detailed={<div className="prose-p">Resource distribution traces back to two very different processes. Metal <TermLink href="/geography-world-facts/natural-resources-by-region">ore deposits</TermLink> — copper, gold, cobalt, lithium — mostly form through hydrothermal activity near tectonic plate boundaries, where superheated fluids moving through cracked rock concentrate scattered metal atoms into dense, mineable pockets. That&apos;s why so many major ore belts trace old subduction zones and volcanic arcs, like the Andes (copper) or the Central African Copperbelt (copper and cobalt). Fossil fuels form differently: oil and natural gas require a marine <TermLink href="/geography-world-facts/natural-resources-by-region">sedimentary basin</TermLink> where ancient plankton and algae were buried under enough sediment to reach the &quot;oil window&quot; — roughly 60–120°C — where heat and pressure convert organic matter into hydrocarbons without cooking it into worthless graphite. Coal instead needs ancient swamp forests buried and compressed, which is why 300-million-year-old coal seams from the Carboniferous period are found today on every continent, including Antarctica — direct evidence those landmasses were once joined together in warmer latitudes before continental drift carried them apart.</div>}
      />
      <FootnoteAside>Coal seams found beneath the Antarctic ice were one of the pieces of evidence Alfred Wegener used to argue for continental drift in the early 1900s — swamp-forest coal simply can&apos;t form in a polar climate, so Antarctica had to have been somewhere much warmer when that coal formed.</FootnoteAside>

      <p>
      Knowing <em>how</em> a resource forms tells you where to expect it — but it doesn&apos;t tell you what having it actually does for a country&apos;s economy, which turns out to be far less automatic than it sounds.
      </p>

      <QuickCheck
        question="Why does the Democratic Republic of the Congo produce most of the world's cobalt, rather than cobalt being spread evenly across many countries?"
        options={[
          { text: "Cobalt only forms where a specific ancient geologic process — sediment-hosted copper-cobalt mineralization in the Central African Copperbelt — actually occurred", correct: true, explanation: "Correct. Ore deposits form through rare, specific geologic conditions. The Copperbelt's deep geologic history concentrated cobalt there in a way that simply didn't happen most other places on Earth." },
          { text: "The DRC's government restricts other countries from mining cobalt", correct: false, explanation: "This is a supply-chain and trade question, not the underlying reason cobalt exists there in the first place — the deposits are a geologic fact independent of policy." },
          { text: "Cobalt is equally common everywhere, but only the DRC has bothered to mine it", correct: false, explanation: "Cobalt-bearing ore is genuinely concentrated in specific deposits, not spread evenly — most of the world's land doesn't sit on economically mineable cobalt at all." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The Central African Copperbelt (baseline case)</h3>
      <div className="prose-p">
      The Copperbelt stretches across the DRC&apos;s Katanga province and neighboring Zambia — a roughly 500-kilometer arc of sediment-hosted copper-cobalt ore formed around 800 million to 600 million years ago, when copper- and cobalt-rich fluids moved through ancient sedimentary rock and precipitated out as ore minerals. That single geologic belt is why the DRC alone supplies the large majority of the world&apos;s mined cobalt today — an essential ingredient in lithium-ion batteries — even though cobalt is a genuinely rare element in Earth&apos;s crust overall.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Japan — an industrial power with almost no domestic resources (edge case / variation)</h3>
      <div className="prose-p">
      Japan runs one of the world&apos;s largest manufacturing economies while sitting on almost no oil, gas, or coal of its own — the country imports nearly all its energy resources. This looks contradictory until you separate resource wealth from economic wealth: Japan compensated by building trade relationships and manufacturing capability rather than extraction industries, importing raw materials, refining and assembling them into higher-value goods (electronics, cars, machinery), and exporting the finished product. It&apos;s a clear counterexample to the assumption that a strong economy requires strong domestic resources.
      </div>

      <QuickCheck
        question="Japan has almost no domestic oil, gas, or coal, yet has one of the world's largest economies. What does this best illustrate?"
        options={[
          { text: "Economic strength depends on how resources and trade are used, not just on how many resources a country happens to have underground", correct: true, explanation: "Correct. Japan built its economy on manufacturing and trade rather than extraction — proof that domestic resource abundance isn't a requirement for economic success." },
          { text: "Japan secretly has large undiscovered oil reserves", correct: false, explanation: "There's no evidence of this — Japan's resource poverty in fossil fuels and metals is well documented and is exactly why it imports the overwhelming majority of its energy." },
          { text: "Manufacturing economies never need any natural resources at all", correct: false, explanation: "Manufacturing still requires raw materials — Japan just imports them rather than extracting them domestically. Resources are still essential; only their source (import vs. domestic) differs." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The lithium-ion battery supply chain (real-world / applied case)</h3>
      <div className="prose-p">
      Building an electric-vehicle battery draws on resource geography from three separate continents. Lithium is concentrated in South America&apos;s &quot;lithium triangle&quot; (Chile, Argentina, Bolivia) and in hard-rock deposits in Australia, both shaped by specific evaporite basin and volcanic-rock geology. Cobalt draws heavily on the DRC&apos;s Copperbelt. Nickel and graphite draw on other regional deposits again, including Indonesia and China. No single country holds the full set of raw materials a battery needs — which is exactly why the modern battery supply chain is a genuinely global, multi-country logistics problem, not a domestic manufacturing one.
      </div>

      <QuickCheck
        question="A single electric-vehicle battery typically requires lithium, cobalt, nickel, and graphite sourced from several different countries. Why can't one country supply all of these on its own?"
        options={[
          { text: "Because each of these resources forms through a different geologic process, and no single country's geology happens to have produced all of them in large, mineable quantities", correct: true, explanation: "Correct. Lithium, cobalt, nickel, and graphite each require different geologic histories to concentrate into ore — there's no reason to expect one country's crust to have produced all four at scale." },
          { text: "International trade agreements deliberately prevent any one country from mining all four materials", correct: false, explanation: "The limiting factor is geology, not policy — the raw deposits themselves simply aren't co-located in one country's crust." },
          { text: "These four materials are actually the same element mined under different names", correct: false, explanation: "Lithium, cobalt, nickel, and graphite are chemically distinct elements/materials with entirely different mining and processing methods." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="World map: major regional concentrations of fossil fuels, metals, and fresh water"
        type="detail"
        svgSrc="/diagrams/geography-world-facts-natural-resources-by-region-world-map.svg"
        altText="World map with shaded regions marking major resource concentrations: Middle East and parts of Russia/North America shaded for oil and gas reserves, Central Africa and the Andes shaded for metal ore deposits, the Amazon Basin and Canadian Shield shaded for fresh water and timber, labeled with the specific resource each region is known for."
      />
      <p>
      Notice how the shaded regions don&apos;t line up with country borders — they follow the underlying geology: sedimentary basins for fossil fuels, ancient volcanic/tectonic belts for metal ores, and river-basin/forest geography for fresh water and timber. Political borders were drawn long after (and mostly without regard to) these geologic boundaries, which is part of why resource wealth and national wealth don&apos;t automatically line up.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming resource wealth and national wealth are the same thing.", fix: "They're correlated but not equivalent — the 'resource curse' shows resource-rich countries can underperform resource-poor ones without strong institutions to manage extraction revenue." },
          { mistake: "Thinking a resource is available 'wherever you dig deep enough.'", fix: "Ore deposits and fossil fuel basins require specific geologic histories — most of Earth's crust simply doesn't contain economically mineable concentrations of any given resource." },
          { mistake: "Assuming a country's current resource map is permanent and unchanging.", fix: "New deposits are still being discovered and mapped, and reserve estimates rise and fall with exploration technology and market prices — 'reserves' are an economic category, not a fixed geologic fact." },
        ]}
      />
      <MisconceptionCallout
        myth="Countries with the most natural resources are automatically the wealthiest."
        reality={<p>Some of the most resource-rich countries on Earth — including several with vast oil, mineral, or timber wealth — have struggled economically, while resource-poor countries like Japan and Singapore built some of the world&apos;s strongest economies. Economists call the opposite pattern the <TermLink href="/geography-world-facts/natural-resources-by-region">resource curse</TermLink>: heavy reliance on extraction revenue can crowd out other industries, invite corruption, and leave an economy dangerously exposed to commodity price swings. Norway is the frequently cited counterexample — it manages its oil wealth through a sovereign wealth fund and strong institutions, showing the resource itself isn&apos;t the deciding factor; how it&apos;s managed is.</p>}
      />

      <QuickCheck
        question="Some resource-rich countries end up economically worse off than resource-poor ones. What does the term for this pattern refer to, and what actually drives it?"
        options={[
          { text: "The 'resource curse' — driven by weak institutions, corruption, or overreliance on extraction revenue rather than the resource itself", correct: true, explanation: "Correct. The resource curse isn't caused by the resource — it's caused by how the revenue from it is (or isn't) managed, and how much an economy comes to depend on it alone." },
          { text: "It's caused by the resource physically running out faster in wealthier countries", correct: false, explanation: "Depletion speed isn't the mechanism here — the resource curse describes economic and institutional patterns, not the resource simply vanishing." },
          { text: "It only happens in countries with small populations", correct: false, explanation: "Population size isn't the deciding factor — the pattern has been documented across countries of very different sizes; institutional quality and economic diversification are the key variables." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Reserve-to-production ratio: years of a resource left at current extraction rates"
        fields={[
          { key: "reserveQuantity", label: "Known reserves (any consistent unit, e.g. million tons)", defaultValue: 880 },
          { key: "annualConsumptionRate", label: "Annual production/consumption rate (same unit per year)", defaultValue: 22 },
        ]}
        resultLabel="Years remaining at current rate"
        formula="resourceDepletionYears"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Try the calculator above with global copper reserves (~880 million tons) against annual production (~22 million tons) to see the rough reserve-to-production ratio — then note this number tends to rise over time as exploration finds more.",
          "Next time you read about a resource-rich country's economy, ask whether the resource wealth is being converted into broad development or concentrated in a narrow extraction sector.",
          "Look up which resources your own country imports versus produces domestically — it's usually a clearer picture of national resource geography than headlines suggest.",
          "Read the related entry on Energy Resources Around the World to see how this same logic applies specifically to oil, gas, coal, and renewables.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why are natural resources unevenly distributed around the world?", answer: "Because the geologic processes that create them — hydrothermal ore formation near tectonic boundaries, burial of organic matter in sedimentary basins, ancient swamp-forest compression — only occurred in specific places and time periods, not uniformly across Earth's crust." },
          { question: "Why does one country produce most of the world's cobalt?", answer: "The Democratic Republic of the Congo sits on the Central African Copperbelt, a roughly 500-kilometer band of sediment-hosted copper-cobalt ore formed several hundred million years ago — a rare geologic event that simply didn't happen at that scale elsewhere." },
          { question: "What is the resource curse?", answer: "The pattern where countries rich in natural resources sometimes see slower growth, more corruption, or more conflict than resource-poor countries, typically because heavy reliance on extraction revenue crowds out other industries and strains institutions." },
          { question: "Can a country be wealthy without natural resources?", answer: "Yes — Japan and Singapore are commonly cited examples of countries with very limited domestic natural resources that built strong economies through manufacturing, trade, and services instead." },
          { question: "Do natural resource reserves ever run out?", answer: "Reserve estimates can shrink from extraction, but they also grow as exploration technology improves and previously uneconomical deposits become viable — reserve-to-production ratios are a rough planning estimate, not a literal countdown clock." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
