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
  title: "Leap Years & Calendar Math",
  category: "units-measurement-conversions",
  order: 37,
  subtopic: "time-speed-and-rate",
  tags: [
    "leap year",
    "calendar math",
    "Gregorian calendar",
    "solar year",
    "February 29",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A calendar year of 365 days is about a quarter-day shorter than Earth's actual trip around the sun — leap years exist purely to correct that accumulating gap.",
  summary: "Earth takes approximately 365.2422 days to orbit the sun, not a clean 365, so a calendar using exactly 365 days every year would drift out of sync with the seasons — leap years add a corrective extra day roughly every 4 years, with a further century-based exception to keep the correction from overshooting.",
  sources: [
    { label: "NIST — Time and Frequency Division: Leap Years", url: "https://www.nist.gov/pml/time-and-frequency-division" },
    { label: "U.S. Naval Observatory — Astronomical Applications: The Length of the Year", url: "https://www.cnmoc.usff.navy.mil/Our-Commands/United-States-Naval-Observatory/" },
    { label: "Encyclopaedia Britannica — Gregorian Calendar", url: "https://www.britannica.com/science/Gregorian-calendar" },
  ],
  seeAlso: [
    "units-measurement-conversions/time-duration-math-adding-and-subtracting-hours-and-minutes",
    "units-measurement-conversions/daylight-saving-time-explained",
    "math-numbers/roman-numerals-explained",
  ],
  glossary: [
    {"term":"Leap year","definition":"A calendar year with an extra day (February 29) added to keep the calendar synchronized with Earth's actual orbital period around the sun."},
    {"term":"Solar year (tropical year)","definition":"The actual time Earth takes to complete one orbit relative to the seasons — approximately 365.2422 days, not a whole number."},
    {"term":"Gregorian calendar","definition":"The calendar system in near-universal civil use today, refined in 1582 specifically to fix leap-year drift left uncorrected by the earlier Julian calendar."},
    {"term":"Century exception rule","definition":"The Gregorian calendar's additional leap-year rule: century years (1900, 2000, 2100...) are leap years only if divisible by 400, correcting for the leftover drift a simple every-4-years rule would still accumulate."},
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
      "Earth's real orbital period is about 365.2422 days, not exactly 365 — leap years exist to correct the roughly quarter-day-per-year gap that would otherwise accumulate.",
      "The basic rule (add a day every 4 years) overcorrects slightly, so the Gregorian calendar adds a refinement: century years are leap years only if divisible by 400 — which is why 2000 was a leap year but 1900 and 2100 are not.",
      "Without leap years, the calendar would drift roughly one full day out of sync with the seasons every 4 years, eventually putting winter dates in the middle of summer over a long enough timescale.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A calendar year is 365 days, but Earth actually takes about 365.2422 days to go around the sun once — roughly a quarter day longer. If the calendar just ignored that extra quarter day every year, after four years the calendar would be off from the real seasonal cycle by about a full day, and the gap would keep growing. A <TermLink href="/units-measurement-conversions/leap-years-and-calendar-math">leap year</TermLink> adds one extra day (February 29) roughly every 4 years to correct for that buildup, keeping the calendar and the actual seasons lined up.</div>}
      detailed={<div className="prose-p">The simple &quot;every 4 years&quot; rule (year divisible by 4 is a leap year) is actually a slight overcorrection — it assumes the extra drift is exactly 0.25 days per year, but the real figure is 0.2422 days, a small but real difference. Over centuries, that overcorrection would itself accumulate into a new drift in the opposite direction. The <TermLink href="/units-measurement-conversions/leap-years-and-calendar-math">Gregorian calendar</TermLink>, introduced in 1582 specifically to fix this leftover error in the older Julian calendar, adds a second layer of correction: century years (1700, 1800, 1900, 2000...) are leap years only if divisible by 400. So 2000 was a leap year (divisible by 400), but 1900, 1800, and 1700 were not (divisible by 100, but not 400) — even though they&apos;re all divisible by 4. This two-tier rule brings the calendar&apos;s average year length to 365.2425 days, extremely close to the real 365.2422-day solar year, with a remaining error small enough that it won&apos;t require correction for thousands of years.</div>}
      />
      <FootnoteAside>Because the Gregorian calendar&apos;s average year (365.2425 days) is still very slightly longer than the true solar year (365.2422 days), the calendar accumulates about one extra day of drift roughly every 3,300 years — an error so small it has no practical civil impact, unlike the roughly 10-day drift the Julian calendar had accumulated by the time Pope Gregory XIII&apos;s 1582 reform corrected it in one step.</FootnoteAside>

      <p>
      The century exception is the part almost everyone forgets, which is exactly why it makes for a genuinely useful piece of calendar math to be able to check by hand.
      </p>

      <QuickCheck
      question="Why isn't the simple rule 'every year divisible by 4 is a leap year' good enough on its own?"
      options={[
      { text: "Because Earth's orbital period is actually a bit less than 365.25 days (365.2422), so adding a full extra day every 4 years slightly overcorrects, requiring the century-based exception to fine-tune it", correct: true, explanation: "Correct. The simple 4-year rule assumes exactly 0.25 extra days per year; the real figure is 0.2422, a small enough gap that it only shows up as a meaningful overcorrection after roughly a century, which is exactly when the century exception rule kicks in." },
      { text: "Because leap years were only ever meant to apply to years before 1900", correct: false, explanation: "Leap years apply to any qualifying year going forward indefinitely — there's no historical cutoff. The century exception is a mathematical refinement, not a time-limited historical rule." },
      { text: "Because the every-4-years rule was mathematically wrong from the start and never worked at all", correct: false, explanation: "The every-4-years rule works quite well as a first approximation — it's just not perfectly exact, which is why the additional century-divisible-by-400 refinement exists to correct the small remaining overcorrection." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Checking an ordinary year (baseline case)</h3>
      <div className="prose-p">
      Is 2024 a leap year? Check: 2024 ÷ 4 = 506, an exact whole number, so 2024 passes the first test. Since 2024 isn&apos;t a century year (doesn&apos;t end in 00), the century exception doesn&apos;t apply, and 2024 is confirmed as a leap year — which matches the real calendar (2024 did have a February 29).
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The century-year exception (edge case / variation)</h3>
      <div className="prose-p">
      Is 1900 a leap year? First test: 1900 ÷ 4 = 475, a whole number, so it passes the basic 4-year rule. But 1900 is a century year (divisible by 100), which triggers the exception: century years must also be divisible by 400 to count. 1900 ÷ 400 = 4.75, not a whole number — so 1900 is <strong>not</strong> a leap year, despite passing the simple divide-by-4 test. Compare with 2000: 2000 ÷ 4 = 500 (passes), 2000 ÷ 100 = 20 (a century year, triggering the exception check), 2000 ÷ 400 = 5 (a whole number) — so 2000 <strong>is</strong> a leap year. Same basic test, opposite results, purely because of the century-divisible-by-400 refinement.
      </div>

      <QuickCheck
      question="Was the year 2100 (a future century year) a leap year under the Gregorian rule?"
      options={[
      { text: "Yes — any year divisible by 4 is automatically a leap year", correct: false, explanation: "This ignores the century exception. 2100 is divisible by 4 (2100 ÷ 4 = 525), but since it's a century year, it needs to also pass the divisible-by-400 test, which it fails." },
      { text: "No — 2100 is divisible by 100 but not by 400 (2100 ÷ 400 = 5.25), so the century exception disqualifies it despite passing the basic 4-year test", correct: true, explanation: "Correct. 2100 will not be a leap year, the same way 1900, 1800, and 1700 were not — all three are divisible by 100 but not 400. The next century leap year after 2000 will be 2400." },
      { text: "No century year can ever be a leap year under the Gregorian rule", correct: false, explanation: "This isn't quite right — century years divisible by 400, like 2000 (and the upcoming 2400), are leap years. Only century years NOT divisible by 400 are excluded." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: What would happen without leap years, over a long timescale (real-world / applied case)</h3>
      <div className="prose-p">
      Suppose the calendar used a flat 365 days every year with no correction at all. Each year, the calendar would fall about 0.2422 days behind the true solar cycle. Over 100 years, that&apos;s roughly 100 × 0.2422 ≈ 24.2 days of accumulated drift — nearly a full month. Over 700 years, the drift would reach roughly 169 days, more than half a year, meaning the calendar date labeled &quot;January 1&quot; would eventually fall in the middle of what&apos;s actually summer in the Northern Hemisphere. This is precisely the kind of long-run drift the Julian calendar suffered from (it used the simple every-4-years rule with no century exception) before the 1582 Gregorian reform corrected roughly 10 accumulated days of error in one adjustment.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Calendar drift and the two-tier leap year correction"
      type="flow"
      svgSrc="/diagrams/units-measurement-conversions-leap-years-and-calendar-math-drift-correction.svg"
      altText="A timeline showing the calendar year of 365 days drifting away from the true solar year of 365.2422 days by about a quarter day each year, accumulating over four years, then a leap day is added to snap the calendar back in sync, with century years like 1900 shown skipping the leap day and year 2000 shown keeping it"
      />
      <p>
      The dashed curve shows the calendar quietly falling behind the true solar year by a fraction of a day annually; the leap day at year 4 snaps it back. The century exception underneath shows the second-layer correction that keeps even that four-year correction from slightly overshooting across many centuries.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming every year divisible by 4 is automatically a leap year, without checking the century exception.", fix: "For century years (ending in 00), also check divisibility by 400 — only those pass. 2000 is a leap year; 1900, 1800, 2100 are not." },
      { mistake: "Assuming leap years add a day to make the calendar 'more accurate' in some vague sense, rather than understanding the specific quarter-day drift they correct.", fix: "Tie it to the concrete number: Earth's orbit is about 365.2422 days, not 365 — leap years exist to correct exactly that ~0.2422-day annual shortfall, nothing more abstract." },
      { mistake: "Assuming the Gregorian calendar is now perfectly synced forever, with no remaining drift at all.", fix: "The Gregorian average year (365.2425 days) is still marginally longer than the true solar year (365.2422 days) — a tiny residual drift of about 1 day per 3,300 years remains, just far too small to matter practically." },
      ]}
      />
      <MisconceptionCallout
      myth="Leap years happen every 4 years, no exceptions."
      reality={<p>The every-4-years rule is only the first layer of the Gregorian calendar&apos;s leap-year system. Century years (numbers ending in 00) are the exception: they&apos;re leap years only if also divisible by 400. This is why 2000 was a leap year but 1900 and 2100 are not, even though all three pass the simple divide-by-4 test — the extra rule exists specifically because 365.25 days per 4 years is itself a slight overcorrection of the true 365.2422-day solar year.</p>}
      />

      <QuickCheck
      question="Roughly how many days would a calendar with no leap-year correction drift out of sync with the seasons after 100 years?"
      options={[
      { text: "About 1 day — the drift is negligible even without any correction", correct: false, explanation: "The annual drift (about 0.2422 days) compounds meaningfully over a century — 1 day of total drift after 100 years would understate it by roughly 24 times." },
      { text: "About 24 days — roughly 0.2422 days of drift accumulated per year, times 100 years", correct: true, explanation: "Correct. 100 × 0.2422 ≈ 24.2 days — nearly a full month of seasonal drift after just a century with no leap-year correction at all, which is exactly the scale of error leap years are designed to prevent." },
      { text: "About 365 days — a full year of drift after only a century", correct: false, explanation: "That would require far more than a century of accumulation at the real 0.2422-day-per-year drift rate — roughly 1,500 years, not 100, to accumulate a full year of seasonal drift." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Check whether a year is a leap year"
      fields={[
      { key: "year", label: "Year to check", defaultValue: 2000 },
      ]}
      resultLabel="Is leap year? (1 = yes, 0 = no)"
      formula="isLeapYearFlag"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "To check any year: first test divisibility by 4. If it fails, it's not a leap year — done.",
      "If a year passes the divide-by-4 test and is also a century year (ends in 00), run the extra divide-by-400 test before concluding it's a leap year.",
      "Use the calculator above to quickly verify any specific year, including tricky century-year cases like 1900, 2000, or 2100.",
      "Remember the concrete reason leap years exist — Earth's real orbit (365.2422 days) is longer than the calendar's default 365 — rather than treating the rule as an arbitrary convention.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do you know if a year is a leap year?", answer: "A year is a leap year if it's divisible by 4, EXCEPT century years (divisible by 100), which are leap years only if also divisible by 400. So 2024 is a leap year (divisible by 4, not a century year), and 2000 is a leap year (divisible by 400), but 1900 is not (divisible by 100 but not 400)." },
      { question: "Why do we have leap years?", answer: "Because Earth's actual orbit around the sun takes about 365.2422 days, not a clean 365 — leap years add a corrective extra day (February 29) roughly every 4 years to keep the calendar synchronized with the real seasonal cycle." },
      { question: "Is 2000 a leap year?", answer: "Yes. 2000 is divisible by 4 and, as a century year, is also divisible by 400 (2000 ÷ 400 = 5), so it satisfies both parts of the Gregorian leap-year rule." },
      { question: "Why wasn't 1900 a leap year?", answer: "1900 is divisible by 4 and by 100, making it a century year — but 1900 ÷ 400 = 4.75, not a whole number, so it fails the century exception test and was not a leap year." },
      { question: "What would happen if leap years didn't exist?", answer: "The calendar would drift out of sync with the seasons by about a quarter day every year — roughly 24 days per century — eventually shifting fixed calendar dates like January 1 into a completely different season over the span of many centuries." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
