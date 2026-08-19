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
  title: "Spring & Renewal Festivals Globally",
  category: "festivals-culture",
  order: 44,
  subtopic: "festivals-of-light-harvest-and-season",
  tags: ["spring festivals", "holi", "nowruz", "easter", "cherry blossom festivals", "renewal festivals"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Holi, Nowruz, Easter, and cherry blossom viewing all mark spring's return with renewal themes — independent traditions built around the same seasonal turning point.",
  summary: "Spring and renewal festivals mark the shift from winter dormancy to new growth, using rituals of color, fire, fasting, or flowering to celebrate rebirth — a theme that recurs independently across cultures rather than descending from one shared tradition.",
  sources: [
    { label: "Encyclopaedia Britannica — Holi", url: "https://www.britannica.com/topic/Holi" },
    { label: "Encyclopaedia Britannica — Nowruz", url: "https://www.britannica.com/topic/Nowruz" },
    { label: "UNESCO — Nowruz, Intangible Cultural Heritage", url: "https://ich.unesco.org/en/RL/nowruz-01161" },
    { label: "Encyclopaedia Britannica — Easter", url: "https://www.britannica.com/topic/Easter" },
    { label: "Japan National Tourism Organization — Hanami (Cherry Blossom Viewing)", url: "https://www.japan.travel/en/guide/cherry-blossoms/" },
  ],
  seeAlso: [
    "festivals-culture/holi-explained",
    "festivals-culture/harvest-festivals-around-the-world",
    "festivals-culture/new-year-celebrations-around-the-world",
    "festivals-culture/winter-solstice-traditions-globally",
  ],
  glossary: [
    { term: "Nowruz", definition: "The Persian New Year, marking the spring equinox, celebrated across Iran, Central Asia, and parts of the Caucasus and South Asia with rituals of cleaning, renewal, and a symbolic table setting called the Haft-Sin." },
    { term: "Vernal equinox", definition: "The point in March (Northern Hemisphere) when day and night are roughly equal in length, marking the astronomical start of spring — the anchor date for several renewal festivals." },
    { term: "Hanami", definition: "The Japanese tradition of viewing and appreciating cherry blossoms (sakura) in spring, marked by gatherings, picnics, and festivals under blooming trees." },
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
          "Spring and renewal festivals mark the shift from winter to new growth, but they take very different forms across cultures — color-throwing, fire-jumping, egg symbolism, and flower viewing are all independent expressions of the same seasonal idea.",
          "Some, like Nowruz, are anchored precisely to the astronomical vernal equinox; others, like Holi and Easter, follow lunar or lunisolar calendars and land near spring without being fixed to the equinox itself.",
          "Renewal symbolism (cleaning, new clothes, eggs, new fire, fresh growth) recurs across unrelated traditions because it maps naturally onto the same lived experience: winter ending and the growing season beginning.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Spring festivals celebrate the return of warmth, growth, and light after winter, and they show up across the world in very different forms. <TermLink href="/festivals-culture/holi-explained">Holi</TermLink> marks spring in Hindu tradition with color-throwing. <TermLink href="/festivals-culture/spring-and-renewal-festivals-globally">Nowruz</TermLink>, the Persian New Year, marks the exact astronomical start of spring with home-cleaning and a symbolic table setting. Easter, in Christian tradition, centers on resurrection themes that fall in early spring in the Northern Hemisphere. In Japan, <TermLink href="/festivals-culture/spring-and-renewal-festivals-globally">hanami</TermLink> — cherry blossom viewing — turns the season&apos;s fleeting blooms into a major cultural event. None of these share a common origin; each developed within its own religious or cultural tradition.</div>}
        detailed={<div className="prose-p">The clearest calendar distinction among spring festivals is between those fixed to an astronomical event and those set by a moving lunar or lunisolar date. Nowruz is the most precisely anchored: it begins at the exact moment of the March vernal equinox as calculated by astronomical observation, a tradition with roots in ancient Zoroastrian Persia and now recognized by UNESCO as intangible cultural heritage across Iran, Afghanistan, Central Asia, and the Kurdish and Azeri communities of the wider region. Holi, by contrast, falls on the full moon of the Hindu month of Phalguna, which lands in March most years but is governed by the lunar calendar rather than the equinox itself. Easter&apos;s date is more complex still: it falls on the first Sunday after the first full moon following the March equinox, a rule set by the early Christian church specifically to keep the holiday in a fixed relationship to spring without pinning it to a single calendar date — which is why Easter can fall anywhere between late March and late April. Hanami, unlike the others, isn&apos;t a fixed-date religious festival at all — it tracks the actual, weather-dependent blooming of cherry trees, which shifts regionally and year to year, making it the most literally &quot;nature-timed&quot; of the group.</div>}
      />
      <FootnoteAside>Easter&apos;s date-setting rule — first Sunday after the first full moon after the spring equinox — was formalized at the Council of Nicaea in 325 CE specifically to standardize a holiday that different early Christian communities had been calculating differently, making it one of the oldest documented calendar-standardization disputes in religious history.</FootnoteAside>

      <QuickCheck
        question="Which spring festival is fixed most precisely to the astronomical vernal equinox itself?"
        options={[
          { text: "Holi", correct: false, explanation: "Holi follows the lunar calendar (the full moon of Phalguna) and typically falls in March, but it isn't calculated from the equinox directly." },
          { text: "Nowruz", correct: true, explanation: "Correct. Nowruz begins at the precise astronomical moment of the March equinox, a defining feature of the holiday going back to its ancient Zoroastrian roots." },
          { text: "Easter", correct: false, explanation: "Easter's date depends on the equinox as a reference point but is set by a more complex rule (first Sunday after the first full moon following the equinox), so it isn't fixed to the equinox date itself." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Nowruz — an equinox-fixed New Year with renewal rituals (baseline case)</h3>
      <div className="prose-p">Nowruz, meaning &quot;new day&quot; in Persian, begins at the exact moment of the vernal equinox and is celebrated across Iran, Afghanistan, Azerbaijan, Central Asia, and Kurdish communities more broadly — a shared holiday across several nations and ethnic groups rather than one country&apos;s tradition. Households perform khaneh tekani (a thorough spring cleaning), set up a symbolic table called the Haft-Sin with seven items starting with the Persian letter &quot;S&quot; (each representing a value like health, wealth, or rebirth), and the celebrations extend into a 13-day period. The core theme — literal cleaning and renewal timed to the exact turn of the season — makes Nowruz one of the most direct expressions of the spring-renewal idea.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Holi — a lunar-calendar spring festival with a different symbolic vehicle (variation)</h3>
      <div className="prose-p">Holi lands near spring but is governed by the Hindu lunar calendar rather than the equinox, falling on the full moon of Phalguna, usually in March. Rather than cleaning or a ritual meal, its renewal theme is expressed through color-throwing and a bonfire (Holika Dahan) the night before, symbolizing the burning away of evil ahead of the new season. This is a meaningfully different ritual vehicle from Nowruz&apos;s cleaning-and-table tradition, even though both fall in the same general window and both mark a turn toward renewal — a good illustration that &quot;spring festival&quot; describes a shared theme, not a shared ritual form.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Hanami — a nature-timed, non-religious renewal tradition today (real-world / applied case)</h3>
      <div className="prose-p">Hanami, Japan&apos;s cherry blossom viewing tradition, shows how a renewal festival can persist without being anchored to a religious calendar at all. Its timing follows the actual, weather-dependent blooming of sakura trees, which Japan&apos;s meteorological agency and independent forecasters track and publish each year as a moving &quot;cherry blossom front&quot; that sweeps from south to north across the country. Families and groups gather for picnics under blooming trees, often in parks specifically known for their displays. Unlike Nowruz or Holi, hanami carries no explicit religious content today, but its underlying logic — marking and celebrating the visible return of life after winter — is the same renewal theme running through every festival on this list.</div>

      <QuickCheck
        question="What determines the date of hanami (cherry blossom viewing) in Japan each year?"
        options={[
          { text: "A fixed date on the Gregorian calendar, the same every year", correct: false, explanation: "Hanami has no single fixed date — it follows the actual blooming of cherry trees, which is tracked and forecast each year rather than scheduled in advance." },
          { text: "The astronomical vernal equinox, calculated in advance", correct: false, explanation: "That's how Nowruz's date is set, not hanami's — cherry blossom timing is a biological, weather-dependent event rather than an astronomical calculation." },
          { text: "The real, weather-dependent blooming of cherry blossom trees, tracked and forecast as a moving front each year", correct: true, explanation: "Correct. Hanami's timing is unusual among renewal festivals in following an actual natural event rather than a fixed or lunar calendar date." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming all spring festivals are fixed to the vernal equinox.", fix: "Only some, like Nowruz, are calculated directly from the equinox. Holi follows a lunar calendar and Easter follows a more complex full-moon-after-equinox rule, so their Gregorian dates move independently of the equinox itself." },
          { mistake: "Treating Easter as the default 'spring festival' and others as regional variants.", fix: "Nowruz, Holi, and hanami are independent traditions with their own histories — Nowruz's roots in ancient Zoroastrian Persia predate Easter, and none of these traditions derives from another." },
          { mistake: "Assuming renewal festivals require religious content.", fix: "Hanami in Japan is a widely practiced spring renewal tradition with no formal religious framework today — the shared theme across these festivals is seasonal renewal, not a shared religious structure." },
        ]}
      />
      <MisconceptionCallout
        myth="Spring festivals are essentially the same holiday with different regional names and costumes."
        reality={<p>Nowruz, Holi, Easter, and hanami have distinct historical origins, different calendar logics (astronomical equinox, lunar, complex ecclesiastical rule, and literal weather tracking respectively), and different central rituals (cleaning and a symbolic table; color-throwing and a bonfire; church observance tied to resurrection theology; and tree-viewing). They share a broad seasonal theme — renewal after winter — but treating them as costume variations on one festival erases genuinely different histories and beliefs.</p>}
      />

      <QuickCheck
        question="What is the shared theme across Nowruz, Holi, and hanami, despite their different origins?"
        options={[
          { text: "They all originated from the same ancient festival and spread through trade routes", correct: false, explanation: "There's no documented single common origin — each tradition developed within its own separate cultural and religious context." },
          { text: "They all mark the return of growth and renewal after winter, expressed through different rituals", correct: true, explanation: "Correct. This is the recurring theme across independently developed spring festivals — the specific ritual form varies widely by culture." },
          { text: "They are all primarily agricultural festivals celebrating a grain harvest", correct: false, explanation: "That description fits harvest festivals like Chuseok or Thanksgiving more than spring festivals, which mark the start of a growing season rather than its end." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a 'spring festival' mentioned, check whether its date is fixed to the equinox (like Nowruz), lunar (like Holi), or calculated by a more complex rule (like Easter) — the logic explains why the Gregorian date does or doesn't move.",
          "Notice which renewal ritual a given tradition uses — cleaning, fire, color, food, or nature-viewing — rather than assuming all spring festivals share the same central activity.",
          "If you're marking Nowruz for the first time, look up the Haft-Sin table setting — each of the seven items carries a specific symbolic meaning worth knowing before you see one in person.",
          "Check a cherry blossom forecast if you're planning to experience hanami — unlike calendar-fixed festivals, its timing genuinely shifts year to year with the weather.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are examples of spring and renewal festivals around the world?", answer: "Widely observed examples include Nowruz (Persian New Year), Holi (Hindu festival of colors), Easter (Christian), and hanami (Japanese cherry blossom viewing) — each an independent tradition marking spring's return in its own way." },
          { question: "Is Nowruz the same as the Persian New Year?", answer: "Yes — Nowruz means 'new day' and is the Persian New Year, beginning at the exact astronomical moment of the March equinox and celebrated across Iran, Afghanistan, Central Asia, and Kurdish communities." },
          { question: "Why does Easter's date change every year?", answer: "Easter falls on the first Sunday after the first full moon following the March equinox, a rule set at the Council of Nicaea in 325 CE — this lunar-linked rule means the date can fall anywhere from late March to late April." },
          { question: "Is hanami a religious festival?", answer: "No — hanami, Japan's cherry blossom viewing tradition, carries no formal religious content today. Its timing follows the actual blooming of cherry trees rather than a religious calendar." },
          { question: "What do Holi and Nowruz have in common?", answer: "Both mark the arrival of spring with renewal themes and both typically fall in March, but they are unrelated traditions with different calendar logic (lunar for Holi, equinox-fixed for Nowruz) and entirely different central rituals." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
