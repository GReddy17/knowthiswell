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
  title: "Liters vs Gallons: Everyday Conversion",
  category: "units-measurement-conversions",
  order: 17,
  subtopic: "volume-and-capacity",
  tags: ["liters", "gallons", "volume conversion", "US customary units", "imperial units"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A US gallon and a UK gallon are both called \"gallon,\" but the UK gallon holds about 20% more liquid — converting correctly means knowing which one you're dealing with.",
  summary: "A liter converts to gallons by dividing by a fixed factor, but \"gallon\" itself isn't one fixed size — the US gallon (3.78541 L) and the UK imperial gallon (4.54609 L) are different volumes that share a name.",
  sources: [
    { label: "NIST — Handbook 44, Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices", url: "https://www.nist.gov/pml/owm/publications/nist-handbook-44" },
    { label: "Encyclopaedia Britannica — Gallon", url: "https://www.britannica.com/science/gallon" },
    { label: "UK Government — Weights and Measures Act legal units of measurement", url: "https://www.gov.uk/guidance/weights-and-measures-legislation" },
  ],
  seeAlso: [
    "units-measurement-conversions/fluid-ounces-us-vs-uk-differences",
    "units-measurement-conversions/understanding-fuel-tank-and-engine-capacity-units",
    "math-numbers/unit-conversions-length-weight-volume",
  ],
  glossary: [
    {"term":"US gallon","definition":"The liquid volume unit used in the United States, legally defined as exactly 231 cubic inches, equal to 3.78541 liters."},
    {"term":"UK imperial gallon","definition":"The gallon defined by the British Weights and Measures Act, equal to 4.54609 liters — about 20% larger than the US gallon."},
    {"term":"Liter","definition":"The base metric unit of volume, defined as exactly one cubic decimeter (1,000 cubic centimeters)."},
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
      "A liter converts to gallons the same way as any unit conversion — multiply by a fixed factor — but \"gallon\" secretly refers to two different sizes depending on country.",
      "1 US gallon = 3.78541 liters, but 1 UK imperial gallon = 4.54609 liters — about 20% larger, because the two countries defined the unit differently and never reconciled it.",
      "The UK sells fuel in liters but still often reports fuel economy in \"miles per gallon\" using the larger imperial gallon, which makes UK mpg figures not directly comparable to US mpg figures for the same real efficiency.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">To convert liters to gallons, divide by 3.78541 if you mean a <TermLink href="/units-measurement-conversions/liters-vs-gallons-everyday-conversion">US gallon</TermLink>, or divide by 4.54609 if you mean a <TermLink href="/units-measurement-conversions/liters-vs-gallons-everyday-conversion">UK imperial gallon</TermLink>. To go the other way, multiply by that same factor. The math is ordinary multiplication or division by a fixed number — the only real trap is that &quot;gallon&quot; isn&apos;t one universal size, so picking the wrong factor silently gives you a wrong answer that still looks plausible.</div>}
      detailed={<div className="prose-p">The <TermLink href="/units-measurement-conversions/liters-vs-gallons-everyday-conversion">US gallon</TermLink> is legally defined as exactly 231 cubic inches (a holdover from an old English wine-trade measure called the &quot;Queen Anne gallon&quot;), which converts to 3.78541178... liters. The <TermLink href="/units-measurement-conversions/liters-vs-gallons-everyday-conversion">UK imperial gallon</TermLink>, defined in 1824 and refined in 1985 as exactly 4.54609 liters, was built on a completely different historical basis — the volume of 10 pounds of water at a specified temperature. The US kept its older wine-gallon definition after independence; Britain moved to the imperial system later. Neither side ever converged, so today the two units share a name but differ by roughly 20.1%. The <TermLink href="/units-measurement-conversions/liters-vs-gallons-everyday-conversion">liter</TermLink> itself is unambiguous — exactly one cubic decimeter, part of the metric system — which is why liters are the safer unit to convert into or out of when precision matters.</div>}
      />
      <FootnoteAside>Canada officially uses the metric system today, but sold fuel by the imperial gallon until the 1970s conversion to liters — older Canadians occasionally still reference the imperial gallon out of habit, which is a third source of confusion beyond the US/UK split.</FootnoteAside>

      <p>
      Because the size difference is real and not just a rounding quirk, the practical skill here isn&apos;t just doing the multiplication — it&apos;s knowing which gallon you&apos;re actually being asked to convert.
      </p>

      <QuickCheck
      question="A UK recipe blog and a US recipe blog both list an ingredient as '1 gallon.' Do they mean the same volume?"
      options={[
      { text: "Yes, a gallon is an internationally standardized unit", correct: false, explanation: "There is no single internationally standardized gallon. The US and UK define the gallon differently, and the difference is large enough to matter in a recipe." },
      { text: "No — the UK gallon (4.54609 L) is about 20% larger than the US gallon (3.78541 L), so the same word points to a meaningfully different volume", correct: true, explanation: "Correct. Always check which country's gallon a source means before converting, especially for recipes, fuel tank sizes, or fuel economy figures." },
      { text: "No, but the difference is small enough (under 1%) to ignore in practice", correct: false, explanation: "The actual difference is about 20%, which is large enough to visibly change a recipe's liquid ratio or a fuel calculation — not a safely ignorable rounding error." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting a US gallon water jug to liters (baseline case)</h3>
      <div className="prose-p">
      A US-branded water jug is labeled &quot;1 gallon.&quot; Converting to liters: 1 × 3.78541 = 3.78541 liters. A US 5-gallon water cooler bottle holds 5 × 3.78541 ≈ 18.93 liters. This is the everyday case — a single multiplication by the US gallon factor.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Comparing UK &quot;mpg&quot; to US &quot;mpg&quot; for the same real fuel efficiency (edge case / variation)</h3>
      <div className="prose-p">
      A car genuinely uses 8 liters of fuel to travel 100 km (a real, unambiguous efficiency). Converted to US mpg: roughly 29.4 miles per US gallon. Converted to UK (imperial) mpg using the same real fuel efficiency: roughly 35.3 miles per UK gallon — a noticeably higher number for the exact same car, purely because the UK gallon is bigger, so the same distance uses a smaller fraction of a (larger) gallon. Comparing a &quot;35 mpg&quot; UK spec sheet directly against a &quot;29 mpg&quot; US spec sheet without adjusting for gallon size would wrongly suggest the UK car is far more efficient when the underlying fuel consumption could be identical.
      </div>

      <QuickCheck
      question="Why can a car advertised as '35 mpg' in the UK and a car advertised as '29 mpg' in the US potentially be equally fuel-efficient?"
      options={[
      { text: "Because UK cars are built with more efficient engines on average", correct: false, explanation: "The apparent gap isn't necessarily about engineering at all — it can be fully explained by the UK's larger imperial gallon making the same real fuel consumption produce a bigger mpg number." },
      { text: "Because the UK imperial gallon is about 20% larger than the US gallon, so the same real distance-per-fuel-used produces a higher 'miles per gallon' number under the UK definition", correct: true, explanation: "Correct. mpg figures from different countries aren't directly comparable unless you first convert both to a common basis, like liters per 100 km." },
      { text: "Because the US and UK measure 'miles' differently", correct: false, explanation: "A mile is the same length in both countries — the discrepancy comes entirely from the differing gallon size, not the distance unit." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Sizing a home water heater tank listed only in liters for a US buyer (real-world / applied case)</h3>
      <div className="prose-p">
      A water heater imported from Europe is rated at 200 liters. A US buyer comparing it to domestic tanks (typically sold in US gallons) converts: 200 ÷ 3.78541 ≈ 52.83 US gallons — close to a common &quot;50-gallon&quot; US household tank size, which is the actual point of comparison a shopper needs. Using the UK gallon factor by mistake (200 ÷ 4.54609 ≈ 44 gallons) would make the same tank look smaller than it really is relative to US-market options.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Relative sizes: 1 liter vs 1 US gallon vs 1 UK imperial gallon"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-liters-vs-gallons-everyday-conversion-relative-sizes.svg"
      altText="Three vertical bars compared side by side at proportional heights: a short bar labeled 1 liter, a taller bar about 3.8 times as tall labeled 1 US gallon equals 3.78541 liters, and the tallest bar about 4.5 times the liter bar's height labeled 1 UK imperial gallon equals 4.54609 liters, showing the UK gallon is noticeably larger than the US gallon."
      />
      <p>
      The visual gap between the US and UK bars is the entire lesson: both are called &quot;gallon,&quot; both are real legal units, and neither can be substituted for the other without a real, roughly 20% error.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming 'gallon' always means the US gallon, especially when reading a UK or older Commonwealth source.", fix: "Check the source's country before converting — if it's UK-published and pre-metric-era or automotive, it may mean the imperial gallon." },
      { mistake: "Comparing US mpg and UK mpg figures directly without converting to a common unit first.", fix: "Convert both to liters per 100 km (or km per liter) before comparing fuel efficiency across countries." },
      { mistake: "Rounding 3.78541 down to 'about 3.8' or even '4' for large-volume conversions.", fix: "Use the full-precision factor when the total volume is large — a small per-gallon rounding error compounds across many gallons." },
      ]}
      />
      <MisconceptionCallout
      myth="A gallon is a gallon — it's a standard unit like a meter, so it means the same thing everywhere."
      reality={<p>Unlike the meter (defined once, internationally, via the speed of light), the gallon was never unified between the US and UK. The US gallon (3.78541 L) and the UK imperial gallon (4.54609 L) are both real, legally defined units that happen to share an English word — they are not interchangeable, and converting with the wrong one produces a wrong answer that looks perfectly reasonable.</p>}
      />

      <QuickCheck
      question="You're converting a European car's 55-liter fuel tank to gallons for a US audience. Which factor should you use?"
      options={[
      { text: "Divide by 4.54609 (UK imperial gallon), since Europe is closer to the UK", correct: false, explanation: "Geographic proximity to the UK isn't the deciding factor — the audience matters. A US audience expects US gallons, regardless of where the car itself is manufactured." },
      { text: "Divide by 3.78541 (US gallon), since the conversion is being presented to a US audience — 55 / 3.78541 ≈ 14.53 US gallons", correct: true, explanation: "Correct. Match the gallon definition to the audience reading the number, not to the country where the object originated." },
      { text: "It doesn't matter which gallon you use, since the answer will be close either way", correct: false, explanation: "The two gallons differ by about 20%, which is a large, clearly noticeable error for something like a fuel tank capacity — it does matter which one you use." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert liters to gallons (or any value by a fixed factor)"
      fields={[
      { key: "value", label: "Liters to convert", defaultValue: 20 },
      { key: "conversionFactor", label: "Conversion factor (0.264172 for US gal, 0.219969 for UK gal)", defaultValue: 0.264172, step: 0.000001 },
      ]}
      resultLabel="Result (gallons)"
      formula="unitConversionByFactor"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Before converting any 'gallon' figure, confirm whether the source is US or UK/Commonwealth in origin.",
      "Memorize the two anchor numbers: 1 US gallon = 3.78541 L, 1 UK gallon = 4.54609 L.",
      "When comparing fuel efficiency across countries, convert both to liters per 100 km rather than trusting raw 'mpg' numbers.",
      "Use the calculator above with the correct factor for your target gallon definition, not a rounded approximation.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How many liters are in a gallon?", answer: "It depends which gallon: a US gallon is 3.78541 liters, while a UK imperial gallon is 4.54609 liters — about 20% more." },
      { question: "Is a UK gallon bigger than a US gallon?", answer: "Yes. The UK imperial gallon (4.54609 L) is roughly 20% larger than the US gallon (3.78541 L)." },
      { question: "Why does the UK still use miles per gallon if it sells fuel in liters?", answer: "It's a holdover from before the UK's metric conversion — fuel is sold by the liter at the pump, but fuel economy is still commonly reported in mpg using the imperial gallon, creating a hybrid system." },
      { question: "How do I quickly convert liters to US gallons?", answer: "Divide the number of liters by 3.78541 (or multiply by roughly 0.264172) to get US gallons." },
      { question: "Does Canada use the US gallon or the UK gallon?", answer: "Canada is fully metric today and sells fuel and liquids in liters, but historically used the UK imperial gallon before its 1970s metric conversion — not the US gallon." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
