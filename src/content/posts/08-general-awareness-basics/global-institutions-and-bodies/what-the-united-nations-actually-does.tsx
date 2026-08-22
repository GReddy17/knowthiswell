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
  title: "What the United Nations Actually Does",
  category: "general-awareness-basics",
  order: 1,
  subtopic: "global-institutions-and-bodies",
  tags: ["united nations", "UN Security Council", "international organizations", "global governance", "civics"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "The UN isn't a world government — it's a forum of 193 member states plus a small set of standing bodies, each with different, deliberately limited powers.",
  summary: "The United Nations is an intergovernmental organization of 193 member states built around six principal organs — most notably the General Assembly, where every country gets one equal vote, and the Security Council, where 15 members (5 of them permanent, veto-holding) handle matters of international peace and security.",
  sources: [
    { label: "United Nations — Main Organs", url: "https://www.un.org/en/about-us/main-organs" },
    { label: "United Nations — Charter of the United Nations", url: "https://www.un.org/en/about-us/un-charter" },
    { label: "United Nations — Growth in United Nations Membership", url: "https://www.un.org/en/about-us/growth-in-un-membership" },
    { label: "Encyclopaedia Britannica — United Nations", url: "https://www.britannica.com/topic/United-Nations" },
  ],
  seeAlso: [
    "general-awareness-basics/how-the-world-health-organization-works",
    "general-awareness-basics/how-international-treaties-get-made",
    "general-awareness-basics/the-g7-vs-g20-explained",
  ],
  glossary: [
    {"term":"General Assembly","definition":"The UN's main deliberative body, where all 193 member states each hold one vote regardless of size or wealth; its resolutions are recommendations, not binding law, except on internal UN matters like its own budget."},
    {"term":"Security Council","definition":"The 15-member UN organ responsible for international peace and security, the only UN body whose resolutions are legally binding on all member states, and the only one where five permanent members can block action with a single veto."},
    {"term":"P5 veto","definition":"The power held by the Security Council's five permanent members (US, UK, France, Russia, China) to single-handedly block any substantive resolution by voting no, regardless of how the other 14 members vote."},
    {"term":"Secretariat","definition":"The UN's administrative arm, headed by the Secretary-General, responsible for carrying out the day-to-day work mandated by the other organs rather than setting policy itself."},
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
      "The UN is not a world government — it has no independent police force or lawmaking power over member states; it functions through six principal organs, each with a distinct and deliberately limited scope.",
      "The General Assembly gives every one of the 193 member states one equal vote, but its resolutions are recommendations, not binding law — the Security Council is the only organ whose resolutions member states are legally obligated to follow.",
      "The Security Council's five permanent members (the US, UK, France, Russia, and China) each hold a veto that can single-handedly block any substantive resolution, a structural feature baked in at the UN's founding in 1945 and still unchanged today.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">The United Nations is an organization of 193 <TermLink href="/general-awareness-basics/what-the-united-nations-actually-does">General Assembly</TermLink> member countries, built to give governments a standing place to talk, negotiate, and coordinate instead of only communicating through one-off diplomacy or war. It doesn&apos;t have its own army or the power to overrule a country&apos;s laws. Its real authority is split across a handful of separate bodies — a debating chamber where every country has an equal vote, a much smaller security-focused council with real binding power, a court, and an administrative staff that carries out what the other parts decide.</div>}
      detailed={<div className="prose-p">The UN was created by the <TermLink href="/general-awareness-basics/what-the-united-nations-actually-does">UN Charter</TermLink>, signed by 50 countries in San Francisco in June 1945 and in force since October 24 of that year — a date still marked annually as UN Day. The Charter set up six principal organs: the General Assembly, the <TermLink href="/general-awareness-basics/what-the-united-nations-actually-does">Security Council</TermLink>, the Economic and Social Council (ECOSOC), the Trusteeship Council (dormant since 1994, once it finished overseeing the decolonization of the last UN trust territories), the International Court of Justice, and the <TermLink href="/general-awareness-basics/what-the-united-nations-actually-does">Secretariat</TermLink>. The design deliberately splits power: the body with the broadest membership (the General Assembly) has the weakest enforcement teeth, while the body with real binding authority (the Security Council) has only 15 seats, five of them permanent and veto-holding. That trade-off was a condition the five founding great powers set for joining at all — without the veto, none of them would have signed the Charter in 1945.</div>}
      />
      <FootnoteAside>The UN started with 51 founding members in 1945; membership grew steadily through decolonization in the 1950s–1970s and again after the breakup of the Soviet Union and Yugoslavia in the early 1990s, reaching 193 members with the 2011 admission of South Sudan — the most recent country to join.</FootnoteAside>

      <p>
      Understanding the UN mostly comes down to understanding which of its parts can actually force a country to do something, and which parts can only ask.
      </p>

      <QuickCheck
      question="A country votes against a resolution in the General Assembly, but the resolution still passes 140–40 with the rest abstaining or absent. Is that country now legally required to comply?"
      options={[
      { text: "Yes — a General Assembly resolution is binding on every member state once it passes by majority", correct: false, explanation: "General Assembly resolutions are recommendations, not binding law, for any member state — regardless of the vote margin. This is a deliberate design choice, not a loophole." },
      { text: "No — General Assembly resolutions (outside internal UN matters like the budget) are recommendations, not legally binding obligations, no matter how lopsided the vote", correct: true, explanation: "Correct. Only Security Council resolutions carry binding legal force on member states. The General Assembly's power is persuasive and political — it can shape world opinion and pressure — not enforceable law." },
      { text: "It depends on whether the country is one of the five permanent Security Council members", correct: false, explanation: "Permanent-member status is a Security Council concept, not a General Assembly one — it has no bearing on whether a General Assembly resolution binds a country." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: How a General Assembly resolution actually passes (baseline case)</h3>
      <div className="prose-p">
      Any of the 193 member states can propose a resolution. It gets debated, often revised through informal negotiation to broaden support, then put to a vote where each country — from the largest by population to the smallest island nation — casts exactly one vote. Most resolutions need only a simple majority; a smaller set of &quot;important questions&quot; (admitting new members, budget matters, peace and security recommendations) need a two-thirds majority. Once passed, the resolution is published and becomes part of the UN&apos;s political record, but no country can be compelled to act on it — its force comes from diplomatic pressure and the reputational cost of ignoring a widely-supported global position, not from enforcement.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A Security Council resolution and the veto (edge case / variation)</h3>
      <div className="prose-p">
      Contrast that with the Security Council. A substantive resolution needs at least 9 of the 15 votes in favor — but critically, if even one of the five permanent members (the US, UK, France, Russia, or China) votes no, the resolution fails outright, no matter how many of the other 14 members support it. A resolution backed 14–1, with the lone &quot;no&quot; coming from a permanent member, dies exactly the same way a resolution backed 3–12 does. This single-vote veto power is why the Security Council can be paralyzed on exactly the disputes where a permanent member has a direct stake — the design trades effectiveness for keeping all five original great powers inside the tent.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How the UN&apos;s regular budget gets funded (real-world / applied case)</h3>
      <div className="prose-p">
      The UN doesn&apos;t tax anyone — its regular budget is funded by assessed contributions from member states, set by a formula based mainly on a country&apos;s share of the world economy (gross national income), adjusted for debt burden and per-capita income, and capped so no single country can be assessed for more than 22% of the total. This formula is renegotiated periodically by the General Assembly&apos;s budget committee, which is exactly the kind of internal administrative matter where — unlike most General Assembly resolutions — the outcome genuinely does bind every member state to pay their assessed share.
      </div>

      <QuickCheck
      question="Why can a UN Security Council resolution on a conflict directly involving one of the five permanent members almost never pass, even with broad international support?"
      options={[
      { text: "Because the General Assembly has to approve it first", correct: false, explanation: "The Security Council doesn't need General Assembly approval to act on matters of peace and security — that's precisely the authority the Charter gives it independently." },
      { text: "Because that permanent member can simply veto the resolution themselves, regardless of how many of the other 14 Council members support it", correct: true, explanation: "Correct. This is exactly the structural situation the veto was designed to prevent from an enforcement standpoint — a permanent member will not let the Council bind itself against its own interests, and the Charter gives it the single vote needed to stop that." },
      { text: "Because a two-thirds majority is required for peace-and-security resolutions", correct: false, explanation: "The Security Council threshold is 9 of 15 votes for a substantive resolution, not two-thirds — but even 14 votes in favor still fails against one permanent-member veto." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The UN's six principal organs and where real authority sits"
      type="detail"
      svgSrc="/diagrams/general-awareness-basics-what-the-united-nations-actually-does-six-organs.svg"
      altText="A diagram showing six boxes representing the UN's principal organs: General Assembly (193 members, one vote each, recommendations only), Security Council (15 members, 5 permanent with veto, binding resolutions), Secretariat (administrative, carries out mandates), Economic and Social Council, International Court of Justice, and Trusteeship Council (marked inactive since 1994) — with an arrow indicating the Security Council is the only organ whose decisions are legally binding on member states."
      />
      <p>
      Laid out this way, the UN&apos;s structure reads less like a single institution and more like six separate bodies sharing a name and a headquarters — each with a different membership rule, a different vote-counting method, and critically, a different answer to the question &quot;can this actually force a country to do something?&quot;
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating a General Assembly resolution as if it were binding international law simply because it passed with a large majority.", fix: "Check which organ passed it — only the Security Council's resolutions are legally binding on member states; General Assembly resolutions are influential but non-binding, regardless of vote margin." },
      { mistake: "Assuming the UN Secretary-General has independent decision-making power comparable to a national head of state.", fix: "Remember the Secretariat carries out mandates set by the General Assembly and Security Council — the Secretary-General's real power is largely diplomatic and administrative, not a standalone executive authority." },
      { mistake: "Confusing 'permanent member' (a Security Council-only status) with general UN membership.", fix: "All 193 countries are General Assembly members; only 5 of them hold the additional, separate status of permanent, veto-holding Security Council member." },
      ]}
      />
      <MisconceptionCallout
      myth="The United Nations is a kind of world government that can override national laws or enforce its decisions on any country."
      reality={<p>The UN has no independent enforcement mechanism of its own — no UN army, no power to overturn a national law or court ruling. Its only binding authority runs through Security Council resolutions, and even those depend on member states choosing to enforce them (often through their own militaries or sanctions regimes) rather than the UN compelling compliance directly. Sovereignty over domestic law remains entirely with individual countries.</p>}
      />

      <QuickCheck
      question="If the Security Council passes a binding resolution imposing sanctions on a country, who actually enforces those sanctions?"
      options={[
      { text: "A standing UN enforcement force deploys automatically", correct: false, explanation: "The UN has no standing enforcement army of its own for this purpose — peacekeeping forces are a separate, specifically-mandated arrangement, not an automatic sanctions-enforcement mechanism." },
      { text: "Individual member states implement the sanctions through their own national laws, customs agencies, and banking regulations", correct: true, explanation: "Correct. A binding Security Council resolution creates a legal obligation for member states to comply, but the actual enforcement — blocking trade, freezing assets, restricting travel — happens through each country's own domestic legal and administrative systems." },
      { text: "The International Court of Justice directly prosecutes violators", correct: false, explanation: "The ICJ handles disputes between states and advisory opinions, not the enforcement of Security Council sanctions — that's a separate function entirely." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Next time you see a UN resolution reported in the news, check whether it came from the General Assembly (non-binding) or the Security Council (binding) before assuming it changes anything legally.",
      "Look up how your own country's UN dues are calculated (un.org publishes the assessment scale) to see the gross-national-income formula in action.",
      "If you want to follow real Security Council votes, the UN's own press releases (press.un.org) record exactly how each of the 15 members voted, including any vetoes.",
      "Read the UN Charter's short preamble (un.org/en/about-us/un-charter) — it's a quick, primary-source way to see the founding intent behind the organs described here.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Can the UN force a country to do something?", answer: "Only through the Security Council, whose resolutions are legally binding on all member states — but even then, enforcement depends on member states acting through their own governments; the UN has no independent enforcement army for this purpose." },
      { question: "Why do only 5 countries have a veto in the UN?", answer: "The veto was a founding condition set by the US, UK, France, Russia (as the Soviet Union), and China in 1945 — without guaranteed veto power, those five great powers would not have joined the UN at all, so the Charter granted it to secure their membership." },
      { question: "Is a UN General Assembly resolution the same as international law?", answer: "No. General Assembly resolutions are recommendations that carry political and diplomatic weight but are not legally binding on member states, unlike Security Council resolutions or actual treaties." },
      { question: "How many countries are members of the United Nations?", answer: "193, as of South Sudan's admission in 2011 — every UN member state automatically holds a seat in the General Assembly." },
      { question: "What does the UN Secretariat actually do?", answer: "It's the UN's administrative body, headed by the Secretary-General, responsible for carrying out the programs and decisions mandated by the General Assembly and Security Council rather than setting independent policy." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
