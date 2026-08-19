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
  title: "Unusual Borders & Enclaves: When Countries Have Countries Inside Them",
  category: "geography-world-facts",
  order: 47,
  subtopic: "geography-curiosities",
  tags: [
    "enclaves",
    "exclaves",
    "Lesotho",
    "Baarle-Hertog",
    "Kaliningrad",
    "political geography",
    "border oddities",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why Lesotho sits entirely inside South Africa, how a Belgian-Dutch town split its border through living rooms, and what actually separates an enclave from an exclave.",
  summary: "An enclave is territory completely surrounded by one other country, while an exclave is territory separated from its parent state by foreign land — and a single piece of land can be both at once.",
  sources: [
    { label: "CIA World Factbook — Lesotho", url: "https://www.cia.gov/the-world-factbook/countries/lesotho/" },
    { label: "Encyclopaedia Britannica — Enclave and Exclave", url: "https://www.britannica.com/topic/enclave-and-exclave" },
    { label: "National Geographic — Political Geography Explainers", url: "https://www.nationalgeographic.com/education/" },
    { label: "CIA World Factbook — Kaliningrad Oblast (Russia)", url: "https://www.cia.gov/the-world-factbook/countries/russia/" },
  ],
  seeAlso: [
    "geography-world-facts/countries-that-no-longer-exist",
    "geography-world-facts/how-country-names-originated",
    "geography-world-facts/continents-and-oceans-overview",
    "geography-world-facts/geography-myths-and-misconceptions",
  ],
  glossary: [
    { term: "Enclave", definition: "A piece of territory that is entirely surrounded by the territory of one other, different state." },
    { term: "Exclave", definition: "A piece of territory that is legally part of a state but physically separated from that state's main territory by foreign land." },
    { term: "Pene-exclave", definition: "A near-exclave that is technically connected to its parent territory by land but is far more practical to reach through a neighboring country, like Point Roberts, Washington." },
    { term: "Counter-enclave", definition: "A small enclave that exists entirely within a larger enclave belonging to a different country, as found in Baarle-Hertog/Baarle-Nassau." },
    { term: "Sovereign enclave", definition: "An entire independent country that happens to be completely surrounded by a single other country, such as Lesotho within South Africa." },
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
          "Lesotho is a fully sovereign country completely surrounded by South Africa — the world's largest example of a country that is entirely an enclave of another country.",
          "'Enclave' and 'exclave' describe different relationships: an enclave is fully surrounded by one neighbor, while an exclave is simply cut off from its parent state's main territory, whether or not it's surrounded by just one country.",
          "The Belgian-Dutch border town of Baarle has enclaves nested inside enclaves — Dutch parcels sit inside Belgian parcels that sit inside the Netherlands, with the border sometimes running directly through the front doors of houses.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Most borders divide two neighboring countries along a continuous line. But sometimes a piece of one country&apos;s territory ends up completely surrounded by another country, or cut off from its own mainland entirely. Lesotho is the clearest example: it&apos;s an independent country whose entire border touches only South Africa — you cannot leave Lesotho by land without entering South Africa. Russia&apos;s Kaliningrad region is a different kind of oddity: it belongs to Russia, but Lithuania and Poland sit between it and the rest of Russia, so reaching it overland means crossing at least one other country.</div>}
        detailed={<div className="prose-p">Geographers distinguish these situations precisely. An <TermLink href="/geography-world-facts/unusual-borders-and-enclaves">enclave</TermLink> is territory entirely enclosed within the borders of a single other state — Lesotho is an enclave of South Africa, and it happens to also be a <TermLink href="/geography-world-facts/unusual-borders-and-enclaves">sovereign enclave</TermLink> because it&apos;s a fully independent country rather than a mere administrative region. An <TermLink href="/geography-world-facts/unusual-borders-and-enclaves">exclave</TermLink> is territory that belongs to a state but is physically detached from that state&apos;s main body by foreign land — Kaliningrad is an exclave of Russia, but it is not an enclave, because it also borders the Baltic Sea rather than being landlocked inside a single neighbor. A territory can be both an enclave and an exclave simultaneously (many of the small parcels in Baarle-Hertog are exclaves of Belgium that are also enclaves within the Netherlands), or it can be one without the other. A looser, informal category — a <TermLink href="/geography-world-facts/unusual-borders-and-enclaves">pene-exclave</TermLink> — describes places like Point Roberts, Washington, which is technically connected to the rest of the United States by land, but only through many miles of Canadian territory, making a direct drive from the rest of Washington state practically impossible without crossing the border twice.</div>}
      />
      <FootnoteAside>The Belgian-Dutch border town of Baarle is so intricately divided that some cafés and homes have their front door on one country&apos;s side and their kitchen on the other&apos;s — historically, this mattered for things like store closing-time laws and tax rates, since each side of a single building could legally follow a different country&apos;s rules.</FootnoteAside>

      <p>
      These aren&apos;t just curiosities on a map — they&apos;re the direct result of centuries of treaties, land swaps, feudal inheritances, and war settlements, each leaving its own geometric fingerprint. A few real cases make the categories click far faster than the definitions alone.
      </p>

      <QuickCheck
        question="Lesotho is a fully independent country whose entire land border touches only South Africa. What is the correct term for this kind of territory?"
        options={[
          { text: "An exclave, because it's separated from its parent country", correct: false, explanation: "Lesotho isn't part of another 'parent' country at all — it's a fully sovereign, independent nation. Exclave describes a piece of a state cut off from that same state's main territory, which doesn't apply here." },
          { text: "A sovereign enclave, because it's an entire independent country completely surrounded by a single other country", correct: true, explanation: "Correct. Lesotho is fully surrounded by South Africa on all sides, and because it's independently sovereign rather than an administrative region of another country, it's classified specifically as a sovereign enclave." },
          { text: "A disputed territory, because South Africa and Lesotho both claim the same land", correct: false, explanation: "There's no territorial dispute here — Lesotho's independence and borders are internationally recognized and uncontested. The distinctive feature is purely its geographic position, fully enclosed within South Africa." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Lesotho, a sovereign country entirely inside another (baseline case)</h3>
      <div className="prose-p">
      Lesotho covers about 30,355 square kilometers of mountainous terrain and is completely enclosed by South Africa — every meter of its border is a border with South Africa, and no other country. It is one of only three countries in the world entirely surrounded by a single other country (the others being San Marino and Vatican City, both enclosed within Italy). Unlike San Marino and Vatican City, which are tiny city-state-scale enclaves, Lesotho is a full-sized nation with its own government, currency (pegged to South Africa&apos;s rand), and economy, making it by far the largest sovereign enclave on Earth by both area and population. This baseline case shows the purest form of the concept: one complete country, one complete surrounding neighbor, no ambiguity.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Baarle-Hertog and Baarle-Nassau&apos;s nested counter-enclaves (edge case / variation)</h3>
      <div className="prose-p">
      The Belgian-Dutch border town cluster of Baarle is one of the most complex border arrangements on Earth: roughly two dozen small parcels of Belgium (Baarle-Hertog) sit scattered as exclaves inside the Netherlands (Baarle-Nassau), a legacy of medieval land and tax agreements between local lords centuries ago. The genuine edge case is that a handful of small Dutch parcels sit inside those Belgian exclaves themselves — <TermLink href="/geography-world-facts/unusual-borders-and-enclaves">counter-enclaves</TermLink>, territory of one country entirely inside an enclave belonging to a different country. Locals have historically marked the border with markers embedded directly in streets and building floors, since the dividing line can run through a single house — meaning which country&apos;s postal service, police jurisdiction, or business hours applied could depend on which room of a building someone was standing in.
      </div>

      <QuickCheck
        question="In Baarle, some tiny parcels of the Netherlands exist entirely inside larger Belgian territory, which is itself surrounded by the Netherlands. What best describes those small Dutch parcels?"
        options={[
          { text: "Counter-enclaves — Dutch territory enclosed entirely within a Belgian enclave, which is itself enclosed within the Netherlands", correct: true, explanation: "Correct. This nested structure — one country's land inside an enclave belonging to a different country — is specifically called a counter-enclave, and Baarle is one of the few places on Earth where it occurs." },
          { text: "A simple border error that has never been officially resolved", correct: false, explanation: "This isn't an unresolved mapping mistake — the boundaries are precisely surveyed, legally settled, and centuries old, tracing back to specific medieval land agreements between local lords." },
          { text: "A shared condominium territory jointly governed by both Belgium and the Netherlands", correct: false, explanation: "Each parcel belongs exclusively to one country's sovereignty, not joint governance — the complexity comes from how many separate, individually-owned parcels are interleaved, not from shared administration of any single parcel." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Kaliningrad, Russia&apos;s isolated Baltic exclave (real-world / applied case)</h3>
      <p>
      Kaliningrad Oblast is a Russian region on the Baltic Sea, wedged between Poland and Lithuania, with no land connection to the rest of Russia — the closest Russian mainland territory lies hundreds of kilometers away. It became isolated in this way after the Soviet Union&apos;s 1991 dissolution turned Lithuania into an independent country, cutting the region off from the rest of Russia by foreign territory for the first time. Because Kaliningrad also has its own coastline on the Baltic Sea, it is an exclave (cut off from Russia&apos;s main territory) but not an enclave (it isn&apos;t fully surrounded by one single country — it has both Poland and Lithuania as land neighbors, plus open sea access). This real-world case shows why exclave status and enclave status are genuinely separate questions, not two words for the same thing.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Enclave vs. exclave vs. counter-enclave, shown as nested territory diagrams"
        type="detail"
        svgSrc="/diagrams/geography-world-facts-unusual-borders-and-enclaves-nested-territories.svg"
        altText="Three side-by-side diagrams. The first shows a small circle labeled Lesotho fully enclosed within a larger shape labeled South Africa, illustrating a pure enclave. The second shows a shape labeled Kaliningrad separated from a larger shape labeled Russia by two other shapes labeled Poland and Lithuania, with Kaliningrad touching open sea, illustrating an exclave that is not an enclave. The third shows a small dot labeled Dutch counter-enclave inside a medium shape labeled Belgian exclave, which is itself inside a large shape labeled Netherlands, illustrating nested counter-enclaves."
      />
      <p>
      The three panels map directly onto the three real cases above: Lesotho shows the simplest form (one boundary, one surrounding country), Kaliningrad shows that being cut off from your parent country doesn&apos;t require being surrounded by just one neighbor, and Baarle shows how many layers of enclosure a single border dispute settlement can eventually produce when negotiated parcel by parcel over centuries rather than drawn as one clean line.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using 'enclave' and 'exclave' as if they're interchangeable synonyms.", fix: "Enclave describes being surrounded by one country; exclave describes being cut off from your own parent country. A territory can be one, both, or (like Kaliningrad) an exclave without being an enclave." },
          { mistake: "Assuming enclaves are always tiny, obscure administrative curiosities.", fix: "Lesotho is a full sovereign nation of about 2 million people entirely enclosed within South Africa — enclave status doesn't require a territory to be small or politically minor." },
          { mistake: "Assuming unusual border shapes always signal an active territorial dispute.", fix: "Most enclaves and exclaves, including Lesotho, Baarle, and historically Kaliningrad's borders, are the settled result of old treaties or state successions, not contested or unresolved boundaries." },
        ]}
      />
      <MisconceptionCallout
        myth="Enclave and exclave are just two words for the same kind of border oddity."
        reality={<p>They describe different relationships to a border. An enclave is territory completely surrounded by a single other country&apos;s territory — the defining feature is being enclosed. An exclave is territory that is legally part of one state but physically separated from that state&apos;s main body by land belonging to one or more other states or bodies — the defining feature is being cut off from home, regardless of how many neighbors surround it. Russia&apos;s Kaliningrad is a clear exclave (separated from the Russian mainland by Lithuania and Poland) but not an enclave (it isn&apos;t enclosed by a single country, since it also has a Baltic Sea coastline and two different land neighbors). Meanwhile, Lesotho is both fully enclosed and, since it&apos;s independently sovereign rather than part of a larger state, not properly called an exclave at all — it has no separate &quot;home territory&quot; to be cut off from.</p>}
      />

      <QuickCheck
        question="Kaliningrad is separated from the rest of Russia by Lithuania and Poland, but it also has its own coastline on the Baltic Sea. Is Kaliningrad an enclave?"
        options={[
          { text: "No — it's an exclave of Russia, but not an enclave, because it isn't completely surrounded by a single other country; it borders two land neighbors plus open sea", correct: true, explanation: "Correct. Enclave status specifically requires being fully enclosed by one surrounding country. Kaliningrad is cut off from Russia's mainland (making it an exclave) but has multiple land borders and sea access, so it doesn't meet the enclave definition." },
          { text: "Yes — any territory separated from its parent country by foreign land automatically counts as an enclave too", correct: false, explanation: "Being cut off from a parent state (exclave status) doesn't automatically make a territory an enclave. Enclave specifically requires full enclosure by one single surrounding country, which Kaliningrad's coastline and two land neighbors rule out." },
          { text: "It's neither an enclave nor an exclave, since it still legally belongs to Russia", correct: false, explanation: "Legal ownership by Russia is exactly why it does qualify as an exclave — being part of Russia while being physically cut off from Russia's main territory is the defining feature of an exclave, regardless of continued legal ownership." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Border sinuosity: how much longer is a real border than a straight line between its endpoints?"
        fields={[
          { key: "actualBorderLengthKm", label: "Actual border length (km)", defaultValue: 909 },
          { key: "straightLineDistanceKm", label: "Straight-line distance between border endpoints (km)", defaultValue: 550 },
        ]}
        resultLabel="Sinuosity ratio (higher = more winding)"
        formula="borderSinuosityRatio"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Find Lesotho on a map and trace its entire border to confirm it never touches any country besides South Africa.",
          "Look up Baarle-Hertog and Baarle-Nassau on a detailed map to see the scattered parcel pattern that gives it its enclave-within-enclave structure.",
          "Next time you read about Kaliningrad in the news, remember it's an exclave of Russia, not an enclave, since it has its own Baltic coastline and two land neighbors.",
          "Read the related entry on Countries That No Longer Exist to see how some enclaves and exclaves trace directly back to state dissolutions and border treaties.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between an enclave and an exclave?", answer: "An enclave is territory completely surrounded by a single other country. An exclave is territory that belongs to a state but is physically separated from that state's main territory by foreign land — it doesn't have to be enclosed by just one neighbor to qualify." },
          { question: "What country is completely surrounded by another country?", answer: "Lesotho is the largest example, completely enclosed within South Africa. San Marino and Vatican City are two smaller examples, both entirely enclosed within Italy — together these are the only three fully sovereign enclave countries in the world." },
          { question: "Is Kaliningrad an enclave or an exclave?", answer: "Kaliningrad is an exclave of Russia — it's cut off from the Russian mainland by Lithuania and Poland — but not an enclave, since it also has its own Baltic Sea coastline and borders two separate countries rather than being enclosed by just one." },
          { question: "Why does the town of Baarle have such a complicated border?", answer: "Baarle's border traces back to medieval land and tax agreements between local lords, which left roughly two dozen scattered Belgian parcels inside the Netherlands, some of which contain small Dutch counter-enclaves of their own — never simplified into a clean line even after Belgium and the Netherlands became separate modern states." },
          { question: "Can a piece of land be both an enclave and an exclave at the same time?", answer: "Yes. Many of the small Belgian parcels in Baarle-Hertog are both — they are exclaves of Belgium (separated from Belgium's main territory) and simultaneously enclaves within the Netherlands (fully surrounded by Dutch territory)." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
