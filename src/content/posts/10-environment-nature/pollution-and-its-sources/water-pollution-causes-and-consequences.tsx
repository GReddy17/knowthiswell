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
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Water Pollution: Causes & Consequences",
  category: "environment-nature",
  order: 10,
  subtopic: "pollution-and-its-sources",
  tags: ["water pollution", "eutrophication", "nonpoint source pollution", "dead zones", "water quality"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Most water pollution today doesn't come from a single identifiable pipe — it comes from nutrient runoff spread across entire watersheds, which triggers algal blooms and oxygen-starved 'dead zones' far downstream.",
  summary: "Water pollution splits into point-source pollution (a single identifiable discharge, like a factory outfall pipe) and nonpoint-source pollution (diffuse runoff from farms, lawns, and streets across a whole watershed) — the latter is now the larger driver of major consequences like eutrophication and dead zones.",
  sources: [
    { label: "US EPA — Nonpoint Source: Basic Information", url: "https://www.epa.gov/nps/basic-information-about-nonpoint-source-nps-pollution" },
    { label: "NOAA — Gulf of Mexico 'Dead Zone'", url: "https://www.noaa.gov/education/resource-collections/ocean-coasts/dead-zones" },
    { label: "World Health Organization — Drinking-water", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" },
  ],
  seeAlso: [
    "environment-nature/air-pollution-sources-and-health-impact",
    "environment-nature/plastic-pollution-and-the-ocean",
    "environment-nature/soil-contamination-basics",
  ],
  glossary: [
    {"term":"Point-source pollution","definition":"Water pollution traceable to a single identifiable discharge point, like a factory outfall pipe or a wastewater treatment plant, and directly regulated under permits in most countries."},
    {"term":"Nonpoint-source pollution","definition":"Water pollution that enters waterways diffusely, carried by rain and snowmelt runoff across farms, lawns, streets, and construction sites rather than from one identifiable pipe."},
    {"term":"Eutrophication","definition":"The process by which excess nutrients (mainly nitrogen and phosphorus) entering a body of water trigger explosive algae growth, which later dies, decomposes, and consumes the water's dissolved oxygen."},
    {"term":"Hypoxic zone (dead zone)","definition":"An area of water with dissolved oxygen levels too low to support most marine life, typically caused downstream of major nutrient runoff after an algal bloom decomposes."},
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
      "Water pollution splits into two structurally different categories: point-source (one identifiable pipe or outfall) and nonpoint-source (diffuse runoff across a whole watershed) — and regulation targets them very differently.",
      "Nonpoint-source runoff carrying excess nitrogen and phosphorus is now the dominant cause of the largest-scale water pollution consequence: eutrophication, which can produce oxygen-starved 'dead zones' far from the original source.",
      "A body of water can look clean and still be biologically collapsing — dead zones are defined by dissolved oxygen levels, not visible clarity or color.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Water pollution comes from two different kinds of sources. <TermLink href="/environment-nature/water-pollution-causes-and-consequences">Point-source pollution</TermLink> comes from one identifiable place, like a factory pipe dumping directly into a river. <TermLink href="/environment-nature/water-pollution-causes-and-consequences">Nonpoint-source pollution</TermLink> is diffuse — fertilizer washing off thousands of farms and lawns during a rainstorm, all draining into the same river a little at a time. Today, nonpoint-source runoff is the bigger overall problem, mainly because it triggers <TermLink href="/environment-nature/water-pollution-causes-and-consequences">eutrophication</TermLink> — an explosion of algae growth that eventually starves the water of oxygen.</div>}
      detailed={<div className="prose-p">Point-source pollution is comparatively easy to regulate because it&apos;s traceable to a specific permit holder — most countries require discharge permits with enforceable limits for factories and treatment plants. Nonpoint-source pollution has no single permit holder to target, since it&apos;s the aggregate of countless small contributions (residential fertilizer, agricultural runoff, road de-icing salt, pet waste) carried by stormwater across an entire watershed. When nitrogen and phosphorus from that runoff reach a lake, estuary, or coastal zone, they act as fertilizer for algae, triggering a bloom far larger than the ecosystem would naturally support. When that bloom dies, bacteria decomposing the dead algae consume dissolved oxygen faster than it can be replenished, producing a <TermLink href="/environment-nature/water-pollution-causes-and-consequences">hypoxic zone (dead zone)</TermLink> that most fish and shellfish cannot survive in.</div>}
      />
      <FootnoteAside>The Gulf of Mexico&apos;s dead zone, fed largely by nitrogen and phosphorus runoff carried down the Mississippi River from farms across the entire Midwest, has measured over 6,000 square miles in some years — a scale of impact from a source hundreds of miles upstream, not a single local discharge.</FootnoteAside>

      <p>
      Because nonpoint-source pollution has no single owner, fixing it usually requires coordinated changes across an entire watershed — better farm nutrient management, buffer strips along waterways, and stormwater capture in cities — rather than the permit-and-penalty approach that works for point sources.
      </p>

      <QuickCheck
      question="A lake shows a large algal bloom every summer, fed by fertilizer runoff from farms spread across a 50-mile radius. Is this best classified as point-source or nonpoint-source pollution?"
      options={[
      { text: "Point-source, since the fertilizer itself is a single identifiable product", correct: false, explanation: "The pollution source category is defined by how the pollutant enters the water, not what the pollutant is. Runoff diffused across many farms entering through rain and drainage, not a single pipe, is the defining feature." },
      { text: "Nonpoint-source, because the nutrient runoff is diffused across many farms and enters the lake through rain and drainage rather than one identifiable discharge point", correct: true, explanation: "Correct. This is the textbook nonpoint-source pattern: countless small contributions across a watershed combining into one large downstream effect, with no single discharger to regulate directly." },
      { text: "Neither category applies to agricultural runoff, since farms aren't considered a water pollution source", correct: false, explanation: "Agricultural runoff is one of the largest nonpoint-source pollution categories in most countries — it absolutely counts, it's just harder to regulate than a single pipe." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A factory discharge permit violation (baseline case)</h3>
      <div className="prose-p">
      A factory&apos;s wastewater outfall pipe is found discharging a pollutant above its permitted concentration limit. Because the pollution is traceable to one identifiable point, regulators can measure the exact discharge, cite the specific permit violated, and require a specific fix at that one location — the classic point-source enforcement pattern.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A watershed-wide nutrient problem (edge case / variation)</h3>
      <div className="prose-p">
      A river shows rising nitrogen levels traced not to any single discharger but to thousands of farms across its drainage basin, each contributing a small, individually legal amount of fertilizer runoff. No single farm is a permit violator, yet the combined effect downstream is a major eutrophication event — illustrating why nonpoint-source pollution requires basin-wide coordination (incentive programs, buffer zones) rather than enforcement against one party.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The Gulf of Mexico dead zone (real-world / applied case)</h3>
      <div className="prose-p">
      Nitrogen and phosphorus runoff from farms across the Mississippi River basin — spanning dozens of US states — flows downstream and triggers a large annual algal bloom in the Gulf of Mexico. When the bloom dies and decomposes, the resulting oxygen depletion creates a hypoxic dead zone that regularly measures thousands of square miles, forcing fish and shrimp to leave the area or die. The pollution source (fertilizer applied a thousand miles upstream) and the consequence (a marine dead zone at the river&apos;s mouth) are geographically disconnected by an entire watershed — a scale of cause-and-effect separation that point-source pollution rarely produces.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="From nutrient runoff to a dead zone: the eutrophication chain"
      type="flow"
      svgSrc="/diagrams/environment-nature-water-pollution-causes-and-consequences-eutrophication-chain.svg"
      altText="A left-to-right flow diagram with four stages: first, farms and lawns across a watershed with arrows showing fertilizer runoff into a river; second, the river carrying nitrogen and phosphorus downstream; third, a bloom of algae shown as a dense green mass on the water surface; fourth, the algae dying and sinking with a shaded low-oxygen zone below labeled dead zone, with a fish skeleton icon indicating marine life cannot survive there."
      />
      <p>
      Each stage of this chain happens far from the last — the fertilizer is applied on land, the bloom forms on the water&apos;s surface, and the oxygen collapse happens in the water column below, often at the river&apos;s mouth or in a coastal zone many miles from any single farm.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming water pollution is always traceable to one polluter.", fix: "Recognize that the largest-scale water pollution problems today (eutrophication, agricultural runoff) are typically nonpoint-source — diffused across many small contributors, not one identifiable party." },
      { mistake: "Judging water quality by visible clarity alone.", fix: "Dissolved oxygen level, not clarity or color, is what actually determines whether a body of water can support fish and other aquatic life — clear water can still be a dead zone." },
      { mistake: "Treating fertilizer runoff as a minor or purely local issue.", fix: "Nutrient runoff effects compound downstream across an entire watershed and can produce dead zones hundreds of miles from the original farms, as the Gulf of Mexico case shows." },
      ]}
      />
      <MisconceptionCallout
      myth="Water pollution mainly comes from factories illegally dumping waste into rivers."
      reality={<p>Illegal point-source dumping does happen and is seriously regulated, but the larger-scale, harder-to-fix water pollution problem today is legal, diffuse nonpoint-source runoff — fertilizer, pet waste, and road runoff from ordinary daily activity across an entire watershed, not a single dramatic dumping event.</p>}
      />

      <QuickCheck
      question="Why is nonpoint-source pollution generally harder to regulate than point-source pollution?"
      options={[
      { text: "Nonpoint-source pollution isn't actually regulated in any country", correct: false, explanation: "Many countries do have nonpoint-source management programs, but they rely on incentives, best-practice standards, and watershed coordination rather than the direct discharge permits used for point sources." },
      { text: "Because it comes from countless small, individually legal contributions spread across an entire watershed, with no single identifiable discharger to hold a permit or issue a violation against", correct: true, explanation: "Correct. Point-source regulation works because there's one pipe to measure and one permit holder to enforce against. Nonpoint-source pollution structurally lacks that single point of accountability." },
      { text: "Nonpoint-source pollutants are chemically different and therefore fall outside environmental law", correct: false, explanation: "The pollutants themselves (nitrogen, phosphorus, sediment) are often the same substances regulated in point-source discharges — the difference is entirely about how they enter the water, not what they are." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "If you use lawn or garden fertilizer, follow the recommended application rate and avoid applying before heavy rain — excess fertilizer is exactly the kind of nonpoint-source contribution that adds up across a watershed.",
      "Learn whether your local waterway has a nutrient-management or watershed-protection program, since nonpoint-source problems are addressed at that scale, not household by household.",
      "When evaluating a body of water's health, look for dissolved oxygen and algal bloom reports rather than judging purely by visual clarity.",
      "Support or participate in buffer-strip and stormwater-capture initiatives in your area — these are the standard tools for reducing nonpoint-source runoff before it reaches a waterway.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the difference between point-source and nonpoint-source water pollution?", answer: "Point-source pollution comes from one identifiable discharge point, like a factory pipe, and is directly regulated by permit. Nonpoint-source pollution is diffuse runoff from many small sources across a watershed — farms, lawns, streets — with no single discharger to target." },
      { question: "What causes a dead zone in the ocean?", answer: "Excess nitrogen and phosphorus runoff triggers an algal bloom; when the algae dies and decomposes, bacteria consume the water's dissolved oxygen faster than it's replenished, creating a hypoxic 'dead zone' most marine life cannot survive in." },
      { question: "Is nonpoint-source pollution regulated?", answer: "Less directly than point-source pollution. Most countries use incentive programs, best-management-practice standards, and watershed-level coordination rather than individual discharge permits, since there's no single identifiable polluter to permit." },
      { question: "Can water look clean and still be polluted?", answer: "Yes. Dissolved oxygen level and nutrient concentration, not visible clarity, determine whether a body of water can support aquatic life — a clear lake or coastal zone can still be a biologically collapsing dead zone." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
