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
  title: "What Social Security Actually Pays Out and When",
  category: "government-schemes-benefits",
  order: 2,
  subtopic: "core-safety-net-programs",
  tags: ["social security", "retirement benefits", "government benefits", "full retirement age"],
  date: "2026-09-21",
  updated: "2026-10-10",
  youtubeShort: false, youtubeLong: false,
  seoScore: 81, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-10-10",
  excerpt: "The age you claim Social Security permanently changes your monthly check — claiming early locks in a smaller amount for life, not a temporary discount.",
  summary: "Social Security retirement benefits are calculated from a worker's highest 35 years of earnings, adjusted into an average monthly figure that determines the benefit paid at full retirement age — per the Social Security Administration, a worker can claim as early as age 62 for a permanently reduced monthly benefit, wait until their full retirement age (66-67, depending on birth year) for their full calculated benefit, or delay up to age 70 for permanently increased monthly payments, with each year of early or delayed claiming changing the monthly amount for the rest of the recipient's life, not just temporarily.",
  sources: [
    { label: "Social Security Administration — Retirement Benefits", url: "https://www.ssa.gov/benefits/retirement/" },
    { label: "Social Security Administration — Full Retirement Age", url: "https://www.ssa.gov/benefits/retirement/planner/agereduction.html" },
    { label: "Social Security Administration — Delayed Retirement Credits", url: "https://www.ssa.gov/benefits/retirement/planner/delayret.html" },
    { label: "Social Security Administration — Retirement Benefits (Publication No. 05-10035)", url: "https://www.ssa.gov/pubs/EN-05-10035.pdf" },
  ],
  seeAlso: [
    "government-schemes-benefits/how-unemployment-benefits-actually-get-calculated",
    "government-schemes-benefits/how-to-actually-renew-a-passport-or-national-id",
    "personal-finance-basics/understanding-retirement-accounts-basic-mechanics",
    "government-schemes-benefits/how-public-health-insurance-programs-actually-work",
    "government-schemes-benefits/what-disability-benefits-actually-require-to-qualify",
  ],
  glossary: [
    { term: "Full retirement age (FRA)", definition: "The age at which a worker is entitled to their full calculated Social Security benefit, set by the Social Security Administration based on birth year — currently 66 to 67 for most workers." },
    { term: "Primary Insurance Amount (PIA)", definition: "The monthly benefit amount a worker would receive if they claim Social Security exactly at their full retirement age, calculated from their highest 35 years of earnings." },
    { term: "Delayed retirement credit", definition: "A permanent increase to a worker's monthly Social Security benefit for each year they delay claiming past full retirement age, up to age 70." },
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
  {"question": "What is the earliest age you can start Social Security retirement benefits?", "difficulty": "easy", "options": [{"text": "62", "correct": true, "explanation": "Claiming at 62 is allowed, but the monthly amount is permanently reduced."}, {"text": "65", "correct": false, "explanation": "65 is Medicare's usual starting age, not the earliest Social Security claim age."}, {"text": "67", "correct": false, "explanation": "67 is full retirement age for people born in 1960 or later."}]},
  {"question": "What is full retirement age for someone born in 1960 or later?", "difficulty": "easy", "options": [{"text": "67", "correct": true, "explanation": "Per the SSA, full retirement age rises to 67 for anyone born in 1960 or later."}, {"text": "65", "correct": false, "explanation": "65 was full retirement age for older generations."}, {"text": "70", "correct": false, "explanation": "70 is the age at which delayed credits stop growing."}]},
  {"question": "How many years of earnings does the SSA use to calculate your basic benefit?", "difficulty": "medium", "options": [{"text": "Your highest 35 years, adjusted for wage growth", "correct": true, "explanation": "Fewer than 35 years means zeros fill the gaps, which lowers the average."}, {"text": "Your last 5 years only", "correct": false, "explanation": "The SSA looks across your whole career, not just the end."}, {"text": "Every year you worked, equally weighted", "correct": false, "explanation": "Only the highest 35 years count."}]},
  {"question": "For someone born in 1943 or later, how much do delayed retirement credits add for each full year of waiting past full retirement age?", "difficulty": "medium", "options": [{"text": "8%", "correct": true, "explanation": "The SSA adds two-thirds of 1% per month, which is 8% per year, up to age 70."}, {"text": "2%", "correct": false, "explanation": "The credit is much larger than 2% a year."}, {"text": "25%", "correct": false, "explanation": "25% a year would be far above the SSA rate."}]},
  {"question": "Someone with a full retirement age of 67 claims at 62. By roughly how much is the monthly benefit reduced?", "difficulty": "hard", "options": [{"text": "About 30%", "correct": true, "explanation": "The SSA shows a reduction of about 30% for claiming five years early."}, {"text": "About 5%", "correct": false, "explanation": "The reduction grows with each month claimed early and is much larger than 5%."}, {"text": "There is no reduction", "correct": false, "explanation": "Claiming before full retirement age always reduces the monthly amount."}]},
  {"question": "Why does waiting past age 70 not raise your Social Security check any further?", "difficulty": "medium", "options": [{"text": "Delayed retirement credits stop at age 70", "correct": true, "explanation": "There is no benefit increase for delaying beyond 70."}, {"text": "Benefits are cut after 70", "correct": false, "explanation": "Benefits are not cut; they just stop growing from delay."}, {"text": "You lose eligibility at 70", "correct": false, "explanation": "You remain eligible; you simply gain nothing more by waiting."}]},
  {"question": "Roughly how many work credits do you need to qualify for Social Security retirement benefits?", "difficulty": "medium", "options": [{"text": "40 credits, about 10 years of work", "correct": true, "explanation": "You can earn up to four credits a year."}, {"text": "4 credits, about 1 year of work", "correct": false, "explanation": "Four credits is one year's maximum, not the total needed."}, {"text": "100 credits", "correct": false, "explanation": "The requirement is 40 credits."}]},
  {"question": "You claimed benefits eight months ago and changed your mind. What option does the SSA offer?", "difficulty": "hard", "options": [{"text": "Withdraw the application within 12 months, repaying the benefits received", "correct": true, "explanation": "The SSA allows one withdrawal, within 12 months of first becoming entitled."}, {"text": "Switch to a larger benefit at any time for free", "correct": false, "explanation": "The adjustment is permanent outside the narrow withdrawal window."}, {"text": "Nothing; any claim is final the day it's filed", "correct": false, "explanation": "There is a limited 12-month withdrawal window."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Social Security is calculated from a worker's highest 35 years of earnings, producing a full benefit amount payable at full retirement age.",
          "Claiming as early as 62 permanently reduces the monthly benefit; delaying past full retirement age up to 70 permanently increases it.",
          "The claiming-age decision changes the monthly amount for the rest of the recipient's life, not just for a temporary period.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Social Security claiming ages at a glance</h2>
      <div className="prose-p">
      <strong>Short answer:</strong> Social Security pays a monthly retirement benefit based on your highest 35 years of earnings. You can start at 62, but the check is permanently smaller: about 30% smaller if your full retirement age is 67. Wait until full retirement age (67 for anyone born in 1960 or later) and you get 100% of your calculated benefit. Every year you wait after that, up to 70, adds 8%. To qualify at all, you generally need 40 work credits, which is about 10 years of work.
      </div>
      <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse my-4">
        <thead>
          <tr className="border-b-2 border-ink text-left"><th className="py-2 pr-3">Claim at (full retirement age 67)</th><th className="py-2">Monthly benefit vs. your full amount</th></tr>
        </thead>
        <tbody>
          <tr className="border-b border-ink/20"><td className="py-2 pr-3">62</td><td className="py-2">About 70% (permanently reduced)</td></tr>
          <tr className="border-b border-ink/20"><td className="py-2 pr-3">67</td><td className="py-2">100% (your Primary Insurance Amount)</td></tr>
          <tr><td className="py-2 pr-3">70</td><td className="py-2">About 124% (three years of 8% delayed credits)</td></tr>
        </tbody>
      </table>
      </div>
      <p className="text-sm">Percentages follow the SSA&apos;s published reduction and delayed-credit rules. Your own dollar figures are on your earnings record at ssa.gov.</p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Social Security looks at your highest-earning 35 working years to figure out a base monthly benefit amount. You can start collecting as early as 62, but the check will be permanently smaller than if you had waited. Wait until your full retirement age (66 or 67 for most people today) and you get the full calculated amount. Wait even longer, up to 70, and the monthly amount keeps growing. Whatever age you pick, that adjustment sticks for the rest of your life — it isn&apos;t a temporary early-bird discount that goes away later.</div>}
        detailed={<div className="prose-p">Per the Social Security Administration, a worker&apos;s benefit starts with their <TermLink href="/government-schemes-benefits/what-social-security-actually-pays-out-and-when">Primary Insurance Amount (PIA)</TermLink> — calculated from their highest 35 years of inflation-adjusted earnings, averaged and run through a formula — which represents the monthly benefit paid if claimed exactly at <TermLink href="/government-schemes-benefits/what-social-security-actually-pays-out-and-when">full retirement age (FRA)</TermLink>, currently 66 to 67 depending on birth year. Claiming as early as age 62 permanently reduces the monthly benefit below the PIA, by a percentage that grows the earlier the claim happens. Claiming after FRA, up to age 70, earns <TermLink href="/government-schemes-benefits/what-social-security-actually-pays-out-and-when">delayed retirement credits</TermLink> that permanently increase the monthly benefit above the PIA. Because this adjustment is locked in for the life of the benefit, per SSA guidance, the claiming-age decision is one of the most consequential and hardest-to-reverse choices in retirement planning — it isn&apos;t a temporary rate that resets later.</div>}
      />
      <FootnoteAside>The SSA notes there&apos;s no single &quot;right&quot; claiming age for everyone — the decision reasonably depends on health, other income sources, and whether a spouse&apos;s benefit is also involved, which is part of why the agency recommends reviewing an individual earnings record before deciding.</FootnoteAside>

      <p>This permanence is also why the decision is worth getting right the first time — per SSA guidance, once monthly payments begin, the claiming-age adjustment generally cannot be undone except through a narrow, limited window shortly after the initial claim.</p>

      <QuickCheck
        question="A worker claims Social Security at age 62 instead of waiting until their full retirement age of 67. What happens to their monthly benefit amount over time?"
        options={[
          { text: "It's permanently reduced compared to their full calculated benefit, for the rest of their life, not just for a temporary early period", correct: true, explanation: "Correct. Per SSA guidance, claiming before full retirement age permanently reduces the monthly amount — it isn't a temporary discount that later resets to the full benefit." },
          { text: "It starts lower but automatically increases to the full amount once they reach full retirement age", correct: false, explanation: "This is a common misunderstanding — the reduction from early claiming is permanent and does not automatically correct itself at full retirement age." },
          { text: "It has no effect on the monthly amount, only on when payments begin", correct: false, explanation: "The claiming age directly determines the monthly benefit amount itself, not just the start date — earlier claiming produces a smaller ongoing monthly payment." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Claiming exactly at full retirement age (baseline case)</h3>
      <div className="prose-p">A worker with a full retirement age of 67 claims Social Security exactly at 67 and receives their full calculated Primary Insurance Amount, with no reduction or increase applied.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Claiming early due to a health situation (edge case / variation)</h3>
      <div className="prose-p">A worker in poor health with a shorter expected lifespan claims at 62 despite the permanent reduction, reasoning that receiving a smaller monthly amount over more expected years may provide more total lifetime benefit than a larger amount over fewer years — a real, individual trade-off the SSA acknowledges depends on personal circumstances.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Delaying to age 70 for maximum monthly benefit (real-world / applied case)</h3>
      <div className="prose-p">A worker with other income sources and good health delays claiming until age 70, earning delayed retirement credits each year past full retirement age — per SSA guidance, this produces the highest possible monthly benefit available to that worker, locked in for life once claimed.</div>

      <QuickCheck
        question="Per SSA guidance, why might delaying a Social Security claim past full retirement age make sense for some workers but not others?"
        options={[
          { text: "Because the right choice depends on individual factors like health, other income, and life expectancy, not a single universal answer", correct: true, explanation: "Correct. The SSA explicitly frames this as depending on individual circumstances — there's no single claiming age that's optimal for everyone." },
          { text: "Because delaying always results in a worse outcome regardless of circumstances", correct: false, explanation: "Delaying produces a permanently higher monthly benefit — whether that's the better choice depends on individual factors, not a fixed downside." },
          { text: "Because the delayed retirement credit only applies to workers born before a certain year", correct: false, explanation: "Delayed retirement credits are a standard SSA feature available based on claiming age relative to full retirement age, not restricted by birth year in that way." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How claiming age changes the monthly benefit, permanently"
        type="flow"
        svgSrc="/diagrams/government-schemes-benefits-what-social-security-actually-pays-out-and-when-flow.svg"
        altText="A flow diagram showing benefit amount by claiming age: age 62 gives a permanently reduced benefit, full retirement age (66-67) gives the full calculated benefit, and delaying to age 70 gives a permanently increased benefit."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a reduced early-claiming benefit later corrects itself to the full amount.", fix: "Understand the reduction (or increase from delaying) is permanent for the life of the benefit, per SSA guidance." },
          { mistake: "Treating the claiming-age decision as easily reversible.", fix: "Recognize this is one of the most consequential retirement decisions and review your individual earnings record with the SSA before deciding." },
          { mistake: "Assuming there's a single 'correct' claiming age for everyone.", fix: "Weigh your own health, other income sources, and any spousal benefit considerations, since the SSA notes the right choice varies by individual circumstances." },
        ]}
      />
      <MisconceptionCallout
        myth="Claiming Social Security early just means getting a smaller check for a few years until it catches up to the full amount later."
        reality={<p>Per SSA guidance, the reduction from early claiming — or the increase from delayed claiming — is a permanent adjustment to the monthly benefit for the rest of the recipient&apos;s life. It doesn&apos;t reset or catch up automatically once the recipient reaches full retirement age or any other milestone. This permanence is exactly why the SSA frames the claiming-age decision as one of the most consequential choices in retirement planning, not a minor timing detail.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check your own Primary Insurance Amount and full retirement age using your actual SSA earnings record, not a generic estimate.",
          "Weigh health, other income sources, and any spousal benefit considerations before deciding when to claim.",
          "Understand that claiming before full retirement age permanently reduces your monthly benefit, and delaying past it permanently increases it.",
          "This is general educational information, not personalized financial advice — consult the SSA directly or a licensed financial professional for decisions specific to your situation.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the earliest age you can claim Social Security retirement benefits?", answer: "Age 62, per SSA guidance — but claiming this early results in a permanently reduced monthly benefit compared to claiming at full retirement age." },
          { question: "What is full retirement age for Social Security?", answer: "Currently 66 to 67, depending on birth year, per the SSA — this is the age at which a worker receives their full calculated Primary Insurance Amount with no reduction or increase." },
          { question: "Does delaying Social Security past full retirement age actually increase the benefit?", answer: "Yes — per SSA guidance, delayed retirement credits permanently increase the monthly benefit for each year of delay up to age 70, after which there's no further increase for delaying longer." },
          { question: "How is the Social Security benefit amount calculated?", answer: "From a worker's highest 35 years of inflation-adjusted earnings, averaged and run through an SSA formula to produce the Primary Insurance Amount, per SSA guidance." },
          { question: "Can you change your claiming decision after benefits start?", answer: "Generally no, except through a narrow, limited window shortly after the initial claim — per SSA guidance, the claiming-age decision is largely permanent once benefits begin." },
          { question: "How much less do you get if you claim Social Security at 62?", answer: "If your full retirement age is 67, claiming at 62 cuts your monthly benefit by about 30%, per the SSA. The cut is smaller the closer to full retirement age you claim, and it lasts for life." },
          { question: "How much more do you get by waiting until 70?", answer: "For anyone born in 1943 or later, the SSA adds delayed retirement credits of 8% for each year (two-thirds of 1% per month) you wait past full retirement age. With a full retirement age of 67, waiting to 70 gives about 124% of the full benefit. There's no extra credit after 70." },
          { question: "How many years do you need to work to get Social Security?", answer: "You generally need 40 credits. You can earn up to four credits a year, so that works out to about 10 years of work, per the SSA." },
          { question: "Can I undo my Social Security claim?", answer: "Yes, once and only within 12 months of first becoming entitled. The SSA lets you withdraw your application, but you must repay all the benefits you and your family received on that claim." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
