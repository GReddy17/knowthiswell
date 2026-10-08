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
  title: "How to Actually Negotiate a Better Price",
  category: "life-skills-etiquette",
  order: 5,
  subtopic: "everyday-communication",
  tags: ["negotiation", "batna", "anchoring", "haggling", "asking for a discount"],
  date: "2026-09-26",
  updated: "2026-09-26",
  youtubeShort: false, youtubeLong: false,
  seoScore: 73, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-09-26",
  excerpt: "Good price negotiation is mostly preparation: know your walk-away option, know the real market price, and ask politely for something specific. Aggression isn't what gets the discount; a credible alternative is.",
  summary: "Negotiating a better price depends less on bargaining tactics than on preparation. Negotiation research from Harvard's Program on Negotiation centers on the BATNA, your best alternative to a negotiated agreement: the better your fallback (another seller, waiting, doing without), the more leverage you have. Tversky and Kahneman's 1974 work on anchoring shows that the first number mentioned pulls later estimates toward it, which is why researching the market price and naming a specific, justified number early matters. Consumer agencies such as the FTC note that prices on items like used cars are often negotiable, and some prices people assume are fixed have formal routes to reduction: nonprofit U.S. hospitals, for example, must maintain written financial assistance policies under IRS rules. Courtesy matters too. A calm, specific request that leaves the other side a way to say yes tends to work better than pressure.",
  sources: [
    { label: "Program on Negotiation, Harvard Law School — BATNA articles", url: "https://www.pon.harvard.edu/tag/batna/" },
    { label: "Tversky & Kahneman (1974) — Judgment under Uncertainty: Heuristics and Biases, Science", url: "https://doi.org/10.1126/science.185.4157.1124" },
    { label: "FTC Consumer Advice — Buying a Used Car From a Dealer", url: "https://consumer.ftc.gov/articles/buying-used-car-dealer" },
    { label: "IRS — Requirements for 501(c)(3) Hospitals Under the Affordable Care Act, Section 501(r)", url: "https://www.irs.gov/charities-non-profits/charitable-organizations/requirements-for-501c3-hospitals-under-the-affordable-care-act-section-501r" },
  ],
  seeAlso: [
    "business-entrepreneurship-basics/how-profit-margin-actually-gets-calculated",
    "life-skills-etiquette/how-to-actually-disagree-without-being-disagreeable",
    "life-skills-etiquette/how-to-actually-have-a-difficult-conversation",
    "life-skills-etiquette/how-to-actually-build-rapport-quickly",
    "life-skills-etiquette/what-active-listening-actually-looks-like-in-practice",
    "career-study-skills/how-to-ask-for-a-raise-effectively",
    "psychology-human-behavior/how-cognitive-load-actually-affects-decision-making",
  ],
  glossary: [
    { term: "BATNA", definition: "Best Alternative To a Negotiated Agreement: what you'll do if this deal falls through. A strong BATNA is the main source of bargaining power." },
    { term: "Reservation price", definition: "Your walk-away number: the most you'll pay as a buyer, or the least you'll accept as a seller." },
    { term: "Anchoring", definition: "The tendency for the first number mentioned to pull later judgments toward it, even when people know it's arbitrary." },
    { term: "ZOPA", definition: "Zone of possible agreement: the range between the buyer's highest acceptable price and the seller's lowest. A deal is possible only if it exists." },
    { term: "Financial assistance policy", definition: "A written policy that nonprofit U.S. hospitals must maintain under IRS section 501(r), describing who qualifies for free or discounted care." },
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
  {"question": "What does BATNA stand for?", "difficulty": "easy", "options": [{"text": "Best Alternative To a Negotiated Agreement", "correct": true, "explanation": "It's what you'll do if this deal doesn't happen."}, {"text": "Bargain At The Normal Asking price", "correct": false, "explanation": "Not a real term."}, {"text": "Buyer's Absolute Top Number Allowed", "correct": false, "explanation": "That's closer to a reservation price, but not the term."}]},
  {"question": "Why does a strong BATNA give you leverage?", "difficulty": "medium", "options": [{"text": "You can genuinely walk away, so you don't have to accept a bad offer", "correct": true, "explanation": "A credible alternative is the core source of power in the Harvard PON framework."}, {"text": "It lets you speak more loudly", "correct": false, "explanation": "Volume isn't leverage."}, {"text": "It forces the seller to cut the price by law", "correct": false, "explanation": "No law requires a discount."}]},
  {"question": "What does anchoring research suggest about the first number named?", "difficulty": "medium", "options": [{"text": "It pulls the final agreement toward it", "correct": true, "explanation": "Tversky and Kahneman showed first numbers bias later estimates, even arbitrary ones."}, {"text": "It has no effect on the outcome", "correct": false, "explanation": "Anchors have a well-documented effect."}, {"text": "It always makes the other side angry", "correct": false, "explanation": "A reasonable, justified anchor usually doesn't."}]},
  {"question": "A seller asks 'What's your budget?' before you've researched prices. What's a good response?", "difficulty": "hard", "options": [{"text": "Ask what they'd charge for your specific need, or give a researched figure later", "correct": true, "explanation": "Naming a number before you know the market can anchor you too high."}, {"text": "Give the absolute maximum you could pay", "correct": false, "explanation": "That anchors the deal at your ceiling."}, {"text": "Refuse to talk to them", "correct": false, "explanation": "There's no need to end the conversation."}]},
  {"question": "Where is asking for a lower price least likely to work?", "difficulty": "easy", "options": [{"text": "A cash register at a chain grocery store", "correct": true, "explanation": "Clerks usually have no authority to change posted prices."}, {"text": "A used car dealership", "correct": false, "explanation": "The FTC's used-car guide describes negotiating price, financing and warranty."}, {"text": "A hospital bill you can't afford", "correct": false, "explanation": "Nonprofit hospitals must have financial assistance policies."}]},
  {"question": "Which request is most likely to get a discount?", "difficulty": "medium", "options": [{"text": "'I've seen it for $420 elsewhere. Can you do $425 if I buy today?'", "correct": true, "explanation": "Specific, justified, and gives the seller a reason to say yes."}, {"text": "'That price is a rip-off.'", "correct": false, "explanation": "Insults make people defensive."}, {"text": "'Can you do better?' and then walking away immediately", "correct": false, "explanation": "Vague and gives no room to respond."}]},
  {"question": "What happens if there's no ZOPA?", "difficulty": "hard", "options": [{"text": "No deal is possible, because the buyer's maximum is below the seller's minimum", "correct": true, "explanation": "Then the right move is to use your BATNA."}, {"text": "The seller must accept the buyer's price", "correct": false, "explanation": "Nobody is obligated to accept a price below their minimum."}, {"text": "The deal happens at the average", "correct": false, "explanation": "Without overlap, no price works for both."}]},
  {"question": "Under IRS section 501(r), what must nonprofit U.S. hospitals have?", "difficulty": "hard", "options": [{"text": "A written financial assistance policy", "correct": true, "explanation": "It explains who qualifies for free or discounted care and how to apply."}, {"text": "Fixed prices that can never change", "correct": false, "explanation": "Assistance policies exist precisely to reduce charges for eligible patients."}, {"text": "A requirement to haggle with every patient", "correct": false, "explanation": "No such requirement."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Your bargaining power comes from your alternative, called a BATNA: another seller, waiting, or doing without. Improve it before you start talking.",
          "Research the real market price and name a specific, justified number. The first number mentioned tends to anchor the deal.",
          "Polite and specific beats pushy. Give the other person a reason, and a way, to say yes.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Picture two shoppers asking for a discount on the same sofa. The first says, &quot;Can you do better on this?&quot; and has no idea what it costs elsewhere. The second says, &quot;The same model is $780 at another store. If you can do $800 with free delivery, I&apos;ll buy it now.&quot; The second shopper isn&apos;t more aggressive; they&apos;re more prepared. They know the real price, they have somewhere else to go, and they&apos;ve made it easy for the salesperson to say yes. That&apos;s most of negotiation: homework first, then a calm, specific ask.</div>}
        detailed={<div className="prose-p">Harvard&apos;s Program on Negotiation frames leverage around the <strong>BATNA</strong>, your best alternative if no agreement is reached. Your BATNA sets your <strong>reservation price</strong> (walk-away point), and the overlap between your reservation price and the seller&apos;s is the <strong>ZOPA</strong>. If there&apos;s no overlap, no skill will produce a deal; if there is, negotiation decides where in it you land. Two mechanics move you within the zone. <strong>Anchoring</strong>: Tversky and Kahneman (1974) showed that people&apos;s numeric estimates are pulled toward an initial value, even one they know is arbitrary. A researched first offer anchors the discussion; letting the other side anchor first, without your own data, can pull you toward their number. <strong>Face and reciprocity</strong>: people concede more readily when the request is respectful, reasoned and offers something back (paying now, buying two, flexible timing). This is where <TermLink href="/life-skills-etiquette/how-to-actually-build-rapport-quickly">rapport</TermLink> and <TermLink href="/life-skills-etiquette/what-active-listening-actually-looks-like-in-practice">active listening</TermLink> earn their place. The edge case: many &quot;fixed&quot; prices have formal flexibility. The FTCThe FTC notes that used-car prices are generally negotiable, andapos;s used-car guide treats the price, the financing and even the warranty as things you can negotiate, and nonprofit hospitals must publish financial assistance policies under IRS section 501(r), so asking the billing office is a legitimate process, not haggling. On the other side of the counter, the seller&apos;s room to move comes from their <TermLink href="/business-entrepreneurship-basics/how-profit-margin-actually-gets-calculated">profit margin</TermLink>, and if you reach a real impasse, <TermLink href="/life-skills-etiquette/how-to-actually-disagree-without-being-disagreeable">disagreeing without being disagreeable</TermLink> keeps the door open.</div>}
      />
      <FootnoteAside>Norms around bargaining differ by country, culture and setting. In some markets, haggling is expected; in others it&apos;s awkward. Where it isn&apos;t the norm, asking about promotions, price matching or bundled extras is often the polite version of the same move.</FootnoteAside>

      <p>If the conversation feels tense, the approach in <TermLink href="/life-skills-etiquette/how-to-actually-have-a-difficult-conversation">how to have a difficult conversation</TermLink> applies: state the facts, say what you want, and listen to their side.</p>

      <QuickCheck
        question="Before visiting a dealership, you get a written offer from another dealer for the same car. What have you improved?"
        options={[
          { text: "Your BATNA, since you now have a real alternative to walk away to", correct: true, explanation: "Correct. A concrete alternative is what lets you turn down a bad offer." },
          { text: "Your anchoring bias", correct: false, explanation: "Anchoring is about first numbers, not alternatives." },
          { text: "Nothing, since dealers don't care about other offers", correct: false, explanation: "A credible competing offer is one of the strongest things a buyer can bring." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A big-ticket appliance (baseline case)</h3>
      <div className="prose-p">A refrigerator is listed at $1,299. Online you find the same model at $1,190 from another retailer, plus $80 delivery. Your BATNA is $1,270 all in. At the store you say: &quot;I like this one. The same model is $1,190 at another store. If you can match that and include delivery, I&apos;ll buy it today.&quot; The manager meets you at $1,210 with free delivery. You saved $89 against list, and even if they had said no, you had a better option waiting.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: When there&apos;s no deal to be had (edge case)</h3>
      <div className="prose-p">You&apos;re selling a used bike and won&apos;t take less than $300, because a shop offered you $300 on trade-in. A buyer&apos;s maximum is $250. There&apos;s no zone of agreement, so no phrasing will close the gap. The right move is to say so kindly: &quot;Thanks. I have a $300 offer already, so I&apos;ll pass.&quot; Knowing your BATNA stops you from accepting a worse deal just because you&apos;re already in the conversation.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A medical bill (real-world use)</h3>
      <div className="prose-p">A patient receives a $4,800 bill from a nonprofit hospital after an emergency visit. Instead of just paying or ignoring it, they call billing and ask two things: &quot;Can you send me your financial assistance policy?&quot; and &quot;Is there a discount for paying in full or a payment plan?&quot; Because nonprofit hospitals must maintain a written financial assistance policy under IRS rules, they learn they qualify for a partial discount based on income. This isn&apos;t aggressive haggling. It&apos;s asking the right, specific question.</div>

      <QuickCheck
        question="In Example 2, why can't the seller reach a deal with that buyer?"
        options={[
          { text: "The buyer's maximum ($250) is below the seller's minimum ($300), so there's no ZOPA", correct: true, explanation: "Correct. Without overlap, the right move is to use the better alternative." },
          { text: "The seller wasn't polite enough", correct: false, explanation: "Politeness can't create overlap that doesn't exist." },
          { text: "The seller should always accept the first offer", correct: false, explanation: "Not when a better alternative exists." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="A simple price-negotiation sequence"
        type="flow"
        svgSrc="/diagrams/life-skills-etiquette-how-to-actually-negotiate-a-better-price-flow.svg"
        altText="A five-step flow. 1: Research the real market price. 2: Know your alternative and set your walk-away price. 3: Ask politely with a specific, justified number. 4: Listen, then trade something back such as paying today or flexible timing. 5: Agree, or walk away to your alternative."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Negotiating without knowing the market price.", fix: "Check two or three other sources first. A specific, real number is your strongest opening." },
          { mistake: "Revealing your maximum budget at the start.", fix: "Ask for their best price on your specific need, or open with your researched figure instead." },
          { mistake: "Being rude to signal toughness.", fix: "Stay friendly and specific. People make concessions to people they want to help." },
        ]}
      />
      <MisconceptionCallout
        myth="Negotiating is about being tough and refusing to budge until the other side caves."
        reality={<p>Research on negotiation points the other way. Leverage comes from preparation (a real alternative and a researched number), not from pressure. Hardball tactics often end talks or make the other side dig in. The people who get better prices tend to be calm, specific, and willing to walk away, and they give the other side a reason to agree, like paying today or buying more than one item.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before any purchase over a few hundred dollars, check the price at two or three other sellers.",
          "Write down your walk-away price and your alternative before the conversation.",
          "Open with a specific number and the reason for it.",
          "Offer something in return: paying today, buying more, flexible delivery.",
          "For large medical bills, ask for the hospital's financial assistance policy and an itemized bill.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do you politely ask for a better price?", answer: "Be specific and give a reason: 'I've seen this for $X elsewhere. Could you do $Y if I buy today?' A friendly, concrete request gives the other person an easy way to say yes." },
          { question: "What is a BATNA in negotiation?", answer: "Your best alternative to a negotiated agreement: what you'll do if this deal doesn't happen. The better it is, the more easily you can walk away from a bad offer." },
          { question: "Should you make the first offer when negotiating?", answer: "If you've researched the market, often yes, because the first number tends to anchor the discussion. If you haven't, get information first." },
          { question: "What prices can you actually negotiate?", answer: "Cars, big appliances, furniture, services, rent, many bills and some medical bills. Posted prices at chain stores are rarely negotiable at the register, though price matching and promotions sometimes are." },
          { question: "Is it rude to negotiate prices?", answer: "It depends on the setting and culture. Asking politely, once, with a reason, is widely acceptable. Repeated pressure or insulting the product is what comes across badly." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
