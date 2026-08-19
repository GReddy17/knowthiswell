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
  title: "European Age of Exploration",
  category: "history-timeline-facts",
  order: 15,
  subtopic: "age-of-exploration-and-empires",
  tags: ["age of exploration", "columbus", "vasco da gama", "magellan", "navigation history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Portuguese and Spanish sailors mapped sea routes to Asia and the Americas from the 1420s to the 1520s, reshaping global trade, contact, and conflict for centuries afterward.",
  summary: "The European Age of Exploration was a period from roughly the 1420s to the 1520s in which Portuguese and Spanish sailors, driven by the search for direct sea routes to Asian trade goods, mapped ocean routes around Africa and across the Atlantic and Pacific, opening sustained contact between Europe and the Americas.",
  sources: [
    { label: "Encyclopaedia Britannica — Age of Discovery", url: "https://www.britannica.com/topic/Age-of-Discovery" },
    { label: "UNESCO World Heritage — L'Anse aux Meadows National Historic Site", url: "https://whc.unesco.org/en/list/4" },
    { label: "Library of Congress — Exploring the Early Americas", url: "https://www.loc.gov/collections/exploring-the-early-americas/about-this-collection/" },
    { label: "Royal Museums Greenwich — Ferdinand Magellan and the First Circumnavigation", url: "https://www.rmg.co.uk/stories/topics/ferdinand-magellan-first-circumnavigation" },
  ],
  seeAlso: [
    "history-timeline-facts/colonialism-overview-factual-neutral",
    "history-timeline-facts/the-ottoman-empire",
    "history-timeline-facts/ancient-greece",
    "geography-world-facts/major-trade-routes-historical-and-modern",
  ],
  glossary: [
    { term: "Caravel", definition: "A small, highly maneuverable Portuguese sailing ship with triangular lateen sails, developed in the 15th century and central to early Atlantic exploration voyages." },
    { term: "Astrolabe", definition: "A navigational instrument used to measure the angle of the sun or stars above the horizon, helping sailors estimate their latitude at sea." },
    { term: "Circumnavigation", definition: "A voyage that travels all the way around the globe, returning to its starting point." },
    { term: "Columbian Exchange", definition: "The widespread transfer of plants, animals, diseases, and people between the Americas, Europe, and Africa that began after 1492, named by historian Alfred W. Crosby." },
    { term: "Treaty of Tordesillas", definition: "An agreement signed in 1494 in which Spain and Portugal, with papal involvement, divided newly claimed lands outside Europe along a meridian line." },
  ],
  author: {
    slug: "sara-reed-m-j",
    name: "Sara Reed M J",
    credentialLine: "Contributing Editor, KnowThisWell",
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
          "European exploration was driven mainly by a search for direct sea access to Asian spices and goods, bypassing land routes that passed through Ottoman- and Italian-controlled middlemen.",
          "Portugal pioneered the African route to Asia (reaching India by sea in 1498), while Spain funded Columbus's 1492 westward voyage that instead reached the Americas — two different routes to the same goal.",
          "Magellan's expedition (1519–1522) completed the first circumnavigation of the globe, though Magellan himself died partway through and never completed the voyage.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/history-timeline-facts/european-age-of-exploration">Age of Exploration</TermLink> refers to a roughly hundred-year stretch, from the 1420s to the 1520s, when Portuguese and Spanish sailors pushed further into open ocean than Europeans had gone before. Portugal worked its way down the West African coast in stages, looking for a sea route around Africa to Asia&apos;s spice markets. Spain took a different bet: sail west across the Atlantic instead, on the assumption the Earth was small enough that Asia lay within reach. That bet, funded for Christopher Columbus in 1492, didn&apos;t reach Asia — it reached the Caribbean, an outcome nobody involved had planned for.</div>}
        detailed={<div className="prose-p">The push had a specific economic driver: Constantinople&apos;s fall to the Ottoman Empire in 1453 (and Ottoman control of key overland and Red Sea trade routes more broadly) made the existing land-and-Venetian-controlled route for Asian spices, silk, and other goods more expensive and less reliable for other European powers to access. Portugal, under the sponsorship of Prince Henry the Navigator starting in the 1420s, systematically mapped the West African coastline in stages, improving ship design (the <TermLink href="/history-timeline-facts/european-age-of-exploration">caravel</TermLink>) and navigational tools (the <TermLink href="/history-timeline-facts/european-age-of-exploration">astrolabe</TermLink>, the magnetic compass, and the quadrant) along the way. Bartolomeu Dias rounded the Cape of Good Hope in 1488, and Vasco da Gama completed the full sea route to India in 1498 — proving a workable, if long, alternative to overland trade. Spain&apos;s westward gamble under Columbus produced an unplanned outcome: contact with a landmass unknown to Europeans, which triggered a scramble over who could claim it, formalized in the 1494 Treaty of Tordesillas dividing future claims between Spain and Portugal along a meridian line. Ferdinand Magellan&apos;s 1519 expedition, sailing for Spain, set out to reach Asia by going around the tip of South America; Magellan was killed in the Philippines in 1521, but his second-in-command, Juan Sebastián Elcano, brought one surviving ship home in 1522, completing history&apos;s first circumnavigation and settling the question of the globe&apos;s true, much larger size.</div>}
      />
      <FootnoteAside>Norse sailors reached North America roughly 500 years before Columbus — the archaeological site at L&apos;Anse aux Meadows in Newfoundland, Canada, a UNESCO World Heritage Site, confirms a short-lived Norse settlement dated to around 1000 CE. It didn&apos;t lead to sustained European contact with the Americas the way the 1492 voyage eventually did, which is why 1492 is usually treated as the historical turning point rather than the first European arrival.</FootnoteAside>
      <p>
      Knowing why these voyages happened — competition for a faster, cheaper route to Asian trade goods — makes it easier to place each specific voyage on the same timeline rather than as isolated, disconnected events.
      </p>

      <QuickCheck
        question="What was the main economic motivation behind the Portuguese and Spanish voyages of the Age of Exploration?"
        options={[
          { text: "A general spirit of adventure and curiosity about the unknown, without any specific trade goal", correct: false, explanation: "Curiosity played a role, but the funding and planning behind these voyages was driven by a concrete economic goal: cheaper, more direct access to Asian trade goods." },
          { text: "Finding a direct sea route to Asian spices and goods that bypassed expensive overland middlemen", correct: true, explanation: "Correct. Both Portugal's African route and Spain's westward gamble were funded specifically to secure direct access to Asian trade, avoiding the costs of existing overland and Mediterranean-controlled routes." },
          { text: "Escaping religious persecution in Western Europe", correct: false, explanation: "Religious motivations existed for some later colonization efforts, but the initial Portuguese and Spanish voyages of exploration were primarily state-and-crown-funded commercial ventures aimed at trade routes." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Vasco da Gama&apos;s sea route to India (baseline case)</h3>
      <div className="prose-p">
      Portugal&apos;s decades-long, incremental mapping of the West African coast — begun under Prince Henry the Navigator in the 1420s — culminated in 1498, when Vasco da Gama&apos;s expedition rounded Africa and reached Calicut, India, by sea. This was the payoff of the original goal: a direct maritime route to Asian spice markets that didn&apos;t depend on land routes through Ottoman- or Venetian-controlled territory. It established Portugal, briefly, as the dominant European power in the Indian Ocean spice trade.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Columbus&apos;s 1492 voyage — the same goal, an unplanned outcome (variation / exception)</h3>
      <div className="prose-p">
      Christopher Columbus, sailing for the Spanish crown, set out in 1492 with the same underlying goal as da Gama — reaching Asia&apos;s trade goods — but via a westward Atlantic crossing instead of the African route. Columbus severely underestimated the Earth&apos;s circumference, believing Asia lay a few thousand miles west of Europe. He reached the Caribbean instead, and died in 1506 still believing he had reached the outskirts of Asia. The &quot;exception&quot; here is instructive: this wasn&apos;t a voyage aimed at finding a new continent — it was a miscalculated voyage to a known destination that happened to run into an unknown one first.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Global shipping lanes today (real-world / applied case)</h3>
      <div className="prose-p">
      Many major modern container shipping routes still roughly trace the ocean paths first systematically charted during this period — around the Cape of Good Hope, across the Atlantic, and through the strait Magellan&apos;s expedition first navigated at the southern tip of South America (a route later partly superseded by the Panama Canal, opened in 1914). The instruments this era relied on, like the astrolabe, were direct ancestors of the sextant and, eventually, satellite-based GPS navigation used at sea today.
      </div>

      <QuickCheck
        question="Why did Ferdinand Magellan's expedition NOT technically complete the first circumnavigation of the globe under his own command?"
        options={[
          { text: "Magellan was killed in the Philippines in 1521, and only one ship under Juan Sebastián Elcano completed the return voyage in 1522", correct: true, explanation: "Correct. Magellan died partway through the voyage; his second-in-command, Elcano, brought the surviving ship the rest of the way around the globe and back to Spain." },
          { text: "Magellan's expedition never actually left the Atlantic Ocean", correct: false, explanation: "The expedition did cross into the Pacific, sailing around the southern tip of South America through what's now called the Strait of Magellan." },
          { text: "Magellan completed the voyage successfully and returned home in triumph", correct: false, explanation: "Magellan did not survive the voyage — he was killed in a conflict in the Philippines in 1521, before the fleet completed the circumnavigation." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Major exploration voyages, 1420s–1520s"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-european-age-of-exploration-voyage-timeline.svg"
        altText="Timeline and route map showing Portuguese voyages down the West African coast beginning in the 1420s, Bartolomeu Dias rounding the Cape of Good Hope in 1488, Vasco da Gama reaching India by sea in 1498, Columbus's westward Atlantic voyage reaching the Caribbean in 1492, and Magellan's expedition circumnavigating the globe between 1519 and 1522."
      />
      <p>
      Laid out on a single map, the routes make the era&apos;s underlying logic visible: Portugal went south and east around Africa, Spain went west across the Atlantic, and by 1522 the two approaches had effectively met — proving both that the Earth was a single connected globe and that it was far larger than Columbus had assumed.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating Columbus's 1492 voyage as the first time any European reached the Americas.", fix: "Norse sailors reached Newfoundland around 1000 CE, confirmed by archaeology at L'Anse aux Meadows. Columbus's voyage matters because it triggered sustained European contact and colonization, not because it was literally first." },
          { mistake: "Assuming Portugal and Spain's voyages were separate, unrelated stories.", fix: "Both were competing attempts at the same goal — direct sea access to Asian trade — pursued in opposite directions around the globe, and they were shaped by the same instruments, ship designs, and economic pressures." },
          { mistake: "Thinking Magellan personally sailed all the way around the world.", fix: "Magellan died in the Philippines in 1521; his second-in-command, Juan Sebastián Elcano, completed the voyage with the one surviving ship in 1522." },
        ]}
      />
      <MisconceptionCallout
        myth="Columbus's voyage proved to skeptical Europeans that the Earth was round."
        reality={<p>Educated Europeans already accepted a spherical Earth well before 1492 — ancient Greek astronomers, including Eratosthenes around 240 BCE, had already calculated the Earth&apos;s circumference reasonably accurately, and this understanding was standard among medieval scholars, navigators, and mapmakers. The actual disagreement in Columbus&apos;s case was about <em>distance</em>, not shape: Columbus badly underestimated how far it was to sail west to reach Asia, and the scholars who doubted his plan were largely correct that the true distance made the voyage impractical — they just hadn&apos;t accounted for an unknown continent being in the way.</p>}
      />

      <QuickCheck
        question="What did informed Europeans in Columbus's era actually believe about the shape of the Earth?"
        options={[
          { text: "Most educated people believed the Earth was flat, and Columbus proved otherwise", correct: false, explanation: "This is a popular misconception. Educated Europeans, following ancient Greek astronomy, had accepted a spherical Earth for well over a thousand years before Columbus sailed." },
          { text: "Educated Europeans already accepted a spherical Earth; the real dispute was over the sailing distance to Asia", correct: true, explanation: "Correct. Scholars who doubted Columbus's plan were largely skeptical of his (incorrect) distance estimate, not the Earth's shape." },
          { text: "There was no consensus at all — belief in a flat or round Earth was split evenly", correct: false, explanation: "There wasn't meaningful debate among educated Europeans about the Earth's shape by the 1490s — the spherical model was the accepted scholarly consensus." },
        ]}
      />

      <EntryCalculator
        title="Years since Vasco da Gama's 1498 voyage reached India"
        fields={[
          { key: "year", label: "Historical event year", defaultValue: 1498 },
        ]}
        resultLabel="Years elapsed"
        formula="yearsSinceYear"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time Columbus comes up, mentally separate the myth (proving the Earth was round) from the actual historical dispute (the sailing distance to Asia).",
          "When you see a world map, trace the Portuguese route around Africa versus the Spanish route across the Atlantic — they were competing answers to the same trade problem.",
          "Notice how often 'discovery' language obscures that these were often lands already inhabited or, in the Norse case, already briefly visited by other Europeans centuries earlier.",
          "Look up L'Anse aux Meadows next time Viking history comes up — it's a rare case of archaeology directly confirming a pre-Columbian European voyage to North America.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What caused the Age of Exploration?", answer: "Mainly the search for a direct, affordable sea route to Asian trade goods like spices and silk, after overland and Mediterranean routes became more costly and less reliable for other European powers to use, particularly following Constantinople's fall to the Ottoman Empire in 1453." },
          { question: "Did Columbus discover America?", answer: "Columbus's 1492 voyage was not the first time Europeans reached the Americas — Norse sailors reached Newfoundland around 1000 CE — but it triggered the first sustained European contact, colonization, and exchange between the hemispheres, which is why it's treated as the historical turning point." },
          { question: "Who was the first person to sail around the world?", answer: "No single person completed the entire voyage. Ferdinand Magellan led the 1519 expedition but died in the Philippines in 1521; his second-in-command, Juan Sebastián Elcano, completed the circumnavigation with the one surviving ship in 1522." },
          { question: "What is the Columbian Exchange?", answer: "The large-scale transfer of plants, animals, diseases, and people between the Americas, Europe, and Africa that began after 1492 — it introduced crops like potatoes and corn to Europe and horses and wheat to the Americas, while also spreading diseases that devastated Indigenous American populations." },
          { question: "Why did Portugal and Spain divide the world between them?", answer: "The 1494 Treaty of Tordesillas, negotiated with papal involvement, drew a meridian line dividing future claims to non-European lands between the two Catholic Iberian powers, reflecting their status as the era's leading maritime states." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
