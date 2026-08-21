import React from 'react';
import { PostFrontmatter } from '@/types/post';
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
  title: "Shipping Container & Packaging Volume Standards",
  category: "units-measurement-conversions",
  order: 24,
  subtopic: "volume-and-capacity",
  tags: ["shipping container", "TEU", "cubic meters", "packaging volume", "logistics"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Global shipping runs on one standard box size, counted in a unit called the TEU — and the math behind how many boxes fit on a ship is just length × width × height, at industrial scale.",
  summary: "The global shipping industry standardizes cargo volume around the ISO container, counted in TEUs (twenty-foot equivalent units) — a 20-foot container holds about 33.2 cubic meters and counts as 1 TEU, while a 40-foot container holds about 67.7 cubic meters and counts as 2 TEU, letting ports and ships measure capacity in one consistent unit regardless of what's actually inside each box.",
  sources: [
    { label: "International Organization for Standardization — ISO 668 Series 1 freight containers", url: "https://www.iso.org/standard/76912.html" },
    { label: "US Department of Transportation — Maritime Administration, containerized shipping overview", url: "https://www.maritime.dot.gov/" },
    { label: "Encyclopaedia Britannica — Containerization", url: "https://www.britannica.com/technology/containerization" },
  ],
  seeAlso: [
    "units-measurement-conversions/understanding-fuel-tank-and-engine-capacity-units",
    "units-measurement-conversions/liters-vs-gallons-everyday-conversion",
    "math-numbers/unit-conversions-length-weight-volume",
  ],
  glossary: [
    {"term":"TEU","definition":"Twenty-foot equivalent unit — the standard unit for counting cargo container capacity, based on the volume of a 20-foot ISO shipping container (about 33.2 cubic meters)."},
    {"term":"ISO container","definition":"A standardized steel shipping container built to International Organization for Standardization dimensions, most commonly in 20-foot and 40-foot lengths, designed to stack and interlock identically on any compliant ship, truck, or rail car worldwide."},
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
      "Global shipping is built around one standardized box, the ISO container, so that ports, ships, trucks, and cranes anywhere in the world can handle any container the same way.",
      "Container capacity is counted in TEUs (twenty-foot equivalent units) — a standard 20-foot container is 1 TEU (≈33.2 m³ internal volume), and a 40-foot container is 2 TEU (≈67.7 m³).",
      "Finding a rectangular volume — a container's internal capacity, or how many boxes fit inside it — is the same length × width × height formula used for any rectangular prism, just applied at industrial scale.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Nearly all ocean freight moves in one standardized steel box, the <TermLink href="/units-measurement-conversions/shipping-container-and-packaging-volume-standards">ISO container</TermLink>, built to fixed dimensions so it stacks and locks the same way on any ship, truck chassis, or rail car anywhere on Earth. The industry measures how much cargo capacity a ship, port, or shipment represents using a single unit, the <TermLink href="/units-measurement-conversions/shipping-container-and-packaging-volume-standards">TEU</TermLink>, based on the volume of the smaller standard container size.</div>}
      detailed={<div className="prose-p">A standard 20-foot container has internal dimensions of roughly 5.9 m × 2.35 m × 2.39 m, giving an internal volume of about 33.2 cubic meters — this defines 1 TEU. A 40-foot container is roughly twice as long with the same width and height, giving about 67.7 cubic meters, counted as 2 TEU (sometimes also called 1 FEU, forty-foot equivalent unit). A large modern container ship&apos;s capacity is quoted in tens of thousands of TEUs — a way of expressing total cargo volume as an equivalent count of the industry&apos;s base unit, regardless of whether the ship is actually carrying a mix of 20-foot and 40-foot boxes. This lets ports, shipping lines, and customs authorities compare vastly different vessels and cargo mixes using one consistent number.</div>}
      />
      <FootnoteAside>Container dimensions are standardized externally too, not just internally — a 20-foot container&apos;s external footprint (about 6.1 m × 2.44 m) is exactly what lets identical corner-casting lock points, crane grippers, and truck chassis work with any compliant container built anywhere in the world, which is arguably containerization&apos;s real innovation over the internal volume figure itself.</FootnoteAside>

      <p>
      Once you know the standard box&apos;s own volume, most practical container-loading questions reduce to the same length × width × height arithmetic used for any rectangular space.
      </p>

      <QuickCheck
      question="A shipping line reports a vessel's capacity as '20,000 TEU.' What does that actually tell you?"
      options={[
      { text: "The ship can carry exactly 20,000 individual containers of any size", correct: false, explanation: "TEU counts capacity by volume-equivalent, not by a literal number of physical boxes — a 40-foot container counts as 2 TEU, so 20,000 TEU could be carried by fewer than 20,000 actual boxes if many are 40-foot." },
      { text: "The ship's total cargo capacity is equivalent to 20,000 standard 20-foot containers' worth of volume, even if the actual boxes loaded are a mix of 20-foot and 40-foot containers", correct: true, explanation: "Correct. TEU is a volume-equivalent counting unit, which is exactly why it lets the industry compare ships and cargo loads consistently despite mixed container sizes." },
      { text: "The ship weighs 20,000 tons", correct: false, explanation: "TEU measures volume-equivalent capacity, not weight — a ship's weight capacity is reported separately, in deadweight tonnage." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Calculating a 20-foot container&apos;s internal volume (baseline case)</h3>
      <div className="prose-p">
      Using standard internal dimensions of roughly 5.9 m × 2.35 m × 2.39 m: 5.9 × 2.35 × 2.39 ≈ 33.14 cubic meters — matching the commonly cited &quot;≈33.2 m³&quot; figure for 1 TEU, with small rounding differences depending on the exact manufacturer&apos;s internal wall thickness.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why a 40-foot container isn&apos;t exactly double the 20-foot container&apos;s volume (edge case / variation)</h3>
      <div className="prose-p">
      A 40-foot container&apos;s internal dimensions are roughly 12.03 m × 2.35 m × 2.39 m, giving 12.03 × 2.35 × 2.39 ≈ 67.6 cubic meters. Doubling the 20-foot figure would suggest 33.14 × 2 ≈ 66.28 m³ — close, but not identical, because the 40-foot container&apos;s length isn&apos;t exactly double the 20-foot container&apos;s length once internal wall structure is accounted for (39&apos; 5.75&quot; vs. 19&apos; 4.25&quot; internal length, not a clean 2:1 external-to-internal ratio). The industry still treats it as 2 TEU by convention for capacity counting, even though the true internal volumes aren&apos;t in a perfectly exact 2:1 ratio.
      </div>

      <QuickCheck
      question="Is a 40-foot shipping container's actual internal volume exactly double a 20-foot container's internal volume?"
      options={[
      { text: "Yes, exactly — that's why it's counted as 2 TEU", correct: false, explanation: "The 2 TEU counting convention is a standardized approximation for capacity accounting, not a claim that the internal volumes are in a mathematically perfect 2:1 ratio." },
      { text: "No — it's very close (roughly 67.6 m³ vs. double of 33.14 m³ ≈ 66.28 m³) but not exact, because internal wall structure means the internal length isn't a perfectly clean doubling of the 20-foot box's internal length", correct: true, explanation: "Correct. The TEU system is a useful, industry-standard approximation for counting capacity, not a claim of perfect geometric doubling." },
      { text: "No, the 40-foot container actually holds less than double, because it's narrower", correct: false, explanation: "The two container sizes share the same width and height — the (very small) discrepancy from a clean doubling comes from length and wall-structure details, not width." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Estimating how many standard boxes fit inside a 40-foot container (real-world / applied case)</h3>
      <div className="prose-p">
      A shipper is loading boxes measuring 1 m × 1 m × 1 m (1 cubic meter each) into a 40-foot container (≈67.6 m³ internal volume). A naive volume-only estimate suggests up to 67 boxes. In practice, real loading always falls short of the pure volume estimate because boxes are rectangular and the container&apos;s usable space isn&apos;t perfectly filled at every stacking layer (pallets, air gaps, and pack patterns leave real space unused) — professional logistics planning uses a realistic packing efficiency factor, often around 70-85% of raw volume, rather than the naive 100% figure, which is why real container load plans consistently fit noticeably fewer boxes than the raw division suggests.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="20-foot container (1 TEU) vs 40-foot container (2 TEU), drawn to relative scale"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-shipping-container-and-packaging-volume-standards-teu-comparison.svg"
      altText="Two shipping container boxes drawn to relative scale: a 20-foot standard container with about 33 cubic meters of internal capacity, counted as 1 TEU, and a 40-foot container drawn twice as long with about 67 cubic meters of internal capacity, counted as 2 TEU, illustrating that a 40-foot container is not simply 'twice a 20-foot box' in name only but genuinely close to double the internal volume."
      />
      <p>
      The near-2:1 length ratio in the diagram is deliberate — it&apos;s what makes the TEU counting convention a genuinely useful shorthand rather than an arbitrary industry number.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating a ship's TEU rating as a literal count of physical containers.", fix: "Remember TEU is a volume-equivalent unit — a 40-foot container alone counts as 2 TEU, so the physical box count can be well below the TEU figure." },
      { mistake: "Estimating how many boxes fit in a container using raw volume division with no packing efficiency factor.", fix: "Apply a realistic packing efficiency (commonly 70-85% of raw volume) rather than assuming a container fills perfectly." },
      { mistake: "Assuming a 40-foot container is exactly double a 20-foot container's internal volume.", fix: "Use the actual published internal dimensions — the ratio is very close to 2:1 but not perfectly exact." },
      ]}
      />
      <MisconceptionCallout
      myth="TEU is just a fancy industry name for 'one shipping container' — a 10,000 TEU ship carries 10,000 boxes."
      reality={<p>TEU (twenty-foot equivalent unit) is a capacity-counting unit based on volume-equivalence, not a count of physical boxes. Since a standard 40-foot container counts as 2 TEU, a ship rated for 10,000 TEU could be carrying anywhere from 5,000 (if all containers are 40-foot) up to nearly 10,000 physical boxes (if all are 20-foot), depending on the actual mix loaded.</p>}
      />

      <QuickCheck
      question="A logistics report says a port handled '2 million TEU' last year. What can you conclude about the number of physical containers handled?"
      options={[
      { text: "Exactly 2 million individual physical containers", correct: false, explanation: "TEU measures volume-equivalent capacity, not a literal box count — the actual number of physical containers depends on the mix of 20-foot and 40-foot boxes handled." },
      { text: "Somewhere between roughly 1 million and 2 million physical containers, since 40-foot boxes count as 2 TEU each while 20-foot boxes count as 1 TEU each", correct: true, explanation: "Correct. Without knowing the exact 20-foot/40-foot mix, TEU only bounds the physical container count — it doesn't state it exactly." },
      { text: "2 million tons of cargo weight", correct: false, explanation: "TEU is a volume-equivalent unit, unrelated to cargo weight — port throughput weight is reported using separate weight-based metrics." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Calculate a rectangular container's internal volume"
      fields={[
      { key: "length", label: "Internal length (m)", defaultValue: 5.9 },
      { key: "width", label: "Internal width (m)", defaultValue: 2.35 },
      { key: "height", label: "Internal height (m)", defaultValue: 2.39 },
      ]}
      resultLabel="Internal volume (m³)"
      formula="rectangularPrismVolume"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Remember TEU counts volume-equivalent capacity, not literal boxes — a 40-foot container is 2 TEU.",
      "Use length × width × height for any rectangular container or packaging volume estimate.",
      "When estimating how many items fit in a container, apply a realistic packing efficiency factor rather than raw volume division.",
      "Use the calculator above with a container or box's actual internal dimensions for a real volume estimate.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What does TEU stand for?", answer: "Twenty-foot equivalent unit — the shipping industry's standard unit for counting cargo container capacity, based on a standard 20-foot ISO container's volume." },
      { question: "How much does a 20-foot shipping container hold?", answer: "About 33.2 cubic meters of internal volume, defined as 1 TEU." },
      { question: "Is a 40-foot container the same as two 20-foot containers?", answer: "Very close but not exact — a 40-foot container holds about 67.6 m³, just under double a 20-foot container's ≈33.2 m³, and is counted as 2 TEU by industry convention." },
      { question: "How do you calculate a container's internal volume?", answer: "Multiply internal length × width × height, the same formula used for any rectangular prism." },
      { question: "Why doesn't a container fit as many boxes as raw volume division suggests?", answer: "Because real-world packing always leaves some unused space from pallets, air gaps, and stacking patterns — professional logistics planning applies a realistic packing efficiency factor (often 70-85%) rather than assuming perfect volume fill." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
