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
  title: "Countries & Capitals Overview",
  category: "geography-world-facts",
  order: 8,
  subtopic: "political-geography",
  tags: [
    "countries and capitals",
    "political geography",
    "sovereign states",
    "UN member states",
    "world geography",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How many countries exist, why the number depends on who's counting, and why a country's capital isn't always its biggest or best-known city.",
  summary: "The world is conventionally divided into 195 countries — 193 United Nations member states plus 2 UN observer states — each with a capital city that serves as its seat of government, though that capital is often not the country's largest or most famous city.",
  sources: [
    { label: "CIA World Factbook — Countries", url: "https://www.cia.gov/the-world-factbook/countries/" },
    { label: "United Nations — Member States", url: "https://www.un.org/en/about-us/member-states" },
    { label: "U.S. Department of State — Independent States in the World", url: "https://www.state.gov/independent-states-in-the-world/" },
    { label: "Encyclopaedia Britannica — Country", url: "https://www.britannica.com/topic/country" },
  ],
  seeAlso: [
    "geography-world-facts/borders-and-how-theyre-defined",
    "geography-world-facts/worlds-largest-and-smallest-countries",
    "geography-world-facts/united-nations-and-global-political-bodies-basic-overview",
    "geography-world-facts/continents-and-oceans-overview",
  ],
  glossary: [
    { term: "Sovereign state", definition: "A political entity with a permanent population, defined territory, functioning government, and the capacity to enter relations with other states — the formal definition of a 'country.'" },
    { term: "Capital city", definition: "The city officially designated as the seat of a country's government, where its central governing institutions are usually located." },
    { term: "UN member state", definition: "A sovereign country that has been admitted to full membership in the United Nations by a vote of the General Assembly on the Security Council's recommendation." },
    { term: "UN observer state", definition: "A state recognized enough to participate in UN proceedings without full voting membership; currently the Holy See and the State of Palestine hold this status." },
    { term: "Seat of government", definition: "The city where a country's primary governing institutions physically operate, which is not always the same city as its constitutional or ceremonial capital." },
    { term: "Primate city", definition: "A country's largest city, which in many countries is also the capital, but in a significant number of countries is a different city entirely." },
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
          "There are 195 countries by the most common count: 193 United Nations member states plus 2 UN observer states (the Holy See and the State of Palestine) — but the exact number shifts depending on which disputed or partially recognized territories you count.",
          "A capital city is simply wherever a country's government sits by law or tradition — it does not have to be the largest, richest, or most internationally famous city in that country.",
          "Some countries split capital functions across multiple cities (South Africa has three), and some governments physically operate from a city that isn't the constitutional capital at all (Netherlands, Bolivia).",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/geography-world-facts/countries-and-capitals-overview">country</TermLink> is an independent nation with its own government and defined borders, and its <TermLink href="/geography-world-facts/countries-and-capitals-overview">capital city</TermLink> is the official home base of that government — where the president, parliament, or equivalent institutions are based. Most people learn a tidy list of &quot;195 countries,&quot; each with one capital. In practice, most of that holds up: nearly every country does have a single, uncontested capital. But both halves of that sentence have real exceptions worth knowing, which is exactly why this topic keeps showing up in trivia and geography quizzes.</div>}
        detailed={<div className="prose-p">The number &quot;195&quot; comes from adding the United Nations&apos; 193 <TermLink href="/geography-world-facts/countries-and-capitals-overview">member states</TermLink> to its 2 <TermLink href="/geography-world-facts/countries-and-capitals-overview">observer states</TermLink>, the Holy See (Vatican City) and the State of Palestine — both participate in UN proceedings without a General Assembly vote. This is a convention, not a law of nature: Taiwan governs itself with its own military, currency, and elected government but is not a UN member because the UN General Assembly transferred China&apos;s seat to the People&apos;s Republic of China in 1971, and most UN member states now maintain formal diplomatic relations with Beijing rather than Taipei under a &quot;One China&quot; framework. Kosovo is recognized by roughly 100 UN member states but not by others, including Russia, China, and Spain (see the entry on <TermLink href="/geography-world-facts/territories-dependencies-and-disputed-regions">territories, dependencies, and disputed regions</TermLink> for how sources handle cases like these). On the capital side, a country&apos;s <TermLink href="/geography-world-facts/countries-and-capitals-overview">seat of government</TermLink> and its constitutional capital can differ: the Netherlands&apos; constitution names Amsterdam as capital, but the government, parliament, and royal residence all operate from The Hague. South Africa splits the role three ways — Pretoria (administrative/executive), Cape Town (legislative), and Bloemfontein (judicial) — a compromise dating to the country&apos;s 1910 unification of previously separate colonies.</div>}
      />
      <FootnoteAside>Bolivia has two capitals for a similar historical reason: Sucre is the constitutional capital and seat of the judiciary, but La Paz has held the executive and legislative branches since a 1899 civil war shifted political power there — making La Paz, at roughly 3,640 meters (11,942 feet) above sea level, the highest seat of government in the world.</FootnoteAside>

      <p>
      Knowing that exceptions exist is one thing — being able to spot the pattern behind them is more useful, so the next step is testing that against a case almost everyone gets wrong on the first try.
      </p>

      <QuickCheck
        question="Which of these is true about the relationship between a country's capital city and its largest city?"
        options={[
          { text: "A country's capital is always its largest and most populous city", correct: false, explanation: "This is a common assumption but it's false for many countries — the United States, Australia, Brazil, Canada, and Nigeria are all well-known examples where the capital is not the largest city." },
          { text: "A capital is whatever city a country's government designates as its seat, and it is frequently not the largest city", correct: true, explanation: "Correct. Capital status is a legal and administrative designation, not a population ranking — many countries deliberately chose a smaller, more centrally located, or more politically neutral city as capital." },
          { text: "Only small countries have capitals that aren't their largest city", correct: false, explanation: "Country size doesn't predict this — Brazil and Canada are both huge by area and both have capitals (Brasília, Ottawa) that are far smaller than their largest cities (São Paulo, Toronto)." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Counting to 195 (baseline case)</h3>
      <div className="prose-p">
      Start with the UN&apos;s 193 member states — every one of them recognized by essentially the entire international community and holding a vote in the General Assembly. Add the Holy See (governing seat of the Vatican) and the State of Palestine, both granted &quot;permanent observer state&quot; status by the General Assembly, and the commonly cited total reaches <strong>195</strong>. This is the figure used by the U.S. Department of State&apos;s &quot;Independent States in the World&quot; list and matches what most atlases and geography curricula teach. It deliberately excludes territories, dependencies, and states that are recognized by only some countries — those get their own separate accounting, covered in the entry on disputed regions.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: When the capital isn&apos;t the biggest city (edge case / variation)</h3>
      <div className="prose-p">
      In the United States, Washington, D.C. is the capital, but New York City has roughly 15 times its population. The same pattern repeats worldwide: Australia&apos;s capital is Canberra, not Sydney or Melbourne — Canberra was purpose-built in the early 20th century specifically as a compromise capital between the two rival cities. Brazil moved its capital from Rio de Janeiro to the newly constructed Brasília in 1960, partly to draw development toward the country&apos;s interior. Turkey&apos;s capital is Ankara, not the far larger and more famous Istanbul. In each case, the choice reflects a deliberate decision — political neutrality, geographic centrality, or a push to develop an underdeveloped region — rather than simply naming whichever city already had the most people.
      </div>

      <QuickCheck
        question="Brazil moved its capital from Rio de Janeiro to Brasília in 1960. What was a major reason for building an entirely new capital city rather than keeping Rio?"
        options={[
          { text: "Rio de Janeiro was destroyed and needed to be abandoned", correct: false, explanation: "Rio de Janeiro was never destroyed — it remains one of Brazil's largest cities and a major economic and cultural center today." },
          { text: "The government wanted to draw political focus and development toward Brazil's underdeveloped interior, away from the coast", correct: true, explanation: "Correct. Brasília was purpose-built inland specifically to shift the country's center of political gravity and encourage development beyond the densely populated coastal strip." },
          { text: "Rio de Janeiro had never been the capital of Brazil", correct: false, explanation: "Rio de Janeiro was in fact Brazil's capital for nearly two centuries (1763–1960) before Brasília took over the role." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Reading a real capitals list correctly (real-world / applied case)</h3>
      <div className="prose-p">
      When cross-checking a &quot;country and capital&quot; list against an atlas or the CIA World Factbook, three details commonly trip people up: (1) some countries list more than one capital, so a single-answer quiz format may need to accept either (South Africa, Bolivia, Sri Lanka — whose official capital is Sri Jayawardenepura Kotte even though Colombo functions as the de facto commercial capital); (2) territories and dependencies (Puerto Rico, Greenland, Hong Kong) have administrative capitals but are not themselves sovereign countries, so they shouldn&apos;t be counted among the 195; and (3) political changes do occur — Egypt has been constructing a new administrative capital east of Cairo since 2015, intended to eventually house key government functions, so &quot;current capital&quot; lists benefit from checking a recently updated, authoritative source like the CIA World Factbook rather than an older printed atlas.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How the count of 195 countries is built up"
        type="detail"
        svgSrc="/diagrams/geography-world-facts-countries-and-capitals-overview-count-buildup.svg"
        altText="A simple stacked diagram showing 193 UN member states as the base block, with 2 UN observer states (the Holy See and the State of Palestine) added on top to reach a total of 195, and a separate side note box listing territories, dependencies, and partially recognized states as excluded from this count."
      />
      <p>
      The diagram separates the two building blocks of the &quot;195&quot; figure — full UN membership and observer status — from everything excluded from it. That excluded category is large and genuinely contested: Taiwan, Kosovo, Western Sahara, and similar cases are administered as self-governing entities in practice but are not universally recognized as sovereign states, so different reference sources (encyclopedias, atlases, government agencies) can report slightly different totals depending on their counting rules.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming every country's capital is automatically also its largest or most famous city.", fix: "Check rather than assume — the U.S., Australia, Brazil, Canada, Turkey, and Nigeria are all well-known counterexamples where the capital is a different city than the largest one." },
          { mistake: "Treating 'country' and 'territory' as interchangeable when counting toward a total like 195.", fix: "Territories and dependencies (Puerto Rico, Greenland, Hong Kong, Bermuda) have their own local capitals or administrative centers but are governed under another sovereign state, so they aren't counted separately in the 195 figure." },
          { mistake: "Citing a single fixed number of countries as permanently settled fact.", fix: "195 is the most common convention (193 UN members + 2 observer states), but the true count shifts slightly depending on how a source treats disputed or partially recognized states like Taiwan or Kosovo — always check the counting method a source uses." },
        ]}
      />
      <MisconceptionCallout
        myth="A country's capital is always its largest city."
        reality={<p>Capital status is a legal and administrative designation chosen by a country&apos;s government or constitution — it has nothing to do with population size. Many countries deliberately pick a smaller, more centrally located, or more politically neutral city as capital specifically to avoid favoring one dominant metropolitan region: Washington, D.C. over New York City; Canberra over Sydney or Melbourne; Ottawa over Toronto; Brasília over Rio de Janeiro or São Paulo; Abuja over Lagos. In each of these cases the capital was either purpose-built or chosen as a deliberate compromise, and the country&apos;s largest city plays no formal role in government at all.</p>}
      />

      <QuickCheck
        question="Which of these best explains why a country might choose a capital city that is not its largest city?"
        options={[
          { text: "It's usually a random historical accident with no real reasoning behind it", correct: false, explanation: "In most documented cases (Washington D.C., Canberra, Brasília, Abuja) the choice was a deliberate decision, not an accident — often to balance regional rivalries or spread development inland." },
          { text: "Governments often choose a smaller or more centrally located city to avoid favoring one dominant region or city, or to encourage development elsewhere", correct: true, explanation: "Correct. This pattern shows up repeatedly worldwide — Canberra as a compromise between Sydney and Melbourne, Brasília to draw development toward Brazil's interior, and Abuja chosen partly for its central, more neutral location relative to Nigeria's regional and ethnic divisions." },
          { text: "Large cities are legally prohibited from serving as capitals in most countries", correct: false, explanation: "There's no such rule — many capitals (Tokyo, London, Paris, Cairo, Moscow) are also their country's largest city. The pattern of capital ≠ largest city is common, but not universal or legally mandated." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a 'countries and capitals' quiz, check whether it's using the 195-country convention (193 UN members + 2 observers) or a different count, since totals do vary by source.",
          "Pick five countries you think you know well and verify their capitals against the CIA World Factbook — you may find at least one surprise where the capital isn't the city you'd expect.",
          "Read the entry on Borders & How They're Defined to see how a country's territory — not just its capital — gets legally established in the first place.",
          "Read the entry on Territories, Dependencies & Disputed Regions to understand why the '195' figure excludes places like Taiwan, Kosovo, and Western Sahara.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How many countries are there in the world?", answer: "The most commonly cited figure is 195: the 193 member states of the United Nations plus 2 UN observer states (the Holy See and the State of Palestine). Some sources report slightly different totals depending on how they treat partially recognized states like Taiwan or Kosovo." },
          { question: "What is the difference between a UN member state and a UN observer state?", answer: "Member states have full voting rights in the UN General Assembly and can be elected to bodies like the Security Council. Observer states, currently the Holy See and the State of Palestine, can participate in UN meetings and processes but cannot vote in the General Assembly." },
          { question: "Is a country's capital always its biggest city?", answer: "No. Many countries deliberately chose a capital that isn't their largest city — Washington D.C., Canberra, Ottawa, Brasília, and Abuja are all well-known capitals that are smaller than another city in their own country." },
          { question: "Why does South Africa have three capital cities?", answer: "South Africa splits government functions across Pretoria (administrative/executive), Cape Town (legislative, home to Parliament), and Bloemfontein (judicial, home to the Supreme Court of Appeal) — a compromise dating back to the 1910 unification of separate British colonies and Boer republics." },
          { question: "Is Taiwan a country?", answer: "Taiwan governs itself with its own elected government, military, and currency, but it is not a United Nations member state — the UN transferred China's seat to the People's Republic of China in 1971, and most UN member states maintain formal diplomatic relations with Beijing rather than Taipei under what is commonly called a 'One China' policy. Its status remains a subject of active international dispute." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
