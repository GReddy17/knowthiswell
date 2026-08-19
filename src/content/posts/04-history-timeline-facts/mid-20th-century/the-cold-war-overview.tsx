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
  title: "The Cold War Overview",
  category: "history-timeline-facts",
  order: 35,
  subtopic: "mid-20th-century",
  tags: ["cold war", "united states", "soviet union", "20th century history", "nuclear arms race"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The Cold War (roughly 1947-1991) was a decades-long standoff between the US and Soviet Union, fought through an arms race, proxy wars, and rivalry rather than direct war between them.",
  summary: "The Cold War was a prolonged geopolitical and ideological rivalry between the United States and the Soviet Union and their respective allies, lasting from roughly 1947 to 1991, marked by an arms race, proxy wars, and competition for global influence, without direct large-scale military conflict between the two superpowers themselves, per Encyclopaedia Britannica.",
  sources: [
    { label: "Encyclopaedia Britannica — Cold War", url: "https://www.britannica.com/event/Cold-War" },
    { label: "Encyclopaedia Britannica — Cuban Missile Crisis", url: "https://www.britannica.com/event/Cuban-missile-crisis" },
    { label: "Encyclopaedia Britannica — Berlin Wall", url: "https://www.britannica.com/topic/Berlin-Wall" },
  ],
  seeAlso: [
    "history-timeline-facts/world-war-ii-overview",
    "history-timeline-facts/the-space-race",
  ],
  glossary: [
    { term: "Cold War", definition: "The term for the sustained post-World War II geopolitical and ideological rivalry between the United States and the Soviet Union, lasting roughly from 1947 to 1991, without direct large-scale war between the two." },
    { term: "Proxy war", definition: "A conflict in which opposing powers support opposing sides in a third country's war rather than fighting each other directly." },
    { term: "Containment", definition: "The U.S. foreign policy strategy, formalized in the late 1940s, aimed at preventing the spread of Soviet-aligned communism beyond its existing borders." },
    { term: "Iron Curtain", definition: "A term popularized by Winston Churchill in a 1946 speech describing the political and ideological divide between Soviet-aligned Eastern Europe and the Western democracies." },
    { term: "Mutually assured destruction (MAD)", definition: "The Cold War-era doctrine that a full-scale nuclear exchange would destroy both the attacking and defending nations, which is credited with helping deter direct nuclear war between the U.S. and USSR." },
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
          "Despite the name and decades of tension, the United States and the Soviet Union never fought each other directly in large-scale combat — the rivalry played out through an arms race, proxy wars, espionage, and ideological and economic competition, per Encyclopaedia Britannica.",
          "The Cold War lasted roughly 44 years, from the late 1940s to 1991, and included periods of both extreme tension (the Cuban Missile Crisis, 1962) and eased relations (the détente of the 1970s), not one continuous, unchanging standoff.",
          "It ended with the fall of the Berlin Wall in 1989 and the dissolution of the Soviet Union in December 1991 — a political and economic collapse, not a military defeat of one superpower by the other.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/history-timeline-facts/the-cold-war-overview">Cold War</TermLink> was the decades-long rivalry between the United States and the Soviet Union, and their respective allies, that followed World War II. It&apos;s called &quot;cold&quot; because the two superpowers never fought each other directly in a large-scale war — instead, the competition played out through a nuclear and conventional arms race, a space race, espionage, economic and ideological rivalry between capitalism and communism, and wars fought by allied or supported third countries rather than by the US and USSR themselves. It lasted roughly from the late 1940s until the Soviet Union&apos;s dissolution in December 1991.</div>}
        detailed={<div className="prose-p">The Cold War&apos;s roots are usually traced to 1946-47: Winston Churchill&apos;s 1946 speech describing an <TermLink href="/history-timeline-facts/the-cold-war-overview">Iron Curtain</TermLink> dividing Europe, and the 1947 articulation of U.S. <TermLink href="/history-timeline-facts/the-cold-war-overview">containment</TermLink> policy aimed at stopping the spread of Soviet-aligned communism. Both sides built military alliances, NATO (formed by the U.S. and Western allies in 1949) and the Warsaw Pact (formed by the Soviet Union and Eastern Bloc states in 1955), and engaged in a sustained nuclear arms race underpinned by the doctrine of <TermLink href="/history-timeline-facts/the-cold-war-overview">mutually assured destruction</TermLink>. Direct conflict was avoided, but the rivalry was fought through <TermLink href="/history-timeline-facts/the-cold-war-overview">proxy wars</TermLink> in which the superpowers backed opposing sides in third countries&apos; conflicts, including the Korean War (1950-53), the Vietnam War, and the Soviet-Afghan War (1979-89). An important edge case: the Cold War was not a single unbroken period of maximum tension — the 1970s saw a period of relative easing known as détente, including arms-control agreements, before tensions rose again in the early 1980s. The closest the two superpowers came to direct conflict was the Cuban Missile Crisis in October 1962, a 13-day standoff over Soviet nuclear missiles placed in Cuba that was resolved through negotiation rather than war.</div>}
      />
      <FootnoteAside>The Berlin Wall&apos;s fall on November 9, 1989 was accelerated by a bureaucratic mix-up: at a press conference, East German official Günter Schabowski was asked when new, looser travel rules would take effect and mistakenly answered &quot;immediately,&quot; despite the rules being intended to start the next day. Crowds gathered at checkpoints that same night, and border guards, overwhelmed and lacking clear orders, opened the gates, per Britannica&apos;s account of the Wall&apos;s fall.</FootnoteAside>
      <p>
      That kind of unplanned, cascading moment is a useful reminder that the Cold War&apos;s biggest turning points weren&apos;t always the result of deliberate superpower confrontation — some of the most consequential ones, like this, were closer to accidents that outran anyone&apos;s control.
      </p>

      <QuickCheck
        question="How did the United States and the Soviet Union primarily compete during the Cold War?"
        options={[
          { text: "Through direct, large-scale military combat between American and Soviet forces", correct: false, explanation: "This is precisely what did not happen — the two superpowers avoided direct large-scale war with each other throughout the entire Cold War period." },
          { text: "Through an arms race, proxy wars fought by allied third countries, espionage, and ideological and economic competition", correct: true, explanation: "Correct, per Encyclopaedia Britannica. The rivalry was 'cold' precisely because it avoided direct combat between the two superpowers, playing out instead through these other channels." },
          { text: "Through a single, formally declared war that lasted the entire period from 1947 to 1991", correct: false, explanation: "No formal war was ever declared between the U.S. and the USSR — the term 'Cold War' specifically distinguishes it from a 'hot,' formally declared war." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Berlin as a recurring flashpoint (baseline case)</h3>
      <div className="prose-p">
      Berlin, divided among the Allied powers after World War II and located deep inside Soviet-controlled East Germany, became a recurring Cold War flashpoint. The Soviet Union blockaded land access to the Western-controlled sectors of the city in 1948-49, prompting the Berlin Airlift, in which the U.S. and its allies flew in supplies for nearly a year rather than abandon the city. In 1961, East Germany built the Berlin Wall to stop the flow of people leaving for the West, and the wall stood as the Cold War&apos;s most visible physical symbol until it fell in 1989.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The Cuban Missile Crisis — closest to direct conflict (variation / exception)</h3>
      <div className="prose-p">
      In October 1962, the discovery of Soviet nuclear missiles being installed in Cuba, within striking range of much of the United States, triggered a 13-day standoff widely regarded by historians as the closest the world came to direct nuclear war during the Cold War. Rather than escalating to combat, the crisis was resolved through direct negotiation: the Soviet Union agreed to remove the missiles in exchange for a U.S. pledge not to invade Cuba and a quiet, separate agreement to remove U.S. missiles from Turkey. It stands as the clearest example of the Cold War&apos;s dominant pattern — extreme tension resolved short of direct war.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Nuclear deterrence doctrine still in use today (real-world / applied case)</h3>
      <div className="prose-p">
      The doctrine of mutually assured destruction, developed during the Cold War to explain why neither superpower launched a first nuclear strike, still underpins global nuclear strategy today among nuclear-armed states. Similarly, NATO, formed in 1949 as a Cold War military alliance, remains an active and expanding organization today. Recognizing a modern nuclear policy debate or NATO decision as an extension of Cold War-era doctrine and alliance structures is a quick way to place current events in their historical context.
      </div>

      <QuickCheck
        question="How was the Cuban Missile Crisis (October 1962) ultimately resolved?"
        options={[
          { text: "Through a brief but direct military exchange between U.S. and Soviet forces near Cuba", correct: false, explanation: "No direct military exchange occurred — the crisis, despite being extremely tense, was resolved without combat between U.S. and Soviet forces." },
          { text: "Through negotiation: the Soviet Union agreed to remove its missiles from Cuba in exchange for a U.S. pledge not to invade Cuba and a quiet withdrawal of U.S. missiles from Turkey", correct: true, explanation: "Correct. The resolution through negotiation, rather than escalation to war, is exactly why historians treat this crisis as the clearest example of how the Cold War's tensions were generally managed short of direct conflict." },
          { text: "The United Nations deployed peacekeeping forces to physically separate the two sides", correct: false, explanation: "No UN peacekeeping deployment was involved — the crisis was resolved through direct diplomatic negotiation between the U.S. and Soviet governments." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The Cold War: key events, 1947-1991"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-the-cold-war-overview-timeline.svg"
        altText="Horizontal timeline showing 1947 the articulation of U.S. containment policy, 1948 to 1949 the Berlin Blockade and Airlift, 1949 the founding of NATO, 1950 to 1953 the Korean War, 1955 the founding of the Warsaw Pact, 1961 the construction of the Berlin Wall, October 1962 the Cuban Missile Crisis, the 1970s period of detente, 1979 to 1989 the Soviet-Afghan War, November 1989 the fall of the Berlin Wall, and December 1991 the dissolution of the Soviet Union."
      />
      <p>
      Read across the whole timeline, the Cold War looks less like one continuous standoff and more like a rhythm of escalation and easing — crises like Berlin and Cuba followed by stretches of relative calm — before ending in a political and economic collapse rather than a military resolution.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the U.S. and Soviet Union fought each other directly in a large-scale war.", fix: "They never did — the rivalry was fought through an arms race, proxy wars in third countries, espionage, and ideological competition, which is exactly why it's called the 'Cold' War." },
          { mistake: "Treating the Cold War as one continuous, unchanging period of maximum tension from 1947 to 1991.", fix: "It included both severe crises (the Cuban Missile Crisis, 1962) and periods of eased relations (the détente of the 1970s), so tension rose and fell rather than staying constant." },
          { mistake: "Assuming the Cold War ended abruptly in 1991 with no earlier warning signs.", fix: "It was preceded by several years of Soviet political and economic reform (glasnost and perestroika) and a wave of 1989 revolutions across Eastern Europe, including the Berlin Wall's fall, before the Soviet Union's formal dissolution in December 1991." },
        ]}
      />
      <MisconceptionCallout
        myth="The Cold War was fought primarily through direct military conflict between the United States and the Soviet Union."
        reality={<p>Per Encyclopaedia Britannica, the U.S. and the Soviet Union never engaged each other directly in large-scale combat throughout the entire Cold War. The rivalry instead played out through a sustained nuclear and conventional arms race, competing alliance systems (NATO and the Warsaw Pact), espionage, ideological and economic competition, and proxy wars in which each superpower backed opposing sides in third countries&apos; conflicts, such as the Korean War and the Vietnam War, rather than fighting one another directly.</p>}
      />

      <QuickCheck
        question="Why is it historically inaccurate to describe the Cold War as a direct military conflict between the U.S. and the Soviet Union?"
        options={[
          { text: "Because it is accurate — the two countries fought each other directly for over 40 years", correct: false, explanation: "This isn't accurate. No direct large-scale combat between U.S. and Soviet forces occurred during the Cold War — that's exactly what distinguishes it as a 'cold,' not a 'hot,' war." },
          { text: "Because the rivalry was carried out through an arms race, proxy wars, espionage, and ideological and economic competition, without direct large-scale combat between the two superpowers", correct: true, explanation: "Correct. This is the defining feature of the Cold War as a historical term, and why events like the Korean War, the Vietnam War, and the Cuban Missile Crisis are described as proxy conflicts or near-misses rather than direct U.S.-Soviet combat." },
          { text: "Because the Cold War only lasted a few months and ended before any conflict could develop", correct: false, explanation: "The Cold War lasted roughly 44 years, from the late 1940s to 1991 — it was a prolonged rivalry, not a brief episode." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="How many years since the Cold War ended (1991)?"
        fields={[
          { key: "year", label: "Reference year (defaults to 1991, the Soviet Union's dissolution)", defaultValue: 1991 },
        ]}
        resultLabel="Years elapsed to today"
        formula="yearsSinceYear"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you hear 'Cold War,' remember it names an absence of direct war between the two superpowers, not a description of one.",
          "When a Cold War-era proxy conflict comes up (Korea, Vietnam, Afghanistan), note which superpower backed which side, rather than assuming the U.S. and USSR fought each other directly there.",
          "Notice references to NATO or nuclear deterrence policy today, and connect them back to their Cold War-era origins.",
          "Read the entry on the Space Race to see one specific, high-profile arena where Cold War competition played out without direct conflict.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What caused the Cold War?", answer: "The Cold War grew out of deepening mistrust between the United States and the Soviet Union after World War II, rooted in opposing political and economic systems (capitalism versus communism) and competing visions for postwar Europe, formalized by U.S. containment policy and the division of Europe described by Churchill's 1946 'Iron Curtain' speech." },
          { question: "When did the Cold War start and end?", answer: "It's generally dated from the late 1940s (1946-47) to December 1991, when the Soviet Union formally dissolved — a span of roughly 44 years." },
          { question: "Why didn't the U.S. and Soviet Union fight each other directly?", answer: "Both sides possessed nuclear weapons, and the doctrine of mutually assured destruction held that a direct large-scale war risked mutual annihilation, which is widely credited by historians as a key deterrent that kept the rivalry 'cold' rather than escalating to direct combat." },
          { question: "What was the Cuban Missile Crisis?", answer: "A 13-day standoff in October 1962 triggered by the discovery of Soviet nuclear missiles in Cuba, widely regarded as the closest the U.S. and Soviet Union came to direct nuclear war, resolved through negotiation rather than combat." },
          { question: "How did the Cold War end?", answer: "It ended through a series of political and economic developments rather than military defeat: Soviet reforms in the 1980s (glasnost and perestroika), a wave of 1989 revolutions across Eastern Europe including the fall of the Berlin Wall, and the Soviet Union's formal dissolution in December 1991." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
