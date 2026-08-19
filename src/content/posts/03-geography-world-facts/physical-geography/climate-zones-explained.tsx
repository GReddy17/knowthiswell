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
  title: "Climate Zones Explained",
  category: "geography-world-facts",
  order: 7,
  subtopic: "physical-geography",
  tags: ["climate zones", "koppen", "physical geography", "latitude"],
  date: "2026-08-17",
  updated: "2026-08-17",
  lastReviewed: "2026-08-17",
  excerpt: "Why climate, not political borders, is what actually decides where rainforests, deserts, and tundra show up on the map.",
  summary: "Climate zones are regions with consistent long-term temperature and precipitation patterns, driven mainly by latitude, elevation, and distance from oceans — the widely used Koppen system sorts the whole planet into five main groups.",
  sources: [
    { label: "NOAA — Climate Zones", url: "https://www.noaa.gov/education/resource-collections/weather-atmosphere/climate" },
    { label: "National Geographic — Climate Zone", url: "https://education.nationalgeographic.org/resource/climate-zone/" },
    { label: "NASA Earth Observatory — Koppen Climate Classification", url: "https://earthobservatory.nasa.gov/features/Koppen" },
  ],
  seeAlso: [
    "geography-world-facts/continents-and-oceans-overview",
    "general-science-facts/weather-and-climate-basics",
    "geography-world-facts/deserts-of-the-world",
  ],
  glossary: [
    { term: "Koppen climate classification", definition: "A widely used system, developed by climatologist Wladimir Koppen, that sorts world climates into five main groups (and many subtypes) based on temperature and precipitation patterns." },
    { term: "Tropical zone", definition: "The climate belt roughly between the Tropic of Cancer and Tropic of Capricorn, generally warm year-round with high rainfall in many regions." },
    { term: "Rain shadow", definition: "A dry region on the leeward (downwind) side of a mountain range, where moist air has already dropped most of its rain on the windward side before crossing." },
    { term: "Microclimate", definition: "A small area with climate conditions noticeably different from its immediate surroundings, often caused by elevation, water bodies, or urban heat." },
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
          "Climate zones are defined by long-term temperature and precipitation patterns, not by political borders or even always by latitude alone.",
          "The Koppen system, the most widely used climate classification, sorts the world into five main groups: tropical, dry, temperate, continental, and polar.",
          "Mountains and oceans can override latitude entirely — a coastal city and an inland city at the same latitude can have completely different climates.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A climate zone is a region that shares a similar long-term weather pattern — how hot or cold it typically gets, and how much rain or snow it typically receives across the year. Climate is different from day-to-day weather: a desert can have a rainy day, but its <TermLink href="/geography-world-facts/climate-zones-explained">climate</TermLink> is still classified as dry because that&apos;s the long-term pattern.</div>}
        detailed={<div className="prose-p">The most widely used framework is the <TermLink href="/geography-world-facts/climate-zones-explained">Koppen climate classification</TermLink>, developed by climatologist Wladimir Koppen in 1884 and refined since. It groups the world into five main letter-coded categories: A (tropical), B (dry/arid), C (temperate), D (continental), and E (polar), each with subtypes based on seasonal rainfall and temperature patterns. Latitude drives the broad pattern — the <TermLink href="/geography-world-facts/climate-zones-explained">tropical zone</TermLink> near the equator receives more direct sunlight year-round, while polar regions receive sunlight at a shallow angle and go without it entirely for part of the year — but latitude alone doesn&apos;t decide everything. Elevation cools climate roughly 6.5°C per 1,000 meters of altitude, which is why equatorial mountains can have snow caps. Ocean proximity moderates temperature swings, since water heats and cools more slowly than land. And mountain ranges create <TermLink href="/geography-world-facts/climate-zones-explained">rain shadows</TermLink> — dry regions on their leeward side, because moist air drops most of its rain climbing the windward slope and arrives dried out on the other side.</div>}
      />
      <FootnoteAside>Mount Kilimanjaro sits almost exactly on the equator but has permanent glacial ice near its summit — a direct result of elevation overriding latitude, though the ice has been shrinking rapidly in recent decades.</FootnoteAside>

      <p>
      Once you know climate depends on more than just how close a place is to the equator, some genuinely surprising real-world patterns start making sense.
      </p>

      <QuickCheck
        question="Seattle and a city at the same latitude in the middle of a continent often have milder winters and cooler summers than the inland city. What's the main reason?"
        options={[
          { text: "Seattle is closer to the equator, even though it's at the same latitude", correct: false, explanation: "Same latitude means the same distance from the equator by definition — that can't be the explanation here." },
          { text: "Ocean proximity moderates temperature — water heats and cools more slowly than land, softening seasonal extremes for coastal areas", correct: true, explanation: "Correct. Being next to a large body of water buffers temperature swings, which is exactly why coastal climates tend to have milder winters and cooler summers than inland areas at the same latitude." },
          { text: "Seattle has more mountains directly surrounding it than the inland city", correct: false, explanation: "Mountains affect climate through elevation and rain shadows, but the specific coastal-vs-inland temperature moderation effect described here is caused by ocean proximity, not mountains." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The five Koppen groups at a glance (baseline case)</h3>
      <div className="prose-p">
      Tropical (A) climates, found near the equator in places like the Amazon and Southeast Asia, stay warm year-round with high rainfall. Dry (B) climates, covering roughly a third of Earth&apos;s land — the Sahara, Australian Outback, and American Southwest among them — get very little precipitation regardless of temperature. Temperate (C) climates, like the Mediterranean or the U.S. Southeast, have mild winters and warm summers. Continental (D) climates, common across the northern U.S., Canada, and much of Russia, swing between cold winters and warm summers. Polar (E) climates, at the poles and high mountains, stay cold year-round.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The Atacama Desert, a rain-shadow extreme (edge case)</h3>
      <div className="prose-p">
      Chile&apos;s Atacama Desert is one of the driest places on Earth, with some weather stations recording no measurable rainfall for decades. It sits in the rain shadow of the Andes to the east, while a cold ocean current offshore (the Humboldt Current) suppresses evaporation and rainfall from the Pacific side too — a case where two separate dry-climate mechanisms stack on top of each other, producing an extreme rarely matched anywhere else on the planet.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why climate classification matters for agriculture (real-world case)</h3>
      <div className="prose-p">
      Farmers, insurers, and governments use climate zone data (often a related system called USDA hardiness zones, itself derived from similar principles) to decide what crops will realistically survive in a given region and to price agricultural insurance. Planting a tropical crop in a continental climate zone isn&apos;t just risky — it&apos;s usually a guaranteed failure, because the plant&apos;s water and temperature requirements simply don&apos;t match the region&apos;s actual long-term pattern, no matter how good a single season&apos;s weather happens to be.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How elevation and rain shadows override latitude"
        type="flow"
        svgSrc="/diagrams/climate-zones-explained-rain-shadow.svg"
        altText="Cross-section diagram of a mountain range showing moist air rising on the windward side, cooling and dropping rain, then descending as dry air on the leeward side, creating a rain shadow desert region on that side of the mountain despite both sides being at the same latitude."
      />
      <p>
      Notice both sides of the mountain are at the same latitude and receive the same sunlight angle — the dramatic difference in climate is caused entirely by the mountain intercepting moisture on one side.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming latitude alone determines climate.", fix: "Factor in elevation, ocean proximity, and mountain rain shadows — any of these can override the 'expected' climate for a given latitude." },
          { mistake: "Confusing weather (short-term) with climate (long-term pattern).", fix: "A single hot day doesn't change a region's climate classification, and a single cold snap doesn't disprove a warming climate trend — climate is measured over decades." },
          { mistake: "Assuming deserts are always hot.", fix: "The Koppen 'dry' category includes cold deserts too — Antarctica is technically the driest continent on Earth by precipitation, despite being covered in ice, not sand." },
        ]}
      />
      <MisconceptionCallout
        myth="Deserts are defined by sand and heat."
        reality={<p>Deserts are defined by low precipitation, not temperature or surface material. Antarctica receives so little snowfall that it qualifies as a desert by precipitation standards, despite being the coldest place on Earth. The Gobi Desert in Mongolia gets genuinely cold winters. What every desert shares is aridity, not a specific temperature or a sandy landscape.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate temperature drop from elevation gain"
        fields={[
          { key: "baseTemperatureC", label: "Base temperature at sea level (°C)", defaultValue: 30 },
          { key: "elevationMeters", label: "Elevation gain (meters)", defaultValue: 2000 },
        ]}
        resultLabel="Estimated temperature at that elevation (°C)"
        formula="elevationTemperatureDrop"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Look up your region's Koppen climate classification — it's a fast way to understand what actually grows well locally and why.",
          "Next time you compare a coastal and inland city at the same latitude, check their average seasonal temperature swings — the ocean-moderation effect is usually visible immediately.",
          "If you live near mountains, notice which side tends to be greener and which side tends to be drier — that's the rain shadow effect in action.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are the main climate zones?", answer: "The Koppen system's five main groups are tropical, dry (arid), temperate, continental, and polar, each based on long-term temperature and precipitation patterns rather than latitude alone." },
          { question: "What's the difference between weather and climate?", answer: "Weather is short-term atmospheric conditions on a given day; climate is the long-term average pattern of weather in a region, typically measured over 30 years or more." },
          { question: "Can two places at the same latitude have different climates?", answer: "Yes, very commonly — elevation, ocean proximity, and mountain rain shadows can all produce dramatically different climates at identical latitudes." },
          { question: "Are all deserts hot?", answer: "No — deserts are defined by low precipitation, not temperature. Antarctica and the Gobi Desert are both classified as deserts despite being cold for much or all of the year." },
          { question: "Why do mountains create deserts on one side?", answer: "As moist air rises up a mountain's windward side it cools and drops its rain; by the time the now-dry air descends the other (leeward) side, there's little moisture left to fall, creating a dry 'rain shadow' region." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
    </>
  );
}
