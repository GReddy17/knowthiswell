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
  title: "What Cortisol Actually Does to the Body Under Stress",
  category: "health-wellness-deep-dive",
  order: 2,
  subtopic: "sleep-stress-and-recovery",
  tags: ["cortisol", "stress response", "HPA axis", "hormones", "chronic stress"],
  date: "2026-09-21",
  updated: "2026-09-21",
  lastReviewed: "2026-09-21",
  excerpt: "Cortisol isn't simply a 'stress hormone' to eliminate — it's a normal, necessary signal that becomes a problem mainly when it stays elevated for too long.",
  summary: "Cortisol is a hormone released by the adrenal glands, under control of the brain's hypothalamic-pituitary-adrenal (HPA) axis, in response to a perceived stressor — it temporarily raises blood sugar, sharpens alertness, and redirects the body's energy toward an immediate demand, then normally falls again once the stressor passes through a negative feedback loop; per NIH-affiliated medical reference sources, the documented health concerns associated with cortisol come mainly from chronically elevated levels over weeks or months, not from a normal, short-lived stress response, which is a necessary and healthy part of how the body reacts to real demands.",
  sources: [
    { label: "MedlinePlus (NIH National Library of Medicine) — Cortisol Test", url: "https://medlineplus.gov/lab-tests/cortisol-test/" },
    { label: "American Psychological Association — Stress Effects on the Body", url: "https://www.apa.org/topics/stress/body" },
  ],
  seeAlso: [
    "health-wellness-deep-dive/how-sleep-cycles-actually-affect-recovery",
    "health-wellness-deep-dive/how-the-lymphatic-system-actually-works",
    "health-body-basics/understanding-stress-and-the-body-general-overview",
    "health-wellness-deep-dive/what-resting-heart-rate-actually-reveals-about-fitness",
  ],
  glossary: [
    { term: "HPA axis", definition: "The hypothalamic-pituitary-adrenal axis — the signaling pathway connecting the brain's hypothalamus and pituitary gland to the adrenal glands, which controls the release of cortisol in response to a perceived stressor." },
    { term: "Negative feedback loop", definition: "A regulatory mechanism where rising cortisol levels signal the brain to reduce further cortisol release, normally bringing levels back down once a stressor has passed." },
    { term: "Chronic stress", definition: "Stress that persists over an extended period (weeks or months), associated with cortisol staying elevated longer than the short-term response the system is designed for." },
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
          "Cortisol is released by the adrenal glands, controlled by the brain's HPA axis, to temporarily raise alertness and energy in response to a stressor.",
          "A normal stress response includes cortisol rising, then falling back down once the stressor passes, through a negative feedback loop.",
          "Per NIH-affiliated sources, the documented health concerns are mainly linked to chronically elevated cortisol over weeks or months, not a normal short-term spike.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Cortisol is a hormone your body releases when it perceives a stressor — it&apos;s what gives you that alert, keyed-up feeling and a quick burst of usable energy. In a normal, short-term stress situation, cortisol rises to help you deal with the moment, then falls back down once the stressor is gone. It only becomes a real health concern when it stays elevated for a long stretch of time, not from the occasional short spike everyone experiences.</div>}
        detailed={<div className="prose-p">Per NIH-affiliated medical reference sources, cortisol release is controlled by the <TermLink href="/health-wellness-deep-dive/what-cortisol-actually-does-to-the-body-under-stress">HPA axis</TermLink>: the brain&apos;s hypothalamus signals the pituitary gland, which signals the adrenal glands to release cortisol into the bloodstream. Cortisol then temporarily raises blood sugar (providing usable energy), sharpens alertness, and shifts the body&apos;s resources toward responding to the perceived demand. Under normal conditions, rising cortisol triggers a <TermLink href="/health-wellness-deep-dive/what-cortisol-actually-does-to-the-body-under-stress">negative feedback loop</TermLink> — the brain detects the elevated level and reduces further release, bringing cortisol back down once the stressor has passed. Per APA guidance on stress and the body, the well-documented health concerns linked to cortisol — including effects on blood pressure, blood sugar regulation, and immune function — are specifically associated with <TermLink href="/health-wellness-deep-dive/what-cortisol-actually-does-to-the-body-under-stress">chronic stress</TermLink>, where cortisol stays elevated over an extended period, rather than the normal, short-lived rise-and-fall pattern of an ordinary stress response.</div>}
      />
      <FootnoteAside>Cortisol also follows a normal daily rhythm independent of stress — levels are typically highest shortly after waking and gradually decline through the day, which is part of why cortisol testing accounts for time of day rather than using a single fixed reference range.</FootnoteAside>

      <p>This distinction between a normal short-term spike and sustained chronic elevation is also why occasional stressful events (a deadline, a difficult conversation) aren&apos;t inherently harmful — the documented concerns specifically involve stress that doesn&apos;t let up for weeks or months at a time.</p>

      <QuickCheck
        question="Someone experiences a stressful, high-pressure meeting, feels alert and keyed-up during it, and feels back to normal within a couple of hours afterward. What does this pattern most likely reflect?"
        options={[
          { text: "A normal, healthy short-term stress response, with cortisol rising during the stressor and falling back down afterward through the body's feedback loop", correct: true, explanation: "Correct. This rise-and-fall pattern over a short period is exactly how a normal, adaptive stress response is described in NIH-affiliated medical references — it's distinct from the chronic elevation linked to documented health concerns." },
          { text: "A sign of chronic stress requiring medical intervention", correct: false, explanation: "Chronic stress specifically refers to elevation sustained over weeks or months — a single stressful event followed by a return to baseline within hours doesn't match that pattern." },
          { text: "Evidence that the person's HPA axis isn't functioning correctly", correct: false, explanation: "This pattern — cortisol rising during a stressor and returning to baseline afterward — is exactly what a properly functioning HPA axis and negative feedback loop are supposed to produce." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A normal acute stress response (baseline case)</h3>
      <div className="prose-p">Before a job interview, cortisol rises, producing alertness and quick energy availability — a normal, adaptive response that supports performing well under a short-term demand, and levels return to baseline within hours after the interview ends.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Cortisol&apos;s normal daily rhythm, independent of stress (edge case / variation)</h3>
      <div className="prose-p">A person&apos;s cortisol level is naturally higher in the morning shortly after waking than late at night, entirely apart from any stressful event — this is why a single cortisol measurement is only meaningful when interpreted alongside the time of day it was taken, per MedlinePlus guidance on cortisol testing.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Sustained chronic stress over months (real-world / applied case)</h3>
      <div className="prose-p">Someone dealing with an ongoing, unresolved stressful situation over several months — rather than a single event — can experience cortisol staying elevated for extended periods, which per APA guidance is the pattern specifically associated with documented effects on blood pressure, blood sugar regulation, and immune function, distinct from an occasional short-term stress response.</div>

      <QuickCheck
        question="Why is time of day an important factor when interpreting a cortisol test result, per MedlinePlus guidance?"
        options={[
          { text: "Cortisol follows a normal daily rhythm, typically highest shortly after waking and declining through the day, independent of stress", correct: true, explanation: "Correct. Because cortisol naturally varies by time of day, a result needs to be interpreted against that expected daily pattern, not a single fixed number regardless of when it was measured." },
          { text: "Cortisol levels are identical throughout the day and time of day has no real effect", correct: false, explanation: "This is inaccurate — cortisol has a well-documented daily rhythm, which is exactly why time of day matters for interpreting a test result." },
          { text: "Time of day only matters for people with diagnosed adrenal conditions", correct: false, explanation: "The normal daily cortisol rhythm applies broadly, not just to people with a diagnosed condition — it's a standard feature of how the hormone is regulated." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="From perceived stressor to cortisol release and feedback"
        type="flow"
        svgSrc="/diagrams/health-wellness-deep-dive-what-cortisol-actually-does-to-the-body-under-stress-flow.svg"
        altText="A flow diagram: a perceived stressor triggers the hypothalamus, which signals the pituitary gland, which signals the adrenal glands to release cortisol; rising cortisol then feeds back to the brain to reduce further release once the stressor passes."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating cortisol as inherently bad and something to eliminate entirely.", fix: "Recognize a normal, short-term stress response with cortisol rising and falling is healthy and adaptive, not a problem to fix." },
          { mistake: "Assuming a single cortisol measurement is meaningful without accounting for time of day.", fix: "Interpret cortisol test results against the hormone's normal daily rhythm, per MedlinePlus guidance." },
          { mistake: "Overlooking the difference between an occasional stressor and chronic, ongoing stress.", fix: "Understand that documented health concerns are specifically linked to chronic elevation over weeks or months, not everyday short-term stress." },
        ]}
      />
      <MisconceptionCallout
        myth="Cortisol is simply a harmful 'stress hormone' that the body would be better off without."
        reality={<p>Per NIH-affiliated medical references, cortisol is a normal, necessary hormone that supports alertness and energy availability during real short-term demands, and it follows an ordinary daily rhythm independent of stress. The documented health concerns associated with cortisol — per APA guidance on stress and the body — come from chronic, sustained elevation over an extended period, not from the ordinary, adaptive rise-and-fall pattern that happens during everyday short-term stress.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Don't treat an occasional stressful event as inherently harmful — a short-term cortisol rise followed by a return to baseline is a normal, adaptive response.",
          "Pay closer attention to stress that persists over weeks or months without relief, since that's the pattern linked to documented health concerns.",
          "If a cortisol test is ordered, ask how time of day was accounted for, since cortisol follows a normal daily rhythm.",
          "This is general educational information, not medical advice — for symptoms of concern or a suspected hormonal condition, consult a licensed healthcare provider.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does cortisol actually do in the body?", answer: "It temporarily raises blood sugar, sharpens alertness, and redirects energy toward responding to a perceived stressor, under control of the brain's HPA axis, per NIH-affiliated medical references." },
          { question: "Is cortisol always bad for you?", answer: "No — a normal, short-term stress response involving cortisol is healthy and adaptive. Per APA guidance, the documented health concerns are specifically linked to chronically elevated cortisol over an extended period." },
          { question: "Does cortisol stay elevated all the time?", answer: "No — under normal conditions it rises in response to a stressor and falls back down afterward through a negative feedback loop, and it also follows a normal daily rhythm independent of stress." },
          { question: "Why does time of day matter for a cortisol test?", answer: "Cortisol is naturally highest shortly after waking and declines through the day, per MedlinePlus guidance, so a result needs to be interpreted against that expected pattern rather than a single fixed number." },
          { question: "What is chronic stress, and how does it relate to cortisol?", answer: "Chronic stress is stress that persists over weeks or months rather than resolving — per APA guidance, this is the pattern specifically associated with cortisol staying elevated longer than the short-term response the system is designed for." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
