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
  title: "Waves & Vibrations: How Energy Travels Without Moving Matter",
  category: "general-science-facts",
  order: 11,
  subtopic: "physical-science",
  tags: [
    "waves",
    "vibrations",
    "frequency",
    "wavelength",
    "sound waves",
    "physical science",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How waves carry energy without carrying matter along with it, why frequency and wavelength trade off at a fixed speed, and how this explains sound, light, and ocean waves.",
  summary: "A wave is a repeating disturbance that transfers energy from one place to another without permanently moving the medium it travels through.",
  sources: [
    { label: "NASA Science — Electromagnetic Spectrum and Waves", url: "https://science.nasa.gov/ems/" },
    { label: "NIST — Physical Measurement Laboratory: Sound and Acoustics", url: "https://www.nist.gov/pml" },
    { label: "Encyclopaedia Britannica — Wave (Physics)", url: "https://www.britannica.com/science/wave-physics" },
  ],
  seeAlso: [
    "general-science-facts/light-color-and-sound",
    "general-science-facts/energy-types-and-conservation",
    "general-science-facts/forces-and-motion",
  ],
  glossary: [
    { term: "Wave", definition: "A repeating disturbance that transfers energy from one point to another without permanently transporting the matter it travels through." },
    { term: "Frequency", definition: "The number of complete wave cycles passing a point per second, measured in hertz (Hz)." },
    { term: "Wavelength", definition: "The distance between two equivalent points on consecutive wave cycles, such as crest to crest." },
    { term: "Amplitude", definition: "The maximum displacement of a wave from its resting position — larger amplitude means more energy, and for sound, more volume." },
    { term: "Mechanical wave", definition: "A wave that requires a physical medium (like air, water, or a solid) to travel through, such as sound or ocean waves." },
    { term: "Electromagnetic wave", definition: "A wave, such as light or radio waves, that can travel through empty space with no medium required." },
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
          "A wave transfers energy from place to place without permanently carrying the matter it moves through — a floating buoy bobs up and down as a wave passes but doesn't travel with it.",
          "Frequency and wavelength trade off at a fixed wave speed: higher frequency always means shorter wavelength, and vice versa, for a wave moving through the same medium.",
          "This one relationship — speed = frequency × wavelength — governs sound, light, radio waves, and ocean waves alike, even though they're physically very different phenomena.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/general-science-facts/waves-and-vibrations">wave</TermLink> is a repeating disturbance that carries energy from one place to another. Drop a stone in a pond and ripples spread outward, but the water itself mostly just bobs up and down in place — it&apos;s the disturbance, and the energy, that travels outward, not the water molecules themselves. Sound is a wave of pressure moving through air; light is a wave of electromagnetic energy that can even travel through empty space.</div>}
        detailed={<div className="prose-p">Every repeating wave has a <TermLink href="/general-science-facts/waves-and-vibrations">frequency</TermLink> (how many cycles pass a point per second, in hertz) and a <TermLink href="/general-science-facts/waves-and-vibrations">wavelength</TermLink> (the physical distance between equivalent points on consecutive cycles). These two are linked to wave speed by one equation: speed = frequency × wavelength. For a wave moving through a fixed medium at a fixed speed (like sound in room-temperature air, always around 343 m/s), frequency and wavelength must trade off — a higher-pitched sound has a higher frequency and, necessarily, a shorter wavelength. Waves also split into two broad categories: <TermLink href="/general-science-facts/waves-and-vibrations">mechanical waves</TermLink> (sound, ocean waves, earthquake waves) that need a physical medium to travel through, and <TermLink href="/general-science-facts/waves-and-vibrations">electromagnetic waves</TermLink> (light, radio, X-rays) that need no medium at all and can cross the vacuum of space.</div>}
      />
      <FootnoteAside>Sound cannot travel through the vacuum of space, since it&apos;s a mechanical wave requiring a medium like air to compress and carry it — every &quot;explosion sound&quot; in a space movie is, strictly, physically impossible in true vacuum.</FootnoteAside>

      <p>
      That speed–frequency–wavelength relationship stops being abstract the moment you plug in real numbers for a sound you actually hear, which is exactly where it becomes something you can calculate.
      </p>

      <QuickCheck
        question="A siren's pitch gets noticeably higher (higher frequency) while its speed through the air stays essentially constant. What must happen to its wavelength?"
        options={[
          { text: "The wavelength gets shorter, since speed = frequency × wavelength and speed isn't changing", correct: true, explanation: "Correct. With wave speed fixed, frequency and wavelength are inversely linked — as frequency rises, wavelength must fall to keep their product (speed) constant." },
          { text: "The wavelength gets longer to match the higher frequency", correct: false, explanation: "This has the relationship backwards — at a fixed speed, higher frequency requires a shorter wavelength, not a longer one, since their product must stay constant." },
          { text: "The wavelength is unrelated to frequency", correct: false, explanation: "They're directly linked through wave speed (speed = frequency × wavelength) — for any wave moving at a given speed, changing one always changes the other." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Finding the wavelength of a musical note (baseline case)</h3>
      <div className="prose-p">
      The musical note A4 has a frequency of 440 Hz. Sound travels through room-temperature air at about 343 m/s. Rearranging speed = frequency × wavelength: wavelength = speed ÷ frequency = 343 ÷ 440 ≈ <strong>0.78 meters</strong> — a little under a meter between compressions in the sound wave, which is why musical instrument sizes (a violin string, an organ pipe) are physically tied to the pitches they produce.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why thunder booms low but lightning &quot;cracks&quot; high-pitched up close (edge case / variation)</h3>
      <div className="prose-p">
      Close to a lightning strike, the sound is a sharp, high-frequency crack; heard from a distance, that same event registers as a long, low rumble. This isn&apos;t a change in the wave physics of the strike itself — it&apos;s that higher-frequency components of the sound lose energy to air absorption faster than low-frequency components over long distances, so by the time the sound wave has traveled several kilometers, the high frequencies have faded out disproportionately, leaving mostly the low-frequency rumble. This same frequency-dependent absorption is why distant fireworks sound like dull thumps while nearby ones crack sharply.
      </div>

      <QuickCheck
        question="Why does the same thunderclap sound like a sharp crack up close but a long, low rumble from several kilometers away?"
        options={[
          { text: "Higher-frequency sound components are absorbed by air faster over distance than lower-frequency ones, leaving mostly low frequencies by the time the sound reaches a distant listener", correct: true, explanation: "Correct. Air absorbs higher-frequency sound more readily than lower-frequency sound over long distances, so distant thunder loses its sharp high-frequency crack and is left dominated by the low rumble." },
          { text: "The lightning strike itself produces a different sound depending on the listener's distance", correct: false, explanation: "The source event (the strike) produces one physical sound — what changes as it travels is which frequencies survive the trip through the air, not the source itself changing behavior." },
          { text: "Sound waves physically slow down as they travel farther, lowering their pitch", correct: false, explanation: "Sound speed in a given medium (like air at a given temperature) stays essentially constant regardless of distance traveled — pitch perception changes here come from frequency-dependent absorption, not speed changes." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How noise-cancelling headphones use wave interference (real-world / applied case)</h3>
      <div className="prose-p">
      Noise-cancelling headphones use a microphone to detect incoming sound waves, then generate a second sound wave that is an exact mirror image — same frequency and amplitude, but inverted, so its crests line up with the original wave&apos;s troughs. When the two waves combine, they cancel each other through destructive interference, largely eliminating the sound before it reaches your ear. This works especially well for steady, low-frequency background noise (engine hum, air conditioning) and less well for sudden, unpredictable, high-frequency sounds (sharp voices, clanks), because those change too fast for the system to generate an accurately timed inverted wave.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Wavelength, amplitude, and frequency on a wave curve"
        type="detail"
        svgSrc="/diagrams/general-science-facts-waves-and-vibrations-anatomy.svg"
        altText="A sine wave diagram with wavelength labeled as the horizontal distance between two consecutive crests, amplitude labeled as the vertical distance from the resting line to a crest, and a note indicating frequency as how many complete wave cycles pass a fixed point each second."
      />
      <p>
      Wavelength is measured crest to crest; amplitude is measured from the resting line up to a crest (or down to a trough), and controls how much energy the wave carries — for sound, that&apos;s volume; for light, that&apos;s brightness. Frequency isn&apos;t directly visible on a single snapshot of the wave — it&apos;s how many of these crest-to-crest cycles pass a fixed point every second, which is why frequency depends on both the wavelength and how fast the wave is traveling.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking a water wave physically carries water from one place to another.", fix: "A floating object mostly bobs up and down in place as a wave passes — it's the disturbance and energy that travel forward, not the water itself, except for a small amount of net drift near the surface." },
          { mistake: "Assuming higher frequency and higher amplitude are the same thing.", fix: "Frequency is how many cycles happen per second (linked to pitch for sound, color for light); amplitude is how big each cycle is (linked to volume for sound, brightness for light) — they're independent properties." },
          { mistake: "Believing sound can travel through the vacuum of space like light does.", fix: "Sound is a mechanical wave that needs a physical medium (like air) to compress and carry it — it cannot travel through a true vacuum, unlike electromagnetic waves such as light, which need no medium at all." },
        ]}
      />
      <MisconceptionCallout
        myth="A wave moving across the ocean physically pushes water from far away all the way to shore."
        reality={<p>Ocean waves are overwhelmingly a transfer of energy through water, not a bulk transport of the water itself. A piece of floating debris riding a wave mostly moves in a small circular or elliptical loop as each wave passes, ending up close to where it started, rather than being carried the full distance the wave traveled. Genuine large-scale water transport toward shore does happen, but through separate mechanisms like currents and the final wave-breaking process near the beach — not the open-ocean wave motion itself.</p>}
      />

      <QuickCheck
        question="A cork floats on the ocean far from shore as waves pass beneath it. What does the cork mostly do as each wave passes?"
        options={[
          { text: "It moves in a small circular or elliptical loop, ending up close to its starting position rather than traveling with the wave", correct: true, explanation: "Correct. In open water, wave energy passes through the water via small circular particle motion — the cork bobs through that loop repeatedly rather than being carried the full distance the wave travels." },
          { text: "It gets carried steadily toward shore at the same speed as the wave itself", correct: false, explanation: "This describes bulk water transport, which isn't how open-ocean waves mainly work — the wave is primarily an energy disturbance passing through water that returns close to its starting position after each cycle." },
          { text: "It stays perfectly still, unaffected by the wave passing beneath it", correct: false, explanation: "The cork is clearly displaced by the wave's energy — it just doesn't travel the same net distance as the wave itself, instead tracing a small loop." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Wave speed (frequency × wavelength)"
        fields={[
          { key: "frequencyHz", label: "Frequency (Hz)", defaultValue: 440, step: 1 },
          { key: "wavelengthM", label: "Wavelength (meters)", defaultValue: 0.78, step: 0.01 },
        ]}
        resultLabel="Wave speed (meters/second)"
        formula="waveSpeed"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Watch a floating leaf or debris in a pond as ripples pass beneath it — notice it mostly bobs in place rather than riding the wave to the edge.",
          "Try the calculator above with a bass note (~80 Hz) versus a high whistle (~4,000 Hz) at the same 343 m/s speed to see the wavelength difference.",
          "Next time thunder rumbles from a distance, connect the low, drawn-out sound to high frequencies being absorbed by the air over that distance.",
          "Read the related entry on Light, Color & Sound to see how this same wave math applies to the electromagnetic spectrum.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between frequency and wavelength?", answer: "Frequency is how many complete wave cycles pass a fixed point per second (measured in hertz). Wavelength is the physical distance between equivalent points on consecutive cycles. For a wave at fixed speed, they're inversely related: higher frequency means shorter wavelength." },
          { question: "Can sound travel through space?", answer: "No. Sound is a mechanical wave that requires a physical medium, like air, to compress and carry it. The vacuum of space has essentially no medium, so sound cannot travel through it — only electromagnetic waves like light and radio can." },
          { question: "Does a wave physically carry water or air along with it?", answer: "No, not in bulk. A wave mostly transfers energy through a medium, causing particles (or floating objects) to oscillate in place — a small circular loop for open-water waves — rather than being carried the full distance the wave travels." },
          { question: "How do noise-cancelling headphones work?", answer: "They generate a sound wave that is the exact inverse of incoming noise — matching frequency and amplitude but flipped — so the two waves combine through destructive interference and largely cancel each other out before reaching your ear." },
          { question: "What's the formula that connects wave speed, frequency, and wavelength?", answer: "Speed equals frequency multiplied by wavelength (speed = f × λ). For a wave moving at a fixed speed through a given medium, this means frequency and wavelength must trade off against each other." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
