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
  title: "Why Hardwood Floors Expand and Contract With the Seasons",
  category: "home-diy-knowledge",
  order: 42,
  subtopic: "flooring-and-interior-basics",
  tags: ["hardwood floors", "wood movement", "humidity", "flooring installation", "home maintenance"],
  date: "2026-09-17",
  updated: "2026-09-17",
  lastReviewed: "2026-09-17",
  excerpt: "Wood boards don't swell evenly — they move almost entirely across the grain, which is why installers leave a gap you'll never see once trim is in place.",
  summary: "Wood is hygroscopic — it absorbs and releases moisture from the surrounding air — and as its internal moisture content rises or falls, the wood swells or shrinks almost entirely across the grain (its width), not along it (its length), which is why a hardwood floor visibly gaps in dry winter air and can cup or buckle in humid summer conditions if it wasn't installed with room to move.",
  sources: [
    { label: "USDA Forest Products Laboratory — Wood Handbook: Wood as an Engineering Material", url: "https://www.fpl.fs.usda.gov/products/publications/" },
    { label: "National Wood Flooring Association (NWFA) — Wood Flooring Installation Guidelines", url: "https://nwfa.org/" },
    { label: "National Institute of Standards and Technology (NIST) — Materials Science Reference", url: "https://www.nist.gov/" },
  ],
  seeAlso: [
    "home-diy-knowledge/why-drywall-cracks-appear-explained",
    "home-diy-knowledge/what-r-value-actually-measures-in-insulation",
    "home-diy-knowledge/why-some-rooms-are-always-hotter-or-colder",
    "home-diy-knowledge/hardwood-vs-laminate-vs-vinyl-flooring-explained",
  ],
  glossary: [
    { term: "Hygroscopic", definition: "A property of a material, like wood, that causes it to absorb or release moisture from the surrounding air until it reaches equilibrium with the air's humidity." },
    { term: "Cross-grain movement", definition: "Dimensional change in a wood board measured across its width or thickness, which is far larger than the movement measured along its length (with the grain)." },
    { term: "Expansion gap", definition: "A deliberate small gap left around the perimeter of a hardwood floor installation, hidden under trim or molding, that gives the wood room to expand without buckling against a wall." },
    { term: "Cupping", definition: "A warping pattern where a board's edges rise higher than its center, typically caused by the underside of the board absorbing more moisture than the top surface." },
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
          "Wood absorbs and releases moisture from the air constantly, and its dimensions change as its internal moisture content changes — this never fully stops, even in a finished floor.",
          "Almost all of that movement happens across the grain (a board's width), not along it (its length), which is why gaps appear between boards, not at their ends.",
          "Installers leave a hidden expansion gap around a hardwood floor's perimeter specifically to give this constant movement somewhere to go without the floor buckling against the walls.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Wood is <TermLink href="/home-diy-knowledge/why-hardwood-floors-expand-and-contract">hygroscopic</TermLink>, meaning it constantly absorbs or releases moisture from the air around it, even after it&apos;s been milled, finished, and installed as flooring. When indoor air is dry (a common winter effect of running heat), wood boards release moisture and shrink slightly, opening small gaps between them. When indoor air is humid, boards absorb moisture and swell, pressing tighter together. This isn&apos;t a defect — it&apos;s expected behavior for a natural material, and a well-installed floor is built with room for it to happen safely.</div>}
        detailed={<div className="prose-p">The key detail most people miss is that wood doesn&apos;t swell or shrink uniformly in all directions — it moves almost entirely in <TermLink href="/home-diy-knowledge/why-hardwood-floors-expand-and-contract">cross-grain</TermLink> directions (across a board&apos;s width and through its thickness) and barely at all along the grain (its length). This is a structural property of wood cell orientation: wood fibers run lengthwise, and moisture absorption swells the space between and across those fibers far more than it stretches them lengthwise. That&apos;s why a floor gaps or tightens between boards running side by side, but you never see individual boards visibly growing or shrinking in length. This is also why professional installers leave a small <TermLink href="/home-diy-knowledge/why-hardwood-floors-expand-and-contract">expansion gap</TermLink> — typically around half an inch, hidden under baseboard or shoe molding — around the entire perimeter of the room before installing the floor. That gap is sized to absorb the floor&apos;s expected total width-wise swelling during the most humid part of the year; without it, a floor that swells with nowhere to go can buckle upward or push against walls hard enough to cause real structural damage.</div>}
      />
      <FootnoteAside>Because movement tracks moisture content, not just temperature, a floor can move noticeably even in a climate-controlled house if a humidifier or dehumidifier setting changes the indoor humidity level significantly.</FootnoteAside>

      <p>
        This is also the reason acclimating new flooring — leaving it in the actual room for days before installation — matters: it lets the wood reach roughly the same moisture content it will live at long-term, before it&apos;s locked into place, reducing how much it needs to move after installation.
      </p>

      <QuickCheck
        question="Why do gaps typically appear between the sides of hardwood boards in dry winter air, rather than at the ends of the boards?"
        options={[
          { text: "Wood movement from moisture change happens almost entirely across the grain (a board's width), not along the grain (its length)", correct: true, explanation: "Correct. Wood's cell structure makes cross-grain movement far larger than along-grain movement, so width-wise gaps are the visible result of shrinkage." },
          { text: "Board ends are glued more tightly than the sides during installation", correct: false, explanation: "Installation method isn't the reason — it's wood's inherent structural property of moving far more across the grain than along it, regardless of how it's installed." },
          { text: "Dry air only affects the surface finish, not the wood itself", correct: false, explanation: "Dry air affects the wood's actual internal moisture content, not just the surface finish, which is what drives the real dimensional shrinkage across the board's width." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Winter gapping in a heated home (baseline case)</h3>
      <p>
        A hardwood floor installed in late summer, when indoor humidity was relatively high, develops small, fairly uniform gaps between boards each winter once the heating system starts running and indoor air dries out. This is expected seasonal cross-grain shrinkage, not a defect — the boards lose moisture to the drier air and shrink slightly in width. Because the expansion gap around the room&apos;s perimeter was sized for this, the shrinkage doesn&apos;t damage anything; it&apos;s simply visible between boards until humidity rises again in the following months.
      </p>
      <QuickCheck
        question="A hardwood floor develops small gaps between boards every winter once the heat turns on. What does this most likely indicate?"
        options={[
          { text: "Normal, expected seasonal shrinkage as the wood loses moisture to drier heated indoor air", correct: true, explanation: "Correct. Seasonal gapping tied to heating-season humidity drops is a well-understood, expected pattern for solid hardwood, not a sign of a defective floor." },
          { text: "The floor was installed with defective boards that are falling apart", correct: false, explanation: "Uniform seasonal gapping that recurs each winter and closes back up in humid months is the signature of normal wood movement, not board failure." },
          { text: "The house's foundation is shifting seasonally", correct: false, explanation: "Foundation movement would typically show as uneven, non-seasonal, non-reversing damage — recurring, reversible seasonal gaps point specifically to wood moisture movement." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Cupping after a plumbing leak (edge case / variation)</h3>
      <div className="prose-p">
        A slow, undetected leak beneath a hardwood floor raises the moisture content of the underside of several boards much more than the top surface, which stays exposed to normal room air. Because the underside swells more than the top, the boards <TermLink href="/home-diy-knowledge/why-hardwood-floors-expand-and-contract">cup</TermLink> — their edges rise higher than their centers. This is a variation on the same underlying mechanism (moisture-driven cross-grain swelling) but caused by uneven moisture exposure between the two faces of the board, rather than a uniform seasonal humidity change affecting the whole floor evenly.
      </div>
      <QuickCheck
        question="Why does a hidden leak under a hardwood floor cause cupping specifically, rather than uniform gapping like a seasonal humidity change would?"
        options={[
          { text: "The leak raises moisture unevenly — the underside of the boards swells more than the top — while seasonal humidity changes affect the whole board's exposed surfaces more evenly", correct: true, explanation: "Correct. Cupping results from asymmetric moisture exposure between a board's two faces, while overall seasonal gapping comes from more uniform moisture change." },
          { text: "Leaks cause the wood to rot instead of expanding at all", correct: false, explanation: "The mechanism described here is moisture-driven swelling, not rot — rot is a separate, longer-term biological process distinct from the dimensional cupping response to uneven moisture." },
          { text: "Cupping and gapping are actually caused by the same even, whole-board process", correct: false, explanation: "They differ specifically in whether moisture exposure is even across the board (gapping/general shrink-swell) or uneven between the top and bottom faces (cupping)." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A floor installed without an expansion gap (real-world / applied case)</h3>
      <p>
        A DIY hardwood installation is run tight to the walls on all sides, with no expansion gap left before baseboard is installed, because the installer assumed a snug fit would look cleaner. When the following summer&apos;s humidity rises, the floor has nowhere to expand into and can buckle upward in the middle of the room, or push hard enough against walls to damage trim or drywall. This is the practical failure mode the expansion gap exists to prevent — the swelling itself was entirely predictable, and the damage came specifically from not leaving it anywhere to go.
      </p>
      <QuickCheck
        question="A hardwood floor installed with zero expansion gap buckles upward the following summer. What actually caused the buckling?"
        options={[
          { text: "The floor's normal humidity-driven swelling had nowhere to expand into because no gap was left at the perimeter, so the pressure had to go somewhere — upward", correct: true, explanation: "Correct. The swelling itself is normal and expected; the buckling is specifically a consequence of not providing room for that expected movement." },
          { text: "The wood used was simply a low-quality, defective batch", correct: false, explanation: "The scenario describes a predictable installation error (no expansion gap), not a material defect — the same wood installed correctly with a gap would not buckle this way." },
          { text: "Buckling like this happens randomly regardless of installation method", correct: false, explanation: "This isn't random — it's a well-documented, predictable consequence of blocking a hardwood floor's normal seasonal expansion with no gap to accommodate it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Wood moves across the grain, not along it"
        type="detail"
        svgSrc="/diagrams/home-diy-knowledge-why-hardwood-floors-expand-and-contract-detail.svg"
        altText="Diagram of a wood board showing minimal dimensional change along its length (with the grain) and significant dimensional change across its width (across the grain) as moisture content rises and falls, alongside a hidden expansion gap at a room's perimeter under baseboard trim."
      />
      <p>
        The board barely changes length at all — nearly all the visible movement in a hardwood floor happens across each board&apos;s width, which is exactly where the hidden expansion gap is designed to absorb it.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Installing a hardwood floor tight against the walls with no expansion gap.", fix: "Leave the manufacturer-recommended gap (commonly around 1/2 inch) around the entire perimeter, hidden under baseboard or shoe molding." },
          { mistake: "Installing new flooring immediately after delivery without letting it acclimate to the room.", fix: "Let boards sit in the actual installation room, per the manufacturer's recommended acclimation period, so they reach the room's real moisture content before being locked into place." },
          { mistake: "Assuming seasonal gapping means the floor was installed wrong or the wood is defective.", fix: "Recognize normal, reversible seasonal gapping (opens in dry winter air, closes in humid summer air) as expected wood behavior, distinct from cupping or buckling caused by an actual installation or moisture problem." },
        ]}
      />
      <MisconceptionCallout
        myth="A hardwood floor that develops gaps between boards was installed incorrectly."
        reality={<p>Seasonal gapping is normal, expected behavior for solid hardwood, not a sign of poor installation. Wood is hygroscopic — it continuously absorbs and releases moisture from the surrounding air, and its dimensions change almost entirely across the grain (a board&apos;s width) as that moisture content shifts. Gaps that open in dry winter air and close again once humidity rises in warmer months are the visible, reversible sign of this normal process working as expected. A genuine installation problem looks different: uneven cupping, permanent buckling, or gaps that never close back up, typically tied to an actual moisture source like a leak or a floor installed with no expansion gap at all.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimated expansion gap needed for a given board width"
        description="A rough way to see why wider boards need a proportionally larger expansion allowance — total expected movement scales with a board's width and how much its moisture content is expected to swing seasonally."
        fields={[
          { key: "boardWidthInches", label: "Board width (inches)", defaultValue: 5, step: 0.25 },
          { key: "movementCoefficient", label: "Species movement coefficient (% per 1% moisture change)", defaultValue: 0.25, step: 0.05 },
          { key: "moistureChangePercent", label: "Expected seasonal moisture content swing (%)", defaultValue: 6, step: 1 },
        ]}
        resultLabel="Estimated total width movement (inches)"
        formula="woodMovementGapAllowanceInches"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Always acclimate new hardwood flooring in its actual installation room per the manufacturer's stated period before installing it.",
          "Confirm an expansion gap was left at the room's perimeter (or leave one yourself on a DIY job) before installing baseboard or trim.",
          "Use a humidifier in winter and, if needed, a dehumidifier in summer to keep indoor humidity in a stable, moderate range and reduce the size of seasonal movement.",
          "Investigate promptly if you notice cupping, permanent buckling, or gaps that don't close seasonally — these point to an actual moisture source (like a leak), not normal seasonal movement.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why does my hardwood floor have gaps in the winter?", answer: "Heated indoor air is drier, and wood releases moisture to match that drier air, causing boards to shrink slightly across their width. This is normal, reversible seasonal movement, and the gaps typically close again once humidity rises." },
          { question: "Is it normal for a hardwood floor to expand and contract?", answer: "Yes — wood is hygroscopic and continuously exchanges moisture with the surrounding air for as long as it exists as wood, even after finishing and installation. A properly installed floor accounts for this with a hidden expansion gap at the room's perimeter." },
          { question: "What's the difference between normal wood movement and floor damage?", answer: "Normal movement is seasonal, reversible, and relatively even across the floor (gaps that open and close with the seasons). Damage typically looks different: permanent cupping, buckling that doesn't reverse, or gaps concentrated in one area, usually pointing to an actual moisture source like a leak or a missing expansion gap." },
          { question: "How much space should be left around a hardwood floor for expansion?", answer: "It varies by manufacturer and board width, but a commonly cited figure is around 1/2 inch around the entire perimeter, hidden under baseboard or shoe molding — always check the specific product's installation guidelines." },
          { question: "Why do hardwood floors shrink across their width but not their length?", answer: "Wood's cell fibers run lengthwise, and moisture absorption swells the material across and between those fibers far more than it stretches them along their length — this cross-grain-dominant movement is a structural property of wood, not specific to any one species." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
