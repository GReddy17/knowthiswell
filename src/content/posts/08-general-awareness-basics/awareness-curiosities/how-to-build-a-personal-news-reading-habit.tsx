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
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "How to Build a Personal News-Reading Habit",
  category: "general-awareness-basics",
  order: 48,
  subtopic: "awareness-curiosities",
  tags: ["news habits", "media literacy", "information diet", "critical reading", "current affairs"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A sustainable news habit is a small, fixed set of sources checked on a schedule — not an open-ended feed checked whenever a notification fires.",
  summary: "A durable personal news-reading habit is built by deliberately narrowing input (a small, fixed set of trusted sources) and scheduling it (a set time rather than continuous checking), which is the opposite of how most people default into news consumption through algorithmic feeds and push notifications.",
  sources: [
    { label: "Reuters Institute — Digital News Report", url: "https://reutersinstitute.politics.ox.ac.uk/digital-news-report" },
    { label: "Pew Research Center — News Habits & Media", url: "https://www.pewresearch.org/topic/news-habits-media/" },
    { label: "Poynter Institute — MediaWise", url: "https://www.poynter.org/mediawise/" },
  ],
  seeAlso: [
    "general-awareness-basics/reading-beyond-the-headline-critical-reading-skills",
    "general-awareness-basics/primary-vs-secondary-news-sources",
    "general-awareness-basics/how-to-spot-misinformation-and-fake-news",
  ],
  glossary: [
    {"term":"News diet","definition":"The specific mix of sources, formats, and frequency a person relies on to stay informed — a deliberate choice, or a default one shaped passively by algorithmic feeds and notifications."},
    {"term":"Doomscrolling","definition":"The pattern of continuously consuming distressing news content well past the point of gaining new useful information, often driven by an open-ended feed rather than a scheduled check-in."},
    {"term":"Source diversity","definition":"Deliberately following outlets with differing editorial perspectives or ownership structures, so no single outlet's blind spots or biases go unchecked."},
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
      "A sustainable news habit fixes both the number of sources (a small, deliberately chosen set) and the schedule (a set check-in time) — leaving either one open-ended is what produces the fatigue most people associate with 'keeping up with the news.'",
      "Source diversity matters more than source volume — three outlets with genuinely different editorial approaches inform better than ten outlets echoing the same wire-service story.",
      "Algorithmic feeds and push notifications are optimized for engagement time, not for informing you efficiently — a habit built around them will structurally tend toward the doomscrolling pattern rather than away from it.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Most people don&apos;t consciously choose their <TermLink href="/general-awareness-basics/how-to-build-a-personal-news-reading-habit">news diet</TermLink> — it accumulates by default from whatever notifications and social feeds happen to surface. A more sustainable approach flips that: pick a small, fixed set of sources in advance, and check them at a set time rather than continuously throughout the day.</div>}
      detailed={<div className="prose-p">The default path — following whatever an algorithmic feed surfaces, whenever a push notification fires — optimizes for engagement time on the platform&apos;s side, which is a different goal from informing you efficiently on your side. Those two goals aren&apos;t opposed by accident; they&apos;re structurally different objectives, which is why an unmanaged feed tends toward <TermLink href="/general-awareness-basics/how-to-build-a-personal-news-reading-habit">doomscrolling</TermLink> rather than away from it. Deliberately fixing a small set of sources with genuine <TermLink href="/general-awareness-basics/how-to-build-a-personal-news-reading-habit">source diversity</TermLink> — rather than many sources repeating the same wire story — and checking them at a scheduled time (once daily, or a few set times a week) removes both the algorithmic optimization pressure and the always-on checking pattern in one move.</div>}
      />
      <FootnoteAside>Reuters Institute&apos;s long-running Digital News Report has repeatedly found that a meaningful share of respondents across many countries report actively avoiding the news at least some of the time, citing news fatigue and its effect on mood — evidence that an unmanaged news diet is a widely shared, not individual, problem.</FootnoteAside>

      <p>
      The goal isn&apos;t to consume less information — it&apos;s to make consumption a deliberate, bounded choice instead of a background process running continuously in the background of the day.
      </p>

      <QuickCheck
      question="Why does relying on an algorithmic social media feed for news tend to produce more anxious, less informative consumption than a scheduled check-in with fixed sources?"
      options={[
      { text: "Algorithmic feeds are technically incapable of surfacing accurate information", correct: false, explanation: "The issue isn't accuracy per se — feeds can surface accurate stories. The structural issue is that the feed is optimized to maximize engagement time, which is a different objective than efficiently informing the user." },
      { text: "The feed is optimized to maximize time spent on the platform, not to inform efficiently — those two goals diverge, and an open-ended feed structurally tends toward more emotionally engaging (often distressing) content rather than a bounded, informative session", correct: true, explanation: "Correct. A scheduled check-in with a fixed source list removes the engagement-optimization pressure entirely, since there's no algorithm selecting what's shown next." },
      { text: "Scheduled news reading is always factually more accurate than feed-based reading", correct: false, explanation: "Accuracy depends on the source itself, not the delivery mechanism. The advantage of scheduling is about consumption pattern and mental load, not source-level accuracy." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Building a minimal fixed source list (baseline case)</h3>
      <div className="prose-p">
      A reader picks two general wire-service or major outlet sources for breadth, one outlet with a different editorial leaning for perspective, and one specialist source for a topic they care about — four sources total, each checked once during a set morning or evening window, rather than an unbounded stream of whatever a feed surfaces throughout the day.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Handling a fast-moving breaking story without falling into continuous refreshing (edge case / variation)</h3>
      <div className="prose-p">
      During a genuinely fast-developing story, checking in at two or three set points across the day (rather than an unbounded schedule) still captures the meaningful updates, since most breaking-story coverage in the first hours is provisional and gets revised anyway — continuous refreshing mostly captures those provisional revisions rather than new settled information, at a real cost to attention and mood.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Auditing an existing feed-based habit and rebuilding it (real-world / applied case)</h3>
      <div className="prose-p">
      Someone reviews their phone&apos;s screen-time report and finds most news exposure came through a social media feed&apos;s algorithmic recommendations, not a deliberately chosen source. They turn off news-app push notifications, unfollow accounts that mainly reshare outrage-framed headlines, and replace that time with two fixed outlets checked once daily — a concrete, auditable change from an open-ended input to a bounded one.
      </div>

      <QuickCheck
      question="A reader wants to stay informed on a fast-moving story without falling into continuous refreshing. What's the better approach?"
      options={[
      { text: "Refresh continuously so no update is ever missed", correct: false, explanation: "Continuous refreshing mostly surfaces provisional, soon-to-be-revised early coverage rather than new settled information — a real cost in attention and mood for little informational gain." },
      { text: "Check in at a few set points across the day rather than continuously — most of what's captured by constant refreshing during a breaking story is provisional coverage that gets revised anyway", correct: true, explanation: "Correct. A few scheduled check-ins capture the meaningful developments while avoiding the attention and mood cost of continuous refreshing during the provisional early phase of a story." },
      { text: "Avoid the story entirely until it's fully resolved", correct: false, explanation: "This isn't necessary — a few scheduled check-ins across the day is a workable middle ground that stays informed without the cost of continuous refreshing." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Default (open-ended, algorithm-driven) vs. deliberate (fixed, scheduled) news habit"
      type="comparison"
      svgSrc="/diagrams/general-awareness-basics-how-to-build-a-personal-news-reading-habit-default-vs-deliberate.svg"
      altText="Two horizontal timelines stacked vertically. The top timeline, labeled Default habit, shows scattered small notification icons spread irregularly across the full 24-hour span, representing continuous unscheduled checking. The bottom timeline, labeled Deliberate habit, shows just two fixed check-in blocks, one in the morning and one in the evening, with the rest of the day clear."
      />
      <p>
      The contrast isn&apos;t about total information consumed — it&apos;s about whether that consumption is scattered across the whole day at an algorithm&apos;s initiative, or concentrated into a couple of bounded, self-initiated sessions.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Leaving push notifications on for news apps and social media, then trying to 'just not check' them.", fix: "Turn off push notifications for news content entirely — a scheduled habit works far better without a competing always-on trigger." },
      { mistake: "Following many sources that all repeat the same wire-service story, mistaking volume for diversity.", fix: "Prioritize a small number of sources with genuinely different editorial approaches or ownership over a large number that mostly overlap." },
      { mistake: "Treating a fast-moving breaking story as a reason to abandon the scheduled habit and refresh continuously.", fix: "Add one or two extra scheduled check-ins for the day rather than switching to unbounded refreshing." },
      ]}
      />
      <MisconceptionCallout
      myth="Staying well-informed requires checking the news frequently throughout the day."
      reality={<p>Frequency of checking and quality of being informed aren&apos;t the same thing. A small, deliberately diverse set of sources checked on a fixed schedule reliably captures the meaningful developments in most stories, since the bulk of what continuous checking adds is provisional, soon-revised coverage rather than new settled information. Frequent checking is more strongly associated with news fatigue than with being measurably better informed.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Pick 3-5 fixed sources with genuinely different editorial perspectives, rather than many sources that mostly overlap.",
      "Turn off push notifications for news apps and social media entirely.",
      "Set one or two specific times a day (or a few times a week) to check the news, rather than checking whenever a notification or idle moment appears.",
      "During a genuinely fast-moving story, add a couple of extra scheduled check-ins rather than switching to unbounded refreshing.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How many news sources should I follow?", answer: "A small, fixed number (roughly 3-5) with genuinely different editorial perspectives is generally more useful than a large number of sources that mostly repeat the same wire-service coverage." },
      { question: "Is checking the news constantly throughout the day bad for you?", answer: "Frequent, unscheduled checking is more strongly associated with news fatigue and anxiety than with being measurably better informed, since most of what it adds during any single story is provisional coverage that later gets revised." },
      { question: "Should I turn off news notifications?", answer: "Turning off push notifications for news apps and social media removes a major always-on trigger that works against building a scheduled, bounded reading habit." },
      { question: "How do I stay informed on a breaking story without doomscrolling?", answer: "Check in at a few set points across the day rather than continuously — most of the volume added by constant refreshing during a fast-moving story is provisional coverage that gets revised anyway." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
