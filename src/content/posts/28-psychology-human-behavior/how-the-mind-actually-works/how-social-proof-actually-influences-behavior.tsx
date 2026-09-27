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
  title: "How Social Proof Actually Influences Behavior",
  category: "psychology-human-behavior",
  order: 5,
  subtopic: "how-the-mind-actually-works",
  tags: ["social proof", "conformity", "social norms", "persuasion", "descriptive norms"],
  date: "2026-09-26",
  updated: "2026-09-26",
  lastReviewed: "2026-09-26",
  excerpt: "When we're unsure what to do, we copy what people around us are doing. The effect is strongest with uncertainty and similar others, and it can backfire: telling people 'many others do the bad thing' can increase the bad thing.",
  summary: "Social proof is the tendency to treat other people's behavior as evidence of the correct thing to do, especially when a situation is uncertain, as described in the APA Dictionary of Psychology. Field studies show its size. In a 1969 street experiment by Milgram, Bickman and Berkowitz, as the crowd staring up at a building grew from 1 person to 15, the share of passersby who stopped rose from about 4% to about 40%. In a 2008 hotel study, Goldstein, Cialdini and Griskevicius found that a card saying most guests reused their towels increased reuse compared with a standard environmental appeal, and a card referring to guests who had stayed in the same room did better still. Social proof can backfire: Cialdini (2003) reported that a sign stressing how many visitors stole petrified wood from a national park was associated with more theft than a sign simply asking people not to. Asch's 1950s line-judgment studies showed people will sometimes give an answer they can see is wrong when a group agrees on it.",
  sources: [
    { label: "APA Dictionary of Psychology — Social proof", url: "https://dictionary.apa.org/social-proof" },
    { label: "Milgram, Bickman & Berkowitz (1969) — Note on the drawing power of crowds of different size, Journal of Personality and Social Psychology", url: "https://doi.org/10.1037/h0028070" },
    { label: "Goldstein, Cialdini & Griskevicius (2008) — A Room with a Viewpoint, Journal of Consumer Research", url: "https://doi.org/10.1086/586910" },
    { label: "Cialdini (2003) — Crafting Normative Messages to Protect the Environment, Current Directions in Psychological Science", url: "https://doi.org/10.1111/1467-8721.01242" },
    { label: "Asch (1956) — Studies of independence and conformity, Psychological Monographs", url: "https://doi.org/10.1037/h0093718" },
  ],
  seeAlso: [
    "psychology-human-behavior/what-confirmation-bias-actually-does-to-decision-making",
    "psychology-human-behavior/how-cognitive-load-actually-affects-decision-making",
    "psychology-human-behavior/how-habits-actually-get-built-in-the-brain",
    "technology-basics/how-social-media-feeds-decide-what-you-see",
    "general-awareness-basics/how-to-spot-misinformation-and-fake-news",
  ],
  glossary: [
    { term: "Social proof", definition: "Using what other people do as evidence of what's correct or appropriate, most strongly when we're uncertain." },
    { term: "Descriptive norm", definition: "What most people actually do, such as 'most guests reuse their towels.'" },
    { term: "Injunctive norm", definition: "What most people approve or disapprove of, such as 'please don't take the wood.'" },
    { term: "Conformity", definition: "Changing your behavior or stated beliefs to match a group, whether from genuinely believing the group is right or from wanting to fit in." },
    { term: "Informational influence", definition: "Following others because you think they know something you don't, as opposed to following them just to be accepted." },
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
  {"question": "When is social proof strongest?", "difficulty": "easy", "options": [{"text": "When we're uncertain what to do", "correct": true, "explanation": "Uncertainty makes other people's behavior look like useful information."}, {"text": "When we're experts on the topic", "correct": false, "explanation": "Expertise tends to reduce reliance on others' choices."}, {"text": "When nobody else is around", "correct": false, "explanation": "Social proof needs others to observe."}]},
  {"question": "In the 1969 sidewalk experiment, what happened as the crowd looking up grew from 1 to 15 people?", "difficulty": "medium", "options": [{"text": "The share of passersby who stopped rose from about 4% to about 40%", "correct": true, "explanation": "Bigger crowds pulled in far more people."}, {"text": "Fewer people looked up because the crowd blocked the view", "correct": false, "explanation": "More people looked up as the crowd grew."}, {"text": "Crowd size made no difference", "correct": false, "explanation": "Crowd size had a large effect."}]},
  {"question": "Which hotel card produced the most towel reuse in the 2008 study?", "difficulty": "medium", "options": [{"text": "One saying most guests who stayed in this same room reused their towels", "correct": true, "explanation": "The more similar the reference group, the stronger the effect."}, {"text": "A standard 'help save the environment' message", "correct": false, "explanation": "That did worst of the ones compared."}, {"text": "A card with no message", "correct": false, "explanation": "A plain card wasn't the winning condition."}]},
  {"question": "Why did a sign stressing how many visitors stole petrified wood backfire?", "difficulty": "hard", "options": [{"text": "It told visitors that stealing was common, which made it seem normal", "correct": true, "explanation": "A negative descriptive norm can spread the behavior it warns about."}, {"text": "The sign was too small to read", "correct": false, "explanation": "The wording, not the size, was the problem."}, {"text": "Visitors didn't understand what petrified wood was", "correct": false, "explanation": "The message's framing drove the effect."}]},
  {"question": "What is the difference between a descriptive and an injunctive norm?", "difficulty": "medium", "options": [{"text": "Descriptive is what people do; injunctive is what people approve of", "correct": true, "explanation": "'Most people recycle' vs 'people think you should recycle.'"}, {"text": "They're two names for the same thing", "correct": false, "explanation": "They're distinct and can point in different directions."}, {"text": "Descriptive norms are laws; injunctive norms are habits", "correct": false, "explanation": "Neither is a law."}]},
  {"question": "In Asch's line-judgment studies, what did many participants do?", "difficulty": "easy", "options": [{"text": "Gave a clearly wrong answer at least once when the group agreed on it", "correct": true, "explanation": "About three in four conformed at least once, though most answers stayed correct."}, {"text": "Always resisted the group", "correct": false, "explanation": "Many conformed at least some of the time."}, {"text": "Refused to answer", "correct": false, "explanation": "They answered; some went along with the group."}]},
  {"question": "A product page shows '4 people bought this' next to a rival's '12,000 reviews.' Which effect does this illustrate?", "difficulty": "hard", "options": [{"text": "Social proof works best with large, visible numbers, so a small number can hurt", "correct": true, "explanation": "A tiny count signals that few others chose it."}, {"text": "Scarcity always wins", "correct": false, "explanation": "The example is about popularity signals, not scarcity."}, {"text": "Social proof only works in person", "correct": false, "explanation": "Online reviews and counts are among the most common forms."}]},
  {"question": "Which best protects you from being misled by social proof?", "difficulty": "easy", "options": [{"text": "Asking whether the crowd actually knows more than you, and whether the numbers are real", "correct": true, "explanation": "Social proof is useful when others have real information; it misleads when they don't or when it's faked."}, {"text": "Always doing the opposite of the crowd", "correct": false, "explanation": "Crowds are often right. Reflexive contrarianism is its own error."}, {"text": "Ignoring all reviews", "correct": false, "explanation": "Reviews can be useful evidence if genuine."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "When we don't know what to do, we treat what others are doing as evidence of the right choice.",
          "The pull is strongest under uncertainty and from people who seem similar to us, and field studies show it changes real behavior, not just opinions.",
          "It cuts both ways: saying 'lots of people do this bad thing' can make the bad thing more common.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">You&apos;re in a new city and have to pick between two restaurants. One is packed; the other is empty. Most people pick the packed one, because the crowd seems to know something they don&apos;t. That&apos;s social proof. It&apos;s usually a sensible shortcut: other people often do have useful information. But the shortcut can be gamed with fake reviews, and it can mislead when everyone is guessing. It also works on bad habits as easily as good ones. If you hear &quot;everyone cheats on this,&quot; part of your brain hears &quot;cheating is normal here.&quot;</div>}
        detailed={<div className="prose-p">The APA Dictionary describes social proof as relying on others&apos; behavior to decide what&apos;s correct. Psychologists separate two routes. <strong>Informational influence</strong>: you follow others because you think they have better information, which is strongest when a situation is ambiguous. <strong>Normative influence</strong>: you go along to fit in, even when you privately disagree. Asch&apos;s 1950s line studies showed the second route: when a group of confederates unanimously gave an obviously wrong answer, about three-quarters of participants went along at least once, though most of their answers stayed correct. Field experiments show the first route. In Milgram, Bickman and Berkowitz&apos;s 1969 study, as a crowd staring up at a building grew from 1 to 15 people, the share of passersby who stopped rose from about 4% to about 40%. In the 2008 hotel study, a descriptive norm (&quot;most guests reuse towels&quot;) beat a standard environmental appeal, and a norm about guests in the <em>same room</em> did better still. That is similarity at work. The edge case is the backfire. Cialdini&apos;s Petrified Forest study found that a sign emphasizing how many visitors had stolen wood was associated with more theft than a sign that simply asked people not to take it. A message can carry an injunctive norm (&quot;don&apos;t&quot;) and a descriptive norm (&quot;many do&quot;) at once, and the descriptive one can win. Like <TermLink href="/psychology-human-behavior/what-confirmation-bias-actually-does-to-decision-making">confirmation bias</TermLink>, it&apos;s a shortcut that saves effort and occasionally leads us astray.</div>}
      />
      <FootnoteAside>Percentages here come from the specific cited studies, run in specific places and times. Treat them as evidence that the effect is real and can be large, not as constants that apply to every situation.</FootnoteAside>

      <p>Social proof is also built into the internet. Like counts, review stars and &quot;trending&quot; labels are designed around it, which is part of how <TermLink href="/technology-basics/how-social-media-feeds-decide-what-you-see">social media feeds</TermLink> amplify what&apos;s already popular.</p>

      <QuickCheck
        question="A town wants less littering. Which sign is most likely to help, based on the research?"
        options={[
          { text: "'Most people here take their litter home. Thank you for doing the same.'", correct: true, explanation: "Correct. It pairs a positive descriptive norm with the request." },
          { text: "'Litter is a huge problem here: thousands of people drop trash every year.'", correct: false, explanation: "This tells people littering is common, which can make it seem normal." },
          { text: "No sign, since signs never change behavior", correct: false, explanation: "Field studies show wording can measurably change behavior." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The crowd on the sidewalk (baseline case)</h3>
      <div className="prose-p">In the 1969 New York study, researchers had people stand on a busy sidewalk and stare up at a sixth-floor window. With 1 person staring, about 4% of passersby stopped and about 42% glanced up. With 15 people staring, about 40% stopped and about 86% looked up. There was nothing special in the window. The crowd itself became the reason to look. That&apos;s informational social proof in its simplest form: more people doing something makes it seem more worth doing.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The sign that backfired (edge case)</h3>
      <div className="prose-p">Visitors to Arizona&apos;s Petrified Forest National Park were taking small pieces of wood. A sign that stressed how many past visitors had taken wood was associated with more theft in Cialdini&apos;s test than a sign simply asking visitors not to take it. The warning was well-intended, but it quietly communicated that taking wood is what people do here. The lesson for anyone writing a public message: describe the good behavior as common, not the bad behavior.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Reading online reviews (real-world use)</h3>
      <div className="prose-p">You&apos;re choosing between two space heaters. One has 3,000 reviews averaging 4.6 stars; the other has 11 reviews averaging 4.9. Social proof pulls you toward the first, and that pull is reasonable: 3,000 buyers is much stronger evidence than 11. But run two checks. Are the reviews from people like you (same use, same room size)? And do they look genuine, with specific details and a mix of ratings, rather than a wall of vague five-star praise? Social proof is only as good as the crowd behind it.</div>

      <QuickCheck
        question="In the hotel towel study, why did 'guests who stayed in this room' beat 'most guests'?"
        options={[
          { text: "The reference group felt more similar to the reader", correct: true, explanation: "Correct. Social proof is stronger when the people involved seem like us." },
          { text: "The second card was printed in a larger font", correct: false, explanation: "The difference tested was the wording of the reference group." },
          { text: "Guests were paid to reuse towels in that condition", correct: false, explanation: "No payments were involved." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How social proof turns uncertainty into action"
        type="flow"
        svgSrc="/diagrams/psychology-human-behavior-how-social-proof-actually-influences-behavior-flow.svg"
        altText="A five-step flow. 1: You face an uncertain choice. 2: You notice what others are doing. 3: The more people, and the more similar they seem, the stronger the signal. 4: You treat their behavior as evidence and follow it. 5: Your choice becomes part of the signal for the next person, which is why it can spread good or bad behavior."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Warning people by stressing how common a bad behavior is.", fix: "Highlight the people doing the right thing, and pair it with a clear request." },
          { mistake: "Trusting a popularity count without checking who's behind it.", fix: "Ask whether the crowd has real information and resembles you, and look for signs of fake reviews or bought followers." },
          { mistake: "Assuming you're immune because you think for yourself.", fix: "Most people underestimate how much others' behavior affects them. Slow down on uncertain choices and name the evidence you're actually using." },
        ]}
      />
      <MisconceptionCallout
        myth="Only gullible or insecure people are swayed by what others do."
        reality={<p>Social proof works on nearly everyone because it&apos;s usually a smart shortcut: in unfamiliar situations, other people often do know something you don&apos;t. That&apos;s why it shows up in controlled experiments with ordinary adults, hotel guests and park visitors. The problem isn&apos;t using it. It&apos;s using it when the crowd has no better information than you, or when the crowd is fake.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you follow the crowd on a purchase or decision, ask what the crowd actually knows.",
          "When asking others to change a habit, describe how many people already do the good behavior.",
          "Check reviews for detail, a realistic spread of ratings, and reviewers whose needs resemble yours.",
          "On social media, notice when a like count is doing your thinking for you.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is social proof in psychology?", answer: "It's the tendency to look at what other people are doing to decide what's correct, especially when we're unsure. The APA Dictionary of Psychology defines it along those lines." },
          { question: "Why does social proof work?", answer: "Because other people often have information we lack, following them is usually a reasonable shortcut. We also want to fit in, which adds a second pull toward the group." },
          { question: "Can social proof backfire?", answer: "Yes. Messages that stress how common a bad behavior is can make it seem normal and increase it, as Cialdini's Petrified Forest study showed." },
          { question: "What are examples of social proof?", answer: "Reviews and star ratings, 'bestseller' labels, like counts, busy restaurants, and messages like 'most guests reuse their towels.'" },
          { question: "Is social proof the same as peer pressure?", answer: "They overlap. Peer pressure is mostly about fitting in with a group you know. Social proof also covers following strangers because you think they know something, like choosing the busy restaurant." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
