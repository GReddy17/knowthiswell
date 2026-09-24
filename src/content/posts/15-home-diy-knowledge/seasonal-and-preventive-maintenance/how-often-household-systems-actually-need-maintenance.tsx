import React from 'react';
import { PostFrontmatter, QuizBankItem } from '@/types/post';
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
  title: "How Often Household Systems Actually Need Maintenance",
  category: "home-diy-knowledge",
  order: 40,
  subtopic: "seasonal-and-preventive-maintenance",
  tags: ["maintenance schedule", "preventive maintenance", "home upkeep", "HVAC filters", "water heater"],
  date: "2026-09-17",
  updated: "2026-09-24",
  lastReviewed: "2026-09-17",
  excerpt: "Maintenance intervals aren't guesses — they're set to the point on a wear curve where fixing something is still cheap, before it becomes a failure.",
  summary: "Manufacturers publish specific maintenance intervals (change this filter every 90 days, flush that tank every year) because most home systems degrade on a predictable, time-based curve, not a symptom-based one — by the time a problem is visible or audible, the cheap window to fix it has usually already closed.",
  sources: [
    { label: "U.S. Department of Energy — Home Energy Saver: Maintenance", url: "https://www.energy.gov/energysaver/maintaining-your-home" },
    { label: "Environmental Protection Agency — Indoor Air Quality and HVAC Maintenance", url: "https://www.epa.gov/indoor-air-quality-iaq" },
    { label: "National Fire Protection Association (NFPA) — Smoke Alarm Guidance", url: "https://www.nfpa.org/" },
  ],
  seeAlso: [
    "home-diy-knowledge/why-air-filters-need-regular-replacement",
    "home-diy-knowledge/why-gutters-need-regular-cleaning",
    "home-diy-knowledge/how-a-smoke-detector-actually-senses-smoke",
    "home-diy-knowledge/how-to-tell-if-a-roof-actually-needs-repair",
  ],
  glossary: [
    { term: "Wear curve", definition: "The predictable pattern by which a component's performance or reliability declines over time or use, independent of whether the decline is yet noticeable to the user." },
    { term: "Preventive maintenance", definition: "Scheduled servicing performed at fixed intervals to catch or prevent wear-related failure, rather than waiting for a visible symptom to trigger repair." },
    { term: "Failure threshold", definition: "The point at which a component's degraded condition causes it to stop functioning correctly or safely, rather than merely functioning less efficiently." },
    { term: "Sediment buildup", definition: "Mineral and debris accumulation inside a water-holding system (like a water heater tank) that reduces efficiency and can accelerate corrosion if not periodically flushed out." },
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

/** Quiz bank: feeds the end-of-article "Test yourself" quiz and the game (not rendered inline). */
export const quiz: QuizBankItem[] = [
  {"question": "How are maintenance intervals like \"every 90 days\" chosen?", "difficulty": "easy", "options": [{"text": "At the point where the part visibly fails", "correct": false, "explanation": "They're set well before that point."}, {"text": "At a point on the wear curve where fixing it is still cheap", "correct": true, "explanation": "Waiting for visible problems means you're already in the expensive zone."}, {"text": "At random", "correct": false, "explanation": "Manufacturers test wear rates to set them."}]},
  {"question": "About how long does a standard 1-inch pleated HVAC filter last in typical homes?", "difficulty": "easy", "options": [{"text": "About 60 to 90 days", "correct": true, "explanation": "Sooner with pets or heavy use."}, {"text": "About 2 years", "correct": false, "explanation": "It clogs long before that."}, {"text": "About 1 week", "correct": false, "explanation": "Typical homes get far longer than a week."}]},
  {"question": "What usually happens when a scheduled service is skipped?", "difficulty": "easy", "options": [{"text": "The cost is just delayed", "correct": false, "explanation": "It's usually multiplied, not just delayed."}, {"text": "The cost often grows as wear damages nearby parts too", "correct": true, "explanation": "Deferred wear tends to cascade."}, {"text": "Nothing, if the system still seems fine", "correct": false, "explanation": "Efficiency loss and wear are often invisible until failure."}]},
  {"question": "A house \"always has decent airflow,\" so the owner skips filter changes. What is happening that they can't feel?", "difficulty": "hard", "options": [{"text": "Nothing, because airflow is fine", "correct": false, "explanation": "Comfort changes slowly while costs rise."}, {"text": "The blower motor is drawing more power to push air through a clogging filter", "correct": true, "explanation": "Efficiency loss is invisible long before comfort drops."}, {"text": "The filter is cleaning itself", "correct": false, "explanation": "Filters load up with dust; they don't self-clean."}]},
  {"question": "A home on hard well water flushes its water heater once a year. Is that enough?", "difficulty": "hard", "options": [{"text": "Yes, once a year works everywhere", "correct": false, "explanation": "Hard water builds sediment faster than typical water."}, {"text": "Probably not; hard water builds sediment faster, so it may need more frequent flushing", "correct": true, "explanation": "Intervals assume typical conditions and should shorten for harsher ones."}, {"text": "Flushing is never needed with well water", "correct": false, "explanation": "Well water is often harder, which makes flushing more important."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Maintenance intervals are set to a point on a component's wear curve where fixing it is still cheap — not to the point where it starts visibly failing.",
          "A system that still 'seems fine' can already be well past its efficient service window; efficiency loss and internal wear are usually invisible until they cross a failure threshold.",
          "Skipping a scheduled service doesn't just delay a cost, it usually multiplies it — deferred wear tends to cascade into damage to adjacent parts, not just the original component.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Every mechanical or filtering system in a house wears down at a fairly predictable rate — an air filter clogs with dust, a water heater tank collects mineral sediment, a smoke detector&apos;s sensor and battery both age. Manufacturers test how long each part can go before that wear starts causing real problems, and the maintenance interval on the label (change every 90 days, flush every year) is set well before that point, not at it. Waiting until you can actually see or hear a problem usually means you&apos;ve already been operating in the expensive zone for a while.</div>}
        detailed={<div className="prose-p">The reason intervals are calendar-based rather than symptom-based comes down to how most home systems fail: gradually and invisibly, then suddenly. A clogged air filter doesn&apos;t announce itself — airflow drops in small increments, the blower motor works harder to compensate, and energy use climbs weeks or months before anyone notices reduced comfort. By the time restricted airflow is obvious, the <TermLink href="/home-diy-knowledge/why-some-rooms-are-always-hotter-or-colder">system</TermLink> may already be running the blower motor outside its efficient range, accelerating wear on a far more expensive part than the filter itself. This is the general shape of a <TermLink href="/home-diy-knowledge/how-often-household-systems-actually-need-maintenance">wear curve</TermLink>: performance degrades slowly and mostly unnoticed, then crosses a <TermLink href="/home-diy-knowledge/how-often-household-systems-actually-need-maintenance">failure threshold</TermLink> where the decline becomes sudden and visible. A published maintenance interval is simply the point manufacturers have determined sits safely before that threshold, for typical usage conditions — which is why heavier-than-typical use (more people in the house, pets, a well with hard water) shortens the safe interval, and light use can sometimes stretch it.</div>}
      />
      <FootnoteAside>&quot;Typical usage&quot; is doing real work in most published intervals — a household with pets or a large family generating more dust should treat a 90-day filter interval as a ceiling, not a target, and check monthly instead.</FootnoteAside>

      <p>
        This is also why preventive maintenance is cheaper in aggregate even though it means paying for service on something that isn&apos;t obviously broken: a $15 filter change is far cheaper than the blower motor repair it prevents, the same way a $10 anode rod check is far cheaper than replacing a water heater tank that corroded through from the inside.
      </p>

      <QuickCheck
        question="Why do manufacturers set maintenance intervals like '90 days' instead of just saying 'replace when it looks dirty'?"
        options={[
          { text: "Because most wear is gradual and invisible until it crosses a failure threshold, so waiting for a visible symptom usually means the cheap window has already closed", correct: true, explanation: "Correct. The calendar-based interval is chosen to sit safely before the point where wear becomes visible, audible, or damaging." },
          { text: "Because manufacturers want to sell more replacement parts regardless of actual need", correct: false, explanation: "While replacement parts are a revenue source, the intervals are derived from real wear-rate testing, and skipping them provably shortens the life of more expensive connected components." },
          { text: "Because a fixed schedule is easier to remember than checking for symptoms", correct: false, explanation: "Convenience is a side benefit, not the reason — the core reason is that visible symptoms in most home systems appear only after meaningful, often costly, wear has already occurred." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: HVAC air filter (baseline case)</h3>
      <p>
        A standard 1-inch pleated <TermLink href="/home-diy-knowledge/why-air-filters-need-regular-replacement">air filter</TermLink> is rated for roughly 60-90 days under typical household conditions. Dust loads the filter&apos;s surface gradually; airflow resistance climbs slowly enough that comfort barely changes at first, while the blower motor draws more power to push air through the increasingly clogged media. Replacing it on the 90-day mark (or sooner with pets or heavy use) keeps the system in its efficient operating range the whole time, rather than letting the blower quietly work overtime for weeks before anyone notices weaker airflow.
      </p>
      <QuickCheck
        question="An HVAC filter is changed every 90 days on schedule even though the house 'always seems to have decent airflow.' What is this maintenance actually preventing?"
        options={[
          { text: "The blower motor gradually working harder against rising airflow resistance as the filter clogs, well before that strain is noticeable as reduced comfort", correct: true, explanation: "Correct. The efficiency loss and motor strain begin long before the drop in airflow is subjectively noticeable." },
          { text: "Nothing meaningful, since the airflow feels fine the whole time regardless of filter age", correct: false, explanation: "Feeling fine isn't the same as running efficiently — the blower motor's added strain and energy cost accumulate well before comfort is affected." },
          { text: "Dust simply building up on visible surfaces around the house", correct: false, explanation: "The filter's job is airflow and air quality for the HVAC system itself, not general household dust — the risk being managed is mechanical strain on the blower motor." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Water heater sediment flush (edge case / variation)</h3>
      <div className="prose-p">
        A tank-style water heater is recommended for an annual flush to clear <TermLink href="/home-diy-knowledge/how-often-household-systems-actually-need-maintenance">sediment buildup</TermLink> — but a household on a well with notably hard water accumulates sediment faster than the &quot;typical municipal water&quot; assumption baked into that annual figure. In that variation, sticking to the standard yearly interval can let sediment insulate the bottom of the tank enough to reduce heating efficiency and, over years, contribute to premature tank corrosion — the interval needs to shift with the actual water hardness, not stay fixed at the generic number.
      </div>
      <QuickCheck
        question="A household on hard well water flushes their water heater on the standard 'once a year' schedule. What does the wear-curve concept suggest about this choice?"
        options={[
          { text: "The standard interval assumes typical water hardness, so harder water likely means sediment builds up faster and the safe interval should be shorter", correct: true, explanation: "Correct. Published intervals assume typical conditions; unusually hard water is exactly the kind of heavier-than-typical load that should shorten the safe interval." },
          { text: "Water hardness has no effect on sediment accumulation rate inside a tank", correct: false, explanation: "Water hardness (dissolved mineral content) is a primary driver of how fast sediment accumulates inside a water heater tank." },
          { text: "The annual interval is a strict minimum and flushing more often would provide no benefit", correct: false, explanation: "The interval is a starting assumption tied to typical conditions, not a fixed law — heavier mineral content is a real reason to flush more frequently." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Ignoring a smoke detector&apos;s low-battery chirp (real-world / applied case)</h3>
      <p>
        A smoke detector begins an intermittent low-battery chirp, and the homeowner mutes it by removing the battery entirely rather than replacing it, planning to &quot;deal with it later.&quot; This converts a scheduled, cheap maintenance action (a $2 battery swap) into an active safety gap with no built-in reminder — the chirp was the system&apos;s own preventive-maintenance signal, and disabling the alarm to silence it removes the only warning the household would otherwise get before the underlying risk (fire, in this case) actually occurs. This is the sharpest version of the wear-curve logic: some maintenance windows, if skipped, don&apos;t just cost more money later, they remove a safety margin entirely.
      </p>
      <QuickCheck
        question="Why is removing a smoke detector's battery to silence a low-battery chirp a worse choice than just replacing the battery?"
        options={[
          { text: "It doesn't just delay the maintenance, it disables the detector entirely, removing a real safety warning system with no built-in reminder to fix it later", correct: true, explanation: "Correct. Unlike a filter or a tank flush, this maintenance failure removes an active safety function rather than just accelerating mechanical wear." },
          { text: "It's functionally the same as replacing the battery, just delayed by a few days", correct: false, explanation: "It's not equivalent — pulling the battery leaves the detector fully non-functional indefinitely, with no chirp or reminder prompting a fix." },
          { text: "Smoke detectors don't actually rely on batteries for their core sensing function", correct: false, explanation: "Battery-powered and battery-backup smoke detectors both require power to run their sensor and alarm circuit — without it, the unit cannot detect or alert to smoke." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Why the maintenance point comes before the visible-problem point"
        type="flow"
        svgSrc="/diagrams/home-diy-knowledge-how-often-household-systems-actually-need-maintenance-flow.svg"
        altText="Diagram of a wear curve over time showing gradual, invisible decline, a maintenance point placed well before any visible symptom, and a failure threshold reached much later if maintenance is skipped, with the cost of repair rising sharply after the threshold."
      />
      <p>
        Follow the curve, not the calendar date alone — the maintenance point exists specifically because it sits before the visible-symptom point, and well before the failure threshold.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Waiting for a visible or audible symptom before servicing a system.", fix: "Follow the published calendar interval — by the time a symptom is noticeable, meaningful wear has usually already occurred." },
          { mistake: "Applying a 'typical use' interval to a household with heavier-than-typical conditions (pets, hard water, large family).", fix: "Shorten the interval to match the actual load, and check more often until you've established a real pattern for your household." },
          { mistake: "Silencing a maintenance-reminder alert (like a smoke detector chirp) instead of acting on it.", fix: "Treat the alert as the scheduled maintenance trigger it is — replace the part, don't disable the reminder." },
        ]}
      />
      <MisconceptionCallout
        myth="If a system still seems to be working fine, it doesn't need scheduled maintenance yet."
        reality={<p>Most home systems degrade gradually and invisibly before any problem becomes noticeable — a clogged filter, a sediment-filled tank, or an aging detector battery can all be well past their efficient service life while everything still &quot;seems fine&quot; day to day. Manufacturer-published maintenance intervals are deliberately set before that invisible decline becomes a visible or costly problem, not at the point symptoms actually appear. Waiting for a symptom usually means the cheap window to address the issue has already closed, and the eventual cost &#8212; whether it&apos;s a burned-out blower motor or a corroded tank &#8212; is typically far higher than the maintenance itself would have been.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Set recurring reminders for the highest-value quick wins: HVAC filter every 60-90 days, smoke/CO detector battery checks monthly with full replacement yearly, water heater flush annually.",
          "Adjust intervals upward in frequency for any system under heavier-than-typical load (pets, well water, large household, older equipment).",
          "Treat any maintenance-reminder alert (chirps, warning lights, indicator strips) as the scheduled action itself, not a nuisance to silence.",
          "Keep a simple written log (paper or phone note) of the last service date for each major system, since 'I think I did that a while ago' isn't a reliable interval tracker.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why do manufacturers give a maintenance interval instead of just saying 'service when needed'?", answer: "Because most wear is gradual and invisible until it crosses a failure threshold — by the time a symptom is noticeable, meaningful and often costly wear has usually already happened. The interval is set to sit safely before that point under typical conditions." },
          { question: "Is it safe to stretch a maintenance interval if a system still seems to be working fine?", answer: "Not reliably — 'seems fine' reflects only what's noticeable day to day, not the internal wear state of the component. Stretching a well-tested interval trades a small, known cost now for a larger, less predictable one later." },
          { question: "How do I know if my household needs shorter intervals than the standard recommendation?", answer: "Look for heavier-than-typical load: pets or a large household increase dust load on filters, hard or well water accelerates sediment in water heaters, and older equipment generally has less margin than new equipment at the same interval." },
          { question: "What's the cheapest, highest-impact maintenance to stay on top of?", answer: "HVAC filter changes and smoke/CO detector battery checks are typically the cheapest actions with the largest downside if skipped — a few dollars and minutes of effort against, respectively, an expensive blower motor repair or a real safety gap." },
          { question: "Does deferred maintenance actually cost more, or is that just conventional wisdom?", answer: "It's a documented pattern, not just conventional wisdom: deferred wear on one component (like a clogged filter straining a blower motor) tends to accelerate wear on adjacent, more expensive components, which is why preventive maintenance is consistently cheaper in aggregate than reactive repair." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
