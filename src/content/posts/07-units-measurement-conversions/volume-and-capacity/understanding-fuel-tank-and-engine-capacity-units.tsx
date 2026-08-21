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
  title: "Understanding Fuel Tank & Engine Capacity Units",
  category: "units-measurement-conversions",
  order: 21,
  subtopic: "volume-and-capacity",
  tags: ["engine displacement", "fuel tank capacity", "liters", "cubic centimeters", "cubic inches"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A classic \"350\" V8 and a modern \"5.7-liter\" V8 can be the exact same engine — cubic inches, cubic centimeters, and liters are three different labels for identical displacement.",
  summary: "Engine displacement and fuel tank size are both volume measurements that get quoted in different unit systems depending on era and country — liters and cubic centimeters (metric) and cubic inches (older US convention) — and converting between them is ordinary unit conversion, not a difference in what's actually being measured.",
  sources: [
    { label: "NIST — Handbook 44, Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices", url: "https://www.nist.gov/pml/owm/publications/nist-handbook-44" },
    { label: "US Department of Energy — Fuel Economy and Vehicle Specifications", url: "https://www.fueleconomy.gov/" },
    { label: "Encyclopaedia Britannica — Internal combustion engine", url: "https://www.britannica.com/technology/internal-combustion-engine" },
  ],
  seeAlso: [
    "units-measurement-conversions/liters-vs-gallons-everyday-conversion",
    "units-measurement-conversions/fluid-ounces-us-vs-uk-differences",
    "math-numbers/unit-conversions-length-weight-volume",
  ],
  glossary: [
    {"term":"Engine displacement","definition":"The total volume swept by all of an engine's pistons in one complete cycle, used as a rough proxy for engine size and power potential, expressed in liters, cubic centimeters, or cubic inches."},
    {"term":"Cubic centimeter (cc)","definition":"A metric volume unit equal to one thousandth of a liter, commonly used for motorcycle and small engine displacement."},
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
      "Engine displacement and fuel tank size are both volume measurements — converting between liters, cubic centimeters, and cubic inches is ordinary unit conversion, not a difference in the underlying quantity.",
      "1 liter = 1,000 cubic centimeters (cc) exactly, since both are metric; 1 cubic inch = 16.387 cc, a fixed non-metric conversion factor.",
      "A classic American 'small block 350' engine (350 cubic inches) and a modern '5.7-liter' engine spec describe the same displacement — 350 × 16.387 ≈ 5,735 cc ≈ 5.7 liters — just using two different unit-era conventions.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A car&apos;s fuel tank size and its <TermLink href="/units-measurement-conversions/understanding-fuel-tank-and-engine-capacity-units">engine displacement</TermLink> are both just volumes, described using whichever unit system was standard for that market and era. European and modern specs use liters directly; older American muscle-car specs used cubic inches; motorcycles and small engines commonly use <TermLink href="/units-measurement-conversions/understanding-fuel-tank-and-engine-capacity-units">cubic centimeters</TermLink>. They all describe the same physical thing — how much volume the engine&apos;s cylinders sweep, or how much fuel the tank holds — just labeled differently.</div>}
      detailed={<div className="prose-p">Displacement is the combined swept volume of every cylinder over one full stroke — for a 4-cylinder engine, it&apos;s 4 times the volume one piston sweeps as it travels from the bottom to the top of its cylinder. Converting between systems: 1,000 cc = 1 liter (both metric, so this is exact and unit-less beyond a decimal shift), and 1 cubic inch = 16.387064 cubic centimeters (a fixed, non-round conversion factor, since the inch and the centimeter were never designed to relate cleanly). This is why an American &quot;350&quot; (350 cubic inches) becomes an oddly specific-looking &quot;5.7 liters&quot; once converted — 350 × 16.387 ≈ 5,735 cc, which rounds to the marketing-friendly 5.7 L. Fuel tank capacity works the same way: it&apos;s just volume, converted with the ordinary liter-to-gallon factor covered in unit conversion basics, with no engine-specific wrinkle at all.</div>}
      />
      <FootnoteAside>Motorcycle and small-engine displacement is almost always given directly in cc even in the US (a &quot;600cc sportbike&quot;), while full-size car engines flipped to liters in US marketing sometime in the 1970s-80s — both conventions coexist today depending on vehicle category, which is why the unit itself is a clue to what kind of vehicle is being described.</FootnoteAside>

      <p>
      The one place this trips people up in practice is when comparing specs pulled from sources of different eras or regions without first converting them to a common unit.
      </p>

      <QuickCheck
      question="A car enthusiast forum debates whether a '454' engine (454 cubic inches) or a '7.4-liter' engine is bigger. What's the actual answer?"
      options={[
      { text: "The 7.4-liter engine is bigger, since 7.4 is a larger number than 454 in its own unit", correct: false, explanation: "Comparing raw numbers across different units doesn't tell you anything — 454 cubic inches and 7.4 liters need to be converted to the same unit before comparing." },
      { text: "They're the same engine — 454 cubic inches × 16.387 ≈ 7,440 cc ≈ 7.4 liters, just described in two different unit conventions", correct: true, explanation: "Correct. This is the classic Chevrolet 454 big-block V8, marketed in cubic inches in its original era and commonly referred to by its metric-equivalent '7.4 liters' today." },
      { text: "It's impossible to know without more information about the specific engine", correct: false, explanation: "The conversion factor (1 cubic inch = 16.387 cc) is fixed and well known, so 454 cubic inches converts unambiguously to about 7.4 liters — no extra information is needed." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting a 2.0-liter engine to cubic inches (baseline case)</h3>
      <div className="prose-p">
      A common modern engine size is 2.0 liters = 2,000 cc. Converting to cubic inches: 2,000 ÷ 16.387 ≈ 122.05 cubic inches — close to the &quot;122&quot; figure sometimes seen on older US spec sheets for similarly sized four-cylinder engines.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A motorcycle spec sheet mixing cc and liters within the same market (edge case / variation)</h3>
      <div className="prose-p">
      A 600cc sportbike and a 1.0-liter (1,000cc) sportbike are both sold in the same US showroom, with the smaller bike quoted in cc and the larger one sometimes quoted in liters. Converting both to the same unit for comparison: 600 cc = 0.6 L, and 1.0 L = 1,000 cc — so the &quot;1.0-liter&quot; bike has 1,000 ÷ 600 ≈ 1.67 times the displacement of the &quot;600cc&quot; bike, a genuine and large difference that&apos;s easy to underestimate if you don&apos;t first convert both figures to the same unit.
      </div>

      <QuickCheck
      question="Why might a shopper underestimate the displacement gap between a '600cc' motorcycle and a '1.0-liter' motorcycle?"
      options={[
      { text: "Because 600 and 1.0 look like similar-sized numbers at a glance, even though they're in different units (cc vs. liters) representing a real 67% displacement difference", correct: true, explanation: "Correct. 600 cc = 0.6 L, so the '1.0-liter' bike is actually about 67% larger in displacement — the raw numbers (600 vs. 1.0) don't visually suggest that gap unless converted to the same unit." },
      { text: "Because cc and liters actually measure completely different physical properties", correct: false, explanation: "Both cc and liters measure the same physical property (volume) — they're just different scales of the same metric unit, related by a factor of 1,000." },
      { text: "There's no real risk of underestimating anything here, since both numbers are already directly comparable as written", correct: false, explanation: "They aren't directly comparable as written — 600 (in cc) and 1.0 (in liters) need to be converted to the same unit before any size comparison is meaningful." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Sizing a fuel tank for a cross-border road trip (real-world / applied case)</h3>
      <div className="prose-p">
      A US driver rents a European car with a fuel tank listed as 55 liters. Converting to a more familiar US gallon figure: 55 ÷ 3.78541 ≈ 14.53 US gallons — useful context for estimating range and how often to expect a fill-up compared to a typical US sedan&apos;s roughly 12-16 gallon tank. Without converting, &quot;55&quot; on its own gives no usable intuition to a US driver used to thinking in gallons.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The same engine displacement in three unit systems"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-understanding-fuel-tank-and-engine-capacity-units-displacement-chain.svg"
      altText="A horizontal chain showing an engine's displacement expressed in three equivalent unit systems: 350 cubic inches equals 5735 cubic centimeters equals 5.7 liters, illustrating how the same classic American V8 engine is described differently depending on which unit system the source uses."
      />
      <p>
      All three boxes describe the identical physical engine — the diagram exists specifically to make the point that changing the unit label doesn&apos;t change what&apos;s inside the block.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Comparing a cc figure and a liter figure without converting them to the same unit first.", fix: "Convert to a common unit before comparing — remember 1,000 cc = 1 liter." },
      { mistake: "Assuming a cubic-inch spec from an older source can't be compared to a modern liter spec.", fix: "Use the fixed factor 1 cubic inch = 16.387 cc (then divide by 1,000 for liters) — it converts cleanly regardless of era." },
      { mistake: "Assuming bigger displacement numbers always mean a bigger real-world engine when units differ.", fix: "Check the unit before comparing numbers — '600' (cc) is smaller than '1.0' (liters), not bigger, despite looking like the larger digit sequence." },
      ]}
      />
      <MisconceptionCallout
      myth="Engines measured in cubic inches, cc, and liters are fundamentally different kinds of specifications that can't be directly compared."
      reality={<p>All three are simply volume measurements of the same physical quantity — displacement — expressed in different unit systems. A cubic-inch spec from a 1970s American muscle car and a liter spec from a modern engine both describe swept cylinder volume, and convert cleanly into each other with fixed factors (1 cubic inch = 16.387 cc, 1,000 cc = 1 liter). There is no separate &quot;cubic-inch kind of displacement&quot; distinct from a &quot;liter kind.&quot;</p>}
      />

      <QuickCheck
      question="Someone claims a '5.0-liter' modern engine and a '302 cubic inch' classic engine 'measure completely different things' and can't be compared. Is this correct?"
      options={[
      { text: "Yes — cubic inches and liters describe fundamentally different engine properties", correct: false, explanation: "Both are volume units describing the exact same physical property (swept cylinder displacement) — they are directly convertible, not different properties." },
      { text: "No — both are volume units measuring the same thing (displacement); 302 cubic inches × 16.387 ≈ 4,949 cc ≈ 4.9-5.0 liters, so these are effectively the same-sized engine described in two eras' conventions", correct: true, explanation: "Correct. This is in fact the famous Ford 302 (5.0L) small-block — the two labels refer to the same real-world engine size." },
      { text: "It's impossible to say without knowing the engine's horsepower rating", correct: false, explanation: "Horsepower isn't needed to answer a pure unit-conversion question — displacement in cubic inches converts to liters using a fixed, well-established factor regardless of power output." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert a value using a fixed conversion factor (e.g. cubic inches to cc)"
      fields={[
      { key: "value", label: "Value to convert", defaultValue: 350 },
      { key: "conversionFactor", label: "Conversion factor (16.387 for cu in -> cc, 0.001 for cc -> L)", defaultValue: 16.387, step: 0.001 },
      ]}
      resultLabel="Converted value"
      formula="unitConversionByFactor"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Remember 1,000 cc = 1 liter exactly, and 1 cubic inch = 16.387 cc.",
      "Always convert engine specs to the same unit before comparing displacement across eras or markets.",
      "When renting or researching a foreign-market vehicle, convert its liter-based fuel tank size to gallons for an intuitive sense of range.",
      "Use the calculator above with the correct factor for the two units you're actually comparing.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How many cc are in a liter?", answer: "Exactly 1,000 cc make 1 liter, since both are metric units related by a clean power of ten." },
      { question: "How do you convert cubic inches to liters for an engine?", answer: "Multiply cubic inches by 16.387 to get cubic centimeters, then divide by 1,000 to get liters. A 350 cubic inch engine converts to about 5.7 liters." },
      { question: "Is a bigger cc number always a bigger engine than a liter number?", answer: "Not necessarily — you have to convert both to the same unit first. A '600cc' engine (0.6 L) is smaller than a '1.0-liter' (1,000cc) engine, even though 600 looks like a bigger raw number." },
      { question: "Why do old American cars use cubic inches instead of liters for engine size?", answer: "The US used cubic inches as its standard displacement unit before widespread adoption of metric marketing conventions in the 1970s-80s; many classic engine nicknames (like the '350' or '454') are still named after their cubic-inch displacement." },
      { question: "How do I convert a European car's fuel tank size from liters to gallons?", answer: "Divide the liter figure by 3.78541 for US gallons, or by 4.54609 for UK imperial gallons." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
