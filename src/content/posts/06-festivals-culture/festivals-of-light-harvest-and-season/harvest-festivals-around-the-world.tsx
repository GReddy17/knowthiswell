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
  title: "Harvest Festivals Around the World",
  category: "festivals-culture",
  order: 43,
  subtopic: "festivals-of-light-harvest-and-season",
  tags: ["harvest festivals", "thanksgiving", "chuseok", "sukkot", "pongal", "mid-autumn festival"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Thanksgiving, Chuseok, Sukkot, Pongal, and the Mid-Autumn Festival each mark a local harvest — the same human gratitude ritual, timed to each region's own crop cycle.",
  summary: "A harvest festival marks the end of a growing season with gratitude, food, and community gathering — but because crops ripen at different times in different places, each culture's harvest festival falls on its own local calendar, not one shared date.",
  sources: [
    { label: "Encyclopaedia Britannica — Thanksgiving Day", url: "https://www.britannica.com/topic/Thanksgiving-Day" },
    { label: "Encyclopaedia Britannica — Chuseok", url: "https://www.britannica.com/topic/Chuseok" },
    { label: "My Jewish Learning — Sukkot 101", url: "https://www.myjewishlearning.com/article/sukkot-101/" },
    { label: "Encyclopaedia Britannica — Mid-Autumn Festival", url: "https://www.britannica.com/topic/Mid-Autumn-Festival" },
    { label: "German Missions in the United States — Erntedankfest", url: "https://www.germany.info" },
  ],
  seeAlso: [
    "festivals-culture/pongal-and-makar-sankranti",
    "festivals-culture/festivals-of-light-around-the-world",
    "festivals-culture/spring-and-renewal-festivals-globally",
    "festivals-culture/winter-solstice-traditions-globally",
  ],
  glossary: [
    { term: "Harvest festival", definition: "A celebration marking the end of a growing season, typically involving food, gratitude rituals, and community gathering, timed to a specific crop's local harvest rather than one shared calendar date." },
    { term: "Sukkot", definition: "A seven-day Jewish harvest festival, also called the Feast of Tabernacles, during which families build and eat meals in a temporary outdoor shelter called a sukkah." },
    { term: "Chuseok", definition: "A major Korean harvest festival held on the 15th day of the 8th lunar month, centered on ancestral rites, family gathering, and sharing songpyeon rice cakes." },
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
          "Harvest festivals exist on nearly every continent, each timed to that region's own local crop cycle — there is no single global 'harvest season' they all share.",
          "American Thanksgiving is one well-known example, not the template — Chuseok (Korea), Sukkot (Jewish tradition), the Mid-Autumn Festival (China and Vietnam), Pongal (South India), and Erntedankfest (Germany) are independent traditions with their own histories.",
          "The common thread is gratitude for a successful harvest expressed through food, family gathering, and ritual — the specific crop, date, and religious framing differ by culture.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A harvest festival celebrates the end of a growing season — gathering the year&apos;s crops and giving thanks before winter or a dry season sets in. Because crops ripen at different times around the world, harvest festivals fall on different dates: American and Canadian Thanksgiving in November/October, Chuseok in Korea around the September or October full moon, <TermLink href="/festivals-culture/harvest-festivals-around-the-world">Sukkot</TermLink> in the Jewish calendar in autumn, and Pongal in South India in mid-January, tied to that region&apos;s own rice harvest. Despite the different dates and rituals, the underlying idea — food, family, and gratitude at the close of a growing season — repeats across all of them.</div>}
        detailed={<div className="prose-p">Harvest festivals cluster into two broad calendar logics. Lunar and lunisolar traditions set their harvest festival by the moon relative to a local crop cycle: Chuseok falls on the 15th day of the 8th lunar month (the full moon nearest the actual harvest of rice and other staple crops in Korea), the <TermLink href="/festivals-culture/harvest-festivals-around-the-world">Mid-Autumn Festival</TermLink> in China and Vietnam falls on the same lunar date and shares the full-moon association, and Sukkot begins on 15 Tishrei in the Hebrew calendar, five days after Yom Kippur, marking both the harvest and a commemoration of the temporary shelters used by the Israelites during their exodus wandering. Fixed or civil-calendar traditions instead pick a set point regardless of the moon: American Thanksgiving is fixed to the fourth Thursday of November by federal law, Canadian Thanksgiving falls on the second Monday of October, and Germany&apos;s Erntedankfest is typically observed the first Sunday of October. Critically, several of these — Pongal in Tamil Nadu especially — are tied to a specific staple crop&apos;s actual harvest window in that region, which is why a South Indian harvest festival falls in January while a Northern Hemisphere autumn-crop festival falls in September or October: the crops themselves ripen at different times.</div>}
      />
      <FootnoteAside>Sukkot&apos;s central ritual — building and eating in a sukkah, a temporary open-roofed shelter — commemorates both the harvest and the fragile dwellings used during the Exodus, making it one of the few harvest festivals that layers an agricultural theme directly onto a specific historical narrative.</FootnoteAside>

      <QuickCheck
        question="Why don't harvest festivals around the world fall on the same date?"
        options={[
          { text: "Because they're timed to when each region's own crops are actually ready to harvest", correct: true, explanation: "Correct. A harvest festival's whole logic is marking a real, local agricultural event — since crops ripen at different times in different climates, the dates naturally spread across the year." },
          { text: "Because each culture deliberately chose a different date to avoid overlapping with others", correct: false, explanation: "There's no evidence of coordination between these traditions — each developed independently around its own agricultural calendar." },
          { text: "They actually do fall on the same date; only the names differ by language", correct: false, explanation: "Not true — Pongal (mid-January) and American Thanksgiving (late November) are months apart, reflecting genuinely different harvest timings, not just translation." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: American Thanksgiving — a fixed civil-calendar harvest festival (baseline case)</h3>
      <div className="prose-p">Thanksgiving is fixed by U.S. federal law to the fourth Thursday of November, a date set in 1941 (earlier Thanksgivings floated somewhat by presidential proclamation). Its popular origin story centers on a 1621 harvest celebration shared by Plymouth colonists and Wampanoag people, though the holiday&apos;s modern form — turkey, family gathering, football — developed gradually over the following centuries and was formalized as a national holiday during the Civil War. Canada observes its own Thanksgiving on the second Monday of October, reflecting an earlier harvest season at that latitude.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Chuseok — a lunar-calendar harvest festival centered on ancestral rites (variation)</h3>
      <div className="prose-p">Chuseok, one of Korea&apos;s two most important holidays, falls on the 15th day of the 8th lunar month — the full moon nearest the region&apos;s rice and staple crop harvest, usually landing in September or early October on the Gregorian calendar. Unlike Thanksgiving&apos;s meal-centered focus, Chuseok&apos;s core ritual is charye, a formal ancestral memorial rite performed with freshly harvested food, followed by family gathering and eating songpyeon, half-moon-shaped rice cakes. The holiday typically spans three days and involves one of the largest domestic travel surges in Korea each year, as families return to ancestral hometowns — a structural difference from Thanksgiving&apos;s single-day observance.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Pongal — a harvest festival tied to a specific regional crop window (real-world / applied case)</h3>
      <div className="prose-p">Pongal, a four-day Tamil harvest festival in South India, falls in mid-January — months apart from the autumn harvest festivals common in temperate climates — because it marks the region&apos;s own rice harvest and the sun&apos;s movement into Capricorn (Makar Sankranti in broader Indian usage). The festival&apos;s name comes from the ritual of boiling fresh rice with milk and jaggery until it overflows the pot, a literal, visible symbol of abundance. Pongal demonstrates the core logic of harvest festivals cleanly: the date follows the crop, not a shared international harvest season, which is why a harvest festival in South India and one in North America can be nearly opposite each other on the calendar.</div>

      <QuickCheck
        question="What is the central ritual of Sukkot?"
        options={[
          { text: "Building and eating meals in a temporary outdoor shelter called a sukkah", correct: true, explanation: "Correct. Sukkot commemorates both the harvest and the temporary dwellings used during the Exodus wandering, observed by building and dwelling in a sukkah for the festival's seven days." },
          { text: "Lighting an increasing number of candles over eight nights", correct: false, explanation: "That's Hanukkah, a separate Jewish festival occurring later in the year and unrelated to the harvest theme." },
          { text: "A formal ancestral memorial rite using freshly harvested food", correct: false, explanation: "That describes charye, the central rite of Korea's Chuseok — a different harvest festival with its own distinct ritual practice." },
        ]}
      />

      <DiagramBlock
        title="Harvest festivals plotted across the year by hemisphere and crop cycle"
        type="comparison"
        svgSrc="/diagrams/festivals-culture-harvest-festivals-around-the-world-calendar.svg"
        altText="A calendar timeline spanning January through December showing harvest festivals from multiple cultures plotted at their approximate dates: Pongal in mid-January in South India, Chuseok in September in Korea, the Mid-Autumn Festival in China around the same lunar date, Sukkot in September or October on the Jewish calendar, Erntedankfest in early October in Germany, Canadian Thanksgiving in mid-October, and American Thanksgiving in late November — illustrating that harvest festival timing follows each region's own local crop cycle rather than one shared global harvest season."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming all harvest festivals fall in Western autumn (September to November).", fix: "Pongal falls in mid-January because it follows South India's own rice harvest — harvest festival timing follows local crop cycles, not one shared season." },
          { mistake: "Treating American Thanksgiving as the model other harvest festivals are compared against.", fix: "Chuseok, Sukkot, Pongal, and the Mid-Autumn Festival are independent traditions, most considerably older than the American holiday, each with distinct rituals and origin stories of their own." },
          { mistake: "Assuming a harvest festival is purely secular or purely religious across all cultures.", fix: "The mix varies — Sukkot is explicitly religious with a biblical basis, Chuseok centers on ancestral rites, and modern American Thanksgiving is largely civil/secular despite its harvest-meal origin." },
        ]}
      />
      <MisconceptionCallout
        myth="Harvest festivals are an outdated agrarian tradition with no real relevance to modern, largely non-farming societies."
        reality={<p>Harvest festivals remain among the most widely observed holidays globally precisely because they were reframed around gratitude, family, and community rather than literal participation in farming — Thanksgiving, Chuseok, and Sukkot are all major modern holidays in societies where most people have no direct connection to agriculture. The ritual outlasted the agrarian economy that produced it by shifting its meaning, not by staying frozen as a farming custom.</p>}
      />

      <QuickCheck
        question="Which statement best reflects how harvest festivals function in most modern societies?"
        options={[
          { text: "They have mostly died out because few people farm anymore", correct: false, explanation: "The opposite is true — Thanksgiving, Chuseok, and Sukkot remain major, widely observed holidays in societies that are overwhelmingly non-agricultural today." },
          { text: "They persist by centering on gratitude, family gathering, and shared food rather than literal farming participation", correct: true, explanation: "Correct. The agricultural origin remains as symbolism and ritual food, but the holiday's actual modern function is social and cultural." },
          { text: "They are observed today only by rural or farming communities within each country", correct: false, explanation: "These are broad national and cultural holidays, not rural-specific observances — Chuseok's travel surge and Thanksgiving's nationwide observance both cut across urban and rural populations alike." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you hear 'harvest festival,' ask which region and crop it's tied to — the term covers dozens of independent traditions, not one global event.",
          "Notice whether a given harvest festival follows a lunar date (Chuseok, Sukkot, Mid-Autumn Festival) or a fixed civil date (Thanksgiving, Erntedankfest) — it explains why the Gregorian date moves or stays put year to year.",
          "If a harvest festival's date seems to fall 'out of season' relative to your own hemisphere or region, check what crop and climate it's actually tied to before assuming it's an error.",
          "Look up which harvest festivals, if any, are observed in your own region's history — many places have older, more localized harvest customs that predate the internationally famous examples.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are examples of harvest festivals around the world?", answer: "American and Canadian Thanksgiving, Chuseok (Korea), Sukkot (Jewish tradition), the Mid-Autumn Festival (China and Vietnam), Pongal (South India), and Erntedankfest (Germany) are all widely observed harvest festivals, each independent and tied to a local crop cycle." },
          { question: "Why is Pongal in January instead of autumn?", answer: "Pongal marks South India's own rice harvest and the sun's movement into Capricorn, which falls in mid-January — harvest festival timing follows the local crop's actual harvest window, not a single shared calendar season." },
          { question: "Is Thanksgiving the same as other countries' harvest festivals?", answer: "It shares the same general theme (gratitude, food, family gathering at the close of a harvest), but it's a distinct national holiday with its own 1621 origin story and 1941 fixed federal date — not a shared or borrowed version of Chuseok, Sukkot, or other traditions." },
          { question: "What is the difference between Chuseok and the Mid-Autumn Festival?", answer: "Both fall on the same lunar date (15th day of the 8th lunar month) and share a harvest-and-full-moon theme, but they are distinct national traditions — Chuseok centers on Korean ancestral memorial rites (charye), while the Mid-Autumn Festival in China and Vietnam centers on family reunion and mooncakes." },
          { question: "Do harvest festivals still matter if most people don't farm anymore?", answer: "Yes — modern harvest festivals like Thanksgiving, Chuseok, and Sukkot remain major holidays because they're centered on gratitude, family, and shared food rather than literal farming participation, which is why they've stayed relevant in largely non-agricultural societies." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
