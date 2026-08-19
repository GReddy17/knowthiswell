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
  title: "Latin American Independence Movements",
  category: "history-timeline-facts",
  order: 25,
  subtopic: "revolutions-and-modern-foundations",
  tags: ["latin american independence", "simon bolivar", "haitian revolution", "mexican independence", "jose de san martin", "latin american history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Latin American independence wasn't one event — it was a staggered series of distinct movements from Haiti's 1804 revolution to South America's wars through the 1820s.",
  summary: "Latin American independence movements were a series of separate uprisings across the Americas, from Haiti's revolution beginning in 1791 through the wars of independence across Spanish and Portuguese America in the 1810s and 1820s, that ended roughly three centuries of European colonial rule region by region rather than all at once.",
  sources: [
    { label: "Encyclopaedia Britannica — Latin American Wars of Independence", url: "https://www.britannica.com/event/Latin-American-wars-of-independence" },
    { label: "Smithsonian National Museum of American History — Latin American history resources", url: "https://americanhistory.si.edu/" },
    { label: "U.S. Library of Congress — Country Studies: Latin America", url: "https://www.loc.gov/collections/" },
  ],
  seeAlso: [
    "history-timeline-facts/the-american-revolution",
    "history-timeline-facts/the-french-revolution",
    "history-timeline-facts/the-industrial-revolution",
  ],
  glossary: [
    { term: "Criollo (Creole)", definition: "In colonial Spanish America, a person of Spanish descent born in the Americas rather than in Spain — criollos led most of the Spanish American independence movements." },
    { term: "Viceroyalty", definition: "A large administrative territory in the Spanish colonial empire governed on behalf of the Spanish crown by an appointed viceroy, such as the Viceroyalty of New Spain or the Viceroyalty of Peru." },
    { term: "Gran Colombia", definition: "A short-lived republic (1819-1831) uniting present-day Venezuela, Colombia, Ecuador, and Panama, envisioned by Simón Bolívar, which fractured into separate nations within a decade." },
    { term: "Peninsular War", definition: "The 1808-1814 conflict triggered when Napoleon invaded Spain and Portugal, removing the Spanish king and creating a political crisis that directly triggered most Spanish American independence movements." },
    { term: "Abolition", definition: "The formal ending of slavery; Haiti's 1804 independence, achieved through a successful slave revolt, was directly tied to abolition in a way most other Latin American independence movements were not." },
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
          "Latin American independence wasn't a single event — it was a series of distinct, staggered movements spanning roughly 1791 (Haiti) to the mid-1820s (South America), each with different leaders, timelines, and outcomes.",
          "Napoleon's 1808 invasion of Spain, which removed the Spanish king, created a political power vacuum that directly triggered most of the Spanish American independence movements within just a few years.",
          "Brazil's path to independence (1822) looked nothing like the wars fought across Spanish America — it was declared by the Portuguese king's own son and kept Brazil a monarchy, rather than emerging from a prolonged war of separation.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/history-timeline-facts/latin-american-independence-movements">Latin American independence movements</TermLink> were the series of uprisings, mostly in the early 1800s, through which colonies across the Americas broke away from Spanish and Portuguese rule. It started with Haiti&apos;s revolution (1791-1804), the only successful large-scale slave revolt in history to establish an independent nation, and continued across Spanish America after Napoleon invaded Spain in 1808, weakening royal authority. Leaders like Simón Bolívar and José de San Martín led military campaigns across South America through the 1810s and into the 1820s, while Mexico won independence through a separate, longer conflict, and Brazil took a very different, largely peaceful path to independence from Portugal in 1822.</div>}
        detailed={<div className="prose-p">Napoleon&apos;s invasion of Spain and Portugal in 1808 (the start of the Peninsular War) removed Spain&apos;s King Ferdinand VII from power and installed Napoleon&apos;s brother instead, throwing Spanish colonial authority into crisis: many colonial elites, mostly <TermLink href="/history-timeline-facts/latin-american-independence-movements">criollos</TermLink> (American-born people of Spanish descent), began forming juntas claiming to govern in the absent king&apos;s name, which gradually evolved into full independence movements. Miguel Hidalgo&apos;s &quot;Grito de Dolores&quot; (Sept. 16, 1810) is generally marked as the start of Mexico&apos;s independence struggle, though Mexican independence wasn&apos;t achieved until 1821. Simón Bolívar led campaigns liberating Venezuela, Colombia, and Ecuador, envisioning a unified republic called <TermLink href="/history-timeline-facts/latin-american-independence-movements">Gran Colombia</TermLink> (1819-1831), while José de San Martín led forces across Argentina (independence declared 1816), Chile (1818), and into Peru. The two generals&apos; combined campaigns culminated in the Battle of Ayacucho (December 1824), which effectively ended Spanish colonial rule on the South American mainland, with the last isolated Spanish garrisons surrendering by 1826. Brazil&apos;s path diverged sharply: when Napoleon invaded Portugal in 1807, the Portuguese royal family fled to Brazil and ruled the empire from Rio de Janeiro for over a decade; when King João VI eventually returned to Portugal, he left his son Pedro behind, who declared Brazilian independence himself in 1822 and became Brazil&apos;s first emperor — a transition that kept Brazil a monarchy without the sustained, large-scale warfare that characterized most Spanish American independence struggles.</div>}
      />
      <FootnoteAside>Haiti&apos;s independence (1804) came at a brutal long-term economic cost: in 1825, France, still refusing to fully recognize Haitian sovereignty, forced Haiti to pay a massive indemnity to former French slaveholders as compensation for lost &quot;property&quot; (enslaved people) and lost colonial revenue, under threat of renewed military invasion. Historians and economists estimate Haiti spent well over a century paying off this debt and related refinancing loans, a burden widely cited as a major contributor to the country&apos;s long-term economic struggles.</FootnoteAside>
      <p>
      That debt is a reminder that &quot;independence&quot; didn&apos;t mean the same thing, or come with the same consequences, across every movement in this period — a pattern that shows up again and again once you look past the single-story version of Latin American independence.
      </p>

      <QuickCheck
        question="Which of these accurately describes the overall shape of Latin American independence movements in the late 18th and early 19th centuries?"
        options={[
          { text: "A single unified war fought simultaneously across the entire region against Spain and Portugal", correct: false, explanation: "There was no single unified war — independence arrived through distinct, staggered movements led by different people, in different colonies, over roughly three and a half decades." },
          { text: "A series of distinct, staggered movements — starting with Haiti in 1791-1804 and continuing through separate Spanish American and Brazilian independence processes into the 1820s", correct: true, explanation: "Correct. Haiti's revolution, Mexico's independence struggle, Bolívar's and San Martín's South American campaigns, and Brazil's very different path to independence were all separate processes with their own timelines and leaders." },
          { text: "A movement that occurred entirely after 1850, once European colonial powers voluntarily withdrew", correct: false, explanation: "Nearly all of Latin America had already achieved independence by the mid-1820s — this happened decades earlier than 1850, and mostly through active conflict or political crisis, not voluntary European withdrawal." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Simón Bolívar&apos;s campaigns in northern South America (baseline case)</h3>
      <div className="prose-p">
      Simón Bolívar, born in Caracas to a wealthy criollo family, led military campaigns across Venezuela, Colombia, and Ecuador through the 1810s and early 1820s, suffering early defeats and exile before returning to lead a series of decisive victories, including at the Battle of Boyacá (1819), which secured Colombian independence and let Bolívar establish the short-lived republic of Gran Colombia. Bolívar dreamed of a large, unified South American republic that could stand as a counterweight to European and, eventually, U.S. power — but Gran Colombia fractured into Venezuela, Colombia, and Ecuador as separate nations by 1831, a reminder that even the movement&apos;s most influential leader couldn&apos;t hold his intended political vision together once independence was actually won.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Brazil&apos;s very different path to independence (variation / exception)</h3>
      <div className="prose-p">
      While Spanish American colonies fought prolonged wars against royal forces, Brazil&apos;s transition was strikingly different. When Napoleon invaded Portugal in 1807, the Portuguese royal family fled across the Atlantic and governed the Portuguese empire from Rio de Janeiro for over a decade, effectively making Brazil the seat of the crown rather than a subordinate colony. When King João VI returned to Portugal in 1821, he left his son, Pedro, as regent; facing pressure from the Portuguese parliament to reduce Brazil back to colonial status, Pedro instead declared Brazilian independence himself in September 1822 and was crowned emperor. Brazil remained a monarchy until 1889, decades after most Spanish American nations had already become republics — proof that &quot;independence&quot; in this era didn&apos;t automatically mean adopting the same government model everywhere.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How these movements still shape the region today (real-world / applied case)</h3>
      <div className="prose-p">
      Independence days are still major national holidays across Latin America, celebrated on different dates precisely because these were separate movements: Mexico marks September 16 (the anniversary of the Grito de Dolores), Argentina marks May 25, and Chile marks September 18. Simón Bolívar&apos;s legacy is embedded directly into the region&apos;s geography and politics — Bolivia is named for him, and Venezuela&apos;s official name for decades has been the Bolivarian Republic of Venezuela. The staggered, uneven nature of these movements also still shapes how historians and policymakers discuss regional identity and cooperation across Latin America, since the region never shared one single founding moment the way the phrase &quot;Latin American independence&quot; can make it sound.
      </div>

      <QuickCheck
        question="How did Brazil's transition to independence in 1822 differ from most Spanish American independence movements?"
        options={[
          { text: "Brazil fought the longest and bloodiest war of independence in the region", correct: false, explanation: "The opposite is closer to true — Brazil's transition was comparatively peaceful, without the prolonged, large-scale warfare seen across much of Spanish America." },
          { text: "Brazil's independence was declared by the Portuguese king's own son, and Brazil remained a monarchy rather than immediately becoming a republic", correct: true, explanation: "Correct. Pedro, son of Portugal's King João VI, declared Brazilian independence in 1822 and became emperor, keeping Brazil a monarchy until 1889 — a sharply different path from the republic-focused wars fought across Spanish America." },
          { text: "Brazil achieved independence before Haiti did", correct: false, explanation: "Haiti's independence (1804) came nearly two decades before Brazil's (1822), making Haiti the earliest successful independence movement in the Americas outside the original thirteen U.S. colonies." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Latin American independence: staggered movements, 1791 to 1826"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-latin-american-independence-movements-timeline.svg"
        altText="Horizontal timeline beginning with the Haitian Revolution from 1791 to 1804, Napoleon's invasion of Spain and Portugal starting the Peninsular War in 1808, Mexico's Grito de Dolores in September 1810, Argentina's independence declared in 1816, Chile's independence in 1818, Gran Colombia formed in 1819, Mexican independence achieved in 1821, Brazil's independence declared in 1822, the Battle of Ayacucho ending Spanish rule on the South American mainland in December 1824, and the last Spanish garrisons surrendering by 1826."
      />
      <p>
      Spread across that timeline, the gap between Haiti&apos;s independence in 1804 and the Battle of Ayacucho in 1824 is a full two decades — long enough that people born around Haiti&apos;s revolution could have been raising their own children by the time Spanish rule finally ended on the South American mainland, underscoring just how staggered this process really was.
      </p>

      <EntryCalculator
        title="Years since Mexico's Grito de Dolores (1810)"
        fields={[
          { key: "year", label: "Event year", defaultValue: 1810 },
        ]}
        resultLabel="Years elapsed"
        formula="yearsSinceYear"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating Latin American independence as one unified event with a single date.", fix: "It was a series of separate movements, from Haiti's revolution (1791-1804) through Mexico's, Bolívar's and San Martín's South American campaigns, and Brazil's very different transition, spanning over three decades." },
          { mistake: "Assuming every country became a republic immediately upon independence.", fix: "Brazil remained a monarchy until 1889, decades after most Spanish American nations became republics — independence didn't automatically mean adopting the same form of government." },
          { mistake: "Overlooking Haiti's revolution as part of the story, since it's often treated separately from \"Latin American\" independence.", fix: "Haiti's 1791-1804 revolution was the first successful independence movement in the region and the only one rooted directly in a successful slave revolt — it set an early, distinct precedent the later movements didn't fully replicate." },
        ]}
      />
      <MisconceptionCallout
        myth={'Latin American independence was a single unified event, roughly comparable to one revolution happening at one time.'}
        reality={<p>Latin American independence unfolded as many distinct, staggered movements across more than three decades: Haiti&apos;s revolution (1791-1804), triggered by an enslaved population&apos;s uprising; Mexico&apos;s independence struggle (1810-1821); Simón Bolívar&apos;s and José de San Martín&apos;s separate military campaigns across Gran Colombia, Argentina, Chile, and Peru through the 1810s and into the 1820s; and Brazil&apos;s comparatively peaceful transition to independence as a monarchy in 1822. Each had different leaders, causes, timelines, and outcomes — the Battle of Ayacucho in December 1824 is generally cited as the effective end of Spanish rule on the South American mainland, with isolated garrisons holding out until 1826, more than three decades after Haiti&apos;s revolution began.</p>}
      />

      <QuickCheck
        question="Approximately how much time separated the start of Haiti's revolution from the effective end of Spanish colonial rule on the South American mainland at the Battle of Ayacucho?"
        options={[
          { text: "Under a year — these were essentially simultaneous events", correct: false, explanation: "They were separated by more than three decades, not under a year — Haiti's revolution began in 1791, while the Battle of Ayacucho took place in December 1824." },
          { text: "Roughly three decades, reflecting how staggered these independence movements actually were", correct: true, explanation: "Correct. Haiti's revolution began in 1791; the Battle of Ayacucho, which effectively ended Spanish rule on the South American mainland, took place in December 1824 — a gap of more than 30 years." },
          { text: "About two centuries, with Haiti's revolution happening in the colonial period and Ayacucho happening in the 20th century", correct: false, explanation: "Both events took place within the same broader historical period — Haiti's revolution (1791-1804) and the Battle of Ayacucho (1824) are only a few decades apart, not centuries." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time \"Latin American independence\" comes up as if it were one event, mention that it spans Haiti's 1804 revolution through South America's mid-1820s wars — over three decades apart.",
          "Notice that different countries celebrate independence on different dates precisely because these were separate movements, not one shared uprising.",
          "Remember Brazil's very different, largely peaceful path to independence as a monarchy the next time someone assumes every former colony in the region became a republic right away.",
          "Read the related entry on the American Revolution to see how Enlightenment ideas about self-governance and natural rights traveled from North America into these later movements.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "When did Latin American countries gain independence?", answer: "Mostly between 1804 (Haiti) and the mid-1820s. Mexico achieved independence in 1821, Argentina in 1816, Chile in 1818, Brazil in 1822, and Spanish rule on the South American mainland effectively ended after the Battle of Ayacucho in December 1824, with isolated garrisons surrendering by 1826." },
          { question: "What caused Latin American independence movements?", answer: "Napoleon's 1808 invasion of Spain and Portugal, which removed the Spanish king and disrupted colonial administration, was the immediate trigger for most Spanish American movements. Haiti's earlier revolution (1791-1804) arose from a successful uprising by enslaved people against French colonial rule, a distinct and separate cause." },
          { question: "Who was Simón Bolívar?", answer: "Simón Bolívar was a Venezuelan-born military and political leader who led independence campaigns across present-day Venezuela, Colombia, and Ecuador in the 1810s and early 1820s, and envisioned a unified South American republic, Gran Colombia, which fractured into separate nations by 1831." },
          { question: "Was Latin American independence one single movement?", answer: "No. It was a series of distinct, staggered movements with different leaders, causes, and timelines — including Haiti's 1791-1804 revolution, Mexico's 1810-1821 struggle, Bolívar's and San Martín's South American campaigns, and Brazil's separate, largely peaceful transition in 1822." },
          { question: "How did Brazil's independence differ from Spanish American independence?", answer: "Brazil's independence was declared in 1822 by Pedro, son of Portugal's king, who became Brazil's emperor — a comparatively peaceful transition that kept Brazil a monarchy until 1889, unlike the prolonged wars that produced republics across most of Spanish America." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
