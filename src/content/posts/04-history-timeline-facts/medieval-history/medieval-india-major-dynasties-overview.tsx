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
  title: "Medieval India (major dynasties overview)",
  category: "history-timeline-facts",
  order: 11,
  subtopic: "medieval-history",
  tags: ["medieval india", "delhi sultanate", "chola dynasty", "vijayanagara empire", "medieval history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Medieval India was never one empire — it was the Cholas ruling the south by sea, the Delhi Sultanate ruling the north by conquest, and Vijayanagara rising to challenge both.",
  summary: "Medieval India, roughly the 8th through early 16th century, was not a single unified state but a patchwork of major regional powers, including the Chola dynasty in the south, the Delhi Sultanate in the north, and the Vijayanagara Empire, whose rise and fall shaped the subcontinent until the Mughal Empire's founding in 1526.",
  sources: [
    { label: "Encyclopaedia Britannica — Delhi Sultanate", url: "https://www.britannica.com/place/Delhi-sultanate" },
    { label: "Encyclopaedia Britannica — Chola Dynasty", url: "https://www.britannica.com/topic/Chola-dynasty" },
    { label: "UNESCO World Heritage Convention — Qutb Minar and its Monuments, Delhi", url: "https://whc.unesco.org/en/list/233" },
    { label: "UNESCO World Heritage Convention — Group of Monuments at Hampi", url: "https://whc.unesco.org/en/list/241/" },
  ],
  seeAlso: [
    "history-timeline-facts/the-silk-road",
    "history-timeline-facts/indus-valley-civilization",
    "history-timeline-facts/islamic-golden-age",
    "history-timeline-facts/the-crusades-factual-overview",
  ],
  glossary: [
    { term: "Sultanate", definition: "A state ruled by a sultan, a Muslim monarch; the Delhi Sultanate (1206-1526) was a succession of five such dynasties ruling much of north India." },
    { term: "Thalassocracy", definition: "A state whose power is based substantially on control of the sea and maritime trade — a term historians apply to the Chola dynasty's naval reach into Southeast Asia." },
    { term: "Deccan", definition: "The large plateau region of south-central India, historically a contested frontier zone between northern Islamic sultanates and southern Hindu kingdoms like Vijayanagara." },
    { term: "Vijayanagara Empire", definition: "A south Indian empire (1336-1646) founded partly as a bulwark against the Delhi Sultanate's southward expansion, centered on its capital at Hampi." },
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
          "\"Medieval India\" was never a single kingdom — the Chola dynasty ruled much of the south by land and sea for centuries while the Delhi Sultanate, a succession of five Turkic-Persian Islamic dynasties, ruled the north starting in 1206, and the two regions had largely separate political histories for long stretches.",
          "The Delhi Sultanate (1206-1526) and the Mughal Empire (founded 1526) are two different, sequential states, not the same empire under different names — the Mughals conquered the last Delhi Sultanate dynasty in 1526.",
          "The Vijayanagara Empire (1336-1646) rose in the south partly as a direct response to the Delhi Sultanate's southward expansion, reaching a peak under Krishnadevaraya before its defeat at the Battle of Talikota in 1565.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/history-timeline-facts/medieval-india-major-dynasties-overview">Medieval India</TermLink> covers roughly the 8th through the early 16th century, a period with no single ruling power across the subcontinent. In the south, the Chola dynasty built a powerful kingdom known for temple architecture and a navy strong enough to reach Southeast Asia. In the north, after 1206, a succession of Turkic-Persian Islamic dynasties known collectively as the <TermLink href="/history-timeline-facts/medieval-india-major-dynasties-overview">Delhi Sultanate</TermLink> controlled much of the region. Later, the Vijayanagara Empire rose in the south as a major Hindu kingdom that both traded and fought with the sultanates to its north.</div>}
        detailed={<div className="prose-p">The Chola dynasty, based in the Kaveri river valley in modern Tamil Nadu, reached its height under Rajaraja I (985-1014) and his son Rajendra I (1014-1044), who completed a conquest of Sri Lanka and led a notable naval expedition as far as Southeast Asia — an unusually maritime-focused reach for the period, sometimes described by historians as a thalassocracy. The Delhi Sultanate, founded in 1206 by Qutb ud-Din Aibak, ran through five successive dynasties — the Mamluk (or &quot;Slave&quot;) dynasty (1206-1290), Khalji (1290-1320), Tughlaq, Sayyid, and finally Lodi (1451-1526) — each replacing the last through conquest or succession crisis, not smooth continuity. The <TermLink href="/history-timeline-facts/medieval-india-major-dynasties-overview">Vijayanagara Empire</TermLink> (1336-1646), centered at its capital Hampi in the Deccan, rose partly as a southern counterweight to sultanate expansion and reached a peak under Krishnadevaraya in the early 16th century, before a coalition of Deccan sultanates defeated it at the Battle of Talikota in 1565, after which the empire went into decline. The Delhi Sultanate itself ended in 1526, when the last Lodi ruler was defeated at the First Battle of Panipat by Babur, founder of the Mughal Empire — a different dynasty, not a continuation of the sultanate under a new name.</div>}
      />
      <FootnoteAside>The Qutb Minar in Delhi, begun under Qutb ud-Din Aibak around 1200 and completed by his successors, is at 72.5 meters the tallest brick minaret in the world and is partly built from materials reused from about twenty earlier Hindu and Jain temples on the site.</FootnoteAside>
      <p>
      That reused-material detail is a useful entry point into how medieval India actually worked — regional powers overlapped, conquered, traded, and physically built on top of each other far more than a single clean timeline suggests.
      </p>

      <QuickCheck
        question="Which statement most accurately describes the political landscape of medieval India?"
        options={[
          { text: "A single unified empire ruled the entire subcontinent for the whole period", correct: false, explanation: "There was no single ruling power — the Chola dynasty in the south and the Delhi Sultanate in the north operated largely separately, and other regional powers like Vijayanagara rose later." },
          { text: "Multiple regional powers, including the Chola dynasty in the south and the Delhi Sultanate in the north, coexisted and often had largely separate political histories", correct: true, explanation: "Correct. Medieval India was a patchwork of regional dynasties rather than one continuous empire — a key difference from how the period is sometimes oversimplified." },
          { text: "India had no organized states at all until the Mughal Empire arrived in 1526", correct: false, explanation: "This is incorrect — well-organized, powerful states like the Chola dynasty and the Delhi Sultanate existed for centuries before the Mughal Empire was founded." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The Chola dynasty&apos;s naval reach (baseline case)</h3>
      <div className="prose-p">
      Under Rajaraja I and Rajendra I, the Chola dynasty built the Brihadishvara Temple at Thanjavur (completed around 1010) and extended Chola power well beyond south India, including a naval expedition that reached as far as Srivijaya in maritime Southeast Asia around 1025. Inscriptions from this period also document unusually detailed local self-governance through village assemblies, evidence historians use to argue Chola administration was more locally participatory than a simple top-down monarchy might suggest.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The Delhi Sultanate&apos;s five dynasties (variation / political turnover)</h3>
      <div className="prose-p">
      The Delhi Sultanate wasn&apos;t one continuous royal family — it passed through five distinct dynasties over three centuries: the Mamluk dynasty (1206-1290), founded by former military slaves who rose to rule; the Khalji dynasty (1290-1320), which expanded sultanate territory into Gujarat and parts of the Deccan; the Tughlaq dynasty; the brief Sayyid dynasty; and finally the Lodi dynasty (1451-1526), an Afghan Pashtun dynasty that ruled until its defeat at Panipat in 1526. Each transition between dynasties happened through conquest, rebellion, or succession crisis, not peaceful inheritance within one family line.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Hampi and the Vijayanagara Empire&apos;s legacy (real-world / applied case)</h3>
      <div className="prose-p">
      The ruins at Hampi, capital of the Vijayanagara Empire and now a UNESCO World Heritage Site, contain over 1,600 surviving structures — temples, royal complexes, and market streets — reflecting the empire&apos;s wealth at its peak under Krishnadevaraya in the early 16th century, when foreign travelers described it as one of the richest cities they had seen. After the empire&apos;s defeat at the Battle of Talikota in 1565 by an alliance of Deccan sultanates, Hampi was abandoned and largely left in ruins, making it today a rare, mostly undisturbed archaeological record of a major medieval south Indian capital — still studied for its temple architecture and urban planning.
      </div>

      <QuickCheck
        question="What happened to the Delhi Sultanate in 1526?"
        options={[
          { text: "It peacefully transitioned into the Mughal Empire under the same ruling family", correct: false, explanation: "There was no peaceful continuity — the last Delhi Sultanate dynasty (Lodi) was defeated in battle by a different dynasty entirely." },
          { text: "It was defeated at the First Battle of Panipat by Babur, founder of the separate Mughal Empire", correct: true, explanation: "Correct. Babur's victory over the last Lodi ruler in 1526 ended the Delhi Sultanate and founded the Mughal Empire, a distinct dynasty, not a continuation of sultanate rule." },
          { text: "It expanded to conquer the entire subcontinent, including the Vijayanagara Empire", correct: false, explanation: "The opposite happened — the sultanate itself was defeated and ended in 1526; it never conquered Vijayanagara, which persisted independently until 1565." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Medieval India's major regional powers, c. 850–1565 CE"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-medieval-india-dynasties-timeline-map.svg"
        altText="Timeline and map showing the Chola dynasty's rise in south India from around 850 CE and peak under Rajaraja I and Rajendra I in the early 11th century, the founding of the Delhi Sultanate in north India in 1206 running through five successive dynasties to 1526, the founding of the Vijayanagara Empire in the south in 1336 as a counterweight to sultanate expansion, its peak under Krishnadevaraya in the early 16th century, its defeat at the Battle of Talikota in 1565, and the Delhi Sultanate's end in 1526 with the founding of the separate Mughal Empire."
      />
      <p>
      Notice how the timelines overlap rather than run in sequence: the Chola dynasty and the early Delhi Sultanate coexisted for decades, and Vijayanagara and the Delhi Sultanate&apos;s successor states in the Deccan were contemporaries and frequent rivals for over two centuries.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating \"medieval India\" as one continuous empire with one ruling line.", fix: "It was a patchwork of regional powers — the Chola dynasty in the south and the Delhi Sultanate in the north operated largely independently for much of this period." },
          { mistake: "Confusing the Delhi Sultanate with the Mughal Empire, or assuming one is just a renamed version of the other.", fix: "They are two separate, sequential empires — the Mughal Empire began in 1526 when Babur defeated the last Delhi Sultanate dynasty (Lodi) in battle." },
          { mistake: "Assuming the Delhi Sultanate was one unbroken dynasty for three centuries.", fix: "It passed through five distinct dynasties (Mamluk, Khalji, Tughlaq, Sayyid, Lodi), each rising to power through conquest or succession crisis, not smooth hereditary continuity." },
        ]}
      />
      <MisconceptionCallout
        myth="Medieval India was a single, continuously unified empire from roughly 800 to 1500 CE."
        reality={<p>No single power controlled the entire subcontinent for this whole period. South India was dominated for centuries by the Chola dynasty and, later, the Vijayanagara Empire, while north India came under the Delhi Sultanate&apos;s five successive dynasties starting in 1206. These regions had largely separate political histories, their own wars, alliances, and periods of decline, and frequently fought each other across the Deccan frontier rather than existing as parts of one connected state. Historians generally describe medieval India as a shifting patchwork of regional powers, not a single continuous empire.</p>}
      />

      <QuickCheck
        question="Why is it inaccurate to describe medieval India as one continuously unified empire?"
        options={[
          { text: "Because India had no organized states at all during this period", correct: false, explanation: "The opposite is true — well-documented, powerful states like the Chola dynasty, the Delhi Sultanate, and the Vijayanagara Empire all existed and are extensively recorded." },
          { text: "Because regional powers like the Chola dynasty, the Delhi Sultanate, and the Vijayanagara Empire ruled different parts of the subcontinent with largely separate political histories", correct: true, explanation: "Correct. South and north India, in particular, had distinct ruling powers for long stretches, frequently interacting through trade and conflict rather than existing under one government." },
          { text: "Because the entire subcontinent was ruled directly from outside India for this whole period", correct: false, explanation: "This isn't accurate — the major medieval Indian dynasties discussed here, including the Cholas, the Delhi Sultanate, and Vijayanagara, were based within the subcontinent, not ruled from an external seat of power." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time \"medieval India\" comes up as a single label, mentally split it into at least the Chola south and the Delhi Sultanate north.",
          "If someone conflates the Delhi Sultanate and the Mughal Empire, remember 1526 as the hinge — Babur's victory at Panipat ended one and founded the other.",
          "When you see Hampi's ruins in photos or travel content, connect them to the Vijayanagara Empire's peak under Krishnadevaraya and its 1565 defeat at Talikota.",
          "Notice how many of the Delhi Sultanate's five dynasties changed hands through conquest rather than peaceful succession — it's a useful check against assuming smooth dynastic continuity.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What were the major dynasties of medieval India?", answer: "In the south, the Chola dynasty and later the Vijayanagara Empire; in the north, the Delhi Sultanate, which itself passed through five dynasties (Mamluk, Khalji, Tughlaq, Sayyid, Lodi) between 1206 and 1526." },
          { question: "What is the difference between the Delhi Sultanate and the Mughal Empire?", answer: "They are two separate, sequential empires. The Delhi Sultanate (1206-1526) was a succession of five Turkic-Persian Islamic dynasties; it ended when Babur defeated the last Lodi ruler at the First Battle of Panipat in 1526 and founded the distinct Mughal Empire." },
          { question: "What was the Chola dynasty known for?", answer: "A powerful south Indian kingdom, based in the Kaveri river valley, known for major temple architecture like the Brihadishvara Temple, detailed local self-governance recorded in inscriptions, and a navy strong enough to reach Southeast Asia under Rajendra I." },
          { question: "When did medieval India end?", answer: "There's no single date, but the founding of the Mughal Empire in 1526 (ending the Delhi Sultanate) and the Vijayanagara Empire's defeat at the Battle of Talikota in 1565 are commonly used as the transition points into India's early modern period." },
          { question: "What caused the fall of the Vijayanagara Empire?", answer: "A coalition of Deccan sultanates defeated Vijayanagara forces at the Battle of Talikota in 1565, after which the capital at Hampi was sacked and largely abandoned, though the empire itself declined gradually rather than ending instantly." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
