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
  title: "Agriculture & Geography: Why Crops Grow Where They Grow",
  category: "geography-world-facts",
  order: 36,
  subtopic: "economic-and-resource-geography",
  tags: [
    "agriculture",
    "crop belts",
    "climate and farming",
    "growing season",
    "economic geography",
    "food geography",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why rice needs flooded paddies, coffee grows in mountains near the equator, and the US Midwest became a wheat belt — the climate and soil math behind global crop maps.",
  summary: "Crops grow where a region's temperature, rainfall, growing-season length, and soil match that plant's specific biological requirements — which is why global food maps follow climate belts, not political borders.",
  sources: [
    { label: "FAO — Land & Water", url: "https://www.fao.org/land-water/en/" },
    { label: "FAO — FAOSTAT (Food and Agriculture Data)", url: "https://www.fao.org/faostat/en/" },
    { label: "Encyclopaedia Britannica — Agriculture", url: "https://www.britannica.com/topic/agriculture" },
  ],
  seeAlso: [
    "geography-world-facts/climate-zones-explained",
    "geography-world-facts/natural-resources-by-region",
    "geography-world-facts/rivers-and-major-watersheds",
    "general-science-facts/rocks-minerals-and-natural-resources",
  ],
  glossary: [
    { term: "Growing season", definition: "The period each year when temperature and daylight conditions are suitable for a crop to grow, typically measured between the last frost of spring and first frost of fall." },
    { term: "Growing degree days", definition: "A running total of daily heat accumulated above a crop's minimum growth temperature, used to predict when a crop will be ready to harvest." },
    { term: "Loess", definition: "A fine, wind-deposited soil, often highly fertile, that forms thick, productive layers in regions like the U.S. Midwest and Ukraine." },
    { term: "Highland tropics effect", definition: "The pattern where elevation cools tropical latitudes enough to support crops (like coffee) that would otherwise need a temperate climate, since temperature drops roughly 6.5°C for every 1,000 meters of elevation gained." },
    { term: "Photoperiodism", definition: "A plant's biological response to day length, which triggers flowering or other growth stages in many crops at specific times of year." },
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
          "Every crop has a specific temperature range, water requirement, and growing-season length it needs to mature — a region's climate either meets those requirements or it doesn't, regardless of farming skill.",
          "Elevation can substitute for latitude — coffee grows near the equator only because mountain elevation cools the air by roughly 6.5°C per 1,000 meters, mimicking a cooler climate.",
          "Fertile 'breadbasket' regions like the U.S. Midwest and Ukraine share a specific soil type — wind-deposited loess — on top of favorable temperate climate, which is why both became major grain-producing belts independently.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Crops aren&apos;t grown wherever people happen to want them — they&apos;re grown where the climate and soil actually let them thrive. Rice needs standing water and warm, humid conditions, so it&apos;s concentrated in monsoon Asia&apos;s flooded lowlands. Wheat prefers a temperate climate with moderate rainfall, so it dominates the Great Plains of North America and the plains of Ukraine and Russia. Coffee needs stable, mild temperatures without frost, so it&apos;s grown at higher elevations in tropical countries near the equator, not at sea level where it would be too hot. Match the plant&apos;s needs to the map, and the world&apos;s crop belts stop looking random.</div>}
        detailed={<div className="prose-p">Three factors do most of the work: temperature range, water availability, and <TermLink href="/geography-world-facts/agriculture-and-geography-why-crops-grow-where-they-grow">growing season</TermLink> length — the window between the last damaging frost and the first one, during which a crop must go from planting to harvest. Farmers and agronomists track heat accumulation using <TermLink href="/geography-world-facts/agriculture-and-geography-why-crops-grow-where-they-grow">growing degree days</TermLink>, a running total of daily warmth above a crop&apos;s minimum growth threshold, to predict maturity dates. Latitude alone doesn&apos;t fully determine what grows where, because elevation can substitute for it: temperature drops roughly 6.5°C for every 1,000 meters of elevation gained, so equatorial highlands in Ethiopia, Colombia, and Kenya sit in a genuinely temperate microclimate despite being near the equator — the <TermLink href="/geography-world-facts/agriculture-and-geography-why-crops-grow-where-they-grow">highland tropics effect</TermLink> that makes those regions ideal for arabica coffee. Soil matters just as much: <TermLink href="/geography-world-facts/agriculture-and-geography-why-crops-grow-where-they-grow">loess</TermLink>, a fine wind-deposited soil, forms thick, mineral-rich layers in the U.S. Midwest and Ukraine&apos;s Chernozem belt, which combined with temperate climate is exactly why both became world-leading grain regions independently of each other. Some crops also respond to day length itself through <TermLink href="/geography-world-facts/agriculture-and-geography-why-crops-grow-where-they-grow">photoperiodism</TermLink>, flowering only once daylight hours cross a specific threshold — a constraint climate alone doesn&apos;t capture.</div>}
      />
      <FootnoteAside>Loess soil forms from fine silt ground up by glaciers or deserts and then carried and deposited by wind — the Loess Plateau in China holds deposits over 300 meters thick in places, among the thickest loess accumulations on Earth.</FootnoteAside>

      <p>
      Temperature, water, and soil explain most of the map — but the clearest way to see how tightly they constrain a crop is to look at what happens when just one of those three factors is missing.
      </p>

      <QuickCheck
        question="Rice is grown almost exclusively in warm, humid regions with standing water, while wheat dominates cooler, drier temperate plains. What best explains this split?"
        options={[
          { text: "Each crop has different biological requirements for temperature and water, and each region's climate only supports the crops whose requirements it actually meets", correct: true, explanation: "Correct. Rice needs standing water and warmth to thrive; wheat tolerates less water but needs a cooler, more temperate range — the climate map and the crop map line up because of these specific biological needs." },
          { text: "Farmers in rice-growing regions simply haven't tried growing wheat", correct: false, explanation: "This isn't a matter of farmer preference — wheat grown in a hot, waterlogged paddy environment would perform far worse than in its preferred temperate, moderate-rainfall conditions." },
          { text: "Rice and wheat are actually the same plant grown under different names", correct: false, explanation: "Rice and wheat are entirely different plant species with different growth requirements, not variants of the same crop." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Why wheat dominates temperate plains (baseline case)</h3>
      <div className="prose-p">
      Wheat needs a growing season of roughly 90 to 120 days, moderate rainfall (too much encourages fungal disease and lodging, too little starves the plant), and a temperate climate without extreme heat during grain-fill. The Great Plains of the U.S. and Canada, the plains of Ukraine and southern Russia, and northern India&apos;s Indo-Gangetic plain all independently satisfy this combination — flat, arable land with a cool-but-not-frigid climate and rainfall in the right range — which is exactly why these unrelated regions all became major wheat-producing belts without needing to share a border, a government, or a common history.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Coffee grown at elevation near the equator (edge case / variation)</h3>
      <div className="prose-p">
      Coffee, particularly arabica, needs stable, mild temperatures roughly between 15°C and 24°C with no frost — conditions that don&apos;t naturally exist at sea level near the equator, where it&apos;s simply too hot and humid year-round. Instead, the world&apos;s major coffee-growing regions — the Ethiopian highlands, Colombia&apos;s Andean slopes, Kenya&apos;s highland plateaus — sit at elevations typically between 600 and 2,000 meters. Because temperature drops roughly 6.5°C per 1,000 meters of elevation gained, these equatorial highlands create an artificial temperate microclimate close to the equator: warm days, cool nights, and no frost, all within a few hundred kilometers of latitude 0°. Elevation is functioning as a substitute for latitude — the same trick that lets tropical-latitude countries grow a crop that would otherwise need to be grown much farther from the equator.
      </div>

      <QuickCheck
        question="Coffee is grown at high elevation in countries close to the equator, rather than at sea level in the same countries. What makes this possible?"
        options={[
          { text: "Elevation lowers temperature by roughly 6.5°C per 1,000 meters, creating a cooler microclimate similar to what the crop would otherwise need at a higher latitude", correct: true, explanation: "Correct. Elevation substitutes for latitude here — coffee-growing highlands near the equator are cool enough for the crop precisely because they sit high above sea level, not because of their latitude." },
          { text: "Coffee plants are specially bred to tolerate extreme heat and humidity at sea level", correct: false, explanation: "Standard arabica coffee genuinely requires mild, cooler temperatures and doesn't thrive in hot, humid sea-level conditions near the equator — the elevation itself is what makes cultivation possible there." },
          { text: "Elevation has no meaningful effect on temperature — the highland regions just happen to have more rainfall", correct: false, explanation: "Elevation has a well-established, significant cooling effect (roughly 6.5°C per 1,000 meters) that is the primary reason these highland regions are viable for coffee at all." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Estimating a wheat harvest from field area and yield (real-world / applied case)</h3>
      <div className="prose-p">
      A farmer with 40 hectares of land in a temperate wheat belt, achieving a global-average yield of roughly 3.5 tons per hectare (a figure tracked by the FAO across major wheat-producing countries), would expect a harvest of about 40 × 3.5 = 140 tons of wheat for the season — assuming that season&apos;s rainfall and temperature stayed within wheat&apos;s normal tolerances. This is the same basic area-times-yield math used at every scale, from a single farm to national agricultural production statistics, and it&apos;s exactly why a bad growing season (drought, an early frost, excess rain at harvest) shows up directly as a lower per-hectare yield figure in that year&apos;s national output.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="World map: major crop belts overlaid on climate zones"
        type="detail"
        svgSrc="/diagrams/geography-world-facts-agriculture-and-geography-why-crops-grow-where-they-grow-crop-belts-map.svg"
        altText="World map with climate zone bands (tropical, temperate, arid, polar) and overlaid crop belt labels: rice paddies across monsoon Asia, wheat belts across the North American Great Plains and the Ukraine-Russia plains, coffee highlands marked near the equator in Ethiopia, Colombia, and Kenya, and Mediterranean climate zones marked for olives and grapes in southern Europe, California, and Chile."
      />
      <p>
      Notice how each crop belt sits inside a specific climate band rather than spreading evenly across the map — rice belts track the humid tropical and subtropical monsoon zone almost exactly, wheat belts track the temperate zone&apos;s drier interior plains, and coffee belts sit as small highland &quot;islands&quot; of cooler climate embedded inside otherwise-tropical countries. The crop map is really a climate map wearing a different label.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming any crop can be grown anywhere with enough fertilizer or irrigation.", fix: "Fertilizer and irrigation can compensate for some limits, but growing-season length, minimum temperature, and frost risk are hard biological constraints that inputs alone can't overcome." },
          { mistake: "Assuming latitude alone determines what crops a region can grow.", fix: "Elevation can shift a region's effective climate dramatically — equatorial highlands can be cooler than temperate lowlands much farther from the equator." },
          { mistake: "Treating 'breadbasket' regions as historical accidents rather than climate-driven.", fix: "Regions like the U.S. Midwest and Ukraine became grain belts because they independently share a specific combination of temperate climate and fertile loess soil, not because of shared history or policy." },
        ]}
      />
      <MisconceptionCallout
        myth="With enough fertilizer and modern technology, any crop can be grown successfully in any climate."
        reality={<p>Fertilizer, irrigation, and greenhouses can offset some limitations — a poor soil or a dry season, for instance — but they cannot substitute for a growing season that&apos;s simply too short, or a climate with hard frost when a crop needs none. Full-season tropical rice paddies can&apos;t be replicated in a subarctic climate with a two-month frost-free window regardless of input intensity, and many crops are <TermLink href="/geography-world-facts/agriculture-and-geography-why-crops-grow-where-they-grow">photoperiod</TermLink>-sensitive, meaning they flower only once day length crosses a specific threshold that a greenhouse light schedule has to deliberately replicate. Climate sets a real ceiling; technology can push against it, but it doesn&apos;t remove it.</p>}
      />

      <QuickCheck
        question="Why can't advanced irrigation and fertilizer alone make full-season tropical rice paddies viable in a region with a short, frost-heavy growing season?"
        options={[
          { text: "Growing-season length and frost risk are climate constraints that water and nutrients can't override — the crop simply doesn't have enough frost-free time to complete its cycle", correct: true, explanation: "Correct. Irrigation and fertilizer address water and nutrient limits, not the length of the frost-free growing window a crop needs to mature." },
          { text: "Rice cannot be grown with any artificial inputs under any circumstances", correct: false, explanation: "Rice is grown with substantial irrigation and fertilizer support in many regions — the issue in this scenario is specifically growing-season length and frost, not inputs in general." },
          { text: "Fertilizer and irrigation always make crops grow faster than their natural maturation time", correct: false, explanation: "Inputs can improve yield and health but don't fundamentally shorten a crop's minimum maturation timeline below what its biology requires." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimated harvest: field area × yield per hectare"
        fields={[
          { key: "areaHectares", label: "Field area (hectares)", defaultValue: 40 },
          { key: "yieldPerHectareTons", label: "Yield (tons per hectare)", defaultValue: 3.5, step: 0.1 },
        ]}
        resultLabel="Estimated total harvest (tons)"
        formula="agriculturalYieldEstimate"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Try the calculator above with your region's typical crop yield to see how field size translates into total harvest tonnage.",
          "Next time you see a coffee bag labeled with an origin and elevation (e.g. '1,800m'), connect that number to the highland tropics effect keeping the growing region cool enough.",
          "Look up your own region's growing season length and compare it to a crop you'd like to grow — it's the single fastest way to check basic feasibility.",
          "Read the related entry on Climate Zones Explained to see the full climate-band map that crop belts are built on top of.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why does rice need so much water to grow?", answer: "Rice is typically grown in flooded paddies because standing water suppresses weeds and pests around the plant's roots while the rice itself tolerates waterlogged soil far better than most staple grains — a combination that made paddy farming especially productive in warm, humid monsoon Asia." },
          { question: "Why is coffee grown at high elevation near the equator?", answer: "Because elevation lowers temperature by roughly 6.5°C per 1,000 meters, creating cool, stable, frost-free conditions similar to what coffee would otherwise need at a much higher latitude — the highland tropics effect." },
          { question: "What is a growing season?", answer: "The period each year between the last damaging frost of spring and the first damaging frost of fall, during which temperature and daylight support a crop's growth from planting through harvest." },
          { question: "Why are the U.S. Midwest and Ukraine both called breadbaskets?", answer: "Both regions independently combine a temperate climate suitable for grain crops with thick, fertile loess soil — a fine, wind-deposited soil type — which together produce exceptionally high grain yields." },
          { question: "Can climate change shift where crops can be grown?", answer: "Yes — as regional temperature and rainfall patterns shift, the climate bands that support specific crops shift with them, which is why agricultural agencies track long-term growing-season and temperature trends closely for crop-planning purposes." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
