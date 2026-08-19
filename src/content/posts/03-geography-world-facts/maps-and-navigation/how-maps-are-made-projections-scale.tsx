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
  title: "How Maps Are Made: Projections & Scale Explained",
  category: "geography-world-facts",
  order: 14,
  subtopic: "maps-and-navigation",
  tags: [
    "map projections",
    "Mercator",
    "map scale",
    "cartography",
    "maps and navigation",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why every flat map distorts the Earth in some way, and why the Mercator projection makes Greenland look as big as Africa when it's actually 14 times smaller.",
  summary: "A map projection is a mathematical method for flattening the curved Earth onto a flat surface, and every method necessarily distorts either shape, area, distance, or direction to some degree.",
  sources: [
    { label: "USGS — Map Projections", url: "https://www.usgs.gov/faqs/what-does-map-projection-mean" },
    { label: "National Geographic — Map Projection", url: "https://education.nationalgeographic.org/resource/map-projection/" },
    { label: "Encyclopaedia Britannica — Map Projection", url: "https://www.britannica.com/science/map-projection" },
  ],
  seeAlso: [
    "geography-world-facts/latitude-and-longitude-explained",
    "geography-world-facts/time-zones-explained",
    "geography-world-facts/continents-and-oceans-overview",
  ],
  glossary: [
    { term: "Map projection", definition: "A mathematical method for representing the curved surface of a sphere (like Earth) on a flat plane, always introducing some form of distortion." },
    { term: "Mercator projection", definition: "A widely used map projection, created in 1569, that preserves angles and shape locally but severely distorts the size of landmasses far from the equator." },
    { term: "Equal-area projection", definition: "A map projection that preserves the true relative area of landmasses at the cost of distorting their shape, such as the Gall-Peters or Mollweide projections." },
    { term: "Map scale", definition: "The ratio between a distance measured on a map and the corresponding real-world distance, typically expressed as a ratio like 1:100,000." },
    { term: "Large-scale map", definition: "A map with a small scale denominator (e.g. 1:10,000) showing a smaller area in greater detail — counterintuitively, 'large scale' means more zoomed in, not more area covered." },
    { term: "Small-scale map", definition: "A map with a large scale denominator (e.g. 1:10,000,000) showing a larger area in less detail — 'small scale' means more zoomed out." },
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
          "Every flat map of Earth distorts something — shape, area, distance, or direction — because you cannot flatten a sphere onto a plane without stretching or tearing it somewhere, a mathematical fact, not a design flaw.",
          "The Mercator projection, still common in web maps, preserves angles for navigation but wildly exaggerates the size of landmasses far from the equator — Greenland looks roughly the size of Africa despite being about 14 times smaller.",
          "Map scale is a ratio: 1:100,000 means 1 unit on the map equals 100,000 of that same unit in reality, and a smaller scale number (1:10,000) actually means a more zoomed-in, more detailed map, not a bigger area.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/geography-world-facts/how-maps-are-made-projections-scale">map projection</TermLink> is the method mapmakers use to turn the round Earth into a flat map you can print or scroll through on a screen. Because Earth is a sphere and paper is flat, something always has to give — you can&apos;t peel an orange and lay the peel perfectly flat without stretching or tearing it, and the same is true of a map. Different projections choose to sacrifice different things: some keep shapes looking right but distort size, some keep size accurate but distort shape.</div>}
        detailed={<div className="prose-p">No <TermLink href="/geography-world-facts/how-maps-are-made-projections-scale">map projection</TermLink> can simultaneously preserve shape, area, distance, and direction — a mathematical certainty, not an engineering limitation to be solved with better technology. The <TermLink href="/geography-world-facts/how-maps-are-made-projections-scale">Mercator projection</TermLink>, created by Gerardus Mercator in 1569, preserves angles and local shape, which made it invaluable for sea navigation — a straight line drawn on a Mercator map represents a constant compass bearing, letting sailors plot a course with a ruler. Its tradeoff is severe area distortion that grows with distance from the equator, since it stretches east-west scale to keep meridians parallel, and to keep angles correct it must stretch north-south scale by the same amount — at high latitudes near the poles, that stretching approaches infinity. <TermLink href="/geography-world-facts/how-maps-are-made-projections-scale">Equal-area projections</TermLink> like the Gall-Peters or Mollweide flip the tradeoff: they preserve true relative area at the cost of distorting shape, so continents can look visibly squashed or stretched even though their area is proportionally correct. Compromise projections, like the Robinson projection used by National Geographic for decades, don&apos;t perfectly preserve any single property but keep all forms of distortion within a moderate range, which is often more useful for general reference maps than being perfect on one dimension and terrible on the rest.</div>}
      />
      <FootnoteAside>National Geographic used the Robinson projection for its reference world maps from 1988 until switching to the Winkel Tripel projection in 1998, specifically to reduce the exaggerated size of high-latitude landmasses even further.</FootnoteAside>

      <p>
      That unavoidable tradeoff explains why the exact same continent can look like two different sizes on two different maps — and nowhere is the effect more famous, or more consequential, than with Mercator and Greenland.
      </p>

      <QuickCheck
        question="On a standard Mercator world map, Greenland appears roughly the same size as Africa. In reality, how do they compare?"
        options={[
          { text: "Africa is roughly 14 times larger than Greenland in actual land area", correct: true, explanation: "Correct. Africa covers about 30.4 million km² versus Greenland's roughly 2.16 million km² — the Mercator projection's area distortion grows dramatically at Greenland's high latitude, making it look far bigger than it is." },
          { text: "They really are approximately the same size", correct: false, explanation: "This is exactly the Mercator distortion effect at work — the apparent similarity on the map doesn't reflect the real, very large difference in land area." },
          { text: "Greenland is actually larger than Africa, and the map underrepresents it", correct: false, explanation: "The distortion runs the opposite direction — Mercator inflates high-latitude landmasses like Greenland relative to their true size, not the reverse." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Reading a map scale ratio (baseline case)</h3>
      <div className="prose-p">
      A hiking map is labeled 1:50,000. That means every 1cm measured on the map equals 50,000cm — or 500 meters — in the real world. If a trail measures 8cm on the map, the real trail is 8 × 500 = 4,000 meters, or 4km. This is why map scale ratios are so useful: they turn a ruler measurement directly into a real-world distance, with no separate conversion chart needed, as long as you remember the units the ratio is expressed in.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why &apos;large scale&apos; means more zoomed in, not more area (edge case / variation)</h3>
      <div className="prose-p">
      A city street map at 1:5,000 is called a <TermLink href="/geography-world-facts/how-maps-are-made-projections-scale">large-scale map</TermLink>; a world atlas page at 1:50,000,000 is a <TermLink href="/geography-world-facts/how-maps-are-made-projections-scale">small-scale map</TermLink> — which feels backwards the first time you hear it, since the street map covers a tiny area and the atlas page covers the whole planet. The terminology refers to the scale fraction itself: 1/5,000 is a mathematically larger number than 1/50,000,000, even though the map it describes covers a smaller area in far more detail. Once you anchor to the fraction, not the geography, the naming stops being confusing.
      </div>

      <QuickCheck
        question="Which of these is a 'large-scale' map in the cartographic sense?"
        options={[
          { text: "A map of the entire world at 1:50,000,000", correct: false, explanation: "This is a small-scale map — it covers an enormous area, but the scale fraction (1/50,000,000) is a very small number." },
          { text: "A detailed street map of a single neighborhood at 1:5,000", correct: true, explanation: "Correct. 'Large scale' refers to the scale fraction being large (1/5,000 is bigger than 1/50,000,000), which corresponds to a smaller, more detailed area — not a larger area covered." },
          { text: "Both cover the same effective scale once printed on standard paper", correct: false, explanation: "Scale is a fixed ratio independent of the paper or screen size the map is displayed on — a 1:5,000 map and a 1:50,000,000 map represent very different real-world distances per map unit." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why web maps default to Mercator despite the distortion (real-world / applied case)</h3>
      <div className="prose-p">
      Google Maps and most other web mapping platforms use a variant of the Mercator projection (specifically &quot;Web Mercator&quot;), not because it&apos;s the most accurate representation of area, but because it preserves local shape and angle at any zoom level, which makes street-level navigation and direction-following intuitive, and because it lets the whole world be rendered as square tiles that are computationally simple to zoom and pan. The tradeoff is well known and generally accepted for navigation use, but the same projection has drawn real criticism when used for general reference or educational world maps, since it visually inflates the importance and size of countries far from the equator (mostly wealthier nations in North America and Europe) relative to those near it.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Mercator vs. equal-area projection: the same landmasses, two different tradeoffs"
        type="comparison"
        svgSrc="/diagrams/geography-world-facts-how-maps-are-made-projections-scale-mercator-vs-equal-area.svg"
        altText="Side-by-side world map comparison: the left map is a Mercator projection showing Greenland appearing nearly as large as Africa, with a note that Africa is actually about 14 times larger; the right map is an equal-area projection showing the two landmasses at their correct relative sizes, with Africa clearly much larger than Greenland, alongside a note that shapes are visibly more distorted on this projection."
      />
      <p>
      Both maps are mathematically valid and neither is simply &quot;wrong&quot; — they trade the same underlying distortion for two completely different purposes, angle-preservation for navigation versus area-accuracy for size comparison, and choosing between them depends entirely on what the map is being used for.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a map projection is just an art style choice with no real tradeoff.", fix: "Remember every projection sacrifices at least one of shape, area, distance, or direction — there's no neutral or 'undistorted' flat map of a sphere." },
          { mistake: "Reading 'large scale' as meaning 'covers a large area.'", fix: "Flip the association: large scale means a large scale fraction, which means more zoomed in and more detailed, covering a smaller area — not the other way around." },
          { mistake: "Comparing countries' relative size directly from a Mercator map.", fix: "Check an equal-area projection (or the actual km² figures) before drawing size conclusions — Mercator systematically inflates landmasses at high latitudes." },
        ]}
      />
      <MisconceptionCallout
        myth="The Mercator projection shows the true relative size of the world's countries and continents."
        reality={<p>The Mercator projection was designed to preserve angles for navigation, not to preserve area — and it distorts area severely at high latitudes. Greenland (about 2.16 million km²) appears roughly the same size as Africa (about 30.4 million km²) on a standard Mercator map, despite being about 14 times smaller in reality. Alaska, Canada, and Russia all appear substantially larger relative to equatorial countries than their true land area justifies. For accurate size comparisons, an equal-area projection or the actual km² figures are needed — Mercator was never built for that job.</p>}
      />

      <QuickCheck
        question="A student compares two countries' sizes by eye on a standard Mercator world map and concludes Country A (near the poles) is much bigger than Country B (near the equator). What's the risk in that conclusion?"
        options={[
          { text: "There's no risk — Mercator maps are accurate for area comparison", correct: false, explanation: "Mercator maps specifically distort area, growing worse toward the poles — this is exactly the wrong projection to eyeball size comparisons from." },
          { text: "The comparison could be badly wrong, since Mercator exaggerates the size of landmasses near the poles relative to those near the equator", correct: true, explanation: "Correct. Because Mercator's area distortion increases with distance from the equator, a country near the poles can look far larger on the map than it actually is compared to an equatorial country." },
          { text: "The risk only applies to islands, not full countries", correct: false, explanation: "Mercator's area distortion applies to any landmass based on its latitude, regardless of whether it's an island or a large mainland country." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Convert a map distance to real-world distance using scale"
        fields={[
          { key: "mapDistanceCm", label: "Distance measured on map (cm)", defaultValue: 8, step: 0.1 },
          { key: "scaleDenominator", label: "Scale denominator (the X in 1:X)", defaultValue: 50000 },
        ]}
        resultLabel="Real-world distance (km)"
        formula="mapScaleRealDistanceKm"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Try the calculator above with your own map's scale ratio and a measured trail or route distance to get a real-world distance instantly.",
          "Next time you look at a world map online, check which projection it's using (most web maps note this, or it's Web Mercator by default) before comparing country sizes by eye.",
          "Search for an equal-area world map and compare Greenland to Africa directly — the size difference is dramatic once distortion is removed.",
          "Read the related entry on Latitude & Longitude Explained to see how the coordinate grid itself interacts with projection distortion.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why do all map projections distort something?", answer: "Because Earth is a sphere and a map is flat, and there's no way to flatten a curved surface onto a plane without stretching, compressing, or tearing it somewhere — every projection has to choose which property (shape, area, distance, or direction) to sacrifice." },
          { question: "Why does Greenland look so big on the map?", answer: "Most online and printed world maps use the Mercator projection, which preserves angles for navigation but severely exaggerates the area of landmasses far from the equator — Greenland is roughly 14 times smaller than Africa in reality, despite looking similar in size on a Mercator map." },
          { question: "What does map scale 1:100,000 mean?", answer: "It means 1 unit of distance on the map equals 100,000 of that same unit in the real world — for example, 1cm on the map equals 100,000cm (1km) in reality." },
          { question: "Is a large-scale map more or less zoomed in?", answer: "More zoomed in. Confusingly, 'large scale' refers to the scale fraction being numerically large (like 1:5,000), which corresponds to a smaller, more detailed area — 'small scale' (like 1:10,000,000) covers a much larger area in less detail." },
          { question: "What map projection is most accurate?", answer: "No single projection is accurate in every sense — each preserves some property (shape, area, distance, or direction) at the expense of others. Which one is 'best' depends entirely on the map's purpose: Mercator for navigation, equal-area projections for comparing country sizes." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
