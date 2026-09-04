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
  title: "What Water Pressure Actually Measures (And Why It Changes)",
  category: "home-diy-knowledge",
  order: 14,
  subtopic: "plumbing-basics-and-common-fixes",
  tags: ["water pressure", "psi", "static water pressure", "pressure-reducing valve", "home plumbing basics"],
  date: "2026-09-04",
  updated: "2026-09-04",
  lastReviewed: "2026-09-04",
  excerpt: "Water pressure measures force pushing on a fixed area, in pounds per square inch — and elevation alone, not just pipe size or distance, changes that number.",
  summary: "Water pressure, measured in pounds per square inch (psi), is a measure of how hard water pushes against a given area inside a pipe — a number shaped by the supply source, by any pressure-reducing valve regulating it, and, independent of both, by simple elevation, since every foot a home's plumbing sits above (or below) the source changes the reading by a fixed, predictable amount.",
  sources: [
    { label: "IAPMO — International Association of Plumbing and Mechanical Officials", url: "https://www.iapmo.org" },
    { label: "AWWA — American Water Works Association", url: "https://www.awwa.org" },
    { label: "ASPE — American Society of Plumbing Engineers", url: "https://www.aspe.org" },
  ],
  seeAlso: [
    "home-diy-knowledge/how-a-toilet-actually-flushes-and-refills",
    "home-diy-knowledge/why-a-faucet-drips-explained",
    "home-diy-knowledge/how-a-p-trap-actually-stops-sewer-smell",
    "home-diy-knowledge/how-central-air-conditioning-actually-cools-a-house",
    "home-diy-knowledge/how-a-plunger-actually-clears-a-clog",
  ],
  glossary: [
    { term: "PSI", definition: "Pounds per square inch — the standard unit for water pressure, measuring how much force water exerts against every square inch of the surface it's pushing on, such as a pipe wall." },
    { term: "Static pressure", definition: "The water pressure measured at a fixture when no water is actively flowing anywhere else in the system — the baseline reading most household pressure tests measure." },
    { term: "Water hammer", definition: "A banging or knocking noise in pipes caused by a sudden pressure spike when fast-moving water is abruptly stopped, such as when a valve or washing machine solenoid closes quickly." },
    { term: "Pressure-reducing valve (PRV)", definition: "A valve installed where a home's plumbing meets the municipal supply that automatically throttles down incoming pressure to a safer, more consistent target range." },
    { term: "Head", definition: "The height of a column of water above a given point, expressed in feet — the basis for how elevation directly translates into a specific, calculable amount of water pressure." },
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
          "Water pressure measures force pushing on a fixed area, expressed in pounds per square inch (psi) — a real physical quantity, not just a vague sense of how \"strong\" the water feels.",
          "Elevation alone changes pressure by a fixed, predictable amount: roughly 0.433 psi for every foot of height difference, independent of pipe size or how far the water traveled to get there.",
          "A pressure-reducing valve, where installed, actively regulates incoming supply pressure down to a safer target range through a continuous feedback loop, not a one-time adjustment.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Water pressure is a measurement of how hard water is pushing against the inside of a pipe or fixture, expressed in pounds per square inch, or psi. It&apos;s not the same thing as how much water comes out — that&apos;s flow rate, a different measurement entirely. Pressure is shaped mainly by the municipal supply system and, separately, by simple elevation: water delivered to a house on a hill, or to an upper floor of a building, arrives with less pressure than the exact same supply measured at ground level, because some of that pressure gets used up lifting the water higher.</div>}
        detailed={<div className="prose-p">Pressure, in pounds per square inch (<TermLink href="/home-diy-knowledge/what-water-pressure-actually-measures">PSI</TermLink>), is a measure of force distributed over area — how hard water pushes outward against every square inch of pipe wall or fixture opening it contacts. The number most homeowners care about is <TermLink href="/home-diy-knowledge/what-water-pressure-actually-measures">static pressure</TermLink>: the reading at a fixture when nothing else in the house is drawing water. That reading comes from two layers stacked on top of each other. The first is the municipal system itself — water utilities typically maintain their distribution system within a target pressure range using pumps and elevated storage tanks, delivering water to a connected home at a starting pressure. The second layer is pure physics: elevation. A column of water exerts pressure on whatever sits below it based purely on its height, called <TermLink href="/home-diy-knowledge/what-water-pressure-actually-measures">head</TermLink> — roughly 0.433 psi of pressure for every foot that column is tall. That relationship works in both directions: a fixture on an upper floor of a building sits above the supply line, effectively subtracting that many feet worth of pressure from whatever arrived at ground level, while a fixture in a low-lying basement can read slightly higher for the same reason in reverse. Where incoming municipal pressure runs higher than what household plumbing and appliances are rated to handle safely, a <TermLink href="/home-diy-knowledge/what-water-pressure-actually-measures">pressure-reducing valve</TermLink> (PRV) is installed to bring it down — and it does that continuously, sensing downstream pressure and throttling flow through it to hold a target range, the same sense-compare-adjust pattern behind a home thermostat.</div>}
      />
      <FootnoteAside>A sudden pressure spike is a different phenomenon from steady static pressure — <TermLink href="/home-diy-knowledge/what-water-pressure-actually-measures">water hammer</TermLink> happens when fast-moving water is abruptly stopped, and the water&apos;s own momentum converts into a brief, sharp pressure surge that can be heard as a bang or knock in the pipes.</FootnoteAside>

      <p>
        Because pressure and flow are measuring two different things, a home can have plenty of one and not enough of the other — which is exactly why diagnosing &quot;weak water&quot; correctly means figuring out which of the two is actually the problem. Supply pressure isn&apos;t just background trivia, either — a toilet&apos;s <TermLink href="/home-diy-knowledge/how-a-toilet-actually-flushes-and-refills">fill valve</TermLink> depends on it to refill the tank at a reasonable pace after every flush. It&apos;s a related but distinct kind of pressure that a <TermLink href="/home-diy-knowledge/how-a-plunger-actually-clears-a-clog">plunger</TermLink> relies on downstream of a fixture — creating a short-lived pressure differential in the trap rather than tapping into the supply system&apos;s steady static pressure at all.
      </p>

      <QuickCheck
        question="What does a water pressure reading, in psi, actually measure?"
        options={[
          { text: "How many gallons of water flow out of a fixture per minute", correct: false, explanation: "That's flow rate, a related but separate measurement — pressure and flow can move somewhat independently of each other." },
          { text: "How much force the water exerts against every square inch of the pipe or fixture it's pushing against", correct: true, explanation: "Correct. Pounds per square inch is literally a measure of force distributed over area, describing how hard the water is pushing, not how much of it is moving." },
          { text: "The total volume of water currently stored in the home's plumbing system", correct: false, explanation: "Pressure isn't a stored quantity or volume — it's a force measurement that exists continuously as long as water fills the system, regardless of how much total water that represents." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Testing static pressure at an outdoor hose bib (baseline case)</h3>
      <p>
        A homeowner screws a simple pressure gauge onto an outdoor hose bib and reads the static pressure with no other fixtures running in the house. The gauge shows a number in psi — commonly somewhere in a range plumbing codes generally consider safe for household fixtures and appliances. That single number reflects the municipal supply pressure at that specific point, adjusted for that fixture&apos;s elevation relative to where the supply line enters the property.
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same supply reads differently on different floors (edge case / variation)</h3>
      <div className="prose-p">
        A three-story home is fed by a single municipal supply line entering at ground level. A pressure gauge at a ground-floor hose bib reads noticeably higher than a gauge connected at a third-floor bathroom fixture, even though both are drawing from the exact same source at the exact same moment. The difference isn&apos;t a plumbing defect — it&apos;s the physical cost of lifting that water roughly twenty feet higher, which reduces pressure by a predictable, calculable amount based purely on that height difference.
      </div>
      <QuickCheck
        question="A home's ground-floor faucet and third-floor faucet are fed by the same supply line, but the third-floor faucet consistently reads lower pressure. What best explains this?"
        options={[
          { text: "The third-floor pipes must be a smaller diameter than the ground-floor pipes", correct: false, explanation: "Pipe diameter affects flow rate more directly than it explains a predictable, elevation-based pressure difference between floors on the same supply." },
          { text: "The third floor sits higher above the supply source, and lifting water that additional height uses up a predictable amount of pressure along the way", correct: true, explanation: "Correct. Elevation reduces pressure by a fixed amount per foot of height gained, which explains a consistent difference between floors fed by the same source." },
          { text: "The water utility deliberately reduces pressure specifically for upper floors of tall buildings", correct: false, explanation: "Utilities don't target pressure by floor within an individual building — the difference is a physical consequence of elevation within the building's own plumbing, not a utility-side adjustment." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A pressure-reducing valve quietly protects a home&apos;s plumbing (real-world / applied case)</h3>
      <p>
        A home sits close to a municipal pumping station, where incoming supply pressure runs well above what most household fixtures and appliances are rated for. Rather than letting that full pressure reach every fixture, a pressure-reducing valve installed at the main shutoff continuously senses the pressure downstream and throttles the flow through it, holding the home&apos;s internal plumbing to a lower, safer, more stable range. The valve isn&apos;t a one-time adjustment — it&apos;s actively regulating in real time, the same way a thermostat continuously compares a sensed value against a target rather than setting it once and walking away.
      </p>
      <QuickCheck
        question="Why might a home have a pressure-reducing valve installed even though its municipal water supply is well above the minimum needed for normal use?"
        options={[
          { text: "To increase water pressure further for stronger showers and faster-filling appliances", correct: false, explanation: "A pressure-reducing valve only reduces pressure — it has no mechanism to increase it above what's already arriving from the supply." },
          { text: "To bring unusually high incoming supply pressure down to a safer, more consistent range for household plumbing and appliances", correct: true, explanation: "Correct. When municipal pressure runs higher than what fixtures, pipes, and appliances are rated to handle safely, a PRV throttles it down and holds it in a protective range." },
          { text: "To filter sediment and mineral particles out of the incoming water supply", correct: false, explanation: "That's the job of a separate whole-house filter or sediment filter — a pressure-reducing valve regulates pressure specifically, not water quality or particulate content." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Same supply, different elevation, different reading"
        type="comparison"
        svgSrc="/diagrams/home-diy-knowledge-what-water-pressure-actually-measures-comparison.svg"
        altText="A comparison diagram showing water pressure measured at a home's ground floor versus its third floor from the same municipal supply: the ground floor reading is higher and the third floor reading is lower, because each foot of elevation gained reduces static water pressure by about 0.433 psi."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Estimate pressure from elevation</h2>
      <p>
        Because pressure from a water column depends purely on height, the relationship can be calculated directly: pressure in psi equals the height of the column in feet, multiplied by roughly 0.433.
      </p>
      <EntryCalculator
        title="Estimate static pressure change from a height difference"
        description="Enter a height difference to see how many psi it adds or subtracts, based on the standard hydrostatic pressure relationship for water."
        fields={[
          { key: "heightFeet", label: "Height difference", defaultValue: 20, step: 1, suffix: "ft" },
        ]}
        resultLabel="Pressure from elevation (psi)"
        formula="waterPressureFromHeightFeet"
        formatResult="number"
        disclaimer="Based on the standard hydrostatic pressure relationship for water (about 0.433 psi per foot of height). A positive height means a supply point below a fixture; the same relationship applies in reverse for a fixture below its supply source."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating water pressure and water flow rate as the same measurement.", fix: "Understand pressure (force per area) and flow (volume over time) as related but distinct — a fixture can have solid pressure but weak flow due to a clog or partially closed valve." },
          { mistake: "Adjusting or removing a pressure-reducing valve because pressure feels low, without understanding its protective role.", fix: "Have a licensed plumber diagnose and adjust a PRV rather than bypassing or removing it, since it's typically protecting the home's plumbing from unsafe incoming pressure." },
          { mistake: "Assuming persistently high pressure readings are simply a bonus with no downside.", fix: "Recognize that sustained pressure above the range recommended by plumbing codes accelerates wear on pipes, fittings, and appliances, and increases water hammer risk." },
        ]}
      />
      <MisconceptionCallout
        myth="Higher water pressure is always better, with no real downside as long as the pipes don't leak."
        reality={<p>Pressure above the range most plumbing codes and appliance manufacturers recommend puts sustained extra stress on pipe joints, fixture seals, and appliance components, accelerating wear and increasing the odds of a sudden failure or a leak developing over time. It also makes water hammer more forceful when a valve does close quickly. A pressure-reducing valve exists specifically because more pressure isn&apos;t simply better past a certain point — it&apos;s a tradeoff that plumbing codes and appliance ratings are built around, not unlike the way <TermLink href="/home-diy-knowledge/how-central-air-conditioning-actually-cools-a-house">central air conditioning</TermLink> relies on controlling refrigerant pressure precisely rather than simply maximizing it.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Test your home's static water pressure with a simple hose-bib pressure gauge from a hardware store.",
          "Compare your reading against the safe range typically referenced in local plumbing code.",
          "Remember that a reading taken on an upper floor will read lower than the same supply measured at ground level, purely from elevation.",
          "Have a licensed plumber inspect or adjust a pressure-reducing valve rather than adjusting it yourself if pressure seems unusually high or low.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is normal water pressure for a house?", answer: "Most plumbing codes and fixture manufacturers reference a range generally considered safe for household use, with a pressure-reducing valve commonly installed to keep incoming supply within that range where municipal pressure runs higher." },
          { question: "Why is water pressure different on the second floor of a house?", answer: "Elevation itself reduces pressure by a fixed, predictable amount per foot of height gained — a fixture on an upper floor sits higher above the supply source than one on the ground floor, which uses up part of the available pressure." },
          { question: "What does psi mean for water pressure?", answer: "PSI stands for pounds per square inch, the standard unit for measuring how much force water exerts against a given area, such as the inside wall of a pipe." },
          { question: "Why is my water pressure suddenly low?", answer: "Common causes include a partially closed shutoff or pressure-reducing valve, sediment buildup restricting flow, or a leak elsewhere in the system — a licensed plumber can pressure-test the system to isolate the cause." },
          { question: "What does a pressure-reducing valve do?", answer: "It continuously senses the water pressure downstream of it and throttles incoming flow to hold that pressure within a safer, more consistent target range, protecting household plumbing and appliances from pressure that's higher than they're rated for." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
