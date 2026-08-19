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
  title: "The Ottoman Empire",
  category: "history-timeline-facts",
  order: 18,
  subtopic: "age-of-exploration-and-empires",
  tags: ["ottoman empire", "constantinople", "suleiman the magnificent", "istanbul", "middle east history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The Ottoman Empire lasted 623 years, from 1299 to 1922, spanning Southeast Europe, the Middle East, and North Africa at its height — far broader than a single-region empire.",
  summary: "The Ottoman Empire was a Turkish-led empire founded in 1299 that, at its height under Suleiman the Magnificent, spanned Southeast Europe, the Middle East, and North Africa, before dissolving in 1922 following defeat in World War I.",
  sources: [
    { label: "Encyclopaedia Britannica — Ottoman Empire", url: "https://www.britannica.com/place/Ottoman-Empire" },
    { label: "UNESCO World Heritage — Historic Areas of Istanbul", url: "https://whc.unesco.org/en/list/356" },
    { label: "Library of Congress — Turkey: A Country Study", url: "https://www.loc.gov/item/91029650/" },
    { label: "The Metropolitan Museum of Art — The Art of the Ottomans before 1600", url: "https://www.metmuseum.org/toah/hd/otto1/hd_otto1.htm" },
  ],
  seeAlso: [
    "history-timeline-facts/the-mughal-empire",
    "history-timeline-facts/european-age-of-exploration",
    "history-timeline-facts/colonialism-overview-factual-neutral",
  ],
  glossary: [
    { term: "Sultan", definition: "The title held by the Ottoman Empire's monarch, combining political and, from the 16th century onward, claimed religious authority as caliph." },
    { term: "Janissary", definition: "An elite Ottoman infantry corps, originally recruited through the devshirme system, that formed the backbone of the sultan's standing army for centuries." },
    { term: "Millet system", definition: "An Ottoman administrative structure that granted religious communities — such as Orthodox Christians, Armenians, and Jews — a degree of self-governance over their own internal legal and religious affairs." },
    { term: "Devshirme", definition: "A periodic Ottoman levy, mainly in the Balkans, that conscripted Christian boys for training as soldiers (often Janissaries) or administrators, converting them to Islam in the process." },
    { term: "Tanzimat", definition: "A period of legal and administrative reforms in the Ottoman Empire from 1839 to 1876, aimed at modernizing governance, the military, and civil rights along more centralized, European-influenced lines." },
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
          "The Ottoman Empire lasted 623 years, from its founding around 1299 to its formal dissolution in 1922 — one of the longest-lived empires in history.",
          "At its height under Suleiman the Magnificent (r. 1520–1566), it spanned three continents: Southeast Europe, the Middle East, and North Africa, not just the Middle East alone.",
          "The 1453 conquest of Constantinople under Mehmed II ended the Byzantine Empire and gave the Ottomans a capital, later Istanbul, that remains one of the world's major cities today.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/history-timeline-facts/the-ottoman-empire">Ottoman Empire</TermLink> was founded around 1299 by Osman I in northwestern Anatolia (part of modern Turkey) and grew, over more than six centuries, into one of the largest and longest-lasting empires in world history. At its peak in the 1500s and 1600s, it controlled territory across three continents — stretching from the edges of Central Europe through the Middle East and along the North African coast. It finally came to an end in 1922, after defeat alongside Germany in World War I, giving way to the modern Republic of Turkey in 1923.</div>}
        detailed={<div className="prose-p">The empire&apos;s decisive early turning point came in 1453, when Sultan Mehmed II captured Constantinople, ending the roughly 1,000-year-old Byzantine Empire and giving the Ottomans a capital that would later be renamed Istanbul. Under <TermLink href="/history-timeline-facts/the-ottoman-empire">Sultan</TermLink> Suleiman the Magnificent (r. 1520–1566), the empire reached its greatest territorial extent, governing a religiously and ethnically diverse population across Southeast Europe, the Middle East, and North Africa. The Ottomans administered this diversity partly through the <TermLink href="/history-timeline-facts/the-ottoman-empire">millet system</TermLink>, which granted non-Muslim religious communities — including Orthodox Christians, Armenian Christians, and Jews — a measure of self-governance over their own internal affairs, and partly through an elite standing army, the <TermLink href="/history-timeline-facts/the-ottoman-empire">Janissaries</TermLink>, historically recruited through the <TermLink href="/history-timeline-facts/the-ottoman-empire">devshirme</TermLink> levy of Christian boys, mainly from the Balkans, who were converted to Islam and trained for military or administrative service. From the 17th century onward the empire faced gradual territorial losses and internal strain, prompting the 19th-century <TermLink href="/history-timeline-facts/the-ottoman-empire">Tanzimat</TermLink> reforms (1839–1876), which modernized legal and administrative structures along more centralized lines. The empire allied with Germany and Austria-Hungary in World War I, was defeated in 1918, and formally dissolved in 1922 when the sultanate was abolished, with the Republic of Turkey established the following year under Mustafa Kemal Atatürk.</div>}
      />
      <FootnoteAside>The Ottomans besieged Vienna twice — in 1529 and again in 1683 — and both sieges ultimately failed, marking the furthest points of Ottoman expansion into Central Europe. Historians generally cite the failed 1683 siege as the beginning of a sustained, centuries-long Ottoman territorial retreat in Europe, in contrast to the empire&apos;s steady expansion in the two centuries before it.</FootnoteAside>
      <p>
      That gap between the empire&apos;s peak territorial extent under Suleiman and its later, much longer period of gradual retreat is worth keeping in mind — the Ottoman Empire&apos;s 623-year span includes centuries of both expansion and contraction, not one steady trajectory.
      </p>

      <QuickCheck
        question="What event in 1453 is widely treated as the key turning point that gave the Ottoman Empire its lasting capital?"
        options={[
          { text: "Suleiman the Magnificent's coronation", correct: false, explanation: "Suleiman's reign (1520-1566) came roughly 70 years after 1453 — he expanded the empire to its greatest extent, but the 1453 event in question predates him." },
          { text: "Mehmed II's conquest of Constantinople, ending the Byzantine Empire", correct: true, explanation: "Correct. The 1453 conquest gave the Ottomans a capital, later renamed Istanbul, and ended the roughly 1,000-year-old Byzantine Empire." },
          { text: "The failed siege of Vienna", correct: false, explanation: "The sieges of Vienna (1529 and 1683) were both failed attempts at further expansion into Central Europe, not the founding moment of the Ottoman capital." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The 1453 conquest of Constantinople (baseline case)</h3>
      <div className="prose-p">
      Sultan Mehmed II&apos;s forces captured Constantinople after a roughly two-month siege, using massive cannons specially cast for the assault to breach the city&apos;s ancient walls. The conquest ended the Byzantine Empire, the direct continuation of the Eastern Roman Empire, and gave the Ottomans a capital at the crossroads of Europe and Asia — a strategic and symbolic prize historians describe as central to the empire&apos;s subsequent rise as a major power.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The failed sieges of Vienna (variation / limits of expansion)</h3>
      <div className="prose-p">
      Unlike the successful 1453 conquest, the Ottoman sieges of Vienna in 1529 and 1683 both failed, marking the practical limits of Ottoman expansion into Central Europe. The 1683 siege in particular — broken by a relief force including Polish, Austrian, and German troops — is generally treated by historians as the start of a long period of Ottoman territorial contraction in Europe over the following two centuries, a sharp contrast to the steady expansion of the empire&apos;s first 250 years.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Istanbul and Ottoman legacy today (real-world / applied case)</h3>
      <div className="prose-p">
      Modern Istanbul&apos;s Hagia Sophia — originally a Byzantine cathedral, converted to a mosque after the 1453 conquest, turned into a museum in 1935, and converted back into a functioning mosque in 2020 — remains a living illustration of the empire&apos;s layered religious and architectural history. More broadly, the Ottoman millet system&apos;s approach to managing religious diversity is often cited by historians as an influence on how several modern Middle Eastern and Balkan states have historically structured relationships between religious communities and the state.
      </div>

      <QuickCheck
        question="What was the millet system in the Ottoman Empire?"
        options={[
          { text: "A tax paid exclusively by Muslim subjects", correct: false, explanation: "The millet system wasn't a tax — it was an administrative structure for managing religious communities. (The jizya, a tax on some non-Muslim subjects, was a separate mechanism used in various Islamic-ruled states, including at times the Ottoman Empire.)" },
          { text: "An administrative system granting religious communities, such as Orthodox Christians, Armenians, and Jews, self-governance over their own internal affairs", correct: true, explanation: "Correct. The millet system let religious communities manage their own internal legal and religious matters under the empire's broader authority, a documented approach to governing the empire's religious diversity." },
          { text: "The name of the Ottoman Empire's standing army", correct: false, explanation: "That describes the Janissaries, the empire's elite infantry corps — a different institution from the millet system, which concerned religious community governance." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The Ottoman Empire: territorial extent and major eras, 1299–1922"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-ottoman-empire-territorial-timeline.svg"
        altText="Timeline and map showing the Ottoman Empire's founding around 1299, the conquest of Constantinople in 1453, peak territorial extent across Southeast Europe, the Middle East, and North Africa under Suleiman the Magnificent from 1520 to 1566, the failed sieges of Vienna in 1529 and 1683, the Tanzimat reform period from 1839 to 1876, and the empire's dissolution in 1922 following defeat in World War I."
      />
      <p>
      Mapped at its height, Ottoman territory reached from the gates of Vienna in the northwest, through Anatolia and the Levant, down along the North African coast as far as Algeria — a three-continent footprint that makes describing it as a single-region &quot;Middle Eastern&quot; empire an incomplete picture of its actual historical extent.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Describing the Ottoman Empire as only a Middle Eastern power.", fix: "At its height it spanned Southeast Europe, the Middle East, and North Africa simultaneously — governing large Christian and Jewish populations in the Balkans alongside its Middle Eastern and North African territories." },
          { mistake: "Assuming the empire expanded steadily for its entire 623-year existence.", fix: "Expansion was largely concentrated in its first roughly 250-350 years; after the failed 1683 siege of Vienna, the empire entered a long period of gradual territorial contraction that lasted into the 20th century." },
          { mistake: "Confusing the fall of Constantinople (1453) with the fall of the Ottoman Empire itself.", fix: "1453 was the Ottomans' conquest of Constantinople, ending the Byzantine Empire and marking an early high point of Ottoman power — the Ottoman Empire itself didn't dissolve until 1922, nearly 470 years later." },
        ]}
      />
      <MisconceptionCallout
        myth="The Ottoman Empire was a purely Middle Eastern empire."
        reality={<p>At its height in the 16th and 17th centuries, the Ottoman Empire spanned three continents simultaneously: Southeast Europe (including much of the Balkans, up to the outskirts of Vienna), the Middle East, and North Africa (including Egypt and territory as far west as Algeria). It governed a religiously and ethnically diverse population that included large Orthodox Christian, Armenian Christian, and Jewish communities, managed in part through the millet system&apos;s framework for religious self-governance. Historians describe the empire as a genuinely multi-continental, multi-religious state throughout most of its history, not a religiously or geographically uniform &quot;Middle Eastern&quot; power.</p>}
      />

      <QuickCheck
        question="Which three continents did the Ottoman Empire span at its territorial height?"
        options={[
          { text: "Only the Middle East and parts of Central Asia", correct: false, explanation: "The Ottoman Empire didn't hold significant Central Asian territory. Its actual multi-continent footprint was different — Southeast Europe, the Middle East, and North Africa." },
          { text: "Southeast Europe, the Middle East, and North Africa", correct: true, explanation: "Correct. At its height under Suleiman the Magnificent, Ottoman territory reached from the Balkans through the Middle East and along the North African coast." },
          { text: "Western Europe, East Asia, and the Middle East", correct: false, explanation: "The empire never held significant territory in Western Europe or East Asia — its actual reach was Southeast Europe, the Middle East, and North Africa." },
        ]}
      />

      <EntryCalculator
        title="How long the Ottoman Empire lasted"
        fields={[
          { key: "startYear", label: "Founding year (1299)", defaultValue: 1299 },
          { key: "endYear", label: "End year (1922)", defaultValue: 1922 },
        ]}
        resultLabel="Duration (years)"
        formula="historicalDurationYears"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time someone calls the Ottoman Empire 'a Middle Eastern empire,' mentally add its Southeast European and North African territory to the picture.",
          "When you hear 'fall of Constantinople,' place it correctly in 1453 — the start of a new Ottoman era, not the empire's end.",
          "Notice the two failed sieges of Vienna (1529, 1683) next time European history from this period comes up — they mark the empire's furthest reach, not its founding or its collapse.",
          "Read the related entry on the Mughal Empire to compare how two large, religiously diverse Islamic-ruled empires of the same broad era each handled governing non-Muslim populations.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How long did the Ottoman Empire last?", answer: "623 years — from its founding around 1299 under Osman I to its formal dissolution in 1922, making it one of the longest-lasting empires in world history." },
          { question: "What continents did the Ottoman Empire span?", answer: "At its territorial height, the Ottoman Empire spanned three continents: Southeast Europe (including much of the Balkans), the Middle East, and North Africa." },
          { question: "Why is 1453 an important date for the Ottoman Empire?", answer: "In 1453, Sultan Mehmed II's forces conquered Constantinople, ending the roughly 1,000-year-old Byzantine Empire and giving the Ottomans a capital, later renamed Istanbul, that became central to the empire's subsequent rise." },
          { question: "When and why did the Ottoman Empire end?", answer: "The empire formally dissolved in 1922, following its defeat as an ally of Germany and Austria-Hungary in World War I. The sultanate was abolished that year, and the Republic of Turkey was established in 1923 under Mustafa Kemal Atatürk." },
          { question: "What was the millet system?", answer: "An Ottoman administrative structure that granted religious communities, such as Orthodox Christians, Armenians, and Jews, a degree of self-governance over their own internal legal and religious affairs, while remaining under overall Ottoman authority." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
