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
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "How Airplane Mode Actually Works",
  category: "technology-basics",
  order: 78,
  subtopic: "everyday-tech-curiosities",
  tags: ["airplane mode", "radios", "cellular", "GPS", "technology basics", "everyday tech"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "Airplane mode is one switch controlling several separate radios — and GPS, being receive-only, usually isn't restricted the way cellular is.",
  summary: "Airplane mode is a single toggle that individually turns off several separate radios inside a device — cellular, WiFi, and Bluetooth — because each one transmits signals that regulators historically wanted silenced in flight, while GPS reception typically remains available because a GPS receiver only listens for satellite signals and never transmits anything back.",
  sources: [
    { label: "FCC — Federal Communications Commission", url: "https://www.fcc.gov/" },
    { label: "GPS.gov — Official U.S. Government Information About GPS", url: "https://www.gps.gov/" },
    { label: "IEEE — Institute of Electrical and Electronics Engineers", url: "https://www.ieee.org/" },
  ],
  seeAlso: [
    "technology-basics/how-gps-finds-your-location",
    "technology-basics/how-your-phone-knows-which-way-is-up",
    "technology-basics/why-your-phone-gets-hot",
  ],
  glossary: [
    { term: "Transceiver", definition: "A combined transmitter and receiver in one radio component, capable of both sending and receiving signals — most of a phone's radios, like cellular and WiFi, are transceivers." },
    { term: "Receive-only", definition: "A radio component that can pick up incoming signals but has no ability to transmit anything back, meaning it can't broadcast interference to anything around it." },
    { term: "Radio silence", definition: "A state in which a device's transmitting radios are deliberately powered down or prevented from broadcasting, historically the core purpose of requiring airplane mode during flight." },
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
          "Airplane mode isn't one master switch for the whole device — it's a single toggle that individually commands several separate radios (cellular, WiFi, Bluetooth) to power down at once.",
          "GPS reception usually keeps working in airplane mode because a GPS receiver only listens for satellite signals and never transmits anything — it can't cause the kind of interference the other radios are switched off to prevent.",
          "WiFi and Bluetooth can typically be manually switched back on while airplane mode stays active (for onboard WiFi, for example); cellular is the one radio that stays fully locked out until airplane mode itself is turned off.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Picture a phone as a small building with several separate broadcasting rooms inside it — one for cellular calls, one for WiFi, one for Bluetooth, and one that only listens, for GPS. Airplane mode is like flipping a master breaker that shuts off power to the broadcasting rooms, but leaves the listening-only room untouched, since a room that only listens can&apos;t cause any interference by staying on. That&apos;s why a phone in airplane mode can still show your location on an offline map even with zero bars and no WiFi.</div>}
        detailed={<div className="prose-p">This is a direct example of <strong>abstraction layers</strong>: a single high-level toggle (airplane mode) sits above several independent hardware and software layers (the cellular, WiFi, Bluetooth, and GPS subsystems), and switching it sends a command down to each one without the user needing to manage them individually. Cellular, WiFi, and Bluetooth are each a <TermLink href="/technology-basics/how-airplane-mode-actually-works">transceiver</TermLink> — capable of both sending and receiving — and the original regulatory concern behind requiring <TermLink href="/technology-basics/how-airplane-mode-actually-works">radio silence</TermLink> for these was interference with aircraft communication and navigation systems, plus a phone at altitude potentially being visible to many ground cell towers simultaneously. GPS is architecturally different: a GPS chip is <TermLink href="/technology-basics/how-airplane-mode-actually-works">receive-only</TermLink>, listening for satellite broadcasts without ever transmitting a signal of its own, so it presents none of the interference risk the transmitting radios do — which is exactly why most devices leave it available, or let it be manually re-enabled, in airplane mode. An edge case worth knowing: airplane mode&apos;s individual toggles aren&apos;t a single all-or-nothing lock — WiFi and Bluetooth are commonly designed to be manually switched back on while airplane mode itself stays engaged, which is what makes onboard WiFi service possible, while cellular remains the one radio that can&apos;t be manually reactivated until airplane mode is turned off entirely.</div>}
      />
      <FootnoteAside>The regulatory picture around in-flight connectivity has shifted significantly since airplane mode was first introduced, with many airlines and aviation authorities now permitting WiFi and even certain cellular services in flight under controlled conditions — the underlying mechanism (each radio being toggled individually) is what stays consistent even as specific rules evolve.</FootnoteAside>
      <p>
        The clearest way to see that airplane mode is several separate toggles rather than one blanket shutdown is to look at what happens to GPS specifically when every transmitting radio goes silent.
      </p>
      <QuickCheck
        question="A phone is in airplane mode with WiFi and Bluetooth left off, and has no cellular signal by definition. Can it still show a moving blue dot on a downloaded offline map?"
        options={[
          { text: "No, because airplane mode disables every radio in the device without exception", correct: false, explanation: "Airplane mode toggles several radios individually, and GPS reception is typically not restricted the same way transmitting radios are." },
          { text: "Yes — GPS reception usually still works in airplane mode because it's a receive-only signal that can't interfere with anything, unlike the transmitting radios airplane mode targets", correct: true, explanation: "Correct. GPS never transmits, so it doesn't carry the interference risk that cellular, WiFi, and Bluetooth transmission does, which is why it's typically left available." },
          { text: "Yes, but only because the phone secretly uses its WiFi radio to fake a GPS signal", correct: false, explanation: "GPS position comes directly from satellite signals received by a dedicated GPS chip — it doesn't rely on WiFi to function, secretly or otherwise." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Turning on airplane mode right before takeoff (baseline case)</h3>
      <div className="prose-p">
        Switching on airplane mode immediately drops the cellular signal indicator to &quot;no service,&quot; and any in-progress call ends. This is the cellular transceiver being commanded to power down entirely, cutting off both its ability to send and to receive signals to and from cell towers — the most visible and immediate effect of the toggle, and the one most people associate with airplane mode by default.
      </div>
      <QuickCheck
        question="What happens to a phone's cellular radio specifically the moment airplane mode is switched on?"
        options={[
          { text: "It's powered down entirely, losing both its ability to send and receive signals to and from cell towers", correct: true, explanation: "Correct. Cellular is a transceiver, and airplane mode shuts it down completely — it can neither transmit nor receive until airplane mode is turned off again." },
          { text: "It switches to a low-power listening mode that still receives incoming calls silently", correct: false, explanation: "Airplane mode fully powers down the cellular radio rather than leaving it in a reduced listening state — that's why calls and texts stop reaching the device entirely." },
          { text: "It stays fully active but simply mutes notification sounds", correct: false, explanation: "This isn't a notification setting — airplane mode disables the underlying cellular radio itself, which is why the signal indicator shows no service." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Manually re-enabling WiFi for onboard internet (edge case / variation)</h3>
      <div className="prose-p">
        With airplane mode on, manually switching WiFi back on connects to an aircraft&apos;s onboard network without disabling airplane mode itself or reactivating cellular. This shows airplane mode isn&apos;t a single irreversible lockout — it&apos;s a default-off state for several radios that some of them can be individually overridden from, while cellular specifically remains excluded from that override until airplane mode is turned off entirely, reflecting the different regulatory treatment each radio has historically received.
      </div>
      <QuickCheck
        question="Why can WiFi typically be turned back on while airplane mode stays active, but cellular can't?"
        options={[
          { text: "Airplane mode treats each radio as an individually toggleable layer, and WiFi/Bluetooth are commonly designed to allow a manual override that cellular specifically doesn't permit while airplane mode is engaged", correct: true, explanation: "Correct. The radios aren't locked by one indivisible switch — WiFi and Bluetooth support being manually re-enabled under airplane mode, while cellular remains locked out until airplane mode itself is disabled." },
          { text: "WiFi doesn't actually turn off when airplane mode is enabled in the first place", correct: false, explanation: "WiFi does turn off by default when airplane mode is switched on — the point is that it can then be manually switched back on separately, not that it was never off." },
          { text: "Cellular and WiFi are actually the same radio component with two different names", correct: false, explanation: "Cellular and WiFi are separate transceivers built for very different networks and frequencies — they're independent components, not the same radio under two labels." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Using offline GPS navigation with zero connectivity (real-world / applied case)</h3>
      <p>
        Using a downloaded offline map for turn-by-turn navigation during a flight, or in a remote area with no cellular or WiFi coverage at all, still tracks a moving position accurately, because the GPS receiver is doing its work entirely independent of the other radios — receiving satellite signals and calculating position without needing to send or receive anything over cellular or WiFi. The map imagery itself has to be pre-downloaded since there&apos;s no connectivity to stream it, but the position tracking on top of that map works exactly the same as it would with full connectivity, because it was never dependent on connectivity in the first place.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Airplane mode: four radios, four different outcomes"
        type="detail"
        svgSrc="/diagrams/technology-basics-how-airplane-mode-actually-works-radio-toggle.svg"
        altText="Diagram of a phone's four radios when airplane mode is switched on: the cellular radio is off and cannot be re-enabled while airplane mode is active, WiFi and Bluetooth are off by default but can be manually switched back on, and the GPS receiver keeps working because it only listens for satellite signals and never transmits."
      />
      <p>
        Seeing all four radios side by side makes clear that airplane mode is a coordinated set of individual toggles, not a single blanket shutdown — each radio&apos;s behavior traces back to whether it transmits or only listens.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming airplane mode disables everything, including GPS.", fix: "GPS is typically unaffected because it's a receive-only signal with no transmission to restrict — it keeps working in most devices even in airplane mode." },
          { mistake: "Forgetting that WiFi and Bluetooth need to be manually re-enabled after switching on airplane mode.", fix: "Airplane mode turns every radio off by default; re-enabling WiFi or Bluetooth for legitimate use (like onboard internet) is a separate, manual step." },
          { mistake: "Assuming re-enabling WiFi under airplane mode secretly reactivates cellular too.", fix: "Each radio is toggled independently — turning WiFi back on doesn't affect the cellular radio, which stays off until airplane mode itself is disabled." },
          { mistake: "Being confused when offline maps still track location with airplane mode on.", fix: "GPS reception doesn't depend on cellular or WiFi connectivity at all, so it continues to function normally regardless of airplane mode's other radio restrictions." },
        ]}
      />
      <MisconceptionCallout
        myth="Airplane mode disables everything on a device, including GPS."
        reality={<p>Airplane mode is a coordinated set of individual radio toggles, not one blanket shutdown. Cellular, WiFi, and Bluetooth are transmitting radios that airplane mode switches off by default (with WiFi and Bluetooth often able to be manually re-enabled). GPS reception is architecturally different — it only listens for satellite signals and never transmits anything back — so it typically keeps working in airplane mode, which is why offline map navigation still functions with every other connection turned off.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Use airplane mode plus manually re-enabled WiFi for legitimate in-flight internet service rather than assuming this isn't possible.",
          "Rely confidently on offline GPS navigation in airplane mode when you have no cellular or WiFi coverage anyway.",
          "Remember that cellular is the one radio airplane mode fully locks out until it's switched off again.",
          "Don't expect texts or calls to send silently in the background while airplane mode is on — the cellular radio isn't listening either.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Does airplane mode turn off GPS?", answer: "Usually not. GPS is a receive-only signal that never transmits anything, so it doesn't carry the interference risk airplane mode is designed to prevent, and most devices leave it available." },
          { question: "Can you use WiFi in airplane mode?", answer: "Yes, on most devices. Airplane mode turns WiFi off by default along with the other radios, but it can typically be switched back on manually without disabling airplane mode itself, which is how onboard WiFi service works." },
          { question: "Why do you have to turn on airplane mode on a plane?", answer: "The original concern was preventing transmitting radios (cellular, WiFi, Bluetooth) from potentially interfering with aircraft communication and navigation systems, and with ground cellular networks from altitude — rules that have evolved over time as testing and technology have advanced." },
          { question: "Does airplane mode save battery?", answer: "Yes, because it powers down several radios that would otherwise be actively searching for signal or maintaining connections, and radio activity is one of a phone's ongoing sources of power draw." },
          { question: "What does airplane mode actually turn off?", answer: "By default, it turns off the cellular, WiFi, and Bluetooth radios. WiFi and Bluetooth can typically be manually switched back on while airplane mode stays active; cellular cannot be re-enabled until airplane mode itself is turned off. GPS reception is generally unaffected." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
