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
  title: "Renewable vs. Non-Renewable Resources: What Actually Makes the Difference",
  category: "general-science-facts",
  order: 47,
  subtopic: "earth-science",
  tags: [
    "renewable energy",
    "non-renewable resources",
    "fossil fuels",
    "natural resources",
    "climate change",
    "earth science",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Renewable resources replenish on human timescales; non-renewable ones take millions of years. And no, coal and oil don't come from dinosaurs — here's what they actually form from.",
  summary: "Renewable resources like sunlight, wind, and flowing water replenish naturally within a human lifetime, while non-renewable resources like fossil fuels form over millions of years, far slower than they're consumed.",
  sources: [
    { label: "U.S. Energy Information Administration", url: "https://www.eia.gov/" },
    { label: "U.S. Department of Energy", url: "https://www.energy.gov/" },
    { label: "EPA — Climate Change", url: "https://www.epa.gov/climate-change" },
    { label: "NASA — Global Climate Change", url: "https://climate.nasa.gov/" },
  ],
  seeAlso: [
    "general-science-facts/rocks-minerals-and-natural-resources",
    "general-science-facts/weather-and-climate-basics",
    "general-science-facts/water-cycle-and-oceans",
    "general-science-facts/earths-structure-and-plate-tectonics",
  ],
  glossary: [
    { term: "Renewable resource", definition: "A resource, like sunlight, wind, or flowing water, that naturally replenishes within a human timescale, making it effectively inexhaustible if not overused." },
    { term: "Non-renewable resource", definition: "A resource, like coal, oil, natural gas, or uranium, that exists in a finite quantity and forms or replenishes far more slowly than humans consume it." },
    { term: "Fossil fuel", definition: "A non-renewable fuel — coal, oil, or natural gas — formed from the buried, heat- and pressure-transformed remains of ancient organisms over millions of years." },
    { term: "Reserve-to-production ratio", definition: "A resource's proven remaining reserves divided by its current annual consumption rate, giving an estimate of years remaining at current usage — a real metric used by energy agencies." },
    { term: "Carbon cycle", definition: "The natural movement of carbon between the atmosphere, oceans, land, and living things, which fossil fuel combustion adds extra ancient carbon into far faster than it can be reabsorbed." },
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
          "The distinction between renewable and non-renewable is about replenishment speed relative to human consumption, not about being 'clean' or 'green' — sunlight and wind replenish continuously, while fossil fuels form over millions of years, far slower than we use them.",
          "Coal forms mainly from ancient swamp plant matter, and oil and natural gas form mainly from ancient marine microorganisms — not from dinosaurs, despite the popular myth; dinosaurs contributed negligibly, if at all, to fossil fuel deposits.",
          "Burning fossil fuels releases carbon that had been locked underground for millions of years back into the atmosphere far faster than the natural carbon cycle can reabsorb it, which is the well-documented mechanism behind rising atmospheric CO2 and global temperature, per NASA and NOAA data.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/general-science-facts/renewable-vs-non-renewable-resources">renewable resource</TermLink> — sunlight, wind, flowing water, geothermal heat — naturally replenishes fast enough that using it doesn&apos;t meaningfully run it down over a human lifetime. A <TermLink href="/general-science-facts/renewable-vs-non-renewable-resources">non-renewable resource</TermLink> — coal, oil, natural gas, uranium — exists in a fixed, limited supply that took millions of years to form and isn&apos;t being replaced anywhere near the rate it&apos;s being used. The sun will keep shining and wind will keep blowing regardless of how much energy we capture from them; every barrel of oil pumped out of the ground, by contrast, is one that took millions of years to form and won&apos;t be replaced within any timeframe that matters to us.</div>}
        detailed={<div className="prose-p"><TermLink href="/general-science-facts/renewable-vs-non-renewable-resources">Fossil fuels</TermLink> form when organic matter is buried under layers of sediment and subjected to sustained heat and pressure over millions of years, gradually converting it first into kerogen and then, within a specific temperature range often called the &quot;oil window&quot; (roughly 60-150°C at depth), into crude oil and natural gas; coal forms through a related but distinct process of compression and chemical transformation of buried plant material. Non-renewable resource availability is commonly quantified using the <TermLink href="/general-science-facts/renewable-vs-non-renewable-resources">reserve-to-production ratio</TermLink> — proven reserves divided by current annual consumption — a real methodology used by agencies like the U.S. Energy Information Administration to estimate years of supply remaining at current usage rates. Renewable resources aren&apos;t automatically risk-free in practice, though: biomass (wood, crops grown for fuel) is renewable only if harvested at or below its natural regrowth rate — overharvest it faster than that, and it behaves like a non-renewable resource despite being biologically capable of regrowing. Burning fossil fuels also disrupts the <TermLink href="/general-science-facts/renewable-vs-non-renewable-resources">carbon cycle</TermLink> by releasing carbon that had been sequestered underground for millions of years back into the atmosphere far faster than natural processes remove it.</div>}
      />
      <FootnoteAside>The sunlight reaching Earth&apos;s surface continuously carries roughly 173,000 terawatts of power, according to NASA and U.S. Department of Energy estimates — thousands of times greater than all of humanity&apos;s total energy consumption combined, illustrating just how large the renewable &quot;supply&quot; genuinely is relative to demand, even though capturing and storing it efficiently remains an engineering challenge.</FootnoteAside>

      <p>
      That&apos;s the core distinction: replenishment speed relative to consumption. Working through where fossil fuels actually come from — and how &quot;years remaining&quot; gets calculated for a finite resource — makes the difference concrete.
      </p>

      <QuickCheck
        question="What actually determines whether a resource is classified as renewable or non-renewable?"
        options={[
          { text: "Whether it naturally replenishes fast enough, relative to how quickly it's being consumed, to avoid running out on a human timescale", correct: true, explanation: "Correct. The renewable/non-renewable distinction is fundamentally about replenishment rate versus consumption rate, not about how clean, safe, or modern the resource is." },
          { text: "Whether the resource produces any carbon emissions when used", correct: false, explanation: "Emissions and renewability are separate properties — some low-emission resources, like uranium for nuclear power, are still non-renewable, because the fuel itself is a finite, mined resource, not because of what happens when it's used." },
          { text: "Whether the resource was discovered before or after the Industrial Revolution", correct: false, explanation: "The renewable/non-renewable classification is based on the resource's physical replenishment rate, not on when humans started using it — solar and wind energy, both ancient in origin, are renewable regardless of when we began harnessing them at scale." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Calculating years remaining with a reserve-to-production ratio (baseline case)</h3>
      <div className="prose-p">
      A country has 1,000 million barrels of proven oil reserves and currently produces (and consumes at a comparable rate) 50 million barrels per year. Using reserve-to-production ratio = reserves ÷ annual consumption rate: 1,000 ÷ 50 = <strong>20 years</strong> of supply remaining at the current rate. This is the exact methodology energy agencies like the EIA use to estimate a resource&apos;s remaining lifespan — and it&apos;s explicitly a snapshot, not a fixed prediction, since it changes whenever new reserves are discovered, extraction technology improves, or consumption rates shift.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why biomass can behave like a non-renewable resource (edge case / variation)</h3>
      <div className="prose-p">
      Wood is biologically renewable — trees regrow. But renewability in practice depends on the harvest rate staying at or below the regrowth rate. If a forest is cut down faster than it can regenerate, the wood supply effectively behaves like a non-renewable resource during that period, despite being made of an inherently regrowable material. This is a genuine, well-recognized edge case in resource management: the renewable/non-renewable label isn&apos;t purely a fixed physical property of the material itself, it also depends on how the resource is actually being used relative to its natural replenishment rate — which is why sustainable forestry practices specifically track harvest rate against regrowth rate rather than assuming &quot;renewable&quot; automatically means &quot;unlimited.&quot;
      </div>

      <QuickCheck
        question="A forest is being logged faster than new trees can grow to replace them. Is this wood supply still accurately described as 'renewable'?"
        options={[
          { text: "In practice, no — even though wood is biologically capable of regrowing, harvesting it faster than its natural regrowth rate makes it behave like a non-renewable resource during that period", correct: true, explanation: "Correct. Renewability depends on replenishment rate keeping pace with consumption rate — overharvesting a biologically renewable resource can still functionally deplete it, just like a non-renewable one." },
          { text: "Yes — since trees are biologically capable of regrowing, the resource is always renewable regardless of harvest rate", correct: false, explanation: "Biological capability to regrow isn't the same as actual replenishment keeping pace with use — a forest cut faster than it regrows is being depleted in practice, even though the underlying material is theoretically renewable." },
          { text: "No — wood is classified as a non-renewable resource by definition, regardless of harvest rate", correct: false, explanation: "Wood is generally classified as renewable by definition when managed sustainably — the nuance is that unsustainable harvest rates can make it behave non-renewably in practice, not that it's inherently non-renewable." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Hydroelectric power as a continuously renewable system (real-world / applied case)</h3>
      <div className="prose-p">
      A hydroelectric dam generates electricity by directing flowing river water through turbines — water that arrived at the reservoir through the ongoing water cycle: solar-driven evaporation, condensation, and precipitation feeding the river continuously. As long as precipitation patterns in the watershed remain stable, that flow keeps arriving indefinitely, which is why hydroelectric power is classified as renewable. Compare that to a coal power plant: each ton of coal burned is drawn from a fixed underground reserve that isn&apos;t being replenished on any relevant timescale, so every year of operation permanently reduces the remaining supply available for the future. Same basic goal — generating electricity — but one draws on a continuously replenished resource and the other draws down a finite one, which is the entire practical distinction the renewable/non-renewable classification is built to capture.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Renewable vs. non-renewable energy sources and their replenishment timescales"
        type="comparison"
        svgSrc="/diagrams/general-science-facts-renewable-vs-non-renewable-resources-comparison.svg"
        altText="Comparison chart with two columns, renewable and non-renewable, listing solar, wind, hydroelectric, and geothermal under renewable with a continuously replenished label, and coal, oil, natural gas, and uranium under non-renewable with a millions of years to form, finite reserve label, plus a scale bar showing human energy consumption timescale (years) dwarfed by fossil fuel formation timescale (millions of years)."
      />
      <p>
      The scale bar at the bottom is the entire point of the diagram: human energy consumption happens on a timescale of years, while the non-renewable resources on the right formed on a timescale of millions of years — a mismatch of roughly six orders of magnitude. The renewable resources on the left don&apos;t face that mismatch at all, since their replenishment (solar radiation, wind, the water cycle, geothermal heat from Earth&apos;s interior) is effectively continuous rather than a one-time, ancient deposit being drawn down.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Believing fossil fuels come from dinosaur remains.", fix: "Coal forms mainly from ancient swamp plant matter, and oil and natural gas form mainly from ancient marine microorganisms like plankton and algae — dinosaurs contributed negligibly, if at all, to fossil fuel deposits." },
          { mistake: "Assuming 'renewable' automatically means 'unlimited, regardless of how it's used.'", fix: "Renewable resources like biomass can still be depleted in practice if harvested faster than their natural replenishment rate — renewability depends on usage rate relative to regrowth rate, not just the material's inherent properties." },
          { mistake: "Classifying nuclear energy as renewable because it produces very little carbon during operation.", fix: "Nuclear power's low emissions don't make it renewable — uranium is a finite, mined fuel. Renewable vs. non-renewable is about resource replenishment, not about how much carbon a technology emits when running." },
        ]}
      />
      <MisconceptionCallout
        myth="Coal and oil come from dead dinosaurs."
        reality={<p>Coal forms primarily from ancient swamp and forest plant material, especially from the Carboniferous period roughly 359-299 million years ago, buried and compressed over millions of years into progressively denser carbon-rich rock. Oil and natural gas form mainly from the remains of ancient marine microorganisms, like plankton and algae, that settled in seafloor sediment and were subjected to heat and pressure over millions of years, per the U.S. Department of Energy and USGS. Dinosaurs, as land animals present during only part of this vast timeframe, are not considered a meaningful source of fossil fuel deposits — the popular association is a persistent myth, likely reinforced by dinosaur-branded gas station logos rather than actual geology.</p>}
      />

      <QuickCheck
        question="Given how fossil fuels actually form, is it accurate to say oil deposits are made of decomposed dinosaurs?"
        options={[
          { text: "No — oil and natural gas form mainly from ancient marine microorganisms like plankton and algae, and coal forms mainly from ancient swamp plants; dinosaurs are not considered a significant source", correct: true, explanation: "Correct. Fossil fuels are named for their ancient organic origin generally, not specifically for dinosaurs — the actual source organisms are overwhelmingly marine microorganisms (for oil and gas) and swamp plants (for coal)." },
          { text: "Yes — the vast majority of oil deposits are directly attributed to decomposed dinosaur remains", correct: false, explanation: "This is the popular myth, not the geology — dinosaurs contributed negligibly, if at all, to fossil fuel formation; the actual source material is overwhelmingly ancient marine microorganisms and plant matter." },
          { text: "It's roughly accurate for oil, but coal has an entirely unrelated, non-biological origin", correct: false, explanation: "Both oil and coal have biological origins — oil and gas from ancient marine microorganisms, coal from ancient plant matter — dinosaurs aren't the significant source for either one." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate years remaining using a reserve-to-production ratio"
        fields={[
          { key: "reserveQuantity", label: "Proven reserves (million barrels, or any consistent unit)", defaultValue: 1000 },
          { key: "annualConsumptionRate", label: "Annual consumption rate (same unit per year)", defaultValue: 50 },
        ]}
        resultLabel="Years remaining at current consumption rate"
        formula="resourceDepletionYears"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Try the calculator above with your own hypothetical numbers to see how sensitive 'years remaining' is to both reserve size and consumption rate.",
          "Next time you see a fossil-fuel-and-dinosaur association (a gas station logo, a cartoon), mentally correct it to the real source: ancient plants for coal, ancient marine microorganisms for oil and gas.",
          "Look up what share of your local electricity grid comes from renewable versus non-renewable sources.",
          "Read the related entry on Rocks, Minerals & Natural Resources to see how fossil fuels fit into the broader picture of resources extracted from Earth's crust.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between renewable and non-renewable resources?", answer: "Renewable resources, like sunlight, wind, and flowing water, replenish naturally fast enough to keep up with human use. Non-renewable resources, like coal, oil, natural gas, and uranium, exist in a finite supply that forms far more slowly than it's consumed." },
          { question: "Do coal and oil really come from dinosaurs?", answer: "No. Coal forms mainly from ancient swamp plant matter, and oil and natural gas form mainly from ancient marine microorganisms like plankton and algae. Dinosaurs contributed negligibly, if at all, to fossil fuel deposits, despite the popular myth." },
          { question: "How long will fossil fuels last?", answer: "It depends on the specific resource, current proven reserves, and consumption rate, calculated using a reserve-to-production ratio (reserves ÷ annual consumption). This figure shifts over time as new reserves are found, extraction technology improves, or consumption changes." },
          { question: "Is nuclear energy renewable?", answer: "No. Nuclear power has very low operating carbon emissions, but uranium, its fuel, is a finite, mined resource — renewable versus non-renewable is about resource replenishment, not about emissions." },
          { question: "Why does burning fossil fuels affect climate change?", answer: "Burning fossil fuels releases carbon that had been sequestered underground for millions of years back into the atmosphere as CO2, far faster than the natural carbon cycle can reabsorb it — a mechanism NASA and NOAA data link directly to rising atmospheric CO2 concentrations and global average temperature." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
