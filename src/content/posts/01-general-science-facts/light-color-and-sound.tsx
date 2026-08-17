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
  title: "Light, Color & Sound",
  category: "general-science-facts",
  subtopic: "light-color-and-sound",
  tags: [
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Placeholder for Light, Color & Sound.",
  summary: "Placeholder summary for Light, Color & Sound.",
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
      # Light, Color & Sound
      Coming soon.
      </p>
    </>
  );
}
