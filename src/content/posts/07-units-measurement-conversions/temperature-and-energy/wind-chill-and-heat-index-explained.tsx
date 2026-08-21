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
  title: "Wind Chill & Heat Index Explained",
  category: "units-measurement-conversions",
  order: 28,
  subtopic: "temperature-and-energy",
  tags: [
    "wind chill",
    "heat index",
    "apparent temperature",
    "weather measurement",
    "celsius",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Wind chill and heat index aren't real air temperatures — they're calculated \"feels like\" numbers that adjust the actual thermometer reading for how wind or humidity change perceived cold or heat.",
  summary: "Wind chill and heat index are calculated apparent-temperature values, not direct thermometer readings — wind chill adjusts cold-weather temperatures downward for how fast wind strips heat from skin, and heat index adjusts hot-weather temperatures upward for how humidity impairs sweat evaporation.",
  sources: [
    { label: "National Weather Service — Wind Chill", url: "https://www.weather.gov/safety/cold-wind-chill-chart" },
    { label: "National Weather Service — Heat Index", url: "https://www.weather.gov/safety/heat-index" },
    { label: "NOAA — Weather Safety", url: "https://www.noaa.gov" },
  ],
  seeAlso: [
    "units-measurement-conversions/celsius-vs-fahrenheit-the-conversion-formula",
    "units-measurement-conversions/body-temperature-norms-explained",
  ],
  glossary: [
    {"term":"Wind chill","definition":"A calculated 'feels like' temperature that estimates how quickly exposed skin loses heat in cold, windy conditions, expressed on the same scale as air temperature but always at or below the actual reading."},
    {"term":"Heat index","definition":"A calculated 'feels like' temperature that estimates perceived heat in hot, humid conditions, accounting for how high humidity slows the evaporative cooling of sweat."},
    {"term":"Apparent temperature","definition":"A general term for any calculated value (like wind chill or heat index) meant to represent how hot or cold conditions feel to the human body, rather than the literal thermometer reading."},
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
      "Wind chill and heat index are both calculated 'feels like' values, not what a thermometer actually reads — they estimate how the body perceives temperature under wind or humidity.",
      "Wind chill only applies meaningfully below about 10°C (50°F) with wind above roughly 4.8 km/h — it isn't calculated for warm, calm conditions because the underlying physics doesn't apply.",
      "Heat index is the humid-weather counterpart to wind chill — instead of wind stripping heat away, high humidity slows sweat evaporation, making hot air feel hotter than the thermometer shows.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p"><TermLink href="/units-measurement-conversions/wind-chill-and-heat-index-explained">Wind chill</TermLink> tells you how cold it *feels* when wind is factored in — a 0°C day with strong wind might feel like −10°C on exposed skin, even though a thermometer still reads 0°C. <TermLink href="/units-measurement-conversions/wind-chill-and-heat-index-explained">Heat index</TermLink> works the opposite way for hot, humid weather — it tells you how hot it feels when humidity makes sweat evaporate more slowly, so your body can&apos;t cool itself as efficiently.</div>}
      detailed={<div className="prose-p">Both wind chill and heat index are examples of <TermLink href="/units-measurement-conversions/wind-chill-and-heat-index-explained">apparent temperature</TermLink> — calculated values, not direct measurements — because a standard thermometer measures only the air&apos;s actual temperature, not how effectively that air transfers heat to or from a human body. Wind chill&apos;s underlying physics is convective heat loss: moving air continuously replaces the thin layer of warmed air next to skin with cooler air, accelerating heat loss compared to still air at the same temperature. Heat index&apos;s underlying physics is evaporative cooling: sweat cools skin as it evaporates, but high humidity means the surrounding air is already closer to saturated with water vapor, so sweat evaporates more slowly and removes less heat. Both formulas are empirical (based on physiological testing and modeling) rather than exact physics equations, and both are published by national weather agencies specifically calibrated to human comfort and safety thresholds, not for general engineering use.</div>}
      />
      <FootnoteAside>The modern wind chill formula used by the US National Weather Service and Environment Canada was adopted in 2001, replacing an older 1945 formula that overestimated cooling effects — the update was based on actual facial cooling studies using human volunteers in a wind tunnel.</FootnoteAside>

      <p>
      Because both values are calculated rather than measured directly, understanding when each applies — and when neither does — matters as much as the arithmetic itself.
      </p>

      <QuickCheck
      question="Why doesn't the US National Weather Service calculate a wind chill value for a 25°C day, even if it's windy?"
      options={[
      { text: "Because wind chill calculations require special equipment that isn't available in warm weather", correct: false, explanation: "The calculation itself needs only temperature and wind speed — the reason it isn't used is about the physics being irrelevant, not equipment availability." },
      { text: "Because wind chill specifically models heat loss from skin, which is only meaningful when the air is cold enough that wind would meaningfully accelerate cooling below body-comfortable levels", correct: true, explanation: "Correct. Wind chill is only calculated below about 10°C — above that threshold, wind doesn't meaningfully change how a warm day feels the way it does on a cold one." },
      { text: "Wind chill is always calculated regardless of temperature — this scenario wouldn't actually skip it", correct: false, explanation: "National weather agencies specifically cap wind chill calculations to temperatures at or below roughly 10°C (50°F), since the formula isn't validated or meaningful above that threshold." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Calculating wind chill on a cold, windy day (baseline case)</h3>
      <div className="prose-p">
      Air temperature is −5°C with a 20 km/h wind. Using the standard formula (13.12 + 0.6215T − 11.37W^0.16 + 0.3965T·W^0.16, with T in °C and W in km/h): the wind chill works out to roughly −11°C — meaning exposed skin loses heat at the rate it would on a still day around −11°C, even though the actual air temperature is only −5°C.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Wind chill approaching the calm-air threshold (edge case / variation)</h3>
      <div className="prose-p">
      Air temperature is −5°C but wind is nearly calm, at 3 km/h. Because the wind chill formula is only defined for wind speeds above about 4.8 km/h, weather services typically report the actual air temperature directly rather than a calculated wind chill in this situation — a reminder that wind chill isn&apos;t meant to apply universally, only where wind is actually strong enough to matter.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Comparing heat index across two humidity levels (real-world / applied case)</h3>
      <div className="prose-p">
      Air temperature is 32°C (90°F) in two different cities. In a dry climate at 20% relative humidity, the heat index is close to the actual temperature — around 30°C. In a humid climate at 70% relative humidity, the same 32°C air can produce a heat index well above 40°C, since the body&apos;s sweat can&apos;t evaporate efficiently. This is exactly why the same thermometer reading feels dramatically different in, say, Phoenix versus Houston in summer — the heat index, not the raw temperature, better predicts how the heat will actually feel and how dangerous it is.
      </div>

      <QuickCheck
      question="Two cities both report an air temperature of 32°C, but City A has 20% humidity and City B has 80% humidity. Which city has the higher heat index, and why?"
      options={[
      { text: "City A, because dry air holds heat closer to the skin", correct: false, explanation: "Dry air doesn't trap heat near the skin — in fact, dry conditions let sweat evaporate efficiently, which cools the body more effectively." },
      { text: "City B, because high humidity slows sweat evaporation, reducing the body's ability to cool itself, which makes the same air temperature feel hotter", correct: true, explanation: "Correct. Heat index rises with humidity at a fixed temperature specifically because evaporative cooling — the body's main defense against overheating — becomes less effective as the surrounding air holds more moisture." },
      { text: "Both cities have the same heat index, since heat index only depends on air temperature", correct: false, explanation: "Heat index depends on both temperature and humidity together — that's the entire point of the calculation, distinguishing it from the raw thermometer reading." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="How wind chill and heat index diverge from actual air temperature"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-wind-chill-and-heat-index-explained-apparent-temperature.svg"
      altText="A diagram with two horizontal arrows. The top arrow starts at a thermometer icon reading negative 5 degrees Celsius, labeled actual air temperature, and points to a colder-looking icon reading negative 11 degrees Celsius, labeled wind chill feels like, with a wind gust icon shown as the cause. The bottom arrow starts at a thermometer icon reading 32 degrees Celsius, labeled actual air temperature, and points to a hotter-looking icon reading above 40 degrees Celsius, labeled heat index feels like, with a humidity droplet icon shown as the cause."
      />
      <p>
      Both arrows start at the same place — the actual thermometer reading — and diverge in opposite directions depending on the cause: wind pulls the cold-weather number colder, while humidity pushes the hot-weather number hotter.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming wind chill or heat index is what a thermometer would read if placed outside.", fix: "Both are calculated physiological estimates of how conditions feel to human skin, not literal air temperature readings — a thermometer will always show the actual air temperature, not the wind chill or heat index value." },
      { mistake: "Applying a wind chill calculation to warm weather, or a heat index calculation to cold weather.", fix: "Wind chill is only meaningful below about 10°C with real wind; heat index is only meaningful in warm-to-hot, humid conditions. Outside those ranges, the raw air temperature is the relevant number." },
      { mistake: "Assuming heat index and wind chill are calculated the same way, just with different inputs.", fix: "They model entirely different physical mechanisms — convective heat loss to moving air (wind chill) versus impaired evaporative cooling from humidity (heat index) — so they use different formulas, not a shared one with swapped variables." },
      ]}
      />
      <MisconceptionCallout
      myth="Wind chill can make water freeze faster or make an inanimate object colder than the actual air temperature."
      reality={<p>Wind chill describes how quickly *exposed human skin* loses heat — it&apos;s a physiological estimate, not a change in the actual physics of the air. Inanimate objects (a car, a bottle of water) cool down to the actual air temperature regardless of wind chill; wind can speed up how fast they *reach* that temperature, but they won&apos;t end up colder than the air itself.</p>}
      />

      <QuickCheck
      question="Will a bucket of water left outside on a −5°C day with strong wind chill (feels like −11°C) actually freeze to a lower temperature than a bucket left outside on a calm −5°C day?"
      options={[
      { text: "Yes, the windy bucket will end up colder than −5°C because of the wind chill effect", correct: false, explanation: "Wind chill describes human skin's perceived cooling, not a change in an object's final equilibrium temperature. Both buckets will settle at the actual air temperature, −5°C." },
      { text: "No — both buckets will eventually reach the same actual air temperature (−5°C); the windy one will just get there faster", correct: true, explanation: "Correct. Wind accelerates how quickly an object reaches ambient air temperature, but doesn't lower the temperature it settles at. Wind chill is a human-skin-specific estimate, not a change to the air's actual physics." },
      { text: "It depends on the object's color", correct: false, explanation: "Color affects how an object absorbs radiant heat, but has no bearing on this specific wind chill misconception — the key point is that wind chill doesn't change an object's final equilibrium temperature." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Estimate wind chill"
      fields={[
      { key: "tempC", label: "Air temperature (°C)", defaultValue: -5 },
      { key: "windKmh", label: "Wind speed (km/h)", defaultValue: 20 },
      ]}
      resultLabel="Wind chill (°C)"
      formula="windChillApproxC"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Check both the actual temperature and the wind chill or heat index when planning cold- or hot-weather outdoor activity — the 'feels like' number is often the more useful safety guide.",
      "Remember wind chill only applies below roughly 10°C with real wind — don't expect (or calculate) one on a mild, breezy day.",
      "In humid climates, treat the heat index rather than the raw temperature as your guide for hydration and heat-safety decisions.",
      "Don't assume wind chill changes how cold an inanimate object gets — it's specific to how fast living skin loses heat, not a change in air physics.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How is wind chill calculated?", answer: "The US National Weather Service / Environment Canada formula is: Wind Chill (°C) = 13.12 + 0.6215T − 11.37W^0.16 + 0.3965T·W^0.16, where T is air temperature in °C and W is wind speed in km/h, valid for temperatures at or below about 10°C and wind above about 4.8 km/h." },
      { question: "What is heat index and how is it different from temperature?", answer: "Heat index is a calculated 'feels like' value that combines actual air temperature with relative humidity, estimating how hot conditions feel to the body because high humidity slows the evaporative cooling of sweat." },
      { question: "Does wind chill affect how fast water freezes?", answer: "No. Wind chill is a physiological estimate specific to human skin's heat loss — it doesn't change the actual air temperature, so it doesn't make water (or any inanimate object) freeze at a lower temperature, though it can speed up how quickly the object reaches ambient temperature." },
      { question: "Why doesn't wind chill apply to warm weather?", answer: "Because the wind chill formula specifically models accelerated heat loss from skin in cold conditions — above roughly 10°C, wind doesn't meaningfully change how the temperature feels the way it does when it's cold, so weather services don't calculate or report it." },
      { question: "At what humidity does heat index become dangerous?", answer: "There's no single fixed threshold, but the US National Weather Service issues heat advisories when heat index values reach roughly 32-39°C (90-103°F) and heat warnings above that, since values in that range significantly raise the risk of heat-related illness with prolonged exposure or physical activity." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
