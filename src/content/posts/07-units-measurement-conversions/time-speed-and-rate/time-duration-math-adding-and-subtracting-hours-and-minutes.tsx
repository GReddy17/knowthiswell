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
  title: "Time-Duration Math (Adding/Subtracting Hours & Minutes)",
  category: "units-measurement-conversions",
  order: 39,
  subtopic: "time-speed-and-rate",
  tags: [
    "time duration",
    "hours and minutes",
    "borrowing",
    "base-60",
    "clock arithmetic",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Clock time is a base-60 system hiding inside a world of base-10 arithmetic — which is exactly why subtracting hours and minutes trips people up who are otherwise fine at subtraction.",
  summary: "Adding and subtracting durations expressed as hours and minutes requires carrying or borrowing in base 60 (60 minutes to an hour) instead of the base 10 used for ordinary number subtraction, so a minutes column that goes negative has to borrow a full 60 minutes from the hours column, not 10.",
  sources: [
    { label: "NIST — Time and Frequency Division: What Time Is It?", url: "https://www.nist.gov/pml/time-and-frequency-division" },
    { label: "Encyclopaedia Britannica — Sexagesimal (base-60) Number System", url: "https://www.britannica.com/science/sexagesimal-number-system" },
  ],
  seeAlso: [
    "units-measurement-conversions/twelve-hour-vs-24-hour-time-explained",
    "units-measurement-conversions/understanding-work-rate-and-time-problems",
    "math-numbers/place-value-and-number-systems",
  ],
  glossary: [
    {"term":"Base-60 (sexagesimal) system","definition":"A number system using 60 as its base, inherited from ancient Babylonian mathematics, still used today for measuring minutes within an hour and seconds within a minute."},
    {"term":"Borrowing","definition":"The subtraction technique of taking a unit from the next-higher place value and converting it into the current place's base when a direct subtraction would go negative — 60 minutes in time math, 10 in ordinary decimal subtraction."},
    {"term":"Duration","definition":"The length of an elapsed time interval, found by subtracting a start time from an end time."},
    {"term":"Decimal hours","definition":"A duration expressed as a single number with a fractional part (like 2.5 hours) rather than separate hours-and-minutes components, used for payroll and scheduling math."},
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
      "Minutes and seconds run in base 60, not base 10 — which is why subtracting clock times requires borrowing a full 60 minutes from the hours column, not 10, whenever the minutes subtraction would go negative.",
      "Adding durations works the same way in reverse: whenever a minutes sum reaches 60 or more, subtract 60 from the minutes and carry 1 to the hours column.",
      "Converting to decimal hours (hour + minutes/60) sidesteps the base-60 borrowing entirely and is what most payroll and scheduling software actually does internally, even when it displays hours and minutes to the user.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Subtracting 2 hours 45 minutes from 5 hours 20 minutes looks like ordinary subtraction, but 20 minus 45 goes negative — you can&apos;t take 45 minutes from only 20. The fix is <TermLink href="/units-measurement-conversions/time-duration-math-adding-and-subtracting-hours-and-minutes">borrowing</TermLink>: take 1 hour from the 5, turning it into 4, and add that borrowed hour&apos;s worth — 60 minutes — to the 20, making 80. Now 80 minus 45 works cleanly: 35 minutes. Combined with the 4 remaining hours minus 2, the answer is 2 hours 35 minutes.</div>}
      detailed={<div className="prose-p">This borrowing step feels unfamiliar because ordinary subtraction borrows in base 10 — when a ones-column subtraction would go negative, you borrow 10 from the tens column. Clock time uses a <TermLink href="/units-measurement-conversions/time-duration-math-adding-and-subtracting-hours-and-minutes">base-60 (sexagesimal) system</TermLink> for its minutes-within-an-hour and seconds-within-a-minute components (a structure inherited from ancient Babylonian mathematics), so a borrow from the hours column is worth 60 minutes, not 10. The mechanical process is identical to decimal borrowing — take one unit from the next-higher place, convert it into the current place&apos;s base, add it in — the only thing that changes is the conversion rate, and forgetting that difference is exactly where most time-math errors happen.</div>}
      />
      <FootnoteAside>The reason clocks use base 60 in the first place traces back roughly 4,000 years to Babylonian mathematics, which favored 60 because it divides evenly by an unusually large number of small integers (1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30) — making fractions like a third or a quarter of an hour land on whole numbers of minutes, a convenience base 10 doesn&apos;t offer nearly as often.</FootnoteAside>

      <p>
      Once the borrow-60-instead-of-10 adjustment is automatic, duration subtraction stops being a special case and becomes exactly the subtraction most people already know how to do.
      </p>

      <QuickCheck
      question="Why can't you subtract 2h 45m from 5h 20m by just subtracting the minutes and hours columns separately (20−45 and 5−2)?"
      options={[
      { text: "Because time subtraction genuinely can't be done by hand and requires a calculator", correct: false, explanation: "Time subtraction can absolutely be done by hand — it just needs a borrowing step when the minutes column would go negative, the same principle as ordinary column subtraction." },
      { text: "Because 20 minus 45 goes negative, requiring a 'borrow' of 60 minutes (1 full hour) from the hours column before the minutes subtraction can be completed, exactly like borrowing 10 in decimal subtraction", correct: true, explanation: "Correct. Any subtraction where the smaller place's top number is less than the number being subtracted needs a borrow — the only difference from ordinary subtraction is that a time-math borrow is worth 60, since minutes run in base 60." },
      { text: "Because hours and minutes are actually two completely separate measurements with no mathematical relationship", correct: false, explanation: "Hours and minutes are directly related (60 minutes = 1 hour) — that fixed relationship is exactly what makes the borrow-60 rule work, the same way the fixed 10s relationship between decimal place values makes ordinary borrowing work." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Subtracting durations with a borrow (baseline case)</h3>
      <div className="prose-p">
      5 hours 20 minutes minus 2 hours 45 minutes: since 20 &lt; 45, borrow 1 hour from the 5 (leaving 4) and add 60 minutes to the 20, making 80. Now: 80 − 45 = 35 minutes, and 4 − 2 = 2 hours. Final answer: 2 hours 35 minutes.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Adding durations that carry past 60 minutes (edge case / variation)</h3>
      <div className="prose-p">
      Adding 3 hours 40 minutes and 2 hours 35 minutes: add the minutes first, 40 + 35 = 75. Since 75 is 60 or more, subtract 60 (75 − 60 = 15 minutes) and carry 1 hour to the hours column. Add the hours: 3 + 2 + 1 (carried) = 6 hours. Final answer: 6 hours 15 minutes — the mirror-image operation of borrowing, carrying a full 60 forward instead of pulling 60 back.
      </div>

      <QuickCheck
      question="Adding 1h 50m and 0h 25m, someone gets 1h 75m as their final answer. What's the error?"
      options={[
      { text: "Nothing — 1h 75m is a perfectly valid way to express this duration", correct: false, explanation: "75 minutes is more than a full hour (60 minutes), so it needs to be carried into the hours column — 1h 75m isn't a properly simplified duration, the same way '1 point 15' wouldn't be a properly simplified base-10 number if the ones place could only hold single digits." },
      { text: "The 75 minutes needs to be split: subtract 60 to get 15 minutes remaining, and carry the extra 1 hour into the hours column, giving a correctly simplified 2h 15m", correct: true, explanation: "Correct. Any minutes total of 60 or more must be carried into the hours column exactly like carrying in ordinary addition — the final answer here is 2 hours 15 minutes, not 1 hour 75 minutes." },
      { text: "The original addition itself was set up wrong and needs to be redone from scratch", correct: false, explanation: "The addition (50 + 25 = 75) was done correctly — the only missing step is carrying the excess 60 minutes into the hours column to fully simplify the result." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Calculating a work shift&apos;s length using decimal hours (real-world / applied case)</h3>
      <div className="prose-p">
      A shift starts at 9:15 AM and ends at 5:40 PM (17:40 in 24-hour time). Converting both to decimal hours sidesteps borrowing entirely: clock-in is 9 + 15/60 = 9.25 decimal hours, clock-out is 17 + 40/60 ≈ 17.667 decimal hours. Subtracting normally: 17.667 − 9.25 ≈ 8.417 decimal hours, which converts back to 8 hours and 0.417 × 60 ≈ 25 minutes — an 8-hour, 25-minute shift, calculated with ordinary decimal subtraction instead of hand-tracking a borrow.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Borrowing 60 minutes from the hours column"
      type="flow"
      svgSrc="/diagrams/units-measurement-conversions-time-duration-math-adding-and-subtracting-hours-and-minutes-borrow.svg"
      altText="A subtraction diagram showing 5 hours 20 minutes minus 2 hours 45 minutes, where 45 minutes cannot be subtracted from 20 minutes directly, so 1 hour is borrowed from the 5 hours and converted into 60 minutes, making 80 minutes, then 45 is subtracted from 80 to leave 35 minutes, and 1 hour is subtracted from the remaining 4 hours to leave 2 hours, giving a final result of 2 hours 35 minutes"
      />
      <p>
      The borrowed hour converts into exactly 60 extra minutes, never 10 — that single substitution is the entire difference between time-duration subtraction and the ordinary decimal subtraction most people learned first.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Borrowing 10 minutes (the decimal habit) instead of 60 when a time subtraction goes negative.", fix: "Always borrow exactly 60 minutes for 1 hour — time math runs in base 60 for the minutes place, never base 10." },
      { mistake: "Leaving a minutes total of 60 or more uncarried after addition (writing '6h 75m' instead of '7h 15m').", fix: "Any minutes sum of 60 or more must be reduced by 60 with 1 hour carried forward, the same as carrying a 1 in decimal addition." },
      { mistake: "Treating a decimal hours value like 8.5 as '8 hours 50 minutes' instead of '8 hours 30 minutes'.", fix: "The decimal part of decimal hours is a fraction of 60 minutes, not a direct minutes count — multiply the decimal by 60 (0.5 × 60 = 30) to get the actual minutes." },
      ]}
      />
      <MisconceptionCallout
      myth="8.5 hours means 8 hours and 50 minutes, since the .5 looks like it should map directly onto the minutes."
      reality={<p>Decimal hours express the fractional part as a fraction of 60 minutes, not as a direct minutes count. 8.5 hours means 8 hours plus 0.5 of an hour, and 0.5 × 60 = 30 minutes — so 8.5 hours is 8 hours 30 minutes, not 8 hours 50 minutes. The confusion comes from decimal intuition (where .5 often reads as &apos;halfway between 0 and 100&apos; in percentage terms) colliding with the base-60 minutes system underneath.</p>}
      />

      <QuickCheck
      question="Converting 6.25 hours to hours and minutes, what's the correct minutes value?"
      options={[
      { text: "25 minutes, taken directly from the .25", correct: false, explanation: "The decimal .25 is a fraction of an hour (60 minutes), not a direct minutes reading — 0.25 needs to be multiplied by 60, not read off as-is." },
      { text: "15 minutes, since 0.25 × 60 = 15", correct: true, explanation: "Correct. 6.25 hours = 6 hours + 0.25 of an hour, and 0.25 × 60 = 15 minutes, giving 6 hours 15 minutes total." },
      { text: "60 minutes, since any decimal hour value rounds up to a full additional hour", correct: false, explanation: "0.25 of an hour is a quarter-hour, well short of a full additional 60-minute hour — this would badly overstate the actual duration." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Find the duration between two clock times (in minutes)"
      fields={[
      { key: "startHour", label: "Start hour (0-23)", defaultValue: 9 },
      { key: "startMinute", label: "Start minute", defaultValue: 15 },
      { key: "endHour", label: "End hour (0-23)", defaultValue: 17 },
      { key: "endMinute", label: "End minute", defaultValue: 40 },
      ]}
      resultLabel="Duration (total minutes)"
      formula="durationMinutesBetweenClockTimes"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "When subtracting and the minutes column would go negative, borrow exactly 60 minutes (1 hour) from the hours column before subtracting.",
      "When adding and the minutes column reaches 60 or more, subtract 60 and carry 1 hour forward.",
      "For payroll or spreadsheet math, convert clock times to decimal hours (hour + minutes/60) first, to avoid manual borrowing entirely.",
      "When converting a decimal hours value back to minutes, multiply the decimal part by 60 — don't read the digits directly as minutes.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do you subtract time durations with hours and minutes?", answer: "If the minutes being subtracted are larger than the minutes you're subtracting from, borrow 1 hour (60 minutes) from the hours column, add it to the minutes, then subtract normally in both columns." },
      { question: "How do you add hours and minutes together?", answer: "Add the minutes columns and the hours columns separately. If the minutes total is 60 or more, subtract 60 from it and carry 1 extra hour into the hours total." },
      { question: "Why is time math done in base 60 instead of base 10?", answer: "Because minutes-within-an-hour and seconds-within-a-minute use a sexagesimal (base-60) system inherited from ancient Babylonian mathematics — 60 divides evenly by many small numbers (2, 3, 4, 5, 6, 10, 12...), which made it convenient for expressing common time fractions as whole numbers." },
      { question: "How do you convert decimal hours to hours and minutes?", answer: "Keep the whole-number part as hours. Multiply the decimal (fractional) part by 60 to get the minutes. Example: 8.417 hours = 8 hours + (0.417 × 60 ≈ 25) minutes = 8 hours 25 minutes." },
      { question: "What's the easiest way to calculate a work shift's length?", answer: "Convert both the clock-in and clock-out times to decimal hours (hour + minutes/60), subtract normally, then convert the result back to hours and minutes if needed — this avoids manual borrowing across the 60-minute boundary." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
