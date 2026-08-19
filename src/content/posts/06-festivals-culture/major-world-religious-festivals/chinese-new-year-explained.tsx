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
  title: "Chinese New Year Explained",
  category: "festivals-culture",
  order: 15,
  subtopic: "major-world-religious-festivals",
  tags: ["chinese new year", "lunar new year", "spring festival", "east asian festivals"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Chinese New Year, also called the Spring Festival, marks the start of the lunisolar calendar year and is celebrated with family reunions, red decorations, and fireworks.",
  summary: "Chinese New Year, also known as the Spring Festival or Lunar New Year, marks the beginning of the traditional Chinese lunisolar calendar year, celebrated with family reunions, red decorations symbolizing luck, and a 15-day festival period ending with the Lantern Festival.",
  sources: [
    { label: "Encyclopaedia Britannica — Chinese New Year", url: "https://www.britannica.com/topic/Chinese-New-Year" },
    { label: "Smithsonian Institution — Lunar New Year", url: "https://www.si.edu" },
    { label: "BBC — What is Chinese New Year?", url: "https://www.bbc.co.uk/newsround" },
  ],
  seeAlso: [
    "festivals-culture/vesak-buddhist-festival-explained",
    "festivals-culture/diwali-explained",
    "festivals-culture/regional-harvest-festivals-of-india",
  ],
  glossary: [
    { term: "Lunisolar calendar", definition: "A calendar system that tracks both the phases of the moon and the position of the sun, using an occasional leap month to stay aligned with the solar year — the basis for the traditional Chinese calendar." },
    { term: "Hongbao", definition: "Red envelopes containing money, traditionally given by elders or married couples to children and unmarried younger relatives during Chinese New Year, symbolizing good luck and warding off misfortune." },
    { term: "Lantern Festival", definition: "The final day of the Chinese New Year period, held on the 15th day, marked with lantern displays and, in some regions, dragon or lion dances." },
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
          "Chinese New Year, also called the Spring Festival, marks the start of the year on the traditional Chinese lunisolar calendar, and typically falls between late January and mid-February.",
          "It's a roughly 15-day festival period, running from New Year's Eve through the Lantern Festival, with the specific customs (family reunion dinner, red envelopes, fireworks) concentrated most heavily around the first few days.",
          "Lunar New Year is celebrated well beyond China — Vietnam (Tết), Korea (Seollal), and other East and Southeast Asian cultures observe their own related New Year festivals around the same lunar timing, each with distinct customs.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Chinese New Year marks the start of the year on the traditional Chinese <TermLink href="/festivals-culture/chinese-new-year-explained">lunisolar calendar</TermLink>, falling on a different Gregorian date each year, usually between late January and mid-February. Families gather for a reunion dinner on New Year&apos;s Eve, homes are decorated in red for good luck, and children and unmarried relatives receive <TermLink href="/festivals-culture/chinese-new-year-explained">hongbao</TermLink> (red envelopes with money). The festival period runs about 15 days, ending with the <TermLink href="/festivals-culture/chinese-new-year-explained">Lantern Festival</TermLink>.</div>}
        detailed={<div className="prose-p">The Chinese calendar is lunisolar, tracking the moon&apos;s phases while periodically inserting a leap month to stay roughly aligned with the solar year — this is why Chinese New Year&apos;s Gregorian date shifts each year but stays within a fixed window (January 21 to February 20), unlike a purely lunar calendar such as the Islamic calendar, which drifts through all seasons over time. Each year is associated with one of twelve zodiac animals in a repeating 12-year cycle, further combined with one of five elements in Chinese astrological tradition, producing a 60-year full cycle. The most significant single event of the festival is the reunion dinner (nianyefan) on New Year&apos;s Eve, considered the most important family meal of the year in Chinese culture, traditionally requiring travel home even across long distances — producing what is regularly described as the largest annual human migration in the world as people return to their hometowns. Homes are cleaned before the new year (to sweep away bad luck, though sweeping during the new year itself is traditionally avoided, so as not to sweep away incoming good fortune) and decorated with red paper cuttings and couplets. The 15-day period concludes with the Lantern Festival, marked by lantern displays and, in southern China and diaspora communities, dragon and lion dances.</div>}
      />
      <FootnoteAside>Chinese New Year is also called Lunar New Year in many contexts specifically because closely related but distinct New Year festivals — Vietnam&apos;s Tết and Korea&apos;s Seollal among them — are calculated on the same or a very similar lunar calendar and often fall on the same date, even though each has its own name, food traditions, and cultural specifics.</FootnoteAside>

      <QuickCheck
        question="Is Chinese New Year exclusively a Chinese cultural observance?"
        options={[
          { text: "Yes, no other culture observes a related festival on this lunar timing", correct: false, explanation: "This isn't accurate — Vietnam's Tết and Korea's Seollal, among other East and Southeast Asian New Year festivals, are calculated on the same or a closely related lunar calendar and often fall on the same date." },
          { text: "No, several other cultures observe their own related lunar new year festivals around the same timing, each with distinct customs", correct: true, explanation: "Correct. While the customs and specific names differ (Tết in Vietnam, Seollal in Korea), several East and Southeast Asian cultures mark a related lunar new year around the same time, which is part of why the term 'Lunar New Year' is often used." },
          { text: "Only overseas Chinese diaspora communities observe it; it is not celebrated within mainland China", correct: false, explanation: "The opposite is true — Chinese New Year (the Spring Festival) is the most significant annual holiday within mainland China itself, in addition to being celebrated by Chinese diaspora communities worldwide." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: New Year&apos;s Eve reunion dinner in China (baseline case)</h3>
      <div className="prose-p">Families travel, often over long distances, to gather for the nianyefan reunion dinner on New Year&apos;s Eve, considered the most important meal of the year. Specific dishes carry symbolic meaning tied to their names or appearance — whole fish (yu) is served because its name sounds like the word for &quot;surplus&quot; or &quot;abundance,&quot; and dumplings are shaped to resemble ancient gold ingots. After dinner, many households stay up late (shousui) and set off fireworks at midnight, a practice tied to an older folk tradition of scaring away a mythical beast called Nian.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Tết in Vietnam — a related but distinct lunar new year</h3>
      <div className="prose-p">Vietnam&apos;s Tết Nguyên Đán falls on the same lunar calendar date as Chinese New Year in most years and shares broad themes (family reunion, ancestor veneration, red decorations, gift money in envelopes), but it has its own distinct customs — including specific foods like bánh chưng (a square sticky rice cake), the tradition of &quot;first footing&quot; (xông đất, where the first visitor to a home in the new year is believed to influence the household&apos;s luck for the year), and its own set of taboos and etiquette. Treating Tết as simply &quot;Vietnamese Chinese New Year&quot; overlooks that it is Vietnam&apos;s own distinct national festival, observed independently of Chinese cultural identity.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Lunar New Year as a public holiday outside East Asia (real-world / applied case)</h3>
      <div className="prose-p">Countries and cities with large Chinese, Vietnamese, or Korean communities — including Singapore, Malaysia, and increasingly some U.S. states and cities — have made Lunar New Year an official public holiday or school closure day, reflecting its significance well beyond mainland China. Public celebrations such as parades and dragon dances in cities like San Francisco and London draw large crowds from outside these communities too, similar to the pattern seen with Diwali and Holi becoming broader public events in diaspora cities.</div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming Chinese New Year is a single day.", fix: "It's a roughly 15-day festival period, running from New Year's Eve through the Lantern Festival, though the reunion dinner and first few days draw the most attention." },
          { mistake: "Treating 'Lunar New Year' and 'Chinese New Year' as identical in scope.", fix: "'Lunar New Year' is often used as an umbrella term because several distinct cultures — including Vietnam's Tết and Korea's Seollal — mark related festivals on the same or similar lunar timing, each with its own customs and identity." },
          { mistake: "Assuming the date drifts through all seasons like a purely lunar calendar.", fix: "The Chinese calendar is lunisolar, not purely lunar — it periodically adds a leap month to stay aligned with the solar year, which keeps the new year within a fixed window (January 21 to February 20)." },
        ]}
      />
      <MisconceptionCallout
        myth="Chinese New Year and Lunar New Year are exclusively Chinese observances, with no other culture celebrating a comparable festival."
        reality={<p>While the festival is centrally significant in Chinese culture and often referred to as Chinese New Year, several other East and Southeast Asian cultures observe their own distinct new year festivals calculated on the same or a closely related lunar calendar, frequently falling on or near the same date — including Tết in Vietnam and Seollal in Korea. These are independent national and cultural traditions with their own customs and identity, not regional variants of a purely Chinese holiday, which is part of why many sources now use the broader term &quot;Lunar New Year&quot; alongside &quot;Chinese New Year.&quot;</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see 'Lunar New Year' used instead of 'Chinese New Year', recognize it's often meant to include Vietnam's Tết, Korea's Seollal, and other related traditions, not just replace the Chinese name.",
          "Notice which zodiac animal a given year is associated with — it repeats on a 12-year cycle and is one of the most commonly referenced parts of the festival.",
          "If you receive a hongbao (red envelope), remember it's traditionally given by elders or married couples to children and unmarried relatives, not exchanged freely between peers.",
          "Look for the Lantern Festival, 15 days after New Year's Day, if you want to see the formal close of the festival period rather than just its opening days.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between Chinese New Year and Lunar New Year?", answer: "Chinese New Year refers specifically to the Chinese Spring Festival; 'Lunar New Year' is a broader umbrella term often used because several other cultures — including Vietnam (Tết) and Korea (Seollal) — observe their own related festivals on the same or similar lunar calendar." },
          { question: "Why does Chinese New Year fall on a different date each year?", answer: "The Chinese calendar is lunisolar, tracking the moon's phases while periodically adding a leap month to stay aligned with the solar year, so the new year's Gregorian date shifts annually but stays within a fixed window of January 21 to February 20." },
          { question: "How long does Chinese New Year last?", answer: "The festival period runs about 15 days, from New Year's Eve through the Lantern Festival, though the reunion dinner and the first few days receive the most attention and public celebration." },
          { question: "What are red envelopes (hongbao) for?", answer: "Hongbao are red envelopes containing money, traditionally given by elders or married couples to children and unmarried younger relatives during Chinese New Year, symbolizing good luck and protection from misfortune." },
          { question: "What is the Chinese zodiac and how does it relate to the new year?", answer: "The Chinese zodiac assigns one of twelve animals to each year in a repeating 12-year cycle; the animal associated with a given Chinese New Year is one of the festival's most widely referenced cultural elements." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
