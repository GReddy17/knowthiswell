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
  title: "Metric Tonnes vs US/UK Tons",
  category: "units-measurement-conversions",
  order: 16,
  subtopic: "weight-and-mass",
  tags: ["metric tonne", "short ton", "long ton", "freight", "unit conversion"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "There are three different units all called 'a ton' — the metric tonne (1,000 kg), the US short ton (2,000 lb), and the UK long ton (2,240 lb) — and they are not the same weight.",
  summary: "The metric tonne equals 1,000 kilograms (about 2,204.62 lb), the US short ton equals 2,000 pounds (about 907.18 kg), and the UK long ton equals 2,240 pounds (about 1,016.05 kg) — three distinct units sharing the same common name, differing from each other by up to about 10%.",
  sources: [
    { label: "NIST — International System of Units (SI), the tonne (metric ton)", url: "https://www.nist.gov/pml/owm/metric-si" },
    { label: "NIST Handbook 44 — Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices", url: "https://www.nist.gov/pml/owm/publications/nist-handbook-44" },
    { label: "Encyclopaedia Britannica — Ton (unit of measurement)", url: "https://www.britannica.com/science/ton-unit-of-measurement" },
  ],
  seeAlso: [
    "units-measurement-conversions/kilograms-pounds-and-ounces-conversion",
    "units-measurement-conversions/shipping-weight-rules-and-dimensional-weight",
  ],
  glossary: [
    { term: "Metric tonne (t)", definition: "A unit of mass equal to exactly 1,000 kilograms, about 2,204.62 pounds — used throughout most of the world outside the US." },
    { term: "US short ton", definition: "A unit of weight equal to exactly 2,000 pounds, about 907.18 kilograms — the standard 'ton' used in everyday US measurement." },
    { term: "UK long ton (imperial ton)", definition: "A unit of weight equal to exactly 2,240 pounds, about 1,016.05 kilograms — historically used in the UK, now largely superseded by the metric tonne there but still referenced in some shipping and commodity contexts." },
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
      "The metric tonne (1,000 kg, ≈2,204.62 lb), the US short ton (2,000 lb, ≈907.18 kg), and the UK long ton (2,240 lb, ≈1,016.05 kg) are three genuinely different units, all commonly just called 'a ton.'",
      "The metric tonne is the heaviest-sounding name but sits in the middle by actual weight — the UK long ton is the heaviest of the three, and the US short ton is the lightest.",
      "The gap between the lightest (short ton) and heaviest (long ton) is about 12%, large enough to matter significantly in bulk freight, commodities, and industrial contexts.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">&quot;A ton&quot; doesn&apos;t mean one fixed weight worldwide. The <TermLink href="/units-measurement-conversions/metric-tonnes-vs-us-uk-tons">metric tonne</TermLink> is 1,000 kilograms. The <TermLink href="/units-measurement-conversions/metric-tonnes-vs-us-uk-tons">US short ton</TermLink> is 2,000 pounds. The <TermLink href="/units-measurement-conversions/metric-tonnes-vs-us-uk-tons">UK long ton</TermLink> is 2,240 pounds. All three get called &quot;a ton&quot; in casual speech, but they&apos;re meaningfully different weights.</div>}
      detailed={<div className="prose-p">The short ton (2,000 lb) and long ton (2,240 lb) both descend from the same historical British customary hundredweight system, just with different regional rounding conventions — the US settled on a round 20 hundredweight of 100 lb each (2,000 lb total), while the UK kept the older 20 hundredweight of 112 lb each (2,240 lb total). The metric tonne is unrelated to either lineage — it&apos;s simply 1,000 kilograms, a clean decimal multiple of the SI base unit, adopted by most of the world including, eventually, the UK itself for most modern commercial and scientific use. The UK long ton survives today mostly in specific legacy contexts (some shipping, some historical commodity references) rather than in everyday British measurement, which now defaults to the metric tonne like most of the rest of the world.</div>}
      />
      <FootnoteAside>To keep the three tons distinct in writing, style guides commonly spell the metric unit &quot;tonne&quot; (with an -ne) and reserve &quot;ton&quot; (no -ne) for the US short ton or UK long ton — though this convention isn&apos;t universally followed, which is itself part of why confusion persists.</FootnoteAside>

      <QuickCheck
      question="Which of the three 'ton' units is the heaviest, and which is the lightest?"
      options={[
      { text: "The metric tonne is heaviest and the US short ton is lightest", correct: false, explanation: "The metric tonne (≈2,204.62 lb) actually falls between the other two — it's heavier than the short ton but lighter than the long ton, not the heaviest of the three." },
      { text: "The UK long ton (2,240 lb) is heaviest, the US short ton (2,000 lb) is lightest, and the metric tonne (≈2,204.62 lb) sits in between", correct: true, explanation: "Correct. Despite the name similarity, the three units rank: long ton > metric tonne > short ton, from heaviest to lightest." },
      { text: "All three are actually the same weight, just expressed with different unit names", correct: false, explanation: "They differ by real, meaningful amounts — the gap between the lightest (short ton) and heaviest (long ton) is about 12%, far too large to treat as interchangeable." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting a metric tonne to kilograms and pounds (baseline case)</h3>
      <div className="prose-p">
      A shipment is listed at 5 metric tonnes. In kilograms: 5 × 1,000 = 5,000 kg. In pounds: 5,000 × 2.20462 ≈ 11,023.1 lb. This is a straightforward single-factor conversion, since the metric tonne relates to the kilogram by a clean power of ten.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same nominal &apos;10 tons&apos; meaning two different weights (edge case / variation)</h3>
      <div className="prose-p">
      A US freight manifest lists &quot;10 tons&quot; (short tons): 10 × 2,000 = 20,000 lb ≈ 9,071.8 kg. A UK historical shipping record lists &quot;10 tons&quot; (long tons): 10 × 2,240 = 22,400 lb ≈ 10,160.5 kg. Both documents say &quot;10 tons,&quot; but the UK figure represents about 1,089 kg more cargo than the US figure — a 12% gap that would matter enormously if the two figures were mistakenly treated as equivalent in a single calculation.
      </div>

      <QuickCheck
      question="A US shipment and a UK historical record both list '10 tons.' Why might these represent different actual weights?"
      options={[
      { text: "They wouldn't — 'tons' means the same fixed weight everywhere in the English-speaking world", correct: false, explanation: "The US short ton (2,000 lb) and the UK long ton (2,240 lb) are genuinely different, standardized units — the word 'ton' alone doesn't disambiguate which one is meant." },
      { text: "The US commonly uses the short ton (2,000 lb) while UK historical sources often used the long ton (2,240 lb) — the same word 'ton' refers to two different fixed weights depending on the source's regional convention", correct: true, explanation: "Correct. Without specifying which ton is meant, a bare '10 tons' figure is genuinely ambiguous between two different real-world weights, differing by about 12%." },
      { text: "Because ton figures always need to be adjusted for inflation over time", correct: false, explanation: "This is a units question, not an economic one — the discrepancy comes from different fixed-weight definitions of 'ton,' unrelated to inflation or the passage of time." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why bulk commodity contracts specify the ton type explicitly (real-world / applied case)</h3>
      <div className="prose-p">
      An international grain trading contract for 50,000 tons of wheat fails to specify which ton is meant. If interpreted as short tons: 50,000 × 907.18 = 45,359,000 kg. If interpreted as metric tonnes: 50,000 × 1,000 = 50,000,000 kg — a difference of over 4.6 million kilograms, worth a substantial sum of money at typical wheat prices. This exact kind of ambiguity is why serious international commodity and freight contracts always specify &quot;metric tonnes,&quot; &quot;short tons,&quot; or &quot;long tons&quot; explicitly rather than the bare, ambiguous word &quot;tons.&quot;
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Three different 'tons,' compared side by side"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-metric-tonnes-vs-us-uk-tons-three-tons-compared.svg"
      altText="Three boxes comparing ton definitions: the metric tonne equals 1000 kilograms or about 2204.6 pounds, the US short ton equals 2000 pounds or about 907.2 kilograms, and the UK long ton equals 2240 pounds or about 1016 kilograms — the long ton is the heaviest and the short ton is the lightest."
      />
      <p>
      None of the three boxes are the same size, despite all three being commonly called &quot;a ton&quot; in casual speech — which is exactly why serious commercial and scientific writing specifies which one is meant.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating a bare 'ton' figure from an unspecified source as automatically meaning the metric tonne (or automatically meaning the US short ton).", fix: "Check the source's country of origin and industry convention — US sources typically default to the short ton, while most of the rest of the world defaults to the metric tonne." },
      { mistake: "Assuming 'ton' and 'tonne' are just alternate spellings of the identical unit.", fix: "Treat the -ne spelling ('tonne') as a signal for the metric tonne specifically, and 'ton' (no -ne) as likely referring to a short or long ton — though always verify rather than assuming from spelling alone." },
      { mistake: "Averaging or blending figures from sources using different ton definitions without converting them to a common unit first.", fix: "Convert every figure to a single common unit (kilograms is usually safest) before combining, comparing, or totaling ton-denominated figures from multiple sources." },
      ]}
      />
      <MisconceptionCallout
      myth="Since a 'ton' is roughly 2,000-2,200 pounds no matter which version you mean, the differences are too small to matter in practice."
      reality={<p>A roughly 12% gap between the lightest (US short ton, 2,000 lb) and heaviest (UK long ton, 2,240 lb) definitions is large at commercial and industrial scale — on a single 50,000-ton bulk shipment, that gap represents millions of kilograms of discrepancy. The differences are small only in the sense that the three units sound similar; the actual weight gap is entirely large enough to cause real financial and logistical errors if left unspecified.</p>}
      />

      <QuickCheck
      question="Why do serious international shipping and commodity contracts specify 'metric tonnes' or 'short tons' explicitly rather than just writing 'tons'?"
      options={[
      { text: "Because it's a formal writing convention with no real practical consequence either way", correct: false, explanation: "It has direct financial and logistical consequences — the different ton definitions differ by up to about 12%, which is a meaningful amount of cargo or money at commercial scale." },
      { text: "Because a bare 'tons' figure is genuinely ambiguous between at least three different fixed weights, and specifying exactly which one is meant avoids a costly misinterpretation", correct: true, explanation: "Correct. This is precision language doing real work — removing ambiguity that could otherwise cost either party in a contract a meaningful amount of value." },
      { text: "Because 'tons' is considered an outdated or informal word in professional shipping documents", correct: false, explanation: "The word 'ton' or 'tonne' itself is used constantly in professional shipping — the issue is specifying which definition applies, not avoiding the word altogether." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert a ton figure using a fixed conversion factor"
      fields={[
      { key: "value", label: "Value to convert (tons/tonnes)", defaultValue: 10 },
      { key: "conversionFactor", label: "Conversion factor (1000 tonne→kg, 2000 short ton→lb, 2240 long ton→lb)", defaultValue: 1000 },
      ]}
      resultLabel="Converted value"
      formula="unitConversionByFactor"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Never treat a bare 'ton' figure as unambiguous — check whether it's a metric tonne, US short ton, or UK long ton before using it in a calculation.",
      "When writing or reading contracts involving bulk weight, use (or look for) explicit unit names: 'metric tonnes,' 'short tons,' or 'long tons.'",
      "Convert every ton figure to a common base unit (kilograms is usually safest) before combining or comparing values from different sources.",
      "Remember the ranking: UK long ton (2,240 lb) > metric tonne (≈2,204.62 lb) > US short ton (2,000 lb).",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Is a metric tonne the same as a US ton?", answer: "No. A metric tonne is 1,000 kg (≈2,204.62 lb), while a US short ton is 2,000 lb (≈907.18 kg) — the metric tonne is about 10% heavier than the US short ton." },
      { question: "What is the difference between a long ton and a short ton?", answer: "A UK long ton is 2,240 lb (≈1,016.05 kg), while a US short ton is 2,000 lb (≈907.18 kg) — the long ton is about 12% heavier than the short ton." },
      { question: "Which ton does the UK use today?", answer: "Modern UK commercial and scientific use has largely shifted to the metric tonne, like most of the rest of the world — the historical long ton survives mainly in some legacy shipping and commodity references." },
      { question: "How many kilograms are in a ton?", answer: "It depends which ton: a metric tonne is exactly 1,000 kg; a US short ton is about 907.18 kg; a UK long ton is about 1,016.05 kg." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
