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
  title: "Major Global Events of the 2000s",
  category: "history-timeline-facts",
  order: 44,
  subtopic: "21st-century-so-far",
  tags: ["2000s history", "global events", "9/11", "indian ocean tsunami", "financial crisis"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The decade's defining global events, from the September 11 attacks to the 2004 Indian Ocean tsunami and the 2008 financial crisis, stated factually with sourced figures.",
  summary: "The 2000s opened with the September 11 attacks and their global security aftermath, were marked mid-decade by the deadly 2004 Indian Ocean tsunami, and closed with the 2008 global financial crisis, alongside a rapid expansion of the internet and mobile technology.",
  sources: [
    { label: "Encyclopaedia Britannica — September 11 attacks", url: "https://www.britannica.com/event/September-11-attacks" },
    { label: "Encyclopaedia Britannica — Indian Ocean tsunami of 2004", url: "https://www.britannica.com/event/Indian-Ocean-tsunami-of-2004" },
    { label: "Encyclopaedia Britannica — Financial crisis of 2008–09", url: "https://www.britannica.com/event/financial-crisis-of-2008-2009" },
  ],
  seeAlso: [
    "history-timeline-facts/9-11-and-its-global-impact-factual-overview",
    "history-timeline-facts/the-rise-of-the-internet-age",
    "history-timeline-facts/major-global-events-of-the-2010s",
  ],
  glossary: [
    { term: "Subprime mortgage", definition: "A home loan extended to a borrower with a weaker credit history, typically at a higher interest rate; a wave of subprime mortgage defaults helped trigger the 2008 financial crisis." },
    { term: "Recession", definition: "A significant, widespread decline in economic activity, typically measured by falling output and rising unemployment, lasting more than a few months." },
    { term: "Megathrust earthquake", definition: "A very large earthquake that occurs at a subduction zone, where one tectonic plate is forced under another; the magnitude 9.1 earthquake off Sumatra in December 2004 was a megathrust earthquake." },
    { term: "Dot-com boom", definition: "The rapid rise in internet company investment and valuations during the late 1990s, which continued to shape the technology and business landscape of the early 2000s." },
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
          "The decade opened with the September 11, 2001 attacks, which reshaped global security policy and led to the U.S. invasion of Afghanistan within a month.",
          "The Indian Ocean earthquake and tsunami of December 26, 2004 killed an estimated 227,000 to 230,000 people across more than a dozen countries, making it one of the deadliest natural disasters in recorded history, according to Encyclopaedia Britannica.",
          "The decade closed with the 2008 global financial crisis, triggered by the collapse of the U.S. housing and mortgage market and the failure of major financial institutions, producing the deepest global recession since the Great Depression.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The 2000s were bookended by two very different kinds of shocks: a security crisis at the start of the decade and an economic one near its end. The decade began with the <TermLink href="/history-timeline-facts/major-global-events-of-the-2000s">September 11</TermLink> terrorist attacks in 2001, which triggered a U.S.-led military campaign in Afghanistan and a worldwide overhaul of aviation and border security. In between, one of the deadliest natural disasters in modern history, the Indian Ocean tsunami, struck in December 2004. The decade ended with the 2008 global financial crisis, which wiped out enormous amounts of wealth and triggered a deep worldwide recession.</div>}
        detailed={<div className="prose-p">Beyond its three biggest headline events, the 2000s were also a decade of major, quieter shifts. The euro currency entered physical circulation across much of the European Union in January 2002, replacing national currencies like the French franc and German mark. The severe acute respiratory syndrome (SARS) outbreak of 2002-2003 spread across more than two dozen countries and became an early test case for the kind of cross-border public health coordination later used during larger pandemics. And technology moved fast throughout the decade — Facebook (2004), YouTube (2005), and Twitter (2006) all launched within a roughly two-year window, and Apple&apos;s 2007 introduction of the iPhone set up the smartphone-driven internet that would define the following decade. A genuine edge case worth noting: the financial crisis and the tsunami, despite both being described as decade-defining catastrophes, were entirely unrelated in cause — one was a sudden geological event, the other the slow buildup and collapse of an overleveraged financial system, and historians caution against treating &quot;the 2000s&quot; as though it had one single defining story.</div>}
      />
      <FootnoteAside>Facebook, YouTube, and Twitter all launched within roughly a two-year window between 2004 and 2006 — a cluster of founding dates that set up the social media landscape that would come to dominate the following decade.</FootnoteAside>
      <p>
      No single event captures the whole decade — its story runs across security, natural disaster, technology, and finance all at once, which is part of why it resists being reduced to just one headline.
      </p>

      <QuickCheck
        question="Which event opened the 2000s and reshaped global security policy for the rest of the decade?"
        options={[
          { text: "The 2008 global financial crisis", correct: false, explanation: "The financial crisis happened near the end of the decade, in 2008, not at its start." },
          { text: "The September 11, 2001 terrorist attacks", correct: true, explanation: "Correct. The September 11 attacks occurred at the start of the decade and triggered major, lasting changes to global security policy, aviation screening, and international military engagement." },
          { text: "The 2004 Indian Ocean tsunami", correct: false, explanation: "The tsunami struck in December 2004, roughly in the middle of the decade, and was a natural disaster rather than a security event." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Three defining events of the 2000s</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">The September 11 attacks and their aftermath (2001)</h3>
      <div className="prose-p">
      On September 11, 2001, hijackers affiliated with al-Qaeda used four commercial airplanes to attack the World Trade Center and the Pentagon, killing 2,977 people, according to the 9/11 Memorial &amp; Museum. Within a month, the United States launched a military campaign in Afghanistan, and the years that followed brought the creation of the U.S. Department of Homeland Security, a worldwide overhaul of airport security, and, in 2003, the U.S.-led invasion of Iraq — decisions whose consequences and debates continued for years afterward.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">The Indian Ocean earthquake and tsunami (2004)</h3>
      <div className="prose-p">
      On December 26, 2004, a magnitude 9.1 undersea earthquake off the coast of Sumatra, Indonesia, one of the largest ever recorded, triggered a series of tsunami waves across the Indian Ocean. Encyclopaedia Britannica documents an estimated death toll of roughly 227,000 to 230,000 people across more than a dozen countries, including Indonesia, Sri Lanka, India, and Thailand, making it one of the deadliest natural disasters in recorded history. The disaster led to major investment in international tsunami warning systems that did not previously exist in the Indian Ocean region.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">The global financial crisis (2008)</h3>
      <div className="prose-p">
      Beginning in 2007 and accelerating through 2008, a collapse in the U.S. housing and subprime mortgage market spread through the global financial system, culminating in the September 2008 bankruptcy of the investment bank Lehman Brothers, the largest bankruptcy filing in U.S. history at the time. Encyclopaedia Britannica describes the resulting global recession as the most severe economic downturn since the Great Depression, with major economies experiencing sharp job losses, falling housing values, and government bailouts of large financial institutions.
      </div>

      <QuickCheck
        question="What triggered the 2008 global financial crisis?"
        options={[
          { text: "A sudden collapse in global oil prices", correct: false, explanation: "Oil prices were not the trigger. The crisis originated in the U.S. housing and mortgage market." },
          { text: "A collapse in the U.S. housing and subprime mortgage market, which spread through the global financial system", correct: true, explanation: "Correct. Falling U.S. housing values and a wave of subprime mortgage defaults spread losses through interconnected financial institutions worldwide, culminating in the September 2008 collapse of Lehman Brothers." },
          { text: "Direct damage from the 2004 Indian Ocean tsunami to global shipping routes", correct: false, explanation: "The tsunami and the financial crisis were unrelated events with different causes, separated by roughly four years." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The 2000s: three defining global events, in sequence"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-major-global-events-of-the-2000s-timeline.svg"
        altText="Horizontal timeline of the 2000s showing the September 11 attacks and U.S. invasion of Afghanistan in 2001, the euro entering circulation in 2002, the U.S.-led invasion of Iraq in 2003, the Indian Ocean earthquake and tsunami in December 2004, the launches of Facebook, YouTube, and Twitter between 2004 and 2006, the introduction of the iPhone in 2007, and the global financial crisis and collapse of Lehman Brothers in September 2008."
      />
      <p>
      Laid out chronologically, the decade splits into three distinct storylines running in parallel rather than one single narrative: a security and geopolitics thread beginning with 9/11, a natural-disaster thread centered on the 2004 tsunami, and a technology thread running quietly through the whole decade before the 2008 financial crisis closed it out.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the 2004 tsunami and the 2008 financial crisis were connected events.", fix: "They had entirely separate causes — one a sudden undersea earthquake, the other a slow-building collapse in mortgage lending and financial risk — separated by roughly four years." },
          { mistake: "Underestimating how many countries the 2004 Indian Ocean tsunami affected.", fix: "It struck more than a dozen countries around the Indian Ocean rim, from Indonesia and Thailand to Sri Lanka, India, and as far as the east coast of Africa, not just the country nearest the earthquake's epicenter." },
          { mistake: "Reducing the whole decade to just 'the decade of 9/11' or 'the decade of the financial crisis.'", fix: "The 2000s also included a historic natural disaster, the launch of the social platforms and smartphones that reshaped the following decade, and major public-health and currency milestones — a single headline event misses most of the decade." },
        ]}
      />
      <MisconceptionCallout
        myth="Major global events of a decade can be reduced to just one or two headline events."
        reality={<p>The 2000s alone included a defining security crisis (the September 11 attacks and their aftermath), one of the deadliest natural disasters in recorded history (the 2004 Indian Ocean tsunami), a defining economic collapse (the 2008 financial crisis), and a quieter but equally consequential technology shift (the launches of Facebook, YouTube, Twitter, and the iPhone). Historians generally caution against flattening any decade into a single storyline — distinct, often unrelated events in security, natural disaster, finance, and technology can all be genuinely decade-defining at the same time.</p>}
      />

      <QuickCheck
        question="Which of these three events happened in the middle of the 2000s decade, roughly between the other two?"
        options={[
          { text: "The September 11 attacks", correct: false, explanation: "September 11, 2001 opened the decade, before the other two major events." },
          { text: "The Indian Ocean earthquake and tsunami", correct: true, explanation: "Correct. The tsunami struck on December 26, 2004, roughly in the middle of the decade, after 9/11 (2001) and before the financial crisis (2008)." },
          { text: "The global financial crisis", correct: false, explanation: "The financial crisis, centered on the September 2008 collapse of Lehman Brothers, came near the end of the decade, after the tsunami." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time someone summarizes the 2000s as a single story, mention at least two of its unrelated defining events — 9/11, the 2004 tsunami, and the 2008 financial crisis — to show the range.",
          "When you hear about tsunami warning systems in the Indian Ocean region, connect them back to the 2004 disaster, which exposed the lack of any such system at the time.",
          "Notice how many of today's major internet platforms (Facebook, YouTube, Twitter) trace their founding dates to this specific decade, between 2004 and 2006.",
          "Read the related entry on major global events of the 2010s to see how the decade's aftershocks, especially from the financial crisis, continued to play out.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What were the biggest global events of the 2000s?", answer: "The three most widely cited are the September 11, 2001 terrorist attacks and their aftermath, the December 2004 Indian Ocean earthquake and tsunami, and the 2008 global financial crisis, though the decade also saw major technology shifts including the launches of Facebook, YouTube, Twitter, and the iPhone." },
          { question: "How many people died in the 2004 Indian Ocean tsunami?", answer: "Encyclopaedia Britannica documents an estimated death toll of roughly 227,000 to 230,000 people across more than a dozen countries around the Indian Ocean, making it one of the deadliest natural disasters in recorded history." },
          { question: "What caused the 2008 financial crisis?", answer: "A collapse in the U.S. housing and subprime mortgage market spread losses through the interconnected global financial system, culminating in the September 2008 bankruptcy of Lehman Brothers and triggering the deepest global recession since the Great Depression." },
          { question: "What happened after 9/11 in the 2000s?", answer: "Within a month, the United States launched a military campaign in Afghanistan. The following years brought the creation of the U.S. Department of Homeland Security, an overhaul of airport security worldwide, and, in 2003, the U.S.-led invasion of Iraq." },
          { question: "When did social media start?", answer: "Several major platforms launched within a short window in the mid-2000s: Facebook in 2004, YouTube in 2005, and Twitter in 2006, setting up the social media landscape that expanded rapidly in the following decade." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
