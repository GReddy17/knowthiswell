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
  title: "Choking First Aid Basics (Heimlich Maneuver Overview)",
  category: "health-body-basics",
  order: 22,
  subtopic: "first-aid-basics",
  tags: ["choking first aid", "Heimlich maneuver", "abdominal thrusts", "airway obstruction awareness"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "The Red Cross distinguishes mild airway obstruction (the person can still cough or speak) from severe obstruction (they cannot) — and the two situations call for very different responses.",
  summary: "The American Red Cross frames choking response around one key distinction: whether the airway is mildly or severely obstructed, judged by whether the person can still cough, speak, or breathe at all — mild obstruction calls for encouragement to keep coughing, while severe obstruction is the situation abdominal thrusts (the maneuver popularly called the Heimlich) are meant to address, and this is a hands-on physical technique that certified training teaches safely.",
  sources: [
    { label: "American Red Cross — Choking Care and First Aid", url: "https://www.redcross.org/take-a-class/first-aid/performing-first-aid/choking-care" },
    { label: "American Heart Association — Choking Relief", url: "https://cpr.heart.org/en/resources/what-is-cpr/choking" },
    { label: "Mayo Clinic — Choking: First Aid", url: "https://www.mayoclinic.org/first-aid/first-aid-choking/basics/art-20056637" },
  ],
  seeAlso: [
    "health-body-basics/recognizing-signs-of-a-medical-emergency",
    "health-body-basics/cpr-basics-an-informational-overview",
    "health-body-basics/basic-first-aid-kit-essentials",
  ],
  glossary: [
    {"term":"Airway obstruction","definition":"A blockage of the throat or windpipe that partially or fully prevents air from moving into the lungs, ranging from mild (some air still passes) to severe (no air passes at all)."},
    {"term":"Abdominal thrusts","definition":"A first-aid technique (popularly called the Heimlich maneuver) using inward and upward pressure below the ribcage to try to force a lodged object out of the airway during severe choking — a hands-on skill taught through certified training."},
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
      <strong>This entry is a general, informational overview of choking response — it is NOT first aid instruction and cannot teach you to safely perform abdominal thrusts.</strong> Abdominal thrusts are a physical technique that can cause injury if done incorrectly and require certified, hands-on training (American Red Cross or American Heart Association) to perform safely and effectively. In any real choking emergency, call emergency services immediately.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "The Red Cross's central distinction is mild vs. severe airway obstruction — judged by whether the person can still cough, speak, or breathe at all, not by how the choking looks from the outside.",
      "Mild obstruction (some air is still moving) calls for encouraging continued coughing, not intervention — coughing is the body's own most effective clearing mechanism at that stage.",
      "Severe obstruction (no air moving, unable to cough, speak, or breathe) is the situation abdominal thrusts are meant to address — a hands-on physical technique that certified training teaches to perform safely.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">When someone is choking, the Red Cross&apos;s public guidance draws one key line: can they still cough, speak, or breathe at all? If yes, that&apos;s a mild <TermLink href="/health-body-basics/choking-first-aid-basics-heimlich-maneuver-overview">airway obstruction</TermLink>, and the recommended response is to encourage them to keep coughing — their own airway-clearing reflex is doing the work. If no air is moving at all, that&apos;s severe obstruction, the situation <TermLink href="/health-body-basics/choking-first-aid-basics-heimlich-maneuver-overview">abdominal thrusts</TermLink> are meant to address, and someone should call emergency services immediately.</div>}
      detailed={<div className="prose-p">The mild-vs-severe distinction matters because the two situations call for opposite instincts. With mild obstruction, coughing is generating enough airflow to potentially clear the object on its own, and interrupting that with physical intervention isn&apos;t the Red Cross&apos;s recommended first response. With severe obstruction, no air is moving at all — the person may be clutching their throat (the universal choking sign), unable to speak or cough, and possibly beginning to turn blue — and abdominal thrusts (or back blows, depending on the specific certified protocol and the person&apos;s age and size) are the technique the Red Cross and AHA teach to try to dislodge the object. Both organizations teach this through hands-on courses using training manikins, specifically because thrust technique, hand placement, and force need supervised practice to perform safely — done incorrectly, thrusts can injure internal organs, which is exactly why this overview describes the concept rather than instructing the technique itself.</div>}
      />
      <FootnoteAside>The &quot;universal sign of choking&quot; — hands clutched to the throat — is a widely taught visual cue precisely because a choking person often cannot speak to ask for help, making a recognizable silent signal important for bystanders to know.</FootnoteAside>

      <p>
      Getting the mild-vs-severe distinction right is the single most important judgment call in this whole topic, which is why certified courses spend real training time on how to assess it correctly.
      </p>

      <QuickCheck
      question="A person is coughing forcefully and can still make some sound. According to Red Cross guidance, what category of obstruction is this, and what's the recommended response?"
      options={[
      { text: "Severe obstruction — begin abdominal thrusts immediately", correct: false, explanation: "The ability to still cough forcefully and make sound is specifically the marker of mild obstruction, not severe — abdominal thrusts are reserved for when no air is moving at all." },
      { text: "Mild obstruction — encourage them to keep coughing, since their own cough is still moving air and may clear the object", correct: true, explanation: "Correct. As long as someone can still cough or speak, the Red Cross's guidance is to let their own coughing continue rather than intervening physically." },
      { text: "It's impossible to categorize without knowing exactly what they're choking on", correct: false, explanation: "The categorization doesn't depend on identifying the specific object — it depends only on whether air and sound are still getting through, which is directly observable." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Assessing mild vs. severe in the first few seconds (baseline case, conceptual only)</h3>
      <div className="prose-p">
      Per Red Cross guidance, the first assessment is simple: ask &quot;are you choking?&quot; If the person can answer or cough forcefully, obstruction is mild — encourage continued coughing and stay with them. If they cannot speak, cough, or make more than a weak sound, and may be clutching their throat, that&apos;s severe obstruction and warrants immediate action, including calling emergency services.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why the response differs for infants (edge case / variation, conceptual only)</h3>
      <div className="prose-p">
      Both the AHA and Red Cross teach a modified, distinct technique for infants under one year old, involving back blows and chest thrusts rather than standard abdominal thrusts, due to differences in infant anatomy. This is exactly the kind of detail — different technique for a different age group — that certified infant/child first-aid courses cover explicitly and a general overview like this one is not equipped to teach safely.
      </div>

      <QuickCheck
      question="Why does the recommended choking response differ for infants compared to adults?"
      options={[
      { text: "It doesn't — the same abdominal thrust technique is used regardless of age", correct: false, explanation: "This is incorrect — the AHA and Red Cross both teach a modified technique (back blows and chest thrusts) for infants under one year old, distinct from adult abdominal thrusts." },
      { text: "Because infant anatomy differs from adult anatomy, certified courses teach a modified technique (back blows and chest thrusts) specifically designed to be safe and effective for infants", correct: true, explanation: "Correct. This is exactly the kind of age-specific detail that requires certified training to learn and apply safely — it isn't a minor variation." },
      { text: "Because infants are less likely to choke than adults, so a simpler response is sufficient", correct: false, explanation: "Infants are not less prone to choking — young children are actually a commonly cited choking-risk group, which is part of why a specific, correct technique for their anatomy matters." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: What happens if the object doesn&apos;t clear (real-world / applied case)</h3>
      <div className="prose-p">
      If a choking person becomes unresponsive, Red Cross and AHA guidance shifts to CPR-style chest compressions (checking the mouth for a visible, removable object between cycles), alongside continued emergency services response. This transition — from thrusts to CPR — is another certified-course detail illustrating why this overview stops at explaining the concept rather than attempting to instruct the full technique.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Mild vs. severe airway obstruction — the Red Cross's key decision point"
      type="comparison"
      svgSrc="/diagrams/health-body-basics-choking-first-aid-basics-heimlich-maneuver-overview-mild-vs-severe.svg"
      altText="A two-column comparison diagram: the left column labeled mild obstruction shows a person coughing forcefully with the word can-still-cough-speak-breathe, leading to encourage continued coughing; the right column labeled severe obstruction shows a person clutching their throat unable to make sound, leading to call emergency services and abdominal thrusts by a trained responder."
      />
      <p>
      The whole decision tree branches from one observable question — can air and sound still get through — rather than from any attempt to identify the choking object itself.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Performing back slaps or abdominal thrusts on someone who is still coughing forcefully (mild obstruction).", fix: "Let their own coughing continue — physical intervention is reserved for severe obstruction, when no air is moving at all." },
      { mistake: "Assuming a general overview like this one is sufficient preparation to safely perform abdominal thrusts.", fix: "Take a certified Red Cross or AHA course, which uses hands-on practice with training manikins to teach correct hand placement and force." },
      { mistake: "Using the same technique on an infant as on an adult.", fix: "Certified infant/child first-aid courses teach a distinct, anatomy-appropriate technique — never assume the adult method applies." },
      ]}
      />
      <MisconceptionCallout
      myth="If someone is choking, the first thing to do is start abdominal thrusts (the 'Heimlich') right away."
      reality={<p>The Red Cross&apos;s actual guidance starts with assessment, not action: can the person still cough, speak, or breathe? If yes, obstruction is mild and coughing should continue uninterrupted. Abdominal thrusts are specifically reserved for severe obstruction, when no air is moving at all — jumping straight to thrusts skips the assessment step that determines whether they&apos;re even the appropriate response.</p>}
      />

      <QuickCheck
      question="What is the single most important practical takeaway from this overview?"
      options={[
      { text: "That this page teaches you everything needed to safely perform abdominal thrusts", correct: false, explanation: "This is explicitly not the case — the technique requires certified, hands-on training to perform safely, which this overview cannot substitute for." },
      { text: "That the mild-vs-severe assessment (can they still cough, speak, or breathe?) determines the correct response, and safely performing abdominal thrusts requires certified hands-on training this page cannot provide", correct: true, explanation: "Correct. Understanding the decision framework is useful general knowledge; the physical technique itself requires supervised instruction." },
      { text: "That choking is rare enough that this information is unlikely to ever be relevant", correct: false, explanation: "Choking is a commonly cited cause of first-aid emergencies, particularly for young children — this isn't a rare-edge-case topic." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Take a certified Red Cross or AHA first-aid course to learn correct, safe abdominal thrust technique through hands-on practice.",
      "Learn the universal choking sign (hands clutched to the throat) so you can recognize it even if the person can't speak.",
      "Understand the mild-vs-severe distinction (can they cough, speak, breathe?) so you know when intervention is or isn't the recommended response.",
      "In any real choking emergency with severe obstruction, call emergency services immediately alongside any trained response.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What's the difference between mild and severe choking?", answer: "Mild obstruction means the person can still cough, speak, or make sound — some air is moving. Severe obstruction means no air is moving at all; they cannot cough, speak, or breathe." },
      { question: "Should you hit someone's back if they're choking but still coughing?", answer: "Red Cross guidance says no — if someone can still cough forcefully, let their own coughing continue, since it's actively moving air and may clear the obstruction on its own." },
      { question: "Can you learn the Heimlich maneuver from an article?", answer: "No — abdominal thrusts are a physical technique that can cause injury if performed incorrectly, and the American Red Cross and American Heart Association specifically teach it through certified, hands-on courses with training manikins." },
      { question: "Is the choking response the same for infants and adults?", answer: "No. Certified courses teach a distinct technique (back blows and chest thrusts) for infants under one year old, reflecting differences in infant anatomy compared to adults." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
