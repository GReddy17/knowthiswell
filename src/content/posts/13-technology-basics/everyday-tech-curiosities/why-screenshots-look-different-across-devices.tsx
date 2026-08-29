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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Why Screenshots Look Different Across Devices",
  category: "technology-basics",
  order: 79,
  subtopic: "everyday-tech-curiosities",
  tags: ["screenshots", "pixel density", "resolution", "technology basics", "everyday tech"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "A screenshot captures a device's actual pixel grid — and since pixel density, resolution, and screen shape all vary between devices, the same content rarely produces an identical image.",
  summary: "A screenshot isn't a universal, pixel-perfect snapshot — it's a capture of one specific device's own pixel grid, and because pixel density, native resolution, and screen aspect ratio all vary between devices, the same on-screen content can produce screenshots that differ in sharpness, raw dimensions, and even how much content is visible at once.",
  sources: [
    { label: "MDN Web Docs — Window.devicePixelRatio", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio" },
    { label: "W3C — CSS Values and Units Module", url: "https://www.w3.org/TR/css-values-4/" },
  ],
  seeAlso: [
    "technology-basics/why-videos-buffer",
    "technology-basics/why-your-phone-gets-hot",
    "technology-basics/how-your-phone-knows-which-way-is-up",
  ],
  glossary: [
    { term: "Pixel density (PPI)", definition: "The number of physical pixels packed into each inch of a screen, commonly measured in pixels per inch — a higher number means a finer, sharper pixel grid for the same physical screen size." },
    { term: "Device-independent pixel", definition: "A logical unit of screen measurement used by an operating system or app's layout, which maps to a different number of actual physical pixels depending on a device's pixel density." },
    { term: "Scale factor", definition: "The ratio between a device's physical pixel grid and the logical layout units its interface is designed around, used to render sharp images and text consistently across screens of different pixel densities." },
    { term: "Native resolution", definition: "The actual number of physical pixels a screen has, expressed as width by height, which a screenshot directly captures." },
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
          "A screenshot captures a device's own native pixel grid, and since pixel density and resolution vary between devices, the same content produces images with different raw dimensions and sharpness.",
          "Devices with different screen aspect ratios can capture different amounts of visible content in a single screenshot, not just different sharpness, purely because more or less of a page fits in the visible area.",
          "Messaging and social platforms often recompress or resize a shared screenshot further, adding an extra layer of visual difference on top of whatever the original device already captured.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of a screen as a grid of tiny tiles, and a screenshot as a photo of exactly that grid. Two screens the same physical size can still be built from a different number of tiles — one packed with more, smaller tiles for a sharper picture, one with fewer, larger tiles. A screenshot taken on the finer-tiled screen captures more raw detail for the same content than one taken on the coarser-tiled screen, even though both are showing &quot;the same&quot; app or webpage. That&apos;s the whole reason a screenshot rarely looks pixel-identical when it moves from one device to another.</div>}
        detailed={<div className="prose-p">This is an <strong>abstraction layer</strong> problem: apps and operating systems design their interfaces around logical layout units — <TermLink href="/technology-basics/why-screenshots-look-different-across-devices">device-independent pixels</TermLink>, sometimes called points or dp — rather than raw physical pixels, precisely so the same interface can adapt cleanly across screens of very different <TermLink href="/technology-basics/why-screenshots-look-different-across-devices">pixel density (PPI)</TermLink>. A <TermLink href="/technology-basics/why-screenshots-look-different-across-devices">scale factor</TermLink> converts those logical units into however many actual physical pixels a specific screen has at its <TermLink href="/technology-basics/why-screenshots-look-different-across-devices">native resolution</TermLink>. A screenshot captures the result of that conversion, not the logical layout itself, so a higher-density screen produces more raw pixels — usually sharper detail — for identical on-screen content than a lower-density one. An edge case worth knowing: screen aspect ratio differences (taller vs. squarer screens, or screens with notches and rounded-corner safe areas) mean a screenshot can capture a genuinely different amount of visible content, not just a different sharpness, since more or less of a scrollable page fits into a taller viewport before the user has to scroll.</div>}
      />
      <FootnoteAside>An extra layer of difference gets added the moment a screenshot is shared through a messaging app or social platform, since most of these automatically recompress or downscale images to save bandwidth — meaning the version a recipient sees may not even match the exact file the original device produced.</FootnoteAside>
      <p>
        The clearest way to see the pixel-density effect directly is to compare the raw output of two screens with identical physical size but different native resolutions.
      </p>
      <QuickCheck
        question="Two phone screens are the same physical size, but one has twice the native pixel resolution of the other. What's the most accurate expectation for screenshots of the same webpage taken on each?"
        options={[
          { text: "Both screenshots will be pixel-for-pixel identical, since the physical screen size is the same", correct: false, explanation: "A screenshot captures the actual pixel grid of the device it was taken on, not the physical screen size — different native resolutions produce different raw pixel dimensions even at the same physical size." },
          { text: "The higher-resolution screen's screenshot will generally have more raw pixels and sharper detail for the same content", correct: true, explanation: "Correct. A higher-density pixel grid packs more actual pixels into the same physical area, which a screenshot directly reflects as more detail for identical content." },
          { text: "The lower-resolution screen's screenshot will always be a larger file size", correct: false, explanation: "More pixels generally means more raw data to store, so the higher-resolution screenshot is typically the larger file, not the lower-resolution one." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Same webpage, two different pixel densities (baseline case)</h3>
      <div className="prose-p">
        Taking a screenshot of the same webpage on two devices with the same physical screen size but different native resolutions produces two images with different raw pixel dimensions. The higher-density device captures more actual pixels for the same visible content, typically resulting in a sharper-looking screenshot at a larger file size, while the app&apos;s own layout — its logical, device-independent design — looks essentially identical to a person viewing either screen directly, since the scale factor is what handles the conversion between the two.
      </div>
      <QuickCheck
        question="Why can two devices show what looks like the identical app layout to the eye, yet produce screenshots with clearly different raw pixel dimensions?"
        options={[
          { text: "Because apps are designed around logical, device-independent layout units, and each device's own scale factor converts those into a different number of actual physical pixels", correct: true, explanation: "Correct. The interface layout stays consistent in logical units, but the screenshot captures the physical pixel result of that layout, which differs by each device's own resolution and pixel density." },
          { text: "Because one of the two devices is displaying a completely different version of the webpage", correct: false, explanation: "Both devices can be showing the exact same page content — the pixel-dimension difference comes from how that identical content maps onto each screen's own physical pixel grid, not from different content being served." },
          { text: "Because screenshots always randomly vary in size regardless of the device", correct: false, explanation: "The dimension difference isn't random — it's directly tied to each device's specific native resolution and pixel density." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Different screen aspect ratios capturing different amounts of content (edge case / variation)</h3>
      <div className="prose-p">
        Scrolled to the exact same position on the exact same webpage, a device with a taller screen aspect ratio can capture noticeably more vertical content in a single screenshot than a device with a squarer aspect ratio, simply because more of the page fits into the taller visible viewport before the user needs to scroll further. This isn&apos;t a sharpness or resolution difference at all — it&apos;s a difference in how much of the underlying page is even visible to capture, which is why two people comparing &quot;the same&quot; screenshot from two different phones sometimes see genuinely different amounts of content, not just a different-looking version of the same content.
      </div>
      <QuickCheck
        question="Why might two people scrolled to the same position on the same webpage end up with screenshots showing different amounts of visible content?"
        options={[
          { text: "Their devices likely have different screen aspect ratios, so different amounts of the page fit into each one's visible viewport", correct: true, explanation: "Correct. A taller aspect ratio fits more vertical content into view at once than a squarer one, independent of resolution or pixel density." },
          { text: "One of the screenshots must have been edited or cropped afterward", correct: false, explanation: "No editing is required to explain this — differing screen aspect ratios alone naturally capture different amounts of a scrollable page in a single screenshot." },
          { text: "This only happens if the two devices are running different apps", correct: false, explanation: "The same app or the same webpage viewed in a browser on two devices with different aspect ratios can still show differing amounts of visible content, without any difference in the app itself." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A screenshot losing quality after being shared (real-world / applied case)</h3>
      <p>
        A screenshot that looks sharp on the device that took it can look noticeably softer by the time a friend views it after it&apos;s been sent through a messaging app or posted to a social platform, because many of these platforms automatically recompress or resize images to reduce file size and bandwidth use before delivering them. This additional compression step happens after the original device-level pixel-density differences already discussed — meaning a screenshot&apos;s final appearance for a viewer often reflects two separate layers of change: the originating device&apos;s own resolution, and whatever processing the sharing platform applied on top of it.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Same content, two different pixel densities"
        type="comparison"
        svgSrc="/diagrams/technology-basics-why-screenshots-look-different-across-devices-pixel-density.svg"
        altText="Diagram comparing two phone screens of the same physical size: one with a lower-resolution, coarser pixel grid producing a larger, blockier screenshot file, and one with a higher-resolution, finer pixel grid producing a smaller-looking but sharper screenshot of the same on-screen content, both scaled to fit their own screen at a different pixel density."
      />
      <p>
        Same physical screen size, same on-screen content, but a different number of actual pixels underneath — that gap is what a screenshot always faithfully reproduces.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a screenshot is a universal, pixel-identical image no matter where it's viewed.", fix: "A screenshot captures one specific device's own pixel grid at the moment it was taken, and platform recompression can change it further once shared." },
          { mistake: "Believing a higher-resolution device always produces a 'bigger-looking' screenshot of the same content.", fix: "Higher pixel density usually means a sharper, more detailed capture of the same logical content, not a larger-appearing one, since the app's layout scales to fit each device's own screen." },
          { mistake: "Assuming two screenshots of 'the same app screen' from two different phones must show identical content.", fix: "Differing screen aspect ratios can mean different amounts of a scrollable page are actually visible and captured, even at the same scroll position." },
          { mistake: "Comparing raw screenshot file sizes across devices as a measure of image quality.", fix: "File size differences mostly reflect resolution, pixel density, and compression settings, not a meaningful quality comparison on their own." },
        ]}
      />
      <MisconceptionCallout
        myth="A screenshot is a pixel-perfect, universal image that looks identical everywhere it's viewed."
        reality={<p>A screenshot captures the specific device&apos;s own native pixel grid at the moment it&apos;s taken. Since pixel density, resolution, and screen aspect ratio all vary between devices, the same underlying content can produce screenshots with different sharpness, raw dimensions, and even different amounts of visible content. Sharing a screenshot through a messaging or social platform can add a further layer of change, since many of these automatically recompress or resize images before delivery.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Estimate a screen's pixel density"
        description="Pixel density is calculated from a screen's native pixel resolution and its physical diagonal size — the same underlying math that explains why two screens of the same physical size can still produce very different-looking screenshots."
        fields={[
          { key: "widthPx", label: "Screen width (pixels)", defaultValue: 1170 },
          { key: "heightPx", label: "Screen height (pixels)", defaultValue: 2532 },
          { key: "diagonalInches", label: "Screen diagonal size (inches)", defaultValue: 6.1 },
        ]}
        resultLabel="Estimated pixel density (PPI)"
        formula="screenPpiFromResolution"
        formatResult="number"
        disclaimer="This is a simplified pixels-per-inch calculation based on native resolution and diagonal size. It illustrates the underlying pixel-density math, not a manufacturer's official specification for any particular device."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "When sharing 'how to' screenshots for a broad audience, expect layout details to shift slightly on different-density or different-aspect-ratio screens.",
          "Expect some quality loss any time a screenshot travels through a messaging or social platform, separate from the original device's own capture quality.",
          "Don't assume you can align screenshots pixel-for-pixel between two different devices.",
          "When comparing display sharpness between two phones using screenshots, compare based on pixel density, not raw file size.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why does my screenshot look different on another phone?", answer: "Each device has its own native pixel resolution and pixel density, so a screenshot captures a different actual pixel grid on each one, even for identical on-screen content." },
          { question: "Why do screenshots look blurry after sending them?", answer: "Many messaging and social platforms automatically recompress or resize images to save bandwidth before delivering them, adding an extra layer of quality loss beyond the original screenshot." },
          { question: "Why is my screenshot a different size than someone else's?", answer: "Screenshot dimensions directly reflect the taking device's native screen resolution, which varies between devices, so the same visible content produces images of different pixel dimensions and file sizes." },
          { question: "Does screen resolution affect screenshot quality?", answer: "Yes. A higher native resolution generally produces a sharper, more detailed screenshot for the same on-screen content, since more actual pixels are captured." },
          { question: "Why does a screenshot not show the same amount of the page on different phones?", answer: "Differing screen aspect ratios mean different amounts of a scrollable page fit into each device's visible viewport at once, independent of resolution or sharpness." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
