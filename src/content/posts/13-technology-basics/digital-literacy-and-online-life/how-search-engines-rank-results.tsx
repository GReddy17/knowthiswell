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
  title: "How Search Engines Actually Rank Results",
  category: "technology-basics",
  order: 91,
  subtopic: "digital-literacy-and-online-life",
  tags: ["search engines", "how search ranking works", "SEO basics", "crawling and indexing", "digital literacy"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "Search results aren't a neutral list of the 'best' pages — they're a ranked output of crawling, indexing, and a scored comparison against your exact query.",
  summary: "A search engine ranks results by first building an index of the web through crawling, then scoring every matching page in that index against hundreds of signals for a specific query, and returning the highest-scoring matches in order.",
  sources: [
    { label: "Google Search Central — How Search Works", url: "https://developers.google.com/search/docs/fundamentals/how-search-works" },
    { label: "IETF RFC 9309 — Robots Exclusion Protocol", url: "https://www.rfc-editor.org/rfc/rfc9309" },
    { label: "W3C — Web Architecture: robots.txt and crawler behavior context", url: "https://www.w3.org/standards/webarch/" },
  ],
  seeAlso: [
    "technology-basics/what-a-web-browser-is-actually-doing",
    "technology-basics/how-online-ad-targeting-works",
    "technology-basics/what-a-digital-footprint-actually-means",
  ],
  glossary: [
    { term: "Crawling", definition: "The automated process of a search engine's software visiting web pages and following links to discover new or updated content." },
    { term: "Indexing", definition: "Storing and organizing the content a crawler finds into a searchable database, structured so a matching query can be looked up quickly instead of scanning the entire web live." },
    { term: "Ranking signal", definition: "Any measurable factor a search engine's scoring system uses to judge how well a page matches and satisfies a given query, such as relevance of text, page speed, or how many other reputable pages link to it." },
    { term: "Inverted index", definition: "A lookup structure that maps each word to the list of documents containing it, rather than mapping each document to its words — the reverse of a book's page-by-page layout, which is what makes near-instant search possible." },
    { term: "noindex", definition: "An instruction a website can give search engines, via a meta tag or HTTP header, requesting that a specific page be left out of the search index entirely." },
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
          "Search results are not a neutral master list — a search engine builds its own index of the web in advance, then scores and ranks whatever's in that index against your specific query.",
          "Ranking runs on hundreds of combined signals (text relevance, page speed, mobile usability, how many reputable pages link to it, and more) rather than one single 'best page' criterion.",
          "A page has to be discovered and allowed into the index before it can rank at all — being well-written but uncrawled or blocked from indexing means it never enters the competition in the first place.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of a librarian who, long before you ever ask a question, has already read every book in an enormous library and built a card catalog sorted by topic. When you ask a question, the librarian doesn&apos;t re-read every book on the spot &mdash; they check the catalog and hand you the books that best match, ranked by how well each one seems to answer you. A <TermLink href="/technology-basics/how-search-engines-rank-results">search engine</TermLink> works the same way: it has already <TermLink href="/technology-basics/how-search-engines-rank-results">crawled</TermLink> and <TermLink href="/technology-basics/how-search-engines-rank-results">indexed</TermLink> billions of pages before you type anything, then ranks the matches in that pre-built catalog against your exact search.</div>}
        detailed={<div className="prose-p">This is the <strong>lookup-via-index</strong> mental model: rather than scanning the live web for every query (which would take far too long), a search engine continuously runs automated programs called crawlers that follow links from page to page, downloading content and feeding it into an <TermLink href="/technology-basics/how-search-engines-rank-results">inverted index</TermLink> &mdash; a structure that maps words to the documents containing them, so a query can be matched in a fraction of a second instead of scanned page by page. Once a page is in the index, ranking is a separate scoring step: the engine evaluates every indexed page that matches the query&apos;s words or meaning against a combined set of <TermLink href="/technology-basics/how-search-engines-rank-results">ranking signals</TermLink> &mdash; text relevance, freshness, page load speed, mobile usability, and the number and quality of other pages linking to it, among many others &mdash; and orders results by combined score. The edge case worth knowing: a page can be perfectly crawlable and well-written but still never appear in results if it carries a <TermLink href="/technology-basics/how-search-engines-rank-results">noindex</TermLink> instruction or is blocked by the site&apos;s robots exclusion rules &mdash; ranking never even gets a chance to run on a page that was never allowed into the index.</div>}
      />
      <FootnoteAside>The robots exclusion protocol &mdash; the plain-text rules a website publishes in a file at its root telling crawlers which pages they may or may not visit &mdash; was informal internet convention for decades before it became an official standard in 2022 as IETF RFC 9309, formalizing behavior search engines had already voluntarily followed since the 1990s.</FootnoteAside>

      <p>
        That two-stage structure &mdash; get into the index first, then compete on ranking signals &mdash; explains almost every confusing search behavior people notice, from why a brand-new page takes time to show up at all, to why two pages with near-identical content can rank very differently.
      </p>

      <QuickCheck
        question="A search engine returns results almost instantly after you type a query. What does this tell you about how the search actually happens?"
        options={[
          { text: "The search engine is reading every live website on the internet in that instant to find matches", correct: false, explanation: "Reading the entire live web per query would take far too long. Instant results are only possible because the matching happens against a pre-built index, not the live web." },
          { text: "The search engine is checking a pre-built index that was assembled ahead of time by crawling and storing web pages", correct: true, explanation: "Correct. Crawling and indexing happen continuously in advance; a query only has to search that already-built index, which is why results return almost instantly." },
          { text: "The search engine only searches pages from the last few minutes and ignores anything older", correct: false, explanation: "The index includes pages of all ages, old and new, as long as they were successfully crawled and indexed — recency is just one of many ranking signals, not a hard time cutoff." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Why a brand-new page doesn&apos;t show up in results right away (baseline case)</h3>
      <div className="prose-p">
        A business publishes a new page today and searches for it an hour later, expecting to find it immediately. It doesn&apos;t appear yet &mdash; not because the page is bad, but because it hasn&apos;t been crawled yet. A crawler has to discover the page (usually by following a link to it, or via a submitted sitemap), download its content, and add it to the index before ranking can even begin. Depending on how well-linked the site is and how often crawlers revisit it, this discovery step can take anywhere from hours to weeks. The content quality of the page is irrelevant until this first, purely mechanical step happens.
      </div>
      <QuickCheck
        question="A newly published web page doesn't appear in search results yet, even though the writing is high quality. What is the most likely explanation?"
        options={[
          { text: "The page's writing quality is too low to rank at all", correct: false, explanation: "Content quality is a ranking factor evaluated on pages that are already in the index — it isn't the cause of a page being entirely absent from results shortly after publishing." },
          { text: "The page hasn't been crawled and added to the index yet, so it isn't eligible to be ranked for anything", correct: true, explanation: "Correct. A page must be discovered and indexed before ranking signals ever get evaluated on it — this discovery step can take time depending on how findable the page is." },
          { text: "Search engines deliberately delay all new pages for a fixed 30-day waiting period", correct: false, explanation: "There's no fixed universal delay — timing depends on how quickly a page gets discovered and crawled, which varies by site and page." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Two similar pages, very different rankings (edge case / variation)</h3>
      <div className="prose-p">
        Two websites publish nearly identical articles on the same topic, both well-written and both fully indexed. One consistently ranks higher than the other. Because ranking is a combined score across many signals, not one single measure of &quot;quality,&quot; the gap can come from factors that have nothing to do with the words on the page itself &mdash; one site might load noticeably faster, work better on mobile screens, or have more other reputable pages linking to it, all of which are counted as separate signals feeding into the same overall score. This is also why chasing a single tactic (like stuffing a page with keywords) rarely works on its own: no individual signal dominates the combined score enough to overcome weaknesses elsewhere.
      </div>
      <QuickCheck
        question="Two nearly identical articles are both fully indexed, but one ranks noticeably higher. What does this most likely reflect?"
        options={[
          { text: "The lower-ranked article must contain factual errors somewhere in the text", correct: false, explanation: "Nothing in the scenario indicates factual errors — a ranking gap between similar-quality content is far more often explained by differences in the other combined signals, like site speed or linking pages." },
          { text: "Ranking combines many separate signals beyond the words on the page, so differences in page speed, mobile usability, or linking pages can shift the outcome even between similar articles", correct: true, explanation: "Correct. Ranking scores combine relevance with many other measurable signals — two textually similar pages can still land far apart once those other factors are counted." },
          { text: "Only the first article that was ever published on a topic is allowed to rank well", correct: false, explanation: "Publish order alone doesn't determine ranking — freshness is one signal among many, not a fixed first-mover rule that locks out later pages." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A page accidentally blocked from search entirely (real-world / applied case)</h3>
      <p>
        A company relaunches its website and, months later, notices traffic from search has dropped to nearly zero. An audit finds that the new site was accidentally deployed with a sitewide <TermLink href="/technology-basics/how-search-engines-rank-results">noindex</TermLink> instruction left over from a staging/testing version, telling every search engine to leave every page out of the index. Because indexing is a prerequisite for ranking, no amount of content quality, backlinks, or page speed matters once that instruction is in place &mdash; the pages are simply not eligible to appear in results at all until the instruction is removed and the site is recrawled.
      </p>
      <QuickCheck
        question="A company's search traffic drops to nearly zero after a site relaunch, and the cause turns out to be a leftover noindex instruction applied to the whole site. Why does this completely eliminate search visibility rather than just lowering rankings?"
        options={[
          { text: "Because noindex is treated as an extremely negative ranking signal that pushes pages to the very bottom of results", correct: false, explanation: "noindex doesn't lower a ranking score — it removes the page from the index entirely, so there's no score to rank in the first place." },
          { text: "Because noindex prevents pages from entering the index at all, and a page has to be indexed before ranking can apply to it", correct: true, explanation: "Correct. Indexing and ranking are separate stages — noindex blocks the first stage completely, so the second stage never runs on those pages." },
          { text: "Because noindex only affects image search, not regular web search results", correct: false, explanation: "A sitewide noindex instruction applies to standard web search results generally, not just to one specific search type like images." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Crawl, index, rank: the three-stage pipeline behind a search result"
        type="flow"
        svgSrc="/diagrams/technology-basics-how-search-engines-rank-results-pipeline.svg"
        altText="A three-stage flow diagram. Stage one, Crawl, shows an automated crawler following links between web pages to discover content. Stage two, Index, shows discovered pages being stored into an inverted index database. Stage three, Rank, shows a user's typed query being scored against matching pages in the index using multiple combined signals, producing an ordered list of results."
      />
      <p>
        Notice the one-way order: a page can&apos;t skip ahead to ranking without first passing through crawling and indexing, and a problem at any earlier stage (an unlinked page, a blocked crawler, a noindex instruction) removes it from every later stage automatically.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the top result is the objectively 'best' or most accurate page on the internet for that topic.", fix: "Treat the top result as the page that scored highest on that engine's combined ranking signals for that specific query — a useful signal, but not a guarantee of accuracy or completeness." },
          { mistake: "Believing that publishing content guarantees it will appear in search results.", fix: "Remember publishing only makes a page eligible to be crawled — it still has to be discovered, indexed, and not blocked by a noindex instruction before ranking even applies." },
          { mistake: "Chasing a single ranking factor (like keyword repetition) and expecting it to dominate the result.", fix: "Recognize ranking as a combined score across many signals — improving one factor in isolation rarely overcomes weaknesses in the others." },
        ]}
      />
      <MisconceptionCallout
        myth="Search engines show the single objectively best answer to every query, in a fixed, unbiased order."
        reality={<p>A search engine returns the pages, from its own index, that score highest against its own combined ranking signals for that specific query &mdash; a ranked estimate of relevance and usefulness, not an objective, universal judgment of truth. Two different search engines, or the same engine at two different times, can rank the same set of pages differently because their signals and weighting aren&apos;t identical, and because the underlying index itself is never a complete copy of the entire web.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "When a search result seems off, remember you're seeing one engine's ranked estimate from its own index, not a universal, verified answer — cross-check important claims against a second source.",
          "If you publish a website, check whether it's crawlable and free of accidental noindex instructions before troubleshooting why it isn't ranking well.",
          "Don't judge a page's accuracy purely by its rank — a top position reflects a combined score of relevance and technical signals, not a fact-check.",
          "Read What a Web Browser Is Actually Doing next to see what happens after you click a search result and a page actually loads.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do search engines decide which website to show first?", answer: "They score every page in their pre-built index against a combined set of ranking signals for that specific query — text relevance, page speed, mobile usability, and how many reputable pages link to it, among many others — and order results by total score." },
          { question: "Why isn't my new website showing up in search results?", answer: "A page has to be crawled and added to the index before it's eligible to rank at all. If a site is new, poorly linked, or accidentally blocked by a robots or noindex rule, it may not have been discovered and indexed yet, regardless of content quality." },
          { question: "Do search engines show the most accurate result first?", answer: "Not necessarily. They show the result that scores highest on their own combined relevance and quality signals for that query — a strong estimate of usefulness, not a fact-check or guarantee of accuracy." },
          { question: "What is the difference between crawling and indexing?", answer: "Crawling is the process of discovering pages by following links and downloading their content. Indexing is storing and organizing that content into a searchable database. A page must be crawled and indexed before it can ever be ranked." },
          { question: "Can a website block itself from appearing in search results?", answer: "Yes. A site can use a noindex instruction or robots exclusion rules to tell search engines not to crawl or index specific pages, or the whole site — which removes it from ranking eligibility entirely, regardless of content quality." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
