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
  title: "Human Body Systems: How the Body's Major Systems Work Together",
  category: "general-science-facts",
  order: 20,
  subtopic: "biology-and-human-body",
  tags: [
    "human body systems",
    "organ systems",
    "circulatory system",
    "nervous system",
    "respiratory system",
    "homeostasis",
    "biology basics",
  ],
  date: "2026-08-16",
  updated: "2026-08-19",
  lastReviewed: "2026-08-19",
  excerpt: "How the body's roughly 11 major organ systems — circulatory, respiratory, nervous, and more — divide labor and depend on each other to keep you alive.",
  summary: "The human body is organized into about 11 major organ systems, each handling a distinct job, that constantly exchange oxygen, nutrients, and signals to keep the whole body functioning.",
  sources: [
    { label: "NIH MedlinePlus — Anatomy", url: "https://medlineplus.gov/anatomy.html" },
    { label: "CDC — Target Heart Rate and Estimated Maximum Heart Rate", url: "https://www.cdc.gov/physical-activity-basics/target-heart-rate/index.html" },
    { label: "Encyclopaedia Britannica — Human Body", url: "https://www.britannica.com/science/human-body" },
    { label: "NIH National Heart, Lung, and Blood Institute — How the Heart Works", url: "https://www.nhlbi.nih.gov/health/heart" },
    { label: "NIH National Institute of Diabetes and Digestive and Kidney Diseases — Your Digestive System", url: "https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works" },
    { label: "NIH National Institute of Diabetes and Digestive and Kidney Diseases — The Kidneys and How They Work", url: "https://www.niddk.nih.gov/health-information/kidney-disease/kidneys-how-they-work" },
  ],
  seeAlso: [
    "general-science-facts/cells-and-genetics-basics",
    "general-science-facts/sleep-and-the-brain",
    "general-science-facts/diseases-immunity-and-how-the-body-fights-illness",
    "general-science-facts/energy-types-and-conservation",
  ],
  glossary: [
    { term: "Organ system", definition: "A group of organs that work together to perform a broad function, such as the circulatory system moving blood throughout the body." },
    { term: "Homeostasis", definition: "The body's tendency to keep internal conditions — temperature, blood sugar, pH, and more — stable within a narrow working range." },
    { term: "Negative feedback loop", definition: "A control mechanism where a change triggers a response that pushes the condition back toward its normal set point, the way a thermostat reacts to temperature." },
    { term: "Circulatory system", definition: "The heart, blood vessels, and blood that transport oxygen, nutrients, hormones, and waste throughout the body." },
    { term: "Target heart rate", definition: "A recommended heart-rate range during exercise, usually estimated as a percentage of an age-based maximum heart rate." },
    { term: "Hormone", definition: "A chemical messenger released by an endocrine gland directly into the bloodstream, which travels to distant target cells and changes how they behave." },
    { term: "Nephron", definition: "The microscopic filtering unit inside a kidney — about a million per kidney — that removes waste and excess fluid from blood to form urine." },
    { term: "Lymph node", definition: "A small, bean-shaped structure in the lymphatic system that filters lymph fluid and traps pathogens for white blood cells to attack." },
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
          "The body isn't one machine but roughly 11 organ systems — circulatory, respiratory, nervous, digestive, skeletal, muscular, endocrine, immune/lymphatic, urinary, reproductive, and integumentary (skin) — each handling a distinct job.",
          "No system works in isolation: the circulatory system can't deliver oxygen without the respiratory system supplying it, and the muscular system can't move without signals from the nervous system and fuel from the digestive system.",
          "Heart rate is a measurable window into how hard the circulatory and muscular systems are working together, and it can be estimated with a simple age-based formula used by exercise physiologists and clinicians.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">An <TermLink href="/general-science-facts/human-body-systems">organ system</TermLink> is a group of organs that work together on one broad job. The circulatory system (heart, blood, blood vessels) moves things around the body. The respiratory system (lungs, airways) brings in oxygen and removes carbon dioxide. The nervous system (brain, spinal cord, nerves) sends and receives signals. The digestive system breaks food down into usable pieces. Add the skeletal, muscular, endocrine, immune, urinary, reproductive, and integumentary (skin) systems, and you have the roughly 11 major systems that, together, make up a functioning human body. None of them could keep you alive on its own.</div>}
        detailed={<div className="prose-p">The systems stay coordinated through <TermLink href="/general-science-facts/human-body-systems">homeostasis</TermLink> — the body&apos;s constant effort to hold internal conditions like temperature, blood sugar, and blood pH inside a narrow working range, even as the outside world changes. Homeostasis is maintained mostly through <TermLink href="/general-science-facts/human-body-systems">negative feedback loops</TermLink>: a sensor detects a change (say, core temperature rising), a control center (often in the brain) compares it to a set point, and an effector responds to push the value back toward normal (sweating and blood vessel dilation to release heat). The same loop structure regulates blood glucose (insulin and glucagon from the endocrine system), blood pressure, and blood oxygen levels. Because these loops constantly borrow from multiple systems at once — a temperature response alone involves the nervous system (sensing and signaling), circulatory system (redirecting blood flow), and integumentary system (sweat glands) — organ systems are better understood as one interlocking network than as separate departments.</div>}
      />
      <FootnoteAside>An average adult heart beats roughly 60-100 times per minute at rest, which adds up to about 100,000 beats a day and, over an average lifetime, well over 2.5 billion beats — all without the muscle ever being consciously commanded, since heart muscle generates its own electrical signal.</FootnoteAside>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">The 11 systems, one by one</h3>
      <div className="prose-p">
      <strong>Skeletal system</strong> — an adult has 206 bones, forming a rigid framework that supports the body&apos;s weight, protects vital organs (the skull around the brain, the ribcage around the heart and lungs), and does two jobs most people don&apos;t associate with bone at all: it stores about 99% of the body&apos;s calcium as a mineral reserve, and the soft marrow inside certain bones manufactures red blood cells, white blood cells, and platelets. <strong>Muscular system</strong> — roughly 600 skeletal muscles move the body by contracting: microscopic protein filaments (actin and myosin) inside each muscle fiber slide past each other and shorten the fiber, pulling on tendons that are anchored to bone. Skeletal muscle is voluntary; smooth muscle (lining the gut and blood vessels) and cardiac muscle (the heart) work involuntarily, without conscious control.
      </div>
      <div className="prose-p">
      <strong>Digestive system</strong> — food is broken down in stages: chewing and saliva start mechanical and chemical breakdown in the mouth, the stomach&apos;s acid and enzymes liquefy it further, and the small intestine (about 6 meters long) does most nutrient absorption into the bloodstream, aided by enzymes from the pancreas and bile from the liver and gallbladder. The large intestine absorbs remaining water and compacts waste. <strong>Endocrine system</strong> — glands including the pituitary, thyroid, adrenal glands, and pancreas release <TermLink href="/general-science-facts/human-body-systems">hormones</TermLink> straight into the bloodstream as chemical instructions: the thyroid&apos;s hormones set the body&apos;s baseline metabolic rate, the adrenal glands release adrenaline and cortisol during a stress response, and the pancreas releases insulin and glucagon to keep blood sugar within range — the same negative-feedback pattern described above, running on a different signal (hormones instead of nerve impulses).
      </div>
      <div className="prose-p">
      <strong>Immune and lymphatic system</strong> — white blood cells patrol the bloodstream and tissues, identifying and destroying pathogens, while a separate network of lymphatic vessels drains excess fluid from tissues and routes it through <TermLink href="/general-science-facts/human-body-systems">lymph nodes</TermLink>, where white blood cells concentrate to filter out and attack anything foreign before the fluid rejoins the bloodstream — the swollen &quot;glands&quot; people feel in their neck during an infection are lymph nodes working overtime. <strong>Urinary system</strong> — the two kidneys filter the body&apos;s entire blood supply roughly 40 times a day through microscopic units called <TermLink href="/general-science-facts/human-body-systems">nephrons</TermLink>, pulling out waste products like urea and rebalancing water and salt levels; the filtered waste leaves as urine, carried by the ureters to the bladder for storage and eventual release.
      </div>
      <div className="prose-p">
      <strong>Reproductive system</strong> — produces the reproductive cells (sperm or eggs) and, in the female body, supports gestation; its organs are also a source of several of the body&apos;s sex hormones, tying it into the endocrine system&apos;s signaling network. <strong>Integumentary system</strong> — the skin, hair, and nails, and technically the body&apos;s largest organ by surface area, forms a physical barrier against pathogens and injury, helps regulate temperature (via sweat glands and blood vessel dilation, as in the fever example below), synthesizes vitamin D on sun exposure, and carries the touch, pressure, and temperature receptors that feed the nervous system. Between them, these 11 systems cover every major function the body performs — no system&apos;s job overlaps completely with another&apos;s, which is exactly why losing even one (kidney failure, for example) can&apos;t simply be compensated for by the others.
      </div>

      <p>
      Naming what each system does is one thing; watching them actually depend on each other in real time is where the concept becomes concrete — and heart rate is one of the easiest places to observe that dependency directly.
      </p>

      <QuickCheck
        question="During a run, your digestive system, respiratory system, and circulatory system are all working harder at once. What does this best illustrate?"
        options={[
          { text: "Organ systems generally operate independently of one another", correct: false, explanation: "The opposite is true here — running demands coordinated effort from multiple systems simultaneously, which is a clear example of interdependence, not independence." },
          { text: "Organ systems constantly depend on and support each other to meet the body's changing demands", correct: true, explanation: "Correct. During exercise, the respiratory system supplies more oxygen, the circulatory system delivers it faster, and the muscular and nervous systems coordinate movement — none of this happens with only one system involved." },
          { text: "Only the muscular system is actually active during exercise; the others just continue their normal baseline function", correct: false, explanation: "Respiratory and circulatory activity measurably increase during exercise (faster breathing, higher heart rate) — they aren't running at a flat baseline while only muscles work harder." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Estimating a 40-year-old&apos;s target heart rate zone (baseline case)</h3>
      <div className="prose-p">
      A widely used estimate for maximum heart rate is 220 minus age. For a 40-year-old: 220 − 40 = <strong>180 beats per minute (bpm)</strong> estimated maximum. The CDC-recommended target zone for moderate-to-vigorous exercise is roughly 50-85% of that maximum, which works out to about 90-153 bpm. Someone exercising well under 90 bpm is likely working at a light intensity; someone consistently above 153 bpm is pushing into a more vigorous zone. This formula is a population-level estimate, not a lab measurement — it&apos;s useful as a starting reference point, not a precise individual ceiling.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why the 220-minus-age formula breaks down for some people (edge case / variation)</h3>
      <div className="prose-p">
      The 220-minus-age estimate is a population average with real individual variance — actual maximum heart rate for people of the same age can differ by 10-20 bpm or more. It also doesn&apos;t account for medications: beta-blockers, commonly prescribed for high blood pressure or heart conditions, deliberately blunt how high heart rate can climb, so someone on that medication will show a lower measured maximum than the formula predicts, without that meaning anything is wrong. Highly trained endurance athletes, meanwhile, often have a lower <em>resting</em> heart rate (sometimes below 50 bpm) because a stronger heart muscle pumps more blood per beat — a different circulatory adaptation than maximum heart rate itself. This is why clinicians treat the formula as a general guide and use direct measurement (like a supervised stress test) when precision actually matters.
      </div>

      <QuickCheck
        question="A patient taking a beta-blocker medication has a measured maximum heart rate noticeably lower than the 220-minus-age estimate predicts. What's the most likely explanation?"
        options={[
          { text: "The formula is simply wrong and should never be used", correct: false, explanation: "The formula remains a reasonable population-level estimate for most healthy adults — this case is a known, specific exception, not proof the formula is generally invalid." },
          { text: "Beta-blocker medication deliberately blunts how high heart rate can rise, so a lower measured maximum is expected and not a cause for alarm on its own", correct: true, explanation: "Correct. Beta-blockers are prescribed specifically to reduce heart rate and workload on the heart — a lower-than-predicted maximum in this case reflects the medication working as intended, not a new problem." },
          { text: "The patient's circulatory system has stopped functioning correctly", correct: false, explanation: "A lower measured maximum heart rate while on a rate-limiting medication is an expected, explainable effect of the drug, not evidence the circulatory system itself is malfunctioning." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How multiple systems coordinate during a fever (real-world / applied case)</h3>
      <p>
      When an infection is detected, the immune system releases signaling molecules that travel to the hypothalamus — part of the brain&apos;s nervous system — and reset the body&apos;s temperature set point upward, from the usual ~37°C to something higher. The nervous system then triggers responses to reach that new set point: shivering (muscular system generating heat) and reduced blood flow to the skin (circulatory system conserving heat), which is why a person with a rising fever often feels cold and shivers even as their actual temperature climbs. The higher temperature itself makes conditions less favorable for many pathogens to reproduce, while faster circulation helps deliver immune cells where they&apos;re needed. A fever is a coordinated, deliberate response involving at least four systems working together — not a system failure.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How major organ systems interact during physical exertion"
        type="detail"
        svgSrc="/diagrams/general-science-facts-human-body-systems-overview.svg"
        altText="A diagram showing the nervous, respiratory, circulatory, muscular, and digestive systems arranged around a central figure with arrows showing signal and resource flow between them during exercise: nervous system sending motor signals to muscles, respiratory system supplying oxygen to blood, circulatory system distributing oxygen and nutrients, digestive system supplying fuel, and muscular system generating movement and heat."
      />
      <p>
      Follow the arrows and notice that no system is a dead end — each one both sends something out and receives something back from at least one other system. The respiratory system feeds oxygen into the circulatory system, which distributes it to working muscles; the muscular system, in turn, generates heat and waste products (like carbon dioxide) that flow back through the circulatory system to the respiratory system and skin to be released. This closed-loop pattern, not a one-way chain of command, is the general model for how organ systems relate to each other throughout the body.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking of each organ system as working in isolation, like separate departments with no communication.", fix: "Picture them as one interlocking network instead — nearly every major body function (movement, digestion, temperature regulation) draws on multiple systems working together in real time." },
          { mistake: "Confusing an 'organ' with an 'organ system.'", fix: "An organ (like the stomach) is a single structure; an organ system (like the digestive system) is the full group of organs — stomach, intestines, liver, pancreas, and more — that work together on that broader job." },
          { mistake: "Treating the 220-minus-age maximum heart rate formula as an exact, individualized ceiling.", fix: "Use it as a starting estimate only — real maximum heart rate varies by 10-20 bpm or more between individuals of the same age, and factors like medication change it further." },
        ]}
      />
      <MisconceptionCallout
        myth="Cracking your knuckles causes arthritis."
        reality={<p>The popping sound from cracking a knuckle comes from gas bubbles forming or collapsing in the fluid that lubricates the joint (synovial fluid) — a mechanical event, not joint damage. Multiple studies, including a well-known long-term self-experiment by physician Donald Unger (who cracked the knuckles on only one hand for over 60 years and compared both hands), found no meaningful difference in arthritis rates between habitual knuckle-crackers and non-crackers. Chronic joint pain and reduced grip strength have occasionally been associated with very forceful, repeated cracking in some studies, but the specific claim that cracking knuckles causes arthritis is not supported by the evidence.</p>}
      />

      <QuickCheck
        question="What actually causes the popping sound when someone cracks their knuckles?"
        options={[
          { text: "Bone surfaces grinding directly against each other inside the joint", correct: false, explanation: "The joint surfaces themselves aren't what's producing the sound — the popping is linked to the fluid inside the joint, not bone-on-bone contact." },
          { text: "Gas bubbles forming or collapsing in the synovial fluid that lubricates the joint", correct: true, explanation: "Correct. Stretching the joint changes pressure inside the joint capsule, causing gas bubbles in the synovial fluid to form or collapse — this is the mechanical source of the cracking sound." },
          { text: "Small cartilage fractures occurring with each crack", correct: false, explanation: "There's no evidence of cartilage fracturing with routine knuckle cracking — the sound has a well-documented, non-damaging mechanical explanation involving joint fluid." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate your maximum heart rate (220 − age)"
        fields={[
          { key: "ageYears", label: "Age (years)", defaultValue: 30 },
        ]}
        resultLabel="Estimated maximum heart rate (bpm)"
        formula="estimatedMaxHeartRateBpm"
        formatResult="number"
      />
      <EntryCalculator
        title="Estimate your target heart rate at a given exercise intensity"
        fields={[
          { key: "ageYears", label: "Age (years)", defaultValue: 30 },
          { key: "intensityPercent", label: "Target intensity (% of max)", defaultValue: 70 },
        ]}
        resultLabel="Estimated target heart rate (bpm)"
        formula="targetHeartRateAtIntensity"
        formatResult="number"
      />
      <p>
      These are general population estimates, not medical measurements — check with a healthcare provider before starting a new exercise program, especially if you have an existing heart condition or take medication that affects heart rate.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Use the calculator above to find your estimated target heart rate zone, then check it against how you actually feel during light versus vigorous activity.",
          "Next time you have a cold or mild fever, notice the shivering-then-sweating pattern and connect it to the nervous system resetting your temperature set point, not a malfunction.",
          "List the last three times you exercised, ate, or got sick, and identify at least two organ systems that had to cooperate each time.",
          "Read the related entry on Diseases, Immunity & How the Body Fights Illness to see how the immune system fits into this same interconnected picture.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How many organ systems does the human body have?", answer: "Most references count about 11 major organ systems: circulatory, respiratory, nervous, digestive, skeletal, muscular, endocrine, immune/lymphatic, urinary, reproductive, and integumentary (skin). Some textbooks group a few of these differently, which is why counts of 10-12 are all common." },
          { question: "What is homeostasis in the human body?", answer: "Homeostasis is the body's tendency to keep internal conditions — temperature, blood sugar, blood pH, and more — stable within a narrow working range, mainly through negative feedback loops that detect a change and trigger a response to correct it." },
          { question: "How do you calculate target heart rate?", answer: "A common method estimates maximum heart rate as 220 minus your age, then takes 50-85% of that number as the target zone for moderate-to-vigorous exercise, per CDC guidance. It's a general estimate, not an individualized medical measurement." },
          { question: "Which organ system controls the others?", answer: "No single system is fully 'in charge' — the nervous and endocrine systems coordinate the most cross-system signaling (nerve signals and hormones), but they depend on the circulatory, respiratory, and other systems to function, making it a network rather than a strict hierarchy." },
          { question: "Does cracking your knuckles cause arthritis?", answer: "No. Studies, including long-term comparisons of habitual knuckle-crackers versus non-crackers, have found no meaningful link between knuckle cracking and arthritis. The sound comes from gas bubbles in the joint's lubricating fluid, not joint damage." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
