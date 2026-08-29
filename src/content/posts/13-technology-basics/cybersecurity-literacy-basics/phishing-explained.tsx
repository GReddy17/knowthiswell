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
  title: "Phishing Explained: How Fake Messages Trick Real People",
  category: "technology-basics",
  order: 53,
  subtopic: "cybersecurity-literacy-basics",
  tags: ["phishing", "social engineering", "email scams", "cybersecurity basics", "online safety"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "Phishing works by faking a trusted sender and manufacturing urgency, not by exploiting a technical flaw in your device — it targets human trust, not software.",
  summary: "Phishing is a social-engineering technique where an attacker impersonates a trusted sender, in an email, text, or call, to trick someone into revealing sensitive information or clicking a malicious link — it exploits human trust and urgency, not a technical vulnerability in a device.",
  sources: [
    { label: "CISA — Recognize and Report Phishing", url: "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing" },
    { label: "FTC Consumer Advice — How To Recognize and Avoid Phishing Scams", url: "https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams" },
    { label: "CISA — Avoiding Social Engineering and Phishing Attacks", url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks" },
  ],
  seeAlso: [
    "technology-basics/malware-viruses-and-ransomware-explained",
    "technology-basics/two-factor-authentication-explained",
    "technology-basics/what-a-data-breach-actually-means-for-you",
  ],
  glossary: [
    { term: "Phishing", definition: "A social-engineering technique where an attacker impersonates a trusted person or organization, usually by email, text, or phone, to trick a target into revealing information or taking a harmful action." },
    { term: "Social engineering", definition: "The broader category of manipulating a person's trust, emotions, or assumptions to get them to bypass normal caution — phishing is one specific channel this happens through." },
    { term: "Spear phishing", definition: "A phishing attempt personalized to a specific individual or organization using researched details, making it substantially more convincing than a generic mass-sent message." },
    { term: "Domain spoofing", definition: "Registering or displaying a sender address or web address that closely resembles a legitimate organization's real domain, relying on a quick visual read rather than a careful character-by-character check." },
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
          "Phishing works by faking a trusted identity and manufacturing urgency — it's a social-engineering technique aimed at a person's judgment, not a technical exploit against a device.",
          "The core mechanism is a mismatch between what a message claims to be and what it actually is: a sender address that looks close but isn't exact, or a link whose visible text hides a different real destination.",
          "Anyone can be targeted, and being careful doesn't make someone immune forever — well-crafted, personalized phishing attempts (spear phishing) are specifically designed to defeat generic caution.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Imagine someone calling your house pretending to be from your bank, using just enough real detail to sound convincing, and asking you to confirm your account number &quot;to prevent fraud.&quot; A real bank doesn&apos;t need you to read your own account number back to them. <TermLink href="/technology-basics/phishing-explained">Phishing</TermLink> is that same trick moved online — a fake email, text, or website dressed up to look like a company or person you trust, designed to get you to hand over information or click something you otherwise wouldn&apos;t.</div>}
        detailed={<div className="prose-p">Phishing is a form of <TermLink href="/technology-basics/phishing-explained">social engineering</TermLink> that exploits the <strong>trust chain / verification</strong> model by attacking the wrong link in the chain: instead of breaking encryption or exploiting software, it fakes the identity credential a person uses to decide who to trust — a sender name, a logo, a familiar-looking address. It combines this with the <strong>request → response</strong> pattern: the message engineers a request (click here, verify your account, wire this payment) timed with manufactured urgency to short-circuit the careful verification a person would otherwise do. The edge case that raises the stakes considerably: <TermLink href="/technology-basics/phishing-explained">spear phishing</TermLink> uses real, researched details about a specific target — a real coworker&apos;s name, a real recent transaction, a real job title — making the generic advice &quot;look for bad grammar and spelling&quot; far less reliable than it once was, since well-resourced attempts now often have neither.</div>}
      />
      <FootnoteAside>The term &quot;phishing&quot; is a deliberate spelling variant of &quot;fishing&quot; — the analogy being bait cast out broadly, with the attacker relying on only a small percentage of recipients biting for the attempt to be worthwhile.</FootnoteAside>

      <p>
        Once phishing is understood as identity fraud plus manufactured urgency, rather than a technical hack, the practical defense becomes clearer: slow down and independently verify the sender, instead of scanning the message itself for typos.
      </p>

      <QuickCheck
        question="What is the core mechanism that makes a phishing message work, in most cases?"
        options={[
          { text: "It exploits a software security flaw in the recipient's device or email program", correct: false, explanation: "Phishing itself is not a software exploit — it's a social-engineering technique that targets a person's trust and judgment. A malicious attachment might separately exploit software, but the phishing message itself is the deception layer." },
          { text: "It impersonates a trusted sender and manufactures urgency to get the recipient to act before verifying carefully", correct: true, explanation: "Correct. Phishing's core mechanism is identity deception combined with pressure to act quickly, which short-circuits the normal verification a person would do given time to think." },
          { text: "It requires the recipient's device to already be infected with malware", correct: false, explanation: "Phishing typically arrives as the very first contact — a message to an otherwise uninfected device — and is often how an initial infection or credential theft happens in the first place, not a symptom of one that already occurred." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A generic mass-sent phishing email (baseline case)</h3>
      <div className="prose-p">
        An email arrives claiming to be from a well-known delivery company, addressed to &quot;Dear Customer,&quot; warning that a package can&apos;t be delivered unless a small fee is confirmed within 24 hours through a link. The sender address is close to, but not exactly, the real company&apos;s domain. This is a classic broad-net attempt: sent to a huge number of addresses at once, betting that some recipients are actually expecting a package and won&apos;t look closely at the sender address before clicking.
      </div>
      <QuickCheck
        question="An email addressed to 'Dear Customer' claims a package delivery needs urgent fee confirmation via a link, from a sender address that's close to but not exactly a known company's domain. What type of attempt is this most likely?"
        options={[
          { text: "A personalized spear-phishing attempt targeting this specific recipient", correct: false, explanation: "A generic greeting like 'Dear Customer' and a domain that's merely close (not exact) are more typical of a broad, mass-sent attempt than a researched, personalized one." },
          { text: "A broad, mass-sent phishing attempt relying on manufactured urgency and a close-but-not-exact sender domain", correct: true, explanation: "Correct. Generic greetings, urgency, and near-but-not-exact domains are hallmarks of a low-effort, high-volume phishing campaign rather than a targeted one." },
          { text: "A legitimate automated notification, since it references a real company name", correct: false, explanation: "Referencing a real, well-known company name is exactly what phishing attempts do deliberately — the company name being familiar doesn't establish the message's legitimacy on its own." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A researched spear-phishing message to an employee (edge case / variation)</h3>
      <div className="prose-p">
        An employee receives an email that appears to come from their actual manager, referencing a real ongoing project by name, asking them to purchase gift cards for a &quot;client gift&quot; and send the codes right away because the manager is &quot;stuck in back-to-back meetings.&quot; No generic greeting, no obvious spelling errors, no broken logo — because the attacker researched the company&apos;s public information first. This is what makes spear phishing categorically harder to catch than the baseline case: the usual visual red flags are deliberately absent.
      </div>
      <QuickCheck
        question="Why is a targeted spear-phishing email, using a real project name and a real manager's name, generally harder to detect than a generic mass-sent phishing email?"
        options={[
          { text: "Because spear phishing always contains a malicious attachment while generic phishing never does", correct: false, explanation: "Both types can arrive with or without attachments or links — the presence of an attachment isn't what distinguishes them." },
          { text: "Because it uses researched, accurate details specific to the target, which removes the generic red flags (like a vague greeting or an unfamiliar reference) that usually help people spot mass-sent phishing", correct: true, explanation: "Correct. Spear phishing's defining trait is using real, specific information to make the message plausible, which is exactly why generic advice like 'watch for a vague greeting' doesn't reliably catch it." },
          { text: "Because it is sent from the real, verified email address of the person being impersonated", correct: false, explanation: "Spear phishing typically still spoofs or closely mimics the sender's address rather than using the genuinely compromised account, though a compromised real account is also possible in some cases — either way, the defining feature is the researched personalization, not address authenticity." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Verifying a suspicious request through a separate channel (real-world / applied case)</h3>
      <p>
        Someone receives a text message, apparently from a family member, saying they lost their phone and urgently need money sent to a new account. Rather than replying to the number that sent the message, they call the family member directly using a phone number saved from before, on a separate communication channel entirely. This single habit — verifying an urgent, unusual request through a channel the attacker doesn&apos;t control — defeats the large majority of phishing and impersonation attempts regardless of how convincing the original message looked, because it sidesteps the fake sender entirely instead of trying to spot it.
      </p>
      <QuickCheck
        question="Why does contacting someone through a separately known, trusted channel (like a saved phone number) work as a defense against phishing and impersonation, even for a highly convincing message?"
        options={[
          { text: "Because it bypasses the attacker's fake channel entirely, reaching the real person directly instead of relying on spotting subtle clues within the suspicious message itself", correct: true, explanation: "Correct. Independent verification sidesteps the entire deception rather than trying to detect it — which is why it works even against messages with no visible red flags at all." },
          { text: "Because phishing messages can only be sent by text message, never by phone call", correct: false, explanation: "Phishing and impersonation attempts happen over calls, text, email, and other channels alike — the defense works regardless of which channel the fake message arrived through." },
          { text: "Because saved phone numbers are cryptographically verified to belong to the real person", correct: false, explanation: "A saved phone number isn't cryptographically verified — the defense works because it's a channel the attacker doesn't control, not because of any built-in verification technology." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Anatomy of a phishing message"
        type="detail"
        svgSrc="/diagrams/technology-basics-phishing-explained-message-anatomy.svg"
        altText="An annotated diagram of a fake email showing four common warning signs: a sender address close to but not exactly matching a real company's domain, an urgent subject line, a generic greeting instead of the recipient's real name, and a link whose visible text does not match its actual underlying web address."
      />
      <p>
        None of these four signs alone proves a message is fake, and a well-researched spear-phishing attempt may show none of them — which is exactly why independently verifying an unusual or urgent request matters more than scanning for these specific tells.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Judging a message's legitimacy mainly by whether it 'looks professional,' with correct spelling and a real logo.", fix: "Recognize that a convincing appearance proves nothing on its own — well-resourced phishing, especially spear phishing, is often polished and error-free." },
          { mistake: "Clicking a link to 'check if it's real' rather than navigating to the site directly.", fix: "Open a new browser tab and type the organization's known address yourself, or use a saved bookmark, instead of clicking through an unsolicited link." },
          { mistake: "Assuming phishing only happens by email.", fix: "Treat unexpected urgent requests the same way across text messages, phone calls, and social media messages — the mechanism (impersonation plus urgency) is identical regardless of the channel." },
        ]}
      />
      <MisconceptionCallout
        myth="I'm too careful and too experienced with technology to fall for phishing."
        reality={<p>Generic caution defeats generic phishing, but spear phishing is specifically engineered to defeat exactly that kind of confidence — it uses real, researched details that remove the usual red flags entirely. Security-aware people and even security professionals have been successfully targeted by well-crafted spear-phishing attempts. The reliable defense isn&apos;t spotting every fake message on sight; it&apos;s independently verifying unusual or urgent requests through a separate channel before acting on them.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Verify unusual or urgent requests — especially ones involving money or credentials — through a separate, independently known channel before acting.",
          "Hover over (or long-press on mobile) a link to check its real destination before clicking, rather than trusting the visible link text.",
          "Type an organization's address directly into your browser instead of clicking a link in an unsolicited message.",
          "Report suspected phishing to your email provider or employer's IT/security team — reporting helps block the same attempt from reaching others.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is phishing in simple terms?", answer: "Phishing is when an attacker impersonates a trusted person or organization, usually through email, text, or a phone call, to trick someone into revealing information or taking a harmful action, like clicking a malicious link." },
          { question: "How can I tell if an email is phishing?", answer: "Common signs include a sender address that's close to but not exactly a known domain, manufactured urgency, generic greetings, and a link whose visible text doesn't match its real destination — though well-researched spear phishing may show none of these." },
          { question: "What is the difference between phishing and spear phishing?", answer: "Phishing typically refers to broad, generic messages sent to many recipients at once. Spear phishing is personalized to a specific individual or organization using researched real details, making it significantly more convincing and harder to spot." },
          { question: "What should I do if I clicked a phishing link?", answer: "Don't enter any information on the resulting page. If you already entered a password, change it immediately on the real site and enable two-factor authentication if it isn't already on. If you downloaded a file, run a security scan and consider disconnecting the device from the network until it's checked." },
          { question: "Can phishing happen over text message or phone calls, not just email?", answer: "Yes. The same impersonation-plus-urgency mechanism applies across email, text messages (sometimes called smishing), and phone calls (sometimes called vishing) — the channel differs, but the underlying deception is the same." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
