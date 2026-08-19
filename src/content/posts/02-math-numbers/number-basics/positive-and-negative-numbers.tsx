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
  title: "Positive & Negative Numbers: How Signed Numbers Actually Work",
  category: "math-numbers",
  order: 10,
  subtopic: "number-basics",
  tags: [
    "positive and negative numbers",
    "signed numbers",
    "integers",
    "number line",
    "absolute value",
    "adding negative numbers",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How positive and negative numbers work on the number line, why subtracting a negative means adding, and why a negative times a negative is positive.",
  summary: "Positive and negative numbers describe both a size and a direction from zero — the sign tells you which side of the number line you're on, and every operation you do with them follows directly from that one idea.",
  sources: [
    { label: "Khan Academy — Negative Numbers", url: "https://www.khanacademy.org/math/pre-algebra/pre-algebra-negative-numbers" },
    { label: "Wolfram MathWorld — Absolute Value", url: "https://mathworld.wolfram.com/AbsoluteValue.html" },
    { label: "Britannica — Number (mathematics)", url: "https://www.britannica.com/science/number-mathematics-and-counting" },
    { label: "National Council of Teachers of Mathematics — Illuminations", url: "https://www.nctm.org/" },
  ],
  seeAlso: [
    "math-numbers/types-of-numbers-natural-whole-integers-rational-irrational",
    "math-numbers/order-of-operations-bodmas-pemdas",
    "math-numbers/place-value-and-number-systems",
    "math-numbers/estimation-and-rounding",
  ],
  glossary: [
    { term: "Signed number", definition: "A number that carries a positive or negative sign showing its direction from zero." },
    { term: "Absolute value", definition: "A number's distance from zero on the number line, always written as a non-negative value, e.g. |-7| = 7." },
    { term: "Additive inverse", definition: "The number that, added to a given number, produces zero — 8 and -8 are additive inverses of each other." },
    { term: "Number line", definition: "A straight line on which every real number has a fixed position, with zero in the middle, positives to the right, negatives to the left." },
    { term: "Integer", definition: "A whole number, positive, negative, or zero, with no fractional or decimal part." },
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
      "Positive and negative numbers measure both a size and a direction from zero — the sign tells you which side of the number line you're on, the digits tell you how far.",
      "Subtracting a negative number and adding a positive number are the same move in disguise: 5 - (-3) and 5 + 3 both land on 8. There's really only one rule — add the opposite.",
      "Multiplying or dividing two numbers with the same sign always gives a positive result; different signs always give a negative result — and this isn't an arbitrary convention, it falls directly out of the distributive property.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/math-numbers/positive-and-negative-numbers">signed number</TermLink> is just a regular number with a direction attached. Picture a thermometer: readings above 0 are positive, readings below 0 are negative, and the further from 0 you go in either direction, the bigger the number&apos;s size — even though a very cold &quot;-20°&quot; is a smaller number than a mild &quot;5°&quot;. A bank balance works the same way: +120 means you have money, -45 means you owe money, and 0 is exactly even. Adding a positive number moves you right on the number line; adding a negative number moves you left. Once you can see it as movement along a line instead of just digits and a minus sign, most of the confusion disappears.</div>}
      detailed={<div className="prose-p">Every signed number has two separate pieces of information: its <TermLink href="/math-numbers/positive-and-negative-numbers">absolute value</TermLink> (distance from zero, always non-negative) and its sign (direction). -7 and 7 have the same absolute value, 7, but opposite signs — they&apos;re called <TermLink href="/math-numbers/positive-and-negative-numbers">additive inverses</TermLink> because -7 + 7 = 0 exactly. Subtraction of a negative number always converts to addition of its inverse: a - (-b) = a + b, which is why 5 - (-3) = 5 + 3 = 8. The same-sign/different-sign multiplication rule isn&apos;t a memorized chart — it follows from requiring the distributive property to keep working for negative numbers. Starting from 0 = -1 × 0 = -1 × (1 + -1) = (-1 × 1) + (-1 × -1) = -1 + (-1 × -1), the only value that makes the right side equal 0 is (-1 × -1) = 1. In other words, &quot;negative times negative equals positive&quot; is forced by the rest of arithmetic staying consistent — it isn&apos;t a separate rule bolted on afterward.</div>}
      />
      <FootnoteAside>Negative numbers took far longer to become mathematically respectable than most people assume. The Indian mathematician Brahmagupta gave the first systematic rules for arithmetic with negative numbers in his 628 CE treatise Brahmasphutasiddhanta, framing them as debts against fortunes — yet many European mathematicians were still calling negative numbers &quot;fictitious&quot; or &quot;absurd&quot; as late as the 1700s, over a thousand years later.</FootnoteAside>

      <div className="prose-p">
      Direction and distance explain what a signed number is. The next step is seeing how that idea plays out once you start adding, subtracting, multiplying, and dividing them — because each operation has exactly one place where intuition tends to go sideways.
      </div>

      <QuickCheck
      question="Which is larger: -2 or -8?"
      options={[
      { text: "-8, because 8 is a bigger digit than 2", correct: false, explanation: "Digit size alone is misleading with negative numbers. -8 sits farther left on the number line than -2, which makes it the smaller value, not the larger one." },
      { text: "-2, because it's closer to zero (and to the positive side) on the number line", correct: true, explanation: "Correct. Among negative numbers, the one closer to zero is always larger. -2 is only 2 units left of zero, while -8 is 8 units left, so -2 > -8." },
      { text: "They're equal, since both are negative", correct: false, explanation: "Being negative doesn't make two numbers equal any more than being positive would. -2 and -8 sit at different points on the number line, 6 units apart." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Adding a positive to a negative balance (baseline case)</h3>
      <div className="prose-p">
      A checking account is overdrawn by $45, written as a balance of -45. A $120 deposit comes in. The new balance is -45 + 120. On the number line, start at -45 and move 120 units to the right: you pass through 0 after 45 units, then keep going another 75 units, landing on +75. The account is no longer overdrawn — it now holds $75. Notice the shortcut buried in this: because 120 is farther from zero than 45, the sum takes the sign of the larger absolute value (positive), and the size of the result is the difference between the two absolute values, 120 - 45 = 75.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Subtracting a negative temperature change (edge case)</h3>
      <div className="prose-p">
      A city&apos;s overnight low was -12°C on Monday. By Thursday, the overnight low has dropped to -20°C. To find the change, compute Thursday minus Monday: -20 - (-12). Rewrite the subtraction of a negative as addition of its opposite: -20 + 12 = -8. The temperature change is -8°C — an 8-degree drop, which matches intuition (it got colder), even though the arithmetic involved two negative numbers and a subtraction sign. Trying to solve this by canceling the two minus signs into a plus and writing -20 + 12 the wrong way (as -20 - 12 = -32) is the single most common error with signed numbers, and it&apos;s exactly the trap Common Mistakes below addresses.
      </div>
      <QuickCheck
      question="What is -20 - (-12)?"
      options={[
      { text: "-32, because two negatives next to each other add their sizes", correct: false, explanation: "This treats subtracting a negative the same as subtracting a positive, which is backwards. Subtracting -12 means adding 12, not adding another 12 to the negative side." },
      { text: "-8, because subtracting a negative is the same as adding its positive value", correct: true, explanation: "Correct. -20 - (-12) rewrites as -20 + 12 = -8. Subtraction of a negative number always converts to addition of that number's absolute value." },
      { text: "8, because two negative signs always produce a positive final answer regardless of the numbers", correct: false, explanation: "The sign flips correctly here, but the size is wrong — the size still comes from -20 + 12, which is -8, not +8. Flipping the sign doesn't mean flipping which side of zero the answer lands on." },
      ]}
      />
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Elevation change from Death Valley to Mount Whitney (real-world / applied case)</h3>
      <p>
      Badwater Basin in Death Valley National Park sits at -86 meters (282 feet below sea level) — the lowest point in North America, according to the National Park Service. Mount Whitney, roughly 136 km away, is the highest point in the contiguous United States at 4,421 meters (14,505 feet), per the U.S. Geological Survey. The total elevation gain between the two is 4,421 - (-86) = 4,507 meters — over four and a half kilometers of vertical climb. The negative starting elevation doesn&apos;t get ignored or treated as zero; it has to be subtracted properly, which is exactly why the gain is larger than Mount Whitney&apos;s height above sea level alone.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Number line: direction and distance for positive and negative numbers"
      type="detail"
      svgSrc="/diagrams/math-numbers-positive-and-negative-numbers-number-line.svg"
      altText="Horizontal number line centered on zero, with negative integers extending left and positive integers extending right, arrows showing that adding a positive number moves a point rightward and adding a negative number (or subtracting a positive one) moves a point leftward, and a labeled example showing subtraction of a negative number as a rightward move."
      />
      <p>
      Every addition or subtraction of a signed number is a instruction to move along this line: &quot;+&quot; moves right, &quot;-&quot; moves left, and the number tells you how far. Subtracting a negative number reverses that leftward instruction back into a rightward move — which is the entire reason &quot;minus a minus&quot; behaves like a plus. Multiplication and division don&apos;t move a point along the line; instead, a negative multiplier or divisor flips which side of zero the result lands on, while the same-sign case leaves it on the positive side.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a negative number with a bigger digit is always 'more' than one with a smaller digit (thinking -8 > -2).", fix: "Compare position on the number line, not digit size. Among negatives, the one closer to zero is larger: -2 > -8." },
      { mistake: "Turning 'subtract a negative' into 'add another negative' instead of 'add a positive' (computing 5 - (-3) as 5 + (-3) = 2).", fix: "Subtracting a negative always converts to adding its positive value: 5 - (-3) = 5 + 3 = 8." },
      { mistake: "Forgetting to include a negative starting value when computing a total change (e.g. leaving out a below-zero starting point).", fix: "Always subtract the true starting value, including its sign, in full: change = end value − start value, even when the start value is negative." },
      ]}
      />
      <MisconceptionCallout
      myth="A negative times a negative should logically stay negative — two 'bad' signs shouldn't be able to combine into a 'good' one."
      reality={<p>The rule isn&apos;t a convention chosen for convenience — it&apos;s forced by keeping the rest of arithmetic consistent. Starting from 0 = -1 × (1 + -1) and expanding with the distributive property, the only value that makes the equation balance is (-1)(-1) = 1. A concrete way to feel it: if a value has been falling at a rate of -3 units per hour, then 4 hours <em>ago</em> (time = -4) it must have been higher by (-3) × (-4) = 12 units — going backward in time through a decreasing quantity necessarily lands on a larger value, which is exactly what the positive result represents.</p>}
      />
      <QuickCheck
      question="A tank's water level has been dropping at a steady -3 cm per hour for the last several hours. Using that rate, what was the water level 5 hours ago relative to right now?"
      options={[
      { text: "15 cm lower than now, since the rate is negative", correct: false, explanation: "This flips the direction. Going backward in time through a falling quantity means the level was higher in the past, not lower — the sign of the answer should end up positive." },
      { text: "15 cm higher than now, found from (-3) × (-5) = 15", correct: true, explanation: "Correct. Multiplying the falling rate (-3 cm/hr) by going 5 hours into the past (-5 hours) gives (-3) × (-5) = +15 — the water level was 15 cm higher 5 hours ago." },
      { text: "Impossible to determine without knowing today's exact water level", correct: false, explanation: "The relative change doesn't require knowing the absolute level today — (-3) × (-5) directly gives how much higher the level was 5 hours ago, regardless of today's starting value." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Add two signed numbers"
      fields={[
      { key: "a", label: "First number", defaultValue: -45 },
      { key: "b", label: "Second number", defaultValue: 120 },
      ]}
      resultLabel="Sum"
      formula="signedNumberSum"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Sketch a number line and physically mark where a calculation lands before trusting the arithmetic — most sign errors are caught instantly by seeing the direction is wrong.",
      "Next time you subtract a negative number, rewrite it as addition first (a - (-b) becomes a + b) before doing anything else.",
      "Check your bank or credit card statement for a negative balance and practice adding a payment to it — that's real-world signed-number addition happening every billing cycle.",
      "Read the related entry on Order of Operations to see how signed numbers interact with multiplication and parentheses inside a larger expression.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Why is a negative times a negative a positive?", answer: "Because it's required for the distributive property to stay consistent. Starting from 0 = -1 × (1 + -1) and expanding both sides, the only value that keeps the equation true is (-1) × (-1) = 1 — the rule isn't arbitrary, it's forced by the rest of arithmetic working correctly." },
      { question: "How do you subtract a negative number?", answer: "Convert it to addition of the positive version: a - (-b) is always equal to a + b. So 10 - (-4) becomes 10 + 4 = 14." },
      { question: "Is zero a positive or a negative number?", answer: "Neither. Zero is the boundary point on the number line — it has no sign, since it isn't a distance in either direction. Zero is neither positive nor negative, though it is even." },
      { question: "How do you know which of two negative numbers is bigger?", answer: "The negative number closer to zero is the larger one. Compare their positions on the number line, not the size of the digit: -3 is larger than -10, because -3 sits closer to zero." },
      { question: "What is the absolute value of a negative number?", answer: "It's the number's distance from zero, written without a sign. The absolute value of -9 is 9; the absolute value of 9 is also 9 — absolute value strips the direction and keeps only the size." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
