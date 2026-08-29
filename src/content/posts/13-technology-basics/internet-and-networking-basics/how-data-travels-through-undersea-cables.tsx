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
  title: "How Data Travels Undersea: The Physical Internet",
  category: "technology-basics",
  order: 9,
  subtopic: "internet-and-networking-basics",
  tags: ["undersea cables", "submarine cables", "physical internet", "fiber optic cable", "networking basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "Almost all international internet traffic travels through fiber-optic cables laid on the ocean floor, not satellites — the internet is a physical, undersea network.",
  summary: "The overwhelming majority of international internet traffic — video calls, emails, financial transactions — travels as pulses of light through fiber-optic cables physically laid across the ocean floor, not through satellites.",
  sources: [
    { label: "TeleGeography — Submarine Cable Map", url: "https://www.submarinecablemap.com/" },
    { label: "NOAA National Ocean Service — How Are Undersea Cables Laid on the Ocean Floor?", url: "https://oceanservice.noaa.gov/facts/telecom-cables.html" },
    { label: "International Cable Protection Committee (ICPC)", url: "https://www.iscpc.org/" },
    { label: "Internet Society — How Does the Internet Work?", url: "https://www.internetsociety.org/internet/how-it-works/" },
  ],
  seeAlso: [
    "technology-basics/how-the-internet-actually-works",
    "technology-basics/latency-explained-why-fast-internet-can-feel-slow",
    "technology-basics/bandwidth-vs-speed-explained",
  ],
  glossary: [
    { term: "Submarine cable", definition: "A fiber-optic cable laid across the ocean floor to carry internet and telecommunications data between continents." },
    { term: "Fiber-optic cable", definition: "A cable that transmits data as pulses of light through thin strands of glass, rather than as electrical signals through copper wire." },
    { term: "Cable landing station", definition: "A facility on shore where an undersea cable comes out of the ocean and connects into a country's terrestrial internet infrastructure." },
    { term: "Repeater", definition: "A device placed at intervals along a long undersea cable that amplifies the light signal, since it weakens gradually over distance." },
    { term: "Cable ship", definition: "A specialized vessel used to lay new undersea cables and to locate and repair damaged ones." },
    { term: "Satellite internet", definition: "Internet access delivered via signals relayed through satellites rather than physical cables, used as a complement to (not a replacement for) the undersea cable network for most international data." },
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
          "Almost all international internet traffic — not just a portion of it — travels through physical fiber-optic cables laid on the ocean floor, not through satellites.",
          "These cables carry data as pulses of light through thin glass fibers, and because light loses strength over very long distances, repeaters are spaced along the cable to amplify the signal periodically.",
          "The internet is, at its physical foundation, a network of specific, mappable cables connecting specific landing points on specific coastlines — not an abstract, placeless 'cloud.'",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">When you video call someone on another continent, that data doesn&apos;t float invisibly through the sky — it almost certainly travels through a physical cable lying on the ocean floor, about as thick as a garden hose, carrying pulses of light between the two countries. These <TermLink href="/technology-basics/how-data-travels-through-undersea-cables">submarine cables</TermLink> connect continents the same basic way underwater telegraph cables did over a century ago, just carrying vastly more data, at the speed of light, through glass instead of electrical signals through copper.</div>}
        detailed={<div className="prose-p">A modern submarine cable is a bundle of thin glass strands — <TermLink href="/technology-basics/how-data-travels-through-undersea-cables">fiber-optic</TermLink> — encased in layers of protective insulation, steel wire armor, and waterproofing, then laid across the seafloor by specialized <TermLink href="/technology-basics/how-data-travels-through-undersea-cables">cable ships</TermLink>. Data travels as pulses of light through the glass fibers, which is both extremely fast and extremely high-capacity compared to older copper-based long-distance links. Because light signals gradually lose strength over very long distances even in high-quality glass, cables spanning thousands of kilometers include <TermLink href="/technology-basics/how-data-travels-through-undersea-cables">repeaters</TermLink> — powered amplifier units — spaced at intervals along the cable&apos;s length to boost the signal before it degrades too far to be read correctly. Each end of a cable comes ashore at a <TermLink href="/technology-basics/how-data-travels-through-undersea-cables">cable landing station</TermLink>, where it connects into that country&apos;s terrestrial fiber network, ultimately reaching the data centers and internet exchanges that route ordinary internet traffic onward.</div>}
      />
      <FootnoteAside>Satellite internet, including newer low-orbit satellite systems, is a genuinely useful option for remote areas without cable infrastructure, but it still carries only a small fraction of total international internet traffic compared to submarine cables — cables offer far higher capacity and, for most routes, lower latency than a satellite round trip.</FootnoteAside>

      <p>
        Once you picture the internet&apos;s international backbone as a specific set of physical, mappable cables rather than an abstract cloud, a lot of otherwise-surprising facts — a single cable cut causing regional outages, cable maps being a real, published resource — stop being surprising at all.
      </p>

      <QuickCheck
        question="When you make an international video call, how does most of that data actually travel between continents?"
        options={[
          { text: "Primarily through communication satellites in orbit", correct: false, explanation: "Satellites carry a comparatively small share of international internet traffic. The overwhelming majority travels through physical fiber-optic cables laid on the ocean floor." },
          { text: "Primarily through fiber-optic submarine cables laid across the ocean floor, carrying data as pulses of light", correct: true, explanation: "Correct. Submarine cables carry the vast majority of international internet and telecommunications traffic, offering far higher capacity than satellite links for most routes." },
          { text: "Through a single centralized international data hub that all countries connect to directly", correct: false, explanation: "There's no single central hub — international traffic flows through a mesh of many separate submarine cables connecting different pairs of countries and regions directly." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Sending an email across an ocean (baseline case)</h3>
      <div className="prose-p">
        An email sent from one continent to another travels through domestic fiber networks to reach a cable landing station, then travels as light pulses through a submarine cable — passing through one or more repeaters along the way to keep the signal strong — before coming ashore at a landing station on the receiving continent and continuing through that country&apos;s terrestrial network to its destination. The entire trip, spanning potentially thousands of kilometers of undersea cable, typically completes in well under a second, since light travels extremely fast even through the slightly slower medium of glass fiber compared to a vacuum.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A single cable cut causing a regional outage (edge case / variation)</h3>
      <div className="prose-p">
        A ship&apos;s anchor accidentally drags across and severs a submarine cable near a coastline, and internet users in a nearby region experience slower connections or partial outages for hours or days while it&apos;s repaired. This happens because international bandwidth for a given region is often carried by a limited number of cables, so damage to one can meaningfully reduce total available capacity even though other cables continue operating — traffic reroutes through remaining cables, but often with more congestion or a longer physical path, adding latency. Repairing a cable is a genuinely physical operation: a specialized cable ship must locate the exact break point, haul the damaged section to the surface, splice in a new segment, and re-lay it, which is why repairs can take days to weeks rather than hours.
      </div>
      <QuickCheck
        question="A submarine cable serving a coastal region is accidentally damaged by a ship's anchor. Why can this cause a noticeable regional internet slowdown even though other cables continue working?"
        options={[
          { text: "Because that one region's internet capacity may be concentrated on a limited number of cables, so losing one meaningfully reduces available capacity, forcing traffic to reroute through remaining cables with more congestion or longer paths", correct: true, explanation: "Correct. Regions aren't always served by a large number of redundant cables, so a single damaged cable can measurably affect available bandwidth and latency until it's repaired or traffic fully reroutes." },
          { text: "All internet traffic worldwide instantly stops the moment any single cable is damaged", correct: false, explanation: "The internet's mesh design means traffic can reroute around a damaged cable through other paths — a full worldwide stoppage from one cable cut wouldn't be expected, though a regional slowdown or partial outage can genuinely occur." },
          { text: "Cable damage only affects phone calls, not general internet browsing", correct: false, explanation: "Submarine cables carry general internet traffic just as much as, if not more than, voice traffic — a cable cut can affect browsing, streaming, and any other data crossing that cable, not phone calls specifically." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Choosing a route for a new international cable (real-world / applied case)</h3>
      <p>
        Companies and consortiums planning a new submarine cable route carefully survey the ocean floor to avoid known hazards — steep underwater terrain, existing cables, heavy fishing or anchoring zones, and geologically unstable areas — before laying a new route. This is a deliberate risk-reduction exercise: since a cable represents a large capital investment and repairs are slow and costly, minimizing the chance of accidental damage during the cable&apos;s operational life (which can span decades) is built into the planning from the start, alongside choosing landing station locations with stable political and regulatory environments.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Cross-section of a submarine cable and its journey between continents"
        type="detail"
        svgSrc="/diagrams/technology-basics-how-data-travels-through-undersea-cables-cross-section.svg"
        altText="A diagram showing a cross-section of a submarine cable with layered protective armor, insulation, and a bundle of thin glass fibers at its core, alongside a simplified map view showing the cable running from a landing station on one coastline, across the ocean floor with a repeater marked partway along its length, to a landing station on another coastline."
      />
      <p>
        The cable&apos;s physical construction — glass fibers wrapped in progressively tougher protective layers — reflects the harsh environment it has to survive on the seafloor for decades, while the repeater shown partway along the route is what keeps the light signal strong enough to read correctly over such a long, continuous distance.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming international internet traffic mostly travels through satellites.", fix: "The overwhelming majority of international data travels through physical submarine fiber-optic cables — satellites carry only a small fraction, useful mainly for remote or hard-to-cable areas." },
          { mistake: "Picturing 'the cloud' as a placeless, purely wireless abstraction with no physical infrastructure.", fix: "Remember that even cloud services ultimately depend on a physical network of data centers connected by real, mappable fiber-optic cables, including specific undersea routes between continents." },
          { mistake: "Assuming a damaged submarine cable is repaired within hours, like a local power line.", fix: "Repairing an undersea cable requires a specialized cable ship to locate, raise, splice, and re-lay the damaged section — a process that commonly takes days to weeks, not hours." },
          { mistake: "Believing every country has many redundant cables, so no single cable really matters.", fix: "Some regions depend on a relatively small number of cables for most of their international capacity, which is exactly why a single cable's damage can cause a noticeable regional slowdown." },
        ]}
      />
      <MisconceptionCallout
        myth="The internet is a wireless, placeless system with no meaningful physical infrastructure connecting countries."
        reality={<p>International internet traffic overwhelmingly depends on a specific, mappable network of physical fiber-optic cables laid across ocean floors, connecting named landing stations in named countries. Organizations like TeleGeography maintain detailed public maps of these routes precisely because the physical layout matters enormously — for capacity planning, for understanding outage risk, and for basic geopolitical and economic reasons tied to who controls which routes.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate one-way signal delay across a submarine cable"
        description="Light travels slower through glass fiber than through a vacuum — roughly 200,000 kilometers per second, about two-thirds the speed of light in a vacuum, due to the fiber's refractive index. This estimates the pure propagation delay for a given cable distance, ignoring equipment and routing delays."
        fields={[
          { key: "distanceKm", label: "Cable distance (kilometers)", defaultValue: 9000, step: 100, min: 0 },
        ]}
        resultLabel="Estimated one-way delay (milliseconds)"
        formula="fiberOneWayDelayMs"
        formatResult="number"
        disclaimer="Real-world delay is somewhat higher due to repeaters, routing equipment, and the cable's actual path not being perfectly straight."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Look up a public submarine cable map to see the actual physical routes your international internet traffic likely follows.",
          "Next time an international connection feels slower than usual, consider that a specific cable route's congestion or damage — not just your local network — can be a real contributing factor.",
          "Remember that 'the cloud' still depends on real cables and real data centers in real physical locations, useful context for understanding outages and data-sovereignty discussions.",
          "Read Latency Explained next to see how physical distance, including undersea cable routes, sets a hard floor on how fast international connections can ever feel.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does data actually travel between continents on the internet?", answer: "The overwhelming majority of international internet traffic travels through fiber-optic submarine cables laid on the ocean floor, carrying data as pulses of light between landing stations on different continents — not primarily through satellites." },
          { question: "Are undersea internet cables real, physical cables?", answer: "Yes. They are specific, engineered cables — bundles of glass fiber wrapped in protective armor and insulation — physically laid across the seafloor by specialized cable ships, and their routes are documented on public submarine cable maps." },
          { question: "What happens if an undersea cable gets damaged?", answer: "Traffic that was using that cable typically reroutes through other available cables, which can increase congestion and latency for the affected region. Repairing the cable itself requires a specialized ship to locate, raise, splice, and re-lay the damaged section, often taking days to weeks." },
          { question: "Is satellite internet replacing undersea cables?", answer: "No. Satellite internet, including newer low-orbit systems, serves an important role for remote or hard-to-cable areas, but it still carries a small fraction of total international data compared to submarine cables, which offer far higher capacity for most routes." },
          { question: "Why do undersea cables need repeaters?", answer: "Light signals gradually lose strength as they travel through glass fiber over very long distances. Repeaters are powered amplifier units placed at intervals along long cables specifically to boost the signal before it degrades too far to be read correctly at the other end." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
