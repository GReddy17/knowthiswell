---
title: "Compound Interest"
category: "money-personal-finance"
subtopic: "investing-basics"
tags: ["finance", "investing-basics", "interest"]
date: "2026-07-15"
updated: "2026-08-03"
lastReviewed: "2026-07-28"
excerpt: "The mechanism by which growth feeds on its own past growth — the single most important idea in long-term investing."
summary: "The mechanism by which growth feeds on its own past growth — the single most important idea in long-term investing, and one most people can state but few actually feel."
sources:
  - label: "Investor.gov — Compound Interest Calculator & methodology notes"
    url: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator"
  - label: "Federal Reserve Board — Consumer guide to interest rate disclosure"
    url: "https://www.federalreserve.gov/consumerscommunities.htm"
seeAlso:
  - "money-personal-finance/simple-vs-compound-interest"
  - "money-personal-finance/rule-of-72-explained"
author:
  slug: "hari-reddy"
  name: "Hari Reddy"
  credentialLine: "Founder, KnowThisWell"
draft: false
---

## The mechanism

<ModeToggle
  labels={{ plain: "Plain", detailed: "Detailed" }}
  plain={<p>Compound interest means your money earns money, and then that new money starts earning money too. Every year the pile grows a little faster than the year before, because there's more of it to grow.</p>}
  detailed={<p>Compound interest is what happens when the interest earned on a sum of money is added back to that sum, so that future interest is calculated on a larger base. Each period's gain becomes part of next period's principal — the balance doesn't just grow, the rate at which it grows grows.</p>}
/>

This distinguishes it from simple interest, where the interest payment is calculated on the original principal only, period after period, and never accelerates.
<FootnoteAside>A $10,000 loan at 6% simple interest over 20 years costs $12,000 in interest, flat. The same loan compounded annually costs roughly $22,071 — nearly double, from the same stated rate.</FootnoteAside>
Over short spans the two look almost identical. Over long spans they diverge sharply.

<QuickCheck
  question='A savings account advertises "5% annually, compounded monthly." What is true about the actual return you will earn in a year?'
  options={[
    { text: "It'll be exactly 5%, since that's the stated rate", correct: false, explanation: "This misreads the mechanism — compounding only ever pushes the effective rate up, never down." },
    { text: "It'll be slightly more than 5%", correct: true, explanation: "Correct. Monthly compounding means each month's interest starts earning interest too, so the effective annual yield ends up slightly above the stated rate." },
    { text: "It'll be slightly less than 5%, since it's split into months", correct: false, explanation: "It's the opposite — more frequent compounding periods raise the effective return, they never lower it." }
  ]}
/>

## Why compounding frequency matters

The more frequently interest is calculated and added back to the principal, the faster the balance grows — daily compounding outpaces monthly, which outpaces annual, for the same stated rate. This is particularly relevant to credit card debt, where daily compounding works against the borrower the same way it works for an investor.

<MisconceptionCallout
  myth="Compound interest only matters if you're investing large sums."
  reality={<p>Frequency and time horizon matter more than starting amount. A small sum compounding for thirty years often outgrows a much larger sum compounding for five.</p>}
/>

## Try it yourself

<EntryCalculator
  title="Compound growth calculator"
  fields={[
    { key: "principal", label: "Starting amount", defaultValue: 10000 },
    { key: "rate", label: "Annual return", defaultValue: 7, step: 0.1, suffix: "%" },
    { key: "years", label: "Years", defaultValue: 30 }
  ]}
  resultLabel="Ending balance"
  formula="compoundGrowth"
/>
