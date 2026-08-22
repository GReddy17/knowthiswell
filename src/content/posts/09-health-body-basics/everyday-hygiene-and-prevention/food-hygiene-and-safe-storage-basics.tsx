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
  title: "Food Hygiene & Safe Storage Basics",
  category: "health-body-basics",
  order: 6,
  subtopic: "everyday-hygiene-and-prevention",
  tags: ["food safety", "food storage", "danger zone temperature", "cross-contamination", "foodborne illness prevention"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Bacteria multiply fastest between 40°F and 140°F — the 'danger zone' that determines nearly every food-safety storage and cooking rule.",
  summary: "Food hygiene centers on limiting the time perishable food spends in the temperature 'danger zone' (roughly 40°F to 140°F / 4°C to 60°C) where bacteria multiply fastest, alongside preventing cross-contamination between raw and ready-to-eat food — a small set of mechanisms behind most specific food-safety guidance.",
  sources: [
    { label: "USDA — Food Safety Basics", url: "https://www.fsis.usda.gov/food-safety" },
    { label: "CDC — Food Safety", url: "https://www.cdc.gov/food-safety/index.html" },
    { label: "FDA — Safe Food Handling", url: "https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling" },
  ],
  seeAlso: [
    "health-body-basics/handwashing-why-it-actually-works",
    "health-body-basics/understanding-common-digestive-upsets",
  ],
  glossary: [
    {"term":"Temperature danger zone","definition":"The roughly 40°F to 140°F (4°C to 60°C) range in which bacteria on perishable food multiply fastest — the basis for most food refrigeration and hot-holding guidance."},
    {"term":"Cross-contamination","definition":"The transfer of bacteria from one food (commonly raw meat) to another food, surface, or utensil, often through shared cutting boards, hands, or storage containers."},
    {"term":"Safe internal cooking temperature","definition":"The minimum internal temperature a specific food must reach during cooking to reliably kill common foodborne pathogens, verified with a food thermometer rather than color or appearance alone."},
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
      <strong>This entry is general food-safety information, not medical advice.</strong> If you suspect food poisoning or have symptoms of foodborne illness, contact a doctor.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "Bacteria on perishable food multiply fastest in the 'temperature danger zone' — roughly 40°F to 140°F (4°C to 60°C) — which is why refrigeration, prompt cooking, and hot-holding rules all revolve around this specific range.",
      "Cross-contamination — bacteria moving from raw food to ready-to-eat food via shared surfaces, utensils, or hands — is a separate risk from temperature, and needs its own separate prevention steps.",
      "Color and smell are unreliable indicators of whether food has reached a safe internal cooking temperature — a food thermometer is the only reliable way to confirm it.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Most food-safety rules come down to two separate mechanisms: temperature and contact. Bacteria multiply fastest in the <TermLink href="/health-body-basics/food-hygiene-and-safe-storage-basics">temperature danger zone</TermLink> (roughly 40°F to 140°F), so keeping food either well-refrigerated or well-heated limits their growth. Separately, <TermLink href="/health-body-basics/food-hygiene-and-safe-storage-basics">cross-contamination</TermLink> — like using the same cutting board for raw chicken and then salad — can transfer bacteria directly, regardless of temperature.</div>}
      detailed={<div className="prose-p">The danger zone isn&apos;t a wall where bacterial growth suddenly starts and stops — growth rate increases within that range, peaking around body temperature, which is why the &quot;2-hour rule&quot; (perishable food shouldn&apos;t sit in the danger zone more than about 2 hours, or 1 hour above about 90°F/32°C) exists as a practical cutoff rather than an exact biological threshold. Cooking to a <TermLink href="/health-body-basics/food-hygiene-and-safe-storage-basics">safe internal cooking temperature</TermLink> is verified with a food thermometer because visual cues (juice color, meat color) don&apos;t reliably correlate with actual internal temperature across different cuts, cooking methods, and equipment — a well-documented gap between appearance-based judgment and measured safety.</div>}
      />
      <FootnoteAside>The USDA&apos;s specific safe minimum internal temperatures vary by food type — for example, ground meats generally require a higher safe temperature than whole cuts of the same meat, because grinding can distribute surface bacteria throughout the product rather than leaving it only on the (more thoroughly heated) exterior.</FootnoteAside>

      <p>
      Separating &quot;is this food at a bacteria-friendly temperature&quot; from &quot;could bacteria have transferred onto this food&quot; clarifies why food safety needs both a thermometer and separate cutting boards, not just one or the other.
      </p>

      <QuickCheck
      question="A cook uses the same unwashed cutting board for raw chicken and then for chopping salad vegetables. Even if both foods are kept at safe temperatures, what risk remains?"
      options={[
      { text: "No risk — as long as temperature is controlled, cross-contamination doesn't matter", correct: false, explanation: "Temperature control and cross-contamination are separate risks. Bacteria can transfer directly from the raw chicken to the salad via the shared cutting board surface, regardless of how well temperature was controlled." },
      { text: "Bacteria from the raw chicken can transfer directly onto the salad vegetables through the shared, unwashed cutting board — a cross-contamination risk that temperature control alone doesn't address", correct: true, explanation: "Correct. This is exactly why food safety guidance treats cross-contamination prevention (separate boards, thorough washing between uses) as a distinct step from temperature management." },
      { text: "The risk only applies if the vegetables are also cooked afterward", correct: false, explanation: "The salad in this example is raw and won't be cooked, so any transferred bacteria isn't killed by heat afterward — this makes the cross-contamination risk more, not less, relevant here." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Leftovers left out overnight (baseline case)</h3>
      <div className="prose-p">
      A cooked dish left at room temperature overnight (well beyond the roughly 2-hour danger-zone guideline) has spent many hours in the bacteria-friendly temperature range, allowing bacterial populations to grow substantially — USDA guidance is to discard such food rather than risk it, since reheating doesn&apos;t reliably eliminate toxins some bacteria produce during that extended time, even if it kills the bacteria themselves.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Verifying ground meat with a thermometer instead of color (edge case / variation)</h3>
      <div className="prose-p">
      Ground beef can appear fully browned on the outside while remaining under-cooked internally, or can retain a pink tinge even when it has reached a safe internal temperature, depending on factors like myoglobin content and cooking method — color is not a reliable safety indicator. Checking with a food thermometer against the USDA&apos;s specific safe minimum temperature for ground beef removes the guesswork entirely.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Marinating raw meat and reusing the marinade (real-world / applied case)</h3>
      <div className="prose-p">
      A marinade that raw chicken sat in contains bacteria transferred from the raw meat. Brushing that same marinade onto the chicken again after it&apos;s cooked (or using it as a sauce) reintroduces those bacteria onto food that won&apos;t be cooked further — a specific, common cross-contamination scenario. USDA guidance is to set aside a separate portion of marinade before adding raw meat, or to boil the used marinade thoroughly before reusing it, directly addressing this specific transfer pathway.
      </div>

      <QuickCheck
      question="Why is it unsafe to reuse marinade that raw chicken sat in as a finishing sauce, even if the chicken itself is fully cooked?"
      options={[
      { text: "The marinade itself becomes physically contaminated with bacteria from the raw chicken, and using it uncooked on the finished dish reintroduces that bacteria onto food that won't be heated again", correct: true, explanation: "Correct. This is a direct cross-contamination pathway — the marinade needs its own separate safety step (setting some aside beforehand, or boiling the used portion) independent of how well the meat itself was cooked." },
      { text: "There's no real risk, since the chicken itself reached a safe cooking temperature", correct: false, explanation: "The chicken reaching a safe temperature doesn't address the marinade, which is a separate item that was in contact with raw meat and needs its own handling." },
      { text: "The risk only exists if the marinade contains dairy ingredients", correct: false, explanation: "The risk comes from bacterial contamination via contact with raw meat, not from any specific ingredient category like dairy." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The temperature danger zone"
      type="comparison"
      svgSrc="/diagrams/health-body-basics-food-hygiene-and-safe-storage-basics-danger-zone.svg"
      altText="A vertical temperature scale from freezing to boiling, with a shaded band labeled the danger zone spanning roughly 40 to 140 degrees Fahrenheit, marked as the range where bacteria multiply fastest, with refrigeration marked safely below the band and cooking/hot-holding marked safely above it."
      />
      <p>
      Nearly every specific food-storage rule — refrigerate promptly, keep hot food hot, don&apos;t leave food out too long — is a different way of minimizing time spent inside this one temperature band.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Judging whether meat is safely cooked by color alone.", fix: "Use a food thermometer and check against the specific safe minimum internal temperature for that food type — color isn't a reliable indicator." },
      { mistake: "Using the same cutting board or utensils for raw meat and ready-to-eat food without washing between uses.", fix: "Use separate cutting boards for raw meat and produce, or thoroughly wash and sanitize between uses." },
      { mistake: "Leaving perishable food out at room temperature for extended periods.", fix: "Refrigerate perishable food within about 2 hours (1 hour if the environment is above about 90°F/32°C)." },
      ]}
      />
      <MisconceptionCallout
      myth="If food looks and smells fine, it's safe to eat."
      reality={<p>Many foodborne pathogens don&apos;t noticeably change a food&apos;s appearance, smell, or taste before making someone sick — spoilage bacteria (which cause obvious off smells) and pathogenic bacteria (which cause illness) aren&apos;t always the same organisms. Relying on time-in-danger-zone guidelines and, for cooking, a verified internal temperature is a more reliable safety check than sensory judgment alone.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Refrigerate perishable food within about 2 hours of cooking or purchase.",
      "Use a food thermometer to verify safe internal cooking temperatures rather than judging by color.",
      "Use separate cutting boards and utensils for raw meat versus ready-to-eat food.",
      "Set aside a separate portion of any marinade before it contacts raw meat, or thoroughly boil used marinade before reusing it.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the food safety 'danger zone'?", answer: "Roughly 40°F to 140°F (4°C to 60°C) — the temperature range in which bacteria on perishable food multiply fastest, which is why refrigeration and hot-holding guidance both revolve around staying outside this range." },
      { question: "How long can food safely sit at room temperature?", answer: "Generally no more than about 2 hours (1 hour if the ambient temperature is above about 90°F/32°C), per USDA guidance, before bacterial growth becomes a meaningful risk." },
      { question: "Is it safe to judge if meat is cooked by its color?", answer: "No. Color isn't a reliable indicator of safe internal temperature — a food thermometer checked against the specific safe minimum temperature for that food is the reliable method." },
      { question: "What is cross-contamination?", answer: "The transfer of bacteria from one food (often raw meat) to another food, surface, or utensil — commonly through shared cutting boards, unwashed hands, or reused marinade — a risk that's separate from temperature control." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
