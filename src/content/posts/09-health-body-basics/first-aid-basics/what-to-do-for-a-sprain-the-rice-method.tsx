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
  title: "What to Do for a Sprain (the RICE Method)",
  category: "health-body-basics",
  order: 20,
  subtopic: "first-aid-basics",
  tags: ["sprain first aid", "RICE method", "ankle sprain", "soft tissue injury"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "RICE — rest, ice, compression, elevation — is the standard first-response framework for a minor sprain, but each letter has specific timing and limits that most people get slightly wrong.",
  summary: "The RICE method (rest, ice, compression, elevation) is the widely cited first-response framework for a minor sprain, per Mayo Clinic and Red Cross guidance — icing in limited intervals (not continuously), wrapping snugly but not tightly, and elevating above heart level all serve a specific purpose in limiting swelling during the first 24 to 48 hours, after which the approach for continued pain or lack of improvement shifts to professional evaluation.",
  sources: [
    { label: "Mayo Clinic — Sprained ankle: First aid", url: "https://www.mayoclinic.org/first-aid/first-aid-sprained-ankle/basics/art-20056608" },
    { label: "American Red Cross — Sprains and Strains", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/sprains-strains" },
    { label: "American Academy of Orthopaedic Surgeons — Sprains", url: "https://orthoinfo.aaos.org/en/diseases--conditions/sprains" },
  ],
  seeAlso: [
    "health-body-basics/recognizing-signs-of-a-medical-emergency",
    "health-body-basics/basic-first-aid-kit-essentials",
  ],
  glossary: [
    {"term":"Sprain","definition":"An injury to a ligament (the tissue connecting bone to bone) caused by overstretching or tearing, most commonly at the ankle — distinct from a strain, which affects muscle or tendon instead."},
    {"term":"RICE method","definition":"A first-response framework for minor soft tissue injuries: Rest, Ice, Compression, and Elevation, applied primarily during the first 24 to 48 hours after injury."},
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
      <strong>This entry is general first aid information, not medical advice.</strong> It covers minor sprains only. If you can&apos;t bear weight at all, hear or feel a pop, see significant deformity, or pain doesn&apos;t improve within a few days, seek professional medical evaluation. For a suspected fracture or other emergency, seek immediate medical care.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "RICE stands for Rest, Ice, Compression, Elevation — the standard first-response framework for a minor sprain during the first 24 to 48 hours, per Mayo Clinic guidance.",
      "Ice should be applied in limited intervals (commonly cited as around 15-20 minutes at a time, with breaks), not continuously, to avoid skin and tissue damage from prolonged cold exposure.",
      "RICE is a first-response framework, not a complete treatment — persistent pain, inability to bear weight, or a suspected fracture all require professional medical evaluation rather than continued home care alone.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">For a minor <TermLink href="/health-body-basics/what-to-do-for-a-sprain-the-rice-method">sprain</TermLink>, the <TermLink href="/health-body-basics/what-to-do-for-a-sprain-the-rice-method">RICE method</TermLink> means: rest the injured area (avoid putting weight on it), ice it in short intervals to reduce swelling, wrap it snugly with a compression bandage, and elevate it above heart level when possible. Each step targets swelling and further injury during the first day or two, which is when a sprain typically causes the most discomfort.</div>}
      detailed={<div className="prose-p">Each letter in RICE has a specific mechanism: rest prevents further stress on an already-stretched or torn ligament while initial healing begins; ice constricts blood vessels near the surface, which limits how much fluid accumulates as swelling — but only in short intervals, since continuous cold exposure risks skin and underlying tissue damage; compression (a snug, not tight, wrap) provides mechanical support that also helps limit swelling, with numbness or tingling below the wrap signaling it&apos;s too tight; elevation above heart level uses gravity to help reduce fluid pooling at the injury site. Mayo Clinic frames RICE specifically as management for the first 24 to 48 hours — after that window, continued significant pain, swelling, or inability to bear weight shifts the situation toward professional evaluation rather than continued home management.</div>}
      />
      <FootnoteAside>A wrap that causes numbness, tingling, or increased swelling below the compressed area is a sign it&apos;s been applied too tightly and is cutting off normal circulation — the goal is snug support, not the tightest possible wrap.</FootnoteAside>

      <p>
      RICE is a well-known acronym precisely because each step is simple on its own — the parts people most often get wrong are the timing (icing too long, or not resting enough) rather than the concept itself.
      </p>

      <QuickCheck
      question="Someone sprains their ankle and applies an ice pack continuously for two hours straight to 'get ahead of the swelling.' What's the problem?"
      options={[
      { text: "There's no real problem — more ice time means less swelling", correct: false, explanation: "Continuous, prolonged cold exposure risks damaging the skin and underlying tissue. Ice is meant to be applied in limited intervals (commonly cited as around 15-20 minutes), not continuously." },
      { text: "Prolonged, continuous ice application risks skin and tissue damage — ice should be applied in short intervals with breaks, not for hours at a stretch", correct: true, explanation: "Correct. This is a specific, sourced limit on the 'ice' step of RICE, not an arbitrary caution." },
      { text: "Ice should never be used on a sprain at all", correct: false, explanation: "Ice is a core, recommended part of the RICE method for a minor sprain — the issue is duration and continuity, not whether ice should be used at all." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A minor ankle sprain from an uneven sidewalk (baseline case)</h3>
      <div className="prose-p">
      Immediately after rolling an ankle on an uneven step: stop walking on it (rest), apply an ice pack wrapped in a thin towel for about 15-20 minutes (ice), wrap it snugly with an elastic bandage (compression), and prop the foot up on a pillow above heart level while resting (elevation). This sequence, repeated over the first day or two, follows the standard RICE framework.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A sprain that seems minor but shows warning signs (edge case / variation)</h3>
      <div className="prose-p">
      Someone applies RICE to what seems like a minor ankle sprain, but they cannot put any weight on the foot at all, and there&apos;s visible deformity at the joint. Per Red Cross and orthopaedic guidance, inability to bear any weight and visible deformity are signs that go beyond a typical minor sprain and may indicate a fracture — this situation calls for professional medical evaluation, not continued home RICE treatment alone.
      </div>

      <QuickCheck
      question="Why does complete inability to bear any weight on an injured ankle matter as a specific warning sign, beyond just 'it hurts a lot'?"
      options={[
      { text: "Pain level alone is the only thing that matters, and weight-bearing ability is irrelevant", correct: false, explanation: "Complete inability to bear weight is specifically called out in first aid and orthopaedic guidance as a distinct sign from pain level alone — a very painful but still weight-bearing sprain is managed differently from one where weight-bearing is impossible." },
      { text: "Complete inability to bear weight, alongside signs like visible deformity, is one of the specific criteria that suggests a possible fracture rather than a typical sprain, and points toward needing professional evaluation", correct: true, explanation: "Correct. This is a documented distinguishing sign, not just a matter of how much something hurts." },
      { text: "It only matters for injuries to the knee, not the ankle", correct: false, explanation: "This inability-to-bear-weight sign is a general first aid guideline that applies to lower-limb injuries broadly, including the ankle, not just the knee specifically." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Transitioning off RICE after 48 hours (real-world / applied case)</h3>
      <div className="prose-p">
      Two days after a minor sprain, swelling has visibly decreased and some gentle weight-bearing is possible without sharp pain — a sign the injury is progressing normally, and gentle movement (as tolerated) typically becomes part of recovery going forward. If, instead, pain and swelling haven&apos;t meaningfully improved by this point, that&apos;s a signal to seek professional evaluation rather than continuing RICE alone indefinitely.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="RICE: four steps, each with a specific purpose"
      type="detail"
      svgSrc="/diagrams/health-body-basics-what-to-do-for-a-sprain-the-rice-method-four-steps.svg"
      altText="Four labeled steps in sequence: Rest, meaning avoid weight on the injured area; Ice, meaning apply in short 15 to 20 minute intervals with breaks; Compression, meaning wrap snugly but not tightly; and Elevation, meaning raise the injured area above heart level."
      />
      <p>
      Each step has one job — limiting further stress, limiting swelling through cold and compression, and using gravity to help drainage — which is why skipping or misapplying any one of them (especially over-icing) reduces how well the whole framework works.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Applying ice continuously for hours instead of in short intervals.", fix: "Ice in intervals of roughly 15-20 minutes with breaks in between, not continuously, to avoid skin and tissue damage." },
      { mistake: "Wrapping a compression bandage too tightly.", fix: "Aim for snug support — numbness, tingling, or increased swelling below the wrap means it's too tight and should be loosened." },
      { mistake: "Continuing RICE alone for days despite inability to bear weight or worsening symptoms.", fix: "Treat RICE as first-response management for roughly the first 24-48 hours — seek professional evaluation if weight-bearing is impossible, deformity is visible, or symptoms aren't improving." },
      ]}
      />
      <MisconceptionCallout
      myth="More ice, applied for longer, always means faster healing from a sprain."
      reality={<p>Ice is meant to be applied in short, repeated intervals — commonly cited as around 15-20 minutes at a time — specifically because prolonged, continuous cold exposure risks damaging skin and underlying tissue rather than helping. The goal is limiting swelling safely, not maximizing cold exposure.</p>}
      />

      <QuickCheck
      question="What is the most important overall framing for the RICE method?"
      options={[
      { text: "That RICE is a complete treatment that replaces the need for any medical evaluation, no matter how the injury progresses", correct: false, explanation: "RICE is specifically a first-response framework for the first 24-48 hours, not a complete treatment — persistent or worsening symptoms need professional evaluation." },
      { text: "That RICE is a first-response framework for the first 24-48 hours after a minor sprain, with each letter serving a specific, limited purpose — and that professional evaluation is needed if weight-bearing is impossible, deformity appears, or symptoms don't improve", correct: true, explanation: "Correct. This captures both what RICE is for and its real limits, matching Mayo Clinic and Red Cross guidance." },
      { text: "That only the 'rest' step actually matters, and the other three are optional extras", correct: false, explanation: "All four steps serve distinct, documented purposes (limiting stress, limiting swelling via cold and compression, aiding drainage via elevation) — none of them is framed as optional in standard first aid guidance." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "For a minor sprain, apply RICE: rest, ice in short intervals, snug (not tight) compression, and elevation above heart level.",
      "Watch for signs that go beyond a minor sprain — inability to bear any weight, visible deformity, or a felt/heard pop — and seek professional evaluation if present.",
      "Reassess after 24-48 hours; if pain and swelling aren't improving, seek professional medical care rather than continuing RICE alone.",
      "Keep an elastic bandage and a reusable ice pack in your first aid kit so RICE can start immediately after a minor injury.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What does RICE stand for in first aid?", answer: "Rest, Ice, Compression, Elevation — the standard first-response framework for a minor sprain during the first 24 to 48 hours, per Mayo Clinic guidance." },
      { question: "How long should you ice a sprain?", answer: "In short intervals, commonly cited as around 15-20 minutes at a time with breaks in between — not continuously, which risks skin and tissue damage." },
      { question: "How tight should a compression bandage be for a sprain?", answer: "Snug enough to provide support, but not so tight that it causes numbness, tingling, or increased swelling below the wrap — those are signs to loosen it." },
      { question: "When should you see a doctor for a sprain instead of just using RICE?", answer: "If you can't bear any weight on the injured area, notice visible deformity, heard or felt a pop at the time of injury, or symptoms aren't improving after a couple of days — these all call for professional medical evaluation." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
