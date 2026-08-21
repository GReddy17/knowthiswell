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
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Carats & Precious Metal Weight Units",
  category: "units-measurement-conversions",
  order: 14,
  subtopic: "weight-and-mass",
  tags: ["carat", "karat", "troy ounce", "gold", "diamonds", "precious metals"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A diamond's carat measures weight (1 carat = 0.2 g), while gold's karat measures purity out of 24 — two units that sound almost identical but describe completely different physical properties.",
  summary: "The metric carat, used to weigh gemstones, equals exactly 0.2 grams; karat, used for gold, is a purity scale out of 24 parts rather than a unit of weight at all — and precious metals are additionally weighed in troy ounces (≈31.1 g), heavier than the everyday avoirdupois ounce (≈28.35 g).",
  sources: [
    { label: "Gemological Institute of America (GIA) — The 4Cs of Diamond Quality: Carat Weight", url: "https://www.gia.edu/gia-4cs" },
    { label: "NIST — International System of Units (SI)", url: "https://www.nist.gov/pml/owm/metric-si/si-units-mass" },
    { label: "World Gold Council — Gold purity and karat standards", url: "https://www.gold.org/" },
  ],
  seeAlso: [
    "units-measurement-conversions/kilograms-pounds-and-ounces-conversion",
    "units-measurement-conversions/metric-tonnes-vs-us-uk-tons",
  ],
  glossary: [
    { term: "Carat (ct)", definition: "A unit of weight used for gemstones, standardized internationally as exactly 0.2 grams (200 milligrams) — a measure of physical mass, not quality." },
    { term: "Karat (K)", definition: "A purity scale for gold alloys expressed as parts out of 24 — 24K is pure gold, 18K is 18/24 (75%) gold by mass, with the remainder being other metals." },
    { term: "Troy ounce", definition: "A unit of mass used for precious metals, equal to about 31.1035 grams — roughly 10% heavier than the everyday avoirdupois ounce (≈28.3495 g) used for food and general goods." },
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
      "Carat (used for gemstones) is a unit of weight, standardized as exactly 0.2 grams — a 2-carat diamond has a mass of 0.4 grams.",
      "Karat (used for gold) is a purity scale out of 24 parts, not a weight at all — 18K gold is 18 parts gold and 6 parts other metal by mass, or 75% pure.",
      "Precious metals are commonly weighed in troy ounces (≈31.1 g), a different and heavier unit than the everyday avoirdupois ounce (≈28.35 g) used for food and general goods — mixing the two up misstates a metal's price or weight by about 10%.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Carat and karat sound almost identical but measure completely different things. A <TermLink href="/units-measurement-conversions/carats-and-precious-metal-weight-units">carat</TermLink> is how much a gemstone weighs — 1 carat equals exactly 0.2 grams. A <TermLink href="/units-measurement-conversions/carats-and-precious-metal-weight-units">karat</TermLink> is how pure a gold alloy is, on a scale of 24 — 24K gold is pure gold, while 18K gold is 75% gold by mass.</div>}
      detailed={<div className="prose-p">The confusion between carat and karat is largely an English-language spelling quirk — some countries (the UK among them) spell both words &quot;carat&quot; and rely entirely on context to distinguish gem weight from gold purity, while the US commonly uses the &quot;karat&quot; spelling specifically for gold purity to reduce that ambiguity. Layered on top of this is a second, unrelated unit: precious metals like gold and silver are traded and weighed not in the everyday avoirdupois ounce, but in the <TermLink href="/units-measurement-conversions/carats-and-precious-metal-weight-units">troy ounce</TermLink> (about 31.1035 grams) — a historically distinct weight system that survived specifically in precious-metal and gemstone trading long after most other commerce moved to avoirdupois or metric units.</div>}
      />
      <FootnoteAside>The modern metric carat (exactly 0.2 g) was only standardized internationally in the early 20th century — before that, &quot;carat&quot; varied slightly by country and city, based loosely on the mass of a carob seed, which is where the word&apos;s root actually comes from.</FootnoteAside>

      <QuickCheck
      question="A jeweler describes a ring as '2 carats, 18 karat gold.' What do these two numbers actually describe?"
      options={[
      { text: "Both numbers describe the same thing — how much gold is in the ring", correct: false, explanation: "They describe two completely unrelated properties: the '2 carats' refers to the weight of the gemstone(s) set in the ring, while '18 karat' refers to the purity of the gold in the band, unrelated to the gem's weight." },
      { text: "'2 carats' describes the gemstone's weight (0.4 grams), and '18 karat' describes the gold's purity (18/24, or 75% gold)", correct: true, explanation: "Correct. These are independent measurements on independent materials within the same piece of jewelry — you could have a 2-carat stone in 24K, 18K, or 14K gold, and the carat figure wouldn't change at all." },
      { text: "'18 karat' means the ring is 18% gold by weight", correct: false, explanation: "Karat is out of 24, not out of 100 — 18 karat means 18 out of 24 parts gold, which works out to 75%, not 18%." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting a diamond&apos;s carat weight to grams (baseline case)</h3>
      <div className="prose-p">
      A diamond is listed at 1.5 carats. Converting: 1.5 × 0.2 = 0.3 grams. Despite the emotional and price significance of carat weight in the diamond trade, physically it&apos;s a tiny amount of mass — a typical 1-carat diamond weighs about the same as a small paperclip.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Calculating the actual gold content of an 18K item by weight (edge case / variation)</h3>
      <div className="prose-p">
      An 18K gold bracelet weighs 20 grams total. Since 18K means 18/24 gold by mass, the actual gold content is 20 × (18/24) = 20 × 0.75 = 15 grams — the remaining 5 grams are other metals (commonly copper, silver, or zinc) alloyed in for durability, since pure 24K gold is too soft for everyday jewelry.
      </div>

      <QuickCheck
      question="A 20 gram bracelet is marked 18K gold. How much of that 20 grams is actually pure gold?"
      options={[
      { text: "18 grams, since '18K' directly states the gram amount", correct: false, explanation: "Karat isn't a gram figure at all — it's a purity ratio out of 24. Reading '18K' as '18 grams' confuses two completely different kinds of numbers." },
      { text: "15 grams — 18K means 18/24 (75%) gold by mass, and 75% of the 20 gram total is 15 grams", correct: true, explanation: "Correct. The karat figure has to be converted to a fraction (18/24 = 0.75) and then applied to the item's actual total weight to find the true gold content." },
      { text: "20 grams, since any gold marked with a karat number is considered pure gold for trading purposes", correct: false, explanation: "Only 24K gold is considered pure. Anything below 24K, including 18K, contains a real, calculable fraction of non-gold metal by design." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why gold prices are always quoted per troy ounce, not per avoirdupois ounce (real-world / applied case)</h3>
      <div className="prose-p">
      A news report quotes gold at &quot;$2,400 per ounce.&quot; This figure always refers to the troy ounce (≈31.1035 g), not the everyday avoirdupois ounce (≈28.3495 g) — a roughly 9.7% difference. If someone mistakenly priced a 100-gram gold bar using the avoirdupois-ounce price instead of the troy-ounce price, they&apos;d compute 100 ÷ 28.3495 × $2,400 ≈ $8,466, when the correct troy-ounce-based calculation is 100 ÷ 31.1035 × $2,400 ≈ $7,715 — a difference of roughly $750 on a single bar, entirely from using the wrong &quot;ounce.&quot;
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Carat (weight) vs. karat (purity) — two unrelated measurements"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-carats-and-precious-metal-weight-units-two-carat-meanings.svg"
      altText="Two separate boxes both labeled carat: the diamond-carat box reads 1 metric carat equals 0.2 grams, a unit of physical weight; the gold-karat box reads 24 karat equals pure gold and 18 karat equals 75 percent gold, a scale of purity rather than weight."
      />
      <p>
      Carat is always a weight (grams), regardless of what gemstone is being described. Karat is always a purity ratio (out of 24), regardless of the item&apos;s total weight. Neither figure can be derived from the other — they answer completely different questions.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating 'carat' and 'karat' as spelling variants of the same concept.", fix: "Carat is always a weight (0.2 g), used for gemstones. Karat is always a purity ratio (out of 24), used for gold. They apply to different materials and measure different physical properties." },
      { mistake: "Reading a karat figure as a direct percentage without dividing by 24 first.", fix: "Convert karat to a percentage by dividing by 24 (e.g., 18K = 18/24 = 75%), then apply that percentage to the item's actual weight to find the pure-metal content." },
      { mistake: "Using the everyday avoirdupois ounce (≈28.35 g) when calculating precious-metal prices quoted 'per ounce.'", fix: "Precious-metal prices almost always use the troy ounce (≈31.1035 g) — check which ounce is meant before doing any price-per-gram math." },
      ]}
      />
      <MisconceptionCallout
      myth="A larger karat number on a piece of gold jewelry means it's a bigger, heavier piece."
      reality={<p>Karat has nothing to do with size or weight — a tiny 24K gold stud earring is purer (but not larger) than a much bigger 14K gold necklace. Karat measures only what fraction of the metal&apos;s mass is actually gold, completely independent of how much the item weighs overall.</p>}
      />

      <QuickCheck
      question="Why does gold priced 'per ounce' in the news use a different gram figure than an everyday 'ounce' of food?"
      options={[
      { text: "It doesn't — both use exactly the same ounce definition", correct: false, explanation: "They use genuinely different units: the troy ounce (≈31.1035 g) for precious metals versus the avoirdupois ounce (≈28.3495 g) for everyday goods like food — about a 9.7% difference." },
      { text: "Precious metals are traditionally weighed in the troy ounce, a separate historical unit from the everyday avoirdupois ounce used for general goods", correct: true, explanation: "Correct. This is a specific carryover from a separate historical weighing system used for precious metals and gemstones, distinct from the everyday customary system." },
      { text: "Gold is simply denser than food, which changes what an 'ounce' means", correct: false, explanation: "Density affects how much space a given mass occupies, not the definition of a weight unit itself — an ounce (of either kind) is a fixed amount of mass regardless of what's being weighed." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert a gemstone or metal weight using a fixed conversion factor"
      fields={[
      { key: "value", label: "Value to convert", defaultValue: 1.5 },
      { key: "conversionFactor", label: "Conversion factor (0.2 carat→g, 31.1035 troy oz→g)", defaultValue: 0.2, step: 0.0001 },
      ]}
      resultLabel="Converted value"
      formula="unitConversionByFactor"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Remember carat = weight (0.2 g each), karat = purity (out of 24) — they never describe the same thing, even on the same piece of jewelry.",
      "To find actual gold content, divide the karat number by 24 and multiply by the item's total weight.",
      "When comparing precious-metal prices, confirm whether the figure is per troy ounce (≈31.1 g) or per avoirdupois ounce (≈28.35 g) before doing any math.",
      "Use the calculator above with 0.2 for carat-to-gram conversions, or 31.1035 for troy-ounce-to-gram conversions.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is a carat in grams?", answer: "Exactly 0.2 grams (200 milligrams) — the internationally standardized metric carat used to weigh gemstones like diamonds." },
      { question: "Is carat the same as karat?", answer: "No. Carat is a unit of weight (0.2 g) used for gemstones. Karat is a purity scale out of 24 used for gold — 24K is pure gold, 18K is 75% gold by mass. They measure completely different properties." },
      { question: "How much gold is in 18 karat jewelry?", answer: "75% gold by mass (18 out of 24 parts). An 18K item's actual gold content equals its total weight multiplied by 0.75, with the remainder being other alloyed metals." },
      { question: "Why is gold priced per troy ounce instead of a regular ounce?", answer: "Precious metals use a separate historical weighing system where a troy ounce (≈31.1035 g) is the standard unit — heavier than the everyday avoirdupois ounce (≈28.3495 g) used for food and general goods." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
