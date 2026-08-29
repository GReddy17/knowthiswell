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
  title: "Read Receipts and Typing Indicators: How They Actually Work",
  category: "technology-basics",
  order: 46,
  subtopic: "digital-communication",
  tags: ["read receipts explained", "typing indicator", "how read receipts work", "digital communication", "message status", "technology basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "A read receipt is a small status update your device sends back to a server the moment a message is displayed on screen — it reports rendering, not comprehension.",
  summary: "Read receipts and typing indicators are small status messages that a messaging app automatically sends between devices to report a specific technical event — a message being displayed, or a text field being actively typed in — and neither one confirms what the other person actually did with that information.",
  sources: [
    { label: "XMPP Standards Foundation — XEP-0184: Message Delivery Receipts", url: "https://xmpp.org/extensions/xep-0184.html" },
    { label: "XMPP Standards Foundation — XEP-0085: Chat State Notifications", url: "https://xmpp.org/extensions/xep-0085.html" },
    { label: "MDN Web Docs — Page Visibility API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API" },
  ],
  seeAlso: [
    "technology-basics/why-some-messages-say-delivered-but-not-read",
    "technology-basics/how-push-notifications-work",
    "technology-basics/how-group-chats-sync-across-devices",
  ],
  glossary: [
    { term: "Read receipt", definition: "A small automated status update a device sends back to a server reporting that a specific message has been rendered on screen — not confirmation that the recipient consciously read or understood it." },
    { term: "Typing indicator", definition: "A temporary status signal sent while a user is actively typing in a conversation's text field, cleared automatically after a short pause or once the message is sent." },
    { term: "Chat state", definition: "A general term for short-lived status signals exchanged in a conversation — such as typing, paused, or active — separate from the message content itself." },
    { term: "Message state", definition: "The sequence of statuses a single message passes through after being sent, commonly including sent, delivered, and read, tracked independently of the message's actual content." },
    { term: "Rendering", definition: "The technical act of a device displaying content on screen — the event a read receipt actually reports, distinct from whether a person visually processed or understood what was shown." },
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
          "A read receipt fires the moment a message is rendered on screen — it's a technical event, not a report of whether the person consciously registered what it said.",
          "A typing indicator is a separate, temporary signal tied to activity in a text field, automatically sent and automatically cleared, independent of the message state itself.",
          "Both are just two more pieces of synchronized state layered on top of a message, working the same way delivery status does — devices reporting a small update to a server, which relays it to the other side.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Picture a shipping tracker that updates from &quot;out for delivery&quot; to &quot;delivered&quot; the instant a package is set down at the door — it doesn&apos;t know or report whether anyone actually opened the box. A <TermLink href="/technology-basics/read-receipts-and-typing-indicators-explained">read receipt</TermLink> works the same way: the moment a message appears on the recipient&apos;s screen, their device automatically fires off a tiny signal saying &quot;displayed,&quot; which travels back and flips a status marker on the sender&apos;s side. A <TermLink href="/technology-basics/read-receipts-and-typing-indicators-explained">typing indicator</TermLink> is a similar automatic signal, just tied to a different event — someone actively typing in the message box — and it disappears on its own after a short pause.</div>}
        detailed={<div className="prose-p">This is <strong>state &amp; synchronization</strong>: two devices, and often a server between them, keep a small shared status in sync as a conversation progresses, separate from the message content itself. A message typically moves through a <TermLink href="/technology-basics/read-receipts-and-typing-indicators-explained">message state</TermLink> sequence — sent, delivered, read — and each transition is its own tiny automated event sent device-to-server-to-device, standardized in open messaging protocols as delivery receipts. A typing indicator is a separate, shorter-lived category called a <TermLink href="/technology-basics/read-receipts-and-typing-indicators-explained">chat state</TermLink> notification: the app detects keystrokes in the input field, sends an &quot;active/composing&quot; signal, and automatically sends a &quot;paused&quot; or cleared signal after a timeout with no further input, or the moment the message is actually sent. The edge case worth knowing: a read receipt reports <TermLink href="/technology-basics/read-receipts-and-typing-indicators-explained">rendering</TermLink> — the message was drawn on screen — which can be triggered by a notification preview, an app briefly opened and closed, or a screen simply being on with the conversation in view, none of which guarantee the person actually processed the content. The signal and the human behavior it&apos;s named after are not the same thing.</div>}
      />
      <FootnoteAside>The XMPP Standards Foundation&apos;s open specifications for message delivery receipts (XEP-0184) and chat state notifications (XEP-0085) document this exact separation — delivery/read status and typing activity are defined as two independent signal types, not one combined feature.</FootnoteAside>

      <p>
        Once read receipts and typing indicators are understood as two separate automated status signals — one about a message, one about a text field — a lot of the social anxiety people build around them starts looking disproportionate to what the signal actually reports.
      </p>

      <QuickCheck
        question="A message shows as 'read.' What has that status actually confirmed?"
        options={[
          { text: "The recipient has read and mentally processed the full content of the message", correct: false, explanation: "A read receipt reports that the message was rendered on the recipient's screen — it has no way to confirm what happened in the recipient's mind after that." },
          { text: "The recipient's device displayed the message on screen, which triggered an automatic status signal back to the sender", correct: true, explanation: "Correct. This is a technical rendering event, not a measure of comprehension or attention." },
          { text: "The recipient has started composing a reply", correct: false, explanation: "Composing a reply is what a typing indicator reports, and it's a separate signal entirely from the read receipt — reading a message and starting to type a reply are two independent events." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A straightforward one-on-one conversation (baseline case)</h3>
      <div className="prose-p">
        Two people are messaging back and forth. When one opens the conversation and the message renders on their screen, their device automatically sends a small &quot;read&quot; signal to the server, which relays it to the other person&apos;s device, flipping the status marker there. When that person starts typing a reply, their device detects the keystrokes and sends a &quot;typing&quot; signal, displayed on the other side as an indicator. If they pause for more than a few seconds without sending, the app automatically sends a &quot;stopped typing&quot; signal, and the indicator disappears. None of this requires either person to manually confirm anything — every signal is generated automatically by device-level events (screen rendering, keystroke detection) rather than a deliberate action.
      </div>
      <QuickCheck
        question="In a normal conversation, what specifically triggers a typing indicator to appear for the other person?"
        options={[
          { text: "The recipient manually enabling a 'let them know I'm typing' setting each time", correct: false, explanation: "Typing indicators are generated automatically from keystroke activity in the text field — there's no manual per-message action required to trigger one." },
          { text: "Detected keystroke activity in the message compose field, sent as an automatic chat-state signal", correct: true, explanation: "Correct. The app detects active typing and automatically sends this short-lived status signal, clearing it again after a pause or once the message is sent." },
          { text: "The message being marked as read on the recipient's side", correct: false, explanation: "Read status and typing activity are two separate, independently tracked signals — one doesn't trigger the other." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A message read from a notification preview (edge case / variation)</h3>
      <div className="prose-p">
        Someone gets a notification and reads the first line of a message in the preview banner, without ever opening the app. Depending on how the app is configured, this preview rendering may or may not be enough to trigger a &quot;read&quot; status — some apps only mark a message read once the full conversation screen is actually opened, while others treat any on-screen rendering, including a preview, as a qualifying event. This is exactly why the same underlying behavior (seeing part of a message) can produce different visible outcomes across different apps or settings — the trigger condition for the signal is an implementation choice, not a fixed universal rule.
      </div>
      <QuickCheck
        question="Someone reads a message's preview text in a notification banner without opening the app. Will this always mark the message as 'read'?"
        options={[
          { text: "Yes, any on-screen rendering of any part of a message always counts as read, in every app", correct: false, explanation: "Whether a notification preview counts as a qualifying 'read' event is an implementation detail that varies by app and by settings — it isn't a universal rule." },
          { text: "It depends on how that specific app defines the trigger condition for a read receipt — some require the full conversation to be opened, others don't", correct: true, explanation: "Correct. The underlying mechanism (an automatic signal on a rendering event) is consistent, but exactly which rendering event qualifies is a configurable design choice that differs between apps." },
          { text: "No, read receipts can only ever be triggered by manually tapping a 'mark as read' button", correct: false, explanation: "Most modern messaging read receipts are generated automatically from a rendering event, not from a manual button a user has to press." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Deciding whether to disable read receipts (real-world / applied case)</h3>
      <p>
        Someone feels pressured to reply instantly whenever a message shows as read, and considers turning read receipts off. Understanding the mechanism clarifies what that setting actually changes: disabling read receipts typically stops the device from sending that automatic &quot;displayed&quot; signal for messages they receive, which also commonly means they stop seeing other people&apos;s read receipts in return, since it&apos;s usually a mutual, two-way setting rather than something that can be turned off one-directionally. It doesn&apos;t change whether the message was delivered, and it doesn&apos;t affect the typing indicator, which is a separate feature with its own separate setting in some apps. Someone wanting less social pressure specifically from the read status, but who is fine with typing indicators, needs to check that these are controlled independently.
      </p>
      <QuickCheck
        question="Someone disables read receipts to reduce pressure to reply instantly. What else does this most likely affect?"
        options={[
          { text: "Nothing else — it is usually a one-directional setting with no other effect", correct: false, explanation: "Read receipts are commonly a mutual, two-way setting — turning them off for messages you receive typically also means you stop seeing other people's read status, not just the reverse." },
          { text: "It also usually stops the person from seeing when others have read their own messages, since it's typically a mutual setting", correct: true, explanation: "Correct. Because the signal is generated the same way in both directions, most apps tie the setting to both directions together rather than letting someone see others' status while hiding their own." },
          { text: "It automatically disables the typing indicator as well, since they're the same feature", correct: false, explanation: "Read receipts and typing indicators are separate signal types with separate triggers, and in many apps, separate settings — disabling one doesn't automatically disable the other." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="A message's status states, and typing as a separate side signal"
        type="detail"
        svgSrc="/diagrams/technology-basics-read-receipts-and-typing-indicators-explained-state-machine.svg"
        altText="A state machine diagram showing a message moving through four possible states in sequence: Sent, Delivered, Read, with a separate typing indicator shown as a temporary side state that appears and disappears independently of the main message states."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating a 'read' status as proof the person consciously understood the message.", fix: "A read receipt reports that a message was rendered on screen — a technical event that can be triggered by a glance, a preview, or an accidental app opening, not comprehension." },
          { mistake: "Assuming typing indicators and read receipts are the same feature or controlled by one setting.", fix: "They're independently tracked signals with different triggers, and in many apps, separate on/off settings — check both if trying to change either." },
          { mistake: "Believing a disappearing typing indicator means the other person changed their mind about replying.", fix: "The indicator clears automatically after a short pause with no keystrokes, or once a different message is sent — it says nothing about the other person's intent." },
          { mistake: "Assuming read receipts work identically across every app and every version of a conversation.", fix: "Exactly which rendering event qualifies as 'read' (full conversation view vs. a notification preview, for instance) is an implementation choice that varies by app." },
        ]}
      />
      <MisconceptionCallout
        myth="If a message shows as 'read' and I don't get a reply, I'm being deliberately ignored."
        reality={<p>A read receipt confirms that a message was rendered on a screen — it does not confirm that the recipient consciously registered its content, has had time to think through a reply, or has any obligation to respond immediately. The signal is generated automatically by a device-level event, not a deliberate acknowledgment by the person, and treating it as proof of intent reads far more into a technical status update than the update is actually reporting.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "If read receipts create social pressure, check your app's settings — many treat it as a two-way toggle, so turning yours off usually also hides others' read status from you.",
          "Remember a typing indicator disappearing doesn't mean anything definitive — a paused reply, a distraction, or a changed message all clear it the same way.",
          "Don't treat 'read' as proof of comprehension or intent when interpreting a conversation — it's a rendering event, not a report on someone's attention.",
          "Read Why Some Messages Say 'Delivered' But Not 'Read' next to see the full range of reasons a message can stall at delivered.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do read receipts actually work?", answer: "When a message is rendered on the recipient's screen, their device automatically sends a small status signal back through the server, which updates the message's status marker on the sender's side. It's a technical rendering event, not a manual confirmation." },
          { question: "Does a typing indicator mean someone is definitely about to reply?", answer: "No. A typing indicator only reports that keystroke activity was detected in the message field at that moment. It clears automatically after a pause or once a message is sent, and says nothing about whether a reply will actually follow." },
          { question: "Can you turn off read receipts without turning off typing indicators?", answer: "Often yes, since they're separate signal types with separate settings in many apps — but check your specific app, since exactly which settings are bundled together varies by platform." },
          { question: "If I turn off read receipts, can I still see when others have read my messages?", answer: "Usually not. Read receipts are commonly a mutual, two-way setting, so disabling them for messages you receive typically also hides your own read status from others." },
          { question: "Why does a message sometimes show as read even though I only saw the notification preview?", answer: "Some apps count any on-screen rendering, including a notification preview, as a qualifying 'read' event, while others require the full conversation to be opened. This is an implementation choice that differs between apps rather than a universal rule." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
