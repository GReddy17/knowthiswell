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
  title: "World War II Overview",
  category: "history-timeline-facts",
  order: 31,
  subtopic: "mid-20th-century",
  tags: ["world war 2", "world war ii", "wwii", "20th century history", "allied powers", "axis powers"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "World War II (1939-1945) was fought across two connected but distinct theaters, Europe and the Pacific, and remains the deadliest conflict in recorded history.",
  summary: "World War II was a global conflict fought from 1939 to 1945 between the Allied powers and the Axis powers, spanning European, Pacific, North African, and other theaters, and it remains the deadliest war in recorded history.",
  sources: [
    { label: "Encyclopaedia Britannica — World War II", url: "https://www.britannica.com/event/World-War-II" },
    { label: "The National WWII Museum — Research Starters: Worldwide Deaths in World War II", url: "https://www.nationalww2museum.org/students-teachers/student-resources/research-starters/research-starters-worldwide-deaths-world-war-ii" },
    { label: "U.S. National Archives — World War II Records", url: "https://www.archives.gov/research/military/ww2" },
  ],
  seeAlso: [
    "history-timeline-facts/the-holocaust-factual-respectful-historical-overview",
    "history-timeline-facts/decolonization-movement",
    "history-timeline-facts/the-cold-war-overview",
  ],
  glossary: [
    { term: "Axis powers", definition: "The wartime alliance led principally by Germany, Italy, and Japan that opposed the Allied powers." },
    { term: "Allied powers", definition: "The wartime coalition opposing the Axis, led principally by the United Kingdom, the Soviet Union, the United States, and China, alongside many other nations." },
    { term: "Theater (of war)", definition: "A geographic region where major military operations took place — for example, the European theater or the Pacific theater." },
    { term: "D-Day", definition: "June 6, 1944 — the Allied amphibious invasion of Normandy, France, which opened a major Western front against Germany in Europe." },
    { term: "V-E Day / V-J Day", definition: "Victory in Europe Day (May 8, 1945) and Victory over Japan Day (September 2, 1945) — the two separate dates marking the formal end of fighting in each theater." },
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
          "World War II (September 1, 1939 - September 2, 1945) was fought as two large, connected but distinct theaters — Europe/North Africa/the Atlantic, and the Pacific/Asia — that did not end on the same date.",
          "It is the deadliest conflict in recorded history: historians' estimates for total deaths, combatant and civilian combined, generally fall in the range of 70 to 85 million people, according to the National WWII Museum.",
          "The war reshaped global power structures — it produced the United States and the Soviet Union as dominant superpowers, set up the Cold War rivalry between them, and accelerated the decolonization of Asia and Africa in the decades that followed.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">World War II began on September 1, 1939, when Germany invaded Poland, prompting the United Kingdom and France to declare war on Germany within days. Over the next two years the conflict widened dramatically — Germany invaded the Soviet Union in June 1941, and Japan&apos;s attack on the U.S. naval base at Pearl Harbor on December 7, 1941 brought the United States into the war on both the European and Pacific fronts. Fighting in Europe ended with Germany&apos;s unconditional surrender on May 8, 1945 (V-E Day). Fighting in the Pacific continued for nearly four more months, ending only after atomic bombs were dropped on Hiroshima and Nagasaki in August 1945 and Japan formally surrendered on September 2, 1945 (V-J Day).</div>}
        detailed={<div className="prose-p">The <TermLink href="/history-timeline-facts/world-war-ii-overview">Axis powers</TermLink> (principally Germany, Italy, and Japan) fought against a shifting coalition of <TermLink href="/history-timeline-facts/world-war-ii-overview">Allied powers</TermLink> that eventually included the United Kingdom, the Soviet Union, the United States, China, and dozens of other nations. Historians commonly mark the war&apos;s turning points as the Battle of Stalingrad (1942-43), where Germany suffered a catastrophic defeat on the Eastern Front, and the Allied landings at Normandy on D-Day (June 6, 1944), which opened a major second front in Western Europe. A key edge case worth knowing: Japan had already been at war with China since 1937, years before the conflict is usually dated as starting in Europe — some historians therefore treat 1937, not 1939, as the true opening of the Pacific war, even though the globally taught start date remains September 1939. The war&apos;s human cost was overwhelmingly civilian: strategic bombing campaigns, sieges, forced deportations, mass starvation, and genocide (the Holocaust, carried out by Nazi Germany, is documented separately given its scale and deliberate intent) killed far more non-combatants than the fighting itself killed soldiers.</div>}
      />
      <FootnoteAside>The United Nations, founded in San Francisco in 1945 before the war had even fully ended in the Pacific, was a direct institutional response to the conflict — its original 51 member states were, with only a few exceptions, the wartime Allied nations, and the five permanent members of its Security Council today (the US, UK, France, Russia as the Soviet Union&apos;s successor, and China) are exactly the war&apos;s principal victorious Allied powers.</FootnoteAside>
      <p>
      That link between WWII&apos;s ending and the institutions still governing international relations today is a useful thread to keep pulling — it shows up again directly in the entries on the Cold War and decolonization.
      </p>

      <QuickCheck
        question="Which event directly brought the United States into World War II as a combatant?"
        options={[
          { text: "Germany's invasion of Poland in September 1939", correct: false, explanation: "That event started the war in Europe, but the U.S. did not enter as a combatant at that point — it provided material support to the Allies (via the 1941 Lend-Lease Act) while formally remaining out of the fighting." },
          { text: "Japan's attack on Pearl Harbor on December 7, 1941", correct: true, explanation: "Correct. The attack on the U.S. naval base at Pearl Harbor, Hawaii, on December 7, 1941 led the United States to declare war on Japan the next day, and Germany and Italy then declared war on the United States days later." },
          { text: "The D-Day landings at Normandy in June 1944", correct: false, explanation: "By D-Day, the United States had already been fighting in the war for two and a half years — this was a major offensive operation the U.S. participated in, not its entry point into the conflict." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The European theater&apos;s turning points (baseline case)</h3>
      <div className="prose-p">
      The war in Europe followed a fairly traceable arc: Germany&apos;s rapid early conquests (1939-1941), the failed invasion of the Soviet Union that bogged down at Stalingrad (1942-43) and marked the start of Germany&apos;s retreat on the Eastern Front, the D-Day landings opening a Western front (June 6, 1944), and Germany&apos;s unconditional surrender on May 8, 1945, after Soviet forces had reached Berlin. This is the sequence most commonly taught as &quot;the war&quot; in Western classrooms, but it is only one of the war&apos;s two major theaters.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The Pacific theater ran on its own timeline (variation / exception)</h3>
      <div className="prose-p">
      Fighting between Japan and Allied forces did not stop when Germany surrendered in May 1945 — it continued for nearly four more months across the Pacific. The United States dropped atomic bombs on Hiroshima (August 6, 1945) and Nagasaki (August 9, 1945), and Japan announced its surrender on August 15, 1945, with the formal surrender ceremony held aboard the USS Missouri on September 2, 1945. This is why the war has two separate &quot;victory&quot; dates — V-E Day in May and V-J Day in September — rather than one shared ending.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The war&apos;s institutional legacy today (real-world / applied case)</h3>
      <div className="prose-p">
      WWII&apos;s ending directly shaped organizations that still function today. The United Nations was founded in 1945 to prevent a third world war; the International Monetary Fund and World Bank trace back to the 1944 Bretton Woods conference held while the war was still underway; and NATO, formed in 1949, was built on the Western Allied partnership from the war as tensions with the Soviet Union hardened into the Cold War. Recognizing a modern institution&apos;s roots in the WWII settlement is a quick way to place it correctly in history rather than treating it as a timeless fixture.
      </div>

      <QuickCheck
        question="Why does World War II have two separate 'victory' dates, V-E Day and V-J Day, instead of one shared ending?"
        options={[
          { text: "Because the European and Pacific theaters were fought against different adversaries (Germany and Japan) and ended on different dates, months apart", correct: true, explanation: "Correct. Germany surrendered May 8, 1945 (V-E Day); Japan did not formally surrender until September 2, 1945 (V-J Day) — nearly four months later." },
          { text: "Because historians disagree about when the war actually ended and use two dates as a compromise", correct: false, explanation: "Both dates are well-documented, undisputed formal surrender events — it isn't a disagreement, it's two genuinely separate endings for two genuinely separate theaters." },
          { text: "Because V-E Day marks when the U.S. entered the war and V-J Day marks when it left", correct: false, explanation: "Both dates mark endings, not the U.S.'s entry into the war (which was December 1941, after Pearl Harbor)." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="World War II: key dates from the invasion of Poland to Japan's surrender"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-world-war-ii-overview-timeline.svg"
        altText="Horizontal timeline from September 1939, Germany invades Poland, through June 1941 Germany invades the Soviet Union, December 1941 Pearl Harbor and U.S. entry, June 1944 D-Day, May 1945 V-E Day and Germany's surrender, August 1945 atomic bombings of Hiroshima and Nagasaki, ending September 1945 V-J Day and Japan's formal surrender."
      />
      <p>
      Laid out this way, the two-theater structure becomes visual rather than abstract: the European timeline compresses into under six years and closes in May 1945, while the Pacific timeline runs in parallel for most of that span and closes separately, nearly four months later.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming World War II ended on a single date everywhere.", fix: "It ended on two separate dates — V-E Day (May 8, 1945) for Europe and V-J Day (September 2, 1945) for the Pacific — nearly four months apart." },
          { mistake: "Treating the United States as fully neutral and uninvolved before Pearl Harbor.", fix: "The U.S. supplied the Allies with war materials under the Lend-Lease Act starting in March 1941, months before it entered the war as a combatant in December 1941." },
          { mistake: "Assuming most WWII deaths were soldiers killed in combat.", fix: "The majority of the war's estimated 70-85 million deaths were civilians, from causes including strategic bombing, sieges, forced deportation, famine, and genocide, per the National WWII Museum's research." },
        ]}
      />
      <MisconceptionCallout
        myth="World War II in Europe and the Pacific was a single, unified conflict that ran on the same timeline throughout."
        reality={<p>They were two large but distinct theaters, fought against different adversaries (Germany and Italy in Europe; Japan in the Pacific), that overlapped in years but not in their endings. Germany surrendered in May 1945; Japan fought on for nearly four more months before its own formal surrender in September 1945. Some historians also note that Japan&apos;s war in Asia arguably began years earlier, with its 1937 invasion of China — well before the September 1939 date usually cited as the war&apos;s global start.</p>}
      />

      <QuickCheck
        question="What does it mean to say World War II 'ran on two timelines'?"
        options={[
          { text: "Historians use two different calendars — one Western, one Eastern — to date the war", correct: false, explanation: "This isn't about calendar systems. It refers to the European and Pacific theaters genuinely ending on different real-world dates, months apart." },
          { text: "The European theater ended in May 1945 while the Pacific theater continued fighting until Japan's formal surrender in September 1945", correct: true, explanation: "Correct. Germany's surrender (V-E Day) and Japan's surrender (V-J Day) were separate events nearly four months apart, which is why the war doesn't have one single end date." },
          { text: "It refers to the war being fought simultaneously in the past and being reenacted in the present through memorials", correct: false, explanation: "This describes commemoration, not the historical timeline itself — the 'two timelines' point is about the two theaters' genuinely separate end dates in 1945." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="How many years since World War II ended (V-J Day, 1945)?"
        fields={[
          { key: "year", label: "Reference year (defaults to WWII's end, 1945)", defaultValue: 1945 },
        ]}
        resultLabel="Years elapsed to today"
        formula="yearsSinceYear"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a WWII date, check whether it's a European-theater date or a Pacific-theater date — they don't share a single timeline.",
          "When you encounter a WWII casualty figure, remember the majority represents civilians, not soldiers killed in combat.",
          "Notice how often a modern international institution (the UN, IMF, World Bank, NATO) traces its founding directly back to the WWII settlement.",
          "Read the entry on the Holocaust for the deliberate, documented genocide Nazi Germany carried out during the war, and the entries on decolonization and the Cold War for what followed the war's end.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "When did World War II start and end?", answer: "It started September 1, 1939, when Germany invaded Poland. It ended in two stages: V-E Day (Victory in Europe), May 8, 1945, and V-J Day (Victory over Japan), September 2, 1945." },
          { question: "How many people died in World War II?", answer: "Historians' estimates vary, but the National WWII Museum places total deaths, military and civilian combined, in the range of 70 to 85 million people, making it the deadliest conflict in recorded history." },
          { question: "What caused World War II?", answer: "Causes include the unresolved grievances and economic instability left by World War I, the rise of expansionist fascist and militarist governments in Germany, Italy, and Japan, and the failure of the League of Nations and appeasement policies to stop early acts of aggression, per Encyclopaedia Britannica." },
          { question: "Why did the United States join World War II?", answer: "Japan's attack on the U.S. naval base at Pearl Harbor on December 7, 1941 led the U.S. to declare war on Japan; Germany and Italy then declared war on the United States days later, bringing the U.S. into both theaters." },
          { question: "What is the difference between V-E Day and V-J Day?", answer: "V-E Day (May 8, 1945) marks Germany's surrender and the end of fighting in Europe. V-J Day (September 2, 1945) marks Japan's formal surrender and the end of fighting in the Pacific, nearly four months later." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
