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
  title: "How Email Actually Gets Delivered (SMTP, Explained Simply)",
  category: "technology-basics",
  order: 41,
  subtopic: "digital-communication",
  tags: ["how email works", "SMTP explained", "email delivery", "digital communication", "DNS MX record", "technology basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "Email doesn't teleport — it hops from your mail app to your provider's server, through a DNS lookup, straight to the recipient's mail server over SMTP.",
  summary: "Email is delivered by SMTP (Simple Mail Transfer Protocol), a standardized handoff process where your outgoing mail server looks up the recipient's mail server in DNS and relays the message directly to it.",
  sources: [
    { label: "IETF RFC 5321 — Simple Mail Transfer Protocol", url: "https://www.rfc-editor.org/rfc/rfc5321.html" },
    { label: "IETF RFC 5322 — Internet Message Format", url: "https://www.rfc-editor.org/rfc/rfc5322.html" },
    { label: "Cloudflare Learning Center — What Is SMTP?", url: "https://www.cloudflare.com/learning/email-security/what-is-smtp/" },
  ],
  seeAlso: [
    "technology-basics/what-cc-and-bcc-actually-do-in-email",
    "technology-basics/end-to-end-encryption-explained",
    "technology-basics/how-push-notifications-work",
  ],
  glossary: [
    { term: "SMTP", definition: "Simple Mail Transfer Protocol — the standardized set of rules mail servers use to hand off an email message from one server to the next, defined in IETF RFC 5321." },
    { term: "MTA (Mail Transfer Agent)", definition: "A mail server program that sends, receives, and relays email between servers using SMTP." },
    { term: "MX record", definition: "A type of DNS record that lists which mail server(s) are responsible for accepting email on behalf of a given domain." },
    { term: "Mail submission", definition: "The step where an email app hands a newly composed message to its outgoing mail server, typically over port 587." },
    { term: "IMAP/POP", definition: "Protocols an email app uses to retrieve messages that have already arrived in a mailbox — separate from SMTP, which only handles sending and relaying." },
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
          "Email travels through a chain of standardized handoffs — your app to your outgoing server, a DNS lookup to find the recipient's server, then a direct server-to-server relay — defined by a decades-old protocol called SMTP.",
          "SMTP only handles sending and relaying. A completely separate protocol (IMAP or POP) is what your email app uses afterward to retrieve messages that have already arrived in a mailbox.",
          "\"Undeliverable\" bounce messages, delays, and spam filtering usually trace back to one specific hop in this chain failing or flagging the message — knowing the hops tells you where to look.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Sending an email is like dropping a letter into a postal system that automatically figures out the destination post office for you. You hand your message to your own mail server; that server looks up which server handles mail for the recipient&apos;s domain (like asking &quot;which post office covers this ZIP code?&quot;); then it delivers the message directly to that server, which drops it into the recipient&apos;s mailbox. The whole thing usually takes seconds because every step is automated and standardized.</div>}
        detailed={<div className="prose-p">This is the <strong>request &rarr; response</strong> model layered on top of <strong>lookup via index</strong>. Sending mail happens in two distinct stages defined by <TermLink href="/technology-basics/how-email-actually-gets-delivered">SMTP</TermLink> (IETF RFC 5321): first, <strong>submission</strong> — your email app authenticates and hands the message to your provider&apos;s outgoing server, typically over port 587. Second, <strong>relay</strong> — that outgoing server queries DNS for the recipient domain&apos;s <TermLink href="/technology-basics/how-email-actually-gets-delivered">MX record</TermLink> (a lookup, not a search — DNS already has this indexed), then connects directly to whichever server that record points to and transfers the message, historically over port 25. The edge case worth knowing: a domain can list multiple MX records with different priority values as backups, so if the top-priority mail server is down, sending servers automatically retry the next one on the list — this is why email rarely fails outright even during a provider outage, it just queues and retries for a period (commonly up to several days) before finally bouncing.</div>}
      />
      <FootnoteAside>SMTP itself only moves the message. Reading your inbox uses a completely different protocol — IMAP (which syncs mail across devices, leaving copies on the server) or the older POP (which typically downloads and removes messages) — defined separately from RFC 5321.</FootnoteAside>

      <p>
        Once you see it as a chain of separate hops rather than one instant transfer, delays and bounce messages stop being mysterious — each hop is a place something can slow down, retry, or reject the message.
      </p>

      <QuickCheck
        question="You hit send on an email. What is the very first thing that happens, before the message goes anywhere near the recipient?"
        options={[
          { text: "Your email app connects directly to the recipient's mail server", correct: false, explanation: "Your app never talks to the recipient's server directly — it only ever talks to your own provider's outgoing server, which does the relaying on your behalf." },
          { text: "Your email app submits the message to your own outgoing mail server, which then handles the rest of the delivery", correct: true, explanation: "Correct. Submission to your own provider's server (over SMTP, usually port 587) is the first hop — everything else, including the DNS lookup and the relay, happens after that." },
          { text: "The message is broadcast to every mail server on the internet until one accepts it", correct: false, explanation: "Email delivery is targeted, not broadcast. A DNS lookup identifies exactly which server is responsible for the recipient's domain before any relay attempt is made." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Sending a routine email between two providers (baseline case)</h3>
      <div className="prose-p">
        Someone emails a colleague at a different company. Their email app submits the message to their own outgoing server. That server extracts the domain from the recipient&apos;s address and asks DNS: &quot;which server handles mail for this domain?&quot; DNS returns an MX record pointing to the colleague&apos;s company mail server. The outgoing server then opens a direct SMTP connection to that server and transfers the message. The receiving server accepts it, stores it in the colleague&apos;s mailbox, and the colleague&apos;s email app retrieves it moments later over IMAP. No third-party server sits in the middle holding the message — it is a direct handoff once the address is resolved.
      </div>
      <QuickCheck
        question="After DNS returns the recipient domain's MX record, what happens next?"
        options={[
          { text: "The sending server queries DNS again to double-check the address", correct: false, explanation: "One MX lookup is enough to identify the destination server — a second lookup isn't part of the standard flow." },
          { text: "The sending server opens a direct SMTP connection to the mail server the MX record points to and transfers the message", correct: true, explanation: "Correct. The MX lookup exists specifically to tell the sending server where to connect next — the relay happens directly, server to server." },
          { text: "The message is queued at a central internet mail hub for manual routing", correct: false, explanation: "There is no central hub in normal email delivery — it's a direct, decentralized relay from the sending server to the specific server the MX record names." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The recipient&apos;s mail server is temporarily down (edge case / variation)</h3>
      <div className="prose-p">
        A sending server tries to relay a message, but the receiving server doesn&apos;t respond — maybe it&apos;s mid-maintenance. SMTP doesn&apos;t treat this as a permanent failure. The sending server queues the message and retries at increasing intervals — commonly attempting again over a period that can stretch to several days, depending on the sending server&apos;s configuration. If a domain has listed a backup MX record with lower priority, the sending server may try that server instead. Only after all retry attempts and backups are exhausted does the sender finally receive a bounce-back message reporting permanent delivery failure. This is why an email can arrive hours late with no error at all — it was queued and retried quietly the whole time.
      </div>
      <QuickCheck
        question="An email arrives six hours after it was sent, with no error message to the sender. What most likely happened?"
        options={[
          { text: "The recipient's mail server was temporarily unreachable, and the sending server automatically queued and retried delivery until it succeeded", correct: true, explanation: "Correct. SMTP is built to retry on temporary failures rather than give up immediately — a delay with no bounce message usually means a retry eventually succeeded." },
          { text: "The email was manually reviewed by a person before being released", correct: false, explanation: "Routine delivery delays are handled automatically by retry logic in the mail servers, not by manual human review." },
          { text: "The internet's DNS system was rebuilding its records during that time", correct: false, explanation: "DNS records for a domain don't get rebuilt mid-delivery — the MX lookup either succeeds or fails quickly. A multi-hour delay points to server-side retry behavior, not DNS." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Diagnosing why a business email keeps landing in spam (real-world / applied case)</h3>
      <p>
        A small business notices its invoices routinely land in customers&apos; spam folders. Understanding the SMTP relay chain points directly at the fix: receiving mail servers check several signals during that direct server-to-server handoff, including whether the sending server&apos;s IP address is authorized to send mail for that domain (via DNS records like SPF) and whether the message is cryptographically signed as genuinely coming from that domain (via DKIM). A business sending mail through an unverified or improperly configured server gives receiving servers a legitimate reason to flag it as suspicious during that relay step, even though the message itself is perfectly legitimate. Fixing SPF and DKIM records at the DNS level — not rewriting the email&apos;s wording — is usually what resolves it.
      </p>
      <QuickCheck
        question="A company's emails keep getting flagged as spam even though the content isn't spammy. Where in the delivery process is this most likely being decided?"
        options={[
          { text: "By the sender's own email app, before the message is even submitted", correct: false, explanation: "Spam classification happens on the receiving end, using signals checked during and after the SMTP relay — not by the sender's own app before sending." },
          { text: "By the recipient's mail server, checking DNS-based authentication signals like SPF and DKIM during the SMTP relay", correct: true, explanation: "Correct. Receiving servers commonly verify sender authenticity through DNS records during that direct relay step — misconfigured or missing SPF/DKIM records are a very common cause of legitimate mail landing in spam." },
          { text: "By the recipient personally marking every new sender as spam by default", correct: false, explanation: "This is an automated server-side classification happening at delivery time, not something dependent on the individual recipient's manual action." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The SMTP relay chain: app to mailbox"
        type="detail"
        svgSrc="/diagrams/technology-basics-how-email-actually-gets-delivered-relay-hops.svg"
        altText="A flow diagram showing a sender's email app submitting a message to their outgoing mail server, which looks up the recipient domain's MX record in DNS, then relays the message directly to the recipient's mail server over SMTP, which finally stores it in the recipient's mailbox for their email app to retrieve."
      />
      <p>
        Notice there is no separate &quot;email network&quot; running in parallel to the internet — every one of these hops is an ordinary internet connection between two computers, just following the SMTP rulebook for what to say and in what order.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming email travels through one central mail hub run by 'the internet.'", fix: "There is no central hub — delivery is a direct, decentralized relay from the sender's outgoing server straight to the specific server DNS points to for that domain." },
          { mistake: "Thinking a delayed email with no error means something is broken.", fix: "SMTP is designed to retry quietly on temporary failures for a period before giving up — a delay with no bounce message is often just a successful retry in progress." },
          { mistake: "Believing SMTP handles both sending and reading email.", fix: "SMTP only covers sending and server-to-server relay. Retrieving mail into an app uses a separate protocol entirely — IMAP or POP." },
          { mistake: "Assuming spam filtering only looks at the words in the message.", fix: "Receiving servers check server-level and DNS-level authentication signals (like SPF and DKIM) during the relay itself — content is only one factor among several." },
        ]}
      />
      <MisconceptionCallout
        myth="Email is basically instant and works like a live phone call between two people's inboxes."
        reality={<p>Email is a store-and-forward system, not a live connection. Each hop — submission, DNS lookup, relay, storage — completes independently, and the message can sit queued at any one of them. It usually feels instant because each step normally takes well under a second, but nothing about the protocol guarantees real-time delivery, which is exactly why retries and delays are a normal, built-in part of how it works rather than a malfunction.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time an email arrives late with no bounce message, remember that's SMTP's retry logic working as designed, not a failure.",
          "If you run a business sending email, check that your domain has correctly configured SPF and DKIM DNS records — misconfiguration there is a leading cause of legitimate mail landing in spam.",
          "When troubleshooting 'email isn't arriving,' mentally walk the chain — submission, DNS lookup, relay, recipient server, retrieval — to narrow down which hop is actually failing.",
          "Read What a CC and BCC Actually Do in Email next to see how the same message format (RFC 5322) controls who sees which recipients.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does email actually get from sender to recipient?", answer: "Your email app submits the message to your provider's outgoing mail server. That server looks up the recipient domain's mail server in DNS (an MX record), then relays the message directly to it using SMTP, where it's stored until the recipient's app retrieves it." },
          { question: "What does SMTP stand for and what does it do?", answer: "SMTP stands for Simple Mail Transfer Protocol, defined in IETF RFC 5321. It's the standardized set of rules mail servers use to submit and relay email messages between each other — it only handles sending, not retrieving mail already delivered to a mailbox." },
          { question: "Why does an email sometimes take hours to arrive?", answer: "If the recipient's mail server is temporarily unreachable, the sending server queues the message and retries automatically at increasing intervals, sometimes for days, before finally reporting failure. A delay usually means a retry eventually succeeded, not that anything broke." },
          { question: "Is SMTP the same protocol used to check your inbox?", answer: "No. SMTP only covers sending and relaying mail between servers. Checking an inbox uses a separate protocol — IMAP (which keeps mail synced across multiple devices) or the older POP (which typically downloads mail off the server)." },
          { question: "Why do legitimate emails sometimes end up in spam folders?", answer: "Receiving mail servers check authentication signals during the SMTP relay, such as SPF and DKIM DNS records, to verify a message really came from an authorized server for that domain. Misconfigured records — not just message content — are a common reason legitimate email gets flagged." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
