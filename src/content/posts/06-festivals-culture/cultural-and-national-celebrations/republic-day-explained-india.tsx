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
  title: "Republic Day Explained (India)",
  category: "festivals-culture",
  order: 18,
  subtopic: "cultural-and-national-celebrations",
  tags: ["republic day", "india", "indian constitution", "national holidays"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Republic Day, January 26, marks the date India's constitution came into force in 1950, turning the country from a dominion into a sovereign republic.",
  summary: "Republic Day is India's national holiday marking January 26, 1950, the date the Constitution of India came into force, formally making India a sovereign democratic republic rather than a British Commonwealth dominion.",
  sources: [
    { label: "Encyclopaedia Britannica — Constitution of India", url: "https://www.britannica.com/topic/Constitution-of-India" },
    { label: "Government of India — Ministry of Culture, Republic Day", url: "https://www.india.gov.in" },
    { label: "National Archives of India", url: "https://nationalarchives.nic.in" },
    { label: "Press Information Bureau, Government of India", url: "https://pib.gov.in" },
  ],
  seeAlso: [
    "festivals-culture/independence-day-celebrations-india-and-other-nations-factual-overview",
    "festivals-culture/national-days-around-the-world-overview",
  ],
  glossary: [
    { term: "Constitution of India", definition: "The supreme governing legal document of India, drafted by the Constituent Assembly and coming into force on January 26, 1950, replacing the Government of India Act 1935 as the country's founding law." },
    { term: "Dominion", definition: "A self-governing nation that formally recognized the British monarch as head of state — India held this status from its 1947 independence until Republic Day in 1950." },
    { term: "Purna Swaraj", definition: "Hindi for 'complete self-rule,' the declaration adopted by the Indian National Congress on January 26, 1930, calling for full independence — the reason January 26 was later chosen as Republic Day's date." },
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
          "Republic Day, observed January 26, marks the date the Constitution of India came into force in 1950 — a distinct, later event from Independence Day (August 15, 1947).",
          "Before Republic Day, India was technically a dominion, formally recognizing the British monarch as head of state — the new constitution ended that arrangement and established India as a sovereign democratic republic.",
          "January 26 was deliberately chosen to honor the earlier 1930 Purna Swaraj (complete self-rule) declaration, connecting the constitution's effective date to a specific milestone in the independence movement itself.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Republic Day is India&apos;s national holiday on January 26, marking the day in 1950 that the Constitution of India took effect, formally making the country a sovereign republic. It&apos;s marked by a major parade in New Delhi showcasing India&apos;s military, culture, and states, along with the President&apos;s address and, typically, a foreign head of state attending as chief guest. It&apos;s a separate holiday from Independence Day, which marks the earlier 1947 end of British rule.</div>}
        detailed={<div className="prose-p">India became independent on August 15, 1947, but initially retained the status of a <TermLink href="/festivals-culture/republic-day-explained-india">dominion</TermLink> within the British Commonwealth, formally recognizing the British monarch as head of state while governing itself under an adapted version of the Government of India Act 1935. The <TermLink href="/festivals-culture/republic-day-explained-india">Constitution of India</TermLink>, drafted by the Constituent Assembly over roughly three years under the chairmanship of Dr. B.R. Ambedkar, came into force on January 26, 1950, formally ending the dominion arrangement and establishing India as a sovereign democratic republic with its own head of state (the President) rather than the British monarch. The date January 26 was deliberately selected to honor <TermLink href="/festivals-culture/republic-day-explained-india">Purna Swaraj</TermLink>, the declaration of complete self-rule adopted by the Indian National Congress on January 26, 1930 — meaning Republic Day&apos;s date memorializes an earlier independence-movement milestone, not simply the constitution-drafting timeline itself.</div>}
      />
      <FootnoteAside>The Constitution of India, at roughly 145,000 words in its original English-language version, is among the longest written national constitutions in the world — a scale historians attribute partly to its detailed provisions for a large, diverse federal democracy.</FootnoteAside>

      <QuickCheck
        question="What specifically happened on Republic Day, January 26, 1950?"
        options={[
          { text: "British rule over India formally ended", correct: false, explanation: "That happened on Independence Day, August 15, 1947 — nearly two and a half years earlier." },
          { text: "The Constitution of India came into force, ending dominion status and establishing India as a sovereign republic", correct: true, explanation: "Correct. This is the specific documented legal event Republic Day commemorates." },
          { text: "India held its first general election", correct: false, explanation: "India's first general election was held in 1951–52, after Republic Day, not on it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The Republic Day parade in New Delhi (baseline case)</h3>
      <div className="prose-p">Each January 26, a major parade moves along Rajpath (officially renamed Kartavya Path) in New Delhi, featuring military regiments, indigenously developed defense equipment, and elaborately decorated tableaux representing India&apos;s states and union territories, ministries, and cultural themes. The President of India presides over the event, and a foreign head of state or government is typically invited as chief guest — a diplomatic tradition dating back to the first Republic Day parade in 1950, when Indonesia&apos;s President Sukarno was the inaugural chief guest.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The 1930 Purna Swaraj declaration — why January 26 specifically (variation)</h3>
      <div className="prose-p">Twenty years before the constitution took effect, the Indian National Congress adopted the Purna Swaraj (complete self-rule) resolution on January 26, 1930, and that date was subsequently observed as an unofficial &quot;Independence Day&quot; by the independence movement throughout the 1930s and 1940s. When the Constituent Assembly finished its work in late 1949, choosing January 26, 1950, as the date the constitution would formally take effect was a deliberate act of historical continuity — tying the republic&apos;s founding date to an earlier symbolic milestone in the freedom struggle rather than an arbitrary administrative date.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Republic Day beyond the Delhi parade — schools and public life today (real-world / applied case)</h3>
      <div className="prose-p">Beyond the nationally televised Delhi parade, Republic Day is observed with flag-hoisting ceremonies and cultural programs at schools, government offices, and public institutions across India, and it is a gazetted national holiday. Unlike Independence Day&apos;s association with the Red Fort address, Republic Day&apos;s defining public image nationwide is the flag-hoisting-and-parade format at the local level, echoing the Delhi event on a smaller scale — a pattern that shows how a specific constitutional milestone became embedded in everyday civic and educational life well beyond the capital.</div>

      <QuickCheck
        question="Why was January 26 specifically chosen as the date the Constitution of India would take effect?"
        options={[
          { text: "It was simply the date the Constituent Assembly happened to finish its drafting work", correct: false, explanation: "The Constituent Assembly actually finished its work and adopted the constitution in late November 1949 — January 26, 1950 was chosen separately as the effective date." },
          { text: "It honored the January 26, 1930 Purna Swaraj declaration of complete self-rule made by the Indian National Congress", correct: true, explanation: "Correct. The date was deliberately selected for its historical significance to the independence movement, not chosen for administrative convenience." },
          { text: "It was the date Mahatma Gandhi was born", correct: false, explanation: "Gandhi's birthday, October 2, is separately observed in India (Gandhi Jayanti) — it isn't connected to the choice of Republic Day's date." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating Republic Day and Independence Day as the same holiday under two names.", fix: "They mark two distinct dated events: Independence Day (August 15, 1947, end of British rule) and Republic Day (January 26, 1950, constitution takes effect) — separated by roughly two and a half years." },
          { mistake: "Assuming India became a republic the moment it became independent in 1947.", fix: "India was a dominion — formally recognizing the British monarch as head of state — from 1947 until the constitution took effect in 1950 and ended that arrangement." },
          { mistake: "Assuming January 26 was chosen for administrative or drafting-schedule reasons.", fix: "It was chosen specifically to honor the 1930 Purna Swaraj declaration of complete self-rule, connecting the republic's founding date to an earlier independence-movement milestone." },
        ]}
      />
      <MisconceptionCallout
        myth="Republic Day and Independence Day in India celebrate the same event."
        reality={<p>They commemorate two distinct, separately dated milestones: Independence Day (August 15, 1947) marks the end of British colonial rule, while Republic Day (January 26, 1950) marks the date India&apos;s constitution came into force, ending the country&apos;s interim dominion status and establishing it as a sovereign republic. The events are related but not the same, and are separated by roughly two and a half years of India functioning as a dominion rather than a republic.</p>}
      />

      <QuickCheck
        question="What was India's official status between Independence Day (1947) and Republic Day (1950)?"
        options={[
          { text: "A fully sovereign republic, identical to its post-1950 status", correct: false, explanation: "India did not have full republic status yet — it was a dominion, formally recognizing the British monarch as head of state, until the constitution took effect in 1950." },
          { text: "A dominion within the British Commonwealth, recognizing the British monarch as head of state", correct: true, explanation: "Correct. This interim status ended when the Constitution of India came into force on Republic Day, 1950." },
          { text: "Still formally under direct British colonial administration", correct: false, explanation: "India was independent and self-governing from August 15, 1947 — it was not under colonial administration, but it retained dominion status (recognizing the monarch) until 1950." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see India's Republic Day and Independence Day mentioned together, check which specific event each one is referring to — January 26, 1950 versus August 15, 1947.",
          "Notice the chief guest invited to each year's Republic Day parade — it's a real, documented diplomatic signal about India's international relationships that year.",
          "If you're studying India's constitutional history, look at the roughly three-year gap between independence (1947) and the constitution taking effect (1950) — that interim dominion period is often skipped over.",
          "Look up why January 26, 1930 mattered to the independence movement before assuming Republic Day's date was arbitrary or purely administrative.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What date is Republic Day in India?", answer: "January 26, marking the anniversary of the Constitution of India coming into force on January 26, 1950." },
          { question: "What is the difference between Republic Day and Independence Day?", answer: "Independence Day (August 15) marks the 1947 end of British rule; Republic Day (January 26) marks the 1950 date India's constitution took effect, ending its interim dominion status. They are separate events roughly two and a half years apart." },
          { question: "Why was January 26 chosen for Republic Day?", answer: "It honors the January 26, 1930 Purna Swaraj (complete self-rule) declaration adopted by the Indian National Congress, connecting the constitution's effective date to that earlier independence-movement milestone." },
          { question: "What happens at the Republic Day parade?", answer: "A major parade in New Delhi featuring military regiments, defense equipment, and state and ministry tableaux, presided over by the President of India, typically with a foreign head of state attending as chief guest." },
          { question: "Was India a republic immediately after independence in 1947?", answer: "No — India held dominion status, formally recognizing the British monarch as head of state, from independence in 1947 until the Constitution of India came into force on Republic Day, January 26, 1950." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
