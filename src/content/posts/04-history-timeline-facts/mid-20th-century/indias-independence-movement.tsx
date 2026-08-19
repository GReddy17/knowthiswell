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
  title: "India's Independence Movement",
  category: "history-timeline-facts",
  order: 34,
  subtopic: "mid-20th-century",
  tags: ["india independence", "gandhi", "partition of india", "decolonization", "20th century history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "India's independence movement spanned six decades and multiple strategies and leaders, culminating in independence and partition in August 1947.",
  summary: "India's independence movement was a decades-long, multi-strategy struggle against British colonial rule, involving the Indian National Congress, the Muslim League, Mahatma Gandhi's campaigns of nonviolent resistance, and other movements, which culminated in India's independence on August 15, 1947, accompanied by the partition of British India into India and Pakistan, per Encyclopaedia Britannica.",
  sources: [
    { label: "Encyclopaedia Britannica — Indian Independence Movement", url: "https://www.britannica.com/event/Indian-independence-movement" },
    { label: "Encyclopaedia Britannica — Mahatma Gandhi", url: "https://www.britannica.com/biography/Mahatma-Gandhi" },
    { label: "Encyclopaedia Britannica — Partition of India", url: "https://www.britannica.com/event/Partition-of-India" },
  ],
  seeAlso: [
    "history-timeline-facts/decolonization-movement",
  ],
  glossary: [
    { term: "Indian National Congress", definition: "Founded in 1885, it became the primary political organization driving India's independence movement over the following six decades." },
    { term: "Satyagraha", definition: "Mahatma Gandhi's philosophy and method of nonviolent resistance, a term he coined meaning roughly \"truth-force\" or \"holding firmly to truth.\"" },
    { term: "Partition of India", definition: "The August 1947 division of British India into two independent states, India and Pakistan, which was accompanied by large-scale population displacement and violence, per Encyclopaedia Britannica." },
    { term: "Quit India Movement", definition: "A mass civil disobedience campaign launched by the Indian National Congress in August 1942, demanding an immediate end to British rule in India." },
    { term: "Indian Independence Act 1947", definition: "The British legislation that formally ended British rule over India and provided for the creation of the two independent dominions of India and Pakistan." },
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
          "India's independence movement was not led by one person or one strategy — it spanned six decades and combined constitutional reform efforts, revolutionary movements, and Mahatma Gandhi's campaigns of mass nonviolent resistance, per Encyclopaedia Britannica.",
          "India became independent on August 15, 1947, but independence came alongside the partition of British India into two separate states, India and Pakistan, a division accompanied by large-scale population displacement and violence.",
          "The Indian National Congress (founded 1885) and the All-India Muslim League pursued increasingly divergent political goals in the 1940s, and that divergence is central to why partition, rather than a single unified independent India, was the outcome.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">India&apos;s <TermLink href="/history-timeline-facts/indias-independence-movement">independence movement</TermLink> was the decades-long political struggle against British colonial rule in India, which formally ended when India became independent on August 15, 1947. The movement combined several strategies over time — early constitutional reform efforts, revolutionary activity, and, from the 1910s onward, Mahatma Gandhi&apos;s mass campaigns of nonviolent civil disobedience against British rule. Independence arrived alongside partition: British India was divided into two new independent states, India and Pakistan, a division that triggered one of the largest mass migrations in modern history and significant violence.</div>}
        detailed={<div className="prose-p">The <TermLink href="/history-timeline-facts/indias-independence-movement">Indian National Congress</TermLink>, founded in 1885, began as a moderate organization petitioning for greater Indian representation within British colonial government, and radicalized over subsequent decades — a major turning point was the Jallianwala Bagh massacre in Amritsar in 1919, in which British troops fired on an unarmed crowd, which is widely cited by historians as having hardened Indian public opinion against British rule. Mahatma Gandhi, who returned to India from South Africa in 1915, became the movement&apos;s most prominent leader from the 1920s onward, developing and leading mass campaigns built on <TermLink href="/history-timeline-facts/indias-independence-movement">satyagraha</TermLink>, his philosophy of organized nonviolent resistance, including the Non-Cooperation Movement (1920-22), the Salt March and Civil Disobedience Movement (1930), and the <TermLink href="/history-timeline-facts/indias-independence-movement">Quit India Movement</TermLink> (1942). An important edge case: Gandhi&apos;s nonviolent approach was not the movement&apos;s only strategy — revolutionary and armed efforts also ran in parallel, including Subhas Chandra Bose&apos;s Indian National Army, which fought alongside Axis forces against the British during World War II with the explicit goal of Indian independence, a very different approach from Gandhi&apos;s. Meanwhile, the All-India Muslim League, led by Muhammad Ali Jinnah, increasingly pursued a separate political path advocating for a distinct Muslim-majority state, a divergence that culminated in the 1947 partition of British India into India and Pakistan under the Indian Independence Act.</div>}
      />
      <FootnoteAside>In 1930, Gandhi led a roughly 240-mile, 24-day march to the coastal village of Dandi to make salt directly from seawater, in defiance of British colonial law that criminalized Indians producing their own salt and imposed a salt tax. The Salt March, per Encyclopaedia Britannica, is considered one of the most significant acts of organized civil disobedience of the entire independence movement, sparking widespread participation across India.</FootnoteAside>
      <p>
      That single act of coordinated, symbolic nonviolent resistance is also part of a much broader pattern that later influenced independence and civil rights movements well beyond India — a thread worth keeping in mind as you look at the movement&apos;s different strategies side by side.
      </p>

      <QuickCheck
        question="Was India's independence movement led by a single person or a single strategy?"
        options={[
          { text: "Yes — Mahatma Gandhi led the entire movement single-handedly using only nonviolent resistance", correct: false, explanation: "Gandhi was the movement's most prominent leader from the 1920s onward, but the movement also included the Indian National Congress's constitutional efforts, the Muslim League's separate political push, and parallel revolutionary and armed movements like Subhas Chandra Bose's Indian National Army." },
          { text: "No — it combined multiple organizations, leaders, and strategies over roughly six decades, including constitutional reform, nonviolent civil disobedience, and revolutionary and armed movements", correct: true, explanation: "Correct, per Encyclopaedia Britannica. The Indian National Congress, the Muslim League, Gandhi's nonviolent campaigns, and separate revolutionary movements all played distinct roles across the movement's decades-long history." },
          { text: "Yes — it was led entirely by the British colonial government granting independence voluntarily, with no organized Indian movement", correct: false, explanation: "This understates the sustained, organized Indian political movement — the Indian National Congress alone had been organizing since 1885, over 60 years before independence." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Early constitutional reform, 1885-1919 (baseline case)</h3>
      <div className="prose-p">
      The Indian National Congress, founded in 1885, initially pursued moderate goals — greater Indian representation in colonial governance and administrative reform — through petitions and constitutional channels rather than mass mobilization or confrontation. This early phase radicalized sharply after the Jallianwala Bagh massacre in Amritsar in 1919, when British troops fired on an unarmed gathering, an event widely cited by historians as a decisive turning point that pushed the movement toward more direct forms of resistance.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Two very different strategies running in parallel (variation / exception)</h3>
      <div className="prose-p">
      From the 1920s through the 1940s, Gandhi&apos;s mass nonviolent campaigns, including the 1930 Salt March and the 1942 Quit India Movement, defined the movement&apos;s most visible public face. At the same time, a distinct revolutionary strategy pursued independence differently: Subhas Chandra Bose led the Indian National Army, which allied with Axis powers during World War II specifically to fight British colonial rule militarily. Both strategies shared the same ultimate goal, independence, but pursued it through fundamentally different, and at times conflicting, means.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A model that outlasted the movement itself (real-world / applied case)</h3>
      <div className="prose-p">
      Gandhi&apos;s satyagraha strategy directly influenced later nonviolent movements well beyond India — Dr. Martin Luther King Jr. explicitly credited Gandhi&apos;s methods as a model for the American civil rights movement&apos;s own use of organized nonviolent civil disobedience. Recognizing this lineage is a useful way to spot the influence of India&apos;s independence movement showing up in entirely separate historical contexts today.
      </div>

      <QuickCheck
        question="What role did the Indian National Army, led by Subhas Chandra Bose, play in the independence movement?"
        options={[
          { text: "It was the armed wing of Gandhi's nonviolent campaign, coordinated directly with the Salt March and Quit India Movement", correct: false, explanation: "The Indian National Army pursued a fundamentally different, armed strategy, allying with Axis powers during World War II — it was not coordinated with or part of Gandhi's nonviolent approach." },
          { text: "It represented a separate, armed strategy for achieving independence, allied with Axis powers during World War II, distinct from Gandhi's nonviolent approach", correct: true, explanation: "Correct. It shows that the independence movement included more than one strategy running in parallel toward the same overall goal." },
          { text: "It was a British colonial military unit created to suppress the independence movement", correct: false, explanation: "This is the opposite of its actual role — the Indian National Army fought against British colonial rule, not on behalf of it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="India's independence movement: key dates, 1885-1947"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-indias-independence-movement-timeline.svg"
        altText="Horizontal timeline showing 1885 the founding of the Indian National Congress, 1919 the Jallianwala Bagh massacre in Amritsar, 1930 Gandhi's Salt March and the Civil Disobedience Movement, 1942 the Quit India Movement, and August 15, 1947 India's independence alongside the partition of British India into India and Pakistan under the Indian Independence Act."
      />
      <p>
      Laid out across six decades, the movement reads less like a single continuous campaign and more like a series of distinct phases, each shaped by a different mix of organizations, leaders, and strategies, converging on the same August 1947 outcome.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating Mahatma Gandhi as the movement's sole leader and nonviolence as its only strategy.", fix: "The Indian National Congress, the Muslim League, and separate revolutionary and armed movements like Subhas Chandra Bose's Indian National Army all played distinct roles alongside Gandhi's nonviolent campaigns." },
          { mistake: "Assuming India's independence in August 1947 happened smoothly, without significant conflict.", fix: "Independence was accompanied by the partition of British India into India and Pakistan, a division that triggered massive population displacement and significant violence, per Encyclopaedia Britannica." },
          { mistake: "Treating the Indian National Congress and the Muslim League as a single unified independence movement with the same goals.", fix: "They were distinct organizations that increasingly diverged politically through the 1940s, with the Muslim League advocating for a separate Muslim-majority state — a divergence that directly led to partition rather than a single unified independent India." },
        ]}
      />
      <MisconceptionCallout
        myth="India's independence movement was led by one person, or achieved through one strategy alone."
        reality={<p>Encyclopaedia Britannica documents a movement that spanned roughly six decades and combined multiple organizations and strategies: the Indian National Congress&apos;s early constitutional reform efforts, Mahatma Gandhi&apos;s mass nonviolent campaigns from the 1920s onward, the All-India Muslim League&apos;s separate political push that led to the creation of Pakistan, and parallel revolutionary and armed movements such as Subhas Chandra Bose&apos;s Indian National Army. Gandhi was the movement&apos;s most prominent leader, but not its only one, and nonviolence was not its only method.</p>}
      />

      <QuickCheck
        question="Which of the following best reflects the actual structure of India's independence movement?"
        options={[
          { text: "A single organization with one leader and one consistent strategy across six decades", correct: false, explanation: "This oversimplifies a movement that in reality involved multiple organizations, leaders, and competing strategies, including nonviolent civil disobedience, constitutional reform, and armed resistance." },
          { text: "Multiple organizations (the Indian National Congress, the Muslim League) and multiple strategies (constitutional reform, nonviolent resistance, armed movements) operating across roughly six decades", correct: true, explanation: "Correct. This diversity of organizations and strategies, and the divergence between the Congress and the Muslim League specifically, is central to understanding both how independence was achieved and why partition occurred." },
          { text: "A movement organized and led entirely by the British colonial government itself", correct: false, explanation: "The movement was an Indian-led political struggle against British colonial rule, not something organized by the colonial government." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="How many years since India's independence (1947)?"
        fields={[
          { key: "year", label: "Reference year (defaults to 1947, India's independence)", defaultValue: 1947 },
        ]}
        resultLabel="Years elapsed to today"
        formula="yearsSinceYear"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time Gandhi comes up in a discussion of India's independence, mention the Indian National Congress, the Muslim League, and parallel revolutionary movements as part of the same broader story.",
          "When you hear '1947' connected to India, remember it names both independence and partition together, not independence alone.",
          "Notice references to Gandhi's satyagraha influencing later movements, like the U.S. civil rights movement's use of nonviolent resistance.",
          "Read the entry on Decolonization to see how India's 1947 independence fits into the much broader, multi-decade global pattern.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "When did India gain independence?", answer: "India became independent from British colonial rule on August 15, 1947, under the Indian Independence Act, which also provided for the partition of British India into India and Pakistan." },
          { question: "Who led India's independence movement?", answer: "No single person led it. The Indian National Congress (founded 1885) and Mahatma Gandhi, its most prominent leader from the 1920s onward, were central, but the All-India Muslim League and separate revolutionary movements, including Subhas Chandra Bose's Indian National Army, also played significant, distinct roles." },
          { question: "What was the partition of India?", answer: "The August 1947 division of British India into two independent states, India and Pakistan, which occurred alongside independence and was accompanied by large-scale population displacement and significant violence, per Encyclopaedia Britannica." },
          { question: "What was Gandhi's role in India's independence?", answer: "Mahatma Gandhi was the movement's most prominent leader from the 1920s onward, developing and leading mass campaigns of organized nonviolent resistance (satyagraha), including the 1930 Salt March and the 1942 Quit India Movement." },
          { question: "Why was India divided into India and Pakistan?", answer: "The Indian National Congress and the All-India Muslim League increasingly diverged politically through the 1940s, with the Muslim League, led by Muhammad Ali Jinnah, advocating for a separate Muslim-majority state — a divergence that culminated in the 1947 partition." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
