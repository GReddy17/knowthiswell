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
  title: "Greeting Customs Around the World",
  category: "festivals-culture",
  order: 38,
  subtopic: "cultural-etiquette",
  tags: ["greeting customs", "cross-cultural etiquette", "bowing", "namaste", "handshakes"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Greeting customs vary widely — handshakes, bows, the Indian namaste, cheek kisses — and no single greeting is the universal 'correct' one worldwide.",
  summary: "A greeting custom is the culturally expected way people acknowledge each other on meeting, and it varies significantly worldwide in physical contact, formality, and meaning — there is no single global default.",
  sources: [
    { label: "Encyclopaedia Britannica — etiquette", url: "https://www.britannica.com/topic/etiquette" },
    { label: "Emily Post Institute — Etiquette Advice", url: "https://emilypost.com/advice" },
    { label: "Japan National Tourism Organization — Manners and Etiquette", url: "https://www.japan.travel/en/guide/manners-and-etiquette/" },
  ],
  seeAlso: [
    "festivals-culture/gift-giving-customs-across-cultures",
    "festivals-culture/dining-etiquette-around-the-world",
    "festivals-culture/cultural-taboos-to-be-aware-of",
    "festivals-culture/diwali-explained",
  ],
  glossary: [
    { term: "Namaste", definition: "A traditional South Asian greeting made with palms pressed together at chest or head height, often accompanied by a slight bow, meaning roughly \"I bow to you.\"" },
    { term: "Bowing depth", definition: "In Japanese etiquette, the angle and duration of a bow signal the level of formality or respect intended — a shallow nod differs meaningfully from a deep, held bow." },
    { term: "Personal space norms", definition: "Culturally variable expectations for how much physical distance is comfortable between people during a greeting or conversation, which directly shape whether handshakes, hugs, or cheek kisses are typical." },
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
          "There is no single \"correct\" way to greet someone worldwide — handshakes, bows, cheek kisses, and namaste-style gestures are all standard within their own cultural context.",
          "Physical contact expectations vary sharply: a firm handshake is standard in much of the West, while many East Asian cultures favor a bow with minimal or no physical contact.",
          "The same gesture can carry different meanings by context — a bow's depth and duration in Japan signals the level of formality intended, not a fixed universal action.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A greeting custom is simply the expected way people acknowledge each other when they meet — a handshake, a bow, a hug, a cheek kiss, or a gesture like <TermLink href="/festivals-culture/greeting-customs-around-the-world">namaste</TermLink>. Different cultures developed different defaults, generally shaped by local norms around physical contact, hierarchy, and formality. None of these is more &quot;correct&quot; than another — each works because it&apos;s the shared expectation within that culture.</div>}
        detailed={<div className="prose-p">Greeting customs generally track two underlying variables: how much physical contact a culture is comfortable with, and how much the greeting is expected to signal hierarchy or formality. Western handshake culture (common across much of Europe, North America, and increasingly global business settings) treats a firm handshake with eye contact as a sign of confidence and directness, developed historically in part as a gesture demonstrating an empty, weapon-free hand. Bowing cultures, most codified in Japan, instead avoid physical contact almost entirely — the depth and duration of the bow itself communicates the relationship: a brief nod for a casual acquaintance, a deeper, longer bow for someone of higher status or a more formal occasion, such as a business introduction. South Asian greeting customs frequently use <TermLink href="/festivals-culture/greeting-customs-around-the-world">namaste</TermLink> — palms pressed together, a slight bow of the head — which, like bowing, avoids physical contact and predates the pandemic-era Western interest in contactless greetings by centuries. Latin American, Southern European, and Middle Eastern greeting customs often lean the opposite direction, with cheek kisses (the number varies — one in some countries, two or three in others) or warm embraces standard even between newer acquaintances. Crucially, none of these defaults is fixed within a country either — greetings shift by context (business versus social), relationship (family versus stranger), and increasingly by individual preference, especially in multicultural cities.</div>}
      />
      <FootnoteAside>In much of the Middle East and parts of South and Southeast Asia, greetings between men and women may be more reserved than between two men or two women — a handshake might be replaced with a hand-over-heart gesture or a verbal greeting alone, depending on the individuals and local custom, so it&apos;s generally considered polite to let the other person initiate physical contact.</FootnoteAside>

      <QuickCheck
        question="Why does a Japanese bow's depth and duration matter?"
        options={[
          { text: "It has no real meaning — it's purely a stylistic variation with no communicative function", correct: false, explanation: "The bow's depth and duration is meaningful — it actively signals the level of formality or respect intended for that specific interaction." },
          { text: "It communicates the level of formality or respect intended for that interaction", correct: true, explanation: "Correct. A brief nod and a deep, held bow send different social signals in Japanese etiquette, roughly analogous to how tone of voice adds meaning in spoken greetings." },
          { text: "It is only used in religious ceremonies, not everyday greetings", correct: false, explanation: "Bowing is used in everyday social and business greetings in Japan, not only in religious or ceremonial contexts." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The Western business handshake (baseline case)</h3>
      <div className="prose-p">In much of Europe, North America, and international business settings generally, a firm handshake accompanied by direct eye contact and a brief verbal greeting is the standard way to open a professional interaction. The expectation is fairly uniform across genders in most business contexts today, and a notably weak or avoided handshake can be (rightly or wrongly) read as a lack of confidence — a good example of how a physical greeting carries social meaning beyond its literal function.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Bowing in Japan — a contact-free variation with built-in hierarchy signaling</h3>
      <div className="prose-p">Rather than physical contact, a Japanese greeting typically involves a bow, with the appropriate depth and length calibrated to the relationship and setting — a slight nod between casual acquaintances, a deeper bow of a few seconds for a first business meeting or when greeting someone senior. This differs from the handshake model in two ways at once: it avoids touch altogether, and it encodes a level of social hierarchy and formality directly into the physical gesture itself, which a handshake generally does not.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Greeting norms in multicultural, modern workplaces (real-world / present-day applied case)</h3>
      <div className="prose-p">In globally connected workplaces and cities today, it&apos;s increasingly common for people to consciously adapt their greeting to their counterpart — offering a slight bow instead of a handshake when meeting a Japanese business partner, or a namaste gesture when a handshake might not be expected in a given South Asian context. Many professionals now default to observing what the other person initiates rather than leading with their own cultural default, treating greeting flexibility itself as a marker of cross-cultural competence in international business and travel.</div>

      <QuickCheck
        question="What is the most reliable approach when you're unsure which greeting custom applies in an unfamiliar cultural setting?"
        options={[
          { text: "Always lead with a firm Western-style handshake regardless of context", correct: false, explanation: "A handshake isn't the universal default — leading with it regardless of context can be mismatched to the other culture's norms." },
          { text: "Observe or let the other person initiate, and follow their lead", correct: true, explanation: "Correct. Since expectations vary by culture, context, and even individual preference, following the other person's cue is the most broadly reliable approach." },
          { text: "Avoid greeting the person at all to prevent any possible mistake", correct: false, explanation: "Not greeting someone at all is generally read as ruder than an imperfect attempt at the expected custom." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a firm handshake with direct eye contact is the universally correct greeting.", fix: "It's a strong default in Western and international business contexts specifically, not a universal standard — bowing, namaste, and cheek kisses are equally \"correct\" within their own cultural contexts." },
          { mistake: "Treating all Asian greeting customs as interchangeable.", fix: "Japanese bowing, Indian namaste, and Thai wai gestures are distinct traditions from different cultures with different specific forms and meanings, not one generic \"Asian greeting.\"" },
          { mistake: "Assuming greeting customs are fixed and never shift by context.", fix: "The same culture often uses different greetings for business versus social settings, or for family versus strangers — greeting norms are context-dependent, not a single fixed rule." },
        ]}
      />
      <MisconceptionCallout
        myth="A firm handshake with direct eye contact is the universally 'correct' greeting worldwide."
        reality={<p>The handshake is a strong cultural default specifically in Western and international-business contexts — it is not a universal standard. Bowing (Japan), the namaste gesture (South Asia), cheek kisses (parts of Europe and Latin America), and other greeting customs are equally &quot;correct&quot; within their own cultural settings, each shaped by that culture&apos;s own norms around physical contact and formality rather than deviating from one true global default.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you meet someone from an unfamiliar cultural background, notice what greeting they initiate and mirror it rather than leading with your own default.",
          "Before international business travel, look up the standard greeting custom for that specific country — general regional assumptions (like \"Asian greetings\") are often too broad to be useful.",
          "Pay attention to how greeting norms shift between formal and casual settings within a culture, not just between different countries.",
          "If uncertain about physical contact (like handshakes between genders in some cultures), let the other person initiate rather than assuming."
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the traditional greeting in Japan?", answer: "Bowing, with the depth and duration calibrated to formality and relationship — a slight nod for a casual acquaintance, a deeper, longer bow for a formal or hierarchical setting such as a first business meeting." },
          { question: "What does namaste mean as a greeting?", answer: "Namaste is a South Asian greeting made by pressing the palms together, often with a slight bow of the head, roughly translating to \"I bow to you\" — it is used as both hello and goodbye in many South Asian contexts." },
          { question: "Is it rude not to shake hands in Western culture?", answer: "In most Western business and formal social contexts, declining an offered handshake without explanation can be read as impolite or distant, though this varies by relationship, health considerations, and increasingly personal or cultural preference." },
          { question: "How many cheek kisses is normal as a greeting in Europe?", answer: "It varies by country — some countries use one cheek kiss, others two, and a few (such as parts of France) use up to three or four, so it's a genuinely local custom rather than a fixed European standard." },
          { question: "Why do some cultures avoid physical contact in greetings?", answer: "Cultures with lower physical-contact norms — Japan and much of East Asia, for example — developed greeting customs like bowing that convey respect and acknowledgment without touch, reflecting broader cultural comfort levels around personal space." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
