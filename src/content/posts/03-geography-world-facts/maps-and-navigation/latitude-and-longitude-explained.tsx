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
  title: "Latitude & Longitude Explained: Reading Earth's Coordinate Grid",
  category: "geography-world-facts",
  order: 15,
  subtopic: "maps-and-navigation",
  tags: [
    "latitude",
    "longitude",
    "coordinates",
    "prime meridian",
    "equator",
    "maps and navigation",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why latitude lines stay a fixed 111km apart everywhere on Earth, while longitude lines squeeze together and meet at the poles.",
  summary: "Latitude measures angular distance north or south of the equator, and longitude measures angular distance east or west of the Prime Meridian, together pinpointing any location on Earth with a pair of coordinates.",
  sources: [
    { label: "NOAA — Latitude and Longitude", url: "https://oceanservice.noaa.gov/facts/latitude.html" },
    { label: "National Geographic — Latitude and Longitude", url: "https://education.nationalgeographic.org/resource/latitude/" },
    { label: "USGS — Geographic Coordinate System", url: "https://www.usgs.gov/faqs/what-does-datum-mean" },
  ],
  seeAlso: [
    "geography-world-facts/time-zones-explained",
    "geography-world-facts/how-maps-are-made-projections-scale",
    "geography-world-facts/gps-and-how-location-technology-works",
    "general-science-facts/seasons-and-earths-tilt",
  ],
  glossary: [
    { term: "Latitude", definition: "The angular distance of a location north or south of the equator, measured in degrees from 0° at the equator to 90° at the poles." },
    { term: "Longitude", definition: "The angular distance of a location east or west of the Prime Meridian, measured in degrees from 0° to 180° in either direction." },
    { term: "Equator", definition: "The imaginary line at 0° latitude, equidistant from the North and South Poles, defined by Earth's rotation axis rather than by human convention." },
    { term: "Prime Meridian", definition: "The imaginary line at 0° longitude, passing through Greenwich, England, chosen by international agreement in 1884 as an arbitrary reference point." },
    { term: "Parallel", definition: "A line of constant latitude, running east-west, always parallel to the equator and to every other parallel." },
    { term: "Meridian", definition: "A line of constant longitude, running north-south from pole to pole, converging with every other meridian at both poles." },
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
          "Latitude measures how far north or south of the equator you are; longitude measures how far east or west of the Prime Meridian you are — together they pinpoint any location on Earth.",
          "Every degree of latitude is roughly the same 111km apart everywhere on Earth, but degrees of longitude shrink toward the poles, from about 111km at the equator down to 0km exactly at the poles.",
          "The equator is a natural reference point set by Earth's rotation axis; the Prime Meridian is a human decision, fixed at Greenwich, England by international agreement in 1884 — it could have been drawn almost anywhere.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/geography-world-facts/latitude-and-longitude-explained">Latitude</TermLink> and <TermLink href="/geography-world-facts/latitude-and-longitude-explained">longitude</TermLink> are a pair of numbers that pinpoint any exact location on Earth, the same way a street address pinpoints a building. Latitude tells you how far north or south you are of the <TermLink href="/geography-world-facts/latitude-and-longitude-explained">equator</TermLink>, the imaginary line circling the globe exactly halfway between the North and South Poles. Longitude tells you how far east or west you are of the <TermLink href="/geography-world-facts/latitude-and-longitude-explained">Prime Meridian</TermLink>, the imaginary line running through Greenwich, England. Together, a coordinate like &quot;40.7°N, 74.0°W&quot; (New York City) tells you exactly one point on the entire planet.</div>}
        detailed={<div className="prose-p">Lines of latitude are called <TermLink href="/geography-world-facts/latitude-and-longitude-explained">parallels</TermLink> because they run east-west and never converge — every parallel stays the same distance from every other parallel all the way around the globe, which is why a degree of latitude measures a consistent roughly 111km anywhere on Earth. Lines of longitude are called <TermLink href="/geography-world-facts/latitude-and-longitude-explained">meridians</TermLink>, and they behave completely differently: every meridian runs from the North Pole to the South Pole, so all of them converge at exactly two points. That convergence means a degree of longitude spans a full 111.32km at the equator but shrinks steadily toward the poles, reaching exactly 0km at the poles themselves, where every meridian meets. The equator&apos;s position isn&apos;t a human decision — it&apos;s fixed by Earth&apos;s actual rotation axis, equidistant from both poles by definition. The Prime Meridian&apos;s position, by contrast, is entirely a matter of convention: delegates at the 1884 International Meridian Conference voted to set it at the Royal Observatory in Greenwich, largely because most of the world&apos;s shipping already used British nautical charts at the time — there&apos;s no physical reason it couldn&apos;t have been drawn through Paris, or anywhere else.</div>}
      />
      <FootnoteAside>France held out for decades after 1884, continuing to use the Paris Meridian on official French maps until finally adopting Greenwich as the international standard in 1911.</FootnoteAside>

      <p>
      That difference — latitude lines stay evenly spaced, longitude lines converge — isn&apos;t just trivia. It has a real, calculable effect on how far apart two coordinates actually sit on the ground.
      </p>

      <QuickCheck
        question="Which stays the same distance apart everywhere on Earth: one degree of latitude, or one degree of longitude?"
        options={[
          { text: "One degree of latitude, which is roughly 111km apart everywhere on Earth", correct: true, explanation: "Correct. Latitude lines (parallels) never converge, so a degree of latitude measures a consistent distance everywhere — roughly 111km, whether near the equator or near a pole." },
          { text: "One degree of longitude, which is roughly 111km apart everywhere on Earth", correct: false, explanation: "Longitude lines (meridians) converge at the poles, so a degree of longitude shrinks from about 111km at the equator down to 0km exactly at the poles — it's not constant." },
          { text: "Both stay exactly the same distance apart everywhere", correct: false, explanation: "Only latitude behaves this way. Longitude lines converge at the poles, so the real distance per degree of longitude depends heavily on how far from the equator you are." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Distance from a change in latitude (baseline case)</h3>
      <div className="prose-p">
      Two cities sit at the same longitude but 3 degrees of latitude apart. Since each degree of latitude is roughly 111km anywhere on Earth, the north-south distance between them is approximately 3 × 111 = 333km. This calculation works identically whether the cities are near the equator or near the Arctic Circle, because latitude spacing doesn&apos;t change with location — one of the few genuinely simple, universal conversions in geography.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why the same longitude difference means different distances at different latitudes (edge case / variation)</h3>
      <div className="prose-p">
      A 10-degree difference in longitude at the equator spans roughly 10 × 111.32 ≈ 1,113km. The exact same 10-degree difference in longitude at 60°N latitude (roughly the latitude of Anchorage or Oslo) spans only about 10 × 111.32 × cos(60°) ≈ 557km — half the equatorial distance, because cos(60°) = 0.5. Near the poles, that same 10-degree longitude gap can shrink to just a few kilometers or less, since all meridians converge to a single point exactly at 90°N and 90°S. This is precisely why longitude requires a cosine correction for the local latitude and latitude doesn&apos;t: the physical convergence of the meridian lines is a real geometric effect, not a measurement quirk.
      </div>

      <QuickCheck
        question="Two points share the same 10-degree longitude difference — one pair near the equator, one pair near 60°N. Which pair is physically farther apart?"
        options={[
          { text: "The pair near the equator, because longitude lines are farther apart there", correct: true, explanation: "Correct. Longitude lines converge toward the poles, so the same number of degrees of longitude covers more real distance near the equator than it does at higher latitudes like 60°N." },
          { text: "The pair near 60°N, because they're farther from the equator", correct: false, explanation: "Distance from the equator affects latitude spacing, not longitude spacing — longitude lines get closer together, not farther apart, as you move away from the equator toward either pole." },
          { text: "Both pairs are the same distance apart, since it's the same number of degrees", correct: false, explanation: "Degrees of longitude don't correspond to a fixed distance — the real distance per degree shrinks with the cosine of latitude, so the same degree count means very different real distances at different latitudes." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Coordinates in real-world navigation and mapping (real-world / applied case)</h3>
      <div className="prose-p">
      Every GPS device, digital map, and international shipping or flight route relies on latitude and longitude as the underlying universal addressing system for the planet — a coordinate pair works identically whether you&apos;re using it in a smartphone app, a ship&apos;s navigation system, or an emergency rescue coordination center, because it doesn&apos;t depend on street names, local languages, or political borders that might not exist or might change. Search-and-rescue teams, for instance, routinely receive locations as raw coordinates from distress beacons, precise enough to guide a helicopter to a specific point in open ocean with no landmarks at all — something no address system built on human infrastructure could ever do.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Parallels vs. meridians: why one grid converges and the other doesn't"
        type="comparison"
        svgSrc="/diagrams/geography-world-facts-latitude-and-longitude-explained-grid.svg"
        altText="A globe diagram showing latitude lines (parallels) as evenly spaced horizontal circles running from the equator to each pole without converging, next to longitude lines (meridians) shown as vertical lines that start evenly spaced at the equator and converge to single points at the North and South Poles."
      />
      <p>
      The visual difference is the entire explanation: parallels stack like evenly spaced rungs on a ladder, while meridians behave like the segments of an orange, wide apart at the equator and pinched together at both ends.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a degree of longitude is the same real distance as a degree of latitude everywhere.", fix: "Remember latitude spacing is constant (~111km/degree) everywhere, but longitude spacing shrinks with the cosine of latitude, reaching 0km exactly at the poles." },
          { mistake: "Mixing up which coordinate is listed first.", fix: "Standard convention lists latitude first, then longitude (e.g. 40.7°N, 74.0°W) — reversing them silently plots the wrong point, sometimes in a completely different hemisphere." },
          { mistake: "Treating the Prime Meridian as a natural, scientifically determined line like the equator.", fix: "Keep in mind the Prime Meridian's location at Greenwich was a human decision made by international vote in 1884 — the equator, by contrast, is fixed by Earth's actual rotation axis." },
        ]}
      />
      <MisconceptionCallout
        myth="Latitude and longitude lines behave the same way and are spaced the same distance apart."
        reality={<p>They&apos;re fundamentally different kinds of lines. Latitude lines (parallels) never converge and stay a constant roughly 111km apart everywhere on Earth. Longitude lines (meridians) all converge at exactly two points — the North and South Poles — so the real-world distance covered by one degree of longitude shrinks from about 111km at the equator down to 0km at the poles. Treating them as interchangeable leads to real distance-calculation errors, especially at high latitudes.</p>}
      />

      <QuickCheck
        question="Why does a degree of longitude shrink to 0km exactly at the North and South Poles?"
        options={[
          { text: "GPS satellites lose signal accuracy near the poles", correct: false, explanation: "This is a geometric fact about the meridian lines themselves, not a satellite or measurement accuracy issue." },
          { text: "Every meridian (line of longitude) converges to the exact same single point at each pole, so the distance between any two meridians shrinks to zero there", correct: true, explanation: "Correct. All lines of longitude meet at the poles by definition — since every meridian passes through both poles, there's no remaining distance between them at that exact point." },
          { text: "Longitude isn't defined at the poles, so the question doesn't apply", correct: false, explanation: "Longitude is mathematically defined everywhere, including the poles — it's just that at the poles specifically, every longitude value converges to the same physical point." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Distance from a change in latitude"
        fields={[
          { key: "degreesLatitude", label: "Difference in latitude (degrees)", defaultValue: 3, step: 0.1 },
        ]}
        resultLabel="Approximate distance (km)"
        formula="latitudeDegreesToKm"
        formatResult="number"
      />
      <EntryCalculator
        title="Distance from a change in longitude at a given latitude"
        fields={[
          { key: "degreesLongitude", label: "Difference in longitude (degrees)", defaultValue: 10, step: 0.1 },
          { key: "latitudeDegrees", label: "Latitude where you're measuring (degrees)", defaultValue: 60, step: 0.1 },
        ]}
        resultLabel="Approximate distance (km)"
        formula="longitudeDegreesToKmAtLatitude"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Try the longitude calculator above at latitude 0 versus latitude 80 with the same degree difference to see the distance shrink dramatically.",
          "Next time you see a coordinate pair, check which number is latitude (always -90 to 90) and which is longitude (always -180 to 180) before reading it.",
          "Look up your own city's latitude and longitude and estimate how far you are from the equator using the latitude calculator above.",
          "Read the related entry on Time Zones Explained to see how longitude directly determines a location's time zone.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between latitude and longitude?", answer: "Latitude measures angular distance north or south of the equator (0° to 90°); longitude measures angular distance east or west of the Prime Meridian (0° to 180°). Together they specify an exact point on Earth's surface." },
          { question: "How far apart is one degree of latitude in kilometers?", answer: "Roughly 111km, and this stays essentially constant everywhere on Earth, since lines of latitude (parallels) never converge." },
          { question: "Why does longitude distance change depending on where you are?", answer: "Because lines of longitude (meridians) converge at the North and South Poles, the real-world distance covered by one degree of longitude shrinks from about 111km at the equator down to 0km exactly at the poles." },
          { question: "Who decided where the Prime Meridian is?", answer: "Delegates at the 1884 International Meridian Conference voted to set the Prime Meridian at the Royal Observatory in Greenwich, England — a decision based on convenience (most world shipping already used British charts), not a physical or scientific requirement." },
          { question: "Which coordinate comes first, latitude or longitude?", answer: "Latitude is listed first by standard convention, followed by longitude — for example, 40.7°N, 74.0°W for New York City. Reversing the order plots an entirely different, often wildly incorrect, location." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
