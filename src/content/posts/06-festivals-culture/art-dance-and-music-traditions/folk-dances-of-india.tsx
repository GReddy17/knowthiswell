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
  title: "Folk Dances of India",
  category: "festivals-culture",
  order: 31,
  subtopic: "art-dance-and-music-traditions",
  tags: ["folk dance", "bhangra", "garba", "lavani", "indian dance", "regional traditions"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "India's folk dances number in the hundreds, each tied to a specific community, occasion, or harvest season, distinct from the country's formally codified classical forms.",
  summary: "Folk dances of India are community-rooted, informally transmitted dance traditions tied to a specific region, occasion, or harvest cycle — distinct from the eight formally codified classical dance forms, though the two categories sometimes overlap and influence each other.",
  sources: [
    { label: "Sangeet Natak Akademi — National Academy of Music, Dance and Drama, Government of India", url: "https://sangeetnatak.gov.in/" },
    { label: "Encyclopaedia Britannica — Bhangra", url: "https://www.britannica.com/art/bhangra-dance" },
    { label: "UNESCO Intangible Cultural Heritage — Chhau Dance", url: "https://ich.unesco.org/en/RL/chhau-dance-00337" },
    { label: "Encyclopaedia Britannica — South Asian arts", url: "https://www.britannica.com/art/South-Asian-arts" },
  ],
  seeAlso: [
    "festivals-culture/art-dance-and-music-traditions/classical-indian-dance-forms-overview",
    "festivals-culture/art-dance-and-music-traditions/world-dance-traditions-overview",
    "festivals-culture/major-indian-festivals/navratri-and-durga-puja",
    "festivals-culture/major-indian-festivals/pongal-and-makar-sankranti",
  ],
  glossary: [
    { term: "Folk dance", definition: "A community dance tradition, tied to a region, occasion, or season, that is passed on informally rather than through a codified, formally examined training system." },
    { term: "Garba", definition: "A circular Gujarati folk dance traditionally performed around a lamp or image representing the goddess during Navratri." },
    { term: "Bhangra", definition: "A high-energy folk dance from Punjab, traditionally performed at harvest time to the beat of the dhol drum, now also a popular staged and diaspora dance style." },
    { term: "Chhau", definition: "A masked, semi-martial dance tradition from eastern India (Odisha, Jharkhand, West Bengal) that blends folk performance with martial-arts-influenced movement; inscribed on UNESCO's Representative List of Intangible Cultural Heritage." },
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
          "India has hundreds of folk dances, each tied to a specific community, region, occasion, or point in the agricultural calendar — far more numerous and locally varied than the eight nationally recognized classical forms.",
          "Folk dance differs from classical dance in transmission and form, not in age or seriousness — folk traditions are learned informally within a community and can vary from village to village, rather than following one fixed, formally codified technique.",
          "Some traditions sit in a genuine gray zone between the two categories — Chhau, for example, blends folk performance with martial-arts training and is internationally recognized as intangible cultural heritage, despite not holding official &apos;classical&apos; status in India.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Folk dances are the everyday, community dance traditions of India — the ones performed at harvest festivals, weddings, and local celebrations rather than on a formal concert stage after years of structured training. <TermLink href="/festivals-culture/art-dance-and-music-traditions/folk-dances-of-india">Bhangra</TermLink> from Punjab and <TermLink href="/festivals-culture/art-dance-and-music-traditions/folk-dances-of-india">Garba</TermLink> from Gujarat are two of the best-known examples, but nearly every Indian state and region has its own: Bihu in Assam, Lavani in Maharashtra, Ghoomar in Rajasthan, and many more.</div>}
        detailed={<div className="prose-p">The formal line between &quot;folk&quot; and &quot;classical&quot; in Indian dance is a transmission difference, not a quality judgment: classical forms trace to a documented technical treatise and are taught through a fixed, examined curriculum, while folk dances are passed within a community — often within a family or village — with room for local variation and improvisation from one performance or generation to the next. That means a folk dance can be genuinely ancient (some harvest dances likely predate written classical treatises) while still being classified as folk simply because its transmission stayed informal. A handful of forms complicate the boundary: Chhau, practiced across Odisha, Jharkhand, and West Bengal, blends masked dance-drama with martial-arts-derived footwork and has its own regional gharanas (schools) with fairly disciplined training — closer in rigor to a classical form, yet officially categorized as folk/tribal by India&apos;s Sangeet Natak Akademi, and separately recognized by UNESCO as intangible cultural heritage in its own right.</div>}
      />
      <FootnoteAside>Garba, danced during Navratri, is traditionally performed around a central lamp or image representing the goddess — the circular formation itself is meant to represent the cycle of life, not just a convenient way to fit more dancers in a space.</FootnoteAside>

      <QuickCheck
        question="What is the main formal difference between a folk dance and a classical dance in the Indian context?"
        options={[
          { text: "Folk dances are always more recent than classical dances", correct: false, explanation: "Age isn't the dividing line — many folk traditions are very old. Some may predate the codification of classical forms." },
          { text: "Folk dances are transmitted informally within a community and allow variation, while classical forms follow a codified technique taught through formal, examined training", correct: true, explanation: "Correct. This transmission and standardization difference is what separates the two categories, not age, popularity, or perceived seriousness." },
          { text: "Folk dances are performed only by children, while classical dances are performed only by trained adults", correct: false, explanation: "Both categories are performed by dancers of all ages, and both require real skill — the difference is in how the technique is transmitted and standardized." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Bhangra — the baseline case</h3>
      <div className="prose-p">Bhangra originated as a Punjabi harvest-season dance, traditionally performed by farmers celebrating the wheat harvest around the Vaisakhi festival in April. It&apos;s danced in a loose circle to the beat of the dhol (a large two-headed drum), with high jumps, shoulder shrugs, and call-and-response singing (boliyan). There&apos;s no single fixed choreography — regional and family styles vary, and the dance is meant to be joined in, not just watched, which is a core marker of the folk category.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Chhau — the boundary case</h3>
      <div className="prose-p">Chhau, practiced in three regional styles (Seraikella, Purulia, and Mayurbhanj) across Odisha, Jharkhand, and West Bengal, complicates the folk/classical divide. It combines masked dance-drama depicting stories from the Mahabharata and Ramayana with vigorous, martial-arts-influenced movement, taught within disciplined regional schools. Despite that rigor, it remains officially classified as a folk/tribal form by India&apos;s Sangeet Natak Akademi — it does hold its own distinct international recognition, though, as an element on UNESCO&apos;s Representative List of Intangible Cultural Heritage, inscribed in 2010, which is a separate honor from India&apos;s domestic classical/folk classification.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Garba and Dandiya today — the applied case</h3>
      <div className="prose-p">Garba and its stick-dance counterpart Dandiya Raas have moved well beyond devotional Navratri gatherings into large ticketed events, competitive dance circuits, and diaspora community celebrations in cities from Leicester to New Jersey, often set to newly composed pop-Garba music rather than only traditional devotional songs. The core circular, participatory structure survives even as the setting shifts from temple courtyard to stadium — a sign of a living folk tradition adapting rather than staying frozen in one historical form.</div>

      <QuickCheck
        question="Why is Chhau considered a boundary case between folk and classical dance in India?"
        options={[
          { text: "Because it is the newest dance tradition in India", correct: false, explanation: "Chhau's regional traditions are old, not recent — its ambiguous classification isn't about age." },
          { text: "Because it combines disciplined, school-based training with masked dance-drama, yet remains officially classified as folk/tribal despite that rigor, while holding separate UNESCO intangible heritage status", correct: true, explanation: "Correct. Chhau has structured regional training schools more typical of classical forms, but India's domestic classification still places it in the folk/tribal category." },
          { text: "Because it is performed exclusively outside India", correct: false, explanation: "Chhau is practiced within India, specifically in Odisha, Jharkhand, and West Bengal." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming &apos;folk&apos; means less skilled or less serious than &apos;classical.&apos;", fix: "The distinction is about transmission and codification, not skill or seriousness — Chhau's training discipline rivals many classical forms despite its folk/tribal classification." },
          { mistake: "Treating one region's folk dance (like Bhangra) as representative of &apos;Indian folk dance&apos; generally.", fix: "India has hundreds of distinct folk traditions tied to specific states and communities — Bhangra is Punjabi, Lavani is Maharashtrian, Bihu is Assamese, and each has its own music, formation, and occasion." },
          { mistake: "Assuming folk dances have one fixed, official choreography like a classical margam.", fix: "Folk dances are informally transmitted and typically allow regional and generational variation — there's no single certified version the way there is for a classical repertoire piece." },
        ]}
      />
      <MisconceptionCallout
        myth="&apos;Folk dance&apos; and &apos;classical dance&apos; are basically interchangeable terms — both just mean &apos;traditional Indian dance.&apos;"
        reality={<p>They&apos;re formally distinct categories in India&apos;s own cultural classification system. Classical status requires a documented technical treatise, a codified and formally taught vocabulary, and continuous teacher-to-student transmission recognized by the Sangeet Natak Akademi — criteria that only eight forms currently meet. Folk dances, numbering in the hundreds, are community-transmitted and allow regional variation. Using the terms interchangeably erases a real, functioning distinction that shapes how each tradition is taught, funded, and preserved in India today.</p>}
      />

      <QuickCheck
        question="Which of these is the clearest sign a dance tradition is classified as &apos;folk&apos; rather than &apos;classical&apos; in India?"
        options={[
          { text: "It is performed at a festival rather than in a theater", correct: false, explanation: "Both folk and classical dances are performed at festivals as well as on formal stages — venue doesn't determine the category." },
          { text: "It is transmitted informally within a community, without a single codified technique or Sangeet Natak Akademi classical recognition", correct: true, explanation: "Correct. Informal, community-based transmission and the absence of formal classical recognition are the defining markers, regardless of the dance's age or skill level." },
          { text: "It uses live drumming rather than recorded music", correct: false, explanation: "Both folk and classical Indian dance traditionally use live musical accompaniment — this isn't a distinguishing factor." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see Bhangra or Garba at an event, notice it's tied to a real occasion historically — Bhangra to the Vaisakhi harvest, Garba to Navratri — even when performed outside that season today.",
          "When someone says &apos;Indian folk dance,&apos; ask which region or state they mean — there is no single generic form, only distinct regional traditions.",
          "Look for Chhau performances or documentation as a case study in how a tradition can straddle the folk/classical line depending on which classification system (India's domestic one, or UNESCO's) is being used.",
          "Notice whether a folk dance you're watching follows a fixed sequence or allows visible improvisation — that flexibility is a real structural marker of the folk category.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between folk dance and classical dance in India?", answer: "Classical dance follows a codified technique tied to a documented treatise and is taught through formal, examined training recognized by India's Sangeet Natak Akademi. Folk dance is transmitted informally within a community and allows regional and generational variation — the distinction is about transmission and standardization, not age or skill." },
          { question: "What is the most famous Indian folk dance?", answer: "Bhangra, from Punjab, and Garba, from Gujarat, are probably the two most internationally recognized, partly due to large diaspora communities keeping both traditions visible abroad — but neither is more &apos;representative&apos; of Indian folk dance overall than hundreds of other regional forms." },
          { question: "Is Bhangra a classical dance?", answer: "No — Bhangra is classified as a folk dance. It originated as an informal Punjabi harvest celebration and was never codified into the kind of fixed technical curriculum that defines India's eight recognized classical forms." },
          { question: "What is Chhau dance?", answer: "Chhau is a masked, semi-martial dance-drama tradition from Odisha, Jharkhand, and West Bengal, danced in three distinct regional styles. It's classified as folk/tribal in India's domestic system but separately recognized by UNESCO as intangible cultural heritage." },
          { question: "Why do Indian folk dances vary so much between states?", answer: "Because they developed independently within specific regional communities, tied to local occasions like harvests, festivals, or life events, and were passed on informally rather than through one centralized training or classification system — so each region's climate, agriculture, and festival calendar shaped a distinct tradition." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
