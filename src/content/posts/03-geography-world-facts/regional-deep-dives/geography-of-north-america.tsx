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
  title: "Geography of North America: Regions, Ranges & Key Facts",
  category: "geography-world-facts",
  order: 26,
  subtopic: "regional-deep-dives",
  tags: [
    "geography of north america",
    "north america continent",
    "rocky mountains",
    "isthmus of panama",
    "canadian shield",
    "continents",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "North America's physiographic regions, its highest point, and why the continent's official southern border sits at the Isthmus of Panama.",
  summary: "North America is Earth's third-largest continent, built from distinct west-to-east bands — the Rockies, the Great Plains, and the Appalachians — atop an ancient bedrock core.",
  sources: [
    { label: "Encyclopaedia Britannica — North America", url: "https://www.britannica.com/place/North-America" },
    { label: "National Geographic Education — The Continents: North America", url: "https://education.nationalgeographic.org/resource/continents-north-america/" },
    { label: "U.S. Geological Survey — New Elevation for Nation's Highest Peak (Denali)", url: "https://www.usgs.gov/news/national-news-release/new-elevation-nations-highest-peak" },
  ],
  seeAlso: [
    "geography-world-facts/geography-of-south-america",
    "geography-world-facts/geography-of-europe",
    "geography-world-facts/geography-of-asia",
    "geography-world-facts/continents-and-oceans-overview",
    "geography-world-facts/mountains-and-mountain-ranges",
    "geography-world-facts/rivers-and-major-watersheds",
  ],
  glossary: [
    { term: "Isthmus", definition: "A narrow strip of land connecting two larger landmasses, with water on both sides — the Isthmus of Panama connects North and South America." },
    { term: "Physiographic region", definition: "A large area defined by shared landform type, geology, and terrain history, such as the Great Plains or the Canadian Shield." },
    { term: "Canadian Shield", definition: "A vast area of ancient, exposed Precambrian bedrock covering much of eastern and central Canada, among the oldest rock on Earth's surface." },
    { term: "Continental Divide", definition: "The line running along the Rocky Mountains that separates rivers flowing toward the Pacific Ocean from those flowing toward the Atlantic or Arctic." },
    { term: "Appalachian Mountains", definition: "An old, heavily eroded mountain range running along eastern North America, among the oldest mountain systems on Earth at roughly 480 million years." },
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
          "North America is Earth's third-largest continent at about 24.71 million km², built from distinct west-to-east bands: the young, rugged Rocky Mountains, the flat Great Plains, and the old, worn-down Appalachian Mountains.",
          "The continent's highest point is Denali, Alaska, officially remeasured by the USGS in 2015 at 20,310 feet (6,190 meters) using modern GPS survey methods — 10 feet lower than the figure used for the previous six decades.",
          "North America's conventional southern boundary is the Isthmus of Panama, a land bridge narrowing to about 80 km — everything south of it, including all of Central America south of that point, is conventionally part of North America too, not a separate landmass.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/geography-world-facts/geography-of-north-america">North America</TermLink> is the third-largest continent, stretching from the Arctic islands of Canada down through the United States, Mexico, and Central America to the narrow land bridge connecting it to South America. Its interior runs in clear bands from west to east: rugged young mountains along the Pacific coast, a huge flat interior of plains, and older, rounder mountains along the Atlantic side — a layout that&apos;s easy to see on any physical relief map.</div>}
        detailed={<div className="prose-p">North America divides into several major <TermLink href="/geography-world-facts/geography-of-north-america">physiographic regions</TermLink>. Along the west, the Rocky Mountains form a young, tectonically active range still being uplifted by the Pacific and North American plates, with the <TermLink href="/geography-world-facts/geography-of-north-america">Continental Divide</TermLink> running along their spine, separating rivers that flow toward the Pacific from those flowing toward the Atlantic or Arctic. The center of the continent is dominated by the Great Plains, a vast, relatively flat sedimentary basin, and by the <TermLink href="/geography-world-facts/geography-of-north-america">Canadian Shield</TermLink>, an exposed core of some of the oldest rock on Earth&apos;s surface (over 2.5 billion years old in places), forming the geological anchor around which the rest of the continent has been built. To the east, the <TermLink href="/geography-world-facts/geography-of-north-america">Appalachian Mountains</TermLink> are dramatically older than the Rockies — roughly 480 million years versus around 70 million — and have been worn down by erosion into much gentler, rounder peaks despite once rivaling the Himalayas in height. Conventionally, North America&apos;s southern boundary runs along the Isthmus of Panama, making all of Central America part of the continent rather than a separate landmass.</div>}
      />
      <FootnoteAside>The Appalachian Mountains and the mountains of Scotland and Scandinavia were once part of the same continuous mountain range, formed when the ancient supercontinents collided hundreds of millions of years ago — they were only separated when the Atlantic Ocean opened up and pulled the landmasses apart.</FootnoteAside>

      <p>
      Those west-to-east bands aren&apos;t just a visual pattern — they reflect real differences in the age and formation history of each region, which becomes clearer with specific numbers.
      </p>

      <QuickCheck
        question="The Rocky Mountains are jagged and sharply peaked, while the Appalachian Mountains are rounded and much lower. What best explains this difference?"
        options={[
          { text: "The Appalachians are far older (about 480 million years) and have been eroded for hundreds of millions of years longer than the younger, still-active Rockies (about 70 million years)", correct: true, explanation: "Correct. Mountain height and sharpness generally decrease with age as erosion wears them down — the Appalachians have had roughly 400 million extra years of weathering compared to the still-uplifting Rockies." },
          { text: "The Rockies are made of a harder type of rock than the Appalachians", correct: false, explanation: "Rock composition varies within both ranges and isn't the primary explanation — the dominant factor is the large age gap and how long each range has been exposed to erosion." },
          { text: "The Appalachians never rose very high in the first place", correct: false, explanation: "The opposite is true — geologists estimate the Appalachians once reached heights rivaling the modern Himalayas before roughly 480 million years of erosion wore them down." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: North America&apos;s share of Earth&apos;s land area (baseline case)</h3>
      <div className="prose-p">
      North America covers approximately 24,709,000 km² out of Earth&apos;s total land area of roughly 148,940,000 km². Dividing gives 24,709,000 ÷ 148,940,000 ≈ 0.166, or about <strong>16.6% of all land on Earth</strong> — making it the third-largest continent, behind Asia (29.9%) and Africa (20.4%), and just ahead of South America (12.0%).
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why Denali&apos;s official height changed in 2015 (edge case / variation)</h3>
      <div className="prose-p">
      For decades, Denali (formerly Mount McKinley) was listed at 20,320 feet, a figure based on 1950s-era surveying technology. In 2015, a USGS-led team of climbers and GPS specialists reached the summit and used modern satellite-based measurement to establish a new official height: 20,310 feet (6,190 meters) — 10 feet lower than the old figure. This wasn&apos;t a case of the mountain shrinking; it reflected genuinely more precise measurement technology replacing an older, less accurate one. It&apos;s a useful reminder that even well-established geographic &quot;facts&quot; like a mountain&apos;s exact height are periodically revised as measurement tools improve, and that a changed number doesn&apos;t necessarily mean the underlying feature changed.
      </div>

      <QuickCheck
        question="In 2015, the USGS revised Denali's official elevation from 20,320 feet down to 20,310 feet. What does this change reflect?"
        options={[
          { text: "The mountain physically shrank by 10 feet between the two measurements", correct: false, explanation: "Mountains don't lose elevation that quickly through normal geological processes — this small a change over just decades points to measurement precision, not physical shrinkage." },
          { text: "More accurate modern GPS survey technology replaced the older, less precise 1950s-era measurement method", correct: true, explanation: "Correct. A 2015 USGS-led team used modern satellite GPS equipment at the summit to establish a more precise figure, revising the long-used 1950s-era number." },
          { text: "The two measurements used different starting points for 'sea level'", correct: false, explanation: "Both measurements used standard sea-level reference systems — the revision came from improved survey precision, not a change in the reference point." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The Continental Divide and where North America&apos;s rivers actually go (real-world / applied case)</h3>
      <p>
      The Continental Divide runs along the crest of the Rocky Mountains from Alaska down through Canada, the United States, and into Mexico, and it determines the ultimate destination of nearly every drop of rain that falls on the continent&apos;s western half. Rain falling just east of the divide in Montana eventually flows into rivers feeding the Mississippi and, eventually, the Gulf of Mexico — a journey of thousands of kilometers. Rain falling just a few hundred meters away, on the western side of the same ridge, flows instead toward the Pacific Ocean via much shorter river systems like the Columbia or Colorado. This single geographic line — often just a ridge a hiker can straddle — quietly dictates the water supply, irrigation planning, and river-basin management for a huge share of the continent&apos;s population.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="North America's west-to-east physiographic bands"
        type="detail"
        svgSrc="/diagrams/geography-world-facts-geography-of-north-america-physiographic-regions-map.svg"
        altText="A simplified cross-section map of North America showing, from west to east, the Pacific coastal ranges, the young and jagged Rocky Mountains with the Continental Divide marked along their crest, the flat Great Plains, the ancient Canadian Shield bedrock core, and the older, rounded Appalachian Mountains along the eastern edge, with the narrow Isthmus of Panama marked at the continent's southern tip."
      />
      <p>
      Scan the diagram left to right and the pattern is a rough timeline in rock: young, sharp terrain in the west gives way to the ancient, worn-smooth Canadian Shield at the core, then to the old, rounded Appalachians in the east — three very different ages of geology sitting on one continent. The narrow Isthmus of Panama at the bottom is the entire conventional link to South America, a corridor so narrow it&apos;s also the site of the Panama Canal.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking North America only includes the United States and Canada.", fix: "Conventionally, North America extends south through Mexico and all of Central America to the Isthmus of Panama — Mexico and the Central American countries are part of the same continent, not a separate one." },
          { mistake: "Assuming all of North America's mountain ranges are roughly the same age.", fix: "The Rocky Mountains (around 70 million years, still uplifting) and the Appalachian Mountains (around 480 million years, heavily eroded) differ in age by hundreds of millions of years, which is why they look so different." },
          { mistake: "Treating a mountain's official elevation as a permanently fixed number.", fix: "Official elevations are periodically revised as survey technology improves — Denali's official height changed by 10 feet in 2015 due to better GPS measurement, not because the mountain changed." },
        ]}
      />
      <MisconceptionCallout
        myth="North America is just the United States and Canada — Mexico and Central America belong to a separate region."
        reality={<p>By standard geographic convention, North America extends all the way from the Arctic islands of Canada down through the United States, Mexico, and every Central American country to the Isthmus of Panama. Mexico and Central America are not a separate continent or a transitional &quot;in-between&quot; zone — they sit on the North American tectonic plate and are part of the same continent as the US and Canada. &quot;Central America&quot; is a cultural and regional subdivision within North America, similar to how &quot;Southeast Asia&quot; is a subregion within Asia, not a separate continent of its own.</p>}
      />

      <QuickCheck
        question="Is Mexico part of North America or a separate continent?"
        options={[
          { text: "Mexico is part of North America — the continent conventionally extends south through Mexico and Central America to the Isthmus of Panama", correct: true, explanation: "Correct. North America's conventional southern boundary is the Isthmus of Panama, meaning Mexico and all of Central America are part of the same continent as the US and Canada." },
          { text: "Mexico belongs to South America, since it's south of the United States", correct: false, explanation: "Mexico sits entirely north of the Isthmus of Panama and the North American continent's conventional boundary — it is not part of South America." },
          { text: "Mexico and Central America form their own separate continent", correct: false, explanation: "There is no separate 'Central American continent' in standard geographic convention — Central America is a regional subdivision within the continent of North America." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Travel time across a distance at a given speed"
        fields={[
          { key: "distanceKm", label: "Distance (km) — e.g. Los Angeles to New York is about 3,940 km", defaultValue: 3940, step: 10 },
          { key: "speedKmh", label: "Average speed (km/h)", defaultValue: 100, step: 5 },
        ]}
        resultLabel="Travel time (hours)"
        formula="travelTimeHours"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Trace the Continental Divide along the Rocky Mountains on a map and pick two nearby points on either side — notice how far apart their rivers end up flowing.",
          "Compare the Rockies and the Appalachians on a relief map and connect their visual difference (jagged vs. rounded) to their roughly 400-million-year age gap.",
          "Use the calculator above to estimate driving time across a stretch of North America you're curious about.",
          "Read the related entry on Geography of South America to see what's on the other side of the Isthmus of Panama.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What countries are part of North America?", answer: "North America conventionally includes Canada, the United States, Mexico, all Central American countries, and the Caribbean island nations — extending south to the Isthmus of Panama, which marks the boundary with South America." },
          { question: "What is the highest point in North America?", answer: "Denali, in Alaska, at 20,310 feet (6,190 meters), officially remeasured by the USGS in 2015 using modern GPS survey technology." },
          { question: "Where does North America end and South America begin?", answer: "At the Isthmus of Panama, a narrow land bridge that narrows to about 80 km at its slimmest point — it's also where the Panama Canal was built to connect the Atlantic and Pacific." },
          { question: "Why are the Rocky Mountains taller and more jagged than the Appalachian Mountains?", answer: "The Rockies are much younger (roughly 70 million years) and still tectonically active, while the Appalachians are far older (roughly 480 million years) and have been worn down by hundreds of millions of years of additional erosion." },
          { question: "What is the Canadian Shield?", answer: "A vast region of exposed, extremely old bedrock — some of it over 2.5 billion years old — covering much of eastern and central Canada, forming the ancient geological core around which the rest of North America built up over time." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
