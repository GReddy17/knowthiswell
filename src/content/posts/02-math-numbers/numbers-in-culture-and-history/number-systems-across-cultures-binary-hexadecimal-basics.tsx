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
  title: "Number Systems Across Cultures (binary, hexadecimal basics)",
  category: "math-numbers",
  order: 43,
  subtopic: "numbers-in-culture-and-history",
  tags: [
    "number systems",
    "binary",
    "hexadecimal",
    "base 60",
    "base 20",
    "positional notation",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why humans have used base-10, base-60, base-20, and base-2 systems across history, and how decimal, binary, and hexadecimal actually convert into each other.",
  summary: "A number system's base sets how many digits it uses before rolling over to a new place — decimal (base 10), binary (base 2), and hexadecimal (base 16) all encode the exact same values, just with different digit counts.",
  sources: [
    { label: "Encyclopaedia Britannica — Numerals and numeral systems: Decimal, Binary, Hexadecimal", url: "https://www.britannica.com/science/numeral/Numeral-systems" },
    { label: "MacTutor History of Mathematics (University of St Andrews) — A History of Zero", url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Zero/" },
    { label: "MacTutor History of Mathematics (University of St Andrews) — Gottfried Leibniz biography", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Leibniz/" },
  ],
  seeAlso: [
    "math-numbers/history-of-the-number-zero",
    "math-numbers/roman-numerals-explained",
  ],
  glossary: [
    { term: "Base (radix)", definition: "The number of unique digits a number system uses, including zero, before a digit rolls over into a new place — base 10 uses 0-9, base 2 uses only 0-1." },
    { term: "Binary", definition: "A base-2 number system using only the digits 0 and 1, the foundation of how digital computers represent and process data." },
    { term: "Hexadecimal", definition: "A base-16 number system using digits 0-9 and letters A-F (for values 10-15), commonly used in computing as a compact, human-readable stand-in for binary." },
    { term: "Sexagesimal", definition: "A base-60 number system, used by the ancient Babylonians and still surviving today in how we divide hours into minutes and circles into degrees." },
    { term: "Bit", definition: "A single binary digit — either 0 or 1 — the smallest unit of information a computer stores or processes." },
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
          "The 'base' of a number system is just how many digits it uses before rolling over to a new place — decimal (base 10) uses 0-9, binary (base 2) uses only 0-1, hexadecimal (base 16) uses 0-9 plus A-F.",
          "Different bases aren't arbitrary inventions — base-10 likely traces to counting on ten fingers, base-60 (Babylonian) survives today in 60 minutes per hour and 360 degrees in a circle, and base-2 became essential once electronic switches (on/off) needed a number system to match.",
          "Every base represents exactly the same underlying values — 13 in decimal, 1101 in binary, and D in hexadecimal are three different labels for the identical quantity.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A number system&apos;s <TermLink href="/math-numbers/number-systems-across-cultures-binary-hexadecimal-basics">base</TermLink> is just how many different digit symbols it uses before it has to roll over into a new place. The decimal system you use every day is base 10: ten digits (0-9), and once you hit 10 you roll into a new &quot;tens&quot; place. <TermLink href="/math-numbers/number-systems-across-cultures-binary-hexadecimal-basics">Binary</TermLink> is base 2: only two digits (0 and 1) exist, so it rolls over to a new place almost immediately. <TermLink href="/math-numbers/number-systems-across-cultures-binary-hexadecimal-basics">Hexadecimal</TermLink> is base 16: ten digits (0-9) plus six letters (A-F) standing in for 10 through 15, so it takes longer to roll over. None of these systems are more &quot;correct&quot; than another — they&apos;re just different-sized alphabets for writing the exact same numbers.</div>}
        detailed={<div className="prose-p">Historically, base choice tracked whatever a culture found convenient to count with or divide evenly. Base 10 is widely believed to trace back to counting on ten fingers. The ancient Babylonians used a <TermLink href="/math-numbers/number-systems-across-cultures-binary-hexadecimal-basics">sexagesimal</TermLink> (base-60) system — 60 has an unusually large number of divisors (1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60), which makes it easy to split into halves, thirds, quarters, fifths, and sixths without leftover fractions, a genuinely practical advantage for trade and astronomy. That legacy survives directly today: 60 minutes in an hour, 60 seconds in a minute, and 360 degrees in a circle (360 = 6 x 60) are all inherited from Babylonian base-60 counting. The Maya, working independently in Mesoamerica, used a vigesimal (base-20) calendar system, likely reflecting a count of fingers and toes together. Binary&apos;s modern importance has a completely different origin: philosopher and mathematician Gottfried Wilhelm Leibniz formalized binary arithmetic by 1679 and published it in 1701, centuries before electronic computers existed. Binary became indispensable for computing in the 20th century for a purely engineering reason — a transistor has exactly two reliable states, on and off, which map perfectly onto the two digits 0 and 1. Hexadecimal exists as a convenience layered on top of binary: because 16 is 2 to the 4th power, each single hex digit represents exactly four binary <TermLink href="/math-numbers/number-systems-across-cultures-binary-hexadecimal-basics">bits</TermLink>, making long strings of 1s and 0s far more compact and readable for humans working with memory addresses, color codes, and machine data.</div>}
      />
      <FootnoteAside>Leibniz was struck by an unexpected parallel: after describing his binary arithmetic in a 1701 letter to the Jesuit missionary Joachim Bouvet in Beijing, Bouvet recognized that binary&apos;s pattern of 0s and 1s matched the structure of the I Ching&apos;s ancient hexagrams (each built from six stacked broken or unbroken lines). Bouvet sent Leibniz a diagram of the hexagrams in 1703, and Leibniz saw it as confirmation that his binary system reflected a deep, universal mathematical order — a genuine historical link between 17th-century European mathematics and a philosophical text over two thousand years older.</FootnoteAside>

      <p>
      Knowing that bases are just different-sized digit alphabets is the easy part. The genuinely useful skill is converting a number from one base into another — which is mechanical once you see it done with real numbers.
      </p>

      <QuickCheck
        question="Binary uses only two digits, 0 and 1, while decimal uses ten digits, 0-9. What does this actually mean for how binary numbers are written?"
        options={[
          { text: "Binary numbers can only represent the values 0 and 1, nothing higher", correct: false, explanation: "Binary can represent any value decimal can — it just needs more digit positions to do it, since each position only offers two possible symbols instead of ten." },
          { text: "Binary numbers roll over to a new place value much faster, so representing the same number typically takes more digits than in decimal", correct: true, explanation: "Correct. With only two symbols available per position, binary has to add new places more often to represent the same value — the number 13 needs just two decimal digits but four binary digits (1101)." },
          { text: "Binary and decimal represent completely different sets of numbers", correct: false, explanation: "Both systems can represent exactly the same set of numbers — they're just different notations (different digit alphabets) for writing the same underlying values." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting decimal 13 to binary (baseline case)</h3>
      <div className="prose-p">
      Binary place values double each step, right to left: 1, 2, 4, 8, 16, and so on. To convert 13, find the largest binary place value that fits: 8 fits (13 - 8 = 5 remaining). Next, 4 fits (5 - 4 = 1 remaining). Next, 2 doesn&apos;t fit (1 is smaller than 2), so that place gets a 0. Finally, 1 fits exactly (1 - 1 = 0 remaining). Reading the places used from left to right (8s, 4s, 2s, 1s) gives 1-1-0-1, so 13 in decimal is <strong>1101</strong> in binary. Check it: 8 + 4 + 0 + 1 = 13.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Converting decimal 255 to hexadecimal and binary side by side (edge case / variation)</h3>
      <div className="prose-p">
      255 is a genuinely useful edge case because it&apos;s the largest value a single byte (8 binary bits) can hold. In binary, 255 = <strong>11111111</strong> (eight 1s — every bit position turned on: 128+64+32+16+8+4+2+1 = 255). In hexadecimal, 255 = <strong>FF</strong> (F = 15 in each of the two hex places: 15 x 16 + 15 = 255). Notice that FF (two hex digits) encodes the exact same value as 11111111 (eight binary digits) — this is exactly why hexadecimal exists: each hex digit compresses precisely four binary bits (since 16 = 2⁴), so hex gives programmers a far shorter, more readable way to write out raw binary data without losing any information. This is also why web color codes like #FF5733 are written in hexadecimal — each pair of hex digits (FF, 57, 33) compactly represents one 8-bit color channel&apos;s binary value.
      </div>

      <QuickCheck
        question="A color code like #FF5733 uses hexadecimal instead of binary. Why is hexadecimal preferred here?"
        options={[
          { text: "Hexadecimal can represent values binary cannot", correct: false, explanation: "Binary and hexadecimal can represent exactly the same values — hexadecimal is simply a shorter, more compact way of writing the same binary data, not a system with greater range." },
          { text: "Each hexadecimal digit stands in for exactly 4 binary bits, so hex represents the same value in far fewer characters, without losing precision", correct: true, explanation: "Correct. Because 16 = 2⁴, one hex digit always maps to exactly four binary digits — this makes hexadecimal a compact, exact stand-in for binary that's much easier for humans to read and write." },
          { text: "Computers can only process hexadecimal internally, not binary", correct: false, explanation: "It's the reverse — computers process binary at the hardware level. Hexadecimal is a human-readability convenience layered on top, not something the hardware itself works in directly." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Base 60&apos;s survival in your daily clock and compass (real-world / applied case)</h3>
      <p>
      You use a base-60 number system every single day without thinking about it. An hour splits into 60 minutes, and a minute splits into 60 seconds — both directly inherited from Babylonian sexagesimal counting, chosen because 60 divides evenly by 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, and 30, which made it unusually practical for splitting time or angles into clean fractions without remainders. The same base-60 legacy shows up in geography and navigation: a circle is divided into 360 degrees (6 x 60), and each degree of latitude or longitude further splits into 60 minutes and 60 seconds of arc. None of this is coincidence — it&apos;s a nearly 4,000-year-old counting convention still running underneath modern clocks, compasses, and GPS coordinates.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Place values in decimal, binary, and hexadecimal, side by side"
        type="detail"
        svgSrc="/diagrams/math-numbers-number-systems-across-cultures-base-comparison.svg"
        altText="A comparison table with three rows for decimal (base 10), binary (base 2), and hexadecimal (base 16), each showing their available digit symbols and place values, plus a worked conversion showing the decimal number 13 represented as 1101 in binary and D in hexadecimal, with arrows connecting the equivalent values across all three rows."
      />
      <p>
      Follow one row across the diagram at a time: the digit symbols available in that base, then how those symbols combine using place value to build the number 13. What the diagram makes visible is that going to a smaller base (binary) means more digit positions but simpler symbols, while going to a larger base (hexadecimal) means fewer digit positions but a bigger symbol alphabet — the same fundamental trade-off every number system across history has made differently.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Reading a binary number like 1101 as 'one thousand one hundred one' the way you'd read a decimal number.", fix: "Binary place values are powers of 2 (1, 2, 4, 8...), not powers of 10 — 1101 in binary is 8+4+0+1 = 13 in decimal, not anything close to 'one thousand one hundred one.'" },
          { mistake: "Assuming hexadecimal digits stop at 9, the same as decimal.", fix: "Hexadecimal continues past 9 using letters A through F to represent the values 10 through 15 — F is a valid single hex digit worth 15, not an error." },
          { mistake: "Thinking binary was invented specifically for computers.", fix: "Binary arithmetic was formalized by Gottfried Leibniz in the late 1600s, roughly 250 years before electronic computers existed — computers adopted binary later because it happened to match how electronic switches naturally work." },
        ]}
      />
      <MisconceptionCallout
        myth="Binary was invented for computers, and didn't exist as a mathematical idea before electronics."
        reality={<p>Binary arithmetic is a genuinely old mathematical idea. Gottfried Wilhelm Leibniz formalized base-2 arithmetic by 1679 and published his work on it in 1701 — roughly two and a half centuries before the first electronic computers were built. Binary became central to computing for a specific engineering reason discovered much later: a transistor or electronic switch reliably holds exactly two states, on and off, which map perfectly onto the two binary digits 0 and 1. Computers didn&apos;t create binary — engineers adopted a centuries-old number system because it happened to be the ideal match for how electronic hardware actually behaves.</p>}
      />

      <QuickCheck
        question="If binary existed as a mathematical idea roughly 250 years before electronic computers, why did computing specifically adopt it rather than decimal or another base?"
        options={[
          { text: "Binary is mathematically more powerful and can represent numbers decimal cannot", correct: false, explanation: "Binary and decimal can represent exactly the same set of numbers — binary's advantage for computing has nothing to do with representing more values, and everything to do with matching hardware behavior." },
          { text: "Electronic switches (transistors) reliably hold exactly two stable states, on and off, which map directly onto binary's two digits", correct: true, explanation: "Correct. Binary's two-symbol structure happens to match the two reliable states of an electronic switch perfectly, which made it the natural, practical choice once electronic computing hardware was being designed." },
          { text: "Early computer engineers simply preferred binary for tradition, with no technical reason", correct: false, explanation: "There was a concrete engineering reason, not just preference — building reliable circuits that could distinguish among ten or sixteen different voltage levels (for decimal or hex) is far harder than reliably distinguishing just two states (on/off)." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Convert a decimal number to its binary digits"
        fields={[
          { key: "decimalNumber", label: "Decimal number", defaultValue: 13 },
        ]}
        resultLabel="Binary representation (read as digits)"
        formula="decimalToBinaryDigits"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Use the calculator above to convert your age or house number to binary, then check it by hand using the place-value method from Example 1.",
          "Next time you see a web color code like #FF5733, recognize each pair of hex digits as a compact stand-in for 8 binary bits.",
          "Notice the next time you check a clock or a map coordinate that you're using a nearly 4,000-year-old Babylonian base-60 counting system.",
          "Read the related entry on History of the Number Zero to see how positional notation (the backbone of every base system here) depended on zero being invented first.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between binary and hexadecimal?", answer: "Binary is base 2, using only the digits 0 and 1. Hexadecimal is base 16, using digits 0-9 plus letters A-F for values 10-15. Every hexadecimal digit corresponds to exactly 4 binary digits, making hex a compact, human-readable way to write binary values." },
          { question: "Why do computers use binary instead of decimal?", answer: "Binary matches the physical behavior of electronic switches (transistors), which reliably hold just two stable states: on and off. Representing numbers with only two symbols maps directly onto that hardware reality, making binary far more practical for electronic computing than a ten-symbol system like decimal." },
          { question: "Why are there 60 minutes in an hour instead of 100?", answer: "This traces back to the ancient Babylonian base-60 (sexagesimal) number system. Sixty divides evenly by many numbers (1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30), which made it unusually convenient for splitting time and angles into clean fractions — a practical advantage base-10 doesn't share." },
          { question: "How do you convert hexadecimal to decimal?", answer: "Multiply each hex digit by 16 raised to its place position (starting at 0 from the right) and add the results. For FF: F(=15) x 16¹ + F(=15) x 16⁰ = 240 + 15 = 255." },
          { question: "Was binary invented for computers?", answer: "No. Gottfried Leibniz formalized binary arithmetic by 1679, roughly 250 years before electronic computers existed. Computing adopted binary later because its two digits happened to match the two reliable states of an electronic switch." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
