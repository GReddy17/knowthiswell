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
  title: "Hardwood vs. Laminate vs. Vinyl Flooring: What Actually Differs",
  category: "home-diy-knowledge",
  order: 41,
  subtopic: "flooring-and-interior-basics",
  tags: ["flooring", "hardwood floors", "laminate flooring", "vinyl flooring", "home renovation"],
  date: "2026-09-17",
  updated: "2026-09-17",
  lastReviewed: "2026-09-17",
  excerpt: "The three floor types aren't ranked best-to-worst — they trade the same three properties (real wood, water resistance, repairability) in different directions.",
  summary: "Hardwood, laminate, and vinyl flooring differ mainly in what they're actually made of and how that material responds to moisture and wear: solid wood can be sanded and refinished but swells with water; laminate is a photographic wood image over a moisture-sensitive fiberboard core; vinyl is fully synthetic and genuinely waterproof but can't be refinished once it's damaged.",
  sources: [
    { label: "National Wood Flooring Association (NWFA) — Installation and Care Guidelines", url: "https://nwfa.org/" },
    { label: "Consumer Product Safety Commission (CPSC) — Flooring Product Safety Resources", url: "https://www.cpsc.gov/" },
    { label: "U.S. Department of Housing and Urban Development (HUD) — Residential Rehabilitation Standards", url: "https://www.hud.gov/" },
  ],
  seeAlso: [
    "home-diy-knowledge/why-drywall-cracks-appear-explained",
    "home-diy-knowledge/what-r-value-actually-measures-in-insulation",
    "home-diy-knowledge/gloss-vs-matte-paint-finishes-explained",
    "home-diy-knowledge/why-hardwood-floors-expand-and-contract",
  ],
  glossary: [
    { term: "Wear layer", definition: "The clear, protective top coating on laminate and vinyl flooring that resists scuffs and scratches; its thickness largely determines how much foot traffic the floor can take before showing damage." },
    { term: "High-density fiberboard (HDF)", definition: "A compressed wood-fiber board used as the structural core of most laminate flooring; it is stronger than plain particleboard but still swells if it absorbs standing water." },
    { term: "Luxury vinyl plank (LVP)", definition: "A type of vinyl flooring made in wood-look planks with a rigid core, marketed as fully waterproof and designed to closely mimic hardwood's appearance." },
    { term: "Refinishing", definition: "Sanding down a solid wood floor's surface to remove scratches and old finish, then applying new stain and sealant — a repair option unique to solid hardwood among these three floor types." },
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
          "Hardwood is solid wood all the way through, which is why it can be sanded and refinished — but that same solid wood structure is what makes it swell and warp with moisture.",
          "Laminate is a printed photograph of wood over a compressed wood-fiber core — it looks convincing but the core is still wood fiber, so standing water is still its main weakness.",
          "Vinyl is the only one of the three that's genuinely waterproof end to end, but it can't be sanded or refinished — physical damage means replacing the plank, not repairing it.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">These three flooring types often get compared like a simple good-better-best ranking, but they&apos;re really trading the same handful of properties in different directions. Hardwood is real wood, which people want for authenticity and because it can be refinished, but real wood absorbs moisture and swells. Laminate fakes the wood look with a photo layer over a wood-fiber board, which is cheaper and more water-tolerant than hardwood but still not waterproof. Vinyl skips wood entirely and is made from synthetic layers, which makes it genuinely waterproof but means damage can&apos;t be sanded out — a damaged plank gets replaced, not repaired.</div>}
        detailed={<div className="prose-p">The core difference is what each product is actually made of, layer by layer. Solid hardwood is a single material top to bottom — real wood grain, real wood cells — which is exactly why it can be sanded down and <TermLink href="/home-diy-knowledge/hardwood-vs-laminate-vs-vinyl-flooring-explained">refinished</TermLink> multiple times over decades; it&apos;s also why it responds to humidity the way any solid wood does (see the companion post on why hardwood expands and contracts). Laminate flooring is a manufactured sandwich: a printed decorative layer showing a wood photograph, a clear <TermLink href="/home-diy-knowledge/hardwood-vs-laminate-vs-vinyl-flooring-explained">wear layer</TermLink> on top for scratch resistance, and a <TermLink href="/home-diy-knowledge/hardwood-vs-laminate-vs-vinyl-flooring-explained">high-density fiberboard</TermLink> core underneath that gives it structure. That core is still wood fiber, just compressed and resin-bonded rather than solid — which is why laminate tolerates everyday spills reasonably well but standing water at a seam can still cause the core to swell and delaminate. Vinyl, particularly modern <TermLink href="/home-diy-knowledge/hardwood-vs-laminate-vs-vinyl-flooring-explained">luxury vinyl plank</TermLink>, replaces that wood-fiber core with a synthetic (often PVC-based) rigid core, so there&apos;s no wood-based material anywhere in the product to absorb water — the tradeoff is that vinyl&apos;s printed layer and wear layer, once gouged or torn, can&apos;t be sanded and refinished the way solid wood can; the plank itself has to be swapped.</div>}
      />
      <FootnoteAside>&quot;Waterproof&quot; on a vinyl product describes the plank material itself, not the whole floor system — water can still seep into subfloor gaps or seams and cause problems underneath even when the vinyl surface itself is unaffected.</FootnoteAside>

      <p>
        Because the three materials trade the same properties differently, the &quot;right&quot; choice depends on the room: a kitchen or bathroom weighs moisture resistance heavily, while a formal living room might weigh long-term refinishability and authentic feel more heavily than water resistance.
      </p>

      <QuickCheck
        question="Why can a solid hardwood floor be sanded and refinished, while a laminate floor generally cannot?"
        options={[
          { text: "Hardwood is solid wood all the way through, so sanding removes a worn surface layer and reveals more of the same real wood underneath; laminate's top layer is a thin printed photograph, and sanding through it destroys the image entirely", correct: true, explanation: "Correct. Hardwood's uniform material composition is exactly what makes refinishing possible; laminate's decorative layer is a printed graphic, not a material that extends deeper into the plank." },
          { text: "Laminate floors are actually just as refinishable as hardwood, just less commonly done", correct: false, explanation: "Laminate's design — a thin printed layer over a fiberboard core — is not the same material throughout, so sanding it removes the printed wood image rather than revealing more of the same surface." },
          { text: "Refinishing is possible on both, but only hardwood manufacturers officially recommend it", correct: false, explanation: "This isn't a manufacturer-preference difference — it's a material one. Laminate's printed decorative layer is only a thin surface coating, not a repeating material that sanding could reveal more of." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Choosing flooring for a dry, low-traffic formal room (baseline case)</h3>
      <p>
        A formal living room sees light foot traffic and has no plumbing fixtures nearby, so moisture exposure is minimal. Here, hardwood&apos;s main tradeoffs (moisture sensitivity, higher upfront cost) matter least, while its main advantages (authentic material, decades of usable life through refinishing, resale value) matter most — this is the scenario hardwood is best suited for, and where laminate or vinyl&apos;s water resistance offers little practical benefit to offset their lack of refinishability.
      </p>
      <QuickCheck
        question="In a dry, low-traffic formal room, which of hardwood's tradeoffs matters least?"
        options={[
          { text: "Its sensitivity to moisture, since there's minimal water exposure in that room to begin with", correct: true, explanation: "Correct. Hardwood's main weakness (moisture sensitivity) is largely irrelevant in a room with no real water exposure, letting its main strengths dominate the decision." },
          { text: "Its ability to be refinished, since that feature isn't useful in a low-traffic room", correct: false, explanation: "Refinishability remains a genuine long-term advantage regardless of traffic level — it's the moisture-sensitivity tradeoff, not the refinishing benefit, that becomes less relevant here." },
          { text: "Its higher upfront cost, which disappears entirely in dry rooms", correct: false, explanation: "Upfront cost doesn't change based on the room's moisture exposure — it's a separate tradeoff from the moisture-sensitivity one being minimized here." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A bathroom or laundry room (edge case / variation)</h3>
      <div className="prose-p">
        A bathroom floor faces routine splashing, humidity, and occasional standing water around a tub or washing machine. Here the ranking flips: hardwood&apos;s moisture sensitivity becomes a serious liability rather than a manageable tradeoff, laminate&apos;s wood-fiber core remains a real risk at seams, and vinyl&apos;s fully synthetic, genuinely waterproof construction becomes the clearly favored choice specifically because this room&apos;s dominant risk factor (water) is the one property vinyl doesn&apos;t compromise on.
      </div>
      <QuickCheck
        question="Why does vinyl typically become the preferred choice in a bathroom, when hardwood might be preferred in a formal living room?"
        options={[
          { text: "The room's dominant risk (routine water exposure) directly matches the property vinyl is strongest at (being genuinely waterproof), while that same risk is hardwood's core weakness", correct: true, explanation: "Correct. The right flooring choice depends on which property matters most for a given room's actual conditions, not a fixed universal ranking." },
          { text: "Vinyl is simply a higher-quality material than hardwood in every respect", correct: false, explanation: "Vinyl isn't universally 'better' — it trades refinishability and some resale appeal for water resistance, which happens to be the deciding factor specifically in wet rooms." },
          { text: "Hardwood can't physically be installed in bathrooms at all", correct: false, explanation: "Hardwood can be physically installed in a bathroom; the issue is that its performance there is poor due to routine moisture exposure, not that installation is impossible." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A rental property choosing floors for durability and turnover cost (real-world / applied case)</h3>
      <p>
        A landlord replacing flooring across several rental units weighs upfront cost against how the floor holds up between tenants and how cheaply damage gets fixed. Laminate often wins this specific comparison: it&apos;s cheaper than hardwood upfront, handles moderate wear reasonably well, and — while it can&apos;t be refinished — individual damaged planks in click-lock laminate can sometimes be swapped out without redoing the whole floor, unlike a scratch or gouge in vinyl sheet goods, which may require a larger patch. The &quot;right&quot; floor here isn&apos;t the most durable material in the abstract, it&apos;s the one whose specific tradeoffs match the actual cost pattern (frequent turnover, budget-sensitive repairs) the property faces.
      </p>
      <QuickCheck
        question="Why might a landlord choose laminate over both hardwood and vinyl for rental units, even though vinyl is more water-resistant?"
        options={[
          { text: "The decision weighs the property's actual cost pattern (upfront price, turnover frequency, repair cost) rather than picking the single most water-resistant material available", correct: true, explanation: "Correct. Water resistance is one property among several, and the best material depends on which properties matter most for the specific use case — here, cost and repairability between tenants." },
          { text: "Laminate is objectively the best flooring type for every use case", correct: false, explanation: "No flooring type is universally best — each of the three trades the same core properties differently, and the right choice depends on the specific room or use case's priorities." },
          { text: "Vinyl cannot be used in rental properties for any reason", correct: false, explanation: "Vinyl can absolutely be used in rentals and often is, especially in wet areas — the example illustrates a case where laminate's particular tradeoffs happen to fit this landlord's priorities better, not a rule against vinyl." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Three floors, three cross-sections — the same tradeoffs shown as layers"
        type="comparison"
        svgSrc="/diagrams/home-diy-knowledge-hardwood-vs-laminate-vs-vinyl-flooring-explained-comparison.svg"
        altText="Comparison diagram showing three flooring cross-sections side by side: solid hardwood as one uniform wood layer, laminate as a printed decorative layer plus wear layer over a wood-fiber core, and vinyl as printed and wear layers over a fully synthetic rigid core."
      />
      <p>
        The layer structure explains the tradeoff directly: hardwood is uniform wood (refinishable, moisture-sensitive), laminate has a wood-fiber core under a printed layer (cheaper, still moisture-sensitive at the core), and vinyl has a synthetic core under its printed layer (waterproof, not refinishable).
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating the three flooring types as a strict best-to-worst quality ranking.", fix: "Compare them by which property (refinishability, water resistance, cost) matters most for the specific room, since each type trades those properties differently." },
          { mistake: "Assuming any vinyl or laminate product is automatically 'waterproof' the way marketing implies.", fix: "Check whether the specific product is rated waterproof (common in modern LVP) versus merely water-resistant (more common in laminate), and remember subfloor seams can still let water in underneath." },
          { mistake: "Installing solid hardwood in a room with routine high moisture exposure for the aesthetic, without a moisture-management plan.", fix: "In bathrooms, laundry rooms, or basements, favor vinyl or engineered wood products designed for moisture exposure, or add a dedicated moisture barrier if hardwood is non-negotiable." },
        ]}
      />
      <MisconceptionCallout
        myth="Laminate flooring is basically the same as vinyl, just a different name for a similar cheap wood-look floor."
        reality={<p>The two are built from fundamentally different materials. Laminate&apos;s structural core is compressed wood fiber (high-density fiberboard) topped with a printed photographic layer — it is still a wood-based product underneath, which is why standing water at a seam remains a real risk for laminate. Vinyl&apos;s core, particularly in modern luxury vinyl plank, is a fully synthetic material with no wood fiber anywhere in the product, which is what allows it to be genuinely waterproof rather than merely water-resistant. They can look nearly identical from a photo, but their response to water exposure is a fundamentally different, material-level difference, not a marketing distinction.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimated flooring cost per year of expected life"
        description="A simple way to compare flooring options beyond sticker price — dividing installed price per square foot by expected lifespan in years gives a rough annualized cost, which can favor a pricier, longer-lasting material over a cheaper, shorter-lived one."
        fields={[
          { key: "pricePerSqFt", label: "Installed price ($/sq ft)", defaultValue: 8, step: 0.5 },
          { key: "lifespanYears", label: "Expected lifespan (years)", defaultValue: 20, step: 1 },
        ]}
        resultLabel="Estimated cost per square foot per year ($)"
        formula="flooringCostPerYearPerSqFt"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Match the flooring type to the room's actual moisture exposure first — that's usually the deciding factor, not appearance.",
          "For wet-prone rooms (bathrooms, laundry, basements), favor a product explicitly rated waterproof, not just water-resistant.",
          "If long-term refinishability and resale value matter for a specific room, weigh solid hardwood's moisture tradeoff against that benefit deliberately, rather than defaulting to it purely for looks.",
          "Compare options using cost per year of expected life, not just sticker price per square foot, especially when comparing a pricier, longer-lived material against a cheaper, shorter-lived one.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is vinyl flooring actually as good as hardwood?", answer: "It depends what 'good' means for the room. Vinyl is genuinely waterproof and lower-maintenance, but it can't be sanded and refinished the way hardwood can, and most buyers still perceive real hardwood as higher-value for resale. Neither is universally better — they trade different properties." },
          { question: "Can laminate flooring get wet?", answer: "It can tolerate incidental moisture like a quick spill wiped up promptly, but standing water — especially pooling at seams — can swell and damage the wood-fiber core underneath the printed layer, so it's not considered a waterproof product." },
          { question: "How many times can a hardwood floor actually be refinished?", answer: "It depends on the wood layer's thickness: solid hardwood is typically thick enough to be sanded and refinished 4-6 times or more over its lifetime, while thin-veneer engineered hardwood may only tolerate one or two light refinishes before the veneer is sanded through." },
          { question: "Why is vinyl flooring cheaper than hardwood if it lasts a similarly long time?", answer: "Vinyl's synthetic materials and manufacturing process are generally less expensive than harvesting, milling, and finishing solid wood, and vinyl doesn't carry the same long-term refinishing value that partly justifies hardwood's higher price." },
          { question: "Is laminate flooring or vinyl flooring better for a kitchen?", answer: "Vinyl is generally the stronger choice for kitchens specifically because of routine spill risk near sinks and appliances — it's genuinely waterproof, while laminate's wood-fiber core remains vulnerable to standing water at seams." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
