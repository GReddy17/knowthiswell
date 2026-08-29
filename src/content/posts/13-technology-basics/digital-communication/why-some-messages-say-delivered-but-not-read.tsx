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
  title: "Why Some Messages Say \"Delivered\" But Not \"Read\"",
  category: "technology-basics",
  order: 49,
  subtopic: "digital-communication",
  tags: ["delivered but not read", "why message not read", "message status explained", "digital communication", "read receipt", "technology basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "\"Delivered\" only confirms a message reached the recipient's device — it says nothing about whether that device has shown it on screen yet, which is what triggers a read status.",
  summary: "A message shows \"delivered\" the moment it successfully arrives on the recipient's device, and only advances to \"read\" once a separate, later event happens — the message actually being rendered on that device's screen — so a stall between the two states usually points to something on the recipient's side, not a delivery failure.",
  sources: [
    { label: "XMPP Standards Foundation — XEP-0184: Message Delivery Receipts", url: "https://xmpp.org/extensions/xep-0184.html" },
    { label: "Apple Developer Documentation — Setting Up a Remote Notification Server", url: "https://developer.apple.com/documentation/usernotifications/setting-up-a-remote-notification-server" },
    { label: "MDN Web Docs — Page Visibility API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API" },
  ],
  seeAlso: [
    "technology-basics/read-receipts-and-typing-indicators-explained",
    "technology-basics/how-push-notifications-work",
    "technology-basics/what-happens-when-you-block-someone",
  ],
  glossary: [
    { term: "Delivered status", definition: "A status confirming that a message successfully transferred to and was received by the recipient's device — an event separate from, and earlier than, that device displaying the message on screen." },
    { term: "Read status", definition: "A status confirming that the message was rendered on the recipient's screen, triggered by a separate, later automatic signal than the one that produces the delivered status." },
    { term: "Muted device", definition: "A device where notifications for a specific conversation are suppressed, which can leave a message sitting undelivered-to-screen (and so unread) for far longer than usual, without indicating any problem." },
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
          "\"Delivered\" and \"read\" are two separate status signals, triggered by two separate events — arriving on a device, and later being rendered on that device's screen — not one continuous process.",
          "A message can sit at \"delivered\" indefinitely for entirely mundane reasons: read receipts turned off, the conversation not yet opened, a muted or secondary device, or a notification preview that doesn't count as a full read event.",
          "A stall between delivered and read is not itself evidence of anything about the recipient's intentions — it reflects which of several possible everyday conditions happens to apply.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of a package tracker that separately reports &quot;left at your door&quot; and &quot;door camera saw you pick it up.&quot; Those are two different sensors reporting two different moments — the package can sit on the porch for hours between the first update and the second, and nothing is wrong with the delivery. A message&apos;s <TermLink href="/technology-basics/why-some-messages-say-delivered-but-not-read">delivered status</TermLink> is the &quot;left at your door&quot; event: it arrived safely on the recipient&apos;s device. The <TermLink href="/technology-basics/why-some-messages-say-delivered-but-not-read">read status</TermLink> is the separate, later &quot;someone actually looked&quot; event, and there can be a long, completely ordinary gap between the two.</div>}
        detailed={<div className="prose-p">This is <strong>state &amp; synchronization</strong>: a message moves through a defined sequence of states, and each transition requires its own distinct triggering event, not the passage of time. &quot;Delivered&quot; fires when the recipient&apos;s device acknowledges successful receipt of the message data over the network — a device-to-server confirmation, similar in spirit to a delivery receipt in open messaging standards. &quot;Read&quot; requires a second, independent event: the message actually being rendered on that device&apos;s screen, in whatever way that specific app defines as a qualifying view. Because these are separate triggers, several ordinary conditions can hold a message at &quot;delivered&quot; indefinitely: the recipient has read receipts disabled entirely (which usually suppresses the read signal without affecting delivery), the message arrived on a <TermLink href="/technology-basics/why-some-messages-say-delivered-but-not-read">muted device</TermLink> where the person hasn&apos;t opened the conversation, or the recipient saw only a notification preview that the app doesn&apos;t count as a full read event. The edge case worth knowing: on an account with multiple devices, delivery can succeed to one device (say, a phone) while the read event doesn&apos;t occur until the person opens the conversation on whichever device they check next, which may not be the one that received it first.</div>}
      />
      <FootnoteAside>Delivery and read receipts are formalized as genuinely separate signal types in open standards like the XMPP Standards Foundation&apos;s XEP-0184 — the specification itself defines them as two distinct events an implementation may report independently, which is exactly why a stall between them is a normal, expected possibility rather than an error state.</FootnoteAside>

      <p>
        Once delivered and read are understood as two independently triggered events rather than two points on one continuous progress bar, a message stuck at &quot;delivered&quot; stops looking suspicious and starts looking like exactly what it usually is — one of several unremarkable, everyday conditions on the recipient&apos;s end.
      </p>

      <QuickCheck
        question="A message has shown 'delivered' for several hours with no 'read' status. What does this most directly tell you?"
        options={[
          { text: "The recipient has definitely seen the message and is deliberately ignoring it", correct: false, explanation: "A stall at delivered doesn't reveal anything about whether the recipient has actually seen the message — it only confirms the message hasn't yet triggered the separate 'read' event." },
          { text: "The message successfully reached the recipient's device, but the separate event that triggers a read status hasn't happened yet, for any of several possible ordinary reasons", correct: true, explanation: "Correct. Delivered and read are triggered by two different events, and there are multiple everyday explanations for a gap between them." },
          { text: "The message failed to send properly and needs to be resent", correct: false, explanation: "'Delivered' specifically confirms the message did successfully reach the device — this status wouldn't appear at all if the send had failed." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A message that reaches read status normally (baseline case)</h3>
      <div className="prose-p">
        Someone sends a message, and their phone shows &quot;delivered&quot; within a second, confirming the recipient&apos;s device received it. A minute later, the recipient opens the conversation, the message renders on their screen, their device automatically sends the read signal back, and the status updates to &quot;read.&quot; Two separate, sequential events — successful data transfer, then on-screen rendering — happened close together in this case, which is why the status change from delivered to read felt almost instantaneous. That closeness in time is circumstantial, not guaranteed by the protocol itself.
      </div>
      <QuickCheck
        question="In a normal case where a message quickly shows 'read' after 'delivered,' what actually happened?"
        options={[
          { text: "Two separate events happened to occur close together in time: successful delivery, then the recipient opening the conversation shortly after", correct: true, explanation: "Correct. The two statuses are always separate events — in this case they simply happened close together, rather than the read status being some automatic continuation of delivery." },
          { text: "The read status is just delivered status renamed after a short timer expires", correct: false, explanation: "There's no timer converting delivered into read — read requires its own distinct triggering event (the message being rendered on screen), not the passage of time." },
          { text: "The app resent the message a second time to trigger the read status", correct: false, explanation: "No resend is involved — the read signal is generated by the recipient's device when the message is displayed, independent of any resend action." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A message stuck at delivered for days (edge case / variation)</h3>
      <div className="prose-p">
        A message shows &quot;delivered&quot; and stays there for several days. Possible ordinary explanations include: the recipient has read receipts turned off in their settings, which commonly suppresses the read signal from being sent at all even though the message displays normally once opened; the message arrived on a secondary or muted device the person rarely checks; or the person genuinely hasn&apos;t opened that specific conversation yet, even though the app is installed and otherwise in use. None of these require anything to be broken — the delivery mechanism did its job (the message reached a device), and the separate read-triggering event simply hasn&apos;t happened, for reasons entirely outside the sender&apos;s visibility.
      </div>
      <QuickCheck
        question="A message stays at 'delivered' for several days with no read status. Which of these is a plausible, entirely ordinary explanation?"
        options={[
          { text: "The recipient has read receipts disabled in their settings, which can suppress the read signal even after they've opened and seen the message", correct: true, explanation: "Correct. This is one of several everyday reasons for an indefinite stall — the delivery worked correctly, but the specific signal needed to show 'read' isn't being sent." },
          { text: "The message data was corrupted during delivery", correct: false, explanation: "A 'delivered' status specifically confirms successful, uncorrupted transfer to the device — corruption would prevent that status from appearing in the first place." },
          { text: "The sending server is still trying to relay the message after multiple failed attempts", correct: false, explanation: "'Delivered' means the transfer to the device already succeeded — an in-progress or retrying send would show a different status, not delivered." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Deciding whether to worry about an unread message (real-world / applied case)</h3>
      <p>
        Someone sends an important message to a family member and, after seeing &quot;delivered&quot; with no &quot;read&quot; status for a full day, starts worrying something is wrong. Understanding the mechanism suggests a calmer read of the situation: delivered confirms the message safely reached a device that has connectivity — which rules out the more concerning possibility of a completely offline or powered-off device — while an unread status for a day is well within the range of ordinary explanations like read receipts being off, a muted conversation, or simply not having opened the app. If genuine concern about the person&apos;s wellbeing exists, delivered-but-unread status alone isn&apos;t informative enough to act on either way — a phone call or a different, more direct channel is a better next step than reading meaning into a status icon that was never designed to report on a person&apos;s overall state.
      </p>
      <QuickCheck
        question="Why is 'delivered but not read for a day' generally weak evidence that something is wrong with the recipient?"
        options={[
          { text: "Because it rules out an offline device (the message did arrive), and an unread status for a day has multiple common, unrelated explanations", correct: true, explanation: "Correct. Delivered confirms basic connectivity, and there are several everyday, non-alarming reasons a read event might not have happened yet — the status alone doesn't distinguish between them." },
          { text: "Because 'delivered' actually means the same thing as 'read' in most apps", correct: false, explanation: "They are distinct statuses triggered by separate events — this isn't a matter of the terms overlapping in meaning." },
          { text: "Because message status icons are always inaccurate and shouldn't be trusted for anything", correct: false, explanation: "The statuses are generally accurate reports of the specific events they're designed to track — the issue is reading more into them (like a person's overall wellbeing) than the narrow event they report on." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Why a message can stall between delivered and read"
        type="detail"
        svgSrc="/diagrams/technology-basics-why-some-messages-say-delivered-but-not-read-decision-tree.svg"
        altText="A decision tree starting from a message reaching Delivered status, branching into four possible reasons it may never advance to Read: the recipient has read receipts turned off, the recipient has not opened the specific conversation yet, the message arrived on a muted or non-default device, or the recipient saw it in a notification preview without opening the app."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating 'delivered' and 'read' as two points on one automatic, continuous progress bar.", fix: "They're two independently triggered events — successful transfer to a device, and separately, that device rendering the message on screen — with no guaranteed timing between them." },
          { mistake: "Assuming a message stuck at 'delivered' means it failed to send properly.", fix: "'Delivered' specifically confirms successful transfer — a failed send would show a different status, not delivered." },
          { mistake: "Reading emotional or relational meaning into a delivered-but-unread status.", fix: "Multiple mundane, unrelated conditions (disabled read receipts, a muted device, an unopened conversation) can each independently cause the exact same visible status." },
          { mistake: "Assuming delivered-but-unread for a long time means the recipient's device is offline.", fix: "'Delivered' specifically confirms the device was reachable and received the message — an offline device wouldn't be able to receive it and show 'delivered' at all." },
        ]}
      />
      <MisconceptionCallout
        myth="If a message says 'delivered' but not 'read,' the person has definitely seen it and is choosing not to respond."
        reality={<p>A read status requires its own distinct triggering event — the message being rendered on the recipient&apos;s screen in a way their specific app counts as a qualifying view. Delivered only confirms the message reached a connected device; it says nothing about whether, when, or how the recipient will encounter it. Disabled read receipts, a muted conversation, a secondary device, or simply not having opened the app yet can each independently produce the exact same delivered-but-unread status, with no bearing on the recipient&apos;s intentions.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Don't read intent into a delivered-but-unread status — check for a more direct way to reach someone if a message is genuinely urgent.",
          "Remember that disabled read receipts, muted conversations, and unopened apps are all common, unrelated explanations for the exact same status.",
          "If you personally rely on read receipts to gauge urgency, check whether the recipient has that feature enabled at all before assuming anything from its absence.",
          "Read Read Receipts and Typing Indicators next to see exactly what triggers the read event itself.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why does a message say delivered but not read?", answer: "Delivered and read are two separately triggered events — delivered confirms the message reached the recipient's device, while read requires the additional, later event of the message being rendered on that device's screen. Several ordinary conditions, like disabled read receipts or an unopened conversation, can delay or prevent the read event indefinitely." },
          { question: "Does 'delivered' mean the person has seen the message?", answer: "No. Delivered only confirms the message successfully arrived on the recipient's device — it says nothing about whether or when that device has displayed it on screen." },
          { question: "Can someone see a message without it showing as read?", answer: "Yes, in some cases — for example, if they've disabled read receipts, or if their app doesn't count a notification preview as a qualifying read event, they may see content without the read status ever appearing to the sender." },
          { question: "Is a message stuck at delivered a sign it failed to send?", answer: "No. 'Delivered' specifically confirms successful transfer to the recipient's device — a genuinely failed send would show a different status, such as a send error, not delivered." },
          { question: "Why did my message show delivered but not read for days?", answer: "This has several common, unrelated explanations: the recipient may have read receipts turned off, the message may have arrived on a muted or secondary device, or they simply may not have opened that conversation yet — none of which indicate a technical problem." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
