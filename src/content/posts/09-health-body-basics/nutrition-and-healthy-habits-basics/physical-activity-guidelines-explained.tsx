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
  title: "Physical Activity Guidelines Explained",
  category: "health-body-basics",
  order: 38,
  subtopic: "nutrition-and-healthy-habits-basics",
  tags: ["physical activity", "exercise guidelines", "target heart rate", "moderate intensity", "CDC"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "CDC and WHO both publish the same general benchmark: about 150 minutes of moderate-intensity activity a week — a published population-level guideline, not a personal prescription.",
  summary: "Published physical activity guidelines from the CDC and WHO recommend adults get roughly 150 minutes of moderate-intensity aerobic activity per week (or 75 minutes of vigorous activity), plus muscle-strengthening activity on 2 or more days — general population benchmarks that a target-heart-rate calculation can help translate into a felt intensity level during exercise.",
  sources: [
    { label: "CDC — How Much Physical Activity Do Adults Need?", url: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" },
    { label: "WHO — Physical Activity Fact Sheet", url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity" },
    { label: "American Heart Association — Target Heart Rates Chart", url: "https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates" },
  ],
  seeAlso: [
    "health-body-basics/understanding-stress-and-the-body-general-overview",
    "health-body-basics/screen-time-and-eye-health-basics",
  ],
  glossary: [
    {"term":"Moderate-intensity activity","definition":"Physical activity that noticeably raises heart rate and breathing while still allowing conversation — CDC's benchmark example is brisk walking."},
    {"term":"Target heart rate","definition":"A heart-rate range, estimated from age, used as a rough proxy for exercise intensity level during aerobic activity."},
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
      <strong>This entry explains published population-level activity guidelines — it is not personalized exercise or medical advice.</strong> Consult a doctor before starting a new exercise program, especially with an existing health condition.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "CDC and WHO both publish a similar general benchmark: about 150 minutes per week of moderate-intensity aerobic activity (or 75 minutes of vigorous activity), plus muscle-strengthening activity on 2 or more days.",
      "'Moderate intensity' is commonly defined by a felt-effort test — noticeably raised heart rate and breathing while still able to hold a conversation — rather than a single universal number.",
      "A target-heart-rate range, estimated from age, is a commonly used proxy for translating 'moderate' or 'vigorous' intensity into a number that can be checked during exercise.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">CDC&apos;s published adult activity guideline is roughly 150 minutes a week of <TermLink href="/health-body-basics/physical-activity-guidelines-explained">moderate-intensity activity</TermLink>, like brisk walking, plus strength activity on 2 or more days. WHO publishes a closely aligned global recommendation. These are population-level benchmarks, not individualized prescriptions — a doctor can adjust guidance for a specific person&apos;s health status.</div>}
      detailed={<div className="prose-p">CDC defines moderate-intensity activity using a practical, felt-effort test: during moderate activity, breathing and heart rate noticeably increase but conversation remains possible; during vigorous activity, conversation becomes difficult in full sentences. Since &quot;noticeably increased&quot; isn&apos;t a precise number on its own, exercise guidance commonly pairs it with a <TermLink href="/health-body-basics/physical-activity-guidelines-explained">target heart rate</TermLink> range, estimated from the widely used age-based formula (220 minus age) as an approximation of maximum heart rate, with moderate intensity commonly framed as roughly 50-70% of that estimated maximum, per American Heart Association guidance. This age-based maximum-heart-rate formula is itself a population-average approximation, not a measured individual value — actual maximum heart rate varies by person, which is exactly why it&apos;s used as a rough guide alongside the conversational test, not as a substitute for how exercise actually feels.</div>}
      />
      <FootnoteAside>The 220-minus-age formula for estimating maximum heart rate is a widely used approximation, not a precisely measured individual figure — the American Heart Association itself notes it should be treated as a general estimate, with real individual variation expected.</FootnoteAside>

      <p>
      Because the age-based formula is a population approximation, it&apos;s best used alongside — not instead of — the simple, subjective conversational test CDC describes for gauging real-time intensity.
      </p>

      <QuickCheck
      question="Is the 220-minus-age formula for estimated maximum heart rate a precise measurement of any individual's actual maximum heart rate?"
      options={[
      { text: "Yes, it's derived from measuring that specific person", correct: false, explanation: "The formula is a population-average approximation, not an individual measurement — it doesn't account for a specific person's actual physiology, which can vary from the formula's estimate." },
      { text: "No — it's a widely used general approximation; actual individual maximum heart rate varies and the formula should be treated as a rough estimate, per the American Heart Association", correct: true, explanation: "Correct. This is exactly why exercise guidance also uses the simpler conversational (felt-effort) test alongside any heart-rate-based estimate." },
      { text: "No, because heart rate has no relationship to exercise intensity at all", correct: false, explanation: "Heart rate does correlate with exercise intensity in general — the issue isn't that the relationship doesn't exist, but that the age-based formula is only an approximation of an individual's specific maximum." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Estimating a moderate-intensity target heart rate (baseline case)</h3>
      <div className="prose-p">
      A 40-year-old&apos;s estimated maximum heart rate: 220 − 40 = 180 beats per minute. Moderate intensity at roughly 50-70% of that: 90 to 126 beats per minute, per American Heart Association&apos;s general framing — an illustrative range, not a precise individual prescription.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Meeting the weekly guideline with different activity splits (edge case / variation)</h3>
      <div className="prose-p">
      CDC&apos;s 150-minutes-a-week moderate-activity benchmark doesn&apos;t require one long session — it can be split as 30 minutes, 5 days a week, or as three 50-minute sessions, or any other combination that reaches the weekly total, per CDC&apos;s own guidance. A person choosing 75 minutes of vigorous activity instead of 150 minutes of moderate activity is also meeting the same published guideline, since CDC frames vigorous minutes as counting at roughly double the intensity-weighted rate of moderate minutes.
      </div>

      <QuickCheck
      question="Does CDC's 150-minute weekly activity guideline require one continuous 150-minute session?"
      options={[
      { text: "Yes, it must be done in a single continuous session to count", correct: false, explanation: "CDC's own guidance explicitly allows splitting activity across multiple sessions throughout the week — there's no requirement for one continuous block." },
      { text: "No — CDC's guidance allows splitting the weekly total across multiple sessions in whatever combination reaches 150 minutes (or 75 minutes vigorous)", correct: true, explanation: "Correct. This flexibility is explicit in CDC's published guidance, which is part of why the benchmark is considered achievable for varied schedules." },
      { text: "No, but only two specific splits (5x30 or 3x50) are officially allowed", correct: false, explanation: "CDC doesn't limit the guideline to specific pre-set splits — any combination of moderate-intensity activity reaching the weekly total counts." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Strength activity as a separate, additional guideline (real-world / applied case)</h3>
      <div className="prose-p">
      CDC&apos;s guidance includes a second, separate component: muscle-strengthening activity involving all major muscle groups on 2 or more days a week. This is distinct from the 150-minute aerobic-activity benchmark — someone who walks briskly for 150 minutes weekly but does no strength activity has met the aerobic component but not the strength component, since CDC&apos;s guidance treats them as two separate, both-recommended parts of the overall picture.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="CDC's weekly adult activity guideline has two separate components"
      type="detail"
      svgSrc="/diagrams/health-body-basics-physical-activity-guidelines-explained-two-components.svg"
      altText="A diagram showing two separate boxes representing CDC's adult activity guideline: one box for 150 minutes per week of moderate-intensity aerobic activity or 75 minutes of vigorous activity, and a second, separate box for muscle-strengthening activity on 2 or more days per week, with both boxes labeled as independently recommended."
      />
      <p>
      Keeping the two components visually separate matters because meeting one doesn&apos;t automatically satisfy the other — CDC recommends both the aerobic minutes and the strength-activity days as independent parts of the overall guideline.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating the 220-minus-age heart-rate formula as an exact individual measurement.", fix: "Use it as a rough estimate alongside the simpler conversational (felt-effort) test, per American Heart Association guidance." },
      { mistake: "Assuming the 150-minute guideline must be done in one continuous session.", fix: "Split activity across the week in any combination — CDC's guidance explicitly allows this." },
      { mistake: "Meeting the aerobic-minutes guideline and assuming that also covers the strength-activity guideline.", fix: "Remember these are two separate, independently recommended components — both matter." },
      ]}
      />
      <MisconceptionCallout
      myth="Only intense, exhausting workouts count toward meeting physical activity guidelines."
      reality={<p>CDC&apos;s guideline is centered on moderate-intensity activity like brisk walking as the primary benchmark, with vigorous activity offered as a faster-counting alternative (75 minutes instead of 150) — not a requirement. Moderate-intensity activity, defined by CDC&apos;s own conversational test, is deliberately framed as achievable and sustainable, not as requiring exhaustion.</p>}
      />

      <QuickCheck
      question="Does CDC's activity guideline require intense, exhausting exercise to count toward the weekly benchmark?"
      options={[
      { text: "Yes, only vigorous, exhausting activity counts", correct: false, explanation: "CDC's primary benchmark is moderate-intensity activity, like brisk walking — vigorous activity is offered as a faster-counting alternative, not a requirement." },
      { text: "No — moderate-intensity activity, defined by CDC as noticeably raising heart rate and breathing while conversation remains possible, is the primary benchmark", correct: true, explanation: "Correct. Vigorous activity (75 minutes) is an alternative path to the same guideline, not the only qualifying intensity level." },
      { text: "No, because CDC's guidelines don't specify any intensity level at all", correct: false, explanation: "CDC's guidelines are specifically framed around intensity levels — moderate versus vigorous — with a defined felt-effort test for each." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <p className="prose-p">This calculator uses the widely cited age-based approximation — treat the result as a rough estimate, not a precise individual figure.</p>
      <EntryCalculator
      title="Estimate a target heart rate at a given exercise intensity"
      fields={[
      { key: "ageYears", label: "Age (years)", defaultValue: 40 },
      { key: "intensityPercent", label: "Target intensity (% of estimated max)", defaultValue: 60 },
      ]}
      resultLabel="Estimated target heart rate (bpm)"
      formula="targetHeartRateAtIntensity"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Aim for CDC's general benchmark of 150 minutes of moderate activity (or 75 vigorous) weekly, split however fits your schedule.",
      "Add muscle-strengthening activity on 2 or more days a week as a separate, additional goal.",
      "Use the conversational felt-effort test alongside any heart-rate estimate to gauge real intensity.",
      "Consult a doctor before starting a new exercise program, especially with an existing health condition.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How much exercise does CDC recommend per week?", answer: "About 150 minutes of moderate-intensity aerobic activity (or 75 minutes vigorous), plus muscle-strengthening activity on 2 or more days — CDC's published adult guideline." },
      { question: "What counts as 'moderate intensity' exercise?", answer: "CDC defines it by a felt-effort test: heart rate and breathing noticeably increase, but conversation remains possible. Brisk walking is CDC's common example." },
      { question: "How do you estimate your target heart rate?", answer: "A widely used approximation subtracts age from 220 to estimate maximum heart rate, then takes a percentage of that (commonly 50-70% for moderate intensity) — treated as a rough estimate, not an exact individual figure." },
      { question: "Can the 150 minutes be split across the week?", answer: "Yes — CDC's guidance explicitly allows splitting activity across multiple sessions in any combination that reaches the weekly total." },
      { question: "Is strength training a separate requirement from aerobic activity?", answer: "Yes — CDC recommends muscle-strengthening activity on 2 or more days a week as a distinct, additional component alongside the aerobic-minutes guideline." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
