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
  title: "Kilograms, Pounds & Ounces Conversion",
  category: "units-measurement-conversions",
  order: 10,
  subtopic: "weight-and-mass",
  tags: ["kilograms", "pounds", "ounces", "unit conversion", "avoirdupois"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "One kilogram equals about 2.20462 pounds, and one pound splits into 16 ounces — two separate, fixed conversion factors that most mix-ups come from applying in the wrong order.",
  summary: "Converting between kilograms, pounds, and ounces uses two distinct fixed factors chained together: kilograms to pounds (× 2.20462, a metric-to-customary conversion) and pounds to ounces (× 16, entirely within the customary system).",
  sources: [
    { label: "NIST Handbook 44 — Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices", url: "https://www.nist.gov/pml/owm/publications/nist-handbook-44" },
    { label: "NIST — International System of Units (SI), the kilogram", url: "https://www.nist.gov/pml/owm/metric-si/si-units-mass" },
    { label: "Encyclopaedia Britannica — Avoirdupois weight", url: "https://www.britannica.com/science/avoirdupois-weight" },
  ],
  seeAlso: [
    "units-measurement-conversions/mass-vs-weight-whats-actually-different",
    "units-measurement-conversions/grams-vs-ounces-in-cooking",
    "math-numbers/unit-conversions-length-weight-volume",
  ],
  glossary: [
    { term: "Avoirdupois pound", definition: "The everyday pound used for body weight and general goods in the US and UK, equal to exactly 453.59237 grams and split into 16 ounces — distinct from the troy pound used for precious metals." },
    { term: "Ounce (avoirdupois)", definition: "One-sixteenth of an avoirdupois pound, equal to about 28.3495 grams — the standard 'ounce' used on food labels and kitchen scales." },
    { term: "Kilogram", definition: "The SI base unit of mass, defined since 2019 in terms of the Planck constant rather than a physical prototype object." },
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
      "One kilogram equals exactly 2.20462262... pounds — a metric-to-customary factor fixed by international agreement since 1959, not a rounded approximation.",
      "One avoirdupois pound splits into exactly 16 ounces — a conversion entirely inside the US/UK customary system, with no metric step involved.",
      "Converting kilograms to ounces (or vice versa) means chaining both factors together — kilograms to pounds, then pounds to ounces — not applying a single shortcut factor.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">To convert kilograms to pounds, multiply by 2.20462. To convert pounds to ounces, multiply by 16. To go straight from kilograms to ounces, do both steps: multiply by 2.20462, then multiply that result by 16 (or just multiply by 35.274 directly, since 2.20462 × 16 ≈ 35.274).</div>}
      detailed={<div className="prose-p">The <TermLink href="/units-measurement-conversions/kilograms-pounds-and-ounces-conversion">avoirdupois pound</TermLink> — the pound used for body weight and everyday goods in the US and UK — was defined by international agreement in 1959 as exactly 0.45359237 kilograms, which is where the 2.20462 figure (its reciprocal) comes from. That pound then splits into 16 <TermLink href="/units-measurement-conversions/kilograms-pounds-and-ounces-conversion">ounces</TermLink> by an older, separate customary convention with no connection to the metric system at all. This two-layer structure — one internationally fixed metric-to-customary bridge, plus one purely-customary internal split — is exactly why kilograms-to-ounces conversions feel like they need an oddly specific number (35.274): that number is really two conversions multiplied together, not one native unit relationship.</div>}
      />
      <FootnoteAside>The avoirdupois pound isn&apos;t the only historical &quot;pound&quot; — the troy pound (used for precious metals, 12 troy ounces to a troy pound) and the older tower pound are different units entirely, with different gram equivalents. When a source just says &quot;pound&quot; without qualification, it almost always means avoirdupois.</FootnoteAside>

      <QuickCheck
      question="Why does converting kilograms directly to ounces require a factor like 35.274 rather than a clean round number?"
      options={[
      { text: "Because ounces are defined directly against the kilogram by an international standard", correct: false, explanation: "Ounces aren't defined directly against the kilogram at all — they're defined as 1/16 of an avoirdupois pound, which is itself defined against the kilogram. The kilogram-to-ounce number is a byproduct of two separate definitions, not one." },
      { text: "Because 35.274 is really two chained conversions (kilograms to pounds, then pounds to ounces) multiplied together, and neither individual step is a round number relative to the other system", correct: true, explanation: "Correct. 2.20462 (kg to lb) × 16 (lb to oz) ≈ 35.274. It looks like an odd number because it's the product of an internationally fixed metric bridge and an unrelated customary subdivision." },
      { text: "It's simply a historical rounding error that was never corrected", correct: false, explanation: "The figure isn't a rounding error — it follows directly and precisely from the internationally defined avoirdupois pound (453.59237 g exactly) and the fixed 16-ounces-per-pound convention." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting body weight from kilograms to pounds (baseline case)</h3>
      <div className="prose-p">
      A medical chart lists a patient&apos;s weight as 68 kg. Converting: 68 × 2.20462 ≈ 149.91 pounds, commonly rounded to 150 lb. This single-step multiplication is the conversion used on virtually every kilogram-to-pound body-weight comparison.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Converting a small kitchen quantity straight to ounces (edge case / variation)</h3>
      <div className="prose-p">
      A European recipe lists 0.25 kg of butter. Converting directly to ounces: 0.25 × 35.274 ≈ 8.82 ounces — close to the familiar &quot;two US sticks of butter&quot; figure (each standard US stick is 4 oz). Note this skipped the intermediate pounds step entirely by using the combined factor, which is fine for a single conversion but easy to get backward if you&apos;re deriving 35.274 from memory rather than looking it up.
      </div>

      <QuickCheck
      question="A recipe gives 0.25 kg of butter and you want the answer in ounces. Which approach is mathematically valid?"
      options={[
      { text: "Only multiplying by 2.20462 and calling that the answer in ounces", correct: false, explanation: "2.20462 converts kilograms to pounds, not ounces. Stopping there and labeling the result 'ounces' would be off by a factor of 16." },
      { text: "Either multiplying by the combined factor 35.274 directly, or multiplying by 2.20462 to get pounds and then by 16 to get ounces — both give the same correct answer", correct: true, explanation: "Correct. 35.274 is simply 2.20462 × 16 computed in advance. Doing the two-step chain or using the pre-multiplied combined factor produces an identical result, about 8.82 ounces." },
      { text: "Multiplying by 16 first, then by 2.20462", correct: false, explanation: "This produces the same final number by coincidence of multiplication being commutative, but it doesn't correspond to a meaningful intermediate step — multiplying kilograms by 16 first doesn't represent any real unit." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A shipping label rounding error compounding at scale (real-world / applied case)</h3>
      <div className="prose-p">
      A distributor ships 500 boxes, each listed at 4.5 kg, and rounds the pound conversion to a quick &quot;2.2×&quot; instead of the precise 2.20462. Rounded: 4.5 × 2.2 = 9.9 lb per box × 500 = 4,950 lb total. Precise: 4.5 × 2.20462 ≈ 9.9208 lb per box × 500 ≈ 4,960.4 lb total. The gap is about 10.4 pounds across the shipment — small per box, but exactly the kind of discrepancy that shows up as a mismatch against a carrier&apos;s own precise-conversion invoice at freight scale.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Kilogram to pound to ounce: two chained conversion factors"
      type="flow"
      svgSrc="/diagrams/units-measurement-conversions-kilograms-pounds-and-ounces-conversion-scale-comparison.svg"
      altText="A horizontal ladder showing 1 kilogram equals 2.20462 pounds equals 35.274 ounces, with arrows showing the multiplication factors linking each unit to the next."
      />
      <p>
      The first arrow (× 2.20462) is the only step that crosses between the metric and customary systems. The second arrow (× 16) never touches the metric system at all — it&apos;s a purely internal customary subdivision, which is why pounds-to-ounces is always a clean whole-number multiplication while kilograms-to-pounds never is.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Using an overly rounded factor like '2.2' for high-stakes or large-scale conversions.", fix: "Use the full-precision factor (2.20462, or more decimal places) whenever precision matters — the rounding error scales with the size of the number being converted." },
      { mistake: "Confusing a fluid ounce (a volume unit) with a weight ounce (1/16 of a pound) — they are not interchangeable even for water, and definitely not for other substances.", fix: "Check whether a recipe or label means a weight ounce (mass) or a fluid ounce (volume) — for water they're approximately equal, but for anything else (flour, oil, syrup) they diverge significantly." },
      { mistake: "Assuming the troy ounce (used for gold and silver) is the same size as the everyday avoirdupois ounce.", fix: "A troy ounce (≈31.1 g) is heavier than an avoirdupois ounce (≈28.35 g) — never assume they're interchangeable when precious metals are involved." },
      ]}
      />
      <MisconceptionCallout
      myth="An 'ounce' always means the same thing, whether you're weighing gold, measuring flour, or pouring milk."
      reality={<p>There are at least three different things commonly called an &quot;ounce&quot;: the avoirdupois ounce (1/16 pound, ≈28.35 g, used for food and everyday goods), the troy ounce (used for precious metals, ≈31.1 g), and the fluid ounce (a volume measurement, not a weight at all). Reading &quot;ounce&quot; without checking which one is meant is a genuine source of real-world measurement error, particularly in cooking and precious-metal trading.</p>}
      />

      <QuickCheck
      question="Why can't a fluid ounce and a weight ounce simply be treated as the same unit?"
      options={[
      { text: "They can, since both are called 'ounce'", correct: false, explanation: "Sharing a name doesn't mean sharing a physical dimension — a fluid ounce measures volume (space occupied), while a weight ounce measures mass. They only happen to roughly coincide for water, and even then not exactly." },
      { text: "A fluid ounce measures volume while a weight (avoirdupois) ounce measures mass — they're different physical quantities that only align approximately for substances with a density close to water's", correct: true, explanation: "Correct. For denser substances like honey or syrup, a fluid ounce weighs noticeably more than a weight ounce; for lighter substances like flour, it weighs less." },
      { text: "The fluid ounce is simply a British spelling variant of the weight ounce", correct: false, explanation: "This isn't a spelling difference — fluid ounces and weight ounces measure fundamentally different physical properties (volume vs. mass), and both terms are used identically in American and British English." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert a weight using a fixed conversion factor"
      fields={[
      { key: "value", label: "Value to convert", defaultValue: 4.5 },
      { key: "conversionFactor", label: "Conversion factor (2.20462 kg→lb, 35.274 kg→oz, 16 lb→oz)", defaultValue: 2.20462, step: 0.00001 },
      ]}
      resultLabel="Converted value"
      formula="unitConversionByFactor"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Memorize the two core factors: 1 kg ≈ 2.20462 lb, and 1 lb = 16 oz exactly.",
      "For any large or high-stakes conversion (shipping, medical, engineering), use the full-precision 2.20462 rather than a rounded 2.2.",
      "Before using an 'ounce' figure, confirm whether it's a weight ounce, a troy ounce, or a fluid ounce — they are not interchangeable.",
      "Use the calculator above with either the direct kg-to-oz factor (35.274) or the two-step chain, whichever matches how your source data is structured.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How many pounds is a kilogram?", answer: "1 kilogram equals approximately 2.20462 pounds. This factor comes from the internationally defined pound (exactly 0.45359237 kg), which is its reciprocal." },
      { question: "How many ounces are in a pound?", answer: "16 ounces make one avoirdupois pound — a fixed, purely customary-system relationship with no connection to the metric system." },
      { question: "How do I convert kilograms directly to ounces?", answer: "Multiply the number of kilograms by about 35.274 (which is 2.20462 × 16). For example, 0.25 kg × 35.274 ≈ 8.82 ounces." },
      { question: "Is a troy ounce the same as a regular ounce?", answer: "No. A troy ounce (used for gold, silver, and other precious metals) is about 31.1 grams, while the everyday avoirdupois ounce (used for food and general goods) is about 28.35 grams — a troy ounce is roughly 10% heavier." },
      { question: "Why isn't the kilogram-to-pound conversion a round number?", answer: "Because the pound and the kilogram were standardized independently by different historical measurement traditions before being linked by a single internationally agreed conversion factor in 1959 — there was never a design goal for the two systems to relate by a clean number." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
