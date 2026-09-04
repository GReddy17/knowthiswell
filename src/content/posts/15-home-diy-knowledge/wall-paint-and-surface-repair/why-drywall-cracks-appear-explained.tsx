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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Why Drywall Cracks Appear (And What They're Actually Telling You)",
  category: "home-diy-knowledge",
  order: 16,
  subtopic: "wall-paint-and-surface-repair",
  tags: ["drywall", "cracks", "wall repair", "framing", "home maintenance"],
  date: "2026-09-04",
  updated: "2026-09-04",
  lastReviewed: "2026-09-04",
  excerpt: "Drywall cracks form where stress concentrates — at openings, seams, and framing joints — and where they appear tells you whether it's cosmetic or structural.",
  summary: "A drywall crack isn't random damage — it's a visible record of stress concentrating at a specific weak point, usually the corner of a door or window opening, a taped seam, or a spot where two different framing members move at different rates, and the crack's shape and location are the clues to which of those it is.",
  sources: [
    { label: "U.S. Department of Housing and Urban Development (HUD) — Residential Construction Performance Guidelines", url: "https://www.hud.gov/program_offices/housing" },
    { label: "ASTM International — Standard Specification for Gypsum Board (C1396)", url: "https://www.astm.org/c1396_c1396m-17.html" },
    { label: "National Association of Home Builders (NAHB) — Residential Construction Standards", url: "https://www.nahb.org/" },
  ],
  seeAlso: [
    "home-diy-knowledge/how-spackle-and-caulk-actually-differ",
    "home-diy-knowledge/what-a-stud-finder-actually-detects",
    "home-diy-knowledge/how-a-wall-anchor-actually-holds-weight",
    "home-diy-knowledge/how-to-tell-what-weight-a-wall-can-hold",
    "home-diy-knowledge/how-paint-actually-dries-and-cures",
  ],
  glossary: [
    { term: "Stress concentration", definition: "A point in a material where an applied force is focused into a smaller area than elsewhere, making that spot far more likely to fail first — sharp corners and joints are classic examples." },
    { term: "Truss uplift", definition: "A seasonal phenomenon where roof trusses bow slightly upward in cold, dry weather as the top and bottom chords absorb moisture at different rates, pulling interior partition walls away from the ceiling." },
    { term: "Joint compound", definition: "A gypsum-based paste (also called drywall mud) used to embed tape over seams and fasteners and to smooth the finished wall surface before painting." },
    { term: "Control joint", definition: "A built-in gap or flexible strip installed in a large drywall run specifically to absorb movement, so cracking concentrates at a planned, hidden point instead of an unpredictable one." },
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
          "Drywall cracks form where stress concentrates — most often at the corners of door and window openings, along taped seams, or where framing members shift relative to each other.",
          "A crack's shape and location are diagnostic: diagonal cracks from an opening's corner usually mean framing stress, while straight cracks along a seam usually mean the tape bond itself failed.",
          "Most drywall cracks are cosmetic and reflect normal seasonal building movement, but a widening crack paired with a sticking door or an uneven floor is worth a closer structural look.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Drywall itself is a rigid, brittle sheet of gypsum sandwiched between paper facings — it doesn&apos;t stretch or flex to absorb movement the way wood or fabric can. The house around it, though, is always moving a little: wood framing swells and shrinks with humidity, foundations settle by fractions of an inch, and temperature swings expand and contract materials at different rates. When that small movement reaches the drywall, it has nowhere to go, so it cracks at whatever point is weakest — usually a corner, a seam, or a spot where two different building materials meet.</div>}
        detailed={<div className="prose-p">Cracking is fundamentally a <TermLink href="/home-diy-knowledge/why-drywall-cracks-appear-explained">stress concentration</TermLink> problem. A flat, uninterrupted sheet of drywall can absorb a surprising amount of minor flexing evenly across its surface, but any opening, seam, or fastener line breaks up that even distribution and focuses stress into a much smaller area — the same reason a piece of paper tears fastest from a small notch cut in its edge rather than from an intact edge. Door and window openings are the most common origin point because the header framing above them concentrates load and any settling motion into the drywall corners immediately surrounding the opening, producing the classic 45-degree diagonal crack radiating outward from the corner. Taped seams fail differently: the seam itself isn&apos;t weaker structurally, but the paper tape embedded in <TermLink href="/home-diy-knowledge/why-drywall-cracks-appear-explained">joint compound</TermLink> can lose adhesion over time from moisture, an underlying application flaw, or repeated minor flexing, producing a straight crack that follows the seam line exactly rather than cutting across it diagonally. A less obvious but well-documented cause is <TermLink href="/home-diy-knowledge/why-drywall-cracks-appear-explained">truss uplift</TermLink>: in cold, dry weather, the top chord of a roof truss can absorb less moisture than the bottom chord, causing the truss to bow upward slightly and pull ceiling drywall away from interior partition walls, which shows up as a crack running along the ceiling-wall junction that tends to close back up again in warmer, more humid months. Builders who expect significant movement in a large drywall run sometimes install a <TermLink href="/home-diy-knowledge/why-drywall-cracks-appear-explained">control joint</TermLink> on purpose — a deliberate gap or flexible strip that gives the movement a planned, inconspicuous place to happen instead of leaving it to crack randomly.</div>}
      />
      <FootnoteAside>Most drywall cracks under about 1/16 inch wide, that don&apos;t reappear after being properly repaired, are considered normal seasonal movement rather than a structural concern.</FootnoteAside>

      <p>
        Once cracking is understood as stress finding the weakest available point, the location and shape of a specific crack stop looking random and start reading as a fairly reliable clue to its cause.
      </p>

      <QuickCheck
        question="Why do drywall cracks tend to form at the corners of door and window openings rather than in the middle of an open wall?"
        options={[
          { text: "Because the corners concentrate stress from the framing above the opening into a small area, while an open wall spreads minor movement more evenly", correct: true, explanation: "Correct. Openings interrupt the drywall's even stress distribution, focusing framing movement into the corners immediately around them." },
          { text: "Because drywall installers always use a thinner sheet of drywall specifically around door and window openings", correct: false, explanation: "Installers don't use thinner material around openings — the crack pattern comes from stress concentration in the framing and drywall geometry, not a difference in sheet thickness." },
          { text: "Because doors and windows are always installed slightly after the drywall has already fully cracked", correct: false, explanation: "Openings are framed before drywall goes up, not the reverse — the cracking happens afterward, as a result of stress concentrating around the opening." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A diagonal crack at a door frame corner (baseline case)</h3>
      <p>
        A homeowner notices a thin diagonal crack running from the top corner of an interior door frame up toward the ceiling. This is the most common drywall crack pattern in framed houses, and it typically reflects ordinary seasonal wood movement in the header above the door concentrating stress at that corner. Repairing it with flexible mesh tape and joint compound — or, along a stubborn hairline seam, a flexible <TermLink href="/home-diy-knowledge/how-spackle-and-caulk-actually-differ">caulk-based crack filler</TermLink> instead of a rigid patch — then repainting, is usually sufficient — the underlying movement is normal and the same spot may need a touch-up again in future years, but it isn&apos;t a sign of a structural problem on its own.
      </p>

      <QuickCheck
        question="A thin diagonal crack appears at the top corner of an interior door frame, with no other symptoms in the house. What does this most likely indicate?"
        options={[
          { text: "Normal seasonal framing movement concentrating stress at the opening's corner — a common, largely cosmetic pattern", correct: true, explanation: "Correct. Diagonal cracks radiating from door and window corners are the most typical stress-concentration pattern and are usually cosmetic on their own." },
          { text: "The house's foundation has failed and requires immediate structural repair", correct: false, explanation: "A single diagonal crack at a door corner, with no other symptoms, doesn't indicate foundation failure on its own — that conclusion needs corroborating evidence like sticking doors or sloped floors." },
          { text: "The drywall was installed with the wrong screws and needs to be entirely replaced", correct: false, explanation: "Fastener choice isn't the typical cause of this crack pattern — it comes from framing movement concentrating stress at the opening, not from an installation defect in the fasteners." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A straight crack that keeps returning along a seam (edge case / variation)</h3>
      <div className="prose-p">
        A straight crack runs the full length of a taped seam on a hallway ceiling, and it returns within a year even after being patched with standard joint compound. This points to a tape adhesion failure rather than a one-time settling event — the paper tape has lost its bond to the gypsum board along that seam, so any minor flexing reopens the same line. A standard compound patch bridges the visible gap but doesn&apos;t restore the tape&apos;s bond underneath, so the same crack often reappears until the seam is properly re-taped with fresh compound applied over the full width of the joint, or replaced with a flexible mesh tape better suited to the seam&apos;s remaining minor movement.
      </div>
      <QuickCheck
        question="Why might a drywall crack along a taped seam keep reappearing even after being filled with joint compound each time?"
        options={[
          { text: "Because filling the visible gap doesn't restore the tape's underlying bond to the drywall, so the same weak point reopens under any further movement", correct: true, explanation: "Correct. A surface patch bridges the gap cosmetically but doesn't fix a failed tape bond — proper re-taping addresses the actual weak point." },
          { text: "Because joint compound is not designed to be used on ceilings, only on vertical walls", correct: false, explanation: "Joint compound works on ceilings the same way it does on walls — the recurring crack is about the tape bond underneath, not the surface or orientation." },
          { text: "Because the crack is actually a brand-new crack each time, unrelated to the previous one", correct: false, explanation: "A crack reappearing in the same exact location along the same seam points to an unresolved underlying weak point, not a series of unrelated new cracks." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A widening crack paired with a sticking door (real-world / applied case)</h3>
      <p>
        A crack above a doorway has grown noticeably wider over several months, and the door in that same frame has started sticking and needing more force to close. Unlike the first two examples, this combination — a growing crack plus a functional symptom in the same framing — is a reasonable prompt to have the situation looked at by a professional, since it suggests the framing itself may be shifting rather than settling into a stable seasonal pattern. Cosmetic repair alone won&apos;t address a cause like this, and repeatedly patching over a widening crack without investigating the framing risks masking a problem that&apos;s still actively getting worse. Locating the nearby framing first with a <TermLink href="/home-diy-knowledge/what-a-stud-finder-actually-detects">stud finder</TermLink> can also help confirm whether the crack lines up with a specific framing member rather than running randomly across open drywall.
      </p>
      <QuickCheck
        question="A crack above a doorway keeps widening over several months, and the door in that frame has started sticking. What does this combination suggest, compared to a single stable crack on its own?"
        options={[
          { text: "It suggests the framing itself may be actively shifting, which is worth a professional look rather than just a cosmetic patch", correct: true, explanation: "Correct. A widening crack combined with a functional symptom like a sticking door points to ongoing movement, not a one-time settling event that's already stabilized." },
          { text: "It means the drywall tape simply needs to be replaced with a slightly thicker type of tape", correct: false, explanation: "A tape upgrade addresses seam adhesion, not framing movement — a sticking door alongside a widening crack points to a structural cause, not a tape problem." },
          { text: "It has no particular significance beyond what a single stable crack would indicate", correct: false, explanation: "A widening crack paired with a functional symptom in the same area is meaningfully different from an isolated, stable crack — the combination is the useful diagnostic signal here." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Two crack patterns, two different causes"
        type="comparison"
        svgSrc="/diagrams/home-diy-knowledge-why-drywall-cracks-appear-explained-comparison.svg"
        altText="Two diagrams of drywall cracks: a diagonal crack radiating from the top corner of a door opening, caused by stress concentrating where framing members meet, versus a straight crack running along a taped seam, caused by the joint tape itself losing its bond to the drywall."
      />
      <p>
        The shape alone narrows down the likely cause: diagonal and near an opening points to framing stress, while straight and along a seam points to a tape bond failure.
      </p>
      <p>
        Once a crack is patched, the repair&apos;s durability also depends on giving the topcoat enough time to fully <TermLink href="/home-diy-knowledge/how-paint-actually-dries-and-cures">cure, not just dry</TermLink> — a still-curing paint film over a fresh patch is softer and more prone to showing texture or damage than one that&apos;s had its full cure time.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Filling a crack with rigid spackle or joint compound alone and expecting it to stay closed at a spot with ongoing minor movement.", fix: "Use flexible mesh tape embedded in joint compound over seams, and treat repeatedly returning cracks as a sign the underlying joint needs re-taping, not just refilling." },
          { mistake: "Assuming every crack is a foundation emergency and panicking over a single hairline crack with no other symptoms.", fix: "Judge a crack by its width, whether it's growing, and whether it's paired with other symptoms like sticking doors — most hairline cracks are cosmetic seasonal movement." },
          { mistake: "Painting directly over a freshly patched crack without letting the joint compound fully dry and without a coat of primer first.", fix: "Let the patch dry completely and prime it before painting, since unprimed patched areas absorb paint differently and show up as a visible flashing spot." },
        ]}
      />
      <MisconceptionCallout
        myth="Any crack in a wall means the house's foundation is failing."
        reality={<p>The overwhelming majority of drywall cracks are the result of ordinary seasonal movement in wood framing, humidity-driven expansion and contraction, or a taped seam losing adhesion &#8212; not foundation failure. A crack becomes a genuine structural concern mainly when it&apos;s wider than roughly 1/8 inch, keeps growing rather than stabilizing, or shows up alongside other symptoms like sticking doors, misaligned windows, or visibly sloped floors. A single stable hairline crack near a door or ceiling seam, on its own, is almost always cosmetic and reflects the building simply moving the way buildings do.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Note the crack's shape and location — diagonal near an opening usually means framing stress, straight along a seam usually means a tape bond failure.",
          "Measure the crack's width and check back periodically to see whether it's stable or actively widening before deciding how to respond.",
          "Repair seam cracks with flexible mesh tape and fresh joint compound rather than just filling the visible gap, especially if the crack has returned before.",
          "Get a professional structural opinion if a crack keeps widening and is paired with a sticking door, a misaligned window, or a sloped floor nearby."]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why do cracks always seem to form near doors and windows?", answer: "Door and window openings interrupt the even stress distribution across a drywall sheet and concentrate framing movement into the corners immediately around them, which is why diagonal cracks radiating from those corners are the most common pattern in framed houses." },
          { question: "Is a crack in drywall a sign of a foundation problem?", answer: "Usually not on its own. Most drywall cracks come from normal seasonal framing movement or a failed tape bond at a seam. A crack is more likely to be structural if it's wider than about 1/8 inch, keeps growing, or appears alongside a sticking door, misaligned window, or sloped floor." },
          { question: "Why does the same crack keep coming back after I patch it?", answer: "If the crack is along a taped seam, filling the visible gap with compound doesn't restore the tape's underlying bond to the drywall — the same weak point reopens under further movement until the seam is properly re-taped rather than just refilled." },
          { question: "What causes a crack along the ceiling where it meets the wall?", answer: "This pattern is often linked to truss uplift, where the roof truss framing bows slightly in cold, dry weather and pulls the ceiling drywall away from interior partition walls — it frequently narrows again in warmer, more humid months." },
          { question: "How wide does a crack need to be before it's a structural concern?", answer: "There's no single universal threshold, but a crack wider than roughly 1/8 inch, one that's actively growing rather than stable, or one paired with functional symptoms like a sticking door is generally worth a professional structural opinion rather than a simple cosmetic patch." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
