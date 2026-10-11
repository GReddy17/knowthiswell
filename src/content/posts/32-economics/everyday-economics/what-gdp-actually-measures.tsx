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
  title: "What GDP Actually Measures",
  category: "economics",
  order: 2,
  subtopic: "everyday-economics",
  tags: ["GDP", "gross domestic product", "economic indicators", "economics basics"],
  date: "2026-09-21",
  updated: "2026-10-10",
  youtubeShort: false, youtubeLong: false,
  seoScore: 75, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-10-10",
  excerpt: "GDP adds up everything a country's economy produces in a given period — but it was never designed to measure well-being, only economic output.",
  summary: "Gross domestic product (GDP) is the total monetary value of all final goods and services produced within a country's borders during a specific period, typically calculated by adding consumer spending, business investment, government spending, and net exports (exports minus imports) — per the U.S. Bureau of Economic Analysis, GDP measures the scale of economic activity and production, not household well-being, income distribution, or unpaid work, which is why a rising GDP doesn't automatically mean conditions are improving for most people.",
  sources: [
    { label: "U.S. Bureau of Economic Analysis — Gross Domestic Product", url: "https://www.bea.gov/data/gdp/gross-domestic-product" },
    { label: "U.S. Bureau of Economic Analysis — What to Know About GDP", url: "https://www.bea.gov/resources/learning-center/what-to-know-gdp" },
    { label: "U.S. Bureau of Labor Statistics — Consumer Price Index", url: "https://www.bls.gov/cpi/" },
  ],
  seeAlso: [
    "economics/how-inflation-actually-erodes-purchasing-power",
    "economics/what-fiscal-policy-actually-means-vs-monetary-policy",
    "general-awareness-basics/how-taxes-fund-public-services-conceptual-overview",
    "economics/what-supply-and-demand-actually-predicts",
    "economics/how-a-recession-actually-gets-defined",
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

export const quiz: QuizBankItem[] = [
  {"question": "Which four components add up to GDP?", "difficulty": "easy", "options": [{"text": "Consumer spending, business investment, government spending and net exports", "correct": true, "explanation": "That is the spending approach BEA uses to describe GDP."}, {"text": "Wages, profits, rent and taxes only", "correct": false, "explanation": "Those are income measures, not the four spending components named here."}, {"text": "Exports, imports, savings and debt", "correct": false, "explanation": "Savings and debt are not GDP components, and imports are subtracted inside net exports."}]},
  {"question": "Why does GDP count only final goods and services?", "difficulty": "medium", "options": [{"text": "To avoid counting the same raw materials and parts twice", "correct": true, "explanation": "The flour is already inside the price of the bread, so only the bread is counted."}, {"text": "Because raw materials have no economic value", "correct": false, "explanation": "They have value, but that value is already included in the final product's price."}, {"text": "Because only imported goods are counted", "correct": false, "explanation": "GDP measures production within a country's borders."}]},
  {"question": "What does real GDP remove that nominal GDP keeps?", "difficulty": "easy", "options": [{"text": "The effect of price changes (inflation)", "correct": true, "explanation": "Real GDP lets you compare output across years on a like-for-like basis."}, {"text": "Government spending", "correct": false, "explanation": "Both versions include government spending."}, {"text": "Net exports", "correct": false, "explanation": "Both versions include net exports."}]},
  {"question": "Nominal GDP rises 6% in a year while prices rise 5%. Roughly how much did real GDP grow?", "difficulty": "medium", "options": [{"text": "About 1%", "correct": true, "explanation": "Most of the nominal increase came from higher prices, not more output."}, {"text": "About 11%", "correct": false, "explanation": "Inflation is subtracted, not added."}, {"text": "About 6%", "correct": false, "explanation": "6% is the nominal figure before removing inflation."}]},
  {"question": "When the news says \"GDP grew 2%\", what is usually being reported?", "difficulty": "medium", "options": [{"text": "The percent change in real GDP from the previous quarter or year", "correct": true, "explanation": "BEA notes the headline number people hear is usually this rate of change, not the trillion-dollar total."}, {"text": "The total dollar size of the economy", "correct": false, "explanation": "The total is in trillions of dollars; the headline is a growth rate."}, {"text": "The share of GDP spent by government", "correct": false, "explanation": "That is a different statistic."}]},
  {"question": "How many times does BEA estimate GDP for each quarter?", "difficulty": "hard", "options": [{"text": "Three: an advance, a second and a third estimate", "correct": true, "explanation": "Each later estimate adds source data that was not available the month before."}, {"text": "Once, and it never changes", "correct": false, "explanation": "BEA revises its quarterly estimates as more data arrive."}, {"text": "Twelve, one every week", "correct": false, "explanation": "New GDP figures come out monthly, covering three estimates per quarter."}]},
  {"question": "A country imports more than it exports. What happens to the net exports part of GDP?", "difficulty": "medium", "options": [{"text": "It is negative, which lowers the GDP total", "correct": true, "explanation": "Net exports equal exports minus imports."}, {"text": "It is ignored", "correct": false, "explanation": "Net exports are always one of the four components."}, {"text": "It is added as a positive number", "correct": false, "explanation": "A trade deficit makes net exports negative."}]},
  {"question": "Which of these does standard GDP leave out?", "difficulty": "easy", "options": [{"text": "Unpaid caregiving at home", "correct": true, "explanation": "GDP measures market production, so unpaid work is excluded even though it has real value."}, {"text": "A new car sold to a household", "correct": false, "explanation": "That is consumer spending on a final good, which GDP counts."}, {"text": "A government building a road", "correct": false, "explanation": "Government spending on goods and services is counted."}]},
];

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

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">GDP at a glance</h2>
      <div className="prose-p">
      <strong>Short answer:</strong> GDP (gross domestic product) is the dollar value of all the final goods and services produced inside a country in a period. You get it by adding consumer spending, business investment, government spending and net exports. It measures how much the economy produced, not how well people are living. And the &quot;GDP grew 2%&quot; you hear in the news is almost always the percent change in <em>real</em> (inflation-adjusted) GDP, not the trillion-dollar total.
      </div>
      <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse my-4">
        <thead>
          <tr className="border-b-2 border-ink text-left"><th className="py-2 pr-3">Question</th><th className="py-2">Answer</th></tr>
        </thead>
        <tbody>
          <tr className="border-b border-ink/20"><td className="py-2 pr-3">Formula</td><td className="py-2">Consumer spending + business investment + government spending + (exports minus imports)</td></tr>
          <tr className="border-b border-ink/20"><td className="py-2 pr-3">What counts</td><td className="py-2">Final goods and services sold in markets, produced within the country&apos;s borders</td></tr>
          <tr className="border-b border-ink/20"><td className="py-2 pr-3">What&apos;s left out</td><td className="py-2">Unpaid work such as caregiving, how income is shared, and well-being itself</td></tr>
          <tr className="border-b border-ink/20"><td className="py-2 pr-3">Who publishes U.S. GDP</td><td className="py-2">The Bureau of Economic Analysis (BEA)</td></tr>
          <tr><td className="py-2 pr-3">How often</td><td className="py-2">Quarterly and yearly; each quarter is estimated three times (advance, second, third), so a new release comes out most months</td></tr>
        </tbody>
      </table>
      </div>

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
          { question: "Who calculates GDP in the United States?", answer: "The Bureau of Economic Analysis (BEA), part of the U.S. Department of Commerce. It also publishes GDP by state, by county, by industry and for U.S. territories." },
          { question: "Why do GDP numbers get revised?", answer: "BEA estimates each quarter three times. The advance estimate comes about a month after the quarter ends and uses the data available then; the second and third estimates add source data that arrived later, which improves accuracy." },
          { question: "What does it mean when GDP is reported at an annual rate?", answer: "Per BEA, quarterly GDP figures are seasonally adjusted and shown at annual rates, so a quarter's growth is expressed as what it would be if that pace lasted a full year. That makes quarters easy to compare with each other and with yearly figures." },
          { question: "Does a fall in GDP mean a recession?", answer: "Not on its own. A drop in real GDP is one important signal, but in the U.S. recessions are dated by looking at a broad set of indicators, including employment and income, not one GDP report." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
