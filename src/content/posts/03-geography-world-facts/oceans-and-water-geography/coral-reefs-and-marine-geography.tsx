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
  title: "Coral Reefs & Marine Geography",
  category: "geography-world-facts",
  order: 43,
  subtopic: "oceans-and-water-geography",
  tags: [
    "coral reefs",
    "great barrier reef",
    "marine geography",
    "coral bleaching",
    "atolls",
    "ocean ecosystems",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How coral reefs form, why they support roughly a quarter of all marine species from under 1% of the ocean floor, and what actually happens during coral bleaching.",
  summary: "A coral reef is a living limestone structure built over centuries by colonies of tiny animals called polyps, which secrete calcium carbonate skeletons and rely on symbiotic algae for most of their energy.",
  sources: [
    { label: "NOAA Coral Reef Conservation Program", url: "https://coralreef.noaa.gov/" },
    { label: "NOAA Fisheries — Coral", url: "https://www.fisheries.noaa.gov/topic/coral" },
    { label: "NOAA — What is coral bleaching?", url: "https://oceanservice.noaa.gov/facts/coral_bleach.html" },
    { label: "Encyclopaedia Britannica — Coral reef", url: "https://www.britannica.com/science/coral-reef" },
  ],
  seeAlso: [
    "geography-world-facts/the-five-oceans-explained",
    "geography-world-facts/ocean-currents-and-their-effects",
    "geography-world-facts/sea-levels-and-coastlines",
    "geography-world-facts/climate-zones-explained",
    "general-science-facts/water-cycle-and-oceans",
  ],
  glossary: [
    { term: "Coral polyp", definition: "A tiny, soft-bodied marine animal related to jellyfish and sea anemones that secretes a hard calcium carbonate skeleton and lives in large colonies to build a reef." },
    { term: "Zooxanthellae", definition: "Microscopic algae that live inside coral tissue in a symbiotic relationship, providing the coral with most of its energy through photosynthesis and giving it its color." },
    { term: "Coral bleaching", definition: "The process by which heat-stressed coral expels its zooxanthellae, turning white and losing its main energy source — prolonged bleaching can kill the coral." },
    { term: "Fringing reef", definition: "A coral reef that grows directly attached to or near a shoreline, the earliest stage in Darwin's model of atoll formation." },
    { term: "Barrier reef", definition: "A coral reef separated from the shore by a deeper lagoon, typically forming as a fringing reef's shoreline gradually subsides." },
    { term: "Atoll", definition: "A ring-shaped coral reef or chain of islands surrounding a lagoon, formed as a volcanic island subsides beneath the sea while its fringing reef continues growing upward." },
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
          "Coral reefs are built by tiny animals, not plants or rocks — coral polyps are related to jellyfish and sea anemones, and secrete the calcium carbonate skeletons that form the reef structure over centuries.",
          "Reefs cover under 1% of the ocean floor but support an estimated quarter of all known marine species, making them among the most biodiverse ecosystems on Earth relative to their footprint.",
          "Coral bleaching happens when warm water stresses coral into expelling the algae living in its tissue — the coral doesn't die immediately, but it loses most of its energy source and can starve if warm conditions persist.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/geography-world-facts/coral-reefs-and-marine-geography">coral reef</TermLink> looks like an underwater rock garden, but it&apos;s actually built by living animals. Tiny creatures called coral polyps — relatives of jellyfish and sea anemones — live in huge colonies and each secretes a hard limestone skeleton around itself. Over hundreds or thousands of years, these skeletons stack up and fuse together into the reef structures divers see today. Reefs need warm, shallow, sunlit water to grow, which is why most are found in tropical regions between about 30°N and 30°S of the equator.</div>}
        detailed={<div className="prose-p">Most reef-building coral relies on a symbiotic relationship with microscopic algae called <TermLink href="/geography-world-facts/coral-reefs-and-marine-geography">zooxanthellae</TermLink>, which live inside the coral&apos;s own tissue. The algae photosynthesize using sunlight and share the resulting sugars with the coral, typically providing up to 90% of the coral&apos;s energy needs — in exchange, the coral provides the algae shelter and access to sunlight, and the algae also give the coral most of its vivid color. This is why reef-building coral needs clear, shallow, sunlit water: without enough light, the algae can&apos;t photosynthesize. Charles Darwin proposed a model, later confirmed by drilling studies, for how reef shape evolves over geologic time: a <TermLink href="/geography-world-facts/coral-reefs-and-marine-geography">fringing reef</TermLink> grows directly against a volcanic island&apos;s shore; as the island slowly subsides (sinks) under its own weight over millions of years, the reef keeps growing upward toward the light faster than the island sinks, pulling away from the shore into a <TermLink href="/geography-world-facts/coral-reefs-and-marine-geography">barrier reef</TermLink> separated by a lagoon; eventually the island disappears entirely beneath the surface, leaving a ring-shaped <TermLink href="/geography-world-facts/coral-reefs-and-marine-geography">atoll</TermLink> encircling an open lagoon where the island used to be.</div>}
      />
      <FootnoteAside>Australia&apos;s Great Barrier Reef is the largest living structure on Earth — roughly 2,300 km long, made up of about 2,900 individual reefs, and large enough to be visible from space.</FootnoteAside>

      <p>
      That reliance on a delicate energy-sharing partnership with algae is also exactly what makes coral so vulnerable to warming water — which is the mechanism behind one of the most consequential events happening to reefs today.
      </p>

      <QuickCheck
        question="What is coral, biologically speaking?"
        options={[
          { text: "A type of underwater plant that photosynthesizes directly", correct: false, explanation: "Coral itself is an animal, not a plant. It does host photosynthesizing algae (zooxanthellae) inside its tissue, but the coral polyp itself is an animal related to jellyfish and sea anemones." },
          { text: "A colonial animal — the coral polyp — related to jellyfish and sea anemones, which secretes a hard skeleton", correct: true, explanation: "Correct. Coral polyps are small, soft-bodied animals in the same broad group (cnidarians) as jellyfish and anemones. Colonies of them build the hard limestone structure that forms a reef." },
          { text: "A mineral formation, similar to how stalactites form in caves", correct: false, explanation: "The hard structure is made of calcium carbonate, similar in composition to some mineral deposits, but it's built and continually added to by living animals — it isn't a purely geological mineral formation." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: From volcanic island to atoll — Darwin&apos;s subsidence model (baseline case)</h3>
      <div className="prose-p">
      Picture a newly formed volcanic island in a tropical ocean. Coral quickly colonizes its shallow shoreline, forming a fringing reef attached directly to the coast. Over millions of years, the volcanic island — like all oceanic crust — slowly cools, contracts, and sinks. Because coral can only survive near the sunlit surface, the reef keeps building upward as the island sinks beneath it, and a widening lagoon opens up between the shrinking island and the reef, now classified as a barrier reef. Eventually, the island disappears entirely below the waterline, leaving only a ring of coral — an atoll — surrounding a central lagoon where the island once stood. This entire progression, confirmed by drilling through Pacific atolls and finding volcanic rock deep beneath the coral, can take tens of millions of years from start to finish.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Coral that doesn&apos;t need warm, sunlit water at all (edge case / variation)</h3>
      <div className="prose-p">
      Not all reef-building coral fits the &quot;warm tropical shallows&quot; picture. Cold-water coral species, such as <em>Lophelia pertusa</em>, form reef structures in the cold, dark waters of the North Atlantic, including off the coast of Norway, at depths reaching roughly 2,000 meters — far below where sunlight penetrates. These corals don&apos;t host photosynthesizing zooxanthellae at all, since there&apos;s no light to use; instead, they survive entirely by filter-feeding on tiny organic particles drifting through the water column. This is a genuine exception to the standard &quot;coral needs sun and warmth&quot; rule, and it shows that coral reef formation depends specifically on calcium-carbonate-secreting polyps, not on any single set of environmental conditions.
      </div>

      <QuickCheck
        question="A species of reef-building coral is discovered living at 1,800 meters depth in cold, completely dark water. Does this contradict what we know about coral reefs?"
        options={[
          { text: "Yes — all coral requires sunlight and warm water to survive, so this would be impossible", correct: false, explanation: "This isn't impossible — cold-water corals like Lophelia pertusa genuinely exist at similar depths in places like the North Atlantic. Not all coral relies on photosynthesizing algae." },
          { text: "No — some cold-water coral species don't rely on photosynthetic algae at all and instead filter-feed on organic particles", correct: true, explanation: "Correct. Cold-water corals lack zooxanthellae and survive by filter-feeding, which frees them from the light and warmth requirements that govern typical tropical reef-building coral." },
          { text: "No, but only because it isn't actually 'coral' by scientific definition at that depth", correct: false, explanation: "Cold-water species like Lophelia pertusa are genuine reef-building corals in the same broad group as tropical coral — the difference is their energy source and depth tolerance, not their classification." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: What happens during a coral bleaching event (real-world / applied case)</h3>
      <p>
      When ocean water near a reef stays too warm for too long — even just 1-2°C above the normal seasonal maximum, sustained over several weeks — coral becomes stressed and expels the zooxanthellae living in its tissue as a defense response. Because that algae also gives coral most of its color, the coral turns pale or completely white, which is what &quot;bleaching&quot; refers to. Bleached coral isn&apos;t dead: if temperatures drop back to normal reasonably quickly, the coral can recruit new algae and recover. But since the algae also supply up to 90% of the coral&apos;s energy, prolonged bleaching leaves the coral effectively starving, and it can die within weeks to months if warm conditions persist. Large-scale bleaching events driven by unusually warm ocean temperatures have repeatedly affected the Great Barrier Reef and other major reef systems worldwide, and are tracked and reported by NOAA&apos;s Coral Reef Watch program.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="From fringing reef to atoll: Darwin's model of reef formation over time"
        type="detail"
        svgSrc="/diagrams/geography-world-facts-coral-reefs-and-marine-geography-atoll-formation.svg"
        altText="Three side-by-side cross-section diagrams showing the stages of atoll formation: first a volcanic island with a fringing reef directly attached to its shore, then a partly-subsided island surrounded by a lagoon and a barrier reef, and finally the island fully submerged, leaving a ring-shaped atoll of coral surrounding an open central lagoon."
      />
      <p>
      Read the three panels left to right as one continuous timeline spanning millions of years, not three separate reef types. The island in the middle panel is the same island as the left panel, just further along in its subsidence; by the right panel, it&apos;s gone entirely, and only the coral it hosted — which kept growing upward the whole time — remains visible at the surface.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Referring to coral as a plant or a type of rock.", fix: "Coral is an animal — specifically a colonial cnidarian related to jellyfish and sea anemones. The hard structure is a skeleton the animals secrete, not a mineral formation or plant growth." },
          { mistake: "Assuming a white, bleached reef is already dead.", fix: "Bleached coral has lost its algae and its color, but it's still alive at that point — it can recover if water temperatures return to normal quickly enough, though prolonged bleaching does eventually lead to death by starvation." },
          { mistake: "Assuming all coral reefs form the same way, in warm shallow water near a coastline.", fix: "Most reef-building coral does need warm, shallow, sunlit water, but cold-water coral species like Lophelia pertusa build reef structures in cold, dark water at depths up to roughly 2,000 meters, using filter-feeding instead of photosynthetic algae." },
        ]}
      />
      <MisconceptionCallout
        myth="Coral reefs are made of rock or coral is a type of plant."
        reality={<p>Coral is an animal. Each individual coral polyp is a small, soft-bodied organism closely related to jellyfish and sea anemones — all part of the group called cnidarians. What looks like a solid rock structure is actually the accumulated calcium carbonate skeletons secreted by colonies of these living animals over hundreds to thousands of years, with a thin layer of living tissue covering the surface. The confusion is understandable, since a reef does look and feel rock-hard, and its color often comes from the microscopic algae living symbiotically inside the coral&apos;s tissue rather than from the animal itself — but underneath, it&apos;s built and maintained by living animals the entire time.</p>}
      />

      <QuickCheck
        question="Someone says, 'Coral reefs are basically colorful rock formations, like an underwater version of a mineral deposit.' What's the most accurate correction?"
        options={[
          { text: "That's essentially correct — coral is a mineral, similar to how stalactites form", correct: false, explanation: "Coral reefs are built by living animals (coral polyps), not formed as a purely mineral or geological deposit. The calcium carbonate structure is a byproduct of biological activity, continuously added to by living tissue." },
          { text: "Coral reefs are built by colonies of living animals (coral polyps) that secrete a hard skeleton — the reef is a biological structure, not a mineral one", correct: true, explanation: "Correct. The reef's hard structure is made of calcium carbonate secreted by living coral polyps, close relatives of jellyfish and anemones — it's fundamentally a biological structure, actively built and maintained by animals." },
          { text: "Reefs are plants that have adapted to grow a hard shell for protection", correct: false, explanation: "Coral polyps are animals, not plants. The plant-like element in a reef ecosystem is the photosynthesizing zooxanthellae algae living inside the coral's tissue, not the coral itself." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="What share of Earth's total surface do the world's coral reefs cover?"
        fields={[
          { key: "areaKm2", label: "Total coral reef area (km²)", defaultValue: 284300, step: 1000 },
        ]}
        resultLabel="Share of Earth's total surface area (%)"
        formula="shareOfEarthSurface"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Look at the calculator result above and compare it to the fact that reefs support roughly a quarter of marine species — a strong signal of how disproportionately biodiverse reef ecosystems are for their tiny footprint.",
          "Next time you hear about a bleaching event in the news, connect it to the specific mechanism: sustained warm water causing coral to expel its algae, not the coral simply 'dying from heat' directly.",
          "Look up NOAA's Coral Reef Watch to see real-time sea surface temperature and bleaching-risk monitoring for reefs worldwide.",
          "Read the related entry on Sea Levels & Coastlines to see how warming oceans connect to broader changes in marine geography.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are coral reefs made of?", answer: "The hard structure of a coral reef is calcium carbonate, secreted over centuries by colonies of small animals called coral polyps. It's a living biological structure, not a mineral or rock formation, with a thin layer of living tissue on the surface." },
          { question: "Why do coral reefs bleach?", answer: "Sustained warm water stresses coral into expelling the symbiotic algae (zooxanthellae) living in its tissue, which also removes most of its color and its main energy source. The coral survives the bleaching itself but can starve and die if warm conditions persist for weeks or months." },
          { question: "How many species live on coral reefs?", answer: "Coral reefs cover under 1% of the ocean floor but are estimated to support around a quarter of all known marine species, making them one of the most biodiverse ecosystems on the planet relative to their size." },
          { question: "What is the difference between a fringing reef, barrier reef, and atoll?", answer: "A fringing reef grows directly against a shoreline. A barrier reef is separated from shore by a lagoon, typically forming as the coastline subsides. An atoll is a ring-shaped reef surrounding a lagoon, formed after the original volcanic island it grew around has fully submerged." },
          { question: "Can coral reefs grow in cold water?", answer: "Yes. Cold-water coral species like Lophelia pertusa build reef structures in cold, dark water at depths up to roughly 2,000 meters, relying on filter-feeding instead of the photosynthetic algae that warm-water reef coral depends on." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
