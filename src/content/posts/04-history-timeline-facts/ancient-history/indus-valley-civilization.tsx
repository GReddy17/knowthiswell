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
  title: "Indus Valley Civilization",
  category: "history-timeline-facts",
  order: 3,
  subtopic: "ancient-history",
  tags: ["indus valley", "harappa", "mohenjo-daro", "ancient india", "ancient civilizations"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The Indus Valley Civilization built the most advanced urban planning of the ancient world — and left behind a writing system nobody has ever been able to read.",
  summary: "The Indus Valley Civilization, also called the Harappan Civilization, flourished from around 3300 to 1300 BCE across what is now Pakistan and northwest India, known for advanced city planning, standardized weights, and a script that remains undeciphered today.",
  sources: [
    { label: "UNESCO World Heritage — Archaeological Ruins at Moenjodaro", url: "https://whc.unesco.org/en/list/138/" },
    { label: "The British Museum — Indus Civilization collection", url: "https://www.britishmuseum.org/collection" },
    { label: "Encyclopaedia Britannica — Indus Civilization", url: "https://www.britannica.com/topic/Indus-civilization" },
  ],
  seeAlso: [
    "history-timeline-facts/ancient-mesopotamia",
    "history-timeline-facts/ancient-egypt",
    "geography-world-facts/geography-of-asia",
  ],
  glossary: [
    { term: "Harappan Civilization", definition: "Another name for the Indus Valley Civilization, after Harappa, one of its first-excavated major cities." },
    { term: "Indus script", definition: "The short symbol-based writing system used by the Indus Valley Civilization, found on seals and pottery, which remains undeciphered." },
    { term: "Citadel", definition: "A raised, fortified section of an Indus Valley city, typically containing large public buildings, separate from the lower residential town." },
    { term: "Great Bath", definition: "A large, carefully waterproofed public bathing structure at Mohenjo-daro, likely used for ritual purification." },
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
          "The Indus Valley Civilization (c. 3300–1300 BCE) spanned a larger territory than ancient Egypt and Mesopotamia combined, across what is now Pakistan and northwest India.",
          "Its cities — especially Mohenjo-daro and Harappa — had grid-planned streets, covered drainage systems, and standardized brick sizes, a level of urban planning not matched again in the region for millennia.",
          "The Indus script, found on thousands of small stone seals, has never been deciphered — we can describe the civilization's cities and objects in detail, but we still can't read what its people wrote.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/history-timeline-facts/indus-valley-civilization">Indus Valley Civilization</TermLink> grew up along the Indus River and its tributaries, in what&apos;s now Pakistan and northwest India, starting around 3300 BCE. Its two biggest known cities, Mohenjo-daro and Harappa, had streets laid out in organized grids, brick houses with private wells and bathrooms, and covered drains running under the streets to carry away wastewater — a sanitation system many ancient (and some modern) cities didn&apos;t match.</div>}
        detailed={<div className="prose-p">What sets the Indus Valley Civilization apart from Egypt and Mesopotamia isn&apos;t just its size — at its peak it covered roughly 1.25 million square kilometers, larger than both of those civilizations combined — it&apos;s the near-total absence of evidence for centralized political power. Archaeologists have found no clear palaces, no monumental royal tombs, no obvious depictions of kings or military conquest across Indus sites, unlike the very visible power structures in Egyptian and Mesopotamian art. Yet the civilization achieved remarkable standardization anyway: bricks across different cities share the same 4:2:1 ratio, weights follow a consistent binary system, and city layouts follow similar grid patterns hundreds of kilometers apart. How that consistency was coordinated without obvious centralized rulers is one of the genuine open questions in Indus Valley archaeology — a puzzle that separates it from every other early urban civilization we know.</div>}
      />
      <FootnoteAside>The Indus Valley Civilization was contemporary with early Egypt and Sumer, but wasn&apos;t identified by archaeologists until the 1920s — nearly a century after Egyptian hieroglyphics were first decoded, which is part of why it&apos;s less well known to most people today.</FootnoteAside>
      <p>
      The most striking part of the Indus story isn&apos;t what we know — it&apos;s how much we still don&apos;t, starting with the writing system sitting on thousands of surviving objects that nobody today can read.
      </p>

      <QuickCheck
        question="What makes the Indus Valley Civilization unusual compared to ancient Egypt and Mesopotamia?"
        options={[
          { text: "It has almost no archaeological evidence of centralized royal power like palaces or depictions of kings", correct: true, explanation: "Correct. Despite covering a larger area than Egypt and Mesopotamia combined and showing remarkable standardization in bricks, weights, and city planning, Indus sites show little clear evidence of kings, palaces, or military rule — unusual for a civilization this organized." },
          { text: "It was discovered by ancient Greek historians", correct: false, explanation: "It wasn't identified by archaeologists at all until the 1920s — ancient Greek writers had no knowledge of it." },
          { text: "It never developed cities, only small villages", correct: false, explanation: "The opposite — its cities, especially Mohenjo-daro and Harappa, show some of the most advanced urban planning of the ancient world." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Case studies</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 1: Mohenjo-daro&apos;s drainage system (baseline case)</h3>
      <div className="prose-p">
      Mohenjo-daro, in modern-day Pakistan&apos;s Sindh province, had covered brick drains running beneath most streets, connected to private household bathrooms and toilets — an integrated city-wide sanitation system built around 2500 BCE. Many houses had their own wells and multi-room layouts organized around a central courtyard, suggesting a broad, not just elite, standard of urban living.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 2: The undeciphered Indus script (variation / open puzzle)</h3>
      <div className="prose-p">
      Thousands of small stone seals, most under 3 centimeters across, carry short inscriptions of the Indus script alongside animal images (a one-horned &quot;unicorn&quot; bull is the most common). The inscriptions average only about five symbols long, which is part of why decipherment has failed for a century — there&apos;s not enough continuous text for the statistical pattern-matching that helped crack other ancient scripts, and we don&apos;t know for certain what language family it even encoded, if it represents a full language at all rather than a more limited notation system.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 3: Standardized weights and long-distance trade (real-world / applied case)</h3>
      <div className="prose-p">
      Indus merchants used a remarkably consistent set of cubical stone weights, following a binary-like system (1, 2, 4, 8, 16, 32...), found at sites hundreds of kilometers apart with almost no variation. Indus seals and beads have turned up as far away as Mesopotamian sites in modern-day Iraq, and Mesopotamian texts refer to trade with a place called &quot;Meluhha,&quot; which many historians identify with the Indus region — physical evidence of long-distance trade networks operating over 4,000 years ago, using standardized measurement to make transactions across huge distances trustworthy.
      </div>

      <QuickCheck
        question="Why has the Indus script never been deciphered, unlike Egyptian hieroglyphics or Mesopotamian cuneiform?"
        options={[
          { text: "No physical examples of the writing have survived", correct: false, explanation: "Thousands of inscribed seals and objects survive — the problem isn't a lack of examples." },
          { text: "The inscriptions are very short (often around five symbols) and no bilingual text like the Rosetta Stone has been found", correct: true, explanation: "Correct. Short inscriptions limit the statistical patterns scholars can analyze, and without a bilingual key like the Rosetta Stone gave for Egyptian, there's no confirmed way in — plus we're not even certain what language family it represents." },
          { text: "Archaeologists have deliberately avoided studying it", correct: false, explanation: "It's been an active, serious research effort for a century — the difficulty is genuine, not neglect." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Extent of the Indus Valley Civilization at its peak, c. 2600-1900 BCE"
        type="detail"
        svgSrc="/diagrams/04-indus-valley-civilization-extent-map.svg"
        altText="Map showing the Indus Valley Civilization's territory spanning the Indus River basin across modern-day Pakistan and northwest India, with major cities Mohenjo-daro and Harappa marked, and the territory's size compared visually to the smaller extents of contemporary ancient Egypt along the Nile and ancient Sumer between the Tigris and Euphrates."
      />
      <p>
      The scale is the point: the Indus Valley Civilization&apos;s territory dwarfed its better-known contemporaries, even though it remains far less familiar to most people today — largely because its writing still can&apos;t confirm names, kings, or events the way Egyptian and Mesopotamian texts can.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the Indus Valley Civilization must have had kings and palaces like Egypt or Mesopotamia, just undiscovered.", fix: "Say plainly that the evidence for centralized royal power is genuinely absent, not just unfound — this is one of the real open questions researchers debate, not a settled fact either way." },
          { mistake: "Referring to the Indus script as \"deciphered\" or claiming a specific reading of it as established fact.", fix: "No decipherment is accepted by the broader scholarly community — treat any specific claimed \"translation\" you encounter online with real skepticism." },
          { mistake: "Calling it a minor or lesser ancient civilization compared to Egypt and Mesopotamia.", fix: "By territory and urban sophistication it was arguably the most advanced of the three — it's less \"famous,\" not less significant, largely because we can't read its texts." },
        ]}
      />
      <MisconceptionCallout
        myth="The Indus Valley Civilization mysteriously vanished overnight, wiped out by some sudden catastrophe."
        reality={<p>Most current evidence points to a gradual decline over centuries (roughly 1900–1300 BCE), likely tied to shifting river courses and weakening monsoon patterns that undermined the agriculture the cities depended on, alongside a shift toward smaller, more dispersed settlements rather than a single dramatic collapse. Descendant populations and cultural elements persisted in the region rather than disappearing entirely.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time someone lists \"the cradles of civilization,\" check whether they include the Indus Valley alongside Egypt and Mesopotamia — it's earned the spot but often gets left out.",
          "If you see a claim that someone has \"decoded\" the Indus script, treat it skeptically — no reading is accepted by mainstream scholarship as of today.",
          "Look up a photo of an Indus seal online — the tiny scale of the inscriptions (often under 3 cm) makes the decipherment challenge much more concrete.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Where was the Indus Valley Civilization located?", answer: "Along the Indus River and its tributaries, spanning most of modern-day Pakistan and parts of northwest India, including present-day Gujarat and Rajasthan." },
          { question: "Has the Indus script been deciphered?", answer: "No. Despite over a century of research attempts, no reading of the Indus script is accepted by mainstream scholarship — it remains one of the major undeciphered writing systems of the ancient world." },
          { question: "Who built Mohenjo-daro?", answer: "Mohenjo-daro was built by the Indus Valley Civilization, one of its two largest known cities (along with Harappa), constructed and occupied roughly between 2500 and 1900 BCE." },
          { question: "Is the Indus Valley Civilization the same as ancient India?", answer: "It's the earliest known major urban civilization in the Indian subcontinent, but it predates and is culturally distinct from the later Vedic civilization typically associated with early \"ancient India\" in most history courses — the relationship between the two is still actively studied." },
          { question: "Why did the Indus Valley Civilization decline?", answer: "Most researchers point to a gradual decline over centuries linked to shifting river courses and weakened monsoon rainfall affecting agriculture, plus a shift toward smaller settlements — not a single sudden catastrophic event." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
