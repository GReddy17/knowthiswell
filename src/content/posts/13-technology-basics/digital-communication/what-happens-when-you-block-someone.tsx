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
  title: "What Actually Happens When You \"Block\" Someone",
  category: "technology-basics",
  order: 47,
  subtopic: "digital-communication",
  tags: ["what does blocking do", "how blocking works", "block someone", "digital communication", "access control", "technology basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "Blocking someone flips a permission flag on the server that checks every future message and view attempt between two accounts — it doesn't touch anything already delivered.",
  summary: "Blocking is a server-side permission setting that stops new messages, calls, or visibility between two accounts going forward, checked automatically on every future interaction attempt — it does not retroactively delete or hide content already exchanged before the block.",
  sources: [
    { label: "NIST Computer Security Resource Center — Glossary: Access Control List", url: "https://csrc.nist.gov/glossary/term/access_control_list" },
    { label: "OWASP — Broken Access Control", url: "https://owasp.org/Top10/A01_2021-Broken_Access_Control/" },
  ],
  seeAlso: [
    "technology-basics/end-to-end-encryption-explained",
    "technology-basics/why-some-messages-say-delivered-but-not-read",
    "technology-basics/how-social-media-feeds-decide-what-you-see",
  ],
  glossary: [
    { term: "Access control", definition: "A system that checks, for every attempted action, whether the account requesting it currently has permission to do so — the general mechanism blocking relies on." },
    { term: "Permission flag", definition: "A stored setting attached to the relationship between two accounts that a server checks before allowing an interaction like sending a message or viewing content." },
    { term: "Server-side", definition: "Enforced on the company's own servers rather than only on a person's individual device — meaning the restriction applies no matter which device or app version either account uses." },
    { term: "Retroactive", definition: "Applying backward to something that already happened — blocking is explicitly not retroactive, since it changes future permission checks, not past deliveries." },
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
          "Blocking sets a permission flag on the server tied to the relationship between two accounts — every future message or view attempt gets checked against it, and blocked interactions are rejected before they reach the other person.",
          "Blocking is not retroactive. It stops new interactions going forward; it does not delete, hide, or unsend messages, photos, or calls that were already exchanged before the block.",
          "Because the check happens on the server, blocking works the same way regardless of which device either account uses afterward — it isn't a setting stored only on one phone.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of a building receptionist who keeps a do-not-admit list. From the moment a name goes on that list, the receptionist turns that person away at the front desk every time they try to enter — but nothing about a visit that already happened last week gets undone. Blocking someone works the same way: the app&apos;s server adds a marker to the relationship between two accounts, and from that point on, it checks that marker every time one account tries to message, call, or view the other&apos;s activity, and stops it. Anything already sent or seen before the block stays exactly as it was.</div>}
        detailed={<div className="prose-p">This is a <strong>trust chain / verification</strong> model: rather than trusting every request by default, the server runs an <TermLink href="/technology-basics/what-happens-when-you-block-someone">access control</TermLink> check before fulfilling it. Blocking writes a <TermLink href="/technology-basics/what-happens-when-you-block-someone">permission flag</TermLink> tied to the pair of accounts involved, stored <TermLink href="/technology-basics/what-happens-when-you-block-someone">server-side</TermLink> — not merely as a setting on one device. From that moment forward, every request between those two accounts (send a message, place a call, view a profile or story, see online status) passes through that same check, and a blocked pairing gets rejected at that checkpoint before the request is fulfilled. The edge case worth knowing: this check is <TermLink href="/technology-basics/what-happens-when-you-block-someone">retroactive</TermLink> in name only — it isn&apos;t retroactive at all. Messages already delivered to a device before the block remain on that device exactly as before, since the block only governs new requests, not content already transferred. Some platforms add a separate, distinct feature — deleting or hiding message history — but that&apos;s an independent action layered on top of blocking, not a built-in consequence of it.</div>}
      />
      <FootnoteAside>Access control checks like this are a general computing pattern, not something invented for messaging apps — the same request-then-verify-permission logic secures everything from file systems to bank transactions, which NIST&apos;s security glossary documents as a foundational concept, not a novel one.</FootnoteAside>

      <p>
        Once you see blocking as a forward-looking permission check rather than a rewind button, a lot of confusion about what does and doesn&apos;t survive a block clears up immediately.
      </p>

      <QuickCheck
        question="After Person A blocks Person B, what happens to the messages they exchanged the week before the block?"
        options={[
          { text: "They are automatically deleted from both people's devices", correct: false, explanation: "Blocking only governs future interaction attempts, checked at the server. It doesn't reach back and delete content that was already delivered before the block existed." },
          { text: "They remain exactly as they were on both devices, since blocking only affects new requests going forward", correct: true, explanation: "Correct. The block is a forward-looking permission check, not a retroactive action on already-delivered content." },
          { text: "They become visible only to Person A, since Person A initiated the block", correct: false, explanation: "Blocking doesn't selectively alter visibility of past content for either party — both sides retain whatever they already had before the block." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A straightforward block between two accounts (baseline case)</h3>
      <div className="prose-p">
        Person A blocks Person B after a disagreement. The server records this as a permission flag on the relationship between the two accounts. From that point, if Person B tries to send Person A a new message, the server checks the flag before attempting delivery, sees the block, and rejects it — the message may appear to send on Person B&apos;s device, but it never actually reaches Person A. If Person B tries to call or view Person A&apos;s activity, the same check runs and the same rejection happens. Meanwhile, the messages the two exchanged before the block remain untouched on both of their devices, since those were already delivered before the permission flag existed to check against.
      </div>
      <QuickCheck
        question="After being blocked, Person B sends a new message that appears to go through on their own screen. Does it reach Person A?"
        options={[
          { text: "No — the server checks the permission flag before delivery and rejects it, even though it may appear sent on the sender's own device", correct: true, explanation: "Correct. The block is enforced server-side at the point of delivery, which is why a message can look sent on the blocked person's device without ever actually reaching the recipient." },
          { text: "Yes, but only Person A can choose whether to read it", correct: false, explanation: "The block prevents delivery outright at the server level — it isn't a matter of Person A choosing to ignore a delivered message; the message doesn't arrive in the first place." },
          { text: "It depends on whether Person A's device is currently online", correct: false, explanation: "The rejection happens because of the stored permission flag on the server, not because of Person A's device connectivity at that moment." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Blocking on one device but staying logged in elsewhere (edge case / variation)</h3>
      <div className="prose-p">
        Someone blocks another account from their phone app, then later logs into the same account from a different device or a web browser. Because the permission flag is stored server-side, tied to the account relationship rather than to one specific device, the block applies identically everywhere that account is used — there&apos;s no need to separately block the same person again on each device. This is the same reason a block can&apos;t be casually bypassed just by using a different device to view or contact the blocked account through the same service; the check happens centrally, before any device-specific interface even gets involved.
      </div>
      <QuickCheck
        question="Someone blocks another account using their phone app. Does the block also apply if they later log into the same account on a computer's web browser?"
        options={[
          { text: "No, blocking has to be set up separately on every device and app version", correct: false, explanation: "Because the permission flag is stored on the server tied to the account, not to an individual device or app installation, it doesn't need to be repeated per device." },
          { text: "Yes, because the permission flag is stored server-side against the account relationship, not against any single device", correct: true, explanation: "Correct. The check happens centrally on the server before any device-specific app or browser session gets involved, so it applies uniformly everywhere the account is accessed." },
          { text: "Only if both devices are running the exact same version of the app", correct: false, explanation: "App version has no bearing on this — the enforcement happens on the server, independent of which client version is being used to access the account." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Deciding what blocking will and won&apos;t solve (real-world / applied case)</h3>
      <p>
        Someone wants to stop unwanted contact from a specific account and also wants embarrassing photos they previously sent that person permanently gone. Blocking solves the first goal directly — it stops all future messages, calls, and visibility between the two accounts, enforced at the server. It does not solve the second goal at all: any photos or messages already delivered to the other person&apos;s device before the block remain there, since blocking is a forward-looking permission change, not a retroactive deletion. Someone with that second goal needs to separately request deletion of specific content, understanding that once something has been delivered to another person&apos;s device, no permission setting can reach back and remove it from a device outside the sender&apos;s control.
      </p>
      <QuickCheck
        question="Someone blocks a person specifically hoping it will also erase photos they'd already sent that person before the block. Will blocking achieve that?"
        options={[
          { text: "Yes, blocking automatically deletes previously sent content from both devices", correct: false, explanation: "Blocking only changes permissions for future interactions — it has no mechanism to reach into another person's device and remove content already delivered there." },
          { text: "No, blocking only stops new interactions going forward; content already delivered before the block remains on the other person's device regardless", correct: true, explanation: "Correct. This is exactly the gap between what blocking is designed to do (a forward-looking permission check) and what it's often mistakenly assumed to also do." },
          { text: "Yes, but only for photos, not for text messages", correct: false, explanation: "Blocking doesn't selectively delete any content type — it doesn't delete previously delivered content at all, regardless of whether it's text or photos." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Before and after blocking: what actually changes"
        type="detail"
        svgSrc="/diagrams/technology-basics-what-happens-when-you-block-someone-visibility-comparison.svg"
        altText="A before-and-after comparison showing, before blocking, two people able to send messages and see each other's activity in both directions, and after blocking, the blocking person's server-side permission flag now stopping new messages and visibility in both directions, while existing past messages already delivered to each device remain untouched on both sides."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming blocking someone deletes past messages or photos for both people.", fix: "Blocking is a forward-looking permission change enforced at the server — anything already delivered before the block stays exactly where it was." },
          { mistake: "Believing a blocked person can't tell they've been blocked at all.", fix: "Depending on the app, indirect signals (a message never showing as delivered, a profile becoming inaccessible) can reveal a block even without an explicit notification, though this varies by platform and isn't guaranteed." },
          { mistake: "Thinking a block needs to be re-applied on every device or app the blocking person uses.", fix: "Since the permission flag is stored server-side against the account relationship, it applies uniformly no matter which device either account logs in from." },
          { mistake: "Assuming blocking automatically deletes the entire conversation history from the blocking person's own device too.", fix: "Blocking and deleting conversation history are typically separate, independent actions — check your app's specific options if you want both." },
        ]}
      />
      <MisconceptionCallout
        myth="Blocking someone erases everything about the relationship — messages, photos, and history — for both people."
        reality={<p>Blocking changes a permission flag checked on every future interaction attempt between two accounts — it stops new messages, calls, and visibility going forward. It is explicitly not retroactive: content already delivered to a device before the block remains there, on both sides, because the server has no mechanism to reach into a device it doesn&apos;t control and remove content that already arrived. Deleting existing content, where an app offers that option, is a separate action a person has to take independently.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "If your goal is removing already-sent content, look for a separate delete or unsend option — blocking alone won't reach content already delivered elsewhere.",
          "Remember a block applies across every device tied to an account automatically, since the check happens server-side, not per device.",
          "Don't assume a block is instantly or reliably detectable by the other person — indirect signals vary by app and aren't a guaranteed notification.",
          "Read Why Some Messages Say 'Delivered' But Not 'Read' next to see other reasons a message can stall besides being blocked.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What actually happens when you block someone?", answer: "The server records a permission flag on the relationship between the two accounts. From that point on, every attempt by the blocked account to message, call, or view the blocking account's activity is checked against that flag and rejected before it's fulfilled." },
          { question: "Does blocking someone delete previous messages or photos?", answer: "No. Blocking is a forward-looking permission change, not a retroactive one — content already delivered to a device before the block remains there on both sides unless separately and manually deleted." },
          { question: "Can a blocked person still see your old messages?", answer: "Any messages already delivered to their device before the block generally remain accessible to them there, since blocking doesn't reach into a device it doesn't control and remove content that already arrived." },
          { question: "Does blocking someone on one device block them everywhere?", answer: "Yes, typically. Because the permission flag is stored server-side against the account relationship rather than a single device, it applies uniformly no matter which device or app the accounts are used from afterward." },
          { question: "Can someone tell if they've been blocked?", answer: "Sometimes indirectly — for instance, a message that never progresses past 'sent' or a profile that becomes inaccessible — but this varies by platform and isn't a guaranteed or explicit notification in most cases." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
