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
  title: "Basic First Aid Kit Essentials",
  category: "health-body-basics",
  order: 17,
  subtopic: "first-aid-basics",
  tags: ["first aid kit", "home safety", "emergency preparedness", "wound care supplies"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A well-stocked first aid kit follows a real checklist — wound care, tools, protection, and medications — not a random grab-bag of bandages.",
  summary: "A basic first aid kit, per American Red Cross guidance, is organized around four functions: treating wounds, tools for managing an injury, protective supplies for the responder, and space for any personal medications — each item earns its place by addressing a specific, common home or travel injury.",
  sources: [
    { label: "American Red Cross — Anatomy of a First Aid Kit", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/anatomy-of-a-first-aid-kit.html" },
    { label: "CDC — Emergency Preparedness and Response: Be Prepared", url: "https://www.cdc.gov/orr/" },
    { label: "Mayo Clinic — First-aid kits: Stock supplies that can save lives", url: "https://www.mayoclinic.org/first-aid/first-aid-kits/basics/art-20056673" },
  ],
  seeAlso: [
    "health-body-basics/how-to-treat-a-minor-cut-or-burn",
    "health-body-basics/basic-wound-care-and-infection-prevention",
    "health-body-basics/recognizing-signs-of-a-medical-emergency",
  ],
  glossary: [
    {"term":"Adhesive bandage","definition":"A small self-sticking dressing (like a Band-Aid) sized for minor cuts and scrapes, one of the most-used items in any first aid kit."},
    {"term":"Sterile gauze pad","definition":"An individually wrapped, germ-free absorbent pad used to cover larger wounds or control bleeding before being secured with tape or a roller bandage."},
    {"term":"Antiseptic wipe","definition":"A single-use wipe containing a mild antimicrobial solution used to clean a wound or the skin around it before a dressing is applied."},
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
      <strong>This entry is general safety information, not medical advice.</strong> A first aid kit supports minor, everyday injuries — it is never a substitute for professional medical care or certified first aid training. For any serious injury or medical emergency, call emergency services immediately.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "A real first aid kit is organized around four functions: wound-care supplies, tools, protective equipment for the responder, and space for personal medications — not a random assortment of bandages.",
      "The American Red Cross publishes a specific, real supply checklist for a basic home kit — following it (rather than guessing) is what turns a box of supplies into something actually useful in a minor emergency.",
      "A kit is only as good as its maintenance — expired antiseptic, missing supplies after use, and a kit nobody in the household can find are the three most common ways a first aid kit fails when it's actually needed.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A basic first aid kit holds a handful of <TermLink href="/health-body-basics/basic-first-aid-kit-essentials">adhesive bandages</TermLink> and <TermLink href="/health-body-basics/basic-first-aid-kit-essentials">sterile gauze pads</TermLink> in a few sizes, tape to hold them in place, an <TermLink href="/health-body-basics/basic-first-aid-kit-essentials">antiseptic wipe</TermLink> to clean a wound first, scissors, tweezers, disposable gloves, and a card with emergency numbers. That short list covers the overwhelming majority of everyday minor injuries — small cuts, scrapes, splinters, and minor burns.</div>}
      detailed={<div className="prose-p">The American Red Cross groups a basic kit into four functional categories rather than a flat list, which makes it easier to check for gaps: wound-care materials (bandages of several sizes, gauze pads, adhesive tape, a roller bandage for larger areas), tools (scissors, tweezers for splinters, a digital thermometer), protective equipment (disposable gloves to protect both the injured person and the responder from contamination, a CPR breathing barrier), and a section for any regular personal or family medications plus a written list of emergency contacts and allergies. Organizing by function, rather than just restocking whatever ran out, is what keeps a kit actually matched to real household risk rather than drifting into an arbitrary pile of supplies.</div>}
      />
      <FootnoteAside>The Red Cross recommends checking a first aid kit at least twice a year to replace expired items (especially antiseptic and any medication) and restock anything used since the last check — an expired antiseptic wipe or a kit missing its scissors is a common reason a &quot;stocked&quot; kit fails in the moment it&apos;s needed.</FootnoteAside>

      <p>
      None of this requires anything exotic — the value of a first aid kit comes almost entirely from having the right basic items in one known, accessible place, not from any specialized equipment.
      </p>

      <QuickCheck
      question="Someone stocks their first aid kit with 40 adhesive bandages but no gauze pads, tape, or antiseptic. What's the practical problem?"
      options={[
      { text: "There's no real problem — bandages alone cover most minor injuries", correct: false, explanation: "Adhesive bandages only work for small, low-bleeding cuts. Without gauze pads and tape, there's no way to dress a larger wound, and without antiseptic there's no way to clean a wound before covering it." },
      { text: "The kit is unbalanced across the four functional categories — it's overloaded on one wound-care item while missing cleaning supplies and materials for anything larger than a small cut", correct: true, explanation: "Correct. A useful kit needs coverage across categories (cleaning, dressing in multiple sizes, tools, protection), not a large quantity of just one item." },
      { text: "The only fix is to add more bandages of the same type", correct: false, explanation: "Adding more of the same item doesn't address the actual gap — the kit needs different kinds of supplies (antiseptic, gauze, tape), not more of what it already has." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Building a basic home kit from the Red Cross checklist (baseline case)</h3>
      <div className="prose-p">
      Following the Red Cross&apos;s published list for a household of four: 20 adhesive bandages (assorted sizes), 5 sterile gauze pads (3x3 in), 1 roll of adhesive tape, 1 roller bandage, 2 pairs of disposable gloves, scissors, tweezers, a digital thermometer, antiseptic wipes, and a card listing each family member&apos;s allergies and emergency contacts. This is a complete, checklist-driven kit, not a guess.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Adapting the base kit for a specific household (edge case / variation)</h3>
      <div className="prose-p">
      A household with a child who has a known bee-sting allergy adds an epinephrine auto-injector prescribed and provided by their doctor (never purchased or added independently) and a written action plan, stored with — not inside — the general kit, since it requires separate handling and expiration tracking. The base kit doesn&apos;t change; a documented, prescribed addition is layered on top of it.
      </div>

      <QuickCheck
      question="Why should a prescribed item like an epinephrine auto-injector be stored separately from — rather than mixed into — the general first aid kit?"
      options={[
      { text: "Because prescribed medical devices need their own expiration tracking and quick, unambiguous access in an emergency, rather than being buried among general supplies", correct: true, explanation: "Correct. A prescribed emergency device needs to be found instantly and its own expiration checked separately — mixing it into a general kit makes both harder." },
      { text: "Because it isn't actually part of first aid at all", correct: false, explanation: "It's very much a first-aid-relevant item for a specific medical need — the reason for separate storage is findability and expiration tracking, not relevance." },
      { text: "There's no real reason; it's just personal preference", correct: false, explanation: "Fast, unambiguous access during an allergic emergency is a real, documented reason for separate, clearly labeled storage." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A travel-sized kit for a car or backpack (real-world / applied case)</h3>
      <div className="prose-p">
      A compact travel kit drops the roller bandage and thermometer but keeps a smaller quantity of every core category: a handful of adhesive bandages, 2 gauze pads, antiseptic wipes, a small roll of tape, and one pair of gloves — enough to handle a minor cut or scrape away from home, while staying small enough to actually be carried and therefore actually used.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="A first aid kit's four functional categories"
      type="detail"
      svgSrc="/diagrams/health-body-basics-basic-first-aid-kit-essentials-four-categories.svg"
      altText="A first aid kit box divided into four labeled sections: wound-care materials such as bandages, gauze, and tape; tools such as scissors and tweezers; protective equipment such as disposable gloves; and a section for personal medications and an emergency contact card."
      />
      <p>
      Checking a kit against these four categories, rather than restocking whatever looks empty, is the fastest way to spot a real gap before it matters.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Buying a pre-made kit once and never checking it again.", fix: "Check the kit at least twice a year, replacing expired antiseptic or medication and restocking anything used since the last check." },
      { mistake: "Overloading on one item (like bandages) while missing others (like gauze, tape, or antiseptic).", fix: "Check coverage across all four functional categories — wound care, tools, protection, and medications/records — not just quantity of one item." },
      { mistake: "Storing the kit somewhere no one in the household actually knows about or can reach quickly.", fix: "Keep the kit in a consistent, known, easily reached location, and make sure every household member knows where it is." },
      ]}
      />
      <MisconceptionCallout
      myth="Any first aid kit is basically as good as any other, so it doesn't matter what's actually inside it."
      reality={<p>A first aid kit&apos;s usefulness comes entirely from what&apos;s inside it matching real, common needs — the American Red Cross publishes a specific checklist for exactly this reason. A kit heavy on one item and missing others (like antiseptic or gauze) can look &quot;stocked&quot; while actually being unable to handle a basic wound properly.</p>}
      />

      <QuickCheck
      question="What is the single most reliable way to know whether a first aid kit is actually adequate?"
      options={[
      { text: "Checking that the box or bag looks full", correct: false, explanation: "A kit can look full while being unbalanced — overloaded on one item and missing others entirely. Visual fullness isn't a reliable check." },
      { text: "Checking it against a real, published checklist (like the Red Cross's) across all four functional categories, and checking expiration dates", correct: true, explanation: "Correct. A specific, real checklist covering wound care, tools, protection, and medications — plus an expiration check — is the reliable standard, not a visual impression." },
      { text: "Assuming any kit purchased from a store is automatically complete", correct: false, explanation: "Commercial kits vary widely in what they include — it's still worth checking contents against a real checklist rather than assuming completeness." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Check your current first aid kit against the Red Cross's four categories: wound care, tools, protection, and medications/records.",
      "Set a twice-a-year reminder to check expiration dates and restock anything used.",
      "Make sure every household member knows exactly where the kit is kept.",
      "For any known medical condition requiring an emergency device (like an epinephrine auto-injector), store it separately with clear labeling and its own expiration check, per your doctor's instructions.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What should be in a basic first aid kit?", answer: "Per the American Red Cross: adhesive bandages, sterile gauze pads, adhesive tape, a roller bandage, disposable gloves, scissors, tweezers, a digital thermometer, antiseptic wipes, and a card with emergency contacts and allergy information." },
      { question: "How often should you check a first aid kit?", answer: "At least twice a year — checking for expired items (especially antiseptic and any medication) and restocking anything used since the last check." },
      { question: "Do I need a first aid kit if I have a phone to call for help?", answer: "Yes — a kit handles the minutes before or instead of professional care for minor injuries, and complements, rather than replaces, calling emergency services for anything serious." },
      { question: "Should medications go in the general first aid kit?", answer: "Regular household medications can be listed on the kit's emergency card; a prescribed emergency device like an epinephrine auto-injector should be stored separately with its own expiration tracking, per a doctor's instructions." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
