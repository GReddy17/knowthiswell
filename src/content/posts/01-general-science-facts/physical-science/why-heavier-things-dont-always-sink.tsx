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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Why Heavier Things Don't Always Sink",
  category: "general-science-facts",
  order: 58,
  subtopic: "physical-science",
  pillar: true,
  tags: ["density", "buoyancy", "Archimedes' principle", "ships and flotation", "physics misconceptions"],
  date: "2026-09-19",
  updated: "2026-09-19",
  lastReviewed: "2026-09-19",
  excerpt: "A massive steel cargo ship floats while a single steel bolt sinks — weight alone doesn't decide whether something floats; density relative to the fluid does.",
  summary: "Whether an object floats or sinks depends on its density compared to the fluid it's placed in, not its total weight — a huge steel ship floats because its hollow shape spreads that same steel mass over a large enough volume that the ship's overall (average) density is lower than water's, while a solid steel bolt, with the metal's full density and no hollow space, sinks. This is Archimedes' principle in action: an object floats when it can displace a weight of fluid equal to its own weight before it's fully submerged.",
  sources: [
    { label: "National Oceanic and Atmospheric Administration (NOAA) — Buoyancy and Ocean Science", url: "https://oceanservice.noaa.gov/" },
    { label: "Smithsonian National Museum of American History — Archimedes and Buoyancy", url: "https://americanhistory.si.edu/" },
    { label: "National Institute of Standards and Technology (NIST) — Density Reference Data", url: "https://www.nist.gov/" },
  ],
  seeAlso: [
    "general-science-facts/density-and-buoyancy",
    "general-science-facts/pressure",
    "general-science-facts/why-heavier-objects-dont-actually-fall-faster",
    "general-science-facts/matter-and-states-of-matter",
  ],
  glossary: [
    { term: "Density", definition: "The mass of a substance packed into a given volume, commonly measured in kilograms per cubic meter or grams per cubic centimeter — a key factor, not total weight, that determines whether an object floats." },
    { term: "Archimedes' principle", definition: "The physical law stating that a fluid exerts an upward buoyant force on a submerged or floating object equal to the weight of the fluid the object displaces." },
    { term: "Buoyant force", definition: "The upward force a fluid exerts on an object placed in it, caused by pressure increasing with depth acting more strongly on the object's lower surface than its upper surface." },
    { term: "Displacement", definition: "The volume (or equivalent weight) of fluid that is pushed out of the way by an object placed into it — the basis for calculating the buoyant force acting on that object." },
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
          "Whether something floats or sinks depends on its density relative to the fluid it's in, not on its total weight — a massive object can float, and a tiny object can sink.",
          "A steel ship floats because its hollow hull spreads the same mass of steel over a large enough volume that the ship's overall average density is lower than water's.",
          "Archimedes' principle explains it directly: an object floats if it can displace a weight of fluid equal to its own total weight before going fully underwater.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A cargo ship weighing tens of thousands of tons floats just fine, while a single steel bolt dropped in a lake sinks straight to the bottom. If &quot;heavier sinks&quot; were the real rule, that shouldn&apos;t be possible &#8212; the ship is enormously heavier than the bolt. What actually decides it is how that weight is spread out: the ship&apos;s hollow shape means the same steel is spread across a huge volume, mostly filled with air, making the ship&apos;s overall density lower than water&apos;s, while the solid bolt is just as dense as steel itself, denser than water through and through.</div>}
        detailed={<div className="prose-p">Floating and sinking come down to <TermLink href="/general-science-facts/why-heavier-things-dont-always-sink">density</TermLink> &#8212; mass per unit volume &#8212; compared between the object and the fluid it&apos;s placed in, not total weight. <TermLink href="/general-science-facts/why-heavier-things-dont-always-sink">Archimedes&apos; principle</TermLink> explains the mechanism precisely: any object placed in a fluid experiences an upward <TermLink href="/general-science-facts/why-heavier-things-dont-always-sink">buoyant force</TermLink> equal to the weight of fluid it <TermLink href="/general-science-facts/why-heavier-things-dont-always-sink">displaces</TermLink>, because fluid pressure increases with depth and therefore pushes up on the object&apos;s lower surface harder than it pushes down on the upper surface. If an object can displace a weight of water equal to its own total weight before becoming fully submerged, it floats, settling at whatever depth makes those two weights match. A solid steel bolt is denser than water at every point, so even fully submerged it can never displace enough water to match its own weight &#8212; it sinks all the way. A steel ship&apos;s hull, by contrast, encloses a huge volume of air, so the ship&apos;s total mass (steel plus air plus cargo) divided by its total volume (hull plus enclosed air space) works out to less than water&apos;s density &#8212; letting it displace enough water to support its full weight while still partly above the surface.</div>}
      />
      <FootnoteAside>This is exactly why a punctured hull is so dangerous — flooding compartments replaces buoyant enclosed air with water, raising the ship&apos;s overall average density and reducing how much buoyant force it can generate, which is why modern ships are divided into watertight compartments to limit how much of that air volume any single leak can compromise.</FootnoteAside>

      <p>
        Once density (not weight) is understood as the deciding factor, it becomes possible to predict floating behavior for almost any object, from a coin to a cruise ship, just by comparing average density to the fluid&apos;s density.
      </p>

      <QuickCheck
        question="A large hollow plastic ball and a small solid steel ball bearing are placed in a bucket of water. The plastic ball weighs far less in total than the steel ball. What happens?"
        options={[
          { text: "The plastic ball floats and the steel ball sinks, because plastic's density is lower than water's while steel's density is much higher, regardless of their total weights", correct: true, explanation: "Correct. Floating depends on density comparison to the fluid, not total weight — a much lighter but lower-density object can float while a much heavier but higher-density object sinks." },
          { text: "The steel ball floats because it's heavier, and the plastic ball sinks because it's lighter", correct: false, explanation: "This reverses the actual outcome — floating isn't determined by which object weighs more, but by which object's density is lower than the surrounding fluid's." },
          { text: "Both objects float, since both are placed in the same water", correct: false, explanation: "Being in the same fluid doesn't guarantee both float — each object's own density relative to that fluid's density determines its individual outcome, and steel's density is well above water's." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A solid steel bolt sinking (baseline case)</h3>
      <p>
        A solid steel bolt, with a density around 7,850 kg/m³, is dropped into a tank of fresh water, which has a density of about 1,000 kg/m³. Since the bolt&apos;s density is nearly eight times that of water at every point throughout its solid volume, it can never displace enough water to generate a buoyant force equal to its own weight — even fully submerged, the water it displaces weighs far less than the bolt itself. The bolt sinks straight to the bottom, exactly as Archimedes&apos; principle predicts for any object denser than its surrounding fluid throughout its entire volume.
      </p>
      <QuickCheck
        question="Why does a solid steel bolt sink in water, when analyzed through Archimedes' principle?"
        options={[
          { text: "Even fully submerged, the water it displaces weighs less than the bolt itself, because steel is far denser than water throughout the bolt's entire solid volume", correct: true, explanation: "Correct. A uniformly dense, solid object denser than the fluid can never displace enough fluid weight to match its own weight, so it sinks all the way rather than reaching equilibrium at the surface." },
          { text: "Steel bolts are simply too heavy in absolute terms for any amount of water to support", correct: false, explanation: "Total weight isn't the deciding factor — a much heavier steel ship floats. The bolt sinks specifically because its density exceeds water's throughout its solid volume, not because of its absolute weight." },
          { text: "The bolt's small size prevents it from displacing any meaningful amount of water", correct: false, explanation: "Even a small object displaces a volume of water equal to its own volume when submerged — the issue isn't the amount displaced, it's that the displaced water's weight is still less than the denser bolt's weight." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same steel, shaped into a floating hull (edge case / variation)</h3>
      <div className="prose-p">
        Take that same mass of steel and reshape it into a hollow, boat-shaped hull enclosing a large volume of air, then place it in the same water. Now the total mass (steel plus enclosed air, which is negligible in comparison) is spread across a much larger total volume, dropping the hull&apos;s overall average density below water&apos;s 1,000 kg/m&#179;. The hull floats, settling low enough in the water that the volume of water it displaces weighs exactly as much as the hull itself &#8212; the identical steel that sank as a solid bolt now floats, purely because its shape changed how its mass is distributed across volume.
      </div>
      <QuickCheck
        question="The exact same mass of steel sinks as a solid bolt but floats when shaped into a hollow hull. What changed?"
        options={[
          { text: "Reshaping the steel into a hollow form spread the same mass across a much larger total volume, lowering its overall average density below water's, even though the mass of steel itself didn't change", correct: true, explanation: "Correct. Density is mass divided by volume — increasing the volume that mass occupies (via a hollow shape) lowers average density without changing the mass at all." },
          { text: "The steel itself became physically less dense once shaped into a hull", correct: false, explanation: "The steel material's own density is unchanged — what changed is the object's overall average density, since the hollow shape adds enclosed volume (mostly air) without adding proportional mass." },
          { text: "Water becomes less dense around hull-shaped objects specifically", correct: false, explanation: "Water's density doesn't change based on what's placed in it — the change enabling flotation is entirely in the object's own average density, from its new hollow shape." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why a punctured hull sinks a ship (real-world / applied case)</h3>
      <p>
        A cargo ship&apos;s hull is breached below the waterline, and seawater begins flooding into one of its compartments, displacing the air that had been keeping the ship&apos;s average density below water&apos;s. As more compartments flood, the volume of enclosed air shrinks while the ship&apos;s total mass (now including the flooded seawater) increases, pushing its overall average density up. If enough compartments flood, the ship&apos;s average density eventually exceeds water&apos;s, and it can no longer displace enough water to support its own weight at any depth — it sinks. Watertight compartment design exists specifically to limit how much of a ship&apos;s buoyant air volume any single breach can compromise, buying time and often preventing total loss.
      </p>
      <QuickCheck
        question="Why does flooding from a hull breach eventually cause a ship to sink, when the same steel structure normally floats?"
        options={[
          { text: "Flooding replaces buoyant enclosed air with heavy water, increasing the ship's total mass while reducing its usable volume, which raises its overall average density above water's", correct: true, explanation: "Correct. The ship's floating capability depended on its average density being below water's — flooding directly reverses the two things (added mass, lost effective air volume) that made that possible." },
          { text: "The breach itself directly increases the density of the surrounding seawater", correct: false, explanation: "The surrounding seawater's density doesn't change — what changes is the ship's own average density, as its enclosed air volume is replaced by flooding water." },
          { text: "Ships sink after a breach purely because the hole lets water pressure crush the hull", correct: false, explanation: "While hull damage is a structural concern, the actual sinking mechanism here is buoyancy-based: flooding raises the ship's average density above water's, eliminating the buoyant force needed to stay afloat." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Same steel, two shapes: solid bolt sinks, hollow hull floats"
        type="comparison"
        svgSrc="/diagrams/general-science-facts-why-heavier-things-dont-always-sink-comparison.svg"
        altText="Diagram comparing a solid steel bolt sinking to the bottom of a water tank because it cannot displace enough water to match its weight, versus the same mass of steel shaped into a hollow hull that floats because its enclosed air volume lowers its overall average density below water's."
      />
      <p>
        The mass of steel is identical in both panels — the only difference is how much volume (and enclosed air) that mass is spread across, which is exactly what average density measures.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Predicting whether an object will float based on its total weight rather than its density relative to the fluid.", fix: "Compare average density (mass divided by total volume, including any hollow or enclosed space) to the fluid's density instead — weight alone doesn't determine the outcome." },
          { mistake: "Assuming a material like steel or rock can never float under any circumstances.", fix: "Recognize that shape matters — spreading the same mass across enough enclosed volume (a hollow hull, a life jacket's foam) can bring the overall average density below the fluid's." },
          { mistake: "Underestimating how flooding even a small number of compartments can sink a large vessel.", fix: "Remember that flooding both adds mass and removes buoyant air volume simultaneously, which can push average density past the tipping point faster than intuition suggests." },
        ]}
      />
      <MisconceptionCallout
        myth="Heavier objects sink and lighter objects float — weight is what determines it."
        reality={<p>Floating and sinking depend on an object&apos;s density compared to the fluid it&apos;s in &#8212; not its total weight. A massive steel cargo ship floats because its hollow shape spreads the same steel mass across a large enough volume (mostly enclosed air) that its overall average density drops below water&apos;s, while a small, solid steel bolt sinks because its density, uniformly higher than water&apos;s throughout, never changes no matter how little it weighs in absolute terms. Archimedes&apos; principle makes this precise: an object floats only if it can displace a weight of fluid equal to its own total weight before going fully underwater &#8212; a condition governed by density and shape, never by weight alone.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Calculate an object's density from mass and volume"
        description="Compare the result to water's density (1,000 kg/m³, or 1 g/cm³) to predict whether an object of that overall density would float or sink."
        fields={[
          { key: "massGrams", label: "Mass (grams)", defaultValue: 500, step: 10 },
          { key: "volumeCm3", label: "Total volume, including any hollow space (cm³)", defaultValue: 800, step: 10 },
        ]}
        resultLabel="Density (grams per cm³)"
        formula="densityFromMassVolume"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a heavy object float or a light one sink, ask what its overall average density is compared to the fluid, not how much it weighs.",
          "Try floating a ball of aluminum foil, then crumple it tightly into a dense wad — the same mass will behave very differently depending on enclosed volume.",
          "Connect this to how life jackets work: foam has very low density, lowering a wearer's overall average density enough to float even fully clothed.",
          "Read the related entry on Density & Buoyancy for the full Archimedes' principle derivation and more worked density calculations.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why do heavy ships float while small objects like coins sink?", answer: "Floating depends on density relative to the fluid, not total weight. A ship's hollow hull spreads its steel mass across a large enough volume that its overall average density is lower than water's, while a solid coin's density is uniformly higher than water's throughout." },
          { question: "What is Archimedes' principle in simple terms?", answer: "It states that a fluid pushes up on any object placed in it with a force equal to the weight of fluid the object displaces — an object floats if it can displace enough fluid to match its own weight before going fully underwater." },
          { question: "Why does a ship sink after its hull is breached?", answer: "Flooding replaces the ship's buoyant enclosed air with heavy water, simultaneously adding mass and reducing usable volume, which raises the ship's overall average density until it exceeds water's and it can no longer float." },
          { question: "Can something made of a material denser than water ever float?", answer: "Yes, if it's shaped to enclose enough volume (like a hollow hull or a boat) that its overall average density — mass divided by total volume, including empty space — drops below the fluid's density." },
          { question: "Is density the same thing as weight?", answer: "No. Density is mass per unit volume, while weight is the total gravitational force on an object's entire mass. Two objects can have very different weights and still have the same density, or the same weight and very different densities." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
