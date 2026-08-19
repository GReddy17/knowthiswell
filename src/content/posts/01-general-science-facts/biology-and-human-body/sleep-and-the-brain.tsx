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
  title: "Sleep & the Brain: What Happens While You're Asleep",
  category: "general-science-facts",
  order: 24,
  subtopic: "biology-and-human-body",
  tags: [
    "sleep",
    "sleep cycles",
    "brain",
    "REM sleep",
    "circadian rhythm",
    "sleep science",
    "biology basics",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How the brain cycles through light, deep, and REM sleep roughly every 90 minutes, and why the circadian rhythm governs when you feel sleepy or alert.",
  summary: "Sleep is not a passive shutdown but an active cycling process, moving the brain through light sleep, deep sleep, and REM sleep roughly every 90 minutes, timed by an internal circadian clock.",
  sources: [
    { label: "NIH National Institute of Neurological Disorders and Stroke — Brain Basics: Understanding Sleep", url: "https://www.ninds.nih.gov/health-information/public-education/brain-basics/brain-basics-understanding-sleep" },
    { label: "CDC — Sleep and Sleep Disorders", url: "https://www.cdc.gov/sleep/index.html" },
    { label: "NIH MedlinePlus — Sleep", url: "https://medlineplus.gov/sleep.html" },
    { label: "Encyclopaedia Britannica — Sleep (Physiology)", url: "https://www.britannica.com/science/sleep-physiology" },
  ],
  seeAlso: [
    "general-science-facts/human-body-systems",
    "general-science-facts/the-five-senses",
    "general-science-facts/cells-and-genetics-basics",
  ],
  glossary: [
    { term: "NREM sleep", definition: "Non-rapid eye movement sleep, made up of progressively deeper stages (N1, N2, N3), including deep, slow-wave sleep." },
    { term: "REM sleep", definition: "Rapid eye movement sleep, marked by high brain activity, temporary muscle paralysis, and the most vivid dreaming." },
    { term: "Sleep cycle", definition: "One full pass through the sleep stages, from light sleep through deep sleep to REM sleep, typically lasting 90-110 minutes and repeating 4-6 times per night." },
    { term: "Circadian rhythm", definition: "An internal, roughly 24-hour biological clock that regulates the sleep-wake cycle and other body processes, synchronized mainly by light exposure." },
    { term: "Suprachiasmatic nucleus", definition: "A small region of the brain's hypothalamus that acts as the body's master circadian clock." },
    { term: "Melatonin", definition: "A hormone released by the brain in response to darkness that helps signal to the body that it's time to sleep." },
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
          "Sleep isn't a single passive state — the brain cycles through distinct stages (light sleep, deep/slow-wave sleep, and REM sleep) roughly every 90 minutes throughout the night.",
          "Deep sleep and REM sleep serve different, measurable roles: deep sleep supports physical restoration and memory consolidation, while REM sleep supports emotional processing and produces most vivid dreaming.",
          "Sleep timing is set by the circadian rhythm, an internal roughly 24-hour clock run by the brain's suprachiasmatic nucleus and synchronized mainly by light exposure — not simply by how tired you feel.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">While you sleep, your brain moves through repeating stages rather than staying in one uniform state. It cycles between lighter sleep, deep sleep, and <TermLink href="/general-science-facts/sleep-and-the-brain">REM sleep</TermLink> (the stage most associated with vivid dreaming), completing one full cycle roughly every 90 minutes and repeating several times a night. The CDC recommends most adults get 7-9 hours of sleep per night, which is enough time to pass through several complete cycles — each one giving the brain and body a chance to do different kinds of restorative work.</div>}
        detailed={<div className="prose-p">Sleep stages fall into two broad categories: <TermLink href="/general-science-facts/sleep-and-the-brain">NREM sleep</TermLink> (non-rapid eye movement) and REM sleep. NREM has three stages — N1 is a brief, light transition into sleep; N2 makes up the largest share of total sleep time and includes brief bursts of brain activity called sleep spindles; N3 is deep, slow-wave sleep, the hardest stage to wake someone from, associated with physical restoration and growth hormone release. REM sleep follows, marked by rapid eye movement, brain activity that looks almost as active as being awake, and temporary paralysis of most voluntary muscles (muscle atonia) — a mechanism that normally prevents the body from physically acting out dreams. One full <TermLink href="/general-science-facts/sleep-and-the-brain">sleep cycle</TermLink> through these stages takes about 90-110 minutes, and a typical night includes 4-6 cycles, with deep sleep concentrated earlier in the night and REM sleep becoming longer and more frequent in later cycles. All of this is timed by the <TermLink href="/general-science-facts/sleep-and-the-brain">circadian rhythm</TermLink>, an internal roughly 24-hour clock coordinated by the <TermLink href="/general-science-facts/sleep-and-the-brain">suprachiasmatic nucleus</TermLink> in the hypothalamus, which responds to light exposure and triggers the release of <TermLink href="/general-science-facts/sleep-and-the-brain">melatonin</TermLink> as darkness falls to help initiate sleepiness.</div>}
      />
      <FootnoteAside>During REM sleep, brain electrical activity closely resembles being awake — yet the body is nearly paralyzed at the same time, a documented mechanism called muscle atonia that normally prevents sleepers from physically acting out what&apos;s happening in a dream.</FootnoteAside>

      <p>
      Knowing the stages exist is one thing; seeing how many complete cycles actually fit into a real night&apos;s sleep — and what happens when that math gets cut short — is where the concept becomes practical.
      </p>

      <QuickCheck
        question="During REM sleep, brain activity looks almost as high as when a person is awake, yet their body is mostly still and unmoving. What explains this?"
        options={[
          { text: "The brain is actually much less active during REM sleep than during light sleep", correct: false, explanation: "REM sleep is specifically characterized by brain activity that closely resembles wakefulness — it's one of the most electrically active stages of sleep, not the least." },
          { text: "A temporary muscle paralysis (atonia) occurs during REM sleep, which normally prevents the body from acting out dream activity even while the brain is highly active", correct: true, explanation: "Correct. Muscle atonia during REM sleep keeps most voluntary muscles temporarily paralyzed, decoupling high brain activity and vivid dreaming from actual physical movement." },
          { text: "The person is actually briefly awake during each REM period", correct: false, explanation: "REM is a distinct sleep stage, not a waking state — brain activity resembles wakefulness, but the person remains asleep, with muscle atonia and other sleep-specific features present." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: How many sleep cycles fit into 8 hours (baseline case)</h3>
      <div className="prose-p">
      Using an average sleep cycle length of 90 minutes: 8 hours × 60 minutes = 480 minutes in bed; 480 ÷ 90 ≈ <strong>5.3 sleep cycles</strong>. This lines up with the commonly cited figure of 4-6 complete cycles in a typical night&apos;s sleep. Because 5.3 isn&apos;t a whole number, an 8-hour sleep period ends partway through a cycle — which is one reason sleep researchers sometimes suggest timing wake-ups to land near the end of a cycle (closer to a whole-number multiple of ~90 minutes) rather than in the middle of deep sleep, when waking tends to feel groggier.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A short, 5-hour night and disproportionate REM loss (edge case / variation)</h3>
      <div className="prose-p">
      REM sleep isn&apos;t distributed evenly across the night — it&apos;s concentrated in the later sleep cycles, with each REM period generally getting longer as the night goes on, while deep, slow-wave sleep is concentrated earlier. This means cutting a night short doesn&apos;t just proportionally shrink every stage; a 5-hour night (roughly 3 cycles instead of 5) tends to lose a disproportionate share of REM sleep specifically, since much of it was scheduled to happen in the cycles that got cut off. This is a documented, non-obvious edge case: two nights with the same total hours lost can affect REM and deep sleep very differently depending on <em>when</em> in the night the sleep was cut short — going to bed late but waking at a normal time cuts mostly into REM-heavy later cycles, while falling asleep on time but waking unusually early cuts less into REM specifically.
      </div>

      <QuickCheck
        question="A person who normally sleeps 8 hours instead gets only 5 hours by going to bed 3 hours later than usual but waking at their normal time. Which sleep stage is disproportionately affected?"
        options={[
          { text: "Deep, slow-wave sleep, since it happens throughout the entire night equally", correct: false, explanation: "Deep sleep is actually concentrated earlier in the night, so a late bedtime with a normal wake time is more likely to preserve deep sleep than to disproportionately cut it." },
          { text: "REM sleep, because it's concentrated in the later sleep cycles that get cut off when bedtime is delayed but wake time stays the same", correct: true, explanation: "Correct. REM sleep periods lengthen and concentrate later in the night — a delayed bedtime with a fixed wake time disproportionately removes those later, REM-heavy cycles." },
          { text: "All sleep stages are lost in exactly equal proportion regardless of when the sleep occurs", correct: false, explanation: "Sleep stages aren't evenly distributed through the night — deep sleep concentrates earlier and REM sleep concentrates later, so which stage is cut depends on when the sleep period was shortened." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Jet lag and circadian misalignment (real-world / applied case)</h3>
      <p>
      Jet lag happens when travel moves a person faster across time zones than their circadian rhythm can adjust. The suprachiasmatic nucleus resets its internal clock mainly based on light exposure, and that resetting process happens gradually — commonly estimated at roughly one time zone per day for many travelers — not instantly. Arriving somewhere 8 hours ahead of the departure time zone means the internal clock is still signaling &quot;night&quot; hours after the local clock says it&apos;s daytime, producing the fatigue, poor concentration, and disrupted sleep timing associated with jet lag. Shift workers experience a related, often more persistent version of this same mechanism, since work schedules can keep pulling their circadian rhythm out of sync with natural light-dark cycles.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Sleep stages across a typical night (a hypnogram)"
        type="detail"
        svgSrc="/diagrams/general-science-facts-sleep-and-the-brain-hypnogram.svg"
        altText="A chart with time along the horizontal axis (roughly 8 hours) and sleep stage depth along the vertical axis, showing the sleeper descending from awake through light NREM sleep into deep slow-wave sleep, then rising back up through lighter stages into a REM period, repeating this cycle about 5 times, with deep sleep segments largest early in the night and REM segments growing longer in each successive cycle later in the night."
      />
      <p>
      Trace the line from left to right and notice two patterns: the deep, slow-wave dips are tallest (deepest) in the first one or two cycles and shrink in later cycles, while the REM segments — marked separately — start short and get progressively longer toward morning. This is why a night cut short from the end (an early wake-up) disproportionately removes REM sleep, while a night cut short from the beginning (a late bedtime with a fixed wake time) can still preserve a reasonable amount of deep sleep if enough hours remain.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking sleep is one uniform, passive state from lights-out to waking up.", fix: "Sleep is an active, cycling process — the brain moves through distinct light, deep, and REM stages roughly every 90 minutes, each doing different restorative work." },
          { mistake: "Believing a couple of long weekend 'catch-up' sleep sessions fully reverses a week of sleep debt.", fix: "Extra weekend sleep can help but doesn't fully restore the specific functions tied to lost cycles on the nights they were missed — consistent nightly sleep duration is a stronger long-term strategy than occasional catch-up sleep." },
          { mistake: "Assuming melatonin supplements work like a general sedative that forces sleep.", fix: "Melatonin primarily signals timing to the circadian system rather than directly sedating the body — it's more useful for shifting when sleepiness occurs (like with jet lag) than for treating sleep difficulty unrelated to timing." },
        ]}
      />
      <MisconceptionCallout
        myth="The brain 'shuts off' or goes dormant during sleep."
        reality={<p>The brain stays highly active throughout sleep — during REM sleep specifically, electrical brain activity closely resembles the waking state, and even deep NREM sleep involves organized, purposeful activity rather than a general shutdown. Sleep is better described as the brain switching into different, structured processing modes — supporting memory consolidation, waste clearance, and emotional processing — than as the brain simply powering down for the night.</p>}
      />

      <QuickCheck
        question="An EEG (brain activity recording) taken during REM sleep looks almost as active as one taken while a person is awake. What does this tell us about the common idea that the brain 'shuts off' during sleep?"
        options={[
          { text: "It confirms the idea — the brain is essentially inactive during sleep except for brief awake-like spikes", correct: false, explanation: "High brain activity during REM sleep is a sustained, defining feature of that stage, not a brief anomaly — it directly contradicts the idea that the brain is generally inactive during sleep." },
          { text: "It contradicts the idea — the brain remains highly active throughout sleep, including near-wakeful activity levels during REM, rather than shutting down", correct: true, explanation: "Correct. Sleep involves the brain shifting into different structured activity patterns, not powering off — REM sleep in particular shows activity levels close to being awake." },
          { text: "It's unrelated — brain activity during sleep has no connection to whether the brain is 'shut off'", correct: false, explanation: "Brain activity level (measured by EEG) is exactly the relevant evidence for whether the brain is 'shut off' during sleep — and it shows the brain clearly isn't inactive." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate the number of full sleep cycles in a night"
        fields={[
          { key: "hoursInBed", label: "Hours in bed", defaultValue: 8, step: 0.5 },
        ]}
        resultLabel="Estimated sleep cycles (at ~90 min each)"
        formula="sleepCyclesFromHours"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Use the calculator above to see how close your usual sleep duration lands to a whole number of 90-minute cycles.",
          "Keep a consistent bedtime and wake time for a week and notice whether waking up feels less groggy than on inconsistent nights.",
          "Next time you cross time zones, expect roughly one time zone's worth of circadian adjustment per day rather than an overnight reset.",
          "If sleep difficulty persists for weeks despite consistent habits, talk to a healthcare provider rather than assuming it will resolve on its own — persistent insomnia can have treatable underlying causes.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How long is a sleep cycle?", answer: "A full sleep cycle — moving through light sleep, deep sleep, and REM sleep — typically lasts about 90-110 minutes, and a full night's sleep usually includes 4-6 of these cycles." },
          { question: "What is REM sleep and why does it matter?", answer: "REM (rapid eye movement) sleep is a stage marked by high brain activity resembling wakefulness, temporary muscle paralysis, and the most vivid dreaming. It's associated with emotional processing and is concentrated in the later cycles of the night." },
          { question: "Does the brain shut off during sleep?", answer: "No. The brain remains highly active throughout sleep, including activity levels close to wakefulness during REM sleep — sleep involves shifting into different structured activity patterns, not a general shutdown." },
          { question: "How much sleep do adults need?", answer: "The CDC recommends most adults get 7-9 hours of sleep per night, enough time to complete several full sleep cycles and get an adequate amount of both deep and REM sleep." },
          { question: "What causes jet lag?", answer: "Jet lag occurs when travel crosses time zones faster than the circadian rhythm — the body's internal roughly 24-hour clock, run by the suprachiasmatic nucleus and reset mainly by light exposure — can adjust, commonly estimated at about one time zone per day." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
