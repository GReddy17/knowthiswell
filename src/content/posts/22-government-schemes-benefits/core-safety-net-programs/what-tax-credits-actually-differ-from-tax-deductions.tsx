import React from 'react';
import { PostFrontmatter, QuizBankItem } from '@/types/post';
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
  title: "What Tax Credits Actually Differ From Tax Deductions",
  category: "government-schemes-benefits",
  order: 4,
  subtopic: "core-safety-net-programs",
  tags: ["tax credits", "tax deductions", "refundable credits", "earned income tax credit", "child tax credit"],
  date: "2026-09-25",
  updated: "2026-09-25",
  lastReviewed: "2026-09-25",
  excerpt: "A deduction lowers the income you're taxed on, so it's worth only your tax rate times the amount. A credit cuts the tax bill itself dollar for dollar, and a refundable credit can pay you even when you owe nothing, which is why credits like the EITC work as benefit programs.",
  summary: "A tax deduction reduces taxable income, so its value equals the deduction multiplied by the taxpayer's marginal tax rate (a $1,000 deduction saves $220 for someone in the 22% bracket), and itemized deductions only help if they exceed the standard deduction. A tax credit reduces the tax owed directly, dollar for dollar. Credits come in two kinds, per the IRS: nonrefundable credits can reduce tax only to zero, while refundable credits, such as the Earned Income Tax Credit and the refundable part of the Child Tax Credit, are paid out as a refund even when the credit exceeds the tax owed. That refundability is why the IRS and researchers treat credits like the EITC as one of the largest U.S. income-support programs for working families, and why eligible people with low incomes may need to file a return to receive money even if they aren't otherwise required to file. This is general information, not tax advice; rules and amounts change yearly.",
  sources: [
    { label: "IRS — Credits and deductions for individuals", url: "https://www.irs.gov/credits-deductions-for-individuals" },
    { label: "IRS — Earned Income Tax Credit (EITC)", url: "https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit-eitc" },
    { label: "IRS — Refundable tax credits", url: "https://www.irs.gov/credits-deductions/individuals/refundable-tax-credits" },
  ],
  seeAlso: [
    "personal-finance-basics/understanding-tax-deductions-vs-tax-credits",
    "personal-finance-basics/income-tax-basics-how-brackets-actually-work",
    "government-schemes-benefits/how-to-actually-apply-for-government-assistance-programs",
    "personal-finance-basics/what-withholding-means-and-why-refunds-happen",
    "government-schemes-benefits/what-social-security-actually-pays-out-and-when",
  ],
  glossary: [
    { term: "Tax deduction", definition: "An amount subtracted from income before tax is calculated. It lowers taxable income, so its value depends on your tax rate." },
    { term: "Tax credit", definition: "An amount subtracted directly from the tax you owe, dollar for dollar." },
    { term: "Refundable credit", definition: "A credit that can be paid to you as a refund if it's larger than the tax you owe, such as the Earned Income Tax Credit." },
    { term: "Nonrefundable credit", definition: "A credit that can reduce your tax bill to zero but not below it. Any leftover amount is lost unless a specific rule lets it carry forward." },
    { term: "Standard deduction", definition: "A fixed amount, set by law each year based on filing status, that most taxpayers subtract instead of itemizing individual deductions." },
    { term: "Marginal tax rate", definition: "The rate applied to your last dollar of taxable income: your top bracket. It's what determines how much a deduction is worth to you." },
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

export const quiz: QuizBankItem[] = [
  {"question": "What does a tax deduction reduce?", "difficulty": "easy", "options": [{"text": "Your taxable income", "correct": true, "explanation": "Tax is then figured on the smaller income."}, {"text": "Your tax bill, dollar for dollar", "correct": false, "explanation": "That's a credit."}, {"text": "Your Social Security benefits", "correct": false, "explanation": "Deductions don't affect those."}]},
  {"question": "Someone in the 12% bracket gets a $1,000 deduction. About how much tax do they save?", "difficulty": "easy", "options": [{"text": "$120", "correct": true, "explanation": "$1,000 x 12% = $120."}, {"text": "$1,000", "correct": false, "explanation": "That would be a $1,000 credit."}, {"text": "$12", "correct": false, "explanation": "12% of $1,000 is $120."}]},
  {"question": "Which saves more for most people: a $1,000 credit or a $1,000 deduction?", "difficulty": "easy", "options": [{"text": "The $1,000 credit", "correct": true, "explanation": "A credit cuts the bill by the full amount; a deduction only by your rate times the amount."}, {"text": "The $1,000 deduction", "correct": false, "explanation": "A deduction is worth only a fraction of its face value."}, {"text": "They're always equal", "correct": false, "explanation": "They'd be equal only at a 100% tax rate."}]},
  {"question": "You owe $400 in tax and qualify for a $1,000 refundable credit. What happens?", "difficulty": "medium", "options": [{"text": "Your tax drops to $0 and you get $600 back", "correct": true, "explanation": "Refundable credits pay out the excess."}, {"text": "Your tax drops to $0 and the extra $600 is lost", "correct": false, "explanation": "That's how a nonrefundable credit works."}, {"text": "Nothing, credits only apply if you owe more than the credit", "correct": false, "explanation": "No such rule."}]},
  {"question": "Same $400 tax bill, but the $1,000 credit is nonrefundable. What happens?", "difficulty": "medium", "options": [{"text": "Your tax drops to $0; the remaining $600 generally doesn't come back to you", "correct": true, "explanation": "Nonrefundable credits stop at zero, unless a specific carryforward rule applies."}, {"text": "You get a $600 check", "correct": false, "explanation": "Only refundable credits pay out."}, {"text": "You owe $1,400", "correct": false, "explanation": "Credits never increase what you owe."}]},
  {"question": "Why is the Earned Income Tax Credit often described as a benefit program?", "difficulty": "hard", "options": [{"text": "It's refundable, so low-income working families can receive it as cash even with little or no tax owed", "correct": true, "explanation": "That refundability turns it into income support, not just a tax cut."}, {"text": "It's paid by Social Security", "correct": false, "explanation": "It's administered by the IRS through the tax return."}, {"text": "It's only for retirees", "correct": false, "explanation": "It's for workers with earned income."}]},
  {"question": "Why might an itemized deduction give you no benefit at all?", "difficulty": "hard", "options": [{"text": "If your total itemized deductions are less than the standard deduction, you'd take the standard one instead", "correct": true, "explanation": "You pick the larger of the two, so smaller itemized amounts don't matter."}, {"text": "Itemized deductions are no longer allowed", "correct": false, "explanation": "They are, but most filers don't use them."}, {"text": "Because deductions only apply to businesses", "correct": false, "explanation": "Individuals have deductions too."}]},
  {"question": "A low-income worker isn't required to file a tax return. Why might they file anyway?", "difficulty": "medium", "options": [{"text": "To claim refundable credits like the EITC, which are only paid through a return", "correct": true, "explanation": "The IRS specifically encourages eligible workers to file to get the EITC."}, {"text": "Filing is always required regardless of income", "correct": false, "explanation": "Filing thresholds exist."}, {"text": "To increase their tax bracket", "correct": false, "explanation": "Filing doesn't change your bracket."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "A deduction lowers the income you're taxed on, so it saves only your tax rate times the amount: $1,000 is worth $120 in the 12% bracket.",
          "A credit lowers the tax bill itself, dollar for dollar: $1,000 is worth $1,000.",
          "Refundable credits, like the Earned Income Tax Credit, can pay you money even when you owe no tax, which makes them some of the largest support programs for working families.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Picture your taxes in two steps. First, figure out how much of your income gets taxed. Second, figure out the tax on it. A deduction works on step one: it shrinks the income that gets taxed, so you save only a slice of it, the slice your tax rate would have taken. A credit works on step two: it comes straight off the final bill. That&apos;s why a $1,000 credit is worth far more than a $1,000 deduction. Then there&apos;s one more twist. Some credits are &quot;refundable,&quot; meaning if the credit is bigger than your tax, the government pays you the difference. For many working families with modest incomes, those refundable credits are the biggest money event of the year.</div>}
        detailed={<div className="prose-p">Per the IRS, deductions reduce the amount of income subject to tax, while credits reduce the tax itself. A deduction&apos;s value is the deducted amount times your marginal rate, which is why it&apos;s worth more to higher earners; the brackets are explained in <TermLink href="/personal-finance-basics/income-tax-basics-how-brackets-actually-work">how tax brackets actually work</TermLink>. There&apos;s also a threshold effect: taxpayers choose either the standard deduction or itemized deductions, whichever is larger, so itemized items like mortgage interest or charitable gifts help only to the extent their total exceeds the standard deduction. Some deductions, such as student loan interest, are &quot;above the line&quot; adjustments available whether or not you itemize. Credits are dollar-for-dollar, and the IRS distinguishes nonrefundable credits, which can reduce tax only to zero, from refundable ones, which are paid out beyond zero. The Earned Income Tax Credit is fully refundable; the Child Tax Credit is partly refundable through the Additional Child Tax Credit; the American Opportunity education credit is partly refundable. Refundability is what makes these credits function as income support delivered through the tax system rather than just tax relief, and it&apos;s why the IRS urges eligible low-income workers to file even when they&apos;re under the filing threshold.</div>}
      />
      <FootnoteAside>Amounts and eligibility rules for credits and the standard deduction are set by law and adjusted most years, and Congress changes them fairly often. Check the IRS page for the specific tax year you&apos;re filing, and for your own situation, a tax professional or free IRS-certified volunteer (VITA) program.</FootnoteAside>

      <p>A companion piece in Personal Finance, <TermLink href="/personal-finance-basics/understanding-tax-deductions-vs-tax-credits">understanding tax deductions vs. tax credits</TermLink>, covers everyday filing terms. This one focuses on why the credit side matters as a benefit, and how it connects to <TermLink href="/government-schemes-benefits/how-to-actually-apply-for-government-assistance-programs">applying for government assistance programs</TermLink>, since tax credits are claimed on a return rather than through an application office.</p>

      <QuickCheck
        question="Two people each get a $2,000 deduction. One is in the 12% bracket, the other in the 32% bracket. How much does each save?"
        options={[
          { text: "$240 and $640", correct: true, explanation: "Correct. $2,000 x 12% = $240; $2,000 x 32% = $640. Deductions are worth more at higher rates." },
          { text: "$2,000 each", correct: false, explanation: "That would be true for a $2,000 credit, not a deduction." },
          { text: "$640 and $240", correct: false, explanation: "Reversed. The higher bracket saves more from the same deduction." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Same $1,000, very different value (baseline case)</h3>
      <div className="prose-p">A single filer in the 22% bracket owes $5,000 in tax. A $1,000 deduction lowers taxable income by $1,000, cutting tax by $1,000 &times; 22% = $220, to $4,780. A $1,000 credit cuts the bill itself to $4,000. The credit is worth about 4.5 times as much to this person.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Refundable vs. nonrefundable (edge case)</h3>
      <div className="prose-p">A part-time worker owes $300 in tax and qualifies for two credits: a $500 nonrefundable credit and a $1,200 refundable credit. The nonrefundable credit is applied first and can only take the bill from $300 to $0; the leftover $200 of it is generally lost. The refundable credit then has nothing left to offset, so the full $1,200 is paid as a refund. The order of application is set by the tax forms; the point is that only the refundable one can become a check.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The worker who didn&apos;t think they needed to file (applied case)</h3>
      <div className="prose-p">A parent earned $18,000 last year, had little tax withheld, and assumed there was no reason to file. But at that income with children they may qualify for a substantial EITC plus the refundable part of the Child Tax Credit, which together can run into thousands of dollars. Neither is paid automatically; both require filing a return. The IRS estimates that a meaningful share of eligible workers miss the EITC each year, which is why it runs an annual awareness campaign and free filing help.</div>

      <QuickCheck
        question="In Example 2, why is the $1,200 credit fully paid out while part of the $500 credit is lost?"
        options={[
          { text: "The $1,200 credit is refundable; the $500 one can only reduce tax to zero", correct: true, explanation: "Correct. Refundability is the difference between a tax cut and a payment." },
          { text: "Larger credits are always refundable", correct: false, explanation: "Refundability is set per credit by law, not by size." },
          { text: "The IRS pays out whichever credit is claimed first", correct: false, explanation: "Order matters for applying them, but only refundable credits can pay beyond zero." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Deduction vs. credit: where each one hits your tax"
        type="comparison"
        svgSrc="/diagrams/government-schemes-benefits-what-tax-credits-actually-differ-from-tax-deductions-comparison.svg"
        altText="A two-column comparison. Tax deduction: lowers taxable income before tax is figured, worth depends on your bracket (12% means $120 per $1,000), example student loan interest deduction. Tax credit: lowers the tax bill itself dollar for dollar, a $1,000 credit means $1,000 less tax owed, and refundable credits like the EITC can pay out beyond $0 owed."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking a $1,000 deduction saves $1,000.", fix: "Multiply by your marginal rate. At 22%, it saves $220." },
          { mistake: "Not filing because income was below the filing requirement.", fix: "Check eligibility for refundable credits like the EITC. They're only paid through a filed return." },
          { mistake: "Tracking itemized expenses without comparing to the standard deduction.", fix: "Add them up first. If the total is below the standard deduction, itemizing won't lower your tax." },
        ]}
      />
      <MisconceptionCallout
        myth="Tax credits and tax deductions are basically the same thing: both just lower your taxes."
        reality={<p>They act at different points. A deduction lowers the income your tax is calculated on, so it&apos;s worth only a fraction of its face value. A credit comes off the finished tax bill in full. And refundable credits go further than any deduction can: they can produce a payment to people who owe no tax at all, which is why the IRS treats the EITC as a key support for low- and moderate-income workers rather than just a tax break.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Find your marginal bracket so you can put a real dollar value on any deduction.",
          "Use the IRS EITC Assistant (on irs.gov) to check whether you qualify, even if you don't usually file.",
          "Compare your itemizable expenses against the standard deduction before keeping detailed records for itemizing.",
          "If your income is modest, look up a free IRS VITA site to file and claim credits at no cost.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between a tax credit and a tax deduction?", answer: "A deduction reduces the income you're taxed on; a credit reduces the tax you owe dollar for dollar. So a credit is worth more than a deduction of the same amount." },
          { question: "What is a refundable tax credit?", answer: "A credit that can be paid to you as a refund when it's larger than your tax bill. The Earned Income Tax Credit is the best-known example." },
          { question: "Is the Child Tax Credit refundable?", answer: "Partly. Part of it can be refunded through the Additional Child Tax Credit, subject to income and other rules that change by tax year." },
          { question: "How much is a tax deduction worth?", answer: "The deduction amount times your marginal tax rate. A $1,000 deduction is worth $100 at 10%, $220 at 22%, and $370 at 37%." },
          { question: "Do I have to file taxes to get the EITC?", answer: "Yes. The EITC is claimed on a federal tax return, so eligible workers need to file even if their income is below the normal filing requirement." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
