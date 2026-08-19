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
  title: "Islamic Golden Age",
  category: "history-timeline-facts",
  order: 9,
  subtopic: "medieval-history",
  tags: ["islamic golden age", "abbasid caliphate", "house of wisdom", "medieval history", "al-khwarizmi"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The Islamic Golden Age wasn't just Greek texts passed along untouched — scholars in Baghdad and Cordoba built genuinely new mathematics, optics, and medicine on top of them.",
  summary: "The Islamic Golden Age was a period of roughly the 8th through the 13th century, centered on the Abbasid Caliphate and its capital Baghdad, during which scholars translated, preserved, and substantially expanded on Greek, Persian, and Indian knowledge in mathematics, astronomy, medicine, and optics.",
  sources: [
    { label: "Encyclopaedia Britannica — Bayt al-Hikmah (House of Wisdom)", url: "https://www.britannica.com/place/Bayt-al-Hikmah" },
    { label: "Encyclopaedia Britannica — Abbasid Caliphate", url: "https://www.britannica.com/topic/Abbasid-caliphate" },
    { label: "Encyclopaedia Britannica — Al-Khwarizmi", url: "https://www.britannica.com/biography/al-Khwarizmi" },
    { label: "Encyclopaedia Britannica — Ibn al-Haytham", url: "https://www.britannica.com/biography/Ibn-al-Haytham" },
    { label: "UNESCO World Heritage Convention — Historic Cairo", url: "https://whc.unesco.org/en/list/89" },
  ],
  seeAlso: [
    "history-timeline-facts/the-middle-ages-in-europe-overview",
    "history-timeline-facts/the-crusades-factual-overview",
    "history-timeline-facts/the-silk-road",
    "history-timeline-facts/ancient-mesopotamia",
  ],
  glossary: [
    { term: "Abbasid Caliphate", definition: "The Islamic empire (750–1258 CE) ruled by the Abbasid dynasty from its capital Baghdad, under which the Islamic Golden Age's major scholarly institutions flourished." },
    { term: "House of Wisdom (Bayt al-Hikmah)", definition: "A royal library and academy in Baghdad, most active under caliphs Harun al-Rashid and al-Ma'mun in the early 9th century, where scholars translated Greek, Persian, and Indian texts into Arabic." },
    { term: "Translation movement", definition: "The large-scale, centuries-long effort by scholars in the Islamic world — many of them Christian, Jewish, or Zoroastrian — to translate Greek, Persian, and Indian scientific and philosophical works into Arabic." },
    { term: "Algebra", definition: "From the Arabic al-jabr (\"reunion of broken parts\"), the branch of mathematics systematized by al-Khwarizmi in 9th-century Baghdad." },
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
          "The Islamic Golden Age (roughly 8th–13th century CE) was centered on Baghdad's House of Wisdom, but it wasn't just one library in one city — Cordoba, in Islamic Spain, ran a parallel and independently significant scholarly tradition at the same time.",
          "Scholars didn't just translate Greek, Persian, and Indian texts into Arabic — they corrected, extended, and built genuinely new fields on top of them, most famously algebra, developed as a systematic discipline by al-Khwarizmi around 820 CE.",
          "The period's conventional end point is the Mongol destruction of Baghdad in 1258, though scholarship continued well past that in Cairo, Islamic Spain, and Central Asia — the 1258 date marks Baghdad's fall, not the end of Islamic scholarship itself.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/history-timeline-facts/islamic-golden-age">Islamic Golden Age</TermLink> refers to a period of roughly the 8th through the 13th century when cities across the Islamic world, especially Baghdad under the Abbasid Caliphate, became major centers of learning. Scholars translated Greek, Persian, and Indian works into Arabic, preserving knowledge that might otherwise have been lost after the fall of Rome, while also making substantial original contributions of their own in mathematics, medicine, astronomy, and optics. Baghdad&apos;s <TermLink href="/history-timeline-facts/islamic-golden-age">House of Wisdom</TermLink> is the best-known institution from this era, but it was one hub among several across a very large and connected Islamic world.</div>}
        detailed={<div className="prose-p">The House of Wisdom (Bayt al-Hikmah) reached its peak under caliphs Harun al-Rashid and especially his son al-Ma&apos;mun, who reigned 813–833 CE and actively sponsored translation and original research; the institution&apos;s importance declined after his death, and it was destroyed along with much of Baghdad during the Mongol siege of 1258. But Baghdad was never the only center — in Islamic Spain (al-Andalus), the independent Umayyad emirate and later caliphate at Cordoba built its own library and scholarly culture, producing figures like Ibn Rushd (Averroes), a 12th-century philosopher whose commentaries on Aristotle were later read across Christian Europe. Historic Cairo, founded as the Fatimid capital in 969 CE, became a third major hub, especially after the Abbasid center at Baghdad weakened. Treating &quot;the Islamic Golden Age&quot; as one library in one city undersells how geographically distributed — and how competitive and cross-pollinating — this scholarly world actually was, stretching from Spain to Central Asia.</div>}
      />
      <FootnoteAside>Much of the actual translation work at the House of Wisdom was done by Christian, Jewish, and Zoroastrian scholars working alongside Muslim colleagues — the era&apos;s scholarship was notably multi-religious, not a single faith community working in isolation.</FootnoteAside>
      <p>
      That multi-city, multi-faith picture matters for the question people usually ask next: did this era actually produce new knowledge, or was it mostly a holding pattern that just passed Greek ideas along to Europe untouched?
      </p>

      <QuickCheck
        question="Which of these best describes the House of Wisdom in Baghdad?"
        options={[
          { text: "The only center of learning in the Islamic world during this period", correct: false, explanation: "It was the most famous, but not the only one — Cordoba in Islamic Spain and, later, Cairo ran significant scholarly traditions of their own during overlapping centuries." },
          { text: "A library and academy that peaked under caliphs Harun al-Rashid and al-Ma'mun in the early 9th century, where translation and original research happened side by side", correct: true, explanation: "Correct. The House of Wisdom's most active period was roughly 786–833 CE under these two caliphs, and it combined translating earlier texts with genuinely new scholarship, not one without the other." },
          { text: "A mosque built specifically to train religious scholars, with no connection to mathematics or science", correct: false, explanation: "The House of Wisdom was a library and research academy, not primarily a religious training institution — its core activity was translation, mathematics, astronomy, and medicine." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Al-Khwarizmi and the founding of algebra (baseline case)</h3>
      <div className="prose-p">
      Muhammad ibn Musa al-Khwarizmi (c. 780–850 CE) worked at the House of Wisdom under al-Ma&apos;mun. His book <em>Al-Kitab al-mukhtasar fi hisab al-jabr wa&apos;l-muqabala</em> (&quot;The Compendious Book on Calculation by Completion and Balancing&quot;) systematized methods for solving linear and quadratic equations — the word &quot;al-jabr&quot; in its title is the direct root of the English word <TermLink href="/history-timeline-facts/islamic-golden-age">algebra</TermLink>. This wasn&apos;t a translation of an existing Greek algebra text; algebra as a distinct, systematic discipline is credited to al-Khwarizmi&apos;s own synthesis. He also wrote a separate book explaining the Hindu-Arabic numeral system and how to calculate with it, which is where the word &quot;algorithm&quot; — a Latinization of his own name — eventually comes from once his work reached medieval Europe.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Cordoba as a second, independent center (regional variation)</h3>
      <div className="prose-p">
      While Baghdad flourished under the Abbasids, Cordoba in Islamic Spain developed its own scholarly culture under a separate, rival Umayyad dynasty that had fled Abbasid rule in the 8th century. Cordoba built one of the largest libraries in the medieval world and later produced figures like Ibn Rushd (Averroes, 1126–1198), whose detailed commentaries on Aristotle became central texts in European universities once translated into Latin. This is a genuine exception to any picture of one unified center: Baghdad and Cordoba were politically rival capitals, not part of the same administration, yet both produced major scholarship in the same centuries.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Ibn al-Haytham&apos;s optics and the scientific method (real-world / applied case)</h3>
      <div className="prose-p">
      Ibn al-Haytham (c. 965–1040 CE, known in Latin as Alhazen) wrote the <em>Book of Optics</em> (Kitab al-Manazir), which refuted the older Greek idea that the eye sends out visual rays to &quot;see&quot; objects, and instead correctly argued that vision works by light reflecting off objects into the eye. He backed this up with controlled experiments rather than argument alone — a methodical, evidence-based approach historians of science treat as an early and influential model for the modern scientific method. His work was translated into Latin by the 13th century and directly influenced the English scientist Roger Bacon. The underlying idea — that light travels from an object to your eye, not the other way around — is exactly the correct physical model still taught in science classrooms today.
      </div>

      <QuickCheck
        question="What did Ibn al-Haytham's Book of Optics establish?"
        options={[
          { text: "That the eye emits rays that travel outward to \"see\" objects, confirming earlier Greek theory", correct: false, explanation: "This was the older Greek theory Ibn al-Haytham refuted, not confirmed — he argued the opposite direction of light travel." },
          { text: "That vision works because light reflects off objects and travels into the eye, supported by controlled experiments", correct: true, explanation: "Correct. This is the physically accurate model still taught today, and Ibn al-Haytham backed it with deliberate experimentation rather than argument from authority alone." },
          { text: "That light does not play any role in vision at all", correct: false, explanation: "Light is central to his explanation — his key correction was about which direction light travels between the eye and the object, not whether light matters." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The Islamic Golden Age: key centers and dates, c. 750–1258 CE"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-islamic-golden-age-timeline-map.svg"
        altText="Timeline and map showing the founding of the Abbasid Caliphate and Baghdad around 750 CE, the House of Wisdom's peak under Harun al-Rashid and al-Ma'mun from roughly 786 to 833 CE, the parallel and independent rise of Cordoba as a scholarly center in Islamic Spain, the founding of Cairo as the Fatimid capital in 969 CE, and the Mongol destruction of Baghdad in 1258 CE marking the conventional end point of the period, with scholarship continuing afterward in Cairo, Spain, and Central Asia."
      />
      <p>
      Notice the geography: Baghdad, Cordoba, and Cairo sit at opposite ends of the Islamic world and were, for long stretches, ruled by rival dynasties — this was a broad, competitive network of scholarly centers, not a single institution radiating outward from one city.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the Islamic Golden Age was centered only in Baghdad.", fix: "Cordoba (Islamic Spain) and, later, Cairo were major, independent scholarly centers in the same broad period, not satellites of Baghdad." },
          { mistake: "Treating the era's scholarship as purely translation work with no original contributions.", fix: "Al-Khwarizmi's systematic algebra and Ibn al-Haytham's experimental optics were new fields and methods, not translations of existing Greek texts." },
          { mistake: "Assuming Islamic scholarship simply stopped in 1258 when Baghdad fell to the Mongols.", fix: "1258 marks the destruction of Baghdad specifically — scholarship continued afterward in Cairo, Islamic Spain (for a time), and Central Asia." },
        ]}
      />
      <MisconceptionCallout
        myth={'The Islamic Golden Age was mostly about translating and preserving Greek texts, not producing original science that mattered.'}
        reality={<p>Scholars in this period did preserve a great deal of Greek, Persian, and Indian knowledge that might otherwise have been lost — but they also produced substantial original work. Al-Khwarizmi&apos;s systematic algebra, Ibn al-Haytham&apos;s experimentally grounded optics, and Ibn Sina&apos;s (Avicenna&apos;s) <em>Canon of Medicine</em>, used as a standard medical textbook in European universities for roughly 600 years afterward, were new contributions built on top of earlier knowledge, not simple copies of it. Historians of science generally credit this period with real advances in mathematics, optics, and medicine, alongside its well-documented translation and preservation work.</p>}
      />

      <QuickCheck
        question="Which statement most accurately reflects historians' assessment of the Islamic Golden Age's scientific contribution?"
        options={[
          { text: "It consisted almost entirely of translating Greek texts into Arabic with little original content", correct: false, explanation: "This undersells the period — translation was a major activity, but original contributions like algebra and experimental optics were also produced." },
          { text: "It combined large-scale translation and preservation of earlier knowledge with genuinely new original contributions in fields like algebra, optics, and medicine", correct: true, explanation: "Correct. Both things were true at once — extensive translation work happened alongside original scholarship that later shaped European science and mathematics." },
          { text: "It focused exclusively on religious scholarship with no connection to mathematics or natural science", correct: false, explanation: "Mathematics, astronomy, medicine, and optics were central, well-documented areas of scholarship during this period, not excluded from it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you hear the word \"algebra\" or \"algorithm,\" remember both trace to al-Khwarizmi's work in 9th-century Baghdad.",
          "When you see the Islamic Golden Age described as one city or one library, mentally add Cordoba and Cairo as separate, significant centers.",
          "Notice how often historical accounts credit this era with only \"preserving\" knowledge — and weigh that against the original contributions in algebra, optics, and medicine described here.",
          "If you come across Ibn Sina's Canon of Medicine or Ibn al-Haytham's optics referenced in a science history context, connect it to roughly 600 years of continued use in European universities.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What years did the Islamic Golden Age cover?", answer: "Roughly the 8th through the 13th century CE, commonly bounded by the founding of the Abbasid Caliphate around 750 CE and the Mongol destruction of Baghdad in 1258 CE, though scholarship continued elsewhere afterward." },
          { question: "What was the House of Wisdom?", answer: "A royal library and research academy in Baghdad, most active under caliphs Harun al-Rashid and al-Ma'mun (roughly 786-833 CE), where scholars translated Greek, Persian, and Indian texts and conducted original research in mathematics, astronomy, and medicine." },
          { question: "Did the Islamic Golden Age only happen in Baghdad?", answer: "No — Cordoba in Islamic Spain and, later, Cairo were major, independent scholarly centers during overlapping centuries, each under different, sometimes rival, ruling dynasties." },
          { question: "What did al-Khwarizmi contribute to mathematics?", answer: "He systematized algebra as a distinct discipline in a 9th-century Baghdad text, and the words \"algebra\" and \"algorithm\" both trace back to his book title and his own name, respectively." },
          { question: "Why is the Mongol destruction of Baghdad in 1258 considered the end of the Islamic Golden Age?", answer: "It destroyed Baghdad's House of Wisdom and much of the city's scholarly infrastructure, but it marks the end of Baghdad's role specifically — scholarship continued in Cairo, parts of Islamic Spain, and Central Asia after 1258." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
