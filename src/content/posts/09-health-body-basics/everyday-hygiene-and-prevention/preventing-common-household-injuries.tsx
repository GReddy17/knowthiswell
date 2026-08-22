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
  title: "Preventing Common Household Injuries",
  category: "health-body-basics",
  order: 8,
  subtopic: "everyday-hygiene-and-prevention",
  tags: ["fall prevention", "home safety", "household injuries", "injury prevention", "safety hazards"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Falls, not fires or poisoning, are the leading cause of home injury across most age groups — which changes where basic home-safety attention is best spent.",
  summary: "Falls are the most common cause of home injury across most age groups, followed by cuts, burns, and poisoning, and most household injury-prevention guidance targets the small set of recurring hazard mechanisms — unsecured rugs and clutter, poor lighting, unlabeled chemicals, unattended stovetops — behind the large majority of these incidents.",
  sources: [
    { label: "CDC — Home and Recreational Safety", url: "https://www.cdc.gov/injury/index.html" },
    { label: "National Safety Council — Home and Community Safety", url: "https://www.nsc.org/home-safety" },
    { label: "CPSC — Consumer Product Safety Commission", url: "https://www.cpsc.gov/" },
  ],
  seeAlso: [
    "health-body-basics/basic-first-aid-kit-essentials",
    "health-body-basics/how-to-treat-a-minor-cut-or-burn",
  ],
  glossary: [
    {"term":"Fall hazard","definition":"A physical condition — a loose rug, poor lighting, clutter, a wet floor — that increases the likelihood of a trip, slip, or fall, the leading category of home injury across most age groups."},
    {"term":"Poison control","definition":"A specialized service (in the US, reachable at 1-800-222-1222) providing immediate guidance on suspected poisoning or chemical exposure, staffed by professionals who can advise whether emergency care is needed."},
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
      <strong>This entry is general home-safety information, not medical advice.</strong> For an active emergency, call emergency services. For suspected poisoning, contact Poison Control (US: 1-800-222-1222) or emergency services immediately.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "Falls are the leading cause of home injury across most age groups, ahead of fires, poisoning, or cuts — a fact that reshapes where basic household safety attention is most usefully spent.",
      "A small, recurring set of fall hazards — loose rugs, clutter in walkways, poor lighting, wet floors — accounts for a large share of home falls, making them a high-value, low-effort target for prevention.",
      "Unattended cooking is the leading cause of home fires, which is why 'stay in the kitchen while something's on the stove' is disproportionately emphasized in home fire-safety guidance.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Most home injuries come from a small, repeating set of causes: falls (the single leading category across most age groups), cuts, burns, and poisoning. Basic prevention targets specific <TermLink href="/health-body-basics/preventing-common-household-injuries">fall hazards</TermLink> — loose rugs, clutter, poor lighting — because addressing these few recurring mechanisms covers a large share of actual home injury risk.</div>}
      detailed={<div className="prose-p">Injury-surveillance data consistently shows falls as the top home-injury category across most age groups, not just among older adults, which is a common misconception — falls involving stairs, bathtubs, and cluttered walkways affect all ages, even though the consequences (like fracture risk) do increase with age. Fire risk clusters heavily around unattended cooking specifically, more than any other single home-fire cause, which is why fire-safety guidance emphasizes staying present during stovetop cooking above nearly every other single fire-prevention step. For poisoning, most incidents in homes with young children involve household chemicals or medications left within reach rather than exotic substances, which is why secure, out-of-reach storage is the primary prevention mechanism rather than eliminating these products from the home entirely.</div>}
      />
      <FootnoteAside>The National Safety Council and CDC both track home-injury data by mechanism (fall, fire, poisoning, etc.) precisely because prevention resources are more effective when targeted at the highest-frequency, highest-impact hazards rather than spread evenly across every conceivable risk.</FootnoteAside>

      <p>
      Knowing which hazard categories actually cause the most injuries — rather than which ones feel most alarming — is what makes prevention effort efficient rather than diffuse.
      </p>

      <QuickCheck
      question="A household focuses its safety efforts heavily on fire extinguisher placement but does little about loose rugs and cluttered walkways. Based on home-injury data, is this prioritization well-matched to actual risk?"
      options={[
      { text: "Yes — fires are the leading cause of home injury, so this prioritization matches the data well", correct: false, explanation: "Falls, not fires, are the leading cause of home injury across most age groups — this household's priorities are actually mismatched with what the injury data shows is most common." },
      { text: "Not necessarily — falls are the leading cause of home injury across most age groups, so addressing fall hazards like loose rugs and clutter may address more actual risk than fire-extinguisher placement alone, even though fire safety still matters", correct: true, explanation: "Correct. This doesn't mean fire safety is unimportant — it means fall-hazard reduction is a comparably or more impactful, often lower-effort target that's easy to underweight." },
      { text: "Prioritization doesn't matter since all home injuries are equally rare", correct: false, explanation: "Home injuries aren't equally rare across categories — falls specifically occur far more frequently than home fires, which is exactly why prioritization based on actual frequency data matters." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Addressing a common fall hazard (baseline case)</h3>
      <div className="prose-p">
      Securing a loose area rug with non-slip backing, clearing a cluttered hallway, and adding a nightlight near stairs directly targets three of the most commonly cited fall-hazard mechanisms — a low-effort set of changes addressing a disproportionately large share of home fall risk.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A less obvious fall risk — bathroom surfaces (edge case / variation)</h3>
      <div className="prose-p">
      Bathrooms combine water, hard surfaces, and often limited grab points, making them a disproportionately common location for home falls relative to their small size — non-slip bath mats and grab bars near the tub/shower directly address this specific, geometry-driven risk concentration rather than being a generic, low-value precaution.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Securing household chemicals and medications from young children (real-world / applied case)</h3>
      <div className="prose-p">
      A household with young children stores cleaning chemicals and medications in a cabinet with a child-safety lock, out of reach and out of sight, rather than under an accessible sink — directly targeting the well-documented pattern that most childhood poisoning incidents involve ordinary household products left within reach, not unusual or exotic substances.
      </div>

      <QuickCheck
      question="Why does poison-prevention guidance for households with young children emphasize secure storage of ordinary household chemicals and medications, rather than focusing on unusual or exotic substances?"
      options={[
      { text: "Because most childhood poisoning incidents involve common household products (cleaning supplies, medications) left accessible, not unusual substances — so securing ordinary items addresses the actual dominant risk pattern", correct: true, explanation: "Correct. This matches the same 'target the actual dominant hazard' logic as fall-hazard and fire-safety prioritization — prevention works best aimed at the highest-frequency real-world risk pattern." },
      { text: "Because exotic substances are actually the leading cause of childhood poisoning, not ordinary household products", correct: false, explanation: "This has the pattern backwards — ordinary, common household products are the more frequently involved category in childhood poisoning incidents, which is exactly why guidance targets their secure storage." },
      { text: "Because household chemicals and medications are legally required to be locked away in all homes", correct: false, explanation: "Secure storage is a safety recommendation based on actual incident patterns, not a universal legal mandate in every home — the reasoning is about matching effort to real risk, not a blanket legal requirement." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Relative frequency of major home injury categories"
      type="comparison"
      svgSrc="/diagrams/health-body-basics-preventing-common-household-injuries-hazard-bar-chart.svg"
      altText="A horizontal bar chart comparing four home injury categories by relative frequency: falls shown as the longest bar, followed by cuts, then burns, then poisoning shown as the shortest bar, illustrating that falls disproportionately outrank the other categories."
      />
      <p>
      The relative bar lengths are exactly why fall-hazard reduction (securing rugs, improving lighting, clearing clutter) is emphasized as much as, or more than, fire or poisoning precautions in general home-safety guidance.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming falls are mainly a concern for older adults and not addressing fall hazards more broadly.", fix: "Recognize falls as the leading home-injury category across most age groups, not just older adults, and address common hazards (rugs, clutter, lighting) regardless of who lives in the home." },
      { mistake: "Leaving cooking unattended, even briefly, on an active stovetop.", fix: "Stay in the kitchen (or set a timer and check frequently) whenever something is actively cooking, since unattended cooking is the leading cause of home fires." },
      { mistake: "Storing household chemicals or medications within easy reach of young children.", fix: "Use secure, out-of-reach, ideally locked storage for chemicals and medications in any household with young children." },
      ]}
      />
      <MisconceptionCallout
      myth="Fires and poisoning are the biggest home-safety risks to plan around."
      reality={<p>Falls are consistently the leading cause of home injury across most age groups, ahead of fires or poisoning, per CDC and National Safety Council injury-surveillance data. This doesn&apos;t mean fire and poisoning precautions don&apos;t matter — it means fall-hazard reduction (securing rugs, improving lighting, clearing walkways, bathroom grab bars) deserves at least comparable attention, and is frequently underweighted relative to its actual share of home injuries.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Secure loose rugs, clear cluttered walkways, and improve lighting near stairs and hallways.",
      "Add non-slip mats and consider grab bars in bathrooms, a disproportionately common fall location.",
      "Never leave active cooking on a stovetop unattended.",
      "Store household chemicals and medications securely out of reach, especially in homes with young children.",
      "Save the Poison Control number (US: 1-800-222-1222) somewhere accessible for quick reference in an emergency.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the leading cause of home injury?", answer: "Falls, consistently, across most age groups — ahead of fires, cuts, burns, or poisoning, per CDC and National Safety Council injury data." },
      { question: "What is the leading cause of home fires?", answer: "Unattended cooking, which is why staying present (or setting reminders) during active stovetop cooking is disproportionately emphasized in fire-safety guidance." },
      { question: "How can I reduce fall risk at home?", answer: "Secure loose rugs, clear clutter from walkways, improve lighting (especially near stairs), and add non-slip mats or grab bars in bathrooms, a common fall location." },
      { question: "What's the most common poisoning risk for young children at home?", answer: "Accessible household chemicals and medications, more often than unusual or exotic substances — secure, out-of-reach storage is the primary prevention step." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
