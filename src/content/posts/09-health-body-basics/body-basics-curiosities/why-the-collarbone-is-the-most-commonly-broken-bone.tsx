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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "Why the Collarbone Is the Most Commonly Broken Bone",
  category: "health-body-basics",
  order: 51,
  subtopic: "body-basics-curiosities",
  pillar: true,
  videoQueue: true,
  tags: ["clavicle", "collarbone", "broken bones", "sports injuries", "anatomy"],
  date: "2026-09-22",
  updated: "2026-09-22",
  lastReviewed: "2026-09-22",
  excerpt: "The collarbone isn't especially fragile — it breaks so often because of where it sits and the shape it's built in, not because it's a weak bone.",
  summary: "The clavicle (collarbone) is the bone most often broken in falls and sports collisions, not because it's structurally weak, but because it's the only bony strut connecting the arm to the torso, sits with little muscle protection just under the skin, and has a thin, curved midpoint that concentrates the force from a fall onto an outstretched hand or a direct hit to the shoulder.",
  sources: [
    { label: "OrthoInfo (American Academy of Orthopaedic Surgeons) — Clavicle Fracture", url: "https://orthoinfo.aaos.org/en/diseases--conditions/clavicle-fracture-broken-collarbone/" },
    { label: "National Library of Medicine (NIH) — Clavicle Fractures", url: "https://www.ncbi.nlm.nih.gov/books/NBK507892/" },
  ],
  seeAlso: [
    "health-body-basics/what-to-do-for-a-sprain-the-rice-method",
    "general-science-facts/human-body-systems",
    "general-science-facts/muscles-bones-and-movement",
  ],
  glossary: [
    { term: "Clavicle", definition: "The long, S-shaped bone connecting the shoulder blade to the breastbone — the collarbone." },
    { term: "FOOSH", definition: "Medical shorthand for \"fall onto outstretched hand,\" a common mechanism of injury for wrist, arm, and collarbone fractures." },
    { term: "Cortical bone", definition: "The dense, hard outer layer of bone that gives it most of its strength; thinner cortical bone at a given point makes that spot more likely to fracture." },
    { term: "Periosteum", definition: "A tough membrane covering bone, thicker in children, which helps hold fracture pieces in place and speeds healing." },
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
          "The clavicle is the only bone connecting the arm to the rest of the skeleton, sits just under the skin with little muscle padding, and takes force directly from falls or shoulder hits.",
          "About 80% of collarbone fractures happen at the middle third of the bone — the thinnest, most curved section, where the S-shape transitions and cortical bone is at its weakest.",
          "Most collarbone fractures heal without surgery in 6-12 weeks using a sling, since displacement in the middle third is usually mild enough that surgical hardware isn't needed.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/health-body-basics/why-the-collarbone-is-the-most-commonly-broken-bone">clavicle</TermLink> breaks often not because it&apos;s a weak bone, but because of the job it does and where it sits. It&apos;s the only bony connection between your arm and the rest of your skeleton, running just under the skin with almost no muscle cushioning it. When you fall and instinctively put a hand out to catch yourself, or take a direct hit to the shoulder in sports, that force travels straight up the arm and into the collarbone — which usually gives out at its thinnest point, right in the middle.</div>}
        detailed={<div className="prose-p">The clavicle&apos;s S-shaped double curve is what lets it hold the shoulder out to the side while still transmitting some load between the arm and the torso, but that curve creates a structural weak point where the two curves meet, near the middle third of the bone — the spot with the smallest cross-sectional area and thinnest <TermLink href="/health-body-basics/why-the-collarbone-is-the-most-commonly-broken-bone">cortical bone</TermLink>. Roughly 80% of clavicle fractures occur here. Compare this to a bone like the femur, which is surrounded by thick layers of muscle that absorb and distribute impact before it ever reaches the bone itself — the clavicle has essentially none of that protection, sitting almost entirely subcutaneous (just under the skin) along its length. The most common mechanism is <TermLink href="/health-body-basics/why-the-collarbone-is-the-most-commonly-broken-bone">FOOSH</TermLink> (a fall onto an outstretched hand), which transmits force up through the arm to the shoulder girdle; a direct blow to the point of the shoulder, common in contact sports and tackles, is the second major cause.</div>}
      />
      <FootnoteAside>The clavicle is also the last bone in the human body to finish growing — its growth plate typically doesn&apos;t fully fuse until somewhere between ages 21 and 25, later than any other bone.</FootnoteAside>

      <p>
      That combination of exposure and a built-in thin point explains why the collarbone shows up so often in injury reports — from a toddler&apos;s tumble to a professional athlete&apos;s shoulder-first tackle.
      </p>

      <QuickCheck
        question="Why does the middle third of the clavicle break more often than the ends near the shoulder or breastbone?"
        options={[
          { text: "The middle section is made of a different, weaker type of bone tissue", correct: false, explanation: "The clavicle is made of the same type of bone throughout — the difference is shape and thickness, not tissue composition." },
          { text: "The S-curve's transition point in the middle has the thinnest cross-section and thinnest cortical bone, concentrating stress there", correct: true, explanation: "Correct. The geometry of the double curve means the middle third is structurally the thinnest and weakest point, which is why about 80% of fractures happen there." },
          { text: "The middle of the clavicle isn't attached to any muscles, so it has no support at all", correct: false, explanation: "Muscles do attach along the clavicle, but even with those attachments, the bone itself has very little muscle bulk covering and protecting it compared to bones like the femur." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A fall onto an outstretched hand (baseline case)</h3>
      <div className="prose-p">
      Someone trips and instinctively puts a hand out to break the fall. The impact force travels up through the wrist and forearm to the shoulder joint, then into the clavicle, which — lacking the muscle padding of the arm bones above it — often fails first, typically at the middle third. This single mechanism (FOOSH) is behind a large share of everyday clavicle fractures, from playground falls to icy-sidewalk slips.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A direct hit to the shoulder (edge case / variation)</h3>
      <div className="prose-p">
      In contact sports like football, rugby, or cycling crashes, the force often comes from a completely different direction — a direct blow or fall straight onto the point of the shoulder, rather than up through an outstretched arm. This mechanism also concentrates force on the clavicle&apos;s midsection, which is part of why collarbone fractures are one of the most common injuries reported across contact and collision sports, independent of whether an athlete&apos;s hand ever touches the ground.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why kids heal faster than adults (real-world / applied case)</h3>
      <div className="prose-p">
      A child&apos;s clavicle fracture often heals in as little as 3-6 weeks, roughly half the typical 6-12 weeks an adult needs, mainly because children have a much thicker periosteum (the membrane wrapping the bone) that holds fracture fragments in better alignment and speeds new bone formation. This is also why displaced pediatric clavicle fractures are far more often treated with a simple sling than surgery, compared to more severely displaced adult fractures.
      </div>

      <QuickCheck
        question="Why do children's clavicle fractures typically heal faster than adults' fractures from a similar injury?"
        options={[
          { text: "Children's bones are denser and stronger than adult bones", correct: false, explanation: "Adult bones are generally denser than a child's still-developing bones — density isn't what speeds a child's healing here." },
          { text: "Children have a thicker periosteum, which holds the fracture pieces in better alignment and speeds new bone formation", correct: true, explanation: "Correct. The thicker periosteum in children's bones acts almost like an internal splint, keeping fragments aligned and accelerating the healing process compared to adults." },
          { text: "Children's collarbones aren't actually broken in the same way, so they don't need the same healing process", correct: false, explanation: "The fracture itself is the same type of injury in children and adults — the healing speed difference comes from periosteum thickness and bone biology, not a different kind of injury." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The clavicle's S-curve and where most fractures happen"
        type="detail"
        svgSrc="/diagrams/health-body-basics-why-the-collarbone-is-the-most-commonly-broken-bone.svg"
        altText="Diagram of the collarbone's S-shaped curve connecting the shoulder blade to the breastbone, highlighting the middle third where the curve transitions and roughly 80 percent of fractures occur."
      />
      <p>
      Notice where the diagram marks the fracture zone — right at the point where the two curves of the S-shape meet, which is both the thinnest part of the bone and the part exposed with the least muscle covering.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a frequently broken bone must be an unusually fragile or weak bone.", fix: "The clavicle's fracture rate comes from its exposed position and thin midpoint, not from the bone tissue itself being weaker than other bones." },
          { mistake: "Assuming every collarbone fracture needs surgery.", fix: "Most middle-third fractures, especially with minimal displacement, heal well with a sling and time — surgery is generally reserved for significantly displaced or shortened breaks." },
          { mistake: "Trying to fully immobilize the arm and shoulder for weeks without any guided movement.", fix: "Most treatment plans include early, gentle movement of the hand, wrist, and elbow to prevent stiffness, even while the shoulder itself stays supported — follow a clinician's specific guidance rather than assuming total stillness is safest." },
        ]}
      />
      <MisconceptionCallout
        myth="Bones like the collarbone break often because they're inherently weak or poorly designed."
        reality={<p>The clavicle&apos;s fracture rate is a matter of exposure and geometry, not weak material. It&apos;s the only bony strut linking the arm to the torso&apos;s skeleton, runs almost entirely just beneath the skin with minimal muscle padding, and has a built-in S-curve whose midpoint is naturally thinner than the rest of the bone. Falls onto an outstretched hand and direct hits to the shoulder both funnel force into that exact spot — the same reason many long bones with far more muscle protection, like the femur, break far less often despite bearing much greater everyday loads.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "If you suspect a broken collarbone (visible deformity, inability to lift the arm, severe pain at the shoulder), seek medical evaluation rather than self-diagnosing from symptoms alone.",
          "Follow a clinician's specific sling and movement instructions rather than assuming full immobilization is always correct — early guided movement of the hand and wrist is often part of recovery.",
          "In contact sports, ask about shoulder-pad fit and tackling technique — proper form reduces the direct-impact mechanism responsible for many collarbone fractures.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How long does a broken collarbone take to heal?", answer: "Most adult clavicle fractures heal in about 6 to 12 weeks with a sling; children often heal faster, in roughly 3 to 6 weeks, due to their thicker periosteum and more active bone growth." },
          { question: "Do all collarbone fractures need surgery?", answer: "No. Most clavicle fractures, especially minimally displaced middle-third breaks, heal well with a sling and time. Surgery is more often considered for significantly displaced, shortened, or open fractures." },
          { question: "Why do collarbone fractures happen so often in football and rugby?", answer: "Contact sports frequently involve direct blows to the point of the shoulder during tackles or falls, which transmits force straight into the clavicle's thin midsection — one of two major fracture mechanisms, alongside falling onto an outstretched hand." },
          { question: "Can you still move your arm with a broken collarbone?", answer: "Usually only with significant pain and limited range — most people instinctively support the injured arm against the body. A clinician typically limits shoulder motion with a sling while allowing gentle hand and wrist movement during healing." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
    </>
  );
}
