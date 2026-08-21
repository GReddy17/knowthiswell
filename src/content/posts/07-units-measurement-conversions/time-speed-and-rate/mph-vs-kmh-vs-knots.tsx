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
  title: "mph vs km/h vs Knots",
  category: "units-measurement-conversions",
  order: 35,
  subtopic: "time-speed-and-rate",
  tags: [
    "mph",
    "km/h",
    "knots",
    "speed conversion",
    "nautical mile",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A knot isn't a nautical version of mph with a fancier name — it's built on a completely different length unit, the nautical mile, which is itself tied to Earth's own geometry.",
  summary: "Miles per hour and kilometers per hour both measure distance-per-time using land-based length units, while knots (nautical miles per hour) use the nautical mile — a unit derived from one minute of latitude on Earth's surface — which is why converting between knots and the other two requires a different factor than converting between mph and km/h alone.",
  sources: [
    { label: "International Hydrographic Organization — Nautical Mile Standard", url: "https://iho.int/" },
    { label: "NIST — Guide for the Use of the International System of Units (SI)", url: "https://www.nist.gov/pml/special-publication-811" },
    { label: "Encyclopaedia Britannica — Knot (unit)", url: "https://www.britannica.com/science/knot-unit-of-measurement" },
  ],
  seeAlso: [
    "units-measurement-conversions/understanding-nautical-miles",
    "units-measurement-conversions/miles-vs-kilometers-quick-conversion-methods",
    "math-numbers/math-for-travel-distance-speed-time",
  ],
  glossary: [
    {"term":"Knot","definition":"A unit of speed equal to one nautical mile per hour, used in maritime and aviation navigation."},
    {"term":"Nautical mile","definition":"A unit of distance equal to 1,852 meters, defined as the length of one minute of arc of latitude along a meridian on Earth's surface."},
    {"term":"Statute mile","definition":"The standard land mile (5,280 feet, 1,609.34 meters) used for mph, as distinct from the longer nautical mile used for knots."},
    {"term":"SI unit","definition":"A unit belonging to the International System of Units — km/h is built entirely from SI base units (meters and seconds), while mph and knots are not."},
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
      "mph and km/h both measure distance-per-time using ordinary land-based length units (the statute mile and the kilometer) — converting between them is a simple fixed multiplication, 1 mph = 1.60934 km/h.",
      "A knot is not 'nautical mph' in name only — it's built on the nautical mile, a completely different length unit (1,852 meters) defined from Earth's own geometry, not from the statute mile at all.",
      "1 knot = 1.15078 mph = 1.852 km/h — both true, but neither is a round number, because knots were never designed to relate cleanly to either land-speed unit.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Miles per hour and kilometers per hour are both &quot;how far did you go, divided by how long it took&quot; using ordinary road-distance units — a mile or a kilometer. Converting between them is a straightforward multiplication: multiply mph by 1.60934 to get km/h. A <TermLink href="/units-measurement-conversions/mph-vs-kmh-vs-knots">knot</TermLink> looks like it should slot into that same family, but it&apos;s built from an entirely different distance unit — the <TermLink href="/units-measurement-conversions/mph-vs-kmh-vs-knots">nautical mile</TermLink> (1,852 meters), which is noticeably longer than a statute mile (1,609.34 meters). So 1 knot works out to about 1.15 mph, not 1-to-1.</div>}
      detailed={<div className="prose-p">The nautical mile&apos;s length isn&apos;t arbitrary the way the statute mile&apos;s history is — it&apos;s defined as the distance covered by one minute of arc of latitude along a meridian on Earth&apos;s surface. Since a full circle is 360 degrees and each degree has 60 minutes of arc, Earth&apos;s roughly 40,000 km circumference divides into 360 × 60 = 21,600 minutes of arc, and 40,000 km ÷ 21,600 ≈ 1.852 km per minute of arc — which is exactly the modern nautical mile. This geographic grounding is precisely why sailors and aviators use knots: one nautical mile of travel corresponds directly to one minute of latitude change, making the unit genuinely useful for celestial and chart-based navigation in a way land-based miles or kilometers aren&apos;t. It&apos;s also, incidentally, an <TermLink href="/units-measurement-conversions/mph-vs-kmh-vs-knots">SI unit</TermLink>-adjacent oddity: km/h is built entirely from SI base units (the meter and the second), while both mph and knots use non-SI length units.</div>}
      />
      <FootnoteAside>The nautical mile&apos;s link to latitude is also why it&apos;s useful for a rough distance shortcut at sea: since 1 nautical mile ≈ 1 minute of latitude, a sailor can estimate north-south distance traveled almost directly from the change in latitude shown on a chart, without needing a separate distance-scale conversion at all — a convenience that has no equivalent using statute miles or kilometers.</FootnoteAside>

      <p>
      Because knots are built on a genuinely different length unit, no shortcut trick (like &quot;just add 15%&quot; for mph, or &quot;just divide by 1.6&quot; for km/h) is exact — the real conversion factors have to be used directly.
      </p>

      <QuickCheck
      question="Why doesn't 1 knot equal exactly 1 mph, the way you might assume from both being 'speed per hour' units?"
      options={[
      { text: "Because a knot measures a different physical quantity than mph, not just speed", correct: false, explanation: "Both are genuinely speed (distance per time) — the difference isn't in what's measured, but in which length unit each is built from." },
      { text: "Because a knot is built on the nautical mile (1,852 m), which is longer than the statute mile (1,609.34 m) used for mph — different underlying length units produce different speed values for the same 'per hour' rate", correct: true, explanation: "Correct. The nautical mile is about 15% longer than the statute mile, which is exactly why 1 knot works out to roughly 1.15 mph rather than a clean 1-to-1 match." },
      { text: "Because knots measure only ship speed, and mph measures only vehicle speed, so they can't be directly compared", correct: false, explanation: "Both are units of speed and can be directly converted between each other — knots are used for ships and aircraft by convention, not because the unit is incapable of describing land speed." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting mph to km/h (baseline case)</h3>
      <div className="prose-p">
      A car travels at 60 mph. Converting to km/h: 60 × 1.60934 ≈ 96.56 km/h. This is the simplest of the three conversions, since both units are built from land-based length standards that relate to each other by a single fixed factor.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Converting the same speed into knots (edge case / variation)</h3>
      <div className="prose-p">
      That same 60 mph, converted to knots: since 1 knot = 1.15078 mph, dividing 60 ÷ 1.15078 ≈ 52.14 knots. Equivalently, converting from km/h: 96.56 km/h ÷ 1.852 ≈ 52.14 knots — the same answer either way, confirming the three scales really do describe one physical speed, just measured against three different length rulers.
      </div>

      <QuickCheck
      question="A ship's instruments read 20 knots. Roughly how fast is that in mph?"
      options={[
      { text: "About 20 mph — knots and mph are close enough to treat as equal", correct: false, explanation: "Knots run about 15% higher than mph for the same physical speed, so treating them as equal understates the true mph value by a meaningful margin at higher speeds." },
      { text: "About 23 mph — multiply knots by roughly 1.15 to get mph", correct: true, explanation: "Correct. 20 knots × 1.15078 ≈ 23.02 mph. The nautical mile's extra length compared to the statute mile is exactly why the knot value converts to a noticeably higher mph number." },
      { text: "About 32 mph — multiply knots by roughly 1.6 as if converting to km/h", correct: false, explanation: "1.60934 is the mile-to-kilometer factor, not the knot-to-mph factor — using it here mixes up two different conversions and overstates the result." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Reading an aviation weather report (real-world / applied case)</h3>
      <div className="prose-p">
      A pilot&apos;s weather briefing reports surface winds at 15 knots. Converting to a more familiar mph figure for a general audience: 15 × 1.15078 ≈ 17.26 mph — useful context, since 15 knots sounds mild but is actually closer to 17 mph, a wind speed capable of noticeably affecting small-aircraft handling and crosswind landings. Aviation and maritime weather reports use knots specifically because flight planning and navigation calculations are done in nautical miles, so keeping the speed unit consistent with the distance unit avoids an extra conversion step during time-critical work.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The same physical speed expressed in mph, km/h, and knots"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-mph-vs-kmh-vs-knots-speed-scale-comparison.svg"
      altText="Three parallel horizontal scales showing the same speed of 60 miles per hour, 96.6 kilometers per hour, and 52.1 knots, aligned vertically to show they represent the identical physical speed in three different units"
      />
      <p>
      All three markers line up at the same physical speed — the numbers differ only because each scale is built from a different underlying length unit (statute mile, kilometer, or nautical mile), not because the object is somehow moving at three different actual speeds.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating knots and mph as roughly interchangeable, or assuming 1 knot ≈ 1 mph.", fix: "Use the real factor: 1 knot ≈ 1.15078 mph. At higher speeds (aviation, shipping) this ~15% gap is large enough to matter." },
      { mistake: "Using the mile-to-kilometer factor (1.60934) when converting knots, instead of the knot-specific factor (1.852 for km/h, 1.15078 for mph).", fix: "Knots are built on the nautical mile, not the statute mile — always use 1 knot = 1.852 km/h or 1 knot = 1.15078 mph, never the land-mile factor." },
      { mistake: "Assuming the nautical mile is just a rounder or 'nicer' version of the statute mile.", fix: "The nautical mile (1,852 m) is a genuinely different, longer unit, defined from Earth's latitude geometry — it isn't a rounded or simplified version of the 1,609.34 m statute mile." },
      ]}
      />
      <MisconceptionCallout
      myth="A knot is just the nautical version of mph — same underlying mile, different name for maritime use."
      reality={<p>A knot is built on the nautical mile (1,852 meters, defined from one minute of latitude on Earth&apos;s surface), while mph is built on the statute mile (1,609.34 meters, a historical land-measurement unit). These are two different length units, roughly 15% apart — which is exactly why 1 knot converts to about 1.15 mph rather than a clean 1-to-1 match. The name similarity (&quot;mile&quot;) hides a real difference in what a &quot;mile&quot; means in each system.</p>}
      />

      <QuickCheck
      question="Why do pilots and sailors use knots rather than mph or km/h for navigation?"
      options={[
      { text: "Because knots are a more precise or scientifically superior unit of speed", correct: false, explanation: "Knots aren't inherently more precise — precision depends on the measuring instrument, not the unit chosen. The reason for using knots is practical, not about precision." },
      { text: "Because the nautical mile (which knots are built from) directly corresponds to one minute of latitude on navigation charts, making distance and speed calculations consistent without an extra conversion step", correct: true, explanation: "Correct. Since nautical charts and celestial navigation are already built around minutes of latitude, using knots (nautical miles per hour) keeps the speed unit consistent with the distance unit used for plotting a course." },
      { text: "Because mph and km/h can only be used for land vehicles by regulation", correct: false, explanation: "There's no technical restriction preventing mph or km/h from describing ship or aircraft speed — the preference for knots is a navigational-convenience convention, not a regulatory limitation on the other units." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert a speed using a fixed conversion factor"
      fields={[
      { key: "value", label: "Speed value", defaultValue: 60 },
      { key: "conversionFactor", label: "Conversion factor (e.g. 1.15078 for mph to knots, 1.852 for knots to km/h)", defaultValue: 1.60934, step: 0.00001 },
      ]}
      resultLabel="Converted speed"
      formula="unitConversionByFactor"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "For mph-to-km/h, multiply by 1.60934 — both units share the same 'land mile' family, so this conversion is simple and exact.",
      "For anything involving knots, use the nautical-mile-specific factors: 1 knot = 1.852 km/h, and 1 knot ≈ 1.15078 mph — never substitute the statute-mile factor.",
      "When reading an aviation or maritime weather report in knots, multiply by roughly 1.15 to get an intuitive mph figure if that's more familiar to you.",
      "Remember the nautical mile's origin (one minute of latitude) if you ever need a quick real-world sanity check on a charted distance at sea.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do you convert knots to mph?", answer: "Multiply the knot value by 1.15078. Example: 20 knots × 1.15078 ≈ 23.02 mph." },
      { question: "How do you convert knots to km/h?", answer: "Multiply the knot value by 1.852, since 1 knot is defined as exactly 1.852 km/h." },
      { question: "Is a knot the same as a nautical mph?", answer: "Functionally yes — a knot is one nautical mile per hour. It's just not the same as a statute mph, because the nautical mile (1,852 m) is a different, longer length unit than the statute mile (1,609.34 m) that mph is built on." },
      { question: "Why is the nautical mile longer than the regular mile?", answer: "Because the nautical mile is defined from Earth's own geometry — one minute of arc of latitude along a meridian, which works out to 1,852 meters — while the statute mile is a historical land-measurement unit (5,280 feet) unrelated to Earth's circumference." },
      { question: "Do pilots use mph or knots?", answer: "Aviation almost universally uses knots for airspeed and wind speed, because flight planning and navigation charts are built around nautical miles, keeping the speed and distance units consistent." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
