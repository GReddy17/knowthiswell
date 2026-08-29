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
  title: "What Is an IP Address (And Why Every Device Needs One)",
  category: "technology-basics",
  order: 2,
  subtopic: "internet-and-networking-basics",
  tags: ["IP address", "IPv4", "IPv6", "private IP", "public IP", "networking basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "An IP address is the numeric mailing address every internet-connected device needs so replies know where to come back to — here's how it's assigned and shared.",
  summary: "An IP address is a unique numeric label assigned to a device on a network so that other devices know exactly where to send data meant for it.",
  sources: [
    { label: "IETF RFC 791 — Internet Protocol (IPv4)", url: "https://www.rfc-editor.org/rfc/rfc791" },
    { label: "IETF RFC 1918 — Address Allocation for Private Internets", url: "https://www.rfc-editor.org/rfc/rfc1918" },
    { label: "Cloudflare Learning Center — What Is My IP Address?", url: "https://www.cloudflare.com/learning/network-layer/what-is-my-ip-address/" },
    { label: "MDN Web Docs — IP Address (Glossary)", url: "https://developer.mozilla.org/en-US/docs/Glossary/IP_Address" },
  ],
  seeAlso: [
    "technology-basics/how-the-internet-actually-works",
    "technology-basics/dns-explained-how-domain-names-work",
    "technology-basics/modem-vs-router-explained",
  ],
  glossary: [
    { term: "IP address", definition: "A unique numeric label assigned to a device on a network, used to route data to and from it — like a mailing address for internet traffic." },
    { term: "IPv4", definition: "The original IP addressing format, written as four numbers 0-255 separated by dots (e.g. 192.0.2.10), offering about 4.3 billion unique addresses." },
    { term: "IPv6", definition: "A newer, much larger addressing format designed to replace IPv4, written as eight groups of hexadecimal digits, offering an effectively inexhaustible number of addresses." },
    { term: "Public IP address", definition: "The single address your router uses to represent your entire home network to the wider internet." },
    { term: "Private IP address", definition: "An address usable only inside a local network (like a home or office), reused by countless different networks worldwide without conflict." },
    { term: "NAT (Network Address Translation)", definition: "The technique a router uses to let many devices on a private network share one public IP address, by tracking which internal device each outgoing request belongs to." },
    { term: "DHCP (Dynamic Host Configuration Protocol)", definition: "A protocol that automatically assigns an IP address to a device when it joins a network, instead of a person typing one in manually." },
    { term: "Subnet", definition: "A logically grouped block of IP addresses, often defined by a prefix length (like /24), that share the same local network segment." },
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
          "An IP address is a numeric mailing address for a device — without one, nothing on a network would know where to send a reply.",
          "Most home devices share one public IP address (your router's) through a technique called NAT, while each device also has its own private IP address only visible inside your home network.",
          "IPv4's roughly 4.3 billion addresses ran out of easy headroom years ago, which is the entire reason IPv6 — with an effectively inexhaustible address space — was designed as its replacement.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of an <TermLink href="/technology-basics/what-is-an-ip-address">IP address</TermLink> like a street address for mail. If you want a letter delivered, the sender needs to know exactly where to send it — and for a reply to come back, the destination needs to know the sender&apos;s address too. Every device connected to a network, from your phone to a website&apos;s server, has a numeric IP address for exactly this reason: so data knows where to go, and replies know where to come back to.</div>}
        detailed={<div className="prose-p">This is the internet&apos;s request-and-response model at its most basic: nothing gets sent without an address, in both directions. The classic format, <TermLink href="/technology-basics/what-is-an-ip-address">IPv4</TermLink>, writes an address as four numbers from 0 to 255 separated by dots (e.g. 192.0.2.10) — four 8-bit numbers, giving 2³², or about 4.3 billion, possible unique addresses. That sounds like a lot, but with billions of phones, laptops, smart TVs, and servers online, the easily-assignable pool of IPv4 addresses ran low years ago. The fix wasn&apos;t just conserving addresses harder — it was designing <TermLink href="/technology-basics/what-is-an-ip-address">IPv6</TermLink>, a newer format using eight groups of hexadecimal digits that provides an address space large enough (2¹²⁸) that exhaustion isn&apos;t a realistic concern. In the meantime, most networks stretch their limited IPv4 supply using <TermLink href="/technology-basics/what-is-an-ip-address">NAT</TermLink>: your router gets one <TermLink href="/technology-basics/what-is-an-ip-address">public IP address</TermLink> from your ISP, and every device inside your home gets its own <TermLink href="/technology-basics/what-is-an-ip-address">private IP address</TermLink> that only means something inside your own network. The router keeps an internal table mapping each outgoing request to the device that made it, so replies get routed back to the right device even though, from the outside, they all appear to come from one shared public address.</div>}
      />
      <FootnoteAside>Private IP address ranges (like 192.168.0.0-192.168.255.255 and 10.0.0.0-10.255.255.255) are formally reserved by IETF RFC 1918 specifically so they can be reused inside millions of separate home and office networks worldwide without ever conflicting — they&apos;re never routable on the public internet.</FootnoteAside>

      <p>
        The public/private split explains something that trips a lot of people up: your phone can show one IP address in its own settings, while a &quot;what&apos;s my IP&quot; website shows a completely different number. Both are correct — they&apos;re just answering different questions.
      </p>

      <QuickCheck
        question="Your phone's WiFi settings show an IP address like 192.168.1.14, but a 'what is my IP' website shows a completely different number. Why don't they match?"
        options={[
          { text: "One of the two readings must be wrong or outdated", correct: false, explanation: "Both readings are correct at the same time — they're just describing different things. The phone shows its private, local-network-only address; the website shows the shared public address your router presents to the internet." },
          { text: "The phone is showing its private IP address (only meaningful inside your home network), while the website is showing your router's shared public IP address, translated via NAT", correct: true, explanation: "Correct. This is exactly what NAT does — many devices share one public-facing address, while each keeps its own separate private address for identification inside the local network." },
          { text: "IP addresses change every time you open a new app, so a mismatch is expected", correct: false, explanation: "IP addresses don't change per app — an address is tied to a device's network connection and, for the public address, to the router itself, not to individual apps running on the device." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A phone joining home WiFi (baseline case)</h3>
      <div className="prose-p">
        A phone connects to a home WiFi network for the first time. The router&apos;s built-in <TermLink href="/technology-basics/what-is-an-ip-address">DHCP</TermLink> server automatically assigns it an unused private IP address from its local pool — commonly something like 192.168.1.14 — without anyone typing a number in by hand. From that point on, the router knows any traffic addressed to 192.168.1.14 inside the home network belongs to that phone. When the phone requests a webpage, the router relabels the outgoing request with its own public IP address before sending it onward, then routes the reply back to 192.168.1.14 once it arrives — all automatically, in milliseconds.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Two homes on opposite sides of the world using the identical private IP address (edge case / variation)</h3>
      <div className="prose-p">
        A household in one country and an unrelated household on another continent can both have a device sitting at exactly 192.168.1.5 at the same moment, with zero conflict. This isn&apos;t a coincidence or a rare fluke — private IP ranges are deliberately reserved (by RFC 1918) to be reused by every home and office network on Earth, precisely because they&apos;re never visible to, or routable across, the public internet. Only each network&apos;s single public IP address needs to be globally unique; the private addresses behind it are a purely local, closed-off numbering system that resets independently inside every router&apos;s little world.
      </div>
      <QuickCheck
        question="Two completely unrelated homes both have a laptop assigned the private IP address 192.168.1.5. Is this a problem?"
        options={[
          { text: "Yes — IP addresses must be globally unique, so this will cause a conflict somewhere on the internet", correct: false, explanation: "Global uniqueness is only required for public IP addresses. Private IP address ranges are specifically reserved for reuse inside separate local networks and are never visible on the public internet." },
          { text: "No — private IP addresses only need to be unique within their own local network, and the same private ranges are reused by millions of unrelated networks worldwide without conflict", correct: true, explanation: "Correct. As long as each home's own network doesn't assign that address twice internally, there's no possible conflict between two completely separate networks using the identical private address." },
          { text: "It's only fine if the two homes use different internet providers", correct: false, explanation: "The internet provider is irrelevant here — the reason it's fine is that private addresses are never exposed to, or compared against, the public internet at all." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why a website sees &quot;one visitor&quot; from an entire office building (real-world / applied case)</h3>
      <p>
        Fifty employees in the same office each browse a website from their own laptop, but the website&apos;s server logs may show all fifty requests arriving from a single public IP address — the office&apos;s shared internet connection. This is NAT operating exactly as designed: every device behind that router shares one public identity to the outside world. It&apos;s also why some websites&apos; &quot;block this IP for suspicious activity&quot; security measures can accidentally affect an entire office or household at once — the server genuinely cannot tell, from the IP address alone, that fifty separate people are behind it rather than one person browsing unusually fast.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How NAT lets many private IP addresses share one public IP address"
        type="detail"
        svgSrc="/diagrams/technology-basics-what-is-an-ip-address-nat.svg"
        altText="A diagram showing several devices inside a home, each with its own private IP address like 192.168.1.x, all connecting through a home router that has one public IP address, which is the only address visible to the wider internet, with the router shown maintaining an internal translation table mapping requests to devices."
      />
      <p>
        Everything inside the router&apos;s box is invisible from outside — the internet only ever sees the router&apos;s single public address. The router&apos;s internal translation table is what makes replies land back on the correct device rather than getting lost or delivered to the wrong laptop.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming every device on a home network has its own unique public IP address.", fix: "In most homes, only the router has a public IP address; every other device gets a private address shared to the outside world via NAT." },
          { mistake: "Thinking an IP address permanently identifies a specific person.", fix: "An IP address identifies a network connection (often shared by many people, like a household or office), not an individual — and many home IP addresses change periodically anyway." },
          { mistake: "Believing IPv6 is just a longer version of IPv4 with the same basic scarcity problem.", fix: "IPv6's address space (2^128) is astronomically larger than IPv4's (2^32) — it was designed specifically so address exhaustion stops being a structural concern at all." },
          { mistake: "Assuming a private IP address like 192.168.1.5 can be reached directly from outside your home network.", fix: "Private IP ranges are non-routable on the public internet by design — reaching a device from outside requires going through the router's public address and, typically, deliberate port forwarding." },
        ]}
      />
      <MisconceptionCallout
        myth="Your IP address reveals your exact home address or identity to anyone who sees it."
        reality={<p>An IP address typically reveals your internet provider and a general geographic region (often city- or region-level, sometimes far less precise), not a street address or a name. Pinpointing an actual identity from an IP address generally requires the internet provider itself to look up which customer account was using that address at a given time — information providers don&apos;t hand out to random third parties without legal process.</p>}
      />

      <QuickCheck
        question="Someone claims that seeing your IP address lets them find your exact home address immediately. Is this accurate?"
        options={[
          { text: "Yes, an IP address always maps directly to a specific street address", correct: false, explanation: "An IP address generally only indicates an internet provider and a broad geographic region — it does not directly encode a street address." },
          { text: "No — an IP address mainly reveals your ISP and a general region; tying it to an actual identity or address typically requires the ISP's own account records, which aren't publicly accessible", correct: true, explanation: "Correct. The precision people assume from 'IP lookup' tools is usually overstated — most only estimate a city or region, not an exact address." },
          { text: "It depends only on whether the device is a phone or a computer", correct: false, explanation: "Device type has no bearing on how precisely an IP address maps to a location — the precision depends on the ISP's address allocation and geolocation databases, not the device." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="How many usable devices can a subnet fit?"
        description="A smaller prefix number means a bigger block of addresses. This shows the usable host count for a given IPv4 subnet size (total addresses minus the network and broadcast addresses reserved in every subnet)."
        fields={[
          { key: "prefixLength", label: "Subnet prefix length (e.g. 24 for a /24)", defaultValue: 24, step: 1, min: 1, max: 30 },
        ]}
        resultLabel="Usable host addresses"
        formula="ipv4SubnetUsableHosts"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check your device's own network settings and compare it against a 'what is my IP' website — you'll see the private-vs-public split described here directly.",
          "If you ever need to let an outside device reach something on your home network (like a home security camera or a game server), know that it involves your router's public IP address plus deliberate port forwarding, not the device's private address alone.",
          "Don't panic if someone claims to have your IP address — understand what it realistically does and doesn't reveal about your identity or location.",
          "Read How the Internet Actually Works and DNS Explained next to see how an IP address gets used once a packet is addressed, and how a domain name gets turned into one in the first place.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is an IP address in simple terms?", answer: "A unique numeric label assigned to a device on a network so that data knows where to be delivered and replies know where to come back to — functionally similar to a mailing address." },
          { question: "Is my IP address the same as my device's private IP address?", answer: "Usually not. Most home devices have a private IP address only meaningful inside the home network, while the whole household shares one public IP address that the wider internet actually sees, via a technique called NAT." },
          { question: "Why did IPv4 run out of addresses?", answer: "IPv4 only supports about 4.3 billion unique addresses (2^32), and the explosive growth of internet-connected devices exceeded that easily-assignable supply. IPv6 was designed with a vastly larger address space (2^128) specifically to solve this." },
          { question: "Can someone find my exact address from my IP address?", answer: "Generally no. An IP address typically reveals your internet provider and a broad geographic region, not a precise street address — connecting it to a specific identity usually requires the ISP's private account records." },
          { question: "Is IPv6 the same thing as IPv4, just longer?", answer: "They're both IP addressing formats but structurally different: IPv4 uses four decimal numbers (0-255) totaling 32 bits, while IPv6 uses eight groups of hexadecimal digits totaling 128 bits, giving it an enormously larger address space." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
