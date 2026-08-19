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
  title: "The French Revolution",
  category: "history-timeline-facts",
  order: 24,
  subtopic: "revolutions-and-modern-foundations",
  tags: ["french revolution", "bastille day", "reign of terror", "napoleon", "declaration of the rights of man", "french history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The French Revolution (1789-1799) didn't end at the Bastille — it ran through a decade of upheaval, a king's execution, the Reign of Terror, and Napoleon's rise.",
  summary: "The French Revolution was a decade of political and social upheaval in France, from the storming of the Bastille in 1789 to Napoleon Bonaparte's coup in 1799, that overthrew the absolute monarchy and reshaped ideas of citizenship, rights, and government across Europe.",
  sources: [
    { label: "Encyclopaedia Britannica — French Revolution", url: "https://www.britannica.com/event/French-Revolution" },
    { label: "UNESCO World Heritage — Palace and Park of Versailles", url: "https://whc.unesco.org/en/list/83/" },
    { label: "U.S. Library of Congress — Research Guides: French Revolution", url: "https://guides.loc.gov/" },
  ],
  seeAlso: [
    "history-timeline-facts/the-american-revolution",
    "history-timeline-facts/the-industrial-revolution",
    "history-timeline-facts/latin-american-independence-movements",
  ],
  glossary: [
    { term: "Estates-General", definition: "A representative assembly of France's three social \"estates\" (clergy, nobility, and commoners) that met in 1789 for the first time since 1614, triggering the events leading to revolution." },
    { term: "Ancien régime", definition: "French for \"old order\" or \"old regime\" — the political and social system of absolute monarchy and hereditary privilege in France before the Revolution." },
    { term: "Reign of Terror", definition: "A roughly year-long period (1793-1794) during the French Revolution marked by mass arrests and executions of perceived enemies of the revolution, overseen substantially by Maximilien Robespierre and the Committee of Public Safety." },
    { term: "Guillotine", definition: "A device for beheading, widely used for executions during the French Revolution, seen at the time as a swift and relatively humane method compared to earlier execution practices." },
    { term: "Bastille Day", definition: "France's national holiday, celebrated July 14, commemorating the storming of the Bastille fortress-prison in 1789." },
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
          "The storming of the Bastille on July 14, 1789 is the Revolution's most famous moment, but it marks the beginning, not the end, of a decade of upheaval that ran until Napoleon Bonaparte's coup in November 1799.",
          "The Revolution went through sharply different phases — from the idealistic Declaration of the Rights of Man and of the Citizen (August 1789) to the mass executions of the Reign of Terror (1793-1794), including the eventual execution of Revolutionary leader Maximilien Robespierre himself.",
          "France's financial crisis, worsened by the massive debt it took on to help fund the American Revolution, was a direct contributing cause of the unrest that led to the Estates-General being convened in 1789.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/history-timeline-facts/the-french-revolution">French Revolution</TermLink> was a period of dramatic political change in France, beginning in 1789, that overthrew centuries of absolute monarchy. Facing a severe financial crisis and widespread inequality between nobility, clergy, and commoners, France&apos;s King Louis XVI convened the Estates-General, a representative assembly, for the first time in over 170 years. Commoner representatives broke away to form a National Assembly, and on July 14, 1789, Parisians stormed the Bastille, a fortress-prison symbolizing royal authority. Over the following decade, France abolished the monarchy, executed the king, went through a violent period called the Reign of Terror, and eventually saw Napoleon Bonaparte seize power in 1799.</div>}
        detailed={<div className="prose-p">France&apos;s financial crisis heading into 1789 stemmed from decades of costly wars, an inefficient and unequal tax system that exempted the nobility and clergy, and enormous debt, including significant sums borrowed to help fund the American Revolution against Britain. The Estates-General convened in May 1789 quickly deadlocked over voting procedures; the Third Estate (commoners) broke away, declared itself the National Assembly, and swore the Tennis Court Oath not to disband until France had a constitution. The storming of the Bastille (July 14, 1789) followed weeks of rising tension, and in August 1789 the Assembly abolished feudal privileges and adopted the Declaration of the Rights of Man and of the Citizen, asserting liberty, equality, and popular sovereignty. But the Revolution did not end there: the monarchy was abolished in 1792, Louis XVI was executed by <TermLink href="/history-timeline-facts/the-french-revolution">guillotine</TermLink> in January 1793, and the <TermLink href="/history-timeline-facts/the-french-revolution">Reign of Terror</TermLink> (1793-1794), led substantially by Maximilien Robespierre and the Committee of Public Safety, saw tens of thousands executed as suspected enemies of the revolution — including, eventually, Robespierre himself, guillotined in July 1794 after his own allies turned against him. A less radical Directory government followed (1795-1799), itself unstable, until Napoleon Bonaparte&apos;s coup in November 1799 (the &quot;18th Brumaire&quot; by the revolutionary calendar) effectively ended the Revolution and set France on a path toward Napoleon crowning himself emperor in 1804.</div>}
      />
      <FootnoteAside>When the Bastille was stormed on July 14, 1789, it held just seven prisoners — four forgers, two men held for &quot;insanity,&quot; and one aristocrat imprisoned at his own family&apos;s request. Its symbolic value as a hated emblem of royal absolute power mattered far more than its actual population that day.</FootnoteAside>
      <p>
      That gap between the Bastille&apos;s symbolic weight and its modest actual population is a useful preview of how much of the Revolution worked: dramatic symbolic turning points followed by years of far messier, harder-to-summarize political struggle.
      </p>

      <QuickCheck
        question="What happened to the French Revolution after the storming of the Bastille in July 1789?"
        options={[
          { text: "The Revolution effectively ended there — France quickly became a stable constitutional monarchy", correct: false, explanation: "The Bastille's fall was an early, symbolic turning point, not an ending. France went on to abolish the monarchy, execute the king, and go through the Reign of Terror over the following several years." },
          { text: "France went through years of further upheaval, including the abolition of the monarchy, the execution of Louis XVI, and the Reign of Terror, before Napoleon's coup in 1799", correct: true, explanation: "Correct. The Revolution continued for a full decade after 1789, through sharply different and often more violent phases, ending only with Napoleon Bonaparte's coup in November 1799." },
          { text: "The monarchy was restored almost immediately after the Bastille fell", correct: false, explanation: "The opposite happened — the monarchy's power was progressively stripped away over the following years, and it was formally abolished in 1792, with the king executed in 1793." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The storming of the Bastille and the Declaration of the Rights of Man (baseline case)</h3>
      <div className="prose-p">
      On July 14, 1789, Parisians, fearing royal troops were massing to crush the new National Assembly, stormed the Bastille to seize weapons and gunpowder stored there. Weeks later, on August 4, 1789, the Assembly abolished feudal privileges in a single dramatic overnight session, and on August 26, 1789, adopted the Declaration of the Rights of Man and of the Citizen, asserting that men are born free and equal in rights and that sovereignty rests fundamentally with the nation, not a monarch by divine right — language that echoes, and was directly influenced by, the American Declaration of Independence a decade earlier.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The Reign of Terror — the Revolution turning on itself (variation / exception)</h3>
      <div className="prose-p">
      The idealism of 1789 gave way, by 1793-1794, to the Reign of Terror, during which the Committee of Public Safety, led substantially by Maximilien Robespierre, authorized mass arrests and executions of anyone suspected of counter-revolutionary sympathies — historians estimate roughly 16,000 to 40,000 people were executed nationwide during this period, with tens of thousands more imprisoned. The Terror ultimately consumed its own architects: Robespierre himself was arrested and guillotined in July 1794 after former allies turned against him, in what&apos;s known as the Thermidorian Reaction — a stark illustration that the Revolution&apos;s outcomes were neither uniform nor guaranteed to reflect its founding ideals.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How French Revolution ideas still show up today (real-world / applied case)</h3>
      <div className="prose-p">
      &quot;Liberté, égalité, fraternité&quot; (&quot;liberty, equality, fraternity&quot;) remains France&apos;s official national motto today, and Bastille Day (July 14) is still France&apos;s national holiday, marked by a major military parade in Paris. The metric system, developed and formally adopted during the Revolutionary period in the 1790s, is now the standard measurement system across nearly the entire world. And the Declaration of the Rights of Man and of the Citizen is widely cited by historians as a direct forerunner of the modern human-rights language later used in documents like the 1948 Universal Declaration of Human Rights.
      </div>

      <QuickCheck
        question="What ultimately happened to Maximilien Robespierre, one of the central figures behind the Reign of Terror?"
        options={[
          { text: "He remained in power for decades and later became emperor of France", correct: false, explanation: "That describes Napoleon Bonaparte's later trajectory, not Robespierre's. Robespierre's own power collapsed within about a year of the Terror's peak." },
          { text: "He was arrested and executed by guillotine in July 1794 after his former allies turned against him", correct: true, explanation: "Correct. Robespierre was guillotined during the Thermidorian Reaction, a striking example of the Revolution consuming even its own leading architects." },
          { text: "He voluntarily retired from politics and lived peacefully in the French countryside", correct: false, explanation: "Robespierre's downfall was forced and violent, not a voluntary retirement — he was arrested and executed within about a day of losing political support." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The French Revolution: from the Estates-General to Napoleon's coup"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-the-french-revolution-timeline.svg"
        altText="Horizontal timeline beginning with the Estates-General convening and the storming of the Bastille in 1789, moving through the Declaration of the Rights of Man in August 1789, the abolition of the monarchy in 1792, the execution of Louis XVI and start of the Reign of Terror in January 1793, the Thermidorian Reaction and execution of Robespierre in July 1794, the unstable Directory government from 1795 to 1799, and ending with Napoleon Bonaparte's coup in November 1799."
      />
      <p>
      A full decade separates the Bastille&apos;s fall in 1789 from Napoleon&apos;s coup in 1799 — and the government structure changed dramatically several times within that decade alone, from constitutional monarchy, to republic, to the Terror&apos;s emergency rule, to the Directory, showing just how unstable and contested this period really was.
      </p>

      <EntryCalculator
        title="Years since the storming of the Bastille (1789)"
        fields={[
          { key: "year", label: "Event year", defaultValue: 1789 },
        ]}
        resultLabel="Years elapsed"
        formula="yearsSinceYear"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating the storming of the Bastille as the end point of the French Revolution.", fix: "It marks an early, symbolic turning point in 1789 — the Revolution continued for a full decade after that, through the monarchy's abolition, the king's execution, and the Reign of Terror, ending only with Napoleon's coup in 1799." },
          { mistake: "Assuming the Revolution's outcomes stayed consistent with its 1789 ideals throughout.", fix: "The idealistic Declaration of the Rights of Man (1789) gave way to the mass executions of the Reign of Terror (1793-1794), which consumed even its own architects, including Robespierre." },
          { mistake: "Overlooking France's financial crisis, including American Revolution war debt, as a direct contributing cause.", fix: "Decades of costly wars and debt, including funds borrowed to support the American Revolution, worsened France's finances and were a direct factor in the crisis that led to the Estates-General being convened in 1789." },
        ]}
      />
      <MisconceptionCallout
        myth={'The French Revolution ended cleanly with the fall of the Bastille in 1789.'}
        reality={<p>The Bastille&apos;s fall was an early, highly symbolic event, not a conclusion. The decade that followed saw the monarchy abolished (1792), King Louis XVI executed (January 1793), the Reign of Terror (1793-1794) claim an estimated 16,000 to 40,000 lives nationwide, the unstable Directory government (1795-1799), and finally Napoleon Bonaparte&apos;s coup in November 1799 — which effectively ended the Revolution and set the stage for Napoleon to crown himself emperor in 1804. The period between 1789 and 1799 involved several dramatically different phases of government and violence, not one continuous, settled outcome.</p>}
      />

      <QuickCheck
        question="How long did the French Revolution's period of major political upheaval last, from the storming of the Bastille to Napoleon's coup?"
        options={[
          { text: "About one day — the Revolution was essentially resolved when the Bastille fell", correct: false, explanation: "The Bastille's fall on July 14, 1789 was a symbolic early event; the broader Revolution continued through several more dramatic phases for a full decade afterward." },
          { text: "About a decade, from 1789 to Napoleon Bonaparte's coup in November 1799", correct: true, explanation: "Correct. The Revolution ran through the abolition of the monarchy, the king's execution, the Reign of Terror, and the unstable Directory government before ending with Napoleon's 1799 coup." },
          { text: "Roughly a century, continuing well into the 1900s", correct: false, explanation: "The core Revolutionary period is generally dated 1789-1799 by historians, though its political and social effects continued to influence France and Europe for much longer afterward." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time someone treats \"storming the Bastille\" as the whole story, mention the decade of further upheaval that followed, including the Reign of Terror.",
          "Notice how the Declaration of the Rights of Man's language echoes the American Declaration of Independence — and how it later influenced international human-rights documents.",
          "Remember that Robespierre, architect of the Reign of Terror, was himself executed within about a year — revolutions don't always spare their own leaders.",
          "Read the related entry on the American Revolution to see how France's debt from supporting American independence fed directly into its own 1789 financial crisis.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "When did the French Revolution start and end?", answer: "It's generally dated from the storming of the Bastille and convening of the Estates-General in 1789 to Napoleon Bonaparte's coup in November 1799, though its effects continued to shape France for years afterward, including Napoleon crowning himself emperor in 1804." },
          { question: "What caused the French Revolution?", answer: "A severe financial crisis (worsened by war debt, including funds spent supporting the American Revolution), an unequal tax system that exempted the nobility and clergy, food shortages, and growing Enlightenment-influenced demands for representative government and individual rights." },
          { question: "What was the Reign of Terror?", answer: "A roughly year-long period (1793-1794) during which the Committee of Public Safety, led substantially by Maximilien Robespierre, authorized mass arrests and executions of suspected counter-revolutionaries — an estimated 16,000 to 40,000 people were executed nationwide before Robespierre himself was executed in July 1794." },
          { question: "Did the French Revolution end with the fall of the Bastille?", answer: "No. The Bastille's fall on July 14, 1789 was an early, symbolic event. The Revolution continued for a full decade afterward, through the monarchy's abolition, the king's execution, the Reign of Terror, and an unstable Directory government, ending with Napoleon's 1799 coup." },
          { question: "How is Bastille Day celebrated today?", answer: "Bastille Day (July 14) is France's national holiday, commemorating the 1789 storming of the Bastille. It's marked by a major military parade on the Champs-Élysées in Paris, fireworks, and public celebrations across France." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
