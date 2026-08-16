---
title: "The Rule of 72"
tags: ["finance", "investing-basics", "interest"]
date: "2026-08-01"
updated: "2026-08-10"
lastReviewed: "2026-08-10"
excerpt: "A quick mental-math shortcut for estimating how long money takes to double at a given rate of return."
summary: "A quick mental-math shortcut for estimating how long money takes to double at a given rate of return — no calculator required, accurate enough for most real decisions."
sources:
  - label: "Investor.gov — Rule of 72 explainer"
    url: "https://www.investor.gov/introduction-investing/investing-basics/glossary/rule-72"
seeAlso:
  - "money-personal-finance/compound-interest-explained"
author:
  slug: "hari-reddy"
  name: "Hari Reddy"
  credentialLine: "Founder, KnowThisWell"
draft: false
---

## The shortcut

Divide 72 by the annual interest rate to get roughly how many years it
takes for an amount to double. At 6% annual growth, money doubles in
about 12 years (72 ÷ 6). At 9%, about 8 years.

<EntryCalculator
  title="Years to double"
  fields={[
    { key: "rate", label: "Annual return", defaultValue: 7, step: 0.1, suffix: "%" }
  ]}
  resultLabel="Approximate years to double"
  formula="ruleOf72"
  formatResult="years"
/>

## Why it works

This is an approximation of the exact compound interest formula, close
enough for most real decisions without needing a calculator.
