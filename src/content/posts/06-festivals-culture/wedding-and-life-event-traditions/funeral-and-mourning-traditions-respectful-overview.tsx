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
  title: "Funeral & Mourning Traditions (respectful overview)",
  category: "festivals-culture",
  order: 25,
  subtopic: "wedding-and-life-event-traditions",
  tags: ["funeral traditions", "mourning customs", "death rites", "cultural traditions"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "A factual, comparative overview of how different religious and cultural traditions mark death and mourning — Hindu cremation rites, Jewish shivah, Christian burial customs, and more.",
  summary: "Funeral and mourning traditions are the documented religious and cultural practices communities use to mark a death and support the bereaved — this overview describes what different traditions actually involve, factually and comparatively, without ranking or judging any of them.",
  sources: [
    { label: "Encyclopaedia Britannica — Death Rite", url: "https://www.britannica.com/topic/death-rite" },
    { label: "Encyclopaedia Britannica — Antyeshti (Hindu funeral rite)", url: "https://www.britannica.com/topic/antyeshti" },
    { label: "Encyclopaedia Britannica — Shivah", url: "https://www.britannica.com/topic/shivah" },
    { label: "Encyclopaedia Britannica — Mourning", url: "https://www.britannica.com/topic/mourning" },
    { label: "Encyclopaedia Britannica — Day of the Dead", url: "https://www.britannica.com/topic/Day-of-the-Dead" },
  ],
  seeAlso: [
    "festivals-culture/cultural-significance-of-colors-in-clothing",
    "festivals-culture/coming-of-age-traditions-around-the-world",
    "festivals-culture/naming-ceremonies-across-cultures",
    "festivals-culture/wedding-traditions-around-the-world",
  ],
  glossary: [
    { term: "Antyeshti", definition: "The Hindu funeral rite (\"last sacrifice\"), which centers on cremation, traditionally followed by immersing the ashes in a sacred river." },
    { term: "Shivah", definition: "The seven-day Jewish mourning period observed by close relatives immediately following a burial, marked by staying home, sitting on low seating, and receiving visitors." },
    { term: "Antemortem/postmortem commemoration", definition: "Broader term for practices that continue to honor the dead on a recurring basis after the funeral itself, such as an annual remembrance day — distinct from the funeral rite, which is a one-time event." },
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
          "Funeral and mourning practices differ across religions and cultures in body disposition (cremation vs. burial), timing, and the length and form of the mourning period that follows.",
          "The funeral itself (a one-time rite) and the ongoing mourning period (which can last days, weeks, or a year depending on tradition) are two distinct things, often confused as one.",
          "Some traditions also maintain recurring, ongoing commemoration well beyond the initial mourning period — annual remembrance days that keep the relationship with the deceased present rather than treating grief as something to fully conclude.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Every documented culture has practices for marking death and supporting those left behind, though the specifics vary widely. In Hindu tradition, the funeral rite is <TermLink href="/festivals-culture/funeral-and-mourning-traditions-respectful-overview">Antyeshti</TermLink>, centered on cremation. In Judaism, the funeral is followed by <TermLink href="/festivals-culture/funeral-and-mourning-traditions-respectful-overview">shivah</TermLink>, a structured seven-day mourning period. Many Christian traditions hold a funeral service followed by burial or cremation, depending on denomination and personal choice. Buddhist funeral customs also center on cremation, tracing back to the Buddha&apos;s own funeral rites.</div>}
        detailed={<div className="prose-p">Hindu Antyeshti (literally &quot;last sacrifice&quot;) is traditionally performed as soon as possible after death, with the body cremated and the ashes later immersed in a river considered sacred, most notably the Ganges — the rite is understood as releasing the soul for its next stage rather than simply disposing of the body. This is followed by a mourning period, commonly around 13 days in many communities, that includes shraddha rites (offerings made in memory of the deceased), with such offerings sometimes continuing on an annual basis afterward. Judaism structures the mourning period distinctly from the funeral itself: burial typically happens promptly, and close relatives then observe shivah — seven days during which mourners remain at home, sit on low stools rather than regular furniture, cover mirrors, and receive visitors who come to offer condolences and support rather than requiring the bereaved to host in a conventional sense. Christian funeral practices vary by denomination and region but commonly include a funeral service (sometimes preceded by a visitation or wake where mourners view the body and pay respects) followed by burial or, increasingly in many Christian communities today, cremation — Roman Catholic teaching, for instance, historically favored burial but has permitted cremation since the 1960s under specified conditions. Buddhist funeral customs trace their emphasis on cremation back to the Buddha&apos;s own funeral as recorded in early Buddhist texts, and often include a structured sequence of memorial services at set intervals after death, with chanting from Buddhist scripture forming a central part of the rite. Beyond the funeral and initial mourning period, some traditions maintain ongoing, recurring commemoration — Mexico&apos;s Día de los Muertos (Day of the Dead), observed November 1–2, blends Indigenous Mesoamerican traditions with the Catholic All Saints&apos; and All Souls&apos; Days, and involves building altars (ofrendas) with photographs, favorite foods, and marigolds to welcome the spirits of the deceased back for a visit — a markedly different emotional register from a funeral itself, treating remembrance as something to revisit each year rather than complete once.</div>}
      />
      <FootnoteAside>Cremation, now central to Buddhist and Hindu funeral practice, has an ancient history in the Mediterranean world too — the ancient Greeks are documented practicing cremation from around 1000 BCE, showing the practice isn&apos;t confined to any single religious tradition or region.</FootnoteAside>

      <QuickCheck
        question="A Jewish family observes shivah for seven days after the funeral. What best describes what shivah is?"
        options={[
          { text: "The funeral service itself, held over seven days", correct: false, explanation: "Shivah is not the funeral — burial typically happens promptly and separately. Shivah is the structured mourning period that follows the burial." },
          { text: "A seven-day mourning period observed by close relatives after burial, involving staying home, sitting on low seating, and receiving visitors", correct: true, explanation: "Correct. Shivah is specifically the mourning period, distinct from the funeral/burial rite that precedes it." },
          { text: "An annual day of remembrance held every year on the anniversary of a death", correct: false, explanation: "That describes a different kind of practice (an annual remembrance, such as a yahrzeit in Jewish tradition or Día de los Muertos in Mexican tradition) — shivah specifically refers to the immediate seven-day period after burial." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Hindu Antyeshti and the mourning period that follows (baseline case)</h3>
      <div className="prose-p">The body is cremated, traditionally as soon as feasible after death, with close family present. The ashes are later immersed in a river regarded as sacred. In the days that follow — commonly around a 13-day period in many communities, though this varies — family observe a mourning period marked by specific dietary and social restrictions, concluding with shraddha rites honoring the deceased. Some families continue annual shraddha offerings well beyond that initial period.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Jewish shivah — a distinct structure for the mourning period itself</h3>
      <div className="prose-p">Rather than centering the tradition&apos;s distinctiveness on the disposition of the body, Jewish practice places significant structure on the mourning period that follows burial. During shivah&apos;s seven days, mourners remain at home, sit on low stools or the floor rather than ordinary furniture, cover mirrors in the house, and refrain from ordinary business, haircuts, and other routine activities — visitors come to the mourners rather than the reverse. This illustrates a genuine structural variation: some traditions place their most elaborate customs around body disposition, others around the mourning period that follows it.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Día de los Muertos — ongoing commemoration, real-world/present-day</h3>
      <div className="prose-p">Widely observed today across Mexico and in Mexican-heritage communities elsewhere, Día de los Muertos is not a funeral practice but a recurring, annual commemoration held each November 1–2, blending Indigenous Mesoamerican beliefs about death as a continuation of life with Catholic All Saints&apos; and All Souls&apos; Days. Families build ofrendas (altars) featuring photographs, favorite foods, and marigold flowers to welcome the spirits of deceased loved ones back for a visit. It&apos;s a useful real-world example of how mourning traditions extend well past the funeral event itself into ongoing, even joyful, annual remembrance — a genuinely different emotional register from the funeral or the initial mourning period.</div>

      <QuickCheck
        question="What is the key factual distinction between a funeral rite and a mourning period, using Hindu and Jewish examples?"
        options={[
          { text: "There is no distinction — the terms are interchangeable across all traditions", correct: false, explanation: "They're documented as distinct phases in the traditions covered here — the funeral/burial rite is typically a single event, while the mourning period (Hindu shraddha period, Jewish shivah) is a defined span of time that follows it." },
          { text: "The funeral rite (such as Antyeshti or burial) is typically a single event marking body disposition, while the mourning period (such as the Hindu 13-day period or Jewish shivah) is a separately structured span of time that follows it", correct: true, explanation: "Correct. Both traditions structure these as two distinct phases, even though the specific customs within each phase differ substantially between them." },
          { text: "The funeral rite always lasts longer than the mourning period in every tradition", correct: false, explanation: "This isn't a consistent pattern — mourning periods (like Jewish shivah's seven days) are often documented as lasting considerably longer than the funeral/burial rite itself." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming cremation or burial reflects the relative religious \"seriousness\" of a tradition.", fix: "Both cremation (Hindu, Buddhist, and many secular traditions) and burial (many Christian, Jewish, and Islamic traditions) are the primary, fully respected practice within their own traditions — neither reflects less reverence than the other." },
          { mistake: "Conflating the funeral itself with the mourning period that follows it.", fix: "Many traditions structure these as genuinely distinct phases — a body-disposition rite (often a single event) followed by a separately defined mourning period (which can last days to a year, depending on the tradition)." },
          { mistake: "Assuming an annual remembrance tradition like Día de los Muertos is somber in the same way a funeral is.", fix: "It's documented as having a notably different tone — a welcoming, even celebratory annual commemoration of loved ones' memory, distinct from the funeral event itself." },
        ]}
      />
      <MisconceptionCallout
        myth="Mourning traditions and colors are the same worldwide."
        reality={<p>Both the practices and the symbolic colors associated with mourning vary significantly by culture. Black is the conventional mourning color in much of the Western/Christian tradition, but white, not black, is a traditional mourning color in parts of East and South Asia — and the practices themselves range from a structured week of home-bound mourning (Jewish shivah) to an extended multi-day period of specific rites (Hindu shraddha) to annual, ongoing commemoration (Día de los Muertos) rather than a single universal script.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "If you're attending a funeral outside your own tradition, ask a family member or check in advance about expected dress, timing, and customs rather than assuming — practices genuinely differ, including around something as basic as color.",
          "Notice whether a tradition's mourning customs are concentrated around the funeral itself or extend into a separately structured mourning period afterward — both patterns are well documented.",
          "If you encounter an annual remembrance tradition (Día de los Muertos, a yahrzeit, or similar), recognize it as ongoing commemoration distinct from the funeral, not a re-enactment of it.",
          "Approach unfamiliar mourning customs (dietary restrictions, dress, timing) as documented cultural and religious practice worth learning about respectfully, not as something to judge by the norms of your own tradition.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the Hindu funeral rite called?", answer: "Antyeshti, meaning \"last sacrifice.\" It centers on cremation, traditionally followed by immersing the ashes in a river regarded as sacred." },
          { question: "How long is Jewish mourning (shivah)?", answer: "Shivah lasts seven days, beginning after burial, during which close relatives remain at home, sit on low seating, and receive visitors rather than hosting them in a conventional sense." },
          { question: "Do Buddhists bury or cremate their dead?", answer: "Cremation is the predominant Buddhist practice, tracing back to the funeral rites performed for the Buddha himself as recorded in early Buddhist texts." },
          { question: "What is Día de los Muertos and is it a funeral?", answer: "Día de los Muertos (Day of the Dead) is an annual Mexican commemoration held November 1–2, honoring deceased loved ones with altars, photographs, and marigolds — it is not a funeral, but an ongoing, recurring remembrance tradition distinct from the funeral event itself." },
          { question: "Why do some cultures wear white instead of black for mourning?", answer: "Mourning colors are culturally specific rather than universal — black is conventional in much of the Western/Christian tradition, while white carries the mourning association in parts of East and South Asia instead." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
