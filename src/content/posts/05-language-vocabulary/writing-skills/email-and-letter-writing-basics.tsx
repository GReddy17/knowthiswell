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
  title: "Email & Letter Writing Basics",
  category: "language-vocabulary",
  order: 15,
  subtopic: "writing-skills",
  tags: ["email writing", "letter writing", "business writing", "correspondence"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The parts every effective email or letter needs — subject line, salutation, clear ask, sign-off — and how to match tone to who's actually reading it.",
  summary: "Effective emails and letters share the same basic anatomy — a clear subject or purpose, an appropriate greeting, a focused body with one main ask, and a matching sign-off — with tone adjusted to the reader and the relationship.",
  sources: [
    { label: "Purdue Online Writing Lab — Basic Business Letters", url: "https://owl.purdue.edu/owl/subject_specific_writing/professional_technical_writing/basic_business_letters/index.html" },
    { label: "Purdue Online Writing Lab — Professional, Technical Writing", url: "https://owl.purdue.edu/owl/subject_specific_writing/professional_technical_writing/index.html" },
    { label: "Merriam-Webster — Grammar", url: "https://www.merriam-webster.com/grammar" },
  ],
  seeAlso: [
    "language-vocabulary/formal-vs-informal-writing",
    "language-vocabulary/paragraph-writing-basics",
    "language-vocabulary/punctuation-rules",
  ],
  glossary: [
    { term: "Salutation", definition: "The greeting that opens a letter or email, such as 'Dear Ms. Chen,' or 'Hi team,'." },
    { term: "Sign-off (valediction)", definition: "The closing phrase before a signature, such as 'Sincerely,' 'Best regards,' or 'Thanks,'." },
    { term: "Subject line", definition: "The one-line summary field of an email that largely determines whether — and how quickly — it gets opened and read." },
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
          "Effective emails and letters share the same basic anatomy: a clear subject or purpose, an appropriate greeting, a focused body, and a matching sign-off.",
          "A specific, informative subject line is doing real work — it determines whether an email gets opened promptly or buried, before the reader sees a single word of the body.",
          "The single biggest improvement most emails need isn't politer wording — it's stating the actual ask clearly, ideally in the first sentence or two.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A good email or letter has four basic parts: a greeting (<TermLink href="/language-vocabulary/email-and-letter-writing-basics">salutation</TermLink>), a clear reason for writing stated early, the details or request itself, and a closing (<TermLink href="/language-vocabulary/email-and-letter-writing-basics">sign-off</TermLink>) with your name. Emails add one more critical piece letters don&apos;t have: a subject line, which is often the only thing a busy reader sees before deciding whether to open the message at all.</div>}
        detailed={<div className="prose-p">The most common structural failure in both emails and letters isn&apos;t grammar — it&apos;s burying the actual point. Readers, especially in professional contexts, tend to skim, so the most important sentence (what you need, or what you&apos;re informing them of) should usually appear in the first one or two sentences, not at the end after several lines of preamble. The <TermLink href="/language-vocabulary/email-and-letter-writing-basics">subject line</TermLink> does similar work for email specifically: a vague subject like &quot;Question&quot; competes for attention with dozens of other messages, while a specific one like &quot;Question about the March 12 invoice&quot; tells the reader exactly what&apos;s needed and lets them triage it correctly. Salutations should scale to formality and relationship — &quot;Dear Ms. Alvarez,&quot; for a first formal contact, &quot;Hi Priya,&quot; for an established colleague, and a neutral, role-based greeting like &quot;Hello Hiring Team,&quot; when you genuinely don&apos;t know a name (a better modern default than the older, more impersonal &quot;Dear Sir or Madam,&quot;). The closing should match: &quot;Sincerely,&quot; or &quot;Best regards,&quot; for formal correspondence, &quot;Thanks,&quot; or &quot;Best,&quot; for everyday professional email.</div>}
      />
      <FootnoteAside>The @ symbol in every email address was, for centuries before email existed, a rarely used accounting and commercial shorthand meaning &quot;at the rate of&quot; (as in &quot;3 units @ $2 each&quot;). Ray Tomlinson chose it in 1971 to separate a username from a host machine name in the first networked email system, specifically because it almost never appeared in personal names — making it a safe, unambiguous separator.</FootnoteAside>
      <p>
      With structure and tone as the two moving parts, most email and letter problems come down to one of the two breaking down — a missing clear ask, or a mismatched tone for the relationship.
      </p>

      <QuickCheck
        question="An email opens with three paragraphs of friendly small talk before finally asking for a deadline extension in the last line. What's the main structural problem?"
        options={[
          { text: "The friendliness is a mistake — professional emails should never include small talk.", correct: false, explanation: "Some warmth is fine, especially with people you know. The real problem here is placement, not the presence of any friendliness at all." },
          { text: "The actual request is buried at the end instead of stated clearly near the beginning.", correct: true, explanation: "Correct. Busy readers skim — the core ask (the deadline extension) should appear early, with supporting context after it, not the reverse." },
          { text: "The email needs a more formal subject line.", correct: false, explanation: "The subject line isn't described as the issue here — the structural problem is that the body buries its main point." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A standard formal business email (baseline case)</h3>
      <div className="prose-p">
      Subject: &quot;Invoice #4471 — Payment Confirmation Needed.&quot; Body: &quot;Dear Mr. Patel, I&apos;m writing to confirm receipt of Invoice #4471, dated March 3rd. Could you please confirm the payment has been processed on your end? Please let me know if any additional documentation is needed. Thank you for your time. Sincerely, Dana Whitfield.&quot; This follows the full formal structure: specific subject, formal salutation with a name, the request in the first line of the body, a brief closing offer of help, and a matching formal sign-off.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A friendly but professional email to a known colleague (variation)</h3>
      <div className="prose-p">
      Subject: &quot;Quick check on the Thursday deck.&quot; Body: &quot;Hi Marcus, Just checking — are you still on track to finish the slides for Thursday&apos;s client call? Let me know if you need anything from me before then. Thanks! Sam.&quot; This is a legitimate, professional structure that&apos;s more relaxed than Example 1: a first-name greeting, contractions, shorter sentences — appropriate because it&apos;s between established colleagues, not a first formal contact. The core anatomy (specific subject, clear ask, matching sign-off) is still all present.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A cold outreach email to someone you don&apos;t know (real-world / applied case)</h3>
      <div className="prose-p">
      Subject: &quot;Freelance editor — availability for your March issue.&quot; Body: &quot;Hello [Editor&apos;s name], My name is Jordan Lee, and I&apos;m a freelance copyeditor with five years&apos; experience in trade publishing. I noticed [Publication] often works with freelance editors for special issues, and I&apos;d love to be considered for upcoming projects. I&apos;ve attached my resume and two writing samples. Happy to answer any questions. Best regards, Jordan Lee.&quot; Cold outreach carries the highest formality stakes of the three examples — no established relationship to fall back on — so the subject line has to earn attention on its own, the greeting uses their actual name (never a generic &quot;Dear Sir/Madam&quot; when it&apos;s avoidable), and the request is specific and low-friction (being considered, not demanding a reply).
      </div>

      <QuickCheck
        question="Which subject line is most likely to get an email opened and handled quickly?"
        options={[
          { text: "\"Hi\"", correct: false, explanation: "A subject this vague gives the reader no information to prioritize the message against everything else in their inbox." },
          { text: "\"Question\"", correct: false, explanation: "Better than nothing, but still too generic to signal urgency or topic — every unanswered email could be described as a \"question.\"" },
          { text: "\"Action needed: sign attached contract by Friday\"", correct: true, explanation: "Correct. It states the required action, what it's about, and the deadline — a reader can triage it instantly without opening the email." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Writing a vague subject line like \"Hi\" or \"Question\" that gives the reader no context.", fix: "State the topic and, if relevant, the required action or deadline directly in the subject line." },
          { mistake: "Burying the actual request several paragraphs into the email.", fix: "Put the core ask in the first sentence or two, then add supporting context and detail afterward." },
          { mistake: "Defaulting to a stiff, impersonal \"Dear Sir or Madam,\" whenever a recipient's name isn't known.", fix: "Take a moment to find the actual name (a company site or LinkedIn often has it), or use a neutral role-based greeting like \"Hello Hiring Team,\" instead." },
        ]}
      />
      <MisconceptionCallout
        myth="When you don't know the recipient's name, 'Dear Sir or Madam,' is still the safest, standard opening."
        reality={<p>This greeting has fallen out of favor in most modern professional writing guidance — it reads as impersonal and dated, and can look like you didn&apos;t bother to find out who you&apos;re actually writing to. Current best practice is to research the actual name where possible, or fall back on a neutral, role-based greeting (&quot;Dear Hiring Manager,&quot; &quot;Hello Support Team,&quot;) that signals effort without guessing gender or requiring a specific name.</p>}
      />

      <QuickCheck
        question="Someone is writing a cold email to a company's editorial team but can't find a specific contact name anywhere. What's the best salutation choice based on current guidance?"
        options={[
          { text: "\"Dear Sir or Madam,\"", correct: false, explanation: "This traditional fallback now reads as impersonal and outdated to most professional readers, even though it isn't grammatically wrong." },
          { text: "\"Hello Editorial Team,\"", correct: true, explanation: "Correct. A neutral, role-based greeting signals genuine effort to address the right group without guessing an individual's name or gender." },
          { text: "Skipping the greeting entirely and starting straight into the request.", correct: false, explanation: "Omitting a greeting entirely typically reads as abrupt or careless in a first cold-outreach message, even in a fairly informal industry." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before hitting send on your next email, check that the subject line alone tells the reader what it's about.",
          "Reread the first two sentences of an email you're drafting and confirm the actual ask is there, not buried further down.",
          "Notice next time a business email you receive uses \"Dear Sir or Madam,\" and consider how it reads compared to a role-based greeting.",
          "Read the related entry on Formal vs Informal Writing to fine-tune tone once the basic anatomy is in place.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do you start a formal email without knowing the person's name?", answer: "Try to find the actual name first (a company website or LinkedIn often has it). If that's not possible, use a neutral, role-based greeting like \"Dear Hiring Manager,\" rather than the more dated \"Dear Sir or Madam,\"." },
          { question: "What should a good email subject line include?", answer: "The topic of the email and, when relevant, the required action or deadline — specific enough that the reader can understand and prioritize the message without opening it." },
          { question: "How do you end a professional email?", answer: "Match the sign-off to the formality of the message: \"Sincerely,\" or \"Best regards,\" for formal correspondence, \"Best,\" or \"Thanks,\" for everyday professional email, followed by your name." },
          { question: "What is the difference between a business letter and a business email?", answer: "They share the same core structure (greeting, clear purpose, body, closing), but email adds a subject line as a critical extra element, and letters typically use more formal conventions throughout, including a full printed address block and a handwritten or formal signature." },
          { question: "How long should a professional email be?", answer: "As short as it can be while still being clear — most effective professional emails fit in a few short paragraphs, with the core request stated in the first one or two sentences rather than after extended preamble." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
