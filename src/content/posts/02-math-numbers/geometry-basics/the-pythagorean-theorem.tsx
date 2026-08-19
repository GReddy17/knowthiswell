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
  title: "The Pythagorean Theorem: Why a² + b² = c² Works",
  category: "math-numbers",
  order: 26,
  subtopic: "geometry-basics",
  tags: [
    "pythagorean theorem",
    "right triangles",
    "hypotenuse",
    "geometry basics",
    "3-4-5 triangle",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How a² + b² = c² lets you find any missing side of a right triangle, and why builders, screen makers, and GPS systems all quietly depend on it.",
  summary: "The Pythagorean theorem states that in any right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides (a² + b² = c²) — a relationship that holds for every right triangle without exception.",
  sources: [
    { label: "MathWorld (Wolfram) — Pythagorean Theorem", url: "https://mathworld.wolfram.com/PythagoreanTheorem.html" },
    { label: "Encyclopaedia Britannica — Pythagorean Theorem", url: "https://www.britannica.com/science/Pythagorean-theorem" },
    { label: "Khan Academy — Basic Geometry", url: "https://www.khanacademy.org/math/basic-geo" },
    { label: "National Council of Teachers of Mathematics (NCTM)", url: "https://www.nctm.org/" },
  ],
  seeAlso: [
    "math-numbers/basic-shapes-and-properties",
    "math-numbers/perimeter-area-and-volume",
    "math-numbers/angles-explained",
  ],
  glossary: [
    { term: "Right triangle", definition: "A triangle with one interior angle measuring exactly 90°." },
    { term: "Hypotenuse", definition: "The longest side of a right triangle, always the one directly opposite the 90° angle." },
    { term: "Leg (triangle)", definition: "Either of the two shorter sides of a right triangle that form the 90° angle." },
    { term: "Pythagorean triple", definition: "A set of three whole numbers that satisfy a² + b² = c², such as 3, 4, 5." },
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
          "In any right triangle, a² + b² = c², where c is the hypotenuse (the side opposite the 90° angle) and a and b are the two legs.",
          "The relationship only holds for right triangles — plug the side lengths of a non-right triangle into the formula and the two sides of the equation simply won't balance.",
          "It's not just a classroom formula: it's the basis of the 3-4-5 rule builders use to square corners, the diagonal size printed on every TV and monitor box, and straight-line distance math used in mapping and GPS.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/math-numbers/the-pythagorean-theorem">Pythagorean theorem</TermLink> works only on a <TermLink href="/math-numbers/the-pythagorean-theorem">right triangle</TermLink> — one with a perfect 90° corner. It says that if you square the two shorter sides (the <TermLink href="/math-numbers/the-pythagorean-theorem">legs</TermLink>) and add those squares together, you get the square of the longest side (the <TermLink href="/math-numbers/the-pythagorean-theorem">hypotenuse</TermLink>, always opposite the right angle). The simplest whole-number example is a triangle with legs 3 and 4: 3² + 4² = 9 + 16 = 25, and 25 is 5², so the hypotenuse is exactly 5.</div>}
        detailed={<div className="prose-p">Formally, a² + b² = c², where a and b are the triangle&apos;s two legs and c is the hypotenuse. Rearranged, this lets you solve for any one missing side once the other two are known: c = √(a² + b²) to find the hypotenuse, or a = √(c² − b²) to find a missing leg. Whole-number solutions to the equation, like (3, 4, 5) or (5, 12, 13), are called <TermLink href="/math-numbers/the-pythagorean-theorem">Pythagorean triples</TermLink>, and any whole-number multiple of one (6, 8, 10; 9, 12, 15) is also a valid triple. The theorem has been proven algebraically and geometrically in hundreds of documented ways — one classic proof rearranges four copies of the same right triangle around a square to show the same area two different ways, with no trigonometry required.</div>}
      />
      <FootnoteAside>The relationship predates Pythagoras by over a thousand years. A Babylonian clay tablet known as Plimpton 322, dated to roughly 1800 BCE, lists Pythagorean triples in cuneiform script, and separate traditions in ancient Egypt and China (recorded in the Chinese text Zhoubi Suanjing) independently document the same 3-4-5 relationship — Pythagoras is credited mainly with an early surviving general proof, not the original discovery.</FootnoteAside>

      <p>
      The formula is simple to state — the actual skill is knowing which side is the hypotenuse, and rearranging the equation to solve for whichever side is missing.
      </p>

      <QuickCheck
        question="In a right triangle, which side is always the hypotenuse?"
        options={[
          { text: "Whichever side happens to be drawn at the bottom of the triangle", correct: false, explanation: "Orientation on the page has nothing to do with it. The hypotenuse is defined by its position relative to the right angle, not by how the triangle is drawn." },
          { text: "The side directly opposite the 90° angle, which is also always the longest side", correct: true, explanation: "Correct. The hypotenuse is specifically the side across from the right angle, and it is always the longest of the triangle's three sides." },
          { text: "Whichever of the three sides is measured first", correct: false, explanation: "Measurement order doesn't determine which side is the hypotenuse. Its identity is fixed by its position opposite the right angle, regardless of measurement order." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The 3-4-5 triangle (baseline case)</h3>
      <div className="prose-p">
      A right triangle has legs of 3 meters and 4 meters. Using c = √(a² + b²): c = √(3² + 4²) = √(9 + 16) = √25 = <strong>5 meters</strong>. This exact triple (3, 4, 5) is what builders use to check that a corner is truly square: measure 3 units along one wall and 4 units along the perpendicular wall, and if the diagonal distance between those two marks is exactly 5 units, the corner is a genuine 90° angle — no protractor required.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Finding a missing leg — the ladder problem (edge case / variation)</h3>
      <div className="prose-p">
      A 13-foot ladder (the hypotenuse) leans against a wall with its base 5 feet from the wall (one leg). How high up the wall does it reach (the other leg)? Rearranging the formula to solve for the missing leg: a = √(c² − b²) = √(13² − 5²) = √(169 − 25) = √144 = <strong>12 feet</strong>. This is the edge case where you&apos;re not solving for the hypotenuse at all — you already know it, and you&apos;re isolating one of the legs instead, which requires subtracting inside the square root rather than adding.
      </div>

      <QuickCheck
        question="A right triangle has a hypotenuse of 10 and one leg of 6. What is the length of the other leg?"
        options={[
          { text: "4, found by simply subtracting 6 from 10", correct: false, explanation: "The Pythagorean theorem doesn't work by direct subtraction of side lengths — you need to work with the squares of the sides, not the raw lengths themselves." },
          { text: "8, found using √(10² − 6²) = √(100 − 36) = √64", correct: true, explanation: "Correct. √(100 − 36) = √64 = 8. Squaring, subtracting, then taking the square root is required — this matches the classic 6-8-10 triple (a multiple of 3-4-5)." },
          { text: "16, found by adding 10 and 6", correct: false, explanation: "Adding the two known sides isn't part of the formula at all, and it would also produce a leg longer than the hypotenuse, which is impossible — the hypotenuse must always be the longest side." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Calculating a TV or monitor&apos;s diagonal size (real-world / applied case)</h3>
      <p>
      Screen sizes are always advertised by diagonal length, not width or height — a &quot;45-inch TV&quot; means a 45-inch hypotenuse across a rectangular screen. A 16:9 widescreen with a width of about 39.2 inches and a height of about 22.0 inches has a diagonal of √(39.2² + 22.0²) = √(1,536.64 + 484) = √2,020.64 ≈ <strong>44.95 inches</strong>, rounded up to the familiar &quot;45-inch&quot; spec on the box. Manufacturers use this exact calculation in reverse too: given a target diagonal size and a fixed aspect ratio (like 16:9), the Pythagorean theorem — combined with the ratio — determines the actual width and height of the panel they need to manufacture.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The Pythagorean relationship on a right triangle"
        type="detail"
        svgSrc="/diagrams/math-numbers-the-pythagorean-theorem-right-triangle.svg"
        altText="A right triangle with legs labeled a and b and hypotenuse labeled c, with a square drawn on each of the three sides showing its area (a squared, b squared, and c squared), illustrating that the combined area of the two smaller squares exactly equals the area of the largest square on the hypotenuse."
      />
      <p>
      The three squares are the clearest way to see why the theorem is true rather than just believe it: build an actual square on each side of the triangle, and the areas of the two smaller squares (on the legs) always add up to exactly the area of the largest square (on the hypotenuse) — 9 + 16 = 25 for the 3-4-5 triangle, visibly and countably if you tile each square with unit squares. This is the geometric picture behind the algebra, not just a coincidence of the numbers.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Applying a² + b² = c² to a triangle that isn't a right triangle.", fix: "The formula only works when one angle is exactly 90°. For any other triangle, a related but different formula (the Law of Cosines) is required instead." },
          { mistake: "Adding the two known sides directly instead of squaring, summing, and then taking the square root.", fix: "Remember the full sequence: square each known side, add those squares, then take the square root of the total. Skipping the squaring step (writing c = a + b) gives a wrong answer that happens to look plausible." },
          { mistake: "Mixing up which side is the hypotenuse when solving for a missing leg.", fix: "The hypotenuse is always the longest side, always opposite the right angle, and always isolated on its own side of the equation (c² = a² + b²) — never subtracted alongside a leg." },
        ]}
      />
      <MisconceptionCallout
        myth="The Pythagorean theorem only applies to triangles drawn in a math textbook — it doesn't matter for real-world measuring."
        reality={<p>It&apos;s one of the most directly applied formulas in construction, design, and navigation. Builders use the 3-4-5 rule to square foundations and wall corners without a protractor. TV and monitor manufacturers use it to relate a screen&apos;s advertised diagonal size to its actual width and height. GPS and mapping systems use it (in a slightly extended form) to calculate straight-line, &quot;as the crow flies&quot; distance between two points given their east-west and north-south displacement. Anywhere a right angle and a straight-line distance both matter, this formula is doing real, load-bearing work — not staying confined to a classroom.</p>}
      />

      <QuickCheck
        question="A construction worker measures 3 feet along one wall and 4 feet along the perpendicular wall, then checks that the diagonal distance between those two points is exactly 5 feet. What is this checking for?"
        options={[
          { text: "That the corner between the two walls is a true 90° right angle", correct: true, explanation: "Correct. This is the 3-4-5 rule in direct use — if the diagonal measures exactly 5 feet, the corner is confirmed to be a genuine right angle, without needing a protractor at all." },
          { text: "That the two walls are exactly the same length", correct: false, explanation: "Wall length isn't what's being tested here — the 3-foot and 4-foot marks are deliberately different, chosen specifically to form a 3-4-5 triangle, not to compare wall lengths." },
          { text: "That the building's total floor area is correct", correct: false, explanation: "This measurement checks a single corner's angle, not overall floor area — area would require a completely different calculation using the room's full dimensions." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Find the hypotenuse: c = √(a² + b²)"
        fields={[
          { key: "legA", label: "Leg a", defaultValue: 3 },
          { key: "legB", label: "Leg b", defaultValue: 4 },
        ]}
        resultLabel="Hypotenuse (c)"
        formula="pythagoreanHypotenuse"
        formatResult="number"
      />
      <EntryCalculator
        title="Find a missing leg: a = √(c² − b²)"
        fields={[
          { key: "hypotenuse", label: "Hypotenuse (c)", defaultValue: 13 },
          { key: "knownLeg", label: "Known leg (b)", defaultValue: 5 },
        ]}
        resultLabel="Missing leg (a)"
        formula="pythagoreanMissingLeg"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Use the hypotenuse calculator with legs 6 and 8 to confirm it lands on 10 — a scaled-up version of the 3-4-5 triple.",
          "Next time you see a TV or monitor's advertised screen size, remember it's a diagonal (hypotenuse) measurement, not the width or height.",
          "Try the 3-4-5 rule yourself with a tape measure on a real corner (a room, a fence line) to check whether it's a true right angle.",
          "Read the related entry on Angles Explained for the broader rules right angles follow, and Perimeter, Area & Volume for what you can calculate once a triangle's sides are known.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the Pythagorean theorem formula?", answer: "a² + b² = c², where a and b are the two legs of a right triangle and c is the hypotenuse (the side opposite the 90° angle). It only applies to right triangles." },
          { question: "How do you find the hypotenuse of a right triangle?", answer: "Square both legs, add the squares together, then take the square root of the total: c = √(a² + b²). For legs of 3 and 4, that's √(9 + 16) = √25 = 5." },
          { question: "Does the Pythagorean theorem work on all triangles?", answer: "No — only right triangles, which have exactly one 90° angle. For other triangles, a related formula called the Law of Cosines is used instead." },
          { question: "What is a Pythagorean triple?", answer: "A set of three whole numbers that satisfy a² + b² = c², such as 3-4-5 or 5-12-13. Any whole-number multiple of a known triple (like 6-8-10) is also a valid triple." },
          { question: "Who actually discovered the Pythagorean theorem?", answer: "The relationship was known well before Pythagoras — a Babylonian tablet called Plimpton 322 (c. 1800 BCE) lists Pythagorean triples, and ancient Egyptian and Chinese sources independently document the same relationship. Pythagoras is credited with an early general proof, not the original discovery." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
