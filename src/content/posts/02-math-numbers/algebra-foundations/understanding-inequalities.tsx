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
  title: "Understanding Inequalities: Why the Sign Flips When You Multiply by a Negative",
  category: "math-numbers",
  order: 21,
  subtopic: "algebra-foundations",
  tags: [
    "inequalities",
    "greater than less than",
    "solving inequalities",
    "number line",
    "algebra basics",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How inequalities work, why the direction of the sign flips only when you multiply or divide by a negative number, and how to graph a solution on a number line.",
  summary: "An inequality compares two expressions using greater than, less than, or their 'or equal to' variants, describing a whole range of possible solutions instead of a single exact value.",
  sources: [
    { label: "Encyclopaedia Britannica — Inequality (Mathematics)", url: "https://www.britannica.com/science/inequality" },
    { label: "Khan Academy — Linear Equations and Inequalities (Algebra Basics)", url: "https://www.khanacademy.org/math/algebra-basics/alg-basics-linear-equations-and-inequalities" },
    { label: "National Council of Teachers of Mathematics — Illuminations", url: "https://www.nctm.org/illuminations/" },
  ],
  seeAlso: [
    "math-numbers/solving-simple-equations",
    "math-numbers/linear-equations-explained",
    "math-numbers/what-is-algebra-variables-expressions",
    "math-numbers/types-of-numbers-natural-whole-integers-rational-irrational",
  ],
  glossary: [
    { term: "Inequality", definition: "A mathematical statement comparing two expressions using <, >, ≤, or ≥, instead of an equals sign." },
    { term: "Solution set", definition: "The complete range of values that make an inequality true — often infinite, unlike an equation's usually single solution." },
    { term: "Number line", definition: "A visual line representing all real numbers in order, used to graph an inequality's solution set with an open or closed circle and a shaded direction." },
    { term: "Open circle", definition: "A number line marker showing a boundary value that is NOT included in the solution (used for strict < or >)." },
    { term: "Closed circle", definition: "A number line marker showing a boundary value that IS included in the solution (used for ≤ or ≥)." },
    { term: "Compound inequality", definition: "Two inequalities combined into one statement, such as 3 < x ≤ 10, describing a bounded range of values." },
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
          "An inequality (using <, >, ≤, or ≥) describes a whole range of possible values, not one single exact answer the way a typical equation does.",
          "Adding or subtracting the same number from both sides of an inequality behaves exactly like it does for equations — the direction of the sign never changes.",
          "Multiplying or dividing both sides by a negative number flips the inequality's direction — this is the one rule that has no equation equivalent and is the single most common source of errors.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">An <TermLink href="/math-numbers/understanding-inequalities">inequality</TermLink> compares two things without claiming they&apos;re exactly equal — x &gt; 5 means &quot;x is greater than 5,&quot; true for 5.1, 6, 100, or any number bigger than 5, not just one value. You solve inequalities almost the same way you solve equations: undo operations on both sides to isolate the variable. The one place it&apos;s different is when you multiply or divide both sides by a negative number — when that happens, the inequality sign has to flip direction to stay true.</div>}
        detailed={<div className="prose-p">Adding or subtracting the same value from both sides of an inequality never changes its direction, exactly like an equation — if x &gt; 5, then x + 3 &gt; 8 remains true. But multiplying or dividing both sides by a negative number reverses which side is actually larger, so the inequality symbol must flip to stay accurate. Consider -2x &gt; 6: dividing both sides by -2 gives x, but if you kept the sign pointing the same direction you&apos;d get x &gt; -3, which is false (x = 0 satisfies x &gt; -3 but does not satisfy the original -2(0) &gt; 6). Flipping the sign during the division gives the correct result, x &lt; -3. The full <TermLink href="/math-numbers/understanding-inequalities">solution set</TermLink> is graphed on a <TermLink href="/math-numbers/understanding-inequalities">number line</TermLink> using an <TermLink href="/math-numbers/understanding-inequalities">open circle</TermLink> for strict inequalities (&lt; or &gt;, boundary excluded) or a <TermLink href="/math-numbers/understanding-inequalities">closed circle</TermLink> for inclusive ones (≤ or ≥, boundary included), with shading extending in the direction the inequality describes.</div>}
      />
      <FootnoteAside>The &lt; and &gt; symbols were introduced by English mathematician Thomas Harriot in his 1631 book Artis Analyticae Praxis, published after his death — before that, mathematicians mostly wrote out comparisons in full words like &quot;is greater than.&quot;</FootnoteAside>

      <p>
      The addition and subtraction rules feel identical to equations right up until a negative multiplier enters the picture — that single exception is worth isolating and testing on its own before anything else.
      </p>

      <QuickCheck
        question="If x < 7, is it still true that x + 4 < 11?"
        options={[
          { text: "Yes — adding the same number to both sides of an inequality never changes its direction", correct: true, explanation: "Correct. Adding or subtracting the same value from both sides works exactly like it does for equations — the inequality's direction stays the same." },
          { text: "No — the inequality sign must flip whenever you perform any operation on both sides", correct: false, explanation: "The sign only flips when multiplying or dividing both sides by a negative number. Addition and subtraction never require a flip, regardless of sign." },
          { text: "It depends on whether x is positive or negative", correct: false, explanation: "Addition and subtraction preserve an inequality's direction unconditionally, for any real value of x — there's no dependence on x's sign for this particular rule." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A basic inequality with addition (baseline case)</h3>
      <div className="prose-p">
      Solve x - 6 ≤ 9 for x. Add 6 to both sides: x - 6 + 6 ≤ 9 + 6, giving x ≤ <strong>15</strong>. This means any number 15 or smaller makes the inequality true — 15 itself works (since ≤ includes equality), as does 14, 0, or -100. On a number line, this is graphed as a closed circle at 15 with shading extending left toward negative infinity.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Dividing by a negative number, where the sign must flip (edge case / variation)</h3>
      <div className="prose-p">
      Solve -3x &gt; 12 for x. Divide both sides by -3, and flip the inequality sign because you&apos;re dividing by a negative: x &lt; <strong>-4</strong>. Verify with a test value: x = -5 satisfies x &lt; -4, and plugging it into the original inequality gives -3(-5) = 15, and 15 &gt; 12 is true. Now check what happens if you forget to flip the sign: x &gt; -4 would incorrectly include x = 0, but -3(0) = 0, and 0 &gt; 12 is false — proof that skipping the flip produces a wrong solution set.
      </div>

      <QuickCheck
        question="Solve -5x ≤ 20 for x. What is the correct solution?"
        options={[
          { text: "x ≤ -4", correct: false, explanation: "This keeps the original sign direction, but dividing both sides by -5 (a negative number) requires flipping the inequality — the sign should point the other way." },
          { text: "x ≥ -4", correct: true, explanation: "Correct. Dividing both sides by -5 flips ≤ into ≥, giving x ≥ -4. Check with x = 0: -5(0) = 0, and 0 ≤ 20 is true, confirming 0 belongs in the solution set — which x ≥ -4 correctly includes." },
          { text: "x ≥ 4", correct: false, explanation: "The sign was correctly flipped, but 20 ÷ -5 = -4, not 4 — the negative sign on the divisor must be carried through to the resulting boundary value as well." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A budget constraint (real-world / applied case)</h3>
      <p>
      You have $60 to spend at an arcade, where each game token costs $2.50, and you also want to buy a $12.50 snack. If t is the number of tokens you can afford, the constraint is 2.50t + 12.50 ≤ 60 (you can spend up to, but not more than, $60). Subtract 12.50 from both sides: 2.50t ≤ 47.50. Divide both sides by 2.50 (a positive number, so no flip needed): t ≤ <strong>19</strong>. Since you can&apos;t buy a fraction of a token, this means you can afford at most 19 tokens plus your snack and stay within budget — exactly the kind of &quot;at most&quot; or &quot;at least&quot; real-world constraint inequalities are built to describe, where an exact equation would be too rigid.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Graphing inequality solutions on a number line"
        type="detail"
        svgSrc="/diagrams/math-numbers-understanding-inequalities-number-line.svg"
        altText="Two number lines stacked vertically. The top number line shows x less than or equal to 15 with a filled-in closed circle at 15 and shading extending left toward negative numbers. The bottom number line shows x less than negative 4 with an open, unfilled circle at negative 4 and shading extending left, illustrating the difference between strict and inclusive inequality boundaries."
      />
      <p>
      The circle style tells you whether the boundary number itself counts as a solution — filled in (closed) for ≤ and ≥, hollow (open) for strict &lt; and &gt; — and the shaded direction tells you which numbers satisfy the inequality. Reading a number line this way is often faster and less error-prone than re-checking the algebra, especially for confirming whether a sign-flip step was handled correctly.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Forgetting to flip the inequality sign when multiplying or dividing both sides by a negative number.", fix: "Build a habit of pausing at every multiplication or division step to check the sign of what you're multiplying or dividing by — flip only for negatives, never for positives." },
          { mistake: "Using a closed circle on a number line for a strict inequality (< or >), or an open circle for ≤ or ≥.", fix: "Match the circle to the symbol: any inequality with 'or equal to' (≤, ≥) gets a closed, filled circle; strict inequalities (<, >) get an open, hollow circle." },
          { mistake: "Treating an inequality's solution as a single number instead of a whole range.", fix: "Remember an inequality describes every number satisfying the condition, not one value — x > 3 is true for infinitely many numbers, not just for 'the next number after 3.'" },
        ]}
      />
      <MisconceptionCallout
        myth="The inequality sign flips whenever you feel like the numbers have gotten 'more negative,' or basically at random."
        reality={<p>The flip rule is precise, not a vague feeling: the inequality sign flips if, and only if, you multiply or divide both sides by a negative number. Adding or subtracting a negative number (e.g., subtracting -5, which is the same as adding 5) never triggers a flip — only multiplication or division by a negative does. The underlying reason is that multiplying by a negative number reverses the relative order of every number on the number line (5 &gt; 3, but -5 &lt; -3), so the inequality symbol has to reverse too, to keep describing a true statement.</p>}
      />

      <QuickCheck
        question="Which of these steps requires flipping the inequality sign?"
        options={[
          { text: "Subtracting 8 from both sides of x + 8 > 15", correct: false, explanation: "Subtraction never requires a sign flip, regardless of whether the number being subtracted is positive or negative." },
          { text: "Dividing both sides of -4x < 20 by -4", correct: true, explanation: "Correct. Dividing both sides by a negative number (-4) is exactly the operation that requires flipping the inequality sign — this gives x > -5." },
          { text: "Adding 10 to both sides of x - 2 ≥ 6", correct: false, explanation: "Addition never requires a sign flip. Only multiplying or dividing both sides by a negative number does." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Find the boundary value of x for ax + b = c (the tipping point of an inequality)"
        fields={[
          { key: "a", label: "Coefficient (a)", defaultValue: 2.5 },
          { key: "b", label: "Constant added (b)", defaultValue: 12.5 },
          { key: "c", label: "Limit / budget (c)", defaultValue: 60 },
        ]}
        resultLabel="Boundary value of x"
        formula="solveLinearEquationForX"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Solve one inequality that requires dividing by a negative number, and double-check your flipped sign by testing a value from your solution set in the original inequality.",
          "Sketch a number line for at least one inequality, choosing the correct open or closed circle based on whether the sign includes 'or equal to.'",
          "Write a real budget or time constraint you have as an inequality (a maximum spend, a minimum score) instead of an equation.",
          "Read the related entry on Solving Simple Equations to reinforce the core inverse-operation moves inequalities share with equations.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between an equation and an inequality?", answer: "An equation states two expressions are exactly equal and typically has one solution. An inequality states one expression is greater than, less than, or (with ≤/≥) at least as large as another, and typically has an entire range of solutions." },
          { question: "When does the inequality sign flip?", answer: "Only when you multiply or divide both sides of the inequality by a negative number. Adding or subtracting any number, positive or negative, never flips the sign." },
          { question: "How do you graph an inequality on a number line?", answer: "Mark the boundary value with an open circle for strict inequalities (< or >) or a closed circle for inclusive ones (≤ or ≥), then shade the number line in the direction the inequality describes (left for 'less than,' right for 'greater than')." },
          { question: "Why does dividing by a negative number flip an inequality?", answer: "Multiplying or dividing by a negative number reverses the relative order of numbers on the number line — for example, 5 > 3 but -5 < -3 — so the inequality symbol must reverse too, to keep describing a statement that's actually true." },
          { question: "Can an inequality have infinitely many solutions?", answer: "Yes, and it usually does. Unlike most equations, which have one specific solution, an inequality like x > 5 is satisfied by every real number greater than 5 — an infinite set of values." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
