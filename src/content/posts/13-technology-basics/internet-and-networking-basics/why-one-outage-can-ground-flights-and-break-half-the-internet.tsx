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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Why One Outage Can Ground Flights and Break Half the Internet",
  category: "technology-basics",
  order: 102,
  subtopic: "internet-and-networking-basics",
  pillar: true,
  videoQueue: true,
  tags: ["outages", "single point of failure", "internet infrastructure", "cloud computing", "redundancy"],
  date: "2026-09-22",
  updated: "2026-09-22",
  lastReviewed: "2026-09-22",
  excerpt: "One company's server failure can silently break hundreds of unrelated apps, websites, and even flight operations — because they all quietly depend on the same shared layer.",
  summary: "Thousands of unrelated websites, apps, and even airline systems often run on the same small set of shared infrastructure — a DNS provider, a cloud region, a telecom network. When that shared layer fails, everything built on top of it fails at once, even though none of those individual companies did anything wrong. This is called a single point of failure, and it's why one outage can feel like the whole internet went down.",
  sources: [
    { label: "CISA — Cybersecurity and Infrastructure Security Agency, Critical Infrastructure Resources", url: "https://www.cisa.gov/topics/critical-infrastructure-security-and-resilience" },
    { label: "Federal Aviation Administration — NOTAM System Outage Statement (January 2023)", url: "https://www.faa.gov/newsroom/faa-statement-notam-system-issue" },
  ],
  seeAlso: [
    "technology-basics/dns-explained-how-domain-names-work",
    "technology-basics/what-a-vpn-actually-does",
    "technology-basics/latency-explained-why-fast-internet-can-feel-slow",
  ],
  glossary: [
    { term: "Single point of failure", definition: "Any one component in a system whose failure alone can take down the whole system, because nothing else can take over for it." },
    { term: "DNS", definition: "The internet's directory service, translating website names like example.com into the numeric addresses computers use to find them." },
    { term: "Redundancy", definition: "Building a system with backup components so that if one part fails, another can take over without an overall outage." },
    { term: "Cascading failure", definition: "A failure that spreads from one part of a system to dependent parts, causing a chain reaction of outages." },
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
          "Many unrelated websites, apps, and even physical-world systems like flight dispatch quietly depend on the same small set of shared providers — a DNS service, a cloud region, a telecom network.",
          "When that shared layer fails, everything built on top of it fails simultaneously, even though the individual companies running those apps didn't cause the problem themselves.",
          "This is called a single point of failure, and the real-world fix — spreading critical systems across multiple independent providers — costs more, which is why many organizations accept the risk instead.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Most apps and websites you use don&apos;t run on their own private infrastructure end to end — they rent pieces of it from a small handful of giant providers: cloud hosting companies, content delivery networks, and <TermLink href="/technology-basics/why-one-outage-can-ground-flights-and-break-half-the-internet">DNS</TermLink> services that translate web addresses into the numbers computers actually use. When thousands of unrelated companies all rent from the same handful of providers, one provider having a bad day can take all of them offline at once — which is why a single outage sometimes makes it feel like &quot;the internet is down&quot; even though only one company&apos;s system actually failed.</div>}
        detailed={<div className="prose-p">This is a <TermLink href="/technology-basics/why-one-outage-can-ground-flights-and-break-half-the-internet">single point of failure</TermLink>: any one component whose failure alone can break the whole system because nothing else is positioned to take over. The fix is <TermLink href="/technology-basics/why-one-outage-can-ground-flights-and-break-half-the-internet">redundancy</TermLink> — running critical systems across multiple independent providers or regions so one failure doesn&apos;t become a total outage — but redundancy costs real money and engineering effort, so many organizations accept the risk of relying on a single provider instead. When a shared layer does fail, the effect spreads as a <TermLink href="/technology-basics/why-one-outage-can-ground-flights-and-break-half-the-internet">cascading failure</TermLink>: the outage isn&apos;t just the provider&apos;s own service going down, it&apos;s every dependent system built on top of it failing in turn, sometimes in ways that look completely unrelated on the surface. This isn&apos;t limited to websites — airlines, hospitals, and government agencies increasingly run essential operational software on the same cloud and telecom infrastructure as everyone else, which is how a single shared-system failure can end up grounding real flights, not just crashing a webpage.</div>}
      />
      <FootnoteAside>In January 2023, a single damaged database file in the FAA&apos;s NOTAM system (which distributes safety alerts to pilots) forced a nationwide U.S. flight ground stop — a real example of one shared system&apos;s failure halting physical air travel, not just a website.</FootnoteAside>

      <p>
      That single incident is a useful case study for how far a shared-dependency failure can actually travel — from one broken file to grounded planes across an entire country.
      </p>

      <QuickCheck
        question="Several unrelated websites and apps all go down at the exact same time, even though they're run by different companies. What's the most likely explanation?"
        options={[
          { text: "It's a coincidence — several different companies happened to have unrelated problems at once", correct: false, explanation: "While possible, simultaneous outages across many unrelated services are much more often explained by a shared dependency than by pure coincidence." },
          { text: "They likely all depend on the same underlying shared infrastructure, such as a cloud provider, DNS service, or CDN, which has failed", correct: true, explanation: "Correct. Widespread simultaneous outages across unrelated companies are the classic signature of a shared, upstream provider failing — a single point of failure affecting everything built on top of it." },
          { text: "Every website on the internet runs through one single central server", correct: false, explanation: "There's no single server running the whole internet, but there is a small number of dominant providers that a very large share of websites and apps depend on for hosting, DNS, or content delivery." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A DNS provider outage (baseline case)</h3>
      <div className="prose-p">
      A major DNS provider handles address lookups for tens of thousands of websites it doesn&apos;t itself own — it just tells browsers where to find them. If that provider&apos;s servers go down, every one of those websites becomes unreachable, even though each site&apos;s own servers are running perfectly fine. Users just see a broken page and assume the specific website is down, when the real failure is one shared layer underneath dozens of unrelated ones.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A cloud region outage (edge case / variation)</h3>
      <div className="prose-p">
      Large cloud providers offer separate, isolated &quot;regions&quot; specifically so that a failure in one region doesn&apos;t take down customers using another. But many companies, to save cost and complexity, run their entire application in a single region anyway — so when that one region has a bad outage, every one of those companies&apos; apps goes down together, even though the cloud provider&apos;s other regions are working fine. The redundancy option existed; it just wasn&apos;t used.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The FAA&apos;s 2023 NOTAM outage (real-world / applied case)</h3>
      <div className="prose-p">
      A single corrupted database file inside the FAA&apos;s NOTAM system — which distributes critical safety notices to pilots before every flight — caused the system to fail. Because the FAA requires valid NOTAMs before a flight can legally depart, the agency ordered a full nationwide ground stop, delaying or cancelling thousands of U.S. flights. The failure wasn&apos;t in an airplane, an airline, or an airport — it was one shared database that every flight in the country depended on passing through.
      </div>

      <QuickCheck
        question="Why did a single database file failure in one federal system end up grounding flights operated by many different, unrelated airlines?"
        options={[
          { text: "Each airline's own internal systems failed independently at the same time by coincidence", correct: false, explanation: "The airlines' own systems weren't the point of failure — every flight, regardless of airline, depends on the same shared federal NOTAM system before departure." },
          { text: "Every flight nationwide depends on the same shared NOTAM system for safety clearance, so its failure blocked all airlines at once", correct: true, explanation: "Correct. Because NOTAM access is a legally required, shared dependency for every flight, one system's failure became a single point of failure for the entire national airline industry simultaneously." },
          { text: "The outage only affected flights within a single airline's fleet", correct: false, explanation: "The ground stop applied nationwide, across airlines, precisely because the failed system was a shared dependency for all U.S. flights, not something specific to one carrier." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Many unrelated services, one shared point of failure"
        type="flow"
        svgSrc="/diagrams/technology-basics-why-one-outage-can-ground-flights-and-break-half-the-internet.svg"
        altText="Diagram showing many unrelated websites, apps, and services all funneling through one shared layer such as a DNS provider or cloud region, so that a single failure in that shared layer breaks all of the dependent services at once."
      />
      <p>
      Notice how many separate, unrelated boxes at the top all funnel down into the same single layer at the bottom — that funnel shape is exactly what turns one provider&apos;s bad day into what looks, from the outside, like a much bigger and more mysterious outage.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a broken website means that specific company's own servers or code have a bug.", fix: "Widespread, simultaneous outages across unrelated sites are much more often a shared-provider failure — check whether other well-known sites are also down before assuming it's a code problem." },
          { mistake: "Treating \"the cloud is down\" and \"my internet connection is down\" as the same problem.", fix: "A cloud or DNS outage is a failure far upstream, affecting a specific provider's services for everyone; your own internet connection issue is local and typically doesn't affect other people's access to those same services." },
          { mistake: "Assuming redundancy against this kind of failure is free or automatic once you use a big, reliable provider.", fix: "Even the largest providers can and do have outages — real protection requires deliberately spreading critical systems across multiple independent providers or regions, which most organizations skip due to cost and complexity." },
        ]}
      />
      <MisconceptionCallout
        myth="A big company's outage is just that one company's website being broken."
        reality={<p>Many outages that look like &quot;one company&apos;s website is down&quot; are actually a shared infrastructure layer failing underneath dozens or hundreds of unrelated companies at once — a DNS provider, a cloud region, or a telecom network that all of them happen to rent from. This is why unrelated apps and websites sometimes go down together, and in the FAA&apos;s 2023 NOTAM outage, why a single database file failure inside one federal system could ground flights nationwide across every airline, not just the system where the failure occurred.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "When a website or app seems broken, check a status page or search for the provider's name plus \"outage\" before assuming it's a problem with your own device or connection.",
          "If you run or manage a critical system, ask specifically which single providers it depends on for hosting, DNS, and content delivery — and whether a failure in any one of them alone could take the whole thing down.",
          "Treat vendor redundancy claims skeptically until you know whether critical systems are actually spread across independent regions or providers, not just marketed as \"highly available.\"",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why do random, unrelated websites go down at the same time?", answer: "It usually means they all depend on the same shared infrastructure provider — a DNS service, a cloud region, or a content delivery network — which has failed, taking down every dependent site at once even though the sites themselves are unrelated." },
          { question: "Is a cloud outage different from my own internet being down?", answer: "Yes. A cloud or DNS outage is a failure at a specific provider affecting everyone who depends on it, regardless of their own internet connection. Your personal connection issue is local and wouldn't affect anyone else's access to the same services." },
          { question: "How do companies protect against this kind of outage?", answer: "The main defense is redundancy — deliberately running critical systems across multiple independent providers or geographic regions so that one provider's failure doesn't take down the whole system. Many organizations skip this due to added cost and complexity." },
          { question: "Did a tech outage really ground real flights before?", answer: "Yes. In January 2023, a corrupted database file in the FAA's NOTAM system, which distributes safety notices to pilots, forced a nationwide U.S. ground stop affecting flights across every domestic airline until the system was restored." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
    </>
  );
}
