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
  title: "Onam",
  category: "festivals-culture",
  order: 8,
  subtopic: "major-indian-festivals",
  tags: ["onam", "kerala festivals", "harvest festivals", "indian festivals"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Onam is Kerala's ten-day harvest festival, marking the mythical King Mahabali's annual homecoming and celebrated across religions with flower carpets and feasts.",
  summary: "Onam is a ten-day harvest festival native to the Indian state of Kerala, built around the legend of King Mahabali's yearly return and celebrated widely across religious communities as a shared cultural event, not only a Hindu one.",
  sources: [
    { label: "Encyclopaedia Britannica — Onam", url: "https://www.britannica.com/topic/Onam" },
    { label: "Kerala Tourism (Government of Kerala) — Onam", url: "https://www.keralatourism.org/onam/" },
    { label: "Press Information Bureau, Government of India — Onam", url: "https://pib.gov.in" },
  ],
  seeAlso: [
    "festivals-culture/diwali-explained",
    "festivals-culture/regional-harvest-festivals-of-india",
    "festivals-culture/pongal-and-makar-sankranti",
    "festivals-culture/christmas-in-india-and-globally",
  ],
  glossary: [
    { term: "Pookalam", definition: "A decorative carpet of flower petals laid at the entrance of a home during Onam, rebuilt and expanded daily across the ten days of the festival." },
    { term: "Onasadya", definition: "The elaborate vegetarian feast served on banana leaves on the main day of Onam, traditionally made up of around 26 dishes." },
    { term: "Thiruvonam", definition: "The tenth and most important day of the Onam festival, when the main feast, boat races, and other central rituals take place." },
  ],
  author: {
    slug: "sara-reed-m-j",
    name: "Sara Reed M J",
    credentialLine: "Contributing Editor, KnowThisWell",
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
          "Onam is a ten-day harvest festival centered on the state of Kerala, built around the legend of the mythical King Mahabali returning to visit his former subjects once a year.",
          "Unlike most entries in this cluster, Onam is celebrated as a broad Kerala cultural festival across religious lines — Hindu, Christian, and Muslim Malayali households all take part in the harvest and homecoming customs.",
          "The festival follows the Malayalam calendar and falls in the month of Chingam (typically August or September), with the tenth day, Thiruvonam, as the main event.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Onam is a ten-day harvest festival celebrated across the Indian state of Kerala, usually falling in August or September. Families lay out flower carpets called <TermLink href="/festivals-culture/onam">pookalam</TermLink> at their doorsteps, cook a large feast called the <TermLink href="/festivals-culture/onam">Onasadya</TermLink>, and watch traditional snake-boat races. The story behind it is the annual homecoming of the mythical King Mahabali, a ruler said to have governed Kerala during a golden age of prosperity and equality.</div>}
        detailed={<div className="prose-p">According to the legend most commonly cited, King Mahabali was a just and beloved Asura (demon-king in some tellings, though the story frames him favorably) ruler whose growing power concerned the gods. The god Vishnu, in his dwarf incarnation Vamana, asked Mahabali for as much land as he could cover in three steps; Mahabali agreed, and Vamana grew to cosmic size, covering the earth and sky in two steps and placing his third on Mahabali&apos;s head, pushing him into the netherworld. Because of Mahabali&apos;s humility and devotion, Vishnu granted him one wish: to return to visit his former kingdom and people once a year. Onam marks that annual homecoming. The ten days build toward <TermLink href="/festivals-culture/onam">Thiruvonam</TermLink>, the main day, and include Vallam Kali (snake-boat races on Kerala&apos;s backwaters), Pulikali (performers painted as tigers dancing through the streets), and Onathappan, small clay figures placed in the pookalam representing Mahabali and Vamana. A distinguishing feature of Onam compared to most festivals in this cluster is its reach across religious lines within Kerala — because it is understood locally as a harvest and cultural festival tied to Kerala&apos;s agricultural calendar and regional identity rather than a temple-worship occasion, it is widely observed by Kerala&apos;s Christian and Muslim communities as well as Hindus, with public offices, schools, and businesses across the state closing for the holiday regardless of the individual household&apos;s religion.</div>}
      />
      <FootnoteAside>Kerala&apos;s famous Vallam Kali snake-boat races use chundan vallam — war canoes historically used in regional conflicts between Kerala&apos;s kingdoms — that can stretch over 100 feet and carry more than 100 rowers, repurposed today purely for Onam-season competition.</FootnoteAside>

      <QuickCheck
        question="Why is Onam distinctive compared to most Hindu-linked festivals in this cluster?"
        options={[
          { text: "It is celebrated exclusively by Hindu priests in temple settings", correct: false, explanation: "The opposite is closer to true — Onam has little of the temple-ritual character of some other festivals and is celebrated broadly at the household and community level." },
          { text: "It is widely observed across religious communities in Kerala, not only by Hindus", correct: true, explanation: "Correct. Because Onam is understood locally as a harvest and cultural festival tied to Kerala's regional identity, Christian and Muslim Malayali households commonly take part alongside Hindu households." },
          { text: "It has no connection to any legend or story at all", correct: false, explanation: "Onam does have a well-known legend behind it — the story of King Mahabali's annual homecoming and Vishnu's Vamana incarnation." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A household observing the ten days (baseline case)</h3>
      <div className="prose-p">Starting on the first day (Atham), a family begins laying a small pookalam at their entrance, adding a new ring of flowers and colors each day so that by Thiruvonam, the tenth day, it has grown into a large, elaborate design. On Thiruvonam itself, the household prepares the Onasadya — a vegetarian feast served on a banana leaf, traditionally including dishes like sambar, avial, and payasam — and gathers with extended family. New clothes, called Onakodi, are also traditionally gifted to family members ahead of the main day.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The Vallam Kali snake-boat races at Aranmula — a regional variation</h3>
      <div className="prose-p">Not every part of Kerala centers Onam on boat racing — it is a strong regional tradition tied specifically to the state&apos;s backwater districts. The Aranmula Uthrattathi Vallam Kali, held on the Pamba River, is one of the most famous of these races and is itself linked to a separate local legend involving an offering to the Aranmula Parthasarathy Temple, layered on top of the general Onam-season timing. Households in Kerala&apos;s highland or urban areas without backwater access typically don&apos;t organize boat races themselves, even though the general household customs (pookalam, Onasadya) are shared statewide.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Onam in the Malayali diaspora (real-world / applied case)</h3>
      <div className="prose-p">Malayali communities outside Kerala — in cities like Mumbai, Delhi, Dubai, Singapore, and across North America — organize community Onam celebrations, often centered on a shared Onasadya feast, cultural performances, and sometimes a scaled-down pookalam competition, even without access to backwaters for boat races. These diaspora events function as much as a marker of Malayali regional identity as a religious or even household observance, similar to how other regional Indian festivals persist abroad as cultural touchstones for a specific linguistic community.</div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming Onam is purely a Hindu religious festival like Diwali or Navratri.", fix: "Onam functions primarily as a Kerala state harvest and cultural festival, and is widely celebrated by Christian and Muslim Malayali households alongside Hindu ones." },
          { mistake: "Assuming every part of Kerala celebrates Onam with boat races.", fix: "Vallam Kali is a strong but regional backwater-district tradition (Aranmula being the most famous); it isn't a universal household practice across the whole state." },
          { mistake: "Treating the pookalam as a one-time decoration made only on the main day.", fix: "The pookalam is traditionally built up gradually over all ten days, growing larger and more elaborate each day, with the biggest design completed on Thiruvonam itself." },
        ]}
      />
      <MisconceptionCallout
        myth="Onam is just a Hindu religious festival, similar in kind to Diwali or Navratri."
        reality={<p>Onam does carry a well-known Hindu legend (King Mahabali and Vishnu&apos;s Vamana incarnation), but it functions in practice as a broader Kerala cultural and harvest festival rather than a temple-centered religious observance. Because it&apos;s tied to regional and agricultural identity as much as religious belief, Onam is widely celebrated by Kerala&apos;s Christian and Muslim communities too, and the state government marks it as an official holiday for all residents — a pattern that sets it apart from most single-religion festivals in this cluster.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a pookalam photo online, notice the size and complexity — it usually signals how many of the ten days the household has been building it up.",
          "If you're invited to an Onasadya, come hungry — the traditional feast can include over 20 separate dishes served together on a banana leaf.",
          "If you hear about Vallam Kali races, check which district is hosting — it's a strong regional tradition tied to Kerala's backwaters, not a statewide activity.",
          "Notice who is celebrating Onam in your community — because it crosses religious lines in Kerala, don't assume every celebrant is Hindu.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is Onam and why is it celebrated?", answer: "Onam is a ten-day harvest festival native to Kerala, built around the legend of the mythical King Mahabali's annual homecoming to visit his former kingdom, granted to him by the god Vishnu." },
          { question: "Is Onam only celebrated by Hindus?", answer: "No — because Onam functions largely as a Kerala cultural and harvest festival rather than a temple-worship occasion, it is widely celebrated by Christian and Muslim Malayali households too, and is an official holiday for all residents of the state." },
          { question: "What is a pookalam?", answer: "A pookalam is a decorative carpet made of flower petals, laid at a home's entrance and built up in size and complexity over the ten days of Onam, culminating on Thiruvonam." },
          { question: "When is Onam celebrated?", answer: "Onam falls in the Malayalam calendar month of Chingam, which typically corresponds to late August or early September on the Gregorian calendar." },
          { question: "What is served at an Onasadya?", answer: "The Onasadya is a large vegetarian feast served on a banana leaf, traditionally made up of around 26 dishes including sambar, avial, and payasam, eaten on Thiruvonam, the festival's main day." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
