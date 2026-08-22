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
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Understanding Herd Immunity",
  category: "health-body-basics",
  order: 30,
  subtopic: "vaccination-and-preventive-health-literacy",
  tags: ["herd immunity", "R0", "vaccination coverage", "epidemiology"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Herd immunity is a direct mathematical consequence of a disease's contagiousness — the more contagious a disease, the higher the vaccination coverage needed to stop it from spreading through a population.",
  summary: "Herd immunity occurs when enough of a population is immune to a disease that sustained person-to-person transmission can no longer continue, indirectly protecting those who aren't immune — the exact coverage threshold needed is calculated directly from a disease's basic reproduction number (R0), using the formula 1 minus 1 divided by R0, expressed as a percentage.",
  sources: [
    { label: "CDC — Understanding Herd Immunity", url: "https://www.cdc.gov/vaccines/hcp/conversations/understanding-vacc-work.html" },
    { label: "World Health Organization — Herd Immunity, Lockdowns and COVID-19 (Q&A, general epidemiological principles)", url: "https://www.who.int/news-room/questions-and-answers/item/herd-immunity-lockdowns-and-covid-19" },
    { label: "Encyclopaedia Britannica — Herd Immunity", url: "https://www.britannica.com/science/herd-immunity" },
  ],
  seeAlso: [
    "health-body-basics/how-vaccines-work-general-immunology-overview",
    "health-body-basics/common-vaccine-myths-and-misconceptions",
    "health-body-basics/understanding-standard-vaccination-schedules",
  ],
  glossary: [
    {"term":"Basic reproduction number (R0)","definition":"The average number of new infections one contagious person generates in a completely susceptible population, with no immunity or control measures in place."},
    {"term":"Herd immunity threshold","definition":"The proportion of a population that needs to be immune for sustained transmission of a disease to stop, calculated as 1 minus 1 divided by R0."},
    {"term":"Susceptible individual","definition":"A person with no immunity to a given disease, who can be infected and can transmit it to others if exposed."},
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
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
      <strong>This entry explains the epidemiological concept and math behind herd immunity — it is general science literacy, not medical advice.</strong> Personal vaccination decisions belong with a doctor.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "Herd immunity happens when enough of a population is immune to a disease that sustained transmission chains can no longer continue, indirectly protecting even the people who aren't immune.",
      "The exact coverage level needed — the herd immunity threshold — is calculated directly from a disease's basic reproduction number (R0) using the formula 1 minus 1/R0, expressed as a percentage.",
      "More contagious diseases (higher R0) require a higher vaccination coverage to reach herd immunity — measles, with an unusually high R0, needs roughly 92 to 95 percent population immunity, far higher than many less contagious diseases.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A contagious disease spreads by jumping from an infected person to a <TermLink href="/health-body-basics/understanding-herd-immunity">susceptible individual</TermLink>. If enough people around an infected person are already immune, the chain of transmission runs out of new people to infect and dies out — even the few people who aren&apos;t immune benefit, because the disease simply doesn&apos;t reach them as often. That protective effect for the whole population, once enough people are immune, is herd immunity.</div>}
      detailed={<div className="prose-p">The exact immunity level needed to reach herd immunity isn&apos;t a fixed universal number — it&apos;s calculated directly from a disease&apos;s <TermLink href="/health-body-basics/understanding-herd-immunity">basic reproduction number</TermLink>, R0, using the <TermLink href="/health-body-basics/understanding-herd-immunity">herd immunity threshold</TermLink> formula: 1 minus 1/R0. R0 measures how many new infections one contagious person generates on average in a fully susceptible population. A disease with R0 of 2 needs roughly 50% immunity to stop sustained spread (1 − 1/2 = 0.5); a far more contagious disease with R0 of 15 needs about 93% immunity (1 − 1/15 ≈ 0.933). This relationship is exactly why different diseases have very different vaccination coverage targets — it&apos;s driven directly by how contagious each disease actually is, not an arbitrary policy choice.</div>}
      />
      <FootnoteAside>Measles is one of the most contagious diseases known, with an R0 commonly cited in the range of 12 to 18 in a fully susceptible population — which is why measles vaccination coverage targets (typically around 95%) are higher than for most other vaccine-preventable diseases, and why measles outbreaks can occur relatively quickly wherever vaccination coverage dips even a few percentage points below that threshold.</FootnoteAside>

      <p>
      This math also explains why herd immunity isn&apos;t an all-or-nothing switch — coverage below the threshold still reduces transmission and outbreak size compared to no immunity at all, even if it doesn&apos;t fully stop sustained spread.
      </p>

      <QuickCheck
      question="Why does measles require a much higher vaccination coverage percentage for herd immunity than many other diseases?"
      options={[
      { text: "Because the measles vaccine is less effective than other vaccines", correct: false, explanation: "The measles vaccine itself is highly effective — the higher coverage requirement comes from measles' contagiousness, not the vaccine's individual effectiveness." },
      { text: "Because measles has an unusually high basic reproduction number (R0), commonly cited around 12 to 18 — and the herd immunity threshold formula (1 − 1/R0) means higher R0 diseases require higher population immunity to stop sustained transmission", correct: true, explanation: "Correct. A higher R0 means each infected person, on average, infects more people in a susceptible population, requiring a larger immune share of the population to break that chain." },
      { text: "Because measles only spreads through direct contact, unlike other diseases", correct: false, explanation: "Measles is actually notable for spreading efficiently through airborne transmission, which contributes to its high R0 — the herd immunity threshold is driven by that overall contagiousness (R0), not the specific transmission route alone." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A disease with R0 of 2 (baseline case)</h3>
      <div className="prose-p">
      For a disease with R0 of 2, the herd immunity threshold is 1 − 1/2 = 0.5, or 50%. Once half the population is immune, each infected person, on average, encounters fewer than one new susceptible person to infect, and sustained transmission chains can no longer continue indefinitely.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Measles, with a much higher R0 (edge case / variation)</h3>
      <div className="prose-p">
      Using an R0 of 15 (within measles&apos; commonly cited range), the threshold is 1 − 1/15 ≈ 0.933, or about 93.3%. This is why public health targets for measles vaccination coverage are set around 95% — a small buffer above the calculated threshold, since real-world vaccine effectiveness isn&apos;t 100% and population mixing isn&apos;t perfectly uniform.
      </div>

      <QuickCheck
      question="If a community's actual measles vaccination coverage is 85%, below the roughly 93-95% herd immunity threshold, what does the math predict?"
      options={[
      { text: "Nothing changes — herd immunity is all-or-nothing, so 85% provides no benefit at all", correct: false, explanation: "Coverage below the threshold still substantially reduces transmission compared to no immunity — it just doesn't fully stop sustained transmission chains the way coverage at or above the threshold does." },
      { text: "Sustained transmission chains can still occur, since coverage remains below the calculated herd immunity threshold — outbreaks become more likely than they would be at or above that threshold, though overall spread is still reduced compared to a fully susceptible population", correct: true, explanation: "Correct. This exact scenario — coverage below the calculated threshold — has preceded a number of real, documented measles outbreaks in communities and regions with sub-threshold vaccination rates." },
      { text: "The disease automatically becomes less contagious when population immunity is high", correct: false, explanation: "A disease's inherent contagiousness (R0) doesn't change with population immunity — what changes is how far it can actually spread given how many susceptible people remain reachable." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why indirect protection matters for people who can&apos;t be vaccinated (real-world / applied case)</h3>
      <div className="prose-p">
      Some people — including infants too young for a given vaccine, and people with certain medical conditions — cannot receive some vaccines themselves. When population immunity around them is at or above the herd immunity threshold, they benefit indirectly: an infected person is statistically unlikely to encounter enough susceptible people to sustain a transmission chain that reaches them. This indirect protection is a documented, real epidemiological effect and one of the main public health justifications for population-level vaccination coverage targets, not just individual protection.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Transmission chains below vs. at the herd immunity threshold"
      type="comparison"
      svgSrc="/diagrams/health-body-basics-understanding-herd-immunity-transmission-chains.svg"
      altText="Two grids of dots representing people, immune individuals shown in one color and susceptible individuals in another. The first grid, below the herd immunity threshold, shows an infection chain successfully hopping between multiple susceptible dots across the grid. The second grid, at or above the herd immunity threshold, shows an infection surrounded mostly by immune dots, with the transmission chain dying out after very few hops."
      />
      <p>
      The visual difference between the two grids is the entire mechanism of herd immunity — the same disease, with the same inherent contagiousness, produces very different real-world spread depending on how many of its potential next hops are already immune.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating herd immunity as a single fixed percentage that applies to every disease.", fix: "The threshold is disease-specific, calculated from that disease's own R0 — a highly contagious disease needs a much higher threshold than a less contagious one." },
      { mistake: "Assuming coverage slightly below the threshold provides no protective benefit at all.", fix: "Protection scales continuously with coverage — being below the threshold means sustained transmission chains remain possible, not that vaccination up to that point did nothing." },
      { mistake: "Assuming herd immunity from natural infection and from vaccination are interchangeable strategies with equal cost.", fix: "Both can theoretically reach the same immunological threshold, but reaching it via natural infection means the population pays the price of the disease's real complications along the way — vaccination reaches the same threshold without that cost." },
      ]}
      />
      <MisconceptionCallout
      myth="Herd immunity means a disease simply disappears once 'enough' people have been exposed or vaccinated, regardless of which specific disease it is."
      reality={<p>The coverage level required is not a single universal number — it is calculated directly from each disease&apos;s own basic reproduction number using 1 − 1/R0. A less contagious disease (lower R0) may only need 40-60% immunity, while an unusually contagious disease like measles needs closer to 95%. Treating &quot;herd immunity&quot; as one fixed percentage across all diseases is a direct math error, not just an oversimplification.</p>}
      />

      <QuickCheck
      question="Two diseases have R0 values of 3 and 10 respectively. Which requires a higher vaccination coverage to reach herd immunity, and why?"
      options={[
      { text: "The disease with R0 of 3, because lower numbers always require more coverage", correct: false, explanation: "This has the relationship backwards — plugging into 1 − 1/R0, a higher R0 produces a higher threshold, not a lower one." },
      { text: "The disease with R0 of 10 requires higher coverage — 1 − 1/10 = 0.90 (90%) compared to 1 − 1/3 ≈ 0.667 (about 66.7%) for the R0-of-3 disease, since a more contagious disease needs more of the population immune to break its transmission chains", correct: true, explanation: "Correct. Higher R0 (more contagious) directly produces a higher calculated herd immunity threshold via the 1 − 1/R0 formula." },
      { text: "Both require exactly the same coverage, since herd immunity thresholds don't depend on R0", correct: false, explanation: "The herd immunity threshold is calculated directly from R0 using 1 − 1/R0 — different R0 values produce genuinely different thresholds, as the worked examples above show." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Calculate the herd immunity threshold from a disease's R0"
      fields={[
      { key: "r0", label: "Basic reproduction number (R0)", defaultValue: 15, step: 0.1 },
      ]}
      resultLabel="Herd immunity threshold (%)"
      formula="herdImmunityThreshold"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Remember that the herd immunity threshold is disease-specific, calculated from that disease's own R0 — not a single universal number.",
      "Use the calculator above to see how the threshold changes across different R0 values, from a mildly contagious disease to a highly contagious one like measles.",
      "Recognize that coverage below the threshold still reduces transmission, even though it doesn't fully stop sustained spread.",
      "Bring personal vaccination questions to a doctor — this entry covers the population-level epidemiological math, not individual medical decisions.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is herd immunity?", answer: "The point at which enough of a population is immune to a contagious disease that sustained person-to-person transmission can no longer continue, indirectly protecting even those who aren't immune." },
      { question: "How is the herd immunity threshold calculated?", answer: "Using the formula 1 − 1/R0, expressed as a percentage, where R0 is the disease's basic reproduction number — the average number of new infections one contagious person generates in a fully susceptible population." },
      { question: "Why does measles need such high vaccination coverage for herd immunity?", answer: "Measles has an unusually high R0, commonly cited around 12 to 18, which produces a herd immunity threshold around 92-95% when run through the 1 − 1/R0 formula." },
      { question: "Does herd immunity protect people who can't be vaccinated?", answer: "Yes — this indirect protection, sometimes called community immunity, is a documented epidemiological effect and one of the main public health justifications for population-level vaccination targets." },
      { question: "Is the herd immunity threshold the same for every disease?", answer: "No. It's calculated individually from each disease's own R0 — more contagious diseases (higher R0) require a higher immunity threshold than less contagious ones." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
