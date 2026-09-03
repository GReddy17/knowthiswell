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
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "What Actually Happens When You Overload a Circuit",
  category: "home-diy-knowledge",
  order: 10,
  subtopic: "electrical-basics-and-safety",
  tags: ["circuit overload", "overloaded circuit", "continuous load", "wire heating", "home electrical safety"],
  date: "2026-09-03",
  updated: "2026-09-03",
  lastReviewed: "2026-09-03",
  excerpt: "Overloading a circuit forces more current through the wire than it's rated for, and the resulting heat rises with the square of the current, not in a straight line with it.",
  summary: "Overloading a circuit means drawing more current through it than the wire is rated to carry, and because a wire's resistive heating scales with the square of the current rather than in a straight line, even a moderate overload can generate disproportionately more heat than the numbers alone might suggest.",
  sources: [
    { label: "NFPA — National Fire Protection Association", url: "https://www.nfpa.org" },
    { label: "ESFI — Electrical Safety Foundation International", url: "https://www.esfi.org" },
    { label: "CPSC — U.S. Consumer Product Safety Commission", url: "https://www.cpsc.gov" },
  ],
  seeAlso: [
    "home-diy-knowledge/how-a-circuit-breaker-actually-protects-your-home",
    "home-diy-knowledge/what-amps-volts-and-watts-actually-measure",
    "home-diy-knowledge/why-gfci-outlets-exist",
  ],
  glossary: [
    { term: "Ampacity", definition: "The maximum current a specific wire gauge can safely carry on a continuous basis without overheating." },
    { term: "Continuous load", definition: "A load expected to run at or near its full draw for three hours or more, which is treated more conservatively than a brief, intermittent load." },
    { term: "Resistive (I²R) heating", definition: "The heat generated in a wire as current flows through its resistance, which rises with the square of the current — doubling the current roughly quadruples the heat generated." },
    { term: "Trip curve", definition: "The relationship between how much current is flowing and how long a breaker takes to trip — a small overload can take minutes, while a large surge trips in a fraction of a second." },
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
          "Overloading a circuit means drawing more current than the wire's rated ampacity, and the resulting heat rises with the square of the current — not in a straight line — so a moderate-looking overload generates disproportionately more heat.",
          "A breaker not tripping isn't the same as a circuit running with no downside — a circuit can sit near its rated capacity for long stretches, staying warmer than an ordinary load, without reaching the threshold that trips the breaker.",
          "The commonly cited 80% continuous-load guideline exists because sustained near-capacity loads are treated more conservatively than brief, occasional ones.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Overloading a circuit means pulling more current through its wire than that wire is designed to carry safely. The wire doesn&apos;t just carry a little extra electricity without consequence — the extra current makes the wire itself heat up, because any wire has some resistance, and resistance turns flowing current into heat. Push enough current through for long enough, and that heat can degrade the wire&apos;s insulation, which is exactly the outcome a circuit breaker is designed to prevent by cutting the current off first.</div>}
        detailed={<div className="prose-p">The physical mechanism is <TermLink href="/home-diy-knowledge/what-actually-happens-when-you-overload-a-circuit">resistive (I&#178;R) heating</TermLink>: the heat generated in a wire equals the current squared, multiplied by the wire&apos;s resistance. Because current is squared in that relationship, heat doesn&apos;t rise in a straight line with current — doubling the current roughly quadruples the heat generated in the wire, for a given length and gauge. This is why a wire&apos;s safe carrying capacity, its <TermLink href="/home-diy-knowledge/what-actually-happens-when-you-overload-a-circuit">ampacity</TermLink>, is set with real headroom rather than at the exact point where damage begins — and why a breaker&apos;s <TermLink href="/home-diy-knowledge/what-actually-happens-when-you-overload-a-circuit">trip curve</TermLink> is deliberately time-dependent rather than an instant on/off switch at one current value: a small overload is allowed to persist briefly (since the resulting heat builds slowly), while a very large overload trips almost immediately (since I&#178;R heating at that level would otherwise build dangerously fast). A related and separate concept in circuit planning is the <TermLink href="/home-diy-knowledge/what-actually-happens-when-you-overload-a-circuit">continuous load</TermLink> — a load expected to run at or near full draw for three hours or more, such as lighting left on for an evening or an electric heater running continuously. Continuous loads are conventionally planned for at only 80% of a breaker&apos;s rating, not the full rating, precisely because sustained near-capacity heating behaves differently from a brief, intermittent spike that has time to cool between uses.</div>}
      />
      <FootnoteAside>The 80% continuous-load figure is a common practice built into electrical planning conventions rather than a fixed law of physics — the underlying reason for the margin, sustained near-capacity heating, is the physical constant; the specific percentage is a widely used engineering safety convention.</FootnoteAside>

      <p>
        Once the current-squared relationship is visible, a lot of overload behavior makes more sense: why a circuit can seem &quot;fine&quot; for a while under a heavy load, and why the margin engineers build in isn&apos;t just conservative padding.
      </p>

      <QuickCheck
        question="If the current through a wire doubles, roughly what happens to the heat generated in that wire?"
        options={[
          { text: "It roughly doubles as well, since heat and current rise together in a straight line", correct: false, explanation: "Resistive heating in a wire scales with current squared, not current alone, so the relationship isn't a straight line." },
          { text: "It roughly quadruples, because resistive heating scales with the square of the current, not the current itself", correct: true, explanation: "Correct. Since heat = current² × resistance, doubling the current roughly quadruples the heat generated for a given wire." },
          { text: "It stays about the same, since a wire's resistance adjusts automatically to compensate for changes in current", correct: false, explanation: "A wire's resistance for a given gauge and length is essentially fixed — it doesn't adjust to compensate, which is exactly why more current directly means more heat." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Several space heaters push a circuit past its rating (baseline case)</h3>
      <p>
        Two portable space heaters, each drawing about 12.5 amps, are plugged into outlets on the same 15-amp, 120-volt circuit and run at the same time. The combined draw of roughly 25 amps is well above the circuit&apos;s 15-amp rating. The wire heats up faster than it would under a normal load, and within a couple of minutes the breaker&apos;s thermal trip mechanism responds to the sustained overcurrent and cuts the circuit off — the overload never gets the chance to persist long enough to seriously damage the wire&apos;s insulation.
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A circuit running just under its rating for hours at a time (edge case / variation)</h3>
      <div className="prose-p">
        A home office runs several devices continuously — a space heater, a desktop computer, and a monitor — on a 20-amp, 120-volt circuit, drawing a steady 19 amps for hours on end. That&apos;s technically under the breaker&apos;s 20-amp rating, so it never trips. But because this is a <TermLink href="/home-diy-knowledge/what-actually-happens-when-you-overload-a-circuit">continuous load</TermLink> running for hours rather than a brief spike, it sits well above the commonly used 80% continuous-load guideline (16 amps for a 20-amp breaker), meaning the wire runs warmer for a sustained period than that guideline is built to avoid — without ever tripping anything or giving an obvious warning sign.
      </div>
      <QuickCheck
        question="A circuit draws current steadily just under its breaker's rating for several hours without tripping. What does this scenario illustrate?"
        options={[
          { text: "That the circuit is being used exactly as intended, since a breaker not tripping always means a load is entirely within a safe operating margin", correct: false, explanation: "A breaker's rating is the trip threshold, not the recommended safe operating point for a sustained load — running steadily near that threshold for hours is treated more conservatively than a brief load of the same amperage." },
          { text: "That a breaker not tripping doesn't guarantee a circuit is running within the more conservative margin recommended for a sustained, continuous load", correct: true, explanation: "Correct. This is exactly the gap the continuous-load guideline addresses — a load can stay under the trip threshold for hours while still running hotter than a brief load at the same current would." },
          { text: "That the breaker is defective for not tripping under such a heavy, sustained load", correct: false, explanation: "A breaker not tripping when current stays below its rated threshold is normal, expected behavior — it isn't a sign of malfunction." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Sizing safe continuous wattage for a home workshop circuit (real-world / applied case)</h3>
      <p>
        Someone planning equipment for a home workshop wired with a 20-amp, 120-volt circuit wants to know how much continuous wattage it can safely support if the equipment will run for hours at a stretch. Applying the commonly used 80% continuous-load margin: 20 amps &#215; 120 volts &#215; 0.8 = 1,920 watts. That number, not the circuit&apos;s full 2,400-watt theoretical capacity (20 &#215; 120), is the more conservative planning figure appropriate for equipment expected to run continuously — leaving headroom for the sustained heating a continuous load produces, rather than assuming the breaker&apos;s full rating is the safe operating target.
      </p>
      <QuickCheck
        question="Why would someone planning continuous equipment loads for a 20-amp, 120-volt circuit use 1,920 watts as a planning figure instead of the circuit's full 2,400-watt theoretical capacity?"
        options={[
          { text: "Because 120-volt circuits are only rated for 80% of their labeled voltage under any condition", correct: false, explanation: "The 80% figure applies to the continuous-load current margin, not to a reduction in the circuit's voltage — the circuit still supplies its full rated voltage." },
          { text: "Because the commonly used continuous-load guideline reserves headroom below the breaker's full rating for loads that run at or near full draw for hours at a time", correct: true, explanation: "Correct. The 80% continuous-load margin is a conservative planning convention specifically for sustained loads, distinct from the breaker's absolute trip threshold." },
          { text: "Because a circuit's actual wattage capacity is always 20% lower than what its amperage and voltage rating would suggest, due to normal wire resistance", correct: false, explanation: "This isn't a fixed physical loss in the wire — it's a planning margin applied deliberately for continuous loads, not an inherent reduction in every circuit's real capacity." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Heat in a wire rises with the square of the current"
        type="comparison"
        svgSrc="/diagrams/home-diy-knowledge-what-actually-happens-when-you-overload-a-circuit-comparison.svg"
        altText="A comparison diagram of a wire carrying a normal load, a wire carrying a continuous load near the breaker's rating, and a wire carrying an overload beyond the breaker's rating, showing that heat generated in the wire rises sharply with current because resistive heating scales with current squared, not current alone."
      />
      <p>
        The jump in heat between the middle and right panels is bigger than the jump in current alone would suggest — that gap is the I&#178;R relationship showing up directly.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming heat in an overloaded wire rises in direct proportion to the extra current, rather than much faster.", fix: "Remember that resistive heating scales with current squared — even a moderate overload can generate disproportionately more heat than the current figure alone suggests." },
          { mistake: "Treating a breaker that hasn't tripped as proof a sustained, near-capacity load is running safely.", fix: "Apply the more conservative continuous-load guideline (commonly 80% of the breaker's rating) for anything expected to run at or near full draw for hours at a time, rather than planning up to the breaker's full trip threshold." },
          { mistake: "Adding up appliances by how many outlets they use rather than by their actual combined current draw.", fix: "Calculate the combined amperage of everything running on a circuit at once, and compare that total against the circuit's rated ampacity, not against the number of outlets available." },
        ]}
      />
      <MisconceptionCallout
        myth="As long as the breaker hasn't tripped, the circuit is running at a safe level."
        reality={<p>A breaker&apos;s trip threshold is calibrated to prevent the wire from reaching a genuinely damaging temperature — it isn&apos;t calibrated to flag every load that runs hotter than ideal. A circuit can sit for hours at current just under the breaker&apos;s rating, especially with a continuous load, without ever tripping, while still running measurably warmer than a brief, moderate load at the same current would. That gap is exactly why continuous loads are conventionally planned for at a lower percentage of the breaker&apos;s rating — the absence of a trip is not the same as confirmation that a sustained load is running with a comfortable safety margin.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Calculate a safe continuous-load wattage"
        description="Enter a breaker's amperage rating and the circuit's voltage to see a conservative continuous-load wattage figure, using the commonly cited 80% safety margin. This is a general planning estimate, not a substitute for a licensed electrician's assessment of a specific circuit."
        fields={[
          { key: "breakerAmps", label: "Breaker rating (amps)", defaultValue: 20 },
          { key: "voltage", label: "Circuit voltage (V)", defaultValue: 120 },
        ]}
        resultLabel="Conservative continuous-load wattage"
        formula="maxSafeContinuousWatts"
        formatResult="number"
        disclaimer="This applies the commonly cited 80% continuous-load margin as a general planning convention, not a specific code requirement for any particular circuit — actual safe capacity depends on the wiring, breaker, and installation, which a licensed electrician can assess directly."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Add up the actual amperage draw of everything likely to run on a circuit at once, rather than assuming a circuit is fine simply because the breaker hasn't tripped yet.",
          "Apply extra caution — and a lower planning margin, like the commonly cited 80% figure — for any load expected to run continuously for three hours or more.",
          "Spread heavy, simultaneous loads like space heaters or workshop equipment across more than one circuit where possible.",
          "Have a licensed electrician evaluate a circuit that runs warm, trips repeatedly, or needs to support a heavier continuous load than it currently handles.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What happens when you overload a circuit?", answer: "More current flows through the wire than it's rated to carry, generating extra heat through resistive (I²R) heating. A properly functioning breaker is designed to trip and cut the current before that heat can seriously damage the wire's insulation." },
          { question: "Why does a small overload sometimes take longer to trip a breaker than a big one?", answer: "Breakers use a time-current trip curve: a modest overload heats a breaker's internal thermal sensor gradually, taking anywhere from seconds to a couple of minutes, while a very large surge like a short circuit triggers a separate, near-instant magnetic trip mechanism." },
          { question: "How many watts can a 15-amp circuit handle?", answer: "At 120 volts, a 15-amp circuit's theoretical capacity is 1,800 watts (15 × 120), but the commonly cited conservative planning figure for a continuous load is about 80% of that, or roughly 1,440 watts, leaving headroom for sustained heating." },
          { question: "Is it bad to run a circuit close to its breaker rating for a long time?", answer: "A breaker won't necessarily trip, but sustained near-capacity current generates more heat over time than a brief load at the same amperage — which is why continuous loads are conventionally planned for at a lower percentage of the breaker's full rating, commonly around 80%." },
          { question: "Does doubling the current through a wire double the heat it generates?", answer: "No — resistive heating in a wire scales with the current squared, so doubling the current roughly quadruples the heat generated, not just doubles it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
