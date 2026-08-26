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
  title: "Freedom of Information Requests Explained",
  category: "legal-documentation-howtos",
  order: 34,
  subtopic: "government-and-civic-documentation",
  tags: ["FOIA", "freedom of information", "public records", "government transparency", "civic documentation"],
  date: "2026-08-26",
  updated: "2026-08-26",
  lastReviewed: "2026-08-26",
  excerpt: "A FOIA request is a formal, legally grounded way for anyone to ask a government agency for records — not a complaint or an appeal, but a structured document request with defined response timelines.",
  summary: "A Freedom of Information Act (FOIA) request is a formal, legally grounded mechanism allowing any person to request records from a U.S. federal government agency, with defined response timelines, specific statutory exemptions an agency can invoke to withhold certain information, and a formal appeals process if a request is denied — most U.S. states have parallel public records laws covering state and local agencies.",
  sources: [
    { label: "FOIA.gov — Official U.S. Government FOIA Portal", url: "https://www.foia.gov/" },
    { label: "U.S. Department of Justice — Office of Information Policy", url: "https://www.justice.gov/oip" },
    { label: "National Archives — Freedom of Information Act", url: "https://www.archives.gov/foia" },
  ],
  seeAlso: [
    "legal-documentation-howtos/how-to-read-a-government-form-general-literacy",
    "legal-documentation-howtos/understanding-court-summons-and-notices",
    "legal-documentation-howtos/voter-registration-explained",
  ],
  glossary: [
    {"term":"FOIA exemption","definition":"One of several specific categories defined by statute — such as national security, personal privacy, or law enforcement records — under which a federal agency may lawfully withhold requested information, in whole or in part."},
    {"term":"Public records law","definition":"State-level laws, often called 'sunshine laws,' that function similarly to the federal FOIA but apply to state and local government agencies rather than federal ones."},
    {"term":"Constructive denial","definition":"A situation where an agency fails to respond to a FOIA request within the legally required timeframe, which in many cases allows the requester to treat the request as denied and proceed to an appeal."},
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
      "A FOIA request is a formal, legally grounded document request to a U.S. federal agency, available to any person, not just journalists or specialists.",
      "Agencies must respond within a legally defined timeframe and can only withhold information under specific statutory exemptions, not at broad discretion.",
      "This is general process literacy, not legal advice for a specific request — for a denied request or a complex situation, consulting FOIA.gov's guidance or a records-access attorney is the appropriate next step.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A FOIA (Freedom of Information Act) request is a formal way to ask a U.S. federal government agency for records it holds — anything from an inspection report to internal correspondence, depending on what&apos;s being asked for. Anyone can submit one; it doesn&apos;t require a lawyer, a specific reason, or press credentials. The agency is legally required to respond within a set timeframe, either providing the records, providing them with some information redacted, or denying the request under a specific legal exemption. Most U.S. states also have their own <TermLink href="/legal-documentation-howtos/freedom-of-information-requests-explained">public records law</TermLink> covering state and local agencies, functioning similarly to the federal FOIA.</div>}
      detailed={<div className="prose-p">An agency can only withhold requested information under one of a small, statutorily defined list of <TermLink href="/legal-documentation-howtos/freedom-of-information-requests-explained">FOIA exemptions</TermLink> — categories like classified national security information, certain internal agency deliberations, personal privacy information, and law enforcement records that could interfere with an ongoing investigation, among others. An agency denying a request must generally cite which specific exemption applies, and a requester can appeal that denial through a formal administrative appeals process, and ultimately through federal court if the appeal is also denied. If an agency fails to respond within the legally required timeframe, this is sometimes treated as a <TermLink href="/legal-documentation-howtos/freedom-of-information-requests-explained">constructive denial</TermLink>, which can allow the requester to proceed directly to an appeal without waiting further.</div>}
      />
      <FootnoteAside>FOIA covers federal executive branch agencies — it doesn&apos;t apply to Congress, the federal courts, or private companies; requests to state or local agencies instead fall under that state&apos;s own public records law, which can have different timelines and exemptions than the federal FOIA.</FootnoteAside>

      <p>
      The core idea — that government records are presumptively accessible to the public, with narrow, specific exceptions — is what distinguishes a FOIA request from simply asking an agency informally for information.
      </p>

      <QuickCheck
      question="Can a private individual, with no journalism background or legal representation, submit a valid FOIA request?"
      options={[
      { text: "Yes — FOIA requests are available to any person, regardless of profession, citizenship status in many cases, or reason for the request", correct: true, explanation: "Correct. FOIA doesn't restrict who can submit a request or require a stated reason — the presumption is that federal records are accessible to the public generally, subject to specific statutory exemptions." },
      { text: "No — only journalists and researchers with press credentials can submit FOIA requests", correct: false, explanation: "This is a common misconception. FOIA is open to any requester; press or research affiliation can sometimes affect fee categories or processing priority, but it isn't a requirement to submit a request at all." },
      { text: "No — a FOIA request requires a licensed attorney to file on the requester's behalf", correct: false, explanation: "No legal representation is required to submit a FOIA request — most requests are filed directly by the individual seeking the records, often through an agency's online FOIA portal." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A straightforward request for an inspection report (baseline case)</h3>
      <div className="prose-p">
      Someone submits a FOIA request to a federal agency asking for a specific facility&apos;s most recent safety inspection report, describing the facility and approximate date range as specifically as possible. The agency locates the record, reviews it for any exempt information, and releases it (with minor redactions, if any) within the standard statutory response window.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A request partially denied under an exemption (edge case / variation)</h3>
      <div className="prose-p">
      A requester asks for internal agency emails related to a specific policy decision. The agency releases most of the records but withholds certain portions under the exemption covering internal deliberative communications, providing a partially redacted version along with a citation to the specific exemption invoked — a common middle-ground outcome between full release and full denial.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Appealing a denied request (real-world / applied case)</h3>
      <div className="prose-p">
      A requester&apos;s FOIA request is denied entirely, with the agency citing a specific exemption the requester believes was misapplied. The requester files a formal administrative appeal with the agency, laying out why they believe the exemption doesn&apos;t apply to the requested records — a defined process available specifically because an initial denial isn&apos;t necessarily final.
      </div>

      <QuickCheck
      question="An agency denies a FOIA request but doesn't cite any specific exemption for doing so. What does this suggest?"
      options={[
      { text: "The denial is likely improperly handled, since agencies are generally required to cite a specific statutory exemption when withholding requested records", correct: true, explanation: "Correct. A proper FOIA denial generally must identify which specific exemption applies — a denial without a cited exemption is a signal worth raising through the formal appeals process." },
      { text: "The agency has unlimited discretion to deny any request without justification", correct: false, explanation: "FOIA specifically limits withholding to defined statutory exemptions — an agency doesn't have open-ended discretion to deny a request without grounding it in one of those specific categories." },
      { text: "The request must have been submitted incorrectly", correct: false, explanation: "A missing exemption citation is generally a shortcoming in the agency's response, not evidence the original request itself was submitted improperly." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The FOIA request process"
      type="flow"
      svgSrc="/diagrams/legal-documentation-howtos-freedom-of-information-requests-explained-foia-flow.svg"
      altText="A flow diagram showing four steps: Submit Request to Agency, Agency Review Within Statutory Timeframe, Response (Full Release, Partial Release with Redactions, or Denial with Cited Exemption), and an optional final step, Formal Appeal if Denied."
      />
      <p>
      The appeal step exists precisely because an initial denial or partial release isn&apos;t the end of the process — it&apos;s a defined, expected branch in the overall flow, not an exceptional escalation.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Submitting a vague request without enough detail for the agency to locate the specific records.", fix: "Describe the records as specifically as possible — subject matter, relevant date range, and any known document titles or reference numbers — to speed up processing." },
      { mistake: "Treating a state public records request the same as a federal FOIA request.", fix: "Check the specific state's public records law, since timelines, exemptions, and procedures can differ from the federal FOIA process even though the underlying concept is similar." },
      { mistake: "Assuming a denial is final without checking whether a formal appeal is available.", fix: "Review the denial letter for appeal instructions — most FOIA denials include a formal administrative appeals process before resorting to federal court." },
      ]}
      />
      <MisconceptionCallout
      myth="FOIA requests are only for journalists, researchers, or people with a specific legal case."
      reality={<p>FOIA is available to any person for essentially any reason — the law doesn&apos;t require a stated purpose, a professional affiliation, or U.S. citizenship in most cases. The presumption underlying FOIA is that federal records are accessible to the public generally, with withholding limited to specific, narrowly defined statutory exemptions rather than broad agency discretion.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Identify the specific federal agency (or, for state/local records, the relevant state or local body) most likely to hold the records you want.",
      "Check that agency's FOIA (or public records) portal for its specific submission process and any online request form.",
      "Describe the records requested as specifically as possible — subject, date range, and any known identifiers — to speed up processing.",
      "If a request is denied or only partially fulfilled, review the response for a cited exemption and check whether a formal appeal is available before assuming the denial is final.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Who can file a FOIA request?", answer: "Any person can file a FOIA request with a U.S. federal agency — no press credentials, legal representation, or stated reason is required." },
      { question: "How long does an agency have to respond to a FOIA request?", answer: "Federal agencies are generally required to respond within a statutorily defined timeframe (commonly around 20 business days, though this can be extended under certain circumstances) — exact timelines can vary and are worth confirming with the specific agency or FOIA.gov." },
      { question: "Can a FOIA request be denied?", answer: "Yes — an agency can withhold requested records, in whole or in part, but only under one of a specific, statutorily defined list of exemptions, and a denial can typically be appealed through a formal administrative process." },
      { question: "Does FOIA apply to state and local government records too?", answer: "The federal FOIA applies only to federal executive branch agencies — most U.S. states have their own separate public records law covering state and local agencies, with potentially different timelines and exemptions." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
