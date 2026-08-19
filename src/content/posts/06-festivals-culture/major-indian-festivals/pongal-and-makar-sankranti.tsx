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
  title: "Pongal & Makar Sankranti",
  category: "festivals-culture",
  order: 7,
  subtopic: "major-indian-festivals",
  tags: ["pongal", "makar sankranti", "harvest festival", "tamil festivals"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Pongal and Makar Sankranti are harvest festivals celebrated across India in mid-January, marking the sun's movement into Capricorn and the start of longer days.",
  summary: "Pongal (Tamil Nadu) and Makar Sankranti (most of the rest of India) are regional names for harvest festivals falling around January 14-15, tied to the sun's transition into the Capricorn zodiac sign.",
  sources: [
    { label: "Encyclopaedia Britannica — Makar Sankranti", url: "https://www.britannica.com/topic/Makar-Sankranti" },
    { label: "Encyclopaedia Britannica — Pongal", url: "https://www.britannica.com/topic/Pongal-Hindu-festival" },
  ],
  seeAlso: [
    "festivals-culture/harvest-festivals-around-the-world",
    "festivals-culture/regional-harvest-festivals-of-india",
    "festivals-culture/winter-solstice-traditions-globally",
  ],
  glossary: [
    { term: "Sankranti", definition: "In Hindu astrology, the sun's transition from one zodiac sign to the next — Makar Sankranti specifically marks its move into Capricorn (Makar)." },
    { term: "Uttarayan", definition: "The sun's northward movement, beginning around Makar Sankranti, traditionally considered an auspicious period." },
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
          "Pongal and Makar Sankranti aren't two different festivals — they're regional names for essentially the same harvest festival, falling around January 14-15 across India.",
          "Unlike most Hindu festivals, the date is fixed on the solar calendar (not the lunar one), because it marks the sun's astrological transition into Capricorn, not a lunar phase.",
          "Both center on giving thanks for the harvest, and the name \"Pongal\" specifically also refers to a signature rice-and-lentil dish cooked as part of the celebration.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Pongal and <TermLink href="/festivals-culture/pongal-and-makar-sankranti">Makar Sankranti</TermLink> are harvest festivals celebrated around January 14-15 each year. In Tamil Nadu, it&apos;s called Pongal and lasts four days; in most of the rest of India, it&apos;s called Makar Sankranti and is typically a one-day observance. Both mark the same astronomical event: the sun&apos;s move into the Capricorn zodiac sign.</div>}
        detailed={<div className="prose-p">Because it tracks a solar event rather than a lunar phase, this is one of the few major Hindu festivals with a nearly fixed Gregorian date (January 14, occasionally the 15th, due to the slight drift of the solar calendar used for the calculation). Tamil Nadu&apos;s Pongal spans four days: Bhogi (discarding old belongings, symbolizing new beginnings), Thai Pongal (the main day, when the Pongal dish — rice boiled with milk and jaggery until it overflows the pot, a deliberately auspicious act — is cooked), Mattu Pongal (honoring cattle for their role in agriculture), and Kaanum Pongal (family outings and visits). Elsewhere, Makar Sankranti traditions vary by state: Gujarat holds Uttarayan, a major kite-flying festival; Punjab observes Lohri the night before with bonfires; Assam holds Magh Bihu with feasting and traditional games.</div>}
      />
      <FootnoteAside>The overflowing pot of milk and rice during Thai Pongal is meant to be watched carefully — the moment it boils over is considered an auspicious sign, and the family traditionally shouts &quot;Pongalo Pongal!&quot; when it happens.</FootnoteAside>

      <QuickCheck
        question="Why does Makar Sankranti fall on almost the same Gregorian date every year, unlike most other Hindu festivals?"
        options={[
          { text: "It follows a fixed solar-calendar calculation (the sun's transition into Capricorn), not the lunar calendar most Hindu festivals use", correct: true, explanation: "Correct. This is why its date is stable (mid-January) rather than shifting like lunar-calendar festivals such as Diwali or Holi." },
          { text: "It's a government-declared fixed public holiday with no astronomical basis", correct: false, explanation: "It's genuinely tied to a real astronomical event — the sun's apparent transition into the Capricorn zodiac sign — not an administratively fixed date." },
          { text: "It actually does shift every year just like Diwali and Holi", correct: false, explanation: "It doesn't shift nearly as much — because it's tracked on a solar rather than lunar basis, it stays close to January 14 each year." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Thai Pongal in Tamil Nadu (baseline case)</h3>
      <div className="prose-p">On the main day, families cook the Pongal dish in a new clay pot outdoors, timing it so the milk-rice mixture boils over right as the sun rises — a moment celebrated with the shout &quot;Pongalo Pongal!&quot; The dish is then offered first to the sun god Surya before the family eats. Homes are decorated with kolam (rice-flour floor patterns), and sugarcane stalks are a common decorative and edible element throughout the four days.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Uttarayan kite-flying in Gujarat — a regional variation</h3>
      <div className="prose-p">In Gujarat, the same astronomical event is marked very differently: rooftops across cities like Ahmedabad fill with people flying kites from sunrise to well after dark, often with a friendly kite-cutting competition where flyers try to sever each other&apos;s kite strings using glass-coated thread (manja). The festival has grown into a significant tourism draw, with Ahmedabad hosting an official International Kite Festival timed to Uttarayan — a case of one solar-calendar occasion producing an entirely different visible tradition than Tamil Nadu&apos;s rice-cooking ritual, despite marking the same sun transition.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Recognizing regional harvest-festival names today (real-world / applied case)</h3>
      <div className="prose-p">Someone traveling across India in mid-January will encounter several differently-named festivals — Pongal in Tamil Nadu, Lohri in Punjab (the night before), Magh Bihu in Assam, Makar Sankranti more broadly — all clustered around the same few days and all fundamentally harvest/solar-transition observances. Recognizing this pattern helps make sense of why India appears to have several unrelated festivals happening simultaneously in mid-January when they&apos;re actually regional variations on one astronomical occasion.</div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating Pongal and Makar Sankranti as two unrelated festivals.", fix: "They're regional names for the same solar-calendar harvest occasion — Pongal is Tamil Nadu's specific four-day form of it." },
          { mistake: "Assuming the date shifts significantly each year like Diwali or Holi.", fix: "Because it's calculated on the solar calendar, it stays close to January 14 every year, unlike lunar-calendar festivals." },
          { mistake: "Assuming kite-flying (Uttarayan) is a universal part of the festival everywhere in India.", fix: "It's specifically a Gujarati tradition tied to Makar Sankranti — Tamil Nadu's Pongal and Punjab's Lohri mark the same occasion with entirely different customs." },
        ]}
      />
      <MisconceptionCallout
        myth="Because Makar Sankranti/Pongal has a fixed mid-January date, it must not be a 'real' traditional Hindu festival — fixed dates seem more like a modern or administrative addition."
        reality={<p>The fixed date is exactly what makes it traditional in a different way — it&apos;s tied to a genuine astronomical event (the sun&apos;s transition into Capricorn) tracked by a solar calendar, an older calculation method than the lunar calendar used for most other Hindu festivals, not a modern simplification.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "If you hear about Lohri, Pongal, Magh Bihu, or Makar Sankranti in mid-January news or social media, recognize they're regional variations of the same occasion.",
          "If you're in Tamil Nadu in mid-January, try to see (or make) the Pongal dish boiling over — it's a specific, watchable ritual moment, not just a meal.",
          "If you're near Ahmedabad around January 14, look up, not down — Uttarayan's kite-flying is a genuinely striking citywide spectacle.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is Pongal the same as Makar Sankranti?", answer: "Yes, in essence — Pongal is Tamil Nadu's specific four-day regional form of the broader Makar Sankranti harvest festival observed (under various names) across India." },
          { question: "When is Makar Sankranti/Pongal celebrated?", answer: "Around January 14, sometimes the 15th — one of the few Hindu festivals with a nearly fixed Gregorian date because it's calculated on the solar calendar." },
          { question: "What is the Pongal dish?", answer: "A rice dish cooked with milk and jaggery in a clay pot, deliberately allowed to boil over as an auspicious moment during the main day of the Pongal festival." },
          { question: "Why do people fly kites during Makar Sankranti in Gujarat?", answer: "Kite-flying (Uttarayan) is a regional Gujarati tradition marking the same sun-transition occasion — it isn't observed the same way in most other parts of India." },
          { question: "What does Makar Sankranti actually mark astronomically?", answer: "The sun's apparent transition into the Capricorn (Makar) zodiac sign, traditionally considered the start of its northward movement (Uttarayan)." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
