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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "How Job Boards Actually Rank and Surface Listings",
  category: "career-study-skills",
  order: 21,
  subtopic: "job-search-strategy",
  tags: ["job boards", "job search", "job listing ranking", "applicant tracking", "job search strategy"],
  date: "2026-09-02",
  updated: "2026-09-02",
  lastReviewed: "2026-09-02",
  excerpt: "Job boards rank listings using a composite score built from keyword relevance, how recently a posting was published, applicant engagement, and paid placement — not simply who posted first.",
  summary: "Job boards rank listings the way a search engine ranks pages: each posting is indexed by its keywords, skills, and location, then scored on relevance, recency, applicant engagement, and sometimes paid placement — and that composite score, recalculated with every search, determines where a listing lands rather than a fixed or chronological order.",
  sources: [
    { label: "CareerOneStop (U.S. Department of Labor)", url: "https://www.careeronestop.org" },
    { label: "O*NET Online (U.S. Department of Labor)", url: "https://www.onetonline.org" },
    { label: "Society for Human Resource Management (SHRM)", url: "https://www.shrm.org" },
  ],
  seeAlso: [
    "career-study-skills/what-applicant-tracking-systems-actually-do",
    "career-study-skills/how-recruiters-actually-screen-candidates",
    "career-study-skills/why-job-descriptions-list-so-many-requirements",
  ],
  glossary: [
    { term: "Relevance score", definition: "A calculated measure of how closely a job posting's indexed keywords, skills, and location match a searcher's query — the primary factor most job boards use to rank results." },
    { term: "Recency decay", definition: "A ranking adjustment that gradually reduces a listing's visibility the longer it has been posted, favoring newer postings over older ones with similar relevance." },
    { term: "Sponsored placement", definition: "A paid boost that raises a listing's position in search results beyond what its organic relevance and recency score alone would produce." },
    { term: "Engagement signal", definition: "Behavioral data — such as how often a listing is clicked or applied to — that a job board feeds back into its ranking to favor postings people actually respond to." },
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
          "Job boards don't list postings by post date or employer size — they rank each listing with a composite score built from keyword relevance, recency, applicant engagement, and sometimes paid placement.",
          "Every search recalculates that score, which is why the same posting can appear in a different position depending on the exact words a searcher used.",
          "Matching the specific phrasing common to a role — not just the general skill — usually improves a listing's visibility more than any other single factor a job seeker or employer can control.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Job boards work more like a search engine than a bulletin board. When you search &quot;marketing coordinator,&quot; the board isn&apos;t scanning every posting in real time — it&apos;s matching your search against an <TermLink href="/career-study-skills/how-job-boards-actually-rank-listings">index</TermLink> it already built from each posting&apos;s title, description, and tags, then sorting the matches by a <TermLink href="/career-study-skills/how-job-boards-actually-rank-listings">relevance score</TermLink>. Newer, more closely matching, and more actively clicked postings tend to rise; older, vaguer, or ignored ones tend to sink, even if nothing about the underlying job has changed.</div>}
        detailed={<div className="prose-p">This is the <strong>lookup via index, not search</strong> mental model: rather than re-reading every live posting&apos;s full text at the moment you search, the board pre-builds a searchable index — keywords, extracted skills, location, job type — and resolves your query against that index almost instantly. On top of the index lookup sits a ranking function that weighs several signals together: keyword and skill match to the query, a <TermLink href="/career-study-skills/how-job-boards-actually-rank-listings">recency decay</TermLink> that quietly lowers older postings even if nothing else about them has changed, <TermLink href="/career-study-skills/how-job-boards-actually-rank-listings">engagement signals</TermLink> like click-through and application rate that reward postings people actually respond to, and often a <TermLink href="/career-study-skills/how-job-boards-actually-rank-listings">sponsored placement</TermLink> boost employers pay for. The edge case: a highly relevant, well-matched posting can still rank below a less relevant but heavily promoted one, because sponsored placement is typically layered on top of the organic score rather than competing purely on relevance.</div>}
      />
      <FootnoteAside>Most major job boards refresh a listing&apos;s effective &quot;post date&quot; when an employer edits or reposts it, which is one reason identical roles sometimes reappear near the top of search results weeks after they first went live.</FootnoteAside>

      <p>
        Once the indexing-plus-scoring mechanism is visible, it explains a lot of what otherwise looks arbitrary about search results — including why the same role can look completely different in ranking depending on the exact words used to search for it.
      </p>

      <QuickCheck
        question="Why can two searches for what's essentially the same job title (like 'marketing coordinator' vs 'marketing associate') return listings in a different order?"
        options={[
          { text: "Because job boards randomize the order slightly on every search to be fair to all employers", correct: false, explanation: "There's no fairness-driven randomization — the order reflects how closely each posting's indexed keywords match the exact query, which changes as the query changes." },
          { text: "Because each search term matches a different set of indexed keywords, so the relevance score — and therefore the ranking — shifts based on the exact phrasing used", correct: true, explanation: "Correct. The ranking is computed per query against an index, so different phrasing produces a different match and a different order, even for similar roles." },
          { text: "Because job boards only show updated results once per day regardless of what's searched", correct: false, explanation: "Ranking is recalculated per search, not on a fixed daily schedule — that's not what's driving the difference in order." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Exact keyword match beats a synonym (baseline case)</h3>
      <p>
        A searcher types &quot;digital marketing manager.&quot; One posting is titled and described using that exact phrase throughout. A second, otherwise similar posting uses &quot;online marketing lead&quot; instead — a close synonym, but not the searched phrase. All else being equal, the first posting scores a higher relevance match and appears closer to the top, not because the underlying job is a better fit, but because its indexed text more closely mirrors the searcher&apos;s actual words.
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A well-matched but aging posting loses ground (edge case / variation)</h3>
      <div className="prose-p">
        A posting was an excellent keyword match when it went live 40 days ago, and it hasn&apos;t been edited since. A newer, slightly less precise posting for a similar role goes live today. Because of recency decay, the older posting&apos;s score gradually drops even though its content match hasn&apos;t changed — and it can end up ranked below the newer, less perfectly matched listing. The job itself is just as open and just as relevant; only its indexed &quot;freshness&quot; signal has changed.
      </div>
      <QuickCheck
        question="A job posting that was highly relevant to a search term 40 days ago now ranks lower than a newer, less precisely matched posting. What's the most likely explanation?"
        options={[
          { text: "The older posting must have been filled or removed, since job boards only show open roles", correct: false, explanation: "A drop in ranking doesn't mean a posting is closed — recency decay lowers a listing's score over time independent of whether the role is still open." },
          { text: "Recency decay has reduced the older posting's score over time, even though its keyword relevance hasn't changed", correct: true, explanation: "Correct. Ranking factors combine relevance and recency — an aging posting can lose ground on the recency component even while remaining just as relevant in content." },
          { text: "The newer posting must be from a larger, more well-known employer, which always ranks higher", correct: false, explanation: "Employer size or reputation isn't a standard ranking factor on its own — the ranking is driven by indexed relevance, recency, engagement, and paid placement." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Optimizing a job search around how ranking actually works (real-world / applied case)</h3>
      <p>
        A job seeker notices that searching their exact target title turns up dozens of loosely related results, while a more specific phrase pulls up a tighter, more relevant set near the top. Rather than browsing broad category listings and scrolling for pages, they search using the precise job titles and skill terms common in their field, check back regularly since newly posted listings tend to rank higher, and treat any obviously sponsored results at the very top as a separate category worth a quick look but not the full picture of what&apos;s actually available and well-matched.
      </p>
      <QuickCheck
        question="Why might searching with a precise, industry-standard job title tend to surface more relevant results than searching with a broad, general term?"
        options={[
          { text: "Because job boards manually curate results for common precise titles but not for broad ones", correct: false, explanation: "There isn't manual curation happening per search — the difference comes from how closely the search text matches each posting's indexed keywords." },
          { text: "Because a precise term produces a closer keyword match against the index, which raises the relevance component of the ranking score for genuinely similar postings", correct: true, explanation: "Correct. Precise, field-standard phrasing tends to match more of a well-written posting's indexed text, which improves the relevance score used in ranking." },
          { text: "Because broad search terms are technically limited to showing only the ten most recent postings", correct: false, explanation: "There's no such hard limit tied to search specificity — the ranking, not a result-count cap, is what changes based on the search terms used." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="From posting to search position: how a job board ranks a listing"
        type="flow"
        svgSrc="/diagrams/career-study-skills-how-job-boards-actually-rank-listings-flow.svg"
        altText="A flow diagram showing how a job board ranks listings: a posting is indexed by keywords, skills, and location, then scored on four ranking factors (keyword relevance, recency, applicant engagement, and sponsored placement), producing a composite score that sets the listing's position in search results."
      />
      <p>
        None of these factors act alone — a listing&apos;s position is the combined result of all four, recomputed every time someone searches.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming job boards list postings in the order employers submitted them.", fix: "Treat the order as a computed ranking based on relevance, recency, and engagement — not submission order — and search with precise terms to work with that system rather than against it." },
          { mistake: "Only browsing the first page of results and assuming it represents every relevant opening.", fix: "Try several close variants of your target title and skills — different phrasing surfaces genuinely different, still-relevant listings that a single search misses." },
          { mistake: "Treating sponsored listings at the top as the full, representative picture of what's available.", fix: "Scroll past paid placements to the organically ranked results too — sponsored position reflects a paid boost, not necessarily a better match." },
        ]}
      />
      <MisconceptionCallout
        myth="Job boards show every open listing in a neutral, complete, unranked list — what you see is simply what's out there."
        reality={<p>What you see is a filtered, scored, and sorted subset shaped by a ranking algorithm, not a neutral inventory. Relevance to your exact search terms, how recently a posting was published or edited, how often other users have engaged with it, and paid placement all shape what appears and in what order. Two people searching the same general role with slightly different words can see meaningfully different result sets from the same underlying pool of postings.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Search using the precise, field-standard job title and skill terms your target roles actually use, not just a general category name.",
          "Run the same search with two or three close phrasing variants, since ranking is recalculated per query and can surface different relevant listings each time.",
          "Check back on saved searches regularly — recency decay means newly posted or recently edited listings tend to rank higher than older ones with similar content.",
          "Read What Applicant Tracking Systems Actually Do next to see what happens once you've found a listing and actually submit an application.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do job boards decide which listings show up first?", answer: "Through a composite ranking score built from how closely a posting's indexed keywords match the search, how recently it was posted or edited, how much applicant engagement it has received, and sometimes paid sponsored placement — not simply post date or employer size." },
          { question: "Why do the same job search results look different depending on the exact words I use?", answer: "Because the ranking is computed per search against an index of each posting's title, description, and tags — different phrasing matches different postings more or less closely, which changes both which listings appear and their order." },
          { question: "Do older job postings get pushed down in search results even if the role is still open?", answer: "Often yes — most job boards apply a recency decay that gradually lowers a listing's score the longer it's been live, independent of whether the position is still open, which is one reason employers sometimes repost or edit listings to refresh them." },
          { question: "Are sponsored or paid job listings ranked by relevance too?", answer: "Sponsored placements typically get a visibility boost layered on top of the organic ranking, which is why a less relevant but promoted listing can appear above a more relevant unpaid one." },
          { question: "Does applying to a listing affect how it ranks for other job seekers?", answer: "It can — many job boards factor engagement signals like click-through and application rates into ranking, so a posting that's actively drawing applicants can rank differently than one with little activity, even at similar relevance and recency." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
