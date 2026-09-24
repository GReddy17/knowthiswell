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
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Why a Bird Can Safely Sit on a Live Power Line",
  category: "general-science-facts",
  order: 59,
  subtopic: "physical-science",
  pillar: true,
  tags: ["electricity", "voltage", "electric shock safety", "power lines", "physics misconceptions"],
  date: "2026-09-19",
  updated: "2026-09-24",
  lastReviewed: "2026-09-19",
  excerpt: "A bird on a power line isn't protected by insulated feet — it's safe because both of its feet touch the same wire, so there's no voltage difference across its body for current to flow through.",
  summary: "Electric current only flows when there's a voltage difference between two points that a conductive path connects — a bird standing with both feet on the same wire has essentially zero voltage difference across its body, so almost no current flows through it, regardless of how high the wire's voltage is relative to the ground. The danger appears the moment a second contact point at a different voltage is introduced, such as a grounded pole, a transformer, or a second wire — which is exactly why linework safety training focuses on avoiding two-point contact, not on insulation.",
  sources: [
    { label: "Occupational Safety and Health Administration (OSHA) — Electrical Safety and Power Line Hazards", url: "https://www.osha.gov/" },
    { label: "National Institute for Occupational Safety and Health (NIOSH) — Electrical Safety for Utility Workers", url: "https://www.cdc.gov/niosh/" },
    { label: "National Institute of Standards and Technology (NIST) — Electrical Units and Ohm's Law", url: "https://www.nist.gov/" },
  ],
  seeAlso: [
    "general-science-facts/electricity-and-magnetism-basics",
    "general-science-facts/do-thick-and-thin-wires-carry-the-same-current-safely",
    "general-science-facts/does-pure-water-actually-conduct-electricity",
    "home-diy-knowledge/why-gfci-outlets-exist",
  ],
  glossary: [
    { term: "Voltage", definition: "The difference in electrical potential energy between two points, which is what actually drives current to flow through any conductive path connecting them — without a difference, no current flows, regardless of the absolute voltage at either point." },
    { term: "Current", definition: "The flow of electric charge through a conductor, driven by a voltage difference and limited by the resistance of the path — measured in amperes." },
    { term: "Ground potential", definition: "The reference voltage level of the earth itself, treated as zero in most electrical systems — a person or object touching the ground is effectively at this reference level." },
    { term: "Path of least resistance", definition: "The route current preferentially follows when multiple conductive paths exist between two points at different voltages — current divides among available paths in proportion to how much resistance each one offers." },
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

/** Quiz bank: feeds the end-of-article "Test yourself" quiz and the game (not rendered inline). */
export const quiz: QuizBankItem[] = [
  {"question": "Why is a bird safe sitting on a single live power line?", "difficulty": "easy", "options": [{"text": "Its feet are insulated", "correct": false, "explanation": "Bird feet aren't insulated; that's a myth."}, {"text": "Both feet touch the same wire, so there's no voltage difference across its body", "correct": true, "explanation": "Without a voltage difference, no current flows through the bird."}, {"text": "Power lines carry too little voltage to hurt birds", "correct": false, "explanation": "The wire may carry tens of thousands of volts relative to ground."}]},
  {"question": "What makes electric current flow through something?", "difficulty": "easy", "options": [{"text": "A high absolute voltage on its own", "correct": false, "explanation": "Absolute voltage doesn't matter without a difference between two points."}, {"text": "A voltage difference between two points it touches", "correct": true, "explanation": "Current needs a path between different voltages."}, {"text": "Being high above the ground", "correct": false, "explanation": "Height alone doesn't create a current path."}]},
  {"question": "When would the same bird suddenly be in danger?", "difficulty": "easy", "options": [{"text": "If it also touched a grounded pole or a second wire", "correct": true, "explanation": "That creates a second contact at a different voltage, so current flows through the bird."}, {"text": "If it stayed on the wire for several hours", "correct": false, "explanation": "Time on a single wire doesn't matter."}, {"text": "If the wire were painted", "correct": false, "explanation": "Paint isn't the factor; the voltage difference is."}]},
  {"question": "A person on a ladder touches a power line while their feet rest on the ground. Why is this deadly when it isn't for the bird?", "difficulty": "hard", "options": [{"text": "Humans are heavier than birds", "correct": false, "explanation": "Weight has nothing to do with current flow."}, {"text": "Their body bridges the wire's voltage and the ground's, creating a path for current", "correct": true, "explanation": "Two contact points at different voltages is exactly what the bird avoids."}, {"text": "Humans have more metal in their blood", "correct": false, "explanation": "It's the voltage difference across the body, not body chemistry."}]},
  {"question": "The two feet of a bird on a real wire sit a few inches apart. Is the voltage between them exactly zero?", "difficulty": "hard", "options": [{"text": "Yes, a wire has no resistance at all", "correct": false, "explanation": "Real wire has a little resistance per unit length."}, {"text": "Not exactly, but only a tiny fraction of a volt, far too small to drive a meaningful current", "correct": true, "explanation": "Over a few inches, the wire's resistance creates only a negligible difference."}, {"text": "No, it's thousands of volts, but birds can withstand it", "correct": false, "explanation": "Birds can't withstand high voltage; they're simply never exposed to a real difference."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "A bird's feet aren't insulated from electricity — it's safe because both feet touch the exact same wire, meaning there's no voltage difference across its body for current to flow through.",
          "Current only flows through a path when there's a voltage difference between its two ends — the wire's absolute voltage relative to the ground doesn't matter if the bird never touches anything at a different voltage.",
          "The danger appears immediately if a second contact point at a different voltage is introduced — a grounded pole, a second wire, or a human touching both the line and the ground at once.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">It looks like the bird must have some special protection from the electricity, since the wire clearly carries a dangerous amount of it. But nothing about the bird is special or insulated. What actually matters is that both of its feet are touching the same single wire, at essentially the same electrical potential &#8212; there&apos;s no meaningful difference in voltage between one foot and the other, so electricity has no reason to flow into and through the bird&apos;s body at all.</div>}
        detailed={<div className="prose-p">Electric current requires a <TermLink href="/general-science-facts/why-a-bird-can-safely-sit-on-a-live-power-line">voltage</TermLink> difference between two points connected by a conductive path &#8212; current is driven by that difference, not by the absolute voltage level at either point alone. A high-voltage transmission line might sit at tens of thousands of volts relative to <TermLink href="/general-science-facts/why-a-bird-can-safely-sit-on-a-live-power-line">ground potential</TermLink>, but a bird&apos;s two feet, both perched on the same wire just inches apart, are both at that same elevated voltage &#8212; the voltage difference between them is nearly zero. With essentially no voltage difference across the bird&apos;s body, and the bird&apos;s body offering some finite resistance, Ohm&apos;s law (current equals voltage divided by resistance) predicts almost no current flow, regardless of how enormous the line&apos;s voltage is relative to the distant ground. The danger appears the instant a second contact point at a genuinely different voltage enters the picture &#8212; if the bird&apos;s wing touched a grounded transformer case, or a second wire at a different voltage, current would suddenly have a real voltage difference and a conductive <TermLink href="/general-science-facts/why-a-bird-can-safely-sit-on-a-live-power-line">path of least resistance</TermLink> through the bird&apos;s body to flow through.</div>}
      />
      <FootnoteAside>This exact mechanism is why utility linemen can work on energized lines using specialized &quot;bare-hand&quot; techniques — by bonding themselves electrically to the same wire (matching its voltage) before making contact, they eliminate the voltage difference between themselves and the line, the same protection the bird gets automatically.</FootnoteAside>

      <p>
        Once voltage difference (not absolute voltage) is understood as the actual trigger for current flow, it becomes possible to predict exactly which real-world scenarios near power lines are safe and which are lethal.
      </p>

      <QuickCheck
        question="A bird is perched safely with both feet on the same high-voltage wire. What would make the situation suddenly dangerous for the bird?"
        options={[
          { text: "If any other part of its body touched something at a different voltage, such as a grounded pole or a second wire, creating a voltage difference across its body", correct: true, explanation: "Correct. The bird's safety depends entirely on having no voltage difference across its body — introducing a second contact point at a different voltage would create exactly that difference." },
          { text: "If the wire's voltage increased further while the bird kept both feet on it", correct: false, explanation: "Increasing the wire's absolute voltage doesn't create a voltage difference across the bird's body as long as both feet remain on the same wire — the bird would still be at that same elevated potential throughout." },
          { text: "If the bird's feathers got wet from rain", correct: false, explanation: "Wet feathers alone, without a second contact point at a different voltage, still wouldn't create the voltage difference needed to drive current through the bird — the core requirement is a second point at a different potential." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A bird with both feet on one wire (baseline case)</h3>
      <p>
        A bird lands on a transmission line carrying 25,000 volts relative to ground, with both feet planted on the same wire, a few inches apart. Because both feet are on the same conductor, the voltage difference between them is effectively zero — real transmission wire has some resistance per unit length, but over a few inches that translates to a difference of a tiny fraction of a volt, far too small to drive any meaningful current through the bird&apos;s body. The bird can preen, sleep, or fly off from that same wire indefinitely, completely unaffected by the wire&apos;s enormous voltage relative to the distant ground.
      </p>
      <QuickCheck
        question="Why doesn't the transmission line's 25,000-volt potential (relative to ground) create a dangerous shock for a bird perched with both feet on it?"
        options={[
          { text: "The relevant voltage difference is between the bird's two feet, which are both on the same wire and therefore at nearly identical potential, not between the wire and distant ground", correct: true, explanation: "Correct. Current flows based on the voltage difference across the actual conductive path through the bird's body — its two feet on the same wire, not some path connecting the wire to the ground." },
          { text: "25,000 volts isn't actually a high enough voltage to be dangerous to birds", correct: false, explanation: "25,000 volts is a genuinely high, hazardous voltage — the reason the bird is safe isn't that the voltage is low, but that there's no meaningful voltage difference across its own body." },
          { text: "Bird feet contain a natural insulating material that blocks electricity", correct: false, explanation: "Bird feet aren't specially insulated — the safety mechanism here is purely about the near-zero voltage difference between the two contact points, not any insulating property of the bird itself." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A bird whose wingtip brushes a grounded pole (edge case / variation)</h3>
      <div className="prose-p">
        The same bird, still perched on the wire, spreads a wing wide enough that its wingtip brushes the grounded metal support pole beside it. Now the bird&apos;s body bridges two very different voltages &#8212; the wire at 25,000 volts through one foot, and the grounded pole (effectively 0 volts) through the wingtip &#8212; creating a massive voltage difference across its body for the first time. Current now has both a real voltage difference to drive it and a conductive path (the bird&apos;s tissue) to flow through, and the result is typically fatal &#8212; this is, in fact, one of the most common real causes of bird electrocution on power infrastructure.
      </div>
      <QuickCheck
        question="Why does a bird's wingtip touching a grounded pole while its feet remain on an energized wire create a dangerous situation, when standing on the wire alone did not?"
        options={[
          { text: "It creates a genuine voltage difference across the bird's body for the first time — between the energized wire and the grounded pole at 0 volts — giving current both a driving force and a path", correct: true, explanation: "Correct. The wire alone never provided a voltage difference across the bird; adding a second contact point at ground potential does, which is exactly what current flow requires." },
          { text: "Touching a pole physically damages the bird regardless of any electrical considerations", correct: false, explanation: "The danger here is specifically electrical, not physical contact with the pole itself — it's the voltage difference created between the wire and the grounded pole that drives the harmful current." },
          { text: "The pole itself generates additional electricity when touched by a bird", correct: false, explanation: "The pole doesn't generate anything — it's simply at ground potential (effectively 0 volts), and it's the resulting voltage difference relative to the energized wire that creates the hazard." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why linework safety training bans two-point contact (real-world / applied case)</h3>
      <p>
        Utility line workers are trained never to simultaneously contact two points at different voltages — for example, an energized line and a grounded structure — while working near live equipment. Specialized techniques like &quot;bare-hand&quot; live-line work exist specifically to eliminate this risk: a worker is electrically bonded to the same conductor they&apos;re working on before touching it, matching their entire body to that wire&apos;s voltage, the same protection the bird gets automatically by keeping both feet on one wire. Insulated tools and protective equipment serve the same underlying goal — preventing any part of the worker&apos;s body from providing a conductive path between two different voltages.
      </p>
      <QuickCheck
        question="Why does bonding a lineman electrically to an energized wire before contact make it safe to work on, using the same underlying principle as the bird example?"
        options={[
          { text: "Bonding raises the worker's entire body to the wire's voltage first, so once they touch it there's no voltage difference between the worker and the wire, just like a bird with both feet on one wire", correct: true, explanation: "Correct. Both cases rely on eliminating the voltage difference across the body, not on insulating against the wire's absolute voltage." },
          { text: "Bonding neutralizes the electricity in the wire itself before the worker touches it", correct: false, explanation: "Bonding doesn't change the wire's voltage or de-energize it — it raises the worker to that same voltage, eliminating the difference between them, which is what actually prevents current flow through the worker." },
          { text: "This technique works because line workers wear rubber gloves that make contact irrelevant", correct: false, explanation: "While insulating gear is also used in various utility work, the bare-hand bonding technique specifically relies on matching voltage (eliminating the difference), not on insulation preventing contact." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="No voltage difference vs. two different voltages across the body"
        type="comparison"
        svgSrc="/diagrams/general-science-facts-why-a-bird-can-safely-sit-on-a-live-power-line-comparison.svg"
        altText="Diagram comparing a bird with both feet on the same energized wire, showing no voltage difference and no current flow, versus a bird also touching a grounded pole with its wing, showing a large voltage difference and dangerous current flowing through its body."
      />
      <p>
        The wire&apos;s voltage relative to ground is identical in both panels — what changes is whether the bird&apos;s own body ever bridges two genuinely different voltages.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a bird on a wire is protected by some natural insulation in its feet or feathers.", fix: "Recognize the actual mechanism: both feet touching the same wire means no voltage difference exists across its body — insulation isn't the reason at all." },
          { mistake: "Believing high voltage alone is what makes something dangerous, regardless of contact configuration.", fix: "Focus on voltage difference across an actual conductive path — a person standing on an insulated surface can safely touch a single high-voltage point, just like the bird does." },
          { mistake: "Underestimating the danger of large wingspans or objects bridging a wire and a grounded structure.", fix: "Treat any object or body large enough to simultaneously touch two different-voltage points near power lines as a serious electrocution risk." },
        ]}
      />
      <MisconceptionCallout
        myth="A bird can sit on a high-voltage power line because its feet or feathers insulate it from the electricity."
        reality={<p>A bird&apos;s feet and feathers provide no special electrical insulation. It&apos;s safe because both of its feet touch the exact same wire, at essentially the same electrical potential &#8212; the voltage difference across its body is nearly zero, and current only flows when a real voltage difference exists across a conductive path. The wire&apos;s absolute voltage relative to the distant ground is irrelevant to the bird, since it never contacts anything at that different (ground) potential. The instant a bird&apos;s wing or body bridges the wire and a genuinely different-voltage point &#8212; a grounded pole, a second wire, a transformer &#8212; a real voltage difference appears across its body, and the outcome is typically fatal. This is precisely why bird electrocution on utility infrastructure happens almost exclusively through two-point contact, not single-wire perching.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate current through a body given a voltage difference"
        description="Ohm's law: current equals voltage difference divided by resistance. Try a near-zero voltage difference (like a bird's two feet on one wire) versus a large one (like touching a wire and a grounded object)."
        fields={[
          { key: "voltage", label: "Voltage difference across the body (volts)", defaultValue: 0.01, step: 0.01 },
          { key: "resistance", label: "Approximate body resistance (ohms)", defaultValue: 1000, step: 50 },
        ]}
        resultLabel="Estimated current (amperes)"
        formula="ohmsLawCurrent"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Never assume any part of a power line or electrical equipment is 'safe' to touch just because a bird can perch on it — the bird's safety depends on a configuration a person can't replicate.",
          "Stay well clear of any situation where you, an object, or a vehicle could simultaneously contact a power line and a grounded structure or the earth.",
          "If a vehicle contacts a downed power line, stay inside unless there's fire risk, since stepping out creates exactly the two-point-contact hazard this concept describes.",
          "Report downed or low-hanging power lines to the utility company immediately rather than attempting to move or inspect them.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why can birds sit on power lines without getting electrocuted?", answer: "Both of a bird's feet touch the exact same wire, at essentially the same voltage, so there's no meaningful voltage difference across its body to drive current through it — the wire's absolute voltage relative to the ground doesn't matter." },
          { question: "What actually causes an electric shock — voltage or current?", answer: "Current is what causes physical harm, but current only flows when a voltage difference exists across a conductive path. High absolute voltage alone, without a difference across the body, doesn't drive current through anything." },
          { question: "Why do birds sometimes get electrocuted on power poles even though they can sit safely on wires?", answer: "Electrocution typically happens when a bird's body simultaneously contacts two points at different voltages — commonly an energized wire and a grounded pole or transformer case — creating the voltage difference that a single wire alone never does." },
          { question: "Could a human safely touch a single high-voltage wire the way a bird does?", answer: "In principle, if a person's entire body were electrically bonded to that single wire's voltage first (as trained utility linemen do with bare-hand technique) and touched nothing else at a different voltage, yes — but this requires specialized equipment and training, and any accidental second contact point is extremely dangerous." },
          { question: "What is the actual danger with downed power lines on the ground?", answer: "A downed line can create a dangerous voltage gradient across the ground itself, meaning a person's two feet at different distances from the line can be at different voltages — which is why authorities recommend shuffling away with feet together rather than taking normal strides near a downed line." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
