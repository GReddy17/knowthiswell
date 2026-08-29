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
  title: "How Lithium-Ion Batteries Work (And Why They Degrade)",
  category: "technology-basics",
  order: 14,
  subtopic: "devices-and-hardware-basics",
  tags: ["lithium-ion battery", "battery health", "battery degradation", "device hardware", "technology basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "A lithium-ion battery works by shuttling lithium ions between two electrodes — and every one of those shuttle trips very slightly wears the electrodes down, which is why battery capacity never lasts forever.",
  summary: "A lithium-ion battery stores and releases energy by moving lithium ions back and forth between a graphite anode and a metal-oxide cathode through a liquid electrolyte, and it degrades over time because every charge cycle causes small, permanent chemical wear to those electrodes.",
  sources: [
    { label: "U.S. Department of Energy — Batteries", url: "https://www.energy.gov/eere/vehicles/batteries" },
    { label: "Apple — Batteries: Maximizing Performance and Lifespan", url: "https://www.apple.com/batteries/maximizing-performance/" },
    { label: "NIST — National Institute of Standards and Technology", url: "https://www.nist.gov/" },
  ],
  seeAlso: [
    "technology-basics/how-wireless-charging-works",
    "technology-basics/laptop-vs-desktop-technical-differences",
  ],
  glossary: [
    { term: "Anode", definition: "The electrode a lithium-ion battery discharges lithium ions from — typically made of graphite — during use." },
    { term: "Cathode", definition: "The electrode a lithium-ion battery's lithium ions travel to during use, typically made of a lithium metal oxide compound." },
    { term: "Electrolyte", definition: "The liquid or gel medium inside a battery that lithium ions travel through between the anode and cathode, while blocking electrons from taking the same path." },
    { term: "Charge cycle", definition: "One full discharge-and-recharge sequence of a battery, whether that happens in one session or spread across several partial charges that add up to 100%." },
    { term: "Capacity fade", definition: "The gradual, permanent loss of a battery's maximum charge-holding capacity over time and use." },
    { term: "SEI layer", definition: "Solid electrolyte interphase — a thin film that forms on a lithium-ion battery's anode as a normal side effect of use, which slowly thickens and contributes to capacity fade over time." },
    { term: "Calendar aging", definition: "Battery degradation that happens gradually over time even when a battery isn't being actively used or cycled, simply from sitting at a given charge level and temperature." },
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
      "A lithium-ion battery works by shuttling lithium ions between two electrodes through a liquid electrolyte — discharging sends ions one way and powers your device, charging sends them back.",
      "Degradation isn't a defect — every single charge cycle causes tiny, permanent chemical wear to the electrodes, so capacity loss over time is a predictable consequence of normal use, not a sign something is broken.",
      "Heat, full discharges, and constant 100% charging all accelerate this wear, which is why manufacturers commonly recommend keeping a battery in a moderate charge range and avoiding heat where practical.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Think of a lithium-ion battery as two parking garages connected by a one-lane road that only lithium ions are small enough to travel on. When you use your device, ions drive from one garage (the <TermLink href="/technology-basics/how-lithium-ion-batteries-work">anode</TermLink>) to the other (the <TermLink href="/technology-basics/how-lithium-ion-batteries-work">cathode</TermLink>), and that movement is what pushes electricity out through the wider road (the actual wires) to power your phone or laptop. Charging the battery just runs the whole process in reverse, driving the ions back to the first garage so they&apos;re ready to make the trip again.</div>}
      detailed={<div className="prose-p">During discharge, lithium ions leave the graphite anode and travel through a liquid <TermLink href="/technology-basics/how-lithium-ion-batteries-work">electrolyte</TermLink> to the metal-oxide cathode; simultaneously, electrons are forced to take the longer route through the device&apos;s external circuit (since the electrolyte blocks electron flow but allows ion flow), and it&apos;s that electron flow through the circuit that actually powers the device. Charging reverses both flows using an external power source to force ions back to the anode. Each full round trip is one <TermLink href="/technology-basics/how-lithium-ion-batteries-work">charge cycle</TermLink>, and every cycle causes small, physical changes to the electrode materials — most notably the gradual thickening of a passivation film called the <TermLink href="/technology-basics/how-lithium-ion-batteries-work">SEI layer</TermLink> on the anode, which slowly consumes usable lithium and increases internal resistance. This is the direct mechanical cause of <TermLink href="/technology-basics/how-lithium-ion-batteries-work">capacity fade</TermLink> — a battery that used to hold 100 units of charge might, after hundreds of cycles, only hold 80, because some of the lithium and electrode structure that used to participate in the reaction is now chemically locked out of the process.</div>}
      />
      <FootnoteAside>Batteries also degrade even when they aren&apos;t being used — a phenomenon called <TermLink href="/technology-basics/how-lithium-ion-batteries-work">calendar aging</TermLink>. A battery left fully charged and warm for a long period degrades faster from calendar aging alone than the same battery stored at a partial charge in a cool place, which is why manufacturers often recommend a mid-range charge level for long-term storage.</FootnoteAside>

      <p>
      This same chemistry explains a set of very common, very specific pieces of battery advice — and rather than take them on faith, it&apos;s worth walking through exactly why each one holds up mechanically.
      </p>

      <QuickCheck
      question="After a year of daily use, a phone's battery holds noticeably less charge than when it was new, even though nothing appears broken. What is the most accurate explanation?"
      options={[
      { text: "The battery has a manufacturing defect, since a healthy battery should hold the same charge indefinitely", correct: false, explanation: "Gradual capacity loss with normal use is expected chemical behavior, not a defect — every charge cycle causes small, permanent wear to the battery's electrodes." },
      { text: "Repeated charge cycles have caused normal, permanent chemical wear to the electrodes, including growth of the SEI layer on the anode", correct: true, explanation: "Correct. This capacity fade is a predictable, well-documented outcome of the battery's underlying chemistry, not a sign of malfunction — the rate can be influenced by charging habits and heat exposure, but it can't be avoided entirely." },
      { text: "The phone's software is deliberately reducing battery capacity over time for no functional reason", correct: false, explanation: "While some devices do adjust performance to compensate for an aging battery's reduced ability to deliver peak power, the underlying capacity loss itself is a real chemical effect, not something invented or imposed purely by software." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A normal charge-discharge cycle (baseline case)</h3>
      <div className="prose-p">
      A phone at 100% charge is used throughout the day until it reaches 0% and is plugged in overnight. During the day&apos;s discharge, lithium ions steadily move from anode to cathode, powering the phone via the electron flow through its circuitry, while the battery&apos;s voltage gradually drops as fewer easily-accessible ions remain at the anode. Overnight, the charger reverses the process, pushing ions back to the anode until the battery reports full again. This single day-and-night sequence counts as one full charge cycle — the SEI layer on the anode grows by a small, largely imperceptible amount, and the battery&apos;s underlying maximum capacity has dropped by a tiny, similarly imperceptible fraction.
      </div>
      <QuickCheck
      question="During a normal day-and-night charge cycle, why does the battery's underlying maximum capacity drop by a tiny amount, even though nothing appears wrong?"
      options={[
      { text: "Because the phone deliberately wastes a small amount of charge every cycle to protect the electronics", correct: false, explanation: "There's no deliberate waste built in for protection purposes — the small capacity drop comes from real, physical chemical wear happening on the electrodes during normal ion movement." },
      { text: "Because every full charge-discharge cycle causes small, permanent chemical wear to the electrodes, including gradual growth of the SEI layer on the anode", correct: true, explanation: "Correct. This is normal lithium-ion chemistry — each cycle very slightly and permanently changes the electrode materials, which is the direct mechanical cause of gradual capacity fade over many cycles." },
      { text: "Because the charging cable itself degrades slightly with each use, reducing how much charge it can deliver", correct: false, explanation: "Cable condition isn't the source of this specific capacity change — the wear described here happens inside the battery cell itself, not in the external cable or charger." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Two identical phones, different charging habits (edge case / variation)</h3>
      <div className="prose-p">
      Two identical new phones are used for a year. One is regularly run all the way down to near 0% before being fully recharged to 100% and left plugged in overnight; the other is kept mostly between roughly 20% and 80% charge and rarely allowed to sit at either extreme for long. Deep discharges and prolonged time at 100% both place additional chemical stress on the electrodes compared to staying in a moderate charge range, so — all else being equal, including how much total energy each phone actually used over the year — the phone kept in the moderate range would be expected to retain more of its original capacity by the end of the year. This is the mechanical basis for the widely repeated advice to avoid habitually running a battery to 0% or leaving it plugged in at 100% for very long stretches.
      </div>
      <QuickCheck
      question="Why might a phone kept mostly between 20% and 80% charge retain more battery capacity after a year than an identical phone regularly run to 0% and then charged fully to 100%?"
      options={[
      { text: "Because phones only actually charge properly when starting from near 0%", correct: false, explanation: "There's no chemical requirement to discharge fully before recharging — lithium-ion batteries handle partial charges normally, and doing so is generally gentler on the cell, not harmful." },
      { text: "Because deep discharges and prolonged full-charge states both place additional chemical stress on the electrodes compared to staying in a moderate charge range", correct: true, explanation: "Correct. Extended time at either charge extreme accelerates the same underlying wear mechanisms (electrode stress and SEI growth) that cause capacity fade, which is the chemical basis for the 20-80% guidance many manufacturers give." },
      { text: "Because the phone kept in the moderate range uses a completely different type of battery chemistry", correct: false, explanation: "Both phones use identical lithium-ion chemistry in this example — the difference in outcome comes entirely from how each battery was used, not from a difference in battery type." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Extending a laptop&apos;s battery lifespan in real use (real-world / applied case)</h3>
      <div className="prose-p">
      Someone who keeps a laptop plugged in and at 100% charge nearly all the time, in a warm environment (like near a sunny window or on a soft surface that blocks airflow), is combining two of the strongest accelerants of battery degradation: prolonged full charge and elevated temperature. Practical steps that meaningfully slow degradation include avoiding leaving the laptop plugged in and fully charged for very long uninterrupted stretches where avoidable, keeping the device cooler during heavy use, and not habitually discharging fully before every recharge. None of these steps stop degradation entirely — some capacity fade over years of use is unavoidable chemistry — but they measurably slow the rate at which it happens.
      </div>
      <QuickCheck
      question="A laptop is kept plugged in at 100% charge nearly all the time in a warm spot near a sunny window. What two factors are combining to accelerate its battery degradation?"
      options={[
      { text: "The laptop's screen brightness and the operating system's version", correct: false, explanation: "Screen brightness and OS version aren't the accelerants being described here — the scenario specifically highlights charge level and temperature as the relevant stress factors." },
      { text: "Prolonged time at full (100%) charge and elevated temperature, both of which independently accelerate the chemical wear behind capacity fade", correct: true, explanation: "Correct. Staying at full charge for long stretches and being in a warm environment are two separate, well-documented accelerants of lithium-ion degradation, and this scenario combines both at once." },
      { text: "The laptop's age and the number of times it has been physically moved", correct: false, explanation: "Physical handling and calendar age aren't the specific mechanisms at play in this scenario — the described stress factors are charge level and heat, not physical wear or simple elapsed time." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Lithium-ion discharge: ion and electron flow, and why capacity fades"
      type="detail"
      svgSrc="/diagrams/technology-basics-how-lithium-ion-batteries-work-charge-discharge-cycle.svg"
      altText="Diagram of a lithium-ion cell during discharge, showing lithium ions moving through the electrolyte from the anode to the cathode while electrons take the longer path through an external circuit to power a device, alongside a box listing the main causes of long-term capacity fade."
      />
      <p>
      Charging simply reverses both arrows in this diagram — but reversing the flow doesn&apos;t reverse the small amount of chemical wear each round trip leaves behind on the electrodes.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Believing a battery must be fully drained before recharging to keep it healthy.", fix: "This applied to older nickel-based battery chemistries with a 'memory effect,' not lithium-ion — for lithium-ion, partial charges are generally gentler on the battery than deep discharges." },
      { mistake: "Leaving a device plugged in at 100% for extended periods without a second thought.", fix: "Prolonged time at full charge, especially combined with heat, accelerates capacity fade — unplugging once charged, where practical, reduces this stress." },
      { mistake: "Assuming reduced battery capacity after a year or two means the battery (or device) is defective.", fix: "Gradual capacity fade is expected, predictable chemistry, not a defect — manufacturers typically define a normal capacity range after a given number of cycles rather than promising zero degradation." },
      { mistake: "Ignoring heat as a factor in battery health.", fix: "Elevated temperature accelerates nearly every degradation mechanism in a lithium-ion cell — keeping a device cool during charging and heavy use meaningfully slows long-term capacity loss." },
      ]}
      />
      <MisconceptionCallout
      myth="A lithium-ion battery should always be run down to 0% before recharging, to keep it healthy."
      reality={<p>This rule applied to older nickel-cadmium batteries, which suffered from a real &quot;memory effect&quot; if repeatedly only partially discharged. Lithium-ion chemistry works differently and has no memory effect — repeated deep discharges to 0% actually place <em>more</em> chemical stress on the electrodes than a series of partial charges, which is why device manufacturers generally recommend keeping a lithium-ion battery in a moderate charge range rather than habitually draining it fully.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Estimate charging time"
      description="A simplified estimate of how long a battery takes to charge at a given current — real chargers slow down near full charge (the constant-voltage phase), so actual time is often somewhat longer than this simple estimate."
      fields={[
      { key: "batteryCapacityMah", label: "Battery capacity (mAh)", defaultValue: 4000 },
      { key: "chargingCurrentMa", label: "Charging current (mA)", defaultValue: 2000 },
      ]}
      resultLabel="Estimated charge time (hours)"
      formula="batteryChargeTimeHours"
      formatResult="number"
      disclaimer="This simplified estimate ignores the slower constant-voltage taper phase most chargers use near full charge, so real charging time is typically somewhat longer, especially for the last 10-20%."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Where practical, avoid leaving a device plugged in at 100% for very long uninterrupted stretches, and avoid habitually letting it drain all the way to 0%.",
      "Keep devices cool during charging and heavy use — heat is one of the strongest accelerants of long-term battery degradation.",
      "Don't panic over normal, gradual capacity loss after a year or more of regular use — check your device's built-in battery health reporting (if available) before assuming a fault.",
      "For long-term storage of a device you won't use for weeks or months, store it at a moderate charge level in a cool place rather than fully charged or fully drained.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How does a lithium-ion battery actually work?", answer: "It stores and releases energy by moving lithium ions between two electrodes — a graphite anode and a metal-oxide cathode — through a liquid electrolyte. Discharging sends ions to the cathode while electrons flow through the device's circuit to power it; charging reverses both flows." },
      { question: "Why do phone batteries degrade over time?", answer: "Every charge cycle causes small, permanent chemical wear to the battery's electrodes, including gradual growth of a film called the SEI layer on the anode. This is normal, expected chemistry, not a defect, though heat and time spent at extreme charge levels accelerate the process." },
      { question: "Is it bad to leave your phone charging overnight?", answer: "Modern devices generally manage this safely by stopping active charging once full, but leaving a device at 100% for very long stretches, especially in a warm environment, does contribute somewhat to long-term capacity fade compared to unplugging once charged." },
      { question: "Does fast charging damage the battery faster than slow charging?", answer: "Fast charging does generate more heat, and heat is one of the main accelerants of battery degradation, so very frequent fast charging can modestly speed up capacity fade compared to slower charging — though most modern devices manage charging current and temperature specifically to limit this effect." },
      { question: "Is it better to keep a lithium-ion battery between 20% and 80% charge?", answer: "Yes, as a general guideline — staying in a moderate charge range avoids the additional electrode stress associated with both very low charge (near 0%) and prolonged full charge (100%), which is why many manufacturers recommend it for long-term battery health." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
