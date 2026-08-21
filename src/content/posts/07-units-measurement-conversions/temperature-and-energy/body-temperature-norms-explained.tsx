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
  title: "Body Temperature Norms Explained",
  category: "units-measurement-conversions",
  order: 32,
  subtopic: "temperature-and-energy",
  tags: [
    "body temperature",
    "fever",
    "celsius",
    "fahrenheit",
    "measurement literacy",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "The famous '98.6°F' normal body temperature is a rounded average from an 1868 study — real body temperature varies by person, time of day, and measurement site, and reading a thermometer means understanding which scale and threshold applies.",
  summary: "This is a unit-literacy overview of body temperature scales and commonly cited reference ranges — not personalized medical advice — covering how to read a thermometer in either Celsius or Fahrenheit and what threshold values typically get labeled a fever.",
  sources: [
    { label: "CDC — About Body Temperature", url: "https://www.cdc.gov" },
    { label: "NHS — Fever in Adults", url: "https://www.nhs.uk" },
    { label: "NIST — Temperature Scales", url: "https://www.nist.gov/pml" },
  ],
  seeAlso: [
    "units-measurement-conversions/celsius-vs-fahrenheit-the-conversion-formula",
    "units-measurement-conversions/wind-chill-and-heat-index-explained",
  ],
  glossary: [
    {"term":"Basal body temperature","definition":"The body's resting temperature, typically at its lowest right after waking and before any activity — used as a stable reference point since body temperature naturally fluctuates through the day."},
    {"term":"Fever threshold","definition":"A commonly cited temperature above which a reading is generally classified as a fever — often stated as approximately 38°C (100.4°F), though exact clinical thresholds vary by measurement method and source."},
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
      <p className="mb-6 rounded-lg border border-rule bg-paper/60 px-4 py-3 font-body text-sm italic text-ink-soft">
      This entry covers unit literacy — reading and converting a thermometer reading — not personalized medical advice. For fever management or any health concern, consult a licensed healthcare provider.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "The commonly cited '98.6°F normal' figure is a rounded average from an 1868 German study of roughly 25,000 people — real average body temperature varies by individual, measurement site, and time of day, and modern studies suggest the population average may run slightly lower.",
      "A commonly cited general fever threshold is approximately 38°C (100.4°F), though exact clinical definitions vary slightly by measurement method and health authority.",
      "Body temperature naturally fluctuates by about 0.5°C (roughly 1°F) over the course of a day, typically lowest in early morning and highest in late afternoon or evening.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Body temperature is measured on the same <TermLink href="/units-measurement-conversions/body-temperature-norms-explained">Celsius</TermLink> or Fahrenheit scale as everyday weather — a thermometer reading around 37°C (98.6°F) is the commonly cited average &quot;normal,&quot; and a reading noticeably above that, often cited around 38°C (100.4°F) or higher, is commonly labeled a fever. The main unit-literacy skill here is being comfortable reading and converting a thermometer in whichever scale it displays.</div>}
      detailed={<div className="prose-p">The widely repeated &quot;98.6°F&quot; figure traces back to an 1868 study by German physician Carl Reinhold August Wunderlich, who averaged temperature readings from roughly 25,000 patients. It has since become deeply embedded in public knowledge, even though later, more methodologically modern studies have suggested the true population average may sit closer to 97.5°F (36.4°C), and that Wunderlich&apos;s equipment and methods likely ran slightly warm by modern standards. Beyond the average itself, body temperature is not a single fixed number for any individual — it follows a daily rhythm (<TermLink href="/units-measurement-conversions/body-temperature-norms-explained">basal body temperature</TermLink> lowest upon waking, highest in late afternoon), varies by measurement site (oral, ear, forehead, and rectal thermometers each read slightly differently relative to core body temperature), and varies somewhat by individual age and body composition. A <TermLink href="/units-measurement-conversions/body-temperature-norms-explained">fever threshold</TermLink> is therefore best understood as a general reference range rather than one universal cutoff number.</div>}
      />
      <FootnoteAside>A 2020 Stanford study analyzing over 677,000 temperature measurements collected across nearly 160 years found that average human body temperature has apparently declined gradually over that period — researchers hypothesize this reflects reduced chronic low-grade inflammation in modern populations compared to the 19th century, rather than any change in how the human body itself functions.</FootnoteAside>

      <p>
      With the historical and unit background established, converting a specific reading between scales is the practical skill worth having on hand.
      </p>

      <QuickCheck
      question="Why might a modern study report a slightly lower average body temperature than the traditional 98.6°F figure?"
      options={[
      { text: "Because human body temperature has recently spiked upward, making the old average obsolete", correct: false, explanation: "The trend goes in the opposite direction — later studies generally suggest a slightly lower, not higher, average compared to the original 1868 figure." },
      { text: "Because the original 1868 study's equipment and methodology likely ran slightly warm, and later research suggests population-level average temperature may have genuinely declined somewhat over the intervening century and a half", correct: true, explanation: "Correct. Both measurement-era limitations in the original study and a documented long-term downward trend in population average body temperature (linked to factors like reduced chronic inflammation) plausibly explain the gap between 98.6°F and more recent estimates." },
      { text: "Because Fahrenheit and Celsius thermometers give inherently different average readings", correct: false, explanation: "The scale used to display a reading doesn't change the actual physical temperature measured — the discrepancy is about measurement methodology and population differences across time, not the unit displayed." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting the traditional &quot;normal&quot; reading (baseline case)</h3>
      <div className="prose-p">
      37°C converts to Fahrenheit as: (37 × 9/5) + 32 = 66.6 + 32 = 98.6°F — confirming the commonly cited &quot;normal&quot; figure is the same number in both scales, just expressed differently, and explaining why 37°C and 98.6°F are so often quoted together as a pair.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Converting a commonly cited fever threshold (edge case / variation)</h3>
      <div className="prose-p">
      38°C converts to Fahrenheit as: (38 × 9/5) + 32 = 68.4 + 32 = 100.4°F — matching the commonly cited &quot;100.4°F&quot; fever reference point seen on many thermometer packaging inserts and health resources, confirming it&apos;s the same threshold, just expressed in the other scale.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Reading a digital thermometer that only displays one scale (real-world / applied case)</h3>
      <div className="prose-p">
      A US-purchased digital thermometer displays 101.5°F, and you want to know the Celsius equivalent to compare against a Celsius-based reference chart. Converting: °C = (101.5 − 32) × 5/9 = 69.5 × 5/9 ≈ 38.6°C — a reading modestly above the commonly cited 38°C (100.4°F) general fever threshold, illustrating how being comfortable converting between scales lets you use reference information regardless of which unit your thermometer happens to display.
      </div>

      <QuickCheck
      question="A thermometer reads 39°C. Approximately what is that in Fahrenheit, and how does it compare to the commonly cited 100.4°F fever threshold?"
      options={[
      { text: "About 102.2°F, which is noticeably above the commonly cited 100.4°F threshold", correct: true, explanation: "Correct. (39 × 9/5) + 32 = 70.2 + 32 = 102.2°F, meaningfully higher than the commonly cited 100.4°F general fever reference point." },
      { text: "About 98.6°F, matching the traditional 'normal' figure exactly", correct: false, explanation: "98.6°F corresponds to 37°C, not 39°C — this conversion is off by 2 full Celsius degrees, which is a meaningful difference at this scale." },
      { text: "About 39°F, since Celsius and Fahrenheit are close enough at body temperature to not need conversion", correct: false, explanation: "Celsius and Fahrenheit never become numerically interchangeable — they only share a numeric value at −40 degrees, nowhere near body temperature range." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Commonly cited body temperature reference points, Celsius and Fahrenheit"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-body-temperature-norms-explained-reference-scale.svg"
      altText="A vertical thermometer-style scale with four labeled reference bands from bottom to top: below 36 degrees Celsius (below 96.8 Fahrenheit) labeled below typical range, 36 to 37.5 degrees Celsius (96.8 to 99.5 Fahrenheit) labeled commonly cited normal range, 37.5 to 38 degrees Celsius (99.5 to 100.4 Fahrenheit) labeled low-grade elevated, and above 38 degrees Celsius (above 100.4 Fahrenheit) labeled commonly cited fever threshold."
      />
      <p>
      These bands are general reference points, not individualized medical thresholds — a specific person&apos;s normal baseline can sit meaningfully above or below the commonly cited range, which is exactly why tracking your own typical baseline is more informative than comparing a single reading against a population average alone.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating 98.6°F (37°C) as an exact, universal normal temperature for every individual.", fix: "Understand it as a rounded historical population average — individual baseline body temperature commonly varies by several tenths of a degree from person to person." },
      { mistake: "Comparing a Fahrenheit thermometer reading directly against a Celsius-based reference chart (or vice versa) without converting first.", fix: "Always convert to a shared scale before comparing — the standard formula (°F = °C × 9/5 + 32) applies to body temperature exactly as it does to any other Celsius-Fahrenheit conversion." },
      { mistake: "Assuming all thermometer types (oral, ear, forehead, underarm) read identically for the same underlying body temperature.", fix: "Different measurement sites read somewhat differently relative to core body temperature — use the reference range appropriate to your specific thermometer type, generally provided in its instructions." },
      ]}
      />
      <MisconceptionCallout
      myth="98.6°F is a precise, fixed normal temperature, and any deviation from it signals illness."
      reality={<p>98.6°F is a rounded average from a 19th-century population study, not an exact individual threshold. Normal body temperature varies by person, time of day, and measurement method — modern research suggests the true population average may run somewhat lower, and a single reading a few tenths of a degree away from 98.6°F is not inherently abnormal on its own.</p>}
      />

      <QuickCheck
      question="Why does body temperature naturally vary throughout a single day for the same healthy individual?"
      options={[
      { text: "It doesn't — a healthy person's body temperature is constant throughout the day", correct: false, explanation: "Body temperature follows a well-documented daily rhythm, typically varying by roughly 0.5°C (about 1°F) between its lowest point (usually early morning) and highest point (usually late afternoon or evening)." },
      { text: "Body temperature follows a natural daily rhythm tied to metabolic activity and the body's internal clock, typically lowest upon waking and highest in the late afternoon or evening", correct: true, explanation: "Correct. This normal daily fluctuation is why a single body temperature reading is best interpreted against a typical range rather than one fixed number, and why comparing readings taken at similar times of day is more meaningful." },
      { text: "Body temperature only changes due to illness, never as part of normal daily function", correct: false, explanation: "Daily fluctuation in body temperature is a normal physiological pattern present even in the complete absence of illness." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert a body temperature reading to Fahrenheit"
      fields={[
      { key: "celsius", label: "Temperature (°C)", defaultValue: 37 },
      ]}
      resultLabel="Fahrenheit equivalent"
      formula="celsiusToFahrenheit"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Know which scale your household thermometer displays, and keep the conversion formula (or this page) handy if you need to compare against a chart in the other scale.",
      "Treat 98.6°F / 37°C as a rough historical reference point, not a precise personal baseline — your own normal may sit a bit above or below it.",
      "Take temperature readings at a consistent time of day and with a consistent method when tracking changes, since normal daily fluctuation can otherwise look like a meaningful change.",
      "For any actual health concern or fever management decision, consult a licensed healthcare provider rather than relying on general reference numbers alone.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is normal body temperature in Celsius and Fahrenheit?", answer: "The commonly cited figure is 37°C (98.6°F), though this is a rounded historical population average — individual normal baseline temperature varies somewhat by person, time of day, and measurement method." },
      { question: "What temperature is considered a fever?", answer: "A commonly cited general threshold is approximately 38°C (100.4°F), though exact clinical definitions vary slightly by measurement method and health authority — check guidance specific to your thermometer type and situation." },
      { question: "How do you convert body temperature from Fahrenheit to Celsius?", answer: "Use the standard formula: °C = (°F − 32) × 5/9. For example, 100.4°F converts to (100.4 − 32) × 5/9 = 38°C." },
      { question: "Why do different sources give slightly different 'normal' body temperature numbers?", answer: "Because normal body temperature genuinely varies by individual, time of day, and measurement site (oral, ear, forehead, etc.), and because more recent research has questioned whether the traditional 98.6°F historical average still reflects the modern population precisely." },
      { question: "Does body temperature change during the day?", answer: "Yes — it typically follows a daily rhythm, running roughly 0.5°C (about 1°F) lower in early morning and higher in the late afternoon or evening, as a normal part of the body's internal clock." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
