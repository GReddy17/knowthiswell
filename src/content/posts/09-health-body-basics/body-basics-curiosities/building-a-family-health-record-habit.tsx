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
  title: "Building a Family Health Record Habit",
  category: "health-body-basics",
  order: 50,
  subtopic: "body-basics-curiosities",
  tags: ["family health history", "health records", "preventive care", "health literacy", "medical history"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "A family health history is one of the few free, genuinely predictive health tools available — and most families never actually write it down.",
  summary: "A family health record — a written history of significant health conditions across close blood relatives — is a genuinely useful, free tool that helps a doctor assess personal risk for hereditary conditions, and health agencies recommend actively building and periodically updating one rather than relying on memory during an appointment.",
  sources: [
    { label: "CDC — Family Health History", url: "https://www.cdc.gov/genomics/famhistory/index.htm" },
    { label: "Surgeon General — My Family Health Portrait", url: "https://www.hhs.gov/programs/prevention-and-wellness/family-health-history/index.html" },
    { label: "NIH — MedlinePlus: Family Health History", url: "https://medlineplus.gov/familyhealthhistory.html" },
  ],
  seeAlso: [
    "health-body-basics/why-preventive-health-checkups-matter",
    "health-body-basics/understanding-health-screenings-by-age-group",
    "health-body-basics/common-health-myths-and-misconceptions",
  ],
  glossary: [
    {"term":"Family health history","definition":"A written record of significant health conditions among close blood relatives (parents, siblings, grandparents, aunts/uncles), used by doctors to assess a person's hereditary risk for certain conditions."},
    {"term":"Hereditary risk factor","definition":"An increased likelihood of developing a condition because it runs in a person's biological family, distinct from lifestyle or environmental risk factors."},
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
      <strong>This entry is general health literacy, not medical advice.</strong> A family health history is a tool to bring to a doctor, not a self-diagnosis method. Share and discuss yours with a qualified healthcare provider.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "A written family health history — significant conditions among parents, siblings, grandparents, and aunts/uncles — helps a doctor assess hereditary risk factors that a single appointment's memory can easily miss.",
      "The U.S. Surgeon General maintains a free, structured tool (My Family Health Portrait) specifically designed to help build and organize this record.",
      "A family health history is most useful when it's actually written down and updated periodically, not reconstructed from memory during a time-limited doctor's visit.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/health-body-basics/building-a-family-health-record-habit">family health history</TermLink> is simply a written list of significant health conditions that run in your close biological family — things like heart disease, diabetes, certain cancers, or other conditions affecting parents, siblings, and grandparents. Doctors use this information to judge whether you might carry an elevated <TermLink href="/health-body-basics/building-a-family-health-record-habit">hereditary risk factor</TermLink> for a given condition, which can change which screenings or preventive steps make sense for you specifically.</div>}
      detailed={<div className="prose-p">Many hereditary and familial risk patterns aren&apos;t obvious from a single data point — they emerge from seeing multiple relatives across generations affected by the same or related conditions, sometimes at unusually young ages. A doctor trying to reconstruct this picture from memory during a short appointment is working with a real information disadvantage compared to a family that has already organized this history in writing beforehand. The U.S. Surgeon General&apos;s office maintains a free online tool specifically built around this need, structured to prompt the right questions (which relatives, which conditions, roughly what age they were diagnosed) and to make the resulting record easy to share with any doctor or update as new information becomes available — for instance, if a relative receives a new diagnosis later.</div>}
      />
      <FootnoteAside>The CDC has specifically noted that family health history is one of the few genuinely free risk-assessment tools available in medicine — no lab test or imaging required, just accurate information gathered from family members and organized in one place.</FootnoteAside>

      <p>
      The value here isn&apos;t complicated medicine — it&apos;s simply making sure real, already-known family information actually reaches the doctor who can do something useful with it.
      </p>

      <QuickCheck
      question="Why is a written family health history generally more useful to a doctor than relying on memory during an appointment?"
      options={[
      { text: "Because doctors are legally required to only accept written records", correct: false, explanation: "This isn't a legal requirement — it's a practical information-quality issue: a written record is simply more complete and accurate than what's recalled under the time pressure of a short appointment." },
      { text: "Because a prepared written record is more likely to be complete and accurate than information recalled on the spot during a time-limited appointment, especially across multiple relatives and generations", correct: true, explanation: "Correct. The core value is completeness and accuracy — patterns across generations are easy to miss when reconstructing family history from memory in real time." },
      { text: "Because hereditary conditions only matter if they're formally documented in writing somewhere official", correct: false, explanation: "Hereditary risk is a biological reality independent of documentation — the point of writing it down is making already-real information usable by a doctor, not creating the risk itself." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Building a basic family health record (baseline case)</h3>
      <div className="prose-p">
      Using a free tool like the Surgeon General&apos;s My Family Health Portrait, someone records each close relative (parents, siblings, grandparents, aunts, uncles), any significant health conditions they&apos;ve had, and roughly the age of diagnosis where known. The finished record can be printed, saved, or shared directly with a doctor, and updated any time new information comes up.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Spotting a pattern that a single relative&apos;s case wouldn&apos;t reveal (edge case / variation)</h3>
      <div className="prose-p">
      One grandparent having a heart condition in their 80s is common and, on its own, doesn&apos;t suggest much. But if a written family history also shows a parent and an aunt both diagnosed with a related heart condition well before age 50, that specific pattern — early onset across multiple close relatives — is exactly the kind of signal that can prompt a doctor to consider earlier or more frequent cardiac screening, a pattern easy to miss if each relative&apos;s history were only ever discussed in isolation.
      </div>

      <QuickCheck
      question="What makes the pattern of 'a parent and an aunt both diagnosed with a heart condition before age 50' more clinically notable than one grandparent's heart condition at age 80?"
      options={[
      { text: "Younger ages of diagnosis are always medically irrelevant by comparison", correct: false, explanation: "It's the opposite — an unusually young age of onset, especially appearing more than once in close relatives, is often a more notable hereditary signal, not a less relevant one." },
      { text: "Multiple close relatives affected by a related condition at an unusually young age is a stronger hereditary signal than a single relative's condition appearing at a typically older age", correct: true, explanation: "Correct. Patterns — multiple affected relatives, especially at younger-than-typical ages — are exactly what family health history is designed to surface for a doctor to evaluate." },
      { text: "Grandparents' health conditions are never relevant to a family history record", correct: false, explanation: "Grandparents are one of the standard categories included in a family health history — they're relevant, just as one data point among several, not the deciding factor here." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Keeping the record updated over time (real-world / applied case)</h3>
      <div className="prose-p">
      A family builds their health history record one year, then a sibling receives a new diagnosis two years later. Treating the record as a living document — updating it when new information appears, rather than a one-time project — means the next doctor&apos;s visit still benefits from the most current, accurate picture, rather than one that&apos;s already gone stale.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="A simple family health history structure"
      type="detail"
      svgSrc="/diagrams/health-body-basics-building-a-family-health-record-habit-family-tree-structure.svg"
      altText="A simple family tree diagram with boxes for parents, siblings, and grandparents, each box labeled with a placeholder for a significant health condition and approximate age of diagnosis, illustrating the basic structure a family health history record follows."
      />
      <p>
      Each box captures the same few fields — relationship, condition, approximate age of diagnosis — repeated consistently across relatives, which is what makes the resulting record easy for a doctor to scan quickly.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Trying to recall family health history from memory during a doctor's appointment.", fix: "Build and bring a written record ahead of time, so nothing important gets left out under time pressure." },
      { mistake: "Treating the family health record as a one-time task, never updated again.", fix: "Revisit and update the record periodically, especially after any relative receives a new significant diagnosis." },
      { mistake: "Only recording your own immediate household, skipping grandparents, aunts, and uncles.", fix: "Include the standard categories — parents, siblings, grandparents, aunts, and uncles — since hereditary patterns often show up across that wider circle." },
      ]}
      />
      <MisconceptionCallout
      myth="Family health history only matters if you already know your family has 'the same disease' as you might get."
      reality={<p>Family health history is useful precisely because it can reveal patterns you wouldn&apos;t have connected on your own — an early-onset condition across multiple relatives, or a cluster of related (not identical) conditions, can both be meaningful signals a doctor is trained to interpret. The value isn&apos;t in the patient diagnosing themselves from the pattern; it&apos;s in making sure the doctor has the complete picture to work with.</p>}
      />

      <QuickCheck
      question="What is the primary purpose of building a family health history record?"
      options={[
      { text: "To allow a person to diagnose their own future health conditions without a doctor", correct: false, explanation: "The record is meant to inform a doctor's professional assessment, not to serve as a self-diagnosis tool for the person building it." },
      { text: "To give a doctor complete, accurate, organized information about hereditary risk factors that might not surface from memory alone during an appointment", correct: true, explanation: "Correct. The record's value is in supporting a doctor's professional risk assessment with complete, accurate family information, not replacing that assessment." },
      { text: "To meet a legal documentation requirement before receiving any medical care", correct: false, explanation: "There's no legal requirement to maintain a family health history — it's a voluntary, recommended practice because of its practical value to preventive care." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Use a free structured tool like the Surgeon General's My Family Health Portrait to start building your family health history.",
      "Include parents, siblings, grandparents, aunts, and uncles, noting significant conditions and approximate ages of diagnosis where known.",
      "Bring the written record to your next doctor's appointment rather than relying on memory in the moment.",
      "Revisit and update the record whenever a relative receives a new significant diagnosis.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is a family health history?", answer: "A written record of significant health conditions among close blood relatives — parents, siblings, grandparents, aunts, and uncles — used by doctors to assess hereditary risk." },
      { question: "Is there a free tool to help build one?", answer: "Yes. The U.S. Surgeon General's office offers My Family Health Portrait, a free structured tool designed specifically for building and organizing a family health history." },
      { question: "How often should I update my family health history?", answer: "Whenever a close relative receives a new significant diagnosis, or periodically (roughly every few years) even without a specific trigger, since new information can accumulate over time." },
      { question: "Does a family history of a condition mean I will definitely get it too?", answer: "No. It indicates an elevated hereditary risk factor a doctor can weigh alongside other information — it is not a prediction or diagnosis on its own." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
