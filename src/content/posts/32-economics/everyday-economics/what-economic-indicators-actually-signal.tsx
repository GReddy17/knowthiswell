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
  title: "What Economic Indicators Actually Signal",
  category: "economics",
  order: 10,
  subtopic: "everyday-economics",
  tags: ["economic indicators", "leading lagging coincident indicators", "yield curve inversion", "jobs report", "CPI inflation", "PMI 50", "how to read economic data"],
  date: "2026-10-08",
  updated: "2026-10-08",
  seoScore: 83, seoScoredOn: "2026-10-10",
  youtubeShort: false, youtubeLong: false,
  lastReviewed: "2026-10-08",
  excerpt: "Economic indicators are measurements with timing: some lead the economy, some move with it, some lag. Here's what each signals, and why first prints get revised.",
  summary: "Economic indicators are regularly published measurements of the economy, and their meaning depends on timing. Leading indicators, such as the Treasury yield curve, building permits, new factory orders, weekly jobless claims and stock prices, tend to turn before the overall economy does. Coincident indicators, such as payroll employment, industrial production and real personal income, move with it, and are what the National Bureau of Economic Research weighs when it dates recessions. Lagging indicators, such as the unemployment rate after a turning point and the duration of unemployment, confirm a change after it has happened. Every indicator is an estimate with noise: the Bureau of Labor Statistics puts the 90% confidence interval on the monthly payroll change at roughly plus or minus 136,000 jobs, and GDP and payroll figures are revised as more data arrives. Read indicators as a trend across several releases and sources, not as a single headline number, and remember that even strong signals such as an inverted yield curve have produced false alarms.",
  sources: [
    { label: "U.S. Bureau of Labor Statistics — Employment Situation technical note (payroll survey reliability)", url: "https://www.bls.gov/news.release/empsit.tn.htm" },
    { label: "U.S. Bureau of Labor Statistics — Consumer Price Index", url: "https://www.bls.gov/cpi/" },
    { label: "U.S. Bureau of Economic Analysis — Gross Domestic Product", url: "https://www.bea.gov/data/gdp/gross-domestic-product" },
    { label: "National Bureau of Economic Research — Business Cycle Dating", url: "https://www.nber.org/research/business-cycle-dating" },
    { label: "Federal Reserve Bank of New York — The Yield Curve as a Leading Indicator", url: "https://www.newyorkfed.org/research/capital_markets/ycfaq.html" },
    { label: "The Conference Board — U.S. Leading Indicators", url: "https://www.conference-board.org/topics/us-leading-indicators" },
  ],
  seeAlso: [
    "economics/what-gdp-actually-measures",
    "economics/how-a-recession-actually-gets-defined",
    "economics/how-unemployment-rate-actually-gets-calculated",
    "economics/how-inflation-actually-erodes-purchasing-power",
    "economics/what-the-federal-reserve-actually-does",
  ],
  glossary: [
    { term: "Leading indicator", definition: "A measure that tends to change direction before the overall economy does, such as the yield curve, building permits or new orders." },
    { term: "Coincident indicator", definition: "A measure that moves at the same time as the overall economy, such as payroll employment, industrial production and real personal income." },
    { term: "Lagging indicator", definition: "A measure that changes after the economy has already turned, confirming a shift, such as the average duration of unemployment." },
    { term: "Yield curve inversion", definition: "When short-term Treasury rates rise above long-term rates. It has preceded most U.S. recessions since the late 1960s, though not on a fixed timetable." },
    { term: "Annualized rate", definition: "A one-month or one-quarter change scaled up to show what it would be if it continued for a full year. U.S. GDP growth headlines are reported this way." },
    { term: "Revision", definition: "A later update to an already published figure as more complete data arrives. GDP and monthly payroll numbers are routinely revised." },
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
  {"question": "What does a 'leading' economic indicator do?", "difficulty": "easy", "options": [{"text": "It tends to change direction before the overall economy does", "correct": true, "explanation": "Examples include the yield curve, building permits, new orders and weekly jobless claims."}, {"text": "It always predicts recessions exactly", "correct": false, "explanation": "Leading indicators give earlier but noisier signals, including false alarms."}, {"text": "It measures the economy's size", "correct": false, "explanation": "That describes GDP, which is a coincident measure of output, not a leading signal."}]},
  {"question": "Which of these is usually classed as a coincident indicator?", "difficulty": "easy", "options": [{"text": "Nonfarm payroll employment", "correct": true, "explanation": "Payroll jobs move with the economy and are among the measures the NBER weighs when dating recessions."}, {"text": "Building permits", "correct": false, "explanation": "Permits are a leading indicator: they signal construction that hasn't happened yet."}, {"text": "Average duration of unemployment", "correct": false, "explanation": "That's a lagging indicator; it keeps rising after a downturn has begun."}]},
  {"question": "What is a yield curve inversion?", "difficulty": "medium", "options": [{"text": "Short-term Treasury rates rising above long-term rates", "correct": true, "explanation": "Normally longer loans pay more. When short rates exceed long rates, markets are often expecting slower growth and rate cuts."}, {"text": "Stock prices falling for three days in a row", "correct": false, "explanation": "That's a market move, not a yield curve shape."}, {"text": "Inflation turning negative", "correct": false, "explanation": "That's deflation, a different phenomenon."}]},
  {"question": "Per the BLS technical note, roughly how large is the 90% confidence interval on the monthly change in payroll jobs?", "difficulty": "hard", "options": [{"text": "About plus or minus 136,000 jobs", "correct": true, "explanation": "That's why a single month's gain of, say, 50,000 jobs isn't statistically distinguishable from zero."}, {"text": "About plus or minus 100 jobs", "correct": false, "explanation": "The payroll survey is a sample, so the uncertainty is in the tens of thousands, not hundreds."}, {"text": "There is no uncertainty; it's a full count", "correct": false, "explanation": "The monthly figure comes from a survey of businesses and is revised later."}]},
  {"question": "Monthly CPI rises 0.2%. Roughly what annual inflation rate does that pace imply if it continued?", "difficulty": "medium", "options": [{"text": "About 2.4%", "correct": true, "explanation": "1.002 to the 12th power is about 1.024, so roughly 2.4% a year."}, {"text": "0.2%", "correct": false, "explanation": "That's the one-month change, not the annual pace."}, {"text": "About 24%", "correct": false, "explanation": "That multiplies by 120 by mistake. Twelve months of 0.2% compound to about 2.4%."}]},
  {"question": "U.S. real GDP grows 0.5% in a quarter. What annualized growth rate will the headline report?", "difficulty": "medium", "options": [{"text": "About 2.0%", "correct": true, "explanation": "BEA annualizes quarterly growth: 1.005 to the 4th power is about 1.020."}, {"text": "0.5%", "correct": false, "explanation": "U.S. headlines show the annualized pace, not the raw quarterly change."}, {"text": "About 5%", "correct": false, "explanation": "That multiplies by 10. A quarter is a quarter of a year, so the factor is about 4."}]},
  {"question": "Which organization officially dates U.S. recessions?", "difficulty": "easy", "options": [{"text": "The National Bureau of Economic Research's Business Cycle Dating Committee", "correct": true, "explanation": "It looks at a range of measures, mainly employment, income, spending and production, rather than one rule."}, {"text": "The Bureau of Labor Statistics", "correct": false, "explanation": "BLS publishes jobs and price data but doesn't declare recessions."}, {"text": "The New York Stock Exchange", "correct": false, "explanation": "Stock exchanges have no role in dating recessions."}]},
  {"question": "Why is the unemployment rate often called a lagging indicator around turning points?", "difficulty": "hard", "options": [{"text": "Firms often cut hours and hiring before layoffs, and keep cautious after a recovery starts, so unemployment peaks after the economy turns", "correct": true, "explanation": "The unemployment rate typically keeps rising for a while after a recession ends."}, {"text": "It's published years after the fact", "correct": false, "explanation": "It's published monthly; the lag is in how it responds, not when it's released."}, {"text": "It only counts people over 65", "correct": false, "explanation": "It covers the civilian labor force aged 16 and over."}]},
  {"question": "In manufacturing purchasing managers' surveys (PMIs), what does a reading above 50 indicate?", "difficulty": "medium", "options": [{"text": "More firms report expansion than contraction", "correct": true, "explanation": "50 is the dividing line; below it, more firms report contraction."}, {"text": "Factories are at 50% capacity", "correct": false, "explanation": "A PMI is a diffusion index, not a capacity measure."}, {"text": "Inflation is above 5%", "correct": false, "explanation": "PMIs survey business conditions, not consumer prices."}]},
  {"question": "Why should you look at several indicators rather than one headline number?", "difficulty": "hard", "options": [{"text": "Each has sampling noise, revisions and false signals, so agreement across measures is stronger evidence", "correct": true, "explanation": "The NBER itself weighs many indicators together for exactly this reason."}, {"text": "Indicators are random and carry no information", "correct": false, "explanation": "They carry real information; they're just noisy individually."}, {"text": "One indicator is always enough if it's from the government", "correct": false, "explanation": "Official data is high quality but still estimated and revised."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Economic indicators come in three timings: leading (yield curve, building permits, jobless claims) turn before the economy, coincident (payroll jobs, industrial production) move with it, lagging (unemployment duration) confirm afterwards.",
          "Every indicator is an estimate. The BLS puts the 90% confidence interval on the monthly payroll change at roughly plus or minus 136,000 jobs, and GDP and payroll numbers are routinely revised.",
          "The signal is the trend across several releases and several indicators, not one headline. Even the yield curve, the most famous leading signal, has given false alarms.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of the economy as a long freight train. Some signals are like the engine at the front: they turn first. When builders take out fewer permits, when factories get fewer new orders, when more people file for unemployment each week, the rest of the train often follows months later. Those are <strong>leading</strong> indicators. Other signals are the middle carriages, moving at the same time as the whole economy: the number of people on payrolls, how much factories produce, how much income people have after inflation. Those are <strong>coincident</strong>. Then there&apos;s the caboose: signals that turn last, like how long unemployed people have been looking for work. Those are <strong>lagging</strong>, useful for confirming a turn that&apos;s already happened. The catch is that every one of these numbers is an estimate, gathered from surveys and records, and the first number published is often revised. So the useful habit isn&apos;t to react to one headline. It&apos;s to ask which kind of signal it is, how noisy it is, and whether other signals agree.</div>}
        detailed={<div className="prose-p">The leading/coincident/lagging framework dates back to business-cycle research in the 1930s and is maintained today in composite indexes such as The Conference Board&apos;s Leading Economic Index, which bundles ten components including average weekly manufacturing hours, initial jobless claims, new orders, building permits, stock prices, the interest-rate spread and consumer expectations. <strong>Coincident</strong> measures (payroll employment, real personal income less transfers, industrial production, real sales) are close to what the NBER&apos;s Business Cycle Dating Committee weighs when it decides a recession&apos;s start and end, with no single mechanical rule; see <TermLink href="/economics/how-a-recession-actually-gets-defined">how a recession gets defined</TermLink>. The <strong>yield curve</strong> is the best-known leading signal: the New York Fed&apos;s research shows the spread between 10-year and 3-month Treasury yields turned negative before every U.S. recession since the late 1960s, with lead times that varied widely, and with at least one false signal in the mid-1960s. The inversion that began in 2022 lasted into 2024 without an NBER-dated recession following in the usual window, a reminder that leading signals are probabilities, not countdowns. The edge case most readers miss is <strong>measurement noise</strong>: the payroll figure comes from a sample of employers, so a single month&apos;s change has a 90% confidence interval of roughly ±136,000 jobs, and it&apos;s revised in each of the next two months and again in an annual benchmark.</div>}
      />
      <FootnoteAside>Release timing matters too. The jobs report usually comes out on the first Friday of the month, CPI around mid-month, and the advance estimate of GDP about a month after each quarter ends, followed by a second and third estimate. The first estimate is the one that makes headlines; the later ones are more accurate.</FootnoteAside>

      <p>For what the headline numbers actually measure, see <TermLink href="/economics/what-gdp-actually-measures">what GDP measures</TermLink>, <TermLink href="/economics/how-unemployment-rate-actually-gets-calculated">how the unemployment rate is calculated</TermLink> and <TermLink href="/economics/how-inflation-actually-erodes-purchasing-power">how inflation erodes purchasing power</TermLink>.</p>

      <QuickCheck
        question="The monthly jobs report shows payrolls rose by 60,000, down from 180,000 the month before. A headline calls it 'a hiring collapse.' What's the most accurate reading?"
        options={[
          { text: "One month's change is within the survey's margin of roughly ±136,000, so it's a possible slowdown worth watching in the next releases and revisions, not proof of a collapse", correct: true, explanation: "Correct. A single noisy month can be revised substantially. A sustained trend, confirmed by other indicators such as jobless claims, is stronger evidence." },
          { text: "It definitely means a recession has started", correct: false, explanation: "Recessions are dated from broad, sustained declines across several measures, not one month of slower job growth." },
          { text: "The number is meaningless and should be ignored", correct: false, explanation: "It carries real information; it just needs to be read alongside revisions and other data." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Turning a monthly CPI change into an annual pace (baseline case)</h3>
      <div className="prose-p">The BLS reports that the Consumer Price Index rose 0.2% in a month. What does that signal? On its own, a month is small, so analysts translate it into an annual pace: 1.002 multiplied by itself 12 times is about 1.024, or roughly <strong>2.4% a year</strong>. A 0.4% month, by the same arithmetic, is about 4.9% a year. The other figure in every CPI release is the <strong>year-over-year</strong> change, comparing the index with the same month a year earlier. The two can disagree: year-over-year inflation can still read 3% while recent months run at a 2% pace, because the annual figure includes older months. When they diverge, the monthly pace tells you the direction; the annual figure tells you where the level has been.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The jobs number that changed (edge case)</h3>
      <div className="prose-p">Suppose the first estimate says payrolls rose by 150,000 in a month. Over the next two monthly reports, as more employer surveys arrive, it&apos;s revised to 110,000 and then 90,000, and the annual benchmark later adjusts it again. That&apos;s ordinary, not a scandal: the first estimate is built from the responses that have come in by deadline. It also sits inside the BLS 90% confidence interval of roughly ±136,000 for a monthly change. The lesson is to read the <strong>three-month average</strong> and the revisions, not just the headline. Three months of +90,000, +110,000 and +70,000 average 90,000, a clearer signal than any one of them.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Reading a GDP headline and the yield curve together (applied case)</h3>
      <div className="prose-p">BEA reports that real GDP grew at a &quot;2.0% annual rate&quot; last quarter. That doesn&apos;t mean the economy grew 2% in three months. It grew about 0.5% in the quarter, and 1.005 to the fourth power is about 1.020, so the annualized rate is 2.0%. At the same time, suppose the 3-month Treasury bill yields 4.5% and the 10-year note 4.0%: the spread is −0.5 percentage points, an <strong>inverted</strong> curve. The coincident data say the economy is growing now; the leading signal says markets expect slower growth or rate cuts ahead. Neither cancels the other. The honest reading is &quot;growing for now, with a raised but uncertain risk of slowing,&quot; and the next step is to check other leading measures, such as weekly jobless claims and new orders, for confirmation. For how the Fed reads the same data, see <TermLink href="/economics/what-the-federal-reserve-actually-does">what the Federal Reserve does</TermLink>.</div>

      <QuickCheck
        question="Which set of indicators would give the earliest warning that the economy might be about to slow?"
        options={[
          { text: "Building permits, new manufacturing orders and weekly initial jobless claims", correct: true, explanation: "Correct. These are classic leading indicators: they reflect decisions about future activity before it shows up in output and employment." },
          { text: "The average duration of unemployment and the unemployment rate", correct: false, explanation: "These tend to lag, confirming a slowdown after it has begun." },
          { text: "Last quarter's final GDP estimate", correct: false, explanation: "GDP is coincident, and the final estimate comes out about three months after the quarter ends." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Leading, coincident and lagging indicators"
        type="flow"
        svgSrc="/diagrams/economics-what-economic-indicators-actually-signal-timeline.svg"
        altText="A timeline along a business cycle curve showing a peak. Leading indicators (yield curve, building permits, new orders, initial jobless claims, stock prices) turn months before the peak. Coincident indicators (payroll jobs, industrial production, real income, real sales) turn at the peak. Lagging indicators (unemployment duration, unemployment rate after the turn) turn after it. A footer notes that every reading is an estimate with noise, such as about plus or minus 136,000 jobs on the monthly payroll change."
      />
      <p>The timeline shows why the same week&apos;s data can look contradictory. Leading measures may already be weakening while coincident ones still look healthy, and lagging ones look worst well after the turn has passed.</p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Reacting to a single month's jobs or inflation number.", fix: "Look at three-month averages and the revisions in later reports. One month is within the survey's noise." },
          { mistake: "Reading an annualized GDP figure as the quarter's actual growth.", fix: "U.S. GDP headlines are annualized. Divide roughly by four for the actual quarterly change." },
          { mistake: "Treating a yield-curve inversion as a recession countdown.", fix: "It has preceded most recessions since the late 1960s, but lead times vary widely and it has given false signals. Check other indicators." },
          { mistake: "Using the unemployment rate to spot a downturn early.", fix: "It tends to lag at turning points. Weekly initial jobless claims respond faster." },
        ]}
      />
      <MisconceptionCallout
        myth="Two quarters of falling GDP is the official definition of a U.S. recession, so GDP is the indicator that decides it."
        reality={<p>The NBER&apos;s Business Cycle Dating Committee doesn&apos;t use the two-quarter rule. It looks for a significant decline in activity spread across the economy, lasting more than a few months, and weighs employment, real income, spending and industrial production alongside GDP. GDP is also published late and revised, so it&apos;s one input among several, not the switch. The two-quarter shorthand often matches, but not always.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "When you see an economic headline, first ask: is this a leading, coincident or lagging indicator?",
          "Check whether the figure is annualized, monthly or year-over-year before comparing it with anything else.",
          "Look for the revision to last month's number in the same release; it often matters as much as the new figure.",
          "Compare at least two or three indicators before concluding the economy is turning.",
          "Go to the source release (BLS, BEA, the New York Fed) for the technical note on how the number is measured.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are the main economic indicators?", answer: "Commonly watched U.S. indicators include GDP, the jobs report (payrolls and the unemployment rate), CPI inflation, weekly jobless claims, retail sales, industrial production, PMIs, building permits and the Treasury yield curve." },
          { question: "What is the difference between leading and lagging indicators?", answer: "Leading indicators tend to turn before the overall economy, such as building permits or the yield curve. Lagging indicators turn after it, confirming a change, such as the duration of unemployment." },
          { question: "Does an inverted yield curve always mean a recession?", answer: "No. The 10-year minus 3-month spread inverted before every U.S. recession since the late 1960s, but the lead time has varied widely and there have been false signals. It raises the probability; it doesn't set a date." },
          { question: "Why do jobs numbers get revised?", answer: "The first estimate uses the employer survey responses received by the deadline. Later responses and an annual benchmark to tax records update it. Revisions of tens of thousands of jobs are normal." },
          { question: "What does a PMI above 50 mean?", answer: "In purchasing managers' surveys, 50 is the dividing line: above it, more firms report expanding activity than contracting; below it, the reverse." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
