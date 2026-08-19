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
  title: "Decimals Explained",
  category: "math-numbers",
  order: 7,
  subtopic: "number-basics",
  tags: ["decimals", "decimal point", "place value"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Decimals extend place value to the right of the decimal point — tenths, hundredths, thousandths — as just another way of writing fractions.",
  summary: "A decimal number uses a decimal point to represent fractional amounts (tenths, hundredths, and beyond) using the same place-value system as whole numbers.",
  sources: [
    { label: "Britannica — Decimal system", url: "https://www.britannica.com/science/decimal" },
    { label: "Khan Academy — Decimals", url: "https://www.khanacademy.org/math/arithmetic-home/arith-decimals" },
  ],
  seeAlso: [
    "math-numbers/place-value-and-number-systems",
    "math-numbers/fractions-explained",
    "math-numbers/percentages-explained",
    "math-numbers/estimation-and-rounding",
  ],
  glossary: [
    { term: "Decimal point", definition: "The dot that separates the whole-number part of a number from its fractional part." },
    { term: "Tenths place", definition: "The first position to the right of the decimal point, worth 1/10 per unit." },
    { term: "Terminating decimal", definition: "A decimal that ends after a finite number of digits, like 0.75." },
    { term: "Repeating decimal", definition: "A decimal where one or more digits repeat forever, like 0.333..." },
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
      "Decimals are place value extended past the ones place — tenths, hundredths, thousandths, each worth one-tenth of the position before it.",
      "Every decimal is just another way of writing a fraction; 0.75 and 3/4 are the exact same number.",
      "Lining up decimal points correctly is the single most important step when adding, subtracting, or comparing decimals.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/math-numbers/decimals-explained">decimal</TermLink> uses a dot to separate whole numbers from fractional parts. In 4.75, the &quot;4&quot; is four whole units, and &quot;.75&quot; is seventy-five hundredths more — the same amount as the fraction 3/4.</div>}
      detailed={<div className="prose-p">Decimals extend the base-10 place-value system symmetrically past the ones place: the first digit right of the decimal point is tenths (×1/10), the second is hundredths (×1/100), the third is thousandths (×1/1000), and so on, each position worth one-tenth of the position before it — a mirror image of how whole-number places each get ten times bigger moving left. Every decimal that terminates or repeats corresponds to exactly one rational number (a fraction of two integers); decimals that neither terminate nor repeat are, by definition, irrational — this is the precise dividing line covered in Types of Numbers.</div>}
      />
      <FootnoteAside>Different countries use different decimal separators — a period (4.75) in the US and UK, a comma (4,75) in much of continental Europe. Both represent the exact same mathematical concept, just written with a different symbol.</FootnoteAside>

      <div className="prose-p">
      Decimal arithmetic follows all the same rules as whole-number arithmetic, with one added requirement that trips people up constantly: keeping every place value correctly aligned.
      </div>

      <QuickCheck
      question="Which is larger: 0.5 or 0.45?"
      options={[
      { text: "0.45, because 45 is a bigger number than 5", correct: false, explanation: "Comparing the digits after the decimal point as if they were whole numbers ignores place value — 0.45 has more digits, but that doesn't make it bigger." },
      { text: "0.5, because 0.50 has a larger tenths digit than 0.45", correct: true, explanation: "Correct. 0.5 is the same as 0.50 — 5 tenths, which is larger than 0.45's 4 tenths, regardless of how many digits follow." },
      { text: "They're equal", correct: false, explanation: "They aren't — 0.5 = 0.500... and 0.45 = 0.450..., and comparing tenths first (5 vs 4) settles it before you even need to look further." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting a fraction to a decimal (baseline case)</h3>
      <div className="prose-p">
      3/8 converts to a decimal by dividing 3 ÷ 8 = 0.375. Going the other way, 0.375 converts back to a fraction as 375/1000, which simplifies (dividing by their HCF of 125) down to 3/8 — confirming they&apos;re the same number.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A decimal that never terminates or repeats cleanly (edge/variation case)</h3>
      <div className="prose-p">
      1/3 as a decimal is 0.333333..., repeating the 3 forever — this is still rational (it&apos;s exactly 1/3), just a repeating rather than terminating decimal. Compare that to √2 = 1.41421356..., which never settles into any repeating pattern at all — that non-repeating, non-terminating behavior is exactly what makes √2 irrational, not merely &quot;long.&quot;
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Adding decimals with different lengths (applied case)</h3>
      <div className="prose-p">
      Add 12.5 + 3.75. Line up the decimal points: 12.50 (padding with a zero to match lengths) plus 3.75 equals 16.25. The padding zero doesn&apos;t change 12.5&apos;s value — it just makes the columns line up cleanly, which is exactly the point of the alignment step.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Comparing decimals by counting digits instead of comparing place value by place value.", fix: "Compare left to right, one place at a time (tenths, then hundredths, etc.) — stop as soon as one digit is larger." },
      { mistake: "Misaligning decimal points when adding or subtracting by hand.", fix: "Always stack numbers so the decimal points line up vertically, padding shorter numbers with trailing zeros if needed." },
      { mistake: "Assuming every decimal is irrational just because it looks long.", fix: "Check whether it terminates or repeats — both are rational. Only non-terminating, non-repeating decimals are irrational." },
      ]}
      />
      <MisconceptionCallout
      myth="Adding a zero to the end of a decimal changes its value."
      reality={<p>Trailing zeros after the decimal point never change the value — 0.5, 0.50, and 0.500 are all exactly the same number. This differs from adding a zero to a whole number (5 vs 50), where position matters completely differently.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Practice converting five fractions to decimals by long division, and five decimals back to fractions.",
      "Next time you compare two decimals, compare digit by digit from the left rather than judging by length.",
      "Line up decimal points explicitly (on paper or mentally) before adding or subtracting any decimal numbers.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is a decimal number?", answer: "A number written using a decimal point to show a whole-number part and a fractional part, where each digit after the point represents a place value that's one-tenth of the position before it (tenths, hundredths, thousandths...)." },
      { question: "How do you convert a fraction to a decimal?", answer: "Divide the numerator by the denominator. 3/4 becomes 3÷4 = 0.75." },
      { question: "Is 0.5 the same as 0.50?", answer: "Yes, exactly the same value — trailing zeros after the last meaningful digit in a decimal never change what it represents." },
      { question: "Why do some decimals repeat forever?", answer: "This happens when the fraction's denominator, once fully reduced, has a prime factor other than 2 or 5 — those are the only two prime factors that produce clean, terminating decimals in base 10." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
