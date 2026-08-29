import React from 'react';
import { PostFrontmatter } from '@/types/post';
import {
  KeyTakeaways,
  ModeToggle,
  FootnoteAside,
  QuickCheck,
  DiagramBlock,
  MistakeList,
  MisconceptionCallout,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "How Autocorrect Actually Predicts Your Words",
  category: "technology-basics",
  order: 76,
  subtopic: "everyday-tech-curiosities",
  tags: ["autocorrect", "predictive text", "keyboard", "technology basics", "everyday tech"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "Autocorrect compares each keystroke against a dictionary and your own typing history, then learns from every correction you accept or undo.",
  summary: "Autocorrect works as a feedback loop: it compares what you type against a built-in dictionary and a personal word list built from your own typing history, suggests the most likely intended word, and then updates that personal list based on whether you accept or reject the suggestion — which is why it 'fixes' unfamiliar words wrong at first and gets better at them over time.",
  sources: [
    { label: "MDN Web Docs — HTML autocomplete and spellcheck attributes", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/spellcheck" },
    { label: "ACM — Association for Computing Machinery", url: "https://www.acm.org/" },
  ],
  seeAlso: [
    "technology-basics/why-your-phone-gets-hot",
    "technology-basics/why-battery-percentage-isnt-linear",
    "technology-basics/how-your-phone-knows-which-way-is-up",
  ],
  glossary: [
    { term: "Personal dictionary", definition: "A list of words a keyboard has learned to recognize as intentional based on a specific user's own typing history, separate from its built-in default dictionary." },
    { term: "Text replacement", definition: "A keyboard feature that automatically substitutes a typed word or shortcut with a different, predetermined word or phrase, distinct from autocorrect's typo-fixing behavior." },
    { term: "Predictive text", definition: "Word or phrase suggestions a keyboard offers before you finish typing, based on common usage patterns and your own history, which you can tap to insert — different from autocorrect, which changes what you've already typed." },
    { term: "Learned word list", definition: "The growing set of non-default words a keyboard has stopped autocorrecting because the same user has typed and confirmed them multiple times." },
  ],
  author: {
    slug: "james-h-rivers",
    name: "James H. Rivers",
    credentialLine: "Founder, KnowThisWell",
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
          "Autocorrect compares each word you type against a built-in dictionary and a personal word list built from your own past typing, choosing the closest likely intended word.",
          "It's a feedback loop: every suggestion you accept or manually undo updates your personal word list, which is why a word that gets 'fixed' wrong the first several times often stops being corrected after repeated use.",
          "Autocorrect (which changes what you typed) and predictive text (which suggests what to type next) are two different features that often get blamed for each other's mistakes.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of autocorrect as a very attentive proofreader standing over your shoulder who&apos;s only ever read your own messages before. It checks each word you type against a standard dictionary, but it also remembers the specific words you personally use a lot — including ones that aren&apos;t in any dictionary, like names or slang. When you type something that looks like a typo, it guesses the closest word it knows and swaps it in. If you undo that swap a few times, the proofreader eventually stops guessing wrong for that particular word, because it&apos;s learned it&apos;s actually one of yours.</div>}
        detailed={<div className="prose-p">This is a <strong>feedback loop</strong>: sense the keystrokes, compare them against a reference, adjust the output, and use the outcome to improve the next comparison. Each typed word is checked against two references at once — the keyboard&apos;s built-in dictionary and a <TermLink href="/technology-basics/how-autocorrect-predicts-your-words">personal dictionary</TermLink> built from that specific user&apos;s own history. When there&apos;s no exact match, the keyboard estimates the most likely intended word using a mix of how close the typed letters are to a known word (both in spelling and in physical key proximity) and how often that user has typed similar words before. Accepting a suggestion reinforces it; manually correcting a suggestion back — especially several times — nudges the same word toward the <TermLink href="/technology-basics/how-autocorrect-predicts-your-words">learned word list</TermLink>, where it stops being flagged as a likely typo. An edge case worth knowing: this system is fundamentally personal and local to one keyboard app&apos;s history, so switching keyboard apps, or typing heavily in a second language or technical jargon the keyboard hasn&apos;t built history for yet, resets or bypasses that learned context — which is exactly when autocorrect feels like it&apos;s suddenly gotten worse.</div>}
      />
      <FootnoteAside>Autocorrect is a different feature from <TermLink href="/technology-basics/how-autocorrect-predicts-your-words">text replacement</TermLink> shortcuts, where a specific abbreviation is set up in advance to always expand into a longer phrase — text replacement isn&apos;t guessing anything, it&apos;s a fixed substitution rule the user configured directly.</FootnoteAside>
      <p>
        A quick way to see the personal-history part of the loop directly is to compare how the same unfamiliar word is treated the first time versus after it&apos;s been typed and kept several times.
      </p>
      <QuickCheck
        question="A person types an uncommon name repeatedly over several days, correcting autocorrect's wrong guess back to the name each time. What's most likely to happen?"
        options={[
          { text: "Nothing changes — autocorrect only ever uses its fixed built-in dictionary and never adapts to an individual user", correct: false, explanation: "Autocorrect maintains a personal word list built from a specific user's own typing history, separate from its fixed built-in dictionary, and it does adapt over repeated use." },
          { text: "The keyboard gradually adds the name to that user's personal dictionary and stops autocorrecting it", correct: true, explanation: "Correct. Repeatedly typing and confirming (or manually correcting back to) the same non-dictionary word is exactly the feedback signal that gets it added to a user's learned word list." },
          { text: "The keyboard will permanently block that name from ever being typed again", correct: false, explanation: "Learning a word means the keyboard stops flagging it as a likely typo — it doesn't block or restrict it in any way." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Fixing an ordinary typo (baseline case)</h3>
      <div className="prose-p">
        Typing a common word with a slipped key produces a string that isn&apos;t a real word but is close, both in spelling and in key-position, to one very common word already in the built-in dictionary. Autocorrect compares the typed letters against nearby dictionary entries, finds one clearly closer match, and swaps it in automatically — the ordinary case autocorrect handles reliably, because there&apos;s a strong, unambiguous match between what was typed and a well-known word.
      </div>
      <QuickCheck
        question="Why is autocorrect generally reliable at fixing common typos of well-known words?"
        options={[
          { text: "Because there's usually one clearly closest match in the dictionary, both by spelling similarity and by which keys are physically near each other", correct: true, explanation: "Correct. When a typo is close to exactly one common dictionary word, the comparison has little ambiguity, which is exactly the case autocorrect handles most reliably." },
          { text: "Because autocorrect fully understands the meaning of the sentence being typed", correct: false, explanation: "Everyday autocorrect on most keyboards works from dictionary and personal-history comparison, not full sentence-level meaning, which is part of why it can still misfire in less common contexts." },
          { text: "Because the keyboard always asks the user to confirm before making any change", correct: false, explanation: "Autocorrect typically applies its best guess automatically rather than asking first — that's exactly why unwanted corrections happen without a prompt." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A name or slang term the keyboard hasn&apos;t learned yet (edge case / variation)</h3>
      <div className="prose-p">
        Typing a name, a piece of slang, or a technical term that isn&apos;t in the default dictionary and hasn&apos;t been typed enough times yet to be added to the personal dictionary often gets swapped for the closest dictionary word instead — sometimes producing an obviously wrong or embarrassing substitution. This isn&apos;t a special malfunction; it&apos;s the same comparison process working exactly as designed, just without a personal-history entry yet to override the default dictionary&apos;s best guess. Manually correcting it back each time is what eventually builds that personal-history entry.
      </div>
      <QuickCheck
        question="Why does autocorrect tend to guess wrong more often for names and slang than for common words?"
        options={[
          { text: "Because those words usually aren't in the default dictionary and haven't yet built up enough personal typing history to be recognized as intentional", correct: true, explanation: "Correct. Without a dictionary entry or a learned personal-history entry, the keyboard's best available guess is often the closest common word instead, which can be a clearly wrong swap." },
          { text: "Because autocorrect specifically avoids learning slang or names on purpose", correct: false, explanation: "There's no deliberate exclusion — the keyboard is generally willing to learn any repeated word, it just hasn't built that history yet for infrequently typed terms." },
          { text: "Because names and slang always trigger a completely different correction system", correct: false, explanation: "The same comparison-and-learning mechanism applies to every word — names and slang aren't handled by a separate system, they simply lack an existing dictionary or history match yet." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The same learned model behaving differently in casual texts vs. formal email (real-world / applied case)</h3>
      <p>
        A keyboard that&apos;s built up a personal history mostly from quick, casual texting — full of contractions, abbreviations, and informal phrasing — can produce corrections that feel out of place when the same person switches to writing a formal email, because the learned word list and its weighting still reflect casual-context habits rather than the current, more formal one. This isn&apos;t the keyboard &quot;forgetting&quot; anything; it&apos;s applying the same personal model across a context it wasn&apos;t specifically shaped around, which is a useful reminder that autocorrect learns from patterns in typing, not from an understanding of what kind of message is currently being written.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The autocorrect feedback loop"
        type="flow"
        svgSrc="/diagrams/technology-basics-how-autocorrect-predicts-your-words-feedback-loop.svg"
        altText="A circular feedback loop diagram: you type a keystroke, the keyboard compares it against a dictionary and your personal word history, it suggests the most likely correction, you accept or reject that suggestion, and your choice updates the personal model used for the next keystroke."
      />
      <p>
        Every accepted or rejected suggestion feeds back into the same loop, which is exactly why autocorrect on a well-used personal keyboard tends to fit its owner&apos;s own vocabulary better over time.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Expecting autocorrect to learn a word permanently after typing it correctly just once.", fix: "Overriding the default dictionary usually takes several confirmed uses of the same word before it's reliably added to the personal word list." },
          { mistake: "Getting frustrated at repeat wrong corrections without using the keyboard's 'add to dictionary' or 'learn word' option where available.", fix: "Manually adding a frequently used non-dictionary word speeds up the learning process instead of waiting for repetition alone to build it." },
          { mistake: "Blaming autocorrect for a wrong word that was actually a tapped predictive-text suggestion.", fix: "Autocorrect changes what's already been typed; predictive text offers taps for what to type next — they're separate features that are easy to mix up after the fact." },
          { mistake: "Assuming autocorrect behaves identically after switching to a new keyboard app.", fix: "Different keyboard apps generally maintain their own separate personal dictionaries, so switching apps can mean starting that learned history over." },
        ]}
      />
      <MisconceptionCallout
        myth="Autocorrect fully understands what you're trying to say."
        reality={<p>Everyday autocorrect primarily compares typed letters against a built-in dictionary and a personal word list built from your own typing history — it&apos;s not reading or understanding the meaning of your sentence. That&apos;s exactly why it can confidently swap in a wrong but common word: it&apos;s picking the closest known match, not the one that makes the most sense in context.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Manually add frequently used names or technical terms to your keyboard's personal dictionary to speed up the learning process.",
          "Review autocorrected text before sending, especially names, addresses, or technical terms.",
          "Remember that switching keyboard apps also switches (or resets) your learned personal word list.",
          "Use a single tap to undo one unwanted autocorrection rather than assuming disabling autocorrect entirely is the only fix.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why does autocorrect keep changing my words wrong?", answer: "It's comparing what you type against a dictionary and your personal typing history, and picking its closest guess — for unfamiliar words, names, or slang it hasn't learned yet, that guess can be wrong." },
          { question: "How does autocorrect learn new words?", answer: "It builds a personal word list from a specific user's own typing history — repeatedly typing and confirming (or correcting back to) the same non-dictionary word is what gets it recognized as intentional going forward." },
          { question: "Why does autocorrect not work for names?", answer: "Names usually aren't in the default dictionary, and unless they've been typed and kept enough times to enter a user's personal word list, the keyboard's best available guess is often a common dictionary word instead." },
          { question: "Is autocorrect the same as predictive text?", answer: "No. Autocorrect changes a word you've already typed to fix a likely typo; predictive text suggests words or phrases to type next that you can tap to insert. They're separate features that often get confused." },
          { question: "Why does autocorrect get worse when I switch phones or keyboard apps?", answer: "Personal word lists are generally tied to a specific keyboard app's own stored history, so switching apps or devices can mean starting that learned vocabulary over from scratch." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
