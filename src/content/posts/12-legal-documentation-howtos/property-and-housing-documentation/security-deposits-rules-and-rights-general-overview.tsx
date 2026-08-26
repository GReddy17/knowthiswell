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
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Security Deposits: Rules and Rights (General Overview)",
  category: "legal-documentation-howtos",
  order: 9,
  subtopic: "property-and-housing-documentation",
  tags: ["security deposit", "rental agreement", "tenant rights", "landlord", "legal documentation how-tos"],
  date: "2026-08-26",
  updated: "2026-08-26",
  lastReviewed: "2026-08-26",
  excerpt: "A security deposit is a refundable safeguard, not a fee — how much can be charged, how it must be handled, and how it gets returned are all shaped by rules that vary by jurisdiction, but the underlying mechanism works the same way almost everywhere.",
  summary: "A security deposit is a sum of money a tenant pays upfront that a landlord holds as protection against unpaid rent or damage beyond normal wear and tear, and that must generally be returned (minus any legitimate deductions, with an itemized explanation) within a set time after the tenant moves out — the specific dollar caps, holding rules, and deadlines vary significantly by state and country.",
  sources: [
    { label: "Cornell Legal Information Institute — Security Deposit", url: "https://www.law.cornell.edu/wex/security_deposit" },
    { label: "U.S. Department of Housing and Urban Development — Renting", url: "https://www.hud.gov/topics/rental_assistance" },
    { label: "Nolo — Security Deposits: State-by-State Rules", url: "https://www.nolo.com/legal-encyclopedia/security-deposits-51-50-fifty-state.html" },
  ],
  seeAlso: [
    "legal-documentation-howtos/understanding-rental-agreements-clause-by-clause",
    "legal-documentation-howtos/tenant-rights-basics-factual-general-overview",
    "legal-documentation-howtos/landlord-responsibilities-basics-factual-general-overview",
  ],
  glossary: [
    {"term":"Security deposit","definition":"A refundable sum a landlord holds to cover potential unpaid rent or damage beyond normal wear and tear, returned (minus legitimate deductions) after a tenancy ends."},
    {"term":"Normal wear and tear","definition":"Ordinary, expected deterioration from everyday living (faded paint, minor carpet wear) as opposed to damage caused by neglect or misuse — deposits can generally be used for the latter, not the former."},
    {"term":"Move-out inspection","definition":"A walkthrough of the unit at the end of a tenancy, sometimes done jointly with the tenant, used to document its condition and support any deposit deductions."},
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
      "A security deposit is refundable by design — it exists to cover unpaid rent or damage beyond normal wear and tear, not to function as an extra, non-refundable fee.",
      "Many jurisdictions cap how much a landlord can charge as a deposit (often expressed as a multiple of monthly rent) and set a deadline for returning it after move-out, but the exact numbers vary widely by state and country.",
      "Normal wear and tear (faded paint, minor carpet wear from ordinary use) is generally not a valid reason to withhold a deposit — actual damage from neglect or misuse is.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A security deposit is money a tenant pays before moving in, which the landlord holds onto in case something goes wrong — unpaid rent, or damage beyond ordinary use. When the tenant moves out, the landlord is supposed to return it, minus only legitimate deductions, within a set window of time. It&apos;s meant to come back to the tenant in most ordinary cases, not to be treated as extra rent.</div>}
      detailed={<div className="prose-p">A <TermLink href="/legal-documentation-howtos/security-deposits-rules-and-rights-general-overview">security deposit</TermLink> is legally distinct from rent — it&apos;s the tenant&apos;s own money being held, not the landlord&apos;s income, which is why most jurisdictions regulate how it can be handled: many require deposits to be kept in a separate account (sometimes an interest-bearing one), cap the amount that can be charged (commonly some multiple of one month&apos;s rent), and set a strict deadline (commonly ranging from about 14 to 60 days depending on jurisdiction) for either returning the full deposit or providing an itemized list of deductions. Valid deductions generally cover unpaid rent and damage beyond <TermLink href="/legal-documentation-howtos/security-deposits-rules-and-rights-general-overview">normal wear and tear</TermLink> — a worn patch of carpet from years of ordinary foot traffic is wear and tear; a pet-stained carpet requiring full replacement is damage. Because both the caps and the deadlines vary significantly by state and country, and some jurisdictions have none at all, checking the specific local rule is essential rather than assuming a number from a different location applies.</div>}
      />
      <FootnoteAside>Some jurisdictions require landlords to provide written notice of exactly which bank or account is holding the deposit, and some require paying the tenant accrued interest on it — these details are jurisdiction-specific enough that a local tenant rights resource or attorney is the reliable way to check them.</FootnoteAside>

      <p>
      The calculator below illustrates one common way deposit limits are expressed — as a multiple of monthly rent — though the actual multiple allowed (if a cap exists at all) depends entirely on local law.
      </p>

      <QuickCheck
      question="A tenant moves out after two years. The carpet shows some general fading and light wear from ordinary foot traffic, but no stains, tears, or damage. Can the landlord deduct carpet replacement cost from the deposit?"
      options={[
      { text: "Yes, any carpet aging at all justifies a deduction", correct: false, explanation: "Ordinary fading and wear from normal use over time is generally classified as normal wear and tear, which deposits typically cannot be used to cover." },
      { text: "Generally no — ordinary fading and wear from normal use over two years is typically considered normal wear and tear, not damage", correct: true, explanation: "Correct. Deposits are meant to cover damage beyond normal wear and tear, and gradual, expected aging from ordinary living generally falls on the wear-and-tear side of that line, not the deductible-damage side." },
      { text: "Only if the landlord personally dislikes the carpet's appearance", correct: false, explanation: "Deductions are meant to be based on the wear-and-tear-versus-damage distinction, not a landlord's personal preference about the unit's appearance." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A straightforward full deposit return (baseline case)</h3>
      <div className="prose-p">
      A tenant pays a $1,500 deposit, rents for a year, pays rent on time throughout, and leaves the unit in the same condition it was received in aside from ordinary wear. At move-out, the landlord inspects the unit, finds no damage beyond normal wear and tear, and returns the full $1,500 within the jurisdiction&apos;s required timeframe. This is the deposit process working as designed: money held, then returned in full because nothing triggered a valid deduction.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A partial deduction for actual damage (edge case)</h3>
      <div className="prose-p">
      A different tenant&apos;s dog scratches deep gouges into a hardwood floor requiring partial refinishing, which costs $400. The landlord can generally deduct that $400 from the deposit, provided they give the tenant an itemized statement explaining the deduction (often required within the same deadline as any refund). The remaining balance of the deposit — the $400 that isn&apos;t tied to this specific damage — is still owed back to the tenant.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A landlord who misses the legal deadline to return or explain the deposit (real-world / applied case)</h3>
      <div className="prose-p">
      A tenant moves out and hears nothing from the landlord for three months — no refund, no itemized deduction list. In many jurisdictions, missing the legally required deadline for returning a deposit or providing an itemized deduction list can itself create consequences for the landlord, sometimes including forfeiting the right to withhold any of the deposit, or owing additional damages to the tenant — the specific consequence depends entirely on local law, which is why a tenant in this position generally benefits from checking their local rules or consulting a tenant rights organization or attorney rather than assuming nothing can be done.
      </div>

      <QuickCheck
      question="Are security deposit caps and return deadlines the same everywhere?"
      options={[
      { text: "Yes, most places use the same standard rule of one month's rent, returned within 30 days", correct: false, explanation: "There's no single universal rule — caps (if any exist) and deadlines vary considerably by state and country, and some places have no statutory cap at all." },
      { text: "No — the maximum deposit amount, if capped at all, and the deadline for returning it vary significantly by jurisdiction, so the specific local rule needs to be checked directly", correct: true, explanation: "Correct. This is exactly the kind of detail that's jurisdiction-specific rather than universal — checking local landlord-tenant law or a resource like Nolo's state-by-state summaries is the reliable way to find the actual number that applies." },
      { text: "No, and there's no way to find out what applies without hiring a lawyer", correct: false, explanation: "While a licensed attorney can help with a specific dispute, many jurisdictions publish their landlord-tenant rules directly, and general-audience legal resources summarize state-by-state rules for free." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The security deposit lifecycle"
      type="flow"
      svgSrc="/diagrams/legal-documentation-howtos-security-deposits-rules-and-rights-general-overview-lifecycle.svg"
      altText="A flow diagram showing four stages: deposit paid at move-in, deposit held during tenancy, move-out inspection, and deposit returned or itemized deductions provided within the required deadline."
      />
      <p>
      The deposit&apos;s legal status doesn&apos;t change while it&apos;s held — it remains the tenant&apos;s money, which is why the return-or-itemize step at the end is treated as an obligation, not a courtesy.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a security deposit works the same way, with the same caps and deadlines, everywhere.", fix: "Look up the specific rule for your state, province, or country before assuming a number you've heard elsewhere applies." },
      { mistake: "Treating any deduction from the deposit as automatically legitimate without an itemized explanation.", fix: "Request (or provide, as a landlord) a written, itemized list of any deductions distinguishing damage from normal wear and tear." },
      { mistake: "Not documenting the unit's move-in condition, making move-out disputes about condition harder to resolve fairly.", fix: "Take dated photos or a written move-in condition report at the start of the tenancy, ideally agreed on by both parties." },
      ]}
      />
      <MisconceptionCallout
      myth="A security deposit is basically the landlord's money once it's been paid — the tenant shouldn't expect much of it back."
      reality={<p>A security deposit remains the tenant&apos;s money, held by the landlord as a safeguard rather than transferred as income. The default outcome, when no unpaid rent or damage beyond normal wear and tear exists, is a full refund — deductions require a specific, legitimate reason, not general discretion.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Estimate a deposit cap expressed as a multiple of monthly rent"
      description="Some jurisdictions cap deposits as a multiple of monthly rent (for example, 'no more than one and a half months' rent'). This is illustrative only — check your local law for the actual cap, if any."
      fields={[
      { key: "monthlyRent", label: "Monthly rent ($)", defaultValue: 1500, min: 0, step: 50 },
      { key: "capMultiple", label: "Illustrative cap multiple (e.g. 1.5 = one and a half months' rent)", defaultValue: 1.5, min: 0, max: 4, step: 0.25 },
      ]}
      formula="securityDepositCapAmount"
      formatResult="currency"
      resultLabel="Illustrative maximum deposit under this multiple"
      disclaimer="This is a simple illustration of how deposit caps are sometimes expressed, not a statement of any actual legal limit. Deposit caps vary by jurisdiction and many places have no cap at all — check your local landlord-tenant law for the real figure."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Look up the security deposit cap, holding rules, and return deadline that actually apply in your state, province, or country.",
      "Document the unit's condition at move-in with dated photos, ideally with the landlord's sign-off.",
      "At move-out, request a walkthrough or inspection and ask for an itemized list of any proposed deductions.",
      "If a deposit isn't returned or explained within the applicable legal deadline, check what remedy your local law provides before assuming nothing can be done.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How much can a landlord charge for a security deposit?", answer: "This depends entirely on local law — many jurisdictions cap the amount (often as a multiple of monthly rent), while others have no statutory cap. Checking your specific state, province, or country's rule is the reliable way to know the real figure." },
      { question: "Can a landlord keep the deposit for normal wear and tear?", answer: "Generally no — deposits are meant to cover unpaid rent and damage beyond normal wear and tear, not the ordinary, expected aging that comes from everyday living in a unit." },
      { question: "How long does a landlord have to return a security deposit?", answer: "This varies by jurisdiction, commonly ranging from about two weeks to two months, and some places require an itemized deduction list within that same window if the full amount isn't returned." },
      { question: "What can I do if my landlord doesn't return my deposit?", answer: "Start by checking your local landlord-tenant law for the specific remedy it provides for a missed deadline or wrongful withholding — many jurisdictions offer a small claims court process for exactly this kind of dispute, and a local tenant rights organization or licensed attorney can advise on your specific situation." },
      { question: "Is a security deposit the same as first and last month's rent?", answer: "No — a security deposit is a separate, refundable safeguard against damage or unpaid rent, while first and last month's rent are actual rent payments applied to specific months of the tenancy, not held as a refundable buffer." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
