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
  title: "Types of Numbers (natural, whole, integers, rational, irrational)",
  category: "math-numbers",
  order: 1,
  subtopic: "number-basics",
  tags: ["numbers", "natural numbers", "integers", "rational numbers", "irrational numbers", "real numbers"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Natural, whole, integer, rational, and irrational numbers explained as one nested system, with the exact rule that separates each category from the next.",
  summary: "Every number you'll ever use belongs to a small set of nested categories — natural numbers sit inside whole numbers, which sit inside integers, which sit inside rational numbers, all inside the real numbers, with irrationals filling the rest.",
  sources: [
    { label: "Britannica — Number", url: "https://www.britannica.com/science/number-mathematics-and-counting" },
    { label: "Wolfram MathWorld — Real Number", url: "https://mathworld.wolfram.com/RealNumber.html" },
    { label: "Khan Academy — Rational and Irrational Numbers", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:rational-irrational-numbers" },
  ],
  seeAlso: [
    "math-numbers/place-value-and-number-systems",
    "math-numbers/positive-and-negative-numbers",
    "math-numbers/fractions-explained",
    "math-numbers/prime-and-composite-numbers",
  ],
  glossary: [
    { term: "Natural numbers", definition: "The counting numbers: 1, 2, 3, 4... (some definitions include 0)." },
    { term: "Integer", definition: "A whole number, positive, negative, or zero, with no fractional or decimal part." },
    { term: "Rational number", definition: "Any number that can be written as a fraction of two integers, a/b, where b is not zero." },
    { term: "Irrational number", definition: "A number that cannot be written as a simple fraction — its decimal goes on forever without repeating." },
    { term: "Real number", definition: "Any number on the number line — every rational and irrational number combined." },
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
      "Every number category you learn in school nests inside the next one — natural numbers are a subset of whole numbers, which are a subset of integers, which are a subset of rational numbers.",
      "The one test that actually separates rational from irrational is whether the number can be written as a fraction of two integers — not how long or messy its decimal looks.",
      "\"Real numbers\" isn't a vague catch-all — it's the precise name for every rational and irrational number combined, i.e. every point on the number line.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Numbers get sorted into a small number of nested boxes. <TermLink href="/math-numbers/types-of-numbers-natural-whole-integers-rational-irrational">Natural numbers</TermLink> are what you count with: 1, 2, 3, and so on. Add zero and you get whole numbers. Add negatives and you get integers. Add fractions and terminating or repeating decimals and you get rational numbers. The numbers left over — the ones whose decimals never end and never repeat, like π or √2 — are irrational. Rational and irrational together make up the real numbers, which is every number you&apos;ll meet in ordinary math.</div>}
      detailed={<div className="prose-p">Formally, a number is <TermLink href="/math-numbers/types-of-numbers-natural-whole-integers-rational-irrational">rational</TermLink> if it can be written as a/b where a and b are integers and b ≠ 0 — that includes every integer (5 = 5/1), every terminating decimal (0.75 = 3/4), and every repeating decimal (0.333... = 1/3). A number is irrational if no such fraction exists, which is proven, not just observed, for numbers like √2 (the classic proof by contradiction assumes √2 = a/b in lowest terms and shows that assumption forces both a and b to be even, contradicting &quot;lowest terms&quot;). Together, rationals and irrationals fill in every point on the number line with no gaps — that completeness is what &quot;real numbers&quot; formally means, as opposed to complex numbers, which extend further using i = √-1 and aren&apos;t covered by this basic classification at all.</div>}
      />
      <FootnoteAside>Zero is a genuinely contested case historically — some number systems (and some school curricula) count it as a natural number, others don&apos;t. Mathematically it doesn&apos;t matter much; it&apos;s always a whole number and always an integer regardless of which convention you use for &quot;natural.&quot;</FootnoteAside>

      <div className="prose-p">
      That nesting is the whole system. The next question is what actually goes wrong when people try to sort a specific number — and the answer is almost always about decimals that look messy but aren&apos;t actually irrational.
      </div>

      <QuickCheck
      question="Is 0.777777... (repeating forever) a rational number or an irrational number?"
      options={[
      { text: "Irrational — the decimal never ends", correct: false, explanation: "Never-ending isn't the test — never-ending AND non-repeating is. This decimal repeats the same digit forever, which is exactly what makes it expressible as a fraction." },
      { text: "Rational — it equals the fraction 7/9", correct: true, explanation: "Correct. Any decimal that eventually repeats a pattern forever can always be converted into a fraction of two integers, which is the actual definition of rational." },
      { text: "Neither — repeating decimals aren't real numbers", correct: false, explanation: "Repeating decimals are real numbers, and specifically rational ones. \"Real number\" just means it has a place on the number line, which every one of these does." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Sorting a simple list (baseline case)</h3>
      <div className="prose-p">
      Take the numbers 7, -3, 0, 2.5, and √9. Start from the outside in. All five are real numbers. √9 simplifies to 3, which is a whole number, an integer, and — since it can be written as 3/1 — a rational number too; it just isn&apos;t natural under the &quot;starts at 1&quot; convention some curricula use, though it is under the &quot;starts at 0&quot; one, and it&apos;s always at minimum a whole number and an integer either way. 7 is natural, whole, an integer, and rational. -3 is an integer and rational, but not natural or whole (whole numbers don&apos;t go negative). 0 is whole and an integer, rational, and natural only under the count-from-zero convention. 2.5 is rational — it&apos;s 5/2 — but not an integer, since it has a genuine fractional part.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The number that looks rational but isn&apos;t (edge case)</h3>
      <div className="prose-p">
      √2 is the classic trap. It looks like it should simplify to something clean the way √9 does, but 2 isn&apos;t a perfect square, and no fraction of integers equals √2 exactly — its decimal (1.41421356...) never terminates and never falls into a repeating pattern, no matter how far you calculate it. Calculators round it, which can trick people into thinking 1.414 <em>is</em> √2 rather than a rounded approximation of an irrational number that has no exact decimal form at all. The same is true of π: 3.14 and 22/7 are both useful rational approximations, but neither one is actually equal to π.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why this classification matters in real math (applied case)</h3>
      <div className="prose-p">
      This isn&apos;t just taxonomy for its own sake. Whether a length, area, or measurement is rational or irrational determines whether it can ever be represented exactly by any measuring tool or by any digital display, which only show finite decimals. A carpenter cutting a diagonal brace using the Pythagorean theorem is very likely to land on an irrational length (most right-triangle diagonals are), which is precisely why real-world measurements always carry a stated precision (&quot;accurate to the nearest millimeter&quot;) instead of claiming exactness — the true value literally cannot be written down in full.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The nested number system: natural numbers inside whole numbers inside integers inside rational numbers, with irrationals filling out the real numbers"
      type="detail"
      svgSrc="/diagrams/02-types-of-numbers-nested-sets.svg"
      altText="Nested set diagram showing natural numbers contained within whole numbers, contained within integers, contained within rational numbers, with irrational numbers as a separate region alongside rational numbers, and both together labeled as real numbers."
      />
      <div className="prose-p">
      Each ring is a strict superset of the one inside it — nothing is ever removed as you move outward, only added. Irrational numbers sit outside the rational ring entirely, never overlapping it, but both rings together are enclosed by the outermost &quot;real numbers&quot; boundary, since every number on this diagram is real.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a long or ugly-looking decimal must be irrational.", fix: "Check whether it terminates or repeats. 0.123123123... repeating is rational (it equals 123/999); only non-repeating, non-terminating decimals are irrational." },
      { mistake: "Treating \"real number\" as meaning \"a normal, everyday number\" rather than its actual technical meaning.", fix: "\"Real\" is a formal category — every rational and irrational number — not a vague synonym for \"regular.\" It specifically excludes complex numbers like 3 + 2i." },
      { mistake: "Thinking negative numbers can be natural or whole numbers.", fix: "Natural and whole numbers are both defined as non-negative. Negative values start becoming valid only once you reach the integers." },
      { mistake: "Believing a calculator's decimal display of an irrational number is the exact value.", fix: "Calculators truncate or round. √2 displayed as 1.4142135624 is an approximation to 10 decimal places, not the exact, infinite value." },
      ]}
      />
      <MisconceptionCallout
      myth="Fractions and decimals are two different, separate kinds of numbers from whole numbers and integers."
      reality={<p>Fractions and decimals aren&apos;t a separate category — they&apos;re just other ways of writing rational numbers, which already include every integer. 4 and 4.0 and 4/1 are the exact same number written three different ways; none of them &quot;become&quot; a different type by being written differently.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Next time you see a decimal, check whether it terminates, repeats, or does neither — that's the fastest way to classify it as rational or irrational on sight.",
      "Practice sorting a mixed list of numbers (including negatives, fractions, and square roots) into natural/whole/integer/rational/irrational — most confusion clears up after doing this a few times by hand.",
      "When you next use π or √2 in a calculation, notice that your calculator is always giving you a rounded rational approximation, never the true irrational value.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Is zero a natural number?", answer: "It depends on the convention. Many school curricula (especially in the US) start natural numbers at 1; many formal mathematical treatments (and the ISO standard) start at 0. Either way, zero is always a whole number and an integer, so the disagreement only affects the \"natural\" label." },
      { question: "Is every integer a rational number?", answer: "Yes. Any integer n can be written as the fraction n/1, which satisfies the definition of rational (a fraction of two integers with a non-zero denominator)." },
      { question: "Are irrational numbers real numbers?", answer: "Yes — irrational numbers are real numbers. \"Real\" specifically means rational or irrational; it's complex numbers (which involve i = √-1) that fall outside the real numbers entirely." },
      { question: "Can a fraction ever be irrational?", answer: "No, by definition. Any number that can be written as a fraction of two integers is, by definition, rational — that's literally what \"rational\" means. Irrational numbers are exactly the numbers that cannot be written that way." },
      { question: "What's the difference between an integer and a whole number?", answer: "Whole numbers are non-negative (0, 1, 2, 3...); integers include negative numbers too (...-2, -1, 0, 1, 2...). Every whole number is an integer, but not every integer is a whole number." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
