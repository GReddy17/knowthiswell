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
  title: "How Wills Work: Basic Mechanics",
  category: "legal-documentation-howtos",
  order: 22,
  subtopic: "family-and-estate-documentation",
  tags: ["wills", "estate planning", "last will and testament", "executor", "legal documentation"],
  date: "2026-08-26",
  updated: "2026-08-26",
  lastReviewed: "2026-08-26",
  excerpt: "A will's actual mechanism is a set of written, witnessed instructions that a court recognizes as evidence of how a person wanted specific property distributed after death — it does nothing on its own until a court validates it.",
  summary: "A will (last will and testament) is a legal document that names who receives a person's property after death and who is responsible for carrying that out, but it only takes legal effect once a court validates it through probate — this is general legal literacy, not a substitute for drafting a will with a licensed attorney.",
  sources: [
    { label: "Cornell Legal Information Institute — Wills", url: "https://www.law.cornell.edu/wex/will" },
    { label: "Nolo — Wills FAQ", url: "https://www.nolo.com/legal-encyclopedia/wills" },
    { label: "American Bar Association — Estate Planning Basics", url: "https://www.americanbar.org/groups/real_property_trust_estate/resources/estate_planning/" },
  ],
  seeAlso: [
    "legal-documentation-howtos/understanding-inheritance-and-probate-general-overview",
    "legal-documentation-howtos/living-wills-and-healthcare-directives-explained",
    "legal-documentation-howtos/guardianship-documentation-basics",
  ],
  glossary: [
    {"term":"Testator","definition":"The person making the will — the one whose property and wishes the document describes."},
    {"term":"Executor","definition":"The person named in a will to carry out its instructions: paying debts, filing paperwork, and distributing property to beneficiaries."},
    {"term":"Beneficiary","definition":"A person or organization named in a will to receive specific property or a share of the estate."},
    {"term":"Intestate","definition":"Dying without a valid will — in this case, state/local default inheritance law decides who gets what, not the deceased person's own wishes."},
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
      "A will is written evidence of intent, not an instant transfer — it only takes legal effect once a probate court validates it after the testator's death.",
      "Three elements make a will legally recognizable almost everywhere: it names an executor, it's in writing, and it's signed and witnessed according to the required formalities.",
      "Dying without a valid will (intestate) means a state or country's default inheritance formula decides who gets what — not the deceased person's actual wishes.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/legal-documentation-howtos/how-wills-work-basic-mechanics">will</TermLink> is a written document that says who should get a person&apos;s property after they die and who&apos;s in charge of making sure that happens. It doesn&apos;t do anything by itself the moment it&apos;s signed — a court has to review and approve it first, in a process called probate, before property actually moves to the people named in it.</div>}
      detailed={<div className="prose-p">Legally, a will works as a set of instructions a court treats as strong evidence of the <TermLink href="/legal-documentation-howtos/how-wills-work-basic-mechanics">testator&apos;s</TermLink> intent, provided it meets the formal requirements for validity where it was made — typically that it&apos;s in writing, signed by the testator, and signed by a required number of witnesses (commonly two) who aren&apos;t themselves beneficiaries. The will names an <TermLink href="/legal-documentation-howtos/how-wills-work-basic-mechanics">executor</TermLink>, the person responsible for filing the will with a court, paying the deceased&apos;s remaining debts and taxes from the estate, and distributing what&apos;s left to the named <TermLink href="/legal-documentation-howtos/how-wills-work-basic-mechanics">beneficiaries</TermLink>. None of this happens automatically at death — a court has to formally recognize the will as valid through probate before the executor has legal authority to act on it, which is why a will is best understood as a set of instructions waiting for court validation, not a self-executing transfer.</div>}
      />
      <FootnoteAside>Formal requirements for a valid will (number of witnesses, whether notarization is required, whether handwritten &quot;holographic&quot; wills are recognized) vary by state and country — this is exactly the kind of detail a licensed estate attorney confirms for a specific jurisdiction rather than something to assume from general information.</FootnoteAside>

      <p>
      Because a will only works if it clears the formal requirements, most of what can go wrong with one happens before death — in how it was written or signed — not after.
      </p>

      <QuickCheck
      question="Does a will legally transfer property to beneficiaries the moment the testator dies?"
      options={[
      { text: "Yes, ownership transfers automatically and instantly at death", correct: false, explanation: "A will doesn't self-execute. Property only formally transfers to beneficiaries after a probate court validates the will and the executor completes the estate process." },
      { text: "No — the will has to be validated through probate before the executor has authority to distribute property", correct: true, explanation: "Correct. A will is evidence of intent that a court must formally recognize before its instructions can be legally carried out." },
      { text: "No, wills are only advisory and courts can freely ignore them", correct: false, explanation: "Courts generally give a validly executed will strong legal weight and follow its instructions closely — the issue isn't that courts ignore wills, it's that court validation (probate) is a required step before distribution." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A straightforward, validly executed will (baseline case)</h3>
      <div className="prose-p">
      A person writes a will naming their adult child as executor and sole beneficiary, signs it in front of two witnesses who aren&apos;t beneficiaries, and each witness signs too. After death, the child files the will with the local probate court, the court validates it, and the child (now formally the executor) pays remaining debts from the estate and distributes what&apos;s left according to the will. This is the mechanism working as designed.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A will that&apos;s missing a required witness (edge case / variation)</h3>
      <div className="prose-p">
      The same will, but only one witness signs instead of the two required in that jurisdiction. A probate court can refuse to validate it as a formal will, and the estate may then be treated as if no valid will existed — meaning default intestate succession rules decide distribution instead of the person&apos;s actual written wishes, even though the document clearly stated their intent.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Updating a will after a major life change (real-world / applied case)</h3>
      <div className="prose-p">
      Someone writes a will naming a spouse as sole beneficiary, then divorces years later without updating the document. Many jurisdictions have specific rules that automatically revoke a former spouse&apos;s inheritance rights under an outdated will, but not all do, and the rules on exactly what gets revoked (just the spouse&apos;s share, or the whole will) vary — which is why a will needs review after marriage, divorce, births, deaths, or major asset changes rather than being treated as a one-time task.
      </div>

      <QuickCheck
      question="What happens if someone dies without a valid will?"
      options={[
      { text: "The state or country's default intestate succession rules decide who inherits, regardless of the deceased person's actual wishes", correct: true, explanation: "Correct. Without a valid will, a jurisdiction's default formula (commonly favoring spouses and children in a fixed order) controls distribution instead of personal intent." },
      { text: "All property automatically goes to the government", correct: false, explanation: "Property escheating to the government is a rare last-resort outcome, used only when no legally qualifying relatives can be found at all — not the typical result of dying intestate." },
      { text: "Nothing happens until the person writes a will, even after death", correct: false, explanation: "A will can't be written after death. Dying without one triggers a jurisdiction's default distribution formula, applied through the same probate court system." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="From signed will to distributed estate: the required sequence"
      type="flow"
      svgSrc="/diagrams/legal-documentation-howtos-how-wills-work-basic-mechanics-flow.svg"
      altText="A four-step horizontal flow diagram. Step 1: Will drafted, signed, and witnessed. Step 2: Testator dies. Step 3: Executor files will with probate court for validation. Step 4: Court validates the will, executor pays debts and distributes remaining property to beneficiaries. An arrow below the diagram notes that skipping or failing any step (for example, a missing witness) can divert the estate into default intestate succession instead."
      />
      <p>
      Each step depends on the one before it — a defect anywhere earlier in the sequence (a missing witness, an unsigned page) can prevent the later steps from happening as the testator intended.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a will avoids probate entirely.", fix: "A will is actually a set of instructions for the probate process, not an alternative to it — avoiding probate generally requires different tools (like certain trusts), which a will alone doesn't provide." },
      { mistake: "Writing or updating a will without meeting the jurisdiction's signing/witnessing formalities.", fix: "Confirm the exact formal requirements (witness count, notarization, self-proving affidavits) for the relevant state or country with a licensed attorney before relying on a self-drafted document." },
      { mistake: "Never revisiting a will after a major life event (marriage, divorce, a new child, a large asset purchase).", fix: "Review and, if needed, formally update the will after any major life change rather than assuming an old version still reflects current wishes and family structure." },
      ]}
      />
      <MisconceptionCallout
      myth="Having any will at all means an estate skips court involvement entirely."
      reality={<p>A will is filed with, and validated by, a probate court — it&apos;s the input to that court process, not a way around it. What a will does accomplish is giving the court clear, documented instructions to follow instead of applying a jurisdiction&apos;s generic default distribution rules, which is a meaningfully different (and usually faster, less contested) outcome than dying intestate, even though court involvement itself still happens either way.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Confirm the specific signing and witnessing requirements for a will in your jurisdiction before drafting or finalizing one.",
      "Name both an executor and at least one backup executor in case the first choice is unable to serve.",
      "Store the signed original somewhere the executor can actually find and access it, and tell them where it is.",
      "Review the will after any major life event and consult a licensed estate attorney for anything beyond the most basic situation.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Does a will avoid probate?", answer: "No — a will is filed with and validated by a probate court; it's the set of instructions the court follows, not an alternative to the court process itself." },
      { question: "How many witnesses does a will need?", answer: "It varies by jurisdiction, but two non-beneficiary witnesses is a common requirement — always confirm the exact rule for the relevant state or country." },
      { question: "What happens if you die without a will?", answer: "The estate is distributed according to that jurisdiction's default intestate succession formula, which may not match the deceased person's actual wishes." },
      { question: "Can a will be changed after it's signed?", answer: "Yes, generally through a formal amendment (a codicil) or by writing and properly executing an entirely new will that revokes the old one — informal handwritten changes on an existing signed will are often not legally effective." },
      { question: "Is a handwritten will valid?", answer: "Some jurisdictions recognize handwritten ('holographic') wills under specific conditions, and many don't — this varies enough that it should be confirmed locally rather than assumed." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
