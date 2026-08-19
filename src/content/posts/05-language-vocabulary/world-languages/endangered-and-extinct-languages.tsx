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
  title: "Endangered & Extinct Languages",
  category: "language-vocabulary",
  order: 29,
  subtopic: "world-languages",
  tags: ["endangered languages", "extinct languages", "language revitalization", "unesco", "linguistics"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Roughly 40% of the world's languages are endangered, according to UNESCO's tracking — here's what that actually means, and why some can be revived.",
  summary: "A language is endangered when it stops being reliably passed to children as a first language, regardless of how many older speakers still use it fluently — and while most endangered languages are lost within a generation or two without intervention, deliberate revitalization has brought a small number back from the brink.",
  sources: [
    { label: "UNESCO", url: "https://www.unesco.org/en" },
    { label: "Ethnologue — Languages of the World", url: "https://www.ethnologue.com/" },
    { label: "Encyclopaedia Britannica — Endangered Language", url: "https://www.britannica.com/topic/endangered-language" },
  ],
  seeAlso: [
    "language-vocabulary/language-families-explained",
    "language-vocabulary/how-languages-evolve-over-time",
    "language-vocabulary/most-spoken-languages-in-the-world",
    "language-vocabulary/sign-languages-overview",
  ],
  glossary: [
    { term: "Language endangerment", definition: "A state in which a language is at risk of falling out of use because it is no longer being reliably learned by children as a first language, regardless of how many fluent adult or elderly speakers remain." },
    { term: "Language death / extinction", definition: "The point at which a language has no remaining speakers who use it as a living, everyday means of communication — typically marked by the death of the last fully fluent speaker, though the language may survive in documentation." },
    { term: "Intergenerational transmission", definition: "The passing of a language from one generation to the next as a first language — considered by linguists to be the single most important factor in whether a language is stable or endangered, more important than raw speaker count." },
    { term: "Language revitalization", definition: "Deliberate efforts to increase the number of speakers of an endangered or extinct language, or restore its use as a living first language, through methods like immersion schools, documentation, and community programs." },
    { term: "Dormant (sleeping) language", definition: "A language with no remaining fluent native speakers but with surviving documentation, records, or partial community knowledge that can support later revitalization efforts, distinct from a language lost with no trace." },
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
          "A language is considered endangered when it stops being reliably passed to children as a first language — not simply when it has a small number of speakers.",
          "UNESCO tracks language vitality on a six-level scale, from 'safe' to 'extinct,' and estimates that a large share of the world's roughly 7,000 languages fall somewhere on the endangered end of that scale.",
          "Endangerment is usually driven by identifiable external pressures — historical policies restricting a language in schools, economic incentives to shift to a dominant language, and displacement — not by speakers simply losing interest.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A language is endangered when children in its community are no longer growing up learning it as their first language — even if plenty of older adults still speak it fluently. A language is extinct once no one uses it as a living, everyday means of communication anymore, usually marked by the death of the last fully fluent speaker. Between &quot;perfectly safe&quot; and &quot;extinct&quot; sits a wide range of endangerment levels, depending on how consistently the language is still being taught to the next generation.</div>}
        detailed={<div className="prose-p">Linguists and UNESCO&apos;s <TermLink href="/language-vocabulary/endangered-and-extinct-languages">language vitality</TermLink> tracking place the most weight on <TermLink href="/language-vocabulary/endangered-and-extinct-languages">intergenerational transmission</TermLink> — whether children are currently acquiring the language as a first language at home — rather than on total speaker count alone. A language with 5,000 elderly fluent speakers and no children learning it is, by this measure, more endangered than a language with only 500 speakers where children are still actively acquiring it, because the first case has effectively no path forward once that generation is gone. A useful edge case: a language can become <TermLink href="/language-vocabulary/endangered-and-extinct-languages">dormant</TermLink> rather than fully extinct — it has no remaining fluent native speakers, but survives through documentation, recordings, or partial community knowledge, which can support later revitalization. This distinction matters because it means &quot;extinct&quot; and &quot;permanently lost&quot; aren&apos;t always the same thing.</div>}
      />
      <FootnoteAside>Cornish, once the everyday language of Cornwall in southwest England, is often cited as having gone extinct as a spoken community language by the late 18th century — Dolly Pentreath, who died in 1777, is traditionally named as one of its last fully fluent native speakers — yet Cornish has since been revived from historical documentation into an actively used, taught language with a small community of speakers today, according to Britannica&apos;s coverage of language revival.</FootnoteAside>
      <p>
      With intergenerational transmission as the real measure of vitality, and dormancy as a distinct category from total loss, the actual scale of the world&apos;s endangered-language situation — and the handful of documented exceptions — comes into clearer focus.
      </p>

      <QuickCheck
        question="A language has around 3,000 fluent speakers, all of them over the age of 60, and no children currently learning it at home. By linguists' usual standard, is this language endangered?"
        options={[
          { text: "No — 3,000 speakers is a substantial number, so it should be considered safe", correct: false, explanation: "Raw speaker count alone doesn't determine vitality. What matters most is intergenerational transmission — and here, no children are learning it." },
          { text: "Yes — because it is not being passed to a new generation as a first language, regardless of its current adult speaker count", correct: true, explanation: "Correct. Without children acquiring it, this language has no clear path to continue past its current generation of speakers, which is the core marker of endangerment." },
          { text: "It can't be assessed without knowing exactly how many total speakers exist worldwide", correct: false, explanation: "Total worldwide count matters less than whether transmission to children is happening — a much smaller community with active child transmission is considered more stable by this measure." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Applying UNESCO&apos;s vitality scale to a currently endangered language (baseline case)</h3>
      <div className="prose-p">
      UNESCO&apos;s framework runs from &quot;safe&quot; through &quot;vulnerable,&quot; &quot;definitely endangered,&quot; &quot;severely endangered,&quot; and &quot;critically endangered,&quot; to &quot;extinct.&quot; Ainu, indigenous to northern Japan and parts of Russia&apos;s Sakhalin and Kuril Islands, is documented as critically endangered — the language has extremely few remaining fluent speakers, nearly all elderly, with intergenerational transmission having broken down over the course of the 20th century amid assimilation policy and social pressure to shift to Japanese. Community and academic documentation and revitalization efforts continue, but the language sits at the most severe end of the scale short of extinction.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Cornish — a documented revival after extinction (variation / exception)</h3>
      <div className="prose-p">
      Cornish is one of the clearest documented cases of a language crossing all the way to extinction as a spoken community language and then being revived. After its decline as an everyday spoken language by the late 18th century, 20th-century revivalists worked from surviving historical texts, records, and place names to reconstruct its grammar and vocabulary, and began teaching it again. Cornish today has a small but active community of speakers and learners, and is recognized under the UK&apos;s commitments to the European Charter for Regional or Minority Languages — a genuine exception to the general rule that language loss is permanent, though revival efforts of this kind are difficult, resource-intensive, and rare.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Hebrew and modern revitalization methods (real-world / applied case)</h3>
      <div className="prose-p">
      Hebrew is the most frequently cited large-scale revitalization success: for centuries it survived mainly as a liturgical and literary language, not as anyone&apos;s everyday spoken first language, before a deliberate movement beginning in the late 19th and early 20th centuries revived it as a spoken vernacular, and it is now the first language of millions of people in Israel. That scale of revival is rare, but its methods — deliberate immersion, dedicated schooling, and institutional adoption — inform smaller-scale revitalization work happening today, including Māori-language &quot;language nest&quot; immersion preschools in New Zealand and Hawaiian-language immersion schools in the United States, both aimed at rebuilding intergenerational transmission where it had been broken.
      </div>

      <QuickCheck
        question="What made Hebrew's revival unusual compared to most language revitalization efforts?"
        options={[
          { text: "It had never stopped being anyone's spoken first language", correct: false, explanation: "The opposite is true — Hebrew had survived mainly as a liturgical and literary language for centuries, without a community of native speakers, before deliberate revival efforts made it a spoken first language again." },
          { text: "It was revived at large national scale into a first language for millions of people, through deliberate immersion and institutional adoption", correct: true, explanation: "Correct. Most successful revitalization efforts are much smaller in scale — Hebrew's shift to becoming the everyday first language of an entire national population is an unusually large-scale case." },
          { text: "It required no documentation because it had always been recorded in writing", correct: false, explanation: "Extensive religious and literary documentation did support the revival, but the key unusual factor is the scale of the outcome — a full national first-language shift — not the mere existence of written records, which many endangered languages also have." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="UNESCO's six-level language vitality scale"
        type="flow"
        svgSrc="/diagrams/language-vocabulary-endangered-and-extinct-languages-vitality-scale.svg"
        altText="Flow diagram showing UNESCO's six levels of language vitality in sequence: Safe (used by all generations, intergenerational transmission uninterrupted), Vulnerable (used by most children, but in limited settings), Definitely Endangered (children no longer learning it as a first language at home), Severely Endangered (spoken mainly by the grandparent generation and older), Critically Endangered (spoken by very few, often only the oldest generation, and partially or infrequently), and Extinct (no speakers remain)."
      />
      <p>
      The scale makes clear that endangerment is a gradual slide rather than a sudden event — and that the critical turning point, at &quot;definitely endangered,&quot; is specifically about whether children are still learning the language, not about total speaker numbers.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Equating a small number of speakers with automatic endangerment.", fix: "Check whether children are still learning the language as a first language — a small community with active child transmission can be more stable than a larger, aging-only one." },
          { mistake: "Assuming an extinct language can never be revived.", fix: "A small number of languages, including Cornish and Hebrew, have been revived from documentation and deliberate teaching, though it is difficult, slow, and far from guaranteed." },
          { mistake: "Treating language endangerment as a natural, inevitable process unconnected to history or policy.", fix: "Documented drivers include historical policies restricting a language in schools, forced assimilation programs, and economic pressure to shift to a dominant language for employment — not a neutral or inevitable drift." },
        ]}
      />
      <MisconceptionCallout
        myth="A language 'dying out' means its speakers simply stopped caring about it."
        reality={<p>Language shift is usually driven by identifiable external pressures rather than indifference. Historically documented drivers include government and colonial-era policies that banned or penalized use of a language in schools, forced-assimilation boarding school systems, and strong economic incentive to raise children in a dominant language associated with jobs, education, and social mobility. Families frequently make this shift specifically because they believe it will benefit their children&apos;s opportunities — not because they&apos;ve stopped valuing their own language. UNESCO and linguists documenting language endangerment consistently point to these structural pressures as the primary drivers, not a simple loss of community interest.</p>}
      />

      <QuickCheck
        question="A community shifts from raising children in its traditional language to raising them in a dominant national language, largely because the national language is required for schooling and jobs. What does this best illustrate?"
        options={[
          { text: "That the community stopped caring about its traditional language", correct: false, explanation: "This framing isn't supported by how language shift is actually documented — the shift here is driven by structural pressure (school and job requirements), not by a loss of interest in the traditional language." },
          { text: "That economic and institutional pressure, not indifference, is a well-documented driver of language endangerment", correct: true, explanation: "Correct. Families often shift languages specifically to improve their children's access to schooling and employment — a structural pressure, not evidence the traditional language stopped mattering to them." },
          { text: "That the traditional language must not have had a real grammar to begin with", correct: false, explanation: "Every documented human language, including endangered ones, has a full, rule-governed grammar — endangerment reflects external pressure on its use, not any deficiency in the language itself." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Look up whether any Indigenous or minority languages are spoken in your own region, and check their documented vitality status.",
          "Notice when something described as 'just a dialect' might actually be a distinct, separately endangered language.",
          "If you're curious about a lesser-spoken language, seek out learning resources or media in it — documented use is part of what sustains a language.",
          "Read the entry on language families to see how much of the world's language diversity concentrates in a small number of large families versus thousands of smaller, more vulnerable ones.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How many languages are endangered?", answer: "UNESCO and linguists tracking language vitality estimate that a large share of the world's roughly 7,000 living languages are endangered to some degree, with many having only a small number of remaining speakers and little or no transmission to children." },
          { question: "What does it mean for a language to be extinct?", answer: "A language is extinct when it no longer has any speakers using it as a living, everyday means of communication — typically marked by the death of the last fully fluent speaker. Some extinct languages remain 'dormant' rather than fully lost if documentation survives." },
          { question: "Can an extinct language be revived?", answer: "In rare, documented cases, yes. Cornish was revived from historical documentation after going extinct as a spoken community language, and Hebrew was revived at a much larger scale from a mainly liturgical language into the everyday first language of millions in Israel. Revival is difficult and uncommon, but not impossible." },
          { question: "Why do languages become endangered?", answer: "Common documented drivers include historical policies restricting a language in schools, forced assimilation, displacement, and economic pressure for families to shift to a dominant language associated with better job and education access — not simply a loss of interest by speakers." },
          { question: "What is UNESCO's scale for measuring language endangerment?", answer: "UNESCO's language vitality framework ranks languages across six levels — safe, vulnerable, definitely endangered, severely endangered, critically endangered, and extinct — based primarily on whether the language is still being reliably passed to children as a first language." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
