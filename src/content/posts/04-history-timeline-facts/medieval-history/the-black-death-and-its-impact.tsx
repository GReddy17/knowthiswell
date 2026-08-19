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
  title: "The Black Death & Its Impact",
  category: "history-timeline-facts",
  order: 14,
  subtopic: "medieval-history",
  tags: ["black death", "bubonic plague", "medieval history", "yersinia pestis", "medieval europe"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The Black Death killed roughly a third of Europe's population between 1347 and 1351 — and reshaped labor, land, and power for generations after the dying stopped.",
  summary: "The Black Death was a pandemic of plague, caused by the bacterium Yersinia pestis, that swept through Europe, the Middle East, and parts of Asia between 1347 and 1351, killing an estimated 25 million people in Europe alone, roughly a third of the continent's population at the time.",
  sources: [
    { label: "Encyclopaedia Britannica — Black Death", url: "https://www.britannica.com/event/Black-Death" },
    { label: "Encyclopaedia Britannica — Bubonic Plague", url: "https://www.britannica.com/science/bubonic-plague" },
    { label: "U.S. Centers for Disease Control and Prevention — How Plague Spreads", url: "https://www.cdc.gov/plague/causes/index.html" },
  ],
  seeAlso: [
    "history-timeline-facts/the-middle-ages-in-europe-overview",
    "history-timeline-facts/the-silk-road",
    "history-timeline-facts/the-crusades-factual-overview",
  ],
  glossary: [
    { term: "Yersinia pestis", definition: "The bacterium responsible for plague, including the Black Death, typically transmitted to humans through the bite of infected fleas." },
    { term: "Bubonic plague", definition: "The most common form of plague, named for the painful, swollen lymph nodes (buboes) it causes, spread primarily through flea bites." },
    { term: "Pandemic", definition: "An epidemic of disease that has spread across multiple countries or continents, affecting a large number of people." },
    { term: "Serfdom", definition: "A medieval European system binding peasant laborers (serfs) to work land for a lord, with limited freedom of movement — a system significantly weakened after the Black Death's labor shortages." },
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
          "The Black Death (1347-1351) is estimated to have killed around 25 million people in Europe alone — roughly a third of the continent's population — in just four years.",
          "The disease was plague, caused by the bacterium Yersinia pestis, and its main historical transmission cycle involved infected fleas, commonly carried by rodents, biting humans — not rodents alone, and not through casual person-to-person contact as the primary route for its most common form.",
          "The mass labor shortage that followed the pandemic measurably shifted power toward surviving peasants and workers, contributing to the decline of medieval serfdom across much of Western Europe in the generations afterward.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/history-timeline-facts/the-black-death-and-its-impact">Black Death</TermLink> was a devastating outbreak of plague that swept through Europe, the Middle East, and parts of Asia between 1347 and 1351. It&apos;s estimated to have killed around 25 million people in Europe alone — roughly a third of the population at the time — making it one of the deadliest events in recorded human history. The disease is caused by the bacterium <TermLink href="/history-timeline-facts/the-black-death-and-its-impact">Yersinia pestis</TermLink>, which spread through trade routes, arriving in Europe via Mediterranean ports in 1347.</div>}
        detailed={<div className="prose-p">The plague reached Europe in October 1347, when Genoese trading ships, fleeing a siege at the Black Sea port of Kaffa, arrived in Sicily carrying infected crew and, historians believe, infected fleas and rodents. From there it spread rapidly along Mediterranean and European trade networks over the following four years. The most common form, <TermLink href="/history-timeline-facts/the-black-death-and-its-impact">bubonic plague</TermLink>, causes painful swollen lymph nodes (buboes) and spreads primarily through the bite of infected fleas, often carried by rodents, though some historians researching the pandemic&apos;s unusually rapid European spread have proposed that human fleas and lice may also have played a significant role in transmission alongside rodent-borne fleas, an area of ongoing academic research rather than settled consensus. Beyond the initial 1347-1351 outbreak, plague recurred in Europe in periodic waves for centuries afterward, though none matched the first wave&apos;s scale. The demographic collapse triggered by the initial pandemic had major economic effects: with a much smaller workforce available, surviving peasants and laborers could demand higher wages and better terms, a shift that contributed measurably to the decline of serfdom across much of Western Europe over the following century.</div>}
      />
      <FootnoteAside>The name &quot;Black Death&quot; wasn&apos;t commonly used at the time of the pandemic itself — medieval writers mostly called it &quot;the great mortality&quot; or &quot;the pestilence&quot;; the now-familiar English name became standard only centuries later.</FootnoteAside>
      <p>
      That transmission detail — fleas as the primary carrier, not rats by themselves — matters for understanding both the disease&apos;s actual history and a persistent modern misconception about how it spread, which is worth addressing directly.
      </p>

      <QuickCheck
        question="Roughly what share of Europe's population is estimated to have died during the Black Death (1347-1351)?"
        options={[
          { text: "About 5 percent", correct: false, explanation: "This significantly understates the death toll — historians' estimates run far higher for this specific four-year outbreak." },
          { text: "Roughly a third, based on an estimate of around 25 million deaths in Europe", correct: true, explanation: "Correct. This is one of the most-cited estimates for the Black Death's toll in Europe specifically, making it one of the deadliest events in recorded history relative to population size." },
          { text: "Nearly the entire population, with only small isolated pockets of survivors", correct: false, explanation: "This overstates the toll — devastating as roughly a third mortality was, it left the majority of the population alive, which is itself central to understanding the labor-shortage effects that followed." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The 1347 arrival in Sicily (baseline case)</h3>
      <div className="prose-p">
      In October 1347, a fleet of Genoese trading ships arrived at the Sicilian port of Messina, having fled a siege at the Genoese trading colony of Kaffa in Crimea. Crew aboard were already sick, and the plague spread from the port outward across Sicily and, within months, into mainland Italy and southern France. This single, well-documented arrival point illustrates how directly the pandemic&apos;s European spread was tied to existing Mediterranean trade networks — the same maritime commercial routes that normally carried goods carried the disease instead.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Uneven regional impact and later recurring waves (variation / exception)</h3>
      <div className="prose-p">
      Not every region was affected equally — some cities and regions recorded mortality well above the roughly one-third average, while a smaller number of more isolated communities were spared the worst of the initial wave. Poland, for instance, is generally described by historians as having experienced comparatively lower mortality than much of Western and Southern Europe during this first outbreak, likely due to a combination of lower population density and different trade exposure. The pandemic also wasn&apos;t a single one-time event — plague recurred in periodic European outbreaks for centuries after 1351, including a significant recurrence in London in 1665, though none of these later waves matched the scale of the original 1347-1351 pandemic.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How the labor shortage reshaped medieval Europe (real-world / applied case)</h3>
      <div className="prose-p">
      With roughly a third of the population gone, the surviving labor force became scarce relative to available land and work, giving peasants and laborers unusual bargaining leverage. In England, this contributed to wage increases that alarmed landowners enough to prompt legislation like the Statute of Labourers (1351), an attempt to cap wages at pre-plague levels — an attempt historians generally regard as only partially successful, since demand for labor kept pushing wages upward regardless. Over the following generations, this economic pressure is credited by historians as a significant factor in the gradual decline of serfdom across much of Western Europe, showing how a single demographic catastrophe rippled into structural social and economic change that outlasted the pandemic itself by well over a century.
      </div>

      <QuickCheck
        question="How did the Black Death's death toll affect labor and social structure in the decades that followed?"
        options={[
          { text: "It had no lasting economic effect once the initial mortality wave ended", correct: false, explanation: "Historians document significant, lasting economic effects — the sharp reduction in available labor measurably shifted bargaining power toward surviving workers for generations." },
          { text: "The sharp reduction in available labor gave surviving peasants and workers more bargaining power, contributing to the decline of serfdom over the following century", correct: true, explanation: "Correct. This labor-shortage effect is one of the most significant and well-documented long-term social consequences of the pandemic, even though it played out gradually rather than immediately." },
          { text: "Landowners immediately abandoned all use of peasant labor and switched entirely to paid professional armies", correct: false, explanation: "This isn't an accurate description of the economic shift — the real change was in labor's bargaining power and wages within the existing agricultural system, not a wholesale replacement of the labor system." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The Black Death's spread across Europe, 1347–1351"
        type="detail"
        svgSrc="/diagrams/history-timeline-facts-black-death-spread-map.svg"
        altText="Map and timeline showing the Black Death's arrival at the Sicilian port of Messina in October 1347 via Genoese trading ships fleeing Kaffa in Crimea, its spread across Italy and southern France by 1348, into central Europe, Britain, and Scandinavia through 1349, and reaching northern Europe by 1350 to 1351, with an estimated total of around 25 million deaths in Europe by the end of the initial outbreak."
      />
      <p>
      The spread pattern traces existing trade routes almost exactly — port cities and major trade hubs were hit earliest and often hardest, while more isolated inland or rural areas were sometimes affected later or less severely.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the Black Death was a single isolated outbreak that never recurred.", fix: "Plague returned to Europe in periodic waves for centuries after 1351, including a notable recurrence in London in 1665 — the 1347-1351 outbreak was the deadliest, not the only one." },
          { mistake: "Thinking the Black Death had no lasting effects beyond the immediate death toll.", fix: "The resulting labor shortage measurably shifted economic power toward peasants and workers, contributing to the decline of serfdom across much of Western Europe over the following century." },
          { mistake: "Assuming every region of Europe was affected equally by the initial 1347-1351 outbreak.", fix: "Mortality varied significantly by region and city — some areas, like much of Poland, are generally documented as experiencing comparatively lower mortality than hard-hit regions of Western and Southern Europe." },
        ]}
      />
      <MisconceptionCallout
        myth="The Black Death was caused and spread by rats alone, with no real role for fleas or trade networks."
        reality={<p>Rats are part of the story, but they weren&apos;t spreading the disease directly — the actual transmission mechanism, according to the U.S. Centers for Disease Control and Prevention, is a flea bite: fleas become infected with the bacterium <em>Yersinia pestis</em> after feeding on an infected rodent, and then bite and infect a human host. Some historians studying the pandemic&apos;s unusually rapid European spread have also proposed that human fleas and body lice may have contributed to person-to-person transmission during the medieval outbreak, an active area of academic research. Separately, none of this would have reached Europe at all without the era&apos;s Mediterranean trade networks — the disease arrived specifically via Genoese trading ships fleeing a siege at Kaffa, following the same commercial routes as ordinary goods. Reducing the Black Death&apos;s spread to &quot;rats&quot; alone leaves out both the actual biological transmission mechanism and the trade-network context that let it reach Europe in the first place.</p>}
      />

      <QuickCheck
        question="What is the main mechanism by which bubonic plague, including the Black Death, historically spread to humans?"
        options={[
          { text: "Direct contact with rats, with no other organism involved", correct: false, explanation: "Rats served mainly as a host for infected fleas — the CDC identifies the flea bite itself, not direct rat contact, as the primary transmission mechanism to humans." },
          { text: "The bite of infected fleas, which had typically fed on an infected rodent host", correct: true, explanation: "Correct, according to the CDC — fleas pick up the bacterium from an infected rodent and transmit it to humans through biting, which is the primary documented mechanism for bubonic plague." },
          { text: "Airborne transmission identical to how a common cold spreads", correct: false, explanation: "This describes pneumonic plague, a different, less common form — bubonic plague, the dominant form during the 1347-1351 pandemic, spread primarily through flea bites, not airborne person-to-person transmission." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="How many years ago did the Black Death reach Europe?"
        fields={[
          { key: "eventYear", label: "Event year (Black Death reached Sicily in 1347)", defaultValue: 1347 },
          { key: "currentYear", label: "Current year", defaultValue: 2026 },
        ]}
        resultLabel="Years since the Black Death reached Europe"
        formula="yearsSinceHistoricalEvent"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time rats get blamed for the Black Death on their own, mentally correct it to fleas as the actual biting, disease-transmitting link.",
          "When you hear the Black Death described as a single one-off event, remember plague recurred in periodic waves for centuries afterward, including in 1665 London.",
          "Notice the trade-route connection next time the pandemic's spread comes up — it followed Mediterranean shipping lanes almost exactly.",
          "If serfdom's decline comes up in a European history context, connect it back to the post-plague labor shortage as a major contributing factor.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What caused the Black Death?", answer: "The bacterium Yersinia pestis, which causes plague. It's transmitted primarily through the bite of infected fleas, which typically picked up the bacterium from an infected rodent host, according to the CDC." },
          { question: "How many people died in the Black Death?", answer: "Estimates commonly cite around 25 million deaths in Europe alone between 1347 and 1351, roughly a third of the continent's population at the time — one of the deadliest events in recorded human history." },
          { question: "Did rats cause the Black Death?", answer: "Not directly — rats served mainly as hosts for infected fleas, and it was the flea bite that transmitted the bacterium to humans. Some researchers have also proposed a role for human fleas and lice in the pandemic's especially rapid spread." },
          { question: "How did the Black Death spread to Europe?", answer: "It arrived via Mediterranean trade routes in October 1347, when Genoese trading ships fleeing a siege at Kaffa in Crimea reached the Sicilian port of Messina carrying infected crew, fleas, and rodents." },
          { question: "What long-term effects did the Black Death have?", answer: "Beyond the immediate death toll, the resulting labor shortage gave surviving peasants and workers more economic bargaining power, contributing significantly to the gradual decline of serfdom across much of Western Europe over the following century." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
