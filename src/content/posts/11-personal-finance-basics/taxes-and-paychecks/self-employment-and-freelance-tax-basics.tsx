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
  title: "Self-Employment and Freelance Tax Basics",
  category: "personal-finance-basics",
  order: 35,
  subtopic: "taxes-and-paychecks",
  tags: ["self-employment tax", "freelance taxes", "estimated taxes", "1099", "quarterly taxes"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Freelance income doesn't have an employer withholding taxes automatically, which is why self-employed workers owe both income tax and the full self-employment tax themselves, usually in quarterly installments.",
  summary: "Self-employed and freelance workers must pay both regular income tax and self-employment tax (which covers the full Social Security and Medicare contribution normally split between employer and employee), typically through quarterly estimated tax payments since no employer is withholding on their behalf.",
  sources: [
    { label: "IRS — Self-Employment Tax (Social Security and Medicare Taxes)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" },
    { label: "IRS — Estimated Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" },
  ],
  seeAlso: [
    "personal-finance-basics/income-tax-basics-how-brackets-actually-work",
    "personal-finance-basics/reading-a-pay-stub-what-each-line-means",
    "personal-finance-basics/common-tax-filing-terms-explained",
  ],
  glossary: [
    {"term":"Self-employment tax","definition":"A tax covering Social Security and Medicare contributions for self-employed individuals, currently 15.3% of net earnings, replacing the split contribution an employer and employee would otherwise share."},
    {"term":"Estimated taxes","definition":"Quarterly tax payments made directly to the IRS by people whose income isn't subject to automatic paycheck withholding, such as freelancers and the self-employed."},
    {"term":"Net earnings (self-employment)","definition":"Business income remaining after deducting allowable business expenses, which is the amount self-employment tax and income tax are calculated on."},
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
      "Freelance and self-employment income has no employer withholding it automatically, so the worker is responsible for setting aside and paying both income tax and self-employment tax themselves.",
      "Self-employment tax, currently 15.3% of net earnings, covers Social Security and Medicare contributions that an employer and employee would otherwise split between them.",
      "Most self-employed workers owing more than a small threshold must pay estimated taxes quarterly, not just once a year at filing time, to avoid an underpayment penalty.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">When you work as a regular employee, your employer automatically withholds income tax and splits the Social Security/Medicare contribution with you. When you freelance or run your own business, none of that happens automatically — you&apos;re responsible for figuring out what you owe and sending it to the IRS yourself, usually in quarterly installments called <TermLink href="/personal-finance-basics/self-employment-and-freelance-tax-basics">estimated taxes</TermLink>.</div>}
      detailed={<div className="prose-p">A regular employee&apos;s Social Security and Medicare contribution (7.65% of wages) is matched by an equal employer contribution, for a combined 15.3%. A self-employed worker has no employer to split this with, so the <TermLink href="/personal-finance-basics/self-employment-and-freelance-tax-basics">self-employment tax</TermLink> requires paying the full 15.3% themselves, calculated on <TermLink href="/personal-finance-basics/self-employment-and-freelance-tax-basics">net earnings</TermLink> (business income minus allowable business expenses) — though half of that self-employment tax is itself deductible when calculating income tax. On top of that, regular income tax still applies to net earnings at the taxpayer&apos;s normal bracket. Because no employer is withholding either of these automatically, the IRS generally expects self-employed workers with a meaningful tax bill to pay in quarterly estimated installments throughout the year, based on projected annual income — falling short of the required quarterly amount can trigger an underpayment penalty even if the full amount is paid at filing time.</div>}
      />
      <FootnoteAside>The 15.3% self-employment tax rate and specific quarterly due dates can change or have income caps in a given tax year — always confirm the current rate and thresholds directly on irs.gov before estimating a real tax bill.</FootnoteAside>

      <p>
      Seeing the two tax layers — self-employment tax and income tax — calculated side by side makes clear why freelance income can carry a noticeably higher effective rate than the same amount of W-2 wages.
      </p>

      <QuickCheck
      question="Why do self-employed workers pay a 15.3% self-employment tax while regular employees only see 7.65% deducted from their paycheck for the same type of contribution?"
      options={[
      { text: "Self-employed workers are taxed at a punitive extra rate as a penalty for not having a traditional employer", correct: false, explanation: "It isn't a penalty — a regular employee's employer matches their 7.65% contribution with an equal 7.65% of their own, for a combined 15.3%. A self-employed worker has no employer to provide that match, so they must cover the full 15.3% themselves." },
      { text: "Because a self-employed worker is effectively both the employer and the employee for Social Security and Medicare purposes, so they must cover both halves of the standard 15.3% combined contribution themselves", correct: true, explanation: "Correct. An employee's 7.65% is only half of the total 15.3% contribution — the employer quietly pays the other half. Self-employment removes that employer-side match, so the full amount falls on the individual." },
      { text: "Because self-employment tax includes state income tax bundled in, unlike a regular paycheck", correct: false, explanation: "Self-employment tax specifically covers Social Security and Medicare — it doesn't include state income tax, which is a separate, additional obligation depending on the state." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Calculating self-employment tax on net earnings (baseline case)</h3>
      <div className="prose-p">
      A freelancer has $40,000 in net earnings after business expenses. Self-employment tax: $40,000 × 15.3% = $6,120. This is separate from and in addition to whatever regular income tax applies to that $40,000 at their bracket.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A part-time side freelancer with a regular job too (edge case / variation)</h3>
      <div className="prose-p">
      A full-time W-2 employee also earns $8,000 net from freelance work on the side. Their W-2 job already has income tax and the employee-side Social Security/Medicare withheld through payroll — but the $8,000 freelance income is separate and still subject to self-employment tax on its own: $8,000 × 15.3% = $1,224, plus regular income tax on that $8,000 at their bracket, generally paid through estimated taxes since no employer is withholding on the side income.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Missing quarterly estimated payments (real-world / applied case)</h3>
      <div className="prose-p">
      A new freelancer earns steady income all year but doesn&apos;t realize estimated taxes are due quarterly, planning instead to pay everything at filing time in April. Even after paying the full amount owed in April, the IRS may assess an underpayment penalty for the quarters where too little was paid in relative to when the income was actually earned — a cost that could have been avoided by paying in estimated installments throughout the year as income came in.
      </div>

      <QuickCheck
      question="A freelancer wants to avoid an underpayment penalty. What generally matters most?"
      options={[
      { text: "Paying the full annual tax bill in one lump sum by the April filing deadline", correct: false, explanation: "Paying the full amount by April doesn't necessarily avoid the penalty — the IRS generally expects payment closer to when the income was earned, through quarterly estimated payments, not all at once at year end." },
      { text: "Making quarterly estimated tax payments throughout the year that reasonably track when the income was actually earned", correct: true, explanation: "Correct. The estimated tax system is built around paying as income is earned, roughly quarterly — this is what avoids the underpayment penalty, not simply paying the total eventually." },
      { text: "Filing the tax return as early as possible in the following year", correct: false, explanation: "Filing early affects when a refund or balance is resolved, but it doesn't address the timing requirement behind quarterly estimated payments made during the year the income was earned." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Employee vs self-employed: who covers the Social Security/Medicare contribution"
      type="comparison"
      svgSrc="/diagrams/personal-finance-basics-self-employment-and-freelance-tax-basics-employee-vs-self-employed.svg"
      altText="Two side-by-side diagrams: one showing an Employee's 7.65% contribution matched by an equal 7.65% Employer contribution for a combined 15.3%, and one showing a Self-Employed worker covering the full 15.3% alone since there is no separate employer to match it."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Not setting aside money for taxes throughout the year, then facing a large unexpected bill at filing time.", fix: "Set aside a portion of every freelance payment received — many freelancers target roughly 25-30% as a starting estimate, then adjust based on actual bracket and self-employment tax — into a separate account for taxes." },
      { mistake: "Assuming self-employment tax is the only tax owed on freelance income.", fix: "Remember regular income tax still applies to net earnings on top of the separate 15.3% self-employment tax — both are owed." },
      { mistake: "Paying the full year's tax bill in April instead of in quarterly estimated installments.", fix: "Check the current quarterly estimated tax due dates on irs.gov and pay through the year as income is earned, to avoid a potential underpayment penalty." },
      ]}
      />
      <MisconceptionCallout
      myth="Freelance and self-employment income is taxed at a special, separate lower or higher overall rate than regular wages."
      reality={<p>There isn&apos;t a separate special rate — self-employment income is subject to the same income tax brackets as any other income, plus a 15.3% self-employment tax that covers the Social Security/Medicare contribution an employer would otherwise partly cover for a W-2 employee. The total can feel higher simply because there&apos;s no employer quietly absorbing half of that contribution.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Estimate self-employment tax owed on net earnings"
      fields={[
      { key: "netEarnings", label: "Net earnings from self-employment ($)", defaultValue: 40000 },
      { key: "seTaxRatePercent", label: "Self-employment tax rate (%)", defaultValue: 15.3, step: 0.1 },
      ]}
      resultLabel="Estimated self-employment tax owed"
      formula="selfEmploymentTaxOwed"
      formatResult="currency"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Set aside a percentage of every freelance payment for taxes in a separate account as soon as it's received, rather than waiting until filing time.",
      "Check the current quarterly estimated tax due dates and thresholds on irs.gov to see if you're required to pay quarterly.",
      "Track business expenses carefully throughout the year, since they reduce the net earnings that both income tax and self-employment tax are calculated on.",
      "For a real quarterly payment schedule or entity-structure decision (like forming an LLC or S-corp), consult a licensed tax professional rather than general literacy content like this.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is self-employment tax?", answer: "It's a tax, currently 15.3% of net earnings, that covers the Social Security and Medicare contributions self-employed workers must pay in full themselves, since there's no employer to cover half of it as there would be for a regular employee." },
      { question: "Do freelancers pay both income tax and self-employment tax?", answer: "Yes. Self-employment tax covers Social Security and Medicare specifically; regular income tax still applies separately to the same net earnings at the taxpayer's normal bracket." },
      { question: "How often do self-employed workers need to pay taxes?", answer: "Most self-employed workers who expect to owe more than a small threshold are expected to pay estimated taxes quarterly throughout the year, rather than just once at filing time, to avoid a potential underpayment penalty." },
      { question: "Can I deduct business expenses before calculating self-employment tax?", answer: "Yes — self-employment tax and income tax are both calculated on net earnings, meaning business income after allowable business expenses have been subtracted, not on gross revenue." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
