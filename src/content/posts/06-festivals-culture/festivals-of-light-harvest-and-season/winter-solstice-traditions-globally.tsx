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
  title: "Winter Solstice Traditions Globally",
  category: "festivals-culture",
  order: 45,
  subtopic: "festivals-of-light-harvest-and-season",
  tags: ["winter solstice", "yule", "dongzhi", "st lucia's day", "saturnalia"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The winter solstice is the year's shortest day in one hemisphere and longest in the other — a single astronomical event marked by very different traditions worldwide.",
  summary: "The winter solstice is the astronomical moment when a hemisphere is tilted furthest from the sun, producing that hemisphere's shortest day and longest night — a single global event that different cultures have marked with independent traditions like Yule, Dongzhi, and St. Lucia's Day.",
  sources: [
    { label: "Encyclopaedia Britannica — Winter Solstice", url: "https://www.britannica.com/science/winter-solstice" },
    { label: "Encyclopaedia Britannica — Yule", url: "https://www.britannica.com/topic/Yule" },
    { label: "Encyclopaedia Britannica — Dongzhi Festival", url: "https://www.britannica.com/topic/Dongzhi-Festival" },
    { label: "Sweden.se — St. Lucia's Day", url: "https://sweden.se/culture/traditions/lucia" },
    { label: "English Heritage — Stonehenge and the Solstice", url: "https://www.english-heritage.org.uk/visit/places/stonehenge/things-to-do/solstice/" },
  ],
  seeAlso: [
    "festivals-culture/festivals-of-light-around-the-world",
    "festivals-culture/new-year-celebrations-around-the-world",
    "festivals-culture/harvest-festivals-around-the-world",
  ],
  glossary: [
    { term: "Solstice", definition: "One of two points in the year (roughly June 21 and December 21) when a hemisphere is tilted at its maximum toward or away from the sun, producing that hemisphere's longest or shortest day." },
    { term: "Dongzhi Festival", definition: "The Chinese winter solstice festival, one of the most important dates on the traditional Chinese calendar, marked by family gatherings and eating tangyuan (glutinous rice balls)." },
    { term: "Yule", definition: "A midwinter festival originating in pre-Christian Germanic and Norse tradition, whose customs (evergreen decoration, feasting, a burning log) were later absorbed into Christmas celebrations in many countries." },
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
          "The winter solstice is a precise astronomical event — the moment a hemisphere is tilted furthest from the sun — not a folk tradition itself; it's the astronomical anchor that many separate cultural traditions have built observances around.",
          "It happens on the same day worldwide (around December 21 in the Northern Hemisphere, around June 21 in the Southern Hemisphere), but it means opposite things depending on hemisphere: shortest day in the north, longest day in the south, at the same moment.",
          "Yule, Dongzhi, St. Lucia's Day, and the ancient solstice alignments at sites like Stonehenge are independent traditions responding to the same astronomical turning point, not variations on one shared festival.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The winter solstice is the day of the year with the least daylight in a given hemisphere, occurring around December 21 in the Northern Hemisphere and around June 21 in the Southern Hemisphere. After it, days gradually start getting longer again. Many cultures have built traditions around this turning point: Yule in pre-Christian Northern Europe, the <TermLink href="/festivals-culture/winter-solstice-traditions-globally">Dongzhi Festival</TermLink> in China, St. Lucia&apos;s Day in Scandinavia, and the solstice-aligned monuments at sites like Stonehenge in England and Newgrange in Ireland. These are separate, independently developed traditions that happen to share the same astronomical anchor point.</div>}
        detailed={<div className="prose-p">The solstice occurs because Earth&apos;s axis is tilted about 23.4 degrees relative to its orbit around the sun; at the December solstice, the Northern Hemisphere is tilted maximally away from the sun (its shortest day) while the Southern Hemisphere is tilted maximally toward it (its longest day) — the same astronomical instant produces opposite seasonal meanings depending on where you live. This is why an Australian or South African &quot;winter solstice&quot; tradition, if one exists locally, would actually fall in June, not December — a detail often missed in Northern-Hemisphere-centric descriptions of the event. Traditions built around the December solstice specifically in the north include <TermLink href="/festivals-culture/winter-solstice-traditions-globally">Yule</TermLink>, whose customs (the burning Yule log, evergreen decoration, feasting) were substantially absorbed into Christmas celebrations as Christianity spread through Northern Europe; Dongzhi, one of the most important dates on the traditional Chinese calendar, marked by family reunion and eating tangyuan (glutinous rice balls symbolizing wholeness); and St. Lucia&apos;s Day, observed December 13 in Sweden, which historically aligned close to the solstice under the pre-Gregorian Julian calendar even though it now falls before the solstice on the modern calendar. Neolithic monuments including Stonehenge and Newgrange are astronomically aligned to solstice sunrise or sunset, indicating solstice observance goes back thousands of years before any of the currently practiced traditions.</div>}
      />
      <FootnoteAside>Newgrange in Ireland, built around 3200 BCE, is aligned so precisely that for a few mornings around the winter solstice, sunlight travels down a 19-meter passage and illuminates the inner chamber — a feat of Neolithic engineering roughly 500 years older than the earliest pyramids at Giza.</FootnoteAside>

      <QuickCheck
        question="What actually happens astronomically at the December solstice?"
        options={[
          { text: "Earth is at its closest point to the sun in its orbit", correct: false, explanation: "That's perihelion, an unrelated orbital event — Earth's distance from the sun isn't what causes the seasons or the solstice." },
          { text: "The Northern Hemisphere is tilted at its maximum away from the sun while the Southern Hemisphere is tilted at its maximum toward it", correct: true, explanation: "Correct. The same moment produces the shortest day in the north and the longest day in the south, because of Earth's axial tilt, not its distance from the sun." },
          { text: "The sun stops moving across the sky entirely for one day", correct: false, explanation: "The word 'solstice' comes from Latin for 'sun stands still,' referring to the sun's apparent north-south motion pausing at its extreme point — the sun still rises and sets normally that day." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Dongzhi — a solstice festival centered on family reunion (baseline case)</h3>
      <div className="prose-p">Dongzhi (&quot;winter&apos;s arrival&quot;) is one of the most significant dates on the traditional Chinese calendar, observed around December 21–22. Families gather to eat tangyuan, round glutinous rice balls whose shape symbolizes reunion and wholeness, and in some regions ancestor veneration rituals are performed. Historically, Dongzhi was considered important enough that in some dynastic periods it was treated with a status close to the Lunar New Year itself — a level of significance the holiday still carries in parts of China, Taiwan, and among diaspora communities today, even though it&apos;s less internationally known than Lunar New Year.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: St. Lucia&apos;s Day — a fixed December date with light rather than the solstice itself as the focus (variation)</h3>
      <div className="prose-p">St. Lucia&apos;s Day, observed December 13 in Sweden and other Scandinavian countries, layers a Christian martyr&apos;s feast day onto older Nordic midwinter light customs. Under the old Julian calendar, December 13 fell close to the solstice, which is part of why the tradition developed its strong light-in-darkness character — a girl dressed in white with a crown of candles leads a procession, and the day is treated as an early highlight of the Swedish Christmas season. Because the Gregorian calendar shifted the date, St. Lucia&apos;s Day no longer lines up with the solstice itself, making it a useful example of a tradition whose symbolism (light against the year&apos;s darkest stretch) outlived its original precise calendar alignment.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Modern solstice gatherings at Stonehenge (real-world / applied case)</h3>
      <div className="prose-p">Stonehenge in England is aligned so that, at the winter solstice, the sunset lines up with the monument&apos;s main axis (the alignment is even more famous at the summer solstice sunrise). Today, thousands of people — druids, pagans, and the simply curious — gather at Stonehenge each solstice for sunrise and sunset observances managed by English Heritage, a modern practice connecting directly back to the monument&apos;s original Neolithic purpose roughly 4,500 years ago. It&apos;s a rare case where a present-day public gathering directly echoes the astronomical function the site was originally built for, rather than being a separate tradition layered on top.</div>

      <QuickCheck
        question="If it's the winter solstice in the Northern Hemisphere, what is happening in the Southern Hemisphere at that same moment?"
        options={[
          { text: "Nothing different — the solstice affects the whole planet identically", correct: false, explanation: "The solstice's effect is opposite by hemisphere, not uniform — Earth's axial tilt means one hemisphere gets its shortest day while the other gets its longest, simultaneously." },
          { text: "The Southern Hemisphere is experiencing its summer solstice — its longest day of the year", correct: true, explanation: "Correct. The same astronomical moment is the winter solstice in the north and the summer solstice in the south, because of how Earth's tilt orients each hemisphere toward or away from the sun." },
          { text: "The Southern Hemisphere experiences its winter solstice about six months later, unrelated to the Northern Hemisphere's event", correct: false, explanation: "It's not unrelated — it's the exact same astronomical event, just named and experienced oppositely depending on which hemisphere you're in." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming 'the winter solstice' is the shortest day everywhere on Earth simultaneously in the same way.", fix: "It's the shortest day only in whichever hemisphere is tilted away from the sun at that moment — the other hemisphere experiences its longest day at the exact same time." },
          { mistake: "Treating Yule, Dongzhi, and St. Lucia's Day as regional variants of one shared solstice festival.", fix: "Each developed independently within its own cultural tradition — Yule in pre-Christian Northern Europe, Dongzhi within Chinese tradition, St. Lucia's Day as a Christian feast day layered on Nordic light customs. They share an astronomical anchor, not a common origin." },
          { mistake: "Assuming solstice observance is a modern or recent invention.", fix: "Neolithic monuments like Stonehenge and Newgrange, built thousands of years before any currently practiced solstice tradition, show precise solstice alignment going back to at least 3200 BCE." },
        ]}
      />
      <MisconceptionCallout
        myth="The winter solstice is 'the shortest day' everywhere on Earth simultaneously in the same way."
        reality={<p>The solstice is a single astronomical moment, but its effect depends entirely on hemisphere: it produces the shortest day in whichever hemisphere is tilted away from the sun and the longest day in whichever hemisphere is tilted toward it, at the exact same time. A December solstice is a &quot;winter&quot; solstice only from a Northern Hemisphere perspective — in Australia, Argentina, or South Africa, that same moment is their summer solstice.</p>}
      />

      <QuickCheck
        question="Which of these solstice-related traditions is most directly tied to an ancient astronomical alignment still observed today?"
        options={[
          { text: "St. Lucia's Day in Sweden", correct: false, explanation: "St. Lucia's Day is a Christian feast day layered onto older Nordic light customs — meaningful, but not built as an astronomical alignment structure itself." },
          { text: "Gathering at Stonehenge for solstice sunrise or sunset", correct: true, explanation: "Correct. Stonehenge's main axis is physically aligned to the solstice sun, and modern gatherings there directly echo the monument's original Neolithic astronomical function." },
          { text: "Eating tangyuan during Dongzhi", correct: false, explanation: "Dongzhi's food tradition is culturally significant but symbolic (reunion and wholeness) rather than an astronomical alignment structure like Stonehenge's design." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time someone calls December 21 'the shortest day of the year,' mentally add 'in the Northern Hemisphere' — it's the longest day south of the equator.",
          "Notice which solstice-related tradition you're reading about and whether it's genuinely built around the astronomical event (like Stonehenge's alignment) or layered symbolically near it (like St. Lucia's Day after the calendar shift).",
          "If you're near a solstice-aligned ancient site, check whether it hosts public sunrise or sunset observances — many, including Stonehenge and Newgrange, do.",
          "Look up the exact solstice date and time for your hemisphere this year — it shifts slightly (December 20–22 in the north) depending on the specific year's calendar.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the winter solstice?", answer: "It's the astronomical moment a hemisphere is tilted furthest from the sun, producing that hemisphere's shortest day and longest night — around December 21 in the Northern Hemisphere and around June 21 in the Southern Hemisphere." },
          { question: "Is the winter solstice the same as Christmas?", answer: "No. The solstice is an astronomical event around December 21; Christmas is a fixed Christian holiday on December 25. Some Christmas customs (evergreen decoration, the Yule log) trace back to older solstice-adjacent traditions like Yule, but the two are distinct." },
          { question: "Why is the winter solstice in June in some countries?", answer: "Because the solstice's effect is opposite by hemisphere — Australia, Argentina, South Africa, and other Southern Hemisphere countries experience their shortest day around June 21, which is their winter solstice." },
          { question: "What cultures celebrate the winter solstice?", answer: "Many, independently — including Dongzhi in Chinese tradition, Yule in pre-Christian Northern European tradition, and gatherings at ancient solstice-aligned sites like Stonehenge and Newgrange. These developed separately rather than from one shared festival." },
          { question: "Why is Stonehenge associated with the solstice?", answer: "Stonehenge's main axis is physically aligned with the solstice sun (sunset in winter, sunrise in summer), a deliberate feature of its Neolithic construction roughly 4,500 years ago — modern solstice gatherings there echo that original astronomical function." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
