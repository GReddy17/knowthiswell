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
  title: "Traditional Attire Around the World",
  category: "festivals-culture",
  order: 36,
  subtopic: "clothing-and-attire",
  tags: ["traditional dress", "kimono", "hanbok", "kilt", "world clothing"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The Japanese kimono, Korean hanbok, Scottish kilt, and Ghanaian kente cloth are all traditional garments still actively worn today — for special occasions rather than daily life, in most cases.",
  summary: "Traditional attire around the world spans an enormous range of garments — the Japanese kimono, Korean hanbok, Scottish kilt, Ghanaian kente cloth, and countless others — most of which remain actively worn today, typically for holidays, ceremonies, and formal occasions rather than daily life.",
  sources: [
    { label: "Encyclopaedia Britannica — Kimono", url: "https://www.britannica.com/topic/kimono" },
    { label: "Encyclopaedia Britannica — Hanbok", url: "https://www.britannica.com/topic/hanbok" },
    { label: "Encyclopaedia Britannica — Kilt", url: "https://www.britannica.com/topic/kilt" },
    { label: "Encyclopaedia Britannica — Keffiyeh", url: "https://www.britannica.com/topic/kaffiyeh" },
    { label: "UNESCO Intangible Cultural Heritage — Craftsmanship of Traditional Woven Textile Kente", url: "https://ich.unesco.org/en/RL/craftsmanship-of-traditional-woven-textile-kente-02130" },
    { label: "Victoria and Albert Museum — Kimono", url: "https://www.vam.ac.uk/articles/kimono" },
  ],
  seeAlso: [
    "festivals-culture/traditional-indian-attire-explained",
    "festivals-culture/cultural-significance-of-colors-in-clothing",
    "festivals-culture/wedding-traditions-around-the-world",
    "festivals-culture/coming-of-age-traditions-around-the-world",
  ],
  glossary: [
    { term: "Kimono", definition: "A traditional Japanese T-shaped, ankle-length robe with wide sleeves, secured with a broad sash (obi), worn since at least the 7th century and today mainly for special occasions." },
    { term: "Hanbok", definition: "Traditional Korean dress, characterized by a fitted jacket (jeogori) and a high-waisted skirt (chima) for women or trousers (baji) for men, worn daily until Western dress became dominant and now largely reserved for holidays and special occasions." },
    { term: "Kente cloth", definition: "A hand-woven strip textile originating with the Asante and Ewe peoples of Ghana, traditionally worn by community leaders for significant occasions and recognized by UNESCO as intangible cultural heritage." },
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
          "Traditional garments like the Japanese kimono, Korean hanbok, and Scottish kilt are still actively worn today — mostly for holidays, ceremonies, and formal occasions, not as museum relics.",
          "Many traditional garments once served as everyday clothing before Western dress became dominant in daily life across much of the world during the 19th and 20th centuries.",
          "The same garment can carry very different meanings depending on context — the keffiyeh, for example, functions as everyday headwear in parts of the Middle East and as a specific cultural/political symbol elsewhere.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Traditional attire refers to clothing historically associated with a specific culture or region, often distinct from globally common Western-style dress. Examples include the Japanese <TermLink href="/festivals-culture/traditional-attire-around-the-world">kimono</TermLink>, Korean <TermLink href="/festivals-culture/traditional-attire-around-the-world">hanbok</TermLink>, Scottish kilt, and Ghanaian <TermLink href="/festivals-culture/traditional-attire-around-the-world">kente cloth</TermLink>. Most of these garments are still worn today, though usually for special occasions — weddings, holidays, and formal ceremonies — rather than daily life.</div>}
        detailed={<div className="prose-p">The kimono, a T-shaped robe with wide sleeves secured by a broad sash (obi), has been worn in Japan since at least the Hakuhō period (645–710 CE) and was the principal item of dress for all classes and both sexes from the 16th century onward; it&apos;s now worn mainly on special occasions, though variants like the yukata (a lighter cotton kimono) see more casual, seasonal use. The hanbok evolved from earlier two-piece garments dating to Korea&apos;s Three Kingdoms period (roughly 57 BCE–668 CE) and was Korea&apos;s everyday dress for centuries before Western clothing became dominant; it remains commonly worn today for holidays, weddings, funerals, and important family occasions. The Scottish kilt, a knee-length garment made of tartan (a cross-checked woven pattern), became a major element of Scottish national dress, historically for men, and today is worn for formal occasions, weddings, and cultural events, with specific tartans traditionally associated with particular clans or regions. In West Africa, kente cloth — a hand-woven strip textile associated with the Asante and Ewe peoples of Ghana — was historically worn by community leaders for significant occasions; its patterns carry specific symbolic meaning, and UNESCO added the craftsmanship of traditional kente weaving to its Representative List of Intangible Cultural Heritage in 2024. Kente stoles have also become a common graduation symbol at U.S. institutions, particularly historically Black colleges and universities, asserting African and African-American cultural identity in an entirely new context from the garment&apos;s original use. The keffiyeh, a cotton headdress traditionally worn by men in parts of the Middle East, illustrates how a single traditional garment can carry multiple layered meanings depending on pattern (the black-and-white keffiyeh is closely associated with Palestinian identity, the red-and-white with Bedouin tradition) and context, functioning as both everyday dress and, in various settings, a specific cultural or political symbol.</div>}
      />
      <FootnoteAside>The obi sash worn with a kimono can itself be a significant and costly component of the outfit — some formal obi are made from elaborately woven or embroidered silk and can be worth more than the kimono they&apos;re paired with.</FootnoteAside>

      <QuickCheck
        question="What do the kimono, hanbok, and kilt have in common in terms of how they're worn today?"
        options={[
          { text: "All three have essentially disappeared from active use and now exist only in museums", correct: false, explanation: "All three remain actively worn today — they've shifted primarily to special-occasion use (holidays, weddings, formal events) rather than disappearing." },
          { text: "All three shifted from everyday historical dress toward special-occasion/ceremonial use today, after Western-style clothing became dominant in daily life in their respective regions", correct: true, explanation: "Correct. This is a genuinely common pattern across many traditional garments worldwide, not unique to any one of these three." },
          { text: "All three are worn exclusively by one gender in all contexts", correct: false, explanation: "This isn't accurate for any of the three as a blanket rule — the kimono is worn by all genders, hanbok has distinct but present forms for men and women, and while the kilt is historically associated with men, none of these garments is worn under a rule this absolute in modern practice." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The Japanese kimono (baseline case)</h3>
      <div className="prose-p">Worn since at least the 7th century, the kimono is a T-shaped, ankle-length robe secured with an obi sash rather than buttons or ties. Once the standard dress for all classes and both sexes, it&apos;s worn today mainly for weddings, coming-of-age ceremonies (Seijin-no-Hi), tea ceremonies, and other formal or seasonal occasions, with specific colors, patterns, and sleeve lengths traditionally signaling the wearer&apos;s age, marital status, and the occasion&apos;s formality.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The Scottish kilt and Korean hanbok — a comparative regional variation</h3>
      <div className="prose-p">Though geographically and culturally unrelated, the kilt and hanbok follow a broadly similar arc: both were once common daily or semi-daily dress, both nearly disappeared from everyday use as Western clothing became dominant, and both persist today specifically as formal/ceremonial wear tied to national or cultural identity — kilts at Scottish weddings, Highland games, and formal events; hanbok at Korean holidays (particularly Seollal and Chuseok), weddings, and family celebrations. The specific garments share nothing structurally, but the pattern of their modern use is a genuine parallel.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Kente cloth and the keffiyeh today — real-world/present-day</h3>
      <div className="prose-p">Kente cloth, historically Ghanaian ceremonial dress for community leaders, is now also worn as a graduation stole at many U.S. colleges and universities, particularly historically Black institutions, functioning as a marker of cultural identity in a context entirely removed from its original use — recognized by UNESCO as intangible cultural heritage in its country of origin while simultaneously taking on new meaning abroad. The keffiyeh shows a related but distinct pattern: still everyday headwear for many in parts of the Middle East, while also carrying specific, sometimes contested, cultural and political meaning depending on the wearer and context outside that region — a reminder that a traditional garment&apos;s meaning isn&apos;t fixed once it travels beyond its place of origin.</div>

      <QuickCheck
        question="What's the most accurate way to describe why traditional garments like the kimono and hanbok are worn less often for daily life today than in the past?"
        options={[
          { text: "Because these cultures have abandoned their traditions entirely", correct: false, explanation: "The garments remain actively worn for holidays, ceremonies, and formal occasions — this is a shift in role, not abandonment." },
          { text: "Because Western-style clothing became dominant for daily wear in many regions during the 19th and 20th centuries, while the traditional garment was retained for special/ceremonial occasions", correct: true, explanation: "Correct. This is a well-documented pattern across multiple, unrelated traditions — a shift in when the garment is worn, not a disappearance of the tradition." },
          { text: "Because these garments were legally banned from everyday use", correct: false, explanation: "There's no general legal basis for this shift in the examples discussed here — it reflects broader dress convention changes, not legal prohibition." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming traditional garments are purely historical costumes no longer actually worn.", fix: "Most remain actively worn today, typically for holidays, ceremonies, and formal occasions — they've shifted role rather than disappeared." },
          { mistake: "Assuming a traditional garment means the same thing in every context it appears in.", fix: "The same garment (like the keffiyeh) can carry different meanings depending on region, pattern, and context — everyday dress in one setting, a specific cultural or political symbol in another." },
          { mistake: "Treating regionally or ethnically specific garments (like kente cloth) as generic 'African' or 'Asian' dress.", fix: "Kente cloth is specifically associated with the Asante and Ewe peoples of Ghana; the kimono and hanbok are specifically Japanese and Korean, respectively — conflating distinct national/ethnic traditions erases real cultural specificity." },
        ]}
      />
      <MisconceptionCallout
        myth="Traditional dress is a fixed, unchanging costume from the past, disconnected from how people actually dress today."
        reality={<p>Most traditional garments covered here — the kimono, hanbok, kilt, and kente cloth among them — remain actively and meaningfully worn today, typically for holidays, ceremonies, weddings, and formal occasions. Some have even taken on entirely new modern roles (kente stoles at graduations) alongside their traditional use. The shift over the past couple of centuries has generally been in when and how often these garments are worn, not whether they&apos;re worn at all.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a traditional garment in media or in person, consider whether it's being worn for an everyday, ceremonial, or symbolic purpose — the context changes what it signals.",
          "If you're attending an event where traditional dress from another culture is expected or offered, ask about its history and proper wear rather than assuming based on appearance alone.",
          "Notice when a traditional garment has taken on a new modern function (like kente stoles at graduations) distinct from its original cultural role — both uses can be genuine and meaningful at once.",
          "Be specific about which culture or ethnic group a traditional garment belongs to, rather than defaulting to a broad regional label.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Do people still wear kimonos in Japan?", answer: "Yes — while Western clothing dominates daily wear, the kimono remains commonly worn for weddings, coming-of-age ceremonies, tea ceremonies, and other formal or seasonal occasions." },
          { question: "What is the difference between a kimono and a yukata?", answer: "A yukata is a lighter, casual cotton version of the kimono, traditionally worn in summer or after bathing, and more commonly seen at festivals; a formal kimono is typically made of silk and worn for more significant occasions." },
          { question: "Is the kilt only worn in Scotland?", answer: "The kilt originated as Scottish dress and remains most closely associated with Scotland, but it's also worn for formal and cultural occasions in the broader Scottish diaspora and by some other Celtic-heritage communities, often with tartans tied to specific clans, families, or regions." },
          { question: "What is kente cloth and where is it from?", answer: "Kente cloth is a hand-woven strip textile originating with the Asante and Ewe peoples of Ghana, traditionally worn by community leaders for significant occasions, with UNESCO recognizing the craftsmanship as intangible cultural heritage in 2024." },
          { question: "Why do keffiyeh patterns matter?", answer: "The color pattern carries specific cultural association — the black-and-white keffiyeh is most closely associated with Palestinian identity, while the red-and-white pattern is more commonly linked to Bedouin tradition." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
