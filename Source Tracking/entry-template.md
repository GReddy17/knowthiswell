---
title: "ENTRY TITLE"
category: "category-slug"
subtopic: "subtopic-slug"
tags: ["tag1", "tag2", "tag3"]
date: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
lastReviewed: "YYYY-MM-DD"
excerpt: "One-sentence hook for listing pages and meta description (under ~155 chars)."
summary: "Slightly longer 2-3 sentence summary, can duplicate/expand the excerpt. Used for Key Takeaways intro and possibly AI Overview snippets."
sources:
  - label: "Source name — what it covers"
    url: "https://example.com"
  - label: "Second source name"
    url: "https://example.com"
seeAlso:
  - "related-entry-slug-1"
  - "related-entry-slug-2"
glossary:
  - term: "Jargon word used in this entry"
    definition: "One-line plain definition."
  - term: "Another term"
    definition: "One-line plain definition."
author:
  slug: "author-slug"
  name: "Author Name"
  credentialLine: "Founder, KnowThisTopic"
# youtubeStatus options: not-started | scripted | generated | published
youtubeStatus: "not-started"
youtubeUrl: ""
draft: false
---

## Key Takeaways

<KeyTakeaways
  points={[
    "Single-sentence takeaway #1 — the core mechanism in one line.",
    "Single-sentence takeaway #2 — the most common misuse or misconception, corrected.",
    "Single-sentence takeaway #3 — the practical 'so what' for the reader.",
  ]}
/>

## The concept

<ModeToggle
  labels={{ plain: "Plain", detailed: "Detailed" }}
  plain={<p>Plain-language explanation, 2-4 sentences. No jargon. Written for someone hearing this for the first time.</p>}
  detailed={<p>Fuller technical explanation, precise terminology, mechanism-level detail. Written for someone who wants the "why," not just the "what."</p>}
/>

<FootnoteAside>Optional supporting fact, stat, or aside that adds credibility but would clutter the main flow if inlined.</FootnoteAside>

Short paragraph after the toggle that sets up the next section — a transition sentence, not a repeat.

<QuickCheck
  question="A single scenario-based question testing whether the reader actually understood the mechanism above, not just recall."
  options={[
    { text: "Plausible wrong answer reflecting a common misunderstanding", correct: false, explanation: "Why this is wrong — name the misunderstanding it reflects." },
    { text: "The correct answer", correct: true, explanation: "Why this is right — reinforce the mechanism." },
    { text: "Another plausible wrong answer", correct: false, explanation: "Why this is wrong." },
  ]}
/>

## Worked examples

### Example 1: [Simple / baseline case]

Short scenario setup (1-2 sentences), then walk through it concretely — numbers, steps, or a mini narrative. This example should be the cleanest, least caveat-heavy version of the concept.

### Example 2: [Edge case / variation]

A scenario that differs meaningfully from Example 1 — different scale, different context, or a case where a naive application of the concept would go wrong. This is where you show the concept generalizes rather than being a one-off trick.

### Example 3: [Real-world / applied case]

A scenario closest to how the reader will actually encounter this in life. Ties theory back to practical stakes.

## How it works (visual)

<DiagramBlock
  title="Optional caption for the diagram"
  type="flow"
  svgSrc="/diagrams/entry-slug-flow.svg"
  altText="Descriptive alt text explaining what the diagram shows, for accessibility and image SEO."
/>

Short paragraph explaining what to notice in the diagram — don't just drop it in silently, point the reader at the key relationship it's showing.

## Common mistakes

<MistakeList
  items={[
    { mistake: "Specific execution error people make even when they understand the concept.", fix: "What to do instead, one line." },
    { mistake: "Second common mistake.", fix: "Correction, one line." },
    { mistake: "Third common mistake.", fix: "Correction, one line." },
  ]}
/>

<MisconceptionCallout
  myth="A commonly-held wrong belief about how this concept works (not a mistake in applying it — a wrong mental model)."
  reality={<p>What's actually true, and briefly why the myth is intuitive-but-wrong.</p>}
/>

## Try it yourself

<EntryCalculator
  title="Descriptive calculator title"
  fields={[
    { key: "field1", label: "Input label", defaultValue: 0 },
    { key: "field2", label: "Input label", defaultValue: 0, step: 0.1, suffix: "%" },
  ]}
  resultLabel="What the output represents"
  formula="formulaFunctionName"
/>

## What to do next

<ActionChecklist
  items={[
    "Concrete, actionable first step the reader can take today.",
    "Second step, sequential if order matters.",
    "Third step — where to go deeper or what tool/resource to use next.",
  ]}
/>

## FAQ

<FAQBlock
  items={[
    {
      question: "A real question people actually type into search, phrased naturally.",
      answer: "Direct, complete answer in 1-3 sentences. This block should also emit FAQPage JSON-LD.",
    },
    {
      question: "Second real search-style question.",
      answer: "Direct answer.",
    },
    {
      question: "Third real search-style question — good candidates are 'is X the same as Y', 'how much/long/often', 'do I need to'.",
      answer: "Direct answer.",
    },
    {
      question: "Fourth question, optional — edge case or 'what if' scenario.",
      answer: "Direct answer.",
    },
  ]}
/>

## Related terms

<GlossaryStrip terms={glossary} />

## See also

<SeeAlsoList slugs={seeAlso} />
