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
  title: "End of Apartheid",
  category: "history-timeline-facts",
  order: 39,
  subtopic: "late-20th-century",
  tags: ["apartheid", "south africa", "nelson mandela", "20th century history", "de klerk", "1994 election"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "A factual timeline of how apartheid ended in South Africa, from Nelson Mandela's 1990 release through the multi-year negotiated transition to the 1994 election.",
  summary: "Apartheid was South Africa's system of legally enforced racial segregation from 1948 to the early 1990s, dismantled through a negotiated, multi-year political transition between 1990 and 1994 rather than a single event, culminating in the country's first democratic election in April 1994.",
  sources: [
    { label: "Nelson Mandela Foundation — Biography and Timeline", url: "https://www.nelsonmandela.org/content/page/biography" },
    { label: "South African History Online — Apartheid Legislation", url: "https://www.sahistory.org.za/article/apartheid-legislation-1850s-1970s" },
    { label: "Encyclopaedia Britannica — Apartheid", url: "https://www.britannica.com/topic/apartheid" },
    { label: "South African History Online — The Negotiations Process and the Birth of Democracy", url: "https://www.sahistory.org.za/article/negotiations-process-and-birth-democracy" },
  ],
  seeAlso: [
    "history-timeline-facts/the-civil-rights-movement-us",
    "history-timeline-facts/fall-of-the-berlin-wall",
    "history-timeline-facts/formation-of-the-european-union",
  ],
  glossary: [
    { term: "Apartheid", definition: "Afrikaans for \"apartness\" — South Africa's system of legally enforced racial segregation and discrimination against non-white South Africans, formally in place from 1948 to the early 1990s." },
    { term: "African National Congress (ANC)", definition: "South Africa's oldest liberation movement and, since 1994, its governing political party; it was banned by the apartheid government from 1960 to 1990." },
    { term: "Negotiated transition", definition: "The process, roughly 1990 to 1994, in which the apartheid government and anti-apartheid organizations negotiated the terms for ending apartheid and establishing a new, non-racial constitution and government." },
    { term: "Truth and Reconciliation Commission (TRC)", definition: "A body established in South Africa in 1995, chaired by Archbishop Desmond Tutu, that investigated human rights violations committed under apartheid and heard testimony from victims and perpetrators." },
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
          "Apartheid was South Africa's system of legally enforced racial segregation, formally established in 1948 and dismantled through a negotiated political transition between 1990 and 1994, not ended by a single event.",
          "Nelson Mandela's release from prison on February 11, 1990, after 27 years, was a major turning point, but it began a four-year negotiation process, not an immediate end to apartheid laws.",
          "South Africa held its first fully democratic, all-race election in April 1994, which the ANC won and in which Nelson Mandela became the country's first Black president, formally completing the transition.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/history-timeline-facts/end-of-apartheid">Apartheid</TermLink> was a legal system of racial segregation in South Africa, formally established by the National Party government in 1948, that classified people by race and used that classification to restrict where non-white South Africans could live, work, and vote. It was dismantled gradually between 1990 and 1994: President F. W. de Klerk began unbanning anti-apartheid organizations and released Nelson Mandela from prison in February 1990, after which the government and anti-apartheid groups, principally the <TermLink href="/history-timeline-facts/end-of-apartheid">African National Congress (ANC)</TermLink>, negotiated a new constitution and the terms for South Africa&apos;s first democratic election, held in April 1994.</div>}
        detailed={<div className="prose-p">Apartheid was built on specific legislation — including the Population Registration Act (1950), which classified every South African by race, and the Group Areas Act (1950), which enforced residential segregation — documented in detail by South African History Online and the Nelson Mandela Foundation. Its dismantling was a multi-year, negotiated political process, not an instant reversal: after Mandela&apos;s 1990 release, the <TermLink href="/history-timeline-facts/end-of-apartheid">negotiated transition</TermLink> included the multi-party Convention for a Democratic South Africa (CODESA) talks (from 1991), periods of serious political violence, and an interim constitution (1993) before the 1994 election could be held. A frequently underemphasized nuance: apartheid&apos;s legal framework was not fully repealed all at once either — key apartheid laws, including the Population Registration Act, were formally repealed by South Africa&apos;s parliament in 1991, three years before the first democratic election actually took place, meaning the legal dismantling and the democratic transition were related but distinct milestones, not a single moment. Mandela and de Klerk jointly received the Nobel Peace Prize in 1993 for their roles in the negotiation process, an acknowledgment, per the Nobel Committee, of the negotiated (rather than purely unilateral) nature of the transition.</div>}
      />
      <FootnoteAside>Nelson Mandela was imprisoned for 27 years, from 1962 to 1990, most of it on Robben Island — a location now preserved as a UNESCO World Heritage Site and museum documenting the apartheid-era prison system.</FootnoteAside>
      <p>
      That four-year gap between Mandela&apos;s release and the 1994 election is exactly why historians describe the end of apartheid as a negotiated transition rather than a single turning point.
      </p>

      <QuickCheck
        question="What happened immediately after Nelson Mandela's release from prison in February 1990?"
        options={[
          { text: "Apartheid ended immediately and South Africa held its first democratic election that same year", correct: false, explanation: "The first democratic election was not held until April 1994, four years after Mandela's release — a multi-year negotiation process came first." },
          { text: "A multi-year negotiation process began between the government and anti-apartheid organizations, leading to South Africa's first democratic election in 1994", correct: true, explanation: "Correct. Mandela's release began the negotiated transition, including CODESA talks and an interim constitution, culminating in the 1994 election rather than an immediate end to apartheid." },
          { text: "Mandela immediately became president of South Africa", correct: false, explanation: "Mandela became president after winning South Africa's first democratic election in April 1994, not immediately upon his release in 1990." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key documented phases</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Phase 1: Apartheid&apos;s legal establishment and international pressure (baseline)</h3>
      <div className="prose-p">
      Apartheid was formally established after the National Party won South Africa&apos;s 1948 election and enacted a series of laws classifying and segregating the population by race, building on earlier segregationist policy under British and Boer colonial rule. Domestic resistance, led by organizations including the ANC (founded 1912) and the Pan Africanist Congress, was met with increasingly severe state repression, including the Sharpeville massacre (1960), after which the ANC was banned and Mandela and other leaders were later tried and imprisoned in 1963-64. International pressure grew over subsequent decades, including United Nations resolutions condemning apartheid and economic sanctions imposed by multiple countries.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Phase 2: The negotiated transition, 1990-1994 (variation / turning point)</h3>
      <div className="prose-p">
      President F. W. de Klerk announced the unbanning of the ANC and other organizations and Mandela&apos;s impending release in a speech to parliament on February 2, 1990; Mandela was released nine days later. What followed, documented by South African History Online, was a multi-year negotiation process — including the CODESA talks beginning in 1991, the formal repeal of core apartheid laws by parliament in 1991, and periods of significant political violence between rival groups — before an interim constitution was agreed in 1993 and South Africa&apos;s first democratic, all-race election was set for April 1994.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Phase 3: The 1994 election and its documented aftermath (present-day legacy)</h3>
      <div className="prose-p">
      South Africa&apos;s first democratic election, held April 26-29, 1994, saw the ANC win with roughly 62% of the vote, and Nelson Mandela was inaugurated as the country&apos;s first Black president on May 10, 1994. The Truth and Reconciliation Commission, established in 1995 and chaired by Archbishop Desmond Tutu, subsequently investigated human rights violations committed under apartheid. South Africa&apos;s Constitution, adopted in 1996, remains the country&apos;s governing legal framework today, and institutions including the Nelson Mandela Foundation and South African History Online continue to document this history for public reference.
      </div>

      <QuickCheck
        question="When did South Africa hold its first fully democratic, all-race election, and what was its outcome?"
        options={[
          { text: "In 1990, immediately after Mandela's release, and the National Party won", correct: false, explanation: "The election was not held until 1994, and the outcome is reversed — the ANC, not the National Party, won the 1994 election." },
          { text: "In April 1994, and the ANC won, with Nelson Mandela becoming South Africa's first Black president", correct: true, explanation: "Correct, per South African History Online and the Nelson Mandela Foundation. The election followed a four-year negotiated transition after Mandela's 1990 release." },
          { text: "In 1996, alongside the adoption of the new constitution", correct: false, explanation: "The election (April 1994) and the adoption of South Africa's permanent constitution (1996) were separate, sequential milestones — the election came first." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="End of apartheid: key documented milestones, 1990-1996"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-end-of-apartheid-transition-timeline.svg"
        altText="Horizontal timeline showing de Klerk's February 1990 announcement unbanning the ANC, Mandela's release later that month, the CODESA negotiations beginning in 1991 alongside repeal of core apartheid laws, the 1993 interim constitution and Nobel Peace Prize shared by Mandela and de Klerk, the April 1994 first democratic election and Mandela's inauguration as president, and the 1996 adoption of South Africa's permanent constitution."
      />
      <p>
      Laid out on a timeline, the six-year span between de Klerk&apos;s 1990 announcement and the 1996 constitution shows why historians consistently describe this as a negotiated, multi-year transition — each milestone (unbanning, release, negotiation, election, constitution) was a separate, documented step, not one single moment where apartheid simply &quot;ended.&quot;
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming apartheid ended the moment Nelson Mandela was released from prison in 1990.", fix: "His release began a four-year negotiation process; South Africa's first democratic election, which formally completed the transition, was not held until April 1994." },
          { mistake: "Treating the transition as driven by one person, Mandela, acting alone.", fix: "The negotiated transition involved many figures and organizations on multiple sides, notably including President F. W. de Klerk and the National Party government, the ANC leadership, and multi-party CODESA negotiations — which is part of why Mandela and de Klerk jointly received the 1993 Nobel Peace Prize." },
          { mistake: "Assuming the end of apartheid and the end of its legal/economic effects happened at the same time.", fix: "Core apartheid laws were formally repealed by 1991 and the political transition completed by 1994, but historians and South African institutions, including South African History Online, document that the social and economic effects of decades of enforced segregation persisted well beyond the transition and remain subjects of ongoing historical and policy study." },
        ]}
      />
      <MisconceptionCallout
        myth="Apartheid ended cleanly and instantly with Nelson Mandela's release from prison in 1990, rather than through a longer negotiated transition ending in 1994."
        reality={<p>Documented by South African History Online and the Nelson Mandela Foundation, Mandela&apos;s February 1990 release began a four-year negotiated transition, not an immediate end to apartheid. That process included the multi-party CODESA negotiations beginning in 1991, the formal repeal of core apartheid legislation in 1991, an interim constitution in 1993, and periods of serious political violence — before South Africa&apos;s first democratic, all-race election was finally held in April 1994, when Nelson Mandela was elected the country&apos;s first Black president.</p>}
      />

      <QuickCheck
        question="Which of these best reflects how South African History Online and the Nelson Mandela Foundation document the years between 1990 and 1994?"
        options={[
          { text: "A quiet, uneventful waiting period with no significant developments", correct: false, explanation: "The period included substantial negotiation, legislative change, and periods of serious political violence — it was an active, documented transition, not a quiet gap." },
          { text: "A negotiated, multi-year transition including CODESA talks, repeal of core apartheid laws, an interim constitution, and the first democratic election", correct: true, explanation: "Correct. This is the documented sequence of events historians and South African institutions point to when explaining how apartheid actually ended." },
          { text: "A period in which apartheid laws were reinstated before being repealed again in 1994", correct: false, explanation: "There is no documented reinstatement of apartheid laws during this period — the trajectory was toward dismantling apartheid legislation, not reversing course." },
        ]}
      />

      <EntryCalculator
        title="Years since South Africa's first democratic election"
        fields={[
          { key: "year", label: "Reference year (1994 election)", defaultValue: 1994 },
        ]}
        resultLabel="Years elapsed since that year"
        formula="yearsSinceYear"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see apartheid's end summarized as \"Mandela was released and apartheid ended,\" mentally restore the four-year negotiation process that followed.",
          "When the 1993 Nobel Peace Prize comes up, remember it was shared by Mandela and de Klerk, reflecting the negotiated nature of the transition.",
          "Notice the distinction between the legal repeal of apartheid laws (1991) and the completed democratic transition (the 1994 election) — they are two separate, documented milestones.",
          "If you want primary-source detail beyond a summary, the Nelson Mandela Foundation and South African History Online both maintain extensive, citable historical archives on this period.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "When did apartheid officially end in South Africa?", answer: "There is no single official end date historians agree on, but the transition is generally marked as complete with South Africa's first democratic, all-race election in April 1994, following a negotiation process that began after Nelson Mandela's release in February 1990." },
          { question: "What year was Nelson Mandela released from prison?", answer: "Nelson Mandela was released on February 11, 1990, after 27 years in prison, following President F. W. de Klerk's announcement days earlier unbanning the ANC and other anti-apartheid organizations." },
          { question: "Did Nelson Mandela end apartheid by himself?", answer: "No. Mandela was the central and most internationally recognized figure, but the transition was a negotiated process involving President F. W. de Klerk and the National Party government, the ANC and its leadership, and multi-party talks (CODESA) — which is part of why Mandela and de Klerk jointly received the 1993 Nobel Peace Prize." },
          { question: "What was the Truth and Reconciliation Commission?", answer: "A body established in South Africa in 1995, chaired by Archbishop Desmond Tutu, that investigated human rights violations committed during the apartheid era and heard testimony from both victims and perpetrators, as part of the country's post-apartheid reckoning with its history." },
          { question: "How long did apartheid last in South Africa?", answer: "Apartheid was formally established as government policy in 1948 and its core legislation was repealed by 1991, with the political transition completing in 1994 — a span of roughly 43 to 46 years, depending on which milestone is used as the endpoint." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
