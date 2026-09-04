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
  title: "Cells & Genetics Basics: How DNA, Genes, and Cells Build You",
  category: "general-science-facts",
  order: 21,
  subtopic: "biology-and-human-body",
  tags: [
    "cells",
    "genetics",
    "DNA",
    "genes",
    "chromosomes",
    "heredity",
    "biology basics",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How DNA, genes, and chromosomes inside every cell carry inherited instructions, and why dominant and recessive traits follow predictable probability patterns.",
  summary: "Every cell in your body carries a nearly complete copy of your DNA, organized into genes and chromosomes, which determine inherited traits through predictable patterns of probability.",
  sources: [
    { label: "NIH National Human Genome Research Institute — Genetics Glossary", url: "https://www.genome.gov/genetics-glossary" },
    { label: "NIH MedlinePlus Genetics — What Is DNA?", url: "https://medlineplus.gov/genetics/" },
    { label: "Encyclopaedia Britannica — Cell (Biology)", url: "https://www.britannica.com/science/cell-biology" },
    { label: "Encyclopaedia Britannica — Heredity", url: "https://www.britannica.com/science/heredity-genetics" },
  ],
  seeAlso: [
    "general-science-facts/human-body-systems",
    "general-science-facts/diseases-immunity-and-how-the-body-fights-illness",
    "general-science-facts/atoms-and-elements",
    "general-science-facts/the-eye-and-how-vision-works",
  ],
  glossary: [
    { term: "Cell", definition: "The basic structural and functional unit of life; the human body is made of roughly 30-37 trillion of them." },
    { term: "DNA", definition: "Deoxyribonucleic acid — the molecule that carries genetic instructions, organized as a double helix of paired chemical bases." },
    { term: "Gene", definition: "A specific segment of DNA that contains the instructions for building one protein or trait." },
    { term: "Chromosome", definition: "A tightly packaged strand of DNA; humans have 23 pairs (46 total) in nearly every cell." },
    { term: "Allele", definition: "One of two or more versions of a gene; you inherit one allele for each gene from each parent." },
    { term: "Genotype", definition: "The specific combination of alleles an organism carries for a gene." },
    { term: "Phenotype", definition: "The observable trait that results from a genotype, such as eye color." },
    { term: "Mutation", definition: "A change in a DNA sequence, which can be harmless, harmful, or occasionally beneficial." },
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
          "Nearly every cell in your body contains a full copy of your DNA, but different genes are switched on or off in different cell types, which is how identical instructions build very different tissues.",
          "Genes come in pairs — one allele inherited from each parent — and dominant/recessive inheritance follows predictable probability patterns like the Punnett square, not a 'blending' of traits.",
          "Any two humans are roughly 99.9% genetically identical; the remaining fraction of DNA accounts for essentially all inherited human variation, from eye color to disease risk.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/general-science-facts/cells-and-genetics-basics">cell</TermLink> is the basic building block of the body — you&apos;re made of tens of trillions of them. Inside most cells sits a nucleus holding <TermLink href="/general-science-facts/cells-and-genetics-basics">DNA</TermLink>, a long molecule that works like an instruction manual. A <TermLink href="/general-science-facts/cells-and-genetics-basics">gene</TermLink> is one section of that manual — the instructions for one particular trait, like eye color or blood type. DNA is packaged into 23 pairs of <TermLink href="/general-science-facts/cells-and-genetics-basics">chromosomes</TermLink>, one set of 23 from each parent, which is why children resemble both parents but aren&apos;t identical copies of either one.</div>}
        detailed={<div className="prose-p">Each gene exists as two copies, called <TermLink href="/general-science-facts/cells-and-genetics-basics">alleles</TermLink> — one from each parent — and the combination you carry is your <TermLink href="/general-science-facts/cells-and-genetics-basics">genotype</TermLink>. When one allele is dominant and one is recessive, the dominant allele&apos;s trait is what actually shows up, called the <TermLink href="/general-science-facts/cells-and-genetics-basics">phenotype</TermLink> — the recessive allele is still present and can be passed on, it&apos;s just masked. DNA itself is read through a two-step process: transcription copies a gene&apos;s instructions into a related molecule (RNA), and translation uses that RNA to assemble a specific protein, one amino acid at a time. Proteins are what actually carry out most of a cell&apos;s work, so a gene is really an instruction for building one protein. Occasionally, copying DNA introduces an error called a <TermLink href="/general-science-facts/cells-and-genetics-basics">mutation</TermLink> — most are harmless or get repaired, some cause disease, and a rare few provide an advantage that can spread through a population over generations, which is the raw material evolution acts on.</div>}
      />
      <FootnoteAside>The Human Genome Project, an international effort completed in 2003, found the human genome contains roughly 3 billion DNA base pairs but only about 20,000 protein-coding genes — far fewer than researchers had predicted in the 1990s, when estimates commonly ran to 100,000 or more.</FootnoteAside>

      <p>
      Knowing that genes come in pairs explains a lot, but the real payoff is being able to predict the odds of a specific trait showing up in offspring — which is exactly what a Punnett square is built to do. Eye color itself is actually set by several genes working together rather than one single pair, but the underlying reason it varies at all traces back to genetics, not to any difference in <TermLink href="/general-science-facts/the-eye-and-how-vision-works">how the eye itself processes light</TermLink> once it&apos;s built.
      </p>

      <QuickCheck
        question="A person has one allele for brown eyes (dominant, B) and one allele for blue eyes (recessive, b). What eye color will actually show up, and what's happening to the blue-eye allele?"
        options={[
          { text: "Their eyes will be a blend, appearing somewhere between brown and blue", correct: false, explanation: "Classical dominant/recessive traits don't blend — the dominant allele's trait is expressed and the recessive allele is masked, not averaged with it." },
          { text: "Their eyes will be brown, and the blue-eye allele is still present in their DNA and can be passed to their children", correct: true, explanation: "Correct. The dominant brown-eye allele determines the visible phenotype, but the recessive blue-eye allele isn't destroyed — it's simply masked, and can be passed on and expressed in a future generation." },
          { text: "Their eyes will be blue, since recessive alleles always show up if present at all", correct: false, explanation: "Recessive alleles only produce their visible trait when paired with another recessive allele (no dominant allele present) — one dominant allele is enough to determine the phenotype here." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A monohybrid cross with a Punnett square (baseline case)</h3>
      <div className="prose-p">
      Two parents are each heterozygous for eye color (Bb — one brown-eye allele, one blue-eye allele). Laying out all four possible combinations of the alleles they can pass to a child (B from parent 1 with B or b from parent 2, and b from parent 1 with B or b from parent 2) gives: BB, Bb, Bb, bb. Three of the four combinations (BB, Bb, Bb) include at least one dominant B allele and will show the brown-eye phenotype; only the bb combination — occurring in 1 of 4, or <strong>25%</strong> of cases — will show the recessive blue-eye phenotype. This 3:1 phenotype ratio is the classic, predictable signature of a single dominant/recessive gene pair.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: When traits don&apos;t follow simple dominance (edge case / variation)</h3>
      <div className="prose-p">
      Not every trait fits the clean dominant/recessive pattern above. In <em>incomplete dominance</em>, neither allele fully masks the other, and the phenotype lands somewhere in between — a classic textbook example is a red-flowered plant crossed with a white-flowered plant of the same species producing pink offspring, because neither pigment allele is fully dominant. In <em>codominance</em>, both alleles are fully expressed at once rather than blending — human ABO blood type is a real example, where a person with one &quot;A&quot; allele and one &quot;B&quot; allele has type AB blood, showing both traits simultaneously rather than one masking the other or the two averaging out. These patterns aren&apos;t exceptions to genetics — they&apos;re the same allele-pairing rules, just without one allele being strictly dominant over the other.
      </div>

      <QuickCheck
        question="A person inherits one blood-type allele for A and one for B, and their blood type tests as AB — showing both traits at once rather than one masking the other. What inheritance pattern does this demonstrate?"
        options={[
          { text: "Incomplete dominance, where the two traits blend into an intermediate result", correct: false, explanation: "Blending into something 'in between' (like pink from red and white) is incomplete dominance — AB blood type shows both traits fully and separately, not a blend of the two." },
          { text: "Codominance, where both alleles are fully expressed at the same time", correct: true, explanation: "Correct. In codominance, neither allele masks the other and neither blends with it — both are fully expressed, which is exactly what happens with the AB blood type." },
          { text: "A mutation has occurred, producing a new blood type not explained by the parents' alleles", correct: false, explanation: "No mutation is needed to explain this — AB blood type is a normal, well-documented outcome of inheriting one A allele and one B allele under codominance, present in the parents' existing allele pool." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Carrier probability for a recessive genetic condition (real-world / applied case)</h3>
      <p>
      Some inherited conditions, like cystic fibrosis, are recessive — a person needs two copies of the recessive allele to be affected, while someone with only one copy is an unaffected &quot;carrier.&quot; If both parents are carriers (heterozygous, Aa), the same Punnett square logic from Example 1 applies: each child has a 25% chance of inheriting two recessive alleles and being affected, a 50% chance of being an unaffected carrier like their parents (Aa), and a 25% chance of inheriting two dominant alleles and being neither affected nor a carrier. This is exactly why genetic counselors can give parents specific, numeric odds — not vague reassurance — once carrier status for a specific condition is known through genetic testing.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Cell, DNA, gene, and chromosome — how the pieces fit together"
        type="detail"
        svgSrc="/diagrams/general-science-facts-cells-and-genetics-basics-scale.svg"
        altText="A nested diagram showing a human cell containing a nucleus, the nucleus containing 23 pairs of chromosomes, one chromosome unwound to show a coiled DNA double helix, and a labeled segment of that DNA strand marked as a single gene, illustrating the scale relationship from whole cell down to one gene."
      />
      <p>
      Reading the diagram from the outside in shows the actual scale relationship: a cell contains a nucleus, the nucleus contains chromosomes, each chromosome is one extremely long, tightly coiled DNA molecule, and a gene is just one functional segment along that molecule — of which there are roughly 20,000 spread across all 23 chromosome pairs. This nested structure is why a single skin cell and a single liver cell, despite looking and behaving completely differently, contain the exact same full set of genes; the difference between cell types comes from which genes are switched on, not which genes are present.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Using 'gene,' 'chromosome,' and 'DNA' interchangeably, as if they're the same thing.", fix: "Keep the scale straight: DNA is the molecule, a chromosome is a tightly packaged strand of DNA, and a gene is one specific functional segment within that DNA — nested inside each other, not synonyms." },
          { mistake: "Assuming inherited traits blend evenly, like mixing paint, rather than following allele-pairing rules.", fix: "Classical dominant/recessive traits don't blend — one allele's trait shows (dominant) while the other stays hidden but inheritable (recessive). Only specific cases like incomplete dominance produce a true in-between result." },
          { mistake: "Believing a 25% recessive-trait probability guarantees exactly 1 in 4 children will be affected in any specific family.", fix: "The 25% is a per-child probability, recalculated independently each pregnancy — like a coin flip, past outcomes don't change the odds for the next child, so a family of four children could see 0, 1, 2, 3, or all 4 affected." },
        ]}
      />
      <MisconceptionCallout
        myth="A dominant trait is automatically more common in a population than a recessive one."
        reality={<p>Dominance describes how a trait is expressed when two different alleles are paired together in one individual — it says nothing about how frequently that allele appears across a whole population. Huntington&apos;s disease and achondroplasia (a common cause of dwarfism) are both dominant conditions, yet both are rare in the general population. Red hair, by contrast, is a recessive trait, yet it persists at meaningful frequency in some populations because enough people carry two copies of the recessive allele. Population frequency depends on the history and distribution of alleles in a group, not on whether a trait happens to be dominant or recessive.</p>}
      />

      <QuickCheck
        question="Huntington's disease is caused by a dominant allele but is rare in the general population, while red hair is caused by a recessive combination of alleles and is far more common in some populations. What does this show?"
        options={[
          { text: "Dominant traits are always rarer than recessive traits", correct: false, explanation: "There's no such rule — plenty of dominant traits are extremely common (like the ability to taste a bitter compound called PTC) and plenty of recessive traits are rare. Frequency and dominance are independent." },
          { text: "Whether a trait is dominant or recessive doesn't determine how common it is in a population — that depends on how the underlying alleles are distributed", correct: true, explanation: "Correct. Dominance only describes which trait shows up when two different alleles are paired in one individual — population frequency is a separate matter driven by allele history and distribution." },
          { text: "One of these two examples must be misclassified as dominant or recessive", correct: false, explanation: "Both classifications are correct and well-documented — the apparent contradiction only exists if you assume dominance controls population frequency, which it doesn't." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Practice a Punnett square with a trait of your choice (two heterozygous parents), and confirm you land on the classic 3:1 phenotype ratio from Example 1.",
          "Next time you hear a blood type mentioned (like AB), connect it to codominance — both alleles being expressed at once — rather than a blend.",
          "If a family history of a specific genetic condition is a concern, ask a healthcare provider about genetic counseling and carrier testing rather than estimating risk informally.",
          "Read the related entry on Diseases, Immunity & How the Body Fights Illness to see how genetic differences can influence disease risk.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between a gene and a chromosome?", answer: "A chromosome is a long, tightly packaged strand of DNA; a gene is one specific functional segment within that DNA carrying instructions for a single trait or protein. Humans have 23 pairs of chromosomes containing roughly 20,000 genes in total." },
          { question: "How many chromosomes do humans have?", answer: "23 pairs, or 46 total, in nearly every cell — 23 inherited from each parent. Reproductive cells (sperm and eggs) are an exception, carrying just one set of 23." },
          { question: "What does dominant and recessive mean in genetics?", answer: "When two different alleles are paired, the dominant allele's trait is the one that's visibly expressed (the phenotype), while the recessive allele's trait is masked but still present and can be passed on to offspring." },
          { question: "How similar is human DNA between two people?", answer: "Roughly 99.9% identical. The remaining fraction — a small percentage of about 3 billion base pairs — accounts for the inherited differences between individuals, from physical traits to some aspects of disease risk." },
          { question: "Can two parents without a genetic condition have a child who has it?", answer: "Yes, if the condition is recessive and both parents are unaffected carriers (one dominant, one recessive allele each). Each child then has a 25% chance of inheriting two recessive alleles and being affected, per standard Punnett square probability." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
