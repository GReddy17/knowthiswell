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
  title: "What Minimum Wage Debates Actually Center On",
  category: "economics",
  order: 8,
  subtopic: "everyday-economics",
  tags: ["minimum wage", "minimum wage debate", "minimum wage and jobs", "Card and Krueger", "monopsony", "labor economics", "$15 minimum wage"],
  date: "2026-10-01",
  updated: "2026-10-01",
  youtubeShort: false, youtubeLong: false,
  seoScore: 83, seoScoredOn: "2026-10-02",
  lastReviewed: "2026-10-01",
  excerpt: "Minimum wage debates turn on one question: when pay is forced up, who absorbs the cost? Jobs, hours, prices or profits. The evidence depends on how big the raise is.",
  summary: "Minimum wage debates are less about whether low-wage workers deserve more and more about one empirical question: when a law raises the price of low-wage labor, how is the extra cost absorbed? The options are fewer jobs or hours, higher prices, lower profits, or gains from lower turnover and higher productivity. The simple competitive-market model predicts job losses; the monopsony model, where employers have wage-setting power, predicts a moderate minimum can raise pay without cutting jobs. Card and Krueger's 1994 study of fast-food restaurants in New Jersey and Pennsylvania found no employment drop after New Jersey's increase, which launched decades of dispute. Later work such as Cengiz, Dube, Lindner and Zipperer (2019) found little change in the number of low-wage jobs for increases up to about 59% of the local median wage, while studies of Seattle's rise toward $13 found reduced hours for some low-wage workers. CBO's 2019 analysis of a $15 federal minimum by 2025 estimated pay raises for 17 million workers, 1.3 million people lifted out of poverty, and a median 1.3 million jobs lost, with a wide range. The U.S. federal minimum has been $7.25 since July 2009, while more than 30 states plus D.C. set higher minimums (DOL, updated July 2026). The size of an increase relative to local wages, its 'bite', is what the evidence most turns on.",
  sources: [
    { label: "U.S. Department of Labor — Minimum Wage (federal)", url: "https://www.dol.gov/agencies/whd/minimum-wage" },
    { label: "U.S. Department of Labor — State Minimum Wage Laws", url: "https://www.dol.gov/agencies/whd/minimum-wage/state" },
    { label: "Congressional Budget Office (2019) — The Effects on Employment and Family Income of Increasing the Federal Minimum Wage", url: "https://www.cbo.gov/publication/55410" },
    { label: "Card & Krueger (1994) — Minimum Wages and Employment: A Case Study of the Fast-Food Industry in New Jersey and Pennsylvania, American Economic Review", url: "https://www.jstor.org/stable/2118030" },
    { label: "Cengiz, Dube, Lindner & Zipperer (2019) — The Effect of Minimum Wages on Low-Wage Jobs, Quarterly Journal of Economics", url: "https://doi.org/10.1093/qje/qjz014" },
    { label: "Jardim et al. (2022) — Minimum-Wage Increases and Low-Wage Employment: Evidence from Seattle, American Economic Journal: Economic Policy", url: "https://doi.org/10.1257/pol.20180578" },
    { label: "U.S. Bureau of Labor Statistics — Characteristics of minimum wage workers", url: "https://www.bls.gov/opub/reports/minimum-wage/" },
  ],
  seeAlso: [
    "economics/what-supply-and-demand-actually-predicts",
    "economics/how-inflation-actually-erodes-purchasing-power",
    "economics/how-tariffs-actually-affect-prices",
    "economics/what-fiscal-policy-actually-means-vs-monetary-policy",
    "economics/what-gdp-actually-measures",
    "personal-finance-basics/what-a-budget-actually-is-income-vs-expenses",
  ],
  glossary: [
    { term: "Minimum wage", definition: "The lowest hourly pay an employer may legally pay covered workers. The U.S. federal minimum has been $7.25 since July 24, 2009; many states and cities set higher ones." },
    { term: "Monopsony", definition: "A labor market where employers have power to set wages below what a fully competitive market would pay, often because workers have few alternative employers or find switching costly." },
    { term: "Bite", definition: "How high a minimum wage is relative to local wages, often measured as the minimum divided by the median wage (the Kaitz index). A bigger bite affects more workers." },
    { term: "Elasticity of labor demand", definition: "How strongly employers cut the hours or jobs they offer when labor gets more expensive. Debates over minimum wages are largely debates about its size." },
    { term: "Pass-through", definition: "The share of a cost increase that a business passes on to customers through higher prices." },
    { term: "Tipped minimum wage", definition: "The lower cash wage ($2.13 an hour federally) employers may pay tipped workers, provided tips bring total pay up to at least the full minimum wage." },
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
  {"question": "What is the U.S. federal minimum wage, and since when?", "difficulty": "easy", "options": [{"text": "$7.25 an hour, since July 2009", "correct": true, "explanation": "The Fair Labor Standards Act rate hasn't changed since July 24, 2009, per the Department of Labor."}, {"text": "$15 an hour, since 2021", "correct": false, "explanation": "$15 was proposed federally and adopted by some states and cities, but not as the federal floor."}, {"text": "$10.10 an hour, since 2014", "correct": false, "explanation": "$10.10 was proposed in 2014 but never became law; it was set for federal contractors only."}]},
  {"question": "What does the simple competitive-market model predict when a minimum wage is set above the market wage?", "difficulty": "easy", "options": [{"text": "Employers hire fewer workers or offer fewer hours", "correct": true, "explanation": "A price floor above equilibrium reduces the quantity of labor demanded."}, {"text": "Employment rises", "correct": false, "explanation": "That's the possible monopsony outcome, not the competitive one."}, {"text": "Nothing changes at all", "correct": false, "explanation": "In the competitive model a binding floor always reduces employment somewhat."}]},
  {"question": "What did Card and Krueger's 1994 New Jersey and Pennsylvania study find?", "difficulty": "medium", "options": [{"text": "No drop in fast-food employment in New Jersey relative to Pennsylvania after New Jersey raised its minimum", "correct": true, "explanation": "The result challenged the textbook prediction and sparked decades of debate, including critiques by Neumark and Wascher."}, {"text": "New Jersey lost half of its fast-food jobs", "correct": false, "explanation": "The study found no such loss."}, {"text": "Pennsylvania raised its wage at the same time", "correct": false, "explanation": "Pennsylvania didn't change its minimum, which is what made it a comparison group."}]},
  {"question": "Under monopsony, why can a moderate minimum wage raise pay without cutting jobs?", "difficulty": "hard", "options": [{"text": "Employers were paying below what workers were worth to them, so a floor removes the incentive to hold hiring down to keep wages low", "correct": true, "explanation": "With wage-setting power, a firm hires fewer people to avoid raising everyone's pay; a floor changes that calculation."}, {"text": "Because monopsony means the government sets all wages", "correct": false, "explanation": "Monopsony is about employer power in a market, not government wage-setting."}, {"text": "Because higher wages are always fully paid for by customers", "correct": false, "explanation": "That's pass-through, a different channel."}]},
  {"question": "Cengiz, Dube, Lindner and Zipperer (2019) found the number of low-wage jobs changed little for minimum wage increases up to roughly what level?", "difficulty": "hard", "options": [{"text": "About 59% of the local median wage", "correct": true, "explanation": "They studied 138 state-level increases and noted evidence beyond that range is limited."}, {"text": "About 150% of the median wage", "correct": false, "explanation": "No U.S. state minimum has been studied at that level; it's far beyond the data."}, {"text": "Any level whatsoever", "correct": false, "explanation": "The authors stressed their findings apply to the range of increases they observed."}]},
  {"question": "CBO's 2019 analysis of a $15 federal minimum by 2025 estimated a median job loss of about how many?", "difficulty": "medium", "options": [{"text": "1.3 million, with a likely range from near zero to 3.7 million", "correct": true, "explanation": "CBO also estimated 17 million workers would get a direct raise and 1.3 million people would rise out of poverty."}, {"text": "Exactly zero", "correct": false, "explanation": "Zero was near the low end of CBO's range, not its central estimate."}, {"text": "17 million", "correct": false, "explanation": "17 million was CBO's estimate of workers who would get a direct raise."}]},
  {"question": "Why can the same $15 minimum have different effects in different places?", "difficulty": "medium", "options": [{"text": "Its 'bite' differs: $15 is a small share of the median wage in a high-wage city and a large share in a low-wage area", "correct": true, "explanation": "The minimum-to-median ratio predicts how many workers are affected and how hard."}, {"text": "Because federal law requires different rates in each state", "correct": false, "explanation": "Federal law sets one floor; states and cities may go higher."}, {"text": "It can't; a dollar is a dollar everywhere", "correct": false, "explanation": "Local wages and prices differ a lot, so the same dollar amount binds differently."}]},
  {"question": "Working 40 hours a week for 52 weeks at $7.25 an hour gives what annual pay before tax?", "difficulty": "easy", "options": [{"text": "$15,080", "correct": true, "explanation": "40 x 52 = 2,080 hours; 2,080 x $7.25 = $15,080."}, {"text": "$7,250", "correct": false, "explanation": "That would require only 1,000 hours a year."}, {"text": "$29,000", "correct": false, "explanation": "That's closer to full-time pay at about $14 an hour."}]},
  {"question": "What is the federal cash wage employers can pay tipped workers, if tips bring them to at least $7.25?", "difficulty": "medium", "options": [{"text": "$2.13 an hour", "correct": true, "explanation": "If tips fall short, the employer must make up the difference to the full minimum, per DOL."}, {"text": "$0", "correct": false, "explanation": "Federal law requires at least $2.13 in direct cash wages."}, {"text": "$5.15 an hour", "correct": false, "explanation": "$5.15 was the regular federal minimum before 2007."}]},
];

const h2 = "scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink";
const h3 = "scroll-mt-10 font-display text-xl font-bold text-ink mb-4";

export default function Post() {
  return (
    <>
      <h2 className={h2}>Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "The core question isn't whether workers deserve more. It's who absorbs the cost when pay is forced up: jobs and hours, prices, profits, or lower turnover.",
          "The textbook competitive model predicts job losses. The monopsony model, where employers set wages, predicts a moderate floor can raise pay without cutting jobs.",
          "Evidence since Card and Krueger (1994) finds small employment effects for moderate increases, with more disagreement as minimums rise relative to local wages.",
          "The U.S. federal minimum has been $7.25 since July 2009; more than 30 states plus D.C. set higher minimums (DOL, updated July 2026).",
        ]}
      />

      <h2 className={h2}>The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A minimum wage is a price floor for an hour of work. Raise it, and an employer&apos;s wage bill goes up. That money has to come from somewhere, and the whole debate is really an argument about <em>where</em>. One side says businesses will hire fewer people or cut hours, so some of the workers the law meant to help end up worse off. The other side says many employers have more room than that: they can raise prices a little, accept slightly lower profits, and save money because better-paid workers quit less often. Both stories are possible. Which one dominates depends mostly on <strong>how big the increase is compared with local wages</strong>. A raise from $7.25 to $9 in a city where most jobs already pay $20 barely registers. The same raise in a town where half the jobs pay $8 is a big shock.</div>}
        detailed={<div className="prose-p">In the competitive model of <TermLink href="/economics/what-supply-and-demand-actually-predicts">supply and demand</TermLink>, a binding minimum wage is a price floor above equilibrium: labor gets more expensive, employers demand less of it, and employment falls by an amount set by the <strong>elasticity of labor demand</strong>. The <strong>monopsony</strong> model changes one assumption: employers have wage-setting power, because workers face few alternative employers or high costs of switching. A monopsonist keeps wages low by hiring fewer people than it otherwise would, since hiring one more worker means raising pay for everyone. A minimum wage set in the right range removes that incentive, so pay and employment can both rise. Beyond a certain level, the competitive logic takes over again. Empirically, Card and Krueger (1994) compared fast-food restaurants in New Jersey, which raised its minimum from $4.25 to $5.05 in 1992, with neighbouring eastern Pennsylvania, which didn&apos;t, and found no relative fall in New Jersey employment. Neumark and Wascher disputed the data, and the argument has run ever since. Cengiz, Dube, Lindner and Zipperer (2019) studied 138 state-level increases and found the number of low-wage jobs changed little for minimums up to about 59% of the local median wage, while workers just below the new floor gained pay. Studies of Seattle&apos;s rise toward $13 (Jardim et al.) found reduced hours for some low-wage workers, though other researchers found smaller effects. The policy-relevant variable is the <strong>bite</strong>: the minimum as a share of the local median wage. The adjustment can also happen through <strong>pass-through</strong> to prices, lower profit margins, reduced turnover, or trimmed hours and benefits.</div>}
      />
      <FootnoteAside>CBO&apos;s 2019 report on raising the federal minimum to $15 by 2025 shows the trade-off in one table: about 17 million workers would get a direct raise, about 1.3 million people would be lifted out of poverty, and employment would fall by a median estimate of 1.3 million, with a likely range from roughly zero to 3.7 million. The width of that range is the debate in numbers.</FootnoteAside>

      <p>Notice that the two sides often agree on more than they admit. Most economists accept that a very high minimum would cost jobs and that a very low one does almost nothing. The real disagreement is about where the threshold sits and how to weigh higher pay for many against lost hours or jobs for some. That&apos;s partly an empirical question and partly a values question, which is why evidence alone hasn&apos;t settled it.</p>

      <QuickCheck
        question="A city raises its minimum wage. Which of these is NOT one of the main ways employers absorb the higher cost?"
        options={[
          { text: "Paying for it out of the federal minimum wage fund", correct: true, explanation: "Correct. There's no such fund. The cost is absorbed through some mix of higher prices, lower profits, fewer hours or jobs, and savings from lower turnover." },
          { text: "Raising prices for customers", correct: false, explanation: "Pass-through to prices is one of the main adjustment channels, especially in restaurants." },
          { text: "Reducing hours or slowing hiring", correct: false, explanation: "This is the channel the competitive model emphasises and the one critics of increases focus on." },
        ]}
      />

      <h2 className={h2}>Worked examples</h2>

      <h3 className={h3}>Example 1: What $7.25 actually pays (baseline case)</h3>
      <div className="prose-p">Full-time work is about 2,080 hours a year (40 hours &times; 52 weeks). At the federal minimum of $7.25, that&apos;s <strong>$15,080</strong> before tax, below HHS&apos;s 2025 poverty guideline of $21,150 for a two-person household. The federal rate hasn&apos;t changed since July 2009, while <TermLink href="/economics/how-inflation-actually-erodes-purchasing-power">inflation</TermLink> has cut its purchasing power by roughly a third since then, judged by the BLS consumer price index. That erosion is one reason so many states set their own higher minimums. It&apos;s also why relatively few workers earn exactly $7.25: in recent BLS reports, workers at or below the federal minimum were only around 1% of hourly-paid workers.</div>

      <h3 className={h3}>Example 2: The same $15 in two different places (edge case)</h3>
      <div className="prose-p">Suppose the median hourly wage is $32 in a large coastal city and $20 in a rural county. A $15 minimum is 47% of the median in the city but 75% in the rural county. In the city, it lifts a modest slice of jobs and sits inside the range Cengiz and colleagues studied. In the rural county, it would reach well into the middle of the wage distribution, beyond the range where U.S. evidence is strong. That&apos;s why some economists who support raising minimums favour indexing them to local wages rather than setting one national number. The dollar figure is the same; the <strong>bite</strong> is not.</div>

      <h3 className={h3}>Example 3: A restaurant&apos;s arithmetic (applied case)</h3>
      <div className="prose-p">A restaurant with $1.2 million in annual revenue employs 12 workers at $12 an hour, each working 1,500 hours a year. A new $15 minimum raises its wage bill by $3 &times; 1,500 &times; 12 = <strong>$54,000</strong> a year, before payroll taxes. That&apos;s 4.5% of revenue. If the owner passed all of it through to customers, menu prices would rise about 4.5%: a $12 meal becomes about $12.54. More realistically, the cost is split: prices go up a few percent, profit margins shrink a little, and some savings come back because fewer workers quit (replacing and training a worker costs money). If margins were already thin and customers are price-sensitive, cutting shifts becomes more likely. Each of these channels is real; the debate is about their relative sizes.</div>

      <QuickCheck
        question="A study finds a minimum wage increase raised pay for low-wage workers but reduced their weekly hours slightly. What does that illustrate?"
        options={[
          { text: "Employment effects can show up in hours, not just in the number of jobs, and total earnings can move either way", correct: true, explanation: "Correct. Seattle research, for example, focused on hours. If pay rises 10% and hours fall 3%, weekly earnings still rise; if hours fall more, they can drop." },
          { text: "Minimum wages never affect employment", correct: false, explanation: "The result shows an adjustment through hours, which is an employment effect." },
          { text: "Hours and pay always move together", correct: false, explanation: "Here they moved in opposite directions, which is exactly why researchers look at both." },
        ]}
      />

      <h2 className={h2}>How it works (visual)</h2>
      <DiagramBlock
        title="Where the cost of a minimum wage increase goes"
        type="comparison"
        svgSrc="/diagrams/economics-what-minimum-wage-debates-actually-center-on-comparison.svg"
        altText="A diagram showing a minimum wage increase raising an employer's labor cost, which splits into four channels: higher prices for customers, lower profits for owners, fewer jobs or hours for workers, and offsetting savings from lower turnover and higher productivity. Below, two models are compared. The competitive model predicts the jobs-and-hours channel dominates and employment falls. The monopsony model predicts a moderate floor can raise pay and employment together. A bar labelled 'bite' shows effects growing as the minimum rises relative to the local median wage, with evidence strongest up to about 59% of the median."
      />

      <h2 className={h2}>Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating 'raises cost jobs' or 'raises have no effect' as settled facts.", fix: "The evidence depends on the size of the increase relative to local wages. Moderate increases show small employment effects in much research; large ones are less studied." },
          { mistake: "Counting only jobs.", fix: "Look at hours, prices, turnover and total earnings too. A study can find no job losses and still find fewer hours." },
          { mistake: "Comparing dollar minimums across places without adjusting for local wages and prices.", fix: "Use the bite: the minimum as a share of the local median wage." },
          { mistake: "Assuming most minimum wage earners are teenagers.", fix: "BLS data show minimum wage workers skew young, but many are adults; who is affected depends on how high the new minimum is set." },
        ]}
      />
      <MisconceptionCallout
        myth="Economics proves that any minimum wage increase destroys jobs."
        reality={<p>That&apos;s the prediction of one model, the fully competitive labor market. Card and Krueger (1994) found no relative employment drop after New Jersey&apos;s increase, and Cengiz and colleagues (2019) found little change in low-wage job counts for increases up to about 59% of the median wage. The monopsony model explains how that can happen. But the evidence doesn&apos;t say any increase is free either: CBO&apos;s central estimate for $15 nationally still included job losses, and some studies find reduced hours. The honest summary is that effects depend on size and local context.</p>}
      />

      <h2 className={h2}>What to do next</h2>
      <ActionChecklist
        items={[
          "When you see a minimum wage claim, ask: how big is the increase relative to local median wages?",
          "Check which outcome a study measured: jobs, hours, earnings, prices or poverty. Different measures can point in different directions.",
          "Look up your own state's current minimum on the Department of Labor's state minimum wage page; many states adjust theirs for inflation each year.",
          "Read central estimates and ranges together. CBO's 1.3 million figure came with a range from near zero to 3.7 million.",
          "For background on the price side of the trade-off, see our explainer on how tariffs affect prices, which uses the same pass-through idea.",
        ]}
      />

      <h2 className={h2}>FAQ</h2>
      <FAQBlock
        items={[
          { question: "Does raising the minimum wage cause unemployment?", answer: "It depends on the size of the increase. Much research finds small employment effects for moderate increases, such as Cengiz and colleagues (2019) for minimums up to about 59% of the median wage. Larger increases carry more risk; CBO's 2019 estimate for a $15 federal minimum included a median loss of 1.3 million jobs, with a wide range." },
          { question: "Why hasn't the federal minimum wage gone up since 2009?", answer: "Changing it requires Congress to amend the Fair Labor Standards Act, and proposals have not passed. Many states and cities have raised their own minimums instead; DOL lists more than 30 states plus D.C. above $7.25 as of July 2026." },
          { question: "What did the Card and Krueger study find?", answer: "Comparing fast-food restaurants in New Jersey, which raised its minimum in 1992, with eastern Pennsylvania, which didn't, they found no relative fall in New Jersey employment. The study challenged the textbook prediction and has been debated ever since." },
          { question: "What is monopsony in the labor market?", answer: "A situation where employers have power to set wages below competitive levels, often because workers have few other options nearby. In that case, a well-set minimum wage can raise pay without reducing employment." },
          { question: "Do minimum wage increases raise prices?", answer: "Often a little, especially in labor-heavy businesses like restaurants. How much depends on how much of costs go to low-wage labor and how price-sensitive customers are." },
        ]}
      />

      <h2 className={h2}>Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className={h2}>See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
