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
  title: "Density & Buoyancy: Why Some Things Float and Others Sink",
  category: "general-science-facts",
  order: 9,
  subtopic: "physical-science",
  tags: [
    "density",
    "buoyancy",
    "archimedes principle",
    "floating and sinking",
    "physical science",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why a massive steel ship floats but a small steel bolt sinks, and how Archimedes' principle explains buoyant force with real numbers.",
  summary: "An object floats when it's less dense than the fluid it's in, and sinks when it's more dense — buoyant force depends on the volume of fluid displaced, not the object's weight alone.",
  sources: [
    { label: "NOAA — Ocean Facts: Why Do Ships Float?", url: "https://oceanservice.noaa.gov/facts/" },
    { label: "Encyclopaedia Britannica — Archimedes' Principle", url: "https://www.britannica.com/science/Archimedes-principle" },
    { label: "NASA Glenn Research Center — Buoyancy", url: "https://www1.grc.nasa.gov/" },
  ],
  seeAlso: [
    "general-science-facts/matter-and-states-of-matter",
    "general-science-facts/forces-and-motion",
    "general-science-facts/heat-and-temperature",
  ],
  glossary: [
    { term: "Density", definition: "Mass per unit volume of a substance, typically measured in grams per cubic centimeter (g/cm³) or kilograms per cubic meter (kg/m³)." },
    { term: "Buoyant force", definition: "The upward force a fluid exerts on an object submerged or floating in it, equal to the weight of the fluid the object displaces." },
    { term: "Archimedes' principle", definition: "The rule that buoyant force on an object equals the weight of the fluid it displaces — named for the Greek mathematician who reportedly discovered it in a bathtub." },
    { term: "Displacement", definition: "The volume of fluid pushed out of the way by a submerged or floating object." },
    { term: "Relative density", definition: "The ratio of a substance's density to a reference substance's density (usually water) — a relative density below 1 means the substance floats in water." },
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
          "Whether an object floats depends on its density compared to the fluid it's in, not on how heavy or big it is in absolute terms.",
          "A massive steel ship floats because its overall shape — mostly hollow, air-filled space — makes its average density lower than water, even though solid steel itself sinks.",
          "Buoyant force equals the weight of the fluid an object displaces (Archimedes' principle) — more displaced fluid means more upward push, regardless of what the object is made of.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/general-science-facts/density-and-buoyancy">Density</TermLink> is how tightly packed matter is inside an object — a brick and a similarly sized sponge can weigh very differently because the brick packs far more mass into the same space. Whether something floats depends on comparing its density to the fluid around it: less dense than water, it floats; more dense, it sinks. A solid steel ball sinks, but a hollow steel ship floats, because the ship&apos;s shape spreads that same steel (plus a lot of empty, air-filled space) across a much bigger volume, lowering its average density below water&apos;s.</div>}
        detailed={<div className="prose-p">Formally, density equals mass divided by volume (ρ = m/V). When an object enters a fluid, it pushes fluid out of the way — this is <TermLink href="/general-science-facts/density-and-buoyancy">displacement</TermLink> — and the fluid pushes back with an upward force equal to the weight of the fluid displaced. This is <TermLink href="/general-science-facts/density-and-buoyancy">Archimedes&apos; principle</TermLink>: buoyant force = fluid density × gravity × volume displaced. An object floats when this upward buoyant force can equal its own weight before it&apos;s fully submerged; it sinks when even fully submerged, the buoyant force is still less than its weight. This is why the object&apos;s <em>shape</em> matters as much as its material — spreading the same mass over more volume (a hollow hull instead of a solid block) increases displaced fluid and buoyant force without changing weight at all.</div>}
      />
      <FootnoteAside>Archimedes reportedly discovered this principle while stepping into a bath and noticing the water level rise — and, according to legend, ran through the streets shouting &quot;Eureka!&quot; (&quot;I have found it!&quot;) without stopping to get dressed.</FootnoteAside>

      <p>
      That relationship between weight, displaced fluid, and buoyant force is exactly what makes a battleship float and a paperclip sink — and it becomes concrete once real numbers go into Archimedes&apos; formula.
      </p>

      <QuickCheck
        question="A block of solid steel sinks in water, but a steel ship many times heavier floats. What's the key difference?"
        options={[
          { text: "The ship's hull shape spreads the steel's mass over a much larger volume (mostly air-filled space), lowering its average density below water's", correct: true, explanation: "Correct. Floating depends on average density, not total weight. A hollow hull displaces far more water for the same mass of steel than a solid block would, dropping the ship's overall density below water's." },
          { text: "Ships are made from a special lightweight metal that isn't really steel", correct: false, explanation: "Ship hulls are commonly built from ordinary steel, which is denser than water on its own. The floating comes from hull shape and hollow volume, not a different material." },
          { text: "The ship's engines actively push it upward to counteract sinking", correct: false, explanation: "A ship floats at rest with engines off — buoyant force alone, from displaced water, supports its weight. Engines are for propulsion, not staying afloat." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Comparing densities to predict floating (baseline case)</h3>
      <div className="prose-p">
      A wooden block has a mass of 60 grams and a volume of 100 cm³, giving a density of 60 ÷ 100 = 0.6 g/cm³. Water&apos;s density is 1.0 g/cm³. Since 0.6 is less than 1.0, the block floats — and roughly 60% of its volume sits below the waterline, because it needs to displace exactly 60 grams (60 cm³) of water to support its own 60-gram weight. A denser wood, like ebony at roughly 1.2 g/cm³, would sink in plain water for the identical reason in reverse.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A solid steel block versus a hollow steel ship hull (edge case / variation)</h3>
      <div className="prose-p">
      Solid steel has a density around 7.8 g/cm³ — nearly 8 times water&apos;s density, so a solid steel block always sinks, no exceptions. But shape a fixed mass of that same steel into a hollow hull enclosing a large air-filled volume, and the <em>ship&apos;s</em> overall density (steel mass ÷ total hull volume, including the air inside) drops well below 1.0 g/cm³. A real cargo ship&apos;s hull might weigh tens of thousands of tonnes yet float, because its total enclosed volume is large enough that the average density of &quot;ship&quot; — steel plus air plus cargo — comes in under water&apos;s density. Damage the hull enough to let water flood that air-filled volume, and average density rises back above 1.0 g/cm³, and the ship sinks — this is the entire physical mechanism behind flooding sinking a ship.
      </div>

      <QuickCheck
        question="A ship's hull is damaged and floods with water, replacing the air inside it. Why does this cause the ship to sink?"
        options={[
          { text: "Flooding replaces low-density air with water, raising the ship's average density above water's density, so buoyant force can no longer support its weight", correct: true, explanation: "Correct. The ship's steel mass doesn't change, but replacing air with flooding water raises the average density of the whole hull volume — once that average exceeds water's density, the ship sinks." },
          { text: "Water flooding in adds so much extra weight that the ship becomes too heavy for any ship to float", correct: false, explanation: "Added mass from flooding matters, but the deeper cause is the density shift — replacing buoyant air with dense water inside the same hull volume, not simply total weight increasing." },
          { text: "The steel hull dissolves slightly when exposed to seawater, weakening it", correct: false, explanation: "Steel doesn't meaningfully dissolve on the sinking timescale — the mechanism is purely about density and displaced water changing, not material breakdown." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why a submarine can float or sink on command (real-world / applied case)</h3>
      <div className="prose-p">
      A submarine controls its own average density using ballast tanks — chambers that can be filled with either seawater or compressed air. To dive, the crew floods the tanks with seawater, increasing the submarine&apos;s average density above the surrounding water&apos;s, so buoyant force can no longer support its weight and it sinks. To surface, compressed air is pumped in to push the water back out, lowering average density below the surrounding water again, restoring enough buoyant force to rise. Submarines can even hold a precise depth by adjusting ballast until average density exactly equals the surrounding water&apos;s density — <TermLink href="/general-science-facts/density-and-buoyancy">relative density</TermLink> of exactly 1, neither rising nor sinking, called neutral buoyancy.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Buoyant force versus weight for floating, sinking, and neutral buoyancy"
        type="detail"
        svgSrc="/diagrams/general-science-facts-density-and-buoyancy-forces.svg"
        altText="Three side-by-side diagrams of objects in water with force arrows: a floating object where the upward buoyant force arrow equals the downward weight arrow at partial submersion, a sinking object where the downward weight arrow is longer than the upward buoyant force arrow even fully submerged, and a neutrally buoyant submarine where both arrows are exactly equal while fully submerged."
      />
      <p>
      Floating is a balance: the object sinks just deep enough that the weight of the water it displaces equals its own weight, then stops. Sinking means even at full submersion — displacing the maximum possible volume of water — the buoyant force still can&apos;t catch up to the object&apos;s weight. Neutral buoyancy, used by submarines and scuba divers, is the special case where those two forces are exactly balanced while fully submerged.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming heavier objects always sink and lighter objects always float.", fix: "Weight alone doesn't determine floating — density (mass relative to volume) does. A massive steel ship floats; a small steel bolt sinks, because their densities, not their weights, differ from water's." },
          { mistake: "Thinking buoyant force depends on how deep an object is submerged.", fix: "Buoyant force depends on the volume of fluid displaced, not depth — a fully submerged object displaces the same volume (and feels the same buoyant force from that displacement) whether it's just below the surface or far underwater, ignoring fluid density changes with depth." },
          { mistake: "Believing an object floats because it 'weighs less' in water.", fix: "The object's actual weight doesn't change in water — an upward buoyant force is added, partially or fully counteracting gravity. That's why objects genuinely feel lighter when held underwater, even though their mass hasn't changed." },
        ]}
      />
      <MisconceptionCallout
        myth="Objects float because they are lightweight, and heavy objects always sink."
        reality={<p>Floating depends entirely on <TermLink href="/general-science-facts/density-and-buoyancy">density</TermLink> relative to the surrounding fluid, not absolute weight. An aircraft carrier can weigh over 90,000 tonnes and float easily, while a single dense steel ball bearing weighing a few grams sinks instantly. The carrier&apos;s hull shape spreads its mass across an enormous hollow volume, keeping its average density below water&apos;s — weight alone never determines the outcome without accounting for volume.</p>}
      />

      <QuickCheck
        question="A small pebble sinks in water, but a large inflatable raft carrying several people floats easily. What determines this outcome?"
        options={[
          { text: "The raft's average density (mass spread across a large air-filled volume) is lower than water's, while the pebble's density is higher", correct: true, explanation: "Correct. It's density, not total weight, that determines floating — the raft's air-filled volume keeps its average density below water's even while carrying real weight, while the solid pebble's density exceeds water's regardless of its small size." },
          { text: "The raft floats purely because it's much bigger than the pebble", correct: false, explanation: "Size alone doesn't guarantee floating — a solid object of any size denser than water sinks. The raft's large air-filled volume relative to its mass is what lowers its average density, not size by itself." },
          { text: "Air pressure from above pushes the raft up but not the pebble", correct: false, explanation: "Atmospheric air pressure acts on both objects roughly equally and isn't the deciding factor — buoyant force from displaced water, driven by relative density, is what separates floating from sinking here." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Density (mass ÷ volume)"
        fields={[
          { key: "massGrams", label: "Mass (grams)", defaultValue: 60, step: 1 },
          { key: "volumeCm3", label: "Volume (cm³)", defaultValue: 100, step: 1 },
        ]}
        resultLabel="Density (g/cm³) — below 1.0 floats in water"
        formula="densityFromMassVolume"
        formatResult="number"
      />
      <EntryCalculator
        title="Buoyant force (Archimedes' principle: F = ρ × g × V)"
        fields={[
          { key: "fluidDensityKgM3", label: "Fluid density (kg/m³, water = 1000)", defaultValue: 1000, step: 10 },
          { key: "volumeM3", label: "Volume of fluid displaced (m³)", defaultValue: 0.01, step: 0.001 },
        ]}
        resultLabel="Buoyant force (newtons)"
        formula="buoyantForce"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a large ship, remember it floats because of shape and average density, not because steel is somehow lightweight.",
          "Try the density calculator above with an ice cube's numbers (density ~0.92 g/cm³) to see why ice floats in liquid water.",
          "Notice how much lighter your body feels in a pool versus on land — that's buoyant force partially counteracting gravity, not an actual change in your weight.",
          "Read the related entry on Matter & States of Matter to connect density changes to phase transitions like ice forming from liquid water.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why do ships made of steel float?", answer: "A ship's hull shape spreads its steel mass across a large, mostly hollow volume, keeping the ship's average density below water's — even though solid steel itself is nearly 8 times denser than water and sinks on its own." },
          { question: "What is Archimedes' principle?", answer: "Buoyant force on an object equals the weight of the fluid it displaces. This is why shape matters as much as material — displacing more fluid for the same weight increases the upward buoyant force." },
          { question: "Why does ice float on water?", answer: "Ice is about 9% less dense than liquid water (roughly 0.92 g/cm³ versus 1.0 g/cm³), because water molecules form a more open crystal structure when frozen — an unusual property most substances don't share." },
          { question: "How do submarines sink and float on command?", answer: "Submarines use ballast tanks that can be filled with seawater (to sink, by raising average density) or compressed air (to surface, by lowering average density), allowing precise control over buoyancy including holding a constant depth." },
          { question: "Does an object's weight change underwater?", answer: "No — an object's actual weight (from gravity) stays the same underwater. What changes is that an upward buoyant force is added, partially or fully counteracting gravity, which is why objects feel lighter when submerged." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
