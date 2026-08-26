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
  title: "Home Inspection Reports Explained",
  category: "legal-documentation-howtos",
  order: 12,
  subtopic: "property-and-housing-documentation",
  tags: ["home inspection", "real estate", "property condition", "contingency", "legal documentation how-tos"],
  date: "2026-08-26",
  updated: "2026-08-26",
  lastReviewed: "2026-08-26",
  excerpt: "A home inspection report is a documented snapshot of a property's condition at one moment in time — it's not a guarantee, not a pass/fail grade, and not a substitute for specialized inspections it explicitly doesn't cover.",
  summary: "A home inspection report is a written record of a licensed (or otherwise qualified) inspector's visual examination of a property's major systems and components — structure, roof, electrical, plumbing, HVAC — organized by system and typically flagging issues by severity, and it exists to inform a buyer's decision, not to certify the home as defect-free.",
  sources: [
    { label: "Consumer Financial Protection Bureau — Home Inspections", url: "https://www.consumerfinance.gov/owning-a-home/process/close/home-inspection/" },
    { label: "American Society of Home Inspectors — Standards of Practice", url: "https://www.homeinspector.org/Standards-of-Practice" },
    { label: "Nolo — Home Inspections and Contingencies", url: "https://www.nolo.com/legal-encyclopedia/home-inspections" },
  ],
  seeAlso: [
    "legal-documentation-howtos/property-deeds-explained",
    "legal-documentation-howtos/understanding-a-mortgage-document-general-mechanics",
  ],
  glossary: [
    {"term":"Home inspection","definition":"A visual, non-invasive examination of a property's major systems and components performed by a qualified inspector, documented in a written report."},
    {"term":"Inspection contingency","definition":"A clause in a real estate purchase contract that lets a buyer request repairs, a price adjustment, or exit the deal based on what a home inspection reveals, within a specified time window."},
    {"term":"Specialized inspection","definition":"An inspection covering a system or issue outside a general home inspection's typical scope (such as pest, radon, mold, sewer line, or structural engineering) that must be separately requested and performed."},
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
      "A home inspection report documents visible condition at one point in time — it's a snapshot for decision-making, not a certification that the home is defect-free.",
      "Standard home inspections generally don't cover certain issues (pest, radon, mold, sewer lines) unless separately requested as specialized inspections.",
      "An inspection contingency in the purchase contract is what actually gives a buyer leverage to act on the report's findings — the report itself doesn't automatically change the deal.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A home inspection report is what an inspector writes up after walking through a property and checking its major systems — roof, foundation, electrical, plumbing, heating and cooling. It lists what they found, organized by area, often flagging anything that looks like a problem. It&apos;s meant to help a buyer understand a property&apos;s real condition before committing, not to guarantee the house has no issues at all.</div>}
      detailed={<div className="prose-p">A <TermLink href="/legal-documentation-howtos/home-inspection-reports-explained">home inspection</TermLink> is defined by industry standards (such as those published by the American Society of Home Inspectors) as a visual, non-invasive examination — the inspector looks at accessible components without opening walls, moving heavy furniture, or performing destructive testing. This scope matters: a standard inspection generally covers structural components, roofing, exterior, electrical, plumbing, and HVAC systems, but typically excludes certain specialized concerns — pest infestation, radon gas, mold, sewer line condition, and pool/spa equipment are common exclusions that require a separately requested <TermLink href="/legal-documentation-howtos/home-inspection-reports-explained">specialized inspection</TermLink>. The report itself is only half the mechanism; the other half is the <TermLink href="/legal-documentation-howtos/home-inspection-reports-explained">inspection contingency</TermLink> written into the purchase contract, which sets a window of time during which the buyer can use the report&apos;s findings to request repairs, negotiate a price credit, or in some cases withdraw from the purchase — without that contingency clause, the report is informational only and doesn&apos;t by itself create any contractual leverage.</div>}
      />
      <FootnoteAside>Inspector licensing requirements, and even whether licensing is required at all, vary by state and country — checking an inspector&apos;s credentials, standards affiliation, and sample report before hiring is a reasonable step regardless of local licensing rules.</FootnoteAside>

      <p>
      Because the report and the contingency clause are separate mechanisms, understanding what each one actually does is what prevents a buyer from either overreacting to a minor finding or underreacting to a significant one.
      </p>

      <QuickCheck
      question="A home inspection report notes a small, isolated area of roof shingle wear that the inspector describes as within normal aging for the roof's age. Does this automatically entitle the buyer to a price reduction?"
      options={[
      { text: "Yes, any negative finding in the report automatically triggers a price reduction", correct: false, explanation: "A report simply documents findings — it doesn't automatically trigger any contractual remedy on its own. What a buyer can actually request depends on the specific inspection contingency terms in the purchase contract." },
      { text: "No — the report documents the finding, but any request for a price reduction or repair depends on the specific inspection contingency terms negotiated in the purchase contract, and a minor, expected wear item may not meet whatever threshold applies", correct: true, explanation: "Correct. The report and the contingency clause are separate mechanisms — the report informs, the contingency clause (if one exists and its conditions are met) is what actually creates room to negotiate." },
      { text: "No, because home inspection reports can never be used to negotiate after an offer is accepted", correct: false, explanation: "This is also incorrect in the other direction — inspection contingencies are specifically designed to allow post-offer negotiation based on inspection findings, when the contract includes one." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A clean report on a well-maintained home (baseline case)</h3>
      <div className="prose-p">
      An inspector examines a 10-year-old home and finds only minor, cosmetic items — a loose cabinet hinge, a slightly worn caulk line around a tub. The report is organized by system (roof, exterior, electrical, plumbing, HVAC, interior), noting the overall condition as consistent with normal use and age. In this case, the inspection contingency is likely satisfied without triggering any repair request, and the purchase proceeds on the original terms.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A significant finding that falls outside standard inspection scope (edge case)</h3>
      <div className="prose-p">
      During the general inspection, the inspector notices signs suggestive of a possible sewer line issue but explicitly states this is outside the scope of a standard inspection and recommends a specialized sewer line camera inspection. A buyer who stops at the general report without following up on this specific recommendation may end up purchasing a property with an undiagnosed, potentially costly issue that the general inspection was never designed to fully evaluate in the first place.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Negotiating repairs using the inspection contingency (real-world / applied case)</h3>
      <div className="prose-p">
      A report flags an aging water heater near the end of its expected lifespan and a minor electrical panel issue. Because the purchase contract includes an inspection contingency with a defined response window, the buyer&apos;s agent submits a formal request for either a price credit or repair of these specific items before the contingency deadline. The seller can accept, counter, or decline — the outcome depends on the negotiation, but the contingency clause is what created the structured opportunity to have that conversation at all.
      </div>

      <QuickCheck
      question="Does a standard home inspection typically include testing for mold or radon?"
      options={[
      { text: "Yes, these are always included as part of any standard home inspection", correct: false, explanation: "Mold and radon testing are commonly excluded from a standard home inspection's scope and need to be requested as separate, specialized inspections if desired." },
      { text: "No — these are commonly excluded from a standard inspection's scope and typically require separately requested specialized inspections", correct: true, explanation: "Correct. Checking exactly what a specific inspector's standard scope covers (and doesn't) before the inspection is what prevents assuming a topic was checked when it wasn't." },
      { text: "It depends only on the size of the home being inspected", correct: false, explanation: "Scope inclusion is generally determined by the inspector's standard service offering and any specialized inspections separately requested, not by the home's size." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Structure of a typical home inspection report"
      type="detail"
      svgSrc="/diagrams/legal-documentation-howtos-home-inspection-reports-explained-report-structure.svg"
      altText="A diagram showing a home inspection report broken into sections by system: roof and exterior, structure and foundation, electrical, plumbing, HVAC, and interior, each with findings noted by severity."
      />
      <p>
      A report organized by system is what lets a buyer (or their agent) quickly separate cosmetic notes from findings serious enough to raise during an inspection contingency negotiation.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a clean-looking home inspection report means the home has no significant issues at all.", fix: "Remember standard inspections are visual and non-invasive, and typically exclude items like pest, radon, mold, and sewer line condition — follow up on any specifically recommended specialized inspections." },
      { mistake: "Skipping or waiving the inspection contingency to make an offer more competitive, without understanding what's given up.", fix: "Understand that waiving the inspection contingency removes the structured ability to negotiate repairs or exit the deal based on inspection findings — weigh this tradeoff deliberately, not just to win a bidding situation." },
      { mistake: "Treating every item on the report as equally urgent.", fix: "Distinguish cosmetic or normal-wear notes from findings the inspector flags as significant or safety-related — most reports organize or rank findings by severity for exactly this reason." },
      ]}
      />
      <MisconceptionCallout
      myth="A passing home inspection means the home is guaranteed to be free of defects."
      reality={<p>A home inspection is a visual, non-invasive examination at one point in time, performed by a person who — however qualified — cannot see inside walls or predict future failures. It documents observable condition and flags concerns; it doesn&apos;t certify the property as defect-free, and it typically excludes several categories of issues that require separate, specialized inspections to evaluate.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Confirm what a specific inspector's standard scope covers and what's excluded before scheduling.",
      "Attend the inspection in person if possible, to see issues firsthand and ask questions on the spot.",
      "Review the inspection contingency terms in the purchase contract — response window, and what remedies (repair, credit, withdrawal) it allows.",
      "Follow up on any recommended specialized inspections (pest, radon, sewer line, structural) rather than treating the general report as complete.",
      "Prioritize findings by severity rather than treating every noted item as equally significant.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Does a home inspection guarantee a house has no problems?", answer: "No — a home inspection is a visual, non-invasive snapshot of observable condition at one point in time. It's meant to inform a buyer's decision, not to certify the property as defect-free." },
      { question: "What does a standard home inspection typically not cover?", answer: "Common exclusions include pest infestation, radon gas, mold, sewer line condition, and pool/spa equipment — these generally require separately requested specialized inspections." },
      { question: "What is an inspection contingency?", answer: "A clause in a real estate purchase contract giving the buyer a defined window of time to use inspection findings to request repairs, negotiate a price credit, or in some cases exit the deal — it's what turns a report's findings into contractual leverage." },
      { question: "Should I waive the inspection contingency to make my offer more competitive?", answer: "Waiving it removes a buyer's structured ability to negotiate or exit based on inspection findings — this is a significant tradeoff that's worth weighing deliberately, and a real estate agent or attorney can help evaluate it for a specific situation." },
      { question: "Can I attend my own home inspection?", answer: "Yes, and many buyers do — attending in person lets you see issues firsthand, ask the inspector questions directly, and get a fuller understanding of the property than the written report alone provides." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
