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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Why Bruises Change Color as They Heal",
  category: "health-body-basics",
  order: 52,
  subtopic: "body-basics-curiosities",
  pillar: true,
  videoQueue: true,
  tags: ["bruises", "contusion", "hemoglobin", "healing", "body basics"],
  date: "2026-09-22",
  updated: "2026-09-22",
  lastReviewed: "2026-09-22",
  excerpt: "A bruise's color parade — red to purple to green to yellow — isn't random. It's your body chemically breaking down trapped blood, one pigment at a time.",
  summary: "A bruise forms when an impact breaks small blood vessels under intact skin, leaking blood into the surrounding tissue. The color changes over the following days and weeks aren't random — they track your body breaking hemoglobin down into a sequence of different pigmented compounds and clearing them away. This general information is not a substitute for medical evaluation, and color alone isn't a reliable way to judge how serious an injury is.",
  sources: [
    { label: "Mayo Clinic — Bruise: First Aid", url: "https://www.mayoclinic.org/first-aid/first-aid-bruise/basics/art-20056663" },
    { label: "NIH — MedlinePlus: Bruises", url: "https://medlineplus.gov/ency/article/001085.htm" },
    { label: "OrthoInfo (American Academy of Orthopaedic Surgeons) — Contusions (Bruises)", url: "https://orthoinfo.aaos.org/en/diseases--conditions/contusions-bruises/" },
  ],
  seeAlso: [
    "health-body-basics/what-to-do-for-a-sprain-the-rice-method",
    "health-body-basics/how-to-treat-a-minor-cut-or-burn",
    "health-body-basics/recognizing-signs-of-a-medical-emergency",
    "general-science-facts/blood-and-the-circulatory-system-in-depth",
  ],
  glossary: [
    { term: "Contusion", definition: "The medical term for a bruise — an injury where blood vessels break under intact skin, leaking blood into the surrounding tissue without an open wound." },
    { term: "Hemoglobin", definition: "The iron-containing protein in red blood cells that carries oxygen, and the source molecule that gets broken down into the pigments that give a bruise its changing colors." },
    { term: "Biliverdin", definition: "A green-colored pigment produced as the body breaks down hemoglobin, responsible for the greenish stage of a healing bruise." },
    { term: "Bilirubin", definition: "A yellow-brown pigment produced as biliverdin breaks down further, responsible for the yellowish stage in the later days of a healing bruise." },
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
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "A bruise's color comes from blood trapped under intact skin after small vessels break — the color changes over days to weeks as the body chemically breaks that trapped blood down and clears it away.",
          "The typical progression is red/purple in the first day or two, then blue or blackish-purple, then green, then yellow or brown as the bruise fades — driven by hemoglobin degrading into biliverdin, then bilirubin.",
          "Bruise color and size depend heavily on where the injury is and how loose the overlying tissue is, not just how hard the impact was — a relatively minor bump near the eye can look far more dramatic than a harder hit on the shin.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A bruise happens when an impact breaks small blood vessels just under the skin, but the skin itself stays intact — so instead of bleeding out, the blood pools in the tissue underneath. That trapped blood is what you&apos;re actually seeing through the skin. As your body clears it away over the following days and weeks, it doesn&apos;t just fade in place; it runs through a sequence of colors, from dark red or purple, to blue-black, to green, to yellow or brown, because the body is chemically dismantling that blood one stage at a time, and each intermediate stage happens to be a different color.</div>}
        detailed={<div className="prose-p">The medical term for a bruise is a <TermLink href="/health-body-basics/why-bruises-change-color-as-they-heal">contusion</TermLink>. The initial red-purple color comes straight from <TermLink href="/health-body-basics/why-bruises-change-color-as-they-heal">hemoglobin</TermLink>, the oxygen-carrying protein in the red blood cells now trapped outside the vessels. Within a day or two, that hemoglobin starts losing oxygen and breaking down, often shifting the bruise toward blue or blackish-purple. Specialized immune cells called macrophages then move in and begin breaking the hemoglobin down further, first into <TermLink href="/health-body-basics/why-bruises-change-color-as-they-heal">biliverdin</TermLink> (a green pigment, roughly days 5-7), and then into <TermLink href="/health-body-basics/why-bruises-change-color-as-they-heal">bilirubin</TermLink> (a yellow-brown pigment, roughly days 7-10), before the tissue finishes reabsorbing the remaining pigment and the skin returns to normal, typically within two to three weeks total. This is the same basic chemical pathway that produces the yellow tint of jaundice — a healing bruise is essentially running a small, localized version of that same process.</div>}
      />
      <FootnoteAside>This color timeline is a rough general pattern, not a precise clock — factors like age, skin tone, the bruise&apos;s location, its depth, and an individual&apos;s circulation and clotting all shift the exact timing, which is why bruise color isn&apos;t considered a reliable way to date an injury precisely.</FootnoteAside>

      <p>
      Because the timeline varies so much between people and situations, it&apos;s worth walking through a few concrete cases to see how the same underlying mechanism plays out differently depending on where and how the bruise happens.
      </p>

      <QuickCheck
        question="A bruise on someone's arm has turned from purple to a greenish color after about five days. What does the green color indicate is happening?"
        options={[
          { text: "The area is developing an infection", correct: false, explanation: "Color changing from purple toward green on this general timeline is a normal, expected part of the healing chemistry, not a sign of infection on its own. Warmth, spreading redness, or pus would be the actual infection warning signs." },
          { text: "The trapped hemoglobin is being broken down into biliverdin, a green pigment, as part of the body's normal cleanup process", correct: true, explanation: "Correct. Around days 5-7, immune cells typically break hemoglobin down into biliverdin, a green-colored compound, which is a normal and expected stage in the body's process of clearing trapped blood from bruised tissue." },
          { text: "The bruise is a completely new, second injury forming in the same location", correct: false, explanation: "A color shift on this kind of timeline within the same bruise reflects ongoing breakdown of the original trapped blood, not a new injury — the pigment sequence is part of one continuous healing process." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A typical shin bruise (baseline case)</h3>
      <div className="prose-p">
      Bumping a shin on a coffee table produces a dark red-purple mark within hours, since the shin has very little cushioning tissue between skin and bone, so impact force concentrates there. Over the next one to two weeks it typically works through blue-black, then green, then yellow-brown, before fading completely — following the general hemoglobin-breakdown timeline described above, though shins can take longer to fully clear than areas with richer blood supply.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A black eye from a much smaller impact (edge case / variation)</h3>
      <div className="prose-p">
      The skin around the eye is unusually thin and the tissue underneath is loose, with blood vessels sitting close to the surface. That combination means even a fairly mild bump — nowhere near hard enough to leave a visible mark on the shin — can produce a strikingly dark, swollen bruise around the eye. This is a good example of why bruise size and darkness track tissue looseness and blood vessel density at least as much as they track the force of the original impact.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Older adults and people on blood thinners (real-world / applied case)</h3>
      <div className="prose-p">
      Skin naturally thins and the tissue supporting small blood vessels weakens with age, so older adults often bruise more easily from minor bumps and take noticeably longer to clear a bruise&apos;s color than a younger person would. Blood-thinning medications compound this by slowing how quickly the body can stop the initial bleeding into the tissue, which is why people on these medications are often specifically advised to mention any unusual or unexplained bruising to their prescribing clinician.
      </div>

      <QuickCheck
        question="Why might an older adult's bruise from a minor bump look larger and take longer to fade than the same bump would in a younger person?"
        options={[
          { text: "Older adults have fundamentally different blood chemistry that produces different bruise pigments", correct: false, explanation: "The underlying hemoglobin-breakdown chemistry is the same at any age — the difference is structural, not chemical." },
          { text: "Thinner skin and weaker support around small blood vessels with age make vessels more likely to break and slow the tissue's overall recovery", correct: true, explanation: "Correct. Age-related thinning of skin and the connective tissue that supports small blood vessels makes them more prone to breaking from minor impacts, and can also slow the pace at which the body clears the resulting bruise." },
          { text: "Bruises don't actually take longer to heal in older adults — it only appears that way", correct: false, explanation: "This is a genuine, well-documented physiological pattern rather than an appearance-only effect — it relates to real structural changes in skin and blood vessel support tissue that come with age." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="A bruise's color timeline: hemoglobin breaking down in stages"
        type="detail"
        svgSrc="/diagrams/health-body-basics-why-bruises-change-color-as-they-heal.svg"
        altText="Diagram showing a bruise's typical color timeline moving from red-purple in the first day or two, to blue-black, to green around day five to seven as hemoglobin breaks down into biliverdin, to yellow-brown around day seven to ten as it becomes bilirubin, then fading."
      />
      <p>
      Each block in that timeline corresponds to a different chemical compound, not just a different shade of the same bruise — which is exactly why the sequence tends to run in the same general order every time, even though the exact number of days varies from person to person.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a darker or more colorful bruise always means a more serious underlying injury.", fix: "Color and size are strongly influenced by the tissue location (looseness, blood supply, skin thickness), not just impact force — a dramatic-looking bruise near the eye can come from a much smaller hit than a duller one on the shin." },
          { mistake: "Trying to precisely date how old a bruise is just from its color.", fix: "Treat the color sequence as a rough general guide only — individual factors like age, skin tone, medication, and bruise depth shift the timing enough that color alone isn't considered a reliable way to date an injury." },
          { mistake: "Ignoring bruises that appear with no clear cause, or that keep appearing repeatedly.", fix: "Bruising that shows up without a clear bump or injury, or that happens unusually often, is worth mentioning to a healthcare provider rather than assuming it's routine." },
        ]}
      />
      <MisconceptionCallout
        myth="The darker or more colorful a bruise looks, the worse the injury underneath must be."
        reality={<p>Bruise appearance depends heavily on where it is on the body, not just how hard the impact was. Areas with thin skin, loose tissue, and blood vessels close to the surface — like around the eyes — can produce large, dark, dramatic-looking bruises from relatively minor bumps, while a harder impact on the shin, which has little cushioning tissue but thicker, tighter skin, might look comparatively mild. The color itself simply tracks a predictable sequence of hemoglobin breaking down into biliverdin and then bilirubin over time — it&apos;s informative about healing stage, but on its own it&apos;s not a reliable way to judge how serious the original injury was.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Apply a cold pack for the first 24-48 hours after a bruising injury to help limit swelling, then consider gentle warmth afterward to support circulation, as general first-aid guidance.",
          "Elevate a bruised limb above heart level where practical in the first day or two, which can help reduce pooling and swelling in the area.",
          "See a healthcare provider for bruising that's unusually large, extremely painful, doesn't start improving within about two weeks, appears with no clear cause, or is accompanied by other symptoms — this general information isn't a substitute for medical evaluation.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why does a bruise turn green before it fades?", answer: "The green stage, usually around day five to seven, comes from biliverdin, a pigment produced when the body's immune cells break down the trapped hemoglobin from the original injury. It's a normal, expected part of the healing sequence." },
          { question: "How long does it normally take for a bruise to fully heal?", answer: "Most bruises fade through their full color sequence and clear within about two to three weeks, though the exact timing varies with the bruise's size, depth, location, and the individual's age and health." },
          { question: "Is it normal for a bruise to get bigger before it gets better?", answer: "Some spreading in the first day or two as blood settles into surrounding tissue can be normal, but bruising that keeps expanding well beyond that window, or that's paired with significant swelling or pain, is worth having evaluated." },
          { question: "Why do bruises appear more easily in older adults?", answer: "Skin and the connective tissue supporting small blood vessels naturally thin with age, making those vessels more prone to breaking from minor bumps, and the body's process of clearing a bruise's pigment can also take longer." },
          { question: "Does a bruise's color tell you how old the injury is?", answer: "Only very roughly. The red-to-purple-to-green-to-yellow sequence is a general pattern, but individual factors like skin tone, bruise depth, and circulation shift the timing enough that color alone isn't a precise or reliable way to date an injury." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
    </>
  );
}
