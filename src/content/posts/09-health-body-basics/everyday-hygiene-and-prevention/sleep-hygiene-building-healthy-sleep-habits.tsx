import React from 'react';
import { PostFrontmatter } from '@/types/post';
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
  title: "Sleep Hygiene: Building Healthy Sleep Habits",
  category: "health-body-basics",
  order: 5,
  subtopic: "everyday-hygiene-and-prevention",
  tags: ["sleep hygiene", "sleep cycles", "circadian rhythm", "sleep habits", "insomnia prevention"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Sleep runs in roughly 90-minute cycles, which is why waking mid-cycle can feel worse than sleeping a bit less but waking at a cycle boundary.",
  summary: "Sleep hygiene is the set of consistent habits — a regular schedule, a dark and cool environment, limited late-day caffeine and screen exposure — that supports the body's natural sleep architecture, which runs in roughly 90-minute cycles of alternating lighter and deeper sleep stages regulated by the circadian rhythm.",
  sources: [
    { label: "CDC — Sleep and Sleep Disorders", url: "https://www.cdc.gov/sleep/index.html" },
    { label: "NIH/NHLBI — Sleep Phases and Stages", url: "https://www.nhlbi.nih.gov/health/sleep/stages-of-sleep" },
    { label: "Mayo Clinic — Sleep Tips", url: "https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/sleep/art-20048379" },
  ],
  seeAlso: [
    "health-body-basics/understanding-stress-and-the-body-general-overview",
    "health-body-basics/screen-time-and-eye-health-basics",
  ],
  glossary: [
    {"term":"Circadian rhythm","definition":"The body's roughly 24-hour internal clock, regulated largely by light exposure, that governs the timing of sleepiness and wakefulness."},
    {"term":"Sleep cycle","definition":"A roughly 90-minute repeating pattern of sleep stages (light, deep, and REM sleep) that occurs multiple times per night, with deep sleep more concentrated early in the night and REM more concentrated later."},
    {"term":"Sleep hygiene","definition":"A set of consistent behavioral and environmental habits — regular schedule, dark/cool room, limited late-day stimulants — that support the body's natural sleep processes."},
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
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
      <strong>This entry is general sleep-hygiene information, not medical advice.</strong> It doesn&apos;t diagnose or treat sleep disorders. For persistent insomnia, sleep apnea symptoms, or ongoing sleep problems, consult a doctor.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "Sleep occurs in roughly 90-minute cycles alternating between lighter, deeper, and REM sleep stages — which is why waking mid-cycle can feel groggier than waking at a natural cycle boundary, even with similar total sleep time.",
      "The circadian rhythm, the body's roughly 24-hour internal clock, is heavily influenced by light exposure, which is why consistent wake times and controlled evening light exposure are core sleep hygiene habits.",
      "Sleep hygiene habits work by supporting the body's existing sleep architecture, not overriding it — consistency (same sleep/wake times) tends to matter more than any single individual habit in isolation.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Sleep isn&apos;t one continuous state — it moves through a repeating <TermLink href="/health-body-basics/sleep-hygiene-building-healthy-sleep-habits">sleep cycle</TermLink> of roughly 90 minutes, cycling between lighter sleep, deep sleep, and REM (dream) sleep, several times a night. <TermLink href="/health-body-basics/sleep-hygiene-building-healthy-sleep-habits">Sleep hygiene</TermLink> habits — a consistent schedule, a dark and cool room, limiting late caffeine and bright screens before bed — work by supporting this natural process rather than forcing sleep directly.</div>}
      detailed={<div className="prose-p">The timing of sleep and wakefulness is governed by the <TermLink href="/health-body-basics/sleep-hygiene-building-healthy-sleep-habits">circadian rhythm</TermLink>, an internal roughly-24-hour clock strongly influenced by light exposure hitting the eyes — bright light (especially blue-wavelength light) in the evening can delay the release of melatonin, the hormone that signals the body it&apos;s time to wind down, which is the physiological basis for advice to limit screens before bed. Within a night&apos;s sleep, deep sleep (thought to be important for physical restoration) is concentrated more in earlier cycles, while REM sleep (associated with memory processing and dreaming) becomes more prominent in later cycles — meaning a shortened night doesn&apos;t just reduce total sleep, it disproportionately cuts into later-cycle REM sleep.</div>}
      />
      <FootnoteAside>Sleep researchers commonly cite roughly 90 minutes as an average cycle length, but individual cycle length varies somewhat from person to person and even night to night — a useful approximation for habit-building, not a precise, fixed number for any one individual.</FootnoteAside>

      <p>
      Understanding sleep as cycling stages, not a uniform block, explains why timing matters almost as much as total duration for how rested someone feels on waking.
      </p>

      <QuickCheck
      question="Two people sleep the same total number of hours, but one wakes up in the middle of a deep-sleep stage due to an alarm, while the other wakes up naturally near a cycle boundary. What does sleep-cycle science suggest about how each might feel?"
      options={[
      { text: "They should feel identically rested, since total sleep time was the same for both", correct: false, explanation: "Total duration is only part of the picture — waking abruptly from deep sleep (mid-cycle) is commonly associated with feeling groggier than waking near a natural cycle boundary, even at equal total sleep time." },
      { text: "The person waking near a cycle boundary is more likely to feel less groggy than the person abruptly woken from deep sleep, even with identical total sleep duration", correct: true, explanation: "Correct. This is the basis for sleep-cycle-aware wake timing — the stage you're in when you wake, not just total hours slept, affects how rested you feel." },
      { text: "Waking during deep sleep always feels better than waking during lighter sleep", correct: false, explanation: "Waking during deep sleep is generally associated with more grogginess (sometimes called sleep inertia), not less, compared to waking during lighter sleep near a cycle boundary." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Timing sleep around 90-minute cycles (baseline case)</h3>
      <div className="prose-p">
      Someone aiming to wake up rested plans for roughly 5 full 90-minute cycles (7.5 hours) rather than an arbitrary round number like 7 or 8 hours, on the reasoning that waking near a cycle boundary tends to feel less groggy than waking mid-cycle — a simple, approximate application of sleep-cycle timing.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Evening screen use delaying sleep onset (edge case / variation)</h3>
      <div className="prose-p">
      Bright screen use right before bed exposes the eyes to light that can delay melatonin release, which can push back the natural onset of sleepiness even if someone gets into bed at their usual time — meaning the sleep-hygiene issue here is circadian timing disruption, not simply &quot;screens are bad,&quot; and dimming screens or using night-mode settings in the hour before bed directly targets this specific mechanism.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Weekend &quot;sleep-in&quot; disrupting weekday schedule (real-world / applied case)</h3>
      <div className="prose-p">
      Sleeping in significantly later on weekends than on weekdays — sometimes called &quot;social jet lag&quot; — shifts the circadian rhythm&apos;s reference point, making it harder to fall asleep at the usual weekday time on Sunday night and contributing to Monday grogginess, even though the person got extra sleep over the weekend. This is a concrete real-world illustration of why consistency in sleep/wake timing is often emphasized as much as total sleep duration.
      </div>

      <QuickCheck
      question="Why might sleeping in several extra hours on weekends actually make it harder to fall asleep at the usual time on Sunday night?"
      options={[
      { text: "Extra sleep on any day always makes falling asleep easier the following night, with no downside", correct: false, explanation: "This isn't accurate — a significant weekend schedule shift can push the circadian rhythm's timing later, working against falling asleep at the usual earlier weekday time." },
      { text: "A large shift in wake time disrupts the circadian rhythm's consistent timing (sometimes called social jet lag), making it harder to fall asleep at the earlier weekday time the following night", correct: true, explanation: "Correct. This is why sleep hygiene guidance generally favors keeping wake times fairly consistent even on days without an early obligation." },
      { text: "It has no effect on sleep timing at all — only caffeine and screens affect circadian rhythm", correct: false, explanation: "Wake-time consistency is itself a major circadian rhythm input, independent of caffeine or screen exposure — a significant weekend shift can measurably affect the following night's sleep onset." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="A night's sleep as a series of ~90-minute cycles"
      type="flow"
      svgSrc="/diagrams/health-body-basics-sleep-hygiene-building-healthy-sleep-habits-cycle-chart.svg"
      altText="A horizontal chart showing sleep depth on the vertical axis over a full night on the horizontal axis, with five wave-like cycles of roughly 90 minutes each, showing deep sleep dipping lower and more prominent in earlier cycles and REM sleep segments becoming longer and more prominent in later cycles toward morning."
      />
      <p>
      Deep sleep clusters early in the night, REM sleep clusters later — which is why cutting sleep short doesn&apos;t just reduce total time, it disproportionately removes later-cycle REM sleep.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Using bright screens right up until bedtime.", fix: "Dim screens or switch to night-mode settings in the hour before bed to reduce delayed melatonin release from light exposure." },
      { mistake: "Sleeping in dramatically later on weekends than on weekdays.", fix: "Try to keep wake times relatively consistent across the week to avoid disrupting circadian timing (social jet lag)." },
      { mistake: "Focusing only on total hours slept and ignoring sleep timing consistency.", fix: "Prioritize a consistent sleep/wake schedule alongside adequate total sleep time — both matter for how rested you feel." },
      ]}
      />
      <MisconceptionCallout
      myth="As long as you get 7-8 total hours, exactly when you sleep and wake doesn't matter."
      reality={<p>Total sleep duration matters, but sleep-cycle timing and circadian consistency matter too. Waking abruptly mid-cycle (especially during deep sleep) is commonly associated with more grogginess than waking near a natural cycle boundary, and a highly inconsistent sleep/wake schedule can disrupt the circadian rhythm&apos;s timing independent of total hours slept. Duration and timing are two separate, both-relevant factors, not one substitute for the other.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Estimate roughly how many full sleep cycles a given time in bed covers"
      fields={[
      { key: "hoursInBed", label: "Hours in bed", defaultValue: 7.5, step: 0.25 },
      ]}
      resultLabel="Approximate number of ~90-minute cycles"
      formula="sleepCyclesFromHours"
      formatResult="number"
      />
      <p>
      This is a rough approximation using an average 90-minute cycle length — actual cycle length varies by person and night, so treat this as a general planning tool, not a precise prediction.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Keep sleep and wake times consistent, including on weekends, to support circadian rhythm stability.",
      "Dim bright screens or use night-mode settings in the hour before bed.",
      "Consider planning sleep duration in approximate 90-minute cycle increments rather than an arbitrary round number.",
      "See a doctor for persistent insomnia, loud snoring with breathing pauses, or ongoing daytime fatigue despite adequate time in bed.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How long is a sleep cycle?", answer: "Roughly 90 minutes on average, though individual cycle length varies by person and by night — it's a useful approximation, not a precise fixed number." },
      { question: "Why do I feel groggy even after sleeping 8 hours?", answer: "Grogginess can relate to waking mid-cycle (especially during deep sleep) rather than near a natural cycle boundary, and to circadian rhythm disruption from inconsistent sleep/wake timing — total hours alone don't fully determine how rested you feel." },
      { question: "Is it bad to sleep in a lot on weekends?", answer: "A large shift in weekend wake time (sometimes called social jet lag) can disrupt circadian rhythm consistency, making it harder to fall asleep at the usual time on Sunday night and contributing to Monday grogginess." },
      { question: "Why does screen use before bed affect sleep?", answer: "Bright light, especially blue-wavelength light from screens, can delay the release of melatonin, the hormone that signals the body it's time to wind down, pushing back natural sleep onset." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
