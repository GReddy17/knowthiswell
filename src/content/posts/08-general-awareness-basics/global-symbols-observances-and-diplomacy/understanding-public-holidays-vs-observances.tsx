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
  title: "Understanding Public Holidays vs Observances",
  category: "general-awareness-basics",
  order: 35,
  subtopic: "global-symbols-observances-and-diplomacy",
  tags: ["public holidays", "observances", "civic literacy", "national holidays", "international days"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A public holiday legally closes government offices, banks, and often businesses; an observance is a designated day of recognition that carries no such legal closure requirement at all.",
  summary: "A public holiday is a legally mandated non-working day, typically set by national or regional government statute and enforced through labor and banking law, while an observance is simply an officially designated day of recognition with no legal requirement to close anything.",
  sources: [
    { label: "United Nations — International Days", url: "https://www.un.org/en/observances/list-days-weeks" },
    { label: "U.S. Office of Personnel Management — Federal Holidays", url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" },
    { label: "Encyclopaedia Britannica — Holiday", url: "https://www.britannica.com/topic/holiday" },
  ],
  seeAlso: [
    "general-awareness-basics/international-days-and-their-origins-un-designated-days",
    "general-awareness-basics/national-symbols-explained-flag-anthem-emblem-general-framework",
  ],
  glossary: [
    {"term":"Public holiday","definition":"A day designated by government statute on which government offices, and often banks and many private businesses, are legally closed or operate under special rules (e.g. mandatory paid leave)."},
    {"term":"Observance","definition":"A day officially designated to recognize an issue, group, or event, carrying no legal requirement that any institution close or alter its operations."},
    {"term":"Bank holiday","definition":"A term (especially common in the UK and Commonwealth countries) for a public holiday specifically defined by its effect on banking and financial institution operating hours."},
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
      "A public holiday has a specific legal effect — it closes government offices and typically triggers labor-law provisions like paid leave or holiday pay — while an observance carries no such legal requirement.",
      "Whether a given day is a 'public holiday' often varies by jurisdiction even within one country, since many public holidays are set at the state, provincial, or local level rather than nationally.",
      "Most UN international days are observances, not public holidays — they're designed to draw attention to an issue, not to close businesses or government offices.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A <TermLink href="/general-awareness-basics/understanding-public-holidays-vs-observances">public holiday</TermLink> is a day that&apos;s legally recognized as a non-working day — government offices close, and depending on the country, employees are often entitled to paid time off or extra holiday pay if they do work. An <TermLink href="/general-awareness-basics/understanding-public-holidays-vs-observances">observance</TermLink>, on the other hand, is just a designated day meant to draw attention to something — it doesn&apos;t close anything or change anyone&apos;s work schedule. World Water Day is an observance; Independence Day (in most countries that celebrate one) is typically a public holiday.</div>}
      detailed={<div className="prose-p">The legal mechanism separating the two categories matters more than the label attached to the day. A public holiday is created by an act of government — a statute, executive order, or in some countries a royal proclamation — that specifically triggers labor law provisions (mandatory paid leave, holiday pay multipliers for those who must work) and institutional closures (courts, government offices, often banking systems via a <TermLink href="/general-awareness-basics/understanding-public-holidays-vs-observances">bank holiday</TermLink> designation). An observance has no such statutory trigger; it exists purely as a designation of recognition, whether created by a UN resolution, a national proclamation, or even a private organization. Some observances do eventually get &quot;upgraded&quot; to public holiday status through a separate legislative act — but that requires its own distinct law, not just years of informal recognition.</div>}
      />
      <FootnoteAside>In federal countries like the United States, there is technically no single nationwide public holiday that legally closes every business — federal holidays only bind federal government offices directly; states, and by extension most private employers, set their own holiday schedules, which is why bank and school closures can vary by state even on widely-observed dates.</FootnoteAside>

      <p>
      This distinction matters practically: knowing whether a date is a legally binding public holiday or just a recognized observance tells you whether to expect government offices and banks to actually be closed, or whether it&apos;s simply a day when an issue gets extra media attention.
      </p>

      <QuickCheck
      question="World Water Day (March 22) is a UN-designated day. Does it legally close government offices or banks?"
      options={[
      { text: "Yes — all UN-designated days automatically function as public holidays worldwide", correct: false, explanation: "UN designation alone creates an observance, not a public holiday. No UN resolution has the legal authority to close a member country's government offices or banks — that requires each country's own domestic law." },
      { text: "No — World Water Day is an observance, not a public holiday, so it carries no legal requirement for any government office, bank, or business to close", correct: true, explanation: "Correct. Most UN international days, including World Water Day, are observances designed to draw attention to an issue — they have no statutory closure effect unless a country separately chooses to also make that date a public holiday." },
      { text: "It depends only on whether the UN classifies the day as 'major' or 'minor'", correct: false, explanation: "The UN doesn't use a major/minor classification that determines legal closure status — whether any institution closes is entirely a matter of each country's own separate domestic law, unrelated to how the UN categorizes the day." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A clear public holiday (baseline case)</h3>
      <div className="prose-p">
      In the United States, Thanksgiving (the fourth Thursday of November) is a federal public holiday established by an act of Congress in 1941 — federal offices close, and most private employers voluntarily follow suit even though they aren&apos;t legally required to for non-federal employees, since it&apos;s become a near-universal cultural norm layered on top of the legal designation.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A widely-known observance that is NOT a public holiday (edge case / variation)</h3>
      <div className="prose-p">
      Earth Day (April 22) is one of the most widely recognized environmental observances in the world, marked by events, media coverage, and school programs in dozens of countries — but it is not a public holiday anywhere; it has no legal closure effect, no mandated paid leave, and government offices operate normally. Its wide recognition comes from decades of grassroots and educational adoption, not from any statute requiring closures.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: An observance day that later became a legal public holiday (real-world / applied case)</h3>
      <div className="prose-p">
      Juneteenth (June 19) was observed informally and at the state level in the US for well over a century — Texas made it a state holiday in 1980 — before Congress passed the Juneteenth National Independence Day Act in 2021, converting it into an official federal public holiday. This shows the two categories aren&apos;t permanently fixed: an observance can transition into a legally binding public holiday, but only through a separate, specific legislative act, not through informal popularity alone.
      </div>

      <QuickCheck
      question="Juneteenth was widely observed for decades before becoming a US federal public holiday in 2021. What actually changed its legal status?"
      options={[
      { text: "Enough people had observed it informally for long enough that it automatically became a federal holiday by custom", correct: false, explanation: "Informal, widespread observance alone doesn't create a legal public holiday — no matter how long or how widely a day is recognized, it requires a specific act of government to become legally binding." },
      { text: "A specific act of Congress — the Juneteenth National Independence Day Act (2021) — formally converted it from an observance into a legally recognized federal public holiday", correct: true, explanation: "Correct. It took a distinct legislative act to change Juneteenth's legal status, even after more than a century of informal and state-level observance." },
      { text: "The United Nations reclassified it as an international public holiday", correct: false, explanation: "The UN has no authority to create or reclassify any country's domestic public holidays — Juneteenth's change in status came entirely from US federal legislation." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Public holiday vs observance: what each legally triggers"
      type="comparison"
      svgSrc="/diagrams/general-awareness-basics-understanding-public-holidays-vs-observances-comparison.svg"
      altText="A two-column comparison chart. Left column, 'Public Holiday': created by statute, triggers office/bank closures, triggers paid-leave law. Right column, 'Observance': created by resolution or proclamation, no closure requirement, no paid-leave trigger."
      />
      <p>
      The visual difference is really a legal-mechanism difference: a public holiday is defined by what it forces institutions to do, while an observance is defined only by what it asks people to pay attention to.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a widely-recognized observance (like Earth Day) must also be a public holiday somewhere.", fix: "Check whether a specific statute grants the day legal closure or paid-leave status — wide recognition and legal holiday status are separate things." },
      { mistake: "Assuming a country's public holidays are uniform nationwide.", fix: "In federal systems especially, check whether a holiday is set at the national, state/provincial, or local level, since coverage can vary." },
      { mistake: "Assuming UN-designated international days automatically function as public holidays anywhere in the world.", fix: "Remember UN days are almost always observances by default — a country would need to pass its own separate law to also make that date a public holiday." },
      ]}
      />
      <MisconceptionCallout
      myth="If a day is well-known and widely marked with events and media coverage, it must legally be a public holiday somewhere."
      reality={<p>Public visibility and legal holiday status are entirely separate. Earth Day, World Water Day, and many other globally recognized observances have no legal closure effect anywhere — their prominence comes from sustained cultural, educational, and media attention, not from any statute mandating institutional closures.</p>}
      />

      <QuickCheck
      question="Why might a day be closed for government offices in one US state but not another, even though it's widely called a 'national' observance?"
      options={[
      { text: "Because US federal holidays automatically bind every state and private employer identically", correct: false, explanation: "Federal holidays only directly bind federal government offices — states set their own separate holiday schedules, which is exactly why coverage can differ from state to state." },
      { text: "Because in a federal system, many holidays are set at the state or local level rather than nationally, so legal closure status can genuinely vary by jurisdiction", correct: true, explanation: "Correct. Federal recognition doesn't automatically create a uniform nationwide closure requirement — states and localities often set their own holiday calendars independently." },
      { text: "Because 'national observance' always means the day has no legal effect anywhere, by definition", correct: false, explanation: "Some nationally-recognized observances do carry legal effect in specific states or at the federal level — the variation described here is about which jurisdiction's law applies, not a blanket rule that national observances never have legal force." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Before assuming an office or bank will be closed on a given date, check whether it's actually a legally designated public holiday in your specific jurisdiction.",
      "When you encounter an 'international day,' check whether it's a UN observance (no legal closure effect) or has separately been adopted as a public holiday somewhere.",
      "Notice which level of government (national, state/provincial, local) actually sets a given holiday in your country.",
      "Look up the specific statute behind a public holiday you observe, to understand when and why it was legally established.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What's the difference between a public holiday and an observance?", answer: "A public holiday is created by statute and triggers legal effects like office closures and paid leave; an observance is a designated day of recognition with no such legal requirement — offices and businesses operate normally." },
      { question: "Are UN international days public holidays?", answer: "Almost always no. Most UN-designated days are observances meant to draw attention to an issue, with no legal authority to close government offices, banks, or businesses in any member country." },
      { question: "Can an observance become a public holiday?", answer: "Yes, but only through a separate, specific act of government — as happened with Juneteenth in the US in 2021 — not simply through years of informal or widespread recognition." },
      { question: "Do all public holidays apply nationwide?", answer: "Not necessarily. In federal countries, many holidays are set at the state, provincial, or local level, so a day can be a legal public holiday in one region and an ordinary working day in another." },
      { question: "What is a 'bank holiday'?", answer: "A term, especially common in the UK and Commonwealth countries, for a public holiday specifically defined by its effect on banking and financial institution hours — functionally similar to what's called a 'federal holiday' or 'national holiday' elsewhere." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
