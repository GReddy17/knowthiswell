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
  title: "Why Smart Devices Can Stop Working If the Company Shuts Down",
  category: "technology-basics",
  order: 90,
  subtopic: "smart-devices-and-iot-basics",
  tags: ["smart device server shutdown", "IoT company shuts down", "cloud dependent devices", "device bricked", "technology basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "The hardware in a cloud-dependent smart device doesn't break when its company shuts down — the remote server it constantly asks for permission disappears.",
  summary: "Many smart devices rely on a request-and-response cycle with a manufacturer's cloud server for core features to work at all; when a company shuts down and stops running that server, the device's requests time out and get no response, so cloud-dependent features stop working even though the physical hardware is completely undamaged — though some features and some devices are built to keep working locally regardless.",
  sources: [
    { label: "Federal Trade Commission — Internet of Things: Privacy & Security in a Connected World", url: "https://www.ftc.gov/reports/internet-things-privacy-security-connected-world" },
    { label: "NIST — Cybersecurity for the Internet of Things Program", url: "https://www.nist.gov/itl/applied-cybersecurity/nist-cybersecurity-iot-program" },
    { label: "Connectivity Standards Alliance — What Is Matter", url: "https://csa-iot.org/all-solutions/matter/" },
  ],
  seeAlso: [
    "technology-basics/why-smart-devices-need-constant-updates",
    "technology-basics/what-a-smart-home-hub-actually-does",
    "technology-basics/what-smart-home-ecosystem-compatibility-means",
  ],
  glossary: [
    { term: "Cloud dependency", definition: "A design where a device's features rely on an ongoing connection to a manufacturer's remote server, rather than working entirely using the device's own onboard hardware and software." },
    { term: "Local control", definition: "The ability for a device to perform its core functions using only hardware and software on the device (or a local hub) itself, without needing to reach an outside server over the internet." },
    { term: "End of life (EOL)", definition: "The point at which a manufacturer formally stops supporting a product, which for a cloud-dependent device often means the servers it relies on are eventually shut down." },
    { term: "Request timeout", definition: "What happens when a device sends a request to a server and receives no response within an expected window, typically because the server is offline or unreachable." },
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
          "Many smart devices need to send a request to a manufacturer's cloud server and get a response back for core features to work at all — this is a design choice, not a universal requirement of being smart.",
          "When a company shuts down its servers, those requests time out with no response, so cloud-dependent features stop working even though the device's physical hardware is entirely undamaged.",
          "Not every feature or every device works this way — some functions run entirely on local hardware and keep working regardless of any company's server status, which is why the actual impact varies device by device.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Picture calling a company&apos;s customer service line every single time you want to unlock your own front door, just to confirm you&apos;re allowed to. As long as someone answers the phone, it works — but if the company goes out of business and nobody ever picks up again, that call just rings and rings, and the door stays as it was. Some smart devices are built this way: instead of deciding things using their own onboard hardware, they check in with the manufacturer&apos;s remote server for permission or instructions every time, and if that server stops answering forever, those specific features stop working, even though nothing about the physical device itself changed.</div>}
        detailed={<div className="prose-p">This is the <strong>request → response (client/server)</strong> mental model, and the key detail is that many smart devices are built to depend on getting an actual response, not just to send a request optimistically. While a company operates its servers, a device sends a request (checking a schedule, verifying an unlock command, fetching a status update), the server processes it, and a response comes back that the device then acts on — the loop completes normally. When a company shuts down, formally reaching <TermLink href="/technology-basics/why-smart-devices-stop-working-when-a-company-shuts-down">end of life (EOL)</TermLink> support and eventually taking its servers offline, that same request now goes out and simply never gets an answer — a <TermLink href="/technology-basics/why-smart-devices-stop-working-when-a-company-shuts-down">request timeout</TermLink>. The device&apos;s software is typically built to treat &quot;no response&quot; the same as &quot;not allowed&quot; or &quot;no new information,&quot; which is why the feature effectively goes dark rather than failing open. The edge case that matters most for evaluating any specific device: not everything requires this round trip. Devices designed with genuine <TermLink href="/technology-basics/why-smart-devices-stop-working-when-a-company-shuts-down">local control</TermLink> — where core logic runs on the device or a local hub rather than a remote server — keep working for their basic function regardless of what happens to the manufacturer, which is exactly why &quot;this company shut down&quot; doesn&apos;t automatically mean &quot;every feature of this device is now gone&quot;: the real answer depends entirely on which specific features were built to depend on a round trip to that company&apos;s server in the first place.</div>}
      />
      <FootnoteAside>Consumer protection agencies, including the FTC, have specifically raised cloud dependency as a longevity concern for IoT products, since a device&apos;s real-world useful lifespan can end up tied to a company&apos;s business decisions and server budget rather than to how long the physical hardware itself would otherwise last.</FootnoteAside>

      <p>
        Once a device is understood as sending requests it expects real answers to, it becomes clear that &quot;the company shut down&quot; and &quot;the device is now useless&quot; are not automatically the same statement — the actual outcome depends on exactly which features were built to require that round trip.
      </p>

      <QuickCheck
        question="A manufacturer permanently shuts down its cloud servers. What actually happens to a smart device that depended on those servers for a specific feature?"
        options={[
          { text: "The device's hardware physically breaks or stops powering on entirely", correct: false, explanation: "Server shutdown has no effect on the physical hardware itself — the device still powers on; specific cloud-dependent features stop functioning because the requests they rely on no longer get a response." },
          { text: "Requests that feature sends to the (now offline) server time out with no response, so that specific feature stops working, while any genuinely local features continue functioning normally", correct: true, explanation: "Correct. The device's hardware is unaffected — only features specifically built to depend on a round trip to that now-unreachable server stop working." },
          { text: "The device automatically switches to using a different company's server instead", correct: false, explanation: "Devices are built to communicate with a specific manufacturer's server infrastructure — there's no automatic fallback to an unrelated company's servers when the original one goes offline." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A cloud-dependent smart plug&apos;s schedule stopping (baseline case)</h3>
      <div className="prose-p">
        A smart plug is designed so that its scheduling feature works by checking in with the manufacturer&apos;s server for the current schedule at each trigger time, rather than storing the full schedule locally on the device itself. While the company operates normally, this request-response cycle completes quickly and the plug switches on and off exactly as scheduled. After the company shuts down its servers, each of these scheduled check-ins now times out with no response, and the plug&apos;s automatic scheduling stops working entirely — though the plug&apos;s basic manual on/off button, which doesn&apos;t require contacting any server, continues to function normally.
      </div>
      <QuickCheck
        question="After a manufacturer shuts down its servers, why might a smart plug's manual on/off button keep working while its scheduling feature stops?"
        options={[
          { text: "Because the manual button and the scheduling feature use two entirely different, unrelated pieces of hardware", correct: false, explanation: "They typically share the same hardware — the real distinction is that the manual button doesn't require contacting any server at all, while the scheduling feature was specifically built to depend on one." },
          { text: "Because the manual button operates entirely locally with no server request involved, while the scheduling feature was built to depend on a request-response check-in with the now-offline server", correct: true, explanation: "Correct. This is exactly the local-versus-cloud-dependent distinction — features that don't require a round trip to a server keep working regardless of that company's server status." },
          { text: "Because manual buttons are legally required to always keep functioning regardless of server status", correct: false, explanation: "There's no such legal requirement — whether a feature keeps working after a shutdown depends entirely on whether it was designed to run locally or to depend on a remote server." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A device built with local control that keeps working (edge case / variation)</h3>
      <div className="prose-p">
        A different manufacturer&apos;s smart thermostat is designed so its core temperature control logic runs entirely on the device itself, with the cloud server used only for optional features like remote access from outside the home or voice assistant integration. If that company shuts down, remote access and voice control stop working because those specific features depend on the now-offline server, but the thermostat continues heating and cooling the home correctly, since its core logic never depended on a round trip to any server in the first place. This is the direct counterexample to assuming every company shutdown produces total device failure — the actual outcome always traces back to which specific features were built with local control versus cloud dependency.
      </div>
      <QuickCheck
        question="After its manufacturer shuts down, a smart thermostat keeps heating and cooling a home correctly but loses remote access and voice control. What does this indicate about how it was built?"
        options={[
          { text: "That the thermostat's manufacturer secretly kept some servers running after the official shutdown", correct: false, explanation: "There's no need to assume hidden servers — the more direct explanation is that core temperature control was built with local control, requiring no server, while remote access and voice control were built as separate, genuinely cloud-dependent features." },
          { text: "That its core function was built with local control requiring no server, while remote access and voice control were specifically built to depend on the now-offline cloud server", correct: true, explanation: "Correct. This is exactly the kind of partial impact that occurs when a device's designers chose local control for core functions and cloud dependency only for optional extras." },
          { text: "That the thermostat has no cloud dependency at all in any of its features", correct: false, explanation: "The thermostat does have cloud-dependent features (remote access, voice control) — those specifically stopped working, which shows it isn't entirely free of cloud dependency, just not dependent on it for its core function." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Evaluating cloud dependency before buying a smart device (real-world / applied case)</h3>
      <p>
        Someone comparing two similar smart locks wants to understand their long-term risk if either manufacturer eventually stops operating. Checking each product&apos;s documentation, one lock states that basic locking and unlocking via a physical keypad works entirely locally, with the cloud server used only for remote-unlock and activity-log features; the other requires an active server connection for every single lock and unlock action, including from the keypad. Applying the request-response framework, the first lock carries meaningfully less long-term risk from a future shutdown, since its core security function was specifically built not to depend on a server response at all.
      </p>
      <QuickCheck
        question="When comparing two smart locks for long-term reliability risk, what specifically should a buyer check regarding server dependency?"
        options={[
          { text: "Whether each lock's core locking/unlocking function requires a server response, or works entirely through local control", correct: true, explanation: "Correct. This is exactly the distinction that determines how much of a device's core function would be lost if the manufacturer's servers ever went permanently offline." },
          { text: "Whether each lock's physical housing is made of metal or plastic", correct: false, explanation: "Housing material has nothing to do with server dependency risk — the relevant factor is whether core functions require a round trip to a company's server or run locally." },
          { text: "Only the price difference between the two locks", correct: false, explanation: "Price doesn't indicate anything about a device's underlying architecture — checking whether core functions depend on a server response is the relevant, checkable factor for this specific risk." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Request-response while a company operates, vs. after its servers go offline"
        type="comparison"
        svgSrc="/diagrams/technology-basics-why-smart-devices-stop-working-when-a-company-shuts-down-dependency.svg"
        altText="A before-and-after comparison diagram. Top section, labeled 'While the company operates': a smart device sends a request to the company's cloud server, which is processed and returns a response, and the feature works as expected. Bottom section, labeled 'After the company shuts down': the same device sends a request to the same server, which is now offline, so the request times out with no response, and the feature stops working, with a note that the hardware is fine but unreachable. A caption reads: the physical device didn't break. The remote 'brain' it depends on disappeared."
      />
      <p>
        The device and its request in both halves of this diagram are identical — the only thing that changed is whether anything answers on the other end, which is exactly why a company shutdown can silently disable a feature without a single component inside the device itself failing.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a smart device becomes completely useless the moment its manufacturer shuts down.", fix: "Check which specific features are cloud-dependent versus locally controlled — genuinely local features typically keep working regardless of the company's status." },
          { mistake: "Assuming all smart devices work the same way regarding server dependency.", fix: "Recognize this varies by product and even by feature within the same product — check a device's documentation for what specifically requires an internet connection to a manufacturer's server." },
          { mistake: "Buying a smart device without ever considering what happens if the company eventually stops operating.", fix: "Before buying, especially for core security or safety functions like locks, check whether that specific function requires an ongoing server connection or is built with local control." },
        ]}
      />
      <MisconceptionCallout
        myth="A smart device stops being useful the moment the company behind it shuts down."
        reality={<p>What actually happens depends entirely on which specific features were built to depend on a round trip to that company&apos;s now-offline server versus which run entirely on the device&apos;s own local hardware. A device&apos;s physical components are completely unaffected by a company shutting down — only features specifically requiring a response from that company&apos;s server stop functioning. Some devices lose almost everything; others keep their core function intact and only lose optional extras like remote access or voice integration.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before buying a smart device, especially for security or safety functions, check whether its core function requires an active server connection or works locally.",
          "Check a device's documentation or support page for language distinguishing 'local control' features from ones requiring cloud/internet connectivity.",
          "For an already-owned device whose manufacturer has announced end-of-life plans, identify which specific features are likely to stop working versus which are locally controlled.",
          "Read why smart devices need constant software updates next to see the other side of this same manufacturer-dependency relationship.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why do smart devices stop working when the company goes out of business?", answer: "Many smart devices depend on sending requests to the manufacturer's cloud server and receiving a response for specific features to work. When the company shuts down its servers, those requests time out with no response, so cloud-dependent features stop working even though the physical hardware is unaffected." },
          { question: "Does every feature of a smart device stop working if the manufacturer shuts down?", answer: "Not necessarily. Features built with local control, running on the device's own hardware without needing a server response, generally keep working. Only features specifically built to depend on the manufacturer's now-offline server are affected." },
          { question: "Can a smart device be fixed after its manufacturer's servers shut down?", answer: "Sometimes, if another party (an independent developer community, or occasionally the original company) releases software allowing the device to work with a different server or fully locally, but this isn't guaranteed and isn't available for most consumer products." },
          { question: "How can I tell if a smart device is cloud-dependent before buying it?", answer: "Check the manufacturer's product documentation or support pages for language about which features require an internet connection to their servers versus which work locally, or look for reviews and independent teardown coverage discussing local control." },
          { question: "Is a locally-controlled smart device always better than a cloud-dependent one?", answer: "It depends on your priorities. Cloud dependency often enables features like remote access from anywhere or more complex processing, at the cost of long-term risk tied to the company's continued operation; local control trades some of that convenience for independence from any single company's servers." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
