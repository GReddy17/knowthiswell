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
  title: "Daylight Saving Time Explained",
  category: "units-measurement-conversions",
  order: 40,
  subtopic: "time-speed-and-rate",
  tags: [
    "daylight saving time",
    "DST",
    "UTC offset",
    "spring forward fall back",
    "clock change",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Daylight saving time doesn't create more daylight — it just relabels the clock so the daylight that already exists lines up with more people's waking hours.",
  summary: "Daylight saving time shifts clocks forward by one hour in spring and back by one hour in fall, moving an hour of daylight from the early morning (when most people are still asleep) to the evening (when more people are awake to use it), without changing the total amount of daylight in a day.",
  sources: [
    { label: "U.S. Department of Transportation — Daylight Saving Time", url: "https://www.transportation.gov/" },
    { label: "NIST — Time and Frequency Division: What Time Is It?", url: "https://www.nist.gov/pml/time-and-frequency-division" },
    { label: "Encyclopaedia Britannica — Daylight Saving Time", url: "https://www.britannica.com/topic/daylight-saving-time" },
  ],
  seeAlso: [
    "units-measurement-conversions/how-time-zones-are-set-and-the-international-date-line",
    "units-measurement-conversions/twelve-hour-vs-24-hour-time-explained",
  ],
  glossary: [
    {"term":"Daylight saving time (DST)","definition":"The practice of setting clocks forward by one hour during warmer months so evenings have more usable daylight, then setting them back in fall."},
    {"term":"Standard time","definition":"A region's normal, non-shifted UTC offset — the baseline that daylight saving time temporarily adds an hour to."},
    {"term":"Spring forward","definition":"The March clock change where clocks jump ahead by one hour (commonly 2:00 AM becomes 3:00 AM), losing an hour of sleep but gaining an hour of evening daylight."},
    {"term":"Fall back","definition":"The November clock change where clocks are set back by one hour (commonly 2:00 AM repeats as 1:00 AM), gaining an hour of sleep as daylight saving time ends."},
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
      "Daylight saving time doesn't add or subtract any actual daylight — a day's total sunlight is fixed by Earth's tilt and orbit. DST just shifts the clock so that fixed daylight lines up differently against the hours people are typically awake.",
      "'Spring forward' (clocks jump ahead 1 hour, commonly 2 AM to 3 AM) shifts an hour of daylight from early morning to evening; 'fall back' (clocks move back 1 hour) reverses the shift as the change stops being worth it in winter's shorter days.",
      "Not every region observes DST — the practice is a policy choice, not a physical necessity, and areas near the equator in particular gain little from it since their day length barely varies by season.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p"><TermLink href="/units-measurement-conversions/daylight-saving-time-explained">Daylight saving time</TermLink> moves clocks forward by one hour in spring (commonly, 2:00 AM instantly becomes 3:00 AM) and back by one hour in fall (2:00 AM repeats, effectively becoming 1:00 AM). The point isn&apos;t to create more sunlight — a day has the same total daylight regardless of what the clock says. The point is to shift when that daylight falls relative to when people are awake: without the spring shift, sunrise would happen uselessly early (many people still asleep) while sunset would come earlier in the evening (less usable daylight after work or school).</div>}
      detailed={<div className="prose-p">The practical logic depends heavily on <TermLink href="/units-measurement-conversions/daylight-saving-time-explained">standard time</TermLink> already being offset from true solar noon in a way that leaves early-morning daylight underused. In spring and summer, the sun rises earlier than most people wake up — shifting the clock forward by an hour effectively moves that &quot;wasted&quot; early sunlight to the evening, where it&apos;s usable for outdoor activity, reducing (in theory) the need for evening electric lighting. The tradeoff reverses as winter approaches: days shorten enough that there&apos;s little &quot;spare&quot; morning daylight left to redistribute, and keeping DST active would instead push sunrise into uncomfortably late, dark mornings — which is why clocks fall back to standard time rather than staying shifted year-round.</div>}
      />
      <FootnoteAside>Not every place observes DST at all — most of the world&apos;s population near the equator sees almost no seasonal variation in day length (a tropical location&apos;s daylight might vary by only 20-30 minutes across the whole year), so shifting the clock provides essentially no benefit; Arizona (in the continental US) and Hawaii are notable exceptions that opt out of DST despite being in a country where most states observe it, for reasons ranging from extreme summer heat (delaying sunset further into the evening isn&apos;t wanted) to simple year-round day-length consistency.</FootnoteAside>

      <p>
      Because the shift is exactly one hour and applied region by region, the actual clock-math is simple — the part that trips people up is usually the direction (which way to shift) rather than the amount.
      </p>

      <QuickCheck
      question="Does daylight saving time change the actual total amount of daylight in a day?"
      options={[
      { text: "Yes — DST adds an extra hour of sunlight during the shifted months", correct: false, explanation: "The total daylight in a given day is fixed by Earth's axial tilt and its position in orbit — no clock adjustment can add or remove actual sunlight hours." },
      { text: "No — the total daylight stays exactly the same; DST only relabels the clock so that fixed daylight falls at different clock times relative to when people are typically awake", correct: true, explanation: "Correct. DST is purely a relabeling of the clock, shifting when daylight hours occur relative to a fixed wake/sleep schedule — not a change to how much daylight actually exists in the day." },
      { text: "Yes, but only in regions closer to the poles", correct: false, explanation: "Even in high-latitude regions with very long summer days, DST doesn't add daylight — it shifts the existing daylight window relative to the clock, regardless of latitude." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The spring-forward clock jump (baseline case)</h3>
      <div className="prose-p">
      In a region observing DST, standard time is UTC-5 in winter. When DST begins in spring, the local offset becomes UTC-4 — clocks are set one hour ahead of where they were. If an alarm was set for 6:00 AM standard time the day before the change, the equivalent moment after the change reads as 7:00 AM — the actual moment of waking (relative to sunrise) hasn&apos;t changed, only the number displayed on the clock.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The one night that has 23 hours — or 25 (edge case / variation)</h3>
      <div className="prose-p">
      On the specific night clocks spring forward, that calendar day is only 23 hours long — the hour between 2:00 AM and 3:00 AM never happens locally, since the clock jumps straight over it. On the fall-back night, the reverse happens: 1:00 AM to 2:00 AM occurs twice, making that day 25 hours long. This is a genuine edge case for any duration math done across a DST transition — a &quot;24-hour&quot; calculation spanning a spring-forward night will be off by an hour unless the shift is accounted for explicitly.
      </div>

      <QuickCheck
      question="A flight departs at 11:00 PM the night clocks 'spring forward' and lands 7 hours later by the aircraft's actual elapsed flight time. What local clock time does it land at?"
      options={[
      { text: "6:00 AM — a straightforward 7-hour addition", correct: false, explanation: "This ignores the lost hour from the spring-forward transition — since one clock hour is skipped that night, the local clock reading advances by 8 hours' worth of clock time even though only 7 hours actually elapsed." },
      { text: "7:00 AM — because the spring-forward clock jump adds an extra hour to the local clock reading on top of the 7 real elapsed hours", correct: true, explanation: "Correct. Since local clocks skip an hour that night, 7 real elapsed hours advance the clock reading by 8 hours: 11:00 PM + 8 clock-hours = 7:00 AM. Duration math spanning a DST transition has to account for the skipped or repeated hour explicitly, not just add elapsed time directly." },
      { text: "5:00 AM — the spring-forward shift subtracts an hour from the elapsed time", correct: false, explanation: "Spring forward adds a clock-hour, it doesn't subtract one — that direction belongs to the fall-back transition in November, not the spring change." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Scheduling an international call across a DST transition (real-world / applied case)</h3>
      <div className="prose-p">
      A recurring weekly call is scheduled for 9:00 AM Eastern Time with a colleague in a region that doesn&apos;t observe DST at all (like most of Arizona). Before the US spring-forward transition, the UTC offset gap between the two locations might be 2 hours; after the transition, it becomes 3 hours, even though neither location&apos;s standard time actually changed — only the Eastern Time side shifted with DST. A recurring meeting set purely by a fixed UTC offset (rather than by each location&apos;s local wall-clock time) will silently land an hour off for one side of the call right after the transition, unless the scheduling tool explicitly tracks each region&apos;s DST rules.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Spring forward vs. fall back"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-daylight-saving-time-explained-spring-forward-fall-back.svg"
      altText="Two clock diagrams: the left one labeled Spring Forward shows a clock hand jumping from 2 AM directly to 3 AM, skipping an hour, and the right one labeled Fall Back shows a clock hand at 2 AM repeating back to 1 AM, adding an hour"
      />
      <p>
      The spring transition skips an hour entirely (it never occurs locally that night); the fall transition repeats an hour (it occurs twice) — the two changes are exact mirror images, which is exactly why the total shift nets to zero across a full year.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Believing DST creates extra daylight rather than just shifting when existing daylight falls relative to the clock.", fix: "Remember total daylight is fixed by Earth's tilt and orbit — DST only relabels the clock, moving the same daylight window earlier or later in the day's schedule." },
      { mistake: "Doing duration math across a DST transition night without accounting for the skipped or repeated hour.", fix: "Check whether a calculation spans a spring-forward (23-hour) or fall-back (25-hour) night, and add or subtract the extra hour explicitly rather than assuming every day has 24 hours." },
      { mistake: "Assuming every region observes DST, or observes it on the same dates.", fix: "DST start/end dates and even whether it's observed at all vary by country and, within some countries, by region (Arizona and Hawaii in the US, for example) — never assume a fixed universal schedule." },
      ]}
      />
      <MisconceptionCallout
      myth="Daylight saving time gives everyone an extra hour of sunlight during the summer months."
      reality={<p>The actual number of daylight hours in a day is set entirely by Earth&apos;s axial tilt and its position in orbit around the sun — no clock policy can add sunlight that isn&apos;t astronomically there. What daylight saving time actually does is shift the clock so a portion of already-existing early-morning daylight (when most people are asleep and it goes unused) becomes evening daylight instead (when more people are awake to use it) — a redistribution, not a creation, of daylight.</p>}
      />

      <QuickCheck
      question="Why do Arizona and Hawaii choose not to observe daylight saving time, unlike most of the rest of the United States?"
      options={[
      { text: "Because it's technically impossible to shift clocks that far south", correct: false, explanation: "There's no technical barrier to observing DST at any latitude — plenty of southern-latitude regions do observe it. Arizona and Hawaii's non-observance is a policy choice, not a technical constraint." },
      { text: "Because their reasons vary by region — for Arizona, delaying sunset even later into already-hot summer evenings isn't wanted, and Hawaii's tropical latitude means daylight length barely varies by season, so there's little to redistribute", correct: true, explanation: "Correct. Both are real, if different, policy rationales: Arizona opts out partly for heat-management reasons, and Hawaii's near-equatorial daylight consistency makes the whole point of DST — redistributing seasonally uneven daylight — largely moot." },
      { text: "Because federal law prohibits those two states specifically from observing DST", correct: false, explanation: "US federal law (the Uniform Time Act) actually permits any state to opt out of DST entirely — it doesn't single out or prohibit specific states, it simply allows the choice." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Calculate the clock shift between two UTC offsets"
      fields={[
      { key: "newUtcOffset", label: "New UTC offset (e.g. -4 for EDT)", defaultValue: -4 },
      { key: "oldUtcOffset", label: "Old UTC offset (e.g. -5 for EST)", defaultValue: -5 },
      ]}
      resultLabel="Clock shift (hours)"
      formula="clockShiftHours"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Remember DST redistributes existing daylight rather than creating any — useful for correcting the common 'extra hour of sun' framing.",
      "When doing duration math across a DST transition date, explicitly check for and add/subtract the skipped or repeated hour rather than assuming every day is 24 hours.",
      "For recurring meetings or schedules that cross a region observing DST and one that doesn't, verify the local wall-clock time on both sides after each transition rather than relying on a fixed UTC offset gap.",
      "Don't assume every country or region observes DST, or observes it on the same calendar dates — confirm for the specific locations involved.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Why do we have daylight saving time?", answer: "To shift an hour of daylight from early morning (when most people are asleep and it goes unused) to the evening (when more people are awake and active), without changing the actual total amount of daylight in a day." },
      { question: "Does daylight saving time actually save energy?", answer: "The evidence is mixed and disputed among researchers — the original energy-saving rationale (less evening electric lighting) is contested by modern studies that also account for changes in heating, cooling, and driving patterns caused by the shift." },
      { question: "What is 'spring forward, fall back'?", answer: "A memory aid for the direction of each clock change: in spring, clocks move forward (lose an hour, e.g. 2 AM becomes 3 AM); in fall, clocks move back (gain an hour, e.g. 2 AM becomes 1 AM)." },
      { question: "Do all countries observe daylight saving time?", answer: "No. Most countries near the equator don't observe it since their daylight length barely varies by season, and even within countries that do observe it, some regions opt out — Arizona and Hawaii in the US are well-known examples." },
      { question: "How long is the day when clocks spring forward or fall back?", answer: "The spring-forward day is 23 hours long, since one clock hour is skipped entirely. The fall-back day is 25 hours long, since one clock hour repeats." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
