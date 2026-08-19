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
  title: "Cultural Significance of Colors in Clothing",
  category: "festivals-culture",
  order: 37,
  subtopic: "clothing-and-attire",
  tags: ["color symbolism", "clothing colors", "wedding colors", "mourning colors"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "White signals a wedding in much of the West and mourning in parts of East and South Asia — color meaning in clothing is culturally specific, not universal.",
  summary: "The meaning of a clothing color depends heavily on cultural context — white is a bridal color in much of the Western tradition but a mourning color in parts of East and South Asia, and red is auspicious bridal wear across much of South Asia and China rather than a warning color.",
  sources: [
    { label: "Encyclopaedia Britannica — Colour Symbolism", url: "https://www.britannica.com/art/color-symbolism" },
    { label: "Encyclopaedia Britannica — Mourning", url: "https://www.britannica.com/topic/mourning" },
    { label: "Encyclopaedia Britannica — Church Year: Liturgical Colours", url: "https://www.britannica.com/topic/church-year/Liturgical-colours" },
    { label: "Encyclopaedia Britannica — Sari", url: "https://www.britannica.com/topic/sari" },
  ],
  seeAlso: [
    "festivals-culture/traditional-indian-attire-explained",
    "festivals-culture/traditional-attire-around-the-world",
    "festivals-culture/wedding-traditions-around-the-world",
    "festivals-culture/funeral-and-mourning-traditions-respectful-overview",
  ],
  glossary: [
    { term: "Colour symbolism", definition: "The culturally assigned meaning of specific colors, which can differ significantly between traditions — the same color can carry entirely different (even opposite) associations depending on the culture." },
    { term: "Liturgical colours", definition: "In Christian tradition, specific colors (white, red, green, purple, black, among others) assigned to particular seasons or occasions in the church calendar, worn as vestments and used in decoration." },
    { term: "Mourning colour", definition: "The color culturally designated for dress during a period of grief following a death — black in much of the Western/Christian tradition, but white, purple, or other colors in various other cultural traditions." },
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
          "The same color can carry opposite meanings in different cultures — white signals a wedding in much of the Western tradition and mourning in parts of East and South Asia.",
          "Red is widely auspicious and bridal in South Asian and Chinese tradition, distinct from its Western associations with danger or passion.",
          "Color symbolism in clothing isn't fixed even within a single tradition — Christian liturgical colors, for instance, deliberately change by season and occasion within the same faith.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Clothing colors carry culturally specific meaning that isn&apos;t consistent worldwide. White is strongly associated with weddings and purity in much of Western tradition, but in parts of China, Korea, and India, white is instead a traditional <TermLink href="/festivals-culture/cultural-significance-of-colors-in-clothing">mourning colour</TermLink>. Red, meanwhile, is the traditional auspicious bridal color across much of South Asia and China — nearly the opposite association from its Western use as a warning or passion color.</div>}
        detailed={<div className="prose-p">Britannica&apos;s overview of <TermLink href="/festivals-culture/cultural-significance-of-colors-in-clothing">colour symbolism</TermLink> notes that white can signify either joy and purity or, in other traditions, death and sadness — the meaning is contextual, not fixed to the color itself. In Western Christian tradition, white is associated with festivity and purity (used at feasts in the church calendar), and became the dominant bridal color following its popularization at Queen Victoria&apos;s 1840 wedding. In several East Asian and South Asian traditions, however, white is the conventional <TermLink href="/festivals-culture/cultural-significance-of-colors-in-clothing">mourning colour</TermLink> — worn at funerals, and, in some traditional Hindu customs, associated with widowhood specifically, historically discouraging remarried or bright colors for widows in certain communities (a practice increasingly challenged and changed in contemporary India). Black follows a similarly divided pattern: it&apos;s the conventional Western mourning color (used at penitential and memorial occasions in Christian tradition), while in various other cultural contexts, mourning is marked by white, purple, or other colors instead, and black itself carries no particular somber association at all in many contexts — it&apos;s simply a common, versatile clothing color, including in significant parts of everyday and formal Western fashion completely unrelated to grief. Red, rather than being a cautionary color, is the traditional auspicious bridal color across much of South Asia (a red sari or lehenga is standard Hindu bridal wear in many regions) and China (where red is associated with luck, prosperity, and celebration broadly, well beyond weddings specifically). Even within a single tradition, color meaning shifts by context: Christian <TermLink href="/festivals-culture/cultural-significance-of-colors-in-clothing">liturgical colours</TermLink> change deliberately through the church calendar — purple for Advent and Lent (penitence and preparation), white or gold for major feast days, red for Pentecost and the feasts of martyrs, and green for ordinary time — showing that even a single religious tradition treats color as a flexible, occasion-specific signal rather than a single fixed rule.</div>}
      />
      <FootnoteAside>Saffron (a deep orange-yellow) carries specific religious weight in both Hindu and Buddhist traditions — worn by Hindu sadhus (renunciate ascetics) and Buddhist monks alike as a marker of renunciation and spiritual life, a meaning entirely distinct from the color&apos;s largely decorative role in most Western fashion contexts.</FootnoteAside>

      <QuickCheck
        question="A traveler assumes that wearing white to a funeral would universally be seen as disrespectful, based on Western convention. What's the accurate correction?"
        options={[
          { text: "White is never appropriate at any funeral in any culture", correct: false, explanation: "This overcorrects — in parts of East and South Asian tradition, white is specifically the conventional mourning color, making it not just appropriate but expected at a funeral, the opposite of the Western assumption." },
          { text: "In parts of East and South Asia, white is the traditional mourning color, so wearing white to a funeral in those cultural contexts can be entirely appropriate — even expected — rather than disrespectful", correct: true, explanation: "Correct. The Western black-for-mourning convention isn't universal — white carries the mourning association instead in several other traditions." },
          { text: "Mourning colors don't matter in any culture, so any color is equally fine everywhere", correct: false, explanation: "This understates how much color can matter — many cultures do have specific expectations around mourning dress, they're just not the same expectations everywhere." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: White — bridal in the West, mourning elsewhere (baseline case)</h3>
      <div className="prose-p">In much of the Western/Christian tradition, white signals purity and celebration, cemented as the dominant bridal color after Queen Victoria&apos;s 1840 wedding. In several East Asian traditions (including parts of China and Korea) and in some South Asian, particularly Hindu, customs, white instead carries the mourning association, traditionally worn at funerals and, in some communities, associated with widowhood. Same color, essentially opposite primary association, depending entirely on cultural context.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Red — auspicious and bridal, not just a warning color (a further variation)</h3>
      <div className="prose-p">Rather than its common Western association with danger, passion, or warning signals, red is the traditional auspicious color across much of South Asian and Chinese culture — a red sari or lehenga is standard bridal wear in many Hindu wedding traditions, and red clothing and decoration broadly signal luck, prosperity, and celebration in Chinese culture (including at Lunar New Year, not only weddings). This is a genuinely distinct symbolic register from red&apos;s typical Western associations, not a minor variation on the same idea.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Christian liturgical colours — color meaning changing within one tradition, real-world/present-day</h3>
      <div className="prose-p">Even setting cross-cultural comparison aside, a single tradition can assign shifting meaning to color by context. Christian liturgical practice today still commonly uses purple for Advent and Lent (seasons of penitence and preparation), white or gold for Christmas, Easter, and other major feast days, red for Pentecost and commemorations of martyrs, and green for the long stretches of the church calendar outside major seasons — a working, currently-used system in which the same faith assigns several different colors specific, non-interchangeable meanings depending on the occasion.</div>

      <QuickCheck
        question="What's the most accurate general statement about color meaning in clothing across cultures?"
        options={[
          { text: "Colors have fixed universal meanings that hold across all cultures and contexts", correct: false, explanation: "This is contradicted by the white and red examples — the same color carries different, sometimes opposite, meanings depending on cultural and religious context." },
          { text: "Color meaning in clothing is culturally and contextually specific — the same color can carry different, even opposite, associations across traditions, and can shift meaning by occasion even within a single tradition", correct: true, explanation: "Correct. This is the accurate, evidence-supported pattern — white/mourning-vs-bridal and Christian liturgical colors both illustrate it." },
          { text: "Only Western cultures assign meaning to clothing colors; other traditions use color decoratively without symbolic significance", correct: false, explanation: "The opposite is true — East Asian, South Asian, and many other traditions have well-documented, specific color symbolism of their own, often more elaborately coded than casual Western use." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming white is a universal wedding color.", fix: "White is the dominant Western bridal color, but red is traditional bridal wear across much of South Asia and China, and white itself carries a mourning association in several other cultural traditions." },
          { mistake: "Assuming black is a universal mourning color.", fix: "Black is the conventional Western/Christian mourning color, but other traditions use white, purple, or other colors for mourning instead — there's no single universal color for grief." },
          { mistake: "Treating a single tradition's color symbolism as fixed and unchanging.", fix: "Even within one tradition, color meaning can shift by occasion — Christian liturgical colors are a clear, currently-practiced example of deliberate, season-by-season color meaning within a single faith." },
        ]}
      />
      <MisconceptionCallout
        myth="White is a universal color for wedding attire across all cultures."
        reality={<p>White is the dominant bridal color in much of the Western tradition (popularized following Queen Victoria&apos;s 1840 wedding), but it is not universal — red is the traditional, auspicious bridal color across much of South Asian and Chinese culture, and white itself is the conventional mourning color in several East Asian and South Asian traditions, functionally the opposite of its Western bridal association.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before attending a wedding, funeral, or formal event in a cultural context different from your own, ask about appropriate colors rather than defaulting to your own tradition's convention.",
          "Next time you notice a color choice in traditional dress (bridal, mourning, festive), consider what that specific culture associates with it before assuming a universal meaning.",
          "Notice how Christian liturgical colors change through the church calendar — it's a useful, currently-practiced example of intentional, occasion-specific color meaning within a single tradition.",
          "When reading about color symbolism, check whether the claim is presented as universal or attributed to a specific culture — broad, unattributed claims about \"what color X means\" are a common oversimplification.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What color is worn for mourning in different cultures?", answer: "Black is conventional in much of the Western/Christian tradition, while white is the traditional mourning color in several East Asian and South Asian cultures, and other traditions use purple or other colors — there's no single universal mourning color." },
          { question: "Why do Hindu brides often wear red?", answer: "Red is traditionally considered auspicious in Hindu culture and is a common bridal color across much of South Asia, symbolically distinct from red's typical Western associations with danger or warning." },
          { question: "Is white always a wedding color?", answer: "No — white is the dominant bridal color in much of the Western tradition, but it carries a mourning association instead in several East Asian and South Asian traditions, and isn't the traditional bridal color in cultures where red or other colors are favored." },
          { question: "Why do Christian priests wear different colored vestments at different times of year?", answer: "Christian liturgical color conventions assign specific colors to specific seasons and occasions in the church calendar — purple for Advent and Lent, white or gold for major feast days, red for Pentecost and martyrs' feasts, and green for ordinary time." },
          { question: "What does the color saffron mean in religious dress?", answer: "Saffron (a deep orange-yellow) is worn by Hindu sadhus and Buddhist monks alike as a marker of renunciation and spiritual life, a specific religious meaning distinct from the color's largely decorative use elsewhere." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
