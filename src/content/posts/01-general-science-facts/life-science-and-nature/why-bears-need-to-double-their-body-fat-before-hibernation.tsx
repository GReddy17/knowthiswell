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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Why Bears Need to Double Their Body Fat Before Hibernation",
  category: "general-science-facts",
  order: 52,
  subtopic: "life-science-and-nature",
  pillar: true,
  videoQueue: true,
  tags: ["hibernation", "bears", "hyperphagia", "animal physiology", "fat bear week"],
  date: "2026-09-22",
  updated: "2026-09-22",
  lastReviewed: "2026-09-22",
  excerpt: "Bear hibernation isn't a long nap — it's a five-to-seven-month fast with no food, water, or waste, run entirely on fat a bear has to eat 20,000+ calories a day to build.",
  summary: "Before winter, bears enter hyperphagia, a feeding frenzy that can add 3-6 pounds of fat a day, because hibernation itself is an extreme metabolic shutdown: heart rate falls by more than half, metabolism drops sharply, and the bear survives months without eating, drinking, urinating, or defecating, running entirely on stored fat.",
  sources: [
    { label: "National Park Service — Katmai National Park, Fat Bear Week", url: "https://www.nps.gov/katm/learn/fat-bear-week.htm" },
    { label: "U.S. Geological Survey — Bear Hibernation Physiology", url: "https://www.usgs.gov/faqs/how-do-bears-survive-winter-without-eating-or-drinking" },
  ],
  seeAlso: [
    "general-science-facts/animal-kingdom-facts",
    "general-science-facts/evolution-and-natural-selection-basics",
    "general-science-facts/human-body-systems",
  ],
  glossary: [
    { term: "Hyperphagia", definition: "A period of intense, near-constant eating that bears enter in late summer and fall to build fat reserves before hibernation." },
    { term: "Torpor", definition: "A state of reduced body temperature, heart rate, and metabolism; bear hibernation is a milder, arousable form of this compared to true deep hibernators." },
    { term: "Metabolic water", definition: "Water produced internally as a byproduct of breaking down fat for energy, letting a hibernating bear go months without drinking." },
    { term: "Nitrogen recycling", definition: "A process that lets a hibernating bear reuse the urea its body would normally excrete as waste, converting it back into protein instead." },
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
          "Bear hibernation is a 5-7 month fast with zero food, water, urination, or defecation — the bear survives entirely on fat reserves built up beforehand.",
          "To store enough fuel for that, bears enter hyperphagia in late summer and fall, eating up to 20,000+ calories a day and gaining as much as 3-6 pounds daily.",
          "Fat Bear Week isn't just a cute contest — visibly fatter bears at Katmai National Park have measurably better odds of surviving the winter and, for females, successfully nursing cubs through it.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Bear hibernation isn&apos;t a long, ordinary sleep — it&apos;s a controlled shutdown of the body. A hibernating bear&apos;s heart rate drops from around 50 beats per minute to as low as 8-19, and its metabolism slows to a fraction of normal, all so it can go 5 to 7 months without eating, drinking, or even using the bathroom. To fuel that entire stretch, a bear has to build up enough fat beforehand, which is why it spends late summer and fall in <TermLink href="/general-science-facts/why-bears-need-to-double-their-body-fat-before-hibernation">hyperphagia</TermLink> — eating almost constantly, sometimes gaining several pounds a day.</div>}
        detailed={<div className="prose-p">Unlike true deep hibernators such as ground squirrels, whose body temperature can drop close to freezing, a bear&apos;s body temperature only falls by about 3-5°C, staying in a state closer to deep <TermLink href="/general-science-facts/why-bears-need-to-double-their-body-fat-before-hibernation">torpor</TermLink> than the most extreme hibernation — this lets a bear rouse relatively quickly if disturbed, which matters for a large predator that can&apos;t afford to be helpless for months straight. Fat oxidation supplies both energy and <TermLink href="/general-science-facts/why-bears-need-to-double-their-body-fat-before-hibernation">metabolic water</TermLink> — water generated internally as a byproduct of breaking down fat — solving the water problem without a single drink. Waste is handled through <TermLink href="/general-science-facts/why-bears-need-to-double-their-body-fat-before-hibernation">nitrogen recycling</TermLink>: instead of excreting urea (a nitrogen-rich waste product) as urine, a hibernating bear&apos;s body converts it back into usable protein, which is also part of how it avoids losing dangerous amounts of muscle mass despite months of total inactivity — a research area still being studied for potential human medical applications, like muscle-wasting and kidney disease treatment.</div>}
      />
      <FootnoteAside>Pregnant female bears take on the biggest fat-building burden of all — they give birth during hibernation and then nurse cubs for months, producing milk entirely from fat reserves without eating a single meal themselves.</FootnoteAside>

      <p>
      Surviving that fast isn&apos;t possible without first building the fuel tank big enough — which is exactly what the fall feeding frenzy, and Fat Bear Week itself, are actually measuring.
      </p>

      <QuickCheck
        question="Why does a hibernating bear's body convert waste urea back into protein instead of excreting it as urine?"
        options={[
          { text: "Bears can't produce urine at all", correct: false, explanation: "Bears can and do produce urine normally when active. The recycling process is specific to hibernation, when not urinating for months would otherwise let toxic waste build up." },
          { text: "It lets the bear go months without urinating while also preventing the muscle loss that would come from prolonged inactivity and starvation", correct: true, explanation: "Correct. Recycling nitrogen back into protein solves two problems at once: no waste buildup during months without urinating, and reduced muscle breakdown despite total inactivity." },
          { text: "It has nothing to do with hibernation and happens year-round in all bears", correct: false, explanation: "This recycling process is specifically tied to the hibernation state — active bears process waste normally, the same way most mammals do." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A typical hyperphagia season (baseline case)</h3>
      <div className="prose-p">
      An Alaskan brown bear at Katmai National Park might eat around 5,000-6,000 calories a day for most of the year. Once salmon runs peak in late summer, that can spike to 20,000 calories or more a day — the caloric equivalent of roughly 35 large hamburgers — as the bear gorges almost continuously to build fat before den season.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A pregnant female&apos;s extra burden (edge case / variation)</h3>
      <div className="prose-p">
      A pregnant female bear needs to store enough fat not just to survive her own winter fast, but to gestate cubs, give birth in the den, and then nurse them for months — all without eating. If she hasn&apos;t built sufficient fat reserves by denning time, her body can actually delay implantation of the fertilized embryo or reabsorb it entirely, a real biological failsafe that prioritizes the mother&apos;s survival over a pregnancy the fat reserves can&apos;t support.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why Fat Bear Week is a real survival signal (real-world / applied case)</h3>
      <div className="prose-p">
      Katmai&apos;s annual Fat Bear Week compares before-and-after photos of individual bears to crown the one that gained the most weight over the salmon season. It&apos;s popular as a lighthearted online contest, but the underlying comparison is a genuine indicator biologists use: a visibly fatter bear heading into October has a measurably better chance of surviving the full winter fast and, for females, successfully raising cubs — thinner bears face real risk of not waking up in spring.
      </div>

      <QuickCheck
        question="Why might a pregnant female bear's body reabsorb a fertilized embryo instead of carrying the pregnancy to term?"
        options={[
          { text: "It happens completely at random with no connection to the mother's condition", correct: false, explanation: "This process, called delayed implantation, is specifically tied to the mother's fat reserves — it's a biological response to insufficient fuel, not a random event." },
          { text: "If she hasn't built enough fat reserves to survive hibernation and support a pregnancy, her body prioritizes her own survival by not carrying the pregnancy forward", correct: true, explanation: "Correct. Delayed implantation lets a female bear's body assess her fat reserves before committing energy to a pregnancy the reserves can't support." },
          { text: "Bears cannot be pregnant during hibernation under any circumstances", correct: false, explanation: "The opposite is true — bears typically give birth during hibernation. The reabsorption mechanism exists precisely because pregnancy during a total fast is only viable with enough stored fat." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Active bear vs. hibernating bear: what actually shuts down"
        type="detail"
        svgSrc="/diagrams/general-science-facts-why-bears-need-to-double-their-body-fat-before-hibernation.svg"
        altText="Diagram comparing an active bear's heart rate, body temperature, and metabolism against a hibernating bear's dramatically reduced heart rate and metabolism, powered entirely by stored fat with no food, water, or waste elimination."
      />
      <p>
      Notice how much heart rate and metabolism drop compared to how little body temperature falls — that gap is exactly why bear hibernation is considered a milder form of torpor than a true deep hibernator like a ground squirrel, letting a bear stay capable of waking up faster if a threat appears.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming bear hibernation is the same as a squirrel's or a bat's.", fix: "True deep hibernators drop body temperature close to freezing; bears only drop a few degrees and can wake relatively quickly, making bear hibernation a milder form of torpor." },
          { mistake: "Thinking a hibernating bear is completely unresponsive the whole winter.", fix: "Bears can and do rouse if disturbed, shift position in the den, and females give birth and nurse cubs during hibernation — it's a deep rest state, not unconsciousness." },
          { mistake: "Assuming any bear gaining weight before winter is unhealthy or overeating unnaturally.", fix: "Rapid, large fat gain in fall (hyperphagia) is a normal, essential survival adaptation, not a health problem — it's the fuel for the entire winter fast ahead." },
        ]}
      />
      <MisconceptionCallout
        myth="Hibernating bears are basically just sleeping for the winter."
        reality={<p>Hibernation is a controlled physiological shutdown, not ordinary sleep. A bear&apos;s heart rate can fall from around 50 beats per minute to single digits, its metabolism drops sharply, and it survives 5 to 7 months without eating, drinking, urinating, or defecating — running entirely on fat reserves and recycling its own waste products internally. None of that happens during normal sleep, which is why building enough fat beforehand, through weeks of near-constant eating, is a matter of survival rather than simply getting ready for a long nap.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Days of hyperphagia needed to reach a fat-gain target"
        fields={[
          { key: "targetGainLbs", label: "Target weight gain (lbs)", defaultValue: 200, step: 10 },
          { key: "dailyGainLbs", label: "Average daily gain during hyperphagia (lbs/day)", defaultValue: 4, step: 0.5 },
        ]}
        resultLabel="Days of hyperphagia needed"
        formula="hyperphagiaDaysToTargetGain"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Watch Katmai National Park's live \"bear cam\" footage in late summer to see hyperphagia in action before Fat Bear Week's October vote.",
          "Try the calculator above with a lower daily gain rate to see how much longer a bear would need to feed to reach the same fat target — a real illustration of why salmon abundance matters so much to bear survival.",
          "If you encounter bears in the wild during fall, give them extra space — hyperphagia makes bears more food-focused and less cautious than usual.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Do bears really not urinate or defecate all winter?", answer: "Correct — a hibernating bear typically does not urinate or defecate for the entire 5-7 month denning period, recycling waste products like urea back into protein internally instead of excreting them." },
          { question: "Is bear hibernation the same as a ground squirrel's hibernation?", answer: "No. Ground squirrels are true deep hibernators whose body temperature can drop close to freezing; bears only drop a few degrees Celsius and remain able to wake relatively quickly, making their hibernation a milder form of torpor." },
          { question: "Can a bear wake up during hibernation?", answer: "Yes. Bears can rouse if disturbed or threatened, and pregnant females wake enough to give birth and begin nursing cubs during hibernation, unlike some deep hibernators that are much harder to rouse." },
          { question: "Why do fatter bears win Fat Bear Week?", answer: "Fat Bear Week compares how much weight individual bears gained over the salmon season, which is a genuine proxy for survival odds — bears entering winter with more fat reserves are statistically better positioned to survive the full hibernation fast." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
    </>
  );
}
