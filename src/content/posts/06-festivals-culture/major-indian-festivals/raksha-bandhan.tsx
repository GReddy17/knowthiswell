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
  title: "Raksha Bandhan",
  category: "festivals-culture",
  order: 5,
  subtopic: "major-indian-festivals",
  tags: ["raksha bandhan", "rakhi", "hindu festivals", "sibling traditions"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Raksha Bandhan is a Hindu festival celebrating the bond between siblings, marked by sisters tying a sacred thread (rakhi) on their brothers' wrists.",
  summary: "Raksha Bandhan (\"the bond of protection\") is a Hindu festival where sisters tie a rakhi thread on their brothers' wrists as a symbol of protection and affection, and brothers respond with gifts and a pledge of protection.",
  sources: [
    { label: "Encyclopaedia Britannica — Raksha Bandhan", url: "https://www.britannica.com/topic/Raksha-Bandhan" },
    { label: "BBC Religion — Raksha Bandhan", url: "https://www.bbc.co.uk/religion/religions/hinduism/holydays/rakhi.shtml" },
  ],
  seeAlso: [
    "festivals-culture/diwali-explained",
    "festivals-culture/naming-ceremonies-across-cultures",
    "festivals-culture/gift-giving-customs-across-cultures",
  ],
  glossary: [
    { term: "Rakhi", definition: "The decorative thread or bracelet a sister ties on her brother's wrist during Raksha Bandhan, symbolizing protection and the sibling bond." },
    { term: "Raksha", definition: "Sanskrit for 'protection' — the root of Raksha Bandhan, 'the bond/tie of protection'." },
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
          "Raksha Bandhan literally means \"the bond/tie of protection\" — the core ritual is a sister tying a thread on her brother's wrist, symbolizing mutual care rather than a one-directional favor.",
          "It's not limited to biological siblings — the rakhi thread is widely tied between cousins, close friends, and even symbolically to community protectors, extending the 'sibling bond' concept beyond blood relation.",
          "The festival falls on the full moon of the Hindu month of Shravana, usually in August.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">On Raksha Bandhan, a sister ties a decorative thread called a <TermLink href="/festivals-culture/raksha-bandhan">rakhi</TermLink> around her brother&apos;s wrist. In return, the brother gives a gift and promises to look out for her. It&apos;s celebrated with a short prayer ritual, sweets, and a family gathering.</div>}
        detailed={<div className="prose-p">The ritual itself — tying the rakhi — is performed with a small ceremony: the sister typically applies a tilak (a mark on the forehead), performs an aarti (a small ritual with a lit lamp), ties the thread, and offers sweets, after which the brother gives a gift, historically money or jewelry, and verbally commits to protecting his sister. While the most common framing is protection flowing from brother to sister, the deeper meaning — <TermLink href="/festivals-culture/raksha-bandhan">raksha</TermLink>, or mutual protection and care — is understood by most families as reciprocal rather than one-directional; sisters are understood to look out for their brothers too. The festival has expanded well beyond biological siblings: cousins, close family friends, and in some public and even military traditions, symbolic rakhis are tied to mark protective relationships more broadly.</div>}
      />
      <FootnoteAside>Rakhis are sometimes sent by mail or courier to siblings who can&apos;t be present in person — a modern adaptation that keeps the ritual&apos;s meaning (the tie itself) intact even without a face-to-face ceremony.</FootnoteAside>

      <QuickCheck
        question="Is Raksha Bandhan only observed between biological brothers and sisters?"
        options={[
          { text: "Yes, strictly biological siblings only", correct: false, explanation: "In practice, the rakhi tradition is widely extended to cousins, close friends, and other relationships understood through a sibling-like bond of care and protection." },
          { text: "No — while biological siblings are the most common pairing, the rakhi is also tied between cousins, close friends, and other relationships built on the same idea of mutual protection", correct: true, explanation: "Correct. The underlying concept (a bond of protection) is what matters, not strictly a blood relationship." },
          { text: "It's exclusively a workplace or community tradition today, rarely between actual family members", correct: false, explanation: "The reverse is true — family (biological or close relational) remains the core context; broader symbolic use is a real but secondary extension." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A typical Raksha Bandhan at home (baseline case)</h3>
      <div className="prose-p">A sister prepares a small puja thali (tray) with a rakhi, a diya (lamp), tilak powder, and sweets. She performs the aarti, applies the tilak to her brother&apos;s forehead, ties the rakhi, and feeds him a sweet. He then gives her a gift — traditionally cash or jewelry, though today often anything from clothing to electronics — and the day usually continues with a family meal.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Rakhi between cousins and extended family — a common variation</h3>
      <div className="prose-p">In large extended families, a sister may tie rakhis on several male cousins, not just a biological brother, and the reverse — a woman with no biological brothers tying rakhis on close male cousins or family friends who fill that role — is equally common and not considered a lesser version of the tradition. This flexibility is part of why Raksha Bandhan has remained widely practiced even as nuclear family structures have become more common than large joint families.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Raksha Bandhan sent across distance (real-world / applied case)</h3>
      <div className="prose-p">With siblings increasingly living in different cities or countries, it&apos;s now routine for a sister to mail a rakhi to a brother who can&apos;t visit, sometimes paired with a video call to complete the ritual virtually — the physical thread still gets tied, just not in the same room. Postal and courier services in India see a genuine seasonal surge specifically around Raksha Bandhan for this reason, comparable to how Valentine&apos;s Day or Mother&apos;s Day create predictable demand spikes elsewhere.</div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming Raksha Bandhan is strictly for biological siblings.", fix: "Cousins, close friends, and other relationships understood through the same bond of mutual protection are commonly included — it's about the relationship, not strict bloodline." },
          { mistake: "Treating the ritual as one-directional (only the brother protecting the sister).", fix: "The underlying meaning, raksha, is understood as mutual care and protection, even though the visible ritual (thread-tying, gift-giving) has a traditional direction." },
          { mistake: "Assuming the exact ritual steps (tilak, aarti, sweets) are identical in every household.", fix: "The core act — tying the rakhi — is constant, but the surrounding ritual details vary by family and region." },
        ]}
      />
      <MisconceptionCallout
        myth="Raksha Bandhan is essentially a gift-exchange holiday, similar in structure to a birthday, with the rakhi as a minor accessory to the real point (the gift)."
        reality={<p>The rakhi thread and the act of tying it are the central ritual — the gift from the brother is a response to and completion of that act, not the main event. The thread symbolizes an ongoing commitment (protection, care) that lasts well beyond the day itself, unlike a birthday gift&apos;s more self-contained meaning.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "If you receive or send a rakhi across distance, remember the tradition adapts well to being done remotely — the meaning is in the thread and the gesture, not strict in-person ritual.",
          "If you're new to the tradition, know that gifts from brothers vary widely today — there's no fixed 'correct' gift beyond the gesture itself.",
          "Notice which relationships in your own life someone might describe using rakhi's underlying idea (mutual protection) even without the literal thread.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does Raksha Bandhan mean?", answer: "\"Raksha\" means protection and \"bandhan\" means bond or tie — together, \"the bond of protection\", referring to the thread tied between siblings." },
          { question: "Is Raksha Bandhan only for brothers and sisters?", answer: "Biological siblings are the most common pairing, but the rakhi is also widely tied between cousins, close friends, and other relationships understood through the same idea of mutual protection." },
          { question: "What is a rakhi?", answer: "A decorative thread or bracelet a sister ties on her brother's (or a brother-like relation's) wrist during the festival, symbolizing protection and the sibling bond." },
          { question: "When is Raksha Bandhan celebrated?", answer: "On the full moon day of the Hindu month of Shravana, which usually falls in August on the Gregorian calendar." },
          { question: "What do brothers give in return for a rakhi?", answer: "Traditionally cash or jewelry, though today gifts vary widely — the meaningful part is the accompanying pledge of protection and care, not a specific type of gift." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
