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
  title: "How to Actually Price a Product or Service",
  category: "business-entrepreneurship-basics",
  order: 5,
  subtopic: "starting-from-zero",
  tags: ["pricing", "cost-plus pricing", "value-based pricing", "markup vs margin", "freelance rates"],
  date: "2026-09-26",
  updated: "2026-09-26",
  youtubeShort: false, youtubeLong: false,
  seoScore: 74, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-09-26",
  excerpt: "A price has a floor (your full cost), a ceiling (what the customer thinks it's worth), and competitors somewhere in between. Most new businesses underprice because they count only direct costs and confuse markup with margin.",
  summary: "Pricing a product or service means finding a number between two limits: a floor set by your full costs, including overhead and your own time, and a ceiling set by the value customers place on what you offer, with competitors' prices as a reference point in between. The SBA's business guide stresses knowing your costs and researching competitors and customers before setting prices. Common methods are cost-plus (cost times a markup), competitor-based (priced relative to alternatives), and value-based (priced from the customer's gain or willingness to pay), as covered in standard marketing texts such as OpenStax's Principles of Marketing. Two arithmetic traps catch many new owners: markup and margin aren't the same (a 50% markup yields a 33% margin), and freelancers who divide their target income by 2,080 working hours forget that many of those hours won't be billable.",
  sources: [
    { label: "U.S. Small Business Administration — Market research and competitive analysis", url: "https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis" },
    { label: "U.S. Small Business Administration — Calculate your startup costs", url: "https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs" },
    { label: "OpenStax — Principles of Marketing (free textbook, pricing chapters)", url: "https://openstax.org/details/books/principles-marketing" },
  ],
  seeAlso: [
    "business-entrepreneurship-basics/how-profit-margin-actually-gets-calculated",
    "business-entrepreneurship-basics/how-to-actually-validate-a-business-idea-before-building-it",
    "business-entrepreneurship-basics/what-working-capital-actually-means-for-a-business",
    "business-entrepreneurship-basics/what-a-business-plan-actually-needs-to-include",
    "economics/what-supply-and-demand-actually-predicts",
    "personal-finance-basics/self-employment-and-freelance-tax-basics",
    "business-entrepreneurship-basics/what-cash-flow-actually-means-for-a-small-business",
    "business-entrepreneurship-basics/how-to-actually-find-your-first-customers",
    "business-entrepreneurship-basics/what-a-business-license-actually-requires",
  ],
  glossary: [
    { term: "Cost-plus pricing", definition: "Setting a price by adding a fixed percentage markup to what the item costs you." },
    { term: "Value-based pricing", definition: "Setting a price from what the product is worth to the customer (money saved, time saved, results), rather than from what it costs you." },
    { term: "Markup", definition: "Profit as a percentage of cost. Cost $20, price $30: markup is $10 / $20 = 50%." },
    { term: "Gross margin", definition: "Profit as a percentage of the selling price. Cost $20, price $30: margin is $10 / $30 = 33%." },
    { term: "Overhead", definition: "Costs of running the business that aren't tied to any single sale, such as rent, software, insurance and your unbilled time." },
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
  {"question": "What sets the floor for your price?", "difficulty": "easy", "options": [{"text": "Your full cost, including overhead and your time", "correct": true, "explanation": "Below that, each sale loses money over time."}, {"text": "The lowest competitor's price", "correct": false, "explanation": "A competitor's price is a reference, not your cost floor."}, {"text": "Whatever feels fair", "correct": false, "explanation": "Feeling isn't a floor. Your costs are."}]},
  {"question": "An item costs you $20 and you sell it for $30. What's the gross margin?", "difficulty": "medium", "options": [{"text": "About 33%", "correct": true, "explanation": "$10 profit divided by the $30 price."}, {"text": "50%", "correct": false, "explanation": "50% is the markup: $10 divided by the $20 cost."}, {"text": "10%", "correct": false, "explanation": "$10 is the profit in dollars, not a percentage."}]},
  {"question": "What does value-based pricing start from?", "difficulty": "easy", "options": [{"text": "What the result is worth to the customer", "correct": true, "explanation": "It prices from customer gain or willingness to pay."}, {"text": "Your cost plus a fixed percentage", "correct": false, "explanation": "That's cost-plus pricing."}, {"text": "The average price in your industry", "correct": false, "explanation": "That's closer to competitor-based pricing."}]},
  {"question": "A freelancer wants $60,000 a year and divides it by 2,080 hours to get about $29 an hour. What's wrong?", "difficulty": "medium", "options": [{"text": "Many working hours aren't billable, and business costs and self-employment taxes aren't covered", "correct": true, "explanation": "Admin, sales and gaps between clients mean far fewer billable hours, so the rate must be higher."}, {"text": "Nothing; that's the correct method", "correct": false, "explanation": "It assumes every working hour gets paid."}, {"text": "They should divide by 365 instead", "correct": false, "explanation": "The issue is billable hours and costs, not the divisor's calendar."}]},
  {"question": "Why do many new businesses underprice?", "difficulty": "medium", "options": [{"text": "They count only direct costs and leave out overhead and their own time", "correct": true, "explanation": "Rent, software, insurance and unpaid admin hours still have to be paid for."}, {"text": "The law requires low prices for new businesses", "correct": false, "explanation": "No such law exists."}, {"text": "Customers always choose the cheapest option", "correct": false, "explanation": "Price is only one factor in most buying decisions."}]},
  {"question": "You want a 40% gross margin on an item that costs $30. What price do you need?", "difficulty": "hard", "options": [{"text": "$50", "correct": true, "explanation": "Price = cost / (1 - margin) = $30 / 0.6 = $50."}, {"text": "$42", "correct": false, "explanation": "$42 is a 40% markup, which gives only about a 29% margin."}, {"text": "$34", "correct": false, "explanation": "That's far too low for a 40% margin."}]},
  {"question": "What's the main risk of pricing purely to match the cheapest competitor?", "difficulty": "hard", "options": [{"text": "Their costs, goals or quality may differ from yours, so the price may not cover your costs", "correct": true, "explanation": "A competitor's price tells you about the market, not about your cost floor."}, {"text": "It's illegal to match a competitor's price", "correct": false, "explanation": "Independently matching a price is legal. Agreeing on prices with competitors is not."}, {"text": "Customers will think you're too expensive", "correct": false, "explanation": "Matching the lowest price wouldn't look expensive."}]},
  {"question": "According to the SBA's business guide, what should come before setting prices?", "difficulty": "easy", "options": [{"text": "Researching your costs, customers and competitors", "correct": true, "explanation": "The SBA guide covers market research, competitive analysis and cost calculation as early steps."}, {"text": "Registering a trademark", "correct": false, "explanation": "Useful for some businesses, but not a pricing input."}, {"text": "Opening a second location", "correct": false, "explanation": "That comes long after pricing basics."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Every price sits between a floor (your full cost, including overhead and your time) and a ceiling (what customers believe it's worth).",
          "Competitors' prices tell you where customers' expectations are, but not whether a price covers your costs.",
          "Markup and margin are different numbers. A 50% markup gives only a 33% margin, and confusing them is a common way to underprice.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of your price as a spot on a ruler. The left end is what it really costs you to deliver, counting materials, but also rent, software, insurance, and the hours you spend on emails and invoices. Price below that, and every sale digs you deeper. The right end is what the product is worth to the buyer: the money it saves them, the hassle it removes, the result it gets. Price above that and nobody buys. Competitors show you where buyers are used to seeing prices, somewhere in the middle. Your job is to pick a spot that covers the left end with room to spare and that you can justify toward the right end.</div>}
        detailed={<div className="prose-p">Standard marketing texts, including OpenStax&apos;s <em>Principles of Marketing</em>, group pricing methods into three families. <strong>Cost-based</strong>: price = unit cost × (1 + markup). It&apos;s simple and guarantees a per-unit profit, but it ignores demand, so it can leave money on the table or price you out. <strong>Competition-based</strong>: price set relative to substitutes the customer would otherwise buy. It anchors you to market expectations, but it imports competitors&apos; cost structures and strategies, which may not match yours. <strong>Value-based</strong>: price derived from the customer&apos;s economic gain or measured willingness to pay. It captures the most, but requires real customer research, which is the same work the SBA guide describes under market research and competitive analysis. In practice you combine them: cost sets the floor, value sets the ceiling, and competition places you between them. Two mechanics to get right. <strong>Full cost</strong> includes allocated overhead, not just direct materials and labor. <strong>Margin math</strong>: margin = (price − cost) / price, so to hit a target margin m, price = cost / (1 − m). The edge case: <TermLink href="/economics/what-supply-and-demand-actually-predicts">demand</TermLink> responds to price, so a lower price that sells more units isn&apos;t automatically more profitable; you have to check total profit, not just volume. For the full set of margin measures (gross, operating and net), see <TermLink href="/business-entrepreneurship-basics/how-profit-margin-actually-gets-calculated">how profit margin actually gets calculated</TermLink>.</div>}
      />
      <FootnoteAside>This is general business education. Industries have their own norms (for example, regulated pricing, or trade-standard markups), and a local SCORE mentor or accountant can help pressure-test your numbers.</FootnoteAside>

      <p>Pricing works best after you&apos;ve checked that people actually want the thing, which is the point of <TermLink href="/business-entrepreneurship-basics/how-to-actually-validate-a-business-idea-before-building-it">validating a business idea</TermLink>. Early price tests are part of that validation.</p>

      <QuickCheck
        question="You buy mugs for $8 and sell them for $12. Your friend says you have a 50% margin. Are they right?"
        options={[
          { text: "No. That's a 50% markup; the margin is $4 / $12, about 33%", correct: true, explanation: "Correct. Markup divides profit by cost; margin divides profit by price." },
          { text: "Yes, $4 is half of $8", correct: false, explanation: "That's the markup calculation. Margin uses the selling price." },
          { text: "No, the margin is $4", correct: false, explanation: "$4 is the profit in dollars. Margin is a percentage of the price." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A product with a target margin (baseline case)</h3>
      <div className="prose-p">A candle costs $6 in wax, wick and jar. Shipping supplies and card fees add $1.50, and monthly overhead (booth fee, website, insurance) of $300 spread over 200 candles adds another $1.50. Full cost: <strong>$9</strong>. To reach a 55% gross margin, price = $9 / (1 − 0.55) = <strong>$20</strong>. Comparable handmade candles nearby sell for $18 to $28, so $20 is within what customers expect, and it covers every cost with room left over.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A freelancer&apos;s hourly rate (the billable-hours trap)</h3>
      <div className="prose-p">A freelance designer wants $60,000 a year in income and expects $10,000 a year in costs (software, equipment, insurance) plus self-employment tax. Dividing $60,000 by 2,080 hours (40 hours × 52 weeks) gives about $29 an hour, which is far too low. After vacation, sick days, admin, marketing and gaps between clients, perhaps 1,000 hours a year are billable. ($60,000 + $10,000) / 1,000 = <strong>$70 an hour</strong> before taxes. Self-employment tax pushes the real number higher still. Freelancers who price at $29 an hour find out the difference the hard way.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Pricing on value (real-world use)</h3>
      <div className="prose-p">A consultant sets up a scheduling system that saves a clinic 10 staff hours a week, at $25 an hour. That&apos;s about $13,000 a year in saved time. The consultant&apos;s cost to deliver is about $2,000. Cost-plus might suggest $3,000. Value-based pricing suggests the clinic would happily pay $5,000 to $6,000, since it earns that back in under six months. Both prices are above the floor, but one captures far more of the value created, and the client is still clearly better off.</div>

      <QuickCheck
        question="In Example 2, why does the rate jump from about $29 to $70 an hour?"
        options={[
          { text: "Only about 1,000 of the 2,080 hours are billable, and business costs must be covered too", correct: true, explanation: "Correct. Income and costs have to be earned from billable hours, not all working hours." },
          { text: "Designers are required to charge at least $70", correct: false, explanation: "There's no required rate. The math drives it." },
          { text: "Because $70 is the competitor average", correct: false, explanation: "The number came from costs and billable hours, not competitors." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Setting a price step by step"
        type="flow"
        svgSrc="/diagrams/business-entrepreneurship-basics-how-to-actually-price-a-product-or-service-flow.svg"
        altText="A five-step flow. 1: Add up full cost per unit, including overhead and your time. This is the floor. 2: Estimate what the result is worth to the customer. This is the ceiling. 3: Check competitors' prices to see where expectations sit. 4: Pick a price between floor and ceiling and check its margin. 5: Test it with real customers and adjust."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Counting only materials when working out cost.", fix: "Add overhead (rent, software, fees, insurance) and a value for your own time, spread across expected sales." },
          { mistake: "Using markup when you meant margin.", fix: "For a target margin m, use price = cost / (1 − m). A 50% margin needs a 100% markup." },
          { mistake: "Copying the cheapest competitor's price.", fix: "Use competitor prices as a reference, then check them against your own cost floor and what makes your offer different." },
        ]}
      />
      <MisconceptionCallout
        myth="The lowest price wins, so a new business should undercut everyone."
        reality={<p>Customers weigh quality, speed, trust, convenience and fit, not just price, and a very low price can even signal low quality. More importantly, a small business rarely has the scale to survive a price war: its per-unit costs are usually higher than a large competitor&apos;s. Underpricing also makes it hard to raise prices later. A price that covers full costs and is justified by clear value is usually more sustainable than the cheapest one.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "List every cost for one unit or one hour of work, including a share of overhead and your own time.",
          "Write down the specific value your customer gets: money saved, time saved, a result achieved.",
          "Collect 5 to 10 real competitor prices for comparable offers.",
          "Choose a price, then calculate its gross margin with (price − cost) / price.",
          "Test it with real buyers, and review prices at least once a year as costs change.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do I figure out what to charge for my product?", answer: "Start with your full cost per unit as the floor, estimate what it's worth to customers as the ceiling, check competitor prices, then pick a price in between with a healthy margin and test it." },
          { question: "What's the difference between markup and margin?", answer: "Markup is profit divided by cost; margin is profit divided by price. On a $20 item sold for $30, markup is 50% and margin is about 33%." },
          { question: "How do freelancers calculate an hourly rate?", answer: "Add target income and business costs, then divide by realistic billable hours, which are often around half of total working hours, not the full 2,080." },
          { question: "Is value-based pricing better than cost-plus pricing?", answer: "Value-based pricing usually captures more, but it needs real customer research. Cost-plus is simpler and sets a safe floor. Many businesses use cost as the floor and value to decide how far above it to go." },
          { question: "Should I charge less than competitors when starting out?", answer: "Not by default. Undercutting can fail to cover your costs and makes raising prices harder later. Compete on a clear difference instead, and use introductory offers deliberately if you use them at all." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
