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
  title: "What Amps, Volts, and Watts Actually Measure (And How They Relate)",
  category: "home-diy-knowledge",
  order: 7,
  subtopic: "electrical-basics-and-safety",
  tags: ["amps volts watts", "electrical units", "watts law", "ohms law", "home electrical basics"],
  date: "2026-09-03",
  updated: "2026-09-03",
  lastReviewed: "2026-09-03",
  excerpt: "Volts measure electrical pressure, amps measure flow rate, and watts measure the power delivered — related by the formula watts equal volts times amps.",
  summary: "Volts, amps, and watts measure three different but connected things about electricity — voltage is the electrical pressure pushing current along, amperage is the rate that current actually flows, and wattage is the resulting power, calculated as volts multiplied by amps.",
  sources: [
    { label: "NIST — National Institute of Standards and Technology", url: "https://www.nist.gov" },
    { label: "ESFI — Electrical Safety Foundation International", url: "https://www.esfi.org" },
    { label: "OSHA — Occupational Safety and Health Administration", url: "https://www.osha.gov" },
  ],
  seeAlso: [
    "home-diy-knowledge/how-a-circuit-breaker-actually-protects-your-home",
    "home-diy-knowledge/what-actually-happens-when-you-overload-a-circuit",
    "home-diy-knowledge/why-gfci-outlets-exist",
  ],
  glossary: [
    { term: "Voltage", definition: "The electrical pressure difference that pushes current through a circuit, measured in volts." },
    { term: "Amperage", definition: "The rate at which electric current flows past a point in a circuit, measured in amps." },
    { term: "Wattage", definition: "The rate of electrical power delivered or consumed, measured in watts, calculated as voltage multiplied by amperage." },
    { term: "Resistance", definition: "A material's opposition to current flow, measured in ohms, which relates voltage and current through Ohm's law." },
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
          "Volts measure electrical pressure, amps measure the rate of current flow, and watts measure the resulting power — three different quantities, not interchangeable words for the same thing.",
          "The three are linked by one formula: watts equal volts multiplied by amps, which is why the same wattage of power can be delivered at high voltage and low current, or low voltage and high current.",
          "A device's amp draw, not its voltage rating alone, is what a household circuit's wire gauge and breaker are actually sized to handle.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of electricity like water moving through a pipe. Voltage is the water pressure pushing it along. Amperage is how fast the water is actually flowing — the current. Wattage is the power you get out of the whole thing, and it depends on both: high pressure and a fast flow together deliver more power than either alone. The formula that ties them together is simple: watts = volts &#215; amps.</div>}
        detailed={<div className="prose-p">These three units describe three distinct roles in the same electrical circuit. <TermLink href="/home-diy-knowledge/what-amps-volts-and-watts-actually-measure">Voltage</TermLink> is the electrical potential difference between two points, the &quot;push&quot; that drives current through a circuit&apos;s <TermLink href="/home-diy-knowledge/what-amps-volts-and-watts-actually-measure">resistance</TermLink>. <TermLink href="/home-diy-knowledge/what-amps-volts-and-watts-actually-measure">Amperage</TermLink> is the actual rate of charge flow that results from that push meeting a given resistance — the relationship is Ohm&apos;s law, current = voltage &#247; resistance. <TermLink href="/home-diy-knowledge/what-amps-volts-and-watts-actually-measure">Wattage</TermLink> is the rate of energy delivered, and it&apos;s simply the product of the two: P = V &#215; I. That single multiplication has a real practical consequence — the same amount of power can be delivered as a high voltage moving a small current, or a low voltage moving a large current. A power grid&apos;s long-distance transmission lines exploit this deliberately: stepping voltage way up lets the same power travel as a much smaller current, and because resistive heating in a wire scales with the current squared (not the voltage), a smaller current means dramatically less energy wasted as heat along the way.</div>}
      />
      <FootnoteAside>Ohm&apos;s law (current = voltage &#247; resistance) and the power formula (power = voltage &#215; current) are the two equations nearly every other electrical calculation in a house — wire sizing, breaker ratings, appliance load — ultimately traces back to.</FootnoteAside>

      <p>
        Once amps, volts, and watts are separated into pressure, flow, and power, a lot of household electrical labeling stops being confusing — including why some heavy appliances run on a different voltage than everything else in the house.
      </p>

      <QuickCheck
        question="If two devices deliver the same wattage, but one runs on double the voltage of the other, what must be true about their current draw?"
        options={[
          { text: "The higher-voltage device draws exactly double the current of the lower-voltage device", correct: false, explanation: "It's the opposite direction — since watts = volts × amps, doubling the voltage for the same wattage means the current must be cut in half, not doubled." },
          { text: "The higher-voltage device draws half the current of the lower-voltage device, since watts = volts × amps stays fixed", correct: true, explanation: "Correct. To keep the same wattage, doubling voltage requires halving current — this is exactly why some appliances are designed to run at a higher voltage." },
          { text: "Voltage and current don't affect each other — wattage is a completely separate, unrelated measurement", correct: false, explanation: "Wattage is directly defined as the product of voltage and current, so changing one while holding wattage fixed always changes the other in the opposite direction." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Finding the amp draw of a standard 120-volt appliance (baseline case)</h3>
      <p>
        A space heater is rated at 1,200 watts and plugs into a standard 120-volt household outlet. Rearranging watts = volts &#215; amps to solve for amps gives current = watts &#247; volts, or 1,200 &#247; 120 = 10 amps. That&apos;s a useful number on its own: a 15-amp circuit has roughly 5 amps of headroom left for anything else plugged in alongside it.
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same wattage on a 240-volt circuit draws far less current (edge case / variation)</h3>
      <div className="prose-p">
        An electric clothes dryer rated at 4,800 watts runs on a 240-volt circuit rather than the standard 120 volts most outlets supply. Solving the same way, current = 4,800 &#247; 240 = 20 amps — far less than the roughly 40 amps that same wattage would require at 120 volts. This is exactly why heavy-draw appliances like dryers, ranges, and some water heaters are wired to run at double the standard household voltage: it lets them deliver a lot of power without demanding an impractically thick wire and an oversized breaker to carry the current safely.
      </div>
      <QuickCheck
        question="Why are high-power appliances like electric dryers often wired for 240 volts instead of the standard 120 volts?"
        options={[
          { text: "Because 240-volt appliances use less total power than the same appliance would at 120 volts", correct: false, explanation: "The wattage — the actual power delivered — doesn't change based on voltage alone; it's set by the appliance's design and its combination of voltage and current." },
          { text: "Because doubling the voltage lets the appliance draw half the current for the same wattage, which allows a thinner wire and a smaller breaker to safely carry the same power", correct: true, explanation: "Correct. Since watts = volts × amps, a higher voltage delivering the same wattage means proportionally lower current, which is easier and safer to wire for." },
          { text: "Because 120-volt circuits are not capable of carrying any current above 5 amps", correct: false, explanation: "Standard 120-volt household circuits commonly carry 15 or 20 amps — the issue with a very high-wattage appliance at 120 volts is that it would require an unusually large current, not that 120-volt circuits are capped at 5 amps." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Checking whether a kitchen circuit can handle several appliances at once (real-world / applied case)</h3>
      <p>
        A kitchen outlet is on a standard 15-amp, 120-volt circuit. A toaster rated at 900 watts and a coffee maker rated at 1,000 watts both get plugged in and switched on together. Converting each to amps: 900 &#247; 120 = 7.5 amps, and 1,000 &#247; 120 &#8776; 8.3 amps, for a combined draw of roughly 15.8 amps — already slightly over the circuit&apos;s 15-amp rating before anything else is added. That&apos;s the practical reason a breaker trips in exactly this kind of everyday scenario: the total current draw, not just the wattage printed on any single appliance, is what the circuit and its breaker are rated against.
      </p>
      <QuickCheck
        question="A 15-amp, 120-volt kitchen circuit is running a 900-watt toaster and a 1,000-watt coffee maker at the same time. What best explains why the breaker might trip?"
        options={[
          { text: "Neither appliance individually exceeds its own wattage rating, so the breaker tripping must be a malfunction", correct: false, explanation: "A breaker responds to the total current on the circuit, not to whether any single appliance is exceeding its own rating — two appliances well within their own limits can still combine to overload the shared circuit." },
          { text: "The combined current draw of both appliances, found by dividing each wattage by the voltage and adding the results, comes out close to or above the circuit's 15-amp rating", correct: true, explanation: "Correct. Converting each appliance's wattage to amps and adding them shows the combined draw is right at or over the circuit's rated capacity." },
          { text: "Coffee makers and toasters are not allowed to be plugged into the same outlet under any circumstances", correct: false, explanation: "There's no rule against which specific appliance types share an outlet — what matters is the combined current draw relative to the circuit's rated amperage." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Watts, volts, and amps: the power formula"
        type="detail"
        svgSrc="/diagrams/home-diy-knowledge-what-amps-volts-and-watts-actually-measure-detail.svg"
        altText="A formula triangle showing watts at the top, volts and amps at the bottom two corners, illustrating that watts equal volts multiplied by amps, and that covering any one of the three quantities shows how to solve for it from the other two."
      />
      <p>
        The triangle is a memory shortcut, not a separate law of physics — it just visualizes the one relationship, watts = volts &#215; amps, rearranged three different ways depending on which quantity is unknown.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating volts, amps, and watts as roughly interchangeable ways of describing \"how much electricity\" something uses.", fix: "Keep them separate: volts is pressure, amps is flow rate, watts is the resulting power — and only watts directly tells you the rate of energy an appliance consumes." },
          { mistake: "Adding up appliance voltages instead of their current draw when checking if a circuit is overloaded.", fix: "Convert each appliance's wattage to amps (amps = watts ÷ volts) and add the amp values — that total is what the circuit's breaker rating actually limits." },
          { mistake: "Assuming a higher-voltage appliance is automatically more dangerous or draws more current than a lower-voltage one.", fix: "Check the actual amperage or wattage rating — a higher voltage paired with the same or lower wattage can mean a lower current draw, not a higher one." },
        ]}
      />
      <MisconceptionCallout
        myth="Voltage is what makes electricity dangerous, so a low-voltage source is basically harmless."
        reality={<p>It&apos;s the current (amps) passing through the body that causes physiological harm, not voltage by itself — but voltage is what pushes that current through the body&apos;s resistance in the first place, so the two aren&apos;t really separable in practice. A source with enough voltage to overcome the resistance of even slightly damp skin can still drive a harmful amount of current, which is why low-voltage claims of safety don&apos;t hold up in wet conditions. Treating any energized household wiring or outlet as hazardous, regardless of its labeled voltage, is the standard safety approach rather than assuming &quot;low voltage&quot; means &quot;low risk.&quot;</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Calculate power from volts and amps"
        description="Enter a circuit's voltage and an appliance's amperage draw to see the resulting wattage (watts = volts × amps)."
        fields={[
          { key: "volts", label: "Voltage (V)", defaultValue: 120 },
          { key: "amps", label: "Current (amps)", defaultValue: 10 },
        ]}
        resultLabel="Power (watts)"
        formula="wattsFromVoltsAndAmps"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check an appliance's nameplate for its wattage or amperage rating before assuming how much of a circuit's capacity it uses.",
          "Convert wattage to amps (amps = watts ÷ volts) when adding up several appliances on the same circuit, rather than adding wattages to a voltage figure.",
          "Remember that a higher circuit voltage, like the 240 volts used for some large appliances, generally means lower current for the same power — not automatically more danger.",
          "Read How a Circuit Breaker Actually Protects Your Home next to see exactly how a breaker uses this amperage figure to decide when to trip.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between amps, volts, and watts?", answer: "Volts measure electrical pressure, amps measure the rate of current flow, and watts measure the resulting power — related by the formula watts = volts × amps." },
          { question: "How do you convert watts to amps?", answer: "Divide watts by volts: amps = watts ÷ volts. For example, a 1,200-watt appliance on a 120-volt circuit draws 10 amps." },
          { question: "Why do some appliances use 240 volts instead of 120 volts?", answer: "A higher voltage lets an appliance deliver the same wattage while drawing less current, which allows a thinner wire and smaller breaker — that's why high-power appliances like dryers and ranges are often wired at 240 volts." },
          { question: "Is higher voltage always more dangerous than higher amperage?", answer: "It's actually current passing through the body that causes harm, but voltage is what drives that current through resistance — the two work together, so a low-voltage source isn't automatically safe, especially with wet skin lowering resistance." },
          { question: "How many amps can a 15-amp circuit actually handle?", answer: "A 15-amp breaker is rated to trip at or above 15 amps of sustained current, so the practical planning number for continuous loads is typically lower than that, following the common practice of leaving headroom below a breaker's full rating." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
