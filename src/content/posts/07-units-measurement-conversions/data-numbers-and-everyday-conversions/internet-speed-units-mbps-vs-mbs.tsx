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
  title: "Internet Speed Units: Mbps vs MB/s",
  category: "units-measurement-conversions",
  order: 43,
  subtopic: "data-numbers-and-everyday-conversions",
  tags: [
    "internet speed",
    "Mbps",
    "megabytes per second",
    "bits vs bytes",
    "bandwidth",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A '100 Mbps' internet plan doesn't download at 100 megabytes per second — it downloads at about 12.5, because bandwidth is sold in bits and files are measured in bytes.",
  summary: "Internet speed advertised in megabits per second (Mbps) and file-transfer speed shown in megabytes per second (MB/s) differ by a factor of 8, because a byte is defined as 8 bits — the single most common source of 'my internet isn't as fast as advertised' confusion.",
  sources: [
    { label: "NIST — Physical Measurement Laboratory", url: "https://www.nist.gov/pml" },
    { label: "NIST — Prefixes for Binary Multiples", url: "https://physics.nist.gov/cuu/Units/binary.html" },
    { label: "Encyclopaedia Britannica — International System of Units", url: "https://www.britannica.com/science/International-System-of-Units" },
  ],
  seeAlso: [
    "units-measurement-conversions/digital-storage-units-bytes-to-terabytes",
    "units-measurement-conversions/binary-and-decimal-number-systems-for-beginners",
    "units-measurement-conversions/common-unit-conversion-mistakes-and-how-to-avoid-them",
  ],
  glossary: [
    {"term":"Bit","definition":"The smallest unit of digital information, a single binary 0 or 1 — the base unit network bandwidth is conventionally measured in."},
    {"term":"Megabit per second (Mbps)","definition":"A bandwidth unit equal to one million bits transferred per second, the unit internet service providers almost always advertise speeds in."},
    {"term":"Megabyte per second (MB/s)","definition":"A data-transfer-rate unit equal to one million bytes per second — the unit most operating system download/upload progress indicators display."},
    {"term":"Bit-to-byte factor","definition":"The fixed ratio of 8 bits per byte, which converts any bits-based rate (like Mbps) into a bytes-based rate (like MB/s) by dividing by 8."},
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
      "Internet service providers advertise speed in megabits per second (Mbps), but file download progress bars and file sizes are measured in megabytes per second (MB/s) — and a byte is defined as exactly 8 bits.",
      "A '100 Mbps' connection therefore has a real-world maximum download speed of about 12.5 MB/s (100 ÷ 8), not 100 MB/s — this single factor-of-8 mix-up is the most common reason people believe their internet is running far slower than advertised.",
      "The gap is a units convention, not a performance shortfall: bandwidth has historically been measured in bits because it traces back to telecommunications engineering, while storage has always been measured in bytes because that's the unit computer memory is organized in.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A &quot;100 Mbps&quot; internet plan can move about 12.5 megabytes of actual file data per second, not 100. The conversion is a single division: megabits ÷ 8 = megabytes, because a <TermLink href="/units-measurement-conversions/digital-storage-units-bytes-to-terabytes">byte</TermLink> is defined as 8 <TermLink href="/units-measurement-conversions/internet-speed-units-mbps-vs-mbs">bit</TermLink>s.</div>}
      detailed={<div className="prose-p">The bits-vs-bytes split traces back to two different engineering traditions measuring two different things. Network and telecommunications engineering has historically measured throughput in bits per second, going back to modem-era data transmission where the bit — a single binary signal state — was the natural unit of a communication channel&apos;s capacity. Computer storage and memory, by contrast, have always been organized in bytes (8-bit groupings), because 8 bits is enough to represent a single character in most early character-encoding schemes, which made the byte the natural addressable unit for storage. Internet service providers kept the telecom convention (bits) for advertised speed; operating systems kept the storage convention (bytes) for file transfer displays — so the same physical connection gets described in two different units by the two different systems a user interacts with, without either side being &quot;wrong.&quot; The practical formula is <TermLink href="/units-measurement-conversions/internet-speed-units-mbps-vs-mbs">megabyte per second (MB/s)</TermLink> = <TermLink href="/units-measurement-conversions/internet-speed-units-mbps-vs-mbs">megabit per second (Mbps)</TermLink> ÷ 8, and it holds regardless of connection type — fiber, cable, or wireless.</div>}
      />
      <FootnoteAside>Real-world download speed is also capped by whichever link in the chain is slowest — your ISP plan, your router&apos;s Wi-Fi standard, the server you&apos;re downloading from, and even the destination drive&apos;s write speed all impose their own ceiling — so 12.5 MB/s is a theoretical maximum for a 100 Mbps plan, not a guarantee.</FootnoteAside>

      <p>
      Once the factor-of-8 is visible, most &quot;my internet is slower than advertised&quot; complaints turn out to be a units mismatch rather than an actual performance problem — though real bottlenecks do exist too, which is why the worked examples below cover both.
      </p>

      <QuickCheck
      question="Someone pays for a '200 Mbps' internet plan and downloads a 1,000 MB file that takes 40 seconds. Is their connection underperforming?"
      options={[
      { text: "Yes — at 200 Mbps the file should download in about 4 seconds", correct: false, explanation: "This uses 200 as if it were already megabytes per second. It's megabits per second, which converts to only 25 MB/s of real transfer capacity." },
      { text: "No — 200 Mbps converts to 200 ÷ 8 = 25 MB/s maximum, so a 1,000 MB file would take at least 1,000 ÷ 25 = 40 seconds even at the connection's full theoretical speed", correct: true, explanation: "Correct. 40 seconds matches the theoretical maximum almost exactly — this connection is actually performing at its advertised capacity, not underperforming." },
      { text: "There isn't enough information to know anything about the connection's performance", correct: false, explanation: "The Mbps-to-MB/s conversion (divide by 8) gives exactly enough information here — 200 Mbps caps out at 25 MB/s, matching the observed 40-second download almost exactly." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting an advertised plan speed to real download speed (baseline case)</h3>
      <div className="prose-p">
      An internet plan is advertised at 100 Mbps. Converting to megabytes per second: 100 ÷ 8 = 12.5 MB/s. That is the theoretical ceiling a download manager or browser progress bar could show for this connection — never 100 MB/s, which would require an 800 Mbps connection.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Estimating download time for a large file (edge case / variation)</h3>
      <div className="prose-p">
      A 50 GB game download over a 300 Mbps connection: first convert speed to MB/s (300 ÷ 8 = 37.5 MB/s), then convert the file size to megabytes (50 GB × 1,000 = 50,000 MB, using the decimal storage convention), then divide: 50,000 ÷ 37.5 ≈ 1,333 seconds, or about 22.2 minutes, at the connection&apos;s theoretical maximum. This two-step chain — bits to bytes, then bytes divided by rate — is the general pattern for any download-time estimate.
      </div>

      <QuickCheck
      question="Why might the actual download in Example 2 take noticeably longer than the calculated 22.2 minutes, even on a perfectly healthy connection?"
      options={[
      { text: "The Mbps-to-MB/s conversion formula is only an approximation and becomes less accurate for larger files", correct: false, explanation: "The bits-to-bytes conversion (dividing by 8) is exact regardless of file size — it's a fixed definitional ratio, not an approximation that degrades with scale." },
      { text: "The 22.2-minute figure is a theoretical maximum assuming the full connection speed is available for the entire download; real-world factors like server-side speed limits, network congestion, and Wi-Fi overhead typically make actual downloads slower than the theoretical ceiling", correct: true, explanation: "Correct. The unit conversion tells you the absolute best case; it doesn't account for any other link in the chain also being a limiting factor, which is almost always true in practice." },
      { text: "50 GB was converted incorrectly and should have used 1,024 instead of 1,000", correct: false, explanation: "Using 1,000 (decimal) for storage-to-megabyte conversion is a legitimate choice consistent with how ISPs and most download managers measure file transfer — it's not an error, just one of the two valid conventions covered elsewhere in this topic." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Comparing two ISP plans by real transfer speed (real-world / applied case)</h3>
      <div className="prose-p">
      Two internet providers offer plans priced similarly: Provider A advertises &quot;500 Mbps,&quot; Provider B advertises &quot;50 MB/s.&quot; Converting both to the same unit for a fair comparison: Provider A&apos;s 500 Mbps ÷ 8 = 62.5 MB/s, meaningfully faster than Provider B&apos;s already-in-MB/s 50 MB/s figure. Without converting to a common unit first, a shopper skimming both numbers might wrongly assume &quot;500&quot; beats &quot;50&quot; by 10x, when the real advantage is closer to 25% — still real, but a very different picture once both plans are expressed in the same unit.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Converting 100 Mbps to the megabytes-per-second your download bar shows"
      type="flow"
      svgSrc="/diagrams/units-measurement-conversions-internet-speed-units-mbps-vs-mbs-bits-bytes.svg"
      altText="A diagram showing a 100 megabit-per-second internet plan represented as eight small bit blocks per byte, divided by 8 to yield 12.5 megabytes per second, the actual download speed a file-transfer progress bar will show."
      />
      <p>
      Every byte is built from exactly 8 bits, which is why the conversion between a bits-based advertised speed and a bytes-based observed speed is always the same single division — no lookup table required, unlike most unit conversions in this topic.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Reading an advertised 'Mbps' plan speed as if it were already in MB/s, then concluding the connection is 8x slower than it should be.", fix: "Always divide the advertised Mbps figure by 8 before comparing it to a file size (in MB) or a download bar's displayed speed (in MB/s)." },
      { mistake: "Comparing two ISP plans listed in different units (one in Mbps, one in MB/s) without converting them to the same unit first.", fix: "Convert both figures to the same unit — divide any Mbps number by 8 to get MB/s — before judging which plan is actually faster." },
      { mistake: "Assuming a download running noticeably below the calculated theoretical maximum means the internet connection itself is broken.", fix: "Check other links in the chain first — Wi-Fi signal strength, the server's own upload speed, and network congestion are all common real bottlenecks separate from the bits-vs-bytes conversion." },
      ]}
      />
      <MisconceptionCallout
      myth="If an ISP advertises '100 Mbps,' a customer should be able to download at 100 megabytes per second."
      reality={<p>Advertised internet speed is measured in megabits per second (Mbps), while file sizes and download progress bars are measured in megabytes per second (MB/s) — and a byte is fixed at 8 bits by definition. A 100 Mbps connection has a real-world maximum transfer rate of 100 ÷ 8 = 12.5 MB/s, not 100 MB/s. This is a units convention difference between the telecom industry (bits) and computing/storage (bytes), not a sign the ISP is underdelivering.</p>}
      />

      <QuickCheck
      question="A file-sharing app shows a download progress bar reading '15.2 MB/s.' Roughly what internet plan speed, in Mbps, would this correspond to at full utilization?"
      options={[
      { text: "About 15 Mbps, since MB/s and Mbps are close enough to treat as the same figure", correct: false, explanation: "MB/s and Mbps differ by a factor of 8 — treating them as interchangeable is exactly the mistake this topic is about." },
      { text: "About 122 Mbps (15.2 x 8), since converting from bytes back to bits means multiplying by 8 instead of dividing", correct: true, explanation: "Correct. Going the other direction — from an observed MB/s figure back to the Mbps a plan would need to support it — multiplies by 8 rather than dividing, since MB/s x 8 = Mbps." },
      { text: "About 1.9 Mbps (15.2 ÷ 8), using the same division as converting Mbps to MB/s", correct: false, explanation: "This applies the conversion backwards. Going from a bytes-based figure to a bits-based one requires multiplying by 8, not dividing — dividing would only make sense going the other direction (Mbps to MB/s)." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Convert internet speed from Mbps to MB/s"
      fields={[
      { key: "mbps", label: "Speed in megabits per second (Mbps)", defaultValue: 100 },
      ]}
      resultLabel="Speed in megabytes per second (MB/s)"
      formula="mbpsToMBps"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Before judging a download as 'too slow,' divide your plan's advertised Mbps by 8 to get the real theoretical maximum in MB/s.",
      "When comparing two ISP plans, convert both figures to the same unit (Mbps or MB/s) before deciding which is genuinely faster.",
      "Use the calculator above to check your own connection's theoretical file-transfer ceiling against what a download bar actually shows.",
      "If real downloads run well below the theoretical MB/s ceiling even after converting units correctly, look at Wi-Fi signal, network congestion, or the source server's speed as the more likely bottleneck.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "Why is my internet slower than advertised?", answer: "Very often it isn't actually slower — it's a units mismatch. Advertised speed is in megabits per second (Mbps), while download bars show megabytes per second (MB/s), which is 8 times smaller for the same connection. Divide your advertised Mbps by 8 before comparing." },
      { question: "How do I convert Mbps to MB/s?", answer: "Divide by 8. A byte is defined as exactly 8 bits, so megabits per second ÷ 8 = megabytes per second. A 100 Mbps plan tops out at 12.5 MB/s." },
      { question: "Is Mbps the same as MB/s?", answer: "No. Mbps (megabits per second, lowercase b) measures bandwidth in bits and is what ISPs advertise. MB/s (megabytes per second, capital B) measures file transfer in bytes and is what download bars display. They differ by exactly a factor of 8." },
      { question: "How long will it take to download a file at a given internet speed?", answer: "Convert your plan's Mbps to MB/s (divide by 8), then divide the file size in MB by that number. A 10,000 MB file on a 200 Mbps (25 MB/s) connection takes about 400 seconds at the theoretical maximum, before accounting for other bottlenecks." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
