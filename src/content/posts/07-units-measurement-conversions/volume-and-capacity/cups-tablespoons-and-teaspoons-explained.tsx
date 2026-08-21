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
  title: "Cups, Tablespoons & Teaspoons Explained",
  category: "units-measurement-conversions",
  order: 18,
  subtopic: "volume-and-capacity",
  tags: ["cooking measurements", "tablespoons", "teaspoons", "cups", "volume conversion"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "1 US cup equals 16 tablespoons equals 48 teaspoons — a clean chain of ratios, until an Australian recipe's tablespoon (20 mL, not 15 mL) breaks it.",
  summary: "US cooking measures nest in clean whole-number ratios — 1 cup = 16 tablespoons = 48 teaspoons — but the tablespoon itself isn't a single global size, since Australia defines it as 20 mL instead of the 15 mL used in the US and UK.",
  sources: [
    { label: "NIST — Handbook 44, Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices", url: "https://www.nist.gov/pml/owm/publications/nist-handbook-44" },
    { label: "Encyclopaedia Britannica — Units of measurement", url: "https://www.britannica.com/science/measurement-system" },
    { label: "USDA — Weights, Measures, and Conversion Factors for Agricultural Commodities", url: "https://www.ers.usda.gov/webdocs/publications/41880/33132_ah697_002.pdf" },
  ],
  seeAlso: [
    "units-measurement-conversions/liters-vs-gallons-everyday-conversion",
    "units-measurement-conversions/converting-recipe-measurements-between-countries",
    "math-numbers/math-in-cooking-measurement-conversions-scaling-recipes",
  ],
  glossary: [
    {"term":"US teaspoon","definition":"A US cooking volume unit equal to 4.92892 milliliters, the smallest unit in the standard US measuring-spoon set."},
    {"term":"US tablespoon","definition":"A US cooking volume unit equal to 3 US teaspoons, or 14.7868 milliliters."},
    {"term":"Australian tablespoon","definition":"A cooking volume unit used in Australia equal to 20 milliliters (4 teaspoons), larger than the 15 mL US/UK tablespoon."},
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
      "US cooking measures nest in clean whole-number ratios: 1 cup = 16 tablespoons = 48 teaspoons, all built from a single base unit multiplied by small integers.",
      "The tablespoon is not a single global size — the US and UK use 15 mL (technically 14.7868 mL in the US, 15 mL exactly in the UK/metric world), while Australia defines its tablespoon as 20 mL, equal to 4 teaspoons instead of 3.",
      "Because the Australian tablespoon breaks the clean ×3 ratio other countries share, an Australian recipe read as if it used a US tablespoon will over-measure any ingredient given in tablespoons by about a third.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">In US recipes, the small volume units nest neatly: 3 <TermLink href="/units-measurement-conversions/cups-tablespoons-and-teaspoons-explained">teaspoons</TermLink> make 1 <TermLink href="/units-measurement-conversions/cups-tablespoons-and-teaspoons-explained">tablespoon</TermLink>, and 16 tablespoons make 1 cup. So a cup is 48 teaspoons, and converting between any two of these three units is just multiplying or dividing by a small whole number. The catch is that a &quot;tablespoon&quot; isn&apos;t exactly the same size everywhere — most of the English-speaking world uses roughly 15 mL, but Australia uses 20 mL.</div>}
      detailed={<div className="prose-p">The US teaspoon is legally defined as exactly 4.92892159375 milliliters (derived from older fluid-ounce and cup definitions), and the tablespoon as exactly 3 of those teaspoons, or 14.7867648 mL. The UK and most of the metric world round the tablespoon to a clean 15 mL for practical use. Australia&apos;s tablespoon, defined during its 1970s metric standardization, was set at 20 mL — equal to 4 teaspoons rather than 3 — reportedly to make it a cleaner fraction of a metric cup (250 mL). This means the same word, &quot;tablespoon,&quot; represents a roughly 33% larger volume in an Australian recipe than in a US or UK one, and Australian teaspoons stay at the more standard 5 mL, so the mismatch is specifically in the tablespoon, not the teaspoon.</div>}
      />
      <FootnoteAside>A US &quot;cup&quot; itself (236.588 mL) isn&apos;t the same as a metric cup either — Australia, Canada, New Zealand, and the UK&apos;s informal &quot;metric cup&quot; convention typically use 250 mL, which is about 5.6% larger than the US cup.</FootnoteAside>

      <p>
      The whole-number nesting inside one country&apos;s system is genuinely reliable — the risk is entirely in assuming that nesting holds true across country lines.
      </p>

      <QuickCheck
      question="An Australian recipe calls for 2 tablespoons of oil. If you measure it with a US tablespoon (15 mL) instead of the intended Australian tablespoon (20 mL), what happens?"
      options={[
      { text: "Nothing — a tablespoon is a tablespoon regardless of country", correct: false, explanation: "Australia's tablespoon (20 mL) is about a third larger than the US/UK tablespoon (15 mL), so substituting one for the other changes the actual amount measured." },
      { text: "You'll under-measure the oil — 2 US tablespoons (30 mL) is less than the intended 2 Australian tablespoons (40 mL)", correct: true, explanation: "Correct. 2 × 15 mL = 30 mL, versus the intended 2 × 20 mL = 40 mL — a 10 mL shortfall, about 25% less than the recipe intended." },
      { text: "You'll over-measure the oil, since US tablespoons are larger than Australian ones", correct: false, explanation: "It's the reverse — the Australian tablespoon (20 mL) is the larger one, so using a US tablespoon (15 mL) under-measures relative to what an Australian recipe intends." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting cups to tablespoons within the US system (baseline case)</h3>
      <div className="prose-p">
      A recipe calls for 3/4 cup of butter. Since 1 cup = 16 tablespoons, 3/4 × 16 = 12 tablespoons. This is a pure whole-number multiplication because both units are part of the same US measuring-spoon family.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Converting an Australian tablespoon amount into US teaspoons (edge case / variation)</h3>
      <div className="prose-p">
      An Australian recipe calls for 3 tablespoons of honey. Converting to milliliters first (since that&apos;s the only unambiguous common ground): 3 × 20 mL = 60 mL. Converting 60 mL into US teaspoons: 60 ÷ 4.92892 ≈ 12.17 US teaspoons — noticeably more than the 9 US teaspoons you&apos;d get by wrongly treating those as 3 US tablespoons (3 × 3 = 9 teaspoons). Going through milliliters as a common intermediate unit is what catches this kind of cross-country mismatch.
      </div>

      <QuickCheck
      question="Why is converting through milliliters safer than converting directly between an Australian tablespoon amount and US teaspoons?"
      options={[
      { text: "Milliliters are easier to say out loud", correct: false, explanation: "The reason isn't about convenience of speech — it's that milliliters are an unambiguous, internationally fixed unit, unlike 'tablespoon,' which varies by country." },
      { text: "Because milliliters are a fixed, internationally unambiguous unit, so routing through them avoids silently applying the wrong country's tablespoon-to-teaspoon ratio", correct: true, explanation: "Correct. 'Tablespoon' hides a country-dependent assumption; milliliters don't, so using mL as the common intermediate step exposes and avoids that hidden assumption." },
      { text: "It isn't actually safer — direct conversion and going through milliliters always give the same answer", correct: false, explanation: "They only give the same answer if you happen to apply the correct country-specific tablespoon size in the direct method — which is exactly the step people get wrong." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Scaling a US recipe that also lists a metric cup conversion (real-world / applied case)</h3>
      <div className="prose-p">
      A US recipe lists &quot;2 cups flour (473 mL)&quot; as a courtesy metric conversion. A cook using a 250 mL metric measuring cup (common outside the US) needs 473 ÷ 250 ≈ 1.89 metric cups, not a clean &quot;2 cups&quot; on their own cup — because the US cup (236.588 mL) and the metric/Commonwealth cup (250 mL) are two different sizes. Using 2 of their own metric cups would add about 27 mL too much flour-equivalent liquid, a small but real overshoot in a precise baking recipe.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Nesting scale: US teaspoon to tablespoon to cup, with the Australian tablespoon exception"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-cups-tablespoons-and-teaspoons-explained-nesting-scale.svg"
      altText="A horizontal nesting scale showing 1 US teaspoon as a small box, 1 US tablespoon (3 teaspoons, 14.79 mL) as a medium box, 1 Australian tablespoon (4 teaspoons, 20 mL) as a slightly larger box, and 1 US cup (16 tablespoons, 236.6 mL) as a large box, illustrating that a US teaspoon times 48 equals a US cup while the Australian tablespoon breaks that clean ratio."
      />
      <p>
      The dashed box in the diagram is deliberately drawn slightly larger and off to the side — it&apos;s the one unit in the chain that doesn&apos;t fit the otherwise clean ×3, ×16 nesting pattern.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating every country's tablespoon as the same 15 mL size.", fix: "Check the recipe's country of origin — Australian recipes use a 20 mL tablespoon, about a third larger than the US/UK version." },
      { mistake: "Assuming a US cup and a metric/Commonwealth cup are interchangeable.", fix: "Remember the US cup is 236.588 mL while the common metric cup is 250 mL — about a 5.6% difference that adds up when scaling a recipe." },
      { mistake: "Skipping the milliliter conversion step when comparing measures across countries.", fix: "Convert both measures to milliliters first, then compare — it's the one unit that means the same thing everywhere." },
      ]}
      />
      <MisconceptionCallout
      myth="A tablespoon is a tablespoon — cooking measurement words describe fixed, universal amounts."
      reality={<p>Cooking-spoon units are standardized only within a country&apos;s own system, not internationally. The US and UK tablespoon (about 15 mL) and the Australian tablespoon (20 mL) are both real, standard, everyday units — just different sizes wearing the same name. The same is true for the &quot;cup&quot;: 236.588 mL in the US versus 250 mL in most of the rest of the metric-using world.</p>}
      />

      <QuickCheck
      question="A US recipe and its metric conversion both say '2 cups (473 mL) flour.' A cook uses a 250 mL metric measuring cup and pours exactly 2 of them. What happens?"
      options={[
      { text: "They measure exactly the right amount, since 2 cups is 2 cups", correct: false, explanation: "The word 'cup' hides a size difference here — a US cup (236.588 mL) and a metric cup (250 mL) aren't the same volume, so '2 cups' means two different totals depending on which cup you use." },
      { text: "They overshoot slightly — 2 × 250 mL = 500 mL, about 27 mL more than the intended 473 mL", correct: true, explanation: "Correct. Following the mL figure (473 mL), not the '2 cups' label, is the reliable way to hit the recipe's intended amount when switching measuring tools." },
      { text: "They undershoot slightly, since metric cups are smaller than US cups", correct: false, explanation: "It's the reverse — the metric cup (250 mL) is larger than the US cup (236.588 mL), so using 2 metric cups gives more volume than 2 US cups, not less." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert a value using a fixed conversion factor (e.g. tablespoons to milliliters)"
      fields={[
      { key: "value", label: "Value to convert", defaultValue: 3 },
      { key: "conversionFactor", label: "Conversion factor (14.7868 for US tbsp -> mL, 20 for AU tbsp -> mL)", defaultValue: 14.7868, step: 0.0001 },
      ]}
      resultLabel="Converted value (mL)"
      formula="unitConversionByFactor"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Memorize the US chain: 1 cup = 16 tablespoons = 48 teaspoons.",
      "Check a recipe's country of origin before trusting 'tablespoon' — Australian recipes mean 20 mL, not 15 mL.",
      "When scaling or converting across countries, go through milliliters as the unambiguous common unit.",
      "Remember the US cup (236.588 mL) and the common metric cup (250 mL) aren't the same size either.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How many tablespoons are in a cup?", answer: "16 US tablespoons make 1 US cup." },
      { question: "How many teaspoons are in a tablespoon?", answer: "3 teaspoons make 1 US or UK tablespoon — but 4 teaspoons make 1 Australian tablespoon, since Australia defines its tablespoon as 20 mL instead of 15 mL." },
      { question: "Is an Australian tablespoon the same as a US tablespoon?", answer: "No. The Australian tablespoon is 20 mL (4 teaspoons), about a third larger than the US/UK tablespoon of roughly 15 mL (3 teaspoons)." },
      { question: "Is a US cup the same as a metric cup?", answer: "No. A US cup is 236.588 mL, while the common metric/Commonwealth cup is 250 mL — about 5.6% larger." },
      { question: "What's the safest way to convert cooking measurements between countries?", answer: "Convert everything to milliliters first, since it's the one unit with a fixed, unambiguous meaning everywhere, then convert from milliliters into your target unit." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
