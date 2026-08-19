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
  title: "Decolonization Movement",
  category: "history-timeline-facts",
  order: 33,
  subtopic: "mid-20th-century",
  tags: ["decolonization", "colonialism", "independence movements", "20th century history", "post-war history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Decolonization was the decades-long, uneven process by which former colonies across Asia and Africa gained independence from European powers, mostly between the 1940s and 1970s.",
  summary: "Decolonization refers to the process by which countries across Asia, Africa, the Caribbean, and the Pacific gained independence from European colonial rule, unfolding in waves from the mid-1940s through the 1970s, driven by nationalist movements, the weakening of European powers after World War II, and international pressure including from the United Nations.",
  sources: [
    { label: "Encyclopaedia Britannica — Decolonization", url: "https://www.britannica.com/topic/decolonization" },
    { label: "United Nations — The United Nations and Decolonization", url: "https://www.un.org/dppa/decolonization/en" },
    { label: "Encyclopaedia Britannica — Colonialism", url: "https://www.britannica.com/topic/colonialism" },
  ],
  seeAlso: [
    "history-timeline-facts/world-war-ii-overview",
    "history-timeline-facts/indias-independence-movement",
  ],
  glossary: [
    { term: "Decolonization", definition: "The process by which a colony or dependent territory gains political independence from the foreign power that governed it." },
    { term: "Anti-colonial nationalism", definition: "A political movement within a colonized territory seeking self-rule and an end to foreign colonial administration." },
    { term: "Non-Aligned Movement", definition: "A coalition of newly independent states, formally organized in 1961, that chose not to formally align with either the United States or the Soviet Union during the Cold War." },
    { term: "Partition", definition: "The division of a former colonial territory into two or more separate independent states at the point of independence, sometimes accompanied by large-scale population displacement." },
    { term: "Trusteeship", definition: "A United Nations administrative arrangement over certain former colonial and mandate territories, intended to prepare them for eventual self-government or independence." },
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
          "Decolonization was not a single wave — it unfolded over roughly three decades, from South Asia's independence in 1947 through the independence of Portugal's African colonies in 1974-75, and in some cases later still.",
          "World War II weakened European colonial powers economically and militarily while strengthening anti-colonial nationalist movements and shifting international opinion against colonial rule, per Encyclopaedia Britannica.",
          "The United Nations formally supported decolonization, and its membership grew from 51 founding states in 1945 to well over 190 today as former colonies gained independence and joined, per the UN.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/history-timeline-facts/decolonization-movement">Decolonization</TermLink> is the process by which territories that had been ruled by foreign colonial powers, mostly European empires like Britain, France, Portugal, Belgium, and the Netherlands, gained independence and self-government. It happened gradually across Asia, Africa, the Caribbean, and the Pacific, mainly between the mid-1940s and the mid-1970s, though the pace and method varied enormously from country to country — some transitions were negotiated peacefully, others followed years of armed conflict.</div>}
        detailed={<div className="prose-p">World War II is widely credited by historians as the major accelerant of decolonization: it left Britain, France, and the Netherlands economically drained and militarily overstretched, while also discrediting the idea of racial and imperial hierarchy that had justified colonial rule, and it strengthened nationalist movements that had often gained organizational experience and international attention during the war itself. Independence came in identifiable waves rather than all at once — South and Southeast Asia led in the late 1940s (India and Pakistan in 1947, Indonesia&apos;s independence recognized in 1949), followed by a large wave across Africa concentrated around 1960, and a final wave in the mid-1970s as Portugal, under different domestic political pressure, granted independence to Angola and Mozambique. An important edge case: decolonization was not uniformly peaceful. Some transitions, like Ghana&apos;s in 1957, were achieved through largely negotiated political processes; others, like Algeria&apos;s independence from France (1954-1962), involved prolonged, violent conflict. The United Nations played a formal supporting role throughout, adopting a 1960 declaration calling for an end to colonialism and establishing ongoing mechanisms to monitor the process, per the UN.</div>}
      />
      <FootnoteAside>1960 is often called the &quot;Year of Africa&quot;: 17 African nations gained independence within that single calendar year, more than in any other year before or since, according to the United Nations and Encyclopaedia Britannica.</FootnoteAside>
      <p>
      That single-year cluster is a useful marker for how uneven decolonization really was — some regions saw independence concentrated into a short burst, while others, including India&apos;s own path, followed a longer and distinct trajectory worth examining on its own.
      </p>

      <QuickCheck
        question="Roughly what time span did decolonization span, according to Encyclopaedia Britannica and the United Nations?"
        options={[
          { text: "It happened almost entirely within a single year, right after World War II ended in 1945", correct: false, explanation: "No single year accounts for it — even the most concentrated cluster, the 1960 'Year of Africa,' was 15 years after the war ended, and independence continued well past 1960." },
          { text: "Roughly from the mid-1940s (South Asia) through the mid-1970s (Portugal's African colonies), with some cases later still", correct: true, explanation: "Correct. Decolonization unfolded across roughly three decades in identifiable waves, not as a single simultaneous event." },
          { text: "It began in the 19th century and was essentially complete before World War II started", correct: false, explanation: "This has the timing backwards — the large majority of decolonization happened after World War II, from the mid-1940s onward, not before it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: South Asia&apos;s early wave (baseline case)</h3>
      <div className="prose-p">
      India and Pakistan gained independence from British colonial rule in August 1947, among the earliest major decolonizations after World War II, following decades of organized nationalist movement (covered in depth in the entry on India&apos;s independence movement). Indonesia&apos;s independence from the Netherlands, declared in 1945, was internationally recognized in 1949 after a period of armed and diplomatic conflict. These early cases set a template — organized nationalist movements, weakened colonial powers, and often direct engagement with, or at least awareness of, the new United Nations.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Negotiated transition versus armed conflict (variation / exception)</h3>
      <div className="prose-p">
      Decolonization did not follow one method. Ghana&apos;s independence from Britain in 1957, led by Kwame Nkrumah, followed a largely negotiated political process and made Ghana the first sub-Saharan African colony to gain independence in the postwar wave, per Britannica. By contrast, Algeria&apos;s independence from France came only after the Algerian War (1954-1962), a prolonged and violent conflict. Both outcomes count as decolonization, but the paths to them, and their human cost, were very different.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Decolonization&apos;s lasting institutional footprint (real-world / applied case)</h3>
      <div className="prose-p">
      Decolonization&apos;s effects are still visible in today&apos;s international system: the United Nations grew from 51 founding member states in 1945 to well over 190 today largely because of newly independent states joining, per the UN. The Commonwealth of Nations, made up mostly of former British colonies, and the Non-Aligned Movement, formed in 1961 by newly independent states seeking to avoid Cold War alliances, are both direct organizational legacies of this period, and many present-day border disputes trace back to boundaries originally drawn by colonial administrations rather than by the communities living within them.
      </div>

      <QuickCheck
        question="What is one key difference between Ghana's and Algeria's paths to independence?"
        options={[
          { text: "Ghana's independence involved a prolonged war, while Algeria's was entirely peaceful", correct: false, explanation: "This has the two examples reversed — Ghana's transition in 1957 was largely negotiated, while Algeria's independence in 1962 followed a prolonged, violent war." },
          { text: "Ghana's independence in 1957 followed a largely negotiated political process, while Algeria's independence in 1962 followed a prolonged, violent war (1954-1962)", correct: true, explanation: "Correct. Both are genuine decolonization, but the process, timeline, and human cost differed sharply between the two." },
          { text: "Ghana was a French colony and Algeria was a British colony", correct: false, explanation: "This is reversed — Ghana was a British colony (the Gold Coast) and Algeria was a French colony." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Decolonization: major independence waves, 1945-1975"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-decolonization-movement-timeline.svg"
        altText="Horizontal timeline showing 1945 to 1949 South and Southeast Asian independence including India, Pakistan, and Indonesia, 1957 Ghana's independence as an early sub-Saharan African case, 1960 the Year of Africa with 17 nations gaining independence, 1954 to 1962 the Algerian War of Independence, and 1974 to 1975 the independence of Portugal's African colonies including Angola and Mozambique."
      />
      <p>
      Viewed as a timeline, decolonization reads less like one historical hinge point and more like a sequence of distinct regional waves, each shaped by its own local nationalist movement, colonial power, and, in several cases, armed conflict.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming decolonization happened all at once, right after World War II ended.", fix: "It unfolded in identifiable waves across roughly three decades — South Asia in the late 1940s, a large cluster across Africa around 1960, and Portugal's African colonies as late as 1974-75." },
          { mistake: "Assuming every colony's independence was achieved through similar, largely peaceful negotiation.", fix: "Methods varied enormously — Ghana's 1957 transition was largely negotiated, while Algeria's independence in 1962 followed eight years of armed conflict against France." },
          { mistake: "Assuming colonial-era borders matched existing ethnic, cultural, or political boundaries.", fix: "Many colonial borders were drawn by administrators with little regard for the communities living within them, a factor historians cite in several post-independence conflicts and border disputes that persist today." },
        ]}
      />
      <MisconceptionCallout
        myth="Decolonization was a single wave that happened all at once, right after World War II."
        reality={<p>Encyclopaedia Britannica and the United Nations document decolonization as a staged, multi-decade process. South Asia&apos;s major independences came in the late 1940s; a large cluster of African nations, 17 in a single year, gained independence around 1960 (the &quot;Year of Africa&quot;); and Portugal&apos;s African colonies did not become independent until 1974-75, roughly three decades after the war ended. The methods varied as sharply as the timing — from largely negotiated transitions to prolonged armed conflicts.</p>}
      />

      <QuickCheck
        question="What does the '1960 Year of Africa' refer to?"
        options={[
          { text: "The single year in which every African nation had already achieved independence", correct: false, explanation: "Not every African nation was independent by 1960 — several, including Portugal's colonies, remained under colonial rule until the mid-1970s or later." },
          { text: "A single calendar year, 1960, in which 17 African nations gained independence, more than in any other year", correct: true, explanation: "Correct, per the United Nations and Encyclopaedia Britannica. It's the most concentrated single-year cluster in the broader, multi-decade decolonization process." },
          { text: "The year the United Nations was founded to oversee decolonization", correct: false, explanation: "The United Nations was founded in 1945, 15 years before the 'Year of Africa' — it existed well before this particular wave of independences." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="How many years since the 'Year of Africa' (1960)?"
        fields={[
          { key: "year", label: "Reference year (defaults to 1960, the 'Year of Africa')", defaultValue: 1960 },
        ]}
        resultLabel="Years elapsed to today"
        formula="yearsSinceYear"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a country's independence date, check which decolonization wave it falls into rather than assuming it happened right after World War II.",
          "When a modern border dispute or conflict comes up in the news, consider whether it traces back to a colonial-era boundary rather than an older ethnic or political division.",
          "Notice how many present-day international bodies (the UN's expanded membership, the Commonwealth, the Non-Aligned Movement) are direct organizational legacies of decolonization.",
          "Read the entry on India's Independence Movement for one country's full path through this process, and World War II Overview for how the war set the stage.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is decolonization?", answer: "Decolonization is the process by which territories ruled by foreign colonial powers, mostly European empires, gained political independence and self-government, occurring mainly across Asia, Africa, the Caribbean, and the Pacific between the mid-1940s and mid-1970s." },
          { question: "When did decolonization happen?", answer: "It unfolded in waves: South and Southeast Asia mostly in the late 1940s, a large cluster across Africa concentrated around 1960 (the 'Year of Africa,' when 17 nations gained independence), and Portugal's African colonies as late as 1974-75." },
          { question: "Why did European colonial powers lose their colonies after World War II?", answer: "World War II left major colonial powers like Britain, France, and the Netherlands economically drained and militarily overstretched, while strengthening anti-colonial nationalist movements and shifting international opinion against colonial rule, per Encyclopaedia Britannica." },
          { question: "What is the Year of Africa?", answer: "1960, the year 17 African nations gained independence, more than in any other single year, according to the United Nations and Encyclopaedia Britannica." },
          { question: "Was decolonization always peaceful?", answer: "No. Some transitions, like Ghana's in 1957, were largely negotiated; others, like Algeria's independence from France (1954-1962), followed prolonged and violent armed conflict." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
