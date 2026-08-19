import React from 'react';
import { PostMeta, PostFrontmatter } from '@/types/post';
import {
  KeyTakeaways,
  ModeToggle,
  FootnoteAside,
  QuickCheck,
  DiagramBlock,
  MistakeList,
  MisconceptionCallout,
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "The Rise of the Internet Age",
  category: "history-timeline-facts",
  order: 43,
  subtopic: "21st-century-so-far",
  tags: ["internet history", "world wide web", "arpanet", "dot-com boom", "digital age"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How a 1969 military-funded computer network became the everyday internet: ARPANET, the invention of the Web, the dot-com boom and bust, and the smartphone era.",
  summary: "The internet grew from ARPANET, a U.S. government-funded computer network first connected in 1969, into a global system that, following the 1989-1991 invention of the World Wide Web at CERN, reshaped commerce, communication, and media within roughly a generation.",
  sources: [
    { label: "Encyclopaedia Britannica — Internet", url: "https://www.britannica.com/technology/Internet" },
    { label: "CERN — A Short History of the Web", url: "https://home.cern/science/computing/birth-web/short-history-web" },
    { label: "Pew Research Center — Internet, Broadband Fact Sheet", url: "https://www.pewresearch.org/internet/fact-sheet/internet-broadband/" },
  ],
  seeAlso: [
    "history-timeline-facts/major-global-events-of-the-2000s",
    "history-timeline-facts/major-global-events-of-the-2010s",
    "history-timeline-facts/major-global-events-of-the-2020s-up-to-2026",
  ],
  glossary: [
    { term: "ARPANET", definition: "A U.S. government-funded computer network, first connected in 1969, widely credited as the direct technical predecessor of today's Internet." },
    { term: "World Wide Web", definition: "A system for linking and accessing documents over the Internet using browsers and hyperlinks, proposed by Tim Berners-Lee at CERN in 1989 and made publicly available in 1991 — distinct from the Internet itself, which is the underlying network." },
    { term: "TCP/IP", definition: "The core set of communication protocols standardizing how data is broken into packets and routed across networks, adopted as the Internet's standard on January 1, 1983, an event sometimes called \"flag day.\"" },
    { term: "Broadband", definition: "Always-on, high-capacity internet access (such as cable, fiber, or DSL) that replaced slower dial-up connections requiring a phone line to be tied up during use." },
  ],
  author: {
    slug: "sara-reed-m-j",
    name: "Sara Reed M J",
    credentialLine: "Contributing Editor, KnowThisWell",
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
          "The Internet and the World Wide Web are not the same thing — the Internet is the underlying network, first connected as ARPANET in 1969, while the Web is a system of linked documents built on top of it, invented by Tim Berners-Lee at CERN between 1989 and 1991.",
          "Public and commercial adoption exploded through the 1990s, driven by graphical browsers and the dot-com boom, then crashed hard in the 2000-2001 dot-com bust before rebuilding on broadband and, later, mobile connections.",
          "According to Pew Research Center, internet use has gone from a minority activity in the 1990s to something the large majority of adults in many countries now do daily, reshaping commerce, communication, and media within roughly one generation.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The Internet started as a government-funded research network, not a consumer product. <TermLink href="/history-timeline-facts/the-rise-of-the-internet-age">ARPANET</TermLink>, funded by the U.S. Department of Defense, connected its first computers in 1969, linking a handful of university and research computers together. Over the next two decades it grew into a wider network of connected networks, which is literally what the word &quot;internet&quot; means. What most people picture when they think of the &quot;internet&quot; today, though, — pages, links, and browsers — is technically the <TermLink href="/history-timeline-facts/the-rise-of-the-internet-age">World Wide Web</TermLink>, a system built on top of the Internet and invented separately, decades later.</div>}
        detailed={<div className="prose-p">The Internet as a technical network took shape gradually: ARPANET connected its first nodes in 1969, and the adoption of <TermLink href="/history-timeline-facts/the-rise-of-the-internet-age">TCP/IP</TermLink> as its standard communication protocol on January 1, 1983, is often marked as the moment the modern Internet&apos;s architecture was set. The World Wide Web came later and separately: Tim Berners-Lee, a researcher at CERN, proposed a system of linked hypertext documents in 1989 and, by 1991, made the technology publicly available, introducing the ideas of web pages, browsers, and URLs that still structure the Web today. Public adoption followed in waves rather than a single smooth climb — a genuine edge case in the story: the &quot;dot-com boom&quot; of the late 1990s, when investment poured into internet companies, was followed by the &quot;dot-com bust&quot; of 2000-2001, when many of those companies collapsed, showing that rapid early adoption did not mean every business model built on the new technology actually worked. Growth resumed through the 2000s on <TermLink href="/history-timeline-facts/the-rise-of-the-internet-age">broadband</TermLink> connections that replaced slow dial-up, and again after 2007 as smartphones made the Web something people carried in their pockets rather than accessed only from a desk.</div>}
      />
      <FootnoteAside>According to accounts documented by UCLA, where the sending computer was located, the very first message ever transmitted over ARPANET in 1969 was intended to be the word &quot;LOGIN&quot; — but the system crashed after only the first two letters were sent, making &quot;LO&quot; the accidental first message in the network&apos;s history.</FootnoteAside>
      <p>
      That distinction between the Internet as a network and the Web as one thing built on top of it matters for understanding everything that follows — the boom, the bust, and the slow shift from a novelty to something most people now use every day.
      </p>

      <QuickCheck
        question="What is the difference between the Internet and the World Wide Web?"
        options={[
          { text: "They are two different names for exactly the same thing", correct: false, explanation: "They refer to different layers of technology, even though the terms are often used interchangeably in casual speech." },
          { text: "The Internet is the underlying network connecting computers; the World Wide Web is a system of linked documents and pages built on top of that network", correct: true, explanation: "Correct. The Internet traces back to ARPANET in 1969, while the Web was invented separately by Tim Berners-Lee at CERN between 1989 and 1991, decades after the network itself existed." },
          { text: "The World Wide Web is the hardware, and the Internet is the software that runs on it", correct: false, explanation: "That reverses the relationship, and neither term refers specifically to hardware or software alone. The Internet is the network; the Web is a document-and-linking system that runs over that network." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: From ARPANET to the standardized Internet (baseline case)</h3>
      <div className="prose-p">
      ARPANET connected its first computers, at UCLA and Stanford Research Institute, in 1969. Over the following years, more research institutions joined, and on January 1, 1983 — an event engineers still refer to as &quot;flag day&quot; — the network fully switched to the TCP/IP protocol suite, the standardized addressing and data-transfer system that remains the technical foundation of the Internet today. This is the point most historians and Britannica mark as the true birth of the Internet as a unified, interoperable network, rather than a single research project.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The invention of the World Wide Web and the dot-com bust (variation / turning point)</h3>
      <div className="prose-p">
      Tim Berners-Lee&apos;s 1989-1991 work at CERN gave the existing Internet something it had lacked: an easy way to link and browse documents using a Web browser. That innovation, paired with graphical browsers like Mosaic and Netscape in the mid-1990s, triggered explosive commercial growth — the &quot;dot-com boom.&quot; But growth outran sound business fundamentals for many companies, and the bubble burst in 2000-2001, wiping out a large share of internet-company stock value. The lesson historians draw from this variation is important: the underlying technology kept growing in usage throughout, even while the financial bubble built on top of it collapsed.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The smartphone-driven, always-on internet of today (real-world / applied case)</h3>
      <div className="prose-p">
      The internet most people use today looks very different from the dial-up, desktop-bound version of the 1990s. Broadband replaced dial-up through the 2000s, removing the need to tie up a phone line, and after the 2007 introduction of the smartphone, mobile internet access became the default way many people go online. Pew Research Center&apos;s ongoing surveys document this shift concretely: internet and broadband adoption, once a minority activity confined to certain demographics, has become close to universal among adults in the countries Pew tracks, fundamentally changing banking, shopping, news, and everyday communication.
      </div>

      <QuickCheck
        question="What was the 'dot-com bust' of 2000-2001?"
        options={[
          { text: "A period when the underlying ARPANET infrastructure physically failed across the United States", correct: false, explanation: "The bust was a financial and business event, not an infrastructure failure — the network itself kept operating." },
          { text: "A sharp market crash in which many internet companies, overvalued during the late-1990s investment boom, lost most of their value or collapsed", correct: true, explanation: "Correct. The dot-com bust followed a period of rapid investment in internet companies during the 1990s boom, many of which had unsustainable business models once investor enthusiasm cooled." },
          { text: "The moment CERN shut down the original World Wide Web servers", correct: false, explanation: "CERN did not shut down the Web — it made the technology freely available in 1991, and it has continued to grow ever since." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The Internet's rise: from ARPANET to the mobile-first Web"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-the-rise-of-the-internet-age-timeline.svg"
        altText="Horizontal timeline showing ARPANET's first connection in 1969, adoption of TCP/IP as the network standard in 1983, Tim Berners-Lee's invention of the World Wide Web at CERN between 1989 and 1991, the rise of graphical browsers and the dot-com boom in the mid-to-late 1990s, the dot-com bust of 2000-2001, the shift to broadband through the 2000s, and the rise of mobile-first internet access following the 2007 introduction of the smartphone."
      />
      <p>
      The diagram splits cleanly into two eras: a slow-building network phase from 1969 to the early 1990s, largely invisible to the public, and a much faster public-adoption phase from the mid-1990s onward, once the Web gave the network an interface ordinary people could actually use.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using 'the Internet' and 'the World Wide Web' as interchangeable terms.", fix: "The Internet is the network (dating to ARPANET in 1969); the Web is a document-linking system built on top of it, invented separately by Tim Berners-Lee in 1989-1991." },
          { mistake: "Assuming one single person or company invented the internet.", fix: "It developed over decades through government-funded research (ARPANET), international collaboration on protocols, and Tim Berners-Lee's separate invention of the Web — no single inventor or company owns the whole history." },
          { mistake: "Treating global internet access as already universal today.", fix: "Pew Research Center's data shows adoption is high in many countries but still not complete — meaningful gaps in access persist by age, income, and region, even as usage keeps climbing." },
        ]}
      />
      <MisconceptionCallout
        myth="The Internet and the World Wide Web are the same thing."
        reality={<p>They describe two different layers of technology. The Internet is the physical and logical network of connected computers, tracing back to ARPANET&apos;s first connection in 1969 and standardized around TCP/IP in 1983. The World Wide Web is a system of linked documents, pages, and browsers built on top of that existing network, invented separately by Tim Berners-Lee at CERN between 1989 and 1991. You can use the Internet without the Web — email and file transfer protocols predate the Web and still don&apos;t require a browser — but the Web cannot exist without the Internet underneath it, according to CERN&apos;s own history of the invention.</p>}
      />

      <QuickCheck
        question="Which came first: the Internet (as a network) or the World Wide Web?"
        options={[
          { text: "The World Wide Web came first, and the Internet was built to support it", correct: false, explanation: "This reverses the actual order. The Web was built to run on top of an Internet that already existed." },
          { text: "The Internet came first — ARPANET connected in 1969, roughly two decades before the Web was invented at CERN in 1989-1991", correct: true, explanation: "Correct. The underlying network existed and grew for two decades before Tim Berners-Lee's Web project gave it a browsable, linked-document interface." },
          { text: "They were invented at the same time, as a single combined project", correct: false, explanation: "They were separate efforts, decades apart — ARPANET in 1969 versus the Web's invention and public release in 1989-1991." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Years since the World Wide Web became publicly available"
        fields={[
          { key: "year", label: "Current year", defaultValue: 2026 },
        ]}
        resultLabel="Years since the Web's 1991 public release"
        formula="yearsSinceYear"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time someone says 'the internet' and 'the web' as if they're the same thing, mentally separate the network (1969) from the document-linking system built on top of it (1989-1991).",
          "When you hear a company or individual credited with 'inventing the internet,' remember it developed through decades of government-funded research and international protocol standards, not a single inventor.",
          "Notice how much of your own internet use now happens on a phone rather than a desktop — that shift dates specifically to the years following the 2007 introduction of the smartphone.",
          "Read the related entries on major global events of the 2000s and 2010s to see how internet growth intersected with the decade's other major stories.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Who invented the internet?", answer: "No single person invented it. ARPANET, a U.S. government-funded research network, connected its first computers in 1969, and the network grew over decades through the work of many researchers and the adoption of shared protocols like TCP/IP in 1983." },
          { question: "What is the difference between the internet and the World Wide Web?", answer: "The internet is the underlying network of connected computers, dating to 1969. The World Wide Web is a system of linked pages and documents accessed through browsers, invented separately by Tim Berners-Lee at CERN between 1989 and 1991, and it runs on top of the internet rather than being the same thing." },
          { question: "When did the internet become available to the public?", answer: "Commercial and public access expanded through the early-to-mid 1990s, especially after graphical web browsers like Mosaic (1993) and Netscape (1994) made the World Wide Web easy to use for non-technical users." },
          { question: "What caused the dot-com bust?", answer: "Heavy investment poured into internet companies during the 1990s 'dot-com boom,' but many of those companies had unsustainable business models. When investor confidence cooled in 2000-2001, a large share of internet-company stock value was wiped out in what's known as the dot-com bust." },
          { question: "How many people use the internet today?", answer: "Pew Research Center's ongoing surveys track this by country; in many high-income countries, internet and broadband adoption among adults is now close to universal, though meaningful access gaps by age, income, and region still remain globally." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
