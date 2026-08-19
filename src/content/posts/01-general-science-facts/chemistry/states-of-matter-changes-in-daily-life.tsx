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
  title: "States of Matter Changes in Daily Life: Evaporation, Condensation & Beyond",
  category: "general-science-facts",
  order: 15,
  subtopic: "chemistry",
  tags: [
    "evaporation",
    "condensation",
    "phase changes",
    "humidity",
    "dew point",
    "states of matter",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Why your breath fogs up in cold air, why dew forms overnight, and how everyday evaporation and condensation shape weather and household life.",
  summary: "Everyday phenomena like fog, dew, steam, and frost are all the same handful of phase-change mechanisms — evaporation, condensation, and sublimation — playing out at kitchen-table scale.",
  sources: [
    { label: "NASA Science — States of Matter", url: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/states-of-matter/" },
    { label: "Royal Society of Chemistry — States of Matter overview", url: "https://edu.rsc.org/resources/states-of-matter" },
    { label: "USGS Water Science School — The Water Cycle", url: "https://www.usgs.gov/special-topics/water-science-school" },
    { label: "NIST — Physical Measurement Laboratory", url: "https://www.nist.gov/pml" },
  ],
  seeAlso: [
    "general-science-facts/matter-and-states-of-matter",
    "general-science-facts/heat-and-temperature",
    "general-science-facts/pressure",
    "general-science-facts/mixtures-solutions-and-separation",
  ],
  glossary: [
    { term: "Evaporation", definition: "The gradual change of a liquid into a gas, happening at a liquid's surface at any temperature below its boiling point." },
    { term: "Condensation", definition: "The change of a gas (typically water vapor) into a liquid, releasing the latent heat that evaporation originally absorbed." },
    { term: "Dew point", definition: "The temperature air must cool to before it becomes saturated with water vapor and moisture starts condensing out of it." },
    { term: "Relative humidity", definition: "How much water vapor air is holding compared to the maximum it could hold at that temperature, expressed as a percentage." },
    { term: "Sublimation", definition: "A change directly from solid to gas, skipping the liquid state entirely — dry ice is the classic everyday example." },
    { term: "Saturation", definition: "The point at which air is holding the maximum amount of water vapor possible at its current temperature." },
    { term: "Frost", definition: "Ice crystals that form directly from water vapor through deposition (the reverse of sublimation), rather than from liquid dew freezing." },
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
          "Phase changes you see every day — fog, dew, a sweating glass, a fogged-up mirror — are governed by both temperature and how much moisture the surrounding air can hold, not by heat alone.",
          "Condensation happens when air cools below its dew point and releases the same latent heat that evaporation absorbed earlier — evaporation and condensation are the same mechanism running in opposite directions.",
          "These small-scale mechanisms scale straight up into the global water cycle: the fog on your window and a rain cloud form by the same physics, just at different sizes.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Air is always carrying some amount of invisible water vapor — a gas you can&apos;t see. When that air cools down enough, it can&apos;t hold all that vapor anymore, so some of it turns back into tiny liquid droplets you <em>can</em> see: that&apos;s <TermLink href="/general-science-facts/states-of-matter-changes-in-daily-life">condensation</TermLink>, and it&apos;s what makes dew appear on grass overnight, fog roll in, and a cold glass of lemonade &quot;sweat&quot; on a warm day. Run the process the other way — add heat, and liquid water turns back into invisible vapor — and that&apos;s <TermLink href="/general-science-facts/states-of-matter-changes-in-daily-life">evaporation</TermLink>, which is why a wet sidewalk dries and a pot of water disappears slowly if you leave it simmering.</div>}
        detailed={<div className="prose-p">The key variable is the <TermLink href="/general-science-facts/states-of-matter-changes-in-daily-life">dew point</TermLink>: the specific temperature at which air becomes fully saturated with the water vapor it&apos;s currently carrying. Warm air can hold far more water vapor than cold air, so as air cools toward its dew point, its capacity to hold vapor shrinks until it hits 100% <TermLink href="/general-science-facts/states-of-matter-changes-in-daily-life">relative humidity</TermLink> — the <TermLink href="/general-science-facts/states-of-matter-changes-in-daily-life">saturation</TermLink> point — and any further cooling forces excess vapor to condense onto the nearest cool surface (grass, glass, blades of a lawn) or onto tiny airborne particles (forming fog or cloud droplets). Evaporation and condensation are the same phase-change mechanism running in opposite directions and moving the same fixed amount of latent heat: roughly 2,260 joules per gram of water at 100°C, and slightly more at cooler everyday temperatures. Not every solid-to-gas transition needs a liquid step at all — <TermLink href="/general-science-facts/states-of-matter-changes-in-daily-life">sublimation</TermLink> converts solid straight to gas (dry ice, or old ice cubes shrinking in a freezer), and its reverse, deposition, is how <TermLink href="/general-science-facts/states-of-matter-changes-in-daily-life">frost</TermLink> forms directly from vapor on a cold morning without ever passing through a liquid dew stage.</div>}
      />
      <FootnoteAside>Dry ice was first produced in 1835 by French inventor Adrien-Jean-Pierre Thilorier, who compressed and cooled carbon dioxide into a solid block. Solid CO₂ sublimates directly to gas at normal atmospheric pressure — it never forms a liquid puddle — which is exactly why it&apos;s used for fog effects and cold shipping without leaving any residue behind.</FootnoteAside>

      <p>
      That dew-point mechanism explains most of the phase changes you run into around the house without ever touching a stove — but the clearest way to see it in action is to walk through a few real, everyday cases with actual numbers attached.
      </p>

      <QuickCheck
        question="On a cold winter day, you can see your breath as a visible white cloud. What is actually happening?"
        options={[
          { text: "The cold air is turning your breath into smoke", correct: false, explanation: "There's no combustion or smoke involved. What you're seeing is a normal, everyday phase change, not any kind of burning." },
          { text: "The warm, moist air from your lungs cools rapidly in the cold outside air and condenses into tiny visible water droplets", correct: true, explanation: "Correct. Your breath is warm and carries a lot of water vapor from your lungs; hitting cold outside air drops it below its dew point almost instantly, so the vapor condenses into the visible cloud you see." },
          { text: "Cold air itself is naturally visible in large enough amounts", correct: false, explanation: "Cold, dry air is just as invisible as warm air — air itself doesn't become visible from temperature alone. It's the condensed water droplets that you're seeing, not the air." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Dew forming on grass overnight (baseline case)</h3>
      <div className="prose-p">
      Suppose daytime air holds steady around 20°C with a dew point of 12°C. As night falls, the ground and the grass blades on it radiate heat away and cool faster than the bulk of the air above them, often dropping several degrees below the surrounding air temperature. Once the grass surface itself cools down to around 12°C — the air&apos;s dew point — the thin layer of air touching it can no longer hold all its water vapor, and the excess condenses directly onto the grass as visible dew. No rain was needed and no new water arrived from anywhere; existing water vapor already in the air simply crossed its saturation point once a cool enough surface was available for it to condense onto.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Dry ice fog vs. a fogged bathroom mirror (edge case / variation)</h3>
      <div className="prose-p">
      These look like similar &quot;fog&quot; effects but come from opposite directions. A hot shower fills a bathroom with warm, moist air; the mirror&apos;s glass surface is cooler than that air, so vapor condenses directly onto the glass the same way dew forms on grass — the fog you wipe away is liquid water sitting on the mirror. A dry-ice fog machine works in reverse: the extremely cold solid CO₂ (around -78.5°C) sublimates straight into CO₂ gas, and that intensely cold gas chills the surrounding humid air so sharply that the air&apos;s own water vapor condenses into a dense, low-hanging cloud of tiny droplets. In both cases, the visible cloud is condensed <em>water</em> — the CO₂ gas itself is invisible; it just triggers the water vapor around it to condense.
      </div>

      <QuickCheck
        question="Why does a fog machine using dry ice produce a visible white cloud?"
        options={[
          { text: "Solid carbon dioxide turns directly into visible white CO₂ gas", correct: false, explanation: "CO₂ gas is colorless and invisible, just like the CO₂ in the air you breathe. The visible cloud isn't the carbon dioxide itself." },
          { text: "The intensely cold CO₂ gas chills the surrounding humid air below its dew point, condensing the air's own water vapor into a visible cloud of droplets", correct: true, explanation: "Correct. The fog is condensed water, not carbon dioxide — the cold CO₂ gas is simply the trigger that pushes nearby humid air below its saturation point." },
          { text: "Dry ice releases stored water vapor as it sublimates", correct: false, explanation: "Dry ice is solid carbon dioxide and contains no water to release. The fog effect comes entirely from water vapor already present in the surrounding air." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why evaporative coolers work in Phoenix but not Miami (real-world / applied case)</h3>
      <p>
      Evaporative coolers (sometimes called swamp coolers) cool air by blowing it across water-soaked pads, using the same latent-heat mechanism as sweating: evaporating water pulls heat energy out of the surrounding air. In a dry climate like Phoenix, the air is far from saturated, so water evaporates readily and pulls a large amount of heat out of the air stream, producing a real, noticeable cooling effect. In a humid climate like Miami, the air is already close to its saturation point, so far less additional water vapor can evaporate into it — the cooling pads stay wet and soggy but barely evaporate, and the cooling effect largely disappears. This is why evaporative cooling is popular across the arid U.S. Southwest and essentially useless along the humid Gulf Coast.
      </p>

      <QuickCheck
        question="An evaporative cooler works well in a dry desert climate but barely cools the air in a humid coastal climate. What explains the difference?"
        options={[
          { text: "Humid air is naturally warmer than dry air, so cooling is harder", correct: false, explanation: "Humidity and temperature are separate properties — humid air isn't inherently warmer. The real limiting factor is how much more water vapor the air can still absorb." },
          { text: "Humid air is already close to saturated, so much less water can evaporate into it, which sharply limits the amount of heat the process can remove", correct: true, explanation: "Correct. Evaporative cooling depends entirely on water evaporating into the air stream — the closer air already is to saturation, the less room there is for more evaporation, and the less cooling the system can deliver." },
          { text: "Evaporative coolers only work correctly above a certain altitude", correct: false, explanation: "Altitude isn't the deciding factor here — humidity is. Evaporative coolers are used effectively at a wide range of elevations as long as the local air is dry." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Everyday phase changes: evaporation, condensation, sublimation, and deposition"
        type="detail"
        svgSrc="/diagrams/general-science-facts-states-of-matter-daily-life-cycle.svg"
        altText="A cycle diagram showing solid, liquid, and gas water arranged in a triangle, with arrows labeled evaporation and condensation between liquid and gas, arrows labeled melting and freezing between solid and liquid, and a direct arrow labeled sublimation from solid to gas along with its reverse, deposition, bypassing the liquid state entirely."
      />
      <p>
      Notice that every arrow in this cycle has a reverse arrow right next to it, and every transition either absorbs or releases the same fixed amount of latent heat depending on which direction it runs. Fog, dew, and a sweating glass are all sitting on the evaporation/condensation arrow; dry-ice fog and morning frost are both examples of the sublimation/deposition shortcut that skips liquid entirely.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking fog or mist is water vapor itself, made visible.", fix: "Water vapor is a gas and is always invisible. Fog, mist, and steam clouds are tiny liquid water droplets that have already condensed — visibility only starts after condensation happens." },
          { mistake: "Believing the white cloud from dry ice is the carbon dioxide gas itself.", fix: "CO₂ gas is colorless. The visible cloud is condensed water vapor from the surrounding air, chilled below its dew point by the cold CO₂." },
          { mistake: "Treating humidity and temperature as the same thing, or assuming 'muggy' always means 'hot.'", fix: "Humidity measures how much water vapor the air is holding relative to its capacity — a day can be cool and still feel muggy if the air is close to saturated." },
        ]}
      />
      <MisconceptionCallout
        myth="The white cloud coming out of a boiling kettle's spout is water vapor."
        reality={<p>Look closely at a boiling kettle and there&apos;s a small, clear gap right at the spout before the visible cloud starts — that gap is the actual water vapor (a gas), and it&apos;s invisible. As that hot vapor hits the cooler air a short distance away, it condenses almost instantly into the visible white cloud of tiny liquid droplets. What you&apos;re calling &quot;steam&quot; in everyday speech is technically condensed water, not the water vapor itself — true water vapor never becomes visible on its own.</p>}
      />

      <QuickCheck
        question="If you look closely at a boiling kettle's spout, there's a small clear gap before the visible white cloud appears. What is in that clear gap?"
        options={[
          { text: "Nothing — it's a genuine empty gap with no water present", correct: false, explanation: "The gap isn't empty. It's full of actual water vapor — the true gaseous form of water — which is completely invisible, unlike the condensed cloud right after it." },
          { text: "Invisible water vapor gas, which condenses into the visible cloud only after it cools slightly in the surrounding air", correct: true, explanation: "Correct. True water vapor is a colorless, invisible gas. The visible white cloud forms only once that vapor cools enough, just past the spout, to condense into tiny liquid droplets." },
          { text: "A different, cooler form of steam that hasn't heated up yet", correct: false, explanation: "There's no separate 'cooler steam' stage — the gap is genuine water vapor at kettle temperature. It becomes visible only once it condenses into liquid droplets a short distance from the spout." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Energy absorbed when water evaporates (latent heat of vaporization)"
        fields={[
          { key: "waterMassGrams", label: "Mass of water evaporated (grams)", defaultValue: 10 },
        ]}
        resultLabel="Energy absorbed during evaporation (joules)"
        formula="latentHeatOfVaporizationEnergy"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Check a cold drink glass on a warm day and connect the sweating you see to condensation, not the glass 'leaking.'",
          "Watch your breath on the next cold morning and identify the exact mechanism: warm, moist air hitting its dew point almost instantly.",
          "If you live somewhere humid, notice why fans and evaporative coolers feel far less effective than they do in a dry climate.",
          "Read the related entry on Matter & States of Matter for the full particle-level picture behind these same transitions.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why does my breath look like smoke in cold weather?", answer: "It isn't smoke — it's condensation. The warm, moist air from your lungs hits cold outside air, drops below its dew point almost instantly, and the water vapor condenses into a visible cloud of tiny liquid droplets." },
          { question: "Why does a cold glass of water sweat?", answer: "The glass cools the thin layer of air touching it below that air's dew point, so water vapor already in the surrounding air condenses onto the cold surface — the water isn't leaking through the glass." },
          { question: "What is dew point?", answer: "Dew point is the specific temperature air needs to cool to before it becomes fully saturated with the water vapor it's carrying, at which point any further cooling forces excess vapor to condense out as liquid." },
          { question: "Why doesn't dry ice melt into a puddle?", answer: "Solid carbon dioxide sublimates — it converts directly to CO₂ gas at normal atmospheric pressure without ever forming a liquid, which is why dry ice shrinks away as gas instead of melting into a puddle." },
          { question: "Why do evaporative coolers work better in dry climates?", answer: "Evaporative cooling depends on water evaporating into the air stream to pull out heat. Dry air is far from saturated and can absorb a lot more water vapor, while humid air is already close to saturated, so evaporation — and the cooling effect it produces — is far weaker." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
