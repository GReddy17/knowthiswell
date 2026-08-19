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
  title: "Ganesh Chaturthi",
  category: "festivals-culture",
  order: 6,
  subtopic: "major-indian-festivals",
  tags: ["ganesh chaturthi", "hindu festivals", "ganesha", "maharashtra"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Ganesh Chaturthi celebrates the birth of the elephant-headed god Ganesha, marked by installing and later immersing clay idols over 1 to 11 days.",
  summary: "Ganesh Chaturthi honors the birth of Ganesha, the remover of obstacles, with clay idols installed in homes and public pandals and ceremonially immersed in water at the festival's end.",
  sources: [
    { label: "Encyclopaedia Britannica — Ganesh Chaturthi", url: "https://www.britannica.com/topic/Ganesh-Chaturthi" },
    { label: "BBC Religion — Ganesh Chaturthi", url: "https://www.bbc.co.uk/religion/religions/hinduism/holydays/ganesh.shtml" },
  ],
  seeAlso: [
    "festivals-culture/navratri-and-durga-puja",
    "festivals-culture/diwali-explained",
    "festivals-culture/festival-art-and-craft-traditions-rangoli-mehndi-etc",
  ],
  glossary: [
    { term: "Ganesha", definition: "The elephant-headed Hindu god of wisdom, new beginnings, and the remover of obstacles, son of Shiva and Parvati." },
    { term: "Visarjan", definition: "The ceremonial immersion of a deity's idol in water, marking the conclusion of a festival like Ganesh Chaturthi or Durga Puja." },
    { term: "Modak", definition: "A sweet dumpling considered Ganesha's favorite food, traditionally offered during Ganesh Chaturthi." },
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
          "Ganesh Chaturthi celebrates the birth of Ganesha and can last anywhere from 1 to 11 days, ending with the idol's ceremonial immersion in water (visarjan).",
          "It's especially prominent as a large-scale public festival in Maharashtra, where it was transformed from a private household observance into a mass public event in the 1890s for a specific historical reason.",
          "The clay idol itself is central to the ritual — it's meant to dissolve, symbolizing the cycle of creation and return to nature, which is why immersion (not permanent display) is the traditional conclusion.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Ganesh Chaturthi celebrates the birthday of <TermLink href="/festivals-culture/ganesh-chaturthi">Ganesha</TermLink>, the elephant-headed god of wisdom and new beginnings. Families and communities install clay idols of Ganesha, worship them for a number of days, and then immerse them in a river, lake, or the sea in a ceremony called <TermLink href="/festivals-culture/ganesh-chaturthi">visarjan</TermLink>.</div>}
        detailed={<div className="prose-p">The festival&apos;s duration varies by household and region — some observe it for a day and a half, others for the full 10-11 days ending on Anant Chaturdashi. What makes Ganesh Chaturthi historically distinctive is how it became a large-scale PUBLIC festival: it was traditionally a private, home-based observance until the Indian freedom fighter Bal Gangadhar Tilak popularized community-organized public celebrations (sarvajanik Ganeshotsav) in Maharashtra starting in 1893, specifically to create a legal, culturally-rooted gathering space for anti-colonial organizing at a time when the British colonial administration restricted political assembly. That public, community-pandal model is now the dominant form of the festival in Maharashtra and has spread well beyond its original political context.</div>}
      />
      <FootnoteAside>Mumbai&apos;s public Ganesh Chaturthi immersion processions are among the largest annual public gatherings in the world, with some individual idols exceeding 20 feet in height.</FootnoteAside>

      <QuickCheck
        question="Why did Ganesh Chaturthi shift from a private home ritual to a large public festival in parts of India, particularly Maharashtra?"
        options={[
          { text: "It was always a public festival historically, with no significant change over time", correct: false, explanation: "The private, home-based version came first — the large public community version is a documented 1890s development." },
          { text: "Bal Gangadhar Tilak popularized public community celebrations in the 1890s partly to create a legal gathering space for anti-colonial organizing under British restrictions on political assembly", correct: true, explanation: "Correct. This is a well-documented piece of the festival's modern history, not just religious tradition." },
          { text: "The Indian government mandated public celebrations after independence in 1947", correct: false, explanation: "The public model predates independence by over 50 years and wasn't a government mandate — it grew organically from Tilak's organizing effort." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A household Ganesh Chaturthi observance (baseline case)</h3>
      <div className="prose-p">A family brings home a small clay Ganesha idol, installs it on a decorated platform, and performs daily prayers and aarti for the chosen duration (commonly 1.5, 3, 5, or 7 days), offering modak and other sweets. On the final day, the family carries the idol to a nearby water body — or, increasingly, immerses it in a bucket or artificial tank at home for environmental reasons — for visarjan.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A public pandal celebration in Mumbai — a regional variation</h3>
      <div className="prose-p">Neighborhood committees (mandals) install large, elaborately decorated Ganesha idols — some tens of feet tall — in public pandals, drawing visitors for 10-11 days with cultural programs, music, and food stalls. The festival concludes with massive public immersion processions on the final day, involving thousands of idols moving through the city toward the sea, accompanied by drumming, dancing, and huge crowds — a scale and public character absent from the private household version.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Environmental concerns and eco-friendly idols (real-world / applied case)</h3>
      <div className="prose-p">Traditional Ganesha idols made with Plaster of Paris and painted with chemical dyes don&apos;t dissolve well and have been linked to water pollution when immersed in large numbers in lakes and rivers. In response, many cities now promote or mandate clay (eco-friendly) idols that dissolve naturally, and some families immerse idols in artificial tanks specifically to reduce environmental impact — a modern adaptation responding to the scale the festival has reached, not a change to the ritual&apos;s meaning.</div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming Ganesh Chaturthi has a fixed duration everywhere.", fix: "It ranges from 1.5 to 11 days depending on household or community tradition — there's no single correct length." },
          { mistake: "Treating the large public Mumbai-style celebration as the festival's original or only form.", fix: "The private household version came first historically; the massive public pandal tradition is a documented 1890s addition with a specific political origin." },
          { mistake: "Assuming any idol material is equally traditional and appropriate for immersion.", fix: "Modern Plaster of Paris idols cause real environmental harm when immersed in natural water bodies — traditional clay idols are both more authentic and more biodegradable." },
        ]}
      />
      <MisconceptionCallout
        myth="Ganesh Chaturthi's public, large-scale pandal celebrations are purely a modern commercial phenomenon with no historical depth."
        reality={<p>The public celebration model has a specific, well-documented 1890s origin tied to Bal Gangadhar Tilak&apos;s organizing efforts during the Indian independence movement — it&apos;s over 130 years old and rooted in a real historical moment, not a recent commercial invention, even though its scale has grown substantially since then.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "If you buy or receive a Ganesha idol for the festival, check whether it's made of natural clay rather than Plaster of Paris — it matters for how the immersion is done responsibly.",
          "If you attend a public pandal, notice the community-organization structure (the mandal) behind it — it reflects the festival's specific public-organizing history.",
          "Try modak, the sweet dumpling traditionally offered to Ganesha, if you get the chance during the festival.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is Ganesh Chaturthi celebrating?", answer: "The birth of Ganesha, the elephant-headed Hindu god of wisdom, new beginnings, and remover of obstacles." },
          { question: "How long does Ganesh Chaturthi last?", answer: "Anywhere from 1.5 to 11 days, depending on household or community tradition, ending with the idol's immersion in water (visarjan)." },
          { question: "Why is the Ganesha idol immersed in water at the end?", answer: "The immersion symbolizes the cycle of creation and return to nature, and traditionally represents Ganesha's journey back to his celestial abode after his earthly visit." },
          { question: "Why is Ganesh Chaturthi such a big public event in Mumbai specifically?", answer: "Bal Gangadhar Tilak popularized large public community celebrations there starting in 1893, partly to create a legal gathering space for anti-colonial organizing — that public tradition has continued and grown ever since." },
          { question: "Are Plaster of Paris Ganesha idols bad for the environment?", answer: "Yes — they don't dissolve well in natural water and can release harmful chemicals when immersed in large numbers, which is why many cities now encourage natural clay idols instead." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
