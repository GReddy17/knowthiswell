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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "What Blockchain Actually Is (Beyond Cryptocurrency)",
  category: "technology-basics",
  order: 64,
  subtopic: "ai-and-emerging-tech-concepts",
  tags: ["what is blockchain", "blockchain explained", "distributed ledger", "how blockchain works", "technology basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "Blockchain is a record-keeping method — a chain of linked, tamper-evident entries shared across many computers — that cryptocurrency happens to use, not the other way around.",
  summary: "A blockchain is a record-keeping structure where entries are grouped into blocks, each cryptographically linked to the one before it, and copied across many independent computers, making past entries extremely difficult to alter without the change being detected.",
  sources: [
    { label: "NIST — Blockchain Technology Overview (NISTIR 8202)", url: "https://nvlpubs.nist.gov/nistpubs/ir/2018/NIST.IR.8202.pdf" },
    { label: "ACM — Association for Computing Machinery", url: "https://www.acm.org" },
    { label: "IEEE", url: "https://www.ieee.org" },
  ],
  seeAlso: [
    "technology-basics/automation-vs-artificial-intelligence",
    "technology-basics/what-algorithm-actually-means",
    "technology-basics/what-the-internet-of-things-actually-means",
  ],
  glossary: [
    { term: "Blockchain", definition: "A record-keeping structure in which entries are grouped into blocks, each cryptographically linked to the previous block, and replicated across many independent computers." },
    { term: "Hash", definition: "A fixed-length string of characters produced by running data through a mathematical function; changing even one character of the original data produces a completely different hash." },
    { term: "Distributed ledger", definition: "A record of transactions or entries that is copied and maintained across many independent computers, rather than stored in one central location." },
    { term: "Consensus mechanism", definition: "The rules a distributed network uses to agree on which new block gets added next, without needing a single trusted central authority to decide." },
    { term: "Immutability", definition: "The property of being extremely difficult to alter after the fact — in blockchain, changing a past entry would break the hash link to every block that came after it, making tampering detectable." },
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
          "A blockchain is a general-purpose record-keeping method — linked, tamper-evident blocks of entries copied across many computers — that cryptocurrency is only one application of, not a synonym for it.",
          "Tamper resistance comes from a chain of cryptographic fingerprints (hashes): altering any past entry changes its hash, which breaks the link stored in every block after it, making the change detectable.",
          "No copy in the network is the single 'master' record — many independent computers hold matching copies, and a consensus mechanism governs how they agree on new additions without one central authority deciding alone.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Imagine a shared notebook where every page has a unique fingerprint stamped on it, and each new page also has to record the previous page&apos;s fingerprint before anyone will accept it as valid. If someone tried to secretly change something written on an old page, that page&apos;s fingerprint would change, and it would no longer match the fingerprint the next page recorded — instantly revealing the tampering. A <TermLink href="/technology-basics/what-blockchain-actually-is">blockchain</TermLink> works this way, except copies of the notebook are held by many different computers at once, not just one person, so no single copy can be secretly rewritten without everyone else noticing the mismatch.</div>}
        detailed={<div className="prose-p">This is the <strong>trust-chain / verification</strong> mental model applied to record-keeping. Each block contains a set of entries plus a <TermLink href="/technology-basics/what-blockchain-actually-is">hash</TermLink> — a fixed-length fingerprint computed from that block&apos;s contents — and also stores the hash of the previous block, physically linking them in sequence. Because a cryptographic hash function is designed so that even a tiny change to the input produces a completely different output, altering any past block&apos;s contents changes its hash, which no longer matches the &quot;previous hash&quot; value stored in the next block, breaking the chain&apos;s internal consistency all the way forward. The network is also a <TermLink href="/technology-basics/what-blockchain-actually-is">distributed ledger</TermLink>: many independent computers (nodes) each hold a copy, and a <TermLink href="/technology-basics/what-blockchain-actually-is">consensus mechanism</TermLink> governs how the network agrees on which new block gets appended next, without requiring a single central authority. The edge case worth knowing: &quot;tamper-evident&quot; is not the same as &quot;impossible to change.&quot; A blockchain can technically be altered if an attacker controls enough of the network&apos;s computing or validating power to force a new, rewritten version through the consensus process — which is exactly why decentralization (many independent, honest participants) is the actual source of the security, not the hashing technique alone.</div>}
      />
      <FootnoteAside>Per NIST&apos;s 2018 technology overview report (NISTIR 8202), blockchains are a specific category within the broader family of distributed ledger technologies — not every distributed ledger uses a literal chain of hash-linked blocks, but every blockchain is a distributed ledger of that specific structural kind.</FootnoteAside>

      <p>
        Cryptocurrency is simply one application that needed exactly this property — a shared, tamper-evident transaction record with no single central authority — which is why blockchain and cryptocurrency became so closely associated. The underlying record-keeping method has no inherent connection to currency at all.
      </p>

      <QuickCheck
        question="If someone tried to secretly alter a transaction recorded in an old block on a blockchain, what would happen?"
        options={[
          { text: "Nothing detectable, as long as they changed only their own copy of the record", correct: false, explanation: "Even on their own copy, altering the block's contents would change that block's hash, which would no longer match the 'previous hash' value stored in every subsequent block — breaking the internal chain on that copy in a detectable way." },
          { text: "The altered block's hash would change, breaking the link stored in the next block, and the tampering would become detectable when compared against the many other unaltered copies held across the network", correct: true, explanation: "Correct. A hash change breaks the chain of links, and because many independent computers hold matching copies, an altered single copy would visibly disagree with the rest of the network." },
          { text: "The change would automatically update every other copy across the network to match it", correct: false, explanation: "The opposite is true — an altered copy becomes the outlier that disagrees with the consistent, unaltered copies held elsewhere, which is exactly what makes tampering detectable rather than something that silently propagates." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A simple chain of three blocks (baseline case)</h3>
      <div className="prose-p">
        Block 1 contains some entries and computes a hash, say starting with &quot;4f9a.&quot; Block 2 contains its own entries, plus it stores &quot;4f9a...&quot; as its recorded &quot;previous hash,&quot; and computes its own new hash, say starting with &quot;7b21.&quot; Block 3 does the same, storing &quot;7b21...&quot; as its previous hash. Anyone checking the chain&apos;s integrity can independently recompute each block&apos;s hash from its contents and confirm it matches what the next block recorded — if Block 1&apos;s stored entries were altered after the fact, recomputing its hash would no longer produce &quot;4f9a...,&quot; immediately flagging a mismatch with what Block 2 has on record.
      </div>
      <QuickCheck
        question="Why does each block need to store the previous block's hash, rather than just its own?"
        options={[
          { text: "Because storing the previous hash is what physically links the blocks into a chain, so that tampering with any earlier block breaks a link that's checkable in every later block", correct: true, explanation: "Correct. The stored previous-hash values are exactly what creates the chain structure — without them, blocks would just be a pile of independent records with no way to detect tampering with earlier entries." },
          { text: "It's a redundant backup in case a block's own hash gets lost or corrupted", correct: false, explanation: "The previous hash isn't a backup copy of anything — it serves a structural purpose, creating the link that makes tampering detectable across the whole sequence." },
          { text: "It only matters for the very first block in the chain", correct: false, explanation: "Every block after the first stores a previous hash, and this pattern must continue consistently through the whole chain for the tamper-evidence property to hold." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why a lone attacker altering their own copy doesn&apos;t work (edge case / variation)</h3>
      <div className="prose-p">
        Suppose someone runs one of the many computers holding a copy of a blockchain and edits an old transaction on their own copy, then recomputes every subsequent block&apos;s hash on their local copy to make it internally consistent again. On their machine alone, the chain now looks valid. But the network as a whole doesn&apos;t rely on any single copy — it relies on the consensus mechanism comparing many independent copies, and this one altered copy would disagree with the overwhelming majority of unaltered copies held elsewhere. Unless the attacker somehow controls enough of the network&apos;s validating power to force their altered version to be accepted by the consensus process itself, their edited copy is simply rejected as inconsistent with the rest of the network.
      </div>
      <QuickCheck
        question="An attacker edits an old transaction on their own single copy of a blockchain and recalculates all the later hashes to make that one copy internally consistent. Does this successfully tamper with the blockchain?"
        options={[
          { text: "Yes, because making one copy internally consistent is all that's required", correct: false, explanation: "Internal consistency on a single copy isn't sufficient — the network's security comes from comparing many independent copies, not from any one copy being self-consistent in isolation." },
          { text: "No, not by itself — the altered copy would conflict with the many other unaltered copies held elsewhere, and would need to somehow win the network's consensus process to be accepted as valid", correct: true, explanation: "Correct. Tamper-resistance in a real blockchain network comes from decentralization across many independent participants, not from hashing alone — a single altered copy is just an outlier unless it can overcome the consensus mechanism." },
          { text: "Yes, because blockchains have no way to compare different copies against each other", correct: false, explanation: "Comparing and reconciling copies across many independent participants is precisely the mechanism (consensus) that gives a blockchain its tamper-evident property — it's not something the design lacks." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Using blockchain to track a product through a supply chain (real-world / applied case)</h3>
      <p>
        A company wants to let customers verify that a product moved through a genuine, unaltered sequence of custody — from factory, to shipper, to warehouse, to retailer — without any single party being able to secretly rewrite the history to hide a problem. Each handoff is recorded as an entry in a block, cryptographically linked to the previous handoff&apos;s block, and the record is shared across the participating companies&apos; own computers rather than stored solely on one company&apos;s server. No cryptocurrency is involved anywhere in this system — the value here is purely the tamper-evident, shared record-keeping property, which is the actual core feature blockchain offers, independent of any currency use case.
      </p>
      <QuickCheck
        question="A supply-chain tracking system uses blockchain with no cryptocurrency involved at all. Does this make sense given what blockchain actually is?"
        options={[
          { text: "No, because blockchain and cryptocurrency are the same technology and can't be separated", correct: false, explanation: "Blockchain is a general record-keeping structure; cryptocurrency is one specific application built on top of it. Plenty of blockchain uses, including supply-chain tracking, don't involve any currency at all." },
          { text: "Yes — blockchain's core feature is a tamper-evident, shared record structure, which is useful for supply-chain tracking regardless of whether any currency is involved", correct: true, explanation: "Correct. The hash-linking and distributed-copy properties that make blockchain tamper-evident are equally useful for tracking any kind of sequential record, not just financial transactions." },
          { text: "Yes, but only because supply-chain companies are secretly using it to create their own currency", correct: false, explanation: "Using blockchain for record-keeping doesn't require creating or using any currency — the technology's tamper-evidence and shared-copy properties stand on their own." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="A chain of hash-linked blocks"
        type="detail"
        svgSrc="/diagrams/technology-basics-what-blockchain-actually-is-hash-chain.svg"
        altText="Diagram of three blocks in a chain. Each block contains a list of entries, its own hash, and the hash of the previous block. Arrows show each block's stored previous hash pointing back to the prior block, and a callout shows that changing any entry in Block 1 would change its hash, breaking the link stored in Block 2, and cascading forward through Block 3."
      />
      <p>
        The stored &quot;previous hash&quot; fields are the entire mechanism — remove them and you just have a pile of independent, unlinked records with no built-in way to detect if an earlier one was quietly changed. It&apos;s the linking, not the hashing alone, that turns a list of blocks into a chain.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating 'blockchain' and 'cryptocurrency' as interchangeable terms.", fix: "Blockchain is the general record-keeping structure; cryptocurrency is one application built on top of it. Blockchains are also used for supply-chain tracking, record verification, and other non-currency purposes." },
          { mistake: "Assuming a blockchain is literally impossible to alter under any circumstances.", fix: "It's tamper-evident and highly resistant to alteration because of decentralization, but not mathematically impossible to change if an attacker gains control of enough of the network's validating power — the security comes from having many independent honest participants, not from the hashing technique in isolation." },
          { mistake: "Assuming every blockchain is public and viewable by anyone.", fix: "Some blockchains are public and open to anyone; others are private or permissioned, restricted to a specific set of participating organizations — the hash-chain and distributed-copy structure works either way." },
        ]}
      />
      <MisconceptionCallout
        myth="Blockchain is only useful for, or only exists to support, cryptocurrency."
        reality={<p>Blockchain is a general-purpose method for keeping a tamper-evident, shared record across many independent computers. Cryptocurrency was an early and prominent application because it needed exactly that property — a transaction record no single party could secretly rewrite — but the same structure is used for tracking goods through supply chains, verifying document authenticity, and other record-keeping tasks that have nothing to do with any currency.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you hear 'blockchain,' separate the record-keeping structure from any specific currency or coin built on top of it — they're not the same thing.",
          "If you're evaluating a blockchain-based product, ask what specific tamper-evidence or decentralization property it actually needs — the technology adds real overhead and isn't the right fit for every record-keeping problem.",
          "Remember 'tamper-evident' is not the same claim as 'unchangeable' — understand what a specific system's consensus mechanism actually protects against.",
          "Read What Algorithm Actually Means next to see the general concept of a defined procedure that both hashing and consensus mechanisms are built from.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is blockchain in simple terms?", answer: "It's a way of keeping records where entries are grouped into blocks, each cryptographically linked to the one before it, and copied across many independent computers — making it very difficult to secretly alter a past entry without the change being detected." },
          { question: "Is blockchain the same thing as cryptocurrency?", answer: "No. Blockchain is the underlying record-keeping structure; cryptocurrency is one application built using it. Blockchain is also used for purposes like supply-chain tracking and record verification that have nothing to do with currency." },
          { question: "Can a blockchain be hacked or altered?", answer: "It's highly tamper-resistant because altering a past entry breaks the hash chain and would conflict with the many independent copies held across the network, but it isn't mathematically impossible — an attacker with control over enough of the network's validating power could potentially force through an altered version." },
          { question: "What does 'decentralized' mean in the context of blockchain?", answer: "It means no single computer or organization holds the only authoritative copy of the record. Many independent participants each hold a copy, and a consensus mechanism governs how the network agrees on new additions without one central authority deciding alone." },
          { question: "What is a hash, and why does blockchain need it?", answer: "A hash is a fixed-length fingerprint computed from a block's contents; even a tiny change to the contents produces a completely different hash. Blockchain uses this property to link blocks together so that altering any past block's contents becomes detectable." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
