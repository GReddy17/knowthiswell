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
  title: "Weather & Climate Basics: What's the Difference, and How Both Work",
  category: "general-science-facts",
  order: 40,
  subtopic: "earth-science",
  tags: [
    "weather",
    "climate",
    "atmosphere",
    "climate change",
    "meteorology",
    "earth science",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Weather is the atmosphere's state right now; climate is its decades-long average. Here's the mechanism behind both, and what real temperature data shows.",
  summary: "Weather describes the atmosphere's short-term condition, while climate is the long-term statistical average of that weather for a place, typically measured over 30 years.",
  sources: [
    { label: "NOAA National Weather Service", url: "https://www.weather.gov/" },
    { label: "NASA — Global Climate Change", url: "https://climate.nasa.gov/" },
    { label: "NOAA — Climate.gov", url: "https://www.climate.gov/" },
    { label: "Encyclopaedia Britannica", url: "https://www.britannica.com/" },
  ],
  seeAlso: [
    "general-science-facts/heat-and-temperature",
    "general-science-facts/pressure",
    "general-science-facts/water-cycle-and-oceans",
    "general-science-facts/seasons-and-earths-tilt",
    "general-science-facts/natural-disasters",
  ],
  glossary: [
    { term: "Weather", definition: "The state of the atmosphere at a specific place and time — temperature, humidity, wind, cloud cover, and precipitation over minutes to days." },
    { term: "Climate", definition: "The long-term statistical average of weather for a region, typically calculated over a 30-year period." },
    { term: "Air mass", definition: "A large body of air with fairly uniform temperature and humidity, which takes on the characteristics of the surface it formed over." },
    { term: "Atmospheric pressure", definition: "The force exerted by the weight of air above a given point; differences in pressure between regions are what create wind." },
    { term: "Greenhouse effect", definition: "The process by which gases like carbon dioxide and water vapor trap outgoing infrared radiation in the atmosphere, warming the planet's surface." },
    { term: "El Niño / La Niña (ENSO)", definition: "A recurring cycle of warmer (El Niño) or cooler (La Niña) than average sea surface temperatures in the tropical Pacific that shifts weather patterns worldwide." },
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
          "Weather is what the atmosphere is doing right now or in the next few days; climate is the long-term average of that weather for a place, typically calculated over 30 years — 'climate is what you expect, weather is what you get.'",
          "Nearly all weather traces back to uneven solar heating: warm air rises and creates low pressure, cool air sinks and creates high pressure, and wind is simply air flowing from high pressure toward low pressure to even things out.",
          "Instrumental records, ice cores, and satellite data all show Earth's average surface temperature has risen roughly 1.1-1.2°C since the late 1800s — a decades-long trend documented by NASA and NOAA that a single cold day or storm doesn't contradict.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/general-science-facts/weather-and-climate-basics">Weather</TermLink> is what&apos;s happening in the sky today — is it raining, how hot is it, is the wind strong. <TermLink href="/general-science-facts/weather-and-climate-basics">Climate</TermLink> is what that place is like on average, year after year — a desert has a dry climate even on the rare day it rains, and a tropical region has a hot, humid climate even on its one unusually cool morning. One is a snapshot; the other is a long-term pattern built from thousands of those snapshots.</div>}
        detailed={<div className="prose-p">Meteorologists define climate using a specific standard: the World Meteorological Organization&apos;s 30-year &quot;climate normal,&quot; recalculated each decade from continuous observations. Weather itself is driven by <TermLink href="/general-science-facts/weather-and-climate-basics">air masses</TermLink> and <TermLink href="/general-science-facts/weather-and-climate-basics">atmospheric pressure</TermLink> systems moving across a region — a low-pressure system pulls air inward and upward, cooling it and often producing clouds and rain, while a high-pressure system pushes air outward and downward, typically bringing clear skies. Climate, by contrast, is a statistical property: a shift in the long-term average or the underlying distribution of weather, not any single data point. This is also where the <TermLink href="/general-science-facts/weather-and-climate-basics">greenhouse effect</TermLink> operates — carbon dioxide, methane, and water vapor in the atmosphere absorb and re-radiate outgoing infrared energy, and increasing their concentration raises the equilibrium temperature the whole system settles toward, a climate-scale effect that plays out over decades, not days.</div>}
      />
      <FootnoteAside>The coldest surface temperature ever reliably recorded on Earth is -89.2°C (-128.6°F), measured at Russia&apos;s Vostok Station in Antarctica on July 21, 1983 — a single extreme weather reading, not a climate value, from one of the most isolated research stations on the planet.</FootnoteAside>

      <p>
      Understanding that weather and climate operate on different timescales is the key to reading almost any forecast, headline, or data chart about the atmosphere correctly — including the mechanism that produces day-to-day weather in the first place.
      </p>

      <QuickCheck
        question="Why does wind blow from one place to another instead of the air just sitting still?"
        options={[
          { text: "Air flows from areas of higher atmospheric pressure to areas of lower pressure, driven by uneven solar heating that makes some air rise (low pressure) and other air sink (high pressure)", correct: true, explanation: "Correct. Wind is air moving to equalize pressure differences, and those pressure differences originate from the sun heating Earth's surface unevenly." },
          { text: "Wind is caused by trees and oceans releasing stored air back into the atmosphere", correct: false, explanation: "Trees and oceans exchange gases with the atmosphere, but that's not what generates wind. Wind is a pressure-driven flow, not a release of stored air." },
          { text: "Wind has no relationship to pressure — it's random air movement with no predictable cause", correct: false, explanation: "Wind is highly predictable once you know the pressure pattern; meteorologists forecast wind direction and speed directly from pressure maps." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Why the equator is warmer than the poles (baseline case)</h3>
      <div className="prose-p">
      Sunlight strikes the equator almost straight on, close to a 90° angle, concentrating its energy over a small surface area. At the poles, the same amount of sunlight arrives at a shallow, oblique angle, spreading that energy across a much larger surface area — the same beam of light &quot;paints&quot; a bigger patch of ground, so each square meter receives less energy. Polar ice and snow also reflect a large share (roughly 80-90%) of the sunlight that does arrive, rather than absorbing it as heat. This temperature difference between equator and poles is the engine behind global wind belts: warm equatorial air rises and flows toward the poles, cool polar air sinks and flows back toward the equator, and Earth&apos;s rotation deflects these flows into the recognizable large-scale wind patterns meteorologists track.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: El Niño disrupting normal weather patterns worldwide (edge case / variation)</h3>
      <div className="prose-p">
      Every few years, sea surface temperatures in the tropical Pacific Ocean rise well above average in a pattern called El Niño (the cooler counterpart is La Niña); together they&apos;re known as ENSO, tracked by NOAA&apos;s Climate Prediction Center. This isn&apos;t a local curiosity — a warmer tropical Pacific shifts the location of rising and sinking air on a global scale, which redirects jet streams and rainfall patterns across multiple continents at once. A strong El Niño typically brings wetter winters to the southern United States, drier conditions to parts of Southeast Asia and Australia, and altered hurricane activity in the Atlantic. It&apos;s a clear example of how a single regional ocean-temperature anomaly can cascade into weather effects thousands of kilometers away.
      </div>

      <QuickCheck
        question="During a strong El Niño event, weather patterns shift across multiple continents at once. What is actually driving this?"
        options={[
          { text: "A temporary warming of sea surface temperatures in the tropical Pacific Ocean, which shifts where air rises and sinks and redirects jet streams and rainfall globally", correct: true, explanation: "Correct. El Niño is fundamentally an ocean-temperature pattern in the tropical Pacific that reorganizes atmospheric circulation on a global scale, not a local storm system." },
          { text: "A sudden, permanent change in Earth's climate that happens without warning every few years", correct: false, explanation: "El Niño is a recurring, well-tracked oscillation, not a permanent shift — sea temperatures return toward average (or flip to La Niña) after it ends." },
          { text: "Increased solar output striking the Pacific Ocean more directly during El Niño years", correct: false, explanation: "El Niño isn't caused by a change in the sun's output — it originates from ocean-atmosphere interactions within Earth's own climate system." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Reading a real climate record — CO₂ and global temperature (real-world / applied case)</h3>
      <div className="prose-p">
      NOAA&apos;s Global Monitoring Laboratory has measured atmospheric carbon dioxide continuously at Mauna Loa Observatory in Hawaii since 1958. That record shows CO₂ rising from about 315 parts per million in 1958 to over 420 parts per million in the 2020s — a sustained, decades-long increase, not a single anomalous reading. Over that same period, NASA and NOAA&apos;s independently maintained global temperature datasets show Earth&apos;s average surface temperature climbing in step, consistent with the basic greenhouse mechanism: more CO₂ traps more outgoing infrared energy. This is what a genuine climate signal looks like in the data — a steady trend across thousands of measurements at hundreds of stations over many years, which is exactly why a single cold week doesn&apos;t undo it any more than a single hot week would prove it on its own.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Global wind and pressure belts driven by uneven solar heating"
        type="flow"
        svgSrc="/diagrams/general-science-facts-weather-and-climate-basics-global-circulation.svg"
        altText="Cross-section of Earth's atmosphere from equator to pole showing warm air rising at the equator forming a low-pressure belt, cool air sinking near 30 degrees latitude and the poles forming high-pressure belts, with labeled Hadley, Ferrel, and Polar circulation cells and arrows showing surface wind directions between them."
      />
      <p>
      Follow the rising air column at the equator: it climbs, cools, and splits, flowing poleward at high altitude before sinking back down around 30° latitude — this loop is a Hadley cell, and it&apos;s why deserts like the Sahara sit near that latitude band, under descending, drying air. Two more circulation loops (the Ferrel and Polar cells) carry that pattern the rest of the way to the poles. Every surface wind belt you can name — trade winds, westerlies, polar easterlies — is the surface-level signature of these three stacked circulation loops responding to the same underlying cause: more heat at the equator than at the poles.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating a single unusual weather event — a heat wave, a cold snap, a snowstorm — as proof or disproof of a climate trend.", fix: "Climate trends are measured as averages over decades across many stations. One event is a weather data point, far too small a sample to confirm or deny a multi-decade statistical pattern." },
          { mistake: "Assuming humidity and temperature always rise and fall together.", fix: "They're independent — a day can be cool and humid, or hot and dry. Humidity depends on how much water vapor the air is holding relative to what it could hold at that temperature, not on temperature alone." },
          { mistake: "Assuming climate change means uniform warming everywhere, with no cold days or regional variation allowed.", fix: "A rising global average is consistent with some regions warming faster than others, and with cold extremes still occurring — a warming trend shifts the odds and the average, it doesn't eliminate variability." },
        ]}
      />
      <MisconceptionCallout
        myth="A record cold snap or heavy snowstorm disproves global warming."
        reality={<p>A single storm is weather; the warming trend is a climate signal measured across decades of global average temperature data from NASA and NOAA — the two operate on completely different timescales and aren&apos;t in tension. In fact, a warmer atmosphere holds more water vapor (roughly 7% more per °C of warming, a well-established relationship), which can fuel heavier precipitation events, including intense snowfall, when temperatures are still cold enough for snow. A single extreme cold event happening within a warming multi-decade trend isn&apos;t a contradiction — it&apos;s exactly what climate science predicts can still occur.</p>}
      />

      <QuickCheck
        question="A major snowstorm hits during a winter that NOAA later reports was part of a warming multi-decade trend. Is this a contradiction?"
        options={[
          { text: "No — a single storm is a weather event on a timescale of days, while a warming trend is measured as a statistical average across decades; a warmer atmosphere can also hold more moisture, fueling heavier snow when it's cold enough", correct: true, explanation: "Correct. Weather and climate operate on different timescales, and extra atmospheric moisture from a warming climate can intensify individual storms, including snowstorms." },
          { text: "Yes — if the climate is warming, no snowstorms should be able to happen anywhere, ever", correct: false, explanation: "A rising long-term average doesn't eliminate cold events or variability; it shifts overall odds and averages while individual extreme events can still occur." },
          { text: "Yes — this means NOAA's temperature data must be measured incorrectly", correct: false, explanation: "NOAA's and NASA's temperature records are independently verified through multiple methods (surface stations, satellites, ocean buoys) and are not undermined by a single regional storm." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate dew point from temperature and humidity"
        fields={[
          { key: "temperatureC", label: "Air temperature (°C)", defaultValue: 25 },
          { key: "relativeHumidityPercent", label: "Relative humidity (%)", defaultValue: 60 },
        ]}
        resultLabel="Approximate dew point (°C)"
        formula="dewPointApproxC"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time a forecast surprises you, check whether it's driven by a nearby high- or low-pressure system — most day-to-day weather traces back to that one variable.",
          "Look up whether your region is currently in an El Niño, La Niña, or neutral ENSO phase to understand why a season is running wetter, drier, warmer, or cooler than usual.",
          "Compare a single day's temperature to your region's 30-year climate normal, rather than to 'yesterday' or 'last week,' to judge whether it's actually unusual.",
          "Read the related entry on Seasons & Earth's Tilt to see the other major driver of long-term temperature patterns beyond weather systems.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between weather and climate?", answer: "Weather is the atmosphere's condition at a specific place and time — temperature, wind, precipitation over minutes to days. Climate is the long-term statistical average of that weather for a region, typically calculated over a 30-year period." },
          { question: "What causes wind?", answer: "Wind is air flowing from areas of higher atmospheric pressure to areas of lower pressure, trying to equalize the difference. Those pressure differences originate from the sun heating Earth's surface unevenly." },
          { question: "What causes El Niño?", answer: "El Niño is a recurring warming of sea surface temperatures in the tropical Pacific Ocean, part of the ENSO cycle tracked by NOAA. It shifts where air rises and sinks over the Pacific, which redirects jet streams and rainfall patterns across multiple continents." },
          { question: "Is climate change caused by humans?", answer: "NASA and NOAA data show atmospheric CO2 has risen from about 280 parts per million before industrialization to over 420 ppm today, driven primarily by burning fossil fuels, and global average temperature has risen roughly 1.1-1.2°C over the same broad period — a pattern consistent with the well-established greenhouse effect mechanism." },
          { question: "How is a heat wave different from a hot day?", answer: "A hot day is a single weather event. A heat wave is a multi-day period of unusually high temperatures for a region, and neither one, on its own, defines that region's climate — climate is the average across many such events over decades." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
