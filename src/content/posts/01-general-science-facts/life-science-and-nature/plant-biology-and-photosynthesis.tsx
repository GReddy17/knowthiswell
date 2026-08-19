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
  title: "Plant Biology & Photosynthesis: How Plants Turn Light Into Food",
  category: "general-science-facts",
  order: 32,
  subtopic: "life-science-and-nature",
  tags: [
    "photosynthesis",
    "plant biology",
    "chlorophyll",
    "chloroplast",
    "Calvin cycle",
    "plant science",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How photosynthesis converts light, water, and carbon dioxide into sugar and oxygen — and why most of a plant's mass never comes from the soil.",
  summary: "Photosynthesis is the process by which plants use light energy to convert carbon dioxide and water into glucose and oxygen, powering nearly all life on Earth's food chains.",
  sources: [
    { label: "NASA Science — The Carbon Cycle and Photosynthesis", url: "https://science.nasa.gov/climate-change/carbon-cycle/" },
    { label: "Encyclopaedia Britannica — Photosynthesis", url: "https://www.britannica.com/science/photosynthesis" },
    { label: "Smithsonian National Museum of Natural History — Plants", url: "https://naturalhistory.si.edu/education/teaching-resources/plants" },
    { label: "NOAA — Phytoplankton and Ocean Oxygen Production", url: "https://oceanservice.noaa.gov/facts/ocean-oxygen.html" },
  ],
  seeAlso: [
    "general-science-facts/ecosystems-and-food-chains",
    "general-science-facts/cells-and-genetics-basics",
    "general-science-facts/energy-types-and-conservation",
    "general-science-facts/matter-and-states-of-matter",
  ],
  glossary: [
    { term: "Photosynthesis", definition: "The process by which plants, algae, and some bacteria convert light energy, water, and carbon dioxide into glucose (sugar) and oxygen." },
    { term: "Chlorophyll", definition: "The green pigment in plants that absorbs light energy, mainly in the red and blue wavelengths, to power photosynthesis — it reflects green light, which is why plants look green." },
    { term: "Chloroplast", definition: "The plant cell structure where photosynthesis takes place, containing chlorophyll and organized into stacked membranes called thylakoids." },
    { term: "Stomata", definition: "Tiny pores, mostly on the underside of leaves, that open and close to let carbon dioxide in and oxygen and water vapor out." },
    { term: "Calvin cycle", definition: "The set of light-independent reactions in the chloroplast's stroma that use ATP and NADPH to convert carbon dioxide into glucose." },
    { term: "Light-dependent reactions", definition: "The first stage of photosynthesis, occurring in the thylakoid membrane, where light energy splits water molecules and produces ATP, NADPH, and oxygen." },
    { term: "C4 photosynthesis", definition: "A modified photosynthesis pathway used by plants like corn and sugarcane that reduces water loss and improves efficiency in hot, sunny conditions." },
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
          "Photosynthesis converts carbon dioxide, water, and light energy into glucose and oxygen — the balanced equation is 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂.",
          "Most of a plant's dry mass comes from carbon dioxide pulled from the air, not from the soil — a fact first demonstrated experimentally in the 1600s and confirmed by modern chemistry.",
          "Photosynthesis happens in two linked stages — light-dependent reactions that split water and release oxygen, and the Calvin cycle that uses that energy to build sugar from CO₂.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/general-science-facts/plant-biology-and-photosynthesis">Photosynthesis</TermLink> is how plants make their own food using sunlight. A plant takes in carbon dioxide from the air through tiny pores in its leaves, absorbs water through its roots, and uses light energy — captured by the green pigment <TermLink href="/general-science-facts/plant-biology-and-photosynthesis">chlorophyll</TermLink> — to combine them into glucose, a sugar the plant uses for energy and growth. Oxygen is released as a byproduct, which is why plants are often called the lungs of the planet: virtually all of the oxygen in Earth&apos;s atmosphere exists because of photosynthesis, past and present.</div>}
        detailed={<div className="prose-p">Photosynthesis happens inside <TermLink href="/general-science-facts/plant-biology-and-photosynthesis">chloroplasts</TermLink> in two linked stages. First, the <TermLink href="/general-science-facts/plant-biology-and-photosynthesis">light-dependent reactions</TermLink> occur in the thylakoid membranes: light energy splits water molecules (a process called photolysis), releasing oxygen as a byproduct and generating two energy-carrying molecules, ATP and NADPH. Second, the <TermLink href="/general-science-facts/plant-biology-and-photosynthesis">Calvin cycle</TermLink> takes place in the fluid surrounding the thylakoids (the stroma), using that ATP and NADPH to fix carbon dioxide into glucose through a series of enzyme-driven steps, the key enzyme being RuBisCO. Most plants use the standard &quot;C3&quot; version of this pathway, but plants adapted to hot, dry, or intensely sunny climates — corn and sugarcane, for example — use a modified <TermLink href="/general-science-facts/plant-biology-and-photosynthesis">C4 photosynthesis</TermLink> pathway that concentrates CO₂ before fixing it, reducing a wasteful side reaction called photorespiration. A separate adaptation, CAM photosynthesis, lets desert plants like cacti open their <TermLink href="/general-science-facts/plant-biology-and-photosynthesis">stomata</TermLink> only at night to minimize water loss, storing CO₂ until daylight makes the Calvin cycle possible.</div>}
      />
      <FootnoteAside>NOAA estimates that ocean phytoplankton — microscopic photosynthetic algae — produce roughly half of all the oxygen in Earth&apos;s atmosphere, meaning every other breath you take traces back to the ocean rather than land plants.</FootnoteAside>

      <p>
      That balance of gases going in and out is precise enough to write as a chemical equation, and running real numbers through it is the fastest way to see exactly what photosynthesis is trading for what.
      </p>

      <QuickCheck
        question="In the balanced photosynthesis equation 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂, where does the oxygen that's released actually come from?"
        options={[
          { text: "From the carbon dioxide molecules being split apart", correct: false, explanation: "The oxygen released in photosynthesis comes from splitting water molecules (photolysis) during the light-dependent reactions, not from carbon dioxide." },
          { text: "From splitting water molecules during the light-dependent reactions", correct: true, explanation: "Correct. Light energy splits H₂O into hydrogen (used to build energy carriers) and oxygen, which is released as a gas — this was confirmed using isotope-labeled water in classic 20th-century experiments." },
          { text: "From the glucose molecule breaking down after it's formed", correct: false, explanation: "Glucose is a product of photosynthesis, formed afterward in the Calvin cycle — it isn't the source of the released oxygen, which comes earlier, from water." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Reading the balanced equation with real quantities (baseline case)</h3>
      <div className="prose-p">
      The balanced equation 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂ means exactly what it says in whole-number terms: for every 6 molecules of carbon dioxide and 6 molecules of water a plant consumes (with light energy as the trigger), it produces 1 molecule of glucose and releases 6 molecules of oxygen. The ratio matters more than the raw numbers — a plant photosynthesizing at a higher rate simply scales all six quantities up together, consuming CO₂ and water in that fixed 1:1 ratio and releasing oxygen at exactly the same molecular rate it consumes carbon dioxide.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: How cacti photosynthesize without losing all their water (edge case / variation)</h3>
      <div className="prose-p">
      A cactus faces a real problem: opening its stomata during the day, when standard photosynthesis normally happens, would mean losing huge amounts of water to evaporation in desert heat. CAM plants (Crassulacean Acid Metabolism, named for the stonecrop plant family it was first studied in) solve this by splitting photosynthesis across time instead of running it continuously. At night, when temperatures drop and evaporation risk is low, the cactus opens its stomata, takes in CO₂, and stores it as an acid inside its cells. During the day, with stomata sealed shut to conserve water, the plant releases that stored CO₂ internally and runs the Calvin cycle using the daylight it still has access to. It&apos;s the same chemistry as ordinary photosynthesis, just re-timed to survive an environment where water loss, not light, is the limiting factor.
      </div>

      <QuickCheck
        question="Why do cacti and other desert plants often open their stomata at night instead of during the day?"
        options={[
          { text: "Photosynthesis chemically requires darkness to occur at all", correct: false, explanation: "Photosynthesis requires light, not darkness — CAM plants still run the light-dependent reactions and Calvin cycle during the day, using CO₂ they stored overnight." },
          { text: "Opening stomata at night lets them take in CO₂ while minimizing water loss to evaporation in the daytime desert heat", correct: true, explanation: "Correct. CAM photosynthesis stores CO₂ overnight as an acid, then uses it during the day with stomata closed, cutting water loss dramatically compared to keeping stomata open all day." },
          { text: "Nighttime CO₂ in the atmosphere is a different, more usable form than daytime CO₂", correct: false, explanation: "Atmospheric CO₂ doesn't change form between day and night — the adaptation is about timing water-losing stomata openings, not about different CO₂ chemistry." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why greenhouse growers pump in extra CO₂ (real-world / applied case)</h3>
      <p>
      Commercial greenhouse operators often raise carbon dioxide levels inside their greenhouses to two or three times the normal atmospheric concentration (roughly 420 parts per million outdoors) because CO₂ availability is frequently the limiting factor on photosynthesis rate when light and water are already abundant. With more CO₂ available, the Calvin cycle can fix carbon faster, directly increasing glucose production and, in turn, plant growth and crop yield — a practical, economically motivated confirmation that photosynthesis really is a chemical reaction with measurable inputs and outputs, not just a vague biological process. The same principle explains why rising atmospheric CO₂ has measurable, complex effects on plant growth rates globally, an active area of climate and agricultural research.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The two stages of photosynthesis inside a chloroplast"
        type="flow"
        svgSrc="/diagrams/general-science-facts-plant-biology-and-photosynthesis-two-stages.svg"
        altText="Diagram of a chloroplast cross-section showing light entering the thylakoid membrane stack where water is split into oxygen (released) plus ATP and NADPH, arrows carrying ATP and NADPH to the surrounding stroma where the Calvin cycle uses them along with carbon dioxide to build glucose, labeled as the two connected stages: light-dependent reactions and the Calvin cycle."
      />
      <p>
      Follow the arrows: light strikes the thylakoid membranes first, splitting water and releasing oxygen straight out of the leaf while generating ATP and NADPH. Those two energy carriers then flow into the stroma, where the Calvin cycle uses their stored energy to grab carbon dioxide molecules from the air and stitch them into glucose. The two stages are chemically dependent on each other — the Calvin cycle can&apos;t run without ATP and NADPH from the light reactions, which is why photosynthesis, despite the Calvin cycle itself not directly requiring light, still stops almost immediately in darkness once the supply of stored ATP and NADPH runs out.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking photosynthesis is the only thing plants do with gases, and that plants never 'breathe' in the way animals do.", fix: "Plants also respire around the clock, consuming oxygen and releasing CO₂ to generate usable energy from glucose — photosynthesis and respiration are separate, simultaneous processes, with photosynthesis simply producing far more oxygen than respiration consumes during daylight." },
          { mistake: "Assuming photosynthesis only happens in leaves.", fix: "It happens in any plant tissue containing chlorophyll and exposed to light — green stems and unripe green fruit can photosynthesize too, just typically at a much lower rate than leaves." },
          { mistake: "Believing plants get most of their physical mass and 'food' from the soil.", fix: "The large majority of a plant's dry mass comes from carbon captured out of the air as CO₂ during photosynthesis. Soil mainly supplies water and a small set of minerals, not bulk mass." },
        ]}
      />
      <MisconceptionCallout
        myth="Plants grow mostly by absorbing mass and food from the soil, the way a sponge absorbs water."
        reality={<p>This was directly tested nearly 400 years ago by Belgian scientist Jan Baptist van Helmont, who grew a willow tree in a weighed pot of soil for five years, watering it but adding nothing else. The tree gained about 74 kilograms, while the soil lost less than 100 grams. Van Helmont wrongly concluded the extra mass came entirely from water, but modern chemistry completes the picture: the overwhelming majority of a plant&apos;s dry mass is built from carbon dioxide pulled out of the air and fixed into glucose through photosynthesis, not from soil. Soil mainly supplies water absorbed through roots and a relatively small quantity of minerals like nitrogen and phosphorus — critical for plant health, but not the bulk material a plant is made of.</p>}
      />

      <QuickCheck
        question="A large tree gains hundreds of kilograms of mass over its lifetime while the soil around it barely loses any weight. Where does most of that mass actually come from?"
        options={[
          { text: "Mostly from carbon dioxide in the air, fixed into glucose and plant structure through photosynthesis", correct: true, explanation: "Correct. The bulk of a plant's dry mass is built from atmospheric carbon captured during photosynthesis, not absorbed from the soil — a result first suggested by the 17th-century willow tree experiment and confirmed by modern chemistry." },
          { text: "Mostly from minerals and nutrients absorbed directly from the soil", correct: false, explanation: "Soil minerals are essential for plant health but make up only a small fraction of a plant's total mass — they aren't the bulk building material." },
          { text: "Mostly from sunlight itself being converted directly into physical mass", correct: false, explanation: "Light provides the energy that powers the chemical reaction, but light itself has no mass to contribute — the actual physical building blocks come from carbon dioxide and water." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a houseplant leaning toward a window, connect it to photosynthesis — the plant is maximizing light exposure to its chlorophyll-containing leaves.",
          "Look at the underside of a leaf with a magnifying glass if you have one; the stomata pores (invisible to the naked eye) are where the plant's CO₂ intake and oxygen release actually happen.",
          "Notice succulents and cacti opening their care instructions around watering at specific times — that indirectly reflects their CAM photosynthesis water-conservation strategy.",
          "Read the related entry on Ecosystems & Food Chains to see how the glucose plants produce becomes the energy base for nearly every food chain on Earth.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the equation for photosynthesis?", answer: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. Six molecules of carbon dioxide and six of water, powered by light, combine into one glucose molecule and six oxygen molecules." },
          { question: "Where does photosynthesis take place in a plant?", answer: "Inside chloroplasts, mainly in leaf cells, though any green plant tissue with chlorophyll and light exposure can photosynthesize. The light-dependent reactions occur in the thylakoid membranes; the Calvin cycle occurs in the surrounding stroma." },
          { question: "Do plants only produce oxygen and never use any?", answer: "No. Plants also respire continuously, consuming oxygen and releasing CO₂ to generate energy from glucose, just like animals do. During daylight, photosynthesis produces far more oxygen than respiration consumes, giving a net oxygen release." },
          { question: "Do plants get their food from soil?", answer: "No, not in bulk. Most of a plant's dry mass comes from carbon dioxide captured from the air via photosynthesis. Soil primarily supplies water and a smaller set of essential minerals, not the bulk material plants are made of." },
          { question: "What is chlorophyll and why are plants green?", answer: "Chlorophyll is the pigment inside chloroplasts that absorbs light energy for photosynthesis. It absorbs red and blue wavelengths most strongly and reflects green light, which is why healthy plant leaves appear green to our eyes." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
