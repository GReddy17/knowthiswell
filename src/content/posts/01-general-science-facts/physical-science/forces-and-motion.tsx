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
  title: "Forces & Motion",
  category: "general-science-facts",
  order: 2,
  subtopic: "physical-science",
  tags: ["forces", "motion", "newtons laws", "physics", "acceleration"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "What a force actually is, how Newton's three laws explain everyday motion, and why F = ma predicts exactly how hard something accelerates.",
  summary: "A force is any push or pull that changes an object's motion. Newton's three laws describe when objects stay still, how much they accelerate under a force, and why every force has an equal, opposite reaction.",
  sources: [
    { label: "NASA Glenn Research Center — Newton's Laws of Motion", url: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/newtons-laws-of-motion/" },
    { label: "Encyclopaedia Britannica — Newton's Laws of Motion", url: "https://www.britannica.com/science/Newtons-laws-of-motion" },
  ],
  seeAlso: [
    "general-science-facts/matter-and-states-of-matter",
  ],
  glossary: [
    { term: "Force", definition: "Any push or pull on an object, measured in newtons (N)." },
    { term: "Mass", definition: "The amount of matter in an object — stays the same regardless of gravity." },
    { term: "Acceleration", definition: "The rate at which velocity changes, measured in meters per second squared." },
    { term: "Inertia", definition: "An object's resistance to a change in its motion — more mass means more inertia." },
    { term: "Net force", definition: "The combined effect of all forces acting on an object at once." },
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
          "A force is any push or pull — without a net force, a moving object keeps moving and a still object stays still (Newton's first law).",
          "How much an object accelerates under a force depends on its mass: F = ma. Same force, more mass, less acceleration.",
          "Every force has an equal and opposite reaction — a rocket doesn't push against air, it pushes against its own exhaust.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/general-science-facts/forces-and-motion">force</TermLink> is a push or pull — your hand pushing a door, gravity pulling a ball down, friction slowing a sliding box. Whenever something speeds up, slows down, or changes direction, a force caused it. Left alone, with no forces acting on it, a moving object just keeps moving in a straight line forever, and a still object stays still.</div>}
        detailed={<div className="prose-p">Isaac Newton described this with three laws. The first (inertia) says an object&apos;s velocity only changes if a net force acts on it — &quot;at rest&quot; and &quot;moving at constant speed in a straight line&quot; are physically the same state, neither needs a force to continue. The second law quantifies exactly how much a force changes motion: <TermLink href="/general-science-facts/forces-and-motion">acceleration</TermLink> equals net force divided by mass (a = F/m, usually written F = ma). The third law says forces always come in pairs — if you push on a wall, the wall pushes back on you with equal force in the opposite direction, which is also why walking works: your foot pushes backward on the ground, and the ground pushes you forward.</div>}
      />
      <FootnoteAside>Newton published all three laws together in 1687 in the <em>Principia Mathematica</em> — they still form the basis of engineering calculations for anything not moving near the speed of light or down at the atomic scale.</FootnoteAside>

      <p>
      Those three laws sound abstract until you run real numbers through them — which is where F = ma stops being a formula to memorize and starts being a tool you can actually use.
      </p>

      <QuickCheck
        question="You push a shopping cart and a loaded moving truck with the exact same force. What happens?"
        options={[
          { text: "They accelerate at the same rate, since the force is identical", correct: false, explanation: "Force alone doesn't determine acceleration — mass matters too. Same force spread across more mass produces less acceleration." },
          { text: "The shopping cart accelerates faster, because it has less mass", correct: true, explanation: "Correct. From a = F/m, the same force produces more acceleration on the lower-mass object. This is exactly why a loaded truck needs a far stronger engine to accelerate like a light car." },
          { text: "Neither moves, because pushing isn't a real force", correct: false, explanation: "Pushing is a textbook example of a force — a contact force. Both objects would accelerate, just at very different rates." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Pushing a shopping cart (baseline case)</h3>
      <div className="prose-p">
      A 15 kg shopping cart needs to accelerate at 0.5 m/s² to get moving at a normal walking pace. Rearranging F = ma: force = mass × acceleration = 15 kg × 0.5 m/s² = 7.5 newtons — roughly the force of holding a small apple&apos;s weight in your hand. That&apos;s why an empty cart feels almost effortless to start moving.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same push, a stalled car (edge case / variation)</h3>
      <div className="prose-p">
      Now try to push a 1,200 kg stalled car at that same 0.5 m/s² acceleration: force = 1,200 kg × 0.5 m/s² = 600 newtons — more than most people can sustain, which is why pushing a stalled car usually takes several people. This is also where <TermLink href="/general-science-facts/forces-and-motion">net force</TermLink> matters: real pushing has to first overcome the car&apos;s static friction with the road before any of that force goes toward acceleration at all, so the true push required is even higher than the simple F = ma number.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why seatbelts and airbags exist (real-world / applied case)</h3>
      <div className="prose-p">
      In a car crash, a 70 kg passenger moving at 15 m/s (about 54 km/h) who stops in 0.1 seconds via a rigid dashboard experiences an acceleration of roughly 150 m/s² — from F = ma, that&apos;s about 10,500 newtons of force on the body, more than 10 times their body weight. A seatbelt and airbag work by extending the stopping time to around 0.5–1 second instead, which cuts the acceleration — and therefore the force — by a factor of 5 to 10. Same mass, same change in speed, dramatically less force, purely because the stopping time changed.
      </div>

      <QuickCheck
        question="Two cars going the same speed crash into a wall — one has crumple zones that fold and take a full second to stop, the other is rigid and stops in a tenth of a second. Which passenger experiences more force?"
        options={[
          { text: "The one in the crumple-zone car, because folding metal absorbs extra force", correct: false, explanation: "Crumple zones don't add force — they extend the stopping time, which reduces acceleration and therefore force on the passenger. This is the whole point of the design." },
          { text: "The one in the rigid car, because stopping faster means higher acceleration for the same speed change", correct: true, explanation: "Correct. Shorter stopping time means higher acceleration (a = change in velocity ÷ time), and F = ma means higher acceleration produces higher force on the passenger's body." },
          { text: "Both experience identical force, since they were going the same speed", correct: false, explanation: "Speed alone doesn't determine force — how quickly that speed changes to zero does. Same speed, very different stopping times, very different forces." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Forces acting on a box being pushed across a floor"
        type="detail"
        svgSrc="/diagrams/general-science-facts-forces-and-motion-free-body.svg"
        altText="Free-body diagram of a box on a floor, showing four force arrows: an applied push force to the right, friction opposing it to the left, gravity pulling down, and the normal force from the floor pushing up, with the net rightward force labeled as the difference between the applied force and friction."
      />
      <p>
      Notice that four forces act on the box at once — gravity down, the floor pushing back up (normal force), your push forward, and friction resisting that push. Gravity and the normal force cancel out exactly (the box doesn&apos;t sink or float), so the box&apos;s actual acceleration only depends on the leftover, unbalanced part: your push minus friction. That leftover is the <TermLink href="/general-science-facts/forces-and-motion">net force</TermLink> that F = ma actually describes.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking a constant force is needed just to keep something moving at a steady speed.", fix: "Constant velocity needs zero net force (Newton's first law) — the only reason cars and bikes need continuous engine force is to cancel out friction and air resistance, not to 'maintain' motion itself." },
          { mistake: "Using weight and mass interchangeably.", fix: "Mass is how much matter an object has (kg) and never changes; weight is the force of gravity on that mass (newtons) and changes depending on where you are — your mass on the Moon is identical to on Earth, but your weight is about one-sixth." },
          { mistake: "Assuming a bigger object always needs a bigger force to move it.", fix: "It depends entirely on the acceleration you want. A huge, nearly frictionless object (a ship drifting in water) can be moved by a small force — it'll just accelerate very slowly." },
        ]}
      />
      <MisconceptionCallout
        myth="Heavier objects fall faster than lighter ones."
        reality={<p>Ignoring air resistance, every object accelerates due to gravity at the same rate — about 9.8 m/s² near Earth&apos;s surface — regardless of mass. A heavier object does experience more gravitational force, but it also has proportionally more mass resisting that force (from F = ma), and the two effects exactly cancel. Galileo is credited with demonstrating this; astronauts repeated it dramatically on the Moon in 1971, dropping a hammer and a feather that hit the ground at the same instant in the airless vacuum.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Force needed for a given mass and acceleration (F = ma)"
        fields={[
          { key: "mass", label: "Mass (kg)", defaultValue: 10, step: 0.5 },
          { key: "acceleration", label: "Acceleration (m/s²)", defaultValue: 2, step: 0.1 },
        ]}
        resultLabel="Force required (newtons)"
        formula="forceFromMassAcceleration"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you push something heavy, notice how much harder the first instant is — that's overcoming static friction before F = ma even applies.",
          "Try the calculator above with a bicycle's mass (~12 kg) versus a car's (~1,500 kg) at the same acceleration to feel the scale difference in force.",
          "Watch for Newton's third law in ordinary life — walking, swimming, and rockets all work by pushing something backward to go forward.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between speed and velocity?", answer: "Speed is just how fast something moves (a number, like 60 km/h). Velocity is speed plus direction (60 km/h north). A car going around a circular track at a constant speed still has changing velocity, because its direction keeps changing — which means it's accelerating." },
          { question: "Why do you feel pushed back into your seat when a car accelerates?", answer: "Your body's inertia resists the change in motion (Newton's first law) — the seat is accelerating forward with the car, and it has to push forward on you to bring you along, which you feel as being pressed backward into it." },
          { question: "Does a heavier object need more force to move at the same speed?", answer: "To reach the same final speed in the same amount of time, yes — more mass means more force is needed for the same acceleration, directly from F = ma." },
          { question: "What exactly is inertia?", answer: "Inertia is an object's built-in resistance to having its motion changed. Mass is the actual measure of how much inertia an object has — more mass means it takes more force to speed up, slow down, or turn it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
    </>
  );
}
