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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "How Streaming Subscriptions Actually Bill You",
  category: "technology-basics",
  order: 96,
  subtopic: "digital-literacy-and-online-life",
  tags: ["subscription billing", "prorated charge", "billing cycle", "recurring payments", "digital literacy"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "Streaming subscriptions bill on a fixed recurring cycle, with a prorated partial charge only at the very first sign-up — every renewal after that is full price.",
  summary: "A subscription's billing system tracks one piece of state — whether your account is currently active — and re-checks and re-charges it on a fixed recurring cycle, using a one-time prorated charge only to align an arbitrary sign-up date to that fixed cycle.",
  sources: [
    { label: "FTC — Negative Option Rule (Click-to-Cancel)", url: "https://www.ftc.gov/legal-library/browse/rules/negative-option-rule" },
    { label: "FTC — Free Trial Offers", url: "https://consumer.ftc.gov/articles/free-trial-offers" },
    { label: "FTC — Online Tracking", url: "https://consumer.ftc.gov/articles/online-tracking" },
  ],
  seeAlso: [
    "technology-basics/what-a-digital-footprint-actually-means",
    "technology-basics/what-app-permissions-actually-grant",
    "technology-basics/how-online-payments-get-processed",
  ],
  glossary: [
    { term: "Billing cycle", definition: "The fixed, recurring interval — commonly one month — on which a subscription re-checks account status and charges the next payment." },
    { term: "Proration", definition: "Calculating a partial charge or credit based on the fraction of a billing period actually used, rather than charging the full period amount." },
    { term: "Negative option billing", definition: "A billing arrangement in which a subscription automatically continues and charges again unless the customer actively cancels, rather than requiring active renewal." },
    { term: "Dunning", definition: "The automated process a subscription service uses to retry a failed payment and notify the customer before suspending or canceling their access." },
    { term: "Grace period", definition: "A short window after a failed payment during which access continues while the service retries the charge, before the subscription is actually suspended." },
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
          "A subscription billing system tracks one core piece of state — active or not active — and re-checks it on a fixed recurring cycle, not a rolling window that resets from whenever you happen to log in.",
          "The only charge that's ever partial is the very first one, used to align an arbitrary sign-up date to the service's fixed billing date; every renewal after that is a full-price charge for a full cycle.",
          "Cancellation timing and refund timing are two different mechanisms — cancelling stops future charges from that point forward, but it doesn't automatically mean the current, already-paid-for period is refunded.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of a subscription like a gym membership with a due date fixed on the 1st of every month, no matter what day you actually signed up. If you join on the 20th, the gym doesn&apos;t make you wait until the next 1st to start &mdash; you pay a smaller amount for those last 11 days, then your regular full payment kicks in on the 1st going forward. A streaming subscription works the same way: one small partial charge to line your sign-up date up with the service&apos;s fixed billing date, then the same full charge every cycle after that.</div>}
        detailed={<div className="prose-p">This is a <strong>state &amp; synchronization</strong> problem: your account has exactly one billing-relevant state (active or inactive), and the service&apos;s billing system needs to keep that state synchronized with your payment method on a fixed schedule &mdash; the <TermLink href="/technology-basics/how-streaming-subscriptions-actually-bill-you">billing cycle</TermLink>. Because a real person can sign up on any day of the month but the system wants one predictable charge date, the first invoice uses <TermLink href="/technology-basics/how-streaming-subscriptions-actually-bill-you">proration</TermLink>: a charge scaled to the fraction of the cycle actually remaining before that fixed date. After that alignment, billing becomes <TermLink href="/technology-basics/how-streaming-subscriptions-actually-bill-you">negative option billing</TermLink> &mdash; the subscription auto-renews at full price unless the account state is actively changed to canceled before the next cycle boundary. The edge case that causes the most confusion: a failed card charge doesn&apos;t instantly cut off access. Most systems run <TermLink href="/technology-basics/how-streaming-subscriptions-actually-bill-you">dunning</TermLink>, a short retry-and-notify process, during a <TermLink href="/technology-basics/how-streaming-subscriptions-actually-bill-you">grace period</TermLink> before actually suspending the account &mdash; which is why access sometimes continues for a few days after a card expires.</div>}
      />
      <FootnoteAside>In the United States, the FTC&apos;s negative option rule specifically targets subscriptions that renew automatically unless canceled, requiring that cancellation be at least as easy as signing up — a direct response to services that made sign-up a single click and cancellation a multi-step process.</FootnoteAside>

      <p>
        Every billing quirk people notice &mdash; a smaller-than-expected first charge, a full-price renewal every month after that regardless of usage, or access continuing briefly after a card issue &mdash; comes from this same underlying loop: track one state, resync it to a fixed schedule, prorate only at the seam where a variable sign-up date meets that fixed schedule.
      </p>

      <QuickCheck
        question="Why is the very first charge on a new subscription sometimes smaller than the advertised monthly price?"
        options={[
          { text: "Because it's prorated to cover only the days remaining until the service's fixed billing date, not a full cycle", correct: true, explanation: "Correct. Proration aligns an arbitrary sign-up date to the service's fixed recurring billing date by charging only for the partial period actually used." },
          { text: "Because the first month of every subscription is always discounted as a promotion", correct: false, explanation: "A smaller first charge is usually proration, not a promotional discount — those are two different pricing mechanisms, though a service could offer both." },
          { text: "Because billing systems always round the first charge down as a rounding error", correct: false, explanation: "This isn't a rounding artifact — it's a deliberate proration calculation based on days remaining in the first partial cycle." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Signing up mid-cycle and the first prorated charge (baseline case)</h3>
      <div className="prose-p">
        Someone signs up for a subscription on the 12th of the month, and the service&apos;s billing cycle is fixed to renew on the 1st of every month. Instead of charging the full monthly price for a partial 18 days of access, the system prorates: it charges roughly 18/30ths of the monthly price to cover exactly those remaining days, then sets the next full charge for the 1st. From that point forward, every renewal on the 1st is the complete, unprorated monthly price, regardless of what day the person originally signed up.
      </div>
      <QuickCheck
        question="After the first prorated charge, why does every subsequent charge become the full monthly price?"
        options={[
          { text: "Because only the first period is partial — every cycle after that starts and ends on the fixed billing date, covering a complete period", correct: true, explanation: "Correct. Proration exists only to bridge the gap between an arbitrary sign-up date and the fixed cycle date — once that gap is closed, every future cycle is a full period." },
          { text: "Because the service increases the price after the first month as a standard practice", correct: false, explanation: "A price increase is a separate, explicit business decision — it's not an automatic outcome of how the first proration works." },
          { text: "Because prorated charges are illegal to repeat, so full price must follow", correct: false, explanation: "There's no such rule — the reason full-price billing follows is that only the initial signup period was ever partial." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Cancelling mid-cycle and what actually happens to the current period (edge case / variation)</h3>
      <div className="prose-p">
        A subscriber cancels on the 10th of a cycle that runs from the 1st to the 30th, having already paid the full monthly charge on the 1st. Cancelling changes the account&apos;s state so that no future charge will occur on the next 1st &mdash; but it typically does not refund any part of the payment already made for the current, already-active cycle. Access commonly continues through the 30th, because the system distinguishes &quot;stop future billing&quot; from &quot;refund the current period,&quot; and most services only do the former by default.
      </div>
      <QuickCheck
        question="A subscriber cancels on day 10 of a 30-day cycle they already paid for in full. What should they expect by default?"
        options={[
          { text: "No further charges going forward, but continued access through the end of the already-paid-for cycle, with no automatic partial refund", correct: true, explanation: "Correct. Cancellation typically stops future renewal charges, but it doesn't retroactively refund the current period that was already paid in full — those are separate mechanisms." },
          { text: "An immediate loss of access and a full refund of the current month", correct: false, explanation: "Most subscription systems don't cut off access instantly or issue automatic refunds on cancellation — cancelling generally just stops the next renewal." },
          { text: "The subscription price will be reduced by 20 days' worth for next time automatically", correct: false, explanation: "There's no automatic 'unused days' credit applied to a future charge by default — cancellation simply stops the recurring charge from continuing." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A failed payment and the grace period before suspension (real-world / applied case)</h3>
      <p>
        A subscriber&apos;s card expires the day before a scheduled renewal charge. The charge fails, but the subscriber doesn&apos;t lose access immediately &mdash; the billing system flags the account and begins a dunning process, retrying the charge over the following days and sending notifications, while access continues during that grace period. Only if the retries keep failing and the grace period ends does the account&apos;s state actually flip to suspended. This is the same state-tracking loop as the sign-up case, just running in the failure direction: the system doesn&apos;t assume &quot;payment failed&quot; means &quot;access should end instantly.&quot;
      </p>
      <QuickCheck
        question="Why might someone keep streaming access for a few days after their card on file expires and a renewal charge fails?"
        options={[
          { text: "Because most billing systems run a grace period with automatic retries (dunning) before actually suspending access", correct: true, explanation: "Correct. A failed charge typically triggers a retry-and-notify process over a short grace period rather than an instant cutoff, giving the subscriber time to update their payment method." },
          { text: "Because streaming access is never actually tied to successful payment at all", correct: false, explanation: "Access is tied to payment — the point is that suspension isn't instantaneous on a single failed attempt, not that payment is irrelevant." },
          { text: "Because the card expiration date is ignored by billing systems entirely", correct: false, explanation: "Card expiration does trigger a failed charge and the dunning process — it isn't ignored, it just doesn't cause an immediate cutoff." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="A mid-cycle sign-up: prorated first charge, then fixed full-price renewals"
        type="flow"
        svgSrc="/diagrams/technology-basics-how-streaming-subscriptions-actually-bill-you-proration-timeline.svg"
        altText="A billing timeline showing a subscription started mid-cycle, a small prorated charge covering only the remaining days of that first partial period, and every following renewal charged at the full price on a fixed date."
      />
      <p>
        Notice that proration only ever appears once, at the seam between an arbitrary sign-up date and the service&apos;s fixed billing date — after that, the timeline is just full-price charges repeating on a schedule.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate a prorated first-bill amount"
        description="Enter a monthly price, the length of the billing cycle in days, and how many days remain until the fixed billing date to estimate that first partial charge."
        fields={[
          { key: "monthlyPrice", label: "Monthly price", defaultValue: 15, step: 0.5, min: 0, suffix: "$" },
          { key: "daysInBillingCycle", label: "Days in billing cycle", defaultValue: 30, step: 1, min: 1, max: 31 },
          { key: "daysRemaining", label: "Days remaining until fixed billing date", defaultValue: 18, step: 1, min: 0, max: 31, suffix: "days" },
        ]}
        resultLabel="Estimated prorated first charge"
        formula="proratedSubscriptionCharge"
        formatResult="currency"
        disclaimer="Illustrative estimate only — actual providers may prorate by exact day counts, calendar months, or round differently; check a specific service's own billing terms for the exact method used."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming every partial-looking charge on a subscription statement is a billing error.", fix: "Check whether it lines up with a mid-cycle sign-up or plan change first — proration produces a legitimately smaller charge by design, not by mistake." },
          { mistake: "Believing cancelling a subscription automatically refunds the unused portion of the current period.", fix: "Treat cancellation and refunds as separate mechanisms — cancelling stops future renewal charges, but a refund for the current already-paid period is a distinct request, not automatic by default." },
          { mistake: "Assuming a failed card charge means access ends that exact instant.", fix: "Expect a short grace period with automatic retry attempts (dunning) before an account is actually suspended — update the payment method promptly rather than assuming access is already gone." },
        ]}
      />
      <MisconceptionCallout
        myth="Streaming subscriptions always bill the same way regardless of when you signed up."
        reality={<p>The billing date is fixed by the service, not by the day you joined — which is exactly why a first charge is often <TermLink href="/technology-basics/how-streaming-subscriptions-actually-bill-you">prorated</TermLink> to a smaller, partial amount. Two people who joined the same plan on different days of the month can have completely different first-charge amounts and different fixed renewal dates, even though their ongoing full-price charge ends up identical once their own cycle stabilizes.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "If a first subscription charge looks smaller than expected, check the sign-up date against the billing cycle before assuming it's an error — it's likely proration.",
          "When cancelling, don't assume a refund for the current period is automatic — check the service's specific refund policy if you want the unused portion back.",
          "Update an expiring payment method before the renewal date rather than after — grace periods exist, but they aren't unlimited.",
          "Read How Online Payments Actually Get Processed next to see what happens technically each time a recurring charge is submitted for approval.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why was my first streaming subscription charge less than the full price?", answer: "It was likely prorated — billed only for the number of days remaining until the service's fixed recurring billing date, rather than a full cycle, since you signed up partway through a cycle." },
          { question: "Does cancelling a subscription refund the current billing period?", answer: "Not automatically in most cases. Cancelling stops future renewal charges from occurring, but the current period you already paid for typically continues to the end of its cycle without an automatic refund — check the specific service's refund policy." },
          { question: "What happens if my card expires right before a subscription renewal?", answer: "Most billing systems don't cut off access instantly. They run a short grace period, retrying the charge and notifying you, before actually suspending the account if the payment keeps failing." },
          { question: "Is it legal for a subscription to auto-renew without asking me again?", answer: "Auto-renewal itself is a common, legal billing model called negative option billing, but consumer protection rules in some regions — including an FTC rule in the United States — require that cancelling be at least as easy as signing up." },
          { question: "Do all streaming subscriptions bill on the same schedule I signed up on?", answer: "Not exactly — the billing cycle date is typically fixed by the service once your first prorated charge aligns your account to it, so your recurring charge date is tied to that fixed cycle, not to the literal calendar day you originally joined." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
