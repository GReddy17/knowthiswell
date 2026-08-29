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
  title: "How a QR Code Actually Stores Information",
  category: "technology-basics",
  order: 71,
  subtopic: "everyday-tech-curiosities",
  tags: ["QR codes", "barcodes", "error correction", "encoding data", "technology basics", "everyday tech"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "A QR code stores its data directly in a grid of black and white squares — no internet connection is involved until your phone acts on what it decodes.",
  summary: "A QR code is a two-dimensional pattern of black and white squares, called modules, that directly encodes text or data as a fixed sequence of bits, plus built-in error-correction data that lets it still be read even when part of the pattern is damaged or covered.",
  sources: [
    { label: "GS1 — QR Code Standards", url: "https://www.gs1.org/standards/barcodes/qr-code" },
    { label: "ISO/IEC 18004 — QR Code Symbology Specification", url: "https://www.iso.org/standard/83389.html" },
    { label: "MDN Web Docs — Barcode Detection API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API" },
  ],
  seeAlso: [
    "technology-basics/how-a-barcode-gets-scanned",
    "technology-basics/why-screenshots-look-different-across-devices",
    "technology-basics/how-gps-finds-your-location",
  ],
  glossary: [
    { term: "Module", definition: "One single black or white square in a QR code's grid — the smallest unit the pattern is built from, each one representing a single bit of data." },
    { term: "Finder pattern", definition: "One of the three large square patterns in a QR code's corners that lets a scanner instantly locate the code and determine its orientation, even if the image is rotated or viewed at an angle." },
    { term: "Quiet zone", definition: "The blank margin of empty space required around a QR code's outer edge so a scanner can reliably distinguish where the pattern starts and stops." },
    { term: "Error correction", definition: "Extra, mathematically derived data encoded alongside a QR code's actual content that allows the original data to be reconstructed even if part of the pattern is unreadable or damaged." },
    { term: "QR code version", definition: "A number from 1 to 40 indicating a QR code's grid size and therefore its total data capacity — higher versions have larger, denser grids that hold more information." },
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
          "A QR code doesn't fetch its content from the internet — the data is encoded directly in the pattern of black and white squares itself, readable by any camera with the right software, offline.",
          "Built-in error correction is why a QR code still scans correctly even with a logo covering part of it, or after some smudging or minor damage — a portion of the pattern is mathematically redundant on purpose.",
          "A QR code's grid size (its version) and its error-correction level both trade off directly against how much actual data it can hold — more redundancy or a smaller grid means less room for content.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/technology-basics/how-a-qr-code-stores-information">QR code</TermLink> is like a message spelled out in a grid of black and white tiles instead of letters. Each tiny square, called a <TermLink href="/technology-basics/how-a-qr-code-stores-information">module</TermLink>, is either &quot;on&quot; (black) or &quot;off&quot; (white) — the exact same idea as a light switch being on or off. Line up enough of those switches in a fixed pattern and you can spell out a web address, a wifi password, or a block of text. Your phone&apos;s camera doesn&apos;t connect to anything to read it; it just looks at the pattern, the same way you&apos;d read a word spelled out in a row of light switches.</div>}
        detailed={<div className="prose-p">A QR code is a two-dimensional application of the <strong>encode → transmit/store → decode</strong> pattern that underlies most digital data formats. The content — text, a URL, contact details, wifi credentials — is first converted into binary, then arranged into the grid following a fixed, standardized layout defined by ISO/IEC 18004. Three large <TermLink href="/technology-basics/how-a-qr-code-stores-information">finder patterns</TermLink> sit in three of the four corners, letting a scanner instantly detect the code and correct for rotation or a skewed camera angle before it even starts reading data. A required blank border, the <TermLink href="/technology-basics/how-a-qr-code-stores-information">quiet zone</TermLink>, tells the scanner exactly where the pattern begins and ends. Critically, a meaningful fraction of the modules aren&apos;t the actual message at all — they&apos;re <TermLink href="/technology-basics/how-a-qr-code-stores-information">error correction</TermLink> data, generated using Reed-Solomon codes, the same mathematical family used to recover data from scratched CDs and DVDs. This lets a scanner mathematically reconstruct the original message even if part of the code is missing, blurry, or intentionally covered by a logo.</div>}
      />
      <FootnoteAside>QR stands for &quot;Quick Response&quot; — the format was originally developed in the 1990s for tracking automotive parts on a factory floor, specifically because it could be scanned reliably at high speed from any angle, unlike a standard one-dimensional barcode.</FootnoteAside>
      <p>
        The &quot;no internet required to read the pattern&quot; part is the piece most people get backwards, so it&apos;s worth testing directly before moving on.
      </p>
      <QuickCheck
        question="A phone with no cellular signal and WiFi turned off scans a QR code containing a block of plain text. What happens?"
        options={[
          { text: "The scan fails, because reading a QR code always requires an active internet connection", correct: false, explanation: "The pattern itself contains the data directly — reading and decoding it doesn't require a network connection at all." },
          { text: "The phone successfully decodes and displays the plain text, since the text itself is encoded directly in the pattern of modules", correct: true, explanation: "Correct. Decoding a QR code is a purely local, offline operation — a connection is only needed afterward if the decoded content happens to be a link the phone then tries to open." },
          { text: "The phone can scan the pattern but can't decode any of the data without connecting to a QR code server first", correct: false, explanation: "There's no external server involved in decoding — the standardized pattern-to-data conversion happens entirely on the device doing the scanning." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Scanning a URL on a poster (baseline case)</h3>
      <div className="prose-p">
        A poster has a QR code that opens a website. The text &quot;https://example.com/event&quot; was converted into binary and arranged into the grid at the time the code was generated — nothing about the poster is connected to anything. When a phone&apos;s camera scans it, the decoding software locates the three finder patterns, corrects for the camera&apos;s angle, reads the modules in the standardized order, verifies (and if needed repairs) the message using the error-correction data, and recovers the exact text &quot;https://example.com/event.&quot; Only <em>then</em> does the phone recognize that text as a URL and prompt to open it in a browser — at which point, and only then, an internet connection actually gets used.
      </div>
      <QuickCheck
        question="At what point in scanning a QR code containing a URL does an internet connection actually become necessary?"
        options={[
          { text: "Immediately, since the camera needs to contact a server just to read the pattern", correct: false, explanation: "Reading and decoding the pattern into text is entirely local — no server contact happens at that stage." },
          { text: "Only after the text is decoded, if the phone then tries to open that decoded text as a URL in a browser", correct: true, explanation: "Correct. Decoding the pattern into plain text is offline; the network is only involved in the separate, later step of acting on a URL." },
          { text: "An internet connection is never needed at any point, even to open the resulting website", correct: false, explanation: "Opening an actual website does require a connection — it's specifically the decoding step, not the follow-up action, that's offline." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A QR code with a logo covering part of it (edge case / variation)</h3>
      <div className="prose-p">
        Many branded QR codes have a company logo placed over the center of the grid, and they still scan correctly. This works because of error correction: a QR code generated with a higher error-correction level deliberately includes enough redundant data to reconstruct the full message even if a meaningful percentage of the modules are unreadable. A code generated at the highest error-correction level can typically tolerate roughly 30% of its modules being damaged or obscured and still decode correctly, while one generated at the lowest level can tolerate only around 7% — which is exactly why QR codes meant to carry a logo or decorative design are deliberately generated at a higher error-correction level than a plain, undecorated code needs.
      </div>
      <QuickCheck
        question="Why can a QR code with a logo covering its center still be scanned successfully?"
        options={[
          { text: "Scanners simply ignore the center of every QR code regardless of what's encoded there", correct: false, explanation: "Scanners don't selectively ignore regions — the center normally does carry real data. It's error correction, not a blind spot, that makes recovery possible." },
          { text: "The code was generated with enough error-correction redundancy to mathematically reconstruct the covered portion of the message", correct: true, explanation: "Correct. Higher error-correction levels add more redundant data specifically so a scanner can recover the full message even with part of the pattern missing or obscured." },
          { text: "The phone's camera has special logo-detection software that fills in the missing part automatically", correct: false, explanation: "This isn't camera-side image guessing — the recovery is a mathematical property of the error-correction data built into the code itself, independent of the scanning device." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A wifi-login QR code vs. a boarding-pass QR code (real-world / applied case)</h3>
      <p>
        A wifi network&apos;s QR code typically encodes a short, structured string containing the network name and password directly — scanning it lets a phone join the network without anyone typing a password, because the credentials themselves are sitting right there in the pattern. A boarding pass QR code encodes something denser: a structured block of data including passenger name, flight number, seat, and a record locator, formatted to a standard airlines agree on so any airport scanner, from any airline&apos;s system, can read it consistently. Both are the exact same underlying technology — the only real difference is how much data is packed in and how that data is structured, which is a choice made entirely at the moment the code is generated, not a property of QR codes in general.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="A QR code's grid of modules, decoded into plain text"
        type="detail"
        svgSrc="/diagrams/technology-basics-how-a-qr-code-stores-information-module-grid.svg"
        altText="Diagram of a QR code's grid of black and white modules with the three corner finder patterns highlighted, an arrow labeled decode pointing to the resulting plain-text output."
      />
      <p>
        Every module in that grid plays one of a few defined roles — finder patterns for orientation, timing patterns for alignment, actual message data, and error-correction data — all specified precisely enough by the standard that any compliant scanner decodes the same code identically.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a QR code can only ever store a website link.", fix: "A QR code can encode plain text, contact cards, wifi credentials, and other structured data — a URL is simply the most common use, not the only one." },
          { mistake: "Printing a QR code too small or too close to other elements, with no clear margin around it.", fix: "Leave the required quiet zone (blank margin) around the code, and print it large enough that its smallest modules stay clearly distinguishable at expected scanning distance." },
          { mistake: "Believing a bigger, denser QR code is automatically 'more secure.'", fix: "Grid size (version) determines data capacity, not security — a QR code has no built-in encryption or access control of its own." },
          { mistake: "Assuming heavy logo placement or decoration works the same on every QR code regardless of error-correction level.", fix: "Decorated or logo-carrying codes need a higher error-correction level generated on purpose — adding decoration to a low-error-correction code risks it failing to scan." },
        ]}
      />
      <MisconceptionCallout
        myth="A QR code connects to the internet to look up and retrieve its content when scanned."
        reality={<p>The content is embedded directly in the pattern itself at the moment the code is created — scanning it is an entirely offline, local decoding operation. An internet connection only becomes relevant afterward, and only if the decoded content happens to be a link the device then tries to open, or data the device chooses to send somewhere. The QR code itself never phones home.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "If you're generating a QR code with a logo or decoration, choose a higher error-correction level so it stays scannable.",
          "Test any QR code you plan to print at the actual size and distance it will be scanned from before finalizing the design.",
          "Remember that scanning a QR code is always local and offline — only the action it triggers (like opening a link) needs a connection.",
          "Read the related entry on how a barcode gets scanned to see the one-dimensional version of this same idea.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does a QR code actually store information?", answer: "It arranges data as a grid of black and white squares called modules, following a fixed international standard (ISO/IEC 18004). Each module represents a bit, and the pattern also includes finder patterns for orientation and built-in error-correction data, so the whole grid can be read and decoded by any compliant scanner without needing an internet connection." },
          { question: "Does a QR code need internet to work?", answer: "No — decoding the pattern into text or data is entirely offline. A connection is only needed afterward, if the decoded content happens to be a URL or other data the device then acts on." },
          { question: "Why do QR codes still scan when a logo covers part of them?", answer: "QR codes include error-correction data generated with Reed-Solomon codes, which lets a scanner mathematically reconstruct the full message even if a meaningful portion of the pattern is missing or covered. Codes meant to carry a logo are generated with a higher error-correction level specifically to allow for this." },
          { question: "What's the difference between a QR code and a regular barcode?", answer: "A regular barcode stores data in one dimension, as a series of parallel bars of varying width, typically holding a short numeric code. A QR code stores data in two dimensions across a full grid, which lets it hold far more information — text, URLs, structured data — in a similar physical footprint." },
          { question: "How much data can a QR code hold?", answer: "It depends on the code's version (grid size, from 1 to 40) and its error-correction level — larger grids and lower error-correction levels both increase raw capacity. Larger versions can hold thousands of characters of text, though most everyday QR codes use a small fraction of that maximum." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
