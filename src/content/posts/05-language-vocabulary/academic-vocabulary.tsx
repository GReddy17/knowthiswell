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
  title: "Academic Vocabulary",
  category: "language-vocabulary",
  subtopic: "academic-vocabulary",
  tags: [
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Placeholder for Academic Vocabulary.",
  summary: "Placeholder summary for Academic Vocabulary.",
  sources: [
  ],
  seeAlso: [
  ],
  glossary: [
  ],
  author: {
    slug: "unknown",
    name: "Unknown",
    credentialLine: "TBD",
  },
  youtubeStatus: "not-started",
  youtubeUrl: "",
  draft: true,
};

export default function Post() {
  return (
    <>
            <p>
      # Academic Vocabulary
      Coming soon.
      </p>
    </>
  );
}
