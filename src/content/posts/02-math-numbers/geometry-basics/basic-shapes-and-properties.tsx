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
  title: "Basic Shapes & Properties: Polygons, Sides, Angles, and Faces",
  category: "math-numbers",
  order: 23,
  subtopic: "geometry-basics",
  tags: [
    "basic shapes",
    "polygons",
    "geometry basics",
    "2D shapes",
    "vertices and edges",
    "regular polygons",
    "quadrilaterals",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "What makes a shape a triangle, square, or pentagon, how sides and angles define every polygon, and why a square is secretly a rectangle.",
  summary: "A shape's properties — its number of sides, vertices, and angles — determine what it's called and what mathematical rules it must follow, including a fixed, predictable interior angle total.",
  sources: [
    { label: "Encyclopaedia Britannica — Geometry", url: "https://www.britannica.com/science/geometry" },
    { label: "Encyclopaedia Britannica — Polygon", url: "https://www.britannica.com/science/polygon" },
    { label: "MathWorld (Wolfram) — Polygon", url: "https://mathworld.wolfram.com/Polygon.html" },
    { label: "Khan Academy — Basic Geometry", url: "https://www.khanacademy.org/math/basic-geo" },
  ],
  seeAlso: [
    "math-numbers/perimeter-area-and-volume",
    "math-numbers/angles-explained",
    "math-numbers/symmetry-in-everyday-life",
    "math-numbers/the-pythagorean-theorem",
  ],
  glossary: [
    { term: "Polygon", definition: "A closed 2D shape made entirely of straight line segments, with no curves and no open ends." },
    { term: "Vertex", definition: "A corner point where two sides of a shape meet (plural: vertices)." },
    { term: "Regular polygon", definition: "A polygon where every side is the same length and every interior angle is the same measure." },
    { term: "Congruent", definition: "Having exactly the same size and shape — congruent sides or angles are identical in measure." },
    { term: "Convex polygon", definition: "A polygon where every interior angle is less than 180°, so no corner points inward." },
    { term: "Concave polygon", definition: "A polygon with at least one interior angle greater than 180°, giving it a 'caved in' corner." },
    { term: "Quadrilateral", definition: "Any four-sided polygon, regardless of whether its sides or angles are equal." },
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
          "A polygon's number of sides fixes its interior angle sum — every triangle sums to 180°, every quadrilateral to 360°, and the pattern (n − 2) × 180° holds for any number of sides.",
          "Every square is a rectangle (and a rhombus) — geometric category names build on each other in one direction, not both, so 'square' is a stricter, narrower claim than 'rectangle,' not a rival to it.",
          "Whether a polygon is regular (equal sides and equal angles) or irregular changes its symmetry, but not its basic classification as a triangle, quadrilateral, pentagon, and so on.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/math-numbers/basic-shapes-and-properties">polygon</TermLink> is any closed flat shape made only of straight sides — a triangle has 3, a quadrilateral (square, rectangle, rhombus, trapezoid) has 4, a pentagon has 5, a hexagon has 6, and so on. What makes two shapes different isn&apos;t just the number of sides — it&apos;s also whether the sides are equal length, whether the corners are right angles, and whether the shape is 2D (flat, like a triangle) or 3D (solid, like a cube). A cube isn&apos;t a polygon at all — it&apos;s a polyhedron, a 3D solid built out of flat polygon faces.</div>}
        detailed={<div className="prose-p">Every polygon has three countable properties that define it precisely: its <TermLink href="/math-numbers/basic-shapes-and-properties">vertices</TermLink> (corner points), its sides (the straight segments connecting them), and its interior angles. A polygon is <TermLink href="/math-numbers/basic-shapes-and-properties">regular</TermLink> only if all sides are <TermLink href="/math-numbers/basic-shapes-and-properties">congruent</TermLink> <em>and</em> all angles are congruent — a rhombus has four equal sides but usually unequal angles, so it&apos;s equilateral without being regular. A polygon is <TermLink href="/math-numbers/basic-shapes-and-properties">convex</TermLink> if every interior angle stays under 180°, meaning no corner points inward; a <TermLink href="/math-numbers/basic-shapes-and-properties">concave</TermLink> polygon (sometimes called a &quot;dart&quot; shape) has at least one reflex angle greater than 180°, giving it a notch. The number of sides also fixes the total of a polygon&apos;s interior angles through a single formula: (n − 2) × 180°, where n is the number of sides — a triangle (n=3) always totals 180°, a quadrilateral (n=4) always totals 360°, regardless of whether the shape is regular, irregular, convex, or concave.</div>}
      />
      <FootnoteAside>3D solids follow a companion rule called Euler&apos;s formula: vertices minus edges plus faces always equals 2 (V − E + F = 2) for any simple polyhedron. Check it on a cube: 8 vertices − 12 edges + 6 faces = 2. It holds for a pyramid, a soccer-ball-shaped solid, and thousands of other polyhedra — a strikingly simple constant hiding inside 3D shape structure.</FootnoteAside>

      <p>
      That interior-angle-sum rule isn&apos;t just trivia — it&apos;s the tool that lets you verify a shape&apos;s classification, check a construction drawing, or work out a missing angle without a protractor.
      </p>

      <QuickCheck
        question="A four-sided shape has all four sides the same length, but its angles are 80°, 100°, 80°, and 100° instead of four right angles. What is this shape?"
        options={[
          { text: "A square, since all its sides are equal", correct: false, explanation: "Equal sides alone aren't enough for 'square' — a square also requires four right angles. This shape's angles aren't 90°, so it fails that second requirement." },
          { text: "A rhombus, since it has four equal sides but its angles aren't all 90°", correct: true, explanation: "Correct. A shape with four equal sides is equilateral, but it only earns the name 'square' if its angles are also all 90°. With unequal angles, this is a rhombus, not a square." },
          { text: "It isn't a valid quadrilateral, since real four-sided shapes always have right angles", correct: false, explanation: "Quadrilaterals absolutely don't require right angles — a rhombus, a general parallelogram, and a kite are all valid quadrilaterals with non-right angles." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Interior angle sum of a regular pentagon (baseline case)</h3>
      <div className="prose-p">
      Using (n − 2) × 180° with n = 5 sides: (5 − 2) × 180° = 3 × 180° = <strong>540°</strong> total across all five interior angles. Because a regular pentagon splits that total evenly across five identical angles, each individual angle measures 540° ÷ 5 = <strong>108°</strong> — the exact interior angle you&apos;d measure on a stop-sign-shaped pentagon, or the flat panels of a soccer ball.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A concave (non-convex) polygon still obeys the same rule (edge case / variation)</h3>
      <div className="prose-p">
      Draw an arrow-shaped or &quot;dart&quot; pentagon with one corner pointing inward instead of outward — that inward corner is a reflex angle, greater than 180°. This shape is concave, not convex, but it still has 5 sides, so (5 − 2) × 180° = 540° still applies to its interior angle total. The difference is only in how that 540° is distributed: instead of five angles each under 180°, one reflex angle (say, 250°) eats up a much larger share, leaving smaller angles elsewhere to balance the total back to 540°. Concavity changes the shape&apos;s appearance and its symmetry, but never breaks the interior-angle-sum formula.
      </div>

      <QuickCheck
        question="A polygon has one interior angle measuring 200°. What does this tell you about the shape?"
        options={[
          { text: "It's an invalid polygon, since angles can't exceed 180°", correct: false, explanation: "Interior angles absolutely can exceed 180° — that's called a reflex angle, and a polygon containing one is still a perfectly valid polygon." },
          { text: "It's concave (non-convex), because it has a reflex interior angle greater than 180°", correct: true, explanation: "Correct. Any interior angle over 180° is a reflex angle, and a polygon with at least one reflex angle is concave — it has a corner that points inward rather than outward." },
          { text: "It must be irregular, and irregular polygons are always concave", correct: false, explanation: "Irregular just means unequal sides or angles — plenty of irregular polygons (a generic rectangle-like quadrilateral, a scalene triangle) are still fully convex. Irregularity and concavity are independent properties." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why honeycombs use hexagons, not squares or triangles (real-world / applied case)</h3>
      <p>
      Bees build honeycomb out of regular hexagons, and it&apos;s not decoration — it&apos;s geometry doing the engineering. Among shapes that can tile a flat surface with zero gaps (triangles, squares, and hexagons are the only regular polygons that do this), the hexagon encloses the most area for the least total wall length, meaning bees spend less wax building the same storage volume. A regular hexagon&apos;s interior angle, from (6 − 2) × 180° ÷ 6 = 120°, is also the specific angle that lets three hexagons meet perfectly at every vertex with no wasted or overlapping space (120° × 3 = 360°, a full turn) — the same reason hexagonal floor tiles and geodesic dome panels (built from combined hexagons and pentagons) fit together cleanly.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Classifying shapes: sides, angles, and regularity"
        type="comparison"
        svgSrc="/diagrams/math-numbers-basic-shapes-and-properties-polygon-classification.svg"
        altText="A grid comparing polygons by side count (triangle, quadrilateral, pentagon, hexagon) across two rows: regular versions with equal sides and angles marked, and irregular versions of the same side count with unequal sides and angles marked, plus one concave example with a reflex angle highlighted."
      />
      <p>
      Read the grid by column first (side count fixes the shape family — three sides is always a triangle, four is always a quadrilateral) and then by row (regularity and convexity are separate properties layered on top). A shape can move down a row without ever changing its column — an irregular pentagon is still a pentagon, and a concave hexagon is still a hexagon — because &quot;how many sides&quot; and &quot;how the sides and angles compare to each other&quot; are answering two different questions.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating 'quadrilateral' and 'square' as synonyms.", fix: "Quadrilateral just means 'four straight sides' — squares, rectangles, rhombuses, trapezoids, and kites are all quadrilaterals, but only one of them is a square." },
          { mistake: "Assuming equal side lengths alone make a polygon 'regular.'", fix: "Regular requires equal sides AND equal angles. A rhombus has four equal sides but usually unequal angles, so it's equilateral without being regular — only a square meets both conditions among four-sided shapes." },
          { mistake: "Believing every valid polygon must be convex.", fix: "Concave (non-convex) polygons — shapes with at least one reflex angle over 180° — are just as valid as convex ones. They still follow the same interior-angle-sum formula." },
        ]}
      />
      <MisconceptionCallout
        myth="A square is not a rectangle — they're two separate, unrelated shapes."
        reality={<p>A rectangle is defined as any quadrilateral with four right angles and opposite sides equal. A square satisfies every part of that definition, then adds one extra condition: all four sides (not just opposite pairs) are equal length. That makes a square a special case of a rectangle, not a different category — the relationship only runs one way. Every square is a rectangle, but not every rectangle is a square, the same way every dog is an animal but not every animal is a dog.</p>}
      />

      <QuickCheck
        question="Which statement correctly describes the relationship between squares and rectangles?"
        options={[
          { text: "Squares and rectangles are unrelated shapes that happen to look similar", correct: false, explanation: "They're not unrelated — a square meets every requirement of a rectangle's definition (four right angles, opposite sides equal) and then adds one more condition." },
          { text: "Every square is a rectangle, but not every rectangle is a square", correct: true, explanation: "Correct. A square is a rectangle with the added requirement that all four sides are equal, not just opposite pairs — so 'square' is a narrower, stricter category nested inside 'rectangle.'" },
          { text: "Every rectangle is a square, but not every square is a rectangle", correct: false, explanation: "This reverses the actual relationship. It's squares that meet the extra, stricter condition (all sides equal) — a generic rectangle with unequal side lengths is not a square." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Interior angle sum of a polygon: (n − 2) × 180°"
        fields={[
          { key: "sides", label: "Number of sides", defaultValue: 5 },
        ]}
        resultLabel="Total interior angle sum (degrees)"
        formula="polygonInteriorAngleSumDegrees"
        formatResult="number"
      />
      <EntryCalculator
        title="Number of diagonals in a polygon: n(n − 3) ÷ 2"
        fields={[
          { key: "sides", label: "Number of sides", defaultValue: 6 },
        ]}
        resultLabel="Number of diagonals"
        formula="polygonDiagonalCount"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Use the angle-sum calculator on a shape you can see right now (a book cover, a tabletop, a road sign) and check that its angles roughly add up to the predicted total.",
          "Next time you hear 'square' and 'rectangle' used as opposites, mentally correct it to 'a square is a special rectangle' instead.",
          "Look for hexagon tiling in the real world — honeycomb, bathroom tile, chain-link fencing — and connect it back to the 120° interior angle that lets three hexagons meet with zero gaps.",
          "Read the related entry on Angles Explained to go deeper on how individual angle types and pairs work, and Perimeter, Area & Volume to see what these same shapes let you measure.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between a regular and irregular polygon?", answer: "A regular polygon has all sides equal length and all angles equal measure (like an equilateral triangle or a square). An irregular polygon has sides and/or angles that differ from one another — a scalene triangle or a generic rectangle are both irregular in this sense." },
          { question: "Is a square always a rectangle?", answer: "Yes. A square meets every requirement of a rectangle (four right angles, opposite sides equal) and adds the extra condition that all four sides are equal. A square is a special case of a rectangle, not a separate shape category." },
          { question: "How do you find the sum of interior angles of any polygon?", answer: "Use the formula (n − 2) × 180°, where n is the number of sides. A triangle (3 sides) sums to 180°, a quadrilateral (4 sides) to 360°, a pentagon (5 sides) to 540°, and so on." },
          { question: "What makes a polygon concave instead of convex?", answer: "A polygon is concave if it has at least one interior angle greater than 180° (a reflex angle), which makes one corner point inward. A convex polygon has every interior angle under 180°, so no corner points inward." },
          { question: "What's the difference between a polygon and a polyhedron?", answer: "A polygon is a flat (2D) closed shape made of straight sides, like a triangle or hexagon. A polyhedron is a solid (3D) shape whose faces are polygons, like a cube or pyramid — 'polygon' describes a flat shape, 'polyhedron' describes a solid built from flat shapes." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
