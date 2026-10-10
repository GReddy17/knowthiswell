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
  title: "How First Impressions Actually Form So Fast",
  category: "psychology-human-behavior",
  order: 9,
  subtopic: "how-the-mind-actually-works",
  tags: ["first impressions", "how fast do first impressions form", "thin slicing", "100 milliseconds face study", "halo effect", "Willis and Todorov", "warmth and competence", "can you change a first impression"],
  date: "2026-10-03",
  updated: "2026-10-03",
  youtubeShort: false, youtubeLong: false,
  seoScore: 80, seoScoredOn: "2026-10-04",
  lastReviewed: "2026-10-03",
  excerpt: "People judge trustworthiness from a face in about a tenth of a second. Here's what those snap judgments use, how accurate they are, and how they change.",
  summary: "First impressions form in a fraction of a second because the brain reads a face or a short clip of behavior for two quick questions: is this person warm (friend or threat) and competent (able to act on it). In Willis and Todorov's 2006 study, judgments of trustworthiness, likeability, competence, aggressiveness and attractiveness made after a 100-millisecond look at a face closely matched judgments made with no time limit; longer looks mostly raised confidence rather than changing the verdict. Ambady and Rosenthal's 1993 'thin slices' research found that strangers' ratings of silent video clips of teachers, some as short as a few seconds, predicted end-of-term student evaluations. Todorov and colleagues (2005) showed that competence judgments from a one-second look at candidates' faces picked the winner in about 68.8% of 2004 U.S. Senate races. Speed is not the same as accuracy: Olivola and Todorov (2010) found that face-based guesses about people often did worse than simply using base rates. Early impressions also spill over into unrelated traits (the halo effect, Nisbett and Wilson 1977) and color how later information is read (Asch 1946). They can be revised, especially by new, clearly diagnostic information (Mann and Ferguson 2015), but they act as an anchor.",
  sources: [
    { label: "Willis & Todorov (2006) — First impressions: Making up your mind after a 100-ms exposure to a face, Psychological Science", url: "https://doi.org/10.1111/j.1467-9280.2006.01750.x" },
    { label: "Ambady & Rosenthal (1993) — Half a minute: Predicting teacher evaluations from thin slices of nonverbal behavior, JPSP", url: "https://doi.org/10.1037/0022-3514.64.3.431" },
    { label: "Todorov, Mandisodza, Goren & Hall (2005) — Inferences of competence from faces predict election outcomes, Science", url: "https://doi.org/10.1126/science.1110589" },
    { label: "Asch (1946) — Forming impressions of personality, Journal of Abnormal and Social Psychology", url: "https://doi.org/10.1037/h0055756" },
    { label: "Nisbett & Wilson (1977) — The halo effect: Evidence for unconscious alteration of judgments, JPSP", url: "https://doi.org/10.1037/0022-3514.35.4.250" },
    { label: "Olivola & Todorov (2010) — Fooled by first impressions? Reexamining the diagnostic value of appearance-based inferences, JESP", url: "https://doi.org/10.1016/j.jesp.2009.12.002" },
    { label: "Mann & Ferguson (2015) — Can we undo our first impressions? The role of reinterpretation in reversing implicit evaluations, JPSP", url: "https://doi.org/10.1037/pspa0000014" },
  ],
  seeAlso: [
    "psychology-human-behavior/what-confirmation-bias-actually-does-to-decision-making",
    "psychology-human-behavior/how-social-proof-actually-influences-behavior",
    "life-skills-etiquette/how-to-actually-build-rapport-quickly",
    "psychology-human-behavior/how-cognitive-load-actually-affects-decision-making",
    "career-study-skills/what-a-panel-interview-actually-tests",
    "psychology-human-behavior/what-emotional-intelligence-actually-means",
  ],
  glossary: [
    { term: "Thin slicing", definition: "Forming judgments about a person from a very brief sample of their behavior, such as a few seconds of silent video. Coined in research by Nalini Ambady and Robert Rosenthal." },
    { term: "Trait inference", definition: "Concluding something about a person's stable character (honest, capable, hostile) from a cue such as a face, voice or single action." },
    { term: "Halo effect", definition: "The tendency for one positive (or negative) impression of a person to spill over into judgments of their unrelated traits." },
    { term: "Primacy effect", definition: "Information received first has a stronger influence on an overall impression than the same information received later." },
    { term: "Warmth and competence", definition: "The two dimensions social psychologists find people judge first: whether someone intends good or harm, and whether they can act on those intentions." },
    { term: "Base rate", definition: "How common something is in the population overall. Ignoring base rates in favor of vivid cues like a face is a common judgment error." },
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
  {"question": "In Willis and Todorov's 2006 study, how long did people see a face before their trait judgments already matched untimed judgments closely?", "difficulty": "easy", "options": [{"text": "About 100 milliseconds", "correct": true, "explanation": "A tenth of a second was enough; more time mostly raised confidence."}, {"text": "About 7 seconds", "correct": false, "explanation": "The popular '7 seconds' figure isn't what this study measured."}, {"text": "About 30 seconds", "correct": false, "explanation": "Thirty seconds relates to a different line of thin-slice research using video."}, {"text": "About 5 minutes", "correct": false, "explanation": "The judgments formed far faster than that."}]},
  {"question": "What mostly changed when participants in the 100-ms face study were given longer looks (up to a full second)?", "difficulty": "medium", "options": [{"text": "Their confidence went up, but their judgments stayed largely the same", "correct": true, "explanation": "Extra time made people surer, not substantially different."}, {"text": "Their judgments reversed completely", "correct": false, "explanation": "The verdicts were largely stable across exposure times."}, {"text": "They stopped judging trustworthiness", "correct": false, "explanation": "They kept making the same kinds of judgments."}, {"text": "They became much more accurate about the real person", "correct": false, "explanation": "The study measured agreement with untimed judgments, not accuracy about the person."}]},
  {"question": "What is 'thin slicing' in psychology?", "difficulty": "easy", "options": [{"text": "Judging someone from a very brief sample of their behavior", "correct": true, "explanation": "The term comes from Ambady and Rosenthal's research on brief clips."}, {"text": "Dividing a long interview into equal sections", "correct": false, "explanation": "It's about very short samples, not splitting long ones."}, {"text": "A memory technique for remembering names", "correct": false, "explanation": "It's a judgment phenomenon, not a memory method."}, {"text": "Ignoring the first few seconds of a meeting", "correct": false, "explanation": "Thin slicing is the opposite: those first seconds carry a lot of weight."}]},
  {"question": "In Ambady and Rosenthal's 1993 study, what did strangers' ratings of short silent clips of teachers predict?", "difficulty": "medium", "options": [{"text": "End-of-term evaluations from the teachers' actual students", "correct": true, "explanation": "Ratings from seconds of silent video lined up with a semester's worth of student judgment."}, {"text": "The teachers' salaries", "correct": false, "explanation": "Pay was not the outcome studied."}, {"text": "How many years each teacher had taught", "correct": false, "explanation": "The outcome was student evaluations."}, {"text": "Which subject each teacher taught", "correct": false, "explanation": "The clips were silent and the outcome was evaluations."}]},
  {"question": "Todorov and colleagues (2005) found that competence judgments from a one-second look at candidates' faces predicted roughly what share of 2004 U.S. Senate race winners?", "difficulty": "hard", "options": [{"text": "About 69%", "correct": true, "explanation": "The figure was 68.8%, well above the 50% expected by chance."}, {"text": "About 50%", "correct": false, "explanation": "That would be chance level; the result was clearly higher."}, {"text": "About 99%", "correct": false, "explanation": "Faces were predictive, but nowhere near perfect."}, {"text": "About 20%", "correct": false, "explanation": "That would be worse than chance."}]},
  {"question": "Why does a fast first impression not mean an accurate one?", "difficulty": "medium", "options": [{"text": "People agree quickly on what a face signals, but that shared signal often doesn't match the person's real traits", "correct": true, "explanation": "Olivola and Todorov found face-based guesses often did worse than using base rates."}, {"text": "Fast impressions are always wrong", "correct": false, "explanation": "Thin slices of behavior can predict some outcomes; faces alone are the weaker cue."}, {"text": "The brain can't process faces in under a second", "correct": false, "explanation": "It clearly can; the issue is what it concludes."}, {"text": "Accuracy only depends on lighting", "correct": false, "explanation": "Lighting matters, but the core problem is the cue's weak link to character."}]},
  {"question": "In Nisbett and Wilson's 1977 halo study, students saw the same lecturer act warm or cold. What happened to their ratings of his accent and appearance?", "difficulty": "hard", "options": [{"text": "They rated them more appealing when he acted warm, without realizing why", "correct": true, "explanation": "Liking spilled over into unrelated traits, and students denied it had any effect."}, {"text": "Accent and appearance ratings were identical in both conditions", "correct": false, "explanation": "They differed, even though the accent and appearance did not."}, {"text": "They rated him more appealing when he acted cold", "correct": false, "explanation": "The warm version got the better ratings."}, {"text": "Students correctly said his warmth had changed their ratings", "correct": false, "explanation": "They believed the influence ran the other way, or not at all."}]},
  {"question": "Which two dimensions do people tend to judge first about a stranger?", "difficulty": "easy", "options": [{"text": "Warmth and competence", "correct": true, "explanation": "Does this person mean well, and can they act on it?"}, {"text": "Height and age", "correct": false, "explanation": "These are noticed, but the core social judgments are warmth and competence."}, {"text": "Income and education", "correct": false, "explanation": "These aren't visible at a glance and aren't the core dimensions."}, {"text": "Introversion and extraversion", "correct": false, "explanation": "Personality traits like these are inferred later, if at all."}]},
  {"question": "According to Mann and Ferguson's 2015 research, what most effectively revises a first impression?", "difficulty": "medium", "options": [{"text": "New information that clearly reframes what the earlier behavior meant", "correct": true, "explanation": "Diagnostic new information that reinterprets the first impression can reverse even gut-level evaluations."}, {"text": "Simply waiting a week", "correct": false, "explanation": "Time alone doesn't reliably reset an impression."}, {"text": "Repeating the same positive behavior once", "correct": false, "explanation": "Small additions are usually read through the first impression."}, {"text": "Nothing; first impressions can never change", "correct": false, "explanation": "They can change, but it takes the right kind of information."}]},
  {"question": "In Asch's 1946 study, swapping one word, 'warm' versus 'cold', in a list of traits did what?", "difficulty": "medium", "options": [{"text": "It changed the whole impression of the imagined person", "correct": true, "explanation": "Warmth acted as a central trait that colored the meaning of the others."}, {"text": "It had no measurable effect", "correct": false, "explanation": "The effect was large."}, {"text": "It only changed ratings of intelligence", "correct": false, "explanation": "It shifted many unrelated judgments, such as generosity and humor."}, {"text": "It made participants refuse to rate the person", "correct": false, "explanation": "Participants readily formed impressions."}]},
];

const h2 = "scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink";
const h3 = "scroll-mt-10 font-display text-xl font-bold text-ink mb-4";

export default function Post() {
  return (
    <>
      <h2 className={h2}>Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "A tenth of a second looking at a face is enough for judgments of trustworthiness and competence that closely match untimed judgments (Willis & Todorov, 2006).",
          "The brain is answering two quick questions: does this person mean well (warmth), and can they act on it (competence)?",
          "Fast is not the same as right. People agree with each other about what a face signals far more than that signal matches the person.",
          "First impressions spill into unrelated traits (the halo effect) and color how later information is read, but clearly diagnostic new information can revise them.",
        ]}
      />

      <h2 className={h2}>The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">You&apos;ve probably felt it: someone walks into a room and before they&apos;ve said a word, you already have a sense of them. That isn&apos;t imagination. Experiments show the judgment forms in about a tenth of a second, faster than a blink. Think of it like a smoke alarm rather than a fire inspector. A smoke alarm doesn&apos;t investigate; it reacts instantly to a rough cue, because for most of human history reacting late to a threat cost more than reacting wrongly. Your brain does the same with people, asking two quick questions: is this person friendly or a threat, and are they capable? It answers from whatever is available, mostly the face, posture and tone of voice. Waiting longer usually doesn&apos;t change the answer; it just makes you more sure of it. The catch is that a smoke alarm also goes off for burnt toast. Snap judgments are consistent (most people reach the same one), but consistent is not the same as correct.</div>}
        detailed={<div className="prose-p">In Willis and Todorov&apos;s 2006 experiments, participants rated faces on attractiveness, likeability, trustworthiness, competence and aggressiveness after 100, 500 or 1,000 milliseconds. Ratings at 100 ms already correlated strongly with ratings made by a separate group with no time limit, and trustworthiness was the most tightly matched. Longer exposures mainly increased confidence. A related line of work on <strong>thin slicing</strong> by Nalini Ambady and Robert Rosenthal found that strangers&apos; ratings of silent clips of teachers, cut down to a few seconds, predicted the teachers&apos; end-of-term student evaluations. Social psychologists such as Susan Fiske describe the core of these judgments as two dimensions, <strong>warmth</strong> and <strong>competence</strong>. The judgments are then sticky. Solomon Asch showed in 1946 that changing one word (&quot;warm&quot; to &quot;cold&quot;) in a list of traits changed the whole impression, and that traits heard first weighed more (a <strong>primacy effect</strong>). Nisbett and Wilson&apos;s 1977 study showed the <strong>halo effect</strong> operating without awareness. The weak point is validity: Olivola and Todorov (2010) found that people guessing facts about others from their faces often did worse than if they had ignored the face and used the <strong>base rate</strong>. Like <TermLink href="/psychology-human-behavior/what-confirmation-bias-actually-does-to-decision-making">confirmation bias</TermLink>, the first impression then shapes which later evidence feels relevant.</div>}
      />
      <FootnoteAside>The speed has a plausible neural basis. Brain-imaging studies have linked activity in the amygdala, a region involved in detecting threat and relevance, to how untrustworthy a face looks, even when people aren&apos;t asked to judge trust. That fits the &quot;smoke alarm&quot; idea, though imaging alone can&apos;t show that one region does the whole job.</FootnoteAside>

      <QuickCheck
        question="In the 100-millisecond face studies, what did giving people more viewing time mostly change?"
        options={[
          { text: "How confident they felt, not what they concluded", correct: true, explanation: "Correct. Judgments at 100 ms closely matched longer looks; confidence was what grew." },
          { text: "Their conclusion flipped in most cases", correct: false, explanation: "The verdicts were largely stable across exposure times." },
          { text: "They became accurate about the person's real character", correct: false, explanation: "The study measured agreement, not accuracy about the real person." },
        ]}
      />

      <h2 className={h2}>Worked examples</h2>

      <h3 className={h3}>Example 1: The job interview that was decided at the handshake (baseline case)</h3>
      <div className="prose-p">An interviewer meets two candidates with near-identical résumés. One smiles, makes eye contact and speaks clearly; the other is tense and looks at the floor. Within seconds, the interviewer has a warmth and competence read on each. For the next 40 minutes, the same answer (&quot;I like to double-check my work&quot;) sounds conscientious from the first candidate and anxious from the second. Nothing about the answer changed; the frame did. This is Asch&apos;s finding in a modern setting: an early central trait reorganizes how everything after it is understood. It&apos;s also why structured interviews, where every candidate gets the same questions scored against a written rubric, exist.</div>

      <h3 className={h3}>Example 2: The trustworthy-looking face that isn&apos;t (edge case)</h3>
      <div className="prose-p">Faces that look slightly happy even at rest, with upturned mouth corners and raised brows, are rated as more trustworthy, while faces that look slightly angry at rest get the opposite rating. Those features are mostly anatomy, not character. When Olivola and Todorov tested whether people could use faces to guess real facts about strangers, using the face often made guesses worse than ignoring it and going with how common each answer was overall. So the same speed that makes first impressions useful for spotting obvious hostility makes them misleading for subtle traits like honesty, where a face is a poor cue. Agreement among observers is high; accuracy is the weak link.</div>

      <h3 className={h3}>Example 3: A one-second look that predicts elections (applied case)</h3>
      <div className="prose-p">Todorov and colleagues showed people pairs of U.S. congressional candidates&apos; faces for about one second and asked which looked more competent. Participants didn&apos;t know the candidates. Those snap competence ratings picked the actual winner in 68.8% of the 2004 Senate races, against 50% by chance, and tracked margins of victory too. That doesn&apos;t mean voters chose on looks alone; it means a fast appearance-based competence signal is strong enough to show up in real outcomes. The applied lesson for any of us judging or being judged: the first second leaves a mark, so it&apos;s worth controlling what you can (clarity, eye contact, a calm start) and deliberately slowing down when you&apos;re the one deciding.</div>

      <QuickCheck
        question="Snap competence ratings of candidates' faces picked 68.8% of 2004 Senate winners. What's the most accurate reading?"
        options={[
          { text: "A fast appearance-based signal is strong enough to show up in real outcomes, though it isn't the only factor", correct: true, explanation: "Correct. It's well above chance but far from a full explanation of how people vote." },
          { text: "Voters choose purely on looks", correct: false, explanation: "The study shows an association, not that faces are the only factor." },
          { text: "Competent-looking candidates are actually more competent", correct: false, explanation: "The study measured perceived competence, not real ability." },
        ]}
      />

      <h2 className={h2}>How it works (visual)</h2>
      <DiagramBlock
        title="How a first impression forms, and where it can be revised"
        type="flow"
        svgSrc="/diagrams/psychology-human-behavior-how-first-impressions-actually-form-so-fast-flow.svg"
        altText="A flow diagram. Step 1, cues arrive in about 100 milliseconds: face, posture, voice and clothing. Step 2, two quick questions: warmth (friend or threat?) and competence (able to act?). Step 3, a snap verdict forms, and longer looks mostly raise confidence. Step 4, the halo spreads to unrelated traits. Step 5, later information is read through that frame. A dashed loop back from step 5 to step 3 is labeled: clearly diagnostic new information can revise the verdict."
      />
      <p>The diagram shows why first impressions feel so certain. The verdict arrives early, gets more confident with time, and then filters what comes next. The only reliable exit is the loop: new information strong enough to reframe what the first cues meant.</p>

      <h2 className={h2}>Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating a gut feeling about someone as evidence about their character.", fix: "Treat it as a hypothesis. Faces are a weak cue for traits like honesty; behavior over time is a stronger one." },
          { mistake: "Quoting '7 seconds' or '55% body language' as scientific rules.", fix: "The measured time is closer to a tenth of a second for faces, and the 7-38-55 figures come from narrow studies of single words, not all communication." },
          { mistake: "Assuming you'd notice if a first impression were biasing you.", fix: "Nisbett and Wilson's students didn't. Use written criteria before meeting people you'll evaluate." },
          { mistake: "Trying to fix a bad first impression with one small gesture.", fix: "Small acts get read through the old frame. Clear, new information that reinterprets the first moment works better." },
          { mistake: "Ignoring the first minute because 'the content will speak for itself'.", fix: "The opening frames how the content is heard. A clear, calm start is worth preparing." },
        ]}
      />
      <MisconceptionCallout
        myth="People who are good judges of character can read someone accurately within seconds."
        reality={<p>People are fast and consistent, not reliably accurate. Observers agree strongly with each other about what a face signals, which feels like accuracy. But tests against real facts about the people show face-based judgments are often no better, and sometimes worse, than guessing from base rates. Thin slices of <strong>behavior</strong> (how someone actually teaches or talks) carry more real information than a still face. Reading other people&apos;s emotions accurately, not just quickly, is a separate and measurable skill; see <TermLink href="/psychology-human-behavior/what-emotional-intelligence-actually-means">what emotional intelligence actually means</TermLink>.</p>}
      />

      <h2 className={h2}>What to do next</h2>
      <ActionChecklist
        items={[
          "Before an interview, date or meeting, prepare your first 30 seconds: a clear greeting, eye contact and a calm opening line.",
          "When you're the one judging, write your criteria down before you meet people, then score against them.",
          "Notice your instant read on someone and label it 'first impression', not 'fact'.",
          "Look for one piece of behavior that would change your mind, then actually check for it.",
          "If you made a bad first impression, address it directly with new information rather than hoping it fades.",
        ]}
      />

      <h2 className={h2}>FAQ</h2>
      <FAQBlock
        items={[
          { question: "How long does it take to form a first impression?", answer: "Research on faces suggests about 100 milliseconds, a tenth of a second. In Willis and Todorov's 2006 study, judgments at that speed closely matched judgments made with no time limit, and extra time mainly increased confidence." },
          { question: "Are first impressions accurate?", answer: "Partly. Brief samples of real behavior can predict some outcomes, such as student ratings of teachers. Judgments from faces alone are consistent across observers but often inaccurate about character." },
          { question: "Can you change a bad first impression?", answer: "Yes, but it takes more than one small gesture. Mann and Ferguson's research found that new information which clearly reinterprets the earlier behavior can reverse even gut-level impressions." },
          { question: "What is the halo effect?", answer: "It's when one good impression of a person spills over into judgments of unrelated traits. In a classic 1977 study, students who saw a lecturer act warm also rated his accent and appearance more favorably, without realizing why." },
          { question: "Is the 7-38-55 rule about body language true?", answer: "Not as a general rule. Albert Mehrabian's figures came from studies of single words spoken with tones that contradicted them, about feelings and attitudes. They don't mean 93% of all communication is nonverbal." },
        ]}
      />

      <h2 className={h2}>Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className={h2}>See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
