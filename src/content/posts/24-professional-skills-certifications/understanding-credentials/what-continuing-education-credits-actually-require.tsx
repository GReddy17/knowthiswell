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
  title: "What Continuing Education Credits Actually Require",
  category: "professional-skills-certifications",
  order: 9,
  subtopic: "understanding-credentials",
  tags: ["continuing education credits", "CEU", "PDU", "CPE", "certification renewal", "professional development"],
  date: "2026-10-03",
  updated: "2026-10-03",
  seoScore: 81, seoScoredOn: "2026-10-08",
  youtubeShort: false, youtubeLong: false,
  lastReviewed: "2026-10-03",
  excerpt: "Continuing education credits keep a certification or license active: a set number of documented learning hours per cycle, in approved topics, often plus a fee. Units differ by body.",
  summary: "Continuing education credits are the way certifying bodies and licensing boards check that holders keep learning after they pass the exam. Each body sets a cycle, a total, rules on which activities count, and documentation you must keep in case of audit, and the units are not interchangeable. As of October 2026: PMI's PMP requires 60 professional development units (PDUs) every three years, where one PDU equals one hour, with at least 35 from education split across PMI's three skill areas and no more than 25 from 'giving back' activities. CompTIA's Security+ requires 50 continuing education units (CEUs) over three years, and earning a higher CompTIA certification can renew lower ones. Accounting boards following the NASBA/AICPA standards count a CPE credit as 50 minutes, and many US states require 120 hours over three years, including ethics. The IACET standard defines one CEU as 10 contact hours, so '1.5 CEUs' on a course certificate can mean 15 hours. Missing a deadline usually suspends or expires the credential, sometimes requiring the exam again. Always check the body's current handbook, because totals, categories and fees change.",
  sources: [
    { label: "Project Management Institute — Maintain your certification (Continuing Certification Requirements)", url: "https://www.pmi.org/certifications/certification-resources/maintain" },
    { label: "CompTIA — Continuing Education Program", url: "https://www.comptia.org/continuing-education" },
    { label: "NASBA Registry — Statement on Standards for Continuing Professional Education (CPE) Programs", url: "https://www.nasbaregistry.org/the-standards" },
    { label: "IACET — ANSI/IACET Standard for Continuing Education and Training (the CEU definition)", url: "https://www.iacet.org/standards/ansi-iacet-2018-1-standard-for-continuing-education-and-training/" },
    { label: "ISC2 — CISSP certification (maintenance and CPE requirements)", url: "https://www.isc2.org/certifications/cissp" },
  ],
  seeAlso: [
    "professional-skills-certifications/what-a-pmp-certification-actually-requires",
    "professional-skills-certifications/what-a-comptia-security-certification-actually-covers",
    "professional-skills-certifications/what-a-certificate-actually-differs-from-a-certification",
    "professional-skills-certifications/how-to-actually-choose-between-competing-certifications",
    "professional-skills-certifications/how-cloud-certifications-actually-boost-a-resume",
  ],
  glossary: [
    { term: "Continuing education credit", definition: "A unit recording learning completed after you earn a credential, counted toward the renewal requirement set by the certifying body or licensing board." },
    { term: "CEU (IACET definition)", definition: "Continuing Education Unit: under the IACET standard, one CEU equals 10 contact hours of qualifying instruction. Some bodies, such as CompTIA, use 'CEU' for their own hour-based units." },
    { term: "PDU", definition: "Professional Development Unit, PMI's renewal unit. One PDU equals one hour of qualifying learning or professional activity." },
    { term: "CPE credit", definition: "Continuing Professional Education credit, used by accountancy boards and some IT bodies. Under NASBA/AICPA standards, one credit is 50 minutes of participation." },
    { term: "Renewal cycle", definition: "The fixed period, often three years, in which you must earn the required credits and pay any fees to keep the credential active." },
    { term: "Audit", definition: "A check, usually of a random sample of renewals, in which the certifying body asks you to prove the credits you reported, such as with certificates of completion." },
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
  {"question": "What are continuing education credits for?", "difficulty": "easy", "options": [{"text": "Proving you've kept learning so a certification or license stays active", "correct": true, "explanation": "They're a renewal requirement set by the credentialing body or board."}, {"text": "Earning a college degree", "correct": false, "explanation": "Continuing education credits generally don't count toward a degree."}, {"text": "Replacing the original certification exam", "correct": false, "explanation": "You pass the exam once; credits maintain the credential afterwards."}]},
  {"question": "As of October 2026, how many PDUs does PMI require to renew a PMP, and over what period?", "difficulty": "easy", "options": [{"text": "60 PDUs every three years", "correct": true, "explanation": "One PDU is one hour; check PMI's current handbook for category rules."}, {"text": "20 PDUs every year", "correct": false, "explanation": "PMI uses a three-year cycle, not an annual one."}, {"text": "None; the PMP never expires", "correct": false, "explanation": "The PMP must be renewed every three years."}]},
  {"question": "Under the IACET standard, a course certificate says '1.5 CEUs.' How many contact hours is that?", "difficulty": "medium", "options": [{"text": "15 hours", "correct": true, "explanation": "One IACET CEU equals 10 contact hours."}, {"text": "1.5 hours", "correct": false, "explanation": "That confuses a CEU with an hour, a very common mix-up."}, {"text": "90 minutes per day for a week", "correct": false, "explanation": "CEUs are defined in total contact hours, not daily schedules."}]},
  {"question": "Under NASBA/AICPA standards, how many CPE credits does a 100-minute accounting seminar earn?", "difficulty": "medium", "options": [{"text": "2 credits", "correct": true, "explanation": "One CPE credit is 50 minutes, so 100 minutes is 2 credits."}, {"text": "1.67 credits", "correct": false, "explanation": "That's 100 divided by 60, an hour-based count, which the 50-minute standard doesn't use."}, {"text": "10 credits", "correct": false, "explanation": "That would be the IACET 10-hour CEU logic misapplied."}]},
  {"question": "A PMP holder has 60 PDUs, but 30 of them are from volunteering and mentoring ('giving back'). What's the problem?", "difficulty": "hard", "options": [{"text": "PMI caps giving-back PDUs at 25, so only 55 count", "correct": true, "explanation": "At least 35 must come from education, split across PMI's skill areas."}, {"text": "No problem; any 60 PDUs count", "correct": false, "explanation": "PMI's categories have minimums and caps."}, {"text": "Volunteering never counts", "correct": false, "explanation": "It counts, up to the cap."}]},
  {"question": "How can a CompTIA Security+ holder renew without separately earning 50 CEUs?", "difficulty": "medium", "options": [{"text": "By earning a qualifying higher-level CompTIA certification during the cycle", "correct": true, "explanation": "CompTIA's program lets higher certifications renew lower ones in the same path."}, {"text": "By retaking the exam for a lower certification such as A+", "correct": false, "explanation": "A lower certification doesn't renew a higher one."}, {"text": "There's no alternative", "correct": false, "explanation": "CompTIA lists several renewal routes, including higher certifications."}]},
  {"question": "Why should you keep certificates of completion for every continuing education activity?", "difficulty": "easy", "options": [{"text": "Certifying bodies audit a sample of renewals and ask for proof", "correct": true, "explanation": "If you can't document the credits in an audit, they may be disallowed."}, {"text": "Employers are legally required to collect them", "correct": false, "explanation": "There's no general legal requirement; the certifying body is who checks."}, {"text": "They count double if printed", "correct": false, "explanation": "Format doesn't change the credit value."}]},
  {"question": "Many US state boards following NASBA/AICPA guidance require CPAs to complete how much CPE?", "difficulty": "hard", "options": [{"text": "Often 120 hours over three years, with an annual minimum and ethics hours, though rules vary by state", "correct": true, "explanation": "Each state board sets its own rules, so check your board."}, {"text": "Exactly 10 hours per year in every state", "correct": false, "explanation": "Requirements are far higher and vary by state."}, {"text": "None after the CPA exam", "correct": false, "explanation": "Licensed CPAs must complete ongoing CPE."}]},
  {"question": "What usually happens if you miss a certification's continuing education deadline?", "difficulty": "medium", "options": [{"text": "The credential is suspended or expires, sometimes requiring the exam again after a grace period", "correct": true, "explanation": "Policies differ; some bodies allow a short suspension window to catch up."}, {"text": "Nothing; deadlines are advisory", "correct": false, "explanation": "Missing the requirement affects your status."}, {"text": "The credits roll over automatically", "correct": false, "explanation": "Most bodies limit or don't allow rollover."}]},
  {"question": "Which is the safest assumption about a one-hour webinar's value across bodies?", "difficulty": "hard", "options": [{"text": "It may count as 1 PDU for PMI, 1 CEU-hour for CompTIA, 1.2 CPE credits for an accountant, or nothing, if the topic isn't eligible", "correct": true, "explanation": "Units and eligibility differ; each body decides what counts."}, {"text": "It's always worth exactly one credit everywhere", "correct": false, "explanation": "Units differ (e.g. 50-minute CPE hours) and topics must be relevant."}, {"text": "It's worth 1 IACET CEU", "correct": false, "explanation": "One IACET CEU is 10 hours."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Continuing education credits keep a credential alive: a set amount of documented learning per renewal cycle, in topics the body accepts, often plus a fee.",
          "The units aren't interchangeable. A PMI PDU is one hour, an accountancy CPE credit is 50 minutes, and an IACET CEU is 10 hours, so '1 credit' means different things.",
          "Category rules and audits matter as much as the total. Read your body's current handbook, track credits as you go, and keep proof of each activity.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Passing a certification exam proves what you knew on one day. Fields move, though: tools change, laws change, security threats change. So most serious credentials work more like a gym membership than a trophy. To keep the title, you have to show up regularly, and the certifying body counts your visits in credits. Each body writes its own rules: how many credits, over how many years, which kinds of learning count (courses, conferences, webinars, teaching, volunteering), and how much of each. You report what you did, usually pay a renewal fee, and keep receipts, because a few people get audited each cycle. Miss the deadline and the credential lapses. The confusing part is that every body uses its own currency, so an hour-long webinar might be worth one credit to a project manager and slightly more to an accountant.</div>}
        detailed={<div className="prose-p">Three unit systems cover most cases. <strong>Hour-based units:</strong> PMI&apos;s Professional Development Unit is one hour. For the PMP, PMI&apos;s Continuing Certification Requirements (as of October 2026) call for 60 PDUs per three-year cycle, with at least 35 in Education, at least 8 in each of PMI&apos;s three skill areas (Ways of Working, Power Skills, Business Acumen), and at most 25 from Giving Back (working as a practitioner, volunteering, creating content). CompTIA also counts its renewal units roughly by hour: Security+ needs 50 over three years, Network+ 30, A+ 20, plus a continuing-education fee; earning a higher CompTIA certification in the same path can renew the lower ones. ISC2&apos;s CISSP requires 120 CPE credits per three-year cycle plus an annual maintenance fee. <strong>The 50-minute hour:</strong> the NASBA/AICPA Statement on Standards for CPE Programs defines one CPE credit as 50 minutes, with partial credits allowed after the first full credit; state boards then set totals, commonly 120 hours over three years with an annual minimum and an ethics requirement, varying by state. <strong>The 10-hour CEU:</strong> the ANSI/IACET standard defines one Continuing Education Unit as 10 contact hours of instruction meeting its criteria, which is why a short course may award &quot;0.3 CEUs.&quot; The edge case is eligibility: a credit counts only if the activity fits the body&apos;s topic rules and, for some, comes from an approved provider. Audits, typically of a random sample, require certificates or other proof, and credits that can&apos;t be documented are disallowed.</div>}
      />
      <FootnoteAside>The &quot;CEU&quot; label causes the most confusion. IACET created the CEU as a 10-hour unit in the 1970s, but several certification bodies later adopted the same three letters for their own, roughly hourly units. Always read the definition in the specific body&apos;s handbook.</FootnoteAside>

      <p>If you&apos;re still choosing a credential, renewal burden is part of its true cost; see <TermLink href="/professional-skills-certifications/how-to-actually-choose-between-competing-certifications">choosing between certifications</TermLink>. The difference between a <TermLink href="/professional-skills-certifications/what-a-certificate-actually-differs-from-a-certification">certificate and a certification</TermLink> matters here too: most certificates never expire, while certifications usually do.</p>

      <QuickCheck
        question="A course says it awards '2.0 CEUs' under the IACET standard. How long is it?"
        options={[
          { text: "About 20 contact hours", correct: true, explanation: "Correct. One IACET CEU equals 10 contact hours." },
          { text: "2 hours", correct: false, explanation: "That treats a CEU as an hour, the most common misreading." },
          { text: "It can't be known", correct: false, explanation: "Under the IACET standard, CEUs convert directly to hours." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <p>Requirements below are as published by each body as of October 2026, simplified. Check the current handbook before planning your own renewal.</p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A PMP&apos;s three-year plan (baseline case)</h3>
      <div className="prose-p">Priya earned her PMP and needs 60 PDUs in three years. She spreads it out: a 16-hour online course on agile practices (16 Education PDUs, Ways of Working), a 2-day conference with 12 hours of sessions split across leadership and strategy topics (12 PDUs), and monthly one-hour webinars, 12 a year for two years, chosen to cover all three skill areas (24 PDUs). That&apos;s 52 Education PDUs, with at least 8 in each area. She adds 8 Giving Back PDUs for mentoring a junior colleague. Total: 60, with 52 Education (above the 35 minimum) and 8 Giving Back (under the 25 cap). She logs each one in PMI&apos;s system as she goes and keeps certificates in one folder. Roughly 20 hours a year, about the length of one working week spread across 12 months.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Same webinar, three different credit values (edge case)</h3>
      <div className="prose-p">A 100-minute webinar on data privacy law is attended by a project manager and an accountant. For the PMP holder, it&apos;s about 1.67 hours, so PMI would typically count 1.5 or so PDUs (PMI accepts quarter-hour increments), if she classifies it under an eligible skill area. For the accountant, under the 50-minute CPE standard, the same 100 minutes is <strong>2</strong> CPE credits, provided the program meets the board&apos;s requirements. If the provider also issued an IACET certificate, it would say about <strong>0.2 CEUs</strong>, which is the same learning written in 10-hour units. Nobody got more education; they just measured it in different currencies.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The renewal that stacks (applied)</h3>
      <div className="prose-p">Marcus holds CompTIA Security+ and needs 50 CEUs before his three-year cycle ends. He has logged 20 from training at work. Instead of collecting 30 more, he studies for and passes CompTIA&apos;s CySA+, a higher certification in the same cybersecurity path. Under CompTIA&apos;s rules, earning it renews Security+ as well, and starts a fresh cycle. The trade-off: the higher exam takes more preparation than 30 hours of webinars, but it adds a credential employers can see. Before choosing this route, he confirms in CompTIA&apos;s current CE documentation that CySA+ qualifies to renew his Security+, because the eligible combinations are set by CompTIA and can change.</div>

      <QuickCheck
        question="Under PMI's rules, a PMP holder has 40 Education PDUs and 30 Giving Back PDUs. How many count toward the 60?"
        options={[
          { text: "65: all 40 Education, but only 25 Giving Back", correct: true, explanation: "Correct. Giving Back is capped at 25, so they've met the 60 total with room to spare." },
          { text: "70: every PDU counts", correct: false, explanation: "The Giving Back cap of 25 limits how many of those count." },
          { text: "40: Giving Back never counts", correct: false, explanation: "It counts, up to the cap." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Three credit currencies: what one unit equals"
        type="comparison"
        svgSrc="/diagrams/professional-skills-certifications-what-continuing-education-credits-actually-require-comparison.svg"
        altText="A comparison of three continuing education units. PMI PDU: one hour; PMP renewal needs 60 in three years. NASBA/AICPA CPE credit: 50 minutes; many state boards require 120 hours in three years. IACET CEU: 10 contact hours; a 1.5 CEU course equals 15 hours. Below, a renewal cycle shows the steps: earn eligible credits, report them, pay any fee, keep proof for a possible audit, renew before the deadline."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Leaving all credits for the last few months of the cycle.", fix: "Spread them out. A three-year, 60-hour requirement is under 2 hours a month if you start early." },
          { mistake: "Assuming every course counts.", fix: "Check the body's eligible topics and categories, and whether the provider must be approved, before you pay for a course." },
          { mistake: "Reading '1 CEU' as one hour.", fix: "Check the unit definition. Under the IACET standard, 1 CEU is 10 hours; some certification bodies use the label for roughly hourly units." },
          { mistake: "Not keeping proof.", fix: "Save certificates, agendas and receipts as you go. Audits ask for documentation after the fact." },
        ]}
      />
      <MisconceptionCallout
        myth="Once you've passed a certification exam, the credential is yours for life."
        reality={<p>Many certifications, including PMP, Security+ and CISSP, expire unless you meet continuing education requirements and pay any fees each cycle. Some older credentials were issued as lifetime certifications, and many course certificates never expire, so check the terms of your specific credential.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Find your credential's current renewal handbook and note the total, the cycle end date and any category minimums or caps.",
          "Put the renewal deadline, and a reminder six months before it, in your calendar.",
          "Set up one folder for certificates of completion and add to it after every activity.",
          "Ask your employer whether training you already do counts, and whether they reimburse renewal fees.",
          "If you hold several credentials, look for activities that qualify for more than one, or for a higher certification that renews a lower one.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is a continuing education credit?", answer: "A unit recording learning completed after you earn a certification or license, counted toward the renewal requirement. Each body defines its own unit, such as PMI's one-hour PDU or the IACET 10-hour CEU." },
          { question: "How many hours is 1 CEU?", answer: "Under the IACET standard, 1 CEU is 10 contact hours. Some certification bodies, such as CompTIA, use 'CEU' for their own units that track roughly with hours, so check the body's definition." },
          { question: "What happens if I don't complete my continuing education credits?", answer: "The credential usually becomes suspended or expired. Some bodies offer a grace or suspension period to catch up; after that you may need to retake the exam." },
          { question: "Do free webinars count for continuing education credits?", answer: "Often yes, if the topic is eligible under your body's rules and you can document attendance. Some boards require approved providers, so check before relying on them." },
          { question: "How many PDUs do I need for PMP renewal?", answer: "As of October 2026, 60 PDUs every three years, with at least 35 in Education across PMI's three skill areas and at most 25 from Giving Back. Confirm in PMI's current handbook." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
