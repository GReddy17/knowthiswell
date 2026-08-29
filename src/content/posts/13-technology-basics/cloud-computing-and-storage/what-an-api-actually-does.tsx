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
  title: "What an API Actually Does (In Plain Terms)",
  category: "technology-basics",
  order: 35,
  subtopic: "cloud-computing-and-storage",
  tags: ["what is an api", "api explained", "client server", "how apps talk to servers", "technology basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "An API is a defined menu of requests one piece of software can make to another, so apps can ask for data or actions without needing to know how the other side works.",
  summary: "An API (application programming interface) is a defined set of rules that lets one piece of software request data or actions from another, without either side needing to know the other's internal workings.",
  sources: [
    { label: "Cloudflare Learning Center — What Is an API?", url: "https://www.cloudflare.com/learning/security/api/what-is-an-api/" },
    { label: "Cloudflare Learning Center — What Is an API Endpoint?", url: "https://www.cloudflare.com/learning/security/api/what-is-api-endpoint/" },
    { label: "MDN Web Docs — Introduction to Web APIs", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction" },
    { label: "IETF RFC 9110 — HTTP Semantics", url: "https://www.rfc-editor.org/rfc/rfc9110.html" },
  ],
  seeAlso: [
    "technology-basics/what-a-server-actually-is",
    "technology-basics/why-apps-need-internet-to-sync",
    "technology-basics/how-file-sharing-links-work",
  ],
  glossary: [
    { term: "API (application programming interface)", definition: "A defined set of rules that lets one piece of software request data or actions from another, specifying exactly what requests are allowed and what format the response will take." },
    { term: "Endpoint", definition: "A specific address an API exposes for one particular kind of request, such as 'get today's weather' or 'submit a new order' — a single API is usually made of many endpoints." },
    { term: "Request", definition: "A structured message an app sends to an API asking for data or asking it to perform an action." },
    { term: "Response", definition: "The structured reply an API sends back after processing a request, typically containing the requested data or a confirmation the requested action happened." },
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
          "An API is a defined menu of requests one program can make to another — it's the agreed-upon interface, not the system doing the work behind it.",
          "Apps almost never touch another company's database or internal systems directly; they go through that company's API, which decides exactly what's allowed and what shape the answer takes.",
          "Because the API is a stable contract, the system behind it can change completely without breaking the apps that use it, as long as the API itself keeps behaving the same way.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Ordering food at a restaurant works through a menu, not by walking into the kitchen yourself. You pick an item from a fixed list, tell the waiter, and the kitchen — whose internal process you never see — sends back a finished dish. An <TermLink href="/technology-basics/what-an-api-actually-does">API</TermLink> is that menu for software: one app asks for something specific in a way the other system already agreed to understand, and gets back a defined kind of answer, without ever seeing how that answer was actually produced.</div>}
        detailed={<div className="prose-p">This is the <strong>request → response (client/server)</strong> mental model, combined with <strong>abstraction layers</strong>. An API defines a fixed set of <TermLink href="/technology-basics/what-an-api-actually-does">endpoints</TermLink> — specific, named things you&apos;re allowed to ask for or trigger — along with the exact structure a valid <TermLink href="/technology-basics/what-an-api-actually-does">request</TermLink> must take and the exact structure the <TermLink href="/technology-basics/what-an-api-actually-does">response</TermLink> will have. Because that contract is fixed and published, the software behind the API — the database, the business logic, the server infrastructure — can be entirely rewritten or migrated without breaking anything, as long as the API keeps honoring the same requests and returning the same response shapes. The edge case worth knowing: an API is a promise about behavior, not a guarantee of permanence — providers do sometimes change or retire specific endpoints (usually with advance notice, through a documented process called API versioning), which is exactly why an app that hard-codes assumptions about an API&apos;s exact current behavior, rather than following its documented contract, can break when that provider updates it.</div>}
      />
      <FootnoteAside>Most modern web APIs are built on HTTP, the same request/response protocol your browser uses to load web pages — an API request is often functionally similar to visiting a URL, except the response is structured data (commonly in a machine-readable format called JSON) meant for a program to parse, rather than a formatted page meant for a person to read.</FootnoteAside>

      <p>
        Once an API is understood as a fixed, published contract rather than a direct line into another system&apos;s internals, a lot of app behavior — why some features exist and others don&apos;t, why an outage in one company&apos;s service can break a totally different app — starts making structural sense.
      </p>

      <QuickCheck
        question="A weather app on your phone shows today's forecast. What is most likely happening behind the scenes?"
        options={[
          { text: "The app is directly reading from a government weather agency's internal database over the internet", correct: false, explanation: "Apps essentially never get direct access to another organization's internal database — that would expose far more than intended and offer no stability if that database's structure changed." },
          { text: "The app sends a request to a weather API's forecast endpoint, and the API sends back a structured response containing just the forecast data the app asked for", correct: true, explanation: "Correct. The API acts as the defined, limited doorway — the app only sees what the API's endpoint is built to expose, not the systems generating that data behind it." },
          { text: "The forecast is calculated entirely on the phone itself, with no external request involved", correct: false, explanation: "Weather forecasting requires large-scale data and models that don't run locally on a phone — an external request to a weather service's API is what supplies the forecast." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A shopping app checking whether an item is in stock (baseline case)</h3>
      <div className="prose-p">
        A shopping app needs to show whether a product is currently in stock. It sends a request to the retailer&apos;s inventory API, asking specifically for that one product&apos;s stock status by its product ID. The API checks the retailer&apos;s internal inventory system and sends back a small, structured response — just the stock count or an in-stock/out-of-stock flag — without exposing anything else about the retailer&apos;s internal systems, pricing logic, or supplier data. The app never sees the inventory database directly; it only sees what the API was built to reveal.
      </div>
      <QuickCheck
        question="A shopping app displays a product's stock status by calling the retailer's inventory API. Does the app have direct access to the retailer's full inventory database?"
        options={[
          { text: "Yes, the API simply forwards direct database access to any app that requests it", correct: false, explanation: "An API is specifically built to limit exposure — it hands back only the defined response for a specific request, never raw, unrestricted access to the underlying database itself." },
          { text: "No, the app only receives the small, structured response the API endpoint was built to return for that specific request, such as a stock count or a flag", correct: true, explanation: "Correct. The API acts as a deliberate, limited doorway — the app sees only what that particular endpoint exposes, never the retailer's internal systems or full database directly." },
          { text: "Yes, but only for read access, never for making changes to inventory", correct: false, explanation: "Even read access to the full internal database isn't typically granted — the API returns a specifically defined, limited response, not open access to the underlying data store at all." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: An API changing its response format (edge case / variation)</h3>
      <div className="prose-p">
        A company updates its API, adding a new field to the response but keeping all existing fields exactly as they were. Apps built to expect only the original fields keep working normally, because the response contract they depend on didn&apos;t change — they simply ignore the new field they don&apos;t recognize. But if that same company had instead removed or renamed an existing field the apps depended on, those apps would break the next time they made a request, since the API contract itself changed underneath them. This is why providers typically version their APIs and give advance notice before making a breaking change.
      </div>
      <QuickCheck
        question="A company adds a brand-new optional field to its API's response but leaves every existing field unchanged. What effect should this have on apps already using that API?"
        options={[
          { text: "All apps using the API will immediately stop working until they're updated", correct: false, explanation: "Adding a new field without touching existing fields doesn't break the parts of the response older apps already depend on — they simply won't use the new field they don't recognize." },
          { text: "Apps that only rely on the original, unchanged fields should keep working normally, since the parts of the contract they depend on are untouched", correct: true, explanation: "Correct. As long as an API preserves the existing response shape a client depends on, adding new optional fields typically doesn't break that client — this is a common, non-breaking way APIs evolve." },
          { text: "The API will automatically reject requests from apps that don't use the new field", correct: false, explanation: "APIs generally don't require clients to use every available field — using a subset of an API's returned data is normal and expected." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: One outage taking down many unrelated apps (real-world / applied case)</h3>
      <p>
        A widely used mapping or payment API experiences an outage, and dozens of unrelated apps that all depend on that same API for maps or checkout suddenly stop working, even though those apps have nothing else in common. This isn&apos;t a coincidence of bad luck — it&apos;s the direct, structural consequence of the API-based architecture: instead of every company building and maintaining its own mapping or payment system from scratch, many rely on the same specialized provider&apos;s API. That saves enormous duplicated effort during normal operation, but it also means a failure in one shared API can ripple outward to every app depending on it at once.
      </p>
      <QuickCheck
        question="Dozens of unrelated apps stop working at the same time after a widely used mapping API goes down. What does this reveal about how those apps were built?"
        options={[
          { text: "It reveals that all of those apps were secretly built by the same company", correct: false, explanation: "Depending on the same shared third-party API doesn't require common ownership — many independent companies commonly rely on the same specialized providers for functions like maps or payments." },
          { text: "It reveals that those apps rely on the same shared external API rather than each building and maintaining their own separate mapping system", correct: true, explanation: "Correct. Relying on a common API is an efficient, normal architectural choice — the trade-off is that a failure in that shared API can affect every app depending on it simultaneously." },
          { text: "It reveals that mapping features are unusually prone to failure compared to other app features", correct: false, explanation: "The outage isn't evidence that mapping specifically is fragile — it's evidence that many apps share the same dependency, so one provider's failure has a wide, visible blast radius." },
        ]}
      />


      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="App to API to server, and back"
        type="flow"
        svgSrc="/diagrams/technology-basics-what-an-api-actually-does-request-response.svg"
        altText="A sequence diagram showing an app on the left sending a structured request to an API in the middle, which is labeled as a defined menu of allowed requests, forwarding that request to a backend server and database on the right, then the response traveling back through the API to the app, illustrating that the app never touches the database directly."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking an API is a website you can visit like any other page.", fix: "An API is built for software to talk to software — visiting an API endpoint's address in a browser often just shows raw structured data, not a normal readable page." },
          { mistake: "Assuming an app has direct access to another company's full internal systems.", fix: "Apps only ever get whatever a specific API endpoint is deliberately built to expose — the internal systems behind it stay hidden by design, not by accident." },
          { mistake: "Blaming an app itself when a feature stops working, without considering an external API it depends on.", fix: "Many app features rely on third-party APIs behind the scenes; an outage or change on the provider's side can break a feature with no bug in the app's own code at all." },
        ]}
      />
      <MisconceptionCallout
        myth="An API is basically just another word for 'the internet' or 'a website.'"
        reality={<p>An API is a specific, defined interface for software-to-software communication — a fixed set of requests one program can make of another, with a fixed structure for the response. A website is built for a human to read in a browser; an API is built for a program to send a request to and parse a structured reply from. Many APIs happen to use the same underlying web technology (HTTP) that websites use, which is part of why the two get confused, but the intended audience and the response format are fundamentally different.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time an app feature suddenly breaks with no update on your end, consider that a third-party API it depends on may have changed or gone down.",
          "If you build or manage software, treat a published API's documented contract as the thing to rely on, not its current undocumented behavior.",
          "Notice how many different apps quietly depend on the same handful of shared APIs (maps, payments, weather) — that's resource pooling at the software layer, not just the hardware layer.",
          "Read What a Server Actually Is next to see what's typically running on the other side of that API, actually handling the request.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does API stand for and what does it actually do?", answer: "API stands for application programming interface. It's a defined set of rules that lets one piece of software request data or actions from another, specifying exactly what requests are allowed and what shape the response takes, without either side needing to see the other's internal workings." },
          { question: "Is an API the same as a website?", answer: "No. A website is built to be read by a person in a browser. An API is built for one program to send a structured request to another program and receive a structured, machine-readable response, even though both commonly use the same underlying web protocol." },
          { question: "Why do apps use APIs instead of building everything themselves?", answer: "Using an existing API (for maps, payments, weather, and similar shared functions) lets developers avoid rebuilding complex, specialized systems from scratch. It's faster and more reliable to request an existing service's defined capability than to recreate it independently." },
          { question: "Can an API change and break an app that uses it?", answer: "Yes, if the change breaks the parts of the response an app depends on — removing or renaming a field it relies on, for instance. Providers typically try to avoid this through API versioning and advance notice, but apps that assume more than the documented contract guarantees can still break." },
          { question: "What is an API endpoint?", answer: "A specific address an API exposes for one particular kind of request, like retrieving a single record or submitting new data. A single API is typically made up of many separate endpoints, each handling a different, defined task." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
