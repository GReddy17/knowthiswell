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
  title: "How Password Managers Actually Protect You",
  category: "digital-safety-privacy",
  order: 1,
  subtopic: "everyday-account-security",
  tags: ["password manager", "digital security", "password safety", "account security"],
  date: "2026-09-20",
  updated: "2026-09-20",
  lastReviewed: "2026-09-20",
  excerpt: "A password manager's real value isn't convenience — it's that it lets you use a unique, long password on every account, which stops a single breach from cascading into every other account you own.",
  summary: "A password manager stores encrypted credentials behind one master password and generates unique, high-entropy passwords for every account, which closes the single biggest real-world password risk — reuse — since a password manager makes a genuinely unique password for every site just as easy as typing a memorized one.",
  sources: [
    { label: "CISA — Use Strong Passwords", url: "https://www.cisa.gov/secure-our-world/use-strong-passwords" },
    { label: "NIST Special Publication 800-63B — Digital Identity Guidelines", url: "https://pages.nist.gov/800-63-3/" },
  ],
  seeAlso: [
    "digital-safety-privacy/what-two-factor-authentication-actually-does",
    "digital-safety-privacy/how-data-breaches-actually-happen",
  ],
  glossary: [
    { term: "Password manager", definition: "Software that generates, encrypts, and stores unique passwords for every account, unlocked by a single master password so the user never has to memorize the individual passwords." },
    { term: "Credential stuffing", definition: "An attack where a list of usernames and passwords leaked from one breach is automatically tried against many other sites, exploiting people who reuse the same password across accounts." },
    { term: "Master password", definition: "The single password used to unlock a password manager's encrypted vault — the one password that still needs to be memorized and kept strong." },
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
          "The core benefit of a password manager isn&apos;t remembering fewer passwords — it&apos;s making a unique password on every account practical, which stops one breached site from exposing your other accounts too.",
          "Password managers encrypt your stored credentials locally before syncing, so even the company running the service generally can&apos;t read your actual passwords.",
          "Losing or forgetting your single master password is the real remaining risk — most managers offer a recovery process, but it&apos;s deliberately harder than a normal password reset, by design.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A password manager stores a long, random, unique password for every account you have, locked behind one master password you actually remember. Instead of reusing &quot;the same password with a number at the end&quot; everywhere — the single most common real-world security mistake — every site gets its own password you never have to think about.</div>}
        detailed={<div className="prose-p">The real threat a password manager defends against is <TermLink href="/digital-safety-privacy/how-password-managers-actually-protect-you">credential stuffing</TermLink>: when one site is breached and usernames/passwords leak, attackers automatically try that same combination on hundreds of other sites, because so many people reuse passwords. A unique password per site makes that entire attack class fail immediately — a breach at one site simply doesn&apos;t give an attacker anything usable anywhere else. Per NIST SP 800-63B, length matters more than complexity rules (a long passphrase beats &quot;P@ssw0rd1!&quot;), which is exactly what a manager&apos;s generator optimizes for automatically.</div>}
      />
      <FootnoteAside>Most password managers use zero-knowledge encryption — your vault is encrypted and decrypted on your own device using your master password, so the company hosting the sync service never has access to the unencrypted contents, even if their servers were breached.</FootnoteAside>

      <p>This is why security guidance consistently ranks a password manager above almost any other single step a person can take — it removes the human tendency to reuse passwords, which is the root cause behind most account-takeover incidents.</p>

      <QuickCheck
        question="A major retailer's website is breached and usernames/passwords leak. Why does this matter much less for someone using a password manager than for someone who reuses one password everywhere?"
        options={[
          { text: "Password managers make websites immune to being breached in the first place", correct: false, explanation: "A password manager can't prevent a website you use from being breached — that's outside your control. What it prevents is that breach from spreading to your other accounts." },
          { text: "With a unique password per site, the leaked retailer password isn't valid anywhere else, so attackers running credential-stuffing attacks against other sites gain nothing", correct: true, explanation: "Correct. This is exactly the attack a password manager defeats — credential stuffing only works when the same password is reused across multiple accounts." },
          { text: "It doesn't actually matter either way, since breaches happen regardless", correct: false, explanation: "It matters enormously — someone who reused that password on their email or banking site now has those accounts at direct risk, while a unique-password user's other accounts stay unaffected." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Setting up a new account (baseline case)</h3>
      <div className="prose-p">When signing up for a new site, the password manager&apos;s browser extension offers to generate a long random password on the spot and save it — the user never sees, types, or needs to remember the actual characters, which is what makes uniqueness practical at scale across dozens of accounts.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Forgetting the master password (edge case / variation)</h3>
      <div className="prose-p">Because the vault is encrypted with the master password itself, most providers genuinely cannot decrypt it without that password — recovery typically relies on a pre-saved recovery key or emergency-access contact set up in advance, not a simple &quot;forgot password&quot; email link, which is precisely why storing that recovery key somewhere safe when first setting up the manager matters.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A phishing site mimicking a real login page (real-world / applied case)</h3>
      <div className="prose-p">Password managers typically autofill credentials only on the exact domain they were saved for. If a phishing page uses a look-alike domain, the manager simply won&apos;t offer to autofill anything — a subtle but genuinely useful side benefit, since a human eye can be fooled by a convincing fake page in a way the manager&apos;s domain check generally isn&apos;t.</div>

      <QuickCheck
        question="Why might a password manager's refusal to autofill on a login page actually be a useful warning sign?"
        options={[
          { text: "Password managers autofill based on exact saved domain matches — if it won't autofill, the current page's domain may not match the real site you saved credentials for, a sign it could be a phishing look-alike", correct: true, explanation: "Correct. This domain-matching behavior is a real, practical anti-phishing benefit, catching a mismatch a person scanning quickly might miss." },
          { text: "It always means the password manager itself is broken and needs to be reinstalled", correct: false, explanation: "A one-off autofill failure is far more likely to be a domain mismatch (or a site's non-standard login form) than the software being broken." },
          { text: "It has no security meaning and is just a random inconvenience", correct: false, explanation: "It's not random — domain-based autofill matching is a deliberate design choice that happens to double as phishing protection." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Why one reused password puts every account at risk, and a manager fixes it"
        type="comparison"
        svgSrc="/diagrams/digital-safety-privacy-how-password-managers-actually-protect-you-comparison.svg"
        altText="A comparison diagram showing one reused password across five accounts, where a single breach on one account compromises all five, versus five unique passwords generated and stored by a password manager, where a breach on one account leaves the other four unaffected."
      />
      <p>The difference isn&apos;t about password strength alone — it&apos;s about containment. A breach anywhere should only ever be a problem for that one account, and uniqueness is what makes that true.</p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using a weak, easy-to-guess master password since it feels like &quot;just one more password.&quot;", fix: "Make the master password a long, memorable passphrase — it's the single point protecting everything else, so it deserves real strength and should never be reused elsewhere." },
          { mistake: "Never setting up account recovery options before they're needed.", fix: "Set up the provider's recovery key or emergency-access feature immediately after creating the vault, while it's easy, not after being locked out." },
          { mistake: "Assuming a password manager alone makes an account unhackable.", fix: "Pair it with two-factor authentication on important accounts — a strong unique password and 2FA address different attack types, not the same one twice." },
        ]}
      />
      <MisconceptionCallout
        myth="Storing all your passwords in one place is riskier than keeping them scattered in your memory or a notes app."
        reality={<p>A reputable password manager encrypts the vault so strongly that, per NIST guidance on credential storage, the practical risk of a properly implemented manager being broken into is far lower than the near-certain risk of password reuse across dozens of sites — &quot;scattered in memory&quot; in practice means a handful of reused, guessable passwords, which is the actual common failure mode a manager eliminates.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Set up a password manager and let it generate a unique password for every new account going forward.",
          "Choose a long, memorable master password you've never used anywhere else, and set it up immediately.",
          "Save the provider's recovery key somewhere safe as soon as the vault is created, not after a lockout.",
          "Turn on two-factor authentication for your most important accounts (email, banking) in addition to using the manager.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is it actually safe to store all my passwords in one app?", answer: "For a reputable manager using strong encryption, yes — the vault is encrypted with your master password before it ever leaves your device, which is generally far safer in practice than reusing a small set of memorable passwords across many accounts." },
          { question: "What happens if the password manager company itself gets breached?", answer: "With zero-knowledge encryption, the company only stores encrypted data it cannot read — attackers who steal the encrypted vault still need your master password to unlock anything, which is why the master password's own strength matters so much." },
          { question: "Do I still need two-factor authentication if I use a password manager?", answer: "Yes — a strong unique password and two-factor authentication protect against different things, and using both is standard security guidance for important accounts like email and banking." },
          { question: "What if I forget my master password?", answer: "Recovery depends on the provider's specific process, typically a pre-saved recovery key — this is deliberately harder than a normal reset since the provider can't read your vault, which is why setting up recovery options in advance matters." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
