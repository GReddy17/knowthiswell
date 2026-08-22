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
  title: "What Causes Climate Change (Human-Driven Mechanisms)",
  category: "environment-nature",
  order: 1,
  subtopic: "climate-change-fundamentals",
  tags: ["climate change", "greenhouse gases", "carbon dioxide", "radiative forcing", "global warming"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Human-caused climate change comes down to one measurable mechanism: burning fossil fuels adds CO2 to the atmosphere faster than natural processes remove it, and that extra CO2 traps more outgoing heat.",
  summary: "Climate change today is driven overwhelmingly by human activity — primarily burning fossil fuels and clearing forests — which raises atmospheric concentrations of carbon dioxide and other greenhouse gases well above pre-industrial levels, trapping additional heat that would otherwise radiate back to space.",
  sources: [
    { label: "NASA — Global Climate Change: Causes", url: "https://climate.nasa.gov/causes/" },
    { label: "NOAA — Global Monitoring Laboratory: Trends in CO2", url: "https://gml.noaa.gov/ccgg/trends/" },
    { label: "IPCC — Sixth Assessment Report, Working Group I Summary for Policymakers", url: "https://www.ipcc.ch/report/ar6/wg1/" },
  ],
  seeAlso: [
    "environment-nature/the-greenhouse-effect-applied-why-emissions-warm-the-planet",
    "environment-nature/global-warming-vs-climate-change-whats-the-difference",
    "environment-nature/understanding-your-carbon-footprint",
  ],
  glossary: [
    {"term":"Greenhouse gas","definition":"A gas that absorbs and re-emits infrared radiation, trapping heat in the atmosphere — carbon dioxide, methane, nitrous oxide, and water vapor are the main ones."},
    {"term":"Radiative forcing","definition":"A measure, in watts per square meter, of how much a factor (like added CO2) changes the balance of incoming and outgoing energy in Earth's atmosphere — positive forcing means net warming."},
    {"term":"Pre-industrial baseline","definition":"Atmospheric and temperature conditions from roughly 1850-1900, used as the reference point scientists compare current warming against."},
    {"term":"Carbon sink","definition":"A natural system — oceans, forests, soil — that absorbs more carbon dioxide than it releases, partially offsetting emissions."},
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
      "Atmospheric CO2 has risen from about 280 parts per million before industrialization to over 420 ppm today — almost entirely from burning fossil fuels and, to a lesser extent, deforestation.",
      "Extra greenhouse gases don't create heat from nothing; they slow down how fast Earth radiates existing heat back to space, so energy builds up in the climate system over time.",
      "The physical mechanism (CO2 absorbs and re-emits infrared radiation) has been measured in laboratories since the 1850s — the open scientific question today is about the pace and regional impact of warming, not whether added CO2 traps heat.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Burning coal, oil, and natural gas releases carbon dioxide that had been locked underground for millions of years. That extra <TermLink href="/environment-nature/what-causes-climate-change-human-driven-mechanisms">greenhouse gas</TermLink> builds up in the atmosphere and acts like a thickening blanket — it lets sunlight in but slows down how quickly heat radiates back out to space. NASA and NOAA measurements show atmospheric CO2 has climbed from about 280 parts per million (ppm) before the Industrial Revolution to over 420 ppm today, and global average temperature has risen alongside it by roughly 1.1°C since the late 1800s.</div>}
      detailed={<div className="prose-p">The mechanism is <TermLink href="/environment-nature/what-causes-climate-change-human-driven-mechanisms">radiative forcing</TermLink>: CO2 and other greenhouse gas molecules absorb infrared radiation at specific wavelengths and re-emit it in all directions, including back toward Earth&apos;s surface, rather than letting it escape directly to space. Adding more CO2 molecules increases the odds that outgoing infrared radiation gets intercepted and redirected downward before it leaves the atmosphere — this is physics confirmed in laboratory spectroscopy since John Tyndall&apos;s experiments in 1859, not a modern computer-model assumption. Natural <TermLink href="/environment-nature/what-causes-climate-change-human-driven-mechanisms">carbon sinks</TermLink> (oceans, forests, soil) absorb roughly half of human CO2 emissions each year, but the other half accumulates in the atmosphere, which is why concentrations keep climbing every year despite these sinks working continuously.</div>}
      />
      <FootnoteAside>Ice core records let scientists measure atmospheric CO2 going back 800,000 years — over that entire span, concentrations stayed between about 172 and 300 ppm, tracking natural ice age cycles. The jump to over 420 ppm within roughly two centuries has no precedent in that record, which is one reason scientists attribute the current rise to human activity rather than a natural cycle.</FootnoteAside>

      <p>
      The &quot;human-driven&quot; part isn&apos;t inferred indirectly — it&apos;s confirmed by directly measuring the chemical signature of the carbon being added.
      </p>

      <QuickCheck
      question="How do scientists know the extra atmospheric CO2 is specifically from burning fossil fuels, rather than from a natural source like volcanoes or the ocean?"
      options={[
      { text: "They can't actually tell the difference — it's inferred from timing alone", correct: false, explanation: "Scientists have a direct chemical method, not just a timing correlation — carbon from fossil fuels carries a distinct isotopic signature that natural sources don't share." },
      { text: "Fossil fuel carbon is depleted in the carbon-13 isotope compared to volcanic or oceanic carbon, and this isotopic signature shows up directly in atmospheric measurements, confirming the source", correct: true, explanation: "Correct. Fossil fuels come from ancient plant matter, which preferentially took up carbon-12 during photosynthesis, leaving fossil fuel carbon isotopically 'lighter' than volcanic CO2 — that signature is directly measurable in air samples and matches the fossil-fuel-burning pattern, not a volcanic one." },
      { text: "Volcanic activity has increased enough over the last century to explain the rise on its own", correct: false, explanation: "The opposite is true by scale — annual human CO2 emissions are roughly 100 times larger than the yearly average from all volcanic activity worldwide (USGS estimates), so volcanoes can't account for the modern increase." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Tracking the Keeling Curve (baseline case)</h3>
      <div className="prose-p">
      NOAA&apos;s Mauna Loa Observatory has measured atmospheric CO2 continuously since 1958. That year, concentration was about 315 ppm. By the mid-2020s, it had passed 420 ppm — a rise of over 100 ppm in roughly 65 years, a rate never seen in the 800,000-year ice core record. The curve also shows a small yearly zigzag (CO2 dips each Northern Hemisphere summer as plants absorb it, then rises each winter) riding on top of a steady upward climb — the seasonal wiggle is natural plant-cycle behavior, the upward climb underneath it is the human-driven trend.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Comparing warming potential across greenhouse gases (edge case / variation)</h3>
      <div className="prose-p">
      Not all greenhouse gases trap heat equally. Methane (from livestock, landfills, and natural gas leaks) traps roughly 80 times more heat than CO2 per molecule over a 20-year period, but breaks down in the atmosphere in about a decade, while CO2 persists for centuries. This is why climate reporting sometimes leads with CO2 (the dominant long-term driver by total volume) and sometimes with methane (the faster lever for near-term warming reduction) — they&apos;re not competing claims, they&apos;re two different gases with different lifetimes and different potency, both contributing to the same warming trend.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Deforestation as a double emissions source (real-world / applied case)</h3>
      <div className="prose-p">
      Clearing a forest contributes to climate change twice over: burning or decomposing the cut trees releases the carbon they had stored, and the missing forest can no longer absorb future CO2 as a carbon sink. The UN&apos;s Food and Agriculture Organization and NASA both track this — tropical deforestation alone is estimated to account for roughly 10% of global human-caused greenhouse gas emissions, making land-use change the second largest driver after fossil fuel combustion.
      </div>

      <QuickCheck
      question="Why does cutting down a forest count as a climate change contributor twice, not just once?"
      options={[
      { text: "It only counts once — the released carbon is the only effect that matters", correct: false, explanation: "There's a second effect beyond the one-time release: the forest's ongoing capacity to absorb future CO2 disappears along with the trees, which is a separate, continuing loss on top of the initial release." },
      { text: "Cutting the forest releases the carbon stored in the trees AND permanently removes a carbon sink that would have kept absorbing CO2 in the future — a one-time release plus an ongoing lost absorption capacity", correct: true, explanation: "Correct. The stored carbon released is a one-time addition to the atmosphere; the lost future absorption capacity is an ongoing effect that keeps compounding every year the forest isn't there to remove CO2." },
      { text: "It doesn't meaningfully affect climate change at all compared to fossil fuels", correct: false, explanation: "Land-use change, mostly deforestation, is estimated at roughly 10% of global human-caused emissions — a real and measurable contributor, even though fossil fuel combustion remains the larger single source." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The Keeling Curve: atmospheric CO2, 1958 to present"
      type="detail"
      svgSrc="/diagrams/environment-nature-what-causes-climate-change-human-driven-mechanisms-keeling-curve.svg"
      altText="A line chart showing atmospheric carbon dioxide concentration in parts per million on the vertical axis rising from about 315 ppm in 1958 to over 420 ppm in the present day, plotted as a steadily rising curve with small annual zigzags layered on top representing the seasonal plant-growth cycle, alongside a flat reference band showing the pre-industrial range of roughly 260 to 280 ppm at the bottom of the chart for scale."
      />
      <p>
      The steady upward climb, sustained across nearly seventy years of continuous direct measurement at one of the cleanest-air monitoring stations on Earth, is the core data behind attributing current warming to rising CO2 — it&apos;s not modeled or estimated, it&apos;s measured air.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating 'the climate has changed before, naturally' as evidence the current change is also natural.", fix: "Past natural climate shifts (ice ages, etc.) had known drivers — orbital cycles, volcanic activity — that don't match the current, much faster rate of change; the current rise is attributed to CO2 specifically because its isotopic signature, timing, and magnitude match fossil fuel combustion, not a known natural driver." },
      { mistake: "Assuming CO2 is a rare trace gas too small in quantity to matter.", fix: "Small concentration doesn't mean small effect — CO2's heat-trapping ability per molecule is well-established physics, and even a change from 280 to 420 ppm represents billions of tons of added atmospheric mass with a measurable radiative effect." },
      { mistake: "Treating volcanic eruptions as a major driver of the current warming trend.", fix: "Human CO2 emissions are roughly 100 times larger annually than the yearly average from all global volcanic activity combined (USGS) — volcanoes matter for occasional short-term cooling from ash/aerosols, not for the multi-decade warming trend." },
      ]}
      />
      <MisconceptionCallout
      myth="Scientists are still fundamentally divided on whether human activity causes climate change."
      reality={<p>Multiple independent literature surveys (including a widely cited 2021 review covering over 88,000 climate-related studies) find that over 99% of actively publishing climate scientists agree human activity is the dominant cause of observed warming since the mid-20th century. The genuine scientific debate today is about magnitude, regional impact, and pace of future change under different emissions scenarios — not about whether the human-driven mechanism itself is real.</p>}
      />

      <QuickCheck
      question="What is the actual subject of ongoing scientific debate regarding climate change?"
      options={[
      { text: "Whether human activity is causing the climate to change at all", correct: false, explanation: "This isn't where the active debate sits — over 99% of publishing climate scientists agree human activity is the dominant driver of observed warming; that particular question is settled in the scientific literature." },
      { text: "The precise pace, regional distribution, and future magnitude of warming under different emissions scenarios", correct: true, explanation: "Correct. Active research addresses questions like exactly how fast ice sheets will melt, how warming will vary by region, and which emissions pathway the world ends up on — refining projections, not re-litigating the basic cause-and-effect mechanism." },
      { text: "Whether CO2 actually absorbs infrared radiation in a laboratory setting", correct: false, explanation: "This is basic, long-confirmed physics, not a subject of debate — it's been experimentally measurable since the 1850s and is reproducible in any properly equipped lab today." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Check NOAA's Mauna Loa CO2 data directly (gml.noaa.gov/ccgg/trends) if you want to see the current real-time reading rather than trusting a secondhand figure.",
      "When evaluating a claim about climate change online, ask whether it addresses the isotopic and rate-of-change evidence, or just gestures at 'climate has changed before' without engaging with why the current change is attributed to fossil fuels specifically.",
      "Read the next post in this cluster on the greenhouse effect mechanism itself to understand exactly how trapped infrared radiation translates into measured warming.",
      "If you want to estimate your own contribution, the carbon footprint post in this series walks through the actual arithmetic using a real published emissions factor.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the main cause of climate change?", answer: "Burning fossil fuels (coal, oil, natural gas) for energy, which releases carbon dioxide that accumulates in the atmosphere and traps additional heat. NASA and NOAA attribute the overwhelming majority of warming since the mid-20th century to this human-driven mechanism." },
      { question: "How do scientists know climate change is caused by humans and not nature?", answer: "Through multiple independent lines of evidence: the isotopic signature of atmospheric carbon matches fossil fuels rather than volcanic or oceanic sources, the rate and magnitude of the CO2 rise has no precedent in the 800,000-year ice core record, and known natural drivers (solar activity, volcanic activity) don't match the timing or scale of observed warming." },
      { question: "Is CO2 really a small enough gas to cause this much warming?", answer: "Its atmospheric concentration is small in percentage terms, but its heat-trapping effect per molecule is well-established physics, confirmed in laboratories since the 1850s. The rise from 280 to over 420 ppm represents a measurable, sustained increase in radiative forcing on the entire climate system." },
      { question: "Do volcanoes cause more CO2 emissions than humans?", answer: "No — human activity emits roughly 100 times more CO2 annually than the yearly average of all volcanic activity worldwide, according to USGS estimates. Volcanoes can cause short-term cooling from sulfate aerosols after major eruptions, but they aren't a major driver of the long-term warming trend." },
      { question: "What percentage of scientists agree human activity causes climate change?", answer: "Multiple independent surveys of the peer-reviewed literature, including a comprehensive 2021 review of over 88,000 climate studies, find over 99% agreement among publishing climate scientists that human activity is the dominant cause of warming since the mid-20th century." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
