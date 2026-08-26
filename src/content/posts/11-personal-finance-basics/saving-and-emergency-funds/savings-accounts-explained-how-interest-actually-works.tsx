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
  title: "Savings Accounts Explained (How Interest Actually Works)",
  category: "personal-finance-basics",
  order: 10,
  subtopic: "saving-and-emergency-funds",
  tags: ["savings account", "interest rate", "APY", "FDIC insurance", "personal finance basics"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "A savings account pays interest because the bank lends out your deposited money and shares a slice of what it earns back with you — the account itself is a real, federally insured loan arrangement, not just a digital jar.",
  summary: "A savings account is a deposit account that pays interest because the bank uses deposited funds to make loans and other investments, sharing a portion of that return with depositors as interest — in the US, deposits up to $250,000 per depositor per bank are FDIC-insured against bank failure.",
  sources: [
    { label: "FDIC — Deposit Insurance Basics", url: "https://www.fdic.gov/deposit-insurance" },
    { label: "Consumer Financial Protection Bureau — Savings Accounts", url: "https://www.consumerfinance.gov/consumer-tools/save-and-build-wealth/" },
    { label: "Federal Reserve — How Banks Work", url: "https://www.federalreserve.gov/" },
  ],
  seeAlso: [
    "personal-finance-basics/high-yield-savings-accounts-explained",
    "personal-finance-basics/simple-vs-compound-interest-cross-link-to-math-and-numbers",
    "personal-finance-basics/how-checking-accounts-work",
  ],
  glossary: [
    {"term":"Interest","definition":"A payment made for the use of money — a bank pays interest to depositors because it uses deposited funds to make loans, and shares part of the return with the account holder."},
    {"term":"APY","definition":"Annual Percentage Yield — the real annual rate of return on a savings account including the effect of compounding, used to compare accounts on a like-for-like basis."},
    {"term":"FDIC insurance","definition":"Federal Deposit Insurance Corporation coverage that protects deposits up to $250,000 per depositor, per insured bank, per ownership category, if the bank fails."},
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
      "A savings account pays interest because the bank lends deposited money out (as mortgages, auto loans, and other credit) and shares part of the return with depositors.",
      "In the US, deposits are FDIC-insured up to $250,000 per depositor, per bank, per ownership category — this is exactly why a savings account is considered safe even though the bank is actively using the money.",
      "APY (Annual Percentage Yield), not the stated interest rate alone, is the real number to compare between accounts, since it already accounts for how often interest compounds.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A savings account isn&apos;t just a place a bank stores your money for safekeeping — the bank actually uses deposited funds to make loans to other customers, and pays you <TermLink href="/personal-finance-basics/savings-accounts-explained-how-interest-actually-works">interest</TermLink> as a share of what it earns from doing that. This is why interest exists at all: it&apos;s a real payment for letting the bank use your money, not a bonus the bank gives away.</div>}
      detailed={<div className="prose-p">Banks operate on a model called fractional-reserve banking: they keep a portion of deposits on hand and lend out the rest as mortgages, auto loans, business credit, and other products, earning interest on those loans at a higher rate than they pay depositors — the difference (the &quot;spread&quot;) is a core part of how banks make money. Because your deposited funds are actively being used rather than sitting untouched in a vault, deposit accounts carry a real (if historically rare) failure risk if a bank becomes insolvent — which is exactly what <TermLink href="/personal-finance-basics/savings-accounts-explained-how-interest-actually-works">FDIC insurance</TermLink> exists to cover, protecting deposits up to $250,000 per depositor, per insured bank, per ownership category. The rate a bank advertises should be compared using <TermLink href="/personal-finance-basics/savings-accounts-explained-how-interest-actually-works">APY</TermLink> rather than the raw interest rate, since APY already factors in how frequently interest compounds (daily, monthly, etc.), making it the number that actually reflects what you&apos;ll earn in a year.</div>}
      />
      <FootnoteAside>FDIC insurance was created in 1933, directly in response to the wave of bank failures and lost deposits during the Great Depression — it remains one of the reasons a modern bank run of the kind seen in the 1930s is far less common today, since depositors know their covered funds are protected regardless of what happens to the bank itself.</FootnoteAside>

      <p>
      Turning the interest rate into an actual dollar figure over time is where <TermLink href="/personal-finance-basics/simple-vs-compound-interest-cross-link-to-math-and-numbers">simple interest math</TermLink> comes in — the calculation below uses simple interest as the clearest baseline case.
      </p>

      <QuickCheck
      question="Why is a bank able to pay you interest on a savings account at all?"
      options={[
      { text: "Banks are required by law to pay interest as a customer courtesy, unrelated to what they do with the money", correct: false, explanation: "Interest isn't a courtesy or regulatory requirement in that sense — it's a real payment tied to what the bank actually does with deposited funds." },
      { text: "The bank lends out deposited money (mortgages, auto loans, etc.) and earns interest on those loans, sharing a portion of that return with depositors as the account's interest", correct: true, explanation: "Correct. Interest exists because deposited money is actively being used by the bank to generate a return, and depositors get a share of that return for allowing their funds to be used this way." },
      { text: "Interest comes from government subsidies paid directly to banks", correct: false, explanation: "Ordinary savings account interest isn't government-subsidized — it comes from the bank's own lending and investment activity using deposited funds." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Simple interest on a basic savings balance (baseline case)</h3>
      <div className="prose-p">
      $1,000 in a savings account at a 1% annual rate for 1 year, using simple interest: $1,000 x (1 + 0.01 x 1) = $1,010 — $10 earned. This is the baseline mechanism before compounding frequency is even considered.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why the FDIC $250,000 limit is per bank, not per account (edge case / variation)</h3>
      <div className="prose-p">
      Someone with $200,000 in a savings account and $100,000 in a checking account at the same bank, under the same ownership category, has $300,000 total at that one bank — only $250,000 of it is FDIC-insured, leaving $50,000 uninsured in the event of a bank failure. Spreading the same $300,000 across two separate FDIC-insured banks (say $150,000 at each) would keep the entire amount fully insured, since the $250,000 limit applies per depositor, per bank, not per account or as a single combined figure across all banks.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Comparing two accounts by APY instead of the headline rate (real-world / applied case)</h3>
      <div className="prose-p">
      Bank A advertises a 4.0% rate compounded monthly; Bank B advertises a 4.0% rate compounded daily. Because Bank B compounds more frequently, its actual APY comes out slightly higher (roughly 4.08% vs roughly 4.07% for Bank A on the same stated rate) — a small difference on modest balances, but the point stands generally: two accounts with the identical advertised rate are not necessarily identical in what they actually pay, which is exactly why APY, not the raw rate, is the correct number for comparison.
      </div>

      <QuickCheck
      question="Two savings accounts both advertise a 4.0% interest rate, but one compounds daily and the other compounds monthly. Will they pay out exactly the same amount over a year?"
      options={[
      { text: "Yes — the advertised rate is the only number that matters", correct: false, explanation: "The advertised rate alone doesn't capture compounding frequency — two accounts with the same stated rate but different compounding frequencies produce slightly different actual returns (reflected in their APY)." },
      { text: "No — more frequent compounding (daily vs. monthly) produces a slightly higher actual return, reflected in a slightly higher APY, even with the same stated rate", correct: true, explanation: "Correct. This is exactly why APY, which already accounts for compounding frequency, is the correct figure to compare between accounts rather than the raw advertised rate." },
      { text: "No — monthly compounding always outperforms daily compounding", correct: false, explanation: "This has the direction backwards — more frequent compounding (daily) generally produces a marginally higher return than less frequent compounding (monthly) on the same stated rate, not the other way around." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Where savings account interest actually comes from"
      type="flow"
      svgSrc="/diagrams/personal-finance-basics-savings-accounts-explained-how-interest-actually-works-flow.svg"
      altText="A flow diagram showing a depositor placing money into a bank, the bank lending most of that money out as mortgages and other loans to borrowers who pay the bank interest, and the bank returning a smaller share of that interest back to the original depositor as savings account interest, with FDIC insurance shown as a shield protecting the depositor's covered balance."
      />
      <p>
      The depositor&apos;s interest is a direct share of the interest the bank earns from lending the money out elsewhere — FDIC insurance sits alongside this flow as the safety net if the bank itself fails.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Comparing savings accounts using the stated interest rate instead of APY.", fix: "Always compare APY, which already reflects how often interest compounds — it's the number that actually predicts a year's earnings." },
      { mistake: "Assuming a single bank account can hold unlimited FDIC-insured funds.", fix: "Remember the $250,000 limit applies per depositor, per insured bank, per ownership category — larger balances may need to be spread across multiple banks for full coverage." },
      { mistake: "Treating a savings account balance as untouched, static cash rather than money the bank is actively lending out.", fix: "Understand that the interest paid is a direct consequence of the bank using deposited funds — this is also exactly why FDIC insurance exists as a backstop." },
      ]}
      />
      <MisconceptionCallout
      myth="Money in a savings account just sits there untouched, and interest is essentially free money the bank chooses to give out."
      reality={<p>The bank actively lends out most deposited funds as mortgages, auto loans, and other credit, earning interest on those loans — the interest paid to a depositor is a direct share of that earned return, not a discretionary bonus. This is also precisely why FDIC insurance matters: because the money is genuinely being used rather than held untouched, deposit insurance protects depositors if a bank&apos;s lending activity goes wrong.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Estimate simple interest on a savings balance"
      fields={[
      { key: "principal", label: "Starting balance ($)", defaultValue: 1000 },
      { key: "rate", label: "Annual interest rate (%)", defaultValue: 1, step: 0.1 },
      { key: "years", label: "Years", defaultValue: 1, step: 1 },
      ]}
      resultLabel="Balance after simple interest"
      formula="simpleInterest"
      formatResult="currency"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Compare savings accounts by APY, not the advertised interest rate alone.",
      "Confirm any bank holding your savings is FDIC-insured (or NCUA-insured, for credit unions) before depositing.",
      "If total deposits at one bank approach $250,000, consider whether spreading funds across multiple insured banks makes sense for full coverage.",
      "Check whether a savings account has minimum balance requirements or monthly fees that could offset the interest earned.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How does a savings account earn interest?", answer: "The bank lends out deposited money as loans (mortgages, auto loans, etc.) and earns interest on those loans, sharing a portion of that return with depositors as the savings account's interest." },
      { question: "Is money in a savings account safe?", answer: "In the US, deposits are FDIC-insured up to $250,000 per depositor, per insured bank, per ownership category, protecting the covered amount even if the bank fails." },
      { question: "What's the difference between interest rate and APY?", answer: "The interest rate is the base rate before compounding; APY (Annual Percentage Yield) reflects the actual annual return including the effect of how often interest compounds, making it the correct figure for comparing accounts." },
      { question: "Can you lose money in a savings account?", answer: "The nominal dollar balance in an FDIC-insured savings account won't decrease on its own, but its purchasing power can erode over time if the interest rate is lower than inflation." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
