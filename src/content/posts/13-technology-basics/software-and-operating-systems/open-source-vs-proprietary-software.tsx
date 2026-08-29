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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Open Source vs. Proprietary Software: What Actually Differs",
  category: "technology-basics",
  order: 26,
  subtopic: "software-and-operating-systems",
  tags: ["open source software", "proprietary software", "software licensing", "free software", "technology basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "Open source is about who can see and change the code, not about price — plenty of open source software is sold, and plenty of free software is proprietary.",
  summary: "Open source and proprietary software differ in whether a program's source code is publicly published and legally allowed to be inspected, modified, and redistributed, which is a separate question from whether the software costs money.",
  sources: [
    { label: "Open Source Initiative — The Open Source Definition", url: "https://opensource.org/osd" },
    { label: "The Linux Foundation", url: "https://www.linuxfoundation.org/" },
    { label: "Red Hat — What is open source?", url: "https://www.redhat.com/en/topics/open-source/what-is-open-source" },
  ],
  seeAlso: [
    "technology-basics/apps-vs-software-explained",
    "technology-basics/what-beta-software-actually-means",
    "technology-basics/why-software-updates-exist",
  ],
  glossary: [
    { term: "Source code", definition: "The human-readable instructions a programmer writes, before they are compiled into the machine-executable form a computer actually runs." },
    { term: "Open source software", definition: "Software whose source code is publicly published under a license that permits anyone to inspect, modify, and redistribute it, subject to that license's specific terms." },
    { term: "Proprietary software", definition: "Software whose source code is kept private by its maker, with only the compiled, non-editable program distributed to users, and modification or redistribution generally prohibited." },
    { term: "Software license", definition: "The legal terms under which software may be used, modified, and redistributed — the actual document that defines what 'open' or 'proprietary' means for a specific program." },
    { term: "Copyleft", definition: "A type of open source license requiring that any modified version distributed to others must also be released under the same open license, preventing a derivative from becoming proprietary." },
    { term: "Fork", definition: "An independent copy of an open source project's code that a different group develops separately, made possible specifically because the original source code was publicly available." },
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
          "The real dividing line is whether the source code is public and legally modifiable, not whether the software is free — open source and proprietary are both independent of price.",
          "An open source license still has real, enforceable terms; 'open' means the rules are published and permissive in specific ways, not that there are no rules at all.",
          "Publicly available source code is what makes a 'fork' possible — an independent group taking a project's code and developing it separately, which simply cannot happen with proprietary software.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Imagine two recipes for the same dish. One recipe is printed in full on the box — anyone can read exactly how it&apos;s made, tweak an ingredient, and share their version with friends. The other recipe is a trade secret: you get the finished dish, but the exact method stays locked away. <TermLink href="/technology-basics/open-source-vs-proprietary-software">Open source software</TermLink> is the printed recipe — the <TermLink href="/technology-basics/open-source-vs-proprietary-software">source code</TermLink> is public. <TermLink href="/technology-basics/open-source-vs-proprietary-software">Proprietary software</TermLink> is the trade secret — you get the finished, runnable program, but not the underlying code that built it.</div>}
        detailed={<div className="prose-p">Source code is the human-readable instructions a programmer actually writes; it gets compiled into the machine-executable form a computer runs. Proprietary software ships only the compiled form, keeping the source private and legally restricting modification or redistribution through its <TermLink href="/technology-basics/open-source-vs-proprietary-software">software license</TermLink>. Open source software publishes the source code itself, under a license that grants specific permissions — commonly the right to view, modify, and redistribute it. Critically, &quot;open&quot; doesn&apos;t mean unrestricted: some open source licenses are permissive with few conditions, while others use <TermLink href="/technology-basics/open-source-vs-proprietary-software">copyleft</TermLink> terms requiring that any distributed modified version stay open under the same license, specifically to prevent someone from taking open code, modifying it, and re-releasing it as closed proprietary software. Because the code is public, anyone technically capable can create a <TermLink href="/technology-basics/open-source-vs-proprietary-software">fork</TermLink> — an independently developed copy of the project — something structurally impossible with proprietary software, since forking requires access to source code that simply isn&apos;t published.</div>}
      />
      <FootnoteAside>The formal criteria for what counts as a genuine open source license — not just &quot;you can see the code,&quot; but specific permissions around modification, redistribution, and non-discrimination against users or purposes — are maintained publicly by the Open Source Initiative in a document called the Open Source Definition, first published in the late 1990s.</FootnoteAside>
      <p>
        Once source-code visibility is the actual dividing line, a lot of confusing edge cases — free proprietary software, paid open source software, open source projects run by for-profit companies — stop being contradictions and start making sense.
      </p>
      <QuickCheck
        question="If a piece of software is completely free to download and use, does that automatically make it open source?"
        options={[
          { text: "Yes, free and open source always mean the same thing", correct: false, explanation: "Price and source-code visibility are independent properties. Plenty of free software keeps its source code private and legally protected, making it free but still proprietary." },
          { text: "No — price is separate from whether the source code is publicly published and legally modifiable, which is the actual defining line for open source", correct: true, explanation: "Correct. A program can be free and proprietary, free and open source, paid and proprietary, or paid and open source — all four combinations exist." },
          { text: "Only mobile apps can be both free and open source at the same time", correct: false, explanation: "This isn't a platform-specific distinction — desktop, server, and mobile software can all independently combine any pricing model with either licensing category." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A widely used open source web browser engine (baseline case)</h3>
      <div className="prose-p">
        Several major web browsers are built on open source rendering engines — the source code that turns a webpage&apos;s HTML and CSS into what you see on screen is publicly published, and different companies build their own browsers on top of the same shared, open codebase, each adding their own proprietary features on top. This is a common pattern: the foundational, shared infrastructure is open source (benefiting from contributions and scrutiny from many organizations), while the specific product built on top of it can still include proprietary, company-specific additions.
      </div>
      <QuickCheck
        question="Can a company build a proprietary product on top of an open source foundation?"
        options={[
          { text: "No, using any open source code forces the entire finished product to also be open source", correct: false, explanation: "Whether this is true depends entirely on the specific license's terms — permissive open source licenses generally do allow proprietary software to be built on top, while some copyleft licenses restrict this for the combined work." },
          { text: "Yes, this is a common real pattern — shared open source infrastructure with proprietary features built on top, depending on the specific license's terms", correct: true, explanation: "Correct. This exact pattern (open source engine, proprietary product features) is common across the software industry, within the bounds each specific license allows." },
          { text: "Only nonprofit organizations are legally allowed to use open source code", correct: false, explanation: "Open source licenses generally don't restrict use to nonprofits — for-profit companies routinely build commercial products using open source components, within each license's specific terms." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A paid, proprietary app that still receives free updates (edge case / variation)</h3>
      <div className="prose-p">
        A paid photo-editing app that regularly ships free updates is still fully proprietary — receiving updates at no additional cost describes a pricing and support policy, not the licensing category. The source code for that app remains closed; you&apos;re licensed to run the compiled program and receive its updates, but you have no legal right to view, modify, or redistribute its underlying code. This distinguishes it clearly from open source software you might also pay for (some open source projects sell support, hosting, or a packaged version), where the source code itself remains legally viewable and modifiable regardless of what was paid.
      </div>
      <QuickCheck
        question="A proprietary app is paid once and then receives free updates for years. Does receiving free updates make it open source?"
        options={[
          { text: "Yes, free updates mean the source code must be public", correct: false, explanation: "Update pricing has nothing to do with source code visibility — a proprietary app's code stays closed regardless of whether updates cost extra." },
          { text: "No — free updates are a pricing and support decision, separate from whether the underlying source code is publicly published and legally modifiable", correct: true, explanation: "Correct. Update cost and licensing category (open source vs. proprietary) are independent factors that can combine in any pairing." },
          { text: "Only if the updates are delivered automatically without user action", correct: false, explanation: "The delivery mechanism for updates has no bearing on whether a program's source code is open or proprietary — those are unrelated questions." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A major open source project forking after a licensing dispute (real-world / applied case)</h3>
      <p>
        Open source history includes several well-known cases where a community disagreed with a project&apos;s direction or a licensing change, and — because the source code was already public — an independent group forked it, continuing development under a new name with the existing codebase as a starting point. This kind of split is only possible because the original source was open; the same disagreement with a proprietary product simply results in unhappy customers, since there&apos;s no legally accessible code for anyone outside the original company to fork and continue independently.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="What actually differs: who can see and change the source code"
        type="comparison"
        svgSrc="/diagrams/technology-basics-open-source-vs-proprietary-software-comparison.svg"
        altText="Side-by-side comparison showing open source software with visible, editable, redistributable source code versus proprietary software with hidden source code compiled into a closed program"
      />
      <p>
        Notice that price doesn&apos;t appear anywhere in this comparison — both columns can independently be free or paid. The entire distinction sits on source code visibility and the legal permissions attached to it, which is the part worth checking before assuming &quot;free&quot; and &quot;open source&quot; are synonyms.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming 'open source' automatically means 'free of charge.'", fix: "Check the license and pricing separately — some open source projects charge for the software itself, packaged distributions, or support, while the source remains publicly viewable." },
          { mistake: "Assuming 'free software' automatically means the source code is public.", fix: "Look specifically for whether source code is published and what a stated license permits — plenty of free-to-use software keeps its code entirely proprietary." },
          { mistake: "Believing 'open source' means anyone can do absolutely anything with the code, with no restrictions.", fix: "Read the specific license — permissions and requirements (like copyleft's requirement to keep derivatives open) vary meaningfully between different open source licenses." },
        ]}
      />
      <MisconceptionCallout
        myth="Open source software is inherently less secure because attackers can read the code and find flaws more easily."
        reality={<p>Open source&apos;s public visibility cuts both ways: yes, anyone including attackers can read the code, but so can any of the many independent security researchers, contributors, and organizations who use or rely on that project, all of whom can find and report flaws. Proprietary code being hidden doesn&apos;t prevent vulnerabilities from existing — it just limits who can find and report them before an attacker does. Security outcomes for both models depend heavily on how actively a specific project is maintained and reviewed, not on the licensing category alone.</p>}
      />
      <QuickCheck
        question="Does keeping software's source code private (proprietary) guarantee it's more secure than open source software?"
        options={[
          { text: "Yes, hidden code can never be analyzed for flaws by anyone", correct: false, explanation: "Hidden source code isn't immune to vulnerability discovery — security researchers regularly find flaws in proprietary software through other analysis methods, and hiding code doesn't remove the flaws, just some visibility into them." },
          { text: "No — code visibility affects who can find flaws, but real security outcomes depend heavily on how actively a specific project is maintained and reviewed, not the licensing category alone", correct: true, explanation: "Correct. Both open and proprietary software have had serious security vulnerabilities; visibility of source code is one factor among many, not a guarantee in either direction." },
          { text: "Only government software can be considered fully secure regardless of source visibility", correct: false, explanation: "Security depends on maintenance practices and review processes, not on whether an organization is governmental — this isn't a relevant factor in the open source vs. proprietary security question." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before assuming software is open source because it's free, check whether its actual source code is published and under what license.",
          "If evaluating software for a project you'll need to modify or extend, check its license terms directly rather than assuming based on price or popularity.",
          "Look up which foundational tools you use daily (browser engines, programming languages, server software) are open source underneath a proprietary or branded product.",
          "Read the related entry on beta software to see how open and proprietary projects can differ in how openly they run their testing and release process.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the actual difference between open source and proprietary software?", answer: "Open source software publishes its source code publicly under a license permitting inspection, modification, and redistribution within that license's terms. Proprietary software keeps its source code private, distributing only the compiled program with modification and redistribution generally restricted." },
          { question: "Is open source software always free?", answer: "No. Price and source-code licensing are independent — open source projects can charge for the software, a packaged distribution, or support, while proprietary software can also be distributed for free. Free and open source are not the same thing." },
          { question: "Is open source software less secure than proprietary software?", answer: "Not inherently. Open source's public code can be reviewed by many independent researchers, which can surface flaws, while proprietary code is hidden from outside review by default. Actual security outcomes depend more on how actively a specific project is maintained than on the licensing model alone." },
          { question: "Can a company make money from open source software?", answer: "Yes — common models include charging for support, hosting, or a packaged/enterprise version, or building proprietary features on top of an open source foundation, depending on what the specific license permits." },
          { question: "What does it mean for open source software to be 'forked'?", answer: "A fork is an independent copy of a project's public source code that a different group develops separately, often after a disagreement over direction. Forking is only possible because the original source code was published — it can't happen with proprietary software." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
