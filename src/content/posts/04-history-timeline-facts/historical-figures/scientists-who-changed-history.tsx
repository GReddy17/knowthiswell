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
  title: "Scientists Who Changed History",
  category: "history-timeline-facts",
  order: 48,
  subtopic: "historical-figures",
  tags: ["scientists", "marie curie", "ibn al-haytham", "tu youyou", "history of science", "historical figures"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "From an 11th-century scholar who invented the scientific method centuries before it had a name, to a 2015 Nobel laureate whose malaria drug came from a 1,600-year-old Chinese medical text.",
  summary: "Scientists across every era and region have reshaped human understanding and everyday life — from Ibn al-Haytham's foundational work on optics and experimental method in 11th-century Iraq, to Marie Curie's discoveries in radioactivity, to Tu Youyou's 2015 Nobel Prize-winning malaria treatment drawn from traditional Chinese medicine.",
  sources: [
    { label: "Nobel Prize — Marie Curie biographical", url: "https://www.nobelprize.org/prizes/physics/1903/marie-curie/biographical/" },
    { label: "Nobel Prize — Tu Youyou biographical", url: "https://www.nobelprize.org/prizes/medicine/2015/tu/biographical/" },
    { label: "Encyclopaedia Britannica — Ibn al-Haytham", url: "https://www.britannica.com/biography/Ibn-al-Haytham" },
    { label: "Encyclopaedia Britannica — History of Science", url: "https://www.britannica.com/science/history-of-science" },
    { label: "NASA — Katherine Johnson biography", url: "https://www.nasa.gov/former-nasa-mathematician-katherine-johnson/" },
  ],
  seeAlso: [
    "history-timeline-facts/world-leaders-who-changed-history",
    "history-timeline-facts/social-reformers-and-activists-through-history",
  ],
  glossary: [
    { term: "Scientific method", definition: "A systematic approach to inquiry involving observation, hypothesis, controlled experimentation, and verifiable evidence — its early form is credited substantially to Ibn al-Haytham's 11th-century work on optics." },
    { term: "Radioactivity", definition: "The spontaneous emission of energy or particles from unstable atomic nuclei; a term coined by Marie Curie, who conducted foundational research into the phenomenon." },
    { term: "Artemisinin", definition: "An antimalarial compound isolated by Tu Youyou from the sweet wormwood plant, based on a traditional Chinese medical text — now a core component of standard malaria treatment worldwide." },
    { term: "Peer review", definition: "The process of having scientific work evaluated by independent experts in the same field before publication or wider acceptance, a cornerstone of how scientific claims are validated today." },
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
          "Foundational scientific thinking didn't begin with figures like Newton — 11th-century scholar Ibn al-Haytham, working in Basra and Cairo, is widely credited with pioneering the experimental, evidence-based approach now called the scientific method, centuries before European scientists formalized it.",
          "Marie Curie remains the only person to win Nobel Prizes in two different sciences (Physics in 1903 and Chemistry in 1911), for foundational work on radioactivity that led directly to modern cancer treatment and nuclear medicine.",
          "Scientific breakthroughs still draw directly on much older knowledge — Tu Youyou's 2015 Nobel Prize-winning discovery of the antimalarial drug artemisinin came from systematically researching a 1,600-year-old Chinese medical text, saving an estimated millions of lives from malaria since.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Scientists who &quot;changed history&quot; come from every era, region, and field — not just the familiar names most commonly taught in Western classrooms. Ibn al-Haytham, working in the Islamic Golden Age around the year 1000 CE, developed foundational methods of controlled experimentation and optics. Marie Curie, a Polish-French physicist and chemist, pioneered research into radioactivity in the early 1900s, work that eventually led to cancer treatments still used today. And Tu Youyou, a Chinese pharmaceutical chemist, discovered a life-saving malaria drug in the 1970s by systematically investigating traditional Chinese medicine texts — work that wasn&apos;t recognized with a Nobel Prize until 2015, decades after her original discovery.</div>}
        detailed={<div className="prose-p">What connects these figures isn&apos;t a shared field, but a shared pattern: each combined careful, systematic observation with a willingness to challenge existing assumptions. Ibn al-Haytham&apos;s &quot;Book of Optics&quot; (written around 1021 CE) rejected the then-dominant theory that vision worked by the eye emitting rays outward, and instead used controlled experiments — including work with a camera obscura — to demonstrate that vision works by light entering the eye, establishing a rigorously evidence-based approach to inquiry that historians of science widely trace as a direct precursor to the modern <TermLink href="/history-timeline-facts/historical-figures/scientists-who-changed-history">scientific method</TermLink>. Marie Curie&apos;s work on <TermLink href="/history-timeline-facts/historical-figures/scientists-who-changed-history">radioactivity</TermLink> (a term she coined) involved isolating two new elements, polonium and radium, from tons of processed ore, under hazardous conditions not yet understood at the time — research that eventually enabled radiation therapy for cancer, a technique still in routine medical use. Tu Youyou&apos;s discovery of <TermLink href="/history-timeline-facts/historical-figures/scientists-who-changed-history">artemisinin</TermLink> came from a 1970s Chinese government research program searching for new malaria treatments; she systematically reviewed thousands of traditional remedies, including a roughly 1,600-year-old text describing a cold-water extraction method for sweet wormwood, and tested it directly on herself before wider trials — a modern scientific breakthrough built directly on centuries-old traditional knowledge, validated through rigorous experimental method.</div>}
      />
      <FootnoteAside>Marie Curie&apos;s original laboratory notebooks from the early 1900s are still radioactive today and are kept in lead-lined boxes at France&apos;s National Library — anyone wishing to view them must sign a waiver acknowledging the radiation risk, over a century after she recorded her findings in them.</FootnoteAside>
      <p>
      That still-radioactive notebook is a small but vivid reminder that the risks these scientists took to build foundational knowledge were often genuinely physical, not just intellectual.
      </p>

      <QuickCheck
        question="What is Ibn al-Haytham most credited with pioneering?"
        options={[
          { text: "The theory that vision works by the eye emitting rays outward toward objects", correct: false, explanation: "This was the older theory that Ibn al-Haytham's experimental work actually disproved, not something he originated." },
          { text: "An evidence-based, experimental approach to inquiry that historians widely trace as a direct precursor to the modern scientific method", correct: true, explanation: "Correct. His 11th-century 'Book of Optics' used controlled experiments to demonstrate that vision works by light entering the eye, establishing a rigorously evidence-based approach that predates the term 'scientific method' by centuries." },
          { text: "The first written description of the human circulatory system", correct: false, explanation: "Ibn al-Haytham's foundational work was in optics and experimental method, not circulatory anatomy — that's a separate area of medieval and early modern scientific history." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Ibn al-Haytham and the &quot;Book of Optics,&quot; c. 1021 CE (baseline case)</h3>
      <div className="prose-p">
      Working in Basra and later Cairo during the Islamic Golden Age, Ibn al-Haytham used controlled experiments, including devices resembling a camera obscura, to test and ultimately overturn the long-standing theory that human vision worked by the eye emitting rays. His seven-volume &quot;Book of Optics&quot; documented these experiments methodically enough that historians of science, including several who have called him &quot;the father of modern optics,&quot; credit his approach as a direct forerunner of the modern experimental scientific method, roughly six centuries before figures like Francis Bacon and Galileo formalized similar principles in Europe.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Marie Curie and the discovery of radioactivity, 1898-1911 (variation / barrier-breaking case)</h3>
      <div className="prose-p">
      Working with her husband Pierre Curie, Marie Curie discovered two new radioactive elements, polonium and radium, isolating radium from tons of a uranium-ore byproduct called pitchblende under grueling, hazardous lab conditions. She became the first woman to win a Nobel Prize (Physics, 1903, shared with Pierre and Henri Becquerel), and remains the only person in history to win Nobel Prizes in two different scientific fields, adding a Chemistry prize in 1911 for isolating pure radium. Her research laid the groundwork for radiation therapy in cancer treatment, still a standard medical technique used worldwide today.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Tu Youyou and the discovery of artemisinin (real-world / applied case)</h3>
      <div className="prose-p">
      In the early 1970s, as part of a secret Chinese government program (Project 523) searching for new malaria treatments during the Vietnam War era, chemist Tu Youyou systematically reviewed thousands of traditional Chinese medical texts and remedies. A roughly 1,600-year-old text describing a cold-water extraction method for sweet wormwood (Artemisia annua) led her to isolate artemisinin, now a core component of the World Health Organization&apos;s recommended standard malaria treatment worldwide. Tu Youyou tested the compound on herself before wider human trials, and her work — largely uncredited internationally for decades — was finally recognized with the 2015 Nobel Prize in Physiology or Medicine, making her the first mainland Chinese laureate in a science category.
      </div>

      <QuickCheck
        question="Where did Tu Youyou's key insight for discovering artemisinin come from?"
        options={[
          { text: "A newly synthesized laboratory compound with no prior historical basis", correct: false, explanation: "Her breakthrough insight came from historical research, not an entirely novel lab synthesis with no precedent." },
          { text: "A roughly 1,600-year-old traditional Chinese medical text describing a cold-water extraction method for sweet wormwood", correct: true, explanation: "Correct. Tu Youyou systematically reviewed traditional Chinese medicine texts as part of a government research program, and this specific historical extraction method led directly to isolating artemisinin." },
          { text: "Direct collaboration with European pharmaceutical researchers in the 1970s", correct: false, explanation: "Her research was conducted within a Chinese government program (Project 523) and drew on Chinese traditional medicine texts, not international pharmaceutical collaboration at the time." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Timeline: scientists who changed history, 11th century to today"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-scientists-who-changed-history-timeline.svg"
        altText="Horizontal timeline from around 1021 CE to 2015 CE, marking Ibn al-Haytham's Book of Optics around 1021 CE during the Islamic Golden Age, Marie Curie's discovery of radioactivity and two Nobel Prizes between 1898 and 1911, Katherine Johnson's orbital trajectory calculations for NASA's early crewed spaceflights in the 1960s, and Tu Youyou's discovery of artemisinin in the 1970s finally recognized with the 2015 Nobel Prize in Physiology or Medicine."
      />
      <p>
      Nearly a thousand years separate Ibn al-Haytham&apos;s experiments from Tu Youyou&apos;s Nobel Prize, but the throughline is consistent: each breakthrough came from rigorous, repeatable evidence-gathering, whether that evidence came from a controlled optics experiment, painstaking isolation of a radioactive element, or systematic review of a centuries-old medical text.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming the scientific method was invented in Europe during the Scientific Revolution (16th-17th century).", fix: "Ibn al-Haytham's rigorously experimental approach in 11th-century Iraq and Egypt predates the European Scientific Revolution by roughly six centuries and is widely credited by historians of science as a direct forerunner of it." },
          { mistake: "Treating scientific breakthroughs as if they always come from entirely new discoveries with no historical basis.", fix: "Tu Youyou's Nobel Prize-winning malaria drug came directly from systematically investigating a 1,600-year-old traditional Chinese medical text — a reminder that older knowledge and modern experimental rigor can combine to produce genuinely new breakthroughs." },
          { mistake: "Assuming recognition for scientific work always arrives at the time of discovery.", fix: "Tu Youyou made her key discovery in the early 1970s but wasn't awarded the Nobel Prize for it until 2015 — over four decades later — a reminder that scientific recognition, especially across language and political barriers, can lag significantly behind the actual work." },
        ]}
      />
      <MisconceptionCallout
        myth="Major scientific breakthroughs have historically come almost exclusively from Western Europe and North America."
        reality={<p>Foundational scientific work has come from every major world region across history. Ibn al-Haytham&apos;s pioneering experimental work in optics took place in 11th-century Iraq and Egypt during the Islamic Golden Age, centuries before similar methods were formalized in Europe. Tu Youyou&apos;s Nobel Prize-winning malaria treatment came from Chinese state-sponsored research combining traditional medicine with modern chemistry in the 1970s. C.V. Raman, an Indian physicist, won the 1930 Nobel Prize in Physics for discovering the scattering effect on light that bears his name. Treating scientific progress as a purely Western story leaves out substantial, well-documented contributions from across Asia, the Middle East, and elsewhere.</p>}
      />

      <QuickCheck
        question="Which of these best reflects the actual geographic spread of major historical scientific breakthroughs?"
        options={[
          { text: "Major breakthroughs have come almost exclusively from Western Europe and North America throughout history", correct: false, explanation: "This overlooks well-documented contributions from other regions, including Ibn al-Haytham's foundational optics work in the Islamic Golden Age and Tu Youyou's Nobel Prize-winning research in China." },
          { text: "Major breakthroughs have come from many world regions across history, including the Islamic Golden Age, China, India, and Europe", correct: true, explanation: "Correct. Figures like Ibn al-Haytham (Iraq/Egypt), Tu Youyou (China), and C.V. Raman (India) represent well-documented, historically significant scientific contributions from outside Western Europe and North America." },
          { text: "Scientific breakthroughs are essentially random and have no discernible geographic pattern worth discussing", correct: false, explanation: "While breakthroughs occur across many regions, there are documented historical patterns (like scientific centers during the Islamic Golden Age or Chinese state-sponsored research programs) worth understanding, rather than treating the spread as purely random." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time \"the scientific method\" comes up as a purely European invention, mention Ibn al-Haytham's 11th-century experimental work as a documented earlier example.",
          "Notice when a modern drug or treatment traces back to traditional or historical knowledge, the way artemisinin traces back to a 1,600-year-old Chinese text — it's a more common pattern in medical history than people often assume.",
          "When you hear about a scientist's Nobel Prize, check how many years passed between their key discovery and the award — the gap is sometimes decades, as with Tu Youyou.",
          "Read the related entry on World Leaders Who Changed History to see how scientific and political change have often unfolded on very different timelines.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Who is considered the father of the scientific method?", answer: "While Francis Bacon and Galileo are often credited in Western science education, historians of science widely point to Ibn al-Haytham's 11th-century experimental work on optics — using controlled experiments to test and overturn existing theories of vision — as a direct forerunner, roughly six centuries earlier." },
          { question: "What did Marie Curie discover?", answer: "Marie Curie, working with her husband Pierre, discovered two radioactive elements — polonium and radium — and coined the term 'radioactivity.' She remains the only person to win Nobel Prizes in two different sciences: Physics (1903) and Chemistry (1911)." },
          { question: "Who discovered the cure for malaria?", answer: "There isn't a single 'cure,' but Tu Youyou's discovery of artemisinin in the 1970s, based on a traditional Chinese medical text, produced the compound that remains a core component of the World Health Organization's standard recommended malaria treatment today. She won the 2015 Nobel Prize in Physiology or Medicine for this work." },
          { question: "Why did it take so long for Tu Youyou to receive a Nobel Prize?", answer: "Her original discovery, made in the early 1970s within a Chinese government research program, wasn't widely known or credited internationally for decades due to political and language barriers of the era. She received the 2015 Nobel Prize in Physiology or Medicine over 40 years after her initial discovery." },
          { question: "What was Katherine Johnson known for?", answer: "Katherine Johnson was a NASA mathematician whose precise orbital trajectory calculations were critical to the success of early U.S. crewed spaceflights in the 1960s, including John Glenn's 1962 orbital mission, which Glenn reportedly insisted she personally verify before he would fly." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
