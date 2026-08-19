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
  title: "Festival Foods of India",
  category: "festivals-culture",
  order: 26,
  subtopic: "food-and-culture",
  tags: ["indian festival food", "diwali sweets", "festival cuisine", "indian food traditions"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Indian festival foods vary enormously by region and occasion — from Diwali sweets to Pongal's rice dish to Eid's biryani — each tied to a specific ritual meaning.",
  summary: "Festival foods in India aren't one fixed menu — they're a set of region- and occasion-specific dishes, each carrying its own ritual or symbolic meaning, from sweets offered to deities to specific grains cooked on a specific day.",
  sources: [
    { label: "Encyclopaedia Britannica — Indian cuisine", url: "https://www.britannica.com/topic/Indian-cuisine" },
    { label: "Encyclopaedia Britannica — Diwali", url: "https://www.britannica.com/topic/Diwali" },
    { label: "Encyclopaedia Britannica — Pongal", url: "https://www.britannica.com/topic/Pongal" },
    { label: "Incredible India (Ministry of Tourism, Government of India)", url: "https://www.incredibleindia.org" },
  ],
  seeAlso: [
    "festivals-culture/diwali-explained",
    "festivals-culture/holi-explained",
    "festivals-culture/food-traditions-around-the-world",
    "festivals-culture/fasting-traditions-across-cultures",
  ],
  glossary: [
    { term: "Prasad", definition: "Food, usually sweet, first offered to a deity in a Hindu ritual and then distributed to worshippers as a blessing." },
    { term: "Naivedyam", definition: "The South Indian term for food ritually offered to a deity before it is eaten by devotees — functionally the same concept as prasad." },
    { term: "Sevai/Sevaiyan", definition: "Sweet vermicelli pudding traditionally prepared for Eid al-Fitr in many South Asian Muslim households." },
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
          "There is no single \"Indian festival food\" — the dish is set by the specific festival, the specific region, and often the specific day within a multi-day festival.",
          "Many festival foods are first offered to a deity as prasad or naivedyam before anyone eats them — the food itself carries ritual meaning, not just flavor.",
          "The same festival can call for entirely different signature dishes depending on region: Diwali sweets in the North look nothing like the savory Pongal dish cooked in Tamil Nadu, even though both are harvest/light-themed celebrations.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Indian festivals almost always come with a specific food attached — sweets for Diwali, rice-and-lentil dishes for South Indian harvest festivals, biryani and sweet vermicelli for Eid, coconut-based dishes for Onam. The food isn&apos;t incidental decoration; it&apos;s often part of the ritual itself, first offered to a deity as <TermLink href="/festivals-culture/festival-foods-of-india">prasad</TermLink> before being shared with family and neighbors. Because India spans dozens of regional cuisines and several religions, &quot;festival food&quot; changes completely depending on which festival, which region, and which community you mean.</div>}
        detailed={<div className="prose-p">Festival foods in India generally fall into two functional categories: ritual offerings and celebratory sharing food, and the two often overlap in the same dish. A ritual offering — prasad in most of North India, <TermLink href="/festivals-culture/festival-foods-of-india">naivedyam</TermLink> in Tamil and Telugu-speaking regions — is prepared, offered to a deity during worship, and then distributed as a blessing rather than simply served. Diwali&apos;s mithai (Indian sweets, such as kaju katli, ladoo, and barfi) exemplifies this: they&apos;re exchanged as gifts and also placed before Lakshmi during Diwali night worship. Pongal, the Tamil harvest festival, centers on a single dish of the same name — rice boiled with milk and jaggery until it deliberately overflows the pot, a visual symbol of abundance, cooked outdoors on the day itself rather than prepared in advance. Eid al-Fitr, observed by Muslim communities across India, is marked by sweet vermicelli dishes like sevaiyan or sheer khurma (vermicelli cooked in milk with dates and nuts), eaten after a month of Ramadan fasting. Onam, Kerala&apos;s harvest festival, is built around the Onam Sadhya — a vegetarian feast of up to 20-plus dishes served on a banana leaf, eaten in a specific left-to-right order. The regional variation is the rule, not the exception: even Diwali sweets differ by state, with Bengal favoring sandesh and rasgulla (milk-based sweets) over the North&apos;s ghee-heavy ladoos and barfis.</div>}
      />
      <FootnoteAside>The Onam Sadhya traditionally has a set serving order across the banana leaf — pickles and papadum first, followed by rice and curries in sequence, ending with the payasam (sweet dessert) — eaten with the right hand, a structure diners are expected to follow rather than serve themselves however they like.</FootnoteAside>

      <QuickCheck
        question="Why is Diwali mithai often first placed before a deity rather than served directly?"
        options={[
          { text: "It's a modern marketing tradition with no religious basis", correct: false, explanation: "Not accurate — offering food to a deity before eating it (prasad) is a long-standing ritual practice in Hindu worship, not a recent commercial add-on." },
          { text: "It functions as prasad — food ritually offered first, then distributed as a blessing", correct: true, explanation: "Correct. This offer-then-share pattern is central to how festival food works across most Hindu festivals, not just Diwali." },
          { text: "It's done purely for food safety reasons before mass distribution", correct: false, explanation: "The practice is religious/ritual in origin and meaning, not a food-safety protocol." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Diwali mithai in North India (baseline case)</h3>
      <div className="prose-p">A North Indian household prepares or buys an assortment of mithai — ladoo (sweet balls, often made from besan/gram flour), kaju katli (a cashew-based fudge), and barfi (a dense milk sweet) — in the days before Diwali. Boxes of mithai are exchanged between neighbors, relatives, and colleagues as a goodwill gesture, and a portion is placed before Lakshmi during the main evening puja. The sweets are rich in ghee and sugar deliberately, since Diwali marks a celebratory, prosperity-themed occasion rather than an austere one.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Pongal in Tamil Nadu — a distinct regional dish and ritual</h3>
      <div className="prose-p">Unlike Diwali&apos;s sweets, the Tamil harvest festival of Pongal centers on a single savory-and-sweet rice dish of the same name, cooked outdoors in a clay or brass pot on the festival&apos;s main day. Rice, milk, and jaggery are boiled together and deliberately allowed to boil over the rim of the pot — the overflow is the point, symbolizing abundance for the year ahead, and families traditionally shout &quot;Pongalo Pongal!&quot; as it happens. This is a completely different food tradition from Diwali&apos;s mithai despite both being major Hindu festivals within weeks or months of each other on the calendar — the dish, the preparation ritual, and the symbolism are all specific to Pongal and to Tamil culture.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Eid sweets in Indian Muslim households (real-world / present-day applied case)</h3>
      <div className="prose-p">At the end of Ramadan, Eid al-Fitr in Indian Muslim households is commonly marked with sheer khurma — vermicelli cooked in milk with dates, nuts, and saffron — served to guests who visit through the day after the Eid prayer. The dish&apos;s name (&quot;sheer&quot; meaning milk, &quot;khurma&quot; meaning dates) reflects its Persian and Mughal-era culinary roots, distinct from Hindu festival sweets even though both fall under the umbrella of &quot;Indian festival food.&quot; This is a useful everyday example of why treating &quot;Indian festival food&quot; as one cuisine misses that religion, region, and specific festival each independently shape what actually ends up on the table.</div>

      <QuickCheck
        question="Which pair correctly matches a festival to its signature dish?"
        options={[
          { text: "Pongal → the rice-milk-jaggery dish cooked outdoors and allowed to boil over", correct: true, explanation: "Correct — the dish and the festival share the same name, and the overflowing pot is a deliberate symbol of abundance." },
          { text: "Diwali → the Onam Sadhya banana-leaf feast", correct: false, explanation: "The Sadhya is specific to Onam in Kerala, not Diwali — Diwali's signature food is mithai (sweets), not a multi-dish banana-leaf feast." },
          { text: "Eid al-Fitr → Pongal rice pudding", correct: false, explanation: "Pongal is a Tamil Hindu harvest festival dish; Eid al-Fitr's signature dish in South Asia is typically sheer khurma or sevaiyan, a milk-and-vermicelli sweet." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming one dish (like mithai) represents \"Indian festival food\" generally.", fix: "Match the dish to the specific festival — mithai is specifically associated with Diwali and other Hindu festive occasions, not a universal Indian festival food." },
          { mistake: "Treating festival food as purely celebratory with no ritual function.", fix: "Much of it is first offered to a deity as prasad or naivedyam before being eaten — the offering step is part of the tradition, not optional decoration." },
          { mistake: "Assuming festival dishes are the same across Indian regions.", fix: "The same festival theme (harvest, light, faith) produces very different dishes depending on the region — compare Pongal's rice dish to Diwali mithai to Onam's Sadhya feast." },
        ]}
      />
      <MisconceptionCallout
        myth="Indian festival foods are basically the same across all regions and festivals — a general category of &quot;sweets and curry.&quot;"
        reality={<p>India&apos;s festival foods vary enormously by both region and specific occasion — Pongal&apos;s overflowing rice pot, Onam&apos;s 20-plus-dish Sadhya feast, Diwali&apos;s mithai, and Eid&apos;s sheer khurma are distinct dishes tied to distinct religious and regional traditions, not interchangeable variations on one national cuisine. Assuming otherwise flattens genuinely different culinary and ritual practices into a single stereotype.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see an Indian festival dish mentioned, check which specific festival and region it's tied to before assuming it generalizes.",
          "If you're offered prasad or naivedyam, remember it's been ritually offered first — it's customary to accept it respectfully, typically with the right hand.",
          "Notice how a single theme (harvest, light, faith) produces completely different signature dishes depending on region — it's a useful lens for reading any large country's festival calendar, not just India's.",
          "If you're hosting or attending a mixed-region Indian celebration, ask which regional tradition is being followed rather than assuming a default.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the traditional sweet for Diwali?", answer: "There isn't one single sweet — mithai varieties like ladoo, kaju katli, and barfi are common across much of North India, while Bengal favors milk-based sweets like sandesh and rasgulla." },
          { question: "What food is eaten during Pongal?", answer: "Pongal is named after its signature dish — rice boiled with milk and jaggery until it overflows the cooking pot, prepared outdoors on the festival's main day as a symbol of abundance." },
          { question: "What is prasad in Indian festivals?", answer: "Prasad (naivedyam in South India) is food that has been ritually offered to a deity during worship and is then distributed to devotees as a blessing — it's a core part of how food functions in most Hindu festival observance." },
          { question: "What do Indian Muslims eat on Eid?", answer: "Sheer khurma or sevaiyan — a sweet vermicelli dish cooked in milk with dates, nuts, and often saffron — is a common Eid al-Fitr dish in Indian and broader South Asian Muslim households." },
          { question: "What is the Onam Sadhya?", answer: "The Onam Sadhya is a vegetarian feast of 20 or more dishes served on a banana leaf during Kerala's Onam festival, eaten in a specific traditional order and typically with the right hand." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
