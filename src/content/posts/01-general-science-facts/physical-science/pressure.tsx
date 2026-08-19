import React from 'react';
import { PostMeta, PostFrontmatter } from '@/types/post';
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
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Pressure: Why a Sharp Knife Cuts and a Snowshoe Doesn't Sink",
  category: "general-science-facts",
  order: 10,
  subtopic: "physical-science",
  tags: [
    "pressure",
    "force and area",
    "atmospheric pressure",
    "fluid pressure",
    "physical science",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How the same force spread over different areas explains why knives cut, snowshoes prevent sinking, and altitude affects boiling and breathing.",
  summary: "Pressure is force spread over an area — the same force concentrated on a small area creates far more pressure than spread across a large one.",
  sources: [
    { label: "NIST — Pressure Units and Measurement", url: "https://www.nist.gov/pml" },
    { label: "NOAA — Understanding Air Pressure", url: "https://www.noaa.gov/" },
    { label: "NASA Glenn Research Center — Pressure", url: "https://www1.grc.nasa.gov/" },
  ],
  seeAlso: [
    "general-science-facts/matter-and-states-of-matter",
    "general-science-facts/density-and-buoyancy",
    "general-science-facts/forces-and-motion",
  ],
  glossary: [
    { term: "Pressure", definition: "Force applied per unit area, measured in pascals (Pa) or pounds per square inch (psi) — the same force spread over a smaller area creates higher pressure." },
    { term: "Pascal", definition: "The SI unit of pressure, equal to one newton of force per square meter of area." },
    { term: "Atmospheric pressure", definition: "The pressure exerted by the weight of the air above a given point, roughly 101,325 pascals at sea level." },
    { term: "Fluid pressure", definition: "Pressure exerted by a liquid or gas, which increases with depth in a liquid due to the weight of fluid above." },
    { term: "Vacuum", definition: "A space with little or no matter, and therefore little or no pressure." },
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
          "Pressure is force divided by the area it's spread over — the same force concentrated on a tiny area (a knife edge) creates dramatically more pressure than spread across a large one (the flat side of the blade).",
          "This is why snowshoes, wide tires, and flat feet on soft ground prevent sinking: spreading the same body weight over a larger area lowers pressure below the threshold that would cause sinking.",
          "Air itself has weight, and atmospheric pressure — about 101,325 pascals at sea level — drops with altitude, which is the direct reason water boils at a lower temperature on a mountain.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/general-science-facts/pressure">Pressure</TermLink> is what you get when a force is squeezed into a smaller space. Push on something with your palm flat, and the force spreads out, feeling gentle. Push with the same force through one finger, and it feels far more intense — same force, smaller area, more pressure. A sharp knife cuts easily not because it applies more force than a dull one, but because its thin edge concentrates that force onto a tiny area, creating enough pressure to slice through material a wider blade couldn&apos;t.</div>}
        detailed={<div className="prose-p">Formally, pressure equals force divided by area (P = F/A), measured in <TermLink href="/general-science-facts/pressure">pascals</TermLink> (newtons per square meter). This single relationship explains an enormous range of everyday physical behavior: nails, needles, and knives all work by minimizing contact area to maximize pressure for a given force; snowshoes, skis, and wide tires do the opposite, maximizing contact area to minimize pressure and avoid sinking or damaging soft ground. Fluids add another layer — <TermLink href="/general-science-facts/pressure">fluid pressure</TermLink> increases with depth, because deeper fluid has more fluid weight stacked above it, which is why ears pop diving into a pool and why deep-sea vessels need extremely reinforced hulls.</div>}
      />
      <FootnoteAside>Standard atmospheric pressure at sea level, 101,325 pascals, means roughly 10 tonnes of air presses down on every square meter of your body at all times — you don&apos;t feel it because the pressure inside your body pushes back with equal force in balance.</FootnoteAside>

      <p>
      That balance between force and area is easiest to see with real numbers — the same force behaves completely differently depending on how much area it&apos;s spread across.
      </p>

      <QuickCheck
        question="Pressing a thumbtack into a board takes much less effort than pressing a coin of the same force into the same board. Why?"
        options={[
          { text: "The thumbtack's sharp point concentrates the same force onto a much smaller area, producing far higher pressure at that point", correct: true, explanation: "Correct. Pressure equals force divided by area — the thumbtack's tiny point area means the same push force creates dramatically higher pressure there than the coin's flat, wide contact area." },
          { text: "Thumbtacks are made from a harder metal than coins", correct: false, explanation: "Material hardness isn't the deciding factor in this comparison — it's purely about how the same applied force is distributed across a small point versus a wide flat surface." },
          { text: "The thumbtack applies more total force than the coin", correct: false, explanation: "The question specifies the same force for both — the difference in outcome comes entirely from the difference in contact area, not from more force being applied." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A person standing versus balancing on one heel (baseline case)</h3>
      <div className="prose-p">
      A 700-newton person (about 71 kg) standing with both feet flat, contact area roughly 0.04 m² per foot (0.08 m² total), experiences pressure of 700 ÷ 0.08 = <strong>8,750 pascals</strong> on the ground. Balance on just one heel with a contact area of roughly 0.002 m², and the same 700 newtons of weight now produces 700 ÷ 0.002 = <strong>350,000 pascals</strong> — a 40x increase in pressure from the exact same body weight, purely from shrinking the contact area. This is why standing on one heel in soft ground or on someone&apos;s foot hurts far more than standing flat.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why snowshoes prevent sinking into snow (edge case / variation)</h3>
      <div className="prose-p">
      Snow can typically support a certain maximum pressure — often in the range of a few thousand pascals — before it compresses and gives way underfoot. A hiker&apos;s boot alone, with a contact area around 0.02 m², concentrates their body weight enough to exceed that threshold and sink with every step. A snowshoe roughly 0.25 m² spreads the exact same body weight over more than 10 times the area, dropping pressure below snow&apos;s compression threshold — the person&apos;s weight hasn&apos;t changed at all, only how thinly it&apos;s spread. The identical principle explains wide tractor tires on soft farmland and flat-bottomed camel feet on desert sand.
      </div>

      <QuickCheck
        question="Two hikers weigh the same, but one wears snowshoes and the other wears regular boots on the same soft snow. Why does only the boot-wearer sink?"
        options={[
          { text: "The snowshoes spread the same body weight over a much larger area, keeping pressure below the threshold that causes snow to compress and give way", correct: true, explanation: "Correct. Both hikers apply the same force (their weight) to the snow, but the snowshoe's much larger area produces far lower pressure — low enough to stay under the snow's compression threshold, unlike the boot's smaller, higher-pressure contact." },
          { text: "Snowshoes are lighter than boots, so the wearer weighs less overall", correct: false, explanation: "The small weight difference of the footwear itself isn't the mechanism — the dramatic difference in outcome comes from contact area spreading the same body weight, not from the hiker's total weight changing meaningfully." },
          { text: "Snowshoes are made of a material that repels snow", correct: false, explanation: "No material repulsion is involved — this is purely a force-over-area (pressure) effect, identical to the physics behind wide tires and skis." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How a drinking straw works using atmospheric pressure (real-world / applied case)</h3>
      <div className="prose-p">
      A straw doesn&apos;t &quot;suck&quot; liquid up through some pulling force — it works because <TermLink href="/general-science-facts/pressure">atmospheric pressure</TermLink> pushes the liquid up once you lower the pressure inside the straw. Sipping reduces the air pressure inside the straw below normal atmospheric pressure; outside the straw, the full weight of the atmosphere (about 101,325 pascals at sea level) keeps pushing down on the liquid&apos;s surface in the glass, and that imbalance forces liquid up into the lower-pressure straw to fill the gap. This is also why a straw stops working in a near-vacuum, and why astronauts drink from sealed pouches instead — there&apos;s no meaningful atmospheric pressure in space to push liquid anywhere.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Same force, different area, different pressure"
        type="detail"
        svgSrc="/diagrams/general-science-facts-pressure-force-area.svg"
        altText="Two diagrams comparing the same downward force arrow applied through a wide flat surface versus a narrow pointed surface, with the narrow surface labeled as producing much higher pressure despite the identical force, illustrated with denser pressure lines concentrated under the narrow point."
      />
      <p>
      Both objects in the diagram experience the exact same downward force. The wide surface spreads that force thin, producing low pressure; the narrow point concentrates the identical force into a small area, producing high pressure — this single relationship, P = F/A, is the entire working principle behind knives, needles, nails, snowshoes, skis, and wide vehicle tires.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a sharper knife cuts because it applies more force.", fix: "A sharp blade concentrates the same force onto a much smaller edge area, producing far higher pressure at the cutting edge — force doesn't need to increase for pressure to increase dramatically." },
          { mistake: "Thinking air has no weight and therefore exerts no real pressure.", fix: "Air has real mass and weight — atmospheric pressure at sea level is about 101,325 pascals, equivalent to roughly 10 tonnes of air pressing on each square meter, balanced by pressure from inside objects and bodies." },
          { mistake: "Believing pressure and force are the same thing.", fix: "Force is a push or pull measured in newtons; pressure is that force divided by the area it's spread over, measured in pascals. The same force can produce wildly different pressures depending on area alone." },
        ]}
      />
      <MisconceptionCallout
        myth="A drinking straw works by 'sucking' liquid up through some pulling force."
        reality={<p>No pulling force reaches into the glass. Sipping lowers the air pressure inside the straw; the unchanged, higher atmospheric pressure pushing down on the liquid&apos;s surface outside the straw is what forces liquid upward to fill that lower-pressure region. The same principle explains why you can&apos;t drink through a straw in a vacuum, and why a barometric-style suction cup grips a smooth surface — it&apos;s always atmospheric pressure doing the pushing, from outside, never a pull from inside.</p>}
      />

      <QuickCheck
        question="Why can't a drinking straw work in the vacuum of space, even if you could seal your mouth around one?"
        options={[
          { text: "There is no atmospheric pressure in a vacuum to push the liquid up into the lower-pressure straw", correct: true, explanation: "Correct. Straws work because normal atmospheric pressure pushes liquid up once you lower the pressure inside the straw. With no atmosphere at all, there's no outside pressure to do that pushing." },
          { text: "Liquids don't exist in a vacuum, so there'd be nothing to drink", correct: false, explanation: "Liquids can exist briefly in a vacuum, though they tend to boil off due to low pressure — but the direct reason a straw specifically fails is the absence of atmospheric pressure to push liquid upward." },
          { text: "Sipping motion itself requires air to work mechanically", correct: false, explanation: "The sipping motion (creating lower pressure inside your mouth and the straw) can physically still happen — what's missing is the external atmospheric pressure that normally does the actual pushing." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Pressure (force ÷ area)"
        fields={[
          { key: "forceNewtons", label: "Force (newtons)", defaultValue: 700, step: 10 },
          { key: "areaM2", label: "Contact area (m²)", defaultValue: 0.08, step: 0.001 },
        ]}
        resultLabel="Pressure (pascals)"
        formula="pressureFromForceArea"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Try the calculator above with your own approximate weight and shoe area versus a much smaller area (like a heel) to see the pressure jump.",
          "Next time you use a knife, notice that sharpening it doesn't add force — it shrinks the contact area, raising pressure at the edge.",
          "Watch what happens to a sealed empty water bottle when you drive up a mountain — it puffs out as lower outside atmospheric pressure lets the air inside expand.",
          "Read the related entry on Density & Buoyancy to see how fluid pressure connects to buoyant force underwater.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the formula for pressure?", answer: "Pressure equals force divided by area (P = F/A), measured in pascals (newtons per square meter). The same force spread over a smaller area always produces higher pressure." },
          { question: "Why does a sharp knife cut better than a dull one?", answer: "A sharp edge concentrates the same applied force onto a much smaller contact area, producing far higher pressure at the cutting edge — enough to exceed the material's resistance and slice through it." },
          { question: "How do snowshoes stop you from sinking in snow?", answer: "Snowshoes spread your body weight over a much larger area than a boot alone, lowering the pressure on the snow below the threshold at which it compresses and gives way underfoot." },
          { question: "What is atmospheric pressure?", answer: "The pressure exerted by the weight of air above a given point, about 101,325 pascals at sea level. It decreases with altitude, which is why water boils at a lower temperature on a high mountain." },
          { question: "How does a drinking straw actually work?", answer: "Sipping lowers air pressure inside the straw. Normal atmospheric pressure, still pushing on the liquid's surface outside the straw, then forces liquid up to fill that lower-pressure space — it's a push from outside, not a pull from inside." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
