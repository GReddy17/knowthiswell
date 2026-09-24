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
  title: "Why Gutters Need Regular Cleaning (What Happens When They Clog)",
  category: "home-diy-knowledge",
  order: 36,
  subtopic: "seasonal-and-preventive-maintenance",
  tags: ["gutters", "roof drainage", "foundation moisture", "home maintenance", "seasonal maintenance"],
  date: "2026-09-12",
  updated: "2026-09-24",
  lastReviewed: "2026-09-12",
  excerpt: "A clogged gutter doesn't just overflow — it redirects a roof's entire rainfall load onto fascia, siding, and the soil right next to the foundation.",
  summary: "A gutter's whole job is to collect a roof's runoff and carry it away from the house through a controlled path — the downspout. Once debris blocks that path, the water doesn't stop coming; it just finds an uncontrolled route over the gutter's edge, and that redirected water is what actually causes fascia rot, siding damage, and foundation moisture problems, not the leaves themselves.",
  sources: [
    { label: "U.S. Department of Housing and Urban Development (HUD) — Residential Rehabilitation Inspection Guide", url: "https://www.hud.gov/program_offices/housing" },
    { label: "National Association of Home Builders (NAHB) — Residential Construction Standards", url: "https://www.nahb.org/" },
    { label: "U.S. Environmental Protection Agency (EPA) — WaterSense: Managing Stormwater at Home", url: "https://www.epa.gov/watersense" },
  ],
  seeAlso: [
    "home-diy-knowledge/how-to-tell-if-a-roof-actually-needs-repair",
    "home-diy-knowledge/why-pipes-freeze-and-burst-in-winter",
    "home-diy-knowledge/what-r-value-actually-measures-in-insulation",
    "home-diy-knowledge/why-drywall-cracks-appear-explained",
  ],
  glossary: [
    { term: "Downspout", definition: "The vertical pipe that carries water collected in a horizontal gutter run down to the ground, ideally discharging well away from the foundation." },
    { term: "Fascia", definition: "The horizontal trim board that runs along a roof's edge, directly behind the gutter, which gutters are typically mounted to." },
    { term: "Ice dam", definition: "A ridge of ice that forms at a roof's edge when melted snow refreezes there, blocking further meltwater from draining and forcing it to back up under the shingles." },
    { term: "Hydrostatic pressure", definition: "The pressure exerted by standing or pooled water, which increases with depth and drives water into any available crack or seam." },
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
  {"question": "What is a gutter's only job?", "difficulty": "easy", "options": [{"text": "Moving roof runoff to a controlled discharge point, the downspout", "correct": true, "explanation": "It stops water sheeting off the whole roof edge."}, {"text": "Holding water for later use", "correct": false, "explanation": "Gutters move water; they don't store it."}, {"text": "Keeping birds off the roof", "correct": false, "explanation": "That isn't their purpose."}]},
  {"question": "What is the most common cause of gutter clogs?", "difficulty": "easy", "options": [{"text": "Autumn leaves", "correct": true, "explanation": "A mat of wet leaves can plug a downspout after one storm."}, {"text": "Snow", "correct": false, "explanation": "Leaves are the most common cause."}, {"text": "Too much rain", "correct": false, "explanation": "Rain doesn't clog gutters; debris does."}]},
  {"question": "What happens to rainwater when a gutter clogs?", "difficulty": "easy", "options": [{"text": "It disappears", "correct": false, "explanation": "The water still has to go somewhere."}, {"text": "It spills over the front edge in an uncontrolled sheet", "correct": true, "explanation": "That overflow is what damages fascia, siding and foundations."}, {"text": "It evaporates in the gutter", "correct": false, "explanation": "Most overflows before it could evaporate."}]},
  {"question": "Why does a downspout usually clog before the rest of the gutter run?", "difficulty": "hard", "options": [{"text": "Debris gets funneled into its narrow opening, only a few inches wide", "correct": true, "explanation": "Everything in the gutter flows toward that small outlet."}, {"text": "Downspouts are made of weaker metal", "correct": false, "explanation": "Material isn't the reason."}, {"text": "Birds nest in them first", "correct": false, "explanation": "The funneling of debris is the main cause."}]},
  {"question": "A basement corner stays damp on the same side as a long-overflowing gutter. What connects them?", "difficulty": "hard", "options": [{"text": "Overflow soaks the soil against that section of foundation", "correct": true, "explanation": "Water pools where it was never supposed to reach."}, {"text": "Coincidence", "correct": false, "explanation": "Overflow landing on one side is a direct cause."}, {"text": "Gutters carry water into the basement on purpose", "correct": false, "explanation": "Gutters are meant to carry water away."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "A gutter's only job is to move a roof's runoff to a controlled discharge point — the downspout — instead of letting it fall straight off the roof edge.",
          "A clog doesn't stop the water; it just forces it over the gutter's front edge in an uncontrolled sheet, which is what actually damages fascia, siding, and the foundation.",
          "Most gutter-related home damage traces back to water pooling somewhere it was never supposed to reach, not to the debris itself.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A roof sheds a huge amount of water during any real rainstorm — even a modest roof collects hundreds of gallons in an hour of steady rain. Gutters exist to catch all of that runoff and funnel it to a few specific discharge points (downspouts) instead of letting it sheet off the roof&apos;s entire edge at once, which would otherwise soak the ground right against the house&apos;s foundation. When leaves, twigs, and grit build up and block that channel, the water doesn&apos;t just disappear — it backs up and spills over the gutter&apos;s front lip in exactly the uncontrolled way gutters were installed to prevent.</div>}
        detailed={<div className="prose-p">The mechanism is straightforward fluid dynamics: a gutter is a sloped trough designed to move a specific volume of water toward a downspout faster than that volume can accumulate. Debris reduces the trough&apos;s effective cross-sectional area and, more importantly, can plug the downspout opening itself, which is usually the narrowest point in the whole system. Once inflow exceeds what the remaining opening can drain, water pools in the gutter until it reaches the lowest point of the front edge and overflows there instead. That overflow runs directly down the <TermLink href="/home-diy-knowledge/why-gutters-need-regular-cleaning">fascia</TermLink> board behind the gutter, which is wood or wood-based trim not designed for constant water contact, and from there down the siding. At the ground, the same water that should have been carried several feet away by the downspout instead saturates the soil immediately next to the foundation. Saturated soil against a foundation wall creates <TermLink href="/home-diy-knowledge/what-water-pressure-actually-measures">hydrostatic pressure</TermLink> that pushes water toward any crack, seam, or porous point in that wall — which is why basement dampness and foundation cracking are so often traced back, on inspection, to years of an overflowing gutter rather than any flaw in the foundation itself.</div>}
      />
      <FootnoteAside>A roof measuring 1,500 square feet sheds roughly 900 gallons of water during just one inch of rainfall — all of which the gutter system is expected to carry away from the house rather than let soak straight down at the foundation line.</FootnoteAside>

      <p>
        Clogged gutters also feed a specific cold-weather problem: meltwater with nowhere to drain can refreeze at the roof edge into an <TermLink href="/home-diy-knowledge/what-r-value-actually-measures-in-insulation">ice dam</TermLink>, which backs up under shingles instead of running off the roof the way it should.
      </p>

      <p>
        Once the water&apos;s journey is understood as a controlled path that clogging interrupts, the specific damage patterns homeowners notice — rotted fascia, streaked siding, a damp basement corner — stop looking like separate problems and start looking like the same overflow showing up at different points along its accidental new route.
      </p>

      <QuickCheck
        question="A homeowner notices water pooling in a gutter and spilling over the front edge during a rainstorm, rather than draining through the downspout. What does this most directly indicate?"
        options={[
          { text: "The gutter or downspout is blocked, so incoming water exceeds what the remaining opening can drain, forcing an overflow at the lowest point", correct: true, explanation: "Correct. A pooling, overflowing gutter is the direct signature of restricted flow — inflow from the roof is outpacing the available drainage path." },
          { text: "The gutter was installed with the wrong slope and needs to be entirely replaced", correct: false, explanation: "A slope problem is possible but far less common than debris blockage — overflow during or after a storm, especially near visible leaf buildup, points first to a clog, not a structural installation defect." },
          { text: "This is normal behavior for any gutter during heavy rain and requires no action", correct: false, explanation: "A properly functioning, unclogged gutter system is sized to carry a roof's expected runoff to the downspouts without overflowing under normal storm conditions — visible overflow is a maintenance signal, not expected behavior." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Leaves clogging a downspout in fall (baseline case)</h3>
      <p>
        Autumn leaf drop is the single most common cause of gutter clogs — a downspout opening is often only a few inches wide, and a mat of wet leaves can plug it completely after just one storm. The gutter run above the blocked downspout fills and overflows at its lowest point, usually right above a doorway or window, since that&apos;s often where a downspout is placed. Clearing the clog restores normal flow immediately with no lasting damage, provided it&apos;s done before the fascia has been exposed to repeated overflow for an extended period.
      </p>

      <QuickCheck
        question="Why does a downspout tend to clog before the rest of the gutter run, even when leaves are scattered along the whole length?"
        options={[
          { text: "The downspout opening is the narrowest point in the system, so it's the easiest place for debris to accumulate into a complete blockage", correct: true, explanation: "Correct. Leaves can sit loosely along a wide gutter trough without stopping flow, but the same debris compacts into a full blockage once it reaches the narrower downspout opening." },
          { text: "Downspouts are made of a different material that attracts more debris than the gutter trough", correct: false, explanation: "Material isn't the deciding factor — it's the narrower opening at the downspout that turns scattered debris into a complete blockage." },
          { text: "Leaves only fall directly above downspouts and nowhere else along the roofline", correct: false, explanation: "Leaves fall and collect along the entire gutter run; the downspout just happens to be where scattered debris consolidates into a flow-stopping clog." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A gutter that overflows only during heavy storms (edge case / variation)</h3>
      <div className="prose-p">
        Sometimes a gutter drains fine during light rain but overflows during a heavy downpour, even without an obvious full blockage. This is usually a partial-restriction case: a thin layer of compacted grit and small debris narrows the channel enough that it can still handle a slow trickle but can&apos;t keep up once the roof is shedding water at a much higher rate. This variation matters because it&apos;s easy to dismiss — the gutter &quot;seems to work&quot; most of the time — but the fascia and foundation soil are still taking damage during exactly the storms heavy enough to matter most.
      </div>
      <QuickCheck
        question="A gutter drains normally in light rain but overflows in heavy storms, with no complete blockage visible. What does this pattern suggest?"
        options={[
          { text: "A partial restriction that only becomes a bottleneck once the roof's runoff rate exceeds what the narrowed channel can still carry", correct: true, explanation: "Correct. A partial clog can handle a slow trickle without overflowing but becomes the limiting factor once inflow ramps up during a heavy storm." },
          { text: "The gutter is oversized for the roof and should be replaced with a narrower one", correct: false, explanation: "An oversized gutter wouldn't overflow more during heavy rain — that pattern points to a restriction inside the system, not excess gutter capacity." },
          { text: "Heavy rain always overwhelms gutters regardless of their condition, so this is unrelated to maintenance", correct: false, explanation: "A properly clear gutter system is sized to handle the roof's expected peak runoff — overflow specifically during heavy storms is a strong signal of a partial restriction, not an inherent limitation of gutters generally." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Years of overflow showing up as a damp basement corner (real-world / applied case)</h3>
      <p>
        A homeowner notices a persistently damp corner in the basement, always on the same side of the house, and eventually traces it back to a gutter on that side that has been overflowing unnoticed for years — the downspout was slowly narrowing with mineral buildup and roof grit rather than fully blocking all at once. Years of that redirected water saturating the soil next to the foundation on that one side created enough hydrostatic pressure to push moisture through a hairline seam in the foundation wall. Clearing and repairing the gutter is a necessary first step, but the existing dampness may also need its own remediation — the point is that the gutter fix addresses the ongoing cause, not necessarily the damage already done.
      </p>
      <QuickCheck
        question="A basement has a persistently damp corner on one specific side of the house, and a long-overflowing gutter is found directly above that side. What does this connection illustrate?"
        options={[
          { text: "Years of redirected roof runoff saturating the soil next to the foundation on that side can build enough pressure to push moisture through the foundation wall", correct: true, explanation: "Correct. This is the real-world endpoint of the mechanism — gutter overflow doesn't just damage fascia and siding, it can eventually show up as basement moisture directly below the overflow point." },
          { text: "Basement dampness on one side of a house is unrelated to what's happening at the roofline above it", correct: false, explanation: "The two are directly connected here — the water taking the wrong path at the roofline is the same water eventually reaching the basement wall below it." },
          { text: "The gutter's condition has no bearing on foundation moisture, which is determined entirely by the water table", correct: false, explanation: "While water table height matters for some basement moisture issues, a localized damp spot lining up with a long-overflowing gutter above it points to surface water mismanagement, not just groundwater." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Where roof runoff goes — working gutter vs. clogged gutter"
        type="comparison"
        svgSrc="/diagrams/home-diy-knowledge-why-gutters-need-regular-cleaning-comparison.svg"
        altText="Comparison diagram showing a working gutter carrying roof runoff through a downspout well away from the house, versus a clogged gutter overflowing at its front edge, sending water down the fascia and siding and saturating the soil directly next to the foundation."
      />
      <p>
        The two panels carry the exact same rainfall — the only difference is whether the downspout is open. That single difference decides whether the water ends up several feet from the house or soaking straight into the foundation soil.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Cleaning the visible gutter trough but never checking whether the downspout itself is clear.", fix: "Run water through the downspout after clearing the trough — the narrowest point is usually where the real blockage hides." },
          { mistake: "Assuming a gutter that looks fine on a dry day has no problem, without checking it during or right after rain.", fix: "Check gutters during or immediately after a real rainstorm, when a partial restriction actually reveals itself as overflow." },
          { mistake: "Waiting until a downspout empties directly at the foundation line instead of extending it away from the house.", fix: "Add a downspout extension or splash block so discharged water lands several feet from the foundation, not right against it." },
        ]}
      />
      <MisconceptionCallout
        myth="Gutter cleaning is a cosmetic chore — leaves in a gutter don't really hurt anything."
        reality={<p>The leaves themselves aren&apos;t the damage &#8212; the damage comes from where the water goes once it can&apos;t follow its intended path. A clogged gutter forces the same volume of water that would have been carried safely to a downspout to instead pour over the front edge, directly onto fascia boards not built for constant water exposure, and down into the soil right against the foundation. Left unaddressed across multiple seasons, that redirected water is a documented, common cause of fascia rot, siding damage, and basement moisture &#8212; not a hypothetical worst case, but the ordinary outcome of water finding the only path still open to it.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Clean gutters at least twice a year — typically late spring and late fall — and more often if overhanging trees drop debris year-round.",
          "Check downspouts specifically, not just the gutter trough, by running water through them after clearing visible debris.",
          "Watch gutters during an actual rainstorm at least once a season to catch a partial restriction that only shows up under heavy flow.",
          "Make sure every downspout discharges several feet away from the foundation, adding an extension or splash block if it currently doesn't.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How often do gutters actually need to be cleaned?", answer: "Most homes do well with a thorough cleaning twice a year, in late spring and late fall after leaf drop. Homes with overhanging trees or heavy debris year-round may need more frequent attention." },
          { question: "What actually happens if you never clean your gutters?", answer: "Debris eventually restricts or fully blocks flow, causing water to overflow the gutter's front edge during rain instead of draining through the downspout — that redirected water is what causes fascia rot, siding staining, and, over years, foundation moisture problems." },
          { question: "Can clogged gutters cause ice dams?", answer: "Yes, indirectly. A gutter packed with debris and ice can't drain meltwater from a warming roof edge, which contributes to the standing water that refreezes into an ice dam and can back up under shingles." },
          { question: "Is gutter overflow really connected to basement dampness?", answer: "It can be. Water that repeatedly overflows near the foundation saturates the soil there, and saturated soil creates pressure that can push moisture through any crack or seam in a foundation wall, especially over multiple seasons." },
          { question: "Do gutter guards mean you never have to clean gutters again?", answer: "No. Gutter guards reduce how much large debris enters the trough, but fine grit, seed pods, and buildup at the downspout opening can still restrict flow over time — guards reduce cleaning frequency, they don't eliminate the need for it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
