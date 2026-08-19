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
  title: "Thanksgiving Explained",
  category: "festivals-culture",
  order: 16,
  subtopic: "major-world-religious-festivals",
  tags: ["thanksgiving", "american festivals", "harvest festivals", "wampanoag"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Thanksgiving is a US harvest holiday traced to an 1621 Plymouth gathering — a more complicated history than the simplified grade-school 'First Thanksgiving' story.",
  summary: "Thanksgiving is a national holiday in the United States (and, separately, Canada) rooted in a documented 1621 harvest gathering between Plymouth colonists and the Wampanoag, whose full history is more complex, and for the Wampanoag more difficult, than the simplified version often taught in schools.",
  sources: [
    { label: "Encyclopaedia Britannica — Thanksgiving Day", url: "https://www.britannica.com/topic/Thanksgiving-Day" },
    { label: "Plimoth Patuxet Museums — Thanksgiving History", url: "https://plimoth.org/for-students/homework-help/thanksgiving-history" },
    { label: "Smithsonian National Museum of the American Indian — American Indian Perspectives on Thanksgiving", url: "https://americanindian.si.edu/nk360/informational/thanksgiving" },
    { label: "Library of Congress — Thanksgiving Proclamations", url: "https://www.loc.gov" },
  ],
  seeAlso: [
    "festivals-culture/christmas-in-india-and-globally",
    "festivals-culture/regional-harvest-festivals-of-india",
    "festivals-culture/chinese-new-year-explained",
  ],
  glossary: [
    { term: "Wampanoag", definition: "A Native American people whose homeland includes present-day southeastern Massachusetts and Rhode Island; the Wampanoag were present at the documented 1621 Plymouth harvest gathering often cited as the 'First Thanksgiving.'" },
    { term: "National Day of Mourning", definition: "An annual gathering held by Native Americans and allies in Plymouth, Massachusetts, on the same day as the US Thanksgiving holiday, to reflect on the colonization of the Americas and its impact on Native peoples." },
    { term: "Sarah Josepha Hale", definition: "The American writer and editor whose decades-long campaign is widely credited with persuading President Abraham Lincoln to establish Thanksgiving as an annual national holiday in 1863." },
  ],
  author: {
    slug: "sara-reed-m-j",
    name: "Sara Reed M J",
    credentialLine: "Contributing Editor, KnowThisWell",
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
          "Thanksgiving in the United States is a national holiday held on the fourth Thursday of November, commonly traced to a documented 1621 harvest gathering between Plymouth colonists and the Wampanoag.",
          "The popular 'First Thanksgiving' story taught in many US schools simplifies a more complicated history — the 1621 gathering was a specific, limited event, and it was followed by decades of conflict, disease, and land loss for the Wampanoag and other Native peoples.",
          "Thanksgiving became a fixed annual national holiday only in 1863, more than two centuries after the 1621 gathering, through a campaign led by writer Sarah Josepha Hale and a proclamation by President Abraham Lincoln during the Civil War.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Thanksgiving is a US national holiday held on the fourth Thursday of November, centered on a family meal, gratitude, and a story often traced to a 1621 harvest gathering between English colonists at Plymouth and the <TermLink href="/festivals-culture/thanksgiving-explained">Wampanoag</TermLink>. The holiday as an annual, fixed national observance dates to 1863, not 1621 — it was established during the Civil War, more than two centuries after the event it&apos;s often linked to. Canada observes its own, separate Thanksgiving holiday in October.</div>}
        detailed={<div className="prose-p">The event most commonly cited as the &quot;First Thanksgiving&quot; is a documented 1621 harvest celebration at Plymouth Colony, described in a surviving letter by colonist Edward Winslow, in which roughly 90 Wampanoag men, led by the leader Ousamequin (also known as Massasoit), joined the Plymouth colonists for several days, including shared meals. Historians and Wampanoag sources emphasize that this was not a recurring or formally named &quot;Thanksgiving&quot; at the time, and that it represented a specific, temporary diplomatic and practical relationship — the Wampanoag had their own established tradition of communal thanksgiving observances tied to their agricultural calendar well before European contact, and their presence at the 1621 event reflected a political alliance made partly out of the Wampanoag&apos;s own strategic position (having recently suffered a major epidemic that killed a large share of their population, weakening their standing relative to rival groups). This alliance did not lead to lasting peace: within a few decades, relations between English colonists and the Wampanoag and neighboring Native nations deteriorated sharply, culminating in King Philip&apos;s War (1675-1676) — one of the deadliest conflicts, proportionally, in American history — after which Wampanoag communities faced significant loss of life, land, and autonomy. The holiday as a fixed, annual national observance was established only in 1863, when President Abraham Lincoln, following a decades-long letter-writing campaign by magazine editor <TermLink href="/festivals-culture/thanksgiving-explained">Sarah Josepha Hale</TermLink>, proclaimed a national day of thanksgiving during the Civil War — a move understood by historians partly as an effort to foster national unity. Many Native American communities and allies observe the same day as a <TermLink href="/festivals-culture/thanksgiving-explained">National Day of Mourning</TermLink>, a tradition begun in Plymouth in 1970, to reflect on the colonization of the Americas and its consequences for Native peoples — a perspective that sits alongside, rather than simply opposing, the holiday&apos;s more familiar themes of gratitude and family gathering.</div>}
      />
      <FootnoteAside>The Wampanoag maintained their own established tradition of communal thanksgiving ceremonies tied to their agricultural and seasonal calendar long before the 1621 Plymouth gathering — the idea of a harvest thanksgiving observance did not originate with English colonists.</FootnoteAside>

      <QuickCheck
        question="What does the documented 1621 Plymouth gathering actually represent, according to historians and Wampanoag sources?"
        options={[
          { text: "A simple, friendly meal with no further historical complications afterward", correct: false, explanation: "This is the simplified version often taught, but it omits what followed — within decades, relations between the colonists and the Wampanoag and neighboring nations deteriorated into major conflict, including King Philip's War." },
          { text: "A specific, limited diplomatic and practical gathering, made in a context shaped by a recent epidemic that had weakened the Wampanoag's position, followed by a relationship that broke down within a few decades", correct: true, explanation: "Correct. Historians and Wampanoag sources describe a real but specific and temporary event, not a template for lasting peaceful relations — later decades saw serious conflict and significant loss for the Wampanoag." },
          { text: "An event that has no documentary evidence and is likely entirely fictional", correct: false, explanation: "The 1621 gathering is documented in a surviving letter by colonist Edward Winslow; the issue with the popular story isn't that the event didn't happen, but that its context and aftermath are usually left out." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A typical modern US Thanksgiving (baseline case)</h3>
      <div className="prose-p">Families gather on the fourth Thursday of November for a meal typically centered on roast turkey, alongside dishes like stuffing, mashed potatoes, cranberry sauce, and pumpkin pie. The holiday has no fixed religious content today and is observed broadly across religious and cultural backgrounds in the US as a secular occasion focused on gratitude, family, and (particularly in recent decades) the start of the holiday shopping season the following day (Black Friday).</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The National Day of Mourning — a documented alternative observance</h3>
      <div className="prose-p">Since 1970, Native Americans and allies have gathered on Cole&apos;s Hill in Plymouth, Massachusetts, on Thanksgiving Day for the National Day of Mourning, a public event organized by the United American Indians of New England to mark the holiday as an occasion for reflecting on the colonization of the Americas, the loss of Native land and life that followed the colonial period, and the ongoing struggles of Native communities. This is not a fringe or recent reaction — it has been held annually for over five decades and represents a documented, organized alternative perspective on the same date, rather than a rejection of gratitude or family gathering as concepts.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Canada&apos;s separate Thanksgiving holiday (real-world / applied case)</h3>
      <div className="prose-p">Canada observes its own Thanksgiving on the second Monday of October, with a history and origin distinct from the US holiday — Canadian Thanksgiving is generally traced to a mix of early European explorers&apos; harvest and safe-voyage observances and later harvest-festival traditions, and it became an official fixed holiday in 1957. The shared name and general theme (harvest, gratitude, family meal) can obscure that these are two separate national holidays with different histories and different dates, not the same holiday celebrated a month apart.</div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating the 1621 Plymouth gathering as the direct, unbroken origin of the modern annual holiday.", fix: "The modern fixed annual holiday dates to an 1863 proclamation by President Lincoln, over two centuries after 1621 — the two are historically connected in popular memory but are not the same continuous tradition." },
          { mistake: "Assuming the 1621 gathering led to lasting peaceful relations between colonists and the Wampanoag.", fix: "Relations deteriorated within decades, culminating in King Philip's War (1675-1676), after which Wampanoag communities faced major loss of life, land, and autonomy." },
          { mistake: "Assuming US and Canadian Thanksgiving are the same holiday celebrated on different dates.", fix: "They are two separate national holidays with distinct historical origins that happen to share a name and general harvest-gratitude theme." },
        ]}
      />
      <MisconceptionCallout
        myth="The 'First Thanksgiving' was a simple, friendly, harmonious meal, with no further complicated history afterward."
        reality={<p>The documented 1621 Plymouth gathering did happen, involving Wampanoag people led by Ousamequin and English colonists sharing meals over several days. But historians and Wampanoag sources emphasize that it was a specific, limited event shaped by the Wampanoag&apos;s own strategic circumstances (including a recent epidemic), not a template for ongoing friendly relations. Within a few decades, relations broke down into serious conflict, including King Philip&apos;s War, after which Wampanoag and other Native communities suffered major losses of life, land, and autonomy — a history that the simplified grade-school version of the story generally omits, and that the National Day of Mourning, observed annually since 1970, was established to address.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you hear the 'First Thanksgiving' story, notice whether it includes what happened in the decades afterward — that context is often left out of the simplified version.",
          "If you're discussing Thanksgiving's history, distinguish between the documented 1621 event and the 1863 establishment of the fixed annual national holiday — they're two different historical moments.",
          "Look up the National Day of Mourning if you want to understand how many Native Americans and allies mark the same date — it's been held annually in Plymouth since 1970.",
          "If you're comparing US and Canadian Thanksgiving, remember they're separate national holidays with distinct origins, not the same tradition on two dates.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the real history behind Thanksgiving?", answer: "It's commonly traced to a documented 1621 harvest gathering between Plymouth colonists and the Wampanoag, but the fixed annual national holiday wasn't established until 1863, and the simplified 'First Thanksgiving' story often leaves out the conflict and loss the Wampanoag experienced in the decades that followed." },
          { question: "Why do some Native Americans call Thanksgiving a day of mourning?", answer: "Since 1970, Native Americans and allies have held an annual National Day of Mourning in Plymouth, Massachusetts, on Thanksgiving Day, to reflect on the colonization of the Americas and its consequences for Native peoples, alongside the holiday's more familiar themes." },
          { question: "When did Thanksgiving become an official US holiday?", answer: "President Abraham Lincoln proclaimed it a fixed annual national holiday in 1863, following a decades-long campaign by writer and editor Sarah Josepha Hale, more than two centuries after the 1621 event it's often associated with." },
          { question: "Is US Thanksgiving the same as Canadian Thanksgiving?", answer: "No — they are separate national holidays with distinct historical origins that happen to share a name and general theme; the US observes it on the fourth Thursday of November, while Canada observes it on the second Monday of October." },
          { question: "Did the Wampanoag have their own thanksgiving traditions before 1621?", answer: "Yes — the Wampanoag maintained established traditions of communal thanksgiving ceremonies tied to their own agricultural and seasonal calendar well before contact with English colonists." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
