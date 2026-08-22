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
  title: "Travel Health & Vaccination Basics",
  category: "health-body-basics",
  order: 29,
  subtopic: "vaccination-and-preventive-health-literacy",
  tags: ["travel health", "travel vaccines", "yellow fever", "traveler's diarrhea"],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "Travel vaccine needs depend on where you're going and what disease risks actually exist there, not on where you live — which is why travel health guidance is destination-specific rather than one-size-fits-all.",
  summary: "Travel health planning layers destination-specific vaccines and precautions on top of a person's routine vaccinations, because disease risk varies geographically — a vaccine irrelevant at home can be strongly recommended or even legally required for entry into a specific country, and this destination-specific risk assessment is best done well before departure with a travel medicine provider.",
  sources: [
    { label: "CDC — Travelers' Health, Destination Pages", url: "https://wwwnc.cdc.gov/travel" },
    { label: "World Health Organization — International Travel and Health", url: "https://www.who.int/travel-advice" },
    { label: "CDC — Yellow Fever Vaccine & Malaria Prevention Information", url: "https://wwwnc.cdc.gov/travel/yellowbook/home" },
  ],
  seeAlso: [
    "health-body-basics/understanding-standard-vaccination-schedules",
    "health-body-basics/why-preventive-health-checkups-matter",
    "health-body-basics/understanding-common-digestive-upsets",
  ],
  glossary: [
    {"term":"Routine vaccine","definition":"A vaccine recommended for essentially everyone in a country's standard schedule regardless of travel plans, such as MMR or tetanus."},
    {"term":"Recommended travel vaccine","definition":"A vaccine advised for a specific destination based on real disease risk there, even though it isn't part of a traveler's home-country routine schedule."},
    {"term":"Required vaccine (entry requirement)","definition":"A vaccine a country legally requires for entry (most commonly yellow fever, under International Health Regulations), documented on an International Certificate of Vaccination."},
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
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
      <strong>This entry explains how travel health planning is structured — it is not personalized travel medical advice.</strong> Actual vaccine and medication needs for a specific trip should be confirmed with a doctor or a travel medicine clinic, ideally four to six weeks before departure.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
      points={[
      "Travel health needs fall into three layers: routine vaccines everyone should already have, destination-specific recommended vaccines based on real local disease risk, and a small number of destinations with legally required vaccines for entry.",
      "Yellow fever is the main vaccine with a formal international entry requirement, enforced through an official International Certificate of Vaccination that some countries check at the border.",
      "Most travel health guidance is destination- and itinerary-specific — a trip's actual risk depends on which country, which region within it, the season, and planned activities (rural vs. urban, altitude, food and water sources), not just the country name alone.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Some diseases are common in certain parts of the world and rare or absent elsewhere. A <TermLink href="/health-body-basics/travel-health-and-vaccination-basics">routine vaccine</TermLink> like MMR (measles, mumps, rubella) is recommended for nearly everyone regardless of travel. A <TermLink href="/health-body-basics/travel-health-and-vaccination-basics">recommended travel vaccine</TermLink> — like typhoid or hepatitis A for many destinations — targets a disease that&apos;s uncommon at home but a real risk at the destination. A small number of countries also have a <TermLink href="/health-body-basics/travel-health-and-vaccination-basics">required vaccine</TermLink> for entry, checked at the border, most commonly yellow fever.</div>}
      detailed={<div className="prose-p">The CDC organizes its published travel health guidance by destination for exactly this reason — the same traveler heading to different countries, or even different regions of the same country, can face meaningfully different disease risk profiles. Beyond vaccines, destination-specific guidance also covers medication (like malaria prophylaxis for regions with malaria transmission), food and water precautions (relevant to typhoid and traveler&apos;s diarrhea risk), and altitude or climate considerations. This is why a credible travel health consultation starts with the actual itinerary — country, region, season, accommodation type, and planned activities — rather than a single generic travel checklist, since two trips to the same country (a week in a capital-city hotel vs. a month of rural trekking) can carry very different real risk profiles.</div>}
      />
      <FootnoteAside>The International Health Regulations, coordinated by the World Health Organization, are what give yellow fever vaccination its formal cross-border legal standing — a documented vaccination on an approved International Certificate of Vaccination or Prophylaxis can be required at entry to certain countries, particularly for travelers arriving from regions where yellow fever transmission occurs.</FootnoteAside>

      <p>
      Timing also matters independently of the destination: many vaccines need two to four weeks to build full immune protection, which is the main reason travel health guidance recommends a consultation well before departure rather than at the airport.
      </p>

      <QuickCheck
      question="Why might a vaccine that's not part of someone's routine home-country schedule still be strongly recommended for a specific trip?"
      options={[
      { text: "Because all vaccines are recommended for all travelers regardless of destination", correct: false, explanation: "Travel vaccine recommendations are specifically destination-dependent — a vaccine relevant for one trip may be irrelevant for another, even for the same traveler." },
      { text: "Because disease risk varies geographically — a disease that's rare or absent at home can have real, documented transmission at a specific travel destination, making a vaccine irrelevant at home genuinely protective there", correct: true, explanation: "Correct. This geographic variation in disease risk is the entire basis for destination-specific travel vaccine guidance, as published by the CDC and WHO for each country/region." },
      { text: "Because travel vaccines are required by international law for every country", correct: false, explanation: "Only a small number of vaccines (mainly yellow fever) carry formal international entry requirements for specific countries — most travel vaccines are recommended based on risk, not legally mandated." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A short urban business trip (baseline case)</h3>
      <div className="prose-p">
      A traveler making a five-day business trip to a major capital city, staying in a hotel and eating at established restaurants, typically faces a lower risk profile than rural or extended travel in the same country — routine vaccines being current is usually the main check, alongside destination-specific guidance on food and water precautions for that country.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Extended rural travel in a yellow-fever risk region (edge case / variation)</h3>
      <div className="prose-p">
      A traveler planning a month of rural travel through a region with documented yellow fever transmission faces a substantially different picture: the yellow fever vaccine may be required for entry (or for onward travel to a third country, since some countries require proof of yellow fever vaccination from travelers arriving from at-risk regions, not just those originating there), alongside recommended vaccines like typhoid and hepatitis A given extended rural food and water exposure, and possibly malaria prophylaxis medication depending on the specific region and season.
      </div>

      <QuickCheck
      question="Why might a country require proof of yellow fever vaccination from a traveler who is not visiting a yellow-fever-risk area themselves?"
      options={[
      { text: "It's a mistake — countries only ever check vaccination status for travelers going to a risk area", correct: false, explanation: "Some countries specifically require proof of yellow fever vaccination from anyone arriving from a country or region with yellow fever transmission risk, regardless of the traveler's ultimate destination within the requiring country — a border-control measure to prevent importing the disease." },
      { text: "Because a country can require proof of vaccination from travelers arriving from an at-risk region, as a measure to prevent the disease being carried into a new area — this is a documented, real practice under International Health Regulations", correct: true, explanation: "Correct. This is exactly why itinerary history (not just final destination) matters when checking yellow fever entry requirements — CDC and WHO travel health pages address this directly for specific routes." },
      { text: "Because yellow fever vaccination is required for entry into every country in the world", correct: false, explanation: "Yellow fever entry requirements apply to a specific, published list of countries and circumstances — it is not a universal global entry requirement." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why the timing of a travel health visit matters (real-world / applied case)</h3>
      <div className="prose-p">
      Several vaccines require two doses spaced weeks apart, or take two to four weeks after the final dose to reach full protective effect. A traveler who visits a travel medicine clinic the day before departure may not have time to complete a multi-dose series or reach full immunity before arrival — which is the documented reason the CDC recommends scheduling a travel health consultation at least four to six weeks before departure, longer for complex itineraries or multi-dose vaccines.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Three layers of travel health preparation"
      type="flow"
      svgSrc="/diagrams/health-body-basics-travel-health-and-vaccination-basics-three-layers.svg"
      altText="Three stacked layers: the base layer labeled routine vaccines already current for everyone, a middle layer labeled destination-specific recommended vaccines and precautions based on real local disease risk, and a top layer labeled entry-required vaccines such as yellow fever for specific countries, illustrating how travel health planning builds on top of a person's existing routine vaccination status."
      />
      <p>
      Each layer depends on the one below it — a travel health consultation typically starts by confirming routine vaccines are current, then adds destination-specific layers on top based on the actual itinerary.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming travel vaccine needs are the same for every country, or for every trip to the same country.", fix: "Check destination- and itinerary-specific guidance (CDC's destination pages are organized this way) — risk depends on region, season, and activities, not just the country name." },
      { mistake: "Waiting until just before departure to seek travel health guidance.", fix: "Schedule a travel health consultation at least four to six weeks before departure, since some vaccines need multiple doses or weeks to reach full protection." },
      { mistake: "Assuming routine vaccines are automatically covered and don't need checking before travel.", fix: "Confirm routine vaccines (like MMR and tetanus) are current as part of travel planning — some outbreaks abroad specifically involve diseases routine vaccination already protects against." },
      ]}
      />
      <MisconceptionCallout
      myth="If a vaccine isn't legally required for entry into a country, it isn't worth getting for that trip."
      reality={<p>Legal entry requirements (like yellow fever for certain countries) are a narrow, specific category — most travel-relevant disease risk is addressed through recommended, not required, vaccines and precautions. A destination can have serious, well-documented typhoid or hepatitis A risk, for example, with no legal vaccine requirement at all — the CDC and WHO&apos;s risk-based recommendations, not entry-requirement law, are the more complete guide to real travel health risk.</p>}
      />

      <QuickCheck
      question="Someone checks that their destination has no legally required vaccines and concludes no travel health precautions are needed. What's the flaw in this reasoning?"
      options={[
      { text: "There's no flaw — legal requirements are the only thing that matters for travel health", correct: false, explanation: "Legal entry requirements cover only a narrow set of situations (mainly yellow fever for specific countries) — most travel health risk is addressed through risk-based recommendations, not legal requirements." },
      { text: "The flaw is equating 'not legally required' with 'no real risk' — many genuinely risky destinations for diseases like typhoid or hepatitis A carry no legal vaccine requirement at all, only a risk-based recommendation", correct: true, explanation: "Correct. Legal requirements and risk-based recommendations are two different systems — checking only the legal requirement misses most of the actual destination-specific health guidance." },
      { text: "The flaw is that yellow fever vaccination is legally required everywhere", correct: false, explanation: "Yellow fever entry requirements apply to a specific, published list of countries — it is not a universal requirement, which is itself part of why checking the actual destination-specific guidance matters." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Check the CDC's destination-specific travel health page (or WHO's international travel guidance) for every country on your itinerary, not just the primary destination.",
      "Schedule a travel health consultation four to six weeks before departure to allow time for multi-dose vaccines or vaccines that need weeks to reach full protection.",
      "Confirm routine vaccines are current as part of travel planning, not just destination-specific ones.",
      "Check yellow fever entry requirements specifically if your itinerary includes any country with documented transmission risk, even if it's not your final destination.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Do I need special vaccines for international travel?", answer: "It depends entirely on the destination and itinerary — check the CDC's or WHO's destination-specific travel health guidance, since disease risk varies significantly by country and region." },
      { question: "Which vaccine is most commonly legally required for entry?", answer: "Yellow fever is the main vaccine with a formal international entry requirement for specific countries, enforced through an official International Certificate of Vaccination under International Health Regulations." },
      { question: "How far before a trip should I get travel vaccines?", answer: "The CDC recommends at least four to six weeks before departure, since some vaccines require multiple doses or take weeks to reach full protective effect." },
      { question: "If a vaccine isn't required for entry, does that mean I don't need it?", answer: "Not necessarily — most travel-relevant disease risk is addressed through risk-based recommendations, not legal entry requirements. A destination can carry real, documented risk for a disease with no legal vaccine requirement at all." },
      { question: "Where should I go for personalized travel health advice?", answer: "A doctor or a dedicated travel medicine clinic, ideally referencing your specific itinerary, timing, and planned activities — this entry explains the general structure only." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
