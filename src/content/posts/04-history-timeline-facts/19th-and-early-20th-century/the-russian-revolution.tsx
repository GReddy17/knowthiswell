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
  title: "The Russian Revolution",
  category: "history-timeline-facts",
  order: 29,
  subtopic: "19th-and-early-20th-century",
  tags: ["russian revolution", "bolsheviks", "vladimir lenin", "tsar nicholas ii", "1917", "soviet union origins"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The Russian Revolution was actually two revolutions in 1917, not one — the February Revolution toppled the Tsar, and the October Revolution brought the Bolsheviks to power months later.",
  summary: "The Russian Revolution refers to the two 1917 upheavals that ended centuries of tsarist rule in Russia — the February Revolution, which forced Tsar Nicholas II to abdicate and installed a Provisional Government, and the October Revolution, in which the Bolshevik Party led by Vladimir Lenin seized power and began building what became the Soviet Union.",
  sources: [
    { label: "Library of Congress — Revelations from the Russian Archives", url: "https://www.loc.gov/exhibits/archives/intro.html" },
    { label: "Encyclopaedia Britannica — Russian Revolution of 1917", url: "https://www.britannica.com/event/Russian-Revolution-of-1917" },
    { label: "Seventeen Moments in Soviet History (Michigan State University archive)", url: "https://soviethistory.msu.edu/" },
    { label: "National WWI Museum and Memorial — Russia and WWI", url: "https://www.theworldwar.org/learn/wwi" },
  ],
  seeAlso: [
    "history-timeline-facts/world-war-i-overview",
    "history-timeline-facts/the-great-depression",
    "history-timeline-facts/historical-figures/world-leaders-who-changed-history",
  ],
  glossary: [
    { term: "Bolshevik", definition: "A member of the radical Marxist faction of the Russian Social Democratic Labour Party led by Vladimir Lenin, which seized power in the October 1917 revolution." },
    { term: "Provisional Government", definition: "The temporary government that ruled Russia between the Tsar's abdication in February 1917 and the Bolshevik seizure of power in October 1917." },
    { term: "Soviet", definition: "A council of workers, soldiers, or peasants; also used for the broader political system and, eventually, the country name (Soviet Union) that emerged from the revolution." },
    { term: "Russian Civil War", definition: "The 1917-1922 conflict between the Bolshevik \"Red\" forces and a loose coalition of anti-Bolshevik \"White\" forces, ending in Bolshevik victory and the consolidation of Soviet rule." },
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
          "\"The Russian Revolution\" actually refers to two separate 1917 events: the February Revolution, which ended over 300 years of Romanov tsarist rule, and the October Revolution roughly eight months later, in which the Bolshevik Party seized power from the Provisional Government that had replaced the Tsar.",
          "World War I was a direct catalyst — military defeats, mass casualties, and severe food and fuel shortages on the home front eroded public support for Tsar Nicholas II and later for the Provisional Government that failed to withdraw Russia from the war.",
          "The Bolsheviks' 1917 seizure of power led directly to a brutal, multi-year Russian Civil War (1917-1922) and the eventual founding of the Soviet Union in 1922, reshaping global politics for the rest of the 20th century.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The Russian Revolution is usually taught as one event, but it was really two, both happening in 1917. In February (by Russia&apos;s old calendar; March by the modern calendar), mass protests, strikes, and a mutinying army forced Tsar Nicholas II to give up the throne, ending centuries of Romanov family rule. A new, moderate <TermLink href="/history-timeline-facts/the-russian-revolution">Provisional Government</TermLink> took over, but it struggled to fix Russia&apos;s deep problems — especially staying in an unpopular, costly World War I. In October, the radical <TermLink href="/history-timeline-facts/the-russian-revolution">Bolshevik</TermLink> Party, led by Vladimir Lenin, seized power in a rapid uprising, promising &quot;peace, land, and bread&quot; to a war-weary population, and began building the Communist state that eventually became the Soviet Union.</div>}
        detailed={<div className="prose-p">The gap between the two 1917 revolutions matters enormously for understanding what actually happened. The February Revolution was largely spontaneous — triggered by bread shortages, war exhaustion, and a garrison mutiny in the capital, Petrograd — and it produced a period of &quot;dual power,&quot; where the official Provisional Government (led eventually by Alexander Kerensky) shared authority uneasily with the Petrograd Soviet, a council of workers&apos; and soldiers&apos; representatives with real grassroots influence. The Provisional Government&apos;s fatal error, in most historians&apos; assessment, was continuing to fight in World War I despite the war&apos;s deep unpopularity, and delaying land reform that peasants urgently wanted. The Bolsheviks, a minority but highly organized Marxist faction, exploited this failure: Lenin returned from exile in April 1917 (transported through Germany in a sealed train, since Germany hoped Russian political chaos would knock Russia out of the war) and pushed his party toward armed insurrection. The October Revolution itself was comparatively swift and low-casualty in Petrograd — Bolshevik forces, coordinated by Leon Trotsky, seized key government buildings and the Winter Palace with relatively little resistance, a sharp contrast to the mass unrest of February. Consolidating that power, however, required years of brutal civil war against a loose coalition of anti-Bolshevik &quot;White&quot; forces before Bolshevik (Soviet) control of the former Russian Empire was secured.</div>}
      />
      <FootnoteAside>Russia was still using the Julian calendar in 1917, thirteen days behind the Gregorian calendar used in Western Europe — which is why the &quot;February Revolution&quot; actually occurred in early March by the modern calendar, and the &quot;October Revolution&quot; in early November. The Soviet government switched Russia to the Gregorian calendar in 1918.</FootnoteAside>
      <p>
      That calendar quirk is a small but telling reminder that &quot;February&quot; and &quot;October&quot; are historical labels tied to Russia&apos;s own calendar at the time, not literal modern-calendar dates — a detail that trips up many people encountering the timeline for the first time.
      </p>

      <QuickCheck
        question="Is 'the Russian Revolution' one event or two?"
        options={[
          { text: "One single event that happened in October 1917", correct: false, explanation: "This skips the earlier, separate February Revolution, which had already ended tsarist rule months before the Bolsheviks took power in October." },
          { text: "Two separate 1917 events: the February Revolution, which ended tsarist rule, and the October Revolution, in which the Bolsheviks seized power from the Provisional Government", correct: true, explanation: "Correct. These were distinct events roughly eight months apart, with a Provisional Government ruling in between — treating them as one blurs an important part of the actual sequence." },
          { text: "Two unrelated events separated by several decades", correct: false, explanation: "Both revolutions happened within the same year, 1917, not decades apart — and they were directly connected, since the Bolsheviks seized power from the government the February Revolution had installed." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">The February Revolution and the abdication of Tsar Nicholas II (baseline case)</h3>
      <div className="prose-p">
      In late February 1917 (old calendar), bread shortages and war fatigue triggered mass strikes and protests in Petrograd. When soldiers ordered to suppress the protests instead mutinied and joined them, the Tsar&apos;s authority collapsed within days, and Nicholas II abdicated on 2 March (new calendar), ending over 300 years of Romanov rule. This wasn&apos;t a planned Bolshevik operation — it was a largely spontaneous popular uprising that caught even revolutionary leaders by surprise, including Lenin, who was still in exile in Switzerland at the time.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">The October Revolution and the Bolshevik seizure of power (variation / organized case)</h3>
      <div className="prose-p">
      Unlike the spontaneous February uprising, the October Revolution was a deliberate, organized insurrection. On the night of 24-25 October 1917 (old calendar), Bolshevik Red Guards, coordinated by Leon Trotsky, seized key infrastructure — bridges, telegraph offices, train stations — and stormed the Winter Palace, arresting the Provisional Government&apos;s ministers with comparatively little bloodshed in the capital itself. The Bolsheviks then moved quickly to consolidate power, issuing decrees on land redistribution and withdrawing Russia from World War I, fulfilling core promises from Lenin&apos;s &quot;peace, land, and bread&quot; platform.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">How 1917 still shapes Russia and global politics today (real-world / applied case)</h3>
      <div className="prose-p">
      The events of 1917 led directly to the founding of the Soviet Union in 1922 after a brutal civil war, establishing the world&apos;s first major Communist state and setting up a global ideological rivalry with capitalist democracies that defined much of the 20th century, including the Cold War. Even today, historians and Russian political culture continue to actively debate the revolution&apos;s legacy — modern Russia has, at different points, downplayed, distanced itself from, or selectively honored the Soviet period, and the events of 1917 remain a frequent reference point in discussions of revolution, authoritarianism, and state power more broadly.
      </div>

      <QuickCheck
        question="How did the October Revolution differ from the February Revolution in how it happened?"
        options={[
          { text: "October was a spontaneous mass uprising; February was a small, organized military operation", correct: false, explanation: "This reverses the actual pattern — February was the spontaneous mass uprising, and October was the organized, deliberate operation." },
          { text: "February was a largely spontaneous popular uprising; October was a deliberate, organized insurrection led by the Bolshevik Party", correct: true, explanation: "Correct. February caught even revolutionary leaders by surprise, while October was a planned seizure of power coordinated by Leon Trotsky under Lenin's direction." },
          { text: "Both were identical in scale, organization, and level of violence", correct: false, explanation: "They differed significantly — February involved mass strikes, protests, and a garrison mutiny, while October was a comparatively swift, targeted seizure of key buildings with less immediate bloodshed in the capital." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Timeline: the Russian Revolution, February to October 1917 and its aftermath"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-the-russian-revolution-timeline.svg"
        altText="Horizontal timeline from February 1917 to 1922 showing the February Revolution and abdication of Tsar Nicholas II, the period of dual power between the Provisional Government and the Petrograd Soviet, Lenin's return to Russia in April 1917, the October Revolution and Bolshevik seizure of power, Russia's exit from World War I via the Treaty of Brest-Litovsk in 1918, the Russian Civil War from 1917 to 1922, and the formal founding of the Soviet Union in 1922."
      />
      <p>
      The five years between the October Revolution and the formal founding of the Soviet Union in 1922 are easy to skip over, but they were the hardest-fought part of the story — the Bolsheviks had seized power in the capital relatively easily, but securing control over the vast former Russian Empire required winning a grinding, multi-year civil war against a range of opposing forces first.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating the Russian Revolution as a single event that happened in October 1917.", fix: "It was two events: the February Revolution ended tsarist rule, and the separate October Revolution, months later, brought the Bolsheviks to power over the Provisional Government that had replaced the Tsar." },
          { mistake: "Assuming Lenin and the Bolsheviks personally overthrew the Tsar.", fix: "The February Revolution that ended tsarist rule was a largely spontaneous popular uprising — Lenin was still in exile in Switzerland when it happened, and the Bolsheviks didn't seize power until the separate October Revolution months later." },
          { mistake: "Confusing the Russian Revolution (1917) with the founding of the Soviet Union (1922).", fix: "Five years of brutal civil war separated the Bolsheviks' 1917 seizure of power in Petrograd from the formal establishment of the Soviet Union in 1922, once Bolshevik control over the wider former empire was secured." },
        ]}
      />
      <MisconceptionCallout
        myth="The Russian Revolution was a single event rather than two revolutions in 1917 (February and October)."
        reality={<p>Russia experienced two distinct 1917 revolutions. The February Revolution (March by the modern calendar) was a largely spontaneous popular uprising driven by war exhaustion and bread shortages that forced Tsar Nicholas II to abdicate, ending centuries of Romanov rule and installing a moderate Provisional Government. The October Revolution (November by the modern calendar), roughly eight months later, was a separate, deliberately organized Bolshevik insurrection that overthrew that Provisional Government. Collapsing these into one event obscures both the spontaneous nature of the Tsar&apos;s fall and the deliberate, organized nature of the Bolshevik takeover that followed it.</p>}
      />

      <QuickCheck
        question="What replaced the Tsar's government immediately after the February Revolution, before the Bolsheviks took power?"
        options={[
          { text: "The Bolshevik Party took power immediately after the Tsar's abdication", correct: false, explanation: "The Bolsheviks did not take power until the separate October Revolution, roughly eight months after the Tsar's abdication." },
          { text: "A moderate Provisional Government, which shared uneasy authority with the Petrograd Soviet during a period historians call 'dual power'", correct: true, explanation: "Correct. This Provisional Government ruled from February to October 1917, but its failure to exit World War I or address land reform contributed directly to its later overthrow by the Bolsheviks." },
          { text: "No government at all — Russia had no functioning national government between February and October 1917", correct: false, explanation: "A Provisional Government did exist and functioned as Russia's official government throughout this period, even though it shared real influence with the Petrograd Soviet." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time \"the Russian Revolution\" comes up, mentally separate it into February (Tsar's fall) and October (Bolshevik takeover) — it changes how the whole sequence reads.",
          "Notice how often revolutions get compressed into a single date in casual retellings — check whether a 'sudden' revolution actually had a similar buildup and multi-stage structure.",
          "When you see the labels \"Red\" and \"White\" in a Russian Civil War context, remember these refer to the Bolshevik and anti-Bolshevik coalitions fighting from 1917 to 1922, not literal armies of a single color.",
          "Read the related entry on World War I to see how the war's strain on Russia directly enabled both 1917 revolutions.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between the February Revolution and the October Revolution?", answer: "The February Revolution (March 1917 by the modern calendar) was a largely spontaneous uprising that forced Tsar Nicholas II to abdicate, ending tsarist rule. The October Revolution (November 1917), roughly eight months later, was a deliberate, organized Bolshevik insurrection that overthrew the Provisional Government that had replaced the Tsar." },
          { question: "Why did the Russian Revolution happen?", answer: "Long-building causes included deep inequality, an autocratic and unresponsive tsarist government, and industrial-era social change. World War I acted as a direct catalyst, causing military defeats, mass casualties, and severe food and fuel shortages that eroded public support for both the Tsar and, later, the Provisional Government." },
          { question: "Who led the Russian Revolution?", answer: "The February Revolution had no single leader — it was a largely spontaneous popular uprising. The October Revolution was led by the Bolshevik Party under Vladimir Lenin, with Leon Trotsky coordinating the actual seizure of power in Petrograd." },
          { question: "What happened to Tsar Nicholas II after he abdicated?", answer: "Nicholas II and his immediate family were held under guard by the Provisional Government and later by the Bolsheviks, and were executed by Bolshevik forces in Yekaterinburg in July 1918, during the Russian Civil War." },
          { question: "How did the Russian Revolution lead to the Soviet Union?", answer: "After the October 1917 Bolshevik seizure of power, a multi-year Russian Civil War (1917-1922) was fought between Bolshevik ('Red') and anti-Bolshevik ('White') forces. Bolshevik victory allowed the formal founding of the Soviet Union in 1922, consolidating Communist rule over most of the former Russian Empire." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
