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
  title: "Recognizing Signs of a Medical Emergency",
  category: "health-body-basics",
  order: 21,
  subtopic: "first-aid-basics",
  tags: ["medical emergency signs", "when to call 911", "emergency warning signs", "first aid awareness"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Health agencies publish general categories of warning signs — like sudden severe pain or trouble breathing — where the guidance is simply to call emergency services, not to self-diagnose what's wrong.",
  summary: "The American College of Emergency Physicians and CDC both publish general categories of warning signs (sudden severe pain, trouble breathing, sudden confusion, uncontrolled bleeding, among others) where the correct action is the same regardless of the underlying cause: call emergency services immediately, rather than trying to determine a diagnosis first.",
  sources: [
    { label: "American College of Emergency Physicians — When to Go to the ER", url: "https://www.emergencyphysicians.org/article/know-when-to-go/know-when-to-go-to-the-emergency-room" },
    { label: "CDC — Know the Signs of a Medical Emergency", url: "https://www.cdc.gov/injury/" },
    { label: "Mayo Clinic — First Aid: Recognizing a Medical Emergency", url: "https://www.mayoclinic.org/first-aid" },
  ],
  seeAlso: [
    "health-body-basics/cpr-basics-an-informational-overview",
    "health-body-basics/understanding-allergic-reaction-first-response",
    "health-body-basics/basic-first-aid-kit-essentials",
  ],
  glossary: [
    {"term":"Emergency warning sign","definition":"A general category of symptom (such as sudden severe pain, trouble breathing, or sudden confusion) that health agencies flag as a reason to seek immediate emergency care, regardless of the specific underlying cause."},
    {"term":"Triage","definition":"The process emergency responders and hospital staff use to sort patients by the urgency of their condition, so the most time-critical cases are treated first."},
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
      <strong>This entry lists general emergency warning-sign categories published by health agencies — it is not a diagnostic tool.</strong> It cannot tell you what is wrong with a specific person. If you or someone near you experiences any of these general categories, call emergency services immediately rather than trying to match symptoms to a cause first.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "Health agencies like the American College of Emergency Physicians (ACEP) publish general categories of warning signs — not specific diagnoses — where the correct response is always the same: call emergency services.",
      "The categories are intentionally broad (sudden severe pain, trouble breathing, sudden confusion, uncontrolled bleeding, among others) because many very different underlying causes can produce the same urgent-looking symptom.",
      "Trying to figure out exactly what's wrong before calling for help is itself a documented mistake — the categories exist precisely so bystanders don't need a diagnosis to know it's time to act.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Emergency medicine organizations publish lists of general <TermLink href="/health-body-basics/recognizing-signs-of-a-medical-emergency">emergency warning signs</TermLink> — categories like sudden difficulty breathing, sudden severe pain, sudden confusion or trouble speaking, or uncontrolled bleeding. The point of these categories is that you don&apos;t need to know the cause to act correctly: any of them is a reason to call emergency services right away, rather than waiting to see if it resolves or trying to work out a diagnosis first.</div>}
      detailed={<div className="prose-p">ACEP and similar bodies frame these categories broadly on purpose, because a single symptom category can be produced by many different underlying conditions with very different specific treatments, but the same correct first action: get emergency care moving. Sudden severe chest or abdominal pain, for instance, could reflect several different serious conditions — the responding clinicians, not a bystander, are the ones equipped to distinguish between them once care begins. This is also why emergency departments use <TermLink href="/health-body-basics/recognizing-signs-of-a-medical-emergency">triage</TermLink> — sorting arriving patients by urgency of presenting signs, not by a bystander&apos;s guess at diagnosis, since the visible warning sign is what determines how urgently a patient needs to be seen.</div>}
      />
      <FootnoteAside>ACEP&apos;s public guidance explicitly frames its warning-sign list as &quot;when in doubt, seek care&quot; — the organization states plainly that it is better to be evaluated and found not to have an emergency than to delay care for something serious, reflecting how emergency medicine treats false alarms as an acceptable tradeoff against delayed treatment.</FootnoteAside>

      <p>
      None of the categories below require you to know what&apos;s actually happening medically — that&apos;s the entire design of publishing them this way.
      </p>

      <QuickCheck
      question="Someone feels sudden, severe chest pain but isn't sure if it's 'serious enough' to call for help, and decides to wait 20 minutes to see if it passes. What does ACEP's guidance say about this approach?"
      options={[
      { text: "Waiting to see if a warning sign resolves on its own is the recommended first step", correct: false, explanation: "This is the opposite of the guidance — sudden severe pain is explicitly listed as a category where the recommended action is to seek care immediately, not to wait and observe." },
      { text: "Sudden severe pain is one of the general warning-sign categories where the guidance is to call for help immediately, without first trying to determine how serious it is or waiting to see if it passes", correct: true, explanation: "Correct. The category-based approach exists specifically so people don't have to make that judgment call themselves before acting." },
      { text: "Only chest pain in someone with a known heart condition counts as an emergency warning sign", correct: false, explanation: "The warning-sign categories aren't restricted to people with a known prior condition — sudden severe pain is flagged as a general warning sign regardless of medical history." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The general warning-sign categories as published (baseline case)</h3>
      <div className="prose-p">
      ACEP&apos;s published categories include: difficulty breathing or shortness of breath; chest or upper abdominal pain or pressure; fainting, sudden dizziness, or weakness; sudden changes in vision; confusion or changes in mental status; any sudden severe pain; uncontrolled bleeding; severe or persistent vomiting; coughing up or vomiting blood; and suicidal or homicidal feelings. None of these requires identifying a cause — the category itself is the signal to act.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why the same category covers very different real causes (edge case / variation)</h3>
      <div className="prose-p">
      &quot;Sudden confusion or changes in mental status&quot; could reflect a stroke, severe low blood sugar, a serious infection, or several other conditions — each with a different specific treatment. A bystander cannot reliably distinguish between these in the moment, which is exactly why the guidance doesn&apos;t ask them to: the category alone is sufficient reason to call for emergency evaluation, where trained clinicians can determine and treat the actual cause.
      </div>

      <QuickCheck
      question="Why does ACEP group very different medical causes (like stroke, low blood sugar, and infection) under one broad warning-sign category like 'sudden confusion'?"
      options={[
      { text: "Because those conditions are all treated identically once a person reaches the hospital", correct: false, explanation: "The specific treatments differ significantly by cause — the point of the shared category isn't that treatment is identical, but that the correct first action (seek emergency care) is identical regardless of cause." },
      { text: "Because a bystander doesn't need to identify the specific cause to take the correct first action — calling for emergency care is the right response regardless of which of these conditions is actually happening", correct: true, explanation: "Correct. Broad categories let people act correctly without needing diagnostic knowledge they don't have and shouldn't need in the moment." },
      { text: "Because those specific conditions are actually quite rare and the category is mostly precautionary", correct: false, explanation: "The category groups them because they're all genuinely serious and time-sensitive, not because they're individually unlikely — the shared urgency, not shared rarity, is why they're grouped." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: What actually happens after you call (real-world / applied case)</h3>
      <div className="prose-p">
      Once emergency services are contacted, dispatchers are trained to ask structured questions to gauge urgency and can often give real-time guidance (such as basic first-aid instructions) while help is on the way. Emergency departments then use triage to prioritize patients by the urgency of their presenting signs — meaning the system, not the caller, is designed to sort out what&apos;s actually happening and how urgently.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="From warning-sign category to emergency response — no diagnosis required"
      type="flow"
      svgSrc="/diagrams/health-body-basics-recognizing-signs-of-a-medical-emergency-decision-flow.svg"
      altText="A simple flow diagram showing a bystander observing a general warning-sign category such as sudden severe pain, trouble breathing, or sudden confusion, leading directly to a single action box reading call emergency services, which then leads to a triage and treatment box handled by trained responders — illustrating that no diagnosis step happens before the call."
      />
      <p>
      The diagram has no diagnosis step between noticing a warning sign and calling for help — that omission is intentional, since figuring out what&apos;s actually wrong is the job of the people who arrive after the call, not the bystander who makes it.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Trying to determine a diagnosis before deciding whether to call for help.", fix: "Match the situation to a general warning-sign category instead — if it fits, call. Diagnosis is the responders' job, not the bystander's." },
      { mistake: "Waiting to see if a warning sign resolves on its own before acting.", fix: "Health agencies explicitly recommend acting on warning signs immediately rather than adopting a wait-and-see approach." },
      { mistake: "Assuming a warning sign only counts as an emergency if it happens to someone with a relevant known medical history.", fix: "The categories apply regardless of prior history — a first-time occurrence of a warning sign is treated the same as a recurring one." },
      ]}
      />
      <MisconceptionCallout
      myth="You need to be fairly confident something is 'actually serious' before it's appropriate to call emergency services."
      reality={<p>ACEP&apos;s own guidance states it is better to be evaluated and found not to have an emergency than to delay care for something serious. The warning-sign categories are deliberately broad and inclusive precisely so people don&apos;t have to be certain before acting — uncertainty itself is not a reason to wait.</p>}
      />

      <QuickCheck
      question="What is the core practical purpose of publishing broad, cause-agnostic warning-sign categories rather than a detailed diagnostic checklist?"
      options={[
      { text: "To make it easier for people to self-diagnose accurately at home", correct: false, explanation: "The categories are explicitly not designed for self-diagnosis — they're designed to prompt the correct action (calling for help) without requiring a diagnosis at all." },
      { text: "To let anyone, regardless of medical knowledge, recognize when to seek emergency care without first needing to identify what's actually wrong", correct: true, explanation: "Correct. This is exactly why the categories are broad — usability for non-medical bystanders is the design goal, not diagnostic precision." },
      { text: "To reduce the number of people who call emergency services for non-serious issues", correct: false, explanation: "The guidance explicitly leans the other way — agencies state it's better to call and be wrong than to delay for something serious, which increases rather than reduces calls for ambiguous situations." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Learn the general warning-sign categories (sudden severe pain, trouble breathing, sudden confusion, uncontrolled bleeding, and similar) so you can recognize them without needing a diagnosis.",
      "If a situation matches one of these categories, call emergency services immediately rather than waiting to see if it improves.",
      "Stay on the line with the dispatcher — they're trained to ask questions and can often give real-time guidance while help is on the way.",
      "Don't let uncertainty about 'how serious this really is' delay the call — acting on the category is the intended response.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do I know if something is a real medical emergency?", answer: "Health agencies like ACEP publish general warning-sign categories — sudden severe pain, trouble breathing, sudden confusion, uncontrolled bleeding, and similar — where the recommended action is to call emergency services regardless of the specific cause." },
      { question: "Should I wait to see if symptoms get better before calling for help?", answer: "No. ACEP's guidance explicitly recommends against a wait-and-see approach for warning-sign categories — it's better to seek evaluation and find it wasn't an emergency than to delay care for something serious." },
      { question: "Do I need to know what's medically wrong before calling emergency services?", answer: "No. The warning-sign categories are designed so a bystander can act correctly without a diagnosis — determining the actual cause is the job of the responders and clinicians who arrive after the call." },
      { question: "What happens after I call emergency services?", answer: "Dispatchers ask structured questions to gauge urgency and can often give real-time guidance. Once care begins, hospitals use triage to prioritize patients by the urgency of their presenting signs." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
