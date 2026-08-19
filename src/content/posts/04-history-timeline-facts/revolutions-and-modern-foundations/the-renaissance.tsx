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
  title: "The Renaissance",
  category: "history-timeline-facts",
  order: 20,
  subtopic: "revolutions-and-modern-foundations",
  tags: ["renaissance", "italian renaissance", "humanism", "medici", "leonardo da vinci", "european history", "art history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The Renaissance was a roughly 14th-to-17th-century revival of classical learning and art that began in Italian city-states and built directly on medieval foundations.",
  summary: "The Renaissance was a period of renewed interest in classical Greek and Roman learning, art, and humanism that began in the Italian city-states around the 14th century and spread across Europe through the 17th century, reshaping art, science, and how people thought about human potential.",
  sources: [
    { label: "Encyclopaedia Britannica — Renaissance", url: "https://www.britannica.com/event/Renaissance" },
    { label: "The Metropolitan Museum of Art — Heilbrunn Timeline of Art History: Italian Renaissance", url: "https://www.metmuseum.org/toah/hd/renc/hd_renc.htm" },
    { label: "The J. Paul Getty Museum — Renaissance Art collection overview", url: "https://www.getty.edu/art/collection/highlights/renaissance-and-baroque-art/" },
  ],
  seeAlso: [
    "history-timeline-facts/the-middle-ages-in-europe-overview",
    "history-timeline-facts/the-scientific-revolution",
    "history-timeline-facts/ancient-rome",
  ],
  glossary: [
    { term: "Humanism", definition: "A Renaissance intellectual movement emphasizing the study of classical texts, human potential, and reason, alongside (not necessarily against) religious belief." },
    { term: "Patronage", definition: "Financial and political support from wealthy individuals, families, or institutions — like Florence's Medici family — that funded artists, scholars, and architects." },
    { term: "Linear perspective", definition: "A mathematical technique developed by Renaissance artists, notably Filippo Brunelleschi, for representing three-dimensional depth accurately on a flat surface." },
    { term: "Polymath (\"Renaissance man\")", definition: "A person with expertise across many different fields, epitomized by figures like Leonardo da Vinci, who worked as a painter, engineer, and anatomist." },
    { term: "Vernacular", definition: "A region's everyday spoken language (like Italian or English), as opposed to Latin — increasingly used for serious literature during the Renaissance." },
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
          "The Renaissance (roughly 14th to 17th century) began in the wealthy city-states of Italy, especially Florence, and spread north and west across Europe over the following two centuries.",
          "It was not a sudden break from the Middle Ages — it built directly on medieval universities, trade networks, and preserved classical texts, many of which reached Western Europe through Byzantine and Islamic scholarship.",
          "\"Renaissance\" means \"rebirth\" in French, referring to a revival of interest in ancient Greek and Roman learning, art, and ideas about human potential, not the invention of something entirely new.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/history-timeline-facts/the-renaissance">Renaissance</TermLink> was a period of renewed interest in the art, literature, and learning of ancient Greece and Rome, starting in Italy in the 1300s and spreading across Europe through the 1600s. Wealthy merchant families, especially the Medici in Florence, paid artists and scholars to produce paintings, sculpture, architecture, and books that celebrated human skill, observation, and reason alongside traditional religious subjects. Artists like Leonardo da Vinci and Michelangelo, and thinkers who studied recovered classical texts, helped shift European culture toward valuing individual achievement, direct observation of nature, and confidence in what human beings could figure out and create.</div>}
        detailed={<div className="prose-p">The Renaissance is conventionally split into phases: an Early Renaissance centered on Florence (roughly 1400–1490s), driven by patrons like the Medici and innovations such as Filippo Brunelleschi&apos;s dome for Florence Cathedral (completed 1436) and Leon Battista Alberti&apos;s codification of linear perspective; a High Renaissance (roughly 1490s–1520s) centered more on Rome under papal patronage, producing Leonardo, Michelangelo, and Raphael&apos;s best-known work; and a Northern Renaissance across France, the Low Countries, Germany, and England that developed distinct characteristics — greater emphasis on religious reform and everyday domestic detail (Jan van Eyck&apos;s oil-painting technique), and, critically, the spread of Johannes Gutenberg&apos;s movable-type printing press (working by the 1440s in Mainz), which let ideas circulate far faster and cheaper than hand-copied manuscripts ever could. <TermLink href="/history-timeline-facts/the-renaissance">Humanism</TermLink> — the intellectual backbone of the period — was not secular in the modern sense; most humanist scholars remained devout, but they insisted classical Latin and Greek texts, rhetoric, and ethics were worth studying on their own terms rather than only as tools for theology. This is also where the myth of a clean break from the &quot;Dark Ages&quot; falls apart: medieval Islamic scholars in Baghdad, Cairo, and Córdoba had preserved, translated, and expanded on Greek philosophy and science for centuries before it reached Renaissance Italy, and medieval European universities (Bologna, Paris, Oxford, all founded well before 1300) had already built a serious scholarly tradition the Renaissance grew out of rather than replaced.</div>}
      />
      <FootnoteAside>Michelangelo did not paint the Sistine Chapel ceiling lying flat on his back, despite the popular image (and its dramatization in film). He designed a custom scaffold that let him stand upright, tilting his head backward and painting overhead for roughly four years (1508–1512) — physically brutal work, but not the reclining pose most people picture.</FootnoteAside>
      <p>
      That gap between the popular image and the documented reality is worth keeping in mind, because the next question — what actually changed during the Renaissance, and how unevenly it spread — has a similarly more complicated answer than the tidy version most people learn.
      </p>

      <QuickCheck
        question="What does the historical evidence say about the Renaissance's relationship to the medieval period that came before it?"
        options={[
          { text: "It was a total, sudden break — Europe went from ignorance to enlightenment almost overnight", correct: false, explanation: "This is a popular but inaccurate framing. The Renaissance built on medieval universities, trade networks, and classical texts preserved and expanded by earlier scholars." },
          { text: "It built directly on medieval scholarship and classical texts preserved through Byzantine and Islamic scholarship, developing gradually over generations", correct: true, explanation: "Correct. Medieval universities, Byzantine manuscript preservation, and Islamic Golden Age scholarship all fed directly into what became the Renaissance — it was a gradual intensification and redirection of existing scholarly traditions, not a clean break." },
          { text: "It happened only in religious institutions and had no connection to earlier secular medieval learning", correct: false, explanation: "The opposite is closer to true — much Renaissance scholarship depended on medieval universities and monastic manuscript preservation that came before it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Florence and the Medici (baseline case)</h3>
      <div className="prose-p">
      Florence in the early 1400s was a wealthy trading and banking city, and the Medici family — who built their fortune through banking — became the era&apos;s defining patrons, funding artists like Botticelli and Michelangelo and scholars who translated and studied recovered classical Greek texts. Brunelleschi&apos;s dome for the Florence Cathedral, completed in 1436 without the use of traditional wooden scaffolding-support techniques, is often cited as an engineering and artistic landmark that captures the period&apos;s combination of classical study, mathematical precision, and civic ambition. Patronage like this wasn&apos;t pure generosity — funding art and scholarship was also a way for banking families to display wealth, build political influence, and be remembered.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The Northern Renaissance — a genuinely different flavor (variation)</h3>
      <div className="prose-p">
      North of the Alps, the Renaissance took on distinct characteristics rather than simply copying Italy&apos;s model. Painters like Jan van Eyck in Flanders refined oil-painting techniques that allowed extraordinary realism in everyday domestic detail, and the movement was more closely tied to religious reform — the same environment that produced Erasmus&apos;s critical scholarship on biblical texts also produced Martin Luther&apos;s Ninety-Five Theses (1517), which triggered the Protestant Reformation. Gutenberg&apos;s printing press, developed in Mainz, Germany, by the 1440s, was itself a Northern European innovation, and it changed the pace of the entire movement: printed books meant ideas spread across the continent within years instead of decades, reaching a far wider audience than aristocratic patrons and university scholars alone.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How Renaissance ideas still show up today (real-world / applied case)</h3>
      <div className="prose-p">
      Renaissance humanism&apos;s emphasis on studying a broad range of subjects — language, history, art, ethics, natural science — is the direct ancestor of the modern &quot;liberal arts&quot; approach to education. Linear perspective, the technique Renaissance artists formalized for representing depth, still underlies how photographers, filmmakers, architects, and video-game designers construct realistic three-dimensional space on a flat screen or page. And the phrase &quot;Renaissance man&quot; (or polymath) is still the go-to compliment for anyone genuinely skilled across very different fields — a direct nod to figures like Leonardo da Vinci, who worked seriously as a painter, engineer, and anatomist all at once.
      </div>

      <QuickCheck
        question="What made the Northern Renaissance meaningfully different from the Italian Renaissance, rather than just a delayed copy of it?"
        options={[
          { text: "It had no connection to Italy's artistic developments at all", correct: false, explanation: "There was real cross-influence between north and south — the two weren't isolated from each other. The difference was in emphasis and technique, not total separation." },
          { text: "It developed distinct techniques (like Northern oil-painting realism), was more closely tied to religious reform, and centered the spread of the printing press", correct: true, explanation: "Correct. The Northern Renaissance had its own technical innovations, a stronger religious-reform current that fed into the Protestant Reformation, and was the region where Gutenberg's press — arguably the era's most consequential technology — actually developed." },
          { text: "It happened entirely before the Italian Renaissance began", correct: false, explanation: "The timeline runs the other way — the Italian Renaissance is generally dated earlier (starting around the 1300s–1400s), with the Northern Renaissance developing and peaking somewhat later." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The Renaissance: from medieval roots to the Scientific Revolution"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-the-renaissance-timeline.svg"
        altText="Horizontal timeline showing late medieval roots feeding into the Early Renaissance centered in Florence from about 1400 to the 1490s, the High Renaissance centered in Rome from the 1490s to the 1520s, the Northern Renaissance spreading through the 1500s including the spread of the printing press and the start of the Protestant Reformation in 1517, and the period transitioning into the Scientific Revolution by the early to mid 1600s."
      />
      <p>
      The dates on this timeline are deliberately approximate and overlapping, not hard cutoffs — historians disagree at the edges, and the Renaissance didn&apos;t end so much as it gradually fed directly into the Scientific Revolution and the Reformation, both of which inherited its habit of questioning inherited authority and going back to original sources.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating the Renaissance as a sudden, total break from a supposedly ignorant medieval Europe.", fix: "It grew gradually out of medieval universities, trade networks, and classical texts preserved by Byzantine and Islamic scholars — a continuation and redirection of existing scholarship, not a clean start from zero." },
          { mistake: "Assuming the Renaissance looked the same everywhere in Europe.", fix: "The Italian and Northern Renaissance had real differences in technique, patronage, and emphasis — Northern Europe leaned harder into religious reform and print culture, Italy into classical revival under wealthy urban patrons." },
          { mistake: "Picturing Renaissance art and thinking as purely secular, with no religious content.", fix: "Most Renaissance artists and scholars, including Michelangelo and Erasmus, remained devout — humanism studied classical texts alongside religious belief, not as a replacement for it." },
        ]}
      />
      <MisconceptionCallout
        myth="The Renaissance happened suddenly, with little connection to the medieval period that preceded it."
        reality={<p>The Renaissance developed gradually across generations, built on foundations laid well before the 14th century: medieval European universities (Bologna, founded around 1088, and Paris and Oxford by the 12th century) had already established serious scholarly traditions, and much of the classical Greek philosophy and science later &quot;rediscovered&quot; in Renaissance Italy had been preserved, translated, and actively expanded upon by Byzantine and Islamic Golden Age scholars for centuries beforehand. The Renaissance intensified and redirected existing intellectual momentum — it didn&apos;t create it from nothing.</p>}
      />

      <QuickCheck
        question="Which of these best explains why classical Greek and Roman texts were available for Renaissance scholars to study in the first place?"
        options={[
          { text: "They had been continuously preserved, translated, and studied by Byzantine and Islamic Golden Age scholars for centuries before reaching Renaissance Italy", correct: true, explanation: "Correct. Manuscript preservation in Constantinople and translation/expansion work by Islamic Golden Age scholars (in centers like Baghdad and Córdoba) kept classical learning alive and growing long before it fed into the Italian Renaissance." },
          { text: "They were newly discovered, buried artifacts unearthed by archaeologists in the 1400s", correct: false, explanation: "Archaeology as a discipline didn't exist yet in this form — these were textual manuscripts that had been actively read, copied, and studied by earlier scholars, not buried physical discoveries." },
          { text: "European monasteries in Italy had kept them completely untouched and unread since Roman times", correct: false, explanation: "Some Western European monasteries did preserve certain texts, but a great deal of classical learning, especially in science and philosophy, survived and was actively developed further through Byzantine and Islamic scholarship, not passive Italian storage alone." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a Renaissance painting, look for evidence of linear perspective — converging lines that make a flat surface look three-dimensional, a technique formalized during this period.",
          "When someone calls the medieval period the \"Dark Ages,\" remember the Renaissance depended directly on medieval universities and Islamic Golden Age scholarship, not a void that came before it.",
          "Notice how often \"Renaissance man\" gets used as a compliment — it's a direct callback to polymaths like Leonardo da Vinci working across painting, engineering, and anatomy at once.",
          "Read the related entry on the Scientific Revolution to see exactly how Renaissance habits of observation and questioning authority fed directly into early modern science.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "When did the Renaissance start and end?", answer: "Historians generally date the Renaissance from around the 14th century (with roots in the 1300s Italy) through the 17th century, though exact dates vary by region — the Italian Renaissance is usually placed earliest, and the Northern Renaissance somewhat later, transitioning gradually into the Scientific Revolution." },
          { question: "Why did the Renaissance start in Italy?", answer: "Italian city-states like Florence, Venice, and Rome were wealthy trading and banking centers with surviving Roman ruins, access to recovered classical texts, and wealthy merchant families like the Medici willing to fund artists and scholars — a combination of capital, classical heritage, and civic pride that made Italy fertile ground." },
          { question: "What is the difference between the Italian and Northern Renaissance?", answer: "The Italian Renaissance, centered on Florence and later Rome, emphasized classical revival and formal techniques like linear perspective under wealthy urban patronage. The Northern Renaissance, across France, the Low Countries, Germany, and England, developed distinct oil-painting realism, was more closely tied to religious reform, and centered the spread of Gutenberg's printing press." },
          { question: "Who were the most important figures of the Renaissance?", answer: "Key figures include artists Leonardo da Vinci, Michelangelo, and Raphael; humanist scholars like Erasmus; patrons like Florence's Medici family; and Johannes Gutenberg, whose printing press (working by the 1440s) accelerated how quickly Renaissance ideas spread." },
          { question: "What does the word \"Renaissance\" actually mean?", answer: "Renaissance is French for \"rebirth.\" It refers to a renewed interest in the art, literature, and philosophy of ancient Greece and Rome, and confidence in human observation and achievement, rather than the invention of an entirely new culture from scratch." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
