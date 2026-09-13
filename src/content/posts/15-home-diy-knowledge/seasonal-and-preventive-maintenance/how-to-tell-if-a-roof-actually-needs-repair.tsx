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
  title: "How to Tell If a Roof Actually Needs Repair",
  category: "home-diy-knowledge",
  order: 37,
  subtopic: "seasonal-and-preventive-maintenance",
  tags: ["roofing", "shingles", "flashing", "roof leaks", "home maintenance"],
  date: "2026-09-12",
  updated: "2026-09-12",
  lastReviewed: "2026-09-12",
  excerpt: "Cosmetic roof wear and an actual leak risk look different up close — granule loss, flashing gaps, and attic-side moisture are the signals that actually separate them.",
  summary: "A roof's job is to shed water completely, and most of its real vulnerabilities aren't the shingle field itself but the seams — flashing around chimneys, vents, and valleys — where two materials meet and a gap can let water through even while the shingles nearby still look intact. Telling ordinary cosmetic wear from an actual repair need means checking specific signs, not just eyeballing the roof's general age.",
  sources: [
    { label: "U.S. Department of Housing and Urban Development (HUD) — Residential Rehabilitation Inspection Guide", url: "https://www.hud.gov/program_offices/housing" },
    { label: "National Association of Home Builders (NAHB) — Residential Construction Standards", url: "https://www.nahb.org/" },
    { label: "National Roofing Contractors Association (NRCA) — Roofing Resources", url: "https://www.nrca.net/" },
  ],
  seeAlso: [
    "home-diy-knowledge/why-gutters-need-regular-cleaning",
    "home-diy-knowledge/why-pipes-freeze-and-burst-in-winter",
    "home-diy-knowledge/what-r-value-actually-measures-in-insulation",
    "home-diy-knowledge/why-drywall-cracks-appear-explained",
  ],
  glossary: [
    { term: "Granule loss", definition: "The gradual shedding of the small mineral granules embedded in a shingle's surface, which protect the asphalt layer beneath from UV exposure — heavy loss signals an aging shingle nearing the end of its service life." },
    { term: "Flashing", definition: "Thin metal strips installed at roof seams — around chimneys, vent pipes, skylights, and valleys — specifically to seal the joint between the roof surface and anything that interrupts it." },
    { term: "Roof valley", definition: "The V-shaped internal angle formed where two downward roof slopes meet, which concentrates far more runoff than any other single point on the roof." },
    { term: "Underlayment", definition: "A water-resistant barrier installed directly on the roof deck, beneath the visible shingles, as a backup layer if water gets past the shingles themselves." },
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
          "Most real roof leaks originate at a seam — flashing around a chimney, vent, or valley — not in the middle of an intact shingle field.",
          "Granule loss and curling shingles are genuine aging signs, but cosmetic wear alone doesn't mean an active leak; attic-side moisture is the more reliable confirmation.",
          "Catching a small flashing gap or a handful of damaged shingles early is a repair; ignoring the same problem long enough turns it into a full roof-deck replacement.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A roof doesn&apos;t fail all at once — it fails at its weakest point first, and that point is almost always a seam rather than the open shingle field. Shingles are designed to shed water when they&apos;re laid flat, overlapping, and undamaged, so a wide expanse of ordinary shingles is usually the most reliable part of the whole roof. The much less reliable spots are anywhere something interrupts that flat surface: a chimney, a vent pipe, a skylight, or a valley where two roof slopes meet. Those interruptions need a separate seal, and that seal is what actually fails first, long before the shingles around it look obviously bad.</div>}
        detailed={<div className="prose-p">Asphalt shingles are engineered to overlap in a pattern that sheds water purely through gravity and surface tension, which works reliably as long as the shingle surface itself stays continuous and each shingle keeps its seal to the one below it. <TermLink href="/home-diy-knowledge/how-to-tell-if-a-roof-actually-needs-repair">Granule loss</TermLink> exposes the asphalt layer beneath to direct UV degradation, and enough of it eventually lets the shingle crack, curl, or lose its water-shedding shape — a slow, visible aging process. <TermLink href="/home-diy-knowledge/how-to-tell-if-a-roof-actually-needs-repair">Flashing</TermLink> failure is a faster, less visible process: flashing is a separate metal seal installed specifically because shingles alone can&apos;t bridge the gap where a roof surface meets a vertical or angled interruption, and that seal can crack, lift, or corrode well before the shingles nearby show any wear at all. A <TermLink href="/home-diy-knowledge/what-water-pressure-actually-measures">roof valley</TermLink> is especially vulnerable for a related reason — it&apos;s a low point that collects and concentrates the runoff from two entire roof slopes into one narrow channel, so any small gap there is exposed to far more water volume than the same gap would see anywhere else on the roof. This is why an inspection that only looks at the general condition of the open shingle field can miss the actual point of failure entirely, and why a <TermLink href="/home-diy-knowledge/why-gutters-need-regular-cleaning">clogged gutter</TermLink> backing water up under the roof edge can create the same kind of damage as a failed seam.</div>}
      />
      <FootnoteAside>Asphalt shingle roofs are typically rated for 20-30 years of service, but that lifespan assumes the flashing and underlayment are also maintained — a roof can fail at a flashing seam decades before the shingle field around it would have needed replacing on its own.</FootnoteAside>

      <p>
        Once flashing and valleys are understood as the roof&apos;s actual weak points, the specific things worth checking — granule loss, lifted flashing edges, and attic-side moisture — stop being a random inspection checklist and start reading as a targeted search for where water is most likely to be getting through.
      </p>

      <QuickCheck
        question="A roof's shingle field looks generally intact, but a homeowner notices a small water stain on the attic ceiling directly below a chimney. Where should they look first for the actual problem?"
        options={[
          { text: "The flashing seal around the chimney, since that's a seam rather than the open shingle field", correct: true, explanation: "Correct. Flashing around interruptions like chimneys is the most common failure point, and it can leak long before the surrounding shingle field shows visible wear." },
          { text: "The shingles farthest away from the chimney, since water often travels long distances before showing a stain", correct: false, explanation: "Water can travel somewhat under a roof deck, but a stain directly below a chimney is a strong first clue pointing at the nearby flashing seam, not distant shingles." },
          { text: "The gutter system, since gutters are the most common source of all roof-related water problems", correct: false, explanation: "Gutters manage runoff after it leaves the roof surface — a stain appearing directly under a chimney points to a seam failure at the roof itself, not the gutter system." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Granule loss on an aging roof (baseline case)</h3>
      <p>
        A homeowner notices sandy grit collecting in the gutters and bald, darker patches appearing on some shingles after two decades on the roof. This is ordinary aging granule loss, and on its own it&apos;s a signal to start planning for eventual replacement, not an emergency. A shingle with moderate granule loss but no cracking or curling is still functionally shedding water — the loss becomes urgent mainly once it&apos;s severe enough that the asphalt layer underneath is visibly exposed and brittle, since that&apos;s when the shingle itself can start to fail structurally rather than just cosmetically.
      </p>

      <QuickCheck
        question="A 20-year-old asphalt roof shows granule loss and a few darker patches, but no cracking, curling, or interior leaks. What does this most likely indicate?"
        options={[
          { text: "Normal age-related wear that's worth monitoring and budgeting for, but not necessarily an active leak risk yet", correct: true, explanation: "Correct. Moderate granule loss without cracking, curling, or interior signs is typical aging — a planning signal, not necessarily an urgent repair." },
          { text: "An active leak that is already causing structural damage inside the attic", correct: false, explanation: "Granule loss alone, without any interior moisture signs, doesn't confirm an active leak — attic-side evidence is the more reliable indicator of that." },
          { text: "A manufacturing defect that voids the shingle's warranty automatically", correct: false, explanation: "Granule loss after two decades of normal service is expected wear, not evidence of a manufacturing defect on its own." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Lifted flashing after a windstorm (edge case / variation)</h3>
      <div className="prose-p">
        After a severe windstorm, a section of flashing around a roof vent is visibly lifted or bent, even though the surrounding shingles are only a few years old and otherwise look fine. This is a case where roof age is essentially irrelevant — new shingles don&apos;t protect against a mechanically damaged seam, and lifted flashing creates an open gap for water regardless of how good the shingle field looks. This scenario also tends to get missed on a quick visual check from the ground, since a lifted flashing edge is often only clearly visible up close or from directly above.
      </div>
      <QuickCheck
        question="A roof's shingles are only a few years old, but a windstorm has visibly lifted a section of flashing around a vent pipe. How urgent is this, relative to the shingles' age?"
        options={[
          { text: "It's urgent regardless of shingle age, since a lifted flashing seam creates an open gap for water independent of how new or worn the shingles are", correct: true, explanation: "Correct. Flashing failure is a mechanical seal problem, not an aging problem — new shingles don't compensate for a physically damaged seam nearby." },
          { text: "It's low priority, since shingles this new mean the roof overall is in good condition", correct: false, explanation: "Shingle age doesn't protect against a separately damaged flashing seam — the lifted flashing is its own, independent point of vulnerability." },
          { text: "It only matters if the shingles directly next to the flashing also show visible damage", correct: false, explanation: "A flashing gap can leak even with undamaged shingles right next to it, since flashing and shingles are two different seals doing two different jobs." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A water stain that only appears during heavy rain (real-world / applied case)</h3>
      <p>
        A <TermLink href="/home-diy-knowledge/why-drywall-cracks-appear-explained">ceiling stain</TermLink> in an upstairs room only shows up during heavy, wind-driven rain and disappears the rest of the time, leading a homeowner to wonder whether it&apos;s really a problem worth addressing. This intermittent pattern is actually a meaningful clue rather than a reason to dismiss it: it points toward a small gap — often at a valley or flashing seam — that only lets water through once wind pressure and volume exceed a certain threshold, rather than a constant leak. Left unaddressed, water intermittently reaching the roof deck and underlayment through the same small gap, storm after storm, degrades the wood decking underneath over time even though the visible ceiling stain seems to come and go harmlessly.
      </p>
      <QuickCheck
        question="A ceiling stain appears only during heavy, wind-driven rain and disappears otherwise. What does this pattern suggest about the underlying problem?"
        options={[
          { text: "A small gap, likely at a valley or flashing seam, that only admits water once rain volume and wind pressure exceed a certain threshold", correct: true, explanation: "Correct. An intermittent leak tied to storm severity often points to a marginal gap that isn't overwhelmed by light rain but lets water through under heavier conditions." },
          { text: "Condensation from indoor humidity, unrelated to the roof itself", correct: false, explanation: "A stain tracking specifically with heavy, wind-driven rain — rather than indoor humidity or season — points to an external water intrusion path, not condensation." },
          { text: "Nothing worth investigating, since the stain disappears between storms", correct: false, explanation: "An intermittent stain still reflects repeated water intrusion at the roof deck level during those storms, even if the visible ceiling symptom isn't constant — the underlying gap is still there." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Where roofs actually fail — shingle field vs. flashing seams"
        type="detail"
        svgSrc="/diagrams/home-diy-knowledge-how-to-tell-if-a-roof-actually-needs-repair-detail.svg"
        altText="Diagram of a roof cross-section showing water shedding normally across the open shingle field, contrasted with a flashing seam at a chimney and a roof valley where a small gap lets water reach the underlayment and roof deck beneath."
      />
      <p>
        The flat shingle field on the left of the diagram sheds water exactly as designed — the vulnerability is concentrated at the seam on the right, where a single small gap can let water reach the wood deck underneath even while every shingle around it stays intact.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Judging a roof's condition only from the ground, without checking flashing around chimneys, vents, and valleys up close.", fix: "Have flashing and valley areas specifically inspected, ideally from a ladder or by a professional, since these fail before the shingle field usually shows visible wear." },
          { mistake: "Dismissing an intermittent leak because it isn't visible except during the heaviest storms.", fix: "Treat storm-dependent leaks as a real, active gap that's simply below the threshold to show constantly — address it before it worsens or the underlayment degrades further." },
          { mistake: "Assuming a roof's age alone determines whether it needs repair, ignoring mechanical damage like storm-lifted flashing.", fix: "Check for physical damage after any severe wind or hail event regardless of the roof's overall age — flashing damage is independent of shingle wear." },
        ]}
      />
      <MisconceptionCallout
        myth="If the shingles look fine from the ground, the roof doesn't need repair."
        reality={<p>Most real roof leaks start at a seam &#8212; flashing around a chimney, vent, or skylight, or a valley where two slopes meet &#8212; not in the open shingle field that&apos;s easiest to see from the ground. A roof can have a genuinely leak-prone flashing gap while the shingles around it look completely intact, because flashing and shingles are two separate seals doing two different jobs. The more reliable way to judge whether a roof actually needs repair is to check the seams up close and to look for attic-side moisture, rather than relying on how uniform the shingle field looks from the driveway.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check the attic for water stains, damp insulation, or daylight visible through the roof deck at least once a year and after any major storm.",
          "Inspect flashing around chimneys, vents, skylights, and valleys specifically — not just the general shingle field — for lifted edges, cracks, or corrosion.",
          "Take note of any leak that only appears during heavy or wind-driven rain rather than dismissing it as harmless because it isn't constant.",
          "Get a professional inspection before a roof reaches the end of its typical 20-30 year service life, or immediately after any storm that could have damaged flashing.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do you know if a roof actually needs repair versus just looking worn?", answer: "Check flashing around chimneys, vents, and valleys up close, and look for attic-side signs like water stains or damp insulation. Cosmetic wear like moderate granule loss on its own doesn't confirm an active leak; attic moisture and seam damage are more reliable indicators." },
          { question: "Why do roofs leak at flashing instead of through the shingles themselves?", answer: "Shingles are designed to shed water in a continuous, overlapping surface, but flashing is a separate seal required anywhere that surface is interrupted, like at a chimney or vent. That seal can crack, lift, or corrode well before the surrounding shingles show comparable wear." },
          { question: "Is granule loss on shingles always a sign of an urgent problem?", answer: "Not necessarily. Moderate granule loss is a normal part of aging and mainly signals it's time to start planning for eventual replacement. It becomes more urgent once it's severe enough that the underlying asphalt layer is visibly exposed and brittle." },
          { question: "Why does a roof leak only during heavy rain and not light rain?", answer: "A small gap, often at a valley or flashing seam, can handle light rain without letting water through but gets overwhelmed once rain volume and wind-driven pressure increase — the leak is real and ongoing at the roof deck level even though it's only visible under heavier conditions." },
          { question: "How long does an asphalt shingle roof typically last before needing repair or replacement?", answer: "Most asphalt shingle roofs are rated for roughly 20-30 years, but that assumes flashing and underlayment are also maintained — flashing failures at seams can require repair well before the shingle field itself reaches the end of its rated life." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
