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
  title: "The Scientific Revolution",
  category: "history-timeline-facts",
  order: 21,
  subtopic: "revolutions-and-modern-foundations",
  tags: ["scientific revolution", "copernicus", "galileo", "isaac newton", "heliocentrism", "history of science", "european history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The Scientific Revolution (roughly 1543 to 1687) replaced Earth-centered astronomy with evidence-based inquiry — and it leaned heavily on earlier non-European scholarship.",
  summary: "The Scientific Revolution was a period of roughly 1543 to 1687 during which European thinkers overturned the ancient geocentric model of the universe and developed systematic, evidence-based methods of studying the natural world, laying the foundation for modern science.",
  sources: [
    { label: "Encyclopaedia Britannica — Scientific Revolution", url: "https://www.britannica.com/science/Scientific-Revolution" },
    { label: "The Royal Society — History of the Royal Society", url: "https://royalsociety.org/about-us/history/" },
    { label: "Museo Galileo, Florence — Institute and Museum of the History of Science", url: "https://www.museogalileo.it/en/" },
  ],
  seeAlso: [
    "history-timeline-facts/the-renaissance",
    "history-timeline-facts/the-industrial-revolution",
    "history-timeline-facts/the-american-revolution",
  ],
  glossary: [
    { term: "Heliocentrism", definition: "The model of the solar system in which Earth and the other planets orbit the Sun, replacing the earlier Earth-centered (geocentric) model." },
    { term: "Empiricism", definition: "The idea that reliable knowledge comes from direct observation and experiment, not just logical reasoning or accepted authority." },
    { term: "Scientific method", definition: "A systematic approach to inquiry involving observation, hypothesis, controlled experiment, and revision of ideas based on evidence." },
    { term: "Geocentric model", definition: "The ancient and medieval view, associated with Ptolemy, that Earth sits motionless at the center of the universe while the Sun, Moon, and planets orbit around it." },
    { term: "Peer review", definition: "A process, formalized by early scientific societies, in which experts evaluate research before it is accepted and published." },
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
          "The Scientific Revolution, roughly 1543 to 1687, replaced the ancient Earth-centered (geocentric) model of the universe with the Sun-centered (heliocentric) model, and replaced appeals to authority with observation and experiment.",
          "It was not a purely European invention out of nowhere — it drew directly on centuries of astronomy, optics, and mathematics developed and preserved by Islamic Golden Age scholars, alongside ancient Greek and medieval European scholarship.",
          "Key milestones bookend the era: Nicolaus Copernicus's heliocentric model, published in 1543, and Isaac Newton's Principia Mathematica, published in 1687, which unified physics and astronomy under one set of mathematical laws.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/history-timeline-facts/the-scientific-revolution">Scientific Revolution</TermLink> was a period, roughly the mid-1500s through the late 1600s, when European thinkers overturned centuries-old ideas about how the universe worked and replaced them with conclusions based on careful observation, measurement, and experiment. It started with astronomy — Nicolaus Copernicus argued in 1543 that Earth orbits the Sun, not the other way around, contradicting both everyday appearances and centuries of accepted authority. Galileo Galilei used a telescope to gather direct evidence supporting that model, and Isaac Newton eventually showed that the same mathematical laws govern falling apples and orbiting planets. The core shift wasn&apos;t just new facts — it was a new standard for what counted as proof.</div>}
        detailed={<div className="prose-p">The Scientific Revolution unfolded through a specific chain of evidence and pushback. Copernicus&apos;s heliocentric model (De revolutionibus orbium coelestium, 1543) was mathematically elegant but lacked direct observational proof at first. Johannes Kepler refined it by showing planetary orbits are ellipses, not perfect circles, fitting observational data far more precisely than earlier models. Galileo&apos;s telescopic observations from 1609–1610 — Jupiter&apos;s moons, the phases of Venus, mountains on Earth&apos;s Moon — supplied strong observational support, but this directly conflicted with Church-endorsed Aristotelian and Ptolemaic geocentrism, leading to his trial and house arrest by the Roman Inquisition in 1633. Meanwhile, Francis Bacon argued for structured, inductive <TermLink href="/history-timeline-facts/the-scientific-revolution">empiricism</TermLink> — building general conclusions carefully from repeated, controlled observation — while René Descartes pushed a more rationalist, deduction-first approach; both strands still coexist inside the modern <TermLink href="/history-timeline-facts/the-scientific-revolution">scientific method</TermLink>. None of this happened in a vacuum: European astronomers built directly on centuries of Islamic Golden Age scholarship — mathematicians and astronomers such as Ibn al-Haytham (whose work on optics shaped later European understanding of vision and light) and the Maragha school of astronomers (whose geometric techniques, including what modern historians call the &quot;Tusi couple,&quot; closely resemble tools Copernicus later used) — as well as earlier Greek astronomy that Islamic scholars had preserved, translated, and substantially extended for hundreds of years before it reached Renaissance and early modern Europe.</div>}
      />
      <FootnoteAside>Isaac Newton and German mathematician Gottfried Leibniz independently developed calculus at roughly the same time in the late 1600s, and spent much of the rest of their lives locked in a bitter, nationalistic dispute over who deserved credit — a feud the Royal Society (with Newton as its president) formally, and rather unfairly, ruled in Newton&apos;s favor in 1712. Most historians today credit both as independent discoverers.</FootnoteAside>
      <p>
      That rivalry is a reminder that the Scientific Revolution wasn&apos;t a tidy, cooperative march toward truth — it was full of genuine disputes, competing methods, and scholars building on work that didn&apos;t always originate where the popular story suggests.
      </p>

      <QuickCheck
        question="What role did earlier non-European scholarship play in the Scientific Revolution?"
        options={[
          { text: "None — European astronomers of the 1500s and 1600s developed their ideas entirely independently", correct: false, explanation: "This is a common misconception. European astronomers built directly on centuries of astronomical and mathematical work developed and preserved by Islamic Golden Age scholars." },
          { text: "Islamic Golden Age scholars developed astronomical and mathematical tools, and preserved and extended Greek scholarship, that European scientists like Copernicus later built on", correct: true, explanation: "Correct. Techniques developed by astronomers like those of the Maragha school closely resemble methods Copernicus used, and centuries of Islamic Golden Age preservation and expansion of Greek astronomy fed directly into European scholarship." },
          { text: "Only ancient Greek scholarship mattered — Islamic Golden Age scholars had no connection to European astronomy", correct: false, explanation: "Islamic Golden Age scholars didn't just preserve Greek texts passively — they actively developed new mathematical and observational techniques that later influenced European astronomers directly." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Copernicus replaces the Earth-centered model (baseline case)</h3>
      <div className="prose-p">
      For over a thousand years, most European (and earlier Greek) astronomy followed the Ptolemaic geocentric model, with Earth motionless at the center and everything else orbiting around it. Copernicus proposed instead that Earth and the other planets orbit the Sun, publishing his full argument in 1543, the year of his death. His model wasn&apos;t immediately provable with the instruments of the time and actually made astronomical predictions only modestly more accurate than the existing geocentric system — its real power came later, once Kepler corrected the orbits to ellipses and Galileo supplied direct telescopic evidence, turning a mathematically elegant proposal into an observationally supported one.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Two competing methods — Bacon&apos;s empiricism vs. Descartes&apos;s rationalism (variation)</h3>
      <div className="prose-p">
      Not every Scientific Revolution figure agreed on how knowledge should be built. Francis Bacon, in works like Novum Organum (1620), argued for careful, repeated observation and inductive generalization — start from evidence, build up to theory. René Descartes, by contrast, argued for starting from clear, certain first principles and reasoning deductively outward, distrusting sensory observation as unreliable on its own. These weren&apos;t small disagreements — they represent genuinely different philosophies of knowledge, and modern science still blends both: hypothesis-driven deduction and evidence-driven induction working together, not one method that simply &quot;won.&quot;
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Peer review and scientific journals — still the backbone of science today (real-world / applied case)</h3>
      <div className="prose-p">
      The Royal Society of London, founded in 1660, began publishing Philosophical Transactions in 1665, widely considered the first scientific journal in continuous publication in something close to its modern form. Its core practice — researchers submitting findings for review and critique by other experts before wide acceptance — is the direct ancestor of modern peer review, still the standard by which scientific claims are checked before publication in journals today. The habit of publishing methods and results openly enough that other scientists can check or repeat them, rather than keeping discoveries secret, is a Scientific Revolution-era practice that remains central to how science is done now.
      </div>

      <QuickCheck
        question="Francis Bacon and René Descartes proposed genuinely different approaches to building scientific knowledge. What was the core disagreement?"
        options={[
          { text: "Bacon rejected the idea of a Sun-centered solar system while Descartes accepted it", correct: false, explanation: "Their disagreement wasn't about heliocentrism specifically — it was about how knowledge in general should be built, not about any one astronomical conclusion." },
          { text: "Bacon argued for building conclusions up from repeated observation (empiricism/induction); Descartes argued for reasoning outward from certain first principles (rationalism/deduction)", correct: true, explanation: "Correct. Bacon's inductive empiricism and Descartes's deductive rationalism represent two distinct philosophies of knowledge that still coexist within the modern scientific method." },
          { text: "Bacon believed in experimentation while Descartes rejected the use of mathematics entirely", correct: false, explanation: "Descartes was in fact a major mathematician (Cartesian coordinates are named for him) — his disagreement with Bacon was about starting point and method, not a rejection of mathematics." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The Scientific Revolution: from Copernicus to Newton"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-the-scientific-revolution-timeline.svg"
        altText="Horizontal timeline beginning in 1543 with Copernicus publishing the heliocentric model, moving through Galileo's telescopic observations around 1609 to 1610, Galileo's trial by the Roman Inquisition in 1633, Francis Bacon's inductive method described in Novum Organum in 1620, the founding of the Royal Society of London in 1660, and ending with Isaac Newton's Principia Mathematica in 1687 unifying physics and astronomy under shared mathematical laws."
      />
      <p>
      Notice how long the gap is between Copernicus&apos;s 1543 proposal and Newton&apos;s 1687 synthesis — nearly a century and a half. The Scientific Revolution wasn&apos;t one breakthrough moment; it was a long chain of individually incomplete steps, each correcting or building on the last, that only look inevitable in hindsight.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating the Scientific Revolution as a single, sudden breakthrough rather than a gradual, contested process.", fix: "It unfolded over roughly a century and a half, from Copernicus (1543) to Newton (1687), with real setbacks, disputes, and slow acceptance along the way." },
          { mistake: "Assuming it was purely a European achievement with no debt to earlier scholarship.", fix: "European astronomers built directly on centuries of astronomy, optics, and mathematics developed and preserved by Islamic Golden Age scholars, alongside inherited Greek scholarship." },
          { mistake: "Believing Galileo was persecuted simply for believing the Earth orbits the Sun, as if the idea itself were entirely unprecedented.", fix: "Copernicus had proposed heliocentrism nearly a century earlier without major penalty; Galileo's conflict with the Church was specifically over his public, forceful advocacy after the Church had already restricted teaching it as established fact." },
        ]}
      />
      <MisconceptionCallout
        myth="The Scientific Revolution was a purely European achievement, developed with no meaningful debt to earlier Islamic or other non-European scholarship."
        reality={<p>European Scientific Revolution figures built directly on centuries of astronomy, optics, and mathematics developed and refined by Islamic Golden Age scholars. Geometric techniques developed by astronomers of the Maragha school closely resemble tools Copernicus used in his heliocentric model, and Ibn al-Haytham&apos;s work on optics (11th century) shaped later European understanding of light and vision. Islamic scholars had also preserved and actively extended ancient Greek philosophy and science for centuries while much of that material was less accessible in Western Europe — a debt the popular &quot;Europe alone&quot; narrative usually leaves out.</p>}
      />

      <QuickCheck
        question="Why is it inaccurate to describe the Scientific Revolution as an achievement that happened in a vacuum, with Europeans starting entirely from scratch?"
        options={[
          { text: "Because ancient Greek scholars like Aristotle and Ptolemy had already gotten everything right and Europeans just copied them exactly", correct: false, explanation: "Much of the Scientific Revolution was specifically about correcting and overturning Aristotelian and Ptolemaic ideas, particularly the geocentric model — not simply copying them." },
          { text: "Because European scientists directly built on centuries of astronomical, optical, and mathematical scholarship developed and extended by Islamic Golden Age scholars", correct: true, explanation: "Correct. Techniques and findings from scholars such as those of the Maragha school and Ibn al-Haytham fed directly into later European work, making the Scientific Revolution a continuation of a much longer, more geographically distributed scholarly tradition." },
          { text: "Because the Scientific Revolution actually took place entirely in the Middle East, not Europe", correct: false, explanation: "The Scientific Revolution, as conventionally dated (1543-1687), is centered on figures working in Europe — but it depended on earlier non-European scholarship that fed directly into it, which is different from claiming it happened somewhere else entirely." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you hear \"the Scientific Revolution\" described as a purely European story, mentally add the centuries of Islamic Golden Age astronomy and mathematics it depended on.",
          "Notice the difference between Bacon's inductive, evidence-first approach and Descartes's deductive, reasoning-first approach next time you see the phrase \"scientific method\" — both are still baked into it.",
          "When you read about a scientific finding today, look for peer review — the practice traces directly back to the Royal Society's Philosophical Transactions, first published in 1665.",
          "Read the related entry on the Renaissance to see how its habits of direct observation and questioning inherited authority set up the Scientific Revolution that followed.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What years did the Scientific Revolution take place?", answer: "Historians typically date it from 1543, when Copernicus published his heliocentric model, to 1687, when Isaac Newton published Principia Mathematica, though the intellectual currents that led into and out of it extend somewhat before and after those dates." },
          { question: "What caused the Scientific Revolution?", answer: "A combination of factors: Copernicus's heliocentric proposal, improved instruments like the telescope, growing confidence in direct observation and experiment over inherited authority, the printing press spreading ideas faster, and centuries of prior astronomical and mathematical scholarship from Islamic Golden Age and ancient Greek sources that European thinkers built directly on." },
          { question: "Why was Galileo put on trial?", answer: "Galileo was tried by the Roman Inquisition in 1633 for publicly and forcefully advocating heliocentrism after the Catholic Church had already restricted teaching it as established fact rather than hypothesis. He was found guilty of suspected heresy and spent the rest of his life under house arrest." },
          { question: "Did the Scientific Revolution rely on earlier Islamic scholarship?", answer: "Yes. European astronomers built directly on centuries of astronomy, optics, and mathematics developed and preserved by Islamic Golden Age scholars — geometric techniques from astronomers of the Maragha school closely resemble tools Copernicus later used, and Ibn al-Haytham's work on optics shaped later European science." },
          { question: "What is the difference between the Scientific Revolution and the Renaissance?", answer: "The Renaissance (roughly 14th to 17th century) was a broader cultural and artistic revival of classical learning; the Scientific Revolution (roughly 1543-1687) was a more specific, later shift focused on astronomy, physics, and systematic experimental method, which grew directly out of Renaissance habits of observation and returning to original sources." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
