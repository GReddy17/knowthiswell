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
  title: "Circles: Radius, Diameter, and Circumference Explained",
  category: "math-numbers",
  order: 28,
  subtopic: "geometry-basics",
  tags: [
    "circle",
    "radius",
    "diameter",
    "circumference",
    "pi",
    "geometry basics",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How radius, diameter, and circumference relate through pi, and why 3.14 is only ever an approximation, never the exact value.",
  summary: "A circle's radius, diameter, and circumference are all locked together by one constant, pi (π) — the diameter is always twice the radius, and the circumference is always π times the diameter, no matter how big or small the circle is.",
  sources: [
    { label: "MathWorld (Wolfram) — Circle", url: "https://mathworld.wolfram.com/Circle.html" },
    { label: "MathWorld (Wolfram) — Pi", url: "https://mathworld.wolfram.com/Pi.html" },
    { label: "Encyclopaedia Britannica — Circle", url: "https://www.britannica.com/science/circle-mathematics" },
    { label: "Khan Academy — Basic Geometry", url: "https://www.khanacademy.org/math/basic-geo" },
  ],
  seeAlso: [
    "math-numbers/perimeter-area-and-volume",
    "math-numbers/the-pythagorean-theorem",
    "math-numbers/basic-shapes-and-properties",
  ],
  glossary: [
    { term: "Radius", definition: "The distance from a circle's center to any point on its edge." },
    { term: "Diameter", definition: "The distance across a circle through its center, always exactly twice the radius." },
    { term: "Circumference", definition: "The total distance around the outside of a circle — the circle's version of perimeter." },
    { term: "Pi (π)", definition: "The fixed ratio of a circle's circumference to its diameter for every circle, approximately 3.14159, an irrational number with an endless, non-repeating decimal expansion." },
    { term: "Chord", definition: "A straight line segment connecting any two points on a circle's edge; a diameter is the longest possible chord." },
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
          "Radius, diameter, and circumference are locked to each other by fixed ratios: diameter = 2 × radius, and circumference = π × diameter (equivalently, 2πr) — true for every circle that exists, big or small.",
          "Pi (π) is irrational: its decimal digits never terminate or repeat, so 3.14 and 22/7 are useful rounded approximations, never the exact value.",
          "Because circumference scales directly with radius but area scales with radius squared, doubling a circle's radius only doubles its circumference — but it quadruples its area.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Every circle has three connected measurements. The <TermLink href="/math-numbers/circles-radius-diameter-circumference">radius</TermLink> is the distance from the center to the edge — like one spoke of a bike wheel. The <TermLink href="/math-numbers/circles-radius-diameter-circumference">diameter</TermLink> is the distance straight across the circle through the center — always exactly double the radius. The <TermLink href="/math-numbers/circles-radius-diameter-circumference">circumference</TermLink> is the distance all the way around the outside — a circle&apos;s version of perimeter. All three grow together in a fixed, predictable way as a circle gets bigger or smaller.</div>}
        detailed={<div className="prose-p">The relationship between circumference and diameter is where <TermLink href="/math-numbers/circles-radius-diameter-circumference">pi (π)</TermLink> comes from: for any circle at all, dividing its circumference by its diameter always produces the same constant, approximately 3.14159. That means circumference = π × diameter, or equivalently, circumference = 2πr (since diameter = 2 × radius). π is irrational — proven mathematically to never terminate or fall into a repeating pattern — so any decimal value used for it (3.14, 3.14159, 22/7) is necessarily a rounded approximation, with more digits producing more precision but never an exact final value. The related area formula, A = πr², uses the radius squared rather than the diameter directly, which is the source of a very different scaling behavior from circumference.</div>}
      />
      <FootnoteAside>The symbol π was introduced by Welsh mathematician William Jones in 1706 and popularized by Swiss mathematician Leonhard Euler later that century. Supercomputers have since calculated pi to over 100 trillion decimal digits — but NASA&apos;s Jet Propulsion Laboratory has stated that just 15 digits of pi are enough precision to calculate the circumference of a circle the size of the observable universe to within the width of a single hydrogen atom, which is a useful sense of how much of that trillion-digit computation is pure mathematical curiosity rather than practical necessity.</FootnoteAside>

      <p>
      The radius-diameter-circumference relationship is simple arithmetic once you have one measurement — the part worth double-checking is which one you actually started with.
      </p>

      <QuickCheck
        question="A circular table has a diameter of 1.2 meters. What is its radius?"
        options={[
          { text: "2.4 meters, since radius is double the diameter", correct: false, explanation: "This reverses the relationship. Diameter is double the radius, not the other way around — so radius is smaller than diameter, not larger." },
          { text: "0.6 meters, since radius is half the diameter", correct: true, explanation: "Correct. Radius = diameter ÷ 2 = 1.2 ÷ 2 = 0.6 meters. Diameter is always exactly twice the radius, so dividing by 2 goes the other direction." },
          { text: "1.2 meters, since radius and diameter are the same measurement", correct: false, explanation: "Radius and diameter measure different distances — radius is center-to-edge, diameter is edge-to-edge through the center — so they can't be equal unless the circle has zero size." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Circumference and area from a given radius (baseline case)</h3>
      <div className="prose-p">
      A circle has a radius of 7 cm. Circumference = 2πr = 2 × π × 7 ≈ <strong>43.98 cm</strong>. Area = πr² = π × 7² = π × 49 ≈ <strong>153.94 cm²</strong>. (Using the classic approximation 22/7 for π, which divides especially cleanly against a radius of 7: 2 × 22/7 × 7 = 44 cm — close to the more precise 43.98 cm, which is exactly why 22/7 was historically popular for hand calculation with radius values like this one.)
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Working backward from circumference to find radius (edge case / variation)</h3>
      <div className="prose-p">
      A bicycle wheel&apos;s circumference is measured at 2.10 meters (one full rotation covers that distance). Rearranging circumference = 2πr to solve for radius: r = circumference ÷ (2π) = 2.10 ÷ 6.2832 ≈ <strong>0.334 meters</strong>, so the diameter is about 0.668 meters, or roughly 26 inches — a standard adult bicycle wheel size. This is the reverse direction from Example 1: instead of starting with radius and finding circumference, you start with a measured circumference and divide backward to recover the radius, which is exactly how a wheel&apos;s size gets identified from a distance-per-rotation measurement.
      </div>

      <QuickCheck
        question="If you know a circle's circumference but not its radius, how do you find the radius?"
        options={[
          { text: "Divide the circumference by 2π", correct: true, explanation: "Correct. Rearranging circumference = 2πr gives r = circumference ÷ (2π) — dividing the known circumference by 2π isolates the radius." },
          { text: "Multiply the circumference by 2π", correct: false, explanation: "Multiplying goes the wrong direction — that would give a much larger, meaningless number. Since circumference = 2π × radius, finding radius requires dividing, not multiplying, by 2π." },
          { text: "Divide the circumference by π only, without the 2", correct: false, explanation: "This would actually recover the diameter, not the radius, since circumference ÷ π = diameter. Radius still needs one more step: dividing that result by 2, or dividing the original circumference by 2π directly." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Comparing a 12-inch and a 16-inch pizza (real-world / applied case)</h3>
      <p>
      Pizza sizes are named by diameter. A 12-inch pizza has a radius of 6 inches, so its area is π × 6² = π × 36 ≈ <strong>113.1 square inches</strong>. A 16-inch pizza has a radius of 8 inches, so its area is π × 8² = π × 64 ≈ <strong>201.1 square inches</strong>. The diameter only grew by about 33% (from 12 to 16 inches), but the actual amount of pizza grew by about 78% (from 113.1 to 201.1 square inches) — because area scales with the <em>square</em> of the radius, not the radius itself. Ordering &quot;one size up&quot; on a pizza gets you proportionally far more food than the size label alone suggests.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Circle anatomy: radius, diameter, and circumference"
        type="detail"
        svgSrc="/diagrams/math-numbers-circles-radius-diameter-circumference-anatomy.svg"
        altText="A single circle diagram with the radius drawn as a line from the center to the edge and labeled r, the diameter drawn as a full line through the center from edge to edge and labeled 2r, and the circumference marked as a highlighted curved outline around the entire circle labeled with the formula 2 pi r, showing how all three measurements relate on one shape."
      />
      <p>
      The key relationship to see visually is that the diameter is simply two radii placed end to end through the center, while the circumference is that same radius, scaled by 2π, wrapped all the way around the curved edge instead of drawn as a straight line. Every other circle fact — including why area behaves so differently from circumference as a circle grows — follows from those two relationships.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using diameter in a formula that calls for radius, or vice versa (e.g., writing circumference = πr instead of 2πr).", fix: "Always confirm which measurement you were given before plugging it in — if you were given diameter, either convert it to radius first (divide by 2) or use the diameter-based version of the formula (C = πd) consistently." },
          { mistake: "Treating 3.14 as the exact value of pi rather than a rounded approximation.", fix: "Pi is irrational and never terminates — 3.14, 3.14159, and 22/7 are all useful approximations at different levels of precision, not the true value. For large-scale calculations, small rounding differences compound." },
          { mistake: "Assuming circumference and area scale by the same amount when a circle's size changes.", fix: "Circumference scales linearly with radius (double the radius, double the circumference), but area scales with radius squared (double the radius, quadruple the area) — the two measurements grow at fundamentally different rates." },
        ]}
      />
      <MisconceptionCallout
        myth="Pi is exactly 3.14."
        reality={<p>Pi is an irrational number — its decimal expansion continues forever without ever terminating or repeating (3.14159265358979...). 3.14 and the fraction 22/7 are both convenient, widely used rounded approximations for hand calculation, not the true value. Even extremely precise engineering rarely needs more than a handful of digits: NASA&apos;s Jet Propulsion Laboratory has noted that about 15 digits of pi are sufficient for its most demanding interplanetary navigation calculations, even though mathematicians have computed pi out to trillions of digits purely as a mathematical and computational exercise.</p>}
      />

      <QuickCheck
        question="Why can using 3.14 instead of a more precise value of pi cause a meaningful error in a very large-scale calculation, like Earth's circumference?"
        options={[
          { text: "It can't — 3.14 is the exact value of pi, so there's never any error", correct: false, explanation: "3.14 is only a rounded approximation of pi, not the exact irrational value — using it always introduces some rounding error, even if that error is tiny for small numbers." },
          { text: "Because 3.14 is a rounded approximation, and any rounding error gets multiplied by the (very large) radius or diameter being used", correct: true, explanation: "Correct. A small per-unit rounding error in pi gets scaled up by whatever radius or diameter it's multiplied against — for something planet-sized, even a tiny fractional error in pi becomes a real distance error." },
          { text: "Because pi changes value depending on how large the circle is", correct: false, explanation: "Pi is a fixed constant — the same ratio applies to a coin and to a planet. The issue is purely about how much a fixed rounding error gets amplified by a large multiplier, not pi itself changing." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Circumference from radius: C = 2πr"
        fields={[
          { key: "radius", label: "Radius", defaultValue: 7, step: 0.1 },
        ]}
        resultLabel="Circumference"
        formula="circleCircumferenceFromRadius"
        formatResult="number"
      />
      <EntryCalculator
        title="Area from radius: A = πr²"
        fields={[
          { key: "radius", label: "Radius", defaultValue: 7, step: 0.1 },
        ]}
        resultLabel="Area"
        formula="circleAreaFromRadius"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Measure the diameter of a round object near you (a mug, a wheel, a clock face), then use the calculators above to predict its circumference and area before checking with a tape measure.",
          "Next time you order a larger pizza or drink size, remember that a modest jump in diameter can mean a much bigger jump in actual area or volume.",
          "Practice converting between radius and diameter both directions until it's automatic — half one way, double the other.",
          "Read the related entry on Perimeter, Area & Volume to see how a circle's area and circumference formulas compare to rectangles and triangles, and The Pythagorean Theorem for straight-line distance math.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between radius and diameter?", answer: "Radius is the distance from a circle's center to its edge. Diameter is the distance straight across the circle through the center, and it's always exactly twice the radius." },
          { question: "How do you find the circumference of a circle?", answer: "Multiply the diameter by pi (C = πd), or equivalently, multiply 2 × pi × radius (C = 2πr). Both formulas give the same result since diameter is twice the radius." },
          { question: "Is pi exactly 3.14?", answer: "No. Pi is irrational, meaning its decimal digits continue forever without repeating. 3.14 is a common rounded approximation used for convenient hand calculation, not the exact value." },
          { question: "How do you find the area of a circle?", answer: "Use A = πr², multiplying pi by the radius squared. This uses radius, not diameter — if you only have the diameter, divide it by 2 first to get the radius." },
          { question: "Does doubling a circle's radius double its area?", answer: "No. Doubling the radius doubles the circumference, but it quadruples the area, because area depends on the radius squared (πr²) while circumference depends on the radius directly (2πr)." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
