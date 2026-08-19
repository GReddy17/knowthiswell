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
  title: "Festivals of Light Around the World",
  category: "festivals-culture",
  order: 42,
  subtopic: "festivals-of-light-harvest-and-season",
  tags: ["festivals of light", "diwali", "hanukkah", "christmas lights", "lantern festival", "comparative religion"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Diwali, Hanukkah, Christmas lights, and the Chinese Lantern Festival are separate traditions that share one human pattern: lighting flames against the year's darkest stretch.",
  summary: "Across unrelated cultures and religions, a recurring human pattern shows up every year: lighting flames or lanterns to mark a turn from darkness toward light, at whatever point in the calendar that culture's own tradition places it.",
  sources: [
    { label: "Encyclopaedia Britannica — Diwali", url: "https://www.britannica.com/topic/Diwali" },
    { label: "Encyclopaedia Britannica — Hanukkah", url: "https://www.britannica.com/topic/Hanukkah" },
    { label: "My Jewish Learning — What Is Hanukkah?", url: "https://www.myjewishlearning.com/article/hanukkah-101/" },
    { label: "China Highlights — Lantern Festival", url: "https://www.chinahighlights.com/travelguide/festivals/lantern-festival.htm" },
    { label: "Sweden.se — St. Lucia's Day", url: "https://sweden.se/culture/traditions/lucia" },
  ],
  seeAlso: [
    "festivals-culture/diwali-explained",
    "festivals-culture/winter-solstice-traditions-globally",
    "festivals-culture/harvest-festivals-around-the-world",
    "festivals-culture/new-year-celebrations-around-the-world",
  ],
  glossary: [
    { term: "Festival of light", definition: "A general term for any celebration built around lamps, candles, lanterns, or bonfires as its central symbolic act — not a single tradition, but a pattern that recurs independently across many cultures." },
    { term: "Menorah / Hanukkiah", definition: "The nine-branched candelabrum lit one additional candle each night during Hanukkah's eight nights, using a ninth 'helper' candle (the shamash) to light the others." },
    { term: "Lantern Festival", definition: "The Chinese and broader East Asian festival marking the close of Lunar New Year celebrations, observed by displaying and releasing paper lanterns." },
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
          "Diwali, Hanukkah, Christmas lights, the Chinese Lantern Festival, and St. Lucia's Day are independent traditions, not variations on one 'original' festival of light — each has its own religious or cultural origin story.",
          "Most (though not all) of these fall in the darker months of the Northern Hemisphere's year, which is why the pattern feels so consistent — but the specific date in each tradition is set by that tradition's own calendar, not a shared one.",
          "The common thread across all of them is symbolic, not historical borrowing: light standing in for hope, protection, remembrance, or renewal at a point in the year when daylight is genuinely scarce.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">All over the world, different cultures independently light lamps, candles, or lanterns as the centerpiece of a major festival. <TermLink href="/festivals-culture/diwali-explained">Diwali</TermLink> lights oil lamps across India in October or November. Jewish communities light a menorah for the eight nights of Hanukkah, usually in December. Christmas lights fill streets and homes worldwide in the same month. In China and across East Asia, the Lantern Festival closes out Lunar New Year with glowing paper lanterns in January or February. None of these festivals borrowed the idea from one another — they developed separately, each with its own story, and each landing at a different point on the calendar.</div>}
        detailed={<div className="prose-p">The recurrence of light imagery across unconnected traditions is best explained as convergent cultural development rather than shared origin: independent cultures, facing the same basic experience of shortening days and long nights, arrived at similar symbolic solutions without contact or borrowing. Diwali&apos;s timing is fixed by the Hindu lunisolar calendar (the new-moon night of the month of Kartika); Hanukkah&apos;s eight nights begin on 25 Kislev in the Hebrew calendar, commemorating the rededication of the Second Temple in Jerusalem and the legend of a one-day supply of oil lasting eight days; Christmas lighting traditions trace partly to pre-Christian midwinter customs absorbed into December 25 observance; the Lantern Festival marks the first full moon of the lunar year and the formal end of Lunar New Year celebrations; and St. Lucia&apos;s Day in Scandinavia, observed December 13, combines an early Christian martyr&apos;s feast day with pre-Christian midwinter light customs specific to Sweden. A useful distinction: <TermLink href="/festivals-culture/winter-solstice-traditions-globally">the winter solstice</TermLink> itself is an astronomical event that anchors several of these traditions loosely, but not all festivals of light are solstice festivals — Diwali and the Lantern Festival are governed by lunar calendars unrelated to the solstice and can fall well outside the solstice window.</div>}
      />
      <FootnoteAside>Hanukkah is often called &quot;the Jewish Christmas&quot; in casual Western conversation because of its December timing, but it&apos;s a comparatively minor holiday on the Jewish religious calendar — its prominence in the US grew largely through proximity to Christmas, not equivalent religious weight in Judaism itself.</FootnoteAside>

      <QuickCheck
        question="Why do so many unrelated festivals of light cluster in the darker months of the year?"
        options={[
          { text: "They all descend from a single ancient festival that spread across cultures", correct: false, explanation: "There's no documented common ancestor — Diwali, Hanukkah, Christmas lighting customs, and the Lantern Festival developed independently within their own religious and cultural traditions." },
          { text: "Independent cultures facing long, dark nights arrived separately at light as a meaningful symbol", correct: true, explanation: "Correct. Historians and religious scholars describe this as convergent development — similar human responses to a shared seasonal experience, not borrowing." },
          { text: "It's a coincidence with no explanation historians have offered", correct: false, explanation: "Not quite — while the traditions are independent, historians do offer an explanation: the shared experience of shortening daylight is a well-documented reason many cultures gravitate toward light symbolism around the same general season." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Diwali — a lunar-calendar festival of light (baseline case)</h3>
      <div className="prose-p">Diwali falls on the new-moon night of the Hindu month of Kartika, typically in October or November, and its date shifts on the Gregorian calendar every year because it follows a lunisolar system. Families light rows of small oil lamps called diyas along windowsills and doorways, a practice most commonly traced to the story of Rama, Sita, and Lakshmana&apos;s return to Ayodhya, when villagers are said to have lit lamps to welcome them home. The lamps symbolize light overcoming darkness and good overcoming evil — a theme distinct to Diwali&apos;s own religious narrative, unconnected to any other light festival on this list.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Hanukkah — a fixed ritual sequence with its own historical anchor (variation)</h3>
      <div className="prose-p">Hanukkah commemorates a specific historical and legendary event: the 2nd-century BCE rededication of the Second Temple in Jerusalem after its recapture during the Maccabean Revolt, and the legend that a single day&apos;s supply of oil miraculously burned for eight days. Rather than a single night of lamp-lighting, Hanukkah unfolds over eight nights, with one additional candle lit on a nine-branched menorah (the ninth candle, the shamash, is used to light the others) each night. This is a meaningfully different structure from Diwali&apos;s single main lighting night — the same broad symbol (light overcoming a hostile darkness) but built around its own historical narrative and its own multi-night ritual calendar.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Christmas lights and the Lantern Festival — light as public, secular-adjacent spectacle today (real-world / applied case)</h3>
      <div className="prose-p">Two traditions show how a festival of light can extend well beyond its original religious core into shared public culture. Christmas lighting displays — string lights on houses, public tree-lighting ceremonies, department-store window displays — are now a fixture of December in many countries regardless of individual residents&apos; religious practice. Separately, the Lantern Festival, which closes out Lunar New Year across China, Taiwan, Vietnam, and other East Asian communities, has become a major public spectacle in cities worldwide, with large-scale lantern displays drawing visitors who aren&apos;t marking the holiday religiously at all. In both cases, a specific tradition&apos;s light imagery has become recognizable and enjoyed on a much broader scale than its original observant community — a pattern also visible in how Diwali light displays are increasingly part of public celebrations in cities with large diaspora communities.</div>

      <QuickCheck
        question="Which of these is true of Hanukkah's timing and structure?"
        options={[
          { text: "It always falls on December 25, alongside Christmas", correct: false, explanation: "Hanukkah begins on 25 Kislev in the Hebrew calendar, which shifts relative to the Gregorian calendar each year — it can fall anywhere from late November to late December, and only sometimes overlaps with Christmas." },
          { text: "It is an eight-night observance building up one additional candle each night", correct: true, explanation: "Correct. Hanukkah's defining ritual structure is lighting one more candle on the menorah each of the eight nights, commemorating the legend of the oil that lasted eight days." },
          { text: "It is the most religiously significant holiday on the Jewish calendar", correct: false, explanation: "Hanukkah is meaningful and widely observed, but holidays like Yom Kippur and Passover carry substantially greater religious weight within Judaism — Hanukkah's high visibility in Western countries is largely a product of its December timing near Christmas." },
        ]}
      />

      <DiagramBlock
        title="When five festivals of light fall across the year, and why each date is set independently"
        type="comparison"
        svgSrc="/diagrams/festivals-culture-festivals-of-light-around-the-world-calendar.svg"
        altText="A calendar timeline spanning January through December showing five festivals of light plotted at their approximate dates: the Chinese Lantern Festival in mid-February following Lunar New Year, Diwali in late October to early November on the Hindu lunisolar calendar, St. Lucia's Day fixed on December 13, Hanukkah's eight nights beginning around late November to late December depending on the Hebrew calendar, and Christmas lights concentrated around December 25 — illustrating that each tradition's timing is set by its own independent calendar system rather than one shared date."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating Diwali as 'the' festival of light and everything else as a variant of it.", fix: "Diwali, Hanukkah, Christmas lighting customs, the Lantern Festival, and St. Lucia's Day are independent traditions with separate origins — each is a full example of the same human pattern, not a spinoff of any one of them." },
          { mistake: "Assuming all festivals of light happen at the winter solstice.", fix: "Some do cluster near the solstice (Christmas lights, St. Lucia's Day), but Diwali and the Lantern Festival follow lunar calendars unrelated to the solstice and can fall well outside that window." },
          { mistake: "Calling Hanukkah 'the Jewish Christmas.'", fix: "Hanukkah commemorates a distinct historical and legendary event (the Maccabean Revolt and the temple oil legend) and is a comparatively minor holiday on the Jewish religious calendar — its cultural prominence in Western countries comes from calendar proximity to Christmas, not equivalent religious status." },
        ]}
      />
      <MisconceptionCallout
        myth="Festivals of light are a uniquely Hindu or Diwali-specific tradition that other cultures have picked up or adapted."
        reality={<p>Lighting flames or lanterns as a central festival act developed independently across Hindu, Jewish, Christian, Chinese, and Scandinavian traditions, among others, each with its own origin story and calendar logic. Diwali is one well-documented example of this broader human pattern, not the source of it — there is no evidence any of these traditions borrowed the practice from another.</p>}
      />

      <QuickCheck
        question="What's the most accurate way to describe the relationship between Diwali, Hanukkah, and Christmas lights?"
        options={[
          { text: "They are three names for the same underlying festival", correct: false, explanation: "They are religiously and historically distinct — different origin stories, different calendars, different core rituals." },
          { text: "They are independent traditions that share a common human pattern of using light symbolically during darker months", correct: true, explanation: "Correct. Historians and religious scholars treat this as parallel, independent development rather than one tradition's variation on another." },
          { text: "Only Diwali has genuine religious significance; the others are secular customs that adopted its imagery", correct: false, explanation: "All of the traditions discussed here have their own genuine religious or cultural roots — Hanukkah's Maccabean history, Christmas's Christian and pre-Christian midwinter roots, and the Lantern Festival's place in Lunar New Year observance are each independently significant." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a 'festival of light' described in the news or on social media, check which specific tradition is meant — the phrase covers several unrelated observances, not one event.",
          "Notice the calendar system behind whichever light festival is being discussed — lunar (Diwali, Lantern Festival), lunisolar Hebrew (Hanukkah), or fixed Gregorian (St. Lucia's Day, Christmas) — it explains why the date moves or stays fixed year to year.",
          "If you're attending a light festival celebration outside your own background for the first time, ask what the lighting specifically commemorates in that tradition rather than assuming it maps onto one you already know.",
          "Look up this year's dates for Diwali and Hanukkah in particular — both shift on the Gregorian calendar annually, unlike Christmas or St. Lucia's Day.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are the main festivals of light around the world?", answer: "Widely recognized examples include Diwali (Hindu, Jain, and Sikh), Hanukkah (Jewish), Christmas lighting traditions (Christian and broader secular custom), the Lantern Festival (Chinese and East Asian), and St. Lucia's Day (Scandinavian). Each is an independent tradition with its own origin and calendar." },
          { question: "Are Diwali and Hanukkah connected historically?", answer: "No. They arose in entirely separate religious and cultural contexts — Diwali within Hindu, Jain, and Sikh tradition on the Indian subcontinent, Hanukkah within Jewish history in the ancient Near East. Any resemblance is thematic (light symbolism during a darker season), not historical borrowing." },
          { question: "Why do so many cultures have a light festival around the same time of year?", answer: "Most (not all) cluster in the darker months of the Northern Hemisphere's year, which historians generally explain as convergent development — different cultures independently landing on light as a meaningful symbol during a season with less daylight, rather than one tradition spreading to others." },
          { question: "Is Hanukkah the Jewish version of Christmas?", answer: "No — that's a common Western misconception driven by calendar proximity. Hanukkah commemorates a distinct 2nd-century BCE historical and legendary event and is a comparatively minor holiday on the Jewish religious calendar, unlike Christmas's central place in Christian observance." },
          { question: "Do all festivals of light happen in winter?", answer: "No. Christmas lights and St. Lucia's Day cluster near the December winter solstice, but Diwali (October/November) and the Lantern Festival (usually February) follow lunar calendars set independently of the solstice." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
