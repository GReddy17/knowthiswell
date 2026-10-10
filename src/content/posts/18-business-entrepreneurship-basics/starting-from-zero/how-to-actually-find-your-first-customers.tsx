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
  title: "How to Actually Find Your First Customers",
  category: "business-entrepreneurship-basics",
  order: 7,
  subtopic: "starting-from-zero",
  tags: ["first customers", "customer acquisition", "small business marketing", "sales outreach", "startup"],
  date: "2026-09-30",
  updated: "2026-09-30",
  youtubeShort: false, youtubeLong: false,
  seoScore: 85, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-09-30",
  excerpt: "Your first customers almost never come from ads or a launch post. They come from a short list of specific people with a specific problem, contacted one at a time, and the conversations that follow.",
  summary: "Finding your first customers is a manual process, not a marketing one. It starts with narrowing who you serve to a group specific enough to list by name, then contacting those people directly through your existing network and the places they already gather, such as trade groups, local associations and online communities. Each conversation is part research and part sale: you learn what the problem costs them and offer a small, low-risk first purchase or pilot. Because only a fraction of outreach becomes a conversation and only a fraction of conversations become a sale, the work is a numbers game you should measure. The SBA recommends grounding this in market research about who your customers are and where they buy. Paid ads and broad social posts tend to work better later, once you know which message and which customer actually convert. Outreach also has legal limits: commercial email must follow the FTC's CAN-SPAM rules, including a working opt-out and a valid postal address.",
  sources: [
    { label: "U.S. Small Business Administration — Market research and competitive analysis", url: "https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis" },
    { label: "U.S. Small Business Administration — Marketing and sales", url: "https://www.sba.gov/business-guide/manage-your-business/marketing-sales" },
    { label: "SCORE — Free small business mentoring and resources", url: "https://www.score.org/" },
    { label: "Federal Trade Commission — CAN-SPAM Act: A Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" },
    { label: "Paul Graham — Do Things that Don't Scale (2013)", url: "https://paulgraham.com/ds.html" },
  ],
  seeAlso: [
    "business-entrepreneurship-basics/how-to-actually-validate-a-business-idea-before-building-it",
    "business-entrepreneurship-basics/how-to-actually-price-a-product-or-service",
    "business-entrepreneurship-basics/what-a-business-plan-actually-needs-to-include",
    "business-entrepreneurship-basics/what-cash-flow-actually-means-for-a-small-business",
    "business-entrepreneurship-basics/what-makes-a-side-hustle-different-from-a-real-business",
  ],
  glossary: [
    { term: "Ideal customer profile", definition: "A specific description of the customer most likely to buy and benefit, narrow enough that you could list real examples by name." },
    { term: "Warm outreach", definition: "Contacting people who already know you, or who are introduced by someone they know, rather than strangers." },
    { term: "Conversion rate", definition: "The share of people at one step who move to the next, such as messages sent that turn into conversations, or conversations that turn into sales." },
    { term: "Pilot", definition: "A small, time-limited first engagement, often at a reduced price or scope, that lets a customer try the product with low risk." },
    { term: "Customer acquisition cost (CAC)", definition: "The total sales and marketing spending, including your own time if you value it, divided by the number of new customers it produced." },
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
  {"question": "Where do most new businesses find their very first customers?", "difficulty": "easy", "options": [{"text": "Direct, one-to-one outreach to specific people, often through an existing network", "correct": true, "explanation": "Early on there's no brand or reviews, so personal contact does the work that marketing does later."}, {"text": "A large paid ad campaign on launch day", "correct": false, "explanation": "Ads can work later, but without knowing what converts, early ad money is often wasted."}, {"text": "Waiting for search engines to send traffic", "correct": false, "explanation": "A new website typically gets little search traffic for months."}]},
  {"question": "Why narrow your target customer before reaching out?", "difficulty": "easy", "options": [{"text": "So you can find and list real people to contact and speak to their specific problem", "correct": true, "explanation": "'Small businesses' is too broad to act on. 'Independent dental offices in my county' gives you a list."}, {"text": "Because it's legally required", "correct": false, "explanation": "There's no legal requirement. It's a practical one."}, {"text": "To avoid ever selling to anyone outside that group", "correct": false, "explanation": "Narrowing is a starting point, not a permanent wall."}]},
  {"question": "You send 100 messages. 20 people reply, 8 agree to a call and 2 buy. What is the conversation-to-sale conversion rate?", "difficulty": "medium", "options": [{"text": "25%", "correct": true, "explanation": "2 sales from 8 calls is 2 ÷ 8 = 25%."}, {"text": "2%", "correct": false, "explanation": "That's the message-to-sale rate, not the call-to-sale rate."}, {"text": "10%", "correct": false, "explanation": "10% would be 2 sales from 20 replies."}]},
  {"question": "Using that same funnel, how many messages would you expect to need for 6 customers?", "difficulty": "medium", "options": [{"text": "About 300", "correct": true, "explanation": "At 2 customers per 100 messages, 6 customers needs about 300, if the rates hold."}, {"text": "About 60", "correct": false, "explanation": "That assumes every 10 messages produce a sale, which this funnel doesn't show."}, {"text": "About 1,000", "correct": false, "explanation": "That overestimates. At a 2% overall rate, 300 is the expected figure."}]},
  {"question": "Under the FTC's CAN-SPAM rules, what must a commercial email include?", "difficulty": "medium", "options": [{"text": "A clear way to opt out and a valid physical postal address", "correct": true, "explanation": "Opt-out requests must also be honored within 10 business days."}, {"text": "A discount code", "correct": false, "explanation": "No offer is required. Honesty and opt-out are."}, {"text": "Nothing, if it's sent to businesses", "correct": false, "explanation": "CAN-SPAM covers business-to-business email too."}]},
  {"question": "What is a pilot in early sales?", "difficulty": "easy", "options": [{"text": "A small, time-limited first engagement that lets a customer try you with low risk", "correct": true, "explanation": "It lowers the barrier for a customer who has never heard of you."}, {"text": "A free product given to everyone forever", "correct": false, "explanation": "A pilot has a defined scope and end date and ideally some payment."}, {"text": "A government test of your business license", "correct": false, "explanation": "It's a sales term, not a regulatory one."}]},
  {"question": "Why is a paying customer usually better evidence than a compliment like 'great idea'?", "difficulty": "medium", "options": [{"text": "Paying shows the problem is costly enough to act on; praise costs nothing to give", "correct": true, "explanation": "People are polite. Money, time or a signed commitment is a stronger signal."}, {"text": "Compliments are always lies", "correct": false, "explanation": "They're often sincere, just weak evidence of buying intent."}, {"text": "Payment is needed to register the business", "correct": false, "explanation": "Registration has nothing to do with customer payments."}]},
  {"question": "A founder spends $600 on ads and 10 hours valued at $40/hour, and gets 4 customers. What is the customer acquisition cost?", "difficulty": "hard", "options": [{"text": "$250 per customer", "correct": true, "explanation": "($600 + $400) ÷ 4 = $250."}, {"text": "$150 per customer", "correct": false, "explanation": "That leaves out the value of the founder's time."}, {"text": "$1,000 per customer", "correct": false, "explanation": "$1,000 is the total cost. Divide by the 4 customers."}]},
  {"question": "After your first few happy customers, what is often the cheapest next source of customers?", "difficulty": "medium", "options": [{"text": "Asking them for referrals and testimonials", "correct": true, "explanation": "A recommendation from a peer carries trust you can't buy with an ad."}, {"text": "A billboard", "correct": false, "explanation": "Broad advertising is usually expensive and hard to measure for a tiny business."}, {"text": "Raising prices immediately", "correct": false, "explanation": "Pricing matters, but it isn't a source of customers."}]},
  {"question": "What's the main reason founders avoid direct outreach even though it works?", "difficulty": "easy", "options": [{"text": "Fear of rejection and the feeling that it doesn't scale", "correct": true, "explanation": "It doesn't need to scale yet. It needs to teach you what sells."}, {"text": "It's illegal to contact businesses directly", "correct": false, "explanation": "Direct outreach is legal within rules such as CAN-SPAM and telemarketing laws."}, {"text": "Customers prefer to never talk to founders", "correct": false, "explanation": "Early customers often value talking to the person who built the product."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "First customers come from direct, one-to-one outreach to a narrow, nameable group of people, not from ads or a launch announcement.",
          "Every step loses people: messages become replies, replies become calls, calls become sales. Measure each rate and you'll know how much outreach you need.",
          "Start with your warm network and the places your customers already gather, offer a small low-risk first purchase, and ask every happy customer for a referral.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A new business has no reviews, no reputation and no one searching for its name. So the usual marketing tools don&apos;t have much to work with yet. What does work is the slow, personal route: decide exactly who you&apos;re for, write down real people who fit, and talk to them one at a time. Think of it like opening a restaurant on a quiet street. You don&apos;t buy a billboard on day one. You invite the neighbors, cook for them, and ask the ones who liked it to bring a friend. Each conversation either wins a customer or teaches you why not, and both are useful. After 20 or 30 of those conversations, you&apos;ll know which pitch lands and which customers say yes, and that&apos;s when broader marketing starts to pay off.</div>}
        detailed={<div className="prose-p"><strong>Step 1, narrow.</strong> Define an <strong>ideal customer profile</strong> tight enough to list by name: not &quot;restaurants&quot; but &quot;independent restaurants in my city with 10 to 40 staff.&quot; The SBA&apos;s market research guidance frames this as understanding who your customers are, what they need and where they buy. <strong>Step 2, list and reach.</strong> Build a list of 50 to 100 specific people. Start with <strong>warm outreach</strong> (people who know you, or introductions from them) because reply rates are much higher than for strangers, then go where your customers already gather: trade associations, chambers of commerce, local groups, industry forums. <strong>Step 3, converse.</strong> Treat each call as research plus an offer. Ask about the problem and what it costs them now, then offer a <strong>pilot</strong> or small first order with a clear scope and end date. <strong>Step 4, measure.</strong> Track the <strong>conversion rate</strong> at each step so you can see where people drop out. <strong>Step 5, loop.</strong> Deliver well, then ask for a testimonial and a referral. The edge case is legal: commercial email, including business-to-business, must follow the FTC&apos;s CAN-SPAM rules (no deceptive subject lines, a valid postal address, a working opt-out honored within 10 business days), and cold texts and robocalls face stricter federal telemarketing rules. Rules differ outside the US, so check local law if you sell abroad.</div>}
      />
      <FootnoteAside>The funnel numbers in the examples below are illustrations to show the arithmetic, not industry benchmarks. Real reply and close rates vary widely by industry, price and how warm the contact is, so measure your own.</FootnoteAside>

      <p>If you haven&apos;t yet checked that people will pay for the idea, start with{" "}<TermLink href="/business-entrepreneurship-basics/how-to-actually-validate-a-business-idea-before-building-it">how to validate a business idea</TermLink>. Finding first customers and validating the idea often happen in the same conversations.</p>

      <QuickCheck
        question="Which target is narrow enough to start outreach?"
        options={[
          { text: "Independent physical therapy clinics within 30 miles of you", correct: true, explanation: "Correct. You could search, list and contact these clinics by name this week." },
          { text: "Anyone who wants to be healthier", correct: false, explanation: "That's nearly everyone, so there's no list to start from and no specific message." },
          { text: "Small businesses in the United States", correct: false, explanation: "There are tens of millions of them. Narrow by industry, size and location first." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A freelance bookkeeper (baseline case)</h3>
      <div className="prose-p">Maria starts a bookkeeping service for local contractors: plumbers, electricians and roofers with one to ten employees. She lists 80 names: 25 from her own contacts and their introductions, and 55 from her county&apos;s trade association directory. She sends short personal messages, not a template blast. Suppose 18 reply, 9 agree to a 20-minute call, and 3 sign up for a one-month trial at a reduced rate. Her funnel: 80 → 18 → 9 → 3. Overall that&apos;s about 4% of contacts, but 33% of calls. Now she knows the bottleneck is getting replies, not closing, so she works on her opening line and asks each of the 3 new clients for one introduction.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Software for businesses (edge case: long decisions)</h3>
      <div className="prose-p">Dev builds scheduling software for veterinary clinics. A clinic owner can&apos;t decide in one call, because staff need to try it and the practice manager has to approve. Instead of chasing quick sales, Dev offers 5 clinics a 60-day pilot at half price in exchange for weekly feedback. Two convert to full price, one leaves, and two need more time. The two paying clinics give Dev something more valuable than revenue: real usage data and a reference other clinic owners will call. When decisions take months, plan for fewer, deeper first customers and expect a longer gap before the first payment, which matters for{" "}<TermLink href="/business-entrepreneurship-basics/what-cash-flow-actually-means-for-a-small-business">cash flow</TermLink>.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Working out what outreach costs (applied)</h3>
      <div className="prose-p">Sam runs a home-baking business and tests two channels for a month. A booth at a weekend farmers market costs $240 in fees for 4 weekends plus 24 hours of time, and brings 30 new customers. Social ads cost $300 and 3 hours, and bring 6 customers. Valuing time at $20 an hour, the market cost $240 + $480 = $720, or $24 per customer. The ads cost $300 + $60 = $360, or $60 per customer. That&apos;s the <strong>customer acquisition cost</strong>. The market wins for now, and the comparison only exists because Sam measured both. Compare that figure with what a customer spends over time, and with your{" "}<TermLink href="/business-entrepreneurship-basics/how-to-actually-price-a-product-or-service">pricing</TermLink>, to see if a channel is worth keeping. Whether a venture like Sam&apos;s stays a side hustle depends less on revenue than on whether it can earn beyond her own hours; see <TermLink href="/business-entrepreneurship-basics/what-makes-a-side-hustle-different-from-a-real-business">what makes a side hustle different from a real business</TermLink>.</div>

      <QuickCheck
        question="Your funnel is 100 messages → 4 replies → 3 calls → 2 sales. Where should you focus first?"
        options={[
          { text: "Getting more replies: the message, the list, or how warm the contacts are", correct: true, explanation: "Correct. Closing 2 of 3 calls is strong. Only 4% replying is where most people are lost." },
          { text: "Improving your sales calls", correct: false, explanation: "Your calls already convert well. The biggest drop is earlier." },
          { text: "Lowering your price", correct: false, explanation: "People who hear your price are mostly buying. Price isn't the bottleneck here." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The first-customer loop"
        type="flow"
        svgSrc="/diagrams/business-entrepreneurship-basics-how-to-actually-find-your-first-customers-flow.svg"
        altText="A five-step flow. 1, narrow: define a customer you can list by name. 2, list: write down 50 to 100 real people, starting with your warm network and the places they gather. 3, reach out one to one. 4, converse: learn the problem and offer a small pilot or first order. 5, deliver and ask for a referral, which loops back into the list. A side panel shows an illustrative funnel: 80 contacts, 18 replies, 9 calls, 3 customers, with the note to measure each step's conversion rate."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Spending the first budget on ads before anyone has bought.", fix: "Sell to the first handful of customers by hand. You'll learn which message and which customer convert, so later ad spending is aimed." },
          { mistake: "Targeting 'everyone who might need this.'", fix: "Pick a group narrow enough to list by name. You can widen it once you have proof." },
          { mistake: "Sending one template to a bought email list.", fix: "Write short personal messages to people you chose. Bought lists bring low replies and CAN-SPAM risk." },
          { mistake: "Counting compliments as demand.", fix: "Ask for a commitment: a paid pilot, a deposit, a signed letter of intent or at least a scheduled next step." },
        ]}
      />
      <MisconceptionCallout
        myth="If the product is good enough, customers will find it."
        reality={<p>Nobody can find a product they&apos;ve never heard of, from a company with no reviews and no search history. Early demand is created by the founder&apos;s outreach. Paul Graham&apos;s widely read essay &quot;Do Things that Don&apos;t Scale&quot; makes the same point about startups: the founders of companies that later grew huge typically recruited their first users by hand.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Write a one-sentence description of your ideal customer that you could use to search for real names.",
          "List 50 specific people or businesses, starting with your own network and introductions.",
          "Find two places your customers already gather, such as a trade association, local group or online community, and join them.",
          "Set up a simple spreadsheet tracking messages, replies, calls and sales so you can see your conversion rates.",
          "Read the FTC's CAN-SPAM guide before sending any commercial email.",
          "Book a free session with a SCORE mentor or your local Small Business Development Center to review your outreach plan.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do I find my first customers with no money?", answer: "Use your time instead of a budget: list specific people who fit your ideal customer, contact them personally through your network and the groups they belong to, and offer a small first order or pilot. Most first customers come this way." },
          { question: "How many people should I contact to get my first customer?", answer: "It depends on your industry and how warm the contacts are. Start with 50 to 100 specific people, track replies, calls and sales, and use your own conversion rates to plan the next batch." },
          { question: "Is it legal to cold email potential customers?", answer: "In the US, commercial email is allowed if it follows the FTC's CAN-SPAM rules, including honest subject lines, a valid postal address and a working opt-out. Texts and automated calls have stricter rules, and other countries' laws differ." },
          { question: "Should I give my product away for free to get first customers?", answer: "A small discount or a limited pilot is often better than free, because payment shows real commitment and gives you a truer signal of demand." },
          { question: "When should I start paying for ads?", answer: "Usually after you've won customers by hand and know which message and customer type convert. Then ads amplify something proven instead of testing everything at once." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
