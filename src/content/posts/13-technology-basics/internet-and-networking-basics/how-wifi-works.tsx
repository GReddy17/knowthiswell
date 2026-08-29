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
  title: "How WiFi Works: Radio Waves, Routers, and Range",
  category: "technology-basics",
  order: 3,
  subtopic: "internet-and-networking-basics",
  tags: ["WiFi", "wireless networking", "2.4GHz vs 5GHz", "router range", "radio waves", "networking basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "WiFi carries internet data over radio waves instead of a cable — the frequency it uses is a direct trade-off between speed, range, and how well it passes through walls.",
  summary: "WiFi is a way of sending internet data over radio waves instead of a cable, using a router as a translator between the wireless signal and the wired internet connection.",
  sources: [
    { label: "Wi-Fi Alliance — Discover Wi-Fi", url: "https://www.wi-fi.org/discover-wi-fi" },
    { label: "IEEE 802 — LAN/MAN Standards Committee (802.11 Working Group)", url: "https://www.ieee802.org/11/" },
    { label: "Federal Communications Commission — Wi-Fi (Wireless Fidelity)", url: "https://www.fcc.gov/general/wireless-networks-and-wi-fi" },
    { label: "Cloudflare Learning Center — What Is Wi-Fi?", url: "https://www.cloudflare.com/learning/network-layer/what-is-wifi/" },
  ],
  seeAlso: [
    "technology-basics/modem-vs-router-explained",
    "technology-basics/what-is-an-ip-address",
    "technology-basics/bandwidth-vs-speed-explained",
  ],
  glossary: [
    { term: "WiFi", definition: "A wireless networking technology that lets devices connect to a local network and the internet using radio waves instead of a physical cable." },
    { term: "Radio wave", definition: "An electromagnetic wave used to carry information wirelessly; WiFi uses radio waves in specific frequency bands set aside for unlicensed use." },
    { term: "Frequency band", definition: "A range of radio wave frequencies a device is allowed to transmit on; common WiFi bands are 2.4GHz and 5GHz." },
    { term: "Channel", definition: "A narrower slice within a frequency band that a router and device agree to communicate on, to avoid colliding with neighboring networks using the same band." },
    { term: "Attenuation", definition: "The loss of signal strength as a radio wave travels through distance or passes through obstacles like walls." },
    { term: "SSID", definition: "The network name a WiFi router broadcasts, which is what you select when choosing a wireless network to join." },
    { term: "Access point", definition: "The device (often built into a home router) that transmits and receives WiFi signals, bridging wireless devices to the wired network." },
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
          "WiFi replaces the cable between your device and your router with radio waves — the router still needs a wired connection to the internet somewhere upstream.",
          "Lower frequencies (like 2.4GHz) travel farther and pass through walls better; higher frequencies (like 5GHz) carry more data but lose strength over distance and obstacles faster — this is a physical trade-off, not a design flaw.",
          "WiFi range and speed drop with distance and obstacles because radio wave energy spreads out and gets absorbed — a weak signal isn't 'less internet,' it's a weaker, more error-prone radio connection forcing a slower, more cautious data rate.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of <TermLink href="/technology-basics/how-wifi-works">WiFi</TermLink> like a walkie-talkie conversation between your device and your router, instead of talking through a wired phone line. Your router takes the internet connection coming in through a cable and rebroadcasts it as radio waves; your phone or laptop has its own tiny radio to pick that signal up and talk back. The router is still wired to the internet somewhere — WiFi only replaces the last stretch of cable between the router and your device, not the whole connection.</div>}
        detailed={<div className="prose-p">WiFi transmits data by encoding it onto <TermLink href="/technology-basics/how-wifi-works">radio waves</TermLink> in specific unlicensed <TermLink href="/technology-basics/how-wifi-works">frequency bands</TermLink> — most commonly 2.4GHz and 5GHz, with newer devices also supporting 6GHz. These bands aren&apos;t arbitrary: they were internationally set aside for unlicensed short-range use, which is why any manufacturer can build a WiFi device without needing a broadcast license. The frequency choice is a real physical trade-off. Lower-frequency 2.4GHz waves are longer and diffract (bend around obstacles) more easily, so they penetrate walls and travel farther on the same power, but the band is narrower and more crowded, capping how much data can be encoded onto it at once. Higher-frequency 5GHz waves are shorter, don&apos;t bend around obstacles as well, and lose energy to walls faster — but the band offers more room for wide channels, letting it carry significantly more data per second at close range. This is exactly why a 5GHz connection can feel blazing fast standing next to the router and noticeably weaker two rooms away, while 2.4GHz stays serviceable throughout the house but caps out at a lower top speed.</div>}
      />
      <FootnoteAside>The IEEE 802.11 family of standards — first published in 1997 and continuously extended since — is the actual technical specification that defines how WiFi devices encode data, negotiate channels, and avoid interfering with each other; &quot;WiFi&quot; itself is a certification and marketing name maintained by the Wi-Fi Alliance for devices that correctly implement those standards.</FootnoteAside>

      <p>
        Once you see WiFi as radio waves carrying data instead of a cable carrying it, most of its quirks — walking to another room and losing bars, a microwave interfering with a call, a router placed in a closet performing badly — stop being mysterious and start being predictable physics.
      </p>

      <QuickCheck
        question="A 5GHz WiFi connection feels extremely fast right next to the router but noticeably slower two rooms away, while the same router's 2.4GHz connection stays more consistent throughout the house. What explains this?"
        options={[
          { text: "5GHz is a fundamentally broken or lower-quality technology compared to 2.4GHz", correct: false, explanation: "5GHz isn't lower quality — at close range it typically outperforms 2.4GHz by a wide margin. The issue is a genuine physical trade-off in how far each frequency travels and penetrates obstacles." },
          { text: "5GHz's shorter wavelengths carry more data at close range but lose energy to distance and walls faster than 2.4GHz's longer, more penetrating wavelengths", correct: true, explanation: "Correct. This range-versus-throughput trade-off is a direct consequence of the physics of different radio frequencies, not a flaw in either band." },
          { text: "The router is broken and needs to be replaced", correct: false, explanation: "This behavior is completely normal and expected for dual-band routers — it doesn't indicate a hardware problem." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Connecting a laptop to home WiFi (baseline case)</h3>
      <div className="prose-p">
        A laptop scans for nearby wireless signals and lists the broadcast <TermLink href="/technology-basics/how-wifi-works">SSIDs</TermLink> (network names) it detects. After the correct password is entered, the laptop and the router&apos;s <TermLink href="/technology-basics/how-wifi-works">access point</TermLink> perform a brief handshake to authenticate and agree on encryption keys, then negotiate which frequency band and channel to communicate on. From that point, the laptop&apos;s requests for data (like loading a webpage) are sent as radio signals to the router, which passes them along to the wired internet connection behind it, and the reply comes back the same way — radio wave to the laptop, cable to the internet.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A microwave oven disrupting a WiFi call (edge case / variation)</h3>
      <div className="prose-p">
        Someone starts a microwave in the kitchen and a nearby video call over 2.4GHz WiFi briefly glitches. This isn&apos;t a coincidence: microwave ovens generate stray electromagnetic energy that leaks at frequencies close to 2.4GHz, the same band a huge share of WiFi devices use, and that stray energy can act as interference competing for the same slice of radio spectrum. Devices on the less-crowded 5GHz band are typically unaffected, since a microwave&apos;s leakage doesn&apos;t overlap with that frequency range — one practical reason routers let you choose which band a device connects to.
      </div>
      <QuickCheck
        question="Why might a video call over a 2.4GHz WiFi connection briefly glitch when a nearby microwave oven turns on, while a 5GHz connection in the same room stays unaffected?"
        options={[
          { text: "Microwaves physically block WiFi signals with their metal casing, regardless of frequency", correct: false, explanation: "The metal casing is largely irrelevant here — the real mechanism is stray electromagnetic leakage from the microwave landing in a frequency range that overlaps with 2.4GHz WiFi specifically, not a general blocking effect." },
          { text: "Microwave ovens leak stray electromagnetic energy near the 2.4GHz range, which competes with and disrupts 2.4GHz WiFi signals, while 5GHz uses a different, unaffected frequency range", correct: true, explanation: "Correct. This frequency overlap with 2.4GHz specifically (not radio interference in general) is the actual mechanism, which is why switching the affected device to 5GHz is a genuinely effective fix." },
          { text: "Running any kitchen appliance always disrupts WiFi regardless of the appliance or the WiFi band in use", correct: false, explanation: "Most kitchen appliances have no meaningful effect on WiFi — the microwave case is specific because of its particular electromagnetic leakage characteristics overlapping the 2.4GHz band." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Placing a router in a closet vs. a central open room (real-world / applied case)</h3>
      <p>
        A router tucked inside a closet, behind a closed door, tends to deliver noticeably weaker WiFi throughout a home compared with the identical router placed centrally in an open room. Every wall, door, and piece of furniture between the router and a device absorbs some of the radio wave&apos;s energy — a phenomenon called attenuation — and a closet compounds this with an enclosed metal or dense-material box working against the signal before it even reaches the first wall. Placing a router centrally and elevated, with fewer obstacles in the most-used rooms, is a purely physical fix: it reduces the number and thickness of obstacles the signal has to pass through to reach your devices, which is why &quot;just move the router&quot; is often more effective advice than buying new hardware.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="2.4GHz vs. 5GHz: range and obstacle penetration compared"
        type="comparison"
        svgSrc="/diagrams/technology-basics-how-wifi-works-band-comparison.svg"
        altText="A diagram comparing a router broadcasting on 2.4GHz, shown reaching farther through multiple walls with a wider but shorter wave pattern, against the same router broadcasting on 5GHz, shown with a shorter, tighter wave pattern that reaches a smaller area and is blocked more by the same walls, illustrating the range-versus-speed trade-off between the two bands."
      />
      <p>
        Both bands come from the same router and antenna hardware — the difference in reach shown here comes entirely from the physical behavior of longer versus shorter radio wavelengths, not from one signal being inherently &quot;stronger.&quot;
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming more WiFi signal bars always means a faster internet connection.", fix: "Signal bars measure radio connection quality between your device and the router, not the speed of the internet line behind that router — a strong WiFi signal to a slow internet plan is still a slow connection overall." },
          { mistake: "Believing 5GHz is simply 'better' than 2.4GHz in every situation.", fix: "5GHz is faster at close range but has shorter reach and worse wall penetration — 2.4GHz is often the better practical choice for devices far from the router or in obstacle-heavy homes." },
          { mistake: "Placing the router in a closet, cabinet, or basement corner for tidiness.", fix: "Put the router in a central, elevated, open location — every wall and enclosure between it and your devices weakens the signal before it even leaves the room." },
          { mistake: "Thinking WiFi and 'the internet' are the same thing.", fix: "WiFi is just the wireless link between your devices and your router; the router still needs a wired connection to an ISP for there to be any internet to distribute in the first place." },
        ]}
      />
      <MisconceptionCallout
        myth="Turning off WiFi at night or using a VPN protects you from WiFi radio waves being 'unsafe' to be around."
        reality={<p>WiFi uses low-power radio waves in the same general category as many everyday consumer electronics, and the frequencies and power levels used are regulated specifically to stay within established safety limits set by national telecommunications regulators. There&apos;s no credible evidence that typical household WiFi exposure poses a health risk at these power levels — the &quot;unsafe radiation&quot; framing conflates WiFi&apos;s non-ionizing radio waves with much higher-energy types of radiation (like X-rays) that work through an entirely different physical mechanism.</p>}
      />

      <QuickCheck
        question="Is WiFi radiation the same category of radiation as X-rays, just weaker?"
        options={[
          { text: "Yes — it's the same type of radiation, just at lower intensity", correct: false, explanation: "They're fundamentally different types. WiFi uses non-ionizing radio waves; X-rays are ionizing radiation, a distinct category with enough energy per photon to alter atoms — a difference in kind, not just intensity." },
          { text: "No — WiFi uses non-ionizing radio waves, a different category from ionizing radiation like X-rays, which work through a different physical mechanism entirely", correct: true, explanation: "Correct. Radio waves (including WiFi, FM radio, and broadcast TV) don't carry enough energy per photon to ionize atoms, unlike X-rays and gamma rays." },
          { text: "It depends on which frequency band the WiFi router is using", correct: false, explanation: "Both 2.4GHz and 5GHz WiFi are non-ionizing radio waves — neither band crosses into the ionizing radiation category regardless of frequency choice." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Compare wavelength at different WiFi frequencies"
        description="Wavelength = speed of light ÷ frequency. Shorter wavelengths (higher frequency, like 5GHz) diffract around obstacles less easily than longer wavelengths (lower frequency, like 2.4GHz) — this is the physical root of the range-vs-speed trade-off."
        fields={[
          { key: "frequencyGHz", label: "Frequency (GHz)", defaultValue: 2.4, step: 0.1, min: 0.1 },
        ]}
        resultLabel="Wavelength (centimeters)"
        formula="radioWavelengthCm"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Move your router to a central, elevated, open location if you can — it's the single highest-impact free fix for weak WiFi in most homes.",
          "Switch a device having range trouble to your router's 2.4GHz band specifically, and switch a device close to the router to 5GHz for maximum speed.",
          "If a call or stream glitches near a microwave, note whether the affected device is on 2.4GHz — moving it to 5GHz is a real fix, not a placebo.",
          "Read Modem vs. Router Explained next to see exactly which device does the WiFi broadcasting and which one connects to your ISP.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does WiFi actually work?", answer: "A router takes an internet connection coming in over a wire and rebroadcasts it as radio waves. Devices with a built-in radio antenna, like phones and laptops, send and receive data over those radio waves instead of needing their own cable to the router." },
          { question: "Is WiFi the same as the internet?", answer: "No. WiFi is only the wireless link between your devices and your router. The router still needs a separate wired connection to an internet service provider for there to be any internet access to share wirelessly." },
          { question: "Why does WiFi get weaker farther from the router?", answer: "Radio wave signal strength drops with distance as the energy spreads out, and further weakens when passing through walls, floors, and furniture — a phenomenon called attenuation. This is basic radio physics, not a router malfunction." },
          { question: "Is 5GHz WiFi always faster than 2.4GHz?", answer: "At close range with few obstacles, yes, 5GHz typically offers significantly higher speeds. But 5GHz's shorter wavelengths don't travel as far or penetrate walls as well, so at longer range or through more obstacles, 2.4GHz often performs more reliably." },
          { question: "Can a microwave interfere with WiFi?", answer: "Yes, specifically with 2.4GHz WiFi. Microwave ovens can leak stray electromagnetic energy near the 2.4GHz frequency range, which can disrupt devices connected on that band; 5GHz connections are unaffected by this specific interference." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
