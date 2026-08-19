import React from 'react';
import { PostMeta, PostFrontmatter } from '@/types/post';
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
  title: "Time & Calendar Math",
  category: "math-numbers",
  order: 35,
  subtopic: "applied-and-everyday-math",
  tags: [
    "calendar math",
    "modular arithmetic",
    "leap year",
    "elapsed time",
    "days of the week",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why finding a future day of the week is modular arithmetic, and why the leap year rule needs three conditions, not one, to keep the calendar accurate.",
  summary: "Calendar math relies on modular (remainder) arithmetic for cycles like the 7-day week, and on a three-part leap year rule to keep the 365-day calendar aligned with Earth's roughly 365.2422-day orbit.",
  sources: [
    { label: "Encyclopaedia Britannica — Gregorian Calendar", url: "https://www.britannica.com/science/Gregorian-calendar" },
    { label: "NIST — Physical Measurement Laboratory: Time and Frequency", url: "https://www.nist.gov/pml" },
    { label: "Khan Academy — What is Modular Arithmetic?", url: "https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/what-is-modular-arithmetic" },
  ],
  seeAlso: [
    "math-numbers/math-for-travel-distance-speed-time",
    "math-numbers/unit-conversions-length-weight-volume",
    "math-numbers/ratios-and-proportions",
  ],
  glossary: [
    { term: "Modular arithmetic", definition: "Arithmetic that 'wraps around' after reaching a fixed number (the modulus) — clock and calendar cycles, like the 7-day week, are everyday examples." },
    { term: "Leap year", definition: "A year with an extra day (February 29) added to keep the 365-day calendar year aligned with Earth's actual orbital period of about 365.2422 days." },
    { term: "Gregorian calendar", definition: "The calendar system in near-universal civil use today, introduced in 1582 to correct drift that had built up under the earlier Julian calendar." },
    { term: "Remainder", definition: "What's left over after dividing one number by another as many whole times as possible — the basis of modular arithmetic (e.g., 100 ÷ 7 leaves a remainder of 2)." },
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
      "Finding a day of the week in the future or past is modular arithmetic in disguise — days cycle every 7, so you only need the remainder after dividing by 7, not a full day-by-day count.",
      "The Gregorian calendar's leap year rule has three parts, not one: divisible by 4, except century years, except when also divisible by 400 — this exists to correct a small but real drift.",
      "Elapsed-time math (age, durations, deadlines) needs care at unit boundaries, since months hold different numbers of days and years may or may not include a February 29th.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Calendar math is really just counting, but the tricky parts come from things that repeat in cycles rather than counting up forever. Days of the week repeat every 7 days, so &quot;100 days from now&quot; isn&apos;t a day you count out one by one — you can shortcut it by finding how many full weeks fit into 100 days and how many days are left over. Leap years are the other main wrinkle: most years have 365 days, but every 4th year usually gets an extra day (February 29th) to keep our calendar in sync with how long Earth actually takes to orbit the sun.</div>}
      detailed={<div className="prose-p">The day-of-week shortcut is formally <TermLink href="/math-numbers/time-and-calendar-math">modular arithmetic</TermLink>: to find the day of the week N days from a known day, compute N mod 7 (the <TermLink href="/math-numbers/time-and-calendar-math">remainder</TermLink> after dividing N by 7) and step that many days forward from the known day, wrapping back to the start of the week if needed. This works because the week is a repeating 7-day cycle, and modular arithmetic is exactly the branch of math built for repeating cycles — the same logic underlies clock arithmetic (12-hour or 24-hour time) and even cryptography. The <TermLink href="/math-numbers/time-and-calendar-math">leap year</TermLink> rule is more subtle than &quot;every 4 years&quot; because Earth&apos;s actual orbital period is approximately 365.2422 days, not a clean 365.25. Adding a leap day every 4 years (365.25 average) overcorrects slightly, so the <TermLink href="/math-numbers/time-and-calendar-math">Gregorian calendar</TermLink> rule removes 3 of those leap days every 400 years: a year is a leap year if it&apos;s divisible by 4, EXCEPT century years (divisible by 100), UNLESS that century year is also divisible by 400. This three-part rule brings the average calendar year to 365.2425 days — extremely close to the true 365.2422-day solar year, drifting by only about one day every 3,300 years.</div>}
      />
      <FootnoteAside>When Pope Gregory XIII introduced the Gregorian calendar in 1582 to correct centuries of accumulated drift from the older Julian calendar, ten days were simply deleted from the calendar in the transition — in the countries that adopted it immediately, Thursday, October 4, 1582 was followed directly by Friday, October 15, 1582.</FootnoteAside>

      <p>
      The leap year rule&apos;s three parts sound like unnecessary complexity until you check a few real years against it and see exactly why &quot;every year divisible by 4&quot; alone gets it wrong.
      </p>

      <QuickCheck
      question="Was the year 1900 a leap year under the Gregorian calendar rule?"
      options={[
      { text: "Yes, because 1900 is divisible by 4", correct: false, explanation: "Divisibility by 4 alone isn't the full rule. 1900 is also a century year (divisible by 100) and needs to also be divisible by 400 to still count as a leap year — it isn't." },
      { text: "No — 1900 is divisible by 100 but not by 400, so the century exception applies and it is not a leap year", correct: true, explanation: "Correct. 1900 ÷ 100 = 19 exactly, making it a century year, but 1900 ÷ 400 = 4.75, not a whole number — so the century exception removes 1900's leap day. February 1900 had only 28 days." },
      { text: "No, because no year ending in '00' can ever be a leap year", correct: false, explanation: "Century years can still be leap years — just not automatically. The year 2000 (divisible by both 100 and 400) was a leap year, which disproves a blanket 'no century year is ever a leap year' rule." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Finding the day of the week 100 days from a Wednesday (baseline case)</h3>
      <div className="prose-p">
      Today is Wednesday, and you want to know the day of the week 100 days from now. Instead of counting 100 individual days, divide 100 by 7: 100 ÷ 7 = 14 remainder 2 (14 full weeks plus 2 extra days). Fourteen full weeks land back on a Wednesday, and then 2 more days move it to Friday. So 100 days from a Wednesday is a Friday — the same answer you&apos;d get counting day by day, reached in two steps instead of a hundred.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Checking whether 2024, 1900, and 2100 are leap years (edge case / variation)</h3>
      <div className="prose-p">
      Apply the three-part rule to each: <strong>2024</strong> — divisible by 4 (2024 ÷ 4 = 506) and not a century year, so it&apos;s a leap year (it was: February 2024 had 29 days). <strong>1900</strong> — divisible by 4, but also a century year (divisible by 100) and not divisible by 400 (1900 ÷ 400 = 4.75), so the century exception removes it — not a leap year. <strong>2100</strong> — divisible by 4, a century year (2100 ÷ 100 = 21), and not divisible by 400 (2100 ÷ 400 = 5.25), so like 1900, the exception applies and 2100 will not be a leap year, despite being divisible by 4. Three different years, three applications of the exact same three-part test, two different outcomes for the &quot;divisible by 4&quot; years depending purely on the century exception.
      </div>

      <QuickCheck
      question="Will the year 2100 be a leap year under the Gregorian calendar rule?"
      options={[
      { text: "Yes, because 2100 is divisible by 4", correct: false, explanation: "This applies only the first part of the rule. 2100 is also a century year and needs to be divisible by 400 to override the century exception — it isn't, so it stays excluded." },
      { text: "No — 2100 is a century year divisible by 100 but not by 400, so it will not be a leap year despite being divisible by 4", correct: true, explanation: "Correct. 2100 ÷ 400 = 5.25, not a whole number, so the century exception removes 2100's leap day just as it did for 1900. February 2100 will have 28 days." },
      { text: "It depends on which country's calendar is used", correct: false, explanation: "The Gregorian leap year rule is a single, internationally standardized mathematical rule — it doesn't vary by country for countries that use the Gregorian calendar for civil purposes." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Counting days until a deadline that crosses a month boundary (real-world / applied case)</h3>
      <div className="prose-p">
      Today is March 20th, and a bill is due April 15th. March has 31 days, so there are 31 − 20 = 11 days remaining in March, plus all 15 days of April up to and including the 15th: 11 + 15 = 26 days until the deadline. The common error here is forgetting that months have different lengths (28, 29, 30, or 31 days) and either using a flat &quot;30 days per month&quot; estimate or miscounting whether the start or end date should be included — a deadline calculation that&apos;s off by even one day, from an inclusive/exclusive counting mistake, can mean paying a bill a day late.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The leap year rule as a decision flowchart"
      type="flow"
      svgSrc="/diagrams/math-numbers-time-and-calendar-math-leap-year-flowchart.svg"
      altText="A flowchart starting with a box asking Is the year divisible by 4? If no, arrow to a box labeled Not a leap year. If yes, arrow to a second question box Is the year divisible by 100? If no, arrow to a box labeled Leap year. If yes, arrow to a third question box Is the year also divisible by 400? If no, arrow to Not a leap year. If yes, arrow to Leap year, illustrating years like 2024 (leap), 1900 (not a leap year), and 2000 (leap year) at their respective decision paths."
      />
      <p>
      Tracing 2024 through the flowchart: divisible by 4, not divisible by 100 — leap year, exiting at the second box. Tracing 1900: divisible by 4, divisible by 100, not divisible by 400 — not a leap year, exiting at the bottom of the third box. Tracing 2000: divisible by 4, divisible by 100, and divisible by 400 — leap year, exiting at the top of the third box. Only century years ever reach that third question at all; every other year that&apos;s divisible by 4 exits as a leap year at the second box without needing the century check.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming every year divisible by 4 is a leap year, without checking the century exception.", fix: "Add the two extra checks for century years: divisible by 100 removes the leap year, unless it's also divisible by 400, which restores it (as with 2000)." },
      { mistake: "Counting elapsed days between two dates by assuming every month has 30 days.", fix: "Use each month's actual day count (28/29, 30, or 31) — a flat 30-day assumption introduces errors of up to 3 days per month crossed." },
      { mistake: "Miscounting whether the start date, end date, or both should be included in a day count (an 'off-by-one' error).", fix: "Decide explicitly whether the range is inclusive or exclusive before counting, and stay consistent — 'from March 20 to April 15' commonly means counting the days after March 20 through April 15 inclusive, as in the worked example above." },
      ]}
      />
      <MisconceptionCallout
      myth="Any year divisible by 4 is a leap year."
      reality={<p>Divisibility by 4 is necessary but not sufficient. Century years (divisible by 100) are the exception — they are not leap years unless they&apos;re also divisible by 400. That&apos;s why 1900 and 2100 are not leap years despite being divisible by 4, while 2000 was a leap year because it&apos;s divisible by both 100 and 400. This three-part rule exists because a plain 4-year cycle slightly overcorrects Earth&apos;s true ~365.2422-day orbital period.</p>}
      />

      <QuickCheck
      question="Which of these three years is NOT a leap year: 2000, 2024, or 2100?"
      options={[
      { text: "2000, because century years are never leap years", correct: false, explanation: "2000 actually is a leap year — it's divisible by both 100 and 400, which satisfies the full three-part rule and restores its leap status despite being a century year." },
      { text: "2100, because it's divisible by 100 but not by 400", correct: true, explanation: "Correct. 2100 ÷ 400 = 5.25, not a whole number, so the century exception applies and removes 2100's leap day — unlike 2000, which passed the divisible-by-400 check." },
      { text: "2024, because it isn't divisible by 4", correct: false, explanation: "2024 is divisible by 4 (2024 ÷ 4 = 506) and isn't a century year at all, so no exception applies — it's a straightforward leap year." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Day-of-week calculator (modular arithmetic)"
      fields={[
      { key: "startDayIndex", label: "Starting day (0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat)", defaultValue: 3 },
      { key: "daysElapsed", label: "Days elapsed (forward)", defaultValue: 100 },
      ]}
      resultLabel="Resulting day index (0=Sun...6=Sat)"
      formula="dayOfWeekAfterDays"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Try the calculator above with today's weekday and a deadline day-count to figure out what day of the week a future date falls on.",
      "Run the three-part leap year test on a year that matters to you (your birth year, a milestone year) to confirm whether it was or will be a leap year.",
      "Next time you're counting days to a deadline across a month boundary, use each month's real day count instead of a flat 30-day estimate.",
      "Practice the modular shortcut (remainder after dividing by 7) instead of manually counting out multi-week spans day by day.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do you figure out what day of the week a future date falls on?", answer: "Count the number of days between today and the target date, divide by 7, and use the remainder — that remainder tells you how many days past today's weekday to step forward, wrapping around if needed. This is modular arithmetic applied to the 7-day week cycle." },
      { question: "What is the rule for leap years?", answer: "A year is a leap year if it's divisible by 4, except century years (divisible by 100), which are not leap years unless they're also divisible by 400. This three-part rule keeps the 365-day calendar aligned with Earth's roughly 365.2422-day orbit." },
      { question: "Why isn't every 4th year automatically a leap year?", answer: "Because adding a leap day every single 4 years slightly overcorrects — Earth's real orbital period is about 365.2422 days, not 365.25. Removing 3 leap days every 400 years (the century exception) brings the average calendar year much closer to the true value." },
      { question: "Was the year 2000 a leap year?", answer: "Yes. 2000 is divisible by 4, and although it's also a century year (divisible by 100), it's also divisible by 400, which restores its leap year status under the Gregorian rule." },
      { question: "How many days are in a non-leap year versus a leap year?", answer: "A common (non-leap) year has 365 days; a leap year has 366 days, with the extra day added as February 29th." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
