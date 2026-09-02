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
  title: "How to Write an Effective Professional Email (Structure That Actually Works)",
  category: "career-study-skills",
  order: 26,
  subtopic: "workplace-communication",
  tags: ["professional email", "email etiquette", "workplace communication", "business writing", "email structure"],
  date: "2026-09-02",
  updated: "2026-09-02",
  lastReviewed: "2026-09-02",
  excerpt: "An effective professional email states its purpose in the first line and ends with one specific, unambiguous request — everything in between exists only to support those two lines.",
  summary: "An effective professional email works by putting the purpose and the requested response where a skimming reader will actually see them — in the first line and the last — rather than making the reader dig through the middle to figure out why the message was sent or what to do about it.",
  sources: [
    { label: "Society for Human Resource Management (SHRM)", url: "https://www.shrm.org" },
    { label: "National Communication Association (NCA)", url: "https://www.natcom.org" },
    { label: "American Psychological Association (APA)", url: "https://www.apa.org" },
  ],
  seeAlso: [
    "career-study-skills/what-active-listening-actually-looks-like",
    "career-study-skills/how-to-give-feedback-that-actually-lands",
    "career-study-skills/how-to-disagree-with-a-colleague-professionally",
  ],
  glossary: [
    { term: "Bottom-line-up-front (BLUF)", definition: "A writing approach that states the main point or request in the first sentence, before any supporting detail, so the core message lands even if that's the only line the reader gets to." },
    { term: "Call to action", definition: "The specific, unambiguous request that tells the reader exactly what you need them to do, and by when." },
    { term: "Scannable formatting", definition: "The use of short paragraphs, line breaks, and lists that let a reader grasp a message's structure by skimming it, instead of having to read every word in order to find the point." },
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
          "The purpose of the email should be readable from the subject line and first sentence alone, before the reader commits to reading the rest.",
          "Every effective professional email ends with one specific, unambiguous call to action — vague emails get skimmed and forgotten, not acted on.",
          "Length isn't the problem with most weak emails — a buried purpose is. A long email with the ask up front outperforms a short one that makes the reader hunt for it.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Most people write emails the way they&apos;d tell a story: background first, then details, then finally the point at the end. But most readers skim, especially in a busy inbox — so if the reason you&apos;re writing is buried in paragraph three, a lot of readers never get there. An effective professional email flips that order: the purpose comes first, in the subject line and opening sentence, and the message ends with a clear, specific <TermLink href="/career-study-skills/how-to-write-an-effective-professional-email">call to action</TermLink> so the reader knows exactly what happens next.</div>}
        detailed={<div className="prose-p">This is the <strong>request → response</strong> mental model applied to written communication: an email exists to produce a specific response from the reader, and everything in it should be structured to make that response as easy as possible to give. Leading with <TermLink href="/career-study-skills/how-to-write-an-effective-professional-email">bottom-line-up-front (BLUF)</TermLink> phrasing means the reader doesn&apos;t have to reconstruct your intent from context — they know within one sentence why the message exists and what&apos;s being asked. <TermLink href="/career-study-skills/how-to-write-an-effective-professional-email">Scannable formatting</TermLink> (short paragraphs, line breaks before a request, bullets for multiple items) supports the same goal for anyone who reads on a phone or between other tasks. The edge case: not every email is a request. A purely informational update (a status note, an FYI) still needs a clear purpose line, but its &quot;call to action&quot; may simply be &quot;no reply needed&quot; — stating that explicitly is still more effective than leaving the reader to guess whether a response is expected.</div>}
      />
      <FootnoteAside>Workplace communication research consistently finds that most professional email is read on a phone screen in short bursts between other tasks, which is part of why front-loaded structure outperforms narrative structure — a reader who only gets through the first two lines before switching contexts should still walk away with the point.</FootnoteAside>

      <p>
        Once the reader&apos;s actual behavior is visible — skim first, read in full only if the opening earns it — the structure follows: put the purpose where a skim will catch it, and put the request where it won&apos;t get missed.
      </p>

      <QuickCheck
        question="Why does putting the main point in the first sentence of an email tend to work better than building up to it gradually?"
        options={[
          { text: "Because most readers skim rather than reading the entire message in order, so a point buried later in the email risks never being seen", correct: true, explanation: "Correct. Front-loading the purpose accounts for how people actually read email — in short, skimmed bursts, not start-to-finish every time." },
          { text: "Because email software automatically deletes messages longer than a few sentences", correct: false, explanation: "No email system does this — the issue is reader behavior and attention, not a technical limitation." },
          { text: "Because building up to a point gradually is always considered rude in a professional setting", correct: false, explanation: "It's not a matter of rudeness — narrative build-up simply risks losing a skimming reader before the actual point arrives." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Requesting sign-off on a document (baseline case)</h3>
      <p>
        Subject line: &quot;Sign-off needed: Q3 report, by Friday.&quot; Opening line: &quot;Could you review and approve the attached Q3 report by end of day Friday?&quot; The email then adds two short lines of context (what changed since the last draft) and closes with the same specific ask restated: &quot;Let me know if Friday works, or if you need more time.&quot; A reader who only reads the subject line and first sentence already knows exactly what&apos;s being asked and by when.
      </p>
      <QuickCheck
        question="In the sign-off request example, what makes the email effective even for a reader who only skims the first line?"
        options={[
          { text: "The subject line and opening sentence already state the specific request and the deadline, so the core information doesn't depend on reading further", correct: true, explanation: "Correct. Front-loading the ask means a skimming reader still gets the essential information, even if they never reach the supporting detail." },
          { text: "The email avoids stating a deadline so the reader doesn't feel pressured", correct: false, explanation: "The example does the opposite — it states a specific deadline clearly, which is part of what makes the request actionable." },
          { text: "The email is effective because it's written in a formal, elaborate tone", correct: false, explanation: "Tone isn't the deciding factor here — clarity and placement of the actual request are what make it work." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A purely informational update with no action needed (edge case / variation)</h3>
      <div className="prose-p">
        A team member sends a status update: the project is on track, no decisions are needed from the reader, and no response is expected. Instead of leaving that ambiguous, the email states it directly in the opening line: &quot;Quick status update — no action needed, just keeping you in the loop.&quot; Without that line, some recipients will read the whole email hunting for a hidden ask, and others will assume a reply is expected and send one anyway, adding noise for both sides. Naming the absence of a call to action is itself a form of stating one clearly.
      </div>
      <QuickCheck
        question="An email is purely informational and needs no response. What's the most effective way to handle the 'call to action' in this case?"
        options={[
          { text: "Leave it out entirely, since there's nothing to ask for", correct: false, explanation: "Leaving it ambiguous forces the reader to guess whether a reply is expected, which wastes their time either way." },
          { text: "State explicitly that no response or action is needed, so the reader doesn't have to guess", correct: true, explanation: "Correct. Explicitly stating 'no action needed' is still a form of a clear call to action — it removes ambiguity about what the reader should do." },
          { text: "Add an unrelated question at the end just so the email has some kind of request in it", correct: false, explanation: "Manufacturing a request that isn't the actual point of the email adds confusion rather than clarity." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Following up on an unanswered request (real-world / applied case)</h3>
      <p>
        A first email asking for budget approval goes unanswered for a week. Rather than re-sending the full original message, an effective follow-up restates the specific ask in the first line — &quot;Following up on the budget approval request below, still needed by [date]&quot; — and only includes the original details for reference underneath. The recipient, likely managing dozens of unread threads, can act on the follow-up in seconds because it re-states the purpose and deadline without requiring them to reread the whole earlier thread to reconstruct what was being asked.
      </p>
      <QuickCheck
        question="Why does an effective follow-up email restate the specific request in its own first line, rather than only forwarding the original message?"
        options={[
          { text: "Because forwarding an original email is technically not allowed in most workplaces", correct: false, explanation: "There's no such restriction — the reasoning is about reducing the reader's effort, not a rule against forwarding." },
          { text: "Because restating the ask up front lets a busy reader act without having to reread and reconstruct the original request from an older thread", correct: true, explanation: "Correct. A follow-up that leads with the restated ask respects the reader's limited attention far better than one that makes them dig for context first." },
          { text: "Because the original email's content becomes invalid after a week and must be rewritten", correct: false, explanation: "The original content isn't invalid — the point of restating it is clarity and speed for the reader, not a content expiration." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The five-part structure of an effective professional email"
        type="flow"
        svgSrc="/diagrams/career-study-skills-how-to-write-an-effective-professional-email-structure.svg"
        altText="A flow diagram showing five sequential parts of an effective professional email: subject line, opening line stating the purpose, supporting context and details, a specific call to action, and a sign-off, with the opening line and call to action highlighted as carrying the most weight."
      />
      <p>
        Notice that only two of the five parts are highlighted as carrying the most weight — the middle section exists to support those two, not to compete with them for the reader&apos;s attention.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Writing a subject line like 'Question' or 'Update' that gives the reader no reason to open the email first.", fix: "Make the subject line specific enough to act as a one-line summary — what it's about and, if relevant, what's needed." },
          { mistake: "Saving the actual request for the final paragraph after several paragraphs of background.", fix: "State the request in the opening line, then use the rest of the email to support it — not to build up to it." },
          { mistake: "Ending an email without a specific, actionable next step, leaving the reader to guess what response is expected.", fix: "Close with one clear ask — what you need, from whom, and by when — even if the honest answer is 'no response needed.'" },
        ]}
      />
      <MisconceptionCallout
        myth="A longer, more detailed email always looks more thorough and professional than a short one."
        reality={<p>Length isn&apos;t what signals thoroughness — clarity is. A long email that buries its purpose in the middle often gets skimmed, misread, or ignored, while a shorter email that leads with the point and states one clear request tends to get acted on faster. Extra detail is useful when it&apos;s genuinely needed to answer a question the reader will have, not as a default way to seem diligent.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before sending, check that your subject line and first sentence alone would tell the reader why you're writing.",
          "Cut any paragraph that doesn't directly support the request or the context needed to understand it.",
          "End with one specific, unambiguous call to action — what you need, from whom, and by when.",
          "Read What Active Listening Actually Looks Like at Work next to see the listening side of the same communication skill set.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the best structure for a professional email?", answer: "A specific subject line, an opening sentence that states the purpose, brief supporting context, and a closing line with one clear, specific request — commonly summarized as putting the bottom line up front." },
          { question: "How long should a professional email be?", answer: "As long as it needs to be to support the request clearly, and no longer. A buried purpose is a bigger problem than length itself — a longer email with the ask stated up front works better than a short one that hides it." },
          { question: "Should I put my main request at the beginning or end of an email?", answer: "State it at the beginning, in the first sentence if possible, since most readers skim. It's reasonable to restate it again at the end as the closing call to action." },
          { question: "What should I do if no response is needed to my email?", answer: "Say so explicitly, such as 'no action needed, just sharing for visibility.' Leaving that ambiguous causes some readers to search for a hidden request and others to reply unnecessarily." },
          { question: "How do I write a follow-up email without sounding pushy?", answer: "Lead with a restated, specific version of the original request and its deadline rather than re-sending the whole original message — it reads as efficient and clear, not as pressure, especially when it saves the recipient from rereading an old thread." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
