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
  title: "Eco-Friendly Transportation Choices",
  category: "environment-nature",
  order: 32,
  subtopic: "sustainable-living-practices",
  tags: ["transportation emissions", "per-mile emissions", "EPA", "commuting", "electric vehicles"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Comparing transportation options by 'total emissions' is misleading — the useful comparison is emissions per passenger-mile, since a full bus and an empty bus release very different amounts of CO2 per rider even on an identical route.",
  summary: "Transportation modes are best compared by emissions per passenger-mile, not total vehicle emissions, since the same trip's environmental cost per rider depends heavily on occupancy — a single-occupant car produces far more CO2 per mile per person than the same car full of passengers, or than public transit running at typical ridership.",
  sources: [
    { label: "EPA — Greenhouse Gas Emissions from a Typical Passenger Vehicle", url: "https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle" },
    { label: "US DOT / FTA — Public Transportation's Role in Reducing Greenhouse Gas Emissions", url: "https://www.transit.dot.gov/" },
    { label: "US Department of Energy — Alternative Fuels Data Center: Vehicle Emissions", url: "https://afdc.energy.gov/vehicles/emissions" },
  ],
  seeAlso: [
    "environment-nature/understanding-your-carbon-footprint",
    "environment-nature/understanding-carbon-offsetting",
    "units-measurement-conversions/understanding-fuel-efficiency-units-mpg-vs-l-100km",
  ],
  glossary: [
    {"term":"Passenger-mile","definition":"A unit representing one passenger transported one mile, used to compare transportation modes fairly by accounting for how many people share a trip's emissions, not just the vehicle's total emissions."},
    {"term":"Tailpipe emissions","definition":"Greenhouse gases released directly from a vehicle's exhaust while it's being driven, as distinct from emissions produced earlier in manufacturing the vehicle or generating the electricity/fuel it uses."},
    {"term":"Well-to-wheel emissions","definition":"A fuller accounting of a vehicle's emissions that includes not just tailpipe output but also the emissions from producing and delivering its fuel or electricity, used to compare fuel types more completely."},
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
      "The fair way to compare transportation modes is emissions per passenger-mile, not a vehicle's total emissions — occupancy changes the per-person number dramatically even on an identical trip.",
      "A single-occupant car trip produces far more CO2 per passenger-mile than the same trip made by public transit at typical ridership, or by carpooling with several passengers in the same car.",
      "Electric vehicles produce zero tailpipe emissions, but their true climate benefit depends on the electricity grid's fuel mix where they're charged — a well-to-wheel comparison, not tailpipe emissions alone.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A car, bus, and train each release a certain amount of CO2 per mile they travel. But what actually matters for comparing transportation choices is emissions per <TermLink href="/environment-nature/eco-friendly-transportation-choices">passenger-mile</TermLink> — the vehicle&apos;s emissions divided by how many people are actually riding. A car with one person in it looks far worse per-rider than the same car carrying four people on the same trip.</div>}
      detailed={<div className="prose-p">EPA data on typical passenger vehicle emissions gives a per-mile CO2 figure for the vehicle itself, but that figure only becomes a fair comparison across transportation modes once divided by realistic average occupancy. A city bus has much higher <TermLink href="/environment-nature/eco-friendly-transportation-choices">tailpipe emissions</TermLink> per mile than a car, but because it typically carries far more riders per trip, its per-passenger-mile emissions are usually lower. Electric vehicles complicate a pure tailpipe comparison further, since they produce zero direct tailpipe emissions while driving — their real climate impact requires a <TermLink href="/environment-nature/eco-friendly-transportation-choices">well-to-wheel</TermLink> comparison that accounts for how the electricity used to charge them was generated, which varies substantially by region and grid mix.</div>}
      />
      <FootnoteAside>US Department of Transportation and Federal Transit Administration analyses have found that a fully loaded public bus can produce meaningfully lower greenhouse gas emissions per passenger-mile than a typical single-occupant car, even though the bus itself emits far more CO2 per mile of travel — the occupancy difference is what flips the comparison.</FootnoteAside>

      <p>
      This doesn&apos;t mean any specific mode is always best — actual occupancy varies by route, time of day, and city, so the same public transit line can be a great or poor per-passenger choice depending on how full it typically runs. The comparison has to be made per passenger, not per vehicle.
      </p>

      <QuickCheck
      question="A city bus produces significantly more total CO2 per mile than a typical car. Does this mean taking the bus is always worse for the environment than driving alone?"
      options={[
      { text: "Yes — since the bus emits more CO2 per mile, it's automatically the worse choice", correct: false, explanation: "Comparing raw per-vehicle emissions ignores occupancy. A bus carrying many riders divides its higher total emissions across more people, which can make its per-passenger-mile footprint lower than a single-occupant car, despite the higher vehicle-level number." },
      { text: "No — the bus's higher total emissions are typically divided across far more riders than a single-occupant car, so its emissions per passenger-mile (the fair comparison) can be lower than driving alone, depending on actual ridership", correct: true, explanation: "Correct. Per-vehicle emissions and per-passenger-mile emissions are different numbers, and occupancy is exactly the variable that can flip which option looks better." },
      { text: "No, because buses are legally required to use lower-emission fuel than passenger cars", correct: false, explanation: "There's no such blanket legal requirement making buses inherently lower-emission per mile than cars — the comparison that matters is occupancy-adjusted (per-passenger-mile), not a fuel-type mandate." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Carpooling changes per-passenger emissions directly (baseline case)</h3>
      <div className="prose-p">
      A car produces 0.35 kg of CO2 per mile driven, regardless of how many people are inside. Driven solo for a 10-mile commute, that&apos;s 3.5 kg of CO2 for one passenger-mile-equivalent trip. The same car carrying four coworkers on the same 10-mile commute still produces 3.5 kg total, but divided across four riders, that&apos;s 0.875 kg of CO2 per person — a 75% reduction in per-passenger footprint from carpooling alone, with no change to the vehicle or fuel.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why an EV&apos;s real benefit depends on the local grid (edge case / variation)</h3>
      <div className="prose-p">
      An electric vehicle charged on a grid that&apos;s predominantly hydroelectric or nuclear (very low-carbon electricity) has a dramatically lower well-to-wheel footprint than the same EV charged on a grid still heavily reliant on coal generation, even though both EVs have identical zero tailpipe emissions while driving. This is why blanket claims like &quot;EVs are zero-emission&quot; are only strictly true at the tailpipe — the well-to-wheel comparison, which includes how the electricity was generated, is the one that determines the vehicle&apos;s actual climate impact.
      </div>

      <QuickCheck
      question="Are two identical electric vehicles guaranteed to have the same real-world climate impact if one is charged in a region with a coal-heavy grid and the other in a region with a mostly hydroelectric grid?"
      options={[
      { text: "Yes — both vehicles have zero tailpipe emissions, so their climate impact is identical regardless of where they're charged", correct: false, explanation: "Zero tailpipe emissions only describes what comes directly out of the vehicle while driving. A well-to-wheel comparison, which accounts for how the charging electricity was generated, can show a substantial difference between the two scenarios." },
      { text: "No — while both have zero tailpipe emissions, the well-to-wheel footprint (which includes electricity generation) can differ substantially depending on whether the local grid is coal-heavy or predominantly low-carbon sources like hydro or nuclear", correct: true, explanation: "Correct. This is exactly why 'zero-emission' claims for EVs are accurate at the tailpipe but incomplete without a well-to-wheel comparison that accounts for the electricity source." },
      { text: "No, because electric vehicles draw electricity exclusively from dedicated on-site solar panels installed by the manufacturer", correct: false, explanation: "EVs typically charge from the regular electrical grid, drawing whatever mix of generation sources is available there — there's no manufacturer-dedicated solar requirement built into standard EV charging." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A city comparing transit investment against road expansion (real-world / applied case)</h3>
      <div className="prose-p">
      A city government evaluating whether to expand a highway or invest in a new light rail line uses per-passenger-mile emissions modeling (a real methodology used in federal transportation planning, including US DOT and FTA analyses) to project the climate impact of each option at expected future ridership and traffic volumes. This is exactly why serious transportation policy analysis focuses on projected occupancy-adjusted emissions rather than simply comparing a bus&apos;s or train&apos;s per-vehicle emissions against a highway lane&apos;s per-vehicle emissions.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The same car's per-passenger emissions with different occupancy"
      type="comparison"
      svgSrc="/diagrams/environment-nature-eco-friendly-transportation-choices-occupancy-comparison.svg"
      altText="Two identical car icons side by side, each labeled with the same total emissions per mile. The left car shows one person icon inside with a large per-passenger emissions number below it. The right car shows four person icons inside with a per-passenger emissions number one-quarter as large below it, illustrating how occupancy divides the same total emissions across more or fewer riders."
      />
      <p>
      Both cars in the diagram have identical total emissions per mile — the only variable changing between them is how many people share that same fixed footprint, which is precisely the occupancy effect that makes per-passenger-mile the fair unit for comparing transportation choices.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Comparing transportation modes by total vehicle emissions instead of emissions per passenger-mile.", fix: "Always adjust for occupancy — a high-emission vehicle carrying many riders can have a lower per-passenger footprint than a low-emission vehicle carrying only one." },
      { mistake: "Treating an electric vehicle's 'zero emissions' claim as the complete picture.", fix: "Consider the well-to-wheel footprint, which accounts for how the electricity used to charge the vehicle was generated — this varies meaningfully by region and grid mix." },
      { mistake: "Assuming public transit is automatically the lower-emission choice regardless of how full the vehicle actually runs.", fix: "Recognize that a nearly empty bus or train can have a high per-passenger footprint too — the occupancy-adjusted comparison depends on real ridership, not just mode of transport." },
      ]}
      />
      <MisconceptionCallout
      myth="Electric vehicles are unambiguously zero-emission, full stop, since they don't have a tailpipe."
      reality={<p>Zero tailpipe emissions is accurate but incomplete. A full well-to-wheel comparison includes the emissions from generating the electricity used to charge the vehicle, which varies substantially depending on the local grid&apos;s fuel mix — an EV charged on a coal-heavy grid has a meaningfully different real-world footprint than one charged on a low-carbon grid, even though both are equally &quot;zero-emission&quot; at the tailpipe.</p>}
      />

      <QuickCheck
      question="Why is 'emissions per passenger-mile' considered a fairer way to compare transportation modes than comparing raw per-vehicle emissions?"
      options={[
      { text: "Because per-vehicle emissions numbers are never publicly available for comparison", correct: false, explanation: "Per-vehicle emissions figures (like EPA's typical passenger vehicle data) are publicly available — the issue isn't availability, it's that they don't account for how many people share that vehicle's trip." },
      { text: "Because dividing a vehicle's emissions by its actual occupancy accounts for how many people are sharing that trip's environmental cost, which is the number that actually matters for an individual traveler's real footprint", correct: true, explanation: "Correct. Two vehicles can have very different per-vehicle emissions but very similar (or reversed) per-passenger-mile footprints once realistic occupancy is factored in, which is why serious transportation analysis uses this adjusted metric." },
      { text: "Because passenger-mile calculations eliminate the need to consider fuel type entirely", correct: false, explanation: "Fuel type still matters within the passenger-mile framework — it's one input alongside occupancy, not something the metric replaces or ignores." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Estimate per-passenger emissions for a trip"
      fields={[
      { key: "value", label: "Total trip emissions (kg CO2)", defaultValue: 3.5, step: 0.1 },
      { key: "conversionFactor", label: "1 ÷ number of passengers (e.g. 0.25 for 4 people)", defaultValue: 0.25, step: 0.01 },
      ]}
      resultLabel="Estimated emissions per passenger (kg CO2)"
      formula="unitConversionByFactor"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "When comparing transportation options, think in emissions per passenger-mile, not just per-vehicle numbers.",
      "Carpool or take transit for routes where realistic ridership is reasonably high — the per-passenger benefit depends on actual occupancy, not the mode alone.",
      "If considering an EV, check your local grid's fuel mix to understand its real well-to-wheel benefit, not just its zero-tailpipe claim.",
      "Use the calculator above with your own trip's emissions and typical passenger count to see the occupancy effect directly.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is emissions per passenger-mile?", answer: "A unit that divides a vehicle's total emissions for a trip by the number of passengers actually riding, giving a fair way to compare transportation modes that accounts for occupancy, not just vehicle type." },
      { question: "Is public transit always lower-emission than driving?", answer: "Not automatically — it depends on actual ridership. A well-occupied bus or train typically has a lower per-passenger-mile footprint than a single-occupant car, but a nearly empty transit vehicle can have a high per-passenger footprint too." },
      { question: "Are electric vehicles truly zero-emission?", answer: "They have zero tailpipe emissions while driving, but their full well-to-wheel footprint depends on how the electricity used to charge them was generated, which varies by regional grid mix." },
      { question: "Does carpooling actually reduce emissions per person?", answer: "Yes — since a car's total emissions per mile stay roughly the same regardless of occupancy, dividing that same footprint across more passengers directly reduces the emissions attributable to each individual rider." },
      { question: "What is well-to-wheel emissions?", answer: "A fuller accounting of a vehicle's climate impact that includes emissions from producing and delivering its fuel or electricity, in addition to tailpipe emissions — used to compare different fuel types and power sources more completely." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
