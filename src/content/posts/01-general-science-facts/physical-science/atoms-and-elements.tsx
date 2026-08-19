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
  title: "Atoms & Elements",
  category: "general-science-facts",
  order: 6,
  subtopic: "physical-science",
  tags: ["atoms", "elements", "periodic table", "protons", "chemistry"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "What atoms are actually made of, why the number of protons defines which element you have, and how the periodic table organizes every known element by pattern.",
  summary: "An atom is made of protons, neutrons, and electrons — the number of protons alone determines which element it is. The periodic table arranges all known elements by that proton count, revealing repeating patterns in how they behave.",
  sources: [
    { label: "NIST — Periodic Table and Atomic Data", url: "https://www.nist.gov/pml/periodic-table-elements" },
    { label: "Royal Society of Chemistry — Periodic Table", url: "https://www.rsc.org/periodic-table" },
  ],
  seeAlso: [
    "general-science-facts/matter-and-states-of-matter",
    "general-science-facts/electricity-and-magnetism-basics",
  ],
  glossary: [
    { term: "Proton", definition: "A positively charged particle in an atom's nucleus; its count defines the element." },
    { term: "Neutron", definition: "A neutral particle in an atom's nucleus, adding mass without charge." },
    { term: "Electron", definition: "A negatively charged particle orbiting the nucleus, responsible for chemical bonding." },
    { term: "Isotope", definition: "A version of an element with the same protons but a different number of neutrons." },
    { term: "Atomic number", definition: "The number of protons in an atom's nucleus — uniquely identifies the element." },
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
          "An atom is built from protons and neutrons packed into a tiny nucleus, surrounded by electrons — and it's the proton count alone that determines which element you have.",
          "The periodic table isn't an arbitrary list — it's arranged so elements with similar chemical behavior line up in the same column, because that behavior comes from electron patterns that repeat predictably.",
          "Atoms of the same element can still differ in mass (isotopes) if they have different numbers of neutrons, without changing what element they are.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">An <TermLink href="/general-science-facts/atoms-and-elements">atom</TermLink> is the smallest unit of an element that still counts as that element. Every atom has a dense center called a nucleus, made of <TermLink href="/general-science-facts/atoms-and-elements">protons</TermLink> and <TermLink href="/general-science-facts/atoms-and-elements">neutrons</TermLink>, with <TermLink href="/general-science-facts/atoms-and-elements">electrons</TermLink> orbiting around it. Change the number of protons and you get a completely different element — hydrogen has 1 proton, helium has 2, and so on up the periodic table.</div>}
        detailed={<div className="prose-p">The number of protons is called the <TermLink href="/general-science-facts/atoms-and-elements">atomic number</TermLink>, and it&apos;s the single defining property of an element — carbon is, by definition, any atom with exactly 6 protons. Neutrons add mass without changing the element, and atoms of the same element with different neutron counts are called <TermLink href="/general-science-facts/atoms-and-elements">isotopes</TermLink> (carbon-12 and carbon-14 are both carbon, differing only in neutrons). Electrons occupy specific energy levels around the nucleus, and it&apos;s the arrangement of the outermost electrons that determines how an atom bonds with others — which is why elements in the same column of the periodic table, sharing the same outer-electron pattern, tend to react similarly.</div>}
      />
      <FootnoteAside>Dmitri Mendeleev published the first widely-used periodic table in 1869 and left gaps for undiscovered elements, correctly predicting their properties before they were ever found — germanium, discovered in 1886, matched his prediction for &quot;eka-silicon&quot; almost exactly.</FootnoteAside>

      <p>
      That predictive power is exactly what made the periodic table more than just a list — it&apos;s an organizing principle you can actually use.
      </p>

      <QuickCheck
        question="An atom has 6 protons and 8 neutrons. A second atom has 6 protons and 6 neutrons. Are they the same element?"
        options={[
          { text: "No, they're different elements because their neutron counts differ", correct: false, explanation: "Neutron count doesn't determine the element — only proton count does. Different neutron counts with the same proton count just means different isotopes of the same element." },
          { text: "Yes, both are carbon — they're just different isotopes of it", correct: true, explanation: "Correct. Both atoms have 6 protons, which makes both of them carbon by definition. The neutron difference (8 vs 6) makes them different isotopes: carbon-14 and carbon-12." },
          { text: "It depends on how many electrons each atom has", correct: false, explanation: "Electron count can vary (forming ions) without changing the element either — proton count is the one property that defines which element an atom is." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Identifying an element from its proton count (baseline case)</h3>
      <div className="prose-p">
      An atom with 8 protons is oxygen, full stop — regardless of how many neutrons or electrons it has. This is why the periodic table is organized by atomic number in order: hydrogen (1), helium (2), lithium (3), and so on, each box representing one unique proton count.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why carbon dating works on isotopes, not elements (edge case / variation)</h3>
      <div className="prose-p">
      Carbon-14 is a rare, unstable isotope of ordinary carbon-12, formed continuously in the atmosphere and absorbed by living things. Once an organism dies, it stops absorbing new carbon-14, and the existing carbon-14 decays into nitrogen at a known, steady rate (a half-life of about 5,730 years). Measuring how much carbon-14 remains in an old bone or piece of wood — compared to the stable carbon-12 that doesn&apos;t decay — reveals roughly how long ago the organism died. The element (carbon) doesn&apos;t change; it&apos;s the isotope ratio that tells the story.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why sodium and chlorine bond so readily (real-world / applied case)</h3>
      <div className="prose-p">
      Sodium has one lone electron in its outermost shell, which it &quot;wants&quot; to lose to reach a more stable configuration. Chlorine is missing just one electron from a full outer shell, which it &quot;wants&quot; to gain. When they meet, sodium donates that electron to chlorine — both atoms become electrically charged ions, and their opposite charges attract strongly, forming an ionic bond. The result is ordinary table salt, sodium chloride, and this exact electron-count logic is why the periodic table&apos;s columns predict which elements bond easily with which.
      </div>

      <QuickCheck
        question="Sodium (1 outer electron) and chlorine (7 outer electrons, needing 1 more for a full shell) react to form table salt. What actually happens between them?"
        options={[
          { text: "They share their outer electrons equally between both atoms", correct: false, explanation: "Equal sharing describes covalent bonding, which happens between similar atoms — sodium and chlorine's very different electron situations lead to a full transfer instead, not sharing." },
          { text: "Sodium transfers its one outer electron to chlorine, and the resulting charged ions attract each other", correct: true, explanation: "Correct. Sodium loses an electron to become a positive ion, chlorine gains it to become a negative ion, and the opposite charges form a strong ionic bond — this is exactly what makes table salt." },
          { text: "Neither atom's electrons move — they just sit next to each other", correct: false, explanation: "A stable bond requires an actual electron transfer or sharing — atoms sitting near each other with no electron interaction wouldn't bond into a compound at all." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="A simplified atom: nucleus and electron shells"
        type="detail"
        svgSrc="/diagrams/general-science-facts-atoms-and-elements-structure.svg"
        altText="Diagram of a simplified atom showing a central nucleus made of labeled protons and neutrons, surrounded by two concentric electron shells with electrons orbiting at each level, with the outer shell labeled as determining chemical bonding behavior."
      />
      <p>
      Nearly all of an atom&apos;s mass sits in the tiny, dense nucleus at the center, while the electrons — which take up almost all the atom&apos;s actual volume — orbit at proportionally much greater distances. The outermost shell is what interacts with other atoms during chemical reactions.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking atomic mass and atomic number are the same thing.", fix: "Atomic number is the proton count (defines the element); atomic mass reflects protons plus neutrons combined, and varies slightly between isotopes of the same element." },
          { mistake: "Assuming electrons orbit the nucleus like planets orbit the sun, in neat fixed circular paths.", fix: "Electrons actually exist in fuzzy probability regions called orbitals — the neat circular-orbit picture is a simplified teaching model, not physically accurate at the quantum scale." },
          { mistake: "Believing isotopes of an element are essentially 'different elements.'", fix: "Isotopes are chemically almost identical — same proton count, same electron behavior, same element — they differ only in mass and sometimes radioactive stability." },
        ]}
      />
      <MisconceptionCallout
        myth="Atoms are the smallest possible particles of matter, indivisible as the Greek word 'atomos' suggests."
        reality={<p>Atoms are actually made of smaller particles — protons, neutrons, and electrons — and protons and neutrons themselves are made of even smaller particles called quarks. The ancient Greek concept of an indivisible smallest unit was a philosophical guess later borrowed as a name; 20th-century physics discovered atoms very much can be split, which is literally how nuclear power and nuclear weapons work.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Find an atom's mass number from protons and neutrons"
        fields={[
          { key: "protons", label: "Number of protons", defaultValue: 6, step: 1 },
          { key: "neutrons", label: "Number of neutrons", defaultValue: 6, step: 1 },
        ]}
        resultLabel="Mass number (protons + neutrons)"
        formula="atomicMassNumber"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Look up your favorite element's position on the periodic table and notice which column it's in — that column shares its bonding behavior.",
          "Try the calculator above with a few real isotopes (carbon-12 vs carbon-14, both 6 protons) to see how mass number changes without the element changing.",
          "Next time carbon dating comes up in the news, remember it's measuring an isotope ratio, not detecting 'carbon' itself.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What determines which element an atom is?", answer: "Only the number of protons in its nucleus. Change the proton count and you've changed the element entirely — everything else (neutrons, electrons, even the atom's charge) can vary without changing what element it is." },
          { question: "Are isotopes dangerous?", answer: "Most isotopes are stable and completely harmless — carbon-12 makes up about 99% of all carbon on Earth. Only unstable (radioactive) isotopes decay and emit radiation, and even then, danger depends heavily on the specific isotope, dose, and exposure time." },
          { question: "How many elements are there?", answer: "As of the current periodic table, 118 elements have been confirmed, though only the first 94 or so occur naturally on Earth in meaningful amounts — the rest have only been created briefly in laboratories." },
          { question: "Can one element turn into another?", answer: "Only through nuclear reactions (radioactive decay, fusion, or fission), which actually change the proton count — ordinary chemical reactions never do this, since they only rearrange electrons, not nuclei." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
    </>
  );
}
