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
  title: "How Student Loan Forgiveness Programs Actually Work",
  category: "government-schemes-benefits",
  order: 7,
  subtopic: "core-safety-net-programs",
  tags: ["student loan forgiveness", "PSLF", "Public Service Loan Forgiveness", "income-driven repayment", "Repayment Assistance Plan", "Teacher Loan Forgiveness", "loan discharge"],
  date: "2026-09-30",
  updated: "2026-09-30",
  lastReviewed: "2026-09-30",
  excerpt: "U.S. federal student loan forgiveness isn't one program. It's a few separate routes: 120 payments in public service (PSLF), 20 to 30 years on an income-driven plan, five years of teaching, or a discharge for disability, death or school misconduct.",
  summary: "U.S. federal student loan forgiveness works through several separate programs, each with its own trigger, and none of them covers private loans. Public Service Loan Forgiveness (PSLF) cancels the remaining Direct Loan balance after 120 qualifying monthly payments made while working full-time for a government agency or qualifying nonprofit, and that forgiveness is not federally taxable. Income-driven repayment (IDR) plans forgive whatever is left after a long repayment period: 20 or 25 years on the older plans, and 30 years on the Repayment Assistance Plan (RAP) that became available on July 1, 2026. As of September 2026, IDR forgiveness granted after December 31, 2025 counts as federal taxable income unless an exclusion such as insolvency applies. Teacher Loan Forgiveness cancels up to $17,500 or $5,000 after five complete, consecutive years of full-time teaching at a qualifying low-income school. Separate discharges cancel loans for total and permanent disability, death, a school closure or school misconduct; a 2025 law made death and disability discharges permanently exempt from federal income tax. Rules changed significantly in 2025 and 2026, so borrowers should confirm their own status on StudentAid.gov or with their loan servicer.",
  sources: [
    { label: "Federal Student Aid (StudentAid.gov) — Public Service Loan Forgiveness", url: "https://studentaid.gov/manage-loans/forgiveness-cancellation/public-service" },
    { label: "Federal Student Aid (StudentAid.gov) — Income-Driven Repayment Plans", url: "https://studentaid.gov/manage-loans/repayment/plans/income-driven" },
    { label: "Federal Student Aid (StudentAid.gov) — Teacher Loan Forgiveness", url: "https://studentaid.gov/manage-loans/forgiveness-cancellation/teacher" },
    { label: "Federal Student Aid (StudentAid.gov) — Total and Permanent Disability Discharge", url: "https://studentaid.gov/manage-loans/forgiveness-cancellation/disability-discharge" },
    { label: "Federal Student Aid (StudentAid.gov) — Avoiding Student Aid Scams", url: "https://studentaid.gov/resources/scams" },
    { label: "Internal Revenue Service — Publication 4681, Canceled Debts, Foreclosures, Repossessions, and Abandonments", url: "https://www.irs.gov/publications/p4681" },
    { label: "U.S. Congress — H.R. 1 (Public Law 119-21), the 2025 reconciliation act creating RAP and amending IRC section 108(f)(5)", url: "https://www.congress.gov/bill/119th-congress/house-bill/1" },
  ],
  seeAlso: [
    "personal-finance-basics/understanding-student-loans-general-mechanics",
    "government-schemes-benefits/what-tax-credits-actually-differ-from-tax-deductions",
    "government-schemes-benefits/what-disability-benefits-actually-require-to-qualify",
    "government-schemes-benefits/how-to-actually-apply-for-government-assistance-programs",
    "personal-finance-basics/what-happens-when-you-default-on-a-loan",
  ],
  glossary: [
    { term: "Public Service Loan Forgiveness (PSLF)", definition: "A federal program that cancels the remaining balance on Direct Loans after 120 qualifying monthly payments made while working full-time for a government organization or qualifying nonprofit." },
    { term: "Qualifying payment", definition: "A full, on-time monthly payment made under a qualifying repayment plan while meeting a program's employment or plan rules. Only these count toward forgiveness." },
    { term: "Income-driven repayment (IDR)", definition: "Federal repayment plans that set the monthly payment as a share of income and forgive any balance left after a set number of years (20 to 30, depending on the plan)." },
    { term: "Repayment Assistance Plan (RAP)", definition: "An income-driven plan created by a 2025 law and available from July 1, 2026, with payments of 1% to 10% of adjusted gross income and forgiveness of any remaining balance after 30 years." },
    { term: "Discharge", definition: "Cancellation of a federal student loan because of a specific event, such as total and permanent disability, death, a school closing or school misconduct, rather than years of payments." },
    { term: "Insolvency exclusion", definition: "An IRS rule that lets you exclude canceled debt from taxable income to the extent your total debts exceeded your total assets right before the cancellation (see IRS Publication 4681)." },
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
  {"question": "How many qualifying monthly payments does Public Service Loan Forgiveness require?", "difficulty": "easy", "options": [{"text": "120", "correct": true, "explanation": "That's roughly 10 years of payments, which don't have to be consecutive."}, {"text": "60", "correct": false, "explanation": "60 is five years; PSLF requires twice that."}, {"text": "240", "correct": false, "explanation": "That's closer to an IDR forgiveness timeline (20 years)."}, {"text": "360", "correct": false, "explanation": "360 payments is the 30-year RAP forgiveness timeline."}]},
  {"question": "Which kind of loan can be forgiven through PSLF?", "difficulty": "easy", "options": [{"text": "Federal Direct Loans", "correct": true, "explanation": "Other federal loan types generally must be consolidated into a Direct Consolidation Loan first."}, {"text": "Private bank student loans", "correct": false, "explanation": "Private loans aren't eligible for federal forgiveness programs."}, {"text": "Credit card debt used for tuition", "correct": false, "explanation": "Only federal student loans qualify."}, {"text": "Any loan, as long as you work in public service", "correct": false, "explanation": "The loan type matters as much as the job."}]},
  {"question": "As of September 2026, how is PSLF forgiveness treated for federal income tax?", "difficulty": "medium", "options": [{"text": "It isn't counted as federal taxable income", "correct": true, "explanation": "PSLF forgiveness is excluded from federal income tax."}, {"text": "It's taxed as ordinary income", "correct": false, "explanation": "That's the post-2025 treatment for most IDR forgiveness, not PSLF."}, {"text": "It's taxed at a flat 10%", "correct": false, "explanation": "There's no special flat tax on PSLF."}, {"text": "It's taxed only if you earn over $100,000", "correct": false, "explanation": "PSLF forgiveness has no income test for tax purposes."}]},
  {"question": "After how many years does the Repayment Assistance Plan (RAP) forgive a remaining balance?", "difficulty": "medium", "options": [{"text": "30 years", "correct": true, "explanation": "That's longer than the 20 or 25 years on the older IDR plans."}, {"text": "10 years", "correct": false, "explanation": "10 years of qualifying payments is PSLF's timeline, not RAP's."}, {"text": "20 years", "correct": false, "explanation": "That's the timeline on some older IDR plans."}, {"text": "RAP never forgives balances", "correct": false, "explanation": "RAP forgives any balance left after 30 years."}]},
  {"question": "A borrower gets $40,000 of IDR forgiveness in 2027. How is it generally treated for federal tax?", "difficulty": "hard", "options": [{"text": "As taxable income, unless an exclusion such as insolvency applies", "correct": true, "explanation": "The temporary federal exclusion covered discharges through December 31, 2025 only."}, {"text": "Tax-free, like all forgiveness", "correct": false, "explanation": "PSLF and death or disability discharges are tax-free; IDR forgiveness after 2025 generally isn't."}, {"text": "Taxable only at the state level", "correct": false, "explanation": "It's generally federally taxable; state treatment varies."}, {"text": "It must be repaid if you get a raise", "correct": false, "explanation": "Forgiveness isn't clawed back for future raises."}]},
  {"question": "How much can a highly qualified full-time secondary math teacher receive through Teacher Loan Forgiveness?", "difficulty": "medium", "options": [{"text": "Up to $17,500", "correct": true, "explanation": "The higher amount applies to qualifying math, science and special education teachers; others can get up to $5,000."}, {"text": "Up to $5,000 only", "correct": false, "explanation": "$5,000 is the cap for other qualifying teachers."}, {"text": "The entire balance, with no cap", "correct": false, "explanation": "Teacher Loan Forgiveness has fixed caps; PSLF has no dollar cap."}, {"text": "$1,000 per year taught", "correct": false, "explanation": "The benefit comes as a lump amount after five qualifying years."}]},
  {"question": "Can the same five years of teaching count toward both Teacher Loan Forgiveness and PSLF?", "difficulty": "hard", "options": [{"text": "No, the same period of service can't count for both", "correct": true, "explanation": "Teachers who plan to use PSLF need to weigh whether claiming Teacher Loan Forgiveness first is worth it."}, {"text": "Yes, they stack automatically", "correct": false, "explanation": "The programs don't allow double credit for the same service."}, {"text": "Yes, but only for special education teachers", "correct": false, "explanation": "The no-double-counting rule applies to everyone."}, {"text": "Only if you teach in two states", "correct": false, "explanation": "Location doesn't change the rule."}]},
  {"question": "Someone calls offering to 'get your loans forgiven fast' for an upfront fee. What does Federal Student Aid say?", "difficulty": "easy", "options": [{"text": "You never have to pay for help with federal student aid; applying is free", "correct": true, "explanation": "Upfront fees and promises of instant forgiveness are hallmarks of scams."}, {"text": "Paying a fee speeds up PSLF", "correct": false, "explanation": "No third party can speed up federal forgiveness."}, {"text": "Only licensed companies can submit PSLF forms", "correct": false, "explanation": "You submit forms yourself through StudentAid.gov for free."}, {"text": "You should give them your FSA ID so they can act for you", "correct": false, "explanation": "Never share your FSA ID; doing so can let others change your account."}]},
];

const h2 = "scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink";
const h3 = "scroll-mt-10 font-display text-xl font-bold text-ink mb-4";

export default function Post() {
  return (
    <>
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
        <strong>This entry explains how U.S. federal student loan forgiveness generally works as of September 2026. It is not financial, tax or legal advice.</strong> Student loan rules changed significantly in 2025 and 2026 and may change again. Confirm your own eligibility, payment count and plan on StudentAid.gov or with your loan servicer, and ask a tax professional how any forgiveness affects your taxes.
      </div>

      <h2 className={h2}>Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Forgiveness isn't one program: it's public service (PSLF), long-term income-driven repayment, teaching, or a discharge for a specific event.",
          "PSLF cancels the remaining Direct Loan balance after 120 qualifying payments while working full-time for government or a qualifying nonprofit, tax-free.",
          "Income-driven plans forgive what's left after 20 to 30 years. As of September 2026, that forgiveness is generally federally taxable again.",
          "Private loans don't qualify, and you never need to pay anyone to apply.",
        ]}
      />

      <h2 className={h2}>The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of federal student loan forgiveness as four different doors, not one. The first is a job door: work full-time in public service and make 10 years of qualifying payments, and the rest is canceled. The second is a time door: pay a share of your income for 20 to 30 years, and whatever&apos;s left is canceled. The third is a teaching door: teach five years in a qualifying low-income school and get up to $17,500 off. The fourth is an event door: if you become totally and permanently disabled, die, or your school closed or misled you, the loan can be discharged. Each door has its own rules, and walking through the wrong one, or thinking you&apos;re on the path when you&apos;re not, is the most common way borrowers lose years.</div>}
        detailed={<div className="prose-p"><strong>PSLF</strong> requires three things at once: Direct Loans (other federal loans must be consolidated), a qualifying repayment plan (an income-driven plan or the 10-year Standard plan; RAP payments also count), and full-time employment (generally at least 30 hours a week) with a U.S. federal, state, local or tribal government or a 501(c)(3) nonprofit. Only months that meet all three count as qualifying payments, and you need 120 of them, which don&apos;t have to be consecutive. <strong>IDR forgiveness</strong> works differently: payments are a share of income, so a lower earner may never pay off the balance, and the remainder is canceled after 20 or 25 years on the older plans (IBR, PAYE, ICR) or 30 years on the <strong>Repayment Assistance Plan</strong>, created by a 2025 law (Public Law 119-21) and available from July 1, 2026, with payments of 1% to 10% of adjusted gross income. New loans made on or after July 1, 2026 can only use RAP or a Tiered Standard plan, and the SAVE plan has ended; borrowers who were on it are being moved to other plans. The tax treatment differs by door. PSLF is excluded from federal income tax. A temporary federal exclusion for other forgiveness covered discharges through December 31, 2025, so IDR forgiveness after that is generally taxable income unless an exclusion like insolvency applies (IRS Publication 4681). Death and total and permanent disability discharges were made permanently tax-free by the same 2025 law. If you&apos;re new to how these loans accrue interest, start with <TermLink href="/personal-finance-basics/understanding-student-loans-general-mechanics">how student loans work</TermLink>.</div>}
      />
      <FootnoteAside>This page covers U.S. federal student loans. Private student loans from banks or online lenders aren&apos;t eligible for these programs; any relief depends on the lender&apos;s own policies. Some states and employers run their own repayment-assistance programs for nurses, teachers or rural doctors, so check with your state&apos;s higher-education agency as well.</FootnoteAside>

      <QuickCheck
        question="Which three things must all be true for a month to count toward PSLF?"
        options={[
          { text: "Direct Loans, a qualifying repayment plan, and full-time qualifying employment", correct: true, explanation: "Correct. Miss any one and that month doesn't count." },
          { text: "A high income, a private loan, and a government job", correct: false, explanation: "Private loans don't qualify, and income level isn't a requirement." },
          { text: "Any federal loan, any plan, and any employer", correct: false, explanation: "Loan type, plan and employer all have specific rules." },
        ]}
      />

      <h2 className={h2}>Worked examples</h2>

      <h3 className={h3}>Example 1: A nonprofit nurse on PSLF (baseline case)</h3>
      <div className="prose-p">Maya is a full-time nurse at a 501(c)(3) hospital with $60,000 in Direct Loans. She enrolls in an income-driven plan and certifies her employment each year with the PSLF Help Tool on StudentAid.gov. Suppose her payments average $280 a month (an illustrative figure; real amounts depend on income and family size). After 120 qualifying payments she has paid about $33,600, and the remaining balance is canceled. Under current federal law that cancellation isn&apos;t taxable income. The key move wasn&apos;t the job alone: it was being on a qualifying plan and certifying employment, so every one of those months actually counted.</div>

      <h3 className={h3}>Example 2: The teacher who can&apos;t double-count (edge case)</h3>
      <div className="prose-p">Daniel teaches high-school chemistry full-time at a school on the federal low-income directory. After five complete, consecutive years he could apply for Teacher Loan Forgiveness of up to $17,500. But he works for a public school, so those same years could also count toward PSLF, and the rules don&apos;t let the same period of service count for both. If he takes the $17,500, the payments he made during those five years won&apos;t count toward PSLF, so his PSLF count effectively starts after them. If his balance is large and he plans to stay in public service, waiting for PSLF may cancel far more; if his balance is small or he may leave teaching, the guaranteed $17,500 may be worth more. It&apos;s a real trade-off, and his servicer or StudentAid.gov can show his current PSLF count before he decides.</div>

      <h3 className={h3}>Example 3: The tax bill after IDR forgiveness (applied case)</h3>
      <div className="prose-p">Lena reaches the end of her income-driven plan in 2027 and $40,000 is forgiven. Because the temporary federal exclusion ended with 2025 discharges, that $40,000 is generally added to her federal taxable income for 2027. If it were all taxed at a 22% marginal rate, the federal bill would be about $8,800 (a simplified illustration; real brackets and state rules vary). There&apos;s an important exception: if her total debts exceeded her total assets right before the forgiveness, she may be able to exclude some or all of it as insolvent, using IRS Form 982 as described in Publication 4681. The applied lesson: if you&apos;re on track for IDR forgiveness, talk to a tax professional well before the year it happens.</div>

      <QuickCheck
        question="Lena's $40,000 IDR forgiveness in 2027 is most likely:"
        options={[
          { text: "Federally taxable income, unless an exclusion like insolvency applies", correct: true, explanation: "Correct. The temporary federal exclusion covered discharges through 2025 only." },
          { text: "Always tax-free, like PSLF", correct: false, explanation: "PSLF has its own tax exclusion; IDR forgiveness after 2025 generally doesn't." },
          { text: "Repayable if her income rises later", correct: false, explanation: "Forgiven balances aren't clawed back." },
        ]}
      />

      <h2 className={h2}>How it works (visual)</h2>
      <DiagramBlock
        title="The four main routes to federal student loan forgiveness"
        type="comparison"
        svgSrc="/diagrams/government-schemes-benefits-how-student-loan-forgiveness-programs-actually-work-comparison.svg"
        altText="A comparison of four routes to U.S. federal student loan forgiveness as of September 2026. PSLF: 120 qualifying payments while working full-time in government or a qualifying nonprofit, no dollar cap, not federally taxable. Income-driven repayment: remaining balance forgiven after 20 to 25 years on older plans or 30 years on RAP, generally federally taxable after 2025. Teacher Loan Forgiveness: up to 17,500 or 5,000 dollars after five consecutive years at a low-income school. Discharges: total and permanent disability, death, school closure or misconduct, with death and disability discharges not federally taxable."
      />
      <p>The routes differ on three axes: what triggers forgiveness (a job, time, a teaching record or an event), whether there&apos;s a dollar cap, and whether the canceled amount is taxed. Most confusion comes from mixing them up, such as assuming IDR forgiveness is tax-free because PSLF is.</p>

      <h2 className={h2}>Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a public-service job alone qualifies you for PSLF.", fix: "Check all three conditions: Direct Loans, a qualifying plan, and certified full-time qualifying employment." },
          { mistake: "Never certifying employment until year 10.", fix: "Certify each year or when you change jobs with the PSLF Help Tool, so problems surface early." },
          { mistake: "Assuming all forgiveness is tax-free.", fix: "PSLF and death or disability discharges are federally tax-free; IDR forgiveness after 2025 generally isn't." },
          { mistake: "Paying a company to 'enroll' you in forgiveness.", fix: "Applying is free on StudentAid.gov. Never share your FSA ID or pay upfront fees." },
          { mistake: "Consolidating without checking the effect on your payment count or plan options.", fix: "Ask your servicer how consolidation affects your count and which plans you'll be eligible for before you do it." },
        ]}
      />
      <MisconceptionCallout
        myth="Student loan forgiveness was canceled, so none of it exists anymore."
        reality={<p>Broad one-time cancellation was struck down by the Supreme Court in 2023, and the SAVE plan has ended, but the programs written into law are still running as of September 2026: PSLF, income-driven forgiveness (now including RAP), Teacher Loan Forgiveness, and the disability, death, closed-school and borrower-defense discharges. What changed is the details, especially which repayment plans are available and how forgiveness is taxed.</p>}
      />

      <h2 className={h2}>What to do next</h2>
      <ActionChecklist
        items={[
          "Log in to StudentAid.gov and list each loan's type (Direct, FFEL, Perkins, or private).",
          "Check which repayment plan you're on, and whether it counts for the program you're aiming at.",
          "If you work in government or a nonprofit, run the PSLF Help Tool and certify your employment now.",
          "If you teach at a low-income school, compare Teacher Loan Forgiveness with PSLF before applying for either.",
          "If you're within a few years of IDR forgiveness, ask a tax professional about the likely tax bill and the insolvency exclusion.",
          "Ignore anyone who charges a fee to apply or asks for your FSA ID.",
        ]}
      />

      <h2 className={h2}>FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does Public Service Loan Forgiveness work?", answer: "After 120 qualifying monthly payments on Direct Loans under a qualifying plan, made while working full-time for a government organization or qualifying nonprofit, the remaining balance is canceled. As of September 2026 it isn't federally taxable." },
          { question: "Is student loan forgiveness taxable in 2026?", answer: "It depends on the program. PSLF and death or disability discharges are excluded from federal income tax. Income-driven repayment forgiveness after December 31, 2025 is generally federally taxable unless an exclusion such as insolvency applies. State rules vary." },
          { question: "How long until income-driven repayment forgives my loans?", answer: "20 or 25 years on the older IDR plans, depending on the plan and loan type, and 30 years on the Repayment Assistance Plan. Your servicer can tell you your current count." },
          { question: "Can private student loans be forgiven?", answer: "Not through federal programs. Private lenders sometimes discharge loans on death or disability under their own policies, so check your loan agreement." },
          { question: "What happened to the SAVE plan?", answer: "SAVE has ended, and borrowers who were on it are being moved to other repayment plans. Check StudentAid.gov or your servicer for your options and deadlines." },
        ]}
      />

      <h2 className={h2}>Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className={h2}>See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
