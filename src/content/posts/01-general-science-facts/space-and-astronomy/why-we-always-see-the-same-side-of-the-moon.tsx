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
  title: "Why We Always See the Same Side of the Moon",
  category: "general-science-facts",
  order: 62,
  subtopic: "space-and-astronomy",
  pillar: true,
  videoQueue: true,
  tags: ["moon", "tidal locking", "astronomy", "orbital mechanics", "far side of the moon"],
  date: "2026-09-22",
  updated: "2026-09-22",
  lastReviewed: "2026-09-22",
  excerpt: "The Moon isn't frozen in place — it spins on its own axis. It just spins at exactly the same rate it orbits Earth, so the same face stays pointed our way.",
  summary: "From Earth, we only ever see one face of the Moon because its rotation period and its orbital period are locked to the exact same length — about 27.3 days for both. This is called tidal locking, a result of Earth's gravity dragging on a slight bulge in the Moon over billions of years until the Moon's spin matched its orbit. The Moon still rotates; it just rotates in perfect sync, so the far side stays permanently turned away from us, not permanently dark.",
  sources: [
    { label: "NASA Science — Earth's Moon: In Depth", url: "https://science.nasa.gov/moon/facts/" },
    { label: "NASA — Tidal Locking and the Moon's Rotation", url: "https://moon.nasa.gov/resources/430/tidal-locking/" },
    { label: "NASA — Luna 3 and the First Images of the Moon's Far Side", url: "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1959-008A" },
  ],
  seeAlso: [
    "general-science-facts/solar-system-and-planets",
    "general-science-facts/space-stars-and-the-universe",
    "general-science-facts/space-exploration-and-technology",
    "general-science-facts/forces-and-motion",
  ],
  glossary: [
    { term: "Tidal locking", definition: "A state where an orbiting body's rotation period matches its orbital period exactly, so the same face always points toward the object it orbits." },
    { term: "Synchronous rotation", definition: "Another name for tidal locking — the object's spin and orbit are synchronized to the same length of time." },
    { term: "Libration", definition: "A slight wobble in the Moon's apparent orientation as seen from Earth, caused by its elliptical orbit and tilted axis, that lets viewers see slightly more than 50% of its surface over time." },
    { term: "Tidal bulge", definition: "A stretched, slightly elongated shape a moon or planet develops when a nearby body's gravity pulls harder on its near side than its far side." },
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
          "The Moon does rotate on its own axis — it's not \"frozen\" — but its rotation takes exactly as long as one orbit around Earth, about 27.3 days, so the same face always points our way.",
          "This match between spin rate and orbit rate is called tidal locking, and it's the result of Earth's gravity dragging on a slight bulge in the Moon's shape until the Moon's rotation slowed down to match its orbit, likely within the first few hundred million years after it formed.",
          "The \"far side\" of the Moon isn't dark — it gets just as much sunlight as the near side over a lunar month. It's simply the half that never faces Earth, and humans didn't see a photo of it until a Soviet probe flew past in 1959.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Imagine a dance partner walking a slow circle around you while always facing you — from your side, you&apos;d never see the back of their head, but they&apos;d still be turning their whole body the entire time. That&apos;s what the Moon is doing. It orbits Earth roughly every 27.3 days, and it also spins on its own axis roughly every 27.3 days. Because those two numbers match exactly, the same lunar face stays pointed at Earth the entire orbit, and the other half stays permanently turned away — what most people call the &quot;dark side,&quot; even though it isn&apos;t dark at all.</div>}
        detailed={<div className="prose-p">This match is called <TermLink href="/general-science-facts/why-we-always-see-the-same-side-of-the-moon">tidal locking</TermLink> (also called <TermLink href="/general-science-facts/why-we-always-see-the-same-side-of-the-moon">synchronous rotation</TermLink>), and it isn&apos;t a coincidence — it&apos;s the predictable end state of gravity acting on a non-perfectly-round body over a very long time. Early in the Moon&apos;s history, Earth&apos;s gravity pulled slightly harder on the near side of the Moon than the far side, stretching it into a very slight <TermLink href="/general-science-facts/why-we-always-see-the-same-side-of-the-moon">tidal bulge</TermLink>. As long as the Moon was spinning faster than it orbited, that bulge kept getting dragged out of direct alignment with Earth, and Earth&apos;s gravity kept tugging it back — a constant gravitational braking torque that slowed the Moon&apos;s rotation down, bit by bit, until the spin and the orbit matched exactly. Once they matched, the bulge stayed aligned with Earth and the braking force dropped to zero, locking the rotation in place. This same process is currently, very slowly, doing the reverse to Earth: the Moon&apos;s pull is gradually slowing Earth&apos;s rotation too, lengthening our day by about 1.8 milliseconds per century.</div>}
      />
      <FootnoteAside>Tidal locking isn&apos;t unique to our Moon — most large moons in the solar system, including all four of Jupiter&apos;s big Galilean moons and Saturn&apos;s Titan, are tidally locked to their planets for the exact same gravitational reason.</FootnoteAside>

      <p>
      Because the lock is on rotation speed, not on exact orientation, Earth-bound observers actually get to see a little more than a strict 50% of the Moon over time — which is where the next wrinkle in the story comes in.
      </p>

      <QuickCheck
        question="If the Moon didn't rotate on its own axis at all, what would an observer on Earth eventually see?"
        options={[
          { text: "The exact same view we see today, since the Moon would still always face Earth", correct: false, explanation: "A truly non-rotating Moon would NOT keep the same face toward Earth — as it orbited, every side would eventually swing into view, the opposite of what tidal locking produces." },
          { text: "Every side of the Moon would eventually rotate into view as it orbited, once per orbit", correct: true, explanation: "Correct. A non-rotating Moon, viewed from an orbiting Earth, would appear to slowly turn once per orbit from our perspective — we'd eventually see every side. The Moon only shows us one face because it IS rotating, at exactly the rate needed to cancel that apparent turning out." },
          { text: "The Moon would appear to spin much faster than it does now", correct: false, explanation: "The opposite relationship holds — the Moon's real spin rate exactly matches its orbital rate. Removing its rotation entirely wouldn't speed anything up; it would reveal every side of the Moon over the course of an orbit instead of hiding the far side." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A full lunar orbit (baseline case)</h3>
      <div className="prose-p">
      Track the Moon across one full 27.3-day orbit around Earth. At every point along that path, the same lunar features — the same craters, the same dark maria &quot;seas&quot; that form the familiar face pattern — point toward Earth. The Moon has completed one full rotation on its own axis by the time it completes one full orbit, so the near side never changes, no matter where in the orbit the Moon currently sits.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Libration, the wobble that reveals extra terrain (edge case / variation)</h3>
      <div className="prose-p">
      The Moon&apos;s orbit isn&apos;t a perfect circle and its axis is slightly tilted relative to its orbital plane, so its rotation and orbital position don&apos;t stay in perfect lockstep at every instant — only on average. This produces <TermLink href="/general-science-facts/why-we-always-see-the-same-side-of-the-moon">libration</TermLink>, a slow apparent wobble that lets Earth-based observers see slightly past the edges of the near side over weeks and months. Add it all up, and roughly 59% of the Moon&apos;s surface becomes visible from Earth at one time or another, even though we only ever see one true hemisphere at any given moment.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Seeing the far side for the first time (real-world / applied case)</h3>
      <div className="prose-p">
      Because the far side never faces Earth, no human saw what it looked like until October 1959, when the Soviet Luna 3 probe flew around the Moon and radioed back the first blurry photographs. Those images revealed a surface strikingly different from the near side — far fewer of the large, dark, smooth maria that make up the familiar &quot;face&quot; pattern, and far more heavily cratered highland terrain, a difference still studied today to understand why the Moon&apos;s crust is thicker on that side.
      </div>

      <QuickCheck
        question="Why did it take until 1959 for anyone to see what the Moon's far side actually looks like?"
        options={[
          { text: "The far side is permanently dark, so no camera could photograph it until artificial lighting technology existed", correct: false, explanation: "The far side receives just as much sunlight as the near side over the course of a lunar month — it's turned away from Earth, not away from the Sun. Darkness was never the obstacle." },
          { text: "Because the Moon is tidally locked, the far side never faces Earth, so it had to be photographed by a spacecraft that could fly around and behind the Moon", correct: true, explanation: "Correct. Tidal locking keeps that hemisphere permanently turned away from every possible Earth-based viewpoint, telescope included — reaching it required a spacecraft, which Luna 3 accomplished in 1959." },
          { text: "Telescopes before 1959 simply weren't powerful enough to see any part of the Moon clearly", correct: false, explanation: "Telescopes had resolved fine detail on the Moon's near side for centuries before 1959 — the far side wasn't a resolution problem, it was a geometry problem, since no line of sight from Earth can ever reach it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Tidal locking: same rotation and orbit period keep one face toward Earth"
        type="detail"
        svgSrc="/diagrams/general-science-facts-why-we-always-see-the-same-side-of-the-moon.svg"
        altText="Diagram showing the Moon at four positions around its orbit of Earth, with the same marked face of the Moon pointed toward Earth at every position, illustrating that the Moon's rotation period exactly matches its orbital period."
      />
      <p>
      Follow the marked face of the Moon around all four orbital positions in the diagram — it stays pointed at Earth the entire way around, which only happens because the Moon is quietly completing one full spin on its own axis during that same trip.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the Moon doesn't rotate at all.", fix: "The Moon rotates on its own axis just like Earth does — it completes one full rotation roughly every 27.3 days, which happens to exactly equal the length of its orbit." },
          { mistake: "Calling the far side the \"dark side of the Moon.\"", fix: "The far side gets sunlight on the same cycle as the near side; it's just permanently turned away from Earth, not away from the Sun. \"Far side\" is the accurate term." },
          { mistake: "Assuming tidal locking is something special about our Moon specifically.", fix: "It's a common outcome of gravity acting on any moon close to its planet over a long enough time — most large moons in the solar system, including Jupiter's and Saturn's biggest, are tidally locked too." },
        ]}
      />
      <MisconceptionCallout
        myth="The far side of the Moon is permanently dark, which is why we never see it."
        reality={<p>The far side of the Moon receives sunlight on the exact same roughly 29.5-day cycle as the near side — it has its own day and night, just like the side facing us. The reason we never see it has nothing to do with light: it&apos;s because the Moon is tidally locked, meaning its rotation period exactly matches its orbital period around Earth, so the same hemisphere always faces us and the other hemisphere always faces away, regardless of how much sunlight either side is getting at any given moment.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you look at the Moon, notice that the same craters and dark maria patterns are always in the same place relative to each other — that stability is tidal locking on display.",
          "Look up NASA's Luna 3 and later Apollo-era photographs of the far side to compare its heavily cratered highlands against the near side's smoother maria.",
          "If you're curious about the mechanism further, read up on how the Moon is very gradually slowing Earth's own rotation through the same tidal process, in reverse.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Does the Moon actually rotate?", answer: "Yes. The Moon completes one full rotation on its own axis roughly every 27.3 days — it just happens to take exactly as long as one orbit around Earth, which is why the same face always points our way." },
          { question: "Is the far side of the Moon really dark?", answer: "No. The far side gets sunlight on the same cycle as the near side, roughly a 29.5-day day/night cycle. It's called the \"far side\" because it faces away from Earth, not because it lacks sunlight." },
          { question: "Why is the Moon tidally locked to Earth?", answer: "Earth's gravity pulled harder on the Moon's near side than its far side early in its history, creating a slight tidal bulge. That bulge acted like a gravitational brake, slowing the Moon's rotation until it matched its orbital period exactly, at which point the braking force stopped." },
          { question: "Can we ever see the far side of the Moon from Earth?", answer: "Not directly with the naked eye or a telescope, but libration — a slight wobble caused by the Moon's tilted, slightly elliptical orbit — lets us glimpse a bit past the edges of the near side over time, bringing the total visible surface to about 59%." },
          { question: "When did humans first see the Moon's far side?", answer: "In October 1959, when the Soviet Luna 3 probe flew around the Moon and transmitted the first photographs back to Earth, revealing a heavily cratered surface quite different from the familiar near side." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
    </>
  );
}
