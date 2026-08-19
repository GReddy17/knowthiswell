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
  title: "Electricity & Magnetism Basics",
  category: "general-science-facts",
  order: 4,
  subtopic: "physical-science",
  tags: ["electricity", "magnetism", "circuits", "ohms law", "physics", "series and parallel circuits", "magnetic poles"],
  date: "2026-08-16",
  updated: "2026-08-19",
  lastReviewed: "2026-08-19",
  excerpt: "How electric current, voltage, and resistance relate through Ohm's law, why magnets have poles, series vs. parallel circuits, and why electricity and magnetism are one connected force.",
  summary: "Electric current is the flow of charge through a circuit, driven by voltage and limited by resistance (Ohm's law: V = IR). Moving electric charge also creates magnetism — the two are linked, not separate forces.",
  sources: [
    { label: "NIST — Electricity Basics", url: "https://www.nist.gov/pml/weights-and-measures/si-units-electric-current" },
    { label: "Encyclopaedia Britannica — Ohm's Law", url: "https://www.britannica.com/science/Ohms-law" },
  ],
  seeAlso: [
    "general-science-facts/forces-and-motion",
    "general-science-facts/atoms-and-elements",
  ],
  glossary: [
    { term: "Current", definition: "The rate of flow of electric charge, measured in amperes (A)." },
    { term: "Voltage", definition: "The electrical 'push' driving current through a circuit, measured in volts (V)." },
    { term: "Resistance", definition: "How strongly a material opposes current flow, measured in ohms (Ω)." },
    { term: "Electromagnet", definition: "A magnet created by running electric current through a coiled wire." },
    { term: "Magnetic pole", definition: "One of the two ends of a magnet (north and south) where the magnetic field is strongest; like poles repel and opposite poles attract." },
    { term: "Series circuit", definition: "A circuit with a single loop, so the same current flows through every component in sequence — if one component's path breaks, current stops everywhere." },
    { term: "Parallel circuit", definition: "A circuit with multiple separate branches connected across the same two points, so each branch gets the same voltage and can carry current independently of the others." },
    { term: "Electrical power", definition: "The rate at which electrical energy is converted to another form (heat, light, motion), measured in watts (W) and equal to voltage times current (P = VI)." },
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
          "Electric current is charge in motion, driven by voltage and limited by resistance — related by Ohm's law: V = IR.",
          "Electricity and magnetism aren't separate forces — moving electric charge always creates a magnetic field, which is how electromagnets and motors work.",
          "Higher resistance for the same voltage means less current flows — this is exactly how a dimmer switch or a thinner wire changes brightness or heat output.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Electricity is the flow of tiny charged particles — usually electrons — through a wire, similar to water flowing through a pipe. <TermLink href="/general-science-facts/electricity-and-magnetism-basics">Voltage</TermLink> is like water pressure pushing that flow; <TermLink href="/general-science-facts/electricity-and-magnetism-basics">current</TermLink> is how much charge actually flows per second; <TermLink href="/general-science-facts/electricity-and-magnetism-basics">resistance</TermLink> is anything that makes flow harder, like a narrow section of pipe. Magnetism shows up whenever electric charge moves — which is why running current through a coiled wire makes it magnetic.</div>}
        detailed={<div className="prose-p">Ohm&apos;s law formalizes the relationship: voltage equals current times resistance (V = IR). Increase voltage and current rises proportionally; increase resistance and current falls for the same voltage. Electricity and magnetism are unified as electromagnetism — a moving electric charge generates a magnetic field around it (discovered by Hans Christian Ørsted in 1820), and conversely, a changing magnetic field can induce electric current in a nearby conductor (Faraday&apos;s law, 1831). This second effect is how every electric generator and power plant turbine actually produces electricity — by spinning a magnet near a coil of wire, not by &quot;making&quot; electrons from nothing.</div>}
      />
      <FootnoteAside>James Clerk Maxwell unified electricity, magnetism, and light into one set of four equations in the 1860s — Maxwell&apos;s equations remain the foundation of all classical electromagnetism and predicted the existence of radio waves before anyone had built a radio.</FootnoteAside>

      <p>
      Set electromagnets aside for a moment and look at an ordinary bar magnet, the kind stuck to a fridge. Every magnet has two <TermLink href="/general-science-facts/electricity-and-magnetism-basics">magnetic poles</TermLink>, labeled north and south, and the rule governing them is simple and absolute: like poles repel, opposite poles attract. That force comes from the same underlying cause as an electromagnet&apos;s field — inside the magnet&apos;s atoms, electrons behave like countless tiny current loops, and in a magnetized material enough of them line up in the same direction that their fields add together instead of canceling out, producing one net field with a north and south end. A compass needle is just a small, freely spinning magnet: its north pole is pulled toward Earth&apos;s magnetic south pole (which sits near the geographic North Pole), which is why it points north. Cut a bar magnet in half and you don&apos;t get an isolated north pole and an isolated south pole — you get two smaller magnets, each with its own north and south end, because the alignment (not some physical &quot;north chunk&quot;) is what creates a pole in the first place.
      </p>

      <p>
      Ohm&apos;s law is simple to state, but it explains a surprising range of everyday electrical behavior once you run real numbers through it.
      </p>

      <QuickCheck
        question="A circuit's resistance doubles while the voltage stays the same. What happens to the current?"
        options={[
          { text: "Current doubles too, since resistance and current move together", correct: false, explanation: "Resistance and current move in opposite directions for a fixed voltage — more resistance restricts flow, it doesn't increase it." },
          { text: "Current is cut in half", correct: true, explanation: "Correct. From I = V/R, doubling resistance with voltage unchanged halves the current — this is exactly why a dimmer switch (which adds resistance) reduces a bulb's brightness." },
          { text: "Current stays exactly the same, since voltage didn't change", correct: false, explanation: "Voltage isn't the only factor — Ohm's law (V = IR) means current depends on both voltage and resistance together." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A simple flashlight circuit (baseline case)</h3>
      <div className="prose-p">
      A flashlight bulb with 6 ohms of resistance is connected to a 3-volt battery. From I = V/R: current = 3V ÷ 6Ω = 0.5 amps. That&apos;s the current flowing through the bulb&apos;s filament, heating it enough to glow.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why thin wires overheat (edge case / variation)</h3>
      <div className="prose-p">
      A thin wire has higher resistance per meter than a thick one, because there&apos;s less cross-sectional area for charge to flow through. Push the same current through a wire that&apos;s too thin for the load, and the wire&apos;s resistance converts more of that electrical energy into heat (power = I²R) — which is exactly why household wiring is sized to the expected current, and why an overloaded extension cord can get hot enough to start a fire.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How an electric motor turns current into motion (real-world / applied case)</h3>
      <div className="prose-p">
      Inside an electric motor, current flows through a coil of wire sitting inside a magnetic field. That moving current experiences a force from the magnetic field (called the Lorentz force), which pushes the coil to rotate. Reverse the direction of current at just the right moment as the coil spins, and that push keeps happening in a way that sustains continuous rotation — turning electrical energy directly into mechanical motion, no combustion involved.
      </div>

      <QuickCheck
        question="An electric generator and an electric motor both involve a coil of wire and a magnet. What's the key difference in how they work?"
        options={[
          { text: "A generator uses AC power and a motor uses DC power", correct: false, explanation: "Both generators and motors can run on either AC or DC depending on design — that's not the fundamental distinction between them." },
          { text: "A generator converts motion into electric current; a motor converts electric current into motion", correct: true, explanation: "Correct. They're essentially the same device run in opposite directions — spinning a coil near a magnet (generator) induces current, while running current through a coil in a magnetic field (motor) produces spinning motion." },
          { text: "A generator only works with permanent magnets, a motor only works with electromagnets", correct: false, explanation: "Both types of devices can use either permanent magnets or electromagnets — that's a design choice, not a defining difference between the two." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 4: Why one dead bulb kills an old string of Christmas lights but not your kitchen outlet (real-world / applied case)</h3>
      <div className="prose-p">
      How components are wired together matters as much as the components themselves. In a <TermLink href="/general-science-facts/electricity-and-magnetism-basics">series circuit</TermLink>, everything sits on one single loop, so the same current has to pass through every component in turn — break the loop at any one point, and current stops flowing everywhere on it. Older strings of Christmas lights were wired this way, which is exactly why one burnt-out bulb could darken the entire string: it broke the only path current had. In a <TermLink href="/general-science-facts/electricity-and-magnetism-basics">parallel circuit</TermLink>, components are instead connected across separate branches that share the same two connection points, so each branch gets the full voltage and its own independent path for current. Household wiring uses parallel circuits for exactly this reason: a burnt-out lamp or a toaster switched off doesn&apos;t interrupt power to the refrigerator or the lights in another room, because each outlet is its own branch, not a link in a single chain. The tradeoff is that adding more parallel branches (more devices plugged in) lets more total current flow from the source, which is why overloading a single circuit with too many high-draw appliances can trip a breaker even though no single appliance is at fault.
      </div>

      <QuickCheck
        question="Why does unplugging one lamp in your living room not turn off the other lamps and appliances in the same room?"
        options={[
          { text: "Household outlets are wired in parallel, so each one has its own independent current path off the same shared voltage", correct: true, explanation: "Correct. In a parallel circuit, removing or switching off one branch doesn't break the path for the others — each outlet or fixture branches off independently, unlike a series circuit where everything shares one single loop." },
          { text: "Household outlets are wired in series, but each lamp has a built-in backup battery", correct: false, explanation: "Household wiring isn't series, and lamps don't carry backup batteries for this — the real explanation is the parallel wiring itself, which gives every branch its own independent path." },
          { text: "Modern lamps don't actually require a complete circuit to operate", correct: false, explanation: "Every lamp still needs a complete circuit to light up — what changed is that parallel wiring means unplugging one lamp only breaks that lamp's own branch, not the whole house's wiring." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="A simple circuit: voltage, current, and resistance"
        type="flow"
        svgSrc="/diagrams/general-science-facts-electricity-and-magnetism-basics-circuit.svg"
        altText="Diagram of a simple electric circuit showing a battery labeled with voltage, a resistor labeled with resistance, connecting wires, and an arrow showing the direction of current flow around the loop."
      />
      <p>
      Current flows in one continuous loop — from the battery&apos;s positive terminal, through the resistor (anything that uses the electricity, like a bulb or motor), and back to the battery&apos;s negative terminal. Break the loop anywhere and current stops flowing entirely, which is exactly what a switch does on purpose.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking current 'gets used up' as it flows around a circuit.", fix: "The same current flows through every point of a simple series circuit — energy is used up (converted to light, heat, or motion), but the charge itself isn't consumed." },
          { mistake: "Confusing voltage and current as the same thing.", fix: "Voltage is the driving 'pressure,' current is the actual flow rate — a 9V battery and a car battery can produce very different currents depending on the circuit's resistance, despite different voltages." },
          { mistake: "Assuming all magnets are permanent and unrelated to electricity.", fix: "Every magnetic field is ultimately caused by moving electric charge, whether that's current in a wire (electromagnet) or electrons spinning within atoms (permanent magnet)." },
          { mistake: "Assuming all circuits behave like a single loop, so one broken link always kills everything downstream.", fix: "That's only true for a series circuit. In a parallel circuit — how household wiring is done — each branch has its own independent path, so one dead component doesn't cut power to the rest." },
        ]}
      />
      <MisconceptionCallout
        myth="Electric current flows through a wire almost instantly, at close to the speed the electrons themselves are moving."
        reality={<p>Individual electrons in a wire actually drift extremely slowly — often just millimeters per second. What travels fast (close to the speed of light in the wire) is the electric field that pushes all the electrons in the circuit to start moving at nearly the same time, like a long line of train cars all jolting forward together the instant the engine pulls, even though no single car moves quickly. That&apos;s why a light switch seems to work instantly, even though the electrons themselves are barely crawling.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Current in a simple circuit (Ohm's law: I = V/R)"
        fields={[
          { key: "voltage", label: "Voltage (V)", defaultValue: 9, step: 0.5 },
          { key: "resistance", label: "Resistance (ohms)", defaultValue: 3, step: 0.5 },
        ]}
        resultLabel="Current (amps)"
        formula="ohmsLawCurrent"
        formatResult="number"
      />
      <EntryCalculator
        title="Electrical power (P = V × I)"
        fields={[
          { key: "voltage", label: "Voltage (V)", defaultValue: 120, step: 1 },
          { key: "current", label: "Current (amps)", defaultValue: 2, step: 0.1 },
        ]}
        resultLabel="Power (watts)"
        formula="electricalPower"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check the wattage rating on an extension cord before plugging in a high-draw appliance — it exists to prevent the overheating problem in Example 2.",
          "Next time you see a dimmer switch, remember it's literally adding resistance to reduce current and dim the bulb.",
          "Look for the electromagnet inside a doorbell or a relay click — it's one of the simplest visible examples of current creating magnetism.",
          "Look at your home's breaker panel and notice it's split into multiple circuits — that's the parallel-wiring principle in action, isolating problems to one branch instead of the whole house.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between AC and DC electricity?", answer: "DC (direct current) flows in one constant direction, like from a battery. AC (alternating current) rapidly reverses direction — usually 50 or 60 times per second — which is the standard for household power because it's easier to transmit efficiently over long distances." },
          { question: "Why do birds not get electrocuted sitting on power lines?", answer: "A bird on a single wire isn't providing a path to the ground or to a different voltage — current only flows when there's a difference in voltage across two points the bird touches, and both of the bird's feet are at the same voltage on one wire." },
          { question: "Is static electricity the same as the electricity in a wall outlet?", answer: "Both are the same underlying phenomenon — electric charge — but static electricity is charge sitting still (built up by friction) and released all at once, while circuit electricity is charge flowing continuously and steadily." },
          { question: "How does a magnet attract metal without touching it?", answer: "A magnet creates a magnetic field that extends into the space around it; certain metals (like iron) have electrons that align with that field, creating an attractive force across the gap — no physical contact needed for the field itself to act." },
          { question: "What's the difference between series and parallel circuits?", answer: "A series circuit has one single loop, so every component shares the same current and a break anywhere stops the whole loop. A parallel circuit has multiple independent branches across the same voltage, so a break in one branch doesn't affect the others — this is why household wiring uses parallel circuits." },
          { question: "Why does a compass point north?", answer: "A compass needle is a small, freely spinning magnet. Its north pole is attracted toward Earth's magnetic south pole, which is located near the geographic North Pole — opposite poles attract, so the needle's north end swings to point roughly toward true north." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
    </>
  );
}
