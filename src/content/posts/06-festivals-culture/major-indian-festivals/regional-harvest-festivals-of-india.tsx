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
  title: "Regional Harvest Festivals of India",
  category: "festivals-culture",
  order: 10,
  subtopic: "major-indian-festivals",
  tags: ["harvest festivals", "indian festivals", "pongal", "bihu", "baisakhi"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "India marks the same winter harvest season with a set of distinct regional festivals — Pongal, Makar Sankranti, Lohri, Bihu, and more — each with its own name and customs.",
  summary: "India's winter harvest season is marked not by a single national festival but by a cluster of regionally distinct celebrations — including Pongal, Makar Sankranti, Lohri, and Magh Bihu — that share a common astronomical timing while differing in name, customs, and regional meaning.",
  sources: [
    { label: "Encyclopaedia Britannica — Makar Sankranti", url: "https://www.britannica.com/topic/Makara-Sankranti" },
    { label: "Encyclopaedia Britannica — Pongal", url: "https://www.britannica.com/topic/Pongal" },
    { label: "Press Information Bureau, Government of India — Harvest Festivals of India", url: "https://pib.gov.in" },
  ],
  seeAlso: [
    "festivals-culture/pongal-and-makar-sankranti",
    "festivals-culture/onam",
    "festivals-culture/diwali-explained",
    "festivals-culture/navratri-and-durga-puja",
  ],
  glossary: [
    { term: "Uttarayan", definition: "The period marking the sun's northward movement (as observed from Earth) after the winter solstice, which several harvest festivals, including Makar Sankranti, are tied to." },
    { term: "Lohri", definition: "A Punjabi winter harvest festival marked with a bonfire, held the night before Makar Sankranti, celebrating the end of winter and the harvesting of the rabi crop." },
    { term: "Bihu", definition: "A set of three festivals in Assam tied to the agricultural calendar — Bohag Bihu (spring/New Year), Kati Bihu (autumn), and Magh Bihu (winter harvest)." },
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
          "India doesn't mark its main winter harvest with one national festival — instead, a cluster of regionally distinct festivals (Pongal, Makar Sankranti, Lohri, Magh Bihu, and others) fall around the same mid-January window.",
          "Most of these festivals are tied to a real astronomical event — the sun's transition into the zodiac sign Capricorn (Makara) and the start of its northward movement (Uttarayan) — making them among the few major Indian festivals with a fixed solar, rather than lunar, date.",
          "The specific customs (bonfires, kite-flying, rice dishes, cattle worship) differ sharply by region even though the underlying agricultural and astronomical occasion is broadly shared.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Around mid-January each year, several parts of India celebrate a harvest festival at roughly the same time but under different names and customs. Tamil Nadu marks Pongal with rice cooked in new clay pots; Punjab marks <TermLink href="/festivals-culture/regional-harvest-festivals-of-india">Lohri</TermLink> with a bonfire the night before; much of North India observes Makar Sankranti with kite-flying; and Assam marks <TermLink href="/festivals-culture/regional-harvest-festivals-of-india">Bihu</TermLink>. They&apos;re all connected to the same winter harvest season, even though each region built its own distinct tradition around it.</div>}
        detailed={<div className="prose-p">Most of these festivals are tied to <TermLink href="/festivals-culture/regional-harvest-festivals-of-india">Uttarayan</TermLink>, the sun&apos;s apparent entry into the zodiac sign Makara (Capricorn) and the beginning of its six-month northward movement as observed from Earth — this is a solar event, which is why Makar Sankranti and related festivals fall on a comparatively fixed Gregorian date (around January 14-15) unlike most Hindu festivals, which follow the lunar or lunisolar calendar and shift each year. Regional forms include: Pongal in Tamil Nadu, a four-day festival where the name refers to the ritual of letting rice boil over in a clay pot, a symbol of abundance; Lohri in Punjab and Haryana, observed the night before Makar Sankranti with a bonfire, folk songs, and offerings of til (sesame) and gur (jaggery); Magh Bihu (also called Bhogali Bihu) in Assam, marked with community feasts and bonfires called meji; and Makar Sankranti itself across much of North and West India, associated with kite-flying (especially prominent in Gujarat&apos;s Uttarayan festival) and sesame-jaggery sweets. Despite the shared solar timing, the underlying meaning attached locally varies — some communities emphasize the harvest and gratitude to cattle and the sun, others emphasize a cleansing or renewal theme tied to the end of an inauspicious period in the Hindu calendar.</div>}
      />
      <FootnoteAside>Because Makar Sankranti tracks the sun rather than the moon, its date very slowly drifts later over long timescales due to the precession of the equinoxes — it fell around January 12 a century ago and is expected to shift toward January 15-16 in the coming decades.</FootnoteAside>

      <QuickCheck
        question="Why do Makar Sankranti and related harvest festivals fall on a comparatively fixed Gregorian date each year, unlike Diwali or Holi?"
        options={[
          { text: "They are calculated using the solar calendar (the sun's movement into Capricorn), not the lunar calendar", correct: true, explanation: "Correct. Most major Hindu festivals follow a lunar or lunisolar calendar and shift each year, but Makar Sankranti tracks a solar event, so its Gregorian date stays comparatively stable, typically January 14-15." },
          { text: "The Indian government legally fixed the date by law", correct: false, explanation: "The date isn't set by legislation — it follows the sun's actual movement into the zodiac sign Makara, an astronomical basis rather than a legal one." },
          { text: "It is coincidence and the date actually varies as much as Diwali's does", correct: false, explanation: "It isn't coincidence — the fixed date is a direct result of the festival being tied to a solar rather than lunar event, and it varies far less year to year than lunar-calendar festivals." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Pongal in Tamil Nadu (baseline case)</h3>
      <div className="prose-p">Pongal is a four-day festival: Bhogi (discarding old belongings and lighting bonfires), Thai Pongal (the main day, when rice is boiled in milk in a new clay pot until it overflows — considered an auspicious sign of abundance), Mattu Pongal (honoring and decorating cattle for their role in farming), and Kaanum Pongal (family outings and visiting relatives). The specific rituals are distinct from North Indian Makar Sankranti customs even though both fall on essentially the same date and mark the same solar transition.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Lohri in Punjab — a regional variation with a different emphasis</h3>
      <div className="prose-p">Lohri, observed the night before Makar Sankranti, centers on a bonfire rather than a sunrise-oriented ritual — families and communities gather around the fire, throw in offerings of sesame seeds, popcorn, and jaggery, and sing traditional folk songs. It also carries particular significance for newlyweds and newborns in a family&apos;s first Lohri after marriage or birth, a social layer that doesn&apos;t have a direct equivalent in Tamil Nadu&apos;s Pongal or Assam&apos;s Bihu, showing how the same harvest-season window absorbed distinct local customs in different regions.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Kite-flying and Uttarayan in Gujarat (real-world / applied case)</h3>
      <div className="prose-p">In Gujarat, the Makar Sankranti period is known as Uttarayan and is marked by large-scale competitive kite-flying, drawing an international kite festival in Ahmedabad that attracts participants from outside India. This is a clear example of one regional expression of a shared harvest-season festival becoming a globally recognized cultural event in its own right, similar to how Holi&apos;s color-throwing became internationally recognized apart from its religious origin.</div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating Pongal, Makar Sankranti, Lohri, and Bihu as separate, unrelated festivals.", fix: "They're regionally distinct traditions that share the same underlying occasion — the winter harvest and the sun's solar transition into Capricorn — even though names and customs differ." },
          { mistake: "Assuming these festivals shift dates each year like Diwali or Holi.", fix: "Because they're tied to a solar (not lunar) event, most of these festivals fall on a comparatively fixed Gregorian date, typically around January 14-15." },
          { mistake: "Assuming kite-flying is a universal harvest-festival custom across India.", fix: "Kite-flying is strongly associated with Makar Sankranti/Uttarayan in Gujarat and parts of North India specifically — it isn't part of Pongal in Tamil Nadu or Bihu in Assam." },
        ]}
      />
      <MisconceptionCallout
        myth="India's winter harvest is marked by a single national festival, just called by different regional names."
        reality={<p>While Pongal, Makar Sankranti, Lohri, and Magh Bihu do share the same underlying solar occasion and fall within the same window in mid-January, they are genuinely distinct regional festivals with their own separate customs, food traditions, and local meaning — not simply regional dialects of one identical celebration. Some (like Lohri) emphasize a bonfire and social milestones; others (like Pongal) center on a specific cooking ritual; still others (like Uttarayan in Gujarat) center on kite-flying — each reflects a distinct regional culture responding to the same seasonal moment.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a mid-January Indian festival mentioned, check the region — the name (Pongal, Lohri, Bihu, Makar Sankranti) usually tells you exactly where it's from.",
          "Notice that these dates barely move year to year compared to Diwali or Holi — that's a sign you're looking at a solar-calendar festival rather than a lunar one.",
          "If you see kite-flying associated with a January festival, it's most likely Gujarat's Uttarayan or broader Makar Sankranti kite traditions specifically, not a pan-Indian custom.",
          "Ask someone celebrating one of these festivals which specific regional tradition their family follows — the answer usually reveals family origin within India.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between Pongal and Makar Sankranti?", answer: "They mark the same solar occasion — the sun's transition into Capricorn — but Pongal is the specific Tamil Nadu tradition centered on a rice-cooking ritual, while Makar Sankranti is the broader North and West Indian name for the festival, often marked with kite-flying and sesame-jaggery sweets." },
          { question: "Why do these harvest festivals fall around the same date every year?", answer: "Unlike most Hindu festivals, which follow a lunar or lunisolar calendar, these harvest festivals track a solar event — the sun's entry into the zodiac sign Makara — so their Gregorian date stays comparatively fixed, typically around January 14-15." },
          { question: "What is Lohri and how is it different from Makar Sankranti?", answer: "Lohri is a Punjabi bonfire festival observed the night before Makar Sankranti, marking the end of winter and the rabi harvest, with particular significance for newlyweds and newborns' first Lohri." },
          { question: "What is Bihu?", answer: "Bihu refers to a set of three Assamese festivals tied to the agricultural calendar; Magh Bihu (or Bhogali Bihu), the winter harvest festival, falls around the same time as Makar Sankranti and is marked with community feasts and bonfires." },
          { question: "Why is kite-flying associated with Makar Sankranti?", answer: "Kite-flying is a strong regional custom associated with Uttarayan in Gujarat and parts of North India specifically, tied to the Makar Sankranti season; it isn't a universal harvest-festival tradition across all of India." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
