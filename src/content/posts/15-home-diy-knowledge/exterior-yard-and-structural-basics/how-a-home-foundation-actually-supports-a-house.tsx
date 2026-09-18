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
  title: "How a Home's Foundation Actually Supports the House",
  category: "home-diy-knowledge",
  order: 46,
  subtopic: "exterior-yard-and-structural-basics",
  tags: ["home foundation", "footings", "bearing capacity", "structural basics", "home maintenance"],
  date: "2026-09-17",
  updated: "2026-09-17",
  lastReviewed: "2026-09-17",
  excerpt: "A foundation doesn't hold a house up by being strong — it holds it up by spreading the house's weight over enough soil that the soil doesn't compress unevenly.",
  summary: "A house's entire weight funnels down through its structural frame into a foundation, whose real job is spreading that concentrated load across a wide enough footing that the pressure on the soil below stays under the soil's safe bearing capacity — foundation problems overwhelmingly trace back to that pressure exceeding what the soil can support evenly, not to the concrete itself being weak.",
  sources: [
    { label: "American Concrete Institute (ACI) — Residential Foundation Design Standards", url: "https://www.concrete.org/" },
    { label: "U.S. Department of Housing and Urban Development (HUD) — Foundation Construction Guidelines", url: "https://www.hud.gov/" },
    { label: "United States Geological Survey (USGS) — Soil and Ground Conditions Resources", url: "https://www.usgs.gov/" },
  ],
  seeAlso: [
    "home-diy-knowledge/why-drywall-cracks-appear-explained",
    "home-diy-knowledge/how-a-sump-pump-actually-prevents-flooding",
    "home-diy-knowledge/why-pipes-freeze-and-burst-in-winter",
    "home-diy-knowledge/why-gutters-need-regular-cleaning",
  ],
  glossary: [
    { term: "Footing", definition: "The widened base of concrete at the bottom of a foundation wall or column, specifically sized to spread the structure's load over a large enough soil area." },
    { term: "Bearing capacity", definition: "The maximum pressure a given soil type can support without excessive compression or shifting, expressed in pounds per square foot; it varies significantly by soil composition and moisture content." },
    { term: "Settling", definition: "Gradual, usually minor downward movement of a foundation as soil beneath it compresses under load over time; uneven settling across different parts of a foundation is what causes most visible cracking." },
    { term: "Expansive soil", definition: "Clay-rich soil that swells significantly when wet and shrinks when dry, creating repeated movement beneath a foundation that can cause more foundation problems than the load itself." },
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
          "A foundation's real job is spreading a house's entire weight over a wide enough area of soil that the resulting pressure stays under that soil's safe bearing capacity.",
          "Most real-world foundation problems come from uneven settling — different parts of the foundation experiencing different soil pressure or soil conditions — not from the concrete itself failing or being too weak.",
          "Soil type matters as much as the foundation design itself; the same foundation performs very differently on stable soil versus expansive clay that swells and shrinks with moisture.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">It&apos;s natural to picture a foundation as a slab of solid, strong concrete simply being tough enough to hold a house up. The more accurate picture is that the foundation&apos;s job is to spread the house&apos;s weight out, the same way snowshoes spread a person&apos;s weight over snow so they don&apos;t sink in. A house pressing down on a small area would sink into most soils over time regardless of how strong the concrete itself is — the foundation&apos;s width and shape exist specifically to keep the pressure on the ground low enough that the soil can support it without giving way unevenly.</div>}
        detailed={<div className="prose-p">Every structural load in a house — walls, floors, roof, furniture, people — ultimately funnels down through the frame into the foundation, and the foundation&apos;s <TermLink href="/home-diy-knowledge/how-a-home-foundation-actually-supports-a-house">footing</TermLink> is the widened base specifically engineered to spread that concentrated load over enough soil area. Every soil type has a <TermLink href="/home-diy-knowledge/how-a-home-foundation-actually-supports-a-house">bearing capacity</TermLink> — a maximum safe pressure it can support without compressing excessively — and footing size is calculated so the resulting pressure on the soil stays comfortably under that limit. This is why a foundation on dense, stable soil (or bedrock) can often use a smaller footing than the same house built on soft or <TermLink href="/home-diy-knowledge/how-a-home-foundation-actually-supports-a-house">expansive soil</TermLink>, which needs a wider footing, deeper footings, or engineered soil improvements to safely support the same load. The most common real-world foundation problems &#8212; a stairstep crack in a block wall, a door that starts sticking, a visible dip in a floor &#8212; almost always trace back to uneven <TermLink href="/home-diy-knowledge/how-a-home-foundation-actually-supports-a-house">settling</TermLink>: one section of the foundation experiencing different pressure or different soil conditions than another, causing that section to shift slightly relative to the rest of the structure. This is fundamentally a soil-and-load-distribution problem, not usually a problem with the concrete&apos;s own strength.</div>}
      />
      <FootnoteAside>Some minor, uniform settling across an entire foundation in the first few years after construction is normal and expected — it&apos;s uneven settling between different sections that signals a real problem.</FootnoteAside>

      <p>
        This is also why soil testing happens before a foundation is designed, not as an afterthought: the correct footing size and depth genuinely can&apos;t be determined without knowing what the actual soil beneath the house can support.
      </p>

      <QuickCheck
        question="Why does a foundation footing spread out wider at its base rather than just being a straight, narrow wall going into the ground?"
        options={[
          { text: "To spread the house's concentrated load over a larger soil area, keeping the resulting pressure under the soil's safe bearing capacity", correct: true, explanation: "Correct. The widened footing exists specifically to reduce pressure per square foot on the soil, the same principle behind snowshoes spreading weight over snow." },
          { text: "A wider base simply uses less concrete overall than a narrow one", correct: false, explanation: "A wider footing typically uses more concrete, not less — the tradeoff is intentional, trading extra material for safely distributed load-bearing pressure." },
          { text: "The shape has no functional purpose and is purely a construction convention", correct: false, explanation: "The widened shape is a direct engineering response to soil bearing capacity limits, not an arbitrary convention." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A standard footing on stable soil (baseline case)</h3>
      <p>
        A typical single-family home is built on dense, stable soil with a well-established, code-compliant footing width. The load from the house spreads evenly across that footing area, resulting in a bearing pressure comfortably under the soil&apos;s safe capacity. Over decades, the foundation experiences only the small, uniform settling expected on stable ground, with no meaningful cracking or shifting. This is the scenario standard residential footing sizing tables are built around.
      </p>
      <QuickCheck
        question="Why does a foundation built to standard specifications on stable, dense soil typically avoid significant cracking over decades?"
        options={[
          { text: "The bearing pressure the footing creates on that soil stays comfortably under the soil's safe bearing capacity, allowing only minor, uniform settling", correct: true, explanation: "Correct. Standard footing sizing assumes a certain soil bearing capacity, and stable soil comfortably meets that assumption, minimizing uneven settling risk." },
          { text: "Stable soil never allows any foundation movement whatsoever", correct: false, explanation: "Some minor settling is normal even on stable soil — the key difference is that it tends to be small and uniform rather than significant and uneven." },
          { text: "The concrete used in a standard footing is inherently stronger than concrete used elsewhere", correct: false, explanation: "The concrete mix isn't necessarily different — the key variable in this example is the soil's bearing capacity relative to the load, not the concrete's own strength." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A foundation on expansive clay soil (edge case / variation)</h3>
      <div className="prose-p">
        A house built on expansive clay soil experiences soil that swells noticeably when wet (after heavy rain or a wet season) and shrinks when dry. Even with a correctly sized footing for the load itself, this repeated swelling and shrinking beneath different sections of the foundation — depending on which areas get more moisture exposure, like near downspouts versus a drier side of the house — can cause uneven movement that a standard footing on stable soil would never experience. This variation shows that footing size alone doesn&apos;t guarantee foundation stability; soil behavior over time matters just as much as its static bearing capacity.
      </div>
      <QuickCheck
        question="Why might a correctly sized foundation still develop problems on expansive clay soil?"
        options={[
          { text: "The soil itself swells and shrinks unevenly with moisture changes across different parts of the foundation, causing movement unrelated to whether the footing was sized correctly for the load", correct: true, explanation: "Correct. Expansive soil introduces a moisture-driven movement risk that correct load-based footing sizing alone doesn't address." },
          { text: "Footing size calculations already account for all possible soil moisture behavior automatically", correct: false, explanation: "Standard bearing-capacity calculations address load distribution, but expansive soil's swelling behavior often requires additional design measures (moisture control, deeper footings, soil stabilization) beyond basic sizing." },
          { text: "Expansive clay soil has no real effect on foundations if the footing is wide enough", correct: false, explanation: "Footing width addresses static bearing pressure, not the separate problem of soil volume change from moisture — expansive soil requires its own specific mitigation." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Diagnosing a stairstep crack in a foundation wall (real-world / applied case)</h3>
      <p>
        A homeowner notices a diagonal, stairstep-pattern crack running through the mortar joints of a block foundation wall, concentrated on one corner of the house. This pattern is a classic sign of differential (uneven) settling — that corner of the foundation has settled slightly more than the rest of the house, often due to soil conditions specific to that spot (a downspout draining nearby, saturating the soil, or a section of fill soil that compresses differently than undisturbed soil elsewhere). The diagnosis and fix target the localized soil-and-drainage cause, not the wall material itself, which is functioning as expected under an uneven load it wasn&apos;t designed to accommodate evenly.
      </p>
      <QuickCheck
        question="Why does a stairstep crack concentrated at one corner of a foundation typically point to a localized soil issue rather than a general concrete-strength problem?"
        options={[
          { text: "The crack pattern reflects one section of the foundation settling differently than the rest, which points to uneven soil conditions or moisture at that specific spot, not a uniform weakness in the concrete", correct: true, explanation: "Correct. Differential settling concentrated in one area strongly implicates localized soil or moisture conditions rather than the foundation material overall." },
          { text: "Stairstep cracks always mean the entire foundation needs to be replaced regardless of the cause", correct: false, explanation: "The appropriate fix depends on identifying and addressing the localized cause (often drainage-related), not necessarily replacing the whole foundation." },
          { text: "This crack pattern indicates a problem with the concrete's chemical curing process", correct: false, explanation: "A concentrated, directional stairstep crack pattern is a classic signature of differential settling from soil conditions, not a curing defect, which would typically show differently and more uniformly." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Spreading the load so the soil can carry it"
        type="flow"
        svgSrc="/diagrams/home-diy-knowledge-how-a-home-foundation-actually-supports-a-house-flow.svg"
        altText="Diagram showing a house's structural load funneling down through walls into a foundation footing, which spreads that load across a wide base so the resulting pressure on the soil stays under the soil's safe bearing capacity, compared against a narrow footing concentrating pressure and risking uneven settling."
      />
      <p>
        The footing&apos;s width is the entire point — the same total load, spread wider, produces lower pressure per square foot on the soil beneath it.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming all foundation cracking indicates a serious structural failure of the concrete itself.", fix: "Distinguish uniform, minor settling cracks (often cosmetic) from directional, widening stairstep cracks concentrated in one area (often a sign of uneven settling worth investigating)." },
          { mistake: "Ignoring drainage and grading around a foundation as unrelated to structural health.", fix: "Recognize that water pooling near a foundation changes local soil moisture and bearing behavior, directly affecting settling risk in that specific area." },
          { mistake: "Assuming the same footing design works identically on any soil type.", fix: "Have soil conditions assessed before foundation work, since bearing capacity and moisture-driven soil behavior vary significantly and directly affect what footing design is actually adequate." },
        ]}
      />
      <MisconceptionCallout
        myth="A foundation holds a house up mainly because the concrete itself is extremely strong."
        reality={<p>Concrete strength matters, but it isn&apos;t the main variable determining whether a foundation performs well over decades. The foundation&apos;s core function is spreading the house&apos;s entire load over a wide enough footing area that the resulting pressure on the soil beneath stays under that soil&apos;s safe bearing capacity. The overwhelming majority of real-world foundation problems &#8212; cracking, settling, doors and windows sticking &#8212; trace back to uneven pressure or unstable/expansive soil conditions beneath different parts of the foundation, not to the concrete itself being structurally weak. This is exactly why soil testing precedes foundation design, and why drainage and grading around a house are treated as foundation-health issues, not separate concerns.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimated bearing pressure on soil"
        description="A simplified illustration of the core relationship: dividing a load by the footing area it rests on gives the pressure the soil actually experiences, which engineers compare against the soil's safe bearing capacity."
        fields={[
          { key: "totalLoadLbs", label: "Total load on this footing section (lb)", defaultValue: 20000, step: 500 },
          { key: "footingAreaSqFt", label: "Footing contact area (sq ft)", defaultValue: 10, step: 0.5 },
        ]}
        resultLabel="Estimated bearing pressure (lb per sq ft)"
        formula="foundationBearingPressurePsf"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Have soil conditions professionally assessed before any new foundation work, since bearing capacity varies significantly by soil type and location.",
          "Maintain proper grading and drainage around the entire foundation perimeter to avoid localized soil moisture changes that can cause uneven settling.",
          "Distinguish minor, uniform hairline cracking (often normal) from widening, directional, or stairstep cracking (worth a professional inspection).",
          "If expansive clay soil is present in your area, ask a foundation professional about moisture-management or design measures specific to that soil type.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does a house foundation actually hold up the weight of a house?", answer: "It spreads the house's entire structural load — walls, floors, roof — across a wide footing area at its base, keeping the resulting pressure on the soil below under that soil's safe bearing capacity, rather than relying purely on the concrete's own strength." },
          { question: "What causes most foundation cracks?", answer: "Uneven (differential) settling — one section of the foundation experiencing different soil pressure or moisture conditions than another — is the most common real-world cause, rather than a general weakness in the concrete itself." },
          { question: "Why do some foundations need wider footings than others?", answer: "Footing width is sized based on the soil's bearing capacity at that site — softer or less stable soil needs a wider footing to keep pressure under the safe limit, while dense, stable soil or bedrock can often support the same load with a narrower footing." },
          { question: "Is a small crack in a foundation wall always a serious problem?", answer: "Not necessarily. Minor, uniform hairline cracking from normal initial settling is common and often cosmetic. Widening, directional, or stairstep-pattern cracks concentrated in one area are more concerning and generally warrant a professional inspection." },
          { question: "Does soil type really matter that much for a foundation's long-term performance?", answer: "Yes — soil bearing capacity and moisture behavior (especially with expansive clay) are major factors in foundation performance, which is why soil testing is a standard step before foundation design rather than an optional extra." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
