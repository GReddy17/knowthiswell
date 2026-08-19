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
  title: "Mixtures, Solutions & Separation: How Substances Combine Without Reacting",
  category: "general-science-facts",
  order: 16,
  subtopic: "chemistry",
  tags: [
    "mixtures",
    "solutions",
    "solubility",
    "separation techniques",
    "solute and solvent",
    "chemistry basics",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The difference between a mixture and a solution, why salt disappears in water but sand doesn't, and how filtration and distillation separate them again.",
  summary: "A mixture combines two or more substances physically, without a chemical reaction — a solution is a special case where the mixture becomes completely uniform, and separation techniques exploit differences in physical properties to pull the parts back apart.",
  sources: [
    { label: "Royal Society of Chemistry — Mixtures and Solutions resources", url: "https://edu.rsc.org/resources" },
    { label: "USGS Water Science School — Water Properties and Dissolved Substances", url: "https://www.usgs.gov/special-topics/water-science-school" },
    { label: "NIST — Physical Measurement Laboratory", url: "https://www.nist.gov/pml" },
  ],
  seeAlso: [
    "general-science-facts/acids-bases-and-ph",
    "general-science-facts/chemical-reactions-and-everyday-chemistry",
    "general-science-facts/common-household-chemistry",
    "general-science-facts/matter-and-states-of-matter",
  ],
  glossary: [
    { term: "Mixture", definition: "A physical combination of two or more substances where each substance keeps its own chemical identity and can, in principle, be separated back out." },
    { term: "Solution", definition: "A homogeneous (uniform) mixture in which one substance, the solute, is dissolved completely and evenly throughout another, the solvent." },
    { term: "Solute", definition: "The substance being dissolved in a solution — salt in salt water, for example." },
    { term: "Solvent", definition: "The substance doing the dissolving in a solution — usually present in the larger amount, such as water in salt water." },
    { term: "Solubility", definition: "The maximum amount of a solute that can dissolve in a given amount of solvent at a given temperature." },
    { term: "Saturated solution", definition: "A solution holding the maximum amount of dissolved solute possible at its current temperature — any more added will not dissolve." },
    { term: "Suspension", definition: "A heterogeneous mixture where particles are large enough to eventually settle out or be filtered, unlike a true solution." },
    { term: "Distillation", definition: "A separation technique that heats a mixture to evaporate one component and then cools and collects the vapor as a separated liquid." },
    { term: "Filtration", definition: "A separation technique that passes a mixture through a barrier with small openings, trapping solid particles while liquid or gas passes through." },
    { term: "Chromatography", definition: "A separation technique that spreads a mixture across a material, letting components separate based on how strongly each one is attracted to that material." },
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
          "Mixtures are physical combinations, not chemical reactions — the substances inside keep their own identities and can, in principle, always be separated back out.",
          "A solution is a special, uniform (homogeneous) mixture where the solute breaks down to the molecular level and stays dissolved indefinitely, unlike a suspension that eventually settles.",
          "Which separation method works — filtration, evaporation, distillation, or chromatography — depends entirely on which physical property actually differs between the components: particle size, boiling point, or solubility.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Stir sand into water and you get a cloudy <TermLink href="/general-science-facts/mixtures-solutions-and-separation">mixture</TermLink> — the sand is still sand, just spread through the water, and it settles back out if you leave it alone. Stir salt into water and something different happens: the salt seems to vanish completely, spread evenly through every part of the water, and it never settles back out on its own. That&apos;s a <TermLink href="/general-science-facts/mixtures-solutions-and-separation">solution</TermLink> — a special kind of mixture where the dissolved substance is broken down so thoroughly it can&apos;t be seen or filtered out, even though it&apos;s chemically still just salt.</div>}
        detailed={<div className="prose-p">The difference is whether a mixture is heterogeneous or homogeneous. Sand in water is heterogeneous — you can see distinct regions with different compositions, and simple physical separation (settling, filtration) pulls it apart easily. Salt water is homogeneous: the <TermLink href="/general-science-facts/mixtures-solutions-and-separation">solute</TermLink> (salt) has broken apart into individual ions surrounded by water molecules, distributed so evenly that no region of the liquid differs from any other, no matter how small a sample you examine. Every solution has a <TermLink href="/general-science-facts/mixtures-solutions-and-separation">solubility</TermLink> limit — the maximum amount of solute a given amount of <TermLink href="/general-science-facts/mixtures-solutions-and-separation">solvent</TermLink> can hold at a given temperature — and once that limit is reached, the solution is <TermLink href="/general-science-facts/mixtures-solutions-and-separation">saturated</TermLink> and any added solute simply won&apos;t dissolve, instead settling as a visible solid. In between true solutions and obvious mixtures like sand-in-water sits a middle category, colloids and <TermLink href="/general-science-facts/mixtures-solutions-and-separation">suspensions</TermLink> — milk and fog are colloids, with particles too small to settle quickly but too large to count as fully dissolved, which is why a beam of light passing through milk visibly scatters (the Tyndall effect) while a beam through salt water does not.</div>}
      />
      <FootnoteAside>Chromatography — now a standard lab separation technique — was invented in 1901 by Russian botanist Mikhail Tsvet, who used it to separate plant pigments by color as they traveled at different speeds through a column of powdered chalk. The name literally means &quot;color writing,&quot; from the Greek chroma (color) and graphein (to write).</FootnoteAside>

      <p>
      Understanding that dissolving is physical, not chemical, is the key that unlocks the whole topic of separation — because if nothing chemically new was formed, everything that went in can, with the right technique, be gotten back out.
      </p>

      <QuickCheck
        question="You stir a spoonful of salt into a glass of water and it seems to disappear completely. What actually happened to the salt?"
        options={[
          { text: "The salt underwent a chemical reaction with the water and turned into a new substance", correct: false, explanation: "Dissolving is a physical change, not a chemical reaction — no new substance is formed. This is exactly why evaporating the water leaves the original salt behind, unchanged." },
          { text: "The salt broke apart into individual particles spread evenly throughout the water, but it's still chemically the same salt", correct: true, explanation: "Correct. Dissolving physically separates the salt down to an even, molecular-level distribution through the water — it hasn't reacted or transformed, which is why it reappears if the water evaporates." },
          { text: "The salt was destroyed and its atoms became part of the water molecules", correct: false, explanation: "No atoms are created, destroyed, or reassigned between substances during dissolving — this is a physical mixing process, not a chemical transformation." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Is a glass of salt water saturated? (baseline case)</h3>
      <div className="prose-p">
      Table salt&apos;s solubility in water at room temperature (roughly 20°C) is about 360 grams per liter. Suppose you stir 40 grams of salt into 200 milliliters (0.2 liters) of water. Scaling the solubility limit to that volume: 360 g/L × 0.2 L = 72 grams is the maximum that water can dissolve at that temperature. Since 40 grams is well under the 72-gram limit, every bit of the salt dissolves completely and the solution is <strong>unsaturated</strong> — there&apos;s still room to dissolve roughly another 32 grams before hitting saturation.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why warm soda goes flat faster than cold soda (edge case / variation)</h3>
      <div className="prose-p">
      Most solids become more soluble as temperature rises — more sugar dissolves in hot tea than iced tea. Gases work the opposite way: their solubility in liquids <em>decreases</em> as temperature rises. Carbonated soda is a solution of dissolved carbon dioxide gas under pressure; as the soda warms up, the water molecules move faster and hold onto the dissolved CO₂ less effectively, so gas escapes as bubbles more readily — the soda goes flat faster. The same reversed relationship explains why warmer lake and ocean water holds less dissolved oxygen than cold water, which is part of why fish and other aquatic life can struggle during unusually warm spells even when the water itself isn&apos;t lethally hot.
      </div>

      <QuickCheck
        question="A can of soda goes flat noticeably faster when left in a warm room than when kept in the fridge. Why?"
        options={[
          { text: "Heat destroys the carbon dioxide molecules dissolved in the soda", correct: false, explanation: "The CO₂ molecules aren't destroyed by warmth — they're still intact. What changes is how readily they stay dissolved versus escaping as gas." },
          { text: "Gas solubility in liquids decreases as temperature rises, so warm soda holds onto dissolved CO₂ less effectively and it escapes as bubbles faster", correct: true, explanation: "Correct. Unlike most solids, dissolved gases become less soluble as a liquid warms, which is exactly why warm soda loses its fizz faster than cold soda." },
          { text: "Warm plastic bottles are more porous and let gas leak out physically through the container", correct: false, explanation: "The bottle material isn't the main factor here — the same effect happens in a sealed glass bottle. The mechanism is about gas solubility changing with temperature, not container leakage." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Separating salt from seawater by distillation (real-world / applied case)</h3>
      <p>
      Seawater is a solution of dissolved salts in water. Because salt has an extremely high boiling point compared to water (water boils at 100°C at sea level; salt itself has to be heated to over 1,400°C to boil), heating seawater lets the water evaporate away as vapor while the dissolved salt stays behind as a solid residue — this is simple <TermLink href="/general-science-facts/mixtures-solutions-and-separation">distillation</TermLink>. Cooling and collecting that water vapor gives fresh, salt-free water. Large-scale desalination plants use essentially this same evaporation-and-recondensation principle (often combined with other methods like reverse osmosis) to turn seawater into drinking water, exploiting the enormous gap between water&apos;s boiling point and salt&apos;s.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Matching a separation technique to the physical property it exploits"
        type="detail"
        svgSrc="/diagrams/general-science-facts-mixtures-solutions-separation-methods.svg"
        altText="A four-column comparison chart showing filtration exploiting particle size difference, evaporation exploiting boiling point difference where the solute doesn't evaporate, distillation exploiting boiling point difference where both components can evaporate and are recondensed separately, and chromatography exploiting differing attraction to a fixed material as a mixture spreads across it."
      />
      <p>
      Pick the wrong tool and separation simply fails — filtration can&apos;t separate dissolved salt from water because the salt ions are far too small to be caught by any filter paper, and plain evaporation can&apos;t separate two liquids that both boil away together. Matching the technique to the actual physical property that differs between the components is the entire logic of separation chemistry.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking dissolving is a chemical reaction, so the dissolved substance is 'gone for good.'", fix: "Dissolving is a physical change. Evaporating the solvent (like boiling away water from salt water) recovers the original solute completely unchanged." },
          { mistake: "Assuming every mixture must look uniform to count as a mixture.", fix: "Heterogeneous mixtures like sand in water, or a salad, are still mixtures even though you can visibly see the separate parts — 'mixture' just means a physical combination, not necessarily a uniform one." },
          { mistake: "Believing a solution can dissolve an unlimited amount of solute no matter how much you add.", fix: "Every solvent has a solubility limit at a given temperature. Past that saturation point, extra solute simply won't dissolve and settles out as a visible solid." },
        ]}
      />
      <MisconceptionCallout
        myth="Muddy water can't be made clean again because the dirt has permanently mixed into the water."
        reality={<p>Mud in water is a heterogeneous mixture (often closer to a suspension) — the dirt particles haven&apos;t chemically bonded with the water at all, they&apos;re just physically suspended in it. Given enough time, gravity alone will settle most of the particles out; filtration removes the rest almost immediately by trapping particles too large to pass through the filter&apos;s openings, while the water itself passes straight through. Because no chemical reaction occurred, full physical separation is always possible in principle — it just needs the right technique and, for water treatment at scale, often several combined techniques.</p>}
      />

      <QuickCheck
        question="Why can filtration completely separate mud from water, but not salt from water?"
        options={[
          { text: "Mud particles are physically large enough to be trapped by a filter's small openings, while salt has dissolved into ions far too small for any filter to catch", correct: true, explanation: "Correct. Filtration works purely on particle size. Dissolved salt ions are far smaller than any practical filter's openings, so they pass straight through along with the water — a different technique like evaporation or distillation is needed instead." },
          { text: "Salt chemically bonds with water molecules, while mud does not", correct: false, explanation: "Salt doesn't chemically bond with water when it dissolves — it physically disperses as ions. The real reason filtration fails on salt water is particle size, not chemical bonding." },
          { text: "Mud is a different chemical element than water, while salt water is a single pure substance", correct: false, explanation: "Salt water is not a pure substance — it's still a mixture (a solution) of two distinct substances, salt and water. Both mud-water and salt water are mixtures; they just require different separation techniques." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Concentration of a solution by mass percent"
        fields={[
          { key: "massSoluteG", label: "Mass of solute (grams)", defaultValue: 40 },
          { key: "massSolutionG", label: "Total mass of solution (grams)", defaultValue: 240 },
        ]}
        resultLabel="Concentration (% by mass)"
        formula="massPercentConcentration"
        formatResult="number"
      />
      <EntryCalculator
        title="Molarity of a solution (M = moles of solute ÷ liters of solvent)"
        fields={[
          { key: "molesOfSolute", label: "Moles of solute", defaultValue: 0.5, step: 0.01 },
          { key: "volumeLiters", label: "Volume of solution (liters)", defaultValue: 1, step: 0.1 },
        ]}
        resultLabel="Molarity (mol/L)"
        formula="molarity"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you sweeten iced tea, notice how much easier sugar dissolves in the hot version — that's solubility rising with temperature in action.",
          "Watch a can of soda go flat over a warm afternoon and connect it to gas solubility dropping as temperature rises.",
          "Try the mass percent calculator above with your own kitchen numbers, like a saltwater brine recipe, to see the actual concentration.",
          "Read the related entry on Acids, Bases & pH to see how dissolved hydrogen ions in a solution connect to this same solute-and-solvent framework.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between a mixture and a solution?", answer: "A mixture is any physical combination of substances; a solution is a specific kind of mixture that's completely uniform (homogeneous), with the solute dissolved down to the molecular or ionic level throughout the solvent." },
          { question: "Why does salt dissolve in water but sand doesn't?", answer: "Water molecules are able to pull salt's ions apart and surround them individually, breaking the salt down to a dissolved, molecular-level distribution. Sand's particles aren't broken apart by water at all — they just get physically suspended, forming a heterogeneous mixture instead of a solution." },
          { question: "How does distillation separate mixtures?", answer: "Distillation heats a mixture so the component with the lower boiling point evaporates first, then cools and collects that vapor separately as a purified liquid, leaving components with higher boiling points behind." },
          { question: "Is milk a mixture or a compound?", answer: "Milk is a mixture — specifically a colloid, with fat and protein particles suspended in water at a scale small enough to stay mixed for a long time but large enough to scatter light, which is part of why milk looks opaque rather than clear." },
          { question: "Why does warm soda go flat faster than cold soda?", answer: "Dissolved gases become less soluble in a liquid as temperature rises, unlike most solids. Warmer soda holds its dissolved carbon dioxide less effectively, so the gas escapes as bubbles faster than in cold soda." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
