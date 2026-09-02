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
  title: "How to Ask for an Informational Interview (And What to Say)",
  category: "career-study-skills",
  order: 32,
  subtopic: "networking-and-professional-relationships",
  tags: ["informational interview", "career research", "networking outreach", "job search", "career exploration"],
  date: "2026-09-02",
  updated: "2026-09-02",
  lastReviewed: "2026-09-02",
  excerpt: "Asking for an informational interview works best as a specific, low-commitment request focused on learning, not a disguised pitch for a job.",
  summary: "An informational interview is a short, requested conversation with someone in a role or industry you want to learn about — asking for one works best when the request is specific (a named length of time and topic) and low-commitment, and the conversation itself stays focused on learning rather than turning into an indirect pitch for a job.",
  sources: [
    { label: "CareerOneStop (U.S. Department of Labor)", url: "https://www.careeronestop.org" },
    { label: "Society for Human Resource Management (SHRM)", url: "https://www.shrm.org" },
  ],
  seeAlso: [
    "career-study-skills/what-networking-actually-means-beyond-small-talk",
    "career-study-skills/what-a-professional-mentor-actually-does",
    "career-study-skills/why-you-should-still-ask-questions-in-an-interview",
  ],
  glossary: [
    { term: "Informational interview", definition: "A short, requested conversation with someone in a role, company, or industry a person wants to learn more about — held for the purpose of gathering information, not applying for a specific job opening." },
    { term: "Cold outreach", definition: "A message sent to someone with no prior personal connection, as opposed to a warm introduction made through a mutual contact." },
    { term: "Warm introduction", definition: "An outreach made possible by a shared connection who introduces the two parties, which generally gets a faster and more favorable response than reaching out cold." },
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
          "A specific, low-commitment ask — a named length of time and one or two topics — gets answered far more often than an open-ended request to 'pick your brain.'",
          "An informational interview stays focused on learning about the person's role, path, or industry; turning it into a job pitch breaks the implicit agreement and tends to backfire.",
          "A warm introduction through a mutual contact usually gets a faster response than cold outreach, but a well-targeted cold message can still work when it's specific and clearly researched.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">An <TermLink href="/career-study-skills/how-to-ask-for-an-informational-interview">informational interview</TermLink> is a short conversation you request with someone whose role, company, or industry you want to understand better. You&apos;re not applying for anything — you&apos;re asking a specific person for a specific, small amount of their time to learn from their experience. Done well, it gets you real, unfiltered information a job posting or company website never would.</div>}
        detailed={<div className="prose-p">This is a <strong>request → response</strong> mechanism, and the response rate depends heavily on how the request is framed. A vague ask (&quot;can I pick your brain sometime?&quot;) puts the entire burden of defining scope, time, and topic back on the recipient, which makes it easy to defer indefinitely. A specific ask — a named length of time (15-20 minutes), one or two named topics, and an easy way to schedule — removes that friction and gives a clear, low-cost way to say yes. The edge case: reaching out cold to someone with zero shared context works far less reliably than a <TermLink href="/career-study-skills/how-to-ask-for-an-informational-interview">warm introduction</TermLink> through a mutual contact, because a warm intro carries an implicit vouch for legitimacy that <TermLink href="/career-study-skills/how-to-ask-for-an-informational-interview">cold outreach</TermLink> has to earn entirely through the message itself — which is why a well-targeted cold message needs to work harder to show genuine, specific research into the recipient&apos;s actual background, not a generic template.</div>}
      />
      <FootnoteAside>Career centers and workforce development resources commonly cite informational interviews as one of the most effective ways to explore a field before committing to it, precisely because the person you&apos;re talking to has no obligation to sell you on anything — they&apos;re simply describing their own experience.</FootnoteAside>

      <p>
        Once the request is framed as small, specific, and low-commitment, the rest follows naturally: come prepared with real questions, mostly listen, and treat it as a conversation about their path, not an audition for a job.
      </p>

      <QuickCheck
        question="Why does a request naming a specific time length and topic ('20 minutes on how you moved into product management') tend to get a better response than an open-ended one ('can I pick your brain sometime')?"
        options={[
          { text: "Because open-ended requests are against most companies' communication policies", correct: false, explanation: "There's no such policy — the issue is practical, not a rule violation." },
          { text: "Because a specific, bounded ask removes the burden of defining scope and time from the recipient, making it easy to say yes to", correct: true, explanation: "Correct. A vague request leaves all the work of scoping the conversation to the other person, which makes it easy to put off indefinitely." },
          { text: "Because specific requests are always sent to more senior people than vague ones", correct: false, explanation: "The seniority of the recipient isn't the variable here — the difference is entirely in how clearly the request is scoped." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A warm introduction with a specific ask (baseline case)</h3>
      <p>
        A former classmate is now working in a field someone wants to learn about. Instead of a vague message, they write: &quot;I&apos;d love to hear about how you moved into this field — would you have 15-20 minutes sometime in the next couple weeks for a quick call? I&apos;m mainly curious about [specific topic].&quot; Because there&apos;s an existing connection and the ask is short, specific, and easy to schedule, the classmate agrees quickly, and the conversation stays focused and useful for both sides.
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Cold outreach to a stranger (edge case / variation)</h3>
      <div className="prose-p">
        Someone wants to learn about a role at a company where they have no existing contact. They send a cold message directly referencing something specific about the recipient&apos;s actual career path (not a generic template), explaining briefly why they&apos;re reaching out, and asking for the same 15-20 minutes. The response rate to this kind of message is lower than a warm introduction&apos;s, simply because there&apos;s no existing trust to draw on — but a specific, clearly researched message still performs far better than a generic one, because it signals the request took real effort rather than being sent to fifty people at once.
      </div>
      <QuickCheck
        question="Why does a cold, unsolicited request for an informational interview generally get a lower response rate than the same request sent through a warm introduction?"
        options={[
          { text: "Because cold messages are automatically filtered out by most professional platforms before a person ever sees them", correct: false, explanation: "Most cold messages do reach the recipient — the lower response rate is about trust and prioritization, not automatic filtering." },
          { text: "Because a warm introduction carries an implicit vouch for legitimacy from the mutual contact, while a cold message has to establish trust entirely on its own", correct: true, explanation: "Correct. The shared connection in a warm intro does trust-building work that a cold message has to accomplish through its content alone." },
          { text: "Because cold messages are only appropriate for people already employed at the same company", correct: false, explanation: "Cold outreach to strangers at other companies is common and can work well — it's just held to a higher bar of specificity than a warm intro." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Using informational interviews before a career change (real-world / applied case)</h3>
      <p>
        Someone considering a career change requests several short informational interviews with people already in the target field before applying anywhere. Across those conversations, they learn details no job posting mentioned — what the day-to-day actually looks like, what skills matter most in practice, and which parts of the job description are aspirational rather than accurate. Because they stayed focused on learning rather than pitching themselves for a role, at least one contact later mentions an opening on their own, without being asked.
      </p>
      <QuickCheck
        question="Why did a contact later mention a job opening on their own, without being asked, after an informational interview that stayed focused on learning rather than a job pitch?"
        options={[
          { text: "Because informational interviews are contractually required to end with a job referral", correct: false, explanation: "There's no such requirement — an informational interview carries no obligation to provide a referral." },
          { text: "Because staying genuinely focused on learning, rather than pitching, built real rapport and trust, which made the contact want to help once they naturally thought of a fit", correct: true, explanation: "Correct. Respecting the conversation's actual purpose builds the kind of goodwill that leads to opportunities coming up organically, rather than under pressure." },
          { text: "Because mentioning openings is the standard closing script every professional uses at the end of any conversation", correct: false, explanation: "There's no standard script requiring this — it happened because the relationship and conversation genuinely warranted it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The five steps of asking for and running an informational interview"
        type="flow"
        svgSrc="/diagrams/career-study-skills-how-to-ask-for-an-informational-interview-flow.svg"
        altText="A five-step flow diagram for requesting an informational interview: research the person and role, find a specific connection point, send a short low-commitment ask naming a time and topics, hold the conversation by mostly listening and asking prepared questions, then follow up with a thank-you within 48 hours."
      />
      <p>
        Each step exists to lower the effort required from the other person — the more specific and bounded the request, the less deciding they have to do before saying yes.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Sending a vague 'can I pick your brain?' message with no time frame or topic.", fix: "Name a specific length of time (15-20 minutes) and one or two topics so the recipient can say yes without extra thinking." },
          { mistake: "Turning the conversation into an indirect pitch for a job opening.", fix: "Keep the focus on learning about their path and the field — let any job-related opportunities come up naturally, if they do at all." },
          { mistake: "Showing up without prepared questions and asking things easily answered by a quick search.", fix: "Research the basics in advance and bring 2-3 specific, informed questions that couldn't be answered by reading their profile or the company website." },
        ]}
      />
      <MisconceptionCallout
        myth="An informational interview is really just a disguised way to ask a stranger for a job."
        reality={<p>Treating it that way is exactly what makes these requests fail. An informational interview works because the recipient knows there&apos;s no obligation to hire, refer, or advocate for the requester — that low-pressure framing is what makes people willing to give their time at all. Turning it into a job pitch mid-conversation breaks that implicit agreement, and it&apos;s usually obvious when it happens. Real opportunities that follow from these conversations tend to come from the contact offering, on their own, once genuine rapport exists — not from being asked directly.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "List 5-10 people in roles or industries you genuinely want to learn more about.",
          "Draft a short outreach message that names a specific length of time and one or two topics, rather than an open-ended ask.",
          "Prepare 2-3 specific, well-researched questions before the conversation happens.",
          "Read Why Following Up After a Networking Conversation Actually Matters next to make sure the relationship doesn't end when the call does.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is an informational interview?", answer: "A short, requested conversation with someone in a role, company, or industry you want to learn about, held to gather real information rather than to apply for a specific job." },
          { question: "How do I ask someone for an informational interview?", answer: "Send a short, specific message naming a bounded length of time (15-20 minutes is common) and one or two topics you're curious about, rather than an open-ended request to 'pick their brain.'" },
          { question: "What should I ask during an informational interview?", answer: "Focus on their actual path and day-to-day experience — how they got into the role, what the work really looks like, and what skills matter most in practice — rather than generic questions easily answered elsewhere." },
          { question: "Is it okay to ask a stranger for an informational interview?", answer: "Yes, cold outreach to someone you don't know can work, though it generally gets a lower response rate than a warm introduction through a mutual contact — a specific, clearly researched message performs much better than a generic one." },
          { question: "How long should an informational interview be?", answer: "Commonly 15-20 minutes — naming a specific, short length of time in the initial request makes it much easier for the other person to say yes." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
