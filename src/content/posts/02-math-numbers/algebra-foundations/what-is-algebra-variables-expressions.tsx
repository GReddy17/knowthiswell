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
  title: "What Is Algebra? Variables, Expressions, and Why Letters Stand In For Numbers",
  category: "math-numbers",
  order: 18,
  subtopic: "algebra-foundations",
  tags: [
    "algebra basics",
    "variables",
    "expressions",
    "what is algebra",
    "math foundations",
    "coefficients and constants",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "What algebra actually is, why letters replace unknown numbers, and how to read and evaluate an algebraic expression step by step.",
  summary: "Algebra is the branch of mathematics that uses letters, called variables, to stand for numbers that are unknown or changing, so one general rule can describe infinitely many specific cases at once.",
  sources: [
    { label: "Encyclopaedia Britannica — Algebra: History, Definition, & Facts", url: "https://www.britannica.com/science/algebra" },
    { label: "Encyclopaedia Britannica — Elementary Algebra", url: "https://www.britannica.com/science/elementary-algebra" },
    { label: "Khan Academy — Algebra Basics", url: "https://www.khanacademy.org/math/algebra-basics" },
  ],
  seeAlso: [
    "math-numbers/solving-simple-equations",
    "math-numbers/linear-equations-explained",
    "math-numbers/sequences-and-patterns",
    "math-numbers/types-of-numbers-natural-whole-integers-rational-irrational",
  ],
  glossary: [
    { term: "Variable", definition: "A letter or symbol standing in for a number that is unknown, changing, or not yet specified." },
    { term: "Expression", definition: "A mathematical phrase combining numbers, variables, and operations, with no equals sign — it can be evaluated but not 'solved'." },
    { term: "Term", definition: "A single number, variable, or product of numbers and variables within an expression, separated from other terms by + or - signs." },
    { term: "Coefficient", definition: "The number multiplied by a variable in a term — the 3 in 3x, for example." },
    { term: "Constant", definition: "A term in an expression that is a fixed number on its own, not attached to any variable." },
    { term: "Like terms", definition: "Terms that share the exact same variable(s) raised to the exact same power, and so can be combined by adding or subtracting their coefficients." },
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
          "Algebra replaces unknown or changing numbers with letters (variables) so one general rule can cover infinitely many specific numeric cases at once.",
          "An expression like 3x + 5 has no equals sign and can be evaluated for any value of x; an equation like 3x + 5 = 20 makes a specific claim that's only true for particular values.",
          "Combining like terms and distributing a coefficient across parentheses are the two core moves for simplifying any algebraic expression, before you ever get to solving anything.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/math-numbers/what-is-algebra-variables-expressions">Algebra</TermLink> is the part of math where letters stand in for numbers you don&apos;t know yet, or numbers that change. If a rideshare charges a $2 base fee plus $1.50 per mile, you could write that as &quot;2 + 1.50 × miles&quot; instead of recalculating the whole sentence every time the trip length changes. The letter — often <TermLink href="/math-numbers/what-is-algebra-variables-expressions">x</TermLink>, but it could be m for miles, t for time, or any symbol — is a placeholder. Once you plug in a real number for the letter, you can work out a real answer, just like arithmetic.</div>}
        detailed={<div className="prose-p">An <TermLink href="/math-numbers/what-is-algebra-variables-expressions">expression</TermLink> is built from <TermLink href="/math-numbers/what-is-algebra-variables-expressions">terms</TermLink> — pieces separated by + or - signs. In the expression 4x + 7 - 2x, there are three terms: 4x, 7, and -2x. Each term that includes a variable has a <TermLink href="/math-numbers/what-is-algebra-variables-expressions">coefficient</TermLink> (the 4 in 4x), and a term with no variable at all, like 7, is a <TermLink href="/math-numbers/what-is-algebra-variables-expressions">constant</TermLink>. Terms that share the same variable raised to the same power are called <TermLink href="/math-numbers/what-is-algebra-variables-expressions">like terms</TermLink> and can be combined by adding their coefficients — 4x and -2x are like terms, so 4x + 7 - 2x simplifies to 2x + 7. A second core tool is the distributive property: a(b + c) = ab + ac, which lets you multiply a number across every term inside a set of parentheses, e.g. 3(x + 4) = 3x + 12, not 3x + 4. Both moves — combining like terms and distributing — exist purely to rewrite an expression into a simpler, equivalent form without changing what it actually equals for any given value of the variable.</div>}
      />
      <FootnoteAside>The word &quot;algebra&quot; comes from the Arabic &quot;al-jabr,&quot; part of the title of a 9th-century mathematics text by Persian scholar al-Khwarizmi. Al-jabr roughly means &quot;reunion of broken parts,&quot; referring to the operation of moving a term from one side of an equation to the other — the same move you make every time you isolate a variable today.</FootnoteAside>

      <p>
      Knowing the vocabulary is one thing; actually evaluating an expression for a specific number is where it starts to feel like real math instead of definitions.
      </p>

      <QuickCheck
        question="Which of the following is an expression rather than an equation?"
        options={[
          { text: "5x - 3 = 12", correct: false, explanation: "This has an equals sign, which makes it an equation — a claim that's only true for a specific value of x (in this case, x = 3)." },
          { text: "5x - 3", correct: true, explanation: "Correct. With no equals sign, 5x - 3 is an expression. It can be evaluated for any value of x, but it isn't a claim that needs to be 'solved' or proven true." },
          { text: "x = 3", correct: false, explanation: "This is a very short equation — it states a specific value for x. An expression never contains an equals sign at all." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Evaluating a simple expression (baseline case)</h3>
      <div className="prose-p">
      Evaluate 3x + 5 when x = 4. Substitute 4 in for x: 3(4) + 5 = 12 + 5 = <strong>17</strong>. That&apos;s the entire process — replace the variable with its given value, then follow ordinary order of operations (multiplication before addition here). The same expression evaluated at a different value of x, say x = 10, gives a completely different result: 3(10) + 5 = <strong>35</strong>. This is exactly what makes an expression useful — one written rule handles every possible input.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Evaluating with a negative coefficient and a negative value (edge case / variation)</h3>
      <div className="prose-p">
      Evaluate 2x - 7 when x = -3. Substituting carefully: 2(-3) - 7 = -6 - 7 = <strong>-13</strong>. The most common slip here is mishandling the double negative or losing track of the subtraction sign — 2 times -3 must be computed as a single signed multiplication (giving -6) before the -7 is applied, not treated as 2x with the minus sign floating separately. Negative inputs don&apos;t change the rule for evaluating an expression, but they do make careless sign errors far more likely.
      </div>

      <QuickCheck
        question="What is the value of 4x + 9 when x = -2?"
        options={[
          { text: "1", correct: true, explanation: "Correct. 4(-2) + 9 = -8 + 9 = 1. Multiply the coefficient by the signed value of x first, then add the constant." },
          { text: "17", correct: false, explanation: "This comes from adding 4 and -2 first (treating 4x as if it meant 4 + x) instead of multiplying — 4x means 4 times x, not 4 plus x." },
          { text: "-1", correct: false, explanation: "Close, but a sign was dropped somewhere in the arithmetic. 4 times -2 is -8, and -8 + 9 is positive 1, not -1." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A rideshare fare formula (real-world / applied case)</h3>
      <p>
      A rideshare app charges a flat $2.50 pickup fee plus $1.25 per mile driven. As an algebraic expression with m standing for miles, the fare is 2.50 + 1.25m. For a 12-mile trip, substitute m = 12: 2.50 + 1.25(12) = 2.50 + 15.00 = <strong>$17.50</strong>. For a much shorter 3-mile trip, the same expression gives 2.50 + 1.25(3) = 2.50 + 3.75 = <strong>$6.25</strong>. Every fare estimator, phone plan calculator, and shipping cost tool on the internet is running this exact pattern — one algebraic expression, evaluated with whatever number the user enters.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The parts of an algebraic expression"
        type="detail"
        svgSrc="/diagrams/math-numbers-what-is-algebra-variables-expressions-parts-of-expression.svg"
        altText="The expression 4x plus 7 minus 2 labeled piece by piece: 4 is labeled coefficient, x is labeled variable, the whole piece 4x is labeled a term, 7 and negative 2 are each labeled constant terms, and the plus and minus signs are labeled operators separating the terms."
      />
      <p>
      Every algebraic expression, no matter how long, breaks down into this same handful of labeled pieces — terms joined by operators, each term either a constant on its own or a coefficient attached to a variable. Once you can point to each piece by name, combining like terms is just a matter of finding terms with matching variable labels and adding their coefficients together.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Forgetting to distribute a coefficient across every term inside parentheses, e.g. treating 3(x + 4) as 3x + 4 instead of 3x + 12.", fix: "Multiply the outside number by every single term inside the parentheses, one at a time — none of them are exempt just because they're further from the coefficient." },
          { mistake: "Combining unlike terms, such as adding 3x and 5x² as if they behaved the same way.", fix: "Only combine terms that share the identical variable raised to the identical power. 3x and 5x² are different kinds of quantities and cannot be added into a single term." },
          { mistake: "Dropping or flipping a sign when rearranging terms, e.g. treating -2x as +2x once it moves in the expression.", fix: "The sign directly in front of a term travels with that term permanently. Rewrite a - b as a + (-b) mentally if it helps keep the negative sign attached correctly." },
        ]}
      />
      <MisconceptionCallout
        myth="The variable in an algebra problem is always called x."
        reality={<p>Any letter or symbol can serve as a variable — x is simply the most common convention, traced back to French mathematician René Descartes&apos;s 17th-century notation. Physics problems commonly use t for time and v for velocity; economics uses P for price and Q for quantity; a spreadsheet formula uses a cell reference like A1 as its variable. The letter itself carries no mathematical meaning — it is only a placeholder for a number, and any unused symbol works exactly as well as x does.</p>}
      />

      <QuickCheck
        question="A physics formula for distance traveled is written d = rt, using d, r, and t instead of x, y, and z. Is this valid algebra?"
        options={[
          { text: "Yes — any letters can serve as variables; there's nothing special about x, y, and z specifically", correct: true, explanation: "Correct. Letters are just placeholders for numbers. Using d for distance, r for rate, and t for time is not only valid, it's clearer, since the letters hint at what each variable represents." },
          { text: "No — algebra formulas must use x, y, and z to be considered proper algebra", correct: false, explanation: "There's no such requirement. x, y, and z are common by convention (especially in textbooks), not by mathematical rule — any unused symbol works identically." },
          { text: "No — d = rt is actually a different kind of math entirely, not algebra", correct: false, explanation: "d = rt is a standard algebraic expression relating three variables. Changing which letters are used doesn't change what branch of math it belongs to." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Evaluate an expression (ax + b) for a given x"
        fields={[
          { key: "a", label: "Coefficient (a)", defaultValue: 3 },
          { key: "x", label: "Value of x", defaultValue: 4 },
          { key: "b", label: "Constant (b)", defaultValue: 5 },
        ]}
        resultLabel="Value of ax + b"
        formula="evaluateLinearExpressionAxPlusB"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Pick any everyday cost that has a flat fee plus a per-unit charge (a phone plan, a taxi fare, a gym day-pass) and write it as an algebraic expression with a variable for the changing quantity.",
          "Practice simplifying one expression with like terms and one with a parenthesis to distribute, so both core moves feel automatic before moving on to equations.",
          "Try the calculator above with a negative value of x to build confidence handling signs correctly.",
          "Read the related entry on Solving Simple Equations to see what changes once an expression gets an equals sign attached to it.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is algebra in simple terms?", answer: "Algebra is the branch of math that uses letters, called variables, to stand for numbers that are unknown or can change. It lets you write one general rule, like a fare formula or a perimeter formula, that works for any specific number you plug in." },
          { question: "What is the difference between an expression and an equation?", answer: "An expression (like 3x + 5) has no equals sign and can be evaluated for any value of the variable. An equation (like 3x + 5 = 20) includes an equals sign and makes a specific claim that's only true for particular values of the variable." },
          { question: "Why do we use letters like x in algebra?", answer: "Letters act as placeholders for numbers that are unknown or that change. Any letter works — x is just the most common convention, dating back to 17th-century mathematician René Descartes — but t, m, or any other unused symbol serves exactly the same purpose." },
          { question: "What does combining like terms mean?", answer: "Like terms share the same variable raised to the same power (such as 4x and -2x). Combining them means adding or subtracting their coefficients to rewrite them as a single term, which simplifies the expression without changing its value." },
          { question: "How do you evaluate an algebraic expression?", answer: "Substitute the given number in for every instance of the variable, then follow the normal order of operations (multiplication and division before addition and subtraction) to compute the result." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
