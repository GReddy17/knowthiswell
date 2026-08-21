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
  title: "Tire Pressure Units: psi, Bar & kPa",
  category: "units-measurement-conversions",
  order: 46,
  subtopic: "data-numbers-and-everyday-conversions",
  tags: [
    "tire pressure",
    "psi",
    "bar",
    "kilopascals",
    "unit conversion",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A US tire sticker reads '32 psi'; a European one reads '2.2 bar' — same pressure, two regional unit conventions, and a fixed conversion factor between them.",
  summary: "Tire pressure is measured in psi (pounds per square inch) in the US and predominantly in bar or kilopascals (kPa) elsewhere, all measuring the identical physical quantity — force per unit area — related to each other by fixed conversion factors, exactly like any other unit pair in this topic.",
  sources: [
    { label: "NIST — Physical Measurement Laboratory", url: "https://www.nist.gov/pml" },
    { label: "NIST — Guide for the Use of the International System of Units (SP 811)", url: "https://www.nist.gov/pml/special-publication-811" },
  ],
  seeAlso: [
    "units-measurement-conversions/common-unit-conversion-mistakes-and-how-to-avoid-them",
    "math-numbers/unit-conversions-length-weight-volume",
  ],
  glossary: [
    {"term":"psi (pounds per square inch)","definition":"A US customary pressure unit measuring how many pounds of force are applied over one square inch of area — the standard tire pressure unit in the United States."},
    {"term":"Bar","definition":"A metric pressure unit roughly equal to atmospheric pressure at sea level, commonly used for tire pressure across Europe and much of the rest of the world."},
    {"term":"Kilopascal (kPa)","definition":"1,000 pascals, the SI-derived unit of pressure — used for tire pressure in some countries and standard in scientific and engineering contexts; 1 bar = 100 kPa exactly."},
    {"term":"Pressure","definition":"Force applied per unit of area — the physical quantity psi, bar, and kPa all measure, just scaled by different reference units."},
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
      "Tire pressure is the same physical quantity — force per unit area — regardless of which unit labels it: psi in the US, bar or kPa in most of the rest of the world.",
      "The fixed conversion factors are 1 psi ≈ 0.0689 bar and 1 psi ≈ 6.895 kPa, so a US car's typical '32 psi' recommendation converts to about 2.21 bar or 220.6 kPa.",
      "Bar and kPa are directly related by a clean factor of 100 (1 bar = 100 kPa exactly) because both are metric, while psi's relationship to either requires an externally defined conversion factor, the same pattern seen throughout this topic whenever a US customary unit meets a metric one.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Multiply psi by 0.0689 to get bar, or by 6.895 to get kPa. A tire recommended at 32 <TermLink href="/units-measurement-conversions/tire-pressure-units-psi-bar-and-kpa">psi</TermLink> needs about 2.21 <TermLink href="/units-measurement-conversions/tire-pressure-units-psi-bar-and-kpa">bar</TermLink>, or about 220.6 <TermLink href="/units-measurement-conversions/tire-pressure-units-psi-bar-and-kpa">kilopascal</TermLink>s — the same air pressure, described three ways.</div>}
      detailed={<div className="prose-p">All three units measure <TermLink href="/units-measurement-conversions/tire-pressure-units-psi-bar-and-kpa">pressure</TermLink> — force spread over an area — but come from different measurement traditions. Psi (pounds per square inch) is built from US customary force and area units. Bar was defined as a convenient round number close to standard atmospheric pressure at sea level (very close to 1 bar), making it an intuitive metric reference point for everyday pressures like tires. The pascal (and kilopascal) is the formally defined SI pressure unit, built directly from the SI base units of force (newtons) and area (square meters) — 1 pascal = 1 newton per square meter. Because bar and kPa are both metric, they relate to each other by a clean factor of exactly 100 (1 bar = 100,000 pascals = 100 kPa), the same clean-power-of-ten relationship metric units always have with each other. Psi, being a non-metric unit, needs an externally measured conversion factor to reach either one — there&apos;s no clean round-number relationship, just like miles to kilometers.</div>}
      />
      <FootnoteAside>Tire pressure gauges that read &quot;psi&quot; are almost always measuring gauge pressure — pressure above atmospheric pressure, not absolute pressure — which is the practical, useful number for inflation but worth knowing if you ever see the distinction called out in a technical spec sheet.</FootnoteAside>

      <p>
      Because vehicles built for different regions display pressure recommendations in whichever unit is standard locally, converting correctly matters most when using a gauge from one region on a vehicle labeled in another.
      </p>

      <QuickCheck
      question="A car's door-jamb sticker (made for the European market) recommends 2.3 bar. A driver in the US has only a psi-reading gauge. Roughly what psi reading should they inflate to?"
      options={[
      { text: "About 2.3 psi, since the number itself should carry over directly", correct: false, explanation: "Bar and psi are different-sized units — a bar is a much larger pressure unit than a psi, so the numeric value can't be carried over unchanged between them." },
      { text: "About 33.4 psi (2.3 ÷ 0.0689), converting bar back to psi using the same fixed factor in reverse", correct: true, explanation: "Correct. Dividing by the psi-to-bar factor (0.0689) converts a bar figure back into psi — 2.3 ÷ 0.0689 ≈ 33.4 psi, a sensible everyday tire pressure." },
      { text: "There's no reliable way to convert between the two without a professional tool", correct: false, explanation: "A fixed conversion factor (1 psi ≈ 0.0689 bar) converts reliably between the two units — no specialized equipment is needed beyond basic arithmetic." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting a standard US tire pressure to bar (baseline case)</h3>
      <div className="prose-p">
      A common passenger car recommendation of 32 psi converts to bar: 32 × 0.0689476 ≈ 2.21 bar. This is a single multiplication by the fixed psi-to-bar factor, no different mechanically from converting miles to kilometers.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Converting between bar and kPa, the easy metric-to-metric case (edge case / variation)</h3>
      <div className="prose-p">
      That same 2.21 bar converts to kilopascals with a clean multiplication by 100: 2.21 × 100 = 221 kPa. No externally-measured conversion factor is needed here, because both bar and kPa are metric pressure units related by a defined power of ten — unlike the psi-to-bar step, which does require an externally fixed factor.
      </div>

      <QuickCheck
      question="Why does converting bar to kPa require only multiplying by 100, while converting psi to bar requires the less clean factor 0.0689476?"
      options={[
      { text: "Bar-to-kPa is easier purely by coincidence — there's no underlying reason", correct: false, explanation: "It's not coincidence — it follows directly from both units belonging to the same (metric) measurement system, related by a defined power of ten, the way all metric-to-metric conversions are." },
      { text: "Bar and kPa are both metric units, defined to relate to each other by an exact power of ten (1 bar = 100 kPa), while psi comes from a non-metric (US customary) system with no built-in clean relationship to metric units", correct: true, explanation: "Correct. This is the same length-conversion pattern seen elsewhere in this topic — metric-to-metric conversions are always clean powers of ten, while crossing from a non-metric system requires an externally measured, non-round conversion factor." },
      { text: "Kilopascals are a newer unit invented specifically to simplify conversion from psi", correct: false, explanation: "The pascal was defined as part of the SI system based on newtons and square meters, independent of psi — its clean relationship to bar comes from both being metric, not from being designed around psi." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why a small pressure conversion error matters for tires specifically (real-world / applied case)</h3>
      <div className="prose-p">
      A driver mistakenly inflates a tire to 2.2 psi-worth of pressure instead of 2.2 bar-worth, confusing the two units directly (treating the number as interchangeable). 2.2 psi ≈ 0.152 bar — a massively underinflated tire (about 7% of the intended pressure), since psi and bar differ by roughly a factor of 14.5. This isn&apos;t a rounding-level error the way a slightly-off conversion factor might be elsewhere in this topic — confusing psi and bar directly, without converting at all, produces a tire dangerously and obviously underinflated, which is exactly why understanding these units as genuinely different scales (not interchangeable numbers) matters here more than almost anywhere else in this topic.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="32 psi shown as bar and kilopascals"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-tire-pressure-units-psi-bar-and-kpa-scale.svg"
      altText="Three aligned scale bars showing the same tire pressure of 32 psi equal to about 2.2 bar equal to about 220.6 kilopascals, with tick marks lined up to show the proportional relationship between the three units."
      />
      <p>
      All three bars represent the identical physical air pressure inside the tire — the unit changes, the tire&apos;s actual firmness does not.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Reading a pressure value in one unit (e.g. bar) and inflating a tire to that same numeric value on a gauge calibrated in a different unit (e.g. psi).", fix: "Always confirm which unit both the recommendation and the gauge are using before inflating — the numeric values are not interchangeable between psi and bar/kPa." },
      { mistake: "Assuming bar and kPa need a complicated conversion factor, when they're actually a clean factor of 100 apart.", fix: "Remember bar and kPa are both metric — multiply bar by 100 to get kPa, or divide kPa by 100 to get bar, no lookup needed." },
      { mistake: "Trusting a tire pressure sticker meant for a different regional market without converting its units to match your gauge.", fix: "Check the unit label on both the sticker and the gauge, and convert using the fixed psi/bar/kPa factors before inflating." },
      ]}
      />
      <MisconceptionCallout
      myth="A tire pressure number like '2.2' means roughly the same thing whether it's labeled psi, bar, or kPa — close enough not to worry about."
      reality={<p>Psi, bar, and kPa differ from each other by large factors — roughly 14.5x between psi and bar, and exactly 100x between bar and kPa — so the same numeric value means drastically different actual pressures depending on the unit. A tire inflated to &apos;2.2&apos; read as psi instead of the intended bar would be dangerously underinflated, at roughly 7% of the target pressure.</p>}
      />

      <QuickCheck
      question="A performance car's manual specifies front tire pressure as '2.5 bar' for track use. The car's built-in tire pressure monitoring system displays readings in psi. What psi value corresponds to the manual's recommendation?"
      options={[
      { text: "About 36.3 psi (2.5 ÷ 0.0689476)", correct: true, explanation: "Correct. Dividing the bar value by the psi-to-bar conversion factor converts it back into psi — 2.5 ÷ 0.0689476 ≈ 36.3 psi." },
      { text: "Exactly 2.5 psi, since the pressure itself doesn't change between units", correct: false, explanation: "While the physical pressure is unchanged, its numeric value absolutely changes between units — psi is a much smaller pressure unit than bar, so the psi number will be considerably larger than the bar number for the same pressure." },
      { text: "About 250 psi (2.5 x 100), using the bar-to-kPa factor by mistake", correct: false, explanation: "Multiplying by 100 is the bar-to-kilopascal conversion, not bar-to-psi — applying the wrong pair's conversion factor gives a wildly incorrect result here." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert a pressure value using a fixed conversion factor"
      fields={[
      { key: "value", label: "Pressure value", defaultValue: 32 },
      { key: "conversionFactor", label: "Conversion factor (0.0689476 for psi to bar, 6.89476 for psi to kPa)", defaultValue: 0.0689476, step: 0.0001 },
      ]}
      resultLabel="Converted pressure"
      formula="unitConversionByFactor"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Check which pressure unit your tire gauge reads in before comparing it to a manufacturer recommendation in a different unit.",
      "Remember bar-to-kPa is a clean x100 (or ÷100 the other way); psi to either requires the fixed 0.0689/6.895 factors.",
      "Never treat the same number as 'close enough' across psi, bar, and kPa — the gap between them is large enough to meaningfully under- or over-inflate a tire.",
      "Use the calculator above whenever converting a specific tire recommendation between units.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do you convert psi to bar?", answer: "Multiply the psi value by 0.0689476. 32 psi x 0.0689476 ≈ 2.21 bar." },
      { question: "How do you convert bar to kPa?", answer: "Multiply by 100 — 1 bar equals exactly 100 kilopascals, since both are metric units related by a defined power of ten." },
      { question: "What's a normal tire pressure in psi vs bar?", answer: "Most passenger cars recommend somewhere between 30-35 psi, which converts to roughly 2.1-2.4 bar or 207-241 kPa — check your specific vehicle's door-jamb sticker rather than assuming a universal number." },
      { question: "Why do US cars use psi while European cars use bar?", answer: "The US uses the US customary measurement system generally, which includes psi (pounds per square inch); most of the rest of the world uses the metric system, where bar (and kPa) are the standard pressure units — the same regional pattern seen across length, weight, and volume units in this topic." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
