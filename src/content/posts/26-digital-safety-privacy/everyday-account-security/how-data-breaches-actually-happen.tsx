import React from 'react';
import { PostFrontmatter, QuizBankItem } from '@/types/post';
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
  title: "How Data Breaches Actually Happen",
  category: "digital-safety-privacy",
  order: 5,
  subtopic: "everyday-account-security",
  tags: ["data breach", "stolen credentials", "misconfiguration", "credit freeze", "cybersecurity"],
  date: "2026-09-26",
  updated: "2026-09-26",
  youtubeShort: false, youtubeLong: false,
  seoScore: 81, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-09-26",
  excerpt: "Most data breaches aren't movie-style hacks. They start with a stolen password, a tricked employee, an unpatched system, or a storage bucket left open, and they are often discovered weeks or months later.",
  summary: "A data breach happens when someone gets access to information they shouldn't have and it's exposed or taken. Verizon's annual Data Breach Investigations Report has found year after year that the most common ways in are stolen or reused credentials, phishing and other tricks aimed at people, exploited vulnerabilities in unpatched systems, and simple errors such as misconfigured cloud storage, with vendors and other third parties an increasingly common path. After getting in, attackers typically move to more valuable systems, locate data, and copy it out, often long before anyone notices. The FTC's breach-response guidance tells businesses to secure systems, fix the vulnerabilities, and notify affected people as their state's laws require; every U.S. state has a breach notification law. For individuals, the practical defenses are unique passwords, multi-factor authentication, and a free credit freeze at the three bureaus, with IdentityTheft.gov as the federal recovery resource if data is misused.",
  sources: [
    { label: "Verizon — Data Breach Investigations Report (annual)", url: "https://www.verizon.com/business/resources/reports/dbir/" },
    { label: "Federal Trade Commission — Data Breach Response: A Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business" },
    { label: "FTC Consumer Advice — What To Know About Credit Freezes and Fraud Alerts", url: "https://consumer.ftc.gov/articles/what-know-about-credit-freezes-fraud-alerts" },
    { label: "IdentityTheft.gov (Federal Trade Commission)", url: "https://www.identitytheft.gov/" },
    { label: "CISA — Secure Our World", url: "https://www.cisa.gov/secure-our-world" },
  ],
  seeAlso: [
    "digital-safety-privacy/how-ransomware-actually-infects-a-device",
    "technology-basics/what-a-data-breach-actually-means-for-you",
    "digital-safety-privacy/how-phishing-scams-actually-work",
    "digital-safety-privacy/how-password-managers-actually-protect-you",
    "digital-safety-privacy/what-two-factor-authentication-actually-does",
    "personal-finance-basics/how-credit-reports-work",
    "digital-safety-privacy/how-identity-theft-actually-starts",
  ],
  glossary: [
    { term: "Data breach", definition: "An incident where information is accessed or taken by someone who isn't authorized to have it, whether through an attack or an accident." },
    { term: "Credential stuffing", definition: "An attack that takes usernames and passwords leaked from one site and tries them automatically on many other sites, betting that people reuse passwords." },
    { term: "Misconfiguration", definition: "A setting left wrong, such as a cloud storage folder set to public, that exposes data without any hacking at all." },
    { term: "Exfiltration", definition: "Copying data out of a victim's systems to a place the attacker controls." },
    { term: "Credit freeze", definition: "A free block, set at each of the three U.S. credit bureaus, that stops new lenders from pulling your credit report, making it much harder to open accounts in your name." },
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

export const quiz: QuizBankItem[] = [
  {"question": "Which of these is one of the most common ways attackers get into systems, according to Verizon's breach reports?", "difficulty": "easy", "options": [{"text": "Using stolen or reused passwords", "correct": true, "explanation": "Stolen credentials show up year after year as a leading way in."}, {"text": "Breaking encryption by brute force", "correct": false, "explanation": "Modern encryption is rarely broken directly. Attackers go around it."}, {"text": "Physically stealing data-center servers", "correct": false, "explanation": "Physical theft happens but is far less common than credential misuse."}]},
  {"question": "A company leaves a cloud storage folder of customer files set to 'public.' Someone finds and downloads it. What kind of breach is this?", "difficulty": "easy", "options": [{"text": "A misconfiguration, with no hacking needed", "correct": true, "explanation": "The data was simply left exposed by a wrong setting."}, {"text": "A ransomware attack", "correct": false, "explanation": "Ransomware encrypts data for extortion. Nothing was encrypted here."}, {"text": "Not a breach, because no password was cracked", "correct": false, "explanation": "Unauthorized access to exposed data is still a breach."}]},
  {"question": "Why does a breach at one website put your other accounts at risk?", "difficulty": "medium", "options": [{"text": "Attackers try the leaked password on other sites, which works if you reused it", "correct": true, "explanation": "That's credential stuffing."}, {"text": "All websites share a single password database", "correct": false, "explanation": "They don't. Reuse is what connects them."}, {"text": "Breaches automatically spread like a virus between sites", "correct": false, "explanation": "The link is the reused password, not a spreading infection."}]},
  {"question": "What does a credit freeze do?", "difficulty": "medium", "options": [{"text": "Blocks new lenders from pulling your credit report, making new-account fraud harder", "correct": true, "explanation": "Per the FTC, it's free and you can lift it temporarily when you apply for credit."}, {"text": "Locks all your existing bank accounts", "correct": false, "explanation": "Existing accounts keep working normally."}, {"text": "Lowers your credit score", "correct": false, "explanation": "A freeze doesn't affect your score."}]},
  {"question": "How many U.S. states have data breach notification laws?", "difficulty": "hard", "options": [{"text": "All 50", "correct": true, "explanation": "Every state has one, though details like deadlines vary."}, {"text": "Only about half", "correct": false, "explanation": "Coverage has been nationwide since 2018."}, {"text": "None; only federal law applies", "correct": false, "explanation": "State laws are the main notification rules for most breaches."}]},
  {"question": "Which part of a typical breach often takes the longest?", "difficulty": "hard", "options": [{"text": "The time before anyone discovers it", "correct": true, "explanation": "Attackers can sit undetected for weeks or months, which is why notification letters often describe events long past."}, {"text": "The initial login", "correct": false, "explanation": "Logging in with a stolen password takes seconds."}, {"text": "Downloading a single file", "correct": false, "explanation": "The copying step is usually quick compared with the time to detection."}]},
  {"question": "Where does the FTC direct people whose breached data is being misused?", "difficulty": "easy", "options": [{"text": "IdentityTheft.gov", "correct": true, "explanation": "It's the federal site for reporting identity theft and getting a recovery plan."}, {"text": "The company's social media page", "correct": false, "explanation": "That isn't an official recovery process."}, {"text": "Nowhere; nothing can be done", "correct": false, "explanation": "There's a formal recovery process."}]},
  {"question": "Which single step most reduces the damage if your password leaks in a breach?", "difficulty": "medium", "options": [{"text": "Having multi-factor authentication turned on for that account", "correct": true, "explanation": "A leaked password alone won't get past a second factor."}, {"text": "Making your password longer after the breach", "correct": false, "explanation": "Changing it helps, but a second factor protects you even before you know about the leak."}, {"text": "Deleting your browser history", "correct": false, "explanation": "Browser history has nothing to do with a server-side breach."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Most breaches start simply: a stolen or reused password, a tricked employee, an unpatched system, or data left open by a wrong setting.",
          "After getting in, attackers look around, find valuable data and copy it out, often weeks or months before anyone notices.",
          "You can't stop a company being breached, but unique passwords, multi-factor authentication, and a free credit freeze sharply limit the harm to you.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of a company&apos;s data like valuables in an office building. Movies show thieves drilling through the vault. In real life, most get in with a copied key card (a stolen password), by talking the receptionist into letting them in (phishing), through a window nobody fixed (an unpatched system), or because someone left the back door propped open (a misconfigured setting). Once inside, they walk the halls, find the file room, and quietly carry boxes out. Often nobody checks the cameras until months later. That&apos;s why breach notices so often describe something that happened long before you got the letter.</div>}
        detailed={<div className="prose-p">Breaches usually follow a chain. <strong>Initial access</strong>: Verizon&apos;s Data Breach Investigations Report, built from thousands of confirmed incidents each year, consistently ranks stolen credentials, <TermLink href="/digital-safety-privacy/how-phishing-scams-actually-work">phishing</TermLink> and other social engineering, and exploitation of known vulnerabilities as leading entry points, with human error such as misconfigured cloud storage behind a large share of incidents. Third-party vendors with access to a company&apos;s systems are a growing path in. <strong>Escalation and lateral movement</strong>: a foothold on one account or laptop is used to gain higher privileges and reach systems that hold the valuable data. <strong>Collection and exfiltration</strong>: data is found, bundled and copied out, and in ransomware cases it&apos;s often encrypted too, with a threat to publish it. <strong>Discovery</strong>: detection frequently comes late, sometimes from outside, when stolen data shows up for sale or a partner notices fraud. The FTC&apos;s business guide then calls for securing systems, fixing the hole, and notifying people under applicable law. All 50 states have breach-notification statutes, with different triggers and deadlines. The edge case: a breach doesn&apos;t always mean stolen data was used. Whether you&apos;re at real risk depends on what was taken. An email address is a phishing risk. A Social Security number plus birth date is a new-account fraud risk.</div>}
      />
      <FootnoteAside>Exact percentages in breach reports change every year, so this page describes the patterns that keep showing up rather than a single year&apos;s numbers. The annual report itself has the current figures.</FootnoteAside>

      <p>For what to do after a specific breach notice, see <TermLink href="/technology-basics/what-a-data-breach-actually-means-for-you">what a data breach actually means for you</TermLink>. This page is about how breaches happen in the first place. Some intrusions end in encryption and extortion instead of quiet data theft; <TermLink href="/digital-safety-privacy/how-ransomware-actually-infects-a-device">how ransomware actually infects a device</TermLink> follows that path.</p>

      <QuickCheck
        question="A shopping site you used is breached and passwords leak. A week later, someone logs into your email. What most likely happened?"
        options={[
          { text: "You used the same password for both, and attackers tried it on your email", correct: true, explanation: "Correct. That's credential stuffing, and it's why one breach can spread to many accounts." },
          { text: "The shopping site's servers are connected to your email provider", correct: false, explanation: "They aren't. The reused password is the link." },
          { text: "The attackers broke your email provider's encryption", correct: false, explanation: "Breaking encryption is rare. Trying leaked passwords is cheap and common." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The phished employee (baseline case)</h3>
      <div className="prose-p">An accounts clerk gets an email that looks like it&apos;s from IT: &quot;Your password expires today, sign in here.&quot; The page is fake and captures the password. The company has no multi-factor authentication on remote access, so the attacker logs in as the clerk, finds a shared drive with customer records, and copies it out over a weekend. The breach is found three months later when the data appears for sale. Every step used ordinary access, with no &quot;hacking&quot; in the movie sense.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The open storage folder (edge case: no attacker skill needed)</h3>
      <div className="prose-p">A developer sets a cloud storage folder to public while testing and forgets to change it back. It holds a backup of a customer database. Automated scanners that search the internet for open storage find it within days. Nobody broke in, because nothing was locked. This is still a reportable breach under most state laws, and it&apos;s the reason &quot;errors&quot; show up as a major category in breach reports.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Your response to a breach letter (real-world use)</h3>
      <div className="prose-p">You get a notice that a clinic&apos;s billing vendor was breached and your name, birth date and Social Security number were exposed. What was taken decides the response. A Social Security number is a new-account fraud risk, so you place a free credit freeze at Equifax, Experian and TransUnion, as the FTC recommends. If the same password was used anywhere, you change it there and turn on multi-factor authentication. If you later see accounts you didn&apos;t open, you report it at IdentityTheft.gov to get a recovery plan.</div>

      <QuickCheck
        question="A breach notice says only your email address and name were exposed. What's the most realistic risk?"
        options={[
          { text: "More convincing phishing emails that use your name", correct: true, explanation: "Correct. An email and name mainly make targeted phishing easier. Be wary of messages that reference the breach itself." },
          { text: "Someone opening a credit card in your name right away", correct: false, explanation: "Opening credit usually needs more, like a Social Security number and birth date." },
          { text: "Your bank account being emptied automatically", correct: false, explanation: "An email address alone doesn't give access to your bank." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The usual path of a data breach"
        type="flow"
        svgSrc="/diagrams/digital-safety-privacy-how-data-breaches-actually-happen-flow.svg"
        altText="A five-step flow. 1: Initial access through a stolen password, phishing, an unpatched flaw, or an open setting. 2: The attacker gains more privileges and moves to other systems. 3: Valuable data is located and copied out. 4: The breach is often discovered weeks or months later. 5: The company fixes the hole and notifies affected people under state law."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Reusing one password across many sites.", fix: "Use a password manager so every account has a unique password. Then one breach stays one breach." },
          { mistake: "Ignoring a breach notice because nothing bad has happened yet.", fix: "Stolen data is often used months later. Act on what was exposed: change passwords, freeze credit if your Social Security number was taken." },
          { mistake: "Clicking links in emails that claim to be about the breach.", fix: "Scammers copy real breach news. Go to the company's site or the official notice address directly instead." },
        ]}
      />
      <MisconceptionCallout
        myth="Data breaches are mostly the work of elite hackers breaking through advanced defenses."
        reality={<p>Year after year, Verizon&apos;s breach reports show that the most common ways in are much more ordinary: passwords stolen or reused from earlier leaks, people tricked by phishing, known flaws that were never patched, and simple mistakes like storage left open to the internet. That&apos;s actually good news. Ordinary habits (unique passwords, multi-factor authentication, prompt updates) block a large share of real attacks.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Move your accounts to a password manager so no password is reused.",
          "Turn on multi-factor authentication for email, banking and any account that can reset other accounts.",
          "Place a free credit freeze at Equifax, Experian and TransUnion; lift it temporarily when you apply for credit.",
          "Keep phones, computers and routers updated so known flaws get patched.",
          "If breached data is misused, report it at IdentityTheft.gov to get a step-by-step recovery plan.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do most data breaches happen?", answer: "Mostly through stolen or reused passwords, phishing, unpatched software flaws, and mistakes like misconfigured cloud storage, according to Verizon's annual breach reports. Vendors with access are another common path." },
          { question: "Why do companies take so long to announce a breach?", answer: "Breaches are often discovered weeks or months after they start, and the company then has to investigate what was taken and whose data it was before notifying people under state law." },
          { question: "What should I do if my data was in a breach?", answer: "Base it on what was exposed. Change any reused passwords and turn on multi-factor authentication. If your Social Security number was exposed, place a free credit freeze. Report misuse at IdentityTheft.gov." },
          { question: "Is a credit freeze free?", answer: "Yes. Under federal law, placing and lifting a freeze at each of the three credit bureaus is free, per the FTC." },
          { question: "Is a data breach the same as a hack?", answer: "Not always. A breach is any unauthorized access to data. Some are hacks, but others come from an employee mistake, like leaving a database open to the internet." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
