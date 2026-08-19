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
  title: "World War I Overview",
  category: "history-timeline-facts",
  order: 28,
  subtopic: "19th-and-early-20th-century",
  tags: ["world war i", "first world war", "1914", "trench warfare", "treaty of versailles", "20th century history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "World War I (1914-1918) killed roughly 20 million people and grew out of years of alliance-building and rivalry — the assassination that triggered it was a spark, not the sole cause.",
  summary: "World War I was a global conflict fought from 1914 to 1918, primarily between the Allied Powers (including France, Britain, Russia, and later the United States) and the Central Powers (Germany, Austria-Hungary, and the Ottoman Empire), triggered by the assassination of Archduke Franz Ferdinand but rooted in decades of alliance systems, militarism, and imperial competition.",
  sources: [
    { label: "Imperial War Museums — What Caused the First World War?", url: "https://www.iwm.org.uk/history/what-caused-the-first-world-war" },
    { label: "National WWI Museum and Memorial — WWI History", url: "https://www.theworldwar.org/learn/wwi" },
    { label: "Encyclopaedia Britannica — World War I", url: "https://www.britannica.com/event/World-War-I" },
    { label: "U.S. National Archives — World War I Records", url: "https://www.archives.gov/research/military/ww1" },
  ],
  seeAlso: [
    "history-timeline-facts/the-russian-revolution",
    "history-timeline-facts/the-great-depression",
    "history-timeline-facts/unification-of-germany-and-italy",
  ],
  glossary: [
    { term: "Central Powers", definition: "The alliance led by Germany, Austria-Hungary, and the Ottoman Empire (joined by Bulgaria) that fought against the Allied Powers in World War I." },
    { term: "Allied Powers", definition: "The World War I alliance including France, the British Empire, Russia (until 1917), Italy (from 1915), and the United States (from 1917), among others." },
    { term: "Trench warfare", definition: "A style of fighting using deep defensive trenches facing each other across \"no man's land,\" which dominated the Western Front and produced enormous casualties for minimal territorial gain." },
    { term: "Armistice", definition: "A formal agreement to stop fighting; the World War I armistice took effect on 11 November 1918, though the formal peace treaty followed later, in 1919." },
    { term: "Treaty of Versailles", definition: "The 1919 peace treaty that formally ended World War I between Germany and the Allied Powers, imposing substantial territorial losses, military restrictions, and reparations on Germany." },
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
          "The assassination of Archduke Franz Ferdinand of Austria-Hungary on 28 June 1914 was the trigger, not the sole cause — decades of alliance systems, militarism, nationalism, and imperial rivalry among European powers had already made a large-scale war likely.",
          "World War I introduced industrial-scale warfare — machine guns, poison gas, tanks, and trench warfare — that produced roughly 20 million deaths (military and civilian) and over 21 million wounded between 1914 and 1918.",
          "The war reshaped the world map and politics well beyond 1918: it directly contributed to the Russian Revolution of 1917, the collapse of the Ottoman, Austro-Hungarian, German, and Russian empires, and terms in the 1919 Treaty of Versailles that historians widely link to the conditions enabling World War II two decades later.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">World War I was a massive global conflict fought mainly in Europe from 1914 to 1918, though it involved colonies and forces from across the world. On one side were the <TermLink href="/history-timeline-facts/world-war-i-overview">Allied Powers</TermLink> — France, Britain and its empire, Russia, and later Italy and the United States. On the other were the <TermLink href="/history-timeline-facts/world-war-i-overview">Central Powers</TermLink> — Germany, Austria-Hungary, and the Ottoman Empire. It&apos;s often remembered for the assassination of Archduke Franz Ferdinand of Austria-Hungary, which set off a rapid chain of declarations of war, but that single event only worked as a trigger because European powers were already bound together by military alliances, arms races, and colonial rivalries that turned a regional crisis into a continent-wide, then global, war.</div>}
        detailed={<div className="prose-p">Historians typically group World War I&apos;s causes into four interlocking factors, sometimes summarized as M-A-I-N: Militarism (a decades-long arms race, especially the British-German naval rivalry), Alliances (a web of mutual-defense treaties — the Triple Alliance of Germany, Austria-Hungary, and Italy against the Triple Entente of France, Russia, and Britain — that meant a conflict between any two members could pull in the rest), Imperialism (competition over colonies feeding resentment and rivalry, especially between Britain, France, and a newly ambitious Germany), and Nationalism (including Slavic nationalism in the Balkans, where Serbian nationalist groups sought independence from Austro-Hungarian control). When Gavrilo Princip, a Bosnian Serb nationalist, assassinated Archduke Franz Ferdinand in Sarajevo, Austria-Hungary issued an ultimatum to Serbia; Russia mobilized to support Serbia; Germany, bound to Austria-Hungary by alliance, declared war on Russia and France; and Britain entered after Germany invaded neutral Belgium — all within about five weeks of the assassination. The resulting <TermLink href="/history-timeline-facts/world-war-i-overview">trench warfare</TermLink> on the Western Front became infamous for its brutal stalemate: battles like the Somme (1916) and Verdun (1916) each produced hundreds of thousands of casualties for territorial gains often measured in mere miles.</div>}
      />
      <FootnoteAside>The 1914 Christmas Truce saw thousands of British and German soldiers on parts of the Western Front spontaneously stop fighting, exchange gifts, and reportedly play informal football matches in no man&apos;s land — a widely documented event that military commanders on both sides moved quickly to prevent from happening again in subsequent years.</FootnoteAside>
      <p>
      That unofficial truce is a reminder that the individual soldiers fighting the war weren&apos;t the ones who chose its causes — a useful frame for understanding why the war&apos;s origins get so much attention from historians even a century later.
      </p>

      <QuickCheck
        question="Was the assassination of Archduke Franz Ferdinand the sole cause of World War I?"
        options={[
          { text: "Yes — the war began entirely because of that single assassination, with no other contributing factors", correct: false, explanation: "The assassination was the immediate trigger, but historians point to decades of militarism, alliance systems, imperialism, and nationalism as the deeper, longer-building causes that made a wider war possible." },
          { text: "No — the assassination was the trigger, but militarism, alliance systems, imperial rivalry, and nationalism had built the conditions for a wider war for decades beforehand", correct: true, explanation: "Correct. The assassination set off a rapid chain reaction only because European powers were already bound by alliances and rivalries that turned a regional crisis into a continental, then global, war." },
          { text: "No — the war had nothing to do with the assassination and began for entirely unrelated economic reasons", correct: false, explanation: "The assassination was a genuine and direct trigger — it started the diplomatic crisis and alliance chain reaction that led to declarations of war within about five weeks." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">The July Crisis and the alliance chain reaction, 1914 (baseline case)</h3>
      <div className="prose-p">
      Following the assassination in Sarajevo on 28 June 1914, Austria-Hungary issued Serbia a deliberately harsh ultimatum, and rejected Serbia&apos;s largely compliant response as inadequate, declaring war on 28 July. Russia, allied with Serbia, began mobilizing its army; Germany, bound to Austria-Hungary, declared war on Russia and then France; and when German forces invaded neutral Belgium to reach France, Britain declared war on Germany on 4 August. Within roughly five weeks, a regional Balkan crisis had become a war between the continent&apos;s major powers — a direct illustration of how the alliance system was designed to deter war but instead spread it.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">The Battle of the Somme and trench warfare stalemate, 1916 (variation / grinding case)</h3>
      <div className="prose-p">
      The Battle of the Somme (July-November 1916) is one of the war&apos;s most infamous engagements: on its first day alone, British forces suffered roughly 57,000 casualties, the worst single-day loss in British military history, and the battle&apos;s full length produced over a million casualties on both sides combined for a territorial gain of only a few miles. This case illustrates why the Western Front became a symbol of industrial warfare&apos;s brutal inefficiency — machine guns, artillery, and barbed wire heavily favored defenders, turning attacks into repeated, costly failures rather than decisive breakthroughs.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">How WWI still shapes the modern Middle East and Europe (real-world / applied case)</h3>
      <div className="prose-p">
      World War I&apos;s consequences are still visible on today&apos;s map. The collapse of the Ottoman Empire led to European powers (Britain and France) drawing new borders across the Middle East under League of Nations mandates, creating states like Iraq and Syria along lines that didn&apos;t always reflect existing ethnic or religious communities — a pattern historians frequently connect to later regional tensions. Closer to Western Europe, the punitive terms of the 1919 Treaty of Versailles, including its &quot;war guilt&quot; clause and heavy reparations imposed on Germany, are widely cited by historians as contributing to the economic hardship and resentment that helped enable the rise of Nazism and, ultimately, World War II just two decades later.
      </div>

      <QuickCheck
        question="Why is the Battle of the Somme (1916) often used as a symbol of World War I's trench warfare?"
        options={[
          { text: "It ended the war quickly with a decisive Allied breakthrough", correct: false, explanation: "The opposite occurred — the battle was extremely costly and produced only a few miles of territorial gain despite over a million total casualties." },
          { text: "It produced enormous casualties (including roughly 57,000 British casualties on the first day alone) for very limited territorial gain, illustrating the deadly stalemate of trench warfare", correct: true, explanation: "Correct. The Somme is frequently cited as the clearest example of how machine guns, artillery, and entrenched defenses turned attacks into repeated, extremely costly failures on the Western Front." },
          { text: "It was fought entirely at sea between British and German naval fleets", correct: false, explanation: "The Somme was a land battle on the Western Front in France, not a naval engagement." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Timeline: World War I, from assassination to armistice, 1914-1918"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-world-war-i-overview-timeline.svg"
        altText="Horizontal timeline from June 1914 to November 1918 showing the assassination of Archduke Franz Ferdinand in June 1914, the rapid chain of declarations of war through August 1914, the establishment of trench warfare on the Western Front, Russia's exit from the war following the 1917 Russian Revolution, the United States' entry in 1917, and the armistice ending the fighting on 11 November 1918, followed by the 1919 Treaty of Versailles."
      />
      <p>
      Two turning points sit inside this timeline worth tracing separately: Russia&apos;s 1917 exit from the war, driven by the Russian Revolution and its own internal collapse, and the United States&apos; 1917 entry, which brought fresh troops and resources that helped tip the balance toward the Allies in 1918 — the war&apos;s ending was shaped as much by who left and who joined as by battlefield victories.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating the assassination of Archduke Franz Ferdinand as the war's sole cause.", fix: "It was the trigger for a crisis that escalated because of pre-existing alliance systems, militarism, imperial rivalry, and nationalism — remove any of those deeper factors and the assassination alone likely wouldn't have caused a world war." },
          { mistake: "Assuming World War I was fought only in Europe.", fix: "Fighting and colonial troop involvement extended to Africa, the Middle East, and Asia, and the war drew in forces from across the British, French, and Ottoman empires, plus Japan and eventually the United States." },
          { mistake: "Confusing the armistice (11 November 1918, which stopped the fighting) with the formal end of the war (the Treaty of Versailles, signed in 1919).", fix: "The armistice halted combat; the actual peace treaty that formally ended the war between Germany and the Allies wasn't signed until several months later, in June 1919." },
        ]}
      />
      <MisconceptionCallout
        myth="World War I started 'suddenly,' with the assassination of Franz Ferdinand as its only real cause."
        reality={<p>The assassination on 28 June 1914 was a genuine trigger, but the war it set off had been made possible by decades of prior tension: a European arms race, especially between Britain and Germany&apos;s navies; a web of mutual-defense alliances that pulled multiple great powers into what began as a regional Austro-Serbian dispute; ongoing colonial and imperial rivalry; and rising nationalist movements, particularly in the Balkans. Historians commonly describe the assassination as the &quot;spark&quot; that ignited pre-existing &quot;kindling,&quot; not as an isolated, sufficient cause on its own.</p>}
      />

      <QuickCheck
        question="What is the most accurate way to describe the relationship between the 1914 assassination and the war's underlying causes?"
        options={[
          { text: "The assassination and the underlying causes are unrelated — the war would have started at the same time regardless", correct: false, explanation: "The assassination was the specific event that set the crisis in motion — it wasn't unrelated, it was the trigger that activated the pre-existing tensions." },
          { text: "The assassination was the spark; alliance systems, militarism, imperialism, and nationalism were the pre-existing kindling that let that spark spread into a world war", correct: true, explanation: "Correct. This is the standard framing historians use — the assassination alone wouldn't have caused a world war without the deeper structural tensions already in place." },
          { text: "The underlying causes made the assassination itself inevitable, meaning Franz Ferdinand was specifically targeted for those broader political reasons alone", correct: false, explanation: "The assassination was carried out by a Bosnian Serb nationalist group seeking Slavic independence from Austro-Hungarian rule — a specific, real motive — rather than being some inevitable, abstract byproduct of the broader European tensions." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time someone says World War I 'started because of one assassination,' mention the alliance system, militarism, imperialism, and nationalism that made that assassination so consequential.",
          "When you see a map of the modern Middle East, note that many of its borders trace back to post-WWI mandates drawn by Britain and France rather than earlier regional boundaries.",
          "Notice the distinction between the 1918 armistice (fighting stopped) and the 1919 Treaty of Versailles (the war was formally, legally ended) next time either date comes up.",
          "Read the related entries on the Russian Revolution and the Great Depression to see how WWI's economic and political shockwaves extended well past 1918.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What caused World War I?", answer: "A combination of long-building factors — militarism, a web of alliance systems, imperial rivalry, and nationalism — with the assassination of Archduke Franz Ferdinand of Austria-Hungary in June 1914 acting as the immediate trigger that set off a rapid chain of declarations of war." },
          { question: "When did World War I start and end?", answer: "It began in late July/early August 1914, following the assassination of Franz Ferdinand and the resulting alliance chain reaction, and the fighting ended with the armistice on 11 November 1918. The formal peace treaty, the Treaty of Versailles, was signed in June 1919." },
          { question: "Who fought in World War I?", answer: "The main opposing sides were the Allied Powers (France, the British Empire, Russia until 1917, Italy from 1915, and the United States from 1917, among others) and the Central Powers (Germany, Austria-Hungary, and the Ottoman Empire, joined by Bulgaria)." },
          { question: "How many people died in World War I?", answer: "Estimates commonly cited by historians put total deaths, military and civilian, at roughly 15-20 million, with over 21 million more wounded — among the deadliest conflicts in human history up to that point." },
          { question: "How did World War I lead to World War II?", answer: "The Treaty of Versailles imposed heavy reparations and territorial losses on Germany, along with a clause assigning it blame for the war. Historians widely cite the resulting economic hardship and resentment in Germany as a significant contributing factor to the political instability that enabled the rise of Nazism and, ultimately, World War II roughly two decades later." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
