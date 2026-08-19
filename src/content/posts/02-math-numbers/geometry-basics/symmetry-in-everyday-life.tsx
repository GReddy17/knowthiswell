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
  title: "Symmetry in Everyday Life: Line, Rotational, and Point Symmetry",
  category: "math-numbers",
  order: 27,
  subtopic: "geometry-basics",
  tags: [
    "symmetry",
    "line symmetry",
    "rotational symmetry",
    "geometry basics",
    "reflection",
    "regular polygons",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How to tell line symmetry from rotational symmetry, why snowflakes have six-fold symmetry, and why a 'perfectly symmetrical face' is more myth than measurement.",
  summary: "Symmetry means a shape looks unchanged after a specific transformation — a reflection (line symmetry), a rotation (rotational symmetry), or both — and the two kinds don't always come as a package deal.",
  sources: [
    { label: "Encyclopaedia Britannica — Symmetry", url: "https://www.britannica.com/science/symmetry" },
    { label: "MathWorld (Wolfram) — Symmetry", url: "https://mathworld.wolfram.com/Symmetry.html" },
    { label: "Khan Academy — Basic Geometry", url: "https://www.khanacademy.org/math/basic-geo" },
    { label: "National Council of Teachers of Mathematics (NCTM)", url: "https://www.nctm.org/" },
  ],
  seeAlso: [
    "math-numbers/basic-shapes-and-properties",
    "math-numbers/angles-explained",
    "math-numbers/circles-radius-diameter-circumference",
  ],
  glossary: [
    { term: "Line symmetry", definition: "A shape has line symmetry if it can be reflected across a line and land exactly on top of itself; also called reflective or mirror symmetry." },
    { term: "Rotational symmetry", definition: "A shape has rotational symmetry if it can be rotated less than a full 360° turn around a center point and land exactly on top of itself." },
    { term: "Line of symmetry", definition: "The specific line a shape can be reflected across to produce line symmetry." },
    { term: "Order of symmetry", definition: "The number of distinct positions (including the starting position) a shape with rotational symmetry passes through during one full 360° rotation." },
    { term: "Asymmetry", definition: "The absence of any line or rotational symmetry — a shape that looks different under every reflection and every partial rotation." },
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
          "Line symmetry means one half of a shape mirrors the other across a line; rotational symmetry means a shape looks unchanged after being rotated less than a full 360° turn around its center.",
          "A shape can have one type of symmetry without the other — the letter 'S' has rotational symmetry but no line symmetry, while the letter 'A' has line symmetry but no rotational symmetry.",
          "Regular polygons carry both kinds in a predictable pattern: a regular polygon with n sides has exactly n lines of symmetry and rotational symmetry of order n, repeating every 360°/n of a turn.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/math-numbers/symmetry-in-everyday-life">Symmetry</TermLink> means a shape looks the same after some kind of change. A butterfly&apos;s wings mirror each other across its body — that&apos;s <TermLink href="/math-numbers/symmetry-in-everyday-life">line symmetry</TermLink>. A pinwheel looks the same after you spin it partway around — that&apos;s <TermLink href="/math-numbers/symmetry-in-everyday-life">rotational symmetry</TermLink>. Some shapes, like a plain square, have both kinds at once; others, like a plain letter &quot;S,&quot; only have one.</div>}
        detailed={<div className="prose-p">Line symmetry (also called reflective or mirror symmetry) exists across a specific <TermLink href="/math-numbers/symmetry-in-everyday-life">line of symmetry</TermLink> — fold the shape along that line, and both halves match exactly. Rotational symmetry exists around a center point, and its <TermLink href="/math-numbers/symmetry-in-everyday-life">order</TermLink> counts how many times the shape lands back on itself during one full 360° rotation — a shape with order 4 (like a square) repeats its appearance every 90° of rotation. The two kinds of symmetry are mathematically independent: satisfying one doesn&apos;t guarantee the other. A shape with neither is called <TermLink href="/math-numbers/symmetry-in-everyday-life">asymmetric</TermLink>. Regular polygons are the cleanest case: a regular polygon with n sides always has exactly n lines of symmetry and rotational symmetry of order n, because its equal sides and angles repeat with perfect regularity around the center.</div>}
      />
      <FootnoteAside>Snowflakes&apos; famous six-fold symmetry comes directly from the molecular geometry of ice: water molecules bond into a repeating hexagonal lattice as they freeze, and a growing snowflake&apos;s six arms extend outward following that same six-fold structure. Because each snowflake experiences slightly different temperature and humidity as it falls, the fine branching detail on each arm develops differently — which is the real reason no two snowflakes are exactly alike, even though all of them share the same underlying six-fold symmetry.</FootnoteAside>

      <p>
      Once you can tell line symmetry and rotational symmetry apart, it becomes obvious that most everyday &quot;symmetric-looking&quot; objects are only symmetric in one of the two senses — not both automatically.
      </p>

      <QuickCheck
        question="A rectangle (not a square) is reflected across a vertical line through its center and lands exactly on itself. Does this rectangle also automatically have rotational symmetry?"
        options={[
          { text: "Yes, having line symmetry always guarantees rotational symmetry too", correct: false, explanation: "The two kinds of symmetry are independent — having one doesn't guarantee the other. This needs to be checked separately, not assumed." },
          { text: "It needs to be checked separately — but in this specific case, yes: a non-square rectangle also has 180° rotational symmetry", correct: true, explanation: "Correct. A non-square rectangle has 2 lines of symmetry (vertical and horizontal) and also happens to have rotational symmetry of order 2 (it looks the same after a 180° turn) — but that has to be confirmed independently, not assumed from line symmetry alone." },
          { text: "No shape can have both line symmetry and rotational symmetry at the same time", correct: false, explanation: "Plenty of shapes have both — a square, an equilateral triangle, and a plain rectangle all have both kinds of symmetry simultaneously." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A square&apos;s full symmetry count (baseline case)</h3>
      <div className="prose-p">
      A square has 4 sides, so it has exactly <strong>4 lines of symmetry</strong> (vertical, horizontal, and both diagonals) and rotational symmetry of <strong>order 4</strong>. Its smallest repeating rotation is 360° ÷ 4 = <strong>90°</strong> — rotate a square 90°, 180°, or 270°, and at each of those stops it looks identical to its starting position, only the corners have swapped places invisibly.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Letters that break the &quot;both kinds together&quot; pattern (edge case / variation)</h3>
      <div className="prose-p">
      Plain block letters make the independence of the two symmetry types obvious. The letter &quot;A&quot; has one vertical line of symmetry but no rotational symmetry (rotate it any amount short of 360° and it no longer matches). The letter &quot;S&quot; is the reverse: it has 180° rotational symmetry (order 2) but zero lines of symmetry — no fold line makes its two halves match. The letter &quot;H&quot; has both: a vertical line, a horizontal line, and 180° rotational symmetry all at once. And the letter &quot;F&quot; has neither kind — no line of symmetry and no rotational symmetry, making it fully asymmetric.
      </div>

      <QuickCheck
        question="The letter 'S' looks identical after being rotated 180°, but no straight line can be drawn through it that produces two mirror-image halves. What does this tell you about 'S'?"
        options={[
          { text: "It has rotational symmetry but no line symmetry", correct: true, explanation: "Correct. 'S' is the classic example of rotational symmetry (order 2, at 180°) existing entirely without line symmetry — a clean demonstration that the two types are independent." },
          { text: "It has line symmetry but no rotational symmetry", correct: false, explanation: "This reverses the actual result. 'S' fails the line-symmetry test (no fold line makes it match) but passes the 180°-rotation test." },
          { text: "It must have both types of symmetry, since it has at least one", correct: false, explanation: "Having one type doesn't guarantee the other. 'S' is specifically the example that has rotational symmetry only, with no line symmetry at all." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Five-fold symmetry in starfish (real-world / applied case)</h3>
      <p>
      Most starfish species display pentaradial symmetry — five-fold rotational symmetry arranged around a central point, with (in most species) five arms extending outward at roughly 72° intervals (360° ÷ 5). Rotate a typical starfish 72° around its center, and its overall body plan looks essentially unchanged, repeating five times over a full turn. This is genuine biological rotational symmetry, not just a visual impression — it reflects the actual underlying body structure that develops during the starfish&apos;s growth. It&apos;s a useful natural counterexample to the assumption that living things are built primarily around line (bilateral) symmetry the way most animals, including humans, are.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Line symmetry vs. rotational symmetry"
        type="comparison"
        svgSrc="/diagrams/math-numbers-symmetry-in-everyday-life-line-vs-rotational.svg"
        altText="Side-by-side comparison grid with four example shapes — a square, the letter A, the letter S, and a five-pointed starfish outline — each shown with its lines of symmetry drawn as dashed lines where present, and a curved arrow with a degree label showing its smallest rotational symmetry angle where present, with a checkmark or X in each of the two symmetry-type columns."
      />
      <p>
      Reading the grid as a two-column checklist — line symmetry present or absent, rotational symmetry present or absent — makes it clear that the four possible combinations (both, line-only, rotation-only, neither) are all genuinely represented in ordinary shapes and letters, not just theoretical edge cases invented for a textbook.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Calling any shape that 'looks balanced' symmetric without applying a precise fold or rotation test.", fix: "Symmetry is a specific, testable property — actually check whether folding along a proposed line, or rotating by a proposed angle, produces an exact match, not just a rough visual balance." },
          { mistake: "Assuming line symmetry and rotational symmetry always occur together.", fix: "Test each one independently. The letters 'A' and 'S' are simple proof that a shape can have exactly one type of symmetry without the other." },
          { mistake: "Assuming every four-sided shape has 4 lines of symmetry like a square does.", fix: "The number of symmetry lines depends on the specific shape, not just the side count — a generic rectangle has only 2, a generic rhombus has only 2, and a generic parallelogram can have 0." },
        ]}
      />
      <MisconceptionCallout
        myth="The human face (or body) is perfectly symmetric."
        reality={<p>Human faces and bodies show only approximate bilateral (line) symmetry, not perfect symmetry. Measured carefully, most real faces have detectable left-right differences — one eye set slightly higher or larger than the other, asymmetric nostril shapes, uneven ear height — differences large enough to be measured, even if they&apos;re too subtle to notice at a glance. True near-perfect geometric symmetry is more reliably found in specific natural forms like snowflakes (six-fold) or starfish (five-fold rotational), and in precisely engineered objects, than in human anatomy, which develops through a much less exact biological process.</p>}
      />

      <QuickCheck
        question="A close, precise measurement of a human face typically finds small differences between its left and right sides. What does this tell you about human facial symmetry?"
        options={[
          { text: "It confirms human faces are essentially perfectly symmetric, since the differences are usually too small to see", correct: false, explanation: "Being hard to notice by eye isn't the same as being mathematically symmetric — precise measurement is what actually tests symmetry, and it reliably finds real left-right differences in human faces." },
          { text: "It shows human facial symmetry is only approximate, not perfect, unlike more precisely symmetric natural forms such as snowflakes", correct: true, explanation: "Correct. Human faces show approximate bilateral symmetry at best — measurable asymmetries are the norm, in contrast to forms like snowflakes or starfish, which follow their symmetry much more precisely due to how they physically form." },
          { text: "It means human faces have no symmetry at all", correct: false, explanation: "This overcorrects. Human faces do have a real, if imperfect, tendency toward bilateral symmetry — the point is that it's approximate, not that it's entirely absent." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Rotational symmetry angle of a regular polygon: 360° ÷ sides"
        fields={[
          { key: "sides", label: "Number of sides", defaultValue: 5 },
        ]}
        resultLabel="Smallest rotation that repeats the shape (degrees)"
        formula="regularPolygonRotationalSymmetryAngleDegrees"
        formatResult="number"
      />
      <EntryCalculator
        title="Lines of symmetry in a regular polygon"
        fields={[
          { key: "sides", label: "Number of sides", defaultValue: 6 },
        ]}
        resultLabel="Number of lines of symmetry"
        formula="regularPolygonLinesOfSymmetry"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Test five capital letters from your own name for line symmetry, rotational symmetry, both, or neither — most alphabets split roughly evenly across all four categories.",
          "Use the rotational symmetry calculator on a stop sign (8 sides) and a honeycomb cell (6 sides) to see the pattern extend beyond squares and triangles.",
          "Next time someone calls a face or object 'perfectly symmetric,' treat it as an approximation, not a literal geometric claim.",
          "Read the related entry on Basic Shapes & Properties for how side count and angle rules combine to define the shapes symmetry applies to, and Angles Explained for the rotation math underneath rotational symmetry.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between line symmetry and rotational symmetry?", answer: "Line symmetry means a shape can be reflected across a line and match itself exactly. Rotational symmetry means a shape can be rotated less than a full 360° turn around its center and match itself exactly. A shape can have either, both, or neither." },
          { question: "How many lines of symmetry does a regular polygon have?", answer: "Exactly the same number as its sides. A regular pentagon has 5 lines of symmetry, a regular hexagon has 6, and so on, because equal sides and angles repeat evenly around the center." },
          { question: "Does the letter S have symmetry?", answer: "Yes, but only one kind: rotational symmetry of order 2 (it looks the same after a 180° turn). It has no line symmetry, since no straight fold line produces matching mirror halves." },
          { question: "Is the human face symmetric?", answer: "Only approximately. Precise measurement of real faces typically finds small left-right differences in eye position, ear height, and other features — human facial symmetry is a close approximation, not a mathematically perfect match." },
          { question: "Why do snowflakes have six-fold symmetry?", answer: "Because water molecules bond into a repeating hexagonal lattice as ice forms, which causes a growing snowflake's arms to extend outward following that same six-fold structure — the underlying molecular geometry is what produces the visible six-fold pattern." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
