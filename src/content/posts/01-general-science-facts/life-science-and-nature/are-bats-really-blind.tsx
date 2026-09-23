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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Are Bats Really Blind?",
  category: "general-science-facts",
  order: 51,
  subtopic: "life-science-and-nature",
  pillar: true,
  videoQueue: true,
  tags: ["bats", "echolocation", "vision", "animal senses", "misconceptions"],
  date: "2026-09-12",
  updated: "2026-09-12",
  lastReviewed: "2026-09-12",
  excerpt: "“Blind as a bat” is a real phrase but a false fact — nearly every bat species can see, and echolocation is a second sense layered on top of working eyes, not a replacement for them.",
  summary: "No bat species is actually blind. Most bats have functional eyes and use them, especially in daylight or open spaces; echolocation is an additional sense — active sound-based ranging — that lets them navigate and hunt with precision in total darkness where vision alone would fail.",
  sources: [
    { label: "U.S. Fish & Wildlife Service — Bat Facts", url: "https://www.fws.gov/species/bats" },
    { label: "Bat Conservation International — About Bats", url: "https://www.batcon.org/about-bats/" },
  ],
  seeAlso: [
    "general-science-facts/animal-kingdom-facts",
    "general-science-facts/light-color-and-sound",
    "general-science-facts/the-five-senses",
    "general-science-facts/waves-and-vibrations",
    "general-science-facts/real-parasites-that-control-their-hosts-behavior",
  ],
  glossary: [
    { term: "Echolocation", definition: "A biological sonar: an animal emits a sound and interprets the returning echo to sense objects around it." },
    { term: "Ultrasonic", definition: "Sound pitched above the upper limit of human hearing (above about 20,000 Hz)." },
    { term: "Doppler shift", definition: "A change in a wave's pitch caused by relative motion between the source and the listener." },
    { term: "Nocturnal", definition: "Active mainly at night rather than during the day." },
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
          "No bat species is truly blind — nearly all of the roughly 1,400 known species have functional eyes, and several fruit bats see about as well as humans do in dim light.",
          "Echolocation is an added sense, not a substitute for sight: it lets insect-hunting bats track fast, small prey in total darkness where eyes alone can't resolve enough detail.",
          "The phrase “blind as a bat” predates any real study of bat vision — it describes clumsy nighttime flying, not an anatomical fact.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Bats have eyes, and they work. What makes bats unusual isn&apos;t missing sight — it&apos;s the extra sense layered on top of it. Most bats that hunt insects at night use <TermLink href="/general-science-facts/are-bats-really-blind">echolocation</TermLink>: they shout a rapid, high-pitched call and listen for the echo bouncing back off whatever is nearby. Timing that echo tells the bat how far away something is, and small differences between its two ears tell it which direction the echo came from.</div>}
        detailed={<div className="prose-p">Bat vision splits along family lines. Microbats (the smaller, mostly insect-hunting group) tend to have small eyes and relatively coarse vision, but functional retinas with both rod and cone cells — they see shape, motion, and in some species even ultraviolet light, which helps them find flowers and avoid daytime predators. Megabats, the larger fruit- and nectar-feeding bats found mostly in Africa, Asia, and Australia, have large eyes and vision comparable to many nocturnal mammals; most megabat species don&apos;t echolocate at all and navigate purely by sight and smell. Where echolocation exists, it fills a gap vision can&apos;t: in full darkness, at close range, and against a fast-moving target like a moth, sound-based ranging beats eyesight&apos;s reliance on available light. The two senses solve different problems, which is why bats kept both instead of trading one for the other.</div>}
      />
      <FootnoteAside>Donald Griffin and Robert Galambos first confirmed bat echolocation experimentally in 1938, using an early ultrasound detector to prove bats were navigating by sound, not sight — before that, the mechanism was genuinely unknown.</FootnoteAside>

      <p>
      That&apos;s the mechanism in outline. The specific numbers behind it — how fast the calls fire, how short the delay is, and what a bat can actually resolve from it — are where the misconception really falls apart. Bats aren&apos;t the only animal behavior that sounds like fiction but holds up under real research — some <TermLink href="/general-science-facts/real-parasites-that-control-their-hosts-behavior">parasites genuinely do control their host&apos;s behavior</TermLink>, down to specific, measurable changes.
      </p>

      <QuickCheck
        question="A microbat that hunts moths at night is flying through a pitch-black cave. What is it primarily relying on to avoid the walls?"
        options={[
          { text: "Its eyes, adapted for extreme low light", correct: false, explanation: "Even excellent night vision needs some ambient light to work with. A pitch-black cave has none, which is exactly the scenario echolocation evolved for." },
          { text: "Echolocation — sound emitted and its echo timed", correct: true, explanation: "Correct. In light-free environments, active sound-based ranging works regardless of ambient light, which is why cave-dwelling insectivorous bats rely on it so heavily." },
          { text: "Whiskers, like a cat feeling its way", correct: false, explanation: "Bats don't have whiskers used this way. Some do sense airflow through wing membranes, but that's a minor input compared to echolocation for navigation." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Timing a single echo (baseline case)</h3>
      <div className="prose-p">
      Sound travels at roughly 343 meters per second in air at room temperature. If a bat&apos;s call bounces off a wall and returns 40 milliseconds (0.04 seconds) later, the round trip covered 343 &times; 0.04 = 13.7 meters — so the wall is half that, about 6.85 meters away. A bat&apos;s brain runs this same math, continuously, dozens of times per second.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Closing in on a moth (edge case / variation)</h3>
      <div className="prose-p">
      As a bat gets close to prey, the echo delay shrinks fast — at 1 meter away, the round trip is only about 1/343 &times; 2 &asymp; 5.8 milliseconds. To keep tracking a moving target at that range, many bats shift into a &quot;feeding buzz,&quot; firing calls up to 150-200 times per second instead of the 10-20 calls per second used for open-space cruising. Vision couldn&apos;t deliver that kind of rapid-fire distance update in darkness; echolocation is built for exactly this closing-speed problem.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why megabats mostly skip it (real-world / applied case)</h3>
      <div className="prose-p">
      Large fruit bats like flying foxes feed on stationary or slow-moving food — fruit and nectar in trees — in environments that usually have at least some moonlight or ambient light. Their large eyes and strong sense of smell solve that problem well enough that most megabat species never evolved echolocation at all. It&apos;s a case where the &quot;extra sense&quot; genuinely wasn&apos;t worth the metabolic cost, because the task (find a stationary fruit tree) doesn&apos;t need it the way hunting a dodging insect in total darkness does.
      </div>

      <QuickCheck
        question="Why do most large fruit bats (megabats) not use echolocation, while most small insect-hunting bats (microbats) do?"
        options={[
          { text: "Megabats are blind, so echolocation wouldn't help them anyway", correct: false, explanation: "The opposite is true — megabats generally have the best vision among bats. Good vision is part of why they didn't need to evolve echolocation." },
          { text: "Their food and environment don't demand it — stationary fruit in dim light favors eyes and smell over sound-ranging", correct: true, explanation: "Correct. Echolocation earns its metabolic cost when prey is fast, small, and encountered in total darkness. Stationary fruit under some ambient light doesn't create that pressure." },
          { text: "Echolocation only works underwater, and fruit bats fly, not swim", correct: false, explanation: "Echolocation works fine in air — it's how most microbats navigate. It's also used by some aquatic animals like dolphins, but air is where bat echolocation actually operates." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="A bat's call travels to a moth and echoes back"
        type="detail"
        svgSrc="/diagrams/general-science-facts-are-bats-really-blind-echolocation.svg"
        altText="Diagram showing a bat emitting an ultrasonic call that travels to a moth, and the echo bouncing back to the bat, with the round-trip time and pitch shift used to compute the moth's distance, direction, and speed."
      />
      <p>
      The outgoing call and the returning echo aren&apos;t identical — a moth moving away stretches the echo to a slightly lower pitch, and one closing in compresses it higher, the same <TermLink href="/general-science-facts/are-bats-really-blind">Doppler shift</TermLink> that makes a passing ambulance siren change pitch. Some bat species use that shift to sense a target&apos;s speed and direction, on top of its distance from timing alone.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming echolocation means a bat has no eyes or can't see at all.", fix: "Echolocating bats still have anatomically normal eyes and use them — for example, spotting a cave entrance or a predator silhouetted against the sky, tasks sound isn't especially good at." },
          { mistake: "Treating 'echolocation' and 'sonar' as if only bats and submarines use them.", fix: "The same active-sound-ranging principle is used by toothed whales and dolphins underwater, and by some cave-dwelling birds (oilbirds, some swiftlets) — it's a mechanism that's evolved independently more than once." },
          { mistake: "Thinking all bats hunt insects and all bats echolocate.", fix: "Of roughly 1,400 bat species, most megabats (fruit and nectar feeders) don't echolocate at all — the trait tracks hunting style and lighting conditions, not the whole order." },
        ]}
      />
      <MisconceptionCallout
        myth="Bats are blind."
        reality={<p>Every bat species studied has functional eyes, and most use them regularly. The phrase &quot;blind as a bat&quot; describes bats&apos; awkward, fluttering flight path in daylight — often just avoidance behavior or disorientation from bright light after a nocturnal lifestyle — not an anatomical absence of sight. Some fruit bat species have vision on par with cats in low light. Echolocation, where it exists, is a second sense that fills the specific gap vision can&apos;t: precise ranging on fast targets with zero ambient light.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Distance to an object from its echo's round-trip time"
        fields={[
          { key: "speedOfSoundMs", label: "Speed of sound (m/s)", defaultValue: 343, step: 1 },
          { key: "roundTripSeconds", label: "Echo round-trip time (seconds)", defaultValue: 0.04, step: 0.001 },
        ]}
        resultLabel="One-way distance to the object (meters)"
        formula="distanceFromEchoRoundTrip"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you hear “blind as a bat,” treat it as an idiom about clumsiness, not a claim about anatomy.",
          "Try the calculator above with a shorter round-trip time (like 0.006 seconds) to see how close a target has to be before a bat needs its rapid feeding-buzz call rate.",
          "Look up which bat species live in your region — most of North America and Europe's bats are microbats (echolocating insect-hunters), while megabats are concentrated in the Old World tropics.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Can bats see color?", answer: "Some can. Several bat species, including some microbats, have been shown to have both rod and cone photoreceptors, and a number of species can detect ultraviolet light that humans can't see at all." },
          { question: "Why do bats fly so erratically then, if they can see?", answer: "That fluttering path is usually the bat actively chasing fast-dodging insects using echolocation, adjusting course dozens of times per second — it looks erratic to us because we can't perceive the target it's tracking." },
          { question: "Do all bats echolocate?", answer: "No. Most microbats (small, mostly insect-eating bats) do; most megabats (large fruit and nectar bats) don't, relying instead on vision and smell. One megabat group, the Egyptian fruit bat, is a partial exception — it echolocates using tongue clicks, a simpler mechanism than the laryngeal calls microbats use." },
          { question: "Is echolocation the same thing as sonar?", answer: "Functionally yes — both work by emitting a signal and interpreting its reflection to sense distance and direction. Sonar is the human-engineered version; echolocation is the biological original, also used by dolphins, whales, and a few cave-nesting birds." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
    </>
  );
}
