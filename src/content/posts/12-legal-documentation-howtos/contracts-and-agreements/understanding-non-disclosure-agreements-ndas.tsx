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
  title: "Understanding Non-Disclosure Agreements (NDAs)",
  category: "legal-documentation-howtos",
  order: 17,
  subtopic: "contracts-and-agreements",
  tags: ["NDA", "non-disclosure agreement", "confidentiality agreement", "mutual NDA", "trade secrets"],
  date: "2026-08-26",
  updated: "2026-08-26",
  lastReviewed: "2026-08-26",
  excerpt: "An NDA is a contract that creates a legal duty to keep specific information confidential — but the protection only extends as far as what the document actually defines as confidential, for how long, and under which exceptions.",
  summary: "A non-disclosure agreement (NDA) is a contract in which one or both parties agree not to share defined confidential information with outsiders, and its real-world strength depends heavily on the specifics — how narrowly or broadly 'confidential information' is defined, how long the duty lasts, whether it's mutual or one-way, and what carve-outs (like information already public) exist.",
  sources: [
    { label: "Cornell Legal Information Institute — Non-Disclosure Agreement (NDA)", url: "https://www.law.cornell.edu/wex/non-disclosure_agreement" },
    { label: "U.S. Patent and Trademark Office — Trade Secret Basics", url: "https://www.uspto.gov/" },
    { label: "Federal Trade Commission — Business Guidance", url: "https://www.ftc.gov/business-guidance" },
  ],
  seeAlso: [
    "legal-documentation-howtos/what-makes-a-contract-legally-binding",
    "legal-documentation-howtos/employment-contracts-explained",
    "legal-documentation-howtos/freelance-and-service-contracts-explained",
  ],
  glossary: [
    {"term":"Non-disclosure agreement (NDA)","definition":"A contract in which one or more parties agree to keep specified information confidential and not disclose it to unauthorized third parties."},
    {"term":"Mutual NDA","definition":"An NDA where both parties are disclosing confidential information to each other and both are bound by the same confidentiality duties, as opposed to a one-way NDA where only one side discloses."},
    {"term":"Trade secret","definition":"Confidential business information (like a formula, process, or customer list) that derives economic value from not being generally known, and that the owner takes reasonable steps to keep secret."},
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
      "An NDA creates a legal duty to keep specifically defined information confidential — its real strength depends entirely on how that definition, duration, and set of exceptions are written.",
      "NDAs can be one-way (only one party discloses confidential information) or mutual (both parties disclose and both are bound), and the correct type depends on who's actually sharing what.",
      "Information that's already public, independently developed, or required to be disclosed by law is typically carved out as an exception, even under a broadly written NDA.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/legal-documentation-howtos/understanding-non-disclosure-agreements-ndas">non-disclosure agreement</TermLink>, or NDA, is a contract where someone promises not to share certain private information with people outside the agreement — like a business idea, a product design, or financial details. Signing an NDA means you can be held legally responsible if you leak information the document defines as confidential, so it&apos;s worth actually reading what counts as &quot;confidential&quot; before agreeing, since a vaguely written NDA can end up covering far more (or far less) than either side expects.</div>}
      detailed={<div className="prose-p">An NDA&apos;s practical strength comes down to four drafting choices: the definition of confidential information (broad and vague vs. specific and itemized), the duration of the confidentiality duty (many NDAs run 1-5 years, though trade secret protections can be indefinite), whether it&apos;s a <TermLink href="/legal-documentation-howtos/understanding-non-disclosure-agreements-ndas">mutual NDA</TermLink> (both sides disclose and are bound) or one-way (only one side discloses), and the carve-out exceptions — information already public, independently developed by the receiving party without using the confidential information, or disclosure legally compelled by a court or regulator. A well-drafted NDA typically also addresses what happens to physical or digital copies of confidential materials after the relationship ends, and whether the receiving party can be held liable even for accidental disclosure through negligence, not just intentional leaks.</div>}
      />
      <FootnoteAside>Some information — like formulas, processes, or customer data meeting the legal definition of a trade secret — can carry protection independent of any NDA at all, under trade secret law; an NDA typically reinforces that protection and extends it to information that might not otherwise qualify as a formal trade secret.</FootnoteAside>

      <p>
      Because an NDA only protects what it actually defines as confidential, two NDAs that look similar on the surface can offer very different real-world protection depending on the specific wording.
      </p>

      <QuickCheck
      question="A company shares a product roadmap under an NDA with a contractor. The contractor later mentions a detail from that roadmap that was independently reported by a news outlet before the NDA was signed. Has the contractor likely violated the NDA?"
      options={[
      { text: "Yes, because any information shared under an NDA is always protected regardless of its source", correct: false, explanation: "NDAs typically carve out information that was already public before disclosure — this detail likely falls under that standard exception." },
      { text: "No, because information that was already publicly available before the NDA was signed is typically excluded from the confidentiality duty", correct: true, explanation: "Correct. Most NDAs explicitly exclude information that was already public, independently developed, or otherwise not genuinely confidential at the time of disclosure." },
      { text: "It depends only on whether the contractor signed a mutual or one-way NDA", correct: false, explanation: "The mutual-vs-one-way distinction affects who owes duties to whom, not whether previously public information is covered — the public-information exception is the relevant factor here." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A one-way NDA before a pitch meeting (baseline case)</h3>
      <div className="prose-p">
      An inventor asks a potential manufacturer to sign a one-way NDA before discussing a new product design. Only the inventor is disclosing confidential information, so the NDA obligates the manufacturer not to share or use the design outside the discussion, while the manufacturer discloses nothing confidential in return.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A mutual NDA between two companies (edge case / variation)</h3>
      <div className="prose-p">
      Two companies exploring a joint venture each need to share sensitive financial and operational details with the other. A mutual NDA is used instead of a one-way version, since both companies are disclosing confidential information and both need the same protection applied to what the other shares.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: An NDA with a narrow definition of confidential information (real-world / applied case)</h3>
      <div className="prose-p">
      An NDA defines &quot;confidential information&quot; narrowly as only the specific documents marked &quot;Confidential&quot; at the time of sharing. A verbal conversation covering the same topic, if never followed up with a marked document, may fall outside that narrow definition — illustrating why a broadly and carefully drafted definition matters more than the mere existence of an NDA.
      </div>

      <QuickCheck
      question="Why might a broadly written definition of 'confidential information' in an NDA matter more than simply having an NDA in place at all?"
      options={[
      { text: "Because an NDA's actual protection only extends to what it defines as confidential — a narrow or vague definition can leave real gaps even with a signed agreement", correct: true, explanation: "Correct. The presence of an NDA alone doesn't guarantee broad protection; the specific definition of confidential information determines what's actually covered." },
      { text: "Because all NDAs use an identical, legally standardized definition of confidential information", correct: false, explanation: "There's no single standardized definition — NDA language varies significantly and that variation is exactly what determines the scope of protection." },
      { text: "Because a narrow definition automatically extends the confidentiality duration", correct: false, explanation: "The scope of the definition and the duration of the duty are separate, independently negotiated terms in an NDA." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="One-way NDA vs. mutual NDA"
      type="comparison"
      svgSrc="/diagrams/legal-documentation-howtos-understanding-non-disclosure-agreements-ndas-one-way-vs-mutual.svg"
      altText="A comparison diagram showing a one-way NDA with a single arrow of confidential information flowing from Party A to Party B, versus a mutual NDA with arrows flowing in both directions between Party A and Party B."
      />
      <p>
      Choosing the right type isn&apos;t a formality — using a one-way NDA when both sides are actually disclosing confidential information leaves one party&apos;s disclosures unprotected.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Signing an NDA without reading how narrowly or broadly it defines 'confidential information.'", fix: "Check the definition section specifically — a vague definition can be argued either way later, which weakens the practical protection for everyone involved." },
      { mistake: "Using a one-way NDA when both sides will actually be sharing sensitive information.", fix: "Use a mutual NDA whenever both parties are disclosing confidential information, so both sides get the same contractual protection." },
      { mistake: "Assuming an NDA protects information indefinitely with no time limit.", fix: "Check the stated duration of the confidentiality duty — many NDAs specify a fixed term (commonly 1-5 years), after which the duty may expire unless the information separately qualifies as a trade secret." },
      ]}
      />
      <MisconceptionCallout
      myth="Signing an NDA means literally everything discussed afterward is automatically confidential and protected."
      reality={<p>An NDA only protects what it specifically defines as confidential information, and it typically carves out information that&apos;s already public, independently developed, or legally required to be disclosed. Two NDAs can look similar on the surface but offer very different real-world protection depending on how carefully the definition, duration, and exceptions are drafted.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Read the definition of 'confidential information' closely before signing — check whether it's a broad catch-all or a narrow, itemized list.",
      "Confirm whether the NDA should be one-way or mutual based on who is actually disclosing sensitive information.",
      "Check the stated duration of the confidentiality obligation and whether it matches how long the information genuinely needs protection.",
      "For high-stakes business relationships or significant trade secrets, have a licensed attorney review the NDA before signing rather than relying on a template alone.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the difference between a mutual NDA and a one-way NDA?", answer: "A mutual NDA applies when both parties are disclosing confidential information to each other and both are bound by the same duties, while a one-way NDA applies when only one party is disclosing confidential information to the other." },
      { question: "How long does an NDA typically last?", answer: "It varies by agreement — many NDAs specify a fixed duration, commonly somewhere between one and five years, though some information that separately qualifies as a trade secret can carry protection beyond the NDA's stated term." },
      { question: "Does an NDA cover information that's already public?", answer: "Typically no. Most NDAs explicitly exclude information that was already publicly known, independently developed without using the confidential information, or legally required to be disclosed." },
      { question: "Can I be sued for violating an NDA even if the leak was accidental?", answer: "It depends on the specific language of the NDA — some NDAs hold the receiving party liable for negligent as well as intentional disclosure, while others require a showing of intent. This is a detail worth checking, or asking a licensed attorney about, before signing." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
