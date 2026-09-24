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
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "How Phishing Scams Actually Work",
  category: "digital-safety-privacy",
  order: 3,
  subtopic: "everyday-account-security",
  tags: ["phishing", "social engineering", "account security", "spoofing"],
  date: "2026-09-23",
  updated: "2026-09-23",
  lastReviewed: "2026-09-23",
  excerpt: "Phishing works by exploiting urgency, authority, and trust, then routing the target to a spoofed page built to harvest credentials — not just by hiding a bad link in an email.",
  summary: "Per CISA and NIST guidance, phishing is a social engineering technique where an attacker impersonates a trusted sender, uses urgency or authority to pressure a target into acting without verifying, and directs the target to a spoofed domain or lookalike page designed to harvest login credentials or other sensitive information — the underlying mechanism is psychological manipulation and identity spoofing, not simply a link a target failed to notice was suspicious.",
  sources: [
    { label: "CISA — Recognize and Report Phishing", url: "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing" },
    { label: "CISA — Avoiding Social Engineering and Phishing Attacks", url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks" },
    { label: "NIST Special Publication 800-63B — Digital Identity Guidelines: Authentication and Lifecycle Management", url: "https://pages.nist.gov/800-63-3/sp800-63b.html" },
  ],
  seeAlso: [
    "technology-basics/phishing-explained",
    "digital-safety-privacy/how-password-managers-actually-protect-you",
    "digital-safety-privacy/what-two-factor-authentication-actually-does",
    "technology-basics/why-strong-passwords-actually-matter",
  ],
  glossary: [
    { term: "Phishing", definition: "A social engineering technique where an attacker impersonates a trusted sender to trick a target into revealing sensitive information, such as login credentials, or taking a harmful action." },
    { term: "Spoofing", definition: "Disguising a message's sender identity or a website's address so it appears to come from a legitimate, trusted source when it does not." },
    { term: "Social engineering", definition: "Manipulating a person — rather than a technical system — into taking an action or revealing information that compromises their security, typically by exploiting trust, urgency, or authority." },
    { term: "Credential harvesting", definition: "The practice of collecting usernames, passwords, or other login information, often via a fake webpage built to closely resemble a legitimate login page." },
    { term: "Business email compromise (BEC)", definition: "A targeted phishing scheme where an attacker impersonates a company executive or trusted vendor by email to trick an employee into transferring funds or sensitive data." },
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
          "Phishing works by exploiting urgency, authority, and trust — the psychological pressure to act fast is the actual mechanism, not just a poorly hidden bad link.",
          "Attackers spoof a sender's identity or a website's domain so a message or page looks like it's from a legitimate, trusted source when it isn't.",
          "The goal is usually credential harvesting: directing the target to a fake login page built to closely resemble the real one, then capturing whatever is typed into it.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Per CISA guidance, phishing is when someone pretends to be a person or organization you trust &mdash; your bank, your employer, a delivery company &mdash; to get you to hand over information or click something harmful. The trick isn&apos;t really about the link itself; it&apos;s about pressure. The message usually tries to make you feel like you have to act right now, before you have time to stop and check whether it&apos;s real. If you do click through, you often land on a page built to look exactly like a real login screen. Type your username and password in, and the attacker now has them.</div>}
        detailed={<div className="prose-p">Per CISA&apos;s guidance on social engineering and phishing, the attack chain rests on three linked mechanisms. First, psychological pressure: the message manufactures urgency (&quot;your account will be suspended in 24 hours&quot;) or invokes authority (impersonating a manager, a bank, or a government agency) specifically to short-circuit the target&apos;s normal instinct to pause and verify. Second, identity spoofing: because standard email doesn&apos;t inherently authenticate who actually sent a message, an attacker can forge a &quot;From&quot; display name, or register a lookalike domain that differs from the real one by a single character or a swapped letter, so the sender or the destination link appears legitimate at a glance. Third, <TermLink href="/digital-safety-privacy/how-password-managers-actually-protect-you">credential harvesting</TermLink>: the target is routed to a page cloned to closely match a real login page, and anything typed into it is captured directly by the attacker rather than sent to the real service. NIST SP 800-63B treats this credential-harvesting risk as a core reason authentication systems should be designed to resist phishing at the protocol level &mdash; for example, through <TermLink href="/digital-safety-privacy/what-two-factor-authentication-actually-does">phishing-resistant authentication methods</TermLink> &mdash; rather than relying solely on a user&apos;s ability to spot a fake page every time.</div>}
      />
      <FootnoteAside>CISA notes that phishing isn&apos;t limited to email &mdash; the same urgency-plus-spoofing mechanism shows up in text messages (&quot;smishing&quot;), phone calls (&quot;vishing&quot;), and even QR codes, because the underlying trick is about trust and pressure, not any one specific delivery channel.</FootnoteAside>

      <p>Because standard email and caller ID were never designed to cryptographically verify who&apos;s really on the other end, per CISA and NIST guidance, spoofing a sender&apos;s apparent identity is technically straightforward — which is exactly why both agencies frame independent verification, not vigilance about how a message looks, as the actual defense. For a broader walk-through of how attackers construct these lookalike messages and pages, see <TermLink href="/technology-basics/phishing-explained">this companion explainer on phishing mechanics</TermLink>; and since <TermLink href="/technology-basics/why-strong-passwords-actually-matter">a strong, unique password</TermLink> limits the damage if one account&apos;s credentials are ever harvested, the two defenses work together rather than replacing each other.</p>

      <QuickCheck
        question="Per CISA guidance, what is the core psychological mechanism phishing messages rely on to work?"
        options={[
          { text: "Manufactured urgency or invoked authority that pressures the target into acting before verifying the message is real", correct: true, explanation: "Correct. CISA identifies urgency and authority as the core levers phishing uses to short-circuit a target's normal instinct to pause and check." },
          { text: "Advanced malware that installs itself automatically just from opening the email, with no action needed from the target", correct: false, explanation: "That describes a different threat (drive-by malware). Phishing specifically relies on tricking the target into taking an action — clicking, entering credentials — not on automatic infection." },
          { text: "Randomly guessing a target's existing password through repeated login attempts", correct: false, explanation: "That describes a brute-force or credential-stuffing attack, a different technique. Phishing works by tricking the target into voluntarily revealing information, not guessing it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A spoofed &quot;verify your account&quot; bank email (baseline case)</h3>
      <div className="prose-p">A message appears to come from a bank, warning that the account will be locked unless the recipient &quot;verifies&quot; it within 24 hours. The link goes to a domain that looks nearly identical to the real bank&apos;s address but isn&apos;t. The login page on that domain is a close visual copy of the real one. Entering credentials there sends them straight to the attacker, per the mechanism CISA describes.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A targeted &quot;IT department&quot; spear-phishing message (edge case / variation)</h3>
      <div className="prose-p">Instead of a generic mass email, an attacker researches a specific employee and sends a message referencing their real employer, job title, and a plausible internal system, appearing to come from the company&apos;s IT department and requesting a password reset through a spoofed internal-looking page. This is spear phishing — the same urgency-plus-spoofing mechanism, but personalized with real details to make the impersonation more convincing, which CISA notes makes targeted attacks harder to spot than generic ones.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Business email compromise targeting a wire transfer (real-world / applied case)</h3>
      <div className="prose-p">An attacker spoofs the email of a company executive and messages someone in the finance department with an urgent request to wire funds to a new account before a deadline, relying on invoked authority (a superior&apos;s request) and manufactured urgency (a time-sensitive deal) rather than any malicious link at all. CISA and federal law enforcement track business email compromise as one of the costliest phishing variants precisely because it can succeed without ever needing a target to click a link or enter a password.</div>

      <QuickCheck
        question="In the business email compromise example, no malicious link or fake login page was involved. Does this still count as phishing, per CISA's framing?"
        options={[
          { text: "Yes — phishing is defined by the impersonation and psychological pressure used to manipulate the target, not by the specific presence of a link or credential-harvesting page", correct: true, explanation: "Correct. CISA's framing centers phishing on social engineering — impersonating a trusted party to manipulate the target — which can succeed through a spoofed request alone, with no link or fake page required." },
          { text: "No — without a malicious link or fake login page, it isn't technically phishing", correct: false, explanation: "This is a common but inaccurate narrowing of the term. CISA and federal guidance both classify business email compromise as a form of phishing precisely because it uses the same impersonation-and-urgency mechanism." },
          { text: "No — this would only count as phishing if malware were also installed on the victim's device", correct: false, explanation: "Phishing doesn't require malware installation at all — it's defined by the social engineering and impersonation involved, which this example clearly has." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The phishing attack chain: impersonation to credential capture"
        type="flow"
        svgSrc="/diagrams/digital-safety-privacy-how-phishing-scams-actually-work-flow.svg"
        altText="A flow diagram showing the phishing attack chain: an attacker spoofs a trusted sender, the message uses urgency or authority to pressure the target, the target is routed to a spoofed lookalike page, the target enters credentials, and the attacker captures and uses those credentials."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Believing 'just don't click suspicious links' is a complete defense against phishing.", fix: "Understand phishing can succeed through a spoofed request alone, as in business email compromise — verify unusual or urgent requests through an independent, already-known contact channel, not by judging the message itself." },
          { mistake: "Assuming a message is legitimate because the sender name and logo look correct.", fix: "Recognize that display names and logos are trivial for an attacker to spoof, per CISA guidance — check the actual sending domain and, when in doubt, contact the organization directly through a channel you already trust, not one provided in the message." },
          { mistake: "Treating urgency in a message as a sign it's important, rather than a possible warning sign.", fix: "Treat manufactured urgency itself as a red flag, per CISA's guidance — legitimate organizations rarely require you to bypass normal verification steps immediately." },
        ]}
      />
      <MisconceptionCallout
        myth="Phishing is really just about spotting a bad link — if you don't click suspicious links, you're safe."
        reality={<p>Per CISA guidance, phishing&apos;s actual mechanism is impersonation combined with psychological pressure, and a malicious link is only one possible delivery method — not the defining feature. Business email compromise, for example, can trick a target into wiring funds through a spoofed executive request with no link involved at all. NIST SP 800-63B similarly treats credential phishing as a risk serious enough to warrant authentication methods that resist it structurally, precisely because relying on individual users to visually catch every spoofed message isn&apos;t a reliable long-term defense on its own.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Treat urgency and authority in an unexpected message as a warning sign, per CISA guidance — legitimate organizations don't typically require you to bypass normal verification.",
          "Verify unusual or high-stakes requests (password resets, wire transfers, account 'verification') through a contact channel you already know is real — not a link or phone number provided in the message itself.",
          "Check the actual sending domain and destination link address, not just the display name or logo, since both are simple for an attacker to spoof.",
          "Report suspected phishing using your email provider's built-in reporting tool or CISA's reporting channel, rather than simply deleting it.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do phishing emails actually trick people into giving up passwords?", answer: "By combining a spoofed sender or domain with manufactured urgency or authority to pressure the target into acting quickly, then routing them to a fake login page built to closely resemble the real one, per CISA guidance — whatever is typed there is captured directly by the attacker." },
          { question: "What is the difference between phishing and spoofing?", answer: "Spoofing is the technique of disguising a sender's identity or a website's address to look legitimate; phishing is the broader social engineering scam that typically uses spoofing as one of its tools, alongside urgency and impersonation, to trick the target." },
          { question: "Why do phishing messages always seem to create a sense of urgency?", answer: "Because urgency pressures the target into acting before they'd normally pause to verify the message is real — per CISA guidance, this is a deliberate psychological tactic, not a coincidence." },
          { question: "Can phishing happen over text message or phone calls, not just email?", answer: "Yes — CISA notes the same impersonation-and-urgency mechanism appears in text messages (smishing) and phone calls (vishing), since the underlying trick relies on trust and pressure rather than any single communication channel." },
          { question: "What should you do if you think you entered your credentials on a phishing page?", answer: "Per CISA guidance, change the compromised password immediately on the legitimate site (not through any link from the suspicious message), enable multi-factor authentication if it isn't already on, and report the incident to the organization being impersonated and to CISA." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
