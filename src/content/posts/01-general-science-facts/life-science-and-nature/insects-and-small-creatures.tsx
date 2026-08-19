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
  title: "Insects & Small Creatures: Why They Dominate Life on Earth",
  category: "general-science-facts",
  order: 35,
  subtopic: "life-science-and-nature",
  tags: [
    "insects",
    "arthropods",
    "entomology",
    "exoskeleton",
    "metamorphosis",
    "arachnids",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why insects outnumber every other animal group combined, and what an exoskeleton, compound eyes, and metamorphosis actually do for them.",
  summary: "Insects are the most species-rich group of animals on Earth, built around a hard external exoskeleton, a three-part body plan, and — in most species — a dramatic transformation called metamorphosis.",
  sources: [
    { label: "Smithsonian National Museum of Natural History — Insect Facts", url: "https://www.si.edu/spotlight/buginfo/bugnos" },
    { label: "Encyclopaedia Britannica — Insect", url: "https://www.britannica.com/animal/insect" },
    { label: "National Geographic — Insects", url: "https://www.nationalgeographic.com/animals/invertebrates" },
  ],
  seeAlso: [
    "general-science-facts/animal-kingdom-facts",
    "general-science-facts/ecosystems-and-food-chains",
    "general-science-facts/symbiosis-and-animal-relationships",
    "general-science-facts/extinct-and-endangered-species",
  ],
  glossary: [
    { term: "Exoskeleton", definition: "A hard external skeleton made mainly of chitin that supports and protects an insect's body, requiring the animal to molt (shed it) periodically to grow." },
    { term: "Arthropod", definition: "The animal phylum containing insects, arachnids, crustaceans, and myriapods, defined by a segmented body, jointed limbs, and an exoskeleton." },
    { term: "Metamorphosis", definition: "A dramatic change in body form during development; complete metamorphosis (egg-larva-pupa-adult) is used by insects like butterflies and beetles, while incomplete metamorphosis skips the pupal stage." },
    { term: "Compound eye", definition: "An eye made of many individual light-sensing units called ommatidia, giving insects a wide field of view and strong motion detection rather than sharp, single-lens focus." },
    { term: "Arachnid", definition: "A class of arthropods with 8 legs and 2 main body segments, including spiders, scorpions, ticks, and mites — not insects, which have 6 legs and 3 body segments." },
    { term: "Pollinator", definition: "An animal, most often an insect like a bee, that transfers pollen between flowers, enabling many plants to reproduce and produce fruit and seed." },
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
          "Insects make up roughly 80% of all described animal species — more than 1 million known species, with estimates of undiscovered species running far higher.",
          "An insect's hard exoskeleton supports and protects its body but doesn't grow with it, forcing the animal to periodically molt (shed and regrow it) to increase in size.",
          "Insects and arachnids are not the same group: insects have 6 legs and 3 body segments; arachnids like spiders and scorpions have 8 legs and 2 body segments, and are not insects at all.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Insects are small animals with 6 legs, 3 main body parts (head, thorax, abdomen), and usually wings and antennae. They belong to a larger group called <TermLink href="/general-science-facts/insects-and-small-creatures">arthropods</TermLink>, which also includes spiders, crabs, and centipedes — all animals with a hard outer body covering and jointed legs, instead of an internal skeleton like humans have. Insects are, by far, the most successful animal group on the planet by species count: scientists have formally described over a million insect species, and that&apos;s likely a fraction of how many actually exist.</div>}
        detailed={<div className="prose-p">The insect body plan is built around a rigid <TermLink href="/general-science-facts/insects-and-small-creatures">exoskeleton</TermLink> made mainly of chitin, which provides structural support and protection but cannot expand as the animal grows — insects instead periodically molt, shedding the old exoskeleton and forming a new, larger one underneath, a vulnerable process during which the insect is briefly soft and exposed. Most insect species undergo <TermLink href="/general-science-facts/insects-and-small-creatures">metamorphosis</TermLink>: complete metamorphosis (used by butterflies, beetles, and flies) moves through four distinct stages — egg, larva, pupa, adult — with the larval and adult forms often looking and feeding completely differently, reducing competition for resources between young and adult stages of the same species. Incomplete metamorphosis (used by grasshoppers and dragonflies) skips the pupal stage, with nymphs resembling smaller, wingless versions of the adult. Vision in most insects relies on <TermLink href="/general-science-facts/insects-and-small-creatures">compound eyes</TermLink> — thousands of individual light-sensing units (ommatidia) that excel at detecting motion across a wide field of view rather than producing the sharp, focused image a single-lens vertebrate eye produces.</div>}
      />
      <FootnoteAside>Ants alone are estimated by researchers to have a combined biomass roughly comparable to that of all wild birds and mammals on Earth combined, despite each individual ant weighing only a few milligrams — a reflection of just how numerous insects are.</FootnoteAside>

      <p>
      That exoskeleton-and-molting design is the foundation of the insect body plan, and it produces some genuinely strange growth mechanics compared to how vertebrates grow.
      </p>

      <QuickCheck
        question="Unlike a human, an insect's hard outer exoskeleton doesn't stretch or grow gradually as the animal gets bigger. How does an insect actually increase in size?"
        options={[
          { text: "The exoskeleton itself slowly stretches over the insect's lifetime, similar to skin", correct: false, explanation: "Insect exoskeletons are rigid and don't stretch to accommodate growth — a completely different mechanism, molting, is what allows size increase." },
          { text: "The insect periodically molts, shedding its old exoskeleton and forming a new, larger one underneath", correct: true, explanation: "Correct. Molting is how insects and other arthropods grow — the old rigid exoskeleton is shed, and the new one underneath, briefly soft, hardens into a larger size before the cycle repeats." },
          { text: "Insects don't actually grow in size after hatching; different-sized individuals are simply different species", correct: false, explanation: "Insects do grow substantially after hatching (a young larva is far smaller than the adult it becomes) — size differences within a species reflect life stage and molting, not different species." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A monarch butterfly&apos;s complete metamorphosis, stage by stage (baseline case)</h3>
      <div className="prose-p">
      A monarch butterfly begins as an egg laid on a milkweed leaf, hatching within days into a larva (caterpillar) that spends roughly two weeks doing almost nothing but eating milkweed and growing, molting through several larval stages as it outgrows its exoskeleton each time. It then forms a pupa (chrysalis), inside which its body undergoes an extensive internal reorganization — most larval tissues break down and are rebuilt into the adult body plan, including entirely new wings, legs, and reproductive structures. After roughly 10 to 14 days, an adult butterfly emerges, now feeding on flower nectar instead of milkweed leaves — a completely different diet from its larval stage. This four-stage sequence (egg, larva, pupa, adult) is the defining pattern of complete metamorphosis, used by roughly 85% of all insect species, including butterflies, beetles, flies, and bees.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why a dragonfly nymph looks nothing like popular &quot;baby insect&quot; assumptions (edge case / variation)</h3>
      <div className="prose-p">
      A dragonfly undergoes incomplete metamorphosis, so its young form (a nymph) is a genuine edge case worth examining directly: dragonfly nymphs are aquatic, breathing through internal gills and living underwater for months or even years, looking almost nothing like the flying adult they&apos;ll eventually become — no wings, a squat, often drab body built for stalking underwater prey rather than aerial hunting. When ready, the nymph climbs out of the water, its exoskeleton splits one final time, and a fully formed winged adult emerges directly — no pupal stage, no dramatic internal rebuilding period. This is a useful contrast to butterfly-style metamorphosis: incomplete metamorphosis still involves growth and change across several nymphal molts, but skips the pupa, and the nymph, unlike a caterpillar, already resembles a rough, wingless draft of the adult body plan rather than something entirely different.
      </div>

      <QuickCheck
        question="A dragonfly nymph lives underwater and looks very different from the flying adult it will become, yet dragonflies undergo 'incomplete' rather than 'complete' metamorphosis. What distinguishes incomplete metamorphosis?"
        options={[
          { text: "It skips the pupal stage — nymphs molt through several stages and then transform directly into a winged adult, without a pupa in between", correct: true, explanation: "Correct. Incomplete metamorphosis (egg-nymph-adult) has no pupal stage. The nymph already has a rough version of the adult body plan and gradually gains wings and reproductive structures across several molts before a final molt reveals the full adult." },
          { text: "It means the insect never fully becomes an adult", correct: false, explanation: "Incomplete metamorphosis still produces a fully mature adult insect — 'incomplete' refers to the missing pupal stage in the life cycle, not an incomplete final form." },
          { text: "It only applies to insects that live entirely on land", correct: false, explanation: "Incomplete metamorphosis applies across various habitats — dragonflies, which spend their nymphal stage underwater, are a clear example of it happening in an aquatic environment." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why bee pollination is worth billions to agriculture (real-world / applied case)</h3>
      <p>
      Bees and other insect <TermLink href="/general-science-facts/insects-and-small-creatures">pollinators</TermLink> transfer pollen between flowers as they forage for nectar, enabling many food crops — including apples, almonds, blueberries, and squash — to produce fruit and seed at all. This isn&apos;t a minor side benefit; a large share of global food crop production by volume depends at least partly on animal pollination, the majority of it performed by insects, according to research summarized by institutions including the Smithsonian. Commercial beekeepers transport managed honeybee hives to farms specifically to provide this pollination service during bloom season, a direct, economically significant application of basic insect biology — without adequate pollinator activity, yields for many crops drop sharply, which is part of why declining wild pollinator populations are an active conservation concern.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Complete vs. incomplete metamorphosis, stage by stage"
        type="comparison"
        svgSrc="/diagrams/general-science-facts-insects-and-small-creatures-metamorphosis.svg"
        altText="A side-by-side comparison diagram with two rows. Top row labeled Complete Metamorphosis shows four stages left to right: egg, larva (caterpillar shape), pupa (chrysalis shape), adult (butterfly shape). Bottom row labeled Incomplete Metamorphosis shows three stages left to right: egg, nymph (small wingless insect shape growing progressively larger across two nymph icons), adult (winged insect shape), with no pupal stage present."
      />
      <p>
      The key visual difference is the missing pupal box in the bottom row — incomplete metamorphosis goes straight from a series of nymph stages to an adult, while complete metamorphosis inserts a dramatic, mostly immobile reorganization stage (the pupa) between larva and adult. That extra stage in complete metamorphosis is why a caterpillar and the butterfly it becomes can look, eat, and behave in ways that share almost nothing in common — the pupal stage allows for a much more radical rebuild than incomplete metamorphosis&apos;s more gradual, stage-by-stage change permits.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Calling spiders, ticks, and scorpions 'insects.'", fix: "They're arachnids, a separate class with 8 legs and 2 body segments, versus an insect's 6 legs and 3 body segments. Both are arthropods, but arachnids are not insects." },
          { mistake: "Assuming all insects go through a caterpillar-and-cocoon-style transformation.", fix: "Only insects with complete metamorphosis (butterflies, beetles, flies, bees) have a larval and pupal stage. Insects with incomplete metamorphosis (grasshoppers, dragonflies, true bugs) skip the pupa entirely." },
          { mistake: "Thinking centipedes and millipedes are insects because they're small and have many legs.", fix: "They're myriapods, another separate arthropod class, with far more than 6 legs and a body plan built from many repeating segments — insects always have exactly 6 legs." },
        ]}
      />
      <MisconceptionCallout
        myth="All insects and small crawling creatures are basically the same kind of pest and can be lumped together."
        reality={<p>Insects, arachnids, and myriapods are distinct classes within the arthropod phylum, defined by clearly different body plans — leg count and body segmentation are the fastest reliable check. Insects have 6 legs and 3 body segments (head, thorax, abdomen). Arachnids — spiders, scorpions, ticks, mites — have 8 legs and just 2 body segments, and notably, no antennae, which every insect has. Centipedes and millipedes (myriapods) have many more legs across many repeating body segments. These are not interchangeable pest categories: a pesticide or treatment effective against insects may do little against spider mites (arachnids), and treating them the same is a common, practical mistake in both pest control and casual conversation.</p>}
      />

      <QuickCheck
        question="A spider has 8 legs, 2 body segments, and no antennae. Based on this, how should it be classified?"
        options={[
          { text: "As an insect, since it's a small crawling creature", correct: false, explanation: "Insects have 6 legs, 3 body segments, and antennae. A spider's 8 legs, 2 body segments, and lack of antennae rule out the insect classification entirely." },
          { text: "As an arachnid, a separate arthropod class from insects", correct: true, explanation: "Correct. 8 legs, 2 body segments, and no antennae are the defining traits of arachnids — a class that includes spiders, scorpions, ticks, and mites, distinct from insects." },
          { text: "As a myriapod, like a centipede or millipede", correct: false, explanation: "Myriapods have many more than 8 legs distributed across numerous repeating body segments — a spider's leg count and two-segment body don't match this group either." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you spot a small crawling creature, count its legs before naming it — 6 means insect, 8 means arachnid, many more means myriapod.",
          "Watch for a molted exoskeleton (a papery, insect-shaped shell) on a plant or windowsill — it's a real, physical leftover from a molting event, not a dead insect.",
          "If you see a caterpillar and a butterfly of the same species side by side, note how radically different they are — a direct visual result of complete metamorphosis's pupal rebuild stage.",
          "Read the related entry on Symbiosis & Animal Relationships to see how insect pollinators and flowering plants have shaped each other's evolution.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How many legs does an insect have?", answer: "Exactly 6 legs, attached to the thorax, along with 3 main body segments (head, thorax, abdomen) and, in most species, antennae and wings. Leg count is the fastest way to rule out arachnids (8 legs) and myriapods (many more)." },
          { question: "Is a spider an insect?", answer: "No. A spider is an arachnid — a separate arthropod class with 8 legs, 2 body segments, and no antennae, versus an insect's 6 legs, 3 body segments, and antennae." },
          { question: "What is the difference between complete and incomplete metamorphosis?", answer: "Complete metamorphosis has four stages (egg, larva, pupa, adult) with a dramatic pupal reorganization stage, used by butterflies, beetles, and flies. Incomplete metamorphosis has three stages (egg, nymph, adult) with no pupa, used by grasshoppers and dragonflies." },
          { question: "How many insect species are there in the world?", answer: "Over 1 million insect species have been formally described, roughly 80% of all known animal species, and researchers estimate many more remain undiscovered, particularly in tropical regions." },
          { question: "Why do insects molt?", answer: "Because their exoskeleton is rigid and doesn't grow with the animal. To increase in size, an insect must shed its old exoskeleton and form a new, larger one underneath — a process it repeats multiple times during development." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
