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
  title: "Binary & Decimal Number Systems for Beginners",
  category: "units-measurement-conversions",
  order: 44,
  subtopic: "data-numbers-and-everyday-conversions",
  tags: [
    "binary numbers",
    "decimal system",
    "place value",
    "number systems",
    "computing basics",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Decimal and binary are the same idea — columns worth increasing powers of a base number — just with a different base, which is why every digital storage unit in this topic ultimately traces back to base 2.",
  summary: "Binary (base 2) and decimal (base 10) are both place-value number systems that represent quantities using columns worth increasing powers of their base; decimal uses ten digits and powers of ten, binary uses two digits and powers of two, and the same place-value logic converts between them.",
  sources: [
    { label: "NIST — Physical Measurement Laboratory", url: "https://www.nist.gov/pml" },
    { label: "Encyclopaedia Britannica — Numeral System", url: "https://www.britannica.com/science/numeral" },
  ],
  seeAlso: [
    "units-measurement-conversions/digital-storage-units-bytes-to-terabytes",
    "math-numbers/place-value-and-number-systems",
    "math-numbers/roman-numerals-explained",
  ],
  glossary: [
    {"term":"Place value","definition":"The principle that a digit's contribution to a number's total value depends on its position (column), with each column worth a fixed multiple — a power of the number system's base — of the column to its right."},
    {"term":"Base (radix)","definition":"The number of distinct digits a number system uses before it 'carries' into a new column — 10 for decimal (digits 0-9), 2 for binary (digits 0-1)."},
    {"term":"Bit","definition":"A single binary digit, either 0 or 1 — the smallest unit of information in a binary number system and in digital computing."},
    {"term":"Binary-coded value","definition":"A number expressed using only the digits 0 and 1, with each column worth a power of two (1, 2, 4, 8, 16...) instead of a power of ten."},
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
      "Decimal and binary are both place-value systems — a digit's value depends on which column it sits in — they just use a different base: 10 for decimal, 2 for binary.",
      "In binary, each column is worth a power of two (1, 2, 4, 8, 16, 32...) instead of a power of ten (1, 10, 100, 1000...), and only two digits, 0 and 1, exist to fill each column.",
      "Computers use binary because a transistor's two stable electrical states (on/off, high/low voltage) map naturally onto two digits — every digital storage and speed unit covered elsewhere in this topic ultimately traces back to this base-2 foundation.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Decimal counts in groups of ten — after digit 9, you carry into a new column. Binary counts in groups of two — after digit 1, you immediately carry into a new column. Both are <TermLink href="/units-measurement-conversions/binary-and-decimal-number-systems-for-beginners">place value</TermLink> systems; only the size of each group (the <TermLink href="/units-measurement-conversions/binary-and-decimal-number-systems-for-beginners">base</TermLink>) changes.</div>}
      detailed={<div className="prose-p">In decimal, the column values reading right to left are powers of ten: 1, 10, 100, 1,000. The number present in each column tells you how many of that power of ten to add — present digits are all telling you a count between 0 and 9. In binary, the column values are powers of two: 1, 2, 4, 8, 16, 32, 64, 128. Because only two digits exist (0 and 1), each column is either &quot;on&quot; (contributes its full value) or &quot;off&quot; (contributes nothing) — there&apos;s no in-between count the way decimal&apos;s 0-9 allows. This on/off nature is exactly why computers use binary: a transistor is most reliably built with two stable states (conducting or not, high voltage or low), so representing information as a sequence of two-state <TermLink href="/units-measurement-conversions/binary-and-decimal-number-systems-for-beginners">bit</TermLink>s maps directly onto the physical hardware, without needing ten distinguishable voltage levels the way a decimal computer would.</div>}
      />
      <FootnoteAside>Other bases show up in computing too — hexadecimal (base 16) is common in programming because each hex digit maps cleanly onto exactly 4 binary digits, making long binary strings far more compact to read and write by hand.</FootnoteAside>

      <p>
      The mechanical process for converting between the two systems is the same regardless of direction — decode each column&apos;s contribution and add them up, or repeatedly divide to find which columns should be &quot;on.&quot;
      </p>

      <QuickCheck
      question="In binary, why is there no digit '2'?"
      options={[
      { text: "There's no particular reason — it's an arbitrary convention that could have used more digits", correct: false, explanation: "It's not arbitrary. Binary is defined as base 2, meaning exactly two digits (0 and 1) exist before a column carries over — a '2' would immediately need to become '10' (one 2s-column, zero 1s-column), the same way decimal's 'ten' becomes '10' rather than staying a single digit." },
      { text: "Because binary only has two digits by definition (0 and 1) — reaching a value of two means carrying into the next column, producing '10' in binary, just as reaching ten in decimal produces '10' by carrying into the tens column", correct: true, explanation: "Correct. This is the direct binary analog of why decimal has no single digit for 'ten' — the base defines exactly how many digits exist before a carry is required." },
      { text: "Binary does have a digit for 2, it's just written differently on computers", correct: false, explanation: "Binary strictly uses only 0 and 1 as digits — there is no alternate symbol for 2 in binary notation; the value two is always represented as '10' (one 2s-column)." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Reading a binary number&apos;s decimal value (baseline case)</h3>
      <div className="prose-p">
      Binary 1101, read right to left, sits in the 1s, 2s, 4s, and 8s columns: 1×8 + 1×4 + 0×2 + 1×1 = 8 + 4 + 0 + 1 = 13. Each &quot;1&quot; digit means &quot;include this column&apos;s full value&quot;; each &quot;0&quot; means &quot;skip it entirely.&quot;
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Converting a decimal number into binary (edge case / variation)</h3>
      <div className="prose-p">
      Convert decimal 25 to binary using repeated division by 2, recording remainders: 25÷2 = 12 remainder 1; 12÷2 = 6 remainder 0; 6÷2 = 3 remainder 0; 3÷2 = 1 remainder 1; 1÷2 = 0 remainder 1. Reading the remainders bottom-to-top gives 11001. Checking: 1×16 + 1×8 + 0×4 + 0×2 + 1×1 = 16+8+0+0+1 = 25. This division method works for converting a decimal number into any base — divide by the target base repeatedly and read the remainders in reverse.
      </div>

      <QuickCheck
      question="When converting decimal 25 to binary by repeated division, why are the remainders read from bottom to top rather than top to bottom?"
      options={[
      { text: "It's an arbitrary convention with no mathematical reason", correct: false, explanation: "It's not arbitrary — it follows directly from which end of the number each division step actually determines." },
      { text: "The first division finds the smallest-value column (the 1s column) first, and each later division finds a progressively larger column — so reading bottom-to-top lists the columns from largest to smallest, which is standard number-writing order", correct: true, explanation: "Correct. The first remainder found (from 25÷2) tells you the 1s-column digit; the last remainder found tells you the largest-value column present — reading bottom to top puts them in the conventional largest-to-smallest column order." },
      { text: "Reading top to bottom would give the same number anyway, so it doesn't actually matter", correct: false, explanation: "It does matter — reading top to bottom would reverse the digit order and produce a completely different (wrong) binary number." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why storage units compound in powers of two (real-world / applied case)</h3>
      <div className="prose-p">
      A computer&apos;s memory address bus with 10 physical wires can represent exactly 2^10 = 1,024 distinct binary patterns — which is precisely why 1,024 (not 1,000) became the natural &quot;kilo&quot; grouping in early computing, as covered in this topic&apos;s <TermLink href="/units-measurement-conversions/digital-storage-units-bytes-to-terabytes">digital storage units</TermLink> entry. The number 1,024 isn&apos;t an arbitrary round number chosen for convenience — it falls directly out of binary place value, the same way 100 (10²) or 1,000 (10³) fall out of decimal place value.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The number 13 in decimal place value vs binary place value"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-binary-and-decimal-number-systems-for-beginners-place-value.svg"
      altText="A place-value comparison showing decimal 13 built from a tens column holding 1 and a ones column holding 3, alongside binary 1101 built from four columns worth 8, 4, 2, and 1, with the 8, 4, and 1 columns filled and the 2 column empty, summing to the same value 13."
      />
      <p>
      Both representations describe the identical quantity, thirteen — the columns are simply worth different amounts depending on the base, and binary needs more columns (more digits) to express the same number because each column can only hold a 0 or a 1.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Reading a binary number by just adding up its digits as if they were decimal digits (e.g. treating 1101 as 'one thousand one hundred one').", fix: "Convert column by column using powers of two — 1101 in binary is 13, not a decimal-looking number at all." },
      { mistake: "Assuming binary numbers are always longer/harder purely because they 'look' complicated with many digits.", fix: "Recognize that binary needs more digits for the same value only because each column can hold just 0 or 1 — the underlying number system is no more complex, just less compact." },
      { mistake: "Forgetting that the repeated-division method for decimal-to-binary conversion produces remainders in reverse order.", fix: "Always read the remainders from the last division performed back to the first — bottom to top." },
      ]}
      />
      <MisconceptionCallout
      myth="Binary is a fundamentally different, more 'advanced' kind of math than the regular numbers people use every day."
      reality={<p>Binary and decimal are the same underlying idea — place value, where each column is worth a fixed multiple of the column to its right — differing only in the base (2 vs 10). Any number expressible in decimal is exactly as expressible in binary; the choice of base is a representation convention, not a difference in what kinds of numbers or math are possible.</p>}
      />

      <QuickCheck
      question="A computer memory chip has enough addressing capacity for exactly 2^16 distinct memory locations. In decimal, how many locations is that?"
      options={[
      { text: "16,000, since 2^16 sounds close to a round number", correct: false, explanation: "This isn't how exponents work — 2^16 means 2 multiplied by itself 16 times, not '16 with some zeros added.'" },
      { text: "65,536 — the actual value of 2 raised to the 16th power", correct: true, explanation: "Correct. 2^16 = 65,536. This exact figure is why early 16-bit computer systems could address up to 65,536 distinct memory locations, a number that shows up constantly in computing history for exactly this reason." },
      { text: "32, since 16 x 2 = 32", correct: false, explanation: "This treats the exponent as a multiplication instead of repeated multiplication. 2^16 means 2 x 2 x 2... sixteen times, which is 65,536, not 16 x 2." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert a decimal number to its binary digit sequence"
      fields={[
      { key: "decimalNumber", label: "Decimal number", defaultValue: 25 },
      ]}
      resultLabel="Binary representation (read as digits)"
      formula="decimalToBinaryDigits"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Practice reading a short binary number (4-5 digits) by adding up its powers-of-two columns, rather than trying to memorize conversions.",
      "Use repeated division by 2, reading remainders bottom to top, whenever you need to convert a decimal number into binary by hand.",
      "Notice where powers of two (256, 512, 1024, 4096...) show up in specs you encounter — storage, memory, screen resolutions — and connect them back to this binary foundation.",
      "Use the calculator above to check your own binary conversions before trusting them.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do you convert binary to decimal?", answer: "Multiply each binary digit by its column's power-of-two value (1, 2, 4, 8, 16...) and add the results. Binary 1101 = 1x8 + 1x4 + 0x2 + 1x1 = 13." },
      { question: "How do you convert decimal to binary?", answer: "Repeatedly divide the decimal number by 2, recording each remainder, until the quotient reaches 0. Read the remainders from the last one back to the first to get the binary digits." },
      { question: "Why do computers use binary instead of decimal?", answer: "Because a transistor's most reliable states are two-valued (on/off, high voltage/low voltage), which maps directly onto binary's two digits (0 and 1). Building reliable hardware that distinguishes ten different voltage levels for a decimal computer would be far harder than distinguishing two." },
      { question: "Is binary harder math than decimal?", answer: "No — it's the identical place-value logic with a different base. Binary numbers just need more digits to express the same value, since each column can only be 0 or 1 instead of 0 through 9." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
