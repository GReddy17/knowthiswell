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
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Light Pollution & Its Effects",
  category: "environment-nature",
  order: 14,
  subtopic: "pollution-and-its-sources",
  tags: ["light pollution", "skyglow", "circadian rhythm", "dark sky", "nocturnal wildlife"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Light pollution isn't just wasted electricity lighting up an empty sky — scattered artificial light disrupts the day-night cycle that migrating birds, sea turtle hatchlings, and human circadian rhythms all depend on.",
  summary: "Light pollution is excess or misdirected artificial light that scatters into the atmosphere as skyglow and spills where it isn't needed, disrupting circadian rhythms in humans and navigational and behavioral cues in nocturnal wildlife that evolved around a natural day-night light cycle.",
  sources: [
    { label: "International Dark-Sky Association — Light Pollution", url: "https://darksky.org/light-pollution/" },
    { label: "NOAA — Light Pollution and Nighttime Satellite Imagery", url: "https://www.ncei.noaa.gov/products/nighttime-lights" },
    { label: "CDC — Circadian Rhythm and Sleep", url: "https://www.cdc.gov/sleep/about/index.html" },
  ],
  seeAlso: [
    "environment-nature/noise-pollution-an-overlooked-issue",
    "environment-nature/air-pollution-sources-and-health-impact",
    "environment-nature/how-animals-adapt-to-human-environments",
  ],
  glossary: [
    {"term":"Skyglow","definition":"The diffuse brightening of the night sky over inhabited areas, caused by artificial light scattering off atmospheric particles and clouds, which obscures stars and natural darkness."},
    {"term":"Light trespass","definition":"Artificial light that spills beyond its intended target area onto neighboring property, such as a streetlight illuminating a bedroom window."},
    {"term":"Circadian rhythm","definition":"The roughly 24-hour internal biological clock that regulates sleep-wake cycles and hormone release in humans and most other organisms, cued primarily by exposure to light and darkness."},
    {"term":"Ecological light pollution","definition":"Artificial light's disruption of natural behaviors in wildlife, including sea turtle hatchling navigation, bird migration, and insect activity patterns, all of which evolved around natural darkness cues."},
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
      "Light pollution isn't one problem — it includes skyglow (diffuse sky brightening), light trespass (spillover onto unintended areas), and glare, each with different causes and fixes.",
      "Human circadian rhythms rely on a clear light-dark cycle; artificial light exposure, especially at night, can disrupt sleep-related hormone timing.",
      "Many nocturnal species evolved navigational and behavioral cues around natural darkness — sea turtle hatchlings, migrating birds, and nocturnal insects are all documented to be disrupted by ecological light pollution.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Light pollution is excess or poorly aimed artificial light — streetlights, signage, and building lighting that spill beyond where they&apos;re actually needed. Some of it scatters upward into the atmosphere, creating <TermLink href="/environment-nature/light-pollution-and-its-effects">skyglow</TermLink> that washes out stars over cities. Some of it spills sideways onto neighboring property, called <TermLink href="/environment-nature/light-pollution-and-its-effects">light trespass</TermLink>. Both waste energy and disrupt natural day-night cycles that humans and wildlife depend on.</div>}
      detailed={<div className="prose-p">Human sleep is regulated by a <TermLink href="/environment-nature/light-pollution-and-its-effects">circadian rhythm</TermLink> that&apos;s cued largely by light exposure — bright light, particularly blue-wavelength light, at night can suppress the release of sleep-related hormones, shifting the body&apos;s internal clock even when a person isn&apos;t consciously aware of the light source. This effect scales with light pollution&apos;s ambient presence in a city, not just direct exposure from a screen. In wildlife, the effect is often more severe and better documented as <TermLink href="/environment-nature/light-pollution-and-its-effects">ecological light pollution</TermLink>: sea turtle hatchlings instinctively navigate toward the brightest horizon after hatching, which for millions of years meant moonlight over the ocean — artificial beachfront lighting can reverse this cue and lead hatchlings inland instead. Migratory birds that navigate partly by starlight and moonlight can become disoriented by bright urban skyglow, sometimes colliding with illuminated buildings during migration season.</div>}
      />
      <FootnoteAside>NOAA&apos;s nighttime satellite imagery of Earth shows that skyglow from major metropolitan areas is visible from space extending well beyond city boundaries, which is exactly how researchers measure light pollution&apos;s geographic reach without relying on ground-level observation alone.</FootnoteAside>

      <p>
      Because much of light pollution comes from poorly shielded or unnecessarily bright fixtures rather than from lighting that&apos;s actually needed for safety or visibility, it&apos;s one of the few pollution categories where the fix is often as simple as redirecting or dimming existing infrastructure, not eliminating it.
      </p>

      <QuickCheck
      question="A beachfront hotel installs bright, unshielded lighting facing the ocean. What specific wildlife problem is this most likely to cause?"
      options={[
      { text: "It has no meaningful effect on wildlife, since light pollution is mainly a human sleep issue", correct: false, explanation: "Ecological light pollution is a well-documented, separate effect from human circadian disruption — beachfront lighting specifically interferes with sea turtle hatchling navigation." },
      { text: "Sea turtle hatchlings, which instinctively navigate toward the brightest horizon (naturally moonlight over open water), can be misled inland by the artificial light instead of toward the ocean", correct: true, explanation: "Correct. This is one of the most extensively documented ecological light pollution effects, which is why many coastal areas with turtle nesting sites now require shielded, turtle-safe lighting ordinances." },
      { text: "It would only affect wildlife during the daytime, when the extra light is least noticeable", correct: false, explanation: "The effect is specifically a nighttime problem — it interferes with a behavior (hatchling navigation) that only occurs after dark." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: An unshielded streetlight (baseline case)</h3>
      <div className="prose-p">
      A streetlight without a shield sends roughly half its light output upward into the sky rather than down onto the road it&apos;s meant to illuminate. That upward-scattering light contributes to skyglow without adding any useful illumination for drivers or pedestrians — a fully shielded fixture pointed only downward provides the same road visibility while eliminating this wasted, polluting light.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A bedroom affected by a neighbor&apos;s floodlight (edge case / variation)</h3>
      <div className="prose-p">
      A homeowner&apos;s motion-activated security floodlight spills directly into a neighboring house&apos;s bedroom window overnight — a textbook case of light trespass rather than skyglow, since the light is reaching a specific unintended target rather than scattering diffusely into the atmosphere. The fix here is different too: shielding or redirecting the fixture, not necessarily dimming it.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A bird collision hotspot near a lit skyscraper (real-world / applied case)</h3>
      <div className="prose-p">
      During migration season, a brightly lit skyscraper in a major flight path experiences a spike in bird collisions, as disoriented migratory birds are drawn toward or confused by the building&apos;s lighting against the naturally dark night sky. Cities including Chicago and New York have implemented seasonal &quot;lights out&quot; programs during peak migration, documented to reduce collision rates — direct evidence that the lighting itself, not something else about the building, was driving the effect.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Skyglow vs. light trespass vs. properly shielded lighting"
      type="comparison"
      svgSrc="/diagrams/environment-nature-light-pollution-and-its-effects-shielding-comparison.svg"
      altText="Three side-by-side streetlight illustrations. Left: an unshielded bulb sending light both upward into a glowing sky dome (skyglow) and sideways into a neighboring window (light trespass). Middle: a partially shielded fixture still leaking some upward light. Right: a fully shielded, downward-only fixture illuminating only the road surface below it with no upward or sideways spill, labeled the fix."
      />
      <p>
      Only the rightmost fixture actually eliminates light pollution while still providing the same functional illumination — the difference between the three is entirely about where the fixture directs its light, not how bright the bulb itself is.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming light pollution is only an aesthetic issue about seeing fewer stars.", fix: "Recognize documented effects on human circadian rhythm and specific wildlife behaviors (sea turtle navigation, bird migration) as real, separate impacts beyond stargazing." },
      { mistake: "Assuming reducing light pollution means turning off needed safety lighting.", fix: "Most light pollution fixes involve shielding or redirecting fixtures so light goes only where it's needed, not eliminating functional lighting." },
      { mistake: "Treating all light pollution as the same problem.", fix: "Skyglow (upward scatter), light trespass (spillover onto unintended areas), and glare are distinct effects with different causes and different fixes." },
      ]}
      />
      <MisconceptionCallout
      myth="Light pollution is a minor cosmetic issue that mainly affects astronomers trying to see stars."
      reality={<p>Beyond obscuring the night sky, light pollution has documented effects on human circadian rhythm and hormone timing, and on specific, well-studied wildlife behaviors including sea turtle hatchling navigation and migratory bird orientation — effects with real biological and ecological consequences, not just a loss of stargazing visibility.</p>}
      />

      <QuickCheck
      question="Why can shielding a streetlight fixture reduce light pollution without reducing its usefulness for road safety?"
      options={[
      { text: "Shielding always makes the light dimmer, which happens to still be bright enough for safety by coincidence", correct: false, explanation: "The safety-relevant light output directed at the road doesn't have to decrease — shielding blocks the wasted upward and sideways light, not the useful downward light." },
      { text: "Because a large share of an unshielded fixture's light scatters upward and sideways where it provides no benefit for road visibility, so blocking that wasted light while still directing the useful downward light preserves safety illumination", correct: true, explanation: "Correct. Light pollution reduction usually isn't about making things darker for safety purposes — it's about redirecting already-wasted light so it serves its actual purpose instead of scattering uselessly." },
      { text: "It doesn't — shielded streetlights are less safe than unshielded ones", correct: false, explanation: "Properly shielded fixtures can maintain equivalent or better road-surface illumination while reducing wasted upward and sideways light, which is why many dark-sky lighting ordinances require shielding rather than lower brightness." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "If installing outdoor lighting at home, choose fully shielded, downward-directed fixtures over unshielded floodlights to reduce both skyglow and light trespass onto neighboring property.",
      "Consider warmer-temperature (less blue-heavy) bulbs for evening use, since blue-wavelength light has a stronger circadian-disrupting effect than warmer light.",
      "If you live near a coastal turtle-nesting area or a major bird migration flight path, check for local dark-sky or 'lights out' ordinances during relevant seasons.",
      "Limit bright screen and overhead light exposure in the hour or two before sleep, since this is the most direct, individually controllable circadian-rhythm lever available.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is skyglow?", answer: "The diffuse brightening of the night sky over inhabited areas, caused by artificial light scattering off atmospheric particles and clouds, which obscures stars and natural darkness — visible from space over major cities in NOAA nighttime satellite imagery." },
      { question: "Does light pollution affect sleep?", answer: "Yes. Artificial light exposure, especially at night, can disrupt the circadian rhythm that regulates sleep-related hormone timing, an effect that scales with ambient light pollution as well as direct light exposure." },
      { question: "How does light pollution affect wildlife?", answer: "Documented effects include sea turtle hatchlings being misled away from the ocean by artificial beachfront lighting, and migratory birds becoming disoriented or colliding with brightly lit buildings during migration season." },
      { question: "What is the difference between skyglow and light trespass?", answer: "Skyglow is diffuse light scattering upward into the atmosphere, brightening the general night sky. Light trespass is light spilling directly onto a specific unintended area, like a neighbor's window — different causes, different fixes." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
