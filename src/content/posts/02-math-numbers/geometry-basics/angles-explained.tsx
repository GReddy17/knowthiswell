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
  title: "Angles Explained: Types, Measurement, and the Rules That Govern Them",
  category: "math-numbers",
  order: 25,
  subtopic: "geometry-basics",
  tags: [
    "angles",
    "degrees",
    "complementary angles",
    "supplementary angles",
    "geometry basics",
    "vertical angles",
    "transversal",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "What an angle actually measures, the difference between acute, obtuse, and reflex, and why a triangle's angles always add to 180° — except on a globe.",
  summary: "An angle measures the amount of rotation between two rays sharing an endpoint, expressed in degrees, and follows fixed rules — complementary pairs sum to 90°, supplementary pairs sum to 180°, and a flat triangle's three angles always sum to 180°.",
  sources: [
    { label: "Encyclopaedia Britannica — Angle", url: "https://www.britannica.com/science/angle-geometry" },
    { label: "MathWorld (Wolfram) — Angle", url: "https://mathworld.wolfram.com/Angle.html" },
    { label: "Khan Academy — Basic Geometry", url: "https://www.khanacademy.org/math/basic-geo" },
    { label: "National Council of Teachers of Mathematics (NCTM)", url: "https://www.nctm.org/" },
  ],
  seeAlso: [
    "math-numbers/basic-shapes-and-properties",
    "math-numbers/the-pythagorean-theorem",
    "math-numbers/circles-radius-diameter-circumference",
  ],
  glossary: [
    { term: "Angle", definition: "The amount of rotation between two rays that share a common endpoint, measured in degrees." },
    { term: "Degree", definition: "A unit of angle measurement; a full rotation equals 360 degrees." },
    { term: "Acute angle", definition: "An angle measuring less than 90°." },
    { term: "Obtuse angle", definition: "An angle measuring more than 90° but less than 180°." },
    { term: "Reflex angle", definition: "An angle measuring more than 180° but less than 360°." },
    { term: "Complementary angles", definition: "Two angles whose measures add up to exactly 90°." },
    { term: "Supplementary angles", definition: "Two angles whose measures add up to exactly 180°." },
    { term: "Vertical angles", definition: "The pair of equal, opposite angles formed when two straight lines cross each other." },
    { term: "Transversal", definition: "A line that crosses two or more other lines, creating a set of related angles at each intersection." },
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
          "An angle measures rotation between two rays from a shared vertex, in degrees, where one full turn equals 360°.",
          "Angles follow fixed relationship rules: complementary angles sum to 90°, supplementary angles sum to 180°, and vertical angles (formed by two crossing lines) are always equal to each other.",
          "On a flat surface, a triangle's three interior angles always sum to exactly 180° — a rule reliable enough that builders and designers use it to check their own work without a protractor.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">An <TermLink href="/math-numbers/angles-explained">angle</TermLink> measures how far apart two lines or edges have rotated from each other, measured in <TermLink href="/math-numbers/angles-explained">degrees</TermLink>. A right angle (like a book&apos;s corner) is exactly 90°. An <TermLink href="/math-numbers/angles-explained">acute angle</TermLink> is sharper than that (under 90°), and an <TermLink href="/math-numbers/angles-explained">obtuse angle</TermLink> is wider (between 90° and 180°). A straight line is 180°, and a full circle back to where you started is 360°.</div>}
        detailed={<div className="prose-p">Angles come with predictable pairing rules that make them useful for solving problems without measuring every angle directly. Two angles are <TermLink href="/math-numbers/angles-explained">complementary</TermLink> if they add up to exactly 90° (like 30° and 60°); two angles are <TermLink href="/math-numbers/angles-explained">supplementary</TermLink> if they add up to exactly 180° (like 110° and 70°). When two straight lines cross, they create two pairs of equal <TermLink href="/math-numbers/angles-explained">vertical angles</TermLink> opposite each other. When a straight line called a <TermLink href="/math-numbers/angles-explained">transversal</TermLink> crosses two parallel lines, it creates matching angle pairs at both intersections: corresponding angles (same relative position at each crossing) are equal, and alternate interior angles (on opposite sides of the transversal, between the two parallel lines) are also equal — both are direct consequences of the lines being parallel. Beyond 180°, an angle becomes a <TermLink href="/math-numbers/angles-explained">reflex angle</TermLink>, continuing up to just under 360°, a full rotation.</div>}
      />
      <FootnoteAside>The 360-degree circle traces back to ancient Babylon, whose base-60 (sexagesimal) number system made 360 — divisible evenly by 2, 3, 4, 5, 6, 8, 9, 10, 12, and more — an unusually convenient number to split a circle into. It&apos;s also close to the roughly 365-day length of a year the Babylonians were already tracking astronomically, which likely reinforced the choice.</FootnoteAside>

      <p>
      Those pairing rules aren&apos;t abstract — they&apos;re what let you find a missing angle in a diagram, a roof, or a road design without ever placing a protractor on it.
      </p>

      <QuickCheck
        question="Two angles are described as 'supplementary.' What does that tell you about them?"
        options={[
          { text: "They add up to exactly 90°", correct: false, explanation: "That describes complementary angles, not supplementary ones. Supplementary angles have a larger required total." },
          { text: "They add up to exactly 180°", correct: true, explanation: "Correct. Supplementary angles sum to 180° — think of two angles that together form a straight line." },
          { text: "They are always equal to each other", correct: false, explanation: "Supplementary angles don't need to be equal — 110° and 70° are supplementary despite being very different sizes. Equality describes vertical angles, a separate rule." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Finding a missing complementary angle (baseline case)</h3>
      <div className="prose-p">
      Two angles are complementary, and one of them measures 35°. Since complementary angles sum to 90°, the other angle is 90° − 35° = <strong>55°</strong>. This exact relationship is what a carpenter uses when cutting a piece of trim for an inside corner: if one cut needs to be 35° to match the wall angle, the matching piece needs the complementary 55° cut so the two pieces meet flush at a 90° corner.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Parallel lines and a transversal (edge case / variation)</h3>
      <div className="prose-p">
      A transversal crosses two parallel lines, creating an angle of 70° at the first intersection. At the second intersection, the alternate interior angle (on the opposite side of the transversal, between the two parallel lines) must also measure <strong>70°</strong>, because alternate interior angles are always equal when the two crossed lines are truly parallel. The angle directly next to that 70° angle, on the same side, is a co-interior (consecutive interior) angle and is supplementary to it: 180° − 70° = <strong>110°</strong>. Surveyors and architects use exactly this relationship in reverse — if the alternate interior angles measured at two points don&apos;t match, the &quot;parallel&quot; lines aren&apos;t actually parallel, which is a fast way to catch a construction error.
      </div>

      <QuickCheck
        question="A transversal crosses two parallel lines. One angle at the first crossing measures 70°. What must the alternate interior angle at the second crossing measure?"
        options={[
          { text: "70°, because alternate interior angles are always equal when the lines are parallel", correct: true, explanation: "Correct. Alternate interior angles are equal whenever the two crossed lines are truly parallel — this is a direct, reliable consequence of the parallel-lines relationship." },
          { text: "110°, because the two angles must be supplementary", correct: false, explanation: "110° would be correct for a co-interior (consecutive interior) angle, which is supplementary to the 70° angle — but the alternate interior angle specifically is equal to it, not supplementary." },
          { text: "20°, because the two angles must be complementary", correct: false, explanation: "Complementary angles sum to 90°, and there's no rule requiring that relationship between a transversal's angle pairs. Alternate interior angles are equal, not complementary." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Ladder placement and the 4-to-1 safety rule (real-world / applied case)</h3>
      <p>
      Ladder safety guidance from organizations like the American Ladder Institute recommends the &quot;4-to-1 rule&quot; for leaning a straight or extension ladder: for every 4 feet of height to the ladder&apos;s support point, its base should sit 1 foot away from the wall. That ratio works out to an angle of roughly 75.5° between the ladder and the ground — steep enough to climb safely without excessive strain, but shallow enough that the ladder resists sliding backward or tipping. A ladder set up too upright (closer to 90°, base too close to the wall) risks tipping backward; one set up too shallow (base too far out) risks the base sliding out from under the climber. The angle isn&apos;t an arbitrary safety suggestion — it&apos;s a specific, measurable target that ladder placement is checked against.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Angle types and parallel-line angle pairs"
        type="comparison"
        svgSrc="/diagrams/math-numbers-angles-explained-angle-types.svg"
        altText="Top row shows five angle types in order of increasing measure: acute, right, obtuse, straight, and reflex, each with its degree range labeled. Bottom row shows a transversal line crossing two parallel lines, with corresponding angles, alternate interior angles, and co-interior angles each marked in a different color and labeled with their relationship (equal or supplementary)."
      />
      <p>
      Read the top row left to right as a single number line of increasing rotation, from a sharp acute angle up through a full reflex angle just short of 360°. The bottom row shows why a transversal is so useful for measurement: crossing two parallel lines creates eight angles total, but they only take two distinct values, repeated — meaning measuring just one angle tells you all eight, provided the two lines are genuinely parallel.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Mixing up complementary (90°) and supplementary (180°) angles.", fix: "A memory trick: 'C' for complementary comes before 'S' for supplementary in the alphabet, and 90 comes before 180 — complementary is the smaller total." },
          { mistake: "Assuming two angles that 'look' equal in a diagram actually are equal, without a stated reason (parallel lines, vertical angles, or a given measurement).", fix: "Only rely on angle equality when it's guaranteed by a specific rule — vertical angles, alternate interior angles on confirmed parallel lines, or angles explicitly marked as congruent. Visual appearance alone isn't proof." },
          { mistake: "Misreading a protractor's inner and outer scale, getting 180° minus the true angle instead of the angle itself.", fix: "Always check which scale starts at 0° from the ray you're measuring from — most protractors have two scales running in opposite directions, and using the wrong one flips the reading." },
        ]}
      />
      <MisconceptionCallout
        myth="A triangle's three angles always add up to exactly 180°, everywhere, no exceptions."
        reality={<p>That rule holds only on a flat (Euclidean) surface. Draw a &quot;triangle&quot; on a sphere — like Earth&apos;s surface — using great-circle lines (the shortest path between two points on a sphere, the kind planes actually fly), and the angle sum can exceed 180°. A classic example: start at the North Pole, travel down a line of longitude to the equator (a 90° turn), travel a quarter of the way around the equator (another 90° turn), then travel straight back up to the pole (a third 90° turn) — three 90° angles summing to 270°, not 180°. This isn&apos;t a trick; it&apos;s the basis of spherical and non-Euclidean geometry, used in real navigation and mapping over large distances.</p>}
      />

      <QuickCheck
        question="Why can a triangle drawn on the surface of a sphere have angles that sum to more than 180°?"
        options={[
          { text: "It can't — all triangles everywhere sum to exactly 180°, without exception", correct: false, explanation: "This is the common assumption, but it's only true on a flat surface. Triangles drawn on a curved surface using great-circle lines can exceed 180° in their angle sum." },
          { text: "The 180° rule only applies to flat (Euclidean) surfaces — a curved surface like a sphere follows different geometric rules", correct: true, explanation: "Correct. On a sphere, a triangle made of great-circle lines can have an angle sum well over 180° — the North Pole example with three 90° angles summing to 270° is a standard demonstration." },
          { text: "Spherical triangles aren't real triangles, so the rule doesn't need to apply", correct: false, explanation: "They're genuine triangles — three vertices connected by the shortest paths available on that surface. They just follow spherical geometry's rules instead of flat-plane geometry's rules." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Complementary angle: 90° − angle"
        fields={[
          { key: "angleDegrees", label: "Known angle (degrees)", defaultValue: 35 },
        ]}
        resultLabel="Complementary angle (degrees)"
        formula="complementaryAngleDegrees"
        formatResult="number"
      />
      <EntryCalculator
        title="Supplementary angle: 180° − angle"
        fields={[
          { key: "angleDegrees", label: "Known angle (degrees)", defaultValue: 70 },
        ]}
        resultLabel="Supplementary angle (degrees)"
        formula="supplementaryAngleDegrees"
        formatResult="number"
      />
      <EntryCalculator
        title="Missing third angle of a triangle: 180° − angle A − angle B"
        fields={[
          { key: "angleADegrees", label: "Angle A (degrees)", defaultValue: 60 },
          { key: "angleBDegrees", label: "Angle B (degrees)", defaultValue: 70 },
        ]}
        resultLabel="Angle C (degrees)"
        formula="triangleThirdAngleDegrees"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Use the complementary and supplementary calculators above on two angles you can see right now — a book corner, a door frame — and check the pairing rule holds.",
          "Next time you look at parallel lines crossed by a third line (railroad tracks, a ladder against a fence), try to spot a pair of equal alternate interior angles.",
          "If you ever set up a ladder, check the base distance against the 4-to-1 rule (1 foot of base distance for every 4 feet of height) before climbing.",
          "Read the related entry on Basic Shapes & Properties to see how angle rules combine with side counts to define polygons, and The Pythagorean Theorem for right-angle-specific calculations.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between complementary and supplementary angles?", answer: "Complementary angles add up to exactly 90°. Supplementary angles add up to exactly 180°. Both describe pairs of angles, not single angles on their own." },
          { question: "What are the different types of angles?", answer: "Acute (under 90°), right (exactly 90°), obtuse (between 90° and 180°), straight (exactly 180°), and reflex (between 180° and 360°) are the standard angle categories, ordered by increasing measure." },
          { question: "Do the angles of a triangle always add up to 180 degrees?", answer: "Yes, on a flat surface (standard Euclidean geometry). On a curved surface like a sphere, a triangle made of great-circle lines can have an angle sum greater than 180°, which is the basis of spherical geometry." },
          { question: "What are vertical angles?", answer: "Vertical angles are the pair of equal, opposite angles created when two straight lines cross each other. There are two such pairs at every crossing, and each pair is always equal in measure." },
          { question: "How many degrees are in a full circle?", answer: "360 degrees. That number comes from the ancient Babylonian base-60 number system, which divided a circle into 360 parts partly because 360 has so many convenient whole-number divisors." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
