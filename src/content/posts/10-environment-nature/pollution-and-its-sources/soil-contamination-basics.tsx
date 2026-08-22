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
  title: "Soil Contamination Basics",
  category: "environment-nature",
  order: 12,
  subtopic: "pollution-and-its-sources",
  tags: ["soil contamination", "heavy metals", "bioaccumulation", "brownfield", "environmental remediation"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Unlike air or water pollution, soil contamination mostly stays put — heavy metals like lead don't wash away or blow off, they persist in place for decades, which is why old industrial sites need active remediation rather than time alone.",
  summary: "Soil contamination happens when pollutants like heavy metals, petroleum byproducts, or pesticide residue accumulate in soil, and because soil doesn't disperse the way air or flowing water does, contamination tends to stay concentrated at its original location for decades unless actively removed or treated.",
  sources: [
    { label: "US EPA — Superfund: National Priorities List", url: "https://www.epa.gov/superfund/superfund-national-priorities-list-npl" },
    { label: "World Health Organization — Soil pollution and health", url: "https://www.who.int/health-topics/soil-pollution" },
    { label: "US EPA — Brownfields Program", url: "https://www.epa.gov/brownfields" },
  ],
  seeAlso: [
    "environment-nature/water-pollution-causes-and-consequences",
    "environment-nature/industrial-pollution-and-regulation-basics",
    "environment-nature/understanding-e-waste-and-its-disposal",
  ],
  glossary: [
    {"term":"Heavy metal contamination","definition":"Soil pollution from metals like lead, arsenic, cadmium, or mercury, which don't break down over time and can persist in soil indefinitely unless physically removed or chemically treated."},
    {"term":"Bioaccumulation","definition":"The buildup of a substance (often a heavy metal or persistent chemical) in a living organism faster than it can be excreted, increasing in concentration as it moves up the food chain."},
    {"term":"Brownfield","definition":"A property where redevelopment or reuse is complicated by the presence, or potential presence, of a hazardous substance, pollutant, or contaminant from prior industrial or commercial use."},
    {"term":"Remediation","definition":"The active process of removing, containing, or chemically treating contaminated soil or groundwater, as opposed to waiting for natural processes to disperse the pollutant."},
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
      "Soil contamination behaves fundamentally differently from air or water pollution — soil doesn't disperse pollutants the way moving air or flowing water does, so contaminants tend to stay concentrated at their original location.",
      "Heavy metals (lead, arsenic, cadmium, mercury) are the most persistent soil contaminant category because they don't chemically break down over time — they only decrease in concentration through active removal or extremely slow natural leaching.",
      "Contaminated soil can enter the food chain even without visible signs, since plants grown in it absorb metals into their tissue, which is the main pathway for bioaccumulation up to humans.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Soil contamination happens when harmful substances — often <TermLink href="/environment-nature/soil-contamination-basics">heavy metal contamination</TermLink> like lead or arsenic, but also petroleum products and pesticide residue — build up in the ground, usually from past industrial activity, mining, or improper waste disposal. Unlike air pollution that disperses with wind, or water pollution that flows downstream, contaminated soil mostly stays exactly where it was contaminated, sometimes for decades, until someone actively cleans it up.</div>}
      detailed={<div className="prose-p">Heavy metals don&apos;t degrade chemically the way organic pollutants can — a lead atom in contaminated soil today is still a lead atom decades later, since <TermLink href="/environment-nature/soil-contamination-basics">remediation</TermLink> (physical removal, capping, or chemical stabilization) is the primary way concentration actually decreases, rather than natural degradation. This persistence is exactly why former industrial sites, called <TermLink href="/environment-nature/soil-contamination-basics">brownfields</TermLink>, can remain contaminated and unusable for redevelopment long after the polluting activity itself has stopped. The contamination pathway into humans usually runs through plants: crops grown in contaminated soil take up metals into their roots and tissue, and eating those crops (or feeding them to livestock that are later eaten) is the main route for <TermLink href="/environment-nature/soil-contamination-basics">bioaccumulation</TermLink> to reach people, alongside direct ingestion of contaminated soil or dust, which is a particular concern for young children.</div>}
      />
      <FootnoteAside>The US EPA&apos;s Superfund program, created in 1980, specifically exists to identify and remediate the country&apos;s most seriously contaminated sites — its National Priorities List includes former industrial and mining sites still undergoing cleanup decades after the original contaminating activity ended, illustrating just how long soil contamination can persist without active intervention.</FootnoteAside>

      <p>
      Because soil contamination stays localized rather than dispersing, its risk is highly site-specific — a contaminated lot next to a former factory can sit right beside completely clean soil a short distance away, unlike air pollution which tends to affect a whole region more uniformly.
      </p>

      <QuickCheck
      question="A factory that used lead-based processes closed 40 years ago. Is the soil beneath it likely to still be contaminated today, all else being equal?"
      options={[
      { text: "No, 40 years is more than enough time for any contamination to have naturally disappeared", correct: false, explanation: "Lead doesn't chemically degrade over time. Without active remediation, lead contamination from decades ago can still be present in soil at similar concentrations today." },
      { text: "Yes — lead doesn't break down chemically over time, so without active remediation (removal, capping, or treatment), the contamination can persist at similar concentrations for decades or longer", correct: true, explanation: "Correct. This persistence is exactly why former industrial sites (brownfields) often remain flagged and unusable for redevelopment long after the polluting activity has stopped, unless they undergo formal remediation." },
      { text: "It depends only on how much rain the site has received, since rain washes contamination away completely over time", correct: false, explanation: "Rain can slowly leach some contaminants deeper into soil or groundwater, but this is a slow process that doesn't reliably eliminate metal contamination — it's not a substitute for active remediation." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A former gas station site (baseline case)</h3>
      <div className="prose-p">
      A gas station closes after decades of operation. Underground fuel tanks had small, undetected leaks over the years, leaving petroleum hydrocarbons in the surrounding soil. Before the site can be redeveloped for another use, an environmental assessment and remediation (often removing and replacing the contaminated soil, or treating it in place) is required — a routine process for former fueling sites specifically because petroleum contamination doesn&apos;t disperse away on its own.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Lead contamination near a former smelter (edge case / variation)</h3>
      <div className="prose-p">
      A residential neighborhood built near a former lead smelter shows elevated lead levels in garden soil decades after the smelter closed, even though there&apos;s no petroleum or organic contamination involved at all. Because lead is a heavy metal rather than an organic compound, this case requires a different remediation approach (often soil removal and replacement, or capping with clean soil) than the gas-station example — illustrating that &quot;soil contamination&quot; isn&apos;t one uniform problem with one uniform fix.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A Superfund mining site (real-world / applied case)</h3>
      <div className="prose-p">
      A former mining operation left behind soil and waste piles with high concentrations of arsenic and cadmium, listed on the EPA&apos;s Superfund National Priorities List for cleanup. Decades after mining stopped, remediation crews still work through phases of soil removal, containment, and monitoring, because the metals present don&apos;t naturally decay — the site&apos;s timeline for cleanup is measured in years to decades of active work, not natural recovery over time.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Bioaccumulation pathway: contaminated soil to the human food chain"
      type="flow"
      svgSrc="/diagrams/environment-nature-soil-contamination-basics-bioaccumulation-pathway.svg"
      altText="A four-step vertical flow diagram: first, contaminated soil shown with metal particle icons; second, an arrow into a crop plant absorbing the particles through its roots; third, an arrow into a person or livestock eating the crop; fourth, an arrow showing concentration increasing at each step, labeled bioaccumulation, ending in a person icon with a warning marker."
      />
      <p>
      The concentration doesn&apos;t stay constant as it moves up this chain — it tends to increase at each step, which is the defining feature of bioaccumulation and why even soil concentrations that seem individually modest can pose a real risk further up the chain.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming contaminated soil will clean itself up naturally given enough time.", fix: "Recognize that heavy metals in particular don't chemically degrade — active remediation, not time alone, is what reduces contamination levels." },
      { mistake: "Assuming soil contamination only matters if the site 'looks' polluted.", fix: "Heavy metal and pesticide contamination is frequently invisible to the eye — it's identified through soil testing, not visual inspection." },
      { mistake: "Treating all soil contamination as the same problem with the same fix.", fix: "Petroleum, heavy metals, and pesticide residue require different remediation approaches — there's no single universal soil cleanup method." },
      ]}
      />
      <MisconceptionCallout
      myth="If an old industrial site has been abandoned and undisturbed for decades, any contamination has likely faded away on its own by now."
      reality={<p>Heavy metal contamination specifically does not fade with time the way some organic pollutants can slowly break down — lead, arsenic, cadmium, and mercury persist in soil indefinitely without active remediation. Decades of abandonment alone provide no meaningful natural cleanup for a metals-contaminated site.</p>}
      />

      <QuickCheck
      question="Why is soil contamination often described as more 'localized' than air or water pollution?"
      options={[
      { text: "Because soil contamination is always less severe than air or water pollution", correct: false, explanation: "Severity isn't the distinguishing factor — soil contamination can be extremely severe at its site. The distinction is about how far the pollution spreads from its origin." },
      { text: "Because soil doesn't flow or disperse the way air or water does, so contamination tends to stay concentrated near its original source rather than spreading across a wide area", correct: true, explanation: "Correct. This is exactly why a contaminated lot can sit right next to completely clean soil, unlike air pollution which tends to affect a broader surrounding area more evenly." },
      { text: "Because soil contaminants are always less toxic per unit of concentration than air or water contaminants", correct: false, explanation: "Toxicity depends on the specific substance, not the medium it's found in — heavy metals in soil can be highly toxic even in modest concentrations." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "If you're growing food in soil near an older building, industrial area, or busy roadway, consider a soil test for lead before planting edible crops directly in the ground.",
      "When buying or redeveloping a property with a prior industrial or commercial history, check whether it's listed on an environmental contamination database before assuming the soil is clean.",
      "Understand that 'the site looks fine now' is not evidence of clean soil — heavy metal and pesticide contamination require testing to detect, not visual inspection.",
      "Support brownfield redevelopment programs in your area, since they specifically fund the remediation needed to safely reuse contaminated former industrial sites.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Does contaminated soil clean itself over time?", answer: "Heavy metal contamination generally does not — lead, arsenic, cadmium, and mercury don't chemically degrade, so active remediation (removal, capping, or treatment) is needed to actually reduce concentration, not time alone." },
      { question: "What is a brownfield?", answer: "A property where redevelopment is complicated by the presence, or potential presence, of contamination from a prior industrial or commercial use — the term specifically flags the site as needing environmental assessment before reuse." },
      { question: "How does soil contamination reach people?", answer: "Mainly through plants grown in contaminated soil absorbing metals into their tissue, which people or livestock then eat — this bioaccumulation pathway, plus direct ingestion of contaminated soil or dust, is the primary route to human exposure." },
      { question: "Is soil contamination the same as water pollution?", answer: "No. They're related (contaminated soil can leach into groundwater), but soil contamination stays far more localized since soil doesn't flow or disperse the way water does, while water pollution can travel significant distances downstream." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
