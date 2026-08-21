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
  title: "Fluid Ounces: US vs UK Differences",
  category: "units-measurement-conversions",
  order: 20,
  subtopic: "volume-and-capacity",
  tags: ["fluid ounces", "US customary units", "imperial units", "volume conversion"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A US fluid ounce (29.5735 mL) is about 4.1% larger than a UK fluid ounce (28.4131 mL) — the reverse of the gallon, where the UK unit is the bigger one.",
  summary: "The US fluid ounce and UK (imperial) fluid ounce are different sizes because each was derived from its own country's gallon divided into a different number of parts, and the US fluid ounce ends up larger even though the US gallon is smaller.",
  sources: [
    { label: "NIST — Handbook 44, Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices", url: "https://www.nist.gov/pml/owm/publications/nist-handbook-44" },
    { label: "Encyclopaedia Britannica — Ounce", url: "https://www.britannica.com/science/ounce" },
    { label: "UK Government — Weights and Measures Act legal units of measurement", url: "https://www.gov.uk/guidance/weights-and-measures-legislation" },
  ],
  seeAlso: [
    "units-measurement-conversions/liters-vs-gallons-everyday-conversion",
    "units-measurement-conversions/cups-tablespoons-and-teaspoons-explained",
    "math-numbers/unit-conversions-length-weight-volume",
  ],
  glossary: [
    {"term":"US fluid ounce","definition":"A US volume unit equal to 1/128 of a US gallon, or 29.5735 milliliters."},
    {"term":"UK (imperial) fluid ounce","definition":"A British volume unit equal to 1/160 of a UK imperial gallon, or 28.4131 milliliters — about 4.1% smaller than the US fluid ounce."},
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
      "A US fluid ounce (29.5735 mL) is larger than a UK fluid ounce (28.4131 mL) — about a 4.1% difference.",
      "This is the reverse of the gallon relationship: the UK gallon is bigger than the US gallon, but the UK fluid ounce is smaller than the US fluid ounce.",
      "The reversal happens because the US gallon splits into 128 fluid ounces while the UK gallon splits into 160 — dividing a smaller gallon into fewer pieces (US) can still yield a bigger piece than dividing a bigger gallon into more pieces (UK).",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/units-measurement-conversions/fluid-ounces-us-vs-uk-differences">US fluid ounce</TermLink> is 29.5735 mL. A <TermLink href="/units-measurement-conversions/fluid-ounces-us-vs-uk-differences">UK fluid ounce</TermLink> is 28.4131 mL — smaller, by about 4.1%. That might feel backwards if you already know the UK gallon is the bigger of the two gallons — but the fluid ounce is a fraction of the gallon, not the gallon itself, and the two countries don&apos;t divide their gallons into the same number of ounces.</div>}
      detailed={<div className="prose-p">The US divides its gallon into 128 fluid ounces (a gallon is 4 quarts, each quart 2 pints, each pint 2 cups, each cup 8 fluid ounces: 4×2×2×8 = 128). The UK divides its imperial gallon into 160 fluid ounces (4 quarts × 2 pints × 20 fluid ounces per pint = 160, since the UK pint itself is defined as 20 fluid ounces rather than 16). Doing the arithmetic: US fluid ounce = 3.78541 L ÷ 128 ≈ 29.5735 mL. UK fluid ounce = 4.54609 L ÷ 160 ≈ 28.4131 mL. Even though the UK&apos;s starting gallon is about 20% bigger, splitting it into 25% more pieces (160 vs. 128) pushes the per-piece size below the US fluid ounce. This is a clean illustration of a general rule: comparing a fraction of two different wholes tells you nothing on its own about which fraction is bigger — you have to know both the whole and how many pieces it&apos;s split into.</div>}
      />
      <FootnoteAside>A US fluid ounce of water weighs almost exactly 1 avoirdupois ounce by design (about 1.043 oz, close enough that &quot;a pint&apos;s a pound the world around&quot; became a popular mnemonic for water) — the UK fluid ounce doesn&apos;t align with weight nearly as cleanly, since the UK system split its gallon differently.</FootnoteAside>

      <p>
      The practical risk shows up whenever a US-labeled beverage or recipe amount (in fl oz) gets read by someone assuming the UK definition, or vice versa — a small per-unit gap that compounds across a larger total.
      </p>

      <QuickCheck
      question="Given that the UK gallon (4.54609 L) is larger than the US gallon (3.78541 L), why is the UK fluid ounce smaller than the US fluid ounce?"
      options={[
      { text: "It's an error in one of the two systems — they should match since both come from a 'gallon'", correct: false, explanation: "Both are correct, real, legally defined units — there's no error. The mismatch is expected once you account for how many pieces each gallon is divided into." },
      { text: "Because the UK divides its larger gallon into more fluid ounces (160) than the US divides its smaller gallon into (128), so the individual UK piece ends up smaller despite the whole being bigger", correct: true, explanation: "Correct. 4.54609 L ÷ 160 ≈ 28.41 mL versus 3.78541 L ÷ 128 ≈ 29.57 mL — dividing a bigger whole into proportionally even more pieces can produce a smaller individual piece." },
      { text: "Because 'ounce' always refers to weight, not volume, so this comparison doesn't actually apply to fluid ounces", correct: false, explanation: "Fluid ounces are a genuine volume unit distinct from the weight ounce, despite sharing a name — this comparison is specifically about the volume unit." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting a US 12 fl oz soda can to milliliters (baseline case)</h3>
      <div className="prose-p">
      A standard US soda can is labeled 12 fl oz. Converting: 12 × 29.5735 ≈ 354.88 mL — matching the commonly seen &quot;355 mL&quot; figure printed on US cans as the metric equivalent.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Comparing a US 16 fl oz bottle to a UK 16 fl oz (pint) bottle (edge case / variation)</h3>
      <div className="prose-p">
      A US 16 fl oz bottle holds 16 × 29.5735 ≈ 473.18 mL. A UK product also labeled &quot;16 fl oz&quot; (a UK imperial pint) holds 16 × 28.4131 ≈ 454.61 mL — about 18.6 mL less, roughly a 4% shortfall, despite the identical &quot;16 fl oz&quot; label. This is the exact trap: the number on the label matches, but the unit it&apos;s counting is different.
      </div>

      <QuickCheck
      question="A US product and a UK product are both labeled '8 fl oz.' Which one contains more liquid?"
      options={[
      { text: "The UK product, since the UK gallon is the larger of the two gallons", correct: false, explanation: "Gallon size isn't the relevant comparison here — the fluid ounce itself is smaller in the UK system, which is what actually determines the answer for an '8 fl oz' label." },
      { text: "The US product — 8 US fl oz ≈ 236.59 mL, versus 8 UK fl oz ≈ 227.30 mL, since the US fluid ounce is the larger of the two", correct: true, explanation: "Correct. Even though the UK gallon is bigger overall, the UK fluid ounce itself is about 4.1% smaller than the US fluid ounce, so the US product actually holds slightly more." },
      { text: "They're equal, since 'fl oz' is an internationally standardized unit", correct: false, explanation: "Fluid ounces are not internationally standardized — the US and UK versions differ by about 4.1%, similar to how the US and UK gallon differ." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A bartender following a US cocktail recipe with UK-labeled jiggers (real-world / applied case)</h3>
      <div className="prose-p">
      A US cocktail recipe calls for 2 fl oz of spirit. A UK-sold jigger (measuring cup) marked &quot;2 fl oz&quot; using the UK definition pours 2 × 28.4131 ≈ 56.83 mL, versus the US-intended 2 × 29.5735 ≈ 59.15 mL — a shortfall of about 2.3 mL per pour. Across a full bottle of cocktails made this way, that consistent ~4% under-pour adds up to a noticeably weaker batch than the recipe intended, purely from an unlabeled unit mismatch rather than any error in technique.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="US fluid ounce vs UK fluid ounce, side by side"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-fluid-ounces-us-vs-uk-differences-comparison.svg"
      altText="Two beaker shapes compared: a US fluid ounce beaker filled to 29.5735 milliliters and a UK imperial fluid ounce beaker filled to a slightly lower line of 28.4131 milliliters, with a callout noting the US fluid ounce is about 4.1 percent larger than the UK fluid ounce, which is the reverse of the gallon relationship where the UK unit is larger."
      />
      <p>
      Unlike the gallon comparison, where the UK bar was visibly taller, here the US beaker is the fuller one — a useful visual reminder that the direction of the size difference flips depending on which unit in the chain you&apos;re comparing.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming that because the UK gallon is bigger, every UK volume unit derived from it is also bigger.", fix: "Check each unit individually — the UK fluid ounce is actually smaller than the US fluid ounce, even though the UK gallon is larger." },
      { mistake: "Treating a '16 fl oz' or '2 fl oz' label as unambiguous without checking the country of origin.", fix: "Look for context clues (brand origin, other metric labeling) to determine whether a fl oz figure is US or UK, especially for recipes or bartending measures." },
      { mistake: "Confusing the fluid ounce (a volume unit) with the ordinary ounce (a weight unit).", fix: "Remember 'fluid ounce' measures volume; a plain 'ounce' on a food label measures weight — they're related by design for water but not interchangeable in general." },
      ]}
      />
      <MisconceptionCallout
      myth="Since the UK gallon is bigger than the US gallon, every UK unit built from the gallon must also be bigger than its US counterpart."
      reality={<p>Whether a UK derived unit ends up bigger or smaller than its US counterpart depends on how many pieces each country splits its own gallon into, not just which gallon is bigger. The UK gallon is split into more fluid ounces (160) than the US gallon (128), which is enough to flip the comparison — the US fluid ounce (29.5735 mL) ends up larger than the UK fluid ounce (28.4131 mL), even though the US gallon itself is smaller.</p>}
      />

      <QuickCheck
      question="Why can't you assume a UK-derived unit is always bigger than its US equivalent just because the UK gallon is bigger than the US gallon?"
      options={[
      { text: "You actually can always assume that — it's a reliable rule", correct: false, explanation: "The fluid ounce is a direct counterexample: the UK gallon is bigger, but the UK fluid ounce is smaller than the US fluid ounce." },
      { text: "Because each unit's size depends on both which gallon it comes from AND how many equal pieces that gallon is divided into — and the US and UK divide their gallons into different numbers of fluid ounces (128 vs. 160)", correct: true, explanation: "Correct. A bigger whole divided into proportionally even more pieces can still produce a smaller individual piece than a smaller whole divided into fewer pieces." },
      { text: "Because the US and UK use entirely unrelated definitions with no mathematical relationship to their respective gallons", correct: false, explanation: "Both fluid ounces are directly defined as a fixed fraction of their own country's gallon — they are mathematically related to their gallon, just by different fractions (1/128 vs. 1/160)." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert fluid ounces to milliliters"
      fields={[
      { key: "value", label: "Fluid ounces to convert", defaultValue: 12 },
      { key: "conversionFactor", label: "Conversion factor (29.5735 for US fl oz, 28.4131 for UK fl oz)", defaultValue: 29.5735, step: 0.0001 },
      ]}
      resultLabel="Converted value (mL)"
      formula="unitConversionByFactor"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Memorize both anchor figures: US fl oz = 29.5735 mL, UK fl oz = 28.4131 mL.",
      "Don't assume a UK-derived unit is bigger just because the UK gallon is bigger — check each unit's actual figure.",
      "When following a recipe or cocktail spec with 'fl oz,' confirm the country of origin before measuring.",
      "Use the calculator above with the correct fl oz factor rather than treating '29.5' as a universal rounding.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How many mL is a fluid ounce?", answer: "A US fluid ounce is 29.5735 mL. A UK (imperial) fluid ounce is 28.4131 mL — about 4.1% smaller." },
      { question: "Is a US fluid ounce the same as a UK fluid ounce?", answer: "No. They differ by about 4.1%, with the US fluid ounce being the larger of the two — the reverse of the gallon, where the UK unit is bigger." },
      { question: "Why is the US fluid ounce bigger if the US gallon is smaller than the UK gallon?", answer: "Because the US divides its gallon into fewer fluid ounces (128) than the UK divides its larger gallon into (160) — dividing a smaller whole into fewer pieces can still yield a bigger individual piece." },
      { question: "How many fluid ounces are in a US pint?", answer: "16 US fluid ounces make 1 US pint. A UK imperial pint, by contrast, is defined as 20 UK fluid ounces." },
      { question: "Is fluid ounce the same thing as a regular ounce?", answer: "No. A fluid ounce measures volume; a regular (avoirdupois) ounce measures weight. They're related for water by design in the US system, but they measure fundamentally different properties." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
