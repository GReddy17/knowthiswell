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
  title: "The Industrial Revolution",
  category: "history-timeline-facts",
  order: 22,
  subtopic: "revolutions-and-modern-foundations",
  tags: ["industrial revolution", "steam engine", "factory system", "urbanization", "british history", "economic history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The Industrial Revolution began in Britain around 1760 and mechanized production — but living and working conditions for many workers worsened before they broadly improved.",
  summary: "The Industrial Revolution was a period beginning around 1760 in Britain during which manufacturing shifted from hand production and home-based work to machine-powered factories, transforming economies, cities, and daily life across the following century and a half.",
  sources: [
    { label: "Encyclopaedia Britannica — Industrial Revolution", url: "https://www.britannica.com/event/Industrial-Revolution" },
    { label: "The National Archives (UK) — The Industrial Revolution", url: "https://www.nationalarchives.gov.uk/education/resources/industrial-revolution/" },
    { label: "Science Museum Group, London — Making the Modern World", url: "https://www.sciencemuseum.org.uk/" },
  ],
  seeAlso: [
    "history-timeline-facts/the-scientific-revolution",
    "history-timeline-facts/the-french-revolution",
    "history-timeline-facts/latin-american-independence-movements",
  ],
  glossary: [
    { term: "Industrialization", definition: "The large-scale shift from hand-made, home-based production to machine-powered manufacturing, typically concentrated in factories." },
    { term: "Factory system", definition: "An arrangement where production is centralized in a single building using powered machinery and a coordinated workforce, replacing the earlier cottage-industry model of work done in individual homes." },
    { term: "Steam engine", definition: "An engine that converts heat energy from burning fuel (usually coal) into mechanical motion, key to powering factories, pumps, and eventually railways and ships." },
    { term: "Urbanization", definition: "The growth of cities as populations shift from rural agricultural life to concentrated urban centers, often driven by factory employment." },
    { term: "Luddite", definition: "Originally, a member of a group of English textile workers (active roughly 1811-1816) who destroyed machinery they believed threatened their jobs and wages; now used loosely (often inaccurately) to describe anyone resistant to new technology." },
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
          "The Industrial Revolution began in Britain around 1760, starting with mechanized textile production, and gradually spread to Continental Europe, the United States, and beyond over the following century.",
          "It shifted production from home-based hand labor (the \"cottage industry\" model) to centralized, machine-powered factories, reshaping where and how people worked and lived.",
          "Its benefits were not immediate or evenly shared — early decades often brought longer hours, child labor, and worse urban living conditions for many workers, well before broader living standards began to rise.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/history-timeline-facts/the-industrial-revolution">Industrial Revolution</TermLink> was a period, starting around 1760 in Britain, when production shifted from work done by hand at home or in small workshops to work done by machines in large factories. New machines for spinning and weaving cotton, improved steam engines to power them, and eventually railways to move goods and people quickly, transformed the economy from mostly agricultural and craft-based to mostly industrial. Cities grew rapidly as people moved from farms to factory towns for work, and everyday goods — clothing, tools, later consumer products — became cheaper and more widely available than ever before, though not without real costs along the way.</div>}
        detailed={<div className="prose-p">Historians typically divide industrialization into a First Industrial Revolution (roughly 1760-1840), centered on textiles, coal, iron, and steam power, and a Second Industrial Revolution (roughly 1870-1914), centered on steel, electricity, chemicals, and oil. Britain industrialized first due to a specific combination of factors: accessible coal and iron deposits, capital accumulated through trade (including colonial and, in Britain&apos;s case, transatlantic slave-trade-linked commerce), a relatively stable political and legal system with patent protections, an agricultural revolution that had already increased food production and freed up rural labor, and access to overseas markets and raw materials (notably raw cotton) through its colonial and trade networks. Key inventions include James Hargreaves&apos;s spinning jenny (patented 1770, though developed a few years earlier), Richard Arkwright&apos;s water frame (1769), and James Watt&apos;s substantially improved steam engine (patented 1769), which made powered machinery practical well beyond locations near fast-flowing water. Industrialization was not uniform: it spread unevenly, arriving early in Belgium and parts of the northeastern United States (notably textile mill towns like Lowell, Massachusetts, from the 1820s), while much of Southern and Eastern Europe, and most of the colonized world, industrialized far later or was instead shaped into supplying raw materials for industrialized economies rather than developing their own factory bases.</div>}
      />
      <FootnoteAside>The term &quot;Luddite&quot; comes from Ned Ludd, a probably apocryphal figure supposedly responsible for destroying textile machinery in the 1770s. Real Luddites (active roughly 1811-1816) were skilled textile workers protesting not technology itself, but the way factory owners used new machines to cut wages and employ cheaper, less-skilled labor — a labor dispute more than a blanket rejection of machinery.</FootnoteAside>
      <p>
      That distinction — protesting how technology was being used to undercut wages, rather than rejecting machinery outright — matters, because it points directly at the uneven, contested nature of industrialization&apos;s early decades that the next section digs into.
      </p>

      <QuickCheck
        question="What were the historical Luddites actually protesting, based on the historical record?"
        options={[
          { text: "All machinery and technological progress in general, out of pure fear of change", correct: false, explanation: "This is the popular caricature, but historical Luddites were skilled textile workers with specific economic grievances, not a movement rejecting technology on principle." },
          { text: "Factory owners using new machines to cut wages and replace skilled workers with cheaper, less-skilled labor", correct: true, explanation: "Correct. Luddite protests targeted the economic effects of how machinery was being deployed against workers' wages and livelihoods, not mechanization as an abstract concept." },
          { text: "The pollution that steam engines produced in industrial cities", correct: false, explanation: "Environmental concerns weren't the driving issue for the historical Luddite movement — their protests were centered on wages and employment in the textile trade." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Cotton textiles and the rise of the factory system (baseline case)</h3>
      <div className="prose-p">
      Before industrialization, cotton spinning and weaving in Britain were largely done by hand in workers&apos; homes, a system historians call &quot;cottage industry.&quot; Machines like the spinning jenny and Richard Arkwright&apos;s water frame let a single worker produce far more thread than by hand, but they were too large and expensive for individual households, so production concentrated into purpose-built mills, often near rivers for water power and later coal for steam power. Manchester grew so fast around textile manufacturing that it earned the nickname &quot;Cottonopolis,&quot; its population roughly quadrupling between 1801 and 1851 as workers moved from surrounding rural areas into crowded factory-town housing.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Industrialization spread unevenly across regions (variation / exception)</h3>
      <div className="prose-p">
      Industrialization wasn&apos;t a single global wave that hit everywhere at once. Belgium industrialized early, following Britain&apos;s coal-and-iron model closely by the 1820s-1830s. In the United States, textile mill towns like Lowell, Massachusetts, industrialized from the 1820s using water power and, notably, employed large numbers of young unmarried women (the &quot;Lowell mill girls&quot;) recruited from New England farms. Meanwhile, much of Southern and Eastern Europe, and most of the colonized world in Africa, Asia, and Latin America, industrialized much later or not at all during this period — instead, colonial economic policy often shaped these regions to supply raw materials (cotton, rubber, minerals) to industrialized economies rather than to develop their own competing factory industries, a pattern with long-lasting economic consequences.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Assembly-line mass production — a direct Industrial Revolution descendant (real-world / applied case)</h3>
      <div className="prose-p">
      Henry Ford&apos;s moving assembly line, introduced at his Highland Park, Michigan plant in 1913, is often treated as a wholly new invention, but it directly extends Industrial Revolution-era principles: breaking production into standardized, repeatable steps, concentrating workers and machinery in one location, and organizing labor around the pace of a machine rather than a craftsperson&apos;s own rhythm. The same underlying logic — centralized, standardized, machine-coordinated production — still shapes modern manufacturing and global supply chains, and the labor reforms industrial workers eventually won (limits on child labor, the movement toward an eight-hour workday) remain the direct ancestors of labor protections still debated and enforced today.
      </div>

      <QuickCheck
        question="How did industrialization affect different regions of the world during the 18th and 19th centuries?"
        options={[
          { text: "It spread to every region of the world at roughly the same pace and time", correct: false, explanation: "Industrialization was highly uneven — it began in Britain, spread earlier to places like Belgium and parts of the northeastern United States, and reached much of the colonized world far later or differently, if at all, during this period." },
          { text: "It began in Britain and spread unevenly — some regions industrialized early, while colonized regions were often shaped instead to supply raw materials to industrialized economies", correct: true, explanation: "Correct. Belgium and New England textile towns industrialized relatively early, while colonial economic policy in much of Africa, Asia, and Latin America instead emphasized raw-material extraction for industrialized economies rather than building comparable domestic factory bases." },
          { text: "Only the United States industrialized during this period — Europe remained entirely agricultural", correct: false, explanation: "Britain industrialized first and remained a leading industrial power throughout this period; the United States industrialized somewhat later, following British and Belgian models." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The Industrial Revolution: key inventions and turning points"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-the-industrial-revolution-timeline.svg"
        altText="Horizontal timeline beginning around 1760 to 1770 with the spinning jenny and James Watt's improved steam engine, moving through the early 1800s growth of factory towns like Manchester, the Luddite protests around 1811 to 1816, the expansion of railways in the 1830s, mid-19th century factory reform legislation limiting child labor, and the Second Industrial Revolution from about 1870 to 1914 bringing steel, electricity, and oil-based industry."
      />
      <p>
      The gap between the First Industrial Revolution&apos;s textile-and-steam beginnings and the Second Industrial Revolution&apos;s steel-and-electricity era spans roughly a century — long enough that the everyday experience of an early factory worker in 1780s Manchester and an electrified steel-mill worker in 1900s Pittsburgh would have looked very different, even though both count as part of the same broader industrial transformation.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the Industrial Revolution immediately made everyday life better for most working people.", fix: "Early decades often brought longer hours, child labor, overcrowded and unsanitary urban housing, and workplace dangers, well before wages and living standards broadly rose later in the 19th century." },
          { mistake: "Treating industrialization as something that happened everywhere at the same time and in the same way.", fix: "It began in Britain around 1760 and spread unevenly — some regions industrialized within decades, others (often colonized regions) were shaped to supply raw materials instead, sometimes for generations." },
          { mistake: "Thinking Luddites opposed all technology out of simple fear or ignorance.", fix: "Historical Luddites were skilled textile workers protesting specific economic harms — wage cuts and job losses caused by how factory owners deployed machinery, not mechanization in the abstract." },
        ]}
      />
      <MisconceptionCallout
        myth="The Industrial Revolution improved everyone's life immediately and roughly equally."
        reality={<p>For a significant stretch of the early Industrial Revolution, many factory workers, especially in fast-growing cities like Manchester, faced longer hours than earlier agricultural or craft work typically required, dangerous machinery with few safety protections, widespread child labor, and crowded, unsanitary housing that contributed to disease outbreaks. Broad improvements in wages, working hours, and public health followed only gradually, driven substantially by labor organizing and reform legislation (such as Britain&apos;s Factory Acts, passed in stages from the 1830s onward) rather than arriving automatically alongside industrialization itself. And the benefits were never evenly distributed — factory owners and industrializing nations profited far more, and far sooner, than most industrial laborers or colonized regions supplying raw materials.</p>}
      />

      <QuickCheck
        question="According to the historical record, when did broad improvements in wages and working conditions for industrial workers mainly occur?"
        options={[
          { text: "Immediately, as soon as factories opened, since machines made production more efficient", correct: false, explanation: "Efficiency gains didn't automatically translate into better conditions for workers in the early decades — many early factory jobs involved longer hours and more dangerous conditions than what came before." },
          { text: "Gradually, over subsequent decades, driven substantially by labor organizing and reform legislation like Britain's Factory Acts", correct: true, explanation: "Correct. Meaningful improvements in hours, child labor limits, and safety came through sustained labor organizing and legislative reform over time, not automatically alongside industrialization's early spread." },
          { text: "Conditions were already excellent before industrialization and stayed the same throughout", correct: false, explanation: "Pre-industrial agricultural and craft labor had its own hardships, but the specific pattern of long factory hours, child labor in mills, and crowded industrial-city housing was a distinct set of conditions that emerged with, and worsened during, early industrialization." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you hear \"Luddite\" used to mean someone who simply fears technology, remember the real Luddites were protesting specific wage and labor harms, not machinery itself.",
          "When you read about the Industrial Revolution's benefits, notice whether the source also mentions its early costs — child labor, long hours, urban overcrowding — before living standards broadly improved.",
          "Look for assembly-line logic (standardized, repeatable steps, centralized production) the next time you learn how a modern factory or supply chain works — it's a direct descendant of Industrial Revolution-era organization.",
          "Read the related entry on the French Revolution to see how industrial-era economic pressures and Enlightenment political ideas intersected in the same historical period.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "When did the Industrial Revolution start?", answer: "It's generally dated to around 1760 in Britain, with the First Industrial Revolution running through about 1840, followed by a Second Industrial Revolution (steel, electricity, oil) from roughly 1870 to 1914." },
          { question: "Why did the Industrial Revolution start in Britain?", answer: "Britain had accessible coal and iron deposits, capital accumulated through trade, a legal system with patent protections, an earlier agricultural revolution that freed up rural labor, and access to raw materials and markets through its colonial and trade networks — a combination that made it the earliest industrializer." },
          { question: "What was the factory system?", answer: "The factory system centralized production in large, purpose-built buildings using powered machinery and coordinated labor, replacing the earlier \"cottage industry\" model where goods, especially textiles, were made by hand in individual homes." },
          { question: "Did the Industrial Revolution make life better or worse?", answer: "Both, at different times. Early decades often brought longer hours, dangerous conditions, child labor, and crowded urban housing for many workers. Living standards, wages, and safety broadly improved later, driven substantially by labor organizing and reform legislation, not automatically or immediately." },
          { question: "What is the difference between the First and Second Industrial Revolutions?", answer: "The First Industrial Revolution (roughly 1760-1840) centered on textiles, coal, iron, and steam power. The Second Industrial Revolution (roughly 1870-1914) centered on steel, electricity, chemicals, and oil, and included innovations like the assembly line." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
