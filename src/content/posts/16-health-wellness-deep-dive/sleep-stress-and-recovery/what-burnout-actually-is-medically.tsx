import React from 'react';
import { PostFrontmatter, QuizBankItem } from '@/types/post';
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
  title: "What Burnout Actually Is, Medically",
  category: "health-wellness-deep-dive",
  order: 8,
  subtopic: "sleep-stress-and-recovery",
  tags: ["burnout", "burnout definition", "ICD-11 QD85", "is burnout a medical diagnosis", "burnout vs depression", "work stress", "Maslach Burnout Inventory", "occupational phenomenon"],
  date: "2026-10-02",
  updated: "2026-10-02",
  youtubeShort: false, youtubeLong: false,
  seoScore: 81, seoScoredOn: "2026-10-02",
  lastReviewed: "2026-10-02",
  excerpt: "Medically, burnout is not a disease: WHO's ICD-11 lists it (QD85) as an occupational phenomenon of exhaustion, job cynicism and reduced efficacy.",
  summary: "Medically, burnout is a defined syndrome but not a disease. In ICD-11, which took effect on 1 January 2022, the World Health Organization lists burn-out under code QD85 in the chapter on factors influencing health status, not among medical conditions. WHO describes it as a syndrome resulting from chronic workplace stress that has not been successfully managed, with three dimensions: feelings of energy depletion or exhaustion; increased mental distance from one's job, or negativism and cynicism about it; and reduced professional efficacy. WHO says the term applies specifically to the work context, not to other areas of life. The three dimensions come from decades of research by psychologist Christina Maslach, whose Maslach Burnout Inventory (1981) is the most widely used research measure. Burnout is not a diagnosis in the American Psychiatric Association's DSM-5-TR, and research shows substantial overlap with depressive symptoms, so clinicians check for depression, anxiety and physical causes of fatigue such as thyroid problems or anemia. A 2018 JAMA review of 182 physician studies found 142 different definitions of burnout and prevalence estimates ranging from 0% to 80.5%, which shows how measurement drives the numbers. A 2017 systematic review of 61 prospective studies linked burnout to later health problems including coronary heart disease, type 2 diabetes, insomnia and depressive symptoms. Mayo Clinic advises talking to a doctor or mental health provider when symptoms persist.",
  sources: [
    { label: "World Health Organization — ICD-11 for Mortality and Morbidity Statistics, QD85 Burnout", url: "https://icd.who.int/browse/2024-01/mms/en#129180281" },
    { label: "World Health Organization (2019) — Burn-out an \"occupational phenomenon\": International Classification of Diseases", url: "https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases" },
    { label: "Mayo Clinic — Job burnout: How to spot it and take action", url: "https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/burnout/art-20046642" },
    { label: "Maslach & Leiter (2016) — Understanding the burnout experience: recent research and its implications for psychiatry, World Psychiatry", url: "https://doi.org/10.1002/wps.20311" },
    { label: "Bianchi, Schonfeld & Laurent (2015) — Burnout-depression overlap: A review, Clinical Psychology Review", url: "https://doi.org/10.1016/j.cpr.2015.01.004" },
    { label: "Rotenstein et al. (2018) — Prevalence of burnout among physicians: a systematic review, JAMA", url: "https://doi.org/10.1001/jama.2018.12777" },
    { label: "Salvagioni et al. (2017) — Physical, psychological and occupational consequences of job burnout: A systematic review of prospective studies, PLOS ONE", url: "https://doi.org/10.1371/journal.pone.0185781" },
  ],
  seeAlso: [
    "health-wellness-deep-dive/how-chronic-stress-actually-damages-long-term-health",
    "health-wellness-deep-dive/what-cortisol-actually-does-to-the-body-under-stress",
    "health-wellness-deep-dive/how-sleep-cycles-actually-affect-recovery",
    "psychology-human-behavior/what-imposter-syndrome-actually-is",
    "health-body-basics/understanding-stress-and-the-body-general-overview",
  ],
  glossary: [
    { term: "Burnout (ICD-11 QD85)", definition: "WHO's term for a syndrome resulting from chronic workplace stress that has not been successfully managed, classified as an occupational phenomenon rather than a medical condition." },
    { term: "Occupational phenomenon", definition: "A work-related state that can lead people to seek health care, listed in ICD-11's chapter on factors influencing health status rather than as a disease." },
    { term: "Exhaustion", definition: "The first burnout dimension: feeling drained of emotional and physical energy, the most commonly reported component." },
    { term: "Depersonalization / cynicism", definition: "The second dimension: mental distance from the job, or a negative, detached attitude toward the work and the people it serves." },
    { term: "Reduced professional efficacy", definition: "The third dimension: a sense of reduced competence, achievement and productivity at work." },
    { term: "Maslach Burnout Inventory (MBI)", definition: "A questionnaire developed by Christina Maslach and Susan Jackson (1981) that measures the three burnout dimensions; the most widely used research tool for burnout." },
    { term: "Differential diagnosis", definition: "The process a clinician uses to rule other conditions in or out when symptoms could have several causes, such as depression or anemia." },
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

export const quiz: QuizBankItem[] = [
  {"question": "How does the WHO's ICD-11 classify burnout (code QD85)?", "difficulty": "easy", "options": [{"text": "As an occupational phenomenon, not a medical condition", "correct": true, "explanation": "It sits in the chapter on factors influencing health status or contact with health services."}, {"text": "As a type of major depressive disorder", "correct": false, "explanation": "ICD-11 lists burnout separately and excludes mood disorders from it."}, {"text": "As an infectious disease", "correct": false, "explanation": "Burnout is linked to chronic workplace stress, not infection."}, {"text": "It isn't mentioned in ICD-11 at all", "correct": false, "explanation": "It is listed, under code QD85."}]},
  {"question": "Which of these is NOT one of the three burnout dimensions in ICD-11?", "difficulty": "medium", "options": [{"text": "Persistent low mood in every area of life", "correct": true, "explanation": "Pervasive low mood points toward depression; burnout is defined in the work context."}, {"text": "Feelings of energy depletion or exhaustion", "correct": false, "explanation": "This is the first dimension."}, {"text": "Increased mental distance or cynicism about one's job", "correct": false, "explanation": "This is the second dimension."}, {"text": "Reduced professional efficacy", "correct": false, "explanation": "This is the third dimension."}]},
  {"question": "According to WHO, can the ICD-11 burnout definition be applied to stress from caring for family at home?", "difficulty": "medium", "options": [{"text": "No, it refers specifically to the occupational context", "correct": true, "explanation": "WHO states the term should not be applied to experiences in other areas of life."}, {"text": "Yes, it covers any kind of chronic stress", "correct": false, "explanation": "The ICD-11 definition is limited to work."}, {"text": "Only if the person is over 65", "correct": false, "explanation": "Age is not part of the definition."}, {"text": "Only if a blood test confirms it", "correct": false, "explanation": "There is no blood test for burnout."}]},
  {"question": "Is burnout a diagnosis in the American Psychiatric Association's DSM-5-TR?", "difficulty": "easy", "options": [{"text": "No, it is not listed as a mental disorder", "correct": true, "explanation": "Clinicians may instead diagnose conditions such as depression, anxiety or an adjustment disorder if criteria are met."}, {"text": "Yes, as its own personality disorder", "correct": false, "explanation": "There is no such category."}, {"text": "Yes, under sleep disorders", "correct": false, "explanation": "Sleep problems can accompany burnout, but burnout isn't listed there."}, {"text": "Yes, but only for health care workers", "correct": false, "explanation": "The DSM does not list burnout for any profession."}]},
  {"question": "Which questionnaire, first published in 1981, is the most widely used research measure of burnout?", "difficulty": "medium", "options": [{"text": "The Maslach Burnout Inventory", "correct": true, "explanation": "Developed by Christina Maslach and Susan Jackson, it measures exhaustion, depersonalization and personal accomplishment."}, {"text": "The Glasgow Coma Scale", "correct": false, "explanation": "That measures consciousness after brain injury."}, {"text": "The Body Mass Index", "correct": false, "explanation": "BMI is a weight-to-height ratio."}, {"text": "The Apgar score", "correct": false, "explanation": "That assesses newborns."}]},
  {"question": "A 2018 JAMA review of 182 physician studies found prevalence estimates from 0% to 80.5%. What mainly explains that spread?", "difficulty": "hard", "options": [{"text": "Studies used many different definitions and cutoffs for burnout", "correct": true, "explanation": "The review counted 142 unique definitions, so the number depends heavily on how burnout is measured."}, {"text": "Burnout rates changed by 80 points in a single year", "correct": false, "explanation": "The spread came from methods, not a sudden change."}, {"text": "Half the doctors were misdiagnosed with anemia", "correct": false, "explanation": "The review did not report this."}, {"text": "Only one country was studied", "correct": false, "explanation": "The studies spanned dozens of countries."}]},
  {"question": "Why does a clinician check for depression, thyroid problems or anemia in someone who says they are burned out?", "difficulty": "hard", "options": [{"text": "These conditions can cause similar exhaustion and need different treatment", "correct": true, "explanation": "Burnout overlaps with depressive symptoms, and fatigue has many physical causes, so other conditions are ruled out first."}, {"text": "Burnout is always caused by anemia", "correct": false, "explanation": "Anemia is one possible cause of fatigue, not the cause of burnout."}, {"text": "Insurance requires three tests for every visit", "correct": false, "explanation": "The reason is clinical, not administrative."}, {"text": "There's no reason; it's routine paperwork", "correct": false, "explanation": "Ruling out look-alike conditions is the point of the evaluation."}]},
  {"question": "What did a 2017 systematic review of 61 prospective studies link burnout to?", "difficulty": "medium", "options": [{"text": "Later physical and mental health problems, including coronary heart disease, type 2 diabetes and insomnia", "correct": true, "explanation": "Prospective studies follow people over time, which strengthens the case that burnout comes before these outcomes, though they don't prove cause on their own."}, {"text": "Improved long-term heart health", "correct": false, "explanation": "The associations ran in the harmful direction."}, {"text": "No measurable outcomes at all", "correct": false, "explanation": "The review found physical, psychological and occupational consequences."}, {"text": "Only better job performance", "correct": false, "explanation": "Burnout was linked to absenteeism and job dissatisfaction."}]},
];

const h2 = "scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink";
const h3 = "scroll-mt-10 font-display text-xl font-bold text-ink mb-4";

export default function Post() {
  return (
    <>
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
        <strong>This entry explains how burnout is defined and studied. It is not medical advice and can&apos;t diagnose or treat any condition.</strong> Exhaustion and low mood can have many causes, including depression and physical illness. If you&apos;re struggling, talk to a doctor or a mental health professional. In the U.S., if you&apos;re in crisis, call or text 988.
      </div>

      <h2 className={h2}>Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "The WHO's ICD-11 lists burnout (code QD85) as an occupational phenomenon, not a medical condition or a mental disorder.",
          "It is defined by three dimensions: exhaustion, mental distance or cynicism about the job, and reduced professional efficacy.",
          "The definition applies only to work. It is not a DSM-5-TR diagnosis, and it overlaps heavily with depressive symptoms.",
          "Because exhaustion has many causes, a clinician rules out depression, anxiety and physical problems before calling it burnout.",
        ]}
      />

      <h2 className={h2}>The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">&quot;Burnout&quot; gets used for everything from a bad week to a breakdown, but the World Health Organization uses it in a narrow, specific way. Think of a phone battery that never gets a full charge: each day starts a little lower, until it dies by mid-morning. In WHO&apos;s definition, burnout is what happens when stress at work goes on for a long time without being brought under control. It shows up as three things together: you feel drained, you start to feel detached or cynical about your job, and you feel less able to do it well. WHO calls it an &quot;occupational phenomenon&quot;, which means it&apos;s a recognized reason people seek health care, but it isn&apos;t classed as a disease. That&apos;s why a doctor will usually check for other causes of exhaustion, such as depression or a thyroid problem, rather than stopping at the word burnout.</div>}
        detailed={<div className="prose-p">In ICD-11, which took effect on 1 January 2022, burnout sits under code <strong>QD85</strong> in chapter 24, &quot;Factors influencing health status or contact with health services&quot;, within problems associated with employment. WHO defines it as &quot;a syndrome conceptualized as resulting from chronic workplace stress that has not been successfully managed&quot;, with three dimensions: <strong>exhaustion</strong>, <strong>increased mental distance</strong> from one&apos;s job (negativism or cynicism), and <strong>reduced professional efficacy</strong>. It explicitly excludes adjustment disorder, anxiety or fear-related disorders, mood disorders and disorders specifically associated with stress, and it &quot;should not be applied to describe experiences in other areas of life&quot;. The older ICD-10 had a looser entry, Z73.0, &quot;burn-out: state of vital exhaustion&quot;. The three dimensions come from Christina Maslach&apos;s research; the <strong>Maslach Burnout Inventory</strong> (Maslach and Jackson, 1981) measures them and is the dominant research tool, though it was built for research rather than diagnosis (Maslach and Leiter, 2016). Burnout is not a disorder in the APA&apos;s DSM-5-TR. Its status as a separate condition is still debated: Bianchi and colleagues&apos; 2015 review found substantial overlap between burnout and depressive symptoms, especially on the exhaustion dimension. Some countries go further; Sweden, for example, uses a clinical diagnosis called exhaustion disorder. The working links to physiology run through <TermLink href="/health-wellness-deep-dive/how-chronic-stress-actually-damages-long-term-health">chronic stress</TermLink>, which keeps the body&apos;s stress systems switched on.</div>}
      />
      <FootnoteAside>The word itself predates the science. Psychologist Herbert Freudenberger used &quot;burn-out&quot; in a 1974 paper describing exhausted volunteers at a free clinic in New York. Maslach&apos;s measurement work in the late 1970s and 1980s turned it into a research construct, and WHO&apos;s 2019 decision to describe it more fully in ICD-11 gave it an international definition.</FootnoteAside>

      <QuickCheck
        question="In WHO's ICD-11, what kind of entry is burnout (QD85)?"
        options={[
          { text: "An occupational phenomenon that can bring people into contact with health services", correct: true, explanation: "Correct. It is described and coded, but it is not classified as a medical condition." },
          { text: "A disease, alongside conditions like diabetes", correct: false, explanation: "WHO specifically did not classify burnout as a medical condition." },
          { text: "A subtype of major depression", correct: false, explanation: "ICD-11 lists it separately and excludes mood disorders from it." },
        ]}
      />

      <h2 className={h2}>Worked examples</h2>

      <h3 className={h3}>Example 1: The nurse with all three dimensions (baseline case)</h3>
      <div className="prose-p">A hospital nurse has worked short-staffed for eighteen months. She wakes up tired even after a day off (exhaustion). She has started thinking of patients as &quot;bed 12&quot; and feels numb about the work she once loved (mental distance, which Maslach called depersonalization). And she&apos;s sure she&apos;s making more mistakes and achieving less (reduced efficacy). The stress is tied to her job, has lasted a long time and hasn&apos;t been managed by changes at work. All three dimensions are present, in the occupational context, which is exactly the pattern ICD-11 describes. Her doctor would still check her sleep, mood and blood tests, because the label describes a pattern; it doesn&apos;t rule out anything else.</div>

      <h3 className={h3}>Example 2: Exhausted everywhere, not just at work (edge case)</h3>
      <div className="prose-p">An office worker says he&apos;s &quot;burned out&quot;. But on questioning, he&apos;s lost interest in his hobbies, his weekends feel as flat as his workdays, and he&apos;s been sleeping badly for two months. Under ICD-11, that wider picture doesn&apos;t fit burnout, which is limited to work and excludes mood disorders. Pervasive low mood and loss of interest across life are hallmarks of depression, which is a diagnosable, treatable condition. This is why the burnout-depression overlap matters: Bianchi and colleagues found that people with high burnout scores often also have significant depressive symptoms. Calling it burnout can delay the right evaluation. The useful question isn&apos;t &quot;is it burnout?&quot; but &quot;what else could this be?&quot;, which is a question for a clinician.</div>

      <h3 className={h3}>Example 3: Reading a &quot;half of doctors are burned out&quot; headline (applied case)</h3>
      <div className="prose-p">Headlines often report one burnout percentage as if it were fixed. Rotenstein and colleagues&apos; 2018 JAMA review pooled 182 studies of 109,628 physicians in 45 countries. Prevalence estimates ranged from 0% to 80.5%, and the authors found 142 unique definitions of burnout across those studies. Some counted anyone high on a single dimension; others required all three. Change the cutoff and the same doctors can score as 10% or 60% burned out. That doesn&apos;t mean burnout isn&apos;t real. A 2017 review of 61 prospective studies (Salvagioni and colleagues) linked it to later coronary heart disease, type 2 diabetes, insomnia, depressive symptoms and absenteeism. It means any single percentage only makes sense alongside the definition behind it.</div>

      <QuickCheck
        question="A coworker feels exhausted and hopeless at work, at home and in every hobby. What's the most accurate reading?"
        options={[
          { text: "It goes beyond the work-only ICD-11 definition, so a clinician should check for other causes such as depression", correct: true, explanation: "Correct. Burnout is limited to the occupational context, and symptoms across all of life call for a broader evaluation." },
          { text: "It's definitely burnout because exhaustion is present", correct: false, explanation: "Exhaustion alone doesn't define burnout and has many possible causes." },
          { text: "It can't be anything medical, since burnout isn't a disease", correct: false, explanation: "Burnout not being a disease doesn't mean the symptoms have no medical cause." },
        ]}
      />

      <h2 className={h2}>How it works (visual)</h2>
      <DiagramBlock
        title="Burnout vs depression vs ordinary work stress"
        type="comparison"
        svgSrc="/diagrams/health-wellness-deep-dive-what-burnout-actually-is-medically-comparison.svg"
        altText="A three-column comparison. Ordinary work stress is short-term, eases with rest or when the pressure passes, and is not a classification. Burnout (ICD-11 QD85) comes from chronic workplace stress that hasn't been managed, is limited to work, has three dimensions (exhaustion, mental distance or cynicism about the job, and reduced professional efficacy), and is classed as an occupational phenomenon, not a disease. Depression involves low mood or loss of interest across all areas of life, is a diagnosable mood disorder in ICD-11 and DSM-5-TR, and is treatable. A bar below notes that exhaustion overlaps all three and that a clinician also rules out physical causes such as thyroid problems, anemia and sleep disorders."
      />
      <p>The middle column is narrower than everyday use suggests. Burnout requires a work source, a long timescale and all three dimensions, and the overlap bar is why a proper evaluation looks beyond the label.</p>

      <h2 className={h2}>Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using burnout to mean any tiredness or stress.", fix: "ICD-11 means chronic, unmanaged workplace stress with exhaustion, cynicism about the job and reduced efficacy together." },
          { mistake: "Assuming burnout is an official medical diagnosis.", fix: "WHO classes it as an occupational phenomenon, and it isn't in the DSM-5-TR. Rules on sick leave vary by country and employer." },
          { mistake: "Self-labeling and skipping a check-up.", fix: "Depression, anxiety, thyroid problems, anemia and sleep disorders can all look like burnout. A doctor can rule them out." },
          { mistake: "Treating burnout as purely a personal weakness.", fix: "Maslach's research points to workload, lack of control, insufficient reward, unfairness, poor community and values conflict at work." },
          { mistake: "Quoting a single burnout percentage as fact.", fix: "Estimates swing widely with the definition and cutoff used; check how a study measured it." },
        ]}
      />
      <MisconceptionCallout
        myth="In 2019, WHO officially recognized burnout as a medical disease."
        reality={<p>That was a widely repeated misreading. In May 2019, WHO clarified that burnout is included in ICD-11 as an <strong>occupational phenomenon</strong> and is &quot;not classified as a medical condition&quot;. What changed was a more detailed definition, built around three work-related dimensions, replacing the vaguer ICD-10 entry.</p>}
      />

      <h2 className={h2}>What to do next</h2>
      <ActionChecklist
        items={[
          "Check whether all three dimensions are present: exhaustion, growing cynicism about the job, and a sense of reduced effectiveness.",
          "Notice whether the symptoms are tied to work or show up across your whole life, and share that detail with a clinician.",
          "Talk to a doctor if exhaustion, sleep problems or low mood last for weeks, so physical and mental health causes can be checked.",
          "Use the workplace steps Mayo Clinic describes, such as discussing workload and options with a supervisor or using an employee assistance program if one is available.",
          "Protect basics such as sleep, physical activity and time with people you trust, which Mayo Clinic lists among coping steps.",
          "In the U.S., if you're in crisis, call or text 988.",
        ]}
      />

      <h2 className={h2}>FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is burnout a medical diagnosis?", answer: "Not as a disease. WHO's ICD-11 lists burnout under code QD85 as an occupational phenomenon, and it isn't a disorder in the DSM-5-TR. A clinician can still record it and may diagnose related conditions, such as depression, if criteria are met." },
          { question: "What are the three signs of burnout according to WHO?", answer: "Feelings of energy depletion or exhaustion; increased mental distance from one's job, or negativism and cynicism about it; and reduced professional efficacy." },
          { question: "What is the difference between burnout and depression?", answer: "Burnout, as WHO defines it, is limited to work. Depression involves low mood or loss of interest across all areas of life and is a diagnosable mood disorder. The two overlap a lot, so a professional evaluation is the way to tell them apart." },
          { question: "Can you get burnout from parenting or caregiving?", answer: "Researchers use terms like parental or caregiver burnout, but the ICD-11 definition applies only to the occupational context. Chronic stress from caregiving is real and worth raising with a doctor either way." },
          { question: "How long does it take to recover from burnout?", answer: "There's no fixed timeline. Recovery depends on the person, whether the work stressors change and whether another condition is involved, so it's best discussed with a health care provider." },
        ]}
      />

      <h2 className={h2}>Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className={h2}>See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
