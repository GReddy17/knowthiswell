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
  title: "Mesoamerican Civilizations (Maya, Aztec, Inca)",
  category: "history-timeline-facts",
  order: 7,
  subtopic: "ancient-history",
  tags: ["maya", "aztec", "inca", "mesoamerica", "ancient civilizations"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The Maya, Aztec, and Inca were three separate civilizations, centuries and thousands of kilometers apart — not one culture with three names.",
  summary: "The Maya, Aztec, and Inca were three distinct civilizations that developed independently in the Americas — the Maya across present-day Mexico and Central America from around 2000 BCE, the Aztec in central Mexico from the 14th century CE, and the Inca along the Andes from the 13th century CE — each with its own writing, engineering, and government systems, before European colonization.",
  sources: [
    { label: "The Metropolitan Museum of Art — Art of the Ancient Americas", url: "https://www.metmuseum.org/toah/hd/amcp/hd_amcp.htm" },
    { label: "Encyclopaedia Britannica — Maya civilization", url: "https://www.britannica.com/topic/Maya-people" },
    { label: "UNESCO World Heritage — City of Cusco", url: "https://whc.unesco.org/en/list/273/" },
  ],
  seeAlso: [
    "geography-world-facts/geography-of-south-america",
    "geography-world-facts/geography-of-north-america",
    "history-timeline-facts/european-age-of-exploration",
  ],
  glossary: [
    { term: "Mesoamerica", definition: "A cultural region spanning central Mexico to Central America, home to the Maya, Aztec, and earlier civilizations like the Olmec." },
    { term: "Maya numeral system", definition: "A base-20 counting system used by the Maya that included the concept of zero, developed independently of Old World number systems." },
    { term: "Quipu", definition: "A system of knotted cords used by the Inca to record numerical information and possibly narrative records, without a written alphabet." },
    { term: "Chinampa", definition: "An Aztec farming technique using artificial islands built up from lake mud and vegetation, used to grow crops on Lake Texcoco." },
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
          "The Maya, Aztec, and Inca were three separate civilizations in different places and eras — the Maya are the oldest by far (from around 2000 BCE), while the Aztec and Inca empires both rose in the 14th-15th centuries CE, over three thousand years later.",
          "The Maya independently developed the mathematical concept of zero and a base-20 number system, centuries before it reached Europe from India via the Islamic world.",
          "The Inca ran a vast, well-organized empire — the largest in the pre-Columbian Americas — without a written alphabet, using knotted cords called quipu to record numbers and information instead.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The Maya, Aztec, and Inca are three different civilizations that developed independently of each other and of the Old World, in different parts of the Americas at different times. The <TermLink href="/history-timeline-facts/mesoamerican-civilizations-maya-aztec-inca">Maya</TermLink> built city-states across present-day Mexico, Guatemala, Belize, and Honduras starting around 2000 BCE, with their most famous period (the Classic era) peaking between 250 and 900 CE. The Aztec built a powerful empire in central Mexico starting in the 1300s CE, ruling from their capital Tenochtitlan (built on an island in Lake Texcoco, where Mexico City now stands). The Inca, far to the south, built the largest empire in the pre-Columbian Americas along the Andes mountains, also starting in the 1300s CE.</div>}
        detailed={<div className="prose-p">These three civilizations are frequently grouped together in casual conversation and even some textbooks, but they had no direct contact with each other and developed largely independent political systems, religions, and technologies — the main thing they share is having flourished in the Americas before extensive European contact, and having each fallen to Spanish conquest within decades of each other in the 16th century (the Aztec Empire fell in 1521, the Inca Empire&apos;s core conquered by 1533, while independent Maya city-states, by then already centuries past their Classic-era peak, held out in fragmented form until the last independent Maya kingdom fell in 1697). Treating them as one interchangeable culture erases roughly 3,500 years of separate development — closer to the span separating ancient Egypt from the present day than to a single generation.</div>}
      />
      <FootnoteAside>The Maya civilization didn&apos;t &quot;disappear&quot; — millions of Maya people live in Mexico, Guatemala, Belize, and Honduras today, many still speaking Mayan languages and practicing traditions with roots in the ancient civilization.</FootnoteAside>
      <p>
      Given how different these three civilizations actually were, it&apos;s worth looking at what each one specifically achieved — starting with the Maya&apos;s independent invention of a mathematical idea Europe didn&apos;t have yet.
      </p>

      <QuickCheck
        question="Did the Maya, Aztec, and Inca civilizations exist at the same time and interact with each other?"
        options={[
          { text: "Yes, they were contemporary civilizations that traded and shared technology", correct: false, explanation: "They had no meaningful direct contact — they were geographically far apart and largely separated in time as well." },
          { text: "No — the Maya predate the Aztec and Inca by well over a thousand years, and all three developed independently with no significant direct contact", correct: true, explanation: "Correct. Maya civilization traces back to around 2000 BCE, while the Aztec and Inca empires both rose starting in the 1300s CE — separated by roughly 3,000 years and, for the Inca, thousands of kilometers to the south." },
          { text: "The Aztec and Inca were the same empire under two different names", correct: false, explanation: "They were entirely separate empires — the Aztec in central Mexico, the Inca along the Andes in South America, thousands of kilometers apart, with different languages, religions, and governments." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Case studies</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 1: Maya mathematics and astronomy (baseline case)</h3>
      <div className="prose-p">
      Maya mathematicians used a base-20 (vigesimal) number system and independently developed the concept of zero as a placeholder — a genuinely rare mathematical breakthrough, also independently achieved in ancient India and by the Babylonians in a more limited form. Maya astronomers tracked the movements of Venus and the sun with remarkable precision without telescopes, encoding this knowledge into a complex calendar system involving multiple interlocking cycles, used to time agricultural activity and religious ceremonies.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 2: Tenochtitlan, the Aztec capital (variation / engineering case)</h3>
      <div className="prose-p">
      Built on an island in Lake Texcoco starting around 1325 CE, Tenochtitlan grew into one of the largest cities in the world at the time, with an estimated population of 200,000-300,000 — larger than most European capitals of the same era. The Aztec expanded their farmland using chinampas, artificial islands built from layered lake mud and vegetation, an intensive farming method productive enough to help feed the huge urban population, connected to the mainland by causeways and a sophisticated system of dikes and aqueducts for fresh water.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 3: The Inca road network and quipu record-keeping (real-world / applied case)</h3>
      <div className="prose-p">
      The Inca Empire, at its height stretching roughly 4,000 kilometers along the Andes from modern-day Ecuador to Chile, built and maintained a road network of over 30,000 kilometers connecting the empire, used by relay runners called chasquis who could carry messages across hundreds of kilometers in days. Remarkably, the Inca managed this vast, centrally administered empire — including detailed census and tax records — without a written alphabet, instead using quipu, knotted cords in which the type, position, and color of knots recorded numerical (and likely some narrative) information, a system scholars are still working to fully decode today.
      </div>

      <QuickCheck
        question="How did the Inca Empire keep detailed records like census and tax data without a written alphabet?"
        options={[
          { text: "They relied entirely on oral memorization passed down by officials", correct: false, explanation: "Oral tradition mattered, but the Inca had a dedicated recording technology for this purpose." },
          { text: "They used quipu — knotted cords where knot type, position, and color encoded numerical and likely narrative information", correct: true, explanation: "Correct. Quipu let Inca administrators track census data, tax obligations, and resources across a vast empire without an alphabet-based writing system — a genuinely unusual solution among major world civilizations, and one researchers are still working to fully decode." },
          { text: "They adapted the Maya writing system for their own use", correct: false, explanation: "The Inca and Maya were geographically distant and had no direct contact — the Inca developed quipu independently, unrelated to Maya hieroglyphic writing." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Maya, Aztec, and Inca civilizations: where and when, on the same timeline"
        type="comparison"
        svgSrc="/diagrams/04-mesoamerican-civilizations-timeline-comparison.svg"
        altText="Comparison timeline showing three separate bars: Maya civilization spanning from around 2000 BCE with its Classic period peak between 250 and 900 CE and continuing in fragmented form to 1697 CE; the Aztec Empire rising around 1325 CE and falling to Spanish conquest in 1521 CE; and the Inca Empire rising around 1400 CE and its core falling to Spanish conquest by 1533 CE, illustrating the roughly 3,000-year gap between the Maya's origins and the much later, geographically separate Aztec and Inca empires."
      />
      <p>
      The visual gap is the whole point: the Maya timeline bar stretches back thousands of years further than the Aztec or Inca bars even begin — three genuinely separate civilizations, not stages of one culture.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating \"Maya, Aztec, and Inca\" as interchangeable names for one ancient American culture.", fix: "They were three separate civilizations in different regions and eras — the Maya predate the other two by millennia and are a distinct language family and culture, not an early phase of the Aztec or Inca." },
          { mistake: "Assuming the Maya civilization vanished or went extinct.", fix: "Millions of Maya people live in Mexico and Central America today, many speaking Mayan languages — what declined was the network of large Classic-era city-states, not the Maya people or culture themselves." },
          { mistake: "Assuming these civilizations lacked writing or record-keeping without an alphabet.", fix: "The Maya had a sophisticated hieroglyphic writing system (largely deciphered since the late 20th century); the Inca used quipu instead of an alphabet but still maintained detailed administrative records — absence of an alphabet isn't absence of record-keeping." },
        ]}
      />
      <MisconceptionCallout
        myth="The Maya civilization mysteriously and completely collapsed or disappeared."
        reality={<p>What&apos;s usually called the &quot;Maya collapse&quot; refers specifically to the decline of many large Classic-period city-states in the southern lowlands between roughly 800-900 CE, likely driven by a combination of prolonged drought, warfare, and political strain — not the disappearance of the Maya people. Northern Maya cities like Chichen Itza continued to flourish for centuries afterward, and Maya civilization and language groups persisted, with the last independent Maya kingdom not falling to Spanish conquest until 1697 — and millions of Maya people and their descendants live in the region today.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see \"Maya, Aztec, Inca\" grouped together as one thing, mentally separate them by rough era: Maya ancient, Aztec and Inca both fairly late, right before European contact.",
          "If you hear \"the Maya disappeared,\" correct it mentally — millions of Maya people and their languages exist today.",
          "Look up a photo of a quipu online — seeing an actual knotted-cord record makes the Inca's alphabet-free administration much more concrete.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Were the Maya, Aztec, and Inca the same civilization?", answer: "No — they were three separate civilizations in different regions of the Americas, developing largely independently. The Maya (from around 2000 BCE, Mexico/Central America) predate the Aztec and Inca (both from the 1300s CE, central Mexico and the Andes respectively) by roughly 3,000 years." },
          { question: "Did the Maya civilization disappear?", answer: "No — the large Classic-period city-states declined between roughly 800-900 CE, but Maya people, languages, and culture continued and continue today; millions of Maya people live in Mexico, Guatemala, Belize, and Honduras." },
          { question: "How did the Aztec build a city on a lake?", answer: "The Aztec built their capital, Tenochtitlan, on an island in Lake Texcoco starting around 1325 CE, expanding usable land with chinampas — artificial farming islands built from layered lake mud and vegetation — and connecting the city to the mainland with causeways." },
          { question: "Did the Inca have writing?", answer: "The Inca did not use an alphabet-based writing system. Instead they used quipu, knotted cords that encoded numerical information (and likely some narrative content) through knot type, position, and color — a system researchers are still working to fully decode." },
          { question: "What ended the Maya, Aztec, and Inca civilizations?", answer: "Each had a different trajectory: major Maya city-states declined centuries earlier from internal factors like drought and warfare, while the Aztec Empire (1521) and the core of the Inca Empire (by 1533) fell specifically to Spanish conquest, aided by European diseases that devastated Indigenous populations who had no prior immunity." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
