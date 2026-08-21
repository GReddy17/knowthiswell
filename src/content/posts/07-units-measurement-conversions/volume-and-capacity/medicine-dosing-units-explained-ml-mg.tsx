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
  title: "Medicine Dosing Units Explained (mL, mg — General Literacy)",
  category: "units-measurement-conversions",
  order: 23,
  subtopic: "volume-and-capacity",
  tags: ["medicine units", "mL vs mg", "dosing concentration", "unit literacy"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Milligrams measure how much medicine is actually in a dose; milliliters measure how much liquid you pour out — confusing the two is one of the most common real-world unit-reading mistakes.",
  summary: "Liquid medicine labels carry two different kinds of unit: milligrams (mg), which describe the amount of active drug, and milliliters (mL), which describe the volume of liquid carrying it — reading a dose correctly means multiplying a concentration (mg per mL) by a volume (mL given) to get a total dose (mg), not treating the two units as interchangeable.",
  sources: [
    { label: "U.S. Food and Drug Administration — Measuring Doses for Young Children", url: "https://www.fda.gov/drugs/special-features/measuring-doses-young-children" },
    { label: "NHS — Giving your child liquid medicine safely", url: "https://www.nhs.uk/medicines/" },
    { label: "NIST — Handbook 44, Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices", url: "https://www.nist.gov/pml/owm/publications/nist-handbook-44" },
  ],
  seeAlso: [
    "units-measurement-conversions/cups-tablespoons-and-teaspoons-explained",
    "units-measurement-conversions/liters-vs-gallons-everyday-conversion",
  ],
  glossary: [
    {"term":"Concentration (mg/mL)","definition":"The amount of active ingredient (in milligrams) dissolved in each milliliter of a liquid medicine — the number that has to be multiplied by the volume given to find the total dose."},
    {"term":"Dose","definition":"The total amount of active ingredient actually administered, expressed in milligrams (or micrograms), equal to concentration multiplied by volume given."},
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
      <strong>This entry explains how dosing units and math work — it is general measurement literacy, not medical advice.</strong> Never use figures on this page to determine a real dose for yourself, a child, or anyone else. Always follow the exact instructions on the product label, or ask a doctor or pharmacist.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "Liquid medicine labels mix two different kinds of unit: milligrams (mg), the amount of actual drug, and milliliters (mL), the volume of liquid you measure out — they are not interchangeable.",
      "The relationship is: dose in mg = concentration (mg per mL) × volume given (mL). Reading a label means finding both numbers and multiplying them, not assuming the mL figure alone is 'the dose.'",
      "A dosing spoon, oral syringe, or dosing cup marked in mL is the accurate tool — a kitchen teaspoon can vary in real volume by 20% or more and should never be used for medicine.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A liquid medicine label typically shows a <TermLink href="/units-measurement-conversions/medicine-dosing-units-explained-ml-mg">concentration</TermLink> like &quot;25 mg / 5 mL,&quot; meaning every 5 milliliters of the liquid contains 25 milligrams of the actual medicine. The <TermLink href="/units-measurement-conversions/medicine-dosing-units-explained-ml-mg">dose</TermLink> you actually receive depends on how many milliliters you measure out — pouring 10 mL of that same liquid delivers 50 mg, not 25 mg, because you doubled the volume. Reading these two numbers correctly, and knowing which one the product label or instructions are actually specifying, is the entire skill.</div>}
      detailed={<div className="prose-p">The concentration figure (mg per mL) is fixed for a given product — it doesn&apos;t change bottle to bottle of the same medicine at the same strength. What changes is the volume administered, which is why instructions specify a volume (&quot;give 10 mL&quot;) rather than a dose directly, and why the printed dose in mg on packaging always corresponds to a specific stated volume. Mixing this up — reading &quot;25 mg/5 mL&quot; and assuming &quot;25&quot; is the number of mL to give, or assuming a dose changes only with the mg number and ignoring the mL side — is one of the most common real-world sources of home dosing error, which is exactly why the FDA and NHS both publish plain-language guidance specifically on reading liquid medicine measurements rather than assuming they&apos;re intuitive.</div>}
      />
      <FootnoteAside>Ordinary kitchen teaspoons vary in real volume by roughly ±20% across different households&apos; flatware, according to measurement studies cited by health agencies — one documented reason liquid medicine should always be measured with the dosing device (oral syringe, dosing cup, or dosing spoon) that comes with the product, not a kitchen spoon.</FootnoteAside>

      <p>
      None of this is about doing harder math — it&apos;s about correctly identifying which printed number is the concentration and which is the volume, since a label with two numbers on it is easy to misread under time pressure.
      </p>

      <QuickCheck
      question="A label reads '25 mg / 5 mL.' If someone measures out and gives 5 mL, how much active medicine (in mg) have they given?"
      options={[
      { text: "5 mg, matching the mL figure", correct: false, explanation: "The mg and mL numbers on the label aren't meant to be read as equal to each other — 25 mg is specifically the amount contained within that particular 5 mL volume." },
      { text: "25 mg — because the label states the concentration is 25 mg per every 5 mL, so giving exactly 5 mL delivers exactly 25 mg", correct: true, explanation: "Correct. When the volume given exactly matches the volume in the concentration statement, the dose given equals the mg figure directly." },
      { text: "It's impossible to know without more information", correct: false, explanation: "The label already gives both numbers needed — 25 mg per 5 mL, with exactly 5 mL given — so the dose is fully determined as printed." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Reading a concentration and volume to find total dose (baseline case, illustrative numbers only)</h3>
      <div className="prose-p">
      A label reads &quot;25 mg / 5 mL.&quot; That means the concentration is 25 ÷ 5 = 5 mg per mL. If a product&apos;s instructions (not this page) specify giving 10 mL, the total dose is 5 mg/mL × 10 mL = 50 mg. This is a straightforward multiplication once the concentration and the volume are correctly identified as two separate numbers.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Two products with the same total mg dose but different concentrations (edge case / variation, illustrative only)</h3>
      <div className="prose-p">
      Product A is 25 mg/5 mL; Product B (a different, more concentrated formulation of the same medicine) is 25 mg/1 mL. Giving 5 mL of Product A delivers 25 mg — but giving 5 mL of Product B would deliver 125 mg, five times as much, because its concentration is five times higher. This is exactly why product-specific instructions must always be followed exactly, and why a volume that was safe for one product&apos;s concentration can be unsafe for a differently concentrated version of what looks like &quot;the same medicine.&quot;
      </div>

      <QuickCheck
      question="Why is it dangerous to assume that 'the same volume' (say, 5 mL) always delivers 'the same dose' across different liquid medicine products?"
      options={[
      { text: "It isn't dangerous — 5 mL is always 5 mL regardless of the product", correct: false, explanation: "5 mL is indeed always the same volume, but the dose delivered by that volume depends entirely on the product's concentration, which varies between products and formulations." },
      { text: "Because different products (or different strengths of the same medicine) can have very different concentrations (mg per mL), so the same volume can deliver a very different total dose", correct: true, explanation: "Correct. This is exactly why product labels and instructions must be followed exactly for the specific product in hand, rather than reusing a volume that worked for a different product or strength." },
      { text: "Because milliliters aren't a standardized unit", correct: false, explanation: "The milliliter itself is a precisely standardized metric unit — the risk here isn't about the unit's precision, it's about concentration varying between different products." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why a kitchen teaspoon is not an acceptable substitute for a dosing device (real-world / applied case)</h3>
      <div className="prose-p">
      A liquid medicine&apos;s instructions specify a dose in mL, assuming use of the calibrated dosing device provided with the product. Measurement studies cited by health agencies have found ordinary household teaspoons can hold anywhere from about 4 to 9 mL depending on the specific spoon — meaning the identical instruction, followed with an untrustworthy tool, can deliver a dose that&apos;s roughly half or nearly double what was intended. This is precisely why health agencies emphasize using the marked oral syringe, dosing cup, or dosing spoon that ships with the product rather than any kitchen utensil.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Concentration × volume given = total dose"
      type="flow"
      svgSrc="/diagrams/units-measurement-conversions-medicine-dosing-units-explained-ml-mg-concentration.svg"
      altText="A labeled medicine bottle diagram showing the two different units printed on a liquid medicine label: milligrams per milliliter as the concentration of active ingredient dissolved in the liquid, and milliliters as the volume of liquid actually measured out and given, with an arrow showing that dose in milligrams equals concentration in mg per mL multiplied by volume given in mL."
      />
      <p>
      The diagram&apos;s arithmetic (concentration × volume = dose) is the same relationship covered in the calculator below, just expressed the other way around — as a per-kilogram dosing rate rather than a per-mL concentration, which is how many real dosing instructions are actually written for illustrative unit-literacy purposes.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Reading the mg number on a label as if it were the number of mL to give.", fix: "Identify both numbers separately — the mg figure is the drug amount inside a stated mL volume, not the volume itself." },
      { mistake: "Using an ordinary kitchen teaspoon to measure a liquid dose.", fix: "Always use the calibrated dosing device (oral syringe, dosing cup, or dosing spoon) provided with the product." },
      { mistake: "Assuming the same mL volume gives the same dose across different products or strengths.", fix: "Check the specific product's concentration every time — never reuse a volume figure from a different product or strength." },
      ]}
      />
      <MisconceptionCallout
      myth="The numbers on a liquid medicine label are basically the same thing — mg and mL are just two ways of writing the dose."
      reality={<p>Milligrams and milliliters measure two different physical properties: mg measures the mass of active drug, mL measures the volume of liquid carrying it. A label pairs them as a concentration (mg per mL) precisely because neither number alone tells you the dose — you need the concentration and the actual volume given, multiplied together, to know the true amount of medicine delivered.</p>}
      />

      <QuickCheck
      question="What is the single most important practical takeaway from how mg and mL relate on a liquid medicine label?"
      options={[
      { text: "That mg and mL can be used interchangeably as long as you're consistent", correct: false, explanation: "They measure different things (mass vs. volume) and are never interchangeable — a fixed concentration links them for one specific product, but that link isn't universal." },
      { text: "That the dose actually given depends on both the product's concentration and the exact volume measured, and only the exact instructions and a proper dosing device should be used to determine and measure that volume", correct: true, explanation: "Correct. This is the core unit-literacy point of the whole topic, and it's also why real dosing decisions belong to a doctor, pharmacist, or the product's own label instructions — not to any general reference article." },
      { text: "That larger mL numbers always mean a safer, more diluted dose", correct: false, explanation: "A larger mL number only means more diluted if the concentration is held constant — for a highly concentrated product, even a small mL volume can carry a large mg dose." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <p className="prose-p">This calculator illustrates the arithmetic behind a weight-based dosing rate (a common way dosing instructions are structured) — it is for understanding the math only, not for determining any real dose.</p>
      <EntryCalculator
      title="Illustrative: dosing-rate math (mg per kg × body weight)"
      fields={[
      { key: "doseMgPerKg", label: "Illustrative rate (mg per kg)", defaultValue: 5 },
      { key: "weightKg", label: "Illustrative body weight (kg)", defaultValue: 20 },
      ]}
      resultLabel="Illustrative total (mg) — not a real dose"
      formula="medicineDoseMgFromWeight"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Never determine or adjust a real medicine dose using this page — always follow the product label or a doctor/pharmacist's instructions exactly.",
      "Learn to separate the two numbers on a liquid medicine label: concentration (mg per mL) and volume given (mL).",
      "Always use the dosing device that comes with a liquid medicine, never a kitchen teaspoon.",
      "If a label or instruction is unclear, ask a pharmacist to walk through the exact numbers before giving any dose.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What's the difference between mg and mL on a medicine label?", answer: "Milligrams (mg) measure the mass of actual active drug; milliliters (mL) measure the volume of liquid carrying it. A concentration figure (like 25 mg/5 mL) links the two for a specific product." },
      { question: "Can I use a kitchen teaspoon to measure liquid medicine?", answer: "No — health agencies advise against it, since ordinary household teaspoons vary widely in real volume. Always use the calibrated dosing device provided with the product." },
      { question: "How do you calculate a dose from a concentration?", answer: "Multiply the concentration (mg per mL) by the volume given (mL) to get the total dose in mg. This page explains the arithmetic only — always follow the actual product instructions for a real dose." },
      { question: "Why do two products with the same mg strength sometimes look different when measured?", answer: "Because their concentrations (mg per mL) can differ — a more concentrated product delivers more mg in the same mL volume than a less concentrated one." },
      { question: "Where should I go for an actual dosing question?", answer: "A doctor, pharmacist, or the product's own printed instructions — never a general reference article, including this one." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
