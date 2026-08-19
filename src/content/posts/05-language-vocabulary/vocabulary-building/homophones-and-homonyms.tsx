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
  title: "Homophones & Homonyms",
  category: "language-vocabulary",
  order: 8,
  subtopic: "vocabulary-building",
  tags: ["homophones", "homonyms", "homographs", "spelling", "vocabulary", "there their theyre"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "There/their/they're, its/it's, lead/led — homophones sound alike but spell differently, and that's exactly why spell-check can't catch them.",
  summary: "A homophone is a word that sounds identical to another word but usually has a different spelling and meaning (there/their/they're), while a homonym, strictly defined, shares both spelling and pronunciation with a different-meaning word (bat the animal versus bat the sports equipment) — the two terms get used loosely and interchangeably in everyday speech, but they describe different things.",
  sources: [
    { label: "Merriam-Webster — Homophone", url: "https://www.merriam-webster.com/dictionary/homophone" },
    { label: "Merriam-Webster — Homonym", url: "https://www.merriam-webster.com/dictionary/homonym" },
    { label: "Encyclopaedia Britannica — Homonym", url: "https://www.britannica.com/topic/homonym" },
  ],
  seeAlso: [
    "language-vocabulary/commonly-confused-words",
    "language-vocabulary/synonyms-and-antonyms",
    "language-vocabulary/punctuation-rules",
  ],
  glossary: [
    { term: "Homophone", definition: "A word that sounds identical to another word but usually differs in spelling and always differs in meaning, such as 'there,' 'their,' and 'they're.'" },
    { term: "Homograph", definition: "A word that is spelled identically to another word but differs in meaning, and may or may not be pronounced the same way, such as 'lead' (the metal) and 'lead' (to guide)." },
    { term: "Homonym", definition: "Strictly, a word that shares both spelling and pronunciation with another word of different meaning, such as 'bat' (the animal) and 'bat' (sports equipment); often used loosely as an umbrella term for homophones and homographs generally." },
    { term: "Heteronym", definition: "A homograph that is pronounced differently depending on its meaning, such as 'wind' (moving air) versus 'wind' (to twist)." },
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
          "A homophone sounds identical to another word but usually differs in spelling and always differs in meaning — 'there,' 'their,' and 'they're' are the classic example.",
          "Strictly speaking, a homonym requires both identical spelling and identical pronunciation ('bat' the animal versus 'bat' the equipment); a homograph only requires identical spelling and can be pronounced differently ('lead' the metal versus 'lead,' to guide).",
          "Spell-check tools can't catch homophone errors, because the wrong word is still a correctly spelled word — 'their' isn't a typo of 'there,' it's a different word entirely.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/language-vocabulary/homophones-and-homonyms">homophone</TermLink> is a word that sounds exactly the same as another word but means something different and is usually spelled differently — &quot;there,&quot; &quot;their,&quot; and &quot;they&apos;re&quot; all sound the same out loud but mean completely different things and are spelled three different ways. A <TermLink href="/language-vocabulary/homophones-and-homonyms">homonym</TermLink> is a related idea, and people often use the two words interchangeably in everyday conversation.</div>}
        detailed={<div className="prose-p">Linguists draw a sharper line between three related terms that get blurred in casual use. A homophone shares pronunciation only — spelling can differ (&quot;flour&quot;/&quot;flower&quot;) or occasionally match. A <TermLink href="/language-vocabulary/homophones-and-homonyms">homograph</TermLink> shares spelling only — pronunciation can differ, as in &quot;lead&quot; (the metal, rhymes with &quot;bed&quot;) versus &quot;lead&quot; (to guide, rhymes with &quot;bead&quot;); a homograph that changes pronunciation by meaning like this is specifically called a <TermLink href="/language-vocabulary/homophones-and-homonyms">heteronym</TermLink>. A true homonym, strictly defined, requires both identical spelling and identical pronunciation, with only the meaning differing — &quot;bat&quot; (the flying mammal) and &quot;bat&quot; (the piece of sporting equipment) sound and are spelled exactly the same, with nothing but context to tell them apart. In practice, many dictionaries and most everyday usage treat &quot;homonym&quot; as a loose umbrella term covering both homophones and homographs, which is exactly why the terms feel interchangeable even though the strict definitions aren&apos;t.</div>}
      />
      <FootnoteAside>English has an unusually large stock of homophones partly because it absorbed enormous amounts of vocabulary from French, Latin, and Old Norse on top of its Germanic base, and centuries of pronunciation shifts (including the Great Vowel Shift between roughly 1400 and 1700) caused originally distinct-sounding words to converge on the same pronunciation while their spellings stayed frozen from earlier centuries.</FootnoteAside>
      <p>
      That gap between how English is spelled and how it&apos;s pronounced is exactly why homophones cause so many real-world writing errors — and why the usual tools for catching mistakes don&apos;t catch this particular one.
      </p>

      <QuickCheck
        question="Why can't a standard spell-checker catch a 'their' used where 'there' was meant?"
        options={[
          { text: "Spell-checkers don't recognize the word \"their\" at all.", correct: false, explanation: "\"Their\" is a perfectly valid, correctly spelled English word — that's exactly the problem, not a gap in the spell-checker's dictionary." },
          { text: "Both \"their\" and \"there\" are correctly spelled words, so the checker only flags misspellings, not wrong-word choices.", correct: true, explanation: "Correct. Spell-check flags strings that aren't valid words. Since 'their' is a real, correctly spelled word, using it where 'there' belongs isn't a spelling error the tool can detect — it's a word-choice error that requires reading for meaning." },
          { text: "Spell-checkers only work on homographs, not homophones.", correct: false, explanation: "This isn't the actual distinction — the issue is that homophone substitutions produce a real word, which is invisible to a tool that only checks whether a string matches a known spelling." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: There, their, and they&apos;re (baseline case)</h3>
      <div className="prose-p">
      &quot;There&quot; points to a place or introduces existence (&quot;put it over there,&quot; &quot;there is a problem&quot;). &quot;Their&quot; is a possessive pronoun showing ownership (&quot;their car&quot;). &quot;They&apos;re&quot; is a contraction of &quot;they are&quot; (&quot;they&apos;re coming over&quot;). All three sound identical when spoken aloud, which is the entire definition of a homophone — the confusion only exists in writing, never in speech, since a listener can&apos;t hear a spelling difference that isn&apos;t audible in the first place.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Lead the metal versus lead to guide (variation / heteronym case)</h3>
      <div className="prose-p">
      &quot;Lead&quot; the metal (as in a lead pipe) rhymes with &quot;bed&quot; and is spelled identically to &quot;lead&quot; meaning to guide or direct (as in &quot;lead the way&quot;), which rhymes with &quot;bead&quot; instead. This pair is a homograph — same spelling — and specifically a heteronym, because the pronunciation itself changes depending on which meaning is intended. This is the reverse pattern from &quot;there/their/they&apos;re&quot;: instead of one sound and multiple spellings, it&apos;s one spelling and multiple sounds, which is why homophones and homographs, despite both getting lumped under &quot;homonym&quot; casually, are genuinely different phenomena.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Proofreading for homophones a spell-checker will miss (real-world / applied case)</h3>
      <div className="prose-p">
      &quot;Your welcome to join us&quot; should read &quot;You&apos;re welcome&quot; — &quot;your&quot; (possessive) and &quot;you&apos;re&quot; (contraction of &quot;you are&quot;) are homophones, and both are valid words, so no spell-checker flags the error. The practical fix professional editors use is the same expansion test that works for &quot;its/it&apos;s&quot;: mentally expand &quot;you&apos;re&quot; to &quot;you are&quot; and check whether the sentence still makes sense. &quot;You are welcome to join us&quot; works, confirming &quot;you&apos;re&quot; is correct. This kind of targeted, read-for-meaning proofreading pass — separate from running spell-check — is the only reliable way to catch homophone slips before publishing.
      </div>

      <QuickCheck
        question="'Its' and 'lead' (the metal) are both examples of which category?"
        options={[
          { text: "Homophones only", correct: false, explanation: "\"Its\" has a homophone partner (\"it's\"), but \"lead\" the metal is a homograph/heteronym with \"lead\" meaning to guide — its issue is shared spelling with different pronunciation, not shared pronunciation with different spelling." },
          { text: "They aren't in the same category — \"its/it's\" is a homophone pair, while \"lead/lead\" is a homograph (specifically a heteronym) pair.", correct: true, explanation: "Correct. \"Its\" and \"it's\" sound identical but are spelled differently (homophones). \"Lead\" the metal and \"lead\" meaning to guide are spelled identically but pronounced differently (homograph, and specifically a heteronym since pronunciation shifts with meaning)." },
          { text: "Homonyms only, since both words are commonly confused", correct: false, explanation: "Being commonly confused doesn't make two words homonyms in the strict sense — that requires identical spelling and identical pronunciation, which neither pair meets in full." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using \"there,\" \"their,\" or \"they're\" interchangeably because they sound the same when read aloud.", fix: "Check the grammatical job each word does: \"there\" for place/existence, \"their\" for possession, \"they're\" as a contraction of \"they are.\"" },
          { mistake: "Relying on spell-check to catch homophone errors.", fix: "Run a separate, deliberate proofreading pass focused on meaning — spell-check only flags misspelled strings, and every homophone is, by definition, a correctly spelled word." },
          { mistake: "Calling every same-spelled or same-sounding word pair a \"homonym\" without distinguishing whether the confusion is about spelling or sound.", fix: "Use \"homophone\" when the issue is identical sound with different spelling, and \"homograph\" when the issue is identical spelling with possibly different sound — \"homonym\" strictly needs both to match." },
        ]}
      />
      <MisconceptionCallout
        myth="All words that sound alike are spelled similarly."
        reality={<p>The opposite is usually the point. Homophones frequently have completely unrelated spellings — &quot;night&quot; and &quot;knight,&quot; &quot;flour&quot; and &quot;flower,&quot; &quot;bear&quot; and &quot;bare&quot; — precisely because spelling is what a reader relies on to tell two identical-sounding words apart in writing. If homophones were reliably spelled similarly, they&apos;d be far less confusing in practice; it&apos;s the mismatch between shared sound and unrelated spelling that makes them a genuine source of writing errors rather than an occasional curiosity.</p>}
      />

      <QuickCheck
        question={'"Knight" and "night" sound identical. What does this tell you about homophones as a category?'}
        options={[
          { text: "It confirms that homophones are usually spelled similarly, just with small differences.", correct: false, explanation: "This pair actually disproves that idea — \"knight\" and \"night\" share no letters in the same positions except \"n\" and \"t,\" despite sounding completely identical." },
          { text: "It shows that homophones can have entirely unrelated spellings, which is exactly why they're easy to misuse in writing.", correct: true, explanation: "Correct. Shared pronunciation doesn't imply shared or even similar spelling. That gap between sound and spelling is precisely what makes homophones a real proofreading hazard rather than a minor curiosity." },
          { text: "It means \"knight\" and \"night\" are technically homographs, not homophones.", correct: false, explanation: "They're homophones specifically because they sound alike — homograph status would require identical spelling, which these two words don't have." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you write \"there,\" \"their,\" or \"they're,\" pause and confirm which job the word is doing — place, possession, or \"they are.\"",
          "Notice next time a piece of writing you're proofreading passes spell-check but still has a wrong-word error — that's very likely a homophone slip.",
          "When you hear a word like \"lead\" or \"wind\" read aloud, notice whether the pronunciation itself is doing the work of telling you which meaning is intended.",
          "Next time you're unsure whether two confusing words are true homonyms, check whether both spelling and sound match, or just one — that tells you whether it's really a homograph or a homophone.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between a homophone and a homonym?", answer: "A homophone shares pronunciation with another word but often differs in spelling (there/their/they're). A homonym, strictly defined, requires both identical spelling and identical pronunciation (bat the animal/bat the equipment). In everyday use, \"homonym\" is often used loosely to cover both homophones and homographs." },
          { question: "Is \"there, their, they're\" an example of homophones or homonyms?", answer: "Homophones. They all sound identical but are spelled differently, which fails the strict definition of a homonym (which requires identical spelling as well as identical sound)." },
          { question: "What is a homograph?", answer: "A word spelled identically to another word but differing in meaning, and sometimes in pronunciation too — \"lead\" (the metal) and \"lead\" (to guide) are spelled the same but pronounced differently, which additionally makes this pair a heteronym." },
          { question: "Why doesn't spell-check catch homophone mistakes?", answer: "Because the wrong word is still a correctly spelled, real word. Spell-check only flags strings that don't match any known spelling, so using \"your\" where \"you're\" belongs passes spell-check even though it's the wrong word." },
          { question: "What are some tricky homophone pairs in English?", answer: "Common ones include there/their/they're, its/it's, your/you're, to/too/two, and affect/effect (which are near-homophones for many speakers). All of them require checking meaning and grammatical role, not just pronunciation, to use correctly." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
