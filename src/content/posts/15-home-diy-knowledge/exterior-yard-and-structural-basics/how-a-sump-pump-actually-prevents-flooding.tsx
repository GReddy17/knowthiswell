import React from 'react';
import { PostFrontmatter, QuizBankItem } from '@/types/post';
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
  title: "How a Sump Pump Actually Prevents Basement Flooding",
  category: "home-diy-knowledge",
  order: 48,
  subtopic: "exterior-yard-and-structural-basics",
  tags: ["sump pump", "basement flooding", "foundation drainage", "water damage prevention", "home maintenance"],
  date: "2026-09-17",
  updated: "2026-09-24",
  lastReviewed: "2026-09-17",
  excerpt: "A sump pump doesn't stop water from ever reaching your basement — it intercepts groundwater in a pit and pumps it out faster than it can rise past the floor.",
  summary: "A sump pump works by collecting groundwater that drains toward a low pit (the sump) built into a basement floor, then automatically switching on once the water level rises to a set trigger point and pumping that water out through a discharge line, away from the foundation — it's an active, powered race against rising groundwater, not a passive barrier, which is exactly why a power outage during a storm is the scenario that defeats it.",
  sources: [
    { label: "Federal Emergency Management Agency (FEMA) — Basement Flooding Prevention Guidance", url: "https://www.fema.gov/" },
    { label: "U.S. Environmental Protection Agency — Flood Resilience and Home Guidance", url: "https://www.epa.gov/" },
    { label: "International Association of Plumbing and Mechanical Officials (IAPMO) — Sump Pump Installation Standards", url: "https://www.iapmo.org/" },
  ],
  seeAlso: [
    "home-diy-knowledge/why-pipes-freeze-and-burst-in-winter",
    "home-diy-knowledge/how-a-home-foundation-actually-supports-a-house",
    "home-diy-knowledge/what-water-pressure-actually-measures",
    "home-diy-knowledge/why-gutters-need-regular-cleaning",
  ],
  glossary: [
    { term: "Sump pit", definition: "A basin, typically 18-24 inches deep, built into the lowest point of a basement floor to collect groundwater draining toward it before it can spread across the floor." },
    { term: "Float switch", definition: "A sensor inside the sump pit that rises and falls with the water level, automatically triggering the pump to turn on once water reaches a set height and turn off once it drops below another." },
    { term: "Discharge line", definition: "The pipe that carries water pumped out of the sump pit away from the house, ideally daylighting far enough from the foundation that the water doesn't simply drain back toward the same footing area." },
    { term: "Check valve", definition: "A one-way valve installed in a sump pump's discharge line that prevents pumped water from flowing back down into the pit after the pump shuts off." },
  ],
  author: {
    slug: "james-h-rivers",
    name: "James H. Rivers",
    credentialLine: "Founder, KnowThisWell",
  },
  youtubeStatus: "scheduled",
  youtubeUrl: "https://www.youtube.com/watch?v=WgMedm6T8Z8",
  youtubeScheduledAt: "2026-09-18T22:00:00Z",
  draft: false,
};

/** Quiz bank: feeds the end-of-article "Test yourself" quiz and the game (not rendered inline). */
export const quiz: QuizBankItem[] = [
  {"question": "What does a sump pump actually do?", "difficulty": "easy", "options": [{"text": "It blocks groundwater from reaching the house", "correct": false, "explanation": "It doesn't block anything."}, {"text": "It collects water draining into a low pit and pumps it out before it rises past the floor", "correct": true, "explanation": "Like automatically bailing out a boat."}, {"text": "It seals cracks in the foundation", "correct": false, "explanation": "It removes water; it doesn't seal."}]},
  {"question": "What turns the pump on automatically?", "difficulty": "easy", "options": [{"text": "A float switch that rises with the water level", "correct": true, "explanation": "When water reaches a set level, the float triggers the pump."}, {"text": "A timer", "correct": false, "explanation": "It responds to the actual water level, not the clock."}, {"text": "The homeowner, by hand", "correct": false, "explanation": "It's designed to run without anyone present."}]},
  {"question": "What is a standard sump pump's biggest weakness?", "difficulty": "easy", "options": [{"text": "It stops working when the power goes out", "correct": true, "explanation": "The whole system is electrically powered."}, {"text": "It is too loud", "correct": false, "explanation": "Noise isn't the failure point that floods basements."}, {"text": "It removes too much water", "correct": false, "explanation": "Removing water is its purpose."}]},
  {"question": "Why do power outages and flooding so often happen together?", "difficulty": "hard", "options": [{"text": "The same heavy storms that raise groundwater also knock out power", "correct": true, "explanation": "Risk peaks exactly when the pump loses power."}, {"text": "Sump pumps cause power outages", "correct": false, "explanation": "The storm causes both."}, {"text": "Flooding damages the power station first", "correct": false, "explanation": "The link is the storm itself, not the order of damage."}]},
  {"question": "How does a battery-backup sump pump address the main weakness?", "difficulty": "hard", "options": [{"text": "It keeps pumping from its own battery when mains power fails", "correct": true, "explanation": "It closes the single biggest failure point of a standard system."}, {"text": "It makes the main pump run faster", "correct": false, "explanation": "It's a separate backup, not a speed boost."}, {"text": "It stops groundwater from rising", "correct": false, "explanation": "Groundwater still rises; the backup keeps removing it."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "A sump pump doesn't block groundwater from approaching the house — it collects water that's already draining toward a low pit and pumps it out before it can rise past the basement floor.",
          "The system is entirely active and powered: a float switch triggers the pump automatically as water rises, which means the whole setup stops working the moment power is lost.",
          "Because heavy storms are both the time flooding risk is highest and a common cause of power outages, a battery or water-powered backup pump is what actually closes the system's biggest failure point.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">It&apos;s tempting to picture a sump pump as some kind of barrier that keeps water out of a basement entirely. What it actually does is more like bailing out a boat automatically: groundwater around the foundation drains toward a low collection pit built into the basement floor, and once water in that pit rises to a certain level, the pump switches on and pushes it back outside, away from the house. The pump isn&apos;t stopping water from approaching — it&apos;s racing to remove the water that&apos;s already arrived before it can rise high enough to spread across the floor.</div>}
        detailed={<div className="prose-p">The system starts with drainage design: a perimeter drain (often called a French drain or weeping tile) beneath or alongside the foundation footing is designed to intercept groundwater before it can push up through the floor, and route it toward a low collection basin, the <TermLink href="/home-diy-knowledge/how-a-sump-pump-actually-prevents-flooding">sump pit</TermLink>, built into the lowest point of the basement floor. Inside that pit, a <TermLink href="/home-diy-knowledge/how-a-sump-pump-actually-prevents-flooding">float switch</TermLink> rides on the water&apos;s surface, and once the water reaches a preset trigger height, it closes an electrical circuit that switches the pump on. The pump then pushes water up and out through a <TermLink href="/home-diy-knowledge/how-a-sump-pump-actually-prevents-flooding">discharge line</TermLink>, ideally routed far enough from the foundation that the water doesn&apos;t just drain right back toward the same footing. A <TermLink href="/home-diy-knowledge/how-a-sump-pump-actually-prevents-flooding">check valve</TermLink> in that discharge line then stops the pumped water from flowing back down into the pit once the pump shuts off, which would otherwise force the pump to immediately restart and cycle far more often than necessary. Every part of this sequence, from the float switch to the pump motor itself, depends on electrical power — there&apos;s no passive fallback if the power goes out mid-storm, which is exactly the scenario where the system is needed most.</div>}
      />
      <FootnoteAside>A sump pump cycling on and off every few minutes during dry weather (not actively raining) is a warning sign — usually either a stuck float switch, a failed check valve letting water flow back into the pit, or a rising water table worth having checked before it becomes a bigger problem.</FootnoteAside>

      <p>
        This power dependency is exactly why battery-backup and water-powered backup sump pumps exist as a distinct product category — they exist specifically to cover the single most common real-world failure mode of an otherwise well-designed system.
      </p>

      <QuickCheck
        question="Why is a power outage during a heavy storm the scenario that most directly defeats a standard sump pump?"
        options={[
          { text: "Every part of the system, from the float switch to the pump motor, depends on electrical power, and a storm is exactly when groundwater inflow — and flooding risk — is highest", correct: true, explanation: "Correct. The system has no passive fallback; it's an entirely powered, active process, and its single point of failure (power loss) tends to coincide with the exact conditions that make it needed most." },
          { text: "Sump pumps run on battery power by default and don't actually need electricity", correct: false, explanation: "Standard sump pumps run on household electrical power; battery backup is a separate, additional system, not the default power source." },
          { text: "Power outages have no real correlation with storm conditions", correct: false, explanation: "Storms are a well-documented common cause of power outages, precisely the reason this correlation matters for sump pump reliability." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Normal operation during a rainstorm (baseline case)</h3>
      <p>
        During a heavy rainstorm, groundwater around the foundation rises and drains toward the sump pit as designed. The float switch detects the rising water level, triggers the pump, and the pump discharges the water well away from the house through its discharge line. The cycle repeats every few minutes for the duration of the storm as more water continues draining in, and the basement floor stays dry throughout — this is the system functioning exactly as intended, actively keeping pace with incoming water rather than passively blocking it.
      </p>
      <QuickCheck
        question="During normal operation in a storm, why does a sump pump cycle on and off repeatedly rather than running continuously or staying off?"
        options={[
          { text: "The float switch turns the pump on once water reaches a trigger height and off again once it's pumped below a lower level, repeating as more groundwater continues draining in", correct: true, explanation: "Correct. Cycling on and off in response to the actual water level is the system working as designed, not a malfunction." },
          { text: "The pump running intermittently indicates it's failing to keep up with the water", correct: false, explanation: "Intermittent cycling that matches the pace of actual water inflow is normal, expected behavior for a functioning float-switch-controlled pump, not a sign of failure." },
          { text: "Sump pumps are designed to run continuously nonstop during any storm regardless of water level", correct: false, explanation: "Continuous running with no water level trigger would actually be unusual and could indicate a stuck float switch, not standard behavior." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A power outage during the same storm (edge case / variation)</h3>
      <div className="prose-p">
        The same storm knocks out power to the house partway through. Groundwater continues draining into the sump pit exactly as before, but without electricity, neither the float switch&apos;s trigger circuit nor the pump motor can operate — water simply keeps rising in the pit with nothing removing it, and once it exceeds the pit&apos;s capacity, it spreads across the basement floor. This variation isolates the system&apos;s single point of failure: the drainage design and collection mechanism keep functioning fine, but the entire active removal step depends on power that&apos;s no longer available.
      </div>
      <QuickCheck
        question="During a power outage, why does a standard sump pump system stop protecting the basement even though groundwater is still draining into the pit normally?"
        options={[
          { text: "The drainage and collection into the pit is a passive, gravity-driven process that continues regardless of power, but removing that water requires an electrically powered pump, which stops working without power", correct: true, explanation: "Correct. Only the removal step is powered and active; the collection step continues on its own, which is exactly why water keeps arriving with nothing pumping it back out." },
          { text: "Power outages also stop groundwater from draining toward the pit", correct: false, explanation: "Groundwater drainage toward the pit is a gravity-driven, passive process unrelated to household electrical power — it continues regardless of an outage." },
          { text: "This scenario is extremely rare and not a realistic concern", correct: false, explanation: "Storm-related power outages are common enough that battery-backup and water-powered backup sump pumps exist as a standard, widely recommended product category specifically for this scenario." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A battery-backup pump saving a basement during an outage (real-world / applied case)</h3>
      <p>
        A homeowner with a battery-backup sump pump system experiences the same storm-related power outage. When the primary pump loses power, a secondary pump wired to a dedicated backup battery automatically takes over, continuing to remove water from the pit for as long as the battery holds a charge, typically several hours to a day depending on the battery and pump load. This real-world case shows the practical payoff of understanding the system&apos;s actual failure point: rather than adding a generic emergency measure, the backup specifically targets the one step (electrically powered pumping) that a standard system can&apos;t perform without power.
      </p>
      <QuickCheck
        question="Why does a battery-backup sump pump specifically address the main vulnerability of a standard sump pump system, rather than being a general-purpose improvement?"
        options={[
          { text: "It directly covers the one step in the whole process — powered water removal — that fails during an outage, while every other part of the system (drainage, collection) already works independent of grid power", correct: true, explanation: "Correct. The backup targets precisely the identified single point of failure rather than adding redundancy somewhere the system was already reliable." },
          { text: "It replaces the need for a properly designed perimeter drain and sump pit entirely", correct: false, explanation: "A battery backup only addresses the pumping step — it still relies on the same drainage design and sump pit collecting water correctly in the first place." },
          { text: "Battery backups provide unlimited runtime regardless of storm duration", correct: false, explanation: "Battery backup runtime is finite, typically hours to about a day depending on the battery and pump load, which is why extended outages remain a real risk even with a backup installed." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="From perimeter drain to discharge, step by step"
        type="flow"
        svgSrc="/diagrams/home-diy-knowledge-how-a-sump-pump-actually-prevents-flooding-flow.svg"
        altText="Diagram showing groundwater draining through a perimeter drain into a basement sump pit, a float switch triggering the pump once water reaches a set level, and the pump discharging that water through a check valve and discharge line to a point well away from the foundation."
      />
      <p>
        Follow the water&apos;s path from the perimeter drain to the discharge point outside — the pump only enters the picture once water has already collected in the pit.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a sump pump alone is sufficient protection with no backup power plan.", fix: "Add a battery-backup or water-powered backup pump, since standard sump pumps stop working entirely during a power outage — exactly when storm flooding risk is highest." },
          { mistake: "Routing the discharge line to drain right back near the foundation.", fix: "Extend the discharge line far enough from the house that pumped water doesn't simply re-saturate the same soil near the footing." },
          { mistake: "Ignoring a sump pump that cycles frequently during dry weather.", fix: "Investigate promptly — this often points to a stuck float switch, a failed check valve, or a rising water table, not normal behavior." },
        ]}
      />
      <MisconceptionCallout
        myth="A sump pump acts like a barrier or seal that keeps groundwater from ever reaching the basement."
        reality={<p>A sump pump is an active, powered removal system, not a passive barrier. Groundwater is designed to drain toward a low collection pit built into the basement floor, and the pump&apos;s job is removing that collected water fast enough that it never rises high enough to spread across the floor. Because every step of the actual removal &#8212; the float switch trigger, the pump motor &#8212; depends on electricity, the system provides no protection at all during a power outage unless a battery or water-powered backup is also in place. This is precisely why storm-related power outages are the scenario most associated with basement flooding even in homes with a working sump pump.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimated time for a sump pit to refill between pump cycles"
        description="A rough way to see how fast a sump pit refills based on steady groundwater inflow — a shorter refill time means more frequent pump cycling during heavy inflow conditions like a storm."
        fields={[
          { key: "basinCapacityGallons", label: "Sump pit usable capacity (gallons)", defaultValue: 20, step: 1 },
          { key: "inflowRateGpm", label: "Steady groundwater inflow rate (gallons per minute)", defaultValue: 4, step: 0.5 },
        ]}
        resultLabel="Estimated minutes to refill the pit"
        formula="sumpPumpCycleMinutes"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Install a battery-backup or water-powered backup sump pump so protection continues through a power outage, not just normal operation.",
          "Test the primary pump periodically by pouring water into the sump pit and confirming the float switch triggers it correctly.",
          "Route the discharge line to release water well away from the foundation, not back toward the same soil near the footing.",
          "Investigate promptly if the pump cycles frequently during dry weather, or doesn't cycle at all during a heavy rain — both indicate something needs attention before the next real storm.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does a sump pump actually stop a basement from flooding?", answer: "It collects groundwater that drains toward a low pit built into the basement floor, and a float switch automatically triggers the pump to remove that water through a discharge line before it can rise high enough to spread across the floor — it's an active removal process, not a passive barrier." },
          { question: "Does a sump pump work during a power outage?", answer: "A standard sump pump does not — every step, from the float switch to the pump motor, requires electricity. A battery-backup or water-powered backup pump is needed to keep the system working during an outage, which is exactly when storm-related flooding risk tends to be highest." },
          { question: "Why does my sump pump run so often, even when it's not raining?", answer: "Frequent cycling in dry weather often points to a stuck or overly sensitive float switch, a failed check valve letting discharged water flow back into the pit, or a naturally high water table in the area — worth having checked rather than assumed normal." },
          { question: "Where should a sump pump's discharge line go?", answer: "As far from the foundation as practical, so the pumped water doesn't simply drain back down into the same soil near the footing and get pulled right back into the sump pit." },
          { question: "How long does a battery-backup sump pump last during an outage?", answer: "It varies by battery capacity and pump load, but commonly ranges from several hours to roughly a day — long enough for many outages, but not unlimited, which is why monitoring an extended outage still matters." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
