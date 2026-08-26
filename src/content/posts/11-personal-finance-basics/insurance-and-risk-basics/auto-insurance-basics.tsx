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
  title: "Auto Insurance Basics",
  category: "personal-finance-basics",
  order: 40,
  subtopic: "insurance-and-risk-basics",
  tags: ["auto insurance", "liability coverage", "collision coverage", "premiums", "deductible"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Auto insurance isn't one policy — it's a bundle of separate coverage types, each responding to a different kind of loss, and understanding which coverage does what is the key to reading any auto policy.",
  summary: "A typical auto insurance policy bundles several distinct coverage types: liability coverage (which pays for damage or injury the policyholder causes to others), collision coverage (which pays for damage to the policyholder's own vehicle from a crash), and comprehensive coverage (which pays for non-crash damage like theft or weather) — each with its own limits, and collision/comprehensive typically carrying their own separate deductible.",
  sources: [
    { label: "NAIC — Auto Insurance Basics", url: "https://content.naic.org/consumer" },
    { label: "III — Auto Insurance Basics", url: "https://www.iii.org/article/auto-insurance-basics" },
    { label: "CFPB — Auto Insurance", url: "https://www.consumerfinance.gov/consumer-tools/insurance/" },
  ],
  seeAlso: [
    "personal-finance-basics/why-insurance-exists-the-concept-of-pooled-risk",
    "personal-finance-basics/understanding-insurance-claims",
    "personal-finance-basics/renters-and-homeowners-insurance-explained",
  ],
  glossary: [
    {"term":"Liability coverage","definition":"Auto insurance coverage that pays for injury or property damage the policyholder causes to other people when at fault in an accident, not for damage to the policyholder's own vehicle."},
    {"term":"Collision coverage","definition":"Auto insurance coverage that pays for damage to the policyholder's own vehicle resulting from a crash, regardless of who was at fault."},
    {"term":"Comprehensive coverage","definition":"Auto insurance coverage that pays for damage to the policyholder's own vehicle from non-crash events, such as theft, vandalism, fire, or weather."},
    {"term":"Deductible","definition":"The amount a policyholder pays out of pocket toward a covered claim before insurance pays the remainder, applied separately to collision and comprehensive coverage on most auto policies."},
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
        <strong>This entry explains the general mechanics behind auto insurance coverage types — it is financial literacy, not personalized insurance advice.</strong> Choosing specific coverage types, limits, and amounts belongs with a licensed insurance agent or broker who can assess your state&apos;s requirements and your situation.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "A typical auto policy bundles several distinct coverage types, each responding to a different kind of loss rather than one blanket \"car insurance\" payout.",
      "Liability coverage pays for damage or injury the policyholder causes to others; collision and comprehensive coverage pay for damage to the policyholder's own vehicle.",
      "Collision and comprehensive coverage typically carry their own separate deductible, chosen by the policyholder, that applies before the insurer pays a claim on the policyholder's own vehicle.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">An auto policy is really several coverages bundled together. <TermLink href="/personal-finance-basics/auto-insurance-basics">Liability coverage</TermLink> pays for the other person&apos;s car and medical bills if the policyholder causes an accident. <TermLink href="/personal-finance-basics/auto-insurance-basics">Collision coverage</TermLink> pays to fix the policyholder&apos;s own car after a crash, no matter who caused it. <TermLink href="/personal-finance-basics/auto-insurance-basics">Comprehensive coverage</TermLink> pays for things that happen to the car outside of a crash, like theft, a cracked windshield from a rock, or storm damage.</div>}
      detailed={<div className="prose-p">Each coverage type responds to a specific kind of loss and is priced and limited separately. Liability coverage is typically split into bodily injury liability (for injuries to others) and property damage liability (for damage to others&apos; property), each with its own dollar limit, and most states require some minimum liability coverage by law. Collision and comprehensive coverage are both optional in most states (though often required by a lender if the car is financed or leased) and both typically carry their own <TermLink href="/personal-finance-basics/auto-insurance-basics">deductible</TermLink> chosen by the policyholder — a higher chosen deductible generally lowers the premium, since the policyholder is absorbing more of the cost of small claims themselves. Because liability, collision, and comprehensive respond to different situations, a single accident can trigger one, two, or none of them depending on exactly what happened and who was at fault.</div>}
      />
      <FootnoteAside>Nearly every U.S. state requires drivers to carry at least some minimum amount of liability insurance to legally drive, though the required minimums and rules vary significantly by state.</FootnoteAside>

      <p>
      Walking through a few different accident scenarios shows exactly which coverage responds in each case.
      </p>

      <QuickCheck
      question="A policyholder is at fault in an accident that damages another driver's car and their own car. Which coverage(s) would typically respond?"
      options={[
      { text: "Only liability coverage, since the policyholder was at fault", correct: false, explanation: "Liability covers the other driver's car, but it doesn't pay for the at-fault policyholder's own vehicle — that requires a separate coverage type." },
      { text: "Liability coverage for the other driver's car, and collision coverage (if carried) for the policyholder's own car", correct: true, explanation: "Correct. Liability responds to damage caused to others regardless of the policyholder's own vehicle, while collision specifically covers the policyholder's own vehicle after a crash, regardless of fault." },
      { text: "Only comprehensive coverage, since a crash occurred", correct: false, explanation: "Comprehensive coverage specifically excludes crash-related damage — that's what collision coverage is for. Comprehensive responds to non-crash events like theft or weather." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A single-car crash into a guardrail (baseline)</h3>
      <div className="prose-p">
      A policyholder loses control and hits a guardrail, causing $6,000 in damage to their own car and no damage to anyone else&apos;s property. With a $500 collision deductible, the policyholder pays the first $500 and collision coverage (if carried) pays the remaining $5,500. Liability coverage doesn&apos;t apply here since no other party&apos;s property or person was involved.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A tree branch falls on a parked car (edge case / variation)</h3>
      <div className="prose-p">
      The same policyholder&apos;s car is later damaged by a falling tree branch during a storm while parked — no collision or crash occurred. This is a comprehensive claim, not a collision claim, since it resulted from a non-crash event. With a separate $250 comprehensive deductible, the policyholder pays $250 and comprehensive coverage (if carried) pays the rest, up to the vehicle&apos;s insured value.
      </div>

      <QuickCheck
      question="Why might a policyholder's collision deductible and comprehensive deductible be two different dollar amounts on the same policy?"
      options={[
      { text: "Insurers are required by law to make them different", correct: false, explanation: "There's no such requirement — policyholders typically choose each deductible amount independently, based on their own risk tolerance and premium preferences for each coverage type." },
      { text: "Collision and comprehensive are separate coverages, each with its own deductible that the policyholder selects independently when building the policy", correct: true, explanation: "Correct. Since collision and comprehensive respond to different kinds of losses, most insurers let policyholders set each deductible separately, which is why they're often different amounts." },
      { text: "The deductible amount depends on which day of the week the damage occurred", correct: false, explanation: "Deductible amounts are fixed by the policy terms for each coverage type — they don't vary based on when damage occurs." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Choosing coverage limits and deductibles for an older car (real-world / applied)</h3>
      <div className="prose-p">
      Consider a policyholder driving a 15-year-old car worth roughly $3,000. Since collision and comprehensive payouts are generally capped at the vehicle&apos;s actual cash value, paying substantial premiums for collision and comprehensive on a $3,000 car may mean the annual premium cost approaches or exceeds what the coverage could ever pay out. This is a common point where drivers reconsider carrying full coverage on an older, lower-value vehicle versus carrying liability-only coverage — a decision that depends on the specific vehicle&apos;s value, the driver&apos;s savings cushion, and state requirements, which is exactly the kind of trade-off a licensed insurance agent can help evaluate.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Which auto coverage responds to which kind of loss"
      type="flow"
      svgSrc="/diagrams/personal-finance-basics-auto-insurance-basics-coverage-map.svg"
      altText="A branching diagram starting from a car icon splitting into three paths: one labeled damage or injury to others, leading to liability coverage; one labeled crash damage to your own car, leading to collision coverage; and one labeled non-crash damage like theft or weather, leading to comprehensive coverage"
      />
      <p>
      Each branch shows a different trigger event leading to a different coverage type — the same accident can activate more than one branch at once, depending on exactly what happened.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming liability coverage pays to repair the policyholder's own car.", fix: "Remember liability only covers damage or injury caused to others — repairing your own car after a crash requires collision coverage." },
      { mistake: "Filing a weather or theft claim under collision coverage.", fix: "Recognize that non-crash events like theft, vandalism, or storm damage fall under comprehensive coverage, which may carry a different deductible than collision." },
      { mistake: "Choosing a very low deductible without considering the higher premium it usually carries.", fix: "Compare the premium difference between deductible options against how much cash you could comfortably pay out of pocket if a claim happened." },
      ]}
      />
      <MisconceptionCallout
      myth="If you're not at fault in an accident, your own insurance won't be involved at all."
      reality={<p>Even when another driver is at fault, the not-at-fault driver&apos;s own collision coverage can still pay for their vehicle&apos;s damage up front (subject to their own deductible), with their insurer then potentially seeking reimbursement from the at-fault driver&apos;s insurer. This can get the not-at-fault driver&apos;s car repaired faster than waiting on the other driver&apos;s insurer to investigate and pay out.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Review your policy's declarations page to see exactly which coverage types you carry and their individual limits and deductibles.",
      "Check your state's minimum liability requirements, since these vary and carrying only the state minimum may leave a significant gap for larger accidents.",
      "Consider your vehicle's actual value when deciding whether collision and comprehensive coverage still make financial sense on an older car.",
      "Bring specific coverage-type, limit, and deductible decisions to a licensed insurance agent or broker.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the difference between collision and comprehensive auto insurance?", answer: "Collision covers damage to your own car from a crash, regardless of fault. Comprehensive covers damage to your own car from non-crash events like theft, vandalism, fire, or weather." },
      { question: "Does liability insurance cover my own car?", answer: "No. Liability coverage pays for damage or injury you cause to other people or their property — it does not pay to repair or replace your own vehicle." },
      { question: "Do I have to carry collision and comprehensive coverage?", answer: "In most states these are optional, though a lender or leasing company will typically require both if the car is financed or leased. Liability coverage, by contrast, is required by law in nearly every state at some minimum level." },
      { question: "Why do collision and comprehensive have separate deductibles?", answer: "Because they're separate coverage types responding to different kinds of losses, most insurers let policyholders choose a deductible for each independently, which is why they're often different dollar amounts on the same policy." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
