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
  title: "Ecosystems & Food Chains: How Energy Moves Through Nature",
  category: "general-science-facts",
  order: 33,
  subtopic: "life-science-and-nature",
  tags: [
    "food chains",
    "food webs",
    "ecosystems",
    "trophic levels",
    "energy pyramid",
    "10 percent rule",
  ],
  date: "2026-08-16",
  updated: "2026-08-19",
  lastReviewed: "2026-08-19",
  excerpt: "What makes something an ecosystem, why only about 10% of energy passes to the next link in a food chain, and how that single rule explains why apex predators are always rare.",
  summary: "A food chain is a sequence of who-eats-whom that moves energy through an ecosystem, and at each step roughly 90% of that energy is lost as heat rather than passed on.",
  sources: [
    { label: "National Geographic — Food Chain", url: "https://education.nationalgeographic.org/resource/food-chain/" },
    { label: "Encyclopaedia Britannica — Ecological Pyramid", url: "https://www.britannica.com/science/ecological-pyramid" },
    { label: "NOAA — Ocean Food Webs", url: "https://oceanservice.noaa.gov/facts/foodweb.html" },
    { label: "Smithsonian National Museum of Natural History — Ecosystems", url: "https://naturalhistory.si.edu/education/teaching-resources/ecosystems" },
  ],
  seeAlso: [
    "general-science-facts/plant-biology-and-photosynthesis",
    "general-science-facts/energy-types-and-conservation",
    "general-science-facts/evolution-and-natural-selection-basics",
    "general-science-facts/symbiosis-and-animal-relationships",
  ],
  glossary: [
    { term: "Food chain", definition: "A linear sequence showing how energy passes from one organism to the next through eating relationships, starting with a producer." },
    { term: "Food web", definition: "The full, interconnected network of overlapping food chains within an ecosystem, showing that most organisms eat and are eaten by more than one species." },
    { term: "Trophic level", definition: "An organism's position in a food chain, based on how many energy transfers separate it from the original energy source (usually sunlight)." },
    { term: "Producer", definition: "An organism, typically a plant or algae, that makes its own food from sunlight via photosynthesis, forming the energy base of nearly every food chain." },
    { term: "Consumer", definition: "An organism that gets its energy by eating other organisms rather than producing its own food — herbivores, carnivores, and omnivores are all consumers." },
    { term: "Decomposer", definition: "An organism, such as fungi or bacteria, that breaks down dead organic matter, returning nutrients to the ecosystem." },
    { term: "10% rule", definition: "The ecological principle that only about 10% of the energy at one trophic level is available to the next level up, with roughly 90% lost mainly as metabolic heat." },
    { term: "Ecosystem", definition: "A community of living organisms interacting with each other and with the non-living parts of their environment (water, soil, air, sunlight, temperature) within a defined area." },
    { term: "Biotic factor", definition: "A living or once-living part of an ecosystem — every plant, animal, fungus, and microorganism in it." },
    { term: "Abiotic factor", definition: "A non-living part of an ecosystem that still shapes what can live there — sunlight, temperature, water availability, soil chemistry, and rainfall are the main ones." },
    { term: "Biome", definition: "A large-scale category of ecosystems sharing a similar climate and dominant plant/animal life, such as desert, tropical rainforest, tundra, or grassland." },
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
          "A food chain traces energy from producers (usually plants) through a series of consumers, and at each step roughly 90% of the energy is lost, mostly as metabolic heat — only about 10% transfers to the next level.",
          "Real ecosystems are food webs, not single chains — most animals eat, and are eaten by, more than one species, so removing one species can ripple through many connected food chains at once.",
          "The 10% rule is why apex predators are always rare compared to producers: each trophic level up supports a far smaller total mass of organisms than the level below it.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What actually makes something an ecosystem</h2>
      <div className="prose-p">
      An <TermLink href="/general-science-facts/ecosystems-and-food-chains">ecosystem</TermLink> is every living thing in a given area (its <TermLink href="/general-science-facts/ecosystems-and-food-chains">biotic factors</TermLink> — plants, animals, fungi, bacteria) interacting with the non-living conditions around them (its <TermLink href="/general-science-facts/ecosystems-and-food-chains">abiotic factors</TermLink> — sunlight, temperature, water, soil chemistry, rainfall). Neither half works alone as a definition: a desert is a desert because of low rainfall and heat (abiotic), but it&apos;s specifically a <em>desert ecosystem</em> because of the cacti, reptiles, and insects (biotic) adapted to survive those exact conditions. Change the abiotic conditions enough — drain a wetland, clear-cut a forest — and the biotic community that depends on them collapses even if no organism was directly killed.
      </div>
      <div className="prose-p">
      Ecosystems are grouped at a larger scale into <TermLink href="/general-science-facts/ecosystems-and-food-chains">biomes</TermLink> — categories defined mainly by climate. Forest biomes (tropical rainforest, temperate forest, boreal/taiga) are set apart mostly by rainfall and temperature range, which determines whether trees are broadleaf, evergreen, or coniferous. Grassland biomes (savanna, prairie) get enough rain for grasses but not enough, or with the wrong seasonal timing, to sustain dense forest. Desert biomes are defined by low precipitation (under about 25 cm/year) regardless of temperature — cold deserts like parts of Antarctica and Mongolia qualify just as much as hot ones like the Sahara. Tundra biomes have short growing seasons and permafrost (permanently frozen subsoil) that limits root depth, which is why tundra vegetation is mostly low shrubs, moss, and lichen rather than trees. Aquatic ecosystems split into freshwater (rivers, lakes — low salt content) and marine (oceans, coral reefs — high salt content), plus wetlands, which sit at the boundary and combine traits of both.
      </div>
      <div className="prose-p">
      Nutrients don&apos;t just flow through an ecosystem once and disappear — <TermLink href="/general-science-facts/ecosystems-and-food-chains">decomposers</TermLink> (mainly fungi and bacteria) close the loop by breaking down dead organisms and waste into simple compounds like nitrogen and phosphorus that producers can absorb and reuse. Without decomposers, nutrients would stay permanently locked inside dead plant and animal matter, and every ecosystem on Earth would run out of usable nutrients within a few generations no matter how much sunlight was available — decomposition is what makes an ecosystem a genuine cycle rather than a one-way flow.
      </div>

      <QuickCheck
        question="A wetland is drained for farmland, but none of its plants or animals are directly killed in the process. Ecologists still classify this as ecosystem destruction. Why?"
        options={[
          { text: "Because draining the wetland changed the abiotic conditions (water availability) the biotic community depended on, even without directly killing anything", correct: true, explanation: "Correct. An ecosystem is the interaction between living things and non-living conditions — remove the water an entire community depends on, and that community collapses even if nothing was killed on day one." },
          { text: "Because farmland can never legally be called an ecosystem", correct: false, explanation: "Farmland is itself a (heavily managed) ecosystem — the issue is the destruction of the wetland ecosystem that existed before, not that farmland doesn't count as one." },
          { text: "It isn't really destruction unless organisms are directly killed at the same time as the habitat change", correct: false, explanation: "Ecosystem destruction is measured by the collapse of the living community's ability to survive there, not only by immediate direct deaths — losing the abiotic conditions a community needs counts on its own." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How energy moves through it: food chains</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/general-science-facts/ecosystems-and-food-chains">food chain</TermLink> shows who eats whom, starting with a plant and moving up: grass is eaten by a rabbit, the rabbit is eaten by a fox. Each step passes energy along the chain, but not all of it — a lot of the energy an animal eats gets used up just staying alive (moving, staying warm, digesting) rather than being stored in a form the next predator can eat. That&apos;s why food chains are usually short, rarely more than four or five links, and why there are always far fewer predators than prey in a healthy ecosystem.</div>}
        detailed={<div className="prose-p">Ecologists describe this energy flow using <TermLink href="/general-science-facts/ecosystems-and-food-chains">trophic levels</TermLink>: <TermLink href="/general-science-facts/ecosystems-and-food-chains">producers</TermLink> (plants, algae, and photosynthetic bacteria) occupy the first level, herbivores (primary consumers) the second, and predators of increasing size occupy each level above that, with <TermLink href="/general-science-facts/ecosystems-and-food-chains">decomposers</TermLink> recycling nutrients from dead matter at every level back into the system. The <TermLink href="/general-science-facts/ecosystems-and-food-chains">10% rule</TermLink> (first proposed by ecologist Raymond Lindeman in 1942) describes how energy shrinks moving up: roughly 90% of the energy an organism consumes is lost as metabolic heat, used for movement, or excreted as waste, leaving only about 10% converted into new biomass that a predator at the next level could theoretically consume. Because real organisms rarely eat just one species, individual food chains overlap into a <TermLink href="/general-science-facts/ecosystems-and-food-chains">food web</TermLink> — the more realistic model, since it captures redundancy: if one prey species crashes, predators with multiple food sources have more resilience than a simple chain would suggest.</div>}
      />
      <FootnoteAside>Because energy loss compounds at every step, food chains longer than about five or six trophic levels are essentially unsustainable on land — there simply isn&apos;t enough energy left by that point to support a viable predator population, which is part of why &quot;apex predator of an apex predator&quot; ecosystems don&apos;t really exist.</FootnoteAside>

      <p>
      That 10% figure isn&apos;t a rough guess — it&apos;s precise enough to run real numbers through, and doing so is the fastest way to see why big predators are always rare.
      </p>

      <QuickCheck
        question="A pasture ecosystem has grass, grasshoppers that eat grass, and birds that eat grasshoppers. Based on the 10% rule, roughly how much of the grass's original energy is available to the birds?"
        options={[
          { text: "About 50%, since it's the second transfer", correct: false, explanation: "The 10% rule applies at each individual transfer, not as a flat 50/50 split across two steps — energy loss compounds, so the actual figure is much smaller than half." },
          { text: "About 1%, since roughly 10% transfers from grass to grasshoppers, then roughly 10% of that transfers from grasshoppers to birds", correct: true, explanation: "Correct. Energy loss compounds across each transfer: 10% of 10% is about 1% of the grass's original energy — this is why food chains can't extend indefinitely; there just isn't enough energy left after a few steps." },
          { text: "About 90%, since only a small amount of energy is lost overall", correct: false, explanation: "This reverses the rule — roughly 90% is lost at each step, not retained. Only about 10% passes on at each individual transfer." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A four-level grassland chain with real energy numbers (baseline case)</h3>
      <div className="prose-p">
      Suppose grass in a field captures 10,000 kilocalories of energy from sunlight through photosynthesis in a season. Grasshoppers eating that grass gain roughly 10% of it — about 1,000 kilocalories. A shrew eating those grasshoppers gains roughly 10% of that — about 100 kilocalories. An owl eating shrews gains roughly 10% of that — about 10 kilocalories. Starting from 10,000 kilocalories of captured sunlight, the owl at the top of this four-level chain ultimately has access to only about 10 kilocalories worth of that original energy — a 1,000-fold reduction across three transfers, which is exactly why a single field can support enormous numbers of grasshoppers but only a handful of owls.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why ocean food chains can support giants despite the 10% rule (edge case / variation)</h3>
      <div className="prose-p">
      Blue whales, the largest animals ever known to exist, feed on tiny shrimp-like krill — seemingly a contradiction, since the 10% rule suggests a large predator should sit atop a long, energy-depleted chain. The resolution is that a blue whale&apos;s food chain is actually short: phytoplankton (producers) are eaten directly by krill (primary consumers), and whales eat krill directly, skipping the many intermediate predator levels a chain on land would typically need to reach a large body size. By feeding one trophic level closer to the producers, filter-feeding giants like blue whales access a far larger total energy pool than a predator sitting several levels higher up would — this is also why the ocean&apos;s most efficient food chains (in terms of total biomass supported) tend to be short and built on enormous producer populations of phytoplankton.
      </div>

      <QuickCheck
        question="Blue whales are enormous, yet they feed on tiny krill rather than large prey. How does this fit with the 10% rule?"
        options={[
          { text: "It doesn't fit — the 10% rule doesn't apply to marine ecosystems", correct: false, explanation: "The 10% rule applies broadly across ecosystems, marine included. The resolution here is about chain length, not an exception to the rule itself." },
          { text: "Whales feed close to the base of a short food chain (phytoplankton to krill to whale), accessing far more total energy than if they fed several trophic levels higher up", correct: true, explanation: "Correct. Feeding near the base of a short chain means less cumulative energy loss, letting the ecosystem support an enormous total mass of whales even though each individual transfer still loses roughly 90%." },
          { text: "Krill are unusually energy-dense compared to other prey, which offsets normal energy loss", correct: false, explanation: "The key factor is chain position and length, not unusually high energy density in krill — the same 10% rule still applies at each transfer in this chain." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why eating lower on the food chain feeds more people (real-world / applied case)</h3>
      <p>
      The 10% rule has a direct, practical human application: producing a kilogram of plant-based food for direct human consumption requires far less land, water, and energy than producing a kilogram of meat from an animal that was itself fed on plants, because raising livestock adds an extra trophic-level energy loss into the chain. Roughly 90% of the energy in the grain or grass fed to cattle is lost to the animal&apos;s own metabolism before any of it becomes meat available to eat. This is a core piece of the reasoning behind global food-security and land-use research, and it&apos;s a direct, real-world consequence of the same ecological energy math that governs why owls are rarer than grasshoppers.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Energy pyramid: energy available at each trophic level"
        type="comparison"
        svgSrc="/diagrams/general-science-facts-ecosystems-and-food-chains-energy-pyramid.svg"
        altText="A pyramid diagram divided into four horizontal tiers narrowing toward the top, labeled from bottom to top: Producers (10,000 kilocalories, widest tier), Primary Consumers (1,000 kilocalories), Secondary Consumers (100 kilocalories), and Tertiary Consumers (10 kilocalories, narrowest tier at the top), with arrows between tiers each labeled 'about 90% lost as heat'."
      />
      <p>
      The pyramid shape isn&apos;t stylistic — it&apos;s a direct visual representation of the energy math. Each tier is roughly one-tenth the size of the tier below it, because roughly 90% of the energy available at one level is lost, mostly as heat, before it reaches the next level up. This is also why the pyramid can never be inverted in a stable, ongoing ecosystem: there physically isn&apos;t enough energy at the top to support more biomass than the base is generating.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking of a food chain as a fixed, isolated sequence, when most organisms actually belong to several overlapping chains at once.", fix: "Picture a food web instead — most predators eat multiple prey species and most prey are eaten by multiple predators, which is what gives real ecosystems resilience when one species' population changes." },
          { mistake: "Assuming energy is lost through some kind of inefficiency that could theoretically be 'fixed.'", fix: "The loss is mostly basic thermodynamics — organisms use energy for movement, maintaining body temperature, and cellular processes, all of which release heat. It's an unavoidable cost of being alive, not a flaw in the system." },
          { mistake: "Believing apex predators are rare because they're difficult to hunt or their prey is scarce.", fix: "Apex predators are rare primarily because of cumulative energy loss up the food chain — by the time you reach the top trophic level, there simply isn't enough total energy in the ecosystem to support a large predator population, regardless of hunting skill." },
          { mistake: "Thinking an ecosystem is just 'the animals and plants living somewhere.'", fix: "That's only the biotic half. The non-living abiotic factors — water, temperature, soil, sunlight — are equally part of the definition, and changing them can collapse a community without killing anything directly." },
        ]}
      />
      <MisconceptionCallout
        myth="Removing one predator species from an ecosystem only affects that predator's direct prey."
        reality={<p>Because ecosystems function as food webs rather than isolated chains, removing one species can cascade through many indirect connections — an effect ecologists call a trophic cascade. A well-documented case is the reintroduction of wolves to Yellowstone National Park in 1995: with wolves absent for decades, elk populations had grown large and grazed streamside vegetation heavily. Wolves returning reduced elk numbers and changed elk grazing behavior, which allowed willow and aspen trees along streams to recover — which in turn affected beaver populations (beavers use that wood) and stream structure itself. A single species&apos; removal or return rippled through multiple trophic levels and even physical landscape features, not just its immediate prey.</p>}
      />

      <QuickCheck
        question="After wolves were reintroduced to Yellowstone in 1995, changes appeared not just in elk populations but eventually in streamside vegetation and beaver activity too. What does this best illustrate?"
        options={[
          { text: "Wolves and beavers must have a direct predator-prey relationship", correct: false, explanation: "Wolves don't hunt beavers directly — the connection is indirect, running through the food web via elk grazing behavior and vegetation recovery." },
          { text: "A trophic cascade — removing or restoring one species can ripple through multiple connected levels of a food web, not just its direct prey", correct: true, explanation: "Correct. Wolves affected elk numbers and behavior, which changed vegetation, which affected beavers and stream structure — a multi-level cascade through the food web, not a single isolated link." },
          { text: "It shows that food chains are actually simpler and more predictable than food webs suggest", correct: false, explanation: "The opposite is true — this example specifically demonstrates why the interconnected food web model, not a simple linear food chain, is needed to explain the real ripple effects observed." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Energy remaining after moving up trophic levels (10% rule)"
        fields={[
          { key: "producerEnergyKcal", label: "Starting energy at producer level (kcal)", defaultValue: 10000 },
          { key: "trophicLevelsUp", label: "Number of trophic-level transfers", defaultValue: 3, step: 1 },
        ]}
        resultLabel="Energy remaining at that level (kcal)"
        formula="trophicEnergyRemaining"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Try the calculator above with 5 trophic-level transfers instead of 3 — notice how quickly the remaining energy approaches zero, which explains why very long food chains don't occur.",
          "Next time you see a nature documentary, count the trophic levels in the food chain shown and estimate roughly how much of the original sunlight energy the top predator is really running on.",
          "Look up one real trophic cascade (Yellowstone wolves, sea otters and kelp forests, or another documented case) to see the food-web effect in a real ecosystem.",
          "Read the related entry on Plant Biology & Photosynthesis to see exactly how the energy at the base of every food chain gets captured in the first place.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the 10% rule in ecology?", answer: "It's the principle that only about 10% of the energy available at one trophic level transfers to the next level up, with roughly 90% lost mainly as metabolic heat, movement, and waste — proposed by ecologist Raymond Lindeman in 1942." },
          { question: "What is the difference between a food chain and a food web?", answer: "A food chain is a single linear sequence of who-eats-whom. A food web is the full, realistic network of overlapping food chains in an ecosystem, since most organisms eat, and are eaten by, more than one species." },
          { question: "Why are there fewer predators than prey in an ecosystem?", answer: "Because of cumulative energy loss up the food chain — each trophic level supports roughly only 10% as much total biomass as the level below it, so there's physically less energy available to sustain predator populations at higher levels." },
          { question: "How long can a food chain be?", answer: "Most food chains have 3 to 5 trophic levels. Because energy loss compounds at each transfer (roughly 90% lost per step), there usually isn't enough energy left to sustain a viable population beyond about 5 or 6 levels." },
          { question: "What happens if you remove one species from a food web?", answer: "It can trigger a trophic cascade — indirect effects rippling through multiple connected species and even physical habitat features, not just the removed species' direct predators or prey, as seen with wolf reintroduction in Yellowstone." },
          { question: "What's the difference between an ecosystem and a biome?", answer: "An ecosystem is a specific community of organisms interacting with their local environment (one particular forest or pond). A biome is the larger climate-based category that ecosystem belongs to (temperate forest, desert, tundra) — many individual ecosystems around the world can belong to the same biome." },
          { question: "What are abiotic factors in an ecosystem?", answer: "The non-living conditions that shape what can survive in an area — sunlight, temperature, water availability, soil chemistry, and rainfall are the main ones. They work alongside biotic (living) factors to define an ecosystem." },
          { question: "Why are decomposers important to an ecosystem?", answer: "Decomposers (mainly fungi and bacteria) break down dead organisms and waste into simple nutrients that producers can reuse. Without them, nutrients would stay locked in dead matter and the ecosystem would run out of usable nutrients within a few generations." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
