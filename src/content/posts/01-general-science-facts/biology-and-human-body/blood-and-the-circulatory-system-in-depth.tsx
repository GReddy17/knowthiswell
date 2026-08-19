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
  title: "Blood & the Circulatory System in Depth",
  category: "general-science-facts",
  order: 28,
  subtopic: "biology-and-human-body",
  tags: [
    "blood",
    "circulatory system",
    "heart",
    "cardiac output",
    "blood pressure",
    "red blood cells",
    "arteries and veins",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How the heart, blood, and blood vessels work together to deliver oxygen throughout the body, and what cardiac output and blood pressure numbers actually mean.",
  summary: "The circulatory system uses the heart as a pump to push about 5 liters of blood through arteries, veins, and capillaries, delivering oxygen and nutrients while carrying away waste.",
  sources: [
    { label: "NIH National Heart, Lung, and Blood Institute — How the Heart Works", url: "https://www.nhlbi.nih.gov/health/heart" },
    { label: "NIH National Heart, Lung, and Blood Institute — Blood", url: "https://www.nhlbi.nih.gov/health/blood" },
    { label: "CDC — High Blood Pressure Facts", url: "https://www.cdc.gov/bloodpressure/facts.htm" },
    { label: "Encyclopaedia Britannica — Human Cardiovascular System", url: "https://www.britannica.com/science/human-cardiovascular-system" },
  ],
  seeAlso: [
    "general-science-facts/human-body-systems",
    "general-science-facts/muscles-bones-and-movement",
    "general-science-facts/hormones-and-the-endocrine-system",
    "general-science-facts/aging-and-the-human-lifespan",
  ],
  glossary: [
    { term: "Plasma", definition: "The straw-colored liquid portion of blood, making up about 55% of its volume, that carries blood cells, nutrients, hormones, and waste products." },
    { term: "Red blood cell", definition: "A blood cell containing hemoglobin that binds and carries oxygen from the lungs to body tissues; it lacks a nucleus and lives about 120 days." },
    { term: "Hemoglobin", definition: "The iron-containing protein inside red blood cells that binds oxygen, giving blood its red color." },
    { term: "Cardiac output", definition: "The total volume of blood the heart pumps per minute, calculated as heart rate multiplied by stroke volume." },
    { term: "Stroke volume", definition: "The amount of blood pumped out of the heart's left ventricle with each single heartbeat." },
    { term: "Artery", definition: "A blood vessel that carries blood away from the heart, generally under higher pressure and with thicker, more muscular walls than veins." },
    { term: "Vein", definition: "A blood vessel that carries blood back toward the heart, generally under lower pressure and equipped with one-way valves to prevent backflow." },
    { term: "Capillary", definition: "The smallest blood vessels, with walls only one cell thick, where oxygen, nutrients, and waste are actually exchanged between blood and body tissue." },
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
          "The average adult has about 5 liters of blood, made up of plasma, red blood cells, white blood cells, and platelets, each with a distinct job in transport, defense, or clotting.",
          "The heart pumps blood through two connected loops — a pulmonary circuit to the lungs for oxygen, and a systemic circuit to the rest of the body — and cardiac output (heart rate x stroke volume) is the direct measure of how much blood it moves per minute.",
          "Blood is always red, at every oxygen level; veins only look blue through skin because of how light wavelengths are absorbed and scattered, not because deoxygenated blood is actually blue.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Your <TermLink href="/general-science-facts/blood-and-the-circulatory-system-in-depth">circulatory system</TermLink> is a closed loop that moves blood everywhere in the body using the heart as its pump. Blood carries oxygen from your lungs to every tissue that needs it and carries waste like carbon dioxide back out. It travels away from the heart through <TermLink href="/general-science-facts/blood-and-the-circulatory-system-in-depth">arteries</TermLink>, exchanges oxygen and nutrients for waste at the tiny <TermLink href="/general-science-facts/blood-and-the-circulatory-system-in-depth">capillaries</TermLink>, and returns to the heart through <TermLink href="/general-science-facts/blood-and-the-circulatory-system-in-depth">veins</TermLink>. An average adult has roughly 5 liters of blood, and the heart beats around 60 to 100 times a minute at rest to keep it all moving continuously.</div>}
        detailed={<div className="prose-p">Blood is about 55% <TermLink href="/general-science-facts/blood-and-the-circulatory-system-in-depth">plasma</TermLink> by volume, a liquid carrying dissolved nutrients, hormones, proteins, and waste, with the remainder made up mostly of <TermLink href="/general-science-facts/blood-and-the-circulatory-system-in-depth">red blood cells</TermLink> (oxygen transport via <TermLink href="/general-science-facts/blood-and-the-circulatory-system-in-depth">hemoglobin</TermLink>), white blood cells (immune defense), and platelets (clotting). The heart has four chambers and drives two separate but connected circuits: the pulmonary circuit sends oxygen-poor blood from the right side of the heart to the lungs to pick up oxygen and release carbon dioxide, and the systemic circuit sends that now oxygen-rich blood from the left side of the heart out to the rest of the body. The volume the heart moves per minute is called <TermLink href="/general-science-facts/blood-and-the-circulatory-system-in-depth">cardiac output</TermLink>, calculated as heart rate multiplied by <TermLink href="/general-science-facts/blood-and-the-circulatory-system-in-depth">stroke volume</TermLink> (the amount ejected per beat) — a resting adult typically moves about 5 liters per minute, meaning essentially all the body&apos;s blood cycles through the heart roughly once every 60 seconds. Blood pressure readings (such as 120/80 mmHg) report systolic pressure (the higher number, measured as the heart contracts) over diastolic pressure (the lower number, measured as the heart relaxes between beats), both driven by cardiac output and how much resistance the blood vessels offer to flow.</div>}
      />
      <FootnoteAside>Red blood cells have no nucleus and no DNA — they&apos;re essentially bags of hemoglobin optimized purely for carrying oxygen. Each one lives about 120 days before being broken down and replaced, and the bone marrow produces roughly two million new ones every second to keep up.</FootnoteAside>

      <p>
      That heart rate and stroke volume relationship isn&apos;t just a definition — it&apos;s the exact number that changes when you exercise, and understanding it explains why your heart pounds so much harder during a workout than it does at rest.
      </p>

      <QuickCheck
        question="Cardiac output equals heart rate multiplied by stroke volume. During exercise, heart rate roughly doubles from 70 to 150 beats per minute. What happens to cardiac output?"
        options={[
          { text: "It stays the same, because the body only needs a fixed total amount of blood moved regardless of activity", correct: false, explanation: "Cardiac output isn't fixed — it's a demand-driven quantity that rises directly with heart rate (and often stroke volume too) whenever the body needs more oxygen delivered, such as during exercise." },
          { text: "It roughly doubles, or more, since heart rate roughly doubled and stroke volume typically stays the same or increases slightly during exertion", correct: true, explanation: "Correct. Since cardiac output = heart rate x stroke volume, a doubled heart rate alone roughly doubles cardiac output, and stroke volume often rises too during exercise, especially in trained individuals — pushing cardiac output up even further." },
          { text: "It decreases, because a faster heart rate leaves less time to fill with blood between beats", correct: false, explanation: "While filling time does shorten at very high heart rates, the net effect during normal exercise intensities is still a substantial increase in cardiac output, not a decrease — the heart rate increase dominates." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Resting cardiac output, with real numbers (baseline case)</h3>
      <div className="prose-p">
      A typical resting heart rate is about 72 beats per minute, and a typical resting stroke volume is about 70 milliliters per beat. Cardiac output = heart rate x stroke volume = 72 x 70 = <strong>5,040 milliliters per minute</strong>, or just over 5 liters per minute. Since the average adult has roughly 5 liters of total blood volume, this means essentially the entire blood supply completes one full circuit through the heart about once every minute, even at rest.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Cardiac output during intense exercise (edge case / variation)</h3>
      <div className="prose-p">
      During intense exercise, both variables in the equation move at once: heart rate can climb to 150-180 beats per minute, and stroke volume, especially in a trained athlete&apos;s heart, can also increase due to a stronger, more efficient contraction. A trained athlete&apos;s cardiac output can reach roughly 20-25 liters per minute during peak effort — four to five times the resting rate — which is exactly how the body scales up oxygen delivery to working muscles on demand. This is also why elite endurance athletes often have unusually low resting heart rates: a larger, more efficient stroke volume lets them hit normal resting cardiac output with far fewer beats per minute, leaving much more room to scale up under exertion.
      </div>

      <QuickCheck
        question="Trained endurance athletes often have resting heart rates well below the typical 60-100 bpm range, sometimes in the 40s. What's the most likely explanation?"
        options={[
          { text: "Their hearts are weaker and pump less blood per beat, so they need fewer beats to avoid overworking the heart", correct: false, explanation: "It's the opposite — a trained heart is typically stronger and has a larger stroke volume, not a weaker one. Fewer beats are needed precisely because each beat moves more blood." },
          { text: "Their hearts have a larger stroke volume from training, so fewer beats per minute are needed to achieve the same resting cardiac output", correct: true, explanation: "Correct. Since cardiac output = heart rate x stroke volume, a larger trained stroke volume means the same resting cardiac output (roughly 5 L/min) can be reached with a lower heart rate." },
          { text: "Their blood is thinner, so it moves through the circulatory system faster per beat", correct: false, explanation: "Blood viscosity isn't the driving factor here — the lower resting heart rate is explained by a stronger heart ejecting more blood per beat (higher stroke volume), not by blood thickness." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Reading a blood pressure measurement (real-world / applied case)</h3>
      <p>
      A blood pressure reading like 120/80 mmHg reports two numbers: 120 is the systolic pressure, the peak pressure in the arteries as the heart&apos;s left ventricle contracts and pushes blood out, and 80 is the diastolic pressure, the lower pressure in the arteries as the heart relaxes and refills between beats. Both numbers are shaped by cardiac output and by how much resistance the blood vessels offer to flow — stiffer or narrower arteries raise resistance and push both numbers higher. This is why blood pressure is measured as two numbers rather than one: they capture the circulatory system under two very different conditions within the same heartbeat cycle, and consistently high readings on either number are what public health agencies track as hypertension, a major modifiable risk factor for heart disease and stroke.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The double circulation loop: pulmonary and systemic circuits"
        type="flow"
        svgSrc="/diagrams/general-science-facts-blood-and-the-circulatory-system-in-depth-double-circulation.svg"
        altText="Diagram of the heart's four chambers with arrows showing oxygen-poor blood flowing from the right side of the heart to the lungs and back (the pulmonary circuit), and oxygen-rich blood flowing from the left side of the heart out to the body and back (the systemic circuit), forming two connected loops."
      />
      <p>
      Follow the blue arrows first: oxygen-poor blood enters the heart&apos;s right side, gets pumped to the lungs, picks up oxygen, and returns to the heart&apos;s left side — that&apos;s the short pulmonary loop. Then follow the red arrows: oxygen-rich blood leaves the heart&apos;s left side, travels through the entire body delivering oxygen at the capillaries, and returns as oxygen-poor blood to the right side — that&apos;s the much longer systemic loop. Both loops run continuously and simultaneously with every single heartbeat, not one after the other.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Believing deoxygenated blood is actually blue inside the body.", fix: "Blood is red at every oxygen level, just a darker red when oxygen-poor. Veins look blue through skin due to how skin and tissue absorb and scatter different light wavelengths, not because the blood itself changes color." },
          { mistake: "Thinking a higher heart rate alone always means more blood is being pumped.", fix: "Cardiac output depends on both heart rate and stroke volume together. A very fast heart rate with too little filling time between beats can actually reduce stroke volume enough to limit total output." },
          { mistake: "Assuming the two blood pressure numbers measure the same thing at different intensities.", fix: "Systolic (top number) and diastolic (bottom number) measure pressure during two distinct phases of the heartbeat — contraction and relaxation — not a simple 'stronger vs weaker' version of the same measurement." },
        ]}
      />
      <MisconceptionCallout
        myth="Blood turns blue when it runs low on oxygen, which is why veins look blue through the skin."
        reality={<p>Blood is red at every oxygen level because of hemoglobin, the iron-containing protein that gives red blood cells their color — it&apos;s simply a brighter red when oxygen-rich and a darker, more maroon red when oxygen-poor. It never turns blue inside the body. Veins appear blue (or greenish) through skin because of how skin and underlying fat absorb and scatter light: blue wavelengths penetrate and reflect back out of skin more effectively than red wavelengths do at the depth veins typically sit, creating a blue appearance even though the blood itself never changes to that color. If you&apos;ve ever seen blood drawn during a blood test, it&apos;s visibly red the entire time, regardless of which vein it came from.</p>}
      />

      <QuickCheck
        question="If deoxygenated blood is actually dark red rather than blue, why do veins appear blue through the skin?"
        options={[
          { text: "Because blue wavelengths of light penetrate and reflect back out of skin more effectively than red wavelengths at the depth veins usually sit, creating a blue appearance despite the blood being red", correct: true, explanation: "Correct. This is a light-scattering effect in skin and tissue, not a property of the blood itself — the blood underneath stays red at every oxygen level." },
          { text: "Because veins contain a different, blue-colored fluid than arteries do", correct: false, explanation: "Veins and arteries carry the same kind of blood, just at different points in the circulatory loop and different oxygen levels — there's no separate blue fluid involved." },
          { text: "Because deoxygenated hemoglobin chemically changes color to blue before blood returns to the heart", correct: false, explanation: "Hemoglobin doesn't turn blue at low oxygen levels — it becomes a darker red. The blue appearance of veins is purely a visual effect of light passing through skin, not a real color change in the blood." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Cardiac output (heart rate x stroke volume)"
        fields={[
          { key: "heartRateBpm", label: "Heart rate (beats per minute)", defaultValue: 72 },
          { key: "strokeVolumeMl", label: "Stroke volume (mL per beat)", defaultValue: 70 },
        ]}
        resultLabel="Cardiac output (mL per minute)"
        formula="cardiacOutputMlPerMin"
        formatResult="number"
      />
      <EntryCalculator
        title="Estimated age-predicted maximum heart rate (220 − age)"
        fields={[
          { key: "ageYears", label: "Age (years)", defaultValue: 30 },
        ]}
        resultLabel="Estimated maximum heart rate (bpm)"
        formula="estimatedMaxHeartRateBpm"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Take your resting pulse for 60 seconds and plug it into the cardiac output calculator above using a typical 70 mL stroke volume to see your own rough resting output.",
          "Next time you check a blood pressure reading, connect the two numbers to the heart's contraction phase (systolic, top) and relaxation phase (diastolic, bottom) rather than treating them as one combined score.",
          "Notice that visible veins on your hands or wrists still look blue or greenish, and remember that's a skin light-scattering effect, not the actual color of the blood inside.",
          "Read the related entry on Muscles, Bones & Movement to see how the circulatory system supplies working muscle with the oxygen it needs during exertion.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How much blood is in the human body?", answer: "An average adult has roughly 5 liters (about 5,000 milliliters) of blood, which is typically about 7-8% of total body weight, though exact amounts vary by body size." },
          { question: "What is a normal resting heart rate?", answer: "For most healthy adults, a normal resting heart rate falls between 60 and 100 beats per minute. Well-trained athletes often have lower resting rates, sometimes in the 40s to 50s, due to a larger stroke volume per beat." },
          { question: "Why does blood in veins look blue if blood is always red?", answer: "Blood is red at every oxygen level, just darker red when oxygen-poor. Veins appear blue through skin because blue light wavelengths scatter back out of skin more readily than red wavelengths at the depth veins sit — it's a light effect, not an actual color change in the blood." },
          { question: "What do red blood cells and white blood cells actually do?", answer: "Red blood cells carry oxygen from the lungs to body tissues using hemoglobin. White blood cells are part of the immune system, identifying and fighting off infections, viruses, and other foreign invaders." },
          { question: "What do the two numbers in a blood pressure reading mean?", answer: "The top number (systolic) measures the peak pressure in the arteries as the heart contracts and pushes blood out. The bottom number (diastolic) measures the lower pressure in the arteries as the heart relaxes between beats." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
