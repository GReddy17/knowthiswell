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
  title: "How Social Media Feeds Decide What You See",
  category: "technology-basics",
  order: 44,
  subtopic: "digital-communication",
  tags: ["how social media algorithms work", "feed ranking explained", "recommendation systems", "digital communication", "engagement algorithm", "technology basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "A social feed isn't chronological or random — a ranking model scores thousands of candidate posts against your past behavior and sorts them by predicted engagement.",
  summary: "A social media feed's order is decided by a ranking model that scores a large pool of candidate posts against signals like a person's past behavior, then sorts and displays the highest-scoring results first.",
  sources: [
    { label: "NIST — AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
    { label: "Cloudflare Learning Center — What Is End-to-End Encryption (E2EE)?", url: "https://www.cloudflare.com/learning/privacy/what-is-end-to-end-encryption/" },
  ],
  seeAlso: [
    "technology-basics/how-push-notifications-work",
    "technology-basics/what-happens-when-you-block-someone",
    "technology-basics/read-receipts-and-typing-indicators-explained",
  ],
  glossary: [
    { term: "Ranking model", definition: "A computer program trained to predict how likely a person is to engage with each piece of content, used to sort a feed from most to least predicted engagement." },
    { term: "Candidate selection", definition: "An early filtering step that narrows a huge pool of eligible posts down to a smaller set worth scoring in detail, since scoring every possible post for every user isn't computationally practical." },
    { term: "Engagement signal", definition: "A measurable user action — a like, comment, share, watch time, or even how long someone paused on a post — used as input data for a ranking model." },
    { term: "Feedback loop", definition: "A cycle where a system's output (the feed shown) influences future input (what a person clicks or lingers on), which then reshapes future output." },
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
          "A feed's order comes from a ranking model scoring a narrowed-down pool of candidate posts against predicted engagement — not strict chronological order, and not a human editor's pick.",
          "The model doesn't judge truth, importance, or quality — it predicts what you're statistically likely to react to, based on your own past behavior and similar users' behavior.",
          "Your reactions to what you're shown feed back into the same model, which is why two people with different habits on the same platform see very different feeds even for the same topic.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Picture a librarian who, instead of shelving books alphabetically, hands you the books she thinks you personally are most likely to actually read, based on every book you&apos;ve picked up before. A social media feed works similarly: instead of showing every post from everyone you follow in the order it was posted, the platform predicts which posts you&apos;re most likely to react to and puts those first. What you see is a personalized prediction, not a neutral list.</div>}
        detailed={<div className="prose-p">This is a <strong>feedback loop</strong> layered on top of <strong>lookup via index</strong> — but the &quot;index&quot; here is a constantly-updating prediction model, not a fixed directory. The process happens in stages: first, <TermLink href="/technology-basics/how-social-media-feeds-decide-what-you-see">candidate selection</TermLink> narrows an enormous pool of eligible posts down to a manageable set, since scoring every possible post for every user in real time isn&apos;t practical at scale. Then a <TermLink href="/technology-basics/how-social-media-feeds-decide-what-you-see">ranking model</TermLink> scores each candidate using <TermLink href="/technology-basics/how-social-media-feeds-decide-what-you-see">engagement signals</TermLink> — likes, comments, shares, watch time, and more subtle signals like how long someone paused before scrolling past. The results are sorted and assembled into what you see. The feedback loop closes when your reactions to that feed become new training data for future scoring. The edge case worth knowing: because the model optimizes for predicted engagement, not accuracy or balance, content that reliably provokes a strong reaction (positive or negative) can rank highly even if it isn&apos;t representative of a topic overall — a known, widely discussed limitation of engagement-based ranking that has led some platforms to add separate, explicit adjustments on top of pure engagement scoring.</div>}
      />
      <FootnoteAside>Frameworks like NIST&apos;s AI Risk Management Framework exist specifically because ranking and recommendation systems like this are a form of applied AI with real, measurable effects on what information people encounter — which is why understanding the mechanism, not just using the product, matters.</FootnoteAside>

      <p>
        Once a feed is understood as a prediction, not a neutral timeline, patterns that used to feel arbitrary — why certain posts blow up, why two people&apos;s feeds diverge so sharply — start making mechanical sense.
      </p>

      <QuickCheck
        question="Two friends follow all the same accounts on a social platform, but their feeds look completely different. What best explains this?"
        options={[
          { text: "The platform randomly shuffles posts differently for each person", correct: false, explanation: "Feed order isn't random — it's a deliberate, non-random prediction based on each person's own behavior, which is exactly why it differs between people rather than varying by chance." },
          { text: "The ranking model scores the same pool of candidate posts differently for each person, based on each person's own distinct engagement history", correct: true, explanation: "Correct. The same underlying posts get personalized scores because the model factors in each individual's past behavior, so two people following identical accounts can still see very different rankings." },
          { text: "One friend's account has been given priority access to more posts", correct: false, explanation: "Both accounts generally draw from the same pool of eligible posts from followed accounts — the difference is in how that pool gets scored and ordered for each individual, not in which posts are made available." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Liking posts about one topic changes what shows up next (baseline case)</h3>
      <div className="prose-p">
        Someone starts liking and lingering on cooking videos on a social platform. Within a short time, their feed shifts to show noticeably more cooking-related content, even from accounts they don&apos;t follow. This is the feedback loop completing a full cycle: the model logged the engagement signals (likes, watch time) as evidence of interest, updated its prediction for that person, and began surfacing more candidates it scored as similarly likely to engage. Nothing was manually curated — the shift is a direct, mechanical response to the new engagement data.
      </div>
      <QuickCheck
        question="Someone notices their feed shifted toward a new topic shortly after they engaged with a few posts about it. What caused the shift?"
        options={[
          { text: "A platform employee manually noticed the activity and adjusted the feed", correct: false, explanation: "Feed personalization operates automatically at a scale where manual, individual curation isn't the mechanism — it's the ranking model responding to logged engagement signals." },
          { text: "The engagement signals from those interactions updated the ranking model's prediction, which then surfaced more similarly-scored content", correct: true, explanation: "Correct. This is the feedback loop in action — engagement data feeds back into the model, which adjusts future predictions and rankings automatically." },
          { text: "The platform's chronological order simply happened to include more of that topic that week", correct: false, explanation: "Most modern feeds aren't strictly chronological — the described shift, tied directly to the person's own recent engagement, points to personalized ranking rather than coincidental timing." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A widely shared post that turns out to be misleading (edge case / variation)</h3>
      <div className="prose-p">
        A post containing inaccurate information spreads rapidly because it provokes strong reactions — outrage, disbelief, heated comments — all of which register as high engagement to a ranking model. The model has no built-in concept of factual accuracy; it optimizes for predicted engagement, and strong emotional reactions are a powerful engagement signal regardless of whether the underlying claim is true. This is a well-documented structural property of engagement-based ranking, not a bug specific to one platform, which is why many platforms have added separate systems — fact-checking labels, reduced distribution for flagged content — layered on top of the base ranking model specifically to counteract it.
      </div>
      <QuickCheck
        question="Why can a misleading post sometimes get ranked and shown very widely by a feed algorithm?"
        options={[
          { text: "Because the ranking model verifies accuracy first, and only shows content it has confirmed is true", correct: false, explanation: "Base ranking models are typically built to predict engagement, not to verify factual accuracy — accuracy checks, where they exist, are usually a separate system layered on top." },
          { text: "Because strong reactions to misleading content still register as high engagement, and the model optimizes for predicted engagement, not accuracy", correct: true, explanation: "Correct. Engagement-based ranking treats a strong emotional reaction as a positive signal by default, regardless of whether the content is accurate, which is exactly why some platforms add separate accuracy-related systems on top." },
          { text: "Misleading posts are given special priority by the platform to increase controversy on purpose", correct: false, explanation: "This describes deliberate intent, but the more general and better-documented explanation is a structural byproduct of engagement optimization itself, not a specific decision to prioritize controversy." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Understanding why a switch to chronological order changes the experience (real-world / applied case)</h3>
      <p>
        Some platforms offer a setting to switch from the default ranked feed to a strictly chronological one. Choosing chronological order effectively removes the ranking model&apos;s scoring and sorting step entirely, showing posts purely in the order they were posted from accounts a person follows. The tradeoff becomes visible immediately: chronological feeds show far less content overall (since there&apos;s no candidate-narrowing step optimizing for relevance) and can surface far more low-engagement or off-topic posts, but they also stop reinforcing the feedback loop that narrows a person&apos;s exposure toward whatever they&apos;ve engaged with most.
      </p>
      <QuickCheck
        question="Someone switches their feed setting from the default ranked view to a chronological view. What actually changed under the hood?"
        options={[
          { text: "The platform stopped collecting any data about that person's activity", correct: false, explanation: "Switching a feed display setting doesn't necessarily stop data collection elsewhere on the platform — the change specifically affects how that one feed is ordered." },
          { text: "The ranking model's scoring and sorting step was bypassed, so posts now display purely in posting order instead of predicted-engagement order", correct: true, explanation: "Correct. Chronological order removes the candidate-scoring and sorting step from the pipeline — it shows the same type of underlying content, just without the personalized ranking applied." },
          { text: "The person now sees posts from accounts they don't follow, in a completely different pool", correct: false, explanation: "A chronological feed setting typically still draws from accounts a person follows — the difference is in ordering logic, not necessarily in which accounts' posts are eligible." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="From candidate pool to personalized feed"
        type="detail"
        svgSrc="/diagrams/technology-basics-how-social-media-feeds-decide-what-you-see-ranking-pipeline.svg"
        altText="A pipeline diagram showing a large pool of candidate posts narrowed down by a candidate-selection step, each remaining candidate scored by a ranking model using signals like past behavior and how similar users reacted, the scored posts sorted, and the top results assembled into the feed shown to a user, with a feedback loop arrow showing that the user's reactions to that feed feed back into the model."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a social media feed shows posts in the order they were made.", fix: "Most default feeds are ranked by predicted engagement, not posting time — a strictly chronological feed is usually a separate, optional setting where available." },
          { mistake: "Believing the algorithm knows or cares whether content is true.", fix: "Base ranking models optimize for predicted engagement, not accuracy — factual verification, where it exists, is typically a separate system layered on top." },
          { mistake: "Thinking your feed is identical to what other people following the same accounts see.", fix: "Ranking is personalized per account based on individual engagement history, so identical follow lists can still produce very different feeds." },
          { mistake: "Assuming the feed is a fixed, unchanging list rather than a live prediction.", fix: "The ranking updates continuously as new engagement data comes in — the same post can rank differently for the same person at different times." },
        ]}
      />
      <MisconceptionCallout
        myth="Social media feeds are just a neutral, chronological list of what people you follow have posted."
        reality={<p>Most default feeds run every eligible post through a ranking model that predicts engagement and sorts accordingly — the order is a personalized prediction, not a neutral timestamp sort. This isn&apos;t inherently deceptive; it&apos;s a deliberate design choice to surface what a model estimates you&apos;ll find worth your time. But it does mean the feed reflects a statistical guess about your preferences, filtered through what the platform can measure, not an unfiltered record of everything posted.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "If a platform offers a chronological feed option and you want less algorithmic filtering, try switching to it and compare what you see.",
          "Remember that liking or lingering on a type of content will likely shift future recommendations toward more of it — that's the feedback loop, not a coincidence.",
          "Be more skeptical of content that provoked a strong emotional reaction and spread quickly — that pattern is exactly what engagement-based ranking tends to amplify, regardless of accuracy.",
          "Read How Push Notifications Work next to see the related mechanism that pulls you back to check a feed in the first place.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do social media algorithms decide what to show you?", answer: "A ranking model scores a pool of eligible posts based on predicted engagement — using signals like past likes, comments, shares, and watch time — then sorts and displays the highest-scoring results first, personalized to each account." },
          { question: "Why do two people see different things in their feed even if they follow the same accounts?", answer: "The ranking model scores the same pool of candidate posts differently for each person based on their own individual engagement history, so identical follow lists can still produce very different personalized rankings." },
          { question: "Do social media feeds show posts in chronological order?", answer: "Usually not by default — most platforms rank by predicted engagement rather than posting time. Some platforms offer an optional chronological feed setting that bypasses the ranking step entirely." },
          { question: "Why does misleading content sometimes spread so widely on social media?", answer: "Ranking models typically optimize for predicted engagement, and strong reactions — including outrage or disbelief at inaccurate claims — register as high engagement regardless of whether the content is true, which can help it spread quickly." },
          { question: "Can you turn off the algorithm on social media?", answer: "Some platforms offer a chronological or 'following only' feed setting that bypasses personalized ranking, though the underlying platform may still use algorithms elsewhere (like search or recommendations outside the main feed)." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
