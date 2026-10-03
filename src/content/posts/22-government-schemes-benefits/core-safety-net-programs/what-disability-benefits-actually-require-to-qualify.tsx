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
  title: "What Disability Benefits Actually Require to Qualify",
  category: "government-schemes-benefits",
  order: 6,
  subtopic: "core-safety-net-programs",
  tags: ["disability benefits", "SSDI", "SSI", "substantial gainful activity", "Social Security disability", "disability appeal"],
  date: "2026-09-27",
  updated: "2026-09-27",
  youtubeShort: false, youtubeLong: false,
  seoScore: 81, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-09-27",
  excerpt: "U.S. Social Security disability requires a medical condition expected to last 12+ months that stops you from earning above a monthly limit ($1,690 in 2026) in any job, not just your old one. SSDI also needs work credits; SSI needs low income and assets.",
  summary: "To qualify for U.S. Social Security disability benefits, you must have a medically determinable physical or mental impairment that is expected to last at least 12 months or result in death, and that prevents you from doing substantial gainful activity (SGA). In 2026, SGA means earning more than $1,690 a month ($2,830 if you're blind). The Social Security Administration (SSA) decides using a five-step process: whether you're working above SGA, whether the condition is severe, whether it meets a listing in SSA's medical 'Blue Book', whether you can do your past relevant work, and whether you can adjust to any other work given your age, education and experience. There are two programs. Social Security Disability Insurance (SSDI) is based on your work record and generally requires 40 work credits with 20 earned in the last 10 years (fewer if you're younger); it has a five-month waiting period, and Medicare starts after 24 months of entitlement. Supplemental Security Income (SSI) is needs-based, with a 2026 federal payment of up to $994 a month for an individual and a $2,000 resource limit. Many initial claims are denied, and you have 60 days to appeal each decision.",
  sources: [
    { label: "Social Security Administration — Disability Benefits: How You Qualify", url: "https://www.ssa.gov/benefits/disability/qualify.html" },
    { label: "Social Security Administration — Substantial Gainful Activity amounts", url: "https://www.ssa.gov/oact/cola/sga.html" },
    { label: "Social Security Administration — Disability Evaluation Under Social Security (Blue Book)", url: "https://www.ssa.gov/disability/professionals/bluebook/" },
    { label: "20 CFR 404.1520 — Evaluation of disability in general (five-step process)", url: "https://www.ssa.gov/OP_Home/cfr20/404/404-1520.htm" },
    { label: "Social Security Administration — The Red Book: What's New in 2026", url: "https://www.ssa.gov/redbook/newfor2026.htm" },
    { label: "Social Security Administration — Appeal a decision", url: "https://www.ssa.gov/appeals/" },
  ],
  seeAlso: [
    "government-schemes-benefits/what-social-security-actually-pays-out-and-when",
    "government-schemes-benefits/how-public-health-insurance-programs-actually-work",
    "government-schemes-benefits/how-to-actually-apply-for-government-assistance-programs",
    "government-schemes-benefits/how-unemployment-benefits-actually-get-calculated",
    "personal-finance-basics/understanding-retirement-accounts-basic-mechanics",
    "government-schemes-benefits/how-student-loan-forgiveness-programs-actually-work",
    "government-schemes-benefits/what-housing-assistance-programs-actually-offer",
  ],
  glossary: [
    { term: "SSDI", definition: "Social Security Disability Insurance: benefits for disabled workers who paid enough Social Security taxes, based on their earnings record." },
    { term: "SSI", definition: "Supplemental Security Income: a needs-based federal payment for disabled, blind or older people with very limited income and assets." },
    { term: "Substantial gainful activity (SGA)", definition: "Work earning above a monthly limit set each year ($1,690 in 2026 for non-blind applicants); earning above it generally means SSA won't find you disabled." },
    { term: "Blue Book", definition: "SSA's list of medical impairments and criteria that, if met, qualify as disabling at step 3." },
    { term: "Residual functional capacity (RFC)", definition: "SSA's assessment of the most you can still do physically and mentally despite your condition, used at steps 4 and 5." },
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
  {"question": "How long must a condition be expected to last for Social Security disability?", "difficulty": "easy", "options": [{"text": "At least 12 months, or result in death", "correct": true, "explanation": "Short-term conditions don't qualify under SSA's definition."}, {"text": "At least 30 days", "correct": false, "explanation": "That's far shorter than SSA's 12-month rule."}, {"text": "There's no duration requirement", "correct": false, "explanation": "Duration is part of the legal definition of disability."}]},
  {"question": "What's the main difference between SSDI and SSI?", "difficulty": "easy", "options": [{"text": "SSDI depends on your work record; SSI depends on financial need", "correct": true, "explanation": "SSDI is insurance you paid into; SSI is needs-based."}, {"text": "SSDI is for children and SSI is for adults", "correct": false, "explanation": "Both have adult rules; SSI also covers children."}, {"text": "They're the same program with two names", "correct": false, "explanation": "They have different eligibility rules and payment amounts."}]},
  {"question": "In 2026, a non-blind applicant earning $2,000 a month from work would usually be found:", "difficulty": "medium", "options": [{"text": "Not disabled at step 1, because they're above the $1,690 SGA limit", "correct": true, "explanation": "Earning above SGA generally ends the evaluation at step 1."}, {"text": "Automatically disabled", "correct": false, "explanation": "Working above SGA points the other way."}, {"text": "Eligible for both SSDI and SSI", "correct": false, "explanation": "Earnings above SGA generally block disability status."}]},
  {"question": "What happens at step 3 of SSA's five-step process?", "difficulty": "medium", "options": [{"text": "SSA checks whether your condition meets or equals a Blue Book listing", "correct": true, "explanation": "If it does, you're found disabled without steps 4 and 5."}, {"text": "SSA checks your bank balance", "correct": false, "explanation": "Resources matter for SSI eligibility, not step 3."}, {"text": "You attend a court hearing", "correct": false, "explanation": "Hearings are part of appeals, not step 3."}]},
  {"question": "Why can someone who can't do their old job still be denied?", "difficulty": "hard", "options": [{"text": "At step 5, SSA asks whether they can adjust to any other work, considering age, education and skills", "correct": true, "explanation": "The standard is any substantial work, not just your previous job."}, {"text": "SSA only approves people who have never worked", "correct": false, "explanation": "SSDI actually requires a work history."}, {"text": "Everyone is denied the first time by rule", "correct": false, "explanation": "Many are, but there's no rule requiring it."}]},
  {"question": "How long do you have to appeal an SSA disability decision?", "difficulty": "medium", "options": [{"text": "60 days from receiving the notice", "correct": true, "explanation": "SSA assumes you received the notice 5 days after its date."}, {"text": "1 year", "correct": false, "explanation": "The window is 60 days."}, {"text": "You can't appeal", "correct": false, "explanation": "There are several appeal levels."}]},
  {"question": "When does Medicare usually start for SSDI recipients?", "difficulty": "hard", "options": [{"text": "After 24 months of SSDI entitlement", "correct": true, "explanation": "There are exceptions, such as ALS and end-stage kidney disease."}, {"text": "The day the application is filed", "correct": false, "explanation": "There's a waiting period for most people."}, {"text": "Only at age 65", "correct": false, "explanation": "SSDI recipients can get Medicare earlier."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "U.S. Social Security disability needs a medical condition expected to last 12+ months that stops you from earning above a monthly limit ($1,690 in 2026).",
          "The test is whether you can do any substantial work given your age, education and skills, not just your old job.",
          "SSDI is based on your work record; SSI is based on low income and assets. Many first claims are denied, and appeals often succeed.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Social Security&apos;s definition of disability is strict. It&apos;s not about whether you have a diagnosis, or even whether you can do the job you had. It asks: does a medical condition that will last at least a year stop you from doing any work that pays more than a set monthly amount? In 2026 that amount is $1,690 a month. There are two programs. SSDI is like insurance you paid into through payroll taxes, so it needs a work history. SSI is for people with very little income and savings, whether or not they&apos;ve worked. You can sometimes get both. The key to either one is medical evidence showing what you can and can&apos;t do day to day.</div>}
        detailed={<div className="prose-p">SSA applies a five-step sequential evaluation (20 CFR 404.1520). <strong>Step 1</strong>: if you&apos;re earning above substantial gainful activity (SGA), $1,690 a month in 2026 or $2,830 if blind, you&apos;re not disabled. <strong>Step 2</strong>: the impairment must be &quot;severe,&quot; meaning it significantly limits basic work activities, and meet the 12-month duration rule. <strong>Step 3</strong>: if it meets or equals a listing in the Blue Book (for example, specific criteria for heart failure or certain cancers), you&apos;re approved. <strong>Step 4</strong>: SSA assesses your residual functional capacity (RFC) and asks whether you can still do your past relevant work, now defined as work in the last 5 years. <strong>Step 5</strong>: can you adjust to other work that exists in the national economy? Age matters here: SSA&apos;s rules make it easier to qualify at 50 and older, when retraining is considered harder. The programs then add their own non-medical rules. <strong>SSDI</strong> generally needs 40 work credits, 20 of them earned in the 10 years before disability (younger workers need fewer), pays based on your earnings record (similar to <TermLink href="/government-schemes-benefits/what-social-security-actually-pays-out-and-when">Social Security retirement</TermLink>), starts after a five-month waiting period, and brings Medicare after 24 months of entitlement. <strong>SSI</strong> pays up to $994 a month federally in 2026 for an individual ($1,491 for a couple), reduced by other income, with a $2,000 resource limit ($3,000 for a couple), and usually comes with Medicaid.</div>}
      />
      <FootnoteAside>This page covers U.S. federal Social Security disability programs. Dollar amounts are 2026 figures and change every January. This is general information, not legal advice; check ssa.gov or talk to a qualified disability attorney or advocate about your situation. Veterans&apos; disability compensation and private or workplace disability insurance have different rules.</FootnoteAside>

      <QuickCheck
        question="Which question does SSA ask at step 5?"
        options={[
          { text: "Can you adjust to any other work, given your age, education and experience?", correct: true, explanation: "Correct. It's not limited to your previous job." },
          { text: "Did you pay taxes last year?", correct: false, explanation: "Work credits matter for SSDI, but that's not step 5." },
          { text: "Does your doctor say you're disabled?", correct: false, explanation: "SSA makes its own decision; a doctor's opinion is evidence, not the verdict." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A worker with a long record (baseline case)</h3>
      <div className="prose-p">Dana, 56, worked 30 years as a warehouse supervisor and has severe spinal stenosis that her surgeon expects to be permanent. She stopped working in January. She has far more than 40 work credits, including 20 in the last 10 years, so she&apos;s insured for SSDI. She isn&apos;t working (step 1), the condition is severe and long-lasting (step 2), and it may not meet a listing exactly (step 3). Her RFC limits her to sedentary work, so she can&apos;t return to warehouse work (step 4). At 56, with no transferable desk-job skills, SSA&apos;s age rules make it likely she&apos;s found disabled at step 5. If approved, SSDI starts after five full months, and Medicare 24 months after that.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Working part-time while applying (edge case)</h3>
      <div className="prose-p">Luis, 34, has multiple sclerosis with severe fatigue and works 15 hours a week, earning $1,100 a month. That&apos;s below the 2026 SGA limit of $1,690, so step 1 doesn&apos;t automatically end his claim. SSA will still look closely at his work: whether he needs special accommodations, extra breaks or a sympathetic employer. If he picks up extra shifts and earns $1,800 a month, he&apos;d be above SGA and generally found not disabled for those months. Being close to the line is legal, but earnings need careful tracking and reporting.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Denied, then appealing (real-world use)</h3>
      <div className="prose-p">Aisha&apos;s initial claim for SSI is denied. The notice says her records don&apos;t show enough limitation. She has 60 days (plus 5 days assumed for mail) to request reconsideration. She asks her doctor for a detailed statement of her functional limits, not just her diagnosis (how long she can sit, stand, lift and concentrate), and adds treatment records from a specialist she saw after applying. If reconsideration is denied, the next levels are a hearing before an administrative law judge, the Appeals Council, and federal court. Many people who are ultimately approved win at the hearing stage, which is why not giving up after the first denial matters.</div>

      <QuickCheck
        question="Why didn't Luis's part-time work automatically end his claim?"
        options={[
          { text: "His $1,100 monthly earnings were below the $1,690 SGA limit", correct: true, explanation: "Correct. Earnings below SGA don't end the evaluation at step 1." },
          { text: "Part-time work is never counted", correct: false, explanation: "It's counted; it just has to be above SGA to disqualify." },
          { text: "Multiple sclerosis is automatically approved", correct: false, explanation: "Approval depends on the severity and evidence, not the diagnosis alone." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="SSA's five-step disability evaluation"
        type="flow"
        svgSrc="/diagrams/government-schemes-benefits-what-disability-benefits-actually-require-to-qualify-flow.svg"
        altText="A five-step flow. 1: Are you earning above the substantial gainful activity limit? 2: Is the condition severe and expected to last 12 months or more? 3: Does it meet or equal a listing in SSA's medical Blue Book? 4: Can you still do the work you did in the past 5 years? 5: Can you adjust to any other work, given age, education and skills? A yes at step 1 or a no at step 2 ends the claim; a yes at step 3 approves it."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Relying on a diagnosis instead of evidence of limitations.", fix: "Ask treating doctors to document specific functional limits (sitting, standing, lifting, concentration, attendance)." },
          { mistake: "Missing the 60-day appeal deadline and starting over.", fix: "Appeal in time; a new application can lose months of potential back pay." },
          { mistake: "Gaps in treatment.", fix: "Keep seeing providers and follow prescribed treatment when you can; SSA relies heavily on medical records." },
        ]}
      />
      <MisconceptionCallout
        myth="If my doctor says I can't work, Social Security has to approve me."
        reality={<p>SSA makes its own decision using the five-step process. A doctor&apos;s opinion is important evidence, especially when it describes specific limitations and is backed by records, but it isn&apos;t binding. SSA also weighs whether you could do other, less demanding work. That&apos;s why detailed functional evidence usually matters more than a note that simply says &quot;unable to work.&quot;</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check your work credits in your my Social Security account at ssa.gov.",
          "Gather medical records, test results and a list of every provider you've seen for the condition.",
          "Ask your doctor for a statement describing your specific functional limits.",
          "If denied, mark the 60-day appeal deadline and consider a disability attorney or advocate (fees are capped and usually paid only if you win).",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What qualifies you for disability benefits?", answer: "For Social Security, a medically determinable condition expected to last at least 12 months or result in death that prevents you from earning above the SGA limit ($1,690 a month in 2026) in any work. SSDI also needs enough work credits; SSI needs low income and assets." },
          { question: "What is the difference between SSDI and SSI?", answer: "SSDI is based on your work history and payroll taxes, and pays according to your earnings record. SSI is needs-based, pays up to $994 a month federally in 2026, and has a $2,000 asset limit for an individual." },
          { question: "How much can you earn while on disability?", answer: "Earning above the SGA limit ($1,690 a month in 2026, or $2,830 if blind) generally means SSA won't consider you disabled. SSDI has work incentives like a trial work period, and SSI reduces payments gradually as income rises." },
          { question: "How long does it take to get approved for disability?", answer: "Initial decisions often take several months, and appeals, especially hearings, can take much longer. SSDI also has a five-month waiting period before benefits begin." },
          { question: "What happens if my disability claim is denied?", answer: "You can appeal within 60 days: reconsideration, then a hearing before an administrative law judge, then the Appeals Council, then federal court. Many successful claims are won on appeal." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
