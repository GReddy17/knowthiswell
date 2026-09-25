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
  title: "What a VPN Actually Protects You From",
  category: "digital-safety-privacy",
  order: 4,
  subtopic: "everyday-account-security",
  tags: ["vpn", "privacy", "public wi-fi", "encryption", "ip address"],
  date: "2026-09-25",
  updated: "2026-09-25",
  lastReviewed: "2026-09-25",
  excerpt: "A VPN hides your traffic from the local network and your internet provider and masks your IP address. It doesn't stop phishing, malware, or tracking by accounts you're logged into, and it shifts your trust to the VPN company.",
  summary: "A virtual private network (VPN) creates an encrypted tunnel between your device and a VPN server, so the local network (such as public Wi-Fi) and your internet service provider see only encrypted traffic going to the VPN, and the websites you visit see the VPN server's IP address instead of yours. Per the FTC and the Electronic Frontier Foundation, a VPN does not protect against phishing, malware, or tracking through logged-in accounts, cookies, and browser fingerprinting, and it moves visibility of your traffic to the VPN provider, which makes choosing a trustworthy provider part of the protection itself. Because most websites already use HTTPS encryption, a VPN's main added value today is hiding which sites you visit from the network and ISP, and changing your apparent location.",
  sources: [
    { label: "Federal Trade Commission — Are Public Wi-Fi Networks Safe? What You Need To Know", url: "https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know" },
    { label: "Electronic Frontier Foundation — Surveillance Self-Defense: Choosing the VPN That's Right for You", url: "https://ssd.eff.org/module/choosing-vpn-thats-right-you" },
    { label: "NIST Special Publication 800-77 Rev. 1 — Guide to IPsec VPNs", url: "https://csrc.nist.gov/pubs/sp/800/77/r1/final" },
  ],
  seeAlso: [
    "technology-basics/what-a-vpn-actually-does",
    "technology-basics/why-public-wifi-is-riskier",
    "digital-safety-privacy/how-phishing-scams-actually-work",
    "digital-safety-privacy/how-antivirus-software-actually-detects-threats",
    "technology-basics/end-to-end-encryption-explained",
  ],
  glossary: [
    { term: "VPN (virtual private network)", definition: "A service that encrypts internet traffic between your device and a remote server, then sends it on to the wider internet from that server." },
    { term: "IP address", definition: "The numeric address that identifies a device or network on the internet. Websites see it on every request, and it can reveal an approximate location." },
    { term: "HTTPS", definition: "The encrypted version of the web protocol, shown by the padlock in a browser. It protects the content of traffic between your browser and a website, with or without a VPN." },
    { term: "ISP (internet service provider)", definition: "The company that connects you to the internet, such as a home broadband or mobile carrier. Without a VPN it can see which sites you connect to." },
    { term: "Browser fingerprinting", definition: "Identifying a device by combining details like screen size, fonts, and browser settings. It works regardless of IP address, so a VPN doesn't block it." },
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
  {"question": "What does a VPN encrypt?", "difficulty": "easy", "options": [{"text": "Traffic between your device and the VPN server", "correct": true, "explanation": "After the VPN server, traffic travels to the website like any other traffic (usually protected by HTTPS)."}, {"text": "Everything from your device all the way to every website, end to end", "correct": false, "explanation": "The VPN tunnel ends at the VPN server."}, {"text": "The files stored on your hard drive", "correct": false, "explanation": "That's disk encryption, a different tool."}]},
  {"question": "Which IP address does a website see when you browse through a VPN?", "difficulty": "easy", "options": [{"text": "The VPN server's IP address", "correct": true, "explanation": "That's why a VPN can change your apparent location."}, {"text": "Your home IP address", "correct": false, "explanation": "The VPN replaces it with the server's address."}, {"text": "No IP address at all", "correct": false, "explanation": "Every connection has one; it's just the VPN's."}]},
  {"question": "Does a VPN stop you from entering your password on a phishing site?", "difficulty": "easy", "options": [{"text": "No, the VPN will happily carry you to the fake site", "correct": true, "explanation": "Phishing tricks you, not the network. A VPN doesn't judge where you go."}, {"text": "Yes, VPNs block all fake websites", "correct": false, "explanation": "Some VPN apps add blocklists, but the VPN function itself doesn't."}, {"text": "Yes, because the traffic is encrypted", "correct": false, "explanation": "Encryption hides traffic from others; it doesn't make the destination honest."}]},
  {"question": "Why does a VPN add less protection than it did 15 years ago?", "difficulty": "medium", "options": [{"text": "Most websites now use HTTPS, which already encrypts page content", "correct": true, "explanation": "The FTC notes this: HTTPS protects what you send to a site even on public Wi-Fi."}, {"text": "VPN encryption has been broken", "correct": false, "explanation": "Well-configured VPN encryption is still strong."}, {"text": "Public Wi-Fi no longer exists", "correct": false, "explanation": "It does; HTTPS is what changed the risk."}]},
  {"question": "Who can see your browsing destinations when you use a VPN?", "difficulty": "medium", "options": [{"text": "The VPN provider", "correct": true, "explanation": "EFF's guidance: you're shifting trust from your ISP to the VPN company."}, {"text": "Nobody at all", "correct": false, "explanation": "The VPN server has to know where to send your traffic."}, {"text": "Only your ISP", "correct": false, "explanation": "The ISP sees only encrypted traffic going to the VPN."}]},
  {"question": "If you're logged into a big platform account, does a VPN stop that platform from tracking your activity on it?", "difficulty": "medium", "options": [{"text": "No, your login identifies you no matter which IP you use", "correct": true, "explanation": "Accounts, cookies and fingerprints work independently of your IP address."}, {"text": "Yes, because your IP address is hidden", "correct": false, "explanation": "The login itself says who you are."}, {"text": "Only on mobile", "correct": false, "explanation": "Device type doesn't change this."}]},
  {"question": "Which of these is a realistic reason to use a VPN?", "difficulty": "easy", "options": [{"text": "Hiding which sites you visit from a hotel or cafe network", "correct": true, "explanation": "This is the VPN's core strength."}, {"text": "Removing malware already on your laptop", "correct": false, "explanation": "That's an antivirus job."}, {"text": "Making yourself fully anonymous online", "correct": false, "explanation": "EFF is clear that VPNs don't provide anonymity on their own."}]},
  {"question": "Why is a \"free\" VPN app a particular risk?", "difficulty": "hard", "options": [{"text": "It sees all your traffic, and it has to make money somehow, sometimes by collecting or selling data", "correct": true, "explanation": "The FTC has warned about apps that don't do what their privacy claims say."}, {"text": "Free VPNs can't encrypt anything", "correct": false, "explanation": "Many do encrypt; the question is who is running the server and why."}, {"text": "They are illegal in all countries", "correct": false, "explanation": "VPNs are legal in most countries."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "A VPN encrypts your traffic from your device to the VPN server, so the local Wi-Fi network and your internet provider can't see which sites you visit.",
          "Websites see the VPN server's IP address instead of yours, which hides your approximate location.",
          "It does not stop phishing, malware, or tracking through logged-in accounts, cookies, and fingerprinting, and the VPN company itself can now see your traffic.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Picture your internet traffic as mail. Without a VPN, the cafe Wi-Fi and your internet company can read the address on every envelope, meaning they can see which websites you&apos;re visiting. A VPN puts all your envelopes inside one locked pouch addressed to the VPN company. The cafe and your internet provider only see a locked pouch going to one place. The VPN company opens it and forwards each envelope to its real destination, so websites see the VPN&apos;s address instead of yours. That&apos;s genuinely useful. But notice what it doesn&apos;t do: it doesn&apos;t check whether a letter you&apos;re sending is going to a scammer, and the VPN company can see every address on every envelope.</div>}
        detailed={<div className="prose-p">A VPN establishes an encrypted tunnel (commonly using protocols like WireGuard, OpenVPN, or IPsec, the last covered in NIST SP 800-77) between the client and a VPN server. Two things follow. First, observers on the path before the server, including the local network and the ISP, see only encrypted packets to the VPN&apos;s address, not the destination domains (provided DNS lookups also go through the tunnel). Second, destination servers see the VPN server&apos;s IP address, not yours. The FTC points out that most sites now use HTTPS, which already encrypts content between the browser and the site, so on <TermLink href="/technology-basics/why-public-wifi-is-riskier">public Wi-Fi</TermLink> the VPN&apos;s main added value is concealing <em>which</em> sites you contact rather than what you send them. EFF&apos;s Surveillance Self-Defense guide stresses the limits: a VPN doesn&apos;t make you anonymous, doesn&apos;t block tracking by accounts you&apos;re signed into, cookies, or device fingerprinting, and it concentrates visibility at the VPN provider, whose logging practices and jurisdiction then become your privacy.</div>}
      />
      <FootnoteAside>Businesses have used VPNs for decades for a different purpose: letting remote employees reach the private company network securely. The consumer &quot;privacy VPN&quot; is the same technology aimed at a different problem, which partly explains the gap between marketing claims and what it actually does.</FootnoteAside>

      <p>If you want the plumbing of how the tunnel is built, see <TermLink href="/technology-basics/what-a-vpn-actually-does">what a VPN actually does</TermLink> in Technology Basics. This post is about the practical question: which threats it covers and which ones it leaves wide open, like <TermLink href="/digital-safety-privacy/how-phishing-scams-actually-work">phishing</TermLink> and malware, which need <TermLink href="/digital-safety-privacy/how-antivirus-software-actually-detects-threats">other defenses</TermLink>.</p>

      <QuickCheck
        question="You connect to airport Wi-Fi with a VPN on and visit your bank's site. Who can see that you visited your bank?"
        options={[
          { text: "The VPN provider can; the airport network can't", correct: true, explanation: "Correct. The airport sees encrypted traffic to the VPN. The VPN server forwards it to the bank, so it knows the destination." },
          { text: "Nobody can see it", correct: false, explanation: "The VPN server has to know where to forward your traffic, so the provider can see it." },
          { text: "The airport network can, because the VPN only hides your IP", correct: false, explanation: "The VPN tunnel hides destinations from the local network too (as long as DNS goes through the tunnel)." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Coffee shop Wi-Fi (baseline case)</h3>
      <div className="prose-p">On an open cafe network, anyone running the network, or snooping on it, can log which domains your laptop contacts. With HTTPS, they can&apos;t read your messages or passwords, but they can see &quot;this device visited a health clinic&apos;s site and a job board.&quot; Turn on a trustworthy VPN, and all they see is encrypted traffic to one VPN server. This is the scenario the FTC&apos;s public Wi-Fi guidance has in mind, and it&apos;s where a VPN earns its keep.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The &quot;your package is delayed&quot; text (what it misses)</h3>
      <div className="prose-p">With the VPN on, you tap a link in a fake delivery text and enter your card number on a lookalike page. The VPN encrypts that session perfectly, all the way to the scammer. It protected the connection, not the decision. Stopping this takes checking the real sender and site, not network encryption.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Shopping while logged in (tracking it doesn&apos;t touch)</h3>
      <div className="prose-p">You browse an online store with a VPN set to another city. Your IP address now looks like that city, but you&apos;re signed into your account, your browser carries the store&apos;s cookies, and your device has a recognizable fingerprint. The store knows exactly who you are. EFF lists this as one of the main misunderstandings: IP address is only one of many ways you&apos;re identified online.</div>

      <QuickCheck
        question="Which of these threats does a VPN meaningfully reduce?"
        options={[
          { text: "A snoop on public Wi-Fi seeing which sites you visit", correct: true, explanation: "Correct. Hiding destinations from the local network is the VPN's core job." },
          { text: "A malicious email attachment infecting your laptop", correct: false, explanation: "Malware arrives inside traffic you chose to receive. The VPN just carries it." },
          { text: "A social media site building an ad profile from your logged-in activity", correct: false, explanation: "Your login identifies you regardless of your IP address." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="What a VPN covers, and what it leaves open"
        type="comparison"
        svgSrc="/diagrams/digital-safety-privacy-what-a-vpn-actually-protects-you-from-comparison.svg"
        altText="A two-column comparison. A VPN does protect: traffic on public Wi-Fi, browsing hidden from your internet provider, and your IP address hidden from sites. A VPN does not protect against: phishing pages and malware, tracking by logged-in accounts and fingerprints, and what the VPN provider itself can see."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating a VPN as a complete security tool that makes you safe from hackers.", fix: "Use it for what it does (network privacy) and keep the basics that stop most real attacks: updates, a password manager, and two-factor authentication." },
          { mistake: "Picking a free VPN app with no clear business model.", fix: "Remember the provider sees your traffic. Choose one with a clear privacy policy, an independent audit, and a way it actually earns money, per EFF's guidance." },
          { mistake: "Believing a VPN makes you anonymous.", fix: "Accounts, cookies, and fingerprints still identify you. Anonymity needs very different tools and habits." },
        ]}
      />
      <MisconceptionCallout
        myth="With a VPN on, nobody can see what you do online."
        reality={<p>A VPN changes <em>who</em> can see your traffic rather than making it invisible. Your local network and ISP lose visibility; the VPN provider gains it. Sites you log into still know it&apos;s you, and trackers can still recognize your browser. The EFF describes a VPN as a tool that protects against specific observers on the network, not as a cloak of anonymity.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Decide which observer you want to hide from (public Wi-Fi, your ISP, or site location checks). If none apply to you, you may not need a VPN at all.",
          "If you use one, pick a provider with an independent no-logs audit and a clear paid business model rather than an unknown free app.",
          "Check the padlock (HTTPS) on any site where you type a password or card number, VPN or not.",
          "Keep the higher-impact basics in place: software updates, unique passwords, and two-factor authentication.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does a VPN actually protect you from?", answer: "Mainly from the local network (like public Wi-Fi) and your internet provider seeing which sites you visit, and from websites seeing your real IP address and approximate location." },
          { question: "Does a VPN protect you from hackers?", answer: "Only from hackers snooping on the network you're connected to. It doesn't stop phishing, malware, weak passwords, or attacks on the websites you use." },
          { question: "Do I need a VPN at home?", answer: "It depends on whether you want to hide your browsing from your internet provider or change your apparent location. For security alone, HTTPS already protects the content of most traffic at home." },
          { question: "Can my VPN provider see my browsing?", answer: "Yes, it can see the destinations your traffic goes to. That's why the provider's logging policy, audits, and trustworthiness matter so much." },
          { question: "Is using a VPN legal?", answer: "In most countries, yes. A few countries restrict or ban them, and using a VPN doesn't make an otherwise illegal activity legal." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
