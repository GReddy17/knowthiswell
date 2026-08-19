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
  title: "Pride Month & Modern Observances (factual, respectful overview)",
  category: "festivals-culture",
  order: 49,
  subtopic: "modern-and-global-celebrations",
  tags: ["pride month", "stonewall", "lgbtq history", "modern celebrations"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Pride Month is observed each June to mark the anniversary of the 1969 Stonewall uprising, a documented event with a specific, well-recorded history.",
  summary: "Pride Month is a June observance commemorating LGBTQ history, anchored to the documented 1969 Stonewall uprising in New York City, the Pride marches that followed in 1970, and the US federal recognition that began in 1999.",
  sources: [
    { label: "Library of Congress — About: LGBTQ+ Pride Month", url: "https://www.loc.gov/lgbt-pride-month/about/" },
    { label: "Library of Congress — History and Overview, LGBTQ+ Pride Month Commemorative Observances Legal Research Guide", url: "https://guides.loc.gov/lesbian-gay-bisexual-transgender-queer-pride/history-overview" },
    { label: "National Park Service — Stonewall National Monument", url: "https://www.nps.gov/ston/" },
    { label: "National Park Service — Stonewall National Monument: History & Culture", url: "https://www.nps.gov/ston/learn/historyculture.htm" },
    { label: "Encyclopaedia Britannica — Stonewall Riots", url: "https://www.britannica.com/event/Stonewall-riots" },
    { label: "Smithsonian Institution — Marsha P. Johnson, Sylvia Rivera, and the History of Pride Month", url: "https://www.si.edu/stories/marsha-johnson-sylvia-rivera-and-history-pride-month" },
  ],
  seeAlso: [
    "festivals-culture/earth-day-and-modern-awareness-days",
    "festivals-culture/national-days-around-the-world-overview",
    "festivals-culture/valentines-day-explained",
    "festivals-culture/halloween-explained",
  ],
  glossary: [
    { term: "Stonewall uprising", definition: "A series of protests and confrontations between police and LGBTQ patrons and neighborhood residents that began at the Stonewall Inn in Greenwich Village, New York City, in the early hours of June 28, 1969, widely cited by institutions including the Library of Congress and the National Park Service as a catalyzing event in the LGBTQ rights movement." },
    { term: "Stonewall National Monument", definition: "A National Park Service site in Greenwich Village, New York City, designated in 2016, encompassing the Stonewall Inn, Christopher Park, and the surrounding streets that were the location of the 1969 uprising — the National Park System's first unit dedicated to LGBTQ history, per NPS." },
    { term: "Presidential proclamation", definition: "A formal statement issued by a US president. Presidential proclamations have been used, among other purposes, to designate commemorative observances — June was first designated 'Gay and Lesbian Pride Month' by a presidential proclamation in 1999, per the Library of Congress." },
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
          "Pride Month is observed each June, in the United States and, per the Library of Congress, in many other countries, to mark the anniversary of the Stonewall uprising — a series of protests that began at the Stonewall Inn in Greenwich Village, New York City, in the early hours of June 28, 1969.",
          "The first organized Pride marches took place in June 1970, on the uprising's first anniversary, including New York City's Christopher Street Liberation Day March, per the Smithsonian Institution — the observance grew out of a specific, documented event and a specific follow-up date, not an undated tradition.",
          "June was first formally recognized at the US federal level in 1999, when President Bill Clinton issued the first presidential proclamation designating June as 'Gay and Lesbian Pride Month,' a designation reissued in 2000 and continued in subsequent years, per the Library of Congress.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/festivals-culture/pride-month-and-modern-observances-factual-respectful-overview">Pride Month</TermLink> is observed every June to commemorate LGBTQ history and the LGBTQ rights movement. Per the Library of Congress, it marks the anniversary of the <TermLink href="/festivals-culture/pride-month-and-modern-observances-factual-respectful-overview">Stonewall uprising</TermLink>, a series of protests that began at the Stonewall Inn, a bar in New York City&apos;s Greenwich Village, in the early hours of June 28, 1969. The observance grew from local anniversary marches into a widely recognized month, marked today by many cities, organizations, and institutions around the world.</div>}
        detailed={<div className="prose-p">Per Encyclopaedia Britannica, homosexual acts were illegal in New York and most of the United States at the time, and gay bars were frequently targeted by police raids. In the early hours of June 28, 1969, police raided the Stonewall Inn; patrons and neighborhood residents resisted, and the confrontation grew into several days of protests, drawing hundreds of participants, per Britannica and the National Park Service (NPS). On the uprising&apos;s first anniversary, in June 1970, organized marches took place in New York City and other cities, including what the Smithsonian describes as New York&apos;s first Pride parade, the Christopher Street Liberation Day March. An important edge case, documented by Britannica and NPS: Stonewall was not the literal beginning of LGBTQ rights organizing in the United States — earlier groups, including the Mattachine Society, founded in the 1950s, predate it — but the Library of Congress describes Stonewall specifically as &quot;a tipping point&quot; that markedly accelerated the pace and scale of organizing, rather than as the movement&apos;s absolute starting point. At the federal level, June was first formally designated Gay and Lesbian Pride Month by a presidential proclamation from President Bill Clinton in 1999, reissued in 2000, per the Library of Congress&apos;s commemorative-observances research guide. In 2016, the site of the 1969 uprising was designated <TermLink href="/festivals-culture/pride-month-and-modern-observances-factual-respectful-overview">Stonewall National Monument</TermLink>, administered by the National Park Service — its first unit dedicated to LGBTQ history, per NPS.</div>}
      />
      <FootnoteAside>Per the National Park Service, only about sixty organizations dedicated to gay rights existed in the United States before the Stonewall uprising — but in the immediate years that followed, that number grew rapidly, with NPS documenting at least 1,500 such groups by 1970, the same year the first Pride marches were held.</FootnoteAside>
      <p>
      That sequence — a specific dated event in 1969, documented anniversary marches the following year, and formal federal recognition beginning three decades later, in 1999 — is the well-documented backbone worth having straight before looking at how the observance plays out today.
      </p>

      <QuickCheck
        question="What event do institutions such as the National Park Service and the Library of Congress cite as the catalyst for the modern Pride Month observance?"
        options={[
          { text: "A series of unspecified protests with no fixed date or documented location", correct: false, explanation: "The catalyzing event is specifically dated and located: the Stonewall uprising, which began at the Stonewall Inn in New York City in the early hours of June 28, 1969, per Britannica and NPS." },
          { text: "The Stonewall uprising, a series of protests that began at the Stonewall Inn in New York City in the early hours of June 28, 1969", correct: true, explanation: "Correct, per the Library of Congress, NPS, and Britannica. It's the specific, well-documented event institutions cite as the catalyst for the modern Pride observance." },
          { text: "The first US presidential proclamation recognizing Pride Month, issued in 1999", correct: false, explanation: "The 1999 proclamation was a documented act of federal recognition, three decades after the founding event — it formalized recognition of an existing observance, rather than originating it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Documented milestones</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Milestone 1: The Stonewall uprising, June 1969 (baseline / originating event)</h3>
      <div className="prose-p">
      Per Britannica and NPS, police raided the Stonewall Inn, a gay bar in Greenwich Village, New York City, in the early hours of June 28, 1969 — at a time when homosexual acts were illegal in New York and most of the United States, and gay bars were frequently targeted by police raids. Patrons and neighborhood residents resisted the raid, and the confrontation grew into several days of protests involving hundreds of people. Britannica and the Library of Congress both describe the uprising as a catalyzing event, though not the literal start of LGBTQ rights activism in the US — earlier organizing, including the Mattachine Society (founded in the 1950s), predates it.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Milestone 2: The first Pride marches, June 1970 (a documented follow-through, not an isolated event)</h3>
      <div className="prose-p">
      On the first anniversary of the uprising, organized marches took place in multiple US cities, per the Smithsonian Institution, including New York City&apos;s Christopher Street Liberation Day March, described by the Smithsonian as the city&apos;s first Pride parade. That these marches were organized specifically around the one-year anniversary, in more than one city independently, is itself part of the documented historical record — it wasn&apos;t a single isolated march that later got reinterpreted as an annual tradition.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Milestone 3: Federal recognition and today&apos;s observance (present-day)</h3>
      <div className="prose-p">
      June was first formally recognized at the US federal level in 1999, when President Bill Clinton issued the first presidential proclamation designating June as Gay and Lesbian Pride Month, reissued in 2000, per the Library of Congress&apos;s commemorative-observances research guide. In 2016, the site of the original uprising was designated Stonewall National Monument, administered by the National Park Service — its first unit dedicated to LGBTQ history, per NPS. Today, per the Library of Congress, June is observed as Pride Month by many cities, organizations, and institutions internationally, building on that documented sequence of events.
      </div>

      <QuickCheck
        question="What happened in June 1970, according to the Smithsonian Institution?"
        options={[
          { text: "The Stonewall Inn was permanently closed by New York City authorities", correct: false, explanation: "This isn't part of the documented 1970 record cited by the Smithsonian — June 1970 is documented as the date of the first organized Pride marches, on the uprising's first anniversary." },
          { text: "The first organized Pride marches took place, including New York City's Christopher Street Liberation Day March, on the uprising's first anniversary", correct: true, explanation: "Correct, per the Smithsonian Institution. These marches, held independently in more than one city, are the documented starting point for the annual Pride march tradition." },
          { text: "The US federal government issued its first proclamation recognizing Pride Month", correct: false, explanation: "Federal recognition came later — the first presidential proclamation designating Pride Month was issued in 1999, per the Library of Congress, nearly three decades after the 1970 marches." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Pride Month: a documented sequence, 1969 to today"
        type="flow"
        svgSrc="/diagrams/festivals-culture-pride-month-and-modern-observances-factual-respectful-overview-timeline.svg"
        altText="Horizontal timeline showing June 28 1969 the Stonewall uprising beginning at the Stonewall Inn in Greenwich Village New York City, June 1970 the first Pride marches including New York's Christopher Street Liberation Day March held on the uprising's first anniversary, 1999 the first US presidential proclamation designating June as Gay and Lesbian Pride Month issued by President Clinton, 2000 the proclamation reissued, 2016 the site of the uprising designated Stonewall National Monument by the National Park Service, and today's observance of June as Pride Month by many cities, organizations, and institutions internationally."
      />
      <p>
      Set out this way, Pride Month&apos;s history reads as a documented sequence anchored to a specific 1969 event, not an undated or informal custom — the same standard applied to other historical observances covered on this site.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming Pride Month commemorates a vague or undated tradition.", fix: "It's anchored to a specific, dated event — the Stonewall uprising, which began June 28, 1969 — and a specific documented follow-on date, the first Pride marches in June 1970, per Britannica, NPS, and the Smithsonian." },
          { mistake: "Assuming the Stonewall uprising was the very first instance of LGBTQ rights organizing in US history.", fix: "Earlier organizations, including the Mattachine Society (founded in the 1950s), predate it. The Library of Congress describes Stonewall as a documented 'tipping point' that accelerated organizing, not the movement's absolute starting point." },
          { mistake: "Assuming federal recognition of Pride Month is a very recent development.", fix: "The first US presidential proclamation designating June as Gay and Lesbian Pride Month dates to 1999, reissued in 2000, per the Library of Congress's commemorative-observances research guide." },
        ]}
      />
      <MisconceptionCallout
        myth="Pride Month commemorates a vague, undocumented origin rather than a specific, well-documented historical event."
        reality={<p>Pride Month is anchored to a specific, dated, well-documented event: the Stonewall uprising, which began at the Stonewall Inn in Greenwich Village, New York City, in the early hours of June 28, 1969, per Encyclopaedia Britannica and the National Park Service. It is followed by a documented sequence of dated milestones — the first Pride marches on the uprising&apos;s first anniversary in June 1970 (per the Smithsonian Institution), the first US presidential proclamation recognizing Pride Month in 1999 (per the Library of Congress), and the 2016 designation of Stonewall National Monument by the National Park Service. This is the same kind of documented, source-attributed historical record applied to other dated historical observances.</p>}
      />

      <QuickCheck
        question="Which best describes the historical basis for Pride Month, according to institutions such as NPS and the Library of Congress?"
        options={[
          { text: "It commemorates a specific, dated historical event — the June 1969 Stonewall uprising — followed by a documented sequence of anniversary marches and eventual federal recognition", correct: true, explanation: "Correct. This is the documented sequence cited by NPS, the Library of Congress, Britannica, and the Smithsonian." },
          { text: "It has no specific founding event and instead reflects a general, undated cultural sentiment", correct: false, explanation: "This is the misconception — Pride Month is tied to a specific dated event (June 28, 1969) and a specific documented follow-on anniversary observance (June 1970), not an undated sentiment." },
          { text: "It was created entirely by the US federal government in 1999 with no earlier grassroots history", correct: false, explanation: "The 1999 proclamation formalized federal recognition of an observance that had already existed at the grassroots level for nearly three decades, tracing to the 1969 uprising and the 1970 marches." },
        ]}
      />

      <EntryCalculator
        title="Years since the Stonewall uprising"
        fields={[
          { key: "year", label: "Reference year (Stonewall uprising: 1969)", defaultValue: 1969 },
        ]}
        resultLabel="Years elapsed since that year"
        formula="yearsSinceYear"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time June is described simply as 'Pride Month' with no further context, note that it traces to a specific dated event, the Stonewall uprising of June 28, 1969.",
          "If you read about Stonewall National Monument, note that it's administered by the National Park Service and was designated in 2016 as its first unit dedicated to LGBTQ history.",
          "Notice that the first Pride marches took place in 1970, on the uprising's first anniversary, not immediately in 1969 — the annual march tradition has its own documented starting point.",
          "If you see a claim about when the US government first officially recognized Pride Month, check it against the Library of Congress's documented record of the 1999 and 2000 presidential proclamations.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is Pride Month?", answer: "Pride Month is observed each June to commemorate LGBTQ history, anchored to the anniversary of the Stonewall uprising, per the Library of Congress." },
          { question: "Why is Pride Month in June?", answer: "June marks the anniversary of the Stonewall uprising, which began at the Stonewall Inn in New York City in the early hours of June 28, 1969, per the National Park Service and Encyclopaedia Britannica." },
          { question: "What happened at Stonewall in 1969?", answer: "Per Britannica, police raided the Stonewall Inn, a gay bar in Greenwich Village, New York City; patrons and neighborhood residents resisted, and the confrontation grew into several days of protests, widely cited as a catalyzing event in the LGBTQ rights movement." },
          { question: "When did the US government first officially recognize Pride Month?", answer: "In 1999, when President Bill Clinton issued the first presidential proclamation designating June as Gay and Lesbian Pride Month, reissued in 2000, per the Library of Congress." },
          { question: "Is the Stonewall Inn a real historic site you can visit?", answer: "Yes. In 2016, the site was designated Stonewall National Monument, administered by the National Park Service, encompassing the Stonewall Inn, Christopher Park, and the surrounding streets in Greenwich Village, New York City." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
