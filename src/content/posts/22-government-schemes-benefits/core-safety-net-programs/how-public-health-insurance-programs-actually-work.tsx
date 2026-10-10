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
  title: "How Public Health Insurance Programs Actually Work",
  category: "government-schemes-benefits",
  order: 5,
  subtopic: "core-safety-net-programs",
  tags: ["medicare", "medicaid", "chip", "public health insurance", "medicare enrollment"],
  date: "2026-09-26",
  updated: "2026-09-26",
  youtubeShort: false, youtubeLong: false,
  seoScore: 76, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-09-26",
  excerpt: "In the U.S., Medicare is mostly based on age or disability, while Medicaid and CHIP are based on income and run by each state. Medicare isn't free, Medicaid rules differ by state, and some people qualify for both.",
  summary: "The U.S. has three main public health insurance programs. Medicare, run by the federal government, covers people 65 and older, people under 65 who have received Social Security disability benefits for 24 months, and people with end-stage renal disease or ALS, per Medicare.gov and the Social Security Administration. It has parts: Part A (hospital, usually premium-free after about 10 years of Medicare-taxed work), Part B (doctor and outpatient care, with a monthly premium), Part C (Medicare Advantage plans from private insurers), and Part D (prescription drugs). Medicaid is jointly funded by the federal government and states and run by each state under federal rules, covering people with limited income and resources; states that adopted the Affordable Care Act expansion cover most adults up to 138% of the federal poverty level. CHIP covers children in families that earn too much for Medicaid but can't afford private coverage. People who qualify for both Medicare and Medicaid are called dual eligibles. Medicaid and CHIP applications are accepted year-round, while Medicare has set enrollment periods and late penalties.",
  sources: [
    { label: "Medicare.gov — Get started with Medicare", url: "https://www.medicare.gov/basics/get-started-with-medicare" },
    { label: "Medicaid.gov — Medicaid", url: "https://www.medicaid.gov/medicaid" },
    { label: "Medicaid.gov — Children's Health Insurance Program (CHIP)", url: "https://www.medicaid.gov/chip" },
    { label: "HealthCare.gov — Medicaid & CHIP coverage", url: "https://www.healthcare.gov/medicaid-chip/" },
    { label: "Social Security Administration — Medicare", url: "https://www.ssa.gov/medicare/" },
  ],
  seeAlso: [
    "government-schemes-benefits/how-to-actually-apply-for-government-assistance-programs",
    "government-schemes-benefits/what-social-security-actually-pays-out-and-when",
    "personal-finance-basics/health-insurance-basics-premiums-deductibles-copays",
    "government-schemes-benefits/how-unemployment-benefits-actually-get-calculated",
    "general-awareness-basics/understanding-public-vs-private-sector",
    "government-schemes-benefits/what-disability-benefits-actually-require-to-qualify",
    "government-schemes-benefits/what-housing-assistance-programs-actually-offer",
    "government-schemes-benefits/what-veterans-benefits-actually-include",
  ],
  glossary: [
    { term: "Medicare", definition: "The federal health insurance program for people 65 and older, certain younger people with disabilities, and people with end-stage renal disease or ALS." },
    { term: "Medicaid", definition: "A joint federal-state health coverage program for people with limited income and resources, run by each state within federal rules." },
    { term: "CHIP", definition: "The Children's Health Insurance Program, covering uninsured children in families whose income is too high for Medicaid but too low to afford private coverage." },
    { term: "Initial Enrollment Period", definition: "The 7-month window around your 65th birthday (3 months before, your birthday month, and 3 months after) when you can first sign up for Medicare." },
    { term: "Dual eligible", definition: "Someone who qualifies for both Medicare and Medicaid. Medicaid can then help with Medicare premiums and costs." },
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
  {"question": "What mainly determines eligibility for Medicare?", "difficulty": "easy", "options": [{"text": "Age (65+) or certain disabilities and conditions", "correct": true, "explanation": "Medicare isn't income-based."}, {"text": "Low income", "correct": false, "explanation": "That's the main basis for Medicaid."}, {"text": "Having children", "correct": false, "explanation": "Children are covered through Medicaid and CHIP, not Medicare."}]},
  {"question": "Who runs Medicaid day to day?", "difficulty": "easy", "options": [{"text": "Each state, within federal rules", "correct": true, "explanation": "That's why eligibility and benefits vary by state."}, {"text": "Private employers", "correct": false, "explanation": "Medicaid is a public program."}, {"text": "The Social Security Administration alone", "correct": false, "explanation": "SSA handles parts of Medicare enrollment, not Medicaid administration."}]},
  {"question": "Which Medicare part covers doctor visits and outpatient care?", "difficulty": "medium", "options": [{"text": "Part B", "correct": true, "explanation": "Part A is hospital, B is medical/outpatient, D is drugs."}, {"text": "Part A", "correct": false, "explanation": "Part A covers inpatient hospital care."}, {"text": "Part D", "correct": false, "explanation": "Part D covers prescription drugs."}]},
  {"question": "Why is Part A premium-free for most people?", "difficulty": "medium", "options": [{"text": "They or a spouse paid Medicare taxes while working for about 10 years", "correct": true, "explanation": "Roughly 40 quarters of Medicare-covered work."}, {"text": "Hospitals pay the premium", "correct": false, "explanation": "Hospitals don't pay beneficiaries' premiums."}, {"text": "Everyone gets every Medicare part free", "correct": false, "explanation": "Part B has a monthly premium for most people."}]},
  {"question": "Who is CHIP designed for?", "difficulty": "easy", "options": [{"text": "Children in families earning too much for Medicaid but unable to afford private insurance", "correct": true, "explanation": "It fills the gap above Medicaid income limits."}, {"text": "Retirees over 65", "correct": false, "explanation": "That's Medicare."}, {"text": "Only children of federal employees", "correct": false, "explanation": "CHIP isn't tied to a parent's employer."}]},
  {"question": "Someone under 65 starts receiving Social Security disability benefits. When do they usually get Medicare?", "difficulty": "hard", "options": [{"text": "After 24 months of disability benefits", "correct": true, "explanation": "The exceptions are ALS (no waiting period) and end-stage renal disease (its own rules)."}, {"text": "Immediately", "correct": false, "explanation": "There's generally a 24-month waiting period."}, {"text": "Never, since Medicare is only for people 65+", "correct": false, "explanation": "Certain younger people with disabilities qualify."}]},
  {"question": "When can you apply for Medicaid?", "difficulty": "medium", "options": [{"text": "Any time of year", "correct": true, "explanation": "Per HealthCare.gov, Medicaid and CHIP don't have a limited enrollment period."}, {"text": "Only during a November open enrollment", "correct": false, "explanation": "That's for Marketplace plans, not Medicaid."}, {"text": "Only on your birthday", "correct": false, "explanation": "No such rule."}]},
  {"question": "What does 'dual eligible' mean?", "difficulty": "hard", "options": [{"text": "Qualifying for both Medicare and Medicaid", "correct": true, "explanation": "Medicaid can then help cover Medicare premiums and cost-sharing."}, {"text": "Having two private insurance plans", "correct": false, "explanation": "The term refers to the two public programs."}, {"text": "Being covered in two states at once", "correct": false, "explanation": "It's about programs, not states."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Medicare is federal and based mostly on age (65+) or disability. Medicaid and CHIP are based on income and run by each state.",
          "Medicare isn't free: most people pay a monthly premium for Part B, plus deductibles and coinsurance.",
          "Medicare has fixed sign-up windows and late penalties. Medicaid and CHIP accept applications any time of year.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The easiest way to keep these straight: <strong>Medicare is about age, Medicaid is about income.</strong> Medicare is a national program you pay into through paycheck taxes over your working life, and it covers you when you turn 65 or if you become seriously disabled. It&apos;s the same across the country. Medicaid is for people with low income, and each state runs its own version, so who qualifies depends on where you live. CHIP is Medicaid&apos;s partner for kids: it covers children whose parents earn a bit too much for Medicaid but not enough to buy private insurance easily. And some people, often older adults with low income, qualify for both Medicare and Medicaid at once.</div>}
        detailed={<div className="prose-p"><strong>Medicare</strong> is federal social insurance. Eligibility, per Medicare.gov and SSA: age 65+, or under 65 after 24 months of Social Security disability benefits, or end-stage renal disease, or ALS (no waiting period). It&apos;s split into parts. Part A (inpatient hospital, skilled nursing, hospice) is premium-free if you or your spouse paid Medicare payroll taxes for about 10 years (40 quarters). Part B (doctors, outpatient, preventive care) carries a monthly premium, an annual deductible, and generally 20% coinsurance. Part C, Medicare Advantage, lets private insurers deliver A and B benefits, usually with drug coverage and network rules. Part D covers prescriptions. Timing matters: the Initial Enrollment Period is 7 months around your 65th birthday, and signing up for Part B late without other qualifying coverage brings a premium penalty that can last as long as you have Part B. <strong>Medicaid</strong> is a federal-state partnership: the federal government sets minimum rules and shares the cost, and each state sets eligibility levels and benefits within them. Under the Affordable Care Act, states could expand Medicaid to most adults with income up to 138% of the federal poverty level; most states have. <strong>CHIP</strong> covers children above Medicaid limits, with income thresholds set by each state. Medicaid and CHIP applications are accepted year-round through the state agency or HealthCare.gov. The edge case: dual eligibles use Medicare as primary coverage, and Medicaid then helps pay Medicare premiums and cost-sharing.</div>}
      />
      <FootnoteAside>This page covers the U.S. system. Premium amounts, income limits and state rules change every year, so check Medicare.gov, your state Medicaid agency, or HealthCare.gov for current figures. This is general information, not personal benefits advice.</FootnoteAside>

      <p>If you&apos;re new to insurance vocabulary like premiums, deductibles and coinsurance, <TermLink href="/personal-finance-basics/health-insurance-basics-premiums-deductibles-copays">health insurance basics</TermLink> explains them first. For the application process itself, see <TermLink href="/government-schemes-benefits/how-to-actually-apply-for-government-assistance-programs">how to apply for government assistance programs</TermLink>.</p>

      <QuickCheck
        question="A 40-year-old with low income and no disability wants public coverage. Which program is most likely to apply?"
        options={[
          { text: "Medicaid, depending on their state's income limits", correct: true, explanation: "Correct. Medicaid is income-based, and in expansion states most low-income adults qualify." },
          { text: "Medicare", correct: false, explanation: "Medicare is based on age 65+ or specific disabilities and conditions, not income." },
          { text: "CHIP", correct: false, explanation: "CHIP is for children (and in some states, pregnant people), not adults generally." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Turning 65 (baseline case)</h3>
      <div className="prose-p">A woman turns 65 in July after 30 years of work. Her Initial Enrollment Period runs from April through October. She signs up in May. Part A is premium-free because she paid Medicare taxes for far more than 10 years. Part B has a monthly premium, deducted from her Social Security check. She then chooses between Original Medicare plus a Part D drug plan (often with a supplemental policy) or a Medicare Advantage plan. Signing up on time means no late penalty.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A family split across programs (the income edge)</h3>
      <div className="prose-p">A married couple with two children earns just over their state&apos;s Medicaid limit for adults. The parents don&apos;t qualify for Medicaid, but the children qualify for CHIP, because the state&apos;s CHIP income limit for children is higher. The parents look at subsidized Marketplace coverage on HealthCare.gov instead. One household, three different sources of coverage, all driven by where their income falls relative to each program&apos;s limit.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Disability and dual eligibility (real-world use)</h3>
      <div className="prose-p">A 52-year-old man stops working after a serious illness and is approved for Social Security disability benefits. His Medicare coverage starts after 24 months of those benefits. His income is low, so he also qualifies for his state&apos;s Medicaid. Once Medicare starts, it pays first, and Medicaid helps cover his Part B premium and the costs Medicare doesn&apos;t. Knowing the 24-month rule lets him plan for coverage during the gap, which Medicaid can fill if he&apos;s eligible.</div>

      <QuickCheck
        question="In Example 2, why do the children have coverage when the parents don't?"
        options={[
          { text: "CHIP's income limit for children is higher than the state's Medicaid limit for adults", correct: true, explanation: "Correct. Different programs have different thresholds, so one family can land in several programs." },
          { text: "Children automatically get Medicare", correct: false, explanation: "Medicare doesn't cover children based on age." },
          { text: "The parents forgot to apply for themselves", correct: false, explanation: "Their income was above the adult limit, so they wouldn't qualify either way." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Medicare vs. Medicaid and CHIP"
        type="comparison"
        svgSrc="/diagrams/government-schemes-benefits-how-public-health-insurance-programs-actually-work-comparison.svg"
        altText="A two-column comparison. Medicare: based on age 65 and older or disability; one federal program, same rules nationwide; set enrollment windows with late penalties. Medicaid and CHIP: based on income; run by each state, so rules vary; apply any time of year. Some people qualify for both."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Missing the Medicare sign-up window around age 65.", fix: "Mark the 7-month Initial Enrollment Period. If you have employer coverage, check whether it lets you delay Part B without a penalty." },
          { mistake: "Assuming Medicaid rules are the same everywhere.", fix: "Check your own state's Medicaid agency. Income limits and covered services differ by state." },
          { mistake: "Not applying because you think you earn too much.", fix: "Check anyway. Children often qualify for CHIP at incomes where adults don't, and expansion states have higher adult limits." },
        ]}
      />
      <MisconceptionCallout
        myth="Medicare and Medicaid are basically the same free government healthcare."
        reality={<p>They&apos;re different programs with different rules. Medicare is based on age or disability and is the same nationwide, but it isn&apos;t free: most people pay a monthly Part B premium, plus deductibles and usually 20% coinsurance on Part B services. Medicaid is based on income, run by each state, and usually has little or no cost to enrollees. Someone can qualify for one, both, or neither. Many veterans can also use VA health care, a separate system covered in <TermLink href="/government-schemes-benefits/what-veterans-benefits-actually-include">what veterans benefits actually include</TermLink>.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "If you're nearing 65, find your Initial Enrollment Period dates and whether any current coverage affects Part B timing.",
          "If your income is low or has dropped, check your state's Medicaid limits through HealthCare.gov or your state agency. You can apply any time.",
          "If you have children, check CHIP limits separately from adult Medicaid limits.",
          "Keep proof of income and household size ready; applications ask for both.",
          "For personal guidance, contact your State Health Insurance Assistance Program (SHIP) for free Medicare counseling.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between Medicare and Medicaid?", answer: "Medicare is a federal program mainly for people 65 and older or with certain disabilities. Medicaid is a joint federal-state program for people with limited income, run by each state." },
          { question: "Is Medicare free at 65?", answer: "Part A is premium-free for most people who worked about 10 years. Part B has a monthly premium for most people, and there are deductibles and coinsurance." },
          { question: "Who qualifies for CHIP?", answer: "Children in families whose income is too high for Medicaid but who can't afford private coverage. Each state sets its own income limits, and some states also cover pregnant people." },
          { question: "Can you have both Medicare and Medicaid?", answer: "Yes. People who qualify for both are called dual eligibles. Medicare pays first, and Medicaid can help cover premiums and other costs." },
          { question: "When can you apply for Medicaid?", answer: "Any time of year. Unlike Marketplace plans or Medicare, Medicaid and CHIP don't have a limited open enrollment period." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
