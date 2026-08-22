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
  title: "What Local Government Actually Does",
  category: "general-awareness-basics",
  order: 20,
  subtopic: "civic-literacy-and-rights",
  tags: ["local government", "municipal services", "civics", "public services", "government structure"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "National government sets broad policy, but the services people interact with daily — trash collection, local roads, permits — almost always trace back to local government instead.",
  summary: "Local government (cities, towns, counties, and similar municipal bodies) is typically responsible for the day-to-day public services residents interact with most directly, such as waste collection, local roads, water and sewer systems, zoning, and local law enforcement, funded largely through local taxes and often supplemented by higher-level government funding.",
  sources: [
    { label: "National League of Cities — What Cities Do", url: "https://www.nlc.org/" },
    { label: "Encyclopaedia Britannica — Local Government", url: "https://www.britannica.com/topic/local-government" },
  ],
  seeAlso: [
    "general-awareness-basics/federal-vs-unitary-government-systems",
    "general-awareness-basics/how-taxes-fund-public-services-conceptual-overview",
    "general-awareness-basics/understanding-public-vs-private-sector",
  ],
  glossary: [
    {"term":"Local government","definition":"The level of government closest to residents — cities, towns, counties, or similar municipal bodies — typically responsible for day-to-day public services within its jurisdiction."},
    {"term":"Zoning","definition":"Local government rules dividing land into designated categories (residential, commercial, industrial, and so on) that determine what can be built or operated in a given area."},
    {"term":"Municipal bond","definition":"A debt instrument a local government issues to raise money for a public project, such as building a school or upgrading water infrastructure, repaid over time from future revenue."},
    {"term":"Intergovernmental transfer","definition":"Funding passed down from a higher level of government (national or regional) to local governments, supplementing what local taxes alone raise."},
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
      "Local government is typically responsible for the public services residents interact with most directly and most often — waste collection, local roads, water and sewer, zoning, and local policing.",
      "Local government is funded mainly through local taxes (commonly property tax), often supplemented by intergovernmental transfers from higher levels of government.",
      "Zoning — local rules on what can be built where — is one of local government's most consequential and least-noticed powers, directly shaping how a community physically develops over time.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p"><TermLink href="/general-awareness-basics/what-local-government-actually-does">Local government</TermLink> is the level of government closest to where people actually live — a city, town, or county. While national government handles things like foreign policy and national defense, local government usually handles the practical services residents notice daily: trash pickup, local road repair, water service, parks, and permits for things like building a home addition.</div>}
      detailed={<div className="prose-p">Local government&apos;s responsibilities typically include public works (roads, water, sewer), public safety (local police and fire services), <TermLink href="/general-awareness-basics/what-local-government-actually-does">zoning</TermLink> and land-use permitting, parks and recreation, and often public schools through a related school district body. Funding usually comes primarily from local property taxes, sometimes supplemented by local sales taxes, fees, and <TermLink href="/general-awareness-basics/what-local-government-actually-does">intergovernmental transfers</TermLink> from national or regional governments. For larger capital projects — building a new school or upgrading a water treatment plant — local governments frequently issue a <TermLink href="/general-awareness-basics/what-local-government-actually-does">municipal bond</TermLink>, borrowing money upfront and repaying it over years from future tax revenue, rather than funding the entire project from a single year&apos;s budget.</div>}
      />
      <FootnoteAside>Zoning rules, first widely adopted in the early 20th century, remain one of the most powerful tools local governments hold — they can determine whether a given neighborhood can ever contain new housing, businesses, or industrial activity, often for decades at a time.</FootnoteAside>

      <p>
      The reason local government gets comparatively little public attention despite handling so many day-to-day services is that its work is often visible only when something goes wrong — a pothole, a missed trash pickup — rather than celebrated when it functions smoothly.
      </p>

      <QuickCheck
      question="Which level of government is typically responsible for local road repair and trash collection?"
      options={[
      { text: "National government, as part of its broad policy responsibilities", correct: false, explanation: "National government generally focuses on broader national-scale matters — day-to-day services like local road repair and trash collection are typically handled by local government." },
      { text: "Local government — cities, towns, or counties typically handle these direct, day-to-day public services", correct: true, explanation: "Correct. Local government is generally structured specifically to handle the services residents interact with most directly and frequently." },
      { text: "These services are typically handled by private companies with no government involvement at all", correct: false, explanation: "While some services may be contracted to private companies, they're typically still overseen and funded by local government, not operating independently of it." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: How a local water system gets funded (baseline case)</h3>
      <div className="prose-p">
      A city&apos;s water department is funded through a combination of resident water bills (usage-based fees) and the city&apos;s general property-tax revenue. When aging pipes need replacing, the city may issue a municipal bond to cover the large upfront cost, then repay bondholders over 20-30 years using future water-bill revenue — spreading a large one-time cost across many years rather than requiring residents to cover it all in a single year&apos;s bills.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Zoning shaping what gets built (edge case / variation)</h3>
      <div className="prose-p">
      A developer wants to build an apartment building on a specific lot, but the lot is zoned exclusively for single-family homes. Before construction can proceed, the developer must apply for a zoning variance or rezoning from the local government — a process that can take months and isn&apos;t guaranteed to succeed. This single local-government decision, not any national policy, determines whether that specific lot can ever legally hold multi-family housing.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A local government relying on intergovernmental transfers (real-world / applied case)</h3>
      <div className="prose-p">
      A smaller town with a limited local tax base can&apos;t fully fund its public school system from local property taxes alone. It receives a substantial intergovernmental transfer from its regional or national government to help cover the gap — meaning the town&apos;s actual service level depends not just on its own local tax revenue but on funding decisions made at a higher level of government entirely.
      </div>

      <QuickCheck
      question="Do all local governments fund their public services entirely from their own local tax revenue, with no outside funding?"
      options={[
      { text: "Yes, local governments are always fully self-funded", correct: false, explanation: "Many local governments, especially smaller ones with a limited tax base, rely significantly on intergovernmental transfers from higher levels of government to fund services fully." },
      { text: "No — many local governments supplement local tax revenue with intergovernmental transfers from national or regional governments", correct: true, explanation: "Correct. This is especially common for smaller localities whose local tax base alone wouldn't cover the full cost of expected service levels, like public schools." },
      { text: "No — local governments are prohibited from receiving any outside funding by law", correct: false, explanation: "There's no such general prohibition — intergovernmental transfers are a normal, common part of how many local governments are funded." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="What local government typically covers"
      type="detail"
      svgSrc="/diagrams/general-awareness-basics-what-local-government-actually-does-service-map.svg"
      altText="A diagram with a central box labeled Local Government surrounded by service boxes: Public Works (roads, water, sewer), Public Safety (police, fire), Zoning and Permitting, Parks and Recreation, and Public Schools (via school district), each connected back to the central Local Government box."
      />
      <p>
      Laid out this way, it&apos;s clear how much of a resident&apos;s direct day-to-day interaction with &quot;government&quot; is actually interaction with this one local layer, not the national government most political news coverage focuses on.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming day-to-day service problems (potholes, water issues) are national government's responsibility to fix.", fix: "Check whether the service falls under local government's typical scope first — most direct daily services are locally, not nationally, administered." },
      { mistake: "Underestimating zoning's real impact on a community.", fix: "Recognize zoning decisions directly shape what can be built where, often for decades — it's one of local government's most consequential, least-visible powers." },
      { mistake: "Assuming local government is entirely self-funded.", fix: "Check for intergovernmental transfers — many local governments, especially smaller ones, depend on funding from higher government levels to cover full service costs." },
      ]}
      />
      <MisconceptionCallout
      myth="Most public services people rely on daily come from national government policy."
      reality={<p>The services residents interact with most frequently and directly — road maintenance, trash collection, water service, local permits, local policing — are typically administered by local government, not national government. National government generally focuses on broader national-scale policy areas, while local government handles the operational, day-to-day delivery of the services people actually notice.</p>}
      />

      <QuickCheck
      question="Why might a local government issue a municipal bond rather than paying for a large infrastructure project entirely out of a single year's tax revenue?"
      options={[
      { text: "Municipal bonds are required by law for any government spending", correct: false, explanation: "Bonds aren't legally required for all spending — they're a financing choice used specifically for large capital projects, not a universal legal requirement." },
      { text: "To spread a large one-time cost over many years, repaying it gradually from future revenue rather than requiring residents to cover the full cost in one year's taxes or bills", correct: true, explanation: "Correct. This lets a local government fund a major project immediately (like new water infrastructure) while distributing the actual financial burden across the years the project will benefit residents." },
      { text: "Because local governments are not permitted to use tax revenue for infrastructure at all", correct: false, explanation: "Local governments regularly do use tax revenue for infrastructure — bonds are a supplementary financing tool for large projects, not a workaround for a prohibition that doesn't exist." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Next time you notice a local service issue (roads, trash, water), check your city or county's official site — most publish exactly which department handles which service.",
      "Look up your local government's current budget breakdown to see how much comes from local taxes versus intergovernmental transfers.",
      "If you're curious about zoning, check your address's current zoning designation on your local government's public zoning map.",
      "Attend or watch a local council meeting at least once — it's usually where the decisions most directly affecting your daily surroundings actually get made.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What services does local government typically provide?", answer: "Public works like roads and water/sewer, public safety (local police and fire), zoning and permitting, parks and recreation, and often public schools through a related school district." },
      { question: "How is local government funded?", answer: "Mainly through local taxes (commonly property tax), often supplemented by local fees and intergovernmental transfers from higher levels of government." },
      { question: "What is zoning?", answer: "Local government rules dividing land into designated categories (residential, commercial, industrial, and more) that determine what can legally be built or operated in a given area." },
      { question: "Why do some local governments rely on funding from national or regional government?", answer: "Smaller localities with a limited local tax base often can't fully fund expected service levels (like public schools) from local taxes alone, so they receive supplemental intergovernmental transfers." },
      { question: "What is a municipal bond?", answer: "A debt instrument a local government issues to fund a large capital project upfront, repaying it gradually over time from future tax or fee revenue rather than a single year's budget." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
