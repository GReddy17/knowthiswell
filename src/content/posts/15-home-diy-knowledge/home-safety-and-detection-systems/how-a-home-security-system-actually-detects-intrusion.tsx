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
  title: "How a Home Security System Actually Detects Intrusion",
  category: "home-diy-knowledge",
  order: 34,
  subtopic: "home-safety-and-detection-systems",
  tags: ["home security system", "motion sensor", "contact sensor", "glass break sensor", "alarm monitoring"],
  date: "2026-09-12",
  updated: "2026-09-24",
  lastReviewed: "2026-09-12",
  excerpt: "A home security system detects intrusion through specific sensor types — contact, motion, and glass-break — each reacting to a different physical signal, then reporting to a monitoring center.",
  summary: "A home security system isn't one device watching for \"intrusion\" in general — it's a set of sensors, each built to react to a specific physical signal (a door opening, a warm body moving, glass shattering), reporting through a control panel to a monitoring center that decides how to respond.",
  sources: [
    { label: "NFPA — National Fire Protection Association, NFPA 731 Standard for Electronic Premises Security Systems", url: "https://www.nfpa.org/codes-and-standards/1/13/nfpa-731" },
    { label: "Security Industry Association (SIA)", url: "https://www.securityindustry.org" },
    { label: "UL Standards & Engagement — UL 639 Standard for Intrusion-Detection Units", url: "https://www.ul.com" },
  ],
  seeAlso: [
    "home-diy-knowledge/how-a-smoke-detector-actually-senses-smoke",
    "home-diy-knowledge/why-carbon-monoxide-detectors-are-essential",
    "home-diy-knowledge/what-a-stud-finder-actually-detects",
    "home-diy-knowledge/how-a-wall-anchor-actually-holds-weight",
    "home-diy-knowledge/how-a-circuit-breaker-actually-protects-your-home",
  ],
  glossary: [
    { term: "Contact sensor", definition: "A two-part magnetic sensor mounted on a door or window frame that reports 'open' the instant its magnet moves away from its switch." },
    { term: "PIR motion sensor", definition: "A passive infrared sensor that detects a moving heat source by watching for a changing pattern of infrared radiation across its field of view, rather than emitting any signal itself." },
    { term: "Glass-break sensor", definition: "An acoustic sensor tuned to recognize the specific frequency signature of breaking glass, distinguishing it from other loud household sounds." },
    { term: "Monitoring center", definition: "A staffed facility that receives an alarm signal from a home's control panel and decides whether to contact the homeowner, dispatch emergency responders, or both." },
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
  {"question": "What does a door contact sensor detect?", "difficulty": "easy", "options": [{"text": "A magnet separating from its switch when the door opens", "correct": true, "explanation": "It's a simple, reliable open-or-closed signal."}, {"text": "Body heat", "correct": false, "explanation": "That's what a PIR motion sensor detects."}, {"text": "The sound of breaking glass", "correct": false, "explanation": "That's a glass-break sensor."}]},
  {"question": "What does a PIR motion sensor react to?", "difficulty": "easy", "options": [{"text": "A moving heat source", "correct": true, "explanation": "Passive infrared sensors watch for heat moving across their view."}, {"text": "Door magnets", "correct": false, "explanation": "Magnets are for contact sensors."}, {"text": "Wi-Fi signals", "correct": false, "explanation": "PIR sensors respond to infrared heat, not wireless signals."}]},
  {"question": "Does the monitoring center actually see the intrusion happen?", "difficulty": "easy", "options": [{"text": "Yes, through built-in cameras on every sensor", "correct": false, "explanation": "Most sensors send only a signal, not video."}, {"text": "No, it only receives the reports the sensors are built to send", "correct": true, "explanation": "That's why sensor type and placement matter so much."}, {"text": "Only if the police are already there", "correct": false, "explanation": "The center responds to sensor reports, not police observation."}]},
  {"question": "What causes most false alarms?", "difficulty": "hard", "options": [{"text": "Broken control panels", "correct": false, "explanation": "System failures are the less common cause."}, {"text": "Sensors correctly reacting to something harmless, like a pet or a door left ajar", "correct": true, "explanation": "The sensor did its job; the trigger was innocent."}, {"text": "Hackers", "correct": false, "explanation": "The common cause is harmless triggers, not attacks."}]},
  {"question": "A homeowner with a large dog wants motion detection without constant alarms. What is the best approach based on how sensors work?", "difficulty": "hard", "options": [{"text": "Turn motion sensors up to maximum sensitivity", "correct": false, "explanation": "Higher sensitivity makes pet triggers more likely."}, {"text": "Rely more on door and window contact sensors, and use pet-aware motion sensors placed away from the dog's paths", "correct": true, "explanation": "Match sensor type and placement to what each one reacts to."}, {"text": "Remove all sensors except glass-break", "correct": false, "explanation": "That leaves most entry points uncovered."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "A home security system isn't a single all-purpose intrusion sensor — it's a set of different sensor types, each reacting to one specific physical signal: a magnet separating, a moving heat source, or the sound of breaking glass.",
          "The control panel and monitoring center never directly witness the intrusion itself — they only receive whatever report each sensor is built to send, which is why sensor placement and type matter as much as having a system at all.",
          "Most false alarms trace back to a sensor doing exactly what it's designed to do in response to something harmless — a pet crossing a motion sensor's field of view, a door left ajar — rather than a system malfunction.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A home security system is really a collection of separate sensors placed around the house, each watching for one specific thing &#8212; a door or window opening, movement in a room, or the sound of glass breaking. When a sensor detects its specific signal, it sends that report to a central control panel, which decides whether the system is currently armed and, if so, passes the alert along to a monitoring center. The monitoring center then decides how to respond, usually by calling the homeowner first and involving emergency responders if there&apos;s no answer or the situation is confirmed.</div>}
        detailed={<div className="prose-p">Three sensor types cover most of what a residential system detects, and each relies on a distinct physical principle. A <TermLink href="/home-diy-knowledge/how-a-home-security-system-actually-detects-intrusion">contact sensor</TermLink> is a simple two-piece magnetic switch: one piece on the door or window frame, one on the moving part itself, and the circuit stays closed only while the magnet is close enough to the switch. Moving the door or window even slightly breaks that magnetic connection and reports &quot;open&quot; instantly &#8212; there&apos;s no interpretation involved, just a binary state change. A <TermLink href="/home-diy-knowledge/how-a-home-security-system-actually-detects-intrusion">PIR motion sensor</TermLink> (passive infrared) works completely differently: it doesn&apos;t emit any signal at all, instead passively watching the infrared radiation every warm object gives off across its field of view, divided into multiple zones by an internal lens. A person walking through the room shifts warm infrared signal from zone to zone in a pattern consistent with movement, which the sensor&apos;s circuit is tuned to recognize — a stationary warm object, like a radiator, produces no such changing pattern and doesn&apos;t trigger it. A <TermLink href="/home-diy-knowledge/how-a-home-security-system-actually-detects-intrusion">glass-break sensor</TermLink> takes an acoustic approach, listening for the specific frequency signature breaking glass produces — often characterized by a sharp high-frequency component from the initial impact followed by a lower-frequency component from the glass shattering — a pattern tuned to be distinct enough from a dropped plate or a loud television to avoid triggering on those sounds alone. Every sensor&apos;s report travels to the control panel, which checks the system&apos;s armed state and any configured entry delay before relaying a genuine alert to the <TermLink href="/home-diy-knowledge/how-a-home-security-system-actually-detects-intrusion">monitoring center</TermLink>.</div>}
      />
      <FootnoteAside>Because a PIR sensor only reacts to a changing infrared pattern, not simple presence, a person standing perfectly still just inside its field of view for a long period can, in some cases, avoid triggering it — which is one reason security layouts often combine motion coverage with contact sensors at entry points.</FootnoteAside>

      <p>
        Because each sensor type is watching for a completely different physical signal, the specific mix and placement of sensors in a home determines what kind of intrusion attempt actually gets caught, and how quickly.
      </p>

      <QuickCheck
        question="What does a home security system's control panel actually receive from its sensors?"
        options={[
          { text: "A live video or audio feed of whatever triggered each sensor", correct: false, explanation: "Standard contact, motion, and glass-break sensors don't send video or audio — they send a simple triggered/not-triggered report based on their specific physical signal." },
          { text: "A report that a specific physical signal — a magnetic separation, an infrared pattern, or an acoustic signature — has been detected", correct: true, explanation: "Correct. Each sensor type detects one specific physical signal and reports that detection to the panel, which then decides how to respond based on the system's armed state." },
          { text: "A general 'intrusion detected' signal identical from every sensor type, with no way to tell which sensor triggered", correct: false, explanation: "Most systems identify which specific sensor triggered, which is important both for the monitoring center's response and for the homeowner troubleshooting false alarms." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A door contact sensor triggering while armed (baseline case)</h3>
      <p>
        With the system armed and everyone away, a back door is opened, separating the contact sensor&apos;s magnet from its switch. The panel immediately registers &quot;open&quot; on that zone, checks that no valid entry code was entered, and starts (or skips, depending on configuration) a brief exit/entry delay before treating it as a real alarm and alerting the monitoring center. This is the most straightforward and reliable detection case: a binary magnetic state change with essentially no ambiguity about what happened.
      </p>
      <QuickCheck
        question="Why is a contact sensor's detection considered very reliable compared to some other sensor types?"
        options={[
          { text: "Because it reports a simple binary state — magnet close or magnet separated — with little room for ambiguous interpretation", correct: true, explanation: "Correct. A contact sensor's mechanism is a direct physical state change, which is why it produces very few false or ambiguous readings compared to sensors that interpret a more complex signal." },
          { text: "Because it uses a camera to visually confirm a person is present before triggering", correct: false, explanation: "Standard contact sensors have no camera or visual component — reliability comes from the simplicity of the magnetic on/off mechanism, not visual confirmation." },
          { text: "Because it can distinguish a family member from an intruder based on their weight", correct: false, explanation: "A contact sensor has no way to identify who opened the door — it only reports that the door moved, which is exactly why entry codes and delays exist as the next layer of the system." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A motion sensor triggered by a pet, not an intruder (edge case / variation)</h3>
      <div className="prose-p">
        A cat walks across a living room covered by a PIR motion sensor while the system is armed in &quot;away&quot; mode, triggering a false alarm. This happens because the sensor is reacting to a genuinely changing infrared pattern crossing its field of view — the same mechanism that catches an intruder also catches a moving pet, since the sensor has no way to distinguish body size or species from infrared pattern alone unless it&apos;s specifically rated &quot;pet-immune,&quot; a feature that adjusts sensitivity to reduce (not eliminate) triggering from smaller, lower-body-heat animals. This is a genuine limitation of the mechanism, not a defect in a specific unit.
      </div>
      <QuickCheck
        question="Why can a standard PIR motion sensor be triggered by a pet moving through a room, even when working correctly?"
        options={[
          { text: "Because the sensor is malfunctioning and needs replacement whenever this happens", correct: false, explanation: "A pet triggering a standard motion sensor is a normal, expected limitation of the infrared-pattern mechanism, not a sign of malfunction." },
          { text: "Because the sensor reacts to a changing infrared pattern crossing its field of view, and a moving pet produces that same kind of pattern", correct: true, explanation: "Correct. Without pet-immune tuning, the sensor's mechanism doesn't distinguish species or body size — it just reacts to infrared pattern change, which a moving pet also produces." },
          { text: "Because pets emit a unique ultrasonic sound that all motion sensors are built to detect", correct: false, explanation: "Standard PIR motion sensors are infrared-based, not acoustic — sound has nothing to do with how they trigger." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: An alarm signal reaching the monitoring center at 2 a.m. (real-world / applied case)</h3>
      <p>
        A glass-break sensor near a first-floor window triggers overnight, sending an alert through the control panel to a monitoring center. Following a fairly standard protocol, the center first attempts to call the homeowner&apos;s listed phone number to verify the alarm isn&apos;t a false trigger; if there&apos;s no answer, or the homeowner can&apos;t provide the correct verbal passcode, the center typically dispatches police to the address and continues trying to reach any other listed contacts. This verification step exists specifically to reduce false dispatches to law enforcement, since the center itself never directly observes what actually happened — it only knows a specific sensor reported its specific signal.
      </p>
      <QuickCheck
        question="Why does a monitoring center typically try to call the homeowner before dispatching police after an alarm signal?"
        options={[
          { text: "Because the center can see through the system's sensors and wants to confirm what it's already observed visually", correct: false, explanation: "The monitoring center doesn't have visual confirmation from standard sensors — it only receives the sensor's report, which is exactly why a verification call matters." },
          { text: "Because verification calls reduce false dispatches to emergency responders when an alarm turns out to be a false trigger", correct: true, explanation: "Correct. Since the center only knows a sensor reported a specific signal, not what actually caused it, a quick verification step helps avoid unnecessary emergency dispatches." },
          { text: "Because police will not respond to any alarm signal unless a monitoring center first speaks with the homeowner directly", correct: false, explanation: "Policies vary by jurisdiction and system, but the core reason for the verification call is reducing false dispatches, not a blanket rule that police won't respond otherwise." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="From a triggered sensor to a dispatched response"
        type="flow"
        svgSrc="/diagrams/home-diy-knowledge-how-a-home-security-system-actually-detects-intrusion-flow.svg"
        altText="Flow diagram showing how a triggered sensor (contact, motion, or glass-break) sends a signal to the control panel, which relays it to a monitoring center, which then contacts the homeowner or dispatches emergency responders."
      />
      <p>
        Notice that each arrow in the chain only carries a report of what the previous step detected &#8212; nobody downstream is watching the actual event happen, only its reported signal.
      </p>
      <p>
        Getting that first report right starts with a solid physical mount: locating framing with a <TermLink href="/home-diy-knowledge/what-a-stud-finder-actually-detects">stud finder</TermLink> before drilling, or using a properly rated <TermLink href="/home-diy-knowledge/how-a-wall-anchor-actually-holds-weight">wall anchor</TermLink> on a hollow section, keeps a sensor or keypad from loosening or misaligning over time, which can cause exactly the kind of intermittent, hard-to-diagnose false trigger a homeowner would otherwise blame on the electronics.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Mounting motion sensors aimed directly at heat sources like vents, radiators, or sun-facing windows.", fix: "Position motion sensors away from strong, changing heat sources and confirm 'pet-immune' settings if applicable, to reduce nuisance triggers." },
          { mistake: "Mounting a keypad or sensor on hollow drywall with adhesive only, then having it fall or loosen over time.", fix: "Locate solid backing before drilling, and use a proper wall anchor rated for the device's weight on any hollow-wall mount." },
          { mistake: "Skipping a stud finder pass before drilling into a wall for a sensor or keypad, then guessing at what's behind the drywall.", fix: "Use a stud finder to confirm what's actually behind the wall before drilling, especially near wiring or plumbing runs." },
          { mistake: "Assuming every sensor type detects every kind of intrusion attempt equally well.", fix: "Layer sensor types — contact sensors at entry points, motion coverage in open areas, glass-break sensors near windows — rather than relying on just one type throughout the home." },
        ]}
      />
      <MisconceptionCallout
        myth="A home security system 'sees' an intruder the way a person would."
        reality={<p>A security system has no general awareness of an intrusion &#8212; each sensor only detects one specific physical signal it was built to react to: a magnetic separation, a changing infrared pattern, or an acoustic signature matching breaking glass. The control panel and monitoring center only ever know that a specific sensor reported its specific trigger, not what actually happened in the room. This is exactly why sensor type and placement matter so much, and why false alarms &#8212; a pet, a loose window, a dropped object &#8212; happen: the sensor is reacting correctly to its signal, even when that signal didn&apos;t come from an intruder.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Map which sensor types cover which areas of your home, and add layered coverage — contact, motion, glass-break — rather than relying on one type alone.",
          "Locate solid backing with a stud finder before mounting sensors or a keypad on drywall, or use a properly rated wall anchor on hollow sections.",
          "Position motion sensors away from vents, radiators, and direct sun exposure, and confirm pet-immune settings if applicable.",
          "Confirm your monitoring center's verification process and keep contact numbers and passcodes current, so a real alert isn't delayed by an out-of-date phone number.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does a motion sensor tell the difference between a person and a pet?", answer: "A standard PIR motion sensor can't reliably tell the difference on its own — it reacts to a changing infrared pattern, which a moving pet also produces. 'Pet-immune' sensors adjust sensitivity to reduce, but not fully eliminate, triggering from smaller animals." },
          { question: "What's the difference between a contact sensor and a motion sensor?", answer: "A contact sensor is a magnetic switch that reports when a door or window opens, detecting a direct physical state change. A motion sensor detects movement across a room using infrared, without needing a door or window to be involved at all." },
          { question: "How does a glass-break sensor avoid false alarms from other loud sounds?", answer: "It's tuned to recognize the specific frequency signature of breaking glass — typically a sharp high-frequency impact followed by a lower-frequency shattering pattern — which is distinct enough from most other household sounds like a dropped plate or a loud TV." },
          { question: "What happens after a security sensor is triggered?", answer: "The sensor's signal goes to the control panel, which checks whether the system is armed and applies any configured delay, then relays a genuine alert to a monitoring center. The center typically attempts to verify with the homeowner before deciding whether to dispatch emergency responders." },
          { question: "Do I need a professionally monitored system, or is a self-monitored one enough?", answer: "This depends on personal risk tolerance, budget, and how quickly you want a response if you're away — a professionally monitored system adds a staffed center relaying alerts to responders, while a self-monitored system sends alerts directly to you to act on." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
