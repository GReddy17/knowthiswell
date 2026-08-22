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
  title: "How International Treaties Get Made",
  category: "general-awareness-basics",
  order: 7,
  subtopic: "global-institutions-and-bodies",
  tags: ["treaties", "international law", "ratification", "diplomacy", "civics"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A treaty isn't final the moment negotiators sign it — signature and ratification are two separate steps, and a country can sign without ever completing the second one.",
  summary: "An international treaty typically moves through negotiation, signature, and ratification — with signature signaling a country's intent to be bound but ratification, usually requiring separate domestic legislative approval, being the step that actually creates a binding legal obligation under international law.",
  sources: [
    { label: "United Nations — Vienna Convention on the Law of Treaties (1969)", url: "https://legal.un.org/ilc/texts/instruments/english/conventions/1_1_1969.pdf" },
    { label: "United Nations Treaty Collection — Treaty Reference Guide", url: "https://treaties.un.org/Pages/overview.aspx?path=overview/glossary/page1_en.xml" },
    { label: "Encyclopaedia Britannica — Treaty", url: "https://www.britannica.com/topic/treaty" },
  ],
  seeAlso: [
    "general-awareness-basics/what-the-united-nations-actually-does",
    "general-awareness-basics/understanding-nato-and-global-security-alliances",
    "general-awareness-basics/understanding-sanctions-what-they-are-and-how-they-work",
  ],
  glossary: [
    {"term":"Signature","definition":"A negotiator's initial act of signing a treaty text, signaling a country's intent to be bound and committing it not to undermine the treaty's purpose — but generally not yet creating a full binding obligation."},
    {"term":"Ratification","definition":"The formal domestic act, usually requiring legislative approval, by which a country confirms its consent to be legally bound by a treaty it has already signed."},
    {"term":"Entry into force","definition":"The point at which a treaty becomes legally binding on its parties, often requiring a minimum number of countries to have ratified it first, as specified in the treaty's own text."},
    {"term":"Reservation","definition":"A formal declaration by which a country ratifying a treaty excludes or modifies how a specific provision applies to it, allowed unless the treaty itself prohibits reservations."},
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
      "A treaty typically moves through three distinct stages — negotiation, signature, and ratification — and only the last one actually creates a binding legal obligation under international law.",
      "Signing a treaty signals intent and commits a country not to actively undermine its purpose, but a country can sign a treaty and never ratify it, in which case it's never fully bound.",
      "Most treaties require a minimum number of ratifying countries before they legally 'enter into force,' meaning even a fully ratified treaty may sit dormant until enough other countries catch up.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Making a treaty isn&apos;t a single event — it&apos;s a process. Diplomats first negotiate the actual text, then their representatives <TermLink href="/general-awareness-basics/how-international-treaties-get-made">sign</TermLink> it to show they agree with what was negotiated. But signing alone usually doesn&apos;t make a country legally bound. Each country then has to separately go through <TermLink href="/general-awareness-basics/how-international-treaties-get-made">ratification</TermLink> — typically its own legislature formally approving the treaty — before that country is actually obligated to follow it.</div>}
      detailed={<div className="prose-p">This process is itself governed by an actual treaty — the 1969 Vienna Convention on the Law of Treaties, often called &quot;the treaty about treaties,&quot; which codifies customary rules for how treaties are negotiated, interpreted, and take effect. After negotiation and signature, most modern treaties require domestic ratification, which in many countries means legislative approval (in the US, for example, treaties require two-thirds Senate approval before the president can ratify). Once a country ratifies, it can also attach a <TermLink href="/general-awareness-basics/how-international-treaties-get-made">reservation</TermLink> — a declaration modifying how a specific clause applies to it — unless the treaty itself forbids reservations. Finally, most treaties specify a threshold for <TermLink href="/general-awareness-basics/how-international-treaties-get-made">entry into force</TermLink>, commonly a minimum number of ratifying countries, so the treaty doesn&apos;t take legal effect for anyone until that threshold is met.</div>}
      />
      <FootnoteAside>Between signature and ratification, the Vienna Convention still holds a signing country to a narrower obligation: not to act in ways that would defeat the treaty&apos;s object and purpose — a real, if limited, legal effect even before ratification is complete.</FootnoteAside>

      <p>
      The gap between signature and ratification is exactly where a lot of public confusion about treaties comes from — a country &quot;signing&quot; a major agreement is genuine news, but it isn&apos;t the same as that country being legally bound yet.
      </p>

      <QuickCheck
      question="If a country's diplomat signs a treaty, is that country immediately legally bound by all of its terms?"
      options={[
      { text: "Yes, signature alone creates a full binding legal obligation", correct: false, explanation: "For most modern treaties, signature alone does not create full binding obligation — ratification, usually a separate domestic step, is what completes the country's consent to be bound." },
      { text: "No — signature signals intent and creates a narrower duty not to undermine the treaty's purpose, but full binding obligation typically requires separate ratification, often through the country's own legislature", correct: true, explanation: "Correct. This two-step structure is exactly why a country can sign a major treaty and later never ratify it, remaining unbound by its full terms." },
      { text: "No — nothing happens legally until every other country has also signed", correct: false, explanation: "Signature has some legal effect on the signing country immediately (the duty not to undermine the treaty's purpose); it isn't contingent on every other country signing first." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The standard treaty lifecycle (baseline case)</h3>
      <div className="prose-p">
      Countries negotiate a treaty text over one or more formal conference sessions, reach agreement on final wording, and their representatives sign it. Each signing country then submits the treaty through its own domestic approval process — a legislative vote, in many systems — and upon approval, formally deposits an instrument of ratification with the treaty&apos;s designated depositary (often a specific country or the UN). Once the treaty&apos;s stated minimum-ratification threshold is met, it enters into force for those countries that have ratified by that point.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A country that signs but never ratifies (edge case / variation)</h3>
      <div className="prose-p">
      It&apos;s a real and fairly common occurrence for a country to sign a treaty — showing political support for its goals — and then never complete ratification, whether due to a change in government, insufficient legislative support, or shifting priorities. That country is not bound by the treaty&apos;s substantive obligations, only by the narrower Vienna Convention duty not to actively defeat its purpose. This is why treaty signature counts and ratification counts are reported as separate figures in official treaty status tables.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A treaty that takes years to enter into force (real-world / applied case)</h3>
      <div className="prose-p">
      Some treaties set a high ratification threshold relative to how quickly countries actually ratify, meaning years can pass between a treaty being finalized and it legally entering into force for anyone. During that gap, the treaty text exists and countries may have signed it, but no one is yet legally bound by its substantive terms — illustrating why &quot;a treaty was agreed&quot; and &quot;a treaty is in force&quot; can be separated by a significant amount of real time.
      </div>

      <QuickCheck
      question="Why do many treaties require a minimum number of ratifying countries before entering into force, rather than binding each country as soon as it individually ratifies?"
      options={[
      { text: "It's a formality with no real practical purpose", correct: false, explanation: "The threshold serves a real purpose: it ensures the treaty has enough real-world participation to be meaningful before anyone is bound by it, rather than one early ratifier being bound in isolation." },
      { text: "To ensure enough countries commit before anyone is legally bound, so the treaty's goals (which usually depend on broad participation) have a realistic chance of being achieved", correct: true, explanation: "Correct. A treaty is often only meaningful with wide participation (an environmental or trade treaty, for example) — the threshold avoids binding early ratifiers to obligations that would be pointless without broader buy-in." },
      { text: "Because international law requires unanimous global participation for any treaty to exist", correct: false, explanation: "Treaties don't require universal participation — many are legally in force among a subset of the world's countries, bound only by those that have ratified." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="From negotiation to entry into force"
      type="flow"
      svgSrc="/diagrams/general-awareness-basics-how-international-treaties-get-made-lifecycle-flow.svg"
      altText="A flow diagram with four sequential stages: Negotiation (draft text agreed), Signature (representatives sign, limited legal effect begins), Ratification (domestic legislative approval, full consent to be bound), and Entry Into Force (binding once the treaty's stated minimum-ratification threshold is met) — with a branch off the Signature box showing a dotted line to 'never ratified' as a real possible outcome."
      />
      <p>
      The dotted branch matters as much as the main path — a real share of signed treaties never complete ratification for at least some signatories, which is why treaty status tables always report signatures and ratifications as separate counts.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating a country 'signing' a treaty as equivalent to that country being fully legally bound.", fix: "Check whether the country has also ratified — signature alone typically creates only a narrow duty, not full binding obligation." },
      { mistake: "Assuming a treaty is in force worldwide the moment it's finalized.", fix: "Check the treaty's stated entry-into-force threshold and how many countries have ratified — a treaty can be finalized for years before it legally takes effect." },
      { mistake: "Assuming ratification always requires the same process across every country.", fix: "Domestic ratification procedures vary by country's own constitutional system — some require legislative supermajorities, others simpler executive approval." },
      ]}
      />
      <MisconceptionCallout
      myth="Once a country signs an international treaty, it's automatically and immediately bound by everything in it."
      reality={<p>Signature and ratification are legally distinct steps for most modern treaties. Signature shows intent and creates a narrower duty not to undermine the treaty&apos;s purpose, but the country isn&apos;t fully bound by the treaty&apos;s substantive obligations until it separately completes ratification — a process that can be delayed indefinitely or never completed at all.</p>}
      />

      <QuickCheck
      question="Can a country attach a reservation when ratifying a treaty to modify how one specific clause applies to it?"
      options={[
      { text: "No, treaties must be accepted exactly as written with no modifications allowed", correct: false, explanation: "Reservations are a real, recognized part of treaty law under the Vienna Convention, allowed unless the specific treaty explicitly prohibits them." },
      { text: "Yes — a country can attach a reservation excluding or modifying a specific provision's effect for itself, unless the treaty itself prohibits reservations", correct: true, explanation: "Correct. Reservations let countries join a treaty's broader framework while opting out of or adjusting specific provisions, within whatever limits the treaty itself sets." },
      { text: "Only the treaty's original drafting countries can attach reservations", correct: false, explanation: "Any ratifying country can generally attach a permitted reservation, not just the original negotiators — reservation rights aren't limited to founding parties." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Next time a country is reported to have 'signed' a major treaty, check separately whether it has also ratified before assuming it's bound.",
      "Look up a treaty's entry-into-force clause (the UN Treaty Collection publishes these) to see its specific ratification threshold.",
      "Check whether a treaty your own country has joined carries any reservations — these are usually published alongside the ratification record.",
      "Read the short, readable Vienna Convention on the Law of Treaties for the actual rules behind this whole process, straight from the primary source.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What's the difference between signing and ratifying a treaty?", answer: "Signature signals a country's intent to be bound and creates a narrow duty not to undermine the treaty's purpose; ratification, usually requiring domestic legislative approval, is the step that actually creates full binding legal obligation." },
      { question: "Can a country sign a treaty and never ratify it?", answer: "Yes, and it happens fairly often — that country remains unbound by the treaty's substantive terms, bound only by the limited pre-ratification duty not to defeat its purpose." },
      { question: "What does 'entry into force' mean for a treaty?", answer: "It's the point at which a treaty becomes legally binding on its parties, typically once a minimum number of countries specified in the treaty's own text have completed ratification." },
      { question: "What is a treaty reservation?", answer: "A formal declaration by a ratifying country excluding or modifying how one specific provision of the treaty applies to it, permitted unless the treaty explicitly bans reservations." },
      { question: "What governs how international treaties are made and interpreted?", answer: "Primarily the 1969 Vienna Convention on the Law of Treaties, which codifies the rules for negotiation, signature, ratification, reservations, and entry into force that most modern treaties follow." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
