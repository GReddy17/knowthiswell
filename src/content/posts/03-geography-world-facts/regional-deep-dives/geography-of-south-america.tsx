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
  title: "Geography of South America: Andes, Amazon & Key Facts",
  category: "geography-world-facts",
  order: 27,
  subtopic: "regional-deep-dives",
  tags: [
    "geography of south america",
    "south america continent",
    "andes mountains",
    "amazon rainforest",
    "atacama desert",
    "continents",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "South America's Andes-to-Amazon geography, its driest and wettest extremes, and the real answer to whether the Amazon or Nile is longer.",
  summary: "South America is Earth's fourth-largest continent, dominated by the longest continental mountain range on Earth and the highest-discharge river system on the planet.",
  sources: [
    { label: "Encyclopaedia Britannica — South America", url: "https://www.britannica.com/place/South-America" },
    { label: "National Geographic Education — The Continents: South America", url: "https://education.nationalgeographic.org/resource/continents-south-america/" },
    { label: "United Nations — World Population Prospects", url: "https://population.un.org/wpp/" },
  ],
  seeAlso: [
    "geography-world-facts/geography-of-north-america",
    "geography-world-facts/geography-of-africa",
    "geography-world-facts/geography-of-australia-and-oceania",
    "geography-world-facts/rivers-and-major-watersheds",
    "geography-world-facts/mountains-and-mountain-ranges",
    "geography-world-facts/continents-and-oceans-overview",
  ],
  glossary: [
    { term: "Andes", definition: "The longest continental mountain range on Earth, stretching roughly 7,000 km along South America's western edge, formed by the Nazca Plate subducting beneath the South American Plate." },
    { term: "Amazon Basin", definition: "The roughly 7 million km² drainage area of the Amazon River and its tributaries, covering about 40% of South America and containing the world's largest tropical rainforest." },
    { term: "Altiplano", definition: "A high-elevation plateau in the central Andes, averaging around 3,750 meters, shared mainly by Bolivia and Peru." },
    { term: "Atacama Desert", definition: "A narrow desert along the Pacific coast of Chile, widely considered the driest non-polar place on Earth, with some weather stations having never recorded measurable rainfall." },
    { term: "River discharge", definition: "The volume of water flowing past a given point in a river per unit of time, typically measured in cubic meters per second — the measure by which the Amazon is the world's largest river by far." },
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
          "South America is Earth's fourth-largest continent at about 17.84 million km², defined by the Andes running the length of its western edge and the Amazon Basin covering roughly 40% of its interior.",
          "The Amazon River carries more water than the next several largest rivers on Earth combined — by discharge volume it's not a close contest, even though its exact length versus the Nile remains genuinely debated.",
          "South America holds both climate extremes: the Atacama Desert, the driest non-polar place on Earth, sits less than 2,000 km from the Amazon rainforest, one of the wettest.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/geography-world-facts/geography-of-south-america">South America</TermLink> is the fourth-largest continent, shaped like a wedge that narrows toward the south. Its geography is dominated by two huge features: the <TermLink href="/geography-world-facts/geography-of-south-america">Andes</TermLink> mountain range running almost the entire length of its Pacific coast, and the Amazon rainforest and river system covering most of its northern interior. Between those two extremes sit deserts, grassland plains, and one of the driest places on Earth.</div>}
        detailed={<div className="prose-p">The Andes formed — and continue to form — as the oceanic Nazca Plate subducts beneath the continental South American Plate, producing both the range&apos;s extreme height and its high volcanic and seismic activity; it&apos;s the longest continental mountain range on Earth at roughly 7,000 km. East of the Andes, the <TermLink href="/geography-world-facts/geography-of-south-america">Amazon Basin</TermLink> drains water from a huge share of the continent&apos;s interior into the Amazon River, which by <TermLink href="/geography-world-facts/geography-of-south-america">river discharge</TermLink> is by far the largest river system on Earth — it releases more water into the ocean than the next several largest rivers combined. In sharp contrast, a narrow strip along Chile&apos;s Pacific coast forms the <TermLink href="/geography-world-facts/geography-of-south-america">Atacama Desert</TermLink>, kept extremely dry by the cold offshore Humboldt Current and by the rain-shadow effect of the Andes blocking moisture from the east — some Atacama weather stations have no confirmed rainfall in the entire instrumental record.</div>}
      />
      <FootnoteAside>The Atacama Desert is so consistently dry and clear that astronomers use it to host some of the world&apos;s most powerful observatories, including the Atacama Large Millimeter Array — the same lack of atmospheric moisture that prevents rain also keeps the night sky exceptionally clear for telescopes.</FootnoteAside>

      <p>
      That dry-to-wet extreme within a single continent is a good entry point into South America&apos;s other defining contrast: how &quot;world&apos;s longest river&quot; is measured, and why the Amazon and the Nile keep trading that title depending on the method used.
      </p>

      <QuickCheck
        question="The Atacama Desert (Chile) and the Amazon Rainforest are both in South America, separated by less than 2,000 km, yet one is the driest non-polar place on Earth and the other among the wettest. What best explains this?"
        options={[
          { text: "The Andes block moisture from reaching the Atacama from the east, while a cold offshore current suppresses rainfall from the west — conditions the Amazon, far from both effects, doesn't share", correct: true, explanation: "Correct. The Atacama's extreme dryness comes from the Andes rain-shadow effect plus the cold Humboldt Current offshore; the Amazon sits in a completely different setting, driven by warm, moisture-laden equatorial air." },
          { text: "The Atacama and Amazon are actually much farther apart than commonly stated", correct: false, explanation: "They genuinely sit less than 2,000 km apart in places — the extreme climate contrast despite that proximity is exactly what makes it a notable geographic feature, not a measurement error." },
          { text: "The Amazon rainforest creates artificial rainfall that reaches the Atacama and then evaporates before landing", correct: false, explanation: "This isn't how the region's climate works — the Atacama's dryness is caused by the Andes rain-shadow and the Humboldt Current, independent of Amazon rainfall patterns." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: South America&apos;s share of Earth&apos;s land area (baseline case)</h3>
      <div className="prose-p">
      South America covers approximately 17,840,000 km² out of Earth&apos;s total land area of roughly 148,940,000 km². Dividing gives 17,840,000 ÷ 148,940,000 ≈ 0.120, or about <strong>12.0% of all land on Earth</strong> — the fourth-largest continent, just behind North America&apos;s 16.6% and ahead of Antarctica&apos;s roughly 9.5%.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Amazon vs. Nile — the &quot;longest river&quot; debate (edge case / variation)</h3>
      <div className="prose-p">
      For over a century, the Nile (roughly 6,650 km) has been the textbook answer to &quot;world&apos;s longest river,&quot; with the Amazon (traditionally cited around 6,400 km) a close second. But this comparison is genuinely contested: both rivers&apos; exact lengths depend on which specific tributary is counted as the &quot;true source,&quot; and different survey expeditions since the 1970s have proposed Amazon-source measurements that would place it slightly ahead of the Nile. What isn&apos;t contested is discharge — the Amazon releases an estimated 209,000 cubic meters of water per second into the Atlantic, more than the next seven largest rivers on Earth combined, while the Nile&apos;s discharge is a small fraction of that. So depending on which measurement you care about — length or volume — the &quot;world&apos;s largest river&quot; title has two different, equally defensible answers.
      </div>

      <QuickCheck
        question="Is the Amazon or the Nile the 'world's longest river'?"
        options={[
          { text: "It depends on the measurement: length is genuinely contested and depends on which source tributary is counted, but by water discharge volume the Amazon is far and away the largest river on Earth", correct: true, explanation: "Correct. The Nile has traditionally been cited as slightly longer, but different source-tributary surveys have challenged that, and by discharge — the volume of water carried — the Amazon vastly exceeds every other river on Earth, including the Nile." },
          { text: "The Nile is unambiguously longer and carries more water than the Amazon", correct: false, explanation: "The Amazon carries dramatically more water than the Nile — by discharge it's not close. Length is the only genuinely contested measurement between the two." },
          { text: "The Amazon is unambiguously both longer and higher-discharge than the Nile, with no real debate", correct: false, explanation: "Discharge isn't in dispute — the Amazon wins clearly. But length remains a genuinely open question among geographers depending on which source tributary is used." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The Andes&apos; role in South America&apos;s climate and agriculture (real-world / applied case)</h3>
      <p>
      The Andes don&apos;t just define South America&apos;s skyline — they actively shape rainfall patterns across the entire continent. Moist air moving west off the Atlantic is forced upward as it crosses the Amazon Basin and then slams into the eastern slopes of the Andes, dropping most of its remaining moisture before crossing the peaks — which is the direct cause of the extreme dryness on the range&apos;s western, Pacific-facing side, including the Atacama. This same rain-shadow mechanism supports high-altitude agriculture: the Altiplano, a high plateau shared by Bolivia and Peru at around 3,750 meters, developed distinct farming practices (terracing, potato cultivation adapted to thin air and cold nights) precisely because of the unique climate the surrounding peaks create — a direct, observable link between mountain geography and how millions of people farm today.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="South America's Andes-to-Amazon cross-section"
        type="detail"
        svgSrc="/diagrams/geography-world-facts-geography-of-south-america-andes-amazon-cross-section.svg"
        altText="A west-to-east cross-section of South America showing the narrow Atacama Desert along the Pacific coast, the towering Andes mountain range rising sharply behind it with the Altiplano plateau marked near its crest, moist air arrows sweeping west from the Atlantic and rising over the Amazon Basin before dropping rain on the Andes' eastern slopes, and the vast Amazon rainforest and river system filling the continent's northern interior."
      />
      <p>
      Follow the moisture arrows from the Atlantic and the whole pattern clicks into place: warm, wet air crosses the Amazon Basin, climbs the Andes&apos; eastern face, and drops nearly all its remaining rain before it can cross to the Pacific side — which is exactly why the Atacama, sitting in the Andes&apos; rain shadow, stays so extraordinarily dry.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the Amazon rainforest covers all of South America.", fix: "The Amazon Basin covers roughly 40% of South America, concentrated in the north — the continent also contains deserts (Atacama), grassland plains (Pampas), and high plateaus (Altiplano)." },
          { mistake: "Treating 'longest river' and 'largest river' as the same measurement.", fix: "Length (Nile vs. Amazon) is genuinely contested; discharge volume is not — the Amazon carries far more water than any other river on Earth, including the Nile, by a wide margin." },
          { mistake: "Assuming a desert must be hot, so a 'driest place on Earth' claim about a coastal region seems implausible.", fix: "Dryness is defined by lack of precipitation, not temperature — the Atacama's extreme dryness comes from the Andes rain shadow and a cold offshore current, not desert heat." },
        ]}
      />
      <MisconceptionCallout
        myth="The Amazon River is unambiguously the world's longest river, full stop."
        reality={<p>The Amazon is unambiguously the world&apos;s largest river by discharge — it carries more water than the next seven largest rivers on Earth combined. But &quot;longest&quot; is a genuinely different and more contested measurement: for over a century, the Nile has been the more commonly cited longest river, and while some expeditions have proposed Amazon source measurements that would edge it ahead, the exact length of both rivers depends on which tributary is counted as the true headwater. Conflating &quot;largest&quot; and &quot;longest&quot; produces a confident-sounding claim that oversimplifies a genuinely unsettled geographic question.</p>}
      />

      <QuickCheck
        question="Which claim about the Amazon River is accurate?"
        options={[
          { text: "The Amazon is unambiguously the largest river on Earth by water discharge, but its exact ranking as 'longest' compared to the Nile remains genuinely debated among geographers", correct: true, explanation: "Correct. Discharge volume settles decisively in the Amazon's favor; length depends on which source tributary is counted, and different surveys have reached different conclusions relative to the Nile." },
          { text: "The Amazon is both the longest and largest river with no scientific debate on either point", correct: false, explanation: "Discharge isn't in dispute, but length is — this is a real, ongoing debate among geographers depending on measurement methodology, not a settled fact." },
          { text: "The Amazon's status as the largest river by discharge is disputed, but its length ranking is settled", correct: false, explanation: "This has it backwards — discharge is the settled measurement (the Amazon wins clearly), while length is the genuinely contested one." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Population density: people per km² given population and land area"
        fields={[
          { key: "population", label: "Population", defaultValue: 436000000, step: 1000000 },
          { key: "areaKm2", label: "Land area (km²)", defaultValue: 17840000, step: 10000 },
        ]}
        resultLabel="Population density (people per km²)"
        formula="populationDensityPerKm2"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Trace the Andes on a map from Venezuela down to the southern tip of Chile and Argentina and notice how consistently it hugs the Pacific coast for the entire 7,000 km.",
          "Compare South America's population density (using the calculator above) against Asia's or Europe's from their own entries to see how much emptier South America's interior is by comparison.",
          "Look up current Amazon-vs-Nile length claims from two different sources and see whether they agree — it's a genuinely live debate, not settled trivia.",
          "Read the related entry on Rivers & Major Watersheds to see how the Amazon's discharge compares to other major world rivers in detail.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is the Amazon or the Nile the longest river in the world?", answer: "It's genuinely debated. The Nile has traditionally been cited as slightly longer (about 6,650 km vs. roughly 6,400 km for the Amazon), but different source-tributary measurements have challenged that. By water discharge, however, the Amazon is unambiguously the largest river on Earth, carrying more water than the next seven largest rivers combined." },
          { question: "What is the driest place on Earth?", answer: "Parts of Chile's Atacama Desert are considered the driest non-polar place on Earth — some weather stations there have no confirmed rainfall in the entire instrumental record, a result of the Andes rain-shadow effect combined with the cold offshore Humboldt Current." },
          { question: "What is the longest mountain range in the world?", answer: "The Andes, running roughly 7,000 km along South America's western edge — it's the longest continental mountain range on Earth, formed by the Nazca Plate subducting beneath the South American Plate." },
          { question: "How big is South America compared to other continents?", answer: "South America covers about 17.84 million km², roughly 12.0% of Earth's total land area, making it the fourth-largest continent after Asia, Africa, and North America." },
          { question: "What percentage of South America is covered by the Amazon rainforest?", answer: "The Amazon Basin covers roughly 40% of South America's total land area, spanning parts of Brazil, Peru, Colombia, and several other countries." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
