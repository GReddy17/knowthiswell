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
  title: "Ancient Rome",
  category: "history-timeline-facts",
  order: 6,
  subtopic: "ancient-history",
  tags: ["ancient rome", "roman empire", "roman republic", "julius caesar", "ancient civilizations"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Rome spent almost 500 years as a republic before it became an empire — the switch happened because the republic's own system couldn't survive its success.",
  summary: "Ancient Rome grew from a small city-state around 753 BCE into a Republic (509 BCE–27 BCE) and then an Empire that at its height controlled territory from Britain to Egypt, leaving a lasting mark on law, language, architecture, and government still visible today.",
  sources: [
    { label: "The Metropolitan Museum of Art — Ancient Roman Art", url: "https://www.metmuseum.org/toah/hd/rome/hd_rome.htm" },
    { label: "Encyclopaedia Britannica — Ancient Rome", url: "https://www.britannica.com/place/ancient-Rome" },
    { label: "UNESCO World Heritage — Historic Centre of Rome", url: "https://whc.unesco.org/en/list/91/" },
  ],
  seeAlso: [
    "history-timeline-facts/ancient-greece",
    "history-timeline-facts/the-renaissance",
    "language-vocabulary/root-words-latin-and-greek-origins",
  ],
  glossary: [
    { term: "Roman Republic", definition: "The period (509-27 BCE) when Rome was governed by elected officials and the Senate rather than a king or emperor." },
    { term: "Roman Empire", definition: "The period (27 BCE onward) when Rome was ruled by a single emperor, beginning with Augustus." },
    { term: "Senate", definition: "The council of Rome's most powerful and experienced citizens, which advised on and heavily influenced policy throughout both the Republic and Empire." },
    { term: "Pax Romana", definition: "Latin for \"Roman Peace\" — the roughly 200-year period (27 BCE-180 CE) of relative stability and prosperity across the Roman Empire." },
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
          "Rome was a Republic — governed by elected officials, not a king — for almost 500 years (509-27 BCE) before becoming an Empire ruled by a single emperor.",
          "The switch from Republic to Empire wasn't a foreign conquest — it grew out of the Republic's own internal political breakdown, civil wars, and the rise of powerful individual generals like Julius Caesar.",
          "At its height under the Pax Romana (27 BCE-180 CE), Rome controlled roughly 5 million square kilometers, stretching from Britain to Egypt to the Persian Gulf.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Rome began as a small city in central Italy, traditionally founded in 753 BCE, and eventually grew to control an empire spanning three continents. For most of its early history, Rome wasn&apos;t ruled by an emperor — it was a <TermLink href="/history-timeline-facts/ancient-rome">Republic</TermLink>, governed by elected officials and a <TermLink href="/history-timeline-facts/ancient-rome">Senate</TermLink> of influential citizens, with power deliberately spread out to prevent any one person from becoming a king again (Rome&apos;s founding myth includes throwing out its last king in 509 BCE). That system lasted almost 500 years before breaking down into civil war and, eventually, one-man rule under an emperor.</div>}
        detailed={<div className="prose-p">The Republic&apos;s collapse wasn&apos;t sudden — it was the result of decades of growing inequality, political violence, and powerful generals whose armies were more loyal to them personally than to the Roman state. Julius Caesar&apos;s crossing of the Rubicon River in 49 BCE, technically an act of civil war against the Senate, and his subsequent rise to dictator, was the clearest sign the old system had broken. His assassination in 44 BCE (by senators who believed they were saving the Republic) didn&apos;t restore it — it triggered more civil war, which his adopted heir Octavian eventually won, taking the name Augustus and becoming Rome&apos;s first emperor in 27 BCE while carefully preserving Republican institutions like the Senate in name, even as real power now sat with him alone. The lesson historians often draw: a political system built to prevent tyranny can still produce it, if the underlying inequalities and incentives push hard enough in that direction.</div>}
      />
      <FootnoteAside>&quot;Crossing the Rubicon&quot; is still used today to mean passing a point of no return — it refers to Julius Caesar leading his army across a small river marking the boundary of Italy in 49 BCE, an act that was illegal under Roman law and made civil war inevitable.</FootnoteAside>
      <p>
      That collapse from Republic to Empire is Rome&apos;s central political story — but it&apos;s worth separating from the other reason Rome still matters: what actually got built, governed, and passed down during the roughly thousand years the Roman state, in one form or another, controlled the Mediterranean world.
      </p>

      <QuickCheck
        question="What caused the Roman Republic to become the Roman Empire?"
        options={[
          { text: "Rome was conquered by an outside foreign power that installed an emperor", correct: false, explanation: "The change came from within — it wasn't a foreign conquest, but internal political breakdown." },
          { text: "Decades of internal political inequality, violence, and powerful generals led to civil war, ending with Augustus becoming the first emperor in 27 BCE", correct: true, explanation: "Correct. The Republic collapsed under its own internal pressures — Julius Caesar's rise and assassination, followed by further civil war that his heir Augustus won, ending nearly 500 years of Republican government." },
          { text: "The Roman Senate voted to formally abolish the Republic and create an empire", correct: false, explanation: "There was no clean formal vote — Augustus took power through the outcome of civil war while carefully preserving the appearance of Republican institutions like the Senate." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Case studies</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 1: Roman roads and engineering (baseline case)</h3>
      <div className="prose-p">
      At its peak, the Roman road network covered an estimated 400,000 kilometers, built with multiple layers of graded stone and drainage that let many sections survive intact for over two thousand years — parts of the Appian Way, begun in 312 BCE, are still walkable today. Roman concrete, using volcanic ash, proved so durable that structures like the Pantheon&apos;s dome (completed around 128 CE) remain the largest unreinforced concrete dome in the world, and modern researchers have studied Roman concrete specifically because some formulations appear to have gotten stronger, not weaker, from prolonged seawater exposure.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 2: Roman law and governance across a diverse empire (variation / exception)</h3>
      <div className="prose-p">
      Rome governed an enormously diverse population — Egyptians, Greeks, Gauls, Britons, and many others — not by imposing uniform culture everywhere, but through a flexible system of citizenship, local self-governance under Roman oversight, and a body of law (eventually codified centuries later in the Byzantine Emperor Justinian&apos;s Corpus Juris Civilis, 529–534 CE) that became the foundation for legal systems across much of continental Europe and Latin America today, known as civil law. Roman citizenship itself expanded gradually — the Edict of Caracalla in 212 CE extended citizenship to nearly all free inhabitants of the Empire, a striking example of a Roman institution deliberately broadening rather than narrowing over time.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 3: Latin&apos;s afterlife in modern language and government (real-world / applied case)</h3>
      <div className="prose-p">
      Latin, Rome&apos;s language, evolved directly into the Romance languages — Spanish, French, Italian, Portuguese, and Romanian — and supplied roughly 60% of English vocabulary, mostly through French after the Norman Conquest and through direct scholarly borrowing. Terms like &quot;senate,&quot; &quot;republic,&quot; &quot;committee,&quot; and &quot;veto&quot; (Latin for &quot;I forbid&quot;) come straight from Roman political vocabulary, and the basic idea of a republic with elected representatives and a written constitution, revived explicitly by Renaissance and Enlightenment thinkers who studied Roman history, directly shaped the design of modern governments, including the framers of the U.S. Constitution.
      </div>

      <QuickCheck
        question="Why is Roman concrete of particular interest to modern engineers?"
        options={[
          { text: "It was cheaper to produce than any modern concrete", correct: false, explanation: "Cost isn't the point of modern interest — durability is." },
          { text: "Some formulations, especially in marine structures, appear to have gotten stronger over centuries of seawater exposure rather than degrading", correct: true, explanation: "Correct. Researchers studying ancient Roman harbor structures found that certain volcanic-ash-based concrete formulations actually gained strength from long-term seawater exposure — a durability property modern concrete generally lacks, and one engineers are actively studying to replicate." },
          { text: "It was the first concrete ever invented, predating all other ancient uses", correct: false, explanation: "Rome didn't invent concrete from nothing, but its specific volcanic-ash formulation and large-scale engineering use (like the Pantheon's dome) were genuinely advanced for the time — the durability finding is the specific point of modern interest." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Rome: from city-state to Republic to Empire, 753 BCE - 476 CE"
        type="flow"
        svgSrc="/diagrams/04-ancient-rome-republic-to-empire-timeline.svg"
        altText="Horizontal timeline showing Rome's traditional founding in 753 BCE, the start of the Roman Republic in 509 BCE after the last king was overthrown, Julius Caesar's crossing of the Rubicon in 49 BCE and assassination in 44 BCE, Augustus becoming the first emperor in 27 BCE marking the start of the Roman Empire, the Pax Romana period of stability from 27 BCE to 180 CE, and the fall of the Western Roman Empire in 476 CE, while the Eastern Roman (Byzantine) Empire continued for another thousand years."
      />
      <p>
      Notice the Republic (roughly 480 years) lasted almost as long as the Western Empire that followed it (roughly 500 years, but with serious decline setting in from the 3rd century CE onward) — Rome&apos;s &quot;republic&quot; phase isn&apos;t a short prelude to &quot;the real Rome,&quot; it&apos;s a comparably long and formative era in its own right.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming \"ancient Rome\" always means the Empire with emperors like Julius Caesar or Augustus.", fix: "Julius Caesar was never actually an emperor — he was a dictator under the Republic, assassinated before the Empire began. Augustus, his heir, was the first true emperor, starting in 27 BCE." },
          { mistake: "Thinking the Roman Empire ended in 476 CE for the whole Roman world.", fix: "476 CE marks the fall of the WESTERN Roman Empire only — the Eastern Roman Empire, known as the Byzantine Empire, continued for almost another thousand years, until 1453 CE." },
          { mistake: "Picturing Roman gladiatorial games and emperors as representative of daily Roman life.", fix: "Most Romans were farmers, laborers, or tradespeople whose daily lives centered on work, family, and local religious practice — the spectacle of the Colosseum was real but not typical of ordinary experience." },
        ]}
      />
      <MisconceptionCallout
        myth="Julius Caesar was a Roman emperor."
        reality={<p>Julius Caesar was never emperor — he held the Republican title of dictator (a legal, temporary emergency office that he extended to hold indefinitely), and was assassinated in 44 BCE, 17 years before the Roman Empire technically began. His adopted heir Octavian, later called Augustus, became Rome&apos;s actual first emperor in 27 BCE. Caesar&apos;s career is central to why the Republic collapsed, but he died before the Empire he helped make possible actually existed.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time \"Julius Caesar, Roman Emperor\" comes up, you'll know to correct it — he was a Republican dictator, never emperor.",
          "Notice how many English legal and political words — senate, committee, veto, republic — are unmodified or lightly modified Latin.",
          "If you visit or see photos of a Roman aqueduct or road, remember it may genuinely be original construction, not a modern reconstruction — Roman engineering was built to last, and often did.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Was Julius Caesar a Roman emperor?", answer: "No. Julius Caesar held the Republican office of dictator and was assassinated in 44 BCE, 17 years before the Roman Empire began in 27 BCE under his heir Augustus, who became Rome's first actual emperor." },
          { question: "How long did the Roman Empire last?", answer: "The Western Roman Empire lasted from 27 BCE to 476 CE, about 500 years. The Eastern Roman Empire, known as the Byzantine Empire, continued from the same starting institutions until 1453 CE, when Constantinople fell to the Ottoman Empire — nearly 1,500 years total from the start of imperial rule." },
          { question: "What is the difference between the Roman Republic and the Roman Empire?", answer: "The Republic (509-27 BCE) was governed by elected officials and the Senate, with power deliberately spread out. The Empire (from 27 BCE) was ruled by a single emperor, though the Senate continued to exist in a much less powerful advisory role." },
          { question: "How big was the Roman Empire at its largest?", answer: "At its peak under Emperor Trajan around 117 CE, the Roman Empire covered roughly 5 million square kilometers and included an estimated 50-90 million people, stretching from Britain in the northwest to Egypt and the Persian Gulf in the southeast." },
          { question: "Why did the Western Roman Empire fall?", answer: "Historians point to a combination of factors rather than one single cause: repeated invasions by various groups, economic strain, political instability with frequent changes of emperor, and the sheer difficulty of governing and defending such a vast territory — the last Western Roman emperor was deposed in 476 CE." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
