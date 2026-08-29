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
  title: "What a VPN Actually Does (And What It Doesn't)",
  category: "technology-basics",
  order: 5,
  subtopic: "internet-and-networking-basics",
  tags: ["VPN", "how VPNs work", "online privacy", "encrypted tunnel", "networking basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "A VPN encrypts your traffic and routes it through another server, hiding it from your local network and ISP — but it doesn't make you anonymous online.",
  summary: "A VPN (virtual private network) is a service that encrypts your internet traffic and routes it through an intermediary server, hiding your activity from your local network and ISP while shifting that visibility to the VPN provider instead.",
  sources: [
    { label: "IETF RFC 4301 — Security Architecture for the Internet Protocol", url: "https://www.rfc-editor.org/rfc/rfc4301" },
    { label: "Cloudflare Learning Center — What Is a VPN?", url: "https://www.cloudflare.com/learning/network-layer/what-is-a-vpn/" },
    { label: "NIST SP 800-77 — Guide to IPsec VPNs", url: "https://csrc.nist.gov/pubs/sp/800/77/r1/final" },
    { label: "CISA — Cybersecurity Guidance", url: "https://www.cisa.gov/topics/cybersecurity-best-practices" },
  ],
  seeAlso: [
    "technology-basics/http-vs-https-explained",
    "technology-basics/what-is-an-ip-address",
    "technology-basics/latency-explained-why-fast-internet-can-feel-slow",
  ],
  glossary: [
    { term: "VPN (virtual private network)", definition: "A service that routes your internet traffic through an encrypted tunnel to an intermediary server, hiding the traffic's contents and original IP address from anyone between you and that server." },
    { term: "Encryption", definition: "Scrambling data using a mathematical process so that only someone holding the correct key can turn it back into readable information." },
    { term: "Tunnel", definition: "The encrypted, wrapped connection a VPN creates between your device and its server, through which your regular internet traffic travels." },
    { term: "ISP (Internet Service Provider)", definition: "The company that connects your home or device to the internet, and which can normally see which sites and services you connect to unless that traffic is encrypted end-to-end or tunneled." },
    { term: "IP masking", definition: "The effect of a VPN making websites and services see the VPN server's IP address instead of your own device's real IP address." },
    { term: "No-logs policy", definition: "A VPN provider's claim that it does not record or retain details of what its users do while connected — a policy, not a technical guarantee, and only as trustworthy as the provider making it." },
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
          "A VPN wraps your traffic in encryption and sends it through an intermediary server, hiding what you're doing from your local network and ISP — but it doesn't erase your traffic's visibility, it relocates it to the VPN provider instead.",
          "Websites you visit see the VPN server's IP address instead of yours, which is genuinely useful for changing your apparent location or hiding your IP from a site, but it doesn't make you anonymous if you log into an account that identifies you anyway.",
          "A VPN protects data in transit between you and its server; it does nothing to secure a device that's already compromised, and it doesn't stop a website itself from tracking you through cookies, accounts, or browser fingerprinting.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Picture sending a letter inside a locked, opaque box, addressed to a trusted friend, who then opens the box, takes out your actual letter, and forwards it onward to its real destination under their own return address. Anyone who intercepts the box in transit sees only the locked container and your friend&apos;s address, not your letter&apos;s contents or its real destination. A <TermLink href="/technology-basics/what-a-vpn-actually-does">VPN</TermLink> does this with your internet traffic: it wraps your data in <TermLink href="/technology-basics/what-a-vpn-actually-does">encryption</TermLink> and sends it to a VPN server, which unwraps it and forwards it to the actual website, making that website see the VPN server&apos;s address instead of yours.</div>}
        detailed={<div className="prose-p">Technically, a VPN creates an encrypted <TermLink href="/technology-basics/what-a-vpn-actually-does">tunnel</TermLink> between your device and a server operated by the VPN provider. Everything you send gets encrypted before it leaves your device, which means your <TermLink href="/technology-basics/what-a-vpn-actually-does">ISP</TermLink> — normally able to see which domains and services you connect to, even over HTTPS — instead only sees an encrypted stream of data heading to the VPN provider&apos;s server, with the actual destination hidden inside. The VPN server then decrypts your traffic, forwards it to its real destination using its own IP address (a process called <TermLink href="/technology-basics/what-a-vpn-actually-does">IP masking</TermLink>), and relays the response back through the same encrypted tunnel. This is a genuine shift of trust, not an elimination of it: your ISP can no longer see your browsing destinations, but the VPN provider now technically can, at least at the moment it decrypts and forwards your traffic — which is exactly why a VPN provider&apos;s <TermLink href="/technology-basics/what-a-vpn-actually-does">no-logs policy</TermLink> is a business and legal claim you&apos;re trusting, not a mathematical guarantee baked into the protocol itself.</div>}
      />
      <FootnoteAside>VPN encryption protocols like IPsec and OpenVPN are open, published, peer-reviewed standards (IPsec is formally specified in IETF RFC 4301 and related documents) — the encryption itself is well understood and trustworthy; the actual point of trust in practice is the VPN provider operating the server your decrypted traffic briefly passes through.</FootnoteAside>

      <p>
        Once you see a VPN as relocating who can see your traffic rather than erasing that visibility altogether, the rest of what it can and can&apos;t do falls into place quickly.
      </p>

      <QuickCheck
        question="A VPN is often described as making your internet traffic 'invisible.' What's the most accurate way to describe what it actually does?"
        options={[
          { text: "It encrypts your traffic and routes it through its own server, hiding your activity from your ISP and local network — but the VPN provider itself can typically see the same traffic at the point it decrypts and forwards it", correct: true, explanation: "Correct. A VPN shifts visibility from your ISP to the VPN provider rather than eliminating visibility altogether — this is the central, accurate way to describe the mechanism." },
          { text: "It makes your internet traffic completely untraceable by anyone, including the VPN provider itself", correct: false, explanation: "This overstates what a VPN does. The VPN provider's own server necessarily handles your traffic in decrypted form at some point in order to forward it to its real destination." },
          { text: "It only changes which country your device appears to be located in, with no effect on encryption at all", correct: false, explanation: "Encryption between you and the VPN server is a core, real part of what a VPN does — the apparent location change (via IP masking) is a genuine side effect, but not the whole mechanism." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Using public WiFi at a coffee shop (baseline case)</h3>
      <div className="prose-p">
        Someone connects to open, unsecured public WiFi at a coffee shop and turns on a VPN before browsing. Without the VPN, anyone else on that same public network with the right tools could potentially observe unencrypted traffic passing over the shared network. With the VPN active, that same traffic is encrypted before it ever leaves the device, so anyone snooping on the local coffee shop network sees only an encrypted stream heading to the VPN server, not the actual sites being visited or any unencrypted data within them. This is one of the VPN&apos;s clearest, most defensible use cases: protecting traffic on a network you don&apos;t trust.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Logging into a personal account while connected to a VPN (edge case / variation)</h3>
      <div className="prose-p">
        Someone uses a VPN specifically to browse anonymously, then logs into their personal email or social media account while still connected. The VPN still hides their real IP address and encrypts their traffic in transit, but the moment they log in with their own credentials, the website or service they&apos;re using now directly and voluntarily knows who they are, regardless of what IP address the connection came from. A VPN cannot retroactively anonymize an action that identifies the user by other means — it only affects what network-level observers (like an ISP or local network) can see, not what the destination service itself learns once you tell it who you are.
      </div>
      <QuickCheck
        question="Someone connects through a VPN specifically to stay anonymous, but then logs into their personal social media account. Does the VPN still keep them anonymous from that social media platform?"
        options={[
          { text: "Yes, because VPN encryption makes all activity anonymous regardless of what the user does afterward", correct: false, explanation: "VPN encryption only affects what network-level observers between the user and the VPN server can see — it does nothing to prevent a destination service from learning who a user is through a direct login." },
          { text: "No — logging into a personal account directly identifies the user to that platform, regardless of what IP address or encrypted tunnel the connection came through", correct: true, explanation: "Correct. A VPN hides network-level details like your IP address, but it can't undo the fact that logging into an account tells that specific service exactly who you are." },
          { text: "It depends only on which country the VPN server is physically located in", correct: false, explanation: "The VPN server's location affects the apparent IP address and region, but has no bearing on whether logging into a personal account identifies the user to that service." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Accessing a work network remotely (real-world / applied case)</h3>
      <p>
        An employee working from home connects to a company VPN to access internal systems that aren&apos;t exposed to the public internet. Here the VPN&apos;s job isn&apos;t primarily about privacy from an ISP — it&apos;s creating a secure, encrypted tunnel that makes the employee&apos;s device appear to be on the company&apos;s private internal network, letting it reach internal file servers or applications that would otherwise reject connections from outside addresses entirely. This is the original, still-common corporate use case the term &quot;virtual private network&quot; was built around, distinct from the consumer privacy-and-location-masking use case that most people encounter today.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Without a VPN vs. with a VPN: who can see your traffic"
        type="comparison"
        svgSrc="/diagrams/technology-basics-what-a-vpn-actually-does-tunnel-comparison.svg"
        altText="A comparison diagram showing, on top, a device connecting directly to a website with the ISP able to see the destination in between, and on the bottom, the same device connecting through an encrypted VPN tunnel to a VPN server, which then connects onward to the same website, with the ISP now only able to see encrypted traffic to the VPN server and the VPN server shown as the new point with visibility into the traffic."
      />
      <p>
        The website at the far right sees a different visitor IP address in each scenario, and the party with visibility into the unencrypted traffic shifts from the ISP (top) to the VPN provider (bottom) — the traffic&apos;s visibility doesn&apos;t disappear, it relocates.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Believing a VPN makes you completely anonymous online.", fix: "A VPN hides your IP address and encrypts traffic in transit, but logging into accounts, accepting cookies, or browser fingerprinting can still identify you regardless of VPN use." },
          { mistake: "Assuming a VPN protects you from malware or a compromised device.", fix: "A VPN secures data in transit between your device and its server — it does nothing to stop malware already running on your device or a phishing site convincing you to hand over credentials." },
          { mistake: "Trusting a VPN provider's privacy claims without considering that the provider itself can see decrypted traffic.", fix: "Recognize that a VPN shifts visibility from your ISP to the VPN provider — a provider's no-logs policy is a trust claim about their business practices, not a mathematical guarantee." },
          { mistake: "Assuming a VPN will make streaming, gaming, or browsing faster.", fix: "Routing traffic through an extra server and adding encryption overhead typically adds some latency and can reduce speed, though the connection may occasionally beat a poorly-routed default path in specific cases." },
        ]}
      />
      <MisconceptionCallout
        myth="A VPN hides your online activity from literally everyone, with no one able to see what you're doing."
        reality={<p>A VPN specifically hides your traffic from your local network and your ISP by encrypting it and rerouting it through the VPN provider&apos;s server. But the VPN provider itself typically has technical access to your decrypted traffic at the point it forwards it onward, and any website you log into with a personal account still knows exactly who you are. &quot;Hidden from your ISP&quot; and &quot;invisible to everyone&quot; are very different claims — only the first one is actually accurate.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Use a VPN when connecting to public or untrusted WiFi — this is its clearest, most defensible everyday use case.",
          "Don't expect a VPN to anonymize activity where you're logging into a personal account anyway — the VPN can't undo that identification.",
          "If choosing a VPN provider, treat a 'no-logs' claim as a trust decision about that specific company, not an automatic technical guarantee.",
          "Read HTTP vs HTTPS Explained next to see what protection already exists on most websites without a VPN, and where a VPN adds something HTTPS alone doesn't.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does a VPN actually work?", answer: "A VPN encrypts your internet traffic on your device and routes it through an intermediary server operated by the VPN provider. That server decrypts the traffic and forwards it to its real destination using its own IP address, then relays the response back through the same encrypted tunnel." },
          { question: "Does a VPN make you anonymous online?", answer: "Not completely. It hides your IP address and encrypts your traffic from your ISP and local network, but it doesn't stop websites from identifying you if you log into a personal account, and it doesn't prevent tracking through cookies or browser fingerprinting." },
          { question: "Is a VPN the same as HTTPS?", answer: "No. HTTPS encrypts the connection between your browser and a specific website. A VPN encrypts all of your device's traffic to a VPN server, regardless of which site or app it's headed to, and additionally hides your real IP address from the destination." },
          { question: "Can my ISP still see what I'm doing if I use a VPN?", answer: "Your ISP can see that you're connected to a VPN server and how much encrypted data is flowing, but it cannot see which specific websites or services you're actually visiting through that encrypted tunnel." },
          { question: "Is it safe to trust a VPN provider's no-logs policy?", answer: "A no-logs policy is a claim made by the provider about its own business practices, not a technical guarantee enforced by the VPN protocol itself. Its trustworthiness depends entirely on that specific provider's practices, jurisdiction, and any independent audits, not on VPN technology in general." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
