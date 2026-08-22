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
  title: "How the Body Regulates Temperature (Everyday Framing)",
  category: "health-body-basics",
  order: 44,
  subtopic: "body-basics-curiosities",
  tags: ["body temperature", "thermoregulation", "fever basics", "homeostasis"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "\"98.6°F\" is a population average, not a fixed number every healthy body must hit — normal body temperature actually spans a real range and shifts through the day.",
  summary: "The body maintains its core temperature within a tightly controlled range through a feedback system centered in the hypothalamus, which triggers sweating and blood-vessel dilation to cool down or shivering and blood-vessel constriction to warm up — and the commonly cited '98.6°F' figure is a 19th-century population average, not a fixed target every healthy individual matches exactly.",
  sources: [
    { label: "Mayo Clinic — What is a normal body temperature?", url: "https://www.mayoclinic.org/first-aid/first-aid-fever/basics/art-20056685" },
    { label: "CDC — About Body Temperature", url: "https://www.cdc.gov/" },
    { label: "NIH MedlinePlus — Body temperature norms", url: "https://medlineplus.gov/ency/article/001982.htm" },
  ],
  seeAlso: [
    "health-body-basics/understanding-fever-whats-actually-happening",
    "units-measurement-conversions/celsius-vs-fahrenheit-the-conversion-formula",
    "units-measurement-conversions/body-temperature-norms-explained",
  ],
  glossary: [
    {"term":"Hypothalamus","definition":"A small region of the brain that acts as the body's thermostat, comparing current temperature signals against a set point and triggering responses (sweating, shivering) to correct any deviation."},
    {"term":"Thermoregulation","definition":"The body's overall process of maintaining a stable internal (core) temperature despite changes in the external environment or internal heat production."},
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
      <strong>This entry is general health literacy, not medical advice.</strong> If you&apos;re concerned about a specific temperature reading for yourself or someone else, contact a doctor.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "The body maintains core temperature through a feedback loop centered in the hypothalamus, which triggers sweating/vasodilation to cool down and shivering/vasoconstriction to warm up.",
      "\"98.6°F\" (37°C) is a 19th-century population average, not a fixed universal target — healthy individual body temperature commonly ranges from roughly 97°F to 99°F (about 36.1°C to 37.2°C).",
      "Body temperature naturally varies through the day (lowest in early morning, highest in late afternoon/evening) and by measurement method — oral, ear, and armpit readings aren't identical.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Your body works to keep its internal temperature inside a narrow range regardless of how hot or cold it is outside. When you get too warm, blood vessels near the skin widen and sweat glands activate, both of which release heat. When you get too cold, blood vessels narrow to conserve heat near your core, and muscles shiver to generate extra heat through movement. This whole feedback loop is directed by a small brain region called the <TermLink href="/health-body-basics/how-the-body-regulates-temperature-everyday-framing">hypothalamus</TermLink>, which functions much like a thermostat.</div>}
      detailed={<div className="prose-p"><TermLink href="/health-body-basics/how-the-body-regulates-temperature-everyday-framing">Thermoregulation</TermLink> works as a continuous negative-feedback system: temperature sensors throughout the skin and internal organs send signals to the hypothalamus, which compares the current reading against an internal set point and activates corrective responses whenever there&apos;s a deviation. The commonly cited &quot;normal&quot; temperature of 98.6°F (37°C) comes from a large 19th-century study by German physician Carl Wunderlich, averaged across many people — modern studies using more precise instruments have found the real healthy population range runs closer to about 97°F to 99°F, and that any single healthy person&apos;s own baseline can sit anywhere within that band and still be entirely normal for them.</div>}
      />
      <FootnoteAside>Body temperature also follows a daily rhythm called the circadian temperature cycle — for most people it&apos;s lowest in the early morning hours (around 4-6 AM) and highest in the late afternoon or evening, a swing of roughly 0.5-1°F (about 0.3-0.6°C) that has nothing to do with illness.</FootnoteAside>

      <p>
      Because &quot;normal&quot; is a range, not a single fixed number, a reading a bit above or below 98.6°F on its own isn&apos;t automatically meaningful — context (measurement method, time of day, how the person feels) matters as much as the number itself.
      </p>

      <QuickCheck
      question="Someone measures their oral temperature at 97.4°F and worries something is wrong because it's below '98.6.' What's the most accurate response?"
      options={[
      { text: "97.4°F is likely abnormally low and needs immediate medical attention", correct: false, explanation: "97.4°F falls within the commonly cited healthy range (roughly 97°F to 99°F) — a reading below 98.6°F alone isn't a sign of a problem." },
      { text: "97.4°F likely falls within the normal healthy range, since '98.6°F' is a population average, not a fixed target every individual must match exactly", correct: true, explanation: "Correct. Individual baseline body temperature varies, and 97.4°F sits comfortably inside the commonly cited normal band of roughly 97°F to 99°F." },
      { text: "Any reading that isn't exactly 98.6°F indicates a measurement error, not a real temperature", correct: false, explanation: "Body temperature genuinely varies between individuals and across the day — a reading other than exactly 98.6°F is not evidence of a faulty measurement." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting a normal reading between scales (baseline case)</h3>
      <div className="prose-p">
      A reading of 37°C converts to Fahrenheit as (37 × 9/5) + 32 = 98.6°F — the traditional &quot;average&quot; figure. A reading of 36.5°C converts to (36.5 × 9/5) + 32 = 97.7°F, comfortably within the normal range even though it&apos;s below the commonly quoted average.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The daily rhythm shifting a single person&apos;s own readings (edge case / variation)</h3>
      <div className="prose-p">
      The same healthy person measures 97.6°F at 6 AM and 98.9°F at 6 PM on the same day, with no illness involved — a normal reflection of the roughly 0.5-1°F daily circadian swing, not two contradictory measurements of &quot;true&quot; body temperature.
      </div>

      <QuickCheck
      question="Why might the same healthy person show meaningfully different temperature readings at 6 AM versus 6 PM?"
      options={[
      { text: "Because one of the two measurements must be a device error", correct: false, explanation: "This variation is a normal, well-documented daily pattern (the circadian temperature rhythm), not an indication of faulty equipment." },
      { text: "Because body temperature naturally follows a daily rhythm, typically lowest in early morning and highest in late afternoon/evening, independent of illness", correct: true, explanation: "Correct. This circadian variation is a normal physiological pattern, which is part of why a single isolated reading needs context to interpret." },
      { text: "Because oral thermometers become less accurate as the day goes on", correct: false, explanation: "Thermometer accuracy doesn't degrade over the course of a day — the variation reflects a real physiological rhythm in the body itself." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why measurement method changes the number (real-world / applied case)</h3>
      <div className="prose-p">
      A parent takes a child&apos;s temperature with an ear (tympanic) thermometer and gets a different number than an armpit (axillary) reading taken minutes earlier — both devices can be accurate for their own method, but oral, ear, rectal, and armpit measurements each have their own typical offset from each other (rectal and ear readings commonly run somewhat higher than oral, and armpit readings commonly run somewhat lower). Comparing readings from two different methods as if they were interchangeable can make a normal temperature look like a meaningful change when it&apos;s actually just a difference in measurement site.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The hypothalamus as a thermostat: cooling and warming responses"
      type="flow"
      svgSrc="/diagrams/health-body-basics-how-the-body-regulates-temperature-everyday-framing-thermostat-loop.svg"
      altText="A feedback loop diagram. Center: the hypothalamus, labeled as the body's thermostat, comparing sensed temperature to a set point. Left branch, triggered when too warm: sweating and blood vessels widening near the skin, both releasing heat. Right branch, triggered when too cold: shivering and blood vessels narrowing near the skin, both conserving or generating heat. Arrows loop back from both branches to the hypothalamus, showing continuous feedback."
      />
      <p>
      Both branches of the loop are corrective responses aimed at pulling the body&apos;s temperature back toward its internal set point, whether the deviation is toward too warm or too cold.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating 98.6°F as the one correct temperature every healthy person must hit.", fix: "Remember it's a population average from a 19th-century study — individual normal baselines commonly range from about 97°F to 99°F." },
      { mistake: "Comparing readings from two different measurement methods (oral vs. ear vs. armpit) as if they were directly interchangeable.", fix: "Stick to one measurement method when tracking changes over time, since each site has its own typical offset." },
      { mistake: "Panicking over a single reading without considering time of day or measurement method.", fix: "Consider the daily temperature rhythm and measurement site before treating one number as alarming on its own." },
      ]}
      />
      <MisconceptionCallout
      myth="A body temperature of anything other than exactly 98.6°F means something is wrong."
      reality={<p>98.6°F (37°C) is a historical population average, not a fixed universal set point. Healthy individual baseline temperature commonly spans roughly 97°F to 99°F, and even a single healthy person&apos;s own reading naturally shifts by about half a degree to a full degree Fahrenheit across the day due to the circadian temperature rhythm. A reading a bit above or below 98.6°F, on its own, is not evidence of illness.</p>}
      />

      <QuickCheck
      question="What is the core physiological role of the hypothalamus in temperature regulation?"
      options={[
      { text: "It generates heat directly through its own metabolism to warm the entire body", correct: false, explanation: "The hypothalamus doesn't generate body heat itself — it acts as a control center that triggers other responses (like shivering or sweating) elsewhere in the body." },
      { text: "It compares sensed body temperature against an internal set point and triggers corrective responses like sweating/vasodilation (cooling) or shivering/vasoconstriction (warming)", correct: true, explanation: "Correct. This thermostat-like feedback function is the central mechanism behind how the body keeps core temperature within a stable range." },
      { text: "It only responds to temperature changes in the surrounding air, not the body's own internal temperature", correct: false, explanation: "The hypothalamus responds primarily to signals about the body's own internal (core) temperature, in addition to some skin-temperature input — not solely to ambient air temperature." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert a Celsius body-temperature reading to Fahrenheit"
      fields={[
      { key: "celsius", label: "Temperature (°C)", defaultValue: 37, step: 0.1 },
      ]}
      resultLabel="Temperature (°F)"
      formula="celsiusToFahrenheit"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Learn your own typical baseline temperature when healthy, rather than assuming 98.6°F is your personal normal.",
      "Use the same measurement method (oral, ear, etc.) consistently when tracking changes over time.",
      "Factor in time of day — a reading taken in the evening is naturally higher than one taken first thing in the morning.",
      "Contact a doctor for guidance on any specific temperature reading that concerns you, rather than relying on the 98.6°F figure alone.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Is 98.6°F really 'normal' body temperature?", answer: "It's a commonly cited average from a 19th-century study, not a fixed number every healthy person matches exactly. Healthy individual body temperature commonly ranges from about 97°F to 99°F." },
      { question: "Why does body temperature change throughout the day?", answer: "It follows a natural daily (circadian) rhythm, typically lowest in the early morning and highest in the late afternoon or evening — a normal swing of roughly 0.5 to 1°F unrelated to illness." },
      { question: "Do oral, ear, and armpit thermometers give the same reading?", answer: "No — different measurement sites commonly have their own typical offset from each other. It's best to use one consistent method when tracking your own temperature over time." },
      { question: "What part of the body controls temperature regulation?", answer: "The hypothalamus, a small region of the brain, acts as the body's thermostat, triggering responses like sweating or shivering to keep core temperature within a stable range." },
      { question: "When should I be concerned about a body temperature reading?", answer: "This depends on the specific number, how it was measured, and other symptoms — a doctor is the right resource to interpret a specific reading for yourself or someone else." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
