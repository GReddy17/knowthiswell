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
  title: "How Hydration Actually Affects Physical Performance",
  category: "health-wellness-deep-dive",
  order: 7,
  subtopic: "body-systems-deep-dive",
  tags: ["hydration", "dehydration", "exercise performance", "sweat rate", "hyponatremia", "heat"],
  date: "2026-10-07",
  updated: "2026-10-07",
  seoScore: 83, seoScoredOn: "2026-10-08",
  youtubeShort: false, youtubeLong: false,
  lastReviewed: "2026-10-07",
  excerpt: "Hydration shapes physical performance through blood volume: past about 2% fluid loss, heart rate climbs, heat builds and endurance drops, especially in heat.",
  summary: "Sweating during exercise removes water from the blood plasma. With less plasma, the heart pumps less blood per beat, heart rate rises to compensate, and less blood can be sent to the skin to release heat, so core temperature climbs faster at the same pace and effort feels harder. The American College of Sports Medicine's position stand on exercise and fluid replacement reports that body water losses above roughly 2% of body mass can degrade aerobic performance, most clearly in warm or hot conditions, while effects in cool weather are smaller; reviews find effects on strength and power are smaller and less consistent. Sweat rates vary widely, often 0.3 to 2.4 litres per hour, so weighing before and after exercise (1 kg lost is about 1 litre) is the practical way to estimate personal losses. The opposite error also matters: drinking well beyond sweat losses during long events can dilute blood sodium and cause exercise-associated hyponatremia, which is why consensus statements warn against weight gain during exercise. This article is general educational information, not medical advice.",
  sources: [
    { label: "American College of Sports Medicine — Exercise and Fluid Replacement position stand (Sawka et al., Med Sci Sports Exerc, 2007), via PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/17277604/" },
    { label: "National Athletic Trainers' Association — Position Statement: Fluid Replacement for the Physically Active (McDermott et al., J Athl Train, 2017), via PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/28985128/" },
    { label: "Statement of the Third International Exercise-Associated Hyponatremia Consensus Development Conference (Hew-Butler et al., Clin J Sport Med, 2015), via PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/26102445/" },
    { label: "Hydration and muscular performance review (Judelson et al., Sports Med, 2007), via PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/17887814/" },
    { label: "MedlinePlus (U.S. National Library of Medicine) — Dehydration", url: "https://medlineplus.gov/dehydration.html" },
  ],
  seeAlso: [
    "health-body-basics/understanding-daily-hydration-needs",
    "health-body-basics/recognizing-dehydration-and-when-its-serious",
    "health-wellness-deep-dive/what-resting-heart-rate-actually-reveals-about-fitness",
    "health-wellness-deep-dive/what-macronutrients-actually-do-in-the-body",
    "units-measurement-conversions/wind-chill-and-heat-index-explained",
  ],
  glossary: [
    { term: "Plasma volume", definition: "The liquid portion of the blood. Sweat draws water from it, which is why heavy sweating reduces how much blood the heart has to pump." },
    { term: "Sweat rate", definition: "How much fluid a person loses through sweat per hour. It varies with body size, intensity, heat, humidity, clothing and fitness, often from about 0.3 to 2.4 litres per hour." },
    { term: "Cardiovascular drift", definition: "The gradual rise in heart rate during steady exercise, at the same pace, as plasma volume falls and the body sends more blood to the skin for cooling." },
    { term: "Exercise-associated hyponatremia", definition: "An abnormally low blood sodium level during or after exercise, most often from drinking more fluid than the body loses. It can be dangerous and needs medical care." },
    { term: "Euhydration", definition: "A normal state of body water, neither meaningfully dehydrated nor overloaded with fluid." },
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
  {"question": "Per the ACSM position stand on exercise and fluid replacement, body water loss above roughly what share of body mass tends to degrade aerobic performance?", "difficulty": "easy", "options": [{"text": "About 2%", "correct": true, "explanation": "Effects are clearest above about 2%, especially in warm or hot conditions."}, {"text": "About 0.1%", "correct": false, "explanation": "Losses that small are within normal day-to-day variation."}, {"text": "About 15%", "correct": false, "explanation": "Performance suffers long before that; losses that large are a medical emergency."}]},
  {"question": "During exercise, a drop of 1 kg on the scale corresponds to roughly how much sweat lost?", "difficulty": "easy", "options": [{"text": "About 1 litre", "correct": true, "explanation": "Sweat is mostly water, and 1 litre of water weighs about 1 kg."}, {"text": "About 100 millilitres", "correct": false, "explanation": "That underestimates it tenfold."}, {"text": "About 5 litres", "correct": false, "explanation": "That overestimates it fivefold."}]},
  {"question": "Why does heart rate climb when you're dehydrated during exercise, even at the same pace?", "difficulty": "medium", "options": [{"text": "Lower plasma volume means less blood per beat, so the heart beats faster to keep blood flow up", "correct": true, "explanation": "Cardiac output is heart rate times stroke volume; when stroke volume falls, rate rises."}, {"text": "Dehydration makes muscles burn more fat", "correct": false, "explanation": "Fuel choice isn't the main driver of the heart-rate rise."}, {"text": "Thirst directly speeds up the heart", "correct": false, "explanation": "The rise comes from reduced blood volume, not the thirst sensation itself."}]},
  {"question": "Why does dehydration make it harder to stay cool during exercise?", "difficulty": "medium", "options": [{"text": "With less blood volume, less blood can be sent to the skin to release heat, and sweating can drop", "correct": true, "explanation": "The body has to split a smaller blood supply between working muscles and the skin."}, {"text": "Water in the stomach is what cools the body", "correct": false, "explanation": "Cooling happens mostly at the skin, through blood flow and sweat evaporation."}, {"text": "Dehydration has no effect on body temperature", "correct": false, "explanation": "Research summarized by ACSM shows core temperature rises faster as dehydration increases."}]},
  {"question": "In which conditions does a 2% fluid loss most clearly hurt endurance performance?", "difficulty": "medium", "options": [{"text": "Warm or hot conditions", "correct": true, "explanation": "Heat adds cardiovascular and thermal strain on top of the fluid loss."}, {"text": "Cool conditions", "correct": false, "explanation": "Effects in the cold are generally smaller and less consistent."}, {"text": "It makes no difference what the weather is", "correct": false, "explanation": "Environment is one of the biggest modifiers."}]},
  {"question": "What is exercise-associated hyponatremia most often caused by?", "difficulty": "medium", "options": [{"text": "Drinking more fluid than the body loses, diluting blood sodium", "correct": true, "explanation": "The 2015 consensus statement names overdrinking as the main cause."}, {"text": "Not drinking anything during a short workout", "correct": false, "explanation": "That points toward dehydration, not low sodium."}, {"text": "Eating too much salt before exercise", "correct": false, "explanation": "Excess salt doesn't lower blood sodium."}]},
  {"question": "A runner weighs 1 kg more after a 5-hour marathon than before it. What does that most likely signal?", "difficulty": "hard", "options": [{"text": "They drank more than they sweated, which raises hyponatremia risk", "correct": true, "explanation": "Weight gain during exercise is a red flag for overdrinking."}, {"text": "They were perfectly hydrated", "correct": false, "explanation": "Perfect balance would leave weight roughly stable or slightly down, not up."}, {"text": "They built muscle during the race", "correct": false, "explanation": "Muscle isn't built in a few hours; the gain is fluid."}]},
  {"question": "What do reviews generally find about dehydration and strength or power?", "difficulty": "hard", "options": [{"text": "Effects are smaller and less consistent than for endurance", "correct": true, "explanation": "Judelson and colleagues found modest, variable effects on strength and power."}, {"text": "Strength drops by half at 1% fluid loss", "correct": false, "explanation": "No credible evidence shows effects that large."}, {"text": "Dehydration reliably makes people stronger", "correct": false, "explanation": "There's no such benefit."}]},
  {"question": "Why do the ACSM and NATA favour individual hydration plans over one fixed amount for everyone?", "difficulty": "hard", "options": [{"text": "Sweat rates vary several-fold between people and conditions", "correct": true, "explanation": "Roughly 0.3 to 2.4 litres per hour, so one number fits almost nobody."}, {"text": "Everyone sweats exactly the same amount", "correct": false, "explanation": "Size, intensity, heat, clothing and fitness all change it."}, {"text": "Drinking amounts don't matter at all", "correct": false, "explanation": "Both too little and too much carry real risks."}]},
  {"question": "Which is a reasonable, everyday rough check of hydration status, per sports-medicine guidance?", "difficulty": "easy", "options": [{"text": "Urine colour, alongside body weight and thirst", "correct": true, "explanation": "Pale straw colour is a rough sign; no single sign is perfect."}, {"text": "How many push-ups you can do", "correct": false, "explanation": "Strength isn't a hydration measure."}, {"text": "Resting heart rate on one day alone", "correct": false, "explanation": "Many things move it; it isn't a hydration test."}]},
];

export default function Post() {
  return (
    <>
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
      <strong>This entry explains the physiology of hydration and exercise, cited to the American College of Sports Medicine, the National Athletic Trainers&apos; Association, peer-reviewed reviews and MedlinePlus. It is general education, not medical advice.</strong> Fluid needs vary with health conditions and medications. If you have heart, kidney or other medical conditions, ask your doctor about fluids and exercise. Confusion, fainting, vomiting, severe headache or collapse during or after exercise, especially in heat, is an emergency: call your local emergency number.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Sweat drains water from your blood plasma. With less blood, the heart pumps less per beat, heart rate climbs, and the body sheds heat more slowly.",
          "Per the ACSM position stand, losing more than about 2% of body mass in fluid can degrade endurance, most clearly in heat. Strength and power are affected less, and less consistently.",
          "Overdrinking is the opposite risk: gaining weight during long exercise can dilute blood sodium (hyponatremia). Weighing before and after is the simplest way to learn your own sweat rate.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of your blood as the delivery truck and the cooling system at the same time. It carries oxygen to your muscles and carries heat out to your skin. When you sweat, the water mostly comes out of your blood. Less blood means the truck is smaller, so your heart has to beat faster to deliver the same load, and there&apos;s less to spare for cooling. You get hotter sooner, and the same pace feels harder. A small loss barely matters. Once you&apos;ve lost about 2% of your body weight, around 1.4 kg for a 70 kg person, endurance usually starts to suffer, especially on a hot day. But drinking far more than you sweat isn&apos;t safe either.</div>}
        detailed={<div className="prose-p">Sweat is drawn from extracellular fluid, and a meaningful share comes from <TermLink href="/health-wellness-deep-dive/how-hydration-actually-affects-physical-performance">plasma volume</TermLink>. Lower plasma volume reduces how fully the heart fills between beats, so stroke volume falls. Because cardiac output is heart rate times stroke volume, heart rate rises to compensate, part of what&apos;s called <TermLink href="/health-wellness-deep-dive/how-hydration-actually-affects-physical-performance">cardiovascular drift</TermLink>. At the same time, the body must divide a smaller blood supply between working muscle and skin. Research summarized in the ACSM position stand (Sawka et al., 2007) shows dehydration reduces skin blood flow and sweating at a given core temperature, so heat storage increases; core temperature rises by roughly 0.1 to 0.2 °C for each 1% of body mass lost in many studies. The combined cardiovascular and thermal strain raises perceived effort and shortens time to exhaustion. The ACSM and NATA (McDermott et al., 2017) both identify losses above about 2% as the range where aerobic performance tends to decline, with larger effects in heat and smaller ones in cool weather. The edge case runs the other way: drinking well beyond sweat losses during long, slower events can lower blood sodium, producing <TermLink href="/health-wellness-deep-dive/how-hydration-actually-affects-physical-performance">exercise-associated hyponatremia</TermLink>, which the 2015 international consensus statement (Hew-Butler et al.) attributes mainly to overdrinking.</div>}
      />
      <FootnoteAside>Sweat rates vary enormously. The ACSM position stand reports typical rates from about 0.3 to 2.4 litres per hour depending on body size, intensity, heat, humidity, clothing and fitness. That&apos;s an eightfold range, which is why a single &quot;drink this much&quot; rule fits almost nobody.</FootnoteAside>

      <p>For how much water people need on an ordinary day, see <TermLink href="/health-body-basics/understanding-daily-hydration-needs">understanding daily hydration needs</TermLink>. For the warning signs that dehydration has become a medical problem, see <TermLink href="/health-body-basics/recognizing-dehydration-and-when-its-serious">recognizing dehydration and when it&apos;s serious</TermLink>.</p>

      <QuickCheck
        question="Halfway through a hot run at a steady pace, a runner's heart rate keeps creeping up even though their speed hasn't changed. What's the main physiological reason?"
        options={[
          { text: "Sweat has reduced plasma volume, so each heartbeat pumps less blood and the heart beats faster to compensate", correct: true, explanation: "Correct. Lower plasma volume lowers stroke volume, and more blood is diverted to the skin for cooling, so heart rate drifts up at the same pace." },
          { text: "The runner's muscles have suddenly become weaker", correct: false, explanation: "Muscle weakness isn't what drives a steady upward heart-rate drift at a constant pace; reduced blood volume and heat load are." },
          { text: "Heart rate always rises at a fixed rate during any run, regardless of conditions", correct: false, explanation: "The drift is much larger in heat and with greater fluid loss, which is exactly why it reflects hydration and temperature." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Measuring a sweat rate (baseline case)</h3>
      <div className="prose-p">A 70 kg runner weighs in before a one-hour run on a warm morning, drinks 0.3 litres during it, and weighs 68.8 kg afterwards. The scale shows 1.2 kg lost, which is about 1.2 litres of fluid. Add back the 0.3 litres they drank and the sweat rate is about 1.5 litres per hour. The net loss is 1.2 ÷ 70 = 1.7% of body mass, just under the roughly 2% range where the ACSM and NATA say endurance tends to suffer. On a longer or hotter run at the same sweat rate, they&apos;d cross it. This weigh-in method is the one both position statements describe for estimating individual losses.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The marathoner who drank too much (edge case)</h3>
      <div className="prose-p">A 60 kg recreational marathoner expects a five-hour finish and, worried about dehydration, drinks a full cup at every aid station. Their sweat rate at that slow pace in cool weather is modest, so intake outpaces losses. They finish 1 kg heavier than they started. That gain is the red flag the 2015 hyponatremia consensus statement describes: extra water has diluted blood sodium. Mild cases may cause bloating, nausea or headache; severe cases cause confusion, seizures or collapse and need emergency care. The lesson isn&apos;t &quot;drink less&quot; across the board. It&apos;s that slower, longer events in cool weather are where overdrinking risk is highest, and weight gain during exercise is the clearest warning sign.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Same loss, different sport and weather (applied case)</h3>
      <div className="prose-p">An 80 kg soccer player loses 2.4 kg during a 90-minute match on a hot afternoon: 2.4 ÷ 80 = 3% of body mass. That&apos;s well past the 2% range, and in heat the ACSM position stand reports the clearest drops in endurance and in the ability to repeat high-intensity running late in a game. Compare a weightlifter who loses 0.8 kg (1%) in a cool gym session. For short, maximal lifts, reviews such as Judelson and colleagues (2007) find effects on strength and power are smaller and less consistent. The same physiology applies to both, but how much it matters depends on the duration, the heat, and how far past 2% the loss goes.</div>

      <QuickCheck
        question="A 75 kg cyclist weighs 73.5 kg after a two-hour ride in which they drank nothing. Roughly what share of body mass did they lose, and is it in the range linked to reduced endurance?"
        options={[
          { text: "About 2%, which is right at the range where endurance tends to decline", correct: true, explanation: "Correct. 1.5 kg ÷ 75 kg = 2%. The ACSM and NATA identify losses above about 2% as the range where aerobic performance tends to suffer, especially in heat." },
          { text: "About 0.2%, far too small to matter", correct: false, explanation: "That misplaces the decimal: 1.5 ÷ 75 is 0.02, which is 2%, not 0.2%." },
          { text: "About 20%, a life-threatening loss", correct: false, explanation: "That overstates it tenfold. 1.5 kg of 75 kg is 2%." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How fluid loss slows you down"
        type="flow"
        svgSrc="/diagrams/health-wellness-deep-dive-how-hydration-actually-affects-physical-performance-flow.svg"
        altText="A flow diagram: sweat loss of often 0.3 to 2.4 litres per hour shrinks blood plasma volume; the heart pumps less blood per beat so heart rate climbs; less blood goes to the skin so heat escapes more slowly; core temperature rises faster; effort feels harder and endurance falls, most clearly beyond about 2% of body mass lost in heat. A side branch notes the opposite error: drinking more than you sweat dilutes blood sodium, called hyponatremia. A footer gives the rule of thumb that 1 kg lost during exercise is about 1 litre of sweat."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Following a fixed 'drink X litres per hour' rule copied from someone else.", fix: "Sweat rates vary several-fold. Weigh yourself before and after typical sessions to learn your own losses, as the ACSM and NATA suggest." },
          { mistake: "Believing more fluid is always safer.", fix: "Drinking well beyond sweat losses, especially in long, slow events, can cause hyponatremia. Finishing heavier than you started is a warning sign." },
          { mistake: "Starting hard exercise already dehydrated, then trying to catch up mid-session.", fix: "Start sessions normally hydrated. It's much harder to reverse a deficit during exercise, when the gut absorbs fluid more slowly." },
          { mistake: "Assuming the same fluid loss matters equally in every sport and climate.", fix: "Endurance in heat is the most sensitive case. Short strength sessions in cool conditions are much less affected." },
        ]}
      />
      <MisconceptionCallout
        myth="If you're thirsty, it's already too late, and any amount of dehydration ruins performance."
        reality={<p>Small losses are normal and mostly harmless. The ACSM position stand ties clear declines in aerobic performance to losses above about 2% of body mass, most strongly in heat, and reviews find strength and power are affected less consistently. Thirst is an imperfect signal, but the 2015 hyponatremia consensus statement notes that drinking to thirst protects many people in long events from the more dangerous error of overdrinking. The useful question isn&apos;t &quot;am I slightly dehydrated?&quot; but &quot;how much do I usually lose, and in what conditions?&quot;</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Weigh yourself (minimal clothing, after using the toilet) before and after a typical session, and add back what you drank to estimate your hourly sweat rate.",
          "Repeat the check in hot and cool weather. Your numbers will differ, and the hot-weather number is the one that matters most.",
          "Treat finishing a long session heavier than you started as a sign you drank more than you needed.",
          "Use urine colour, thirst and body weight together as rough checks; no single sign is perfect.",
          "If you have a medical condition or take medications that affect fluid or sodium balance, ask your doctor before changing how much you drink. This article isn't medical advice.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How much does dehydration affect athletic performance?", answer: "Per the ACSM position stand, losing more than about 2% of body mass in fluid can reduce aerobic performance, with the clearest effects in warm or hot weather. Smaller losses usually matter little, and strength and power are affected less consistently." },
          { question: "How do I calculate my sweat rate?", answer: "Weigh yourself before and after exercise, then add the fluid you drank. Each kilogram lost is about one litre. Divide by the hours exercised to get litres per hour." },
          { question: "Can you drink too much water during exercise?", answer: "Yes. Drinking well beyond sweat losses, especially during long, slower events, can dilute blood sodium and cause exercise-associated hyponatremia, which can be dangerous. Gaining weight during exercise is a warning sign." },
          { question: "Why does my heart rate go up when I'm dehydrated?", answer: "Sweat lowers blood plasma volume, so the heart pumps less blood per beat. To keep blood flow up, it beats faster, and more blood is diverted to the skin for cooling." },
          { question: "Do I need sports drinks or is water enough?", answer: "For most shorter sessions, water is generally enough. Sports-medicine statements note that longer or very sweaty sessions lose meaningful sodium too, which is where drinks or foods with electrolytes may help. Needs vary, so a sports-medicine professional or your doctor can advise you individually." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
