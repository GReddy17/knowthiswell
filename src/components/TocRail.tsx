'use client';

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  depth: 2 | 3;
}

interface TocRailProps {
  headings: Heading[];
}

/**
 * Sticky, scroll-spy TOC. Uses IntersectionObserver rather than scroll
 * listeners for performance. Hidden below the md breakpoint via the
 * parent grid (see PostLayout) rather than here, so no layout is
 * shipped to mobile at all.
 */
export function TocRail({ headings }: TocRailProps) {
  const [activeId, setActiveId] = useState<string | null>(headings?.[0]?.id ?? null);

  useEffect(() => {
    if (!headings || headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents">
      <div className="mb-3.5 font-utility text-[11px] uppercase tracking-[0.12em] text-ochre">
        In this entry
      </div>
      <ol className="border-l border-rule">
        {headings.map((h) => {
          const isActive = h.id === activeId;
          return (
            <li
              key={h.id}
              className={`mb-2.5 pl-4 ${
                isActive ? '-ml-px border-l-2 border-forest pl-[15px]' : ''
              } ${h.depth === 3 ? 'ml-2' : ''}`}
            >
              <a
                href={`#${h.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`block font-utility text-[13.5px] leading-tight ${
                  isActive ? 'font-medium text-forest' : 'text-ink-soft hover:text-forest'
                }`}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
