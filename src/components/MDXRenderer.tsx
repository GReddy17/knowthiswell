import { MDXRemote } from 'next-mdx-remote/rsc';
import type { ReactNode } from 'react';
import { TermLink } from './TermLink';
import { ModeToggle } from './ModeToggle';
import { QuickCheck } from './QuickCheck';
import { FootnoteAside } from './FootnoteAside';
import { MisconceptionCallout } from './MisconceptionCallout';
import { EntryCalculator } from './EntryCalculator';
import { ResponsiveImage } from './ResponsiveImage';
import { autoLinkTerms } from '../../scripts/link-terms';
import { slugify } from '@/lib/content';
import { ContentErrorBoundary } from './ContentErrorBoundary';

interface MDXRendererProps {
  source: string;
  /** This post's own "{category}/{slug}" — passed through to the
   *  auto-linker for self-link prevention. */
  postRef: string;
}

/**
 * Turns [[matched text|category/slug]] markers (inserted by
 * scripts/link-terms.ts at build time) into <TermLink> elements with a
 * proper absolute href, then hands the body to next-mdx-remote so
 * authors can also use the interactive components directly inside a
 * post's markdown, e.g.:
 *
 *   <QuickCheck
 *     question="..."
 *     options={[{ text: "...", correct: true, explanation: "..." }]}
 *   />
 */
function resolveTermMarkers(mdxSource: string): string {
  return mdxSource.replace(
    /\[\[([^\]|]+)\|([^\]]+)\]\]/g,
    (_match, text: string, ref: string) => `<TermLink href="/${ref}">${text}</TermLink>`
  );
}

/** Extracts plain text from MDX-rendered heading children (which may
 *  include nested elements like <TermLink>), so the generated id matches
 *  exactly what lib/content.ts's extractHeadings() computed from the raw
 *  markdown text — both MUST agree or TocRail's #hash links resolve to
 *  nothing. This was a real bug: MDX's default h2/h3 render with no id
 *  attribute at all. */
function textContent(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textContent).join('');
  if (node && typeof node === 'object' && 'props' in node) {
    return textContent((node as { props: { children?: ReactNode } }).props.children);
  }
  return '';
}

function Heading2({ children }: { children: ReactNode }) {
  const id = slugify(textContent(children));
  return (
    <h2 id={id} className="scroll-mt-10">
      {children}
    </h2>
  );
}

function Heading3({ children }: { children: ReactNode }) {
  const id = slugify(textContent(children));
  return (
    <h3 id={id} className="scroll-mt-10">
      {children}
    </h3>
  );
}

const components = {
  TermLink,
  ModeToggle,
  QuickCheck,
  FootnoteAside,
  MisconceptionCallout,
  EntryCalculator,
  ResponsiveImage,
  h2: Heading2,
  h3: Heading3,
};

export function MDXRenderer({ source, postRef }: MDXRendererProps) {
  const linked = resolveTermMarkers(autoLinkTerms(source, postRef));
  return (
    <ContentErrorBoundary>
      <MDXRemote source={linked} components={components} />
    </ContentErrorBoundary>
  );
}
