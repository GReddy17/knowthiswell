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
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Common Environmental Myths & Misconceptions",
  category: "environment-nature",
  order: 42,
  subtopic: "environment-curiosities",
  tags: ["environmental myths", "climate misconceptions", "recycling myths", "sustainability facts", "environmental literacy"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Several widely repeated environmental claims — from 'plastic recycling solves plastic waste' to 'electric cars are worse for the planet' — don't hold up against the actual data.",
  summary: "Environmental misconceptions persist because they sound plausible and are rarely fact-checked against the underlying data — this entry corrects five of the most common ones with sourced numbers.",
  sources: [
    { label: "EPA — Plastics: Material-Specific Data", url: "https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/plastics-material-specific-data" },
    { label: "National Geographic — Climate Misconceptions", url: "https://www.nationalgeographic.com/environment" },
    { label: "Ellen MacArthur Foundation — The New Plastics Economy", url: "https://www.ellenmacarthurfoundation.org/topics/plastics/overview" },
    { label: "U.S. Department of Energy — Alternative Fuels Data Center: Electric Vehicle Lifecycle Emissions", url: "https://afdc.energy.gov/vehicles/electric-emissions" },
  ],
  seeAlso: [
    "environment-nature/what-causes-climate-change-human-driven-mechanisms",
    "environment-nature/the-reduce-reuse-recycle-hierarchy-explained",
    "environment-nature/what-a-protected-area-or-national-park-actually-does",
    "environment-nature/what-the-paris-agreement-actually-commits-countries-to",
  ],
  glossary: [
    {"term":"Downcycling","definition":"Recycling a material into a lower-quality product than the original, rather than back into the same type of item — most plastic recycling is downcycling, which is why plastic can typically only be recycled once or twice, not indefinitely."},
    {"term":"Lifecycle emissions","definition":"The total greenhouse gas emissions produced by a product across its entire existence — manufacturing, use, and disposal — not just the emissions produced while it's being used."},
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
      "Most plastic that gets put in a recycling bin is not actually recycled back into new plastic — the US plastic recycling rate has hovered around 5-9% for years, and most plastic is downcycled at best, landfilled or incinerated at worst.",
      "Electric vehicles produce more emissions during manufacturing (mainly from battery production) than gasoline cars, but they make up for it within roughly 1-2 years of typical driving and produce dramatically less lifecycle emissions overall — the 'EVs are worse for the planet' claim only looks at one slice of the lifecycle.",
      "\"Climate\" and \"weather\" are different timescales — a single cold winter doesn't disprove a decades-long warming trend, any more than one hot day proves it.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Environmental myths spread the same way most myths do — they sound intuitively true, they get repeated without anyone checking the original data, and by the time they&apos;re common knowledge, correcting them feels like arguing against common sense. The plastic recycling myth is a good example: putting a bottle in a blue bin feels like it closes the loop, but most plastic never becomes new plastic again. The electric vehicle myth works differently — it takes a real fact (battery manufacturing has a bigger carbon footprint than building a gas engine) and stops the analysis right there, before the vehicle has driven a single mile.</div>}
      detailed={<div className="prose-p">The common thread across most environmental misconceptions is a scope problem: comparing two things at different points in their <TermLink href="/environment-nature/common-environmental-myths-and-misconceptions">lifecycle emissions</TermLink> rather than across their full lifespan, or citing a real number without the full context that makes it meaningful. Plastic&apos;s technical recyclability is real — polyethylene terephthalate (PET, the material of most beverage bottles) can genuinely be melted and reformed — but the low actual recycling rate stems from contamination, sorting costs, and <TermLink href="/environment-nature/common-environmental-myths-and-misconceptions">downcycling</TermLink> limits that never get mentioned in \&quot;just recycle it\&quot; messaging. The EV myth stops the emissions accounting at the factory gate instead of running it through the vehicle&apos;s full operating life, where the picture reverses.</div>}
      />
      <FootnoteAside>Not every environmental claim that sounds too good (or too bad) to be true is automatically false — the corrective habit here isn&apos;t reflexive skepticism, it&apos;s checking whether a claim is being measured over the right timeframe and the right scope before accepting or rejecting it.</FootnoteAside>

      <p>
      Below are three of the most persistent environmental myths, each checked against the actual published data.
      </p>

      <QuickCheck
      question="Someone says 'recycling plastic doesn't matter since so little of it actually gets recycled anyway.' What's the more accurate framing?"
      options={[
      { text: "They're completely right — recycling plastic accomplishes nothing and should be abandoned entirely", correct: false, explanation: "Recycling still reduces virgin plastic production and landfill volume for the plastic that IS successfully recycled — the accurate correction is about the low rate and the downcycling limits, not that recycling has zero value." },
      { text: "The low actual recycling rate is a real, documented problem worth knowing — but it's an argument for reducing plastic use and improving recycling systems, not evidence that recycling is pointless", correct: true, explanation: "Correct. A low rate is a real data point, but the conclusion that follows from it is 'use less plastic and demand better systems,' not 'recycling accomplishes nothing.'" },
      { text: "Plastic recycling rates are actually close to 90%, so this claim is simply wrong", correct: false, explanation: "The opposite error — US plastic recycling rates have been documented in the single digits to low teens for years, well below 90%." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The plastic recycling rate myth (baseline case)</h3>
      <div className="prose-p">
      Myth: &quot;Plastic you put in the recycling bin gets turned back into plastic products.&quot; Reality, per EPA material-specific data: US plastic recycling has run in roughly the 5-9% range in recent reporting years. The rest is landfilled, incinerated, or in earlier decades exported abroad. Most plastic that IS recycled is downcycled — a clear PET bottle typically becomes carpet fiber or polyester textile, not a new clear bottle — because repeated melting degrades plastic polymers in a way that doesn&apos;t happen the same way with glass or aluminum, which recycle back into their original form far more times.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The electric vehicle emissions myth (edge case / variation)</h3>
      <div className="prose-p">
      Myth: &quot;Building an EV&apos;s battery creates so much pollution that EVs are actually worse for the environment than gas cars.&quot; The battery-manufacturing emissions claim is real — it&apos;s the &quot;therefore worse overall&quot; conclusion that&apos;s wrong. US Department of Energy lifecycle analyses show that EVs typically offset their higher manufacturing emissions within roughly the first one to two years of average driving, after which their lower per-mile emissions (no tailpipe emissions, and grid electricity is on average cleaner than gasoline combustion even accounting for power-plant emissions) put them well ahead of a comparable gas vehicle over a typical 10-15 year vehicle lifespan.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: One cold winter vs decades of climate data (real-world / applied case)</h3>
      <div className="prose-p">
      A viral claim after a severe winter storm: &quot;how can global warming be real if it&apos;s this cold?&quot; This conflates weather (conditions over days) with climate (averaged trends over decades). A warming planet still has cold snaps — in fact, a warmer Arctic can weaken the polar vortex and push extreme cold further south more often, which is the opposite of what the myth assumes. The actual climate signal is measured in decades-long global average temperature trends, not any single storm, and that long-run trend is unambiguously warming according to every major national and international climate agency&apos;s data.
      </div>

      <QuickCheck
      question="Why doesn't one unusually cold week disprove a long-term warming trend?"
      options={[
      { text: "Because weather (short-term, local conditions) and climate (long-term, global averages) are measured on completely different timescales — a cold week is weather noise, not a climate signal", correct: true, explanation: "Correct. Climate trends are measured in decades of averaged global data; any single week, including a cold one, sits inside the normal year-to-year variability around that long-term trend." },
      { text: "It does disprove it — a cold week directly contradicts global warming", correct: false, explanation: "This is exactly the weather-vs-climate conflation the myth relies on; a cold week is consistent with a warming climate because natural variability around a rising trend still includes cold extremes, sometimes even more of them regionally." },
      { text: "Cold weather only happens in a warming climate, never in a stable one", correct: false, explanation: "Cold weather happens under any climate state — the point isn't that cold weather is unique to warming, it's that a single data point of any kind can't represent a decades-long trend." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Myth vs. reality: three environmental claims checked against the data"
      type="comparison"
      svgSrc="/diagrams/environment-nature-common-environmental-myths-and-misconceptions-myth-vs-fact.svg"
      altText="Three rows, each with a myth on the left in a red-tinted box and the corrected reality on the right in a green-tinted box: row one, plastic recycling rate myth 'gets recycled' vs reality '5 to 9 percent actually recycled'; row two, EV emissions myth 'worse for the planet' vs reality 'offsets manufacturing emissions within 1 to 2 years'; row three, cold winter myth 'disproves warming' vs reality 'weather noise around a decades-long warming trend'."
      />
      <p>
      Each row follows the same pattern: a real, verifiable fact on the myth side (plastic bottles ARE technically recyclable; EV batteries DO have higher manufacturing emissions; it WAS a genuinely cold week) gets stretched into a conclusion the fact doesn&apos;t actually support once the full data and timeframe are considered.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Accepting a claim because it cites a real, specific-sounding statistic without checking the source or the full context around it.", fix: "Look for the primary source (EPA, IUCN, DOE, a named agency) rather than a share graphic, and check whether the statistic is being applied over the right scope and timeframe." },
      { mistake: "Assuming a partial truth (batteries have high manufacturing emissions) automatically implies the popularly-repeated conclusion (EVs are worse overall).", fix: "Ask whether the full picture — the entire lifecycle, not just one stage — has actually been accounted for before accepting the conclusion." },
      { mistake: "Treating a single weather event as evidence for or against a long-term climate trend.", fix: "Remember that climate trends are calculated from decades of averaged global data — a single storm, heat wave, or cold snap is one data point inside normal variability, not a trend by itself." },
      ]}
      />
      <MisconceptionCallout
      myth="If an environmental claim turns out to be wrong or overstated in one direction, the safe assumption is that the opposite extreme must be true instead."
      reality={<p>Debunking an exaggerated myth doesn&apos;t mean the underlying issue doesn&apos;t exist — a low plastic recycling rate doesn&apos;t mean plastic waste is fine, and EVs offsetting their manufacturing emissions doesn&apos;t mean they have zero environmental footprint. The corrective is usually a more accurate, nuanced middle position backed by real data, not a swing to the opposite overstatement.</p>}
      />

      <QuickCheck
      question="After learning EVs offset their higher manufacturing emissions within 1-2 years of driving, what's the most accurate conclusion?"
      options={[
      { text: "EVs have literally zero environmental impact once that offset period is over", correct: false, explanation: "EVs still have real environmental costs — mining for battery materials, electricity generation emissions (which vary by grid), and end-of-life battery disposal — offsetting manufacturing emissions doesn't mean zero footprint." },
      { text: "Over a typical vehicle lifespan, EVs produce substantially lower total lifecycle emissions than comparable gasoline vehicles, even though they start with a manufacturing-emissions disadvantage", correct: true, explanation: "Correct — this is the accurate, nuanced conclusion the DOE lifecycle data actually supports, distinct from both the myth ('EVs are worse') and an overcorrection ('EVs have no footprint at all')." },
      { text: "The manufacturing-emissions claim about EV batteries must be entirely fabricated since the overall myth is wrong", correct: false, explanation: "The battery-manufacturing emissions claim is a real, documented fact — it's the leap from that true fact to 'therefore EVs are worse overall' that doesn't hold up, not the underlying fact itself." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Before sharing an environmental statistic, check whether it comes from a named primary source (EPA, IUCN, DOE, UNEP) rather than an unsourced graphic or headline.",
      "When you see a claim that stretches a real fact into a sweeping conclusion, ask what timeframe and scope the original data actually covers.",
      "Read the other topic-10 entries linked below (climate change causes, the recycling hierarchy, protected areas, and the Paris Agreement) for the full sourced picture behind each myth covered here.",
      "Resist the urge to overcorrect — debunking an exaggerated claim doesn't mean the opposite extreme is automatically true.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Is it true that recycling doesn't actually work?", answer: "It's more accurate that plastic recycling specifically has a low real-world success rate (roughly 5-9% in the US per EPA data) — glass, aluminum, and paper recycle at meaningfully higher rates and don't degrade the same way plastic does through repeated processing." },
      { question: "Are electric cars actually worse for the environment than gas cars?", answer: "No — EVs have higher manufacturing emissions upfront (mainly from battery production) but offset that within roughly 1-2 years of typical driving, after which they produce substantially lower lifecycle emissions than comparable gasoline vehicles, per US Department of Energy analysis." },
      { question: "Does a cold winter disprove climate change?", answer: "No. Weather is short-term and local; climate is a decades-long global average trend. A single cold week is normal variability around that trend, not evidence against it — and a warmer Arctic can even make some regional cold snaps more likely by weakening the polar vortex." },
      { question: "Why do environmental myths spread so easily?", answer: "They usually start from a real, verifiable fact and stretch it into a broader conclusion the fact doesn't fully support — the partial truth makes the myth sound credible, and the missing context (timeframe, full lifecycle, actual rate) rarely gets checked before it's repeated." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
