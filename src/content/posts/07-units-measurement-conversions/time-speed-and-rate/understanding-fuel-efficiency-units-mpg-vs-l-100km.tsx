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
  title: "Understanding Fuel Efficiency Units (mpg vs L/100km)",
  category: "units-measurement-conversions",
  order: 36,
  subtopic: "time-speed-and-rate",
  tags: [
    "fuel efficiency",
    "mpg",
    "L/100km",
    "unit rate",
    "fuel economy",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "mpg and L/100km don't just use different units — they measure fuel economy in opposite directions, so a bigger mpg number is good but a bigger L/100km number is bad.",
  summary: "Miles per gallon (mpg) measures distance covered per unit of fuel, so a higher number means better efficiency, while liters per 100 kilometers (L/100km) measures fuel consumed per unit of distance, so a lower number means better efficiency — the two scales are structurally inverses of each other, not just different units on the same scale.",
  sources: [
    { label: "U.S. Environmental Protection Agency — Fuel Economy Basics", url: "https://www.fueleconomy.gov/" },
    { label: "NIST — Guide for the Use of the International System of Units (SI)", url: "https://www.nist.gov/pml/special-publication-811" },
    { label: "Natural Resources Canada — Fuel Consumption Ratings", url: "https://natural-resources.canada.ca/energy-efficiency" },
  ],
  seeAlso: [
    "units-measurement-conversions/liters-vs-gallons-everyday-conversion",
    "units-measurement-conversions/mph-vs-kmh-vs-knots",
    "units-measurement-conversions/understanding-unit-rates-price-per-item-speed-pace",
  ],
  glossary: [
    {"term":"mpg (miles per gallon)","definition":"A fuel-efficiency unit measuring distance traveled per unit of fuel consumed — a higher mpg value means better efficiency."},
    {"term":"L/100km","definition":"A fuel-consumption unit measuring liters of fuel consumed per 100 kilometers traveled — a lower value means better efficiency, the inverse relationship of mpg."},
    {"term":"Inverse relationship","definition":"A relationship where one quantity increases as another decreases — here, better fuel efficiency pushes mpg up but pushes L/100km down."},
    {"term":"US gallon vs imperial gallon","definition":"Two different gallon definitions (US: 3.78541 liters; imperial/UK: 4.54609 liters) that must be distinguished when converting an mpg figure, since a US mpg and a UK/imperial mpg for the same car are different numbers."},
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
      "mpg measures distance-per-fuel (miles you get from a gallon), so a higher mpg number means better efficiency — while L/100km measures fuel-per-distance (liters burned over 100 km), so a lower number means better efficiency.",
      "Converting between the two isn't a simple multiplication like most unit conversions — because one is a 'the more the better' scale and the other is 'the less the better,' the conversion formula involves dividing a constant by the value, not multiplying by a fixed factor.",
      "The mpg-to-L/100km conversion constant (235.214) is specific to the US gallon — using it on a UK/imperial mpg figure, which is based on a larger gallon, gives a wrong answer.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p"><TermLink href="/units-measurement-conversions/understanding-fuel-efficiency-units-mpg-vs-l-100km">mpg</TermLink> asks &quot;how far can I go on one gallon&quot; — so a car that gets 40 mpg is more efficient than one that gets 25 mpg, because it travels farther on the same amount of fuel. <TermLink href="/units-measurement-conversions/understanding-fuel-efficiency-units-mpg-vs-l-100km">L/100km</TermLink> asks the opposite question: &quot;how much fuel do I burn to cover a fixed distance&quot; — so a car rated at 6 L/100km is more efficient than one rated at 10 L/100km, because it burns less fuel to go the same distance. Same real-world efficiency, but one scale goes up as efficiency improves and the other goes down.</div>}
      detailed={<div className="prose-p">This isn&apos;t a coincidence of two independently chosen scales — it&apos;s a direct consequence of what&apos;s held fixed in the ratio. mpg fixes the fuel amount (one gallon) and measures the variable distance you get from it, so more distance (a bigger number) is the win condition. L/100km fixes the distance (100 kilometers) and measures the variable fuel needed to cover it, so less fuel (a smaller number) is the win condition. Converting between an &quot;amount per fixed unit&quot; scale and its &quot;fixed unit per amount&quot; inverse requires a reciprocal-style formula rather than a straight multiplication: L/100km ≈ 235.214 ÷ mpg, where 235.214 is a constant built from the US gallon-to-liter and mile-to-kilometer conversion factors (100 × 3.78541 ÷ 1.60934 ≈ 235.214). This is genuinely different math from a length or weight conversion, which is always a straight multiplication by a fixed factor — it&apos;s why this pairing deserves its own dedicated attention rather than treating it as &quot;just another unit conversion.&quot;</div>}
      />
      <FootnoteAside>The UK still commonly advertises fuel economy in mpg, but using the imperial gallon (4.54609 liters) rather than the US gallon (3.78541 liters) — meaning a car advertised at &quot;40 mpg&quot; in the UK is actually more fuel-efficient than a US car advertised at &quot;40 mpg,&quot; since the UK gallon is about 20% larger. The two mpg figures are not directly comparable without first converting both through their respective gallon definitions.</FootnoteAside>

      <p>
      Because the relationship between the two units is a reciprocal rather than a fixed multiplier, it&apos;s worth working through the actual numbers rather than trying to eyeball a rough equivalence.
      </p>

      <QuickCheck
      question="A car's fuel efficiency improves. What happens to its mpg number, and what happens to its L/100km number?"
      options={[
      { text: "Both numbers go up, since efficiency improved", correct: false, explanation: "mpg does go up as efficiency improves, but L/100km moves the opposite direction — down — since better efficiency means less fuel burned per fixed distance." },
      { text: "mpg goes up (more distance per gallon) and L/100km goes down (less fuel per fixed distance) — the two scales move in opposite directions for the same improvement", correct: true, explanation: "Correct. mpg measures distance-per-fuel, so improvement raises the number. L/100km measures fuel-per-distance, so improvement lowers the number. Both correctly describe the same real-world improvement, just from opposite directions." },
      { text: "Both numbers go down, since less fuel is now needed overall", correct: false, explanation: "L/100km does go down with improved efficiency, but mpg moves the opposite direction — up — since a more efficient car covers more distance per gallon, not less." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting a typical sedan&apos;s mpg to L/100km (baseline case)</h3>
      <div className="prose-p">
      A sedan is rated at 30 mpg (US). Converting: 235.214 ÷ 30 ≈ 7.84 L/100km. This means the car burns about 7.84 liters of fuel for every 100 kilometers driven — a single division, not a multiplication, because of the reciprocal relationship between the two scales.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A highly efficient hybrid, and why the gap narrows at high mpg (edge case / variation)</h3>
      <div className="prose-p">
      A hybrid rated at 55 mpg converts to 235.214 ÷ 55 ≈ 4.28 L/100km. Compare the jump from 30→55 mpg (a 25 mpg improvement, roughly +83%) against the L/100km change: 7.84 → 4.28, a drop of only about 3.56 L/100km. Because of the reciprocal relationship, equal mpg improvements matter much less at the high end of the mpg scale than at the low end — going from 10 mpg to 20 mpg saves far more real fuel (over a fixed distance) than going from 40 mpg to 50 mpg, even though both are &quot;+10 mpg.&quot; This is a well-documented real-world planning trap: mpg improvements look linear but their actual fuel-savings impact is not.
      </div>

      <QuickCheck
      question="Which fuel-efficiency improvement saves more actual fuel over 10,000 miles of driving: going from 10 mpg to 20 mpg, or going from 40 mpg to 50 mpg?"
      options={[
      { text: "They save the same amount, since both are a +10 mpg improvement", correct: false, explanation: "Because mpg and fuel consumed are in a reciprocal relationship, equal mpg gains do not translate to equal fuel savings — the lower starting mpg produces dramatically more real savings." },
      { text: "Going from 10 mpg to 20 mpg saves far more actual fuel, even though the mpg increase (+10) is identical in both cases", correct: true, explanation: "Correct. At 10 mpg, 10,000 miles burns 1,000 gallons; at 20 mpg, it burns 500 gallons — a 500-gallon savings. At 40 mpg it burns 250 gallons; at 50 mpg, 200 gallons — only a 50-gallon savings. The reciprocal relationship means low-mpg improvements matter far more in absolute fuel terms." },
      { text: "Going from 40 mpg to 50 mpg saves more, since the vehicles are already more efficient to begin with", correct: false, explanation: "The opposite is true — the reciprocal relationship between mpg and actual fuel consumed means gains at the already-efficient end of the scale yield much smaller real savings than the same mpg gain lower on the scale." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Comparing a US mpg spec sheet to a European L/100km spec sheet (real-world / applied case)</h3>
      <div className="prose-p">
      A shopper researching the same car model finds a US listing quoting 32 mpg and a European listing quoting 8.5 L/100km, and wants to know if they&apos;re looking at the same trim. Converting the European figure: 235.214 ÷ 8.5 ≈ 27.67 mpg — noticeably lower than the US-listed 32 mpg, suggesting either a different engine trim, different testing standard (EPA vs. WLTP), or a rounding/unit mixup worth double-checking before assuming they&apos;re the same vehicle configuration.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="mpg and L/100km move in opposite directions for the same efficiency change"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-understanding-fuel-efficiency-units-mpg-vs-l-100km-inverse-scale.svg"
      altText="A diagram with two opposing arrows: the top arrow labeled mpg points right with 'higher is better' and shows 20, 30, 40, 50 increasing left to right, the bottom arrow labeled L per 100km points right with 'lower is better' and shows corresponding values 11.8, 7.8, 5.9, 4.7 decreasing left to right, illustrating the two systems run in opposite directions for the same efficiency"
      />
      <p>
      Reading straight down at any point on the mpg scale lands on the equivalent L/100km value — but climbing the mpg scale (more efficient) means descending the L/100km scale, which is the entire reason these two units can&apos;t be converted with a simple multiplication factor the way most unit pairs can.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Trying to convert mpg to L/100km with a simple multiplication factor, the way most other unit conversions work.", fix: "Use the reciprocal formula, L/100km ≈ 235.214 ÷ mpg — this pairing genuinely requires division, not multiplication, because the two scales measure the ratio in opposite directions." },
      { mistake: "Assuming equal mpg improvements (e.g. +10 mpg) always represent equal real fuel savings.", fix: "Because of the reciprocal relationship, the same mpg gain saves far more actual fuel at the low end of the scale than at the high end — compare total fuel burned over a fixed distance, not the raw mpg difference." },
      { mistake: "Using the US-gallon conversion constant (235.214) on a UK/imperial mpg figure.", fix: "The imperial gallon is about 20% larger than the US gallon — confirm which gallon a given mpg figure is based on before applying a conversion constant." },
      ]}
      />
      <MisconceptionCallout
      myth="A car that improves from 40 mpg to 50 mpg saves about the same fuel as one that improves from 10 mpg to 20 mpg, since both gained '10 mpg.'"
      reality={<p>Because mpg and actual fuel consumption are related by a reciprocal, not a straight line, equal mpg gains represent wildly different real savings depending on where they happen on the scale. Over 10,000 miles, 10→20 mpg saves 500 gallons of fuel, while 40→50 mpg saves only 50 gallons — a tenfold difference in real-world impact from an identically sized &quot;+10 mpg&quot; improvement.</p>}
      />

      <QuickCheck
      question="Why can't mpg and L/100km be converted using a fixed multiplication factor the way miles and kilometers can?"
      options={[
      { text: "Because mpg and L/100km measure completely unrelated physical quantities", correct: false, explanation: "Both units genuinely measure fuel efficiency — they're just structured as inverses of each other (distance-per-fuel vs. fuel-per-distance), not unrelated quantities." },
      { text: "Because one unit measures distance-per-fuel (bigger is better) and the other measures fuel-per-distance (smaller is better) — converting between an inverse pair requires dividing a constant by the value, not multiplying by a fixed factor", correct: true, explanation: "Correct. Miles-to-kilometers is a straightforward multiplication because both measure the same direction (distance itself). mpg and L/100km measure a ratio in opposite directions, which structurally requires a reciprocal formula to convert correctly." },
      { text: "Because mpg is only used in the US and L/100km is only used everywhere else, so no real conversion is needed", correct: false, explanation: "While regional usage does differ, a real mathematical conversion between the two units exists and is needed whenever comparing specs across regions — the difference in usage doesn't remove the need for the reciprocal formula." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert US mpg to L/100km"
      fields={[
      { key: "mpg", label: "Fuel economy (US mpg)", defaultValue: 30 },
      ]}
      resultLabel="Fuel consumption (L/100km)"
      formula="mpgToLPer100km"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Use the calculator above with the reciprocal formula (235.214 ÷ mpg) rather than trying to estimate a straight-line conversion.",
      "When comparing mpg improvements, calculate actual fuel burned over a fixed distance (like 10,000 miles) rather than comparing raw mpg numbers — the real savings aren't linear.",
      "Confirm whether an mpg figure uses the US gallon or the imperial gallon before converting or comparing it to another source.",
      "For any cross-region car-shopping comparison, convert both figures into the same unit (either both to mpg or both to L/100km) before judging which is actually more efficient.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do you convert mpg to L/100km?", answer: "Divide 235.214 by the mpg value (for US gallons): L/100km = 235.214 ÷ mpg. Example: 30 mpg → 235.214 ÷ 30 ≈ 7.84 L/100km." },
      { question: "Is a higher or lower L/100km number better?", answer: "Lower is better for L/100km — it means less fuel is consumed to cover the same 100-kilometer distance, the opposite direction from mpg, where higher is better." },
      { question: "Why isn't converting mpg to L/100km a simple multiplication like other unit conversions?", answer: "Because mpg (distance per fixed fuel amount) and L/100km (fuel per fixed distance) are structural inverses of each other, not two units measuring the same direction — converting between them requires a reciprocal (division) formula, not a fixed multiplier." },
      { question: "Does going from 40 mpg to 50 mpg save as much fuel as going from 20 mpg to 30 mpg?", answer: "No. Because of the reciprocal relationship between mpg and actual fuel burned, the same numeric mpg gain saves far more real fuel at the lower end of the scale — 20→30 mpg saves roughly three times more fuel over a fixed distance than 40→50 mpg does." },
      { question: "Is UK mpg the same as US mpg?", answer: "No. UK/imperial mpg is based on the imperial gallon (4.54609 liters), which is about 20% larger than the US gallon (3.78541 liters) — the same car will show a higher mpg number under the UK measurement than under the US one." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
