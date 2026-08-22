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
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Reducing Food Waste at Home",
  category: "environment-nature",
  order: 30,
  subtopic: "sustainable-living-practices",
  tags: ["food waste", "EPA food recovery hierarchy", "landfill methane", "sustainability", "household waste"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Food waste sent to a landfill doesn't just represent lost meals — it decomposes without oxygen there, producing methane, a greenhouse gas far more potent than the carbon dioxide released if that same food had simply been eaten.",
  summary: "Wasted food carries a double environmental cost: all the water, land, energy, and labor used to grow, process, and transport it are wasted the moment it's discarded, and once in a landfill, food waste decomposes anaerobically (without oxygen) and produces methane, a greenhouse gas roughly 28-36 times more potent than carbon dioxide over a 100-year period.",
  sources: [
    { label: "EPA — Food Loss and Waste", url: "https://www.epa.gov/sustainable-management-food" },
    { label: "EPA — Wasted Food Scale (Food Recovery Hierarchy)", url: "https://www.epa.gov/sustainable-management-food/wasted-food-scale" },
    { label: "USDA — Food Waste FAQs", url: "https://www.usda.gov/media/blog/2016/09/16/food-waste-faqs" },
  ],
  seeAlso: [
    "environment-nature/the-reduce-reuse-recycle-hierarchy-explained",
    "environment-nature/composting-basics-for-beginners",
    "math-numbers/math-in-cooking-measurement-conversions-scaling-recipes",
  ],
  glossary: [
    {"term":"Anaerobic decomposition","definition":"The breakdown of organic material in an oxygen-poor environment, such as a compacted landfill, which produces methane as a byproduct instead of the carbon dioxide produced by decomposition with oxygen present."},
    {"term":"Wasted Food Scale","definition":"The EPA's ranked framework for handling surplus or unwanted food, prioritizing prevention and feeding people first, with landfill disposal as the least preferred option."},
    {"term":"Methane","definition":"A greenhouse gas produced by anaerobic decomposition (among other sources) that traps significantly more heat in the atmosphere than carbon dioxide over a given timeframe, though it also breaks down faster."},
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
      "Wasted food has a double environmental cost: the resources used to grow and transport it are wasted, and once landfilled, it decomposes anaerobically and produces methane, a far more potent greenhouse gas than the CO2 released by normal, oxygen-present decomposition.",
      "The EPA's Wasted Food Scale ranks prevention (not generating the surplus at all) and feeding people above composting, and composting above landfill disposal — mirroring the same logic as the general waste management hierarchy.",
      "Most household food waste is genuinely edible food discarded due to over-purchasing, poor storage, or confusion over date labels, not inedible scraps like peels and bones.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Food thrown away wastes everything it took to grow, process, and ship it. When it ends up in a landfill, it also breaks down without oxygen in a process called <TermLink href="/environment-nature/reducing-food-waste-at-home">anaerobic decomposition</TermLink>, which produces <TermLink href="/environment-nature/reducing-food-waste-at-home">methane</TermLink> — a gas that traps far more heat than the carbon dioxide that would be released if that food had been eaten or composted instead.</div>}
      detailed={<div className="prose-p">In a properly maintained compost pile, oxygen is present and microorganisms break down food scraps aerobically, releasing mostly carbon dioxide and water vapor. In a compacted landfill, food waste is buried under layers of other waste with little oxygen access, so a different set of microorganisms (methanogens) break it down anaerobically instead, producing methane as a primary byproduct. Per EPA and IPCC figures, methane traps roughly 28-36 times more heat than an equivalent mass of CO2 over a 100-year period, though it also breaks down in the atmosphere faster than CO2 does. The EPA&apos;s <TermLink href="/environment-nature/reducing-food-waste-at-home">Wasted Food Scale</TermLink> formalizes the response priority: prevent surplus food from existing in the first place, feed surplus food to people, feed scraps to animals, use it for industrial purposes, compost it, and only send genuinely unusable material to landfill or combustion as a last resort.</div>}
      />
      <FootnoteAside>Landfills are the third-largest source of human-related methane emissions in the United States, according to EPA greenhouse gas inventory data — a substantial share of which traces back to decomposing organic waste, including food.</FootnoteAside>

      <p>
      Most conversations about food waste focus on composting as the fix, but the EPA&apos;s own hierarchy ranks prevention and feeding people well above composting — composting is a genuine improvement over landfilling, but it&apos;s still lower on the priority list than simply not generating the surplus food in the first place.
      </p>

      <QuickCheck
      question="A household starts composting all its food scraps but doesn't change its shopping or storage habits, so it still buys and later discards roughly the same amount of food as before. Has this household fully addressed food waste according to the EPA's Wasted Food Scale?"
      options={[
      { text: "Yes — composting is the top priority on the scale, so this fully solves the problem", correct: false, explanation: "Composting sits below prevention and feeding people on the EPA's Wasted Food Scale. It's a real improvement over landfilling, but it doesn't address the higher-priority tiers of simply generating less surplus food." },
      { text: "No — prevention (buying and storing food so less becomes surplus in the first place) ranks above composting on the scale, so composting the same volume of waste is an improvement over landfilling but not the top-priority fix", correct: true, explanation: "Correct. Composting diverts food waste from landfill methane production, which is genuinely valuable, but it doesn't reduce how much food is being wasted overall — the scale's higher tiers target that directly." },
      { text: "It's impossible to know without measuring the compost pile's methane output directly", correct: false, explanation: "The scale's ranking doesn't require measuring emissions directly — it's a structural priority order based on which intervention avoids the most impact, with prevention ranked above composting regardless of any single household's specific numbers." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Comparing three end-of-life paths for the same leftover food (baseline case)</h3>
      <div className="prose-p">
      A household has leftover cooked vegetables that won&apos;t be eaten. Option A: throw them in the regular trash, headed for landfill (anaerobic decomposition, methane). Option B: put them in a home compost bin (aerobic decomposition, mostly CO2 and usable finished compost). Option C: portion and freeze them for a future meal (fully avoids waste, since the food is eventually eaten). Ranked by the Wasted Food Scale, Option C outranks Option B, which outranks Option A.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Date-label confusion causing avoidable waste (edge case / variation)</h3>
      <div className="prose-p">
      A carton of eggs displays a &quot;best by&quot; date that has passed by three days, and a household discards it assuming it&apos;s unsafe. In most cases, &quot;best by,&quot; &quot;sell by,&quot; and &quot;use by&quot; are manufacturer freshness estimates, not safety cutoffs, and many foods remain perfectly good to eat past that date if stored properly (USDA guidance discusses this distinction directly). This is a documented, common source of avoidable household food waste — genuinely edible food discarded not because it spoiled, but because of a misunderstanding of what the date label actually signifies.
      </div>

      <QuickCheck
      question="Does a 'best by' date on a food package always mean the food becomes unsafe to eat after that date?"
      options={[
      { text: "Yes, 'best by' dates are federally regulated safety cutoffs", correct: false, explanation: "In most cases, 'best by' and similar labels are manufacturer estimates of peak quality or freshness, not federally mandated safety expiration dates (with limited exceptions like infant formula) — per USDA guidance." },
      { text: "No — 'best by,' 'sell by,' and 'use by' dates are generally manufacturer freshness estimates, not safety cutoffs, and many foods remain safe to eat past that date if stored properly, which is a documented source of avoidable household food waste", correct: true, explanation: "Correct. This date-label confusion is explicitly called out by USDA guidance as a common, avoidable cause of household food being discarded while it's still genuinely edible." },
      { text: "No, because date labels apply only to non-perishable packaged goods, not fresh food", correct: false, explanation: "Date labels appear on a wide range of both perishable and shelf-stable foods; the key nuance is what the label actually communicates (quality estimate vs. safety cutoff), not which category of food it's printed on." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A grocery store&apos;s food-recovery donation program (real-world / applied case)</h3>
      <div className="prose-p">
      A grocery store nearing the end of a product&apos;s shelf life donates unsold but still-safe food to a local food bank rather than discarding it. This is a direct, real-world application of the Wasted Food Scale&apos;s second tier (&quot;feed people&quot;), and it&apos;s exactly the kind of program the EPA&apos;s own Wasted Food Scale is designed to encourage retailers and institutions toward, ahead of composting or landfilling the same surplus food.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The EPA Wasted Food Scale, most to least preferred"
      type="comparison"
      svgSrc="/diagrams/environment-nature-reducing-food-waste-at-home-wasted-food-scale.svg"
      altText="A vertical ranked list of six tiers from top (most preferred) to bottom (least preferred): Prevent surplus food, Feed hungry people, Feed animals, Industrial uses, Composting, and Landfill or combustion at the bottom, with a downward arrow indicating decreasing environmental preference."
      />
      <p>
      Composting sits near the bottom of the scale, not the top — it&apos;s a real improvement over landfill because it avoids methane-producing anaerobic decomposition, but the scale still ranks it below every option that actually gets the food used for its original purpose, feeding someone or something.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Discarding food based on a 'best by' or 'sell by' date without checking whether it shows any actual signs of spoilage.", fix: "Treat most date labels as freshness estimates, not safety cutoffs, and use your senses (smell, appearance, texture) alongside proper storage as the real safety check for most foods." },
      { mistake: "Assuming composting alone 'solves' a household's food waste problem.", fix: "Track how much food is being thrown out in the first place — composting reduces the landfill/methane impact of waste that already exists, but doesn't reduce how much food is being wasted overall." },
      { mistake: "Over-purchasing perishable food without a plan for using it before it spoils.", fix: "Plan meals against what's already in the fridge and pantry before buying more, and freeze portions of perishable food you won't use in time." },
      ]}
      />
      <MisconceptionCallout
      myth="Since food is biodegradable, tossing it in the regular trash isn't really an environmental problem the way plastic waste is."
      reality={<p>Being biodegradable doesn&apos;t make landfill disposal harmless. In a landfill&apos;s oxygen-poor, compacted environment, food waste decomposes anaerobically and produces methane — a greenhouse gas far more potent than the CO2 released by normal aerobic decomposition (like composting) or by simply eating the food. Landfills are among the largest human-related sources of methane emissions precisely because of this dynamic.</p>}
      />

      <QuickCheck
      question="Why does food waste in a landfill produce methane, while the same food waste in a home compost pile mostly produces carbon dioxide instead?"
      options={[
      { text: "Landfills use different microorganisms that are specifically engineered to produce methane", correct: false, explanation: "The microorganisms involved (methanogens) occur naturally wherever anaerobic conditions exist — they aren't specially engineered for landfills, they simply thrive in the oxygen-poor conditions landfills create." },
      { text: "Because landfills are compacted and oxygen-poor, favoring anaerobic decomposition (which produces methane), while a properly maintained compost pile has oxygen present, favoring aerobic decomposition (which produces mostly CO2 and water vapor)", correct: true, explanation: "Correct. Oxygen availability is the key variable — the same organic material produces different byproducts depending on whether it decomposes with or without oxygen present." },
      { text: "It doesn't actually differ — both processes release identical greenhouse gases in identical amounts", correct: false, explanation: "The processes and their byproducts genuinely differ. Anaerobic (landfill) decomposition produces methane as a primary byproduct, while aerobic (compost) decomposition does not, which is a real and well-documented distinction." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Plan meals and shopping lists against what's already in your fridge and pantry, to reduce over-purchasing that leads to spoilage.",
      "Learn the real meaning of 'best by' vs 'use by' labels for common foods you buy, rather than discarding automatically at the printed date.",
      "Freeze portions of perishable food you won't use in time, rather than letting it spoil unused.",
      "If composting isn't already part of your routine, add it as a fallback for genuine scraps — but treat prevention, not composting, as the primary goal.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Why is food waste bad for the environment?", answer: "Wasted food squanders all the resources used to grow and transport it, and in a landfill it decomposes anaerobically, producing methane — a greenhouse gas far more potent than the CO2 released by composting or eating that same food." },
      { question: "What is the EPA's Wasted Food Scale?", answer: "A ranked framework prioritizing prevention (not generating surplus food) and feeding people first, then feeding animals and industrial uses, then composting, with landfill or combustion as the least preferred option." },
      { question: "Does composting solve food waste?", answer: "Composting is a real improvement over landfilling because it avoids methane-producing anaerobic decomposition, but the EPA's own hierarchy still ranks it below prevention and feeding people — it doesn't reduce how much food is wasted overall." },
      { question: "Do 'best by' dates mean food is unsafe to eat afterward?", answer: "Generally no. Per USDA guidance, most date labels are manufacturer freshness estimates, not safety cutoffs, and many foods remain safe to eat past that date if stored properly and showing no signs of spoilage." },
      { question: "Why does landfilled food produce methane specifically?", answer: "Landfills are compacted and largely oxygen-free, which favors anaerobic decomposition by methane-producing microorganisms, unlike aerobic environments (such as a properly maintained compost pile) where oxygen is present." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
