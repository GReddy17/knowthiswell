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
  title: "How Your Phone Knows Which Way Is Up (The Accelerometer)",
  category: "technology-basics",
  order: 80,
  subtopic: "everyday-tech-curiosities",
  tags: ["accelerometer", "gyroscope", "screen rotation", "sensors", "technology basics", "everyday tech"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "A phone senses which way is up by measuring how Earth's gravity splits across three internal axes, not with a compass or GPS.",
  summary: "A phone's accelerometer constantly measures how the constant pull of Earth's gravity is distributed across its three internal axes (X, Y, and Z), and by comparing how that distribution shifts as the phone tilts, it determines orientation and drives features like screen auto-rotation — a sense-compare-adjust feedback loop entirely separate from the compass or GPS.",
  sources: [
    { label: "MDN Web Docs — DeviceMotionEvent", url: "https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent" },
    { label: "IEEE — Institute of Electrical and Electronics Engineers", url: "https://www.ieee.org/" },
    { label: "NIST — National Institute of Standards and Technology", url: "https://www.nist.gov/" },
  ],
  seeAlso: [
    "technology-basics/how-gps-finds-your-location",
    "technology-basics/how-airplane-mode-actually-works",
    "technology-basics/how-autocorrect-predicts-your-words",
  ],
  glossary: [
    { term: "Accelerometer", definition: "A sensor that measures acceleration, including the constant acceleration caused by Earth's gravity, along one or more axes." },
    { term: "Gyroscope", definition: "A sensor that measures the rate of rotation around an axis, used alongside an accelerometer to more precisely track a device's orientation during motion." },
    { term: "MEMS", definition: "Micro-Electromechanical Systems — tiny mechanical sensing structures, smaller than a grain of rice, etched directly onto a chip, which is how modern accelerometers and gyroscopes are built small and cheaply enough to fit inside a phone." },
    { term: "Inertial measurement unit (IMU)", definition: "A combined sensor package, typically including an accelerometer and a gyroscope (and sometimes a magnetometer), whose readings are merged together to produce a more accurate and stable sense of a device's orientation and motion." },
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
          "A phone's accelerometer constantly senses the direction of Earth's gravity across three internal axes, and it's that reading — not the compass or GPS — that tells the phone which way is up.",
          "Screen auto-rotation is a feedback loop: sense the gravity direction, compare it to the current orientation, and adjust the display if the tilt crosses a threshold.",
          "During real physical motion — a workout, a bumpy vehicle ride — the accelerometer senses gravity mixed together with actual movement, which is exactly why auto-rotation can misbehave in those situations even though the phone's orientation logic is working correctly.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Imagine holding a small marble balanced inside a box with sensors on three of its inner walls. However you tilt the box, gravity always pulls the marble toward the same wall — straight down — and the sensors can tell exactly how that pull is split between the three walls to figure out the box&apos;s orientation. A phone&apos;s <TermLink href="/technology-basics/how-your-phone-knows-which-way-is-up">accelerometer</TermLink> works on the same idea: it constantly senses how Earth&apos;s steady downward pull is distributed across its three internal axes, and from that split alone, the phone can tell which way is up — no compass and no GPS required.</div>}
        detailed={<div className="prose-p">This is a <strong>feedback loop</strong> — sense a signal, compare it to a reference, adjust the output — running continuously in the background. A modern <TermLink href="/technology-basics/how-your-phone-knows-which-way-is-up">accelerometer</TermLink> is built using <TermLink href="/technology-basics/how-your-phone-knows-which-way-is-up">MEMS</TermLink> technology: a microscopic mechanical structure on a chip that shifts slightly under acceleration, including the constant 1g acceleration caused by gravity, and that shift is measured separately along the X, Y, and Z axes. When the phone tilts, gravity&apos;s pull redistributes across those three axes differently, and the operating system compares the new reading against orientation thresholds to decide whether to rotate the display. An edge case worth knowing: an accelerometer alone can&apos;t distinguish gravity from real movement — both show up as acceleration — so during a workout or a bumpy vehicle ride, actual motion gets mixed into the same reading gravity does, causing occasional erratic auto-rotation. To handle this, phones combine the accelerometer with a <TermLink href="/technology-basics/how-your-phone-knows-which-way-is-up">gyroscope</TermLink>, which measures rotation rate instead of gravity direction, into an <TermLink href="/technology-basics/how-your-phone-knows-which-way-is-up">inertial measurement unit (IMU)</TermLink> that blends both readings for a steadier, more accurate sense of orientation than either sensor could produce alone.</div>}
      />
      <FootnoteAside>A phone lying flat on a table, screen facing up, has no clear tilt toward any one side — that near-flat orientation is a deliberately defined dead zone the operating system ignores for auto-rotation triggers, which is why the screen doesn&apos;t flicker between orientations when a phone is set down flat.</FootnoteAside>
      <p>
        The clearest way to see the accelerometer&apos;s actual job is to look at what changes, and what doesn&apos;t, when a phone is simply rotated in place without being physically moved through space.
      </p>
      <QuickCheck
        question="A phone sitting still is rotated slowly from portrait to landscape, with no other movement involved. What is the accelerometer actually detecting to trigger the screen rotation?"
        options={[
          { text: "A change in magnetic field direction, similar to how a compass works", correct: false, explanation: "Magnetic field direction is what a separate sensor, the magnetometer (compass), detects — the accelerometer's job is sensing the direction of gravity's pull, not magnetic north." },
          { text: "A shift in how Earth's constant gravitational pull is distributed across the phone's X, Y, and Z axes as it tilts", correct: true, explanation: "Correct. The accelerometer continuously measures gravity's pull along three axes, and rotating the phone changes how that pull is split between them, which the OS interprets as a change in orientation." },
          { text: "A change in GPS-calculated position as the phone moves", correct: false, explanation: "GPS calculates location from satellite signals and has nothing to do with detecting a device's tilt or orientation — that's the accelerometer's role." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Rotating a phone from portrait to landscape at rest (baseline case)</h3>
      <div className="prose-p">
        Holding a phone still and turning it 90 degrees from portrait to landscape, the accelerometer detects gravity&apos;s pull shifting from being concentrated on one axis to being concentrated on a different one. Once that shift crosses the operating system&apos;s defined threshold, the screen rotates to match, all without needing input from the compass, GPS, or camera — the entire process runs on gravity-direction sensing alone.
      </div>
      <QuickCheck
        question="Why doesn't the compass (magnetometer) need to be involved for a phone to correctly rotate its screen between portrait and landscape?"
        options={[
          { text: "Because screen orientation is determined by sensing the direction of gravity's pull via the accelerometer, which is a separate function from sensing magnetic north", correct: true, explanation: "Correct. The accelerometer handles up/down tilt detection through gravity, entirely independent of the compass, which senses magnetic heading for direction-finding instead." },
          { text: "Because phones don't actually have a compass sensor at all", correct: false, explanation: "Many phones do include a magnetometer for compass and direction-based features — it's simply a different sensor performing a different job than screen-rotation detection." },
          { text: "Because the compass is only used when the phone is charging", correct: false, explanation: "The compass sensor's use has nothing to do with charging state — it's used for direction-finding features like map heading, unrelated to screen auto-rotation." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Auto-rotation during a workout or a bumpy vehicle ride (edge case / variation)</h3>
      <div className="prose-p">
        Using a phone during a workout or on a bumpy car or train ride, screen auto-rotation can behave erratically — flipping orientation unexpectedly or failing to respond to an intentional turn. This happens because the accelerometer measures total acceleration, and it can&apos;t fully separate the steady pull of gravity from the genuine physical acceleration of jostling, bouncing, or swinging motion; both arrive as changes along the same three axes. Combining the accelerometer with a gyroscope, which tracks rotation rate rather than gravity direction, helps smooth this out by giving the system a second, independent signal to check against, though it doesn&apos;t eliminate the ambiguity entirely during especially vigorous motion.
      </div>
      <QuickCheck
        question="Why is auto-rotation more likely to misbehave during a workout or a bumpy vehicle ride than while sitting still?"
        options={[
          { text: "The accelerometer measures total acceleration, so real physical motion gets mixed in with the gravity signal it uses to detect orientation, making the two harder to tell apart", correct: true, explanation: "Correct. Gravity and genuine movement both register as acceleration along the same axes, so vigorous motion can confuse the gravity-based tilt reading auto-rotation depends on." },
          { text: "The phone automatically disables its accelerometer during physical activity to save battery", correct: false, explanation: "The accelerometer keeps running during physical activity — the erratic behavior comes from motion interfering with its gravity reading, not from the sensor being turned off." },
          { text: "GPS signal loss during motion is what causes the rotation errors", correct: false, explanation: "Screen rotation doesn't rely on GPS at all — the erratic behavior traces back to the accelerometer's inherent difficulty separating gravity from real movement, unrelated to satellite signal." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A phone lying flat on a table doesn&apos;t randomly flip orientation (real-world / applied case)</h3>
      <p>
        A phone resting flat on a table, screen facing up, stays in whatever orientation it was last in rather than flickering between portrait and landscape, even though gravity is technically pulling straight down through the screen with no strong tilt toward any one side. This isn&apos;t a limitation of the accelerometer — it&apos;s a deliberate design choice: near-flat readings fall into a defined dead zone that the operating system ignores for triggering rotation, specifically to prevent the screen from flipping unpredictably whenever a phone is simply set down on a surface.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Three accelerometer axes splitting Earth's gravity"
        type="detail"
        svgSrc="/diagrams/technology-basics-how-your-phone-knows-which-way-is-up-three-axis.svg"
        altText="Diagram of a phone with three labeled accelerometer axes, X across the screen, Y up the screen, and Z out of the screen face, with a downward-pointing gravity vector arrow, showing how the phone splits the constant pull of gravity across the X, Y, and Z axes differently depending on how it is tilted, which is how it determines orientation."
      />
      <p>
        Whichever way the phone tilts, gravity&apos;s pull redistributes across these three axes in a predictable pattern — that redistribution alone is the entire signal orientation detection runs on.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the compass (magnetometer) is what tells a phone which way is up.", fix: "The compass senses magnetic north for directional heading; the accelerometer senses gravity's pull to determine up/down orientation — they're separate sensors doing separate jobs." },
          { mistake: "Blaming auto-rotate failures on a table or flat surface as a bug.", fix: "Near-flat orientation is a deliberately defined dead zone the operating system ignores for rotation triggers, to avoid the screen flickering unpredictably when set down." },
          { mistake: "Expecting perfect auto-rotation behavior during vigorous physical motion.", fix: "The accelerometer can't fully separate gravity from real acceleration during workouts or bumpy rides, which is an inherent sensing limitation, not a defect." },
          { mistake: "Thinking accelerometers only matter for games or fitness tracking.", fix: "The accelerometer also drives everyday UI behavior like screen auto-rotation, which most people rely on without realizing which sensor is behind it." },
        ]}
      />
      <MisconceptionCallout
        myth="The phone's compass is what detects orientation and controls screen rotation."
        reality={<p>Screen orientation is determined by the accelerometer, a separate sensor that measures the direction of Earth&apos;s gravitational pull across three internal axes — not the compass (magnetometer), which senses magnetic north for direction-finding features like map heading. An accelerometer alone measures total acceleration, which is why many phones also add a gyroscope, forming an inertial measurement unit that combines both readings for steadier orientation tracking, especially during real physical motion.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate tilt angle from accelerometer axis readings"
        description="A simplified illustration of the core math behind orientation sensing: the ratio of gravity sensed on two accelerometer axes reveals the tilt angle between them, in degrees from vertical."
        fields={[
          { key: "xAxisG", label: "Gravity sensed on X-axis (g)", defaultValue: 0.5 },
          { key: "zAxisG", label: "Gravity sensed on Z-axis (g)", defaultValue: 0.87 },
        ]}
        resultLabel="Estimated tilt angle from vertical (degrees)"
        formula="accelerometerTiltAngleDegrees"
        formatResult="number"
        disclaimer="This shows only the basic two-axis tilt relationship. Real orientation sensing combines all three axes at once and, on most phones, blends in gyroscope data for a steadier reading during motion."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Recognize that auto-rotate is driven by the accelerometer sensing gravity's direction, not the compass or GPS.",
          "Expect occasional auto-rotate hiccups during workouts or vehicle travel — that's an inherent motion-versus-gravity ambiguity, not a broken phone.",
          "Use a manual orientation lock in situations, like reading in bed at an odd angle, where you don't want gravity-based auto-rotation at all.",
          "Don't be surprised that a phone lying flat on a table won't rotate — that's an intentional dead zone, not a malfunction.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does a phone know which way is up?", answer: "An internal accelerometer continuously measures how Earth's constant gravitational pull is distributed across its three axes, and the operating system uses that distribution to determine orientation." },
          { question: "What sensor controls screen rotation?", answer: "The accelerometer, often combined with a gyroscope in an inertial measurement unit for steadier readings, controls screen auto-rotation by sensing changes in gravity's direction relative to the device." },
          { question: "Is screen rotation the same as the compass?", answer: "No. The compass (magnetometer) senses magnetic north for direction-finding; screen rotation relies on the accelerometer sensing gravity's pull, a completely separate sensor and function." },
          { question: "Why does my phone screen randomly rotate during a workout?", answer: "An accelerometer measures total acceleration, so real physical motion during a workout gets mixed into the same reading it uses to sense gravity's direction, occasionally confusing the orientation detection." },
          { question: "What is the difference between an accelerometer and a gyroscope?", answer: "An accelerometer measures acceleration, including gravity's constant pull, which reveals orientation; a gyroscope measures rotation rate. Phones typically combine both for more accurate, stable motion and orientation tracking." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
