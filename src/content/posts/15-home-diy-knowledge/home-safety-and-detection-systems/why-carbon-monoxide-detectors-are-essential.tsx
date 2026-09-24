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
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Why Carbon Monoxide Detectors Are Essential (What CO Actually Does)",
  category: "home-diy-knowledge",
  order: 32,
  subtopic: "home-safety-and-detection-systems",
  tags: ["carbon monoxide detector", "CO alarm", "incomplete combustion", "indoor air safety", "home safety"],
  date: "2026-09-12",
  updated: "2026-09-24",
  lastReviewed: "2026-09-12",
  excerpt: "Carbon monoxide is colorless, odorless, and displaces oxygen in the blood — a CO detector's electrochemical sensor is the only practical way to notice it building up indoors.",
  summary: "Carbon monoxide forms whenever a fuel burns without quite enough oxygen, and because it has no color, smell, or taste, an electrochemical sensor tracking parts-per-million concentration over time is the only realistic way a household actually notices it before symptoms set in.",
  sources: [
    { label: "CPSC — U.S. Consumer Product Safety Commission, Carbon Monoxide Information Center", url: "https://www.cpsc.gov/Safety-Education/Safety-Guides/Home/Carbon-Monoxide-Questions-and-Answers" },
    { label: "CDC — Centers for Disease Control and Prevention, Carbon Monoxide Poisoning", url: "https://www.cdc.gov/carbon-monoxide/" },
    { label: "NFPA — National Fire Protection Association, Carbon Monoxide Safety", url: "https://www.nfpa.org/education-and-research/home-fire-safety/carbon-monoxide" },
    { label: "UL Standards & Engagement — UL 2034 Standard for Carbon Monoxide Alarms", url: "https://www.ul.com" },
  ],
  seeAlso: [
    "home-diy-knowledge/how-a-smoke-detector-actually-senses-smoke",
    "home-diy-knowledge/why-radon-testing-matters-for-home-safety",
    "home-diy-knowledge/how-a-fire-extinguisher-class-rating-works",
    "home-diy-knowledge/how-a-thermostat-actually-controls-temperature",
    "home-diy-knowledge/why-air-filters-need-regular-replacement",
  ],
  glossary: [
    { term: "Carboxyhemoglobin", definition: "The compound formed when carbon monoxide binds to hemoglobin in red blood cells, taking up the spot oxygen would normally occupy and reducing how much oxygen the blood can carry." },
    { term: "Incomplete combustion", definition: "Burning a fuel without enough oxygen to convert all its carbon fully to carbon dioxide, which leaves carbon monoxide as a byproduct instead." },
    { term: "Electrochemical sensor", definition: "A CO detector's sensing element, which produces a small electric current proportional to how much carbon monoxide reacts at its electrodes." },
    { term: "Parts per million (ppm)", definition: "A concentration unit meaning how many CO molecules are present for every one million air molecules — the unit CO alarms use to track exposure level over time." },
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

/** Quiz bank: feeds the end-of-article "Test yourself" quiz and the game (not rendered inline). */
export const quiz: QuizBankItem[] = [
  {"question": "Why can't people notice carbon monoxide without a detector?", "difficulty": "easy", "options": [{"text": "It has no color, smell or taste", "correct": true, "explanation": "There's no natural warning sign."}, {"text": "It only appears at night", "correct": false, "explanation": "CO can form any time fuel burns incompletely."}, {"text": "It smells like smoke", "correct": false, "explanation": "CO itself is odorless."}]},
  {"question": "When does carbon monoxide form?", "difficulty": "easy", "options": [{"text": "When fuel burns without enough oxygen to fully convert its carbon to carbon dioxide", "correct": true, "explanation": "Furnaces, stoves, engines and generators can all produce it."}, {"text": "Only in car exhaust", "correct": false, "explanation": "Any fuel-burning appliance can produce it."}, {"text": "When water boils", "correct": false, "explanation": "Boiling water doesn't produce CO."}]},
  {"question": "What should you do first if a CO alarm sounds?", "difficulty": "easy", "options": [{"text": "Get everyone outside into fresh air, then call emergency services", "correct": true, "explanation": "Remove people from exposure first."}, {"text": "Remove the alarm's battery", "correct": false, "explanation": "That silences the warning without removing the danger."}, {"text": "Open one window and go back to sleep", "correct": false, "explanation": "Leave the building and get help."}]},
  {"question": "Why does a CO detector track exposure over time rather than a single reading?", "difficulty": "hard", "options": [{"text": "CO builds up in the blood over time, so both concentration and duration matter", "correct": true, "explanation": "High levels trip it within minutes; lower levels take longer."}, {"text": "Detectors can only take one reading per hour", "correct": false, "explanation": "They monitor continuously."}, {"text": "To save battery", "correct": false, "explanation": "Tracking over time mirrors how CO actually affects people."}]},
  {"question": "Why is carbon monoxide dangerous to the body?", "difficulty": "hard", "options": [{"text": "It binds to hemoglobin more readily than oxygen, crowding oxygen out of the blood", "correct": true, "explanation": "The blood carries less oxygen as CO builds up."}, {"text": "It burns the lungs", "correct": false, "explanation": "The main effect is on oxygen transport in the blood."}, {"text": "It is radioactive", "correct": false, "explanation": "CO isn't radioactive; it blocks oxygen transport."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Carbon monoxide (CO) forms whenever a fuel burns without enough oxygen to fully convert its carbon to carbon dioxide, and it has no color, smell, or taste to warn anyone of its presence.",
          "A CO detector's electrochemical sensor tracks concentration over time, not just a single reading — a very high level trips the alarm within minutes, while a lower level takes longer, mirroring how CO actually accumulates in the blood.",
          "CO is dangerous because it binds to hemoglobin more readily than oxygen does, crowding oxygen out of the blood — this is a chemical and physiological fact, not a reason for alarm about ordinary daily activities where detectors and proper venting are in place.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Carbon monoxide is a gas produced whenever something burns fuel &#8212; a furnace, a gas stove, a car engine, a generator &#8212; without quite enough air mixed in. Unlike smoke, it has no color, smell, or taste, so a person in the room has no natural way to notice it building up. A CO detector exists specifically to fill that gap: a small sensor inside reacts to CO molecules in the air and sounds an alarm once the level and duration of exposure reach a point considered unsafe.</div>}
        detailed={<div className="prose-p">CO forms through <TermLink href="/home-diy-knowledge/why-carbon-monoxide-detectors-are-essential">incomplete combustion</TermLink> &#8212; when a hydrocarbon fuel burns in a limited-oxygen environment, some of its carbon ends up bonding with only one oxygen atom (CO) instead of two (CO2). Most residential CO alarms use an <TermLink href="/home-diy-knowledge/why-carbon-monoxide-detectors-are-essential">electrochemical sensor</TermLink>: CO molecules diffusing into the sensor react at an electrode, producing a small electric current roughly proportional to the CO concentration present. The alarm&apos;s circuit doesn&apos;t simply compare that current to one fixed threshold &#8212; it integrates concentration in <TermLink href="/home-diy-knowledge/why-carbon-monoxide-detectors-are-essential">parts per million (ppm)</TermLink> against exposure time, because that combination is what actually matters physiologically. Once inhaled, CO binds to hemoglobin roughly 200 to 250 times more readily than oxygen does, forming <TermLink href="/home-diy-knowledge/why-carbon-monoxide-detectors-are-essential">carboxyhemoglobin</TermLink> and reducing the blood&apos;s effective oxygen-carrying capacity. A brief exposure to a moderate concentration and a long exposure to a lower concentration can produce a similar buildup in the blood, which is exactly why alarms are designed to trip faster at high ppm and more slowly at low ppm, rather than using a single instant cutoff.</div>}
      />
      <FootnoteAside>The Consumer Product Safety Commission and the CDC both note that CO poisoning symptoms &#8212; headache, dizziness, nausea, fatigue &#8212; closely resemble the flu, which is part of why unrecognized exposure is a genuine hazard and why a functioning detector matters more than trying to &quot;notice&quot; it by feel.</FootnoteAside>

      <p>
        Because CO exposure is a function of both concentration and time, a single sniff test or a one-time reading tells a household almost nothing &#8212; continuous monitoring is the only mechanism that actually matches how the hazard behaves.
      </p>

      <QuickCheck
        question="Why can't a person simply notice dangerous carbon monoxide levels building up in a room without a detector?"
        options={[
          { text: "Because CO has no color, smell, or taste, so there's no sensory cue available even at hazardous concentrations", correct: true, explanation: "Correct. CO is undetectable by human senses, which is precisely why an electrochemical sensor is the practical way to notice it." },
          { text: "Because CO only becomes dangerous at concentrations too low for any sensor to measure either", correct: false, explanation: "CO detectors are specifically designed to measure the low-ppm range where CO becomes hazardous over time — sensors can measure well below the concentrations that pose a risk." },
          { text: "Because CO is heavier than air and always stays near the floor, out of normal breathing range", correct: false, explanation: "CO has a density very close to that of air and mixes throughout a room rather than settling in one layer, which is part of why detection can't rely on where you'd expect it to pool." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A furnace with a cracked heat exchanger (baseline case)</h3>
      <p>
        An aging gas furnace develops a small crack in its heat exchanger, allowing combustion byproducts, including CO, to mix into the air the same blower that a <TermLink href="/home-diy-knowledge/how-a-thermostat-actually-controls-temperature">thermostat</TermLink> cycles on and off pushes through the house, instead of venting entirely outside. Over the course of a heating cycle, CO concentration in the home climbs gradually. A properly placed CO detector tracks this rising ppm level over time and sounds its alarm once the combined concentration-and-duration threshold is crossed &#8212; well before symptoms would typically appear in most people. Keeping the furnace&apos;s intake side clear also matters here: a badly clogged filter forces the burner to work harder and can worsen incomplete combustion, which is one more reason the same <TermLink href="/home-diy-knowledge/why-air-filters-need-regular-replacement">regular filter replacement</TermLink> that keeps a system running efficiently also supports safer combustion.
      </p>
      <QuickCheck
        question="A furnace slowly leaks CO into the home over several hours rather than all at once. How does a CO alarm handle this kind of gradual buildup?"
        options={[
          { text: "It ignores gradual increases entirely and only reacts to a sudden spike in concentration", correct: false, explanation: "CO alarms track concentration over time specifically so gradual buildups are caught, not just sudden spikes." },
          { text: "It tracks ppm concentration against exposure duration and alarms once that combination crosses a hazard threshold, even without a sudden spike", correct: true, explanation: "Correct. This time-weighted response is exactly how CO alarms are designed to behave, since low, sustained exposure can be as dangerous as a brief high exposure." },
          { text: "It resets its baseline reading every few minutes, so a slow leak never accumulates in its measurement", correct: false, explanation: "CO alarms don't reset their tracking this way — the whole design point is to accumulate concentration over time so slow leaks are still caught." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A portable generator running in an attached garage (edge case / variation)</h3>
      <div className="prose-p">
        During a power outage, a portable generator runs in an attached garage with the door partly open, producing CO far faster and in far higher concentration than a malfunctioning furnace would. Here the alarm&apos;s response looks very different: rather than a gradual multi-hour buildup, ppm levels can spike quickly enough that a properly functioning detector alarms within minutes. This scenario is also the one CPSC and CDC guidance specifically warns about &#8212; generators are a leading cause of acute CO poisoning precisely because their output is so concentrated and fast compared to appliance leaks, and running one in or near any attached structure defeats the purpose of good ventilation entirely.
      </div>
      <QuickCheck
        question="Why does a portable generator running in an attached garage pose a faster-acting CO hazard than a slowly leaking furnace?"
        options={[
          { text: "Because generators produce CO at a much higher rate and concentration, so the ppm-times-time threshold is crossed in minutes rather than hours", correct: true, explanation: "Correct. A generator's output is concentrated enough that dangerous exposure can accumulate very quickly, which is why running one indoors or in an attached space is specifically warned against." },
          { text: "Because generators produce a different, more toxic gas than furnaces do, unrelated to carbon monoxide", correct: false, explanation: "Both generators and furnaces produce CO through incomplete combustion of fuel — the danger difference is the rate and concentration of CO produced, not a different gas." },
          { text: "Because attached garages have no air exchange with the rest of the house at all, so the risk is actually lower", correct: false, explanation: "Attached garages typically do exchange air with the house through shared walls, doors, and ductwork, which is exactly why running a generator there is hazardous to the home, not isolated from it." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Deciding where to install CO detectors in a home (real-world / applied case)</h3>
      <p>
        A homeowner installing new CO detectors places one on every level of the house and within earshot of each sleeping area, matching common safety-organization guidance rather than clustering them all near the furnace. Because CO mixes fairly evenly through room air rather than pooling in one predictable spot, coverage across levels and near where people sleep matters more than precise placement relative to a single appliance. If an alarm sounds, the appropriate response is to move everyone to fresh air immediately and call emergency services or the fire department from outside &#8212; not to try to locate the source personally before leaving.
      </p>
      <QuickCheck
        question="What is the recommended first response if a CO alarm sounds in a home?"
        options={[
          { text: "Immediately move everyone to fresh air and call emergency services from outside the home", correct: true, explanation: "Correct. Because CO exposure can impair judgment quickly, leaving first and calling for help from a safe location is the recommended response, rather than investigating the source." },
          { text: "Open a single window near the alarm and wait a few minutes to see if the alarm resets on its own", correct: false, explanation: "Waiting inside to see if an alarm clears risks continued exposure — the recommended response is to leave and call for help, not to wait it out indoors." },
          { text: "Locate and shut off every gas appliance in the house before leaving, to be safe", correct: false, explanation: "Searching for the source before leaving delays getting to fresh air and risks further exposure — leaving first and contacting responders is the safer sequence." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="From a CO source to a tripped alarm"
        type="flow"
        svgSrc="/diagrams/home-diy-knowledge-why-carbon-monoxide-detectors-are-essential-flow.svg"
        altText="Flow diagram showing how carbon monoxide reaches a detector's electrochemical sensor, how the sensor's ppm-times-time reading builds toward an alarm threshold, and how the alarm response differs from a smoke alarm's response."
      />
      <p>
        The key relationship to notice is the ppm-times-time step &#8212; it&apos;s why a CO alarm can seem to react instantly to a large leak but take longer to trip on a small, steady one.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a smoke detector also covers carbon monoxide unless it's specifically labeled as a combination alarm.", fix: "Check the unit's labeling and install a dedicated CO alarm, or a labeled smoke/CO combination alarm, on every level and near sleeping areas." },
          { mistake: "Running a generator, grill, or other fuel-burning engine in a garage, even with the door partly open, during a power outage.", fix: "Run generators outdoors, well away from windows, doors, and vents, per manufacturer and CPSC guidance — never inside a garage, attached or not." },
          { mistake: "Trying to diagnose or locate the CO source personally after an alarm sounds, before leaving the building.", fix: "Get everyone to fresh air immediately and call emergency services from outside; let trained responders investigate the source." },
        ]}
      />
      <MisconceptionCallout
        myth="If a room doesn't smell strange or feel different, carbon monoxide isn't present."
        reality={<p>Carbon monoxide has no color, smell, or taste at any concentration relevant to human safety, so there is no sensory signal &#8212; strange smell, visible haze, discomfort &#8212; that reliably indicates its presence. Early poisoning symptoms like headache, dizziness, and fatigue are easy to mistake for common illness, which is exactly why an electrochemical sensor is the mechanism that actually catches it, not human perception. A working CO alarm, tested regularly, is the only realistic substitute for a warning sense the body simply doesn&apos;t have for this particular gas.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Install a CO alarm on every level of your home and near each sleeping area, following manufacturer and NFPA placement guidance.",
          "Test CO alarms monthly with the built-in test button and replace units per the manufacturer's stated sensor lifespan, commonly 5 to 10 years.",
          "Never run a generator, grill, or other fuel-burning engine indoors or in an attached garage, even briefly or with a door open.",
          "If an alarm sounds, get everyone to fresh air immediately and call emergency services from outside rather than investigating the source yourself.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does a carbon monoxide detector actually work?", answer: "Most residential CO alarms use an electrochemical sensor that produces a small electric current when CO molecules react at its electrode. The alarm's circuit tracks that concentration over time and trips once the combined ppm-and-duration exposure crosses a hazard threshold." },
          { question: "Can a smoke detector also detect carbon monoxide?", answer: "Only if it's specifically labeled as a combination smoke/CO alarm. A standard smoke-only detector has no electrochemical CO sensor and will not detect carbon monoxide at all." },
          { question: "How often should carbon monoxide detectors be replaced?", answer: "Most manufacturers specify a sensor lifespan of roughly 5 to 10 years, after which the electrochemical sensor's accuracy degrades — check the manufacture date and replacement guidance printed on the specific unit." },
          { question: "What are the early symptoms of carbon monoxide exposure?", answer: "The CDC lists headache, dizziness, weakness, nausea, and confusion as common early symptoms, which closely resemble flu-like illness. If you suspect CO exposure, get to fresh air and contact emergency services or a healthcare professional rather than self-diagnosing." },
          { question: "Is it safe to use a gas stove without a CO detector?", answer: "This is a question best answered with real safety data and a professional inspection where in doubt; in general, any home with fuel-burning appliances benefits from a properly installed and tested CO detector as a general safety practice, per CPSC and NFPA guidance." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
