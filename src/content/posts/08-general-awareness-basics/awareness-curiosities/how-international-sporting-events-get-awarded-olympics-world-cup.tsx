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
  title: "How International Sporting Events Get Awarded (Olympics, World Cup)",
  category: "general-awareness-basics",
  order: 50,
  subtopic: "awareness-curiosities",
  tags: ["olympics", "world cup", "host city bidding", "IOC", "FIFA"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Host cities and countries aren't chosen by public vote — they're selected by a governing body's own membership after a formal, multi-year bidding and evaluation process.",
  summary: "Major international sporting events like the Olympics and the FIFA World Cup are awarded through a formal bidding process in which candidate cities or countries submit detailed proposals evaluated against technical, financial, and infrastructure criteria, with the final host selected by a vote of the governing body's own membership, not the general public.",
  sources: [
    { label: "International Olympic Committee — Host Selection Process", url: "https://olympics.com/ioc/hosting-the-olympics" },
    { label: "FIFA — Bidding for the FIFA World Cup", url: "https://www.fifa.com/en/tournaments/mens/worldcup" },
    { label: "Encyclopaedia Britannica — Olympic Games", url: "https://www.britannica.com/sports/Olympic-Games" },
  ],
  seeAlso: [
    "general-awareness-basics/how-global-summits-actually-work-cop-un-general-assembly",
    "general-awareness-basics/understanding-diplomatic-titles-and-protocol",
    "general-awareness-basics/how-country-rankings-and-indices-are-calculated-hdi-and-similar",
  ],
  glossary: [
    {"term":"Host city bid","definition":"A formal, detailed proposal submitted by a candidate city or country to a sport's governing body, covering venues, infrastructure, financing, and logistics — the primary document evaluated in the selection process."},
    {"term":"Evaluation commission","definition":"A body appointed by the governing organization (such as the IOC) to visit and technically assess each candidate bid against defined criteria before the final vote."},
    {"term":"Host contract","definition":"The formal legal agreement signed between the governing body and the winning host, outlining binding obligations, guarantees, and requirements the host must meet."},
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
      "Hosts for events like the Olympics and the World Cup are selected by a formal vote of the governing body's own membership (IOC members, FIFA member associations), not by any public election in the candidate country.",
      "Candidate cities or countries submit a detailed host city bid covering venues, transportation, accommodation, and financing, which is technically assessed by an evaluation commission before the final vote.",
      "Winning a bid creates binding legal obligations under a host contract, which is why host selection carries real, sometimes contentious, long-term financial and infrastructure commitments beyond the vote itself.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Cities and countries that want to host the Olympics or World Cup submit a formal <TermLink href="/general-awareness-basics/how-international-sporting-events-get-awarded-olympics-world-cup">host city bid</TermLink> to the relevant governing body — the International Olympic Committee for the Olympics, FIFA for the World Cup. The governing body&apos;s own members then vote to select the winner, following a technical evaluation of each bid.</div>}
      detailed={<div className="prose-p">The process runs over several years: interested cities or countries first declare candidacy, then prepare a detailed bid covering venues, transportation infrastructure, athlete/team accommodation, security planning, and financial guarantees. An <TermLink href="/general-awareness-basics/how-international-sporting-events-get-awarded-olympics-world-cup">evaluation commission</TermLink> appointed by the governing body visits each candidate and produces a technical assessment report, which informs — but doesn&apos;t bind — the final vote among the governing body&apos;s voting members. Once a host is selected, it signs a <TermLink href="/general-awareness-basics/how-international-sporting-events-get-awarded-olympics-world-cup">host contract</TermLink>, a binding legal agreement specifying obligations the host must meet, which is why the financial and infrastructure stakes of hosting extend years beyond the event itself and the initial vote.</div>}
      />
      <FootnoteAside>Both the IOC and FIFA have reformed their bidding processes in recent decades — including new host-selection frameworks that involve earlier, more continuous dialogue with candidates rather than a single high-pressure final vote — partly in response to past bidding-process scandals that prompted calls for more transparency.</FootnoteAside>

      <p>
      The distinction between a governing body&apos;s internal membership vote and a public election matters for understanding why host selection outcomes sometimes surprise the general public in a candidate country — the electorate deciding isn&apos;t the country&apos;s own citizens, but the governing organization&apos;s voting members.
      </p>

      <QuickCheck
      question="A country's citizens widely support their nation's bid to host the World Cup, but a different country ultimately wins. What does this tell you about how the process works?"
      options={[
      { text: "This shouldn't be possible, since host selection is decided by public referendum in the candidate countries", correct: false, explanation: "Host selection isn't decided by public referendum in candidate countries — it's decided by a vote among the governing body's own membership (FIFA's member associations, in this case), which is a separate electorate from any single candidate country's general public." },
      { text: "Public support in a candidate country doesn't directly decide the outcome — the vote is held among the governing body's own membership, based on the technical bid and evaluation, not a popular vote in the candidate country", correct: true, explanation: "Correct. Domestic public opinion can influence a government's decision to bid at all, and can affect the bid's political viability, but the final selection vote itself is internal to the governing body." },
      { text: "It means the losing country's bid didn't actually exist as a formal submission", correct: false, explanation: "A widely supported bid can still be a fully valid formal submission — public support doesn't guarantee winning, since the actual decision rests with the governing body's voting membership evaluating multiple competing bids." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A standard multi-candidate bidding cycle (baseline case)</h3>
      <div className="prose-p">
      Several cities declare interest in hosting a future Olympic Games. Each prepares a formal bid covering venue plans, transportation, and budget; an IOC evaluation commission visits each city and publishes a technical assessment report; IOC members then vote at a general session, with the winning city announced after the vote concludes.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A reformed, less competitive selection process (edge case / variation)</h3>
      <div className="prose-p">
      In some more recent cycles, rather than running a single competitive final vote among multiple finalists, the governing body&apos;s future host commission has engaged in ongoing &quot;targeted dialogue&quot; with one or a small number of interested candidates over an extended period, ultimately recommending a single host for a more straightforward ratification vote — a real, formally adopted procedural variation from the traditional multi-candidate bid-and-vote cycle, developed partly to reduce the cost and reputational risk candidate cities take on by bidding and losing.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The binding obligations that follow winning a bid (real-world / applied case)</h3>
      <div className="prose-p">
      After a country wins a World Cup hosting vote, it signs a host contract with FIFA specifying required stadium capacities, security guarantees, and other binding commitments. Meeting these obligations typically requires large-scale infrastructure investment over several years, financed by the host government — commitments that continue well past the celebratory announcement of the winning vote itself and can become a source of real domestic political debate over cost.
      </div>

      <QuickCheck
      question="Why do some governing bodies use an evaluation commission and technical assessment report rather than deciding purely on the vote itself?"
      options={[
      { text: "The technical report and evaluation commission's assessment inform voting members about each bid's actual feasibility (infrastructure readiness, financial guarantees, logistics), giving the vote a factual basis beyond each candidate's own self-presentation", correct: true, explanation: "Correct. The evaluation commission's independent technical assessment is designed to give voting members a factual comparison point across candidates' venue, transportation, and financial plans before the vote." },
      { text: "The evaluation commission's report is legally binding and automatically determines the winner without a vote", correct: false, explanation: "The evaluation commission's report informs the vote but doesn't automatically decide the outcome — the actual selection is still made by the governing body's voting membership." },
      { text: "The evaluation commission exists purely as a ceremonial formality with no real function", correct: false, explanation: "The evaluation commission performs a genuine technical assessment function, visiting candidates and producing a substantive comparison report that shapes the information voting members have before deciding." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="From candidacy to host contract: the standard bidding timeline"
      type="flow"
      svgSrc="/diagrams/general-awareness-basics-how-international-sporting-events-get-awarded-olympics-world-cup-bid-timeline.svg"
      altText="A horizontal timeline with five stages connected by arrows: Candidate cities declare bids, evaluation commission visits and assesses each bid, technical assessment report published, governing body members vote at a general session, winning host signs a binding host contract."
      />
      <p>
      Each stage narrows the field and adds formal documentation — from an initial expression of interest to a legally binding contract — which is why the process typically spans several years rather than concluding at a single vote.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming host selection is decided by a public vote or referendum in the candidate country.", fix: "Remember the final vote is held among the governing body's own membership (IOC members, FIFA member associations), a separate electorate from any candidate country's general public." },
      { mistake: "Treating a bid announcement and the final winning vote as the same event.", fix: "Recognize the bidding process spans years, including formal candidacy declarations, evaluation commission visits, and a technical report, before the actual vote." },
      { mistake: "Underestimating what winning a bid actually commits a host to.", fix: "Remember a winning bid leads to a binding host contract with specific infrastructure and financial obligations that extend years beyond the vote itself." },
      ]}
      />
      <MisconceptionCallout
      myth="A country's citizens vote to decide whether their country hosts events like the Olympics or World Cup."
      reality={<p>The final host-selection vote is held among the governing body&apos;s own voting membership — IOC members for the Olympics, FIFA member associations for the World Cup — not the general public of any candidate country. A national government may hold its own domestic process (public consultation, a local referendum on whether to bid at all) as part of deciding whether to submit a bid, but that domestic step is separate from, and doesn&apos;t determine, the governing body&apos;s actual selection vote.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "When reading about a host selection result, check whether the vote described was held by the governing body's membership or a domestic public process — they're different steps.",
      "Look for the technical evaluation commission's assessment report when researching how a specific bid was received, not just the final vote outcome.",
      "Distinguish between a country's public support for bidding and the actual binding host contract obligations that follow winning.",
      "Check a governing body's current official rules, since bidding processes have been reformed over time and specifics vary by organization and cycle.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Who actually decides which country hosts the Olympics or World Cup?", answer: "The governing body's own voting membership — International Olympic Committee members for the Olympics, FIFA member associations for the World Cup — not a public vote in any candidate country." },
      { question: "What is a host city bid?", answer: "A formal, detailed proposal a candidate city or country submits to the relevant governing body, covering venues, transportation, accommodation, security, and financial guarantees." },
      { question: "What happens after a country wins the hosting vote?", answer: "The winning host signs a binding host contract with the governing body, specifying required infrastructure, guarantees, and other obligations that must be met ahead of the event." },
      { question: "Has the bidding process always worked the same way?", answer: "No. Both the IOC and FIFA have reformed their processes over time, including more recent approaches using ongoing targeted dialogue with candidates rather than a single traditional multi-candidate competitive vote." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
