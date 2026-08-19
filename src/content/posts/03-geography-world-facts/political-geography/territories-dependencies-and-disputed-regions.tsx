import React from 'react';
import { PostMeta, PostFrontmatter } from '@/types/post';
import {
  KeyTakeaways,
  ModeToggle,
  FootnoteAside,
  QuickCheck,
  DiagramBlock,
  MistakeList,
  MisconceptionCallout,
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Territories, Dependencies & Disputed Regions",
  category: "geography-world-facts",
  order: 12,
  subtopic: "political-geography",
  tags: [
    "territories",
    "dependencies",
    "disputed regions",
    "self-governance",
    "political geography",
    "sovereignty",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Not every populated place on the map is a fully sovereign country — territories, dependencies, and disputed regions each sit at a different point on the spectrum of self-governance, presented here factually and without taking sides on active disputes.",
  summary: "A territory or dependency is an area under the sovereignty of another country without being fully independent itself, while a disputed region is a territory whose sovereignty is actively contested by two or more parties — this entry presents the recognized facts and multiple positions on each, citing the United Nations and other neutral authorities rather than endorsing any single claim.",
  sources: [
    { label: "United Nations — Non-Self-Governing Territories", url: "https://www.un.org/dppa/decolonization/en/nsgt" },
    { label: "CIA World Factbook — Dependencies and Areas of Special Sovereignty", url: "https://www.cia.gov/the-world-factbook/references/guide-to-country-comparisons/" },
    { label: "United Nations — Security Council Resolutions", url: "https://www.un.org/securitycouncil/content/resolutions" },
    { label: "Encyclopaedia Britannica — Dependent State", url: "https://www.britannica.com/topic/dependent-state" },
  ],
  seeAlso: [
    "geography-world-facts/countries-and-capitals-overview",
    "geography-world-facts/borders-and-how-theyre-defined",
    "geography-world-facts/united-nations-and-global-political-bodies-basic-overview",
    "geography-world-facts/landlocked-countries",
  ],
  glossary: [
    { term: "Territory", definition: "An area of land under the sovereignty or administration of a country but not treated as a full, integral part of that country's core national territory." },
    { term: "Dependency", definition: "A territory that depends on another sovereign state for its governance, defense, or foreign affairs, without being fully independent — also called a dependent territory." },
    { term: "Disputed region", definition: "A territory whose sovereignty or control is actively claimed by two or more parties, without full international consensus on which claim is valid." },
    { term: "Non-Self-Governing Territory", definition: "A UN classification for a territory whose people have not yet attained a full measure of self-government, tracked by the UN's Special Committee on Decolonization." },
    { term: "De facto control", definition: "Actual, on-the-ground administrative control of a territory, which may or may not match who holds recognized legal sovereignty over it." },
    { term: "Self-determination", definition: "The principle, recognized in the UN Charter, that a people has the right to freely determine its own political status and form of government." },
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
          "A territory or dependency (Greenland, Puerto Rico, French Guiana) is governed under another sovereign country without being fully independent itself — the degree of self-rule varies enormously from case to case.",
          "The United Nations currently lists 17 Non-Self-Governing Territories, places whose people have not yet attained a full measure of self-government, tracked by its Special Committee on Decolonization.",
          "A disputed region has its sovereignty actively contested by two or more parties, and the honest, source-backed approach is to state who administers it, who else claims it, and what neutral bodies like the UN have said — not to declare a winner.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Not every place with its own flag, government, or well-known name is a fully independent country. A <TermLink href="/geography-world-facts/territories-dependencies-and-disputed-regions">territory</TermLink> or <TermLink href="/geography-world-facts/territories-dependencies-and-disputed-regions">dependency</TermLink> is administered by another country — Greenland is governed by Denmark, Puerto Rico by the United States, French Guiana by France — with varying degrees of local self-rule. A <TermLink href="/geography-world-facts/territories-dependencies-and-disputed-regions">disputed region</TermLink> is different again: it&apos;s a place where two or more parties each claim rightful control, and the international community doesn&apos;t fully agree on which claim is correct. Both categories sit outside the tidy &quot;195 countries&quot; list covered in the countries and capitals overview.</div>}
        detailed={<div className="prose-p">Territories and dependencies vary widely in their degree of autonomy. Some, like French Guiana, are legally integrated as part of their governing country (an overseas department of France, and by extension part of the European Union) with residents holding full citizenship. Others, like Greenland, are self-governing in most domestic matters (health, education, natural resources) while Denmark retains control over foreign affairs and defense — Greenland&apos;s people voted for expanded self-government in a 2008 referendum. Puerto Rico is an unincorporated U.S. territory whose residents are U.S. citizens but who, unlike residents of U.S. states, cannot vote in U.S. presidential elections and have no voting representation in Congress; Puerto Rico&apos;s political status (statehood, independence, or continued territorial status) has been the subject of multiple non-binding local referendums. The United Nations separately tracks 17 <TermLink href="/geography-world-facts/territories-dependencies-and-disputed-regions">Non-Self-Governing Territories</TermLink> — including Western Sahara, the Falkland Islands (Islas Malvinas), and Gibraltar — through its Special Committee on Decolonization, based on the principle of <TermLink href="/geography-world-facts/territories-dependencies-and-disputed-regions">self-determination</TermLink> set out in the UN Charter. Disputed regions add a further layer: <TermLink href="/geography-world-facts/territories-dependencies-and-disputed-regions">de facto control</TermLink> (who actually administers a place day to day) and internationally recognized sovereignty don&apos;t always match, which is precisely what makes a region &quot;disputed&quot; rather than simply governed.</div>}
      />
      <FootnoteAside>Western Sahara has been on the UN&apos;s Non-Self-Governing Territories list since Spain, its former colonial administrator, withdrew in 1975 — making it, by land area, the largest item on that list, with most of the territory currently administered by Morocco while the Polisario Front&apos;s Sahrawi Arab Democratic Republic government continues to seek full independence, and a UN-organized referendum on the territory&apos;s status remains unheld after decades of delay.</FootnoteAside>

      <p>
      Reading a disputed region accurately means separating three distinct questions: who legally holds sovereignty according to which body, who exercises de facto administrative control on the ground, and what a neutral international body like the UN has actually said about it — the next examples work through real cases using exactly that framework.
      </p>

      <QuickCheck
        question="What is the most accurate, source-backed way to describe a territory where sovereignty is actively disputed by two or more parties?"
        options={[
          { text: "State which side is correct based on which claim seems more historically justified", correct: false, explanation: "This isn't a neutral, source-backed approach — a reference source should report the recognized facts and multiple positions, not adjudicate which historical claim is more valid." },
          { text: "State who administers the territory day to day, who else claims it, and what neutral bodies like the UN have said, without declaring a winner", correct: true, explanation: "Correct. This is the standard neutral, factual approach used by reference works and diplomatic bodies — presenting de facto control, competing claims, and relevant UN positions without taking a side on an active dispute." },
          { text: "Omit disputed territories from geography content entirely to avoid controversy", correct: false, explanation: "Omission isn't accuracy — disputed regions are a real and well-documented part of world geography; the responsible approach is factual, neutral coverage, not avoidance." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Greenland, a self-governing Danish territory (baseline case)</h3>
      <div className="prose-p">
      Greenland is an autonomous territory within the Kingdom of Denmark. Following a 2008 referendum, Greenland&apos;s home rule government gained authority over most domestic matters, including natural resources, while Denmark continues to handle foreign affairs, defense, and monetary policy, and provides an annual block grant that funds a substantial share of Greenland&apos;s public budget. Greenland is not a UN member state and is not on the UN&apos;s Non-Self-Governing Territories list, since its arrangement with Denmark is a recognized form of self-government rather than colonial administration. This is a comparatively uncontested case: no other country disputes Denmark&apos;s sovereignty over Greenland, and the primary open question — raised periodically by Greenlandic politicians and, at times, by U.S. officials — is whether Greenland might eventually pursue full independence, not who currently holds legitimate authority over it.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Kashmir, a long-running multi-party dispute (edge case / variation)</h3>
      <div className="prose-p">
      The Kashmir region has been divided along a militarized Line of Control since a 1948–49 ceasefire, with India administering the largest share (Jammu and Kashmir, and Ladakh), Pakistan administering a portion (Azad Kashmir and Gilgit-Baltistan), and China administering a smaller area (Aksai Chin). India and Pakistan have each fought multiple wars partly over the region, and China separately disputes its own boundary with India in the area. Early UN Security Council resolutions in 1948 called for a plebiscite to let Kashmiris decide the territory&apos;s status, but that vote was never held, and the dispute remains formally unresolved. Presented factually: all three governments administer the portions they control as their own territory, all three maintain competing legal claims to some or all of the wider region, and no UN-recognized final settlement has been reached — a neutral geography reference states these facts and the relevant UN history without endorsing any one government&apos;s claim.
      </div>

      <QuickCheck
        question="The Kashmir region is currently administered in separate parts by India, Pakistan, and China. What does this fact alone tell you about who holds legitimate sovereignty over the whole region?"
        options={[
          { text: "It settles the question — whoever administers a piece of territory automatically holds full legal sovereignty over it", correct: false, explanation: "De facto administration and internationally recognized sovereignty are different things, which is exactly why Kashmir remains classified as a disputed region rather than a settled one — administration alone doesn't end a sovereignty dispute." },
          { text: "It shows current de facto control, but sovereignty over the wider region remains actively disputed and has not been resolved by a recognized international process", correct: true, explanation: "Correct. India, Pakistan, and China each administer the portions they control, but this reflects de facto control, not a resolved sovereignty question — early UN-called-for steps like a plebiscite were never carried out, and the broader dispute remains open." },
          { text: "It means the United Nations has formally awarded each country the specific share it currently administers", correct: false, explanation: "The UN has not issued a ruling awarding sovereignty over specific shares of Kashmir to any of the three administering governments — its early resolutions called for a plebiscite that was never held." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How to responsibly report on the Falkland Islands / Islas Malvinas dispute (real-world / applied case)</h3>
      <div className="prose-p">
      The Falkland Islands (called Islas Malvinas by Argentina) are administered by the United Kingdom as a British Overseas Territory with its own local government, a status Argentina has disputed since the 19th century and which led to the 1982 Falklands War between the two countries. The UN&apos;s Special Committee on Decolonization lists the territory among its Non-Self-Governing Territories and has repeatedly called on the UK and Argentina to negotiate a resolution, without itself declaring which country holds rightful sovereignty. A 2013 referendum among Falkland Islands residents recorded overwhelming support for remaining a British Overseas Territory, a result the UK cites as evidence of local self-determination and Argentina does not recognize as resolving its sovereignty claim. The accurate, neutral way to state this: the UK administers the islands, Argentina disputes that sovereignty and refers to them as the Islas Malvinas, the UN has called for negotiation without ruling on sovereignty, and residents voted strongly to remain British — all of which can be reported as fact without a reference source declaring which government is &quot;right.&quot;
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Three separate questions for reading any disputed region"
        type="detail"
        svgSrc="/diagrams/geography-world-facts-territories-dependencies-and-disputed-regions-framework.svg"
        altText="A three-column diagram labeled 'Who administers it day to day (de facto control)', 'Who else claims it (competing sovereignty claims)', and 'What have neutral bodies like the UN said (resolutions, referenda, mediation status)', each column illustrated with a simplified icon, showing how these three separate questions combine to form a complete, neutral picture of any disputed territory without declaring a single answer."
      />
      <p>
      Most confusion about disputed regions comes from collapsing these three separate questions into one. A government administering a territory doesn&apos;t automatically settle who holds recognized sovereignty over it; a claim being disputed doesn&apos;t mean administration is unclear; and a UN statement calling for negotiation is not the same as a UN ruling on ownership. Keeping the three questions separate is what allows a factual, source-backed answer even when the underlying dispute itself remains unresolved.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming whichever country currently administers a disputed territory automatically holds settled, universally recognized sovereignty over it.", fix: "De facto control and internationally recognized sovereignty are separate facts — a territory can be actively administered by one government while its sovereignty remains formally disputed by another, as with Kashmir and the Falklands/Malvinas." },
          { mistake: "Treating 'territory,' 'dependency,' and 'disputed region' as interchangeable terms.", fix: "A territory or dependency (like Greenland or Puerto Rico) has an uncontested governing country even if its degree of self-rule varies; a disputed region (like Kashmir) has sovereignty actively contested by two or more parties — they're different categories." },
          { mistake: "Declaring a personal or editorial opinion on which side is 'right' in an active sovereignty dispute.", fix: "Report the same facts a neutral source like the UN would: who administers it, who else claims it, and what relevant resolutions or referenda exist — state the facts, cite the authority, and let readers draw their own conclusions." },
        ]}
      />
      <MisconceptionCallout
        myth="A territory's status is always clearly settled — it's either fully part of a country or it's fully independent, with nothing in between."
        reality={<p>In reality, self-governance sits on a wide spectrum. French Guiana is fully legally integrated into France; Greenland runs most of its own domestic affairs while Denmark retains foreign policy and defense; Puerto Rico&apos;s residents are U.S. citizens who cannot vote in U.S. presidential elections; and the UN&apos;s own Non-Self-Governing Territories list currently includes 17 places whose long-term status remains formally unresolved. Sovereignty disputes add yet another layer entirely, where even the basic question of &quot;whose territory is this&quot; doesn&apos;t have one universally agreed answer. Treating every territory as either fully sovereign or fully absorbed misses most of the real cases on the map.</p>}
      />

      <QuickCheck
        question="Which of these best reflects how self-governance actually works across the world's territories and dependencies?"
        options={[
          { text: "Every territory is either a fully independent country or a fully absorbed, ordinary part of another country, with no middle ground", correct: false, explanation: "Real cases fall across a wide spectrum — French Guiana is fully integrated into France, Greenland runs its own domestic affairs under Danish foreign policy, and Puerto Rico's residents are U.S. citizens without full voting representation, among many other distinct arrangements." },
          { text: "Self-governance exists on a spectrum, with different territories holding very different degrees of local control even while remaining under another country's sovereignty", correct: true, explanation: "Correct. The real range runs from full legal integration (French Guiana) to broad domestic self-rule (Greenland) to more limited territorial status (Puerto Rico) to UN-tracked Non-Self-Governing Territories with unresolved long-term status — there's no single template." },
          { text: "Only disputed regions have varying degrees of self-governance; ordinary dependencies are always identical to each other", correct: false, explanation: "Even uncontested dependencies vary enormously in their degree of self-rule — Greenland's broad domestic autonomy looks very different from French Guiana's full legal integration into France, and neither is a disputed region." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Look up the UN's current list of 17 Non-Self-Governing Territories and note how many you can locate on a map without checking first — most people know fewer than they expect.",
          "Next time a disputed region comes up in the news, try separating the three questions covered here — de facto control, competing claims, and what a neutral body like the UN has said — before forming a view.",
          "Compare Greenland's, Puerto Rico's, and French Guiana's degrees of self-governance side by side to see how differently 'dependency' status can actually work in practice.",
          "Read the entry on the United Nations & Global Political Bodies to understand the specific UN mechanisms, like the Special Committee on Decolonization, that formally track territories like these.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between a territory, a dependency, and a disputed region?", answer: "A territory or dependency is administered by another sovereign country with a settled (even if not fully independent) status, like Greenland under Denmark or Puerto Rico under the United States. A disputed region has its sovereignty actively contested by two or more parties without full international agreement, like Kashmir or the Falklands/Islas Malvinas." },
          { question: "How many Non-Self-Governing Territories does the UN currently list?", answer: "17, as tracked by the UN's Special Committee on Decolonization — a list that includes Western Sahara, the Falkland Islands (Islas Malvinas), Gibraltar, and other territories whose people have not yet attained a full measure of self-government under the UN Charter's principle of self-determination." },
          { question: "Is Puerto Rico a country?", answer: "No. Puerto Rico is an unincorporated territory of the United States. Its residents are U.S. citizens but cannot vote in U.S. presidential elections and lack voting representation in Congress; its long-term political status (statehood, independence, or continued territorial status) has been the subject of multiple non-binding local referendums." },
          { question: "Who controls Kashmir?", answer: "Kashmir is divided by a militarized Line of Control: India administers the largest share, Pakistan administers a separate portion, and China administers a smaller area (Aksai Chin). All three governments maintain competing sovereignty claims, and a UN-called-for plebiscite on the territory's status from 1948 was never held." },
          { question: "Does the UN decide who owns disputed territories?", answer: "Not directly in most cases. UN bodies like the Security Council and the Special Committee on Decolonization can pass resolutions calling for negotiation, self-determination, or a referendum, and the International Court of Justice can rule on specific legal questions when parties bring a case to it — but many active sovereignty disputes remain formally unresolved by any single binding international ruling." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
