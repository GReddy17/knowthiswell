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
  title: "What GDP Actually Measures",
  category: "economics",
  order: 2,
  subtopic: "everyday-economics",
  tags: ["GDP", "gross domestic product", "economic indicators", "economics basics"],
  date: "2026-09-21",
  updated: "2026-09-21",
  lastReviewed: "2026-09-21",
  excerpt: "GDP adds up everything a country's economy produces in a given period — but it was never designed to measure well-being, only economic output.",
  summary: "Gross domestic product (GDP) is the total monetary value of all final goods and services produced within a country's borders during a specific period, typically calculated by adding consumer spending, business investment, government spending, and net exports (exports minus imports) — per the U.S. Bureau of Economic Analysis, GDP measures the scale of economic activity and production, not household well-being, income distribution, or unpaid work, which is why a rising GDP doesn't automatically mean conditions are improving for most people.",
  sources: [
    { label: "U.S. Bureau of Economic Analysis — Gross Domestic Product", url: "https://www.bea.gov/data/gdp/gross-domestic-product" },
    { label: "U.S. Bureau of Labor Statistics — Consumer Price Index", url: "https://www.bls.gov/cpi/" },
  ],
  seeAlso: [
    "economics/how-inflation-actually-erodes-purchasing-power",
    "economics/what-fiscal-policy-actually-means-vs-monetary-policy",
    "general-awareness-basics/how-taxes-fund-public-services-conceptual-overview",
  ],
  glossary: [
    { term: "Final goods and services", definition: "Products sold to their end user, counted once in GDP to avoid double-counting the raw materials or components used to make them." },
    { term: "Net exports", definition: "A country's total exports minus its total imports, one of the four components added together to calculate GDP." },
    { term: "Real GDP", definition: "GDP adjusted to remove the effect of price changes (inflation), allowing economic output to be compared across different time periods on a like-for-like basis." },
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
          "GDP adds up consumer spending, business investment, government spending, and net exports to measure total economic output in a period.",
          "Per the BEA, GDP measures the scale of production and economic activity — it doesn't directly measure well-being, income distribution, or unpaid work.",
          "Real GDP adjusts for inflation, making it possible to compare economic output across different time periods on a like-for-like basis.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">GDP is basically the total dollar value of everything a country&apos;s economy produces and sells in a given period — all the goods and services made and bought, added together. It&apos;s a measure of how much economic activity happened, not a measure of how well people are actually doing or how evenly that activity&apos;s benefits are shared.</div>}
        detailed={<div className="prose-p">Per the U.S. Bureau of Economic Analysis, GDP is calculated by summing four components: consumer spending, business investment, government spending, and <TermLink href="/economics/what-gdp-actually-measures">net exports</TermLink> (exports minus imports). It counts only <TermLink href="/economics/what-gdp-actually-measures">final goods and services</TermLink> — the finished product sold to an end user — specifically to avoid double-counting raw materials and components along the supply chain. Because prices change over time, economists distinguish nominal GDP (measured in current prices) from <TermLink href="/economics/what-gdp-actually-measures">real GDP</TermLink>, which strips out the effect of inflation using data like the BLS Consumer Price Index, allowing genuine comparison of economic output across different years. Crucially, per BEA&apos;s own framing, GDP was designed to measure the scale of economic production and activity — it does not directly capture household well-being, how income and wealth are distributed across a population, or the value of unpaid work like caregiving, which is why economists caution against treating GDP growth alone as proof that typical living conditions are improving.</div>}
      />
      <FootnoteAside>A country can post strong GDP growth while median household income stays flat or falls, if the growth is concentrated narrowly — this isn&apos;t a contradiction in the data, it&apos;s a direct reflection of what GDP does and doesn&apos;t measure.</FootnoteAside>

      <p>This is also why economists typically look at GDP alongside other measures — like median income, unemployment, and inflation — rather than treating it as a single all-purpose scorecard for how an economy is actually serving its population.</p>

      <QuickCheck
        question="A country's GDP grows 4% in a year, but median household income stays roughly flat. What does this combination most directly indicate?"
        options={[
          { text: "The growth in total economic output wasn't evenly reflected in typical household incomes, which GDP alone doesn't measure or guarantee", correct: true, explanation: "Correct. Per BEA framing, GDP measures total economic output, not income distribution — strong aggregate growth can coexist with flat typical incomes if the growth is concentrated narrowly." },
          { text: "The GDP figure must be calculated incorrectly, since GDP growth should always raise median income equally", correct: false, explanation: "There's no requirement that GDP growth translates proportionally to every household's income — GDP measures aggregate output, not its distribution." },
          { text: "This combination is statistically impossible", correct: false, explanation: "This is a well-documented real-world pattern, not a statistical impossibility — it reflects exactly what GDP does and doesn't measure." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Adding up the four components (baseline case)</h3>
      <div className="prose-p">In a simplified economy, consumer spending totals $70 billion, business investment $15 billion, government spending $20 billion, and net exports negative $5 billion (imports exceed exports) — GDP for the period is the sum: $100 billion.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Nominal versus real GDP during high inflation (edge case / variation)</h3>
      <div className="prose-p">If nominal GDP rises 6% in a year but inflation was 5% over that same period, real GDP — the inflation-adjusted figure — grew only about 1%, meaning most of the nominal increase reflected higher prices, not more actual goods and services produced.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Unpaid work outside GDP (real-world / applied case)</h3>
      <div className="prose-p">A parent who leaves paid employment to provide full-time childcare at home reduces measured GDP (their prior paid work no longer counts), even though the actual care work still happens and still has real economic value — a well-documented limitation of GDP as a measure of an economy&apos;s total productive activity, per BEA&apos;s own framing of what GDP does and doesn&apos;t capture.</div>

      <QuickCheck
        question="Why does a parent leaving paid work to provide childcare at home reduce measured GDP, even though the same amount of care work is still being done?"
        options={[
          { text: "GDP only counts market transactions for goods and services, so unpaid work like at-home caregiving isn't included even though it has real economic value", correct: true, explanation: "Correct. This is a well-documented, acknowledged limitation of GDP — it measures market-based production, not the total value of all productive activity in an economy." },
          { text: "GDP counts unpaid work but at a lower value than paid work", correct: false, explanation: "GDP doesn't include unpaid work at any value — it's excluded entirely from the standard calculation, not simply discounted." },
          { text: "This scenario wouldn't actually affect GDP at all", correct: false, explanation: "It does affect measured GDP, since the parent's prior paid work no longer counts toward it — this is exactly the limitation being illustrated." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="GDP = consumer spending + investment + government spending + net exports"
        type="detail"
        svgSrc="/diagrams/economics-what-gdp-actually-measures-detail.svg"
        altText="A formula diagram: GDP equals consumer spending plus business investment plus government spending plus net exports (exports minus imports)."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating GDP growth as automatic proof that typical living conditions are improving.", fix: "Check GDP alongside other measures like median income and unemployment, since GDP doesn't directly measure distribution or well-being." },
          { mistake: "Comparing nominal GDP across years without adjusting for inflation.", fix: "Use real GDP for any comparison across time periods, since it removes the distorting effect of price changes." },
          { mistake: "Assuming GDP captures all economically valuable activity.", fix: "Remember GDP excludes unpaid work like caregiving and informal exchanges, per BEA's own framing of what it measures." },
        ]}
      />
      <MisconceptionCallout
        myth="A rising GDP means the average person's financial situation is getting better."
        reality={<p>Per the BEA&apos;s own framing, GDP measures the total scale of economic production and activity — it does not directly measure how that output is distributed across a population, household well-being, or unpaid work. GDP can rise while median income stays flat or even falls, if growth is concentrated narrowly. This is exactly why economists pair GDP with other indicators, like median household income and unemployment, rather than treating it as a standalone measure of how typical people are actually faring.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "When reading a GDP report, check whether it's nominal or real (inflation-adjusted) — they tell different stories.",
          "Pair GDP figures with median income and unemployment data before drawing conclusions about typical living conditions.",
          "Remember GDP doesn't count unpaid work — it measures market-based production and activity specifically.",
          "Treat GDP as one economic indicator among several, not a complete scorecard for how an economy is serving its population.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does GDP actually measure?", answer: "The total monetary value of all final goods and services produced within a country's borders in a given period, calculated by summing consumer spending, business investment, government spending, and net exports, per BEA guidance." },
          { question: "Is GDP the same thing as national well-being or standard of living?", answer: "No — per BEA's own framing, GDP measures the scale of economic production, not household well-being, income distribution, or unpaid work." },
          { question: "What's the difference between nominal and real GDP?", answer: "Nominal GDP is measured in current prices; real GDP adjusts for inflation, allowing genuine comparison of economic output across different time periods." },
          { question: "Why doesn't GDP count unpaid work like caregiving?", answer: "GDP measures market-based transactions for goods and services — unpaid work has real economic value but isn't captured by the standard calculation, a well-documented and acknowledged limitation." },
          { question: "Can GDP grow while most people's incomes stay flat?", answer: "Yes — since GDP measures total output, not its distribution, growth concentrated in certain sectors or among certain groups can coexist with flat typical household income." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
