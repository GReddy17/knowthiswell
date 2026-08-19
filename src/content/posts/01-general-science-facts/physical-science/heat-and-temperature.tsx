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
  title: "Heat & Temperature: What's Actually Different Between Them",
  category: "general-science-facts",
  order: 8,
  subtopic: "physical-science",
  tags: [
    "heat",
    "temperature",
    "thermal energy",
    "specific heat",
    "thermodynamics",
    "physical science",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why heat and temperature aren't the same thing, how specific heat explains why sand burns your feet but the ocean stays cool, and how heat actually moves.",
  summary: "Temperature measures how fast particles are moving on average; heat is the total thermal energy transferred between objects, and the two don't always move together.",
  sources: [
    { label: "NIST — Thermodynamic Temperature", url: "https://www.nist.gov/pml" },
    { label: "NASA Science — Heat and Temperature", url: "https://science.nasa.gov/" },
    { label: "Royal Society of Chemistry — Energy and Thermochemistry", url: "https://edu.rsc.org/" },
  ],
  seeAlso: [
    "general-science-facts/matter-and-states-of-matter",
    "general-science-facts/energy-types-and-conservation",
    "general-science-facts/density-and-buoyancy",
  ],
  glossary: [
    { term: "Temperature", definition: "A measure of the average kinetic energy of particles in a substance — how fast they're moving on average, not how much total energy is present." },
    { term: "Heat", definition: "Thermal energy that flows from a hotter object to a colder one due to a temperature difference, measured in joules." },
    { term: "Specific heat capacity", definition: "The amount of energy needed to raise 1 gram of a substance by 1°C — different substances need very different amounts of energy for the same temperature rise." },
    { term: "Thermal conductor", definition: "A material that transfers heat quickly, typically metals, because their particles (and free electrons) pass energy along efficiently." },
    { term: "Thermal insulator", definition: "A material that transfers heat slowly, such as air, wood, or foam, because its particles are poor at passing energy along." },
    { term: "Conduction", definition: "Heat transfer through direct contact between particles, like a metal spoon heating up in hot soup." },
    { term: "Convection", definition: "Heat transfer through the movement of a fluid (liquid or gas), like warm air rising and cool air sinking in a room." },
    { term: "Radiation", definition: "Heat transfer through electromagnetic waves, requiring no medium — how the Sun's heat reaches Earth through the vacuum of space." },
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
          "Temperature is the average speed of particles; heat is the total energy transferred — a huge pot of lukewarm water can hold more heat energy than a small cup of boiling water.",
          "Specific heat capacity explains why sand burns bare feet in seconds while nearby ocean water stays comfortable — water resists temperature change far more than sand does per gram.",
          "Heat moves three ways — conduction (contact), convection (fluid movement), and radiation (waves) — and most real heating and cooling (a room, a body, a planet) uses more than one at once.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/general-science-facts/heat-and-temperature">Temperature</TermLink> tells you how hot or cold something is on a scale (like °C). <TermLink href="/general-science-facts/heat-and-temperature">Heat</TermLink> is the energy that actually flows between two things when one is hotter than the other — heat always moves from hot to cold until both reach the same temperature. They sound like the same idea, but a swimming pool at 28°C and a cup of tea at 28°C are at the identical temperature, yet the pool holds vastly more total heat energy simply because it has so much more water.</div>}
        detailed={<div className="prose-p">At the particle level, temperature measures the <em>average</em> kinetic energy of a substance&apos;s particles — how fast they&apos;re moving or vibrating on average. Heat is the total thermal energy content, which depends on both that average particle speed <em>and</em> how much matter is present. This is why the amount of energy needed to raise something&apos;s temperature depends heavily on the substance itself, a property called <TermLink href="/general-science-facts/heat-and-temperature">specific heat capacity</TermLink>. Water has an unusually high specific heat capacity (about 4.18 joules per gram per °C) compared to metals or sand (often under 1 J/g°C), meaning water absorbs or releases far more energy for the same temperature change — the reason coastal climates are milder than inland ones, and why a metal playground slide gets scorching in the sun while nearby grass barely warms.</div>}
      />
      <FootnoteAside>The Celsius, Fahrenheit, and Kelvin scales all measure the same physical quantity with different zero points and step sizes. Kelvin is the scientific standard because 0 K (-273.15°C) is absolute zero — the theoretical point where particle motion is at its physical minimum, not an arbitrary reference like ice or a body temperature.</FootnoteAside>

      <p>
      Specific heat capacity is the number that turns &quot;temperature versus heat&quot; from a definition into something you can calculate directly — and it explains a surprising amount of ordinary experience once you put real values in.
      </p>

      <QuickCheck
        question="A small metal spoon and a large pot of water are both left in the same sunny room for hours and reach the same temperature. Which holds more total heat energy?"
        options={[
          { text: "The pot of water, because it has far more mass and water has a high specific heat capacity", correct: true, explanation: "Correct. Same temperature doesn't mean same total energy — the pot's much greater mass, combined with water's high specific heat capacity, means it stores far more total thermal energy than the small metal spoon." },
          { text: "The metal spoon, because metal heats up faster", correct: false, explanation: "Heating up faster (low specific heat capacity) is about how quickly temperature rises, not about how much total energy is stored once both reach the same temperature. The pot still holds far more total energy." },
          { text: "Both hold the same amount, since they're at the same temperature", correct: false, explanation: "Same temperature only means the same average particle speed — total heat energy also depends on mass and specific heat capacity, both of which strongly favor the much larger pot of water." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Heating a cup of water on a stove (baseline case)</h3>
      <div className="prose-p">
      To raise 250 grams of water by 20°C (say, from 25°C to a warm 45°C), the energy needed is mass × specific heat × temperature change: 250 g × 4.18 J/g°C × 20°C = <strong>20,900 joules</strong>. That number is the direct reason a kettle takes real, measurable time and real electrical energy to heat water — it isn&apos;t arbitrary, it&apos;s this exact calculation running on your stovetop or heating element.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why beach sand burns your feet but the ocean doesn&apos;t (edge case / variation)</h3>
      <div className="prose-p">
      Dry sand has a specific heat capacity of roughly 0.83 J/g°C — about a fifth of water&apos;s 4.18 J/g°C. Under the same intense midday sun, sand&apos;s temperature can shoot up 30-40°C above air temperature within hours, easily reaching 60-70°C — hot enough to burn bare skin — while nearby ocean water, absorbing the same sunlight per gram, might rise only a few degrees because it takes roughly 5 times more energy to produce the same temperature increase. This isn&apos;t about sand absorbing more sunlight; it&apos;s that the same energy input produces a much bigger temperature swing in a low-specific-heat material like sand.
      </div>

      <QuickCheck
        question="Coastal cities tend to have milder summers and winters than inland cities at the same latitude. What's the main physical reason?"
        options={[
          { text: "Ocean water's high specific heat capacity means it absorbs or releases large amounts of heat with only small temperature changes, moderating nearby air temperature", correct: true, explanation: "Correct. Water resists temperature change far more than land per gram, so a large ocean acts as a thermal buffer, keeping coastal air temperatures more stable across seasons than inland areas far from that buffering effect." },
          { text: "Coastal areas simply receive less sunlight overall", correct: false, explanation: "Sunlight exposure at the same latitude is essentially the same for coastal and inland areas — the real difference is how much the nearby land versus ocean's temperature swings in response to that sunlight." },
          { text: "Ocean currents physically block temperature extremes from reaching the coast", correct: false, explanation: "This describes a physical barrier, which isn't the mechanism — the real cause is a thermal one: water's high specific heat capacity smooths out temperature swings compared to land." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How a thermos keeps drinks hot (real-world / applied case)</h3>
      <div className="prose-p">
      A vacuum-insulated thermos slows down all three heat transfer methods at once. The vacuum layer between its inner and outer walls removes almost all the matter that could carry heat by <TermLink href="/general-science-facts/heat-and-temperature">conduction</TermLink> or <TermLink href="/general-science-facts/heat-and-temperature">convection</TermLink> — no air, no material path for particles to pass energy along. The remaining heat loss path is <TermLink href="/general-science-facts/heat-and-temperature">radiation</TermLink>, which is why the inner surface is typically a reflective, mirror-like coating — reflecting radiant heat back inward rather than absorbing and re-emitting it outward. Blocking all three pathways at once is why a good thermos can keep coffee hot for 12+ hours, far longer than an uninsulated cup.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Three ways heat moves: conduction, convection, radiation"
        type="detail"
        svgSrc="/diagrams/general-science-facts-heat-and-temperature-transfer-modes.svg"
        altText="Three side-by-side diagrams: conduction shown as a metal rod with heat particles passing energy along by direct contact, convection shown as warm fluid rising and cool fluid sinking in a circular loop inside a pot, and radiation shown as wavy arrows carrying heat energy across empty space from the sun to Earth."
      />
      <p>
      Conduction dominates in solids where particles are locked close together (a metal spoon in hot soup). Convection dominates in fluids that can physically flow (a pot of boiling water, a heated room, ocean currents) — warmer fluid becomes less dense, rises, cools, and sinks again in a loop. Radiation is the only one of the three that needs no medium at all, which is the only reason the Sun&apos;s heat can cross the vacuum of space to reach Earth.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using 'heat' and 'temperature' interchangeably.", fix: "Temperature is average particle speed; heat is total transferred energy. Two objects can be at the same temperature while holding very different amounts of total heat energy, depending on their mass and specific heat capacity." },
          { mistake: "Assuming metal objects are always colder than wood or fabric objects in the same room.", fix: "They're at the same room temperature — metal just conducts heat away from your hand much faster than wood, so it feels colder even though a thermometer would read the same value for both." },
          { mistake: "Thinking a bigger flame or heater always heats something up faster in proportion to its size.", fix: "How fast temperature rises also depends on the object's mass and specific heat capacity — the same heat source raises a small object's temperature much faster than a large one." },
        ]}
      />
      <MisconceptionCallout
        myth="Metal feels colder than wood in the same room because metal actually is colder."
        reality={<p>A thermometer would show metal and wood objects sitting in the same room at the exact same temperature. Metal simply conducts heat away from your hand far faster than wood does, because metal is a much better <TermLink href="/general-science-facts/heat-and-temperature">thermal conductor</TermLink>. Your skin senses the <em>rate</em> of heat leaving your hand, not the object&apos;s actual temperature — which is why metal feels cold and, by the same mechanism, feels scorching hot far faster than wood does when both are heated.</p>}
      />

      <QuickCheck
        question="A metal spoon and a wooden spoon are both left in the same 20°C room overnight. Why does the metal spoon feel colder to the touch?"
        options={[
          { text: "The metal spoon is actually at a lower temperature than the wooden spoon", correct: false, explanation: "Both objects are at the same 20°C room temperature — a thermometer would confirm this. The difference is purely in how fast each material conducts heat away from your hand." },
          { text: "Metal conducts heat away from your hand much faster than wood, so your skin senses a faster rate of heat loss and interprets that as 'colder'", correct: true, explanation: "Correct. Touch senses the rate heat leaves your skin, not temperature directly. Metal's high thermal conductivity pulls heat from your hand quickly, which your nerves register as cold, even at identical room temperature to the wood." },
          { text: "Metal generates its own cooling effect through a chemical reaction with skin", correct: false, explanation: "No chemical reaction is involved — this is a purely physical difference in how efficiently metal versus wood conducts heat away from your hand." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Energy needed to change temperature (Q = mcΔT)"
        fields={[
          { key: "massGrams", label: "Mass (grams)", defaultValue: 250, step: 10 },
          { key: "specificHeatJPerGC", label: "Specific heat (J per g per °C)", defaultValue: 4.18, step: 0.01 },
          { key: "tempChangeC", label: "Temperature change (°C)", defaultValue: 20, step: 1 },
        ]}
        resultLabel="Energy required (joules)"
        formula="specificHeatEnergy"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Touch a metal object and a wooden or fabric object in the same room and notice the temperature 'feels' different, even though a thermometer would show them identical.",
          "Next time you're at a beach or pool deck, notice how much hotter dry sand or concrete gets than the water — that's specific heat capacity, not different sunlight exposure.",
          "Try the calculator above with sand's specific heat (~0.83 J/g°C) instead of water's (4.18) to see how much less energy the same temperature rise takes.",
          "Read the related entry on Matter & States of Matter to connect heat transfer to phase changes like melting and boiling.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What's the difference between heat and temperature?", answer: "Temperature measures the average kinetic energy (speed) of particles in a substance. Heat is the total thermal energy transferred between objects due to a temperature difference. Two objects can share the same temperature while holding very different total heat energy, depending on mass and specific heat capacity." },
          { question: "Why does metal feel colder than wood at the same temperature?", answer: "Metal is a much better thermal conductor than wood, so it pulls heat away from your hand faster. Touch senses the rate of heat loss, not actual temperature — both objects are genuinely at the same room temperature." },
          { question: "What is specific heat capacity?", answer: "The amount of energy needed to raise 1 gram of a substance by 1°C. Water's specific heat capacity (4.18 J/g°C) is unusually high, meaning it resists temperature change far more than most solids like sand or metal, which typically fall under 1 J/g°C." },
          { question: "What are the three ways heat transfers?", answer: "Conduction (direct contact, as in a metal spoon in hot soup), convection (movement of a fluid, as in rising warm air), and radiation (electromagnetic waves, requiring no medium — how the Sun heats Earth across empty space)." },
          { question: "Why is Kelvin used in science instead of Celsius or Fahrenheit?", answer: "Kelvin starts at absolute zero (0 K, -273.15°C), the theoretical point of minimum particle motion, rather than an arbitrary reference like water freezing. This makes Kelvin the natural scale for physics equations involving particle energy directly." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
