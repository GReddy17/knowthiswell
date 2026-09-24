import React from 'react';
import { PostFrontmatter, QuizBankItem } from '@/types/post';
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
  title: "What Weatherstripping Actually Does to Cut Energy Loss",
  category: "home-diy-knowledge",
  order: 39,
  subtopic: "seasonal-and-preventive-maintenance",
  tags: ["weatherstripping", "air infiltration", "insulation", "energy efficiency", "home maintenance"],
  date: "2026-09-12",
  updated: "2026-09-24",
  lastReviewed: "2026-09-12",
  excerpt: "Weatherstripping and insulation fix two different heat-loss problems — sealing air leaks versus slowing heat that passes straight through solid materials.",
  summary: "A house loses conditioned air two genuinely different ways: air infiltration, where whole packets of warm or cool air physically leak out through gaps and cracks, and conduction, where heat energy passes directly through walls, windows, and doors even with no gap at all. Weatherstripping addresses only the first problem — it seals the gaps air actually moves through — while insulation addresses the second, and neither one substitutes for the other.",
  sources: [
    { label: "U.S. Department of Energy — Weatherstripping", url: "https://www.energy.gov/energysaver/weatherstrip" },
    { label: "U.S. Department of Energy — Insulation", url: "https://www.energy.gov/energysaver/insulation" },
    { label: "ENERGY STAR — Seal and Insulate", url: "https://www.energystar.gov/campaign/seal_insulate" },
  ],
  seeAlso: [
    "home-diy-knowledge/why-pipes-freeze-and-burst-in-winter",
    "home-diy-knowledge/what-r-value-actually-measures-in-insulation",
    "home-diy-knowledge/why-some-rooms-are-always-hotter-or-colder",
    "home-diy-knowledge/how-a-thermostat-actually-controls-temperature",
  ],
  glossary: [
    { term: "Air infiltration", definition: "The uncontrolled movement of outside air into a building (and conditioned air out of it) through gaps, cracks, and unsealed joints, rather than through intentional ventilation." },
    { term: "Conduction", definition: "The transfer of heat energy directly through a solid material, from its warmer side to its cooler side, without any air actually moving through it." },
    { term: "Air changes per hour (ACH)", definition: "A measure of how many times the entire volume of air inside a building is replaced by outside air in one hour, used to quantify how leaky or airtight a structure is." },
    { term: "Compression seal", definition: "A weatherstripping type that closes a gap by physically compressing a flexible material between two surfaces, such as a door and its frame, as they come together." },
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

/** Quiz bank: feeds the end-of-article "Test yourself" quiz and the game (not rendered inline). */
export const quiz: QuizBankItem[] = [
  {"question": "Which kind of heat loss does weatherstripping address?", "difficulty": "easy", "options": [{"text": "Air infiltration through gaps", "correct": true, "explanation": "It physically seals the gaps air leaks through."}, {"text": "Conduction through solid walls", "correct": false, "explanation": "That's what insulation addresses."}, {"text": "Both equally", "correct": false, "explanation": "It only stops air leaks, not conduction."}]},
  {"question": "What is conduction?", "difficulty": "easy", "options": [{"text": "Air leaking through a crack", "correct": false, "explanation": "That's infiltration."}, {"text": "Heat passing directly through a solid material like glass or a wall", "correct": true, "explanation": "It happens even with no gap at all."}, {"text": "Heat moving through ductwork", "correct": false, "explanation": "Conduction is heat through solid materials."}]},
  {"question": "You feel moving cold air near the bottom of an exterior door. What's the likely fix?", "difficulty": "easy", "options": [{"text": "A new door sweep and compression seal", "correct": true, "explanation": "A felt draft means an air gap that weatherstripping closes."}, {"text": "Thicker curtains", "correct": false, "explanation": "Curtains don't seal the gap."}, {"text": "More attic insulation", "correct": false, "explanation": "The draft is at the door, not the attic."}]},
  {"question": "A wall feels uniformly cold but has no drafts anywhere. What is the problem?", "difficulty": "hard", "options": [{"text": "Air infiltration that weatherstripping will fix", "correct": false, "explanation": "No draft means no air gap to seal."}, {"text": "Conduction through the solid wall, which calls for insulation", "correct": true, "explanation": "A cold surface without drafts points to an insulation issue."}, {"text": "A broken thermostat", "correct": false, "explanation": "The surface itself is losing heat by conduction."}]},
  {"question": "Why do energy auditors often recommend air-sealing before adding attic insulation?", "difficulty": "hard", "options": [{"text": "Leaking air carries heat straight past insulation, so sealing makes the insulation work", "correct": true, "explanation": "The two problems stack; fix the air leaks first."}, {"text": "Insulation is illegal before sealing", "correct": false, "explanation": "It's a performance order, not a legal one."}, {"text": "Sealing is always cheaper, so it's done first", "correct": false, "explanation": "The reason is effectiveness, not just cost."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "A house loses conditioned air two different ways: air infiltration through gaps and cracks, and conduction, where heat passes directly through solid walls, windows, and doors.",
          "Weatherstripping only addresses air infiltration — it seals the physical gaps air moves through — and does nothing to slow heat conducting through an otherwise solid, well-sealed surface.",
          "A drafty room and a cold room aren't necessarily the same problem: a draft points to an air-sealing gap, while a uniformly cold surface with no draft points to a conduction (insulation) issue instead.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A house can lose heat two genuinely different ways, and it&apos;s easy to lump them together as just &quot;the house is drafty&quot; or &quot;the house is cold.&quot; The first way is air infiltration — actual air leaking through a gap around a window frame, an unsealed door, or a wall penetration, carrying its heat away with it. The second way is conduction — heat energy passing straight through a solid material like glass, a wall, or a door panel, even when that material has no gap in it at all. Weatherstripping is built specifically to stop the first problem, by physically sealing the gaps air leaks through. It doesn&apos;t do anything about the second problem, which is what insulation is for.</div>}
        detailed={<div className="prose-p">Air infiltration and conduction are physically distinct heat-loss pathways with different fixes because they&apos;re different phenomena. <TermLink href="/home-diy-knowledge/what-weatherstripping-actually-does">Air infiltration</TermLink> requires a physical opening — a gap around a window sash, a warped door bottom, an unsealed electrical penetration — and the heat loss scales with how much actual air volume moves through that opening, commonly quantified in a home energy audit as <TermLink href="/home-diy-knowledge/what-weatherstripping-actually-does">air changes per hour</TermLink>. Weatherstripping — compression seals, door sweeps, adhesive foam tape — works by physically closing that opening so air simply can&apos;t pass through it anymore; it&apos;s a mechanical seal, not a thermal barrier. <TermLink href="/home-diy-knowledge/what-r-value-actually-measures-in-insulation">Conduction</TermLink>, by contrast, needs no gap whatsoever — it&apos;s heat energy moving through the actual solid material of a wall, window pane, or door panel from the warmer side to the cooler side, driven purely by the temperature difference across that material. Insulation slows conduction by adding a layer of material that resists that heat flow, which is exactly what a material&apos;s R-value quantifies. Because these are separate mechanisms, a perfectly insulated wall with a gap around its window trim still loses significant heat through infiltration, and a perfectly air-sealed room with thin, uninsulated walls still loses significant heat through conduction. Fixing one problem doesn&apos;t touch the other.</div>}
      />
      <FootnoteAside>The U.S. Department of Energy estimates that air sealing and weatherstripping can reduce a home&apos;s heating and cooling costs by around 10-20%, but that figure specifically addresses infiltration — it&apos;s a separate savings category from what added insulation contributes.</FootnoteAside>

      <p>
        Once infiltration and conduction are treated as two separate problems rather than one vague &quot;the house loses heat&quot; issue, a room&apos;s specific symptoms — a draft you can feel with your hand versus a wall that&apos;s just uniformly cold to the touch — become diagnostic clues pointing to which fix actually applies, and often explain <TermLink href="/home-diy-knowledge/why-some-rooms-are-always-hotter-or-colder">why some rooms run persistently colder</TermLink> than others in the same house. An exterior-wall gap that lets in a draft is also exactly the kind of weak point that can let a nearby supply pipe drop <TermLink href="/home-diy-knowledge/why-pipes-freeze-and-burst-in-winter">cold enough to freeze</TermLink> in hard winter weather.
      </p>

      <QuickCheck
        question="A homeowner feels a distinct, moving draft of cold air near the bottom of an exterior door on a windy day. Which heat-loss mechanism does this most directly indicate?"
        options={[
          { text: "Air infiltration — actual outside air is physically moving through a gap at the door", correct: true, explanation: "Correct. A felt, moving draft means air itself is passing through an opening, which is the signature of infiltration — the problem weatherstripping is designed to seal." },
          { text: "Conduction — heat is passing directly through the solid door panel", correct: false, explanation: "Conduction doesn't produce a moving draft you can feel as airflow; it shows up as a surface that's simply cold to the touch, with no air movement, not a breeze." },
          { text: "Both mechanisms equally, with no way to distinguish which is occurring", correct: false, explanation: "A felt draft is a specific, identifiable signature of air movement through a gap — it points clearly at infiltration rather than being an ambiguous mix of the two mechanisms." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A drafty exterior door (baseline case)</h3>
      <p>
        A homeowner can feel cold air moving around the edges of an exterior door, especially near the bottom, whenever it&apos;s windy outside. This is a clear infiltration case — there&apos;s an actual physical gap, likely a worn or missing door sweep at the bottom and a compression seal that&apos;s lost its shape around the frame. Installing new weatherstripping — a fresh compression seal around the frame and a new door sweep at the bottom — directly closes that gap and stops the draft, because the fix matches the mechanism: a sealing problem gets a sealing solution.
      </p>

      <QuickCheck
        question="Installing a new door sweep and compression seal eliminates a felt draft around an exterior door. What does the fact that this worked confirm about the original problem?"
        options={[
          { text: "It confirms the original issue was air infiltration through a physical gap, since sealing that gap directly resolved it", correct: true, explanation: "Correct. A sealing fix resolving the symptom is consistent with the problem being an actual air leak, which is exactly what weatherstripping is designed to close." },
          { text: "It confirms the door's insulation value has improved significantly", correct: false, explanation: "A door sweep and compression seal address air leakage, not the door panel's resistance to conducted heat — its R-value is essentially unchanged by this fix." },
          { text: "It confirms the outdoor temperature must have risen since the repair", correct: false, explanation: "The draft's disappearance tracks with the seal being installed, not with any change in outdoor conditions." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A perfectly sealed but uninsulated attic wall (edge case / variation)</h3>
      <div className="prose-p">
        A finished attic room has no detectable drafts anywhere — every seam is sealed, and there&apos;s no felt air movement at all — yet the knee wall along the roofline still feels noticeably cold to the touch and the room struggles to hold heat in winter. This is the inverse case: infiltration has already been solved, but the wall has little or no insulation behind it, so heat is conducting straight through the material regardless of how well-sealed it is. No amount of additional weatherstripping would help here, since there&apos;s no air gap left to seal — the fix has to be adding insulation to slow the conduction itself.
      </div>
      <QuickCheck
        question="An attic knee wall has no detectable drafts anywhere but still feels cold and loses heat quickly. What does the absence of any draft, combined with the coldness, suggest?"
        options={[
          { text: "The heat loss is likely from conduction through poorly insulated material, not from air infiltration, since there's no air movement to seal", correct: true, explanation: "Correct. With infiltration effectively ruled out by the lack of any felt draft, a uniformly cold wall points toward conduction — meaning insulation, not weatherstripping, is the relevant fix." },
          { text: "More weatherstripping should be added around the wall's edges to fix the coldness", correct: false, explanation: "Adding weatherstripping where there's no detectable air leak won't address a conduction problem — there's no gap left for it to seal." },
          { text: "The wall must actually have a hidden draft that simply hasn't been found yet", correct: false, explanation: "A wall that's uniformly cold with no felt air movement anywhere is the classic signature of conduction, not an undiscovered draft — the two mechanisms have distinguishable symptoms." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Sealing a whole house before adding attic insulation (real-world / applied case)</h3>
      <p>
        A home energy auditor recommends air-sealing and weatherstripping a house — around window and door frames, attic hatches, and plumbing penetrations — before adding new attic insulation, even though the homeowner initially just wanted more insulation. The sequencing matters because adding insulation on top of an unsealed attic floor doesn&apos;t stop warm household air from still leaking up into the attic through existing gaps; it just adds material around a problem that&apos;s still happening underneath it. Sealing the air-leak points first, then adding insulation, addresses both mechanisms in the order that actually gets the full benefit of each, rather than layering an insulation fix over an infiltration problem that&apos;s left untouched.
      </p>
      <QuickCheck
        question="Why would an energy auditor recommend air-sealing a house before adding new attic insulation, rather than just adding the insulation directly?"
        options={[
          { text: "Because sealing air-leak points first ensures household air isn't still escaping through gaps beneath or around the new insulation, so both mechanisms actually get addressed", correct: true, explanation: "Correct. Insulation slows conduction but doesn't stop air infiltration — sealing gaps first means the insulation isn't just being added on top of an unresolved leak." },
          { text: "Because insulation materials won't stick properly to a wall that has any air leaks in it", correct: false, explanation: "This isn't about material adhesion — it's about making sure the infiltration problem is actually solved rather than just covered over by insulation that doesn't address it." },
          { text: "Because air-sealing and insulation are actually the same repair using different materials", correct: false, explanation: "They target two different heat-loss mechanisms — sealing gaps versus slowing conduction — which is exactly why both steps are recommended rather than treated as interchangeable." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Two different heat-loss paths, two different fixes"
        type="comparison"
        svgSrc="/diagrams/home-diy-knowledge-what-weatherstripping-actually-does-comparison.svg"
        altText="Comparison diagram showing air infiltration, where actual air moves through a physical gap around a door and weatherstripping seals it, versus conduction, where heat passes directly through a solid, gap-free wall and insulation slows it — illustrating that the two mechanisms need two different fixes."
      />
      <p>
        Notice that the left panel shows air actually moving through an opening, while the right panel shows heat passing through solid material with no opening at all — that difference is exactly why the same fix can&apos;t solve both.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Adding more weatherstripping to a wall or door that's already sealed, expecting it to fix a cold, drafty-feeling room.", fix: "Check for an actual felt draft first — if there isn't one, the coldness is likely conduction, and insulation is the relevant fix, not more sealing." },
          { mistake: "Adding attic or wall insulation without air-sealing existing gaps first.", fix: "Seal known air-leak points — window and door frames, attic hatches, penetrations — before or alongside adding insulation, so both mechanisms are actually addressed." },
          { mistake: "Assuming a single high energy bill means one obvious culprit, without distinguishing infiltration from conduction.", fix: "Use a hand or a lit incense stick near suspected gaps to check for actual airflow, separately from checking for uniformly cold surfaces, before deciding which fix to invest in." },
        ]}
      />
      <MisconceptionCallout
        myth="Weatherstripping and insulation basically do the same job of keeping a house warm."
        reality={<p>They address two physically different heat-loss mechanisms. Weatherstripping seals gaps that actual air passes through &#8212; a problem called air infiltration &#8212; using compression seals, sweeps, or foam tape at doors, windows, and other openings. Insulation slows conduction, the direct transfer of heat energy through solid material like a wall or window pane, with no air movement or gap required at all. A house can have one problem without the other: a well-insulated wall can still leak air badly around its window trim, and a perfectly air-sealed room can still lose heat quickly through thin, uninsulated walls. Treating them as interchangeable means one of the two problems often goes untouched.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check doors and windows for an actual felt draft — moving air, not just a cold surface — to identify genuine infiltration points.",
          "Install or replace weatherstripping (compression seals, door sweeps, foam tape) specifically at confirmed air-leak points, not uniformly everywhere.",
          "Separately check for uniformly cold walls, ceilings, or floors with no felt draft, which point toward a conduction (insulation) issue instead.",
          "Air-seal known gaps before or alongside adding new insulation, so both heat-loss mechanisms are addressed rather than just one.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What's the actual difference between weatherstripping and insulation?", answer: "Weatherstripping seals physical gaps that air leaks through, addressing air infiltration. Insulation slows heat conducting directly through solid materials like walls and windows, addressing conduction. They target two different heat-loss mechanisms and don't substitute for each other." },
          { question: "Why does my room still feel cold after I added weatherstripping?", answer: "If the room has no infiltration gaps left to seal, added weatherstripping won't help — a uniformly cold surface with no felt draft usually points to a conduction problem, meaning the fix is more insulation, not more sealing." },
          { question: "How much energy does weatherstripping actually save?", answer: "The U.S. Department of Energy estimates that air sealing and weatherstripping can reduce heating and cooling costs by roughly 10-20%, though the exact savings depend on how leaky the home was beforehand." },
          { question: "Should I air-seal a house before or after adding insulation?", answer: "Before, or at the same time. Adding insulation without first sealing existing air leaks still allows conditioned air to escape through those gaps, so sealing first (or alongside insulating) gets the full benefit of both fixes." },
          { question: "How can I tell if a cold spot is from a draft or from poor insulation?", answer: "Check for actual felt air movement with your hand or a lit incense stick near the spot. A moving draft points to an air infiltration gap that weatherstripping can fix; a surface that's simply cold with no air movement points to conduction, which needs added insulation instead." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
