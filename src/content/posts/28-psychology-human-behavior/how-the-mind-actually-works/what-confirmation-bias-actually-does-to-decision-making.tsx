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
  title: "What Confirmation Bias Actually Does to Decision-Making",
  category: "psychology-human-behavior",
  order: 4,
  subtopic: "how-the-mind-actually-works",
  tags: ["confirmation bias", "cognitive bias", "decision-making", "critical thinking", "wason task"],
  date: "2026-09-25",
  updated: "2026-09-25",
  lastReviewed: "2026-09-25",
  excerpt: "Confirmation bias isn't just ignoring facts you dislike. It shapes which evidence you look for, how you read ambiguous evidence, and what you remember, so your confidence can climb while your accuracy stays put.",
  summary: "Confirmation bias is the tendency to seek, interpret, favor, and recall information in ways that support what one already believes or expects, per the APA Dictionary of Psychology. Raymond Nickerson's 1998 review in Review of General Psychology describes it as operating at several stages of reasoning: people test ideas by looking for confirming cases rather than cases that could prove them wrong (as in Peter Wason's 1960 2-4-6 task), interpret ambiguous evidence as supportive, and remember hits better than misses. A 1979 Stanford study by Lord, Ross, and Lepper found that people on opposite sides of an issue who read the same mixed evidence both became more confident in their original views. The practical result for decisions is rising confidence without rising accuracy, which is why structured habits such as asking what evidence would change one's mind, and seeking disconfirming information deliberately, reduce its effect more than simply trying to be objective.",
  sources: [
    { label: "APA Dictionary of Psychology — Confirmation bias", url: "https://dictionary.apa.org/confirmation-bias" },
    { label: "Nickerson, R. S. (1998). Confirmation Bias: A Ubiquitous Phenomenon in Many Guises. Review of General Psychology, 2(2), 175-220", url: "https://doi.org/10.1037/1089-2680.2.2.175" },
    { label: "Lord, C. G., Ross, L., & Lepper, M. R. (1979). Biased assimilation and attitude polarization. Journal of Personality and Social Psychology, 37(11), 2098-2109", url: "https://doi.org/10.1037/0022-3514.37.11.2098" },
  ],
  seeAlso: [
    "psychology-human-behavior/what-cognitive-dissonance-actually-feels-like",
    "psychology-human-behavior/how-cognitive-load-actually-affects-decision-making",
    "psychology-human-behavior/how-memory-actually-forms-and-fades",
    "general-awareness-basics/understanding-media-bias",
  ],
  glossary: [
    { term: "Confirmation bias", definition: "The tendency to search for, interpret, favor, and remember information in ways that support existing beliefs or expectations." },
    { term: "Cognitive bias", definition: "A systematic pattern in how people think and judge that departs from what the evidence or logic would support, usually because the mind uses shortcuts." },
    { term: "Positive test strategy", definition: "Testing an idea by looking for cases that should fit it, rather than cases that would reveal it's wrong. It's a major route into confirmation bias." },
    { term: "Biased assimilation", definition: "Judging evidence that supports your view as stronger and more convincing than equally good evidence that challenges it." },
    { term: "Disconfirming evidence", definition: "Information that would show a belief or hypothesis is false or incomplete if it turned up." },
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
  {"question": "Which best describes confirmation bias?", "difficulty": "easy", "options": [{"text": "Seeking, interpreting and remembering information in ways that support what you already believe", "correct": true, "explanation": "That's the APA's definition, covering several stages, not just one."}, {"text": "Deliberately lying to win an argument", "correct": false, "explanation": "The bias is usually unintentional."}, {"text": "Forgetting everything you learned recently", "correct": false, "explanation": "That's a memory issue, not this bias."}]},
  {"question": "In Wason's 2-4-6 task, why did most people fail to find the rule?", "difficulty": "medium", "options": [{"text": "They only tested sequences that fit their guess, never ones that could prove it wrong", "correct": true, "explanation": "The rule was simply 'any ascending numbers,' which confirming tests never revealed."}, {"text": "The math was too hard", "correct": false, "explanation": "The rule was very simple."}, {"text": "They weren't allowed to test any sequences", "correct": false, "explanation": "They could test as many as they liked."}]},
  {"question": "In the 1979 Lord, Ross and Lepper study, what happened when supporters and opponents of capital punishment read the same mixed evidence?", "difficulty": "hard", "options": [{"text": "Both groups became more confident in their original views", "correct": true, "explanation": "Each rated the study supporting them as stronger: biased assimilation."}, {"text": "Both groups moved to the middle", "correct": false, "explanation": "That's what you'd expect logically, but not what happened."}, {"text": "Everyone switched sides", "correct": false, "explanation": "Almost no one changed sides."}]},
  {"question": "Confirmation bias mostly causes which change in decision-making?", "difficulty": "medium", "options": [{"text": "Confidence rises faster than accuracy", "correct": true, "explanation": "You collect support, feel surer, but may not be more right."}, {"text": "People become unable to make decisions", "correct": false, "explanation": "If anything, decisions feel easier."}, {"text": "Accuracy always improves", "correct": false, "explanation": "Filtered evidence doesn't improve accuracy."}]},
  {"question": "Does being intelligent or well educated protect you from confirmation bias?", "difficulty": "medium", "options": [{"text": "No, it affects experts and laypeople alike, per Nickerson's review", "correct": true, "explanation": "Skilled reasoners can be better at building arguments for what they already believe."}, {"text": "Yes, it only affects people with little education", "correct": false, "explanation": "The research shows it across all groups, including scientists."}, {"text": "Yes, after age 30", "correct": false, "explanation": "There's no such age cutoff."}]},
  {"question": "Which question best counters confirmation bias before a decision?", "difficulty": "easy", "options": [{"text": "\"What evidence would change my mind?\"", "correct": true, "explanation": "It forces you to look for disconfirming evidence."}, {"text": "\"What else supports my choice?\"", "correct": false, "explanation": "That's the bias in action."}, {"text": "\"Who agrees with me?\"", "correct": false, "explanation": "Agreement is confirming evidence, not a test."}]},
  {"question": "A manager decides early that a new hire is weak, then notices every mistake but none of the wins. Which stage of the bias is this?", "difficulty": "easy", "options": [{"text": "Selective attention and memory, noticing and recalling what fits the belief", "correct": true, "explanation": "The same facts are filtered by the first impression."}, {"text": "Fair performance evaluation", "correct": false, "explanation": "It ignores half the evidence."}, {"text": "The placebo effect", "correct": false, "explanation": "That's a different phenomenon."}]},
  {"question": "Why does simply telling yourself to 'be objective' work poorly against confirmation bias?", "difficulty": "hard", "options": [{"text": "The bias works largely outside awareness, so structured steps like seeking disconfirmation work better", "correct": true, "explanation": "You can't directly see which evidence you skipped; a process can catch it."}, {"text": "Objectivity makes the bias worse", "correct": false, "explanation": "Intent isn't harmful; it's just not enough on its own."}, {"text": "It works perfectly well", "correct": false, "explanation": "Research on debiasing suggests intentions alone have limited effect."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Confirmation bias works at every stage of thinking: which evidence you look for, how you read unclear evidence, and what you remember afterward.",
          "The effect on decisions is that confidence rises while accuracy doesn't, because you've been collecting support instead of testing the idea.",
          "Good intentions don't fix it much. Structured habits, like asking what would change your mind, do better.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Once you believe something, your mind starts working as that belief&apos;s lawyer instead of its judge. You search for facts that back it up. When something is unclear, you read it the way that fits. Later, you remember the times you were right more clearly than the times you weren&apos;t. None of this feels like bias from the inside. It feels like noticing how much evidence there is. That&apos;s what makes it tricky: the more you&apos;ve gathered, the surer you feel, even if you never once checked whether you might be wrong.</div>}
        detailed={<div className="prose-p">The APA defines confirmation bias as the tendency to gather evidence that confirms preexisting expectations, typically by emphasizing or pursuing supporting evidence while dismissing or failing to seek contradictory evidence. Nickerson&apos;s 1998 review, the standard reference, shows it operating at three stages. <strong>Search</strong>: people favor a positive test strategy, checking cases where their hypothesis predicts a &quot;yes.&quot; In Wason&apos;s 1960 2-4-6 task, participants told that 2-4-6 fits a rule proposed ideas like &quot;goes up by two,&quot; tested 8-10-12 and 20-22-24, got &quot;yes&quot; each time, and announced the wrong rule; the actual rule was any ascending sequence, which only a disconfirming test like 1-2-3 would reveal. <strong>Interpretation</strong>: in Lord, Ross, and Lepper&apos;s 1979 study, supporters and opponents of the death penalty read the same two studies, one favoring each side, and each group rated the study that agreed with them as more convincing; both ended up more polarized. <strong>Memory</strong>: hits are recalled more readily than misses, which feeds back into the next search. The mechanism overlaps with <TermLink href="/psychology-human-behavior/what-cognitive-dissonance-actually-feels-like">cognitive dissonance</TermLink>: disconfirming evidence is uncomfortable, and filtering it out relieves that discomfort.</div>}
      />
      <FootnoteAside>Nickerson&apos;s review points out that science itself is partly a set of procedures built to counter this bias: control groups, pre-registered predictions, peer review, and replication all exist because individual researchers are as prone to seeing what they expect as anyone else.</FootnoteAside>

      <p>The bias gets stronger when you&apos;re rushed or overloaded, because checking disconfirming evidence takes effort; see <TermLink href="/psychology-human-behavior/how-cognitive-load-actually-affects-decision-making">how cognitive load affects decision-making</TermLink>. The memory stage links to <TermLink href="/psychology-human-behavior/how-memory-actually-forms-and-fades">how memory forms and fades</TermLink>, and the same pattern shapes how we consume news, covered in <TermLink href="/general-awareness-basics/understanding-media-bias">understanding media bias</TermLink>.</p>

      <QuickCheck
        question="You're told 2-4-6 fits a secret rule. You guess 'even numbers going up by 2.' Which test would teach you the most?"
        options={[
          { text: "1-2-3, a sequence your guess says should fail", correct: true, explanation: "Correct. If 1-2-3 also fits, your guess is wrong. Tests that could disprove an idea are the informative ones." },
          { text: "10-12-14, another sequence that fits your guess", correct: false, explanation: "It will get a 'yes,' but that tells you nothing new. That's the positive test strategy Wason documented." },
          { text: "100-102-104, a bigger version of your guess", correct: false, explanation: "Still a confirming test. It can't reveal that the real rule is broader." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Researching a car you&apos;ve already chosen (baseline case)</h3>
      <div className="prose-p">You&apos;ve fallen for a particular SUV. You search &quot;[model] reliability&quot; and click the glowing reviews first, skim past a forum thread about transmission failures as &quot;probably a few unlucky owners,&quot; and a week later mostly remember the praise. Each step felt reasonable. Together they turned research into reassurance. A search for &quot;[model] problems&quot; or the reliability data for the specific model year would have been the real test.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A first impression at work (interpretation)</h3>
      <div className="prose-p">A manager decides in week one that a new hire is careless. Afterward, a missed typo is &quot;typical,&quot; while a well-handled client call is &quot;a lucky day.&quot; Both events are real; the belief decides which one counts as evidence. By review time, the manager has a long, sincere list supporting the week-one impression, and a much shorter memory of the counterexamples.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: An investor&apos;s favorite stock (applied case)</h3>
      <div className="prose-p">An investor who owns a stock follows analysts who are bullish on it, reads bad earnings as &quot;temporary,&quot; and treats a price drop as a chance to buy more. Having money on the line adds motivation to the bias. A useful counter is writing down, at purchase, the specific facts that would mean the reason for owning it no longer holds, and checking against that list later rather than against how the story feels.</div>

      <QuickCheck
        question="In Example 2, what is the clearest sign of confirmation bias?"
        options={[
          { text: "The same kind of event is explained away when it contradicts the belief and counted when it fits", correct: true, explanation: "Correct. That's biased interpretation: the belief decides what the evidence means." },
          { text: "The manager noticed a typo", correct: false, explanation: "Noticing a real mistake isn't biased. Treating it differently from a real success is." },
          { text: "The manager formed a first impression at all", correct: false, explanation: "Everyone forms first impressions. The bias is in not testing it afterward." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The confirmation loop: belief shapes search, reading, and memory"
        type="flow"
        svgSrc="/diagrams/psychology-human-behavior-what-confirmation-bias-actually-does-to-decision-making-flow.svg"
        altText="A flow diagram of confirmation bias: start with a belief, search for evidence that would confirm it, interpret ambiguous evidence as support, remember the hits and forget the misses, and confidence rises whether or not accuracy does, which strengthens the starting belief next time."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking confirmation bias only means ignoring evidence you dislike.", fix: "Watch the quieter stages too: which searches you run, how you read unclear evidence, and what you remember." },
          { mistake: "Believing you're immune because you're smart or well informed.", fix: "Nickerson's review finds it in experts and scientists. Being skilled at argument can make it easier to defend a belief, not harder." },
          { mistake: "Relying on willpower to 'stay objective.'", fix: "Use a process instead: write down what would change your mind before you research, and search for the opposing case on purpose." },
        ]}
      />
      <MisconceptionCallout
        myth="Confirmation bias is something other people do, usually on purpose, when they don't want to hear the truth."
        reality={<p>The research describes an ordinary, largely unconscious habit of reasoning that everyone shows. In Lord, Ross, and Lepper&apos;s study, sincere participants on both sides read identical evidence and each came away more certain. Nobody felt biased; each felt the other side&apos;s study was simply weaker. That&apos;s why the most reliable countermeasures are procedures that go looking for disconfirming evidence, not self-assessments of how fair-minded we are.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before a big decision, write one sentence: \"I would change my mind if I learned ___.\" Then look for exactly that.",
          "Search for the opposite of your belief on purpose (\"[option] problems,\" \"case against [idea]\").",
          "Ask someone who disagrees to make their best argument, and restate it fairly before you respond.",
          "Keep a simple log of predictions and outcomes so your memory can't quietly edit out the misses.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is confirmation bias in simple terms?", answer: "It's the habit of looking for, believing, and remembering information that agrees with what you already think, while overlooking information that doesn't." },
          { question: "How does confirmation bias affect decision-making?", answer: "It makes you more confident without making you more accurate, because the evidence you gathered was filtered by the belief you were supposed to be testing." },
          { question: "What is an example of confirmation bias?", answer: "Researching only a product's positive reviews after you've decided to buy it, and dismissing negative ones as flukes." },
          { question: "Can you avoid confirmation bias completely?", answer: "No one fully escapes it, but structured habits reduce it: defining in advance what would change your mind, searching for opposing evidence, and inviting disagreement." },
          { question: "Is confirmation bias the same as cognitive dissonance?", answer: "They're related but different. Dissonance is the discomfort of holding conflicting beliefs; confirmation bias is one way people avoid that discomfort, by filtering out conflicting evidence." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
