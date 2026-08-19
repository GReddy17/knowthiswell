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
  title: "Extinct & Endangered Species: How Extinction Risk Is Actually Measured",
  category: "general-science-facts",
  order: 39,
  subtopic: "life-science-and-nature",
  tags: [
    "endangered species",
    "extinction",
    "IUCN Red List",
    "conservation biology",
    "mass extinction",
    "population decline",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How conservation scientists actually classify extinction risk, and why today's extinction rate runs far above the natural background rate.",
  summary: "Extinction is the permanent loss of a species, and conservation scientists like the IUCN classify how close a living species is to that point using measurable criteria like population decline rate and range size.",
  sources: [
    { label: "IUCN Red List of Threatened Species", url: "https://www.iucnredlist.org/" },
    { label: "WWF — Species Directory and Extinction", url: "https://www.worldwildlife.org/species" },
    { label: "Smithsonian National Museum of Natural History — Mass Extinctions", url: "https://naturalhistory.si.edu/education/teaching-resources/paleontology/mass-extinctions" },
    { label: "National Geographic — Endangered Species", url: "https://www.nationalgeographic.com/animals/topic/endangered-species" },
  ],
  seeAlso: [
    "general-science-facts/evolution-and-natural-selection-basics",
    "general-science-facts/ecosystems-and-food-chains",
    "general-science-facts/animal-kingdom-facts",
    "general-science-facts/marine-life-and-ocean-biology",
  ],
  glossary: [
    { term: "Extinction", definition: "The permanent disappearance of an entire species, meaning no living members remain anywhere on Earth." },
    { term: "Endangered species", definition: "A species facing a very high risk of extinction in the near future, based on measurable criteria like population size, decline rate, and range." },
    { term: "IUCN Red List", definition: "A global inventory maintained by the International Union for Conservation of Nature that classifies species by extinction risk, from Least Concern to Extinct." },
    { term: "Background extinction rate", definition: "The natural, long-term average rate at which species go extinct over geological time, absent a mass extinction event, estimated from the fossil record." },
    { term: "Mass extinction", definition: "A relatively short geological period in which a large percentage of Earth's species go extinct simultaneously, such as the event that ended the age of non-avian dinosaurs roughly 66 million years ago." },
    { term: "Habitat loss", definition: "The destruction, fragmentation, or degradation of the natural environment a species depends on, considered the leading cause of species endangerment worldwide." },
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
          "The IUCN Red List classifies extinction risk using measurable criteria — population size, rate of decline, and geographic range — not a subjective judgment call, ranking species from Least Concern up to Extinct.",
          "Extinction is permanent by definition — once the last individual of a species dies, that genetic lineage cannot be recovered, which is why 'Extinct' and 'Critically Endangered' are treated as fundamentally different categories.",
          "Habitat loss, not hunting alone, is the leading driver of species endangerment worldwide today, according to IUCN and WWF data.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A species goes <TermLink href="/general-science-facts/extinct-and-endangered-species">extinct</TermLink> when every single member of it has died, with none left anywhere on Earth — it&apos;s permanent, with no way back once it happens. An <TermLink href="/general-science-facts/extinct-and-endangered-species">endangered species</TermLink> is one that&apos;s still alive today but at very high risk of extinction in the near future, usually because its population has dropped sharply, its habitat has shrunk, or both. Conservation groups don&apos;t just guess at which label applies — they use real data, mainly population trends and how much of a species&apos; living range remains, to assign a specific risk category.</div>}
        detailed={<div className="prose-p">The most widely used classification system is the <TermLink href="/general-science-facts/extinct-and-endangered-species">IUCN Red List</TermLink>, maintained by the International Union for Conservation of Nature, which sorts species into categories including Least Concern, Near Threatened, Vulnerable, Endangered, Critically Endangered, and Extinct (with &quot;Extinct in the Wild&quot; for species surviving only in captivity). Classification relies on quantitative criteria, most commonly population decline rate over a defined period (often 10 years or 3 generations, whichever is longer), current population size, and how fragmented or reduced a species&apos; geographic range is. This is measured against a natural baseline called the <TermLink href="/general-science-facts/extinct-and-endangered-species">background extinction rate</TermLink> — the typical, long-term rate at which species disappear over geological time absent a <TermLink href="/general-science-facts/extinct-and-endangered-species">mass extinction</TermLink> event, estimated from the fossil record at roughly 1 to 5 species per year across all of Earth&apos;s several million species (figures vary by study and taxonomic group). Current extinction rates for well-studied groups like vertebrates are estimated by many researchers, including those cited by IUCN and WWF, to run tens to potentially hundreds of times higher than this natural background rate — a gap large enough that a growing number of scientists refer to the current period as a possible sixth mass extinction, driven overwhelmingly by <TermLink href="/general-science-facts/extinct-and-endangered-species">habitat loss</TermLink>, along with overexploitation, invasive species, pollution, and climate change.</div>}
      />
      <FootnoteAside>The dodo, extinct by the late 1600s within roughly a century of European sailors&apos; arrival on its native Mauritius, is one of the earliest and most-cited examples of human-driven extinction — caused mainly by introduced predators (rats, pigs, monkeys) eating its eggs and by habitat destruction, more than direct hunting by sailors.</FootnoteAside>

      <p>
      That decline-rate criterion behind the Red List categories isn&apos;t just a label — it&apos;s an actual number, and running it forward across a few years shows exactly how a &quot;Vulnerable&quot; population can slide toward &quot;Critically Endangered&quot; faster than intuition suggests.
      </p>

      <QuickCheck
        question="Two species both have shrinking populations. Species A is losing 2% of its population per year; Species B is losing 20% per year. Why does the IUCN Red List treat these very differently, even though both are 'declining'?"
        options={[
          { text: "It doesn't treat them differently — any decline at all puts a species in the same risk category", correct: false, explanation: "The Red List uses quantitative decline-rate thresholds specifically because the rate matters enormously, not just the direction of the trend — 2% and 20% annual decline lead to very different timelines toward extinction risk." },
          { text: "Because decline rate compounds — a 20% annual loss shrinks a population far faster over time than a 2% loss, reaching a much smaller population within just a few years", correct: true, explanation: "Correct. Like any exponential decline, a higher percentage rate compounds dramatically faster — this is exactly why the IUCN Red List uses specific decline-rate thresholds (not just 'declining vs. not') to assign risk categories like Vulnerable, Endangered, or Critically Endangered." },
          { text: "Because Species B is likely a larger, more resilient species regardless of its decline rate", correct: false, explanation: "Resilience and body size aren't part of the core decline-rate criterion — the rate of population loss itself is what's being measured and compared here." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Projecting a population decline over 10 years (baseline case)</h3>
      <div className="prose-p">
      A population of 5,000 individuals is declining at 15% per year — a rate high enough to place a species under serious IUCN concern. Applying that rate year over year (not simply subtracting 15% × 10 years, since decline compounds): after 1 year, the population is roughly 4,250; after 5 years, roughly 2,218; after 10 years, roughly 984 — a drop of more than 80% from the starting population within a decade, even though &quot;15% per year&quot; sounds moderate in isolation. This compounding effect is precisely why the IUCN Red List&apos;s population-decline criteria are measured as a percentage rate over a defined time window rather than as a simple raw headcount drop — a steady percentage decline erodes a population far faster than linear intuition suggests.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The northern white rhino — functionally extinct but not yet formally extinct (edge case / variation)</h3>
      <div className="prose-p">
      As of recent counts, only two northern white rhinos remain alive, both female, meaning natural reproduction for the subspecies is no longer possible. This is a genuine edge case for extinction classification: the subspecies is often described as &quot;functionally extinct&quot; because it can no longer reproduce and sustain itself naturally, yet it isn&apos;t formally classified as fully Extinct, since living individuals still exist. Conservationists are pursuing advanced reproductive techniques, including using stored genetic material and southern white rhino surrogates, to attempt to preserve the subspecies&apos; genetic line despite this reproductive dead end. This case shows that &quot;close to extinct&quot; isn&apos;t a single, simple state — a species can lose the practical ability to sustain itself long before the very last individual dies, which is part of why conservation scientists track decline trends and reproductive viability, not just a simple headcount of survivors.
      </div>

      <QuickCheck
        question="Only two northern white rhinos remain alive, both female, unable to reproduce naturally. Why do conservationists describe this as 'functionally extinct' rather than simply 'extinct'?"
        options={[
          { text: "Because 'functionally extinct' and 'extinct' mean exactly the same thing, just different wording", correct: false, explanation: "They are distinct categories. 'Extinct' means zero living individuals remain anywhere; 'functionally extinct' means the population can no longer sustain or reproduce itself naturally, even though individuals are still alive." },
          { text: "Because living individuals still exist, even though natural reproduction for the subspecies is no longer possible — a species isn't formally extinct until the very last individual dies", correct: true, explanation: "Correct. Extinction requires zero living individuals. 'Functionally extinct' describes a population that has effectively lost its ability to sustain itself through natural reproduction while individuals are still alive — a meaningfully different, earlier stage." },
          { text: "Because scientists are certain the subspecies will be saved through cloning, so it doesn't count as truly at risk", correct: false, explanation: "The described conservation efforts are attempts, not guaranteed outcomes — the 'functionally extinct' label reflects the current reproductive reality, not a prediction about future success." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How the bald eagle&apos;s recovery shows the Red List categories can move both directions (real-world / applied case)</h3>
      <p>
      The bald eagle was listed as endangered in the contiguous United States by the mid-20th century, its population crashing largely due to the pesticide DDT thinning eggshells until they broke under the weight of nesting parents, combined with habitat loss and hunting. Following the 1972 U.S. ban on DDT, along with habitat protection and legal protection under the Endangered Species Act, bald eagle populations recovered substantially over subsequent decades, and the species was removed from the U.S. endangered species list in 2007. This is a real-world, applied demonstration that extinction-risk categories aren&apos;t a one-way ratchet toward extinction — a species&apos; classification can improve significantly when the specific factors driving its decline (in this case, a single identifiable chemical) are directly addressed, which is exactly the kind of evidence-based, data-driven outcome the whole Red List classification system is designed to track and respond to.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The IUCN Red List extinction risk categories, from Least Concern to Extinct"
        type="comparison"
        svgSrc="/diagrams/general-science-facts-extinct-and-endangered-species-iucn-categories.svg"
        altText="A horizontal bar divided into seven increasing risk categories from left to right: Least Concern, Near Threatened, Vulnerable, Endangered, Critically Endangered, Extinct in the Wild, and Extinct, colored on a gradient from green at the low-risk end through yellow and orange to dark red and black at the extinct end, with a small icon of a representative species placed at an example category (bald eagle recovered to Least Concern, northern white rhino at the edge of Extinct in the Wild, dodo at Extinct)."
      />
      <p>
      The gradient captures something the word &quot;endangered&quot; alone doesn&apos;t: extinction risk is a spectrum with defined, measurable steps, not a simple binary of &quot;fine&quot; versus &quot;gone.&quot; A species can move in either direction along this bar — the bald eagle moved left (toward lower risk) after its main threat was addressed, while a species facing worsening habitat loss or declining population moves right, toward Critically Endangered and, eventually, if nothing changes, Extinct — the one category on the bar that, once reached, cannot be reversed.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming hunting is always the main cause of species endangerment.", fix: "Habitat loss and degradation is the leading driver of species endangerment worldwide today, according to IUCN and WWF data — hunting and overexploitation are significant but generally secondary factors for most currently threatened species." },
          { mistake: "Treating 'endangered' and 'extinct' as basically the same level of concern.", fix: "They're fundamentally different: endangered species are still alive and, as the bald eagle shows, can recover if the right conditions are restored. Extinction is permanent — there's no possible recovery once every individual is gone." },
          { mistake: "Assuming a species with a large total population can't be at meaningful extinction risk.", fix: "Rate of decline and range fragmentation matter as much as raw population size in Red List criteria — a large but rapidly declining or severely fragmented population can still be classified as highly threatened." },
        ]}
      />
      <MisconceptionCallout
        myth="Extinction is a slow, purely natural background process that has always happened at roughly the same steady rate throughout Earth's history, so today's extinctions aren't unusual."
        reality={<p>The fossil record shows a natural, ongoing background extinction rate, but it also shows that this baseline has been dramatically exceeded at specific points in Earth&apos;s history — five recognized mass extinction events, including the one that ended the age of non-avian dinosaurs roughly 66 million years ago. Many researchers, drawing on data compiled by organizations including the IUCN and cited by the Smithsonian, estimate that current extinction rates for well-studied groups like vertebrates run tens to potentially hundreds of times above the natural background rate — a gap large enough that a substantial body of scientific opinion describes the present era as a possible sixth mass extinction, this one driven primarily by human activity (habitat loss, climate change, invasive species, overexploitation) rather than the asteroid impacts or volcanic events behind earlier mass extinctions.</p>}
      />

      <QuickCheck
        question="Someone claims today's extinctions aren't a real concern because species have always gone extinct throughout Earth's history. What's the most accurate response?"
        options={[
          { text: "They're correct — extinction has always happened at the same steady rate, so nothing unusual is occurring now", correct: false, explanation: "This ignores the rate difference. A natural background rate does exist, but current estimated extinction rates for well-studied groups run far above that historical baseline according to IUCN-cited research, which is what concerns scientists." },
          { text: "A natural background extinction rate does exist, but current extinction rates for well-studied groups are estimated to run tens to potentially hundreds of times higher than that baseline — a large enough gap that many scientists treat it as a possible sixth mass extinction", correct: true, explanation: "Correct. The concern isn't that extinction happens at all — it always has — it's that the current rate substantially exceeds the natural background rate, a pattern otherwise only seen during recognized mass extinction events in the fossil record." },
          { text: "Extinction rates can't actually be measured or compared across different time periods", correct: false, explanation: "Extinction rates can be estimated from the fossil record for historical baselines and from direct population monitoring for current rates — comparing the two is exactly how researchers identify today's rate as unusually elevated." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Project a population's decline over time (compounding decline rate)"
        fields={[
          { key: "currentPopulation", label: "Current population", defaultValue: 5000 },
          { key: "annualDeclinePercent", label: "Annual decline rate (%)", defaultValue: 15, step: 0.5 },
          { key: "years", label: "Years into the future", defaultValue: 10, step: 1 },
        ]}
        resultLabel="Projected population remaining"
        formula="populationDeclineProjection"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Try the calculator above with a lower decline rate (like 3%) versus a higher one (like 25%) over the same 10 years to see just how much the compounding rate itself matters, not just the starting population.",
          "Look up a species you're curious about on the IUCN Red List website to see its actual assigned category and the specific data behind that classification.",
          "Next time you hear 'endangered,' mentally check whether the story is about population decline, habitat loss, or both — the two most common Red List drivers.",
          "Read the related entry on Evolution & Natural Selection Basics to see the flip side of this topic: how new species arise, not just how they're lost.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between endangered and extinct?", answer: "Endangered means a species is still alive but at very high risk of extinction in the near future, based on measurable factors like population decline and habitat loss. Extinct means every individual of that species has died — a permanent, irreversible state." },
          { question: "How does the IUCN Red List classify species?", answer: "Using quantitative criteria — mainly population decline rate over a defined period, current population size, and how reduced or fragmented the species' range is — sorted into categories from Least Concern up to Extinct." },
          { question: "What is the main cause of species becoming endangered?", answer: "Habitat loss and degradation is the leading driver worldwide today, according to IUCN and WWF data, ahead of overexploitation (hunting and fishing), invasive species, pollution, and climate change, though most endangered species face several of these factors combined." },
          { question: "Is Earth currently in a mass extinction?", answer: "Many researchers, citing rates well above the natural background extinction rate for well-studied groups like vertebrates, describe the current period as a possible sixth mass extinction, driven primarily by human activity rather than the asteroid or volcanic causes behind past mass extinctions." },
          { question: "Can an endangered species recover and become less at risk?", answer: "Yes — the bald eagle is a well-documented example. After the pesticide DDT (its main threat) was banned in the U.S. in 1972 and habitat protections were enforced, its population recovered enough for it to be removed from the U.S. endangered species list in 2007." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
