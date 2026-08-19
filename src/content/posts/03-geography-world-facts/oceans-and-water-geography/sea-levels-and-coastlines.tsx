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
  title: "Sea Levels & Coastlines",
  category: "geography-world-facts",
  order: 44,
  subtopic: "oceans-and-water-geography",
  tags: [
    "sea level rise",
    "coastlines",
    "thermal expansion",
    "ice melt",
    "subsidence",
    "climate geography",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why global sea level has risen roughly 21-24 cm since 1880, what actually causes it, and why the rise is measurably worse for some coastlines than others.",
  summary: "Sea level rise is the ongoing increase in the average height of the ocean's surface, driven mainly by thermal expansion of warming seawater and melting land ice, and it does not affect every coastline equally.",
  sources: [
    { label: "NASA Sea Level Change Portal", url: "https://sealevel.nasa.gov/" },
    { label: "NOAA — Sea Level Trends (Tides & Currents)", url: "https://tidesandcurrents.noaa.gov/sltrends/sltrends.html" },
    { label: "NOAA — Is sea level rising?", url: "https://oceanservice.noaa.gov/facts/sealevel.html" },
    { label: "IPCC — Sixth Assessment Report, Working Group I", url: "https://www.ipcc.ch/report/ar6/wg1/" },
  ],
  seeAlso: [
    "geography-world-facts/the-five-oceans-explained",
    "geography-world-facts/ocean-currents-and-their-effects",
    "geography-world-facts/coral-reefs-and-marine-geography",
    "geography-world-facts/climate-zones-explained",
    "general-science-facts/density-and-buoyancy",
  ],
  glossary: [
    { term: "Sea level rise", definition: "The ongoing, long-term increase in the average height of the ocean's surface, measured relative to a fixed reference point on land or via satellite." },
    { term: "Thermal expansion", definition: "The tendency of water to increase in volume as it warms — a major contributor to sea level rise, since warmer water simply takes up more space." },
    { term: "Land subsidence", definition: "The sinking or settling of land, which can make local relative sea level rise faster than the global average even without any change in the ocean itself." },
    { term: "Post-glacial rebound", definition: "The slow rise of land that was once compressed under the weight of ice-age glaciers and is still springing back upward now that the ice is gone — it can make local relative sea level appear to fall even as global sea level rises." },
    { term: "Satellite altimetry", definition: "A technique using satellites to precisely measure the height of the ocean's surface from space, the primary method used to track global sea level since the early 1990s." },
    { term: "Low-lying coastal zone", definition: "Land close to sea level, typically defined as below about 10 meters elevation, that is especially exposed to flooding, erosion, and permanent inundation from sea level rise." },
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
          "Global mean sea level has risen roughly 21-24 cm (about 8-9 inches) since 1880, and the rate of rise has accelerated in recent decades, per NASA and NOAA satellite and tide-gauge records.",
          "Two mechanisms drive most of the rise: thermal expansion (warmer water simply takes up more volume) and melting land ice from glaciers and the Greenland and Antarctic ice sheets.",
          "Sea level rise is not uniform — local factors like land subsidence, post-glacial rebound, and regional ocean currents mean some coastlines are experiencing faster relative rise than the global average, while a few are effectively seeing sea level fall.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/geography-world-facts/sea-levels-and-coastlines">Sea level rise</TermLink> means the ocean&apos;s average surface height is going up over time, measured against a fixed point like a coastal tide gauge or from satellites orbiting overhead. It happens for two main reasons: as ocean water warms, it physically expands and takes up more space, and as glaciers and ice sheets on land melt, that water eventually flows into the ocean and adds to its total volume. Since 1880, global average sea level has risen roughly 21-24 cm, and satellite records since the early 1990s show the pace of that rise has been speeding up, not staying constant.</div>}
        detailed={<div className="prose-p">The two dominant physical mechanisms behind sea level rise are <TermLink href="/geography-world-facts/sea-levels-and-coastlines">thermal expansion</TermLink> of ocean water as it absorbs heat, and the addition of new water mass from melting land ice — primarily mountain glaciers and the much larger Greenland and Antarctic ice sheets. Melting sea ice, by contrast, contributes essentially nothing to sea level rise, because it&apos;s already floating in the ocean and displacing its own weight in water (the same principle behind an ice cube not overflowing a full glass as it melts). Crucially, the rise isn&apos;t uniform across the globe: ocean currents and wind patterns pile up warm water in some regions more than others, some coastlines are experiencing <TermLink href="/geography-world-facts/sea-levels-and-coastlines">land subsidence</TermLink> (sinking) from groundwater extraction or natural settling, which adds to their local relative sea level rise, and other regions are still undergoing <TermLink href="/geography-world-facts/sea-levels-and-coastlines">post-glacial rebound</TermLink> — land that was compressed under massive ice-age glaciers and is still slowly rising now that the ice is gone, which can make local relative sea level appear stable or even fall.</div>}
      />
      <FootnoteAside>Melting floating sea ice doesn&apos;t raise sea level at all — it&apos;s already displacing its own weight in water, the same reason a melting ice cube doesn&apos;t overflow a full glass. Sea level rise comes from land ice (glaciers and ice sheets) melting and adding genuinely new water to the ocean, plus warming water simply expanding.</FootnoteAside>

      <p>
      That distinction between global average rise and what a specific coastline actually experiences turns out to matter enormously — the same amount of global sea level rise can mean very different things depending on where you live.
      </p>

      <QuickCheck
        question="Which best describes the two main causes of global sea level rise?"
        options={[
          { text: "Melting sea ice floating on the ocean's surface, and increased rainfall", correct: false, explanation: "Floating sea ice melting doesn't raise sea level — it's already displacing its own weight in water. The two dominant causes are thermal expansion of ocean water and melting land ice (glaciers and ice sheets), not floating sea ice or rainfall." },
          { text: "Thermal expansion of warming ocean water, and melted land ice (glaciers and ice sheets) adding new water to the ocean", correct: true, explanation: "Correct. As ocean water warms it expands in volume, and as land-based ice melts, that water flows into the ocean and adds to its total mass — together these are the two dominant drivers of global sea level rise." },
          { text: "The ocean floor itself sinking deeper across the entire planet", correct: false, explanation: "Global-scale ocean floor sinking isn't the mechanism at work — sea level rise is driven by changes in the water itself (its temperature and total volume), not by the seafloor's overall depth changing worldwide." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Projecting sea level rise over a set number of years (baseline case)</h3>
      <div className="prose-p">
      Using a recent satellite-era average rate of roughly 3.3-4.0 mm of global sea level rise per year, a straightforward linear projection over 30 years adds up to about 10-12 cm of additional rise, on top of whatever the starting baseline already is. This is a simplification — actual rise has been accelerating rather than staying perfectly linear, per NASA and IPCC data — but it&apos;s a useful baseline estimate for understanding scale: over a single human generation, even a &quot;small&quot; annual rate compounds into a measurable, coastline-relevant change.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why some coastlines are rising while others sink faster than average (edge case / variation)</h3>
      <div className="prose-p">
      Parts of Scandinavia, including areas of Sweden and Finland, are actually experiencing a local <em>fall</em> in relative sea level, even as the global ocean rises. During the last ice age, these regions were pressed down under kilometers-thick glaciers; with that weight now gone, the land is still slowly rebounding upward — in some spots faster than global sea level is rising, producing a net local fall. At the opposite extreme, parts of the U.S. Gulf Coast in Louisiana are experiencing some of the fastest relative sea level rise on Earth, because the land itself is subsiding — sinking due to a mix of natural sediment compaction, groundwater and oil/gas extraction, and reduced sediment deposits from engineered river channels — on top of the global rise itself. Two coastlines can experience the exact same amount of &quot;global&quot; sea level rise and see completely opposite real-world outcomes because of what the land underneath them is doing.
      </div>

      <QuickCheck
        question="Global sea level is rising overall, yet tide gauges in parts of Sweden show local sea level actually falling. What explains this?"
        options={[
          { text: "The measurements in Sweden must be wrong, since global sea level rise should show up everywhere equally", correct: false, explanation: "The measurements are accurate. Sea level rise isn't uniform — local land movement can outweigh the global signal in specific regions, and this is a well-documented, expected phenomenon, not a measurement error." },
          { text: "Post-glacial rebound is causing the land in Scandinavia to rise faster than global sea level itself is rising", correct: true, explanation: "Correct. Land once compressed under ice-age glaciers is still slowly rising now that the ice is gone. In parts of Scandinavia, that uplift outpaces the global rate of sea level rise, producing a local net fall in relative sea level." },
          { text: "Sweden's coastline is somehow protected from the ocean's rising water by its geographic location", correct: false, explanation: "There's no geographic 'protection' from a globally connected ocean — the explanation is that the land itself is physically rising (post-glacial rebound), not that the water is avoiding that coastline." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The Netherlands&apos; engineered response to rising water (real-world / applied case)</h3>
      <p>
      Roughly 26% of the Netherlands sits below sea level, and the country has spent centuries managing the ongoing risk this creates, most notably after a catastrophic North Sea flood in 1953 killed over 1,800 people and prompted the construction of the Delta Works — a large-scale system of dams, sluices, storm surge barriers, and dykes designed to protect the country&apos;s low-lying coastline. As global sea level continues to rise, the Netherlands has continued reinforcing and adapting this system, treating coastal defense as continuous infrastructure rather than a finished project — a direct, engineered response to the same physical process (rising water levels against a fixed, low-lying coastline) discussed throughout this entry.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Global mean sea level rise since 1880, and its two main contributing factors"
        type="detail"
        svgSrc="/diagrams/geography-world-facts-sea-levels-and-coastlines-rise-trend.svg"
        altText="A line graph showing global mean sea level rising gradually from 1880 to about 1990, then rising more steeply through the satellite altimetry era to the present, with a side panel breaking down the total rise into two stacked contributing components: thermal expansion of ocean water and melted land ice from glaciers and ice sheets."
      />
      <p>
      Notice the line&apos;s slope isn&apos;t constant — it visibly steepens after the early 1990s, when satellite altimetry became the primary measurement method and detected an accelerating rate of rise compared to the earlier tide-gauge-only era. The two stacked contributing factors on the side panel show that neither thermal expansion nor land ice melt alone explains the full picture; both are actively contributing at the same time.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming melting sea ice (like Arctic ice floating on the ocean) directly raises sea level.", fix: "Floating sea ice is already displacing its own weight in water, so its melting adds essentially nothing to sea level. Sea level rise instead comes from land ice (glaciers, Greenland, Antarctica) melting and adding new water, plus thermal expansion." },
          { mistake: "Treating global average sea level rise as the number every coastline will experience.", fix: "Local factors — land subsidence, post-glacial rebound, regional currents — can make a specific coastline's relative sea level rise faster or slower than the global average, or even fall in some rare cases." },
          { mistake: "Assuming sea level rise has been happening at a constant, unchanging rate.", fix: "Satellite records since the early 1990s show the rate of global sea level rise has been accelerating compared to the 20th-century average, not holding steady." },
        ]}
      />
      <MisconceptionCallout
        myth="Sea level rise is uniform everywhere on Earth — a certain number of millimeters per year applies equally to every coastline."
        reality={<p>The commonly cited global average rate (currently in the range of 3-4+ mm per year, per NASA and NOAA satellite data) is a planet-wide average, not a value that applies evenly everywhere. Regional ocean currents and wind patterns cause warm water — and therefore higher sea levels from thermal expansion — to pile up more in some ocean basins than others. Meanwhile, what actually happens to a given coastline depends just as much on what the land itself is doing: places experiencing subsidence, like parts of the U.S. Gulf Coast or the sinking city of Jakarta, see relative sea level rise well above the global average, while places still undergoing post-glacial rebound, like parts of Scandinavia, can see local relative sea level hold steady or even fall. The same global process produces very different local outcomes.</p>}
      />

      <QuickCheck
        question="Two coastal cities are both affected by the same amount of global sea level rise, but one is flooding far more frequently than the other. What is the most likely explanation, beyond the ocean itself?"
        options={[
          { text: "One city's land is likely subsiding (sinking), which adds to the ocean's rise and increases its local relative sea level change", correct: true, explanation: "Correct. Local land subsidence — from groundwater extraction, sediment compaction, or other causes — adds directly to a city's effective relative sea level rise on top of the global ocean signal, which is a well-documented reason identical coastlines can experience very different flooding trends." },
          { text: "This can't happen — identical global sea level rise must produce identical local flooding outcomes everywhere", correct: false, explanation: "This is exactly the misconception this entry addresses. Local land movement, currents, and coastal geography mean identical global sea level rise can produce very different real-world flooding outcomes in different cities." },
          { text: "One city must simply be measuring sea level incorrectly", correct: false, explanation: "Measurement differences aren't the typical explanation here — differing local subsidence, elevation, and coastal defenses are well-documented, real physical reasons two cities can experience the same global trend very differently." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Project relative sea level forward at a steady annual rate"
        fields={[
          { key: "currentHeightM", label: "Current baseline level (m, relative to today)", defaultValue: 0, step: 0.1 },
          { key: "upliftMmPerYear", label: "Rate of rise (mm/year)", defaultValue: 3.5, step: 0.1 },
          { key: "years", label: "Years from now", defaultValue: 30, step: 1 },
        ]}
        resultLabel="Projected relative sea level (m above today's baseline)"
        formula="mountainUpliftProjection"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Try the calculator above with a higher rate, like 4.5 mm/year, and a longer horizon, like 75 years, to see how the projection compounds over time.",
          "Next time you read about a specific city's flood risk, check whether the article mentions local land subsidence — that factor often matters more than the global average alone.",
          "Look up your own region's tide gauge trend on NOAA's Sea Level Trends tool to see whether your local coastline is rising faster or slower than the global average.",
          "Read the related entry on Coral Reefs & Marine Geography to see how the same warming ocean affects reef ecosystems.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How much has sea level risen?", answer: "Global mean sea level has risen roughly 21-24 cm (about 8-9 inches) since 1880, according to NASA and NOAA tide gauge and satellite records, with the rate of rise accelerating in recent decades." },
          { question: "Why is sea level rising faster in some places than others?", answer: "Local factors compound with the global trend — land subsidence (sinking) increases relative sea level rise in places like parts of the U.S. Gulf Coast, while post-glacial rebound (land still rising after ice-age glaciers melted) can offset or even reverse it in places like parts of Scandinavia. Regional ocean currents also cause uneven warming and water buildup." },
          { question: "What causes sea level rise?", answer: "Two main mechanisms: thermal expansion, where warming ocean water physically takes up more volume, and melting land ice from glaciers and the Greenland and Antarctic ice sheets, which adds new water to the ocean. Melting floating sea ice contributes essentially nothing." },
          { question: "Which countries are most at risk from rising sea levels?", answer: "Low-lying island nations like Tuvalu, Kiribati, and the Marshall Islands, along with densely populated river delta regions like Bangladesh and coastal cities such as Jakarta and Miami, are frequently cited as especially exposed, given their low average elevation above current sea level." },
          { question: "Is sea level rise the same everywhere?", answer: "No. The commonly cited rate is a global average — actual local change varies with ocean currents, regional warming patterns, and especially whether the coastline itself is subsiding or rising due to geological processes like post-glacial rebound." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
