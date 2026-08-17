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
  title: "Geography of Africa",
  category: "geography-world-facts",
  subtopic: "geography-of-africa",
  tags: [
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Placeholder for Geography of Africa.",
  summary: "Placeholder summary for Geography of Africa.",
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
      # Geography of Africa
      Coming soon.
      </p>
    </>
  );
}
