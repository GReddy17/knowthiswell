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
  title: "Power of Attorney Explained",
  category: "legal-documentation-howtos",
  order: 20,
  subtopic: "contracts-and-agreements",
  tags: ["power of attorney", "durable power of attorney", "agent", "principal", "financial decision-making"],
  date: "2026-08-26",
  updated: "2026-08-26",
  lastReviewed: "2026-08-26",
  excerpt: "A power of attorney lets one person legally act on another's behalf — but the scope of that authority, and whether it survives the person becoming incapacitated, depends entirely on which type of power of attorney document is used.",
  summary: "A power of attorney (POA) is a legal document in which one person (the principal) grants another person (the agent, sometimes called an attorney-in-fact) the authority to act on their behalf, and the practical scope of that authority varies enormously depending on whether the POA is general or limited, and whether it's 'durable' (remains valid if the principal becomes incapacitated) or not.",
  sources: [
    { label: "Cornell Legal Information Institute — Power of Attorney", url: "https://www.law.cornell.edu/wex/power_of_attorney" },
    { label: "American Bar Association — Power of Attorney Basics", url: "https://www.americanbar.org/" },
    { label: "National Institute on Aging — Legal and Financial Planning", url: "https://www.nia.nih.gov/" },
  ],
  seeAlso: [
    "legal-documentation-howtos/what-makes-a-contract-legally-binding",
    "legal-documentation-howtos/understanding-non-disclosure-agreements-ndas",
    "legal-documentation-howtos/freelance-and-service-contracts-explained",
  ],
  glossary: [
    {"term":"Principal","definition":"The person who grants authority to another person through a power of attorney document."},
    {"term":"Agent (attorney-in-fact)","definition":"The person granted authority to act on behalf of the principal under a power of attorney — the term 'attorney' here refers to the legal role, not necessarily a licensed lawyer."},
    {"term":"Durable power of attorney","definition":"A power of attorney that remains valid even if the principal later becomes incapacitated, as opposed to a non-durable POA, which automatically ends if the principal loses mental capacity."},
  ],
  author: {
    slug: "james-h-rivers",
    name: "James H. Rivers",
    credentialLine: "Founder, KnowThisWell",
  },
  youtubeStatus: "scheduled",
  youtubeUrl: "https://www.youtube.com/watch?v=PJv_x7GfvSY",
  youtubeScheduledAt: "2026-09-27T16:00:00Z",
  draft: false,
};

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "A power of attorney lets one person (the agent) act legally on behalf of another (the principal) — but the scope of that authority depends entirely on how the specific document is written.",
      "A 'durable' power of attorney remains valid if the principal becomes incapacitated, while a non-durable POA automatically ends the moment the principal loses mental capacity — the opposite of what many people assume it does.",
      "A general POA grants broad authority across many types of decisions, while a limited (or 'special') POA restricts the agent's authority to specific, named tasks or a defined time period.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/legal-documentation-howtos/power-of-attorney-explained">power of attorney</TermLink> is a document that lets one person legally act for another — for example, signing documents, managing a bank account, or making decisions on someone else&apos;s behalf. The <TermLink href="/legal-documentation-howtos/power-of-attorney-explained">principal</TermLink> is the person granting the authority, and the <TermLink href="/legal-documentation-howtos/power-of-attorney-explained">agent</TermLink> is the person receiving it. What the agent can actually do, and for how long, depends entirely on the specific wording of the document — a POA isn&apos;t one single standardized type of authority.</div>}
      detailed={<div className="prose-p">Two independent choices define what a POA actually does: scope and durability. Scope can be general (broad authority across financial, legal, and property matters) or limited/special (authority restricted to specific named tasks, like selling one particular property, or valid only for a defined time period, like while the principal is traveling abroad). Durability determines what happens if the principal becomes mentally incapacitated: a <TermLink href="/legal-documentation-howtos/power-of-attorney-explained">durable power of attorney</TermLink> explicitly states that it remains valid through incapacity, while a standard (non-durable) POA automatically terminates the moment the principal loses capacity — which is the opposite of when many people assume they&apos;d need it most. A separate document, a healthcare power of attorney or healthcare proxy, specifically covers medical decision-making and is typically distinct from a financial/general POA, sometimes prepared alongside a living will.</div>}
      />
      <FootnoteAside>Without a durable power of attorney specifically in place before incapacity occurs, family members may need to petition a court for guardianship or conservatorship to gain legal authority to manage the incapacitated person&apos;s affairs — a more time-consuming and costly process than a POA prepared in advance.</FootnoteAside>

      <p>
      Because a standard POA ends exactly when incapacity begins, anyone planning for the possibility of future incapacity specifically needs the durable version — not just any power of attorney document.
      </p>

      <QuickCheck
      question="A person signs a standard (non-durable) power of attorney and later becomes incapacitated due to a medical event. What happens to the agent's authority under that document?"
      options={[
      { text: "The agent's authority automatically ends at the moment of incapacity, since a standard (non-durable) POA doesn't survive it", correct: true, explanation: "Correct. A non-durable power of attorney terminates automatically when the principal becomes incapacitated — only a durable POA is specifically designed to remain valid through incapacity." },
      { text: "The agent's authority automatically expands to cover healthcare decisions as well", correct: false, explanation: "A financial or general POA doesn't automatically expand into healthcare decision-making — that typically requires a separate healthcare power of attorney or proxy document." },
      { text: "Nothing changes, since all powers of attorney remain valid regardless of the principal's mental capacity", correct: false, explanation: "This is incorrect for a standard (non-durable) POA specifically — durability has to be explicitly built into the document for authority to survive incapacity." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A limited POA for a single transaction (baseline case)</h3>
      <div className="prose-p">
      A homeowner traveling abroad signs a limited power of attorney authorizing a trusted friend to sign closing documents for a home sale in their absence. The authority is restricted to that specific transaction and ends once the sale closes — the agent has no authority over anything else.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A durable POA prepared for future incapacity (edge case / variation)</h3>
      <div className="prose-p">
      An older adult sets up a durable power of attorney naming an adult child as agent, specifically so that if a future medical event causes incapacity, the child can continue managing bank accounts and bills without needing to go to court for guardianship. Because the document explicitly states it&apos;s durable, the authority survives exactly the situation it was designed for.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Confusing a general POA with a healthcare directive (real-world / applied case)</h3>
      <div className="prose-p">
      A family assumes that a general durable power of attorney covering financial matters also lets the named agent make medical treatment decisions during a hospitalization. Because a financial POA and a healthcare power of attorney are typically separate documents, the family may find the financial agent has no legal authority over medical decisions unless a separate healthcare proxy was also prepared in advance.
      </div>

      <QuickCheck
      question="Why might a family be surprised to learn a financial power of attorney doesn't cover medical decisions?"
      options={[
      { text: "Because financial/general powers of attorney and healthcare powers of attorney are typically separate documents covering different types of decisions", correct: true, explanation: "Correct. A general or financial POA and a healthcare power of attorney (or healthcare proxy) are usually distinct documents, each needing to be set up separately for its respective scope." },
      { text: "Because power of attorney documents automatically expire after one year regardless of type", correct: false, explanation: "There's no universal one-year expiration — a POA's duration depends on its specific terms, not a fixed default across all types." },
      { text: "Because only a court-appointed guardian can ever make medical decisions for another adult", correct: false, explanation: "A healthcare power of attorney or proxy can grant medical decision-making authority without court involvement — guardianship is a separate, more involved process typically needed only absent such a document." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Durable vs. non-durable power of attorney at the point of incapacity"
      type="comparison"
      svgSrc="/diagrams/legal-documentation-howtos-power-of-attorney-explained-durable-vs-non-durable.svg"
      altText="A comparison diagram showing a timeline where incapacity occurs; a non-durable POA's authority ends at that point, while a durable POA's authority continues past it."
      />
      <p>
      The single word &quot;durable&quot; in the document&apos;s title is what determines whether the agent&apos;s authority survives exactly the moment it may be needed most.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming any power of attorney document automatically remains valid if the principal becomes incapacitated.", fix: "Check specifically whether the document is labeled 'durable' — a standard POA ends at incapacity unless durability is explicitly included." },
      { mistake: "Assuming a financial or general power of attorney also covers healthcare decisions.", fix: "Set up a separate healthcare power of attorney or healthcare proxy if you want an agent to be able to make medical decisions." },
      { mistake: "Waiting until after a health crisis to set up a durable power of attorney.", fix: "Establish a durable power of attorney while the principal has full mental capacity, since a POA generally cannot be created once incapacity has already occurred." },
      ]}
      />
      <MisconceptionCallout
      myth="A power of attorney automatically remains valid no matter what happens to the principal's mental state, since that's the whole point of having one."
      reality={<p>Only a power of attorney specifically labeled and drafted as &quot;durable&quot; remains valid if the principal becomes incapacitated. A standard, non-durable power of attorney automatically terminates at the exact moment incapacity occurs — often the situation people most expect it to cover. Confirming durability in advance is essential for anyone planning for possible future incapacity.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Decide whether you need general (broad) or limited (task-specific) authority granted to your agent.",
      "If planning for possible future incapacity, confirm the document is explicitly labeled and drafted as a durable power of attorney.",
      "Set up a separate healthcare power of attorney or healthcare proxy if you also want an agent authorized to make medical decisions.",
      "Have a licensed attorney draft or review the document, since state-specific requirements for execution (like witnesses or notarization) vary.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the difference between a durable and non-durable power of attorney?", answer: "A durable power of attorney remains valid if the principal becomes incapacitated, while a non-durable (standard) power of attorney automatically ends the moment the principal loses mental capacity." },
      { question: "Does a power of attorney cover medical decisions?", answer: "Not automatically. A general or financial power of attorney typically doesn't extend to healthcare decisions — a separate healthcare power of attorney or healthcare proxy is usually needed for that purpose." },
      { question: "Who is the 'agent' in a power of attorney?", answer: "The agent (sometimes called the attorney-in-fact) is the person granted authority to act on behalf of the principal — the person who created the power of attorney document." },
      { question: "Can a power of attorney be set up after someone becomes incapacitated?", answer: "Generally no. A power of attorney requires the principal to have the mental capacity to understand and sign the document, so it typically must be created before incapacity occurs — afterward, a court-supervised guardianship or conservatorship process is usually the only remaining option." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
