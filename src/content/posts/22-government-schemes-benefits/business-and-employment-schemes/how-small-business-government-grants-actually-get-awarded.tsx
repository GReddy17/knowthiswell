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
  title: "How Small Business Government Grants Actually Get Awarded",
  category: "government-schemes-benefits",
  order: 9,
  subtopic: "business-and-employment-schemes",
  tags: ["small business grants", "government grants for small business", "how are federal grants awarded", "SBIR grants", "grants.gov", "SAM.gov UEI", "notice of funding opportunity", "grant scams"],
  date: "2026-10-03",
  updated: "2026-10-03",
  youtubeShort: false, youtubeLong: false,
  seoScore: 83, seoScoredOn: "2026-10-04",
  lastReviewed: "2026-10-03",
  excerpt: "The federal government doesn't hand out grants to start a business. Here's who actually gets small business grants and how scored reviews decide them.",
  summary: "Small business government grants are awarded competitively, against published criteria, for a specific public purpose, not as general startup money. The U.S. Small Business Administration states plainly that it does not provide grants for starting or expanding a business; its grants mostly go to nonprofits, educational institutions and resource partners that support entrepreneurs, plus limited programs for research, exporting and community entrepreneurship. The largest federal grant route open to for-profit small businesses is the SBIR/STTR research program, which funds research and development tied to an agency's mission. Its authority lapsed on 30 September 2025 and was restored in April 2026 through 30 September 2031. The federal process follows a pattern set out in the Uniform Guidance (2 CFR 200): an agency publishes a Notice of Funding Opportunity (NOFO) with eligibility rules and scoring criteria; applicants register in SAM.gov for a Unique Entity ID and apply, usually through Grants.gov; reviewers score applications against the criteria; the agency checks the applicant's risk and financial capacity; and winners sign an award with reporting and spending rules. State and local programs exist but vary widely. The FTC warns that 'free government grant' offers asking for a fee are scams.",
  sources: [
    { label: "U.S. Small Business Administration — Grants", url: "https://www.sba.gov/funding-programs/grants" },
    { label: "SBIR.gov — About the SBIR and STTR programs", url: "https://www.sbir.gov/about" },
    { label: "Grants.gov — Learn Grants: Grant Eligibility", url: "https://www.grants.gov/learn-grants/grant-eligibility" },
    { label: "eCFR — 2 CFR Part 200, Uniform Administrative Requirements, Cost Principles, and Audit Requirements for Federal Awards", url: "https://www.ecfr.gov/current/title-2/subtitle-A/chapter-II/part-200" },
    { label: "SAM.gov — Entity registration and Unique Entity ID", url: "https://sam.gov/content/entity-registration" },
    { label: "Federal Trade Commission — Government Grant Scams", url: "https://consumer.ftc.gov/articles/government-grant-scams" },
    { label: "Congressional Research Service — Small Business Research Programs Reauthorized After Six-Month Lapse (IN12705)", url: "https://www.everycrsreport.com/reports/IN12705.html" },
  ],
  seeAlso: [
    "business-entrepreneurship-basics/how-small-business-loans-actually-work",
    "business-entrepreneurship-basics/what-a-business-plan-actually-needs-to-include",
    "government-schemes-benefits/how-to-actually-apply-for-government-assistance-programs",
    "government-schemes-benefits/what-tax-credits-actually-differ-from-tax-deductions",
    "business-entrepreneurship-basics/what-an-llc-actually-protects-you-from",
  ],
  glossary: [
    { term: "Grant", definition: "Money given for a defined public purpose that, unlike a loan, does not have to be repaid if the recipient follows the award's terms." },
    { term: "Notice of Funding Opportunity (NOFO)", definition: "The public announcement for a grant program, setting out its purpose, who is eligible, the deadline, the amount and how applications will be scored." },
    { term: "Merit review", definition: "The scoring of applications against the published criteria, often by a panel of subject experts." },
    { term: "Unique Entity ID (UEI)", definition: "A 12-character identifier issued through SAM.gov that organizations need to apply for and receive federal awards. It replaced the DUNS number in April 2022." },
    { term: "SBIR / STTR", definition: "Small Business Innovation Research and Small Business Technology Transfer: federal programs that fund research and development by small for-profit businesses in phases." },
    { term: "Uniform Guidance (2 CFR 200)", definition: "The federal rules for how agencies award and manage grants and how recipients must spend, track and report the money." },
    { term: "Matching funds", definition: "A share of a project's cost the recipient must cover from its own or other non-federal money, when a program requires it." },
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
  {"question": "Does the U.S. Small Business Administration give grants to start or expand a business?", "difficulty": "easy", "options": [{"text": "No, the SBA says it does not provide grants for starting or expanding a business", "correct": true, "explanation": "Its grants mainly go to organizations that support entrepreneurs, plus limited research, export and community programs."}, {"text": "Yes, to any business with a business plan", "correct": false, "explanation": "There is no general SBA startup grant."}, {"text": "Yes, but only to LLCs", "correct": false, "explanation": "Business structure doesn't create grant eligibility."}, {"text": "Yes, automatically after registering a business", "correct": false, "explanation": "No federal grant is automatic on registration."}]},
  {"question": "What is a Notice of Funding Opportunity (NOFO)?", "difficulty": "easy", "options": [{"text": "The public announcement that sets a grant's eligibility, deadline and scoring criteria", "correct": true, "explanation": "Reading it closely is the single most important step in applying."}, {"text": "A letter telling you that you've won a grant", "correct": false, "explanation": "That's an award notice, which comes at the end."}, {"text": "A tax form for reporting grant income", "correct": false, "explanation": "It's an announcement, not a tax form."}, {"text": "A private list of pre-approved businesses", "correct": false, "explanation": "NOFOs are public and competitive."}]},
  {"question": "Which federal program is the largest grant route open to for-profit small businesses?", "difficulty": "medium", "options": [{"text": "SBIR/STTR research and development funding", "correct": true, "explanation": "It funds R&D tied to an agency's mission, in phases."}, {"text": "A universal startup grant from the IRS", "correct": false, "explanation": "No such program exists."}, {"text": "The SBA 7(a) program", "correct": false, "explanation": "7(a) is a loan guarantee program, not a grant."}, {"text": "Unemployment insurance", "correct": false, "explanation": "That supports workers who lose jobs, not businesses."}]},
  {"question": "What do you need from SAM.gov before applying for most federal grants?", "difficulty": "medium", "options": [{"text": "A Unique Entity ID (UEI) from an active registration", "correct": true, "explanation": "The UEI replaced the DUNS number in April 2022."}, {"text": "A paid membership to a grant-matching service", "correct": false, "explanation": "Registration in SAM.gov is free."}, {"text": "A credit score above 750", "correct": false, "explanation": "Grants don't use a personal credit score cutoff."}, {"text": "A letter from your member of Congress", "correct": false, "explanation": "No such letter is required."}]},
  {"question": "How are competitive federal grant applications generally decided?", "difficulty": "medium", "options": [{"text": "Reviewers score them against the criteria published in the NOFO, then the agency checks risk and selects", "correct": true, "explanation": "This merit-then-risk sequence follows the Uniform Guidance."}, {"text": "First come, first served until money runs out", "correct": false, "explanation": "Competitive grants are scored, not first-come."}, {"text": "By lottery among all applicants", "correct": false, "explanation": "Selection is based on scores and agency priorities."}, {"text": "By whoever asks for the least money", "correct": false, "explanation": "Cost is one factor at most, not the decider."}]},
  {"question": "What happened to SBIR/STTR program authority between October 2025 and April 2026?", "difficulty": "hard", "options": [{"text": "It lapsed, then was restored in April 2026 through 30 September 2031", "correct": true, "explanation": "During the lapse, agencies issued no new solicitations or awards."}, {"text": "It was permanently abolished", "correct": false, "explanation": "It was reauthorized."}, {"text": "It doubled every award automatically", "correct": false, "explanation": "No such change occurred."}, {"text": "Nothing; it ran uninterrupted", "correct": false, "explanation": "There was a roughly six-month lapse."}]},
  {"question": "Someone calls to say you've 'qualified for a free government grant' if you pay a processing fee. What is this, according to the FTC?", "difficulty": "easy", "options": [{"text": "A scam", "correct": true, "explanation": "Real government grants don't charge fees to receive them and agencies don't cold-call winners."}, {"text": "A standard federal procedure", "correct": false, "explanation": "There's no fee to receive a legitimate federal grant."}, {"text": "A sign you were pre-selected by SBA", "correct": false, "explanation": "SBA doesn't pre-select businesses for grants by phone."}, {"text": "A legitimate state program", "correct": false, "explanation": "Legitimate programs don't demand upfront fees to release money."}]},
  {"question": "After winning a federal grant, what comes with the money?", "difficulty": "hard", "options": [{"text": "Rules on allowable costs, record-keeping and progress and financial reports", "correct": true, "explanation": "The Uniform Guidance sets these obligations; money spent improperly can have to be repaid."}, {"text": "Nothing; it's yours to spend freely", "correct": false, "explanation": "Grants are tied to the approved project and budget."}, {"text": "A requirement to repay it with interest", "correct": false, "explanation": "Grants aren't loans, though misused funds can be recovered."}, {"text": "Automatic renewal every year", "correct": false, "explanation": "Continuation or new funding isn't automatic."}]},
  {"question": "A local bakery owner wants a grant to buy a new oven. Where is she most realistically likely to find one?", "difficulty": "medium", "options": [{"text": "A state, city or local economic development program, if one exists for her area and purpose", "correct": true, "explanation": "Equipment grants for ordinary businesses, when they exist, are mostly local and targeted."}, {"text": "An SBIR grant", "correct": false, "explanation": "SBIR funds research and development, not routine equipment."}, {"text": "A general SBA startup grant", "correct": false, "explanation": "The SBA doesn't offer one."}, {"text": "Grants.gov automatically matches every business to a grant", "correct": false, "explanation": "Grants.gov lists federal opportunities; it doesn't assign them."}]},
];

const h2 = "scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink";
const h3 = "scroll-mt-10 font-display text-xl font-bold text-ink mb-4";

export default function Post() {
  return (
    <>
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
        <strong>This entry explains how government grants are generally awarded in the United States, as of October 2026. It is not legal, tax or financial advice.</strong> Programs, eligibility and deadlines change and vary by agency and state. Check the official Notice of Funding Opportunity, and for help with your situation, contact your local Small Business Development Center (SBDC) or SCORE chapter, which offer free counseling.
      </div>

      <h2 className={h2}>Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "There is no general federal grant for starting or growing a business. The SBA says so directly; most of its grants go to organizations that help entrepreneurs.",
          "Grants pay for a specific public purpose. For for-profit small businesses, the biggest federal route is SBIR/STTR research and development funding.",
          "Awards are competitive: an agency publishes the rules (the NOFO), reviewers score applications against them, and the agency checks the applicant's risk before awarding.",
          "Winning comes with strings: spending rules, records and reports. And any offer of a 'free grant' for a fee is a scam.",
        ]}
      />

      <h2 className={h2}>The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A lot of people picture government grants as free money for anyone with a business idea. It&apos;s closer to a job posting. The government has a specific task it wants done, such as developing a new medical device, helping rural towns or training new entrepreneurs. It writes a public description of that task, who&apos;s allowed to apply and how applications will be judged. Applicants send in a detailed proposal. A panel scores each one against the published checklist, the agency makes sure the winner can actually manage public money, and then it signs an agreement. Like a job, the money is for doing that specific work, and you have to report on how you used it. That&apos;s why the most common small business grants are for research and development, exporting or specific local goals, and why the SBA itself says it doesn&apos;t give grants just to start or expand a business. Most small businesses fund themselves through savings, revenue or <TermLink href="/business-entrepreneurship-basics/how-small-business-loans-actually-work">loans</TermLink>.</div>}
        detailed={<div className="prose-p">Federal grants follow the <strong>Uniform Guidance</strong> in 2 CFR Part 200, revised effective 1 October 2024. The cycle runs: (1) <strong>NOFO</strong>, published on Grants.gov or an agency site, stating the program&apos;s purpose, eligible applicant types, award size, any <strong>matching funds</strong>, deadline and the weighted <strong>merit review</strong> criteria; (2) <strong>registration</strong> in SAM.gov, which issues a <strong>Unique Entity ID</strong> (free, but allow several weeks); (3) <strong>application</strong>, typically a project narrative, budget and budget justification; (4) <strong>merit review</strong>, where reviewers, often outside experts, score each application against the stated criteria; (5) <strong>risk review</strong>, where the agency checks financial stability, past performance, audit history and exclusion lists; and (6) the <strong>award</strong>, a legal agreement that sets the budget, allowable costs and reporting. The main door for for-profit small businesses is <strong>SBIR/STTR</strong>: agencies with large external R&amp;D budgets set aside a share for small businesses (generally U.S.-owned, for-profit, 500 or fewer employees), funded in phases from feasibility (Phase I) to full development (Phase II). Its authority lapsed on 30 September 2025, and agencies issued no new awards until the Small Business Innovation and Economic Security Act, signed 13 April 2026, extended it through 30 September 2031. Review procedures across federal grantmaking have also been under revision since 2025, so the current NOFO, not past practice, is the authority on how a given program decides.</div>}
      />
      <FootnoteAside>Many SBA &quot;grants&quot; reach businesses indirectly. For example, State Trade Expansion Program (STEP) money goes to states, which then help eligible small businesses with export costs, and SBA grants fund the Small Business Development Centers that give free advice. The business benefits, but the federal grant&apos;s recipient is the state or organization.</FootnoteAside>

      <QuickCheck
        question="Which statement about federal small business grants is accurate?"
        options={[
          { text: "They're awarded competitively for specific purposes, such as research, not as general startup money", correct: true, explanation: "Correct. The SBA states it doesn't provide grants for starting or expanding a business." },
          { text: "Every new business qualifies for a startup grant", correct: false, explanation: "No general federal startup grant exists." },
          { text: "Grants must be repaid with interest after five years", correct: false, explanation: "That describes a loan. Grants aren't repaid if the terms are followed." },
        ]}
      />

      <h2 className={h2}>Worked examples</h2>

      <h3 className={h3}>Example 1: A research startup&apos;s SBIR Phase I (baseline case)</h3>
      <div className="prose-p">A three-person company has a new sensor that could detect crop disease early. It finds an agency SBIR topic asking for exactly that kind of technology. Step by step: the founders register in SAM.gov and get a UEI, read the solicitation&apos;s eligibility rules (U.S.-owned, for-profit, under 500 employees) and its scoring criteria, and write a proposal covering the technical approach, the team and the commercial potential. Reviewers score it against those criteria alongside many other proposals for the same topic; most proposals are not funded. If it ranks high enough and passes the agency&apos;s risk check, the company signs a Phase I award to test feasibility, with reports due. A strong Phase I result is what qualifies it to compete for Phase II. Award sizes are set in each solicitation, so the solicitation, not a website summary, is the number to trust.</div>

      <h3 className={h3}>Example 2: The &quot;you&apos;ve been approved&quot; phone call (edge case)</h3>
      <div className="prose-p">A café owner gets a call: she&apos;s been selected for a $9,000 federal grant and just needs to pay a $249 processing fee or share her bank details. Every part of this contradicts how real grants work. She never applied, and federal grants are only awarded to people who submit an application against a published NOFO. Agencies don&apos;t cold-call winners, and there&apos;s no fee to receive one. The FTC lists exactly this pattern as a government grant scam. The right move is to hang up, never pay or share account details, and report it at ReportFraud.ftc.gov.</div>

      <h3 className={h3}>Example 3: A bakery that needs an oven (applied case)</h3>
      <div className="prose-p">A bakery owner wants $15,000 for a new oven. Federal grants are a poor fit: SBIR funds research, and the SBA doesn&apos;t offer general expansion grants. Her realistic grant options, if any, are local: some states, cities or economic development agencies run small business grants tied to goals such as reviving a downtown, energy-efficient equipment or recovering from a declared disaster. Those vary by place and year, and they still have eligibility rules, deadlines and scoring. In practice, she should check her state economic development agency and local SBDC, and compare a grant&apos;s paperwork and odds with a loan or equipment financing, which are more common routes for equipment.</div>

      <QuickCheck
        question="After the merit review scores an application highly, what else does the agency check before making a federal award?"
        options={[
          { text: "The applicant's risk: financial stability, past performance and exclusion lists", correct: true, explanation: "Correct. Under the Uniform Guidance, agencies review an applicant's risk before awarding." },
          { text: "Whether the applicant has paid a processing fee", correct: false, explanation: "There's no fee to receive a federal grant; that's a scam pattern." },
          { text: "Nothing; the top score wins automatically", correct: false, explanation: "Scores inform selection, but a risk review and agency decision follow." },
        ]}
      />

      <h2 className={h2}>How it works (visual)</h2>
      <DiagramBlock
        title="How a federal grant gets awarded, step by step"
        type="flow"
        svgSrc="/diagrams/government-schemes-benefits-how-small-business-government-grants-actually-get-awarded-flow.svg"
        altText="A six-step flow. 1, the agency publishes a Notice of Funding Opportunity with purpose, eligibility, deadline and scoring criteria. 2, the applicant registers in SAM.gov for a Unique Entity ID. 3, the applicant submits a narrative and budget, usually through Grants.gov. 4, reviewers score applications against the published criteria. 5, the agency reviews the applicant's risk and capacity. 6, the award is signed with spending, record-keeping and reporting rules. A warning box notes that no legitimate grant asks for a fee to receive it."
      />
      <p>Most of the outcome is decided at steps 1 and 4. If your business doesn&apos;t fit the purpose and eligibility in the NOFO, nothing else matters; if it does, the score against the written criteria is what separates funded from unfunded.</p>

      <h2 className={h2}>Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Searching for a federal grant to start a business.", fix: "The SBA says it doesn't offer these. Look at SBIR/STTR if you do R&D, and at state and local programs otherwise." },
          { mistake: "Starting SAM.gov registration a few days before the deadline.", fix: "Registration can take weeks. Register early and keep it active; it must be renewed every year." },
          { mistake: "Writing a general pitch instead of answering the scoring criteria.", fix: "Mirror the NOFO's criteria in your headings so reviewers can find and score each one." },
          { mistake: "Paying a service that 'guarantees' a grant.", fix: "No one can guarantee a competitive award. Free help is available from SBDCs and SCORE." },
          { mistake: "Treating the money as unrestricted once it arrives.", fix: "Spend only on approved costs, keep records and file reports on time; misused funds can have to be repaid." },
        ]}
      />
      <MisconceptionCallout
        myth="There are billions in unclaimed government grants waiting for small businesses that know where to look."
        reality={<p>This line usually comes from ads selling grant lists or &quot;guaranteed&quot; applications. Federal grant money is not sitting unclaimed: it is tied to specific programs, most of which fund states, universities, nonprofits and research, and the competitive ones receive far more applications than they fund. The SBA&apos;s own grants page says it <strong>does not provide grants for starting and expanding a business</strong>.</p>}
      />

      <h2 className={h2}>What to do next</h2>
      <ActionChecklist
        items={[
          "Decide what you need money for. Research and development points to SBIR/STTR; equipment or working capital usually points to loans or local programs.",
          "Search federal opportunities on Grants.gov and SBIR.gov, and check your state economic development agency for local programs.",
          "Register your business in SAM.gov well before any deadline (it's free).",
          "Read the full NOFO or solicitation, especially eligibility, matching requirements and scoring criteria, before writing anything.",
          "Book a free session with your local Small Business Development Center or SCORE mentor to review your plan.",
          "Never pay a fee to 'receive' a grant; report grant scams at ReportFraud.ftc.gov.",
        ]}
      />

      <h2 className={h2}>FAQ</h2>
      <FAQBlock
        items={[
          { question: "Can I get a government grant to start a small business?", answer: "Generally not from the federal government. The SBA says it does not provide grants for starting or expanding a business. Some state and local programs offer targeted grants, and research-focused businesses can compete for SBIR/STTR funding." },
          { question: "How are federal grants awarded?", answer: "An agency publishes a Notice of Funding Opportunity with eligibility and scoring criteria. Applicants register in SAM.gov and apply, reviewers score applications against the criteria, the agency checks each top applicant's risk, and winners sign an award agreement with reporting rules." },
          { question: "What is an SBIR grant?", answer: "SBIR (Small Business Innovation Research) funds research and development by small U.S. for-profit businesses on topics agencies need, in phases from feasibility to development. As of October 2026, the program is authorized through 30 September 2031." },
          { question: "Do you have to pay back a small business grant?", answer: "Not if you follow the award's terms. Grants aren't loans, but money spent on unapproved costs or without proper records can have to be returned." },
          { question: "How do I know if a grant offer is a scam?", answer: "Red flags include being told you won a grant you never applied for, being asked for a fee, or being asked for bank details by phone. The FTC says real government agencies don't do this." },
        ]}
      />

      <h2 className={h2}>Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className={h2}>See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
