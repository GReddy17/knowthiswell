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
  title: "What Makes a Side Hustle Different From a Real Business",
  category: "business-entrepreneurship-basics",
  order: 10,
  subtopic: "starting-from-zero",
  tags: ["side hustle", "small business", "sole proprietorship", "hobby vs business", "self-employment tax", "gig work"],
  date: "2026-10-08",
  updated: "2026-10-08",
  seoScore: 81, seoScoredOn: "2026-10-10",
  youtubeShort: false, youtubeLong: false,
  lastReviewed: "2026-10-08",
  excerpt: "To the IRS, a side hustle run for profit already is a business. The real difference is practical: a side hustle sells your hours, while a business builds a system that earns beyond them.",
  summary: "Legally, a side hustle done to make a profit is already a business: in the US it is a sole proprietorship by default, its net earnings over $400 owe self-employment tax, and all income is taxable whether or not a payment app sends a form. The IRS separates businesses from hobbies by profit motive, not by size. The practical difference is about how the income is produced. A side hustle typically trades your own hours for money, so income stops when you stop. A business has a system that can earn beyond your hours: repeatable customer acquisition, known unit economics, separate finances and records, and work that others or tools can do. Many side hustles are fine staying side hustles. The useful test is your true hourly profit after costs and taxes, and whether the work could run for a week without you.",
  sources: [
    { label: "IRS — Here's how to tell the difference between a hobby and a business for tax purposes", url: "https://www.irs.gov/newsroom/heres-how-to-tell-the-difference-between-a-hobby-and-a-business-for-tax-purposes" },
    { label: "IRS — Self-employment tax (Social Security and Medicare taxes)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" },
    { label: "IRS — Gig economy tax center", url: "https://www.irs.gov/businesses/gig-economy-tax-center" },
    { label: "U.S. Small Business Administration — Choose a business structure", url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" },
    { label: "SCORE — Resources for starting and growing a small business", url: "https://www.score.org/resource-library" },
  ],
  seeAlso: [
    "business-entrepreneurship-basics/what-an-llc-actually-protects-you-from",
    "business-entrepreneurship-basics/how-to-actually-validate-a-business-idea-before-building-it",
    "business-entrepreneurship-basics/how-profit-margin-actually-gets-calculated",
    "business-entrepreneurship-basics/how-to-actually-find-your-first-customers",
    "personal-finance-basics/self-employment-and-freelance-tax-basics",
  ],
  glossary: [
    { term: "Side hustle", definition: "Informal term for paid work done alongside a main job, usually freelancing, gig work or selling products, typically depending on the owner's own hours." },
    { term: "Sole proprietorship", definition: "The default US business structure for one person doing business for profit without forming an entity. The owner and the business are legally the same, including for debts." },
    { term: "Self-employment tax", definition: "The Social Security and Medicare tax self-employed people pay on net earnings, 15.3% on most earnings, due once net self-employment earnings reach $400 in a year." },
    { term: "Hobby (tax)", definition: "An activity not engaged in for profit. Hobby income is still taxable, but hobby expenses generally can't be deducted under current federal rules." },
    { term: "Unit economics", definition: "The revenue and costs tied to one sale or one customer, which show whether each additional sale makes or loses money." },
    { term: "Customer acquisition", definition: "How a business finds and wins new customers, and what each new customer costs in money and time." },
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
  {"question": "In the US, what is a one-person side hustle run for profit, if you haven't registered anything?", "difficulty": "easy", "options": [{"text": "A sole proprietorship", "correct": true, "explanation": "That's the default structure; no filing is needed to become one, though local licenses may still apply."}, {"text": "Nothing legally until you form an LLC", "correct": false, "explanation": "You're already in business for tax purposes once you work for profit."}, {"text": "A corporation", "correct": false, "explanation": "Corporations require formal incorporation with a state."}]},
  {"question": "What does the IRS mainly look at to decide whether an activity is a business or a hobby?", "difficulty": "medium", "options": [{"text": "Whether you carry it on to make a profit, judged by factors like how you run it and your history", "correct": true, "explanation": "Size doesn't decide it; profit motive and businesslike conduct do."}, {"text": "Whether it earns more than $10,000 a year", "correct": false, "explanation": "There is no dollar cutoff that makes something a business."}, {"text": "Whether you have a business name", "correct": false, "explanation": "A name helps show intent but isn't the test."}]},
  {"question": "At what level of net self-employment earnings do you generally owe self-employment tax?", "difficulty": "medium", "options": [{"text": "$400 in a year", "correct": true, "explanation": "Above $400 of net earnings, you file Schedule SE."}, {"text": "$600 in a year", "correct": false, "explanation": "$600 has been a form-reporting threshold for some payments, not the SE tax trigger."}, {"text": "Only once you form a company", "correct": false, "explanation": "Sole proprietors owe it too."}]},
  {"question": "A payment app doesn't send you a tax form for your side income. Is the income taxable?", "difficulty": "easy", "options": [{"text": "Yes; all income is taxable whether or not you receive a form", "correct": true, "explanation": "The IRS is explicit on this in its gig economy guidance."}, {"text": "No; no form means no tax", "correct": false, "explanation": "Forms are reporting tools, not what makes income taxable."}, {"text": "Only if it's over $20,000", "correct": false, "explanation": "Form thresholds don't change whether income is taxable."}]},
  {"question": "Which is the clearest practical sign that a side hustle has become a business?", "difficulty": "medium", "options": [{"text": "It can keep earning for a week even if you don't personally do the work", "correct": true, "explanation": "That means there's a system, not just your hours."}, {"text": "It has a logo and a website", "correct": false, "explanation": "Branding doesn't change how the income is produced."}, {"text": "It earned a lot one month", "correct": false, "explanation": "One strong month says little about repeatability."}]},
  {"question": "A seller makes $24,000 in sales with $15,000 of costs over 600 hours. What is the hourly profit before taxes?", "difficulty": "medium", "options": [{"text": "$15 an hour", "correct": true, "explanation": "($24,000 − $15,000) ÷ 600 = $15."}, {"text": "$40 an hour", "correct": false, "explanation": "That divides sales, not profit, by hours."}, {"text": "$25 an hour", "correct": false, "explanation": "That ignores part of the costs."}]},
  {"question": "Self-employment tax is 15.3% on 92.35% of net earnings. Roughly how much is it on $18,000 of net earnings?", "difficulty": "hard", "options": [{"text": "About $2,540", "correct": true, "explanation": "$18,000 × 0.9235 × 0.153 ≈ $2,543, before any income tax."}, {"text": "About $1,000", "correct": false, "explanation": "That's far too low for a 15.3% rate."}, {"text": "About $5,000", "correct": false, "explanation": "That's too high; the rate applies to 92.35% of net earnings."}]},
  {"question": "Why do advisers recommend a separate bank account even for a small side hustle?", "difficulty": "easy", "options": [{"text": "It keeps clean records for taxes and shows the activity is run like a business", "correct": true, "explanation": "Mixed accounts make deductions hard to prove and profit hard to see."}, {"text": "The law requires every sole proprietor to have one", "correct": false, "explanation": "It's strongly advised, not universally required for sole proprietors."}, {"text": "It automatically creates an LLC", "correct": false, "explanation": "Opening an account doesn't change your legal structure."}]},
  {"question": "As a sole proprietor, what happens if your side hustle is sued for a debt?", "difficulty": "hard", "options": [{"text": "Your personal assets can be at risk, because you and the business are legally the same", "correct": true, "explanation": "That's one reason people later form an LLC; see the SBA's structure guide."}, {"text": "Only the money in the business account is at risk", "correct": false, "explanation": "Sole proprietorships don't separate personal and business liability."}, {"text": "Side hustles can't be sued", "correct": false, "explanation": "They can, like any business."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Legally, a side hustle run for profit is already a business. In the US it's a sole proprietorship by default, and its net earnings over $400 owe self-employment tax.",
          "The practical difference is the engine. A side hustle sells your hours, so income stops when you stop. A business has a system that earns beyond your hours.",
          "Test yours with two numbers: true hourly profit after costs and taxes, and whether it could run for a week without you. Staying a side hustle is a fine choice if you make it on purpose.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Picture two people who both bake cakes on weekends. The first takes orders from friends, bakes every one herself and gets paid per cake. If she takes a month off, the money stops. The second has a simple website that brings in orders every week, knows exactly what each cake costs to make, keeps a separate bank account, and has trained a helper who bakes the standard orders. If she takes a month off, cakes still go out. Both are earning money, and both, in the eyes of the tax office, are running a business. But only the second has built something that works without her hands on every cake. That&apos;s the real line between a side hustle and a business. It isn&apos;t about size, a fancy name or registering a company. It&apos;s about whether you&apos;ve built a system or are selling your time. Neither is better. A side hustle is a perfectly good way to earn extra money. It&apos;s just worth knowing which one you have, because they need to be managed differently.</div>}
        detailed={<div className="prose-p">Start with the legal layer, because it surprises people. In the US, one person doing business for profit without forming an entity is a <strong>sole proprietorship</strong> by default (SBA). The IRS separates a business from a <strong>hobby</strong> by profit motive, using factors such as whether you run it in a businesslike way, keep accurate books, depend on the income, and change methods to improve profitability. A business can deduct ordinary and necessary expenses; under current federal rules hobby expenses generally can&apos;t be deducted, though hobby income is still taxable. Net self-employment earnings of $400 or more trigger <strong>self-employment tax</strong>, 15.3% on 92.35% of net earnings up to the Social Security wage base, filed on Schedule SE. And all income is taxable whether or not a platform issues a Form 1099; the reporting thresholds for payment apps have changed several times recently, which affects paperwork, not tax owed. The practical layer is about the income engine. Side hustles are usually <strong>labor-bound</strong>: revenue = your hours × your rate. A business has at least some of: repeatable <strong>customer acquisition</strong> that doesn&apos;t depend on personal favors; known <strong>unit economics</strong>; documented processes someone else can follow; and finances clean enough to show a profit after paying the owner a fair rate. The edge case is the high-rate freelancer: someone billing $150 an hour has a lucrative side hustle, but it&apos;s still labor-bound until it has a system beyond them.</div>}
      />
      <FootnoteAside>Forming an LLC doesn&apos;t make a side hustle a &quot;real&quot; business, and not forming one doesn&apos;t make it a hobby. An LLC changes your liability protection and paperwork, not how the income is produced. See <TermLink href="/business-entrepreneurship-basics/what-an-llc-actually-protects-you-from">what an LLC actually protects you from</TermLink>.</FootnoteAside>

      <p>The tax details above are federal and current as of October 2026; states add their own rules, and the IRS&apos;s <TermLink href="/personal-finance-basics/self-employment-and-freelance-tax-basics">self-employment guidance</TermLink> is the place to check current thresholds.</p>

      <QuickCheck
        question="You earn $3,000 a year tutoring for profit, with no registration. What are you in the eyes of the IRS?"
        options={[
          { text: "A self-employed person running a business (a sole proprietor)", correct: true, explanation: "Correct. Profit motive, not size or registration, is the test." },
          { text: "Nothing, because it's under $10,000", correct: false, explanation: "There's no dollar threshold that makes it a business." },
          { text: "A hobbyist, because you have a main job", correct: false, explanation: "Having a main job doesn't make side work a hobby." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <p>The people and figures below are hypothetical, chosen to show the arithmetic. Tax amounts are simplified federal estimates that ignore income tax and state rules.</p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The freelance designer (baseline case)</h3>
      <div className="prose-p">Dev designs logos on evenings and weekends: $1,500 a month for about 30 hours of work, so <strong>$50 an hour</strong> on paper. Over a year that&apos;s $18,000 of net earnings, and self-employment tax is about $18,000 × 0.9235 × 0.153 ≈ <strong>$2,543</strong>, before income tax. Every dollar depends on his hours, and every client came through a friend. It&apos;s a healthy side hustle, and it&apos;s still a business for tax purposes, so he needs to set money aside and may need to make quarterly estimated payments.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The busy online shop (edge case)</h3>
      <div className="prose-p">Priya sells handmade candles online: $24,000 in sales, which sounds like a real business. But materials, platform fees, shipping and ads cost $15,000, and the shop took about 600 hours. Profit is $9,000, or <strong>$15 an hour</strong> before self-employment and income tax. Revenue looks like a business; the economics look like a low-paid job. Knowing her <TermLink href="/business-entrepreneurship-basics/how-profit-margin-actually-gets-calculated">margin</TermLink> per candle is the first step to deciding whether to raise prices, cut costs or stop.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Crossing the line (applied)</h3>
      <div className="prose-p">Sam runs weekend house-cleaning. He writes a checklist for each job type, hires a part-time cleaner at $22 an hour, charges $45 an hour of cleaning, and puts $200 a month into local search ads that reliably bring in four new regular clients. Each cleaner-hour now leaves about $23 before other costs, and that profit arrives whether or not Sam is holding the mop. He opens a separate bank account and tracks income and expenses monthly. His hours went down and his income stayed the same. That&apos;s the shift from side hustle to business: a repeatable way to <TermLink href="/business-entrepreneurship-basics/how-to-actually-find-your-first-customers">find customers</TermLink>, known unit economics, and work that doesn&apos;t require him personally.</div>

      <QuickCheck
        question="Which change does most to turn a side hustle into a business?"
        options={[
          { text: "Building a repeatable way to get customers and a process someone else can follow", correct: true, explanation: "Correct. That's what lets income grow beyond your own hours." },
          { text: "Designing a logo", correct: false, explanation: "Branding helps marketing but doesn't change the engine." },
          { text: "Working more hours", correct: false, explanation: "More hours grow a side hustle, but it stays labor-bound." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Side hustle vs business: five questions that show the difference"
        type="comparison"
        svgSrc="/diagrams/business-entrepreneurship-basics-what-makes-a-side-hustle-different-from-a-real-business-comparison.svg"
        altText="A comparison table with two columns, side hustle and business, across five rows. Income engine: your hours times your rate, versus a system that earns beyond your hours. Customers: friends, referrals and platforms, versus a repeatable channel with a known cost. Numbers: revenue only, versus unit economics and true hourly profit. Money and records: mixed with personal, versus a separate account and books. Without you for a week: income stops, versus work continues. A footer notes that to the IRS both are businesses if run for profit, with self-employment tax due on net earnings of $400 or more."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Ignoring taxes because 'it's just a side hustle'.", fix: "Set aside a share of every payment for self-employment and income tax, and check the IRS gig economy tax center for estimated-payment rules." },
          { mistake: "Judging success by revenue.", fix: "Work out profit per hour after all costs. High sales can hide a low hourly wage." },
          { mistake: "Mixing business and personal money.", fix: "Open a separate account and log every expense. It makes deductions defensible and shows whether you're actually profitable." },
          { mistake: "Forming an LLC as the first step.", fix: "First prove people will pay repeatedly. Choose a structure when liability or scale makes it worthwhile, using the SBA's comparison." },
        ]}
      />
      <MisconceptionCallout
        myth="A side hustle isn't a real business until you register a company."
        reality={<p>To the IRS, if you&apos;re doing it for profit, it&apos;s a business from the first sale, taxed as a sole proprietorship by default. Registering an LLC changes liability and paperwork, not whether you&apos;re in business. What separates a side hustle from a scalable business is the income engine, not the legal form.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Total last year's side income and costs, then divide profit by hours worked to get your true hourly rate.",
          "Open a separate bank account for the work and start a simple monthly income-and-expense log.",
          "Read the IRS hobby-versus-business factors and the gig economy tax center pages.",
          "Write down where your last ten customers came from. If it's mostly friends, test one repeatable channel.",
          "Decide on purpose: keep it a time-for-money side hustle, or document one process someone else could do.",
          "For your own tax situation, talk to a tax professional or a free SCORE mentor.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "When does a side hustle become a business?", answer: "For taxes, as soon as you do it to make a profit. In practice, people call it a business once it has a system: repeatable customers, known profit per sale, separate finances and work that doesn't depend entirely on your own hours." },
          { question: "Do I need an LLC for my side hustle?", answer: "No. You can operate as a sole proprietor. An LLC can separate business debts from personal assets in many situations, but it adds fees and paperwork; the SBA's guide compares the options." },
          { question: "Do I have to pay taxes on side hustle income?", answer: "Yes. All income is taxable, whether or not you receive a 1099. If net self-employment earnings reach $400 in a year, you also owe self-employment tax." },
          { question: "What is the difference between a hobby and a business?", answer: "Profit motive. The IRS looks at factors such as whether you run the activity like a business, keep good records, depend on the income and change methods to make a profit. Hobby income is taxable, but hobby expenses generally can't be deducted." },
          { question: "How much should I set aside for taxes from a side hustle?", answer: "It depends on your income tax bracket and state, plus about 14% of net earnings for self-employment tax. Many people set aside a fixed share of each payment; a tax professional can give you a figure for your situation." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
