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
  title: "Ancient Greece",
  category: "history-timeline-facts",
  order: 5,
  subtopic: "ancient-history",
  tags: ["ancient greece", "athens", "sparta", "democracy", "ancient civilizations"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Ancient Greece was never one country — it was hundreds of independent, often warring city-states, and that fragmentation is exactly what produced Athenian democracy.",
  summary: "Ancient Greece was a collection of independent city-states across the Greek mainland, islands, and coastal settlements from around 800 to 146 BCE, which developed early democracy, foundational Western philosophy, and drama, before being absorbed into the Roman Republic.",
  sources: [
    { label: "The Metropolitan Museum of Art — Ancient Greek Art and Culture", url: "https://www.metmuseum.org/toah/hd/grec/hd_grec.htm" },
    { label: "Encyclopaedia Britannica — Ancient Greek Civilization", url: "https://www.britannica.com/place/ancient-Greece" },
    { label: "UNESCO World Heritage — Acropolis, Athens", url: "https://whc.unesco.org/en/list/404/" },
  ],
  seeAlso: [
    "history-timeline-facts/ancient-rome",
    "history-timeline-facts/the-renaissance",
    "language-vocabulary/root-words-latin-and-greek-origins",
  ],
  glossary: [
    { term: "City-state (polis)", definition: "An independent Greek city and its surrounding territory, governing itself rather than being part of a unified Greek nation." },
    { term: "Democracy", definition: "From Greek dēmokratia (\"rule by the people\") — a system where citizens vote directly or indirectly on laws and leaders, first practiced at scale in ancient Athens." },
    { term: "Philosophy", definition: "From Greek philosophia (\"love of wisdom\") — the systematic study of fundamental questions about knowledge, existence, ethics, and reasoning." },
    { term: "Hellenistic period", definition: "The era after Alexander the Great's conquests (from 323 BCE) when Greek culture spread across and blended with the Near East, Egypt, and Central Asia." },
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
          "\"Ancient Greece\" was never a unified country — it was hundreds of independent city-states (poleis) that shared a language and religion but often fought each other, most famously Athens and Sparta.",
          "Athenian democracy (from around 508 BCE) let male citizens vote directly on laws, but excluded women, enslaved people, and non-citizen residents — a much narrower \"democracy\" than the word implies today.",
          "Alexander the Great's conquests (334–323 BCE) spread Greek culture from Egypt to the edge of India, creating the Hellenistic world that Rome later inherited and built on.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Ancient Greece wasn&apos;t a single country the way we&apos;d picture one today — it was a patchwork of independent <TermLink href="/history-timeline-facts/ancient-greece">city-states</TermLink> (poleis) spread across the Greek mainland, the surrounding islands, and coastal settlements around the Mediterranean and Black Sea. Each city-state, like Athens, Sparta, Corinth, or Thebes, had its own government, laws, and army, even though they shared a language, religion, and Panhellenic festivals like the Olympic Games. This fragmentation is central to understanding Greek history — it&apos;s why Greek city-states fought each other as often as they cooperated against outside threats.</div>}
        detailed={<div className="prose-p">Athens and Sparta represent two very different answers to how a Greek polis could organize itself. Athens developed democracy in stages — Solon&apos;s reforms (594 BCE) eased debt bondage and broadened political participation, and Cleisthenes&apos; reforms (508 BCE) are usually marked as the true founding of Athenian democracy, restructuring citizenship and giving the Assembly of male citizens direct voting power over laws and policy. Sparta, by contrast, was a militarized society built around a professional warrior class, with a rigid social structure that included helots — a subjugated population forced into agricultural labor for Spartan citizens — and a mixed government of two kings, a council of elders, and an assembly with limited power. These two very different systems fought together against Persia (the Greco-Persian Wars, 499–449 BCE) and later against each other (the Peloponnesian War, 431–404 BCE, which Sparta ultimately won) — a reminder that &quot;ancient Greece&quot; contained genuinely opposed political philosophies, not one unified Greek way of life.</div>}
      />
      <FootnoteAside>Athenian democracy excluded roughly 80–90% of the population from voting — women, enslaved people (who made up a large share of Athens&apos;s population), and resident foreigners (metics) had no political voice, leaving political participation to a minority of adult male citizens.</FootnoteAside>
      <p>
      That gap between the ideal of Greek democracy and who it actually included matters for understanding how directly — and how imperfectly — it connects to democratic systems today.
      </p>

      <QuickCheck
        question="Who was allowed to vote in ancient Athenian democracy?"
        options={[
          { text: "All adult residents of Athens, regardless of gender or status", correct: false, explanation: "Athenian democracy was far narrower than that — most residents were excluded entirely." },
          { text: "Only adult male citizens — women, enslaved people, and foreign residents (metics) were excluded", correct: true, explanation: "Correct. Athenian democracy is genuinely historically significant as an early large-scale experiment in citizen self-governance, but it excluded the majority of people actually living in Athens from political participation." },
          { text: "Only wealthy landowners, regardless of gender", correct: false, explanation: "Wealth restrictions on political office existed at various points, but the core exclusion was based on citizenship status and gender, not wealth alone — many male citizens across income levels could vote in the Assembly." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Case studies</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 1: The Battle of Marathon and the Greco-Persian Wars (baseline case)</h3>
      <div className="prose-p">
      In 490 BCE, a heavily outnumbered Athenian army defeated an invading Persian force at Marathon, a victory that became foundational to Athenian identity and, centuries later, gave its name to the 26.2-mile running race (based on the legendary — and likely embellished — story of a runner carrying news of the victory back to Athens). The wider Greco-Persian Wars (499–449 BCE) saw Greek city-states, usually rivals, temporarily unite against the much larger Persian Empire, and their success is often cited by historians as a pivotal moment that let distinctly Greek political and cultural development continue rather than being absorbed into Persian rule.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 2: The Peloponnesian War — Greeks against Greeks (variation / turning point)</h3>
      <div className="prose-p">
      Just decades after uniting against Persia, Athens and Sparta led rival alliances into a grinding 27-year war (431–404 BCE) that ended with Sparta&apos;s victory and Athens&apos;s political and military decline. The historian Thucydides, who lived through it, wrote an account of the war that&apos;s still studied today as one of the founding texts of the study of history and international relations — not myth or legend, but a deliberately evidence-based, analytical account of real events, itself a genuinely new kind of writing at the time.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 3: How Greek philosophy still structures Western thought (real-world / applied case)</h3>
      <div className="prose-p">
      Socrates (c. 470–399 BCE), Plato, and Aristotle, working in and around Athens across roughly a century, established methods of questioning, logic, and systematic inquiry that still underpin Western philosophy, science, and education. The &quot;Socratic method&quot; — teaching through structured questioning rather than lecturing — is still used in law schools and classrooms today, and Aristotle&apos;s work on logic and biological classification shaped scientific method for nearly two thousand years afterward.
      </div>

      <QuickCheck
        question="How did the Greco-Persian Wars and the Peloponnesian War differ?"
        options={[
          { text: "Both wars were fought entirely between Athens and Sparta", correct: false, explanation: "Only the Peloponnesian War was Athens against Sparta — the Greco-Persian Wars saw Greek city-states, including both Athens and Sparta, fighting together against the outside Persian Empire." },
          { text: "The Greco-Persian Wars united rival Greek city-states against Persia; the Peloponnesian War was Greek city-states, led by Athens and Sparta, fighting each other", correct: true, explanation: "Correct. The Greco-Persian Wars (499-449 BCE) were Greeks vs. an outside empire; the Peloponnesian War (431-404 BCE), just decades later, was Greeks vs. Greeks, ending in Sparta's victory and Athens's decline." },
          { text: "The Peloponnesian War happened first, followed by the Greco-Persian Wars", correct: false, explanation: "The order is reversed — the Greco-Persian Wars came first (499-449 BCE), and the Peloponnesian War followed decades later (431-404 BCE)." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Ancient Greece: key periods, from early city-states to Roman conquest"
        type="flow"
        svgSrc="/diagrams/04-ancient-greece-periods-timeline.svg"
        altText="Horizontal timeline showing the Archaic period from around 800 BCE when Greek city-states formed, the Classical period from about 500 to 323 BCE including the Greco-Persian Wars, Athenian democracy, and the Peloponnesian War, the Hellenistic period from 323 BCE following Alexander the Great's conquests, ending with Roman conquest of Greece completed by 146 BCE."
      />
      <p>
      Alexander the Great&apos;s conquests mark the hinge point: before 323 BCE, Greek culture was mostly confined to the Mediterranean and Aegean world; after it, Greek language, art, and ideas spread as far as modern-day Afghanistan and Pakistan, laying groundwork Rome would later absorb wholesale.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating \"ancient Greece\" as one unified nation with one government.", fix: "It was a collection of fiercely independent city-states that frequently fought each other — unity, when it happened, was usually temporary and driven by an outside threat like Persia." },
          { mistake: "Assuming Athenian democracy resembled modern democracy in who could participate.", fix: "It excluded women, enslaved people, and foreign residents — roughly 80-90% of the population — a crucial caveat when calling it \"the birthplace of democracy.\"" },
          { mistake: "Confusing the timeline of Socrates, Plato, and Aristotle as simultaneous rather than sequential.", fix: "They form a direct teacher-student chain across about a century: Socrates taught Plato, and Plato taught Aristotle, who later tutored Alexander the Great — not three contemporaries working independently." },
        ]}
      />
      <MisconceptionCallout
        myth="Ancient Greek statues and temples were plain white marble, reflecting a refined, minimalist aesthetic."
        reality={<p>Ancient Greek statues and buildings were originally painted in bright, often bold colors — the plain white appearance familiar today is the result of pigment fading and eroding away over more than two thousand years, not the original intended look. Archaeological analysis (including ultraviolet imaging that detects trace pigment) has confirmed vivid original color schemes on surviving sculptures.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a \"pure white\" Greek statue in a museum, remember it was likely originally brightly painted.",
          "When you hear \"ancient Greek democracy\" praised uncritically, mentally add the caveat about who was actually excluded from voting.",
          "Trace the Socrates → Plato → Aristotle teaching chain next time one of them comes up — it makes their ideas easier to place in order.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Was ancient Greece one country?", answer: "No — it was a collection of independent city-states (poleis) like Athens, Sparta, Corinth, and Thebes, which shared language, religion, and culture but governed themselves separately and often fought each other." },
          { question: "Who could vote in ancient Athens?", answer: "Only adult male Athenian citizens — an estimated 10-20% of the total population. Women, enslaved people, and metics (free foreign residents) were excluded from voting entirely." },
          { question: "Did Athens and Sparta always fight each other?", answer: "No — they fought together as allies against the Persian Empire during the Greco-Persian Wars (499-449 BCE), then later fought each other directly in the Peloponnesian War (431-404 BCE), which Sparta won." },
          { question: "What is the difference between the Classical and Hellenistic periods of Greek history?", answer: "The Classical period (roughly 500-323 BCE) covers city-state Greece, including Athenian democracy and the major Athens-Sparta wars. The Hellenistic period begins after Alexander the Great's death in 323 BCE, when Greek culture spread across and blended with the wider Near East, Egypt, and Central Asia." },
          { question: "How did ancient Greece end?", answer: "There's no single end date — Greek city-states gradually came under Macedonian, then Roman control, with the Roman conquest of mainland Greece generally dated to 146 BCE, though Greek language and culture continued to thrive and heavily influence the Roman world afterward rather than disappearing." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

    </>
  );
}
