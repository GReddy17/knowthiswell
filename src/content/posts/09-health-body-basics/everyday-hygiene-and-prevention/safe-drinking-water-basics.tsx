import React from 'react';
import { PostFrontmatter } from '@/types/post';
import {
  KeyTakeaways,
  ModeToggle,
  FootnoteAside,
  QuickCheck,
  DiagramBlock,
  MistakeList,
  MisconceptionCallout,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Safe Drinking Water Basics",
  category: "health-body-basics",
  order: 7,
  subtopic: "everyday-hygiene-and-prevention",
  tags: ["water safety", "water treatment", "boil water advisory", "waterborne illness", "public health"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Municipal water treatment removes pathogens through a multi-step process — but a boil water advisory means that process has been compromised, not that boiling is an everyday extra precaution.",
  summary: "Safe drinking water depends on a multi-step treatment process (filtration, disinfection) that removes or inactivates pathogens and reduces contaminants before water reaches a tap, and understanding when that process can be disrupted — after main breaks, floods, or system failures — explains why boil water advisories exist and what they actually require.",
  sources: [
    { label: "CDC — Drinking Water", url: "https://www.cdc.gov/healthywater/drinking/index.html" },
    { label: "EPA — Ground Water and Drinking Water", url: "https://www.epa.gov/ground-water-and-drinking-water" },
    { label: "WHO — Drinking-water", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" },
  ],
  seeAlso: [
    "health-body-basics/food-hygiene-and-safe-storage-basics",
    "health-body-basics/understanding-daily-hydration-needs",
  ],
  glossary: [
    {"term":"Water treatment","definition":"The multi-step municipal process — typically including filtration and disinfection (commonly chlorination) — that removes particles and inactivates pathogens before water is distributed to taps."},
    {"term":"Boil water advisory","definition":"An official notice issued when water treatment or distribution has been compromised (main break, contamination, system failure), instructing residents to boil tap water before consumption until the issue is resolved and testing confirms safety."},
    {"term":"Waterborne pathogen","definition":"A disease-causing organism (bacteria, virus, or parasite) that can be transmitted through contaminated water, some of which are resistant to standard chlorination and require additional treatment barriers."},
  ],
  author: {
    slug: "james-h-rivers",
    name: "James H. Rivers",
    credentialLine: "Founder, KnowThisWell",
  },
  youtubeStatus: "not-started",
  youtubeUrl: "",
  draft: false,
};

export default function Post() {
  return (
    <>
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
      <strong>This entry is general water-safety information, not medical advice.</strong> For guidance during an active local water emergency, follow your specific local water authority&apos;s official instructions.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "Municipal water treatment is a multi-step process — filtration removes particles, disinfection (commonly chlorination) inactivates pathogens — designed to make tap water safe without needing extra treatment at home under normal conditions.",
      "A boil water advisory means that treatment or distribution process has been disrupted (a water main break, contamination event, or system failure) — it's a signal of a compromised system, not a routine extra-caution recommendation.",
      "Not all waterborne pathogens are equally affected by standard chlorination — some parasites are notably chlorine-resistant, which is why filtration is a separate, necessary treatment barrier, not a redundant one.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Tap water in a functioning municipal system goes through <TermLink href="/health-body-basics/safe-drinking-water-basics">water treatment</TermLink> — filtering out particles, then disinfecting to kill or inactivate pathogens — before it reaches your tap. Under normal conditions, this makes it safe to drink without additional treatment. A <TermLink href="/health-body-basics/safe-drinking-water-basics">boil water advisory</TermLink> is issued specifically when something has gone wrong with that process.</div>}
      detailed={<div className="prose-p">Standard treatment typically layers multiple barriers because no single step reliably handles every kind of contaminant: filtration physically removes particles and some pathogens, while disinfection (commonly chlorination) inactivates most remaining bacteria and viruses. However, some parasitic <TermLink href="/health-body-basics/safe-drinking-water-basics">waterborne pathogens</TermLink> — notably certain protozoa — are markedly resistant to standard chlorine levels, which is why filtration (or additional treatment methods) remains a necessary, separate barrier rather than a redundant backup to disinfection. A boil water advisory is issued when a specific event (a water main break introducing outside contamination, a treatment plant malfunction, or a natural disaster disrupting the system) compromises one or more of these normal barriers, and boiling water at a rolling boil for the recommended time is a reliable, low-tech way to inactivate a broad range of pathogens as a temporary measure until the system is confirmed restored.</div>}
      />
      <FootnoteAside>Boil water advisories typically specify bringing water to a rolling boil for about one minute (longer at high altitude, where water boils at a lower temperature) — a specific enough instruction that &quot;just heating water&quot; isn&apos;t automatically equivalent to what the advisory actually requires.</FootnoteAside>

      <p>
      Understanding treatment as a system of layered, specific barriers explains why a disruption to any one layer (not just visible contamination) is enough to trigger a boil water advisory.
      </p>

      <QuickCheck
      question="A water main breaks near a residential area, and the local water authority issues a boil water advisory even though the tap water still looks clear. Why would an advisory be issued despite no visible change in the water?"
      options={[
      { text: "Advisories are issued purely as an overcautious formality with no real underlying risk", correct: false, explanation: "A main break creates a real, specific risk pathway — pressure loss during a break can allow outside contaminants to enter the pipe system — even when the water remains visually clear, since many waterborne pathogens don't visibly change water's appearance." },
      { text: "A main break can cause a pressure drop that allows outside contaminants to enter the water distribution system, creating a real contamination risk invisible to the naked eye, regardless of how the water looks", correct: true, explanation: "Correct. Pathogen contamination generally doesn't change water's visible clarity, which is exactly why the advisory is based on the mechanical event (the break) rather than a visible water-quality change." },
      { text: "The advisory is only about taste, not actual safety", correct: false, explanation: "Boil water advisories address a genuine pathogen contamination risk from the disrupted treatment/distribution system, not a taste or aesthetic concern." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Normal tap water under a functioning system (baseline case)</h3>
      <div className="prose-p">
      In a municipal system operating normally, water that has passed through filtration and disinfection and meets regulatory quality standards is safe to drink directly from the tap — no home boiling or additional treatment is needed under these standard conditions, which is the default state most of the time.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Responding correctly to an active boil water advisory (edge case / variation)</h3>
      <div className="prose-p">
      During an active advisory, water intended for drinking, cooking, making ice, or brushing teeth should be brought to a rolling boil for the locally specified time before use, while water for handwashing or bathing (where accidental swallowing is minimal) is generally treated with less strict guidance by local authorities — the specific local advisory&apos;s instructions, not a generic assumption, determine exactly which uses require boiling.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Private well water, which isn&apos;t covered by municipal treatment at all (real-world / applied case)</h3>
      <div className="prose-p">
      Unlike municipal tap water, private wells aren&apos;t subject to the same centralized treatment and regular testing — well owners are generally responsible for their own periodic water testing and treatment decisions. This is a structurally different situation from municipal boil water advisories, since there&apos;s no municipal system issuing an alert; regular independent testing is the well owner&apos;s own responsibility, per EPA private-well guidance.
      </div>

      <QuickCheck
      question="Why can't private well owners rely on a municipal-style boil water advisory system to know if their water needs treatment?"
      options={[
      { text: "Private wells are automatically covered by the same municipal treatment and monitoring system as public tap water", correct: false, explanation: "Private wells are not part of the municipal treatment and monitoring system — they're a separate, individually owned water source without centralized testing or an advisory-issuing authority." },
      { text: "Private wells fall outside municipal treatment and monitoring, so there's no centralized authority testing the water or issuing advisories — regular independent testing is the well owner's own responsibility", correct: true, explanation: "Correct. This structural difference is exactly why EPA guidance directs private well owners to arrange their own periodic water testing rather than expecting a municipal-style advisory system to alert them." },
      { text: "Private well water is always safer than municipal tap water and doesn't need any testing at all", correct: false, explanation: "Private well water isn't automatically safer — it simply lacks the centralized treatment and monitoring municipal systems have, which is exactly why independent testing matters for wells specifically." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Layered municipal water treatment barriers"
      type="flow"
      svgSrc="/diagrams/health-body-basics-safe-drinking-water-basics-treatment-barriers.svg"
      altText="A flow diagram showing raw source water passing through sequential treatment stages: filtration removing particles and some pathogens, then disinfection such as chlorination inactivating most remaining bacteria and viruses, arriving at safe distributed tap water, with a side note that a disruption at any stage can trigger a boil water advisory."
      />
      <p>
      Each stage targets a different category of contaminant, which is exactly why a disruption to any single stage — not just visible contamination — is enough to compromise overall safety.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming clear-looking water is automatically safe during an active boil water advisory.", fix: "Follow the specific advisory instructions regardless of appearance — most waterborne contamination doesn't visibly change water's clarity." },
      { mistake: "Treating 'boiling' loosely instead of following the specific advisory instructions (rolling boil, specific duration).", fix: "Bring water to a full rolling boil for the locally specified duration — a light simmer or brief heating isn't equivalent." },
      { mistake: "Assuming private well water is automatically safe without independent testing.", fix: "Arrange regular, independent well water testing, since private wells aren't covered by municipal treatment or monitoring." },
      ]}
      />
      <MisconceptionCallout
      myth="If tap water looks and tastes normal, it's definitely safe, and a boil water advisory is just an overly cautious formality."
      reality={<p>Most waterborne pathogens don&apos;t noticeably change water&apos;s appearance or taste, so visual/taste inspection isn&apos;t a reliable safety check. A boil water advisory is issued in response to a specific identified disruption to the treatment or distribution system — a water main break, contamination event, or system failure — representing a real, specific risk pathway rather than a routine extra-caution measure.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "During an active boil water advisory, follow your local water authority's specific instructions for which water uses require boiling.",
      "Bring water to a full rolling boil for the specified duration, not just a light warming, when an advisory requires it.",
      "If you rely on a private well, arrange regular independent water testing rather than assuming safety without checking.",
      "Sign up for local water utility alerts if available, so you're notified promptly of any advisory in your area.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What does a boil water advisory actually mean?", answer: "It means water treatment or distribution has been disrupted (a main break, contamination event, or system failure), and tap water should be brought to a rolling boil for a specified time before use in drinking, cooking, or similar purposes until the system is confirmed restored." },
      { question: "Is tap water safe to drink under normal conditions?", answer: "In a functioning municipal system meeting regulatory standards, yes — treatment (filtration plus disinfection) is designed to make water safe directly from the tap without additional home treatment under normal conditions." },
      { question: "How long should you boil water during an advisory?", answer: "Follow your local advisory's specific instructions — generally a rolling boil for about one minute, longer at high altitude, since water boils at a lower temperature there." },
      { question: "Do private wells need to follow boil water advisories?", answer: "Private wells aren't part of the municipal system an advisory covers — well owners are responsible for their own independent water testing and treatment decisions, per EPA guidance." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
