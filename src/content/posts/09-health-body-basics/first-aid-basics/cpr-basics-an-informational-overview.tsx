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
  title: "CPR Basics: An Informational Overview",
  category: "health-body-basics",
  order: 19,
  subtopic: "first-aid-basics",
  tags: ["CPR overview", "chain of survival", "cardiac arrest", "emergency response awareness"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "CPR is a real, structured emergency response with a documented sequence — but competently performing it requires certified hands-on training, not a webpage.",
  summary: "The American Heart Association frames CPR as one link in a documented 'chain of survival' — recognize cardiac arrest, call emergency services, begin chest compressions, use an AED if available, and hand off to advanced care — and while the general sequence is public information, performing effective compressions and using an AED correctly are physical skills that can only be reliably learned through certified, hands-on training.",
  sources: [
    { label: "American Heart Association — CPR Facts and Stats", url: "https://cpr.heart.org/en/resources/cpr-facts-and-stats" },
    { label: "American Red Cross — CPR Steps", url: "https://www.redcross.org/take-a-class/cpr/performing-cpr/cpr-steps" },
    { label: "CDC — Cardiac Arrest", url: "https://www.cdc.gov/heartdisease/cardiac_arrest.htm" },
  ],
  seeAlso: [
    "health-body-basics/recognizing-signs-of-a-medical-emergency",
    "health-body-basics/choking-first-aid-basics-heimlich-maneuver-overview",
  ],
  glossary: [
    {"term":"Cardiac arrest","definition":"A sudden loss of heart function, breathing, and consciousness, caused by an electrical malfunction in the heart — distinct from a heart attack, which is a circulation problem, though a heart attack can trigger cardiac arrest."},
    {"term":"Chain of survival","definition":"The American Heart Association's term for the sequence of actions — early recognition, calling for help, early CPR, early defibrillation, and advanced care — that together give a person in cardiac arrest the best chance of survival."},
    {"term":"AED (automated external defibrillator)","definition":"A portable device that analyzes a person's heart rhythm and, if needed, delivers an electric shock to try to restore a normal rhythm — designed with voice prompts for use by a trained or even untrained bystander."},
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
      <strong>This entry is a general, informational overview of CPR as a concept — it is NOT CPR instruction and cannot teach you to actually perform CPR.</strong> Effective chest compressions and AED use are physical skills that require certified, hands-on training (American Heart Association or American Red Cross) to perform competently and safely. In any real cardiac emergency, call emergency services immediately — do not rely on this page to guide real-time action.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "CPR (cardiopulmonary resuscitation) is one link in what the American Heart Association calls the 'chain of survival' for cardiac arrest — recognition, calling for help, CPR, defibrillation, and advanced care, in sequence.",
      "Cardiac arrest is not the same as a heart attack: arrest is a sudden electrical malfunction that stops the heart, breathing, and consciousness, while a heart attack is a circulation blockage that can, but doesn't always, lead to arrest.",
      "Knowing the general sequence exists is informational value; performing effective compressions and using an AED correctly are physical, hands-on skills that only certified training (AHA or Red Cross) can actually teach.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">When someone&apos;s heart suddenly stops (<TermLink href="/health-body-basics/cpr-basics-an-informational-overview">cardiac arrest</TermLink>), the American Heart Association&apos;s public guidance describes a sequence: call emergency services first, then begin chest compressions to keep blood moving until help arrives or an <TermLink href="/health-body-basics/cpr-basics-an-informational-overview">AED</TermLink> is available. This general shape of the response is public information — but doing it correctly, at the right depth and rate, is a trained physical skill, not something read once and reliably performed under real pressure.</div>}
      detailed={<div className="prose-p">The AHA&apos;s <TermLink href="/health-body-basics/cpr-basics-an-informational-overview">chain of survival</TermLink> names five links: early recognition of cardiac arrest and calling emergency services, early CPR to maintain some blood flow to the brain and heart, early defibrillation with an AED to try to restore a normal heart rhythm, effective advanced life support once professional responders arrive, and integrated post-arrest care at a hospital. Each link matters because cardiac arrest survival drops significantly for every minute without intervention — which is exactly why the AHA emphasizes bystander action rather than waiting passively for professionals to arrive. That said, the AHA and Red Cross both structure real certification courses around hands-on practice with feedback (correct depth, rate, hand placement) precisely because these details are difficult to self-teach from a description and get them right under the stress of a real emergency.</div>}
      />
      <FootnoteAside>Modern AEDs are specifically designed with voice-guided prompts so that even a bystander with no CPR training can use one during a real emergency — but the AHA still recommends formal training for confident, competent bystander response, since knowing an AED exists and being comfortable using one under pressure are different things.</FootnoteAside>

      <p>
      This entry exists to explain what CPR is and why the sequence is structured the way it is — not to function as a stand-in for the hands-on practice that certified courses are specifically built around.
      </p>

      <QuickCheck
      question="Someone reads a general overview of CPR online and feels confident they could perform it correctly if needed. What's the concern with that confidence?"
      options={[
      { text: "There's no real concern — reading a clear description is functionally equivalent to hands-on training", correct: false, explanation: "Effective compressions require correct depth, rate, and hand placement under real physical and time pressure — skills that certified courses specifically teach through supervised, hands-on practice with feedback, which reading alone can't replicate." },
      { text: "Reading a description explains the concept and sequence, but performing effective compressions at the correct depth and rate is a physical skill that hands-on certified training specifically teaches and reading cannot replace", correct: true, explanation: "Correct. This is exactly why AHA and Red Cross courses are built around supervised, hands-on practice rather than just written or video instruction." },
      { text: "The concern only applies to AED use, not to chest compressions", correct: false, explanation: "The same concern applies to both — chest compression technique (depth, rate, hand placement) is just as much a trained physical skill as AED use, even though AEDs have voice guidance built in." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The general public-information sequence (baseline case, conceptual only)</h3>
      <div className="prose-p">
      Per AHA public guidance, the general shape of bystander response to a suspected cardiac arrest is: check responsiveness and breathing, call emergency services (or have someone else call while you stay with the person), begin chest compressions if trained to do so, and use an AED as soon as one is available, following its voice prompts. This is the conceptual sequence — not step-by-step instruction for performing it.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why &quot;calling emergency services&quot; is explicitly the first action, not an afterthought (edge case / variation)</h3>
      <div className="prose-p">
      A common misconception is that CPR itself is the priority and calling for help can wait. The AHA&apos;s chain-of-survival framing places calling emergency services as an early, near-simultaneous action specifically because it starts the arrival clock for defibrillation and advanced care — actions that CPR alone cannot substitute for, only bridge toward.
      </div>

      <QuickCheck
      question="Why does AHA guidance emphasize calling emergency services early rather than treating it as something to do only after CPR has been attempted for a while?"
      options={[
      { text: "Because compressions alone are just as effective as professional care and the call is mostly a formality", correct: false, explanation: "Compressions maintain some blood flow but don't restore a normal heart rhythm — that generally requires defibrillation and advanced care, which is exactly why starting the response clock early matters." },
      { text: "Because calling early starts the process of getting an AED and advanced medical care on the way, which CPR alone cannot provide — CPR is a bridge, not a replacement for those steps", correct: true, explanation: "Correct. This is the core logic of the 'chain of survival' framing — every link matters, and delaying the call delays every link after it." },
      { text: "Because most emergency dispatchers require CPR to already be underway before they'll respond", correct: false, explanation: "This isn't how emergency dispatch works — calling is the first step specifically to get help moving as fast as possible, not something gated behind starting CPR first." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why certified training exists as a distinct, hands-on product (real-world / applied case)</h3>
      <div className="prose-p">
      AHA and Red Cross CPR courses use practice manikins with feedback sensors specifically so a trainee can see, in real time, whether their compression depth and rate are correct — a detail that&apos;s essentially impossible to self-assess from reading a description. This is precisely why these organizations built physical, supervised courses rather than relying on written guidance alone to prepare bystanders.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The American Heart Association's chain of survival"
      type="flow"
      svgSrc="/diagrams/health-body-basics-cpr-basics-an-informational-overview-chain-of-survival.svg"
      altText="Five connected links labeled in sequence: early recognition and calling emergency services, early CPR, early defibrillation with an AED, effective advanced life support, and integrated post-arrest care, illustrating that each link depends on the one before it."
      />
      <p>
      Each link exists because the one before it alone isn&apos;t sufficient — CPR keeps some blood moving, but restoring a normal heart rhythm generally requires the links that follow it.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming reading about CPR is a substitute for certified, hands-on training.", fix: "Treat informational overviews (like this one) as context for why training matters — take an actual AHA or Red Cross course to be genuinely prepared." },
      { mistake: "Delaying the emergency services call to begin compressions first.", fix: "Call (or have someone else call) as an early, near-immediate step — it starts every subsequent link in the chain of survival." },
      { mistake: "Hesitating to use an AED because of uncertainty about how it works.", fix: "Modern AEDs are designed with voice guidance for use by untrained bystanders — hesitating to use one when available can cost critical time." },
      ]}
      />
      <MisconceptionCallout
      myth="Cardiac arrest and a heart attack are basically the same thing, so they'd be treated the same way."
      reality={<p>A heart attack is a circulation problem (blocked blood flow to part of the heart muscle), while cardiac arrest is an electrical malfunction that stops the heart, breathing, and consciousness suddenly. A heart attack can trigger cardiac arrest, but many heart attacks do not, and someone can go into cardiac arrest without a preceding heart attack. The response to suspected cardiac arrest — calling emergency services and beginning the chain of survival — is specifically what CPR and AEDs address.</p>}
      />

      <QuickCheck
      question="What is the single most important practical takeaway of this overview?"
      options={[
      { text: "That reading this page is sufficient preparation to perform CPR if needed", correct: false, explanation: "This is explicitly the opposite of the intended takeaway — the overview explains the concept and why hands-on certified training exists, not a substitute for that training." },
      { text: "That CPR is one link in a documented chain of survival, that calling emergency services is an early and critical step, and that competently performing CPR and using an AED require certified, hands-on training this page cannot provide", correct: true, explanation: "Correct. Understanding the concept and its structure is useful general knowledge; the physical skill itself requires supervised, hands-on instruction." },
      { text: "That AEDs are too complicated for an untrained bystander to ever use safely", correct: false, explanation: "The opposite is true — modern AEDs are specifically designed with voice guidance so an untrained bystander can use one, though formal training still builds confidence and competence." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Take an official CPR certification course through the American Heart Association or American Red Cross to actually learn the physical technique.",
      "Learn where AEDs are located in places you frequent (workplace, gym, school) — they're increasingly common in public spaces.",
      "In any real emergency, call emergency services immediately — don't wait or rely on general knowledge alone.",
      "Understand the chain-of-survival concept so you know why each step (calling, compressions, defibrillation, advanced care) matters, even before or alongside getting certified.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Can you learn CPR from an article or video alone?", answer: "No — reading or watching can explain the concept, but the American Heart Association and Red Cross specifically structure real certification around supervised, hands-on practice with feedback, because compression depth, rate, and technique are physical skills that are difficult to self-assess and get right under pressure." },
      { question: "What's the difference between a heart attack and cardiac arrest?", answer: "A heart attack is a circulation problem (blocked blood flow to the heart muscle); cardiac arrest is a sudden electrical malfunction that stops the heart, breathing, and consciousness. A heart attack can lead to cardiac arrest, but they aren't the same event." },
      { question: "Is it safe for an untrained person to use an AED?", answer: "Modern AEDs are designed with voice-guided prompts specifically so an untrained bystander can use one during a real emergency — though the American Heart Association still recommends formal training for confidence and competence." },
      { question: "What should you do first if you suspect someone is in cardiac arrest?", answer: "Call emergency services (or have someone else call) as an early, near-immediate step — this is the first link in the American Heart Association's chain of survival, and it starts every step that follows." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
