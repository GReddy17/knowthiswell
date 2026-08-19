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
  title: "World Dance Traditions Overview",
  category: "festivals-culture",
  order: 32,
  subtopic: "art-dance-and-music-traditions",
  tags: ["world dance", "flamenco", "capoeira", "hula", "cultural traditions", "intangible heritage"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "From Spanish flamenco to Brazilian capoeira to Hawaiian hula, traditional dance forms exist on every continent, each shaped by distinct history, purpose, and social role.",
  summary: "World dance traditions are region-specific performance and social practices — from flamenco in Spain to capoeira in Brazil to hula in Hawaii — each carrying its own history, technique, and cultural function, spanning far beyond any single continent's traditions.",
  sources: [
    { label: "Encyclopaedia Britannica — Dance", url: "https://www.britannica.com/art/dance" },
    { label: "Encyclopaedia Britannica — Flamenco", url: "https://www.britannica.com/art/flamenco" },
    { label: "UNESCO — Lists of Intangible Cultural Heritage", url: "https://ich.unesco.org/en/lists" },
    { label: "Smithsonian Center for Folklife and Cultural Heritage", url: "https://festival.si.edu/" },
  ],
  seeAlso: [
    "festivals-culture/art-dance-and-music-traditions/classical-indian-dance-forms-overview",
    "festivals-culture/art-dance-and-music-traditions/folk-dances-of-india",
    "festivals-culture/art-dance-and-music-traditions/traditional-music-instruments-around-the-world",
    "festivals-culture/culture-curiosities/common-festival-myths-and-misconceptions",
  ],
  glossary: [
    { term: "Intangible cultural heritage", definition: "Living cultural practices — including dance, music, oral traditions, and rituals — recognized and safeguarded under UNESCO's 2003 Convention, as distinct from physical heritage sites like monuments." },
    { term: "Flamenco", definition: "A performance art from Andalusia, southern Spain, combining singing (cante), guitar, dance (baile), and handclaps/finger-snaps (palmas), shaped by Romani, Andalusian, and North African influences." },
    { term: "Capoeira", definition: "A Brazilian practice combining dance, acrobatics, music, and martial-arts elements, developed among enslaved and formerly enslaved Africans and their descendants in Brazil." },
    { term: "Roda", definition: "The circle formed by participants and musicians within which a game of capoeira is played, central to the practice's social and musical structure." },
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
          "Every inhabited continent has distinct traditional dance forms with their own history, technique, and social purpose — dance traditions aren't concentrated in any one region of the world.",
          "Some dance traditions developed for reasons beyond performance or entertainment — capoeira, for example, blends dance with a martial art and grew out of resistance and community-building among enslaved people in Brazil.",
          "International recognition, such as UNESCO's Intangible Cultural Heritage lists, documents and helps safeguard living dance traditions — flamenco, tango, and capoeira are among the forms inscribed, alongside many others worldwide.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Traditional dance exists in every part of the world, not just in a handful of well-known styles. Spain has <TermLink href="/festivals-culture/art-dance-and-music-traditions/world-dance-traditions-overview">flamenco</TermLink>, Brazil has <TermLink href="/festivals-culture/art-dance-and-music-traditions/world-dance-traditions-overview">capoeira</TermLink>, Hawaii has hula, Ireland has step dance, and countless other regions — from West African dance traditions to Japanese Bon Odori to Andean folk dances — have their own distinct forms, each shaped by local history, music, and purpose.</div>}
        detailed={<div className="prose-p">What counts as a &quot;dance tradition&quot; varies more than it might seem: some are primarily performance art (flamenco, built around cante, guitar, and baile), some are social and participatory (line and circle dances performed at community gatherings), and some blur into other categories entirely — capoeira combines dance, music, and martial-arts sparring within a circle called a <TermLink href="/festivals-culture/art-dance-and-music-traditions/world-dance-traditions-overview">roda</TermLink>, developed among enslaved and formerly enslaved Africans in Brazil, historically disguised partly as dance and play to be practiced under conditions where organized resistance and martial training were suppressed. UNESCO&apos;s Representative List of Intangible Cultural Heritage, established under the 2003 Convention, formally documents living traditions like these — flamenco (Spain, inscribed 2010) and the roda de capoeira (Brazil, inscribed 2014) are both listed, alongside dozens of other dance and dance-adjacent traditions from Asia, Africa, Europe, and the Americas, reflecting how widely distributed serious, documented dance heritage actually is.</div>}
      />
      <FootnoteAside>Capoeira is sometimes introduced to outsiders as &quot;Brazilian martial arts dance,&quot; but that undersells its history — its playful, musical form is widely understood by historians to have developed partly as a way to practice combat technique while appearing to authorities as mere dance and music.</FootnoteAside>

      <QuickCheck
        question="Which of these best describes the global distribution of serious, documented traditional dance forms?"
        options={[
          { text: "They are concentrated mainly in Europe and India", correct: false, explanation: "Documented dance traditions span every inhabited continent — Africa, the Americas, Asia, Europe, and Oceania all have distinct, well-documented forms." },
          { text: "They exist across every inhabited continent, each shaped by local history and purpose", correct: true, explanation: "Correct. Flamenco (Spain), capoeira (Brazil), hula (Hawaii), and many other traditions from every region show how widely distributed dance heritage is." },
          { text: "They are a modern category invented largely for tourism", correct: false, explanation: "Most traditional dance forms predate any tourism industry by centuries and developed for social, religious, or community reasons, not for visitors." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Flamenco — the baseline case</h3>
      <div className="prose-p">Flamenco developed in Andalusia, southern Spain, shaped over centuries by Romani (Gitano), Andalusian, Jewish, and Moorish cultural influences in the region. It combines cante (singing), toque (guitar playing), and baile (dance), with palmas (handclaps) and often castanets or foot-stomping (zapateado) providing rhythm. It&apos;s traditionally performed both informally, in intimate gatherings, and formally, on stage — a genuine performance art with codified technique, recognized by UNESCO as intangible cultural heritage in 2010.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Capoeira — the boundary-crossing exception</h3>
      <div className="prose-p">Capoeira doesn&apos;t fit neatly into &quot;dance&quot; alone — it combines dance, acrobatics, live music (led by the berimbau, a single-string percussion bow), and sparring-like movement within a circle of participants (the roda). Developed among enslaved Africans and their descendants in Brazil, it was suppressed and even criminalized in the late 19th and early 20th centuries before gaining recognition as a national cultural practice. Its dual identity as both dance and martial art makes it a genuine exception to a simple &quot;dance is just performance&quot; framing.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Hula in Hawaii today — the applied case</h3>
      <div className="prose-p">Hula remains an actively taught and performed tradition in Hawaii today, organized around hula halau (schools) led by a kumu hula (teacher), and ranges from hula kahiko (traditional, chant-accompanied) to hula auana (modern, often accompanied by guitar and ukulele). Far from a static tourist performance, hula carries ongoing cultural and even political significance in Hawaii as a living vehicle for language, genealogy, and history — reinforcing that these are practiced traditions, not frozen historical artifacts, even where they&apos;re also visible to visitors.</div>

      <QuickCheck
        question="What makes capoeira difficult to classify as simply a &apos;dance&apos;?"
        options={[
          { text: "It has no musical accompaniment", correct: false, explanation: "Capoeira is built around live music, especially the berimbau — music is central to it, not absent." },
          { text: "It combines dance, acrobatics, live music, and martial-arts-like sparring movement within a single practice", correct: true, explanation: "Correct. Capoeira's hybrid nature — part dance, part martial art, part musical tradition — is exactly why it resists a single simple category." },
          { text: "It was invented recently and has no historical roots", correct: false, explanation: "Capoeira has deep historical roots, developed among enslaved and formerly enslaved Africans in Brazil, well documented over centuries, not a recent invention." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a well-known dance form (flamenco, hula, tango) is a single unchanged style performed the same way everywhere.", fix: "Each has regional and generational variation — hula alone splits into distinct traditional (kahiko) and modern (auana) styles, and flamenco has multiple regional palos (song/dance forms) with their own rhythm and mood." },
          { mistake: "Treating any dance with acrobatic or combative movement as automatically not a &apos;real&apos; dance tradition.", fix: "Capoeira is a well-documented, internationally recognized dance-and-martial-art hybrid — hybrid forms are a normal, historically important category, not an edge case to dismiss." },
          { mistake: "Assuming dance traditions with tourist visibility (like staged hula shows) represent the full tradition.", fix: "Tourist-facing performances are usually a simplified excerpt — the full living practice, taught through schools like hula halau or capoeira academies, is deeper and still actively transmitted within the originating community." },
        ]}
      />
      <MisconceptionCallout
        myth="Traditional dance heritage worth studying seriously is mostly a European or South Asian phenomenon — other regions have &apos;folk dances&apos; but not comparably documented traditions."
        reality={<p>UNESCO&apos;s own Intangible Cultural Heritage lists directly contradict this: they include inscribed dance and dance-adjacent traditions from Brazil (capoeira), Spain (flamenco), Argentina and Uruguay (tango), and dozens of forms from Asia, Africa, and the Pacific, each with the same formal international recognition. The perception that certain regions have &quot;real&quot; dance history while others have only informal folk custom reflects uneven media visibility, not the actual historical or documentary record.</p>}
      />

      <QuickCheck
        question="What does the presence of dance-related entries from Brazil, Spain, and Argentina/Uruguay on UNESCO's Intangible Cultural Heritage lists demonstrate?"
        options={[
          { text: "That only these three countries have historically significant dance traditions", correct: false, explanation: "Many countries across Asia, Africa, and the Pacific also have inscribed dance-related intangible heritage — these three are examples, not an exhaustive or exclusive set." },
          { text: "That formally documented, internationally recognized dance heritage spans multiple continents and cultures, not just one region", correct: true, explanation: "Correct. The geographic spread of UNESCO's inscriptions shows that serious, documented dance traditions exist worldwide, not in one privileged region." },
          { text: "That UNESCO only recognizes dances that are also martial arts", correct: false, explanation: "UNESCO's lists include many pure dance and performance traditions with no martial-arts component at all — capoeira's hybrid nature is not a requirement for recognition." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you watch a flamenco or hula performance, notice whether it's described as a traditional or modern style — both exist, and they're not interchangeable.",
          "If you see capoeira, notice the roda (circle) and the berimbau player leading the rhythm — these structural elements are constant across capoeira groups worldwide.",
          "Look up whether a dance tradition you're curious about is on UNESCO's Intangible Cultural Heritage lists — it's a useful, verifiable starting point for its documented history.",
          "Be cautious with any claim that a region &apos;doesn't have&apos; serious dance traditions — it usually reflects limited exposure, not an actual absence of documented heritage.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are some examples of traditional dances from around the world?", answer: "Flamenco (Spain), capoeira (Brazil), hula (Hawaii), tango (Argentina/Uruguay), Irish step dance, West African dance traditions, and Bon Odori (Japan) are a few well-documented examples, spanning every inhabited continent." },
          { question: "Is capoeira a dance or a martial art?", answer: "Both — capoeira combines dance, acrobatics, live music, and martial-arts-like sparring within a single practice, developed among enslaved and formerly enslaved Africans in Brazil. It genuinely resists being placed in only one category." },
          { question: "What is the difference between hula kahiko and hula auana?", answer: "Hula kahiko is the traditional style, typically accompanied by chant and percussion instruments. Hula auana is the more modern style, usually accompanied by melodic instruments like guitar and ukulele — both are actively taught and performed today." },
          { question: "Why is flamenco associated with Spain?", answer: "Flamenco developed in Andalusia, in southern Spain, shaped by Romani (Gitano), Andalusian, and other regional cultural influences over centuries — it remains most strongly associated with that specific region rather than Spain as a whole." },
          { question: "What does it mean for a dance to be UNESCO Intangible Cultural Heritage?", answer: "It means the practice has been formally inscribed on UNESCO's Representative List under the 2003 Convention for the Safeguarding of Intangible Cultural Heritage, recognizing it as a living cultural tradition worth documenting and safeguarding — flamenco and capoeira are both examples." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
