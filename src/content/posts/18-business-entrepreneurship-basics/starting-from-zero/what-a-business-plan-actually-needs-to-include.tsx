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
  title: "What a Business Plan Actually Needs to Include",
  category: "business-entrepreneurship-basics",
  order: 2,
  subtopic: "starting-from-zero",
  tags: ["business plan", "startup", "small business", "market analysis", "financial projections"],
  date: "2026-09-21",
  updated: "2026-09-21",
  lastReviewed: "2026-09-21",
  excerpt: "A business plan isn't a formality for investors — it's the document that forces you to answer the questions that actually determine whether a business survives.",
  summary: "A business plan is a structured document that lays out what a business will sell, who it will sell to, how it will operate, and how it expects to make and spend money — per U.S. Small Business Administration guidance, the core sections generally cover an executive summary, company and product/service description, market analysis, organization and management structure, and financial projections, with the specific format allowed to vary as long as those core questions are genuinely answered rather than skipped.",
  sources: [
    { label: "U.S. Small Business Administration — Write Your Business Plan", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" },
    { label: "SCORE — Free Small Business Mentoring", url: "https://www.score.org/" },
  ],
  seeAlso: [
    "business-entrepreneurship-basics/how-to-actually-validate-a-business-idea-before-building-it",
    "business-entrepreneurship-basics/what-working-capital-actually-means-for-a-business",
    "personal-finance-basics/what-a-budget-actually-is-income-vs-expenses",
  ],
  glossary: [
    { term: "Executive summary", definition: "A brief opening section of a business plan that summarizes the business concept, goals, and key financial highlights, written last but read first." },
    { term: "Market analysis", definition: "The section of a business plan that identifies the target customers, market size, and competitors, based on real research rather than assumption." },
    { term: "Financial projections", definition: "Forward-looking estimates of a business's expected revenue, expenses, and cash flow, typically covering the first several years of operation." },
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
          "Per SBA guidance, a business plan's core sections cover the business concept, target market, operating structure, and financial projections.",
          "The specific format can flex (traditional or lean), but skipping a section usually means skipping the thinking that section is meant to force.",
          "Financial projections are the section most often underdeveloped, even though they're what most lenders and investors scrutinize first.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A business plan is a written document explaining what your business does, who it&apos;s for, how it will run day to day, and how it expects to make and spend money. Its real value isn&apos;t impressing a reader — it&apos;s forcing you to think through the parts of a business idea that are easy to skip when the idea still just feels exciting.</div>}
        detailed={<div className="prose-p">Per SBA guidance, a business plan generally includes an <TermLink href="/business-entrepreneurship-basics/what-a-business-plan-actually-needs-to-include">executive summary</TermLink>, a description of the company and its products or services, a <TermLink href="/business-entrepreneurship-basics/what-a-business-plan-actually-needs-to-include">market analysis</TermLink> identifying real target customers and competitors, an organization and management section describing who runs what, and <TermLink href="/business-entrepreneurship-basics/what-a-business-plan-actually-needs-to-include">financial projections</TermLink> covering expected revenue, costs, and cash flow. The SBA distinguishes between a traditional, fully detailed plan (useful for securing a loan or outside investment) and a leaner one-page plan (useful for an owner&apos;s own internal clarity) — the format is flexible, but per both SBA and SCORE guidance, the underlying questions each section answers aren&apos;t optional if the plan is meant to be useful rather than decorative. A market analysis based on real research (not assumption) and financial projections grounded in realistic numbers are the two sections most consistently flagged as decisive by lenders and mentors, because they&apos;re the two places a plan&apos;s underlying assumptions get tested against reality.</div>}
      />
      <FootnoteAside>SCORE, an SBA resource-partner network of volunteer business mentors, specifically recommends writing the executive summary last, even though it appears first in the document — it&apos;s meant to summarize conclusions you&apos;ve already reached in the other sections, not to set the direction before you&apos;ve done the analysis.</FootnoteAside>

      <p>This is also why a plan that&apos;s all executive summary and mission language, with thin financial projections, tends to get flagged immediately by an experienced lender or mentor — the sections that are hardest to fake are exactly the ones that matter most.</p>

      <QuickCheck
        question="A prospective business owner writes a business plan with a strong, detailed executive summary and product description, but a market analysis based purely on personal opinion rather than research. What is the most likely issue a lender or mentor would flag?"
        options={[
          { text: "The market analysis section lacks real research into actual target customers and competitors, which undermines the credibility of the rest of the plan", correct: true, explanation: "Correct. Per SBA and SCORE guidance, the market analysis is one of the sections most scrutinized precisely because it should be grounded in real research, not opinion — a weak version here raises doubt about the whole plan's assumptions." },
          { text: "The executive summary should have been written first, before any other section", correct: false, explanation: "SCORE specifically recommends writing the executive summary last, after the other sections are developed — this isn't the issue here." },
          { text: "There's no real issue, since the executive summary and product description are the most important sections", correct: false, explanation: "A strong opening doesn't compensate for a weak, unresearched market analysis — lenders and mentors specifically scrutinize that section for real grounding." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A traditional plan for a bank loan application (baseline case)</h3>
      <div className="prose-p">A prospective café owner applying for an SBA-backed loan writes a full traditional plan, including detailed financial projections for the first three years, because the lender specifically requires that level of detail to assess repayment risk.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A lean one-page plan for internal clarity only (edge case / variation)</h3>
      <div className="prose-p">A freelance consultant with no plans to seek outside funding uses the SBA&apos;s lean-format option — a condensed, one-page version covering the same core questions at a much shorter length, since the goal is personal clarity and direction, not satisfying a lender&apos;s documentation requirements.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Revising a plan after real customer research (real-world / applied case)</h3>
      <div className="prose-p">An entrepreneur&apos;s first draft assumes a broad target market with strong demand; after doing the market-validation research SBA guidance recommends, they discover the real target customer segment is narrower than assumed, and rewrite the market analysis and financial projections to reflect that — a normal, expected part of the planning process rather than a sign the original idea failed.</div>

      <QuickCheck
        question="Per SBA guidance, what's the main practical difference between a traditional business plan and a lean one-page plan?"
        options={[
          { text: "Both cover the same core underlying questions, but the traditional format is more detailed and suited to lenders/investors, while the lean format is shorter and suited to internal clarity", correct: true, explanation: "Correct. SBA guidance frames these as two formats serving different purposes, not two different sets of questions — the lean plan is a condensed version, not a lower-effort substitute for the thinking involved." },
          { text: "The lean plan skips the financial projections section entirely", correct: false, explanation: "The lean format condenses detail across sections; it doesn't eliminate the need to think through expected finances, even if the written-out version is much shorter." },
          { text: "The traditional plan is only for large corporations, not small businesses", correct: false, explanation: "SBA guidance frames the traditional format as appropriate for any small business seeking a loan or outside investment, regardless of company size." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The core sections of a business plan"
        type="detail"
        svgSrc="/diagrams/business-entrepreneurship-basics-what-a-business-plan-actually-needs-to-include-detail.svg"
        altText="A diagram of the core business plan sections: executive summary, company and product description, market analysis, organization and management, and financial projections."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Writing the executive summary first and letting it set unexamined assumptions for the rest of the plan.", fix: "Draft the other sections first, then write the executive summary last as a genuine summary of what you found, per SCORE guidance." },
          { mistake: "Basing the market analysis on personal opinion instead of real research.", fix: "Research actual target customers, market size, and competitors before writing this section — it's one of the most scrutinized parts of the plan." },
          { mistake: "Treating financial projections as a formality to fill in quickly at the end.", fix: "Build realistic revenue and expense estimates grounded in actual costs and researched demand, since this is typically what lenders and mentors examine most closely." },
        ]}
      />
      <MisconceptionCallout
        myth="A business plan is mainly a formality you write once to satisfy a bank or investor, not something with real ongoing value."
        reality={<p>Per SBA and SCORE guidance, a business plan&apos;s core value is forcing genuine analysis of the target market, operating structure, and financial reality of a business idea — work that&apos;s useful regardless of whether outside funding is ever sought. The lean one-page format exists specifically for owners who want that clarity without producing lender-grade documentation, which underscores that the thinking behind each section, not the paperwork itself, is the actual point.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Choose a traditional or lean plan format based on whether you'll be seeking a loan or outside investment, per SBA guidance.",
          "Research your actual target market and competitors before writing the market analysis section — don't rely on assumption.",
          "Build financial projections from real, itemized cost and demand estimates, not rough guesses.",
          "Write the executive summary last, once the rest of the plan reflects genuine research and analysis.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What sections does a business plan actually need?", answer: "Per SBA guidance: an executive summary, company and product/service description, market analysis, organization and management structure, and financial projections — the specific format can vary, but these core questions should be genuinely addressed." },
          { question: "Do I need a full business plan if I'm not seeking a loan or investors?", answer: "SBA guidance offers a lean, one-page alternative for owners who mainly want internal clarity — the core questions still apply, just in a shorter format." },
          { question: "Why is the market analysis section considered so important?", answer: "Because it's one of the sections most directly checked against reality — a weak or unresearched market analysis raises doubt about the assumptions behind the rest of the plan." },
          { question: "Should the executive summary be written first or last?", answer: "Per SCORE guidance, it's generally written last, even though it appears first in the finished document, since it's meant to summarize conclusions reached in the other sections." },
          { question: "Where can I get free help writing a business plan?", answer: "SCORE, an SBA resource-partner network, offers free volunteer business mentoring, which can be a useful resource when developing a plan." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
