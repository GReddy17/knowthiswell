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
  title: "The Eye & How Vision Works: From Light to Image",
  category: "general-science-facts",
  order: 27,
  subtopic: "biology-and-human-body",
  tags: [
    "the eye",
    "vision",
    "how vision works",
    "retina",
    "optics",
    "color blindness",
    "nearsightedness",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How the cornea, lens, and retina turn light into an upside-down image, and how the brain flips and interprets it into what you actually perceive as sight.",
  summary: "Vision happens when the cornea and lens bend incoming light to focus an upside-down image on the retina, which converts that light into nerve signals the brain then interprets and flips right-side up.",
  sources: [
    { label: "NIH National Eye Institute — How the Eyes Work", url: "https://www.nei.nih.gov/learn-about-eye-health/healthy-vision/how-eyes-work" },
    { label: "NIH National Eye Institute — Color Blindness", url: "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/color-blindness" },
    { label: "NIH National Eye Institute — Refractive Errors", url: "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/refractive-errors" },
    { label: "Encyclopaedia Britannica — Human Eye", url: "https://www.britannica.com/science/human-eye" },
  ],
  seeAlso: [
    "general-science-facts/human-body-systems",
    "general-science-facts/aging-and-the-human-lifespan",
    "general-science-facts/blood-and-the-circulatory-system-in-depth",
    "general-science-facts/hormones-and-the-endocrine-system",
  ],
  glossary: [
    { term: "Cornea", definition: "The clear, curved outer layer at the front of the eye that does most of the eye's light-bending (refraction)." },
    { term: "Lens", definition: "A flexible, transparent structure behind the pupil that fine-tunes focus by changing shape, a process called accommodation." },
    { term: "Retina", definition: "The light-sensitive layer at the back of the eye containing rod and cone photoreceptor cells that convert light into nerve signals." },
    { term: "Rod cell", definition: "A retina photoreceptor cell highly sensitive to low light and motion, but unable to distinguish color." },
    { term: "Cone cell", definition: "A retina photoreceptor cell responsible for color vision and fine detail, requiring more light to function than rod cells." },
    { term: "Optic nerve", definition: "The nerve bundle that carries visual signals from the retina to the brain's visual cortex for processing." },
    { term: "Diopter", definition: "A unit of refractive (focusing) power equal to 1 divided by the focal length in meters, used to describe both the eye's natural focusing power and corrective lens prescriptions." },
    { term: "Myopia", definition: "Nearsightedness — a refractive error where the eye focuses light in front of the retina instead of directly on it, blurring distant objects." },
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
          "The cornea does roughly two-thirds of the eye's light-bending work, and the lens fine-tunes the rest — together they focus an image on the retina that is upside-down and reversed left-right.",
          "The retina's rod cells handle low-light and motion vision while cone cells handle color and fine detail, and it's the brain — not the eye itself — that flips the inverted image and constructs the sight you actually perceive.",
          "Common vision problems like nearsightedness and farsightedness happen because the eye focuses light slightly in front of or behind the retina rather than directly on it, which corrective lenses fix by adjusting where that focus point lands.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Light enters your eye through the clear <TermLink href="/general-science-facts/the-eye-and-how-vision-works">cornea</TermLink>, passes through the pupil (an opening whose size is controlled by the colored iris), and gets fine-tuned by the <TermLink href="/general-science-facts/the-eye-and-how-vision-works">lens</TermLink> before landing on the <TermLink href="/general-science-facts/the-eye-and-how-vision-works">retina</TermLink> at the back of the eye. The retina converts light into electrical signals that travel down the <TermLink href="/general-science-facts/the-eye-and-how-vision-works">optic nerve</TermLink> to the brain, which is where the signals actually get turned into the picture you consciously see. Your eyes don&apos;t &quot;see&quot; on their own any more than a camera sensor does — they capture light and pass the data along, and your brain does the real work of interpreting it.</div>}
        detailed={<div className="prose-p">The cornea provides roughly two-thirds of the eye&apos;s total refractive (focusing) power because light bends most sharply when crossing between air and a curved wet surface; the lens supplies the remaining fine adjustment and, unlike the cornea, can actively change shape — a process called accommodation — to shift focus between near and far objects. The image this system projects onto the retina is optically inverted: upside-down and mirrored left-right, a direct consequence of how a converging lens system bends light rays that cross at a focal point. The retina itself contains two types of photoreceptors: <TermLink href="/general-science-facts/the-eye-and-how-vision-works">rod cells</TermLink>, roughly 120 million per eye, tuned for motion and low-light sensitivity but colorblind; and <TermLink href="/general-science-facts/the-eye-and-how-vision-works">cone cells</TermLink>, roughly 6 million per eye, split into three types tuned to short (blue), medium (green), and long (red) wavelengths, which is what makes color vision and fine detail possible in good light. Signals leave the eye via the optic nerve and travel to the visual cortex at the back of the brain, where the raw, inverted, two-dimensional signal from each eye is flipped, combined, and reconstructed into the coherent, upright, three-dimensional sense of sight you actually experience — meaning a meaningful share of &quot;seeing&quot; happens in brain tissue, not in the eye itself.</div>}
      />
      <FootnoteAside>The point where the optic nerve exits the retina has no photoreceptor cells at all, creating a true blind spot in each eye&apos;s field of view. You don&apos;t normally notice it because your brain fills the gap in using surrounding visual information and because your two eyes&apos; blind spots don&apos;t overlap.</FootnoteAside>

      <p>
      Understanding that the retina&apos;s raw image is upside-down — and that your brain, not your eye, flips it — is the single detail that makes the rest of how vision problems and corrective lenses work click into place.
      </p>

      <QuickCheck
        question="The image projected onto your retina is upside-down and reversed left-right. Why don't you perceive the world that way?"
        options={[
          { text: "The lens flips the image back to right-side up before it reaches the retina", correct: false, explanation: "The lens doesn't correct the orientation — the image that actually lands on the retina is genuinely inverted. The correction happens later, in signal processing." },
          { text: "The brain's visual cortex processes the inverted signal from the retina and reconstructs it into the upright image you consciously perceive", correct: true, explanation: "Correct. The retina's raw image stays upside-down and mirrored; it's the brain that flips and interprets the signal into the orientation you actually experience." },
          { text: "The retina physically rotates the image using tiny muscles before sending signals to the brain", correct: false, explanation: "The retina has no image-rotating mechanism — it's a fixed light-sensing layer. The reorientation happens through neural processing in the brain, not a physical flip in the eye." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The eye&apos;s total focusing power, in diopters (baseline case)</h3>
      <div className="prose-p">
      Optometrists describe focusing power in <TermLink href="/general-science-facts/the-eye-and-how-vision-works">diopters</TermLink>, calculated as 1 divided by the focal length in meters (P = 1/f). A healthy relaxed human eye has a total refractive power of roughly 60 diopters — about 40 diopters contributed by the cornea&apos;s fixed curve and about 20 diopters contributed by the lens at rest. A lens system with 60 diopters of power has a focal length of 1/60 meters, or about 1.7 centimeters — which is close to the actual distance from the front of the eye to the retina, confirming the system is built to focus light precisely on it.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Nearsightedness and corrective lens power (edge case / variation)</h3>
      <div className="prose-p">
      In <TermLink href="/general-science-facts/the-eye-and-how-vision-works">myopia</TermLink> (nearsightedness), the eyeball is slightly too long, or the cornea slightly too curved, so the eye&apos;s roughly 60-diopter focusing system bends light too strongly for its own length — the image forms in front of the retina rather than directly on it, blurring distant objects while near objects, which need less bending to focus correctly, stay sharp. Correcting this requires a diverging lens that reduces the eye&apos;s effective focusing power, prescribed as a negative diopter value — a &quot;-3.00&quot; lens, for example, subtracts 3 diopters of power, pushing the focal point back to land exactly on the retina. Farsightedness (hyperopia) is the mirror-image problem: the eye is slightly too short, so light focuses behind the retina, and a converging, positive-diopter lens is needed to add focusing power instead.
      </div>

      <QuickCheck
        question="A nearsighted (myopic) eye focuses distant light slightly in front of the retina instead of directly on it. What kind of corrective lens fixes this, and why?"
        options={[
          { text: "A converging, positive-diopter lens, because it adds more focusing power to the eye", correct: false, explanation: "Adding more focusing power would push the focal point even farther in front of the retina, worsening a myopic eye's problem rather than fixing it." },
          { text: "A diverging, negative-diopter lens, because it reduces the eye's total focusing power and pushes the focal point back onto the retina", correct: true, explanation: "Correct. A myopic eye over-focuses light; a diverging lens subtracts some of that focusing power so the image lands correctly on the retina instead of in front of it." },
          { text: "No lens can fix this because the eyeball's physical length can't be changed by an external lens", correct: false, explanation: "A corrective lens doesn't need to change the eyeball's shape — it changes where incoming light converges before it even reaches the eye's own lens and cornea, which is enough to correct the focus point." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why reading glasses become necessary with age (real-world / applied case)</h3>
      <p>
      The lens&apos;s ability to change shape and add extra focusing power for close-up objects — accommodation — relies on a small ring of muscle and a lens that&apos;s still flexible enough to bulge when that muscle contracts. Starting in the early-to-mid 40s for most people, the lens gradually stiffens, a normal age-related change called presbyopia, and the eye loses its ability to add that extra near-focusing power even though the muscle controlling it still works normally. This is why so many people who never needed glasses for distance vision suddenly need reading glasses, typically in the +1.50 to +2.50 diopter range, specifically for close-up tasks — it&apos;s a lens-flexibility problem, not the same kind of refractive error as childhood nearsightedness or farsightedness.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Cross-section of the eye and the path of light to the retina"
        type="detail"
        svgSrc="/diagrams/general-science-facts-the-eye-and-how-vision-works-cross-section.svg"
        altText="Side cross-section of the human eye showing light rays entering through the cornea, passing through the pupil and lens, and converging to an inverted focal point on the retina at the back of the eye, with the optic nerve exiting toward the brain and the blind spot marked at the optic nerve's exit point."
      />
      <p>
      Follow a single ray of light from outside the eye: it bends sharply at the curved cornea, passes through the pupil opening, bends again at the lens for fine adjustment, and crosses over other rays before landing on the retina — that crossing-over is exactly what flips the image upside-down and left-right on the retina itself. Note where the optic nerve exits at the back of the eye: no photoreceptors exist at that exact point, which is the anatomical blind spot each eye has.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Thinking the eye works like a screen that displays a finished picture.", fix: "The retina doesn't display anything — it's a light-detecting sensor. The actual 'picture' you consciously experience is constructed by the brain's visual cortex from the signals the retina sends." },
          { mistake: "Assuming both eyes and both types of retina cells (rods and cones) do the same job equally in all lighting.", fix: "Cone cells need much more light than rod cells to function, which is why color and fine detail fade first in dim light while motion and shape detection, driven mostly by rods, remain relatively strong." },
          { mistake: "Believing nearsightedness and farsightedness are the same underlying problem with different names.", fix: "They're opposite focusing errors — nearsightedness focuses light in front of the retina (needs a negative-diopter lens), farsightedness focuses it behind the retina (needs a positive-diopter lens)." },
        ]}
      />
      <MisconceptionCallout
        myth="The image your eyes capture is right-side up, the same way you perceive the world."
        reality={<p>The optical image the eye actually projects onto the retina is inverted — upside-down and mirrored left-right — a direct, unavoidable result of how a converging lens system bends light to a focal point. The retina sends that inverted raw signal down the optic nerve exactly as captured. It&apos;s the brain&apos;s visual cortex that reprocesses and flips the signal, constructing the upright image you consciously perceive. In other words, &quot;seeing right-side up&quot; is a feat of neural processing, not of eye optics — the eye&apos;s optical image never stops being upside-down.</p>}
      />

      <QuickCheck
        question="If a correctly working eye's retina always receives an upside-down, mirrored image, why doesn't the world look upside-down to you?"
        options={[
          { text: "Because the retina automatically re-flips light before converting it into nerve signals", correct: false, explanation: "The retina converts light into signals exactly as it receives it — inverted. It doesn't perform any flipping; that happens later, during brain processing." },
          { text: "Because the brain's visual cortex processes and reconstructs the inverted retinal signal into the upright orientation you consciously experience", correct: true, explanation: "Correct. The optical image on the retina genuinely stays upside-down; the brain is responsible for flipping and assembling it into the upright perception of sight." },
          { text: "Because only the left eye's image is inverted, and the right eye's image cancels it out", correct: false, explanation: "Both eyes independently receive inverted images — there's no left/right cancellation effect. Both signals are flipped by the same brain processing before being combined." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Corrective lens power from focal length (P = 1/f)"
        fields={[
          { key: "focalLengthMeters", label: "Focal length (meters)", defaultValue: 0.5, step: 0.05 },
        ]}
        resultLabel="Lens power (diopters)"
        formula="lensPowerDiopters"
        formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Find your own blind spot: close one eye, focus on a fixed point, and slowly move a small object off to the side at arm's length until it briefly disappears.",
          "Next time you're in a dim room, notice how colors look washed out while shapes and motion are still easy to detect — that's rod cells taking over from cone cells.",
          "If you wear glasses, check the diopter (D) number on your prescription and connect it to how strongly your lenses bend light.",
          "Read the related entry on Aging & the Human Lifespan to see how presbyopia fits into the body's broader pattern of age-related change.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does the eye focus light onto the retina?", answer: "The cornea does most of the bending (roughly two-thirds of the eye's total focusing power) as light first enters, and the lens provides the remaining fine adjustment by changing shape, together focusing an image onto the retina at the back of the eye." },
          { question: "Why is the image on the retina upside down?", answer: "It's an unavoidable result of how a converging lens system bends light rays to a focal point — rays cross over each other, which flips the projected image both vertically and horizontally. The brain's visual cortex reprocesses this inverted signal into the upright image you consciously see." },
          { question: "What causes color blindness?", answer: "Most color blindness comes from a missing or altered cone cell type in the retina, most often affecting the medium (green-sensitive) or long (red-sensitive) cones. It's typically inherited in an X-linked pattern, which is why it's substantially more common in men than women." },
          { question: "Why do people need reading glasses as they get older?", answer: "The eye's lens gradually stiffens with age in a normal process called presbyopia, usually starting in the early-to-mid 40s, reducing the lens's ability to change shape for close-up focus even though distance vision may stay unaffected." },
          { question: "What is 20/20 vision?", answer: "It's a standard measurement of visual sharpness: a person with 20/20 vision can read a specific-size letter at 20 feet that a person with 'normal' vision is also expected to read clearly at 20 feet. It describes visual acuity, not a perfect or maximum possible score." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
