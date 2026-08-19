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
  title: "Navratri & Durga Puja",
  category: "festivals-culture",
  order: 4,
  subtopic: "major-indian-festivals",
  tags: ["navratri", "durga puja", "hindu festivals", "goddess worship"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Navratri is a nine-night Hindu festival honoring the goddess Durga, celebrated differently across India — from Gujarat's garba dancing to Bengal's elaborate Durga Puja.",
  summary: "Navratri (\"nine nights\") is a Hindu festival honoring the goddess Durga in her various forms, culminating in Vijayadashami/Dussehra — its regional expressions range from Gujarati garba dance to West Bengal's Durga Puja pandals.",
  sources: [
    { label: "Encyclopaedia Britannica — Navaratri", url: "https://www.britannica.com/topic/Navaratri" },
    { label: "Encyclopaedia Britannica — Durga Puja", url: "https://www.britannica.com/topic/Durga-Puja" },
    { label: "UNESCO — Durga Puja in Kolkata (Intangible Cultural Heritage)", url: "https://ich.unesco.org" },
  ],
  seeAlso: [
    "festivals-culture/diwali-explained",
    "festivals-culture/regional-harvest-festivals-of-india",
    "festivals-culture/classical-indian-dance-forms-overview",
  ],
  glossary: [
    { term: "Vijayadashami (Dussehra)", definition: "The tenth day concluding Navratri, marking Durga's victory over the buffalo demon Mahishasura and, in North India, Rama's victory over Ravana." },
    { term: "Garba", definition: "A traditional Gujarati circular folk dance performed during Navratri nights, often around a central lamp or image of the goddess." },
    { term: "Pandal", definition: "A temporary, often elaborately decorated structure built to house a Durga idol during West Bengal's Durga Puja celebrations." },
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
          "Navratri means \"nine nights\" and honors the goddess Durga across nine forms — but how it's actually celebrated varies dramatically by region.",
          "In Gujarat, Navratri means garba and dandiya-raas dancing; in West Bengal, it means Durga Puja, an elaborate multi-day idol-worship and community festival — both are Navratri, expressed completely differently.",
          "The festival concludes on the tenth day, Vijayadashami (also called Dussehra), marking Durga's victory over the demon Mahishasura.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Navratri is a nine-night Hindu festival dedicated to the goddess Durga, usually falling in September or October. Each of the nine nights is associated with a different form of the goddess. The festival ends on the tenth day, <TermLink href="/festivals-culture/navratri-and-durga-puja">Vijayadashami</TermLink> (also called Dussehra), celebrating good triumphing over evil.</div>}
        detailed={<div className="prose-p">The nine nights honor the Navadurga — nine distinct forms of Durga, each linked to a different quality (courage, wisdom, prosperity, and so on) — worshipped in sequence. How this plays out varies sharply by region: in Gujarat, communities gather each night for <TermLink href="/festivals-culture/navratri-and-durga-puja">garba</TermLink> (circular dance around a central lamp or clay pot) and dandiya-raas (stick dance); in North India, the festival builds toward Dussehra with the burning of Ravana effigies, tying into the Ramayana; in West Bengal, Odisha, and Assam, the emphasis shifts almost entirely to <TermLink href="/festivals-culture/navratri-and-durga-puja">Durga Puja</TermLink> — elaborate, artistically significant clay idols of Durga slaying Mahishasura are installed in temporary <TermLink href="/festivals-culture/navratri-and-durga-puja">pandals</TermLink>, worshipped for several days, and then ceremonially immersed in a river or the sea (visarjan).</div>}
      />
      <FootnoteAside>Kolkata&apos;s Durga Puja was inscribed on UNESCO&apos;s Representative List of the Intangible Cultural Heritage of Humanity in 2021, recognizing it as a major public art and community event, not only a religious observance.</FootnoteAside>

      <QuickCheck
        question="A friend says they celebrate Navratri with garba dancing every night, while another says their family's Navratri is centered on visiting an elaborate Durga idol in a pandal. What's going on?"
        options={[
          { text: "One of them is describing a different festival entirely", correct: false, explanation: "Both are genuinely describing Navratri — the festival's regional expression differs sharply, not the underlying occasion." },
          { text: "Both are correctly describing Navratri, just from different regional traditions — Gujarat's garba-centered celebration and West Bengal's Durga Puja are both authentic expressions of the same nine-night festival", correct: true, explanation: "Correct. Navratri's core (honoring Durga over nine nights) is shared; the specific rituals are strongly regional." },
          { text: "Garba is a secular dance unrelated to Navratri, and only the pandal tradition is the real religious observance", correct: false, explanation: "Garba is itself a devotional practice, traditionally performed around a lamp or image representing the goddess — it's not a secular add-on." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Navratri in Gujarat (baseline case)</h3>
      <div className="prose-p">Communities gather each evening at open grounds for garba — dancing in expanding concentric circles around a central lamp (or an image of the goddess), often followed by dandiya-raas, a faster dance using decorated sticks struck together in rhythm. This continues for all nine nights, drawing large public crowds; major cities hold organized garba events that function as some of the largest annual public dance gatherings in India.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Durga Puja in West Bengal — a regional variation</h3>
      <div className="prose-p">Rather than nightly dancing, the emphasis shifts to elaborate artistic devotion: skilled artisans spend months building and painting clay Durga idols, community organizations (often called &quot;pujo committees&quot;) compete to build the most striking pandal, and the final days involve public idol-viewing, cultural performances, and food stalls, culminating in a procession to immerse the idol in a river. It&apos;s simultaneously a religious festival, a major public art event, and effectively Bengal&apos;s largest annual community celebration — genuinely distinct from Gujarat&apos;s dance-centered version, though both fall under &quot;Navratri.&quot;</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Navratri in the diaspora (real-world / applied case)</h3>
      <div className="prose-p">Cities with large Gujarati or Bengali diaspora populations — Leicester, Toronto, New Jersey — hold organized garba nights or community Durga Puja events, often in rented halls since open public grounds aren&apos;t as available. These have become significant cultural and even dating/social events within diaspora communities, similar to how other cultural festivals evolve new social functions once removed from their original geographic and community context.</div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming Navratri looks the same everywhere in India.", fix: "It doesn't — Gujarat's garba/dandiya tradition and Bengal's Durga Puja are both genuine Navratri celebrations, just regionally distinct in almost every visible way." },
          { mistake: "Confusing Navratri with Dussehra as two separate, unrelated festivals.", fix: "Dussehra (Vijayadashami) is the tenth day that concludes Navratri — not a separate festival, but Navratri's culmination." },
          { mistake: "Assuming garba is purely secular/social dancing with no religious content.", fix: "Traditionally, garba is performed around a lamp or image representing the goddess and carries devotional meaning, even though it's also genuinely a major social event today." },
        ]}
      />
      <MisconceptionCallout
        myth="Navratri and Durga Puja are two different festivals that happen to occur around the same time of year."
        reality={<p>Durga Puja is West Bengal&apos;s (and neighboring states&apos;) specific regional name and form for the same nine-night Navratri festival observed elsewhere with different rituals — they&apos;re not separate occasions, but different regional expressions of one festival honoring Durga.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "If someone mentions Navratri, ask which regional tradition they follow — garba, Durga Puja, and Ramlila-style Dussehra celebrations are all valid but distinct answers.",
          "If you attend a garba night, notice the dance builds in speed and complexity across the nine nights — it's not the same pace every evening.",
          "If you visit a Durga Puja pandal, look at the idol's craftsmanship — the artistry is itself a major part of the tradition, not incidental decoration.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between Navratri and Durga Puja?", answer: "Durga Puja is West Bengal's (and nearby states') specific regional form of Navratri, centered on elaborate idol worship in pandals rather than nightly dance — both honor the same goddess over the same nine nights." },
          { question: "How many days does Navratri last?", answer: "Nine nights, followed by a tenth day, Vijayadashami (Dussehra), which concludes the festival." },
          { question: "What is garba?", answer: "A traditional Gujarati circular dance performed on Navratri nights, danced around a central lamp or image of the goddess, often followed by the stick dance dandiya-raas." },
          { question: "Why is the Durga idol immersed in water at the end of Durga Puja?", answer: "The immersion (visarjan) symbolizes the goddess's return to her celestial abode after her earthly visit, and is the traditional conclusion to the multi-day worship." },
          { question: "Is Navratri the same as Dussehra?", answer: "No — Dussehra (Vijayadashami) is the tenth day that concludes the nine nights of Navratri, marking Durga's victory over the demon Mahishasura." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
