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
  title: "Reading a Pay Stub: What Each Line Means",
  category: "personal-finance-basics",
  order: 31,
  subtopic: "taxes-and-paychecks",
  tags: ["pay stub", "gross pay", "net pay", "payroll deductions", "paycheck literacy"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "A pay stub is a receipt for your paycheck — gross pay minus a stack of separate deductions equals what actually lands in your bank account.",
  summary: "A pay stub breaks a paycheck into gross pay (total earned before anything is taken out), a list of individual deductions (taxes, benefits, retirement contributions), and net pay (gross minus every deduction) — the number that actually gets deposited.",
  sources: [
    { label: "U.S. Department of Labor — Wages and the Fair Labor Standards Act", url: "https://www.dol.gov/agencies/whd/flsa" },
    { label: "IRS — Understanding Employment Taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/understanding-employment-taxes" },
    { label: "Consumer Financial Protection Bureau — Pay Stub Basics", url: "https://www.consumerfinance.gov/consumer-tools/" },
  ],
  seeAlso: [
    "personal-finance-basics/income-tax-basics-how-brackets-actually-work",
    "personal-finance-basics/what-withholding-means-and-why-refunds-happen",
    "personal-finance-basics/what-a-budget-actually-is-income-vs-expenses",
  ],
  glossary: [
    {"term":"Gross pay","definition":"The total amount an employee earns for a pay period before any taxes, benefits, or other deductions are subtracted."},
    {"term":"Net pay","definition":"The amount actually deposited into an employee's bank account after every deduction is subtracted from gross pay — also called take-home pay."},
    {"term":"Payroll deduction","definition":"Any amount withheld from gross pay before it reaches the employee, including taxes, retirement contributions, and benefit premiums."},
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
      "A pay stub has three layers: gross pay (everything earned), a list of individual deductions, and net pay (what's left after every deduction is subtracted).",
      "Deductions fall into distinct categories — taxes (federal, state, FICA), pre-tax benefits (retirement, health insurance), and post-tax deductions — and each category affects your taxable income differently.",
      "This is general paycheck literacy, not personalized tax advice — for a specific paycheck discrepancy or filing question, your employer's payroll department or a licensed tax professional is the right resource, not a general reference article.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A pay stub is a receipt for a paycheck. At the top sits <TermLink href="/personal-finance-basics/reading-a-pay-stub-what-each-line-means">gross pay</TermLink> — everything earned before anything is taken out. Below that is a list of <TermLink href="/personal-finance-basics/reading-a-pay-stub-what-each-line-means">payroll deductions</TermLink> — federal and state income tax, Social Security and Medicare (often labeled FICA), and anything voluntarily deducted like a 401(k) contribution or health insurance premium. Subtract every deduction from gross pay and what&apos;s left is <TermLink href="/personal-finance-basics/reading-a-pay-stub-what-each-line-means">net pay</TermLink> — the number that actually lands in the bank account.</div>}
      detailed={<div className="prose-p">Deductions aren&apos;t all the same kind of subtraction. Pre-tax deductions (traditional 401(k) contributions, many health insurance premiums) are subtracted from gross pay <em>before</em> income tax is calculated, which lowers the income the IRS taxes that period — this is why increasing a 401(k) contribution can shrink take-home pay by less than the contribution amount itself. Post-tax deductions (Roth 401(k) contributions, wage garnishments, some benefit premiums) come out after tax is already calculated on the full gross amount. FICA taxes (Social Security and Medicare) are calculated on gross pay directly and, unlike income tax withholding, aren&apos;t adjusted by a W-4 — they&apos;re flat-rate payroll taxes set by federal law. A single pay stub is really several separate calculations stacked on top of each other, not one lump subtraction.</div>}
      />
      <FootnoteAside>Year-to-date (YTD) totals on a pay stub — often a separate column next to the current-period numbers — track cumulative gross pay, deductions, and net pay since January 1, which is what a W-2 at year&apos;s end ultimately summarizes.</FootnoteAside>

      <p>
      Once gross pay and the deduction categories are separated out, the actual arithmetic connecting them is simple — it&apos;s identifying which category a given line belongs to that trips people up.
      </p>

      <QuickCheck
      question="An employee increases their traditional 401(k) contribution by $100 per paycheck. Does their take-home pay drop by exactly $100?"
      options={[
      { text: "Yes — take-home pay always drops by exactly the contribution amount", correct: false, explanation: "This ignores that a traditional 401(k) contribution is a pre-tax deduction — it lowers the income that federal (and often state) income tax is calculated on, so the paycheck's income tax withholding also drops slightly, partially offsetting the $100." },
      { text: "No — because a traditional 401(k) contribution is pre-tax, it also lowers the income used to calculate tax withholding, so take-home pay typically drops by somewhat less than $100", correct: true, explanation: "Correct. Pre-tax deductions reduce taxable income for that pay period, which lowers withholding slightly — the net effect on take-home pay is smaller than the raw contribution amount, though FICA taxes still apply to the full gross pay regardless." },
      { text: "No — because 401(k) contributions never affect any tax calculation", correct: false, explanation: "Traditional 401(k) contributions specifically do reduce the income subject to federal income tax withholding for that period — that's the entire point of a pre-tax deduction." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A straightforward biweekly pay stub (baseline case)</h3>
      <div className="prose-p">
      Gross pay for the period: $2,000. Deductions: federal income tax $220, state income tax $80, Social Security (6.2%) $124, Medicare (1.45%) $29, health insurance premium $60. Total deductions: $513. Net pay: $2,000 − $513 = $1,487 — the number that actually deposits.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Adding a pre-tax 401(k) contribution changes the tax base (edge case / variation)</h3>
      <div className="prose-p">
      Same $2,000 gross pay, but now with a $100 pre-tax 401(k) contribution added. Federal and state income tax are now calculated on $1,900, not $2,000, so those two lines shrink slightly (say federal drops to $209, state to $76 — a combined $15 less than before) while Social Security and Medicare still apply to the full $2,000 (since FICA isn&apos;t affected by a 401(k) deduction). Total deductions: $124 + $29 + $60 + $209 + $76 + $100 (the contribution itself) = $598. Net pay: $2,000 − $598 = $1,402 — a drop of $85 from the Example 1 net pay, not the full $100 contributed, because the income tax lines shrank too.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why year-to-date totals matter for catching a payroll error (real-world / applied case)</h3>
      <div className="prose-p">
      An employee notices their Social Security withholding this period is $150 instead of the usual $124 on the same $2,000 gross pay. Comparing to the YTD Social Security total against YTD gross pay (both printed on the stub) can confirm whether this is a one-time correction, a payroll system error, or — for a high earner late in the year — an expected effect of a different mechanism (Social Security tax stops applying once YTD wages cross the annual wage base the SSA sets each year, so a sudden drop to $0 near year&apos;s end is normal, not an error). Spotting an unexplained change against the YTD trend, rather than just the current period alone, is what actually flags a genuine payroll discrepancy worth raising with an employer&apos;s payroll department.
      </div>

      <QuickCheck
      question="Near the end of the year, a high earner notices their Social Security withholding suddenly drops to $0 on their pay stub. What does this most likely indicate?"
      options={[
      { text: "A payroll error that should be reported as a mistake immediately", correct: false, explanation: "This is a well-known, expected mechanism, not necessarily an error — Social Security tax applies only up to an annual wage base the SSA sets each year; once year-to-date wages cross that threshold, no further Social Security tax is withheld for the rest of the year." },
      { text: "The employee's year-to-date wages have likely crossed the annual Social Security wage base, above which no further Social Security tax is withheld that year", correct: true, explanation: "Correct. This is a normal, expected pattern for high earners, not a payroll mistake — Medicare tax, by contrast, has no equivalent wage base and continues on all earnings." },
      { text: "The employer has stopped paying Social Security tax on the employee's behalf entirely going forward", correct: false, explanation: "The wage base cap resets each calendar year — withholding resumes at the start of the next year on wages up to that year's new base, it isn't a permanent stop." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="From gross pay to net pay: the deduction stack"
      type="flow"
      svgSrc="/diagrams/personal-finance-basics-reading-a-pay-stub-what-each-line-means-deduction-stack.svg"
      altText="A vertical stacked bar starting with a tall box labeled Gross Pay at the top, followed by four progressively subtracted slices labeled Federal and State Income Tax, Social Security and Medicare (FICA), Pre-Tax Benefits and Retirement, and Post-Tax Deductions, ending in a final shorter box at the bottom labeled Net Pay (Take-Home)."
      />
      <p>
      Each slice represents a genuinely separate calculation — some (pre-tax deductions) change what the tax-calculation slices above them are based on, while FICA is calculated on the original gross figure regardless of what else has already been deducted.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a raise or a benefit change will move net pay by the exact same dollar amount as the change itself.", fix: "Check which deduction category is affected — pre-tax changes shift the tax-calculation base too, so the net-pay effect is rarely a 1:1 match with the raw dollar change." },
      { mistake: "Treating a single pay period's numbers as the full picture when investigating a possible payroll error.", fix: "Compare against the year-to-date (YTD) totals printed on the same stub — some apparent anomalies (like Social Security withholding stopping) are normal once annual thresholds are considered." },
      { mistake: "Confusing FICA (Social Security and Medicare) with federal income tax withholding.", fix: "Remember FICA is a flat-rate payroll tax set by federal law and isn't adjusted by a W-4, while income tax withholding is estimated based on W-4 elections and can vary paycheck to paycheck." },
      ]}
      />
      <MisconceptionCallout
      myth="Every dollar deducted from a paycheck for taxes and benefits reduces take-home pay by exactly that same dollar amount."
      reality={<p>Only true for post-tax deductions. Pre-tax deductions (like a traditional 401(k) contribution or many health insurance premiums) also reduce the income that federal and state income tax withholding is calculated on that period — so take-home pay typically drops by somewhat less than the raw pre-tax deduction amount, since the income tax lines shrink too.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Calculate net pay from gross pay and total deductions"
      fields={[
      { key: "grossPay", label: "Gross pay this period ($)", defaultValue: 2000 },
      { key: "totalDeductions", label: "Total deductions this period ($)", defaultValue: 513 },
      ]}
      resultLabel="Net pay (take-home)"
      formula="netPayFromGross"
      formatResult="currency"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Pull up your most recent pay stub and identify which category each deduction line actually belongs to: tax, pre-tax benefit, or post-tax deduction.",
      "Check the year-to-date totals against the current period's numbers at least once a year — it's the fastest way to catch a genuine payroll discrepancy.",
      "If a number looks wrong, raise it with your employer's payroll department first — they have access to your actual withholding elections and history, which a general reference article can't account for.",
      "For any real tax filing question tied to your specific situation, consult a licensed tax professional or the IRS directly rather than relying on general literacy content like this.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What's the difference between gross pay and net pay?", answer: "Gross pay is everything earned before any deductions; net pay is what's left after every tax, benefit, and other deduction is subtracted — the actual amount deposited." },
      { question: "Why did my take-home pay change even though my hourly rate didn't?", answer: "A change in any deduction — a new benefit election, a change in tax withholding, hitting an annual wage base cap — can change net pay without any change to gross pay or hourly rate." },
      { question: "What does FICA mean on a pay stub?", answer: "FICA stands for the Federal Insurance Contributions Act and refers to the combined Social Security and Medicare payroll taxes, which are calculated on gross pay at flat federal rates rather than being adjusted by a W-4." },
      { question: "Is a pre-tax or post-tax deduction better for take-home pay?", answer: "A pre-tax deduction reduces the income used to calculate income tax withholding, so it typically reduces take-home pay by less than the deduction amount itself, compared to an equivalent post-tax deduction." },
      { question: "Why did my Social Security withholding suddenly stop?", answer: "Social Security tax only applies up to an annual wage base the Social Security Administration sets each year — once year-to-date wages cross that threshold, no further Social Security tax is withheld until the next calendar year." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
