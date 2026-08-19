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
  title: "Eid Explained (Eid al-Fitr & Eid al-Adha)",
  category: "festivals-culture",
  order: 3,
  subtopic: "major-indian-festivals",
  tags: ["eid", "islamic festivals", "eid al-fitr", "eid al-adha"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Eid al-Fitr and Eid al-Adha are the two major Islamic festivals — one marking the end of Ramadan, the other commemorating Ibrahim's willingness to sacrifice.",
  summary: "Muslims celebrate two distinct festivals called Eid each year — Eid al-Fitr, ending the fasting month of Ramadan, and Eid al-Adha, marking the Hajj pilgrimage season and Ibrahim's test of faith.",
  sources: [
    { label: "Encyclopaedia Britannica — Eid al-Fitr", url: "https://www.britannica.com/topic/id-al-fitr" },
    { label: "Encyclopaedia Britannica — Eid al-Adha", url: "https://www.britannica.com/topic/id-al-adha" },
    { label: "BBC Religion — Islam: Eid ul Fitr and Eid ul Adha", url: "https://www.bbc.co.uk/religion/religions/islam/holydays/eiduladha.shtml" },
  ],
  seeAlso: [
    "festivals-culture/ramadan-explained",
    "festivals-culture/fasting-traditions-across-cultures",
    "festivals-culture/festivals-of-light-around-the-world",
  ],
  glossary: [
    { term: "Eid al-Fitr", definition: "The 'festival of breaking the fast', celebrated at the end of Ramadan, the Islamic month of fasting." },
    { term: "Eid al-Adha", definition: "The 'festival of sacrifice', held during the Hajj pilgrimage season, commemorating Ibrahim's willingness to sacrifice his son in obedience to God." },
    { term: "Hajj", definition: "The annual Islamic pilgrimage to Mecca, one of the Five Pillars of Islam, which Eid al-Adha coincides with." },
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
          "\"Eid\" isn't one festival — it refers to two distinct Islamic celebrations each year, Eid al-Fitr and Eid al-Adha, with different origins and about two months apart.",
          "Eid al-Fitr marks the end of Ramadan's month-long fasting; Eid al-Adha commemorates Ibrahim's willingness to sacrifice his son and coincides with the Hajj pilgrimage.",
          "Both dates follow the Islamic lunar calendar, so they shift roughly 10-11 days earlier each Gregorian year — there's no fixed Western-calendar date for either.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/festivals-culture/eid-explained-eid-al-fitr-and-eid-al-adha">Eid al-Fitr</TermLink> celebrates the end of Ramadan, the month Muslims spend fasting from dawn to sunset. <TermLink href="/festivals-culture/eid-explained-eid-al-fitr-and-eid-al-adha">Eid al-Adha</TermLink> comes about two months later and honors the Prophet Ibrahim&apos;s willingness to sacrifice his son in obedience to God, before God provided a ram to sacrifice instead. Both are marked with special prayers, new clothes, gathering with family, and charitable giving.</div>}
        detailed={<div className="prose-p">Eid al-Fitr falls on the first day of Shawwal, the month immediately after Ramadan in the Islamic lunar calendar, and is preceded by Zakat al-Fitr — an obligatory charitable donation given before the Eid prayer, ensuring less fortunate community members can also celebrate. Eid al-Adha falls on the 10th day of Dhu al-Hijjah, coinciding with the culmination of the <TermLink href="/festivals-culture/eid-explained-eid-al-fitr-and-eid-al-adha">Hajj</TermLink> pilgrimage to Mecca (though celebrated by all Muslims, not only those on pilgrimage). Its central ritual is Qurbani — the sacrifice of an animal (commonly a sheep, goat, cow, or camel), with the meat traditionally divided into three parts: for family, for friends, and for those in need. Because the Islamic calendar is purely lunar (not lunisolar like the Hindu calendar), both Eids drift through all four seasons over roughly a 33-year cycle.</div>}
      />
      <FootnoteAside>Eid al-Adha is often called the &quot;Greater Eid&quot; and Eid al-Fitr the &quot;Lesser Eid&quot; in some traditions, based on the religious significance and duration of each, though both are major, widely celebrated holidays.</FootnoteAside>

      <QuickCheck
        question="Why do Eid al-Fitr and Eid al-Adha fall on different Gregorian dates each year?"
        options={[
          { text: "They follow the purely lunar Islamic calendar, which is shorter than the solar year, so dates shift earlier each Gregorian year", correct: true, explanation: "Correct. The Islamic calendar has no leap-month adjustment for the solar year, so it drifts roughly 10-11 days earlier annually relative to the Gregorian calendar." },
          { text: "They are set by individual countries and change based on local politics", correct: false, explanation: "The dates are determined by the Islamic lunar calendar (moon-sighting or astronomical calculation, depending on the community), not by national political decisions, though the exact sighting method used can cause a one-day difference between regions." },
          { text: "Only Eid al-Adha shifts each year; Eid al-Fitr has a fixed Gregorian date", correct: false, explanation: "Both follow the same lunar calendar system and both shift each year — neither has a fixed Gregorian date." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A typical Eid al-Fitr morning (baseline case)</h3>
      <div className="prose-p">Families rise early, bathe, and dress in new or best clothes before attending a special congregational Eid prayer, often held outdoors or in larger venues than a regular daily prayer due to attendance. Zakat al-Fitr is given before the prayer, not after. The rest of the day is spent visiting relatives, exchanging gifts (especially with children, who often receive &quot;Eidi&quot; — money gifts), and eating festive foods that break the month of daytime fasting.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Eid al-Adha and the Qurbani meat distribution — a distinct ritual</h3>
      <div className="prose-p">Unlike Eid al-Fitr, Eid al-Adha centers on the Qurbani sacrifice. A family (or a group sharing the cost) arranges for an animal to be sacrificed according to Islamic dietary rules, and the meat is divided roughly into thirds — kept for the household, shared with friends and relatives, and given to those in need. In many countries, families who don&apos;t perform the sacrifice themselves can donate through registered charities that carry out Qurbani on their behalf and distribute meat internationally, which has become the more common practice in urban and diaspora communities.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Eid in a non-Muslim-majority country (real-world / applied case)</h3>
      <div className="prose-p">In countries where Eid isn&apos;t a public holiday, many Muslim employees and students request time off specifically for the Eid prayer and family gathering, and schools/employers with significant Muslim populations increasingly accommodate this explicitly. Since the date isn&apos;t fixed on the Gregorian calendar and depends on moon sighting, the exact date is often only confirmed a day or two in advance, which is a genuine practical planning challenge unique to Islamic holidays compared to fixed-date ones like Christmas.</div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating 'Eid' as a single festival.", fix: "There are two: Eid al-Fitr (end of Ramadan) and Eid al-Adha (Ibrahim's sacrifice, Hajj season), roughly two months apart." },
          { mistake: "Assuming the date is fixed year to year, like Christmas.", fix: "Both follow the lunar Islamic calendar and shift about 10-11 days earlier each Gregorian year." },
          { mistake: "Assuming Eid al-Adha's sacrifice ritual only applies to people physically on Hajj pilgrimage.", fix: "Qurbani is performed by Muslims worldwide, not only pilgrims — the Hajj and Eid al-Adha coincide in timing but the sacrifice ritual is a separate, universal observance." },
        ]}
      />
      <MisconceptionCallout
        myth="Eid is the Islamic equivalent of a single New Year's-style celebration, roughly once a year."
        reality={<p>Eid refers to two separate, religiously distinct festivals with different origins, rituals, and durations — Eid al-Fitr (1-3 days, ending Ramadan&apos;s fast) and Eid al-Adha (up to 4 days, tied to the Hajj and the sacrifice tradition). Treating them as one interchangeable event misses that they mark entirely different religious moments in the Islamic calendar.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "When you see 'Eid' mentioned, check whether it's Eid al-Fitr or Eid al-Adha — the context (end of Ramadan vs. Hajj season) usually tells you which.",
          "If a Muslim colleague or friend requests leave for Eid, remember the exact date may only be confirmed a day or two ahead due to moon-sighting practices.",
          "Learn the greeting \"Eid Mubarak\" (blessed Eid) — it applies to both festivals and is the standard greeting exchanged.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between Eid al-Fitr and Eid al-Adha?", answer: "Eid al-Fitr marks the end of Ramadan's month of fasting; Eid al-Adha, about two months later, commemorates Ibrahim's willingness to sacrifice his son and coincides with the Hajj pilgrimage season." },
          { question: "Why does the date of Eid change every year?", answer: "Both Eids follow the purely lunar Islamic calendar, which is about 10-11 days shorter than the solar year, so their Gregorian dates shift earlier annually." },
          { question: "What do people say to greet each other on Eid?", answer: "\"Eid Mubarak\", meaning \"blessed Eid\", is the standard greeting used for both Eid al-Fitr and Eid al-Adha." },
          { question: "Is Eid al-Adha only for people going on Hajj?", answer: "No — the Qurbani sacrifice is performed by Muslims worldwide regardless of whether they're on pilgrimage; the Hajj and Eid al-Adha simply share the same time of year." },
          { question: "How long does Eid last?", answer: "Eid al-Fitr is typically observed for 1-3 days depending on the country; Eid al-Adha is often observed for up to 4 days." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
