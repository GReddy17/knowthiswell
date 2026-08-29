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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Why Battery Percentage Isn't a Straight Line",
  category: "technology-basics",
  order: 77,
  subtopic: "everyday-tech-curiosities",
  tags: ["battery percentage", "lithium-ion", "state of charge", "technology basics", "everyday tech"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "Battery percentage is an estimate read off a voltage curve, not a direct measurement — which is why it can stay steady for a long time, then drop fast near empty.",
  summary: "A phone's battery percentage isn't measured directly like water in a tank — it's estimated from the battery's voltage and current, translated through a calibrated curve, because a lithium-ion cell's voltage stays nearly flat through most of its charge and only drops sharply near empty, making the relationship between voltage and remaining charge fundamentally non-linear.",
  sources: [
    { label: "NIST — National Institute of Standards and Technology", url: "https://www.nist.gov/" },
    { label: "IEEE — Institute of Electrical and Electronics Engineers", url: "https://www.ieee.org/" },
    { label: "UL Solutions — Safety Science for Batteries and Electronics", url: "https://www.ul.com/" },
  ],
  seeAlso: [
    "technology-basics/why-your-phone-gets-hot",
    "technology-basics/how-airplane-mode-actually-works",
    "technology-basics/how-autocorrect-predicts-your-words",
  ],
  glossary: [
    { term: "State of charge", definition: "The estimated percentage of a battery's total usable capacity that remains, calculated rather than measured directly." },
    { term: "Coulomb counting", definition: "A method of estimating remaining battery charge by continuously tracking the current flowing in and out of the battery over time and adding it up." },
    { term: "Voltage curve", definition: "The graph of a battery cell's voltage plotted against its remaining charge, which for lithium-ion cells stays nearly flat through the middle of the charge range and drops steeply near both full and empty." },
    { term: "Calibration", definition: "The process of periodically correcting a battery's charge estimate against a known reference point, such as a full charge, to prevent small tracking errors from accumulating into a noticeably wrong percentage reading." },
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
          "Battery percentage isn't measured directly like water in a tank — it's an estimate calculated from voltage and current, translated through a calibrated curve specific to the battery's chemistry.",
          "A lithium-ion cell's voltage stays nearly flat through most of the charge range and only drops sharply near empty, which is exactly why the percentage can seem to sit steady for a long time and then fall fast near the end.",
          "Two devices both showing '50% battery' aren't reporting a directly comparable physical quantity — each is an estimate calibrated to that specific battery's own capacity and discharge curve.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A fuel gauge with a float sitting in a tank measures liquid directly — half a tank really is half the fuel. A battery percentage doesn&apos;t work that way. Instead, a small chip inside the device reads the battery&apos;s voltage, and because that voltage doesn&apos;t drop in a straight line as the battery empties, the chip has to translate the voltage reading into a percentage using a reference chart, not a direct measurement. Since that voltage stays fairly steady through most of the charge range and only falls sharply near the very end, the percentage can seem to hover for a long time and then drop quickly right before the phone shuts off.</div>}
        detailed={<div className="prose-p">This is a <strong>lookup via a calibrated reference curve</strong>, not a direct volumetric measurement. A lithium-ion cell&apos;s <TermLink href="/technology-basics/why-battery-percentage-isnt-linear">voltage curve</TermLink> — voltage plotted against remaining charge — is famously flat through the middle of its range and steep near both ends, an artifact of the cell&apos;s chemistry rather than a design flaw. To estimate <TermLink href="/technology-basics/why-battery-percentage-isnt-linear">state of charge</TermLink>, a phone&apos;s battery management chip combines that voltage reading with <TermLink href="/technology-basics/why-battery-percentage-isnt-linear">coulomb counting</TermLink> — continuously tallying the actual current flowing in and out over time — and maps the result through a stored calibration curve specific to that battery&apos;s chemistry and age. An edge case worth knowing: as a battery ages, its real voltage curve shifts slightly from the one the chip was originally calibrated against, and small coulomb-counting errors accumulate over many charge cycles, which is why devices periodically use a full charge or a full discharge as a fixed reference point to snap the estimate back into <TermLink href="/technology-basics/why-battery-percentage-isnt-linear">calibration</TermLink>.</div>}
      />
      <FootnoteAside>Charging speed follows a related non-linear pattern: most of a battery&apos;s capacity charges quickly during a constant-current phase, then charging deliberately slows during a constant-voltage phase near full, to avoid stressing the cell — which is a separate reason the last stretch to 100% often takes noticeably longer than the same-sized jump earlier in the charge.</FootnoteAside>
      <p>
        The flat-then-steep shape of the voltage curve is easiest to see by comparing how much charge is actually consumed over an equal percentage drop at two different points in the range.
      </p>
      <QuickCheck
        question="Why can a phone appear to sit at a stable percentage for a long stretch and then drop from a low number to shutdown surprisingly quickly?"
        options={[
          { text: "The battery is defective and losing capacity suddenly", correct: false, explanation: "This pattern is normal behavior for a healthy lithium-ion cell — its voltage curve is flat through the middle of the range and steep near empty, which the percentage estimate reflects." },
          { text: "The voltage curve is nearly flat through the middle of the charge range and drops sharply near empty, so the percentage estimate mirrors that same flat-then-steep shape", correct: true, explanation: "Correct. Because the percentage is estimated from voltage, and voltage itself barely changes through the middle of the range but falls quickly near empty, the reported percentage follows the same pattern." },
          { text: "The phone deliberately hides the true battery level until it's almost empty", correct: false, explanation: "There's no deliberate concealment — the reported number is the device's best real-time estimate at every point; it just isn't a linear one because the underlying voltage curve isn't linear either." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The drop from 100% to 80% feels slower than 20% to 0% (baseline case)</h3>
      <div className="prose-p">
        Under similar usage, the battery percentage can take noticeably longer to fall from 100% to 80% than it does to fall the last 20% to zero, even though both represent the same 20-percentage-point drop. This happens because the flat middle section of the voltage curve maps a comparatively large amount of actual charge consumption onto a small percentage change, while the steep section near empty maps a small amount of remaining charge onto a large swing in the reported percentage. The percentage number is doing its job accurately — it&apos;s just not a linear stand-in for elapsed time or energy used.
      </div>
      <QuickCheck
        question="Why does the same 20-percentage-point drop (100% to 80%, versus 20% to 0%) often represent very different amounts of real usage time?"
        options={[
          { text: "Because the underlying voltage curve is flat through the middle of the charge range and steep near empty, so equal percentage drops don't correspond to equal amounts of actual charge used", correct: true, explanation: "Correct. The percentage estimate mirrors the shape of the voltage curve, which is non-linear — a flat middle section and a steep end mean equal percentage steps aren't equal in real charge or time." },
          { text: "Because the phone secretly changes its power usage rate depending on the percentage shown", correct: false, explanation: "The non-linearity comes from how percentage is estimated from voltage, not from the device deliberately changing its power draw based on the displayed number." },
          { text: "Because percentage is rounded differently at different points in the range", correct: false, explanation: "Rounding plays no meaningful role here — the effect comes from the genuinely non-linear relationship between a lithium-ion cell's voltage and its remaining charge." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A sudden shutdown on an aging battery (edge case / variation)</h3>
      <div className="prose-p">
        An older battery can sometimes shut a device down unexpectedly at a percentage that still looks moderate, like 30%, rather than counting all the way down to zero. As a battery ages, its real capacity shrinks and its true voltage curve can drift slightly from the calibration curve the chip is estimating against, so accumulated small errors in the running estimate occasionally show up as a bigger-than-expected mismatch — usually corrected the next time the device goes through a full charge or discharge cycle, which lets the chip recalibrate against a known reference point again.
      </div>
      <QuickCheck
        question="Why might an aging battery occasionally shut a device down at a percentage that still looks moderate?"
        options={[
          { text: "The battery's real capacity and voltage curve have shifted with age, so the running percentage estimate can drift out of sync until the next full charge or discharge lets it recalibrate", correct: true, explanation: "Correct. Aging shifts a battery's true voltage curve away from its original calibration reference, and accumulated small estimation errors can surface as a mismatch that a full charge/discharge cycle corrects." },
          { text: "The percentage display is intentionally set to be inaccurate on older batteries", correct: false, explanation: "There's no intentional inaccuracy built in — the mismatch is a natural side effect of an aging battery's real behavior drifting from its stored calibration reference over time." },
          { text: "This only happens because of a software bug present in every device", correct: false, explanation: "This is a known, expected characteristic of aging lithium-ion cells and their calibration process, not a software defect specific to any one device." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Comparing &quot;50% battery&quot; across two different devices (real-world / applied case)</h3>
      <p>
        Two different devices both showing 50% battery aren&apos;t necessarily offering the same amount of remaining usable time, because each percentage is an estimate calibrated against that specific device&apos;s own battery capacity, chemistry, and discharge curve — not a universal, directly comparable unit of stored energy. A larger battery at 50% can hold far more actual charge than a smaller one at the same percentage, and even two similarly sized batteries can behave differently as one ages faster than the other. Judging remaining time by a device&apos;s own history and behavior is a more reliable read than comparing raw percentages across different devices.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Battery voltage curve vs. a truly linear percentage"
        type="comparison"
        svgSrc="/diagrams/technology-basics-why-battery-percentage-isnt-linear-voltage-curve.svg"
        altText="A line chart with reported battery percentage from 100 to 0 on the horizontal axis and cell voltage on the vertical axis, showing the real voltage curve staying nearly flat from 100% down to about 20% and then dropping steeply near 0%, compared against a straight dashed reference line that would represent a truly linear relationship."
      />
      <p>
        The gap between the real curve and the dashed straight-line reference is exactly why the reported percentage doesn&apos;t behave like a simple, evenly ticking countdown.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming 50% battery means exactly half the total charge in a strict straight-line sense.", fix: "Battery percentage is an estimate derived from a non-linear voltage curve, not a direct linear measurement of remaining energy." },
          { mistake: "Panicking when a battery drops rapidly near the low end.", fix: "Fast percentage drops near empty are expected behavior for lithium-ion cells, whose voltage falls steeply in that range — not necessarily a sign of a failing battery." },
          { mistake: "Comparing battery percentage across two different devices as if it were a directly comparable unit of energy.", fix: "Each device's percentage is calibrated to its own battery's capacity and discharge curve, so the same number doesn't guarantee the same remaining usable time on a different device." },
          { mistake: "Assuming charging speed is constant across the whole percentage range.", fix: "Charging is typically fastest through the middle of the range and deliberately slows near full during the constant-voltage phase, another non-linear pattern related to the same battery chemistry." },
        ]}
      />
      <MisconceptionCallout
        myth="Battery percentage is a direct, straight-line measurement — 50% is exactly half the real charge, just like a fuel gauge float."
        reality={<p>Battery percentage is an estimate, calculated from the battery&apos;s voltage and current and translated through a calibrated reference curve — not a direct physical measurement. A lithium-ion cell&apos;s voltage stays nearly flat through most of the charge range and only drops sharply near empty, so the percentage mirrors that same non-linear shape rather than counting down in even, equal-sized steps.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Don't be alarmed by rapid percentage drops near very low battery — that's expected voltage-curve behavior, not necessarily a fault.",
          "If percentage readings seem to be drifting or jumping unexpectedly, let the battery run through an occasional full charge cycle to help it recalibrate.",
          "Judge remaining usable time by your own device's history rather than comparing raw percentage numbers across different devices.",
          "Treat a sudden shutdown at a moderate-looking percentage on an older battery as a sign of gauge drift or wear, not an immediate emergency.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why does my battery drop fast at the end?", answer: "A lithium-ion cell's voltage stays fairly flat through most of its charge range and falls sharply only near empty, and since percentage is estimated from that voltage, the reported number follows the same steep drop near the end." },
          { question: "Is battery percentage accurate?", answer: "It's an accurate estimate, not a direct measurement — it's calculated from voltage and current readings translated through a calibrated curve, and can drift slightly over time on an aging battery until recalibrated." },
          { question: "Why does my phone die at 20% sometimes?", answer: "This is more common on an aging battery, where the real voltage curve has shifted from the stored calibration reference, causing the running estimate to occasionally overstate remaining charge until the next full charge or discharge corrects it." },
          { question: "Why does battery percentage jump around?", answer: "Small errors in ongoing current tracking (coulomb counting) can accumulate between calibration points, especially on an older battery, causing the estimate to briefly jump rather than count down smoothly." },
          { question: "Does 50% battery really mean half the total charge?", answer: "Not in a strict straight-line sense. It's an estimate based on a non-linear voltage curve, so 50% doesn't correspond to exactly half the same amount of usable time as, say, the drop from 100% to 50% did." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
