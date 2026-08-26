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
  title: "Understanding a Mortgage Document (General Mechanics)",
  category: "legal-documentation-howtos",
  order: 11,
  subtopic: "property-and-housing-documentation",
  tags: ["mortgage", "loan document", "real estate", "homeownership", "legal documentation how-tos"],
  date: "2026-08-26",
  updated: "2026-08-26",
  lastReviewed: "2026-08-26",
  excerpt: "A mortgage isn't one document — it's a loan agreement (the note) paired with a separate document (the mortgage or deed of trust) that gives the lender a legal claim on the property if the loan isn't repaid.",
  summary: "A mortgage is a loan used to purchase real property, structured as two related but distinct legal documents: a promissory note (the promise to repay a specific amount under specific terms) and a mortgage or deed of trust (the document that pledges the property itself as collateral, giving the lender the right to foreclose if payments aren't made) — understanding both pieces separately is what makes the overall obligation clear.",
  sources: [
    { label: "Consumer Financial Protection Bureau — What Is a Mortgage?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-mortgage-en-99/" },
    { label: "Cornell Legal Information Institute — Mortgage", url: "https://www.law.cornell.edu/wex/mortgage" },
    { label: "Consumer Financial Protection Bureau — Closing Disclosure Explainer", url: "https://www.consumerfinance.gov/owning-a-home/closing-disclosure/" },
  ],
  seeAlso: [
    "legal-documentation-howtos/property-deeds-explained",
    "legal-documentation-howtos/home-inspection-reports-explained",
  ],
  glossary: [
    {"term":"Promissory note","definition":"The legal document in which a borrower promises to repay a specific loan amount under specific terms (interest rate, schedule, length) — the core IOU behind a mortgage."},
    {"term":"Deed of trust","definition":"A document used in some jurisdictions in place of a traditional mortgage, in which the property is held by a neutral third party (a trustee) as security for the loan until it's repaid."},
    {"term":"Foreclosure","definition":"The legal process by which a lender can take possession of and sell a property after the borrower fails to make required loan payments, as permitted by the mortgage or deed of trust."},
    {"term":"Amortization","definition":"The process of gradually paying off a loan through regular payments that cover both interest and principal over the loan's term."},
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
      "A mortgage is really two linked documents: a promissory note (the promise to repay) and a mortgage or deed of trust (the pledge of the property as collateral).",
      "The mortgage/deed of trust is what gives the lender the legal right to foreclose — take and sell the property — if the borrower stops making payments as promised.",
      "Monthly mortgage payments are calculated through amortization, blending interest and principal so the loan balance reaches zero by the end of the agreed term.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A mortgage is a loan for buying a home, and it&apos;s actually made up of two documents signed together: one where the borrower promises to pay back a specific amount over time (with interest), and another where the borrower agrees the lender can take the home if those payments stop. The second part is what makes it a &quot;secured&quot; loan — the house itself backs the promise.</div>}
      detailed={<div className="prose-p">The <TermLink href="/legal-documentation-howtos/understanding-a-mortgage-document-general-mechanics">promissory note</TermLink> is the financial core: it specifies the loan amount, interest rate, payment schedule, and loan term (commonly 15 or 30 years in the U.S.). Separately, the mortgage itself (or, in some jurisdictions, a <TermLink href="/legal-documentation-howtos/understanding-a-mortgage-document-general-mechanics">deed of trust</TermLink> involving a neutral third-party trustee) is the security instrument — it&apos;s recorded against the property and gives the lender a legal claim that survives even if the original note is sold to another company, which happens routinely in the mortgage industry. If payments stop, this security instrument is what allows the lender to pursue <TermLink href="/legal-documentation-howtos/understanding-a-mortgage-document-general-mechanics">foreclosure</TermLink> — a formal legal process (procedures vary by jurisdiction) to take and sell the property to recover the unpaid balance. Monthly payments are calculated through <TermLink href="/legal-documentation-howtos/understanding-a-mortgage-document-general-mechanics">amortization</TermLink>: each payment is split between interest (calculated on the remaining balance) and principal (reducing that balance), with the interest portion shrinking and the principal portion growing over the life of the loan, even though the total payment usually stays level.</div>}
      />
      <FootnoteAside>In the U.S., lenders are required to provide a standardized Closing Disclosure document before closing that itemizes the loan terms, projected payments, and closing costs — reviewing it against the earlier Loan Estimate is a concrete, practical way to check that the final terms match what was originally quoted.</FootnoteAside>

      <p>
      The calculator below shows the amortization mechanics directly — how principal, interest rate, and loan term combine into a single monthly payment figure.
      </p>

      <QuickCheck
      question="A homeowner sees that their loan was &quot;sold&quot; to a different mortgage servicing company. Does this change the terms of their loan?"
      options={[
      { text: "Yes, the new company can set entirely new terms since they now own the loan", correct: false, explanation: "Selling a loan changes who services and collects payments on it, but the underlying terms set in the original promissory note and mortgage/deed of trust remain legally binding regardless of who currently holds or services the loan." },
      { text: "No — the core terms (rate, payment amount, schedule) come from the original promissory note and mortgage, and those don't change just because the loan is sold to a new servicer", correct: true, explanation: "Correct. Selling and servicing a mortgage loan is a routine, separate business practice in the industry — the legal terms borrowers agreed to stay fixed under the original documents unless a formal modification is separately agreed to." },
      { text: "It depends on whether the borrower approves the sale in advance", correct: false, explanation: "Loan sales between lenders/servicers typically don't require the borrower's advance approval — the borrower is generally just notified of the change in who to send payments to." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Calculating a standard 30-year mortgage payment (baseline case)</h3>
      <div className="prose-p">
      A $300,000 loan at a 6% annual interest rate over 30 years amortizes to a monthly principal-and-interest payment of roughly $1,799. This figure comes purely from the loan mechanics — it doesn&apos;t yet include property taxes, homeowner&apos;s insurance, or (if applicable) private mortgage insurance, which many lenders bundle into the total monthly payment through an escrow account.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same loan amount over 15 years instead of 30 (edge case / variation)</h3>
      <div className="prose-p">
      That same $300,000 at 6% over 15 years instead produces a monthly payment of roughly $2,532 — notably higher — but because the loan amortizes over half the time, total interest paid over the life of the loan drops sharply compared to the 30-year version. This tradeoff between monthly payment size and total interest cost is exactly why loan term is one of the biggest levers in a mortgage decision.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Missing payments and the path toward foreclosure (real-world / applied case)</h3>
      <div className="prose-p">
      A borrower experiences a job loss and misses several mortgage payments. The exact process and timeline that follows (notices, opportunities to catch up or modify the loan, and eventually foreclosure proceedings if nothing is resolved) is governed by the mortgage/deed of trust document and by state or national foreclosure law, which both vary significantly by jurisdiction. Many lenders and government programs offer hardship options like forbearance or loan modification — contacting the loan servicer promptly, rather than avoiding contact, is generally the step that preserves the most options.
      </div>

      <QuickCheck
      question="Which document specifically gives a mortgage lender the right to foreclose on a property?"
      options={[
      { text: "The promissory note alone", correct: false, explanation: "The promissory note is the borrower's promise to repay — it establishes the debt, but the specific legal right to take the property is created by the separate security instrument." },
      { text: "The mortgage (or deed of trust), which pledges the property as collateral for the loan described in the promissory note", correct: true, explanation: "Correct. The mortgage or deed of trust is the security instrument — it's what creates the lender's legal claim on the property itself, distinct from the note's separate promise to repay." },
      { text: "Neither document — foreclosure requires an entirely separate, unrelated legal filing with no connection to the original loan paperwork", correct: false, explanation: "Foreclosure is a legal process, but it's grounded in the rights established by the mortgage/deed of trust that was signed at the time of the loan — it doesn't arise independently of that original paperwork." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="A mortgage's two linked documents"
      type="detail"
      svgSrc="/diagrams/legal-documentation-howtos-understanding-a-mortgage-document-general-mechanics-two-documents.svg"
      altText="A diagram showing a promissory note (loan amount, interest rate, schedule) linked to a mortgage or deed of trust (property pledged as collateral, right to foreclose on default) as two connected but distinct legal documents."
      />
      <p>
      These two documents are signed together and function together, but they legally do different jobs — one creates the debt, the other secures it against the property.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a mortgage is a single, simple document rather than a note plus a separate security instrument.", fix: "Understand the promissory note (the debt) and the mortgage/deed of trust (the collateral pledge) as two connected but legally distinct pieces." },
      { mistake: "Comparing loan offers only by monthly payment, without checking the interest rate, term, and total interest cost.", fix: "Compare the full picture: interest rate, term length, total interest paid over the life of the loan, and any fees — not just the monthly number." },
      { mistake: "Avoiding contact with a loan servicer after missing a payment out of concern it will accelerate foreclosure.", fix: "Contact the servicer promptly when facing hardship — many offer forbearance or modification options, and staying in contact generally preserves more options than going silent." },
      ]}
      />
      <MisconceptionCallout
      myth="If a mortgage loan is sold to a different company, the borrower has to renegotiate their loan terms from scratch."
      reality={<p>Selling a mortgage loan to a different servicer or investor is a routine industry practice that changes who collects payments, not the legally binding terms set in the original promissory note and mortgage. The rate, payment schedule, and term stay the same unless a separate, formal modification is agreed to.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Estimate a monthly mortgage payment"
      description="Calculates the principal-and-interest portion of a monthly mortgage payment based on loan amount, annual interest rate, and loan term. Does not include taxes, insurance, or other escrowed costs."
      fields={[
      { key: "principal", label: "Loan amount ($)", defaultValue: 300000, min: 0, step: 5000 },
      { key: "rate", label: "Annual interest rate (%)", defaultValue: 6, min: 0, max: 20, step: 0.125 },
      { key: "years", label: "Loan term (years)", defaultValue: 30, min: 1, max: 40, step: 1 },
      ]}
      formula="loanMonthlyPayment"
      formatResult="currency"
      resultLabel="Estimated monthly principal & interest payment"
      disclaimer="This is a simplified principal-and-interest estimate, not a loan offer or full payment quote — it excludes taxes, insurance, PMI, and fees, and actual loan terms and eligibility are determined by a lender."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Understand that a mortgage is two documents: a promissory note (the debt) and a mortgage/deed of trust (the collateral pledge).",
      "Compare loan offers on interest rate, term, and total interest cost, not just the monthly payment number.",
      "Review the Closing Disclosure (or local equivalent) against the earlier loan estimate before closing.",
      "If facing missed payments, contact the loan servicer promptly to discuss hardship options rather than waiting.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What's the difference between a promissory note and a mortgage?", answer: "The promissory note is the borrower's promise to repay a specific loan under specific terms; the mortgage (or deed of trust) is the separate document that pledges the property as collateral for that promise, giving the lender a legal claim if payments stop." },
      { question: "Can my mortgage terms change if my loan is sold to a different company?", answer: "Generally no — selling a loan changes who services and collects payments on it, but the legally binding terms from the original note and mortgage remain in effect unless a separate formal modification is agreed to." },
      { question: "What happens if I stop making mortgage payments?", answer: "Missing payments can eventually lead to foreclosure, a formal legal process that varies by jurisdiction — but many lenders offer hardship programs like forbearance or modification, and contacting the servicer early generally preserves more options than avoiding contact." },
      { question: "Is a deed of trust the same as a mortgage?", answer: "They serve the same core function (securing a loan against real property) but differ structurally — a mortgage is typically a two-party document between borrower and lender, while a deed of trust involves a neutral third-party trustee, and which one is used depends on the jurisdiction." },
      { question: "Does a lower monthly payment always mean a better mortgage deal?", answer: "Not necessarily — a lower monthly payment can come from a longer loan term, which often means paying significantly more total interest over the life of the loan. Comparing total cost, not just the monthly figure, gives a fuller picture." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
