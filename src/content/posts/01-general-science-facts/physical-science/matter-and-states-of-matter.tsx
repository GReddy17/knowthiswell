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
  title: "Matter & States of Matter: Solid, Liquid, Gas, and Plasma Explained",
  category: "general-science-facts",
  order: 1,
  subtopic: "physical-science",
  tags: [
    "states of matter",
    "solid liquid gas",
    "physical science",
    "matter",
    "phase changes",
    "latent heat",
    "refrigeration"
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "What matter is, why it exists as solid, liquid, gas, or plasma, and how phase changes power your fridge, your pressure cooker, and even sweating.",
  summary: "Matter is anything with mass and volume that exists as a solid, liquid, gas, or plasma depending on how much energy its particles hold.",
  sources: [
    {"label":"NASA Science — States of Matter","url":"https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/states-of-matter/"},
    {"label":"Royal Society of Chemistry — States of Matter overview","url":"https://edu.rsc.org/resources/states-of-matter"},
    {"label":"NIST — Physical Measurement Laboratory: Temperature and Phase Changes","url":"https://www.nist.gov/pml"},
    {"label":"U.S. Department of Energy — How a Refrigerator Works","url":"https://www.energy.gov/energysaver/refrigerators-and-freezers"}
  ],
  seeAlso: [
    "general-science-facts/forces-and-motion",
    "general-science-facts/heat-and-temperature",
    "general-science-facts/density-and-buoyancy",
    "general-science-facts/atoms-and-elements",
    "general-science-facts/pressure"
  ],
  glossary: [
    {"term":"Matter","definition":"Anything that has mass and takes up space (volume)."},
    {"term":"State of matter","definition":"A physical form matter can take — solid, liquid, gas, or plasma — based on particle arrangement and motion."},
    {"term":"Kinetic energy","definition":"The energy a particle has because it is moving; more heat means particles move faster, i.e., more kinetic energy."},
    {"term":"Latent heat","definition":"Energy absorbed or released during a phase change that goes into rearranging particle bonds rather than changing temperature."},
    {"term":"Melting point","definition":"The temperature at which a solid turns into a liquid at a given pressure."},
    {"term":"Boiling point","definition":"The temperature at which a liquid turns into a gas throughout its volume, not just at the surface, at a given pressure."},
    {"term":"Sublimation","definition":"A change directly from solid to gas, skipping the liquid state."},
    {"term":"Deposition","definition":"A change directly from gas to solid, skipping the liquid state."},
    {"term":"Plasma","definition":"An ionized gas-like state where electrons are stripped from atoms, common in stars and lightning."},
    {"term":"Triple point","definition":"The exact temperature and pressure at which a substance can exist as solid, liquid, and gas simultaneously in equilibrium."},
    {"term":"Phase diagram","definition":"A chart plotting temperature against pressure showing which state matter will be in under those conditions."},
    {"term":"Dew point","definition":"The temperature at which air becomes saturated with water vapor and starts to condense into liquid droplets."}
  ],
  author: {
    slug: "james-h-rivers",
    name: "James H. Rivers",
    credentialLine: "Founder, KnowThisWell",
  },
  youtubeStatus: "published",
  youtubeUrl: "https://www.youtube.com/watch?v=twQVIVQmJ7g",
  draft: false,
};

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "Matter changes state based on how much energy its particles carry — 'cold' isn't a substance being added, it's heat energy being removed.",
      "During a phase change, energy goes into breaking or forming particle bonds instead of raising temperature — this is why melting ice stays at 0°C the entire time it's melting.",
      "This one mechanism — latent heat — is the working principle behind refrigerators, air conditioners, pressure cookers, sweating, and fog formation.",
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p"><TermLink href="/general-science-facts/matter-and-states-of-matter">Matter</TermLink> is anything that has mass and takes up space — your desk, the air you breathe, the water in a glass. The same matter can exist as a solid, a liquid, or a gas depending on how much energy it has. Add energy (heat) and particles move faster and spread out more; remove energy (cool it down) and particles slow down and pack closer together. Ice, water, and steam are the same substance, H₂O, just holding different amounts of energy.</div>}
      detailed={<div className="prose-p">Each state differs in particle arrangement and freedom of movement. In a solid, particles are locked into a fixed, ordered structure and only vibrate in place, giving solids a definite shape and volume. In a liquid, particles have enough <TermLink href="/general-science-facts/matter-and-states-of-matter">kinetic energy</TermLink> to slide past one another while staying close together, so liquids hold a fixed volume but take the shape of their container. In a gas, particles move fast and mostly independently, so gases have neither fixed shape nor fixed volume. <strong>Plasma</strong> forms when enough energy is added to strip electrons from atoms entirely, producing a mix of free electrons and ions — the state inside stars, lightning, and neon signs, and by far the most common state of matter in the visible universe by mass. Which state a substance sits in depends on both temperature (particle energy) and pressure (how hard particles are being pushed together) — this relationship is precise enough to be plotted on a <TermLink href="/general-science-facts/matter-and-states-of-matter">phase diagram</TermLink>, and at one exact combination of temperature and pressure — the <TermLink href="/general-science-facts/matter-and-states-of-matter">triple point</TermLink> — a substance can exist as solid, liquid, and gas all at once.</div>}
      />
      <FootnoteAside>Water&apos;s triple point is an internationally defined reference: 0.01°C at 611.657 pascals of pressure. It&apos;s precise enough that it was historically used to help define the Kelvin temperature scale itself.</FootnoteAside>
      <p>
      The particle picture explains <em>what</em> a state is. The next question — and the one with the real payoff — is <em>what happens during the switch</em> from one state to another, because that switch is where most of the energy movement (and most of the useful engineering) happens.
      </p>
      <QuickCheck
      question="You put an ice cube in a warm room and it melts into a puddle of water. What is happening to the water molecules during this process?"
      options={[
      { text: "Cold is leaving the ice and entering the room", correct: false, explanation: "Cold isn't a substance that moves — this describes heat flow backwards. Heat energy from the warmer room is being absorbed by the ice, not the reverse." },
      { text: "The molecules are gaining energy, vibrating faster, and breaking free of their fixed positions to slide past each other", correct: true, explanation: "Correct. Melting is water molecules absorbing heat energy until they have enough energy to escape their rigid arrangement and flow as a liquid." },
      { text: "The water molecules are being destroyed and new ones are created", correct: false, explanation: "No molecules are created or destroyed — this is a physical change, not a chemical one. The same H₂O molecules just rearrange." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <QuickCheck
      question="Two drinks start at the same temperature. One is cooled with 30g of ice at 0°C, the other with 30g of liquid water chilled to 0°C. Which cools the drink more, and why?"
      options={[
      { text: "They cool the drink by the same amount, since both are at 0°C", correct: false, explanation: "Same starting temperature doesn't mean same cooling power. The ice has to absorb an extra ~10,000 joules of latent heat just to melt, on top of any temperature-based cooling — the cold water has no equivalent phase change to draw energy from." },
      { text: "The ice cools the drink more, because melting absorbs a large amount of latent heat from the drink", correct: true, explanation: "Correct. Melting 30g of ice absorbs roughly 10,000 joules of latent heat directly from the drink, on top of ordinary heat transfer from temperature difference — this is why ice is dramatically more effective than the same mass of cold water." },
      { text: "The cold water cools the drink more, because liquids transfer heat faster than solids", correct: false, explanation: "Speed of heat transfer isn't the deciding factor here — total energy absorbed is. The ice wins because melting itself is a large, additional energy sink that cold water simply doesn't have." },
      ]}
      />
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Ice melting into water — with real numbers (baseline case)</h3>
      <div className="prose-p">
      Take an ice cube at -5°C and leave it on a counter in a 22°C room. Heat flows from the warmer room into the colder ice — heat always flows from hot to cold, never the reverse. First, the ice warms from -5°C to 0°C; this part follows ordinary heating math (roughly 2.1 J per gram per °C for ice). At exactly 0°C, something different happens: the temperature stops rising even though heat keeps flowing in. All of that extra energy goes into breaking the rigid crystal structure — this is <TermLink href="/general-science-facts/matter-and-states-of-matter">latent heat</TermLink> of fusion, and for water it takes about <strong>334 joules of energy to melt just 1 gram of ice</strong>, with zero temperature change during that process. A 30-gram ice cube therefore absorbs roughly 10,000 joules just to melt — before its temperature can start climbing toward room temperature at all. This is exactly why ice cools a drink far better than the same mass of very cold water: the ice pulls a large, fixed chunk of heat out of the drink purely to change state, on top of any additional cooling from temperature difference.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Water boiling at different altitudes (edge case / variation)</h3>
      <div className="prose-p">
      At sea level, water boils at 100°C. At the top of a high mountain, where air <TermLink href="/general-science-facts/pressure">pressure</TermLink> is much lower, water can boil at 90°C or lower. This isn&apos;t a broken rule — boiling point depends on surrounding pressure, not just heat. Lower pressure means fewer air molecules pushing down on the liquid&apos;s surface, so water molecules escape into gas form with less energy required. This is also why food like rice or lentils takes longer to cook at high altitude: the water is boiling, but at a lower temperature, so it delivers less heat per unit time into the food. Pressure cookers exploit the opposite effect — sealing in steam raises internal pressure above normal atmospheric pressure, which pushes water&apos;s boiling point up past 100°C (often to around 115-120°C), cooking food faster because the surrounding liquid and steam are simply hotter.
      </div>
      <QuickCheck
      question="A pressure cooker seals in steam and cooks food faster than an open pot. What is the main physical reason for this?"
      options={[
      { text: "The sealed lid traps more heat energy from the stove inside the pot", correct: false, explanation: "The stove's heat output doesn't change just because the lid is sealed. The real mechanism is about the boiling point of the water itself shifting, not extra heat being trapped." },
      { text: "Trapped steam raises internal pressure, which raises water's boiling point above 100°C, so the water and steam are hotter", correct: true, explanation: "Correct. Higher pressure pushes the boiling point up, often to 115-120°C — hotter water and steam transfer heat into food faster, which is why cooking time drops." },
      { text: "Sealing the pot removes air, and food cooks faster in a vacuum", correct: false, explanation: "The opposite is happening — pressure inside is increasing, not decreasing. There's no vacuum involved; steam is being trapped and building up pressure." },
      ]}
      />
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: How your fridge and AC use phase changes to move heat (real-world / applied case)</h3>
      <p>
      A refrigerator or air conditioner doesn&apos;t &quot;make cold&quot; — it moves heat from inside to outside using a repeating cycle of phase changes in a refrigerant fluid. The refrigerant is compressed into a hot, high-pressure liquid, then allowed to expand and evaporate inside the fridge&apos;s interior coils. Because evaporation absorbs large amounts of latent heat (just like melting ice, but liquid-to-gas instead of solid-to-liquid), the evaporating refrigerant pulls heat out of the air inside the fridge, cooling it. The now-gaseous refrigerant is pumped back to a compressor, turned back into a hot liquid, and releases that absorbed heat to the outside air through the coils on the back of the fridge — which is why the back of a fridge feels warm. The entire appliance is essentially an engineered loop of evaporation and condensation, repeated continuously.
      </p>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Phase diagram: temperature vs. pressure for water"
      type="detail"
      svgSrc="/diagrams/01-matter-and-states-of-matter-phase-diagram.svg"
      altText="Phase diagram plotting pressure on the vertical axis against temperature on the horizontal axis, with regions labeled solid, liquid, and gas separated by curved boundary lines, the triple point marked where all three lines meet, and the critical point marked at the top of the liquid-gas boundary beyond which liquid and gas become indistinguishable."
      />
      <p>
      Trace a horizontal line across the diagram at normal atmospheric pressure (1 atm) — as you move left to right (increasing temperature), you cross the solid-liquid boundary at water&apos;s melting point (0°C) and the liquid-gas boundary at its boiling point (100°C). Now trace a vertical line at a fixed temperature and slide it up or down — that&apos;s what happens inside a pressure cooker (pressure rising pushes you further right along the liquid-gas boundary, raising the effective boiling point) or on a mountaintop (pressure falling pushes the boiling point down). The single point where all three regions meet is the triple point; above the point marked &quot;critical point&quot; at the top of the liquid-gas line, liquid and gas stop being physically distinguishable at all — this is called a supercritical fluid, used industrially in decaffeinating coffee with supercritical CO₂.
      </p>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Thinking 'cold' is something that gets added to a substance, rather than heat being removed.", fix: "Reframe it: cold is the absence or reduction of heat energy, not a substance flowing in on its own — a fridge removes heat, it doesn't inject cold." },
      { mistake: "Assuming a substance's temperature keeps rising steadily while it's changing state (e.g., while ice is melting or water is boiling).", fix: "Remember temperature holds steady at the melting or boiling point until the entire state change finishes — the energy is going into latent heat, not raising temperature." },
      { mistake: "Believing all solids are denser than their liquid form.", fix: "Water/ice is a well-known exception — ice is about 9% less dense than liquid water, which is why it floats. Most other substances are denser as solids than as liquids." },
      { mistake: "Thinking boiling point is a fixed property that never changes.", fix: "Boiling point shifts with pressure — lower at altitude, higher inside a sealed pressure cooker. Only at a specified standard pressure (usually 1 atm) is '100°C' the correct number for water." },
      ]}
      />
      <MisconceptionCallout
      myth="Sweating cools you down because the sweat itself feels cold on your skin."
      reality={<p>Sweat cools you through evaporation, not through the liquid&apos;s temperature. As sweat evaporates off your skin, it pulls latent heat directly from your body to power that phase change — the same 2,260 joules-per-gram of latent heat of vaporization involved in boiling water applies here at body temperature, just at a slower rate. That&apos;s why sweating in a humid environment cools you far less effectively: the surrounding air is already saturated with water vapor, so evaporation slows down and the heat-removal mechanism stalls.</p>}
      />
      <QuickCheck
      question="You feel much less cooling relief from sweating on a humid day than on a dry day, even though you're sweating just as much. Why?"
      options={[
      { text: "Humid air is warmer, so the sweat doesn't need to evaporate as much", correct: false, explanation: "Humidity and temperature are different things — a day can be humid without being especially hot. The actual issue is how much moisture the air can still absorb, not its temperature." },
      { text: "Humid air is already close to saturated with water vapor, so sweat evaporates more slowly and removes heat at a reduced rate", correct: true, explanation: "Correct. Cooling comes from evaporation, not from sweat simply sitting on skin. Saturated air can't absorb much more moisture, so evaporation — and the heat it removes — slows down." },
      { text: "Sweat glands produce less latent heat-absorbing sweat when humidity is high", correct: false, explanation: "Sweat production itself isn't the limiting factor — the sweat is still there. The bottleneck is the surrounding air's ability to absorb it through evaporation." },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Estimate boiling point at your altitude"
      fields={[
      { key: "altitudeMeters", label: "Altitude above sea level (meters)", defaultValue: 0 },
      ]}
      resultLabel="Approximate water boiling point (°C)"
      formula="estimateBoilingPointFromAltitude"
      formatResult="number"
      />
      <EntryCalculator
      title="Energy needed to melt a given mass of ice"
      fields={[
      { key: "iceMassGrams", label: "Mass of ice (grams)", defaultValue: 30 },
      ]}
      resultLabel="Energy absorbed during melting (joules)"
      formula="latentHeatOfFusionEnergy"
      formatResult="number"
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Time how long it takes an equal mass of ice versus very cold water to cool a drink to the same temperature — the ice will win, and now you know exactly why (latent heat, not just temperature difference).",
      "Next time you use a pressure cooker, connect the faster cooking time to a higher boiling point caused by higher internal pressure, not just 'more heat.'",
      "On a humid day, notice how much less effective sweating feels compared to a dry day — that's the evaporation mechanism being slowed by already-saturated air.",
      "Read the related entry on Heat & Temperature to go deeper on what temperature actually measures at the particle level, and Pressure for how it governs phase changes.",
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      {
      question: "What are the 4 states of matter?",
      answer: "Solid, liquid, gas, and plasma. Solid, liquid, and gas are the states you encounter in everyday life; plasma is less common on Earth (seen in lightning, neon signs, and flames) but is the most common state of matter in the universe overall, since stars are made of plasma.",
      },
      {
      question: "Why does a pressure cooker cook food faster?",
      answer: "Sealing in steam raises internal pressure above normal atmospheric pressure, which raises water's boiling point — often to around 115-120°C instead of 100°C. The hotter liquid and steam transfer heat into food faster, cutting cooking time significantly.",
      },
      {
      question: "How does a refrigerator make things cold?",
      answer: "It doesn't add cold — it moves heat out. A refrigerant fluid evaporates inside the fridge, absorbing latent heat from the interior air, then is compressed and condensed outside the fridge, releasing that heat to the surrounding room. This evaporation-condensation cycle repeats continuously.",
      },
      {
      question: "Why does sweating cool you down less on humid days?",
      answer: "Sweat cools the body through evaporation, which requires the surrounding air to absorb water vapor. On humid days the air is already close to saturated with moisture, so sweat evaporates more slowly, removing heat from the body at a reduced rate.",
      },
      {
      question: "Can a substance skip the liquid state entirely?",
      answer: "Yes — this is called sublimation (solid directly to gas) or deposition (gas directly to solid). Dry ice (solid CO₂) is a common sublimation example, and frost forming directly from humid air on a cold surface is a common deposition example.",
      },
      {
      question: "Does temperature keep rising while something is melting or boiling?",
      answer: "No. Temperature stays constant at the melting or boiling point until the entire state change finishes, because the added energy is being used as latent heat to break particle bonds rather than raise kinetic energy (temperature).",
      },
      ]}
      />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
