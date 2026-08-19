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
  title: "Fasting Traditions Across Cultures",
  category: "festivals-culture",
  order: 28,
  subtopic: "food-and-culture",
  tags: ["religious fasting", "ramadan", "lent", "yom kippur", "ekadashi"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Religious fasting takes very different forms across traditions — Ramadan's dawn-to-sunset fast, Yom Kippur's 25-hour fast, Lent's 40-day abstention, and Hindu ekadashi fasts.",
  summary: "Fasting — deliberately abstaining from food, drink, or specific foods for a set period — is a spiritual practice found across nearly every major religious tradition, though the rules, duration, and meaning differ significantly from one to the next.",
  sources: [
    { label: "Encyclopaedia Britannica — Ramadan", url: "https://www.britannica.com/topic/Ramadan" },
    { label: "Encyclopaedia Britannica — Yom Kippur", url: "https://www.britannica.com/topic/Yom-Kippur" },
    { label: "Encyclopaedia Britannica — Lent", url: "https://www.britannica.com/topic/Lent" },
    { label: "Encyclopaedia Britannica — fasting", url: "https://www.britannica.com/topic/fasting" },
  ],
  seeAlso: [
    "festivals-culture/eid-explained-eid-al-fitr-and-eid-al-adha",
    "festivals-culture/food-traditions-around-the-world",
    "festivals-culture/festival-foods-of-india",
    "festivals-culture/dining-etiquette-around-the-world",
  ],
  glossary: [
    { term: "Ramadan", definition: "The ninth month of the Islamic lunar calendar, during which observant Muslims fast from dawn to sunset — one of the Five Pillars of Islam." },
    { term: "Yom Kippur", definition: "The Jewish Day of Atonement, the holiest day in the Jewish calendar, marked by a roughly 25-hour fast from food and water." },
    { term: "Ekadashi", definition: "The 11th day of each lunar fortnight in the Hindu calendar, observed by many practicing Hindus with a partial or full fast as a devotional practice." },
    { term: "Uposatha", definition: "Buddhist observance days, often tied to the lunar calendar, on which some practicing Buddhists (especially monastics) refrain from eating after midday." },
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
          "Religious fasting appears across nearly every major tradition — Islam's Ramadan, Judaism's Yom Kippur, Christianity's Lent, and Hinduism's ekadashi are distinct practices, not variations on one universal rule.",
          "The specifics differ enormously: duration ranges from a single day (Yom Kippur) to a full lunar month (Ramadan) to 40 days (Lent), and what's restricted ranges from all food and water to specific foods only.",
          "The underlying purpose across traditions is consistently spiritual — self-discipline, atonement, purification, or solidarity with those who go without — rather than a health or weight-management practice, even though it can have secondary physical effects.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Fasting means deliberately not eating (or not eating certain things) for a set period as part of a religious practice. Muslims fast from dawn to sunset every day during <TermLink href="/festivals-culture/fasting-traditions-across-cultures">Ramadan</TermLink>; Jewish people fast for about 25 hours on <TermLink href="/festivals-culture/fasting-traditions-across-cultures">Yom Kippur</TermLink>; many Christians give up a specific food or habit for the 40 days of Lent; and many Hindus fast on ekadashi and other designated days. Despite looking very different in practice, all of these share a common spiritual purpose — discipline, reflection, atonement, or devotion — rather than being about diet or health.</div>}
        detailed={<div className="prose-p">The mechanics vary sharply by tradition. Ramadan&apos;s fast is a complete daily abstention from food, drink, and other physical needs from dawn (fajr) to sunset (maghrib) for the entire lunar month, broken each evening with a meal called iftar and resumed before dawn with suhoor — it&apos;s one of the Five Pillars of Islam. Yom Kippur&apos;s fast is shorter but stricter in a different sense: a single continuous roughly 25-hour period (sunset to nightfall the following day) with no food or water at all, observed as the culmination of the Jewish High Holy Days, centered on atonement and repentance. Christian Lent, observed by Catholics and many other denominations for the 40 days before Easter (excluding Sundays), is traditionally less about total abstention and more about giving up a specific food, habit, or luxury as an act of penance and spiritual discipline, with Ash Wednesday and Good Friday often kept as stricter fasting days. In Hinduism, <TermLink href="/festivals-culture/fasting-traditions-across-cultures">ekadashi</TermLink> — the 11th day of each lunar fortnight — is observed by many practicing Hindus with a full or partial fast (commonly avoiding grains and certain foods rather than all food) as an act of devotion, alongside other occasion-specific vrat (vow) fasts tied to particular festivals or deities. Buddhist fasting is generally more localized to monastic practice: on <TermLink href="/festivals-culture/fasting-traditions-across-cultures">uposatha</TermLink> observance days, many monks and some lay practitioners refrain from eating after midday, in line with the monastic precept against eating solid food outside the morning hours.</div>}
      />
      <FootnoteAside>Not every faith tradition treats fasting the same way even internally — within Hinduism, which specific days are observed, and how strictly, varies by region, sect, and individual devotion, since there&apos;s no single centralized authority mandating a uniform fasting calendar the way Ramadan is uniformly observed across Islam.</FootnoteAside>

      <QuickCheck
        question="What is the primary shared purpose of fasting across these different religious traditions?"
        options={[
          { text: "Weight loss and general physical health improvement", correct: false, explanation: "While fasting can have physical effects, it is not the stated religious purpose in any of these traditions — the intent is spiritual, not medical." },
          { text: "Spiritual discipline, atonement, purification, or devotion, depending on the tradition", correct: true, explanation: "Correct. Each tradition frames its fast around a specific spiritual goal — repentance, self-discipline, solidarity, or devotion — even though the practical rules differ." },
          { text: "A shared, identical set of rules adopted independently by each religion", correct: false, explanation: "The rules (duration, what's restricted, and timing) differ significantly between traditions — they aren't a shared rule set, even though the general practice of fasting is common to all." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Ramadan — a month-long daily fast (baseline case)</h3>
      <div className="prose-p">Throughout the lunar month of Ramadan, observant Muslims abstain from food, drink, and other physical needs between dawn and sunset each day, waking before dawn for a pre-fast meal (suhoor) and breaking the fast at sunset with a meal called iftar, often shared communally with family or at a mosque. The daily cycle repeats for the entire month — roughly 29 or 30 days depending on the lunar sighting — making it distinct from single-day fasts elsewhere: it&apos;s sustained daily practice across weeks, not one intense day.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Yom Kippur — a single, stricter continuous fast (a variation)</h3>
      <div className="prose-p">Yom Kippur&apos;s fast is a single roughly 25-hour period with no food or water at all, beginning before sunset and ending after nightfall the following day — a stricter total abstention than Ramadan&apos;s daily cycle, but confined to one occasion per year rather than repeated over weeks. The day is centered on atonement: many observant Jews spend much of it in synagogue services, and the fast is understood as an act of self-affliction that supports repentance, distinct from Ramadan&apos;s month-long framework of daily devotion and community iftar meals.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Ekadashi fasting in everyday Hindu practice (real-world / present-day applied case)</h3>
      <div className="prose-p">Unlike Ramadan or Yom Kippur, ekadashi fasting isn&apos;t tied to one annual date — it recurs roughly twice a month, on the 11th day of each lunar fortnight, and observance varies significantly by individual and region: some fast completely, others avoid only grains and certain foods, and many observe it only on specific ekadashis considered especially significant rather than every occurrence. This is a useful real-world example of how fasting can be a recurring, flexible personal devotional practice rather than a single fixed institutional event — a practicing Hindu today might choose which ekadashis to observe based on family tradition, regional custom, or personal devotion, without that being a departure from the tradition itself.</div>

      <QuickCheck
        question="How does the Yom Kippur fast differ from the Ramadan fast?"
        options={[
          { text: "Yom Kippur is a single roughly 25-hour continuous fast once a year; Ramadan is a daily dawn-to-sunset fast repeated across a full lunar month", correct: true, explanation: "Correct — the two differ in both duration and structure: one continuous strict fast versus a repeated daily cycle over weeks." },
          { text: "They are functionally identical practices with different names", correct: false, explanation: "They differ meaningfully in length, structure, and religious context, even though both are serious, significant fasts within their respective traditions." },
          { text: "Yom Kippur lasts a full month like Ramadan", correct: false, explanation: "Yom Kippur is a single day (about 25 hours); it's Ramadan that spans a full lunar month of daily fasting." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming all religious fasting means \"no food or water at all.\"", fix: "Rules vary widely — Lent traditionally means giving up a specific food or habit, not total abstention, while Yom Kippur and Ramadan (during daylight hours) involve stricter, more complete fasting." },
          { mistake: "Assuming fasting rules are uniform within a single religion.", fix: "Even within one tradition, practice varies by region, denomination, and individual devotion — Hindu ekadashi observance and Christian Lenten practice both vary considerably person to person." },
          { mistake: "Describing religious fasting primarily in health or diet terms.", fix: "Each tradition frames its fast around a specific spiritual purpose — atonement, discipline, devotion, or solidarity — not physical health, even if health effects are a secondary result." },
        ]}
      />
      <MisconceptionCallout
        myth="Religious fasting is primarily about physical health or weight management, dressed up in religious language."
        reality={<p>Every major tradition frames its fast around an explicitly spiritual purpose — Ramadan as self-discipline and devotion, Yom Kippur as atonement, Lent as penance, ekadashi as devotion — documented in religious texts and practice long before any modern health framing existed. Physical effects are a secondary consequence, not the stated reason for the practice, and conflating the two misrepresents what practitioners themselves describe as the point.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you hear about a colleague or friend fasting, ask which tradition and specific practice they're observing rather than assuming it matches a fast you're already familiar with.",
          "If scheduling around a fasting period (Ramadan, Lent, Yom Kippur), check the specific dates and hours involved — some are all-day, some are dawn-to-sunset, and durations range from a single day to a full month.",
          "Notice that recurring devotional fasts (like ekadashi) and single annual fasts (like Yom Kippur) serve the same broad spiritual function through very different rhythms.",
          "Avoid assuming a fasting practice is about diet or weight loss — ask about its meaning within the practitioner's own tradition if you're curious.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What religions practice fasting?", answer: "Fasting appears in some form across nearly all major world religions, including Islam (Ramadan), Judaism (Yom Kippur and other fast days), Christianity (Lent), Hinduism (ekadashi and other vrat fasts), and Buddhism (uposatha observance days)." },
          { question: "How long does Ramadan fasting last each day?", answer: "Observant Muslims fast from dawn (fajr) to sunset (maghrib) each day throughout the lunar month of Ramadan, resuming eating and drinking after sunset until the next dawn." },
          { question: "What is the difference between fasting on Yom Kippur and fasting during Lent?", answer: "Yom Kippur is a single, roughly 25-hour continuous fast from all food and water once a year; Lent is a 40-day period (excluding Sundays) traditionally observed by giving up a specific food or habit rather than total daily abstention." },
          { question: "What is ekadashi fasting in Hinduism?", answer: "Ekadashi is the 11th day of each lunar fortnight (occurring roughly twice a month), observed by many practicing Hindus with a full or partial fast — commonly avoiding grains — as a devotional practice; observance varies by individual and region." },
          { question: "Do Buddhists fast?", answer: "Many Buddhist monastics and some lay practitioners observe uposatha days, tied to the lunar calendar, by refraining from eating after midday, in line with monastic precepts, though practice varies across Buddhist traditions and regions." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
