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
  title: "Watts, Kilowatts & Reading an Electricity Bill",
  category: "units-measurement-conversions",
  order: 31,
  subtopic: "temperature-and-energy",
  tags: [
    "watts",
    "kilowatt hour",
    "electricity bill",
    "power vs energy",
    "unit conversion",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A watt measures how fast electricity is used, not how much — the actual amount billed is kilowatt-hours, which is power multiplied by the time it ran.",
  summary: "Watts and kilowatts measure electrical power — a rate — while the kilowatt-hour that actually appears on an electricity bill measures energy, calculated by multiplying an appliance's power rating by how long it ran.",
  sources: [
    { label: "US Energy Information Administration — Electricity Explained", url: "https://www.eia.gov/energyexplained/electricity/" },
    { label: "NIST — Units of Power and Energy", url: "https://www.nist.gov/pml" },
    { label: "US Department of Energy — Energy Saver", url: "https://www.energy.gov/energysaver" },
  ],
  seeAlso: [
    "units-measurement-conversions/understanding-btus-and-home-energy-ratings",
    "units-measurement-conversions/calories-vs-kilojoules",
  ],
  glossary: [
    {"term":"Watt (W)","definition":"The SI unit of power — the rate of energy use or transfer, equal to one joule per second. A 100-watt bulb uses energy twice as fast as a 50-watt bulb."},
    {"term":"Kilowatt (kW)","definition":"1,000 watts — a more convenient unit for describing the power draw of larger appliances like ovens, dryers, or air conditioners."},
    {"term":"Kilowatt-hour (kWh)","definition":"A unit of energy, not power — equal to using one kilowatt of power continuously for one hour. This is the unit electric utilities actually bill customers for."},
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
      "A watt is a unit of power — a rate — describing how fast electricity is used at a given moment, not a total amount of energy.",
      "A kilowatt-hour (kWh) is a unit of energy — power multiplied by time — and it's the actual quantity electric utilities bill for, not watts or kilowatts directly.",
      "To estimate an appliance's cost, convert its wattage to kilowatts, multiply by hours used, then multiply by your utility's price per kilowatt-hour.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/units-measurement-conversions/watts-kilowatts-and-reading-an-electricity-bill">watt</TermLink> tells you how fast an appliance uses electricity — a 1,500-watt space heater uses electricity 15 times faster than a 100-watt light bulb. But your electricity bill doesn&apos;t charge by wattage; it charges by <TermLink href="/units-measurement-conversions/watts-kilowatts-and-reading-an-electricity-bill">kilowatt-hours</TermLink> (kWh) — the total energy used, which depends on both the wattage *and* how long the appliance ran.</div>}
      detailed={<div className="prose-p">This is the classic distinction between power and energy that shows up throughout physics and everyday utility billing alike: <TermLink href="/units-measurement-conversions/watts-kilowatts-and-reading-an-electricity-bill">power</TermLink> (watts) is a rate — energy per unit time — while energy (kilowatt-hours) is the total amount actually consumed. The relationship is exactly analogous to speed and distance: just as driving at 60 mph for 2 hours covers 120 miles (speed × time = distance), running a 1,000-watt appliance for 2 hours consumes 2 kilowatt-hours (power × time = energy). Utilities bill in kilowatt-hours because that&apos;s the actual commodity delivered — a customer running a small appliance constantly can use more total energy (and pay more) than a customer running a large appliance briefly, even though the large appliance has the higher wattage at any given instant.</div>}
      />
      <FootnoteAside>James Watt, whose name the unit honors, never used the term himself — the watt was formally adopted as an SI unit in 1960, though it was named in his honor in 1882 by the British Association for the Advancement of Science, in recognition of his improvements to the steam engine.</FootnoteAside>

      <p>
      Once the power-versus-energy distinction is clear, estimating what any single appliance actually costs to run becomes a straightforward three-step calculation.
      </p>

      <QuickCheck
      question="A 2,000-watt appliance and a 200-watt appliance both run for exactly 1 hour. Which statement is correct?"
      options={[
      { text: "They use the same amount of energy, since energy only depends on time, not wattage", correct: false, explanation: "Energy depends on both power and time — a 2,000-watt appliance uses far more energy than a 200-watt appliance over the identical 1-hour period." },
      { text: "The 2,000-watt appliance uses 10 times more energy (2 kWh vs 0.2 kWh) over that hour, because it uses electricity 10 times faster", correct: true, explanation: "Correct. Power (wattage) is the rate; running both for the same duration means the higher-wattage appliance simply uses proportionally more total energy — 2,000W × 1h = 2 kWh versus 200W × 1h = 0.2 kWh." },
      { text: "It's impossible to compare them without knowing the electricity price", correct: false, explanation: "Comparing energy usage (kWh) doesn't require knowing the price — price only comes in when converting energy usage into a cost figure." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Estimating the cost of running a space heater (baseline case)</h3>
      <div className="prose-p">
      A 1,500-watt space heater runs for 5 hours at an electricity rate of $0.15 per kWh. Converting to kilowatts: 1,500 ÷ 1,000 = 1.5 kW. Energy used: 1.5 kW × 5 h = 7.5 kWh. Cost: 7.5 × $0.15 = $1.125, or a little over a dollar for that single evening of use.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Comparing a low-power device left on constantly (edge case / variation)</h3>
      <div className="prose-p">
      A 10-watt LED nightlight left on for the entire month (720 hours) uses: (10 ÷ 1,000) × 720 = 7.2 kWh — nearly matching the space heater&apos;s single 5-hour run above, despite the nightlight being 150 times lower in wattage. This illustrates why duration matters just as much as wattage: a low-power device left running continuously can accumulate meaningful total energy use over a long enough period.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Reading a real appliance label and estimating annual cost (real-world / applied case)</h3>
      <div className="prose-p">
      A refrigerator&apos;s energy label lists an estimated annual usage of 400 kWh, at an electricity rate of $0.15 per kWh. Annual cost: 400 × $0.15 = $60. Rather than calculating from a raw wattage (refrigerators cycle on and off, making their instantaneous wattage a poor stand-in for actual usage), ENERGY STAR-style labels report the already-calculated annual kWh figure directly — the more reliable number to use for real cost comparisons between appliance models.
      </div>

      <QuickCheck
      question="Why might a refrigerator's energy label report annual kilowatt-hours rather than just its wattage rating?"
      options={[
      { text: "Because refrigerators don't actually have a wattage rating", correct: false, explanation: "Refrigerators do have a wattage rating (their compressor motor's power draw), but that number alone doesn't reflect actual energy use well." },
      { text: "Because a refrigerator's compressor cycles on and off rather than running continuously, so its instantaneous wattage doesn't reflect real-world total energy use the way a directly measured or estimated annual kWh figure does", correct: true, explanation: "Correct. Appliances with variable or cyclical operation (refrigerators, AC units) are better represented by a measured or estimated total energy figure than by their peak or rated wattage alone." },
      { text: "Because kilowatt-hours are easier to convert to dollars than watts, with no other reason", correct: false, explanation: "While kWh does map directly to billing units, the deeper reason for reporting annual kWh on a refrigerator specifically is that its wattage varies as it cycles, making a raw wattage figure less representative of real usage." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Power (watts) × time = energy (kilowatt-hours)"
      type="flow"
      svgSrc="/diagrams/units-measurement-conversions-watts-kilowatts-and-reading-an-electricity-bill-power-vs-energy.svg"
      altText="A diagram showing a speedometer icon labeled watts (power, a rate) on the left, multiplied by a clock icon labeled hours running, with an equals sign pointing to a battery icon labeled kilowatt hours (energy, the total, what you're billed for) on the right."
      />
      <p>
      The speedometer-and-clock framing is deliberate: watts describe how fast energy is being used at any instant (like speed), while kilowatt-hours describe the total accumulated over time (like distance) — multiplying the rate by the duration is what turns one into the other.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Thinking a higher-wattage appliance always costs more to run than a lower-wattage one.", fix: "Total cost depends on both wattage and how long the appliance runs — a low-wattage device left on for a very long time can use more total energy than a high-wattage device used briefly." },
      { mistake: "Forgetting to convert watts to kilowatts (divide by 1,000) before multiplying by hours to estimate kWh.", fix: "Electricity is billed in kilowatt-hours, not watt-hours — always divide the wattage by 1,000 first, or use kilowatts directly if the appliance label already provides them." },
      { mistake: "Estimating a cyclical appliance's (fridge, AC) energy cost from its peak wattage rating alone.", fix: "Use the appliance's labeled estimated annual kWh figure when available — it accounts for on/off cycling that a single wattage number can't capture." },
      ]}
      />
      <MisconceptionCallout
      myth="Watts and kilowatt-hours are basically the same thing, just at different scales, like grams and kilograms."
      reality={<p>Watts and kilowatt-hours measure fundamentally different kinds of quantities — watts measure power (a rate, energy per unit time), while kilowatt-hours measure energy (a total amount). Converting between them requires knowing how long something ran, not just a scale factor — this is a categorically different relationship than something like grams to kilograms, which are both the same kind of quantity (mass) at different scales.</p>}
      />

      <QuickCheck
      question="Is it possible to convert a wattage rating directly into kilowatt-hours without any additional information?"
      options={[
      { text: "Yes, just divide the wattage by 1,000", correct: false, explanation: "Dividing by 1,000 only converts watts to kilowatts (still a power unit) — it doesn't produce kilowatt-hours, which requires multiplying by a duration of time as well." },
      { text: "No — you also need to know how long the appliance runs, since kilowatt-hours measure energy (power × time), not power alone", correct: true, explanation: "Correct. Wattage alone tells you the rate of energy use, but converting to an energy total (kWh) requires multiplying by the duration the appliance actually operates." },
      { text: "Yes, because watts and kilowatt-hours are actually the same unit under different names", correct: false, explanation: "They are not the same unit — one measures power (a rate) and the other measures energy (a total), a categorical difference, not just a naming difference." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Estimate electricity cost"
      fields={[
      { key: "powerWatts", label: "Appliance power (watts)", defaultValue: 1500 },
      { key: "hours", label: "Hours used", defaultValue: 5 },
      { key: "ratePerKwh", label: "Rate per kWh ($)", defaultValue: 0.15, step: 0.01 },
      ]}
      resultLabel="Estimated cost"
      formula="electricityCostFromKwh"
      formatResult="currency"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Remember watts measure a rate (power) and kilowatt-hours measure a total (energy) — the two aren't interchangeable without factoring in time.",
      "Check your appliance's wattage label, then use the calculator above with your actual electricity rate to estimate real running costs.",
      "For appliances that cycle on and off (fridges, AC units), trust a labeled annual kWh estimate over a single wattage number.",
      "Look at both wattage and expected usage duration when comparing appliances for energy efficiency, not wattage alone.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What's the difference between watts and kilowatt-hours?", answer: "Watts measure power — the rate electricity is used at a given moment. Kilowatt-hours measure energy — the total amount used over time, calculated as power multiplied by hours. Electricity bills charge for kilowatt-hours, not watts." },
      { question: "How do you calculate kilowatt-hours from watts?", answer: "Divide watts by 1,000 to get kilowatts, then multiply by the number of hours the appliance ran. A 1,500-watt appliance running for 4 hours uses (1,500 ÷ 1,000) × 4 = 6 kWh." },
      { question: "How much does it cost to run a 100-watt light bulb for 24 hours?", answer: "At $0.15 per kWh: (100 ÷ 1,000) × 24 = 2.4 kWh, costing 2.4 × $0.15 = $0.36 — a little over a third of a dollar for a full day." },
      { question: "Why does my electricity bill show kilowatt-hours instead of watts?", answer: "Because kilowatt-hours represent actual energy delivered and consumed — the real commodity a utility provides — while watts only describe an instantaneous rate that says nothing about how much total electricity was used." },
      { question: "Does a higher-wattage appliance always use more electricity overall?", answer: "Not necessarily. Total energy use depends on both wattage and how long the appliance runs — a lower-wattage appliance left running much longer can use more total energy (and cost more) than a higher-wattage one used briefly." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
