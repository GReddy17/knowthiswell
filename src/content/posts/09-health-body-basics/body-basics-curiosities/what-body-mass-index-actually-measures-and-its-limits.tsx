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
  title: "What Body Mass Index Actually Measures — and Its Limits",
  category: "health-body-basics",
  order: 46,
  subtopic: "body-basics-curiosities",
  tags: ["body mass index", "BMI", "health screening", "health literacy", "population health"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "BMI is weight divided by height squared — a fast population-screening ratio that cannot tell the difference between muscle and fat, which is exactly why it has well-documented limits as an individual health measure.",
  summary: "Body Mass Index (BMI) is calculated as weight in kilograms divided by height in meters squared, producing a single number originally designed for population-level health screening and research — it correlates with body fat on average across large groups, but it cannot distinguish muscle mass from fat mass in any one individual, which is the well-documented limitation health agencies themselves publish alongside the measure.",
  sources: [
    { label: "CDC — About Adult BMI", url: "https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html" },
    { label: "NIH — Body Mass Index Limitations", url: "https://www.niddk.nih.gov/" },
    { label: "WHO — Body Mass Index Classification", url: "https://www.who.int/data/gho/data/themes/topics/topic-details/GHO/body-mass-index" },
  ],
  seeAlso: [
    "health-body-basics/common-health-myths-and-misconceptions",
    "health-body-basics/understanding-a-balanced-plate-macronutrients-overview",
    "health-body-basics/physical-activity-guidelines-explained",
  ],
  glossary: [
    {"term":"Body Mass Index (BMI)","definition":"A ratio calculated as weight (kg) divided by height (m) squared, used as a population-level screening tool that correlates on average with body fat but does not directly measure body composition."},
    {"term":"Body composition","definition":"The actual makeup of a body's mass — how much is muscle, fat, bone, and water — which BMI cannot distinguish since it uses only total weight and height."},
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
      <strong>This entry explains what BMI measures and its documented limits — it is not an individual health assessment.</strong> A single BMI number cannot capture your overall health. For any personal question about weight or body composition, talk to a doctor.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "BMI = weight (kg) ÷ height (m)², a simple ratio originally developed for population-level statistics, not individual diagnosis.",
      "BMI correlates with body fat on average across large populations, but it cannot distinguish muscle mass from fat mass in any single person — two people with identical BMI can have very different body compositions.",
      "Health agencies including the CDC and WHO publish BMI's limitations alongside the measure itself — it is one screening input among several, not a standalone verdict on health.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p"><TermLink href="/health-body-basics/what-body-mass-index-actually-measures-and-its-limits">Body Mass Index</TermLink> is calculated by dividing weight in kilograms by height in meters squared. It&apos;s a quick, cheap-to-calculate ratio that, across large populations, tends to track with body fat — which is why it became a standard tool in public health research. But BMI only uses two numbers, weight and height, so it has no way of knowing whether a given weight comes from muscle, fat, bone density, or water — it treats a kilogram of muscle exactly the same as a kilogram of fat.</div>}
      detailed={<div className="prose-p">BMI was developed in the 1830s by mathematician Adolphe Quetelet as a population statistic, not a clinical diagnostic tool, and it wasn&apos;t adopted for individual health screening until well over a century later. Its core limitation follows directly from its formula: <TermLink href="/health-body-basics/what-body-mass-index-actually-measures-and-its-limits">body composition</TermLink> — the actual split between muscle, fat, bone, and water — simply isn&apos;t an input. This is why a muscular athlete with low body fat can register a BMI in the &quot;overweight&quot; category, while someone with a normal BMI can still carry an unhealthy proportion of visceral fat. The CDC and WHO both publish this exact limitation directly alongside their BMI guidance, framing it as a fast, low-cost population screening tool useful for tracking trends across large groups, and as one input among several (alongside waist circumference, blood pressure, and other markers) for an individual clinical picture — not a standalone diagnosis on its own.</div>}
      />
      <FootnoteAside>BMI category cutoffs (underweight, normal, overweight, obese) were set using population data drawn largely from certain groups, and health agencies themselves note the categories can be less accurate for some populations, including older adults, athletes, and certain ethnic groups with different typical body compositions.</FootnoteAside>

      <p>
      None of this means BMI is useless — it means it&apos;s a rough, fast screening number that gets more useful in combination with other measures, not in isolation.
      </p>

      <QuickCheck
      question="A bodybuilder with very low body fat and high muscle mass has a BMI in the 'overweight' range. What does this most likely indicate?"
      options={[
      { text: "That the bodybuilder is at meaningfully elevated health risk from excess weight", correct: false, explanation: "BMI can't distinguish muscle from fat — a body built from mostly lean muscle mass drives BMI up the same way excess fat would, without carrying the same health implications." },
      { text: "That BMI, using only weight and height, is registering the extra mass from muscle the same way it would register extra fat — a known limitation of the formula, not evidence of a health problem", correct: true, explanation: "Correct. This exact scenario is the textbook illustration of BMI's core limitation: it cannot tell what kind of tissue is contributing to a person's weight." },
      { text: "That the BMI formula must have been calculated incorrectly", correct: false, explanation: "The formula is likely correct — the issue isn't a calculation error, it's that BMI structurally cannot account for body composition regardless of how accurately it's computed." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Calculating BMI from weight and height (baseline case)</h3>
      <div className="prose-p">
      A person weighing 70 kg with a height of 175 cm (1.75 m): BMI = 70 ÷ (1.75 × 1.75) = 70 ÷ 3.0625 ≈ 22.9, which the WHO classifies within the &quot;normal weight&quot; range (18.5–24.9). The arithmetic itself is simple; the actual skill is remembering what the resulting number can and can&apos;t tell you.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Same BMI, different body composition (edge case / variation)</h3>
      <div className="prose-p">
      Two people, both 175 cm tall and both weighing 85 kg, have an identical BMI of about 27.8. One is a competitive powerlifter with substantial muscle mass and low body fat; the other has a sedentary lifestyle and a higher proportion of body fat. Their identical BMI number describes an identical ratio of weight to height² — it does not, and structurally cannot, describe their very different body compositions or health risk profiles.
      </div>

      <QuickCheck
      question="Why can't two people with the exact same BMI be assumed to have the same health risk profile?"
      options={[
      { text: "BMI calculations are only approximate and often contain rounding errors", correct: false, explanation: "The arithmetic itself is exact — the issue is conceptual, not a rounding error: the formula doesn't include any measure of body composition at all." },
      { text: "Because BMI only uses weight and height, it cannot capture differences in body composition (muscle vs. fat) between two people who happen to share the same ratio", correct: true, explanation: "Correct. Identical BMI means identical weight-to-height² ratio — nothing more. It says nothing about what that weight is actually made of." },
      { text: "Health risk is determined entirely by age, not by any weight-related measure", correct: false, explanation: "Age is one of several real risk factors, but this doesn't explain BMI's specific limitation — the point here is that BMI itself omits body composition regardless of age." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How BMI is actually used in a real clinical setting (real-world / applied case)</h3>
      <div className="prose-p">
      A doctor uses a patient&apos;s BMI as one quick screening input during a checkup, alongside blood pressure, waist circumference, cholesterol panel, family history, and a physical exam — not as a standalone verdict. If a screening BMI falls outside the typical range, that&apos;s treated as a prompt for a fuller conversation and additional, more specific measures, exactly the way health agencies describe BMI&apos;s intended role: a fast first-pass filter, not a diagnosis in itself.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Same BMI, two different body compositions"
      type="comparison"
      svgSrc="/diagrams/health-body-basics-what-body-mass-index-actually-measures-and-its-limits-same-bmi-different-composition.svg"
      altText="Two figures of identical height and weight, both labeled BMI 27.8. The left figure is labeled mostly muscle mass, low body fat. The right figure is labeled higher body fat proportion, less muscle mass. Both feed into the same BMI formula box showing weight divided by height squared, illustrating that the formula cannot distinguish between them."
      />
      <p>
      Both figures produce the identical number because the formula only ever sees total weight and height — the composition split shown underneath each figure is invisible to the calculation itself.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating a single BMI number as a complete verdict on someone's health.", fix: "Use BMI as one screening input among several — waist circumference, blood pressure, and a full clinical picture matter too." },
      { mistake: "Assuming BMI category cutoffs apply identically and accurately to every population and body type.", fix: "Recognize that BMI can be less accurate for athletes, older adults, and some ethnic groups, per the agencies that publish it — a doctor can interpret it in the right context." },
      { mistake: "Using BMI to judge an individual's fitness or muscularity.", fix: "Remember BMI cannot see body composition at all — it measures a ratio of total weight to height, nothing more specific." },
      ]}
      />
      <MisconceptionCallout
      myth="BMI directly measures body fat percentage."
      reality={<p>BMI does not measure body fat directly — it is a ratio of total weight to height squared. It correlates with body fat <em>on average across large populations</em>, which is useful for public health research and quick screening, but for any individual person it cannot distinguish fat mass from muscle mass, bone density, or water weight. Direct body fat measurement requires different methods entirely, such as skinfold calipers, bioelectrical impedance, or DEXA scans.</p>}
      />

      <QuickCheck
      question="What was BMI originally designed for when Adolphe Quetelet developed it in the 1830s?"
      options={[
      { text: "Individual clinical diagnosis in a doctor's office", correct: false, explanation: "BMI wasn't adopted for individual clinical screening until well over a century after its creation — it started as a population statistic." },
      { text: "A population-level statistical measure for studying groups, not diagnosing individuals", correct: true, explanation: "Correct. Quetelet developed the ratio for population statistics — its later use as an individual health-screening shortcut came much later and carries the limitations that follow from repurposing a population tool for individual use." },
      { text: "Measuring athletic performance in competitive sports", correct: false, explanation: "BMI has no connection to athletic performance measurement — it was a general population body-size statistic from the start." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <p className="prose-p">This calculator shows the BMI formula&apos;s arithmetic — it is a screening ratio, not an individual health assessment. Talk to a doctor about what any number means for you specifically.</p>
      <EntryCalculator
      title="Calculate BMI (screening ratio only)"
      fields={[
      { key: "weightKg", label: "Weight (kg)", defaultValue: 70 },
      { key: "heightCm", label: "Height (cm)", defaultValue: 175 },
      ]}
      resultLabel="BMI (screening ratio, not a diagnosis)"
      formula="bmiFromWeightHeight"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Treat BMI as one quick screening input, never a standalone verdict on your health.",
      "If your BMI falls outside the typical range, discuss it with a doctor alongside other measures like waist circumference and blood pressure.",
      "Remember BMI cannot distinguish muscle from fat — don't use it to judge fitness or body composition on its own.",
      "For an actual body composition assessment, ask a doctor about direct methods like skinfold measurement, bioelectrical impedance, or DEXA scanning.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How is BMI calculated?", answer: "BMI = weight in kilograms ÷ (height in meters)². For example, 70 kg ÷ (1.75 m)² ≈ 22.9." },
      { question: "Is BMI an accurate measure of body fat?", answer: "It correlates with body fat on average across large populations but cannot measure body fat directly for an individual, since it only uses total weight and height — it cannot distinguish muscle from fat." },
      { question: "Why can a muscular athlete have a high BMI?", answer: "Because BMI treats all weight the same regardless of source. Muscle is denser than fat, so a muscular person can weigh more relative to their height and register a higher BMI without carrying excess body fat." },
      { question: "Is BMI still useful if it has these limitations?", answer: "Yes, as a fast, low-cost population-screening tool and as one input among several in a fuller clinical picture — health agencies publish it alongside its known limitations rather than presenting it as a complete individual diagnosis." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
