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
  title: "Seasons & Earth's Tilt: Why It's Not About Distance From the Sun",
  category: "general-science-facts",
  order: 45,
  subtopic: "earth-science",
  tags: [
    "seasons",
    "earth's tilt",
    "axial tilt",
    "solstice",
    "equinox",
    "earth science",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Earth is actually closest to the Sun in January, during Northern Hemisphere winter. Seasons come from axial tilt changing sunlight angle and day length, not distance.",
  summary: "Seasons are caused by Earth's roughly 23.5° axial tilt, which changes the angle and duration of sunlight each hemisphere receives as Earth orbits the Sun — not by changing distance from the Sun.",
  sources: [
    { label: "NASA Space Place", url: "https://spaceplace.nasa.gov/" },
    { label: "NASA — Global Climate Change", url: "https://climate.nasa.gov/" },
    { label: "Encyclopaedia Britannica", url: "https://www.britannica.com/" },
  ],
  seeAlso: [
    "general-science-facts/weather-and-climate-basics",
    "general-science-facts/heat-and-temperature",
    "general-science-facts/earths-structure-and-plate-tectonics",
    "general-science-facts/water-cycle-and-oceans",
  ],
  glossary: [
    { term: "Axial tilt", definition: "The angle, about 23.5°, between Earth's rotational axis and the plane of its orbit around the Sun — the root cause of the seasons." },
    { term: "Solstice", definition: "The two points in Earth's orbit (around June 21 and December 21) when a hemisphere is tilted most directly toward or away from the Sun, producing the year's longest or shortest day." },
    { term: "Equinox", definition: "The two points in Earth's orbit (around March 20 and September 22) when neither hemisphere is tilted toward or away from the Sun, producing roughly equal day and night length worldwide." },
    { term: "Solar declination", definition: "The angle between the Sun's rays and Earth's equatorial plane, which varies from about -23.5° to +23.5° across the year as Earth orbits while tilted." },
    { term: "Perihelion and aphelion", definition: "Perihelion is the point in Earth's orbit closest to the Sun (early January); aphelion is the farthest point (early July) — the small distance difference between them is not what causes the seasons." },
    { term: "Tropics", definition: "The band of latitude between the Tropic of Cancer (23.5°N) and the Tropic of Capricorn (23.5°S), the only region where the Sun can appear directly overhead at solar noon." },
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
          "Seasons are caused by Earth's roughly 23.5° axial tilt, not by changing distance from the Sun — Earth is actually closest to the Sun (perihelion) in early January, in the middle of Northern Hemisphere winter.",
          "The tilt changes two things through the year for a given hemisphere: the angle sunlight hits the ground (more direct, concentrated sunlight in summer; more slanted, spread-out sunlight in winter) and the number of daylight hours (longer summer days, shorter winter days).",
          "Because the tilt affects each hemisphere oppositely at the same point in Earth's orbit, the Northern and Southern Hemispheres always experience opposite seasons — when it's summer in New York, it's winter in Sydney.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Earth doesn&apos;t spin perfectly upright as it orbits the Sun — it&apos;s tilted on its axis by about 23.5°, like a slightly leaning top. As Earth travels around the Sun over a year, that tilt means the Northern Hemisphere sometimes leans toward the Sun (getting more direct sunlight and longer days — summer) and sometimes leans away (getting more indirect sunlight and shorter days — winter). The Southern Hemisphere experiences the exact opposite at the same time, which is why <TermLink href="/general-science-facts/seasons-and-earths-tilt">seasons</TermLink> are reversed between the two halves of the planet.</div>}
        detailed={<div className="prose-p">The key variable driving seasonal intensity is <TermLink href="/general-science-facts/seasons-and-earths-tilt">solar declination</TermLink> — the angle between the Sun&apos;s direct rays and Earth&apos;s equatorial plane — which swings between about -23.5° and +23.5° across the year as a direct consequence of the fixed <TermLink href="/general-science-facts/seasons-and-earths-tilt">axial tilt</TermLink> combined with Earth&apos;s orbital motion. At the <TermLink href="/general-science-facts/seasons-and-earths-tilt">solstices</TermLink> (around June 21 and December 21), declination reaches its extremes, producing the year&apos;s longest and shortest days for a given hemisphere; at the <TermLink href="/general-science-facts/seasons-and-earths-tilt">equinoxes</TermLink> (around March 20 and September 22), declination crosses zero and day and night length are roughly equal worldwide. Earth&apos;s orbit is only mildly elliptical (eccentricity of about 0.017), and the small resulting difference between <TermLink href="/general-science-facts/seasons-and-earths-tilt">perihelion and aphelion</TermLink> distance has a negligible, secondary effect on seasonal intensity compared to axial tilt — proven directly by the fact that both hemispheres are the same distance from the Sun at any given moment, yet experience opposite seasons.</div>}
      />
      <FootnoteAside>Earth is about 5 million kilometers closer to the Sun at perihelion in early January than at aphelion in early July — a real but relatively small difference (roughly 3% of the average distance) that slightly increases total global solar energy input during Northern Hemisphere winter, the opposite direction you&apos;d expect if distance were the main driver of seasons.</FootnoteAside>

      <p>
      That&apos;s the tilt mechanism in outline. The part worth working through with real numbers is exactly how much that tilt changes the sun&apos;s angle in the sky — because that angle, not distance, is what actually determines how concentrated the incoming solar energy is.
      </p>

      <QuickCheck
        question="Earth's distance from the Sun changes only slightly across the year, and it's actually closest in January. So what physically causes summer and winter?"
        options={[
          { text: "Earth's roughly 23.5° axial tilt, which changes both the angle sunlight strikes a hemisphere and how many daylight hours it receives as Earth orbits the Sun", correct: true, explanation: "Correct. Axial tilt is the dominant driver of seasons — it changes sunlight angle and day length far more significantly than Earth's small orbital distance variation does." },
          { text: "Earth's changing distance from the Sun throughout its orbit", correct: false, explanation: "Distance changes only about 3% across Earth's orbit and, if it were the main driver, both hemispheres would experience the same season at the same time — which they don't." },
          { text: "The Sun's own energy output rising and falling on a yearly cycle", correct: false, explanation: "The Sun's total energy output doesn't meaningfully vary on a yearly cycle tied to Earth's seasons — the changing angle and duration of sunlight reaching a given hemisphere is what varies, not the Sun's output." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Sun angle at 40°N latitude, summer vs. winter (baseline case)</h3>
      <div className="prose-p">
      Using the relationship sun altitude at solar noon = 90° − |latitude − solar declination|: at 40°N latitude on the summer solstice, when declination is about +23.5°, altitude = 90 − |40 − 23.5| = 90 − 16.5 = <strong>73.5°</strong> above the horizon — nearly overhead, delivering concentrated, high-intensity sunlight. On the winter solstice, declination flips to about -23.5°, giving altitude = 90 − |40 − (−23.5)| = 90 − 63.5 = <strong>26.5°</strong> — a low, slanted angle that spreads the same amount of sunlight over a much larger patch of ground, delivering far less energy per square meter, on top of fewer daylight hours to add it up over. That roughly 47° swing in sun angle across the year, at the same location, is the direct, measurable signature of axial tilt at work.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The tropics and the poles — two seasonal edge cases (edge case / variation)</h3>
      <div className="prose-p">
      Within the tropics — the band of latitude between 23.5°N and 23.5°S — the Sun can reach a full 90° altitude (directly overhead) at solar noon on at least one day of the year, something that never happens outside that band; this is precisely why the boundary latitudes are named the Tropic of Cancer and Tropic of Capricorn. At the opposite extreme, near the poles, the tilt effect becomes so pronounced that the Sun can stay continuously above the horizon for weeks or months around the summer solstice (the &quot;midnight sun&quot;) or continuously below it around the winter solstice (polar night) — the same tilt mechanism as everywhere else, just taken to its most extreme geographic expression.
      </div>

      <QuickCheck
        question="Near the North Pole in midsummer, the Sun stays above the horizon for weeks without setting. What causes this 'midnight sun' effect?"
        options={[
          { text: "Earth's axial tilt is severe enough at high latitudes that, around the summer solstice, that hemisphere's polar region never rotates into darkness relative to the Sun", correct: true, explanation: "Correct. The same axial tilt that creates ordinary seasons produces this extreme continuous-daylight effect at high latitudes near the solstice, when a pole is tilted far enough toward the Sun that Earth's rotation never carries it into shadow." },
          { text: "The Sun is unusually close to Earth during that specific time of year", correct: false, explanation: "Earth's distance from the Sun doesn't change dramatically enough, or in the right direction seasonally, to explain this — the effect is entirely a consequence of axial tilt and latitude, not distance." },
          { text: "The North Pole experiences a different length of day than the rest of Earth due to a local atmospheric effect", correct: false, explanation: "This isn't an atmospheric or local effect — it's a direct geometric consequence of Earth's rotation axis being tilted enough that high-latitude regions can remain continuously sunlit or continuously dark near the solstices." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why Australia celebrates Christmas in summer (real-world / applied case)</h3>
      <div className="prose-p">
      In late December, Earth&apos;s axial tilt points the Northern Hemisphere away from the Sun and the Southern Hemisphere toward it — the same orbital position, opposite sunlight exposure for each half of the planet. That&apos;s why Australia, Argentina, and South Africa experience their warmest, longest days right around Christmas, while the Northern Hemisphere experiences its shortest, coldest ones at the very same moment. Nothing about Earth&apos;s distance from the Sun changes between a Northern and Southern Hemisphere location on the same date — both are the same distance from the Sun on any given day — so the opposite seasons are conclusive, direct evidence that tilt, not distance, is the actual mechanism at work.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Earth's tilted axis at four points in its orbit around the Sun"
        type="detail"
        svgSrc="/diagrams/general-science-facts-seasons-and-earths-tilt-orbit-diagram.svg"
        altText="Diagram of Earth's orbit around the Sun shown as an ellipse with Earth drawn at four positions — the June solstice, September equinox, December solstice, and March equinox — each Earth drawn with its rotational axis tilted at a fixed 23.5 degree angle in the same direction in space, with arrows showing which hemisphere is angled toward the Sun and receiving more direct, concentrated sunlight at each position."
      />
      <p>
      The critical detail in this diagram is that Earth&apos;s axis points in the same fixed direction in space at every orbital position — it doesn&apos;t wobble to follow the Sun. That fixed tilt is what makes the Northern Hemisphere angle toward the Sun in June and away from it in December, purely because of where Earth happens to be in its orbit relative to that unchanging axis direction. Trace the two solstice positions and notice they&apos;re roughly the same distance from the Sun — it&apos;s the angle of the tilted axis relative to the Sun&apos;s direction, not the distance, that flips from one solstice to the other.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Believing summer happens because Earth is physically closer to the Sun.", fix: "Earth is actually closest to the Sun in early January, during Northern Hemisphere winter. Seasons are driven by axial tilt changing sunlight angle and day length, not by orbital distance." },
          { mistake: "Assuming every location on Earth experiences four clearly distinct seasons.", fix: "Near the equator, where the Sun's angle stays high year-round, temperature varies little across the year — many tropical regions instead have wet and dry seasons driven by shifting rain belts, not the four-season temperature pattern common at mid-latitudes." },
          { mistake: "Assuming day length is roughly the same everywhere on any given date.", fix: "Day length varies dramatically by latitude — equatorial regions stay close to 12 hours of daylight year-round, while high-latitude regions can swing to 24-hour daylight or 24-hour darkness near the solstices." },
        ]}
      />
      <MisconceptionCallout
        myth="Summer happens because Earth is closer to the Sun, and winter happens because it's farther away."
        reality={<p>Earth&apos;s orbit is only mildly elliptical, and it&apos;s actually closest to the Sun (perihelion, about 147.1 million km) in early January — the middle of Northern Hemisphere winter — and farthest (aphelion, about 152.1 million km) in early July, during Northern Hemisphere summer, according to NASA. The real driver is Earth&apos;s roughly 23.5° axial tilt, which changes the angle sunlight strikes a hemisphere and how many daylight hours it gets. The clearest proof: the Northern and Southern Hemispheres are always the same distance from the Sun at any given moment, yet they experience opposite seasons — a distance-based explanation simply can&apos;t account for that.</p>}
      />

      <QuickCheck
        question="If Earth is actually closest to the Sun in January, why is it winter in the Northern Hemisphere at that exact time?"
        options={[
          { text: "Because seasons are driven by axial tilt, not distance — in January the Northern Hemisphere is tilted away from the Sun, receiving less direct sunlight and shorter days regardless of the slightly closer orbital distance", correct: true, explanation: "Correct. Axial tilt overwhelmingly outweighs the small orbital distance effect — the direction a hemisphere is tilted relative to the Sun determines its season, not how close the whole planet happens to be that month." },
          { text: "Earth isn't actually closest to the Sun in January — that's a common misconception", correct: false, explanation: "Earth genuinely is closest to the Sun (perihelion) in early January, confirmed by NASA orbital data — this fact is real, it just isn't what determines the season." },
          { text: "The Northern Hemisphere's winter is caused by a separate, unrelated atmospheric cooling cycle that happens to coincide with perihelion", correct: false, explanation: "There's no separate coincidental cycle involved — the season is fully explained by axial tilt changing sunlight angle and day length, which is well understood and doesn't require an additional unrelated mechanism." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Calculate the Sun's altitude at solar noon (90° − |latitude − declination|)"
        fields={[
          { key: "latitudeDegrees", label: "Your latitude (degrees, north positive)", defaultValue: 40 },
          { key: "solarDeclinationDegrees", label: "Solar declination (degrees, +23.5 to -23.5 across the year)", defaultValue: 23.5, step: 0.1 },
        ]}
        resultLabel="Sun's altitude at solar noon (degrees above horizon)"
        formula="solarNoonAltitudeDegrees"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Try the calculator above with your own latitude and a declination of -23.5° (winter solstice) versus +23.5° (summer solstice) to see your local sun-angle swing.",
          "Next December or June, message a friend in the opposite hemisphere and compare seasons directly — it's a quick, concrete confirmation that tilt, not distance, drives the pattern.",
          "Notice how much earlier or later sunset happens as the seasons change where you live, and connect it back to changing solar declination.",
          "Read the related entry on Weather & Climate Basics to see how this seasonal solar-energy pattern combines with atmospheric circulation to produce actual weather.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What causes the seasons?", answer: "Earth's roughly 23.5° axial tilt, which changes the angle sunlight strikes a hemisphere and the number of daylight hours it receives as Earth orbits the Sun over a year — not any change in distance from the Sun." },
          { question: "Why is Earth closer to the sun in January if that's winter in the north?", answer: "Because distance isn't what causes seasons — axial tilt is. In January the Northern Hemisphere is tilted away from the Sun regardless of Earth's slightly closer orbital position, so it still receives less direct sunlight and shorter days." },
          { question: "Why are seasons opposite in the Northern and Southern Hemispheres?", answer: "Earth's tilt points in a fixed direction in space, so at any point in the orbit, one hemisphere is angled toward the Sun (summer) while the other is angled away (winter) — and that relationship flips over the course of the year." },
          { question: "What is the summer solstice?", answer: "The point in Earth's orbit, around June 21 for the Northern Hemisphere, when that hemisphere is tilted most directly toward the Sun, producing the year's longest day and highest sun angle there." },
          { question: "Do the tropics have seasons?", answer: "The tropics have much smaller temperature swings across the year than higher latitudes, since the Sun stays at a high angle year-round there. Many tropical regions instead experience wet and dry seasons, driven by the seasonal shifting of major rain belts rather than temperature." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
