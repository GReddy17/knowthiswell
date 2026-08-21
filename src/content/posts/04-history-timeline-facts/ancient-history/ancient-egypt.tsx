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
  title: "Ancient Egypt",
  category: "history-timeline-facts",
  order: 2,
  subtopic: "ancient-history",
  tags: ["ancient egypt", "pharaohs", "pyramids", "hieroglyphics", "nile river"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Ancient Egypt lasted roughly 3,000 years along the Nile, longer than the gap between the last pyramid and today — here's how it actually held together that long.",
  summary: "Ancient Egypt was a civilization along the Nile River in northeastern Africa that lasted from around 3100 BCE to 30 BCE, ruled by pharaohs believed to be divine, and famous for its pyramids, hieroglyphic writing, and mummification.",
  sources: [
    { label: "The Metropolitan Museum of Art — Egyptian Art", url: "https://www.metmuseum.org/toah/hd/aeg/hd_aeg.htm" },
    { label: "Encyclopaedia Britannica — Ancient Egypt", url: "https://www.britannica.com/place/ancient-Egypt" },
    { label: "UNESCO World Heritage — Memphis and its Necropolis (Pyramid Fields)", url: "https://whc.unesco.org/en/list/86/" },
  ],
  seeAlso: [
    "history-timeline-facts/ancient-mesopotamia",
    "geography-world-facts/geography-of-africa",
    "history-timeline-facts/ancient-greece",
  ],
  glossary: [
    { term: "Pharaoh", definition: "The title of an ancient Egyptian ruler, believed by Egyptians to be a living link between the gods and the people." },
    { term: "Hieroglyphics", definition: "Egypt's formal picture-based writing system, used mainly for religious and monumental inscriptions." },
    { term: "Mummification", definition: "The process of preserving a body after death by removing organs and drying the tissue, based on the belief that the body was needed in the afterlife." },
    { term: "Rosetta Stone", definition: "A stone slab inscribed with the same text in hieroglyphics, Egyptian demotic script, and Greek, which let scholars finally decode hieroglyphics in 1822." },
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
          "Ancient Egypt lasted roughly 3,000 years (c. 3100 BCE–30 BCE) along the Nile River, held together by a shared belief that the pharaoh was a divine ruler responsible for the country's stability.",
          "The Nile's predictable annual flood, not luck, is what let Egypt farm reliably enough to support pyramid-building, a professional priesthood, and a standing bureaucracy — geography did a lot of the work.",
          "Egyptian history is divided by historians into Kingdoms (Old, Middle, New) separated by unstable \"Intermediate Periods\" — it wasn't one smooth continuous empire, it went through real collapses and recoveries.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Ancient Egypt grew up along the <TermLink href="/history-timeline-facts/ancient-egypt">Nile River</TermLink> in northeastern Africa. Every year the Nile flooded and left behind fertile silt, which meant Egyptian farmers could reliably grow enough food to feed people who weren&apos;t farming — priests, scribes, soldiers, and the workers who built monuments like the pyramids. Egyptians were ruled by a <TermLink href="/history-timeline-facts/ancient-egypt">pharaoh</TermLink>, who wasn&apos;t just a king but was believed to be a god living among people, responsible for keeping order (maat) in the universe itself.</div>}
        detailed={<div className="prose-p">Historians split Egyptian history into three main &quot;Kingdoms,&quot; each a period of strong central rule, separated by unstable &quot;Intermediate Periods&quot; when central authority broke down. The Old Kingdom (c. 2686–2181 BCE) built the great pyramids at Giza. The Middle Kingdom (c. 2055–1650 BCE) followed the First Intermediate Period and expanded Egyptian territory and literature. The New Kingdom (c. 1550–1070 BCE) followed the Second Intermediate Period — during which Egypt was partly ruled by foreign Hyksos rulers — and produced Egypt&apos;s most famous pharaohs, including Hatshepsut, Akhenaten, Tutankhamun, and Ramesses II, plus its greatest territorial extent. This cycle of collapse and rebuilding, three times over roughly two thousand years, shows Egyptian civilization was resilient rather than simply unchanging — the popular image of an eternal, static Egypt undersells how much it actually went through.</div>}
      />
      <FootnoteAside>Cleopatra VII, the pharaoh most people picture, ruled at the very end of ancient Egyptian history (51–30 BCE) — closer in time to the building of the Colosseum in Rome than to the building of the Great Pyramid of Giza, which was already about 2,500 years old by her reign.</FootnoteAside>
      <p>
      The pyramids get the attention, but they&apos;re really the visible tip of a much bigger system — one built on religious belief, engineering skill, and a level of political organization that took centuries to develop, not appear overnight.
      </p>

      <QuickCheck
        question="Cleopatra VII, Egypt's most famous pharaoh, ruled around 30 BCE. The Great Pyramid of Giza was built around 2560 BCE. What does that tell you?"
        options={[
          { text: "Cleopatra lived closer in time to us today than to the pyramid builders", correct: true, explanation: "Correct. About 2,500 years separate Cleopatra from the Great Pyramid — roughly the same gap as between the Great Pyramid and Cleopatra herself is more than the gap between Cleopatra and the modern era's first few centuries. Egyptian history is far longer than the \"single ancient era\" most people picture." },
          { text: "The pyramids were built shortly before Cleopatra's reign", correct: false, explanation: "Not close — about 2,500 years separate them, roughly the same span as from ancient Rome to today." },
          { text: "Cleopatra and the pyramid builders lived around the same time", correct: false, explanation: "They're separated by roughly 2,500 years — Egyptian history spans an enormous stretch of time, not a single era." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Case studies</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 1: The Great Pyramid of Giza (baseline case)</h3>
      <div className="prose-p">
      Built around 2560 BCE as a tomb for the pharaoh Khufu, the Great Pyramid stood as the tallest human-made structure on Earth for roughly 3,800 years — a record unbroken until Lincoln Cathedral was completed in England around 1311 CE. It was built from an estimated 2.3 million limestone blocks, using a workforce of skilled laborers (not, contrary to the popular myth, enslaved people — archaeological evidence from workers&apos; villages near Giza shows organized housing, medical care, and bread and beer rations for paid crews).
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 2: Hatshepsut, a female pharaoh (variation / exception)</h3>
      <div className="prose-p">
      Around 1479 BCE, Hatshepsut became one of the few women to rule Egypt as pharaoh in her own right rather than as a queen consort, and she had herself depicted in official art with the traditional pharaoh&apos;s false beard — a sign that the role&apos;s authority was tied to the office, not literally to being male. Her reign was marked by extensive trade expeditions (notably to the land of Punt) and major building projects, including her mortuary temple at Deir el-Bahari, one of ancient Egypt&apos;s architectural masterpieces. After her death, later pharaohs attempted to erase her name and images from monuments, likely to preserve a clean male succession line rather than out of contempt for her specific reign.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 3: Decoding hieroglyphics — how Egypt still speaks to us (real-world / applied case)</h3>
      <div className="prose-p">
      For over a thousand years after the last hieroglyphic inscriptions were carved, nobody could read them — the knowledge was lost. That changed in 1799, when French soldiers found the <TermLink href="/history-timeline-facts/ancient-egypt">Rosetta Stone</TermLink> near the town of Rosetta, inscribed with the same decree in hieroglyphics, Egyptian demotic script, and ancient Greek. Because scholars could already read Greek, the French linguist Jean-François Champollion used the stone to finally crack hieroglyphics in 1822 — which is why virtually everything we know today about Egyptian religion, history, and daily life, straight from Egyptian sources rather than later Greek or Roman accounts, dates only from the last 200 years of scholarship.
      </div>

      <QuickCheck
        question="How were hieroglyphics finally deciphered after being unreadable for over a thousand years?"
        options={[
          { text: "Archaeologists gradually guessed the meanings of symbols one by one over centuries", correct: false, explanation: "It wasn't gradual guessing — a specific discovery made rapid decoding possible." },
          { text: "The Rosetta Stone, inscribed in hieroglyphics, demotic script, and Greek, let scholars use known Greek to crack the unknown hieroglyphics", correct: true, explanation: "Correct. Found in 1799 and deciphered by Jean-François Champollion by 1822, the Rosetta Stone's parallel Greek text was the key that unlocked hieroglyphics after over a millennium of being unreadable." },
          { text: "Egyptian priests passed the reading knowledge down secretly and eventually shared it", correct: false, explanation: "The knowledge of how to read hieroglyphics was genuinely lost after the writing system fell out of use — it had to be rediscovered from scratch through the Rosetta Stone, not passed down." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Ancient Egypt's three Kingdoms and the Intermediate Periods between them"
        type="flow"
        svgSrc="/diagrams/04-ancient-egypt-kingdoms-timeline.svg"
        altText="Horizontal timeline showing the Old Kingdom (c. 2686-2181 BCE), the First Intermediate Period, the Middle Kingdom (c. 2055-1650 BCE), the Second Intermediate Period, the New Kingdom (c. 1550-1070 BCE), and the later Late Period ending with Cleopatra's death in 30 BCE, illustrating that Egyptian history alternated between strong unified rule and periods of fragmentation rather than being one continuous unbroken era."
      />
      <p>
      The pattern to notice: each Intermediate Period was a real breakdown of central authority, sometimes with rival dynasties ruling different parts of Egypt at once — and each time, a new Kingdom rebuilt unified rule rather than the country staying permanently fragmented.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Picturing all of ancient Egyptian history as one unchanging era.", fix: "It spans roughly 3,000 years across three Kingdoms and multiple Intermediate Periods of real political collapse — treat \"ancient Egypt\" the way you'd treat \"the last 3,000 years of European history,\" not a single snapshot." },
          { mistake: "Believing the pyramids were built by enslaved people.", fix: "Archaeological evidence from workers' settlements near Giza shows organized, paid, fed labor crews — the enslaved-labor story comes largely from later Greek writers like Herodotus, not from Egyptian sources." },
          { mistake: "Assuming hieroglyphics were always readable by later scholars.", fix: "The knowledge of how to read them was completely lost for over a thousand years and only recovered in 1822 via the Rosetta Stone — most of what we now know about Egypt is comparatively recent scholarship." },
        ]}
      />
      <MisconceptionCallout
        myth="The pyramids were built by enslaved Israelites or other enslaved populations."
        reality={<p>This idea comes mainly from later traditions and popular culture, not Egyptian or archaeological evidence. Excavated workers&apos; villages near the Giza pyramids show paid laborers with organized housing, bread and beer rations, and access to medical treatment for injuries — consistent with skilled and unskilled labor crews working in rotating shifts, likely drawn partly from farmers during the Nile flood season when fieldwork was impossible, not enslaved populations.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a pyramid in a documentary or photo, remember it was built by paid, organized labor crews, not enslaved people.",
          "If you visit a museum with Egyptian artifacts, look for hieroglyphic inscriptions and remember they were unreadable to everyone for over a thousand years before 1822.",
          "Notice how often \"ancient Egypt\" gets flattened into one image in pop culture — try placing whatever you're looking at (a pharaoh, a temple, a myth) into Old, Middle, or New Kingdom to sharpen the picture.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How long did ancient Egypt last?", answer: "Roughly 3,000 years, from Egypt's unification around 3100 BCE to the death of Cleopatra VII and Roman annexation in 30 BCE — making it one of the longest-lasting civilizations in human history." },
          { question: "Why did Egyptian civilization form along the Nile?", answer: "The Nile's predictable annual flood deposited fertile silt on the surrounding land, letting Egyptian farmers grow reliable surplus food — that surplus supported cities, monument-building, and a non-farming class of priests, scribes, and officials." },
          { question: "Did women ever rule ancient Egypt?", answer: "Yes — Hatshepsut (c. 1479–1458 BCE) is the best-documented female pharaoh who ruled in her own right, and Cleopatra VII, the last pharaoh, was also a woman. A handful of other women held power more briefly or as regents." },
          { question: "What language did ancient Egyptians speak?", answer: "Ancient Egyptian, a language distinct from both Arabic (spoken in Egypt today, introduced after the 7th-century Islamic conquest) and from Mesopotamian languages — it survived in a later form as Coptic, still used liturgically by the Coptic Christian Church." },
          { question: "Is the Sphinx older than the pyramids?", answer: "Most archaeologists date the Great Sphinx to around the same period as the Giza pyramids (c. 2558–2532 BCE, associated with pharaoh Khafre), not older — though its exact date remains debated since it was carved from bedrock rather than built, which makes it harder to date precisely than the pyramids." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
