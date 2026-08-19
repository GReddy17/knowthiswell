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
  title: "Food Traditions Around the World",
  category: "festivals-culture",
  order: 27,
  subtopic: "food-and-culture",
  tags: ["food traditions", "culinary heritage", "world cuisines", "unesco intangible heritage"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Food traditions worldwide range from Japan's washoku to France's gastronomic meal to Korea's kimjang — several are officially recognized as UNESCO intangible cultural heritage.",
  summary: "A food tradition is a set of practices around preparing, sharing, and eating food that a community treats as culturally meaningful, not just nutritionally functional — several are formally recognized by UNESCO as intangible cultural heritage.",
  sources: [
    { label: "UNESCO Intangible Cultural Heritage — Washoku, traditional dietary cultures of the Japanese", url: "https://ich.unesco.org/en/RL/washoku-traditional-dietary-cultures-of-the-japanese-notably-for-the-celebration-of-new-year-00869" },
    { label: "UNESCO Intangible Cultural Heritage — Gastronomic meal of the French", url: "https://ich.unesco.org/en/RL/gastronomic-meal-of-the-french-00437" },
    { label: "UNESCO Intangible Cultural Heritage — Kimjang, making and sharing kimchi", url: "https://ich.unesco.org/en/RL/kimjang-making-and-sharing-kimchi-in-the-republic-of-korea-00881" },
    { label: "Encyclopaedia Britannica — cuisine", url: "https://www.britannica.com/topic/food" },
  ],
  seeAlso: [
    "festivals-culture/festival-foods-of-india",
    "festivals-culture/fasting-traditions-across-cultures",
    "festivals-culture/street-food-culture-globally",
    "festivals-culture/dining-etiquette-around-the-world",
  ],
  glossary: [
    { term: "Intangible cultural heritage", definition: "UNESCO's term for living traditions and practices (as opposed to physical sites or objects) that communities recognize as part of their cultural identity, including certain food practices." },
    { term: "Washoku", definition: "Traditional Japanese dietary culture emphasizing seasonal ingredients, balanced nutrition, and a specific meal presentation, recognized by UNESCO in 2013." },
    { term: "Kimjang", definition: "The communal Korean practice of making and sharing large batches of kimchi ahead of winter, recognized by UNESCO as intangible cultural heritage in 2013." },
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
          "A food tradition is more than a recipe — it's a set of shared practices around growing, preparing, serving, and eating food that a community treats as culturally meaningful.",
          "Several national food traditions are formally recognized by UNESCO as intangible cultural heritage, including French gastronomy, Japanese washoku, and Korean kimjang (communal kimchi-making).",
          "Food traditions encode real information about geography, religion, and history — what's eaten, when, and how, usually traces back to climate, available ingredients, or a specific religious or seasonal calendar.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Every culture has its own set of food traditions — not just what people eat, but how, when, and with whom. This can mean a specific dish tied to a holiday (a Thanksgiving turkey, a Lunar New Year dumpling), a seasonal practice (preserving vegetables before winter), or a whole approach to a meal (multiple small courses versus one large shared dish). These traditions usually exist for practical reasons rooted in a region&apos;s climate or history, even after the original reason is mostly forgotten.</div>}
        detailed={<div className="prose-p">Food traditions generally fall into a few recurring categories worldwide: seasonal preservation practices (Korea&apos;s <TermLink href="/festivals-culture/food-traditions-around-the-world">kimjang</TermLink>, in which communities collectively prepare large batches of kimchi before winter, when fresh vegetables become scarce), structured meal philosophies (Japan&apos;s <TermLink href="/festivals-culture/food-traditions-around-the-world">washoku</TermLink>, built around seasonal ingredients and a specific one-soup-three-dishes meal balance), and formalized social meals (France&apos;s multi-course gastronomic meal, recognized by UNESCO in 2010 for its social ritual around gathering, courses, and pairing food with wine, not merely for the food itself). What all three have in common is that UNESCO&apos;s intangible cultural heritage designation values them as living social practices, not fixed recipes — the practice can and does evolve, and the heritage status protects the tradition of doing it together, not a specific frozen version of the dish. This is a useful distinction: a food tradition is closer to a shared ritual than a cookbook entry, which is why the same dish can look different from household to household while still counting as the same tradition.</div>}
      />
      <FootnoteAside>UNESCO&apos;s Representative List of the Intangible Cultural Heritage of Humanity includes several food-related entries beyond washoku and the French gastronomic meal — among them the Mediterranean diet (inscribed jointly by several countries including Italy, Greece, Spain, and Morocco) and Singapore&apos;s hawker culture, recognized in 2020 for its communal street-food dining tradition.</FootnoteAside>

      <QuickCheck
        question="What does UNESCO's intangible cultural heritage status actually protect, in the case of food traditions like washoku or the French gastronomic meal?"
        options={[
          { text: "A single official recipe that must not be altered", correct: false, explanation: "UNESCO's designation covers living social practices, not fixed recipes — the tradition is expected to keep evolving with the community that practices it." },
          { text: "The living social practice and cultural meaning around the food, not a fixed dish", correct: true, explanation: "Correct. The designation recognizes practices like seasonal preparation, communal preparation, or structured meal customs as cultural heritage." },
          { text: "Exclusive commercial trademark rights for restaurants in that country", correct: false, explanation: "UNESCO's Intangible Cultural Heritage list is a cultural recognition framework, not a trademark or commercial licensing system." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The French gastronomic meal (baseline case)</h3>
      <div className="prose-p">Recognized by UNESCO in 2010, the French gastronomic meal is defined less by specific dishes than by its structure and social purpose: a carefully ordered sequence of courses (aperitif, starter, fish or meat with vegetables, cheese, dessert), paired with wine, eaten together to mark a special occasion such as a birth, wedding, or holiday. The emphasis on bringing people together around a table for a shared, unhurried meal — rather than any single recipe — is what the heritage designation is protecting.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Kimjang in Korea — a seasonal, communal variation</h3>
      <div className="prose-p">Unlike a single festive meal, kimjang is a seasonal, labor-intensive tradition: households and neighbors gather in autumn to prepare large quantities of kimchi together, historically to preserve vegetables through winters when fresh produce was scarce. The communal aspect — families and neighbors sharing the workload and then sharing the finished kimchi — is central to why UNESCO recognized it in 2013, distinguishing it from simply making kimchi as an individual cooking task.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Hawker culture in Singapore (real-world / present-day applied case)</h3>
      <div className="prose-p">Singapore&apos;s hawker centres — open-air complexes of food stalls run by individual vendors, often specializing in a single dish perfected over years — were recognized by UNESCO in 2020 as intangible cultural heritage for their role as everyday communal dining spaces across Singapore&apos;s multicultural population. This is a modern, still-living example: hawker centres remain in daily use today, showing how a food tradition doesn&apos;t have to be historic or ceremonial to qualify as culturally significant — routine, affordable, shared daily eating can carry the same weight.</div>

      <QuickCheck
        question="What distinguishes kimjang from simply cooking kimchi at home on any given day?"
        options={[
          { text: "Kimjang specifically refers to the communal, seasonal (typically autumn) practice of preparing large batches together before winter", correct: true, explanation: "Correct — it's the seasonal timing and communal preparation, tied to preserving food for winter, that defines kimjang as a distinct tradition." },
          { text: "Kimjang is a formal government food safety certification for kimchi production", correct: false, explanation: "Kimjang is a cultural and communal food practice, not a regulatory food-safety process." },
          { text: "There's no real difference — kimjang is just another word for kimchi", correct: false, explanation: "Kimjang refers to the practice of making and sharing kimchi communally, not the food item itself." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating a food tradition as just a recipe.", fix: "Most recognized food traditions are about the social practice around the food — who prepares it, when, and with whom — not a single fixed dish." },
          { mistake: "Assuming only \"exotic\" or ancient dishes count as food traditions.", fix: "Everyday, ongoing practices like Singapore's hawker culture qualify too — a tradition doesn't need to be historic or ceremonial to be culturally significant." },
          { mistake: "Assuming UNESCO recognition means a legally protected recipe or brand.", fix: "It's a cultural heritage designation recognizing a living practice, not a trademark, patent, or exclusive commercial right." },
        ]}
      />
      <MisconceptionCallout
        myth="Food traditions are basically interchangeable across countries — everyone just has &quot;their version&quot; of the same basic meal customs."
        reality={<p>Food traditions differ in structure, not just ingredients — France&apos;s multi-course social meal, Korea&apos;s seasonal communal kimjang, and Japan&apos;s balanced washoku philosophy reflect genuinely different relationships between food, season, and community, shaped by distinct histories and climates. Reducing them to &quot;different countries, same basic idea&quot; misses what each tradition is actually organized around.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you encounter a food tradition, ask what the social practice around it is — who prepares it, when, and with whom — not just what's on the plate.",
          "Look up whether a food tradition you enjoy has UNESCO Intangible Cultural Heritage recognition — the list covers dozens of practices worldwide, not just the well-known examples.",
          "Notice which food traditions are tied to season (like kimjang) versus tied to a calendar holiday (like a festival dish) — the distinction explains a lot about why the practice exists.",
          "When trying an unfamiliar food tradition, ask about its structure (course order, communal roles) rather than assuming it maps onto a meal format you already know.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is washoku?", answer: "Washoku is the traditional Japanese dietary culture built around seasonal ingredients and a balanced meal structure (typically a soup and three side dishes with rice); UNESCO recognized it as intangible cultural heritage in 2013." },
          { question: "What food traditions are recognized by UNESCO?", answer: "UNESCO's Intangible Cultural Heritage list includes the French gastronomic meal, Japanese washoku, Korean kimjang (communal kimchi-making), the Mediterranean diet, and Singapore's hawker culture, among others." },
          { question: "What is kimjang in Korean culture?", answer: "Kimjang is the seasonal, communal practice of making and sharing large batches of kimchi, traditionally done in autumn to prepare for winter when fresh vegetables were scarce." },
          { question: "Why do some countries have multi-course meal traditions and others don't?", answer: "Meal structure is generally shaped by history, climate, and social customs specific to each region — France's multi-course gastronomic meal developed as a formal social ritual, while other cultures developed single shared-dish or communal-plate traditions for different historical reasons." },
          { question: "Is hawker food in Singapore considered a food tradition?", answer: "Yes — Singapore's hawker culture was formally recognized by UNESCO in 2020 as intangible cultural heritage, valued for its role as an everyday, affordable, communal dining tradition across the country's multicultural population." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
