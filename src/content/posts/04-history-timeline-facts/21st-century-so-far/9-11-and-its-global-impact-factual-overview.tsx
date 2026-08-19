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
  title: "9/11 and Its Global Impact: A Factual Overview",
  category: "history-timeline-facts",
  order: 42,
  subtopic: "21st-century-so-far",
  tags: ["september 11 attacks", "9/11", "world trade center", "war on terror", "21st century history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "What happened on September 11, 2001, the documented death toll, and the security and policy changes that followed, stated factually and sourced to primary institutions.",
  summary: "On September 11, 2001, terrorists affiliated with al-Qaeda hijacked four commercial airplanes and used them to attack the World Trade Center and the Pentagon, with a fourth plane crashing in Pennsylvania after passengers intervened, killing 2,977 people and reshaping global security policy for decades.",
  sources: [
    { label: "9/11 Memorial & Museum", url: "https://www.911memorial.org/" },
    { label: "National Archives — September 11 Records", url: "https://www.archives.gov/research/september-11" },
    { label: "Encyclopaedia Britannica — September 11 attacks", url: "https://www.britannica.com/event/September-11-attacks" },
  ],
  seeAlso: [
    "history-timeline-facts/major-global-events-of-the-2000s",
    "history-timeline-facts/major-global-events-of-the-2010s",
    "history-timeline-facts/the-rise-of-the-internet-age",
  ],
  glossary: [
    { term: "al-Qaeda", definition: "A militant extremist network founded in the late 1980s, identified by U.S. and international investigators, including the 9/11 Commission, as responsible for planning and carrying out the September 11, 2001 attacks." },
    { term: "9/11 Commission", definition: "The bipartisan National Commission on Terrorist Attacks Upon the United States, created by Congress in late 2002 to investigate the circumstances of the attacks and issue findings and recommendations, published in 2004." },
    { term: "Ground Zero", definition: "The common name for the site of the collapsed World Trade Center towers in Lower Manhattan, now home to the National September 11 Memorial & Museum." },
    { term: "Department of Homeland Security (DHS)", definition: "A U.S. federal cabinet department created by the Homeland Security Act of 2002 and beginning operations in 2003, consolidating multiple agencies under one department focused on domestic security." },
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
          "On the morning of September 11, 2001, 19 hijackers affiliated with al-Qaeda took control of four commercial airplanes, crashing two into the World Trade Center in New York City, one into the Pentagon, and one into a field near Shanksville, Pennsylvania, after passengers and crew tried to retake the plane.",
          "The 9/11 Memorial & Museum documents 2,977 people killed across all four locations, not counting the 19 hijackers, with thousands more injured and, in the years since, thousands of responders and survivors have died from illnesses linked to toxic dust exposure at Ground Zero.",
          "The attacks reshaped global security policy for a generation: the U.S. invaded Afghanistan within a month, aviation security was overhauled worldwide, and NATO invoked its collective-defense clause for the first time in its history.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">On the morning of September 11, 2001, 19 hijackers affiliated with the extremist network <TermLink href="/history-timeline-facts/9-11-and-its-global-impact-factual-overview">al-Qaeda</TermLink> took control of four U.S. commercial airplanes. Two were flown into the Twin Towers of the World Trade Center in New York City, one was flown into the Pentagon near Washington, D.C., and the fourth crashed in a field near Shanksville, Pennsylvania, after passengers and crew, aware of the other attacks through phone calls, attempted to retake control of the aircraft from the hijackers. According to the National September 11 Memorial &amp; Museum, 2,977 people were killed that day, not including the hijackers themselves, making it the deadliest terrorist attack in modern history and the deadliest single day for first responders in United States history.</div>}
        detailed={<div className="prose-p">The timeline, as documented by the National Archives and the 9/11 Commission, unfolded quickly: American Airlines Flight 11 struck the North Tower of the World Trade Center at 8:46 a.m. Eastern Time, followed by United Airlines Flight 175 striking the South Tower at 9:03 a.m. American Airlines Flight 77 struck the Pentagon at 9:37 a.m., and United Airlines Flight 93, the fourth hijacked plane, crashed in a field near Shanksville, Pennsylvania at 10:03 a.m. The South Tower collapsed at 9:59 a.m. and the North Tower at 10:28 a.m., killing occupants, first responders, and people on the ground. The 9/11 Commission&apos;s 2004 report identified the attacks as planned and directed by al-Qaeda. A less widely known edge case in the public record: 9/11 was not an isolated first strike — it followed a documented pattern of earlier attacks tied to the same network, including the 1993 World Trade Center bombing, the 1998 U.S. embassy bombings in Kenya and Tanzania, and the 2000 bombing of the USS Cole, all cited in the 9/11 Commission&apos;s report as part of the same escalating campaign. Within a month of the attacks, the United States launched a military campaign in Afghanistan, and <TermLink href="/history-timeline-facts/9-11-and-its-global-impact-factual-overview">Ground Zero</TermLink> became both the physical site of recovery efforts and, later, the location of the National September 11 Memorial &amp; Museum.</div>}
      />
      <FootnoteAside>The National September 11 Memorial &amp; Museum&apos;s twin reflecting pools sit within the original footprints of the North and South Towers, and the names of all 2,977 victims, along with the six people killed in the 1993 World Trade Center bombing, are inscribed in bronze parapets around their edges, arranged by documented requests for &quot;meaningful adjacency&quot; near coworkers and loved ones.</FootnoteAside>
      <p>
      Understanding what happened that morning is only part of the picture — the attacks also set off two decades of policy change in the United States and internationally, which is where their global significance mostly lies today.
      </p>

      <QuickCheck
        question="How many commercial airplanes were hijacked in the September 11, 2001 attacks?"
        options={[
          { text: "Two — both crashed into the World Trade Center", correct: false, explanation: "Two planes did strike the World Trade Center, but two more were also hijacked that morning — one struck the Pentagon and one crashed in Pennsylvania." },
          { text: "Four — two struck the World Trade Center, one struck the Pentagon, and one crashed in Pennsylvania", correct: true, explanation: "Correct. All four hijacked flights are documented by the National Archives and the 9/11 Memorial & Museum: American Airlines Flight 11, United Airlines Flight 175, American Airlines Flight 77, and United Airlines Flight 93." },
          { text: "Six, including two that were intercepted before reaching their targets", correct: false, explanation: "No aircraft were intercepted that morning. Exactly four planes were hijacked, and all four reached a target or crash site." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The chronology of the attacks (baseline case)</h3>
      <div className="prose-p">
      As documented by the National Archives, the four hijacked flights struck within roughly 80 minutes of each other on the morning of September 11, 2001: American Airlines Flight 11 into the World Trade Center&apos;s North Tower at 8:46 a.m. ET, United Airlines Flight 175 into the South Tower at 9:03 a.m., American Airlines Flight 77 into the Pentagon at 9:37 a.m., and United Airlines Flight 93 crashing near Shanksville, Pennsylvania at 10:03 a.m. Both towers subsequently collapsed, and the attacks killed 2,977 people, according to the 9/11 Memorial &amp; Museum&apos;s official count.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A documented pattern, not a single isolated event (context / exception to the &quot;out of nowhere&quot; framing)</h3>
      <div className="prose-p">
      The 9/11 Commission&apos;s 2004 report placed the attacks within a documented sequence of earlier incidents tied to the same network: the 1993 bombing of the World Trade Center&apos;s parking garage, the 1998 bombings of U.S. embassies in Kenya and Tanzania, and the 2000 bombing of the USS Cole in Yemen. Historians and the Commission itself describe 9/11 as the culmination of an escalating campaign rather than a singular, unprecedented event — an important distinction for accurately understanding the historical record.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How the attacks still shape daily life today (real-world / present-day case)</h3>
      <div className="prose-p">
      Much of what travelers experience at airport security today traces directly back to the weeks after 9/11: the Transportation Security Administration was created in November 2001 to take over airport screening nationwide, and the Department of Homeland Security was established the following year, consolidating agencies under a single department focused on domestic security. NATO also invoked Article 5, its collective-defense clause, for the first and so far only time in its history in response to the attacks. Every September 11, the United States observes it as Patriot Day, and the 9/11 Memorial &amp; Museum continues to hold a public reading of victims&apos; names each anniversary.
      </div>

      <QuickCheck
        question="Why did United Airlines Flight 93 crash in a field near Shanksville, Pennsylvania, rather than reach an intended target?"
        options={[
          { text: "It suffered a mechanical failure unrelated to the hijacking", correct: false, explanation: "No mechanical failure has been documented. The National Archives and the 9/11 Commission attribute the crash to passenger and crew intervention." },
          { text: "Passengers and crew, aware of the other attacks through phone calls, attempted to retake control of the plane from the hijackers", correct: true, explanation: "Correct. The 9/11 Commission's report and the National Archives document that passengers and crew, having learned of the other hijackings by phone, stormed the cockpit, which led the hijackers to crash the plane before it could reach its intended target, believed to be a landmark in Washington, D.C." },
          { text: "The U.S. military shot the plane down before it could reach its target", correct: false, explanation: "The 9/11 Commission found no evidence the plane was shot down. Military jets were scrambled that morning but did not reach Flight 93 before it crashed." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="September 11, 2001: attack timeline and immediate aftermath"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-9-11-and-its-global-impact-factual-overview-timeline.svg"
        altText="Horizontal timeline showing the morning of September 11, 2001, with American Airlines Flight 11 striking the World Trade Center North Tower at 8:46 a.m., United Airlines Flight 175 striking the South Tower at 9:03 a.m., American Airlines Flight 77 striking the Pentagon at 9:37 a.m., and United Airlines Flight 93 crashing near Shanksville, Pennsylvania at 10:03 a.m., followed by the tower collapses that morning, the U.S. invasion of Afghanistan in October 2001, creation of the Transportation Security Administration in November 2001, creation of the Department of Homeland Security in 2002, and the death of Osama bin Laden in May 2011."
      />
      <p>
      The timeline shows two distinct phases: the attacks themselves, compressed into roughly 80 minutes that morning, and the much longer institutional response that followed over the next two decades, from new federal agencies to a military campaign that became the longest war in U.S. history before U.S. forces withdrew from Afghanistan in 2021.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Citing different death toll figures interchangeably without noting what they count.", fix: "The 9/11 Memorial & Museum's figure of 2,977 covers the direct attacks; it does not include the thousands of responders and survivors who have since died of illnesses linked to toxic dust exposure at Ground Zero, which is tracked separately through the federally administered World Trade Center Health Program." },
          { mistake: "Treating 9/11 as a completely isolated, unprecedented attack with no prior warning pattern.", fix: "The 9/11 Commission's report documents a sequence of earlier attacks tied to the same network — the 1993 World Trade Center bombing, the 1998 embassy bombings, and the 2000 USS Cole bombing — as part of an escalating campaign." },
          { mistake: "Assuming the U.S. response to 9/11 began and ended quickly.", fix: "The military campaign launched in Afghanistan in October 2001 continued for nearly two decades, and institutional changes like the Department of Homeland Security and TSA remain permanent parts of U.S. government structure today." },
        ]}
      />
      <MisconceptionCallout
        myth="9/11 was a single, isolated event that came out of nowhere and had no lasting global impact beyond that day."
        reality={<p>Neither half of that framing holds up against the documented record. The 9/11 Commission&apos;s report ties the attacks to a pattern of earlier al-Qaeda attacks going back to 1993, and historians describe 9/11 as the culmination of an escalating campaign rather than a singular surprise. Its aftermath was equally far-reaching: it triggered the U.S. invasion of Afghanistan, NATO&apos;s first-ever invocation of its collective-defense clause, the creation of the Department of Homeland Security and the Transportation Security Administration, and a global overhaul of aviation security that is still in place today, according to the National Archives and the 9/11 Memorial & Museum.</p>}
      />

      <QuickCheck
        question="Which of the following is documented as part of the pattern of attacks that preceded September 11, 2001?"
        options={[
          { text: "The 1993 bombing of the World Trade Center's parking garage", correct: true, explanation: "Correct. The 9/11 Commission's report identifies the 1993 World Trade Center bombing, along with the 1998 U.S. embassy bombings and the 2000 USS Cole bombing, as part of the same escalating pattern of attacks tied to al-Qaeda." },
          { text: "A prior hijacking attempt in 1999 that also targeted the World Trade Center", correct: false, explanation: "No such 1999 attempt against the World Trade Center is documented in the 9/11 Commission's report. The documented precursor attacks are the 1993 WTC bombing, the 1998 embassy bombings, and the 2000 USS Cole bombing." },
          { text: "There is no documented pattern — 9/11 is recorded as the first attack tied to al-Qaeda against any target", correct: false, explanation: "This is incorrect. Al-Qaeda was tied to multiple earlier attacks well before 2001, including the 1993 World Trade Center bombing." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Years since the September 11 attacks"
        fields={[
          { key: "year", label: "Current year", defaultValue: 2026 },
        ]}
        resultLabel="Years since September 11, 2001"
        formula="yearsSinceYear"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you go through airport security screening, recognize it as a direct, lasting policy change that followed the September 11 attacks.",
          "When you hear 9/11 described as coming entirely without precedent, remember the documented pattern of earlier al-Qaeda attacks the 9/11 Commission identified beforehand.",
          "If you visit the National September 11 Memorial & Museum, notice that the twin reflecting pools sit exactly within the original towers' footprints.",
          "When reading about the war in Afghanistan, connect it back to its documented starting point — the U.S. military campaign launched in October 2001, weeks after the attacks.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How many people died in the 9/11 attacks?", answer: "The National September 11 Memorial & Museum documents 2,977 people killed across all four attack sites (the World Trade Center, the Pentagon, and near Shanksville, Pennsylvania), not counting the 19 hijackers. Thousands more have since died from illnesses linked to toxic dust exposure during rescue and recovery work, tracked separately through the World Trade Center Health Program." },
          { question: "Who was responsible for the September 11 attacks?", answer: "The 9/11 Commission's 2004 report identified al-Qaeda, a militant extremist network, as responsible for planning and carrying out the attacks, which were conducted by 19 hijackers who took control of four commercial airplanes." },
          { question: "What happened to Flight 93 on 9/11?", answer: "United Airlines Flight 93 was the fourth hijacked plane. According to the 9/11 Commission and the National Archives, passengers and crew, aware of the other attacks through phone calls, attempted to retake control of the aircraft, which then crashed in a field near Shanksville, Pennsylvania, before reaching its believed intended target." },
          { question: "How did 9/11 change airport security?", answer: "The Transportation Security Administration was created in November 2001 to take over airport security screening nationwide, replacing a patchwork of private contractors, and aviation security procedures were tightened worldwide in the months and years that followed." },
          { question: "When was Osama bin Laden killed?", answer: "U.S. forces killed Osama bin Laden, identified as al-Qaeda's leader, in a raid in Pakistan in May 2011, nearly a decade after the September 11 attacks." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
