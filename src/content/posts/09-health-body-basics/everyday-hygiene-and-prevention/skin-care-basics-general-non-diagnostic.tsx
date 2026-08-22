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
  title: "Skin Care Basics (General, Non-Diagnostic)",
  category: "health-body-basics",
  order: 4,
  subtopic: "everyday-hygiene-and-prevention",
  tags: ["skin barrier", "moisturizer", "sunscreen", "skin care basics", "dermatology literacy"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Skin's outer layer is a physical barrier that keeps water in and irritants out — most everyday skin care is really about supporting that barrier, not treating a condition.",
  summary: "Healthy skin depends on an intact outer barrier (the stratum corneum) that retains moisture and blocks irritants; everyday skin care — gentle cleansing, moisturizing, and sun protection — works mainly by supporting that barrier function, and this entry covers that general literacy rather than diagnosing or treating any specific skin condition.",
  sources: [
    { label: "American Academy of Dermatology — Skin Care Basics", url: "https://www.aad.org/public/everyday-care" },
    { label: "NIH/NIAMS — Healthy Skin Matters", url: "https://www.niams.nih.gov/" },
    { label: "CDC — Sun Safety", url: "https://www.cdc.gov/skin-cancer/sun-safety/index.html" },
  ],
  seeAlso: [
    "health-body-basics/personal-hygiene-and-infection-prevention",
    "health-body-basics/understanding-daily-hydration-needs",
  ],
  glossary: [
    {"term":"Stratum corneum","definition":"The outermost layer of the skin, made of dead, flattened cells and lipids, that forms the primary physical barrier retaining moisture and blocking outside irritants and pathogens."},
    {"term":"Transepidermal water loss (TEWL)","definition":"The rate at which water evaporates through the skin to the outside air — a higher rate generally indicates a more compromised skin barrier."},
    {"term":"SPF (Sun Protection Factor)","definition":"A measure of how much longer skin can be exposed to UVB radiation before burning when a sunscreen is applied correctly, compared to unprotected skin."},
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
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
      <strong>This entry is general skin-care information, not medical advice or a diagnostic tool.</strong> It doesn&apos;t cover or evaluate any specific skin condition. For a rash, persistent irritation, or any concerning skin change, consult a doctor or dermatologist.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "The skin's outermost layer, the stratum corneum, is a physical barrier that retains internal moisture and blocks outside irritants — most everyday skin care works by supporting, not replacing, that barrier.",
      "Moisturizers work mainly by slowing transepidermal water loss, not by 'adding' large amounts of new water to skin from the outside.",
      "Daily broad-spectrum sunscreen use is one of the most well-evidenced everyday skin-care habits for reducing long-term UV-related skin damage, per dermatology and public health guidance.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Skin&apos;s outer layer, the <TermLink href="/health-body-basics/skin-care-basics-general-non-diagnostic">stratum corneum</TermLink>, works like a brick wall — dead, flattened cells (the bricks) held together by lipids (the mortar). Gentle cleansing removes dirt without stripping that lipid mortar, moisturizer helps trap water in, and sunscreen blocks UV radiation from damaging skin cells. Most everyday skin care is about supporting this barrier, not fixing a specific problem.</div>}
      detailed={<div className="prose-p">The stratum corneum&apos;s barrier function is measurable through <TermLink href="/health-body-basics/skin-care-basics-general-non-diagnostic">transepidermal water loss (TEWL)</TermLink> — how quickly water evaporates from skin to the air. Harsh cleansers or over-washing can strip the lipid layer, raising TEWL and leading to dryness or irritation; moisturizers work primarily through occlusive ingredients (which physically slow evaporation) and humectant ingredients (which draw and hold water in the skin&apos;s surface layer), not by delivering large volumes of new hydration from outside. Sun protection works differently: <TermLink href="/health-body-basics/skin-care-basics-general-non-diagnostic">SPF</TermLink> measures how much longer correctly applied sunscreen delays UVB-related burning compared to bare skin, and broad-spectrum products also block UVA radiation, which contributes to long-term skin aging and damage independent of visible burning.</div>}
      />
      <FootnoteAside>The American Academy of Dermatology and CDC both note that most sunscreen under-protects in practice not because the product is ineffective, but because people apply far less than the tested application amount and reapply far less often than recommended — a real-world gap between lab SPF ratings and everyday effectiveness.</FootnoteAside>

      <p>
      Understanding the barrier model — protect it, don&apos;t strip it — explains why gentler routines often outperform aggressive ones for everyday, non-medical skin maintenance.
      </p>

      <QuickCheck
      question="Someone believes their moisturizer works by 'adding water' directly into their skin from the jar. What's a more accurate description of how it works?"
      options={[
      { text: "That description is accurate — moisturizer primarily adds new water into the skin from the product itself", correct: false, explanation: "Moisturizers work mainly by slowing water loss (occlusive ingredients) and drawing in/holding existing moisture (humectant ingredients), not by delivering large new volumes of water from the jar into the skin." },
      { text: "Moisturizer mainly works by slowing transepidermal water loss (occlusive ingredients) and helping the skin's surface retain moisture it already has (humectant ingredients), rather than adding large amounts of new water", correct: true, explanation: "Correct. This is why moisturizer effectiveness depends heavily on trapping existing moisture rather than simply how 'hydrating' a product claims to be." },
      { text: "Moisturizer works purely as a cosmetic effect with no actual physiological function", correct: false, explanation: "Moisturizer does have a measurable physiological effect — reducing transepidermal water loss and supporting barrier function — it's not purely cosmetic." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A basic daily routine supporting barrier function (baseline case)</h3>
      <div className="prose-p">
      A gentle, non-stripping cleanser removes surface dirt and oil without disrupting the lipid layer; a moisturizer applied to slightly damp skin helps trap that surface moisture; and broad-spectrum sunscreen applied in the morning protects against cumulative UV damage. Each step targets a distinct part of general barrier support, rather than treating any specific issue.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Over-washing and barrier disruption (edge case / variation)</h3>
      <div className="prose-p">
      Washing with a harsh, high-pH cleanser multiple times a day can strip the stratum corneum&apos;s lipid layer faster than it regenerates, raising transepidermal water loss and leading to dryness, tightness, or irritation — a case where more frequent &quot;cleaning&quot; measurably works against, not for, general skin-barrier health.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Sunscreen under-application in practice (real-world / applied case)</h3>
      <div className="prose-p">
      SPF ratings are tested using roughly 2 milligrams of sunscreen per square centimeter of skin, a noticeably thicker layer than most people apply in daily use. Someone applying half that tested amount doesn&apos;t get half the stated SPF — the real-world protection can drop considerably more than a simple linear reduction, which is a well-documented gap between laboratory SPF numbers and typical everyday application.
      </div>

      <QuickCheck
      question="Why might someone using SPF 50 sunscreen daily still get more UV exposure than they expect?"
      options={[
      { text: "SPF ratings are inaccurate marketing numbers with no real testing standard", correct: false, explanation: "SPF ratings come from a standardized testing protocol — the issue described here isn't the rating's validity, it's that real-world application amounts are usually thinner than the tested amount." },
      { text: "Most people apply noticeably less sunscreen than the amount used in SPF testing, and protection drops more than proportionally with thinner application, so real-world protection often falls well short of the labeled SPF", correct: true, explanation: "Correct. This application gap is a well-documented, real practical issue distinct from the sunscreen formula's inherent effectiveness." },
      { text: "SPF only protects against UVA rays, not UVB, so burning still occurs regardless of application amount", correct: false, explanation: "SPF specifically measures UVB protection (the burning-associated wavelength); broad-spectrum labeling separately indicates UVA coverage. The issue in this example is under-application, not what UV type SPF covers." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The stratum corneum's brick-and-mortar barrier structure"
      type="detail"
      svgSrc="/diagrams/health-body-basics-skin-care-basics-general-non-diagnostic-brick-mortar-barrier.svg"
      altText="A cross-section diagram showing the stratum corneum as rows of flattened brick-shaped cells held together by a lipid mortar layer between them, with an arrow showing water evaporating upward through the barrier labeled transepidermal water loss, and a moisturizer layer shown sitting on top helping slow that evaporation."
      />
      <p>
      The brick-and-mortar structure is why gentle care that preserves the lipid mortar tends to outperform aggressive cleansing that strips it away.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Over-washing with harsh, high-pH cleansers multiple times a day.", fix: "Use a gentle cleanser and limit washing to what's actually needed — over-cleansing strips the lipid barrier faster than it can regenerate." },
      { mistake: "Applying sunscreen far thinner than the tested amount and skipping reapplication.", fix: "Apply a generous, even layer and reapply roughly every two hours during extended sun exposure, per dermatology guidance." },
      { mistake: "Assuming any persistent skin irritation is just a general-care issue rather than something worth a professional look.", fix: "See a doctor or dermatologist for any persistent, worsening, or unexplained skin change — general care habits aren't a substitute for diagnosis." },
      ]}
      />
      <MisconceptionCallout
      myth="More frequent washing and stronger products always mean cleaner, healthier skin."
      reality={<p>The skin barrier depends on an intact lipid layer, which harsh or frequent washing can strip away faster than it regenerates. Overly aggressive routines often increase transepidermal water loss and irritation rather than improving skin health. Dermatology guidance generally favors gentle, consistent routines — cleanse only as needed, moisturize to support the barrier, and protect from UV exposure — over aggressive, frequent intervention.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Use a gentle, non-stripping cleanser rather than washing aggressively or frequently.",
      "Apply moisturizer to slightly damp skin to help trap existing surface moisture.",
      "Apply a generous layer of broad-spectrum sunscreen daily and reapply during extended outdoor exposure.",
      "See a doctor or dermatologist for any persistent, worsening, or unexplained skin change rather than relying on general care alone.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How does moisturizer actually work?", answer: "Mainly by slowing transepidermal water loss (occlusive ingredients) and helping the skin's surface retain existing moisture (humectant ingredients), rather than adding large new volumes of water from the product itself." },
      { question: "What does SPF actually measure?", answer: "How much longer correctly applied sunscreen delays UVB-related burning compared to unprotected skin — broad-spectrum products separately indicate UVA protection, which relates to long-term skin damage rather than immediate burning." },
      { question: "Is washing your face more often always better for your skin?", answer: "Not necessarily. Over-washing, especially with harsh cleansers, can strip the skin's protective lipid layer faster than it regenerates, increasing water loss and irritation." },
      { question: "Why doesn't real-world sunscreen protection always match the SPF number on the label?", answer: "SPF testing uses a specific, fairly thick application amount that most people don't match in daily use — thinner application and infrequent reapplication both reduce real-world protection below the labeled SPF." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
