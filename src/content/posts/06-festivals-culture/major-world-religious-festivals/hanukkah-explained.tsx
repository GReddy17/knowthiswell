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
  title: "Hanukkah Explained",
  category: "festivals-culture",
  order: 12,
  subtopic: "major-world-religious-festivals",
  tags: ["hanukkah", "jewish festivals", "festival of lights", "religious festivals"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Hanukkah is the eight-day Jewish festival of lights, commemorating the rededication of the Second Temple and the legend of the oil that lasted eight days.",
  summary: "Hanukkah is an eight-day Jewish festival commemorating the rededication of the Second Temple in Jerusalem following the Maccabean Revolt, marked by lighting a menorah for eight nights in observance of the traditional story of a single day's oil lasting eight.",
  sources: [
    { label: "Encyclopaedia Britannica — Hanukkah", url: "https://www.britannica.com/topic/Hanukkah" },
    { label: "My Jewish Learning — What Is Hanukkah?", url: "https://www.myjewishlearning.com/holidays/jewish_holidays/hanukkah/" },
    { label: "Chabad.org — The Story of Chanukah", url: "https://www.chabad.org/holidays/chanukah/article_cdo/aid/102911" },
  ],
  seeAlso: [
    "festivals-culture/diwali-explained",
    "festivals-culture/ramadan-explained",
    "festivals-culture/easter-explained",
  ],
  glossary: [
    { term: "Menorah", definition: "A nine-branched candelabrum lit one additional candle per night over the eight nights of Hanukkah, using a ninth 'helper' candle called the shamash to light the others." },
    { term: "Maccabees", definition: "The Jewish rebel group, led by Judah Maccabee, that led the successful revolt against the Seleucid Empire commemorated by Hanukkah." },
    { term: "Dreidel", definition: "A four-sided spinning top used in a traditional Hanukkah game, each side marked with a Hebrew letter forming an acronym for 'a great miracle happened there'." },
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
          "Hanukkah is an eight-day Jewish festival commemorating the rededication of the Second Temple in Jerusalem after the Maccabean Revolt against the Seleucid Empire in the 2nd century BCE.",
          "The central custom is lighting a menorah, adding one candle each night, in observance of the traditional story that a single day's supply of oil for the Temple's lamp lasted eight days.",
          "Hanukkah is a minor festival in the traditional Jewish religious calendar — its prominence in some countries today is influenced by its proximity to Christmas, not by comparable religious significance within Judaism itself.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Hanukkah is an eight-day Jewish festival, usually falling in late November or December, commemorating the rededication of the Second Temple in Jerusalem after a group called the <TermLink href="/festivals-culture/hanukkah-explained">Maccabees</TermLink> won a revolt against the Seleucid Empire. Each night, families light a <TermLink href="/festivals-culture/hanukkah-explained">menorah</TermLink>, adding one more candle than the night before. Other traditions include eating oil-fried foods like latkes and playing games with a <TermLink href="/festivals-culture/hanukkah-explained">dreidel</TermLink>.</div>}
        detailed={<div className="prose-p">The historical basis for Hanukkah is the Maccabean Revolt (167-160 BCE), in which Jewish rebels led by Judah Maccabee fought against the Seleucid Empire, which had suppressed Jewish religious practice and desecrated the Second Temple. After the Temple was recaptured, it needed to be rededicated — &quot;Hanukkah&quot; means &quot;dedication&quot; in Hebrew. The story most associated with the holiday, recorded in the Talmud rather than in the older historical books describing the revolt itself, holds that only one day&apos;s worth of ritually pure oil was found to relight the Temple&apos;s menorah, but it miraculously burned for eight days, the time needed to prepare more. Within Jewish tradition, Hanukkah is considered a minor festival compared to the High Holy Days (Rosh Hashanah, Yom Kippur) or Passover, which carry greater religious obligation and liturgical weight. Its prominence in the United States and some other countries with a visible December gift-giving season has grown substantially in the past century, in part due to its calendar proximity to Christmas — a pattern acknowledged by Jewish educators and historians as a modern cultural shift rather than a reflection of Hanukkah&apos;s standing within Jewish religious law and tradition.</div>}
      />
      <FootnoteAside>The Hanukkah story of the miraculous eight-day oil doesn&apos;t appear in 1 and 2 Maccabees, the earliest historical accounts of the revolt — it&apos;s recorded later, in the Talmud, several centuries after the events it describes, which is why historians and Jewish sources typically distinguish the historical military account from the religious oil legend layered onto it.</FootnoteAside>

      <QuickCheck
        question="Within Jewish religious tradition, how significant is Hanukkah compared to holidays like Yom Kippur or Passover?"
        options={[
          { text: "Hanukkah carries equal or greater religious weight than the High Holy Days", correct: false, explanation: "This isn't accurate within Jewish tradition — Hanukkah is considered a minor festival, with far less liturgical obligation than the High Holy Days or Passover." },
          { text: "Hanukkah is traditionally considered a minor festival, with less religious obligation than holidays like Yom Kippur or Passover", correct: true, explanation: "Correct. Jewish tradition and sources like My Jewish Learning and Chabad.org describe Hanukkah as a minor festival; its prominence in some countries today is a modern cultural pattern, not a reflection of its standing in Jewish religious law." },
          { text: "Hanukkah has no religious content at all and is a purely secular winter celebration", correct: false, explanation: "Hanukkah does have real religious content — it commemorates a specific historical event and includes religious rituals like menorah-lighting blessings — even though it's considered a minor festival relative to the High Holy Days." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A typical Hanukkah evening (baseline case)</h3>
      <div className="prose-p">Each night, after sundown, a family lights the menorah, using the shamash (helper candle) to light the appropriate number of candles for that night while reciting traditional blessings. Songs are sung, and the family often eats foods fried in oil — latkes (potato pancakes) and sufganiyot (jelly-filled doughnuts) are the most common — a nod to the oil at the center of the Temple story. Children may play dreidel for small prizes like chocolate coins (gelt).</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Hanukkah&apos;s varying prominence by country — a documented variation</h3>
      <div className="prose-p">In the United States, where Hanukkah&apos;s timing near Christmas has led to a significant rise in public visibility (large public menorah lightings, mainstream media coverage) over the past several decades, the holiday has taken on a cultural profile that doesn&apos;t match its comparatively minor religious status within Jewish law. In Israel, where the Jewish calendar shapes the broader public calendar and Christmas isn&apos;t a comparable cultural reference point, Hanukkah is marked more straightforwardly according to its traditional religious significance, without the same gift-giving emphasis seen in some American Jewish households.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Public menorah lightings today (real-world / applied case)</h3>
      <div className="prose-p">Large public menorah lightings, often organized by Chabad-Lubavitch and held in public squares in cities worldwide, have become one of the most visible modern expressions of Hanukkah — a practice rooted in the Jewish principle of &quot;publicizing the miracle&quot; (pirsumei nisa), traditionally expressed by placing a menorah where it can be seen from the street. These events are a case of a specific religious practice (public display of the menorah) becoming a recognizable civic tradition in many cities, distinct from the holiday&apos;s household observance.</div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming Hanukkah is the Jewish equivalent of Christmas in religious importance.", fix: "Within Jewish tradition, Hanukkah is considered a minor festival — the High Holy Days and Passover carry substantially more religious obligation and significance." },
          { mistake: "Treating the eight-day oil miracle as the earliest or only account of Hanukkah's origin.", fix: "The oil story appears in the Talmud, recorded later than the historical accounts of the Maccabean Revolt in 1 and 2 Maccabees; the earlier sources focus on the military and political victory itself." },
          { mistake: "Assuming Hanukkah gift-giving is a longstanding, universal Jewish tradition.", fix: "Gift-giving on Hanukkah, especially at the scale seen in some American households, is a comparatively modern practice that grew alongside the holiday's calendar proximity to Christmas, not an ancient or universal custom." },
        ]}
      />
      <MisconceptionCallout
        myth="Hanukkah is 'the Jewish Christmas' — a December holiday of comparable religious weight, centered on gift-giving."
        reality={<p>Within Jewish religious tradition and law, Hanukkah is considered a minor festival, with the High Holy Days (Rosh Hashanah, Yom Kippur) and Passover carrying substantially greater religious obligation. Its high public visibility in some countries, along with an emphasis on gift-giving in some households, largely reflects its calendar proximity to Christmas and a modern cultural pattern rather than its actual standing within Judaism — a distinction Jewish educational sources like My Jewish Learning and Chabad.org make explicitly.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a menorah, count the candles lit that night — the number (excluding the shamash) tells you exactly which night of Hanukkah it is.",
          "If you hear Hanukkah described as 'the Jewish Christmas', remember that framing reflects calendar timing and modern visibility, not comparable religious status within Judaism.",
          "Notice the spelling variations you'll see for Hanukkah (Chanukah, Hanukah) — they're transliterations of the same Hebrew word and refer to the identical holiday.",
          "If you're given a dreidel, look at the four Hebrew letters on its sides — they form an acronym for 'a great miracle happened there', a direct reference to the oil story.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is Hanukkah and why is it celebrated?", answer: "Hanukkah is an eight-day Jewish festival commemorating the rededication of the Second Temple in Jerusalem after the Maccabean Revolt against the Seleucid Empire, and the traditional story that a single day's oil for the Temple's menorah lasted eight days." },
          { question: "Is Hanukkah the same as the Jewish Christmas?", answer: "No — within Jewish religious tradition, Hanukkah is considered a minor festival, unlike the High Holy Days or Passover; its prominence in some countries today is largely a result of its calendar proximity to Christmas, not comparable religious significance." },
          { question: "Why do people light candles for eight nights during Hanukkah?", answer: "The eight nights correspond to the traditional story, recorded in the Talmud, that a single day's supply of oil for the Second Temple's menorah miraculously lasted eight days, the time needed to prepare more ritually pure oil." },
          { question: "What foods are traditionally eaten on Hanukkah?", answer: "Foods fried in oil are traditional, most commonly latkes (potato pancakes) and sufganiyot (jelly-filled doughnuts), referencing the oil at the center of the Hanukkah story." },
          { question: "What is a dreidel and how is it used?", answer: "A dreidel is a four-sided spinning top marked with Hebrew letters forming an acronym for 'a great miracle happened there', used in a traditional Hanukkah game typically played for small stakes like chocolate coins (gelt)." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
