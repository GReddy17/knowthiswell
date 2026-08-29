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
  title: "What Makes a Website \"Down\" vs. Just Slow",
  category: "technology-basics",
  order: 99,
  subtopic: "digital-literacy-and-online-life",
  tags: ["website down", "website slow", "http status codes", "server timeout", "digital literacy"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "A slow website still eventually returns a response; a down website's request never completes at all — two different failure points in the same request/response chain.",
  summary: "Whether a website is 'down' or just 'slow' comes down to where a request fails along the same request/response chain: slow means a response is delayed but still eventually arrives, while down means the chain breaks entirely and no response comes back at all.",
  sources: [
    { label: "MDN Web Docs — HTTP Response Status Codes", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" },
    { label: "IETF RFC 9110 — HTTP Semantics", url: "https://www.rfc-editor.org/rfc/rfc9110" },
    { label: "NIST CSRC Glossary — Availability", url: "https://csrc.nist.gov/glossary/term/availability" },
  ],
  seeAlso: [
    "technology-basics/how-search-engines-rank-results",
    "technology-basics/what-a-web-browser-is-actually-doing",
    "technology-basics/how-online-payments-get-processed",
  ],
  glossary: [
    { term: "DNS resolution", definition: "The step where a browser converts a website's domain name into the numeric IP address of the server that hosts it, before any connection can be made." },
    { term: "Server timeout", definition: "The point at which a browser or intermediary gives up waiting for a response because a set time limit was exceeded, treating the request as failed even though the server might still be working on it." },
    { term: "HTTP status code", definition: "A short numeric code a server includes in its response indicating the outcome of a request, such as success, redirection, client error, or server error." },
    { term: "Availability", definition: "A measure of whether a system is reachable and able to respond to requests at all, as distinct from how quickly it responds once reached." },
    { term: "Latency", definition: "The delay between sending a request and receiving the start of a response, driven by factors like network distance, queuing, and processing time." },
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
          "A website loading a page always follows the same request/response chain — browser asks, servers along the way answer — and 'down' versus 'slow' describes where that chain fails, not two unrelated categories of problem.",
          "Slow means the chain completes but is delayed somewhere along the way, usually by server load or network distance; down means the chain never completes at all, because a step failed outright.",
          "A single site being unreachable for you doesn't necessarily mean it's down for everyone — the failure could be local to your network, your DNS resolver, or a specific server in a larger cluster.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of calling a restaurant to place an order. If the line is busy and it takes ten rings before someone finally picks up and takes your order, that&apos;s slow &mdash; frustrating, but you still got through. If the number is disconnected, or nobody ever picks up no matter how long you wait, that&apos;s down &mdash; the call never actually happens. Loading a website works the same way: a slow site eventually answers, just later than you&apos;d like. A down site never answers at all, no matter how long the browser waits.</div>}
        detailed={<div className="prose-p">This is a <strong>request/response</strong> problem, and the distinction is about which step in the chain fails. Loading a page starts with <TermLink href="/technology-basics/what-makes-a-website-down-vs-slow">DNS resolution</TermLink>, converting the domain name into a server&apos;s IP address, then a connection is opened to that server, the server processes the request, and a response travels back. &quot;Slow&quot; means every step completes, just with added <TermLink href="/technology-basics/what-makes-a-website-down-vs-slow">latency</TermLink> somewhere &mdash; commonly the server is under heavy load and queues the request before processing it, adding delay without ever refusing it. &quot;Down&quot; means one of those steps fails outright: DNS resolution returns nothing, the connection is actively refused, or the browser hits a <TermLink href="/technology-basics/what-makes-a-website-down-vs-slow">server timeout</TermLink> waiting for a response that will never come. The edge case that confuses people: an <TermLink href="/technology-basics/what-makes-a-website-down-vs-slow">HTTP status code</TermLink> in the 500 range (a server error) is technically a completed response &mdash; the server did answer, it just answered with a failure &mdash; which is a distinct case from a timeout where no response arrives at all.</div>}
      />
      <FootnoteAside>Large sites are frequently served by many servers behind a load balancer, which means a single server having a problem can make the site appear down or slow only to some visitors, depending on which server their request happens to be routed to, while it looks completely normal to others.</FootnoteAside>

      <p>
        Every symptom someone notices &mdash; a spinning loading icon that never finishes, a page that takes ten extra seconds but does load, or an outright error page &mdash; traces back to exactly where in this request/response chain the failure or delay occurred.
      </p>

      <QuickCheck
        question="What's the key structural difference between a website that's 'slow' and one that's 'down'?"
        options={[
          { text: "A slow site's request eventually completes with a response; a down site's request never completes at all", correct: true, explanation: "Correct. Slow describes added delay somewhere in an otherwise-completing request/response chain, while down describes an outright break in that chain with no response ever arriving." },
          { text: "A slow site uses a different internet protocol than a down site", correct: false, explanation: "Both slow and down sites use the same underlying protocols — the difference is in whether the request/response chain completes, not which protocol is involved." },
          { text: "A down site is always caused by the visitor's own device, never the server", correct: false, explanation: "A site being down can originate at the server, the network path, or occasionally the visitor's own connection — it isn't always one particular cause." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A page that loads slowly under heavy traffic (baseline case)</h3>
      <div className="prose-p">
        A retail site experiences a surge of visitors during a big sale, and pages that normally load in under a second now take eight to ten seconds. Every step of the request/response chain still completes &mdash; DNS resolves, the connection opens, the server does eventually process each request and sends back a normal response &mdash; but the server is handling far more simultaneous requests than usual, so each one queues longer before being processed. This is the textbook definition of slow: nothing broke, capacity is just temporarily outmatched by demand.
      </div>
      <QuickCheck
        question="During a traffic surge, a site's pages take much longer to load but still eventually display correctly. What does this indicate?"
        options={[
          { text: "The site is slow, not down — every request is still completing, just with added delay from queuing under heavy load", correct: true, explanation: "Correct. A completed response, even a delayed one, means the request/response chain didn't break — it's a capacity/latency issue, which is the definition of slow rather than down." },
          { text: "The site is down but happens to display an old cached version of the page", correct: false, explanation: "If the page is loading with current content after a delay, the request/response chain is actually completing — that's inconsistent with the site being down." },
          { text: "The site's DNS records have expired", correct: false, explanation: "If DNS had failed, the page wouldn't load at all, regardless of delay — DNS failure is a down scenario, not a slow one." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A server error that returns instantly (edge case / variation)</h3>
      <div className="prose-p">
        A visitor loads a page and immediately &mdash; within a fraction of a second &mdash; sees an error page indicating something went wrong on the server. This looks similar to being &quot;down&quot; in the sense that the page didn&apos;t work, but structurally it&apos;s different: the server did respond, quickly, with an <TermLink href="/technology-basics/what-makes-a-website-down-vs-slow">HTTP status code</TermLink> indicating a server error rather than success. The request/response chain completed end to end; it just completed with a failure result instead of the intended page. This is meaningfully different from a timeout, where the browser gives up because nothing came back at all.
      </div>
      <QuickCheck
        question="A page shows an error message almost instantly instead of the intended content. Is this the same failure as a site being fully down?"
        options={[
          { text: "No — a fast error response means the server did answer, just with a failure status code, which is different from no response arriving at all", correct: true, explanation: "Correct. A completed response carrying an error status code is a different failure mode than a timeout or connection refusal, even though both feel broken to the visitor." },
          { text: "Yes — any error page is functionally identical to the site being down", correct: false, explanation: "Structurally these are different: one completes the request/response chain with a failure result, the other never completes the chain at all." },
          { text: "Yes, because error pages are only ever caused by DNS failures", correct: false, explanation: "A fast server-error response isn't a DNS problem — DNS failures prevent the browser from even reaching the server in the first place." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A site down for one visitor but fine for others (real-world / applied case)</h3>
      <p>
        One person reports a site is completely unreachable, while friends checking the same site at the same time load it normally. This can happen for several reasons within the same request/response framework: the person&apos;s own network or DNS resolver might be failing to resolve the domain even though the actual servers are healthy, or a large site served by multiple servers behind a load balancer might have one server having trouble while the rest handle traffic fine, with only some visitors routed to the affected one. In both cases, &quot;down for me&quot; and &quot;down for everyone&quot; are genuinely different situations produced by a failure at different points in the same overall chain.
      </p>
      <QuickCheck
        question="Why might a website be completely unreachable for one person while it loads normally for everyone else?"
        options={[
          { text: "The failure could be local to that person's network or DNS resolver, or could involve just one server in a larger multi-server setup that they happened to be routed to", correct: true, explanation: "Correct. Both a local DNS/network issue and an uneven failure across a load-balanced set of servers can make a site appear down for some visitors while working fine for others." },
          { text: "It's impossible for a site to be down for only one visitor — it must be down for everyone or no one", correct: false, explanation: "Failures can occur at different points along the chain — a local DNS issue or one server among many failing can affect only a subset of visitors." },
          { text: "The site is intentionally blocking that specific visitor's device permanently", correct: false, explanation: "Deliberate blocking is possible in some cases, but it's not the typical explanation, and it wouldn't usually be the first thing to suspect over a local DNS or load-balancing issue." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Healthy, slow, and down: where the request/response chain diverges"
        type="comparison"
        svgSrc="/diagrams/technology-basics-what-makes-a-website-down-vs-slow-request-response-comparison.svg"
        altText="A comparison of three request paths from a browser to a website's server: a healthy path that completes quickly, a slow path that reaches the server but waits behind a backlog before a response comes back, and a down path that fails outright with no response ever arriving."
      />
      <p>
        The healthy and slow paths both end with an arrow reaching the browser — a response arrived either way. The down path simply has no arrow completing the loop, which is the entire structural difference.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating any slow-loading site as if it's 'down'.", fix: "Check whether the page eventually finishes loading — if a response does arrive, even a delayed one, the site is slow, not down, and the underlying cause is likely load or network latency rather than an outage." },
          { mistake: "Assuming a site being unreachable for you means it's down for everyone.", fix: "Try a different network or device, or check whether others can reach it, before concluding the site itself is down — the problem could be local to your own connection or DNS resolver." },
          { mistake: "Treating a fast server-error page as unrelated to a working connection.", fix: "Recognize that a quick error response means the request/response chain actually completed — the server is reachable and answering, just with a failure result instead of the intended page." },
        ]}
      />
      <MisconceptionCallout
        myth="A slow-loading website means it's down or broken."
        reality={<p>Slow and down are different failures in the same <TermLink href="/technology-basics/what-makes-a-website-down-vs-slow">request/response</TermLink> chain. A slow site still completes the round trip &mdash; DNS resolves, a connection opens, the server processes the request and sends a response &mdash; just with added delay, often from heavy load. A down site fails to complete that chain at all: DNS doesn&apos;t resolve, the connection is refused, or the browser hits a <TermLink href="/technology-basics/what-makes-a-website-down-vs-slow">server timeout</TermLink> with no response ever arriving. A page that eventually loads, however slowly, was never actually down.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before assuming a site is down, wait to see whether the page eventually finishes loading — a delayed response still counts as the site being reachable, just slow.",
          "If a site seems unreachable, check it from a different network or device (or ask someone else to check) before concluding the site itself has an outage.",
          "Notice whether an error appears instantly versus after a long wait — an instant error means the server responded; a long wait with nothing means the request likely never completed.",
          "Read How Online Payments Actually Get Processed next to see a different chain of request/response steps where a similar down-versus-delayed distinction applies to a declined charge.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What's the difference between a website being down and a website being slow?", answer: "A slow website's request/response chain still completes, just with extra delay somewhere along the way — usually server load or network latency. A down website's chain fails outright, with no response ever arriving, due to a DNS failure, a refused connection, or a timeout." },
          { question: "Does a website loading error mean the site is down?", answer: "Not necessarily. A server-error page that appears quickly means the server did respond, just with a failure result, which is a different and generally less severe situation than a timeout where no response ever arrives at all." },
          { question: "Why is a website down for me but not for anyone else?", answer: "This can happen if the issue is local to your own network or DNS resolver rather than the site's actual servers, or if the site is served by multiple servers and only the one your request was routed to is having a problem." },
          { question: "How can I tell if a website is actually down or just loading slowly for me?", answer: "Give it more time to see whether the page eventually finishes loading, and try checking from a different network or device — if it loads elsewhere or eventually completes, it was slow rather than down." },
          { question: "What causes a website to become slow during high traffic?", answer: "When a server receives more simultaneous requests than it can process at once, incoming requests queue up and wait longer before being handled, which adds delay to each response without preventing it from eventually completing." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
