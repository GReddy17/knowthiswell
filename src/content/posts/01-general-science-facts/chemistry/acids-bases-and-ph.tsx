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
  title: "Acids, Bases & pH: What the Scale Actually Measures",
  category: "general-science-facts",
  order: 13,
  subtopic: "chemistry",
  tags: [
    "acids and bases",
    "pH scale",
    "chemistry basics",
    "neutralization",
    "hydrogen ions",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why the pH scale is logarithmic, what makes a substance an acid or a base, and why lemon juice, soap, and stomach acid all sit at very different points on it.",
  summary: "pH measures how many free hydrogen ions are in a solution on a logarithmic scale from 0 to 14, with acids below 7 and bases above 7.",
  sources: [
    { label: "USGS Water Science School — pH and Water", url: "https://www.usgs.gov/special-topics/water-science-school" },
    { label: "Royal Society of Chemistry — Acids, Bases and pH", url: "https://edu.rsc.org/resources" },
    { label: "NIST — pH Measurement Standards", url: "https://www.nist.gov/pml" },
  ],
  seeAlso: [
    "general-science-facts/chemical-reactions-and-everyday-chemistry",
    "general-science-facts/common-household-chemistry",
    "general-science-facts/mixtures-solutions-and-separation",
  ],
  glossary: [
    { term: "pH", definition: "A logarithmic scale from 0 to 14 measuring how acidic or basic a solution is, based on the concentration of free hydrogen ions." },
    { term: "Acid", definition: "A substance that releases hydrogen ions (H⁺) in water, producing a pH below 7." },
    { term: "Base", definition: "A substance that accepts hydrogen ions or releases hydroxide ions (OH⁻) in water, producing a pH above 7." },
    { term: "Neutral", definition: "A solution with a pH of exactly 7, neither acidic nor basic — pure water is the standard example." },
    { term: "Logarithmic scale", definition: "A scale where each whole-number step represents a tenfold change in the underlying quantity, unlike a linear scale where each step is an equal-sized change." },
    { term: "Neutralization", definition: "A chemical reaction where an acid and a base combine, canceling out each other's acidity and basicity to typically form water and a salt." },
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
          "The pH scale runs from 0 (strongly acidic) to 14 (strongly basic), with 7 as neutral — pure water is the standard neutral reference point.",
          "pH is logarithmic, not linear: each single-point drop means the solution is 10 times more acidic, not just 'a bit more'. A pH of 4 is 1,000 times more acidic than a pH of 7.",
          "Acids and bases neutralize each other in a predictable chemical reaction, which is the working principle behind antacids, soap, and treating an acidic sting or spill.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/general-science-facts/acids-bases-and-ph">pH</TermLink> scale tells you how acidic or basic (alkaline) a substance is, from 0 to 14. Lemon juice and vinegar sit low on the scale, around pH 2-3, and taste sour — a classic sign of an <TermLink href="/general-science-facts/acids-bases-and-ph">acid</TermLink>. Soap and baking soda sit high, around pH 9-12, and feel slippery — a common trait of a <TermLink href="/general-science-facts/acids-bases-and-ph">base</TermLink>. Pure water sits exactly in the middle at pH 7, neither acidic nor basic — this is called <TermLink href="/general-science-facts/acids-bases-and-ph">neutral</TermLink>.</div>}
        detailed={<div className="prose-p">pH formally measures the concentration of free hydrogen ions (H⁺) in a solution, using the formula pH = -log₁₀[H⁺], where [H⁺] is the hydrogen ion concentration in moles per liter. Because it&apos;s a <TermLink href="/general-science-facts/acids-bases-and-ph">logarithmic scale</TermLink>, each whole-number step represents a tenfold change in hydrogen ion concentration, not a small linear step — a solution at pH 3 has 10 times more free hydrogen ions than one at pH 4, and 100 times more than one at pH 5. Acids donate hydrogen ions into solution (raising [H⁺] and lowering pH); bases either accept hydrogen ions or release hydroxide ions (OH⁻), which effectively lowers [H⁺] and raises pH. When an acid and base combine in the right proportions, their opposing effects on hydrogen ion concentration cancel out in a process called <TermLink href="/general-science-facts/acids-bases-and-ph">neutralization</TermLink>, typically producing water and a dissolved salt.</div>}
      />
      <FootnoteAside>&quot;pH&quot; stands for &quot;potential of hydrogen,&quot; a term introduced by Danish chemist Søren Sørensen in 1909 while working on quality control for brewing beer at the Carlsberg Laboratory.</FootnoteAside>

      <p>
      That logarithmic structure is the single most important — and most commonly misunderstood — thing about the pH scale, and it only clicks once you compare real numbers directly.
      </p>

      <QuickCheck
        question="Solution A has a pH of 3. Solution B has a pH of 5. How much more acidic (higher hydrogen ion concentration) is Solution A compared to Solution B?"
        options={[
          { text: "About 100 times more acidic, because pH is logarithmic and each step is a 10x change", correct: true, explanation: "Correct. The pH scale is logarithmic — a difference of 2 pH points means a 10 × 10 = 100-fold difference in hydrogen ion concentration, not just '2 units more acidic.'" },
          { text: "About twice as acidic, since 5 minus 3 is 2 and pH is a normal linear scale", correct: false, explanation: "This treats pH like a linear scale, which it isn't. A 2-point pH difference corresponds to a 100-fold difference in hydrogen ion concentration, far more than 'twice.'" },
          { text: "Exactly the same acidity, since both are below the neutral point of 7", correct: false, explanation: "Both being below 7 just means both are acidic — it doesn't mean they're equally acidic. The actual pH values (3 versus 5) show a large, specific difference in strength." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Calculating pH from hydrogen ion concentration (baseline case)</h3>
      <div className="prose-p">
      A solution has a hydrogen ion concentration of 0.0001 moles per liter (10⁻⁴ M). Using pH = -log₁₀[H⁺]: pH = -log₁₀(0.0001) = -(-4) = <strong>4</strong>. This places the solution firmly in acidic territory — roughly in the range of tomato juice or black coffee, both of which sit around pH 4-5 in reality.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why stomach acid doesn&apos;t dissolve the stomach itself (edge case / variation)</h3>
      <div className="prose-p">
      Human stomach acid sits at roughly pH 1.5-3.5 — strong enough to dissolve metal over time and comparable in strength to some industrial acids. The stomach lining survives constant exposure through a dedicated defense system: a thick layer of bicarbonate-rich mucus (itself a mild base) coats the stomach wall, neutralizing acid right at the surface before it can reach living tissue, combined with stomach cells that regenerate every few days. This is a genuine edge case where an extremely low pH is not just tolerated but essential — stomach acid is what breaks down food proteins and kills most ingested bacteria, and conditions that damage the protective mucus layer (like certain infections or long-term use of some medications) are what actually lead to ulcers, not the acid&apos;s strength alone.
      </div>

      <QuickCheck
        question="Stomach acid is strong enough to dissolve metal over time, yet it doesn't normally damage the stomach itself. Why?"
        options={[
          { text: "A protective mucus layer, itself mildly basic, coats the stomach lining and neutralizes acid at the surface before it reaches living tissue", correct: true, explanation: "Correct. The stomach's bicarbonate-rich mucus layer neutralizes acid right at the wall, protecting the tissue underneath — when this protective layer is damaged, acid-related ulcers can result." },
          { text: "Stomach acid is actually much weaker than commonly claimed", correct: false, explanation: "Stomach acid genuinely sits at a very low pH (around 1.5-3.5), strong enough to break down food and kill most ingested bacteria — its strength isn't overstated; the stomach's defense mechanism is what prevents self-damage." },
          { text: "The stomach lining is made of a material immune to all acids", correct: false, explanation: "Stomach tissue isn't inherently acid-immune — it's actively protected by a mucus barrier and rapid cell regeneration, not by some special acid-proof material." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How antacids neutralize excess stomach acid (real-world / applied case)</h3>
      <div className="prose-p">
      Antacid tablets typically contain mild bases like calcium carbonate or magnesium hydroxide. When swallowed, these compounds react directly with excess hydrogen ions from stomach acid, consuming them in a neutralization reaction and raising the local pH back toward a more comfortable range — relieving heartburn and acid reflux symptoms within minutes. This is the identical acid-base chemistry behind adding baking soda (a base) to neutralize an accidental acid spill, or using a base-based cream to soothe an acidic insect sting — a base is deliberately introduced to consume excess hydrogen ions and shift pH back toward neutral.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The pH scale from 0 to 14, with common substances placed on it"
        type="detail"
        svgSrc="/diagrams/general-science-facts-acids-bases-and-ph-scale.svg"
        altText="A horizontal pH scale bar from 0 to 14, colored red on the acidic end transitioning through green at neutral 7 to blue on the basic end, with common substances marked at their approximate pH: battery acid near 0, lemon juice near 2, stomach acid near 2, black coffee near 5, pure water at 7, baking soda near 9, ammonia near 11, and drain cleaner near 13."
      />
      <p>
      Notice how tightly clustered many familiar substances are near the neutral middle, while a small number of extreme substances (battery acid, drain cleaner) sit far out at either end. Because the scale is logarithmic, that visual distance corresponds to an enormous real difference in hydrogen ion concentration — pH 13 drain cleaner isn&apos;t &quot;a bit more basic&quot; than pH 9 baking soda, it&apos;s roughly 10,000 times more concentrated in its basic strength.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating the pH scale as linear, assuming a pH of 4 is 'twice as acidic' as a pH of 8.", fix: "pH is logarithmic — each single-point difference is a 10x change in hydrogen ion concentration. A pH of 4 versus 8 is a 10,000-fold difference, not a 2x difference." },
          { mistake: "Assuming 'basic' or 'alkaline' automatically means safer or gentler than 'acidic.'", fix: "Strength matters independent of direction. Concentrated bases like drain cleaner (pH ~13-14) are just as capable of causing severe chemical burns as concentrated acids — both extremes of the scale can be hazardous." },
          { mistake: "Thinking neutral (pH 7) means 'contains no chemicals' or is automatically the safest possible value.", fix: "Neutral simply means balanced hydrogen and hydroxide ion concentrations — it says nothing about what else is dissolved in a solution, or whether that solution is safe to touch or ingest." },
        ]}
      />
      <MisconceptionCallout
        myth="A lower pH number always means a more dangerous or corrosive substance."
        reality={<p>Danger depends on both how far a substance sits from neutral <em>and</em> its concentration — not the pH number alone in isolation. Lemon juice sits around pH 2, similar to some stomach acid, and is perfectly safe to drink in normal amounts; concentrated sulfuric acid, also very low pH, causes severe chemical burns. Meanwhile, a strong base like drain cleaner at the opposite end of the scale (pH ~13-14) can be just as hazardous as a strong acid. The number alone, without context on concentration and exposure, doesn&apos;t tell the whole safety story.</p>}
      />

      <QuickCheck
        question="Lemon juice (pH ~2) is safe to drink, but concentrated battery acid (also very low pH) causes severe burns. What explains the difference?"
        options={[
          { text: "Concentration and the specific chemical involved matter, not just the pH number — battery acid is a far more concentrated, more reactive acid than the diluted acids naturally in lemon juice", correct: true, explanation: "Correct. pH alone doesn't capture concentration or the specific chemical's reactivity — two substances can share a similar pH range while differing enormously in how concentrated and hazardous they actually are." },
          { text: "Lemon juice isn't a real acid, despite its low pH reading", correct: false, explanation: "Lemon juice genuinely is acidic (citric acid gives it a real low pH) — the safety difference comes from concentration and chemical identity, not from lemon juice somehow not counting as an acid." },
          { text: "pH readings for liquids humans can drink are always inaccurate", correct: false, explanation: "pH measurement is accurate regardless of whether a liquid is meant for drinking — the safety difference between lemon juice and battery acid comes from real differences in concentration and chemical composition, not measurement error." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="pH from hydrogen ion concentration (pH = -log₁₀[H⁺])"
        fields={[
          { key: "hydrogenConcentrationMolar", label: "Hydrogen ion concentration (mol/L)", defaultValue: 0.0001, step: 0.00001 },
        ]}
        resultLabel="pH value"
        formula="phFromHydrogenConcentration"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Try the calculator above with a hydrogen ion concentration of 0.00000001 (10⁻⁸ M) to see how a slightly basic solution comes out — it should land just above pH 7.",
          "Next time you use an antacid, connect the relief to a genuine acid-base neutralization reaction happening in your stomach.",
          "Check the pH of common household liquids (coffee, soap, tap water) with pH test strips to see how tightly most familiar substances cluster near neutral.",
          "Read the related entry on Chemical Reactions & Everyday Chemistry to see how neutralization fits into the broader picture of reactions.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does pH stand for and what does it measure?", answer: "pH stands for 'potential of hydrogen' and measures the concentration of free hydrogen ions in a solution on a logarithmic scale from 0 to 14, indicating how acidic or basic it is." },
          { question: "Is the pH scale linear or logarithmic?", answer: "Logarithmic. Each whole-number step represents a tenfold change in hydrogen ion concentration — a solution at pH 4 has 10 times more hydrogen ions than one at pH 5, and 100 times more than one at pH 6." },
          { question: "What pH is neutral?", answer: "pH 7 is neutral, meaning hydrogen ion and hydroxide ion concentrations are balanced. Pure water is the standard reference example of a neutral substance." },
          { question: "Why doesn't stomach acid damage the stomach?", answer: "A protective, bicarbonate-rich mucus layer coats the stomach lining and neutralizes acid right at the surface, combined with stomach cells that regenerate every few days — this is what normally prevents the very low pH of stomach acid from damaging the tissue underneath." },
          { question: "Are bases always safer than acids?", answer: "No. Both extremes of the pH scale can be hazardous depending on concentration — strong bases like drain cleaner (pH ~13-14) can cause chemical burns just as severe as strong acids. Neither direction on the scale is inherently safer." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
