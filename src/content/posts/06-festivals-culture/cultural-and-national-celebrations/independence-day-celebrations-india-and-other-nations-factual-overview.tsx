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
  title: "Independence Day Celebrations (India & other nations, factual overview)",
  category: "festivals-culture",
  order: 17,
  subtopic: "cultural-and-national-celebrations",
  tags: ["independence day", "india", "national holidays", "decolonization"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Independence Day marks the date a nation formally gained sovereignty from colonial or foreign rule — India's falls August 15, 1947, one of dozens of such national holidays.",
  summary: "Independence Day is the annual national holiday marking the specific date a country formally became sovereign, most commonly by ending colonial rule — India observes it August 15, commemorating its 1947 transfer of power from British rule.",
  sources: [
    { label: "Encyclopaedia Britannica — Indian Independence Act 1947", url: "https://www.britannica.com/event/Indian-Independence-Act" },
    { label: "National Archives of India — Independence and Partition", url: "https://nationalarchives.nic.in" },
    { label: "Encyclopaedia Britannica — Decolonization", url: "https://www.britannica.com/topic/decolonization" },
    { label: "U.S. National Archives — Declaration of Independence", url: "https://www.archives.gov/founding-docs/declaration" },
  ],
  seeAlso: [
    "festivals-culture/republic-day-explained-india",
    "festivals-culture/national-days-around-the-world-overview",
    "festivals-culture/new-year-celebrations-around-the-world",
  ],
  glossary: [
    { term: "Indian Independence Act 1947", definition: "The Act of the UK Parliament that ended British rule over British India, creating the two independent dominions of India and Pakistan effective August 15, 1947." },
    { term: "Decolonization", definition: "The historical process by which colonies gained political independence from colonial powers, occurring in major waves particularly after World War II." },
    { term: "Partition of India", definition: "The 1947 division of British India into the two independent nations of India and Pakistan, which occurred alongside independence and caused large-scale displacement and violence." },
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
          "Independence Day marks the specific date a nation formally became sovereign — for India, that's August 15, 1947, when the Indian Independence Act took effect and British rule ended.",
          "India's independence in 1947 occurred alongside Partition, the simultaneous division of British India into India and Pakistan — a historically documented, difficult event usually discussed alongside, not separately from, the independence narrative.",
          "Independence Day is not unique to India — most nations that were formerly colonies observe their own Independence Day on their own historically specific date, each commemorating a distinct transfer of sovereignty.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Independence Day is the annual holiday marking the date a country formally gained sovereignty, most often from colonial rule. In India, Independence Day falls on August 15, commemorating August 15, 1947, when British rule ended and India became a sovereign nation. It&apos;s marked with a flag-hoisting ceremony, the Prime Minister&apos;s address from the Red Fort in Delhi, and public events nationwide. Many other countries — the United States (July 4), Brazil, Mexico, and dozens of former colonies across Africa and Asia — observe their own Independence Day on their own specific date.</div>}
        detailed={<div className="prose-p">India&apos;s independence took effect through the <TermLink href="/festivals-culture/independence-day-celebrations-india-and-other-nations-factual-overview">Indian Independence Act 1947</TermLink>, passed by the UK Parliament, which ended British Crown rule over British India and simultaneously created two independent dominions: India and Pakistan. This division, known as <TermLink href="/festivals-culture/independence-day-celebrations-india-and-other-nations-factual-overview">Partition</TermLink>, occurred on the same date and is a documented part of the same historical moment — it involved the large-scale displacement of an estimated 10–20 million people across the new India–Pakistan border and significant loss of life, and is treated by historians as inseparable from the independence narrative rather than a separate event. India&apos;s first Prime Minister, Jawaharlal Nehru, delivered the well-known &quot;Tryst with Destiny&quot; speech at midnight as independence took effect. It&apos;s worth distinguishing India&apos;s Independence Day (August 15, marking the transfer of sovereignty) from Republic Day (January 26, marking the day India&apos;s constitution came into force in 1950) — the two are commonly confused but commemorate different events roughly two and a half years apart.</div>}
      />
      <FootnoteAside>India and Pakistan became independent on consecutive days under the same Act — India at midnight between August 14 and 15, and Pakistan officially on August 14 — a detail rooted in the specific timing set out in the 1947 transfer-of-power arrangements.</FootnoteAside>

      <QuickCheck
        question="What specifically happened on India's Independence Day, August 15, 1947?"
        options={[
          { text: "India's constitution came into force, making it a republic", correct: false, explanation: "That's Republic Day, January 26, 1950 — a distinct, later event. Independence Day in 1947 marked the end of British rule, not the adoption of the constitution." },
          { text: "The Indian Independence Act took effect, ending British rule and creating the independent dominions of India and Pakistan", correct: true, explanation: "Correct. This is the specific, documented legal and historical event Independence Day commemorates." },
          { text: "India signed a peace treaty formally ending a war with Britain", correct: false, explanation: "India's transition to independence was a negotiated transfer of power via Act of Parliament, not the outcome of a war-ending treaty." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: India&apos;s Independence Day — the baseline case</h3>
      <div className="prose-p">India observes Independence Day on August 15 each year with a flag-hoisting ceremony at the Red Fort in Delhi, where the Prime Minister delivers a nationally televised address, followed by parades, cultural events, and flag-hoisting ceremonies at schools and government buildings nationwide. The holiday&apos;s significance is tied specifically to the 1947 transfer of power from British rule, a process that had built for decades through the Indian independence movement, including its most widely recognized figure, Mahatma Gandhi, and his campaigns of non-violent resistance.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The United States&apos; Independence Day — a differently structured transfer of sovereignty (variation)</h3>
      <div className="prose-p">The United States observes Independence Day on July 4, commemorating the 1776 adoption of the Declaration of Independence by the Continental Congress — a unilateral declaration, not a negotiated legal transfer like India&apos;s 1947 Act. Independence itself was only secured after the Revolutionary War concluded with the 1783 Treaty of Paris, meaning the celebrated date (the declaration) and the date sovereignty was actually internationally recognized are several years apart — a genuinely different structure from India&apos;s case, where the legal Act and the actual transfer of power happened on the same day.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Independence Day observances across the post-colonial world today (real-world / applied case)</h3>
      <div className="prose-p">Dozens of nations across Africa, Asia, and the Americas observe their own Independence Day, each tied to a specific, distinct historical date: Brazil (September 7, 1822, from Portugal), Mexico (September 16, 1810, start of its independence struggle from Spain), Nigeria (October 1, 1960, from the United Kingdom), and Indonesia (August 17, 1945, from Dutch and Japanese occupation), among many others. These are not variations on India&apos;s or America&apos;s holiday — each marks that specific nation&apos;s own documented transfer or declaration of sovereignty, reflecting the broader 19th- and 20th-century wave of decolonization historians study as a connected but not identical global process.</div>

      <QuickCheck
        question="How does the historical structure of U.S. Independence Day (July 4) differ from India's (August 15)?"
        options={[
          { text: "They don't differ — both mark a negotiated legal transfer of power on a single date", correct: false, explanation: "India's independence took effect via a single Act of Parliament on the observed date. The U.S. date marks a declaration, with sovereignty actually secured years later after the Revolutionary War." },
          { text: "The U.S. date marks a unilateral declaration, with independence only secured years later after war; India's date marks the actual legal transfer of power itself", correct: true, explanation: "Correct. This is a genuine structural difference between the two independence stories, not just a difference in date." },
          { text: "India's independence was also secured through a war fought after the declared date", correct: false, explanation: "India's 1947 transition was a negotiated, legislated transfer of power under the Indian Independence Act, not the result of a war concluding after independence was declared." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Confusing India's Independence Day (August 15) with Republic Day (January 26).", fix: "Independence Day marks the 1947 end of British rule; Republic Day marks the 1950 adoption of India's constitution — two distinct events roughly two and a half years apart." },
          { mistake: "Treating Partition as a separate historical footnote from India's independence.", fix: "Partition occurred simultaneously with independence under the same 1947 Act and is documented by historians as part of the same transfer-of-power process, not a disconnected event." },
          { mistake: "Assuming every country's Independence Day marks a negotiated legal transfer like India's.", fix: "The structure varies — the U.S. holiday marks a unilateral 1776 declaration followed by years of war, while India's marks the Act that directly enacted the transfer of sovereignty on that date." },
        ]}
      />
      <MisconceptionCallout
        myth="India's Independence Day and Republic Day celebrate the same event."
        reality={<p>They mark two distinct, dated events: Independence Day (August 15) commemorates the 1947 Indian Independence Act ending British rule, while Republic Day (January 26) commemorates the 1950 date India&apos;s constitution came into force, making it a sovereign republic rather than a dominion. Both are major national holidays, but conflating them erases a real two-and-a-half-year gap between becoming independent and formally adopting a republican constitution.</p>}
      />

      <QuickCheck
        question="What event does India's Republic Day commemorate, as distinct from Independence Day?"
        options={[
          { text: "The end of British colonial rule in 1947", correct: false, explanation: "That's Independence Day, August 15 — a separate, earlier event." },
          { text: "The date India's constitution came into force in 1950, making it a sovereign republic", correct: true, explanation: "Correct. Republic Day, January 26, marks this specific later constitutional milestone, distinct from the 1947 transfer of power." },
          { text: "India's admission to the United Nations", correct: false, explanation: "India's UN membership is a separate matter from either Independence Day or Republic Day and isn't the event either holiday commemorates." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see India's Independence Day and Republic Day mentioned, note which one is meant — August 15 (1947, end of British rule) versus January 26 (1950, constitution takes effect).",
          "If you're discussing India's independence, treat Partition as part of the same historical narrative rather than a separate side note — it happened simultaneously and is documented as such.",
          "Notice that another country's Independence Day likely marks a completely different kind of historical event (a declaration, a war's end, a negotiated act) — check the specific date and process rather than assuming it mirrors India's or America's.",
          "Look up your own country's Independence Day (if it has one) and what specific legal or historical event it actually commemorates.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What date is India's Independence Day?", answer: "August 15, commemorating August 15, 1947, when the Indian Independence Act took effect and British rule over India ended." },
          { question: "What is the difference between Independence Day and Republic Day in India?", answer: "Independence Day (August 15) marks the 1947 end of British rule; Republic Day (January 26) marks the 1950 date India's constitution came into force. They are separate events roughly two and a half years apart." },
          { question: "Did Pakistan become independent on the same day as India?", answer: "Under the same 1947 Act, Pakistan's independence is officially dated August 14 and India's August 15 — the two nations were created from the same transfer-of-power process on consecutive dates." },
          { question: "Why do different countries have Independence Day on different dates?", answer: "Each country's Independence Day marks its own specific, distinct historical event — a declaration, an act of parliament, or the end of a war — so the dates reflect each nation's own documented history rather than a shared calendar." },
          { question: "What happened during Partition in 1947?", answer: "Partition was the division of British India into the independent nations of India and Pakistan, occurring alongside independence. It caused the large-scale displacement of an estimated 10 to 20 million people across the new border and significant loss of life, and is treated by historians as part of the same 1947 transfer-of-power process." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
