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
  title: "Halloween Explained",
  category: "festivals-culture",
  order: 47,
  subtopic: "modern-and-global-celebrations",
  tags: ["halloween", "samhain", "october 31", "modern celebrations"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Halloween traces to the Celtic festival of Samhain and the Christian feast of All Saints' Day, long before it took its modern costume-and-candy form.",
  summary: "Halloween is an October 31 observance rooted in the ancient Celtic festival of Samhain and the Christian feast of All Hallows' Eve, that developed over centuries into today's widely celebrated costume-and-candy holiday.",
  sources: [
    { label: "Encyclopaedia Britannica — Halloween", url: "https://www.britannica.com/topic/Halloween" },
    { label: "Library of Congress — Today in History: October 31", url: "https://www.loc.gov/item/today-in-history/october-31/" },
    { label: "Library of Congress — Headlines & Heroes: The Origins of Halloween Traditions", url: "https://blogs.loc.gov/headlinesandheroes/2021/10/the-origins-of-halloween-traditions/" },
    { label: "Library of Congress — Halloween & Día de Muertos Resources (Research Guide)", url: "https://guides.loc.gov/halloween/introduction" },
  ],
  seeAlso: [
    "festivals-culture/valentines-day-explained",
    "festivals-culture/harvest-festivals-around-the-world",
    "festivals-culture/earth-day-and-modern-awareness-days",
    "festivals-culture/common-festival-myths-and-misconceptions",
  ],
  glossary: [
    { term: "Samhain", definition: "An ancient Celtic festival marking the end of the harvest and the start of winter, observed around October 31-November 1, widely cited by Britannica and the Library of Congress as a root of modern Halloween." },
    { term: "All Hallows' Eve", definition: "The night before All Saints' Day (November 1), the Christian feast day from which the word \"Halloween\" derives; the Church's calendar for honoring saints and the dead came to overlap with the timing of Samhain." },
    { term: "Jack-o'-lantern", definition: "A carved lantern tradition rooted in British Isles turnip-carving folklore (the \"Stingy Jack\" story), adapted to carved pumpkins by Irish immigrants in the United States, where pumpkins were native and more available." },
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
          "Halloween's roots trace to the ancient Celtic festival of Samhain, marking the end of the harvest and start of winter, and to the Christian feast of All Saints' Day — the name itself comes from \"All Hallows' Eve,\" per Britannica and the Library of Congress.",
          "Familiar customs have their own separate, traceable histories: jack-o'-lanterns come from British Isles turnip-carving folklore, and trick-or-treating grew out of a much older door-to-door practice tied to praying for the dead.",
          "Halloween became the highly commercial, costume-and-candy holiday familiar in the US largely after 19th-century Irish immigration brought Samhain-descended traditions to America, where the practice of trick-or-treating became widely codified in the 1920s, per the Library of Congress.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Halloween falls on October 31 each year and is widely marked, especially in the US, by costumes, carved pumpkins, and children going door-to-door trick-or-treating for candy. The name comes from &quot;All Hallows&apos; Eve,&quot; the night before the Christian feast of All Saints&apos; Day, but many of its customs trace further back to <TermLink href="/festivals-culture/halloween-explained">Samhain</TermLink>, an ancient Celtic festival marking the turn from harvest season into winter.</div>}
        detailed={<div className="prose-p">Per Britannica and the Library of Congress, Halloween developed from a combination of the Celtic festival of Samhain, observed around October 31-November 1 in Ireland and the British Isles as summer&apos;s end and the start of the Celtic new year, and the Christian feast of <TermLink href="/festivals-culture/halloween-explained">All Hallows&apos; Eve</TermLink>, the vigil before All Saints&apos; Day (November 1) and All Souls&apos; Day (November 2). Samhain traditions included bonfires and the belief that the boundary between the living and the dead grew thin, prompting practices meant to ward off or honor spirits. Two of the most recognizable modern customs have their own distinct histories layered on top of that base: the <TermLink href="/festivals-culture/halloween-explained">jack-o&apos;-lantern</TermLink> originates in British Isles folklore about a trickster called &quot;Stingy Jack,&quot; carved originally from turnips rather than pumpkins, and trick-or-treating descends from &quot;souling&quot; and &quot;guising,&quot; medieval door-to-door practices where people offered prayers, songs, or small performances in exchange for food. An edge case worth knowing: pumpkin carving specifically is an American adaptation — Irish immigrants brought turnip-carving folklore to the US in the 19th century, and pumpkins, which are native to North America and easier to carve, became the practical substitute.</div>}
      />
      <FootnoteAside>Trick-or-treating as a widespread, codified American practice is younger than people often assume — the Library of Congress notes it caught on broadly in the US only in the 1920s, after 19th-century Irish immigration had already brought Samhain-descended customs into American communities.</FootnoteAside>
      <p>
      That layered history — a Celtic harvest festival, a Christian feast day, and specific American immigration-era adaptations — is worth keeping in mind before looking at how the holiday plays out in practice today.
      </p>

      <QuickCheck
        question="According to Britannica and the Library of Congress, what are Halloween's main historical roots?"
        options={[
          { text: "It was invented in the United States in the 20th century as a candy-industry marketing holiday", correct: false, explanation: "The commercial, candy-focused American version is a later layer. The holiday's roots trace much further back, to the Celtic festival of Samhain and the Christian feast of All Hallows' Eve." },
          { text: "The ancient Celtic festival of Samhain and the Christian feast of All Hallows' Eve, later shaped by 19th-century Irish immigration to the US", correct: true, explanation: "Correct, per Britannica and the Library of Congress. Halloween developed from a combination of these pre-Christian and Christian traditions, carried to America and adapted there." },
          { text: "A single ancient Roman festival with no connection to Ireland, the British Isles, or Christianity", correct: false, explanation: "Halloween's documented roots are Celtic and Christian, centered on Ireland and the British Isles, not a Roman festival." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A typical American Halloween night (baseline case)</h3>
      <div className="prose-p">Children put on costumes and go door-to-door in their neighborhood saying &quot;trick or treat&quot; to collect candy, while houses are decorated with carved jack-o&apos;-lanterns, fake cobwebs, and other seasonal decorations. This pattern — costumes, carved lanterns, a door-to-door exchange for treats — is the direct, if commercialized, descendant of the older guising and souling customs described above.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Día de los Muertos in Mexico and beyond (a distinct, related exception)</h3>
      <div className="prose-p">Día de los Muertos (Day of the Dead), observed November 1-2 in Mexico and other parts of Latin America, falls at nearly the same time of year and shares the broad theme of honoring the dead — but per the Library of Congress&apos;s own research guide, it is a distinct holiday with its own separate Mesoamerican and Catholic roots, marked with altars, marigolds, and family gravesite visits rather than trick-or-treating. It is not simply &quot;Mexican Halloween;&quot; treating it that way flattens a tradition with its own independent history.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Halloween as a global commercial holiday today (real-world / applied case)</h3>
      <div className="prose-p">Halloween has spread well beyond the US and Ireland in recent decades, with costume parties, trick-or-treating, and themed retail displays now common in parts of the UK, Canada, Australia, and elsewhere, and increasingly adopted in a more secular, commercial form in countries with no historical Samhain or All Hallows&apos; Eve tradition of their own. That global commercial spread is a genuinely modern phenomenon, distinct from — but built on top of — the much older Celtic and Christian layers of the holiday&apos;s history.</div>

      <QuickCheck
        question="How does Día de los Muertos (Day of the Dead) relate to Halloween?"
        options={[
          { text: "It's simply the Mexican name for Halloween — the same holiday under a different name", correct: false, explanation: "This flattens a distinct tradition. Per the Library of Congress's research guide, Día de los Muertos has its own separate Mesoamerican and Catholic roots and its own customs, even though it falls close to Halloween on the calendar." },
          { text: "It falls around the same time of year and shares the broad theme of honoring the dead, but has separate origins and its own distinct traditions", correct: true, explanation: "Correct. The two observances are close in timing and theme but are documented as historically and culturally distinct holidays." },
          { text: "It has no connection whatsoever to Halloween and is never discussed alongside it", correct: false, explanation: "The two are frequently discussed together because of their calendar proximity and shared theme of honoring the dead — the point is that they're related in timing and theme but not the same holiday." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Halloween: from Samhain to a modern commercial holiday"
        type="flow"
        svgSrc="/diagrams/festivals-culture-halloween-explained-timeline.svg"
        altText="Horizontal timeline showing ancient Celtic Samhain marking the end of harvest and start of winter in Ireland and the British Isles, the Christian church's All Hallows' Eve and All Saints' Day observances overlapping with that date, medieval souling and guising door-to-door practices, 19th-century Irish immigration carrying these customs to the United States, trick-or-treating becoming a widely codified American practice in the 1920s, and Halloween's spread today as a largely secular, commercial holiday in many countries."
      />
      <p>
      Set out this way, Halloween reads as a holiday built in layers over many centuries, rather than a single invention — a pattern that shows up across a lot of modern celebrations once you look at their documented history.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming Halloween is a purely American invention with no older roots.", fix: "Its roots trace back to the Celtic festival of Samhain and the Christian feast of All Hallows' Eve in Ireland and the British Isles, long before it took its familiar commercial shape in the US." },
          { mistake: "Treating trick-or-treating as though it has always existed in its current costumed-candy-exchange form.", fix: "It evolved from older souling and guising practices and only became a widely codified American practice in the 1920s, per the Library of Congress." },
          { mistake: "Conflating Halloween with Día de los Muertos (Day of the Dead) as if they're the same holiday.", fix: "They fall around the same time of year and both concern honoring the dead, but per the Library of Congress they have distinct religious and cultural origins and separate traditions." },
        ]}
      />
      <MisconceptionCallout
        myth="Halloween is purely an American commercial holiday with no older cultural or religious roots."
        reality={<p>Britannica and the Library of Congress both document Halloween as descending from the ancient Celtic festival of Samhain and the Christian feast of All Hallows&apos; Eve (the vigil before All Saints&apos; Day), practiced in Ireland and the British Isles centuries before the holiday existed in America at all. The costume-and-candy commercial form familiar in the US today is a real, and much more recent, layer — trick-or-treating became widely codified there only in the 1920s — but it sits on top of much older cultural and religious history, not in place of it.</p>}
      />

      <QuickCheck
        question="Which best describes the documented relationship between Samhain and modern Halloween?"
        options={[
          { text: "There is no real connection — Samhain is an unrelated ancient festival that historians mention only by coincidence", correct: false, explanation: "Britannica and the Library of Congress both cite Samhain directly as a documented root of Halloween, not a coincidental or unrelated festival." },
          { text: "Samhain, an ancient Celtic harvest/new-year festival, combined over time with the Christian feast of All Hallows' Eve to form the basis of what became Halloween", correct: true, explanation: "Correct, per Britannica and the Library of Congress. The holiday developed from this combination of pre-Christian and Christian traditions, later shaped further by 19th- and 20th-century American customs." },
          { text: "Samhain was itself an American holiday later exported to Ireland and the British Isles", correct: false, explanation: "This reverses the actual documented direction — Samhain originated in Ireland and the British Isles and its traditions were later carried to America, chiefly through 19th-century Irish immigration." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you carve or see a jack-o'-lantern, remember the tradition started with carved turnips in the British Isles, not pumpkins — pumpkins were an American adaptation.",
          "When trick-or-treating comes up, notice that its costumed, door-to-door candy-exchange form is a 1920s-era American development, layered on top of much older souling and guising customs.",
          "If you see Halloween and Día de los Muertos displayed or discussed together, notice whether the source treats them as the same holiday or as related-but-distinct traditions — the second is the historically accurate framing.",
          "Notice how Halloween's spread to countries with no historical Samhain or All Hallows' Eve tradition of their own reflects a distinctly modern, commercial layer of the holiday's history.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the origin of Halloween?", answer: "Halloween developed from a combination of the ancient Celtic festival of Samhain, which marked the end of the harvest and start of winter, and the Christian feast of All Hallows' Eve, the night before All Saints' Day, per Britannica and the Library of Congress." },
          { question: "Why is it called Halloween?", answer: "The name comes from \"All Hallows' Eve\" — \"hallow\" being an older word for saint — the night before the Christian feast of All Saints' Day on November 1." },
          { question: "Where does trick-or-treating come from?", answer: "It descends from medieval \"souling\" and \"guising\" practices, where people went door-to-door offering prayers, songs, or performances in exchange for food, and became a widely codified American practice only in the 1920s, per the Library of Congress." },
          { question: "Is Halloween the same as Día de los Muertos (Day of the Dead)?", answer: "No. They fall around the same time of year and both concern honoring the dead, but per the Library of Congress's research guide, they have distinct Mesoamerican, Catholic, and Celtic/Christian origins and separate customs." },
          { question: "Why are pumpkins carved for Halloween instead of turnips?", answer: "The jack-o'-lantern tradition began with carved turnips in the British Isles. Irish immigrants brought the custom to the US in the 19th century, where pumpkins, native to North America and easier to carve, became the practical substitute." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
