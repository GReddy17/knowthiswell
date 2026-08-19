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
  title: "Wedding Traditions Around the World",
  category: "festivals-culture",
  order: 22,
  subtopic: "wedding-and-life-event-traditions",
  tags: ["wedding traditions", "wedding customs", "marriage rituals", "cultural traditions"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Weddings around the world share some universal elements — joined hands, exchanged rings, shared food — but the ceremony's actual structure varies enormously by culture and religion.",
  summary: "Wedding traditions vary widely across cultures — a Jewish couple marries beneath a chuppah, a Hindu couple circles a sacred fire, a Japanese Shinto couple exchanges vows to the kami — but a small set of symbolic acts (joined hands, exchanged rings, shared food) recur across many of them.",
  sources: [
    { label: "Encyclopaedia Britannica — Wedding", url: "https://www.britannica.com/topic/wedding" },
    { label: "Encyclopaedia Britannica — Marriage: Rituals and Customs", url: "https://www.britannica.com/topic/marriage/Marriage-rituals" },
    { label: "Encyclopaedia Britannica — Ḥuppa", url: "https://www.britannica.com/topic/huppa" },
    { label: "Encyclopaedia Britannica — How Did the Tradition of Wedding Rings Start?", url: "https://www.britannica.com/topic/How-Did-the-Tradition-of-Wedding-Rings-Start" },
  ],
  seeAlso: [
    "festivals-culture/indian-wedding-traditions-explained",
    "festivals-culture/cultural-significance-of-colors-in-clothing",
    "festivals-culture/coming-of-age-traditions-around-the-world",
    "festivals-culture/funeral-and-mourning-traditions-respectful-overview",
  ],
  glossary: [
    { term: "Chuppah", definition: "A portable canopy, open on all sides, beneath which a Jewish couple stands during their wedding ceremony — symbolizing the home they'll build together." },
    { term: "Ketubah", definition: "The Jewish marriage contract, traditionally outlining the groom's obligations to the bride, read aloud and signed as part of the wedding." },
    { term: "Shinto wedding", definition: "A Japanese wedding ceremony conducted in the Shinto religious style, in which vows are made to the kami (spirits/deities) rather than to a single deity or officiant-witnessed contract." },
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
          "Most cultures ritualize marriage in some way, but the specific ceremony — what's said, what's exchanged, who officiates — differs enormously by religion and region.",
          "A handful of symbolic acts recur across many unrelated traditions: joining hands, exchanging rings or tokens, and sharing food — without any single culture being the \"original\" template.",
          "The now-common Western white wedding dress is a relatively recent custom, widely credited to Queen Victoria's 1840 wedding, not an ancient universal bridal color.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Weddings exist in essentially every documented culture, but the ceremony itself takes very different forms. A Jewish wedding takes place under a <TermLink href="/festivals-culture/wedding-traditions-around-the-world">chuppah</TermLink>; a Hindu wedding centers on circling a sacred fire; a Japanese Shinto wedding involves vows to the kami. What recurs across many traditions isn&apos;t a specific ritual, but a small set of symbolic themes: joined hands, exchanged tokens, and shared food or drink.</div>}
        detailed={<div className="prose-p">Encyclopaedia Britannica&apos;s survey of marriage rituals notes that the most widespread element across cultures is some symbol of union — joined hands, an exchange of rings or chains, or the tying together of garments — alongside older customs like scattering grain or fruit over the couple (a fertility symbol) or the bride being accompanied by a child. Beyond that shared thread, the specifics diverge sharply. In a Jewish wedding, the couple stands beneath a <TermLink href="/festivals-culture/wedding-traditions-around-the-world">chuppah</TermLink> (a canopy symbolizing their future home), the <TermLink href="/festivals-culture/wedding-traditions-around-the-world">ketubah</TermLink> (marriage contract) is read aloud, and the ceremony traditionally ends with the groom breaking a glass underfoot. In a <TermLink href="/festivals-culture/wedding-traditions-around-the-world">Shinto wedding</TermLink> in Japan, the couple exchanges sake in a ritual called san-san-kudo (three sips, three cups) and pronounces vows to the kami rather than a personal deity. The Western tradition of a white wedding dress, so often assumed to be timeless, is largely traced to Queen Victoria&apos;s choice to wear white at her 1840 wedding to Prince Albert — before that, Western brides commonly wore their best dress in whatever color they owned, and white only slowly became the dominant bridal convention over the following century. The exchange of rings, meanwhile, has a much longer and more geographically scattered history, with symbolic precedents credited to ancient Egypt and Rome long before it became a fixture of the modern Western ceremony.</div>}
      />
      <FootnoteAside>The custom of wearing a wedding ring specifically on the fourth finger of the left hand traces to an old (and anatomically incorrect) European belief in a &quot;vena amoris&quot; — a vein believed to run directly from that finger to the heart.</FootnoteAside>

      <QuickCheck
        question="What is the most accurate way to describe recurring elements across the world's wedding traditions?"
        options={[
          { text: "Every culture's wedding ultimately derives from one original ceremony that spread and adapted over time", correct: false, explanation: "There's no evidence for a single point of origin — marriage rituals appear to have developed independently across many cultures, sharing broad symbolic themes rather than a common ancestor ceremony." },
          { text: "A small set of symbolic themes — joined hands, exchanged tokens, shared food — recur across many unrelated traditions, but the actual ceremonies differ substantially", correct: true, explanation: "Correct. Anthropological surveys of marriage customs find broadly shared symbolic themes without a shared specific ritual script." },
          { text: "Only Western and South Asian traditions have formal wedding ceremonies; most other cultures treat marriage informally", correct: false, explanation: "Formal marriage ceremonies are documented across essentially all studied cultures, including African, East Asian, Indigenous American, and Pacific Islander traditions, each with their own structured rites." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A Western Christian wedding (baseline case)</h3>
      <div className="prose-p">A couple exchanges vows and rings in front of an officiant (often clergy) and witnesses, typically inside a church or a venue arranged to resemble one. The white wedding dress, a processional down the aisle, and a reception with a first dance are all conventions that solidified largely over the 19th and 20th centuries rather than stretching back to antiquity — they&apos;re genuinely traditional today, but newer than they&apos;re often assumed to be.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A Jewish wedding — a structurally different ceremony</h3>
      <div className="prose-p">Rather than vows spoken to an officiant, the core legal-religious act is the groom giving the bride an object of value (traditionally a ring) in front of two witnesses, beneath the chuppah. The ketubah is read aloud, and the ceremony traditionally closes with the breaking of a glass — commonly interpreted as a reminder of loss and fragility even amid celebration, though interpretations vary by community. There is no single fixed script here either: Ashkenazi, Sephardi, and other Jewish communities layer in different customs around this shared core.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The modern civil/secular wedding — real-world/present-day</h3>
      <div className="prose-p">In many countries today, a growing share of weddings are civil ceremonies — legally binding but with no required religious content, officiated by a registrar, judge, or licensed celebrant. Couples increasingly blend elements from multiple traditions (a religious ceremony from one partner&apos;s background alongside civil paperwork, or entirely secular ceremonies with customized vows), reflecting interfaith and intercultural marriages becoming more common, particularly in urban and diaspora communities.</div>

      <QuickCheck
        question="Why is it inaccurate to describe the Western white wedding dress as the 'traditional' or 'original' wedding attire worldwide?"
        options={[
          { text: "Because white has never been used in any wedding tradition anywhere", correct: false, explanation: "White is genuinely significant in some traditions (including some Western and East Asian contexts) — the issue is treating it as universal or original, not that it's never used." },
          { text: "Because the white Western bridal dress is a comparatively recent, culturally specific custom (popularized in the mid-1800s), and many cultures use red, gold, or other colors as their primary or auspicious bridal color", correct: true, explanation: "Correct. The white dress convention is neither ancient nor universal — red is the traditional bridal color across much of South Asia and China, for example." },
          { text: "Because no culture has ever assigned specific colors meaning in wedding attire", correct: false, explanation: "The opposite is true — wedding color choices are often deeply symbolic across cultures, just not uniformly white." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the Western white-dress, church-aisle wedding is the global default and other traditions are variations on it.", fix: "It's one tradition among many, and a relatively recent one at that — Jewish, Hindu, Shinto, Islamic, and countless other traditions developed their own ceremonial structures independently." },
          { mistake: "Treating \"exchanging rings\" as a universal wedding custom.", fix: "It's widespread but not universal — some traditions use different tokens entirely (a tied garment, a shared cup, a specific gift) or no physical exchange at all." },
          { mistake: "Assuming a wedding always requires a religious officiant.", fix: "Civil and secular wedding ceremonies, legally valid and officiated by a registrar or celebrant rather than clergy, are increasingly common in many countries." },
        ]}
      />
      <MisconceptionCallout
        myth="There's one 'real' or 'traditional' wedding format — the white dress, church aisle, ring exchange — and every other culture's wedding is a variation on it."
        reality={<p>Each tradition&apos;s wedding customs developed largely on their own terms, rooted in that culture&apos;s own religious and social history — a Hindu Saptapadi, a Jewish chuppah ceremony, and a Shinto san-san-kudo aren&apos;t adaptations of a Western template, and the Western white-dress format itself is a comparatively recent 19th-century convention rather than an ancient universal starting point.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you attend a wedding from a tradition other than your own, notice which specific act (not the surrounding party) actually constitutes the marriage — it's rarely just the reception or the party.",
          "If you read that a wedding custom is \"ancient,\" check whether that's actually documented — several very familiar Western customs (the white dress, in particular) are younger than commonly assumed.",
          "Notice what token, if any, is exchanged in a given tradition's ceremony — a ring, a garment tie, a cup, or nothing physical at all — it's a quick way to see how differently cultures encode the same commitment.",
          "If you're planning to attend an interfaith or intercultural wedding, ask which elements from each tradition are being included — many modern ceremonies deliberately blend more than one.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the most common wedding tradition across cultures?", answer: "There isn't one single universal ritual, but symbolic themes like joined hands, an exchange of rings or tokens, and shared food or drink recur across many unrelated traditions." },
          { question: "Why do brides wear white in Western weddings?", answer: "The custom is widely credited to Queen Victoria's choice to wear white at her 1840 wedding — before that, Western brides typically wore their best dress in any color. White gradually became the dominant Western bridal convention over the following century." },
          { question: "What happens at a Jewish wedding ceremony?", answer: "The couple stands beneath a chuppah (canopy), the ketubah (marriage contract) is read, rings or another object of value are exchanged in front of witnesses, and the ceremony traditionally ends with the groom breaking a glass underfoot." },
          { question: "Why do people throw rice or confetti at weddings?", answer: "Scattering grain, seeds, or (in modern practice) confetti over a couple echoes an old fertility-symbol tradition found in various forms across multiple cultures, historically using grain or fruit rather than paper confetti." },
          { question: "Is a civil wedding a 'real' wedding?", answer: "Yes — a civil ceremony, officiated by a registrar, judge, or licensed celebrant rather than clergy, is legally binding in the countries that recognize it and is an increasingly common wedding format worldwide." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
