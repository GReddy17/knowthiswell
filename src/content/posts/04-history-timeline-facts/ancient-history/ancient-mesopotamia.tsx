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
  title: "Ancient Mesopotamia",
  category: "history-timeline-facts",
  order: 1,
  subtopic: "ancient-history",
  tags: ["mesopotamia", "sumer", "babylon", "cuneiform", "ancient civilizations"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Mesopotamia, the land between the Tigris and Euphrates, produced the first cities, the first writing system, and the first law codes — the template later civilizations built on.",
  summary: "Ancient Mesopotamia was a region in modern-day Iraq between the Tigris and Euphrates rivers where, starting around 3500 BCE, humans built the first cities, invented writing, and wrote the first law codes.",
  sources: [
    { label: "The British Museum — Mesopotamia", url: "https://www.britishmuseum.org/collection/galleries/ancient-mesopotamia" },
    { label: "Encyclopaedia Britannica — Mesopotamia", url: "https://www.britannica.com/place/Mesopotamia-historical-region-Asia" },
    { label: "UNESCO World Heritage — Ancient City of Uruk", url: "https://whc.unesco.org/en/tentativelists/5751/" },
  ],
  seeAlso: [
    "history-timeline-facts/ancient-egypt",
    "history-timeline-facts/indus-valley-civilization",
    "language-vocabulary/history-of-the-english-language",
  ],
  glossary: [
    { term: "Cuneiform", definition: "The wedge-shaped writing system pressed into clay tablets, invented in Sumer around 3200 BCE — the earliest known writing system." },
    { term: "City-state", definition: "An independent city that governs itself and the farmland around it, rather than being part of a larger unified nation." },
    { term: "Ziggurat", definition: "A massive stepped temple tower built in Mesopotamian cities, dedicated to a city's patron god." },
    { term: "Code of Hammurabi", definition: "A Babylonian law code from around 1754 BCE, one of the earliest and most complete written legal codes to survive." },
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
          "Mesopotamia — \"land between the rivers\" — sat between the Tigris and Euphrates in what is now Iraq, and is where the first cities in human history appeared.",
          "Sumerians invented cuneiform writing around 3200 BCE, originally to track grain and trade, not to record literature or history.",
          "Mesopotamia was never one unified nation for most of its history — it was a shifting patchwork of competing city-states, then empires (Akkadian, Babylonian, Assyrian) that rose and fell over roughly 3,000 years.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Mesopotamia was a region in the Middle East, roughly modern-day Iraq, sitting between two rivers — the <TermLink href="/history-timeline-facts/ancient-mesopotamia">Tigris</TermLink> and the Euphrates. Because the rivers flooded and left behind rich soil, farming could support far more people than hunting and gathering could, and starting around 3500 BCE, people settled into the first real cities, like Uruk and Ur. To manage all the grain, trade, and property that came with city life, they invented writing — wedge-shaped marks pressed into wet clay called cuneiform, the earliest writing system we know of.</div>}
        detailed={<div className="prose-p">Mesopotamia was never a single country — it&apos;s a geographic and cultural region, not a political one. Its history runs through a sequence of dominant powers: Sumerian city-states (Uruk, Ur, Lagash, Eridu) from roughly 4500–2000 BCE, the Akkadian Empire under Sargon of Akkad (the first known empire to unite multiple city-states under one ruler, c. 2334 BCE), the Babylonian Empire (peaking under Hammurabi around 1754 BCE, and again centuries later under Nebuchadnezzar II), and the Assyrian Empire, which at its height around 700 BCE controlled territory from Egypt to Iran. Each of these powers used the same basic toolkit — cuneiform writing, irrigation agriculture, ziggurat temple architecture, and a polytheistic religion — even as political control changed hands repeatedly. That toolkit, not any single ruling dynasty, is what makes &quot;Mesopotamian civilization&quot; a coherent thing to study across three thousand years of shifting borders.</div>}
      />
      <FootnoteAside>The word &quot;Mesopotamia&quot; comes from Greek, meaning &quot;between rivers&quot; — it&apos;s a geographic label the Greeks applied later, not what the people who lived there called their own land.</FootnoteAside>
      <p>
      Understanding why Mesopotamia gets called &quot;the cradle of civilization&quot; means looking at what specifically started there first — and separating the genuine firsts from things that were independently invented elsewhere around the same time.
      </p>

      <QuickCheck
        question="Sumerians invented cuneiform writing. What was it originally used for?"
        options={[
          { text: "Recording religious myths and epic poetry", correct: false, explanation: "Religious and literary texts came later — the earliest cuneiform tablets are almost entirely administrative, not literary." },
          { text: "Tracking grain shipments, trade, and property records", correct: true, explanation: "Correct. The earliest cuneiform tablets are receipts and inventories — writing began as an accounting tool for a growing city economy, and literature came centuries after." },
          { text: "Sending messages between rival kings", correct: false, explanation: "Diplomatic correspondence using cuneiform did happen later (like the Amarna Letters), but that's not what the system was invented for." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Case studies</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 1: Uruk — the first true city (baseline case)</h3>
      <div className="prose-p">
      By around 3100 BCE, Uruk had grown to an estimated 40,000–80,000 people inside its walls — larger than any human settlement before it. It had a monumental temple complex dedicated to the goddess Inanna, planned residential districts, and a economy complex enough that its administrators needed a way to track it — which is why the earliest cuneiform tablets come from Uruk. The legendary king Gilgamesh, hero of the <TermLink href="/history-timeline-facts/ancient-mesopotamia">Epic of Gilgamesh</TermLink> (the oldest surviving epic poem in world literature), is traditionally associated with Uruk, though how much of the epic reflects a real historical ruler is debated by historians.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 2: Hammurabi&apos;s Code — law in writing (variation / turning point)</h3>
      <div className="prose-p">
      Around 1754 BCE, the Babylonian king Hammurabi had 282 laws carved onto a nearly 7-foot stone stele and set up in public, covering everything from trade disputes to criminal punishment to family law. It wasn&apos;t the first law code in Mesopotamia — earlier ones from Ur and Eshnunna survive in fragments — but it&apos;s the most complete, and its famous &quot;eye for an eye&quot; principle (lex talionis) shows a legal system built on codified, publicly known rules rather than a ruler&apos;s word alone. Punishments varied sharply by the social class of both offender and victim, which is a reminder that &quot;ancient law&quot; doesn&apos;t mean &quot;equal law.&quot;
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 3: What Mesopotamia still hands us today (real-world / applied case)</h3>
      <div className="prose-p">
      The 60-minute hour and 360-degree circle both come from the Sumerian base-60 (sexagesimal) number system, still in use every time you check a clock. The seven-day week has roots in Babylonian astronomy, which tracked seven visible celestial bodies (the sun, moon, and five planets). And the basic idea that laws should be written down, public, and apply predictably rather than depend entirely on a ruler&apos;s mood — however imperfectly Hammurabi&apos;s Code lived up to it — is a direct ancestor of the idea that a legal system should be knowable in advance.
      </div>

      <QuickCheck
        question="Why do clocks have 60 minutes in an hour, and circles have 360 degrees?"
        options={[
          { text: "It's a coincidence — both numbers were chosen independently", correct: false, explanation: "Not a coincidence — both trace back to the same source." },
          { text: "Both come from the Sumerian base-60 number system", correct: true, explanation: "Correct. Sumerians used a base-60 (sexagesimal) counting system, likely because 60 divides evenly by so many numbers (2, 3, 4, 5, 6, 10, 12, 15, 20, 30) — useful for trade and measurement, and it's still baked into how we measure time and angles." },
          { text: "They come from ancient Greek mathematics", correct: false, explanation: "Greek mathematicians used and refined a lot of Babylonian astronomy, but the base-60 system itself predates Greece by well over a thousand years." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Mesopotamia timeline: major powers, c. 3500 BCE – 539 BCE"
        type="flow"
        svgSrc="/diagrams/04-ancient-mesopotamia-timeline.svg"
        altText="Horizontal timeline showing the sequence of dominant Mesopotamian powers from the Sumerian city-states around 3500 BCE, through the Akkadian Empire under Sargon around 2334 BCE, the Babylonian Empire under Hammurabi around 1754 BCE, the Assyrian Empire at its height around 700 BCE, and the Neo-Babylonian Empire ending with the Persian conquest in 539 BCE."
      />
      <p>
      The key thing the timeline shows: Mesopotamian &quot;civilization&quot; wasn&apos;t one continuous empire — it was a 3,000-year relay race between different powers occupying the same river valley, each inheriting the writing system, religion, and city-building know-how of the ones before it.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating \"Mesopotamia\" and \"Babylon\" as the same thing.", fix: "Babylon was one city-state that became dominant at certain points (notably under Hammurabi, and centuries later under Nebuchadnezzar II) — Mesopotamian history spans many powers, of which Babylon is only one, not the whole story." },
          { mistake: "Assuming Egypt and Mesopotamia had the same civilization or copied each other.", fix: "They developed largely independently and around the same era, with different writing systems (hieroglyphics vs. cuneiform), different religions, and different political structures — parallel invention, not shared origin." },
          { mistake: "Thinking Hammurabi's Code applied equally to everyone.", fix: "Punishments explicitly differed by the social class of the people involved — it was a written legal system, not an equal one by modern standards." },
        ]}
      />
      <MisconceptionCallout
        myth="Mesopotamia was a single ancient kingdom, like a Mesopotamian version of Egypt under the pharaohs."
        reality={<p>Mesopotamia was a region, not a kingdom — for most of its history it was divided among competing, independent city-states, and even when unified under an empire (Akkadian, Babylonian, or Assyrian), that unification usually didn&apos;t last more than a few centuries before fragmenting again. The geographic label &quot;Mesopotamia&quot; is doing the work that a single dynasty&apos;s name does for Egypt.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you read an analog clock or measure an angle in degrees, notice you're using Sumerian math that's over 4,000 years old.",
          "If you come across the phrase \"eye for an eye,\" you now know its most famous written source: Hammurabi's Code, carved in stone around 1754 BCE.",
          "Look up a photo of the Uruk stele or the Hammurabi stele online — seeing the actual cuneiform makes the abstract idea of \"the first writing\" concrete.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Where was Mesopotamia located?", answer: "Mesopotamia was in the region between the Tigris and Euphrates rivers, corresponding to most of modern-day Iraq, plus parts of Syria, Turkey, and Iran." },
          { question: "What is the oldest civilization, Mesopotamia or Egypt?", answer: "They developed at roughly the same time, starting around 3500–3100 BCE, largely independently of each other — historians generally treat them as parallel \"cradles of civilization\" rather than ranking one as older." },
          { question: "Did Mesopotamia invent writing?", answer: "Sumerians in Mesopotamia developed cuneiform, the earliest writing system currently known, around 3200 BCE. Egyptian hieroglyphics appeared at a similar time, and the two systems developed independently." },
          { question: "Why did Mesopotamian civilization decline?", answer: "There was no single collapse — different Mesopotamian powers fell to different causes over centuries, including conquest (the Assyrian Empire fell to a coalition of Babylonians and Medes in 612 BCE; Babylon itself fell to Persia in 539 BCE), as well as soil salination from centuries of irrigation, which gradually reduced agricultural yields in southern Mesopotamia." },
          { question: "What does cuneiform mean?", answer: "\"Cuneiform\" comes from Latin cuneus, meaning \"wedge\" — it describes the wedge-shaped marks made by pressing a reed stylus into wet clay, the writing method Sumerians invented and later cultures across the region adapted for their own languages." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

    </>
  );
}
