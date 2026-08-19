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
  title: "National Days Around the World (overview)",
  category: "festivals-culture",
  order: 20,
  subtopic: "cultural-and-national-celebrations",
  tags: ["national days", "national holidays", "bastille day", "national day comparison"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "A 'national day' can mark independence, unification, a founding event, or a monarch's birthday — the term covers several different kinds of holidays, not one template.",
  summary: "A national day is a country's designated holiday marking a defining historical or civic moment, but what that moment actually is varies widely — independence, unification, a revolution, a founding date, or a monarch's official birthday are all real, distinct categories of national day.",
  sources: [
    { label: "Encyclopaedia Britannica — Bastille Day", url: "https://www.britannica.com/topic/Bastille-Day" },
    { label: "Encyclopaedia Britannica — National Day", url: "https://www.britannica.com/topic/national-holiday" },
    { label: "Swiss Confederation — National Day", url: "https://www.eda.admin.ch" },
    { label: "Royal.uk — The Sovereign's Birthday", url: "https://www.royal.uk" },
  ],
  seeAlso: [
    "festivals-culture/independence-day-celebrations-india-and-other-nations-factual-overview",
    "festivals-culture/republic-day-explained-india",
    "festivals-culture/new-year-celebrations-around-the-world",
  ],
  glossary: [
    { term: "National day", definition: "A country's officially designated holiday commemorating a defining historical or civic event — the specific event varies by nation and can be independence, unification, a revolution, a founding date, or a monarch's official birthday." },
    { term: "Official birthday (monarch)", definition: "A date designated for public celebration of a reigning monarch's birthday, which may differ from their actual birth date — used in the UK and several Commonwealth realms, often chosen for better weather or scheduling." },
    { term: "Unification day", definition: "A national day commemorating the date separate states or territories formally joined into a single nation, as distinct from a day marking independence from a colonial or foreign power." },
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
          "'National day' is a general category, not one specific type of holiday — different countries designate it to mark independence, unification, a revolution, a founding date, or even a monarch's official birthday.",
          "Not every national day is an independence day — France's Bastille Day marks the 1789 storming of the Bastille during the French Revolution, and Switzerland's National Day marks a 1291 founding alliance, not a break from colonial rule.",
          "Some countries with monarchies mark their national day around the monarch's official birthday, a date that may not match the ruler's actual birth date at all.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/festivals-culture/national-days-around-the-world-overview">national day</TermLink> is a country&apos;s official holiday marking a significant moment in its history or identity. For many former colonies, that&apos;s an Independence Day. But it isn&apos;t always — France&apos;s Bastille Day (July 14) marks a revolutionary event, not independence from a foreign power; Switzerland&apos;s National Day (August 1) marks an alliance-founding date centuries before Switzerland existed as a modern state; and the United Kingdom marks the monarch&apos;s official birthday with public celebration rather than observing a single fixed national day at all.</div>}
        detailed={<div className="prose-p">National days fall into several distinct categories once you look past the assumption that they&apos;re all Independence Days. Revolutionary or founding-event national days mark a specific domestic historical turning point rather than a break from foreign rule — Bastille Day commemorates the July 14, 1789 storming of the Bastille prison, a symbolic flashpoint of the French Revolution, while Switzerland&apos;s August 1 National Day commemorates the 1291 Federal Charter, an alliance among three cantons treated as the country&apos;s founding document. Some nations mark <TermLink href="/festivals-culture/national-days-around-the-world-overview">unification</TermLink> rather than independence or revolution — German Unity Day (October 3) marks the 1990 reunification of East and West Germany, a genuinely different kind of event from a colonial independence narrative. Monarchies sometimes structure their national day around the monarch specifically: the UK observes the sovereign&apos;s <TermLink href="/festivals-culture/national-days-around-the-world-overview">official birthday</TermLink> with public celebration (Trooping the Colour) on a date chosen for favorable weather, separate from the monarch&apos;s actual birth date, rather than designating one fixed historical-event national day the way most republics do.</div>}
      />
      <FootnoteAside>Switzerland&apos;s August 1 National Day wasn&apos;t formally established as an official public holiday until 1891 — the 600th anniversary of the 1291 Federal Charter — meaning the modern holiday itself is centuries newer than the historical event it commemorates.</FootnoteAside>

      <QuickCheck
        question="What does France's Bastille Day (July 14) actually commemorate?"
        options={[
          { text: "France's independence from a colonial power", correct: false, explanation: "France was never a colony in this sense — Bastille Day marks a domestic revolutionary event, not a transfer of sovereignty away from foreign rule." },
          { text: "The July 14, 1789 storming of the Bastille prison, a symbolic event of the French Revolution", correct: true, explanation: "Correct. Bastille Day marks this specific revolutionary event, making it a founding/revolutionary national day rather than an Independence Day in the colonial sense." },
          { text: "The signing of the Treaty of Versailles", correct: false, explanation: "The Treaty of Versailles was signed in 1919, over a century after the event Bastille Day commemorates, and isn't connected to this holiday's origin." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Bastille Day — a revolutionary-event national day (baseline case)</h3>
      <div className="prose-p">Bastille Day, observed July 14 in France, commemorates the 1789 storming of the Bastille prison, a fortress that had become a symbol of royal authority&apos;s abuses, and is treated as the flashpoint of the French Revolution. It&apos;s marked by a major military parade on the Champs-Élysées in Paris, fireworks, and public festivities (bals des pompiers, or fire station dances, are a well-known local tradition). Unlike an Independence Day, Bastille Day doesn&apos;t mark a transfer of sovereignty from one power to another — it marks a domestic political rupture, the overthrow of the monarchy&apos;s absolute authority in favor of what eventually became the French Republic.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Swiss National Day — a founding-alliance national day (variation)</h3>
      <div className="prose-p">Switzerland&apos;s National Day, observed August 1, commemorates the 1291 Federal Charter, an alliance formed among the cantons of Uri, Schwyz, and Unterwalden — traditionally treated as the founding document of the Swiss Confederation, even though the modern Swiss federal state took shape much later, in 1848. This is a meaningfully different structure from both Bastille Day and a colonial Independence Day: it commemorates neither a revolution against a domestic ruling authority nor a break from foreign colonial rule, but the founding alliance of previously separate political entities — closer in spirit to a unification narrative than either of the other two categories.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The UK&apos;s Sovereign&apos;s Official Birthday — a monarch-centered national observance (real-world / applied case)</h3>
      <div className="prose-p">The United Kingdom does not observe one single fixed national day the way France, Switzerland, or most republics do. Instead, the monarch&apos;s official birthday is marked publicly each June with Trooping the Colour, a military ceremony in London — a date deliberately chosen for more reliable weather rather than tied to the monarch&apos;s actual birth date. Several other Commonwealth realms and monarchies follow a similar pattern, marking an official rather than actual birthday for public celebration. This shows a genuinely distinct model: rather than commemorating a past historical event, this kind of national observance is tied to the ongoing institution of the monarchy itself and updates automatically with each new reign.</div>

      <QuickCheck
        question="How does the UK's approach to a national day differ from France's or Switzerland's?"
        options={[
          { text: "The UK observes an Independence Day, like most other national days", correct: false, explanation: "The UK does not observe an Independence Day — it was not a colony transferring sovereignty from another power in the relevant historical sense." },
          { text: "The UK centers its main national public celebration on the monarch's official birthday, rather than a fixed historical event", correct: true, explanation: "Correct. This is a genuinely different structure — tied to the ongoing institution of the monarchy rather than a specific past historical date." },
          { text: "There's no real difference — all three countries mark the same type of founding-event holiday", correct: false, explanation: "The three are structurally distinct: Bastille Day (a revolutionary event), Swiss National Day (a founding alliance), and the UK's Sovereign's Official Birthday (an ongoing monarchical institution) are different categories." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming every country's 'national day' is functionally an Independence Day.", fix: "Bastille Day (a revolutionary event), Swiss National Day (a founding alliance), and German Unity Day (a reunification) are all real national days that aren't independence commemorations at all." },
          { mistake: "Assuming a monarch's 'official birthday' matches their actual birth date.", fix: "In the UK and several Commonwealth realms, the sovereign's official birthday is a separately designated date chosen for practical reasons like weather, distinct from their real birth date." },
          { mistake: "Treating unification (like German Unity Day) as the same category as independence.", fix: "Unification marks separate states or territories joining into one nation, a structurally different event from a colony gaining sovereignty from a foreign ruling power." },
        ]}
      />
      <MisconceptionCallout
        myth="Every country's national day marks its independence from a colonial power."
        reality={<p>National day is a broad category covering several distinct kinds of commemorated events. France&apos;s Bastille Day marks a domestic revolutionary event, Switzerland&apos;s National Day marks a 1291 founding alliance among cantons, Germany&apos;s Unity Day marks 1990 reunification, and the United Kingdom centers its main public national observance on the monarch&apos;s official birthday rather than a single fixed historical date at all. Independence Day is one real category among several, not the definition of what a national day is.</p>}
      />

      <QuickCheck
        question="Which of these is an accurate example of a national day that does NOT commemorate independence from a colonial power?"
        options={[
          { text: "Switzerland's National Day, marking the 1291 Federal Charter alliance among cantons", correct: true, explanation: "Correct. This is a founding-alliance national day, structurally distinct from an independence commemoration." },
          { text: "India's Independence Day, marking the 1947 Indian Independence Act", correct: false, explanation: "This one genuinely is an Independence Day, marking the specific 1947 transfer of sovereignty away from British colonial rule." },
          { text: "Brazil's Independence Day, marking its 1822 separation from Portugal", correct: false, explanation: "This is also a genuine Independence Day, commemorating Brazil's break from Portuguese colonial rule." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you hear 'national day' used for a country you're unfamiliar with, check what specific event it actually commemorates rather than assuming it's an Independence Day.",
          "Notice whether a national day marks a revolution, a founding alliance, a unification, or an ongoing monarchical institution — the underlying category shapes how the day is actually celebrated.",
          "If you're discussing a monarchy's national observance, check whether the date is an 'official' birthday rather than the ruler's actual birth date.",
          "Look up your own country's national day, if it has one, and identify precisely which historical category it falls into.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is a national day the same as an Independence Day?", answer: "Not always — Independence Day is one category of national day, but others mark revolutions (Bastille Day), founding alliances (Swiss National Day), unification (German Unity Day), or an ongoing monarchical institution (the UK's Sovereign's Official Birthday)." },
          { question: "What does Bastille Day actually commemorate?", answer: "The July 14, 1789 storming of the Bastille prison, a symbolic flashpoint of the French Revolution — a domestic revolutionary event, not independence from a foreign colonial power." },
          { question: "Why does Switzerland celebrate its National Day on August 1?", answer: "It marks the 1291 Federal Charter, an alliance formed among the cantons of Uri, Schwyz, and Unterwalden that is traditionally treated as the founding document of the Swiss Confederation." },
          { question: "Does the UK have a national day?", answer: "Not in the same single-fixed-date sense as most republics — its main comparable public national observance is the monarch's official birthday, celebrated each June with Trooping the Colour, on a date chosen separately from the monarch's actual birth date." },
          { question: "What is the difference between a national day marking unification and one marking independence?", answer: "Unification (like Germany's October 3 Unity Day, marking 1990 reunification) commemorates separate states or territories joining into one nation, while independence marks a colony or territory gaining sovereignty from a foreign ruling power — structurally different kinds of historical events." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
