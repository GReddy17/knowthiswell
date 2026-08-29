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
  title: "What Cookies Actually Do When You Browse",
  category: "technology-basics",
  order: 92,
  subtopic: "digital-literacy-and-online-life",
  tags: ["what are cookies", "how cookies work", "browser cookies", "third-party cookies", "digital literacy"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "Cookies are small pieces of text a site asks your browser to store and send back — the mechanism behind staying logged in and being followed by ads alike.",
  summary: "A cookie is a small piece of text a website asks your browser to store, then automatically sends back on every later request to that same site, which is how a stateless connection can remember who you are.",
  sources: [
    { label: "MDN Web Docs — Using HTTP Cookies", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies" },
    { label: "IETF RFC 6265 — HTTP State Management Mechanism", url: "https://www.rfc-editor.org/rfc/rfc6265" },
    { label: "FTC — Online Tracking", url: "https://consumer.ftc.gov/articles/online-tracking" },
  ],
  seeAlso: [
    "technology-basics/what-a-web-browser-is-actually-doing",
    "technology-basics/how-online-ad-targeting-works",
    "technology-basics/what-a-digital-footprint-actually-means",
  ],
  glossary: [
    { term: "Cookie", definition: "A small piece of text data a website asks a browser to store, which the browser then automatically resends to that same website on later requests." },
    { term: "Stateless protocol", definition: "A communication protocol, like HTTP, in which each request is handled independently with no built-in memory of previous requests from the same visitor." },
    { term: "Session cookie", definition: "A cookie stored only in memory for the duration of a browsing session, deleted automatically when the browser closes." },
    { term: "Persistent cookie", definition: "A cookie saved to disk with an expiration date, surviving until it expires or is manually deleted, even after the browser closes." },
    { term: "Third-party cookie", definition: "A cookie set by a domain other than the one shown in the browser's address bar, typically placed by an embedded resource like an ad or tracking script, and used to recognize the same browser across different websites." },
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
          "A cookie is just a small piece of text a website hands your browser to hold onto and send back — nothing more powerful than that by design.",
          "Cookies exist because the underlying web protocol, HTTP, has no memory between requests on its own; cookies are the bolt-on mechanism that lets a site recognize the same visitor across multiple page loads.",
          "First-party cookies (set by the site you're on) and third-party cookies (set by something embedded in that site, like an ad) use the identical mechanism for very different purposes — staying logged in versus being tracked across sites.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Imagine a coat-check counter that hands you a numbered ticket stub when you drop off your coat, so that when you come back, you show the stub and get the same coat back without re-explaining who you are. A <TermLink href="/technology-basics/what-cookies-actually-do">cookie</TermLink> works the same way: a website hands your browser a small tag of text, your browser holds onto it, and shows it back to that site on every later visit, so the site can recognize &quot;this is the same browser as before&quot; without you re-entering everything each time.</div>}
        detailed={<div className="prose-p">This is the <strong>request/response</strong> model plus a state-tracking layer bolted on top of it. HTTP, the protocol web pages are delivered over, is a <TermLink href="/technology-basics/what-cookies-actually-do">stateless protocol</TermLink> &mdash; by itself, a server has no built-in memory that the request it just received came from the same browser as the one five seconds ago. Cookies patch that gap: when a server responds, it can include a <code>Set-Cookie</code> instruction; the browser stores that value and automatically attaches it as a <code>Cookie</code> header on every subsequent request to that same domain, giving the server something consistent to check against. A <TermLink href="/technology-basics/what-cookies-actually-do">session cookie</TermLink> lives only in memory and disappears when the browser closes, while a <TermLink href="/technology-basics/what-cookies-actually-do">persistent cookie</TermLink> is written to disk with an expiration date and survives across browser restarts. The edge case that matters most for privacy: a <TermLink href="/technology-basics/what-cookies-actually-do">third-party cookie</TermLink> is set not by the site in the address bar but by something embedded within it, like an ad or analytics script &mdash; and because that same embedded script often appears on many unrelated sites, its cookie can be sent back to it regardless of which of those sites you&apos;re currently on, which is the mechanical basis of cross-site tracking.</div>}
      />
      <FootnoteAside>The cookie mechanism was formalized in the IETF&apos;s RFC 6265, but the concept and the name predate the standard by years, originating in early-1990s browser development as a lightweight way to add memory to an otherwise memory-less protocol.</FootnoteAside>

      <p>
        Everything a cookie does &mdash; keeping you logged in, remembering a shopping cart, or following your browsing across sites for ad targeting &mdash; comes down to that same simple loop: store a value, send it back automatically, let the server recognize it.
      </p>

      <QuickCheck
        question="Why does a website need cookies at all if it could just remember your browser on its own?"
        options={[
          { text: "Because HTTP, the protocol pages are delivered over, treats each request independently and has no built-in memory of previous requests", correct: true, explanation: "Correct. HTTP is a stateless protocol by design — cookies exist specifically to bolt state (memory) onto it, letting a server recognize repeat visits from the same browser." },
          { text: "Because browsers are physically incapable of storing any information without a cookie", correct: false, explanation: "Browsers can store other kinds of data too (like local storage), but cookies specifically exist to solve the problem of HTTP having no memory between requests, which is the core issue here." },
          { text: "Because servers are required by law to use cookies for every website", correct: false, explanation: "There's no such requirement — cookies are a technical convenience, not a legal mandate, though laws do regulate how they can be used for tracking and require certain disclosures." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Staying logged in with a session cookie (baseline case)</h3>
      <div className="prose-p">
        Someone logs into an account, then clicks to a different page on the same site without having to log in again. What happened underneath: after the correct password was submitted, the server responded with a <code>Set-Cookie</code> instruction containing a unique identifier tied to that login session. On every following page request, the browser automatically attached that identifier back to the server, which checked it against its own records and recognized the request as coming from an already-authenticated visitor &mdash; no password re-entry needed, because the cookie is doing the &quot;remembering&quot; on the server&apos;s behalf.
      </div>
      <QuickCheck
        question="After logging into a website once, you can browse to several other pages on that site without re-entering your password. What is doing the work of 'remembering' that you're logged in?"
        options={[
          { text: "The website re-checks your password automatically in the background on every page", correct: false, explanation: "Re-checking a password on every request isn't how this works — the whole point of a session cookie is to avoid needing the raw password again during that session." },
          { text: "A cookie stores a session identifier that the browser sends back automatically on every request, letting the server recognize the same logged-in session", correct: true, explanation: "Correct. The cookie carries a token the server can check against its own session records, which is what lets the login persist across multiple page loads." },
          { text: "Your browser remembers you visually through your IP address alone, with no cookie involved", correct: false, explanation: "An IP address can shift or be shared across multiple devices and isn't a reliable session identifier on its own — the session cookie is the actual mechanism doing this job." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same mechanism used for cross-site tracking (edge case / variation)</h3>
      <div className="prose-p">
        A shopper looks at a pair of shoes on one website, then later sees an ad for that same pair of shoes on an unrelated news website. Both websites happen to embed the same third-party advertising script, and that script set a cookie the first time it loaded, tied to that specific browser. When the news site loads the same script, the browser sends that same cookie back to it, letting the ad company recognize &quot;this is the same browser that viewed those shoes&quot; even though the two websites have no direct relationship with each other. This is not a different technology from the login example &mdash; it&apos;s the identical store-and-resend mechanism, just set by a third-party script embedded across many unrelated sites instead of by the site itself.
      </div>
      <QuickCheck
        question="Why can an advertising script on one website 'know' you looked at a product on a completely different website?"
        options={[
          { text: "Because both websites secretly share a private direct connection to each other", correct: false, explanation: "The two websites don't need any direct relationship — the connection runs through a third-party script embedded on both, not between the sites themselves." },
          { text: "Because the same third-party script is embedded on both sites, and the cookie it set earlier gets sent back to it regardless of which site is currently open", correct: true, explanation: "Correct. A third-party cookie is tied to the script's own domain, not the site in the address bar — if that script appears on multiple sites, it can recognize the same browser across all of them." },
          { text: "Because your device's operating system broadcasts your browsing history to all installed apps", correct: false, explanation: "This isn't how cookies work — the tracking happens through the shared embedded script and its own cookie, not through operating-system-level broadcasting." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Clearing cookies and what actually resets (real-world / applied case)</h3>
      <p>
        A user clears their browser&apos;s cookies to &quot;start fresh&quot; and finds they&apos;re logged out of every site, their shopping cart is empty, and a site that previously skipped its cookie-consent banner shows it again. All three effects come from the same cause: clearing cookies deletes the stored text values entirely, so every site that depended on recognizing a previously stored identifier now sees what looks like a first-ever visit. This is a useful mental check for what cookies actually control &mdash; if clearing them resets a behavior, that behavior was being driven by a stored cookie value; if a behavior survives cookie clearing, something else (like an account tied to a password login on a different device, or browser-level settings) is responsible instead.
      </p>
      <QuickCheck
        question="After clearing all cookies, a person is logged out of every website and a cookie-consent banner reappears on a site that previously didn't show it. What does this confirm?"
        options={[
          { text: "That the websites permanently lost all record of that person's account", correct: false, explanation: "Account data itself typically lives on the server tied to a password login, not solely in a cookie — clearing cookies removes the browser's local recognition token, not the server-side account." },
          { text: "That both the login state and the earlier consent choice were being tracked through stored cookie values, which are now gone", correct: true, explanation: "Correct. Both effects are consistent with cookie-based state: once the stored identifiers are deleted, the sites can no longer recognize the browser as one that had already logged in or already responded to the consent banner." },
          { text: "That the browser itself is now broken and needs to be reinstalled", correct: false, explanation: "This is completely normal, expected behavior after clearing cookies — nothing about the browser is broken, cookies are simply doing exactly what they're designed to do when removed." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How a cookie gets set, stored, and sent back"
        type="flow"
        svgSrc="/diagrams/technology-basics-what-cookies-actually-do-set-and-send-flow.svg"
        altText="A sequence diagram showing a browser sending an initial request to a server, the server responding with a Set-Cookie instruction containing a value, the browser storing that value, and then the browser automatically attaching the same value as a Cookie header on every later request to that same server."
      />
      <p>
        The critical detail is the word &quot;automatically&quot; in the last step &mdash; the browser resends the stored value without the user doing anything, which is both what makes staying logged in seamless and what makes cross-site tracking possible when the same mechanism is used by an embedded third party.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating cookies as programs that can run, install software, or infect a device.", fix: "Remember a cookie is only a small piece of text data — it has no ability to execute code or install anything on its own. The privacy concern is what the data enables (tracking), not any malicious action by the cookie itself." },
          { mistake: "Assuming all cookies exist for tracking or advertising.", fix: "Distinguish first-party cookies used for essential functions like staying logged in or keeping a shopping cart from third-party cookies used for cross-site tracking — they use the same mechanism for very different purposes." },
          { mistake: "Believing clearing cookies deletes a browsing history or a saved account permanently.", fix: "Clearing cookies removes the local recognition tokens stored in the browser — it logs you out and resets site-specific memory, but doesn't delete an account that exists on a server, nor does it delete browser history (a separate, unrelated setting)." },
        ]}
      />
      <MisconceptionCallout
        myth="Cookies are inherently malicious, like a virus that infects your computer when a site sets one."
        reality={<p>A cookie is just a small piece of text data with no ability to execute code, install software, or directly access files on a device. The legitimate privacy concern with cookies isn&apos;t that the cookie itself is dangerous &mdash; it&apos;s that a stored identifier, especially a <TermLink href="/technology-basics/what-cookies-actually-do">third-party cookie</TermLink> shared across many sites, can be used to build a profile of someone&apos;s browsing behavior over time without them realizing how widely that one embedded script is deployed.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a cookie-consent banner, remember it's mainly disclosing third-party tracking cookies, not the first-party session cookie that keeps you logged in.",
          "If a site behaves oddly after logging in on a new device, check whether cookies are being blocked entirely — some sites depend on a session cookie to function at all.",
          "Don't assume clearing cookies wipes your accounts or browsing history — it only resets what each site's cookie was tracking locally in your browser.",
          "Read How Online Ad Targeting Actually Works next to see what happens once a cross-site tracking cookie is set.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What exactly does a cookie do on a website?", answer: "A cookie is a small piece of text a website asks the browser to store, then the browser automatically sends it back to that site on every later request — which lets a server recognize the same visitor across multiple page loads, such as staying logged in." },
          { question: "Are cookies dangerous or a form of malware?", answer: "No. A cookie is plain text data with no ability to execute code or install software on a device. The genuine privacy concern is what stored identifiers, especially third-party cookies, can be used to track across sites, not any direct malicious capability of the cookie itself." },
          { question: "What is the difference between first-party and third-party cookies?", answer: "A first-party cookie is set by the website shown in the address bar, typically for functions like logins or shopping carts. A third-party cookie is set by something embedded in that site, like an ad script, and can be sent back to that same script across many unrelated websites, which is how cross-site tracking works." },
          { question: "Does clearing cookies delete my accounts or browsing history?", answer: "No. Clearing cookies removes the stored recognition tokens in your browser, which logs you out of sites and resets site-specific memory like shopping carts — it does not delete an account stored on a server or your separate browser history." },
          { question: "Why do websites ask for cookie consent?", answer: "Privacy regulations in many regions require websites to disclose and often get consent for non-essential cookies, particularly third-party tracking cookies, because those can be used to build a profile of browsing behavior across sites." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
