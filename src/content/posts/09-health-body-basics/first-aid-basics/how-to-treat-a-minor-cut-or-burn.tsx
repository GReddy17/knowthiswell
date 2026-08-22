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
  title: "How to Treat a Minor Cut or Burn",
  category: "health-body-basics",
  order: 18,
  subtopic: "first-aid-basics",
  tags: ["minor cuts", "minor burns", "wound care", "first aid basics"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Minor cuts and burns follow a real, sourced sequence — clean, protect, monitor — but knowing when an injury has stopped being 'minor' matters more than the technique itself.",
  summary: "Per Red Cross and Mayo Clinic guidance, a minor cut is cleaned with water and covered with a clean dressing, while a minor burn is cooled with cool (not ice) running water and left uncovered or loosely covered — the more important skill is recognizing the specific signs (depth, size, location, or cause) that move an injury out of the 'minor, home-treatable' category entirely.",
  sources: [
    { label: "American Red Cross — Cuts and Scrapes: First Aid", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/cuts-scrapes" },
    { label: "Mayo Clinic — First aid: Burns", url: "https://www.mayoclinic.org/first-aid/first-aid-burns/basics/art-20056649" },
    { label: "CDC — Preventing Infections from Cuts and Scrapes", url: "https://www.cdc.gov/antibiotic-use/index.html" },
  ],
  seeAlso: [
    "health-body-basics/basic-wound-care-and-infection-prevention",
    "health-body-basics/basic-first-aid-kit-essentials",
    "health-body-basics/recognizing-signs-of-a-medical-emergency",
  ],
  glossary: [
    {"term":"Minor burn (first-degree / small second-degree)","definition":"A burn affecting only the outer skin layer (redness, mild swelling) or a small area of blistering, distinct from a burn that is large, deep, or on a sensitive area — which requires professional care."},
    {"term":"Direct pressure","definition":"Firm, steady pressure applied to a wound with a clean cloth or dressing to help slow or stop bleeding."},
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
      <strong>This entry is general first aid information, not medical advice or a substitute for certified first aid training.</strong> It covers genuinely minor injuries only. For any deep, large, or high-risk cut or burn — or any injury you&apos;re unsure about — seek professional medical care. For a medical emergency, call emergency services immediately.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "A minor cut is cleaned with water, has pressure applied if it's bleeding, and is covered with a clean dressing; a minor burn is cooled under cool (never ice-cold) running water for several minutes and left uncovered or loosely covered.",
      "The single most important skill isn't the technique — it's correctly recognizing when a cut or burn is NOT minor (deep, large, on the face/hands/joints, from a chemical or electrical source, or showing signs of infection) and needs professional care instead.",
      "Ice should never go directly on a burn — it can damage already-injured tissue further; cool running water is the correct first response per Mayo Clinic guidance.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">For a minor cut: rinse it with clean water, apply <TermLink href="/health-body-basics/how-to-treat-a-minor-cut-or-burn">direct pressure</TermLink> with a clean cloth if it&apos;s bleeding, then cover it with a bandage once bleeding stops. For a <TermLink href="/health-body-basics/how-to-treat-a-minor-cut-or-burn">minor burn</TermLink>: hold the area under cool running water for several minutes (not ice), then cover loosely or leave uncovered depending on the area. Both are about limiting damage and infection risk, not aggressive intervention.</div>}
      detailed={<div className="prose-p">The Red Cross&apos;s cut sequence is specifically ordered: stop bleeding with direct pressure first (most minor cuts stop within a few minutes), clean with water once bleeding is controlled (not before, since cleaning an actively bleeding wound is less effective and delays pressure), then dress it. For burns, Mayo Clinic guidance specifies cool — not ice-cold — running water for about 10 minutes, because ice or ice water can cause additional tissue damage on top of the burn itself, a distinct injury called frostbite-like tissue damage layered onto a burn. Blisters, if present on a minor burn, should generally be left intact rather than popped, since intact skin is a real barrier against infection while the underlying tissue heals.</div>}
      />
      <FootnoteAside>The Red Cross classifies &quot;minor&quot; specifically: a cut that is not deep, not gaping, and not on the face, over a joint, or actively spurting blood; a burn that is first-degree (just redness) or a small area of second-degree (blistering, generally described as smaller than the size of the affected person&apos;s palm). Anything outside those bounds is treated as needing professional evaluation, not home first aid.</FootnoteAside>

      <p>
      The technique for a minor injury is genuinely simple — the real skill is the judgment call of whether an injury actually qualifies as minor in the first place.
      </p>

      <QuickCheck
      question="Someone gets a small kitchen burn and immediately presses an ice cube directly onto it. What's the problem with this response?"
      options={[
      { text: "There's no problem — ice is the fastest way to cool a burn", correct: false, explanation: "Direct ice contact can cause additional tissue damage on top of the burn itself. Cool (not ice-cold) running water is the guidance from sources like Mayo Clinic, not direct ice contact." },
      { text: "Direct ice contact can injure the already-damaged tissue further; cool running water for about 10 minutes is the correct response instead", correct: true, explanation: "Correct. This is a specific, sourced distinction — ice is not the same as cool water, and using ice directly on a burn is a common, damaging mistake." },
      { text: "Ice is fine, but only for exactly 30 seconds", correct: false, explanation: "The issue isn't duration — it's that ice makes direct contact with already-burned tissue at all. Cool running water is the recommended method, not a shortened ice application." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A minor kitchen cut (baseline case)</h3>
      <div className="prose-p">
      A small cut from a knife while chopping vegetables: rinse under clean running water, apply direct pressure with a clean cloth for a few minutes until bleeding stops, then apply an antiseptic wipe and a bandage. The entire sequence follows the Red Cross&apos;s basic cuts-and-scrapes guidance for a genuinely minor wound.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A minor scald that turns out not to be minor (edge case / variation)</h3>
      <div className="prose-p">
      A small splash of hot water on the back of a hand looks minor at first — but the skin blisters over an area larger than the person&apos;s palm. Per Red Cross sizing guidance, that shifts it out of the &quot;minor, treat at home&quot; category; the correct next step is professional medical evaluation, not continued home treatment, precisely because size crossed a documented threshold.
      </div>

      <QuickCheck
      question="Why does burn size (larger than the affected person's palm) matter for deciding whether home treatment is appropriate?"
      options={[
      { text: "It doesn't — any burn that isn't bleeding can be treated at home", correct: false, explanation: "Burns don't bleed the way cuts do, so bleeding isn't the relevant threshold. Size and depth, not bleeding, are the documented factors distinguishing minor from non-minor burns." },
      { text: "Because burn size is one of the specific, sourced criteria (alongside depth and location) that separates a minor, home-treatable burn from one needing professional care", correct: true, explanation: "Correct. Size is a real, documented threshold in first aid guidance, not an arbitrary cutoff — larger burns carry higher infection risk and often need professional wound management." },
      { text: "Size only matters for burns on the face", correct: false, explanation: "Location (including the face) is a separate criterion from size — a large burn anywhere on the body, not just the face, crosses out of the minor category." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Recognizing signs of infection days after a minor cut (real-world / applied case)</h3>
      <div className="prose-p">
      A minor cut treated at home initially looks fine, but three days later shows increasing redness spreading outward, warmth, swelling, or pus — recognized signs of infection per CDC guidance. At that point the injury needs professional evaluation, since it&apos;s moved from &quot;healing minor wound&quot; to a possible infection requiring assessment the original first aid steps can&apos;t address.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Minor cut vs. minor burn: the two treatment sequences"
      type="comparison"
      svgSrc="/diagrams/health-body-basics-how-to-treat-a-minor-cut-or-burn-two-sequences.svg"
      altText="Two parallel sequences shown side by side: for a minor cut, apply direct pressure to stop bleeding, then clean with water, then cover with a bandage; for a minor burn, cool under running water for about ten minutes, then leave uncovered or cover loosely, with ice explicitly crossed out as an incorrect step."
      />
      <p>
      The two sequences look similar but differ in a key way: pressure-then-clean for a cut, cool-water-only (no ice, no pressure) for a burn — mixing up the two techniques is itself a common, avoidable first aid mistake.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Applying ice directly to a burn.", fix: "Use cool (not ice-cold) running water for about 10 minutes instead, per Mayo Clinic guidance." },
      { mistake: "Popping a blister from a minor burn.", fix: "Leave an intact blister alone — the unbroken skin protects against infection while the tissue underneath heals." },
      { mistake: "Continuing home treatment after a wound shows signs of infection (spreading redness, warmth, pus, increasing pain days later).", fix: "Seek professional medical care once these signs appear — they indicate the injury has moved beyond what first aid alone can address." },
      ]}
      />
      <MisconceptionCallout
      myth="If a cut or burn isn't actively bleeding heavily or extremely painful, it's automatically safe to just treat at home indefinitely."
      reality={<p>Bleeding and pain level aren&apos;t the only — or even the primary — criteria first aid sources use to define &quot;minor.&quot; Size, depth, location (face, joints, hands), cause (chemical, electrical), and the appearance of infection days later all matter independently, per Red Cross and CDC guidance. A wound that looked minor at first can cross out of that category later.</p>}
      />

      <QuickCheck
      question="What is the most reliable way to decide whether a cut or burn should still be treated at home several days after the injury?"
      options={[
      { text: "If it still hurts a little, keep treating it at home", correct: false, explanation: "Some lingering discomfort during normal healing is expected and isn't itself a red flag — the more reliable signals are the specific signs of infection (spreading redness, warmth, swelling, pus), not general soreness." },
      { text: "Watch for the specific, sourced signs of infection — spreading redness, warmth, swelling, or pus — and seek professional care if any appear, regardless of how the original injury looked", correct: true, explanation: "Correct. These are documented infection indicators from sources like the CDC, and they can appear even after an injury that initially looked properly minor." },
      { text: "As long as the bandage still looks clean, there's nothing to worry about", correct: false, explanation: "A clean-looking bandage doesn't rule out infection developing underneath — the relevant signs are on and around the wound itself, checked directly, not just the dressing's appearance." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "For a minor cut: apply direct pressure to stop bleeding, clean with water, then cover with a clean dressing.",
      "For a minor burn: cool under running water for about 10 minutes — never apply ice directly — then leave uncovered or cover loosely.",
      "Learn the specific criteria (size, depth, location, cause) that move an injury out of the 'minor' category, and seek professional care when any apply.",
      "Watch any home-treated wound for days afterward for signs of infection, and seek professional care if they appear.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Should you put ice on a burn?", answer: "No — direct ice contact can cause additional tissue damage. Use cool (not ice-cold) running water for about 10 minutes instead, per Mayo Clinic guidance." },
      { question: "Should you pop a blister from a minor burn?", answer: "No — an intact blister protects the healing skin underneath from infection. Leave it alone unless a medical professional advises otherwise." },
      { question: "How do you stop a minor cut from bleeding?", answer: "Apply direct, steady pressure with a clean cloth or dressing for several minutes. Most minor cuts stop bleeding within a few minutes of consistent pressure." },
      { question: "When does a cut or burn stop being 'minor'?", answer: "When it's deep, large (a burn larger than the person's palm, for example), located on the face/hands/joints, caused by chemicals or electricity, or shows signs of infection — any of these means it needs professional medical care." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
