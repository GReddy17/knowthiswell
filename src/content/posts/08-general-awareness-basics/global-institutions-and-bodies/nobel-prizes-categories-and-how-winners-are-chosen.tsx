import React from 'react';
import { PostFrontmatter } from '@/types/post';
import {
  KeyTakeaways,
  ModeToggle,
  FootnoteAside,
  QuickCheck,
  DiagramBlock,
  MistakeList,
  MisconceptionCallout,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Nobel Prizes: Categories & How Winners Are Chosen",
  category: "general-awareness-basics",
  order: 8,
  subtopic: "global-institutions-and-bodies",
  tags: ["Nobel Prize", "Nobel Committee", "awards", "science prizes", "civics"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "The Nobel Prize isn't one award decided by one committee — it's six separate prizes, run by different institutions, each with its own nomination and selection process.",
  summary: "The Nobel Prizes are six separate annual awards — Physics, Chemistry, Physiology or Medicine, Literature, Peace, and the related Economic Sciences prize — each administered by a different Swedish or Norwegian institution, selected through a confidential nomination process that runs roughly a year before the prize is announced.",
  sources: [
    { label: "The Nobel Prize — Nomination and Selection of Nobel Laureates", url: "https://www.nobelprize.org/nomination/" },
    { label: "The Nobel Prize — Alfred Nobel's Will", url: "https://www.nobelprize.org/alfred-nobel/alfred-nobels-will/" },
    { label: "Encyclopaedia Britannica — Nobel Prize", url: "https://www.britannica.com/topic/Nobel-Prize" },
  ],
  seeAlso: [
    "general-awareness-basics/what-the-united-nations-actually-does",
    "general-awareness-basics/how-country-rankings-and-indices-are-calculated-hdi-and-similar",
  ],
  glossary: [
    {"term":"Nobel Committee","definition":"One of several bodies (a different one for each prize category) responsible for evaluating nominations and recommending that category's laureate to the awarding institution."},
    {"term":"Nomination","definition":"A formal proposal of a candidate for a Nobel Prize, submitted only by individuals specifically invited to nominate (such as previous laureates or qualified academics), never through open public submission."},
    {"term":"Sveriges Riksbank Prize","definition":"The formal name of the Economic Sciences prize, established in 1968 by Sweden's central bank in memory of Alfred Nobel — not one of the five original prizes named in Nobel's 1895 will, though administered alongside them."},
    {"term":"50-year confidentiality rule","definition":"The Nobel institutions' practice of keeping nomination and evaluation records sealed for 50 years before any public disclosure, protecting the confidentiality of the selection process."},
  ],
  author: {
    slug: "james-h-rivers",
    name: "James H. Rivers",
    credentialLine: "Founder, KnowThisWell",
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
      "There are six Nobel Prize categories — Physics, Chemistry, Physiology or Medicine, Literature, Peace, and Economic Sciences — each run by a separate institution, not one single unified body.",
      "Nominations are never open to the public — only specifically invited nominators, such as previous laureates and qualified academics, can submit a candidate.",
      "The Economic Sciences prize, formally the Sveriges Riksbank Prize, was created in 1968 and isn't one of the five original prizes named in Alfred Nobel's 1895 will, though it's awarded alongside them using a similar process.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">The Nobel Prize is actually six separate prizes, each judged by its own group of experts. Physics, Chemistry, and Economic Sciences are decided by the Royal Swedish Academy of Sciences; Physiology or Medicine by the Karolinska Institute; Literature by the Swedish Academy; and Peace, uniquely, by a Norwegian committee rather than a Swedish one. Every year, a <TermLink href="/general-awareness-basics/nobel-prizes-categories-and-how-winners-are-chosen">Nobel Committee</TermLink> for each category reviews confidential nominations and recommends a winner to that category&apos;s awarding institution.</div>}
      detailed={<div className="prose-p">The prizes originate from the 1895 will of Alfred Nobel, the Swedish inventor of dynamite, who left most of his fortune to fund annual prizes in Physics, Chemistry, Physiology or Medicine, Literature, and Peace. The <TermLink href="/general-awareness-basics/nobel-prizes-categories-and-how-winners-are-chosen">Sveriges Riksbank Prize</TermLink> in Economic Sciences was added later, in 1968, by Sweden&apos;s central bank in Nobel&apos;s memory — administered by the same Royal Swedish Academy of Sciences and following the same selection process, but not technically one of Nobel&apos;s original five. Every fall, each Nobel Committee sends confidential invitations to thousands of qualified people — past laureates, university professors in relevant fields, and members of specific academies — asking them to submit <TermLink href="/general-awareness-basics/nobel-prizes-categories-and-how-winners-are-chosen">nominations</TermLink> for the following year&apos;s prize. No one can nominate themselves, and the general public cannot submit nominations at all. The committees then spend months narrowing the list before recommending a final laureate (or laureates — up to three people can share a prize) to the full awarding institution for approval.</div>}
      />
      <FootnoteAside>Nobel&apos;s Peace Prize is judged by a Norwegian Nobel Committee, not a Swedish one — a historical quirk stemming from the 1895 union between Sweden and Norway, under which Nobel apparently believed Norway&apos;s parliament was better positioned to award a peace-focused prize than Sweden&apos;s.</FootnoteAside>

      <p>
      The part of the process most people never see is exactly how selective and confidential the nomination stage is — winning a Nobel Prize starts with being nominated by someone specifically invited to do so, not by applying.
      </p>

      <QuickCheck
      question="Can a member of the public nominate someone for a Nobel Prize by submitting a name to the Nobel Committee?"
      options={[
      { text: "Yes, any member of the public can submit a nomination", correct: false, explanation: "Nominations are restricted to individuals specifically invited by the relevant Nobel Committee — the general public has no route to submit a nomination directly." },
      { text: "No — only specifically invited nominators, such as previous laureates and qualified academics in the relevant field, can submit a nomination", correct: true, explanation: "Correct. Each committee sends confidential invitations to a defined pool of qualified nominators each year; nominations from outside that invited pool aren't accepted." },
      { text: "No — nominations are made automatically based on published research citation counts", correct: false, explanation: "There's no automatic citation-based nomination system — nominations are a deliberate, invitation-based human process, not an algorithmic one." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The Physics Prize selection process (baseline case)</h3>
      <div className="prose-p">
      Each September, the Nobel Committee for Physics sends confidential nomination invitations to thousands of physicists and past laureates worldwide. Nominations close the following January. Through the spring and summer, the committee consults outside experts and narrows the field, and by early October it recommends a laureate (or up to three sharing the prize) to the Royal Swedish Academy of Sciences, which formally approves and announces the winner — completing a process that spans roughly a full year from initial invitation to final announcement.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why the Peace Prize is decided differently (edge case / variation)</h3>
      <div className="prose-p">
      Unlike the other five prizes, the Peace Prize is selected entirely by the Norwegian Nobel Committee, appointed by Norway&apos;s parliament, rather than by a Swedish scientific or literary academy. This is a structural exception written into Nobel&apos;s original 1895 will itself, not a later change — meaning the Peace Prize has always followed a genuinely separate institutional path from the Physics, Chemistry, Medicine, and Literature prizes, even though all six are announced during the same annual Nobel season.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A prize shared by multiple laureates (real-world / applied case)</h3>
      <div className="prose-p">
      Nobel Prize rules allow a single prize to be shared by up to three people, reflecting cases where a discovery or body of work involved multiple key contributors. When this happens, the prize&apos;s monetary award is split among the laureates (evenly, or as the awarding institution decides), while each laureate still receives full recognition as a Nobel laureate — showing that &quot;winning a Nobel Prize&quot; doesn&apos;t require having been the single, sole contributor to the honored work.
      </div>

      <QuickCheck
      question="Is the Nobel Prize in Economic Sciences one of the original prizes named in Alfred Nobel's 1895 will?"
      options={[
      { text: "Yes, Nobel named all six prize categories including economics in his original will", correct: false, explanation: "Nobel's 1895 will named only five prizes: Physics, Chemistry, Physiology or Medicine, Literature, and Peace — economics was not among them." },
      { text: "No — the Economic Sciences prize was established later, in 1968, by Sweden's central bank in Nobel's memory, and is administered alongside the original five using a similar process", correct: true, explanation: "Correct. It's formally called the Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel — a distinct, later addition, though widely referred to simply as a 'Nobel Prize.'" },
      { text: "No — there is no Nobel Prize in economics at all", correct: false, explanation: "The Economic Sciences prize does exist and is awarded annually alongside the other five — it's simply not one of Nobel's original 1895-will categories." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The six Nobel Prizes and their awarding institutions"
      type="detail"
      svgSrc="/diagrams/general-awareness-basics-nobel-prizes-categories-and-how-winners-are-chosen-six-categories.svg"
      altText="A diagram listing six Nobel Prize categories each paired with its awarding institution: Physics and Chemistry with the Royal Swedish Academy of Sciences, Physiology or Medicine with the Karolinska Institute, Literature with the Swedish Academy, Peace with the Norwegian Nobel Committee, and Economic Sciences with the Royal Swedish Academy of Sciences, with a note that Peace is the only prize decided outside Sweden."
      />
      <p>
      Laid out this way, the &quot;one Nobel Prize&quot; mental model breaks down visibly — it&apos;s six separate award processes that happen to share a name, a founding source of funds, and an annual announcement season.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a single Nobel Committee decides all six prize categories.", fix: "Remember each category has its own committee and awarding institution — Physics, Chemistry, Medicine, Literature, Peace, and Economics are all decided separately." },
      { mistake: "Believing the public can nominate candidates directly.", fix: "Only specifically invited nominators (past laureates, qualified academics, and similar invited groups) can submit nominations — there's no public nomination route." },
      { mistake: "Treating the Economic Sciences prize as identical in origin to the original five prizes.", fix: "It's a later 1968 addition by Sweden's central bank, not one of Nobel's original 1895 will categories, even though it follows a similar selection process." },
      ]}
      />
      <MisconceptionCallout
      myth="Nobel Prize winners are chosen through an open, public voting or application process."
      reality={<p>The process is deliberately confidential at every stage — nominations come only from specifically invited nominators, committee deliberations aren&apos;t published in real time, and even historical nomination records stay sealed for 50 years under the Nobel institutions&apos; own confidentiality rule. There is no public voting or open application involved at any point.</p>}
      />

      <QuickCheck
      question="How long does the Nobel institutions' confidentiality rule keep nomination records sealed before any public disclosure?"
      options={[
      { text: "They are never disclosed publicly", correct: false, explanation: "Records are eventually disclosed — just not for a long time — under the Nobel institutions' own 50-year confidentiality rule." },
      { text: "50 years", correct: true, explanation: "Correct. The Nobel institutions keep nomination and evaluation records sealed for 50 years, after which historians and researchers can access them." },
      { text: "5 years", correct: false, explanation: "Five years is far shorter than the actual rule — the real confidentiality period is 50 years, a deliberately long window." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Next time a Nobel Prize is announced, check which institution awarded it — the answer tells you a lot about how that specific prize's process works.",
      "Look up which of the six categories a country's past laureates have won in, on the Nobel Prize's own official site, to see real category-by-category patterns.",
      "Remember that 'shared' Nobel Prizes (up to three laureates) are common, not an exception — check whether a prize you're reading about was shared.",
      "If you're curious about historical selection debates, the Nobel institutions publish nomination archives for years more than 50 years in the past.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How many Nobel Prize categories are there?", answer: "Six: Physics, Chemistry, Physiology or Medicine, Literature, Peace, and Economic Sciences — each judged and awarded by a separate institution." },
      { question: "Who decides who wins a Nobel Prize?", answer: "A dedicated Nobel Committee for each category reviews confidential nominations from specifically invited nominators and recommends a laureate to that category's awarding institution for final approval." },
      { question: "Can you nominate yourself for a Nobel Prize?", answer: "No. Self-nominations are not accepted — only individuals specifically invited by the relevant committee, such as past laureates and qualified academics, can submit a nomination." },
      { question: "Why is the Nobel Peace Prize decided in Norway instead of Sweden?", answer: "Alfred Nobel's original 1895 will specifically assigned the Peace Prize to a Norwegian committee, unlike the other prizes, which are Swedish-administered — a structural exception built into the will itself." },
      { question: "Is the Nobel Prize in Economics an original Nobel Prize?", answer: "Not technically — it was established in 1968 by Sweden's central bank in Nobel's memory, decades after Nobel's original 1895 will named the other five prizes, though it follows a similar selection process." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
