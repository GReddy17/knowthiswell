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
  title: "Sea Levels & Coastlines",
  category: "geography-world-facts",
  subtopic: "sea-levels-and-coastlines",
  tags: [
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Placeholder for Sea Levels & Coastlines.",
  summary: "Placeholder summary for Sea Levels & Coastlines.",
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
      # Sea Levels & Coastlines
      Coming soon.
      </p>
    </>
  );
}
