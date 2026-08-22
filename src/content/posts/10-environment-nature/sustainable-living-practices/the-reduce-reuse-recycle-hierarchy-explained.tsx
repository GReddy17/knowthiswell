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
  title: "The Reduce-Reuse-Recycle Hierarchy Explained",
  category: "environment-nature",
  order: 25,
  subtopic: "sustainable-living-practices",
  tags: ["waste hierarchy", "recycling", "source reduction", "sustainability", "EPA"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Reduce, reuse, and recycle aren't three equal options — they're a ranked hierarchy where preventing waste in the first place beats recycling it, every time.",
  summary: "The waste management hierarchy ranks source reduction and reuse above recycling and composting, which in turn rank above energy recovery and landfill disposal — the phrase 'reduce, reuse, recycle' is already listed in the correct order of environmental preference, not three interchangeable options.",
  sources: [
    { label: "EPA — Sustainable Materials Management: Non-Hazardous Materials and Waste Management Hierarchy", url: "https://www.epa.gov/smm/sustainable-materials-management-non-hazardous-materials-and-waste-management-hierarchy" },
    { label: "EPA — Reducing and Reusing Basics", url: "https://www.epa.gov/recycle/reducing-and-reusing-basics" },
    { label: "UNEP — Beat Waste Pollution", url: "https://www.unep.org/topics/circular-economy/beat-waste-pollution" },
  ],
  seeAlso: [
    "environment-nature/composting-basics-for-beginners",
    "environment-nature/reducing-food-waste-at-home",
    "environment-nature/understanding-the-circular-economy",
  ],
  glossary: [
    {"term":"Waste management hierarchy","definition":"EPA's ranked framework for waste strategies, from most to least environmentally preferred: source reduction and reuse, recycling and composting, energy recovery, and treatment/disposal."},
    {"term":"Source reduction","definition":"Preventing waste from being created in the first place, by designing, purchasing, or using products so that less material needs to be discarded at all — the top tier of the hierarchy."},
    {"term":"Diversion rate","definition":"The percentage of total waste generated that is diverted away from landfill or incineration, through reuse, recycling, or composting."},
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
      "\"Reduce, reuse, recycle\" is already ranked in order of environmental preference — the EPA's waste management hierarchy places source reduction and reuse above recycling and composting, which in turn rank above energy recovery and landfill disposal.",
      "Recycling only processes material that already became waste; reduction and reuse prevent that material from becoming waste in the first place, which is why they sit higher on the hierarchy — a can never made uses less energy than a can made and then recycled.",
      "A high recycling rate alone doesn't mean a household or city is managing waste well — the hierarchy explicitly ranks recycling below simply generating less waste to begin with.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">The EPA&apos;s <TermLink href="/environment-nature/the-reduce-reuse-recycle-hierarchy-explained">waste management hierarchy</TermLink> ranks strategies from best to worst: first, reduce how much you use or throw away; second, reuse what you already have; third, recycle or compost what&apos;s left; fourth, recover energy by burning waste; and last, send what remains to a landfill. Each step down the list means more material has already become waste before anything useful happens to it.</div>}
      detailed={<div className="prose-p">The hierarchy is usually drawn as an inverted pyramid, widest at the top where the environmental benefit is largest. <TermLink href="/environment-nature/the-reduce-reuse-recycle-hierarchy-explained">Source reduction</TermLink> and reuse occupy the top tier because they avoid the environmental cost of manufacturing, transporting, and processing new material entirely — a reused glass jar skips the energy of melting and reshaping glass. Recycling and composting form the next tier: they recover material value from something that has already become waste, which still requires collection, processing, and re-manufacturing energy, just less than making something from raw material. Energy recovery (burning waste to generate electricity or heat) sits below that, since it destroys the material entirely while capturing only a fraction of its embodied energy. Disposal — landfilling — sits at the bottom, since it recovers no value at all and the material&apos;s embodied energy and resources are simply lost.</div>}
      />
      <FootnoteAside>The hierarchy isn&apos;t unique to the US — most national and international waste frameworks, including the EU&apos;s Waste Framework Directive, use a nearly identical ranked structure, though exact terminology and tier counts vary slightly between agencies.</FootnoteAside>

      <p>
      The practical value of the hierarchy is that it gives a ranking, not just a checklist — when two options are both &quot;good for the environment,&quot; the hierarchy tells you which one actually does more.
      </p>

      <QuickCheck
      question="A household recycles diligently but buys a large amount of single-use packaged goods each week. According to the waste hierarchy, is this household managing waste as well as it could?"
      options={[
      { text: "Yes — recycling is the main thing that matters, so this household is doing the important part", correct: false, explanation: "Recycling is only the third tier of the hierarchy. A household that recycles heavily but never reduces how much single-use packaging it buys in the first place is skipping the two higher-ranked, more impactful tiers." },
      { text: "No — buying less single-use packaged material in the first place (source reduction) ranks above recycling, so heavy reliance on recycling alone leaves the highest-impact tier of the hierarchy unused", correct: true, explanation: "Correct. Recycling processes waste that has already been generated. Reducing how much packaging enters the household to begin with prevents that waste from existing at all, which is the higher-ranked and more effective strategy." },
      { text: "It's impossible to say without knowing the local recycling facility's processing rate", correct: false, explanation: "The hierarchy's ranking doesn't depend on local facility efficiency — reduction and reuse rank above recycling regardless of how good the local recycling program is, because they avoid the waste-generation step entirely." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Ranking three real options for a single situation (baseline case)</h3>
      <div className="prose-p">
      A household needs to store leftovers. Option A: buy single-use plastic wrap each time (no reduction, no reuse). Option B: buy a box of reusable silicone food covers once and reuse them for years (reuse tier). Option C: buy plastic wrap but recycle the packaging it came in (recycling tier, and only for the packaging, not the wrap itself, which typically isn&apos;t recyclable). Ranked by the hierarchy: Option B (reuse) is the best choice, Option C is a distant third, and Option A does the least.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Calculating a household&apos;s diversion rate (edge case / variation)</h3>
      <div className="prose-p">
      A household generates 20 kg of total waste in a month and diverts 14 kg of it through recycling and composting combined (not counting anything reduced or reused, since those never became &quot;waste&quot; to measure in the first place). Diversion rate: 14 ÷ 20 × 100 = 70%. This number only measures the bottom two tiers (recycling and composting) — it says nothing about how much waste this household avoided generating through reduction and reuse, which is the hierarchy&apos;s real point: a high diversion rate can still describe a household that is generating far more waste than necessary.
      </div>

      <QuickCheck
      question="Why can a household with a 70% diversion rate still be managing waste worse than a household with a 40% diversion rate?"
      options={[
      { text: "It can't — a higher diversion rate always means better waste management", correct: false, explanation: "Diversion rate only measures how much already-generated waste gets recycled or composted. A household generating twice as much total waste but recycling most of it can have a higher rate while producing more actual waste overall." },
      { text: "Because diversion rate only measures recycling and composting (the middle of the hierarchy) — a household that generates far less total waste to begin with (source reduction, the top tier) can have a lower diversion percentage of a much smaller number and still do less environmental harm", correct: true, explanation: "Correct. If Household A generates 40 kg and diverts 28 kg (70%), and Household B generates 10 kg and diverts 4 kg (40%), Household B still sent less total waste (6 kg vs 12 kg) to landfill despite the lower percentage." },
      { text: "Diversion rate calculations are inherently unreliable and shouldn't be trusted", correct: false, explanation: "The calculation itself is reliable — the issue is that it's a narrow metric measuring only recycling/composting, not a complete picture of a household's total waste generation, which is what the hierarchy actually prioritizes." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A city government applying the hierarchy to policy (real-world / applied case)</h3>
      <div className="prose-p">
      A city aiming to cut landfill waste has two policy options with the same budget: (1) fund a new curbside recycling truck route, or (2) fund a program that lends out reusable dishware and equipment for public events, reducing single-use disposables at the source. Per the hierarchy, option 2 targets a higher tier (reduction) and prevents waste from being generated at all, while option 1 only improves how efficiently already-generated waste gets processed. This is exactly the reasoning many real municipal waste-reduction plans (which explicitly reference the EPA hierarchy) use to prioritize source-reduction programs, like event dishware lending or plastic bag policies, ahead of expanding recycling infrastructure alone.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The EPA waste management hierarchy, as an inverted pyramid"
      type="comparison"
      svgSrc="/diagrams/environment-nature-the-reduce-reuse-recycle-hierarchy-explained-inverted-pyramid.svg"
      altText="An inverted pyramid divided into four horizontal bands from top to bottom: the widest top band labeled Source Reduction and Reuse (most preferred), the next band labeled Recycling and Composting, the next narrower band labeled Energy Recovery, and the narrowest bottom band labeled Treatment and Disposal (least preferred), with an arrow along the side indicating decreasing environmental benefit from top to bottom."
      />
      <p>
      The pyramid narrows from top to bottom because each lower tier can absorb less of the total problem — not every material can be reduced or reused, but everything used still needs somewhere to go once it&apos;s genuinely unavoidable waste, which is why disposal remains the bottom &quot;catch-all&quot; tier rather than disappearing.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating a high recycling or diversion rate as the main measure of good waste management.", fix: "Track total waste generated per person or household over time, not just the percentage of it that gets recycled — a shrinking total is the higher-tier goal the hierarchy actually prioritizes." },
      { mistake: "Assuming reduce, reuse, and recycle are three equally good, interchangeable options to pick from.", fix: "Default to reduction or reuse whenever a real option exists, and treat recycling as the fallback for what genuinely can't be avoided or reused." },
      { mistake: "Believing recycling has no environmental cost since the material is 'saved' from landfill.", fix: "Remember recycling still requires collection, transportation, sorting, and reprocessing energy — real, but smaller than the cost of manufacturing something new from raw material, and larger than simply not generating the waste at all." },
      ]}
      />
      <MisconceptionCallout
      myth="Recycling is the most important part of 'reduce, reuse, recycle' since it's the one most people actively participate in."
      reality={<p>The EPA&apos;s own hierarchy ranks recycling below both reduction and reuse in environmental benefit. Recycling only comes into play after something has already become waste; reduction and reuse prevent that waste from being generated in the first place, which is why they occupy the top, most-preferred tier of the hierarchy — the order in the phrase itself reflects this ranking, not habit or convenience.</p>}
      />

      <QuickCheck
      question="If someone wants to make the single biggest improvement to their household's environmental footprint from waste, which hierarchy tier should they focus on first?"
      options={[
      { text: "Recycling more of what they already throw away", correct: false, explanation: "Recycling is the third tier. It's a meaningful improvement, but it's not the highest-leverage tier according to the hierarchy's own ranking." },
      { text: "Reducing how much they buy and consume in the first place — the top tier of the hierarchy, since it prevents the waste from ever existing", correct: true, explanation: "Correct. Source reduction and reuse sit at the top of the hierarchy precisely because they have the largest environmental benefit per unit of effort — nothing downstream (recycling, energy recovery, disposal) is needed for material that was never generated." },
      { text: "Switching to a waste hauler with a better energy-recovery (waste-to-energy) program", correct: false, explanation: "Energy recovery is the second-to-last tier of the hierarchy — an improvement over landfilling, but far below the impact of reducing or reusing in the first place." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Calculate a diversion rate (recycling + composting share of total waste)"
      fields={[
      { key: "divertedKg", label: "Diverted (recycled + composted), kg", defaultValue: 14 },
      { key: "totalWasteKg", label: "Total waste generated, kg", defaultValue: 20 },
      ]}
      resultLabel="Diversion rate"
      formula="wasteDiversionRatePercent"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Before buying a single-use item, ask whether a reusable option exists — that's the top tier of the hierarchy and the highest-leverage choice available.",
      "Track your household's total waste output for a month, not just what fraction gets recycled — that total is the number the hierarchy actually wants you to shrink.",
      "Use the calculator above to see your own diversion rate, but remember it only measures the recycling/composting tier, not reduction.",
      "When evaluating a sustainability claim or program, ask which hierarchy tier it actually targets before assuming it's the most impactful option.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the waste management hierarchy?", answer: "The EPA's ranked framework for waste strategies, from most to least environmentally preferred: source reduction and reuse, recycling and composting, energy recovery, and treatment/disposal." },
      { question: "Is reduce, reuse, recycle already in the right order?", answer: "Yes. The phrase lists the three strategies in the same order the EPA's hierarchy ranks them: reduce (source reduction) is most preferred, reuse is second, and recycle is third." },
      { question: "Why is recycling ranked below reduce and reuse?", answer: "Recycling only processes material after it has already become waste, requiring collection and reprocessing energy. Reduction and reuse prevent that waste from being generated at all, which is a larger environmental benefit." },
      { question: "What is a diversion rate?", answer: "The percentage of total waste generated that gets diverted from landfill or incineration through recycling or composting — it measures only the middle tiers of the hierarchy, not reduction or reuse." },
      { question: "Does a high recycling rate mean someone is managing waste well?", answer: "Not necessarily. A high recycling rate only reflects the recycling tier of the hierarchy; someone could still be generating far more total waste than necessary while recycling most of it, which the hierarchy ranks as less effective than simply generating less waste." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
