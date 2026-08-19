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
  title: "Gift-Giving Customs Across Cultures",
  category: "festivals-culture",
  order: 39,
  subtopic: "cultural-etiquette",
  tags: ["gift-giving customs", "cross-cultural etiquette", "red envelope", "potlatch"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Gift-giving customs vary widely across cultures — what's given, how it's wrapped, and even whether it's opened in front of the giver all follow different local rules.",
  summary: "Gift-giving customs are the culturally specific rules around what to give, how to present it, and when to open it, and they differ enough between cultures that a gesture considered thoughtful in one place can be considered awkward or even offensive in another.",
  sources: [
    { label: "Encyclopaedia Britannica — Chinese New Year", url: "https://www.britannica.com/topic/Chinese-New-Year" },
    { label: "Encyclopaedia Britannica — potlatch", url: "https://www.britannica.com/topic/potlatch" },
    { label: "Emily Post Institute — Gift-Giving Etiquette", url: "https://emilypost.com/advice/gift-giving-etiquette" },
  ],
  seeAlso: [
    "festivals-culture/greeting-customs-around-the-world",
    "festivals-culture/dining-etiquette-around-the-world",
    "festivals-culture/cultural-taboos-to-be-aware-of",
    "festivals-culture/diwali-explained",
  ],
  glossary: [
    { term: "Hongbao", definition: "Red envelopes containing money, traditionally given during Chinese New Year and other celebrations, with the red color symbolizing luck and warding off misfortune." },
    { term: "Potlatch", definition: "A ceremonial gift-giving feast practiced by Indigenous peoples of the Pacific Northwest Coast, in which a host distributes wealth to guests to mark a significant occasion and affirm social standing." },
    { term: "Reciprocity norm", definition: "An often-unspoken cultural expectation that a gift should be met with a gift of comparable value or effort, which varies in strength and formality by culture." },
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
          "Gift-giving customs are not the same everywhere — what's appropriate to give, how it's wrapped, and whether it's opened immediately or later all vary by culture.",
          "Some cultures attach specific symbolic meaning to color, number, or item type (like red envelopes at Chinese New Year, or clocks being considered inauspicious gifts in Chinese culture) that isn't intuitive from the outside.",
          "Gift-giving can also be a formal social institution rather than a casual gesture — the Pacific Northwest Coast potlatch ceremony is a documented example of gift-giving functioning as a structured, status-affirming social practice.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Gift-giving customs are the local rules around presenting a gift — what&apos;s appropriate to give, how it should be wrapped, and even when it should be opened. In some cultures a gift is opened immediately in front of the giver; in others, opening it later, in private, is considered more polite. Certain items, colors, or quantities can carry specific meaning — <TermLink href="/festivals-culture/gift-giving-customs-across-cultures">hongbao</TermLink> (red envelopes with money) at Chinese New Year is a well-known example — so a gesture that seems generically thoughtful in one culture can land oddly, or even as bad luck, in another.</div>}
        detailed={<div className="prose-p">Gift-giving norms tend to vary along a few specific dimensions: what item is appropriate, how it&apos;s wrapped and presented, and the timing of opening it. In much of East Asia, certain gifts carry symbolic weight tied to language or tradition — in Chinese culture, clocks are traditionally avoided as gifts because the phrase &quot;giving a clock&quot; (song zhong) sounds identical to a phrase associated with attending a funeral, and gifts are often given and received with both hands as a sign of respect. During Chinese New Year specifically, <TermLink href="/festivals-culture/gift-giving-customs-across-cultures">hongbao</TermLink> — red envelopes containing money — are given by elders to children and unmarried younger relatives, with the red color symbolizing luck and the envelope itself (rather than cash handed over directly) considered the respectful format. In much of the West, by contrast, a gift is typically opened immediately in front of the giver as a sign of appreciation, while in parts of Asia, opening a gift immediately in front of the giver can be seen as presumptuous or overly eager, and setting it aside to open later privately is often preferred. Gift-giving can also function as a formal social institution rather than an individual gesture: the <TermLink href="/festivals-culture/gift-giving-customs-across-cultures">potlatch</TermLink> ceremony, practiced by Indigenous peoples of the Pacific Northwest Coast of North America, is a structured feast in which a host distributes substantial gifts to guests to mark major life events and affirm social standing — historically banned by Canadian and U.S. governments in the late 19th and early 20th centuries as part of broader assimilation policies, and now recognized and legally protected as a significant cultural practice.</div>}
      />
      <FootnoteAside>In Japan, gift wrapping itself is treated as part of the gift — elaborate, careful wrapping is considered an expression of respect and effort, and gifts are traditionally given and received with both hands along with a slight bow, mirroring the same two-handed respect gesture found in Chinese gift customs.</FootnoteAside>

      <QuickCheck
        question="Why are clocks traditionally avoided as gifts in Chinese culture?"
        options={[
          { text: "Clocks were historically too expensive to be considered an appropriate gift", correct: false, explanation: "Cost isn't the reason — the avoidance is based on a linguistic association, not price." },
          { text: "The phrase for \"giving a clock\" sounds like a phrase associated with attending a funeral", correct: true, explanation: "Correct. \"Song zhong\" (giving a clock) is a homophone for a phrase linked to death/funerals in Mandarin, making it a symbolically unlucky gift regardless of the giver's intent." },
          { text: "Clocks are considered a religious object reserved only for temples", correct: false, explanation: "The taboo is linguistic/symbolic in origin, not related to clocks being a restricted religious object." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A Western birthday or holiday gift (baseline case)</h3>
      <div className="prose-p">In much of the U.S. and Western Europe, a gift is typically wrapped, given in person, and opened immediately in front of the giver, with visible enthusiasm treated as a sign of appreciation regardless of the gift&apos;s actual value. The specific item matters less than the gesture and the personal thought behind it, and there&apos;s generally no strong taboo around specific colors or item categories, beyond obvious practical considerations (like avoiding something the recipient clearly wouldn&apos;t want or use).</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Hongbao at Chinese New Year — a symbolically specific variation</h3>
      <div className="prose-p">Rather than a wrapped physical item, the standard Chinese New Year gift to children and unmarried younger relatives is money placed inside a red envelope (hongbao), with the red color specifically symbolizing luck and the envelope format considered more respectful than handing over cash directly. The amount is often chosen to avoid numbers considered unlucky (such as four, which sounds like the word for &quot;death&quot; in Mandarin and several other Chinese dialects) — a level of symbolic specificity around presentation and quantity that a generic Western gift exchange doesn&apos;t typically involve.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The potlatch ceremony today (real-world / present-day applied case)</h3>
      <div className="prose-p">Among Indigenous communities of the Pacific Northwest Coast today, the potlatch continues to be practiced as a structured ceremonial feast marking major events — weddings, naming ceremonies, or the passing of hereditary titles — where a host gives substantial gifts to guests, historically a marker of status and generosity within the community. After being formally outlawed by both the Canadian and U.S. governments (Canada&apos;s ban lasted from 1885 to 1951) as part of broader policies aimed at suppressing Indigenous cultural practices, the potlatch&apos;s continued and now legally protected practice today is a clear present-day example of gift-giving functioning as a resilient, formal social institution rather than a casual individual gesture.</div>

      <QuickCheck
        question="What is the potlatch, as practiced by Indigenous peoples of the Pacific Northwest Coast?"
        options={[
          { text: "A structured ceremonial feast where a host distributes gifts to guests to mark significant occasions and affirm social standing", correct: true, explanation: "Correct — the potlatch is a formal social institution, historically banned by government policy and now practiced openly and legally protected." },
          { text: "An informal term for any casual gift exchange between friends", correct: false, explanation: "The potlatch is a specific, structured ceremonial practice with deep cultural and historical significance, not a generic term for casual gift-giving." },
          { text: "A modern retail sales event unrelated to Indigenous tradition", correct: false, explanation: "The potlatch is a longstanding Indigenous ceremonial practice, not a commercial retail concept." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming gifts should always be opened immediately in front of the giver.", fix: "This is a Western norm specifically — in parts of Asia, opening a gift privately, later, is often considered more polite than opening it on the spot." },
          { mistake: "Giving a gift without checking for culturally specific taboos around item, color, or number.", fix: "Certain gifts (like clocks in Chinese culture) or quantities (like the number four) carry unlucky associations in specific cultures that aren't obvious without local context." },
          { mistake: "Assuming gift-giving is always a casual, individual gesture.", fix: "In some cultures, gift-giving is a formal, structured social institution — the potlatch ceremony is a clear example of gift-giving with deep ceremonial and social function." },
        ]}
      />
      <MisconceptionCallout
        myth="Gift-giving customs (what to give, how to wrap it, when to open it) are basically the same everywhere, give or take small variations."
        reality={<p>Gift-giving customs differ meaningfully across cultures in ways that go beyond minor variation — what item is appropriate, how strongly wrapping and presentation matter, whether a gift is opened immediately or later, and even which colors or numbers are considered lucky or unlucky, are all genuinely culture-specific. Treating gift-giving as one universal etiquette with small regional tweaks risks missing taboos (like gifting a clock in Chinese culture) that carry real symbolic weight in their specific context.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before giving a gift in an unfamiliar cultural context, check for specific taboos around the item, color, or quantity you're considering.",
          "Notice whether the culture you're in expects a gift to be opened immediately or set aside — don't assume the Western \"open it now\" default applies everywhere.",
          "If you receive a gift from someone following an unfamiliar custom, follow their lead on timing (open now or later) rather than defaulting to your own norm.",
          "Look up whether the occasion has a specific traditional gift format (like hongbao at Chinese New Year) rather than substituting a generic item.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why is it considered unlucky to give a clock as a gift in Chinese culture?", answer: "The phrase for \"giving a clock\" (song zhong) is a homophone for a phrase associated with attending a funeral in Mandarin, making it a symbolically inauspicious gift regardless of the giver's intent." },
          { question: "What is hongbao?", answer: "Hongbao are red envelopes containing money, traditionally given by elders to children and unmarried younger relatives during Chinese New Year and other celebrations, with the red color symbolizing luck." },
          { question: "Is it rude to open a gift immediately in some cultures?", answer: "Yes — in parts of Asia, opening a gift immediately in front of the giver can be seen as presumptuous or overly eager; setting it aside to open privately later is often considered more polite, unlike the Western norm of opening it right away." },
          { question: "What is a potlatch ceremony?", answer: "A potlatch is a structured ceremonial feast practiced by Indigenous peoples of the Pacific Northwest Coast, in which a host distributes gifts to guests to mark significant occasions and affirm social standing — historically banned by government policy and now legally protected and openly practiced." },
          { question: "Are there numbers to avoid when giving gifts in some cultures?", answer: "Yes — in Chinese culture and several other East Asian cultures, the number four is often avoided because it sounds like the word for \"death,\" and gift amounts or quantities are sometimes adjusted to avoid it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
