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
  title: "Understanding Stone as a Weight Unit",
  category: "units-measurement-conversions",
  order: 11,
  subtopic: "weight-and-mass",
  tags: ["stone", "pounds", "kilograms", "body weight", "UK measurement"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A stone is a fixed 14 pounds (about 6.35 kg) — a UK and Irish body-weight unit that survived the country's broader metric switch because everyday conversation resisted it.",
  summary: "One stone equals exactly 14 pounds, or about 6.35 kilograms — a unit still used conversationally for body weight in the UK and Ireland even though both countries otherwise use the metric system for most measurements.",
  sources: [
    { label: "UK Government — Weights and Measures Act 1985 (units still lawful for use)", url: "https://www.legislation.gov.uk/ukpga/1985/72" },
    { label: "Encyclopaedia Britannica — Avoirdupois weight", url: "https://www.britannica.com/science/avoirdupois-weight" },
    { label: "NIST — International System of Units (SI), the kilogram", url: "https://www.nist.gov/pml/owm/metric-si/si-units-mass" },
  ],
  seeAlso: [
    "units-measurement-conversions/kilograms-pounds-and-ounces-conversion",
    "units-measurement-conversions/mass-vs-weight-whats-actually-different",
  ],
  glossary: [
    { term: "Stone", definition: "A unit of weight equal to exactly 14 avoirdupois pounds (about 6.35 kilograms), still used conversationally for body weight in the UK and Ireland." },
    { term: "Imperial system", definition: "The system of measurement units historically used across the British Empire, including stone, miles, and gallons — the UK has officially adopted metric for trade and science but retains several imperial units in everyday speech." },
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
      "A stone is a fixed, exact unit: 1 stone = 14 pounds, no rounding involved.",
      "In metric terms, 1 stone ≈ 6.35029 kilograms — an irregular figure because the stone was never designed with the metric system in mind.",
      "The UK legally adopted the metric system for trade decades ago, but stone survives specifically in the narrow, conversational context of describing a person's body weight.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A stone is a weight unit equal to 14 pounds. Someone who says they weigh &quot;11 stone&quot; weighs 11 × 14 = 154 pounds, or about 69.85 kilograms. It&apos;s used almost exclusively in the UK and Ireland, and almost exclusively for describing how much a person weighs.</div>}
      detailed={<div className="prose-p">The <TermLink href="/units-measurement-conversions/understanding-stone-as-a-weight-unit">stone</TermLink> is one of several historical <TermLink href="/units-measurement-conversions/understanding-stone-as-a-weight-unit">imperial</TermLink> weight units that survived the UK&apos;s broader shift to metric measurement, which became the legal standard for trade under the Weights and Measures Act framework from the 1980s onward. Road signs, most packaged goods, and scientific work in the UK now use metric units, but body weight is the one domain where stone held on in everyday speech — British medical practice and public health messaging now typically present weight in kilograms, but ordinary conversation (&apos;I&apos;ve lost half a stone&apos;) still defaults to stone in a way that doesn&apos;t happen with, say, distance or volume.</div>}
      />
      <FootnoteAside>The stone&apos;s oddly specific 14-pound definition traces back to medieval English wool-trading weights, where a &quot;stone&quot; of wool was a standardized quantity for trade — the exact pound count varied by commodity and region for centuries before settling on 14 pounds as the standard avoirdupois stone.</FootnoteAside>

      <QuickCheck
      question="Why does the UK still use 'stone' for body weight but not for most other everyday measurements?"
      options={[
      { text: "Stone was never included in any UK metrication legislation, so it remained the only legal option for weight", correct: false, explanation: "The metric system has been the legal standard for UK trade for decades; stone is not required by law for anything — it persists purely as a matter of conversational habit around body weight specifically." },
      { text: "Body weight in conversational UK English kept using stone out of habit even as most other everyday measurements (distance, packaged goods, fuel) shifted to metric units over time", correct: true, explanation: "Correct. This is a case of uneven metrication — a single narrow domain of everyday speech resisting a broader systemic shift that otherwise mostly succeeded." },
      { text: "Kilograms cannot accurately represent human body weight", correct: false, explanation: "Kilograms represent body weight (technically mass) just as precisely as any other mass unit — British medical charts and most of the rest of the world use kilograms for exactly this purpose without issue." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting a stated body weight to pounds and kilograms (baseline case)</h3>
      <div className="prose-p">
      Someone says they weigh 11 stone. In pounds: 11 × 14 = 154 lb. In kilograms: 154 × 0.453592 ≈ 69.85 kg (or directly, 11 × 6.35029 ≈ 69.85 kg). Both routes land on the same figure, since the stone-to-kilogram factor is itself just the stone-to-pound factor multiplied by the pound-to-kilogram factor.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Handling a &quot;stone and pounds&quot; compound figure (edge case / variation)</h3>
      <div className="prose-p">
      UK weight is often given as a compound figure like &quot;12 stone 4&quot; (meaning 12 stone plus 4 additional pounds) rather than a decimal stone value. Converting: 12 stone = 168 lb, plus 4 lb = 172 lb total, which converts to 172 × 0.453592 ≈ 78.02 kg. Treating &quot;12 stone 4&quot; as 12.4 stone (a common mistake) would be wrong — the &quot;4&quot; is 4 pounds, not four-tenths of a stone (which would be 5.6 lb), a small but real distinction that matters for accurate conversion.
      </div>

      <QuickCheck
      question="Someone's weight is listed as '9 stone 6'. What does the '6' represent?"
      options={[
      { text: "0.6 of a stone, so the total should be treated as 9.6 stone", correct: false, explanation: "This is the common misreading. 'Stone N' compound notation lists whole pounds after the stone count, not a decimal fraction of a stone." },
      { text: "6 additional pounds on top of 9 full stone, for a total of (9 × 14) + 6 = 132 pounds", correct: true, explanation: "Correct. UK compound weight notation is stone-plus-pounds, similar in spirit to how height is often given as feet-plus-inches rather than a decimal foot value." },
      { text: "6 additional stone, making the total 15 stone", correct: false, explanation: "The number after the stone count in this notation is always in pounds, a smaller unit nested inside the stone figure — not another stone count." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A UK-US medical record mismatch (real-world / applied case)</h3>
      <div className="prose-p">
      A patient relocating from the UK to a US clinic reports their weight as &quot;13 stone.&quot; The US clinic&apos;s intake system only accepts pounds. Converting: 13 × 14 = 182 lb. If the clinic instead misreads &quot;13 stone&quot; as &quot;13 pounds&quot; (a real risk when a form doesn&apos;t clearly label the unit), the recorded weight would be off by a factor of 14 — a dangerous error for anything involving weight-based medication dosing, which is exactly why standardized unit labeling matters more than it might seem in casual conversation.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Stone converts to a fixed number of pounds, and an irregular number of kilograms"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-understanding-stone-as-a-weight-unit-stone-to-pounds-kg.svg"
      altText="A box reading 1 stone equals 14 pounds, next to a box reading 1 stone equals about 6.35 kilograms, showing a person's weight of 11 stone converting to 154 pounds and about 69.85 kilograms."
      />
      <p>
      The stone-to-pound relationship (14) is a clean whole number because both units belong to the same historical customary system. The stone-to-kilogram relationship (6.35029) is irregular precisely because it crosses into the metric system, which the stone was never designed to relate to.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Reading a compound 'stone N' figure as a decimal (treating '12 stone 4' as 12.4 stone instead of 12 stone plus 4 pounds).", fix: "Convert the stone and the pounds separately: multiply the stone count by 14, then add the pounds figure directly — don't treat the second number as a decimal fraction." },
      { mistake: "Assuming stone is used for anything other than body weight in modern UK usage.", fix: "Outside of body weight, the UK almost universally uses either metric units or pounds directly for weight — stone doesn't typically appear on food packaging, shipping labels, or scientific measurements." },
      { mistake: "Confusing stone (a UK/Irish body-weight unit) with the informal US phrase 'stone weight,' which isn't a standard unit at all.", fix: "If a US source uses 'stone,' check context carefully — it may be a loose, non-standard reference rather than the exact 14-pound UK unit." },
      ]}
      />
      <MisconceptionCallout
      myth="Stone is an obsolete unit that nobody actually uses anymore, just a historical curiosity."
      reality={<p>Stone remains in active, everyday conversational use in the UK and Ireland specifically for body weight — it isn&apos;t a dead unit, just a narrowly scoped one. UK gyms, casual conversation, and even some UK media routinely report a person&apos;s weight in stone, even though the same country&apos;s road signs (miles aside), packaged food, and medical records mostly run on metric or pounds.</p>}
      />

      <QuickCheck
      question="A US-based reader sees a UK article stating someone weighs '15 stone.' What is the safest way to interpret this?"
      options={[
      { text: "Assume it's a typo for 15 pounds", correct: false, explanation: "Stone is a real, standard, legally recognized unit in the UK — it isn't a typo. Assuming it means pounds would produce a wildly inaccurate figure (an actual 15 stone is 210 lb, fourteen times larger)." },
      { text: "Multiply 15 by 14 to get 210 pounds, since 1 stone is defined as exactly 14 pounds", correct: true, explanation: "Correct. Once you recognize the unit, converting is a simple, fixed multiplication — no ambiguity or rounding involved." },
      { text: "Treat 'stone' as equivalent to 'kilogram' since both are used outside the US", correct: false, explanation: "Stone and kilogram are unrelated units with very different sizes — 1 stone (≈6.35 kg) is not remotely equivalent to 1 kilogram." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert stone to another weight unit using a fixed factor"
      fields={[
      { key: "value", label: "Value in stone", defaultValue: 11 },
      { key: "conversionFactor", label: "Conversion factor (14 for pounds, 6.35029 for kg)", defaultValue: 14, step: 0.00001 },
      ]}
      resultLabel="Converted value"
      formula="unitConversionByFactor"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Memorize the one figure that matters: 1 stone = 14 pounds, exactly.",
      "When you see a compound figure like '12 stone 4', treat the second number as whole pounds, not a decimal fraction of a stone.",
      "For kilogram conversions, either multiply stone by 6.35029 directly, or chain through pounds (stone × 14, then × 0.453592).",
      "In any medical or official context involving a UK weight figure, confirm the unit explicitly — 'stone' should never be silently assumed to mean 'pounds' or 'kilograms'.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How many pounds is a stone?", answer: "Exactly 14 pounds. This is a fixed definitional relationship, not an approximation." },
      { question: "How many kilograms is a stone?", answer: "About 6.35029 kilograms, derived from 14 pounds multiplied by the pound-to-kilogram factor (0.453592)." },
      { question: "Is stone still used in the UK today?", answer: "Yes, specifically and almost exclusively for describing a person's body weight in everyday conversation — most other UK measurements now use metric units." },
      { question: "What does '12 stone 4' mean?", answer: "12 full stone plus 4 additional pounds — a compound figure equal to (12 × 14) + 4 = 172 pounds, or about 78.02 kilograms." },
      { question: "Why is stone exactly 14 pounds and not a rounder number?", answer: "The 14-pound stone traces back to medieval English trade weights, standardized centuries before the metric system existed — it was never designed to relate cleanly to any other system, only to be internally consistent within its own." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
