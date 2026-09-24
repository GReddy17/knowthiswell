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
  title: "How Interest Rates Actually Get Set",
  category: "economics",
  order: 3,
  subtopic: "everyday-economics",
  tags: ["interest rates", "federal funds rate", "federal reserve", "monetary policy", "mortgages and credit cards"],
  date: "2026-09-23",
  updated: "2026-09-23",
  lastReviewed: "2026-09-23",
  excerpt: "The Federal Reserve doesn't set your mortgage or credit card rate directly — it sets a target for the rate banks charge each other overnight, and that ripples outward through the broader cost of borrowing.",
  summary: "Interest rates on everyday products like mortgages, credit cards, and savings accounts aren't set directly by the Federal Reserve — per the Fed's own description of its role, the Federal Open Market Committee sets a target range for the federal funds rate, the rate banks charge each other for overnight loans, and uses a small set of tools to keep actual bank-to-bank lending inside that range, after which the change ripples outward through the broader cost of borrowing and lending in the economy, influencing but not dictating the specific rate any individual bank offers on any individual product.",
  sources: [
    { label: "Federal Reserve — The Fed Explained: How the Fed Influences Interest Rates", url: "https://www.federalreserve.gov/aboutthefed/fedexplained/accessible-version.htm" },
    { label: "Federal Reserve — Federal Open Market Committee", url: "https://www.federalreserve.gov/monetarypolicy/fomc.htm" },
    { label: "Federal Reserve — Monetary Policy", url: "https://www.federalreserve.gov/monetarypolicy.htm" },
  ],
  seeAlso: [
    "economics/what-fiscal-policy-actually-means-vs-monetary-policy",
    "economics/how-inflation-actually-erodes-purchasing-power",
    "personal-finance-basics/understanding-loans-principal-interest-and-terms",
    "personal-finance-basics/savings-accounts-explained-how-interest-actually-works",
  ],
  glossary: [
    { term: "Federal funds rate", definition: "The interest rate banks charge each other for overnight loans of reserve balances — the specific rate the Federal Reserve targets, not a rate charged directly to consumers." },
    { term: "Federal Open Market Committee (FOMC)", definition: "The Federal Reserve committee that meets on a regular schedule to set the target range for the federal funds rate." },
    { term: "Rate transmission", definition: "The process by which a change in the Fed's target rate ripples outward through banks' own cost of funds to influence the rates offered on consumer and business lending and deposit products." },
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
          "The Federal Reserve doesn't set your mortgage, credit card, or savings rate directly — it sets a target range for the federal funds rate, the rate banks charge each other for overnight loans.",
          "That target ripples outward through the broader cost of borrowing and lending in the economy, influencing — not dictating — the rates banks offer on consumer and business products.",
          "Different products respond at different speeds: variable-rate products tied to a bank's prime rate can reprice within days, while a 30-year fixed mortgage already in place doesn't change at all.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">When the news says &quot;the Fed raised interest rates,&quot; it doesn&apos;t mean your bank got a memo setting your mortgage rate. The Fed sets a target for a specific, narrow rate: what banks charge each other to borrow money overnight from one another. Banks need to do this constantly to meet reserve requirements. When that overnight rate moves, it changes how expensive or cheap money is for banks generally — and banks pass some of that change on to you, in the rates they charge you to borrow and the rates they pay you to save. It&apos;s a ripple, not a direct line.</div>}
        detailed={<div className="prose-p">Per the Federal Reserve&apos;s own explanation of its role, the <TermLink href="/economics/how-interest-rates-actually-get-set">Federal Open Market Committee (FOMC)</TermLink> meets on a regular schedule (eight times a year) and sets a target range — not a single fixed number — for the <TermLink href="/economics/how-interest-rates-actually-get-set">federal funds rate</TermLink>, the rate depository institutions charge each other for overnight loans of reserve balances. The Fed doesn&apos;t order banks to charge that exact rate; instead, it uses tools like the interest it pays banks on reserves and the rate on its overnight reverse repurchase agreements to make it more or less attractive for banks to keep cash at the Fed versus lending it elsewhere, which keeps the actual market rate trading close to the target range. From there, <TermLink href="/economics/how-interest-rates-actually-get-set">rate transmission</TermLink> takes over: as banks&apos; own cost of overnight funds shifts, so does the cost basis they use to price loans and deposits. Many U.S. banks set their prime lending rate using an industry convention tied to the federal funds rate, and variable-rate products (credit cards, home equity lines, some adjustable-rate mortgages) that reference the prime rate can reprice within days of a Fed move. Long-term fixed products like a 30-year mortgage respond less directly — they track bond market yields, which move on expectations of where the Fed is headed over the next several years, not just the most recent announcement.</div>}
      />
      <FootnoteAside>The federal funds rate itself is technically a market rate, not a number the Fed decrees by fiat — the Fed influences it toward the target range using its administered tools rather than setting it by direct order, per the Fed&apos;s own description of the mechanism.</FootnoteAside>

      <p>This is also why a rate announcement doesn&apos;t touch every loan you already have. A fixed-rate loan is priced once, at origination — the rate is locked into the loan&apos;s terms and doesn&apos;t move with the Fed afterward. Only new originations, and existing variable-rate products that are explicitly tied to a moving benchmark, reprice when the underlying rate environment shifts.</p>

      <QuickCheck
        question="News coverage says 'the Fed raised interest rates by a quarter point.' What did the Fed actually change?"
        options={[
          { text: "The target range for the federal funds rate — the rate banks charge each other for overnight loans, not a rate charged directly to any consumer", correct: true, explanation: "Correct. The FOMC sets a target range for the federal funds rate. Consumer rates respond indirectly, through banks' own changed cost of funds, not because the Fed set them directly." },
          { text: "Every consumer's mortgage rate, by the same amount, immediately", correct: false, explanation: "The Fed doesn't set consumer rates directly, and existing fixed-rate mortgages don't change at all when the Fed moves — only new loans and rate-linked variable products are affected, and even those don't move by an identical amount." },
          { text: "The interest rate on U.S. Treasury bonds directly, by law", correct: false, explanation: "Treasury yields are set by bond market trading, not by direct Fed order — they respond to expectations about Fed policy, among other factors, but the Fed doesn't set them by decree." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A quarter-point rate hike and a credit card (baseline case)</h3>
      <div className="prose-p">The FOMC raises its target range for the federal funds rate by 0.25 percentage points at a scheduled meeting. Within the following billing cycles, a credit card issuer whose variable APR is contractually tied to the prime rate raises that APR by roughly the same amount — a fast, fairly direct pass-through because the product is explicitly linked to a moving benchmark.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same hike and a 30-year fixed mortgage (edge case / variation)</h3>
      <div className="prose-p">The same rate hike happens, but average 30-year fixed mortgage rates barely move — or even fall — because mortgage rates track longer-term bond yields, which are driven more by where markets expect Fed policy to be over the next several years than by the most recent single meeting. This is the clearest illustration that the ripple is indirect and mediated by broader market expectations, not a mechanical, product-by-product pass-through.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The same hike and a savings account (real-world / applied case)</h3>
      <div className="prose-p">Online banks competing for deposits often raise the annual percentage yield (APY) on high-yield savings accounts within days of a Fed hike, because their own cost of alternative short-term funding just rose — paying depositors more becomes relatively more attractive. A large brick-and-mortar bank with less need to attract new deposits may move its savings rate far more slowly, or barely at all, even facing the identical Fed decision — a reminder that the ripple reaches different institutions and products at different speeds.</div>

      <QuickCheck
        question="Two banks face the same Fed rate hike. One raises its savings account APY within days; another barely moves its rate for months. What best explains this?"
        options={[
          { text: "The Fed sets a target rate that influences the broader cost of money — individual banks still make their own competitive and business decisions about how much of that change to pass on, and how fast", correct: true, explanation: "Correct. The Fed's target rate shifts the environment every bank operates in, but each bank sets its own specific rates based on its own funding needs and competitive position — the ripple isn't a uniform, mandated pass-through." },
          { text: "One of the two banks is violating Federal Reserve rules", correct: false, explanation: "Banks aren't required to move their rates by any specific amount or on any specific timeline in response to a Fed decision — setting the actual consumer rate is each bank's own business decision." },
          { text: "Only banks that are Federal Reserve members have to respond to Fed rate changes at all", correct: false, explanation: "The federal funds rate shifts the broader cost of money that affects banks generally, not just a subset defined by formal Fed membership status — the difference in the example comes from each bank's own funding and competitive situation, not membership status." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How a Fed rate target ripples out to consumer rates"
        type="flow"
        svgSrc="/diagrams/economics-how-interest-rates-actually-get-set-flow.svg"
        altText="A flow diagram: the FOMC sets a target range for the federal funds rate, which changes banks' own cost of overnight borrowing, which then ripples outward to influence — not dictate — the rates banks offer on mortgages, credit cards, and savings accounts."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the Fed sets your specific mortgage or credit card rate directly.", fix: "Understand the Fed sets a target for the rate banks charge each other overnight — your bank then sets its own consumer rates based on its own cost of funds and competitive position." },
          { mistake: "Expecting every rate you hold to move immediately after a Fed announcement.", fix: "Check whether your product is fixed or variable — fixed-rate loans already in place don't reprice; only new originations and rate-linked variable products respond, and not all at the same speed." },
          { mistake: "Treating a Fed rate move and a mortgage rate move as the same thing.", fix: "Recognize that long-term fixed mortgage rates track bond market yields and future rate expectations more than any single Fed meeting, so the two can even move in opposite directions." },
        ]}
      />
      <MisconceptionCallout
        myth="The Federal Reserve directly sets the interest rate on my mortgage, credit card, or savings account."
        reality={<p>Per the Fed&apos;s own description of its role, it sets a target range for the federal funds rate — the rate banks charge each other for overnight loans — and uses a small set of tools to keep the actual bank-to-bank rate inside that range. That change then ripples outward through the broader cost of borrowing and lending in the economy, influencing but not directly setting the rate any individual bank offers on any individual product. Your specific rate also reflects your own creditworthiness, the loan&apos;s term, and each lender&apos;s own competitive and funding decisions — several layers removed from the Fed&apos;s target itself.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See the ripple in numbers</h2>
      <p>Because consumer rates trace back to shifts in the broader cost of money, even a rate difference that sounds small compounds meaningfully over years on a balance. This calculator illustrates that compounding effect generally — it doesn&apos;t predict Fed policy or model any specific account or loan.</p>
      <EntryCalculator
        title="Estimate how a rate difference compounds on a balance over time"
        description="Illustrates why even a one- or two-percentage-point difference in a rate matters more the longer money sits at that rate — the same compounding math applies whether the balance is savings or debt."
        fields={[
          { key: "principal", label: "Starting balance ($)", defaultValue: 5000 },
          { key: "rate", label: "Annual rate (%)", defaultValue: 4, step: 0.1 },
          { key: "years", label: "Years", defaultValue: 10, step: 1 },
        ]}
        resultLabel="Balance after compounding"
        formula="compoundGrowth"
        formatResult="currency"
        disclaimer="Illustrative only. This is a general compounding calculation, not a projection of future Federal Reserve policy, a specific bank's rate, or your own account or loan terms."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "When you hear 'the Fed raised/cut rates,' recognize it's a target for bank-to-bank overnight lending, not your specific consumer rate.",
          "Check whether your loan or account is fixed or variable — only variable products tied to a moving benchmark reprice quickly.",
          "For a mortgage specifically, compare rate movement to longer-term bond yields and rate expectations, not just the most recent Fed meeting.",
          "This is general educational information about a mechanism, not a rate forecast or personalized financial advice — consult a licensed financial professional for decisions specific to your situation.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the federal funds rate?", answer: "The interest rate banks charge each other for overnight loans of reserve balances — per the Federal Reserve, it's the specific rate the FOMC targets, not a rate charged directly to consumers." },
          { question: "Does the Federal Reserve set mortgage rates?", answer: "Not directly. The Fed sets a target range for the federal funds rate, which influences the broader cost of borrowing in the economy — mortgage rates specifically respond more to longer-term bond market yields and rate expectations than to any single Fed decision." },
          { question: "Why do credit card rates change so fast after a Fed rate announcement?", answer: "Many credit cards carry a variable APR explicitly tied to the prime rate, which many banks set using a convention linked to the federal funds rate — because the link is direct and contractual, these rates can reprice within one or two billing cycles of a Fed move." },
          { question: "Why doesn't my existing fixed-rate loan change when the Fed changes rates?", answer: "A fixed rate is locked in at origination as part of the loan's terms — Fed rate changes only affect new originations and existing variable-rate products explicitly tied to a moving benchmark, not loans already fixed in place." },
          { question: "How often does the Fed change its target rate?", answer: "The Federal Open Market Committee meets on a regular schedule, eight times a year, to review and set its target range for the federal funds rate — it can hold the rate steady, raise it, or lower it at any of these scheduled meetings." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
