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
  title: "Understanding Refugee & Migration Terminology",
  category: "general-awareness-basics",
  order: 43,
  subtopic: "awareness-curiosities",
  tags: ["refugee", "asylum seeker", "migration terminology", "UNHCR", "internally displaced person"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Refugee, asylum seeker, migrant, and internally displaced person are distinct legal categories, not interchangeable words for the same situation.",
  summary: "Refugee, asylum seeker, internally displaced person, and migrant each have a specific, legally distinct meaning under international frameworks — the differences turn on whether someone crossed an international border, why they left, and whether their legal status has been formally recognized.",
  sources: [
    { label: "UNHCR — Refugee Data Finder / Key Definitions", url: "https://www.unhcr.org/refugee-statistics/insights/explainers/refugee-migrant-definition.html" },
    { label: "UNHCR — 1951 Refugee Convention", url: "https://www.unhcr.org/1951-refugee-convention.html" },
    { label: "International Organization for Migration (IOM) — Key Migration Terms", url: "https://www.iom.int/about-migration/key-migration-terms" },
  ],
  seeAlso: [
    "general-awareness-basics/understanding-human-rights-frameworks-udhr-overview",
    "general-awareness-basics/how-the-world-health-organization-works",
    "general-awareness-basics/common-current-affairs-myths-and-misconceptions",
  ],
  glossary: [
    {"term":"Refugee","definition":"Under the 1951 Refugee Convention, a person outside their home country who cannot return due to a well-founded fear of persecution based on race, religion, nationality, political opinion, or membership in a particular social group."},
    {"term":"Asylum seeker","definition":"A person who has crossed a border and formally applied for refugee protection in another country, but whose claim has not yet been legally decided."},
    {"term":"Internally displaced person (IDP)","definition":"A person forced to flee their home for reasons similar to a refugee's, but who has not crossed an international border and remains within their own country."},
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
      "A refugee has a specific legal definition under the 1951 Refugee Convention: someone outside their home country unable to return due to a well-founded fear of persecution.",
      "An asylum seeker has made that same claim but hasn't yet received a legal decision — every refugee was once an asylum seeker, but not every asylum seeker is ultimately recognized as a refugee.",
      "An internally displaced person (IDP) has fled for refugee-like reasons but never crossed an international border, which puts them outside the 1951 Convention's specific protections even though their situation can be just as dangerous.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">These four terms sound similar but mean legally different things. A <TermLink href="/general-awareness-basics/understanding-refugee-and-migration-terminology">refugee</TermLink> has fled persecution and crossed into another country, with that status formally recognized. An <TermLink href="/general-awareness-basics/understanding-refugee-and-migration-terminology">asylum seeker</TermLink> has made the same claim but is still waiting for a decision. An <TermLink href="/general-awareness-basics/understanding-refugee-and-migration-terminology">internally displaced person</TermLink> fled danger too, but never left their own country. A migrant, more broadly, is someone who has moved from one place to another — which can include people moving for reasons like work or family that don&apos;t fall under refugee protections at all.</div>}
      detailed={<div className="prose-p">The 1951 Refugee Convention (and its 1967 Protocol) is the specific international legal instrument that defines &quot;refugee&quot; and creates binding obligations for signatory states, most notably <em>non-refoulement</em> — the principle that a state cannot forcibly return someone to a country where they face persecution. Crucially, this legal framework applies only once someone has crossed an international border; a person displaced by the exact same violence but who remains inside their home country is instead governed by a different, less binding framework — the UN Guiding Principles on Internal Displacement — and their own government retains primary responsibility for their protection, even in situations where that government may be part of the reason they fled. &quot;Migrant&quot; is a broader umbrella term with no single binding international legal definition, used by organizations like the IOM to cover anyone who has changed their usual place of residence, whether the move was forced, voluntary, temporary, or permanent.</div>}
      />
      <FootnoteAside>UNHCR and the wider humanitarian sector deliberately avoid the label &quot;illegal migrant&quot; for anyone who may have a valid asylum claim, since under international law seeking asylum is a legal right — a person can enter a country without prior authorization specifically to claim asylum and still be exercising a lawful process, not committing an immigration offense.</FootnoteAside>

      <p>
      Because these categories carry real legal consequences — which protections apply, which government is responsible, which agency has a mandate to help — getting the terminology right isn&apos;t pedantry; it changes who is legally entitled to what.
      </p>

      <QuickCheck
      question="A news report describes a group of people who fled armed conflict but remained within their own country's borders, unable to return home. What is the correct term for their status?"
      options={[
      { text: "Refugees, since they fled the same kind of danger a refugee would", correct: false, explanation: "The refugee definition specifically requires being outside one's home country. Fleeing the same danger while staying within national borders puts someone in a different legal category." },
      { text: "Internally displaced persons (IDPs), because they fled danger but never crossed an international border", correct: true, explanation: "Correct. IDP is the specific term for people displaced within their own country — they may face conditions just as severe as refugees, but fall under a different (and generally less binding) protection framework." },
      { text: "Asylum seekers, since they are seeking safety", correct: false, explanation: "Asylum seeker specifically means someone who has crossed into another country and formally applied for protection there — staying within one's own country doesn't meet that definition." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Tracing one person&apos;s status through the process (baseline case)</h3>
      <div className="prose-p">
      A person flees political persecution, crosses into a neighboring country, and formally applies for protection there. At that point they are an asylum seeker. Months later, after their claim is reviewed and approved under the 1951 Convention&apos;s criteria, their legal status changes to refugee. The same person, same circumstances — the label changes only because their claim moved through a defined legal process to a decision.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Two people fleeing the same conflict, different legal categories (edge case / variation)</h3>
      <div className="prose-p">
      A civil war forces two families to flee the same city on the same day. One family crosses the border into a neighboring country and applies for asylum there — they become asylum seekers, potentially refugees later. The other family flees to a different, safer region of their own country without crossing any border — they are internally displaced persons. Identical danger, identical reason for fleeing, but two different legal categories with different applicable protections, purely because of whether a border was crossed.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A person who doesn&apos;t fit the refugee definition at all (real-world / applied case)</h3>
      <div className="prose-p">
      A person moves to another country specifically to take a job offer, with no claim of fleeing persecution. Under the IOM&apos;s broad usage, this person is a migrant — specifically, in more precise terms, a labor migrant — but does not meet the 1951 Convention&apos;s refugee definition and has no asylum claim to file, since the definition requires a well-founded fear of persecution, not an economic motivation for moving.
      </div>

      <QuickCheck
      question="Why does UNHCR specifically avoid calling someone an 'illegal migrant' if they may have a valid asylum claim pending?"
      options={[
      { text: "Because seeking asylum is a recognized legal right under international law, and entering a country to claim asylum — even without prior authorization — is not itself an immigration offense", correct: true, explanation: "Correct. Under the 1951 Refugee Convention framework, the act of seeking asylum is protected; labeling someone 'illegal' for doing so mischaracterizes a lawful process as a crime." },
      { text: "Because the term 'migrant' legally cannot apply to anyone crossing a border without documentation", correct: false, explanation: "The issue isn't that 'migrant' can't apply — it's specifically the word 'illegal' being paired with someone exercising a protected legal right to seek asylum that's the terminology problem." },
      { text: "Because UNHCR has no official position on migration terminology", correct: false, explanation: "UNHCR has published explicit guidance distinguishing refugees, asylum seekers, IDPs, and migrants precisely because it does have a clear position on using this terminology accurately." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Four categories, sorted by border crossing and legal recognition"
      type="comparison"
      svgSrc="/diagrams/general-awareness-basics-understanding-refugee-and-migration-terminology-category-matrix.svg"
      altText="A two-by-two style matrix. One axis distinguishes whether an international border was crossed (yes or no). The other axis distinguishes whether legal refugee status has been formally recognized (pending or granted). The quadrants are labeled: crossed a border, pending decision equals asylum seeker; crossed a border, status granted equals refugee; did not cross a border equals internally displaced person, regardless of decision status; moved for reasons other than persecution equals migrant, sitting outside the matrix as a broader umbrella term."
      />
      <p>
      Two simple questions — did the person cross an international border, and has their protection claim been formally decided — sort almost every case into the right one of these four categories.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Using 'refugee' and 'migrant' interchangeably in general conversation or writing.", fix: "Check whether persecution and a formal legal claim are actually involved — if not, 'migrant' is the more accurate general term, and if so, check whether status has been granted (refugee) or is pending (asylum seeker)." },
      { mistake: "Calling someone displaced within their own country a 'refugee.'", fix: "Use 'internally displaced person' (IDP) specifically when no international border was crossed, even if the underlying danger is identical to a refugee situation." },
      { mistake: "Assuming everyone fleeing a war automatically qualifies as a refugee under the 1951 Convention.", fix: "Remember the Convention's specific criteria (persecution based on race, religion, nationality, political opinion, or social group) — broader war-related displacement is sometimes handled under separate regional or temporary protection frameworks instead." },
      ]}
      />
      <MisconceptionCallout
      myth="Someone who enters a country without prior authorization to claim asylum has automatically committed an immigration crime."
      reality={<p>Under the 1951 Refugee Convention framework (Article 31), states are generally not supposed to penalize refugees for irregular entry or presence, provided they present themselves to authorities without delay and show good cause for the unauthorized entry — since fleeing persecution rarely allows time to secure a visa first. The legal reality is more protective of the asylum process than the common &quot;illegal entry&quot; framing suggests.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Before using 'refugee' in writing or conversation, check whether the person actually crossed an international border and has a persecution-based claim.",
      "Use 'asylum seeker' specifically for someone whose protection claim is still pending, not yet decided.",
      "Reserve 'internally displaced person' for anyone who fled danger without leaving their own country.",
      "Treat 'migrant' as the broad umbrella term it is — accurate as a general label, but not a substitute for the more specific legal categories when precision matters.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What's the difference between a refugee and an asylum seeker?", answer: "An asylum seeker has applied for refugee protection but is still awaiting a legal decision. A refugee is someone whose claim has already been formally reviewed and granted under a framework like the 1951 Refugee Convention." },
      { question: "Is every migrant also a refugee?", answer: "No. Migrant is a broad umbrella term for anyone who has changed their place of residence, for any reason. Refugee is a specific legal status requiring a well-founded fear of persecution and having crossed an international border." },
      { question: "What does IDP stand for?", answer: "Internally displaced person — someone forced to flee their home for reasons similar to a refugee's situation, but who has not crossed an international border and remains within their own country." },
      { question: "Is it illegal to seek asylum without prior authorization to enter a country?", answer: "Generally no. Under the 1951 Refugee Convention (Article 31), states are expected not to penalize refugees for irregular entry made specifically to seek asylum, provided they present themselves to authorities promptly." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
