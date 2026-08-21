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
  title: "Overview of Major Indian Languages",
  category: "language-vocabulary",
  order: 35,
  subtopic: "indian-and-regional-languages",
  tags: ["indian languages", "hindi", "bengali", "tamil", "telugu", "dravidian languages", "indo-aryan languages"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "India has no single national language — the Constitution recognizes 22 scheduled languages across four language families, spoken by hundreds of millions of people in their own right.",
  summary: "India is home to hundreds of languages from four major language families, with 22 given formal recognition under the Constitution's Eighth Schedule, and no single language designated as India's 'national' language — a common but constitutionally inaccurate claim.",
  sources: [
    { label: "Britannica — Indian Languages", url: "https://www.britannica.com/topic/Indian-languages" },
    { label: "Britannica — What languages are spoken in India?", url: "https://www.britannica.com/question/What-languages-are-spoken-in-India" },
    { label: "Britannica — Dravidian Languages", url: "https://www.britannica.com/topic/Dravidian-languages" },
    { label: "Britannica — Indo-Aryan Languages", url: "https://www.britannica.com/topic/Indo-Aryan-languages" },
    { label: "Ethnologue — Languages of India", url: "https://www.ethnologue.com/country/IN/" },
    { label: "Reserve Bank of India — Language Panel on Banknotes", url: "https://www.rbi.org.in/commonman/english/Currency/Scripts/LanguagePanelonNotes.aspx" },
  ],
  seeAlso: [
    "language-vocabulary/sanskrits-influence-on-modern-languages",
    "language-vocabulary/regional-scripts-explained-devanagari-tamil-telugu-etc",
    "language-vocabulary/language-families-explained",
    "history-timeline-facts/medieval-india-major-dynasties-overview",
  ],
  glossary: [
    { term: "Scheduled language", definition: "One of 22 languages formally listed in the Eighth Schedule of the Constitution of India, given a defined status for translation, promotion, and inclusion in certain official processes — not the same thing as being a 'national language.'" },
    { term: "Indo-Aryan languages", definition: "A branch of the Indo-European language family that includes Hindi, Bengali, Marathi, Gujarati, Punjabi, Urdu, Odia, and Assamese, among others — descended from Old Indo-Aryan languages including Sanskrit's spoken relatives." },
    { term: "Dravidian languages", definition: "A language family indigenous to South Asia, unrelated to Indo-European, including Tamil, Telugu, Kannada, and Malayalam as its four major literary languages." },
    { term: "Hindustani", definition: "The common spoken language underlying both standard Hindi and standard Urdu, which share core grammar and everyday vocabulary and differ mainly in script and higher-register vocabulary (Sanskrit-derived for Hindi, Persian-Arabic-derived for Urdu)." },
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
          "India has no constitutionally designated 'national language.' Hindi (in Devanagari script) and English are the two official languages of the central government, and 22 other languages — including Hindi — hold recognition as scheduled languages under the Constitution's Eighth Schedule.",
          "Most Indian languages fall into two large, entirely unrelated families: Indo-Aryan (Hindi, Bengali, Marathi, Gujarati, Punjabi, Urdu, Odia, Assamese) and Dravidian (Tamil, Telugu, Kannada, Malayalam) — plus smaller Austroasiatic and Tibeto-Burman language families spoken by tens of millions more people.",
          "Genuine multilingualism is the everyday norm, not the exception — most Indians grow up functioning across at least two or three languages, often a regional language, Hindi, and English, plus a neighboring state's language in border regions.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">India is home to hundreds of languages, spoken across states that often use entirely different scripts and belong to entirely different language families. There is no single &quot;Indian language&quot; the way people sometimes assume — <TermLink href="/language-vocabulary/indian-and-regional-languages/overview-of-major-indian-languages">Hindi</TermLink> is the most widely spoken, but Bengali, Tamil, Telugu, Marathi, Urdu, Gujarati, Kannada, Malayalam, Punjabi, and Odia are each spoken as a first language by tens of millions of people, each with its own script, literature, and long regional history. The Constitution of India formally recognizes 22 of these as &quot;scheduled languages,&quot; and Hindi and English serve as the two official languages used by the central government.</div>}
        detailed={<div className="prose-p">Article 343 of the Constitution designates Hindi, written in Devanagari script, as the official language of the Union, with English continuing as an additional official language — originally meant as a 15-year transitional measure, but extended indefinitely by the Official Languages Act, 1963, and still in wide official and everyday use today. The Eighth Schedule is a separate mechanism: it lists 22 &quot;scheduled languages&quot; (starting from 14, expanded over time to the current 22) recognized for translation, promotion, and certain official processes, but scheduled status is not the same as &quot;official&quot; status, and neither implies &quot;national language&quot; — a title India&apos;s Constitution simply does not assign to any single language. Genuine diversity goes beyond the two big families most people know: alongside <TermLink href="/language-vocabulary/indian-and-regional-languages/overview-of-major-indian-languages">Indo-Aryan</TermLink> and <TermLink href="/language-vocabulary/indian-and-regional-languages/overview-of-major-indian-languages">Dravidian</TermLink> languages, India is also home to Austroasiatic languages (such as Santali, spoken mainly by Adivasi communities in eastern India) and Tibeto-Burman languages (such as Manipuri/Meitei and Bodo in the northeast), each with millions of speakers and its own scheduled-language recognition.</div>}
      />
      <FootnoteAside>India&apos;s 2011 Census collected 19,569 distinct raw responses to its &quot;mother tongue&quot; question. Linguists at the Census office rationalized those responses down to 1,369 identifiable mother tongues, which were then grouped into 121 languages overall — 22 of them scheduled languages, accounting for roughly 97 percent of the population&apos;s reported mother tongues.</FootnoteAside>
      <p>
      With the official-versus-scheduled distinction in mind, the actual shape of India&apos;s linguistic landscape — several major families, dozens of literary languages, no single &quot;the&quot; language — becomes much easier to hold onto accurately.
      </p>

      <QuickCheck
        question="Which of these is NOT one of the two official languages of India's central government?"
        options={[
          { text: "Hindi", correct: false, explanation: "Hindi, in Devanagari script, is one of the two official languages of the Union under Article 343." },
          { text: "Sanskrit", correct: true, explanation: "Correct. Sanskrit is one of the 22 scheduled languages recognized under the Eighth Schedule, but it is not one of the two official languages of the central government — those are Hindi and English." },
          { text: "English", correct: false, explanation: "English is the second of the two official languages of the Union, continuing indefinitely under the Official Languages Act, 1963." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The Indo-Aryan languages of the north, west, and east (baseline)</h3>
      <div className="prose-p">
      Hindi (Devanagari script, widely spoken across northern India and the most common first language nationally), Bengali (Bengali script, dominant in West Bengal and neighboring regions, and also the national language of Bangladesh), Marathi (Devanagari, Maharashtra), Gujarati (Gujarati script, Gujarat), Punjabi (Gurmukhi script on the Indian side of Punjab), and Odia (Odia script, Odisha) are all Indo-Aryan languages — related to each other and, more distantly, to English and most European languages as part of the wider Indo-European family. Urdu, closely related in everyday grammar and vocabulary to Hindi, is written instead in the Perso-Arabic Nastaliq script and draws its higher-register and literary vocabulary heavily from Persian and Arabic rather than Sanskrit.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The Dravidian languages of the south (variation / a genuinely separate family)</h3>
      <div className="prose-p">
      Tamil, Telugu, Kannada, and Malayalam are the four major literary languages of the Dravidian family, concentrated in South India (Tamil Nadu, Andhra Pradesh and Telangana, Karnataka, and Kerala respectively) and together spoken by roughly a quarter of India&apos;s population. Dravidian languages are not related to Indo-Aryan languages despite centuries of geographic proximity and mutual vocabulary borrowing — they form their own independent family, with no established connection to Indo-European. Tamil in particular has one of the oldest continuously maintained literary traditions in South Asia, described by linguists as rivaled in antiquity, within India, only by Sanskrit&apos;s literary tradition.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Multilingualism written into everyday civic life (real-world / applied)</h3>
      <div className="prose-p">
      India&apos;s multi-script, multilingual reality shows up in concrete, everyday places. Reserve Bank of India banknotes print the denomination in Hindi and English on the front, and in a &quot;language panel&quot; on the reverse listing the same amount in 15 more scheduled languages — Assamese, Bengali, Gujarati, Kannada, Kashmiri, Konkani, Malayalam, Marathi, Nepali, Odia, Punjabi, Sanskrit, Tamil, Telugu, and Urdu — for 17 languages represented on a single piece of currency. Regional film industries (Hindi cinema centered in Mumbai, Tamil cinema, Telugu cinema, Bengali cinema, and others) operate as genuinely separate, large industries in their own right, not as regional offshoots of a single &quot;Indian&quot; industry.
      </div>

      <QuickCheck
        question="Tamil, Telugu, Kannada, and Malayalam belong to which language family?"
        options={[
          { text: "Indo-Aryan, the same family as Hindi and Bengali", correct: false, explanation: "This is a common mistake — despite geographic proximity and centuries of contact, these four languages are not Indo-Aryan." },
          { text: "Dravidian, a family unrelated to Indo-European", correct: true, explanation: "Correct. Tamil, Telugu, Kannada, and Malayalam are the four major literary languages of the Dravidian family, which has no established relationship to Indo-Aryan or the wider Indo-European family." },
          { text: "Austroasiatic, the same family as Santali", correct: false, explanation: "Austroasiatic is a separate, smaller language family in India (including Santali), distinct from both Dravidian and Indo-Aryan." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Calling Hindi India's 'national language.'", fix: "India's Constitution does not designate any language as a 'national language.' Hindi and English are the two official languages of the central government, a distinct legal status." },
          { mistake: "Treating 'Indian language' as if it always means a Hindi dialect or another Indo-Aryan language.", fix: "The Dravidian family (Tamil, Telugu, Kannada, Malayalam) is entirely separate from Indo-Aryan and is a first language for roughly a quarter of India's population." },
          { mistake: "Assuming a language's script reveals its language family, so Urdu (written in Perso-Arabic script) must be unrelated to Hindi.", fix: "Hindi and Urdu share core everyday grammar and vocabulary closely enough that linguists often describe them as two standardized registers of one underlying spoken language, Hindustani — they differ mainly in script and higher-register vocabulary, not in basic structure." },
        ]}
      />
      <MisconceptionCallout
        myth="Hindi is India's single official national language, spoken by everyone."
        reality={<p>India&apos;s Constitution does not name any language as a &quot;national language.&quot; Hindi and English are the two official languages used by the central government, a specific and different legal designation. Most Indians do not speak Hindi as a first language — the country&apos;s population is split across many major languages from at least four language families, plus dozens of additional scheduled and non-scheduled languages, and a large share of the population functions daily in a language other than Hindi.</p>}
      />

      <QuickCheck
        question="What does India's Constitution actually say about a 'national language'?"
        options={[
          { text: "It names Hindi as the sole national language of India", correct: false, explanation: "The Constitution does not use the term 'national language' for any language at all — this is a common but constitutionally inaccurate claim." },
          { text: "It does not designate any language as a 'national language'; Hindi and English are instead the two official languages of the Union", correct: true, explanation: "Correct. 'Official language of the Union' (Article 343) is the actual constitutional category — a different, more limited status than a 'national language.'" },
          { text: "It names all 22 scheduled languages jointly as national languages", correct: false, explanation: "Scheduled-language status (Eighth Schedule) and 'national language' are not the same designation, and the Constitution doesn't use the latter term at all." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time someone calls Hindi 'the national language of India,' you can note the Constitution designates it, with English, as an official language of the Union — not a national one.",
          "Notice which script a piece of Indian text uses, and check whether it points to an Indo-Aryan or Dravidian language before assuming.",
          "If you meet someone who speaks an Indian language you don't recognize, ask what language family it belongs to before assuming it's close to Hindi.",
          "Read Sanskrit's Influence on Modern Languages to see how one ancient Indo-Aryan language shaped vocabulary across many of today's languages.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the national language of India?", answer: "India's Constitution does not designate a 'national language.' Hindi (in Devanagari script) and English are the two official languages of the central government, and 22 languages hold separate recognition as scheduled languages." },
          { question: "How many languages are spoken in India?", answer: "India's 2011 Census recorded 1,369 rationalized mother tongues, grouped into 121 languages overall, of which 22 are formally recognized scheduled languages under the Constitution's Eighth Schedule." },
          { question: "What is the difference between Hindi and Urdu?", answer: "Hindi and Urdu share very similar everyday grammar and vocabulary and are often described as two standardized forms of a shared spoken language, Hindustani. They differ mainly in script (Devanagari for Hindi, Perso-Arabic Nastaliq for Urdu) and in higher-register vocabulary, which leans on Sanskrit for Hindi and on Persian and Arabic for Urdu." },
          { question: "What are the two official languages of the Indian government?", answer: "Hindi and English are the two official languages of India's central government, per Article 343 of the Constitution and the Official Languages Act, 1963." },
          { question: "What language families are spoken in India?", answer: "India's languages fall mainly into two large families — Indo-Aryan (Hindi, Bengali, Marathi, Gujarati, Punjabi, Urdu, Odia, Assamese, and others) and Dravidian (Tamil, Telugu, Kannada, Malayalam) — plus smaller Austroasiatic (such as Santali) and Tibeto-Burman (such as Manipuri and Bodo) families." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
