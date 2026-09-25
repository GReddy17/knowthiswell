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
  title: "What Supply and Demand Actually Predicts",
  category: "economics",
  order: 4,
  subtopic: "everyday-economics",
  tags: ["supply and demand", "equilibrium price", "shortage", "surplus", "price ceiling"],
  date: "2026-09-25",
  updated: "2026-09-25",
  lastReviewed: "2026-09-25",
  excerpt: "Supply and demand is best at predicting the direction prices and quantities move after a change, like a shortage pushing prices up, not exact numbers. It also predicts what happens when prices are held down by rule: persistent shortages.",
  summary: "The supply and demand model, as taught in OpenStax's Principles of Economics, predicts how the price and quantity of a good change when conditions change: an increase in demand (from higher incomes, a change in tastes, or a heat wave for fans) creates a shortage at the old price, which pushes the price up until quantity demanded and quantity supplied meet at a new equilibrium, while an increase in supply pushes price down. The model distinguishes a movement along a curve, caused by the good's own price changing, from a shift of the whole curve, caused by other factors. It also predicts that a price ceiling set below equilibrium produces a persistent shortage and a price floor above it produces a surplus. Its strength is predicting the direction of change; the size depends on elasticity, which must be measured, and real markets add delays, market power, and regulation that the basic model leaves out.",
  sources: [
    { label: "OpenStax, Principles of Economics 3e — 3.1 Demand, Supply, and Equilibrium in Markets for Goods and Services", url: "https://openstax.org/books/principles-economics-3e/pages/3-1-demand-supply-and-equilibrium-in-markets-for-goods-and-services" },
    { label: "OpenStax, Principles of Economics 3e — 3.2 Shifts in Demand and Supply for Goods and Services", url: "https://openstax.org/books/principles-economics-3e/pages/3-2-shifts-in-demand-and-supply-for-goods-and-services" },
    { label: "OpenStax, Principles of Economics 3e — 3.4 Price Ceilings and Price Floors", url: "https://openstax.org/books/principles-economics-3e/pages/3-4-price-ceilings-and-price-floors" },
  ],
  seeAlso: [
    "economics/how-inflation-actually-erodes-purchasing-power",
    "economics/how-interest-rates-actually-get-set",
    "economics/what-gdp-actually-measures",
    "economics/what-fiscal-policy-actually-means-vs-monetary-policy",
  ],
  glossary: [
    { term: "Demand", definition: "The relationship between a good's price and the quantity buyers are willing and able to buy. At lower prices people generally want more." },
    { term: "Supply", definition: "The relationship between a good's price and the quantity sellers are willing to offer. At higher prices sellers generally offer more." },
    { term: "Equilibrium", definition: "The price at which quantity demanded equals quantity supplied, so there's no shortage or surplus pushing the price to change." },
    { term: "Shortage", definition: "A situation where buyers want more than sellers offer at the current price. It tends to push the price up." },
    { term: "Surplus", definition: "A situation where sellers offer more than buyers want at the current price. It tends to push the price down." },
    { term: "Price elasticity", definition: "How strongly quantity demanded or supplied responds to a change in price. It determines how big a price change a shift causes." },
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
  {"question": "Demand for a good rises and supply doesn't change. What does the model predict?", "difficulty": "easy", "options": [{"text": "Price and quantity sold both rise", "correct": true, "explanation": "A shortage at the old price bids the price up, and sellers supply more."}, {"text": "Price falls", "correct": false, "explanation": "More demand pushes price up, not down."}, {"text": "Nothing changes", "correct": false, "explanation": "A shift in demand moves the equilibrium."}]},
  {"question": "A bumper harvest greatly increases the supply of apples. What happens?", "difficulty": "easy", "options": [{"text": "Apple prices fall and more apples are sold", "correct": true, "explanation": "More supply creates a surplus at the old price, which pushes the price down."}, {"text": "Apple prices rise", "correct": false, "explanation": "More supply lowers price."}, {"text": "Fewer apples are sold", "correct": false, "explanation": "At the lower price, buyers purchase more."}]},
  {"question": "What is a shortage in economics?", "difficulty": "easy", "options": [{"text": "Quantity demanded is greater than quantity supplied at the current price", "correct": true, "explanation": "It's a gap at a particular price, not an absolute lack of goods."}, {"text": "A good that doesn't exist anywhere", "correct": false, "explanation": "Shortages are about price, not total absence."}, {"text": "A price that is too high", "correct": false, "explanation": "High prices tend to cause surpluses."}]},
  {"question": "A good's own price rises and people buy less. Is that a shift in demand?", "difficulty": "medium", "options": [{"text": "No, it's a movement along the demand curve", "correct": true, "explanation": "OpenStax: only factors other than the good's own price shift the curve."}, {"text": "Yes, any change in quantity is a shift", "correct": false, "explanation": "That's the most common mix-up in this topic."}, {"text": "Yes, but only if supply also changes", "correct": false, "explanation": "Supply changes don't define demand shifts."}]},
  {"question": "What does the model predict if rent is capped by law well below the equilibrium price?", "difficulty": "medium", "options": [{"text": "A persistent shortage of apartments", "correct": true, "explanation": "At the capped price more people want apartments than landlords offer."}, {"text": "A surplus of empty apartments", "correct": false, "explanation": "That's the effect of a price floor above equilibrium."}, {"text": "No effect at all", "correct": false, "explanation": "A binding ceiling changes behavior on both sides."}]},
  {"question": "Which of these would shift the demand curve for umbrellas?", "difficulty": "medium", "options": [{"text": "A forecast for a very rainy month", "correct": true, "explanation": "Expectations and conditions shift demand."}, {"text": "A change in the price of umbrellas", "correct": false, "explanation": "That's a movement along the curve."}, {"text": "Nothing can shift demand", "correct": false, "explanation": "Income, tastes, expectations and related goods all can."}]},
  {"question": "Why can't the basic model tell you exactly how much a price will rise?", "difficulty": "hard", "options": [{"text": "The size depends on elasticity, which has to be measured for each market", "correct": true, "explanation": "The direction is predictable; the magnitude needs data."}, {"text": "Because prices are random", "correct": false, "explanation": "They respond systematically, just not with a fixed size."}, {"text": "Because the model only works for gold", "correct": false, "explanation": "It applies broadly to competitive markets."}]},
  {"question": "Both demand and supply for a good increase at the same time. What can the model say for sure?", "difficulty": "hard", "options": [{"text": "Quantity rises, but price could go either way", "correct": true, "explanation": "Demand pushes price up, supply pushes it down; the net depends on which shift is bigger."}, {"text": "Price definitely rises", "correct": false, "explanation": "Not without knowing the relative sizes."}, {"text": "Quantity definitely falls", "correct": false, "explanation": "Both shifts push quantity up."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Supply and demand predicts which way price and quantity move when something changes: more demand means higher prices, more supply means lower prices.",
          "The model is strong on direction and weak on size. How much a price moves depends on elasticity, which has to be measured.",
          "It also predicts the side effects of fixing prices by rule: a cap below the market price creates lasting shortages, and a floor above it creates surpluses.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Every market has buyers who want more of something when it&apos;s cheap and sellers who offer more when it&apos;s expensive. Somewhere in the middle is a price where the amount people want matches the amount on offer. That&apos;s where prices tend to settle. The useful part is what happens when something changes. If a heat wave hits and everyone wants fans, stores run out at the old price, so prices go up, some people decide to wait, and suppliers ship more fans in. If a new factory floods the market with fans, the opposite happens. The model won&apos;t tell you that fans will cost exactly $43 next week. It tells you which way things will move and why.</div>}
        detailed={<div className="prose-p">OpenStax&apos;s Principles of Economics defines demand and supply as schedules relating price to quantity: quantity demanded falls as price rises, quantity supplied rises as price rises, and equilibrium is where they&apos;re equal. The model&apos;s predictive power comes from comparative statics: change one condition and trace the new equilibrium. Section 3.2 separates two things that people often blur. A change in the good&apos;s own price causes a <em>movement along</em> a curve. A change in anything else (income, tastes, prices of related goods, expectations, population for demand; input costs, technology, taxes, number of sellers for supply) <em>shifts</em> the whole curve. An increase in demand creates a shortage at the old price, pushing price and quantity up; an increase in supply creates a surplus, pushing price down and quantity up. When both shift at once, the direction of one variable becomes ambiguous without knowing their relative sizes. Section 3.4 extends this to policy: a binding price ceiling below equilibrium produces a persistent shortage, and a binding floor above it a persistent surplus. How far prices move is governed by elasticity, which is why the same shift that barely moves the price of salt can swing the price of gasoline, and why this model sits under topics like <TermLink href="/economics/how-inflation-actually-erodes-purchasing-power">inflation</TermLink> and <TermLink href="/economics/how-interest-rates-actually-get-set">interest rates</TermLink>, the price of borrowing money.</div>}
      />
      <FootnoteAside>The model assumes a competitive market with many buyers and sellers. When one firm dominates, when prices are sticky because of contracts or menus that are costly to reprint, or when buyers can&apos;t easily see prices, real markets move more slowly or differently than the simple diagram suggests.</FootnoteAside>

      <p>Scale the same logic up to a whole economy and you get aggregate demand and supply, which is how economists think about <TermLink href="/economics/what-gdp-actually-measures">GDP</TermLink> and the tools covered in <TermLink href="/economics/what-fiscal-policy-actually-means-vs-monetary-policy">fiscal vs. monetary policy</TermLink>.</p>

      <QuickCheck
        question="Coffee's price rises because of a poor harvest in Brazil. According to the model, what happens to tea?"
        options={[
          { text: "Demand for tea rises, since some coffee drinkers switch, pushing tea's price up", correct: true, explanation: "Correct. Tea is a substitute. A higher coffee price shifts tea's demand curve to the right." },
          { text: "Tea's supply rises because coffee's supply fell", correct: false, explanation: "The harvest affects coffee growers, not tea suppliers. The effect on tea works through demand." },
          { text: "Nothing, since coffee and tea are separate markets", correct: false, explanation: "Prices of related goods are one of the main factors that shift demand." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A heat wave and fans (baseline case)</h3>
      <div className="prose-p">At $40, a city&apos;s stores sell 1,000 fans a week, and that&apos;s an equilibrium. A heat wave raises demand so that at $40, people now want 1,800 fans. Stores sell out: a shortage of 800. Retailers raise prices; at $55, some shoppers decide to cope with open windows, and suppliers rush more stock in. A new balance forms at, say, $52 and 1,400 fans. The model got the direction of both moves right. The exact $52 and 1,400 came from assumed numbers, not from the model itself.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A cheaper way to make TVs (supply shift)</h3>
      <div className="prose-p">A new manufacturing process cuts the cost of making large TVs. At the old price, makers now want to sell far more than buyers want: a surplus. Prices fall until buyers take the extra sets. The prediction is lower price and higher quantity, which matches the long-run pattern of electronics getting cheaper as production technology improves.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A price cap on a scarce item (policy case)</h3>
      <div className="prose-p">After a storm, a local rule caps generator prices at the pre-storm $600, while the market price would have jumped to $900. At $600, many more people want generators than stores have, so shelves empty in hours and the shortage lasts. The model predicts this, and it predicts the side effects: long lines, resale at higher prices, and less incentive for sellers to bring more in from other regions. Whether a cap is worth those costs is a fairness judgment the model can&apos;t make, but it tells you clearly what the trade-off is.</div>

      <QuickCheck
        question="In Example 3, what does the model predict as the main result of the $600 cap?"
        options={[
          { text: "A persistent shortage, because quantity demanded exceeds quantity supplied at the capped price", correct: true, explanation: "Correct. A binding ceiling below equilibrium keeps the gap from closing through price." },
          { text: "A surplus of generators", correct: false, explanation: "Surpluses come from prices held above equilibrium." },
          { text: "Lower demand for generators", correct: false, explanation: "The lower price increases the quantity people want." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="From a demand shift to a new equilibrium"
        type="flow"
        svgSrc="/diagrams/economics-what-supply-and-demand-actually-predicts-flow.svg"
        altText="A flow diagram: a shift hits, such as demand rising for fans during a heat wave; at the old price buyers want more than sellers offer, a shortage; price rises; some buyers cut back while sellers make or ship more; a new equilibrium forms at a higher price and higher quantity."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Saying 'the price rose, so demand fell' as if that were a shift in demand.", fix: "A price change causes a movement along the curve. Demand shifts only when something other than the good's own price changes." },
          { mistake: "Expecting the model to give exact future prices.", fix: "Use it for direction and reasoning. Magnitude needs data on elasticity for that specific market." },
          { mistake: "Assuming shortages always mean there isn't enough of something in total.", fix: "In economics, a shortage is a gap at a particular price. Often it's caused by a price being held below equilibrium." },
        ]}
      />
      <MisconceptionCallout
        myth="Supply and demand is just a classroom theory that doesn't predict anything in the real world."
        reality={<p>It&apos;s among the best-supported predictions in economics when used for what it does: the direction of change after a shift, and the effects of price controls. OpenStax documents examples from gasoline to rent control. What it doesn&apos;t do on its own is give exact numbers or capture every real-world friction, like market power or sticky prices. Those limits are why economists measure elasticities and build larger models on top of it, not a reason to discard it.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time a price jumps in the news, ask: did demand shift, supply shift, or both? Name the specific cause.",
          "Practice separating 'movement along' from 'shift of' using a product you buy often.",
          "Read OpenStax chapter 3 (free online) for the diagrams behind each case in this post.",
          "Follow the same logic into our explainers on inflation and interest rates.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does supply and demand predict?", answer: "How the price and quantity of a good change when conditions change: higher demand raises price and quantity, higher supply lowers price and raises quantity, and price controls create shortages or surpluses." },
          { question: "What is the law of supply and demand in simple terms?", answer: "Buyers want more when prices are low, sellers offer more when prices are high, and prices tend to move toward the level where the two amounts match." },
          { question: "What causes a shift in demand?", answer: "Changes other than the good's own price, such as income, tastes, expectations, population, or the prices of substitutes and complements." },
          { question: "Why do price ceilings cause shortages?", answer: "If the legal maximum is below the market price, more people want the good at that price than sellers are willing to supply, and the price can't rise to close the gap." },
          { question: "Does supply and demand always work?", answer: "It works best in competitive markets. Market power, sticky prices, and regulation can slow or change the response, and the model predicts direction better than exact size." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
