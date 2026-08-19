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
  title: "Feudal Japan",
  category: "history-timeline-facts",
  order: 10,
  subtopic: "medieval-history",
  tags: ["feudal japan", "samurai", "shogun", "kamakura", "medieval history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Feudal Japan ran on shoguns, samurai, and land loyalty for nearly 700 years — but its rules were never a copy of European feudalism, despite the shared label.",
  summary: "Feudal Japan describes the roughly 700-year period from 1185 to 1868 during which military rulers called shoguns, supported by a warrior class known as samurai, held real political power in Japan, even though emperors formally remained on the throne throughout.",
  sources: [
    { label: "Encyclopaedia Britannica — Japan: Medieval Japan", url: "https://www.britannica.com/place/Japan/Medieval-Japan" },
    { label: "Encyclopaedia Britannica — Shogunate", url: "https://www.britannica.com/topic/shogunate" },
    { label: "UNESCO World Heritage Convention — Himeji-jo", url: "https://whc.unesco.org/en/list/661/" },
    { label: "UNESCO World Heritage Convention — Historic Monuments of Ancient Kyoto", url: "https://whc.unesco.org/en/list/688/" },
  ],
  seeAlso: [
    "history-timeline-facts/the-silk-road",
    "history-timeline-facts/medieval-india-major-dynasties-overview",
    "history-timeline-facts/the-middle-ages-in-europe-overview",
    "history-timeline-facts/ancient-china",
  ],
  glossary: [
    { term: "Shogun", definition: "A hereditary military ruler of Japan who held real political and military power, while the emperor remained the formal head of state without exercising direct control." },
    { term: "Samurai", definition: "A member of Japan's hereditary warrior class, bound by loyalty and land ties to a lord, who served as the military backbone of feudal Japan." },
    { term: "Daimyo", definition: "A powerful regional lord who controlled large landholdings and commanded samurai retainers, particularly prominent from the Muromachi period onward." },
    { term: "Bushido", definition: "\"The way of the warrior\" — an ethical code emphasizing loyalty, honor, and martial discipline associated with samurai, though it was formalized in writing mostly after the samurai's major wars had ended." },
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
          "Feudal Japan ran from 1185, when Minamoto no Yoritomo established the Kamakura shogunate, to 1868, when the Meiji Restoration formally ended shogunal rule — nearly 700 years, not one uniform stretch.",
          "Japan's emperor never stopped being the formal head of state during this period — real political and military power sat with the shogun and, later, powerful regional lords called daimyo, while the emperor's role became largely ceremonial.",
          "Japanese feudalism developed independently of European feudalism and worked by different rules — different inheritance customs, a differently structured warrior class, and no equivalent single religious institution playing the Church's unifying role.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p"><TermLink href="/history-timeline-facts/feudal-japan">Feudal Japan</TermLink> describes roughly the 12th through 19th centuries, when military rulers called <TermLink href="/history-timeline-facts/feudal-japan">shoguns</TermLink> held the country&apos;s real political and military power, while the emperor remained the formal, symbolic head of state. Beneath the shogun, land-holding lords commanded loyalty from <TermLink href="/history-timeline-facts/feudal-japan">samurai</TermLink> — a hereditary warrior class who served their lords in exchange for land, income, and status, similar in broad shape to how European knights served feudal lords, but built on different customs, laws, and social structure.</div>}
        detailed={<div className="prose-p">The period is usually broken into phases: the Kamakura shogunate (1185–1333), Japan&apos;s first, established after Minamoto no Yoritomo defeated rival clans and was appointed shogun by the emperor in 1192; the Muromachi or Ashikaga shogunate (1336–1573), during which centralized shogunal control gradually weakened; the Sengoku or &quot;Warring States&quot; period (roughly 1467–1600), when regional <TermLink href="/history-timeline-facts/feudal-japan">daimyo</TermLink> fought each other directly for territory with the shogunate barely functioning as a central authority; and the Edo or Tokugawa period (1603–1868), when the Tokugawa shogunate reunified and tightly controlled the country under a rigid class system, ending large-scale civil war for over two centuries. A key structural difference from Europe: Japanese feudal loyalty was organized primarily around direct personal and clan ties rather than a formal, church-sanctioned contract system, and there was no single religious institution in Japan playing the unifying, land-granting role the Christian Church played across medieval Europe.</div>}
      />
      <FootnoteAside>The formal end of the samurai as a legal class came in 1876, with the Haitorei Edict, which banned the wearing of swords in public — nearly a decade after the Meiji Restoration (1868) had already stripped the shogunate of political power.</FootnoteAside>
      <p>
      That gap between &quot;shogunate abolished&quot; (1868) and &quot;samurai class legally ended&quot; (1876) is a useful reminder that feudal Japan didn&apos;t end on a single clean date — it unwound in stages, much like it built up in stages centuries earlier.
      </p>

      <QuickCheck
        question="During feudal Japan, who held the country's real political and military power?"
        options={[
          { text: "The emperor, who directly commanded the samurai and controlled the government", correct: false, explanation: "The emperor remained the formal head of state, but real political and military power sat with the shogun and, later, regional daimyo lords, not the emperor directly." },
          { text: "The shogun and, later, powerful regional daimyo, while the emperor remained the formal but largely symbolic head of state", correct: true, explanation: "Correct. This split between formal authority (the emperor) and real power (the shogun/daimyo) is a defining structural feature of feudal Japan from 1185 to 1868." },
          { text: "A rotating council of samurai elected annually by regional lords", correct: false, explanation: "There was no elected council structure — power passed through hereditary shogunal dynasties and, during periods of weak central control, through individual daimyo commanding their own territories." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The Kamakura shogunate&apos;s founding (baseline case)</h3>
      <div className="prose-p">
      After Minamoto no Yoritomo defeated the rival Taira clan in the Genpei War (1180–1185), he established a military government (bakufu, literally &quot;tent government&quot;) at Kamakura, and the emperor formally appointed him shogun in 1192. This arrangement — a military ruler holding real power while the emperor kept a ceremonial role in the capital, Kyoto — became the template for the next nearly 700 years of Japanese government, even as the specific shogunal dynasty in charge changed multiple times.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The Sengoku period — when central authority broke down (variation / exception)</h3>
      <div className="prose-p">
      During the Sengoku (&quot;Warring States&quot;) period, roughly 1467–1600, the Ashikaga shogunate&apos;s central authority collapsed in practice, and regional daimyo fought each other directly for territory and dominance with little effective oversight from Kyoto. This period shows feudal Japan wasn&apos;t always a stable top-down hierarchy — for well over a century, real power was radically decentralized among competing warlords, ending only when Oda Nobunaga, Toyotomi Hideyoshi, and finally Tokugawa Ieyasu successively fought their way toward reunification, with Ieyasu establishing the Tokugawa shogunate in 1603.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Himeji Castle and bushido&apos;s modern legacy (real-world / applied case)</h3>
      <div className="prose-p">
      Himeji Castle, completed in its current form in the early 17th century and now a UNESCO World Heritage Site, is the best-preserved example of Japanese castle architecture from the transition out of the Sengoku period into the Tokugawa peace, built for both defense and status display. Bushido, the samurai ethical code emphasizing loyalty, honor, and discipline, was formalized mostly in writing during the peaceful Edo period — after most large-scale samurai warfare had actually ended — and its vocabulary and ideals are still widely referenced today in Japanese and international business and martial-arts culture, often more as an inherited ideal than as a literal historical rulebook.
      </div>

      <QuickCheck
        question="What does the Sengoku ('Warring States') period, roughly 1467-1600, show about feudal Japan?"
        options={[
          { text: "That the shogun always held firm, unbroken central control throughout the entire feudal period", correct: false, explanation: "The Sengoku period is the clearest counterexample — the Ashikaga shogunate's authority effectively broke down, and regional daimyo fought each other directly for power." },
          { text: "That central shogunal authority could break down for over a century, with power decentralized among competing regional daimyo until reunification", correct: true, explanation: "Correct. The Sengoku period saw roughly 130+ years of decentralized conflict among daimyo before Tokugawa Ieyasu reunified the country and founded a new shogunate in 1603." },
          { text: "That Japan had no military conflict at all during the medieval period", correct: false, explanation: "The opposite is true — the Sengoku period was one of the most militarily active stretches in Japanese history, marked by sustained warfare among regional lords." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Feudal Japan's major periods, 1185–1868"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-feudal-japan-shogunate-timeline.svg"
        altText="Horizontal timeline showing the Kamakura shogunate from 1185 to 1333, the Muromachi or Ashikaga shogunate from 1336 to 1573 with the overlapping Sengoku Warring States period from roughly 1467 to 1600 marked as a period of decentralized conflict among daimyo, the Tokugawa or Edo shogunate from 1603 to 1868 marked by reunification and over two centuries of internal peace, and the Meiji Restoration in 1868 ending shogunal rule, followed by the 1876 Haitorei Edict formally ending the samurai class."
      />
      <p>
      The Sengoku period&apos;s overlap with the end of the Muromachi shogunate is the key thing to notice — it wasn&apos;t a separate era so much as the Muromachi shogunate&apos;s authority visibly failing in real time, resolved only by force over more than a century.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the Japanese emperor had no role at all during feudal Japan.", fix: "The emperor remained the formal head of state throughout — even shoguns needed imperial appointment to legitimize their rule, even as real power sat elsewhere." },
          { mistake: "Treating Japanese feudalism as a direct copy of European feudalism.", fix: "They developed independently, with different inheritance customs, a different warrior class structure, and no equivalent single religious institution playing the unifying role the Christian Church played in Europe." },
          { mistake: "Assuming bushido was a fixed, ancient code that all samurai followed literally for the entire feudal period.", fix: "Bushido was formalized in writing mostly during the peaceful Edo period, after most large-scale samurai warfare had ended — treat it as an evolving ideal, not a fixed rulebook followed identically across all 700 years." },
        ]}
      />
      <MisconceptionCallout
        myth="Feudal Japan's samurai-and-shogun system worked essentially the same way as European feudalism, just with different names for the same roles."
        reality={<p>The two systems share a broad family resemblance — land-holding lords, warrior retainers, hierarchical loyalty — but they developed independently and differ in real structural ways. European feudalism was closely bound up with the Catholic Church, which held its own land, sanctioned oaths, and shaped legal and moral authority across the whole system; feudal Japan had no equivalent single religious institution playing that unifying role. Inheritance customs, the legal status of the warrior class, and the relationship between local lords and central authority also differed significantly between the two systems. Historians generally treat &quot;feudalism&quot; as a useful comparative label for both, not evidence that they were the same system in two different places.</p>}
      />

      <QuickCheck
        question="Why do historians caution against treating feudal Japan and medieval European feudalism as essentially identical systems?"
        options={[
          { text: "Because Japan had no warrior class comparable to European knights", correct: false, explanation: "Japan clearly did have a warrior class, the samurai — the caution isn't about whether warriors existed, but about assuming the surrounding systems worked identically." },
          { text: "Because the two systems developed independently and differ in real ways, including the absence of a single unifying religious institution like the Church in Japan", correct: true, explanation: "Correct. Both systems involve land, lords, and warrior loyalty in broad terms, but their legal, religious, and inheritance structures developed separately and differently." },
          { text: "Because Japan never had any centralized government during this period", correct: false, explanation: "Japan had centralized shogunal government for long stretches, notably under the Kamakura and Tokugawa shogunates — the comparison issue is about structural details, not the presence of central authority." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see \"feudal Japan\" compared directly to medieval Europe, notice which specific structures are actually being compared — the label \"feudal\" covers real differences underneath.",
          "When bushido comes up in a movie, book, or business context, remember it was formalized mostly during peacetime, after most samurai warfare had ended.",
          "Notice the gap between 1868 (shogunate ends) and 1876 (samurai class formally abolished) next time \"the end of the samurai era\" comes up — it wasn't one single date.",
          "If you visit or see photos of Himeji Castle, place it at the transition out of the Sengoku period into over two centuries of Tokugawa peace.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "When was feudal Japan?", answer: "Roughly 1185 to 1868, from the founding of the Kamakura shogunate to the Meiji Restoration, which formally ended shogunal rule — the samurai class itself wasn't legally abolished until 1876." },
          { question: "What is the difference between a shogun and a samurai?", answer: "A shogun was the top military ruler of Japan, holding real political and military power while the emperor remained the formal head of state. A samurai was a member of the hereditary warrior class who served a lord, whether that lord was the shogun, a regional daimyo, or another noble." },
          { question: "Was feudal Japan the same as European feudalism?", answer: "No — the two systems share broad similarities (land-holding lords, warrior retainers, hierarchical loyalty) but developed independently, with different inheritance customs and no Japanese equivalent to the Church's unifying role in European feudalism." },
          { question: "What is bushido?", answer: "\"The way of the warrior,\" an ethical code associated with samurai emphasizing loyalty, honor, and discipline. It was formalized mostly in writing during the peaceful Edo period, after most large-scale samurai warfare had already ended." },
          { question: "Who was the first shogun of Japan?", answer: "Minamoto no Yoritomo, who was appointed shogun by the emperor in 1192 after establishing the Kamakura shogunate, Japan's first sustained military government, following his victory in the Genpei War (1180-1185)." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
