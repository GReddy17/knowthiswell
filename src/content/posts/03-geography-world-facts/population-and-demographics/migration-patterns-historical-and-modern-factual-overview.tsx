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
  title: "Migration Patterns (historical and modern, factual overview)",
  category: "geography-world-facts",
  order: 22,
  subtopic: "population-and-demographics",
  tags: [
    "human migration",
    "international migrants",
    "refugees",
    "internal migration",
    "remittances",
    "demographics",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How human migration has worked historically and today — the scale of international movement, the difference between migrants and refugees, and the main documented causes.",
  summary: "Human migration is the movement of people from one place to live in another, and today involves roughly 280 million international migrants worldwide, most moving for economic, family, or educational reasons rather than as refugees.",
  sources: [
    { label: "IOM — World Migration Report", url: "https://worldmigrationreport.iom.int/" },
    { label: "UNHCR — Refugee Statistics", url: "https://www.unhcr.org/refugee-statistics/" },
    { label: "UN DESA — International Migration", url: "https://www.un.org/development/desa/pd/content/international-migration" },
    { label: "World Bank — Remittances Data", url: "https://www.worldbank.org/en/topic/migrationremittancesdiasporaissues" },
  ],
  seeAlso: [
    "geography-world-facts/world-population-facts",
    "geography-world-facts/urbanization-trends",
    "geography-world-facts/most-and-least-densely-populated-places",
    "geography-world-facts/countries-and-capitals-overview",
  ],
  glossary: [
    { term: "International migrant", definition: "A person living in a country other than the one they were born in, regardless of the reason for their move or their legal status." },
    { term: "Internal migration", definition: "The movement of people from one place to another within the same country, such as from a rural area to a city." },
    { term: "Refugee", definition: "A person who has fled their home country due to a well-founded fear of persecution, conflict, or violence, and who has crossed an international border seeking protection." },
    { term: "Internally displaced person (IDP)", definition: "A person forced to flee their home due to conflict, violence, or disaster, but who has not crossed an international border, remaining within their own country." },
    { term: "Remittance", definition: "Money sent by a migrant worker back to family or communities in their country of origin." },
    { term: "Migration corridor", definition: "A well-established, high-volume route of migration between two specific countries or regions, shaped over time by economic, geographic, and historical ties." },
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
          "Roughly 280 million people worldwide live outside their country of birth, per UN and IOM estimates — about 3.6% of the global population, and the large majority move for economic, family, or educational reasons rather than as refugees.",
          "Migration and forced displacement are related but distinct: refugees and asylum seekers make up a minority of international migrants overall, even though displacement numbers (over 100 million people forcibly displaced worldwide, per UNHCR) have reached record highs in recent years.",
          "Historical mass migrations — from prehistoric human dispersal out of Africa to the 19th-20th century transatlantic migration wave of tens of millions of Europeans — show that large-scale human movement driven by economic and environmental factors is a long-standing pattern, not a new phenomenon.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Human <TermLink href="/geography-world-facts/migration-patterns-historical-and-modern-factual-overview">migration</TermLink> is simply people moving from one place to live in another — sometimes within a country, sometimes across international borders. It&apos;s been happening throughout human history, from the earliest human dispersal out of Africa tens of thousands of years ago, to waves of settlement and colonization, to the movement of tens of millions of people across the Atlantic in the 19th and early 20th centuries. Today, an estimated 280 million people live outside the country where they were born — most moving for jobs, family, or education, with a smaller share moving because they were forced to flee conflict or persecution.</div>}
        detailed={<div className="prose-p">Demographers and migration researchers generally split modern migration into a few tracked categories: <TermLink href="/geography-world-facts/migration-patterns-historical-and-modern-factual-overview">international migrants</TermLink> (people living outside their birth country, for any reason), <TermLink href="/geography-world-facts/migration-patterns-historical-and-modern-factual-overview">internal migration</TermLink> (movement within a single country, such as rural-to-urban migration), and forced displacement, which is further split between <TermLink href="/geography-world-facts/migration-patterns-historical-and-modern-factual-overview">refugees</TermLink> (who have crossed an international border fleeing persecution or conflict) and <TermLink href="/geography-world-facts/migration-patterns-historical-and-modern-factual-overview">internally displaced persons</TermLink> (who have fled but remain within their own country). Documented causes of migration are typically grouped into economic (labor migration and family reunification, historically the largest category by volume), conflict and persecution (driving refugee and asylum movements), and environmental factors (including sudden disasters and, increasingly, slower-onset climate stress, which researchers project could contribute to tens of millions of additional internal moves by 2050 under some modeled scenarios, per World Bank Groundswell research). A large share of migration flows through well-established <TermLink href="/geography-world-facts/migration-patterns-historical-and-modern-factual-overview">migration corridors</TermLink> — for example, Mexico-to-U.S., India-to-Gulf states, and Bangladesh-to-India are among the world&apos;s largest documented international corridors.</div>}
      />
      <FootnoteAside>China&apos;s rural-to-urban internal migration, driven by economic opportunity in coastal cities, is estimated to be the largest sustained internal migration flow in recorded history — involving well over 100 million people over recent decades, entirely within a single country&apos;s borders, and therefore not counted in any &quot;international migrant&quot; statistic at all.</FootnoteAside>

      <p>
      That distinction — between moving voluntarily for opportunity and being forced to flee — is the single most important dividing line in migration data, and it&apos;s worth seeing the actual scale of each category side by side.
      </p>

      <QuickCheck
        question="Roughly what share of the world's approximately 280 million international migrants are refugees fleeing conflict or persecution?"
        options={[
          { text: "The large majority — most international migrants are refugees", correct: false, explanation: "This inverts the actual proportion. Refugees and asylum seekers make up a minority of the roughly 280 million international migrants — most move for economic, family, or educational reasons." },
          { text: "A minority — refugees and asylum seekers make up roughly a tenth to a quarter of international migrants, per UNHCR and IOM data", correct: true, explanation: "Correct. Of the roughly 280 million international migrants, the large majority move for economic, family, or educational reasons. Refugees and asylum seekers, while numbering in the tens of millions, represent a smaller subset of that total." },
          { text: "Essentially all international migration today is driven by conflict", correct: false, explanation: "Conflict-driven displacement is a real and significant category, and has reached record levels in recent years, but it doesn't represent the majority of the much larger overall category of international migration, which is dominated by economic and family-related moves." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The Irish Potato Famine and 19th-century emigration (baseline case)</h3>
      <div className="prose-p">
      Between roughly 1845 and 1852, a potato blight destroyed Ireland&apos;s staple food crop, triggering a famine that killed roughly 1 million people and drove an estimated 1-2 million more to emigrate, primarily to the United States, Britain, Canada, and Australia. This is a well-documented, straightforward historical case of migration driven by an acute economic and environmental shock — a clear baseline example of how a single triggering event (crop failure) can produce a sustained, large-scale migration wave that reshaped the demographics of both the country people left and the countries that received them.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Internal migration — a larger, less-visible category (edge case / variation)</h3>
      <div className="prose-p">
      Most public attention to migration focuses on international movement, but internal migration — moving within one&apos;s own country — is a much larger phenomenon by sheer volume in some contexts, and it isn&apos;t captured in &quot;international migrant&quot; statistics at all. China&apos;s rural-to-urban migration since the 1980s, driven by economic opportunity in coastal manufacturing and service hubs, has involved well over 100 million people relocating within China&apos;s own borders, historically linked to the country&apos;s household registration (&quot;hukou&quot;) system, which has shaped where internal migrants can formally access certain local services. This is a genuine edge case in how migration gets counted: someone moving 2,000 km within China counts in domestic internal migration statistics, while someone moving 200 km across a European international border counts as an &quot;international migrant&quot; — the international/internal distinction is about crossing a border, not about the distance traveled.
      </div>

      <QuickCheck
        question="A person relocates 1,500 km from a rural province to a major coastal city, entirely within their own country. Does this count in global 'international migrant' statistics?"
        options={[
          { text: "Yes, any move of that distance automatically counts as international migration", correct: false, explanation: "Distance isn't the deciding factor. International migration statistics specifically track people living outside the country of their birth — a move within one country's borders, no matter how far, is internal migration, not international migration." },
          { text: "No — international migration statistics only count people who have crossed a national border to live in a different country; this move is internal migration", correct: true, explanation: "Correct. The international/internal distinction is based on crossing a national border, not on distance traveled. A 1,500 km move within one country is internal migration and wouldn't appear in international migrant totals." },
          { text: "It depends on whether the person changes their job during the move", correct: false, explanation: "Employment status isn't what determines the classification — whether an international border was crossed is the deciding factor between internal and international migration statistics." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Modern conflict-driven displacement (real-world / applied case)</h3>
      <p>
      According to UNHCR&apos;s Global Trends reporting, the number of people forcibly displaced worldwide — including refugees, asylum seekers, and internally displaced persons — surpassed 100 million for the first time in 2022, driven substantially by conflicts including the war in Ukraine (which began in February 2022 and displaced millions of people both within Ukraine and across its borders into neighboring European countries) alongside continuing displacement linked to conflicts in Syria, Afghanistan, and elsewhere. This real-world case illustrates the conflict-driven displacement category specifically — distinct from, and smaller in total scale than, the broader roughly 280-million-person international migrant population, most of whom moved for economic or family reasons rather than fleeing violence.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Major documented international migration corridors and their approximate scale"
        type="detail"
        svgSrc="/diagrams/geography-world-facts-migration-patterns-historical-and-modern-factual-overview-flow-map.svg"
        altText="A world map with curved arrows of varying thickness representing major migration corridors, including Mexico to the United States, India and other South Asian countries to Gulf states, Bangladesh to India, and Ukraine to neighboring European countries, with arrow thickness roughly proportional to the estimated number of migrants along each route."
      />
      <p>
      Notice that the thickest arrows on this kind of map generally represent long-standing economic migration corridors, built up over decades of labor demand and existing community ties, rather than the more sudden, conflict-driven flows that tend to dominate news coverage — both types are real and documented, but they differ substantially in scale, duration, and underlying cause.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using 'migrant' and 'refugee' interchangeably.", fix: "A refugee is a specific legal and humanitarian category — someone who has crossed an international border fleeing persecution or conflict. 'Migrant' is a much broader term covering anyone living outside their birth country for any reason, and refugees are a minority subset of that broader group." },
          { mistake: "Assuming all significant human migration is international.", fix: "Internal migration (within a single country) is a massive, well-documented phenomenon in its own right — China's internal rural-to-urban migration alone involves well over 100 million people, entirely separate from international migration statistics." },
          { mistake: "Treating large-scale human migration as a uniquely modern phenomenon.", fix: "Mass migration has occurred throughout human history, from prehistoric dispersal out of Africa to the 19th-20th century transatlantic migration wave that moved tens of millions of Europeans to the Americas." },
        ]}
      />
      <MisconceptionCallout
        myth="Most international migrants are refugees fleeing war or persecution."
        reality={<p>Refugees and asylum seekers are a real and significant category, and forced displacement numbers have reached record highs in recent years — UNHCR reported forcibly displaced people worldwide surpassing 100 million for the first time in 2022. But this group is a minority within the much larger population of roughly 280 million international migrants tracked by the UN and IOM. The large majority of international migrants move for economic opportunity, family reunification, or education — labor migration in particular has historically been, and remains, the largest documented driver of international movement by volume. Conflating &quot;migrant&quot; with &quot;refugee&quot; understates both the scale of ordinary economic and family-driven migration and the specific, distinct legal and humanitarian situation refugees face.</p>}
      />

      <QuickCheck
        question="A news article uses 'migrant' and 'refugee' as fully interchangeable terms when describing global migration data. Is this accurate?"
        options={[
          { text: "Yes, the terms describe exactly the same group of people", correct: false, explanation: "They don't. 'Migrant' is a broad term for anyone living outside their birth country for any reason; 'refugee' is a specific category for people who fled persecution or conflict across a border. Refugees are a minority subset of all international migrants." },
          { text: "No — 'migrant' is a broad category including economic and family-based movement, while 'refugee' is a narrower, specific status tied to fleeing persecution or conflict", correct: true, explanation: "Correct. Treating the terms as interchangeable overstates how much of global migration is conflict-driven — most international migrants move for economic, family, or educational reasons, with refugees representing a smaller, specifically defined subset." },
          { text: "No, because 'migrant' only refers to people who move within their own country", correct: false, explanation: "That description fits 'internal migrant,' not 'migrant' generally. 'International migrant' specifically refers to people living outside their country of birth, which includes far more than just refugees." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you read a migration-related headline, check whether it's describing international migrants broadly, refugees specifically, or internal migration — the three numbers tell very different stories.",
          "Look up the IOM World Migration Report for the latest documented figures on international migrant totals and major migration corridors.",
          "Check UNHCR's Global Trends report to see the current breakdown between refugees, asylum seekers, and internally displaced persons.",
          "Read the related entry on Urbanization Trends to see how internal, rural-to-urban migration connects to global city growth.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How many international migrants are there in the world?", answer: "An estimated 280 million people live outside the country of their birth, according to UN DESA and IOM data — roughly 3.6% of the world's total population." },
          { question: "What are the main causes of migration?", answer: "Researchers generally group causes into economic (labor migration and family reunification, historically the largest category), conflict and persecution (driving refugee movements), and environmental factors, including disasters and slower-onset climate stress." },
          { question: "What is the difference between a migrant and a refugee?", answer: "'Migrant' broadly describes anyone living outside their country of birth, for any reason. 'Refugee' is a specific legal and humanitarian status for someone who has crossed an international border fleeing persecution, conflict, or violence — refugees are a subset of the broader migrant population, not a synonym for it." },
          { question: "What is internal migration?", answer: "Movement from one place to another within the same country, such as rural-to-urban migration. It isn't captured in 'international migrant' statistics, and in some countries — notably China — it has involved more people than most countries' entire international migration flows combined." },
          { question: "How much money do migrants send home in remittances?", answer: "International migrants send hundreds of billions of dollars annually back to their countries of origin, according to World Bank data — a major and growing source of income for many low- and middle-income economies." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
