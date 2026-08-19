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
  title: "The Mughal Empire",
  category: "history-timeline-facts",
  order: 17,
  subtopic: "age-of-exploration-and-empires",
  tags: ["mughal empire", "india history", "akbar", "taj mahal", "south asian history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The Mughal Empire ruled most of the Indian subcontinent from 1526 to 1857, blending Persian, Central Asian, and Indian traditions into a distinctly syncretic culture, art, and administration.",
  summary: "The Mughal Empire was a Muslim-ruled dynastic empire that controlled most of the Indian subcontinent from 1526 to 1857, founded by Babur and known for its administrative reforms, religious pluralism under Akbar, and monumental architecture including the Taj Mahal.",
  sources: [
    { label: "Encyclopaedia Britannica — Mughal Dynasty", url: "https://www.britannica.com/topic/Mughal-dynasty" },
    { label: "The Metropolitan Museum of Art — The Art of the Mughals after 1600", url: "https://www.metmuseum.org/toah/hd/mugh2/hd_mugh2.htm" },
    { label: "UNESCO World Heritage — Taj Mahal", url: "https://whc.unesco.org/en/list/252" },
    { label: "UNESCO World Heritage — Red Fort Complex", url: "https://whc.unesco.org/en/list/231" },
  ],
  seeAlso: [
    "history-timeline-facts/the-ottoman-empire",
    "history-timeline-facts/the-british-empire-factual-overview",
    "history-timeline-facts/colonialism-overview-factual-neutral",
  ],
  glossary: [
    { term: "Mansabdari", definition: "The Mughal administrative and military ranking system, introduced under Akbar, that assigned nobles a numeric rank determining their salary, status, and required troop contribution." },
    { term: "Din-i-Ilahi", definition: "A syncretic spiritual philosophy promoted by Emperor Akbar, drawing on elements of Islam, Hinduism, Zoroastrianism, and other traditions, intended to unite his religiously diverse court." },
    { term: "Jizya", definition: "A tax historically levied on non-Muslim subjects in some Islamic-ruled states; Akbar abolished it in the Mughal Empire in 1564, and Aurangzeb reinstated it in 1679." },
    { term: "Syncretism", definition: "The blending of different cultural, religious, or artistic traditions into a new, combined form — used to describe Mughal art, architecture, and court culture." },
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
          "The Mughal Empire was founded in 1526 by Babur, a Central Asian ruler descended from both Timur and Genghis Khan, after his victory at the First Battle of Panipat.",
          "Emperor Akbar (r. 1556–1605) built the empire's administrative foundations and pursued religious tolerance policies, including abolishing a tax on non-Muslim subjects — a stance later reversed under Aurangzeb.",
          "The empire produced deeply syncretic Indo-Persian-Central Asian culture, most visibly in architecture like the Taj Mahal (built 1632–1653), before formally ending in 1857 after the Indian Rebellion.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/history-timeline-facts/the-mughal-empire">Mughal Empire</TermLink> ruled most of what is now India, Pakistan, and Bangladesh from 1526 to 1857. It was founded by Babur, a Central Asian prince, and grew into one of the wealthiest and most powerful empires in the world at its height. The Mughals are best known today for blending Persian, Central Asian, and Indian artistic and cultural traditions — the Taj Mahal, built as a mausoleum by Emperor Shah Jahan, is the most famous physical result of that blend, and remains one of the most recognizable buildings on Earth.</div>}
        detailed={<div className="prose-p">Babur, a descendant of both Timur (Tamerlane) and Genghis Khan, founded the empire after defeating the Delhi Sultanate&apos;s Ibrahim Lodi at the First Battle of Panipat in 1526. The empire&apos;s real administrative and cultural foundations were laid by his grandson, Akbar (r. 1556–1605), who introduced the <TermLink href="/history-timeline-facts/the-mughal-empire">Mansabdari</TermLink> system to organize nobility and military service, and pursued a policy of religious accommodation — abolishing the <TermLink href="/history-timeline-facts/the-mughal-empire">jizya</TermLink> tax on non-Muslim subjects in 1564 and promoting <TermLink href="/history-timeline-facts/the-mughal-empire">Din-i-Ilahi</TermLink>, a syncretic court philosophy drawing on multiple religious traditions. This tolerant approach was not constant across the dynasty: Akbar&apos;s great-grandson Aurangzeb (r. 1658–1707), under whom the empire reached its largest territorial extent, reversed course, reinstating the jizya tax in 1679 and adopting more religiously orthodox policies — a documented internal shift historians treat as a turning point that coincided with rising regional rebellions, including from the Marathas and Sikhs. After Aurangzeb&apos;s death in 1707, the empire entered a long decline marked by succession conflicts and the growing power of regional states and, eventually, the British East India Company, ending formally in 1857 when the British exiled the last Mughal emperor, Bahadur Shah II, following the Indian Rebellion of that year.</div>}
      />
      <FootnoteAside>The Mughal court&apos;s famed Peacock Throne — a gem-encrusted seat that reportedly took Shah Jahan&apos;s craftsmen roughly seven years to complete and once held the Koh-i-Noor diamond — was looted from Delhi in 1739 by the Persian ruler Nadir Shah, whose invasion is widely cited by historians as a major blow to Mughal imperial prestige decades before the empire&apos;s formal end.</FootnoteAside>
      <p>
      That shift from Akbar&apos;s accommodation to Aurangzeb&apos;s stricter orthodoxy is a useful entry point into how much the empire changed over its 331-year span — it wasn&apos;t one unbroken policy from founding to end.
      </p>

      <QuickCheck
        question="Who founded the Mughal Empire, and how?"
        options={[
          { text: "Akbar, through a series of religious reforms across northern India", correct: false, explanation: "Akbar was a highly influential later emperor (Babur's grandson) who built the empire's administrative structure, but he was not its founder." },
          { text: "Babur, a Central Asian ruler descended from Timur and Genghis Khan, after defeating the Delhi Sultanate at the First Battle of Panipat in 1526", correct: true, explanation: "Correct. Babur's 1526 victory established Mughal rule in northern India, which his descendants later expanded across most of the subcontinent." },
          { text: "Aurangzeb, through decades of territorial conquest across southern India", correct: false, explanation: "Aurangzeb ruled generations after the empire's founding and expanded it to its largest extent, but he did not found it — that was Babur, over a century earlier." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The First Battle of Panipat, 1526 (baseline case)</h3>
      <div className="prose-p">
      Babur, ruling a small Central Asian kingdom, invaded northern India with a comparatively small but artillery-equipped force and defeated the much larger army of Ibrahim Lodi, the last Delhi Sultanate ruler, at Panipat in 1526. Historians point to Babur&apos;s effective use of gunpowder artillery and cavalry tactics as a key factor in the victory, which gave the new Mughal dynasty its initial foothold in India — a foothold his son Humayun nearly lost before Akbar secured and expanded it.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Akbar&apos;s religious tolerance versus Aurangzeb&apos;s orthodoxy (variation / internal exception)</h3>
      <div className="prose-p">
      Akbar&apos;s court actively incorporated Hindu nobles (including through marriage alliances with Rajput ruling families), abolished the jizya tax on non-Muslims in 1564, and promoted Din-i-Ilahi as a unifying court philosophy. Roughly a century later, Aurangzeb reversed several of these policies, reinstating the jizya tax in 1679. Historians generally treat this internal shift — not any single external threat — as a significant factor in the unrest that followed among some of the empire&apos;s regional populations, alongside continuous, costly military campaigns to expand the empire&apos;s borders further south.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The Taj Mahal and Mughal architecture today (real-world / applied case)</h3>
      <div className="prose-p">
      Shah Jahan commissioned the Taj Mahal in 1632 as a mausoleum for his wife, Mumtaz Mahal, who died in childbirth; it was completed around 1653 and today is a UNESCO World Heritage Site and one of the most visited monuments in the world. Along with the Red Fort in Delhi (also a UNESCO World Heritage Site) and Fatehpur Sikri, it stands as physical, still-visited evidence of the fusion of Persian, Central Asian, and Indian architectural styles that historians describe as the Mughal Empire&apos;s most lasting cultural legacy.
      </div>

      <QuickCheck
        question="What documented policy change did Aurangzeb make regarding the jizya tax, compared to Akbar's earlier policy?"
        options={[
          { text: "Aurangzeb abolished the jizya tax that Akbar had reinstated", correct: false, explanation: "This reverses the actual sequence — Akbar abolished the jizya tax in 1564, and it was Aurangzeb who later reinstated it, not the other way around." },
          { text: "Aurangzeb reinstated the jizya tax on non-Muslim subjects in 1679, after Akbar had abolished it in 1564", correct: true, explanation: "Correct. This is a well-documented reversal of policy within the same dynasty, roughly a century apart, illustrating that Mughal rule was not religiously uniform across its full history." },
          { text: "Neither emperor ever addressed the jizya tax — it remained unchanged for the empire's entire history", correct: false, explanation: "The tax's status changed at least twice — abolished under Akbar in 1564, then reinstated under Aurangzeb in 1679 — a documented and historically significant policy shift." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The Mughal Empire: major rulers and territorial extent, 1526–1857"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-mughal-empire-rulers-territory-timeline.svg"
        altText="Timeline and map showing the Mughal Empire's founding by Babur in 1526, Akbar's administrative consolidation from 1556 to 1605, Shah Jahan's construction of the Taj Mahal between 1632 and 1653, Aurangzeb's reign from 1658 to 1707 when the empire reached its largest territorial extent across most of the Indian subcontinent, its subsequent decline through the 18th century, and its formal end in 1857 following the Indian Rebellion."
      />
      <p>
      The empire&apos;s territorial extent peaked under Aurangzeb in the early 1700s, covering nearly the entire Indian subcontinent — but that same reign also marks the beginning of the empire&apos;s political decline, a reminder that an empire&apos;s largest territorial size and its period of greatest internal stability weren&apos;t necessarily the same moment.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the Mughal Empire was religiously and culturally uniform across its whole 331-year history.", fix: "Policy varied significantly by ruler — Akbar's tolerance-focused reign looked very different from Aurangzeb's more orthodox one, roughly a century later." },
          { mistake: "Treating the Mughal Empire as a foreign occupying force disconnected from Indian culture.", fix: "Historians describe Mughal rule as deeply syncretic — its art, architecture, language, and even court philosophy under Akbar actively blended Persian, Central Asian, and Indian (including Hindu) traditions rather than existing separately from them." },
          { mistake: "Confusing the empire's founder (Babur) with its most famous builder (Shah Jahan, who commissioned the Taj Mahal).", fix: "Babur founded the empire in 1526; Shah Jahan, his great-great-grandson, ruled over a century later (1628-1658) and commissioned the Taj Mahal starting in 1632." },
        ]}
      />
      <MisconceptionCallout
        myth="The Mughal Empire was a foreign, disconnected ruling power layered on top of Indian society, rather than genuinely part of it."
        reality={<p>Historians describe Mughal rule as deeply syncretic rather than separate from Indian culture. Mughal emperors, particularly Akbar, actively incorporated Hindu nobility into the imperial administration and military through the Mansabdari system, formed marriage alliances with Rajput ruling families, and patronized art and architecture that fused Persian, Central Asian, and Indian styles — visible today in monuments like the Taj Mahal and the Red Fort. The Urdu language itself developed during this period from the blending of Persian, Arabic, and local Indian languages. While later rulers, especially Aurangzeb, pursued more religiously orthodox policies, characterizing the empire as a whole as culturally disconnected from India overlooks nearly three and a half centuries of genuine cultural, administrative, and artistic fusion documented by historians.</p>}
      />

      <QuickCheck
        question="What does the development of the Urdu language during the Mughal period illustrate about the empire?"
        options={[
          { text: "That the Mughals imposed Persian language on India with no blending or local adaptation", correct: false, explanation: "Urdu itself is documented as a product of blending — Persian and Arabic elements combined with local Indian languages — not a case of one language simply replacing another without change." },
          { text: "That Mughal-era culture, including language, involved genuine blending of Persian, Central Asian, and Indian elements", correct: true, explanation: "Correct. Urdu's development from this blending is one concrete example historians point to when describing the Mughal Empire's syncretic, rather than purely foreign, cultural character." },
          { text: "That no new languages or cultural forms emerged during Mughal rule", correct: false, explanation: "This isn't accurate — the emergence of Urdu, along with Mughal-era art and architectural styles, is well-documented evidence of significant new cultural forms developing during this period." },
        ]}
      />

      <EntryCalculator
        title="How long the Mughal Empire lasted"
        fields={[
          { key: "startYear", label: "Founding year (1526)", defaultValue: 1526 },
          { key: "endYear", label: "End year (1857)", defaultValue: 1857 },
        ]}
        resultLabel="Duration (years)"
        formula="historicalDurationYears"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see the Taj Mahal in a photo, remember it's a mausoleum commissioned by Shah Jahan for his wife Mumtaz Mahal, not a palace.",
          "When 'Mughal' comes up, place the ruler being discussed on the Babur-to-Aurangzeb timeline to know roughly which policy era you're in.",
          "Notice Persian-derived vocabulary in modern Hindi and Urdu next time you encounter either language — much of it dates to this period.",
          "Read the related entry on the British Empire to see how the East India Company's rise directly overlapped with, and eventually replaced, Mughal political authority in India.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Who founded the Mughal Empire?", answer: "Babur, a Central Asian ruler descended from both Timur (Tamerlane) and Genghis Khan, founded the empire in 1526 after defeating the Delhi Sultanate's Ibrahim Lodi at the First Battle of Panipat." },
          { question: "Why did Shah Jahan build the Taj Mahal?", answer: "Shah Jahan commissioned the Taj Mahal in 1632 as a mausoleum for his wife, Mumtaz Mahal, who died in childbirth. It was completed around 1653 and is now a UNESCO World Heritage Site." },
          { question: "Was the Mughal Empire Hindu or Muslim?", answer: "The ruling dynasty was Muslim, but the empire governed a religiously diverse, majority-Hindu population, and its administration, art, and culture were widely documented as blending Islamic, Hindu, Persian, and Central Asian traditions rather than being exclusively one or the other." },
          { question: "When and why did the Mughal Empire end?", answer: "The empire formally ended in 1857, after the Indian Rebellion of that year, when the British exiled the last Mughal emperor, Bahadur Shah II. Its political decline had begun much earlier, after Aurangzeb's death in 1707, due to succession conflicts and rising regional powers." },
          { question: "What is the Mansabdari system?", answer: "A ranking system introduced under Akbar that assigned Mughal nobles a numeric rank determining their salary, status, and the number of troops they were required to supply — the backbone of Mughal military and administrative organization." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
