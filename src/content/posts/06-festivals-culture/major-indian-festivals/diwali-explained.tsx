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
  title: "Diwali Explained",
  category: "festivals-culture",
  order: 1,
  subtopic: "major-indian-festivals",
  tags: ["diwali", "hindu festivals", "festival of lights", "indian festivals"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Diwali is the five-day Hindu festival of lights marking the victory of light over darkness, celebrated with lamps, family gatherings, and sweets.",
  summary: "Diwali (Deepavali) is a five-day Hindu festival of lights, celebrated by lighting oil lamps and candles, that marks the symbolic victory of light over darkness and good over evil.",
  sources: [
    { label: "Encyclopaedia Britannica — Diwali", url: "https://www.britannica.com/topic/Diwali" },
    { label: "BBC Religion — Diwali", url: "https://www.bbc.co.uk/religion/religions/hinduism/holydays/diwali.shtml" },
    { label: "Smithsonian Magazine — What Is Diwali?", url: "https://www.smithsonianmag.com" },
  ],
  seeAlso: [
    "festivals-culture/festivals-of-light-around-the-world",
    "festivals-culture/navratri-and-durga-puja",
    "festivals-culture/regional-harvest-festivals-of-india",
    "festivals-culture/holi-explained",
  ],
  glossary: [
    { term: "Deepavali", definition: "The formal Sanskrit-derived name for Diwali, meaning 'row of lamps' — deepa (lamp) + avali (row/series)." },
    { term: "Rangoli", definition: "Decorative patterns made on the floor using colored powder, rice, or flower petals, traditionally drawn at entrances during Diwali." },
    { term: "Lakshmi", definition: "The Hindu goddess of wealth and prosperity, widely worshipped on Diwali night." },
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
          "Diwali is a five-day Hindu festival built around the symbolic victory of light over darkness and good over evil — not a single-day event.",
          "The specific story behind it varies by region and community — Lord Rama's return to Ayodhya, Krishna's defeat of Narakasura, and the worship of Lakshmi are all part of the tradition, not competing 'correct' versions.",
          "Diwali is a public holiday across India and several other countries, and it's celebrated by Hindus, Jains, and Sikhs, each with their own layer of meaning attached to the same lamp-lighting tradition.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Diwali, also called <TermLink href="/festivals-culture/diwali-explained">Deepavali</TermLink>, is a Hindu festival celebrated over five days, usually falling in October or November. Families light small oil lamps called diyas, decorate their homes with <TermLink href="/festivals-culture/diwali-explained">rangoli</TermLink> patterns, share sweets, and set off fireworks. At its core, it celebrates light winning out over darkness and good winning out over evil.</div>}
        detailed={<div className="prose-p">Diwali&apos;s date is set by the Hindu lunisolar calendar — it falls on Amavasya, the new-moon night of the month of Kartika, which is why the Gregorian date shifts every year. The five days each carry distinct meaning: Dhanteras (wealth and new purchases), Naraka Chaturdashi (Krishna&apos;s defeat of the demon Narakasura), Diwali night itself (the main celebration, centered on worshipping <TermLink href="/festivals-culture/diwali-explained">Lakshmi</TermLink>, goddess of prosperity), Govardhan Puja (in North India, commemorating Krishna lifting Govardhan Hill), and Bhai Dooj (a day honoring the bond between siblings). In North India the story most associated with the festival is Lord Rama, Sita, and Lakshmana&apos;s return to Ayodhya after 14 years of exile and Rama&apos;s victory over Ravana — villagers are said to have lit rows of lamps to welcome them home, which is the origin most often cited for the lamp-lighting custom itself.</div>}
      />
      <FootnoteAside>Diwali is a five-day festival, but &quot;Diwali&quot; in casual conversation usually refers specifically to the third day — the main event, with the fireworks and Lakshmi puja.</FootnoteAside>

      <QuickCheck
        question="Diwali is primarily celebrated by which religious communities?"
        options={[
          { text: "Only Hindus", correct: false, explanation: "Close, but not complete — Diwali is a major Hindu festival, but it's also celebrated by Jains (who mark Mahavira's spiritual liberation on the same day) and Sikhs (who observe Bandi Chhor Divas, commemorating Guru Hargobind Ji's release from imprisonment, on the same date)." },
          { text: "Hindus, Jains, and Sikhs, each attaching different meaning to the same dates", correct: true, explanation: "Correct. The lamp-lighting tradition and the general theme of light-over-darkness are shared, but each community's specific story is distinct." },
          { text: "It is a purely secular Indian national holiday with no religious meaning", correct: false, explanation: "Diwali is a public holiday in India, but its origin and meaning are explicitly religious across all three traditions that observe it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A typical Diwali night in a North Indian household (baseline case)</h3>
      <div className="prose-p">A family cleans and decorates the home in the days before, lays out a rangoli at the entrance, and lights a row of diyas along windowsills and doorways at dusk. In the evening, they perform Lakshmi Puja — a short prayer ritual inviting prosperity into the home for the coming year — followed by sharing sweets with neighbors and, in many households, fireworks. The core pattern (clean → light lamps → invite prosperity → share food) repeats across most Hindu households, even though the specific prayers and sweets vary by region.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Diwali in South India — a regional variation</h3>
      <div className="prose-p">In Tamil Nadu and much of South India, the main celebration shifts a day earlier, centered on Naraka Chaturdashi rather than the Lakshmi-focused night that dominates in the North — the emphasis is on Krishna&apos;s defeat of the demon Narakasura, marked with an early-morning oil bath and new clothes rather than an evening puja. This is a genuine regional difference, not a &quot;wrong&quot; version of the festival — it reflects the fact that Diwali absorbed different regional epics and traditions as it spread across the subcontinent.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Diwali outside India today (real-world / applied case)</h3>
      <div className="prose-p">Diwali is now a recognized public or school holiday in countries with large Hindu, Jain, or Sikh diaspora communities, including Singapore, Malaysia, Fiji, Trinidad and Tobago, and Guyana, and it&apos;s marked with official celebrations at landmarks like 10 Downing Street and the White House. Large diaspora cities (Leicester in the UK, for example) hold public light displays and street festivals that draw non-Hindu attendees too — a sign of the festival moving from a purely religious observance to a broader cultural event, similar to how Christmas lights are enjoyed well beyond practicing Christians.</div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming Diwali is a single day.", fix: "It's a five-day festival — Dhanteras, Naraka Chaturdashi, Diwali (Lakshmi Puja), Govardhan Puja, and Bhai Dooj — even though the third day gets the most attention." },
          { mistake: "Treating the Rama/Ayodhya story as 'the' universal explanation for Diwali.", fix: "It's the dominant story in North India, but South Indian communities center Krishna and Narakasura, and Jain and Sikh communities have entirely separate reasons for marking the same date." },
          { mistake: "Assuming the date is fixed on the Gregorian calendar.", fix: "Diwali follows the Hindu lunisolar calendar and falls on the new-moon night of Kartika, so its Gregorian date shifts year to year, usually landing in October or November." },
        ]}
      />
      <MisconceptionCallout
        myth="Diwali is just 'the Indian Christmas' — a winter gift-and-lights holiday with a vaguely religious backstory."
        reality={<p>Diwali has a specific, well-documented religious basis across three distinct traditions (Hindu, Jain, Sikh), tied to particular events on a particular lunar date — it isn&apos;t a loose winter-lights custom. The comparison to Christmas captures the mood (lights, family, gift-giving) but flattens what&apos;s actually a set of distinct religious observances that happen to share a calendar date and a lamp-lighting custom.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a Diwali greeting or invitation, notice which of the five days it's referring to — most people mean the third day (Lakshmi Puja) unless stated otherwise.",
          "If you're attending a Diwali celebration for the first time, ask your host which regional tradition they follow — the story and rituals genuinely differ between North and South India.",
          "Look up this year's Diwali date — since it follows the lunar calendar, it moves earlier or later each Gregorian year, typically by about 11 days.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is Diwali the same as Deepavali?", answer: "Yes — Deepavali is the fuller Sanskrit-derived name (\"row of lamps\"), and Diwali is the shortened form more commonly used in North India and internationally. Both refer to the same festival." },
          { question: "How many days does Diwali last?", answer: "Five days: Dhanteras, Naraka Chaturdashi, the main Diwali/Lakshmi Puja day, Govardhan Puja, and Bhai Dooj." },
          { question: "Why do people light lamps for Diwali?", answer: "The most widely cited origin is the story of Rama, Sita, and Lakshmana's return to Ayodhya, where villagers lit rows of oil lamps to guide and welcome them home — the tradition has since become a broader symbol of light overcoming darkness." },
          { question: "Is Diwali only celebrated in India?", answer: "No — it's celebrated wherever there are Hindu, Jain, or Sikh communities, including large diaspora populations in the UK, US, Southeast Asia, the Caribbean, and the Pacific, and is a public holiday in several countries outside India." },
          { question: "Do Sikhs and Jains celebrate Diwali too?", answer: "They mark the same date with their own distinct observances — Sikhs celebrate Bandi Chhor Divas (Guru Hargobind Ji's release from imprisonment) and Jains mark Mahavira's spiritual liberation (nirvana)." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
