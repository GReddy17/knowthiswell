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
  title: "How a Bill Becomes a Law",
  category: "general-awareness-basics",
  order: 14,
  subtopic: "national-and-government-structure-basics",
  tags: ["legislative process", "bill", "lawmaking", "civics", "government"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A bill isn't law the moment it's proposed — it's one draft among thousands, and most never survive the committee stage where the real filtering happens.",
  summary: "In most legislative systems, a bill moves through introduction, committee review, floor debate and amendment, a vote (often in more than one chamber), and finally executive approval — with committee review acting as the main filter where the overwhelming majority of proposed bills quietly die.",
  sources: [
    { label: "US Congress — The Legislative Process", url: "https://www.congress.gov/legislative-process" },
    { label: "UK Parliament — How Laws Are Made", url: "https://www.parliament.uk/about/how/laws/" },
    { label: "Encyclopaedia Britannica — Legislature", url: "https://www.britannica.com/topic/legislature" },
  ],
  seeAlso: [
    "general-awareness-basics/how-a-democracy-actually-works-branches-of-government",
    "general-awareness-basics/executive-vs-legislative-vs-judicial-explained",
    "general-awareness-basics/how-elections-and-voting-systems-work",
  ],
  glossary: [
    {"term":"Bill","definition":"A formal, written proposal for a new law or a change to an existing law, introduced into a legislature for consideration."},
    {"term":"Committee review","definition":"The stage where a smaller group of legislators examines, debates, and often revises a bill in detail before it can reach the full chamber — the point at which most bills are never advanced further."},
    {"term":"Floor vote","definition":"A vote by the full membership of a legislative chamber on whether to pass a bill, typically following committee review and any floor debate or amendments."},
    {"term":"Veto","definition":"The power of an executive (such as a president or governor) to reject a bill passed by the legislature, which in many systems the legislature can override with a sufficiently large vote."},
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
      "A bill moves through several distinct stages — introduction, committee review, floor debate, a vote, and often executive approval — and can be rejected or simply die at any stage along the way.",
      "Committee review is the real filter in most systems: the large majority of introduced bills never make it out of committee to a full floor vote at all.",
      "Even after both a legislature passes a bill and an executive signs it, the process described here is a general model — the specific chambers, committee structures, and veto rules vary meaningfully between countries.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/general-awareness-basics/how-a-bill-becomes-a-law">bill</TermLink> starts as a written proposal introduced by a lawmaker. It then usually goes to a smaller <TermLink href="/general-awareness-basics/how-a-bill-becomes-a-law">committee</TermLink> that studies it, holds hearings, and can revise or simply shelve it. If it survives committee, the full legislative chamber debates it, sometimes amends it, and takes a vote. If it passes there — and in a two-chamber system, in the other chamber too — it typically goes to the head of the executive branch, who can sign it into law or reject it.</div>}
      detailed={<div className="prose-p"><TermLink href="/general-awareness-basics/how-a-bill-becomes-a-law">Committee review</TermLink> is where the real filtering happens in most systems: committees are organized by subject area (finance, defense, health, and so on), and a bill is typically referred to the committee matching its subject. There, committee members can hold hearings, gather expert testimony, propose amendments, or simply never schedule the bill for further action — a bill that never gets a committee vote effectively dies without ever reaching the floor. A bill that clears committee moves to a <TermLink href="/general-awareness-basics/how-a-bill-becomes-a-law">floor vote</TermLink> of the full chamber, where further debate and amendment can occur. In a bicameral (two-chamber) legislature, a bill generally must pass both chambers in identical form before advancing further. Finally, many systems give the executive a <TermLink href="/general-awareness-basics/how-a-bill-becomes-a-law">veto</TermLink> — the power to reject a passed bill — which the legislature can often override with a supermajority vote, though the exact threshold varies by country.</div>}
      />
      <FootnoteAside>In the US Congress, only a small fraction of the thousands of bills introduced each two-year session are ever enacted into law — the overwhelming majority die in committee, illustrating just how much filtering happens before a bill ever reaches a floor vote.</FootnoteAside>

      <p>
      The single most common misunderstanding about lawmaking is picturing it as a straight line from proposal to law — in practice it&apos;s closer to a filter with several narrow points where a bill can quietly stop moving forward.
      </p>

      <QuickCheck
      question="If a lawmaker introduces a bill, does it automatically receive a vote by the full legislative chamber?"
      options={[
      { text: "Yes, every introduced bill eventually gets a floor vote", correct: false, explanation: "Most introduced bills never reach a floor vote at all — they're typically referred to committee first, and a large share simply never advance out of committee." },
      { text: "No — a bill is usually referred to committee first, and the large majority of bills never make it out of committee to reach a floor vote", correct: true, explanation: "Correct. Committee review is the main filtering stage in most legislative systems, and most introduced bills die there without ever reaching the full chamber." },
      { text: "No — bills require public petition signatures before they can even be introduced", correct: false, explanation: "Introduction rights typically belong to legislature members themselves, not to a public-petition threshold — that's a separate, distinct civic mechanism covered elsewhere." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A bill that clears every stage (baseline case)</h3>
      <div className="prose-p">
      A lawmaker introduces a bill, which is referred to the relevant subject-matter committee. The committee holds hearings, makes amendments, and votes to advance it. The full chamber debates and passes it. In a two-chamber system, the other chamber does the same (often after reconciling any differences between the two chambers&apos; versions). The executive then signs the reconciled bill, and it becomes law — a process that, even when everything proceeds smoothly, commonly takes months.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A bill that dies in committee (edge case / variation)</h3>
      <div className="prose-p">
      A bill is introduced and referred to committee, but the committee chair never schedules it for a hearing or a vote — often because it lacks sufficient support, conflicts with other priorities, or the chair simply doesn&apos;t advance it. The bill effectively dies without any recorded vote at all, and typically must be reintroduced from scratch in a future legislative session if a lawmaker still wants to pursue it — illustrating that &quot;no vote&quot; is itself one of the most common outcomes for an introduced bill.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A vetoed bill and an override attempt (real-world / applied case)</h3>
      <div className="prose-p">
      A bill passes both legislative chambers and reaches the executive, who vetoes it. The legislature can attempt an override vote, which in many systems requires a supermajority (commonly two-thirds) in both chambers — a much higher bar than the simple majority that originally passed the bill. Override attempts frequently fail even when the original passage was comfortable, since gathering a supermajority is a materially harder threshold than a simple majority.
      </div>

      <QuickCheck
      question="If an executive vetoes a bill, can the legislature ever still make it law without the executive's signature?"
      options={[
      { text: "No, a veto is always final", correct: false, explanation: "In many systems the legislature can override a veto, though it typically requires a higher vote threshold (often a supermajority) than the bill's original passage." },
      { text: "Yes, in many systems the legislature can override a veto with a sufficiently large vote (often a supermajority) in both chambers", correct: true, explanation: "Correct. Override provisions exist precisely so a single executive veto can't unilaterally end a bill that has very broad legislative support — but that override bar is deliberately set higher than ordinary passage." },
      { text: "Yes, any simple majority vote automatically overrides a veto", correct: false, explanation: "Override thresholds are typically higher than the simple majority needed for original passage — a supermajority, not just any majority, is commonly required." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="From introduction to law: where bills actually stop"
      type="flow"
      svgSrc="/diagrams/general-awareness-basics-how-a-bill-becomes-a-law-legislative-flow.svg"
      altText="A flow diagram showing Introduction leading to Committee Review, with a large dotted branch labeled 'most bills die here' peeling off, the surviving path continuing to Floor Vote, then Second Chamber (if applicable), then Executive Signature or Veto, with a further branch showing a possible Override Vote after a veto."
      />
      <p>
      The width of the &quot;dies here&quot; branch after committee review isn&apos;t decorative — it reflects that committee review, not the floor vote or executive veto, is where most bills actually stop moving forward.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming every introduced bill gets a floor vote or public debate.", fix: "Remember committee review filters out most bills before they ever reach the full chamber — no vote at all is a common, unremarkable outcome." },
      { mistake: "Treating a legislative veto override as just as easy as the original vote.", fix: "Check the override threshold — it's typically a supermajority, a meaningfully higher bar than the simple majority that passed the bill originally." },
      { mistake: "Assuming this exact process is identical in every country.", fix: "Treat this as a general model — the number of chambers, committee structures, and veto/override rules vary by country's own constitutional system." },
      ]}
      />
      <MisconceptionCallout
      myth="Any bill that a majority of the public supports will eventually become law if enough people want it."
      reality={<p>Public support alone doesn&apos;t move a bill through the legislative process — a bill still has to be introduced by a lawmaker, survive committee review, pass floor votes (in one or both chambers, depending on the system), and often clear an executive signature or veto override. A bill can have broad public support and still die in committee if it never receives a hearing or vote there.</p>}
      />

      <QuickCheck
      question="Is committee review mainly a formality that nearly all bills pass through quickly on their way to a floor vote?"
      options={[
      { text: "Yes, committee review rarely changes a bill's outcome", correct: false, explanation: "Committee review is the opposite of a formality — it's the stage where the large majority of introduced bills are filtered out and never advance further." },
      { text: "No — committee review is where most bills actually stop; only a minority of introduced bills are ever advanced out of committee to a floor vote", correct: true, explanation: "Correct. This is the single most important filtering stage in most legislative systems, not a routine formality." },
      { text: "Committee review only applies to bills involving the budget", correct: false, explanation: "Committee review generally applies to bills across subject areas, referred to whichever committee matches the bill's subject matter — it isn't limited to budget bills." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Next time you hear about a bill 'introduced' in the news, remember that's the very first of several stages, not a sign it will become law.",
      "Check whether a bill you're following has cleared committee — that single fact tells you more about its real chances than the initial introduction did.",
      "Look up your own country's legislature's official site, which typically tracks each bill's exact current stage in real time.",
      "If a bill is vetoed, check the override threshold required in your country's system before assuming the veto is either final or easily reversed.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What are the main steps a bill goes through to become law?", answer: "Generally: introduction, committee review, floor debate and vote, (in a two-chamber system) passage in the second chamber, and executive signature or veto — though exact steps vary by country." },
      { question: "Why do most bills never become law?", answer: "The large majority of introduced bills die in committee review, the stage where a smaller group of legislators decides whether to advance a bill to a full floor vote at all." },
      { question: "Can a legislature override an executive veto?", answer: "In many systems, yes — but it typically requires a higher vote threshold, often a supermajority, in both chambers, a materially harder bar than the bill's original passage." },
      { question: "What does it mean for a bill to 'die in committee'?", answer: "It means the committee it was referred to never scheduled it for further hearings or a vote, so it never advances to the full chamber — a very common outcome for introduced bills." },
      { question: "Does the legislative process work the same way in every country?", answer: "No. The general stages (introduction, committee, floor vote, executive approval) are common across many systems, but the specific chamber structure, committee rules, and veto/override thresholds vary by country." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
