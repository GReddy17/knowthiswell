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
  title: "What Resting Heart Rate Actually Reveals About Fitness",
  category: "health-wellness-deep-dive",
  order: 4,
  subtopic: "sleep-stress-and-recovery",
  tags: ["resting heart rate", "cardiovascular fitness", "aerobic exercise", "stroke volume", "heart health"],
  date: "2026-09-25",
  updated: "2026-09-25",
  lastReviewed: "2026-09-25",
  excerpt: "A lower resting heart rate often reflects a heart that pumps more blood per beat, a common result of aerobic training. But it's also shaped by sleep, stress, illness, medications, and genes, so the trend over weeks says more than any single number.",
  summary: "Resting heart rate, the number of heartbeats per minute while at complete rest, normally ranges from 60 to 100 beats per minute for adults, per the American Heart Association and MedlinePlus, and well-trained athletes often have rates closer to 40. Regular aerobic exercise tends to lower it because the heart adapts to pump more blood with each beat (higher stroke volume) and resting parasympathetic tone increases, so fewer beats are needed to supply the same blood flow. A resting rate that stays higher than usual can also reflect poor sleep, stress, dehydration, illness, caffeine, or overtraining, while some medications such as beta blockers lower it, and Harvard Health notes that higher resting rates have been associated with greater cardiovascular risk in population studies. The most useful signal is an individual's own trend measured consistently over time, not comparison with other people; a low rate accompanied by dizziness or fainting, or a rate persistently above 100, warrants medical evaluation. This article is general educational information, not medical advice.",
  sources: [
    { label: "American Heart Association — All About Heart Rate (Pulse)", url: "https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure/all-about-heart-rate-pulse" },
    { label: "MedlinePlus (U.S. National Library of Medicine) — Pulse", url: "https://medlineplus.gov/ency/article/003399.htm" },
    { label: "Harvard Health Publishing — Resting heart rate can reflect current, future health", url: "https://www.health.harvard.edu/blog/resting-heart-rate-can-reflect-current-future-health-201606179806" },
  ],
  seeAlso: [
    "technology-basics/how-fitness-trackers-measure-steps-and-heart-rate",
    "health-wellness-deep-dive/what-cortisol-actually-does-to-the-body-under-stress",
    "health-wellness-deep-dive/how-sleep-cycles-actually-affect-recovery",
    "general-science-facts/blood-and-the-circulatory-system-in-depth",
  ],
  glossary: [
    { term: "Resting heart rate", definition: "The number of times the heart beats per minute while you're fully at rest, best measured after waking and before getting up." },
    { term: "Stroke volume", definition: "The amount of blood the heart's left ventricle pumps out with each beat. Aerobic training tends to increase it." },
    { term: "Cardiac output", definition: "The total blood the heart pumps per minute: heart rate multiplied by stroke volume." },
    { term: "Bradycardia", definition: "A resting heart rate below 60 beats per minute. It's normal in many fit people but can signal a problem if it comes with symptoms like dizziness or fainting." },
    { term: "Tachycardia", definition: "A resting heart rate above 100 beats per minute. It can be temporary (fever, caffeine, anxiety) or a sign of a condition worth checking." },
    { term: "Parasympathetic tone", definition: "The steady 'rest and digest' influence of the nervous system, carried largely by the vagus nerve, which slows the heart at rest." },
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
  {"question": "What is the typical normal resting heart rate range for adults, per the American Heart Association?", "difficulty": "easy", "options": [{"text": "60 to 100 beats per minute", "correct": true, "explanation": "Fit people can be lower and still healthy."}, {"text": "20 to 40 beats per minute", "correct": false, "explanation": "Far below normal for most adults."}, {"text": "100 to 140 beats per minute", "correct": false, "explanation": "Above 100 at rest is considered tachycardia."}]},
  {"question": "When is the best time to measure resting heart rate?", "difficulty": "easy", "options": [{"text": "After waking, before getting out of bed", "correct": true, "explanation": "You're as rested as you'll be all day, with no caffeine or activity yet."}, {"text": "Right after a workout", "correct": false, "explanation": "Your heart rate is still elevated then."}, {"text": "After your morning coffee", "correct": false, "explanation": "Caffeine can raise it."}]},
  {"question": "Why does aerobic training tend to lower resting heart rate?", "difficulty": "medium", "options": [{"text": "The heart pumps more blood per beat, so fewer beats are needed at rest", "correct": true, "explanation": "Higher stroke volume plus stronger parasympathetic tone."}, {"text": "Exercise damages the heart's pacemaker", "correct": false, "explanation": "Normal training adapts the heart; it doesn't damage it."}, {"text": "The body needs less oxygen after training", "correct": false, "explanation": "Resting oxygen need stays about the same; delivery gets more efficient."}]},
  {"question": "Cardiac output equals which of the following?", "difficulty": "medium", "options": [{"text": "Heart rate times stroke volume", "correct": true, "explanation": "So if stroke volume rises, heart rate can fall for the same output."}, {"text": "Heart rate plus blood pressure", "correct": false, "explanation": "Different measures."}, {"text": "Stroke volume divided by weight", "correct": false, "explanation": "Not the definition."}]},
  {"question": "Your resting heart rate is 8 beats higher than usual for three mornings in a row. Which is a plausible cause?", "difficulty": "medium", "options": [{"text": "Poor sleep, stress, illness coming on, or overtraining", "correct": true, "explanation": "Many things besides fitness raise resting rate."}, {"text": "You've suddenly become much fitter", "correct": false, "explanation": "Fitness gains tend to lower it, slowly."}, {"text": "It's impossible for resting rate to change", "correct": false, "explanation": "It varies day to day."}]},
  {"question": "A person's resting heart rate is 48 and they feel dizzy and faint at times. What's the right read?", "difficulty": "hard", "options": [{"text": "A low rate with symptoms deserves a medical check", "correct": true, "explanation": "Low is fine in fit, symptom-free people; symptoms change that."}, {"text": "It proves they're extremely fit", "correct": false, "explanation": "Symptoms suggest it may not be a fitness effect."}, {"text": "Nothing to worry about, since low is always good", "correct": false, "explanation": "Low rates can reflect conduction problems or medication effects."}]},
  {"question": "Which medication type is well known for lowering heart rate?", "difficulty": "hard", "options": [{"text": "Beta blockers", "correct": true, "explanation": "The AHA notes they slow the pulse, so readings on them don't reflect fitness."}, {"text": "Antibiotics", "correct": false, "explanation": "Not typically known for this effect."}, {"text": "Vitamin C", "correct": false, "explanation": "No meaningful effect on heart rate."}]},
  {"question": "What's the most useful way to use resting heart rate as a fitness signal?", "difficulty": "easy", "options": [{"text": "Track your own trend over weeks, measured the same way", "correct": true, "explanation": "Individual baselines vary widely; the trend is the signal."}, {"text": "Compare your number with a friend's", "correct": false, "explanation": "Genetics and age make comparisons unreliable."}, {"text": "Check it once and never again", "correct": false, "explanation": "One reading is noisy."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Normal adult resting heart rate is 60 to 100 beats per minute. Well-trained athletes are often closer to 40, per the American Heart Association.",
          "Aerobic training lowers it mainly because the heart pumps more blood per beat, so it needs fewer beats to do the same job at rest.",
          "Sleep, stress, illness, caffeine, medications, and genes all move it too, so your own trend over weeks tells you more than one reading or a comparison with anyone else.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">At rest, your body needs a fairly steady flow of blood. Your heart can deliver it with many small pumps or fewer bigger ones. Regular cardio, like brisk walking, running, cycling, or swimming, trains the heart to push out more blood with each squeeze. So when you&apos;re resting, it can beat less often and still keep up. That&apos;s why a resting heart rate drifting down over months of training is a good sign. But lots of other things also nudge it: a bad night&apos;s sleep, a stressful week, a cold coming on, or coffee. So the number is a helpful clue, not a fitness score by itself.</div>}
        detailed={<div className="prose-p">Blood flow per minute (cardiac output) equals heart rate times stroke volume. At rest, the body&apos;s demand is roughly constant, so any increase in stroke volume allows a lower heart rate. Endurance training produces exactly that: the left ventricle enlarges and fills more completely, and blood volume rises, so each beat ejects more blood. Training also increases resting parasympathetic (vagal) tone, which slows the heart&apos;s built-in pacemaker. The American Heart Association gives 60 to 100 beats per minute as the normal adult range and notes that very fit people can sit near 40. MedlinePlus describes how to measure pulse and lists common influences: activity, fitness, air temperature, body position, emotions, body size, and medications, with beta blockers a notable example that lowers rate. Harvard Health summarizes population research linking higher resting rates, especially toward the upper end of normal, with higher cardiovascular risk, while cautioning that it&apos;s one marker among many. Short-term rises above your baseline often reflect stress hormones such as <TermLink href="/health-wellness-deep-dive/what-cortisol-actually-does-to-the-body-under-stress">cortisol</TermLink>, incomplete <TermLink href="/health-wellness-deep-dive/how-sleep-cycles-actually-affect-recovery">recovery from poor sleep</TermLink>, dehydration, or early illness.</div>}
      />
      <FootnoteAside>Genes matter a lot. Two equally fit people can have resting rates 15 or more beats apart. That&apos;s why comparing your number with a friend&apos;s tells you little, while comparing your number with your own number three months ago can tell you a lot.</FootnoteAside>

      <p>Wearables estimate resting heart rate automatically, usually from optical sensors on the wrist, and are generally decent at resting values; <TermLink href="/technology-basics/how-fitness-trackers-measure-steps-and-heart-rate">how fitness trackers measure heart rate</TermLink> explains where they&apos;re reliable and where they aren&apos;t. For the plumbing behind all this, see <TermLink href="/general-science-facts/blood-and-the-circulatory-system-in-depth">the circulatory system in depth</TermLink>.</p>

      <QuickCheck
        question="After six months of regular cycling, someone's resting heart rate drops from 74 to 64. What's the most likely explanation?"
        options={[
          { text: "Their heart now pumps more blood per beat, so fewer beats are needed at rest", correct: true, explanation: "Correct. Higher stroke volume, plus stronger parasympathetic tone, lets the same resting blood flow come from fewer beats." },
          { text: "Their body now needs much less blood at rest", correct: false, explanation: "Resting demand stays about the same. Delivery became more efficient." },
          { text: "Their heart has become weaker", correct: false, explanation: "Training-related drops come from a stronger, more efficient heart, not a weaker one." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Measuring it properly (baseline case)</h3>
      <div className="prose-p">Right after waking, before getting up or having coffee, place two fingers on the inside of your wrist below the thumb, as MedlinePlus describes. Count the beats for 30 seconds and double it: 34 beats means 68 per minute. Do this for a week and average the results. One reading can be off by several beats; a weekly average is a baseline you can actually track.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The unexplained jump (variation)</h3>
      <div className="prose-p">A runner&apos;s morning average has been 56 for months. Over three days it reads 63, 64, and 62. Their fitness hasn&apos;t collapsed in three days. Common explanations are a coming cold, poor sleep, a very hard training block, alcohol, or a stressful week. Many coaches treat a sustained rise of several beats above baseline as a cue to take an easier day, which is exactly the kind of personal-trend use the number is good for.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Low for different reasons (applied case)</h3>
      <div className="prose-p">Two people both read 50 beats per minute. One is a marathoner who feels great: a classic training effect. The other rarely exercises, recently started a beta blocker for blood pressure, and has had lightheaded spells. Same number, different meaning. The AHA notes that a slow rate with symptoms like dizziness, fatigue, or fainting is a reason to see a clinician, whatever someone&apos;s fitness level.</div>

      <QuickCheck
        question="In Example 2, what's the most sensible reading of the runner's higher numbers?"
        options={[
          { text: "A short-term stress signal, such as illness, poor sleep, or heavy training, worth an easier day", correct: true, explanation: "Correct. Fitness changes slowly; a sudden rise usually reflects something temporary." },
          { text: "Proof that they've lost all their fitness", correct: false, explanation: "Fitness doesn't disappear in three days." },
          { text: "A measurement error to ignore", correct: false, explanation: "Three consistent readings well above baseline are a real signal." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Why aerobic training tends to lower resting heart rate"
        type="flow"
        svgSrc="/diagrams/health-wellness-deep-dive-what-resting-heart-rate-actually-reveals-about-fitness-flow.svg"
        altText="A flow diagram: regular aerobic training; the heart muscle adapts so the left ventricle fills and pumps more; more blood is pumped per beat, a higher stroke volume; resting blood-flow need stays about the same; so fewer beats per minute are needed at rest and resting heart rate drops."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Comparing your resting heart rate with someone else's to judge fitness.", fix: "Compare with your own baseline over weeks. Genes and age shift the number a lot between people." },
          { mistake: "Measuring at random times of day.", fix: "Measure at the same time, ideally right after waking, and average several days." },
          { mistake: "Assuming a lower number is always better.", fix: "Low is good only if you feel well. A low rate with dizziness or fainting, or a rate persistently above 100, is worth a medical check." },
        ]}
      />
      <MisconceptionCallout
        myth="Resting heart rate is a direct measure of how fit you are: the lower the number, the fitter the person."
        reality={<p>It&apos;s a useful but indirect signal. Aerobic training does tend to lower it, which is why many athletes sit near 40 per the American Heart Association. But genes, age, sleep, stress, hydration, caffeine, illness, and medications like beta blockers all shift it too. Two people with the same number can be very differently fit. The reliable use is watching your own trend under consistent conditions, alongside how you actually feel and perform.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Measure your resting heart rate on waking for 7 days and write down the average as your baseline.",
          "Recheck the weekly average once a month if you're starting a cardio routine.",
          "Treat a sustained rise of several beats above your baseline as a cue to look at sleep, stress, and recovery.",
          "See a clinician if your resting rate is persistently above 100, or low with dizziness, fainting, chest pain, or unusual fatigue. This article isn't medical advice.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does resting heart rate say about fitness?", answer: "A resting rate that falls over months of aerobic training usually reflects a heart pumping more blood per beat. But many other factors affect it, so it's a clue, not a complete measure." },
          { question: "What is a good resting heart rate?", answer: "For adults, 60 to 100 beats per minute is considered normal. Many fit people are in the 40s or 50s. What matters most is your trend and whether you have symptoms." },
          { question: "Why is my resting heart rate higher than usual?", answer: "Common reasons include poor sleep, stress, dehydration, alcohol, caffeine, hot weather, a coming illness, or hard training without enough recovery." },
          { question: "How long does it take for exercise to lower resting heart rate?", answer: "It varies, but noticeable changes usually take weeks to a few months of consistent aerobic exercise, and genetics affect how much it drops." },
          { question: "Are fitness trackers accurate for resting heart rate?", answer: "Wrist trackers are generally reasonable at rest, when movement is minimal, but they can drift. A manual count now and then is a good cross-check." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
