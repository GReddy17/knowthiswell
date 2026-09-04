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
  title: "How Central Air Conditioning Actually Cools a House",
  category: "home-diy-knowledge",
  order: 28,
  subtopic: "hvac-and-home-comfort-basics",
  tags: ["central air conditioning", "refrigeration cycle", "how ac works", "tons of cooling", "hvac basics"],
  date: "2026-09-04",
  updated: "2026-09-04",
  lastReviewed: "2026-09-04",
  excerpt: "Central air conditioning doesn't manufacture cold air — it moves heat from inside the house to outside using a closed refrigerant loop and a repeating compression cycle.",
  summary: "A central air conditioner cools a house by moving heat, not by creating cold: refrigerant absorbs heat from indoor air at the evaporator coil, a compressor pressurizes it, the condenser coil releases that heat outdoors, and an expansion valve drops the pressure again before the cycle repeats, with cooling capacity commonly rated in tons, where one ton equals 12,000 BTU per hour.",
  sources: [
    { label: "U.S. Department of Energy — Air Conditioning", url: "https://www.energy.gov/energysaver/air-conditioning" },
    { label: "ENERGY STAR — Central Air Conditioning", url: "https://www.energystar.gov" },
    { label: "ASHRAE — American Society of Heating, Refrigerating and Air-Conditioning Engineers", url: "https://www.ashrae.org" },
  ],
  seeAlso: [
    "home-diy-knowledge/how-a-thermostat-actually-controls-temperature",
    "home-diy-knowledge/why-air-filters-need-regular-replacement",
    "home-diy-knowledge/what-r-value-actually-measures-in-insulation",
    "home-diy-knowledge/what-amps-volts-and-watts-actually-measure",
  ],
  glossary: [
    { term: "Refrigerant", definition: "A chemical fluid inside an air conditioner's sealed loop that absorbs heat as it evaporates and releases heat as it condenses, carrying heat energy from one coil to the other." },
    { term: "Evaporator coil", definition: "The indoor coil where cool, low-pressure refrigerant absorbs heat from the house's air as it evaporates from liquid to gas." },
    { term: "Condenser coil", definition: "The outdoor coil where hot, high-pressure refrigerant releases the absorbed heat to the outside air as it condenses from gas back to liquid." },
    { term: "Ton of cooling", definition: "A unit of air conditioning capacity equal to 12,000 BTU per hour, originally based on the cooling effect of melting one ton of ice in 24 hours." },
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
          "Central air conditioning doesn't create cold air — it moves heat out of the house using a refrigerant that absorbs heat indoors and releases it outdoors in a closed loop.",
          "The cycle has four core stages: an indoor coil absorbs heat, a compressor pressurizes the refrigerant, an outdoor coil releases that heat, and an expansion valve drops the pressure again before the loop repeats.",
          "Cooling capacity is commonly measured in tons, where one ton equals 12,000 BTU per hour — a rating of the system's heat-removal rate, not a literal weight of anything inside it.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">An air conditioner doesn&apos;t make cold air out of nothing — it moves heat that&apos;s already inside the house to the outside, the same basic idea as a refrigerator moving heat out of its interior and dumping it into the kitchen through the coils on the back. Indoors, air blows across a cold coil and gives up some of its heat, so the air coming back out feels cooler. That absorbed heat then travels, carried by a fluid inside sealed copper tubing, out to a second coil sitting outside the house, where it&apos;s released into the outdoor air. The whole system is really a heat-moving machine, not a cold-making one.</div>}
        detailed={<div className="prose-p">Central air conditioning runs on the <TermLink href="/home-diy-knowledge/how-central-air-conditioning-actually-cools-a-house">refrigerant</TermLink> cycle, a closed loop that exploits how a fluid absorbs heat when it evaporates from liquid to gas and releases heat when it condenses back from gas to liquid. Indoors, low-pressure refrigerant flows through the <TermLink href="/home-diy-knowledge/how-central-air-conditioning-actually-cools-a-house">evaporator coil</TermLink>, where the house&apos;s warmer air, pushed across it by the blower, gives up heat to the refrigerant, causing it to evaporate into a gas — this is the step that actually cools the air reaching the ductwork. That now-heat-carrying gas flows to the compressor, which squeezes it to a much higher pressure and temperature, a step that takes real electrical work — measured, like any motor load, in the <TermLink href="/home-diy-knowledge/what-amps-volts-and-watts-actually-measure">amps, volts, and watts</TermLink> covered elsewhere — and is why the compressor is the single largest power draw in most central air systems. The hot, high-pressure gas then reaches the outdoor <TermLink href="/home-diy-knowledge/how-central-air-conditioning-actually-cools-a-house">condenser coil</TermLink>, where it releases its heat to the outside air and condenses back into a liquid. Finally, the liquid refrigerant passes through an expansion valve, which drops its pressure sharply and cools it back down, ready to absorb heat again at the evaporator coil. The whole cycle repeats continuously while the system runs, and because it&apos;s only relocating heat energy rather than destroying it, an air conditioner always makes the space around its outdoor unit slightly warmer as a direct consequence of making the house cooler.</div>}
      />
      <FootnoteAside>The same refrigeration cycle, run in reverse, is how a heat pump provides winter heating — instead of moving heat from indoors to outdoors, it moves heat from the outdoor air (even when it feels cold) into the house.</FootnoteAside>

      <p>
        Because the whole system is fundamentally about relocating heat rather than generating cold, several everyday AC behaviors that seem odd at first — why the outdoor unit blows warm air, why airflow matters so much, why a system has a rated capacity in tons rather than just horsepower — start making sense once the cycle itself is clear.
      </p>

      <QuickCheck
        question="What is a central air conditioner actually doing when it cools a house?"
        options={[
          { text: "Generating cold air through a chemical reaction inside the indoor unit", correct: false, explanation: "There's no cold-generating reaction — the system is moving existing heat out of the house, not manufacturing cold from nothing." },
          { text: "Absorbing heat from indoor air at one coil and releasing that same heat to the outdoor air at another coil, using a refrigerant that carries it between the two", correct: true, explanation: "Correct. The refrigeration cycle moves heat energy from indoors to outdoors — cooling the house is really a byproduct of relocating heat, not creating cold." },
          { text: "Pumping outside air directly into the house after passing it through a cooling filter", correct: false, explanation: "Central air conditioning recirculates and cools the house's own indoor air across a coil — it isn't drawing in and filtering outside air as its cooling mechanism." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Tracing one full refrigeration cycle (baseline case)</h3>
      <p>
        On a warm afternoon, a thermostat calls for cooling. Indoors, the blower pushes 78&#176;F room air across the evaporator coil; the refrigerant inside absorbs that heat and evaporates, and the air leaving the coil drops to around 58&#176;F before it&apos;s mixed with room air and sent through the ducts. The now-warmed refrigerant gas travels to the outdoor compressor, gets pressurized and hot, releases that heat at the condenser coil — which is why the outdoor unit&apos;s exhaust air always feels warm, even on a cooling cycle — and returns as a cooled liquid to start the loop again. This sequence repeats continuously as long as the thermostat keeps calling for cooling.
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why blocked outdoor airflow hurts cooling performance indoors (edge case / variation)</h3>
      <div className="prose-p">
        Shrubs and yard debris have grown up tightly around an outdoor condenser unit, restricting the airflow the fan needs to pull through the coil. Even though nothing indoors has changed — and the <TermLink href="/home-diy-knowledge/why-air-filters-need-regular-replacement">air filter</TermLink> is perfectly clean — the house starts cooling more slowly and the system runs longer. The reason traces directly back to the cycle: the condenser coil&apos;s entire job is releasing heat to the outdoor air, and if that airflow is restricted, the refrigerant can&apos;t shed heat efficiently, which backs up pressure through the whole loop and reduces how effectively the indoor coil can absorb new heat on its next pass. Keeping clearance around an outdoor unit isn&apos;t cosmetic — it&apos;s a direct input to how well the entire cycle functions.
      </div>
      <QuickCheck
        question="Overgrown shrubs are blocking airflow around the outdoor condenser unit. Why does this reduce indoor cooling performance?"
        options={[
          { text: "It has no real effect on cooling — the condenser unit only matters for the compressor's noise level", correct: false, explanation: "The condenser coil is where the refrigerant releases the heat it absorbed indoors — restricting its airflow directly interferes with that step of the cycle." },
          { text: "Restricted airflow at the condenser coil makes it harder for the refrigerant to release heat outdoors, which backs up the whole refrigeration cycle and reduces cooling efficiency", correct: true, explanation: "Correct. The condenser coil needs airflow to shed the heat the refrigerant is carrying — blocking that airflow reduces how effectively the entire loop can move heat." },
          { text: "It only affects how the outdoor unit looks, with no connection to indoor comfort", correct: false, explanation: "The outdoor and indoor coils are two connected stages of the same closed refrigeration loop — a problem at either one affects the whole system's performance." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Matching cooling capacity to a house&apos;s size (real-world / applied case)</h3>
      <p>
        A homeowner is told a replacement air conditioner is rated at 3 tons of cooling capacity. Converting that to a more familiar unit, 3 tons &#215; 12,000 BTU per hour per ton equals 36,000 BTU per hour — the rate at which the system can remove heat from the house. An undersized system for the home&apos;s square footage and insulation would run nearly nonstop without ever quite catching up on a hot day, while an oversized one can cool the air quickly without running long enough to also remove enough humidity, leaving the house feeling clammy even at the right temperature. Sizing cooling capacity to the specific house, not just picking the biggest available unit, is standard professional practice for exactly this reason.
      </p>
      <QuickCheck
        question="A 3-ton air conditioner has a cooling capacity, in BTU per hour, of approximately:"
        options={[
          { text: "3,000 BTU per hour", correct: false, explanation: "This confuses tons of cooling with BTU directly — a ton of cooling equals 12,000 BTU per hour, not 1,000." },
          { text: "36,000 BTU per hour", correct: true, explanation: "Correct. 3 tons × 12,000 BTU per hour per ton = 36,000 BTU per hour of cooling capacity." },
          { text: "12,000 BTU per hour, regardless of the number of tons rated", correct: false, explanation: "12,000 BTU per hour is the value for one ton specifically — tripling the tonnage triples the BTU-per-hour capacity as well." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The central air conditioning refrigeration cycle"
        type="detail"
        svgSrc="/diagrams/home-diy-knowledge-how-central-air-conditioning-actually-cools-a-house-detail.svg"
        altText="A diagram of the refrigeration cycle in central air conditioning, showing the indoor evaporator coil absorbing heat from house air, refrigerant carrying that heat to the compressor which pressurizes it, then to the outdoor condenser coil which releases the heat outside, and finally through an expansion valve that cools the refrigerant before it returns to the evaporator, forming a closed loop that moves heat from inside to outside rather than creating cold."
      />
      <p>
        Following the loop clockwise in the diagram is really following one unit of heat energy on its journey from inside the house to outside — the refrigerant itself never leaves the sealed system, only the heat it carries does.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Letting shrubs, mulch, or debris crowd the outdoor condenser unit.", fix: "Keep at least a couple of feet of clearance around the outdoor unit so the condenser coil can release heat freely." },
          { mistake: "Assuming a bigger air conditioner is always a better, safer choice for a given house.", fix: "Match cooling capacity to the home's actual size and insulation — an oversized unit can cool too fast to properly remove humidity, leaving the house feeling damp." },
          { mistake: "Ignoring a dirty filter or blocked vents when cooling performance drops, and assuming the refrigerant must be low.", fix: "Check airflow-related causes like the filter first, since restricted indoor airflow across the evaporator coil produces very similar symptoms to a refrigerant problem." },
        ]}
      />
      <MisconceptionCallout
        myth="Air conditioning works by creating cold air, similar to how a furnace creates hot air."
        reality={<p>An air conditioner doesn&apos;t generate cold in any chemical or electrical sense — it moves existing heat from inside the house to outside using a refrigerant that absorbs heat at one coil and releases it at another. That&apos;s why the outdoor unit&apos;s exhaust always feels warm even while the system is actively cooling the house: it&apos;s literally exhausting the heat pulled from indoors. A furnace, by contrast, genuinely does generate new heat, by burning fuel or running an electric element — the two systems work on fundamentally different principles even though people often describe them as mirror images of each other.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Convert tons of cooling to BTU per hour"
        description="Enter a system's rated cooling capacity in tons to see the equivalent heat-removal rate in BTU per hour (1 ton = 12,000 BTU/hr)."
        fields={[
          { key: "tons", label: "Cooling capacity (tons)", defaultValue: 3 },
        ]}
        resultLabel="Cooling capacity (BTU per hour)"
        formula="coolingTonsToBtuPerHour"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Keep at least a couple of feet of clearance around the outdoor condenser unit so it can release heat efficiently.",
          "Check the indoor air filter first if cooling performance drops, since restricted airflow can mimic a refrigerant problem.",
          "When replacing a system, have cooling capacity sized to the home's square footage and insulation rather than defaulting to the largest available unit.",
          "Read What R-Value Actually Measures in Insulation to see how the house's own insulation affects how hard the AC has to work to hold a setpoint.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does central air conditioning actually cool a house?", answer: "It moves heat from indoor air to outdoor air using a refrigerant in a closed loop — the refrigerant absorbs heat indoors at the evaporator coil and releases it outdoors at the condenser coil, rather than generating cold air directly." },
          { question: "Why does the outdoor AC unit blow warm air?", answer: "The outdoor condenser coil's job is to release the heat the refrigerant absorbed from inside the house, so warm exhaust air from the outdoor unit is a normal, expected sign the system is working correctly." },
          { question: "What does a 'ton' of air conditioning mean?", answer: "A ton of cooling capacity equals 12,000 BTU per hour, a unit originally based on the cooling effect of melting one ton of ice in 24 hours. A 3-ton system has a capacity of 36,000 BTU per hour." },
          { question: "Why is my air conditioner running but not cooling the house?", answer: "Common causes include a clogged air filter restricting airflow, a blocked or dirty outdoor condenser coil, or low refrigerant — checking the filter and outdoor unit clearance first is standard before assuming a refrigerant issue." },
          { question: "Is a bigger air conditioner always better for cooling a house faster?", answer: "Not necessarily. An oversized unit can cool the air quickly without running long enough to remove humidity properly, leaving the house feeling clammy even at the target temperature — capacity should be matched to the home's size and insulation." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
