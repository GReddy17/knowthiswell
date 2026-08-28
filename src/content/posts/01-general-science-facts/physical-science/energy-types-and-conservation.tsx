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
  title: "Energy Types & Conservation",
  category: "general-science-facts",
  order: 3,
  subtopic: "physical-science",
  tags: ["energy", "kinetic energy", "potential energy", "conservation of energy", "physics"],
  date: "2026-08-16",
  updated: "2026-08-19",
  lastReviewed: "2026-08-19",
  excerpt: "The main forms energy takes — kinetic, potential, thermal, chemical, electrical, radiant — why it can never be created or destroyed, and how they trade off in everyday motion, food, and machines.",
  summary: "Energy exists in forms like kinetic, potential, thermal, and chemical, and constantly converts between them — but the total amount in a closed system never changes. That's the law of conservation of energy.",
  sources: [
    { label: "U.S. Department of Energy — Energy Basics", url: "https://www.energy.gov/eere/education/energy-basics" },
    { label: "Encyclopaedia Britannica — Conservation of Energy", url: "https://www.britannica.com/science/conservation-of-energy" },
  ],
  seeAlso: [
    "general-science-facts/forces-and-motion",
    "general-science-facts/matter-and-states-of-matter",
  ],
  glossary: [
    { term: "Kinetic energy", definition: "Energy an object has because it's moving; depends on mass and speed." },
    { term: "Potential energy", definition: "Stored energy based on an object's position or condition, like height or a stretched spring." },
    { term: "Conservation of energy", definition: "The principle that total energy in a closed system stays constant — it only changes form." },
    { term: "Joule", definition: "The standard unit of energy, abbreviated J." },
    { term: "Thermal energy", definition: "The kinetic energy of a substance's own particles vibrating and moving — what's actually being measured as temperature." },
    { term: "Chemical energy", definition: "Energy stored in the bonds between atoms, released or absorbed when those bonds rearrange during a chemical reaction." },
    { term: "Elastic potential energy", definition: "Potential energy stored in a stretched or compressed object, like a spring or a drawn bow, that can spring back to its original shape." },
    { term: "Radiant energy", definition: "Energy carried by electromagnetic waves, including visible light, radio waves, and infrared — it can travel through empty space, unlike most other energy transfers." },
  ],
  author: {
    slug: "james-h-rivers",
    name: "James H. Rivers",
    credentialLine: "Founder, KnowThisWell",
  },
  youtubeStatus: "published",
  youtubeUrl: "https://youtu.be/T3PNpvCaaVw",
  draft: false,
};

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Energy comes in many forms — kinetic, potential, thermal, chemical, electrical — but it's always the same underlying quantity, just converted.",
          "The law of conservation of energy says the total amount in a closed system never changes, even though its form constantly does.",
          "A falling object is the clearest everyday example: potential energy converts to kinetic energy as height converts to speed.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/general-science-facts/energy-types-and-conservation">Energy</TermLink> is the capacity to do work — to move something, heat something, or power something. It shows up in different forms: a moving car has kinetic energy, a ball held up high has potential energy, food has chemical energy. Energy doesn&apos;t disappear when it&apos;s &quot;used up&quot; — it just changes into a different form, usually including some heat.</div>}
        detailed={<div className="prose-p">The law of conservation of energy states that in an isolated system, total energy is constant — it can convert between kinetic, potential, thermal, chemical, electrical, and other forms, but the sum never increases or decreases. <TermLink href="/general-science-facts/energy-types-and-conservation">Kinetic energy</TermLink> depends on mass and the square of velocity (KE = ½mv²), which is why doubling speed quadruples kinetic energy, not just doubles it. Gravitational potential energy depends on mass, height, and gravitational acceleration (PE = mgh). In practice, some energy in any real system converts to heat via friction or air resistance, which is why perpetual motion — a system that keeps moving forever with no energy input — is physically impossible, not just impractical.</div>}
      />
      <FootnoteAside>The law of conservation of energy is really a special case of a deeper physics principle called Noether&apos;s theorem, discovered in 1915 — energy conservation follows mathematically from the fact that the laws of physics don&apos;t change over time.</FootnoteAside>

      <p>
      Kinetic and potential energy are the two forms easiest to see in motion, but they&apos;re not the only ones a reader is likely to run into. <TermLink href="/general-science-facts/energy-types-and-conservation">Thermal energy</TermLink> is really just kinetic energy at the particle level — a hot object&apos;s atoms and molecules are vibrating and colliding faster than a cold object&apos;s, and temperature is a measure of that average particle motion. <TermLink href="/general-science-facts/energy-types-and-conservation">Chemical energy</TermLink> is stored in the bonds holding atoms together in a molecule; breaking and re-forming those bonds during a reaction — burning wood, digesting a meal, discharging a battery — releases some of that stored energy, usually as heat and light. A stretched rubber band or a compressed spring stores <TermLink href="/general-science-facts/energy-types-and-conservation">elastic potential energy</TermLink>, released the instant it&apos;s allowed to snap back. Electrical energy is the organized flow of charge through a circuit (covered in depth in Electricity &amp; Magnetism Basics), and <TermLink href="/general-science-facts/energy-types-and-conservation">radiant energy</TermLink> — sunlight, radio signals, the warmth you feel standing near a fire without touching it — is energy carried by electromagnetic waves, the one form that can cross empty space with nothing to carry it. All of them are governed by the same conservation law: a burning log converts chemical energy into thermal and radiant energy, a battery converts chemical energy into electrical energy, but the total energy involved never changes, only its form.
      </p>

      <p>
      That trade-off between potential and kinetic energy is the easiest place to actually see conservation of energy happening, rather than just stating it as a rule.
      </p>

      <QuickCheck
        question="You drop a ball from a height and, ignoring air resistance, it speeds up as it falls. Where is its potential energy going?"
        options={[
          { text: "It disappears — the ball loses energy as it falls", correct: false, explanation: "Energy can't just disappear in a closed system. The ball isn't losing energy overall, its energy is changing form." },
          { text: "It converts into kinetic energy, matching the ball's increasing speed", correct: true, explanation: "Correct. As height drops, potential energy (mgh) decreases exactly as kinetic energy (½mv²) increases by the same amount — total mechanical energy stays constant." },
          { text: "It converts into mass, making the ball slightly heavier", correct: false, explanation: "Energy-to-mass conversion (E = mc²) is real but requires nuclear-scale processes — nothing like that happens in an everyday falling object." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A rolling ball&apos;s kinetic energy (baseline case)</h3>
      <div className="prose-p">
      A 0.5 kg ball rolling at 4 m/s has kinetic energy of KE = ½ × 0.5 kg × (4 m/s)² = ½ × 0.5 × 16 = 4 joules. If it speeds up to 8 m/s — double the speed — its kinetic energy becomes ½ × 0.5 × 64 = 16 joules, four times as much, not double. That squared relationship is why a car crash at 100 km/h is far more than &quot;twice as bad&quot; as one at 50 km/h.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A pendulum swinging (edge case / variation)</h3>
      <div className="prose-p">
      A pendulum pulled to one side has maximum potential energy and zero kinetic energy at the top of its swing (momentarily still). At the bottom of its swing, it has maximum speed and therefore maximum kinetic energy, but minimum height and therefore minimum potential energy. At every point in between, the two trade off continuously — but their sum, ignoring air resistance, stays exactly the same throughout the swing. This is why a frictionless pendulum, in theory, would swing to the same height forever.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why a hybrid car&apos;s regenerative brakes save fuel (real-world / applied case)</h3>
      <div className="prose-p">
      In an ordinary car, braking converts the car&apos;s kinetic energy into heat in the brake pads — useful for stopping, but that energy is now gone for good, radiated away. A hybrid or electric car&apos;s regenerative braking instead uses the car&apos;s kinetic energy to spin a generator, converting it into electrical energy stored in the battery instead of wasting it as heat. Same starting kinetic energy, same law of conservation, but a deliberately different — and reusable — end form.
      </div>

      <QuickCheck
        question="A hybrid car uses regenerative braking to recapture energy while slowing down. What form does the car's kinetic energy convert into?"
        options={[
          { text: "It's destroyed, since the car is slowing down", correct: false, explanation: "Energy isn't destroyed by slowing down — conservation of energy means it has to go somewhere. Regenerative braking is specifically designed to capture where it goes." },
          { text: "Electrical energy, stored in the battery for later use", correct: true, explanation: "Correct. The car's kinetic energy spins a generator connected to the wheels, converting motion into electrical energy that charges the battery instead of being wasted as brake heat." },
          { text: "Potential energy, stored by raising the car slightly", correct: false, explanation: "Braking doesn't meaningfully change the car's height. The captured energy becomes electrical, not gravitational potential energy." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 4: Where the energy in a meal actually goes (real-world / applied case)</h3>
      <div className="prose-p">
      Food stores chemical energy in the bonds of carbohydrates, fats, and proteins — which is exactly what a food label&apos;s &quot;calories&quot; (technically kilocalories) are measuring. Digestion breaks those bonds down, and the body converts that chemical energy into several other forms at once: some becomes thermal energy that keeps body temperature around 37°C, some becomes the kinetic energy of muscles contracting during movement, and some gets re-stored as chemical energy again, in fat or glycogen, for later use. None of it is created in the process — it&apos;s the same conservation law running through a biological system instead of a mechanical one, which is why &quot;calories in versus calories out&quot; is a real energy-accounting statement, not just a diet slogan.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Energy trading between potential and kinetic as a ball falls"
        type="comparison"
        svgSrc="/diagrams/general-science-facts-energy-types-and-conservation-pe-ke.svg"
        altText="Diagram showing a ball at three heights during a fall, with bar charts at each position showing potential energy shrinking and kinetic energy growing by the same amount, so the combined total height of both bars stays constant across all three positions."
      />
      <p>
      At the top, the ball&apos;s energy bar is entirely potential energy and the kinetic bar is empty. Partway down, the bars are roughly even. At the bottom, potential energy has shrunk to zero and kinetic energy has grown to fill the same total height — the combined bar height, representing total energy, never changes.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Saying energy gets 'used up' or 'lost' when something stops moving.", fix: "Energy converts, it doesn't vanish — a stopped object's kinetic energy became heat, sound, or another form, and the total is unchanged." },
          { mistake: "Assuming doubling an object's speed doubles its kinetic energy.", fix: "Kinetic energy depends on velocity squared (KE = ½mv²) — doubling speed quadruples kinetic energy." },
          { mistake: "Thinking potential energy only means gravitational (height-based) energy.", fix: "Potential energy is any stored energy based on position or condition — a stretched spring, a compressed gas, and a charged battery all store potential energy without any height involved." },
        ]}
      />
      <MisconceptionCallout
        myth="Some machines can create free energy or run forever without any energy input, if designed cleverly enough."
        reality={<p>Every real system loses some energy to friction, air resistance, or electrical resistance, which converts useful mechanical or electrical energy into heat that can&apos;t easily be recovered. No design eliminates this — perpetual motion machines have been proposed for centuries and every single one, once tested rigorously, has violated the law of conservation of energy or the second law of thermodynamics. Patent offices in the US and UK now reject perpetual motion machine applications outright without even testing the device.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Kinetic energy of a moving object (KE = ½mv²)"
        fields={[
          { key: "mass", label: "Mass (kg)", defaultValue: 1, step: 0.1 },
          { key: "velocity", label: "Velocity (m/s)", defaultValue: 5, step: 0.5 },
        ]}
        resultLabel="Kinetic energy (joules)"
        formula="kineticEnergy"
        formatResult="number"
      />
      <EntryCalculator
        title="Gravitational potential energy at a given height (PE = mgh)"
        fields={[
          { key: "mass", label: "Mass (kg)", defaultValue: 1, step: 0.1 },
          { key: "height", label: "Height (m)", defaultValue: 2, step: 0.5 },
        ]}
        resultLabel="Potential energy (joules)"
        formula="gravitationalPotentialEnergy"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Try the calculators above with the same object at different speeds to feel how much faster kinetic energy grows than speed does.",
          "Next time you see regenerative braking mentioned in a car's specs, remember it's just conservation of energy applied deliberately instead of wasted as heat.",
          "Watch a pendulum or swing set and try to spot the exact instant its kinetic energy is at maximum — it's the lowest point, moving fastest.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the law of conservation of energy in simple terms?", answer: "Energy can't be created or destroyed in a closed system — it only changes from one form to another, like potential energy becoming kinetic energy as something falls." },
          { question: "Is heat a form of energy?", answer: "Yes — heat (thermal energy) is one of the main forms energy takes, and it's usually the form that other energy types 'leak' into via friction or resistance, which is why systems tend to run down over time even though total energy is conserved." },
          { question: "Why does kinetic energy depend on velocity squared instead of just velocity?", answer: "It comes directly from the physics of work and motion (KE = ½mv²) — it's an experimentally verified relationship, not an arbitrary choice, and it's why crash severity increases so sharply with speed." },
          { question: "Can energy ever actually be destroyed?", answer: "Not in ordinary physics — only in nuclear reactions does energy convert to or from mass (E = mc²), and even then the combined mass-energy total is conserved. Everyday mechanical and electrical processes never destroy energy, only convert it." },
          { question: "What's the difference between chemical energy and thermal energy?", answer: "Chemical energy is stored in the bonds between atoms in a molecule and is released when those bonds break and reform during a reaction. Thermal energy is the kinetic energy of a substance's own particles moving and vibrating — chemical energy often converts into thermal energy, as when burning fuel releases heat." },
          { question: "What are the main types of energy?", answer: "Kinetic (motion), potential (position or condition — gravitational or elastic), thermal (particle motion, felt as heat), chemical (stored in molecular bonds), electrical (flowing charge), and radiant (electromagnetic waves like light) are the forms covered most often in introductory physics. All of them convert into one another while the total stays constant." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
    </>
  );
}
