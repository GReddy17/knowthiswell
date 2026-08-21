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
  title: "Mass vs Weight: What's Actually Different",
  category: "units-measurement-conversions",
  order: 9,
  subtopic: "weight-and-mass",
  tags: ["mass", "weight", "gravity", "newtons", "kilograms", "physics of measurement"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Mass is how much matter something contains and never changes; weight is the force gravity exerts on that mass, and it changes with location — which is why the same body weighs less on the Moon.",
  summary: "Mass measures the amount of matter in an object and stays constant everywhere in the universe; weight is the force of gravity acting on that mass, calculated as weight = mass × local gravitational acceleration, so the same mass produces a different weight on Earth, the Moon, or Mars.",
  sources: [
    { label: "NIST — The International System of Units (SI), definition of the kilogram", url: "https://www.nist.gov/pml/owm/metric-si/si-units-mass" },
    { label: "NASA — Solar System Exploration: Planetary gravity comparison", url: "https://solarsystem.nasa.gov/" },
    { label: "Encyclopaedia Britannica — Mass (physics)", url: "https://www.britannica.com/science/mass-physics" },
  ],
  seeAlso: [
    "units-measurement-conversions/kilograms-pounds-and-ounces-conversion",
    "math-numbers/unit-conversions-length-weight-volume",
  ],
  glossary: [
    { term: "Mass", definition: "The amount of matter an object contains, measured in kilograms (SI) or pounds-mass; it does not change no matter where the object is located." },
    { term: "Weight", definition: "The force gravity exerts on an object's mass, measured in newtons (SI) or pounds-force; it changes depending on the local gravitational acceleration." },
    { term: "Gravitational acceleration (g)", definition: "The rate at which gravity accelerates a falling object at a given location, roughly 9.8 m/s² at Earth's surface, 1.62 m/s² on the Moon, and 3.71 m/s² on Mars." },
    { term: "Newton (N)", definition: "The SI unit of force, defined as the force needed to accelerate a 1-kilogram mass at 1 meter per second squared — the correct scientific unit for weight." },
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
      "Mass is the amount of matter in an object, measured in kilograms, and it is identical everywhere in the universe — on Earth, on the Moon, or floating in deep space.",
      "Weight is the force gravity exerts on that mass, measured in newtons, and it changes depending on the local gravitational acceleration — the same mass weighs about six times less on the Moon than on Earth.",
      "A bathroom scale doesn't measure mass directly — it measures the force your body exerts on it, then a fixed conversion (assuming Earth-surface gravity) prints that force as a familiar 'weight' number.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Everyday speech treats &quot;mass&quot; and &quot;weight&quot; as interchangeable, but physics keeps them strictly separate. <TermLink href="/units-measurement-conversions/mass-vs-weight-whats-actually-different">Mass</TermLink> is how much matter an object is made of — measured in kilograms — and it never changes, whether the object is sitting on your kitchen counter or drifting through the vacuum of space. <TermLink href="/units-measurement-conversions/mass-vs-weight-whats-actually-different">Weight</TermLink> is the force gravity exerts on that mass, measured in newtons, and it depends entirely on how strong gravity is wherever the object happens to be.</div>}
      detailed={<div className="prose-p">The relationship is a single equation: weight = mass × <TermLink href="/units-measurement-conversions/mass-vs-weight-whats-actually-different">gravitational acceleration</TermLink> (W = mg). On Earth&apos;s surface, g is about 9.8 meters per second squared, so a 70 kg person has a weight of 70 × 9.8 ≈ 686 <TermLink href="/units-measurement-conversions/mass-vs-weight-whats-actually-different">newtons</TermLink>. Take that same 70 kg person to the Moon, where g drops to about 1.62 m/s², and their mass is still exactly 70 kg — but their weight falls to about 113 newtons, roughly one-sixth of their Earth weight. This is also why astronauts in orbit appear &quot;weightless&quot;: they aren&apos;t massless, and gravity hasn&apos;t switched off (the International Space Station orbits inside Earth&apos;s gravity well) — they&apos;re in continuous freefall around the planet, so there&apos;s no supporting force pushing back against their mass the way a floor or scale normally would.</div>}
      />
      <FootnoteAside>Colloquial &quot;weight&quot; in kilograms (as printed on a bathroom scale or a grocery-store label) is technically a measure of mass, not force — it&apos;s a convenience built on the assumption that everyone reading the number is standing on Earth&apos;s surface, where the mass-to-force conversion factor is constant enough to ignore.</FootnoteAside>

      <QuickCheck
      question="An astronaut orbiting Earth appears to float freely inside the space station. Does this mean gravity has stopped acting on them?"
      options={[
      { text: "Yes — once you're far enough from Earth's surface, gravity's pull becomes negligible", correct: false, explanation: "The International Space Station orbits only about 400 km above Earth's surface, where gravity is still roughly 90% as strong as at sea level. Gravity is very much still acting on the astronauts." },
      { text: "No — the astronaut and the station are both in continuous freefall around Earth, so there's no supporting surface pushing back, which is what 'weightlessness' actually means", correct: true, explanation: "Correct. Orbit is a state of constant freefall — the station is falling toward Earth but moving sideways fast enough to continuously miss it. Without a floor or scale pushing back, there's nothing to register a weight reading, even though gravity (and the astronaut's mass) hasn't gone anywhere." },
      { text: "Yes, because mass itself decreases once an object leaves Earth's atmosphere", correct: false, explanation: "Mass doesn't depend on atmosphere or altitude — it's an intrinsic property of how much matter an object contains, and it stays constant throughout the trip to orbit." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A person&apos;s weight on Earth (baseline case)</h3>
      <div className="prose-p">
      A person with a mass of 70 kg stands on a scale at sea level, where g ≈ 9.8 m/s². Their weight is 70 × 9.8 = 686 newtons. Converted to the more familiar pounds-force (1 N ≈ 0.2248 lbf), that&apos;s about 154 pounds — the number a US bathroom scale would actually display, since US consumer scales report weight-force in pounds rather than mass in kilograms.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same mass on the Moon (edge case / variation)</h3>
      <div className="prose-p">
      That identical 70 kg astronaut steps onto a scale on the lunar surface, where g ≈ 1.62 m/s². Their mass hasn&apos;t changed — it&apos;s still 70 kg — but their weight is now 70 × 1.62 ≈ 113 newtons, about one-sixth of their Earth weight. This is exactly why Apollo astronauts could bound across the lunar surface in bulky spacesuits: the suits&apos; mass didn&apos;t change, but the gravitational force resisting their jumps dropped to a fraction of what they felt training on Earth.
      </div>

      <QuickCheck
      question="A 70 kg astronaut's weight drops from 686 N on Earth to about 113 N on the Moon. What explains the difference?"
      options={[
      { text: "The astronaut's mass decreased during the trip to the Moon", correct: false, explanation: "Mass is constant regardless of location — the astronaut still contains exactly 70 kg of matter on the Moon. Nothing about traveling through space removes mass." },
      { text: "The Moon's gravitational acceleration (1.62 m/s²) is much weaker than Earth's (9.8 m/s²), so the same mass produces a much smaller gravitational force", correct: true, explanation: "Correct. Weight = mass × g. Mass stays fixed at 70 kg; only g changes between locations, which is the entire reason weight differs while mass doesn't." },
      { text: "Newtons and the units used on the Moon are simply a smaller unit than the ones used on Earth", correct: false, explanation: "The newton is a single, universal SI unit of force — it isn't redefined per planet. The difference in the reading reflects a real difference in gravitational force, not a change in units." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why a bathroom scale is really a force sensor (real-world / applied case)</h3>
      <div className="prose-p">
      A bathroom scale doesn&apos;t have any way to directly measure how much matter is inside your body — it measures the compressive force your feet exert on its internal spring or load cell, exactly the newtons-style force described above. The scale&apos;s internal electronics then divide that force reading by Earth&apos;s standard gravity (9.80665 m/s², the internationally defined standard value) to back-calculate a mass figure, which is what actually gets displayed in kilograms. That backward calculation is only accurate because the scale assumes you&apos;re using it at Earth&apos;s surface — take the same scale to the Moon and it would under-report your mass dramatically, because it would keep dividing by Earth&apos;s 9.8 m/s² even though the true local g is only 1.62 m/s².
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The same 70 kg mass produces different weight-force readings on three worlds"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-mass-vs-weight-whats-actually-different-same-mass-three-worlds.svg"
      altText="A 70 kilogram mass shown on three scales side by side: on Earth the scale reads 686 newtons, on the Moon the same 70 kilogram mass reads 113 newtons, and on Mars it reads 260 newtons — the mass number stays 70 kilograms in all three boxes while the weight-force number changes with local gravity."
      />
      <p>
      Reading left to right, the mass figure (70 kg) never changes — only the weight figure changes, because each world&apos;s gravitational acceleration is different. Mars, with g ≈ 3.71 m/s², sits between Earth and the Moon, which is exactly why mission planners cite it as roughly 38% of Earth gravity when discussing future crewed missions.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Using 'kilograms' and 'weight' as if they mean the same physical quantity in a scientific context.", fix: "Kilograms measure mass; newtons (or pounds-force) measure weight. In everyday conversation this distinction rarely matters, but in physics problems, mixing them up produces answers off by a factor of gravitational acceleration." },
      { mistake: "Assuming an object becomes 'lighter' (less massive) simply by leaving Earth's surface.", fix: "Mass is unaffected by location. What changes when you leave Earth is the local gravitational force acting on that unchanged mass — that's weight, not mass." },
      { mistake: "Thinking astronauts in orbit are weightless because they're 'too far' from Earth's gravity.", fix: "At ISS altitude, Earth's gravity is still about 90% of its surface strength. Weightlessness in orbit comes from continuous freefall, not from escaping gravity's reach." },
      ]}
      />
      <MisconceptionCallout
      myth="Mass and weight are just two different units for the same physical property, so 'converting' between kilograms and pounds is the same kind of operation whether you mean mass-kilograms or force-pounds."
      reality={<p>Mass and weight are genuinely different physical quantities — one measures matter, the other measures a gravitational force acting on that matter. Kilograms-to-pounds conversions used in everyday life (cooking, body weight) are actually a mass-to-mass conversion (kilograms to pounds-mass), which works consistently because both people involved are standing on Earth. True weight-force conversions (newtons to pounds-force) are a separate, less commonly needed conversion that only becomes necessary in physics and engineering contexts, or when gravity itself is different, as on another planet.</p>}
      />

      <QuickCheck
      question="Why would a standard bathroom scale give a wildly wrong mass reading if used on the Moon?"
      options={[
      { text: "Because the scale's spring or load cell physically breaks in different gravity", correct: false, explanation: "The mechanism itself would still function — springs and load cells respond to whatever force is applied to them regardless of location." },
      { text: "Because the scale converts the measured force into a mass reading by dividing by Earth's standard gravity (9.8 m/s²), and that conversion is wrong once the true local gravity is different, as on the Moon (1.62 m/s²)", correct: true, explanation: "Correct. The scale's electronics assume Earth-surface gravity when translating a force reading into a displayed mass — an assumption that silently breaks anywhere the local g differs from Earth's." },
      { text: "Because kilograms aren't a valid unit of measurement outside of Earth's atmosphere", correct: false, explanation: "The kilogram is a universal SI unit of mass, valid everywhere in the universe — the scale's error comes from its built-in gravity assumption, not from the unit itself being invalid off-Earth." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Calculate weight (a force) from mass and local gravity"
      fields={[
      { key: "massKg", label: "Mass (kg)", defaultValue: 70 },
      { key: "gravityMPerS2", label: "Local gravity (m/s²) — Earth 9.8, Moon 1.62, Mars 3.71", defaultValue: 9.8, step: 0.01 },
      ]}
      resultLabel="Weight (newtons)"
      formula="massWeightForceNewtons"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Next time you read a body-weight figure in kilograms, remember it's technically a mass figure, backed into from a force reading assuming Earth-surface gravity.",
      "Use the calculator above to see how dramatically the same mass's weight changes across Earth, the Moon, and Mars.",
      "When working a physics problem, check whether the quantity given is mass (kg) or weight (N/lbf) before plugging it into a formula — mixing them up is one of the most common intro-physics errors.",
      "If you're curious about everyday kilogram-to-pound conversions specifically, see the dedicated conversion guide linked below — that conversion is mass-to-mass, not the force conversion covered here.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Is mass the same as weight?", answer: "No. Mass is the amount of matter an object contains, measured in kilograms, and it never changes. Weight is the force gravity exerts on that mass, measured in newtons, and it changes depending on local gravity." },
      { question: "Why do astronauts float in space if gravity is still acting on them?", answer: "Astronauts in low Earth orbit are in continuous freefall — falling toward Earth while moving sideways fast enough to continuously miss it. With no floor or scale pushing back against them, there's no force to register as 'weight,' even though gravity and their mass are both still present." },
      { question: "How much less would I weigh on the Moon?", answer: "About one-sixth of your Earth weight, since the Moon's gravitational acceleration (about 1.62 m/s²) is roughly one-sixth of Earth's (about 9.8 m/s²). Your mass would be completely unchanged." },
      { question: "Does a bathroom scale measure mass or weight?", answer: "Physically, it measures weight — the force your body exerts on its load cell. It then displays a mass figure by dividing that force by Earth's standard gravity, which is only accurate if you're actually using it at Earth's surface." },
      { question: "What is the SI unit for weight?", answer: "The newton (N), the SI unit of force. Mass is measured in kilograms (kg). Everyday US usage of 'pounds' for body weight is actually pounds-force, a unit of weight, not mass." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
