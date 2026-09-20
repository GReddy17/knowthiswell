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
  title: "How Unemployment Benefits Actually Get Calculated",
  category: "government-schemes-benefits",
  order: 1,
  subtopic: "core-safety-net-programs",
  tags: ["unemployment benefits", "unemployment insurance", "government benefits", "job loss"],
  date: "2026-09-20",
  updated: "2026-09-20",
  lastReviewed: "2026-09-20",
  excerpt: "Unemployment benefits aren't a flat national amount — each state runs its own program, sets its own formula (usually based on recent wages), and sets its own maximum weekly amount.",
  summary: "Unemployment insurance is a joint federal-state program where each state sets its own eligibility rules, benefit formula, and maximum weekly amount, typically calculating a weekly benefit as a percentage of a claimant's wages during a defined recent base period, capped at a state-specific maximum, with benefits generally limited to workers who lost a job through no fault of their own and are actively seeking new work.",
  sources: [
    { label: "U.S. Department of Labor — Unemployment Insurance", url: "https://www.dol.gov/general/topic/unemployment-insurance" },
    { label: "CareerOneStop (U.S. DOL-sponsored) — Unemployment Benefits Finder", url: "https://www.careeronestop.org/LocalHelp/UnemploymentBenefits/find-unemployment-benefits.aspx" },
  ],
  seeAlso: [
    "government-schemes-benefits/what-social-security-actually-pays-out-and-when",
    "government-schemes-benefits/how-to-actually-apply-for-government-assistance-programs",
  ],
  glossary: [
    { term: "Base period", definition: "A defined recent window of past earnings (commonly the first four of the last five completed calendar quarters) that a state uses to calculate an unemployment claimant's benefit amount." },
    { term: "Weekly benefit amount", definition: "The dollar amount an eligible claimant receives per week, typically calculated as a percentage of their base-period wages, subject to a state-specific minimum and maximum." },
    { term: "Unemployment insurance", definition: "A joint federal-state program providing temporary partial wage replacement to workers who lost a job through no fault of their own and meet their state's eligibility requirements." },
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
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
        <strong>This entry explains how the system generally works, not guaranteed benefit amounts for your specific situation.</strong> Unemployment rules and formulas vary by state and change over time — confirm exact eligibility and amounts through your state&apos;s unemployment agency or CareerOneStop.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Unemployment insurance is run by individual states, not a single federal program — eligibility rules, benefit formulas, and maximum amounts all vary by state.",
          "Most states calculate the weekly benefit as a percentage of wages earned during a defined recent &quot;base period,&quot; not a flat amount everyone receives equally.",
          "General eligibility usually requires losing a job through no fault of your own (layoffs generally qualify, most voluntary quits and terminations for misconduct generally don&apos;t) plus actively searching for new work.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Unemployment benefits are run state-by-state, not as one national program with one national formula. Each state looks at how much you recently earned, calculates a weekly amount (generally a percentage of that pay, up to a state-set maximum), and pays it out for a limited number of weeks while you look for new work.</div>}
        detailed={<div className="prose-p">Per U.S. Department of Labor guidance, states use a defined <TermLink href="/government-schemes-benefits/how-unemployment-benefits-actually-get-calculated">base period</TermLink> — commonly the first four of the last five completed calendar quarters before the claim — to calculate wages, then apply a state-specific formula (often a percentage of average weekly or highest-quarter wages during that period) to determine the <TermLink href="/government-schemes-benefits/how-unemployment-benefits-actually-get-calculated">weekly benefit amount</TermLink>, subject to a state-set minimum and maximum. Because both the formula and the maximum vary by state, the same recent earnings history can produce a meaningfully different weekly benefit depending purely on which state administers the claim.</div>}
      />
      <FootnoteAside>Because unemployment insurance is a joint federal-state program, the specific number of weeks benefits last, the exact wage formula, and the maximum weekly amount are all set at the state level and can change — always confirm current, state-specific numbers directly through your state&apos;s unemployment agency rather than relying on a remembered figure.</FootnoteAside>

      <p>This state-by-state structure is exactly why the same job loss can result in very different benefit amounts for two people in different states with similar recent earnings — the formula itself, not just the person&apos;s wage history, differs.</p>

      <QuickCheck
        question="Two people with identical recent earnings history lose their jobs at the same time, but live in different states. Why might they receive different weekly unemployment benefit amounts?"
        options={[
          { text: "Unemployment benefit formulas, minimums, and maximums are all set individually by each state, so identical earnings can produce different benefit amounts purely based on which state administers the claim", correct: true, explanation: "Correct. Per DOL guidance, unemployment insurance is a joint federal-state program where states set their own specific formulas and caps — this is exactly why identical earnings histories can produce different results across state lines." },
          { text: "One of them must have made an error on their application", correct: false, explanation: "No error is implied here — different state formulas and maximums are the normal, expected explanation for this exact scenario, not a mistake." },
          { text: "Unemployment benefits are actually identical everywhere, so this couldn't happen", correct: false, explanation: "This is incorrect — benefit calculation is state-administered, and formulas and maximum amounts genuinely differ from state to state." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A standard layoff (baseline case)</h3>
      <div className="prose-p">Someone laid off due to a company-wide restructuring, with no misconduct involved, generally meets the &quot;no fault of your own&quot; requirement most states apply. Their state agency looks at their base-period wages, applies the state formula, and issues a weekly benefit amount — the most straightforward, common qualifying scenario.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A voluntary quit (edge case / variation)</h3>
      <div className="prose-p">Someone who voluntarily quits a job without a qualifying reason (some states recognize specific exceptions, such as documented unsafe working conditions) generally doesn&apos;t meet standard unemployment eligibility, since the core requirement is job loss through no fault of the claimant&apos;s own choice — a meaningful exception to check directly with a state agency rather than assume either way.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Inconsistent recent earnings (real-world / applied case)</h3>
      <div className="prose-p">Someone whose hours and pay varied significantly during their base period (due to a mid-year job change or seasonal work) may see a benefit calculation that doesn&apos;t match a simple mental average of their pay, because state formulas often weight specific quarters (commonly the highest-earning quarter) rather than a flat average across the whole base period.</div>

      <QuickCheck
        question="Why might someone's calculated weekly unemployment benefit not match a simple average of their recent pay across the whole base period?"
        options={[
          { text: "State formulas often use a specific calculation method, such as weighting the highest-earning quarter within the base period, rather than a flat average across the entire period, which can produce a different number than intuition suggests", correct: true, explanation: "Correct. State-specific formula details, not just total base-period earnings, determine the final benefit amount, which is exactly why a simple average often doesn't match the actual calculated figure." },
          { text: "Unemployment calculations are essentially random and don't follow any consistent formula", correct: false, explanation: "The calculation isn't random — it follows a specific, published state formula; it may just not match a person's intuitive mental math, which is a different thing entirely." },
          { text: "The base period is only ever a single month, so averaging doesn't apply at all", correct: false, explanation: "The base period is typically about a year (commonly four calendar quarters), not a single month — this is exactly the kind of specific formula detail worth confirming with a state agency." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="From recent wages to a weekly unemployment benefit"
        type="flow"
        svgSrc="/diagrams/government-schemes-benefits-how-unemployment-benefits-actually-get-calculated-formula.svg"
        altText="A flow diagram showing a claimant's base-period wages (a defined recent window of earnings) feeding into a state-specific formula, producing a calculated weekly benefit amount, which is then capped at that state's maximum weekly benefit before being paid out."
      />
      <p>Each state controls both the formula in the middle of this process and the cap at the end, which is why the same starting wages can lead to different final benefit amounts depending on the state.</p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming unemployment benefits work the same way and pay the same amount nationwide.", fix: "Check your specific state's unemployment agency for its actual formula, base period definition, and maximum weekly amount." },
          { mistake: "Assuming any job separation automatically qualifies for benefits.", fix: "Confirm eligibility specifics with your state agency — reason for separation (layoff versus voluntary quit versus misconduct) generally affects eligibility." },
          { mistake: "Estimating your benefit with a simple average of recent pay instead of the state's actual formula.", fix: "Use your state's official benefit calculator or agency guidance, since formulas often weight specific quarters rather than averaging flatly." },
        ]}
      />
      <MisconceptionCallout
        myth="Unemployment benefits replace your full previous salary while you look for a new job."
        reality={<p>Per U.S. Department of Labor program structure, unemployment insurance is designed as partial, temporary wage replacement, not full income replacement — weekly benefit amounts are calculated as a percentage of past wages, capped at a state-specific maximum that is often well below what many claimants previously earned, which is why it&apos;s described as a bridge rather than a replacement income.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Find your specific state's unemployment agency through CareerOneStop or DOL.gov and review its actual eligibility rules and formula.",
          "Gather recent pay records covering your likely base period before applying, since the formula depends on that specific window.",
          "Apply promptly after job loss, since most states have specific filing timelines that affect when benefits start.",
          "If your claim is denied and you believe it was in error, ask your state agency directly about the specific appeals process — don't assume the initial decision is final without checking.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is unemployment insurance a federal or state program?", answer: "Both — it's a joint federal-state program, where federal law sets a broad framework but each individual state administers its own program, sets its own specific formula, eligibility rules, and maximum benefit amount." },
          { question: "Do I qualify for unemployment if I quit my job?", answer: "Generally, standard unemployment eligibility requires losing a job through no fault of your own, so most voluntary quits don't qualify — though some states recognize specific exceptions (such as documented unsafe conditions), so it's worth checking directly with your state agency rather than assuming." },
          { question: "How long do unemployment benefits typically last?", answer: "Duration varies by state, though many states offer up to 26 weeks under normal conditions — check your specific state agency for its current exact duration, since this can change." },
          { question: "Can I work part-time while receiving unemployment benefits?", answer: "Many states allow partial benefits while working reduced hours, generally with the benefit amount adjusted based on earnings, but exact rules vary by state — report any income to your state agency as required rather than assuming it doesn't matter." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
