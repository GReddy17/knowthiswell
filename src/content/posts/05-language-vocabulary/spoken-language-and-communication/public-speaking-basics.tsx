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
  title: "Public Speaking Basics",
  category: "language-vocabulary",
  order: 22,
  subtopic: "spoken-language-and-communication",
  tags: ["public speaking", "communication skills", "glossophobia", "presentations", "speech delivery"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Nervousness before speaking to a group is a normal physical response, not evidence of skill — public speaking is a learnable technique, built on preparation, structure, and practice.",
  summary: "Public speaking is the practice of delivering a spoken message to an audience with clarity and structure, and it's a learnable skill built on preparation, organization, and delivery technique — not a fixed trait some people simply have and others lack.",
  sources: [
    { label: "Toastmasters International — Public Speaking Tips", url: "https://www.toastmasters.org/resources/public-speaking-tips" },
    { label: "Merriam-Webster — 'Rhetoric' (definition)", url: "https://www.merriam-webster.com/dictionary/rhetoric" },
  ],
  seeAlso: [
    "language-vocabulary/active-listening-skills",
    "language-vocabulary/non-verbal-communication-basics",
    "language-vocabulary/common-pronunciation-mistakes",
  ],
  glossary: [
    { term: "Glossophobia", definition: "The fear of public speaking — a common form of performance anxiety, not a sign of poor speaking ability." },
    { term: "Filler word", definition: "An unintentional word or sound ('um,' 'like,' 'you know') used to fill pauses in speech, often out of habit or nervousness." },
    { term: "Rhetorical structure", definition: "The overall organization of a speech — commonly an introduction that states the main point, a body that develops it, and a conclusion that reinforces it." },
  ],
  author: {
    slug: "sara-reed-m-j",
    name: "Sara Reed M J",
    credentialLine: "Contributing Editor, KnowThisWell",
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
          "Public speaking is a learnable technique built on preparation, structure, and practice — not a fixed personality trait that some people simply have and others don't.",
          "A clear structure (a stated main point, a few supporting points, a memorable close) does more for a speech's effectiveness than natural charisma or a polished voice.",
          "Nervousness before speaking — a racing heart, sweaty palms — is a normal physiological response to being watched, and it's largely unrelated to how well a speech will actually go.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Public speaking means delivering a spoken message to a group of people in a way they can follow and remember. The basics come down to three things: know what you&apos;re actually trying to say (one clear main point, not five vague ones), organize it so listeners can follow along (a beginning that previews it, a middle that develops it, an end that reinforces it), and practice saying it out loud before the real moment, not just reading it silently in your head. Nervousness is normal and doesn&apos;t mean you&apos;re bad at this — it means your body is treating a group of watching faces like a mild threat, which is an old, automatic reflex that has very little to do with how prepared or capable you actually are.</div>}
        detailed={<div className="prose-p">Effective speech structure typically follows a simple shape: state the main point early rather than building up to it, develop two or three supporting points with concrete examples rather than abstract claims, and close by restating the main point in a way that&apos;s memorable, not just repeated verbatim. Delivery technique matters alongside structure — pacing (deliberately slowing down, especially at key points), eliminating <TermLink href="/language-vocabulary/public-speaking-basics">filler words</TermLink> through awareness and practice rather than suppression, and using pauses on purpose rather than filling every silence. The edge case worth knowing: physiological arousal (elevated heart rate, adrenaline) before speaking is essentially identical whether it&apos;s interpreted as &quot;anxiety&quot; or &quot;excitement&quot; — some public speaking coaches specifically teach reframing pre-speech nerves as excitement, since the bodily sensation is nearly the same and the label a speaker attaches to it can meaningfully change how it affects performance.</div>}
      />
      <FootnoteAside>Toastmasters International, the nonprofit public speaking organization founded in 1924, built its entire model around a specific insight: the fastest way to get better at public speaking isn&apos;t studying theory, it&apos;s giving short speeches repeatedly in a low-stakes room and getting structured feedback each time — practice and repetition outperforming preparation alone.</FootnoteAside>
      <p>
      With structure, delivery, and nervousness treated as three separate, addressable pieces rather than one vague blur called &quot;being good at public speaking,&quot; it becomes much easier to actually work on the specific part that&apos;s weakest.
      </p>

      <QuickCheck
        question="A speaker has their hands shaking and heart racing right before walking on stage. What does this most reliably indicate?"
        options={[
          { text: "That the speech is very likely to go badly.", correct: false, explanation: "Physical arousal before speaking doesn't reliably predict how a speech will actually go — many experienced, effective speakers still feel this every time." },
          { text: "A normal physiological stress response to being watched by a group, which is largely separate from actual speaking skill or preparation.", correct: true, explanation: "Correct. This is a common, automatic bodily response (sometimes called glossophobia when it rises to a fear) and isn't a reliable signal of how well-prepared or skilled the speaker actually is." },
          { text: "That the speaker didn't prepare enough.", correct: false, explanation: "Even thoroughly prepared, experienced speakers commonly feel this — preparation reduces but doesn't eliminate the physiological response, and it isn't a good predictor of preparation level on its own." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Structuring a short workplace update (baseline case)</h3>
      <div className="prose-p">
      Instead of narrating a project chronologically (&quot;first we did this, then this, then this...&quot;), a structured update leads with the main point: &quot;The project is on track for launch next month, with one open risk on the vendor side.&quot; Then it develops two supporting points (what&apos;s done, what the vendor risk actually is) and closes by restating the main takeaway and the one action needed. Listeners retain the point even if they only half-listen to the middle — because the structure front-loads what matters most instead of building to it.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Managing filler words and pacing under nerves (variation / harder case)</h3>
      <div className="prose-p">
      A nervous speaker tends to speed up and fill every silence with &quot;um&quot; or &quot;so&quot; rather than pausing. A practiced technique for this specific problem is deliberately building in planned pauses — after the main point, after each supporting point — and treating silence as acceptable rather than something to fill immediately. This doesn&apos;t eliminate nervousness itself, but it directly targets its most noticeable symptom (rushed, filler-heavy speech), which is usually what audiences actually notice, more than the speaker&apos;s internal feeling of nervousness.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Public speaking basics outside a stage — job interviews and toasts (real-world / applied case)</h3>
      <div className="prose-p">
      The same core skills — a clear main point, a short structure, deliberate pacing — apply directly to a wedding toast, a job interview answer, or a five-minute update in a meeting, all situations most people face without ever calling it &quot;public speaking.&quot; A toast that opens with a clear frame (&quot;I want to share one thing about how I met the groom&quot;), develops one specific story, and closes with a toast line follows the exact same shape as a formal keynote speech, just shorter and less formal — which is why public speaking basics are worth learning even for people who will never give a conference talk.
      </div>

      <QuickCheck
        question="Why does starting a short update with the main point (rather than building up to it chronologically) generally work better for a listening audience?"
        options={[
          { text: "Because listeners can't follow chronological explanations at all.", correct: false, explanation: "Chronological explanation isn't unfollowable — the issue is that it delays the most important information, which many listeners may miss if their attention drifts before the end." },
          { text: "Because it front-loads the most important information, so the point lands even if listener attention drifts during the middle.", correct: true, explanation: "Correct. Leading with the main point protects against the very common case where listener attention isn't fully sustained through the whole update." },
          { text: "Because chronological structure is grammatically incorrect in spoken English.", correct: false, explanation: "This isn't a grammar issue at all — it's a structural, attention-management choice about how to organize spoken information for listeners." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Trying to cover too many points in a short speech instead of one clear main point.", fix: "Cut ruthlessly to one main point with two or three supporting details — a shorter, focused speech is retained far better than a longer, scattered one." },
          { mistake: "Reading a speech silently to 'practice' it instead of actually saying it out loud.", fix: "Rehearse out loud, ideally standing and at real speaking pace — silent reading doesn't reveal awkward phrasing, pacing issues, or filler-word habits the way speaking aloud does." },
          { mistake: "Treating pre-speech nervousness as proof the speech is going to go badly.", fix: "Recognize it as a normal physiological response, separate from actual skill or preparation, and focus energy on structure and pacing instead of trying to eliminate the feeling entirely." },
        ]}
      />
      <MisconceptionCallout
        myth="Feeling anxious before public speaking means you're bad at it, or that confident, calm-looking speakers don't feel nervous."
        reality={<p>Nervousness before speaking to a group is an extremely common physiological response — even experienced, highly rated speakers frequently report feeling it before nearly every talk. The visible confidence of a skilled speaker usually reflects practiced technique (structure, pacing, eye contact) layered over the same underlying nervous system response, not the absence of that response. Public speaking ability is really about what a speaker does with the nervous energy — channeling it into pacing and delivery — not about suppressing or never having it in the first place.</p>}
      />

      <QuickCheck
        question="A new speaker assumes that because they feel nervous, they must not be cut out for public speaking, and avoids opportunities to practice. What's the flaw in this reasoning?"
        options={[
          { text: "There's no flaw — nervousness reliably predicts poor speaking ability.", correct: false, explanation: "Nervousness doesn't reliably predict speaking quality — many effective, well-regarded speakers report feeling nervous consistently, even after years of experience." },
          { text: "It treats a common physiological response as if it were a fixed trait, when public speaking skill is actually built through repeated practice regardless of how nervous someone feels.", correct: true, explanation: "Correct. Avoiding practice because of nervousness prevents exactly the repetition that builds the technique (structure, pacing, delivery) that improves speaking, independent of whether the nervous feeling itself ever fully goes away." },
          { text: "It correctly identifies that public speaking should be avoided if it causes any anxiety at all.", correct: false, explanation: "This isn't a sound conclusion — mild pre-speech anxiety is close to universal even among skilled, experienced speakers, and avoidance tends to prevent the practice that builds real skill." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you have to speak to a group, write your main point as one sentence before drafting anything else — everything you say should support that one sentence.",
          "Practice your next talk or update out loud, standing up, at real speaking pace — not silently in your head.",
          "Notice your own filler words (um, like, so) in a recording of yourself, and practice replacing them with a deliberate pause instead.",
          "Next time you feel nervous before speaking, name it out loud to yourself as 'my body getting ready,' not as evidence the speech will go badly.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do I get better at public speaking?", answer: "Practice out loud regularly, structure talks around one clear main point rather than many, and get repeated low-stakes practice — organizations like Toastmasters exist specifically to provide that structured, repeated practice environment." },
          { question: "Why am I so nervous about public speaking?", answer: "Pre-speech nervousness is a normal physiological stress response to being observed by a group — it's extremely common, including among experienced speakers, and isn't a reliable sign of poor ability or lack of preparation." },
          { question: "What is glossophobia?", answer: "Glossophobia is the fear of public speaking, one of the most commonly reported performance-related fears. It ranges from mild nervousness to more significant anxiety, and structured practice and preparation typically reduce its intensity over time." },
          { question: "How do you structure a short speech?", answer: "A simple, effective structure states the main point early, develops two or three supporting points with concrete examples, and closes by restating the main point in a memorable way — rather than building up to the point chronologically." },
          { question: "How do I stop saying 'um' when I talk?", answer: "Filler words like 'um' usually fill silence out of habit or nervousness. Practicing deliberate pauses instead of rushing to fill every silence, along with recording and reviewing your own speech, is the most direct way to reduce them." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
