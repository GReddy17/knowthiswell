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
  title: "When to See a Doctor vs Self-Care (General Framework)",
  category: "health-body-basics",
  order: 16,
  subtopic: "common-illnesses-and-when-to-seek-care",
  tags: ["self-care", "when to see a doctor", "urgent care", "emergency room", "health literacy"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "The decision isn't just 'mild vs serious' — it's a three-way split between self-care, a scheduled or urgent-care visit, and emergency care, each with a different real trigger.",
  summary: "Deciding between self-care, a doctor's visit, and emergency care generally comes down to three general signals — how severe symptoms are, whether they're changing over time (worsening, unchanged, or improving), and whether any recognized warning signs are present — rather than a single fixed severity threshold, and this entry provides that general framework, not a diagnosis for any specific symptom.",
  sources: [
    { label: "CDC — When to Seek Emergency Medical Care", url: "https://www.cdc.gov/" },
    { label: "American College of Emergency Physicians — When to Go to the ER", url: "https://www.emergencyphysicians.org/article/know-when-to-go/know-when-to-go" },
    { label: "Mayo Clinic — When to See a Doctor", url: "https://www.mayoclinic.org/" },
  ],
  seeAlso: [
    "health-body-basics/recognizing-signs-of-a-medical-emergency",
    "health-body-basics/understanding-fever-whats-actually-happening",
  ],
  glossary: [
    {"term":"Self-care threshold","definition":"The general point at which a symptom is judged mild, stable, or improving enough that home management is reasonable, without a specific diagnosis or professional evaluation."},
    {"term":"Urgent care","definition":"A tier of medical care for conditions that need prompt attention but aren't immediately life-threatening — a middle ground between a scheduled doctor's appointment and an emergency room visit."},
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
      <strong>This entry is a general decision framework, not medical advice or a diagnostic tool.</strong> It cannot evaluate your specific symptoms. When in doubt, or for any symptom that feels severe, sudden, or unusual, contact a doctor or emergency services rather than relying on general guidance alone.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "The self-care-versus-doctor decision isn't binary — there's a real middle tier (urgent care) for symptoms that need prompt but not emergency attention.",
      "Trajectory (is it getting better, staying the same, or getting worse) is often as informative as severity at a single moment for deciding whether to wait or seek care.",
      "A defined set of recognized warning signs (severe pain, difficulty breathing, sudden severe symptoms, among others published by health authorities) generally overrides a 'wait and see' approach regardless of how mild things seemed initially.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Deciding whether to handle something at home, see a doctor, or seek emergency care generally comes down to three things: how severe it is right now, whether it&apos;s getting better or worse, and whether any recognized warning sign is present. Mild, stable, or improving symptoms often fit a <TermLink href="/health-body-basics/when-to-see-a-doctor-vs-self-care-general-framework">self-care threshold</TermLink>; symptoms that are worsening or persisting longer than expected usually warrant a doctor&apos;s visit, possibly through <TermLink href="/health-body-basics/when-to-see-a-doctor-vs-self-care-general-framework">urgent care</TermLink>; and any recognized warning sign generally means emergency care regardless of how things looked before.</div>}
      detailed={<div className="prose-p">This is a three-tier system, not a two-way split. Self-care covers mild, non-worsening symptoms manageable with rest, hydration, and over-the-counter options as appropriate. Urgent care exists specifically for the middle tier — symptoms serious enough to need same-day attention but not immediately life-threatening (a minor fracture, a wound that may need stitches, a worsening infection) — where waiting for a routine appointment could allow the problem to worsen, but an emergency room isn&apos;t medically necessary. Emergency care is reserved for a defined set of warning signs published by health authorities — difficulty breathing, chest pain, sudden severe symptoms, signs of stroke, uncontrolled bleeding, among others — where the framework&apos;s severity/trajectory logic is explicitly overridden: these signs warrant immediate care regardless of how the situation seemed to be trending beforehand.</div>}
      />
      <FootnoteAside>Health authorities publish specific warning-sign lists (like stroke&apos;s F.A.S.T. — face drooping, arm weakness, speech difficulty, time to call emergency services) precisely because certain conditions require immediate recognition rather than a wait-and-monitor approach, given how much outcomes can depend on rapid treatment.</FootnoteAside>

      <p>
      This three-tier framework — not a single severity line — is why &quot;it&apos;s probably nothing, I&apos;ll just wait&quot; and &quot;call an ambulance for everything&quot; are both oversimplifications of how the actual decision generally works.
      </p>

      <QuickCheck
      question="A symptom starts out mild but has been steadily worsening over several days. According to this general framework, does 'it started out mild' mean self-care is still the right approach?"
      options={[
      { text: "Yes — how a symptom started is the only thing that matters for this decision", correct: false, explanation: "Initial severity is only one part of the framework. Trajectory (whether something is worsening over time) is a separate, meaningful signal that can shift the appropriate response even if the starting point was mild." },
      { text: "Not necessarily — a worsening trajectory over several days is itself a signal that may warrant a doctor's visit, even though the symptom started mild, since trajectory and initial severity are separate factors in this general framework", correct: true, explanation: "Correct. This is exactly why the framework treats trajectory as its own signal — 'started mild' doesn't override a genuinely worsening pattern over time." },
      { text: "Worsening symptoms over days always require an emergency room visit specifically", correct: false, explanation: "A worsening but non-emergency trajectory generally points toward a doctor's visit or urgent care, not necessarily an emergency room, unless a specific recognized emergency warning sign is also present." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A mild, stable symptom fitting self-care (baseline case)</h3>
      <div className="prose-p">
      A mild sore throat with no fever, present for one day and not worsening, generally fits the self-care tier — rest, fluids, and over-the-counter options as appropriate, with re-evaluation if it changes rather than an immediate visit.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A middle-tier case suited to urgent care (edge case / variation)</h3>
      <div className="prose-p">
      A minor but clearly displaced finger injury after a fall — painful, swollen, limited mobility, but the person is otherwise stable with no other warning signs — is a common example of the middle tier: it needs prompt professional evaluation (possible imaging, splinting) that shouldn&apos;t wait for a routine scheduled appointment, but doesn&apos;t require an emergency room visit, making urgent care the framework-consistent choice.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A recognized warning sign overriding a mild-seeming start (real-world / applied case)</h3>
      <div className="prose-p">
      Someone with what seemed like ordinary heartburn develops sudden chest pressure radiating to the arm along with shortness of breath — a combination that maps onto recognized cardiac warning signs published by health authorities. Per the framework, this overrides any &quot;it&apos;s probably just heartburn, I&apos;ll wait&quot; reasoning: recognized warning signs call for immediate emergency care regardless of how mild the starting symptom seemed.
      </div>

      <QuickCheck
      question="Why does this general framework treat recognized warning signs (like sudden chest pressure with shortness of breath) as overriding the usual severity/trajectory reasoning?"
      options={[
      { text: "Because these specific sign clusters are associated with conditions where rapid treatment significantly affects outcomes, so health authorities specifically flag them to bypass the ordinary 'wait and monitor' decision process", correct: true, explanation: "Correct. This is exactly why published warning-sign lists exist — for a defined set of conditions, delaying care to 'see how it develops' carries a specific, well-documented risk that the standard framework is designed to avoid." },
      { text: "Warning signs are just a more dramatic way of describing ordinary mild symptoms, with no real difference in urgency", correct: false, explanation: "Recognized warning signs are specifically selected because they're associated with conditions requiring rapid intervention — they're not simply a more dramatic description of ordinary symptoms." },
      { text: "The override only applies to people with a pre-existing diagnosed condition", correct: false, explanation: "Recognized warning-sign guidance applies broadly, regardless of pre-existing diagnosis — the signs themselves, not prior diagnosis history, are what trigger the override." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Three-tier decision framework: self-care, urgent care, emergency care"
      type="flow"
      svgSrc="/diagrams/health-body-basics-when-to-see-a-doctor-vs-self-care-general-framework-decision-tiers.svg"
      altText="A flow diagram with three tiers arranged left to right by increasing urgency: Self-Care for mild, stable, or improving symptoms; Urgent Care for prompt but non-emergency symptoms; and Emergency Care for any recognized warning sign, with a note that recognized warning signs bypass the other two tiers entirely regardless of starting severity."
      />
      <p>
      The bypass arrow from &quot;warning sign present&quot; straight to Emergency Care is the framework&apos;s key structural feature — it&apos;s not a gradual escalation, it&apos;s a direct override.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating the decision as strictly binary — either self-care or the emergency room.", fix: "Remember urgent care exists as a real middle tier for symptoms needing prompt but non-emergency attention." },
      { mistake: "Focusing only on how a symptom started, ignoring whether it's worsening over time.", fix: "Track trajectory (better, same, worse) alongside initial severity — a worsening pattern can shift the appropriate response even from a mild start." },
      { mistake: "Rationalizing away a recognized warning sign because the overall situation still seems mild.", fix: "Treat any recognized warning sign (per CDC/ACEP guidance) as an override to seek emergency care immediately, independent of how mild things otherwise seem." },
      ]}
      />
      <MisconceptionCallout
      myth="If something started out mild, it's safe to just wait and see indefinitely."
      reality={<p>Initial severity is only one input in this framework. A genuinely worsening trajectory over time, or the appearance of a recognized warning sign, both warrant reassessing the decision regardless of how things looked at the start. Health authorities specifically publish warning-sign lists because certain symptom combinations are associated with time-sensitive conditions where &quot;wait and see&quot; carries real, documented risk.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Track whether a symptom is improving, staying the same, or worsening over time, not just its severity at one moment.",
      "Learn your local urgent care options in advance, so you have a real middle-tier choice ready if needed.",
      "Familiarize yourself with published warning-sign lists (like stroke's F.A.S.T. signs) from a source like the CDC or Mayo Clinic.",
      "When in doubt, or if a recognized warning sign appears, contact a doctor or emergency services rather than continuing to self-manage.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do I know if I should go to urgent care instead of the emergency room?", answer: "Urgent care generally fits symptoms needing prompt attention that aren't immediately life-threatening (minor fractures, wounds needing stitches); any recognized emergency warning sign (difficulty breathing, chest pain, stroke signs, uncontrolled bleeding) should go to emergency care instead." },
      { question: "Is it safe to just wait if a symptom is mild?", answer: "Often yes for genuinely mild, stable, or improving symptoms — but track trajectory, since a worsening pattern over time is itself a signal to seek care, independent of how mild the starting point was." },
      { question: "What are examples of recognized medical emergency warning signs?", answer: "Published examples from health authorities include difficulty breathing, chest pain or pressure, sudden severe symptoms, signs of stroke (face drooping, arm weakness, speech difficulty), and uncontrolled bleeding, among others — these override a 'wait and see' approach." },
      { question: "Does 'when to see a doctor' come down to just how severe something feels?", answer: "No — severity is one factor among three: current severity, trajectory over time, and whether any recognized warning sign is present, with warning signs generally overriding the other two." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
