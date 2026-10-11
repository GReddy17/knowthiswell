import React from 'react';
import { PostMeta, PostFrontmatter, QuizBankItem } from '@/types/post';
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
  title: "Festival Art & Craft Traditions (rangoli, mehndi, etc.)",
  category: "festivals-culture",
  order: 34,
  subtopic: "art-dance-and-music-traditions",
  tags: ["rangoli", "mehndi", "henna", "festival crafts", "folk art"],
  date: "2026-08-16",
  updated: "2026-10-10",
  youtubeShort: false, youtubeLong: false,
  seoScore: 67, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-08-16",
  excerpt: "Rangoli, mehndi, and similar festival art traditions carry region-specific styles and meanings — mehndi alone varies significantly between Indian, Arabic, and African design traditions.",
  summary: "Festival art and craft traditions are decorative practices tied to specific celebrations — rangoli floor art and mehndi (henna) body art in South Asia are two of the best known, but comparable traditions, like Ukrainian pysanky and Chinese paper-cutting, exist across many cultures' festival calendars.",
  sources: [
    { label: "Encyclopaedia Britannica — Henna", url: "https://www.britannica.com/topic/henna" },
    { label: "Encyclopaedia Britannica — Diwali", url: "https://www.britannica.com/topic/Diwali" },
    { label: "Victoria and Albert Museum — South Asia Collections", url: "https://www.vam.ac.uk/collections" },
    { label: "Smithsonian Institution", url: "https://www.si.edu/" },
  ],
  seeAlso: [
    "festivals-culture/diwali-explained",
    "festivals-culture/holi-explained",
    "festivals-culture/navratri-and-durga-puja",
    "festivals-culture/common-festival-myths-and-misconceptions",
  ],
  glossary: [
    { term: "Rangoli", definition: "Decorative floor patterns made from colored powder, rice flour, sand, or flower petals, traditionally drawn at entrances during festivals like Diwali and Onam to welcome guests and, in Hindu tradition, deities." },
    { term: "Mehndi", definition: "Temporary body art created by applying henna paste to skin, traditionally used across South Asia, the Middle East, and North Africa for weddings and festivals, with distinct regional design styles." },
    { term: "Henna", definition: "A plant (Lawsonia inermis) whose dried, ground leaves are made into a paste used as a temporary reddish-brown dye for skin, hair, and textiles; the source material for mehndi designs." },
    { term: "Pookalam", definition: "A flower-based floor design made during Kerala's Onam festival, similar in function to rangoli but composed entirely of flower petals arranged in concentric patterns." },
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

export const quiz: QuizBankItem[] = [
  {"question": "What is rangoli?", "difficulty": "easy", "options": [{"text": "A permanent wall painting inside temples", "correct": false, "explanation": "Rangoli is temporary and made on the floor, usually at the entrance."}, {"text": "A decorative floor pattern made from colored powder, rice flour, sand or flower petals, usually at a home's entrance", "correct": true, "explanation": "Right. It's especially common during festivals like Diwali and Onam."}, {"text": "A henna design drawn on the hands", "correct": false, "explanation": "That's mehndi; rangoli is floor art."}]},
  {"question": "What's the difference between henna and mehndi?", "difficulty": "easy", "options": [{"text": "They're two names for exactly the same thing", "correct": false, "explanation": "They're related but not strictly interchangeable: one's the dye, the other's the art."}, {"text": "Mehndi is the plant and henna is the design", "correct": false, "explanation": "That's the wrong way round; henna is the plant (Lawsonia inermis)."}, {"text": "Henna is the plant-based dye; mehndi is the art form and finished design made with it", "correct": true, "explanation": "Exactly. Henna is the material, mehndi is the practice and the design."}]},
  {"question": "What is a pookalam?", "difficulty": "easy", "options": [{"text": "A flower-petal floor design made for Kerala's Onam festival", "correct": true, "explanation": "Yes. It's arranged in concentric patterns, a flower-only relative of rangoli."}, {"text": "A Ukrainian decorated egg", "correct": false, "explanation": "Those are pysanky, a different festival craft altogether."}, {"text": "A type of colored powder used at Holi", "correct": false, "explanation": "A pookalam is made entirely of flower petals, not powder."}]},
  {"question": "How does Tamil Nadu's kolam usually differ from North Indian rangoli?", "difficulty": "medium", "options": [{"text": "Kolam is made only of flower petals", "correct": false, "explanation": "That describes Kerala's pookalam, not Tamil Nadu's kolam."}, {"text": "Kolam is typically drawn in white rice flour without color, while North Indian rangoli favors bright colored powders", "correct": true, "explanation": "Right. That color-versus-white split is itself a regional signal."}, {"text": "Kolam is drawn on the hands rather than the floor", "correct": false, "explanation": "Kolam is a floor design; hand designs are mehndi."}]},
  {"question": "Why were some traditional rangoli designs made with rice flour?", "difficulty": "medium", "options": [{"text": "Because rice flour is permanent and never washes away", "correct": false, "explanation": "Rangoli is temporary and refreshed for festivals; permanence wasn't the point."}, {"text": "Because colored powder had not been invented yet", "correct": false, "explanation": "The reason the post gives is feeding small creatures, not a lack of other materials."}, {"text": "So ants and small insects could feed on them, a bit of hospitality for non-human visitors too", "correct": true, "explanation": "Right. The welcome extended beyond human guests."}]},
  {"question": "Which pair does the post give as festival crafts outside South Asia that follow the same pattern as rangoli and mehndi?", "difficulty": "medium", "options": [{"text": "Ukrainian pysanky (decorated eggs) and Chinese paper-cutting for Lunar New Year", "correct": true, "explanation": "Yes. Both remain living festival crafts that are still taught within their communities."}, {"text": "Japanese tea ceremony and Italian opera", "correct": false, "explanation": "Neither is mentioned; the post's examples are pysanky and Chinese paper-cutting."}, {"text": "Mexican piñatas and Scottish tartan", "correct": false, "explanation": "The post's examples are pysanky and jianzhi, Chinese paper-cutting."}]},
  {"question": "You see a henna design made of geometric shapes rather than florals. Which regional style does it most likely reflect?", "difficulty": "medium", "options": [{"text": "South Asian bridal", "correct": false, "explanation": "South Asian bridal mehndi tends toward dense floral and paisley coverage."}, {"text": "North African", "correct": true, "explanation": "Right. North African styles often favor geometric patterns over floral ones."}, {"text": "Arabic", "correct": false, "explanation": "Arabic mehndi usually uses bold, spaced-out floral and vine motifs."}]},
  {"question": "A friend says a darker henna stain means your mother-in-law will love you more. What actually decides stain darkness?", "difficulty": "hard", "options": [{"text": "The strength of the relationship", "correct": false, "explanation": "That's the saying, not a fact; stain color depends on paste, skin and time."}, {"text": "Which festival it's applied for", "correct": false, "explanation": "The occasion doesn't change the chemistry; paste, skin and time do."}, {"text": "Paste quality, skin chemistry and how long the paste is left on", "correct": true, "explanation": "Exactly. The saying is folklore with no biochemical basis."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Festival art forms like rangoli (floor art) and mehndi (henna body art) are functional traditions tied to specific occasions — welcoming guests, marking a wedding, inviting prosperity — not purely decorative habits.",
          "Mehndi is not exclusively Indian: it's practiced across South Asia, the Middle East, and North Africa, and the design styles genuinely differ by region (Indian/Pakistani floral-paisley, Arabic bold floral, North African geometric).",
          "Comparable festival craft traditions exist well outside South Asia — Ukrainian pysanky (decorated eggs) and Chinese paper-cutting for Lunar New Year are two examples of the same underlying pattern: seasonal or festival-linked decorative craft with community significance.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Rangoli is a decorative pattern made on the floor, usually at a home&apos;s entrance, using colored powder, rice, or flower petals — common during <TermLink href="/festivals-culture/diwali-explained">Diwali</TermLink> and other Indian festivals. Mehndi is temporary body art made from henna paste, applied especially to hands and feet for weddings and festivals across South Asia and the Middle East. Both are hand-applied, temporary art forms tied to specific celebrations rather than everyday decoration.</div>}
        detailed={<div className="prose-p">Both traditions carry functional, not just aesthetic, purpose: rangoli is traditionally believed to welcome guests and, in Hindu households, invite the goddess Lakshmi&apos;s presence during Diwali, and its design and materials vary regionally — Tamil Nadu&apos;s kolam is typically drawn in white rice flour without color, while North Indian rangoli favors bright colored powders, and Kerala&apos;s Onam festival uses an entirely flower-based version called pookalam. Mehndi, meanwhile, is not a single South Asian tradition but a practice shared across South Asia, the Middle East, and North Africa, each with a distinct design vocabulary — South Asian mehndi tends toward dense floral and paisley motifs often covering the full hand, Arabic mehndi favors bolder, more open floral vine patterns with visible negative space, and North African styles frequently use geometric patterns. This regional variation means there is no single &quot;correct&quot; mehndi design — the style itself signals a specific cultural tradition.</div>}
      />
      <FootnoteAside>Rangoli isn&apos;t only decorative — some traditional rangoli designs were made with rice flour specifically so ants and small insects could feed on it, a small act of hospitality extended to non-human visitors as well as human guests.</FootnoteAside>

      <QuickCheck
        question="Is mehndi (henna body art) an exclusively Indian tradition?"
        options={[
          { text: "Yes, it originated and remains exclusively within India", correct: false, explanation: "Mehndi is practiced well beyond India — across South Asia broadly, the Middle East, and North Africa, each region with its own distinct design style." },
          { text: "No, it's practiced across South Asia, the Middle East, and North Africa, each with distinct regional design styles", correct: true, explanation: "Correct. Indian/Pakistani, Arabic, and North African mehndi traditions are all real and visually distinguishable from one another." },
          { text: "No, it originated in East Asia and later spread to South Asia", correct: false, explanation: "This isn't accurate — henna use for body art traces to the wider South Asian, Middle Eastern, and North African region historically, not East Asia." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Rangoli at Diwali — the baseline case</h3>
      <div className="prose-p">In the days before Diwali, households clean the home and lay a rangoli design at the front entrance, often using colored powder (gulal), rice flour, or flower petals arranged in symmetrical, often geometric patterns. The design is refreshed for the festival and is understood as both decorative and welcoming — inviting guests, and in religious terms, inviting prosperity into the home for the year ahead.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Mehndi&apos;s regional variation — the exception to a &quot;one style&quot; assumption</h3>
      <div className="prose-p">A South Asian bridal mehndi design, often covering the hands and forearms in dense, intricate floral-paisley patterns, looks visibly different from an Arabic mehndi design, which typically uses bolder, more spaced-out floral and vine motifs with visible skin between elements, or a North African style favoring geometric shapes over floral ones. These aren&apos;t casual style choices — they reflect genuinely distinct regional artistic traditions that developed independently within the broader practice of henna body art, which itself spans a wide geographic and cultural range.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Festival craft traditions today — the applied case</h3>
      <div className="prose-p">Rangoli-making now includes organized competitions at colleges, offices, and community events during Diwali and Onam, alongside the traditional home version, and mehndi has become both a wedding-season professional service industry across South Asia and a broader global beauty trend, sometimes applied outside any festival or wedding context at all. This mirrors a pattern seen elsewhere too — Ukrainian pysanky (wax-resist decorated Easter eggs) and Chinese paper-cutting (jianzhi) for Lunar New Year remain living festival crafts, still taught and practiced within their communities, even as some versions of each have also become globally recognized decorative art forms.</div>

      <QuickCheck
        question="Why do South Asian, Arabic, and North African mehndi designs look visibly different from one another?"
        options={[
          { text: "Because only one of the three is an authentic historical tradition", correct: false, explanation: "All three are genuine, independently developed regional traditions within the broader practice of henna body art — none is more 'authentic' than the others." },
          { text: "Because each region developed its own distinct design vocabulary within the shared practice of henna body art", correct: true, explanation: "Correct. Dense floral-paisley (South Asian), open bold floral (Arabic), and geometric (North African) are all real, independently developed regional styles." },
          { text: "Because they use entirely different plant-based dyes", correct: false, explanation: "The underlying dye source, henna, is generally the same across these traditions — the regional difference is in design style and application pattern, not the dye material itself." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming rangoli and pookalam are the same design tradition with different names.", fix: "Pookalam is specifically flower-based, associated with Onam in Kerala, while rangoli more broadly refers to designs made from colored powder, rice, or other materials, common across many Indian festivals — pookalam is best understood as a regional flower-specific form within the wider rangoli-style tradition." },
          { mistake: "Treating any henna design as generically &apos;Indian mehndi&apos; regardless of its actual style.", fix: "Check the pattern: dense full-hand floral-paisley coverage suggests South Asian style, while bold spaced-out florals suggest Arabic style, and geometric patterns suggest North African style — the design itself signals its regional tradition." },
          { mistake: "Assuming these are purely decorative practices with no functional or symbolic purpose.", fix: "Rangoli is traditionally tied to welcoming guests and inviting prosperity; mehndi has traditionally marked significant life events like weddings — both carry meaning beyond aesthetics, even as some modern use is purely decorative." },
        ]}
      />
      <MisconceptionCallout
        myth="Mehndi (henna) designs have one single, fixed, universal meaning — for example, that a specific pattern always symbolizes the same thing everywhere it's used."
        reality={<p>Design meaning in mehndi varies by region, occasion, and even individual artist — a peacock motif might carry different associations in a South Asian bridal design than a geometric pattern does in a North African context, and much of the meaning attached to specific motifs today is folkloric or personal rather than fixed and universal across all mehndi traditions. Even the popular idea that darker henna stain color predicts &quot;how much your mother-in-law will love you&quot; is a widely repeated cultural saying, not a claim with any biochemical basis — stain darkness depends on skin chemistry, paste quality, and how long it&apos;s left on, not on relationship outcomes.</p>}
      />

      <QuickCheck
        question="What is the most accurate statement about the meaning of mehndi/henna designs?"
        options={[
          { text: "Every mehndi motif has one universally agreed, fixed symbolic meaning across all cultures that use henna", correct: false, explanation: "This overstates it — meaning varies by region, occasion, and artist, and much popular symbolism is folkloric rather than fixed and universal." },
          { text: "Meaning varies by region, occasion, and tradition, and some popular beliefs about mehndi (like stain darkness predicting relationships) are folklore, not fact", correct: true, explanation: "Correct. Mehndi symbolism is regionally and culturally variable, and some widely repeated claims about it are cultural sayings rather than documented fact." },
          { text: "Mehndi designs have no meaning at all and are purely decorative in every tradition that uses them", correct: false, explanation: "This goes too far the other way — mehndi has real traditional associations with weddings and celebrations in many of the cultures that practice it, even if specific motif meanings vary." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a mehndi design, notice whether it's dense and full-coverage, bold and spaced-out, or geometric — a quick way to guess its regional style.",
          "If you see a rangoli, check whether it uses color or is monochrome rice-flour — that split (colored rangoli versus white kolam) is itself a regional signal.",
          "Be skeptical of any confident claim about what a specific mehndi motif &apos;means&apos; — ask whether it's a documented regional tradition or a popular saying.",
          "Look for festival craft traditions outside South Asia too — Ukrainian pysanky and Chinese paper-cutting are worth learning as comparable living traditions.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is rangoli made of?", answer: "Traditionally colored powder (gulal), rice flour, sand, or flower petals, arranged in symmetrical patterns at a home's entrance, especially during festivals like Diwali and Onam." },
          { question: "What is the difference between mehndi and henna?", answer: "Henna is the plant-derived dye itself; mehndi is the art form and the finished temporary body-art design created by applying henna paste to skin. The terms are related but not strictly interchangeable — henna is the material, mehndi is the practice/design." },
          { question: "Is mehndi only used in India?", answer: "No — mehndi (henna body art) is practiced across South Asia, the Middle East, and North Africa, each region with its own distinct design tradition, not a single shared style." },
          { question: "What is pookalam?", answer: "A flower-based floor design made during Kerala's Onam festival, arranged in concentric circular patterns using only flower petals — a regional, flower-specific relative of the broader rangoli tradition." },
          { question: "Does the color of henna stain mean something?", answer: "There's a popular saying that a darker henna stain predicts good fortune in relationships, but this is folklore, not fact — stain darkness actually depends on paste quality, skin chemistry, and how long the paste is left on the skin." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
