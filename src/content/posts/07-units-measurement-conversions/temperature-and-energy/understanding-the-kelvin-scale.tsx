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
  title: "Understanding the Kelvin Scale",
  category: "units-measurement-conversions",
  order: 26,
  subtopic: "temperature-and-energy",
  tags: [
    "kelvin",
    "absolute zero",
    "temperature scale",
    "celsius",
    "physics",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Kelvin doesn't use degrees and never goes negative, because it's anchored to absolute zero — the coldest temperature physically possible, not an arbitrary reference point.",
  summary: "The Kelvin scale measures temperature from absolute zero, the point where atomic motion theoretically stops, which is why Kelvin values are never negative and why converting from Celsius is just addition — no scaling needed.",
  sources: [
    { label: "NIST — The International System of Units (SI): Kelvin", url: "https://www.nist.gov/pml/owm/metric-si/si-units-temperature" },
    { label: "Encyclopaedia Britannica — Kelvin Temperature Scale", url: "https://www.britannica.com/science/Kelvin-temperature-scale" },
    { label: "NASA — Absolute Zero", url: "https://www.nasa.gov" },
  ],
  seeAlso: [
    "units-measurement-conversions/celsius-vs-fahrenheit-the-conversion-formula",
    "units-measurement-conversions/watts-kilowatts-and-reading-an-electricity-bill",
  ],
  glossary: [
    {"term":"Kelvin scale","definition":"An absolute temperature scale, part of the International System of Units, where 0 K represents absolute zero and each unit interval equals one Celsius degree."},
    {"term":"Absolute zero","definition":"The theoretical lowest possible temperature, 0 Kelvin (−273.15°C), at which classical particle motion would cease entirely."},
    {"term":"Absolute scale","definition":"A measurement scale with a true, physically meaningful zero point (nothing below it is possible), as opposed to a relative scale with an arbitrarily chosen zero."},
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
      "Kelvin is anchored to absolute zero (0 K = −273.15°C), the coldest temperature physically possible, rather than an arbitrary reference point like water's freezing point.",
      "Converting Celsius to Kelvin is pure addition — K = °C + 273.15 — with no scaling factor needed, because a Kelvin and a Celsius degree are exactly the same size.",
      "Kelvin values are never written with a degree symbol (°) and are never negative, both direct consequences of the scale starting at an actual physical floor.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">The <TermLink href="/units-measurement-conversions/understanding-the-kelvin-scale">Kelvin scale</TermLink> works like Celsius, except its zero point is moved to <TermLink href="/units-measurement-conversions/understanding-the-kelvin-scale">absolute zero</TermLink> — the coldest anything can theoretically get. To convert, just add 273.15 to a Celsius value: K = °C + 273.15. Room temperature (20°C) is about 293 K. There&apos;s no multiplying involved, unlike the Celsius-to-Fahrenheit conversion, because a one-degree step is exactly the same size in both Celsius and Kelvin.</div>}
      detailed={<div className="prose-p">Celsius and Fahrenheit are both relative scales — their zero points were chosen based on a convenient physical reference (water&apos;s freezing point, or a historical brine mixture), not because anything special happens there physically. Kelvin is an <TermLink href="/units-measurement-conversions/understanding-the-kelvin-scale">absolute scale</TermLink>: its zero is defined by physics itself, the point at which atoms and molecules have their minimum possible thermal motion. Because Kelvin was deliberately designed to use the same-sized degree interval as Celsius (unlike Fahrenheit, which uses smaller degrees), converting between the two needs only an offset, not a scaling factor — the formula is simply K = °C + 273.15, with no multiplication step at all. This is also why Kelvin is the scale scientists actually use for physics and chemistry calculations: gas laws, radiation formulas, and thermodynamic equations are written in terms of absolute temperature, and using Celsius or Fahrenheit directly in those formulas would produce wrong answers whenever the calculation involves a ratio of temperatures.</div>}
      />
      <FootnoteAside>The scale is named after William Thomson, 1st Baron Kelvin, who proposed an absolute temperature scale in 1848. Since 2019, the kelvin has been formally redefined in terms of the Boltzmann constant rather than water&apos;s triple point, though the practical size of the unit — matching one Celsius degree — hasn&apos;t changed.</FootnoteAside>

      <p>
      Kelvin shows up constantly in science contexts even though it rarely appears in everyday weather reports — understanding why helps make sense of both.
      </p>

      <QuickCheck
      question="Why can a Kelvin temperature never be negative, while Celsius and Fahrenheit both can be?"
      options={[
      { text: "Kelvin is just a naming convention — negative Kelvin values exist but are written differently", correct: false, explanation: "Negative Kelvin values don't represent real classical temperatures at all. Kelvin's zero is a genuine physical floor, not a labeling choice." },
      { text: "Kelvin's zero point is absolute zero, the actual physical lowest possible temperature, so there's nothing colder to represent with a negative number", correct: true, explanation: "Correct. Celsius and Fahrenheit both have arbitrary zero points with colder temperatures existing below them (hence negative values). Kelvin's zero is the physical floor itself." },
      { text: "Kelvin only measures temperatures above room temperature", correct: false, explanation: "Kelvin measures the full range of temperatures, from near absolute zero up through extremely hot values — it isn't restricted to warm temperatures." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting room temperature to Kelvin (baseline case)</h3>
      <div className="prose-p">
      Room temperature, 20°C, converts to Kelvin as: 20 + 273.15 = 293.15 K. Notice the number is large — three digits instead of two — which is a normal feature of Kelvin values for everyday temperatures, not a sign of an error.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Converting absolute zero itself (edge case / variation)</h3>
      <div className="prose-p">
      Absolute zero is, by definition, 0 K. Converting to Celsius: °C = K − 273.15 = 0 − 273.15 = −273.15°C. This is the coldest temperature that exists in classical physics — nothing can be colder, which is exactly why Kelvin uses it as a zero point rather than an arbitrary reference like water freezing.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why scientific formulas require Kelvin, not Celsius (real-world / applied case)</h3>
      <div className="prose-p">
      The ideal gas law and many thermodynamic formulas depend on temperature *ratios*, not just differences. Consider doubling a gas&apos;s temperature at constant pressure: going from 20°C to 40°C looks like doubling on the Celsius scale, but in Kelvin it&apos;s actually 293.15 K to 313.15 K — an increase of less than 7%, nowhere near double. Using Celsius directly in a formula that assumes a true ratio would produce a badly wrong answer; only Kelvin&apos;s absolute zero makes &quot;doubling the temperature&quot; mean something physically real.
      </div>

      <QuickCheck
      question="A chemistry formula requires you to double the absolute temperature of a gas sample currently at 300 K. What temperature, in Celsius, does that correspond to?"
      options={[
      { text: "326.85°C (double 300 K to get 600 K, then convert back: 600 − 273.15 = 326.85°C)", correct: true, explanation: "Correct. 300 K doubled is 600 K. Converting back: 600 − 273.15 = 326.85°C. Doubling only makes physical sense on the absolute Kelvin scale, not directly in Celsius." },
      { text: "54°C (simply doubling the original Celsius value)", correct: false, explanation: "300 K is 26.85°C, and doubling that Celsius value directly doesn't correspond to physically doubling the absolute temperature — that's exactly the trap Kelvin's absolute zero is designed to avoid." },
      { text: "300°C, since doubling 300 K just moves the decimal the same way in Celsius", correct: false, explanation: "Kelvin and Celsius don't scale together this way — you must convert to Kelvin, perform the doubling, and convert back, not manipulate the Celsius number directly." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Celsius and Kelvin scales aligned, showing the fixed 273.15 offset"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-understanding-the-kelvin-scale-scale-alignment.svg"
      altText="A vertical number line running from absolute zero at the bottom to boiling water near the top, with two parallel scales marked alongside it. The left scale is Celsius, showing negative 273.15 at the bottom, 0 in the middle, and 100 near the top. The right scale is Kelvin, showing 0 at the very bottom aligned with Celsius's negative 273.15, 273.15 aligned with Celsius's 0, and 373.15 aligned with Celsius's 100 — both scales rise by identical step sizes, offset by a constant 273.15."
      />
      <p>
      Because the two scales rise in lockstep — one Kelvin step equals one Celsius step — the diagram&apos;s tick marks line up perfectly across both columns, just shifted by a constant 273.15. That constant shift, with no rescaling, is the entire Celsius-to-Kelvin conversion.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Writing Kelvin temperatures with a degree symbol (°K).", fix: "Kelvin values are written as plain numbers followed by \"K\" — e.g. 293 K, not 293°K. The unit itself already implies an absolute scale, so the degree symbol is dropped." },
      { mistake: "Treating a Celsius-to-Kelvin conversion like the Celsius-to-Fahrenheit one, and trying to apply a scaling factor.", fix: "Kelvin-Celsius conversion is addition only (K = °C + 273.15) — there's no multiplication step, since the two scales use identically sized degree intervals." },
      { mistake: "Doubling or halving a Celsius or Fahrenheit value and assuming that reflects a real doubling/halving of temperature.", fix: "Only Kelvin (or another absolute scale) supports meaningful ratio comparisons, because only it has a true zero. Convert to Kelvin first before doing any doubling/halving math." },
      ]}
      />
      <MisconceptionCallout
      myth="Kelvin is just Celsius with a different name, useful only for scientists showing off."
      reality={<p>Kelvin and Celsius use identically sized degree steps, but Kelvin&apos;s zero point is physically meaningful — the actual coldest possible temperature — while Celsius&apos;s zero is an arbitrary reference (water&apos;s freezing point). That difference is exactly why Kelvin, not Celsius, is required for any calculation involving a genuine ratio or ratio-based formula in physics and chemistry.</p>}
      />

      <QuickCheck
      question="Which statement correctly distinguishes Kelvin from Celsius?"
      options={[
      { text: "Kelvin degrees are smaller than Celsius degrees, similar to how Fahrenheit degrees are smaller", correct: false, explanation: "Kelvin and Celsius degree intervals are exactly the same size — this is different from the Fahrenheit case, where the degree interval genuinely is smaller." },
      { text: "Kelvin and Celsius have identically sized degree steps, but different zero points — Kelvin's zero is absolute zero, a real physical floor, while Celsius's zero is an arbitrary reference point", correct: true, explanation: "Correct. The step size is identical, which is why converting is pure addition. The zero points differ in a fundamental way: one is physically absolute, the other arbitrary." },
      { text: "Kelvin measures a different physical quantity than Celsius entirely", correct: false, explanation: "Both scales measure the same physical quantity, temperature — they differ only in where their zero point is placed and, in Fahrenheit's case, in degree size." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert Celsius to Kelvin"
      fields={[
      { key: "celsius", label: "Temperature (°C)", defaultValue: 20 },
      ]}
      resultLabel="Kelvin equivalent"
      formula="celsiusToKelvin"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Memorize the conversion as pure addition: K = °C + 273.15, no multiplication involved.",
      "Remember Kelvin values are always positive (or zero) in classical physics — a negative Kelvin reading signals an error, not a valid cold temperature.",
      "When a formula involves doubling, halving, or any ratio of temperatures, convert to Kelvin first — doing that math directly in Celsius or Fahrenheit gives a wrong answer.",
      "Drop the degree symbol when writing Kelvin values — it's \"293 K\", not \"293°K\".",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do you convert Celsius to Kelvin?", answer: "Add 273.15 to the Celsius value: K = °C + 273.15. Room temperature, 20°C, becomes 293.15 K." },
      { question: "Why doesn't Kelvin use a degree symbol?", answer: "Because Kelvin is an absolute scale defined directly by the SI system, its values are written as plain numbers with a \"K\" suffix (e.g. 293 K), not with the ° symbol used by relative scales like Celsius and Fahrenheit." },
      { question: "What is absolute zero in Celsius and Fahrenheit?", answer: "Absolute zero (0 K) equals −273.15°C and −459.67°F — the coldest temperature physically possible under classical physics." },
      { question: "Why do scientists use Kelvin instead of Celsius?", answer: "Because Kelvin has a true zero point, it supports meaningful ratio-based calculations (doubling, halving) that Celsius and Fahrenheit cannot support correctly, since their zero points are arbitrary rather than physically absolute." },
      { question: "Can a temperature ever be negative in Kelvin?", answer: "Not in classical physics — 0 K is the theoretical floor, so negative Kelvin values would represent something colder than absolute zero, which isn't physically possible." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
