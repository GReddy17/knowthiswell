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
  title: "Understanding E-Waste & Its Disposal",
  category: "environment-nature",
  order: 15,
  subtopic: "pollution-and-its-sources",
  tags: ["e-waste", "electronic waste", "hazardous waste", "recycling", "urban mining"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Electronic waste is simultaneously one of the fastest-growing waste streams on Earth and one of the richest — a ton of discarded circuit boards contains more recoverable gold than a ton of mined gold ore.",
  summary: "E-waste is discarded electronic equipment that contains both hazardous materials (lead, mercury, cadmium) and valuable recoverable metals (gold, copper, palladium), which is why proper e-waste disposal matters both for pollution prevention and for the resource-recovery opportunity informal, unsafe recycling wastes.",
  sources: [
    { label: "UN Global E-waste Monitor 2024", url: "https://ewastemonitor.info/" },
    { label: "US EPA — Electronics Donation and Recycling", url: "https://www.epa.gov/recycle/electronics-donation-and-recycling" },
    { label: "WHO — Electronic waste (e-waste) and child health", url: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)" },
  ],
  seeAlso: [
    "environment-nature/soil-contamination-basics",
    "environment-nature/industrial-pollution-and-regulation-basics",
    "environment-nature/understanding-the-circular-economy",
  ],
  glossary: [
    {"term":"E-waste","definition":"Discarded electrical or electronic equipment — phones, computers, appliances, batteries — that contains both hazardous substances and recoverable valuable materials."},
    {"term":"Urban mining","definition":"The practice of recovering valuable metals like gold, silver, copper, and palladium from discarded electronics and other manufactured products, rather than extracting them from newly mined ore."},
    {"term":"Informal e-waste recycling","definition":"Unregulated, often manual processing of e-waste (such as open burning to recover metal, or acid baths without protective equipment) that recovers some value but releases toxic substances without safety controls."},
    {"term":"Extended producer responsibility","definition":"A policy approach that makes manufacturers responsible for the end-of-life management of the products they sell, often funding formal collection and recycling programs for items like electronics."},
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
      "E-waste is one of the fastest-growing waste categories globally, per the UN Global E-waste Monitor, driven by shortening device lifecycles and rising electronics consumption.",
      "The same electronics that contain hazardous substances (lead, mercury, cadmium) also contain valuable recoverable metals (gold, copper, palladium) — e-waste is simultaneously a pollution risk and a resource-recovery opportunity, called urban mining.",
      "Most of the world's e-waste is not formally recycled, and a large share is processed informally with methods (open burning, unprotected acid baths) that release the very hazardous substances formal recycling is designed to safely contain.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p"><TermLink href="/environment-nature/understanding-e-waste-and-its-disposal">E-waste</TermLink> is any discarded electronic device — phones, laptops, TVs, batteries. It&apos;s a problem for two connected reasons: it contains hazardous materials like lead and mercury that can leak into soil and water if dumped carelessly, and it also contains genuinely valuable metals like gold and copper that are worth recovering rather than throwing away. Proper e-waste recycling captures the valuable materials safely; improper disposal or informal recycling releases the hazardous ones instead.</div>}
      detailed={<div className="prose-p">The economic case for e-waste recovery, sometimes called <TermLink href="/environment-nature/understanding-e-waste-and-its-disposal">urban mining</TermLink>, is stronger than most people expect — a ton of discarded circuit boards can contain a higher concentration of gold than a ton of mined gold ore, alongside recoverable copper, silver, and palladium. Formal recycling facilities use controlled processes (mechanical shredding, controlled smelting, or chemical extraction under contained conditions) to recover these metals while capturing hazardous byproducts safely. The problem is that a large share of global e-waste instead ends up in <TermLink href="/environment-nature/understanding-e-waste-and-its-disposal">informal e-waste recycling</TermLink> operations, often in developing regions, where workers burn circuit boards in the open air to melt away plastic and expose metal, or use unprotected acid baths to dissolve components — recovering some value but releasing lead, mercury, and other toxic substances directly into the local air, soil, and water, often with direct exposure to workers and nearby communities, including children.</div>}
      />
      <FootnoteAside>WHO has specifically documented child health impacts near informal e-waste processing sites, since children are both more likely to be involved in informal recycling work in some regions and more physiologically vulnerable to heavy metal exposure than adults.</FootnoteAside>

      <p>
      Because the same material stream carries both the hazard and the value, the disposal method — not the material itself — determines whether a discarded phone becomes a pollution source or a recovered resource.
      </p>

      <QuickCheck
      question="Why is e-waste often described as both a pollution problem and a resource opportunity at the same time?"
      options={[
      { text: "Because different types of e-waste are hazardous or valuable, but never the same device", correct: false, explanation: "It's usually the same device carrying both properties at once — a single discarded phone or circuit board contains hazardous substances (lead, mercury) and valuable recoverable metals (gold, copper) simultaneously." },
      { text: "Because the same discarded electronics contain both hazardous substances like lead and mercury and valuable recoverable metals like gold and copper — the disposal method determines which outcome dominates", correct: true, explanation: "Correct. Formal recycling is designed to capture the valuable materials while safely containing the hazardous ones; informal recycling often does the opposite, releasing hazards while only partially recovering value." },
      { text: "Because e-waste stopped being hazardous once recycling technology improved, so it's now purely a resource opportunity", correct: false, explanation: "The hazardous substances (lead, mercury, cadmium) are still physically present in most electronics regardless of recycling technology — the technology affects how safely they're handled, not whether they're present." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A phone dropped in household trash (baseline case)</h3>
      <div className="prose-p">
      An old phone thrown into regular household trash ends up in a landfill, where its battery and circuit board materials, including lead and lithium, remain buried rather than recovered or safely contained long-term. Neither the pollution risk nor the recoverable value is properly addressed — it&apos;s simply removed from sight.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same phone taken to a formal e-waste recycler (edge case / variation)</h3>
      <div className="prose-p">
      That same phone dropped off at a certified e-waste recycling program instead goes through mechanical disassembly and controlled material recovery — battery materials are separated and processed under safety controls, and gold, copper, and other metals from the circuit board are recovered for reuse in new manufacturing. Same device, opposite outcome, entirely determined by the disposal pathway chosen.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Informal e-waste processing communities (real-world / applied case)</h3>
      <div className="prose-p">
      In regions with large informal e-waste processing operations, workers without protective equipment burn discarded circuit boards and wiring in open pits to recover copper and other metals, releasing lead and other heavy metal contamination directly into surrounding soil, air, and water. Studies cited by WHO and UN e-waste monitoring bodies have documented elevated heavy metal exposure in children living near these sites — a direct, well-documented illustration of what happens when the hazardous side of e-waste isn&apos;t safely contained during recovery.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Same e-waste, two different disposal paths"
      type="comparison"
      svgSrc="/diagrams/environment-nature-understanding-e-waste-and-its-disposal-two-paths.svg"
      altText="A branching diagram starting from a discarded circuit board icon at the top. The left branch leads to an informal recycling icon showing open burning with smoke and warning symbols, ending in a hazard icon labeled toxic release. The right branch leads to a formal recycling facility icon with contained processing, ending in a recovered-metals icon labeled gold, copper, palladium recovered safely."
      />
      <p>
      Both branches start from the exact same discarded material — the diagram&apos;s split point is the disposal pathway itself, not any difference in the underlying electronics.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Throwing old electronics and batteries into regular household trash.", fix: "Use a designated e-waste collection point or manufacturer take-back program — most regions have specific rules against disposing of electronics in general trash because of the hazardous materials involved." },
      { mistake: "Assuming e-waste recycling has no real economic value, so it's purely a cost or chore.", fix: "Recognize that e-waste recovery ('urban mining') recaptures genuinely valuable metals like gold, copper, and palladium — it's an economically real resource-recovery activity, not just waste disposal." },
      { mistake: "Assuming any e-waste 'recycling' is automatically safe.", fix: "Informal recycling operations can recover some value while releasing hazardous substances unsafely — using a certified formal recycler matters, not just recycling in general." },
      ]}
      />
      <MisconceptionCallout
      myth="Electronic waste is a relatively small, minor part of the overall global waste problem."
      reality={<p>The UN Global E-waste Monitor documents e-waste as one of the fastest-growing waste streams worldwide, driven by shortening device lifecycles and rising global electronics consumption — it&apos;s a large and rapidly increasing category, not a minor niche issue.</p>}
      />

      <QuickCheck
      question="Why does formal e-waste recycling matter specifically for child health, according to WHO research?"
      options={[
      { text: "Because children are the primary purchasers of new electronics, so recycling habits mostly affect them through consumption choices", correct: false, explanation: "The child health concern documented by WHO is about exposure near informal processing sites, not about children's purchasing behavior." },
      { text: "Because WHO has documented elevated heavy metal exposure in children living near informal e-waste processing sites, where unsafe recovery methods release lead and other toxic substances into the local environment", correct: true, explanation: "Correct. This is a specific, documented environmental health finding tied to informal e-waste processing communities, not a general statement about electronics use." },
      { text: "Because formal recycling facilities are legally required to employ children, unlike informal ones", correct: false, explanation: "This isn't accurate — the health concern is about environmental exposure near unsafe informal processing, not employment practices at formal facilities." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Take old electronics and batteries to a certified e-waste collection point rather than regular household trash — many retailers and manufacturers offer take-back programs.",
      "Consider donating or reselling still-functional devices before recycling, since extending a device's usable life reduces e-waste generation more directly than any recycling method.",
      "Check whether your e-waste recycler is certified (such as under R2 or e-Stewards standards in the US) rather than assuming any drop-off point uses safe processing methods.",
      "Understand that batteries specifically often need separate handling from other electronics due to fire risk and distinct material recovery processes.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What counts as e-waste?", answer: "Any discarded electrical or electronic equipment — phones, computers, TVs, appliances, batteries — that contains both hazardous substances (lead, mercury, cadmium) and potentially recoverable valuable materials." },
      { question: "Is there really gold in old phones and computers?", answer: "Yes. Circuit boards contain small amounts of gold, along with copper, silver, and palladium, used for their electrical conductivity — recovering these from e-waste is sometimes called 'urban mining' and can be more resource-concentrated than mining new ore." },
      { question: "Why can't I just throw electronics in the regular trash?", answer: "Because they contain hazardous substances like lead and mercury that landfills aren't designed to safely contain long-term, and because doing so wastes recoverable valuable materials that formal recycling could capture instead." },
      { question: "What's the difference between formal and informal e-waste recycling?", answer: "Formal recycling uses controlled processes (mechanical disassembly, contained smelting or chemical extraction) that safely capture hazardous byproducts. Informal recycling, common in some regions, often uses methods like open burning or unprotected acid baths that recover some value while releasing toxic substances unsafely." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
