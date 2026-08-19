import React from 'react';
import { PostMeta, PostFrontmatter } from '@/types/post';
import {
  KeyTakeaways,
  ModeToggle,
  FootnoteAside,
  QuickCheck,
  DiagramBlock,
  MistakeList,
  MisconceptionCallout,
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Probability Basics: How to Calculate the Chance of an Event",
  category: "math-numbers",
  order: 30,
  subtopic: "statistics-and-data",
  tags: [
    "probability",
    "probability basics",
    "chance and odds",
    "independent events",
    "gambler's fallacy",
    "statistics basics",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How to calculate the probability of an event, why independent events like coin flips have no memory, and why a 30% rain forecast doesn't mean it will rain 30% of the day.",
  summary: "Probability is a number from 0 to 1 (or 0% to 100%) that measures how likely an event is, calculated as the number of favorable outcomes divided by the total number of possible outcomes.",
  sources: [
    { label: "Khan Academy — Probability library", url: "https://www.khanacademy.org/math/statistics-probability/probability-library" },
    { label: "NIST/SEMATECH e-Handbook of Statistical Methods", url: "https://www.itl.nist.gov/div898/handbook/" },
    { label: "Encyclopaedia Britannica — Probability theory", url: "https://www.britannica.com/science/probability-theory" },
    { label: "National Weather Service — Understanding the 'probability of precipitation'", url: "https://www.weather.gov/ffc/pop" },
  ],
  seeAlso: [
    "math-numbers/reading-graphs-and-charts",
    "math-numbers/data-collection-and-sampling-basics",
    "math-numbers/ratios-and-proportions",
    "math-numbers/understanding-percentages-in-real-life-discounts-tax-tips",
  ],
  glossary: [
    { term: "Probability", definition: "A number from 0 to 1 (or 0% to 100%) measuring how likely an event is, calculated as favorable outcomes divided by total possible outcomes." },
    { term: "Sample space", definition: "The complete set of all possible outcomes of an event, such as {1,2,3,4,5,6} for a single die roll." },
    { term: "Independent events", definition: "Events where the outcome of one has no effect on the probability of the other, such as separate coin flips or dice rolls." },
    { term: "Dependent events", definition: "Events where the outcome of one changes the probability of the other, such as drawing cards from a deck without replacing them." },
    { term: "Theoretical probability", definition: "The probability calculated from the structure of a situation itself, like 1/6 for rolling a specific number on a fair die, before any trials are run." },
    { term: "Experimental probability", definition: "The probability observed from actually running trials and counting results, which approaches theoretical probability as the number of trials grows (the law of large numbers)." },
    { term: "Gambler's fallacy", definition: "The mistaken belief that a random, independent process 'owes' a different outcome after a streak, such as thinking tails is 'due' after several heads in a row." },
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
          "Probability is favorable outcomes divided by total possible outcomes — a number between 0 (impossible) and 1 (certain), often written as a percentage.",
          "Independent events, like separate coin flips or dice rolls, have no memory of past outcomes — five heads in a row doesn't make tails any more likely on the sixth flip.",
          "The probabilities of every possible outcome in a sample space always add up to exactly 1 (100%), which is a fast way to sanity-check a probability calculation.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/math-numbers/probability-basics">Probability</TermLink> measures how likely something is to happen, as a number between 0 (will never happen) and 1 (will definitely happen) — or the same idea written as a percentage, 0% to 100%. A fair coin has a 1-in-2 chance of landing heads, or 50%. A standard six-sided die has a 1-in-6 chance of landing on any specific number, or about 16.7%. The basic formula is simple: count the outcomes you want, divide by the total number of possible outcomes.</div>}
        detailed={<div className="prose-p">Formally, probability of an event = (number of favorable outcomes) ÷ (total outcomes in the <TermLink href="/math-numbers/probability-basics">sample space</TermLink>). Events are <TermLink href="/math-numbers/probability-basics">independent</TermLink> when one outcome doesn&apos;t change the odds of another — separate coin flips and dice rolls are independent, so for two independent events the combined probability is the product: P(A and B) = P(A) × P(B). Events are <TermLink href="/math-numbers/probability-basics">dependent</TermLink> when an earlier outcome changes what&apos;s possible next, most commonly when drawing items without replacement (each card removed from a deck changes the odds for the next draw). A distinction that matters in practice: <TermLink href="/math-numbers/probability-basics">theoretical probability</TermLink> is calculated from the structure of the situation itself (1/6 for a die, before any rolls happen), while <TermLink href="/math-numbers/probability-basics">experimental probability</TermLink> comes from actually running trials and counting results. The two converge as the number of trials grows — a principle called the law of large numbers — which is exactly why a fair coin flipped only 4 times might land heads 3 times (75%), but flipped 10,000 times will land close to 50% heads.</div>}
      />
      <FootnoteAside>The &quot;birthday problem&quot; is one of probability&apos;s most famous surprises: in a room of just 23 randomly chosen people, there&apos;s better than a 50% chance that two of them share the same birthday — far fewer people than most guess, because the comparison is between every possible pair in the room, not just one person against everyone else.</FootnoteAside>

      <p>
      That gap between what feels intuitively true and what the math actually says is where probability trips people up most — and nowhere more than the belief that a random process can somehow &quot;remember&quot; what it did last.
      </p>

      <QuickCheck
        question="A fair coin has landed on heads 5 times in a row. What is the probability it lands on heads on the 6th flip?"
        options={[
          { text: "Less than 50%, since tails is 'due' after such a long heads streak", correct: false, explanation: "This is the gambler's fallacy. A coin has no memory of previous flips — each flip is an independent event, so the past streak has zero effect on the next flip's odds." },
          { text: "Still 50%, because each coin flip is an independent event unaffected by previous flips", correct: true, explanation: "Correct. Independent events don't influence each other. The coin doesn't know it landed heads 5 times — the 6th flip is exactly as fair as the 1st, at 50/50." },
          { text: "Greater than 50%, since heads is clearly the coin's tendency based on the recent results", correct: false, explanation: "Five heads in a row from a fair coin is a real, if somewhat unlikely, outcome — but it doesn't change the coin's underlying 50/50 physics for the next flip. Streaks happen even with perfectly fair processes." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Rolling a specific number on a die (baseline case)</h3>
      <div className="prose-p">
      A standard six-sided die has six equally likely outcomes: {'{1, 2, 3, 4, 5, 6}'}. To find the probability of rolling a 4: favorable outcomes = 1 (just the single face showing 4), total outcomes = 6. P(rolling a 4) = 1 ÷ 6 ≈ <strong>16.7%</strong>. Check the logic with the sample-space rule: all six individual outcomes should have probabilities that add up to 1 — six outcomes at 1/6 each sum to exactly 6/6 = 1, confirming the calculation is internally consistent.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Independent vs. dependent events (edge case / variation)</h3>
      <div className="prose-p">
      Flipping a fair coin twice is independent: P(heads then heads) = P(heads) × P(heads) = 0.5 × 0.5 = <strong>25%</strong>, because the first flip has zero effect on the second. Now compare drawing 2 aces in a row from a standard 52-card deck without putting the first card back — this is dependent. P(first card is an ace) = 4/52. Once that ace is removed, only 51 cards remain, with 3 aces left: P(second card is an ace | first was an ace) = 3/51. Combined: P(both aces) = (4/52) × (3/51) = 12/2,652 ≈ <strong>0.45%</strong>. Treating this as independent — mistakenly using (4/52) × (4/52) ≈ 0.59% — overstates the real odds, because it ignores that removing the first ace changed the deck.
      </div>

      <QuickCheck
        question="You draw one card from a full deck, don't replace it, then draw a second card. Why can't you calculate P(both draws are hearts) the same way you would for two separate coin flips?"
        options={[
          { text: "Because the two draws are dependent — removing the first card changes the number of hearts and total cards left for the second draw", correct: true, explanation: "Correct. Coin flips are independent because nothing changes between flips. Card draws without replacement are dependent — each card removed changes the remaining deck, so the second draw's probability must account for what already happened." },
          { text: "Because cards can't have probabilities calculated for them, unlike coins or dice", correct: false, explanation: "Cards work under the exact same probability formula (favorable ÷ total) as coins or dice — the issue isn't that cards are special, it's specifically that removing a card without replacement changes the sample space for the next draw." },
          { text: "Because there are more possible outcomes with cards than with coins", correct: false, explanation: "A larger sample space alone doesn't create dependence — a deck where cards are replaced after each draw would still be independent, just with more outcomes. Dependence comes specifically from not replacing the drawn card." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: What a &quot;30% chance of rain&quot; forecast actually means (real-world / applied case)</h3>
      <p>
      A weather forecast showing &quot;30% chance of rain&quot; isn&apos;t saying it will rain for 30% of the day, or that 30% of the region will get wet. Meteorologists define it as the probability of precipitation (PoP): under historical atmospheric conditions closely matching today&apos;s setup, measurable rain occurred at the forecast location roughly 30% of the time. It&apos;s an experimental probability built from pattern-matching against a large historical record, not a guarantee — much like a die showing 1/6 doesn&apos;t promise a 1 will show up once every six rolls, only that it will trend toward that rate across many rolls. A 30% forecast that turns out rainy isn&apos;t &quot;wrong&quot; any more than rolling a 6 twice in a row is proof a die is broken.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Sample space tree diagram: flipping a coin twice"
        type="flow"
        svgSrc="/diagrams/math-numbers-probability-basics-coin-flip-tree-diagram.svg"
        altText="A branching tree diagram starting from a single point, splitting into two branches labeled heads and tails for the first coin flip, with each of those branches splitting again into heads and tails for the second flip, producing four equally likely outcome paths at the ends labeled HH, HT, TH, and TT, each labeled with probability one quarter."
      />
      <p>
      Each branch point represents one flip, and multiplying probabilities along a path from start to end gives that specific outcome&apos;s probability — 0.5 × 0.5 = 0.25 for each of the four paths shown. Because the tree captures every possible outcome exactly once, the four end-branch probabilities add up to exactly 1, which is the same sample-space check used in Example 1. This branching structure is the general tool for working out probabilities of multiple independent events in sequence, no matter how many steps are involved.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Believing a random process 'owes' a different outcome after a streak (the gambler's fallacy).", fix: "For truly independent events, past outcomes have zero effect on future ones. A coin, die, or roulette wheel has no memory — recalculate each event on its own." },
          { mistake: "Treating dependent events (like drawing cards without replacement) as if they were independent, and multiplying the same probability twice.", fix: "After the first outcome happens, recalculate the odds using what's actually left — fewer total items, and possibly fewer favorable ones too." },
          { mistake: "Confusing a low probability with an impossibility, or assuming a rare event 'can't' happen.", fix: "A 1% probability still means the event happens roughly 1 time in 100 — rare events occur regularly across enough trials. Low probability isn't zero probability." },
        ]}
      />
      <MisconceptionCallout
        myth="A coin is 'due' for tails after landing on heads several times in a row."
        reality={<p>This is the <TermLink href="/math-numbers/probability-basics">gambler&apos;s fallacy</TermLink>, and it&apos;s wrong because a fair coin has no memory — each flip is a fresh, independent event with the same 50/50 odds regardless of what came before. Streaks of 5, 6, or more of the same result are a normal, expected feature of randomness over enough flips, not evidence the coin is &quot;off balance&quot; or that a correction is coming. The same fallacy shows up at roulette tables (betting on a color after a run of the opposite color) and in everyday reasoning about sports and luck — the fix is always the same: independent events reset the odds every single time.</p>}
      />

      <QuickCheck
        question="A roulette wheel has landed on red 8 times in a row. A player bets heavily on black, reasoning it 'has to' come up soon. What's wrong with this reasoning?"
        options={[
          { text: "Nothing — after 8 reds, black really is more likely on the next spin", correct: false, explanation: "This restates the gambler's fallacy rather than correcting it. The wheel has no memory of the previous 8 spins; the odds on the next spin are unchanged by the streak." },
          { text: "The wheel is an independent, memoryless process — each spin has the same odds regardless of the previous 8 results, so black is not 'due'", correct: true, explanation: "Correct. Roulette spins are independent events, just like coin flips. An 8-red streak is unlikely in advance but not impossible, and once it happens, it has zero bearing on the next spin's true odds." },
          { text: "The player is right, but only because 8 is an unusually long streak", correct: false, explanation: "The length of the streak doesn't matter — whether it's 2 reds or 20 reds in a row, an independent process resets its odds every single spin. A longer streak doesn't strengthen the case for a correction." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Probability of a single event (favorable ÷ total outcomes)"
        fields={[
          { key: "favorableOutcomes", label: "Favorable outcomes", defaultValue: 1 },
          { key: "totalOutcomes", label: "Total possible outcomes", defaultValue: 6 },
        ]}
        resultLabel="Probability of the event (%)"
        formula="probabilitySingleEvent"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you catch yourself thinking a streak is 'due' to break, name it — it's the gambler's fallacy, and the true odds haven't moved.",
          "Practice the favorable-over-total formula on something concrete, like the odds of drawing a specific card from a shuffled deck (4/52 for any given rank).",
          "Before combining two probabilities with multiplication, check whether the events are actually independent — if one changes the odds of the other, recalculate instead.",
          "Read the related entry on Data Collection & Sampling Basics to see how experimental probability connects to how real surveys and studies are built.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do you calculate probability?", answer: "Divide the number of favorable outcomes by the total number of possible outcomes: P(event) = favorable ÷ total. The result is a number from 0 to 1, often expressed as a percentage." },
          { question: "What does a 30% chance of rain actually mean?", answer: "It means that, historically, measurable rain occurred at that location roughly 30% of the time under closely matching atmospheric conditions. It's not a statement about how much of the day or region will see rain." },
          { question: "Is a coin 'due' for tails after several heads in a row?", answer: "No. This is the gambler's fallacy. A fair coin has no memory — each flip is an independent event with the same 50/50 odds, regardless of any previous streak." },
          { question: "What's the difference between theoretical and experimental probability?", answer: "Theoretical probability is calculated from the structure of a situation before any trials happen, like 1/6 for a die roll. Experimental probability comes from actually running trials and counting results, and converges toward the theoretical value as the number of trials grows." },
          { question: "How do you find the probability of two events happening together?", answer: "For independent events, multiply their individual probabilities: P(A and B) = P(A) × P(B). For dependent events, recalculate the second event's probability based on what changed after the first event occurred." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
