import React from 'react';
import { PostFrontmatter, QuizBankItem } from '@/types/post';
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
  title: "Corporate Sustainability Reporting (ESG Basics)",
  category: "environment-nature",
  order: 39,
  subtopic: "environmental-policy-and-global-action",
  tags: ["ESG", "sustainability reporting", "corporate disclosure", "TCFD", "ISSB"],
  date: "2026-08-22",
  updated: "2026-10-07",
  youtubeShort: false, youtubeLong: false,
  seoScore: 67, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-10-07",
  excerpt: "ESG reporting is how companies formally disclose their environmental, social, and governance performance — and standardized frameworks now exist specifically so those disclosures can actually be compared across companies.",
  summary: "ESG (Environmental, Social, Governance) reporting is the practice of a company formally disclosing data on its environmental impact, social practices, and governance structure, following standardized frameworks so investors and regulators can compare performance across companies rather than trusting each company's own self-description.",
  sources: [
    { label: "IFRS Foundation — IFRS S1 General Requirements for Disclosure of Sustainability-related Financial Information", url: "https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/ifrs-s1-general-requirements/" },
    { label: "International Sustainability Standards Board (ISSB) — About the ISSB", url: "https://www.ifrs.org/groups/international-sustainability-standards-board/" },
    { label: "European Commission — Corporate sustainability reporting", url: "https://finance.ec.europa.eu/capital-markets-union-and-financial-markets/company-reporting-and-auditing/company-reporting/corporate-sustainability-reporting_en" },
    { label: "Council of the EU — Council signs off simplification of sustainability reporting and due diligence requirements (24 Feb 2026)", url: "https://www.consilium.europa.eu/en/press/press-releases/2026/02/24/council-signs-off-simplification-of-sustainability-reporting-and-due-diligence-requirements-to-boost-eu-competitiveness/" },
    { label: "U.S. SEC — SEC proposes rescission of climate-related disclosure rules (2026)", url: "https://www.sec.gov/newsroom/press-releases/2026-49-sec-proposes-rescission-climate-related-disclosure-rules" },
    { label: "Task Force on Climate-related Financial Disclosures (TCFD) — Overview", url: "https://www.fsb-tcfd.org/" },
    { label: "Global Reporting Initiative (GRI) — About GRI Standards", url: "https://www.globalreporting.org/standards/" },
  ],
  seeAlso: [
    "environment-nature/what-an-environmental-impact-assessment-is",
    "environment-nature/carbon-trading-and-carbon-tax-explained",
    "environment-nature/understanding-environmental-justice",
    "environment-nature/understanding-carbon-offsetting",
  ],
  glossary: [
    {"term":"ESG (Environmental, Social, Governance)","definition":"A framework for evaluating a company's performance on three non-financial dimensions: environmental impact, treatment of people (employees, communities, supply chain), and internal governance structure."},
    {"term":"Global Reporting Initiative (GRI)","definition":"An independent international organization that publishes widely used standards for how companies should structure their sustainability disclosures."},
    {"term":"TCFD (Task Force on Climate-related Financial Disclosures)","definition":"A framework, originally created by the Financial Stability Board, specifically for how companies should disclose climate-related financial risks to investors."},
    {"term":"Greenwashing","definition":"The practice of a company presenting itself as more environmentally responsible than its actual practices justify, often through vague or unverifiable marketing claims rather than standardized disclosure."},
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

export const quiz: QuizBankItem[] = [
  {"question": "What does ESG stand for?", "difficulty": "easy", "options": [{"text": "Environmental, Social, and Governance", "correct": true, "explanation": "The three non-financial categories companies are asked to report on."}, {"text": "Economic, Safety, and Growth", "correct": false, "explanation": "Those words are not what ESG stands for."}, {"text": "Energy, Supply, and Grid", "correct": false, "explanation": "ESG is not an energy-sector term."}]},
  {"question": "Which body issued the IFRS S1 and S2 sustainability disclosure standards?", "difficulty": "medium", "options": [{"text": "The Global Reporting Initiative (GRI)", "correct": false, "explanation": "GRI publishes its own separate GRI Standards."}, {"text": "The International Sustainability Standards Board (ISSB)", "correct": true, "explanation": "The ISSB was formed in 2021 and issued its first standards in 2023."}, {"text": "The U.S. SEC", "correct": false, "explanation": "The SEC is a U.S. regulator, not the author of IFRS S1 and S2."}]},
  {"question": "Which framework was built specifically around climate-related financial risk for investors?", "difficulty": "medium", "options": [{"text": "GRI", "correct": false, "explanation": "GRI covers broad sustainability impact, not only climate-financial risk."}, {"text": "CSRD", "correct": false, "explanation": "CSRD is an EU law, not a voluntary framework."}, {"text": "TCFD", "correct": true, "explanation": "The Task Force on Climate-related Financial Disclosures focused on climate risk."}]},
  {"question": "What is greenwashing?", "difficulty": "easy", "options": [{"text": "Presenting a company as more environmentally responsible than its practices justify", "correct": true, "explanation": "Typically through vague or unverifiable claims instead of auditable disclosure."}, {"text": "Washing equipment with recycled water", "correct": false, "explanation": "That is a literal reading and not the term's meaning."}, {"text": "Publishing an audited emissions report", "correct": false, "explanation": "That is the opposite of greenwashing."}]},
  {"question": "After the EU's 2026 Omnibus I changes, CSRD targets companies with more than how many employees (and more than €450 million turnover)?", "difficulty": "hard", "options": [{"text": "250", "correct": false, "explanation": "250 employees was the earlier, much broader threshold idea."}, {"text": "1,000", "correct": true, "explanation": "Both tests must be met, and the new scope applies from financial years starting 1 January 2028."}, {"text": "10,000", "correct": false, "explanation": "The threshold is far lower than 10,000 employees."}]},
  {"question": "What is the status of the U.S. SEC climate disclosure rule in 2026?", "difficulty": "hard", "options": [{"text": "It has been stayed, the SEC stopped defending it, and it proposed rescinding it", "correct": true, "explanation": "The rule was adopted in 2024, stayed, and the SEC proposed rescission in 2026."}, {"text": "It is fully in force and audited", "correct": false, "explanation": "It has been stayed and is not being enforced."}, {"text": "It was replaced by the EU CSRD", "correct": false, "explanation": "The CSRD is a separate EU law and does not replace a U.S. rule."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "ESG stands for Environmental, Social, and Governance — three non-financial categories companies are increasingly asked to report on, alongside their traditional financial statements.",
      "Standardized frameworks like the Global Reporting Initiative (GRI) and TCFD exist specifically so ESG disclosures can be compared across companies, rather than each company describing its own performance however it likes.",
      "In 2023 the International Sustainability Standards Board (ISSB) issued its first global baseline standards, aiming to consolidate what had been a fragmented landscape of competing voluntary frameworks.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">ESG reporting at a glance (2026)</h2>
      <div className="prose-p">
      <strong>Short answer:</strong> ESG reporting is a company publishing audited-style numbers on emissions, workforce and governance under a named standard, instead of describing itself in marketing language. Three standard-setters matter: GRI (broad impact), TCFD (climate-risk structure, now folded into ISSB work) and the ISSB&apos;s IFRS S1 and S2 (the global investor baseline). Whether a given company must report depends on where it operates, and that picture changed in 2026.
      </div>
      <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse my-4">
        <thead>
          <tr className="border-b-2 border-ink text-left"><th className="py-2 pr-3">Framework or rule</th><th className="py-2 pr-3">Who it is for</th><th className="py-2">Status</th></tr>
        </thead>
        <tbody>
          <tr className="border-b border-ink/20"><td className="py-2 pr-3">GRI Standards</td><td className="py-2 pr-3">Anyone reporting broad sustainability impact</td><td className="py-2">Voluntary standard, widely used</td></tr>
          <tr className="border-b border-ink/20"><td className="py-2 pr-3">TCFD recommendations</td><td className="py-2 pr-3">Investors wanting climate-risk disclosure</td><td className="py-2">Structure absorbed into IFRS S2</td></tr>
          <tr className="border-b border-ink/20"><td className="py-2 pr-3">IFRS S1 and S2 (ISSB)</td><td className="py-2 pr-3">Investor-focused global baseline</td><td className="py-2">Used or being introduced in about 40 jurisdictions as of February 2026</td></tr>
          <tr className="border-b border-ink/20"><td className="py-2 pr-3">EU CSRD</td><td className="py-2 pr-3">Large companies operating in the EU</td><td className="py-2">Scope cut by the 2026 Omnibus I directive to companies with over 1,000 employees and over €450 million turnover, for financial years starting 1 January 2028 or later</td></tr>
          <tr><td className="py-2 pr-3">U.S. SEC climate rule</td><td className="py-2 pr-3">U.S. public companies</td><td className="py-2">Stayed since 2024; SEC stopped defending it in 2025 and proposed rescinding it in 2026</td></tr>
        </tbody>
      </table>
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p"><TermLink href="/environment-nature/corporate-sustainability-reporting-esg-basics">ESG</TermLink> is short for Environmental, Social, and Governance — three categories companies report on beyond their normal financial numbers. Environmental covers things like carbon emissions and waste; Social covers labor practices and community impact; Governance covers how the company is actually run, including board structure and executive accountability. The whole point of standardized ESG reporting is comparability: if every company just wrote its own sustainability story in its own words, investors couldn&apos;t compare Company A to Company B in any reliable way.</div>}
      detailed={<div className="prose-p">Several major frameworks emerged over the 2000s and 2010s to bring structure to ESG disclosure, each with a slightly different focus: the <TermLink href="/environment-nature/corporate-sustainability-reporting-esg-basics">Global Reporting Initiative</TermLink> (GRI) built broad sustainability-impact standards used worldwide, while the <TermLink href="/environment-nature/corporate-sustainability-reporting-esg-basics">TCFD</TermLink> focused specifically on climate-related financial risk disclosure for investors. Having multiple competing frameworks created real inconsistency — a company&apos;s &quot;ESG report&quot; under one framework wasn&apos;t directly comparable to another company&apos;s report under a different one. The International Sustainability Standards Board (ISSB), formed in 2021 and issuing its first standards in 2023, was created specifically to consolidate this fragmented landscape into a single global baseline, incorporating much of what TCFD and other frameworks had already established.</div>}
      />
      <FootnoteAside>ESG reporting requirements aren&apos;t purely voluntary anymore in many jurisdictions — the European Union&apos;s Corporate Sustainability Reporting Directive, for example, requires many large companies operating in the EU to publish detailed, audited sustainability disclosures, moving ESG from a nice-to-have marketing exercise toward a genuine regulatory compliance requirement.</FootnoteAside>

      <p>
      Understanding that ESG reporting moved from scattered voluntary frameworks toward standardized, sometimes legally mandated disclosure explains why the topic has become significant for investors and regulators, not just for corporate public relations departments.
      </p>

      <QuickCheck
      question="Why did having multiple different ESG reporting frameworks (GRI, TCFD, and others) create a real problem for investors trying to compare companies?"
      options={[
      { text: "It wasn't actually a problem, since all frameworks measured exactly the same things", correct: false, explanation: "The frameworks had different focuses and methodologies — GRI covers broad sustainability impact while TCFD focuses specifically on climate financial risk — so a report following one framework wasn't directly equivalent to a report following another." },
      { text: "A company reporting under one framework (say, GRI) wasn't directly comparable to a company reporting under a different framework (say, TCFD), making cross-company comparison unreliable — which is exactly the problem the ISSB was created to solve with a single global baseline", correct: true, explanation: "Correct. Fragmented, non-standardized frameworks undermine the whole point of ESG disclosure — enabling investors to compare companies — which is the specific gap the ISSB's 2023 baseline standards were designed to close." },
      { text: "Multiple frameworks only affected companies in a single country", correct: false, explanation: "This was a genuinely global problem — GRI, TCFD, and other frameworks were each used internationally by companies across many countries, which is exactly why a global consolidating body (the ISSB) was needed." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A company&apos;s basic ESG report structure (baseline case)</h3>
      <div className="prose-p">
      A manufacturing company&apos;s annual ESG report includes an Environmental section reporting total greenhouse gas emissions and water usage, a Social section reporting employee safety incident rates and supply-chain labor audits, and a Governance section describing its board&apos;s independence and executive compensation structure tied to sustainability targets. Each section reports specific, numeric metrics rather than general statements, which is what lets outside analysts actually compare it to a competitor&apos;s report.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The difference between a marketing claim and a standardized disclosure (edge case / variation)</h3>
      <div className="prose-p">
      A company&apos;s advertisement says it is &quot;committed to sustainability&quot; with no specific numbers attached — that&apos;s a marketing claim, not an ESG disclosure. The same company&apos;s formal ESG report, following GRI or ISSB standards, must instead report a specific, auditable figure like &quot;42,000 metric tons of CO2-equivalent emissions in the reporting year, verified by a third party.&quot; The distinction matters because only the second kind of statement can actually be checked, compared year to year, or compared against another company&apos;s disclosed figure.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Mandatory ESG disclosure under EU regulation (real-world / applied case)</h3>
      <div className="prose-p">
      Under the EU&apos;s Corporate Sustainability Reporting Directive, a large company operating in the EU must publish detailed, externally audited sustainability disclosures covering environmental, social, and governance topics — not as an optional extra, but as a legal filing requirement similar in seriousness to its financial statements. This represents a real shift from ESG as voluntary corporate communication toward ESG as a compliance obligation with legal consequences for inaccurate or missing disclosure.
      </div>

      <QuickCheck
      question="What is the key difference between a company's general marketing statement about being 'environmentally responsible' and a formal ESG disclosure under a standard like GRI or ISSB?"
      options={[
      { text: "There is no real difference — both serve the same purpose", correct: false, explanation: "A formal ESG disclosure reports specific, standardized, often externally auditable metrics, while a marketing statement is typically a general, unverifiable claim — these serve very different functions for investors and regulators." },
      { text: "A formal ESG disclosure reports specific, standardized, and often externally audited numeric metrics that can be compared across companies and years, while a marketing claim is a general, unverifiable statement", correct: true, explanation: "Correct. This distinction — checkable, standardized data versus a general claim — is exactly why frameworks like GRI and ISSB exist, and why regulators increasingly require the former rather than accepting the latter as sufficient." },
      { text: "Marketing claims are always more detailed than formal ESG disclosures", correct: false, explanation: "It's typically the opposite — formal ESG disclosures under a real standard require far more specific, quantified detail than a general marketing claim, which is precisely the point of having a standard." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The three components of ESG reporting"
      type="detail"
      svgSrc="/diagrams/environment-nature-corporate-sustainability-reporting-esg-basics-three-pillars.svg"
      altText="Three vertical pillar boxes labeled Environmental, Social, and Governance, each listing example metrics: Environmental lists carbon emissions and water usage, Social lists labor practices and community impact, Governance lists board independence and executive accountability, with a connecting base labeled Standardized Reporting Frameworks (GRI, TCFD, ISSB)."
      />
      <p>
      The three pillars rest on a shared foundation of standardized frameworks — without that common foundation, each company&apos;s Environmental, Social, and Governance disclosures would use different definitions and metrics, making cross-company comparison effectively meaningless.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating a company's sustainability marketing language as equivalent to a formal ESG disclosure.", fix: "Look for specific, quantified, ideally third-party-audited metrics reported under a named framework (GRI, TCFD, ISSB) rather than general claims in an ad or press release." },
      { mistake: "Assuming ESG reporting is purely voluntary everywhere.", fix: "Check the relevant jurisdiction — regulations like the EU's Corporate Sustainability Reporting Directive have made detailed ESG disclosure a legal requirement for many large companies, not just a voluntary best practice." },
      { mistake: "Assuming all ESG frameworks measure the same things in the same way.", fix: "Recognize that GRI, TCFD, and other frameworks historically had different scopes and methodologies — this fragmentation is exactly what the ISSB's 2023 global baseline standards were created to reduce." },
      ]}
      />
      <MisconceptionCallout
      myth="A company's ESG report is essentially the same thing as its sustainability marketing materials, just longer."
      reality={<p>A formal ESG report, prepared under a recognized standard like GRI or the newer ISSB baseline, discloses specific, often externally audited quantitative metrics intended to be comparable across companies and over time. Marketing materials are typically general claims not tied to any standardized, checkable metric. Confusing the two — sometimes called <TermLink href="/environment-nature/corporate-sustainability-reporting-esg-basics">greenwashing</TermLink> when done deliberately — is exactly the gap that standardized, sometimes legally mandated ESG disclosure frameworks were built to close.</p>}
      />

      <QuickCheck
      question="A company claims in an advertisement to be 'a leader in sustainability' but its formal ESG filing shows rising, not falling, greenhouse gas emissions over the past three years. What does this scenario illustrate?"
      options={[
      { text: "The ESG filing must be incorrect, since the company's own marketing should be trusted first", correct: false, explanation: "A standardized, often externally audited ESG filing is generally the more reliable source of verifiable data — marketing language isn't held to the same disclosure or audit standard." },
      { text: "This illustrates exactly why standardized ESG disclosure matters — it lets outside observers check a specific numeric claim (emissions trend) against a company's general marketing language, revealing a potential mismatch that unverified marketing alone would hide", correct: true, explanation: "Correct. This is the practical value of standardized reporting: it creates a checkable record that can be compared against a company's public claims, exposing gaps that vague marketing language alone couldn't reveal." },
      { text: "This scenario proves that ESG reporting frameworks don't actually track emissions", correct: false, explanation: "The scenario shows the opposite — the ESG filing DID track and disclose the rising emissions figure, which is precisely what allowed the discrepancy with the marketing claim to be identified in the first place." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "When evaluating a company's sustainability claims, look for its formal ESG report under a named framework (GRI, TCFD, ISSB), not just its marketing materials.",
      "Check whether the company's ESG disclosures are third-party audited — audited figures carry more weight than self-reported, unverified numbers.",
      "Be aware that ESG reporting requirements vary by jurisdiction — some countries and regions (like the EU) now legally mandate detailed disclosure for large companies.",
      "Watch for year-over-year trend data, not just a single year's snapshot — a single good number can mask a worsening multi-year trend, or vice versa.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What does ESG stand for?", answer: "Environmental, Social, and Governance — three non-financial categories companies are increasingly required or encouraged to formally report on." },
      { question: "What is the difference between GRI and TCFD?", answer: "GRI (Global Reporting Initiative) provides broad sustainability-impact reporting standards, while TCFD (Task Force on Climate-related Financial Disclosures) focuses specifically on climate-related financial risk disclosure for investors." },
      { question: "What is the ISSB?", answer: "The International Sustainability Standards Board, formed in 2021, which issued its first global baseline sustainability disclosure standards in 2023 to consolidate the previously fragmented landscape of ESG reporting frameworks." },
      { question: "Is ESG reporting mandatory?", answer: "It depends on the jurisdiction — regulations like the EU's Corporate Sustainability Reporting Directive make detailed, audited ESG disclosure a legal requirement for large companies, while it remains more voluntary in other regions. The EU's 2026 Omnibus I directive narrowed that scope to companies with more than 1,000 employees and more than €450 million in turnover, applying from financial years starting 1 January 2028." },
      { question: "Who has to report under CSRD now?", answer: "After the Omnibus I directive (adopted February 2026), the reporting requirement targets companies with more than 1,000 employees and more than €450 million in net turnover; both tests must be met. Check the European Commission's CSRD page for the current timetable, since transitional rules differ by company type." },
      { question: "Is the SEC climate disclosure rule in force?", answer: "No. The SEC adopted climate disclosure rules in March 2024, stayed them while courts reviewed them, voted in March 2025 to stop defending them, and proposed rescinding them in 2026. U.S. companies may still report voluntarily under frameworks like ISSB or GRI." },
      { question: "What is the difference between ESG reporting and sustainability reporting?", answer: "In practice the terms overlap. Sustainability reporting is the broader label for disclosure about environmental and social impact; ESG reporting frames the same information around the three categories investors screen on: environmental, social and governance." },
      { question: "Which ESG reporting standard should a company use?", answer: "It depends on the audience. Investors usually want IFRS S1 and S2 (ISSB) for financially material information; stakeholders wanting broader impact data look to GRI; companies in the EU follow the European standards required by CSRD." },
      { question: "What is greenwashing?", answer: "The practice of a company presenting itself as more environmentally responsible than its actual practices justify, typically through vague or unverifiable marketing claims rather than standardized, auditable ESG disclosure." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
