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
  title: "Place Value & Number Systems",
  category: "math-numbers",
  order: 2,
  subtopic: "number-basics",
  tags: ["place value", "number systems", "base 10", "decimal system"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why the position of a digit changes its value by exactly a factor of ten, and how that one rule is the entire engine behind every number you write.",
  summary: "Place value means a digit's value depends on where it sits in a number — each position is worth ten times the position to its right, which is what makes our base-10 (decimal) system work with just ten symbols.",
  sources: [
    { label: "NIST — Digital Library of Mathematical Functions, Numeration", url: "https://www.nist.gov/" },
    { label: "Britannica — Numeral systems", url: "https://www.britannica.com/science/numeral" },
    { label: "Khan Academy — Place value", url: "https://www.khanacademy.org/math/arithmetic-home/arith-review-place-value" },
  ],
  seeAlso: [
    "math-numbers/types-of-numbers-natural-whole-integers-rational-irrational",
    "math-numbers/decimals-explained",
    "math-numbers/number-systems-across-cultures-binary-hexadecimal-basics",
    "math-numbers/roman-numerals-explained",
  ],
  glossary: [
    { term: "Place value", definition: "The value a digit holds because of its position in a number, not because of the digit itself." },
    { term: "Base (radix)", definition: "The number of unique digits a number system uses before it rolls over to a new place — 10 for decimal, 2 for binary." },
    { term: "Positional system", definition: "A number system where a digit's value depends on its position, as opposed to systems like Roman numerals where symbols have fixed values." },
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
      "A digit's value is its face value multiplied by what its position is worth — the 3 in 300 means 3×100, not just \"three.\"",
      "Our decimal system is base-10 because it uses ten symbols (0-9) and each position is worth ten times the position to its right.",
      "Place value is what lets ten symbols represent every number that exists — without it you'd need a new symbol for every number, the way Roman numerals nearly do.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">In the number 4,582, the 4 isn&apos;t worth &quot;four&quot; — it&apos;s worth four thousand, because of where it sits. Move one place to the right and the same digit would be worth ten times less. This is <TermLink href="/math-numbers/place-value-and-number-systems">place value</TermLink>: each position in a number is worth exactly ten times the position immediately to its right, in our everyday decimal (base-10) system.</div>}
      detailed={<div className="prose-p">A <TermLink href="/math-numbers/place-value-and-number-systems">positional number system</TermLink> represents any number as a sum of digit × (base^position), counting positions from 0 starting at the rightmost digit. 4,582 in base 10 is 4×10³ + 5×10² + 8×10¹ + 2×10⁰. This is what &quot;base 10&quot; formally means — not just &quot;we like the number ten,&quot; but that each position&apos;s place value is a power of ten, and exactly ten distinct symbols (0-9) are needed before a position rolls over and increments the position to its left. Other bases work identically with a different multiplier: binary (base 2) uses powers of 2 and only the digits 0-1; hexadecimal (base 16) uses powers of 16 and digits 0-9 plus A-F for the extra six symbols needed.</div>}
      />
      <FootnoteAside>The place-value system used worldwide today is often called the Hindu-Arabic numeral system — developed in India by around the 6th century CE, refined by Persian and Arab mathematicians, and spread to Europe by the 12th-13th centuries, eventually replacing Roman numerals for calculation because positional place value makes arithmetic dramatically easier.</FootnoteAside>

      <div className="prose-p">
      The idea is simple once it clicks, but it&apos;s also the single most common source of arithmetic mistakes in early math — almost always because a digit gets lined up in the wrong column.
      </div>

      <QuickCheck
      question="In the number 3,047, what is the value of the digit 4?"
      options={[
      { text: "4", correct: false, explanation: "That's just the face value of the digit, ignoring its position. The 4 sits in the tens place, not the ones place." },
      { text: "40", correct: true, explanation: "Correct. Reading from the right, the positions are ones, tens, hundreds, thousands — the 4 is in the tens position, so it's worth 4 × 10 = 40." },
      { text: "400", correct: false, explanation: "That would be true if 4 were in the hundreds position, but the hundreds position in 3,047 is occupied by 0, not 4." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Breaking a number into place values (baseline case)</h3>
      <div className="prose-p">
      Take 7,296. From left to right: 7 is in the thousands place (7,000), 2 is in the hundreds place (200), 9 is in the tens place (90), and 6 is in the ones place (6). Add them up — 7,000 + 200 + 90 + 6 — and you get 7,296 back exactly. This &quot;expanded form&quot; is exactly how the number is built, digit by digit, position by position.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why zero as a placeholder matters (edge case)</h3>
      <div className="prose-p">
      Compare 405 and 45. They use the same three meaningful digits but mean completely different things, because the 0 in 405 is holding the tens place open so the 4 lands in the hundreds place instead of the tens place. Without a symbol for zero, positional notation doesn&apos;t work reliably — this is exactly why the invention of zero as a placeholder (independently by Mesoamerican, Indian, and other mathematical traditions) was a genuine breakthrough, not a trivial add-on.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Place value beyond the decimal point (applied case)</h3>
      <div className="prose-p">
      Place value doesn&apos;t stop at the ones place — it continues to the right of the decimal point with fractions of ten. In 12.34, the 3 is in the tenths place (3 × 1/10 = 0.3) and the 4 is in the hundredths place (4 × 1/100 = 0.04). This is exactly why aligning decimal points correctly matters so much when adding or comparing decimals: 12.34 + 1.2 is not 13.54 unless you line up the tenths with the tenths, not the last digit with the last digit.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="5,204 broken into place value columns"
      type="detail"
      svgSrc="/diagrams/math-numbers-place-value-and-number-systems-column-chart.svg"
      altText="The number 5,204 broken into place value columns: thousands, hundreds, tens, and ones, each shown with its column value"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Misaligning digits when adding or subtracting multi-digit numbers by hand.", fix: "Always line up the ones column with the ones column, regardless of how many digits each number has — pad shorter numbers with leading zeros mentally if it helps." },
      { mistake: "Reading a number's digits as just a sequence of separate values instead of positions.", fix: "Practice saying the place name out loud as you read each digit (\"seven thousand, two hundred, ninety, six\") until the position-to-value link becomes automatic." },
      { mistake: "Forgetting that a missing digit still needs a placeholder zero.", fix: "If a number has no hundreds, you still write 0 in that spot (e.g. 5,032, not 5,32) — the position must be held even when its value is zero." },
      { mistake: "Assuming place value only applies to whole numbers.", fix: "It extends symmetrically to the right of the decimal point: tenths, hundredths, thousandths — each worth one-tenth of the position to its left, mirroring the whole-number side." },
      ]}
      />
      <MisconceptionCallout
      myth="Base 10 is somehow mathematically special or required — it's just 'how numbers work.'"
      reality={<p>Base 10 is a human convention, almost certainly because we have ten fingers, not a mathematical necessity. Computers run entirely on base 2 (binary), and any base works equally well for representing every number that exists — the value of the number doesn&apos;t change, only how many symbols and positions it takes to write it down.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Break a number into its place values"
      fields={[
      { key: "wholeNumber", label: "Enter a whole number", defaultValue: 4582 },
      ]}
      resultLabel="Value of the thousands digit alone"
      formula="thousandsPlaceValue"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Pick any multi-digit number around you (a price, a phone number, an address) and say each digit's full place value out loud.",
      "Next time you add or subtract by hand, deliberately check that every column is aligned by place value before calculating.",
      "Try writing a familiar number in expanded form (e.g. 500 + 30 + 2) to double-check you understand what each digit is contributing.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is place value in math?", answer: "Place value is the value a digit represents because of its position in a number. In 528, the 5 is worth 500 because it sits in the hundreds place, not because \"5\" inherently means 500." },
      { question: "Why is our number system called base 10?", answer: "Because it uses exactly ten unique digits (0 through 9) and each position is worth ten times the position to its right — the base is the number of symbols and the size of the multiplier between positions." },
      { question: "Does place value work the same way for decimals?", answer: "Yes, mirrored around the decimal point. Positions to the left of the decimal are ones, tens, hundreds (increasing by ×10); positions to the right are tenths, hundredths, thousandths (decreasing by ÷10)." },
      { question: "Why do we need zero in a place-value system?", answer: "Zero acts as a placeholder that keeps every other digit in its correct position. Without it, 105 and 15 would be impossible to tell apart using position alone." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
