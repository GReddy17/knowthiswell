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
  title: "Ancient China",
  category: "history-timeline-facts",
  order: 4,
  subtopic: "ancient-history",
  tags: ["ancient china", "dynasty", "great wall", "confucius", "ancient civilizations"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Ancient China ran on a single idea — the Mandate of Heaven — that justified every dynasty's rise and, eventually, every dynasty's fall.",
  summary: "Ancient China developed along the Yellow and Yangtze Rivers from around 2070 BCE, ruled through a sequence of dynasties legitimized by the \"Mandate of Heaven,\" and produced writing, philosophy, and technology that shaped East Asia for millennia.",
  sources: [
    { label: "The Metropolitan Museum of Art — Chinese Art and Culture", url: "https://www.metmuseum.org/toah/hd/chin/hd_chin.htm" },
    { label: "Encyclopaedia Britannica — History of China", url: "https://www.britannica.com/place/China/History" },
    { label: "UNESCO World Heritage — The Great Wall", url: "https://whc.unesco.org/en/list/438/" },
  ],
  seeAlso: [
    "history-timeline-facts/ancient-mesopotamia",
    "language-vocabulary/language-families-explained",
    "geography-world-facts/geography-of-asia",
  ],
  glossary: [
    { term: "Mandate of Heaven", definition: "The Chinese political and religious belief that heaven grants a just ruler the right to rule, and can withdraw that right if a ruler becomes unjust or incompetent." },
    { term: "Dynasty", definition: "A sequence of rulers from the same family line, each dynasty typically named after the family or state that founded it." },
    { term: "Oracle bones", definition: "Turtle shells or ox bones inscribed with early Chinese writing, used in the Shang Dynasty for divination and containing the earliest confirmed Chinese script." },
    { term: "Silk Road", definition: "The network of trade routes connecting China to Central Asia, the Middle East, and Europe, named for the Chinese silk that traveled along it." },
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
          "Ancient China's political history runs through a sequence of dynasties, each one justified by the \"Mandate of Heaven\" — the belief that a just ruler has heaven's approval, which can be lost through misrule.",
          "The earliest confirmed Chinese writing appears on oracle bones from the Shang Dynasty (c. 1600–1046 BCE), used to ask questions of ancestors and gods through divination.",
          "Confucius (551–479 BCE) never held major political power in his lifetime, but his ideas about social duty and moral leadership shaped Chinese government and culture for over two thousand years after his death.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Ancient China developed along the Yellow River and later the Yangtze River, with its first confirmed dynasty, the Shang, ruling from around 1600 BCE. Chinese history is organized around dynasties — families that held power for a stretch of time before being replaced. What&apos;s distinctive is the idea used to justify this over and over: the <TermLink href="/history-timeline-facts/ancient-china">Mandate of Heaven</TermLink>, the belief that a good ruler has heaven&apos;s backing, and a ruler who governs badly — through famine, defeat, or corruption — has lost it, which is used to explain why dynasties fall and new ones rise.</div>}
        detailed={<div className="prose-p">The Mandate of Heaven, first articulated by the Zhou Dynasty (c. 1046–256 BCE) to justify overthrowing the preceding Shang, functions as a built-in political self-correcting mechanism baked into Chinese political theory itself: it explains dynastic change not as illegitimate rebellion but as the natural consequence of a ruler&apos;s moral failure, observable through disasters, rebellions, and military defeat, which were read as heaven&apos;s judgment. This made the concept useful to every subsequent dynasty — the Qin (221–206 BCE), which first unified China under a single emperor; the Han (206 BCE–220 CE), which built the enduring administrative and cultural template for imperial China; and dynasties centuries later, all invoked the same underlying logic to claim legitimacy. It&apos;s a strikingly durable idea — a political theory that survived, in some form, from the Bronze Age into the 20th century.</div>}
      />
      <FootnoteAside>China&apos;s imperial dynastic system, starting with the Qin unification in 221 BCE, lasted — with interruptions — until the last emperor, Puyi, abdicated in 1912, making it one of the longest-running continuous systems of government in world history.</FootnoteAside>
      <p>
      That political framework explains how power changed hands, but it doesn&apos;t explain what actually got built and thought during those dynasties — starting with a writing system whose earliest confirmed use was for asking questions of the dead.
      </p>

      <QuickCheck
        question='What was the political purpose of the "Mandate of Heaven" concept in ancient China?'
        options={[
          { text: "It guaranteed that a ruling family could never be legitimately overthrown", correct: false, explanation: "It's actually the opposite — it explained why a ruling family COULD be legitimately overthrown, if they had lost heaven's favor through misrule." },
          { text: "It explained why a ruler had the right to rule, and why that right could be lost through misgovernment, justifying dynastic change", correct: true, explanation: "Correct. It gave every new dynasty a ready-made justification for replacing the last one — disasters and rebellions could be read as proof heaven had withdrawn its mandate from the fallen ruler." },
          { text: "It was a specific legal code written down by the first Qin emperor", correct: false, explanation: "It was a broader political-religious concept, first articulated by the Zhou Dynasty around 1046 BCE, not a written legal code." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Case studies</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 1: Oracle bones and the birth of Chinese writing (baseline case)</h3>
      <div className="prose-p">
      Shang Dynasty diviners carved questions onto turtle shells or ox shoulder bones — about harvests, weather, military campaigns, even the king&apos;s toothaches — then applied heat until the bone cracked, reading the crack pattern as an answer from ancestors or gods, and often recording the question and outcome in early Chinese characters. Over 150,000 inscribed oracle bone fragments have been recovered, giving historians the earliest confirmed evidence of the Chinese writing system, an ancestor of the characters still used today.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 2: Qin Shi Huang unifies China (variation / turning point)</h3>
      <div className="prose-p">
      In 221 BCE, the ruler of the Qin state conquered the last of his rival states and declared himself Qin Shi Huang, &quot;First Emperor&quot; — the first person to rule a unified China. He standardized weights, measures, currency, and even the width of cart axles across the newly unified territory, and began connecting existing defensive walls into what would eventually become the Great Wall. His rule was also famously harsh — he&apos;s associated with book burnings targeting rival philosophies and forced labor on massive projects, including his own tomb complex, guarded by the now-famous Terracotta Army of over 8,000 life-sized soldiers, discovered only in 1974.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Case 3: Confucius&apos;s ideas still shape East Asia today (real-world / applied case)</h3>
      <div className="prose-p">
      Confucius (551–479 BCE) taught ideas about social duty, respect for elders and ancestors, and the moral responsibility of rulers to govern justly — ideas that were later adopted as the official state philosophy of the Han Dynasty and shaped imperial civil service exams for nearly two thousand years afterward. Confucian values around education, family duty, and social hierarchy remain culturally influential today across China, Korea, Japan, and Vietnam, making him one of the very few individual thinkers whose ideas have shaped the daily culture of over a billion people, more than two millennia after his death.
      </div>

      <QuickCheck
        question="What did Qin Shi Huang do after unifying China in 221 BCE?"
        options={[
          { text: "He divided the country back into independent states to prevent future conflict", correct: false, explanation: "The opposite — he worked to standardize and unify, not divide, the newly conquered territory." },
          { text: "He standardized weights, measures, and currency, and began connecting walls into what became the Great Wall", correct: true, explanation: "Correct. Qin Shi Huang's standardization efforts and wall-building were central to consolidating control over a newly unified China — along with a notably harsh, centralized style of rule." },
          { text: "He abolished the concept of a single ruler and created a council of regional governors", correct: false, explanation: "He did the opposite, declaring himself a single supreme emperor — \"First Emperor\" — over the unified territory." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Major dynasties of ancient and imperial China, c. 2070 BCE – 220 CE"
        type="flow"
        svgSrc="/diagrams/04-ancient-china-dynasties-timeline.svg"
        altText="Horizontal timeline showing the traditional Xia Dynasty starting around 2070 BCE, the Shang Dynasty from around 1600 BCE with its oracle bone writing, the Zhou Dynasty from 1046 BCE which introduced the Mandate of Heaven, the Qin Dynasty's unification of China in 221 BCE, and the Han Dynasty from 206 BCE to 220 CE which established lasting administrative and cultural patterns for imperial China."
      />
      <p>
      Notice how short the Qin Dynasty was — just 15 years (221–206 BCE) — compared to the roughly 400-year Han Dynasty that followed it. Qin Shi Huang&apos;s rapid, forceful unification set the template, but it was the longer, more stable Han Dynasty that actually cemented Chinese imperial culture for the centuries after.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the Great Wall of China was built as one continuous project by a single dynasty.", fix: "It was built, rebuilt, and connected in stages across multiple dynasties over roughly 2,000 years — most of the wall tourists visit today near Beijing actually dates from the much later Ming Dynasty (1368–1644 CE), not Qin Shi Huang's original walls." },
          { mistake: "Treating Confucius as a religious founder comparable to a prophet.", fix: "Confucianism is a philosophical and ethical system focused on social duty and moral governance, not a religion with gods or an afterlife doctrine — Confucius himself is generally described by historians as a teacher and philosopher, not a religious figure." },
          { mistake: "Assuming Chinese history is one unbroken, unchanging empire.", fix: "It cycled through distinct dynasties, periods of division and civil war (like the Warring States period before Qin unification), and real political rupture — treat it with the same nuance as any other multi-thousand-year political history." },
        ]}
      />
      <MisconceptionCallout
        myth="Ancient China was isolated from the rest of the world until European contact."
        reality={<p>Ancient China was connected to Central Asia, the Middle East, and eventually Europe through the Silk Road trade network from at least the Han Dynasty onward (2nd century BCE), exchanging silk, paper, and technology for goods, ideas, and religions like Buddhism, which arrived in China via these very trade routes from India and Central Asia. &quot;Isolation&quot; describes some later periods of restricted foreign trade policy, not ancient China as a whole.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see the Great Wall in a photo, remember most of the visible structure dates from the Ming Dynasty, over 1,500 years after the wall's earliest sections.",
          "If you come across Confucian values in media from China, Korea, Japan, or Vietnam today, connect it back to a philosopher who died in 479 BCE without ever holding major political power himself.",
          "Look up a photo of the Terracotta Army, discovered by farmers digging a well in 1974 — over 8,000 unique soldiers, still being excavated today.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What was the first dynasty of China?", answer: "The Xia Dynasty is traditionally described as the first, around 2070 BCE, but it's known mainly from later texts and legend — the Shang Dynasty (c. 1600 BCE) is the earliest dynasty confirmed by direct archaeological evidence, including oracle bone inscriptions." },
          { question: "Who built the Great Wall of China?", answer: "No single dynasty — it was built, extended, and rebuilt in stages across multiple dynasties over roughly 2,000 years, starting with earlier defensive walls connected under Qin Shi Huang around 221 BCE, with most of the wall visible today dating from the later Ming Dynasty (1368–1644 CE)." },
          { question: "What is the Mandate of Heaven?", answer: "A political and religious concept, first articulated by the Zhou Dynasty around 1046 BCE, holding that heaven grants a just ruler the right to govern and can withdraw that right — through disasters or rebellion — if the ruler becomes unjust, providing justification for dynastic change." },
          { question: "Was Confucius a religious leader?", answer: "No — Confucius is generally regarded as a philosopher and teacher focused on ethics, social duty, and governance, not a religious founder. Confucianism is typically classified as a philosophical and ethical tradition rather than a religion, though it has taken on some ritual and quasi-religious practices over time in certain contexts." },
          { question: "How old is Chinese writing?", answer: "The earliest confirmed Chinese writing appears on oracle bones from the Shang Dynasty, dating to around 1200 BCE, making it, along with Egyptian hieroglyphics and Mesopotamian cuneiform, one of the world's oldest continuously developing writing traditions — modern Chinese characters are a direct descendant of this system." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

    </>
  );
}
