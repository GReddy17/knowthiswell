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
  title: "Easter Explained",
  category: "festivals-culture",
  order: 13,
  subtopic: "major-world-religious-festivals",
  tags: ["easter", "christian festivals", "religious festivals", "lent"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Easter is the Christian festival commemorating the resurrection of Jesus Christ, its date calculated each year from the lunar calendar rather than fixed.",
  summary: "Easter is the central festival of the Christian liturgical calendar, commemorating the resurrection of Jesus Christ three days after his crucifixion, with its date calculated annually from the lunar cycle rather than fixed on the Gregorian calendar.",
  sources: [
    { label: "Encyclopaedia Britannica — Easter", url: "https://www.britannica.com/topic/Easter" },
    { label: "BBC Religion — Christianity: Easter", url: "https://www.bbc.co.uk/religion/religions/christianity/holydays/easter.shtml" },
    { label: "Vatican News — Understanding Holy Week and Easter", url: "https://www.vaticannews.va" },
  ],
  seeAlso: [
    "festivals-culture/christmas-in-india-and-globally",
    "festivals-culture/hanukkah-explained",
    "festivals-culture/vesak-buddhist-festival-explained",
  ],
  glossary: [
    { term: "Lent", definition: "The 40-day period of fasting, reflection, and repentance leading up to Easter in the Christian liturgical calendar, beginning on Ash Wednesday." },
    { term: "Holy Week", definition: "The week preceding Easter Sunday, including Palm Sunday, Maundy Thursday, and Good Friday, commemorating the final days of Jesus's life." },
    { term: "Paschal", definition: "An adjective relating to Easter or Passover, derived from Pesach, the Hebrew word for Passover, reflecting Easter's historical and calendrical connection to the Jewish festival." },
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
          "Easter is the central festival of the Christian calendar, commemorating the resurrection of Jesus Christ, understood in Christian teaching as occurring three days after his crucifixion.",
          "Unlike Christmas, Easter's date is not fixed — it's calculated each year based on the lunar calendar, specifically the first Sunday after the first full moon following the spring equinox.",
          "Western churches (Catholic and most Protestant) and Eastern Orthodox churches often observe Easter on different dates because they use different calendars (Gregorian vs. Julian) to calculate it, and occasionally, though not always, they align.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Easter is the Christian festival commemorating the resurrection of Jesus Christ, observed on a Sunday in spring. It&apos;s preceded by <TermLink href="/festivals-culture/easter-explained">Lent</TermLink>, a 40-day period of fasting and reflection, and <TermLink href="/festivals-culture/easter-explained">Holy Week</TermLink>, which includes Palm Sunday, Maundy Thursday, and Good Friday. Unlike Christmas, Easter doesn&apos;t fall on the same calendar date every year — it moves based on the lunar calendar.</div>}
        detailed={<div className="prose-p">Easter&apos;s date is set by a rule established at the Council of Nicaea in 325 CE: it falls on the first Sunday after the first full moon occurring on or after the spring (vernal) equinox — a calculation historically tied to Passover (Pesach), since the Christian Gospels place Jesus&apos;s crucifixion and resurrection around the time of the Jewish Passover festival, which is itself set by a lunar calendar. This is why Easter is termed a &quot;movable feast&quot;: in the Gregorian calendar used by Western Christianity (Roman Catholic and most Protestant churches), it can fall anywhere between March 22 and April 25. Eastern Orthodox churches calculate the same underlying rule but using the older Julian calendar and additionally requiring Easter to fall after the Jewish Passover, which is why Orthodox Easter frequently falls on a different date than Western Easter — sometimes by a few weeks, occasionally coinciding in the same year. The 40 days of Lent leading up to Easter, beginning on Ash Wednesday, are traditionally marked by fasting, almsgiving, and repentance, while the days immediately before Easter — Holy Week — commemorate specific events: Palm Sunday (Jesus&apos;s entry into Jerusalem), Maundy Thursday (the Last Supper), and Good Friday (the crucifixion), before Easter Sunday itself.</div>}
      />
      <FootnoteAside>Because Easter&apos;s date depends on the astronomical or ecclesiastical full moon and equinox, an international effort (including proposals discussed by the World Council of Churches) has periodically explored fixing a common date for both Western and Orthodox Easter, though no such change has been widely adopted.</FootnoteAside>

      <QuickCheck
        question="Why does Easter fall on a different date each year, unlike Christmas?"
        options={[
          { text: "Its date is calculated from the lunar calendar — the first Sunday after the first full moon following the spring equinox", correct: true, explanation: "Correct. Easter is a 'movable feast' whose date is calculated annually from lunar and solar events, unlike Christmas, which is fixed on December 25 (or January 7 for some Orthodox churches)." },
          { text: "Different countries are allowed to set their own Easter date by law", correct: false, explanation: "Easter's date isn't set by national law — it follows a calculation rule established by the early Christian church, tied to the full moon and the spring equinox." },
          { text: "It is scheduled around school holiday calendars, which vary by country", correct: false, explanation: "School holidays are often scheduled around Easter, not the other way around — the date itself comes from the church's lunar-based calculation rule." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A typical Western Easter Sunday (baseline case)</h3>
      <div className="prose-p">Following 40 days of Lent, many churches hold a sunrise service on Easter morning, followed by a main Easter service that is often one of the most heavily attended of the Christian liturgical year. Families gather for a meal, and secular customs like egg decorating and egg hunts — which predate and exist alongside the religious observance — are common in many countries, particularly for children. The Easter season in the church calendar actually continues for 50 days afterward, until Pentecost, though the Sunday itself receives the most public attention.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Orthodox Easter on a different date — a documented variation</h3>
      <div className="prose-p">Eastern Orthodox churches use the same underlying rule (first Sunday after the first full moon following the equinox) but calculate it using the older Julian calendar and require it to fall after Passover, which frequently produces a different date than Western Easter — sometimes by one week, sometimes by four or five. In years when the Julian and Gregorian calculations happen to align, Western and Orthodox Easter fall on the same Sunday, but this isn&apos;t the norm; the two traditions calculate the date independently rather than intentionally synchronizing.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Easter&apos;s secular customs today (real-world / applied case)</h3>
      <div className="prose-p">Symbols like the Easter Bunny and egg-decorating have origins that predate or run parallel to the Christian observance — eggs, in particular, have long served as a broader springtime symbol of new life and renewal in various pre-Christian European traditions, later absorbed alongside the Christian meaning. Today, Easter egg hunts, egg decorating, and gift-giving are widely practiced in many countries as a family and children&apos;s tradition, observed by many people regardless of religious affiliation, similar to how Christmas trees and lights are enjoyed beyond practicing Christian households.</div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming Easter falls on a fixed calendar date like Christmas.", fix: "Easter is a movable feast, calculated each year as the first Sunday after the first full moon following the spring equinox, so its Gregorian date shifts between March 22 and April 25." },
          { mistake: "Assuming Western and Orthodox churches always celebrate Easter on the same date.", fix: "They use different calendars (Gregorian vs. Julian) and calculation rules, so their Easter dates often differ, sometimes by several weeks, occasionally aligning." },
          { mistake: "Treating Easter egg and bunny customs as having a Christian scriptural origin.", fix: "These are widely understood by historians to be secular or pre-Christian springtime symbols of renewal that became associated with the Easter season over time, not elements described in the Christian resurrection accounts themselves." },
        ]}
      />
      <MisconceptionCallout
        myth="Easter's date is fixed on the calendar each year, similar to Christmas's December 25."
        reality={<p>Unlike Christmas, Easter is a &quot;movable feast&quot; — its date is recalculated every year according to a rule set at the Council of Nicaea in 325 CE: the first Sunday after the first full moon following the spring equinox. This is why Easter can fall anywhere between March 22 and April 25 in the Gregorian calendar used by Western churches, and why Eastern Orthodox churches, using the Julian calendar and an additional rule tied to Passover, often observe it on a different date entirely.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you check this year's Easter date, remember it's calculated from the lunar calendar and spring equinox, not fixed — it will fall on a different Sunday than last year.",
          "If you see 'Orthodox Easter' mentioned separately from 'Easter', recognize it's a calculation difference (Julian vs. Gregorian calendar), not a separate holiday with different meaning.",
          "Notice which Easter customs you encounter are religious (church services, Lent, Holy Week) versus secular and pre-Christian in origin (egg hunts, the Easter Bunny).",
          "If you're tracking Lent, count back 40 days (not counting Sundays) from Easter Sunday to find Ash Wednesday, its traditional starting point.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why does Easter fall on a different date every year?", answer: "Easter's date is calculated annually as the first Sunday after the first full moon following the spring equinox, a rule set at the Council of Nicaea in 325 CE, rather than being fixed on a specific calendar date." },
          { question: "What is the earliest and latest Easter can fall?", answer: "In the Gregorian calendar used by Western churches, Easter can fall as early as March 22 or as late as April 25." },
          { question: "Why do Orthodox and Western churches celebrate Easter on different dates?", answer: "Orthodox churches calculate Easter using the older Julian calendar and require it to fall after Passover, while Western churches use the Gregorian calendar, so the two traditions frequently land on different Sundays." },
          { question: "What is Lent and how long does it last?", answer: "Lent is the 40-day period of fasting, reflection, and repentance leading up to Easter in the Christian liturgical calendar, beginning on Ash Wednesday." },
          { question: "Are Easter eggs and the Easter Bunny religious symbols?", answer: "No — historians generally trace these customs to secular or pre-Christian springtime symbols of renewal and fertility that became associated with the Easter season over time, rather than to the Christian resurrection accounts themselves." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
