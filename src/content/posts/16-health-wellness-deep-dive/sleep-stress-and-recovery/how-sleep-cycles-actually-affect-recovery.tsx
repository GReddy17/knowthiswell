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
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "How Sleep Cycles Actually Affect Recovery",
  category: "health-wellness-deep-dive",
  order: 1,
  subtopic: "sleep-stress-and-recovery",
  tags: ["sleep cycles", "sleep science", "REM sleep", "recovery", "sleep basics"],
  date: "2026-09-20",
  updated: "2026-09-20",
  lastReviewed: "2026-09-20",
  excerpt: "Sleep isn't one uniform state — it cycles through distinct stages roughly every 90 minutes, and different stages do different repair work, which is why waking mid-cycle can leave you groggier than sleeping a bit longer.",
  summary: "Sleep progresses through repeating cycles of roughly 90 minutes each, moving through light sleep, deep slow-wave sleep, and REM sleep, with deep sleep doing more physical restoration and REM sleep supporting memory consolidation and emotional processing — which is why both total sleep time and being woken at the right point in a cycle affect how rested a person feels.",
  sources: [
    { label: "National Heart, Lung, and Blood Institute (NIH) — Sleep", url: "https://www.nhlbi.nih.gov/health/sleep" },
    { label: "CDC — Sleep and Sleep Disorders", url: "https://www.cdc.gov/sleep/index.html" },
  ],
  seeAlso: [
    "health-wellness-deep-dive/what-cortisol-actually-does-to-the-body-under-stress",
    "psychology-human-behavior/how-memory-actually-forms-and-fades",
  ],
  glossary: [
    { term: "Sleep cycle", definition: "A repeating sequence of sleep stages — light sleep, deep sleep, and REM sleep — that lasts roughly 90 minutes and repeats several times per night." },
    { term: "Deep sleep (slow-wave sleep)", definition: "A sleep stage associated with the most physical restoration, including tissue repair and immune function support, typically concentrated in the earlier sleep cycles of the night." },
    { term: "REM sleep", definition: "Rapid eye movement sleep, a stage associated with vivid dreaming, memory consolidation, and emotional processing, which becomes proportionally longer in later sleep cycles toward morning." },
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
        <strong>This entry covers general sleep science, not medical advice.</strong> Persistent sleep problems should be discussed with a qualified healthcare provider.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Sleep moves through repeating ~90-minute cycles of light sleep, deep sleep, and REM sleep, not one uniform state from lights-out to waking.",
          "Deep sleep does more of the physical restoration work, while REM sleep supports memory consolidation and emotional processing — different stages, different jobs.",
          "Being woken mid-cycle, especially out of deep sleep, tends to cause more grogginess than waking at a natural cycle boundary, even with the same total sleep time.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A night of sleep isn&apos;t one continuous state — it cycles through stages roughly every 90 minutes: lighter sleep, then deep sleep, then <TermLink href="/health-wellness-deep-dive/how-sleep-cycles-actually-affect-recovery">REM sleep</TermLink> (when most vivid dreaming happens), then back around. This repeats several times a night, and the balance of stages shifts as the night goes on.</div>}
        detailed={<div className="prose-p">Per NIH sleep research, early <TermLink href="/health-wellness-deep-dive/how-sleep-cycles-actually-affect-recovery">sleep cycles</TermLink> in the night contain proportionally more <TermLink href="/health-wellness-deep-dive/how-sleep-cycles-actually-affect-recovery">deep sleep (slow-wave sleep)</TermLink>, associated with physical restoration including tissue repair and immune function, while later cycles toward morning shift toward proportionally more REM sleep, associated with memory consolidation and emotional processing. This means cutting sleep short doesn&apos;t just reduce total hours evenly — depending on when you cut it, you disproportionately lose either early deep-sleep-heavy cycles or later REM-heavy cycles, each with different real functional costs.</div>}
      />
      <FootnoteAside>Sleep-tracking devices that claim to wake you at an &quot;optimal&quot; point in your cycle are estimating cycle timing from movement and heart rate, not directly measuring brain activity the way a clinical sleep study (polysomnography) does — useful as a rough guide, but not a precise measurement of your actual sleep stage.</FootnoteAside>

      <p>This staged structure is exactly why sleep quality can&apos;t be reduced to hours alone — when you wake up relative to your cycle, and how much of each stage you got, both genuinely matter to how rested you feel.</p>

      <QuickCheck
        question="Two people each sleep exactly 7 hours, but one is woken by an alarm in the middle of deep sleep while the other wakes naturally at the end of a full cycle. What does sleep-stage research suggest about how they'll likely feel?"
        options={[
          { text: "They'll feel identically rested, since total sleep time was exactly the same for both", correct: false, explanation: "Total time isn't the whole story — being woken mid-cycle, especially out of deep sleep, is associated with more grogginess (sometimes called sleep inertia) than waking at a natural cycle boundary, even with identical total hours." },
          { text: "The person woken mid-deep-sleep is more likely to feel groggier (sleep inertia), even with the same total sleep time, because they were interrupted mid-stage rather than at a natural cycle transition", correct: true, explanation: "Correct. This is a well-documented effect in sleep research — where in the cycle you wake matters, independent of total sleep duration." },
          { text: "The person woken naturally will definitely feel worse, since alarms are always better for waking up", correct: false, explanation: "This has the direction backwards relative to what sleep-stage research generally shows about mid-cycle interruption versus natural cycle-boundary waking." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A full, uninterrupted 8-hour night (baseline case)</h3>
      <div className="prose-p">Someone sleeping a full 8 hours with no interruptions typically completes around five sleep cycles, getting a healthy mix of both deep sleep (concentrated earlier) and REM sleep (concentrated later) — the pattern most associated with feeling genuinely rested and cognitively sharp the next day.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A 5-hour night cut short at the end (edge case / variation)</h3>
      <div className="prose-p">Someone who only sleeps 5 hours disproportionately loses the later, REM-heavy cycles rather than losing sleep evenly across all stages — since early cycles happen first regardless of total time, a short night specifically shortchanges REM-related functions like memory consolidation and emotional processing more than it shortchanges early deep sleep.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Shift work with irregular sleep timing (real-world / applied case)</h3>
      <div className="prose-p">A night-shift worker sleeping during the day often gets lower-quality deep and REM sleep even with adequate total hours, because sleep cycles are also influenced by the body&apos;s circadian rhythm — sleeping against that internal clock, per CDC guidance on shift work, is associated with more fragmented cycling and reduced restorative sleep quality even at a normal total duration.</div>

      <QuickCheck
        question="Why might a night-shift worker sleeping a full 8 hours during the day still feel less rested than someone sleeping the same 8 hours at night?"
        options={[
          { text: "Sleep cycle quality is also influenced by alignment with the body's circadian rhythm, not just total hours, so sleeping against that internal clock can produce more fragmented, lower-quality cycling even at an adequate total duration", correct: true, explanation: "Correct. Per CDC guidance on shift work and sleep, circadian misalignment is a well-documented factor affecting sleep quality independent of total sleep duration." },
          { text: "Daytime sleep and nighttime sleep are biologically identical, so there should be no difference at all", correct: false, explanation: "This isn't accurate — circadian rhythm genuinely affects sleep cycle quality, which is exactly why daytime sleep for shift workers is a well-documented area of concern in sleep and occupational health research." },
          { text: "It's purely about room brightness and has nothing to do with the body's internal clock", correct: false, explanation: "Light exposure is one factor affecting circadian rhythm, but the underlying issue is the internal biological clock itself, not just ambient room brightness alone." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How sleep stages shift across a night's cycles"
        type="detail"
        svgSrc="/diagrams/health-wellness-deep-dive-how-sleep-cycles-actually-affect-recovery-stages.svg"
        altText="A diagram showing roughly five repeating ~90-minute sleep cycles across an 8-hour night, with each cycle's bar split into light sleep, deep sleep, and REM sleep proportions, illustrating that deep sleep is concentrated in earlier cycles while REM sleep grows proportionally larger in later cycles toward morning."
      />
      <p>This shifting balance across the night is exactly why cutting sleep short at different points costs you different things — an early wake-up costs REM-heavy time, while sleep-onset delay costs early deep-sleep time.</p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Judging sleep quality by total hours alone, ignoring when interruptions happen.", fix: "Consider both total sleep time and how continuous it was — mid-cycle waking has real costs independent of total hours." },
          { mistake: "Assuming all sleep hours are functionally interchangeable.", fix: "Recognize deep sleep and REM sleep support different functions, and cutting sleep short at different points costs you different things." },
          { mistake: "Dismissing shift-work sleep problems as just needing 'the same number of hours' during the day.", fix: "Account for circadian rhythm misalignment as a separate, real factor affecting sleep quality beyond total duration." },
        ]}
      />
      <MisconceptionCallout
        myth="As long as you get your target number of sleep hours, it doesn't matter when in the cycle you wake up."
        reality={<p>Per NIH sleep research, waking abruptly mid-cycle — particularly out of deep sleep — is associated with sleep inertia, a period of grogginess and reduced alertness, independent of total sleep duration; total hours and where in the cycle you wake are both genuinely relevant factors, not just the one number most people track.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Aim for a consistent sleep and wake schedule, which supports more predictable, complete sleep cycles over time.",
          "If possible, avoid cutting sleep short right in the middle of a typical cycle length (roughly every 90 minutes from sleep onset).",
          "For shift work, prioritize a dark, quiet daytime sleep environment to reduce circadian misalignment effects on sleep quality.",
          "If you consistently feel unrested despite adequate total sleep time, discuss it with a qualified healthcare provider rather than assuming more hours alone will fix it.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How long is a typical sleep cycle?", answer: "Roughly 90 minutes, though this varies somewhat by individual — a full night's sleep typically consists of about four to six of these cycles in sequence." },
          { question: "Is deep sleep or REM sleep more important?", answer: "They support different functions — deep sleep is more associated with physical restoration, while REM sleep is more associated with memory consolidation and emotional processing — so both matter, just for different things, rather than one being simply more important than the other." },
          { question: "Why do I feel groggy even after sleeping a full 8 hours?", answer: "Grogginess can result from being woken mid-cycle (especially out of deep sleep), poor sleep quality despite adequate duration, or factors like circadian misalignment — total hours alone don't fully determine how rested you feel." },
          { question: "Do sleep-tracking apps accurately measure sleep stages?", answer: "Most consumer sleep trackers estimate stages from movement and heart rate patterns rather than directly measuring brain activity the way a clinical sleep study does, so they're a useful rough guide but not a precise clinical measurement." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
