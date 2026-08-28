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
  title: "Light, Color & Sound",
  category: "general-science-facts",
  order: 5,
  subtopic: "physical-science",
  tags: ["light", "sound", "waves", "color", "physics", "pitch and loudness", "decibels"],
  date: "2026-08-16",
  updated: "2026-08-19",
  lastReviewed: "2026-08-19",
  excerpt: "Why light and sound are both waves, why light travels a million times faster than sound, how color is really just wavelength, and the real difference between pitch and loudness.",
  summary: "Light and sound both travel as waves, but light is an electromagnetic wave that needs no medium while sound is a mechanical wave that needs one — which is why light reaches you almost instantly and sound noticeably lags behind, like in a thunderstorm.",
  sources: [
    { label: "NASA Science — Electromagnetic Spectrum", url: "https://science.nasa.gov/ems/01_intro/" },
    { label: "Encyclopaedia Britannica — Sound (physics)", url: "https://www.britannica.com/science/sound-physics" },
  ],
  seeAlso: [
    "general-science-facts/forces-and-motion",
    "general-science-facts/electricity-and-magnetism-basics",
  ],
  glossary: [
    { term: "Wavelength", definition: "The distance between successive peaks of a wave — determines color for light, pitch for sound." },
    { term: "Electromagnetic wave", definition: "A wave of electric and magnetic fields, like light, that can travel through empty space." },
    { term: "Mechanical wave", definition: "A wave that needs a physical medium (air, water, solid) to travel through, like sound." },
    { term: "Frequency", definition: "How many wave cycles pass a point per second, measured in hertz (Hz) — determines pitch for sound." },
    { term: "Amplitude", definition: "The size (height) of a wave's vibration — determines loudness for sound and brightness for light, independent of pitch or color." },
    { term: "Decibel (dB)", definition: "A logarithmic unit measuring sound intensity — every 10 dB increase represents roughly a 10-fold increase in sound energy, not a small linear step." },
  ],
  author: {
    slug: "james-h-rivers",
    name: "James H. Rivers",
    credentialLine: "Founder, KnowThisWell",
  },
  youtubeStatus: "scheduled",
  youtubeUrl: "https://www.youtube.com/watch?v=tF44O-pPidE",
  youtubeScheduledAt: "2026-08-30T16:00:00Z",
  draft: false,
};

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Light and sound are both waves, but fundamentally different kinds — light is electromagnetic and needs no medium; sound is mechanical and needs one (usually air).",
          "Light travels about a million times faster than sound, which is why you see lightning well before you hear thunder.",
          "Color is just the wavelength of visible light your eyes detect — red has the longest visible wavelength, violet the shortest.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Both <TermLink href="/general-science-facts/light-color-and-sound">light</TermLink> and sound travel as waves, carrying energy from one place to another. Light is made of electric and magnetic fields and can travel through empty space — that&apos;s how sunlight crosses millions of miles of vacuum to reach Earth. Sound is a vibration passing through a physical substance like air, water, or a solid wall — no air, no sound, which is why space is silent even during a massive explosion.</div>}
        detailed={<div className="prose-p">Light travels at about 300,000 km/second in a vacuum, while sound travels at roughly 343 meters/second in air at room temperature — light is faster by a factor of nearly a million. Both are described by <TermLink href="/general-science-facts/light-color-and-sound">wavelength</TermLink> and <TermLink href="/general-science-facts/light-color-and-sound">frequency</TermLink>: for light, wavelength determines color, with visible light spanning roughly 380–700 nanometers; for sound, wavelength and frequency determine pitch, with human hearing spanning roughly 20–20,000 hertz. Sound needs a medium because it&apos;s a pressure wave — molecules physically bump into each other to pass the vibration along, which is also why sound travels faster through denser media like water or steel than through air.</div>}
      />
      <FootnoteAside>Sound travels about 4.3 times faster in water than in air, and roughly 15 times faster in steel — which is why submarine sonar and old &quot;ear to the rail&quot; train-detection tricks both work.</FootnoteAside>

      <p>
      That huge speed difference between light and sound isn&apos;t just trivia — it&apos;s directly measurable in a very common weather event.
      </p>

      <QuickCheck
        question="During a thunderstorm, you see a lightning flash and count 5 seconds before hearing the thunder. What does that tell you?"
        options={[
          { text: "Nothing useful — light and sound always arrive at the same time from the same event", correct: false, explanation: "Light and sound travel at wildly different speeds, so they don't arrive together except from a source right next to you." },
          { text: "The lightning struck roughly 1.7 km away, based on sound's travel speed", correct: true, explanation: "Correct. Sound travels about 343 m/s, so 5 seconds × 343 m/s ≈ 1,715 meters. Light arrives almost instantly by comparison, so the gap is essentially all sound's travel time." },
          { text: "The lightning struck exactly 5 km away", correct: false, explanation: "That would only be true if sound traveled at 1 km/second — it travels much slower, around 343 m/s, so the actual distance is far less than 5 km." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Timing a thunderstorm&apos;s distance (baseline case)</h3>
      <div className="prose-p">
      Count the seconds between a lightning flash and its thunder, then multiply by sound&apos;s speed (about 343 m/s, or roughly 1 km per 3 seconds as a quick rule of thumb). A 9-second gap means the storm is about 3 km away — light&apos;s travel time is negligible enough to ignore entirely at these distances.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why a rainbow always appears opposite the sun (edge case / variation)</h3>
      <div className="prose-p">
      A rainbow forms when sunlight enters a raindrop, bends (refracts), reflects off the drop&apos;s back, and bends again exiting — and different wavelengths of light bend by slightly different amounts, spreading white light into its component colors. This only produces a visible rainbow at a specific ~42° angle relative to the sunlight&apos;s original direction, which is why a rainbow always appears in the patch of sky directly opposite the sun from where you&apos;re standing, never near the sun itself.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why noise-canceling headphones work (real-world / applied case)</h3>
      <div className="prose-p">
      Noise-canceling headphones use a microphone to detect incoming sound waves, then generate a new sound wave that&apos;s an exact mirror image (inverted) of the unwanted noise. When the original wave&apos;s high pressure lines up with the generated wave&apos;s low pressure, they cancel each other out — a direct, deliberate application of how sound waves add and subtract, called destructive interference.
      </div>

      <QuickCheck
        question="Noise-canceling headphones reduce unwanted sound by generating a new sound wave. What must be true about that generated wave for it to cancel the noise?"
        options={[
          { text: "It must be much louder than the original noise", correct: false, explanation: "Volume alone doesn't cancel sound — an equally loud but matching wave shape is what's needed, not simply overpowering it." },
          { text: "It must be an inverted mirror image of the noise wave, so the two cancel through destructive interference", correct: true, explanation: "Correct. When a wave's high-pressure point lines up exactly with another wave's low-pressure point, they cancel out — this is destructive interference, the working principle behind active noise cancellation." },
          { text: "It must be a completely different frequency from the noise", correct: false, explanation: "A different frequency wouldn't line up correctly to cancel the original wave — the generated wave has to closely match and invert the specific noise it's targeting." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 4: Pitch versus loudness, and why concerts damage hearing (real-world / applied case)</h3>
      <div className="prose-p">
      Frequency and <TermLink href="/general-science-facts/light-color-and-sound">amplitude</TermLink> control two completely independent properties of a sound wave: frequency (cycles per second) sets pitch — how high or low a sound is — while amplitude (the height of the wave, how much the air pressure swings) sets loudness. A high-pitched whistle and a low-pitched foghorn can be equally loud, or a deep bass note can be either a whisper or ear-splitting, because pitch and loudness are set by different properties of the same wave. Loudness is measured in <TermLink href="/general-science-facts/light-color-and-sound">decibels</TermLink> (dB), a logarithmic scale — a quiet whisper sits around 30 dB, normal conversation around 60 dB, a rock concert or a car horn around 110-120 dB, and because the scale is logarithmic, that gap isn&apos;t &quot;a bit louder,&quot; it&apos;s roughly a million times more sound energy. Sustained exposure above about 85 dB — well within range for concerts, power tools, and loud headphones — is enough to gradually damage the inner ear&apos;s hair cells, which is why hearing protection matters even when a sound doesn&apos;t feel painfully loud in the moment.
      </div>

      <QuickCheck
        question="A tiny bird chirps at a very high pitch, and a large truck horn blares at a very low pitch but is far louder. What does this tell you about pitch and loudness?"
        options={[
          { text: "Higher-pitched sounds are always quieter than lower-pitched ones", correct: false, explanation: "Pitch and loudness aren't linked that way — a high-pitched sound can be extremely loud (a smoke alarm) and a low-pitched sound can be very quiet (a soft hum)." },
          { text: "Pitch (frequency) and loudness (amplitude) are independent properties of a wave — either can be high or low regardless of the other", correct: true, explanation: "Correct. Frequency determines how high or low a sound is; amplitude determines how loud it is. The bird's chirp is high-frequency but low-amplitude; the truck horn is low-frequency but high-amplitude." },
          { text: "Loudness is just another word for pitch, so this scenario is a contradiction", correct: false, explanation: "They're genuinely different physical properties of a sound wave, not two names for the same thing — that's exactly why a quiet high note and a loud low note can both exist." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The visible light spectrum by wavelength"
        type="comparison"
        svgSrc="/diagrams/general-science-facts-light-color-and-sound-spectrum.svg"
        altText="Diagram of the visible light spectrum as a horizontal bar running from violet at around 380 nanometers on the left through blue, green, yellow, and orange to red at around 700 nanometers on the right, with wavelength values labeled along the bar."
      />
      <p>
      Violet light has the shortest visible wavelength and the most energy per photon; red has the longest visible wavelength and the least. Beyond either end, the same electromagnetic spectrum continues invisibly — ultraviolet past violet, infrared past red.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming sound can travel through the vacuum of space, like in movie space battles.", fix: "Sound needs a physical medium to travel — space is a vacuum, so real explosions in space would be completely silent to a nearby observer." },
          { mistake: "Thinking an object's color is a property of the object itself rather than the light it reflects.", fix: "An object appears a given color because it reflects that wavelength of light and absorbs the others — a red apple looks red because it reflects red wavelengths and absorbs the rest of the visible spectrum." },
          { mistake: "Believing white light has no color, or is the 'absence' of color.", fix: "White light is actually a mixture of all visible wavelengths at once — a prism or raindrop doesn't add color to it, it separates the colors that were already combined inside it." },
          { mistake: "Assuming a higher-pitched sound is automatically louder, or that pitch and loudness are the same thing.", fix: "Pitch comes from frequency; loudness comes from amplitude — they're independent. A high note can be whisper-quiet and a low note can be deafening." },
        ]}
      />
      <MisconceptionCallout
        myth="Objects that look black are simply colorless, reflecting nothing at all."
        reality={<p>A black object absorbs nearly all visible wavelengths of light rather than reflecting them — it&apos;s not an absence of color interaction, it&apos;s a very strong, specific one. That&apos;s also why black surfaces heat up faster in sunlight than white ones: white reflects most visible light away, while black absorbs most of it and converts that absorbed energy into heat.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate a thunderstorm's distance from the flash-to-thunder delay"
        fields={[
          { key: "seconds", label: "Seconds between flash and thunder", defaultValue: 5, step: 1 },
        ]}
        resultLabel="Approximate distance (meters)"
        formula="thunderstormDistance"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next thunderstorm, count the seconds between flash and thunder and try the calculator above to estimate distance.",
          "Look at a prism or a CD's reflective surface in sunlight and notice the separated spectrum — that's the same physics as a rainbow.",
          "Notice how a swimming pool muffles and distorts voices from underwater — a direct, everyday demonstration of sound behaving differently in a denser medium.",
          "Check the volume level on your headphones against a decibel-meter app, or notice if you have to raise your voice to be heard — both are practical signs you're in hearing-damage range.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why is the sky blue?", answer: "Sunlight scatters off molecules in the atmosphere, and shorter wavelengths (blue and violet) scatter far more strongly than longer ones (red) — this is called Rayleigh scattering. Blue scatters most in all directions, filling the sky, while our eyes are more sensitive to blue than violet, so the sky reads as blue." },
          { question: "Can sound travel faster than light under any circumstances?", answer: "No — light's speed in a vacuum (about 300,000 km/s) is the universal speed limit and vastly exceeds sound's speed in any known medium, which tops out around 12 km/s in the densest solids." },
          { question: "Is ultraviolet or infrared light visible to humans?", answer: "Neither — both fall just outside the narrow band of wavelengths (roughly 380–700 nanometers) human eyes evolved to detect, even though many animals (like bees, for UV) can see into these ranges." },
          { question: "Why does your voice sound different in a recording than how you hear it live?", answer: "When you speak, you hear your voice partly through vibrations conducted directly through your skull bones, which emphasizes lower frequencies. A recording only captures the sound that travels through air, so it sounds thinner and higher-pitched than the voice you're used to hearing internally." },
          { question: "What's the difference between pitch and loudness?", answer: "Pitch is set by a sound wave's frequency (cycles per second) — higher frequency means a higher-sounding note. Loudness is set by amplitude (how much the wave's pressure swings), measured in decibels. The two are independent: a sound can be high-pitched and quiet, or low-pitched and loud." },
          { question: "How loud is too loud for hearing safety?", answer: "Sustained exposure above roughly 85 decibels — the range of busy traffic, power tools, and many concerts — can gradually damage the inner ear's hair cells over time. Because the decibel scale is logarithmic, sounds much above that (a rock concert at 110-120 dB) carry vastly more energy, not just a little more." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
    </>
  );
}
