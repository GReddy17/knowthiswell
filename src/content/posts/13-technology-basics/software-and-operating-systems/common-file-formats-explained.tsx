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
  title: "File Formats Explained: Why .pdf, .docx, and .png Aren't Interchangeable",
  category: "technology-basics",
  order: 23,
  subtopic: "software-and-operating-systems",
  tags: ["file formats", "file extensions", "pdf vs docx", "image formats", "technology basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "A file extension is a label, but the file format is a rulebook — mixing them up is why renaming a file's extension almost never makes it open correctly.",
  summary: "A file format is a defined set of rules for how information is structured and encoded inside a file, which determines which programs can read it correctly and what capabilities (editing, transparency, compression) it supports.",
  sources: [
    { label: "Library of Congress — Sustainability of Digital Formats", url: "https://www.loc.gov/preservation/digital/formats/index.html" },
    { label: "MDN Web Docs — Image file type and format guide", url: "https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types" },
    { label: "IETF — Internet Engineering Task Force", url: "https://www.ietf.org/" },
  ],
  seeAlso: [
    "technology-basics/how-file-compression-works",
    "technology-basics/what-compatibility-actually-means",
    "technology-basics/apps-vs-software-explained",
  ],
  glossary: [
    { term: "File format", definition: "A defined set of rules for how information is structured and encoded inside a file — what bytes mean what, in what order — which a program must follow to read or write that file correctly." },
    { term: "File extension", definition: "The short suffix after the dot in a filename (like .pdf or .docx) that signals which format a file claims to be in — a label, not a guarantee, since renaming it doesn't change the actual data inside." },
    { term: "Container format", definition: "A file format that bundles multiple kinds of data together with instructions for how they relate — a video container, for example, holds separately encoded video and audio streams plus timing information." },
    { term: "Codec", definition: "Short for 'coder-decoder' — the specific algorithm used to compress and decompress audio or video data inside a container format." },
    { term: "Proprietary format", definition: "A file format whose full technical specification is owned or undisclosed by a single company, which can make it harder for other software to read or write reliably." },
    { term: "Open format", definition: "A file format whose technical specification is publicly published, allowing any developer to build software that reads or writes it correctly." },
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
          "A file format is a rulebook for how data is structured inside a file — the extension is just a label claiming which rulebook was used, and renaming a file doesn't rewrite its actual contents.",
          "Different formats trade off different things on purpose: .png keeps every pixel exact but produces a larger file, .jpg discards some detail to get a much smaller file, and .docx stores editable structure that .pdf deliberately locks down.",
          "A program can only open a file correctly if it understands that specific format's rules — 'wrong format' errors happen because the program is reading bytes it doesn't know how to interpret, not because the file is corrupted.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A <TermLink href="/technology-basics/common-file-formats-explained">file format</TermLink> is like a recipe written in a specific language. If a French cookbook and an English cookbook both describe the same dish, you still need to be able to read the language the recipe is written in — otherwise the words on the page are just meaningless symbols to you, even though the information is technically all there. A program trying to open a file it doesn&apos;t recognize is in exactly that position: the data exists, but the program doesn&apos;t know the rules for decoding it into something useful.</div>}
        detailed={<div className="prose-p">Every file format defines precisely how a sequence of bytes should be interpreted: where the header is, how text or pixels or audio samples are encoded, and in what order. A <TermLink href="/technology-basics/common-file-formats-explained">file extension</TermLink> like .png or .docx is only a hint the operating system uses to guess which program should open a file and which rulebook to apply — it doesn&apos;t verify anything. That&apos;s why manually renaming a photo from .jpg to .png doesn&apos;t actually convert it; the bytes inside are still structured according to JPEG&apos;s rules, so a program expecting PNG&apos;s structure will fail to read it correctly, or in some cases display nothing at all. Some formats are <TermLink href="/technology-basics/common-file-formats-explained">container formats</TermLink> — a video file, for instance, bundles a video stream and an audio stream, each compressed with its own <TermLink href="/technology-basics/common-file-formats-explained">codec</TermLink>, plus timing metadata to keep them synchronized, all inside one outer file. Formats also differ in whether their specification is publicly documented (an <TermLink href="/technology-basics/common-file-formats-explained">open format</TermLink>) or controlled by one company (a <TermLink href="/technology-basics/common-file-formats-explained">proprietary format</TermLink>), which affects how reliably other software can read or write it.</div>}
      />
      <FootnoteAside>Many file formats include a short signature of specific bytes at the very start of the file — sometimes called a &quot;magic number&quot; — that identifies the format regardless of what the extension says. This is how some programs can still correctly detect a file&apos;s real format even if its extension has been changed or removed.</FootnoteAside>
      <p>
        Once you see a format as a rulebook rather than a label, most &quot;why won&apos;t this file open&quot; problems stop being mysterious — they&apos;re almost always a program being handed a rulebook it was never taught to read.
      </p>
      <QuickCheck
        question="If you rename a JPEG photo from photo.jpg to photo.png, does the file actually become a PNG?"
        options={[
          { text: "Yes, changing the extension converts the file's internal format automatically", correct: false, explanation: "Renaming only changes the label on the file, not the bytes inside it. Actual conversion requires a program to re-encode the data according to the new format's rules." },
          { text: "No — the extension is just a label; the bytes inside are still structured according to JPEG's rules, so a program expecting PNG's structure may fail to read it correctly", correct: true, explanation: "Correct. This is exactly why simply renaming a file's extension is not the same as converting it." },
          { text: "It becomes a PNG only if the file is smaller than 1MB", correct: false, explanation: "File size has no bearing on this. Renaming never changes the internal byte structure, regardless of how large or small the file is." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Sending a resume as .docx vs. .pdf (baseline case)</h3>
      <div className="prose-p">
        A .docx file stores a document&apos;s structure in an editable form — the recipient&apos;s word processor can change fonts, fix typos, and rearrange text, because the format is built to support editing. A .pdf of the same resume locks the layout: text, spacing, and page breaks are fixed so it looks identical on any device or printer, and casual editing is deliberately difficult. Neither format is &quot;better&quot; in general — a resume sent as .pdf guarantees the layout survives intact across every viewer, while a résumé template shared as .docx is the right choice when the recipient is expected to actually customize it.
      </div>
      <QuickCheck
        question="Why might someone specifically choose to send a resume as a .pdf instead of a .docx?"
        options={[
          { text: "PDF files are always smaller in size than DOCX files", correct: false, explanation: "Relative file size depends on content, not format alone, and isn't the reason PDFs are typically chosen for resumes." },
          { text: "PDF locks the layout so it displays identically across devices and viewers, while DOCX is built to remain easily editable", correct: true, explanation: "Correct. PDF's whole design goal is fixed, consistent presentation — exactly what you want when you don't want the layout to shift on the recipient's screen or printer." },
          { text: "DOCX files cannot be opened on computers other than the one that created them", correct: false, explanation: "DOCX is a widely supported open standard format readable by many programs on many devices — the concern with resumes is layout consistency, not basic openability." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A video file that plays audio but shows a black screen (edge case / variation)</h3>
      <div className="prose-p">
        A video&apos;s container format can hold a video stream encoded with one codec and an audio stream encoded with another. If a device supports the audio codec used but not the specific video codec, playback can partially succeed — you hear sound with no picture, since the audio decoder does its job while the video decoder fails silently or is entirely absent. This isn&apos;t a corrupted file; it&apos;s a compatibility mismatch happening independently at the codec level, inside a container format that itself opened just fine. Installing additional codec support (or switching to a media player with broader codec coverage) resolves it without needing to touch the file at all.
      </div>
      <QuickCheck
        question="A video file plays sound but shows only a black screen. What does this most likely indicate?"
        options={[
          { text: "The file is corrupted and needs to be re-downloaded", correct: false, explanation: "A fully corrupted file typically fails to open or play at all, including audio. Partial playback points to something more specific than corruption." },
          { text: "The device can decode the file's audio codec but not its video codec, even though both streams are inside the same successfully opened container", correct: true, explanation: "Correct. Container and codec support are independent — a device can support one and not the other, producing exactly this partial-playback symptom." },
          { text: "The video was recorded without any visual content by mistake", correct: false, explanation: "This would require the person filming to have never captured video at all, which is an unlikely and unrelated explanation compared to a codec support mismatch." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Choosing a format for a company&apos;s long-term archived records (real-world / applied case)</h3>
      <p>
        Organizations planning to keep digital records readable decades from now generally favor open, well-documented formats (like plain text, PDF/A — a restricted archival variant of PDF, or open image standards) over proprietary formats tied to one company&apos;s software, precisely because an openly published specification means future software can be built to read the format even if the original program that created it disappears. This is the same reasoning national archives and libraries use when publishing format sustainability guidance: a format&apos;s long-term readability depends on its specification being public and durable, not on how popular or convenient it is today.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Same photo, three formats, three different rulebooks"
        type="comparison"
        svgSrc="/diagrams/technology-basics-common-file-formats-explained-container-vs-content.svg"
        altText="Diagram showing the same photo saved as three different file formats, each with a different internal structure and file size, illustrating that a file format is a set of rules for how content is encoded, not just a name at the end of a file"
      />
      <p>
        The same visual content produces three genuinely different files because each format applies a different rulebook to it — one preserves every pixel exactly at the cost of size, one discards some detail to shrink the file dramatically, and one keeps completely unprocessed data for maximum future editing flexibility at the cost of being the largest of the three.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Renaming a file's extension and expecting it to actually convert to the new format.", fix: "Use an actual conversion tool or 'Save As' / 'Export' feature, which re-encodes the underlying data — a rename only changes the label, not the bytes." },
          { mistake: "Assuming a file that won't open is automatically corrupted.", fix: "Check first whether the program you're using actually supports that format at all — many 'file won't open' problems are compatibility gaps, not corruption." },
          { mistake: "Treating all image formats as interchangeable since they all 'just show a picture.'", fix: "Match the format to the need: PNG for transparency and exactness, JPEG for smaller photographic files, and RAW when maximum future editing flexibility matters more than file size." },
        ]}
      />
      <MisconceptionCallout
        myth="A file extension is a reliable, enforced label — if a file is named photo.png, it must actually be a PNG."
        reality={<p>The extension is metadata the operating system trusts by convention, not something the file format enforces or verifies. A file can be renamed to any extension without altering its internal structure at all, which is exactly why some file-type detection tools instead check the actual bytes at the start of a file (a format&apos;s internal signature) rather than trusting the extension alone.</p>}
      />
      <QuickCheck
        question="Can a file genuinely be, say, JPEG data internally while carrying a .png extension in its filename?"
        options={[
          { text: "No, the operating system would automatically block a mismatched extension", correct: false, explanation: "Most operating systems don't verify that a file's extension matches its actual internal format — renaming is unrestricted by default." },
          { text: "Yes — the extension is just a label the OS trusts by convention; it doesn't change or verify the actual byte structure inside the file", correct: true, explanation: "Correct. This exact mismatch is why some tools check a file's internal signature bytes instead of relying on the extension." },
          { text: "Only on older operating systems that no longer exist", correct: false, explanation: "This mismatch is possible on essentially any operating system, old or current, because it's a property of how extensions work as unverified labels, not a legacy limitation." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "When sharing a document you don't want edited, choose PDF; when sharing one you expect the recipient to modify, choose an editable format like DOCX.",
          "If a file won't open, check whether your program actually supports that specific format before assuming the file itself is broken.",
          "Use a real 'Export' or 'Convert' feature instead of manually renaming an extension when you need to genuinely change a file's format.",
          "Read the related entry on file compression to see how formats like JPEG and ZIP shrink files without necessarily losing the information you care about.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is a file format, exactly?", answer: "A defined set of rules for how data is structured and encoded inside a file — where the header is, how content is represented, and in what order. A program must know a format's rules to read or write it correctly." },
          { question: "Is a file extension the same thing as a file format?", answer: "No. The extension is a label at the end of a filename that signals which format a file claims to be — but renaming the extension doesn't change the actual data inside, which is why a mismatched extension can make a file fail to open correctly." },
          { question: "Why won't a program open a file even though the extension matches?", answer: "The program's supported formats may not fully match what the extension implies, or the file may use a specific version, codec, or feature of that format the program doesn't support — this is a compatibility gap, not necessarily a broken file." },
          { question: "Is PDF the same as DOCX?", answer: "No. DOCX stores an editable document structure meant to be modified in a word processor. PDF locks a document's layout so it displays identically everywhere, and is deliberately harder to casually edit." },
          { question: "Can I convert a file to a different format just by renaming it?", answer: "No. Renaming only changes the label on the file; the internal data stays encoded according to the original format's rules. Actual conversion requires a program to re-encode the data using the new format's rules." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
