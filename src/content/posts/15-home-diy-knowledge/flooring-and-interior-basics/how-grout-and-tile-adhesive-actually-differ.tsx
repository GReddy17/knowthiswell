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
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "How Grout and Tile Adhesive Actually Differ",
  category: "home-diy-knowledge",
  order: 45,
  subtopic: "flooring-and-interior-basics",
  tags: ["grout", "tile adhesive", "thinset mortar", "tile installation", "home maintenance"],
  date: "2026-09-17",
  updated: "2026-09-24",
  lastReviewed: "2026-09-17",
  excerpt: "Grout doesn't hold tile in place — it fills the gaps between tiles that are already structurally bonded to the floor by an entirely separate material.",
  summary: "Tile installation uses two chemically and functionally different materials that get confused because they're both applied during the same job: adhesive (thinset mortar or mastic) forms the actual structural bond holding each tile to the substrate beneath it, while grout is a separate, weaker material applied afterward purely to fill the joints between tiles, manage minor surface water, and prevent debris from collecting in the gaps.",
  sources: [
    { label: "Tile Council of North America (TCNA) — Handbook for Ceramic, Glass, and Stone Tile Installation", url: "https://www.tcnatile.com/" },
    { label: "American National Standards Institute (ANSI) — Tile Installation Materials Standards", url: "https://www.ansi.org/" },
    { label: "U.S. Department of Housing and Urban Development (HUD) — Residential Construction Standards", url: "https://www.hud.gov/" },
  ],
  seeAlso: [
    "home-diy-knowledge/how-spackle-and-caulk-actually-differ",
    "home-diy-knowledge/what-makes-super-glue-actually-bond-so-fast",
    "home-diy-knowledge/hardwood-vs-laminate-vs-vinyl-flooring-explained",
    "home-diy-knowledge/why-a-faucet-drips-explained",
  ],
  glossary: [
    { term: "Thinset mortar", definition: "A cement-based adhesive mixed with water (and often polymer additives) that forms the actual structural bond between a tile and the substrate beneath it." },
    { term: "Mastic", definition: "A pre-mixed, ready-to-use organic tile adhesive suitable for some wall and light-duty tile applications, generally not recommended for wet floor areas due to lower water resistance than thinset." },
    { term: "Grout", definition: "A cement-based or epoxy-based filler applied into the joints between tiles after they are set, primarily for appearance, joint protection, and minor water management — it carries no structural bonding role." },
    { term: "Substrate", definition: "The surface beneath tile — commonly a cement board, plywood subfloor, or existing concrete slab — that the adhesive layer actually bonds the tile to." },
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
  {"question": "What actually holds a tile to the floor or wall?", "difficulty": "easy", "options": [{"text": "Grout", "correct": false, "explanation": "Grout fills the joints; it has no structural bonding role."}, {"text": "The adhesive layer (thinset mortar or mastic) underneath", "correct": true, "explanation": "Adhesive forms the structural bond before grout goes in."}, {"text": "The tile's own weight", "correct": false, "explanation": "Tiles need an adhesive bond, especially on walls."}]},
  {"question": "What is grout's job?", "difficulty": "easy", "options": [{"text": "Filling the gaps between tiles, managing minor surface water and finishing the look", "correct": true, "explanation": "It's cosmetic and a minor water barrier, not structural."}, {"text": "Bonding tiles to the floor", "correct": false, "explanation": "That's the adhesive's job."}, {"text": "Leveling uneven floors", "correct": false, "explanation": "Leveling happens before tiling."}]},
  {"question": "When does grout go on in a standard installation?", "difficulty": "easy", "options": [{"text": "Before the tiles are set", "correct": false, "explanation": "Adhesive goes first; grout comes after."}, {"text": "After the tiles are set and the adhesive has cured", "correct": true, "explanation": "Grout fills joints between already-bonded tiles."}, {"text": "At the same time as the adhesive", "correct": false, "explanation": "They're applied in separate steps."}]},
  {"question": "A homeowner sees cracked grout and assumes the tiles are coming loose. What is more likely?", "difficulty": "hard", "options": [{"text": "The adhesive has definitely failed", "correct": false, "explanation": "Grout and adhesive problems usually have separate causes."}, {"text": "It's a cosmetic grout issue; loose tiles would show up as rocking or hollow sounds instead", "correct": true, "explanation": "Tile attachment depends on the adhesive, not the grout."}, {"text": "The whole floor needs replacing", "correct": false, "explanation": "Cracked grout alone is a minor repair."}]},
  {"question": "Why isn't mastic recommended for a shower floor?", "difficulty": "hard", "options": [{"text": "Mastic is too hard to spread", "correct": false, "explanation": "Ease of spreading isn't the issue."}, {"text": "Constant water exposure weakens it, while thinset mortar holds up in wet areas", "correct": true, "explanation": "Mastic is acceptable on dry walls but not in heavily wet zones."}, {"text": "Mastic is only for outdoor use", "correct": false, "explanation": "Mastic is an indoor adhesive for dry locations."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Adhesive (thinset mortar or mastic), applied first and hidden under the tile, is what actually structurally bonds each tile to the floor or wall beneath it.",
          "Grout, applied afterward into the joints between tiles, has no structural bonding role at all — its job is filling gaps, managing minor surface water, and appearance.",
          "A cracked or missing section of grout is a cosmetic and minor water-protection issue; tiles staying firmly attached to the floor depends entirely on the adhesive layer underneath, not the grout.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">It&apos;s easy to assume grout is what holds tile down, since it&apos;s the material you actually see and interact with between tiles. In reality, a completely different material does that job: a layer of adhesive, spread on the floor or wall before the tiles are even placed, forms the real structural bond. Grout goes in afterward, into the narrow gaps left between the already-set tiles, and its purpose is filling those gaps cleanly, not holding anything down.</div>}
        detailed={<div className="prose-p">The installation sequence makes the roles clear. First, <TermLink href="/home-diy-knowledge/how-grout-and-tile-adhesive-actually-differ">thinset mortar</TermLink> (or, in some lower-moisture wall applications, <TermLink href="/home-diy-knowledge/how-grout-and-tile-adhesive-actually-differ">mastic</TermLink>) is spread across the <TermLink href="/home-diy-knowledge/how-grout-and-tile-adhesive-actually-differ">substrate</TermLink> with a notched trowel, and each tile is pressed into that adhesive layer while it&apos;s still workable. As the adhesive cures, it forms a rigid, structural bond between the tile&apos;s back surface and the substrate — this bond is what carries the load of foot traffic and keeps the tile from lifting or shifting. Only after the adhesive has cured, typically a day or more later, is <TermLink href="/home-diy-knowledge/how-grout-and-tile-adhesive-actually-differ">grout</TermLink> applied — pressed into the narrow joints between tiles and wiped clean off the tile surface. Grout is a separate, generally softer and more porous cement-based (or epoxy-based) material whose job is filling that joint space, giving the installation a finished, uniform look, and providing a first line of defense against surface water and debris getting into the joint. If grout cracks or a section falls out, the tiles on either side of that joint are typically still fully bonded to the floor by their own independent adhesive layer underneath — the failure is cosmetic and a minor water-protection gap, not a structural one.</div>}
      />
      <FootnoteAside>This is exactly why a single cracked tile usually needs to be broken out and reset in fresh adhesive to fix, while a cracked grout line can often be repaired by simply removing and re-applying grout in that joint alone.</FootnoteAside>

      <p>
        Understanding this division also explains why tile problems get misdiagnosed: a homeowner who notices cracking grout often assumes tiles are &quot;coming loose,&quot; when the two symptoms usually have separate, unrelated causes.
      </p>

      <QuickCheck
        question="If a section of grout between two tiles cracks and falls out, what does this most directly affect?"
        options={[
          { text: "Mainly appearance and a minor loss of water/debris protection in that joint — the tiles themselves generally remain structurally bonded to the floor by adhesive underneath", correct: true, explanation: "Correct. Grout carries no structural bonding role, so its failure is a cosmetic and minor water-protection issue, separate from whether the tiles are still firmly attached." },
          { text: "The tiles on either side are now likely to come loose from the floor", correct: false, explanation: "Tile attachment depends on the adhesive layer beneath each tile, which is a separate material and separate bond from the grout in the joint above." },
          { text: "Nothing at all — grout serves no functional purpose whatsoever", correct: false, explanation: "Grout does serve real functions (appearance, joint protection, minor water resistance) even though it isn't structural — losing a section is a real, if minor, issue worth repairing." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A standard tile floor installation (baseline case)</h3>
      <p>
        A kitchen floor is tiled using thinset mortar spread with a notched trowel, tiles set and leveled, and grout applied into the joints the next day once the mortar has cured. In this baseline sequence, each material does exactly its intended job: the thinset bears the structural load of the tile under foot traffic, and the grout, applied afterward, simply fills and finishes the joints. Neither material could substitute for the other&apos;s role — thinset alone with no grout would leave open, debris-collecting gaps, while grout alone with no adhesive underneath would provide no structural support at all.
      </p>
      <QuickCheck
        question="In a standard tile floor installation, why is thinset mortar applied before the tiles are set, while grout is applied after?"
        options={[
          { text: "Thinset needs to bond the tile to the substrate while both are still workable, whereas grout's job is filling the joints of tiles that are already set and structurally bonded", correct: true, explanation: "Correct. The two materials perform different functions at different stages — structural bonding first, cosmetic/protective joint-filling after the tiles are already secured." },
          { text: "The order is arbitrary and could be reversed with the same result", correct: false, explanation: "The order isn't arbitrary — grout can't provide structural bonding, and it also isn't designed to be applied to tiles that aren't already fixed in place." },
          { text: "Thinset and grout are actually the same material applied at two different times", correct: false, explanation: "They are chemically and functionally distinct products — thinset is a structural adhesive, grout is a non-structural joint filler." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A shower wall using mastic instead of thinset (edge case / variation)</h3>
      <div className="prose-p">
        A bathroom wall installation uses mastic, a pre-mixed organic adhesive, in a lower-moisture area above the shower splash zone, rather than thinset mortar. Mastic can bond tile effectively in this specific context, but it has notably lower water resistance than thinset, which is why building codes and manufacturer guidance generally restrict it from wet floor areas or direct water-exposure zones like a shower floor or shower walls within the direct spray path. This variation illustrates that not all adhesives are interchangeable even though they serve the same structural role — the choice of adhesive still has to match the specific moisture conditions of the installation.
      </div>
      <QuickCheck
        question="Why might mastic be acceptable on an upper bathroom wall but not recommended for a shower floor?"
        options={[
          { text: "Mastic has lower water resistance than thinset mortar, making it unsuitable for direct, sustained water exposure even though it can still structurally bond tile in drier areas", correct: true, explanation: "Correct. Both are structural adhesives, but their water-resistance properties differ significantly, which is why the appropriate choice depends on the specific moisture exposure of the installation location." },
          { text: "Mastic isn't a real structural adhesive at all, so it should never be used for tile", correct: false, explanation: "Mastic is a legitimate structural adhesive for appropriate applications — the concern is specifically its lower water resistance in high-moisture areas, not a lack of bonding ability generally." },
          { text: "The choice of adhesive has no bearing on water exposure concerns", correct: false, explanation: "Water resistance is exactly the property that differs meaningfully between adhesive types and is the deciding factor for wet-area suitability." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Misdiagnosing loose tile as a grout problem (real-world / applied case)</h3>
      <p>
        A homeowner notices a tile that rocks slightly underfoot and, seeing cracked grout nearby, assumes re-grouting will fix it. In reality, a rocking or hollow-sounding tile (often checked by gently tapping it and listening for a hollow sound compared to surrounding tiles) indicates the adhesive bond underneath has failed, not the grout — re-grouting around a loose tile does nothing to restore its structural attachment and can even trap moisture against a compromised bond. The correct fix is removing the loose tile, cleaning off old adhesive, and resetting it in fresh thinset, entirely separate from any grout work.
      </p>
      <QuickCheck
        question="Why would re-grouting around a rocking, loose tile fail to actually fix the problem?"
        options={[
          { text: "A rocking tile indicates the adhesive bond beneath it has failed, and grout — applied only in the joints above — has no ability to restore that underlying structural bond", correct: true, explanation: "Correct. The two materials are structurally independent; grout in the joints cannot repair a failed adhesive bond underneath the tile itself." },
          { text: "Grout and adhesive are functionally interchangeable, so re-grouting should work just as well", correct: false, explanation: "They are not interchangeable — grout has no structural bonding capability, so it cannot substitute for a failed adhesive bond under the tile." },
          { text: "A rocking tile is actually always a grout problem, never an adhesive problem", correct: false, explanation: "A rocking or hollow-sounding tile is a classic sign of adhesive bond failure specifically, not a grout issue — grout problems typically show as cracking or crumbling within the joint itself." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Two materials, two separate jobs"
        type="detail"
        svgSrc="/diagrams/home-diy-knowledge-how-grout-and-tile-adhesive-actually-differ-detail.svg"
        altText="Cross-section diagram of tile installation showing a substrate, a layer of thinset adhesive bonding each tile to the substrate, and grout filling only the joint space between adjacent tiles, with labels clarifying that the adhesive layer is structural and the grout is not."
      />
      <p>
        The adhesive layer runs under the whole tile and carries the structural bond; the grout only occupies the narrow joint between tiles and touches nothing structural at all.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Re-grouting around a loose or rocking tile expecting it to fix the attachment.", fix: "Check for hollow sound/rocking first — that indicates a failed adhesive bond, which requires removing and resetting the tile in fresh thinset, not re-grouting." },
          { mistake: "Using mastic in a high-moisture floor or direct-spray shower area.", fix: "Use thinset mortar for wet floor areas and direct water-exposure zones; reserve mastic for drier wall applications per the manufacturer's rated use." },
          { mistake: "Assuming cracked or missing grout is a serious structural problem.", fix: "Treat it as a cosmetic and minor water-protection repair — remove and re-apply grout in the affected joints, without assuming the tiles themselves are at risk of coming loose." },
        ]}
      />
      <MisconceptionCallout
        myth="Grout is what holds tile down and keeps it from coming loose."
        reality={<p>Grout has no structural bonding role at all. The material that actually holds each tile in place is a separate adhesive &#8212; thinset mortar or, in some lower-moisture wall applications, mastic &#8212; applied to the substrate before the tile is even set. Grout is applied afterward, once the adhesive has cured, purely to fill the narrow joints between already-bonded tiles for appearance, debris resistance, and minor surface water management. A tile that rocks or sounds hollow when tapped has an adhesive bond problem underneath it, which no amount of re-grouting can fix &#8212; the two materials are structurally and functionally independent of each other.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimated tile adhesive bag coverage"
        description="A rough way to estimate how much floor area one bag of thinset mortar will cover, based on the manufacturer's stated coverage rate per pound at your chosen trowel notch size."
        fields={[
          { key: "bagWeightLbs", label: "Bag weight (lb)", defaultValue: 50, step: 1 },
          { key: "coverageLbsPerSqFt", label: "Manufacturer coverage rate (lb per sq ft)", defaultValue: 3.5, step: 0.1 },
        ]}
        resultLabel="Estimated coverage per bag (sq ft)"
        formula="tileAdhesiveCoverageSqFt"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Diagnose a suspect tile by gently tapping it and comparing the sound to a neighboring tile — a hollow sound means an adhesive problem, not a grout problem.",
          "Match adhesive type to moisture exposure: thinset for wet floors and direct-spray shower areas, mastic reserved for appropriate drier wall applications per its rating.",
          "Repair cracked or missing grout promptly to maintain its minor water-protection role, even though it isn't a structural repair.",
          "For a loose or hollow-sounding tile, plan to remove it, clean off old adhesive, and reset it in fresh thinset rather than attempting a grout-only fix.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What's the difference between grout and tile adhesive?", answer: "Adhesive (thinset mortar or mastic) is applied first and forms the actual structural bond between a tile and the substrate beneath it. Grout is applied afterward, into the joints between already-bonded tiles, purely for appearance, joint protection, and minor water management — it has no structural role." },
          { question: "Can grout hold a loose tile in place?", answer: "No. Grout occupies only the narrow joint space between tiles and has no contact with the structural bond beneath the tile itself, so it cannot fix or compensate for a failed adhesive bond." },
          { question: "Is thinset mortar the same thing as grout?", answer: "No, they are different products with different formulations and jobs. Thinset is a cement-based structural adhesive; grout is a separate cement-based or epoxy-based joint filler applied only after the tile is already bonded in place." },
          { question: "Why does my tile sound hollow when I tap it?", answer: "A hollow sound compared to surrounding tiles usually indicates the adhesive bond underneath that specific tile has failed or never fully bonded, which is a separate issue from anything happening in the grout joints and requires resetting the tile in fresh adhesive." },
          { question: "Can mastic be used instead of thinset for tile floors?", answer: "Generally not recommended for wet floor areas or direct water-exposure zones, since mastic has lower water resistance than thinset. It can be appropriate for some drier wall applications per the manufacturer's specific use guidance." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
