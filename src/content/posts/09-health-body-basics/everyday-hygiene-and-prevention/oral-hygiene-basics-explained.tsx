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
  title: "Oral Hygiene Basics Explained",
  category: "health-body-basics",
  order: 2,
  subtopic: "everyday-hygiene-and-prevention",
  tags: ["oral hygiene", "dental care", "plaque", "brushing technique", "flossing"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Brushing and flossing aren't redundant — a toothbrush cleans tooth surfaces, but only floss reaches the tight space between teeth where plaque builds up untouched.",
  summary: "Oral hygiene works by mechanically disrupting plaque — a sticky biofilm of bacteria that forms continuously on teeth — before it hardens into tartar or produces the acid that causes cavities and gum disease; brushing and flossing are complementary because a brush reaches tooth surfaces while only floss reaches between teeth.",
  sources: [
    { label: "CDC — Oral Health Basics", url: "https://www.cdc.gov/oral-health/about/index.html" },
    { label: "NIH/NIDCR — National Institute of Dental and Craniofacial Research", url: "https://www.nidcr.nih.gov/" },
    { label: "American Dental Association — Brushing Your Teeth", url: "https://www.ada.org/resources/research/science-and-research-institute/oral-health-topics/brushing-your-teeth" },
  ],
  seeAlso: [
    "health-body-basics/handwashing-why-it-actually-works",
    "health-body-basics/personal-hygiene-and-infection-prevention",
  ],
  glossary: [
    {"term":"Plaque","definition":"A sticky, continuously-forming biofilm of bacteria on tooth surfaces that produces acid from sugars and starches, the primary driver of cavities and gum disease if not regularly disrupted."},
    {"term":"Tartar (dental calculus)","definition":"Plaque that has hardened onto teeth through mineralization, which can no longer be removed by brushing or flossing and requires professional dental cleaning."},
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
      <strong>This entry is general health information, not medical or dental advice.</strong> For tooth pain, bleeding gums, or any specific dental concern, see a dentist or dental hygienist.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "Plaque forms continuously on teeth — it's a living biofilm of bacteria, not just leftover food, and it needs to be mechanically disrupted regularly before it mineralizes into tartar.",
      "Brushing and flossing are complementary, not redundant — a toothbrush cleans the flat and outer/inner tooth surfaces, but only floss reaches the tight contact points between teeth where a brush's bristles can't fit.",
      "The American Dental Association recommends brushing twice daily for two minutes with fluoride toothpaste and flossing once daily — the two-minute duration matters because it's roughly the time needed to cover all tooth surfaces at a proper angle.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Bacteria in your mouth constantly form a sticky film called <TermLink href="/health-body-basics/oral-hygiene-basics-explained">plaque</TermLink> on your teeth, feeding on sugars and starches from food and producing acid as a byproduct. That acid is what wears down tooth enamel and causes cavities. Brushing physically scrubs plaque off the flat surfaces of your teeth, while flossing reaches the narrow gaps between teeth that a brush&apos;s bristles simply can&apos;t fit into — which is why dentists recommend both, not either one alone.</div>}
      detailed={<div className="prose-p">If plaque isn&apos;t disrupted, it can mineralize using minerals in saliva into <TermLink href="/health-body-basics/oral-hygiene-basics-explained">tartar</TermLink> (dental calculus) within about 24-72 hours — a hardened deposit that brushing and flossing can no longer remove, requiring professional scaling by a dentist or hygienist. This is why consistency matters more than intensity: a thorough clean every few days leaves gaps where plaque has time to harden, while brushing and flossing daily interrupts the process before it reaches that point. Fluoride toothpaste adds a second mechanism on top of mechanical removal — fluoride ions integrate into tooth enamel and make it more resistant to the acid plaque bacteria produce, which is why the ADA specifically recommends fluoride toothpaste rather than mechanical brushing alone.</div>}
      />
      <FootnoteAside>The angled &quot;45 degrees toward the gumline&quot; brushing technique recommended by dental associations targets the specific spot — the gum margin — where plaque builds up fastest and is most linked to gum disease, rather than treating all tooth surfaces as equally at risk.</FootnoteAside>

      <p>
      The core idea is timing: plaque is soft and easily removed for roughly the first day, then progressively harder to remove as it mineralizes — so the value of daily brushing and flossing is about staying ahead of that clock, not just general cleanliness.
      </p>

      <QuickCheck
      question="Someone brushes thoroughly twice a day but never flosses. What's the main gap in their oral hygiene routine?"
      options={[
      { text: "There is no gap — brushing alone removes essentially all plaque", correct: false, explanation: "A toothbrush's bristles can't fit into the tight contact points between teeth, so plaque in those specific spots isn't reached by brushing alone, regardless of how thorough the brushing is." },
      { text: "The contact points between teeth, which a toothbrush's bristles can't physically reach, are left with undisturbed plaque that only floss (or similar interdental tools) can remove", correct: true, explanation: "Correct. This is exactly why dental associations recommend both brushing and flossing — they clean different, non-overlapping surfaces." },
      { text: "Brushing twice daily is actually too frequent and can be reduced to once a day instead", correct: false, explanation: "Twice-daily brushing is the standard recommendation and isn't the issue here — the gap is specifically about surfaces brushing physically cannot reach, not brushing frequency." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A standard daily routine (baseline case)</h3>
      <div className="prose-p">
      Brushing for two minutes, twice a day, at a 45-degree angle toward the gumline, followed by flossing once a day, mechanically disrupts plaque across essentially all tooth surfaces before it has time to mineralize into tartar — the routine recommended by the ADA and echoed by CDC oral health guidance.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Brushing without flossing over several weeks (edge case / variation)</h3>
      <div className="prose-p">
      Even with perfect twice-daily brushing, the contact points between teeth accumulate undisturbed plaque week after week. Over time, this localized, untouched plaque is disproportionately linked to cavities between teeth and to gum inflammation right at those contact points — a pattern dentists specifically look for as a sign of a flossing gap, distinct from the more evenly distributed wear seen with inconsistent brushing.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Skipping oral hygiene during an illness or travel (real-world / applied case)</h3>
      <div className="prose-p">
      A few days of skipped or rushed brushing (common during illness, travel, or a disrupted routine) gives plaque enough of a head start to begin mineralizing in spots, particularly along the gumline. This is exactly why dentists note that a short lapse is recoverable with a return to a normal routine, but a habitually short or skipped routine compounds into visible tartar buildup that requires a professional cleaning to remove, since tartar itself can no longer be brushed away.
      </div>

      <QuickCheck
      question="Why does a dentist emphasize consistency (daily habit) over occasional thorough cleaning for oral hygiene?"
      options={[
      { text: "Because plaque mineralizes into tartar within roughly 24-72 hours if undisturbed, so a routine with multi-day gaps allows plaque to repeatedly cross into a form that brushing and flossing can no longer remove", correct: true, explanation: "Correct. This is the core reason daily habit matters more than occasional intensity — it's about staying ahead of a specific biological timeline, not just general cleanliness." },
      { text: "Because occasional thorough cleaning removes tartar just as well as daily brushing removes plaque", correct: false, explanation: "Tartar cannot be removed by brushing or flossing at all, regardless of thoroughness — only professional dental scaling removes it, which is precisely why preventing its formation through daily habit matters." },
      { text: "There's no real difference — both approaches remove the same amount of plaque over a month", correct: false, explanation: "The timing matters specifically because plaque that mineralizes into tartar becomes permanently un-removable by home care, so gaps between cleanings allow a portion of plaque to 'lock in' rather than simply accumulating linearly." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Brushing angle and the brushing + flossing division of labor"
      type="detail"
      svgSrc="/diagrams/health-body-basics-oral-hygiene-basics-explained-brushing-angle.svg"
      altText="Cross-section of a tooth and gumline showing a toothbrush angled at 45 degrees toward the gum margin, with plaque highlighted along the gumline being brushed away, next to a smaller diagram comparing brushing twice daily for two minutes against flossing once daily to reach between teeth."
      />
      <p>
      The 45-degree angle isn&apos;t arbitrary — it&apos;s the angle that lets bristles slip slightly under the gumline, the specific spot where plaque accumulation is most strongly linked to gum disease, rather than just brushing the flat, easy-to-reach tooth surfaces.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Brushing without flossing, assuming brushing alone covers all tooth surfaces.", fix: "Floss once daily — it's the only routine tool that reaches the tight contact points between teeth." },
      { mistake: "Brushing too briefly to cover all surfaces at the recommended angle.", fix: "Brush for the full two minutes, angling bristles toward the gumline, not just scrubbing the flat chewing surfaces." },
      { mistake: "Assuming a missed day or two of brushing has no lasting effect.", fix: "Return to routine as soon as possible — plaque left undisturbed for 24-72 hours can begin mineralizing into tartar, which home brushing can no longer remove." },
      ]}
      />
      <MisconceptionCallout
      myth="Flossing is optional if you already brush thoroughly twice a day."
      reality={<p>Brushing and flossing clean different, non-overlapping tooth surfaces. A toothbrush&apos;s bristles physically cannot fit into the tight contact points between teeth — no amount of brushing thoroughness changes that geometric limitation. Only floss (or similar interdental tools) reaches those spots, which is why dental associations recommend both as complementary, not redundant, habits.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Brush twice daily for two minutes with fluoride toothpaste, angling bristles toward the gumline.",
      "Floss once daily to clean the contact points between teeth that a toothbrush can't reach.",
      "Don't let a missed day become a habit — plaque begins mineralizing into un-brushable tartar within 24-72 hours.",
      "See a dentist for regular checkups and professional cleaning, which is the only way to remove tartar once it's formed.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Is flossing actually necessary if I brush well?", answer: "Yes — a toothbrush's bristles can't physically reach the tight contact points between teeth, so flossing (or a similar interdental tool) is needed to clean those specific surfaces, per ADA guidance." },
      { question: "How long does it take for plaque to turn into tartar?", answer: "Roughly 24 to 72 hours if left undisturbed, according to dental health sources — which is why daily brushing and flossing matters more than occasional thorough cleaning." },
      { question: "Why do dentists recommend brushing at a 45-degree angle?", answer: "That angle lets bristles reach slightly under the gumline, the specific area where plaque buildup is most closely linked to gum disease, rather than only cleaning the flat tooth surfaces." },
      { question: "Can tartar be removed at home once it's formed?", answer: "No — tartar (mineralized plaque) is hardened onto the tooth and can only be removed by professional dental scaling, not by brushing or flossing." },
      { question: "Does fluoride toothpaste do anything beyond helping remove plaque?", answer: "Yes — fluoride ions integrate into tooth enamel and make it more resistant to the acid plaque bacteria produce, working alongside (not instead of) the mechanical removal from brushing." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
