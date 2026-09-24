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
  title: "How a Smoke Detector Actually Senses Smoke",
  category: "home-diy-knowledge",
  order: 31,
  subtopic: "home-safety-and-detection-systems",
  tags: ["smoke detector", "ionization sensor", "photoelectric sensor", "fire safety", "home safety"],
  date: "2026-09-12",
  updated: "2026-09-24",
  lastReviewed: "2026-09-12",
  excerpt: "Smoke detectors sense smoke particles, not flame or heat, and ionization and photoelectric types detect very different kinds of particles at very different speeds.",
  summary: "A smoke detector isn't watching for fire — it's watching for smoke particles disrupting either a tiny electric current or a beam of light, and which of those two mechanisms a detector uses determines whether it reacts fastest to a flaming fire or a slow, smoldering one.",
  sources: [
    { label: "NFPA — National Fire Protection Association, Smoke Alarms", url: "https://www.nfpa.org/education-and-research/home-fire-safety/smoke-alarms" },
    { label: "USFA — U.S. Fire Administration, Smoke Alarms", url: "https://www.usfa.fema.gov/prevention/outreach/smoke_alarms.html" },
    { label: "CPSC — U.S. Consumer Product Safety Commission", url: "https://www.cpsc.gov" },
    { label: "UL Standards & Engagement — UL 217 Standard for Smoke Alarms", url: "https://www.ul.com" },
  ],
  seeAlso: [
    "home-diy-knowledge/why-carbon-monoxide-detectors-are-essential",
    "home-diy-knowledge/how-a-fire-extinguisher-class-rating-works",
    "home-diy-knowledge/how-a-home-security-system-actually-detects-intrusion",
    "home-diy-knowledge/how-a-circuit-breaker-actually-protects-your-home",
    "home-diy-knowledge/what-amps-volts-and-watts-actually-measure",
  ],
  glossary: [
    { term: "Ionization sensor", definition: "A smoke sensor that uses a tiny radioactive source to create a steady, measurable electric current in a chamber, then watches for smoke particles interrupting that current." },
    { term: "Photoelectric sensor", definition: "A smoke sensor that shines a light beam past, but not directly at, a light sensor, then watches for smoke particles scattering light onto the sensor." },
    { term: "Americium-241", definition: "A weakly radioactive element used in tiny, sealed amounts inside ionization smoke detectors to ionize the air in the sensing chamber." },
    { term: "Interconnected alarms", definition: "Smoke alarms wired or radio-linked together so that when one alarm senses smoke, every connected alarm in the home sounds, not just the one nearest the fire." },
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
  {"question": "What does a smoke detector actually sense?", "difficulty": "easy", "options": [{"text": "Heat", "correct": false, "explanation": "Heat detectors are a separate device."}, {"text": "Smoke particles in the air", "correct": true, "explanation": "Particles disturb either a tiny current or a light beam inside."}, {"text": "Flames directly", "correct": false, "explanation": "It never sees the flame itself."}]},
  {"question": "Which sensor type reacts fastest to a slow, smoldering fire?", "difficulty": "easy", "options": [{"text": "Photoelectric", "correct": true, "explanation": "Large, dense smoldering particles scatter its light beam onto the sensor."}, {"text": "Ionization", "correct": false, "explanation": "Ionization reacts fastest to small particles from flaming fires."}, {"text": "Neither can detect smoldering fires", "correct": false, "explanation": "Photoelectric sensors are good at exactly this."}]},
  {"question": "Why do many modern alarms combine both sensor types?", "difficulty": "easy", "options": [{"text": "Each type reacts fastest to a different kind of fire", "correct": true, "explanation": "Ionization for flaming, photoelectric for smoldering."}, {"text": "It makes them louder", "correct": false, "explanation": "Loudness isn't related to the sensor types."}, {"text": "One type is required by law and the other is decoration", "correct": false, "explanation": "Both genuinely sense smoke, in different ways."}]},
  {"question": "How does an ionization detector trigger?", "difficulty": "hard", "options": [{"text": "Smoke blocks a camera", "correct": false, "explanation": "There's no camera inside."}, {"text": "Smoke particles attach to ions in the chamber, dropping a small steady current below the trip level", "correct": true, "explanation": "The disturbed current is what sets off the alarm."}, {"text": "Smoke raises the chamber's temperature", "correct": false, "explanation": "That would be a heat detector."}]},
  {"question": "An ionization alarm near a kitchen keeps going off during cooking. What is the most likely explanation?", "difficulty": "hard", "options": [{"text": "The unit is defective", "correct": false, "explanation": "Most nuisance alarms are a sensor-location mismatch, not a fault."}, {"text": "Cooking smoke and steam are triggering a sensor type that's sensitive to small particles, placed too close to the kitchen", "correct": true, "explanation": "Moving it or switching to a photoelectric unit usually fixes it."}, {"text": "The battery is too strong", "correct": false, "explanation": "Battery strength doesn't cause false alarms."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "A smoke detector senses smoke particles in the air, not flame or heat directly — a separate device, a heat detector, is what actually watches for temperature.",
          "Ionization sensors react fastest to the small, fast-moving particles from a flaming fire, while photoelectric sensors react fastest to the larger, denser particles from a slow, smoldering fire — which is why many modern alarms combine both.",
          "Most nuisance alarms come from sensor-type mismatch with a location, not a defective unit — cooking smoke and steam are common triggers for ionization sensors placed too close to a kitchen.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A smoke detector isn&apos;t looking for fire itself — it&apos;s looking for smoke particles floating in the air near it. Inside the detector, something is normally in a steady, unchanging state: either a tiny electric current flowing through a small chamber, or a beam of light that&apos;s aimed so it misses a light sensor entirely. Smoke particles drifting into that chamber disturb whichever of those two things the detector is watching, and that disturbance is what actually trips the alarm.</div>}
        detailed={<div className="prose-p">There are two distinct sensing mechanisms in common household use, and they respond to physically different properties of smoke. An <TermLink href="/home-diy-knowledge/how-a-smoke-detector-actually-senses-smoke">ionization sensor</TermLink> uses a minuscule amount of <TermLink href="/home-diy-knowledge/how-a-smoke-detector-actually-senses-smoke">americium-241</TermLink> to ionize the air inside a small chamber, splitting air molecules into charged ions that carry a steady, measurable current between two electrically charged plates. Smoke particles entering the chamber attach to those ions, weighing them down and reducing how many reach the plates, which lowers the current and trips the alarm circuit once the drop crosses a threshold. A <TermLink href="/home-diy-knowledge/how-a-smoke-detector-actually-senses-smoke">photoelectric sensor</TermLink> works on an entirely different principle: an LED shines a beam of light across a chamber at an angle deliberately aimed away from a light-sensitive photodiode, so in clean air the photodiode sees essentially no light. Smoke particles crossing that beam scatter light in all directions — the same effect that makes a car&apos;s headlight beam visible in fog — and some of that scattered light lands on the photodiode, which triggers the alarm. Because flaming fires produce mostly small, fast-moving combustion particles while smoldering fires produce larger, denser smoke particles, the two sensor types have genuinely different response-speed profiles rather than one simply being an upgrade over the other.</div>}
      />
      <FootnoteAside>The amount of americium-241 inside a sealed ionization smoke detector is extremely small and considered safe during normal use — the concern regulators track is proper disposal, not exposure while the unit is installed and intact.</FootnoteAside>

      <p>
        Because the two mechanisms respond to different particle characteristics, the type of fire in front of them &#8212; not just the presence of smoke &#8212; changes how quickly each one reacts.
      </p>

      <QuickCheck
        question="What is a smoke detector actually sensing when it triggers an alarm?"
        options={[
          { text: "A rise in air temperature near the ceiling", correct: false, explanation: "Temperature is what a separate device, a heat detector, monitors — a standard smoke detector isn't reacting to heat at all." },
          { text: "Smoke particles disrupting an electric current or scattering a light beam inside the sensing chamber", correct: true, explanation: "Correct. Ionization sensors watch for smoke particles reducing a current; photoelectric sensors watch for smoke particles scattering light onto a sensor." },
          { text: "The visible flame reflecting off a small mirror inside the unit", correct: false, explanation: "There's no flame-sensing optic inside a standard smoke detector — both common sensor types react to smoke particles in the air, not to light reflecting off a flame." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A flaming wastebasket fire (baseline case)</h3>
      <p>
        A small flaming fire starts in a wastebasket, producing mostly tiny, fast-moving combustion particles that spread quickly through the air. An ionization detector nearby reacts within seconds &#8212; those small particles rapidly attach to the ions carrying current across the sensing chamber, dropping the current below the trip threshold almost immediately. This is the classic scenario ionization sensors are built to catch fastest: a fire that&apos;s already flaming and spreading quickly, where every extra second of warning matters.
      </p>
      <QuickCheck
        question="Why does an ionization smoke detector typically respond very quickly to a small, actively flaming fire?"
        options={[
          { text: "Because flaming fires produce small, fast-moving particles that quickly attach to the ions carrying current across the sensing chamber", correct: true, explanation: "Correct. Small combustion particles interfere with the ion current efficiently and quickly, which is exactly what an ionization sensor is most sensitive to." },
          { text: "Because ionization detectors contain a heat sensor tuned specifically to flame temperature", correct: false, explanation: "Ionization detectors don't sense heat — they sense particles disrupting an electric current in the sensing chamber, regardless of temperature." },
          { text: "Because flaming fires are always louder than smoldering fires, and the detector has a built-in microphone", correct: false, explanation: "Standard smoke detectors don't listen for sound at all — the response speed difference comes from particle size and behavior in the sensing chamber, not noise." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Smoldering wiring inside a wall (edge case / variation)</h3>
      <div className="prose-p">
        Overheated insulation on wiring inside a wall begins to smolder without ever bursting into open flame, releasing larger, denser smoke particles slowly into the room. An ionization detector in the same room may respond noticeably more slowly here, since these larger particles don&apos;t interfere with the ion current as efficiently as the small particles from a flaming fire. A photoelectric detector, by contrast, catches this scenario faster &#8212; the larger particles scatter light very effectively, triggering the alarm sooner than the ionization sensor would on its own. This is the core reason safety guidance increasingly points toward dual-sensor <TermLink href="/home-diy-knowledge/how-a-smoke-detector-actually-senses-smoke">interconnected alarms</TermLink> or units combining both technologies rather than relying on just one.
      </div>
      <QuickCheck
        question="In a slow, smoldering fire with no open flame, which sensor type is generally faster to respond, and why?"
        options={[
          { text: "The ionization sensor, because smoldering fires still create the same small particles as flaming fires", correct: false, explanation: "Smoldering fires actually produce larger, denser particles than flaming fires — ionization sensors are less efficient at catching those than photoelectric sensors are." },
          { text: "The photoelectric sensor, because the larger, denser particles from smoldering fires scatter light very effectively", correct: true, explanation: "Correct. Photoelectric sensors detect light scattering, and the larger particles typical of smoldering fires scatter light well, triggering the alarm sooner in this scenario." },
          { text: "Neither sensor type responds differently based on fire type — response speed only depends on distance from the fire", correct: false, explanation: "The two sensor types genuinely respond to different particle characteristics, so fire type (flaming vs. smoldering) does meaningfully change which one reacts first." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A kitchen alarm going off every time someone cooks (real-world / applied case)</h3>
      <p>
        A homeowner&apos;s hallway smoke alarm, an ionization-only model, keeps triggering nuisance alarms whenever someone sears meat or makes toast in the adjacent kitchen. Cooking smoke and steam both produce particles that can interfere with an ionization sensor&apos;s current, even without any real fire hazard present. The practical fix isn&apos;t disabling the alarm &#8212; it&apos;s relocating it slightly farther from the kitchen per the manufacturer&apos;s minimum-distance guidance, or replacing it with a photoelectric or dual-sensor unit, which tends to be less prone to cooking-related nuisance trips while still covering the same room. Many newer homes hardwire smoke alarms into a dedicated branch circuit protected by a standard <TermLink href="/home-diy-knowledge/how-a-circuit-breaker-actually-protects-your-home">circuit breaker</TermLink>, with a battery only as backup, so relocating a hardwired unit is a job for an electrician rather than a simple swap — battery-only units draw so little current, measured against the same <TermLink href="/home-diy-knowledge/what-amps-volts-and-watts-actually-measure">amps, volts, and watts</TermLink> relationship that governs any household circuit, that a single small battery can run one for a year or more.
      </p>
      <QuickCheck
        question="A hallway ionization smoke alarm near a kitchen keeps triggering false alarms during cooking. What's the appropriate response?"
        options={[
          { text: "Permanently disable or remove the alarm's batteries so it stops interrupting cooking", correct: false, explanation: "Disabling an alarm removes real fire protection from that area — the nuisance-trip problem should be solved by relocating or replacing the unit, not by disabling it." },
          { text: "Relocate the alarm farther from the kitchen per manufacturer guidance, or replace it with a photoelectric or dual-sensor unit less prone to cooking-related nuisance trips", correct: true, explanation: "Correct. This addresses the actual cause — an ionization sensor's sensitivity to cooking particles — without sacrificing fire coverage in that area." },
          { text: "Assume the alarm is defective and must be under warranty replacement, since a properly working alarm would never react to cooking", correct: false, explanation: "This is normal, well-documented ionization sensor behavior near cooking smoke, not a sign of a defective unit." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Ionization vs. photoelectric sensing"
        type="comparison"
        svgSrc="/diagrams/home-diy-knowledge-how-a-smoke-detector-actually-senses-smoke-comparison.svg"
        altText="Comparison of an ionization smoke detector, which senses smoke through disrupted electrical current between two charged plates near a tiny radioactive source, and a photoelectric smoke detector, which senses smoke through light scattered onto a sensor by smoke particles crossing a light beam."
      />
      <p>
        Notice that neither mechanism directly detects fire or heat &#8212; both are indirect measurements of smoke particles disturbing a baseline condition inside the chamber.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Removing the batteries or disabling an alarm permanently after a nuisance trip near a kitchen or bathroom.", fix: "Relocate the alarm to meet minimum-distance guidance from cooking appliances and steam sources, or switch to a photoelectric or dual-sensor unit instead of disabling protection." },
          { mistake: "Assuming a single sensor type — ionization or photoelectric — provides equal protection against every kind of fire.", fix: "Install dual-sensor or combination alarms, or use a mix of both types throughout the home, since each responds fastest to a different fire behavior." },
          { mistake: "Never replacing smoke alarms and assuming they work indefinitely as long as the battery is fresh.", fix: "Replace smoke alarms entirely on the manufacturer's recommended schedule — commonly around 10 years — since the sensing components themselves degrade with age, independent of the battery." },
        ]}
      />
      <MisconceptionCallout
        myth="All smoke detectors work the same way, and they detect fire itself."
        reality={<p>Smoke detectors detect smoke particles, not flame or heat, and they do it through two genuinely different mechanisms. An ionization sensor watches for smoke particles disrupting a small electric current, which makes it especially responsive to fast, flaming fires. A photoelectric sensor watches for smoke particles scattering a light beam onto a sensor, which makes it especially responsive to slow, smoldering fires. Neither type is simply a better version of the other &#8212; they&apos;re tuned to different physical behavior, which is exactly why current safety guidance favors combining both rather than relying on just one.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Test every smoke alarm in your home monthly using its built-in test button, not just when the low-battery chirp starts.",
          "Install dual-sensor or combination alarms, or a mix of ionization and photoelectric units, so both flaming and smoldering fires are covered quickly.",
          "Keep alarms interconnected where possible so every unit sounds together, and relocate any alarm that has repeated nuisance trips near cooking or steam.",
          "Replace every smoke alarm on the manufacturer's recommended schedule, commonly about every 10 years, regardless of how well it still seems to work.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What's the difference between ionization and photoelectric smoke detectors?", answer: "Ionization detectors sense smoke particles disrupting a small electric current inside a chamber and tend to respond fastest to flaming fires. Photoelectric detectors sense smoke particles scattering a light beam onto a sensor and tend to respond fastest to slow, smoldering fires." },
          { question: "Do smoke detectors also detect carbon monoxide?", answer: "Not unless the specific unit is labeled as a combination alarm. A standard smoke detector only senses smoke particles — carbon monoxide requires a separate electrochemical sensor, which combination alarms include alongside the smoke sensor." },
          { question: "Why does my smoke detector keep going off when I cook?", answer: "Ionization sensors can be triggered by cooking smoke and steam, since those particles interfere with the sensor's current similarly to real smoke. Relocating the alarm farther from the kitchen or switching to a photoelectric or dual-sensor unit usually resolves it." },
          { question: "How often should smoke detectors be replaced?", answer: "Most manufacturers and fire-safety organizations recommend replacing an entire smoke alarm roughly every 10 years, since the sensing components degrade with age regardless of battery condition — check the manufacture date printed on the unit itself." },
          { question: "Is it safe to have a smoke detector with a radioactive source in my home?", answer: "Yes — ionization detectors contain an extremely small, sealed amount of americium-241 that poses no meaningful exposure risk during normal, intact use. The only real precaution is disposing of the unit according to local guidelines rather than in general household trash." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
