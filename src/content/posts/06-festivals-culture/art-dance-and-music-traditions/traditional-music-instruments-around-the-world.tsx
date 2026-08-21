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
  title: "Traditional Music Instruments Around the World",
  category: "festivals-culture",
  order: 33,
  subtopic: "art-dance-and-music-traditions",
  tags: ["traditional instruments", "sitar", "djembe", "didgeridoo", "world music", "ethnomusicology"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Traditional instruments like the sitar, djembe, didgeridoo, and steelpan are still actively played today, spanning every continent and instrument family.",
  summary: "Traditional musical instruments are region-specific instruments developed within a particular culture's musical system — spanning string, percussion, and wind families across every continent, from India's sitar to West Africa's djembe to Trinidad's steelpan, and most remain in active, living use today.",
  sources: [
    { label: "Encyclopaedia Britannica — Musical instrument", url: "https://www.britannica.com/art/musical-instrument" },
    { label: "Encyclopaedia Britannica — Sitar", url: "https://www.britannica.com/art/sitar" },
    { label: "Smithsonian National Museum of American History — Musical Instruments Collection", url: "https://americanhistory.si.edu/collections/music" },
    { label: "Sangeet Natak Akademi — National Academy of Music, Dance and Drama, Government of India", url: "https://sangeetnatak.gov.in/" },
  ],
  seeAlso: [
    "festivals-culture/world-dance-traditions-overview",
    "festivals-culture/classical-indian-dance-forms-overview",
    "festivals-culture/folk-dances-of-india",
    "festivals-culture/navratri-and-durga-puja",
  ],
  glossary: [
    { term: "Hornbostel-Sachs system", definition: "A widely used classification system for musical instruments, sorting them by how they produce sound: idiophones, membranophones, chordophones, aerophones, and (in later revisions) electrophones." },
    { term: "Chordophone", definition: "An instrument that produces sound from a vibrating string, such as a sitar, guitar, or violin." },
    { term: "Membranophone", definition: "An instrument that produces sound from a vibrating stretched membrane, such as a djembe or tabla drum." },
    { term: "Idiophone", definition: "An instrument that produces sound from the vibration of its own solid material, without strings or a stretched membrane — such as a steelpan, xylophone, or gong." },
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
          "Traditional instruments exist across every continent and every major instrument family — strings, percussion, and wind — not concentrated in any single musical tradition.",
          "Ethnomusicologists classify instruments by how they physically produce sound (the Hornbostel-Sachs system), which cuts across cultural boundaries — a djembe (Africa) and a tabla (India) are both membranophones, despite unrelated origins.",
          "&apos;Traditional&apos; doesn&apos;t mean unchanging or historical only — instruments like Trinidad's steelpan were invented in the 20th century and are still considered a genuine national traditional instrument, actively played and taught today.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Traditional instruments are the instruments developed and used within a specific culture&apos;s music, often over generations, before mass manufacturing and global music genres spread instruments like the piano or electric guitar everywhere. Examples include the <TermLink href="/festivals-culture/art-dance-and-music-traditions/traditional-music-instruments-around-the-world">sitar</TermLink> (India), the djembe (West Africa), the didgeridoo (Aboriginal Australia), the erhu (China), the shamisen (Japan), and the bagpipes (Scotland and several other regions). Each is tied to its own musical system, technique, and cultural role.</div>}
        detailed={<div className="prose-p">Ethnomusicologists commonly classify instruments using the <TermLink href="/festivals-culture/art-dance-and-music-traditions/traditional-music-instruments-around-the-world">Hornbostel-Sachs system</TermLink>, first published in 1914, which groups instruments by their physical sound-production method rather than by culture of origin: <TermLink href="/festivals-culture/art-dance-and-music-traditions/traditional-music-instruments-around-the-world">chordophones</TermLink> (vibrating strings, like the sitar or the West African kora), <TermLink href="/festivals-culture/art-dance-and-music-traditions/traditional-music-instruments-around-the-world">membranophones</TermLink> (vibrating membranes, like the djembe or the Indian tabla), <TermLink href="/festivals-culture/art-dance-and-music-traditions/traditional-music-instruments-around-the-world">idiophones</TermLink> (the instrument&apos;s own material vibrates, like a steelpan or a gong), and aerophones (vibrating air columns, like the didgeridoo or bagpipes). This system reveals unexpected structural links between unrelated cultures — a djembe and a tabla, despite having no shared history, are both membranophones and share basic acoustic principles, even though their playing technique, tuning, and musical role differ completely.</div>}
      />
      <FootnoteAside>The didgeridoo is considered one of the world&apos;s oldest wind instruments still played in its original form, with archaeological and rock art evidence suggesting Aboriginal Australian communities in Arnhem Land have used it for well over a thousand years — and it remains an actively played, ceremonially significant instrument today, not a historical relic.</FootnoteAside>

      <QuickCheck
        question="What is the Hornbostel-Sachs system used for?"
        options={[
          { text: "Ranking instruments by how old they are", correct: false, explanation: "The system doesn't rank instruments by age — it classifies them by physical sound-production method." },
          { text: "Classifying instruments by how they physically produce sound, regardless of cultural origin", correct: true, explanation: "Correct. It sorts instruments into categories like chordophones, membranophones, idiophones, and aerophones based on their acoustic mechanism." },
          { text: "Determining which instruments are officially considered 'classical' versus 'folk'", correct: false, explanation: "That folk/classical distinction is a separate, culture-specific classification (as with Indian dance) — Hornbostel-Sachs is about physical sound production, not formal status." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The sitar — the baseline case</h3>
      <div className="prose-p">The sitar is a long-necked plucked chordophone central to Hindustani (North Indian) classical music, with a distinctive resonant, buzzing timbre produced by curved frets and sympathetic strings that vibrate along with the played strings. Its modern form is generally credited to development in the 18th century, building on earlier South and Central Asian string instrument traditions, and it remains a core instrument in Indian classical performance and training today, alongside instruments like the tabla and the veena.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The steelpan — a &quot;traditional but recent&quot; exception</h3>
      <div className="prose-p">Trinidad and Tobago&apos;s steelpan (or steel drum) is a genuine exception to the assumption that &quot;traditional&quot; means centuries-old: it was developed in the 20th century, largely in the 1930s–40s, by Trinidadian musicians who tuned sections of repurposed oil drums after earlier percussion traditions were restricted. Despite its relatively recent invention, the steelpan is now widely regarded as Trinidad and Tobago&apos;s national instrument and a core part of its traditional Carnival music, taught in dedicated steel orchestras (pan yards) — proof that a tradition&apos;s legitimacy doesn&apos;t require ancient origins, only sustained, community-rooted practice.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The didgeridoo today — the applied case</h3>
      <div className="prose-p">The didgeridoo remains in active ceremonial and cultural use among Aboriginal Australian communities today, alongside a separate, much newer global popularity as a meditation, breathwork, and world-music instrument outside its originating cultural context. Traditional custodianship, technique (especially circular breathing), and the instrument&apos;s ceremonial significance within specific Aboriginal communities are distinct from — and predate by centuries — its contemporary use in unrelated global music scenes, which illustrates how a single instrument can carry both a living traditional role and a separate, more recent global life.</div>

      <QuickCheck
        question="What makes the steelpan a useful example against the assumption that &apos;traditional instrument&apos; always means ancient?"
        options={[
          { text: "It is no longer played today", correct: false, explanation: "The steelpan is very much still played today, especially in Trinidad and Tobago's Carnival music and dedicated steel orchestras." },
          { text: "It was invented in the 20th century yet is now recognized as Trinidad and Tobago's national instrument through sustained community practice", correct: true, explanation: "Correct. Its relatively recent origin, combined with genuine, sustained cultural adoption, shows that 'traditional' status doesn't require ancient age." },
          { text: "It was never adopted as part of any national musical identity", correct: false, explanation: "The opposite is true — the steelpan is closely tied to Trinidad and Tobago's national and Carnival musical identity." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a traditional instrument must be centuries or millennia old to count as &apos;traditional.&apos;", fix: "The steelpan, invented in the 20th century, shows sustained cultural adoption and community practice matter more than raw age." },
          { mistake: "Grouping visually or acoustically similar instruments from different cultures as &apos;the same instrument.&apos;", fix: "A djembe and a tabla are both membranophones under Hornbostel-Sachs classification, but they come from unrelated musical traditions with distinct technique, tuning, and cultural role — structural similarity isn't cultural equivalence." },
          { mistake: "Treating traditional instruments as only historical or museum artifacts.", fix: "Most remain in active, living use — the sitar in ongoing Indian classical training, the didgeridoo in Aboriginal Australian ceremony, the steelpan in Trinidad's Carnival — not preserved relics." },
        ]}
      />
      <MisconceptionCallout
        myth="Traditional instruments are essentially museum pieces — interesting historically, but with no real living contemporary practice."
        reality={<p>The overwhelming majority of well-known traditional instruments remain in active daily and ceremonial use. The sitar is still core to Hindustani classical training and performance; the didgeridoo continues to be played ceremonially within Aboriginal Australian communities as well as globally; the steelpan anchors Trinidad and Tobago&apos;s living Carnival music tradition. Treating these as historical artifacts erases the real, ongoing communities of musicians, teachers, and instrument-makers who sustain them today.</p>}
      />

      <QuickCheck
        question="What is the strongest evidence against the idea that traditional instruments are &apos;museum pieces&apos; with no living use?"
        options={[
          { text: "That instrument museums exist around the world", correct: false, explanation: "Museums documenting instruments' history don't say anything about whether the instruments are still actively played — both can be true at once." },
          { text: "That instruments like the sitar, didgeridoo, and steelpan remain in active teaching, ceremonial, and performance use today", correct: true, explanation: "Correct. Ongoing, living use in real communities — not just historical documentation — is what directly refutes the 'museum piece' framing." },
          { text: "That all traditional instruments have been replaced by electronic equivalents", correct: false, explanation: "This isn't accurate — traditional instruments generally coexist with, rather than get replaced by, modern electronic instruments." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you hear an unfamiliar traditional instrument, notice which Hornbostel-Sachs family it likely falls into (string, membrane, self-vibrating material, or air column) — it's a quick way to place it acoustically.",
          "Before assuming an instrument is ancient, check when it actually developed — some, like the steelpan, are newer than they seem yet are still genuinely traditional.",
          "Notice when a traditional instrument appears in a global or fusion music context, and consider whether it's being used with its originating cultural context, or lifted out of it.",
          "Look up whether an instrument you're curious about is still actively taught in its region of origin — most are, and that's a good marker of a living, not historical-only, tradition.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are some examples of traditional musical instruments from around the world?", answer: "The sitar (India), djembe (West Africa), didgeridoo (Aboriginal Australia), erhu (China), shamisen (Japan), bagpipes (Scotland and other regions), and steelpan (Trinidad and Tobago) are well-documented examples spanning multiple continents and instrument families." },
          { question: "How are musical instruments classified?", answer: "The most widely used system, Hornbostel-Sachs, classifies instruments by how they physically produce sound: chordophones (strings), membranophones (stretched membranes), idiophones (the instrument's own material), and aerophones (vibrating air columns)." },
          { question: "Is the steelpan a traditional instrument?", answer: "Yes — despite being invented relatively recently, in the 20th century, the steelpan is recognized as Trinidad and Tobago's national instrument and is central to its traditional Carnival music, showing that sustained cultural adoption, not just age, defines traditional status." },
          { question: "Is the didgeridoo still played today?", answer: "Yes — it remains in active ceremonial and cultural use within Aboriginal Australian communities, alongside a separate, more recent popularity in global music and meditation contexts outside its originating culture." },
          { question: "What family of instrument is the sitar?", answer: "The sitar is a chordophone — a stringed instrument, specifically a long-necked plucked lute central to Hindustani (North Indian) classical music." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
