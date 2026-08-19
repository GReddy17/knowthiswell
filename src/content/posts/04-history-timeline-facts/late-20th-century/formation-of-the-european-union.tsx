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
  title: "Formation of the European Union",
  category: "history-timeline-facts",
  order: 40,
  subtopic: "late-20th-century",
  tags: ["european union", "maastricht treaty", "european history", "eu formation", "20th century history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How the European Union formed gradually from 1950s economic communities to the 1993 Maastricht Treaty, not as a single unified entity from day one.",
  summary: "The European Union was formally established by the Maastricht Treaty, which took effect on November 1, 1993, but it grew gradually out of earlier European economic cooperation dating back to the 1950s, rather than being created as a single unified political entity from the start.",
  sources: [
    { label: "European Union — Official history of the EU", url: "https://european-union.europa.eu/principles-countries-history/history-eu_en" },
    { label: "Encyclopaedia Britannica — European Union", url: "https://www.britannica.com/topic/European-Union" },
    { label: "EUR-Lex (EU official law database) — Treaty of Maastricht on European Union", url: "https://eur-lex.europa.eu/EN/legal-content/summary/treaty-of-maastricht-on-european-union.html" },
  ],
  seeAlso: [
    "history-timeline-facts/fall-of-the-berlin-wall",
    "history-timeline-facts/end-of-apartheid",
    "history-timeline-facts/major-technological-shifts-20th-century",
  ],
  glossary: [
    { term: "European Coal and Steel Community (ECSC)", definition: "A 1951 agreement among six European countries to jointly manage coal and steel production, widely regarded as the founding step of European economic integration." },
    { term: "European Economic Community (EEC)", definition: "A common market established by the 1957 Treaty of Rome among the same six founding countries, aimed at reducing trade barriers and later becoming known as the \"Common Market.\"" },
    { term: "Maastricht Treaty", definition: "The 1992 treaty, taking effect November 1, 1993, that formally created the European Union, established EU citizenship, and laid groundwork for a shared currency." },
    { term: "Eurozone", definition: "The group of EU member states that have adopted the euro as their official currency; not all EU members use the euro." },
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
          "The European Union was formally created by the Maastricht Treaty, which took effect November 1, 1993 — but it grew out of over four decades of prior European economic cooperation, starting with a 1951 coal and steel agreement.",
          "The EU's founding six members in the 1950s (Belgium, France, Italy, Luxembourg, the Netherlands, and West Germany) expanded gradually through multiple rounds of enlargement, reaching 27 member states today after the United Kingdom's 2020 exit.",
          "The euro, the EU's shared currency, was introduced years after the EU itself formed — as physical cash in 2002 — and is used only by the subset of member states in the eurozone, not by every EU country.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/history-timeline-facts/formation-of-the-european-union">European Union</TermLink> is a political and economic union of European countries that formally came into being on November 1, 1993, when the Maastricht Treaty took effect. But the EU didn&apos;t appear from nothing — it grew step by step out of earlier cooperation agreements going back to 1951, when six countries agreed to jointly manage coal and steel production as a way to make another European war economically difficult, and 1957, when those same six countries formed the European Economic Community, a common market for trade. The Maastricht Treaty took that decades-old economic cooperation and built formal political union on top of it, including EU citizenship and a path toward a shared currency.</div>}
        detailed={<div className="prose-p">The <TermLink href="/history-timeline-facts/formation-of-the-european-union">European Coal and Steel Community (ECSC)</TermLink>, established by the 1951 Treaty of Paris among Belgium, France, Italy, Luxembourg, the Netherlands, and West Germany, is documented by the EU&apos;s own official history as the founding step — its explicit goal, per the EU&apos;s official account, was to make renewed war between France and Germany &quot;not merely unthinkable, but materially impossible&quot; by integrating their coal and steel industries. The 1957 Treaty of Rome expanded this into the <TermLink href="/history-timeline-facts/formation-of-the-european-union">European Economic Community (EEC)</TermLink>, a broader common market. Over the following decades, membership expanded in stages — the UK, Ireland, and Denmark joined in 1973; Greece in 1981; Spain and Portugal in 1986 — and cooperation deepened, including the 1985 Schengen Agreement on open internal borders. Only with the <TermLink href="/history-timeline-facts/formation-of-the-european-union">Maastricht Treaty</TermLink>, signed in February 1992 and taking effect November 1, 1993, did this economic community formally become the European Union, adding EU citizenship and a framework for what would become the euro. A regional nuance worth noting: not every EU member has adopted the euro (the currency entered circulation as cash in 2002) or joined the Schengen open-border area — several member states retain their own currencies or border controls, meaning &quot;EU member&quot; and &quot;eurozone member&quot; are related but distinct categories.</div>}
      />
      <FootnoteAside>The euro&apos;s introduction as physical cash on January 1, 2002 was, at the time, the largest currency changeover in history, replacing national currencies including the French franc, German deutsche mark, and Italian lira across the countries that adopted it.</FootnoteAside>
      <p>
      That multi-decade build-up — coal and steel in 1951, a common market in 1957, and political union only in 1993 — is the key fact that separates the documented history of the EU from a simplified story where it appeared as a single finished union.
      </p>

      <QuickCheck
        question="What was the first formal step in what eventually became the European Union?"
        options={[
          { text: "The Maastricht Treaty in 1993, which created the EU directly with no prior cooperation", correct: false, explanation: "Maastricht formalized the EU, but it built on more than four decades of prior European economic cooperation — it wasn't the starting point." },
          { text: "The European Coal and Steel Community, a 1951 agreement among six countries to jointly manage coal and steel production", correct: true, explanation: "Correct. The EU's own official history identifies the 1951 ECSC, aimed at making renewed European war economically impossible, as the founding step of European integration." },
          { text: "The adoption of the euro as a shared currency in 2002", correct: false, explanation: "The euro came nearly a decade after the EU itself formed in 1993, and nearly 50 years after the process of European integration began in 1951 — it was a later stage, not the starting point." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The original six founding members and the coal and steel agreement (baseline)</h3>
      <div className="prose-p">
      In 1951, Belgium, France, Italy, Luxembourg, the Netherlands, and West Germany signed the Treaty of Paris, creating the European Coal and Steel Community. By placing coal and steel production, the key materials for waging war at the time, under a shared authority, the goal, as documented by the EU&apos;s official history, was to make future conflict between France and Germany economically impractical rather than simply agreeing not to fight. This is the single step historians and the EU itself point to as the true origin of European integration, predating the EU by more than four decades.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The Maastricht Treaty and the leap from economic community to political union (variation / turning point)</h3>
      <div className="prose-p">
      By 1992, the European Economic Community had already expanded to twelve member states and existed mainly as an economic common market. The Maastricht Treaty, signed February 7, 1992, and taking effect November 1, 1993, went further: it formally established the European Union, introduced EU citizenship (held alongside, not instead of, national citizenship), and set out convergence criteria for member states to eventually adopt a shared currency. This is documented by the EU as the moment the project shifted from being primarily an economic arrangement to a political union as well.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How EU membership and enlargement still shape Europe today (present-day / applied)</h3>
      <div className="prose-p">
      The EU has continued to expand and change membership since 1993 — including a major 2004 enlargement adding ten mostly Central and Eastern European countries, and the United Kingdom&apos;s withdrawal (&quot;Brexit&quot;), which took legal effect January 31, 2020, making the UK the first member state to leave. Today the EU has 27 member states, and ongoing accession talks with additional candidate countries are part of current EU policy, documented on the EU&apos;s official website — a reminder that EU membership has never been static since the union&apos;s 1993 formation.
      </div>

      <QuickCheck
        question="What did the Maastricht Treaty specifically establish when it took effect in 1993?"
        options={[
          { text: "The original coal and steel cooperation agreement among six countries", correct: false, explanation: "That was the 1951 European Coal and Steel Community, over four decades earlier — a separate, prior agreement, not part of the Maastricht Treaty." },
          { text: "The formal European Union itself, including EU citizenship and groundwork for a shared currency", correct: true, explanation: "Correct. The Maastricht Treaty, taking effect November 1, 1993, formally created the EU on top of the pre-existing European Economic Community." },
          { text: "The euro as physical currency in circulation", correct: false, explanation: "Euro cash entered circulation in 2002, nearly a decade after Maastricht — the treaty set groundwork and convergence criteria, but the physical currency came later." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="From coal and steel to the EU: key documented milestones, 1951-2020"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-formation-of-the-european-union-milestones-timeline.svg"
        altText="Horizontal timeline showing the European Coal and Steel Community formed in 1951, the European Economic Community formed by the Treaty of Rome in 1957, successive enlargements in 1973, 1981, and 1986, the Maastricht Treaty establishing the European Union effective November 1993, euro cash entering circulation in 2002, the 2004 enlargement adding ten member states, and the United Kingdom's withdrawal taking effect in 2020."
      />
      <p>
      Viewed across nearly seventy years, the EU&apos;s formation looks less like a single founding moment and more like a gradual, multi-stage integration process — economic cooperation first, political union decades later, and continued change (both enlargement and, in the UK&apos;s case, withdrawal) even after that.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the European Union and the euro currency were introduced at the same time.", fix: "The EU formed in 1993 via the Maastricht Treaty; euro cash didn't enter circulation until January 1, 2002, nearly nine years later, and even then only in the subset of member states that adopted it." },
          { mistake: "Assuming every EU member state uses the euro and has open Schengen borders.", fix: "Both eurozone membership and Schengen participation are separate from EU membership — several EU countries retain their own currency or maintain border checks, so \"EU member\" doesn't automatically mean either." },
          { mistake: "Treating the EU as a fixed group of countries that has never changed since 1993.", fix: "Membership has changed repeatedly through enlargement (the 2004 addition of ten countries being the largest single round) and, with the UK's 2020 exit, through withdrawal as well — current membership stands at 27 states." },
        ]}
      />
      <MisconceptionCallout
        myth="The European Union began as a single unified political entity from day one, rather than evolving gradually from earlier economic communities."
        reality={<p>The EU&apos;s own official history documents a gradual, multi-decade build-up: the European Coal and Steel Community (1951) among six countries, expanded into the European Economic Community common market by the 1957 Treaty of Rome, followed by successive rounds of country enlargement through the 1970s and 1980s. Only with the Maastricht Treaty, signed in 1992 and taking effect November 1, 1993 — more than four decades after the first agreement — did this become the formally named European Union with EU citizenship and a path to a shared currency. The euro itself didn&apos;t reach circulation as cash until 2002, even later still.</p>}
      />

      <QuickCheck
        question="According to the EU's own official history, roughly how many years passed between the first step of European integration and the formal creation of the European Union?"
        options={[
          { text: "Under five years", correct: false, explanation: "The gap was far longer — the first integration step (1951) predates the EU's formal creation (1993) by more than four decades." },
          { text: "Over four decades — from the 1951 Coal and Steel Community to the Maastricht Treaty taking effect in 1993", correct: true, explanation: "Correct. This roughly 42-year span is exactly why the EU's official history frames its formation as gradual rather than instantaneous." },
          { text: "The EU and the first integration agreement were established in the same year", correct: false, explanation: "They were separated by more than four decades — 1951 for the first coal and steel agreement, 1993 for the formal EU." },
        ]}
      />

      <EntryCalculator
        title="Years since the European Union formally took effect"
        fields={[
          { key: "year", label: "Reference year (Maastricht Treaty took effect: 1993)", defaultValue: 1993 },
        ]}
        resultLabel="Years elapsed since that year"
        formula="yearsSinceYear"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time someone dates \"the EU\" to a single founding year, mention the 1951 Coal and Steel Community as the actual, documented starting point of European integration.",
          "When the euro comes up, remember it arrived nearly a decade after the EU itself and is used only by eurozone member states, not automatically by every EU country.",
          "Notice when EU membership is treated as fixed — remember it has changed through both enlargement (most recently growing to 27 states) and the UK's 2020 withdrawal.",
          "If you want the primary source, the EU's own official history page lays out this full sequence directly, treaty by treaty.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "When was the European Union formally established?", answer: "The European Union was formally established by the Maastricht Treaty, signed in February 1992 and taking effect November 1, 1993." },
          { question: "What was the first step toward the European Union?", answer: "The European Coal and Steel Community, formed in 1951 by Belgium, France, Italy, Luxembourg, the Netherlands, and West Germany to jointly manage coal and steel production, is documented by the EU's official history as the founding step of European integration." },
          { question: "How many countries founded the European Union?", answer: "Six countries — Belgium, France, Italy, Luxembourg, the Netherlands, and West Germany — began the integration process in 1951, though the formally named European Union wasn't created until 1993, by which point membership had already expanded further." },
          { question: "Is the euro the same thing as the European Union?", answer: "No. The EU is the political and economic union itself, formed in 1993; the euro is a shared currency used only by the subset of EU member states in the eurozone, and it didn't enter circulation as cash until 2002." },
          { question: "How many countries are in the European Union today?", answer: "The EU has 27 member states as of the most recent enlargement and withdrawal changes, after the United Kingdom's exit ('Brexit') took legal effect on January 31, 2020." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
