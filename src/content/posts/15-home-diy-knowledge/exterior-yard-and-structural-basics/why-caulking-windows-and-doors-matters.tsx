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
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Why Caulking Around Windows and Doors Actually Matters",
  category: "home-diy-knowledge",
  order: 47,
  subtopic: "exterior-yard-and-structural-basics",
  tags: ["caulking", "air sealing", "windows and doors", "energy efficiency", "home maintenance"],
  date: "2026-09-17",
  updated: "2026-09-17",
  lastReviewed: "2026-09-17",
  excerpt: "A gap the width of a pencil around a window frame can leak more conditioned air over a year than the window's glass itself ever does.",
  summary: "Windows and doors are engineered and tested as sealed units, but the gap between the window/door frame and the surrounding wall opening is a completely separate weak point — caulk seals that specific gap, and because small gaps allow disproportionately large amounts of air infiltration relative to their size, this narrow bead of sealant often has an outsized effect on a home's actual energy loss.",
  sources: [
    { label: "U.S. Department of Energy — Energy Saver: Air Sealing Your Home", url: "https://www.energy.gov/energysaver/air-sealing-your-home" },
    { label: "Environmental Protection Agency — ENERGY STAR Home Sealing Guidance", url: "https://www.energystar.gov/" },
    { label: "U.S. Department of Housing and Urban Development (HUD) — Weatherization Guidelines", url: "https://www.hud.gov/" },
  ],
  seeAlso: [
    "home-diy-knowledge/what-weatherstripping-actually-does",
    "home-diy-knowledge/how-spackle-and-caulk-actually-differ",
    "home-diy-knowledge/what-r-value-actually-measures-in-insulation",
    "home-diy-knowledge/why-some-rooms-are-always-hotter-or-colder",
  ],
  glossary: [
    { term: "Air infiltration", definition: "Uncontrolled outdoor air entering a building through gaps, cracks, and openings, as distinct from air movement through intentional ventilation." },
    { term: "Rough opening", definition: "The framed opening in a wall, slightly larger than the window or door unit itself, that the unit is installed into, leaving a perimeter gap that must be sealed and insulated separately." },
    { term: "Stack effect", definition: "The tendency of warm air to rise and escape through upper gaps in a building while pulling replacement air in through lower gaps, driven by the temperature difference between indoor and outdoor air." },
    { term: "Backer rod", definition: "A flexible foam rod pushed into a gap before caulking to control the caulk's depth and give it proper shape to flex without cracking, used for gaps wider than about 1/4 inch." },
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
          "A window or door unit is sealed and tested on its own, but the gap between its frame and the surrounding wall opening is a completely separate weak point that caulk exists to close.",
          "Small gaps leak disproportionately large amounts of air relative to their size, because moving air funnels through the easiest available path rather than spreading evenly across a wall's surface.",
          "Caulk seals narrow, non-moving gaps (typically under 1/4 inch); wider gaps or anywhere two surfaces move relative to each other need a different product like weatherstripping or expanding foam.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A window itself is a well-sealed, tested unit — the glass and frame together don&apos;t leak much air on their own. The real weak point is the gap left around the outside of that window frame, where it meets the hole cut into the wall to install it. That gap, often less than half an inch wide but running the entire perimeter of the window, is exactly what caulk is meant to close. Skipping it doesn&apos;t just cost a little comfort — a narrow gap running around several windows and doors in a house adds up to a meaningful, continuous air leak.</div>}
        detailed={<div className="prose-p">When a window or door is installed, it goes into a <TermLink href="/home-diy-knowledge/why-caulking-windows-and-doors-matters">rough opening</TermLink> framed slightly larger than the unit itself, to allow room for leveling and adjustment during installation. That perimeter gap is where <TermLink href="/home-diy-knowledge/why-caulking-windows-and-doors-matters">air infiltration</TermLink> actually happens — outdoor air doesn&apos;t need to pass through the glass or the frame material itself, it just needs any continuous path, and an uncaulked gap around a window perimeter is exactly that. This matters more than gap size alone suggests because of how air actually moves through small openings: air takes the path of least resistance, so a small but continuous gap can carry a surprisingly large volume of air compared to the same area spread across, say, a solid insulated wall. This effect compounds with the <TermLink href="/home-diy-knowledge/why-caulking-windows-and-doors-matters">stack effect</TermLink> in a home — warm air rising and escaping through upper gaps pulls replacement air in through lower ones, meaning a leak at a ground-floor window can be actively drawing outdoor air in even on a still day with no wind at all.</div>}
      />
      <FootnoteAside>Caulk is specifically for narrow, non-moving gaps — for gaps wider than about 1/4 inch, a foam backer rod is pushed in first to give the caulk proper depth and shape, and for gaps where two surfaces actually move relative to each other (like around an operable window sash), weatherstripping, not caulk, is the correct product.</FootnoteAside>

      <p>
        This is why energy audits specifically check window and door perimeters with tools like a smoke pencil or infrared camera — the leak is rarely coming from the glass itself, it&apos;s coming from the framing gap around it.
      </p>

      <QuickCheck
        question="Why does the gap around a window's frame, rather than the window glass itself, tend to be the bigger source of unwanted air leakage?"
        options={[
          { text: "The window unit is sealed and tested as a whole, but the perimeter gap left for installation into the rough opening is a separate, often-unsealed path for outdoor air", correct: true, explanation: "Correct. The perimeter installation gap is a structurally separate weak point from the window unit's own factory-sealed construction." },
          { text: "Window glass is actually more air-permeable than most people realize", correct: false, explanation: "Modern window glass and factory-sealed frame assemblies are not typically the significant leak path — it's the surrounding installation gap that usually matters more." },
          { text: "Air leakage around windows is a myth with no measurable real-world effect", correct: false, explanation: "This is a well-documented, measurable effect used in professional energy audits (smoke pencil, infrared testing) specifically to find these perimeter leaks." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A properly caulked new window installation (baseline case)</h3>
      <p>
        A newly installed window has its entire exterior perimeter gap caulked with a high-quality exterior-rated sealant, following the manufacturer&apos;s installation instructions. The window&apos;s own factory seal handles air resistance through the unit itself, and the caulk closes the separate installation gap around it — together, this gives the installation continuous air sealing from the glass all the way to the surrounding wall material, with no unsealed path for outdoor air anywhere along the perimeter.
      </p>
      <QuickCheck
        question="Why does a properly caulked window installation require both the window's own factory seal and a separately caulked perimeter gap?"
        options={[
          { text: "The window unit's seal and the perimeter installation gap are two structurally separate potential leak points, and both need to be addressed for the installation to be fully air-sealed", correct: true, explanation: "Correct. Neither the window's own seal nor caulking the perimeter alone is sufficient — both address different, independent gaps in the overall installation." },
          { text: "Caulking the perimeter makes the window's own internal seal unnecessary", correct: false, explanation: "The two seals address entirely different locations (within the window unit versus around its perimeter) and neither substitutes for the other." },
          { text: "This level of sealing is only relevant for very old or poorly made windows", correct: false, explanation: "Perimeter sealing is a standard requirement for proper installation regardless of window quality or age, since the installation gap exists by design in any window installation." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: An old window with cracked, missing caulk (edge case / variation)</h3>
      <div className="prose-p">
        A 15-year-old window has caulk that has dried out, cracked, and partially separated from the wall surface along much of its perimeter — a common failure mode since caulk has a limited service life and degrades from UV exposure and repeated expansion/contraction cycles. Even though the window itself may still function fine, this degraded caulk has effectively reopened the original installation gap, and the house has likely been losing conditioned air through it gradually for years without an obvious symptom pointing directly to the cause.
      </div>
      <QuickCheck
        question="Why might an older window start leaking air significantly even though the window unit itself hasn't changed?"
        options={[
          { text: "The caulk sealing its perimeter gap has a limited service life and can crack or separate over time from UV exposure and repeated movement, reopening the original installation gap", correct: true, explanation: "Correct. Caulk degrades over years even when the window itself remains functionally unchanged, which is why perimeter sealing needs periodic re-inspection and renewal." },
          { text: "Window glass becomes more air-permeable purely with age", correct: false, explanation: "Age-related leakage is much more commonly attributable to degraded perimeter sealant than to any change in the glass or frame material itself." },
          { text: "This kind of gradual leak increase is impossible to detect without replacing the entire window", correct: false, explanation: "Cracked or missing caulk is generally visible on close inspection and can often be addressed by simply removing old caulk and reapplying fresh sealant, without replacing the window." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Caulking the wrong type of gap (real-world / applied case)</h3>
      <p>
        A homeowner caulks all the way around the moving joint between a window&apos;s operable sash and its frame, intending to stop a draft. This actually seals the window shut and can crack shortly after curing, since that specific joint moves every time the window is opened or closed — caulk is a flexible sealant for gaps that don&apos;t move relative to each other, not one designed to bridge two surfaces in constant relative motion. The correct product for that specific location, weatherstripping, is designed for exactly this repeated-motion sealing job that caulk cannot reliably do.
      </p>
      <QuickCheck
        question="Why does caulking a window's operable sash-to-frame joint tend to fail, unlike caulking the fixed perimeter gap between the frame and the wall?"
        options={[
          { text: "The sash-to-frame joint moves every time the window opens or closes, and caulk isn't designed to reliably flex under that kind of repeated relative motion the way weatherstripping is", correct: true, explanation: "Correct. Caulk is suited to fixed, non-moving gaps; a joint with regular relative motion needs a product specifically designed for that, like weatherstripping." },
          { text: "Caulk and weatherstripping are functionally identical products with different names", correct: false, explanation: "They serve different purposes — caulk seals fixed gaps permanently, while weatherstripping is designed to flex repeatedly at a joint that moves, like an operable window or door." },
          { text: "The frame-to-wall gap and the sash-to-frame gap experience exactly the same conditions", correct: false, explanation: "They're fundamentally different: the frame-to-wall gap is fixed once installed, while the sash-to-frame gap moves every time the window is operated — which is why they call for different sealing products." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The gap that matters is around the frame, not through the glass"
        type="detail"
        svgSrc="/diagrams/home-diy-knowledge-why-caulking-windows-and-doors-matters-detail.svg"
        altText="Diagram of a window installed in a wall's rough opening, showing air leaking through an uncaulked perimeter gap between the window frame and the surrounding wall, versus that same gap sealed with a continuous bead of caulk stopping the air path."
      />
      <p>
        The leak path runs around the frame&apos;s perimeter, not through the glass — which is exactly the gap a continuous bead of caulk is meant to close.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Caulking a moving joint, like a window sash-to-frame gap, instead of using weatherstripping.", fix: "Reserve caulk for fixed, non-moving gaps; use weatherstripping for any joint where two surfaces move relative to each other." },
          { mistake: "Assuming old, cracked caulk that's still physically present is still doing its job.", fix: "Inspect caulk periodically for cracking or separation from the surface — degraded caulk should be removed and replaced, not caulked over." },
          { mistake: "Skipping a backer rod on a gap wider than about 1/4 inch.", fix: "Push a foam backer rod into wider gaps before caulking, so the caulk has proper depth and shape to flex without cracking." },
        ]}
      />
      <MisconceptionCallout
        myth="Most cold drafts near a window come through the glass itself."
        reality={<p>Modern window glass and factory-sealed frame assemblies are generally not the main source of unwanted air movement. The much more common leak path is the perimeter gap left around a window&apos;s frame where it was installed into the wall&apos;s rough opening &#8212; a gap that exists by design during installation and needs to be separately sealed with caulk. Because moving air takes the path of least resistance, even a narrow, continuous gap around a window&apos;s perimeter can carry a meaningful, ongoing amount of conditioned air out of (or outdoor air into) a house, which is exactly why energy audits specifically test window and door perimeters rather than the glass itself.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimated heat loss through an uncaulked linear gap"
        description="A rough illustration of how much heat can escape through a narrow, uncaulked perimeter gap, scaled by the gap's dimensions and the temperature difference between indoor and outdoor air."
        fields={[
          { key: "gapLengthInches", label: "Gap length (inches, e.g. window perimeter)", defaultValue: 120, step: 5 },
          { key: "gapWidthInches", label: "Gap width (inches)", defaultValue: 0.25, step: 0.05 },
          { key: "tempDifferenceF", label: "Indoor/outdoor temperature difference (°F)", defaultValue: 30, step: 5 },
        ]}
        resultLabel="Estimated heat loss (BTU per hour)"
        formula="airGapHeatLossBtuPerHour"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Inspect the exterior caulk around every window and door perimeter at least once a year, looking for cracking, gaps, or separation from the surface.",
          "Remove old, degraded caulk completely before applying new caulk — new caulk applied over failed old caulk won't bond or seal properly.",
          "Use a backer rod for any gap wider than about 1/4 inch before caulking, and choose an exterior-rated, paintable caulk for outdoor applications.",
          "Reserve caulk for fixed gaps only — use weatherstripping for any joint where two surfaces move relative to each other, like an operable window sash or a door edge.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why does caulking around windows and doors matter for energy efficiency?", answer: "The gap between a window or door frame and the surrounding wall's rough opening is a separate, often-unsealed air path from the window unit itself. Because small gaps carry disproportionately large amounts of air relative to their size, caulking that perimeter gap often has an outsized effect on reducing a home's overall air infiltration." },
          { question: "How is caulk different from weatherstripping?", answer: "Caulk is a rigid-once-cured sealant meant for fixed, non-moving gaps. Weatherstripping is a flexible material designed to seal a joint where two surfaces move relative to each other repeatedly, like an operable window sash or a door against its frame." },
          { question: "How often does exterior caulk need to be replaced?", answer: "There's no fixed universal number, but exterior caulk commonly needs inspection and possible replacement every few years, since UV exposure and repeated temperature-driven expansion and contraction cause it to crack and lose adhesion over time." },
          { question: "Can I caulk a gap that's wider than a quarter inch?", answer: "Yes, but a foam backer rod should be pushed into the gap first to control the caulk's depth and give it the right shape to flex properly — caulking a wide gap without a backer rod often leads to cracking or sinking." },
          { question: "Where should I use caulk versus weatherstripping around a window?", answer: "Use caulk for the fixed gap between the window frame and the surrounding wall, where nothing moves after installation. Use weatherstripping at the joint between an operable window sash and its frame, or around a door's moving edge, where the two surfaces move relative to each other every time it's used." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
