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
  title: "Earth Day & Modern Awareness Days",
  category: "festivals-culture",
  order: 48,
  subtopic: "modern-and-global-celebrations",
  tags: ["earth day", "awareness days", "environmental history", "modern celebrations"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Earth Day began as a single US teach-in on April 22, 1970, founded by Senator Gaylord Nelson, and only became a global observance in 1990.",
  summary: "Earth Day is an April 22 environmental observance founded in the United States in 1970 by Senator Gaylord Nelson, that grew from a single-country teach-in into today's internationally observed awareness day.",
  sources: [
    { label: "Encyclopaedia Britannica — Earth Day", url: "https://www.britannica.com/topic/Earth-Day" },
    { label: "Encyclopaedia Britannica — Gaylord Nelson (Saving Earth)", url: "https://explore.britannica.com/explore/savingearth/Gaylord-Nelson" },
    { label: "Library of Congress — Today in History: April 22", url: "https://www.loc.gov/item/today-in-history/april-22/" },
    { label: "National Archives — Earth Day", url: "https://www.archives.gov/news/topics/earth-day" },
  ],
  seeAlso: [
    "festivals-culture/valentines-day-explained",
    "festivals-culture/halloween-explained",
    "festivals-culture/pride-month-and-modern-observances-factual-respectful-overview",
    "festivals-culture/national-days-around-the-world-overview",
  ],
  glossary: [
    { term: "Environmental teach-in", definition: "The format Senator Gaylord Nelson envisioned for the first Earth Day in 1970 — a nationwide day of grassroots environmental education events at schools, universities, and communities, rather than a top-down government program." },
    { term: "Environmental Protection Agency (EPA)", definition: "The US federal agency created by President Richard Nixon later in 1970, in the same wave of environmental-policy activity that followed the first Earth Day, per the National Archives." },
    { term: "Awareness day", definition: "A designated calendar date used by governments, organizations, or institutions to draw public attention to a specific cause or issue — Earth Day is one widely cited example of this pattern." },
  ],
  author: {
    slug: "sara-reed-m-j",
    name: "Sara Reed M J",
    credentialLine: "Contributing Editor, KnowThisWell",
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
          "The first Earth Day was held on April 22, 1970, in the United States — founded by US Senator Gaylord Nelson of Wisconsin after witnessing the aftermath of the 1969 Santa Barbara oil spill, per Encyclopaedia Britannica.",
          "More than 20 million people took part in that first Earth Day, and per the National Archives, it helped build the political momentum behind the creation of the US Environmental Protection Agency (EPA) later in 1970, along with a wave of federal environmental laws through the 1970s.",
          "Earth Day did not start out as an international observance — Britannica documents its expansion into a global event only by 1990 — and today, per the National Archives, it's marked by roughly a billion people across nearly 200 countries each year.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/festivals-culture/earth-day-and-modern-awareness-days">Earth Day</TermLink> is observed every year on April 22 with events promoting environmental awareness and conservation. It started in the US in 1970 as a single, nationwide day of environmental education events, founded by Senator Gaylord Nelson, and has since grown into an internationally observed day marked in nearly every country.</div>}
        detailed={<div className="prose-p">Per Britannica, the idea for Earth Day came to Gaylord Nelson, then a US senator from Wisconsin, after he witnessed the aftermath of the 1969 oil spill off the coast of Santa Barbara, California. Nelson organized the first Earth Day, on April 22, 1970, as a nationwide <TermLink href="/festivals-culture/earth-day-and-modern-awareness-days">environmental teach-in</TermLink> — a grassroots day of education events at schools, universities, and communities rather than a single centralized event. More than 20 million Americans participated, and Britannica notes it sparked the passage of new environmental legislation in 42 US states within roughly a year. Per the National Archives, that early momentum fed directly into the creation of the <TermLink href="/festivals-culture/earth-day-and-modern-awareness-days">EPA</TermLink> by President Richard Nixon later in 1970, and into the passage of the Clean Air Act, Clean Water Act, and Endangered Species Act over the following years. An important edge case: Earth Day was not international from the start. Britannica documents that it only expanded into a globally observed event by 1990, two decades after its founding as a single-country event, and it has continued to grow since — the National Archives cites participation by roughly a billion people in nearly 200 countries each year today.</div>}
      />
      <FootnoteAside>Earth Day&apos;s first-year impact is documented at the state level, not just nationally — per Britannica, it&apos;s credited with sparking new environmental legislation in 42 US states, well before the federal EPA or any of the major federal environmental laws it&apos;s more often associated with even existed.</FootnoteAside>
      <p>
      That single-country-to-global trajectory — a specific 1970 founding, then international expansion decades later — turns out to be a pattern worth recognizing, since it shows up in several other modern awareness days as well.
      </p>

      <QuickCheck
        question="Who founded Earth Day, and what prompted it, per Encyclopaedia Britannica?"
        options={[
          { text: "The United Nations, as part of a coordinated international environmental treaty", correct: false, explanation: "Earth Day did not begin as a UN or international initiative — it started as a single US senator's nationwide idea, only becoming internationally observed decades later." },
          { text: "US Senator Gaylord Nelson of Wisconsin, prompted by witnessing the aftermath of the 1969 Santa Barbara oil spill", correct: true, explanation: "Correct, per Britannica. Nelson organized the first Earth Day as a nationwide environmental teach-in on April 22, 1970." },
          { text: "The US Environmental Protection Agency, as a way to publicize its own founding", correct: false, explanation: "This reverses the documented order of events — the EPA was created after the first Earth Day, in part because of the political momentum it built, not the other way around." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The first Earth Day, April 22, 1970 (baseline case)</h3>
      <div className="prose-p">The original Earth Day was a single-country event: a nationwide day of environmental teach-ins at American schools, universities, and community sites, organized by Senator Gaylord Nelson. More than 20 million people took part, and per Britannica it directly sparked new environmental legislation at the state level in 42 states — all within its first year, and entirely within the United States.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Earth Day goes global, 1990 (a genuine turning point)</h3>
      <div className="prose-p">Twenty years after its US founding, Earth Day organizers expanded the observance into an international event, per Britannica. This 1990 global expansion is a real, documented turning point in the day&apos;s history — not a founding myth or a detail to gloss over — and it marks the point where Earth Day stopped being a purely American observance and became a worldwide one.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Earth Day today, alongside other awareness days (real-world / applied case)</h3>
      <div className="prose-p">Today, per the National Archives, Earth Day is marked by roughly a billion people across nearly 200 countries each year, through events ranging from local cleanups to government and corporate initiatives. It now sits alongside many other single-issue awareness days on the modern calendar, each with its own separate founding story and history — recognizing Earth Day&apos;s specific, documented origin helps avoid assuming every awareness day shares one common, uniform backstory.</div>

      <QuickCheck
        question="When did Earth Day become an internationally observed event, according to Britannica?"
        options={[
          { text: "In 1970, at the same time as its founding in the United States", correct: false, explanation: "The 1970 event was a US-only observance. Britannica documents the shift to a globally observed event as happening later, in 1990." },
          { text: "In 1990, roughly two decades after its 1970 founding as a US-only event", correct: true, explanation: "Correct, per Britannica. Earth Day expanded into a global event in 1990, twenty years after Senator Gaylord Nelson founded it in the United States." },
          { text: "It has never become a genuinely international observance and remains US-only today", correct: false, explanation: "The National Archives documents Earth Day as observed today by roughly a billion people across nearly 200 countries — it is a genuinely global event now, even though it began as a single-country one." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Earth Day: from a US teach-in to a global observance"
        type="flow"
        svgSrc="/diagrams/festivals-culture-earth-day-and-modern-awareness-days-timeline.svg"
        altText="Horizontal timeline showing the 1969 Santa Barbara oil spill, April 22 1970 the first Earth Day organized by Senator Gaylord Nelson as a US environmental teach-in with more than 20 million participants, later in 1970 the creation of the Environmental Protection Agency, the 1970s passage of the Clean Air Act Clean Water Act and Endangered Species Act, 1990 Earth Day's expansion into a globally observed event, and today's observance by roughly a billion people in nearly 200 countries."
      />
      <p>
      Set out this way, Earth Day&apos;s history reads as a clear two-stage story — a specific US founding, then a later, separate expansion into a global observance — rather than one single, unified moment.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming Earth Day was founded as an international event from the start.", fix: "It began in 1970 as a single-country US observance, founded by Senator Gaylord Nelson, and only became internationally observed in 1990, per Britannica." },
          { mistake: "Treating Earth Day and the founding of the EPA as the same event.", fix: "They're distinct. The EPA was created by President Nixon later in 1970 as a documented political consequence of the momentum Earth Day built, not as part of Earth Day itself." },
          { mistake: "Assuming every modern awareness day shares Earth Day's exact origin story.", fix: "Earth Day's US-founding-then-global-expansion pattern is common, but each awareness day has its own separate founding date, founder(s), and history — they shouldn't be assumed identical." },
        ]}
      />
      <MisconceptionCallout
        myth="Earth Day has always been an internationally observed day since a single unified founding moment."
        reality={<p>Earth Day began as a single-country event: Senator Gaylord Nelson organized the first Earth Day on April 22, 1970, as a nationwide US environmental teach-in, per Encyclopaedia Britannica. It was not observed internationally at that point. Britannica documents its expansion into a globally observed event only in 1990, two decades after its US founding — meaning today&apos;s worldwide observance is the result of a later, separate expansion, not a single unified global founding moment.</p>}
      />

      <QuickCheck
        question="What does the documented history show about Earth Day's path to becoming a global observance?"
        options={[
          { text: "It was founded simultaneously by multiple countries acting together in 1970", correct: false, explanation: "It was founded by one person, US Senator Gaylord Nelson, as a single-country US event in 1970 — not a coordinated multi-country founding." },
          { text: "It began as a single US event in 1970 and expanded into an internationally observed day only in 1990", correct: true, explanation: "Correct, per Britannica. The global expansion was a later, separate development from the original 1970 US founding." },
          { text: "It has always been observed in nearly 200 countries, unchanged since 1970", correct: false, explanation: "This isn't accurate — the near-200-country global observance is a present-day figure (National Archives), reached only after the 1990 international expansion, not a feature of the original 1970 event." },
        ]}
      />

      <EntryCalculator
        title="Years since the first Earth Day"
        fields={[
          { key: "year", label: "Reference year (first Earth Day: 1970)", defaultValue: 1970 },
        ]}
        resultLabel="Years elapsed since that year"
        formula="yearsSinceYear"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see Earth Day described as an ancient or always-global tradition, remember it has a specific, documented 1970 founding by one US senator.",
          "If you hear Earth Day and the EPA's founding described as the same event, note that they're distinct — the EPA came later in 1970, as a political consequence of Earth Day's momentum.",
          "When another 'awareness day' comes up, ask when and where it actually started — Earth Day's US-then-global pattern is common, but each day has its own separate history.",
          "Notice how Earth Day's founding is tied to a specific environmental event, the 1969 Santa Barbara oil spill — a reminder that many awareness days trace to a concrete triggering event, not just an abstract cause.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Who started Earth Day?", answer: "US Senator Gaylord Nelson of Wisconsin, who organized the first Earth Day on April 22, 1970, as a nationwide environmental teach-in, per Encyclopaedia Britannica." },
          { question: "Why is Earth Day on April 22?", answer: "That was the date Senator Gaylord Nelson chose for the first Earth Day in 1970, and it has been observed on that date every year since." },
          { question: "When did Earth Day become a global event?", answer: "Britannica documents Earth Day's expansion into an internationally observed event as happening in 1990, twenty years after its 1970 founding as a US-only observance." },
          { question: "Did Earth Day lead to the creation of the EPA?", answer: "Per the National Archives, the momentum from the first Earth Day helped drive the political action that led to the EPA's creation by President Nixon later in 1970, along with the Clean Air Act, Clean Water Act, and Endangered Species Act in the years that followed." },
          { question: "How many countries observe Earth Day today?", answer: "Per the National Archives, Earth Day is now observed by roughly a billion people across nearly 200 countries each year." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
