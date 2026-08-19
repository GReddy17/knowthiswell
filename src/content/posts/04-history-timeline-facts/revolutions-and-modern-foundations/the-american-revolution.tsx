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
  title: "The American Revolution",
  category: "history-timeline-facts",
  order: 23,
  subtopic: "revolutions-and-modern-foundations",
  tags: ["american revolution", "declaration of independence", "george washington", "boston tea party", "us history", "1776"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The American Revolution (1765-1783) grew from disputes over representation and self-governance, not taxes alone, and reshaped Atlantic-world politics for decades after.",
  summary: "The American Revolution was the political and military struggle, from roughly 1765 to 1783, in which thirteen British colonies in North America declared independence and, with French support, secured recognition as the independent United States.",
  sources: [
    { label: "U.S. National Archives — Declaration of Independence and Founding Documents", url: "https://www.archives.gov/founding-docs/declaration" },
    { label: "Encyclopaedia Britannica — American Revolution", url: "https://www.britannica.com/event/American-Revolution" },
    { label: "Smithsonian National Museum of American History — The American Revolution", url: "https://americanhistory.si.edu/american-revolution" },
  ],
  seeAlso: [
    "history-timeline-facts/the-scientific-revolution",
    "history-timeline-facts/the-french-revolution",
    "history-timeline-facts/latin-american-independence-movements",
  ],
  glossary: [
    { term: "Natural rights", definition: "Rights (such as life, liberty, and property) held to belong to all people inherently, not granted by government — an Enlightenment concept central to the Declaration of Independence." },
    { term: "Patriot", definition: "A colonist who supported American independence from Britain during the Revolutionary War." },
    { term: "Loyalist", definition: "A colonist who remained loyal to the British Crown and opposed independence, estimated at roughly 15-20% of the colonial population." },
    { term: "Continental Congress", definition: "The body of delegates from the thirteen colonies that governed collective colonial affairs, coordinated the war effort, and adopted the Declaration of Independence in 1776." },
    { term: "Treaty of Paris (1783)", definition: "The agreement that formally ended the Revolutionary War, in which Britain recognized the independence of the United States." },
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
          "The American Revolution grew from a decade of escalating disputes (1765-1775) over taxation and representation, but the Declaration of Independence (1776) lists 27 separate grievances against the king — far more than tax policy alone.",
          "Roughly 15-20% of colonists were Loyalists who opposed independence, meaning the Revolution was a genuine internal conflict among colonists, not a unanimous colonial uprising against Britain.",
          "France's military and financial support, formalized after the American victory at Saratoga in 1777, was decisive to American success — and the debt France took on to fund it later helped push France itself toward the French Revolution.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/history-timeline-facts/the-american-revolution">American Revolution</TermLink> was the process by which thirteen British colonies in North America broke away from Britain and became an independent country. Tensions built for about a decade over British taxes and trade restrictions imposed without colonial representation in Parliament, escalating through protests like the Boston Tea Party (1773) into open warfare starting in 1775. The colonies formally declared independence on July 4, 1776, and with crucial military and financial support from France, defeated British forces, securing recognition of American independence in the Treaty of Paris in 1783.</div>}
        detailed={<div className="prose-p">While taxation disputes (the Stamp Act of 1765, the Townshend Acts of 1767, the Tea Act of 1773) triggered the earliest protests, the Declaration of Independence itself lists a long series of grievances against King George III going well beyond tax policy: dissolving colonial legislatures, obstructing colonial justice systems, keeping standing armies in peacetime without colonial consent, and restricting trade and westward settlement, among others. The war itself (1775-1783) opened with the Battles of Lexington and Concord (April 1775) and turned decisively after the American victory at Saratoga (1777) persuaded France to formally ally with the colonies in 1778, followed later by Spain and the Netherlands entering against Britain as well — turning what began as a colonial rebellion into something closer to a wider international war. Support for independence was never unanimous: an estimated 15-20% of colonists were <TermLink href="/history-timeline-facts/the-american-revolution">Loyalists</TermLink>, some of whom fought alongside British forces or fled to Canada and Britain after the war, and the war&apos;s Southern campaigns (1780-1781) involved brutal fighting between Patriot and Loyalist militias, not just Continental Army units against British regulars. The war effectively ended with the British surrender at Yorktown in October 1781, though the formal Treaty of Paris wasn&apos;t signed until 1783.</div>}
      />
      <FootnoteAside>The Declaration of Independence is dated July 4, 1776, but most delegates didn&apos;t actually sign the engrossed (formally handwritten) copy until August 2, 1776, and a few signed even later. The Continental Congress had voted to approve the text on July 2, which John Adams initially believed would be remembered as the true anniversary of independence.</FootnoteAside>
      <p>
      That gap between the symbolic date and the messier signing timeline is a useful reminder that the Revolution, like most historical turning points, was less a single clean moment than a drawn-out, contested process — which is exactly what the grievances behind it also reflect.
      </p>

      <QuickCheck
        question="Based on the Declaration of Independence's actual list of grievances, what was the American Revolution primarily about?"
        options={[
          { text: "Taxes alone — the colonists' only real complaint was the level of taxation imposed by Britain", correct: false, explanation: "Taxation disputes triggered the earliest protests, but the Declaration lists 27 grievances covering dissolved legislatures, judicial interference, standing armies, and trade restrictions, among others — a much broader set of complaints than tax policy alone." },
          { text: "A broader set of grievances about self-governance, representation, and colonial rights, of which taxation was only one part", correct: true, explanation: "Correct. While \"no taxation without representation\" is the most famous phrase associated with the Revolution, the Declaration of Independence documents a much wider range of grievances about governance and colonial autonomy." },
          { text: "Religious disagreements between the colonies and the Church of England", correct: false, explanation: "Religious tension wasn't the central driver of the Revolution — the core disputes were political and economic, centered on governance, representation, and colonial rights." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The Boston Tea Party and the road to war (baseline case)</h3>
      <div className="prose-p">
      In December 1773, colonists in Boston, protesting the Tea Act (which gave the British East India Company a favorable monopoly on tea sales in the colonies), boarded three ships and dumped 342 chests of tea into Boston Harbor. Britain responded with the Coercive Acts (called the &quot;Intolerable Acts&quot; by colonists) in 1774, closing Boston&apos;s port and restricting Massachusetts self-government — a punitive response that pushed moderate colonists toward supporting more organized resistance, leading directly to the First Continental Congress later that year and, within months, armed conflict at Lexington and Concord in April 1775.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Loyalists — the Revolution was also a civil conflict (variation / exception)</h3>
      <div className="prose-p">
      Not every colonist wanted independence. Historians estimate roughly 15-20% of the colonial population remained Loyalist, supporting continued British rule, for reasons ranging from economic ties to Britain, religious or political conviction, to fear of the instability revolution might bring. Tens of thousands of Loyalists fought in British military units or local militias, and after the war, an estimated 60,000-100,000 Loyalists left for Canada, Britain, or the Caribbean rather than remain in the newly independent United States — a reminder that the Revolution divided communities and families, not just separated colonies from a distant king.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How Revolutionary-era language still shapes political rhetoric today (real-world / applied case)</h3>
      <div className="prose-p">
      Phrases and ideas from the Declaration of Independence — &quot;all men are created equal,&quot; government deriving its &quot;just powers from the consent of the governed,&quot; unalienable rights to &quot;life, liberty, and the pursuit of happiness&quot; — are still directly invoked in political speeches, court arguments, and later reform movements, including the U.S. abolitionist and women&apos;s suffrage movements, which explicitly argued the Declaration&apos;s stated ideals hadn&apos;t yet been extended to everyone. The American Revolution also directly influenced later independence movements, including the French Revolution and Latin American independence movements, both of which drew on similar Enlightenment language about natural rights and self-governance.
      </div>

      <QuickCheck
        question="What happened to many Loyalists after the American Revolution ended?"
        options={[
          { text: "They were all immediately granted full citizenship and integrated without consequence", correct: false, explanation: "Many Loyalists faced significant social and legal consequences after the war, including property confiscation in some states." },
          { text: "Tens of thousands left for Canada, Britain, or the Caribbean rather than remain in the newly independent United States", correct: true, explanation: "Correct. An estimated 60,000-100,000 Loyalists emigrated after the war, reflecting how divisive and personally costly the Revolution was even after fighting ended." },
          { text: "They formed their own separate independent nation within North America", correct: false, explanation: "No separate Loyalist nation was formed within the former thirteen colonies — most Loyalists who left settled in existing British territories like Canada or returned to Britain." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The American Revolution: from Stamp Act to Treaty of Paris"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-the-american-revolution-timeline.svg"
        altText="Horizontal timeline beginning with the Stamp Act in 1765, moving through the Boston Massacre in 1770, the Boston Tea Party in 1773, the Battles of Lexington and Concord in April 1775, the Declaration of Independence in July 1776, the American victory at Saratoga and French alliance in 1777 to 1778, the British surrender at Yorktown in October 1781, and ending with the Treaty of Paris formally recognizing American independence in 1783."
      />
      <p>
      Notice the eleven-year gap between the Stamp Act (1765) and the Declaration of Independence (1776) — the Revolution was a slow escalation of specific disputes, not a spontaneous uprising, and another seven years passed after the Declaration before the war formally ended in 1783.
      </p>

      <EntryCalculator
        title="Years since the Declaration of Independence (1776)"
        fields={[
          { key: "year", label: "Declaration year", defaultValue: 1776 },
        ]}
        resultLabel="Years elapsed"
        formula="yearsSinceYear"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the American Revolution was mainly, or only, about tax rates.", fix: "Taxation disputes triggered early protests, but the Declaration of Independence documents 27 grievances covering governance, judicial interference, and standing armies — a much broader set of complaints." },
          { mistake: "Treating the colonies as unanimously in favor of independence.", fix: "An estimated 15-20% of colonists were Loyalists who opposed independence, and the war involved real conflict between Patriot and Loyalist colonists, not only colonists against distant British forces." },
          { mistake: "Overlooking France's decisive role in American victory.", fix: "French military and financial support, formalized after the American victory at Saratoga in 1777, was critical to the war's outcome — the U.S. didn't win independence through purely domestic effort alone." },
        ]}
      />
      <MisconceptionCallout
        myth={'The American Revolution was primarily about taxes, summarized entirely by "no taxation without representation."'}
        reality={<p>Taxation disputes (the Stamp Act of 1765, the Townshend Acts of 1767, the Tea Act of 1773) were the earliest and most visible flashpoints, but the Declaration of Independence itself lists 27 distinct grievances against King George III, including dissolving colonial legislatures, obstructing colonial court systems, maintaining standing armies without colonial consent, and restricting trade and westward settlement. The Revolution reflected a broader dispute over colonial self-governance and representation, of which taxation was one significant, but not the only, driver.</p>}
      />

      <QuickCheck
        question="According to the Declaration of Independence, which best describes the scope of colonial grievances against King George III?"
        options={[
          { text: "A single grievance, focused entirely on tax rates", correct: false, explanation: "The Declaration lists 27 separate grievances — tax-related disputes are part of the list, but far from the whole of it." },
          { text: "A wide-ranging list of 27 grievances covering governance, judicial interference, military policy, and trade restrictions, in addition to taxation", correct: true, explanation: "Correct. The Declaration's grievances span far beyond taxation, reflecting a broader dispute over colonial self-governance and rights." },
          { text: "Grievances focused only on religious freedom", correct: false, explanation: "Religious freedom wasn't a central grievance in the Declaration — the listed complaints focus on governance, legal, military, and trade issues." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time someone summarizes the American Revolution as purely about taxes, mention the Declaration's other 26 grievances covering governance and judicial interference.",
          "Remember that roughly 15-20% of colonists were Loyalists — the Revolution split communities, not just separated the colonies from Britain.",
          "Notice how often Declaration of Independence language (\"consent of the governed,\" \"unalienable rights\") gets quoted in later reform movements and political speeches.",
          "Read the related entry on the French Revolution to see how France's debt from supporting American independence fed directly into its own financial and political crisis.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "When did the American Revolution start and end?", answer: "Tensions began escalating from 1765 (the Stamp Act), open warfare started in April 1775, independence was declared July 4, 1776, and the war formally ended with the Treaty of Paris in 1783." },
          { question: "What caused the American Revolution?", answer: "A combination of disputes over taxation without representation, restrictions on colonial self-governance, judicial interference, standing armies, and trade restrictions — documented in the Declaration of Independence's list of 27 grievances against King George III." },
          { question: "Was the American Revolution only about taxes?", answer: "No. Taxation disputes triggered early protests, but the Declaration of Independence lists a much broader set of grievances about governance, legal rights, and colonial autonomy, not tax policy alone." },
          { question: "Did all American colonists support independence?", answer: "No. An estimated 15-20% of colonists were Loyalists who supported continued British rule; many fought for the British or later emigrated to Canada, Britain, or the Caribbean after the war." },
          { question: "How important was France to American independence?", answer: "Extremely important. France formally allied with the colonies in 1778 after the American victory at Saratoga, providing crucial military and financial support that was decisive to the eventual American victory at Yorktown in 1781." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
