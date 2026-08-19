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
  title: "Christmas in India & Globally",
  category: "festivals-culture",
  order: 9,
  subtopic: "major-indian-festivals",
  tags: ["christmas", "christian festivals", "indian festivals", "global festivals"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Christmas marks the Christian celebration of Jesus Christ's birth on December 25, observed with distinct regional customs both across India and worldwide.",
  summary: "Christmas is the Christian festival commemorating the birth of Jesus Christ, observed on December 25 by most Western churches, with customs that vary widely both within India's diverse Christian communities and across the world.",
  sources: [
    { label: "Encyclopaedia Britannica — Christmas", url: "https://www.britannica.com/topic/Christmas" },
    { label: "BBC Religion — Christianity: Christmas", url: "https://www.bbc.co.uk/religion/religions/christianity/holydays/christmas.shtml" },
    { label: "Press Information Bureau, Government of India — Christmas in India", url: "https://pib.gov.in" },
  ],
  seeAlso: [
    "festivals-culture/diwali-explained",
    "festivals-culture/onam",
    "festivals-culture/easter-explained",
    "festivals-culture/regional-harvest-festivals-of-india",
  ],
  glossary: [
    { term: "Advent", definition: "The four-week period of preparation and anticipation leading up to Christmas in the Christian liturgical calendar." },
    { term: "Christmas Eve", definition: "December 24, the night before Christmas Day, marked in many traditions with a midnight or evening church service." },
    { term: "Nativity scene", definition: "A model or display depicting the birth of Jesus, traditionally including Mary, Joseph, the infant Jesus, shepherds, and the three wise men." },
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
          "Christmas commemorates the birth of Jesus Christ and is observed on December 25 by most Western and many Eastern churches, though some Orthodox churches mark it on January 7.",
          "India has one of the oldest Christian populations in the world, and Christmas customs there vary significantly by region and community rather than following a single national pattern.",
          "Globally, Christmas customs vary widely by country and denomination — from the specific date observed to the central meal, decorations, and gift-giving figure involved.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Christmas is the Christian festival marking the birth of Jesus Christ, celebrated on December 25 by most churches. It is preceded by <TermLink href="/festivals-culture/christmas-in-india-and-globally">Advent</TermLink>, a four-week preparation period, and typically includes church services, a <TermLink href="/festivals-culture/christmas-in-india-and-globally">Nativity scene</TermLink>, family meals, decorated trees, and gift-giving. In India, it is celebrated by the country&apos;s Christian communities and, in many cities, more broadly as a public and commercial season.</div>}
        detailed={<div className="prose-p">December 25 was not specified in the biblical accounts of Jesus&apos;s birth; historians generally trace the date&apos;s establishment to the early Christian church in the 4th century, and there remains scholarly debate over exactly how the date was fixed, with theories ranging from an calculation based on the traditional date of the crucifixion to an adaptation of existing Roman winter-solstice observances. Most Western churches (Roman Catholic and Protestant) and many Eastern churches follow the Gregorian calendar and observe December 25, while several Orthodox churches — including the Russian and some parts of the Ethiopian and Coptic churches — follow the older Julian calendar for religious dates, placing Christmas on January 7 by the Gregorian reckoning. In India, Christian communities are old and regionally distinct: Kerala&apos;s Saint Thomas Christians trace their tradition back to the arrival of the apostle Thomas in the 1st century CE according to church tradition, Goa has a strong Roman Catholic heritage from Portuguese colonial rule, and Northeast India (particularly Nagaland, Mizoram, and Meghalaya) has large Christian-majority populations resulting from 19th- and 20th-century missionary activity — each brings distinct regional customs (specific foods, music, decorations) to the same December 25 observance.</div>}
      />
      <FootnoteAside>Christmas is a gazetted national holiday in India for all citizens, not only Christians — one of the ways the Indian state calendar formally recognizes major festivals across the country&apos;s different religious communities.</FootnoteAside>

      <QuickCheck
        question="Why do some Christian churches observe Christmas on January 7 rather than December 25?"
        options={[
          { text: "They believe Jesus was actually born on that date", correct: false, explanation: "The difference isn't about a disagreement over the actual birth date — it comes from which calendar system (Julian vs. Gregorian) a church uses to fix its religious dates." },
          { text: "They follow the older Julian calendar for religious dates, which falls about 13 days behind the Gregorian calendar", correct: true, explanation: "Correct. Churches such as the Russian Orthodox Church use the Julian calendar for their liturgical calendar, so their 'December 25' lands on January 7 by the Gregorian calendar most countries use for civil dates." },
          { text: "It is a regional custom specific to India with no connection to calendar systems", correct: false, explanation: "This isn't an India-specific practice — it applies to Orthodox churches in Russia and elsewhere that use the Julian calendar for religious observances, regardless of location." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Christmas in a Kerala Christian household (baseline case)</h3>
      <div className="prose-p">Families attend a midnight or morning church service on Christmas Eve or Christmas Day, decorate homes with star-shaped lanterns and small oil lamps rather than only imported evergreen imagery, and prepare regional dishes alongside more widely recognized Christmas foods like plum cake. Carol singing groups often go house to house in Christian neighborhoods in the days leading up to the holiday, a practice with deep roots in Kerala&apos;s centuries-old Christian communities.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Christmas in Northeast India — a regional variation</h3>
      <div className="prose-p">In states like Nagaland and Mizoram, where Christian populations are a large majority as a result of 19th- and 20th-century missionary activity, Christmas is a major public and civic event rather than a minority-community observance — towns hold large public gatherings, communal feasts, and multi-day church programs. This is a genuine structural difference from most of India, where Christians are a smaller share of the population, and it shows how the same festival&apos;s public scale depends heavily on local demographics rather than the religious content changing.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Christmas as a global and partly secular season (real-world / applied case)</h3>
      <div className="prose-p">Outside explicitly Christian households, Christmas has also become a widely observed commercial and cultural season in many countries with small Christian populations — Christmas lights, trees, and gift-giving appear in shopping districts in cities like Tokyo, Mumbai, and Seoul without necessarily carrying religious meaning for everyone participating. This mirrors a broader pattern seen with other major festivals (Diwali light displays, Holi color runs) where a religious festival&apos;s visual and commercial elements spread more widely than the religious observance itself.</div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming all Christian churches celebrate Christmas on December 25.", fix: "Most Western and many Eastern churches do, but several Orthodox churches follow the Julian calendar for religious dates, placing Christmas on January 7 by the Gregorian reckoning." },
          { mistake: "Treating Indian Christmas customs as a single uniform national tradition.", fix: "India's Christian communities are regionally distinct — Kerala's Saint Thomas Christian tradition, Goa's Portuguese Catholic heritage, and Northeast India's missionary-era Christian-majority states each carry different customs." },
          { mistake: "Assuming December 25 was specified as Jesus's birth date in the biblical accounts.", fix: "The biblical accounts don't specify a date; December 25 was established by the early Christian church, and historians still debate exactly how the date was fixed." },
        ]}
      />
      <MisconceptionCallout
        myth="Christmas is celebrated the same way, on the same date, by all Christians worldwide."
        reality={<p>While December 25 is the most widely observed date, several Orthodox churches that follow the Julian calendar for religious dates mark Christmas on January 7 instead, and the customs attached to the holiday — foods, decorations, the specific gift-giving figure, whether the main meal is Christmas Eve or Christmas Day — vary substantially by country, denomination, and region, including within India&apos;s own diverse Christian communities.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a January 7 Christmas mentioned, remember it's usually an Orthodox church following the Julian calendar for religious dates, not a different holiday.",
          "If you're in India around December 25, notice how the scale of public celebration shifts by region — it's a major civic event in Northeast India and a household/community one in most other states.",
          "When you see Christmas lights or trees in a country with a small Christian population, consider that the display may be participating in a shared commercial season rather than a religious observance.",
          "Ask a Christian friend or colleague what their family's specific Christmas Eve vs. Christmas Day traditions are — the balance between the two nights varies by denomination and country.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why is Christmas celebrated on December 25?", answer: "The biblical accounts of Jesus's birth don't specify a date; December 25 was established by the early Christian church by the 4th century, though historians still debate exactly how that specific date came to be fixed." },
          { question: "Do all Christians celebrate Christmas on the same day?", answer: "Most Western and many Eastern churches observe December 25, but several Orthodox churches follow the older Julian calendar for religious dates, which places their Christmas on January 7 by the Gregorian calendar." },
          { question: "Is Christmas widely celebrated in India?", answer: "Yes — India has old, regionally distinct Christian communities (notably in Kerala, Goa, and Northeast India), Christmas is a national gazetted holiday, and in many cities it is also marked as a broader public and commercial season." },
          { question: "What is the difference between Christmas Eve and Christmas Day?", answer: "Christmas Eve is December 24, often marked with a midnight or evening church service and, in some traditions, the main family meal; Christmas Day, December 25, is the main day of celebration in most traditions, including gift-giving." },
          { question: "Is Christmas only a religious holiday?", answer: "Its origin and core meaning are explicitly Christian, but in many countries the season's decorations, gift-giving, and public displays are also widely observed by people outside the Christian faith, similar to how other major religious festivals have gained broader cultural reach." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
