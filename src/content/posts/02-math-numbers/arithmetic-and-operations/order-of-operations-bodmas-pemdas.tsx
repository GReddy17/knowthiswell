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
  title: "Order of Operations (BODMAS/PEMDAS): Why Math Needs One Fixed Sequence",
  category: "math-numbers",
  order: 11,
  subtopic: "arithmetic-and-operations",
  tags: [
    "order of operations",
    "BODMAS",
    "PEMDAS",
    "arithmetic",
    "brackets and exponents",
    "expression evaluation",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why BODMAS and PEMDAS describe the same fixed sequence for evaluating expressions, with worked examples showing exactly where left-to-right reading goes wrong.",
  summary: "Order of operations is the fixed sequence — brackets, then exponents, then multiplication and division left to right, then addition and subtraction left to right — that lets any written expression have exactly one correct value.",
  sources: [
    { label: "Khan Academy — The Order of Operations", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-arith-prop/pre-algebra-order-of-operations/a/order-of-operations-review" },
    { label: "Wolfram MathWorld — Order of Operations (PEMDAS)", url: "https://mathworld.wolfram.com/PEMDAS.html" },
    { label: "Britannica — Algebra", url: "https://www.britannica.com/science/algebra" },
  ],
  seeAlso: [
    "math-numbers/positive-and-negative-numbers",
    "math-numbers/exponents-and-powers",
    "math-numbers/mental-math-tricks",
    "math-numbers/squares-cubes-and-roots",
  ],
  glossary: [
    { term: "Order of operations", definition: "The fixed sequence — brackets, exponents, multiplication/division, addition/subtraction — used to evaluate any mathematical expression consistently." },
    { term: "BODMAS", definition: "Brackets, Orders (exponents/roots), Division and Multiplication, Addition and Subtraction — the UK/Commonwealth name for the order-of-operations sequence." },
    { term: "PEMDAS", definition: "Parentheses, Exponents, Multiplication and Division, Addition and Subtraction — the US name for the identical order-of-operations sequence." },
    { term: "Operand", definition: "A value that an operation (like + or ×) is applied to — in 3 + 4, both 3 and 4 are operands." },
    { term: "Left-to-right associativity", definition: "The rule that operations of equal priority (like multiplication and division) are evaluated in the order they appear, reading left to right." },
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
      "Order of operations exists so a written expression like 3 + 4 × 2 has exactly one correct value — without a fixed sequence, the same expression could honestly be read two different ways.",
      "BODMAS and PEMDAS aren't competing systems — they spell out the identical priority order in different words. Multiplication and division share one tier (done left to right); addition and subtraction share the tier after that (also left to right).",
      "Reading an expression like a sentence, strictly left to right with no priority, gives the wrong answer for most real expressions: 3 + 4 × 2 read that way gives 14, but the correct value is 11.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">The <TermLink href="/math-numbers/order-of-operations-bodmas-pemdas">order of operations</TermLink> is the sequence you follow to evaluate an expression with more than one operation in it: first anything inside brackets, then exponents (powers and roots), then all multiplication and division (working left to right), then all addition and subtraction (also left to right). BODMAS (Brackets, Orders, Division, Multiplication, Addition, Subtraction) and PEMDAS (Parentheses, Exponents, Multiplication, Division, Addition, Subtraction) are just two regional names — British/Commonwealth schools teach one, American schools teach the other — for exactly the same sequence. Take 3 + 4 × 2: multiplication happens before addition, so it&apos;s 3 + 8 = 11, not (3 + 4) × 2 = 14.</div>}
      detailed={<div className="prose-p">The letter order in BODMAS and PEMDAS is a memory aid, not a strict ranking — &quot;Division before Multiplication&quot; and &quot;Multiplication before Division&quot; are both misleading if read literally, because multiplication and division sit on the <TermLink href="/math-numbers/order-of-operations-bodmas-pemdas">same priority tier</TermLink> and are simply worked left to right in whichever order they appear (the same is true of addition and subtraction, one tier lower). So 20 ÷ 4 × 5 is evaluated left to right as (20 ÷ 4) × 5 = 25, not 20 ÷ (4 × 5) = 1. Exponents introduce their own subtlety: they&apos;re right-associative, meaning a stacked exponent like 2^3^2 is evaluated as 2^(3^2) = 2^9 = 512, not (2^3)^2 = 64 — the exponent tower resolves from the top down. This entire convention isn&apos;t cosmetic; it&apos;s what lets algebraic notation carry meaning unambiguously across the distributive property, polynomial expressions, and every formula built on top of them, without needing a forest of brackets around every single operation.</div>}
      />
      <FootnoteAside>Viral &quot;order of operations&quot; puzzles like 6 ÷ 2(1 + 2) that split the internet into two camps aren&apos;t actually a flaw in order of operations itself — they&apos;re an artifact of ambiguous notation. The expression mixes an explicit division sign with implicit multiplication (juxtaposition, no × symbol), and mathematicians, textbooks, and even calculator brands don&apos;t fully agree on whether juxtaposition binds tighter than explicit division. Professional mathematical typesetting sidesteps the whole argument by writing such expressions as stacked fractions instead of using ÷ at all.</FootnoteAside>

      <div className="prose-p">
      The four-tier sequence explains what to do first. The next question is where it actually bites in practice — and that&apos;s almost always at the exact seam between two tiers, brackets meeting exponents, or multiplication meeting addition.
      </div>

      <QuickCheck
      question="What is 3 + 4 × 2?"
      options={[
      { text: "14, reading left to right: 3 + 4 = 7, then 7 × 2 = 14", correct: false, explanation: "This treats the expression like a sentence read strictly left to right, ignoring that multiplication outranks addition. That reading isn't how the expression is defined to be evaluated." },
      { text: "11, because multiplication is evaluated before addition: 4 × 2 = 8, then 3 + 8 = 11", correct: true, explanation: "Correct. Order of operations requires multiplication to be done before addition, regardless of the order the operations are written in." },
      { text: "24, by adding first and then treating the whole thing as one multiplication: (3 + 4) × 2", correct: false, explanation: "That would be the correct answer only if the expression had brackets around 3 + 4 — it doesn't, so addition and multiplication aren't grouped together here." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A simple mixed expression (baseline case)</h3>
      <div className="prose-p">
      Evaluate 3 + 4 × 2. There are no brackets and no exponents, so the first active tier is multiplication/division: 4 × 2 = 8. That leaves 3 + 8, which equals 11. The multiplication happens first purely because of its priority tier, not because of where it&apos;s physically written in the expression — if the expression were 4 × 2 + 3, the answer would still be 11, since multiplication is still resolved before the addition either way.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Brackets and an exponent together (edge case / variation)</h3>
      <div className="prose-p">
      Evaluate (3 + 4) × 2². Brackets are resolved first regardless of what&apos;s inside them: (3 + 4) = 7. Next comes the exponent, which applies only to the 2 immediately next to it, not to the 7: 2² = 4. The expression is now 7 × 4, which is 28. A common slip here is squaring the bracketed result instead — treating it as 7² × 2 or (7 × 2)² — but the exponent only touches the number it&apos;s directly attached to unless brackets say otherwise.
      </div>
      <QuickCheck
      question="What is (3 + 4) × 2²?"
      options={[
      { text: "28 — brackets first (3+4=7), then the exponent (2²=4), then multiply (7×4)", correct: true, explanation: "Correct. Brackets resolve first (7), then the exponent applies only to the 2 next to it (4), and finally 7 × 4 = 28." },
      { text: "49, by squaring the bracketed sum: (3+4)² = 49", correct: false, explanation: "The exponent in the original expression is only attached to the 2, not to the bracketed (3+4) term — there's no reason to move it onto the bracket." },
      { text: "56, by adding 3+4 and doubling before squaring: (7 × 2)²", correct: false, explanation: "This regroups the multiplication and the exponent together, which isn't what the expression says. The exponent applies to 2 alone, evaluated before the multiplication, not after regrouping." },
      ]}
      />
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A coupon at checkout (real-world / applied case)</h3>
      <p>
      A shopper buys 3 shirts at $18 each and applies a single $5 coupon to the whole order. Written correctly, the total is 3 × 18 - 5. Order of operations resolves the multiplication first: 3 × 18 = 54, then subtracts the coupon: 54 - 5 = 49, for a total of $49. If a cashier mistakenly grouped it as 3 × (18 - 5) instead — applying the $5 discount to each shirt&apos;s price before multiplying — the total would come out to 3 × 13 = $39, a full $10 off from the correct total. The bracket placement isn&apos;t cosmetic here; it&apos;s the difference between a coupon applied once to the order and a coupon effectively applied three times.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Priority flow: the four tiers of order of operations"
      type="detail"
      svgSrc="/diagrams/math-numbers-order-of-operations-bodmas-pemdas-priority-flow.svg"
      altText="Flowchart with four stacked tiers labeled in evaluation order: Brackets/Parentheses at the top, then Exponents/Orders, then Multiplication and Division (marked as equal priority, evaluated left to right), then Addition and Subtraction at the bottom (also marked as equal priority, evaluated left to right), with an arrow flowing top to bottom showing the required evaluation sequence."
      />
      <p>
      Work down the tiers one at a time, fully clearing each tier before moving to the next — resolve every bracket in the expression before touching any exponent, resolve every exponent before touching any multiplication or division, and so on. Within the tied tiers (multiplication/division, and separately addition/subtraction), move strictly left to right; the diagram&apos;s two middle tiers being drawn as equal-width, side-by-side boxes rather than stacked ones is the visual reminder that neither operation in that pair outranks the other.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Reading the letters in BODMAS or PEMDAS as a strict ranking, so always doing division before multiplication (or the reverse).", fix: "Multiplication and division share one priority tier; addition and subtraction share the next. Within a tied tier, work left to right in whichever order the operations appear." },
      { mistake: "Multiplying or dividing before clearing brackets, when both appear in the same expression.", fix: "Brackets always resolve first, no exceptions — fully evaluate everything inside a bracket before applying any operation outside it." },
      { mistake: "Evaluating a whole expression strictly left to right, the way you'd read a sentence, ignoring operator priority entirely.", fix: "Identify every bracket, exponent, then multiplication/division, then addition/subtraction pass before evaluating anything — priority tier decides order, not left-to-right position in the writing." },
      ]}
      />
      <MisconceptionCallout
      myth="Order of operations (BODMAS/PEMDAS) is just an arbitrary rule that textbooks invented, not something mathematically necessary."
      reality={<p>Without a fixed, universally agreed sequence, a single written expression could legitimately be evaluated to different values by different people — 3 + 4 × 2 could mean 11 or 14 depending on which operation someone chose to do first, with no way to tell which was intended. That breaks a basic requirement of mathematical notation: a written expression has to represent exactly one number. Order of operations isn&apos;t decoration on top of arithmetic — it&apos;s the agreement that makes written arithmetic expressions unambiguous at all, the same way traffic rules make shared roads usable rather than a matter of driver preference.</p>}
      />
      <QuickCheck
      question="Why do BODMAS and PEMDAS matter, rather than each person just evaluating an expression in whatever order feels natural?"
      options={[
      { text: "They don't really matter — any consistent order a person picks will give the same final answer", correct: false, explanation: "Different orders genuinely produce different final answers for most expressions (3 + 4 × 2 gives 11 or 14 depending on order), so the order chosen is not interchangeable." },
      { text: "They guarantee that a written expression has exactly one correct value, so it means the same thing to everyone who reads it", correct: true, explanation: "Correct. A fixed evaluation order is what makes a written expression unambiguous — without it, the same symbols could validly produce different numbers for different readers." },
      { text: "They only matter for very long, complicated expressions with many operations", correct: false, explanation: "Even a short two-operation expression like 3 + 4 × 2 gives different results depending on the order used, so the rule matters starting from the simplest mixed expressions, not just long ones." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Evaluate a + b × c − d using correct order of operations"
      fields={[
      { key: "a", label: "a", defaultValue: 3 },
      { key: "b", label: "b", defaultValue: 4 },
      { key: "c", label: "c", defaultValue: 2 },
      { key: "d", label: "d", defaultValue: 1 },
      ]}
      resultLabel="Result of a + b × c − d"
      formula="bodmasExpressionResult"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Before evaluating any mixed expression, scan it once for brackets and exponents and resolve those first, before touching multiplication, division, addition, or subtraction.",
      "When multiplication and division appear together with no brackets, work left to right rather than assuming one operation always goes before the other.",
      "Rewrite a real-world calculation (a bill with tax, a discount applied to multiple items) as a single expression and check whether bracket placement changes the answer — it usually does.",
      "Read the related entry on Exponents & Powers to see how the 'exponents before multiplication' tier plays out with negative and fractional exponents.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What does BODMAS stand for?", answer: "Brackets, Orders (exponents and roots), Division and Multiplication, Addition and Subtraction — the order-of-operations sequence taught in the UK and much of the Commonwealth." },
      { question: "What does PEMDAS stand for?", answer: "Parentheses, Exponents, Multiplication and Division, Addition and Subtraction — the same sequence as BODMAS, taught under a different name in the United States." },
      { question: "Is BODMAS the same as PEMDAS?", answer: "Yes. Both describe the identical four-tier priority order — brackets/parentheses, then exponents, then multiplication and division together, then addition and subtraction together. Only the regional names and letter order differ." },
      { question: "Do you always do multiplication before division?", answer: "No. Multiplication and division share the same priority tier and are evaluated left to right in whichever order they appear, not multiplication-always-first. The same is true for addition and subtraction." },
      { question: "Why does order of operations matter in real life?", answer: "Any formula, spreadsheet calculation, or bill with multiple operations (tax, discounts, quantities) depends on a fixed evaluation order to produce one correct total — evaluating it in a different order routinely produces a different, incorrect number." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
