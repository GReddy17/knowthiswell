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
  title: "Ramadan Explained",
  category: "festivals-culture",
  order: 11,
  subtopic: "major-world-religious-festivals",
  tags: ["ramadan", "islamic festivals", "fasting", "religious festivals"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Ramadan is the Islamic month of dawn-to-sunset fasting, prayer, and reflection, observed by Muslims worldwide as one of the Five Pillars of Islam.",
  summary: "Ramadan is the ninth month of the Islamic lunar calendar, during which practicing Muslims fast from dawn to sunset as an act of spiritual discipline, one of the Five Pillars of Islam, alongside increased prayer, charity, and Quran reading.",
  sources: [
    { label: "Encyclopaedia Britannica — Ramadan", url: "https://www.britannica.com/topic/Ramadan" },
    { label: "BBC Religion — Islam: Ramadan", url: "https://www.bbc.co.uk/religion/religions/islam/practices/ramadan.shtml" },
    { label: "Pew Research Center — Ramadan Around the World", url: "https://www.pewresearch.org" },
  ],
  seeAlso: [
    "festivals-culture/eid-explained-eid-al-fitr-and-eid-al-adha",
    "festivals-culture/hanukkah-explained",
    "festivals-culture/easter-explained",
  ],
  glossary: [
    { term: "Sawm", definition: "The Arabic term for fasting, one of the Five Pillars of Islam and the core obligation observed during Ramadan." },
    { term: "Suhoor", definition: "The meal eaten before dawn, before the daily fast begins during Ramadan." },
    { term: "Iftar", definition: "The meal eaten to break the daily fast at sunset during Ramadan, traditionally begun with dates and water." },
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
          "In Islamic tradition, Ramadan is the ninth month of the Islamic lunar calendar, during which practicing Muslims fast from dawn to sunset as one of the Five Pillars of Islam.",
          "The fast (sawm) means abstaining from food, drink, and other physical needs during daylight hours — it is understood in Islamic teaching as a spiritual discipline centered on self-restraint, empathy for those less fortunate, and closeness to God, not a weight-loss or dietary practice.",
          "Because the Islamic calendar is purely lunar, Ramadan shifts roughly 10-11 days earlier each Gregorian year, moving through all four seasons over a roughly 33-year cycle.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Ramadan is the ninth month of the Islamic calendar, during which practicing Muslims fast from dawn to sunset — no food, drink, or smoking during daylight hours. The fast is broken each evening with a meal called <TermLink href="/festivals-culture/ramadan-explained">iftar</TermLink>, and a meal called <TermLink href="/festivals-culture/ramadan-explained">suhoor</TermLink> is eaten before dawn. Alongside fasting, the month emphasizes increased prayer, charity, and reading the Quran. It ends with the festival of Eid al-Fitr.</div>}
        detailed={<div className="prose-p">In Islamic tradition, <TermLink href="/festivals-culture/ramadan-explained">sawm</TermLink> (fasting) during Ramadan is described in the Quran as obligatory for adult Muslims who are physically able, and it is observed as commemorating the month in which the Quran is believed, in Islamic teaching, to have first been revealed to the Prophet Muhammad. Certain groups are traditionally exempted from fasting or permitted to make up missed days later — including travelers, the ill, pregnant or breastfeeding people, and young children — reflecting how the obligation is applied with recognized flexibility rather than as an absolute rule for every individual in every circumstance. Because the Islamic calendar is purely lunar, with no leap-month adjustment to stay aligned with the solar year, Ramadan&apos;s Gregorian start date shifts about 10-11 days earlier annually, meaning it moves gradually through all four seasons over roughly 33 years — a Ramadan falling in the long daylight hours of a Northern Hemisphere summer involves a markedly longer daily fast than one falling in winter. The month&apos;s spiritual emphasis extends beyond the physical fast: many Muslims increase nightly prayers (tarawih), aim to complete a full reading of the Quran across the month, and give charity, including Zakat al-Fitr, an obligatory donation given before the Eid al-Fitr prayer at the month&apos;s end.</div>}
      />
      <FootnoteAside>The exact start of Ramadan has historically depended on the physical sighting of the new crescent moon, which is why in some years different countries and communities have begun the fast a day apart — many communities today combine sighting reports with astronomical calculation to set the date in advance.</FootnoteAside>

      <QuickCheck
        question="According to Islamic teaching, what is the primary purpose of fasting during Ramadan?"
        options={[
          { text: "A dietary practice primarily intended for weight loss or health benefits", correct: false, explanation: "This is a common misreading — in Islamic teaching, the fast is a spiritual discipline centered on self-restraint, gratitude, and empathy for those with less, not a health or weight-management program." },
          { text: "A spiritual discipline emphasizing self-restraint, devotion, and empathy for those who are less fortunate", correct: true, explanation: "Correct. Islamic teaching frames sawm as one of the Five Pillars of Islam, intended to build spiritual discipline and empathy, alongside increased prayer and charity during the month." },
          { text: "A civic requirement unrelated to religious practice", correct: false, explanation: "Fasting during Ramadan is a religious obligation described in Islamic scripture and practice, not a secular civic rule." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A typical fasting day (baseline case)</h3>
      <div className="prose-p">A person wakes before dawn for suhoor, a meal meant to sustain them through the day, then observes the fast — no food or drink, including water — from the pre-dawn call to prayer until sunset. Many mosques and community centers hold additional evening prayers (tarawih) after breaking the fast. At sunset, the fast is broken with iftar, traditionally begun with dates and water, following a practice attributed to the Prophet Muhammad, before a fuller meal.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Fasting exemptions — a documented variation within the practice</h3>
      <div className="prose-p">Islamic teaching recognizes that not everyone can fast under the same conditions: travelers, people who are ill, pregnant or breastfeeding individuals, and pre-pubescent children are traditionally exempted, with some categories expected to make up missed days later when able, or in some interpretations to provide a charitable donation (fidya) instead. This isn&apos;t a loophole or a sign of lesser observance — it reflects an explicit, longstanding accommodation within Islamic legal tradition for genuine hardship.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Ramadan in non-Muslim-majority workplaces (real-world / applied case)</h3>
      <div className="prose-p">In countries where Ramadan isn&apos;t a public holiday, many employers and schools with Muslim staff or students now formally accommodate the month — adjusting shift schedules to avoid heavy physical labor during peak fasting hours, allowing flexibility around prayer times, and recognizing that energy levels and daily rhythms shift for fasting employees. Because Ramadan&apos;s start date is confirmed only shortly before the month begins (moon-sighting practices vary by community), this kind of accommodation typically requires planning with some built-in flexibility around the exact dates.</div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the Ramadan fast includes abstaining from water.", fix: "It does — the fast includes both food and drink, including water, from dawn until sunset, not food alone." },
          { mistake: "Assuming everyone who identifies as Muslim is expected to fast under identical conditions.", fix: "Islamic tradition recognizes exemptions for travelers, the ill, pregnant or breastfeeding people, and young children, often with a make-up or charitable alternative." },
          { mistake: "Treating Ramadan and Eid al-Fitr as the same event.", fix: "Ramadan is the month-long period of fasting; Eid al-Fitr is the distinct festival that marks its end, on the first day of the following month, Shawwal." },
        ]}
      />
      <MisconceptionCallout
        myth="Ramadan is primarily a dieting or weight-loss practice rather than a spiritual one."
        reality={<p>In Islamic teaching, the fast observed during Ramadan is described as a spiritual and devotional discipline — intended to build self-restraint, gratitude, and empathy for people who face hunger or hardship regularly — rather than a health or weight-management regimen. The physical experience of fasting is real and significant, but its stated purpose in Islamic tradition centers on spiritual practice, not diet outcomes, and it is paired with increased prayer, charity, and Quran reading across the month.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you hear someone mention Ramadan, remember it's a month-long observance, not a single day — Eid al-Fitr is the separate festival that marks its end.",
          "If a colleague or friend is fasting for Ramadan, keep in mind the fast includes water too, and daily energy levels may shift, especially during long-daylight months.",
          "Look up this year's Ramadan start date if it's relevant to you — since it follows the lunar calendar, it moves about 10-11 days earlier each Gregorian year.",
          "If you're invited to an iftar, notice the custom of breaking the fast with dates and water first — it's a widely followed practice tied to tradition, not just a food preference.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is Ramadan and why do Muslims fast?", answer: "Ramadan is the ninth month of the Islamic lunar calendar, during which practicing Muslims fast from dawn to sunset as one of the Five Pillars of Islam, observed in Islamic tradition as a spiritual discipline centered on self-restraint, devotion, and empathy for those with less." },
          { question: "Can Muslims drink water during Ramadan fasting?", answer: "No — the fast during Ramadan daylight hours includes abstaining from both food and drink, including water, not food alone." },
          { question: "Why does Ramadan start on a different date every year?", answer: "The Islamic calendar is purely lunar with no adjustment to stay aligned with the solar year, so Ramadan's Gregorian start date shifts roughly 10-11 days earlier annually." },
          { question: "Does everyone have to fast during Ramadan?", answer: "No — Islamic tradition exempts groups including travelers, people who are ill, pregnant or breastfeeding individuals, and young children, often with a requirement to make up missed days later or provide charity instead." },
          { question: "What is the difference between suhoor and iftar?", answer: "Suhoor is the meal eaten before dawn, before the daily fast begins; iftar is the meal eaten at sunset to break the fast, traditionally started with dates and water." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
