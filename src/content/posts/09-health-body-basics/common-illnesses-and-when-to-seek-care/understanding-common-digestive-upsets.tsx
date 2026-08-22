import React from 'react';
import { PostFrontmatter } from '@/types/post';
import {
  KeyTakeaways,
  ModeToggle,
  FootnoteAside,
  QuickCheck,
  DiagramBlock,
  MistakeList,
  MisconceptionCallout,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Understanding Common Digestive Upsets",
  category: "health-body-basics",
  order: 13,
  subtopic: "common-illnesses-and-when-to-seek-care",
  tags: ["digestive upset", "gastroenteritis", "food poisoning", "nausea", "when to see a doctor"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Most digestive upsets — from viral gastroenteritis to mild food-related reactions — resolve on their own within a couple of days, but dehydration risk and specific warning signs determine when medical care is actually needed.",
  summary: "Common digestive upsets like nausea, vomiting, and diarrhea are most often caused by viral gastroenteritis or mild foodborne illness, both of which typically resolve within a few days with rest and fluids — the practical concern that determines when to seek care isn't the symptoms themselves so much as dehydration risk and specific warning signs like high fever, blood in stool, or symptoms lasting more than a few days, per CDC and NHS guidance.",
  sources: [
    { label: "CDC — Norovirus (Viral Gastroenteritis)", url: "https://www.cdc.gov/norovirus/index.html" },
    { label: "NHS — Diarrhoea and Vomiting", url: "https://www.nhs.uk/conditions/diarrhoea-and-vomiting/" },
    { label: "MedlinePlus (NIH) — Gastroenteritis", url: "https://medlineplus.gov/gastroenteritis.html" },
  ],
  seeAlso: [
    "health-body-basics/recognizing-dehydration-and-when-its-serious",
    "health-body-basics/when-to-see-a-doctor-vs-self-care-general-framework",
    "health-body-basics/safe-drinking-water-basics",
  ],
  glossary: [
    {"term":"Gastroenteritis","definition":"Inflammation of the stomach and intestines, most often caused by a viral or bacterial infection, producing symptoms like nausea, vomiting, and diarrhea."},
    {"term":"Foodborne illness","definition":"Illness caused by consuming food or water contaminated with harmful bacteria, viruses, parasites, or toxins — commonly called food poisoning."},
  ],
  author: {
    slug: "james-h-rivers",
    name: "James H. Rivers",
    credentialLine: "Founder, KnowThisWell",
  },
  youtubeStatus: "not-started",
  youtubeUrl: "",
  draft: false,
};

export default function Post() {
  return (
    <>
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
      <strong>This entry is general health literacy, not medical advice.</strong> It cannot determine the cause of a specific digestive upset. If you experience severe symptoms or any of the warning signs described below, contact a doctor.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "Most digestive upsets — nausea, vomiting, diarrhea — are caused by viral gastroenteritis or mild foodborne illness, and typically resolve within a couple of days without medical treatment.",
      "The main practical risk during a digestive upset isn't the symptoms themselves but dehydration, since fluid loss from vomiting and diarrhea can add up quickly.",
      "Specific warning signs — high fever, blood in vomit or stool, signs of significant dehydration, or symptoms lasting more than a few days — are what shift a digestive upset from self-care to medical evaluation, per CDC/NHS guidance.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Most short-term digestive upsets fall into one of two broad categories: <TermLink href="/health-body-basics/understanding-common-digestive-upsets">gastroenteritis</TermLink>, usually caused by a virus (like norovirus) spreading person-to-person, or <TermLink href="/health-body-basics/understanding-common-digestive-upsets">foodborne illness</TermLink>, caused by eating something contaminated with bacteria, a virus, or a toxin. Both typically cause some combination of nausea, vomiting, diarrhea, and stomach cramping, and both usually resolve within a few days as the body clears the cause.</div>}
      detailed={<div className="prose-p">The distinction between viral gastroenteritis and foodborne illness matters less for immediate self-care (both are generally managed the same way: rest, fluids, and gradual reintroduction of food) than it does for understanding transmission — viral gastroenteritis like norovirus spreads readily person-to-person and through contaminated surfaces, which is why the CDC emphasizes handwashing and staying home during and shortly after symptoms, while foodborne illness stems from a specific contaminated food or water source. In both cases, the digestive symptoms themselves are largely the body&apos;s own response — vomiting and diarrhea are, in a sense, the body actively expelling the offending virus, bacteria, or toxin, similar in spirit to how fever is a purposeful immune response rather than simple malfunction.</div>}
      />
      <FootnoteAside>Norovirus alone causes an estimated 19 to 21 million illnesses annually in the United States according to the CDC, making it one of the most common causes of short-term digestive upset — most cases resolve within one to three days without medical treatment.</FootnoteAside>

      <p>
      Because most digestive upsets are self-limiting, the practical focus for the vast majority of cases is straightforward: stay hydrated, rest, and watch for the specific warning signs that indicate something beyond a typical case.
      </p>

      <QuickCheck
      question="Someone develops sudden nausea, vomiting, and watery diarrhea a day after a family member had similar symptoms. What does this pattern most likely suggest, in general terms?"
      options={[
      { text: "This pattern has no useful meaning without lab testing", correct: false, explanation: "While testing could confirm a specific cause, the pattern itself — symptoms appearing shortly after a household member had similar symptoms — is a recognizable clue commonly associated with person-to-person spread of viral gastroenteritis." },
      { text: "A pattern consistent with viral gastroenteritis spreading between household members, which is a very common and usually self-limiting cause of sudden digestive symptoms, per CDC materials on norovirus transmission", correct: true, explanation: "Correct. Person-to-person clustering of symptoms within a household is a classic pattern associated with viral gastroenteritis, which the CDC identifies as highly contagious." },
      { text: "This must mean the household's food supply is contaminated", correct: false, explanation: "A shared food source is possible, but symptoms following one household member's illness by roughly a day more strongly suggests person-to-person viral spread than a shared foodborne source, which would more typically affect multiple people at once." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A typical mild, self-limiting case (baseline case)</h3>
      <div className="prose-p">
      Nausea and a few episodes of vomiting or loose stool, lasting one to two days, with no blood in stool or vomit, no high fever, and the ability to keep at least small amounts of fluid down — this general pattern is consistent with a typical mild case of viral gastroenteritis or mild foodborne illness, generally managed at home with rest and gradual rehydration, per NHS guidance.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Symptoms that shift the picture toward needing care (edge case / variation)</h3>
      <div className="prose-p">
      Vomiting that prevents keeping down any fluids for more than about 24 hours, or diarrhea and vomiting lasting beyond a few days without improvement, are both listed by the NHS as reasons to seek medical advice — because the underlying risk being managed for is dehydration, and the inability to retain fluids removes the main self-care tool (oral rehydration) from the equation.
      </div>

      <QuickCheck
      question="Why does the inability to keep any fluids down for an extended period specifically raise the urgency of a digestive upset, compared to having diarrhea alone?"
      options={[
      { text: "It doesn't really change anything — both are treated the same way", correct: false, explanation: "The inability to keep fluids down specifically removes oral rehydration as an option, which is the main tool for managing the dehydration risk from a digestive upset, changing the situation's urgency." },
      { text: "Because the main practical risk from a digestive upset is dehydration, and if someone can't keep fluids down, the standard home approach (drinking fluids to replace losses) is no longer effective, increasing the real risk of dehydration", correct: true, explanation: "Correct. This directly connects to why NHS/CDC guidance treats inability to retain fluids as a specific reason to seek care." },
      { text: "It only matters for young children, not adults", correct: false, explanation: "Inability to keep fluids down for an extended period is flagged as a concern across age groups, though the exact time threshold and urgency can vary by age." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Warning signs that point to something beyond typical gastroenteritis (real-world / applied case)</h3>
      <div className="prose-p">
      Blood in vomit or stool, severe abdominal pain, high fever, or signs of significant dehydration (very dark urine, dizziness, confusion) are warning signs that go beyond the typical gastroenteritis pattern and are specifically listed by health agencies as reasons for prompt medical evaluation — these can sometimes indicate a more serious infection or a different underlying condition entirely, which is exactly why they&apos;re treated differently from routine digestive upset.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Digestive upset: typical self-limiting course vs. warning signs (general framework)"
      type="comparison"
      svgSrc="/diagrams/health-body-basics-understanding-common-digestive-upsets-warning-signs.svg"
      altText="A two-column diagram. The left column, labeled Typical Course, lists mild nausea or vomiting, resolves within one to two days, able to keep some fluids down, and no blood present. The right column, labeled Seek Medical Care, lists unable to keep fluids down for over 24 hours, blood in vomit or stool, high fever, and symptoms lasting more than a few days."
      />
      <p>
      Almost every warning sign in the right column ties back to one of two underlying concerns: dehydration risk, or a symptom pattern that suggests something beyond routine viral or mild foodborne illness.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Trying to 'push through' and eat normally right after vomiting stops.", fix: "Follow general guidance to reintroduce food gradually, starting with small amounts of bland, easy-to-digest food once tolerating fluids well." },
      { mistake: "Not tracking how long symptoms have lasted.", fix: "Note when symptoms started — 'lasting more than a few days without improvement' is one of the specific thresholds health agencies use for seeking care." },
      { mistake: "Ignoring reduced urination or very dark urine as unrelated to a stomach bug.", fix: "Recognize these as dehydration warning signs directly connected to fluid loss from vomiting and diarrhea, not a separate issue." },
      ]}
      />
      <MisconceptionCallout
      myth="Vomiting and diarrhea are the illness itself doing damage, so stopping them as fast as possible with medication is always the right first move."
      reality={<p>In many cases, vomiting and diarrhea are partly the body&apos;s own mechanism for clearing an offending virus, bacteria, or toxin. General guidance for uncomplicated cases focuses on staying hydrated and letting the episode run its course, rather than immediately suppressing symptoms — and anti-diarrheal or anti-nausea medication use should follow product labeling or a healthcare provider&apos;s guidance, since it isn&apos;t appropriate in every situation (for example, some bacterial infections).</p>}
      />

      <QuickCheck
      question="For a typical, uncomplicated case of viral gastroenteritis, what does general health guidance emphasize as the primary at-home focus?"
      options={[
      { text: "Immediately taking anti-diarrheal medication to stop symptoms as fast as possible in every case", correct: false, explanation: "Anti-diarrheal or anti-nausea medication isn't universally appropriate for every case and should follow label instructions or medical guidance — it isn't the blanket first recommendation for every digestive upset." },
      { text: "Staying hydrated and allowing the illness to run its typical course, since vomiting and diarrhea are partly the body's own clearing mechanism, while watching for specific warning signs", correct: true, explanation: "Correct. This matches general CDC/NHS guidance for typical, uncomplicated gastroenteritis — hydration and monitoring, not aggressive symptom suppression, as the default approach." },
      { text: "Fasting completely until all symptoms are gone", correct: false, explanation: "General guidance is to gradually reintroduce food once fluids are tolerated, not to fast indefinitely until symptoms fully resolve." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Focus on staying hydrated with small, frequent sips of fluid during a digestive upset, since dehydration is the main practical risk.",
      "Track symptom duration — most cases improve within a couple of days; lack of improvement beyond a few days is a reason to seek care.",
      "Watch specifically for blood in vomit or stool, high fever, severe abdominal pain, or inability to keep fluids down, and seek medical attention if any appear.",
      "Practice handwashing and general food safety habits to reduce the spread and recurrence of common digestive illnesses.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What usually causes sudden nausea, vomiting, and diarrhea?", answer: "Most often viral gastroenteritis (such as norovirus) or mild foodborne illness — both typically resolve within a few days with rest and hydration." },
      { question: "How long does a typical stomach bug last?", answer: "Most cases of viral gastroenteritis resolve within one to three days, according to the CDC, though some symptoms like fatigue can linger slightly longer." },
      { question: "When should you see a doctor for vomiting or diarrhea?", answer: "General warning signs include inability to keep fluids down for over 24 hours, blood in vomit or stool, high fever, severe abdominal pain, signs of significant dehydration, or symptoms lasting more than a few days without improvement." },
      { question: "Is it safe to eat during a digestive upset?", answer: "General guidance suggests staying hydrated first, then gradually reintroducing small amounts of bland, easy-to-digest food once fluids are being tolerated — always adjust based on how you feel and consult a doctor for a specific situation." },
      { question: "Is a stomach bug contagious?", answer: "Viral gastroenteritis like norovirus is highly contagious and spreads person-to-person and via contaminated surfaces, which is why the CDC emphasizes handwashing and staying home while symptomatic." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
