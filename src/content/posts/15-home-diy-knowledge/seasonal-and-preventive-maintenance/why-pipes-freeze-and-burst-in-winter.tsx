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
  title: "Why Pipes Freeze and Burst in Winter (The Physics Behind It)",
  category: "home-diy-knowledge",
  order: 38,
  subtopic: "seasonal-and-preventive-maintenance",
  tags: ["frozen pipes", "winter maintenance", "plumbing", "water expansion", "home maintenance"],
  date: "2026-09-12",
  updated: "2026-09-12",
  lastReviewed: "2026-09-12",
  excerpt: "A frozen pipe doesn't burst where the ice is — it bursts wherever trapped pressure builds up between the ice plug and a closed faucet, often far from the freeze itself.",
  summary: "Water is one of the few common substances that expands, not contracts, when it freezes — about 9% by volume. Inside a closed pipe, that expansion has nowhere to go, and continued freezing keeps building pressure between the ice blockage and whatever's sealed on the other side, until something gives, usually not at the ice itself but at a weaker point in the pipe wall some distance away.",
  sources: [
    { label: "International Association of Plumbing and Mechanical Officials (IAPMO) — Uniform Plumbing Code resources", url: "https://www.iapmo.org/" },
    { label: "U.S. Department of Energy — Preventing Frozen Pipes", url: "https://www.energy.gov/energysaver/preventing-frozen-pipes" },
    { label: "National Institute of Standards and Technology (NIST) — Water Properties Reference", url: "https://www.nist.gov/" },
  ],
  seeAlso: [
    "home-diy-knowledge/what-weatherstripping-actually-does",
    "home-diy-knowledge/what-water-pressure-actually-measures",
    "home-diy-knowledge/why-a-faucet-drips-explained",
    "home-diy-knowledge/what-r-value-actually-measures-in-insulation",
  ],
  glossary: [
    { term: "Ice plug", definition: "A section of a water pipe that has frozen solid, blocking flow through that segment while liquid water may still remain on either side of it." },
    { term: "Volumetric expansion", definition: "An increase in a substance's volume without a change in its mass — water's roughly 9% expansion on freezing is a volumetric expansion." },
    { term: "Closed system", definition: "A section of pipe sealed at both ends — by a closed valve, a shutoff faucet, or another ice plug — with no way for pressure to escape." },
    { term: "Heat trace cable", definition: "An electrical cable wrapped around a pipe that generates a small, continuous amount of heat specifically to keep the pipe above freezing in cold conditions." },
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
          "Water expands by about 9% in volume when it freezes solid, and inside a sealed pipe that extra volume has nowhere to go.",
          "A frozen pipe usually doesn't burst at the ice itself — it bursts wherever pressure trapped between the ice plug and a closed faucet finds the weakest point in the pipe wall.",
          "Letting a faucet drip during a hard freeze works by keeping the system open, not by keeping the water moving fast enough to avoid freezing.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Most liquids shrink slightly as they freeze, but water is unusual — it expands by roughly 9% in volume when it turns to ice. That&apos;s not a big deal in an open cup, where the ice just rises a little higher than the water did. Inside a closed pipe, though, that expanding ice has nowhere to expand into, so it pushes outward against the pipe walls and against whatever water is still trapped and unable to escape on either side of it. If that pressure builds high enough, the pipe fails — and it often fails somewhere other than right where the ice actually is.</div>}
        detailed={<div className="prose-p">The mechanism has two separate stages that are easy to conflate. First, a section of pipe reaches freezing temperature and forms an <TermLink href="/home-diy-knowledge/why-pipes-freeze-and-burst-in-winter">ice plug</TermLink> — a solid blockage. This alone doesn&apos;t burst anything; a fully solid ice plug sitting in an otherwise empty pipe causes no damage. The actual failure requires a second condition: a <TermLink href="/home-diy-knowledge/why-pipes-freeze-and-burst-in-winter">closed system</TermLink>, meaning liquid water is trapped between the ice plug and a closed valve or shut-off faucet with no way to escape. As freezing continues and the ice plug grows, it keeps pushing into that trapped liquid, and because water is essentially incompressible, the pressure on that trapped section climbs rapidly rather than gradually. Copper and most plastic piping can tolerate a meaningful amount of internal pressure, but eventually the trapped water&apos;s <TermLink href="/home-diy-knowledge/what-water-pressure-actually-measures">pressure</TermLink> exceeds what the pipe wall can hold, and it ruptures at its weakest point — a joint, a bend, or a spot with existing corrosion — which is very often several feet away from the ice plug itself, not at the frozen section. This is the counterintuitive part people usually miss: the ice isn&apos;t the direct cause of the burst, the trapped pressure it creates is.</div>}
      />
      <FootnoteAside>Because the burst point is pressure-driven rather than ice-driven, a burst pipe is often discovered nowhere near an exterior wall or an obviously cold spot — tracing the actual freeze point sometimes requires checking the whole closed section of pipe, not just the visible damage.</FootnoteAside>

      <p>
        Once the failure is understood as a two-step process — freeze first, then trapped pressure builds separately — the specific advice around frozen pipes (leave a <TermLink href="/home-diy-knowledge/why-a-faucet-drips-explained">faucet</TermLink> open, don&apos;t assume the leak is at the frozen spot) stops being a list of unrelated tips and starts following directly from the mechanism. Cold air infiltrating around an exterior wall — the same kind of gap addressed by <TermLink href="/home-diy-knowledge/what-weatherstripping-actually-does">weatherstripping</TermLink> — is also a common reason a supply line in an outer wall or cabinet drops below freezing in the first place.
      </p>

      <QuickCheck
        question="A pipe running through an exterior wall freezes solid during a cold snap, but both the faucet it feeds and the shutoff valve behind it are closed. What determines whether this pipe actually bursts?"
        options={[
          { text: "Whether pressure builds in water trapped between the ice plug and the closed faucet or valve as freezing continues", correct: true, explanation: "Correct. The freeze alone doesn't burst the pipe — it's the pressure that builds in trapped, incompressible water between the ice and a sealed point that eventually exceeds the pipe wall's strength." },
          { text: "Whether the ice itself physically cracks the pipe wall at the exact spot where it forms", correct: false, explanation: "The ice plug itself typically isn't what ruptures the pipe — the more common failure is pressure building in trapped liquid water elsewhere in the closed section." },
          { text: "The outdoor temperature at the moment the pipe fully freezes", correct: false, explanation: "Temperature determines whether and how fast freezing happens, but whether a burst actually occurs depends on whether the frozen section is a sealed, closed system that can build trapped pressure." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: An exterior hose bib freezing solid (baseline case)</h3>
      <p>
        An outdoor hose spigot left connected to a garden hose over winter freezes solid on a cold night. The hose creates a closed system — the ice plug forms inside the spigot or the short section of pipe just behind it, with the attached hose sealing off the far end. As the ice plug grows, it compresses the trapped water between itself and the sealed hose connection, and that pressure has no path to escape. This is one of the most common and most preventable frozen-pipe failures, largely because the fix is simple: disconnecting the hose before winter removes the seal that turns an ordinary freeze into a closed, pressurized system.
      </p>

      <QuickCheck
        question="Why does leaving a garden hose connected to an outdoor spigot over winter increase the risk of a burst, compared to disconnecting it?"
        options={[
          { text: "The connected hose seals the far end of the pipe, turning a simple freeze into a closed system where trapped water pressure can build", correct: true, explanation: "Correct. Without the hose, water in the spigot has more room to expand or drain; with it attached and sealed, freezing pressure has no escape path." },
          { text: "Garden hoses conduct cold temperatures into the pipe faster than open air would", correct: false, explanation: "The hose's main effect here isn't thermal conduction — it's sealing off the pipe's far end, which is what allows trapped pressure to build during freezing." },
          { text: "It has no real effect; hose bibs freeze and burst at the same rate whether a hose is attached or not", correct: false, explanation: "Whether the hose is attached is exactly the difference between an open system, which can tolerate the ice forming, and a closed one, which can build damaging pressure." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A supply line inside an uninsulated cabinet (edge case / variation)</h3>
      <div className="prose-p">
        A kitchen&apos;s cold-water supply line runs through an exterior-wall cabinet with no insulation and the cabinet doors kept closed, isolating that section from the room&apos;s heated air. Even though the room itself stays warm, the pipe inside the cabinet can drop below freezing because it&apos;s thermally cut off from that warmth — a variation on the baseline case where the &quot;cold zone&quot; isn&apos;t the whole room but a small, enclosed pocket around the pipe itself. Simply opening the cabinet doors during a hard freeze, so warmer room air can reach the pipe, often prevents the freeze entirely without any other change.
      </div>
      <QuickCheck
        question="A pipe inside a closed, uninsulated exterior-wall cabinet freezes even though the room around it stays warm. What does this reveal about which factor actually matters?"
        options={[
          { text: "The pipe's own immediate thermal environment matters more than the general room temperature — an enclosed, isolated pocket can drop below freezing independently", correct: true, explanation: "Correct. A closed cabinet against an exterior wall can trap cold air around the pipe even while the room itself stays comfortably warm, since it's thermally isolated from that warmer air." },
          { text: "Room temperature has no bearing on pipe freezing at all, only outdoor temperature does", correct: false, explanation: "Room temperature does matter — it's specifically the pipe's isolation from that warm room air, via the closed cabinet, that lets a cold pocket form despite it." },
          { text: "Cabinets are always colder than the rest of a room regardless of wall placement or insulation", correct: false, explanation: "It's specifically an exterior-wall, uninsulated, closed cabinet that creates this risk — an interior cabinet away from exterior walls wouldn't have the same cold-pocket problem." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A burst discovered far from any obviously cold pipe section (real-world / applied case)</h3>
      <p>
        After a multi-day cold snap, a homeowner finds water damage near a pipe joint in a heated basement, nowhere near an exterior wall or any section that seemed at risk of freezing. Tracing the system reveals the actual ice plug had formed upstream, in an unheated crawlspace section of the same continuous pipe run, and the trapped pressure from that freeze traveled through the water and ruptured the joint at its weakest point — the basement fitting — rather than the frozen crawlspace section itself. This is the practical payoff of understanding the two-stage mechanism: a burst pipe&apos;s location doesn&apos;t reliably point to where the freeze happened, so tracing the whole closed section of pipe matters more than focusing only on the visible damage.
      </p>
      <QuickCheck
        question="A pipe bursts at a joint in a heated basement, but the actual ice plug is later found in an unheated crawlspace section of the same pipe run. What does this illustrate?"
        options={[
          { text: "Pressure from a freeze can travel through trapped water and rupture the pipe's weakest point, which may be located well away from where the ice actually formed", correct: true, explanation: "Correct. Because the burst is pressure-driven rather than ice-driven, the failure point is wherever the pipe wall is weakest in the closed section, not necessarily at the frozen spot itself." },
          { text: "The basement joint must have frozen independently, unrelated to the crawlspace ice plug", correct: false, explanation: "The scenario describes one continuous closed pipe run — the crawlspace freeze created the pressure that ultimately ruptured the separate, weaker basement joint, not an independent freeze there." },
          { text: "This kind of distant burst is extremely rare and not a realistic risk to plan around", correct: false, explanation: "Because pressure, not ice, determines where a pipe fails, a burst occurring away from the actual freeze point is a well-documented and realistic pattern, not a rare edge case." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Why the burst happens away from the ice, not at it"
        type="flow"
        svgSrc="/diagrams/home-diy-knowledge-why-pipes-freeze-and-burst-in-winter-flow.svg"
        altText="Diagram of a section of pipe showing an ice plug forming and growing, trapped liquid water compressed between the ice and a closed faucet, and the pipe rupturing at a weaker joint some distance from the ice plug itself due to the buildup of pressure in the trapped water."
      />
      <p>
        Follow the pressure, not the ice, along the pipe in the diagram — the rupture happens at the weakest point in the whole closed section, which is rarely the same spot as the ice plug itself.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a burst pipe must be located right at the frozen section.", fix: "Check the entire closed run of pipe for the actual rupture point — pressure damage often shows up at a joint or weak spot some distance from the ice itself." },
          { mistake: "Believing a dripping faucet prevents freezing by keeping the water moving fast.", fix: "Understand that a drip works mainly by keeping the system open rather than sealed, relieving pressure buildup even if a section still freezes." },
          { mistake: "Leaving a garden hose attached to an outdoor spigot through winter.", fix: "Disconnect and drain hoses before the first hard freeze — an attached hose seals the pipe into a closed system that's far more prone to a pressure-driven burst." },
        ]}
      />
      <MisconceptionCallout
        myth="A frozen pipe bursts because the ice cracks it open."
        reality={<p>The ice plug itself usually isn&apos;t what ruptures the pipe. Water expands by roughly 9% in volume as it freezes, and in a sealed section of pipe &#8212; trapped between the growing ice plug and a closed valve or faucet &#8212; that expansion has nowhere to go. The resulting pressure builds in the still-liquid water on either side of the ice, and the pipe fails wherever its wall is weakest, which is very often a joint, bend, or corroded spot some distance from the ice plug itself rather than the frozen section. This is why a burst is sometimes discovered in a heated part of the house even when the actual freeze happened somewhere colder, upstream on the same closed run.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="How much a given volume of trapped water expands on freezing"
        description="Water expands by about 9% in volume when it freezes solid — this estimates the added volume a section of pipe has to accommodate, illustrating why a fully sealed section has nowhere for that extra volume to go."
        fields={[
          { key: "waterVolumeMl", label: "Trapped water volume (mL)", defaultValue: 500, step: 10 },
        ]}
        resultLabel="Approximate added volume once frozen (mL)"
        formula="iceExpansionVolumeMl"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Disconnect and drain garden hoses from outdoor spigots before the first hard freeze of the season.",
          "Let faucets fed by exposed or exterior-wall pipes drip slightly during a hard freeze, to keep the system open rather than sealed.",
          "Open cabinet doors under exterior-wall sinks during cold snaps so warmer room air can reach the supply pipes inside.",
          "Consider heat trace cable or added insulation for any pipe run through an unheated crawlspace, attic, or garage.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why do pipes burst when they freeze?", answer: "The ice itself usually isn't the direct cause. Water expands about 9% in volume when it freezes, and in a sealed pipe section that expansion compresses trapped liquid water, building pressure until the pipe fails at its weakest point — which is often not the same spot as the ice plug." },
          { question: "Does letting a faucet drip really prevent frozen pipes?", answer: "It helps mainly by keeping the plumbing system open rather than sealed, so pressure from any freezing that does occur has somewhere to relieve itself, rather than by keeping the water moving too fast to freeze." },
          { question: "Why did my pipe burst somewhere that wasn't even that cold?", answer: "Because the failure is pressure-driven, not ice-driven, the rupture happens at the weakest point in the entire closed section of pipe — which can be a joint or fitting well away from wherever the ice plug actually formed." },
          { question: "How much does water actually expand when it freezes?", answer: "About 9% by volume. That may sound modest, but inside a fully sealed pipe section with no room to expand into, it's enough to build pressure well beyond what many pipe materials and joints can safely hold." },
          { question: "Do all types of pipes freeze and burst the same way?", answer: "The freeze-and-pressure mechanism is the same regardless of pipe material, but copper tends to be more prone to a sudden split under pressure, while some plastics can flex slightly more before failing — neither material is immune to a burst if a section becomes a fully closed, freezing system." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
