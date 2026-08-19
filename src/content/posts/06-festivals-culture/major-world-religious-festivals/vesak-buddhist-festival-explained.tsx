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
  title: "Vesak (Buddhist festival) Explained",
  category: "festivals-culture",
  order: 14,
  subtopic: "major-world-religious-festivals",
  tags: ["vesak", "buddhist festivals", "religious festivals", "buddha day"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Vesak is the most important festival in the Buddhist calendar, commemorating the birth, enlightenment, and death of the Buddha on a single day.",
  summary: "Vesak, also called Buddha Day, is the most significant festival in the Buddhist calendar, commemorating three major events in the life of the Buddha — his birth, enlightenment, and death — traditionally observed as coinciding on the same full-moon day.",
  sources: [
    { label: "Encyclopaedia Britannica — Vesak", url: "https://www.britannica.com/topic/Vesak" },
    { label: "United Nations — International Day of Vesak", url: "https://www.un.org/en/observances/vesak-day" },
    { label: "BBC Religion — Buddhism: Buddha Day (Wesak)", url: "https://www.bbc.co.uk/religion/religions/buddhism/holydays/wesak.shtml" },
  ],
  seeAlso: [
    "festivals-culture/easter-explained",
    "festivals-culture/chinese-new-year-explained",
    "festivals-culture/diwali-explained",
  ],
  glossary: [
    { term: "Nirvana (Parinirvana)", definition: "In Buddhist teaching, the state of liberation from suffering and the cycle of rebirth; the Buddha's death is referred to as his Parinirvana, his final passing into this state." },
    { term: "Theravada", definition: "One of the major branches of Buddhism, predominant in Sri Lanka, Thailand, Myanmar, and other parts of Southeast Asia, where Vesak's three-events-in-one-day observance is most traditionally emphasized." },
    { term: "Bodhi", definition: "The Sanskrit and Pali term for the awakening or enlightenment the Buddha is understood in Buddhist tradition to have attained while meditating under a tree at Bodh Gaya." },
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
          "In Theravada Buddhist tradition, Vesak commemorates three major events in the life of the Buddha at once — his birth, his enlightenment, and his death (Parinirvana) — traditionally understood as having occurred on the same full-moon day of the lunar month.",
          "Vesak is recognized internationally, including by the United Nations since 1999, as the primary and most significant festival in the Buddhist calendar, sometimes called Buddha Day.",
          "Observance practices and even the exact date vary by country and Buddhist tradition — Mahayana and Vajrayana traditions in East Asia and Tibet don't always mark all three events on the identical single day the way Theravada tradition does.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Vesak is the most important festival in the Buddhist calendar, commemorating the birth, enlightenment, and death of the Buddha. It usually falls on the full moon in May. Buddhists mark the day with temple visits, meditation, chanting, acts of charity, and sometimes releasing caged animals as a symbolic act of compassion. It&apos;s recognized internationally, including by the United Nations, as Buddhism&apos;s principal holy day.</div>}
        detailed={<div className="prose-p">In Theravada Buddhist tradition — predominant in Sri Lanka, Thailand, Myanmar, Cambodia, and Laos — Vesak is understood as commemorating three separate events in the Buddha&apos;s life that tradition holds occurred on the same calendar day in different years: his birth in Lumbini, his attainment of <TermLink href="/festivals-culture/vesak-buddhist-festival-explained">Bodhi</TermLink> (enlightenment) at Bodh Gaya, and his <TermLink href="/festivals-culture/vesak-buddhist-festival-explained">Parinirvana</TermLink> (final passing) at Kushinagar. This &quot;three events, one day&quot; framing is the most widely cited version of the observance and is the basis for the United Nations&apos; official recognition of the day since 1999. However, Buddhism is not a single unified tradition, and other major branches observe the Buddha&apos;s life events differently: Mahayana Buddhism, more common in China, Korea, and Vietnam, often commemorates the Buddha&apos;s birth on a separate day from his enlightenment and death, and Vajrayana traditions in Tibet mark related events on their own distinct calendar. Because Vesak&apos;s date depends on the lunar calendar and varies by which lunar calendar a given country or tradition follows, the exact Gregorian date differs by country even within Theravada-majority nations, typically falling in April, May, or June.</div>}
      />
      <FootnoteAside>Sri Lanka observes Vesak with a distinctive tradition called dansal — free food and drink stalls set up publicly by individuals and community groups purely as an act of merit-making generosity, open to anyone regardless of religion.</FootnoteAside>

      <QuickCheck
        question="In Theravada Buddhist tradition, what does Vesak commemorate?"
        options={[
          { text: "Only the birth of the Buddha", correct: false, explanation: "This describes only one of the three events — in Theravada tradition, Vesak commemorates the Buddha's birth, enlightenment, and death together, not birth alone." },
          { text: "Three events understood to have occurred on the same day in different years — the Buddha's birth, enlightenment, and death", correct: true, explanation: "Correct. This 'three events, one day' understanding is the basis of Theravada Vesak observance and the United Nations' official recognition of the day." },
          { text: "The founding of the first Buddhist monastery", correct: false, explanation: "Vesak isn't tied to the founding of a monastery — it centers on three specific events in the Buddha's own life, as understood in Theravada tradition." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Vesak observance in Sri Lanka (baseline case)</h3>
      <div className="prose-p">Practicing Buddhists visit temples for chanting and meditation, observe the Five (or sometimes Eight) Precepts more strictly for the day, and decorate homes and streets with paper lanterns and lights. Public dansal stalls offer free food and drinks to anyone passing by, regardless of religion, as an act of merit-making generosity. The day is a public holiday, and the sale of alcohol and meat is traditionally restricted in some regions out of respect for the observance.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Mahayana observance in East Asia — a documented variation</h3>
      <div className="prose-p">In several Mahayana Buddhist countries, including parts of China, Korea, and Vietnam, the Buddha&apos;s birth is more commonly commemorated on a separate day from his enlightenment and Parinirvana, rather than all three being marked together on one Vesak day as in Theravada tradition. This is a genuine doctrinal and calendrical difference between Buddhist traditions, not a discrepancy in translation — different branches of Buddhism have historically developed distinct calendars and emphases for commemorating the Buddha&apos;s life.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The UN&apos;s International Day of Vesak (real-world / applied case)</h3>
      <div className="prose-p">Since 1999, the United Nations General Assembly has recognized the International Day of Vesak, acknowledging the day&apos;s significance across the global Buddhist community and holding commemorative meetings at UN headquarters and UNESCO. This formal international recognition reflects Vesak&apos;s status as Buddhism&apos;s most broadly agreed-upon major festival, even though, as with any global religion practiced across many countries, specific customs and exact dates still vary locally.</div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming Vesak only commemorates the Buddha's birth.", fix: "In Theravada tradition, Vesak commemorates three events together — the Buddha's birth, enlightenment, and death (Parinirvana) — not birth alone." },
          { mistake: "Assuming all Buddhist traditions observe Vesak identically on the same day.", fix: "Theravada tradition marks all three life events on one day; Mahayana traditions in East Asia often observe the Buddha's birth separately from his enlightenment and death." },
          { mistake: "Treating Vesak's date as fixed on the Gregorian calendar.", fix: "Vesak follows the lunar calendar and typically falls in April, May, or June depending on the country and which specific lunar calendar is used locally." },
        ]}
      />
      <MisconceptionCallout
        myth="Vesak celebrates only the Buddha's birth, similar to how Christmas marks Jesus's birth."
        reality={<p>In Theravada Buddhist tradition — the branch most associated with the day&apos;s international recognition — Vesak commemorates three major events in the Buddha&apos;s life together: his birth, his enlightenment (Bodhi), and his death (Parinirvana), traditionally understood to have occurred on the same full-moon day in different years. Reducing it to a birth-only celebration misses the enlightenment and death commemorations that Theravada tradition and the United Nations&apos; official recognition both center on equally.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see Vesak or 'Buddha Day' mentioned, remember it traditionally marks three events — birth, enlightenment, and death — not birth alone.",
          "If you're comparing Buddhist observances across countries, check whether the source is describing Theravada or Mahayana practice — the calendar and emphasis differ.",
          "Look up this year's Vesak date if relevant — it follows the lunar calendar and varies by country, typically falling in April, May, or June.",
          "If you encounter the term 'Wesak', recognize it as an alternate transliteration of the same word used in Sri Lanka and Southeast Asia, not a different holiday.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does Vesak celebrate?", answer: "In Theravada Buddhist tradition, Vesak commemorates three major events in the Buddha's life together — his birth, his enlightenment, and his death (Parinirvana) — traditionally understood to have occurred on the same full-moon day." },
          { question: "Is Vesak the same as Buddha's birthday?", answer: "Not exactly — while Vesak includes commemoration of the Buddha's birth, in Theravada tradition it also marks his enlightenment and death on the same day; some Mahayana traditions observe the Buddha's birth as a separate, distinct day instead." },
          { question: "When is Vesak celebrated?", answer: "Vesak follows the lunar calendar and typically falls on the full moon in April, May, or June, with the exact date varying by country and the specific lunar calendar used locally." },
          { question: "Is Vesak recognized internationally?", answer: "Yes — the United Nations General Assembly has officially recognized the International Day of Vesak since 1999, acknowledging its significance to Buddhist communities worldwide." },
          { question: "What is dansal on Vesak?", answer: "Dansal are free food and drink stalls set up publicly in Sri Lanka during Vesak, offered by individuals and community groups as an act of merit-making generosity, open to anyone regardless of religion." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
