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
  title: "Understanding BTUs & Home Energy Ratings",
  category: "units-measurement-conversions",
  order: 30,
  subtopic: "temperature-and-energy",
  tags: [
    "btu",
    "home energy",
    "air conditioning",
    "energy conversion",
    "kilowatt hour",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "BTUs measure the same thing kilowatt-hours do — energy — and appliance ratings like air conditioner size use them because they trace back to a simple, literal definition: the heat needed to warm a pound of water by one degree Fahrenheit.",
  summary: "The British Thermal Unit (BTU) is an energy unit still used for appliance ratings — especially air conditioners and heaters — in the US, and converts to the more familiar kilowatt-hour by a fixed factor of about 0.000293071.",
  sources: [
    { label: "US Department of Energy — Energy Units", url: "https://www.energy.gov" },
    { label: "NIST — Units of Energy", url: "https://www.nist.gov/pml" },
    { label: "ENERGY STAR — Central Air Conditioning", url: "https://www.energystar.gov" },
  ],
  seeAlso: [
    "units-measurement-conversions/watts-kilowatts-and-reading-an-electricity-bill",
    "units-measurement-conversions/calories-vs-kilojoules",
  ],
  glossary: [
    {"term":"British Thermal Unit (BTU)","definition":"A unit of energy defined as the heat required to raise one pound of water by one degree Fahrenheit, still used in the US for rating appliances like air conditioners, furnaces, and water heaters."},
    {"term":"Kilowatt-hour (kWh)","definition":"A unit of energy equal to using one kilowatt of power continuously for one hour — the standard unit electric utilities use for billing."},
    {"term":"BTU per hour (BTU/h)","definition":"A rate of energy delivery, not a total energy amount — the unit typically printed on air conditioner and heater ratings to describe their cooling or heating capacity."},
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
      "A BTU is defined as the heat needed to raise one pound of water by one degree Fahrenheit — a small, precise unit of energy, related to the metric world's kilowatt-hour by a fixed factor.",
      "1 BTU equals approximately 0.000293071 kilowatt-hours, so appliance ratings often use thousands of BTUs (or BTU/h as a rate) rather than the raw unit.",
      "An air conditioner's BTU rating describes its cooling *rate* (BTU per hour), not a total energy amount — it's a capacity spec, similar to how horsepower rates an engine's power output rather than its total energy use.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/units-measurement-conversions/understanding-btus-and-home-energy-ratings">BTU</TermLink> is a unit of energy, just like the kilowatt-hour on your electricity bill — it&apos;s just a much smaller unit historically used in the US for heating and cooling equipment. A typical window air conditioner might be rated 8,000 BTU/h, meaning it can remove heat from a room at a rate of 8,000 BTUs every hour. To convert BTUs to kilowatt-hours, multiply by 0.000293071 (a very small number, since a BTU is a tiny amount of energy compared to a kilowatt-hour).</div>}
      detailed={<div className="prose-p">The <TermLink href="/units-measurement-conversions/understanding-btus-and-home-energy-ratings">British Thermal Unit</TermLink> has a definition parallel to the metric Calorie, but built on US customary units instead: it&apos;s the heat energy required to raise one pound of water by one degree Fahrenheit, whereas a Calorie raises one kilogram of water by one degree Celsius. Because both units measure energy, they&apos;re related to the SI joule (and to each other) by fixed conversion factors, not offsets. What often confuses people is that appliance ratings usually quote <TermLink href="/units-measurement-conversions/understanding-btus-and-home-energy-ratings">BTU per hour</TermLink> — a *rate* of energy transfer (analogous to power, like watts), not a raw energy total. An 8,000 BTU/h air conditioner running for 3 hours delivers 24,000 BTUs of total cooling, similar to how a 1,000-watt appliance running for 3 hours consumes 3 kilowatt-hours of energy — the rating tells you the speed, and you multiply by time to get the total.</div>}
      />
      <FootnoteAside>Central air conditioning capacity in the US is also commonly rated in &quot;tons&quot; — a holdover from an era when cooling capacity was compared to the rate of heat absorbed by a ton of melting ice over 24 hours. One ton of cooling equals 12,000 BTU/h.</FootnoteAside>

      <p>
      With the base unit and rate distinction clear, applying it to a real appliance label is where the concept becomes practically useful.
      </p>

      <QuickCheck
      question="An air conditioner is rated 10,000 BTU/h. What does the '/h' in that rating actually tell you?"
      options={[
      { text: "That the unit only works for 1 hour before needing to be reset", correct: false, explanation: "This isn't what the rating describes — it's a continuous rate specification, not a time limit on the appliance's operation." },
      { text: "That 10,000 BTU/h is a rate — the unit removes heat at 10,000 BTUs of energy every hour it runs, similar to how wattage describes a rate of energy use", correct: true, explanation: "Correct. BTU/h is a power-like rate, not a fixed total amount of energy. Running longer delivers proportionally more total cooling, just as running a higher-wattage appliance longer uses more total energy." },
      { text: "That the unit can only be used during a specific hour of the day", correct: false, explanation: "The rating has nothing to do with time of day — it describes the rate of heat energy transfer whenever the unit is actively running." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting a small heater&apos;s rating to kilowatt-hours (baseline case)</h3>
      <div className="prose-p">
      A portable heater is rated 5,000 BTU/h. Converting to kilowatts: 5,000 × 0.000293071 ≈ 1.47 kW. Running that heater for 4 hours consumes roughly 1.47 × 4 ≈ 5.86 kWh — a figure that can now be directly compared to an electric bill, which is billed in kilowatt-hours.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Sizing an air conditioner for a room (edge case / variation)</h3>
      <div className="prose-p">
      A common rule of thumb for cooling capacity is roughly 20 BTU/h per square foot of room area. A 300-square-foot room would need roughly 300 × 20 = 6,000 BTU/h of cooling capacity — an oversized unit wastes energy cycling on and off too quickly (and cools unevenly), while an undersized one runs constantly and still can&apos;t keep the room comfortable, which is why BTU sizing (not just picking the biggest unit available) matters.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Comparing a central AC&apos;s &quot;ton&quot; rating to BTU/h (real-world / applied case)</h3>
      <div className="prose-p">
      A home&apos;s central air conditioning system is rated at 3 tons. Converting to BTU/h: 3 × 12,000 = 36,000 BTU/h. Converting further to kilowatts: 36,000 × 0.000293071 ≈ 10.55 kW of cooling capacity — a number that finally makes it possible to estimate the system&apos;s likely electricity draw and compare it against other cooling options quoted directly in kilowatts.
      </div>

      <QuickCheck
      question="A central AC system is rated at 2.5 tons. How many BTU/h is that, and why does converting to a common unit matter here?"
      options={[
      { text: "25,000 BTU/h — and it matters because 'tons' isn't directly comparable to a window unit's BTU/h rating without converting first", correct: false, explanation: "The BTU/h figure is calculated incorrectly here. 2.5 tons converts to 2.5 × 12,000 = 30,000 BTU/h, not 25,000." },
      { text: "30,000 BTU/h — converting matters because window units are typically rated directly in BTU/h, so converting the ton rating lets you compare capacities across different equipment types on the same scale", correct: true, explanation: "Correct. 2.5 × 12,000 = 30,000 BTU/h. Central systems (tons) and window units (BTU/h) both describe the same underlying quantity, so converting to a shared unit is what makes a fair capacity comparison possible." },
      { text: "2.5 tons cannot be converted to BTU/h at all, since they measure different things", correct: false, explanation: "Tons of cooling capacity and BTU/h are directly related (1 ton = 12,000 BTU/h) — both describe the same rate of heat removal, just in different-sized units." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="From BTU/h rating to estimated kilowatt-hours"
      type="flow"
      svgSrc="/diagrams/units-measurement-conversions-understanding-btus-and-home-energy-ratings-conversion-chain.svg"
      altText="A horizontal flow diagram showing three boxes connected by arrows. The first box reads 8000 BTU per hour, labeled appliance rating. An arrow labeled multiply by 0.000293071 points to the second box reading 2.34 kilowatts, labeled power in kilowatts. A second arrow labeled multiply by hours running points to the third box reading total kilowatt hours used, labeled energy consumed."
      />
      <p>
      The chain mirrors any rate-to-total conversion: a BTU/h rating is a rate (like wattage), so multiplying by the conversion factor gets kilowatts, and multiplying that by hours of runtime gets the actual total energy consumed — the same two-step logic used for any power-to-energy calculation.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating a BTU/h rating as a fixed total energy amount rather than a rate.", fix: "Remember the '/h' — it's a rate, like wattage. Multiply by the number of hours running to get a total energy figure in BTUs (or convert to kWh first, then multiply)." },
      { mistake: "Assuming a bigger BTU rating is always better when choosing an air conditioner.", fix: "An oversized unit for the room cools too quickly and cycles on/off excessively, reducing both comfort and efficiency — match the rating to the room's actual size using a standard sizing guideline, don't just maximize it." },
      { mistake: "Confusing 'tons' of cooling capacity with a literal weight measurement.", fix: "In HVAC contexts, a 'ton' is a historical energy-rate unit (12,000 BTU/h) unrelated to weight — treat it purely as a cooling-capacity unit." },
      ]}
      />
      <MisconceptionCallout
      myth="BTUs and kilowatt-hours measure fundamentally different things, since one is used for heating/cooling and the other for electricity."
      reality={<p>Both units measure the same physical quantity — energy — and convert to each other with a simple fixed factor (1 BTU ≈ 0.000293071 kWh), just like Calories and kilojoules. The reason BTUs show up specifically for heating and cooling appliances is historical convention in the US HVAC industry, not because a different physical quantity is being measured.</p>}
      />

      <QuickCheck
      question="Why does a central air conditioning system's capacity get rated in 'tons' historically, rather than directly in BTU/h?"
      options={[
      { text: "Because tons and BTU/h measure genuinely different physical properties", correct: false, explanation: "They measure the same physical quantity — a ton of cooling capacity is defined as exactly 12,000 BTU/h, a fixed conversion, not a different kind of measurement." },
      { text: "Because cooling capacity was historically compared to the rate at which a ton of melting ice absorbed heat over 24 hours, and the naming convention persisted even after mechanical refrigeration replaced ice cooling", correct: true, explanation: "Correct. The 'ton' of cooling is a historical holdover from ice-based cooling, mathematically fixed at 12,000 BTU/h — a naming convention, not a fundamentally different unit of measurement." },
      { text: "Because 'tons' is simply a marketing term with no fixed numerical meaning", correct: false, explanation: "A ton of cooling capacity has a precise, standardized meaning (12,000 BTU/h) in HVAC contexts — it's not a vague marketing term." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert BTUs to kilowatt-hours"
      fields={[
      { key: "value", label: "Energy (BTU)", defaultValue: 8000 },
      { key: "conversionFactor", label: "Conversion factor", defaultValue: 0.000293071, step: 0.000001 },
      ]}
      resultLabel="Kilowatt-hours"
      formula="unitConversionByFactor"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "When comparing appliances, note whether a spec is a rate (BTU/h, watts) or a total (BTU, kWh) before comparing numbers directly.",
      "Use a standard room-size sizing guideline (roughly 20 BTU/h per square foot as a starting estimate) rather than assuming a higher BTU rating is automatically better.",
      "Convert 'ton' ratings on central AC systems to BTU/h (× 12,000) when comparing against window units or other equipment rated directly in BTU/h.",
      "Convert BTU/h to kilowatts when you want to estimate an appliance's likely impact on your electric bill, which is billed in kilowatt-hours.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is a BTU in simple terms?", answer: "A British Thermal Unit is a unit of energy — specifically, the heat needed to raise one pound of water by one degree Fahrenheit. It's the US customary equivalent of the metric Calorie or joule." },
      { question: "How do you convert BTU to kWh?", answer: "Multiply the BTU value by 0.000293071. For example, 10,000 BTU converts to 10,000 × 0.000293071 ≈ 2.93 kWh." },
      { question: "What does BTU/h mean on an air conditioner?", answer: "It describes the rate at which the unit removes heat — its cooling capacity per hour — not a fixed total energy amount. Multiply by hours of runtime to get total energy delivered." },
      { question: "How many BTUs are in a ton of air conditioning?", answer: "One ton of cooling capacity equals 12,000 BTU/h — a historical unit based on the rate a ton of melting ice absorbed heat over 24 hours, still used for rating central air conditioning systems." },
      { question: "What size air conditioner do I need for my room?", answer: "A common general guideline is roughly 20 BTU/h per square foot of room area, though ceiling height, insulation, sun exposure, and climate all affect the actual number — check manufacturer sizing guidance for a more precise figure." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
