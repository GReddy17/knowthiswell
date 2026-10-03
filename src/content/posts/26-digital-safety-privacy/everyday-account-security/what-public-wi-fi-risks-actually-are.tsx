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
  title: "What Public Wi-Fi Risks Actually Are",
  category: "digital-safety-privacy",
  order: 8,
  subtopic: "everyday-account-security",
  tags: ["public wi-fi", "evil twin", "network security", "https", "captive portal"],
  date: "2026-10-01",
  updated: "2026-10-01",
  youtubeShort: false, youtubeLong: false,
  seoScore: 83, seoScoredOn: "2026-10-02",
  lastReviewed: "2026-10-01",
  excerpt: "Public Wi-Fi risks today are fake hotspots, phishing login pages, exposed devices and visible browsing, not password theft from HTTPS sites. Here's the threat model.",
  summary: "On public Wi-Fi, everyone on the network shares the same local connection, and you usually can't verify who runs the hotspot. Because the large majority of web traffic now uses HTTPS encryption, an eavesdropper generally can't read passwords or messages sent to properly secured sites, as the FTC notes. The risks that remain are: fake 'evil twin' hotspots that imitate a real network name, fake captive-portal login pages that ask for account or card details, other devices on the network reaching yours through file sharing or unpatched services, the network operator seeing which sites you visit, and any app or site that still sends data without encryption. CISA and NIST SP 800-153 guidance point to the same defenses: confirm the network name with staff, use HTTPS sites and up-to-date software, turn off sharing and auto-join, prefer your phone's hotspot for sensitive tasks, and use a trusted VPN when you want to hide browsing from the local network.",
  sources: [
    { label: "Federal Trade Commission — Are Public Wi-Fi Networks Safe? What You Need To Know", url: "https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know" },
    { label: "CISA — Securing Wireless Networks", url: "https://www.cisa.gov/news-events/news/securing-wireless-networks" },
    { label: "NIST Special Publication 800-153 — Guidelines for Securing Wireless Local Area Networks (WLANs)", url: "https://csrc.nist.gov/pubs/sp/800/153/final" },
    { label: "Google Transparency Report — HTTPS encryption on the web", url: "https://transparencyreport.google.com/https/overview" },
  ],
  seeAlso: [
    "technology-basics/why-public-wifi-is-riskier",
    "digital-safety-privacy/what-a-vpn-actually-protects-you-from",
    "digital-safety-privacy/how-phishing-scams-actually-work",
    "technology-basics/http-vs-https-explained",
    "digital-safety-privacy/what-two-factor-authentication-actually-does",
    "technology-basics/how-wifi-works",
  ],
  glossary: [
    { term: "Evil twin", definition: "A rogue Wi-Fi hotspot set up with the same or a similar name as a legitimate one, so devices and people connect to the attacker's network instead." },
    { term: "Captive portal", definition: "The web page a public network shows before letting you online, used for terms, logins or payment. A fake one can be used to collect details." },
    { term: "HTTPS", definition: "The encrypted form of the web protocol, shown by a padlock in the browser. It protects the content between your browser and the site even on an untrusted network." },
    { term: "Threat model", definition: "A short answer to: who might attack, what they want, how they would do it, and what actually stops them." },
    { term: "Auto-join", definition: "A device setting that reconnects automatically to any network with a name it has joined before, which an evil twin can exploit." },
    { term: "WPA3 / Enhanced Open", definition: "Newer Wi-Fi security standards. Enhanced Open encrypts each user's connection on open networks, but it doesn't prove the hotspot is legitimate." },
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
  {"question": "On public Wi-Fi, can someone on the same network read the password you type into a site using HTTPS?", "difficulty": "easy", "options": [{"text": "Generally no; HTTPS encrypts it between your browser and the site", "correct": true, "explanation": "The FTC notes encrypted sites protect your information even on public networks."}, {"text": "Yes, always", "correct": false, "explanation": "That was more true before HTTPS became the norm."}, {"text": "Only if they're sitting next to you", "correct": false, "explanation": "Physical distance isn't the issue; encryption is."}]},
  {"question": "What is an evil twin hotspot?", "difficulty": "easy", "options": [{"text": "A fake hotspot using a real network's name to lure connections", "correct": true, "explanation": "Once you join it, the attacker controls the network you're on."}, {"text": "A second router the cafe uses for backup", "correct": false, "explanation": "That's legitimate; an evil twin is run by an attacker."}, {"text": "A virus that copies your phone", "correct": false, "explanation": "It's a network trick, not malware."}]},
  {"question": "A hotel Wi-Fi login page asks for your email password to \"verify your identity.\" What's the best read on this?", "difficulty": "medium", "options": [{"text": "It's a red flag; real captive portals ask for a room number or code, not your email password", "correct": true, "explanation": "A fake portal is one of the main ways public Wi-Fi is used for phishing."}, {"text": "Normal; hotels need your email password", "correct": false, "explanation": "No legitimate network needs your email account password."}, {"text": "Safe as long as the page looks professional", "correct": false, "explanation": "Fake pages are easy to make look polished."}]},
  {"question": "Even with HTTPS everywhere, what can the operator of a public hotspot usually still see?", "difficulty": "medium", "options": [{"text": "Which sites (domains) your device connects to", "correct": true, "explanation": "HTTPS hides the content, not, in most setups, the destination name."}, {"text": "The text of your emails on an HTTPS webmail site", "correct": false, "explanation": "That content is encrypted."}, {"text": "Nothing at all", "correct": false, "explanation": "Destinations and timing are typically visible without a VPN."}]},
  {"question": "Why should you turn off file and printer sharing on public networks?", "difficulty": "medium", "options": [{"text": "Other devices on the same network could reach your shared folders or services", "correct": true, "explanation": "CISA's wireless guidance recommends limiting what your device exposes."}, {"text": "It makes the Wi-Fi faster", "correct": false, "explanation": "Speed isn't the reason."}, {"text": "Sharing uses up your data plan", "correct": false, "explanation": "The concern is exposure, not data use."}]},
  {"question": "How does auto-join make evil twins more effective?", "difficulty": "hard", "options": [{"text": "Your device may connect automatically to any network using a familiar name", "correct": true, "explanation": "Devices often trust a network name, not the specific hotspot behind it."}, {"text": "It disables HTTPS", "correct": false, "explanation": "Auto-join doesn't change encryption on websites."}, {"text": "It reveals your passwords to the router", "correct": false, "explanation": "The risk is connecting to the wrong network, not instant password exposure."}]},
  {"question": "For a sensitive task like banking away from home, which option generally carries the least network risk?", "difficulty": "easy", "options": [{"text": "Your phone's mobile data or personal hotspot", "correct": true, "explanation": "You control that connection, so there are no strangers sharing it."}, {"text": "The busiest free Wi-Fi nearby", "correct": false, "explanation": "Popularity says nothing about who runs it."}, {"text": "Any network without a password", "correct": false, "explanation": "Open networks are the least protected."}]},
  {"question": "What does Wi-Fi \"Enhanced Open\" add, and what doesn't it fix?", "difficulty": "hard", "options": [{"text": "It encrypts each user's link on an open network, but doesn't prove the hotspot is genuine", "correct": true, "explanation": "An attacker can still run an evil twin that also uses encryption."}, {"text": "It blocks all phishing pages", "correct": false, "explanation": "It's link-layer encryption, not a content filter."}, {"text": "It replaces the need for HTTPS", "correct": false, "explanation": "HTTPS still protects end to end with the site."}]},
  {"question": "Which defense directly protects your account if a fake portal does capture your password?", "difficulty": "medium", "options": [{"text": "Two-factor authentication", "correct": true, "explanation": "A stolen password alone isn't enough to log in, especially with app or security-key codes."}, {"text": "Clearing your browser history", "correct": false, "explanation": "That doesn't affect a password already stolen."}, {"text": "Turning Wi-Fi off afterwards", "correct": false, "explanation": "The attacker already has the password."}]},
];

export default function Post() {
  return (
    <>
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
      <strong>This entry explains how public Wi-Fi attacks generally work, cited to the FTC, CISA and NIST. It is security literacy, not a professional security assessment.</strong> If you think an account or device has been compromised, follow the provider&apos;s recovery steps or report it at IdentityTheft.gov (US) or your country&apos;s equivalent.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "The old warning, that hackers on cafe Wi-Fi read your passwords, is mostly outdated: HTTPS now encrypts the large majority of web traffic.",
          "The real risks are fake hotspots (evil twins), fake login portals that phish for details, other devices reaching yours, and the network seeing which sites you visit.",
          "What actually stops them: confirming the network name, never typing account passwords into a Wi-Fi login page, turning off sharing and auto-join, keeping software updated, and using mobile data for sensitive tasks.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Joining public Wi-Fi is like plugging your laptop into a shared power strip in a room full of strangers, where you also can&apos;t be sure who installed the power strip. Ten years ago, the main fear was strangers reading your mail as it passed by. Today most websites seal every letter (that&apos;s the padlock, HTTPS), so the contents are safe even on a shared network. The problems that are left are about trust and exposure. Is this really the cafe&apos;s network, or someone&apos;s laptop pretending to be it? Is the login page real, or a trap asking for your email password? Is your laptop sharing folders with everyone in the room? And the network owner can still see the outside of your envelopes, meaning which sites you visit, even if not what you say to them.</div>}
        detailed={<div className="prose-p">A useful threat model has four attacker positions. <strong>(1) The passive eavesdropper</strong> on the same open network can capture traffic, but with HTTPS (Google&apos;s Transparency Report shows the large majority of Chrome page loads now use it) they see mostly encrypted data plus metadata such as destination domains. <strong>(2) The hotspot operator</strong>, legitimate or rogue, sees DNS lookups and connection destinations and controls the captive portal. An <strong>evil twin</strong> puts the attacker in this position by broadcasting a trusted network name; NIST SP 800-153 lists rogue access points as a core WLAN threat. <strong>(3) The neighbor device</strong> on the same subnet can probe your machine for open shares and unpatched services, which is why CISA recommends disabling sharing and keeping a firewall on. <strong>(4) The phisher</strong> uses a fake portal or redirect to capture credentials or card numbers directly, sidestepping encryption entirely because you hand the data over. Newer standards help at the margins: WPA3&apos;s Enhanced Open (Opportunistic Wireless Encryption) encrypts each client&apos;s link on open networks, but it doesn&apos;t authenticate the hotspot, so an evil twin can offer it too.</div>}
      />
      <FootnoteAside>The FTC&apos;s public Wi-Fi guidance was rewritten as HTTPS spread. Older versions centered on eavesdropping; the current one emphasizes that encrypted sites protect your data on public networks and puts more weight on scams, fake sites and keeping devices updated. The advice changed because the attack changed.</FootnoteAside>

      <p>For the network plumbing behind this, see <TermLink href="/technology-basics/how-wifi-works">how Wi-Fi works</TermLink> and <TermLink href="/technology-basics/http-vs-https-explained">HTTP vs HTTPS</TermLink>. Technology Basics also has a shorter primer, <TermLink href="/technology-basics/why-public-wifi-is-riskier">why public Wi-Fi is riskier</TermLink>; this post goes further into which attacks are realistic today and ranks the defenses.</p>

      <QuickCheck
        question="You're on airport Wi-Fi and log into your bank's website (padlock showing). Which risk is still realistic?"
        options={[
          { text: "The network can see that you connected to your bank's domain", correct: true, explanation: "Correct. HTTPS protects what you send, but the destination is usually visible to the network without a VPN." },
          { text: "A nearby passenger reads your account password in transit", correct: false, explanation: "HTTPS encrypts the password between your browser and the bank." },
          { text: "The airport can see your account balance", correct: false, explanation: "Page content is encrypted under HTTPS." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The risks, ranked by how often they matter</h2>
      <ol className="list-decimal pl-6 space-y-2 my-4">
        <li><strong>Phishing through the network.</strong> A fake login portal or a pop-up asking you to &quot;sign in with your email&quot; to get online. Encryption doesn&apos;t help when you type the password into the attacker&apos;s page yourself. See <TermLink href="/digital-safety-privacy/how-phishing-scams-actually-work">how phishing works</TermLink>.</li>
        <li><strong>Evil twin hotspots.</strong> &quot;Airport_Free_WiFi&quot; might be the airport or a laptop in the lounge. Joining puts the attacker in control of your DNS, your portal page and your traffic routing.</li>
        <li><strong>Exposed devices.</strong> Shared folders, media servers or an unpatched service on your laptop are reachable by anyone on the same network.</li>
        <li><strong>Visible browsing.</strong> The operator sees which domains you visit and when. That&apos;s a privacy issue rather than a theft risk, and it&apos;s the main thing a <TermLink href="/digital-safety-privacy/what-a-vpn-actually-protects-you-from">VPN</TermLink> fixes.</li>
        <li><strong>Unencrypted leftovers.</strong> Old apps, some smart devices and the occasional site that still uses plain HTTP. Rare now, but not zero.</li>
      </ol>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Checking email at a cafe (baseline case)</h3>
      <div className="prose-p">You join the cafe&apos;s network after confirming the name with the barista, accept the terms on the portal, and open your webmail. The mail service uses HTTPS, so another customer capturing traffic sees encrypted data going to the mail provider&apos;s servers. The realistic exposure here is small: the cafe can see you visited your mail provider. This is the everyday case, and it&apos;s why blanket &quot;never use public Wi-Fi&quot; advice overstates the danger.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Two networks with the same name (edge case)</h3>
      <div className="prose-p">At a conference, your phone shows &quot;ConferenceWiFi&quot; twice, and it auto-joins because you used a network with that name last year. One is real; one is a small device in someone&apos;s bag. On the fake one, a page appears: &quot;Session expired, sign in with Microsoft or Google to continue.&quot; If you enter your password there, the attacker has it, padlock or not, because you sent it to them directly. Two-factor authentication is what limits the damage, especially app-based codes or a security key, since a phished password alone no longer opens the account (see <TermLink href="/digital-safety-privacy/what-two-factor-authentication-actually-does">what 2FA actually does</TermLink>).</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The laptop that shares too much (applied)</h3>
      <div className="prose-p">A freelancer works from a hotel lobby with folder sharing still switched on from the home office setup, and the network profile set to &quot;private&quot; rather than &quot;public.&quot; Anyone on the hotel network can browse the shared folder of client invoices. No hacking skill required. The fix takes ten seconds: mark the network as public (which turns off discovery and sharing on most systems), keep the firewall on, and install pending updates so known holes are closed. This is exactly the device-side hygiene CISA&apos;s wireless guidance emphasizes.</div>

      <QuickCheck
        question="Which single habit stops the attack in Example 2 before it starts?"
        options={[
          { text: "Never typing an account password into a Wi-Fi login or 'session expired' page", correct: true, explanation: "Correct. Real captive portals ask for terms acceptance, a room number or a voucher code, not your email account password." },
          { text: "Only using networks with strong signal", correct: false, explanation: "An attacker's hotspot nearby can have the strongest signal." },
          { text: "Clearing cookies before connecting", correct: false, explanation: "That doesn't stop you handing over a password." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Who can attack you on public Wi-Fi, and what stops each one"
        type="comparison"
        svgSrc="/diagrams/digital-safety-privacy-what-public-wi-fi-risks-actually-are-comparison.svg"
        altText="A two-column comparison. Left, the threats: an eavesdropper on the same network, an evil twin hotspot, a fake login portal, and other devices probing yours. Right, what stops each: HTTPS encryption, confirming the network name and turning off auto-join, never entering account passwords on a Wi-Fi page plus two-factor authentication, and turning off sharing with the firewall on."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a network is legitimate because its name matches the venue.", fix: "Anyone can broadcast any name. Confirm the exact name with staff, and be suspicious when two similar names appear." },
          { mistake: "Treating a password-protected cafe network as private.", fix: "If the password is printed on the wall, everyone in the room shares it. It keeps out passers-by, not other customers." },
          { mistake: "Leaving auto-join on for every network you've ever used.", fix: "Forget public networks after using them, or turn off auto-join for them, so your device won't silently connect to a lookalike." },
          { mistake: "Relying on a VPN as the whole defense.", fix: "A VPN hides your browsing from the network, but it won't stop you entering a password on a fake page or a neighbor reaching an open share." },
        ]}
      />
      <MisconceptionCallout
        myth="Anyone on public Wi-Fi can easily steal your passwords and credit card numbers."
        reality={<p>On sites using HTTPS, which is now the large majority of the web, the contents of what you send are encrypted even on an open network, as the FTC notes. Theft on public Wi-Fi today usually needs your cooperation: you typing details into a fake portal or site. The real risks are deception and exposure, not effortless interception.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Confirm the exact network name with staff before joining, and pick the public (not home or private) network profile when asked.",
          "Never enter an email, bank or social account password on a Wi-Fi login page.",
          "Turn off file sharing and AirDrop-style discovery for strangers, and keep the firewall on.",
          "Turn off auto-join for public networks, and forget them after use.",
          "Keep your device and browser updated, and use two-factor authentication on important accounts.",
          "Use your phone's mobile data or hotspot for banking or work logins when you can, and a trusted VPN if you want to hide which sites you visit.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is it safe to use public Wi-Fi for online banking?", answer: "Banking sites and apps use encryption, so the main risks are fake hotspots and fake login pages rather than interception. Mobile data is still the lower-risk choice when it's available." },
          { question: "Can someone hack my phone through public Wi-Fi?", answer: "Direct hacking of an updated phone over Wi-Fi is uncommon. The realistic risks are phishing pages, evil twin networks and outdated software, which is why updates matter." },
          { question: "Do I need a VPN on public Wi-Fi?", answer: "It's useful if you want to hide which sites you visit from the network. It doesn't stop phishing, so treat it as one layer, not the whole defense." },
          { question: "How can I tell if a Wi-Fi network is fake?", answer: "You often can't from the name alone. Confirm the name with staff, watch for duplicate or slightly misspelled networks, and leave if a login page asks for account passwords or card details unexpectedly." },
          { question: "Is a password-protected public Wi-Fi network safer?", answer: "Somewhat. On older WPA2 networks, anyone who knows the shared password can in principle decrypt other users' Wi-Fi traffic; WPA3 closes that gap. Either way, everyone with the password is still on the same network, and it doesn't prove who runs the hotspot." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
