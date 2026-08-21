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
  title: "Digital Storage Units: Bytes to Terabytes",
  category: "units-measurement-conversions",
  order: 42,
  subtopic: "data-numbers-and-everyday-conversions",
  tags: [
    "digital storage",
    "bytes",
    "gigabytes",
    "binary vs decimal",
    "computing units",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A 'kilo' of storage means two different things depending on whether you're reading a spec sheet or your operating system — and that gap is exactly why a 1TB drive shows up as 931 GB.",
  summary: "Digital storage units stack the same byte-based ladder as any measurement system, but two competing conventions for what counts as a 'kilo' — decimal (1,000) and binary (1,024) — mean the same physical drive reports a different number depending on who's counting.",
  sources: [
    { label: "NIST — Physical Measurement Laboratory", url: "https://www.nist.gov/pml" },
    { label: "NIST — Prefixes for Binary Multiples", url: "https://physics.nist.gov/cuu/Units/binary.html" },
    { label: "Encyclopaedia Britannica — International System of Units", url: "https://www.britannica.com/science/International-System-of-Units" },
  ],
  seeAlso: [
    "units-measurement-conversions/internet-speed-units-mbps-vs-mbs",
    "units-measurement-conversions/binary-and-decimal-number-systems-for-beginners",
    "units-measurement-conversions/common-unit-conversion-mistakes-and-how-to-avoid-them",
  ],
  glossary: [
    {"term":"Byte","definition":"Eight bits, the basic addressable unit of digital storage — the base unit every larger storage unit (KB, MB, GB, TB) is built from."},
    {"term":"Kibibyte (KiB)","definition":"An IEC-defined binary storage unit equal to 1,024 bytes, distinct from the decimal kilobyte (1,000 bytes) — introduced specifically to remove the ambiguity in 'kilobyte.'"},
    {"term":"Decimal storage unit","definition":"An SI-style storage unit (KB, MB, GB, TB) where each step up is exactly 1,000 times the previous one — the convention storage manufacturers use on packaging."},
    {"term":"Binary storage unit","definition":"The traditional computing convention where each step up is 1,024 (2 to the 10th power) times the previous one — still used for RAM and by most operating systems' file-size displays, even when labeled with decimal-looking names like 'GB.'"},
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
      "A byte is 8 bits, and every larger storage unit — kilobyte, megabyte, gigabyte, terabyte — is built from that same base unit by repeated multiplication.",
      "Two different conventions exist for what that multiplication step actually is: decimal (SI), where 1 kilobyte = 1,000 bytes, and binary, where 1 kilobyte historically meant 1,024 bytes because computer memory addresses naturally fall into powers of two.",
      "Storage manufacturers report capacity in decimal units (bigger-looking numbers), while most operating systems still display file sizes using binary math under decimal-looking labels — which is the entire reason a '1TB' drive shows up as roughly 931 GB in Windows, with no bytes actually missing.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Digital storage units stack the same way length units do: 1,000 bytes make a kilobyte, 1,000 kilobytes make a megabyte, 1,000 megabytes make a gigabyte, and so on — a purely decimal ladder, just like meters to kilometers. That is how storage is sold: a &quot;2TB&quot; drive means 2,000,000,000,000 bytes, precisely.</div>}
      detailed={<div className="prose-p">Computers are fundamentally binary, and memory addressing naturally falls into powers of two — 2^10 = 1,024 is the closest power of two to 1,000, so early computing convention adopted 1 <TermLink href="/units-measurement-conversions/binary-and-decimal-number-systems-for-beginners">kilobyte</TermLink> = 1,024 <TermLink href="/units-measurement-conversions/digital-storage-units-bytes-to-terabytes">byte</TermLink>s, 1 megabyte = 1,024 kilobytes = 1,048,576 bytes, and so on. That binary convention quietly coexisted with the decimal SI meaning of &quot;kilo&quot; (1,000) for decades, with a gap that starts small (2.4% at the kilobyte scale) and compounds at every step — by the terabyte scale it&apos;s nearly 10%. Storage manufacturers standardized on the decimal definition (it produces a larger, cleaner-looking number on the box), while operating systems and RAM specifications largely kept the binary convention. In 1998 the International Electrotechnical Commission (IEC) introduced <TermLink href="/units-measurement-conversions/digital-storage-units-bytes-to-terabytes">kibibyte (KiB)</TermLink>, mebibyte (MiB), gibibyte (GiB), and tebibyte (TiB) as unambiguous binary-multiple names, formally reserving kilo/mega/giga/tera for the strictly decimal meaning — but outside technical documentation, most software still labels binary-counted file sizes with the decimal-looking &quot;KB/MB/GB&quot; names anyway.</div>}
      />
      <FootnoteAside>A &quot;1TB&quot; hard drive is manufactured to exactly 1,000,000,000,000 bytes, the decimal terabyte. Windows File Explorer, however, divides that same byte count by 1,073,741,824 (bytes per gibibyte) while still labeling the result &quot;GB&quot; — 1,000,000,000,000 ÷ 1,073,741,824 ≈ 931, which is the entire reason the drive shows &quot;931 GB&quot; the moment you plug it in, before a single file has been saved to it.</FootnoteAside>

      <p>
      Once the two counting systems are separated out, the &quot;missing space&quot; complaint that circulates around every new drive purchase turns out to be a straightforward unit-conversion problem, not a hardware defect.
      </p>

      <QuickCheck
      question="A brand-new external drive is advertised as '2TB.' The moment you plug it in, your computer reports its capacity as roughly 1.82 TB before you've saved a single file. What's the most likely explanation?"
      options={[
      { text: "The drive manufacturer shipped a defective unit with less capacity than advertised", correct: false, explanation: "This gap is expected and near-universal across storage devices — it's not a sign of a defective drive. Almost every drive shows this same pattern." },
      { text: "The manufacturer's '2TB' used the decimal definition (2,000,000,000,000 bytes), while the operating system is displaying that same byte count using binary GiB-based math under a 'TB' label", correct: true, explanation: "Correct. 2,000,000,000,000 bytes ÷ 1,099,511,627,776 (bytes per tebibyte) ≈ 1.82 — matching what the OS shows, with no bytes actually missing." },
      { text: "A small amount of storage is always reserved for the drive's firmware and can never be used", correct: false, explanation: "Some space is set aside for filesystem metadata, but that's a much smaller effect than the decimal-vs-binary gap, which alone accounts for nearly 10% at the terabyte scale." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting bytes to decimal gigabytes (baseline case)</h3>
      <div className="prose-p">
      A file is reported as 4,000,000,000 bytes. Using the decimal (SI) definition: 4,000,000,000 ÷ 1,000,000,000 = 4 GB, exactly. This is the definition storage manufacturers use, and the one that matches simple decimal-point shifting — three zeros dropped per step, just like converting meters to kilometers.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same bytes, read the binary way (edge case / variation)</h3>
      <div className="prose-p">
      Take that identical 4,000,000,000 bytes and divide instead by 1,073,741,824 (2^30, the binary gibibyte): 4,000,000,000 ÷ 1,073,741,824 ≈ 3.73 &quot;GB.&quot; Same physical file, same byte count — a 6.7% smaller number purely because of which multiplication step was used. Neither number is wrong; they&apos;re answering different questions about what &quot;GB&quot; means.
      </div>

      <QuickCheck
      question="Why does the gap between decimal and binary storage units get proportionally larger as the total size grows (kilobytes to terabytes)?"
      options={[
      { text: "It doesn't — the percentage gap between 1,000 and 1,024 is exactly 2.4% no matter what scale you're measuring at", correct: false, explanation: "The 2.4% gap only applies at the kilobyte-to-kibibyte scale. Because the gap compounds with every additional step (KB to MB to GB to TB), it grows at each level." },
      { text: "Because the 1,000-vs-1,024 mismatch compounds with every additional unit step — the ~2.4% gap at the kilobyte level becomes roughly 4.9% at megabytes, 7.4% at gigabytes, and nearly 10% at terabytes", correct: true, explanation: "Correct. Each additional unit level multiplies both systems by their respective base again, so the small per-step discrepancy compounds — which is exactly why the effect is barely noticeable on a small file but very visible on a multi-terabyte drive." },
      { text: "Larger drives use a fundamentally different, more error-prone storage technology than smaller ones", correct: false, explanation: "The gap is entirely a units-definition artifact from compounding the decimal-vs-binary mismatch across more unit steps — it has nothing to do with the storage technology or its reliability." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Buying a drive and accounting for the full gap (real-world / applied case)</h3>
      <div className="prose-p">
      A photographer buys a &quot;2TB&quot; external drive — 2,000,000,000,000 bytes by the manufacturer&apos;s decimal definition. After formatting, the operating system reports roughly 1.82 TB (really TiB) of usable space. Two effects stack here: first, the decimal-to-binary reporting gap alone accounts for 2,000,000,000,000 ÷ 1,099,511,627,776 ≈ 1.819 TiB; second, formatting a drive with a filesystem (NTFS, APFS, exFAT) reserves a small additional amount for metadata structures — typically well under 1% of capacity, much smaller than the units gap. Recognizing which effect is which keeps a buyer from suspecting a defective or short-shipped drive when the numbers are, in fact, completely normal.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Decimal vs binary: the same 1TB drive, two counting systems"
      type="comparison"
      svgSrc="/diagrams/units-measurement-conversions-digital-storage-units-bytes-to-terabytes-decimal-vs-binary.svg"
      altText="A comparison of a 1 terabyte drive measured two ways: a decimal bar showing 1,000,000,000,000 bytes labeled 1 TB, and a binary bar below it showing the same physical bytes now measured in gibibyte-based units, landing at approximately 931 GiB, with the gap between the two bar lengths labeled as the missing space users see in their operating system, not lost data."
      />
      <p>
      The shorter bottom bar isn&apos;t a smaller drive — it&apos;s the identical set of bytes, counted in steps of 1,024 instead of steps of 1,000. Once you can see the two bars are measuring the same underlying quantity, the &quot;missing&quot; gigabytes stop looking like a mystery.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a drive's advertised capacity and its operating-system-reported capacity should be identical numbers.", fix: "Expect a gap of up to ~10% at the terabyte scale between the manufacturer's decimal number and the OS's binary-based display — it's normal, not a shortfall." },
      { mistake: "Confusing MB (megabyte, a storage unit) with Mb (megabit, a bandwidth unit) — the capital vs lowercase B matters and they differ by a factor of 8.", fix: "Read the case of the 'b' carefully; a byte-vs-bit mix-up compounds with the decimal-vs-binary mix-up to produce numbers that look wildly inconsistent." },
      { mistake: "Treating 'missing' space after formatting as evidence of a defective or short-shipped drive.", fix: "Separate the two real effects — the decimal-vs-binary units gap (the large one) and filesystem metadata overhead (the small one) — before assuming anything is wrong with the hardware." },
      ]}
      />
      <MisconceptionCallout
      myth="Computers 'lose' storage space every time you format a large drive, and manufacturers are shorting buyers on capacity."
      reality={<p>The overwhelming majority of the apparent gap between an advertised drive capacity and what your computer displays is a pure units-definition mismatch — decimal (1,000-based) units on the box versus binary (1,024-based) units in the operating system&apos;s display, not a difference in physical bytes. A small amount of space genuinely is reserved for filesystem metadata during formatting, but it is a minor fraction of the total, dwarfed by the units gap at large capacities.</p>}
      />

      <QuickCheck
      question="RAM specifications (like '16GB of memory') almost always use which counting convention?"
      options={[
      { text: "Decimal, the same as storage manufacturers use for hard drives and SSDs", correct: false, explanation: "RAM capacity is a notable exception — it's specified and addressed in binary units, unlike drive storage capacity, which manufacturers report decimally." },
      { text: "Binary — RAM is manufactured and addressed in powers of two, so '16GB' of RAM means 16 x 1,073,741,824 bytes, not 16 x 1,000,000,000", correct: true, explanation: "Correct. RAM's physical addressing is inherently binary (powers of two), so unlike drive storage, RAM specifications have stayed binary in practice even though the 'GB' label looks decimal." },
      { text: "It varies randomly by manufacturer with no consistent convention", correct: false, explanation: "RAM specification is consistently binary across virtually all manufacturers — it's one of the more predictable corners of this otherwise inconsistent labeling landscape." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert bytes to decimal gigabytes"
      fields={[
      { key: "value", label: "Value in bytes", defaultValue: 4000000000 },
      { key: "conversionFactor", label: "Conversion factor (0.000000001 for decimal GB, 0.000000000931 for binary GiB)", defaultValue: 0.000000001, step: 0.0000000001 },
      ]}
      resultLabel="Converted value"
      formula="unitConversionByFactor"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "When comparing drive capacities across brands, check whether the spec sheet is using decimal or binary units — most storage marketing uses decimal.",
      "Remember RAM specs are essentially always binary, even without a KiB/MiB/GiB label.",
      "Don't assume 'missing' space after buying or formatting a drive means a defect — check the decimal-vs-binary gap first using the calculator above.",
      "Use KiB/MiB/GiB yourself in technical writing when the distinction actually matters, to avoid passing the ambiguity on to your reader.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Why does my 1TB hard drive show less than 1TB of space?", answer: "Because the manufacturer counted in decimal terabytes (1,000,000,000,000 bytes) while your operating system displays the same byte count using binary math (dividing by 1,073,741,824 per 'GB'), landing at roughly 931 GB — no bytes are actually missing." },
      { question: "What is the difference between a kilobyte and a kibibyte?", answer: "A kilobyte (KB), by the modern SI-aligned definition, is exactly 1,000 bytes. A kibibyte (KiB) is exactly 1,024 bytes — the IEC introduced 'kibibyte' specifically so binary-based counting would have its own unambiguous name instead of borrowing 'kilobyte.'" },
      { question: "Is 1GB equal to 1000MB or 1024MB?", answer: "It depends on context: by the strict decimal (SI) definition, 1 GB = 1,000 MB. Under the older binary convention still used informally by many operating systems, what's labeled 'GB' actually behaves like 1,024 'MB.' Storage manufacturers use the decimal definition; many OS file-size displays use the binary one under the same label." },
      { question: "Why do storage manufacturers use decimal GB while computers show binary GB?", answer: "Manufacturers use the decimal (SI) definition because 1,000-based units are the internationally standardized meaning of 'kilo/mega/giga' and also produce a larger number on the box. Operating systems kept the binary convention because computer memory addressing is inherently based on powers of two, and older software never migrated its labels." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
