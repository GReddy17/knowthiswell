import React from 'react';
import { PostFrontmatter, QuizBankItem } from '@/types/post';
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
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "What Professional Email Etiquette Actually Requires",
  category: "life-skills-etiquette",
  order: 4,
  subtopic: "everyday-communication",
  tags: ["email etiquette", "professional communication", "workplace etiquette", "writing", "reply all"],
  date: "2026-09-25",
  updated: "2026-09-25",
  lastReviewed: "2026-09-25",
  excerpt: "Professional email etiquette is less about formal phrases and more about the reader's time: a clear subject, the point up front, only the context needed, an obvious next step, and a check of who's on the thread before you hit send.",
  summary: "Professional email etiquette comes down to respecting the reader's time and attention, per writing guidance from Purdue University's Online Writing Lab and the U.S. federal government's plain language guidelines: a specific subject line, the request or main point in the opening lines rather than at the end, only the background the reader needs to act, a clear next step with any deadline, a tone suited to a message that may be forwarded, and a final check of recipients, names, and attachments. Formality level varies by workplace and relationship, but these structural habits hold across nearly all of them, and most real email mistakes (reply-all to a large list, a buried request, a message sent to the wrong person) are structural, not about greetings or sign-offs.",
  sources: [
    { label: "Purdue Online Writing Lab — Email Etiquette", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/email_etiquette.html" },
    { label: "U.S. General Services Administration — Federal Plain Language Guidelines", url: "https://www.plainlanguage.gov/guidelines/" },
    { label: "Purdue Online Writing Lab — Writing Professional Emails and Memos (Subject lines and body)", url: "https://owl.purdue.edu/owl/subject_specific_writing/professional_technical_writing/memos/index.html" },
  ],
  seeAlso: [
    "career-study-skills/how-to-write-an-effective-professional-email",
    "technology-basics/what-cc-and-bcc-actually-do-in-email",
    "life-skills-etiquette/what-active-listening-actually-looks-like-in-practice",
    "life-skills-etiquette/how-to-actually-set-boundaries-without-guilt",
    "language-vocabulary/email-and-letter-writing-basics",
  ],
  glossary: [
    { term: "Bottom line up front (BLUF)", definition: "Putting the main point or request at the very start of a message, so the reader knows what's needed before reading the details." },
    { term: "Reply all", definition: "Sending your reply to the sender and everyone on the To and CC lines. Useful when everyone needs the answer; noisy when only the sender does." },
    { term: "CC (carbon copy)", definition: "Recipients who are kept informed but aren't expected to act. Everyone can see who's been CC'd." },
    { term: "BCC (blind carbon copy)", definition: "Recipients hidden from everyone else on the email. Useful for protecting addresses on a large mailing; risky if used to secretly include someone." },
    { term: "Call to action", definition: "The specific thing you want the reader to do after reading, ideally with who does it and by when." },
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

export const quiz: QuizBankItem[] = [
  {"question": "Where should the main request go in a professional email?", "difficulty": "easy", "options": [{"text": "In the first line or two", "correct": true, "explanation": "Readers often skim; the ask shouldn't be buried at the end."}, {"text": "In the last paragraph, after all the background", "correct": false, "explanation": "That's where it most often gets missed."}, {"text": "Only in the subject line", "correct": false, "explanation": "The subject helps, but the body should state it clearly too."}]},
  {"question": "Which subject line is most useful?", "difficulty": "easy", "options": [{"text": "\"Approval needed by Thu: Q3 travel budget\"", "correct": true, "explanation": "It says what, what's needed, and when."}, {"text": "\"Quick question\"", "correct": false, "explanation": "Too vague to prioritize or find later."}, {"text": "\"Hi\"", "correct": false, "explanation": "It tells the reader nothing."}]},
  {"question": "When is 'Reply all' the right choice?", "difficulty": "easy", "options": [{"text": "When everyone on the thread needs your answer", "correct": true, "explanation": "Otherwise reply only to the people who need it."}, {"text": "Always, to be transparent", "correct": false, "explanation": "It floods inboxes with messages most people don't need."}, {"text": "Never", "correct": false, "explanation": "It's useful when the whole group needs the information."}]},
  {"question": "Why does Purdue OWL advise writing emails as if they could be forwarded?", "difficulty": "medium", "options": [{"text": "Emails are easily shared and are a lasting record", "correct": true, "explanation": "Assume anyone might eventually read it."}, {"text": "Because forwarding is required by law", "correct": false, "explanation": "It's practical advice, not a legal rule."}, {"text": "So they're longer and more detailed", "correct": false, "explanation": "Length isn't the point; appropriate content is."}]},
  {"question": "What does CC signal to the people on it?", "difficulty": "medium", "options": [{"text": "They're being kept informed and usually aren't expected to act", "correct": true, "explanation": "Put people who must act on the To line."}, {"text": "They must reply first", "correct": false, "explanation": "That's usually the To recipients."}, {"text": "They're hidden from others", "correct": false, "explanation": "That's BCC."}]},
  {"question": "You're angry about a colleague's email. What's the best etiquette move?", "difficulty": "medium", "options": [{"text": "Draft it, wait, reread it, and consider talking in person or by call", "correct": true, "explanation": "Tone is easy to misread in writing, and emails last."}, {"text": "Reply immediately while the details are fresh", "correct": false, "explanation": "Fast angry replies are a classic regret."}, {"text": "Reply all so everyone sees the problem", "correct": false, "explanation": "Public escalation usually backfires."}]},
  {"question": "What should a good closing include when you need something?", "difficulty": "easy", "options": [{"text": "A specific next step and deadline", "correct": true, "explanation": "\"Could you confirm by Friday noon?\" beats \"Let me know.\""}, {"text": "A long list of apologies", "correct": false, "explanation": "Over-apologizing weakens the message."}, {"text": "Nothing, the reader will figure it out", "correct": false, "explanation": "Unclear asks lead to slow or no replies."}]},
  {"question": "Which is the most common real source of email mistakes at work?", "difficulty": "hard", "options": [{"text": "Structure and recipients, like buried requests and the wrong people on the thread", "correct": true, "explanation": "Greetings rarely cause problems; unclear asks and misaddressed messages do."}, {"text": "Using 'Hi' instead of 'Dear'", "correct": false, "explanation": "Most workplaces accept either."}, {"text": "Using a sign-off like 'Best'", "correct": false, "explanation": "Sign-offs matter much less than clarity."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Email etiquette is mostly about the reader's time: a clear subject line, the point or request at the top, and only the context they need.",
          "End with an obvious next step (who does what, by when) instead of a vague 'let me know.'",
          "Most real email mistakes are about recipients and structure, not greetings. Check the To, CC, names, and attachments before you send.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">People get a lot of email and read most of it quickly, often on a phone. A polite email isn&apos;t the one with the fanciest greeting. It&apos;s the one that&apos;s easy to act on. Say what the email is about in the subject. Put what you need in the first couple of lines. Add just enough background for the reader to do it. Finish with exactly what happens next. Then, before sending, look at who&apos;s on it, check you spelled their name right, and make sure the attachment is actually attached. That covers most of what &quot;professional&quot; means in practice.</div>}
        detailed={<div className="prose-p">Purdue OWL&apos;s email etiquette guidance centers on the reader: use a meaningful subject line, keep messages concise, match the level of formality to the relationship, and remember that email is neither private nor temporary, since it can be forwarded and archived. The federal plain language guidelines add the structural principle that most matters for workplace email: put the most important information first and write for how the reader will use the message. Applied to email, that means a subject line that previews the content and any deadline; an opening that states the request or conclusion (sometimes called &quot;bottom line up front&quot;); a body limited to what the reader needs to decide or act, using short paragraphs or bullets for multiple items; and a close with a concrete call to action. Recipient choice is part of etiquette too: the To line is for people expected to act, CC for people kept informed, and BCC mainly for protecting addresses on large mailings, as explained in <TermLink href="/technology-basics/what-cc-and-bcc-actually-do-in-email">what CC and BCC actually do</TermLink>. Tone deserves care because written messages lose vocal cues, so neutral phrasing reads as colder than intended and sarcasm rarely survives.</div>}
      />
      <FootnoteAside>Formality varies a lot by field and country. A law firm and a startup will differ on greetings, and some cultures expect more relationship-building before the request. The structure (clear subject, early ask, clear next step) travels well almost everywhere even when the tone changes.</FootnoteAside>

      <p>For step-by-step drafting help, see <TermLink href="/career-study-skills/how-to-write-an-effective-professional-email">how to write an effective professional email</TermLink>. Many of the same habits apply to spoken conversations at work, especially <TermLink href="/life-skills-etiquette/what-active-listening-actually-looks-like-in-practice">active listening</TermLink>: reading the other person&apos;s message carefully before responding to it.</p>

      <QuickCheck
        question="A colleague's email has three paragraphs of background and the question 'Can you approve this by Friday?' at the very end. What's the most helpful fix?"
        options={[
          { text: "Move the question to the first line and trim the background to what's needed to decide", correct: true, explanation: "Correct. Leading with the ask means a skimming reader still sees it." },
          { text: "Add a more formal greeting", correct: false, explanation: "The greeting isn't the problem. The buried request is." },
          { text: "Add more background so the reader fully understands", correct: false, explanation: "More background buries the ask further." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Rewriting a buried request (baseline case)</h3>
      <div className="prose-p">Before: subject &quot;Question,&quot; then a paragraph about last quarter&apos;s event, a paragraph about vendor quotes, and finally &quot;so anyway, would you be OK with the second option?&quot; After: subject &quot;Decision needed by Wed: event vendor (Option B, $4,200).&quot; First line: &quot;Could you approve Option B for the October event by Wednesday?&quot; Then two bullets comparing A and B, and a closing line: &quot;If I don&apos;t hear back by Wednesday noon, I&apos;ll call you so we don&apos;t lose the date.&quot; Same information, much less work for the reader.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The reply-all trap (recipient etiquette)</h3>
      <div className="prose-p">HR emails 300 people about a holiday schedule. One person hits Reply All to say &quot;Thanks!&quot;, three more reply all asking to be removed, and the thread becomes the day&apos;s distraction. The etiquette rule is simple: reply only to the people who need your response. A thank-you goes to the sender alone, and a question about the content usually does too.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Emailing someone senior you&apos;ve never met (tone and formality)</h3>
      <div className="prose-p">You want 15 minutes of a department head&apos;s time. A good message opens with who you are in one line, states the ask immediately (&quot;Could I get 15 minutes in the next two weeks to ask about the data team&apos;s hiring?&quot;), gives one sentence on why them, offers two or three time windows, and ends politely. It&apos;s a bit more formal than an email to a peer, but not longer. Senior people get the most email of anyone, so brevity is the respectful choice.</div>

      <QuickCheck
        question="In Example 2, what should someone who just wants to say thanks to HR do?"
        options={[
          { text: "Reply only to the sender, or not reply at all", correct: true, explanation: "Correct. The other 299 people don't need the thank-you." },
          { text: "Reply all so HR sees it was appreciated publicly", correct: false, explanation: "That's what turns a broadcast into a flood." },
          { text: "Forward the email to their team with 'thanks'", correct: false, explanation: "That creates more noise without reaching HR." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="A five-step check before any professional email"
        type="flow"
        svgSrc="/diagrams/life-skills-etiquette-what-professional-email-etiquette-actually-requires-flow.svg"
        altText="A flow diagram of a professional email: a subject line that says what it's about and any deadline, the ask or main point in the first two lines, only the context the reader needs, a clear next step with who does what by when, and a final check of recipients, tone, names and attachments."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Ending with 'Let me know your thoughts' when you actually need a decision.", fix: "Say exactly what you need and when: 'Could you confirm by 3pm Thursday?'" },
          { mistake: "Adding the recipient's address first and writing after.", fix: "Write and reread the email, then add recipients last. It prevents sending a half-finished draft." },
          { mistake: "Sending a heated reply in the moment.", fix: "Save it as a draft, reread it later, and consider a call instead. Tone is easy to misread and emails last." },
        ]}
      />
      <MisconceptionCallout
        myth="Professional email etiquette is mainly about formal greetings, sign-offs, and polished phrases."
        reality={<p>Greetings and sign-offs matter a little, and they vary by workplace. What consistently separates professional email is structure: a subject line that says what the email is about, the request up front, a clear next step, and the right people on the thread. Purdue OWL and the federal plain language guidelines both center the reader&apos;s needs, not ceremony. A short, clear &quot;Hi Sam&quot; email beats an elaborate &quot;Dear Mr. Smith&quot; one that hides its question.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Reread the last three work emails you sent: is the request in the first two lines?",
          "Rewrite vague subject lines so they include the topic and any deadline.",
          "Before sending, check recipients (To vs. CC), names, and attachments every time.",
          "Replace 'let me know' with a specific next step and date.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are the basic rules of professional email etiquette?", answer: "Use a specific subject line, state your point or request early, keep it concise, end with a clear next step, keep the tone suitable for forwarding, and check recipients and attachments before sending." },
          { question: "How should you start a professional email?", answer: "A short greeting suited to the relationship (\"Hi Priya,\" or \"Dear Dr. Lee,\") followed right away by your main point or request." },
          { question: "Is it rude to send a short email?", answer: "Usually not. A short, clear email respects the reader's time. Just make sure it's courteous and includes the context they need." },
          { question: "How quickly should you reply to work emails?", answer: "Norms vary by workplace, but within one business day is a common expectation. If you need longer, a quick note saying when you'll answer is good etiquette." },
          { question: "When should you use CC instead of To?", answer: "Put people who need to act on the To line and people who just need to stay informed on CC." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
