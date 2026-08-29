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
  title: "What a Modem Does vs. What a Router Does",
  category: "technology-basics",
  order: 8,
  subtopic: "internet-and-networking-basics",
  tags: ["modem vs router", "home network setup", "gateway device", "networking basics", "ISP equipment"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "A modem translates your ISP's incoming signal into internet data; a router then shares that single connection across all the devices in your home.",
  summary: "A modem converts the signal format your internet provider delivers (over cable, fiber, or phone line) into data your home network can use, while a router takes that single connection and shares it — often wirelessly — among multiple devices.",
  sources: [
    { label: "MDN Web Docs — Router (Glossary)", url: "https://developer.mozilla.org/en-US/docs/Glossary/Router" },
    { label: "Cloudflare Learning Center — What Is a Router?", url: "https://www.cloudflare.com/learning/network-layer/what-is-a-router/" },
    { label: "Federal Communications Commission — Understanding Your Home Network", url: "https://www.fcc.gov/consumers" },
  ],
  seeAlso: [
    "technology-basics/how-wifi-works",
    "technology-basics/what-is-an-ip-address",
    "technology-basics/how-the-internet-actually-works",
  ],
  glossary: [
    { term: "Modem", definition: "A device that converts the signal format an internet provider delivers (over cable, fiber, or telephone lines) into data usable by a home network, and back again." },
    { term: "Router", definition: "A device that takes a single incoming internet connection and distributes it among multiple devices on a local network, often wirelessly." },
    { term: "Gateway device", definition: "A combined modem-and-router unit, common with many ISPs, that performs both jobs — signal conversion and traffic distribution — inside one physical box." },
    { term: "Local area network (LAN)", definition: "The private network of devices inside a home or office, connected to each other and, through a router, to the wider internet." },
    { term: "WAN (wide area network) port", definition: "The port on a router that connects to the modem (or ISP connection) — the router's link to the outside internet, as opposed to its LAN ports facing home devices." },
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
          "A modem's job is translation: it converts the specific signal format your ISP delivers (over a cable, fiber, or phone line) into ordinary network data, and back again.",
          "A router's job is distribution: it takes that single internet connection from the modem and shares it — usually over both WiFi and wired ports — among every device in your home.",
          "Many ISP-provided boxes are actually a modem and router combined into one unit (a gateway device), which is why the distinction can feel invisible until something needs troubleshooting or upgrading separately.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of your internet provider&apos;s connection like water arriving through a specialized industrial pipe that your house&apos;s regular plumbing can&apos;t use directly. A <TermLink href="/technology-basics/modem-vs-router-explained">modem</TermLink> is the adapter fitting that converts that specialized supply into water your house&apos;s normal pipes can carry. A <TermLink href="/technology-basics/modem-vs-router-explained">router</TermLink> is then the plumbing manifold that splits that one converted supply into multiple taps throughout the house — every phone, laptop, and smart TV gets its own tap, all fed from the same original source.</div>}
        detailed={<div className="prose-p">A modem&apos;s specific job is translating the physical signal format your ISP actually delivers — a modulated signal over a coaxial cable, pulses of light over fiber, or a modulated signal over telephone lines — into standard digital network data your devices understand, and vice versa for outgoing data. It&apos;s a one-connection-in, one-connection-out device by design: a modem alone doesn&apos;t know how to give a device its own address or manage multiple simultaneous devices. That&apos;s the router&apos;s job. A router accepts one internet connection through its <TermLink href="/technology-basics/modem-vs-router-explained">WAN port</TermLink> and creates a private <TermLink href="/technology-basics/modem-vs-router-explained">local area network</TermLink> behind it, assigning each connected device its own private IP address (via DHCP), broadcasting WiFi if it has wireless radios built in, and using NAT to let all those devices share the single public IP address the modem&apos;s connection provides. Many consumer ISP boxes bundle both functions into a single <TermLink href="/technology-basics/modem-vs-router-explained">gateway device</TermLink>, which is convenient but can blur the distinction — restarting &quot;the router&quot; when the actual fault is on the modem side of that same box won&apos;t fix a signal problem, and vice versa.</div>}
      />
      <FootnoteAside>Fiber internet connections often use a small terminal device called an ONT (optical network terminal) instead of a traditional cable or DSL modem, but it performs the same conceptual job — converting the ISP&apos;s specific incoming signal format into standard network data for a router to distribute.</FootnoteAside>

      <p>
        Once the two jobs are separated — translate the signal, then distribute the connection — a lot of home-network troubleshooting advice (&quot;unplug the modem,&quot; &quot;restart the router&quot;) stops being an interchangeable ritual and starts targeting the actual likely fault.
      </p>

      <QuickCheck
        question="A home network has separate modem and router devices. The internet stops working entirely for the whole house, including a wired connection plugged directly near the router. What's the more useful first troubleshooting step?"
        options={[
          { text: "Restart the router first, since it's the device closest to the affected devices", correct: false, explanation: "If the outage affects even a device wired directly and the router's own status lights suggest it has no internet feed, the modem — which handles the actual connection to the ISP — is a more likely first place to check." },
          { text: "Check the modem's status lights and connection to the ISP, since a total outage affecting even directly wired devices suggests the incoming signal itself may be the problem, not distribution", correct: true, explanation: "Correct. The router can only distribute a connection it's actually receiving — if there's no usable signal reaching it from the modem, restarting the router alone won't fix an upstream signal issue." },
          { text: "Replace the WiFi password, since a total outage is usually a wireless security issue", correct: false, explanation: "A WiFi password issue would only affect wireless devices trying to join the network — it wouldn't explain an outage on a device connected directly by wire, which points to a deeper connectivity problem." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A typical home setup with separate modem and router (baseline case)</h3>
      <div className="prose-p">
        A cable internet connection enters the home and plugs into a modem, which converts the cable signal into standard network data. A single cable then runs from the modem to a separate router&apos;s WAN port. The router creates the home WiFi network, assigns private IP addresses to the phone, laptop, and smart TV that join it, and uses NAT so all three devices share the modem&apos;s one internet connection. From the outside, the ISP sees one connection; inside the house, three devices each browse independently.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: An all-in-one ISP-provided gateway device (edge case / variation)</h3>
      <div className="prose-p">
        Many ISPs provide a single box that performs both the modem&apos;s signal-conversion job and the router&apos;s distribution job internally, sold or marketed simply as &quot;your internet box.&quot; Functionally, both jobs described above are still happening — they&apos;re just combined in one enclosure instead of two connected devices. This matters practically when someone wants to use their own separate router for better WiFi coverage or features: they typically need to either put the ISP&apos;s gateway into a &quot;bridge mode&quot; that disables its internal routing function, or accept running two routers in sequence, which can create its own connectivity quirks (like devices ending up on two different private networks that can&apos;t easily see each other).
      </div>
      <QuickCheck
        question="Someone wants to use their own high-performance router with an ISP-provided all-in-one gateway device, instead of relying on the gateway's built-in WiFi. What's the cleanest way to do this?"
        options={[
          { text: "Simply plug the new router into any port on the gateway and it will automatically take over all routing duties", correct: false, explanation: "Without disabling the gateway's own routing function, both devices may try to perform routing and NAT at once, which commonly creates two separate private networks that can behave unpredictably together." },
          { text: "Put the ISP's gateway into 'bridge mode' (disabling its internal router function so it only performs the modem's signal-conversion job), then connect the new router to it", correct: true, explanation: "Correct. Bridge mode turns the all-in-one gateway back into a plain modem, letting the new router take over routing and WiFi cleanly, exactly like the two-separate-device setup." },
          { text: "This isn't possible — an ISP-provided gateway device can never be paired with a separate router", correct: false, explanation: "It's a common and well-supported setup; most ISP gateways offer a bridge mode or similar option specifically to support using a separate router." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Upgrading WiFi coverage without changing internet providers (real-world / applied case)</h3>
      <p>
        A household experiencing weak WiFi coverage upgrades to a newer router with better range and additional wireless radios, while keeping their existing modem and ISP plan entirely unchanged. This works because the two jobs are genuinely separable: the modem&apos;s translation job doesn&apos;t need to change just because the router&apos;s distribution job is being improved. This is also why &quot;buy a better router&quot; is completely different troubleshooting advice from &quot;upgrade your internet plan&quot; — one improves how a fixed amount of bandwidth gets distributed inside the home, the other increases how much bandwidth is actually available to distribute in the first place.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="From ISP signal to every device in the house"
        type="flow"
        svgSrc="/diagrams/technology-basics-modem-vs-router-explained-topology.svg"
        altText="A diagram showing an ISP connection entering a home and passing into a modem, labeled as converting the ISP's signal into standard network data, then a single cable connecting the modem to a router, labeled as distributing that connection to multiple devices — a laptop, a phone, and a smart TV — via both WiFi and wired ports."
      />
      <p>
        Everything to the left of the router in this chain is about getting one usable connection into the house; everything to the right is about sharing that one connection among many devices — two genuinely different jobs, even when a single box performs both.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using 'modem' and 'router' interchangeably when troubleshooting internet problems.", fix: "Identify which job is actually failing — no signal reaching the house at all points to the modem; devices can't get online despite a working modem points to the router." },
          { mistake: "Assuming buying a new router will increase your internet plan's speed.", fix: "A router only distributes the bandwidth the modem is already receiving from your ISP — it can't create more bandwidth than what your plan and modem actually deliver." },
          { mistake: "Restarting only one device (just the router, or just the modem) when troubleshooting a total outage.", fix: "Restart the modem first and let it fully reconnect to the ISP before restarting the router, since the router depends on a working connection from the modem to have anything to distribute." },
          { mistake: "Assuming an ISP-provided all-in-one gateway device can't be replaced or supplemented with better equipment.", fix: "Most gateways support a bridge mode specifically for pairing with a separate, user-owned router — check the ISP's settings or support documentation rather than assuming it's locked in." },
        ]}
      />
      <MisconceptionCallout
        myth="A modem and a router are just two different brand names for the same device."
        reality={<p>They perform genuinely different jobs. A modem converts the specific signal format an ISP delivers into standard network data; a router then takes that single connection and distributes it, with its own private addressing, to multiple devices, often over WiFi. Many consumer devices bundle both functions into one box, which is exactly why the distinction gets blurred in everyday use — but the two jobs remain separable, and separating them is exactly what happens when someone plugs their own router into an ISP-provided modem or bridged gateway.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "During a total outage, restart the modem first and give it a minute or two to fully reconnect before restarting the router.",
          "If WiFi coverage is weak but the internet plan itself is fine, look at upgrading the router, not the internet plan or the modem.",
          "If you want to use your own router with an ISP-provided all-in-one gateway, check for a 'bridge mode' setting rather than running two routers in sequence.",
          "Read How WiFi Works next to see exactly what the router is doing once it starts broadcasting your home network wirelessly.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the actual difference between a modem and a router?", answer: "A modem converts the specific signal format your internet provider delivers (over cable, fiber, or phone lines) into standard network data. A router then takes that one connection and distributes it — often wirelessly — to multiple devices on a home network." },
          { question: "Do I need both a modem and a router?", answer: "You need both functions, but they can come as two separate devices or combined into one all-in-one gateway device provided by many ISPs. Either way, both the signal-conversion job and the distribution job are happening." },
          { question: "Will a new router make my internet faster?", answer: "A router can improve how efficiently your existing bandwidth is distributed and how strong your WiFi signal is, but it cannot increase the total bandwidth your ISP delivers through the modem — that's determined by your internet plan." },
          { question: "Why does restarting my modem sometimes fix internet problems that restarting my router doesn't?", answer: "The modem handles the actual connection to your ISP. If the issue is upstream of the router (a lost or degraded signal from the provider), only reconnecting the modem addresses it — the router has nothing new to distribute until the modem's connection is restored." },
          { question: "Can I use my own router with my ISP's provided modem?", answer: "Usually yes. If the ISP-provided device is an all-in-one gateway, most support a 'bridge mode' that disables its internal routing so it acts as a plain modem, letting your own router take over distribution and WiFi." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
