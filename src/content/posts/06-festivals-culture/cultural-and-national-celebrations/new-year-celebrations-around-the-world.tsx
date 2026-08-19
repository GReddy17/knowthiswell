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
  title: "New Year Celebrations Around the World",
  category: "festivals-culture",
  order: 19,
  subtopic: "cultural-and-national-celebrations",
  tags: ["new year", "lunar new year", "nowruz", "rosh hashanah", "gregorian calendar"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "January 1 is only one of several New Year dates observed worldwide — Lunar New Year, Nowruz, and Rosh Hashanah each mark a new year on their own calendar.",
  summary: "New Year celebrations mark the start of a new annual cycle, but because different cultures use different calendar systems, there is no single universal New Year date — January 1, Lunar New Year, Nowruz, and Rosh Hashanah are among several independently calculated New Year observances.",
  sources: [
    { label: "Encyclopaedia Britannica — New Year's Day", url: "https://www.britannica.com/topic/New-Years-Day" },
    { label: "Encyclopaedia Britannica — Chinese New Year", url: "https://www.britannica.com/topic/Chinese-New-Year" },
    { label: "Encyclopaedia Britannica — Nowruz", url: "https://www.britannica.com/topic/Nowruz" },
    { label: "My Jewish Learning — Rosh Hashanah 101", url: "https://www.myjewishlearning.com/article/rosh-hashanah-101/" },
  ],
  seeAlso: [
    "festivals-culture/spring-and-renewal-festivals-globally",
    "festivals-culture/winter-solstice-traditions-globally",
    "festivals-culture/national-days-around-the-world-overview",
  ],
  glossary: [
    { term: "Gregorian calendar", definition: "The internationally standard civil calendar, introduced in 1582 and now used worldwide for secular and administrative purposes, which sets New Year's Day on January 1." },
    { term: "Lunar New Year", definition: "The new year celebration observed in China and across East and Southeast Asia, timed to the second new moon after the winter solstice — commonly falling between late January and mid-February." },
    { term: "Rosh Hashanah", definition: "The Jewish New Year, marking the start of the High Holy Days, observed on 1–2 Tishrei in the Hebrew calendar, typically falling in September or early October." },
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
          "January 1 is the New Year date on the Gregorian calendar, the internationally standard civil calendar — but it isn't the only New Year date observed worldwide.",
          "Lunar New Year, Nowruz, and Rosh Hashanah are independent New Year traditions calculated on entirely different calendar systems, each with its own historical and religious basis.",
          "Many cultures observe both a Gregorian January 1 New Year for civil/secular purposes and a separate cultural or religious New Year on their own calendar — the two aren't mutually exclusive.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">New Year celebrations mark the start of a new annual cycle, but the date depends entirely on which calendar system a culture uses. January 1 is New Year&apos;s Day on the <TermLink href="/festivals-culture/new-year-celebrations-around-the-world">Gregorian calendar</TermLink>, the civil calendar used internationally for business, government, and daily life in most countries. But <TermLink href="/festivals-culture/new-year-celebrations-around-the-world">Lunar New Year</TermLink> in China and across East and Southeast Asia falls on a different date each year based on the moon, usually late January to mid-February. Nowruz, the Persian New Year, is fixed to the March equinox. <TermLink href="/festivals-culture/new-year-celebrations-around-the-world">Rosh Hashanah</TermLink>, the Jewish New Year, falls in September or early October on the Hebrew calendar. These are independent traditions, not variants of the January 1 date.</div>}
        detailed={<div className="prose-p">The reason New Year dates diverge so widely comes down to the underlying calendar structure each tradition uses. The Gregorian calendar is a solar calendar, tracking Earth&apos;s orbit around the sun with a fixed 365/366-day year, which is why January 1 stays constant. Lunar New Year follows a lunisolar calendar (tracking both moon phases and solar year length together), landing on the second new moon after the winter solstice — this is also called Chinese New Year in China specifically, but the same lunisolar new year is observed with local variations as Seollal in Korea and Tết in Vietnam. Nowruz is fixed by direct astronomical observation of the March equinox, unrelated to lunar phases at all. Rosh Hashanah follows the Hebrew calendar, itself lunisolar but calculated differently from the East Asian lunisolar system, landing on 1 Tishrei — a date that can fall anywhere from early September to early October on the Gregorian calendar. It&apos;s worth noting many countries observe more than one of these: mainland China, for instance, uses the Gregorian calendar for administrative purposes and government holidays while treating Lunar New Year (Spring Festival) as its most culturally significant annual holiday.</div>}
      />
      <FootnoteAside>The Gregorian calendar itself was only adopted gradually worldwide — introduced by Pope Gregory XIII in 1582, it wasn&apos;t adopted in Britain and its colonies until 1752, and Russia didn&apos;t switch until 1918, which is part of why some Orthodox Christian communities still calculate religious dates on the older Julian calendar today.</FootnoteAside>

      <QuickCheck
        question="Why doesn't Lunar New Year fall on the same Gregorian date every year?"
        options={[
          { text: "It follows a lunisolar calendar, timed to the second new moon after the winter solstice, rather than a fixed solar date", correct: true, explanation: "Correct. Lunar New Year's date is calculated from moon phases relative to the solstice, which is why it shifts across a roughly four-week window each year on the Gregorian calendar." },
          { text: "The date is set by each country's government independently every year", correct: false, explanation: "There's no annual government decision involved — the date follows a defined lunisolar calculation, which is why it's consistent across China, Korea, Vietnam, and other observing countries even though local names differ." },
          { text: "It's a translation issue — Lunar New Year is just January 1 described differently in other languages", correct: false, explanation: "Not true — Lunar New Year is calculated on an entirely different calendar system and falls on its own distinct date, typically between late January and mid-February." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: January 1 on the Gregorian calendar (baseline case)</h3>
      <div className="prose-p">Most of the world marks New Year&apos;s Eve and New Year&apos;s Day around January 1 on the Gregorian calendar, typically with countdown events, fireworks, and celebrations tied to a specific midnight moment in each time zone — meaning New Year&apos;s technically arrives at 24 different points around the globe as time zones cross midnight in sequence. This is a civil and largely secular observance globally, distinct from any single religious tradition, which is part of why it&apos;s so widely shared across countries with otherwise very different calendars and cultural New Year traditions of their own.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Lunar New Year — a lunisolar new year observed with regional variation (variation)</h3>
      <div className="prose-p">Lunar New Year falls on the second new moon after the winter solstice, typically landing between late January and mid-February, and is observed across China (as Chinese New Year or the Spring Festival), Korea (Seollal), and Vietnam (Tết), each with shared lunisolar timing but distinct regional customs, foods, and rituals. In China specifically, it&apos;s the most significant holiday of the year, marked by a weeks-long travel period as families reunite, red envelopes of money given to children, and public displays like lion dances and fireworks — a genuinely different scale and character from a January 1 countdown celebration.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Rosh Hashanah — a religious New Year observed alongside the civil calendar (real-world / applied case)</h3>
      <div className="prose-p">Rosh Hashanah, the Jewish New Year, is observed on 1–2 Tishrei in the Hebrew calendar, typically falling in September or early October on the Gregorian calendar, and marks the start of the Ten Days of Repentance leading to Yom Kippur. It&apos;s a religious observance — marked by prayer services, the sounding of the shofar (a ram&apos;s horn), and symbolic foods like apples dipped in honey for a sweet new year — observed by Jewish communities worldwide alongside, not instead of, the Gregorian calendar most of those same communities use for civil and business purposes the rest of the year. This dual observance pattern (a religious or cultural New Year alongside the Gregorian one) is common, not unusual, across many of the traditions in this list.</div>

      <QuickCheck
        question="What does Rosh Hashanah mark the beginning of?"
        options={[
          { text: "The Ten Days of Repentance leading to Yom Kippur", correct: true, explanation: "Correct. Rosh Hashanah opens the High Holy Days period in Judaism, culminating in Yom Kippur ten days later." },
          { text: "The Gregorian calendar year", correct: false, explanation: "Rosh Hashanah follows the Hebrew calendar and typically falls in September or early October — it is unrelated to the Gregorian January 1 date." },
          { text: "The Lunar New Year observance in East Asia", correct: false, explanation: "These are separate traditions on separate calendar systems — Rosh Hashanah is a Jewish observance on the Hebrew calendar, unrelated to the East Asian lunisolar Lunar New Year." },
        ]}
      />

      <DiagramBlock
        title="Four New Year traditions plotted across the year, each on its own calendar system"
        type="comparison"
        svgSrc="/diagrams/festivals-culture-festivals-of-light-around-the-world-calendar.svg"
        altText="A calendar timeline illustrating that different New Year traditions fall at different points across the year depending on their underlying calendar system: January 1 fixed on the Gregorian solar calendar, Lunar New Year between late January and mid-February on a lunisolar calendar tied to the winter solstice, Nowruz fixed to the March equinox, and Rosh Hashanah in September or early October on the Hebrew lunisolar calendar — illustrating that there is no single universal New Year date worldwide."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming January 1 is the universal New Year date across all cultures.", fix: "January 1 is the Gregorian civil calendar's New Year date, but Lunar New Year, Nowruz, and Rosh Hashanah are independently calculated New Year traditions on entirely different calendar systems." },
          { mistake: "Treating Lunar New Year as a single, uniform holiday with no regional variation.", fix: "The lunisolar timing is shared, but Chinese New Year, Korea's Seollal, and Vietnam's Tết are distinct national traditions with their own specific customs, foods, and rituals." },
          { mistake: "Assuming a culture observing a religious or cultural New Year doesn't also mark January 1.", fix: "Many communities observe both — for example, mainland China uses the Gregorian calendar administratively while treating Lunar New Year as its most culturally significant holiday of the year." },
        ]}
      />
      <MisconceptionCallout
        myth="New Year's Day falls on January 1st universally across all cultures and calendars."
        reality={<p>January 1 is the New Year&apos;s Day of the Gregorian calendar specifically, which is used as the international civil standard — but Lunar New Year, Nowruz, and Rosh Hashanah are independently calculated New Year traditions on lunisolar, equinox-based, and Hebrew calendar systems respectively, each falling on its own distinct date most years. Many cultures mark more than one of these New Year dates, rather than treating January 1 as a replacement for their own tradition.</p>}
      />

      <QuickCheck
        question="Which statement most accurately reflects how New Year celebrations work globally?"
        options={[
          { text: "Every culture ultimately celebrates the same New Year date, just using different names", correct: false, explanation: "The dates themselves genuinely differ — Lunar New Year, Nowruz, and Rosh Hashanah fall on different calculated dates from January 1 and from each other, not just different names for the same date." },
          { text: "Different calendar systems produce genuinely different New Year dates, and many cultures observe more than one", correct: true, explanation: "Correct. Solar, lunisolar, and equinox-based calendar systems each place the New Year at a different point in the year, and dual observance (civil plus cultural/religious) is common." },
          { text: "Only the Gregorian January 1 date has any real historical or religious basis; the others are modern reinterpretations", correct: false, explanation: "Lunar New Year, Nowruz, and Rosh Hashanah all have historical and religious roots that substantially predate the Gregorian calendar's 1582 introduction." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see 'New Year' mentioned, check which calendar system and culture it refers to — January 1, Lunar New Year, Nowruz, and Rosh Hashanah are all genuinely different dates.",
          "Notice whether a culture you're learning about observes a dual New Year pattern — a civil Gregorian one plus a separate cultural or religious one — rather than assuming one replaces the other.",
          "If you're wishing someone a happy Lunar New Year, Nowruz, or Rosh Hashanah, check this year's specific date — unlike January 1, all three move on the Gregorian calendar from year to year.",
          "Look up which New Year traditions, if any, are observed in your own family or regional background beyond January 1.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is January 1 the New Year date everywhere in the world?", answer: "It's the New Year date on the Gregorian calendar, used internationally for civil purposes, but Lunar New Year, Nowruz, and Rosh Hashanah are independent New Year traditions on different calendar systems, each falling on its own distinct date." },
          { question: "Why does Lunar New Year fall on a different date every year?", answer: "It follows a lunisolar calendar, landing on the second new moon after the winter solstice, which places it anywhere between late January and mid-February on the fixed Gregorian calendar." },
          { question: "What is the difference between Chinese New Year, Seollal, and Tết?", answer: "All three follow the same lunisolar new year timing, but they are distinct national traditions — Chinese New Year (China), Seollal (Korea), and Tết (Vietnam) — each with their own specific customs, foods, and rituals." },
          { question: "When is Rosh Hashanah celebrated?", answer: "On 1–2 Tishrei in the Hebrew calendar, which typically falls in September or early October on the Gregorian calendar. It marks the start of the Jewish High Holy Days." },
          { question: "Do countries that celebrate Lunar New Year also celebrate January 1?", answer: "Often yes — many countries, including China, use the Gregorian calendar for administrative and civil purposes while treating their own lunisolar or religious New Year as the more culturally significant celebration." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
