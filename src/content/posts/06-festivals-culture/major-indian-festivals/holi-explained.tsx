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
  title: "Holi Explained",
  category: "festivals-culture",
  order: 2,
  subtopic: "major-indian-festivals",
  tags: ["holi", "hindu festivals", "festival of colors", "indian festivals"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Holi is the Hindu spring festival of colors, marking the triumph of good over evil and celebrated by throwing colored powder and water.",
  summary: "Holi is a two-day Hindu spring festival — beginning with Holika Dahan, a bonfire marking the defeat of evil, followed by the color-throwing celebration most people recognize.",
  sources: [
    { label: "Encyclopaedia Britannica — Holi", url: "https://www.britannica.com/topic/Holi" },
    { label: "BBC Religion — Holi", url: "https://www.bbc.co.uk/religion/religions/hinduism/holydays/holi.shtml" },
    { label: "National Geographic — What is Holi?", url: "https://www.nationalgeographic.com" },
  ],
  seeAlso: [
    "festivals-culture/diwali-explained",
    "festivals-culture/spring-and-renewal-festivals-globally",
    "festivals-culture/regional-harvest-festivals-of-india",
  ],
  glossary: [
    { term: "Holika Dahan", definition: "The bonfire lit the night before the main color-throwing celebration, symbolizing the burning away of evil." },
    { term: "Gulal", definition: "The dry colored powder thrown and smeared during Holi celebrations." },
    { term: "Rangwali Holi", definition: "The main day of color-throwing, following Holika Dahan the previous night." },
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
          "Holi is a two-day festival, not one — a bonfire night (Holika Dahan) precedes the color-throwing day (Rangwali Holi) that most people picture.",
          "The core story is about a demon king, his son Prahlad, and Prahlad's aunt Holika, who is burned instead of him because his devotion protects him — the bonfire re-enacts this.",
          "The colors themselves carry no fixed individual meaning — the tradition is about the shared act of playful color-throwing across social boundaries, not symbolism tied to each specific color.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Holi is a Hindu spring festival celebrated by throwing colored powder (<TermLink href="/festivals-culture/holi-explained">gulal</TermLink>) and water at family, friends, and strangers alike. It falls on the full moon in the Hindu month of Phalguna, usually landing in March. The night before, communities light bonfires known as <TermLink href="/festivals-culture/holi-explained">Holika Dahan</TermLink>.</div>}
        detailed={<div className="prose-p">The story behind Holi centers on the demon king Hiranyakashipu, who demanded to be worshipped as a god, and his son Prahlad, who refused and remained devoted to Vishnu instead. Hiranyakashipu&apos;s sister Holika, who was said to be immune to fire, tried to trick Prahlad into sitting with her in a bonfire — but Prahlad&apos;s devotion protected him while Holika burned instead, since her immunity only worked if used alone. Holika Dahan re-enacts this by burning an effigy the night before the main celebration. The following day, <TermLink href="/festivals-culture/holi-explained">Rangwali Holi</TermLink>, is associated with a separate but related theme: Krishna&apos;s playful color-throwing with Radha and the gopis in Vrindavan, which is the more direct root of the color tradition itself.</div>}
      />
      <FootnoteAside>Holi is sometimes called &quot;the festival of colors&quot; internationally, but in India it&apos;s just as often referred to by its social role — a day when social hierarchies (age, status, even caste in some traditional accounts) are temporarily set aside.</FootnoteAside>

      <QuickCheck
        question="What actually happens during Holika Dahan, the night before the main Holi celebration?"
        options={[
          { text: "People throw colored powder at each other", correct: false, explanation: "That's Rangwali Holi, the main day — Holika Dahan is the night before and involves a bonfire, not colors." },
          { text: "A bonfire is lit, symbolically burning away evil, re-enacting the story of Holika and Prahlad", correct: true, explanation: "Correct. Holika Dahan is a purification bonfire the night before the color celebration." },
          { text: "Families exchange gifts and sweets exclusively, with no other ritual", correct: false, explanation: "Sweets are part of Holi generally, but Holika Dahan specifically is centered on the bonfire ritual, not gift exchange." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A typical Holi morning in North India (baseline case)</h3>
      <div className="prose-p">Groups of neighbors and family gather in open spaces — streets, courtyards, parks — armed with dry gulal and water-filled balloons or pichkaris (water guns). There&apos;s no formal ceremony to the color-throwing itself; it&apos;s deliberately chaotic and playful, often accompanied by music, dancing, and bhang (a traditional cannabis-infused drink) in some regions. The day ends with everyone, covered in color, sharing sweets like gujiya.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Lathmar Holi in Barsana — a regional variation</h3>
      <div className="prose-p">In the town of Barsana, associated with Radha in the Krishna story, Holi takes an unusual form called Lathmar Holi: women playfully beat men with sticks (lathis) while men try to shield themselves, re-enacting a legend where Krishna teased Radha and her friends responded by driving him off. It&apos;s a genuine regional variation, not a universal Holi custom — most of India celebrates with colors alone, and Lathmar Holi is specific to the Braj region around Mathura and Vrindavan.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Holi in the diaspora and beyond religious lines (real-world / applied case)</h3>
      <div className="prose-p">Holi has become one of the more internationally recognized Hindu festivals, partly because the color-throwing translates easily into a shareable public event — cities with Indian diaspora communities, from London to New York to Kuala Lumpur, hold public &quot;Holi&quot; or &quot;color run&quot; style events that are attended well beyond the Hindu community. Commercial &quot;color run&quot; 5K races, unrelated to any religious observance, borrow the visual directly from Holi — a case of a specific religious tradition&apos;s imagery becoming a standalone secular event.</div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking Holi is only the color-throwing day.", fix: "Holi is two connected observances — Holika Dahan (bonfire, the night before) and Rangwali Holi (colors, the main day)." },
          { mistake: "Assuming specific colors have fixed symbolic meanings (e.g. 'red means love').", fix: "Unlike some color symbolism traditions, Holi's colors don't carry individually assigned meanings — the tradition is about the shared, boundary-crossing act of playing with color together." },
          { mistake: "Treating Lathmar Holi or bhang consumption as universal Holi customs.", fix: "Both are real but regional/local practices (Lathmar Holi is specific to Braj towns like Barsana; bhang consumption varies heavily by region and household), not how Holi is celebrated everywhere." },
        ]}
      />
      <MisconceptionCallout
        myth="Holi is just a fun color festival with no real religious content — more of a cultural party than an observance."
        reality={<p>Holi has a specific mythological basis (the Holika-Prahlad story, re-enacted in the Holika Dahan bonfire) and a second layer tied to Krishna devotional tradition — it&apos;s a religious festival with a playful public expression, not the other way around. The &quot;party&quot; element is real and intentional, but it sits on top of, not instead of, the religious story.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "If you're invited to a Holi celebration, wear clothes you don't mind staining — the color is often semi-permanent, especially wet color.",
          "Ask your host whether their community observes Holika Dahan the night before — it's a quieter, more solemn counterpart worth understanding alongside the color day.",
          "Notice which Holi variation is being described in media — Lathmar Holi (Barsana) and Vrindavan's weeks-long Holi celebrations are distinct regional traditions, not the default everywhere.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the story behind Holi?", answer: "The core story is of the demon king Hiranyakashipu, his devoted son Prahlad, and Prahlad's aunt Holika, who is burned instead of Prahlad when her fire-immunity fails her for attempting harm — re-enacted in the Holika Dahan bonfire." },
          { question: "When is Holi celebrated?", answer: "On the full moon day of the Hindu month of Phalguna, which usually falls in March on the Gregorian calendar." },
          { question: "Why do people throw colors on Holi?", answer: "The color tradition is most directly linked to stories of Krishna playfully throwing color on Radha and the gopis in Vrindavan; over time it became the festival's central, most recognizable public activity." },
          { question: "Is Holi the same everywhere in India?", answer: "No — the core two-day structure (Holika Dahan, then colors) is shared, but regional variations like Lathmar Holi in Barsana and extended week-long celebrations in Vrindavan and Mathura are local additions, not the universal form." },
          { question: "Do non-Hindus celebrate Holi?", answer: "Yes, increasingly — Holi's color-throwing has become a widely attended public event in many countries, including by people outside the Hindu community, similar to how Diwali light displays draw broad public participation." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
