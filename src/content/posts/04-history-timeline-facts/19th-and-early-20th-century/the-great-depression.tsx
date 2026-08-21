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
  title: "The Great Depression",
  category: "history-timeline-facts",
  order: 30,
  subtopic: "19th-and-early-20th-century",
  tags: ["great depression", "1929 stock market crash", "new deal", "franklin d roosevelt", "economic history", "20th century history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The 1929 stock market crash didn't cause the Great Depression by itself — bank failures, a shrinking money supply, and policy mistakes turned a market crash into a decade-long global crisis.",
  summary: "The Great Depression was a severe worldwide economic downturn that began in 1929 and lasted through most of the 1930s, marked by mass unemployment, widespread bank failures, and a collapse in industrial production and trade, driven not by the 1929 stock market crash alone but by a combination of banking crises, poor monetary policy, and contracting global trade.",
  sources: [
    { label: "Federal Reserve History — The Great Depression", url: "https://www.federalreservehistory.org/essays/great-depression" },
    { label: "Franklin D. Roosevelt Presidential Library and Museum — The Great Depression", url: "https://www.fdrlibrary.org/great-depression" },
    { label: "Encyclopaedia Britannica — Great Depression", url: "https://www.britannica.com/money/Great-Depression" },
    { label: "U.S. National Archives — The New Deal", url: "https://www.archives.gov/education/lessons/new-deal" },
  ],
  seeAlso: [
    "history-timeline-facts/world-war-i-overview",
    "history-timeline-facts/the-russian-revolution",
    "history-timeline-facts/world-leaders-who-changed-history",
  ],
  glossary: [
    { term: "Stock market crash", definition: "A sudden, sharp drop in stock prices; the October 1929 Wall Street crash saw major U.S. stock indices lose roughly 25% of their value in under a week." },
    { term: "Bank run", definition: "A situation where large numbers of depositors withdraw funds simultaneously, fearing a bank's collapse — which can itself cause the bank to fail even if it was otherwise solvent." },
    { term: "New Deal", definition: "A series of U.S. federal programs, public works projects, and financial reforms enacted under President Franklin D. Roosevelt starting in 1933 to combat the Great Depression." },
    { term: "Gold standard", definition: "A monetary system where a currency's value is directly linked to a fixed quantity of gold; many economists cite adherence to the gold standard as worsening the Depression's international spread." },
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
          "The October 1929 stock market crash was a trigger, not the sole cause — a wave of bank failures, a shrinking money supply, and countries clinging to the gold standard turned a market crash into a decade-long global depression.",
          "U.S. unemployment peaked at roughly 25% in 1933, and industrial production, international trade, and prices all collapsed sharply worldwide — the Depression was a genuinely global crisis, not limited to the United States.",
          "President Franklin D. Roosevelt's New Deal (from 1933) introduced major financial reforms and public works programs that reshaped the U.S. government's economic role permanently, though most economic historians agree it was ultimately World War II's wartime production, not the New Deal alone, that ended the Depression.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The Great Depression was the worst economic downturn in modern history, starting in 1929 and lasting through most of the 1930s. It&apos;s often remembered as starting with the <TermLink href="/history-timeline-facts/the-great-depression">stock market crash</TermLink> of October 1929, when U.S. stock prices collapsed in a matter of days. But the crash itself didn&apos;t directly cause mass unemployment and business failures — what followed it did. Banks failed in waves as panicked customers rushed to withdraw savings, businesses couldn&apos;t get loans, factories cut production and laid off workers, and the resulting hardship spread internationally as countries cut back on trade with each other, making the downturn worse and longer for almost everyone.</div>}
        detailed={<div className="prose-p">Economic historians generally point to several compounding factors beyond the 1929 crash itself. U.S. banks failed in large numbers — over 9,000 between 1930 and 1933 — partly because there was no deposit insurance at the time, so a rumor of trouble could trigger a self-fulfilling <TermLink href="/history-timeline-facts/the-great-depression">bank run</TermLink> that wiped out even fundamentally sound banks. As banks failed, the money supply shrank sharply, making credit scarce and deflation (falling prices) worse, which in turn made debts effectively heavier for struggling businesses and farmers. Internationally, many countries&apos; commitment to the <TermLink href="/history-timeline-facts/the-great-depression">gold standard</TermLink> limited their ability to loosen monetary policy and respond flexibly, and the U.S. Smoot-Hawley Tariff Act of 1930, intended to protect American industry, triggered retaliatory tariffs abroad that shrank global trade further. Federal Reserve policy at the time is now widely criticized by economists (including, later, former Fed chair Ben Bernanke) for tightening rather than expanding the money supply during the crisis, deepening the downturn rather than cushioning it.</div>}
      />
      <FootnoteAside>Unlike today, U.S. bank deposits had no federal insurance before 1933 — meaning a bank failure could wipe out an ordinary depositor&apos;s entire life savings overnight. The Federal Deposit Insurance Corporation (FDIC), created in 1933 specifically in response to this wave of bank failures, still insures U.S. bank deposits today.</FootnoteAside>
      <p>
      That gap between &quot;a stock market crashed&quot; and &quot;a quarter of the workforce lost their jobs&quot; is exactly where the real explanatory work of the Great Depression lives — and it&apos;s why historians and economists still study its mechanics closely today.
      </p>

      <QuickCheck
        question="Did the October 1929 stock market crash by itself directly cause the Great Depression's mass unemployment and business failures?"
        options={[
          { text: "Yes — the stock market crash alone directly caused the entire decade-long economic collapse that followed", correct: false, explanation: "The crash was a serious trigger, but the sustained mass unemployment and business failures resulted from a chain of further events — bank failures, a shrinking money supply, and contracting global trade — not the crash in isolation." },
          { text: "No — the crash was a trigger, but a wave of bank failures, a shrinking money supply, and contracting global trade turned it into a sustained, decade-long depression", correct: true, explanation: "Correct. Economic historians point to this chain of compounding factors, not the crash alone, as what turned a sharp market drop into a prolonged global crisis." },
          { text: "No — the stock market crash and the Great Depression were unrelated events that happened to overlap in time", correct: false, explanation: "They were directly connected — the crash was a genuine early trigger that helped set off the subsequent banking and economic crisis, even though it wasn't sufficient on its own to cause the full Depression." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">The 1929 crash and the wave of U.S. bank failures (baseline case)</h3>
      <div className="prose-p">
      Following the October 1929 crash, U.S. banks began failing in waves — first from bad loans tied to the crash, then increasingly from self-fulfilling bank runs as depositors, fearing collapse, rushed to withdraw funds all at once. With no deposit insurance, even fundamentally sound banks could be forced to close if enough customers demanded their money simultaneously. Roughly 9,000 U.S. banks failed between 1930 and 1933, wiping out savings and sharply shrinking the amount of money circulating in the economy, which choked off credit for businesses and consumers alike.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">The Dust Bowl — an environmental crisis compounding an economic one (variation / regional case)</h3>
      <div className="prose-p">
      In the U.S. Great Plains, the Depression collided with a severe, multi-year drought and decades of soil-depleting farming practices, producing the &quot;Dust Bowl&quot; of the mid-to-late 1930s — massive dust storms that destroyed farmland across states like Oklahoma, Kansas, and Texas. Hundreds of thousands of families, already squeezed by collapsing crop prices, were forced to migrate, most famously westward to California, a mass displacement documented by photographers like Dorothea Lange and fictionalized in John Steinbeck&apos;s &quot;The Grapes of Wrath.&quot; This case shows the Depression wasn&apos;t a purely financial event — in some regions, it combined directly with an ecological disaster to devastate entire communities.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">The New Deal and the lasting expansion of government&apos;s economic role (real-world / applied case)</h3>
      <div className="prose-p">
      Franklin D. Roosevelt&apos;s New Deal, launched in 1933, introduced Social Security, the FDIC&apos;s bank deposit insurance, securities regulation (the SEC), and large public works programs employing millions. Economic historians generally agree these programs eased hardship and reduced unemployment somewhat, and several of its institutions — including Social Security and the FDIC — remain foundational parts of U.S. government and finance today. However, most economic historians also agree the Depression didn&apos;t fully end until the massive industrial mobilization of World War II from 1939-1941 drove unemployment down and production sharply upward, meaning the New Deal alone, while significant and lasting, didn&apos;t single-handedly end the Depression.
      </div>

      <QuickCheck
        question="What ultimately ended the Great Depression, according to most economic historians?"
        options={[
          { text: "The New Deal alone fully ended the Depression by 1936", correct: false, explanation: "The New Deal eased hardship and left a lasting institutional legacy, but unemployment remained high through the late 1930s — most economic historians credit World War II's industrial mobilization with the Depression's actual end." },
          { text: "The massive industrial mobilization for World War II, starting around 1939-1941, which sharply increased production and drove unemployment down", correct: true, explanation: "Correct. Most economic historians view wartime mobilization, not the New Deal by itself, as what finally ended the Depression, even though the New Deal's institutions (like Social Security and the FDIC) had lasting significance." },
          { text: "The 1929 stock market fully recovering its losses by 1933", correct: false, explanation: "U.S. stock markets didn't return to their pre-crash 1929 peak until 1954 — the market's slow recovery didn't drive the Depression's end." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Timeline: the Great Depression, from crash to recovery, 1929-1941"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-the-great-depression-timeline.svg"
        altText="Horizontal timeline from 1929 to 1941 showing the October 1929 stock market crash, the wave of U.S. bank failures between 1930 and 1933, unemployment peaking at roughly 25% in 1933, the start of Franklin D. Roosevelt's New Deal programs in 1933, the Dust Bowl droughts of the mid-to-late 1930s, and the end of mass unemployment driven by U.S. industrial mobilization for World War II around 1939-1941."
      />
      <p>
      The nearly four-year gap between the 1929 crash and unemployment&apos;s 1933 peak is worth sitting with — the worst human impact of the Depression didn&apos;t arrive all at once with the crash, but built gradually as bank failures and shrinking credit spread through the wider economy over several years.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating the 1929 stock market crash as the sole, complete cause of the Great Depression.", fix: "The crash was a serious trigger, but bank failures, a shrinking money supply, adherence to the gold standard, and contracting global trade were what turned it into a sustained, decade-long global depression." },
          { mistake: "Assuming the Great Depression was limited to the United States.", fix: "It was a genuinely global crisis — industrial production, trade, and employment collapsed across much of Europe, Latin America, and beyond, worsened by countries' commitment to the gold standard and rising trade barriers." },
          { mistake: "Believing the New Deal single-handedly ended the Depression.", fix: "Most economic historians credit the New Deal with easing hardship and leaving a lasting institutional legacy (like Social Security and the FDIC), but view World War II's industrial mobilization from 1939-1941 as what actually ended mass unemployment." },
        ]}
      />
      <MisconceptionCallout
        myth="The Great Depression was caused solely by the 1929 stock market crash."
        reality={<p>The October 1929 crash was a real and significant trigger, but on its own it wouldn&apos;t have produced a decade-long global depression. Economic historians point to a chain of compounding factors: a wave of roughly 9,000 U.S. bank failures between 1930 and 1933 (worsened by the absence of deposit insurance at the time), a resulting sharp contraction in the money supply and available credit, many countries&apos; rigid adherence to the gold standard limiting their policy responses, and a collapse in international trade worsened by retaliatory tariffs following the U.S. Smoot-Hawley Tariff Act of 1930. The crash started the crisis; these compounding failures are what turned it into the Great Depression.</p>}
      />

      <QuickCheck
        question="Besides the 1929 stock market crash, what is one major factor economic historians cite as deepening the Great Depression?"
        options={[
          { text: "A wave of roughly 9,000 U.S. bank failures between 1930 and 1933, which sharply shrank the money supply and available credit", correct: true, explanation: "Correct. With no deposit insurance at the time, bank runs could wipe out even sound banks, and the resulting collapse in available credit choked off business activity across the economy." },
          { text: "A sudden, unexplained global famine unrelated to any economic policy", correct: false, explanation: "There was no unrelated global famine driving the Depression — the crisis was fundamentally financial and economic in origin, worsened by policy responses like tariffs and rigid adherence to the gold standard." },
          { text: "A worldwide currency being abolished entirely in 1929", correct: false, explanation: "No world currency was abolished in 1929 — if anything, many countries' rigid commitment to the existing gold-standard currency system is cited as worsening the Depression, not a currency's abolition." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time someone says \"the stock market crash caused the Great Depression,\" add the bank failures, shrinking money supply, and global trade collapse that actually turned it into a decade-long crisis.",
          "Notice which New Deal-era institutions are still part of everyday financial life today, like FDIC deposit insurance and Social Security, next time you see either mentioned.",
          "When you read about the Dust Bowl, remember it was an environmental disaster compounding, not causing, the broader economic Depression happening at the same time.",
          "Read the related entry on World War I to see how that war's economic aftermath (including reparations and war debts) fed into the international financial fragility the Depression later exposed.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What caused the Great Depression?", answer: "The October 1929 stock market crash was a major trigger, but the sustained depression that followed resulted from a chain of compounding factors: a wave of U.S. bank failures, a sharp contraction in the money supply, many countries' rigid adherence to the gold standard, and shrinking international trade worsened by rising tariffs." },
          { question: "How long did the Great Depression last?", answer: "It's generally dated from the 1929 stock market crash through the late 1930s in the United States, with U.S. unemployment remaining elevated until the country's industrial mobilization for World War II, roughly 1939-1941, finally restored full employment." },
          { question: "What was the unemployment rate during the Great Depression?", answer: "U.S. unemployment peaked at roughly 25% in 1933, meaning about one in four workers in the labor force was without a job, though it remained elevated for years afterward even as it declined from that peak." },
          { question: "What was the New Deal?", answer: "A series of U.S. federal programs, financial reforms, and public works projects introduced by President Franklin D. Roosevelt starting in 1933, including Social Security, FDIC bank deposit insurance, and large-scale employment programs, aimed at relieving hardship and reforming the financial system." },
          { question: "Did the Great Depression happen only in the United States?", answer: "No — it was a global economic crisis. Industrial production, employment, and trade collapsed across much of Europe, Latin America, and other regions, worsened internationally by countries' commitment to the gold standard and by rising trade barriers following the 1930 Smoot-Hawley Tariff Act." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
