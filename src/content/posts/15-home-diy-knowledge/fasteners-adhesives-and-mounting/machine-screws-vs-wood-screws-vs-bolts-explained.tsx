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
  title: "Machine Screws vs. Wood Screws vs. Bolts: What Actually Differs",
  category: "home-diy-knowledge",
  order: 25,
  subtopic: "fasteners-adhesives-and-mounting",
  tags: ["machine screws", "wood screws", "bolts", "fasteners", "thread types"],
  date: "2026-09-04",
  updated: "2026-09-04",
  lastReviewed: "2026-09-04",
  excerpt: "The real difference between a wood screw, a machine screw, and a bolt is thread geometry and how each is tightened — not just size, shape, or which aisle it's sold in.",
  summary: "A wood screw has a sharp tapered point and coarse, self-cutting threads that carve their own matching groove into wood so the material itself acts as the nut, a machine screw has a blunt, uniform shank with fine, standardized threads made to turn into a pre-tapped hole or a nut, and a bolt is generally the same thread profile as a machine screw but is defined by installation method — tightened by turning a nut (or into a tapped hole) while the head is held still, rather than by turning the head itself.",
  sources: [
    { label: "ASME — B18 Standardization of Bolts, Nuts, Rivets, Screws, Washers, and Similar Fasteners", url: "https://www.asme.org/codes-standards" },
    { label: "ASTM International — Standards for Fasteners", url: "https://www.astm.org/" },
  ],
  seeAlso: [
    "home-diy-knowledge/why-screws-hold-better-than-nails",
    "home-diy-knowledge/what-torque-actually-means-for-a-wrench",
    "home-diy-knowledge/phillips-vs-flathead-screwdrivers-explained",
    "home-diy-knowledge/what-makes-super-glue-actually-bond-so-fast",
  ],
  glossary: [
    { term: "Self-tapping thread", definition: "A coarse thread profile designed to cut its own matching groove into a softer material (like wood) as it's driven, rather than requiring a pre-existing threaded hole." },
    { term: "Machine thread", definition: "A fine, standardized thread profile machined to a precise pitch, designed to mate with a matching pre-tapped hole or nut rather than cut its own path." },
    { term: "Tapped hole", definition: "A hole that has had internal threads cut into it, ready to receive a matching machine-threaded screw or bolt directly, without needing a separate nut." },
    { term: "Clamping force", definition: "The squeezing force a properly tightened bolt (or machine screw and nut) applies to draw two parts firmly together, holding them by compression as much as by the fastener's own strength." },
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
          "A wood screw has coarse, self-cutting threads and a sharp point built to carve its own groove into wood, which then acts as the 'nut.'",
          "A machine screw has fine, standardized threads meant to mate with a pre-tapped hole or a separate nut, not to cut its own path.",
          "A bolt usually shares a machine screw's thread profile, but is formally defined by installation method: tightened by turning a nut while the head stays still, rather than by turning the head itself.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">These three fasteners look similar but solve different problems. A wood screw is designed to cut its own thread into wood as it&apos;s driven — the material it&apos;s going into becomes the &quot;nut,&quot; so nothing else is needed on the other side. A machine screw is designed to go into material that&apos;s already threaded, either a pre-tapped hole in metal or plastic, or a separate nut — it doesn&apos;t cut its own path. A bolt looks a lot like a machine screw, and the two terms actually overlap quite a bit in everyday use, but a true bolt is meant to be tightened by turning a nut (with the bolt head held still), rather than by turning the head itself the way both wood screws and machine screws are typically driven.</div>}
        detailed={<div className="prose-p">The clearest way to tell these apart is thread geometry paired with installation method. A wood screw has a <TermLink href="/home-diy-knowledge/machine-screws-vs-wood-screws-vs-bolts-explained">self-tapping thread</TermLink> — coarse, widely spaced, and often paired with a sharp, tapered point — specifically shaped to cut a matching groove into wood fiber as it turns. That groove is the &quot;nut&quot; a wood screw threads into, which is why <TermLink href="/home-diy-knowledge/why-screws-hold-better-than-nails">a screw&apos;s thread creates a genuine mechanical interlock</TermLink> with the surrounding wood rather than relying on friction alone. A machine screw instead has a <TermLink href="/home-diy-knowledge/machine-screws-vs-wood-screws-vs-bolts-explained">machine thread</TermLink> — finer, more tightly and consistently spaced, and machined to a standard pitch rather than shaped for cutting. It&apos;s meant to turn into a <TermLink href="/home-diy-knowledge/machine-screws-vs-wood-screws-vs-bolts-explained">tapped hole</TermLink> that already carries a matching internal thread, or into a nut, and it&apos;s normally driven by turning the head with a screwdriver or hex driver. A bolt typically shares that same machine-thread profile, but the formal distinction — recognized in fastener industry standards — is about installation: a bolt is turned by its nut (or into a tapped hole) while the head is held stationary, producing <TermLink href="/home-diy-knowledge/machine-screws-vs-wood-screws-vs-bolts-explained">clamping force</TermLink> that squeezes two parts together, which is why bolts are the default choice for structural and high-load joints. In everyday language, &quot;bolt&quot; and &quot;machine screw&quot; get used almost interchangeably for the exact same piece of hardware depending on how it&apos;s installed in a given joint — the part itself doesn&apos;t always announce which category it belongs to. The edge case worth knowing: some fasteners deliberately combine traits, like self-tapping machine screws made to cut their own mating thread directly into sheet metal or plastic, blurring the wood-screw/machine-screw line by borrowing the wood screw&apos;s self-cutting behavior for a non-wood material.</div>}
      />
      <FootnoteAside>Checking <TermLink href="/home-diy-knowledge/what-torque-actually-means-for-a-wrench">how much torque a fastener actually needs</TermLink> matters more for bolts and machine screws than for wood screws, since bolted joints are often engineered to a specific clamping force rather than just &quot;snug.&quot;</FootnoteAside>

      <p>
        Once thread geometry and installation method are the actual dividing lines, picking the right fastener stops being about matching size and starts being about matching what the joint actually needs — cutting into wood, mating with a tapped hole, or clamping two parts together under real load.
      </p>

      <QuickCheck
        question="What's the core functional difference between a wood screw's thread and a machine screw's thread?"
        options={[
          { text: "A wood screw's coarse thread cuts its own matching groove into the material, while a machine screw's fine thread is meant to mate with an already-threaded hole or nut", correct: true, explanation: "Correct. Wood screws are self-tapping into the material itself; machine screws rely on a pre-existing matching thread rather than cutting their own." },
          { text: "Wood screws are always made of a softer metal than machine screws", correct: false, explanation: "Material hardness isn't the defining distinction — the difference is in thread geometry and what the thread is designed to engage with." },
          { text: "Machine screws are simply a longer version of a wood screw", correct: false, explanation: "Length isn't the distinguishing factor at all — the two have fundamentally different thread profiles built for different jobs." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Mounting a wooden shelf bracket (baseline case)</h3>
      <p>
        A shelf bracket needs to attach directly to solid wood framing. A wood screw is the natural choice here — its coarse, self-tapping thread cuts directly into the wood fiber, creating a mechanical interlock with no separate nut or pre-tapped hole required. Driven with a pilot hole to avoid splitting the wood, it&apos;s both the simplest and the strongest option for this exact joint.
      </p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Attaching a metal hinge into a pre-tapped hole (edge case / variation)</h3>
      <div className="prose-p">
        A metal enclosure has a hole already tapped with internal machine threads, ready to receive a fastener directly with no nut needed on the far side. A wood screw would be the wrong choice here — its coarse, self-cutting thread doesn&apos;t match the fine machine thread already cut into the hole, and forcing it in would strip that internal thread rather than seating cleanly. A machine screw, sized to the exact thread pitch of the tapped hole, threads in smoothly and seats with full engagement.
      </div>
      <QuickCheck
        question="Why would a wood screw be the wrong choice for a hole that's already been machine-tapped with internal threads?"
        options={[
          { text: "Because wood screws are always too short to reach a tapped hole's full depth", correct: false, explanation: "Length isn't the issue here — the problem is thread compatibility, not the screw's overall length." },
          { text: "Because a wood screw's coarse, self-cutting thread doesn't match the fine machine thread already cut into the hole, and would strip it instead of seating properly", correct: true, explanation: "Correct. A tapped hole already has a specific thread pitch cut into it — only a matching machine thread engages it cleanly; a self-tapping wood screw would damage it." },
          { text: "Because wood screws can only be driven into wood, and physically cannot enter a metal hole at all", correct: false, explanation: "A wood screw can physically be forced into a metal hole — the real problem is that its thread geometry doesn't match and will damage the existing threads, not that it's physically incapable of entering." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Assembling a heavy-duty structural bracket (real-world / applied case)</h3>
      <p>
        Two metal brackets need to be clamped tightly together under a real, ongoing structural load — the kind of joint where the parts must be squeezed together with a specific, reliable force rather than just held from separating. A bolt paired with a nut and washer is the standard choice: the nut is turned against the held-still bolt head, developing real clamping force between the two brackets, and that clamping force (not just the fastener&apos;s raw strength) is what keeps the joint tight and resistant to loosening under vibration or repeated load — the exact reason a torque wrench is often specified for this kind of joint rather than tightening by feel.
      </p>
      <QuickCheck
        question="Why is a bolt-and-nut combination typically chosen over a simple screw for a heavy structural joint?"
        options={[
          { text: "Because bolts are always physically thicker than any screw, regardless of size", correct: false, explanation: "Bolts and screws come in overlapping size ranges — thickness alone isn't the deciding factor for this kind of joint." },
          { text: "Because tightening a nut against a held bolt head develops real clamping force between the two parts, which resists loosening under vibration or load far better than a fastener without that clamping mechanism", correct: true, explanation: "Correct. The bolt-and-nut arrangement is specifically built to generate and maintain clamping force, which is what a demanding structural joint actually needs." },
          { text: "Because nuts make a joint permanently unable to be disassembled once tightened", correct: false, explanation: "A bolted joint with a nut is actually one of the more easily disassembled fastening methods — that isn't the reason it's chosen for structural work." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Wood screw vs. machine screw vs. bolt, side by side"
        type="comparison"
        svgSrc="/diagrams/home-diy-knowledge-machine-screws-vs-wood-screws-vs-bolts-explained-comparison.svg"
        altText="A side-by-side comparison of a wood screw, a machine screw, and a bolt. The wood screw has a sharp tapered point and coarse, widely spaced threads that cut their own matching groove directly into wood fiber, so the wood itself acts as the nut. The machine screw has a blunt, uniform-diameter shank with fine, uniform threads sized to a standard, meant to turn into a pre-tapped hole or a nut, driven by turning its head. The bolt looks similar to a machine screw but is meant to be tightened by turning a nut (or driving into a tapped hole) while the head is held still, and is generally used to clamp two parts together under high load."
      />
      <p>
        The point, the thread spacing, and what turns during installation — those three details tell you almost everything about which fastener you&apos;re actually holding.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Driving a self-tapping wood screw into a pre-tapped machine-threaded hole, stripping the existing internal thread.", fix: "Match thread type to the hole — use a machine screw or bolt sized to the exact thread pitch for any pre-tapped hole, never a self-tapping wood screw." },
          { mistake: "Using a machine screw directly into solid wood, expecting it to grip the way a wood screw would.", fix: "Choose a wood screw with a self-tapping thread and sharp point for wood, reserving machine screws for tapped holes or nutted joints." },
          { mistake: "Tightening a structural bolted joint 'by feel' instead of to a specified clamping force.", fix: "Use a torque wrench and the joint's specified torque value for bolted connections where clamping force actually matters, rather than guessing at tightness." },
        ]}
      />
      <MisconceptionCallout
        myth="'Screw' and 'bolt' are just two different names for the same kind of fastener."
        reality={<p>They often look nearly identical and the terms get used loosely in everyday speech, but the meaningful distinction (recognized in fastener industry standards) is installation method: a screw is generally turned by its head into material or a nut stays put, while a bolt is generally turned by a nut (or into a tapped hole) while its head is held still, producing clamping force between two parts. The same physical piece of hardware can sometimes be used either way depending on the joint, which is exactly why the line between the two terms feels blurry in practice — the geometry doesn&apos;t always tell you which one it is; how it&apos;s installed does.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Choose a wood screw with a self-tapping thread and sharp point for driving directly into solid wood.",
          "Choose a machine screw sized to the exact thread pitch when working with a pre-tapped hole or a separate nut.",
          "Choose a bolt-and-nut combination for structural or high-load joints that need real, reliable clamping force.",
          "Use a torque wrench and the joint's specified value for any bolted connection where clamping force genuinely matters, rather than tightening by feel.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What's the actual difference between a machine screw and a bolt?", answer: "They often share the same fine thread profile, but the meaningful difference is installation method — a bolt is tightened by turning a nut (or into a tapped hole) while the head stays still, generating clamping force, while a machine screw is typically driven by turning its own head." },
          { question: "Can you use a wood screw in metal?", answer: "Only if the metal is thin enough for the screw to self-tap its own thread, like light sheet metal — a wood screw's coarse thread will strip a pre-tapped machine-threaded hole rather than seating properly in it." },
          { question: "Why does a wood screw have a pointed tip but a machine screw usually doesn't?", answer: "A wood screw's sharp point helps it start cutting its own self-tapping thread into wood fiber. A machine screw is meant to enter an already-threaded hole or nut, so it doesn't need to cut anything, and is typically blunt." },
          { question: "Is a bolt just a bigger screw?", answer: "Not really — size isn't the defining trait. The formal distinction is about how the fastener is installed and tightened, specifically whether it's turned by its own head or by a nut while the head stays still." },
          { question: "Why do structural joints use bolts and nuts instead of screws?", answer: "Turning a nut against a held bolt head develops real clamping force that squeezes two parts firmly together, which resists loosening under vibration or repeated load far better than a fastener that isn't designed to generate that clamping force." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
