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
  title: "The Holocaust (factual, respectful historical overview)",
  category: "history-timeline-facts",
  order: 32,
  subtopic: "mid-20th-century",
  tags: ["the holocaust", "world war ii", "nazi germany", "genocide", "20th century history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The Holocaust was Nazi Germany's state-organized genocide of six million European Jews between 1933 and 1945, documented by the USHMM and Yad Vashem.",
  summary: "The Holocaust was the systematic, state-organized persecution and murder of six million European Jews by Nazi Germany and its collaborators between 1933 and 1945, part of a broader campaign of persecution that also targeted Roma people, people with disabilities, Soviet prisoners of war, political dissidents, and other groups, as documented by the United States Holocaust Memorial Museum and Yad Vashem.",
  sources: [
    { label: "United States Holocaust Memorial Museum — Holocaust Encyclopedia: Introduction to the Holocaust", url: "https://encyclopedia.ushmm.org/content/en/article/introduction-to-the-holocaust" },
    { label: "Yad Vashem — The World Holocaust Remembrance Center", url: "https://www.yadvashem.org/" },
    { label: "Encyclopaedia Britannica — Holocaust", url: "https://www.britannica.com/event/Holocaust" },
  ],
  seeAlso: [
    "history-timeline-facts/world-war-ii-overview",
  ],
  glossary: [
    { term: "Holocaust", definition: "The term, from Greek roots meaning roughly \"whole burnt,\" used to describe Nazi Germany's genocide of six million European Jews between 1933 and 1945, per the United States Holocaust Memorial Museum (USHMM). Also referred to in Hebrew as the Shoah, meaning \"catastrophe.\"" },
    { term: "Nuremberg Laws", definition: "Laws enacted by Nazi Germany in September 1935 that stripped Jews of German citizenship and forbade marriage or sexual relations between Jews and non-Jewish Germans, per USHMM." },
    { term: "Ghetto", definition: "A segregated, confined district of a city where Nazi Germany forced Jewish populations to live under harsh, overcrowded conditions, often as a precursor to deportation, per USHMM." },
    { term: "Wannsee Conference", definition: "A January 1942 meeting of senior Nazi officials in Berlin that coordinated the administrative implementation of the mass murder of European Jews, per USHMM and Yad Vashem." },
    { term: "Liberation", definition: "The freeing of concentration and death camp prisoners by Allied and Soviet forces as they advanced across German-occupied Europe in 1944 and 1945, per USHMM." },
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
          "The Holocaust was the state-organized, systematic persecution and murder of six million European Jews by Nazi Germany and its collaborators between 1933 and 1945, as documented by the United States Holocaust Memorial Museum (USHMM) and Yad Vashem.",
          "It was not a sudden event — historians document an escalating process across more than a decade: legal exclusion beginning in 1933, state-organized violence, forced ghettoization, and finally mass murder from 1941 onward.",
          "Nazi Germany and its collaborators also persecuted and murdered millions of other people on political, racial, and other grounds, including Roma people, people with disabilities, Soviet prisoners of war, and political dissidents, per USHMM.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/history-timeline-facts/the-holocaust-factual-respectful-historical-overview">Holocaust</TermLink> was Nazi Germany&apos;s state-organized persecution and murder of six million European Jews between 1933 and 1945, carried out through a combination of laws stripping Jews of rights, forced displacement into ghettos and camps, and, from 1941 onward, systematic mass killing. It was an official policy of the German government under Adolf Hitler, planned and carried out by the state, its military, and collaborators across occupied Europe — not a series of isolated or spontaneous acts. The United States Holocaust Memorial Museum and Yad Vashem, the two most established institutions dedicated to Holocaust documentation and remembrance, maintain extensive historical records, survivor testimony archives, and research on the period.</div>}
        detailed={<div className="prose-p">Historians and institutions including USHMM and Yad Vashem document the Holocaust as an escalating process rather than a single event. It began with legal exclusion after the Nazi Party took power in Germany in 1933, formalized by the <TermLink href="/history-timeline-facts/the-holocaust-factual-respectful-historical-overview">Nuremberg Laws</TermLink> of 1935, which stripped Jews of German citizenship. State-organized violence escalated with Kristallnacht (the &quot;Night of Broken Glass&quot;) on November 9-10, 1938, when synagogues, Jewish-owned businesses, and homes across Germany and Austria were attacked. Following Germany&apos;s invasion of Poland in 1939, Jewish populations were forced into segregated <TermLink href="/history-timeline-facts/the-holocaust-factual-respectful-historical-overview">ghettos</TermLink> under harsh conditions. After Germany invaded the Soviet Union in June 1941, mobile killing units carried out mass shootings of Jewish civilians in occupied territory, and the administrative coordination of systematic mass murder across Europe was formalized at the <TermLink href="/history-timeline-facts/the-holocaust-factual-respectful-historical-overview">Wannsee Conference</TermLink> in January 1942. An important edge case documented by USHMM: the Nazi regime&apos;s targets extended beyond Jewish people, including Roma people, people with disabilities (murdered in a separate program that predated and technically overlapped with the Holocaust), Soviet prisoners of war, political dissidents, Jehovah&apos;s Witnesses, and gay men — though the deliberate, near-total destruction of European Jewish communities specifically is what the term &quot;Holocaust&quot; refers to, per USHMM and Yad Vashem.</div>}
      />
      <FootnoteAside>January 27 is observed internationally as Holocaust Remembrance Day because it is the date, in 1945, that Soviet troops liberated the Auschwitz-Birkenau camp, per USHMM. The United Nations General Assembly designated it International Holocaust Remembrance Day in 2005, and institutions including USHMM and Yad Vashem use the date each year to center survivor testimony and documented history in public education.</FootnoteAside>
      <p>
      Understanding the Holocaust as a documented, staged process, rather than a single sudden event, matters for recognizing how the same historical record connects to World War II&apos;s broader timeline and to the postwar institutions built partly in response to it.
      </p>

      <QuickCheck
        question="According to USHMM and Yad Vashem, what does the term 'the Holocaust' specifically refer to?"
        options={[
          { text: "All civilian deaths caused by any country during World War II", correct: false, explanation: "That describes wartime civilian casualties broadly, which is a much larger and different category. The Holocaust refers specifically to Nazi Germany's deliberate, state-organized genocide of European Jews." },
          { text: "Nazi Germany's systematic, state-organized persecution and murder of six million European Jews between 1933 and 1945", correct: true, explanation: "Correct, per USHMM and Yad Vashem. The Nazi regime also persecuted and murdered millions of others on political, racial, and other grounds, but the term 'Holocaust' specifically denotes the genocide of European Jews." },
          { text: "A single event that took place only in 1945, at the end of World War II", correct: false, explanation: "It was not a single 1945 event — it was a documented process that escalated over more than a decade, from legal persecution beginning in 1933 to mass murder from 1941 onward." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Documented phases</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Phase 1: Escalating persecution before the war, 1933-1939 (baseline)</h3>
      <div className="prose-p">
      After the Nazi Party took power in Germany in 1933, USHMM documents a sequence of escalating legal and social measures targeting Jewish people: exclusion from civil service jobs and professions, economic boycotts, and, with the Nuremberg Laws of September 1935, the formal removal of German Jews&apos; citizenship and legal rights. This escalated further with Kristallnacht on November 9-10, 1938, a state-organized wave of violence against synagogues, Jewish-owned businesses, and homes across Germany and Austria, and the arrest of tens of thousands of Jewish men, per USHMM. By the outbreak of war in September 1939, Jewish life in Germany had already been systematically dismantled through law and state violence — mass murder had not yet begun.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Phase 2: The shift to systematic mass murder, 1941-1945 (turning point)</h3>
      <div className="prose-p">
      Following Germany&apos;s invasion of the Soviet Union in June 1941, USHMM and Yad Vashem document the deployment of mobile killing units that carried out mass shootings of Jewish civilians across occupied Soviet territory. The administrative coordination of a continent-wide plan to murder Europe&apos;s Jewish population was formalized at the Wannsee Conference in January 1942. Over the following three years, Nazi Germany and its collaborators operated a network of ghettos, concentration camps, and dedicated killing centers across occupied Europe, including Auschwitz-Birkenau, where the largest number of murders took place, per USHMM. This phase, not the earlier persecution alone, is what accounts for the overwhelming majority of the Holocaust&apos;s six million Jewish victims.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Phase 3: Documentation, remembrance, and the historical record today (present-day)</h3>
      <div className="prose-p">
      As Allied and Soviet forces advanced across Europe in 1944 and 1945, they liberated camp prisoners and documented what they found, forming part of the evidentiary basis later used at the Nuremberg trials (1945-1946), where surviving Nazi leaders were prosecuted for crimes against humanity. Today, institutions including the United States Holocaust Memorial Museum and Yad Vashem maintain extensive archives of documentation, physical evidence, and recorded survivor testimony, and conduct ongoing historical research — work that continues to establish and preserve the factual record as the population of living survivors and witnesses declines with time.
      </div>

      <QuickCheck
        question="What changed for European Jews after Germany's invasion of the Soviet Union in June 1941, according to USHMM and Yad Vashem?"
        options={[
          { text: "Nothing significant changed — persecution continued at the same level as the 1930s", correct: false, explanation: "This was a major escalation, not a continuation of prior conditions — mobile killing units began mass shootings of Jewish civilians in occupied Soviet territory shortly after the invasion began." },
          { text: "The regime shifted from legal persecution and forced displacement toward systematic mass killing, later coordinated administratively at the Wannsee Conference in January 1942", correct: true, explanation: "Correct. This period marks the documented turning point from persecution and displacement to organized mass murder, per USHMM and Yad Vashem." },
          { text: "The war in Europe ended and camps began releasing prisoners", correct: false, explanation: "This is backwards — 1941 marks an escalation toward mass murder, not the war's end or camp liberations, which came later, in 1944-1945." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The Holocaust: documented escalation, 1933-1945"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-the-holocaust-factual-respectful-historical-overview-timeline.svg"
        altText="Horizontal timeline showing 1933 the Nazi Party takes power and legal exclusion of Jews begins, 1935 the Nuremberg Laws strip Jews of citizenship, November 1938 Kristallnacht state-organized violence, 1939 forced ghettoization begins following the invasion of Poland, June 1941 mass shootings begin following the invasion of the Soviet Union, January 1942 the Wannsee Conference formalizes coordination of mass murder, 1942 to 1944 systematic killing at camps across occupied Europe, 1944 to 1945 Allied and Soviet forces liberate camps including Auschwitz-Birkenau on January 27, 1945."
      />
      <p>
      Set out this way, the documented record shows a process that escalated in stages across more than a decade, rather than a single sudden event — a distinction historians and institutions like USHMM and Yad Vashem consider central to understanding how it happened.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the Holocaust targeted only Jewish people, with no other victims.", fix: "The Holocaust specifically refers to the genocide of six million European Jews, but USHMM documents that Nazi Germany also persecuted and murdered millions of others, including Roma people, people with disabilities, Soviet prisoners of war, and political dissidents." },
          { mistake: "Treating the Holocaust as a single event that began and ended in the death camps.", fix: "USHMM and Yad Vashem document a staged escalation spanning 1933 to 1945 — legal persecution, state violence, forced ghettoization, and finally systematic mass murder from 1941 onward, not one isolated event." },
          { mistake: "Treating the historical record and casualty figures as vague or unknowable.", fix: "Institutions including USHMM and Yad Vashem maintain extensive, carefully researched documentation, physical evidence, and archives — the six-million figure for Jewish victims is a well-documented historical finding, not an estimate pulled from thin air." },
        ]}
      />
      <MisconceptionCallout
        myth="The Holocaust happened suddenly, as a single event, rather than through a gradual, documented process."
        reality={<p>USHMM and Yad Vashem both document the Holocaust as an escalation that unfolded over more than a decade: legal exclusion of Jews from German civic life beginning in 1933, the Nuremberg Laws in 1935, the state-organized violence of Kristallnacht in 1938, forced ghettoization from 1939, and the shift to systematic mass murder only from 1941 onward, formally coordinated at the Wannsee Conference in January 1942. Recognizing this staged, documented timeline is central to how historians and Holocaust memorial institutions describe how the genocide was planned and carried out.</p>}
      />

      <QuickCheck
        question="Why do USHMM and Yad Vashem emphasize that the Holocaust unfolded in documented stages rather than as a sudden event?"
        options={[
          { text: "Because the earliest stages, in the 1930s, involved mass killing on the same scale as the later camps", correct: false, explanation: "The reverse is true — the 1930s stages involved legal persecution and state violence, not yet mass killing. Systematic mass murder is documented as beginning later, from 1941 onward." },
          { text: "Because the historical record shows a real escalation over more than a decade, from legal exclusion in 1933 to systematic mass murder from 1941 onward, which is central to understanding how it was planned and carried out", correct: true, explanation: "Correct. This staged record, from legal persecution through state violence to systematic murder, is exactly what USHMM's and Yad Vashem's documentation and research establish." },
          { text: "Because the timeline is disputed among historians and institutions present multiple competing versions", correct: false, explanation: "This staged timeline is not disputed — it is the well-established, well-documented historical record maintained by USHMM, Yad Vashem, and the broader historical field." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "When you encounter a claim about the Holocaust online, check it against the primary documentation and encyclopedia entries maintained by USHMM (ushmm.org) or Yad Vashem (yadvashem.org).",
          "Notice, next time January 27 is mentioned in the news, that it marks International Holocaust Remembrance Day, tied to the 1945 liberation of Auschwitz-Birkenau.",
          "If you visit a Holocaust memorial or museum, look for how it presents the staged, documented timeline (1933-1945) rather than treating the genocide as a single moment.",
          "Read the World War II Overview entry for how the Holocaust connects to the war's broader timeline, including the 1945 liberations and the postwar Nuremberg trials.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What was the Holocaust?", answer: "The Holocaust was Nazi Germany's state-organized, systematic persecution and murder of six million European Jews between 1933 and 1945, carried out by the German government, its military, and collaborators across occupied Europe, per USHMM and Yad Vashem." },
          { question: "How many people died in the Holocaust?", answer: "USHMM and Yad Vashem document that approximately six million European Jews were murdered. The Nazi regime also persecuted and murdered millions of other people, including Roma people, people with disabilities, Soviet prisoners of war, and political dissidents, on political, racial, and other grounds." },
          { question: "When did the Holocaust happen?", answer: "USHMM documents an escalating process from 1933, when the Nazi Party took power in Germany and began legally excluding Jews from civic life, through systematic mass murder from 1941 onward, until Allied and Soviet forces liberated the camps in 1944 and 1945." },
          { question: "Who did the Nazis target during the Holocaust?", answer: "The Holocaust specifically refers to the genocide of European Jews. USHMM documents that the Nazi regime also persecuted and murdered other groups, including Roma people, people with disabilities, Soviet prisoners of war, political dissidents, Jehovah's Witnesses, and gay men." },
          { question: "Why is January 27 Holocaust Remembrance Day?", answer: "January 27 marks the date in 1945 that Soviet troops liberated the Auschwitz-Birkenau camp, per USHMM. The United Nations General Assembly designated it International Holocaust Remembrance Day in 2005." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
