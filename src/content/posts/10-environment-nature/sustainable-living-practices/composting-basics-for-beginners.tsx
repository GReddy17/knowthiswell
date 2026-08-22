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
  title: "Composting Basics for Beginners",
  category: "environment-nature",
  order: 26,
  subtopic: "sustainable-living-practices",
  tags: ["composting", "food waste", "aerobic decomposition", "soil health", "backyard composting"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Composting isn't just letting scraps rot — it's managing a specific ratio of carbon-rich to nitrogen-rich material so aerobic microbes can break it down efficiently instead of anaerobically, which is what causes smell.",
  summary: "Composting works by giving oxygen-breathing (aerobic) microorganisms a roughly 25-30:1 ratio of carbon-rich \"browns\" to nitrogen-rich \"greens,\" along with enough moisture and airflow, so they break organic material down into stable, nutrient-rich humus instead of the smelly, slow process that results when the pile goes anaerobic.",
  sources: [
    { label: "EPA — Composting at Home", url: "https://www.epa.gov/recycle/composting-home" },
    { label: "USDA — Backyard Composting", url: "https://www.usda.gov/media/blog/2021/05/13/backyard-composting" },
    { label: "Cornell Waste Management Institute — Composting", url: "https://cwmi.css.cornell.edu/compost.htm" },
  ],
  seeAlso: [
    "environment-nature/the-reduce-reuse-recycle-hierarchy-explained",
    "environment-nature/reducing-food-waste-at-home",
    "math-numbers/ratios-and-proportions",
  ],
  glossary: [
    {"term":"Aerobic decomposition","definition":"The breakdown of organic material by oxygen-breathing microorganisms, which is faster and odor-free compared to anaerobic (oxygen-free) decomposition."},
    {"term":"Carbon:nitrogen ratio","definition":"The proportion of carbon-rich material (\"browns,\" like dry leaves) to nitrogen-rich material (\"greens,\" like food scraps) in a compost pile, ideally around 25-30 parts carbon to 1 part nitrogen by weight."},
    {"term":"Humus","definition":"The dark, stable, nutrient-rich organic material that remains after compost has fully decomposed, used to improve soil structure and fertility."},
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
      "Composting works through aerobic decomposition — oxygen-breathing microorganisms break down organic material, which requires airflow, moisture, and the right mix of ingredients to work efficiently.",
      "The key ratio is roughly 25-30 parts carbon-rich \"browns\" (dry leaves, cardboard) to 1 part nitrogen-rich \"greens\" (food scraps, grass clippings) by weight — too much nitrogen causes the smell most people associate with failed compost.",
      "A well-managed hot compost pile can reach 131-170°F (55-77°C) at its core, hot enough to kill most weed seeds and pathogens, which is why active management (not just piling scraps and waiting) produces faster, better results.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Composting turns food scraps and yard waste into a dark, crumbly soil additive by giving natural microorganisms what they need to break it down: a mix of &quot;browns&quot; (dry, carbon-rich material like dead leaves or cardboard) and &quot;greens&quot; (moist, nitrogen-rich material like vegetable scraps or grass clippings), plus enough water and air. Layer or mix roughly 2-3 parts browns to 1 part greens, keep it about as damp as a wrung-out sponge, and turn the pile occasionally to add oxygen.</div>}
      detailed={<div className="prose-p">The process is <TermLink href="/environment-nature/composting-basics-for-beginners">aerobic decomposition</TermLink> — bacteria and fungi that require oxygen consume the organic material and multiply rapidly, generating heat as a byproduct of their metabolism. The <TermLink href="/environment-nature/composting-basics-for-beginners">carbon:nitrogen ratio</TermLink> matters because carbon provides microbial energy while nitrogen provides the protein-building blocks microbes need to reproduce; too little nitrogen (too many browns) and decomposition stalls from a lack of microbial growth, too much nitrogen (too many greens) and excess is released as smelly ammonia gas rather than being incorporated into microbial biomass. If the pile lacks oxygen — usually from being too wet or too compacted — the aerobic bacteria die off and anaerobic organisms take over instead, which decompose material far more slowly and release methane and hydrogen sulfide, the source of the classic rotten-egg compost smell. A properly managed pile heats up as microbial activity peaks, then cools as available material is consumed, eventually stabilizing into <TermLink href="/environment-nature/composting-basics-for-beginners">humus</TermLink>.</div>}
      />
      <FootnoteAside>The heat generated during active composting (up to 131-170°F at the pile&apos;s core) isn&apos;t just a side effect — it&apos;s what allows a well-managed &quot;hot&quot; compost system to kill most weed seeds and plant pathogens that a passive, cold pile would preserve and later spread back into the garden.</FootnoteAside>

      <p>
      Most home composting failures trace back to one of two mistakes: too much nitrogen-heavy material with no dry browns to balance it, or a pile that&apos;s too wet and compacted to get any air.
      </p>

      <QuickCheck
      question="A backyard compost pile smells strongly like rotten eggs. What does this most likely indicate?"
      options={[
      { text: "The pile has too much carbon-rich material (browns) and needs more food scraps", correct: false, explanation: "Too much carbon typically causes slow, cold decomposition without odor, not a sulfurous smell — an excess of browns isn't what produces this particular symptom." },
      { text: "The pile has gone anaerobic, usually from being too wet or too compacted to get airflow, and anaerobic bacteria are producing hydrogen sulfide instead of the odorless aerobic process", correct: true, explanation: "Correct. A rotten-egg smell is a classic sign the pile has lost oxygen and shifted to anaerobic decomposition, which produces hydrogen sulfide gas. The fix is usually to turn the pile and add dry, coarse browns to restore airflow." },
      { text: "The compost is fully finished and ready to use in the garden", correct: false, explanation: "Finished compost smells earthy, not sulfurous — a strong rotten-egg smell is a sign of a problem (anaerobic conditions), not a sign of completion." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Building a balanced starter pile (baseline case)</h3>
      <div className="prose-p">
      A beginner has a bucket of vegetable scraps (greens) and a bag of dry fallen leaves (browns). Following the roughly 2-3:1 browns-to-greens ratio by volume, they layer about 3 parts leaves to 1 part scraps, moisten it lightly, and give it a rough mix. This starting ratio approximates the 25-30:1 carbon:nitrogen ratio by weight that decomposer microbes need, since dry leaves are much lower in moisture and nitrogen than fresh food scraps.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Diagnosing a stalled, cold pile (edge case / variation)</h3>
      <div className="prose-p">
      A pile made almost entirely of dry autumn leaves (heavy on carbon, light on nitrogen) sits for weeks without heating up or visibly breaking down. The fix is adding nitrogen-rich material — coffee grounds, grass clippings, or food scraps — to bring the ratio back down toward 25-30:1. Within days of adding greens and remixing for oxygen, microbial activity typically resumes and the pile begins heating again, which is the visible sign decomposition has restarted.
      </div>

      <QuickCheck
      question="Why does an all-browns pile fail to heat up, while an all-greens pile tends to smell bad instead?"
      options={[
      { text: "Both problems have the same underlying cause", correct: false, explanation: "They're opposite problems: too little nitrogen (all browns) starves microbial growth and stalls the process; too much nitrogen (all greens) overwhelms the microbes' ability to use it and also tends to compact and go anaerobic, causing smell." },
      { text: "An all-browns pile lacks the nitrogen microbes need to grow and reproduce, so activity stays low and the pile stays cool; an all-greens pile has excess nitrogen that off-gasses as ammonia, and the wet, dense material easily compacts and loses oxygen, going anaerobic", correct: true, explanation: "Correct. Both are C:N ratio problems in opposite directions — one starves the microbial population, the other overwhelms it and tends to also cause an oxygen problem from compaction." },
      { text: "Only pile size, not ingredient ratio, determines whether a compost pile heats up or smells", correct: false, explanation: "Pile size affects heat retention, but the ingredient ratio (carbon to nitrogen) is the primary driver of both heating and odor — a correctly balanced small pile will still outperform a poorly balanced large one." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A municipal food-waste composting program (real-world / applied case)</h3>
      <div className="prose-p">
      Many cities now run curbside food-waste collection that feeds industrial composting facilities. These facilities apply the exact same principles as a backyard pile — carbon:nitrogen balance, moisture control, and aerobic turning — but at a much larger scale, using mechanical turners and temperature sensors to keep the whole mass in the optimal 131-170°F range consistently. The finished compost is then often sold back to residents or used in municipal parks and landscaping, closing the loop on food waste that would otherwise have gone to landfill, where it decomposes anaerobically and produces methane, a potent greenhouse gas.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The browns-to-greens balance and what happens at each extreme"
      type="comparison"
      svgSrc="/diagrams/environment-nature-composting-basics-for-beginners-browns-greens-balance.svg"
      altText="A balance scale diagram with three states: on the left, a scale tipped heavily toward brown dry leaves labeled too many browns, cold and slow; in the center, a balanced scale with both brown leaves and green scraps labeled balanced pile, active and hot; on the right, a scale tipped heavily toward green food scraps labeled too many greens, smelly and anaerobic."
      />
      <p>
      The centered, balanced state is where aerobic microbes have both the energy (carbon) and building blocks (nitrogen) they need to multiply quickly — tipping too far in either direction removes one of those two requirements and stalls or sours the process.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Adding only food scraps (greens) without balancing them with dry browns.", fix: "Keep a stock of dry leaves, shredded cardboard, or straw nearby, and add a layer of browns every time you add greens to maintain the ratio." },
      { mistake: "Letting the pile get too wet and compacted, cutting off airflow.", fix: "Turn the pile every week or two with a fork or compost tumbler, and add dry browns if it feels soggy — the pile should feel like a wrung-out sponge, not a puddle." },
      { mistake: "Adding meat, dairy, or oily food waste to a basic backyard pile.", fix: "Stick to plant-based scraps for backyard composting — meat and dairy attract pests and decompose poorly without the higher, more consistent heat of an industrial facility." },
      ]}
      />
      <MisconceptionCallout
      myth="Composting is just piling up scraps and letting them rot on their own — there's no real technique involved."
      reality={<p>Unmanaged piles can decompose eventually, but slowly and often with odor, since they tend to go anaerobic without active turning for oxygen. A managed compost pile is deliberately balanced for carbon:nitrogen ratio, moisture, and airflow specifically to keep aerobic microorganisms active, which is what makes the difference between a fast, odorless, several-week process and a slow, smelly, months-long one.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Start a simple bin with roughly 2-3 parts dry browns to 1 part fresh greens, and keep a stock of extra browns on hand.",
      "Turn the pile every 1-2 weeks to keep it aerobic — a pitchfork or compost tumbler both work.",
      "Keep the pile as damp as a wrung-out sponge — add water if it's dusty, add dry browns if it's soggy.",
      "Avoid meat, dairy, and oily scraps in a basic backyard system; stick to plant-based material.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the ideal carbon-to-nitrogen ratio for composting?", answer: "Roughly 25-30 parts carbon-rich \"browns\" (dry leaves, cardboard) to 1 part nitrogen-rich \"greens\" (food scraps, grass clippings) by weight, which in practice usually means 2-3 parts browns to 1 part greens by volume, since browns are lighter." },
      { question: "Why does compost smell bad sometimes?", answer: "A bad smell (especially rotten-egg or ammonia) means the pile has too little oxygen (anaerobic decomposition) or too much nitrogen relative to carbon. Turning the pile for air and adding dry browns usually fixes it." },
      { question: "How hot does a compost pile actually get?", answer: "An actively managed hot compost pile can reach 131-170°F (55-77°C) at its core during peak microbial activity, hot enough to kill most weed seeds and pathogens." },
      { question: "Can you compost meat and dairy?", answer: "Not in a typical backyard system — they attract pests and decompose poorly without the sustained high heat of an industrial composting facility. Stick to plant-based scraps for backyard composting." },
      { question: "How long does composting take?", answer: "A well-balanced, actively turned pile can produce usable compost in as little as 4-8 weeks; a passive, unmanaged pile can take 6 months to a year or more." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
