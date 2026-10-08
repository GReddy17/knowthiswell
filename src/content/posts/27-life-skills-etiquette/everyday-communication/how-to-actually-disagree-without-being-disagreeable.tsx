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
  title: "How to Actually Disagree Without Being Disagreeable",
  category: "life-skills-etiquette",
  order: 9,
  subtopic: "everyday-communication",
  tags: ["how to disagree respectfully", "disagree without being disagreeable", "disagreeing with family and friends", "conversational receptiveness", "Rapoport's rules", "disagreement hierarchy", "Gottman harsh startup", "how to argue without fighting"],
  date: "2026-10-03",
  updated: "2026-10-03",
  youtubeShort: false, youtubeLong: false,
  seoScore: 80, seoScoredOn: "2026-10-04",
  lastReviewed: "2026-10-03",
  excerpt: "Disagreeing well means attacking the idea, not the person: restate their view first, name what you agree on, then make one clear counterpoint.",
  summary: "Disagreeing without being disagreeable means separating the claim from the person making it and showing you've understood their view before challenging it. Research on 'conversational receptiveness' by Yeomans, Minson and colleagues (2020) found that people who signal they've heard the other side, by acknowledging the view, hedging their own claims, stating points of agreement and framing things positively, are seen as more reasonable and more desirable to work with, even when they don't change their position. Philosopher Daniel Dennett popularized 'Rapoport's rules': restate the other person's position so well they wish they'd put it that way, list points of agreement, mention anything you learned from them, and only then rebut. Relationship researcher John Gottman found that how a conflict conversation starts predicts how it ends; in one study, the first three minutes predicted outcomes with high accuracy, and contempt (mockery, eye-rolling, sarcasm) was among the strongest signs of a relationship in trouble. Paul Graham's 'disagreement hierarchy' ranks responses from name-calling at the bottom to refuting the central point at the top. Norms vary: some cultures treat open debate as respectful, others treat it as rude, so adjust directness to the setting.",
  sources: [
    { label: "Yeomans, Minson, Collins, Chen & Gino (2020) — Conversational receptiveness: Improving engagement with opposing views, Organizational Behavior and Human Decision Processes", url: "https://doi.org/10.1016/j.obhdp.2020.03.011" },
    { label: "The Gottman Institute — The Four Horsemen: Criticism, Contempt, Defensiveness, and Stonewalling", url: "https://www.gottman.com/blog/the-four-horsemen-recognizing-criticism-contempt-defensiveness-and-stonewalling/" },
    { label: "Carrère & Gottman (1999) — Predicting divorce among newlyweds from the first three minutes of a marital conflict discussion, Family Process", url: "https://www.gottman.com/blog/the-research-predicting-divorce-among-newlyweds-from-the-first-three-minutes-of-a-marital-conflict-discussion/" },
    { label: "Paul Graham (2008) — How to Disagree", url: "http://www.paulgraham.com/disagree.html" },
    { label: "University of Washington News (1999) — First three minutes of discussion about ongoing area of marital conflict are predictive of divorce for newlyweds", url: "https://washington.edu/news/1999/09/27/first-three-minutes-of-discussion-about-on-going-area-of-marital-conflict-are-predictive-of-divorce-for-newlyweds" },
  ],
  seeAlso: [
    "life-skills-etiquette/how-to-actually-have-a-difficult-conversation",
    "life-skills-etiquette/what-active-listening-actually-looks-like-in-practice",
    "career-study-skills/how-to-disagree-with-a-colleague-professionally",
    "psychology-human-behavior/what-confirmation-bias-actually-does-to-decision-making",
    "life-skills-etiquette/how-to-actually-set-boundaries-without-guilt",
  ],
  glossary: [
    { term: "Conversational receptiveness", definition: "Using language that shows you are willing to engage with an opposing view: acknowledging it, hedging your own claims, stating agreement and framing points positively." },
    { term: "Rapoport's rules", definition: "A four-step guide to criticism popularized by Daniel Dennett: restate the other view fairly, list agreements, say what you learned, then rebut." },
    { term: "Steelmanning", definition: "Restating an opposing argument in its strongest form before responding, the opposite of a straw man." },
    { term: "Straw man", definition: "Misrepresenting someone's argument as a weaker version that is easier to knock down." },
    { term: "Harsh startup", definition: "Gottman's term for opening a conflict with criticism or contempt, which tends to make the whole conversation go badly." },
    { term: "Contempt", definition: "Communicating superiority through mockery, sarcasm, name-calling or eye-rolling; in Gottman's research, one of the most damaging conflict behaviors." },
    { term: "Ad hominem", definition: "Attacking the person making an argument rather than the argument itself." },
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
  {"question": "What does 'disagree without being disagreeable' mainly mean?", "difficulty": "easy", "options": [{"text": "Challenge the idea while respecting the person", "correct": true, "explanation": "The disagreement is about the claim, not the other person's worth or motives."}, {"text": "Never say you disagree", "correct": false, "explanation": "Avoiding disagreement is a different strategy, and often a costly one."}, {"text": "Agree out loud and disagree privately", "correct": false, "explanation": "That's avoidance, not respectful disagreement."}, {"text": "Win the argument as politely as possible", "correct": false, "explanation": "The goal is understanding and a fair hearing, not just winning."}]},
  {"question": "Under Rapoport's rules, what should you do first before criticizing someone's view?", "difficulty": "medium", "options": [{"text": "Restate their position so clearly they'd wish they'd put it that way", "correct": true, "explanation": "Then list agreements, mention what you learned, and only then rebut."}, {"text": "State your strongest counterargument", "correct": false, "explanation": "The rebuttal comes last, not first."}, {"text": "Point out their biggest mistake", "correct": false, "explanation": "Leading with errors is the opposite of the approach."}, {"text": "Ask a third person to judge", "correct": false, "explanation": "The rules are about how you respond yourself."}]},
  {"question": "What is a 'straw man'?", "difficulty": "easy", "options": [{"text": "A weakened misrepresentation of someone's argument that's easy to knock down", "correct": true, "explanation": "Steelmanning, stating the strongest version, is the fix."}, {"text": "A neutral mediator in an argument", "correct": false, "explanation": "That's not what the term means."}, {"text": "An argument backed by data", "correct": false, "explanation": "A straw man is a distortion, not an evidence-based argument."}, {"text": "A polite way to end a debate", "correct": false, "explanation": "It's a fallacy, not an exit."}]},
  {"question": "In Yeomans and colleagues' 2020 research, how were people who used receptive language seen by those who disagreed with them?", "difficulty": "medium", "options": [{"text": "As more reasonable and more desirable to work with", "correct": true, "explanation": "Receptiveness improved how they were perceived even when they held their position."}, {"text": "As weak and easy to dismiss", "correct": false, "explanation": "The research found the opposite."}, {"text": "As having changed their mind", "correct": false, "explanation": "Receptive language doesn't mean conceding the point."}, {"text": "No differently from anyone else", "correct": false, "explanation": "There was a clear difference in how they were viewed."}]},
  {"question": "Which of these is an example of receptive language?", "difficulty": "medium", "options": [{"text": "\"I see why that matters to you, and I agree cost is a real issue. Where I land differently is...\"", "correct": true, "explanation": "It acknowledges, names agreement and then states a difference."}, {"text": "\"That's obviously wrong.\"", "correct": false, "explanation": "It's a flat contradiction with no acknowledgment."}, {"text": "\"Whatever, believe what you want.\"", "correct": false, "explanation": "That's dismissive and ends engagement."}, {"text": "\"Only someone uninformed would think that.\"", "correct": false, "explanation": "That attacks the person, an ad hominem."}]},
  {"question": "According to Gottman's research, why does the opening of a conflict conversation matter so much?", "difficulty": "medium", "options": [{"text": "How it starts strongly predicts how it ends", "correct": true, "explanation": "The first three minutes predicted outcomes in his studies; a harsh startup tends to go badly."}, {"text": "People stop listening after the first minute", "correct": false, "explanation": "The finding is about trajectory, not attention span."}, {"text": "Only the last word counts", "correct": false, "explanation": "Gottman's work points to the start, not the end."}, {"text": "It doesn't; only the topic matters", "correct": false, "explanation": "Delivery, especially at the start, mattered a great deal."}]},
  {"question": "Which behavior did Gottman identify as among the most damaging in conflict?", "difficulty": "hard", "options": [{"text": "Contempt, such as mockery, sarcasm and eye-rolling", "correct": true, "explanation": "It communicates superiority and was one of the strongest predictors of relationship breakdown."}, {"text": "Asking clarifying questions", "correct": false, "explanation": "That's a constructive behavior."}, {"text": "Taking a short break to calm down", "correct": false, "explanation": "Gottman actually recommends breaks when people are flooded."}, {"text": "Admitting part of the problem", "correct": false, "explanation": "Taking responsibility is the antidote to defensiveness."}]},
  {"question": "In Paul Graham's disagreement hierarchy, what sits at the top?", "difficulty": "hard", "options": [{"text": "Refuting the central point", "correct": true, "explanation": "It addresses the core of the argument with reasons, not side issues."}, {"text": "Responding to tone", "correct": false, "explanation": "That's near the bottom: it ignores the substance."}, {"text": "Contradiction", "correct": false, "explanation": "Stating the opposite without evidence is low in the hierarchy."}, {"text": "Name-calling", "correct": false, "explanation": "That's the bottom level."}]},
  {"question": "You're from a culture where open debate is normal, visiting family who find direct contradiction rude. What's the best adjustment?", "difficulty": "hard", "options": [{"text": "Keep your view but soften delivery, for example with questions and hedges", "correct": true, "explanation": "Directness norms vary; you can adapt the delivery without abandoning the point."}, {"text": "Drop your view entirely", "correct": false, "explanation": "Adjusting delivery doesn't require giving up your position."}, {"text": "Be even more direct so they get used to it", "correct": false, "explanation": "That ignores the local norm and usually backfires."}, {"text": "Switch to written messages only", "correct": false, "explanation": "Text removes tone and often makes disagreement harder."}]},
];

const h2 = "scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink";
const h3 = "scroll-mt-10 font-display text-xl font-bold text-ink mb-4";

export default function Post() {
  return (
    <>
      <h2 className={h2}>Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Disagreeing well means separating the claim from the person: argue with the idea, never with their worth or motives.",
          "Show you understand before you challenge. Restate their view, name what you agree on, then make one clear counterpoint.",
          "Receptive language (acknowledging, hedging, stating agreement) makes people see you as more reasonable, even when you don't budge.",
          "The opening matters most. A harsh start, and especially contempt, predicts a bad ending.",
        ]}
      />

      <h2 className={h2}>The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Most disagreements that go wrong aren&apos;t really about the topic. They go wrong because one person hears &quot;you&apos;re wrong&quot; as &quot;you&apos;re stupid&quot; or &quot;you&apos;re a bad person&quot;. Once that happens, they stop defending a point and start defending themselves, and nobody listens to anything after that. Think of it like a door with two locks. The first lock is &quot;do you understand me?&quot; and the second is &quot;are you attacking me?&quot;. Your argument, however good, can&apos;t get through until both are open. So disagreeing without being disagreeable is mostly about order. First, show you&apos;ve heard them: say their view back in a way they&apos;d agree with. Second, name what you genuinely agree on, because there&apos;s almost always something. Only then say where you see it differently, about the idea and not the person. You can stay completely firm on substance. What changes is that the other person can actually hear it.</div>}
        detailed={<div className="prose-p">Research by Michael Yeomans, Julia Minson and colleagues (2020) gave this a name: <strong>conversational receptiveness</strong>. Across studies, people who used receptive language were rated as more reasonable, more trustworthy and more desirable as future partners by people who disagreed with them, and conflicts escalated less. The markers are learnable and often summarized as HEAR: <strong>H</strong>edge your claims (&quot;I think&quot;, &quot;in my experience&quot;), <strong>E</strong>mphasize agreement, <strong>A</strong>cknowledge the other view in your own words, and <strong>R</strong>eframe to the positive (&quot;I&apos;d like us to&quot; rather than &quot;you never&quot;). Philosopher Daniel Dennett set out a similar sequence as <strong>Rapoport&apos;s rules</strong>, after the game theorist Anatol Rapoport: restate the other position so well they wish they&apos;d put it that way, list points of agreement, mention anything you learned, and only then rebut. On the relationship side, John Gottman&apos;s lab found that the way a conflict starts largely decides how it goes. A <strong>harsh startup</strong> (criticism of the person, not the behavior) predicted poor outcomes, and <strong>contempt</strong> was among the most damaging behaviors he observed. Paul Graham&apos;s <strong>disagreement hierarchy</strong> adds the quality check: name-calling and <strong>ad hominem</strong> at the bottom, then responding to tone, contradiction, counterargument, refutation, and at the top, refuting the central point. This pairs naturally with <TermLink href="/life-skills-etiquette/what-active-listening-actually-looks-like-in-practice">active listening</TermLink>, which is how you earn the right to the restatement.</div>}
      />
      <FootnoteAside>Directness norms vary across cultures. In some places, open debate is a sign of respect and engagement; in others, contradicting someone in front of others is a serious loss of face. The underlying moves (understand first, separate person from idea) travel well, but how bluntly you state the difference should match the setting.</FootnoteAside>

      <QuickCheck
        question="What's the first step in Rapoport's rules before you criticize a view?"
        options={[
          { text: "Restate the other person's view so well they'd agree with your summary", correct: true, explanation: "Correct. Then list agreements, mention what you learned, and only then rebut." },
          { text: "State your best counterargument while you have their attention", correct: false, explanation: "The rebuttal comes last, after you've shown you understand." },
          { text: "Point out their tone", correct: false, explanation: "Responding to tone sits low in the disagreement hierarchy." },
        ]}
      />

      <h2 className={h2}>Worked examples</h2>

      <h3 className={h3}>Example 1: The holiday-dinner argument (baseline case)</h3>
      <div className="prose-p">Your uncle says a new local housing development will ruin the neighborhood. You think the town badly needs the homes. The disagreeable version: &quot;That&apos;s such a selfish take.&quot; The respectful version, step by step. Restate: &quot;So your worry is traffic and that the place you&apos;ve lived for 30 years will feel different?&quot; He nods. Agree: &quot;The traffic point is fair; that road is already jammed.&quot; Differ, about the idea: &quot;Where I see it differently is that my friends can&apos;t afford to live here at all, so I think the trade-off is worth it if they fix the road.&quot; He may not agree. But he heard your point, because you never told him who he was.</div>

      <h3 className={h3}>Example 2: When they&apos;re being disagreeable to you (edge case)</h3>
      <div className="prose-p">A friend rolls their eyes and says, &quot;Only an idiot would believe that.&quot; That&apos;s contempt plus an ad hominem, the bottom of Graham&apos;s hierarchy. Matching it escalates, and Gottman&apos;s research suggests it rarely recovers from there. Instead, name the process, not the person: &quot;I&apos;m happy to disagree about this, but I don&apos;t want to do it with insults. Can you tell me what you think I&apos;m missing?&quot; If the temperature stays high, take a break. Gottman recommends pausing when people are &quot;flooded&quot;, physiologically overwhelmed, because nobody reasons well in that state. Respectful disagreement takes two people; you can only control your half, and ending a conversation politely is a valid move.</div>

      <h3 className={h3}>Example 3: Disagreeing in a group chat (applied case)</h3>
      <div className="prose-p">Someone in your friends&apos; group chat shares a claim you know is wrong. Text strips out tone, so receptive markers matter more, not less. Compare &quot;No, that&apos;s false&quot; with &quot;I&apos;d seen that too and nearly shared it. When I looked, the original study said something narrower, here&apos;s the link. Still agree the bigger issue is worth worrying about.&quot; The second version acknowledges, finds common ground, gives a reason and keeps the door open. It also avoids correcting them in a way that makes them look foolish in front of everyone, which, for many people, is what makes a disagreement personal. For bigger disagreements, a private message is often kinder than a public reply.</div>

      <QuickCheck
        question="A friend says 'Only an idiot would believe that.' What's the most constructive response?"
        options={[
          { text: "Name the process without attacking them, and invite their reasoning", correct: true, explanation: "Correct. You decline the insult and keep the topic on ideas." },
          { text: "Respond with a sharper insult so they back down", correct: false, explanation: "Matching contempt usually escalates the conflict." },
          { text: "Agree with them to end the conflict", correct: false, explanation: "You can end a conversation without abandoning your view." },
        ]}
      />

      <h2 className={h2}>How it works (visual)</h2>
      <DiagramBlock
        title="The disagreement hierarchy, and the respectful sequence"
        type="flow"
        svgSrc="/diagrams/life-skills-etiquette-how-to-actually-disagree-without-being-disagreeable-flow.svg"
        altText="Left: Paul Graham's disagreement hierarchy as a stack from bottom to top: name-calling, ad hominem, responding to tone, contradiction, counterargument, refutation, refuting the central point. The bottom three are marked as about the person or tone, the top three as about the idea. Right: a four-step respectful sequence: 1 restate their view, 2 name what you agree on, 3 say what you learned or find fair, 4 state one clear difference about the idea."
      />
      <p>The left side tells you whether a response is about the person or the idea. The right side is the order of operations that keeps you in the top half of the stack, even when the other person starts in the bottom half.</p>

      <h2 className={h2}>Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Opening with a verdict on the person ('That's selfish', 'You always...').", fix: "Open with a restatement of their view or a question. Criticize the claim, not the character." },
          { mistake: "Answering a straw-man version of what they said.", fix: "Check your summary out loud: 'So you're saying X, is that right?' Respond to the version they confirm." },
          { mistake: "Thinking politeness means hiding your view.", fix: "Receptive language softens delivery, not substance. Say clearly where you differ." },
          { mistake: "Piling on five counterpoints at once.", fix: "Lead with your single strongest point. A list feels like an attack." },
          { mistake: "Using sarcasm or eye-rolling 'as a joke'.", fix: "Contempt lands as contempt. Gottman found it among the most damaging conflict behaviors." },
        ]}
      />
      <MisconceptionCallout
        myth="Being agreeable in tone makes you look weak or like you're conceding."
        reality={<p>The research points the other way. In Yeomans and colleagues&apos; studies, people who acknowledged opposing views and named points of agreement were seen as <strong>more</strong> reasonable and more desirable to work with, and they hadn&apos;t changed their position. Firm substance plus a receptive delivery is the combination that gets heard.</p>}
      />

      <h2 className={h2}>What to do next</h2>
      <ActionChecklist
        items={[
          "In your next disagreement, restate the other person's view before giving yours, and ask if you got it right.",
          "Find one genuine point of agreement and say it out loud.",
          "Swap 'you always' and 'you never' for 'I see it differently because...'.",
          "Make one clear counterpoint, not five.",
          "If either of you is getting heated, suggest a short break and come back to it.",
          "For workplace disagreements, see our guide to disagreeing with a colleague professionally.",
        ]}
      />

      <h2 className={h2}>FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do you disagree with someone respectfully?", answer: "Restate their view so they agree with your summary, name what you agree on, then state one clear difference about the idea rather than the person. Hedge where you're unsure and keep your tone free of sarcasm." },
          { question: "How do you disagree with family without fighting?", answer: "Start softly, focus on one issue, acknowledge what matters to them, and be willing to pause if things heat up. Research on couples found that how a conflict starts strongly predicts how it ends." },
          { question: "What are Rapoport's rules?", answer: "A sequence popularized by philosopher Daniel Dennett: restate the other view so well they wish they'd said it that way, list your points of agreement, mention anything you learned from them, and only then offer criticism." },
          { question: "What phrases help when you disagree?", answer: "Phrases like 'I see why that matters to you', 'I agree with you on...', 'Where I see it differently is...', and 'What am I missing?' signal you're engaging with the view rather than attacking the person." },
          { question: "Is it ever better not to disagree?", answer: "Sometimes. If the stakes are low, the other person is very upset, or the setting is wrong, waiting or letting it go can be the respectful choice. Avoiding every disagreement, though, tends to build resentment." },
        ]}
      />

      <h2 className={h2}>Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className={h2}>See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
