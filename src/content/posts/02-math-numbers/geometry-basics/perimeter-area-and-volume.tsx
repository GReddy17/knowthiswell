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
  title: "Perimeter, Area & Volume: Measuring Length, Space, and Capacity",
  category: "math-numbers",
  order: 24,
  subtopic: "geometry-basics",
  tags: [
    "perimeter",
    "area",
    "volume",
    "geometry basics",
    "measurement",
    "rectangles",
    "scale factor",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How perimeter, area, and volume measure length, space, and capacity — and why doubling a shape's dimensions never just doubles its total.",
  summary: "Perimeter measures the distance around a shape, area measures the flat space it covers, and volume measures the space a 3D shape encloses — each uses its own formula and its own unit, and each scales differently when a shape's size changes.",
  sources: [
    { label: "Encyclopaedia Britannica — Geometry", url: "https://www.britannica.com/science/geometry" },
    { label: "MathWorld (Wolfram) — Area", url: "https://mathworld.wolfram.com/Area.html" },
    { label: "Khan Academy — Basic Geometry", url: "https://www.khanacademy.org/math/basic-geo" },
    { label: "National Council of Teachers of Mathematics (NCTM)", url: "https://www.nctm.org/" },
  ],
  seeAlso: [
    "math-numbers/basic-shapes-and-properties",
    "math-numbers/the-pythagorean-theorem",
    "math-numbers/circles-radius-diameter-circumference",
    "math-numbers/ratios-and-proportions",
  ],
  glossary: [
    { term: "Perimeter", definition: "The total distance around the outside edge of a 2D shape, measured in linear units (cm, m, ft)." },
    { term: "Area", definition: "The amount of flat surface a 2D shape covers, measured in square units (cm², m², ft²)." },
    { term: "Volume", definition: "The amount of space a 3D shape encloses, measured in cubic units (cm³, m³, liters)." },
    { term: "Rectangular prism", definition: "A 3D solid with six rectangular faces, like a box or a brick — its volume is length × width × height." },
    { term: "Scale factor", definition: "The number a shape's dimensions are multiplied by when it's enlarged or shrunk." },
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
          "Perimeter measures a 1D distance (total edge length), area measures a 2D surface (flat space covered), and volume measures a 3D capacity (space enclosed) — each needs its own kind of unit: linear, square, or cubic.",
          "Doubling every dimension of a shape doesn't double its area or volume — area scales by the square of the size increase and volume by the cube, which is why a 'twice as big' box holds far more than twice as much.",
          "A handful of formulas cover most everyday measuring: rectangle perimeter = 2(l + w), rectangle area = l × w, triangle area = ½ × base × height, and box volume = l × w × h.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/math-numbers/perimeter-area-and-volume">Perimeter</TermLink>, <TermLink href="/math-numbers/perimeter-area-and-volume">area</TermLink>, and <TermLink href="/math-numbers/perimeter-area-and-volume">volume</TermLink> all answer different everyday questions about the same shape. How much fencing do you need around a yard? That&apos;s perimeter. How much carpet do you need to cover a floor? That&apos;s area. How much water fits inside a fish tank? That&apos;s volume. A rectangular room 4 meters by 3 meters has a perimeter of 14 meters (the distance you&apos;d walk tracing its walls) and an area of 12 square meters (the floor space you&apos;d cover with tile) — two completely different numbers from the same two measurements.</div>}
        detailed={<div className="prose-p">Each measurement corresponds to a different dimension count, which is why their units differ structurally, not just numerically. Perimeter sums linear (1D) distances, so it&apos;s reported in plain units like meters. Area covers a 2D surface, so it&apos;s reported in squared units (m²) — literally counting how many 1-meter-by-1-meter squares tile the surface. Volume fills 3D space, so it&apos;s reported in cubed units (m³) — how many 1-meter cubes fit inside. For a rectangle, perimeter = 2(length + width) and area = length × width; for a <TermLink href="/math-numbers/perimeter-area-and-volume">rectangular prism</TermLink> (a box), volume = length × width × height. Because area depends on two multiplied dimensions and volume on three, resizing a shape by a <TermLink href="/math-numbers/perimeter-area-and-volume">scale factor</TermLink> doesn&apos;t scale all three measurements equally: perimeter scales linearly with the factor, area scales with the factor squared, and volume scales with the factor cubed.</div>}
      />
      <FootnoteAside>The word &quot;acre&quot; — still used for land area today — was originally defined in medieval England as the amount of land a team of oxen could plow in a single day, roughly a strip 1 furlong (660 ft) long by 1 chain (66 ft) wide. It was only later standardized to a fixed area of 43,560 square feet, long after the working-day definition stopped being practical.</FootnoteAside>

      <p>
      Those three formulas are simple on their own — the part that trips people up is what happens when a shape&apos;s size changes, because perimeter, area, and volume don&apos;t grow at the same rate.
      </p>

      <QuickCheck
        question="A rectangular garden is 6 meters long and 4 meters wide. What is its perimeter, and what is its area?"
        options={[
          { text: "Perimeter 20 m, area 24 m²", correct: true, explanation: "Correct. Perimeter = 2(6 + 4) = 2(10) = 20 m. Area = 6 × 4 = 24 m². Same two measurements, two different formulas, two different kinds of units." },
          { text: "Perimeter 24 m, area 20 m²", correct: false, explanation: "This swaps the two results. Area (l × w) gives 24, and perimeter (2 × (l + w)) gives 20 — not the other way around." },
          { text: "Perimeter and area are both 10, since 6 + 4 = 10", correct: false, explanation: "6 + 4 = 10 is only half the perimeter formula — you still need to double it for perimeter (20 m), and area needs multiplication, not addition, entirely (24 m²)." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Flooring a rectangular room (baseline case)</h3>
      <div className="prose-p">
      A room measures 4 meters by 3 meters. Perimeter (for baseboard trim) = 2 × (4 + 3) = 2 × 7 = <strong>14 meters</strong>. Area (for flooring or carpet) = 4 × 3 = <strong>12 square meters</strong>. If flooring costs $28 per square meter, the material cost is 12 × $28 = <strong>$336</strong> — a calculation that depends entirely on area, not perimeter, which is why quoting the wrong one leads to ordering the wrong amount of material.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A triangular garden plot (edge case / variation)</h3>
      <div className="prose-p">
      Not every space is a rectangle. A triangular garden bed has a base of 6 meters and a height of 4 meters (height meaning the straight perpendicular distance from the base to the opposite corner, not a slanted side). Triangle area = ½ × base × height = ½ × 6 × 4 = <strong>12 square meters</strong> — coincidentally the same area as Example 1&apos;s rectangle, despite being a completely different shape, which is a useful reminder that area doesn&apos;t reveal shape, only total surface covered. Perimeter, by contrast, would require knowing all three side lengths of the triangle, not just base and height — area and perimeter genuinely need different input information.
      </div>

      <QuickCheck
        question="To find the area of a triangle, you use ½ × base × height. What does 'height' mean in this formula?"
        options={[
          { text: "The length of one of the triangle's slanted sides", correct: false, explanation: "A slanted side is not the same as height. Height specifically means the straight, perpendicular (right-angle) distance from the base up to the opposite vertex." },
          { text: "The straight perpendicular distance from the base to the opposite vertex", correct: true, explanation: "Correct. Height in this formula always means a perpendicular measurement to the base — not any slanted side length — which is what makes ½ × base × height work correctly." },
          { text: "The average of the triangle's three side lengths", correct: false, explanation: "Averaging side lengths isn't part of the area formula at all. Triangle area only needs one base and its perpendicular height." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Volume of a moving box (real-world / applied case)</h3>
      <p>
      A moving box measures 50 cm long, 40 cm wide, and 30 cm tall. Volume = length × width × height = 50 × 40 × 30 = <strong>60,000 cubic centimeters</strong>. Since 1,000 cm³ equals 1 liter, that converts to <strong>60 liters</strong> of usable packing space — a number movers and shipping companies use directly to estimate how many boxes a room&apos;s belongings will need, or whether a box will fit a size restriction. Notice this used all three dimensions multiplied together, unlike area, which only needed two — volume genuinely requires a full 3D measurement, not a flat one.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Perimeter, area, and volume on the same rectangular shape"
        type="comparison"
        svgSrc="/diagrams/math-numbers-perimeter-area-and-volume-comparison.svg"
        altText="Three side-by-side diagrams of a rectangular shape: the first highlights only the outer edge in a bold outline labeled perimeter with a linear ruler icon, the second fills the flat surface with a grid of unit squares labeled area, and the third extends the rectangle into a 3D box filled with unit cubes labeled volume, each labeled with its corresponding unit type (linear, square, cubic)."
      />
      <p>
      The grid overlays are the point of this diagram: perimeter only traces the outline (count linear units around the edge), area tiles the flat surface with unit squares (count how many fit), and volume packs the solid with unit cubes (count how many fit inside). That&apos;s not a metaphor — it&apos;s literally what &quot;square meter&quot; and &quot;cubic meter&quot; mean, and it&apos;s why the three measurements can&apos;t be converted into each other without more information about the shape.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Reporting an area or volume answer in linear units (e.g., '12 meters' instead of '12 square meters').", fix: "Always match the unit to the dimension count — perimeter answers are linear (m), area answers are squared (m²), volume answers are cubed (m³). The unit itself signals whether the calculation was even set up correctly." },
          { mistake: "Adding only two sides of a rectangle for perimeter and forgetting to double the total.", fix: "Perimeter needs all four sides: 2 × (length + width), not just length + width. Skipping the '× 2' undercounts the perimeter by half." },
          { mistake: "Multiplying any three numbers together and calling it a box's volume, without checking they're the actual length, width, and height of that box.", fix: "Volume = length × width × height only works when all three numbers are genuine, matching dimensions of the same solid — mixing up a box's height with an unrelated measurement gives a meaningless result." },
        ]}
      />
      <MisconceptionCallout
        myth="If you double a shape's length and width, you double its area."
        reality={<p>Area scales with the <em>square</em> of the size increase, not the increase itself. A 2×2 meter square has an area of 4 m². Double both dimensions to 4×4 meters, and the area becomes 16 m² — four times as much, not two. The same effect is even stronger for volume: doubling every dimension of a box multiplies its volume by 2³ = 8. This is why a pizza with twice the diameter isn&apos;t twice the food, and why a storage box that&apos;s &quot;just a bit bigger&quot; in each direction can hold dramatically more than it looks like it should.</p>}
      />

      <QuickCheck
        question="A square garden plot is 3 meters by 3 meters (area 9 m²). If you double both dimensions to 6 meters by 6 meters, what is the new area?"
        options={[
          { text: "18 m², since the area simply doubles along with the dimensions", correct: false, explanation: "Area doesn't scale at the same rate as the side lengths. Doubling both dimensions of a square multiplies its area by 2² = 4, not by 2." },
          { text: "36 m², because area scales with the square of the size increase", correct: true, explanation: "Correct. 6 × 6 = 36 m², which is 9 × 4 — exactly four times the original 9 m², matching the rule that area scales by the scale factor squared (2² = 4)." },
          { text: "12 m², since only one dimension's increase actually affects area", correct: false, explanation: "Both dimensions affect area, since area = length × width, and both were doubled here. The correct new area is 36 m², not 12." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Rectangle perimeter: 2 × (length + width)"
        fields={[
          { key: "length", label: "Length", defaultValue: 4 },
          { key: "width", label: "Width", defaultValue: 3 },
        ]}
        resultLabel="Perimeter"
        formula="rectanglePerimeter"
        formatResult="number"
      />
      <EntryCalculator
        title="Rectangle area: length × width"
        fields={[
          { key: "length", label: "Length", defaultValue: 4 },
          { key: "width", label: "Width", defaultValue: 3 },
        ]}
        resultLabel="Area"
        formula="rectangleArea"
        formatResult="number"
      />
      <EntryCalculator
        title="Triangle area: ½ × base × height"
        fields={[
          { key: "base", label: "Base", defaultValue: 6 },
          { key: "height", label: "Height", defaultValue: 4 },
        ]}
        resultLabel="Area"
        formula="triangleArea"
        formatResult="number"
      />
      <EntryCalculator
        title="Rectangular prism (box) volume: length × width × height"
        fields={[
          { key: "length", label: "Length", defaultValue: 50 },
          { key: "width", label: "Width", defaultValue: 40 },
          { key: "height", label: "Height", defaultValue: 30 },
        ]}
        resultLabel="Volume"
        formula="rectangularPrismVolume"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Measure a real room's length and width, then use the calculators above to find both its perimeter (for trim) and area (for flooring) — notice how different the two numbers are.",
          "Next time you compare two similarly-shaped products (a 'large' vs. 'medium' pizza, a 'bigger' storage box), remember that a modest increase in each dimension can mean a much larger increase in area or volume.",
          "Practice the triangle area formula on a triangular space you can measure, being careful to use the perpendicular height, not a slanted side.",
          "Read the related entry on Basic Shapes & Properties for how these same shapes are classified, and The Pythagorean Theorem for finding a missing side length before you calculate area.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between perimeter, area, and volume?", answer: "Perimeter measures the total distance around a 2D shape's edge (linear units). Area measures the flat surface a 2D shape covers (square units). Volume measures the space a 3D shape encloses (cubic units). All three can come from the same shape but answer different questions." },
          { question: "How do you find the area of a rectangle?", answer: "Multiply length by width: area = length × width. For a 4-meter by 3-meter rectangle, that's 4 × 3 = 12 square meters." },
          { question: "Does doubling the size of a shape double its area?", answer: "No. Doubling every dimension of a shape multiplies its area by 2² = 4, and its volume by 2³ = 8, because area depends on two multiplied dimensions and volume on three." },
          { question: "What is the formula for the volume of a box?", answer: "Volume = length × width × height, using three matching dimensions of the same rectangular solid. The result is reported in cubic units, such as cubic centimeters or cubic meters." },
          { question: "How do you find the area of a triangle?", answer: "Use ½ × base × height, where height is the perpendicular (right-angle) distance from the base to the opposite vertex — not the length of a slanted side." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
