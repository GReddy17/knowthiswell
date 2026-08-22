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
  title: "Federal vs Unitary Government Systems",
  category: "general-awareness-basics",
  order: 13,
  subtopic: "national-and-government-structure-basics",
  tags: ["federalism", "unitary state", "government structure", "devolution", "civics"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "The real dividing line between federal and unitary systems is where sovereign power constitutionally originates — split permanently between national and regional governments, or held centrally and merely delegated outward.",
  summary: "A federal system constitutionally divides sovereign power between a national government and constituent states or provinces, each with authority the other cannot simply revoke, while a unitary system holds sovereign power centrally and any regional authority exists only because the central government has chosen to delegate it, and can in principle take it back.",
  sources: [
    { label: "Encyclopaedia Britannica — Federalism", url: "https://www.britannica.com/topic/federalism" },
    { label: "Forum of Federations — Comparative Federalism Resources", url: "https://forumfed.org/" },
    { label: "Encyclopaedia Britannica — Unitary State", url: "https://www.britannica.com/topic/unitary-state" },
  ],
  seeAlso: [
    "general-awareness-basics/understanding-a-national-constitutions-role",
    "general-awareness-basics/what-local-government-actually-does",
    "general-awareness-basics/how-a-democracy-actually-works-branches-of-government",
  ],
  glossary: [
    {"term":"Federalism","definition":"A system of government where sovereign power is constitutionally divided between a national government and constituent states or provinces, each holding authority the other level cannot unilaterally revoke."},
    {"term":"Unitary state","definition":"A system of government where sovereign power is held centrally, and any authority given to regional or local governments exists by delegation from the center, which retains the power to alter or withdraw it."},
    {"term":"Devolution","definition":"The transfer of specific powers from a central government to a regional or sub-national body within a unitary state — distinct from federalism because the central government retains the constitutional authority to reclaim those powers."},
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
      "The real difference between federal and unitary systems isn't how much day-to-day power regions have — it's whether that power is constitutionally guaranteed (federal) or delegated and revocable (unitary).",
      "In a federal system, the central government cannot simply abolish a state's constitutional powers by ordinary legislation; in a unitary system, the central government generally can alter or revoke devolved regional powers.",
      "Devolution (as practiced in the UK, France, or Spain) can look a lot like federalism day to day, but remains structurally unitary because the center retains ultimate constitutional authority over what was devolved.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">In a <TermLink href="/general-awareness-basics/federal-vs-unitary-government-systems">federal</TermLink> country like the US, Germany, or India, power is split between the national government and the states or provinces, and neither level can just take the other&apos;s constitutional powers away. In a <TermLink href="/general-awareness-basics/federal-vs-unitary-government-systems">unitary</TermLink> country like France or Japan, the national government holds the power and can choose to hand some of it down to regions — but it can also change its mind and take that power back.</div>}
      detailed={<div className="prose-p">The distinction is fundamentally about where sovereignty constitutionally sits. In a federal system, both the national and state/provincial levels of government derive their authority directly from the constitution itself — a national government typically cannot abolish a state government or unilaterally erase its constitutional powers through ordinary legislation; doing so would require a constitutional amendment. In a unitary system, sub-national governments derive their authority from the central government&apos;s choice to delegate it (a process called <TermLink href="/general-awareness-basics/federal-vs-unitary-government-systems">devolution</TermLink> when it happens after the fact, as in the UK&apos;s Scottish Parliament or Welsh Senedd) — which means, at least in constitutional theory, the center retains the power to alter or withdraw what it delegated, even if doing so would be politically explosive in practice.</div>}
      />
      <FootnoteAside>Confederations sit at the opposite extreme from unitary states — in a confederation, member states retain so much sovereignty that the central authority is closer to a coordinating body than a government, with the states able to withdraw more easily. Most modern federations (like the US after its Civil War-era settlement) function much closer to true federalism than to a loose confederation.</FootnoteAside>

      <p>
      This distinction matters most when tension arises between levels of government — a federal system has clear constitutional rules for that conflict, while a unitary system&apos;s regions are ultimately negotiating from a position the center could, in theory, unwind.
      </p>

      <QuickCheck
      question="A national government wants to permanently abolish a specific state's government and absorb its territory directly. In a genuine federal system, can it do this through an ordinary majority vote in the national legislature?"
      options={[
      { text: "Yes, since the national government is the higher authority", correct: false, explanation: "This misunderstands federalism — in a genuine federal system, states derive their authority directly from the constitution, not from the national government's permission, so an ordinary legislative majority cannot simply abolish a state." },
      { text: "No — in a genuine federal system, states hold constitutionally guaranteed authority that an ordinary national legislative majority cannot unilaterally revoke; this would typically require a constitutional amendment, if it's possible at all", correct: true, explanation: "Correct. This is the core structural guarantee that separates federalism from a unitary system with delegated regional power — federal states aren't just administratively convenient divisions, they hold independent constitutional standing." },
      { text: "It depends only on how large the state's population is", correct: false, explanation: "Population size isn't the relevant factor — the protection comes from the state's constitutional status within a federal system, not from its size relative to other states or the nation." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A federal system&apos;s states keeping independent authority (baseline case)</h3>
      <div className="prose-p">
      In the United States, individual states retain authority over areas like most criminal law, education policy, and local elections, and the federal government cannot simply legislate those powers away by ordinary statute — doing so would require either a constitutional amendment or working within the specific powers the constitution does grant the federal level (like regulating interstate commerce). This is why US state laws vary so widely on many topics: the states hold genuine, constitutionally protected authority, not power the federal government merely allows them to exercise.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Devolution in a unitary state looking federal but remaining structurally different (edge case / variation)</h3>
      <div className="prose-p">
      The United Kingdom devolved significant powers to the Scottish Parliament, including control over health, education, and (within limits) taxation. Day to day, this looks similar to a federal state&apos;s autonomy. But structurally, the UK Parliament in Westminster retains the constitutional authority to alter or revoke devolved powers through ordinary legislation — a power it does not exercise lightly given the political consequences, but one that does not exist at all in a genuine federal system, where states&apos; core powers are constitutionally locked in.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A unitary state without any regional devolution at all (real-world / applied case)</h3>
      <div className="prose-p">
      France, a classic unitary state, is administratively divided into regions and departments, but historically these divisions functioned primarily as administrative units for implementing national policy locally, not as independently sovereign governments — recent reforms have introduced more regional autonomy, but the underlying constitutional structure remains centralized, with regional authority existing at the discretion of the national government in Paris rather than as an independently guaranteed constitutional right.
      </div>

      <QuickCheck
      question="The Scottish Parliament has meaningful day-to-day control over health and education policy. Does this make the UK a federal system?"
      options={[
      { text: "Yes — meaningful regional policy control is what defines federalism", correct: false, explanation: "Meaningful day-to-day autonomy alone doesn't make a system federal — the defining test is whether that autonomy is constitutionally guaranteed and cannot be unilaterally revoked by the center, which is not the case for the UK's devolved powers." },
      { text: "No — the UK remains a unitary state because Westminster retains the constitutional authority to alter or revoke Scotland's devolved powers through ordinary legislation, even if this would be politically costly", correct: true, explanation: "Correct. Devolution can produce real, substantial day-to-day autonomy that looks similar to federalism in practice, but the underlying constitutional structure — where the power ultimately originates and whether it can be revoked — remains unitary." },
      { text: "It depends only on how the Scottish Parliament itself is elected", correct: false, explanation: "The electoral method for a regional body isn't what distinguishes federal from unitary systems — the distinguishing factor is the constitutional source and revocability of that body's authority." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Where power originates: federal vs unitary vs confederal"
      type="comparison"
      svgSrc="/diagrams/general-awareness-basics-federal-vs-unitary-government-systems-power-spectrum.svg"
      altText="A horizontal spectrum diagram with three positions. Left end: Unitary (power held centrally, delegated outward, revocable). Middle: Federal (power constitutionally split between national and state/provincial levels, neither fully revocable by the other). Right end: Confederal (power held mainly by member states, central authority is a coordinating body they can more easily leave)."
      />
      <p>
      The spectrum runs from fully centralized to fully decentralized, with federalism occupying the genuinely split middle position — the key marker along this spectrum is always where constitutional authority originates, not how much day-to-day autonomy a region happens to exercise at any given moment.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Judging whether a country is federal or unitary based on how much day-to-day autonomy its regions currently exercise.", fix: "Check whether that regional autonomy is constitutionally guaranteed and irrevocable by the center (federal) or delegated and revocable (unitary/devolved) — the amount of current autonomy alone doesn't settle the question." },
      { mistake: "Treating devolution and federalism as the same structural arrangement.", fix: "Devolution happens within a unitary state and remains revocable by the central government; federalism constitutionally locks in a state or province's authority in a way the national government cannot unilaterally undo." },
      { mistake: "Assuming all federal countries have identical power splits between national and state levels.", fix: "The specific balance of federal vs. state power varies enormously by country (the US, Germany, India, Brazil, and Australia are all federal but split power differently) — federalism describes a structural principle, not one fixed ratio." },
      ]}
      />
      <MisconceptionCallout
      myth="A country with strong, visible regional governments (states, provinces, devolved parliaments) must be a federal system."
      reality={<p>Visible, powerful regional government isn&apos;t proof of federalism — the UK&apos;s devolved administrations, France&apos;s regions, and Spain&apos;s autonomous communities all exercise real day-to-day authority within structurally unitary states. What actually defines federalism is whether that regional authority is constitutionally guaranteed and cannot be unilaterally revoked by the national government — a legal test, not a visual one.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "When assessing whether a country is federal or unitary, ask whether regional power is constitutionally guaranteed or delegated — not just how much autonomy currently exists.",
      "Look up your own country's structure and, if it has regional governments, check whether their powers come from the national constitution directly or from a devolution law that could in principle be altered.",
      "Notice news stories about central-vs-regional government disputes — they often hinge exactly on this federal-vs-unitary distinction, even when the terms themselves aren't used.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the difference between a federal and a unitary government system?", answer: "In a federal system, power is constitutionally divided between the national government and states or provinces, and neither level can unilaterally revoke the other's core powers. In a unitary system, power is held centrally, and any regional authority exists because the central government delegated it — and could, in principle, take it back." },
      { question: "Is devolution the same as federalism?", answer: "No. Devolution happens within a unitary state and remains revocable by the central government through ordinary legislation. Federalism constitutionally locks in a state's or province's authority in a way the national government cannot unilaterally undo, typically requiring a constitutional amendment to change." },
      { question: "Which countries are federal and which are unitary?", answer: "The US, Germany, India, Brazil, Canada, and Australia are examples of federal systems. France, Japan, and (with notable devolution) the United Kingdom are examples of unitary systems. Most countries in the world are unitary, not federal." },
      { question: "Can a national government abolish a state in a federal system?", answer: "Generally no, not through ordinary legislation — states in a genuine federal system hold constitutionally protected authority, and removing or fundamentally altering it typically requires a formal constitutional amendment process, which is deliberately difficult." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
