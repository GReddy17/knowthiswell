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
  title: "How Unemployment Rate Actually Gets Calculated",
  category: "economics",
  order: 9,
  subtopic: "everyday-economics",
  tags: ["how is the unemployment rate calculated", "unemployment rate formula", "Current Population Survey", "labor force", "U-3 vs U-6", "discouraged workers", "BLS jobs report", "who counts as unemployed"],
  date: "2026-10-03",
  updated: "2026-10-03",
  youtubeShort: false, youtubeLong: false,
  seoScore: 83, seoScoredOn: "2026-10-04",
  lastReviewed: "2026-10-03",
  excerpt: "The U.S. unemployment rate isn't a count of benefit claims. It comes from a monthly survey of about 60,000 households, and who counts is narrower than you think.",
  summary: "The official U.S. unemployment rate is calculated from the Current Population Survey (CPS), a monthly survey of about 60,000 eligible households (roughly 110,000 people) run by the Census Bureau for the Bureau of Labor Statistics. It is not a count of people claiming unemployment benefits. Each person 16 or older (excluding people in institutions and the military) is classified for the reference week, generally the week including the 12th, as employed (did any paid work, even one hour, or was temporarily absent from a job), unemployed (had no job, was available to work, and actively looked for work in the past four weeks, or was on temporary layoff expecting recall), or not in the labor force (everyone else, including retirees, students and people who've stopped looking). The labor force is employed plus unemployed, and the unemployment rate is unemployed divided by the labor force. So if 3 of every 63 people in the labor force are unemployed, the rate is about 4.8%. Because people who stop searching leave the labor force, the rate can fall without anyone finding a job; BLS's broader U-6 measure adds discouraged and marginally attached workers and people working part time for economic reasons. Monthly changes of about 0.2 percentage point or less are often within sampling error. In October 2025, a federal shutdown prevented collection, so that month's rate was never produced.",
  sources: [
    { label: "U.S. Bureau of Labor Statistics — How the Government Measures Unemployment", url: "https://www.bls.gov/cps/cps_htgm.htm" },
    { label: "U.S. Bureau of Labor Statistics — Handbook of Methods: Current Population Survey", url: "https://www.bls.gov/opub/hom/cps/" },
    { label: "U.S. Bureau of Labor Statistics — Employment Situation, Table A-15: Alternative measures of labor underutilization", url: "https://www.bls.gov/news.release/empsit.t15.htm" },
    { label: "U.S. Bureau of Labor Statistics — Statistical significance of changes in the unemployment rate over time", url: "https://www.bls.gov/cps/factsheets/statistical-significance-unemployment-rate-change-over-time.htm" },
    { label: "U.S. Bureau of Labor Statistics — The Employment Situation, November 2025 (note on uncollected October 2025 household data)", url: "https://www.bls.gov/news.release/archives/empsit_12162025.htm" },
  ],
  seeAlso: [
    "economics/how-a-recession-actually-gets-defined",
    "economics/what-gdp-actually-measures",
    "economics/what-the-federal-reserve-actually-does",
    "government-schemes-benefits/how-unemployment-benefits-actually-get-calculated",
    "economics/what-minimum-wage-debates-actually-center-on",
  ],
  glossary: [
    { term: "Current Population Survey (CPS)", definition: "The monthly household survey, conducted by the Census Bureau for BLS, that produces the official U.S. unemployment rate." },
    { term: "Labor force", definition: "Everyone 16 and older (civilian, non-institutional) who is either employed or unemployed. People neither working nor looking are outside it." },
    { term: "Unemployed (official)", definition: "Had no job in the reference week, was available to work and actively looked for work in the previous four weeks, or was on temporary layoff expecting recall." },
    { term: "Labor force participation rate", definition: "The labor force as a share of the whole civilian non-institutional population 16 and older." },
    { term: "Discouraged worker", definition: "Someone who wants a job and has looked in the past year but stopped searching because they believe no jobs are available for them. Not counted as unemployed in U-3." },
    { term: "U-3 and U-6", definition: "BLS's official unemployment rate (U-3) and its broadest underutilization measure (U-6), which adds marginally attached workers and those part time for economic reasons." },
    { term: "Reference week", definition: "The week the survey asks about, generally the calendar week that includes the 12th of the month." },
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
  {"question": "Where does the official U.S. unemployment rate come from?", "difficulty": "easy", "options": [{"text": "A monthly survey of about 60,000 households", "correct": true, "explanation": "The Current Population Survey, run by the Census Bureau for BLS."}, {"text": "A count of people receiving unemployment benefits", "correct": false, "explanation": "Benefit claims are a separate statistic; many unemployed people don't claim."}, {"text": "Tax returns filed each April", "correct": false, "explanation": "Tax data aren't used for the monthly rate."}, {"text": "A full census every month", "correct": false, "explanation": "It's a sample survey, not a census."}]},
  {"question": "What is the formula for the unemployment rate?", "difficulty": "easy", "options": [{"text": "Unemployed ÷ labor force", "correct": true, "explanation": "The labor force is employed plus unemployed."}, {"text": "Unemployed ÷ total population", "correct": false, "explanation": "The denominator excludes children and people not in the labor force."}, {"text": "Unemployed ÷ employed", "correct": false, "explanation": "The denominator includes the unemployed too."}, {"text": "Benefit claims ÷ number of jobs", "correct": false, "explanation": "Neither claims nor job counts are in the formula."}]},
  {"question": "To be counted as unemployed, someone with no job (not on temporary layoff) must also have done what?", "difficulty": "medium", "options": [{"text": "Been available and actively looked for work in the past four weeks", "correct": true, "explanation": "Active steps include contacting employers or sending applications."}, {"text": "Applied for unemployment benefits", "correct": false, "explanation": "Claiming benefits isn't required."}, {"text": "Lost a job within the past week", "correct": false, "explanation": "New entrants and re-entrants can count too."}, {"text": "Registered with the IRS", "correct": false, "explanation": "There's no such requirement."}]},
  {"question": "In a group of 100 adults, 60 are employed, 3 are unemployed and 37 are not in the labor force. What's the unemployment rate?", "difficulty": "medium", "options": [{"text": "About 4.8%", "correct": true, "explanation": "3 ÷ (60 + 3) = 3 ÷ 63 ≈ 4.8%."}, {"text": "3%", "correct": false, "explanation": "That divides by all 100 adults instead of the labor force."}, {"text": "5%", "correct": false, "explanation": "Close, but 3 ÷ 63 is about 4.8%."}, {"text": "40%", "correct": false, "explanation": "That's everyone not employed, including those not in the labor force."}]},
  {"question": "Someone worked just one paid hour during the reference week. How is she classified?", "difficulty": "medium", "options": [{"text": "Employed", "correct": true, "explanation": "Any paid work in the reference week counts as employed."}, {"text": "Unemployed", "correct": false, "explanation": "Any paid work rules that out."}, {"text": "Not in the labor force", "correct": false, "explanation": "She worked, so she's in the labor force."}, {"text": "Excluded from the survey", "correct": false, "explanation": "She's counted, as employed."}]},
  {"question": "A jobseeker gives up searching because he believes no jobs exist for him. What happens to the official (U-3) unemployment rate?", "difficulty": "hard", "options": [{"text": "It goes down slightly, because he leaves the labor force", "correct": true, "explanation": "He's no longer counted as unemployed or in the labor force, a known quirk of the measure."}, {"text": "It goes up", "correct": false, "explanation": "He drops out of both numerator and denominator, which lowers the rate."}, {"text": "It stays exactly the same", "correct": false, "explanation": "Removing one unemployed person changes the ratio."}, {"text": "He's counted twice", "correct": false, "explanation": "He's counted once, outside the labor force."}]},
  {"question": "What does BLS's U-6 measure add on top of the official rate?", "difficulty": "hard", "options": [{"text": "Marginally attached workers (including discouraged workers) and people working part time for economic reasons", "correct": true, "explanation": "That's why U-6 is always higher than U-3."}, {"text": "Retirees and full-time students", "correct": false, "explanation": "They aren't counted as underutilized labor."}, {"text": "Only people on unemployment benefits", "correct": false, "explanation": "U-6 isn't based on claims."}, {"text": "People who are self-employed", "correct": false, "explanation": "The self-employed are counted as employed."}]},
  {"question": "The unemployment rate moves from 4.1% to 4.2% in one month. What's the right way to read it?", "difficulty": "medium", "options": [{"text": "It may be within sampling error; BLS treats changes of about 0.2 point as the rough significance threshold", "correct": true, "explanation": "A 0.1-point change usually isn't statistically significant on its own."}, {"text": "It proves the economy is entering a recession", "correct": false, "explanation": "One small move can't show that."}, {"text": "It means 0.1% of all Americans lost jobs", "correct": false, "explanation": "The rate is a share of the labor force, and the change may be noise."}, {"text": "BLS made a calculation error", "correct": false, "explanation": "Small month-to-month moves are expected from sampling."}]},
  {"question": "Why is there no official U.S. unemployment rate for October 2025?", "difficulty": "hard", "options": [{"text": "A federal government shutdown prevented household survey data collection, and it couldn't be collected later", "correct": true, "explanation": "BLS said the October 2025 household data could not be collected retroactively."}, {"text": "BLS stopped measuring unemployment permanently", "correct": false, "explanation": "Publication resumed with November 2025 data."}, {"text": "The rate was zero that month", "correct": false, "explanation": "The data simply weren't collected."}, {"text": "October is always skipped", "correct": false, "explanation": "It was a one-time gap."}]},
];

const h2 = "scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink";
const h3 = "scroll-mt-10 font-display text-xl font-bold text-ink mb-4";

export default function Post() {
  return (
    <>
      <h2 className={h2}>Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "The U.S. unemployment rate comes from a monthly survey of about 60,000 households, not from counting benefit claims.",
          "You're 'unemployed' only if you had no job, were available, and actively looked in the past four weeks (or are on temporary layoff).",
          "Rate = unemployed ÷ labor force. People who aren't working or looking are outside the calculation entirely.",
          "So the rate can fall when discouraged people stop searching, which is why economists also watch U-6 and labor force participation.",
        ]}
      />

      <h2 className={h2}>The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Most people assume the government counts everyone collecting unemployment checks. It doesn&apos;t. Every month, interviewers contact about 60,000 households, roughly 110,000 people, and ask simple questions about the previous week: did you do any paid work? If not, were you looking for work, and could you have started? Each adult lands in one of three boxes. <strong>Employed</strong>: did any paid work, even one hour. <strong>Unemployed</strong>: no job, but actively looking and available. <strong>Not in the labor force</strong>: everyone else, like retirees, full-time students, stay-at-home parents and people who&apos;ve given up looking. Think of it like a race. The unemployment rate only counts runners on the track: the ones running (employed) and the ones trying to get back in (unemployed). People sitting in the stands aren&apos;t part of the calculation at all. Divide the unemployed by everyone on the track and you get the rate. That&apos;s why the number can drop even when nobody new finds a job: some runners just walked off the track.</div>}
        detailed={<div className="prose-p">The <strong>Current Population Survey</strong> covers the civilian non-institutional population 16 and older, so people in prisons, nursing homes and the armed forces are excluded. Questions refer to a <strong>reference week</strong>, generally the week including the 12th. <strong>Employed</strong> covers anyone who did any work for pay or profit, did 15+ hours of unpaid work in a family business, or had a job but was temporarily absent (illness, vacation, strike). <strong>Unemployed</strong> requires no job, availability, and at least one active search method in the prior four weeks, such as contacting employers or sending résumés; merely reading job ads doesn&apos;t count. People on temporary layoff expecting recall count as unemployed without searching. The <strong>labor force</strong> is employed + unemployed; the rate (BLS&apos;s U-3) is unemployed ÷ labor force, and the <strong>labor force participation rate</strong> is labor force ÷ population. Results are weighted to match population estimates and seasonally adjusted. BLS publishes alternatives U-1 to U-6; <strong>U-6</strong> adds <strong>marginally attached</strong> workers (want a job, looked in the past year but not the past four weeks, including <strong>discouraged workers</strong>) and people working part time for economic reasons. The monthly Employment Situation report pairs this with a separate payroll survey of businesses, which counts jobs rather than people. Because the CPS is a sample, BLS estimates that a one-month change of roughly 0.2 percentage point is needed to be statistically significant at 90% confidence. The rate is one of the signals used in judging a <TermLink href="/economics/how-a-recession-actually-gets-defined">recession</TermLink>.</div>}
      />
      <FootnoteAside>The survey has run monthly since the 1940s, and in October 2025 it missed a month for the first time. A federal government shutdown halted data collection, and because people can&apos;t accurately recall a past reference week, BLS said the October household data could not be collected retroactively. That month&apos;s unemployment rate will never exist.</FootnoteAside>

      <QuickCheck
        question="A retired teacher isn't working and isn't looking for work. How does the survey classify her?"
        options={[
          { text: "Not in the labor force", correct: true, explanation: "Correct. She's neither employed nor searching, so she's outside the rate's calculation." },
          { text: "Unemployed", correct: false, explanation: "Unemployed requires actively looking and being available for work." },
          { text: "Employed", correct: false, explanation: "She did no paid work in the reference week." },
        ]}
      />

      <h2 className={h2}>Worked examples</h2>

      <h3 className={h3}>Example 1: A town of 100 adults (baseline case)</h3>
      <div className="prose-p">Imagine a town with 100 adults 16 and over. 60 did some paid work last week: employed. 3 had no job, sent applications in the past month and could start tomorrow: unemployed. The other 37 are retirees, students, full-time caregivers and people not looking: not in the labor force. The labor force is 60 + 3 = 63. The unemployment rate is 3 ÷ 63 ≈ <strong>4.8%</strong>, not 3% (which divides by all 100 adults) and not 40% (which counts everyone not working). The labor force participation rate is 63 ÷ 100 = 63%. Two numbers together tell you far more than one: how many people want work, and how many of them can&apos;t find it.</div>

      <h3 className={h3}>Example 2: The rate falls, but nobody got a job (edge case)</h3>
      <div className="prose-p">Same town, next month. Two of the three unemployed people stop searching because they&apos;ve concluded there&apos;s nothing out there for them. They&apos;re now <strong>discouraged workers</strong> and move to &quot;not in the labor force&quot;. Employed is still 60. Unemployed is now 1. Labor force is 61. The rate drops to 1 ÷ 61 ≈ <strong>1.6%</strong>, a dramatic &quot;improvement&quot; in which no one found work. This is why economists never read the headline rate alone. The participation rate fell from 63% to 61%, and BLS&apos;s broader <strong>U-6</strong> measure, which still counts those two discouraged workers, would barely move. Real-world shifts are smaller, but the direction of the effect is real.</div>

      <h3 className={h3}>Example 3: Reading a jobs-report headline (applied case)</h3>
      <div className="prose-p">A headline says &quot;Unemployment rises to 4.2% from 4.1%&quot;. Three checks. First, is it significant? BLS&apos;s rule of thumb is that a one-month change of about 0.2 point is needed to be statistically significant at 90% confidence, so a 0.1-point move may be sampling noise. Second, why did it move? If participation rose because more people started looking, a slightly higher rate can be a sign of confidence rather than distress. Third, what else moved? Check U-6 and the payroll survey&apos;s job count. For context on scale, the rate peaked at 10.0% in October 2009 after the financial crisis and was first reported at 14.7% for April 2020, the highest since the series began in 1948. A 0.1-point move is a different kind of news.</div>

      <QuickCheck
        question="Two unemployed people stop looking for work and nothing else changes. What happens to the official rate?"
        options={[
          { text: "It falls, because they leave the labor force", correct: true, explanation: "Correct. They drop out of both the numerator and the denominator." },
          { text: "It rises, because more people are without jobs", correct: false, explanation: "The number without jobs didn't change; how they're classified did." },
          { text: "It stays the same", correct: false, explanation: "Removing unemployed people from the labor force lowers the ratio." },
        ]}
      />

      <h2 className={h2}>How it works (visual)</h2>
      <DiagramBlock
        title="How every adult is sorted, and where the rate comes from"
        type="flow"
        svgSrc="/diagrams/economics-how-unemployment-rate-actually-gets-calculated-flow.svg"
        altText="A decision flow. Start: civilian, non-institutional person 16 or older. Question 1: did any paid work in the reference week, or has a job but was temporarily absent? Yes leads to Employed. No leads to question 2: looked for work in the past 4 weeks and available, or on temporary layoff? Yes leads to Unemployed. No leads to Not in the labor force, which includes discouraged workers. Employed plus Unemployed form the labor force. The formula box reads: unemployment rate equals unemployed divided by labor force; example 3 divided by 63 equals about 4.8 percent."
      />
      <p>The second question does all the work. Whether you searched in the past four weeks decides whether you&apos;re &quot;unemployed&quot; or outside the calculation entirely, which is why the same jobless person can raise or lower the rate depending on whether they&apos;re still looking.</p>

      <h2 className={h2}>Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the rate counts people on unemployment benefits.", fix: "It comes from a household survey. Benefit claims are a separate weekly statistic, and many unemployed people never claim." },
          { mistake: "Dividing by the whole population.", fix: "The denominator is the labor force: employed plus unemployed." },
          { mistake: "Reading a falling rate as automatically good news.", fix: "Check the participation rate and U-6. People giving up can lower the rate." },
          { mistake: "Treating a 0.1-point monthly change as a trend.", fix: "Changes under about 0.2 point are often within sampling error. Look at several months." },
          { mistake: "Thinking anyone without a job is 'unemployed'.", fix: "Officially, you must be available and actively searching, or on temporary layoff." },
        ]}
      />
      <MisconceptionCallout
        myth="The government calculates the unemployment rate by counting people who file for unemployment benefits."
        reality={<p>It doesn&apos;t. The rate comes from the <strong>Current Population Survey</strong>, a monthly interview of about 60,000 households. Benefit claims are tracked separately, and they miss many unemployed people, such as new graduates, people whose benefits ran out and people who never qualified. You can be counted as unemployed without ever filing a claim.</p>}
      />

      <h2 className={h2}>What to do next</h2>
      <ActionChecklist
        items={[
          "Next jobs Friday, read the BLS Employment Situation summary, not just the headline.",
          "Check the labor force participation rate alongside the unemployment rate.",
          "Look up U-6 in Table A-15 to see broader underutilization.",
          "Before reacting to a monthly change, check whether BLS marks it as statistically significant.",
          "Compare the household survey with the payroll survey's job count; when they disagree, look at several months.",
        ]}
      />

      <h2 className={h2}>FAQ</h2>
      <FAQBlock
        items={[
          { question: "How is the unemployment rate calculated?", answer: "Divide the number of unemployed people by the labor force (employed plus unemployed), then multiply by 100. The counts come from the Current Population Survey, a monthly survey of about 60,000 U.S. households." },
          { question: "Who counts as unemployed?", answer: "People 16 and older who had no job during the reference week, were available to work, and actively looked for work in the previous four weeks. People on temporary layoff waiting to be recalled also count." },
          { question: "Does the unemployment rate include people who stopped looking for work?", answer: "Not the official U-3 rate. People who've stopped looking are classified as not in the labor force. BLS's broader U-6 measure includes discouraged and other marginally attached workers." },
          { question: "What is the difference between U-3 and U-6?", answer: "U-3 is the official rate. U-6 adds marginally attached workers, including discouraged workers, plus people working part time who want full-time work, so it's always higher." },
          { question: "Why is there no unemployment rate for October 2025?", answer: "A federal shutdown stopped the household survey's data collection that month, and BLS said the data couldn't be collected afterward, so no October 2025 rate was published." },
        ]}
      />

      <h2 className={h2}>Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className={h2}>See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
