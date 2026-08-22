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
  title: "Basic Wound Care & Infection Prevention",
  category: "health-body-basics",
  order: 24,
  subtopic: "first-aid-basics",
  tags: ["wound care", "infection prevention", "minor cuts", "first aid basics"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "The Mayo Clinic's basic wound care sequence — clean, protect, watch — is built around one goal: keeping bacteria out while the body's own healing process does the actual repair.",
  summary: "For minor wounds, the Mayo Clinic and CDC describe a simple sequence: clean the wound with water to physically remove debris and bacteria, apply a barrier (such as a bandage) to keep new contamination out, and watch for specific signs of infection (increasing redness, warmth, swelling, pus, or fever) that would call for professional care rather than continued home treatment.",
  sources: [
    { label: "Mayo Clinic — First Aid: Cuts", url: "https://www.mayoclinic.org/first-aid/first-aid-cuts/basics/art-20056711" },
    { label: "CDC — Wound Care After a Disaster", url: "https://www.cdc.gov/disasters/woundcare.html" },
    { label: "American Academy of Family Physicians — Wound Care", url: "https://www.aafp.org/" },
  ],
  seeAlso: [
    "health-body-basics/how-to-treat-a-minor-cut-or-burn",
    "health-body-basics/basic-first-aid-kit-essentials",
    "health-body-basics/recognizing-signs-of-a-medical-emergency",
  ],
  glossary: [
    {"term":"Wound infection sign","definition":"An observable change in a healing wound — such as increasing redness, warmth, swelling, pus, red streaking, or fever — that health agencies flag as a reason to seek professional care rather than continuing home treatment alone."},
    {"term":"Barrier dressing","definition":"A bandage or dressing applied over a cleaned wound specifically to physically block new bacteria and debris from entering while the body's own healing process takes place underneath."},
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
      <strong>This entry covers general wound-care principles for minor wounds only — it is not medical advice.</strong> Deep wounds, wounds that won&apos;t stop bleeding, animal or human bites, or any wound showing signs of infection need professional medical evaluation. When in doubt, see a doctor or seek emergency care rather than relying on home treatment alone.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "Basic wound care for minor wounds follows a simple sequence: clean, protect, watch — each step exists to keep bacteria out while the body's own healing process does the actual repair.",
      "Cleaning with water physically flushes out debris and surface bacteria; it isn't about applying a strong antiseptic as the primary step, which can actually irritate healthy tissue in some cases.",
      "Specific, named infection signs (increasing redness, warmth, swelling, pus, red streaking, or fever) are the trigger for seeking professional care — not a fixed number of days of home treatment.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">For a minor wound, the Mayo Clinic&apos;s basic sequence is: rinse it with clean water to remove dirt and debris, apply gentle pressure with a clean cloth if it&apos;s bleeding, then cover it with a <TermLink href="/health-body-basics/basic-wound-care-and-infection-prevention">barrier dressing</TermLink> to keep new bacteria out while it heals. After that, the main job is watching for <TermLink href="/health-body-basics/basic-wound-care-and-infection-prevention">wound infection signs</TermLink> — if any appear, it&apos;s time to see a doctor rather than continuing home care alone.</div>}
      detailed={<div className="prose-p">The logic behind each step is mechanical: rinsing with water works by physically dislodging debris and reducing the bacterial load on the wound surface, which is why plain water (not necessarily a strong antiseptic) is the Mayo Clinic&apos;s recommended first step for minor wounds — some antiseptics can actually damage healthy tissue at the wound edge if used as the primary cleaning method. The barrier dressing&apos;s job is purely to block new contamination from the environment while the body&apos;s own clotting and immune processes handle the actual repair underneath — the dressing doesn&apos;t heal the wound itself. Watching for infection signs afterward exists because a wound can look fine immediately after injury and still develop a problem over the following days, which is why the CDC and AAFP both frame ongoing observation, not just initial treatment, as part of proper wound care.</div>}
      />
      <FootnoteAside>The Mayo Clinic specifically notes that hydrogen peroxide and iodine, once common home remedies for wound cleaning, are now generally advised against for routine minor wound care because they can irritate or damage healthy tissue at the wound site — a good example of how first-aid guidance has been refined as its effects on actual healing became better understood.</FootnoteAside>

      <p>
      None of this requires special medical skill — the entire sequence is designed to be done safely at home for genuinely minor wounds, with a clear, named trigger for when to stop and get professional care instead.
      </p>

      <QuickCheck
      question="Why does the Mayo Clinic recommend plain water rather than a strong antiseptic like hydrogen peroxide as the primary way to clean a minor wound?"
      options={[
      { text: "Because water is cheaper and more widely available, not because of any effect on healing", correct: false, explanation: "Cost and availability aren't the stated reason — the guidance is based on hydrogen peroxide and similar antiseptics potentially irritating or damaging healthy tissue at the wound edge when used as the primary cleaning method." },
      { text: "Because plain water effectively flushes out debris and surface bacteria without the tissue-irritating effects that strong antiseptics like hydrogen peroxide can have on healthy tissue at the wound edge", correct: true, explanation: "Correct. This is a documented refinement in wound-care guidance — mechanical cleaning with water is now generally preferred over strong antiseptics for routine minor wound cleaning." },
      { text: "Because antiseptics don't actually kill any bacteria on a wound surface", correct: false, explanation: "Antiseptics do have antibacterial effects — the concern raised in current guidance is specifically about tissue irritation from routine use, not that they're ineffective against bacteria." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The basic clean-protect-watch sequence (baseline case, conceptual only)</h3>
      <div className="prose-p">
      A minor scrape: rinse under clean running water until debris is gone, pat dry with a clean cloth, apply a thin layer of a basic antibiotic ointment if desired, and cover with an adhesive bandage. Change the dressing daily or when it gets wet or dirty, and watch the area over the following days for any of the named infection signs.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: When a wound is no longer &quot;minor&quot; (edge case / variation)</h3>
      <div className="prose-p">
      A cut that won&apos;t stop bleeding after several minutes of direct pressure, is deep enough to see fat or muscle, has jagged or gaping edges, or resulted from an animal or human bite falls outside the scope of basic home wound care and needs professional evaluation — some of these situations (deep wounds, bite wounds) carry a meaningfully higher infection risk that basic home care isn&apos;t designed to manage on its own.
      </div>

      <QuickCheck
      question="Why are animal or human bite wounds treated differently from an ordinary minor cut, even if the bite wound looks small?"
      options={[
      { text: "Bite wounds aren't actually different from ordinary cuts in terms of infection risk", correct: false, explanation: "Bite wounds are specifically flagged by health agencies as carrying a higher infection risk than an ordinary minor cut of similar size, due to the bacteria commonly present in animal and human mouths." },
      { text: "Bite wounds carry a documented higher infection risk than an equivalent-looking ordinary cut, due to the bacteria typically present in animal and human mouths, which is why they're generally recommended for professional evaluation regardless of apparent size", correct: true, explanation: "Correct. Wound size alone doesn't determine infection risk — the mechanism and contamination source matter, which is exactly why bite wounds get separate guidance." },
      { text: "Because bite wounds are always immediately obvious as more severe than cuts", correct: false, explanation: "Appearance alone can be misleading — a small-looking bite wound can still carry meaningfully elevated infection risk compared to a similar-sized ordinary cut." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Recognizing infection signs during the watch phase (real-world / applied case)</h3>
      <div className="prose-p">
      Two days after a minor cut, the area around it becomes increasingly red (spreading beyond the original wound edge), feels warm to the touch, and develops a small amount of yellowish discharge. This combination — spreading redness, warmth, and discharge — matches the named infection-sign pattern from CDC/AAFP guidance, and is the specific trigger to see a doctor rather than continuing home dressing changes alone.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The clean, protect, watch sequence for minor wound care"
      type="flow"
      svgSrc="/diagrams/health-body-basics-basic-wound-care-and-infection-prevention-clean-protect-watch.svg"
      altText="A three-step flow diagram: clean, showing a wound being rinsed with water; protect, showing a barrier dressing applied over the cleaned wound; and watch, showing a magnifying glass over the healing wound looking for named infection signs, with an arrow from watch branching to either continued healing or a see a doctor box if infection signs appear."
      />
      <p>
      The &quot;watch&quot; step isn&apos;t passive — it&apos;s an active check against a specific, named list of infection signs, which is what turns ordinary observation into a genuine decision point for seeking care.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Using hydrogen peroxide or iodine as the primary way to clean a minor wound.", fix: "Rinse with clean water instead — current guidance advises against routine use of strong antiseptics on healthy wound tissue." },
      { mistake: "Treating a deep wound, a wound that won't stop bleeding, or a bite wound the same as an ordinary minor cut.", fix: "These situations carry meaningfully different risk and are generally recommended for professional evaluation, regardless of how the wound looks superficially." },
      { mistake: "Assuming a wound is fine simply because it looked okay right after the injury.", fix: "Continue watching for infection signs over the following days — some infections develop after the initial injury looked uneventful." },
      ]}
      />
      <MisconceptionCallout
      myth="Stronger cleaning agents like hydrogen peroxide always make a wound heal cleaner and faster."
      reality={<p>Current wound-care guidance from the Mayo Clinic specifically advises against routine use of hydrogen peroxide and similar antiseptics on minor wounds, because they can damage or irritate healthy tissue at the wound edge — potentially slowing healing rather than speeding it. Plain water is generally the recommended primary cleaning method for minor wounds.</p>}
      />

      <QuickCheck
      question="What is the single most important practical takeaway from basic wound-care guidance?"
      options={[
      { text: "That stronger antiseptics are always better for cleaning a wound", correct: false, explanation: "This is specifically contradicted by current guidance — plain water is generally recommended over strong antiseptics like hydrogen peroxide for routine minor wound cleaning." },
      { text: "That basic care follows a clean-protect-watch sequence for genuinely minor wounds, and that specific named infection signs (not a fixed timeline) are the trigger to seek professional care instead of continuing home treatment", correct: true, explanation: "Correct. Both the sequence itself and the specific, named trigger for escalating to professional care are the core practical points." },
      { text: "That any wound will heal properly as long as it's kept covered with a bandage at all times", correct: false, explanation: "Covering matters, but it's only one part of the sequence — cleaning first and watching for infection signs afterward are equally necessary parts of proper wound care." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "For a minor wound, rinse with clean water rather than reaching for a strong antiseptic as the first step.",
      "Cover a cleaned minor wound with a barrier dressing and change it regularly, or whenever it becomes wet or dirty.",
      "Learn the named infection signs (increasing redness, warmth, swelling, pus, red streaking, fever) so you recognize them if they appear.",
      "Seek professional care for deep wounds, wounds that won't stop bleeding, bite wounds, or any wound showing infection signs — these fall outside basic home wound care.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Should I use hydrogen peroxide to clean a cut?", answer: "Current Mayo Clinic guidance generally advises against it for routine minor wound cleaning, since it can irritate or damage healthy tissue — plain water is the recommended primary cleaning method." },
      { question: "How do I know if a wound is infected?", answer: "Health agencies point to specific signs: increasing redness (especially spreading beyond the original wound edge), warmth, swelling, pus or discharge, red streaking, or fever. Any of these is a reason to see a doctor." },
      { question: "Do all cuts need to see a doctor?", answer: "No — genuinely minor wounds can typically be managed at home with basic cleaning and a dressing. Deep wounds, wounds that won't stop bleeding, bite wounds, or any wound showing infection signs need professional evaluation." },
      { question: "How often should I change a wound dressing?", answer: "General guidance is to change it daily or whenever it becomes wet or dirty, while continuing to watch the wound for any developing infection signs." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
