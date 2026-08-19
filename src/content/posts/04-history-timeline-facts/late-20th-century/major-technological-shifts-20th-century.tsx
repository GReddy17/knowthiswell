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
  title: "Major Technological Shifts (20th century)",
  category: "history-timeline-facts",
  order: 41,
  subtopic: "late-20th-century",
  tags: ["20th century technology", "personal computer", "internet history", "space race", "technology timeline"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "From powered flight in 1903 to the World Wide Web in the early 1990s — the major technological shifts that reshaped the 20th century, and how they built on each other.",
  summary: "The 20th century saw a compressed sequence of major technological shifts — powered flight, mass electrification, nuclear power, space travel, and personal computing among them — each of which typically built directly on infrastructure or discoveries from the shift before it, rather than arriving as isolated, unrelated breakthroughs.",
  sources: [
    { label: "Smithsonian National Air and Space Museum — The Wright Brothers", url: "https://airandspace.si.edu/explore/stories/wright-brothers" },
    { label: "Encyclopaedia Britannica — History of Technology", url: "https://www.britannica.com/technology/history-of-technology" },
    { label: "NASA — Apollo 11 Mission Overview", url: "https://www.nasa.gov/mission/apollo-11/" },
    { label: "CERN — A Short History of the Web", url: "https://home.cern/science/computing/birth-web/short-history-web" },
  ],
  seeAlso: [
    "history-timeline-facts/fall-of-the-berlin-wall",
    "history-timeline-facts/formation-of-the-european-union",
    "history-timeline-facts/the-civil-rights-movement-us",
  ],
  glossary: [
    { term: "Mass electrification", definition: "The large-scale extension of electric power infrastructure to homes, businesses, and industry, which transformed most of the industrialized world across the early-to-mid 20th century." },
    { term: "Space Race", definition: "The mid-20th-century competition, primarily between the United States and the Soviet Union, to achieve milestones in spaceflight, culminating in the 1969 Apollo 11 Moon landing." },
    { term: "Personal computer", definition: "A computer designed for individual use, small and affordable enough for homes and small offices, which became widely available starting in the mid-to-late 1970s." },
    { term: "World Wide Web", definition: "A system for accessing linked documents over the internet via browsers, invented by Tim Berners-Lee at CERN in 1989-1991 — distinct from the internet itself, which existed earlier as the underlying network." },
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
          "The 20th century compressed an unusually large number of major technological shifts into one hundred years — from powered flight (1903) to the Moon landing (1969) to the World Wide Web (early 1990s) — each generally building on the infrastructure or science of the one before it.",
          "The internet and the World Wide Web are not the same thing: the internet (the underlying network) existed for decades before Tim Berners-Lee invented the Web (a way of linking and browsing documents on it) at CERN in 1989-1991.",
          "Many of the century's most consumer-visible shifts, like the personal computer, had their direct roots in earlier military or research technology, rather than being purely commercial inventions from a standing start.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The 20th century saw technology change faster, and more visibly, than perhaps any prior century: it opened with the Wright brothers&apos; first powered flight in 1903 and closed with the early World Wide Web reshaping how people accessed information. Along the way, <TermLink href="/history-timeline-facts/major-technological-shifts-20th-century">mass electrification</TermLink> brought reliable electric power to homes and factories, nuclear technology emerged from wartime research, the <TermLink href="/history-timeline-facts/major-technological-shifts-20th-century">Space Race</TermLink> put humans on the Moon by 1969, and the <TermLink href="/history-timeline-facts/major-technological-shifts-20th-century">personal computer</TermLink> moved computing from institutions into homes by the 1980s. These shifts weren&apos;t isolated — most built directly on the science, materials, or infrastructure of the shift that came before.</div>}
        detailed={<div className="prose-p">A precise, easily-confused distinction: the internet (a global network connecting computers, with roots in the US Department of Defense&apos;s ARPANET, first operational in 1969) is not the same as the <TermLink href="/history-timeline-facts/major-technological-shifts-20th-century">World Wide Web</TermLink> (a specific system of linked, browsable documents running on top of that network, invented by British computer scientist Tim Berners-Lee at CERN between 1989 and 1991). The internet existed and grew for two decades as a research and military network before the Web made it broadly usable and public-facing. Similarly, the personal computer&apos;s rise in the late 1970s and 1980s built directly on earlier mainframe and military-funded computing research going back to World War II-era code-breaking machines and post-war government-funded semiconductor research — it did not emerge from a standing start as a purely consumer product. A regional/sequencing nuance worth flagging: technological pace was uneven globally — mass electrification, for instance, reached the majority of US households by the 1930s, according to Britannica&apos;s overview of the period, while comparable rural electrification took considerably longer in many other parts of the world, continuing well into the second half of the century.</div>}
      />
      <FootnoteAside>Tim Berners-Lee&apos;s original 1989 proposal for the World Wide Web at CERN was reportedly labeled by his supervisor as &quot;vague, but exciting&quot; — a note CERN itself preserves and cites in its official history of the Web&apos;s invention.</FootnoteAside>
      <p>
      That chain — military and research technology feeding into later consumer technology, again and again — is the throughline that makes the century&apos;s pace of change easier to follow than treating each invention as a standalone surprise.
      </p>

      <QuickCheck
        question="What is the key documented difference between 'the internet' and 'the World Wide Web'?"
        options={[
          { text: "They are two names for exactly the same technology, invented at the same time", correct: false, explanation: "They are distinct: the internet is the underlying network (with roots in the 1969 ARPANET), while the Web, invented at CERN in 1989-1991, is a specific system for linking and browsing documents that runs on top of that network." },
          { text: "The internet is the underlying global network, which existed for about two decades before the World Wide Web, a system for browsing linked documents, was built on top of it", correct: true, explanation: "Correct. CERN's own history documents Tim Berners-Lee inventing the Web in 1989-1991, built on top of an internet infrastructure with roots going back to 1969." },
          { text: "The World Wide Web came first, and the internet was built later to support it", correct: false, explanation: "The order is reversed — the underlying internet network predates the Web by roughly two decades." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Powered flight and the technology it unlocked (baseline)</h3>
      <div className="prose-p">
      On December 17, 1903, Orville and Wilbur Wright achieved the first sustained, controlled, powered flight of a heavier-than-air aircraft near Kitty Hawk, North Carolina, documented in detail by the Smithsonian National Air and Space Museum. Within roughly four decades, aviation had gone from a fragile 12-second first flight to jet propulsion and, by the late 1950s, the beginnings of the space program — a pace of advancement historians frequently cite as emblematic of the century&apos;s overall acceleration in technology.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The Space Race as an exception driven by geopolitics, not gradual commercial development (variation)</h3>
      <div className="prose-p">
      Unlike most other 20th-century technological shifts, which advanced through gradual commercial and scientific development, the Space Race, documented by NASA, was driven primarily by Cold War competition between the United States and the Soviet Union — from the Soviet Union&apos;s Sputnik satellite (1957) to NASA&apos;s Apollo 11 Moon landing (July 20, 1969). This compressed a technology timeline dramatically: fewer than twelve years passed between Sputnik and a crewed Moon landing, a pace largely explained by sustained government funding tied to national prestige, rather than typical commercial development timelines.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: From mainframes to the personal computer to today&apos;s connected devices (present-day / applied)</h3>
      <div className="prose-p">
      The personal computer&apos;s arrival in homes and small offices by the late 1970s and 1980s (with machines like the Apple II and IBM PC) depended on decades of prior semiconductor and computing research, much of it originally funded for military, aerospace, and large-institution use. That same lineage — military/research technology maturing into consumer technology — continued directly into the Web&apos;s public rollout in the 1990s, and remains visible today every time a smartphone (itself dependent on GPS, originally a US military system) connects to the internet.
      </div>

      <QuickCheck
        question="What made the Space Race's technological pace unusual compared to most other 20th-century shifts?"
        options={[
          { text: "It advanced entirely through private commercial investment with no government involvement", correct: false, explanation: "The opposite is documented — the Space Race was driven primarily by government funding tied to Cold War competition between the US and Soviet Union, not private commercial investment." },
          { text: "It was compressed into an unusually short timeframe by sustained government funding tied to Cold War prestige, rather than typical gradual commercial development", correct: true, explanation: "Correct. NASA's own documentation shows fewer than twelve years passed between Sputnik (1957) and the Apollo 11 Moon landing (1969), a pace historians attribute to geopolitical competition." },
          { text: "It happened more slowly than other technological shifts of the century", correct: false, explanation: "It was notably faster, not slower — the compressed timeline from Sputnik to the Moon landing is often cited specifically for its unusual speed." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Major 20th-century technological shifts: a documented timeline"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-major-technological-shifts-20th-century-milestones-timeline.svg"
        altText="Horizontal timeline showing the Wright brothers' first powered flight in 1903, mass electrification reaching most US households by the 1930s, the first digital computers and nuclear technology emerging around World War II in the 1940s, the ARPANET's first operation in 1969 alongside the Apollo 11 Moon landing the same year, the personal computer's rise in the late 1970s and 1980s, and the World Wide Web's invention at CERN between 1989 and 1991."
      />
      <p>
      Read left to right, the diagram shows the pattern historians point to most often: each shift tends to sit on infrastructure or research built during the shift before it — flight enabling later aerospace and space technology, wartime computing research enabling the personal computer, and decades of internet infrastructure enabling the Web&apos;s public arrival at the century&apos;s end.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using \"the internet\" and \"the World Wide Web\" interchangeably.", fix: "The internet is the underlying network (functional by 1969 via ARPANET); the Web is a specific way of linking and browsing documents on that network, invented at CERN in 1989-1991, roughly two decades later." },
          { mistake: "Assuming personal computers appeared as a sudden, purely commercial invention with no prior technological lineage.", fix: "Personal computing in the late 1970s and 1980s built directly on decades of earlier mainframe and military/research-funded computing and semiconductor development, not a standing start." },
          { mistake: "Assuming technological change moved at the same pace everywhere in the world during the 20th century.", fix: "Documented milestones like near-universal electrification often arrived in industrialized nations, including the US, well before comparable infrastructure reached many rural or less-industrialized regions globally, sometimes by several decades." },
        ]}
      />
      <MisconceptionCallout
        myth="Major 20th-century technologies, like the personal computer or the internet, appeared as sudden, isolated commercial breakthroughs rather than building on prior research."
        reality={<p>Documented histories from institutions including the Smithsonian, NASA, and CERN show a consistent pattern: most major 20th-century consumer technologies had direct roots in earlier military, government, or research funding. The internet&apos;s predecessor, ARPANET, was a US Department of Defense project before it became a public network; the personal computer built on decades of institutional and military-funded computing research; and GPS, now standard in consumer smartphones, was originally a US military navigation system. The Space Race, similarly, moved as fast as it did specifically because of sustained Cold War government funding, not typical gradual commercial development.</p>}
      />

      <QuickCheck
        question="Which best describes the documented relationship between early military/government-funded technology and later consumer technology in the 20th century?"
        options={[
          { text: "They were unrelated — consumer technologies were developed independently, from scratch, by private companies", correct: false, explanation: "Documented histories show the opposite pattern repeatedly — ARPANET, GPS, and early computing research all began as government or military projects before becoming consumer-facing technology." },
          { text: "Many major consumer technologies of the century had direct roots in earlier military or government-funded research", correct: true, explanation: "Correct. This pattern — ARPANET into the internet, military-funded computing into personal computers, military GPS into consumer navigation — is well documented across multiple technologies." },
          { text: "Consumer technology consistently came first, and governments later adapted it for military use", correct: false, explanation: "The documented sequence generally runs the other direction — government or military development came first, with consumer adoption following, sometimes by decades." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you hear \"the internet\" and \"the World Wide Web\" used as synonyms, mentally separate them — the network came first, by about two decades, and the Web is what made it browsable.",
          "When a consumer technology is described as a sudden invention, check whether it had an earlier military or research-funded predecessor, as GPS, ARPANET, and early computing did.",
          "Notice date gaps like Sputnik (1957) to Apollo 11 (1969) — under twelve years — as a marker of how unusually compressed Cold War-driven technological development was compared to typical commercial timelines.",
          "When reading about 20th-century technology reaching \"everyone,\" check whether that claim is scoped to a specific country or region — global adoption of things like electrification was highly uneven in timing.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What was the first major technological shift of the 20th century?", answer: "The Wright brothers' first sustained, controlled, powered flight on December 17, 1903, documented by the Smithsonian National Air and Space Museum, is widely cited as an early defining technological milestone of the century, alongside the spread of mass electrification in the following decades." },
          { question: "What is the difference between the internet and the World Wide Web?", answer: "The internet is the underlying global computer network, with roots in the US military's ARPANET (first operational in 1969). The World Wide Web is a specific system for linking and browsing documents on that network, invented by Tim Berners-Lee at CERN between 1989 and 1991 — roughly two decades later." },
          { question: "When did personal computers become widely available?", answer: "Personal computers became commercially available to homes and small offices starting in the late 1970s, with wider mainstream adoption through the 1980s, following decades of earlier mainframe and military/research-funded computing development." },
          { question: "How long did it take to go from Sputnik to the Moon landing?", answer: "Just under twelve years — the Soviet Union launched Sputnik, the first artificial satellite, in 1957, and NASA's Apollo 11 mission landed astronauts on the Moon on July 20, 1969." },
          { question: "Why did technology change so fast in the 20th century compared to earlier centuries?", answer: "Historians point to several compounding factors: sustained government and military research funding (especially around the two World Wars and the Cold War), rapid growth in electrification and manufacturing capacity, and each new technology tending to build directly on infrastructure or discoveries from the one before it, rather than starting from scratch." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
