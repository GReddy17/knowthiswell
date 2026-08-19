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
  title: "Linear Equations Explained: Slope, Intercept, and Straight-Line Graphs",
  category: "math-numbers",
  order: 20,
  subtopic: "algebra-foundations",
  tags: [
    "linear equations",
    "slope",
    "y-intercept",
    "slope-intercept form",
    "graphing lines",
    "algebra basics",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "What makes an equation linear, how slope and y-intercept control the shape of its graph, and how to read a real-world rate from a straight line.",
  summary: "A linear equation is any equation whose graph forms a straight line, most commonly written as y = mx + b, where m is the slope (steepness) and b is the y-intercept (starting value).",
  sources: [
    { label: "Encyclopaedia Britannica — Linear Equation", url: "https://www.britannica.com/science/linear-equation" },
    { label: "Khan Academy — Linear Equations and Inequalities (Algebra Basics)", url: "https://www.khanacademy.org/math/algebra-basics/alg-basics-linear-equations-and-inequalities" },
  ],
  seeAlso: [
    "math-numbers/solving-simple-equations",
    "math-numbers/understanding-inequalities",
    "math-numbers/sequences-and-patterns",
    "math-numbers/ratios-and-proportions",
  ],
  glossary: [
    { term: "Linear equation", definition: "An equation whose graph forms a straight line — in two variables, any equation of the form ax + by = c." },
    { term: "Slope", definition: "A measure of a line's steepness and direction, calculated as the change in y divided by the change in x (rise over run) between two points." },
    { term: "y-intercept", definition: "The point where a line crosses the vertical (y) axis — the value of y when x equals 0." },
    { term: "Slope-intercept form", definition: "The equation of a line written as y = mx + b, where m is the slope and b is the y-intercept." },
    { term: "Rate of change", definition: "How much one quantity changes relative to another — the real-world meaning of slope in an applied linear equation." },
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
          "A linear equation is any equation whose graph is a perfectly straight line — no curves, no bends, no breaks.",
          "Written in slope-intercept form y = mx + b, the slope m controls steepness and direction, and the y-intercept b is the starting value where the line crosses the y-axis.",
          "Slope is a rate — it directly represents how fast a real quantity is changing, like dollars per mile or degrees per hour, which is why linear equations show up constantly in pricing, science, and forecasting.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/math-numbers/linear-equations-explained">linear equation</TermLink> is any equation that, when graphed, draws a perfectly straight line — never a curve. The most common form is y = mx + b: b tells you where the line starts (its value when x is 0), and m tells you how steeply it climbs or falls as x increases. A phone plan that costs $20 up front plus $0.10 per text can be written as y = 0.10x + 20, where x is the number of texts and y is the total bill — a straight line because every additional text adds exactly the same 10 cents, no matter how many texts came before it.</div>}
        detailed={<div className="prose-p">The defining feature of a linear equation is a constant <TermLink href="/math-numbers/linear-equations-explained">rate of change</TermLink> — the <TermLink href="/math-numbers/linear-equations-explained">slope</TermLink>. Formally, slope m is calculated between any two points on the line as m = (y₂ - y₁) / (x₂ - x₁), often shortened to &quot;rise over run.&quot; Because this ratio is identical between every pair of points on a straight line, you can compute it from any two points and get the same answer — that constancy is exactly what makes the graph straight rather than curved. Combined with the <TermLink href="/math-numbers/linear-equations-explained">y-intercept</TermLink> b (where the line crosses the y-axis, at x = 0), the full equation y = mx + b — called <TermLink href="/math-numbers/linear-equations-explained">slope-intercept form</TermLink> — fully determines the line: change b and the whole line shifts up or down without changing its steepness; change m and the line tilts more or less steeply, or reverses direction entirely if m becomes negative. A slope of exactly 0 produces a perfectly horizontal line (y never changes as x changes), and an undefined slope (division by zero, when x₂ = x₁) produces a perfectly vertical line, which technically isn&apos;t a function at all.</div>}
      />
      <FootnoteAside>The letter m for slope has no agreed-upon origin — one popular theory ties it to the French verb &quot;monter&quot; (&quot;to climb&quot;), but historians have found no solid documentary evidence for this, and the convention may simply have spread from an influential 19th-century textbook.</FootnoteAside>

      <p>
      Slope and y-intercept are abstract until you connect them to something moving or accumulating in the real world — a bill growing with usage, a car eating up distance at a fixed speed, a candle burning down at a steady rate.
      </p>

      <QuickCheck
        question="A line has the equation y = 4x + 10. What do the 4 and the 10 represent?"
        options={[
          { text: "4 is the y-intercept and 10 is the slope", correct: false, explanation: "This has the roles reversed. In slope-intercept form y = mx + b, the number multiplying x (here, 4) is always the slope, and the standalone constant (here, 10) is always the y-intercept." },
          { text: "4 is the slope and 10 is the y-intercept", correct: true, explanation: "Correct. In y = mx + b, m (the coefficient of x) is the slope, and b (the constant term) is the y-intercept — the value of y when x = 0." },
          { text: "Both 4 and 10 together represent the slope; the y-intercept isn't shown in this equation", correct: false, explanation: "The y-intercept is always visible directly in slope-intercept form — it's the standalone constant, 10 in this case, not something hidden or combined with the slope." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Calculating slope from two points (baseline case)</h3>
      <div className="prose-p">
      Find the slope of the line passing through (2, 5) and (6, 17). Using m = (y₂ - y₁) / (x₂ - x₁): m = (17 - 5) / (6 - 2) = 12 / 4 = <strong>3</strong>. This means for every 1 unit x increases, y increases by 3 — a rise of 3 for every run of 1. Picking a different pair of points on the same line, say (0, -1) and (2, 5), gives the identical result: m = (5 - (-1)) / (2 - 0) = 6 / 2 = 3, confirming the slope is constant everywhere on the line.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A negative slope and a zero slope (edge case / variation)</h3>
      <div className="prose-p">
      A candle burns down at a constant rate: it starts at 20 cm and loses 2 cm of height per hour. As y = -2x + 20 (x in hours, y in cm), the slope is <strong>-2</strong> — negative because the quantity is decreasing, not increasing, as x grows. Compare this to a line like y = 7, which has a slope of exactly <strong>0</strong>: y never changes no matter what x is, producing a perfectly flat horizontal line. Neither case breaks any rule — slope simply carries a sign and can be zero, just like any other rate of change (a car parked and not moving has a speed of 0, not an undefined one).
      </div>

      <QuickCheck
        question="A water tank starts with 500 liters and drains at 25 liters per minute. Which slope value correctly describes this situation as a linear equation?"
        options={[
          { text: "m = 25, because 25 liters change every minute", correct: false, explanation: "The rate is 25 liters per minute, but the tank is draining — decreasing — not filling. The sign of the slope must reflect that direction, so a plain positive 25 is incorrect here." },
          { text: "m = -25, because the amount of water is decreasing by 25 liters every minute", correct: true, explanation: "Correct. Slope carries direction as well as size — since the tank is draining (losing volume as time increases), the slope must be negative: -25." },
          { text: "m = 500, because that's the starting amount", correct: false, explanation: "500 is the y-intercept (the starting value at time 0), not the slope. Slope describes the rate of change, not the initial quantity." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Reading a rideshare pricing line (real-world / applied case)</h3>
      <p>
      A rideshare service&apos;s fare follows y = 1.75x + 3, where x is miles driven and y is the total fare in dollars. The y-intercept, 3, is the base fee charged even for a near-zero-distance ride. The slope, 1.75, is the per-mile rate — a direct, readable price. For a 10-mile ride: y = 1.75(10) + 3 = 17.50 + 3 = <strong>$20.50</strong>. Comparing two rideshare services by comparing their slopes (per-mile rates) and y-intercepts (base fees) side by side is exactly how you&apos;d determine which one is cheaper for a long trip versus a short one — the service with the lower slope wins for long distances, regardless of which has the lower base fee.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Slope and y-intercept on the graph of y = mx + b"
        type="detail"
        svgSrc="/diagrams/math-numbers-linear-equations-explained-slope-intercept-graph.svg"
        altText="An x-y coordinate grid showing a straight line crossing the y-axis at a labeled point b (the y-intercept), with a right triangle drawn between two points on the line to show a vertical rise and horizontal run, labeled slope m equals rise over run, and a second, steeper line and a third, downward-sloping line shown for comparison."
      />
      <p>
      Every straight line on the grid is fully described by just two numbers: where it crosses the y-axis (b) and how steeply it climbs or falls (m). Steeper lines have larger slope magnitudes; lines tilting the opposite direction have negative slopes; and shifting b up or down slides the entire line vertically without changing its angle at all — the visual proof that slope and intercept control genuinely independent things about a line.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Swapping the roles of slope and y-intercept when reading y = mx + b.", fix: "The number attached to x is always the slope; the standalone number by itself is always the y-intercept. Say it out loud if it helps: 'm for multiplied by x, b for by itself.'" },
          { mistake: "Computing rise over run backwards, e.g. (x₂ - x₁) / (y₂ - y₁) instead of (y₂ - y₁) / (x₂ - x₁).", fix: "Slope is always change in y (vertical) divided by change in x (horizontal) — y always goes on top. Keep point labels consistent: don't subtract y₂ - y₁ on top while subtracting x₁ - x₂ on the bottom." },
          { mistake: "Assuming a line with a negative slope isn't 'real' or represents an error.", fix: "A negative slope simply means the quantity decreases as x increases — a completely normal, common situation (draining tanks, cooling temperatures, depreciating value), not a mistake." },
        ]}
      />
      <MisconceptionCallout
        myth="A steeper-looking line always has a bigger slope number."
        reality={<p>Steepness on a graph is only comparable when both axes use the same scale — the actual slope is a number computed from rise over run, independent of how the graph happens to be drawn. A line with slope 2 plotted on axes where each gridline represents 10 units can look far less steep than a line with slope 0.5 plotted on axes where each gridline represents 1 unit, purely because of the visual scale chosen. Always read the slope from the equation or calculate it from two points — never estimate it by eye from a picture alone, since axis scaling can make any slope look steeper or flatter than it really is.</p>}
      />

      <QuickCheck
        question="Two graphs are shown side by side. Graph A's line looks steeper to the eye than Graph B's line. Can you conclude Graph A has the larger slope value?"
        options={[
          { text: "No — not unless both graphs use identical axis scales; visual steepness alone doesn't reveal the actual slope number", correct: true, explanation: "Correct. Axis scaling can make any slope look steeper or flatter. The only reliable way to compare slopes is to read the equations directly or calculate rise over run from actual coordinate values." },
          { text: "Yes — a steeper-looking line always has the larger slope, regardless of the graph's scale", correct: false, explanation: "This ignores axis scaling. Two graphs with different scales can make a smaller slope look steeper than a larger one purely through how the axes are drawn." },
          { text: "Yes, but only if both lines have positive slopes", correct: false, explanation: "The sign of the slope doesn't fix the underlying issue — axis scaling can distort apparent steepness for both positive and negative slopes alike." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Calculate slope from two points (m = (y₂ - y₁) / (x₂ - x₁))"
        fields={[
          { key: "x1", label: "x₁", defaultValue: 2 },
          { key: "y1", label: "y₁", defaultValue: 5 },
          { key: "x2", label: "x₂", defaultValue: 6 },
          { key: "y2", label: "y₂", defaultValue: 17 },
        ]}
        resultLabel="Slope (m)"
        formula="slopeFromTwoPoints"
        formatResult="number"
      />
      <EntryCalculator
        title="Solve for x on a line ax + b = c (finding where y hits a target value)"
        fields={[
          { key: "a", label: "Slope (a)", defaultValue: 1.75 },
          { key: "b", label: "y-intercept (b)", defaultValue: 3 },
          { key: "c", label: "Target value (c)", defaultValue: 20.5 },
        ]}
        resultLabel="Value of x"
        formula="solveLinearEquationForX"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Find any real pricing plan with a base fee plus a per-unit rate and write it in slope-intercept form (y = mx + b) yourself.",
          "Use the slope calculator above on two points from the same real line to confirm you get the same slope no matter which two points you pick.",
          "Practice reading slope's sign correctly: positive means increasing, negative means decreasing, zero means constant.",
          "Read the related entry on Understanding Inequalities to see how the same slope-intercept idea extends from an exact line to a shaded region.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What makes an equation a linear equation?", answer: "An equation is linear if its graph is a perfectly straight line, which happens when the rate of change (slope) between any two points on it stays constant — the variable appears only to the first power, with no exponents, roots, or products of variables." },
          { question: "What is the difference between slope and y-intercept?", answer: "Slope (m) measures how steeply the line rises or falls — the rate of change. The y-intercept (b) is where the line crosses the y-axis, the starting value when x equals 0. In y = mx + b, they control the line's angle and vertical position independently." },
          { question: "How do you find the slope between two points?", answer: "Use the formula m = (y₂ - y₁) / (x₂ - x₁), often remembered as 'rise over run.' Subtract the y-values, subtract the x-values in the same point order, and divide." },
          { question: "Can a linear equation have a negative slope?", answer: "Yes. A negative slope simply means the line falls as x increases — the output quantity decreases, which is just as valid and common as an increasing (positive-slope) line." },
          { question: "What is slope-intercept form used for?", answer: "Slope-intercept form (y = mx + b) makes it easy to read a line's rate of change and starting value directly from the equation, which is why it's the standard form for pricing formulas, rate problems, and quick graphing." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
