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
  title: "Screen Size & Resolution Units Explained",
  category: "units-measurement-conversions",
  order: 49,
  subtopic: "data-numbers-and-everyday-conversions",
  tags: [
    "screen size",
    "resolution",
    "PPI",
    "pixel density",
    "diagonal measurement",
  ],
  date: "2026-08-21",
  updated: "2026-08-21",
  lastReviewed: "2026-08-21",
  excerpt: "A '27-inch' monitor and a '6.1-inch' phone are both measured the same way — corner to corner, diagonally — but that single number says nothing about how sharp the image actually looks.",
  summary: "Screen 'size' is conventionally a diagonal length measurement in inches, while sharpness is a separate quantity, pixels per inch (PPI), calculated from the screen's pixel resolution and its physical diagonal size — two different units answering two different questions that are easy to conflate.",
  sources: [
    { label: "NIST — Physical Measurement Laboratory", url: "https://www.nist.gov/pml" },
    { label: "Institute of Electrical and Electronics Engineers (IEEE)", url: "https://www.ieee.org" },
  ],
  seeAlso: [
    "units-measurement-conversions/common-unit-conversion-mistakes-and-how-to-avoid-them",
    "units-measurement-conversions/digital-storage-units-bytes-to-terabytes",
  ],
  glossary: [
    {"term":"Diagonal measurement","definition":"The conventional way screen 'size' is measured — the straight-line distance from one corner of the visible display to the opposite corner, in inches."},
    {"term":"Resolution","definition":"The number of individual pixels a screen displays, expressed as width x height (e.g. 1920 x 1080) — a count of pixels, not a physical size."},
    {"term":"Pixels per inch (PPI)","definition":"A measure of pixel density — how many pixels are packed into each inch of the screen's diagonal — calculated from resolution and physical diagonal size together, and the real driver of how sharp an image looks."},
    {"term":"Aspect ratio (screen)","definition":"The ratio between a screen's width and height (e.g. 16:9) — needed alongside the diagonal measurement to fully determine a screen's actual width and height in inches."},
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
      "Screen 'size' (a '27-inch monitor,' a '6.1-inch phone') is conventionally the diagonal distance across the visible display, corner to corner, in inches — not the width or the height alone.",
      "Resolution (like 1920 x 1080) is a separate quantity entirely: a count of pixels, with no built-in physical size until you also know the screen's actual diagonal measurement.",
      "Sharpness is captured by pixels per inch (PPI), calculated from resolution and diagonal size together — which is why two screens can share the same diagonal 'size' but look meaningfully different in sharpness, or share the same resolution but differ in PPI because one is physically larger.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A screen&apos;s advertised &quot;size&quot; is its <TermLink href="/units-measurement-conversions/screen-size-and-resolution-units-explained">diagonal measurement</TermLink> corner to corner, in inches. Its <TermLink href="/units-measurement-conversions/screen-size-and-resolution-units-explained">resolution</TermLink> (like 1920×1080) is a completely separate number — how many pixels are packed in, not how big the screen physically is.</div>}
      detailed={<div className="prose-p">These two numbers answer two different questions, and combining them is what produces a third, more useful number: <TermLink href="/units-measurement-conversions/screen-size-and-resolution-units-explained">pixels per inch (PPI)</TermLink>. PPI is calculated from a screen&apos;s full pixel count (found via the Pythagorean theorem from width and height in pixels) divided by its physical diagonal size in inches. A larger PPI means more pixels are packed into each inch of physical screen, which generally means a sharper, more detailed image — assuming a normal viewing distance. This is why a smartphone (small physical diagonal, high resolution) often has a dramatically higher PPI than a large television with the exact same pixel resolution — the phone is cramming the same pixel count into a much smaller physical space. Knowing a screen&apos;s inch size alone tells you almost nothing about sharpness; knowing its resolution alone tells you almost nothing about sharpness either — PPI needs both figures together, plus the screen&apos;s <TermLink href="/units-measurement-conversions/screen-size-and-resolution-units-explained">aspect ratio</TermLink> to fully reconstruct its actual width and height in inches from the diagonal alone.</div>}
      />
      <FootnoteAside>Two screens with identical diagonal size but different aspect ratios (say, 16:9 versus 16:10) have different actual widths and heights despite sharing the same diagonal number — the diagonal alone never fully determines a screen&apos;s shape.</FootnoteAside>

      <p>
      Because size, resolution, and sharpness are three separate quantities, comparing screens on just one of them — the most common shopping mistake — can be actively misleading.
      </p>

      <QuickCheck
      question="A shopper compares two monitors: Monitor A is 27 inches with a 1920x1080 resolution; Monitor B is 24 inches with the same 1920x1080 resolution. Which one will generally look sharper?"
      options={[
      { text: "Monitor A, the larger screen, since bigger screens are generally sharper", correct: false, explanation: "Larger physical size with the same pixel count actually means the pixels are spread thinner, which typically makes the image look less sharp, not more." },
      { text: "Monitor B, the smaller screen, because the same 1920x1080 pixel count is packed into a smaller physical diagonal, giving it a higher pixels-per-inch density", correct: true, explanation: "Correct. Identical resolution on a smaller screen means a higher PPI — more pixels per physical inch — which generally produces a visibly sharper image, all else being equal." },
      { text: "They'll look identically sharp, since sharpness is determined by resolution alone", correct: false, explanation: "Resolution alone doesn't determine sharpness — the same pixel count spread across a larger or smaller physical screen produces a different pixel density (PPI), which is what actually drives perceived sharpness." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Calculating PPI for a laptop screen (baseline case)</h3>
      <div className="prose-p">
      A 13-inch laptop screen with a resolution of 2560×1600 pixels. First find the total diagonal pixel count using the Pythagorean theorem: √(2560² + 1600²) = √(6,553,600 + 2,560,000) = √9,113,600 ≈ 3,019 pixels diagonally. Then divide by the diagonal screen size: 3,019 ÷ 13 ≈ 232 PPI — a genuinely sharp display by typical laptop standards.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The same resolution on a much larger television (edge case / variation)</h3>
      <div className="prose-p">
      A 65-inch television with the same-family resolution, 3840×2160 (4K): diagonal pixel count = √(3840² + 2160²) = √(14,745,600 + 4,665,600) = √19,411,200 ≈ 4,406 pixels. PPI = 4,406 ÷ 65 ≈ 68 PPI — dramatically lower than the laptop&apos;s 232 PPI despite the TV having a much higher raw pixel count (3840×2160 vs 2560×1600). This isn&apos;t a contradiction: PPI measures density, and the TV&apos;s much larger physical screen spreads even a higher pixel count much more thinly. It&apos;s also why a 65-inch 4K TV still looks sharp in practice — televisions are viewed from much farther away than laptops, so the eye can&apos;t resolve individual pixels even at a lower PPI.
      </div>

      <QuickCheck
      question="Why doesn't the television in Example 2 look noticeably blurry to viewers, despite its much lower PPI than the laptop?"
      options={[
      { text: "PPI calculations don't apply to televisions, only to computer monitors and phones", correct: false, explanation: "PPI is a general measure that applies to any pixel-based display, televisions included — the calculation method doesn't change based on device type." },
      { text: "Viewing distance matters — televisions are typically watched from several feet away, while laptops and phones are viewed much closer, and the eye's ability to resolve individual pixels depends on both PPI and viewing distance together, not PPI alone", correct: true, explanation: "Correct. A lower PPI at a longer viewing distance can look just as sharp to the eye as a higher PPI viewed up close — this is why PPI comparisons are most meaningful between devices used at similar viewing distances." },
      { text: "Televisions use a fundamentally different pixel technology that doesn't require as many pixels per inch to look sharp", correct: false, explanation: "The underlying pixel technology isn't the deciding factor here — viewing distance is what primarily explains why a lower-PPI television can still look sharp to the eye." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Comparing two smartphones by size alone, and why that&apos;s misleading (real-world / applied case)</h3>
      <div className="prose-p">
      Two phones are both advertised as &quot;6.1-inch&quot; displays. Phone A has a resolution of 2532×1170 (PPI ≈ 460); Phone B has a resolution of 1792×828 (PPI ≈ 326). Despite sharing the identical advertised diagonal size, Phone A packs noticeably more pixels into that same physical space, producing a visibly sharper display — text and images render with more fine detail. A shopper comparing only the &quot;6.1-inch&quot; headline figure between the two phones would have no way to know this meaningful difference exists; only checking resolution (and calculating or looking up PPI) reveals it.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Screen 'size' (diagonal) vs. sharpness (pixels per inch) — two different measurements"
      type="detail"
      svgSrc="/diagrams/units-measurement-conversions-screen-size-and-resolution-units-explained-diagonal-ppi.svg"
      altText="A rectangle representing a screen with a diagonal line drawn corner to corner labeled as the measured screen size, alongside a small zoomed-in grid of pixels labeled pixels per inch, showing that screen size and sharpness are two separate measurements."
      />
      <p>
      The diagonal line answers &quot;how big&quot; the screen is; the pixel grid answers &quot;how sharp&quot; it looks — two genuinely independent questions that a single advertised &quot;size&quot; number can never answer on its own.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Assuming a larger advertised screen 'size' (diagonal inches) automatically means a sharper display.", fix: "Check resolution and calculate (or look up) PPI separately — a larger diagonal with the same resolution actually means a lower pixel density, not a sharper image." },
      { mistake: "Comparing two screens' sharpness using resolution alone, without accounting for their physical size.", fix: "Remember sharpness (PPI) requires both resolution and physical diagonal size together — resolution by itself doesn't determine how sharp an image looks." },
      { mistake: "Treating a screen's diagonal measurement as if it directly tells you the width or height.", fix: "Use the diagonal together with the aspect ratio to calculate actual width and height — the diagonal alone doesn't fully determine a screen's shape." },
      ]}
      />
      <MisconceptionCallout
      myth="A screen's advertised 'size' in inches tells you roughly how sharp or detailed the image will look."
      reality={<p>Screen size (diagonal inches) and image sharpness (pixels per inch) are independent measurements. A larger screen with the same resolution as a smaller one has a lower pixel density and generally looks less sharp up close, not more. Comparing screens on sharpness requires checking resolution and physical size together, not the advertised diagonal size alone.</p>}
      />

      <QuickCheck
      question="Why is the diagonal pixel count in the PPI formula calculated using the Pythagorean theorem (√(width² + height²)) rather than just adding width and height pixels together?"
      options={[
      { text: "Because the diagonal of a rectangle is the hypotenuse of a right triangle formed by its width and height, and the Pythagorean theorem is the correct way to calculate a hypotenuse's length — the same math used elsewhere for any right-triangle distance problem", correct: true, explanation: "Correct. A screen's width and height pixels form the two legs of a right triangle, and the diagonal is the hypotenuse — the Pythagorean theorem is the mathematically correct tool for that calculation, not a simplification." },
      { text: "Adding width and height pixels directly would give the exact same result, so the Pythagorean theorem is just a more complicated way to get there", correct: false, explanation: "Simply adding width and height pixels gives a meaningfully larger (and incorrect) number than the true diagonal distance — the Pythagorean theorem is required, not optional, for this calculation." },
      { text: "The Pythagorean theorem is used purely as an industry convention with no real geometric justification", correct: false, explanation: "There's a direct geometric justification: the screen's diagonal genuinely is the hypotenuse of a right triangle formed by its width and height, which is exactly the situation the Pythagorean theorem is designed to solve." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Calculate pixels per inch (PPI) from resolution and screen size"
      fields={[
      { key: "widthPx", label: "Horizontal resolution (pixels)", defaultValue: 1920 },
      { key: "heightPx", label: "Vertical resolution (pixels)", defaultValue: 1080 },
      { key: "diagonalInches", label: "Screen diagonal (inches)", defaultValue: 24 },
      ]}
      resultLabel="Pixels per inch (PPI)"
      formula="screenPpiFromResolution"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "When comparing screens, check resolution and physical size together, not the advertised diagonal size alone.",
      "Use the calculator above to compute PPI for any two screens you're comparing.",
      "Remember viewing distance affects perceived sharpness as much as PPI — a lower-PPI television viewed from across a room can look just as sharp as a higher-PPI laptop viewed up close.",
      "Check a screen's aspect ratio alongside its diagonal size if you need to know its actual width and height.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How is screen size measured?", answer: "Diagonally — corner to corner across the visible display area, in inches. This is a length measurement and says nothing on its own about resolution or sharpness." },
      { question: "What does PPI mean for screens?", answer: "Pixels per inch — how densely packed a screen's pixels are, calculated from its resolution (pixel count) and its physical diagonal size together. A higher PPI generally means a sharper-looking image." },
      { question: "Does a bigger screen mean a sharper picture?", answer: "Not by itself, and often the opposite. If two screens share the same resolution, the smaller one packs those pixels more densely (higher PPI) and typically looks sharper up close than the larger one." },
      { question: "How do I calculate my screen's PPI?", answer: "Find the diagonal pixel count using the Pythagorean theorem (square root of width-in-pixels squared plus height-in-pixels squared), then divide by the screen's diagonal size in inches." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
