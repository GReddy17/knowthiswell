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
  EntryCalculator,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Understanding Warranties and Guarantees",
  category: "legal-documentation-howtos",
  order: 21,
  subtopic: "contracts-and-agreements",
  tags: ["warranty", "guarantee", "implied warranty", "express warranty", "consumer protection"],
  date: "2026-08-26",
  updated: "2026-08-26",
  lastReviewed: "2026-08-26",
  excerpt: "A warranty is a promise about a product's quality or performance — but not every warranty is written down, and not every 'lifetime guarantee' means what it sounds like it means.",
  summary: "A warranty is a legally enforceable promise about a product's condition or performance, and it can be express (explicitly stated, written or verbal) or implied (arising automatically by law, like a basic expectation that a product will work for its ordinary purpose) — understanding which type applies, and what specific terms and time limits govern it, matters more than the presence of the word 'warranty' or 'guarantee' itself.",
  sources: [
    { label: "Federal Trade Commission — Warranty Rules and Consumer Rights", url: "https://www.ftc.gov/business-guidance" },
    { label: "Cornell Legal Information Institute — Warranty", url: "https://www.law.cornell.edu/wex/warranty" },
    { label: "Consumer.gov — Understanding Warranties", url: "https://consumer.gov/" },
  ],
  seeAlso: [
    "legal-documentation-howtos/what-makes-a-contract-legally-binding",
    "legal-documentation-howtos/understanding-refund-and-return-policies",
    "legal-documentation-howtos/reading-terms-and-conditions-what-to-actually-look-for",
  ],
  glossary: [
    {"term":"Express warranty","definition":"A warranty explicitly stated by the seller, either in writing or verbally, promising specific facts or performance about a product."},
    {"term":"Implied warranty","definition":"A warranty that arises automatically by law rather than by explicit statement — for example, an implied warranty of merchantability, meaning a product will work for its ordinary intended purpose."},
    {"term":"Warranty period","definition":"The specific length of time during which a warranty's protections apply, after which the manufacturer or seller generally has no further obligation under that warranty."},
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
      "A warranty can be express (explicitly stated, written or verbal) or implied (arising automatically by law, like a basic expectation a product works for its ordinary purpose).",
      "The word 'guarantee' has no single fixed legal meaning — its actual protections depend entirely on the specific terms stated, not on the word itself.",
      "A warranty period has a defined end date, after which the specific protections it offered generally no longer apply, regardless of how the product performs afterward.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/legal-documentation-howtos/understanding-warranties-and-guarantees">warranty</TermLink> is a promise that a product will work as expected, and if it doesn&apos;t, the seller or manufacturer will fix it, replace it, or refund it under specific conditions. Not every warranty needs to be a formal written document — some protections exist automatically by law even if nothing was ever put in writing — but every warranty has limits: a time period, specific conditions, and things it doesn&apos;t cover, so it&apos;s worth checking those specifics rather than assuming &quot;warranty&quot; means unconditional coverage forever.</div>}
      detailed={<div className="prose-p">Warranties fall into two broad categories: an <TermLink href="/legal-documentation-howtos/understanding-warranties-and-guarantees">express warranty</TermLink>, which is explicitly stated by the seller (a written card promising &quot;parts and labor for one year,&quot; or even a verbal claim made during a sales pitch), and an <TermLink href="/legal-documentation-howtos/understanding-warranties-and-guarantees">implied warranty</TermLink>, which arises automatically under law regardless of whether the seller says anything at all — the most common being the implied warranty of merchantability, a basic legal expectation that a product will work for its ordinary intended purpose. A seller can sometimes disclaim implied warranties with specific &quot;as-is&quot; language, though certain jurisdictions restrict or prohibit this for consumer goods. The word &quot;guarantee&quot; isn&apos;t a distinct legal category with fixed meaning — its actual protections come entirely from whatever specific terms accompany it, so a &quot;lifetime guarantee&quot; and a &quot;satisfaction guarantee&quot; can mean very different things depending on their stated conditions.</div>}
      />
      <FootnoteAside>Some jurisdictions restrict a seller&apos;s ability to disclaim implied warranties on consumer goods through &quot;as-is&quot; sales, meaning certain baseline protections may apply even when a seller attempts to waive them — this varies enough that checking local consumer protection rules is worthwhile for a significant purchase.</FootnoteAside>

      <p>
      Because &quot;warranty&quot; and &quot;guarantee&quot; describe a spectrum of possible promises rather than one fixed legal package, reading the specific terms is the only reliable way to know what&apos;s actually covered.
      </p>

      <QuickCheck
      question="A product is sold with no written warranty card at all, but it breaks the first time it's used for its intended, ordinary purpose. Does the buyer necessarily have zero legal recourse?"
      options={[
      { text: "Not necessarily — an implied warranty of merchantability may apply automatically by law even without any written or verbal express warranty", correct: true, explanation: "Correct. Implied warranties can arise automatically under law, providing a baseline expectation that a product works for its ordinary purpose, independent of whether an express warranty was ever stated." },
      { text: "Yes, since without a written warranty card, there is no possible legal protection of any kind", correct: false, explanation: "This overlooks implied warranties, which can apply automatically by law regardless of whether a written express warranty exists." },
      { text: "Yes, but only if the product cost more than a specific dollar threshold set by federal law", correct: false, explanation: "There's no single universal dollar threshold determining whether implied warranty protections apply — they generally arise from the nature of the sale, not the price." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A standard one-year express warranty (baseline case)</h3>
      <div className="prose-p">
      A laptop is sold with a written one-year warranty covering manufacturing defects. If it fails from a covered defect 8 months after purchase, the manufacturer is generally obligated to repair or replace it under the stated terms — but a failure occurring 14 months in would fall outside the warranty period entirely.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: An &apos;as-is&apos; sale attempting to waive implied warranties (edge case / variation)</h3>
      <div className="prose-p">
      A used car is sold &quot;as-is, no warranty expressed or implied.&quot; In jurisdictions that permit this disclaimer for private used-car sales, the buyer generally has little recourse if the car breaks down shortly after purchase — illustrating why the specific sale terms, not general assumptions about consumer protection, determine the actual outcome.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A &apos;lifetime guarantee&apos; with specific conditions (real-world / applied case)</h3>
      <div className="prose-p">
      A tool is sold with a &quot;lifetime guarantee,&quot; but the fine print specifies it covers only manufacturing defects, not damage from misuse, and requires the original receipt for any claim. A buyer who loses the receipt or damages the tool through misuse may find the &quot;lifetime&quot; guarantee doesn&apos;t cover their specific situation — the word &quot;lifetime&quot; describes duration, not the scope of what&apos;s covered.
      </div>

      <QuickCheck
      question="Why might a 'lifetime guarantee' not cover a specific product failure even though the product is clearly still within its 'lifetime'?"
      options={[
      { text: "Because a guarantee's actual coverage depends on its specific stated conditions and exclusions, not just its stated duration", correct: true, explanation: "Correct. 'Lifetime' describes how long the guarantee lasts, not necessarily what it covers — exclusions like misuse or lost proof of purchase can still apply regardless of duration." },
      { text: "Because 'lifetime guarantee' is a legally meaningless phrase with no enforceability at all", correct: false, explanation: "A lifetime guarantee can be enforceable — the issue in this scenario is that its coverage has specific stated limits, not that it lacks legal meaning entirely." },
      { text: "Because lifetime guarantees only apply to the original purchaser's biological lifetime, never to the product's functional lifetime", correct: false, explanation: "This isn't a fixed universal rule — what 'lifetime' refers to (the product's, the purchaser's, or something else) depends on the specific guarantee's stated terms." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Warranty days remaining estimator"
      description="Estimate how many days remain on a warranty based on its stated length and how many days have passed since purchase."
      fields={[
      { key: "warrantyLengthDays", label: "Warranty length (days)", defaultValue: 365, min: 0, step: 1 },
      { key: "daysSincePurchase", label: "Days since purchase", defaultValue: 200, min: 0, step: 1 },
      ]}
      formula="warrantyDaysRemaining"
      formatResult="number"
      resultLabel="Estimated days remaining on warranty"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Express warranty vs. implied warranty"
      type="comparison"
      svgSrc="/diagrams/legal-documentation-howtos-understanding-warranties-and-guarantees-express-vs-implied.svg"
      altText="A comparison diagram showing an express warranty (explicitly stated by the seller) versus an implied warranty (arising automatically by law regardless of what the seller says)."
      />
      <p>
      A product can be covered by both types simultaneously, and each carries its own separate set of terms and limitations.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a product with no written warranty card has zero legal protection.", fix: "Check whether an implied warranty of merchantability might apply automatically under local law, especially for goods sold by a retailer rather than a private individual." },
      { mistake: "Assuming a 'lifetime guarantee' means unconditional coverage forever, regardless of cause.", fix: "Read the specific exclusions — misuse, lost proof of purchase, and normal wear and tear are common carve-outs even under lifetime guarantees." },
      { mistake: "Discarding a receipt or warranty card shortly after purchase.", fix: "Keep proof of purchase and any warranty documentation for the full stated warranty period, since many claims require it." },
      ]}
      />
      <MisconceptionCallout
      myth="The word 'guarantee' on a product always carries the same fixed legal meaning as a warranty."
      reality={<p>&quot;Guarantee&quot; has no single, fixed legal definition the way certain other contract terms do — its actual protections come entirely from whatever specific conditions and exclusions accompany it. A &quot;satisfaction guarantee&quot; and a &quot;lifetime guarantee&quot; can carry very different practical protections, so the specific stated terms matter far more than the word itself.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Read the full warranty terms before purchase, focusing on what's excluded, not just what's covered.",
      "Keep receipts and warranty documentation for the entire stated warranty period.",
      "Before buying an 'as-is' item, check whether that disclaimer is enforceable in your jurisdiction for the type of sale involved.",
      "For a significant purchase with an unclear or disputed warranty claim, consult your local consumer protection office or a licensed attorney.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the difference between an express warranty and an implied warranty?", answer: "An express warranty is explicitly stated by the seller, written or verbal, while an implied warranty arises automatically by law regardless of what the seller says — for example, a basic expectation that a product works for its ordinary purpose." },
      { question: "Does 'lifetime guarantee' mean a product is covered forever no matter what?", answer: "Not necessarily. 'Lifetime' typically describes the guarantee's duration, but the guarantee's specific terms — what's covered and what's excluded, like misuse or lost proof of purchase — still apply throughout that duration." },
      { question: "Can a seller disclaim all warranties by selling something 'as-is'?", answer: "Sometimes, but not always — some jurisdictions restrict or prohibit disclaiming implied warranties for consumer goods, so the enforceability of an 'as-is' disclaimer depends on local law and the type of sale." },
      { question: "Do I need a receipt to make a warranty claim?", answer: "Often yes. Many warranty claims require proof of purchase, such as a receipt or order confirmation, to verify the purchase date and confirm the item is still within its warranty period." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
