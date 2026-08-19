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
  title: "Simple Machines: How Levers, Pulleys, and Ramps Trade Force for Distance",
  category: "general-science-facts",
  order: 7,
  subtopic: "physical-science",
  tags: [
    "simple machines",
    "levers",
    "pulleys",
    "inclined plane",
    "mechanical advantage",
    "physics",
  ],
  date: "2026-08-16",
  updated: "2026-08-19",
  lastReviewed: "2026-08-19",
  excerpt: "How all six simple machines — lever, pulley, wheel and axle, inclined plane, wedge, and screw — let you trade force for distance, with real mechanical-advantage numbers for each, and why none of them create free energy.",
  summary: "A simple machine changes the amount of force needed to do a job by changing the distance over which that force is applied — it never reduces the total work required.",
  sources: [
    { label: "NASA Glenn Research Center — Simple Machines", url: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/simple-machines/" },
    { label: "Encyclopaedia Britannica — Simple Machine", url: "https://www.britannica.com/technology/simple-machine" },
    { label: "Smithsonian Institution — The Six Simple Machines", url: "https://www.si.edu/" },
  ],
  seeAlso: [
    "general-science-facts/forces-and-motion",
    "general-science-facts/energy-types-and-conservation",
  ],
  glossary: [
    { term: "Simple machine", definition: "A basic mechanical device that changes the size or direction of a force using a single applied force — six types exist: lever, pulley, wheel and axle, inclined plane, wedge, and screw." },
    { term: "Mechanical advantage", definition: "The ratio of output force (or load) to input force (or effort) a machine provides — a mechanical advantage of 4 means 1 unit of effort force can move 4 units of load force." },
    { term: "Fulcrum", definition: "The fixed pivot point a lever rotates around." },
    { term: "Effort arm", definition: "The distance from the fulcrum to the point where effort (input) force is applied on a lever." },
    { term: "Load arm", definition: "The distance from the fulcrum to the load (resistance) being moved on a lever." },
    { term: "Work", definition: "Force applied over a distance, measured in joules — work equals force multiplied by the distance moved in the direction of the force." },
    { term: "Wedge", definition: "Two inclined planes joined back to back, used to split or force objects apart — an axe head, a knife, and a doorstop are all wedges." },
    { term: "Wheel and axle", definition: "A larger wheel rigidly attached to a smaller connected shaft (the axle); turning the wheel through a large circle rotates the axle with much greater force over a smaller circle, or vice versa." },
    { term: "Screw", definition: "An inclined plane wrapped around a cylinder in a spiral; the thread's pitch (distance advanced per full turn) determines how much a rotational force is multiplied into a linear force." },
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
          "There are six simple machines — lever, pulley, wheel and axle, inclined plane, wedge, and screw — and every complex machine (a car, a can opener, a pair of scissors) is built from combinations of them.",
          "A simple machine trades force for distance: push with less force over a longer distance, or more force over a shorter one. Ignoring friction, the total work stays the same either way.",
          "Mechanical advantage tells you exactly how much a machine multiplies your force — a longer effort arm on a lever, or more supporting ropes on a pulley system, means a bigger multiplier.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/general-science-facts/simple-machines">simple machine</TermLink> is a basic tool that makes a job easier — not by creating extra energy, but by letting you trade force for distance. A ramp lets you push a heavy box up to a truck bed using less force than lifting it straight up, but you push it over a much longer path. A pair of scissors, a wheelbarrow, a doorknob, and a bottle opener are all simple machines, or combinations of them, hiding in plain sight.</div>}
        detailed={<div className="prose-p">There are six classical simple machines: the <strong>lever</strong> (a rigid bar pivoting on a <TermLink href="/general-science-facts/simple-machines">fulcrum</TermLink>), the <strong>pulley</strong> (a wheel with a rope that redirects or multiplies force), the <strong>wheel and axle</strong> (a larger wheel turning a smaller connected shaft, as in a doorknob or steering wheel), the <strong>inclined plane</strong> (a ramp), the <strong>wedge</strong> (two inclined planes back to back, as in an axe head), and the <strong>screw</strong> (an inclined plane wrapped around a cylinder). Each one is governed by the same underlying rule: <TermLink href="/general-science-facts/simple-machines">work</TermLink> (force × distance) is conserved in an ideal, frictionless machine. A machine that lets you push with 1/4 the force must have you push over 4 times the distance to move the same load the same net amount — that ratio is the machine&apos;s <TermLink href="/general-science-facts/simple-machines">mechanical advantage</TermLink>.</div>}
      />
      <FootnoteAside>Archimedes is credited with the line &quot;Give me a place to stand, and I will move the Earth&quot; — a boast about the lever&apos;s mechanical advantage. With a real fulcrum and an effort arm long enough, the physics of the claim is technically correct, even though building one is not remotely practical.</FootnoteAside>

      <p>
      That trade-off — less force for more distance, or vice versa — sounds abstract until you put real numbers on a real lever, which is exactly where mechanical advantage stops being a definition and starts being something you can calculate and use.
      </p>

      <QuickCheck
        question="A machine lets you lift a heavy load using only 1/5 the force you'd need to lift it directly. What must be true about the distance you push?"
        options={[
          { text: "You push over roughly 5 times the distance the load actually moves", correct: true, explanation: "Correct. In an ideal machine, work in equals work out — force times distance stays constant, so a 5x reduction in force requires roughly a 5x increase in the distance the effort travels." },
          { text: "The distance is unrelated to the force reduction", correct: false, explanation: "They're directly linked by conservation of work — a machine that cuts required force by a factor of 5 will require pushing about 5 times farther, not an unrelated amount." },
          { text: "You push over exactly the same distance the load moves", correct: false, explanation: "That would only be true for a mechanical advantage of 1, which does no useful force-multiplying at all — the whole point of the machine here is a distance trade-off." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A seesaw-style lever lifting a load (baseline case)</h3>
      <div className="prose-p">
      A lever has its fulcrum placed so the effort arm is 2 meters long and the load arm is 0.5 meters long. Mechanical advantage = effort arm ÷ load arm = 2 ÷ 0.5 = <strong>4</strong>. That means 25 kg of push force on the long end can balance and lift 100 kg of load on the short end — at the cost of your end of the lever having to travel 4 times farther than the load actually rises. This is the exact setup behind a claw hammer pulling a nail, a wheelbarrow tipping its load, and a bottle opener popping a cap.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A block-and-tackle pulley system (edge case / variation)</h3>
      <div className="prose-p">
      Pulleys work on the same principle but count differently: mechanical advantage equals the number of rope segments actually supporting the load, not a length ratio. A single fixed pulley (mechanical advantage 1) only changes the direction of your pull — useful for a flagpole, but it doesn&apos;t reduce effort at all. Add a second, movable pulley attached to the load, and now two rope segments support it, giving mechanical advantage 2 — lifting a 40 kg load takes only about 20 kg of pulling force, but you have to pull the rope through twice the distance the load rises. Add more movable pulleys and the advantage keeps climbing, which is how construction cranes and sailing-ship rigging lift loads far heavier than any person could move directly.
      </div>

      <QuickCheck
        question="A pulley system has 3 rope segments supporting the load. Roughly how much easier is lifting compared to pulling the load straight up with no pulley?"
        options={[
          { text: "About 3 times easier in force, but the rope must be pulled about 3 times farther", correct: true, explanation: "Correct. Mechanical advantage for a pulley system equals the number of supporting rope segments — 3 segments means roughly 1/3 the force, at the cost of pulling about 3 times the rope length." },
          { text: "About 3 times easier in force, with no change in how far the rope must be pulled", correct: false, explanation: "Work is conserved (ignoring friction) — cutting the required force by a factor of 3 always means pulling roughly 3 times more rope through, not the same distance." },
          { text: "No difference — pulleys only change the direction of pull, never the force needed", correct: false, explanation: "That's only true for a single fixed pulley (mechanical advantage 1). Adding movable pulleys genuinely multiplies force, at the cost of pulling more rope." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why a longer ramp makes moving furniture easier (real-world / applied case)</h3>
      <div className="prose-p">
      An inclined plane&apos;s mechanical advantage equals the ramp&apos;s length divided by its height. A 3-meter-long ramp rising to a 1-meter-high truck bed has mechanical advantage 3, meaning pushing a heavy appliance up it takes roughly 1/3 the force of lifting it straight up — at the cost of walking it 3 times farther than the 1-meter rise. This is why moving crews use the longest ramp that will fit rather than the shortest: a shallower, longer ramp always trades more distance for less required force, which matters directly for how much a person can safely push versus lift.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 4: A screwdriver as a wheel and axle (real-world / applied case)</h3>
      <div className="prose-p">
      A <TermLink href="/general-science-facts/simple-machines">wheel and axle</TermLink> is really just a lever that spins in a full circle instead of swinging back and forth — the "effort arm" is the wheel's radius, and the "load arm" is the axle's radius. A screwdriver handle with a 1.5 cm radius turning a 0.3 cm-radius metal shaft has mechanical advantage = 1.5 ÷ 0.3 = <strong>5</strong>: the twisting force delivered at the tip is 5 times what your fingers apply to the wide handle, at the cost of your fingers sweeping through 5 times the distance the shaft's surface actually turns. This is exactly why a screwdriver with a fat handle is easier to turn than one with a thin handle, and why a car's steering wheel is wide rather than the size of the steering column it turns — a wider wheel means more mechanical advantage for the same arm effort.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 5: An axe as a wedge, and a car jack as a screw (real-world / applied case)</h3>
      <div className="prose-p">
      A <TermLink href="/general-science-facts/simple-machines">wedge</TermLink> is two inclined planes back to back, and its mechanical advantage is its length divided by its thickest width — a splitting axe head 20 cm long and 3 cm thick at the back has mechanical advantage ≈ 20 ÷ 3 ≈ <strong>6.7</strong>, meaning the downward force of the swing gets converted into roughly 6.7 times that much outward force splitting the wood apart sideways, along the grain. A <TermLink href="/general-science-facts/simple-machines">screw</TermLink> is an inclined plane wrapped around a cylinder, and its mechanical advantage is the circumference the handle travels per turn divided by how far the screw advances in that same turn (its thread pitch). A car jack with a 15 cm handle radius and a thread pitch of 0.3 cm per turn has mechanical advantage = (2 × π × 15) ÷ 0.3 ≈ <strong>314</strong> — which is exactly why one person can lift a 1,500 kg car by hand with a jack handle, turning it many times to raise the car a small amount with each full turn.
      </div>

      <QuickCheck
        question="A car jack lets one person lift a car that weighs far more than they do, but they have to turn the handle many times to raise it just a few centimeters. What does this illustrate?"
        options={[
          { text: "The screw's very high mechanical advantage — a large distance traveled by the handle per turn versus a tiny distance the car actually rises per turn", correct: true, explanation: "Correct. A screw's mechanical advantage is the handle's circular travel distance divided by the thread's pitch — a fine thread pitch relative to a wide handle radius produces an enormous force multiplier, at the cost of needing many turns." },
          { text: "The jack is adding energy to the system through its motor", correct: false, explanation: "A manual car jack has no motor and adds no energy — it's a purely mechanical trade of force for distance, governed by the same work-conservation principle as every simple machine." },
          { text: "The car's weight is being temporarily reduced by the jack", correct: false, explanation: "The car's weight doesn't change — the jack multiplies the person's input force enough to exceed that unchanged weight, it doesn't reduce the weight itself." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Lever classes: fulcrum, effort, and load positions"
        type="detail"
        svgSrc="/diagrams/general-science-facts-simple-machines-lever-classes.svg"
        altText="Three diagrams of a lever bar showing the three classes: first class with the fulcrum between effort and load like a seesaw, second class with the load between the fulcrum and effort like a wheelbarrow, and third class with the effort between the fulcrum and load like a fishing rod or human forearm."
      />
      <p>
      Levers come in three classes based on where the fulcrum, effort, and load sit relative to each other. A first-class lever (seesaw, scissors) has the fulcrum in the middle. A second-class lever (wheelbarrow, bottle opener) has the load in the middle, always giving a mechanical advantage greater than 1. A third-class lever (a broom, a fishing rod, the human forearm lifting a hand weight) has the effort in the middle — it always has a mechanical advantage less than 1, trading force for extra speed and reach instead, which is exactly why your arm is built for fast, wide-reaching swings rather than raw lifting force at the hand.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking a simple machine reduces the total work needed to do a job.", fix: "In an ideal, frictionless machine, total work stays exactly the same — the machine only changes the balance of force versus distance, never the total energy required." },
          { mistake: "Assuming every lever makes lifting easier.", fix: "Only levers with the fulcrum positioned to give a mechanical advantage greater than 1 reduce required force. A third-class lever, like a fishing rod, does the opposite — it trades force for extra speed and reach." },
          { mistake: "Believing a single fixed pulley reduces the force needed to lift something.", fix: "A lone fixed pulley only changes the direction of the pull (down instead of up) — its mechanical advantage is exactly 1, so it doesn't reduce effort at all. Force reduction requires adding movable pulleys." },
        ]}
      />
      <MisconceptionCallout
        myth="Simple machines let you do less work overall, which is why they make hard jobs 'easy.'"
        reality={<p>Simple machines don&apos;t reduce total work — they only reshape it. Ignoring friction, force times distance stays constant: a machine that lets you push with a quarter of the force always makes you push over roughly four times the distance. In practice, real machines do lose some effort to friction, which means the true output work is always slightly less than the input work, never more — the popular idea of a machine that outputs more energy than it takes in (a &quot;perpetual motion machine&quot;) has never been demonstrated to work and would violate the conservation of energy.</p>}
      />

      <QuickCheck
        question="Why can't a real machine (accounting for friction) ever output more work than the effort put into it?"
        options={[
          { text: "Because energy is conserved — friction converts some input energy to heat, so output work is always somewhat less than input work, never more", correct: true, explanation: "Correct. Real machines lose some energy to friction as heat, so useful output work is always a little less than input work — never more, which is why perpetual motion machines are impossible." },
          { text: "Because machines are only designed for lifting, not other kinds of work", correct: false, explanation: "The type of task isn't the limiting factor — the conservation of energy applies to every kind of mechanical work, lifting or otherwise." },
          { text: "Because gravity actively removes energy from every machine", correct: false, explanation: "Gravity doesn't remove energy from a system on its own — friction converting motion into heat is the actual reason real output work is slightly less than input work." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Lever mechanical advantage (effort arm ÷ load arm)"
        fields={[
          { key: "effortArmLength", label: "Effort arm length (m)", defaultValue: 2, step: 0.1 },
          { key: "loadArmLength", label: "Load arm length (m)", defaultValue: 0.5, step: 0.1 },
        ]}
        resultLabel="Mechanical advantage (×)"
        formula="leverMechanicalAdvantage"
        formatResult="number"
      />
      <EntryCalculator
        title="Wheel and axle mechanical advantage (wheel radius ÷ axle radius)"
        fields={[
          { key: "wheelRadius", label: "Wheel radius (cm)", defaultValue: 1.5, step: 0.1 },
          { key: "axleRadius", label: "Axle radius (cm)", defaultValue: 0.3, step: 0.1 },
        ]}
        resultLabel="Mechanical advantage (×)"
        formula="wheelAndAxleMechanicalAdvantage"
        formatResult="number"
      />
      <EntryCalculator
        title="Screw mechanical advantage (handle circumference ÷ thread pitch)"
        fields={[
          { key: "handleRadius", label: "Handle radius (cm)", defaultValue: 15, step: 0.5 },
          { key: "threadPitch", label: "Thread pitch — advance per turn (cm)", defaultValue: 0.3, step: 0.05 },
        ]}
        resultLabel="Mechanical advantage (×)"
        formula="screwMechanicalAdvantage"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Look at a pair of scissors and identify the fulcrum, effort, and load — it's a first-class lever pair, doubled.",
          "Next time you use a ramp, a hand truck, or a bottle opener, notice which direction the trade-off runs: less force, more distance, or the reverse.",
          "Try the calculator above with a real door — the hinge is the fulcrum, and pushing near the handle (long effort arm) is far easier than pushing near the hinge (short effort arm).",
          "Read the related entry on Forces & Motion to connect mechanical advantage back to F = ma and Newton's laws.",
          "Try the wheel-and-axle and screw calculators above with a car jack's or screwdriver's real dimensions to see how large the mechanical advantage of a screw actually gets.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are the 6 simple machines?", answer: "Lever, pulley, wheel and axle, inclined plane, wedge, and screw. Every more complex mechanical device — scissors, cars, can openers, staircases — is built from combinations of these six." },
          { question: "Do simple machines create energy?", answer: "No. Ignoring friction, a simple machine conserves total work — it only trades the balance between force and distance. Real machines actually lose a small amount of energy to friction, so output work is always slightly less than input work, never more." },
          { question: "What is mechanical advantage?", answer: "The ratio by which a machine multiplies input force. A mechanical advantage of 4 means 1 unit of effort force can move (or balance) 4 units of load force, at the cost of the effort moving roughly 4 times farther than the load." },
          { question: "Why does a longer ramp make it easier to push something heavy?", answer: "A longer ramp (for the same height) has a higher mechanical advantage — length divided by height — which reduces the force needed to push an object up it, at the cost of pushing it over a longer distance." },
          { question: "How does a pulley make lifting easier?", answer: "A single fixed pulley only redirects the force, with no force reduction. Adding movable pulleys increases the number of rope segments supporting the load, and mechanical advantage equals that number of supporting segments — more segments means less required pulling force." },
          { question: "How does a screwdriver or steering wheel multiply force?", answer: "Both are a wheel and axle: mechanical advantage equals the wheel's radius divided by the axle's radius. A wide handle turning a thin shaft multiplies the turning force delivered at the shaft, at the cost of your hand sweeping through a much larger circle than the shaft itself turns." },
          { question: "Why can a small car jack lift a car that weighs a ton or more?", answer: "A car jack is a screw. Its mechanical advantage equals the circular distance the handle travels per turn divided by how far the screw advances per turn (its thread pitch) — a fine pitch relative to a long handle produces an enormous force multiplier, which is why many turns are needed to raise the car just a small amount." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
