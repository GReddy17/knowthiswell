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
  title: "Classical Indian Dance Forms Overview",
  category: "festivals-culture",
  order: 30,
  subtopic: "art-dance-and-music-traditions",
  tags: ["classical indian dance", "bharatanatyam", "kathak", "odissi", "kathakali", "sangeet natak akademi"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "India has eight officially recognized classical dance forms, each tied to a distinct region, technique, and repertoire — not one shared style.",
  summary: "Classical Indian dance is not a single tradition but a family of eight regionally distinct, formally codified performance styles — Bharatanatyam, Kathak, Odissi, Kathakali, Manipuri, Kuchipudi, Mohiniyattam, and Sattriya — each recognized by India's national academy for the performing arts.",
  sources: [
    { label: "Sangeet Natak Akademi — National Academy of Music, Dance and Drama, Government of India", url: "https://sangeetnatak.gov.in/" },
    { label: "Encyclopaedia Britannica — Bharata-natyam", url: "https://www.britannica.com/art/Bharata-natyam" },
    { label: "Encyclopaedia Britannica — Kathakali", url: "https://www.britannica.com/art/Kathakali" },
    { label: "Encyclopaedia Britannica — South Asian arts", url: "https://www.britannica.com/art/South-Asian-arts" },
  ],
  seeAlso: [
    "festivals-culture/folk-dances-of-india",
    "festivals-culture/world-dance-traditions-overview",
    "festivals-culture/navratri-and-durga-puja",
    "festivals-culture/common-festival-myths-and-misconceptions",
  ],
  glossary: [
    { term: "Natya Shastra", definition: "The ancient Sanskrit treatise on dramatic and performing arts, traditionally attributed to the sage Bharata, that underlies the technique and aesthetic theory of most classical Indian dance forms." },
    { term: "Mudra", definition: "A stylized hand gesture used in classical Indian dance to convey specific words, objects, or ideas as part of a codified visual vocabulary." },
    { term: "Abhinaya", definition: "The art of expressive storytelling in Indian dance and theatre, conveyed through facial expression, gesture, and body movement rather than words." },
    { term: "Sangeet Natak Akademi", definition: "India's national academy for music, dance, and drama, established in 1952, which formally recognizes eight classical dance forms and sets criteria distinguishing classical from folk traditions." },
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
          "India's national academy for the performing arts formally recognizes eight classical dance forms, each tied to a specific region, with its own technique, repertoire, and training lineage — not one shared style with regional costumes.",
          "What makes a dance form &apos;classical&apos; rather than &apos;folk&apos; in this context is a documented technical treatise, a codified grammar of movement and gesture, and a continuous teacher-to-student (guru-shishya) transmission — not simply age or popularity.",
          "Several forms look outwardly similar to an untrained eye (elaborate costume, bells, hand gestures) but differ sharply in footwork, storytelling method, and origin — Bharatanatyam and Kathak, for instance, come from opposite ends of the subcontinent and developed under very different historical influences.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">&quot;Classical Indian dance&quot; is not one dance — it&apos;s a family of eight distinct, formally recognized styles, each from a different part of India: Bharatanatyam (Tamil Nadu), Kathak (North India), Odissi (Odisha), Kathakali (Kerala), Manipuri (Manipur), Kuchipudi (Andhra Pradesh), Mohiniyattam (Kerala), and Sattriya (Assam). Each has its own costume, music, hand gestures (<TermLink href="/festivals-culture/art-dance-and-music-traditions/classical-indian-dance-forms-overview">mudras</TermLink>), and stories it tells, and dancers train for years under a single teacher before performing in public.</div>}
        detailed={<div className="prose-p">India&apos;s Sangeet Natak Akademi — the government body that formally classifies these forms — draws its criteria from the <TermLink href="/festivals-culture/art-dance-and-music-traditions/classical-indian-dance-forms-overview">Natya Shastra</TermLink>, a Sanskrit text on dramatic theory dated roughly between the 2nd century BCE and 2nd century CE, which codifies stance, gesture, rhythm, and expressive technique (<TermLink href="/festivals-culture/art-dance-and-music-traditions/classical-indian-dance-forms-overview">abhinaya</TermLink>) still taught today. A style earns &quot;classical&quot; status by having a documented technical lineage tracing to this or comparable treatises, a fixed vocabulary of movement rather than improvisation, and unbroken transmission through a guru-shishya (teacher-student) system — criteria that separate it from regional folk dance, which can be just as old but is passed on informally and varies performance to performance. Sattriya, from Assam, is the most recently added of the eight, formally recognized only in 2000, having developed inside Vaishnavite monasteries (sattras) founded by the 15th–16th-century reformer Srimanta Sankardev — a reminder that the list itself is a 20th- and 21st-century classification project applied to traditions of very different ages, not a fixed ancient canon.</div>}
      />
      <FootnoteAside>The number of &quot;classical&quot; forms isn&apos;t fixed by ancient tradition — it&apos;s a modern administrative list. Sattriya was only added in 2000, and some scholars argue Chhau (a masked dance-drama from eastern India) deserves comparable recognition, though it remains officially classified as folk/tribal.</FootnoteAside>

      <QuickCheck
        question="What formally distinguishes a &apos;classical&apos; Indian dance form from a folk dance, according to the Sangeet Natak Akademi&apos;s criteria?"
        options={[
          { text: "Classical forms are simply older than folk dances", correct: false, explanation: "Age alone isn't the criterion — many folk traditions are just as old. The distinction rests on documented technique and formal transmission, not age." },
          { text: "A documented technical treatise, a codified movement vocabulary, and continuous formal teacher-to-student training", correct: true, explanation: "Correct. This is what separates a recognized classical form from a folk tradition, which can be equally old but is passed on informally and allows more regional variation." },
          { text: "Classical forms are performed only in temples, while folk dances are performed only at weddings", correct: false, explanation: "Both classical and folk forms appear in temples, festivals, weddings, and staged performances — venue isn't the distinguishing factor." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Bharatanatyam — the baseline case</h3>
      <div className="prose-p">Bharatanatyam, from Tamil Nadu, is the form most people picture first: precise geometric poses, a fixed repertory sequence (margam) that moves from pure rhythmic dance into expressive storytelling, and a solo female dancer accompanied by Carnatic vocal music, a mridangam drummer, and a nattuvanar who recites the rhythm aloud. It traces its documented lineage to temple dancers (devadasis) and was codified into its modern performance structure in the early 20th century by the Tanjore Quartet. Training typically culminates in an arangetram, a dancer&apos;s formal debut solo performance after years of study.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Kathakali — a stylistic exception</h3>
      <div className="prose-p">Kathakali, from Kerala, breaks the &quot;solo female dancer&quot; pattern entirely: it&apos;s historically an all-male, elaborately masked and costumed dance-drama, with performers wearing towering headdresses and painted faces (green for noble characters, red-and-white beards for the villainous) to enact scenes from the Mahabharata and Ramayana over an entire night. Its footwork and body training draw directly from Kalaripayattu, a Kerala martial art, giving it a physically explosive quality that contrasts sharply with Bharatanatyam&apos;s more contained geometry — proof that &quot;classical Indian dance&quot; covers genuinely different movement philosophies, not one aesthetic with regional decoration.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Classical dance today — the applied case</h3>
      <div className="prose-p">These forms are actively practiced, not preserved as museum pieces: dance academies (natyalayas) across India and in diaspora cities from London to Chicago train new generations toward an arangetram, the Sangeet Natak Akademi awards annual fellowships to senior practitioners, and choreographers regularly stage new works within a form&apos;s traditional vocabulary rather than only reviving historical repertoire. Bharatanatyam and Kathak sequences also turn up choreographed into Indian film and television, which is often where non-specialist audiences see the technique first, even though the staged and screen versions are usually compressed and reworked from the full classical repertoire.</div>

      <QuickCheck
        question="Which classical form's technique is most directly rooted in a Kerala martial art?"
        options={[
          { text: "Kathakali, via Kalaripayattu", correct: true, explanation: "Correct. Kathakali performers train in Kalaripayattu, which shapes its explosive footwork and physical stamina requirements." },
          { text: "Bharatanatyam, via Kalaripayattu", correct: false, explanation: "Bharatanatyam developed from temple dance traditions in Tamil Nadu, not from a martial art." },
          { text: "Odissi, via Kalaripayattu", correct: false, explanation: "Odissi, from Odisha, developed from temple sculpture-inspired poses and devotional (bhakti) traditions, not Kalaripayattu, which is specific to Kerala." },
        ]}
      />

      <DiagramBlock
        title="The eight classical dance forms and their state of origin"
        type="detail"
        svgSrc="/diagrams/festivals-culture-classical-indian-dance-forms-overview-regional-map.svg"
        altText="A simplified map-style chart listing India's eight Sangeet Natak Akademi-recognized classical dance forms next to their state or region of origin: Bharatanatyam (Tamil Nadu), Kathak (North India, especially Uttar Pradesh), Odissi (Odisha), Kathakali (Kerala), Mohiniyattam (Kerala), Kuchipudi (Andhra Pradesh), Manipuri (Manipur), and Sattriya (Assam)."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Referring to any elaborately costumed Indian dance performance as &apos;Bharatanatyam.&apos;", fix: "Bharatanatyam is one of eight distinct forms — check the accompanying music, footwork style, and costume against the specific form's known conventions before naming it." },
          { mistake: "Assuming all eight forms are equally ancient.", fix: "Their codification dates vary widely — Sattriya wasn't formally recognized as classical until 2000, even though the monastic tradition it draws from is centuries old." },
          { mistake: "Treating Bollywood or stage-adapted dance sequences as an accurate full representation of a classical form.", fix: "Screen and stage adaptations are usually shortened, stylized excerpts — the full classical repertoire (margam, for example, in Bharatanatyam) is a much longer, structured sequence rarely shown in full outside a dedicated recital." },
        ]}
      />
      <MisconceptionCallout
        myth="All Indian classical dance is basically &apos;the same style&apos; — colorful costumes and hand gestures with regional names attached."
        reality={<p>The eight recognized forms differ in fundamental ways: Bharatanatyam&apos;s geometric solo technique, Kathakali&apos;s all-male masked dance-drama rooted in a martial art, Kathak&apos;s spins and rhythmic footwork shaped by both Hindu temple and Mughal court traditions, and Odissi&apos;s sculpture-inspired poses are genuinely distinct systems of training, storytelling, and music — not variations on one shared choreography. Treating them as interchangeable is roughly equivalent to calling ballet, flamenco, and tap &quot;basically the same&quot; because they&apos;re all staged Western dance.</p>}
      />

      <QuickCheck
        question="Why is it inaccurate to describe the eight classical Indian dance forms as &apos;regional versions of the same dance&apos;?"
        options={[
          { text: "Because only Bharatanatyam is officially recognized as classical", correct: false, explanation: "All eight forms carry equal official classical status from the Sangeet Natak Akademi — recognition isn't limited to Bharatanatyam." },
          { text: "Because each form has its own distinct technique, training lineage, music, and repertoire, not a shared base choreography with local styling", correct: true, explanation: "Correct. The differences are structural — technique, storytelling method, and even the martial or devotional traditions each form draws from — not just costume or music variation on one core dance." },
          { text: "Because they are performed in different centuries and no longer coexist today", correct: false, explanation: "All eight forms are actively taught and performed today, often simultaneously in the same city at different dance academies." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you watch an Indian classical dance clip online, check the description for which of the eight forms it is — the technique and story-telling method genuinely differ.",
          "Notice the accompanying music: Bharatanatyam, Kuchipudi, and Mohiniyattam use Carnatic (South Indian) music, while Kathak uses Hindustani (North Indian) music — a quick way to place a performance regionally.",
          "If you see an all-male, heavily masked dance-drama performed over a full night, that's very likely Kathakali, not a generic &apos;temple dance.&apos;",
          "Look up whether a dance academy or event near you specializes in a specific classical form before assuming a general &apos;Indian dance&apos; class covers all eight equally.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How many classical dance forms does India have?", answer: "Eight are formally recognized by the Sangeet Natak Akademi: Bharatanatyam, Kathak, Odissi, Kathakali, Manipuri, Kuchipudi, Mohiniyattam, and Sattriya." },
          { question: "What is the difference between Bharatanatyam and Kathak?", answer: "Bharatanatyam is a South Indian (Tamil Nadu) form built on geometric poses and Carnatic music, traditionally a solo female performance. Kathak is a North Indian form built around fast spins, rhythmic footwork, and storytelling through mime, shaped by both Hindu temple traditions and Mughal court patronage, and is traditionally performed by dancers of any gender." },
          { question: "What makes a dance form &apos;classical&apos; in India?", answer: "A documented technical treatise (most trace to the Natya Shastra), a codified, non-improvised vocabulary of movement and gesture, and unbroken transmission through formal teacher-to-student training — criteria set by the Sangeet Natak Akademi, India's national performing arts academy." },
          { question: "Is Kathakali only performed by men?", answer: "Historically, yes — Kathakali developed as an all-male tradition, partly due to its Kalaripayattu martial-art physical demands and its origin in temple and royal-court settings. Women have trained in and performed Kathakali since the 20th century, but the classical repertoire and training lineage remain rooted in that all-male history." },
          { question: "What is an arangetram?", answer: "A dancer's formal debut solo performance, most associated with Bharatanatyam, marking the completion of years of structured training under a single teacher before a public audience." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
