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
  title: "The Solar System & Planets: Order, Sizes, and What Makes Each One Different",
  category: "general-science-facts",
  order: 48,
  subtopic: "space-and-astronomy",
  tags: [
    "solar system",
    "planets",
    "astronomy",
    "Kepler's third law",
    "asteroid belt",
    "gas giants",
    "terrestrial planets",
  ],
  date: "2026-08-16",
  updated: "2026-08-19",
  lastReviewed: "2026-08-19",
  excerpt: "The 8 planets in order, why the inner four are rocky and the outer four are gas or ice giants, and how to calculate weight on another planet.",
  summary: "The solar system is the Sun plus everything gravitationally bound to it — 8 planets, their moons, dwarf planets, asteroids, and comets — with the Sun alone holding about 99.8% of the total mass.",
  sources: [
    { label: "NASA Solar System Exploration — Our Solar System", url: "https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/" },
    { label: "NASA JPL — Planetary Fact Sheets", url: "https://ssd.jpl.nasa.gov/planets/phys_par.html" },
    { label: "NASA Solar System Exploration — Asteroids", url: "https://solarsystem.nasa.gov/asteroids-comets-and-meteors/asteroids/overview/" },
    { label: "Encyclopaedia Britannica — Solar System", url: "https://www.britannica.com/science/solar-system" },
  ],
  seeAlso: [
    "general-science-facts/space-stars-and-the-universe",
    "general-science-facts/space-exploration-and-technology",
    "general-science-facts/forces-and-motion",
    "general-science-facts/density-and-buoyancy",
  ],
  glossary: [
    { term: "Astronomical unit (AU)", definition: "The average distance from Earth to the Sun, about 149.6 million kilometers — used as a convenient yardstick for solar system distances." },
    { term: "Terrestrial planet", definition: "A small, dense, rocky planet with a solid surface — Mercury, Venus, Earth, and Mars." },
    { term: "Gas giant", definition: "A large planet made mostly of hydrogen and helium with no solid surface — Jupiter and Saturn." },
    { term: "Ice giant", definition: "A large planet made mostly of heavier volatile compounds like water, ammonia, and methane surrounding a rocky core — Uranus and Neptune." },
    { term: "Semi-major axis", definition: "Half the longest diameter of an elliptical orbit; commonly used as a planet's average distance from the Sun." },
    { term: "Orbital period", definition: "The time a planet takes to complete one full orbit around the Sun." },
    { term: "Surface gravity", definition: "The gravitational acceleration experienced at a planet's surface (or, for gas giants, at a defined reference altitude), often expressed relative to Earth's." },
    { term: "Dwarf planet", definition: "A body that orbits the Sun and is round from its own gravity but has not cleared other objects from its orbital path — Pluto is the best-known example." },
    { term: "Asteroid belt", definition: "A region between Mars and Jupiter, roughly 2.2 to 3.2 AU from the Sun, containing millions of rocky bodies left over from the solar system's formation." },
    { term: "Runaway greenhouse effect", definition: "A self-reinforcing warming process where a thick atmosphere traps so much heat that surface temperature climbs far beyond what distance from the Sun alone would predict — the reason Venus, not Mercury, is the solar system's hottest planet." },
    { term: "Retrograde rotation", definition: "Spinning in the opposite direction to most other bodies in the solar system (east to west instead of west to east) — Venus and Uranus both do this, likely from ancient collisions." },
    { term: "Axial tilt", definition: "The angle between a planet's spin axis and its orbital plane; Earth's 23.4° tilt drives our seasons, while Uranus's extreme 98° tilt means it essentially orbits on its side." },
    { term: "Galilean moons", definition: "Jupiter's four largest moons — Io, Europa, Ganymede, and Callisto — first observed by Galileo in 1610, the earliest evidence that not everything in the sky orbits Earth." },
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
          "The solar system has 8 official planets since 2006 — the inner four (Mercury, Venus, Earth, Mars) are small, dense, and rocky; the outer four (Jupiter, Saturn, Uranus, Neptune) are large, low-density gas or ice giants with no solid surface.",
          "The Sun holds about 99.8% of the entire solar system's mass — every planet, moon, asteroid, and comet combined makes up roughly the remaining 0.2%.",
          "A planet's distance from the Sun and its orbital period are mathematically linked by Kepler's third law: farther planets don't just travel a longer path, they also move slower, so their 'year' grows much faster than their distance does.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/general-science-facts/solar-system-and-planets">solar system</TermLink> is the Sun and everything that orbits it: 8 planets, their moons, dwarf planets like Pluto, and countless smaller rocky and icy bodies. Going outward from the Sun, the order is Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. The first four are small and rocky with solid ground you could (in theory) stand on. The last four are enormous balls of gas and ice with no solid surface at all — Jupiter alone is more than 1,300 times Earth&apos;s volume.</div>}
        detailed={<div className="prose-p">The split between inner and outer planets isn&apos;t a coincidence — it comes directly from how the solar system formed. Close to the young Sun, only rock and metal could condense out of the swirling disk of gas and dust, because lighter compounds were vaporized by solar heat; that&apos;s why <TermLink href="/general-science-facts/solar-system-and-planets">terrestrial planets</TermLink> are small, dense, and rocky. Farther out, past what&apos;s called the &quot;frost line,&quot; ices and gases could condense too, letting <TermLink href="/general-science-facts/solar-system-and-planets">gas giants</TermLink> and <TermLink href="/general-science-facts/solar-system-and-planets">ice giants</TermLink> accumulate massive hydrogen-and-helium (Jupiter, Saturn) or water-ammonia-methane (Uranus, Neptune) envelopes around a smaller rocky core. Distances are measured in <TermLink href="/general-science-facts/solar-system-and-planets">astronomical units</TermLink> (AU) — Earth sits at 1 AU by definition, Mars at roughly 1.52 AU, and Neptune at roughly 30.1 AU. Orbital motion follows Kepler&apos;s third law, T² ∝ a³, where T is orbital period in years and a is the <TermLink href="/general-science-facts/solar-system-and-planets">semi-major axis</TermLink> in AU — for objects orbiting the Sun this simplifies to T = a^1.5, letting you calculate a planet&apos;s year length from its distance alone.</div>}
      />
      <FootnoteAside>Pluto wasn&apos;t demoted for being too small — Eris, a dwarf planet discovered in 2005 out in the Kuiper Belt, is close to Pluto&apos;s size and even more massive. Its discovery is part of what forced astronomers to write a formal definition of &quot;planet&quot; in 2006, one that Pluto and Eris both fail because neither has gravitationally cleared its orbital neighborhood of other debris.</FootnoteAside>

      <p>
      That formation story explains why the planets look the way they do. The next useful step is putting real numbers on it — distance, orbital period, and gravity — because those numbers are what let you calculate things like a planet&apos;s year length or how much you&apos;d weigh standing on it.
      </p>

      <QuickCheck
        question="Why are Mercury, Venus, Earth, and Mars small and rocky, while Jupiter, Saturn, Uranus, and Neptune are enormous gas or ice giants?"
        options={[
          { text: "The inner planets formed later and didn't have time to grow as large", correct: false, explanation: "Formation timing isn't the driver here — all the planets formed from the same original disk around the same young Sun, over a broadly similar timescale." },
          { text: "Close to the young Sun only rock and metal could condense, since lighter gases and ices were vaporized by solar heat; farther out, past the frost line, gases and ices could also condense and accumulate", correct: true, explanation: "Correct. This is why the inner solar system is rocky and dense while the outer solar system is dominated by massive gas and ice envelopes." },
          { text: "Gravity from the Sun is too weak far away to hold onto rocky material, so only gas survives out there", correct: false, explanation: "The Sun's gravity holds onto all the planets regardless of distance — the split is about what materials could physically condense at different distances from the Sun's heat, not about gravitational strength." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: How much would you weigh on Mars? (baseline case)</h3>
      <div className="prose-p">
      Mars has a surface gravity about 0.38 times Earth&apos;s — meaning its gravitational pull is roughly 38% as strong. A person who weighs 70 kg on Earth would weigh 70 × 0.38 = <strong>26.6 kg</strong> on Mars, even though their actual mass (the amount of matter in their body) hasn&apos;t changed at all. Weight is a force that depends on local gravity; mass is a fixed property of the object. This is why an astronaut who could barely lift a heavy toolbox on Earth could hoist it with far less effort on the Martian surface.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Weight on Jupiter — a planet with no solid surface (edge case / variation)</h3>
      <div className="prose-p">
      Jupiter&apos;s surface gravity is about 2.53 times Earth&apos;s — the same 70 kg person would weigh 70 × 2.53 ≈ <strong>177 kg</strong> there. But &quot;surface&quot; is doing unusual work in that sentence: Jupiter is a gas giant with no solid ground to stand on at all. Its atmosphere just gets denser and hotter with depth until it blends into a fluid metallic hydrogen interior. Planetary scientists define Jupiter&apos;s &quot;surface gravity&quot; at the altitude where atmospheric pressure equals 1 bar (roughly Earth&apos;s sea-level pressure) — a reference point in the clouds, not a place anyone could stand. It&apos;s also a genuine edge case worth noting that Saturn, despite being even larger than Jupiter, has a lower average density than water (about 0.687 g/cm³ versus water&apos;s 1.0 g/cm³) — a Saturn-sized bathtub could theoretically float it.
      </div>

      <QuickCheck
        question="Jupiter is often described as having a 'surface gravity' 2.53 times Earth's — but what does 'surface' actually mean for Jupiter?"
        options={[
          { text: "The solid rocky crust at the base of Jupiter's atmosphere", correct: false, explanation: "Jupiter has no solid crust at all — it's a gas giant whose atmosphere thickens gradually into a fluid interior with no defined solid boundary." },
          { text: "A reference altitude in Jupiter's clouds where atmospheric pressure equals 1 bar, roughly Earth's sea-level pressure — not an actual solid surface", correct: true, explanation: "Correct. Since Jupiter has no solid ground, scientists use this pressure-based reference altitude to define a consistent 'surface' for measurements like gravity." },
          { text: "The outermost visible cloud layer as seen through a telescope from Earth", correct: false, explanation: "The visible cloud tops aren't the reference point used for gravity measurements — the defined reference is a specific atmospheric pressure level, the 1-bar altitude." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Using Kepler&apos;s third law to find Mars&apos;s orbital period (real-world / applied case)</h3>
      <div className="prose-p">
      Mars orbits the Sun at a semi-major axis of about 1.52 AU. Kepler&apos;s third law, simplified for objects orbiting the Sun, states T = a^1.5, where T is the orbital period in Earth years and a is the distance in AU. Plugging in Mars: T = 1.52^1.5 ≈ <strong>1.87 years</strong> — which matches the real, independently measured value of about 687 Earth days (≈1.88 years) almost exactly. This same relationship is what let 17th-century astronomers predict planetary positions accurately centuries before anyone understood <em>why</em> gravity produced that pattern — Newton wouldn&apos;t explain the underlying physics until decades after Kepler published the law.
      </div>

      <QuickCheck
        question="Mars (1.52 AU from the Sun) takes about 1.87 Earth years to complete one orbit — roughly 1.88 times Earth's orbital period. Why isn't the ratio closer to 1.52, matching the distance ratio?"
        options={[
          { text: "Kepler's third law relates period to distance non-linearly (T equals distance to the 1.5 power), so farther planets take proportionally even longer to orbit than their distance alone suggests", correct: true, explanation: "Correct. T = a^1.5 means orbital period grows faster than distance — Mars is 1.52 times farther out but takes 1.87 times as long to orbit, and the gap widens even more for planets farther from the Sun." },
          { text: "Mars's orbit is measured in a different unit than Earth's, making direct comparison invalid", correct: false, explanation: "Both are measured consistently in AU for distance and Earth years for period — the mismatch between the ratios is a real physical effect of Kepler's third law, not a units problem." },
          { text: "Mars is spinning in the opposite direction, which slows its orbital motion around the Sun", correct: false, explanation: "A planet's own spin direction doesn't affect its orbital period around the Sun — orbital period depends on distance from the Sun and the Sun's gravity, not the planet's rotation." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The solar system: planet order, relative sizes, and inner vs. outer split"
        type="detail"
        svgSrc="/diagrams/general-science-facts-solar-system-and-planets-orbit-order.svg"
        altText="A diagram of the Sun at the center with the eight planets arranged in order of increasing distance — Mercury, Venus, Earth, Mars, then the asteroid belt, then Jupiter, Saturn, Uranus, Neptune — with the four inner planets drawn small and rocky-colored and the four outer planets drawn much larger with banded gas-giant coloring, and approximate distances in astronomical units labeled beneath each planet."
      />
      <p>
      Notice the jump in scale between Mars and Jupiter — that gap is the asteroid belt, and it also marks roughly where the &quot;frost line&quot; sat during the solar system&apos;s formation. Everything to the left of that gap is small and rocky; everything to the right is large and gas- or ice-dominated. The distances aren&apos;t evenly spaced either: each planet sits roughly (though not exactly) further from the Sun than a simple multiple of the one before it, which is part of why outer planets have such dramatically longer years.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The eight planets, one by one</h2>
      <p>
      Category and formation physics explain the general pattern, but each planet also has its own specific, well-documented quirks — the kind of facts that actually distinguish &quot;Saturn&quot; from &quot;a gas giant&quot; in general.
      </p>
      <div className="prose-p">
      <strong>Mercury</strong> is the smallest planet and the fastest orbiter (an 88-day year), but its most extreme trait is temperature swing: with almost no atmosphere to trap or spread heat, its sunlit side reaches roughly 430°C while the night side drops to about -180°C — a wider single-planet temperature range than anywhere else in the solar system.
      </div>
      <div className="prose-p">
      <strong>Venus</strong>, not Mercury, is the solar system&apos;s hottest planet — surface temperature averages around 465°C, hot enough to melt lead — because its thick carbon dioxide atmosphere traps heat through a <TermLink href="/general-science-facts/solar-system-and-planets">runaway greenhouse effect</TermLink> far more powerful than distance from the Sun alone would produce. Venus also spins backward in <TermLink href="/general-science-facts/solar-system-and-planets">retrograde rotation</TermLink>, and does so so slowly that a single Venusian day (243 Earth days) is longer than its entire year (225 Earth days).
      </div>
      <div className="prose-p">
      <strong>Earth</strong> is the only known planet with stable liquid water on its surface and the only one confirmed to host life, both of which trace back to sitting inside the Sun&apos;s &quot;habitable zone&quot; and having a molten iron core that generates a protective magnetic field, deflecting most solar wind that would otherwise strip away the atmosphere over time (the likely fate of Mars, which lost its own magnetic field billions of years ago).
      </div>
      <div className="prose-p">
      <strong>Mars</strong> gets its red color from iron oxide — literally rust — coating its dusty surface. It carries polar ice caps of frozen water and carbon dioxide, hosts the largest known volcano in the solar system (Olympus Mons, roughly 2.5 times the height of Mount Everest), and shows dry riverbeds and mineral deposits that only form in flowing water — strong evidence Mars once had a thicker atmosphere and liquid water on its surface, before losing both.
      </div>
      <div className="prose-p">
      <strong>Jupiter</strong>, the largest planet, is dominated by the <TermLink href="/general-science-facts/solar-system-and-planets">Great Red Spot</TermLink> — a storm wider than Earth that has been observed continuously for at least 190 years. Jupiter&apos;s powerful magnetic field and more than 90 known moons include the four <TermLink href="/general-science-facts/solar-system-and-planets">Galilean moons</TermLink> (Io, Europa, Ganymede, Callisto), one of which, Europa, is considered a leading candidate for a subsurface liquid-water ocean elsewhere in the solar system.
      </div>
      <div className="prose-p">
      <strong>Saturn</strong> is best known for its ring system — billions of ice and rock particles, most no bigger than a house, spread into a disk so thin relative to its width that it would be nearly invisible edge-on. Saturn is also the only planet in the solar system less dense than water (about 0.687 g/cm³): a Saturn-sized bathtub could, in principle, float it.
      </div>
      <div className="prose-p">
      <strong>Uranus</strong> has an <TermLink href="/general-science-facts/solar-system-and-planets">axial tilt</TermLink> of roughly 98°, meaning it essentially orbits the Sun on its side, likely the result of a massive ancient collision — this produces extreme, decades-long seasons where one pole faces the Sun continuously while the other sits in darkness. Its pale blue-green color comes from methane in its atmosphere absorbing red light and reflecting blue-green back.
      </div>
      <div className="prose-p">
      <strong>Neptune</strong>, the outermost planet, has the strongest sustained winds ever measured in the solar system — gusts recorded up to roughly 2,100 km/h. It&apos;s also the only planet discovered through mathematics before anyone saw it: 19th-century astronomers noticed Uranus&apos;s orbit had unexplained irregularities, calculated where an unseen planet&apos;s gravity would have to be to cause them, and pointed a telescope at that exact predicted spot in 1846 — Neptune was there.
      </div>

      <MisconceptionCallout
        myth="Mercury must be the hottest planet, since it's closest to the Sun."
        reality={<p>Venus is hotter — averaging around 465°C versus Mercury&apos;s daytime peak of about 430°C — despite orbiting nearly twice as far from the Sun. Mercury has almost no atmosphere to trap heat, so its dayside gets scorching but its nightside plunges to about -180°C. Venus&apos;s thick carbon dioxide atmosphere traps heat so effectively through a runaway greenhouse effect that its surface stays blazing hot around the clock, on both the day and night side, with barely any temperature swing at all.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking Pluto was removed from the solar system entirely when it 'stopped being a planet.'", fix: "Pluto is still very much part of the solar system — it was reclassified as a dwarf planet in 2006 because it hasn't gravitationally cleared its orbital neighborhood, not because it was ejected or disproven to exist." },
          { mistake: "Assuming a planet's weight and mass are the same thing, and that weight is a fixed property of an object.", fix: "Mass (amount of matter) stays the same everywhere; weight (a force) changes with local gravity — the same person has one mass but a different weight on every planet." },
          { mistake: "Picturing the asteroid belt as densely packed rocks you'd have to dodge, like in movie spaceship scenes.", fix: "The asteroid belt is mostly empty space — the average distance between known asteroids is roughly a million kilometers, which is why multiple spacecraft have crossed it without any special maneuvering." },
        ]}
      />
      <MisconceptionCallout
        myth="The asteroid belt is so densely packed with rocks that a spacecraft flying through it has to dodge collisions constantly, the way it's often shown in movies."
        reality={<p>The asteroid belt, sitting roughly between Mars and Jupiter, does contain millions of rocky bodies — but they&apos;re spread across a vast volume of space. The average distance between known asteroids is on the order of a million kilometers, far enough apart that several NASA spacecraft, including Pioneer 10, Voyager 1 and 2, and New Horizons, have flown straight through the belt without any evasive maneuvers or even a close encounter with an asteroid. The total mass of everything in the belt combined is only about 3% of the Moon&apos;s mass, with roughly a third of that concentrated in the dwarf planet Ceres alone.</p>}
      />

      <QuickCheck
        question="Several NASA spacecraft have flown straight through the asteroid belt on their way to the outer planets without hitting anything or needing to dodge debris. Why is this possible?"
        options={[
          { text: "NASA plots a precise gap-free corridor through the belt where no asteroids exist", correct: false, explanation: "There's no special empty corridor being threaded — the belt is simply so sparse overall that a straight-line path through almost any part of it has an extremely low chance of a close encounter." },
          { text: "The asteroid belt is spread across a vast volume of space, with average distances between asteroids on the order of a million kilometers, so a spacecraft flying through has an extremely low chance of a close encounter", correct: true, explanation: "Correct. Despite containing millions of objects, the belt occupies an enormous volume, making it far emptier than science-fiction depictions suggest." },
          { text: "Spacecraft shields deflect small asteroids on contact, so collisions simply don't cause damage", correct: false, explanation: "No such deflective shielding exists on these spacecraft — the real reason is that the belt is sparse enough that meaningful collisions are extremely unlikely in the first place." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Weight on another planet (from Earth weight and surface gravity ratio)"
        fields={[
          { key: "weightOnEarthKg", label: "Your weight on Earth (kg)", defaultValue: 70 },
          { key: "surfaceGravityRatio", label: "Other planet's surface gravity (× Earth's, e.g. Mars = 0.38)", defaultValue: 0.38, step: 0.01 },
        ]}
        resultLabel="Approximate weight there (kg)"
        formula="weightOnOtherPlanet"
        formatResult="number"
      />
      <EntryCalculator
        title="Orbital period from distance (Kepler's third law, T = a^1.5)"
        fields={[
          { key: "semiMajorAxisAU", label: "Distance from the Sun (astronomical units)", defaultValue: 1.52, step: 0.01 },
        ]}
        resultLabel="Orbital period"
        formula="orbitalPeriodFromSemiMajorAxisAU"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Try the weight calculator above with Jupiter's gravity ratio (2.53) and Mercury's (0.38) to see just how much your weight would swing across the solar system while your mass never changes.",
          "Use the orbital period calculator with Neptune's distance (30.1 AU) to see how dramatically Kepler's third law stretches out the years of the outer planets.",
          "Next time a movie shows a ship weaving between asteroids, remember the real belt is mostly empty space — several real spacecraft have crossed it in a straight line.",
          "Read the related entry on Space, Stars & the Universe to see how the same distance-scale reasoning applies once you leave the solar system entirely.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How many planets are in the solar system?", answer: "Eight, since the International Astronomical Union's 2006 definition: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Pluto was reclassified as a dwarf planet that year because it hasn't gravitationally cleared its orbital neighborhood." },
          { question: "Why is Pluto not a planet anymore?", answer: "Pluto meets two of the three 2006 IAU criteria for a planet (it orbits the Sun and is round from its own gravity) but fails the third — clearing its orbital neighborhood of other debris. It's now classified as a dwarf planet, along with Eris, Ceres, Haumea, and Makemake." },
          { question: "What is the order of the planets from the Sun?", answer: "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune — the first four are small rocky terrestrial planets, and the last four are much larger gas or ice giants." },
          { question: "How much would I weigh on Mars?", answer: "About 38% of your Earth weight, since Mars's surface gravity is roughly 0.38 times Earth's. A 70 kg person on Earth would weigh about 26.6 kg on Mars, even though their mass stays the same." },
          { question: "What is the asteroid belt made of?", answer: "Millions of rocky and metallic bodies left over from the solar system's formation, orbiting the Sun roughly between Mars and Jupiter. Despite popular depictions, it's mostly empty space — its total mass is only about 3% of the Moon's." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
