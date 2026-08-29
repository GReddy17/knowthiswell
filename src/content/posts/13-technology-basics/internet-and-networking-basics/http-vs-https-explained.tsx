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
  title: "HTTP vs HTTPS: What That Padlock Icon Actually Means",
  category: "technology-basics",
  order: 7,
  subtopic: "internet-and-networking-basics",
  tags: ["HTTP vs HTTPS", "TLS encryption", "padlock icon", "website security", "networking basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "HTTPS is HTTP wrapped in encryption — the padlock icon confirms your connection to a site is private and verified, not that the site itself is trustworthy.",
  summary: "HTTPS is the standard web protocol HTTP combined with TLS encryption, which scrambles data in transit and verifies the site's identity — the padlock icon confirms a private, verified connection, not that the site's content is safe or honest.",
  sources: [
    { label: "IETF RFC 9110 — HTTP Semantics", url: "https://www.rfc-editor.org/rfc/rfc9110" },
    { label: "IETF RFC 8446 — The Transport Layer Security (TLS) Protocol Version 1.3", url: "https://www.rfc-editor.org/rfc/rfc8446" },
    { label: "MDN Web Docs — HTTPS (Glossary)", url: "https://developer.mozilla.org/en-US/docs/Glossary/HTTPS" },
    { label: "NIST SP 800-52 Rev. 2 — Guidelines for TLS Implementations", url: "https://csrc.nist.gov/pubs/sp/800/52/r2/final" },
  ],
  seeAlso: [
    "technology-basics/dns-explained-how-domain-names-work",
    "technology-basics/what-a-vpn-actually-does",
    "technology-basics/how-the-internet-actually-works",
  ],
  glossary: [
    { term: "HTTP (Hypertext Transfer Protocol)", definition: "The standard set of rules browsers and servers use to request and deliver web pages and data, sent as plain, unencrypted text by default." },
    { term: "HTTPS", definition: "HTTP layered with TLS encryption, which scrambles the data in transit and verifies the identity of the server being connected to." },
    { term: "TLS (Transport Layer Security)", definition: "The cryptographic protocol that encrypts and authenticates a connection, forming the security layer that turns HTTP into HTTPS." },
    { term: "TLS handshake", definition: "The initial exchange between a browser and server that agrees on encryption methods and verifies the server's identity before any actual data is sent." },
    { term: "SSL/TLS certificate", definition: "A digital file, issued by a trusted certificate authority, that proves a server controls the domain it claims to be, and supplies the cryptographic keys used to secure the connection." },
    { term: "Certificate authority (CA)", definition: "An organization trusted by browsers and operating systems to verify a website's identity and issue certificates vouching for that identity." },
    { term: "Man-in-the-middle attack", definition: "An attack where someone secretly intercepts and potentially alters communication between two parties who believe they're communicating directly with each other." },
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
          "HTTPS isn't a different protocol from HTTP — it's the same HTTP wrapped in TLS encryption, which scrambles the data in transit and verifies the server's identity before any page content is exchanged.",
          "The padlock icon confirms a private, verified connection to whatever server you're actually talking to — it does not confirm that server or its content is trustworthy, safe, or legitimate.",
          "Before HTTPS existed as the default, passwords, form data, and page content on most sites traveled as plain, readable text — anyone on the same network path could potentially read or alter it in transit.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Imagine sending a postcard versus sending a sealed, tamper-evident envelope. A postcard (plain <TermLink href="/technology-basics/http-vs-https-explained">HTTP</TermLink>) can be read by anyone who handles it along the way — the mail carrier, anyone sharing your network. A sealed envelope with a verified sender ID (<TermLink href="/technology-basics/http-vs-https-explained">HTTPS</TermLink>) means only the intended recipient can read the contents, and you can confirm who actually sent or is receiving it. The padlock icon in your browser is just confirming you&apos;re using the sealed envelope, not the postcard, for that particular connection.</div>}
        detailed={<div className="prose-p">HTTPS is HTTP run over a security layer called <TermLink href="/technology-basics/http-vs-https-explained">TLS</TermLink>. Before any actual page data is exchanged, the browser and server perform a <TermLink href="/technology-basics/http-vs-https-explained">TLS handshake</TermLink>: the server presents an <TermLink href="/technology-basics/http-vs-https-explained">SSL/TLS certificate</TermLink> proving it controls the domain being requested, issued and digitally vouched for by a trusted <TermLink href="/technology-basics/http-vs-https-explained">certificate authority</TermLink>, and the two sides agree on a shared encryption key using that certificate&apos;s cryptography. Once this trust chain is verified and the encryption key is established, every subsequent piece of data — page content, form submissions, cookies — travels encrypted, meaning it appears as scrambled, unreadable data to anyone intercepting it along the network path. This directly defeats a <TermLink href="/technology-basics/http-vs-https-explained">man-in-the-middle attack</TermLink>, where an attacker positioned between you and a server tries to secretly read or alter traffic — without a valid certificate matching the actual domain, an attacker can&apos;t successfully impersonate the real server or silently decrypt the exchange.</div>}
      />
      <FootnoteAside>The padlock icon confirms the connection to a specific domain is encrypted and that domain&apos;s identity was verified by a certificate authority — it says nothing about whether the operator of that domain is honest, since anyone can register a domain and obtain a valid certificate for it, including the operator of a scam website.</FootnoteAside>

      <p>
        This is the single most important nuance about HTTPS: it&apos;s a statement about the connection&apos;s privacy and the server&apos;s proven identity, not a statement about the server&apos;s intentions once you&apos;re securely talking to it.
      </p>

      <QuickCheck
        question="A website has a valid padlock icon and uses HTTPS. What does this actually guarantee?"
        options={[
          { text: "That the website is legitimate, trustworthy, and safe to enter personal information into", correct: false, explanation: "HTTPS says nothing about the website operator's honesty or intentions — a scam site can obtain a valid certificate and use HTTPS just as legitimately as any other site." },
          { text: "That the connection between your browser and that specific server is encrypted and the server's control of that domain has been verified by a certificate authority", correct: true, explanation: "Correct. HTTPS guarantees a private, verified connection to whichever server is actually running that domain — it doesn't vouch for what that server's operator does with the connection." },
          { text: "That the website has been checked and approved by your web browser's manufacturer", correct: false, explanation: "Browsers don't approve website content through the HTTPS padlock — they only verify that the TLS certificate is validly issued and matches the domain being visited." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Logging into an account on a site with the padlock icon (baseline case)</h3>
      <div className="prose-p">
        You visit a bank&apos;s website, see the padlock icon, and log in with your username and password. Behind the scenes, a TLS handshake already completed before you saw the login form, establishing a verified, encrypted connection specifically to that bank&apos;s actual servers. When you submit your credentials, they travel through that encrypted tunnel — anyone intercepting the raw network traffic sees only scrambled ciphertext, not your actual username and password. This is HTTPS working as intended: your login data reaches the real bank&apos;s server, unread by anything in between.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A scam site that also has a valid padlock icon (edge case / variation)</h3>
      <div className="prose-p">
        A fraudulent website impersonating a real company, but hosted at a different domain the scammer controls, can obtain a completely valid, properly issued TLS certificate for its own domain and display the same padlock icon as any legitimate site. The padlock confirms the connection to that domain is encrypted and that the domain&apos;s control was verified — it does not, and cannot, confirm that the domain belongs to the real company being impersonated, or that the operator is acting honestly. This is why checking the actual domain name in the address bar matters just as much as, or more than, checking for the padlock alone.
      </div>
      <QuickCheck
        question="A suspicious website that appears to impersonate a well-known company also shows a valid padlock icon in the browser. Does this padlock prove the site is legitimate?"
        options={[
          { text: "Yes, browsers only show the padlock on sites that have been verified as legitimate businesses", correct: false, explanation: "Any domain owner, including a scammer, can obtain a valid TLS certificate for a domain they control — the padlock verifies domain control and encryption, not business legitimacy." },
          { text: "No — the padlock only confirms the connection to that specific domain is encrypted and its domain control was verified, not that the operator or content is trustworthy", correct: true, explanation: "Correct. A scam site hosted on its own domain can have a fully valid padlock while still being fraudulent — the address bar's actual domain name matters more than the padlock alone." },
          { text: "It depends on which browser is being used to view the site", correct: false, explanation: "The padlock's meaning is consistent across standards-compliant browsers — it always reflects TLS certificate validity and domain verification, not a business trustworthiness check, regardless of browser." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Public WiFi and the risk plain HTTP once posed (real-world / applied case)</h3>
      <p>
        Before HTTPS became the near-universal default, using plain HTTP over public WiFi at a coffee shop or airport meant that anyone else on that same network, with modest technical tools, could potentially observe unencrypted page content, form submissions, and even session cookies passing over the shared network. This was a well-documented, practical risk, not a theoretical one — it&apos;s a major reason browsers now actively warn users when a site or a form on a site isn&apos;t using HTTPS, and why the industry pushed hard to make HTTPS the default across the web rather than an opt-in extra.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Plain HTTP vs. HTTPS: what's visible in transit"
        type="comparison"
        svgSrc="/diagrams/technology-basics-http-vs-https-explained-handshake-comparison.svg"
        altText="A comparison diagram showing, on top, a browser sending readable plain-text data over HTTP to a server with an eavesdropper icon able to read the content directly, and on the bottom, a browser performing a TLS handshake with certificate verification before sending the same data as encrypted, unreadable ciphertext over HTTPS, with the same eavesdropper icon unable to interpret the intercepted data."
      />
      <p>
        The handshake step at the top of the HTTPS flow is what establishes both the encryption keys and the verified identity of the server before any actual page content moves — this is the mechanism the padlock icon is summarizing.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating the padlock icon as proof a website is safe, honest, or legitimate.", fix: "Treat the padlock as proof the connection is encrypted and the domain's ownership was verified — separately check that the domain name itself is the real one you intended to visit." },
          { mistake: "Assuming HTTP and HTTPS are two entirely unrelated protocols.", fix: "HTTPS is HTTP layered with TLS encryption and identity verification — the underlying request-and-response mechanics of HTTP are unchanged, just wrapped in a secure layer." },
          { mistake: "Believing a site without HTTPS is automatically dangerous to simply read.", fix: "Plain HTTP mainly risks exposing data you submit (like forms or logins) or lets content be tampered with in transit — merely reading a static, non-interactive HTTP page carries a smaller (though not zero) risk." },
          { mistake: "Assuming the certificate authority that issues a site's certificate vouches for the site's content or business practices.", fix: "A certificate authority only verifies that whoever requested the certificate actually controls the domain in question — it makes no judgment about what that domain is used for." },
        ]}
      />
      <MisconceptionCallout
        myth="Once a site has the padlock icon and HTTPS, everything about visiting it is completely safe."
        reality={<p>HTTPS secures the connection between your browser and whatever server is actually running that domain — it says nothing about what that server&apos;s operator does with your data once it arrives, or about the legitimacy of the domain&apos;s content. Phishing and scam sites routinely use fully valid HTTPS, because obtaining a certificate only requires proving control of a domain, not passing any check on honesty or intent.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check the actual domain name in the address bar, not just the presence of a padlock, before entering sensitive information anywhere.",
          "Treat a browser warning about a site 'not being secure' or a certificate error as a real signal worth pausing on, not a routine popup to dismiss.",
          "Remember that HTTPS protects data in transit, not the trustworthiness of the destination — both matter, and they're separate checks.",
          "Read What a VPN Actually Does next to see what additional protection, if any, a VPN adds on top of a connection that's already using HTTPS.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the actual difference between HTTP and HTTPS?", answer: "HTTPS is HTTP combined with TLS encryption and identity verification. Plain HTTP sends data as readable text that can potentially be intercepted or altered in transit; HTTPS encrypts that data and verifies the server's identity before any content is exchanged." },
          { question: "Does the padlock icon mean a website is safe?", answer: "It means the connection to that specific website is encrypted and its domain ownership was verified by a certificate authority. It does not mean the website's operator or content is trustworthy — scam sites can have a fully valid padlock too." },
          { question: "Is HTTPS the same thing as a VPN?", answer: "No. HTTPS secures the connection between your browser and one specific website. A VPN encrypts all of a device's traffic and routes it through an intermediary server, hiding your IP address from every destination, not just one site." },
          { question: "Why did websites switch from HTTP to HTTPS?", answer: "Plain HTTP transmits data as unencrypted text, which is readable and alterable by anyone positioned on the network path between a user and a server. HTTPS was adopted broadly to close that risk, especially for logins, payments, and any data users submit." },
          { question: "Can a website have HTTPS and still be a scam?", answer: "Yes. A TLS certificate only proves that whoever requested it controls the domain it was issued for — it doesn't vet the domain owner's honesty. Checking the actual domain name matters as much as checking for the padlock." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
