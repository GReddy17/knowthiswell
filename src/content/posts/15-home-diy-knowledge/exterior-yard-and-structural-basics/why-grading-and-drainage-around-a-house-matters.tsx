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
  title: "Why Grading and Drainage Around a House Actually Matters",
  category: "home-diy-knowledge",
  order: 50,
  subtopic: "exterior-yard-and-structural-basics",
  tags: ["grading", "drainage", "foundation water damage", "landscaping slope", "home maintenance"],
  date: "2026-09-19",
  updated: "2026-09-19",
  lastReviewed: "2026-09-19",
  excerpt: "The ground around a house is supposed to slope away from the foundation — a small, deliberate grade that's often the single biggest factor in whether a basement stays dry.",
  summary: "Grading is the shape of the ground immediately around a foundation, and it's supposed to slope downward away from the house — commonly a minimum of about 1/4 inch of drop per foot for the first several feet — so that rainwater and snowmelt run off away from the footing instead of pooling against it and seeping through. Negative grade (sloping toward the house, often from years of soil settling or mulch buildup) is one of the most common, most fixable causes of a wet basement, and it's usually cheaper to correct than any of the drainage systems (sump pumps, French drains) that exist to manage the water grading was supposed to keep away in the first place.",
  sources: [
    { label: "U.S. Environmental Protection Agency — Foundation Drainage and Grading Guidance", url: "https://www.epa.gov/" },
    { label: "Federal Emergency Management Agency (FEMA) — Homeowner's Guide to Retrofitting", url: "https://www.fema.gov/" },
    { label: "International Code Council (ICC) — International Residential Code, Site Grading Provisions", url: "https://www.iccsafe.org/" },
  ],
  seeAlso: [
    "home-diy-knowledge/how-a-sump-pump-actually-prevents-flooding",
    "home-diy-knowledge/how-a-home-foundation-actually-supports-a-house",
    "home-diy-knowledge/why-gutters-need-regular-cleaning",
    "home-diy-knowledge/why-pipes-freeze-and-burst-in-winter",
  ],
  glossary: [
    { term: "Positive grade", definition: "Ground that slopes downward and away from a building's foundation, directing surface water away from the footing instead of toward it." },
    { term: "Negative grade", definition: "Ground that slopes toward a foundation instead of away from it, often the result of soil settling over time, causing water to pool or seep against the footing." },
    { term: "Swale", definition: "A shallow, graded channel in the ground designed to intercept and redirect surface water runoff away from a structure, often used where a full slope away from the house isn't achievable in the available space." },
    { term: "Hydrostatic pressure", definition: "The pressure exerted by standing or saturated water against a surface, such as a foundation wall, which increases with the depth and duration of water buildup and can force water through even small cracks or porous concrete." },
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
          "Grading is the deliberate slope of the ground next to a foundation — building codes commonly call for a minimum drop of about 1/4 inch per foot for at least the first 6-10 feet away from the house.",
          "Negative grade (soil sloping toward the house instead of away) is one of the most common causes of a wet basement, and it's usually the cheapest water problem on the property to fix.",
          "Grading is a passive, gravity-driven first line of defense — it works before water ever reaches the foundation, which is why fixing it is more effective than adding pumps or drains to manage water that shouldn't have arrived in the first place.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Water always runs downhill, so the shape of the ground right next to a house decides which way rainwater goes the moment it hits the soil. If the ground tilts away from the foundation, water runs off into the yard. If it tilts toward the foundation &#8212; even slightly &#8212; water runs straight at the walls and pools there instead, with nowhere else to go. Grading is just the name for that intentional tilt, and it&apos;s supposed to be built in from day one, sloping away from the house for the first several feet before leveling off.</div>}
        detailed={<div className="prose-p">Most residential codes specify a minimum <TermLink href="/home-diy-knowledge/why-grading-and-drainage-around-a-house-matters">positive grade</TermLink> of roughly 1/4 inch of vertical drop per horizontal foot for at least the first 6-10 feet away from the foundation &#8212; enough slope to move water without being steep enough to erode or become unusable yard space. The mechanism it&apos;s defending against is <TermLink href="/home-diy-knowledge/why-grading-and-drainage-around-a-house-matters">hydrostatic pressure</TermLink>: soil that stays saturated against a foundation wall builds up water pressure that increases with depth, and that pressure can force water through even small cracks, porous concrete, or improperly sealed joints, regardless of how well-built the wall otherwise is. The problem is that grade doesn&apos;t stay fixed. Soil settles and compacts over years, mulch and landscaping get added on top of the original grade, and gutters without extensions dump concentrated water right at the foundation line &#8212; all of which can quietly turn a correctly built positive grade into a <TermLink href="/home-diy-knowledge/why-grading-and-drainage-around-a-house-matters">negative grade</TermLink> without anyone doing anything obviously wrong. Where a full slope away from the house isn&apos;t achievable &#8212; a narrow side yard, for instance &#8212; a <TermLink href="/home-diy-knowledge/why-grading-and-drainage-around-a-house-matters">swale</TermLink>, a shallow graded channel, can intercept water and carry it around the house instead.</div>}
      />
      <FootnoteAside>Grading is checked first in almost every professional wet-basement diagnosis, before more expensive fixes like sump pumps or interior drain tile are even considered &#8212; it&apos;s the cheapest problem to rule out and often the actual cause.</FootnoteAside>

      <p>
        Because grading acts before water ever reaches the wall, it&apos;s worth understanding as the first and cheapest layer in a house&apos;s overall water-management system, not a separate concern from drainage components like gutters and sump pumps.
      </p>

      <QuickCheck
        question="A homeowner notices standing water pooling against their foundation after every rain, even though the house has working gutters. What is the most likely first thing to check?"
        options={[
          { text: "Whether the ground immediately around the foundation has developed a negative grade, sloping toward the house instead of away from it", correct: true, explanation: "Correct. Grading is the first, cheapest thing to check in a wet-foundation diagnosis, since it determines where surface water goes before any other system gets involved." },
          { text: "Whether the sump pump's float switch is malfunctioning", correct: false, explanation: "A sump pump addresses water that's already inside a below-grade space — it doesn't explain water pooling against the outside of the foundation, which is a grading and surface-drainage issue." },
          { text: "Whether the house needs a completely new foundation", correct: false, explanation: "Replacing a foundation is a drastic, expensive step that's almost never the first diagnosis — grading and drainage issues are far more common and far cheaper to rule out first." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Correct grading directing water away (baseline case)</h3>
      <p>
        A house built to code has soil sloping down and away from the foundation at roughly 1/4 inch per foot for the first 8 feet, then leveling into the rest of the yard. During a heavy rain, water landing near the house runs down that slope away from the walls within seconds, never accumulating against the foundation long enough to build meaningful hydrostatic pressure. This is grading working exactly as designed &#8212; a purely passive system requiring no power, no moving parts, and no ongoing action once it&apos;s correctly shaped.
      </p>
      <QuickCheck
        question="Why does correctly sloped grading protect a foundation without requiring any power or moving parts?"
        options={[
          { text: "Gravity alone moves water down the slope and away from the foundation, since water always flows toward lower ground", correct: true, explanation: "Correct. Grading works purely through gravity acting on the shape of the ground — no pump, switch, or power source is involved." },
          { text: "The soil near a correctly graded foundation absorbs water instantly, preventing runoff entirely", correct: false, explanation: "Grading doesn't rely on absorption — it relies on directing where water runs off to, moving it away before it can pool or soak in near the foundation." },
          { text: "Correct grading chemically repels water from the foundation wall", correct: false, explanation: "There's no chemical mechanism involved — grading is purely a physical, gravity-driven slope directing surface water flow." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Negative grade developing over time (edge case / variation)</h3>
      <div className="prose-p">
        The same house, fifteen years later, has settled unevenly and accumulated several inches of mulch and topsoil added during landscaping projects, without anyone re-checking the original slope. The ground near the foundation now tilts slightly toward the house instead of away from it. Rainwater that used to run off now pools against the foundation wall after every storm, slowly saturating the soil there and building hydrostatic pressure against the wall &#8212; with nothing about the foundation itself having changed. This variation shows how a passive system can fail silently over years without any single dramatic event causing it.
      </div>
      <QuickCheck
        question="A foundation that was correctly graded when built develops a water problem fifteen years later, with no changes to the foundation itself. What's the most likely explanation?"
        options={[
          { text: "Gradual soil settling and landscaping additions (mulch, topsoil) have reversed the original slope into a negative grade over time", correct: true, explanation: "Correct. Grading isn't permanent — settling and added material can quietly turn a correct slope into one that directs water toward the house instead of away from it." },
          { text: "Concrete foundations become more porous purely with age, regardless of surrounding conditions", correct: false, explanation: "While concrete can develop cracks over time, the far more common and far cheaper-to-fix explanation for a new water problem after years of dryness is a change in surface grading, not the foundation material itself degrading." },
          { text: "Groundwater levels rise permanently and irreversibly in all locations over a 15-year period", correct: false, explanation: "Groundwater levels do fluctuate, but a permanent, one-directional rise isn't a general rule — the far more common and directly fixable cause of new pooling is a surface grading change near the house." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Re-grading as the fix, before adding a drainage system (real-world / applied case)</h3>
      <p>
        A homeowner facing a damp basement calls a contractor expecting to need an expensive interior drain tile and sump pump system installed. The contractor first checks grading and finds a clear negative slope along one side of the house, caused by a flower bed built up against the foundation over several seasons. Regrading that side &#8212; removing the excess soil and re-sloping it to fall away from the wall &#8212; resolves the dampness within the next few rain events, at a fraction of the cost of the drainage system originally assumed necessary. This real-world case illustrates why grading is checked first: it&apos;s often the actual root cause, and fixing it can make more expensive downstream solutions unnecessary.
      </p>
      <QuickCheck
        question="Why do experienced contractors typically check and fix grading before recommending an interior drainage system or sump pump for a damp basement?"
        options={[
          { text: "Grading is the cheapest thing to check and fix, and it's frequently the actual root cause — fixing it can eliminate the need for more expensive downstream systems entirely", correct: true, explanation: "Correct. Since grading acts before water ever reaches the foundation, correcting a negative grade often solves the problem outright, making an interior drainage system unnecessary." },
          { text: "Drainage systems like sump pumps don't actually work and are never worth installing", correct: false, explanation: "Sump pumps and drain tile are legitimate, effective systems for managing water that does reach a foundation — the point is that fixing an upstream grading problem first can make them unnecessary, not that they're ineffective." },
          { text: "Grading has no real effect on whether a basement stays dry", correct: false, explanation: "The opposite is true — grading is one of the most significant, most commonly overlooked factors in whether water ever reaches the foundation in the first place." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Positive grade vs. negative grade at the foundation"
        type="comparison"
        svgSrc="/diagrams/home-diy-knowledge-why-grading-and-drainage-around-a-house-matters-comparison.svg"
        altText="Diagram comparing two cross-sections of ground next to a house foundation: one showing correctly sloped positive grade carrying rainwater away from the wall, and one showing negative grade where the ground tilts toward the house, causing water to pool against the foundation."
      />
      <p>
        The foundation and the rainfall are identical in both panels &#8212; the only difference is the direction of the slope, and that single variable decides whether the water ends up in the yard or against the wall.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Building up flower beds, mulch, or topsoil against the foundation without checking whether it reverses the original slope.", fix: "Keep landscaping material sloped away from the foundation, and periodically confirm the grade still falls away from the house, not just that it looks tidy." },
          { mistake: "Assuming a wet basement means the foundation itself is failing.", fix: "Check grading and gutter discharge points first — they're the cheapest, most common causes, and ruling them out first can save an unnecessary structural repair." },
          { mistake: "Letting downspouts discharge water directly at the base of the foundation instead of extending them away from the house.", fix: "Add downspout extensions that carry water at least several feet from the foundation, onto ground that's actually sloped away." },
        ]}
      />
      <MisconceptionCallout
        myth="A wet basement almost always means the foundation itself is cracked or failing."
        reality={<p>Far more often, the foundation is structurally fine and the actual cause is that water is being directed toward it instead of away from it &#8212; usually a negative grade, a downspout dumping water too close to the house, or both. Grading is a passive, gravity-driven system that&apos;s supposed to carry surface water away from the foundation before it can pool and build hydrostatic pressure against the wall. Because grade changes gradually through soil settling and landscaping additions, a house that was dry for years can develop a real water problem with the foundation itself never having changed at all. Professionals typically check and correct grading first &#8212; it&apos;s the cheapest fix, and it&apos;s frequently the entire solution, often making more expensive interior drainage work unnecessary.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Required drop for a graded run away from the foundation"
        description="Estimate how many total inches of drop a given slope produces over a set distance — compare against the common code-minimum of about 1/4 inch per foot."
        fields={[
          { key: "distanceFeet", label: "Distance from the foundation (feet)", defaultValue: 8, step: 1 },
          { key: "slopeInchesPerFoot", label: "Slope (inches of drop per foot)", defaultValue: 0.25, step: 0.05 },
        ]}
        resultLabel="Total drop over that distance (inches)"
        formula="drainageSlopeDropInches"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Walk the perimeter of the house after the next rain and check whether water is pooling against the foundation anywhere, rather than running off.",
          "Confirm the ground slopes away from the foundation for at least the first several feet — roughly 1/4 inch of drop per foot is a common minimum target.",
          "Extend downspouts so they discharge well away from the foundation, onto ground that's actually sloped away from the house.",
          "Re-grade any area where landscaping, mulch, or settled soil has flattened or reversed the original slope, before assuming a bigger drainage system is needed.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does grading actually prevent basement water problems?", answer: "Correctly sloped ground carries rainwater away from the foundation by gravity before it can pool and build hydrostatic pressure against the wall — it's a passive first line of defense that acts before water ever reaches the house." },
          { question: "What is the recommended slope for grading away from a foundation?", answer: "A commonly cited minimum is about 1/4 inch of drop per foot for at least the first 6-10 feet away from the house, though local codes and soil conditions can call for more." },
          { question: "Why did my basement suddenly start getting wet after years of being dry?", answer: "The foundation itself often hasn't changed — gradual soil settling, added mulch or topsoil, or a downspout discharging too close to the house can quietly turn a correct grade into a negative one over time." },
          { question: "Is regrading cheaper than installing a sump pump or French drain?", answer: "Generally yes. Regrading addresses the surface-level cause of water reaching the foundation, and fixing it can eliminate the need for interior drainage systems that exist to manage water that shouldn't have arrived in the first place." },
          { question: "Can landscaping like flower beds or mulch cause a foundation water problem?", answer: "Yes — building material up against a foundation wall can reverse the original slope into a negative grade, directing water toward the house instead of away from it, even if the addition looks minor." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
