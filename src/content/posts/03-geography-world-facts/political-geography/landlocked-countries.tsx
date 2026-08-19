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
  title: "Landlocked Countries",
  category: "geography-world-facts",
  order: 11,
  subtopic: "political-geography",
  tags: [
    "landlocked countries",
    "geopolitics",
    "trade and geography",
    "Kazakhstan",
    "political geography",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Around 44 of the world's countries have no coastline at all — a geographic fact that shapes their trade routes, economies, and even, in a few surprising cases, their navies.",
  summary: "A landlocked country is a sovereign state entirely enclosed by land, with no direct access to an ocean coastline, which forces it to depend on neighboring countries' ports and transit routes for maritime trade.",
  sources: [
    { label: "CIA World Factbook — Guide to Country Comparisons: Landlocked", url: "https://www.cia.gov/the-world-factbook/field/landlocked/" },
    { label: "United Nations Conference on Trade and Development — Landlocked Developing Countries", url: "https://unctad.org/topic/landlocked-developing-countries" },
    { label: "International Court of Justice — Case Concerning Obligation to Negotiate Access to the Pacific Ocean (Bolivia v. Chile)", url: "https://www.icj-cij.org/case/153" },
    { label: "Encyclopaedia Britannica — Landlocked State", url: "https://www.britannica.com/topic/landlocked-state" },
  ],
  seeAlso: [
    "geography-world-facts/borders-and-how-theyre-defined",
    "geography-world-facts/worlds-largest-and-smallest-countries",
    "geography-world-facts/territories-dependencies-and-disputed-regions",
    "geography-world-facts/mountains-and-mountain-ranges",
  ],
  glossary: [
    { term: "Landlocked country", definition: "A sovereign state with no coastline on an ocean or a sea with direct ocean access, entirely surrounded by other countries' land territory." },
    { term: "Doubly landlocked country", definition: "A landlocked country that is itself surrounded only by other landlocked countries, requiring goods to cross at least two international borders to reach any coastline." },
    { term: "Transit route", definition: "A route through a neighboring country's territory that a landlocked country depends on to move goods to and from a seaport." },
    { term: "Riverine navy", definition: "A naval force operating on inland rivers or lakes rather than the open ocean, which some landlocked countries maintain despite having no coastline." },
    { term: "Enclosed sea", definition: "A body of water, such as the Caspian Sea, that is surrounded by land and not directly connected to the open ocean, meaning bordering it does not count as having ocean access." },
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
          "Around 44 of the world's roughly 195 countries are landlocked, meaning they have no coastline on an ocean or an ocean-connected sea, according to the CIA World Factbook.",
          "Being landlocked isn't just a geographic curiosity — it forces a country to depend on neighboring countries' ports and transit infrastructure, which the United Nations formally recognizes as a structural trade disadvantage for many landlocked developing countries.",
          "Landlocked countries can still maintain a navy — several do, operating on inland rivers and lakes instead of the open ocean, including Bolivia, which keeps a lake-based navy decades after losing its Pacific coastline.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/geography-world-facts/landlocked-countries">landlocked country</TermLink> is one that doesn&apos;t touch an ocean anywhere along its borders — every neighboring territory is another country&apos;s land. Bolivia, Switzerland, Mongolia, and Chad are all landlocked, for example. This matters more than it might sound: without a coastline, a country can&apos;t build its own seaport, so it has to rely on roads, railways, or rivers running through a neighbor&apos;s territory just to get goods to and from the world&apos;s shipping lanes.</div>}
        detailed={<div className="prose-p">Roughly 44 sovereign states are landlocked according to the CIA World Factbook&apos;s count, spread across every inhabited continent except Australia and Antarctica. A small subset are <TermLink href="/geography-world-facts/landlocked-countries">doubly landlocked</TermLink> — landlocked countries entirely surrounded by other landlocked countries, meaning goods must cross at least two international borders before reaching any coast. Only two countries in the world fit this description: Liechtenstein, wedged between landlocked Switzerland and Austria, and Uzbekistan, surrounded by Kazakhstan, Turkmenistan, Tajikistan, Kyrgyzstan, and Afghanistan — all of which are themselves landlocked. Bordering a body of water doesn&apos;t automatically remove landlocked status either: several countries border the <TermLink href="/geography-world-facts/landlocked-countries">Caspian Sea</TermLink> (Kazakhstan, Turkmenistan, Azerbaijan) or the Aral Sea, but because these are <TermLink href="/geography-world-facts/landlocked-countries">enclosed seas</TermLink> with no natural outlet to the open ocean, those countries are still classified as landlocked for trade purposes. The United Nations Conference on Trade and Development (UNCTAD) formally tracks &quot;landlocked developing countries&quot; as a distinct policy category, since dependence on a neighbor&apos;s <TermLink href="/geography-world-facts/landlocked-countries">transit routes</TermLink> — subject to that neighbor&apos;s infrastructure, fees, border efficiency, and political relations — is a well-documented structural drag on trade costs and economic growth.</div>}
      />
      <FootnoteAside>Kazakhstan is the world&apos;s largest landlocked country by land area — at roughly 2.72 million square kilometers, it&apos;s larger than all of Western Europe combined, and it still borders the Caspian Sea, but because the Caspian has no natural connection to the open ocean, Kazakhstan gains no direct maritime trade access from it.</FootnoteAside>

      <p>
      The economic disadvantage of being landlocked is well documented — but the most commonly misunderstood part of this topic is what a landlocked country can and can&apos;t do about its lack of a coastline, which is exactly where the next example goes.
      </p>

      <QuickCheck
        question="Kazakhstan borders the Caspian Sea along a long stretch of its territory. Does this give Kazakhstan direct access to global ocean shipping routes?"
        options={[
          { text: "Yes, any coastline on a sea automatically counts as ocean access", correct: false, explanation: "Not for the Caspian Sea specifically — it's an enclosed body of water with no natural channel connecting it to any ocean, so bordering it doesn't provide the same trade access a true ocean coastline would." },
          { text: "No — the Caspian Sea is an enclosed sea with no natural connection to the open ocean, so Kazakhstan is still classified as landlocked for trade purposes", correct: true, explanation: "Correct. Despite its long Caspian coastline, Kazakhstan cannot ship goods directly to the open ocean from it, which is exactly why it's still counted among the world's landlocked countries." },
          { text: "No, because Kazakhstan has no coastline of any kind, on any body of water", correct: false, explanation: "Kazakhstan does have a substantial coastline on the Caspian Sea — the issue isn't the absence of any coastline, it's that the Caspian doesn't connect to the open ocean." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Switzerland&apos;s transit dependence (baseline case)</h3>
      <div className="prose-p">
      Switzerland, one of the world&apos;s wealthiest landlocked countries, moves the large majority of its seaborne trade through the port of Rotterdam in the Netherlands, reaching it via the Rhine River and connecting rail and road networks that cross through Germany and France. This isn&apos;t a special arrangement unique to Switzerland — it&apos;s the standard pattern for landlocked countries generally: goods travel by rail, road, or river through one or more neighboring countries before ever reaching a seaport. Switzerland&apos;s case works comparatively smoothly because of stable, well-developed neighboring infrastructure and long-standing trade agreements — a baseline example of the arrangement working close to as well as it can.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Bolivia&apos;s lost coastline and its navy (edge case / variation)</h3>
      <div className="prose-p">
      Bolivia had a Pacific coastline until the War of the Pacific (1879–1884), after which Chile gained the disputed territory, leaving Bolivia landlocked. Bolivia has continued to press the issue diplomatically for decades; in 2018 the International Court of Justice ruled that while Chile had at times engaged in talks about sea access, it held no binding legal obligation to negotiate Bolivian sovereign access to the coast. Despite having no coastline since the 1880s, Bolivia still maintains a navy — the Bolivian Naval Force — operating on Lake Titicaca and the country&apos;s river systems, and it marks a national holiday, Día del Mar (Day of the Sea), each March 23rd. This is a genuine edge case showing that losing a coastline doesn&apos;t necessarily end a country&apos;s naval tradition or its ongoing diplomatic pursuit of the sea access it once had.
      </div>

      <QuickCheck
        question="Bolivia has had no ocean coastline since the 1880s, yet it still maintains an active navy. How is that possible?"
        options={[
          { text: "Bolivia secretly retains a small coastal territory not shown on most maps", correct: false, explanation: "Bolivia has no ocean coastline at all today — this isn't a mapping gap, it's a fully landlocked country by any standard measure since losing its Pacific coast to Chile in the 1880s." },
          { text: "A country's navy must legally be disbanded once it loses its coastline", correct: false, explanation: "There's no such requirement — nothing in international law forces a landlocked country to disband its navy, and several, including Bolivia, choose not to." },
          { text: "Bolivia's navy operates on inland waters — Lake Titicaca and its river systems — rather than the ocean, which landlocked countries are free to do", correct: true, explanation: "Correct. Nothing prevents a landlocked country from maintaining a riverine or lake-based navy; Bolivia's continues to operate on Lake Titicaca and inland rivers, and functions partly as a symbol of its ongoing claim to sea access." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why landlocked status is a tracked development category (real-world / applied case)</h3>
      <div className="prose-p">
      UNCTAD and the UN&apos;s broader development framework formally classify a subset of landlocked countries as &quot;landlocked developing countries&quot; (LLDCs), a category currently covering 32 countries, because the added cost and unpredictability of relying on a neighbor&apos;s transit infrastructure is a measurable, structural drag on trade competitiveness — extra border crossings, transit fees, customs delays, and dependence on a neighbor&apos;s road and rail investment all raise the effective cost of every import and export. This is why international development programs specifically target LLDCs with transit-corridor infrastructure investment and simplified cross-border customs agreements — it&apos;s treated as a distinct, well-defined policy problem, not simply an unlucky quirk of geography.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How a landlocked country's goods reach the sea"
        type="detail"
        svgSrc="/diagrams/geography-world-facts-landlocked-countries-transit-routes.svg"
        altText="A simplified map showing a landlocked country in the center with no coastline, connected by a highlighted road-and-rail transit corridor running through a neighboring country's territory to a labeled seaport on the coast, illustrating the extra border crossing and dependence on foreign infrastructure that landlocked trade requires compared to a direct coastal shipment."
      />
      <p>
      The diagram traces the physical path a landlocked country&apos;s export has to travel: from origin, across at least one additional international border, through a neighbor&apos;s road, rail, or river network, to a seaport that isn&apos;t under the exporting country&apos;s own control. Every one of those extra steps is a point where cost, delay, or political friction with the transit country can be added — which is the concrete, physical reason landlocked status shows up as a measurable economic disadvantage rather than just a line on a map.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a country bordering any body of water automatically isn't landlocked.", fix: "Bordering an enclosed sea with no outlet to the open ocean, like the Caspian Sea, doesn't count — Kazakhstan, Turkmenistan, and Azerbaijan all border the Caspian and are still classified as landlocked." },
          { mistake: "Assuming landlocked countries can't have any kind of navy.", fix: "Landlocked countries can and do maintain navies on inland lakes and rivers — Bolivia (Lake Titicaca), Paraguay, and Switzerland (on the Rhine, for logistics) are documented examples." },
          { mistake: "Treating 'landlocked' as a minor geographic footnote rather than a real economic factor.", fix: "UNCTAD and the UN formally track landlocked developing countries as a distinct policy category precisely because dependence on a neighbor's ports and transit infrastructure is a measurable, structural trade cost, not just trivia." },
        ]}
      />
      <MisconceptionCallout
        myth="Landlocked countries can't have a navy since they have no coastline."
        reality={<p>Nothing about being landlocked prevents a country from maintaining a navy — it simply means that navy operates on inland waters rather than the open ocean. Bolivia maintains a navy that patrols Lake Titicaca and Bolivian river systems despite losing its Pacific coastline in the 1880s, partly as an active symbol of its long-running diplomatic pursuit of sea access. Paraguay and Switzerland similarly maintain small riverine forces. The presence or absence of a coastline determines where a country&apos;s navy can operate, not whether it&apos;s allowed to have one at all.</p>}
      />

      <QuickCheck
        question="Which statement most accurately reflects the relationship between being landlocked and having a navy?"
        options={[
          { text: "Landlocked countries are legally barred from maintaining any armed naval force", correct: false, explanation: "There is no such legal bar. Multiple landlocked countries, including Bolivia and Paraguay, actively maintain naval forces operating on inland lakes and rivers." },
          { text: "A landlocked country can maintain a navy, just limited to operating on its inland lakes and rivers rather than the open ocean", correct: true, explanation: "Correct. Coastline access determines where a navy can operate, not whether a country is permitted to have one — Bolivia's Lake Titicaca-based navy is a well-documented real example." },
          { text: "Only landlocked countries that used to have a coastline are allowed to keep a navy", correct: false, explanation: "This isn't an actual rule — landlocked countries with no history of ever having a coastline, like Switzerland, also maintain small inland naval or river patrol forces." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Find Liechtenstein and Uzbekistan on a map and trace the two national borders each would have to cross to reach any coastline — the only two 'doubly landlocked' countries in the world.",
          "Next time you see a country bordering the Caspian Sea described as having 'coastal access,' check whether that access actually connects to the open ocean before assuming it does.",
          "Look up which seaport your own country's landlocked trading partners (if any) rely on for shipping — it's often a specific, well-documented transit corridor.",
          "Read the entry on Borders & How They're Defined to see how the shape of a country's borders, not just its size, determines whether it ends up landlocked.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How many landlocked countries are there in the world?", answer: "Around 44 sovereign countries are landlocked, according to the CIA World Factbook — meaning they have no coastline on an ocean or an ocean-connected sea." },
          { question: "What is the largest landlocked country?", answer: "Kazakhstan is the largest landlocked country by land area, at roughly 2.72 million square kilometers. It does border the Caspian Sea, but because the Caspian has no natural outlet to the open ocean, Kazakhstan is still classified as landlocked." },
          { question: "Can a landlocked country have a navy?", answer: "Yes. Landlocked countries can maintain naval forces on inland lakes and rivers — Bolivia operates a navy on Lake Titicaca, and Paraguay and Switzerland maintain smaller river-based forces, despite none of the three having ocean coastlines." },
          { question: "What are 'doubly landlocked' countries?", answer: "A doubly landlocked country is landlocked and also surrounded entirely by other landlocked countries, meaning goods must cross at least two borders to reach a coast. Only two countries fit this: Liechtenstein and Uzbekistan." },
          { question: "Why is being landlocked considered an economic disadvantage?", answer: "Landlocked countries depend on a neighboring country's ports, roads, railways, and customs processes to move goods to and from the ocean, adding extra costs, delays, and political dependency that coastal countries don't face — which is why the UN formally tracks 'landlocked developing countries' as a distinct trade-policy category." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
