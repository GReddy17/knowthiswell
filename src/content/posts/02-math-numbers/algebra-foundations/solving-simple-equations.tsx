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
  title: "Solving Simple Equations: The Balance-Scale Method Explained",
  category: "math-numbers",
  order: 19,
  subtopic: "algebra-foundations",
  tags: [
    "solving equations",
    "one-step equations",
    "two-step equations",
    "inverse operations",
    "algebra basics",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How to solve a simple algebraic equation using inverse operations, why the same move must happen on both sides, and worked examples with real numbers.",
  summary: "Solving an equation means finding the value of the variable that makes both sides equal, using inverse operations to undo whatever was done to the variable, one step at a time.",
  sources: [
    { label: "Khan Academy — Solving Basic Equations & Inequalities (One Variable, Linear)", url: "https://www.khanacademy.org/math/algebra-home/alg-basic-eq-ineq" },
    { label: "Encyclopaedia Britannica — Linear Equation", url: "https://www.britannica.com/science/linear-equation" },
    { label: "National Council of Teachers of Mathematics — Illuminations", url: "https://www.nctm.org/illuminations/" },
  ],
  seeAlso: [
    "math-numbers/what-is-algebra-variables-expressions",
    "math-numbers/linear-equations-explained",
    "math-numbers/understanding-inequalities",
    "math-numbers/ratios-and-proportions",
  ],
  glossary: [
    { term: "Equation", definition: "A mathematical statement that two expressions are equal, connected by an equals sign." },
    { term: "Solution", definition: "The value (or values) of the variable that makes an equation true." },
    { term: "Inverse operation", definition: "An operation that undoes another operation — subtraction undoes addition, division undoes multiplication." },
    { term: "Isolate the variable", definition: "The goal of solving an equation: rearrange it so the variable stands alone on one side, with its value on the other." },
    { term: "Balance-scale principle", definition: "The rule that whatever operation is performed on one side of an equation must be performed identically on the other side, to keep both sides equal." },
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
          "Solving an equation means finding the specific value of the variable that makes both sides equal — not guessing, but reversing the operations that were applied to it.",
          "Whatever operation you apply to one side of an equation, you must apply identically to the other side, or the two sides stop being equal — this is the balance-scale principle.",
          "Two-step equations undo operations in reverse order from how they were built: undo addition/subtraction first, then undo multiplication/division.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A simple <TermLink href="/math-numbers/solving-simple-equations">equation</TermLink> like x + 5 = 12 is a puzzle: what number, put in place of x, makes both sides equal? Here it&apos;s 7, because 7 + 5 = 12. Instead of guessing, you can find it directly by undoing what&apos;s been done to x — since 5 was added to x, subtract 5 from both sides: x + 5 - 5 = 12 - 5, leaving x = 7. Think of an equation like a balanced scale: whatever you do to one side, you must do to the other, or the scale tips and the two sides stop being equal.</div>}
        detailed={<div className="prose-p">Every simple equation is solved by applying <TermLink href="/math-numbers/solving-simple-equations">inverse operations</TermLink> to <TermLink href="/math-numbers/solving-simple-equations">isolate the variable</TermLink> — addition is undone by subtraction, subtraction by addition, multiplication by division, and division by multiplication. For a two-step equation like 3x + 4 = 19, undo the operations in reverse of the order they were applied: since x was first multiplied by 3 and then had 4 added, you undo addition first (subtract 4 from both sides: 3x = 15) and multiplication last (divide both sides by 3: x = 5). This reverse ordering matters — trying to divide by 3 before removing the +4 would divide the constant term too, corrupting the equation. The underlying justification for every step is the <TermLink href="/math-numbers/solving-simple-equations">balance-scale principle</TermLink>: an equation states two expressions are equal, and adding, subtracting, multiplying, or dividing both sides by the identical amount preserves that equality, no matter how many times you repeat it.</div>}
      />
      <FootnoteAside>The equals sign (=) was invented in 1557 by Welsh mathematician Robert Recorde, who chose two parallel lines specifically &quot;bicause noe 2 thynges can be moare equalle&quot; — an explanation he wrote directly into his textbook, The Whetstone of Witte.</FootnoteAside>

      <p>
      The balance-scale idea is simple to state, but it only becomes automatic once you&apos;ve walked through the two-step process on real numbers a few times.
      </p>

      <QuickCheck
        question="To solve the equation x - 8 = 15 for x, what should you do to both sides?"
        options={[
          { text: "Subtract 8 from both sides", correct: false, explanation: "Subtracting 8 again moves in the wrong direction — 8 is already being subtracted from x in the original equation, so subtracting again doesn't undo it." },
          { text: "Add 8 to both sides", correct: true, explanation: "Correct. Since 8 is being subtracted from x, the inverse operation is addition — adding 8 to both sides gives x = 15 + 8 = 23." },
          { text: "Divide both sides by 8", correct: false, explanation: "Division would undo multiplication, but there's no multiplication in this equation — x - 8 = 15 only involves subtraction, so addition is the correct inverse operation." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A one-step equation (baseline case)</h3>
      <div className="prose-p">
      Solve 4x = 28 for x. Since x is being multiplied by 4, apply the inverse operation — division — to both sides: 4x ÷ 4 = 28 ÷ 4, which simplifies to x = <strong>7</strong>. Check the answer by substituting it back into the original equation: 4(7) = 28. True, so x = 7 is confirmed correct. Checking your solution this way costs almost no extra time and catches nearly every arithmetic slip.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A two-step equation with a negative result (edge case / variation)</h3>
      <div className="prose-p">
      Solve 5x + 11 = 1 for x. First undo the addition: subtract 11 from both sides, giving 5x = 1 - 11 = -10. Then undo the multiplication: divide both sides by 5, giving x = -10 ÷ 5 = <strong>-2</strong>. Negative solutions aren&apos;t a sign of a mistake — they&apos;re exactly as valid as positive ones. Check it: 5(-2) + 11 = -10 + 11 = 1. True, confirming x = -2.
      </div>

      <QuickCheck
        question="Solve 2x - 9 = 7 for x. What are the correct two steps, in order?"
        options={[
          { text: "Divide both sides by 2 first, then subtract 9", correct: false, explanation: "Dividing before isolating the constant term would also divide the -9, corrupting the equation. The addition/subtraction step must come first." },
          { text: "Add 9 to both sides first (giving 2x = 16), then divide both sides by 2 (giving x = 8)", correct: true, explanation: "Correct. Undo the operations in reverse order of how they were applied: addition/subtraction first (2x = 16), then multiplication/division last (x = 8)." },
          { text: "Subtract 2 from both sides first, then add 9", correct: false, explanation: "The 2 is a coefficient (multiplying x), not a standalone term being added or subtracted — it can only be removed by division, and only after the constant term is handled first." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Finding a missing quantity in a shared restaurant bill (real-world / applied case)</h3>
      <p>
      Four friends split a restaurant bill evenly, and each person also chips in $3 for the tip on top of their even share. Each person ends up paying $18 total. As an equation with s standing for each person&apos;s share of the food bill: s + 3 = 18. Subtract 3 from both sides: s = <strong>$15</strong> per person for food, meaning the total food bill was 4 × 15 = $60. This is the identical two-step pattern as the algebra examples above — a real constraint (each person&apos;s total payment) turned into an equation and solved by undoing the addition first.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The balance-scale model of solving 3x + 4 = 19"
        type="detail"
        svgSrc="/diagrams/math-numbers-solving-simple-equations-balance-scale.svg"
        altText="A two-pan balance scale shown in three stages: first balanced with three x-blocks plus a 4-weight on the left pan and a 19-weight on the right pan; second stage shows a 4-weight removed from both pans leaving three x-blocks balanced against a 15-weight; third stage shows both pans divided into three equal groups, leaving one x-block balanced against a 5-weight, labeled x equals 5."
      />
      <p>
      Each stage of the diagram is one legal move on the balance scale: remove the same weight from both pans, or split both pans into the same number of equal groups. Because the scale starts balanced and every move is applied identically to both sides, it stays balanced all the way through — which is exactly why the final reading, x = 5, is guaranteed to be the correct solution rather than a guess.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Applying an operation to only one side of the equation instead of both.", fix: "Treat the equals sign as a strict balance point — any operation performed on the left side must be performed, in full, on the right side too, every single time." },
          { mistake: "Undoing multiplication/division before addition/subtraction in a two-step equation.", fix: "Undo operations in the reverse order they were applied — constants (addition/subtraction) first, coefficients (multiplication/division) last." },
          { mistake: "Skipping the final check of substituting the solution back into the original equation.", fix: "Always plug your answer back in before moving on — it takes seconds and catches almost every arithmetic error before it compounds into a wrong final answer." },
        ]}
      />
      <MisconceptionCallout
        myth="Solving an equation means 'moving' a term to the other side, and it magically flips its sign."
        reality={<p>Nothing actually teleports across the equals sign. &quot;Moving a term and flipping its sign&quot; is shorthand for applying an inverse operation to both sides — subtracting the same term from both sides of x + 5 = 12 gives x + 5 - 5 = 12 - 5, and the +5 on the left cancels to 0, leaving x = 12 - 5 = 7. The term didn&apos;t travel anywhere; it was canceled out on the left by an identical operation applied to both sides, which happens to look like &quot;moving with a sign flip&quot; as a shortcut.</p>}
      />

      <QuickCheck
        question="A student solves x + 7 = 20 by writing 'move the 7 to the other side and flip its sign,' getting x = 20 - 7 = 13. Is the reasoning behind this shortcut actually correct?"
        options={[
          { text: "The answer is right, but the real reason is that subtracting 7 from both sides cancels the +7 on the left, not that the number 'moved'", correct: true, explanation: "Correct. x = 13 is the right answer, but nothing physically moves across the equals sign — subtracting 7 from both sides is the actual operation, and it happens to produce the same visual result as the shortcut." },
          { text: "The answer is wrong — you should add 7 to both sides instead", correct: false, explanation: "Adding 7 would make the left side x + 14, moving further from isolating x. Subtracting 7 from both sides is the correct inverse operation here." },
          { text: "The answer and reasoning are both fully correct — numbers do genuinely move across the equals sign", correct: false, explanation: "The final answer (x = 13) is correct, but no term physically moves. It's an inverse operation applied to both sides that produces the same result as the popular shortcut." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Solve ax + b = c for x"
        fields={[
          { key: "a", label: "Coefficient (a)", defaultValue: 3 },
          { key: "b", label: "Constant added (b)", defaultValue: 4 },
          { key: "c", label: "Right-hand side (c)", defaultValue: 19 },
        ]}
        resultLabel="Value of x"
        formula="solveLinearEquationForX"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Solve one one-step and one two-step equation by hand, then check both by substituting your answer back into the original equation.",
          "Try the calculator above with a negative constant (b) to practice equations that produce negative solutions.",
          "Next time you split a bill or calculate a per-item cost from a total, write it as a real equation instead of doing it by trial and error.",
          "Read the related entry on Linear Equations Explained to see how this same balance-scale idea extends to equations with two variables and graphs.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do you solve a simple equation step by step?", answer: "Apply inverse operations to both sides of the equation to isolate the variable — undo addition with subtraction, subtraction with addition, multiplication with division, and division with multiplication, undoing constants before coefficients in a two-step equation." },
          { question: "Why do you do the same thing to both sides of an equation?", answer: "An equation states that two expressions are equal. Applying the same operation to both sides keeps them equal at every step, which is what guarantees the final answer is a true solution rather than a guess." },
          { question: "What order do you solve a two-step equation in?", answer: "Undo addition or subtraction first, then undo multiplication or division last — the reverse of the order the operations were originally applied to the variable." },
          { question: "How do you check if you solved an equation correctly?", answer: "Substitute your solution back into the original equation in place of the variable. If both sides come out equal, the solution is correct." },
          { question: "Can the solution to an equation be a negative number?", answer: "Yes. A negative solution is exactly as valid as a positive one — it simply means the value of the variable that makes the equation true happens to be negative." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
