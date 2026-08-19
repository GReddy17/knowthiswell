import React from 'react';
import { PostMeta, PostFrontmatter } from '@/types/post';
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
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Volcanoes Around the World",
  category: "geography-world-facts",
  order: 3,
  subtopic: "physical-geography",
  tags: ["volcanoes", "plate tectonics", "ring of fire", "physical geography"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why volcanoes cluster along the Pacific Ring of Fire, what actually makes one erupt, and the difference between active, dormant, and extinct.",
  summary: "Volcanoes form mostly at tectonic plate boundaries where magma finds a path to the surface, which is why roughly 75% of the world's active volcanoes ring the Pacific Ocean along a belt geologists call the Ring of Fire.",
  sources: [
    { label: "USGS — Volcano Hazards Program", url: "https://www.usgs.gov/programs/VHP" },
    { label: "Smithsonian Global Volcanism Program", url: "https://volcano.si.edu/" },
    { label: "NOAA — Ring of Fire", url: "https://oceanexplorer.noaa.gov/facts/ring-of-fire.html" },
  ],
  seeAlso: [
    "geography-world-facts/mountains-and-mountain-ranges",
    "geography-world-facts/continents-and-oceans-overview",
    "general-science-facts/earths-structure-and-plate-tectonics",
  ],
  glossary: [
    { term: "Ring of Fire", definition: "A roughly 40,000-kilometer horseshoe-shaped belt around the Pacific Ocean where most of the world's active volcanoes and earthquakes occur, following tectonic plate boundaries." },
    { term: "Magma", definition: "Molten rock beneath Earth's surface; once it erupts above ground it's called lava." },
    { term: "Subduction zone", definition: "A boundary where one tectonic plate slides beneath another, often melting into magma that fuels volcanic activity above it." },
    { term: "Dormant volcano", definition: "A volcano that hasn't erupted recently but is expected to erupt again in the future, distinct from an extinct volcano that is not expected to erupt again." },
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
          "About 75% of the world's roughly 1,350 potentially active volcanoes sit along the Pacific 'Ring of Fire,' a belt that traces tectonic plate boundaries, not a coincidence of geography.",
          "Volcanoes erupt because magma is less dense than solid rock and forced upward by pressure, finding whatever path — a vent, a crack, a weak point — lets it reach the surface.",
          "'Active,' 'dormant,' and 'extinct' describe a volcano's likelihood of erupting again, not a strict on/off state — a 'dormant' volcano has erupted before and is expected to again, unlike an 'extinct' one.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A volcano is essentially a vent where molten rock, gas, and ash from deep underground can reach Earth&apos;s surface. Most of them aren&apos;t randomly scattered — they cluster heavily along the edges of tectonic plates, especially around the Pacific Ocean in a belt called the <TermLink href="/geography-world-facts/volcanoes-around-the-world">Ring of Fire</TermLink>, which includes well-known volcanoes in Japan, Indonesia, the Philippines, and the western coasts of North and South America.</div>}
        detailed={<div className="prose-p">Volcanic activity is concentrated at plate boundaries because that&apos;s where <TermLink href="/geography-world-facts/volcanoes-around-the-world">magma</TermLink> most easily finds a path upward. At <TermLink href="/geography-world-facts/volcanoes-around-the-world">subduction zones</TermLink> — where a denser oceanic plate slides beneath a lighter continental or oceanic plate — the descending plate heats up and partially melts, generating magma that rises through the overriding plate and erupts, building the chain of volcanoes seen in Japan, the Philippines, and the Andes. At divergent boundaries, where plates pull apart (most dramatically along the mid-ocean ridges, but visibly on land in Iceland), magma rises to fill the gap directly. A smaller number of volcanoes, like Hawaii&apos;s, form over &quot;hotspots&quot; — stationary plumes of magma rising from deep in the mantle that punch through the crust regardless of plate boundaries, leaving a trail of extinct volcanic islands behind as the plate slides over the hotspot.</div>}
      />
      <FootnoteAside>The Ring of Fire isn&apos;t a perfect ring — it&apos;s roughly horseshoe-shaped, open at the southern end, and traces about 40,000 kilometers along the Pacific Plate&apos;s boundary with its neighbors.</FootnoteAside>

      <p>
      Knowing where volcanoes form explains the map. The next question is what actually determines whether a given volcano is a real near-term risk or a landform that&apos;s effectively gone quiet for good.
      </p>

      <QuickCheck
        question="A volcano hasn't erupted in 300 years but geologists still classify it as 'dormant' rather than 'extinct.' What does that classification actually mean?"
        options={[
          { text: "It means the volcano is currently erupting, just slowly", correct: false, explanation: "Dormant specifically means NOT currently erupting — that would be 'active.' Dormant describes a quiet period, not an ongoing slow eruption." },
          { text: "It means geologists still consider it capable of erupting again in the future, based on its geological history and magma system", correct: true, explanation: "Correct. Dormant volcanoes have erupted before and retain the underlying magma system that could erupt again — the label reflects future risk, not current activity." },
          { text: "It means the volcano is being actively monitored for tourism purposes only", correct: false, explanation: "Monitoring for tourism isn't what defines the classification — the classification is about geological risk assessment, which happens to also inform tourism and safety decisions but isn't the reason for the label." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Mount Fuji, a subduction-zone volcano (baseline case)</h3>
      <div className="prose-p">
      Japan sits where several tectonic plates meet and subduct beneath each other, making it one of the most volcanically active countries on Earth, home to roughly 111 active volcanoes. Mount Fuji, its most famous, is a classic subduction-zone stratovolcano built from repeated eruptions of alternating lava and ash layers. It&apos;s currently classified as active, with its last confirmed eruption in 1707-1708 — dormant in practice, but not extinct, since Japan&apos;s tectonic setting means the underlying conditions that built it haven&apos;t gone away.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Hawaii, a hotspot volcano chain (edge case)</h3>
      <div className="prose-p">
      The Hawaiian Islands don&apos;t sit on a plate boundary at all — they&apos;re the visible result of the Pacific Plate sliding slowly northwest over a stationary mantle hotspot roughly 40 million years or more. Each island formed when it was directly over the hotspot; as the plate moved on, the volcano&apos;s magma supply was cut off and it became extinct, while a new island began forming behind it. The Big Island&apos;s Kilauea sits directly over the hotspot today and is one of the most continuously active volcanoes on Earth, while the older islands to the northwest — like Kauai — are extinct and heavily eroded.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why volcanic soil supports dense farming populations (real-world case)</h3>
      <div className="prose-p">
      Despite the risk, some of the most densely farmed and populated regions on Earth sit near active volcanoes — Indonesia&apos;s Java, parts of the Philippines, and areas around Mount Etna in Italy among them. Weathered volcanic ash and lava break down into mineral-rich soil, unusually fertile for growing rice, coffee, and other crops. Millions of people live within range of an eruption specifically because the same geological process that creates the hazard also created the region&apos;s agricultural productivity — a genuine tradeoff, not an oversight.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The Pacific Ring of Fire"
        type="detail"
        svgSrc="/diagrams/volcanoes-around-the-world-ring-of-fire.svg"
        altText="World map outline highlighting the Pacific Ocean rim in a horseshoe shape, marking clusters of volcanoes along the western coasts of North and South America, and along Japan, the Philippines, Indonesia, and New Zealand on the western and southern Pacific rim."
      />
      <p>
      Notice the pattern traces plate boundaries almost exactly — it&apos;s not a coincidence of geography, it&apos;s a direct map of where tectonic plates are colliding or sliding past each other around the Pacific.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming 'dormant' means safe or effectively extinct.", fix: "Treat dormant volcanoes as still-monitored risks — the label means 'not currently erupting but capable of erupting again,' not 'done forever.'" },
          { mistake: "Assuming all volcanoes form at plate boundaries.", fix: "Remember hotspot volcanoes like Hawaii's form independent of plate edges, over a stationary mantle plume — a real, if less common, third mechanism." },
          { mistake: "Thinking volcanic activity is purely a hazard with no benefit.", fix: "Recognize volcanic soil is genuinely, measurably more fertile — it's part of why so many people historically settled near active volcanic regions despite the risk." },
        ]}
      />
      <MisconceptionCallout
        myth="Lava is the most dangerous part of a volcanic eruption."
        reality={<p>For most well-known volcanoes, lava usually moves slowly enough to outrun on foot. The deadliest hazards are typically pyroclastic flows — fast-moving currents of superheated gas and volcanic material that can travel over 100 km/h — along with ashfall collapsing roofs, and volcanic gases. The 79 AD eruption that buried Pompeii killed most victims via pyroclastic flow and ashfall, not slow-moving lava.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate a Hawaiian-chain island's age from hotspot drift"
        fields={[
          { key: "distanceFromHotspotKm", label: "Distance from the current hotspot (km)", defaultValue: 500 },
          { key: "plateSpeedCmPerYear", label: "Plate speed (cm per year)", defaultValue: 7 },
        ]}
        resultLabel="Approximate age of that island (million years)"
        formula="hotspotIslandAge"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Look up the nearest active or dormant volcano to where you live, or to a place you plan to visit — the Smithsonian Global Volcanism Program keeps a public, searchable database.",
          "Next time you see a chain of islands, check whether it could be a hotspot trail like Hawaii's — the ages of the islands should increase steadily in one direction.",
          "If you live near volcanic soil, look into what crops are traditionally grown there — it's a fast way to understand the local agricultural history.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the Ring of Fire?", answer: "A roughly 40,000-kilometer horseshoe-shaped belt around the Pacific Ocean where about 75% of the world's active volcanoes and a large share of its earthquakes occur, tracing the boundaries of the Pacific Plate and its neighbors." },
          { question: "What's the difference between active, dormant, and extinct volcanoes?", answer: "Active means currently erupting or erupted within recorded/recent history and considered likely to erupt again; dormant means quiet now but still expected to erupt again eventually; extinct means not expected to erupt again, usually because its magma supply has been cut off." },
          { question: "Do all volcanoes form at tectonic plate boundaries?", answer: "Most do, but not all — hotspot volcanoes like Hawaii's form over a stationary mantle plume far from any plate boundary, as the overlying plate slowly drifts across it." },
          { question: "Is lava the most dangerous part of a volcanic eruption?", answer: "No — pyroclastic flows (fast-moving superheated gas and debris), ashfall, and volcanic gases are typically far more dangerous and faster-moving than lava flows, which most people can usually outrun." },
          { question: "Why do people live near active volcanoes?", answer: "Volcanic soil is unusually fertile for farming, and many volcanic regions have supported dense agricultural populations for centuries despite the eruption risk — a genuine historical tradeoff between hazard and productivity." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
    </>
  );
}
