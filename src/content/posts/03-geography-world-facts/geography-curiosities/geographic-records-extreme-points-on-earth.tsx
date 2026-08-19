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
  title: "Geographic Records: Extreme Points on Earth",
  category: "geography-world-facts",
  order: 46,
  subtopic: "geography-curiosities",
  tags: [
    "extreme points",
    "Mount Everest",
    "Mariana Trench",
    "Dead Sea",
    "geographic superlatives",
    "highest lowest",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Earth's true extremes — highest, lowest, deepest, hottest, coldest — and why the point 'highest above sea level' isn't the same as the point 'farthest from Earth's center.'",
  summary: "Earth's extreme points span nearly 20 kilometers of vertical relief, from the summit of Mount Everest to the bottom of the Mariana Trench, and 'highest' depends on exactly what you're measuring from.",
  sources: [
    { label: "National Geographic — Mount Everest", url: "https://www.nationalgeographic.com/adventure/article/everest" },
    { label: "NOAA National Ocean Service — How deep is the Mariana Trench?", url: "https://oceanservice.noaa.gov/facts/mariana-trench.html" },
    { label: "World Meteorological Organization — World Weather & Climate Extremes Archive", url: "https://wmo.asu.edu/" },
    { label: "Encyclopaedia Britannica — Chimborazo", url: "https://www.britannica.com/place/Chimborazo" },
  ],
  seeAlso: [
    "geography-world-facts/mountains-and-mountain-ranges",
    "geography-world-facts/countries-that-no-longer-exist",
    "geography-world-facts/geography-myths-and-misconceptions",
    "geography-world-facts/rivers-and-major-watersheds",
  ],
  glossary: [
    { term: "Elevation", definition: "Height of a point on land measured vertically above mean sea level." },
    { term: "Oblate spheroid", definition: "Earth's true shape — a sphere slightly flattened at the poles and bulging at the equator due to its rotation." },
    { term: "Equatorial bulge", definition: "The extra distance from Earth's center at the equator compared to the poles, caused by centrifugal force from Earth's rotation, roughly 21 km of difference in radius." },
    { term: "Vertical relief", definition: "The total elevation difference between the highest and lowest points being compared." },
    { term: "Bathymetry", definition: "The measurement and mapping of ocean depths, the underwater equivalent of land elevation surveying." },
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
          "Mount Everest's summit (8,849 m) and the Mariana Trench's Challenger Deep (about 10,935 m below sea level) together span nearly 19,800 meters of vertical relief on Earth's surface.",
          "'Highest point' isn't a single fixed idea — Everest is highest above sea level, but Ecuador's Chimborazo is farthest from Earth's center, because Earth bulges at the equator.",
          "Extreme temperature records are formally certified by the World Meteorological Organization, and old records do get overturned — Libya's long-standing 1922 heat record was officially invalidated in 2012 after investigation.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Earth has record-holding places the same way athletes hold records: a highest point (Mount Everest, 8,849 meters above sea level), a lowest point on dry land (the shore of the Dead Sea, about 430 meters below sea level), and a deepest point in the ocean (Challenger Deep in the Mariana Trench, nearly 11,000 meters down). There are also climate extremes — the hottest and coldest temperatures ever reliably recorded on the planet&apos;s surface. Each record is measured differently, which is exactly why comparing them fairly takes more care than it looks.</div>}
        detailed={<div className="prose-p">Land <TermLink href="/geography-world-facts/geographic-records-extreme-points-on-earth">elevation</TermLink> and ocean depth are both measured relative to mean sea level, which itself is a modeled average, not a literal flat surface, since Earth is an <TermLink href="/geography-world-facts/geographic-records-extreme-points-on-earth">oblate spheroid</TermLink> rather than a perfect sphere — it bulges outward at the equator by roughly 21 kilometers of radius compared to the poles, a difference called the <TermLink href="/geography-world-facts/geographic-records-extreme-points-on-earth">equatorial bulge</TermLink>, caused by the centrifugal effect of Earth&apos;s rotation. That bulge means &quot;highest above sea level&quot; and &quot;farthest from Earth&apos;s center&quot; are genuinely different questions with different answers. Ocean depth measurement (<TermLink href="/geography-world-facts/geographic-records-extreme-points-on-earth">bathymetry</TermLink>) relies on sonar and, more recently, crewed and uncrewed submersible surveys — the Mariana Trench&apos;s Challenger Deep has been re-measured several times as sonar technology improved, with recent expeditions converging on roughly 10,935 meters below sea level. Temperature extremes are separately certified by the World Meteorological Organization&apos;s international archive committee, which reviews instrumentation and methodology before accepting or rejecting a claimed record — a process rigorous enough that it has retroactively disqualified records that stood unchallenged for nearly a century.</div>}
      />
      <FootnoteAside>In 2012, a WMO investigative committee formally disqualified the 57.8°C (136°F) reading recorded at El Azizia, Libya in 1922 — which had stood as the official world record for 90 years — after finding evidence of an inexperienced observer, a poor instrument site, and equipment likely misread. Death Valley, California&apos;s 1913 reading of 56.7°C (134°F) became the recognized record instead.</FootnoteAside>

      <p>
      That last point is worth sitting with: even a planet&apos;s &quot;biggest&quot; numbers are estimates that get revised as measurement improves. The clearest way to see how much these different kinds of &quot;extreme&quot; actually differ is to run the numbers side by side.
      </p>

      <QuickCheck
        question="Mount Everest's summit sits at 8,849 meters above sea level. The Mariana Trench's Challenger Deep sits at roughly 10,935 meters below sea level. Roughly how much total vertical relief separates these two points?"
        options={[
          { text: "About 2,000 meters, since you just compare the two numbers directly", correct: false, explanation: "This subtracts instead of adds. Since one point is above sea level and the other is below it, the total vertical distance between them is the sum of both depths/heights, not the difference." },
          { text: "About 19,800 meters, because the two points are on opposite sides of sea level, so their distances from it add together", correct: true, explanation: "Correct. Everest's 8,849 m above sea level plus the Mariana Trench's roughly 10,935 m below sea level adds up to nearly 19,800 meters of total vertical relief on Earth's surface." },
          { text: "About 10,935 meters, since the ocean point is deeper and therefore the larger number is the total relief", correct: false, explanation: "This only counts the ocean depth and ignores Everest's height entirely. Total relief between the two extremes has to include both distances from sea level, added together." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Earth&apos;s total vertical relief, Everest to Challenger Deep (baseline case)</h3>
      <div className="prose-p">
      Mount Everest&apos;s official summit elevation, jointly re-surveyed and announced by China and Nepal in 2020, is 8,849 meters (29,032 feet) above sea level. The Mariana Trench&apos;s Challenger Deep, the deepest known point in any ocean, sits at approximately 10,935 meters (35,876 feet) below sea level based on recent sonar and submersible surveys. Adding the two together — 8,849 + 10,935 — gives roughly 19,784 meters, or nearly 19.8 kilometers, of total vertical relief between Earth&apos;s highest and lowest known surface points. For comparison, commercial jets typically cruise around 10-12 kilometers of altitude — Earth&apos;s full surface relief is nearly double that.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why Chimborazo, not Everest, is farthest from Earth&apos;s center (edge case / variation)</h3>
      <div className="prose-p">
      Ecuador&apos;s Mount Chimborazo reaches only about 6,263 meters above sea level — far short of Everest&apos;s 8,849 meters. Yet because Chimborazo sits almost exactly on the equator, where Earth&apos;s equatorial bulge adds roughly 21 kilometers of extra radius compared to the poles, its summit ends up about 2.1 kilometers farther from Earth&apos;s exact center than Everest&apos;s summit is, despite being over 2,500 meters lower in elevation. Everest, by contrast, sits at about 28°N latitude, far enough from the equator that it doesn&apos;t benefit nearly as much from the bulge. This is a genuine edge case where the everyday meaning of &quot;highest point&quot; (elevation above sea level) and the strict geometric meaning (distance from Earth&apos;s center) point to two completely different mountains.
      </div>

      <QuickCheck
        question="Chimborazo in Ecuador is roughly 2,500 meters lower in elevation than Mount Everest, yet its summit is farther from Earth's exact center. What explains this?"
        options={[
          { text: "Chimborazo sits near the equator, where Earth's equatorial bulge adds extra distance from the planet's center that outweighs its lower elevation above sea level", correct: true, explanation: "Correct. Earth isn't a perfect sphere — it bulges at the equator by roughly 21 km of radius. Chimborazo's near-equatorial location adds enough extra distance from Earth's center to overcome its lower sea-level elevation compared to Everest." },
          { text: "Elevation measurements for Chimborazo have historically been inaccurate and are actually higher than Everest's", correct: false, explanation: "Chimborazo's sea-level elevation (about 6,263 m) is well-established and genuinely much lower than Everest's 8,849 m — the distance-from-center comparison is a separate measurement (Earth's shape), not a correction to elevation figures." },
          { text: "Ocean levels near the equator are measured differently, artificially inflating Chimborazo's apparent height", correct: false, explanation: "This isn't about differing sea-level definitions — it's about Earth's actual physical shape (an oblate spheroid) making the planet's surface literally farther from its center at the equator than at higher latitudes like Everest's." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How temperature extremes get certified — and overturned (real-world / applied case)</h3>
      <p>
      The World Meteorological Organization maintains an official archive of world weather extremes and periodically re-investigates disputed or aging records using modern forensic meteorology — reviewing original station logs, instrument calibration history, and site conditions. This process is exactly what overturned the 1922 El Azizia, Libya reading of 57.8°C in 2012, after a multi-year investigation found the equipment, observer training, and site conditions all suspect; Death Valley&apos;s Furnace Creek station reading of 56.7°C from July 10, 1913 became the recognized official world record instead. On the cold end, Vostok Station, Antarctica recorded a direct surface measurement of -89.2°C in 1983 (still the lowest reliably measured surface air temperature by a weather station), while satellite-based estimates have identified even colder surface skin temperatures near -93.2°C over the East Antarctic Plateau — a genuinely different measurement method that WMO tracks as a separate satellite-based record rather than merging it with the ground-station one.
      </p>

      <QuickCheck
        question="Why did the WMO officially remove Libya's 1922 record of 57.8°C as the world's hottest recorded temperature in 2012, nearly 90 years after it was first recorded?"
        options={[
          { text: "A formal WMO investigation found evidence of an inexperienced observer, a poor equipment site, and a likely instrument misreading, and downgraded the record after review", correct: true, explanation: "Correct. The WMO's international committee investigates disputed or aging extreme-weather claims using original records and forensic meteorology, and in this case concluded the 1922 reading did not meet modern certification standards." },
          { text: "The global climate has changed so much since 1922 that the old number is now considered outdated", correct: false, explanation: "The record wasn't invalidated because temperatures changed — it was invalidated because a specific investigation found the original 1922 measurement itself was unreliable, a methodology issue rather than a climate-change issue." },
          { text: "Libya asked the WMO to remove the record for political reasons unrelated to the data", correct: false, explanation: "The 2012 decision followed a documented technical investigation into instrumentation and site conditions, not a political request — the WMO's extreme-records process is a scientific review, not a diplomatic one." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Earth's extreme points on a single vertical scale, from Challenger Deep to Everest"
        type="detail"
        svgSrc="/diagrams/geography-world-facts-geographic-records-extreme-points-vertical-scale.svg"
        altText="A vertical number line representing elevation in meters, with sea level marked at zero in the middle. Above the line, Mount Everest's summit is marked at 8,849 meters. Below the line, the Dead Sea shore is marked at approximately negative 430 meters, and the Mariana Trench's Challenger Deep is marked at approximately negative 10,935 meters, with a bracket showing the nearly 19,800-meter total span between Everest's summit and Challenger Deep."
      />
      <p>
      Notice how much closer to sea level most familiar landscapes sit compared to these true extremes — the Dead Sea&apos;s shore, the lowest exposed dry land on Earth, is less than half a kilometer below sea level, while Challenger Deep is more than 20 times farther from sea level in the opposite direction. The scale is dominated by ocean depth, not land elevation — Earth&apos;s deepest point is more than 2,000 meters deeper than its highest point is tall.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming Mount Everest is the point on Earth farthest from the planet's center.", fix: "That distinction belongs to Chimborazo in Ecuador, because Earth's equatorial bulge makes points near the equator farther from Earth's center than higher-elevation points at other latitudes, like Everest at 28°N." },
          { mistake: "Treating 'deepest ocean point' and 'lowest point on Earth' as the same thing.", fix: "The Dead Sea shore (about -430 m) is the lowest point on exposed dry land; Challenger Deep (about -10,935 m) is the deepest point in the ocean — they're not comparable categories, since one is land and one is seafloor." },
          { mistake: "Treating a long-standing weather record as permanently settled just because it's old and widely cited.", fix: "Records are periodically re-investigated by the WMO using modern forensic methods — Libya's 1922 heat record stood for 90 years before being formally overturned in 2012." },
        ]}
      />
      <MisconceptionCallout
        myth="The highest point above sea level on Earth is automatically the point physically farthest from the center of the planet."
        reality={<p>Elevation above sea level and distance from Earth&apos;s center are measured from two different reference points and can disagree. Mount Everest is highest above sea level at 8,849 meters, but Earth is an oblate spheroid — flattened at the poles, bulging at the equator by roughly 21 kilometers of extra radius. Ecuador&apos;s Chimborazo, at only about 6,263 meters of elevation, sits near enough to the equator that its summit ends up roughly 2.1 kilometers farther from Earth&apos;s exact center than Everest&apos;s summit. Both facts are simultaneously true: Everest is the highest above sea level, Chimborazo is the farthest from Earth&apos;s center. Neither claim contradicts the other — they&apos;re just answering different questions.</p>}
      />

      <QuickCheck
        question="A textbook claims 'Mount Everest is the point on Earth farthest from the planet's center.' Is this statement accurate?"
        options={[
          { text: "No — that distinction belongs to Chimborazo in Ecuador, because of Earth's equatorial bulge, even though Everest remains the highest point above sea level", correct: true, explanation: "Correct. 'Highest above sea level' and 'farthest from Earth's center' are different measurements. Everest wins the first; Chimborazo, due to its near-equatorial location, wins the second." },
          { text: "Yes — being the tallest mountain above sea level automatically means being the farthest from Earth's center too", correct: false, explanation: "This ignores Earth's shape. Because Earth bulges at the equator, a lower-elevation peak near the equator (Chimborazo) can be farther from Earth's center than a taller peak farther from the equator (Everest)." },
          { text: "It's unmeasurable, since Earth's center can't be precisely located", correct: false, explanation: "Earth's center is a well-defined reference point in modern geodesy, and distances from it are routinely and precisely calculated — this is exactly how Chimborazo's distinction was established in the first place." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Calculate vertical relief between two elevations"
        fields={[
          { key: "elevationAMeters", label: "Elevation of point A (meters above sea level; use a negative number for below sea level)", defaultValue: 8849 },
          { key: "elevationBMeters", label: "Elevation of point B (meters above sea level; use a negative number for below sea level)", defaultValue: -10935 },
        ]}
        resultLabel="Vertical relief between the two points (meters)"
        formula="elevationDifferenceMeters"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Try the calculator above with the Dead Sea shore (-430) and Everest's summit (8,849) to see the more everyday-scale relief most travelers actually experience.",
          "Next time a record temperature is reported in the news, check whether it's a ground-station measurement or a satellite estimate — they're tracked separately and aren't directly comparable.",
          "Look up your own region's highest and lowest points and see how they compare in scale to the Everest-to-Challenger-Deep relief above.",
          "Read the related entry on Mountains & Mountain Ranges for more on how elevation itself is surveyed and re-measured over time.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the highest point on Earth?", answer: "Mount Everest, on the Nepal-China (Tibet) border, at 8,849 meters (29,032 feet) above sea level, per the joint Nepal-China re-survey announced in 2020." },
          { question: "What is the deepest point in the ocean?", answer: "Challenger Deep, in the Mariana Trench in the western Pacific, at approximately 10,935 meters (35,876 feet) below sea level, based on recent sonar and submersible surveys." },
          { question: "What is the lowest point on dry land on Earth?", answer: "The shore of the Dead Sea, bordering Israel, the West Bank, and Jordan, at roughly 430 meters below sea level — the lowest point of exposed land not covered by ocean." },
          { question: "Is Mount Everest the point farthest from Earth's center?", answer: "No. That distinction belongs to Ecuador's Mount Chimborazo, because Earth's equatorial bulge places Chimborazo's summit roughly 2.1 kilometers farther from the planet's exact center than Everest's summit, despite Chimborazo being over 2,500 meters lower in elevation." },
          { question: "What is the coldest temperature ever recorded on Earth?", answer: "The lowest reliably measured surface air temperature by a ground weather station is -89.2°C, recorded at Vostok Station, Antarctica, in 1983. Separate satellite-based estimates have identified even colder surface skin temperatures, around -93.2°C, over the East Antarctic Plateau, tracked as a distinct record category." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
