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
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Ocean Acidification Explained",
  category: "environment-nature",
  order: 8,
  subtopic: "climate-change-fundamentals",
  tags: ["ocean acidification", "pH scale", "carbonic acid", "marine ecosystems", "NOAA"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "The ocean absorbs about a quarter of human CO2 emissions, and dissolving CO2 in seawater forms carbonic acid — measurably lowering ocean pH and threatening shell- and skeleton-building marine life.",
  summary: "Ocean acidification happens because the ocean absorbs roughly a quarter of human carbon dioxide emissions, and that dissolved CO2 reacts with seawater to form carbonic acid, which has measurably lowered average ocean surface pH by about 0.1 units since the pre-industrial era — a seemingly small number that represents a real, substantial increase in acidity on the logarithmic pH scale.",
  sources: [
    { label: "NOAA — Ocean Acidification Program", url: "https://oceanacidification.noaa.gov/" },
    { label: "NOAA — Pacific Marine Environmental Laboratory: What is Ocean Acidification?", url: "https://www.pmel.noaa.gov/co2/story/What+is+Ocean+Acidification%3F" },
    { label: "IPCC — Sixth Assessment Report, Working Group I, Chapter 5 (Global Carbon and other Biogeochemical Cycles)", url: "https://www.ipcc.ch/report/ar6/wg1/" },
  ],
  seeAlso: [
    "environment-nature/what-causes-climate-change-human-driven-mechanisms",
    "environment-nature/rising-sea-levels-causes-and-projected-impact",
    "math-numbers/unit-conversions-length-weight-volume",
  ],
  glossary: [
    {"term":"Carbonic acid","definition":"A weak acid formed when carbon dioxide dissolves in water (CO2 + H2O → H2CO3), which partially breaks apart into hydrogen ions, lowering the water's pH."},
    {"term":"pH scale","definition":"A logarithmic scale from 0 to 14 measuring how acidic or basic a solution is, where each whole-number drop represents a tenfold increase in hydrogen ion concentration — the ocean's overall pH has fallen by about 0.1 units, but on this scale that's a roughly 30% increase in acidity."},
    {"term":"Calcium carbonate saturation","definition":"The degree to which seawater contains enough carbonate ions for shell- and skeleton-building organisms to form calcium carbonate structures — a value that decreases as acidification progresses, making shell formation more energetically costly or physically difficult."},
    {"term":"Ocean carbon sink","definition":"The ocean's role in absorbing roughly a quarter of human CO2 emissions from the atmosphere, which slows atmospheric CO2 buildup but comes at the direct cost of increasing ocean acidity."},
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
      "The ocean absorbs roughly a quarter of human CO2 emissions, which reacts with seawater to form carbonic acid — this is basic, directly observable chemistry, not a modeled projection.",
      "Average ocean surface pH has dropped by about 0.1 units since pre-industrial times, but because pH is a logarithmic scale, that represents roughly a 30% increase in hydrogen ion concentration, not a small change.",
      "Acidification specifically threatens organisms that build calcium carbonate shells or skeletons — corals, oysters, some plankton species — since more acidic water reduces the availability of carbonate ions they need for that structure-building process.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">When CO2 dissolves in ocean water, it forms <TermLink href="/environment-nature/ocean-acidification-explained">carbonic acid</TermLink>, the same weak acid that gives carbonated water its slight tartness. The ocean has absorbed roughly a quarter of all human CO2 emissions since the industrial era, and that steady absorption has measurably lowered average ocean surface pH by about 0.1 units, based on direct chemical measurements, not just a model estimate. This matters most for marine life that builds shells or skeletons out of calcium carbonate, since more acidic water makes that process harder.</div>}
      detailed={<div className="prose-p">The <TermLink href="/environment-nature/ocean-acidification-explained">pH scale</TermLink> is logarithmic, meaning each whole-number change represents a tenfold shift in hydrogen ion concentration — so a seemingly small 0.1 unit drop in average ocean pH actually corresponds to roughly a 30% increase in hydrogen ion concentration (acidity), not a 0.1/14 fractional change. The chemistry follows a well-defined reaction sequence: CO2 + H2O forms carbonic acid (H2CO3), which partially dissociates into hydrogen ions and bicarbonate. Those extra hydrogen ions react with existing carbonate ions in seawater, converting them to bicarbonate and reducing the carbonate ions available for <TermLink href="/environment-nature/ocean-acidification-explained">calcium carbonate saturation</TermLink> — the process shell- and skeleton-building organisms rely on. This makes the ocean&apos;s role as a <TermLink href="/environment-nature/ocean-acidification-explained">carbon sink</TermLink> a genuine double-edged mechanism: it slows atmospheric CO2 accumulation, which helps limit greenhouse warming, but at the direct cost of the ocean chemistry change itself.</div>}
      />
      <FootnoteAside>NOAA&apos;s long-running ocean monitoring stations, including one off Hawaii operating since the 1980s alongside the atmospheric Mauna Loa CO2 record, have tracked this pH decline directly and continuously — it&apos;s one of the most well-documented, directly measured chemical consequences of rising atmospheric CO2, independent of climate modeling.</FootnoteAside>

      <p>
      The logarithmic nature of the pH scale is the single most important detail for correctly interpreting the &quot;0.1 unit&quot; figure — treating it as a tiny linear change badly understates the actual chemical shift.
      </p>

      <QuickCheck
      question="Ocean surface pH has dropped by about 0.1 units since pre-industrial times. Since the pH scale runs from 0 to 14, does this represent roughly a 0.1/14 ≈ 0.7% change in acidity?"
      options={[
      { text: "Yes — a 0.1 shift out of a 14-point scale is a small fractional change, so ocean chemistry has barely shifted at all", correct: false, explanation: "This treats pH as a linear scale, but it isn't — pH is logarithmic, so a fixed numeric change corresponds to a much larger proportional change in actual hydrogen ion concentration than a simple fraction of the scale's range would suggest." },
      { text: "No — because pH is a logarithmic scale, a 0.1 unit drop corresponds to roughly a 30% increase in hydrogen ion concentration (actual acidity), a substantial chemical shift, not a small linear fraction of the 0-14 range", correct: true, explanation: "Correct. On a logarithmic scale, each whole unit represents a tenfold change in concentration, so even a fractional unit change like 0.1 translates to a large proportional shift — roughly 30% more hydrogen ions in this case, which is chemically significant despite the small-looking number." },
      { text: "No, because the pH scale doesn't actually apply to the ocean at all, only to laboratory solutions", correct: false, explanation: "The pH scale applies to any aqueous solution, including seawater — NOAA and other ocean chemistry programs measure and report ocean pH using the same standard scale used for any water-based chemistry." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Comparing hydrogen ion concentration before and after a 0.1 pH drop (baseline case)</h3>
      <div className="prose-p">
      A pre-industrial ocean surface pH of about 8.2 corresponds to a hydrogen ion concentration of 10^-8.2 moles per liter. Today&apos;s average surface pH of about 8.1 corresponds to 10^-8.1 moles per liter. Dividing the two: 10^-8.1 / 10^-8.2 = 10^0.1 ≈ 1.26 — meaning today&apos;s ocean surface water has roughly 26-30% more hydrogen ions (is that much more acidic) than the pre-industrial baseline, from a change that looks small as a raw pH number.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Coral reefs and calcium carbonate saturation (edge case / variation)</h3>
      <div className="prose-p">
      Coral reefs build their skeletal structure from calcium carbonate, a process that becomes more energetically difficult as seawater&apos;s carbonate ion concentration drops with acidification. NOAA-supported research has documented reduced calcification rates in some reef-building coral species under acidification conditions in both laboratory and field studies — a direct mechanistic link between the chemistry described above and a measurable biological effect on a specific real ecosystem type, distinct from the separate stress of ocean warming (coral bleaching), which acts through a different mechanism.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Commercial shellfish hatchery impacts in the Pacific Northwest (real-world / applied case)</h3>
      <div className="prose-p">
      In the mid-2000s, Pacific Northwest oyster hatcheries experienced significant larval die-offs that researchers traced to naturally upwelling deep ocean water with unusually low pH and carbonate saturation, compounded by ongoing ocean acidification trends — a real, economically significant, already-observed impact rather than a purely projected future concern. Hatcheries have since adapted by monitoring seawater chemistry and adjusting intake timing, a direct, practical operational response to documented ocean acidification effects.
      </div>

      <QuickCheck
      question="Why are shell- and skeleton-building marine organisms specifically vulnerable to ocean acidification, more so than many other marine species?"
      options={[
      { text: "Acidification directly dissolves their shells on contact through a violent chemical reaction", correct: false, explanation: "The mechanism is more gradual than a direct dissolving reaction on contact — the primary effect is that lower carbonate ion availability makes the ongoing process of building new calcium carbonate structure more energetically difficult, not that acidification actively destroys existing shells on contact." },
      { text: "Ocean acidification reduces the concentration of carbonate ions available in seawater, and shell- and skeleton-building organisms specifically rely on adequate carbonate ion availability to form calcium carbonate structures, making that structure-building process more energetically costly or difficult as acidification progresses", correct: true, explanation: "Correct. The chemistry directly reduces the raw material (carbonate ions) these organisms need for their specific biological process, which is why they face a more direct, mechanistic vulnerability than species without a calcium-carbonate-based structure." },
      { text: "These organisms are actually not affected by ocean acidification at all, and reports of impact are unfounded", correct: false, explanation: "This runs contrary to documented research, including both laboratory studies and real observed impacts like the Pacific Northwest oyster hatchery die-offs traced partly to low-pH, low-carbonate-saturation water." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="From dissolved CO2 to lower carbonate availability"
      type="flow"
      svgSrc="/diagrams/environment-nature-ocean-acidification-explained-reaction-chain.svg"
      altText="A flow diagram showing atmospheric carbon dioxide dissolving into ocean water, reacting to form carbonic acid, which partially breaks apart into hydrogen ions and bicarbonate; the extra hydrogen ions then react with existing carbonate ions in the water, converting them to more bicarbonate and reducing the carbonate ions available for shell- and skeleton-building marine organisms, shown as a final panel of a coral or oyster shell icon with a caption reading reduced carbonate available for shell-building."
      />
      <p>
      Each arrow in the chain is a real, well-established chemical reaction — the end result, reduced carbonate ion availability, is what actually constrains shell- and skeleton-building marine organisms, not the dissolved CO2 or lower pH directly.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating a 0.1 unit pH drop as a negligible, tiny change because it looks small on a 0-14 scale.", fix: "Remember pH is logarithmic — convert to hydrogen ion concentration (10^-pH) to see the real proportional change, which for a 0.1 drop is roughly a 30% increase in acidity." },
      { mistake: "Confusing ocean acidification with ocean warming as the same phenomenon or mechanism.", fix: "They're related (both stem from rising atmospheric CO2) but mechanistically distinct — acidification is a direct chemical reaction from dissolved CO2, while warming's main coral impact (bleaching) works through heat stress on the coral-algae symbiotic relationship." },
      { mistake: "Assuming ocean acidification is a purely future, modeled concern with no current observed impact.", fix: "Point to already-documented real-world cases, like the mid-2000s Pacific Northwest oyster hatchery die-offs linked to low-pH water, as a present, measured effect, not only a future projection." },
      ]}
      />
      <MisconceptionCallout
      myth="Ocean acidification and coral bleaching are the same problem caused by the same mechanism."
      reality={<p>They&apos;re both driven by rising atmospheric CO2, but through different chemical and biological pathways. Ocean acidification is a direct chemistry effect: dissolved CO2 forms carbonic acid, lowering pH and reducing carbonate ion availability needed for shell- and skeleton-building. Coral bleaching is primarily a heat-stress effect: unusually warm water causes corals to expel the symbiotic algae that give them color and much of their energy, a separate mechanism from the acidification chemistry, even though both problems share the same root cause (excess atmospheric CO2) and often affect the same reef ecosystems simultaneously.</p>}
      />

      <QuickCheck
      question="Since both ocean acidification and coral bleaching are linked to rising atmospheric CO2, are they the same mechanism affecting coral reefs?"
      options={[
      { text: "Yes — they're two names for the exact same chemical process", correct: false, explanation: "They share a root cause (rising atmospheric CO2) but operate through genuinely different mechanisms — one is a direct water chemistry effect, the other is a heat-stress effect on a coral's biology." },
      { text: "No — ocean acidification is a direct chemical effect (dissolved CO2 lowering pH and reducing carbonate availability for shell/skeleton building), while coral bleaching is primarily a heat-stress effect where warm water causes corals to expel their symbiotic algae; both share rising CO2 as a root cause but act through separate mechanisms", correct: true, explanation: "Correct. Distinguishing the two matters because they call for tracking different measurements (ocean pH and carbonate saturation vs. sea surface temperature) even though addressing the shared root cause (atmospheric CO2) would help mitigate both." },
      { text: "No, because coral bleaching has nothing to do with climate change at all", correct: false, explanation: "Coral bleaching is well-documented as strongly linked to ocean heat stress, which is itself tied to climate change-driven ocean warming — the point of distinction here is the specific mechanism, not whether climate change is involved at all." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Calculate pH from hydrogen ion concentration"
      fields={[
      { key: "hydrogenConcentrationMolar", label: "Hydrogen ion concentration (moles/liter)", defaultValue: 0.0000000079, step: 0.0000000001 },
      ]}
      resultLabel="pH"
      formula="phFromHydrogenConcentration"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Remember the pH scale is logarithmic — always convert a pH change to hydrogen ion concentration before judging whether it's a 'small' or 'large' shift.",
      "Keep ocean acidification (chemistry) and coral bleaching (heat stress) mentally separate — they're related but mechanistically distinct effects of rising CO2.",
      "Check NOAA's Ocean Acidification Program (oceanacidification.noaa.gov) for real, continuously updated measurement data rather than a secondhand summary.",
      "Use the calculator above with a real measured hydrogen ion concentration to see how the pH scale translates a tiny-looking exponent into a meaningful number.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What causes ocean acidification?", answer: "The ocean absorbs roughly a quarter of human CO2 emissions, and that dissolved CO2 reacts with seawater to form carbonic acid, which lowers pH and reduces the concentration of carbonate ions available in the water." },
      { question: "How much has ocean pH actually changed?", answer: "Average ocean surface pH has dropped by about 0.1 units since pre-industrial times, based on direct measurement. Because pH is a logarithmic scale, that corresponds to roughly a 30% increase in hydrogen ion concentration, not a small linear change." },
      { question: "Is ocean acidification the same as ocean warming or coral bleaching?", answer: "No. Ocean acidification is a direct chemistry effect from dissolved CO2 lowering pH. Coral bleaching is primarily a separate heat-stress effect where warm water causes corals to expel symbiotic algae. Both are linked to rising atmospheric CO2 but work through different mechanisms." },
      { question: "What marine life is most affected by ocean acidification?", answer: "Organisms that build shells or skeletons from calcium carbonate — corals, oysters, clams, and some plankton species — since lower carbonate ion availability makes that structure-building process more energetically difficult." },
      { question: "Is ocean acidification already affecting real industries, or is it only a future concern?", answer: "It's already had documented real-world impact — Pacific Northwest oyster hatcheries experienced significant larval die-offs in the mid-2000s linked to naturally upwelling low-pH water compounded by acidification trends, prompting hatcheries to adopt seawater chemistry monitoring." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
