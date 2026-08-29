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
  title: "How GPS Figures Out Your Exact Location",
  category: "technology-basics",
  order: 72,
  subtopic: "everyday-tech-curiosities",
  tags: ["GPS", "trilateration", "satellites", "location services", "technology basics", "everyday tech"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "GPS doesn't use your phone's internet or cell signal to find you — it times radio signals from orbiting satellites and calculates distance from the delay.",
  summary: "GPS finds a receiver's location by timing how long radio signals take to arrive from multiple orbiting satellites, converting each delay into a distance, and calculating the one point on Earth consistent with all of those distances at once — a process called trilateration.",
  sources: [
    { label: "GPS.gov — Official U.S. Government Information About GPS", url: "https://www.gps.gov/" },
    { label: "GPS.gov — How GPS Works", url: "https://www.gps.gov/systems/gps/" },
    { label: "NIST — National Institute of Standards and Technology", url: "https://www.nist.gov/" },
  ],
  seeAlso: [
    "technology-basics/how-airplane-mode-actually-works",
    "technology-basics/how-your-phone-knows-which-way-is-up",
    "technology-basics/how-a-qr-code-stores-information",
  ],
  glossary: [
    { term: "Trilateration", definition: "A method of determining a single location by calculating its distance from at least three known reference points and finding the one position consistent with all of those distances." },
    { term: "Pseudorange", definition: "A GPS receiver's initial, not-yet-corrected estimate of its distance to a satellite, calculated from signal travel time before the receiver's own clock error has been accounted for." },
    { term: "Assisted GPS (A-GPS)", definition: "A technique that uses cell towers or WiFi networks to quickly supply a phone's GPS receiver with data about which satellites should be overhead, speeding up the first location fix without replacing the satellite signal itself." },
    { term: "Time to first fix", definition: "The amount of time a GPS receiver takes to acquire enough satellite signals and calculate its first location reading after being turned on or losing signal." },
    { term: "Atomic clock", definition: "An extremely precise clock, accurate to within billionths of a second, used aboard each GPS satellite so that tiny timing differences between satellites can be measured reliably enough to calculate distance." },
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
          "GPS works by timing radio signals from orbiting satellites, not by using your phone's cellular data or WiFi — a phone with no signal at all can still get a GPS location if it can see the sky.",
          "One satellite alone only narrows your location to a sphere; it takes distances from at least four satellites, calculated through trilateration, to pin down a single point in three dimensions and correct for clock error.",
          "GPS receivers only listen for satellite signals — they never transmit anything back to the satellites, which is why a phone tracking your location doesn't need to 'send a signal to space' to do it.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Imagine standing in a dark field and hearing three friends, standing at known spots, each shout at the exact same moment. Based on how long each shout takes to reach you, you can work out how far you are from each friend — and there&apos;s only one spot in the field that&apos;s consistent with all three distances at once. <TermLink href="/technology-basics/how-gps-finds-your-location">GPS</TermLink> does exactly this with radio signals instead of shouts and orbiting satellites instead of friends: your phone measures how long each satellite&apos;s signal took to arrive, turns that into a distance, and calculates the one point on Earth that matches.</div>}
        detailed={<div className="prose-p">This is a direct real-world application of <strong>lookup via known reference points</strong> combined with basic geometry, formally called <TermLink href="/technology-basics/how-gps-finds-your-location">trilateration</TermLink>. Each GPS satellite continuously broadcasts its own precise position and the exact time the signal was sent, using an onboard <TermLink href="/technology-basics/how-gps-finds-your-location">atomic clock</TermLink> accurate to billionths of a second. A receiver calculates distance to a satellite using one of physics&apos; simplest relationships: distance equals the speed of light multiplied by how long the signal took to arrive. One satellite narrows your position to a sphere; two narrows it to a circle where two spheres intersect; three narrows it to (usually) one point on Earth&apos;s surface. In practice, a fourth satellite is required — not for a fourth dimension of space, but because a phone&apos;s cheap internal clock isn&apos;t nearly as precise as a satellite&apos;s atomic clock, and the extra signal lets the receiver solve for its own timing error simultaneously with its position, correcting an initial rough estimate called a <TermLink href="/technology-basics/how-gps-finds-your-location">pseudorange</TermLink> into an accurate one.</div>}
      />
      <FootnoteAside>GPS satellites&apos; atomic clocks actually have to be corrected for effects predicted by Einstein&apos;s relativity — orbital speed and weaker gravity at altitude both shift how fast time passes for the satellite relative to a clock on Earth&apos;s surface, by amounts small enough to ignore in daily life but large enough that GPS would drift off by kilometers per day if left uncorrected.</FootnoteAside>
      <p>
        The most common misunderstanding about GPS is exactly which network it depends on — and testing the airplane-mode scenario directly makes the actual mechanism obvious.
      </p>
      <QuickCheck
        question="A phone has cellular data and WiFi both turned off, but its location services are on and it has a clear view of the sky. Can it still determine its GPS location?"
        options={[
          { text: "No, GPS requires an active cellular or WiFi connection to function at all", correct: false, explanation: "GPS itself works by receiving radio signals directly from satellites — it doesn't require cellular data or WiFi to calculate a position, only a clear enough view of the sky." },
          { text: "Yes — GPS calculates location from satellite signals directly, independent of cellular or WiFi connectivity", correct: true, explanation: "Correct. Cellular and WiFi networks can speed up the very first fix (assisted GPS) by supplying satellite data faster, but the core position calculation runs on satellite signals alone." },
          { text: "Yes, but only because the phone silently uses its cellular radio to contact GPS satellites even with data turned off", correct: false, explanation: "GPS reception and cellular data are separate systems — the phone's GPS receiver listens to satellite radio signals on its own, not through the cellular network." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Getting a location fix outdoors with a clear sky (baseline case)</h3>
      <div className="prose-p">
        Standing in an open field, a phone&apos;s GPS receiver picks up signals from several satellites simultaneously. For each one, it calculates distance from signal travel time, and after combining distances from at least four satellites — solving for both position and the receiver&apos;s own small clock error at once — it lands on a single, specific latitude and longitude. This whole calculation happens on the device itself, using only the incoming satellite signals; nothing needs to be sent back up to space, and no data connection is required for the position math itself.
      </div>
      <QuickCheck
        question="Why does a GPS receiver typically need signals from at least four satellites, not just three, to get an accurate fix?"
        options={[
          { text: "Because Earth is a sphere and three satellites can only work on a flat surface", correct: false, explanation: "Trilateration in three dimensions actually only requires three satellites in principle — the real reason for a fourth is a separate problem entirely." },
          { text: "Because a phone's internal clock isn't precise enough, and the fourth signal lets the receiver solve for its own timing error along with its position", correct: true, explanation: "Correct. Satellite atomic clocks are vastly more precise than a phone's built-in clock, so the extra signal is used to correct for that timing imprecision, not to add a spatial dimension." },
          { text: "Because satellites can only broadcast reliably in groups of four at a time", correct: false, explanation: "There's no such broadcasting-group requirement — each satellite broadcasts independently and continuously; the fourth-satellite requirement is purely about correcting clock error." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Weak GPS signal inside a car or near tall buildings (edge case / variation)</h3>
      <div className="prose-p">
        Driving through a dense downtown area with tall buildings on both sides, a phone&apos;s location can jump around or briefly show an inaccurate position. This happens because satellite signals can reflect off buildings before reaching the receiver, a problem called multipath interference, and because buildings can block a direct line of sight to some satellites entirely, leaving fewer usable signals to calculate from. A car&apos;s metal roof and windshield coating can also weaken satellite signals further. None of this is a failure of the underlying math — trilateration still works exactly the same way — it&apos;s a signal-availability problem, the radio-frequency equivalent of trying to hear three shouting friends over background noise and echoes.
      </div>
      <QuickCheck
        question="Why does GPS accuracy often get noticeably worse in a dense downtown area with tall buildings?"
        options={[
          { text: "The trilateration calculation itself works differently in cities than in open areas", correct: false, explanation: "The underlying calculation is identical everywhere — what changes in a city is the quality and availability of the satellite signals feeding into it." },
          { text: "Tall buildings can block direct signals to some satellites and cause others to reflect off surfaces before arriving, degrading the timing data the calculation relies on", correct: true, explanation: "Correct. Blocked line-of-sight and reflected (multipath) signals both distort the timing measurements trilateration depends on, without changing the math itself." },
          { text: "GPS satellites intentionally reduce signal strength over densely populated areas", correct: false, explanation: "Satellites don't adjust signal strength based on what's below them — the degradation comes from how buildings interact with the signal, not from the satellite's transmission." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why map apps show a location almost instantly, not after a long wait (real-world / applied case)</h3>
      <p>
        Calculating a GPS fix from a cold start — a phone that&apos;s been off or in airplane mode for a while — can take tens of seconds, because the receiver first has to download orbital data broadcast slowly by each satellite before it can even begin timing signals accurately. Everyday map apps avoid this delay using <TermLink href="/technology-basics/how-gps-finds-your-location">assisted GPS</TermLink>: the phone briefly uses its cellular or WiFi connection to download the same orbital data from the network almost instantly instead of waiting on the slow satellite broadcast, cutting the <TermLink href="/technology-basics/how-gps-finds-your-location">time to first fix</TermLink> from tens of seconds down to a second or two. The satellite signals still do the actual position calculation — the network connection just speeds up the setup step beforehand.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Trilateration: three satellite distances intersecting at one point"
        type="detail"
        svgSrc="/diagrams/technology-basics-how-gps-finds-your-location-trilateration.svg"
        altText="Diagram of three satellites broadcasting signals shown as expanding circles representing calculated distance, overlapping at a single point on the ground marking a phone's location, with a note that a fourth satellite corrects for clock timing error."
      />
      <p>
        Each circle represents every possible point that particular distance from that particular satellite — only one location on the ground satisfies all of them simultaneously, which is exactly the point trilateration solves for.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming GPS requires cellular data or WiFi to function.", fix: "GPS calculates location directly from satellite signals; cellular and WiFi only speed up the very first fix through assisted GPS, and aren't required for the position math itself." },
          { mistake: "Believing your phone 'sends a signal' to satellites so they can find it.", fix: "GPS receivers are listen-only — they never transmit to satellites. The satellite broadcasts and the receiver's own clock, not any signal sent from the phone, are what determine location." },
          { mistake: "Expecting the same GPS accuracy indoors, in tunnels, or in dense downtown areas as in open outdoor spaces.", fix: "Buildings and other obstructions block or reflect satellite signals, degrading accuracy or preventing a fix entirely — this is a signal-availability limit, not a flaw in the calculation." },
          { mistake: "Thinking a slow first GPS fix means something is broken.", fix: "A cold-start fix can take tens of seconds while the receiver downloads orbital data directly from satellites; this is normal and is exactly what assisted GPS is designed to speed up." },
        ]}
      />
      <MisconceptionCallout
        myth="GPS uses your phone's internet connection to find your location."
        reality={<p>GPS calculates location entirely from timed radio signals broadcast by orbiting satellites — a phone with no cellular signal and WiFi turned off can still get an accurate GPS fix outdoors. Internet or cellular data can make the very first fix faster, through a technique called assisted GPS that downloads satellite orbital data over the network instead of waiting for the satellites to broadcast it, but the core position calculation itself runs on satellite signals alone.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate distance to a GPS satellite from signal delay"
        description="A simplified illustration of the core GPS math: distance equals the speed of light multiplied by how long the signal took to travel. Real GPS satellites orbit at roughly 20,200 km altitude, giving one-way signal delays typically in the tens of milliseconds."
        fields={[
          { key: "signalDelayMs", label: "Signal travel time (milliseconds)", defaultValue: 72 },
        ]}
        resultLabel="Estimated distance to satellite (km)"
        formula="gpsDistanceFromSignalDelayKm"
        formatResult="number"
        disclaimer="This shows only the basic distance-from-time-delay relationship for one satellite. Actual GPS positioning combines this calculation across at least four satellites at once and corrects for receiver clock error, atmospheric delay, and other small effects."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "If your phone's GPS seems slow to find you, give it a clear view of open sky for the fastest first fix.",
          "Remember that airplane mode disabling cellular and WiFi doesn't disable GPS reception itself — GPS is receive-only and doesn't need those radios.",
          "Expect reduced GPS accuracy indoors, in tunnels, and around tall buildings — this is a signal-availability limit, not a bug.",
          "Read the related entry on how airplane mode actually works to see exactly which radios it does and doesn't turn off.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does GPS find your exact location?", answer: "It times radio signals broadcast from multiple orbiting satellites, converts each signal's travel time into a distance using the speed of light, and calculates the one point on Earth consistent with distances from at least four satellites at once — a process called trilateration." },
          { question: "Does GPS use data or WiFi to work?", answer: "No. GPS calculates location directly from satellite signals, independent of cellular data or WiFi. Those connections can speed up the very first location fix through assisted GPS, but aren't required for GPS to function." },
          { question: "Why do you need signals from multiple satellites for GPS?", answer: "One satellite only narrows your position to a sphere. It takes distances from at least four satellites to calculate a single point in three dimensions while also correcting for the receiver's own imprecise internal clock." },
          { question: "Why is GPS less accurate in cities or indoors?", answer: "Tall buildings can block direct signals to some satellites and cause others to reflect off surfaces before arriving (multipath interference), both of which degrade the timing measurements the position calculation depends on." },
          { question: "Can GPS track you even in airplane mode?", answer: "GPS reception itself isn't a transmitting radio, so many devices keep it available in airplane mode as long as it's manually re-enabled where the device allows, since it can't interfere with aircraft communications the way transmitting radios can." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
