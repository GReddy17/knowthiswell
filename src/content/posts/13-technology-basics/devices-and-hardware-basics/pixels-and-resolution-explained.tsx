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
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Pixels and Resolution Explained: What 1080p vs 4K Actually Means",
  category: "technology-basics",
  order: 15,
  subtopic: "devices-and-hardware-basics",
  tags: ["pixels", "resolution", "1080p", "4K", "PPI", "display technology", "technology basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "4K has four times as many pixels as 1080p, not four times the sharpness — resolution is a grid area, and doubling each side of a grid quadruples its total pixel count.",
  summary: "A pixel is the smallest individually controllable dot of light on a digital display, and resolution is simply the count of pixels arranged across the screen's width and height — 4K packs four times as many total pixels into the same screen area as 1080p, since both dimensions double.",
  sources: [
    { label: "VESA — Video Electronics Standards Association", url: "https://www.vesa.org/" },
    { label: "Society for Information Display (SID)", url: "https://www.sid.org/" },
    { label: "Consumer Reports — Electronics & Computers", url: "https://www.consumerreports.org/electronics-computers/" },
  ],
  seeAlso: [
    "technology-basics/how-touchscreens-actually-work",
    "technology-basics/what-a-graphics-card-actually-does",
  ],
  glossary: [
    { term: "Pixel", definition: "The smallest individually controllable unit of a digital display, short for 'picture element,' typically made of red, green, and blue subpixels." },
    { term: "Resolution", definition: "The number of pixels arranged across a display's width and height, usually written as width x height (e.g. 1920x1080)." },
    { term: "Subpixel", definition: "One of the three (or sometimes more) colored light elements — typically red, green, and blue — that combine within a single pixel to produce its perceived color." },
    { term: "PPI", definition: "Pixels per inch — a measure of pixel density that accounts for both resolution and physical screen size, used to judge how sharp an image will actually look." },
    { term: "1080p", definition: "A common shorthand for Full HD resolution, 1920x1080 pixels, roughly 2.07 million pixels total." },
    { term: "4K UHD", definition: "A common shorthand for Ultra HD resolution, 3840x2160 pixels, roughly 8.3 million pixels total — exactly four times the pixel count of 1080p." },
    { term: "Upscaling", definition: "A process where a display or device artificially generates extra pixel detail to stretch lower-resolution source content to fill a higher-resolution screen, without adding genuine additional detail." },
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
      "A pixel is a single controllable dot of light, and resolution is just how many of those dots are arranged across a screen's width and height.",
      "4K has exactly four times as many total pixels as 1080p — not twice — because doubling both width and height (2x each) multiplies total area by 2x2.",
      "Resolution alone doesn't determine sharpness — pixel density (PPI), which also accounts for physical screen size, is what actually determines how sharp an image looks to the eye at a given viewing distance.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Imagine a screen as a giant mosaic made of tiny colored tiles. Each tile is a <TermLink href="/technology-basics/pixels-and-resolution-explained">pixel</TermLink>, and it can be lit up in millions of different colors by mixing red, green, and blue light. <TermLink href="/technology-basics/pixels-and-resolution-explained">Resolution</TermLink> is simply how many tiles are laid out across the width and the height of the mosaic — a &quot;1920x1080&quot; screen has 1,920 tiles across and 1,080 tiles down. More tiles in the same physical space means each individual tile is smaller, which makes the whole picture look smoother and more detailed up close.</div>}
      detailed={<div className="prose-p">Each pixel is itself built from smaller colored elements called <TermLink href="/technology-basics/pixels-and-resolution-explained">subpixels</TermLink> — almost always one red, one green, and one blue — and the pixel&apos;s overall color is produced by controlling the relative brightness of each of the three. Resolution describes total pixel count as a grid: <TermLink href="/technology-basics/pixels-and-resolution-explained">1080p</TermLink> is 1920 pixels wide by 1080 pixels tall, which multiplies out to roughly 2.07 million total pixels. <TermLink href="/technology-basics/pixels-and-resolution-explained">4K UHD</TermLink> doubles both dimensions — 3840x2160 — which multiplies out to roughly 8.3 million total pixels, exactly four times as many as 1080p, because area scales with the square of a linear dimension. Resolution by itself doesn&apos;t determine how sharp an image looks, though, because a given pixel count can be spread across a small phone screen or a huge television — the metric that actually captures perceived sharpness is <TermLink href="/technology-basics/pixels-and-resolution-explained">PPI</TermLink> (pixels per inch), which divides the diagonal pixel count by the physical diagonal screen size in inches.</div>}
      />
      <FootnoteAside>Streaming or playing 1080p content on a 4K screen doesn&apos;t add real detail — the display has to stretch the original 2.07 million pixels of source information across 8.3 million physical pixels, a process called <TermLink href="/technology-basics/pixels-and-resolution-explained">upscaling</TermLink>, which can look reasonably good with modern processing but is fundamentally filling in gaps rather than displaying genuine extra detail that was never captured in the first place.</FootnoteAside>

      <p>
      The &quot;doubling each dimension quadruples the total&quot; math is the single most common source of confusion around resolution names, and it&apos;s worth running the actual numbers rather than trusting intuition here.
      </p>

      <QuickCheck
      question="If 1080p resolution is 1920x1080 and 4K resolution is 3840x2160 (exactly double each dimension), how many times more total pixels does 4K have compared to 1080p?"
      options={[
      { text: "Twice as many, since '4K' sounds like it should be about 4 times some 1080p-related unit but the actual pixel multiple is 2x", correct: false, explanation: "Doubling both width and height doesn't just double the total pixel count — area scales with both dimensions multiplied together, so doubling each one quadruples the product." },
      { text: "Four times as many, because doubling both the width and the height multiplies the total pixel count (width times height) by 2x2", correct: true, explanation: "Correct. 1920x1080 ≈ 2.07 million pixels, and 3840x2160 ≈ 8.3 million pixels — almost exactly four times as many, since both the width and height doubled." },
      { text: "The same number, just displayed differently", correct: false, explanation: "4K genuinely contains far more individual pixels than 1080p — it isn't simply a different way of showing the same pixel grid, it's a physically denser grid with roughly four times the total pixel count." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Comparing 1080p and 4K on the same size screen (baseline case)</h3>
      <div className="prose-p">
      Take two otherwise identical 55-inch televisions, one 1080p and one 4K. The 4K screen packs roughly four times as many pixels into the exact same physical area, meaning each individual pixel is about half the width and half the height of a 1080p pixel. At a typical living-room viewing distance, this higher pixel density can make fine detail — text, distant objects, intricate textures — look noticeably crisper, especially the closer the viewer sits, since smaller pixels become individually distinguishable to the eye at a shorter distance.
      </div>
      <QuickCheck
      question="On identical 55-inch televisions, one 1080p and one 4K, the 4K screen looks noticeably crisper up close. What is the direct cause?"
      options={[
      { text: "The 4K screen uses a completely different color technology to appear sharper", correct: false, explanation: "Sharpness in this comparison comes from pixel density, not a different color technology — both screens can use the same underlying panel type." },
      { text: "The 4K screen packs roughly four times as many pixels into the same physical area, making each individual pixel about half the width and height of a 1080p pixel", correct: true, explanation: "Correct. Smaller, denser pixels become individually indistinguishable at a shorter viewing distance, which is exactly why the higher pixel density of 4K looks crisper on an identically sized screen." },
      { text: "The 4K screen is physically larger than the 1080p screen in this comparison", correct: false, explanation: "Both screens are the same 55-inch size in this scenario — the sharpness difference comes entirely from the 4K screen's higher pixel count packed into that identical area." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same resolution on very different screen sizes (edge case / variation)</h3>
      <div className="prose-p">
      A 4K resolution image looks dramatically sharper on a 6-inch smartphone screen than the identical 4K resolution does on an 85-inch television, even though the pixel count is exactly the same in both cases. This is because PPI accounts for physical size as well as pixel count — cramming 8.3 million pixels into a small phone screen produces an extremely high PPI (often 400-800+), while spreading that same 8.3 million pixels across an 85-inch television produces a much lower PPI, simply because each pixel now has to cover far more physical area. Resolution alone, without accounting for screen size, is an incomplete way to judge how sharp an image will actually look.
      </div>
      <QuickCheck
      question="A 4K smartphone screen and a 4K television have identical resolution (3840x2160), but the smartphone image looks far sharper up close. Why?"
      options={[
      { text: "Because the smartphone secretly uses more total pixels than the television", correct: false, explanation: "Both have identical resolution and therefore identical total pixel counts — the difference in perceived sharpness comes from a different factor, not from one screen having more pixels." },
      { text: "Because the same pixel count packed into a much smaller physical screen produces a much higher pixel density (PPI), making individual pixels far less distinguishable to the eye", correct: true, explanation: "Correct. PPI accounts for physical screen size along with resolution — spreading the same pixel count over a smaller screen packs pixels much closer together, producing a sharper-looking image at typical viewing distances." },
      { text: "Because smartphone screens always use better display technology than televisions", correct: false, explanation: "Display panel technology is a separate factor from pixel density — this specific sharpness difference is explained by PPI (pixel density), not by which underlying panel technology is used." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Choosing a monitor resolution for close-up desk work (real-world / applied case)</h3>
      <div className="prose-p">
      Someone shopping for a monitor to sit roughly two feet from their eyes for reading text and detailed work should weigh PPI, not just headline resolution — a 27-inch 4K monitor has meaningfully higher PPI (and sharper text) than a 32-inch monitor at the same 4K resolution, since the larger screen spreads the identical pixel count over more physical area. A very large screen at a relatively low resolution can look noticeably &quot;grainy&quot; up close even though the same panel would look perfectly sharp viewed from across a room, precisely because perceived sharpness depends on how large each individual pixel appears relative to the viewer&apos;s distance from it.
      </div>
      <QuickCheck
      question="A 27-inch and a 32-inch monitor both have 4K resolution. For close-up desk work like reading text, which one will generally look sharper, and why?"
      options={[
      { text: "The 32-inch monitor, because a bigger screen always looks sharper", correct: false, explanation: "Larger screen size alone doesn't produce sharper text — at identical resolution, a larger screen actually spreads the same pixel count over more area, which reduces pixel density rather than increasing sharpness." },
      { text: "The 27-inch monitor, because spreading the same 4K pixel count over a smaller physical area produces a higher pixel density (PPI), which looks sharper up close", correct: true, explanation: "Correct. Since both monitors have identical resolution, the smaller screen packs those pixels more densely, producing a higher PPI and sharper-looking text at typical close-up desk viewing distances." },
      { text: "They will look identically sharp, since resolution is the same on both", correct: false, explanation: "Identical resolution doesn't guarantee identical sharpness — physical screen size changes pixel density (PPI), which is what actually drives perceived sharpness up close." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="1080p vs 4K pixel grids, and one pixel's red/green/blue subpixels"
      type="comparison"
      svgSrc="/diagrams/technology-basics-pixels-and-resolution-explained-grid-comparison.svg"
      altText="Side-by-side comparison of a coarser pixel grid representing 1080p and a much finer pixel grid of the same physical area representing 4K, showing 4K packing four times as many pixels into the same space, plus a magnified view of one pixel divided into red, green, and blue subpixels."
      />
      <p>
      Notice the 4K grid isn&apos;t just &quot;a bit finer&quot; — every pixel from the 1080p grid is effectively replaced by four smaller pixels in the same space, which is exactly where the 4x total pixel count comes from.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming 4K is exactly twice as sharp or twice the resolution of 1080p.", fix: "4K doubles both the width and height compared to 1080p, which multiplies total pixel count by four, not two — '4K' refers loosely to the roughly 4,000-pixel horizontal count, not a '4x some 1080p unit' multiplier." },
      { mistake: "Judging sharpness from resolution alone, ignoring screen size.", fix: "Use PPI (pixels per inch) to compare sharpness fairly across different screen sizes — the same resolution looks dramatically different on a phone versus a television." },
      { mistake: "Expecting upscaled lower-resolution content to look as sharp as native content of the display's resolution.", fix: "Upscaling stretches existing pixel information to fill more physical pixels — it can look reasonably good with strong processing, but it isn't the same as content that was actually captured at the display's full resolution." },
      ]}
      />
      <MisconceptionCallout
      myth="A higher-resolution screen always looks sharper, regardless of its physical size or how far away you're sitting."
      reality={<p>Perceived sharpness depends on pixel density (PPI) at a given viewing distance, not resolution alone. An enormous 4K television viewed from across a large room can look just as sharp — sometimes sharper in practical terms — as the identical resolution stretched across a much bigger screen and viewed from close up, because the eye&apos;s ability to distinguish individual pixels depends on how large each pixel appears from where you&apos;re sitting, not just how many pixels exist in total.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Calculate pixel density (PPI)"
      description="Enter a screen's resolution and diagonal size to see its pixel density — a more reliable sharpness comparison than resolution alone."
      fields={[
      { key: "widthPx", label: "Horizontal resolution (px)", defaultValue: 3840 },
      { key: "heightPx", label: "Vertical resolution (px)", defaultValue: 2160 },
      { key: "diagonalInches", label: "Screen diagonal size (inches)", defaultValue: 27 },
      ]}
      resultLabel="Pixel density (PPI)"
      formula="screenPpiFromResolution"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "When comparing screens, check PPI rather than raw resolution alone, especially when the screens are different physical sizes.",
      "For close-up work (monitors, phones), prioritize higher PPI; for screens viewed from a distance (living-room TVs), moderate PPI is often plenty.",
      "Don't expect upscaled lower-resolution content to look identical to native content at the display's full resolution.",
      "Remember '4K' means roughly four times the pixels of 1080p, not twice — useful for setting realistic expectations about the visible difference.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What does 1080p vs 4K actually mean?", answer: "1080p refers to a resolution of 1920x1080 pixels (about 2.07 million total), while 4K UHD refers to 3840x2160 pixels (about 8.3 million total) — 4K has exactly four times as many total pixels as 1080p, since both dimensions doubled." },
      { question: "Is 4K four times sharper than 1080p?", answer: "Not exactly — 4K has four times the total pixel count, but perceived sharpness also depends on screen size and viewing distance. On a small screen or viewed from far away, the difference between 1080p and 4K can be hard to notice at all." },
      { question: "What is a pixel made of?", answer: "A pixel is typically made of three subpixels — one red, one green, and one blue — and the pixel's overall visible color is produced by controlling the individual brightness of each subpixel." },
      { question: "Is PPI the same thing as resolution?", answer: "No. Resolution is the total pixel count (width x height); PPI (pixels per inch) also factors in the physical screen size, which is why PPI is a more accurate way to compare how sharp two different-sized screens will actually look." },
      { question: "Does upscaling make 1080p content look like real 4K?", answer: "Not entirely. Upscaling stretches the original lower-resolution pixel data to fill a 4K screen's pixel count, and modern processing can make this look quite good, but it isn't adding genuine extra detail that was never captured in the source content." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
