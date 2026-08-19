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
  title: "Unit Conversions (length, weight, volume)",
  category: "math-numbers",
  order: 40,
  subtopic: "applied-and-everyday-math",
  tags: [
    "unit conversion",
    "metric system",
    "US customary units",
    "conversion factor",
    "measurement",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Every unit conversion is the same operation — multiply by a fixed conversion factor — whether you're converting length, weight, volume, or anything else.",
  summary: "Converting between units of length, weight, or volume means multiplying the original value by a fixed conversion factor that expresses how many of the new unit equal one of the old unit.",
  sources: [
    { label: "NIST — Physical Measurement Laboratory: Weights and Measures", url: "https://www.nist.gov/pml" },
    { label: "Encyclopaedia Britannica — International System of Units", url: "https://www.britannica.com/science/International-System-of-Units" },
    { label: "Encyclopaedia Britannica — Weights and Measures", url: "https://www.britannica.com/topic/weights-and-measures" },
  ],
  seeAlso: [
    "math-numbers/math-in-cooking-measurement-conversions-scaling-recipes",
    "math-numbers/math-for-travel-distance-speed-time",
    "math-numbers/ratios-and-proportions",
  ],
  glossary: [
    { term: "Conversion factor", definition: "A fixed ratio that expresses how many units of one measurement system equal one unit of another, used by multiplying the original value by the factor." },
    { term: "Metric system (SI)", definition: "The International System of Units, built on base units like the meter, kilogram, and liter, related to each other by powers of ten." },
    { term: "US customary units", definition: "The system of measurement units — inches, feet, miles, pounds, gallons — used for everyday measurement in the United States, distinct from the metric system used by most of the rest of the world." },
    { term: "Dimensional analysis", definition: "A method of converting units by multiplying a value by a chain of conversion factors, arranged so that unwanted units cancel out and only the desired unit remains." },
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
      "Every unit conversion, regardless of category, is the same operation: multiply the original value by a fixed conversion factor that expresses the relationship between the two units.",
      "The metric system's units relate to each other by clean powers of ten, while US customary units use irregular, historically inherited ratios (12 inches per foot, 3 feet per yard) that must be memorized or looked up.",
      "Rounding a conversion factor too early or too aggressively compounds into meaningful error over large values — a small per-unit rounding error scales with the size of the number being converted.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Converting between units means multiplying by a fixed <TermLink href="/math-numbers/unit-conversions-length-weight-volume">conversion factor</TermLink>. To convert miles to kilometers, multiply by 1.60934, since 1 mile equals 1.60934 kilometers by definition. To convert pounds to kilograms, multiply by 0.453592. The specific number changes depending on what you&apos;re converting, but the operation — multiply by a known, fixed ratio — never changes, whether it&apos;s length, weight, volume, or anything else measured in different units.</div>}
      detailed={<div className="prose-p">The <TermLink href="/math-numbers/unit-conversions-length-weight-volume">metric system (SI)</TermLink> is built so every unit within a category relates to every other unit by a clean power of ten — 1,000 millimeters per meter, 1,000 meters per kilometer — which makes converting within the metric system just a matter of shifting a decimal point. <TermLink href="/math-numbers/unit-conversions-length-weight-volume">US customary units</TermLink> carry no such consistent base: 12 inches per foot, 3 feet per yard, 5,280 feet per mile — ratios inherited from historical measurement traditions rather than designed around a single consistent base. Converting between the metric and US customary systems (miles to kilometers, pounds to kilograms) always requires an external, empirically-fixed conversion factor, since the two systems weren&apos;t designed to relate to each other by a clean number. For conversions involving multiple steps, <TermLink href="/math-numbers/unit-conversions-length-weight-volume">dimensional analysis</TermLink> — chaining conversion factors so intermediate units cancel out algebraically — keeps multi-step conversions organized and catches setup errors, since a factor written upside down produces mismatched units that visibly fail to cancel.</div>}
      />
      <FootnoteAside>The international mile-to-kilometer conversion (1 mile = 1.609344 kilometers exactly) and the international pound-to-kilogram conversion (1 pound = 0.45359237 kilograms exactly) are both defined by international agreement, not measured — since 1959, English-speaking countries have used these exact defined values rather than slightly differing historical figures, specifically to eliminate small but real discrepancies in international trade and engineering.</FootnoteAside>

      <p>
      Knowing that every conversion boils down to &quot;multiply by a fixed factor&quot; is the easy part — the more useful skill is getting comfortable with a handful of the conversion factors that come up constantly in everyday situations.
      </p>

      <QuickCheck
      question="A recipe lists an oven temperature in Celsius, but your oven only displays Fahrenheit. Is converting Celsius to Fahrenheit the same kind of operation as converting miles to kilometers?"
      options={[
      { text: "Yes, exactly the same — multiply by a fixed conversion factor in both cases", correct: false, explanation: "Temperature conversion is a genuine exception. Celsius to Fahrenheit isn't a pure multiplication — it's °F = (°C × 9/5) + 32, which includes an added offset because the two scales don't share a common zero point." },
      { text: "No — length conversions like miles to kilometers are a pure multiplication by a fixed factor, but Celsius to Fahrenheit requires an added offset (°F = °C × 9/5 + 32) because the two temperature scales have different zero points", correct: true, explanation: "Correct. Most length, weight, and volume conversions are pure multiplication because both units measure zero the same way (no length, no weight). Celsius and Fahrenheit assign different numbers to the same zero point, so a flat offset has to be added after the multiplication." },
      { text: "No, because Fahrenheit and Celsius measure two completely different physical properties", correct: false, explanation: "Both scales measure the same physical property — temperature. The reason the conversion differs from a simple multiplication is the differing zero points and scale sizes between the two systems, not a difference in what's being measured." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting a length from miles to kilometers (baseline case)</h3>
      <div className="prose-p">
      A road sign reads 26.2 miles (a marathon distance). Converting to kilometers: 26.2 × 1.60934 ≈ 42.16 kilometers — matching the well-known &quot;marathon = 42.195 km&quot; figure closely (the small remaining difference comes from the official marathon distance being defined to a more precise fractional value). The operation is a single multiplication by the fixed mile-to-kilometer factor, applied once.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A multi-step conversion using dimensional analysis (edge case / variation)</h3>
      <div className="prose-p">
      Convert a speed of 60 miles per hour into meters per second — a conversion that mixes two different unit categories (distance and time) at once. Chain the factors so units cancel: 60 miles/hour × 1,609.34 meters/mile × 1 hour/3,600 seconds = (60 × 1,609.34) ÷ 3,600 meters/second ≈ 26.82 meters/second. Notice &quot;miles&quot; cancels between the first two factors, and &quot;hour&quot; cancels between the first and third — leaving only meters/second, the target unit. This chaining approach (dimensional analysis) is what keeps multi-step conversions from silently going wrong: if the units don&apos;t cancel out cleanly on paper, a factor was set up upside down somewhere in the chain.
      </div>

      <QuickCheck
      question="Converting 60 miles per hour to meters per second requires multiplying by both a distance factor (miles to meters) and a time factor (hours to seconds). Why is checking that the units cancel out important?"
      options={[
      { text: "It's just a formatting habit with no real mathematical purpose", correct: false, explanation: "Unit cancellation isn't cosmetic — it's a working check that the conversion factors were multiplied or divided in the correct direction, catching a real class of setup mistakes before they produce a wrong final number." },
      { text: "If the units don't cancel out to leave only the target unit, it signals that a conversion factor was set up upside down (multiplied instead of divided, or vice versa)", correct: true, explanation: "Correct. Dimensional analysis works precisely because unwanted units should mathematically cancel — if they don't, that's a direct signal the conversion chain has an error somewhere before you even check the final number." },
      { text: "Units only need to cancel out when converting between different countries' measurement systems", correct: false, explanation: "Unit cancellation is useful for any multi-step conversion, including ones entirely within a single measurement system (like miles per hour to feet per second), not just conversions crossing between measurement systems." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why rounding a conversion factor early causes real error at scale (real-world / applied case)</h3>
      <div className="prose-p">
      A shipping company converts a cargo weight of 18,000 pounds to kilograms. Using a rounded factor of 0.45 (instead of the precise 0.453592): 18,000 × 0.45 = 8,100 kilograms. Using the precise factor: 18,000 × 0.453592 ≈ 8,164.66 kilograms — a difference of about 64.66 kilograms, roughly 143 pounds, from rounding a conversion factor by less than 1%. On a single small package, that rounding would be invisible. At cargo scale, where shipping costs, customs declarations, and vehicle weight limits are all based on the converted figure, a 64-kilogram discrepancy is exactly the kind of error that shows up as a real mismatch on a customs form or a weigh-station reading — which is why precise, unrounded conversion factors matter more as the quantity being converted grows larger.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Dimensional analysis: converting 60 miles per hour to meters per second"
      type="flow"
      svgSrc="/diagrams/math-numbers-unit-conversions-length-weight-volume-dimensional-analysis-chain.svg"
      altText="A horizontal chain of three fraction boxes multiplied together: the first box reads 60 miles over 1 hour, the second box reads 1609.34 meters over 1 mile with the word miles crossed out to show cancellation against the first box's miles, and the third box reads 1 hour over 3600 seconds with the word hour crossed out to show cancellation against the first box's hour, leaving a final result box on the right reading approximately 26.82 meters per second."
      />
      <p>
      Reading left to right, each fraction is deliberately arranged so its denominator cancels a unit from the previous fraction&apos;s numerator — miles cancels with miles, hours cancels with hours — leaving only meters (top) and seconds (bottom) standing at the end of the chain. This visual cancellation is the entire safeguard behind dimensional analysis: if a fraction had been flipped upside down, the wrong units would remain at the end instead of canceling cleanly, immediately signaling a setup mistake.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Multiplying by a conversion factor when you should be dividing (or vice versa).", fix: "Sanity-check the direction with a rough estimate first — converting a small number of miles should give a slightly larger number of kilometers, not a smaller one, since a kilometer is a shorter unit than a mile." },
      { mistake: "Using an overly rounded conversion factor for a large-scale or high-precision conversion.", fix: "Use the full-precision conversion factor (or at least several decimal places) whenever the quantity being converted is large — small per-unit rounding error scales up with the size of the number." },
      { mistake: "Treating temperature conversion (Celsius to Fahrenheit) as a simple multiplication like length or weight conversions.", fix: "Remember temperature conversion requires an added offset, not just a multiplication, because Celsius and Fahrenheit don't share the same zero point." },
      ]}
      />
      <MisconceptionCallout
      myth="All unit conversions work the same simple way, so the same 'multiply by a factor' shortcut applies to literally any measurement, including temperature."
      reality={<p>Length, weight, and volume conversions are pure multiplications by a fixed factor because both units in the pair measure zero identically — zero miles is the same physical amount as zero kilometers. Temperature is the major exception: Celsius and Fahrenheit assign different numbers to the same physical zero point (0°C is 32°F, not 0°F), so converting between them requires both a multiplication and an added offset, not a multiplication alone.</p>}
      />

      <QuickCheck
      question="Someone tries to convert 20°C to Fahrenheit by simply multiplying by 1.8 (getting 36°F), without adding anything. What's wrong with this approach?"
      options={[
      { text: "Nothing — 20°C times 1.8 correctly gives 36°F", correct: false, explanation: "This skips the required offset. The correct formula is °F = (°C × 9/5) + 32, so 20°C actually converts to (20 × 1.8) + 32 = 68°F, not 36°F." },
      { text: "Celsius-to-Fahrenheit conversion requires adding 32 after the multiplication, because the two scales don't share the same zero point — the correct answer is 68°F, not 36°F", correct: true, explanation: "Correct. °F = (°C × 9/5) + 32. Skipping the +32 offset produces a value 32 degrees too low — 20°C is a comfortable room temperature (68°F), not a near-freezing 36°F." },
      { text: "The 1.8 multiplier itself is wrong and should be 1.5 instead", correct: false, explanation: "The 9/5 (1.8) multiplier is correct for the scale-size difference between Celsius and Fahrenheit degrees — the actual missing piece is the +32 offset for the differing zero points, not the multiplier itself." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert a value using a fixed conversion factor"
      fields={[
      { key: "value", label: "Value to convert", defaultValue: 26.2 },
      { key: "conversionFactor", label: "Conversion factor (e.g. 1.60934 for miles to km)", defaultValue: 1.60934, step: 0.00001 },
      ]}
      resultLabel="Converted value"
      formula="unitConversionByFactor"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Memorize a handful of everyday conversion factors you actually use (miles to kilometers, pounds to kilograms, cups to milliliters) rather than looking them up every time.",
      "Next time you do a multi-step conversion, write out the chain of fractions and check that the unwanted units visibly cancel before trusting the final number.",
      "Use the calculator above with the full-precision conversion factor rather than a rounded one, especially for anything involving large quantities.",
      "Remember that Celsius-to-Fahrenheit (and vice versa) needs an added offset, not just a multiplication — it's a genuine exception to the 'multiply by a factor' rule.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do you convert miles to kilometers?", answer: "Multiply the number of miles by 1.60934 (or 1.609344 for the exact internationally defined value). 26.2 miles × 1.60934 ≈ 42.16 kilometers." },
      { question: "How do you convert pounds to kilograms?", answer: "Multiply the number of pounds by 0.453592 (the internationally defined conversion factor). 18,000 pounds × 0.453592 ≈ 8,164.66 kilograms." },
      { question: "Is converting Celsius to Fahrenheit the same as other unit conversions?", answer: "No. Most length, weight, and volume conversions are a single multiplication by a fixed factor. Celsius to Fahrenheit requires both a multiplication and an added offset — °F = (°C × 9/5) + 32 — because the two scales don't share the same zero point." },
      { question: "What is dimensional analysis?", answer: "A method for multi-step unit conversions where conversion factors are chained together so that unwanted units cancel out algebraically, leaving only the target unit — a built-in check that catches setup errors like an upside-down conversion factor." },
      { question: "Why does the metric system convert more easily than the US customary system?", answer: "Because metric units relate to each other by clean powers of ten (1,000 millimeters per meter, for example), so converting within the metric system is just shifting a decimal point. US customary units use irregular historical ratios (12 inches per foot, 5,280 feet per mile) that must be memorized or looked up individually." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
