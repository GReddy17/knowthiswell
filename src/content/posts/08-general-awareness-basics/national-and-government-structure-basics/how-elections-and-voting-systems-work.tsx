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
  title: "How Elections & Voting Systems Work",
  category: "general-awareness-basics",
  order: 11,
  subtopic: "national-and-government-structure-basics",
  tags: ["voting systems", "elections", "proportional representation", "first-past-the-post", "civics"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "The same set of votes can produce different winners depending on the counting method — first-past-the-post, proportional representation, and ranked-choice voting aren't just paperwork variations, they change outcomes.",
  summary: "A voting system is the specific mathematical method used to convert votes into winners or seats — first-past-the-post awards the seat to whoever gets the most votes even without a majority, proportional representation allocates seats to parties roughly matching their overall vote share, and ranked-choice voting eliminates candidates and redistributes votes until someone has a true majority.",
  sources: [
    { label: "Encyclopaedia Britannica — Electoral System", url: "https://www.britannica.com/topic/election-political-science" },
    { label: "Inter-Parliamentary Union (IPU) — Electoral Systems", url: "https://www.ipu.org/our-impact/parliaments-and-democracy" },
    { label: "FairVote — Ranked Choice Voting Overview", url: "https://fairvote.org/our-reforms/ranked-choice-voting/" },
  ],
  seeAlso: [
    "general-awareness-basics/how-a-democracy-actually-works-branches-of-government",
    "general-awareness-basics/what-a-census-is-and-why-it-matters",
    "general-awareness-basics/understanding-political-ideologies-neutral-overview",
  ],
  glossary: [
    {"term":"First-past-the-post","definition":"A voting system where the candidate with the most votes in a district wins the seat outright, even without a majority (more than 50%) of the votes."},
    {"term":"Proportional representation","definition":"A voting system where seats in a legislature are allocated to parties roughly in proportion to their overall share of the vote, rather than winner-take-all by district."},
    {"term":"Ranked-choice voting","definition":"A voting system where voters rank candidates by preference; if no candidate has a majority of first-choice votes, the last-place candidate is eliminated and their votes redistributed to voters' next choice, repeating until someone has a majority."},
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
      "The exact same set of ballots can produce a different winner depending on which counting method is used — the voting system itself is not a neutral formality.",
      "First-past-the-post can elect a winner with well under 50% of the vote if several candidates split the rest; proportional representation and ranked-choice voting are both explicitly designed to avoid that outcome, in different ways.",
      "Most countries use some blend of these systems rather than a single pure method — understanding the three base types lets you decode almost any real-world variant.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Under <TermLink href="/general-awareness-basics/how-elections-and-voting-systems-work">first-past-the-post</TermLink>, whoever gets the most votes in a district wins — even if that&apos;s only 35% and the other 65% split across other candidates. Under <TermLink href="/general-awareness-basics/how-elections-and-voting-systems-work">proportional representation</TermLink>, a party that wins 30% of the national vote gets roughly 30% of the seats, spreading representation out instead of concentrating it in single-winner districts. Under <TermLink href="/general-awareness-basics/how-elections-and-voting-systems-work">ranked-choice voting</TermLink>, voters rank candidates, and if nobody has over 50% of first choices, the weakest candidate is dropped and their voters&apos; next choice gets counted instead — repeating until someone crosses 50%.</div>}
      detailed={<div className="prose-p">These three systems solve different problems. First-past-the-post is simple to count and tends to produce strong single-party governments, but can badly under-represent smaller parties and lets a candidate win despite most voters preferring someone else. Proportional representation fixes the under-representation problem by allocating seats using parties&apos; overall vote share (commonly via formulas like the D&apos;Hondt method), but tends to produce coalition governments since single parties rarely reach a full majority alone. Ranked-choice voting keeps single-winner districts (like first-past-the-post) but adds instant-runoff elimination rounds specifically to guarantee the eventual winner has genuine majority support among voters who expressed a preference, addressing the vote-splitting problem without switching to a proportional, multi-party-seat model.</div>}
      />
      <FootnoteAside>Many real countries mix these systems — Germany&apos;s Bundestag uses a &quot;mixed-member proportional&quot; system combining district-level first-past-the-post seats with proportional top-up seats specifically to balance local representation against overall proportionality, rather than choosing one pure method.</FootnoteAside>

      <p>
      None of these systems is objectively &quot;correct&quot; — each trades off differently between simplicity, proportionality, and the strength of the resulting government, which is why democracies genuinely disagree about which to use.
      </p>

      <QuickCheck
      question="In a first-past-the-post district, Candidate A gets 35% of the vote, Candidate B gets 33%, and Candidate C gets 32%. Who wins the seat?"
      options={[
      { text: "Candidate A, because they got the most votes, even without a majority", correct: true, explanation: "Correct. First-past-the-post awards the seat to whoever has the most votes, regardless of whether that's a majority — 65% of voters here preferred someone other than Candidate A, but A still wins outright." },
      { text: "Nobody — a runoff election would automatically be triggered", correct: false, explanation: "Pure first-past-the-post has no automatic runoff — that's a feature of two-round or ranked-choice systems, not first-past-the-post itself." },
      { text: "The seat is split proportionally between all three candidates", correct: false, explanation: "First-past-the-post is winner-take-all for a single seat — there's no vote splitting of the seat itself; that concept belongs to proportional representation for multi-seat allocations, not single-winner districts." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: First-past-the-post with vote-splitting (baseline case)</h3>
      <div className="prose-p">
      Three candidates run in a single district: A gets 40%, B gets 35%, C gets 25%. Under first-past-the-post, A wins outright with 40% — even though 60% of voters chose someone other than A. This is the core criticism of the system: when more than two candidates run, the winner can represent a minority of voters overall.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same election under ranked-choice voting (edge case / variation)</h3>
      <div className="prose-p">
      Same three candidates, but voters rank their preferences. No one has over 50% of first choices, so C (last place) is eliminated, and C&apos;s ballots are redistributed to whichever of A or B each C voter ranked second. If most C voters had ranked B second, B could end up winning the runoff round with over 50%, despite trailing A in the first count — a genuinely different outcome from the same underlying voter preferences, purely because of the counting method.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Proportional representation allocating seats to vote share (real-world / applied case)</h3>
      <div className="prose-p">
      In a 100-seat proportional legislature, Party X wins 30% of the national vote, Party Y wins 45%, and Party Z wins 25%. Roughly, X gets about 30 seats, Y gets about 45, and Z gets about 25 — no single party reaches the 51 seats needed for an outright majority, so two parties would typically need to form a coalition government to pass legislation. This coalition-forming step almost never happens under pure first-past-the-post, where one party frequently wins an outright majority of seats despite winning well under half the national vote share.
      </div>

      <QuickCheck
      question="Under proportional representation, Party Y wins 45% of the vote in a 100-seat legislature but doesn't reach the 51 seats needed for a majority. What typically happens next?"
      options={[
      { text: "Party Y automatically gets rounded up to a majority", correct: false, explanation: "Proportional systems don't round a plurality up to a majority — seats stay allocated according to actual vote share, so 45% of the vote yields roughly 45 seats, not 51." },
      { text: "Party Y typically needs to form a coalition with at least one other party to reach a working majority and pass legislation", correct: true, explanation: "Correct. This coalition-building step is a defining, expected feature of proportional systems — no single party winning under 50% of the vote gets a majority of seats, so cross-party negotiation becomes routine." },
      { text: "A new election is automatically called", correct: false, explanation: "A hung result (no majority party) doesn't automatically trigger a new election in most proportional systems — the standard next step is coalition negotiation between parties, not an immediate re-vote." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Same votes, three different winners: how counting method changes outcomes"
      type="comparison"
      svgSrc="/diagrams/general-awareness-basics-how-elections-and-voting-systems-work-three-methods.svg"
      altText="Three side-by-side panels showing the same set of votes (Candidate A 40%, B 35%, C 25%) processed under three systems. First-past-the-post panel shows A winning outright. Ranked-choice panel shows C eliminated and votes redistributed, with B potentially winning the final round. Proportional representation panel shows seats split roughly 40/35/25 among the three, with no outright majority."
      />
      <p>
      The identical starting vote count produces three structurally different results — this is the clearest demonstration that a voting system is a design choice with real consequences, not a neutral counting mechanism.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming the candidate or party with the most votes always ends up with a majority of power.", fix: "Check which voting system was used — under first-past-the-post and proportional representation alike, a plurality (most votes, but under 50%) frequently governs, or requires a coalition, rather than automatically becoming a full majority." },
      { mistake: "Treating ranked-choice voting as the same thing as proportional representation.", fix: "Ranked-choice voting is still a single-winner system with elimination rounds; proportional representation is a multi-seat system that allocates seats to parties by vote share. They solve different problems and aren't interchangeable terms." },
      { mistake: "Assuming every country uses the same voting system.", fix: "Voting systems vary widely and many countries blend multiple methods (like Germany's mixed-member proportional system) — always check which specific system applies before assuming how an election's result was determined." },
      ]}
      />
      <MisconceptionCallout
      myth="Whichever candidate or party gets the single most votes always ends up in charge."
      reality={<p>This is only guaranteed under a pure majority system. Under first-past-the-post, a plurality winner (most votes, not a majority) governs outright in that seat. Under proportional representation, the largest party frequently still needs coalition partners to reach a working majority of seats, since winning the most votes nationally rarely means winning over 50% of them.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Before interpreting any election result, check which voting system was used — the same votes can mean different things under different systems.",
      "Notice when news coverage says a party 'won' — check whether that means an outright majority or just the largest single share.",
      "Look up your own country's or region's specific voting system to understand how your vote is actually counted and converted into representation.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is first-past-the-post voting?", answer: "A system where the candidate with the most votes in a district wins the seat outright, even without a majority — if three candidates split the vote, someone can win with well under 50%." },
      { question: "How does proportional representation work?", answer: "Seats in a legislature are allocated to parties roughly matching their overall share of the national or regional vote, rather than winner-take-all by district — a party with 30% of the vote gets roughly 30% of the seats." },
      { question: "What is ranked-choice voting and how does it work?", answer: "Voters rank candidates by preference. If no one has a majority of first-choice votes, the last-place candidate is eliminated and their voters' next choice is redistributed, repeating until one candidate has over 50%." },
      { question: "Can a candidate win an election without a majority of the vote?", answer: "Under first-past-the-post, yes — a plurality (the most votes, even under 50%) is enough to win. Ranked-choice voting and two-round runoff systems are specifically designed to guarantee the eventual winner has genuine majority support." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
