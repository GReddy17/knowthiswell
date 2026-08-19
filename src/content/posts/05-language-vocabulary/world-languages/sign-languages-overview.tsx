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
  title: "Sign Languages Overview",
  category: "language-vocabulary",
  order: 30,
  subtopic: "world-languages",
  tags: ["sign language", "asl", "bsl", "deaf culture", "linguistics"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Sign languages are complete, independent languages with their own grammar — not gestured versions of the local spoken language, and there is no single universal sign language.",
  summary: "Sign languages are full natural languages, with grammar and vocabulary built from handshape, movement, location, palm orientation, and facial expression rather than sound — and there are hundreds of distinct sign languages worldwide, most not mutually intelligible and not derived from the spoken language of the surrounding hearing community.",
  sources: [
    { label: "Gallaudet University", url: "https://www.gallaudet.edu/" },
    { label: "Encyclopaedia Britannica — Sign Language", url: "https://www.britannica.com/topic/sign-language" },
    { label: "Ethnologue — Languages of the World", url: "https://www.ethnologue.com/" },
  ],
  seeAlso: [
    "language-vocabulary/language-families-explained",
    "language-vocabulary/endangered-and-extinct-languages",
    "language-vocabulary/language-myths-and-misconceptions",
  ],
  glossary: [
    { term: "Non-manual marker", definition: "A grammatical signal in a sign language carried by the face, head, or body rather than the hands — such as raised eyebrows marking a yes/no question, distinct from an emotional facial expression." },
    { term: "Fingerspelling", definition: "Spelling a word letter-by-letter using a manual alphabet, used in sign languages mainly for proper nouns, technical terms, or loanwords — a supplementary tool, not the primary way sign languages communicate." },
    { term: "BANZSL", definition: "A sign language family covering British Sign Language, Auslan (Australian Sign Language), and New Zealand Sign Language, which share a common historical origin distinct from American Sign Language." },
    { term: "Manually Coded English", definition: "An artificially constructed signing system, such as Signed Exact English, designed to represent English word-for-word using signs — built for educational use, and distinct from naturally evolved sign languages like ASL, which have independent grammars." },
    { term: "Deaf community", definition: "A cultural and linguistic community of Deaf sign-language users, often referred to with a capital 'D' to distinguish cultural identity and shared language from the audiological condition of hearing loss." },
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
          "Sign languages are complete natural languages with their own grammar, syntax, and vocabulary — not gestured versions of the spoken language used around them.",
          "There is no single universal sign language. Linguists and catalogues like Ethnologue count hundreds of distinct sign languages worldwide, and most aren't mutually intelligible.",
          "Sign language relatedness doesn't follow spoken-language geography — American Sign Language descends largely from French Sign Language, not British Sign Language, even though the US and UK share English as their majority spoken language.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Sign languages are complete languages, produced with the hands, face, and body instead of sound, used by Deaf communities around the world. Each one has its own grammar as rule-governed and complex as any spoken language — American Sign Language (ASL), British Sign Language (BSL), and the hundreds of other sign languages worldwide developed independently within their own Deaf communities, and knowing one doesn&apos;t mean you can understand another.</div>}
        detailed={<div className="prose-p">Sign language grammar is built from parameters that combine the way sounds combine in speech: handshape, movement, location relative to the body, palm orientation, and crucially, <TermLink href="/language-vocabulary/sign-languages-overview">non-manual markers</TermLink> — facial expression, eyebrow position, and mouth shape — which carry real grammatical information, such as marking a question or a conditional clause, not just emotional tone. Word order and sentence structure can differ substantially from the surrounding spoken language: ASL, for example, often uses a topic-comment structure and spatial referencing (assigning a location in the signing space to a person or thing, then pointing back to that location as a kind of pronoun) that has no direct equivalent in spoken English grammar. This is worth distinguishing from <TermLink href="/language-vocabulary/sign-languages-overview">Manually Coded English</TermLink> systems like Signed Exact English, which were deliberately constructed to represent English word-for-word for educational purposes — those are artificial coding systems, not naturally evolved languages, and they&apos;re grammatically closer to spoken English than to ASL.</div>}
      />
      <FootnoteAside>Nicaraguan Sign Language offers a rare, closely studied case of a brand-new natural language emerging in real time: when Nicaragua opened its first schools for deaf children in the 1970s and 80s, the students had no shared sign language to start from, but within about a generation the children spontaneously developed a fully grammatical sign language of their own — widely cited by linguists as direct evidence for how naturally human language capacity generates full grammar, even without an existing model to learn from.</FootnoteAside>
      <p>
      With grammar built from handshape, movement, location, orientation, and facial expression instead of sound, it becomes clear why a sign language can&apos;t be reduced to &quot;gestured&quot; speech — it&apos;s operating on an entirely independent grammatical system.
      </p>

      <QuickCheck
        question="Is American Sign Language (ASL) essentially English, just performed with the hands instead of spoken aloud?"
        options={[
          { text: "Yes — ASL follows English word order and grammar, just using hand shapes instead of sound", correct: false, explanation: "This describes Manually Coded English systems like Signed Exact English, not ASL. ASL has its own independent grammar, including topic-comment structure and spatial referencing, that differs substantially from English." },
          { text: "No — ASL is a natural language with its own independent grammar, distinct from English", correct: true, explanation: "Correct. ASL developed within the American Deaf community with its own syntax, word order, and non-manual grammatical markers — it is not a hand-signed version of spoken or written English." },
          { text: "No — ASL has no grammar at all and relies entirely on context", correct: false, explanation: "ASL has a full, rule-governed grammar, including specific word order patterns and non-manual markers that carry grammatical meaning — it just isn't organized the same way English is." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: ASL grammar basics — how it differs from English (baseline case)</h3>
      <div className="prose-p">
      ASL commonly uses a topic-comment sentence structure, where the topic of a sentence is signed first and set off with a raised-eyebrow non-manual marker, followed by a comment about it — a pattern with no direct one-to-one match in spoken English word order. ASL also uses the physical space in front of the signer grammatically: a signer can assign an imaginary location to a person or object being discussed, then point back to that same spot later in the conversation as a kind of pronoun, a technique with no equivalent in spoken English. Non-manual markers do real grammatical work too — raised eyebrows can mark a yes/no question, furrowed brows can mark a wh-question (who, what, where), and specific mouth shapes can modify a verb&apos;s meaning, none of which is simply English rendered by hand.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Signed Exact English — a real system that IS built to mirror English (variation / exception)</h3>
      <div className="prose-p">
      Signed Exact English (SEE) and other Manually Coded English systems were deliberately constructed, mainly for educational use, to represent spoken/written English word-for-word, including English grammatical endings that ASL doesn&apos;t mark the same way. This is a genuinely useful distinction: SEE is exactly the &quot;gestured English&quot; that the common misconception assumes all sign language is — but SEE is an artificial teaching tool, not a naturally evolved language, and it is grammatically and historically distinct from ASL, which developed independently within the Deaf community over generations of natural use.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Interpreting and legal recognition today (real-world / applied case)</h3>
      <div className="prose-p">
      Professional sign language interpreting is a distinct, trained skill — a fluent ASL interpreter generally cannot interpret for a BSL signer without separate training, the same way a Spanish interpreter can&apos;t automatically interpret Japanese. A growing number of countries have given their national sign language official legal recognition — New Zealand recognizes New Zealand Sign Language as one of its official languages, for example — treating it as a language in its own right rather than a communication aid layered onto the spoken national language. This legal and professional infrastructure only makes sense because sign languages function as independent languages, not as a coded version of the surrounding spoken one.
      </div>

      <QuickCheck
        question="Would a fluent American Sign Language (ASL) signer and a fluent British Sign Language (BSL) signer, meeting for the first time, be able to understand each other automatically?"
        options={[
          { text: "Yes — since both English-speaking countries share the same spoken language, their sign languages are also the same", correct: false, explanation: "Sign languages don't inherit relatedness from the spoken language of the surrounding hearing population. ASL and BSL are historically unrelated to each other." },
          { text: "No — ASL and BSL are historically unrelated sign languages, despite the US and UK both being predominantly English-speaking", correct: true, explanation: "Correct. ASL developed largely from French Sign Language (LSF), while BSL belongs to a separate family (BANZSL) shared with Auslan and New Zealand Sign Language — the two aren't mutually intelligible without training." },
          { text: "It depends only on how loudly each signer speaks while signing", correct: false, explanation: "Sign languages aren't paired with vocalized speech volume — mutual intelligibility between two sign languages depends on their historical relatedness, not how they're vocally accompanied." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Sign language families don't follow spoken-language geography"
        type="comparison"
        svgSrc="/diagrams/language-vocabulary-sign-languages-overview-family-comparison.svg"
        altText="Comparison diagram showing that American Sign Language (ASL) descends historically from French Sign Language (LSF), while British Sign Language (BSL) belongs to a separate BANZSL family shared with Auslan (Australian Sign Language) and New Zealand Sign Language — illustrating that the US and UK, despite both being predominantly English-speaking countries, use historically unrelated, mutually unintelligible sign languages."
      />
      <p>
      Seeing the two family trees side by side makes the point concrete: sign language ancestry runs through the history of Deaf education and community contact, not through whatever spoken language happens to surround it.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a sign language is a gestured or coded version of the spoken language spoken around it.", fix: "Treat it as an independent language with its own grammar — word order, spatial referencing, and non-manual markers that don't map onto the surrounding spoken language." },
          { mistake: "Assuming one universal sign language exists worldwide.", fix: "Recognize that hundreds of distinct sign languages exist, most historically unrelated and not mutually intelligible, just like spoken languages." },
          { mistake: "Assuming fingerspelling is the primary way sign languages communicate.", fix: "Fingerspelling is a supplementary tool, mainly for proper nouns and loanwords — the vast majority of signed communication uses the language's own signs and grammar, not letter-by-letter spelling." },
        ]}
      />
      <MisconceptionCallout
        myth="Sign languages are just gestured versions of the local spoken language, rather than independent languages with their own grammar."
        reality={<p>Natural sign languages like ASL and BSL have fully independent grammatical systems — their own word order patterns, spatial grammar, and non-manual markers carried by the face and body — that developed within Deaf communities, not by translating the surrounding spoken language sign-for-sign. The clearest proof this distinction is real: ASL and BSL are historically unrelated and mutually unintelligible, despite both existing in predominantly English-speaking countries. Manually Coded English systems like Signed Exact English do represent English word-for-word by design, but those are artificial educational tools distinct from naturally evolved sign languages, not evidence that ASL or BSL work the same way.</p>}
      />

      <QuickCheck
        question="If sign languages were simply gestured versions of the local spoken language, what would you expect to be true about ASL and BSL — and is it actually true?"
        options={[
          { text: "You'd expect them to be mutually intelligible since the US and UK share English, and this is indeed true", correct: false, explanation: "This is the misconception's prediction, and it's false — ASL and BSL are not mutually intelligible, which is exactly the evidence against sign languages being coded versions of the local spoken language." },
          { text: "You'd expect them to be mutually intelligible since the US and UK share English, but in reality they are not, because each sign language developed independently with its own grammar", correct: true, explanation: "Correct. The mismatch between what the misconception predicts and what's actually documented is strong evidence that sign languages are independent natural languages, not gestured spoken language." },
          { text: "You'd expect them to be unrelated regardless, since sign languages have no connection to spoken language history at all", correct: false, explanation: "Sign languages can have historical connections to Deaf education and community history (ASL's real historical link is to French Sign Language, not spoken English) — the point is that relatedness doesn't track the surrounding spoken language, not that no relatedness exists anywhere." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see two people signing, don't assume they're using the same sign language you've seen elsewhere — check which one it is.",
          "Learn a handful of signs in your region's national sign language and notice how the grammar and word order differ from spoken word order.",
          "Look up whether your country legally recognizes a national sign language.",
          "Read the entry on endangered and extinct languages — some sign languages, especially small village and community sign languages, face endangerment too.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is American Sign Language the same as British Sign Language?", answer: "No. ASL and BSL are historically unrelated, mutually unintelligible sign languages. ASL descends largely from French Sign Language, while BSL belongs to a separate family shared with Auslan and New Zealand Sign Language, despite the US and UK both being predominantly English-speaking." },
          { question: "Is sign language the same in every country?", answer: "No. There is no single universal sign language — linguists and catalogues like Ethnologue count hundreds of distinct sign languages worldwide, most of which developed independently and aren't mutually intelligible." },
          { question: "Is ASL just English spelled out with the hands?", answer: "No. That describes fingerspelling, which ASL uses only for proper nouns, technical terms, and loanwords, or Manually Coded English systems like Signed Exact English, which are artificial teaching tools. ASL itself has its own independent grammar and vocabulary, distinct from English." },
          { question: "How many sign languages are there in the world?", answer: "Linguistic catalogues document several hundred distinct sign languages worldwide, ranging from large national sign languages like ASL and BSL to small village or community sign languages used by only a few hundred people." },
          { question: "Can hearing people learn sign language?", answer: "Yes. Sign languages are complete natural languages that hearing people can learn as a second language, the same way they might learn any other spoken language, through courses, community classes, or immersion with Deaf signers." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
