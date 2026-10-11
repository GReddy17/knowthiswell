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
  SeeAlsoList
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Everyday Conversational Phrases",
  category: "language-vocabulary",
  order: 48,
  subtopic: "vocabulary-for-specific-contexts",
  tags: ["conversational english", "idioms", "small talk", "spoken english", "discourse markers"],
  date: "2026-08-16",
  updated: "2026-10-10",
  youtubeShort: false, youtubeLong: false,
  seoScore: 66, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-08-16",
  excerpt: "Small talk, filler words, and casual phrases like 'you know' or 'long time no see' aren't sloppy English — they follow their own consistent, studied rules of spoken conversation.",
  summary: "Everyday conversational phrases — greetings, small talk, filler words, and set idioms like 'break a leg' — follow their own consistent rules of spoken English, serving real functions like softening requests, managing turn-taking, and signaling politeness, not just casual shortcuts around 'proper' grammar.",
  sources: [
    { label: "Merriam-Webster — 'Long Time No See'", url: "https://www.merriam-webster.com/dictionary/long%20time%20no%20see" },
    { label: "Encyclopaedia Britannica — Idiom", url: "https://www.britannica.com/topic/idiom" },
    { label: "Oxford English Dictionary", url: "https://www.oed.com/" },
  ],
  seeAlso: [
    "language-vocabulary/regional-english-dialects",
    "language-vocabulary/business-and-professional-vocabulary",
    "language-vocabulary/idioms-and-their-meanings",
  ],
  glossary: [
    { term: "Discourse marker", definition: "A word or short phrase ('well,' 'so,' 'you know,' 'I mean') that organizes spoken conversation — signaling a topic shift, a pause to think, or a softened statement — rather than adding literal content." },
    { term: "Phatic expression", definition: "Language used to establish or maintain social contact rather than to exchange literal information — 'How are you?' as a greeting is phatic; the expected reply is a social formality, not a detailed health report." },
    { term: "Calque", definition: "A phrase formed by translating another language's expression piece-by-piece rather than borrowing the foreign word directly — 'long time no see' is widely believed to be a calque, though its exact source language is debated." },
    { term: "Idiom", definition: "A fixed phrase whose overall meaning can't be worked out from its individual words — 'break a leg' has nothing literally to do with legs breaking; it means 'good luck.'" },
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
  {"question": "What does 'break a leg' mean when it's said to a performer?", "difficulty": "easy", "options": [{"text": "Be careful not to fall on stage", "correct": false, "explanation": "That reads the idiom literally; the phrase is a way of wishing good luck."}, {"text": "Good luck", "correct": true, "explanation": "Right. It's an idiom, so the meaning can't be worked out from the words: nobody wants a leg broken."}, {"text": "Hurry up, you're late", "correct": false, "explanation": "Nothing about timing here; it's the theater's way of saying good luck."}]},
  {"question": "What does 'my bad' mean?", "difficulty": "easy", "options": [{"text": "I'm feeling unwell", "correct": false, "explanation": "It isn't about health at all; it's an informal way of owning a mistake."}, {"text": "That's a bad idea", "correct": false, "explanation": "It doesn't judge an idea; it admits the speaker got something wrong."}, {"text": "That was my mistake, sorry", "correct": true, "explanation": "Yes. It's a casual American English idiom, widely understood but usually too informal for professional writing."}]},
  {"question": "What is small talk mainly for?", "difficulty": "easy", "options": [{"text": "Building rapport and comfort between people, not trading important information", "correct": true, "explanation": "Exactly. Linguists class much of it as phatic communication: social glue rather than news."}, {"text": "Passing on detailed, urgent information", "correct": false, "explanation": "That's the opposite of small talk; it's low-stakes chat about things like weather or weekend plans."}, {"text": "Testing someone's vocabulary", "correct": false, "explanation": "It isn't a test; it's a social way of getting comfortable with each other."}]},
  {"question": "Why does 'break a leg' wish something bad-sounding instead of saying 'good luck'?", "difficulty": "medium", "options": [{"text": "Dancers used to break their legs often, so it was a safety warning", "correct": false, "explanation": "The post traces it to a superstition about jinxing, not to a warning about injuries."}, {"text": "A theater superstition held that wishing good luck directly could jinx a performer", "correct": true, "explanation": "Right. Saying the opposite was a way to avoid tempting fate."}, {"text": "It's a mistranslation of a French phrase", "correct": false, "explanation": "The origin the post gives is a theater superstition, not a translation error."}]},
  {"question": "Where does 'no worries' have documented roots before it spread worldwide?", "difficulty": "medium", "options": [{"text": "Shakespeare's plays", "correct": false, "explanation": "The post points to Australian English, not to Shakespeare."}, {"text": "Chinese Pidgin English", "correct": false, "explanation": "That's one proposed route for 'long time no see', a different phrase entirely."}, {"text": "Australian English", "correct": true, "explanation": "Yes. It spread internationally from there through media and travel."}]},
  {"question": "What's the clue that 'long time no see' may be a calque?", "difficulty": "medium", "options": [{"text": "Its grammar doesn't follow normal English sentence rules, which hints it was translated word for word from another language", "correct": true, "explanation": "Correct. A calque copies another language's phrase structure piece by piece, and that's what makes it sound unusual in English."}, {"text": "It's spelled differently in British and American English", "correct": false, "explanation": "Spelling isn't the clue; the giveaway is the phrase's un-English grammar."}, {"text": "It only appears in formal writing", "correct": false, "explanation": "It's actually a casual phrase; the clue is its borrowed-looking structure."}]},
  {"question": "Where is the earliest recorded use of 'long time no see' found, according to the Oxford English Dictionary?", "difficulty": "hard", "options": [{"text": "A Shakespeare play from the 1600s", "correct": false, "explanation": "The earliest recorded use the post cites is from 1900, in Hawaii."}, {"text": "A 1900 Hawaiian newspaper", "correct": true, "explanation": "Right. That fits either proposed route into English through Pacific-contact pidgin speech."}, {"text": "A 1950s Hollywood film script", "correct": false, "explanation": "It's much older than that; the OED's earliest record is a 1900 Hawaiian newspaper."}]},
  {"question": "A customer service email says: 'We'd appreciate it if you could send that over at your earliest convenience.' How should you read it?", "difficulty": "hard", "options": [{"text": "As an optional suggestion you can safely ignore", "correct": false, "explanation": "The softened phrasing is a politeness strategy; the request itself is real."}, {"text": "As a sign they're annoyed with you", "correct": false, "explanation": "Indirect phrasing is the normal professional default, not a hidden complaint."}, {"text": "As a polite but real request, with an implied expectation that you'll respond promptly", "correct": true, "explanation": "Exactly. The indirect wording is softness, not optional-ness."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Everyday phrases like 'How's it going?' are usually phatic — a social greeting ritual, not a literal question expecting a detailed answer — and treating them as literal questions misreads their real function.",
          "Filler words and discourse markers ('well,' 'you know,' 'I mean') aren't sloppy speech — linguists document them as serving real functions like signaling a pause to think, softening a statement, or managing whose turn it is to talk.",
          "Some familiar phrases have genuinely debated or surprising origins — 'long time no see' is widely believed to be a calque (a word-for-word translation) from another language, though linguists differ on exactly which one.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Everyday conversational phrases are the greetings, small talk, filler words, and set expressions people use constantly in casual spoken English — &quot;How&apos;s it going?,&quot; &quot;no worries,&quot; &quot;my bad,&quot; &quot;break a leg.&quot; A lot of these phrases aren&apos;t meant literally. &quot;How are you?&quot; asked in passing usually isn&apos;t a real request for a detailed update on someone&apos;s life — it&apos;s a social ritual where &quot;good, you?&quot; is the expected reply, regardless of how the person is actually doing. Learning to recognize which phrases are literal and which are just social ritual is a genuinely useful, separate skill from learning vocabulary and grammar rules.</div>}
        detailed={<div className="prose-p">Linguists call greetings like &quot;How&apos;s it going?&quot; phatic expressions — language used to establish or maintain social contact rather than to exchange literal information. Casual speech also relies heavily on discourse markers — words like &quot;well,&quot; &quot;so,&quot; &quot;you know,&quot; and &quot;I mean&quot; — which don&apos;t add literal content but do real conversational work: signaling a pause to gather thoughts, softening a blunt statement, or indicating a shift to a new topic. Sociolinguists studying spoken English have documented these as a consistent, rule-governed part of the language, not random noise or a sign of poor speaking skills. Politeness strategies matter too: a direct request (&quot;Give me the file&quot;) and an indirect one (&quot;Would you mind sending over the file?&quot;) carry the same literal request but very different social meaning, and choosing the right level of directness for the context is itself a real, learnable conversational skill.</div>}
      />
      <FootnoteAside>&quot;Long time no see&quot; is widely believed by linguists to be a calque — a phrase translated piece-by-piece from another language rather than a native English construction, which is why its grammar (&quot;long time,&quot; &quot;no see&quot;) doesn&apos;t follow normal English sentence rules. Sources differ on the exact origin: some trace it to Chinese Pidgin English (as a rendering of a Mandarin phrase with the same structure and meaning), others to Native American Pidgin English contact in the American West. The Oxford English Dictionary&apos;s earliest recorded use is from a 1900 Hawaiian newspaper, which fits either route into English through Pacific-contact pidgin speech.</FootnoteAside>
      <p>
      That kind of disputed-but-documented origin is common across everyday phrases — plenty of the sayings used constantly in casual conversation have a real, traceable history, even when the exact details are still debated by linguists.
      </p>

      <QuickCheck
        question="Someone passing a coworker in the hallway says 'Hey, how's it going?' and keeps walking without waiting for a real answer. What's happening?"
        options={[
          { text: "The coworker is being rude by not waiting for a full response to their question.", correct: false, explanation: "This misreads the phrase — 'How's it going?' used this way is a phatic greeting, a social ritual rather than a genuine request for detailed information, so not waiting for a full answer is normal, not rude." },
          { text: "The phrase is functioning as a phatic greeting — a social ritual to acknowledge the other person, not a literal question expecting a detailed answer.", correct: true, explanation: "Correct. This is exactly what linguists mean by a phatic expression: its function is maintaining social contact, not exchanging real information, which is why a quick 'good, you?' is the expected reply." },
          { text: "The coworker made a grammar mistake and should have asked a more specific question instead.", correct: false, explanation: "There's no grammar error here — 'How's it going?' is a completely standard, correctly formed greeting; the point is that its function is social, not literal." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Greetings and small talk as social ritual, not literal exchange (baseline case)</h3>
      <div className="prose-p">
      &quot;How are you?,&quot; &quot;What&apos;s up?,&quot; and &quot;How&apos;s it going?&quot; are all functionally interchangeable greetings in casual American English — the expected response is a brief, positive-leaning formality (&quot;good, you?&quot; or &quot;not much, you?&quot;), not a genuine status report. Giving a real, detailed answer to a passing &quot;how are you&quot; (describing an actual bad day, for instance) is technically answering the literal question but violates the social expectation of the ritual, which is exactly why it can feel awkward to both speakers.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Idioms with real, traceable — sometimes surprising — origins (variation / exception case)</h3>
      <div className="prose-p">
      &quot;Break a leg,&quot; said to performers before going on stage, is a theater superstition thought to have arisen from a belief that wishing someone &quot;good luck&quot; directly would jinx them, so the opposite (something bad-sounding) was wished instead. &quot;No worries,&quot; now used globally, has documented roots in Australian English before spreading internationally through media and travel. &quot;Long time no see,&quot; as covered above, is widely believed to be a calque from another language&apos;s phrase structure rather than a native English construction — its ungrammatical-sounding structure by normal English rules is itself the clue to its borrowed origin.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Politeness and indirectness in real workplace and service requests (real-world / applied case)</h3>
      <div className="prose-p">
      &quot;Hold the door&quot; and &quot;Would you mind holding the door?&quot; request the exact same action, but the second is softened through indirectness, which is the default in many professional or customer-facing contexts precisely because it reduces the sense of being commanded. Recognizing this pattern helps in reverse too — when a customer service email says &quot;we&apos;d appreciate it if you could send that over at your earliest convenience,&quot; it&apos;s a polite but real request with an implied expectation of promptness, not an optional suggestion.
      </div>

      <QuickCheck
        question="Why might 'Would you mind holding the door?' be preferred over the more direct 'Hold the door' in many professional settings?"
        options={[
          { text: "Because the indirect version is grammatically more correct than the direct command.", correct: false, explanation: "Both versions are grammatically correct — 'Hold the door' is a standard imperative sentence. The difference isn't grammar, it's the level of social directness and politeness." },
          { text: "Because the indirect phrasing softens what's still the same literal request, which is generally expected in professional or unfamiliar social contexts to avoid sounding commanding.", correct: true, explanation: "Correct. Both phrases request the identical action — the indirect version just wraps it in a politeness strategy that's the social default in many professional and unfamiliar-to-each-other contexts." },
          { text: "Because 'Hold the door' isn't understood by most English speakers without further context.", correct: false, explanation: "The direct version is perfectly clear and widely understood — the reason to prefer the indirect version isn't clarity, it's social politeness and tone." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating a phatic greeting like 'How's it going?' as a literal question requiring a detailed answer.", fix: "Recognize these as social rituals — a brief, positive-leaning reply is the expected response in most casual contexts, not a full status update." },
          { mistake: "Assuming filler words like 'um,' 'you know,' and 'like' are simply sloppy or careless speech.", fix: "Many discourse markers serve real conversational functions (signaling a pause, softening a statement, managing turn-taking) — they're a documented, rule-governed part of spoken English, not a defect in it." },
          { mistake: "Using a direct command ('Send me the file') by default in unfamiliar or professional contexts where indirect phrasing is socially expected.", fix: "Default to a softer, indirect request ('Would you mind sending over the file?') in unfamiliar or formal settings, and reserve direct phrasing for close, informal relationships." },
        ]}
      />
      <MisconceptionCallout
        myth="Casual conversational filler — 'um,' 'you know,' 'like,' small talk — is just sloppy, lazy speech with no real function, unlike 'proper' formal English."
        reality={<p>Linguists who study spoken conversation treat discourse markers and filler as a legitimate, rule-governed part of language, not a defect. Phrases like &quot;you know&quot; and &quot;I mean&quot; often signal that a speaker is softening a statement, checking the listener is following, or managing a pause to think — functions written, formal English typically handles differently (through punctuation, paragraph breaks, or explicit transitions) rather than not needing at all. Spoken conversational English is a different register from formal written English, with its own consistent conventions, not a careless or incorrect version of it.</p>}
      />

      <QuickCheck
        question="Is it accurate to describe conversational filler words like 'you know' or 'I mean' as simply careless, unstructured speech?"
        options={[
          { text: "Yes — filler words are random noise with no real linguistic function, and eliminating them entirely would improve any speaker's communication.", correct: false, explanation: "This overstates the case — linguists document real functions for many discourse markers, like softening a statement or signaling a pause, so they aren't simply meaningless noise." },
          { text: "No — many discourse markers serve documented conversational functions (softening statements, managing pauses, signaling topic shifts); spoken conversation is a different, equally structured register from formal writing, not a careless version of it.", correct: true, explanation: "Correct. Treating conversational English as 'sloppy' formal English misses that spoken and written registers follow different, both legitimate, sets of conventions." },
          { text: "Yes — but only in American English; British and other English varieties never use conversational filler words.", correct: false, explanation: "Discourse markers and filler words are documented across English varieties worldwide (and across most spoken languages generally), not just American English." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time someone greets you with 'How's it going?' in passing, notice whether it's a real question or a social ritual before deciding how to answer.",
          "Listen for discourse markers ('well,' 'so,' 'you know') in a real conversation and try to identify what function each one is actually serving.",
          "When writing a request in a professional or unfamiliar context, consider whether a softer, indirect phrasing fits the situation better than a direct command.",
          "Read the entry on Regional English Dialects next to see how small talk and politeness conventions can vary by region and community.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does 'long time no see' mean and where does it come from?", answer: "It means 'it's been a while since we last saw each other.' Linguists widely believe it's a calque (a word-for-word translation) from another language's phrase, though sources differ on whether the exact route was Chinese Pidgin English or Native American Pidgin English — its earliest recorded use is from a 1900 Hawaiian newspaper." },
          { question: "Why do people say 'break a leg' instead of 'good luck'?", answer: "It's a theater superstition, based on the belief that wishing someone good luck directly might jinx them, so a seemingly bad-sounding phrase was used instead to avoid tempting fate." },
          { question: "What is small talk and why do people do it?", answer: "Small talk is casual, low-stakes conversation (about weather, weekend plans, etc.) that functions socially — establishing rapport and comfort — rather than exchanging important information. Linguists classify much of it as phatic communication." },
          { question: "What does 'my bad' mean?", answer: "An informal way of saying 'that was my mistake' or 'sorry, that's on me.' It's a casual American English idiom, widely understood but generally too informal for professional or formal writing." },
          { question: "Why is 'How are you?' usually not meant as a literal question?", answer: "In casual, passing contexts it functions as a greeting ritual (a phatic expression) rather than a genuine request for detailed information — the expected reply is a brief, positive-leaning formality, not a full status update." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
