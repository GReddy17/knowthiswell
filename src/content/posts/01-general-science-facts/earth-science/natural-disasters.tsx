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
  title: "Natural Disasters: The Real Mechanics Behind Earthquakes, Storms & Floods",
  category: "general-science-facts",
  order: 44,
  subtopic: "earth-science",
  tags: [
    "natural disasters",
    "earthquakes",
    "hurricanes",
    "tsunamis",
    "volcanoes",
    "earth science",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Earthquake magnitude is logarithmic, hurricanes need warm water and spin from the Coriolis effect, and tsunamis have nothing to do with tides — the real mechanics, explained.",
  summary: "Natural disasters — earthquakes, volcanic eruptions, hurricanes, floods, and tsunamis — each have a specific, well-understood physical mechanism that determines where and how they occur.",
  sources: [
    { label: "USGS — Earthquake Hazards Program", url: "https://earthquake.usgs.gov/" },
    { label: "NOAA — National Hurricane Center", url: "https://www.nhc.noaa.gov/" },
    { label: "USGS — Volcano Hazards Program", url: "https://volcanoes.usgs.gov/" },
    { label: "FEMA", url: "https://www.fema.gov/" },
  ],
  seeAlso: [
    "general-science-facts/earths-structure-and-plate-tectonics",
    "general-science-facts/weather-and-climate-basics",
    "general-science-facts/water-cycle-and-oceans",
    "general-science-facts/pressure",
  ],
  glossary: [
    { term: "Magnitude", definition: "A single number representing the total energy released at an earthquake's source, measured on a logarithmic scale." },
    { term: "Epicenter", definition: "The point on Earth's surface directly above where an earthquake originates underground (the focus or hypocenter)." },
    { term: "Storm surge", definition: "An abnormal rise of ocean water pushed onshore by a storm's winds and low pressure, often the deadliest hazard from a hurricane." },
    { term: "Tsunami", definition: "A series of large ocean waves caused by the sudden displacement of a large volume of water, most often from an undersea earthquake, landslide, or volcanic eruption." },
    { term: "Fault", definition: "A fracture in Earth's crust along which rock on either side has moved relative to the other, the site where most earthquakes occur." },
    { term: "Coriolis effect", definition: "The apparent deflection of moving air and water caused by Earth's rotation, which curves storm systems and is essential to hurricane formation." },
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
          "Earthquake magnitude is logarithmic, not linear — each whole-number increase represents roughly 31.6 times more energy released, so a magnitude 7 earthquake releases about 1,000 times more energy than a magnitude 5, not just '2 more' units of shaking.",
          "Hurricanes require a specific set of conditions to form — ocean water at least about 26.5°C (80°F), low wind shear, and enough Coriolis effect from Earth's rotation to start the storm spinning — which is exactly why they almost never form within roughly 5° latitude of the equator, despite that being some of the warmest water on Earth.",
          "Tsunamis are caused by the sudden displacement of a large volume of water — usually an undersea earthquake, landslide, or volcanic eruption — and are physically unrelated to ocean tides, despite the older nickname 'tidal wave.'",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Most natural disasters aren&apos;t random — each one has a specific physical cause. Earthquakes happen when built-up stress along a crack in Earth&apos;s crust (a fault) suddenly releases. Hurricanes form when warm ocean water fuels a spinning storm system. Volcanic eruptions happen when pressurized magma finds a path to the surface. Floods happen when more water arrives in an area than the ground or rivers can absorb or carry away. Knowing the mechanism behind each one is what lets scientists forecast, track, and issue warnings for them well before — or, in an earthquake&apos;s case, in the seconds immediately after — they strike.</div>}
        detailed={<div className="prose-p">Earthquake <TermLink href="/general-science-facts/natural-disasters">magnitude</TermLink> is measured on a logarithmic scale (the modern standard is the moment magnitude scale), meaning each whole-number increase corresponds to roughly a 31.6-fold increase in released energy — a difference the USGS quantifies precisely because it&apos;s central to hazard assessment. A quake&apos;s <TermLink href="/general-science-facts/natural-disasters">epicenter</TermLink> is the surface point directly above where rupture began along a <TermLink href="/general-science-facts/natural-disasters">fault</TermLink>. Hurricanes depend on the <TermLink href="/general-science-facts/natural-disasters">Coriolis effect</TermLink>, the rotational deflection caused by Earth spinning, to organize their initial rotation — this effect is essentially zero at the equator and strengthens with latitude, which is why storms need to form several degrees away from it. A <TermLink href="/general-science-facts/natural-disasters">storm surge</TermLink>, the storm-driven rise in sea level pushed onshore by wind and low pressure, is typically the deadliest single hazard in a hurricane, historically responsible for the majority of hurricane-related deaths in the United States according to NOAA data. A <TermLink href="/general-science-facts/natural-disasters">tsunami</TermLink> is generated not by wind or tides at all, but by a sudden, large-scale displacement of water — most commonly from an undersea earthquake&apos;s vertical fault movement, and less often from submarine landslides or volcanic eruptions.</div>}
      />
      <FootnoteAside>The 2011 Tohoku earthquake off Japan, magnitude 9.0-9.1, released roughly as much energy as hundreds of magnitude-7 earthquakes combined — a direct consequence of the logarithmic magnitude scale, where every step up represents a dramatically larger jump in energy than the number alone suggests.</FootnoteAside>

      <p>
      That&apos;s the outline of what causes each hazard. The parts worth understanding in more depth are exactly how much stronger a &quot;bigger&quot; earthquake really is, and why some disasters have geographic restrictions that feel counterintuitive at first.
      </p>

      <QuickCheck
        question="A magnitude 6 earthquake and a magnitude 8 earthquake are described in the news. How much more energy does the magnitude 8 quake actually release?"
        options={[
          { text: "Roughly 1,000 times more energy, because the magnitude scale is logarithmic and each whole-number step represents about a 31.6-fold increase in energy", correct: true, explanation: "Correct. Two magnitude steps means roughly 31.6 × 31.6 ≈ 1,000 times more energy — the scale is logarithmic, so small number differences represent enormous real differences in released energy." },
          { text: "About 33% more energy, matching the 6-to-8 numerical difference proportionally", correct: false, explanation: "This treats magnitude like a linear scale, which it isn't. A 2-point difference in magnitude corresponds to roughly 1,000 times more energy, far beyond a simple proportional difference." },
          { text: "The same amount of energy — magnitude only measures how far the shaking is felt, not the energy released", correct: false, explanation: "Magnitude specifically measures energy released at the earthquake's source, not how far shaking is felt (that's closer to what 'intensity' measures) — a higher magnitude does mean genuinely more released energy." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Comparing energy release between two earthquake magnitudes (baseline case)</h3>
      <div className="prose-p">
      Using the relationship energy ratio = 10^(1.5 × magnitude difference), a magnitude 5.0 earthquake compared to a magnitude 7.0 earthquake gives 10^(1.5 × 2) = 10^3 = 1,000 times more energy released by the magnitude 7.0 event. This is why earthquake damage doesn&apos;t scale gently with the reported number — the jump from a widely-felt but often low-damage magnitude 5 to a genuinely destructive magnitude 7 represents an enormous real difference in the energy being released underground, even though the two numbers look close together on a printed scale.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why hurricanes rarely form right at the equator (edge case / variation)</h3>
      <div className="prose-p">
      The equator has some of the warmest ocean water on Earth — exactly the fuel hurricanes need — yet hurricanes essentially never form within about 5° latitude of it. The missing ingredient is the Coriolis effect, the rotational deflection produced by Earth spinning on its axis. That deflection is strongest at the poles and drops to essentially zero right at the equator, because the effect depends on the local angle between Earth&apos;s rotation axis and the surface. Without at least some Coriolis deflection, converging air can&apos;t be organized into the rotating, self-sustaining structure that defines a hurricane — thunderstorms can still form over equatorial warm water, but they won&apos;t spin up into a cyclone. This is a genuine physical limit, not a coincidence of history, and it&apos;s why NOAA&apos;s hurricane formation maps show a consistent gap in activity right along the equatorial band even during peak season.
      </div>

      <QuickCheck
        question="The equator has some of the warmest ocean water on the planet, yet hurricanes almost never form there. What's missing?"
        options={[
          { text: "The Coriolis effect, Earth's rotational deflection needed to organize converging air into a spinning storm, is essentially zero at the equator and only strengthens moving toward the poles", correct: true, explanation: "Correct. Warm water alone isn't enough — hurricanes need the Coriolis effect to start rotating, and that effect drops to nearly zero right at the equator, which is why storms form several degrees of latitude away from it instead." },
          { text: "Ocean water at the equator is actually too warm for hurricanes to form", correct: false, explanation: "There's no upper temperature limit that prevents hurricane formation — warm water (above roughly 26.5°C) is a requirement, not an obstacle, at any latitude where hurricanes do form." },
          { text: "Wind shear is always too strong at the equator for a hurricane to organize", correct: false, explanation: "Wind shear varies by location and season and isn't a fixed equatorial barrier — the specific, consistent missing ingredient right at the equator is the near-zero Coriolis effect, not wind shear." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How earthquake early warning systems buy precious seconds (real-world / applied case)</h3>
      <div className="prose-p">
      An earthquake releases two main types of seismic waves that travel at different speeds: faster-moving P-waves (roughly 6-8 km/s) arrive first but cause relatively mild shaking, while slower S-waves and surface waves (roughly half the speed of P-waves) arrive later and cause most of the destructive shaking. Earthquake early warning systems, like the USGS&apos;s ShakeAlert network along the U.S. West Coast, exploit this speed gap directly: sensors detect the fast, low-damage P-waves near the epicenter and immediately calculate the estimated magnitude and location, then transmit a warning electronically — which travels at the speed of light — to more distant areas before their slower, more damaging S-waves and surface waves arrive. Depending on distance from the epicenter, this can provide anywhere from a few seconds to over a minute of advance warning, enough time to automatically slow trains, open elevator doors, or simply let people take cover.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Comparing the trigger conditions behind four major natural disaster types"
        type="comparison"
        svgSrc="/diagrams/general-science-facts-natural-disasters-hazard-comparison.svg"
        altText="Comparison chart with four columns labeled earthquake, hurricane, volcanic eruption, and tsunami, each showing its primary trigger condition (built-up fault stress released suddenly; warm ocean water above 26.5 degrees C plus Coriolis rotation; pressurized magma finding a path to the surface; sudden large-scale displacement of ocean water) and its primary warning method (seismic P-wave detection; satellite and aircraft ocean and atmosphere monitoring; ground deformation and gas emission monitoring; seismic detection plus ocean buoy networks)."
      />
      <p>
      Each column in the chart starts from a different physical trigger, which is exactly why the warning systems for each hazard look so different: earthquakes are detected using the speed gap between seismic wave types, hurricanes are tracked days in advance using satellites watching ocean temperature and storm structure, volcanic eruptions are anticipated by monitoring ground swelling and gas emissions that build up before magma reaches the surface, and tsunamis are detected using a combination of the triggering earthquake&apos;s seismic signal and open-ocean pressure buoys that sense the passing wave.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating earthquake 'magnitude' and 'intensity' as the same measurement.", fix: "Magnitude is a single number describing energy released at the source. Intensity describes how strongly shaking is felt at a specific location, using a scale like the Modified Mercalli scale, and varies with distance from the epicenter and local ground conditions." },
          { mistake: "Assuming tsunamis are caused by tides, based on the older term 'tidal wave.'", fix: "Tsunamis are caused by sudden, large-scale water displacement — typically from an undersea earthquake, landslide, or volcanic eruption — and have no physical relationship to the gravitational tidal forces that cause normal ocean tides." },
          { mistake: "Assuming a location is safe from a given disaster just because it hasn't experienced one in living memory.", fix: "Recurrence intervals for major earthquakes and floods can span centuries — far longer than personal or even institutional memory — so an area's historical quiet period doesn't necessarily reflect its long-term geological risk." },
        ]}
      />
      <MisconceptionCallout
        myth="Earthquakes only happen exactly along the plate boundary lines you'd see drawn on a world map."
        reality={<p>Most major earthquakes do cluster along plate boundaries, but real, well-documented exceptions occur well within plate interiors. The New Madrid Seismic Zone in the central United States, far from any modern plate boundary, produced a sequence of severe earthquakes in 1811-1812 — among the largest in recorded U.S. history — caused by ancient, buried zones of crustal weakness reactivated by regional stress, according to the USGS. These intraplate earthquakes are rarer than boundary earthquakes, but they are real, and building codes in regions like the central and eastern U.S. account for that risk even without a nearby boundary on the map.</p>}
      />

      <QuickCheck
        question="If earthquakes only happened exactly at visible plate boundaries, how do scientists explain the major 1811-1812 earthquakes in the central United States, far from any boundary?"
        options={[
          { text: "Intraplate earthquakes are a documented, if less common, category caused by ancient buried fault zones within a plate's interior being reactivated by regional stress — plate boundaries explain most, but not all, seismic activity", correct: true, explanation: "Correct. The New Madrid Seismic Zone is a real, USGS-documented example of major earthquakes occurring well within a plate interior, driven by ancient crustal weaknesses rather than a nearby plate boundary." },
          { text: "The historical accounts of those earthquakes are likely exaggerated or inaccurate", correct: false, explanation: "The 1811-1812 New Madrid earthquakes are well documented through historical accounts and geological evidence — the inaccurate part is the assumption that earthquakes can only happen at plate boundaries." },
          { text: "A temporary, undetected plate boundary must have existed there at the time", correct: false, explanation: "No plate boundary formed there — this was intraplate seismic activity along a reactivated ancient fault, a recognized and distinct category from boundary-driven earthquakes." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Compare energy released between two earthquake magnitudes"
        fields={[
          { key: "magnitudeA", label: "Magnitude A (smaller)", defaultValue: 5, step: 0.1 },
          { key: "magnitudeB", label: "Magnitude B (larger)", defaultValue: 7, step: 0.1 },
        ]}
        resultLabel="Times more energy released by magnitude B vs. A"
        formula="earthquakeEnergyRatio"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Try the calculator above comparing a magnitude you've heard in the news to a smaller one, to see just how much the logarithmic scale changes the real energy difference.",
          "Look up whether your region sits in a recognized earthquake, hurricane, flood, or volcanic hazard zone, even if you haven't personally experienced an event there.",
          "Next time a hurricane is in the news, notice its latitude and connect it to the Coriolis effect requirement for storm formation.",
          "Read the related entry on Earth's Structure & Plate Tectonics to see the full mechanism behind fault formation and plate boundary types.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What causes earthquakes?", answer: "Most earthquakes occur when stress that has built up along a fault in Earth's crust is suddenly released, causing the rock on either side to slip and generating seismic waves that radiate outward." },
          { question: "How is earthquake magnitude measured?", answer: "Using the moment magnitude scale, a logarithmic scale where each whole-number increase represents roughly 31.6 times more energy released at the earthquake's source — meaning a two-point difference represents roughly 1,000 times more energy." },
          { question: "What's the difference between a hurricane, cyclone, and typhoon?", answer: "They're the same weather phenomenon — a rotating tropical storm system — just named differently by region: hurricane in the Atlantic and Northeast Pacific, typhoon in the Northwest Pacific, and cyclone in the South Pacific and Indian Ocean." },
          { question: "Why don't hurricanes form at the equator?", answer: "Hurricanes need the Coriolis effect, Earth's rotational deflection, to organize their spin, and that effect is essentially zero right at the equator, strengthening only with distance from it — so storms form several degrees of latitude away instead." },
          { question: "What causes tsunamis?", answer: "Tsunamis are caused by the sudden, large-scale displacement of ocean water, most commonly from an undersea earthquake's vertical fault movement, and less often from submarine landslides or volcanic eruptions — they are unrelated to tides despite the older name 'tidal wave.'" },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
