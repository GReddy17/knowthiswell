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
  title: "What a CC and BCC Actually Do in Email",
  category: "technology-basics",
  order: 50,
  subtopic: "digital-communication",
  tags: ["what does cc mean in email", "what does bcc mean", "cc vs bcc explained", "digital communication", "email headers", "technology basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "Cc addresses are copied into the message header every recipient sees; Bcc addresses are used to deliver the message but stripped from that header before anyone's copy is generated.",
  summary: "Cc (carbon copy) and Bcc (blind carbon copy) are two ways of adding extra recipients to an email, distinguished by what happens to their addresses at the header level: Cc addresses are written into a header block copied into every recipient's version of the message, while Bcc addresses are used only to route delivery and are stripped out before that shared header block is generated.",
  sources: [
    { label: "IETF RFC 5322 — Internet Message Format", url: "https://www.rfc-editor.org/rfc/rfc5322.html" },
    { label: "IETF RFC 5321 — Simple Mail Transfer Protocol", url: "https://www.rfc-editor.org/rfc/rfc5321.html" },
  ],
  seeAlso: [
    "technology-basics/how-email-actually-gets-delivered",
    "technology-basics/end-to-end-encryption-explained",
    "technology-basics/what-happens-when-you-block-someone",
  ],
  glossary: [
    { term: "Cc (carbon copy)", definition: "A way of adding a recipient to an email whose address is written into a header block that gets copied into every recipient's version of the message, so everyone can see who else received it this way." },
    { term: "Bcc (blind carbon copy)", definition: "A way of adding a recipient to an email whose address is used to route a copy of the message to them, but which is removed before the shared header block is generated, so no recipient's copy reveals that address." },
    { term: "Header (email)", definition: "The block of metadata at the top of an email — including From, To, Cc, and Subject — that is included in the actual message content every recipient's mail app displays." },
    { term: "Envelope (SMTP envelope)", definition: "The separate list of actual delivery addresses a sending mail server uses to route a message during an SMTP relay, distinct from the visible header block — this is where Bcc addresses live." },
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
          "Cc addresses are written into a header block that gets copied into every recipient's version of the message — that's why everyone can see the full Cc list.",
          "Bcc addresses are used only to route a copy of the message to that recipient; they're stripped out before the shared header block is generated, so no other recipient's copy ever shows a Bcc address.",
          "Every recipient in To, Cc, and Bcc receives the identical message content — the difference between the three is entirely about which addresses appear in the visible header each recipient's copy carries.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Imagine photocopying a memo and writing everyone&apos;s name who got a copy right at the top of the page, versus quietly handing an extra copy to someone without adding their name to that same list. Adding someone as <TermLink href="/technology-basics/what-cc-and-bcc-actually-do-in-email">Cc</TermLink> is the first case — their name goes on the visible list every copy carries. Adding someone as <TermLink href="/technology-basics/what-cc-and-bcc-actually-do-in-email">Bcc</TermLink> is the second — they still get the exact same memo, but their name never appears on anyone else&apos;s copy.</div>}
        detailed={<div className="prose-p">This is an <strong>encode &rarr; transmit &rarr; decode</strong> pattern applied to message metadata rather than content. Every email has two separate address lists: the <TermLink href="/technology-basics/what-cc-and-bcc-actually-do-in-email">header</TermLink>, defined by IETF RFC 5322, which includes visible fields like To and Cc and is copied verbatim into the content every recipient&apos;s mail app displays; and the <TermLink href="/technology-basics/what-cc-and-bcc-actually-do-in-email">envelope</TermLink>, the separate list of actual delivery addresses the sending server uses during the SMTP relay (RFC 5321) to decide who actually receives a copy. A Cc address goes into both — it&apos;s a real delivery target and it&apos;s written into the visible header. A Bcc address is added to the envelope, so the mail server does deliver a copy to it, but the sending server removes it from the header block before that shared content is generated, which is why no other recipient&apos;s copy shows it. The edge case worth knowing: because Bcc removal happens at the sending server, a Bcc&apos;d recipient&apos;s own copy of the message typically doesn&apos;t show the other Bcc addresses either (if there are multiple) — each Bcc recipient generally only sees the To and Cc list, same as everyone else, confirming that Bcc is specifically about header visibility, not about that recipient getting some different message.</div>}
      />
      <FootnoteAside>RFC 5322 formally separates the addresses that make up a message&apos;s displayed header fields from the actual delivery mechanism — this header/envelope distinction, not any special encryption or hiding technique, is the entire technical basis for how Bcc keeps an address invisible while still delivering the message.</FootnoteAside>

      <p>
        Once Cc and Bcc are understood as two different fates for an address at the header level — kept in, or stripped out, before the message content is finalized — a lot of confusion about what a Bcc&apos;d person can and can&apos;t see clears up immediately.
      </p>

      <QuickCheck
        question="What is the core technical difference between adding someone as Cc versus Bcc on an email?"
        options={[
          { text: "Bcc recipients receive a shorter version of the message with less content", correct: false, explanation: "Every recipient — To, Cc, and Bcc — receives the identical message content. The difference is only in the visible header, not the body content itself." },
          { text: "Cc addresses are written into the header block copied into every recipient's message; Bcc addresses are used for delivery but removed from that header before it's generated", correct: true, explanation: "Correct. This header-versus-envelope distinction is the entire mechanism — nothing about the message content itself changes between the two." },
          { text: "Cc recipients get the message instantly, while Bcc recipients get it after a delay", correct: false, explanation: "Delivery timing isn't affected by whether an address is Cc or Bcc — both are delivered through the same relay process at the same time." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A routine email with one To and one Cc recipient (baseline case)</h3>
      <div className="prose-p">
        Someone emails a colleague directly and adds their manager as Cc, to keep them informed without expecting a reply from them. The sending mail app builds a header listing both the To address and the Cc address, and that identical header is included in the message content delivered to both recipients. The colleague opens the email and sees the manager&apos;s address listed under Cc; the manager opens their copy and sees the exact same header, including the colleague&apos;s To address. Both recipients see the complete, identical picture of who received the message and in what role — that transparency is the entire point of using Cc rather than Bcc here.
      </div>
      <QuickCheck
        question="In an email with one To recipient and one Cc recipient, what does the To recipient see regarding the Cc recipient?"
        options={[
          { text: "Nothing — the Cc recipient's address is hidden from the To recipient", correct: false, explanation: "Cc addresses are written into the shared header block that every recipient's copy includes — hiding an address from other recipients is specifically what Bcc, not Cc, is for." },
          { text: "The Cc recipient's address, visible in the header of their copy exactly as the Cc recipient sees it", correct: true, explanation: "Correct. Both the To and Cc recipients receive an identical header listing every To and Cc address on the message." },
          { text: "Only the Cc recipient's name, with the actual email address hidden", correct: false, explanation: "Cc doesn't partially mask an address — the full address appears in the header exactly as entered, visible to every recipient." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Adding several people as Bcc (edge case / variation)</h3>
      <div className="prose-p">
        Someone sends an announcement to a large list of people, adding all of them as Bcc specifically so no one sees anyone else&apos;s address. The sending server adds all of those addresses to the delivery envelope so each one receives a copy, but strips every Bcc address from the header block before generating the content each recipient&apos;s mail app displays. Each recipient&apos;s copy shows the same To/Cc header (which may just be the sender&apos;s own address, or empty) with no trace of who else was Bcc&apos;d — including no visibility into the other Bcc&apos;d addresses, since the stripping happens once at the server, uniformly, before any individual copy is finalized.
      </div>
      <QuickCheck
        question="If fifty people are all added as Bcc on the same email, can any one of them see the other forty-nine Bcc addresses in their own copy?"
        options={[
          { text: "Yes, each Bcc recipient can see the full Bcc list except their own address", correct: false, explanation: "Bcc stripping happens uniformly at the sending server before any individual copy is generated — no recipient's copy retains the Bcc list, including other Bcc'd recipients." },
          { text: "No, every Bcc recipient's copy has the Bcc addresses stripped from the header the same way, so none of them see who else was Bcc'd", correct: true, explanation: "Correct. The stripping happens once, at the sending server, before individual copies are finalized — it isn't selectively hidden from some recipients and shown to others." },
          { text: "Only the first person listed as Bcc can see the rest", correct: false, explanation: "There's no ordering effect here — the header stripping is applied uniformly to the message before delivery, regardless of the order addresses were entered." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Choosing Cc vs. Bcc for a work email (real-world / applied case)</h3>
      <p>
        Someone is drafting an email to a client and needs to loop in a coworker for internal visibility, without the client knowing that coworker is included. Understanding the header/envelope mechanism makes the choice direct: adding the coworker as Cc would put their address into the header the client&apos;s copy displays, defeating the goal. Adding the coworker as Bcc delivers them an identical copy of the message while keeping their address out of the header the client sees entirely. The one thing worth remembering: if that coworker were to hit &quot;reply all&quot; from their Bcc&apos;d copy, their reply would go out as a new message including the client, effectively revealing their involvement after the fact — Bcc hides the original header, not any action the Bcc&apos;d recipient later takes on their own.
      </p>
      <QuickCheck
        question="A coworker is added as Bcc on an email to a client, specifically to keep their involvement invisible to the client. What could accidentally reveal it anyway?"
        options={[
          { text: "The coworker replying to all recipients from their Bcc'd copy, which sends a new, visible message that includes the client", correct: true, explanation: "Correct. Bcc only hides the original message's header — it has no effect on a subsequent action like a reply-all, which is a new message with its own header." },
          { text: "The client's mail app automatically decrypting the hidden Bcc field after a few days", correct: false, explanation: "There's no hidden field to decrypt — the Bcc address was never included in the header sent to the client's copy in the first place; nothing is later revealed by the original message itself." },
          { text: "The mail server periodically sending a summary of all Bcc'd recipients to every original recipient", correct: false, explanation: "Mail servers don't send any such summary — the stripping of Bcc addresses from the header is a one-time step during the original message's delivery, with no follow-up disclosure." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="What each recipient's header actually shows"
        type="detail"
        svgSrc="/diagrams/technology-basics-what-cc-and-bcc-actually-do-in-email-visibility-comparison.svg"
        altText="A comparison diagram showing an email with one To recipient, one Cc recipient, and one Bcc recipient, with lines showing that the To and Cc header lists are copied into the message every recipient receives so everyone sees them, while the Bcc header is stripped out by the sending server before the message is relayed, so no recipient's copy shows that address at all."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming Bcc recipients get a different or reduced version of the message.", fix: "Every recipient — To, Cc, and Bcc — receives identical message content; only the visible header list differs between their copies." },
          { mistake: "Adding someone as Cc when the goal was actually to keep their involvement invisible to other recipients.", fix: "Cc addresses are written into the shared header every recipient sees — Bcc is specifically the field designed to hide an address from other recipients' copies." },
          { mistake: "Assuming a Bcc'd recipient can see who else was Bcc'd.", fix: "The sending server strips all Bcc addresses from the header uniformly before generating any individual copy — no Bcc'd recipient sees the rest of the Bcc list either." },
          { mistake: "Forgetting that a Bcc'd recipient's reply-all reveals their involvement.", fix: "Bcc only hides the original message's header — a reply-all from a Bcc'd recipient creates a new message that can expose their address to everyone else." },
        ]}
      />
      <MisconceptionCallout
        myth="Bcc recipients secretly get to see the entire conversation, including who else is Bcc'd, without anyone knowing."
        reality={<p>A Bcc&apos;d recipient receives the identical message content as everyone else, but their own copy&apos;s header is generated the same stripped way as every other recipient&apos;s — showing only the To and Cc addresses, with no visibility into who else was Bcc&apos;d. Bcc doesn&apos;t grant special access to hidden information; it simply keeps that recipient&apos;s own address out of the header block copied into other people&apos;s versions of the message.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Use Cc when you want every recipient to see who else received the message; use Bcc specifically when you need an address kept out of that visible header.",
          "Before Bcc'ing someone into a sensitive thread, remind them that a reply-all from their end will expose their involvement in a new, visible message.",
          "Don't assume Bcc recipients can see each other — the header stripping applies uniformly, so no Bcc'd recipient sees the rest of the Bcc list.",
          "Read How Email Actually Gets Delivered (SMTP, Explained Simply) next to see how the same header/envelope split fits into the full delivery chain.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does Cc actually do in an email?", answer: "Cc (carbon copy) adds a recipient whose address is written into the message's header, a block of metadata that is copied identically into every recipient's version of the email — so everyone can see who was Cc'd." },
          { question: "What does Bcc actually do in an email?", answer: "Bcc (blind carbon copy) adds a recipient who still receives a full, identical copy of the message, but whose address is used only for delivery and stripped from the header before that header is generated, so no other recipient's copy shows it." },
          { question: "Can Bcc recipients see who else is Bcc'd on the same email?", answer: "No. The sending server strips all Bcc addresses from the header the same way for every recipient's copy, including other Bcc'd recipients — none of them see the full Bcc list." },
          { question: "Does a Bcc recipient get a different message than everyone else?", answer: "No. Every recipient — whether listed in To, Cc, or Bcc — receives identical message content. The only difference between their copies is which addresses appear in the visible header." },
          { question: "Can someone find out they were Bcc'd if they reply all?", answer: "Yes, indirectly. Replying all from a Bcc'd copy creates a brand-new message with its own header, which includes the Bcc'd person's address and sends it to the original recipients — effectively revealing their earlier involvement." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
