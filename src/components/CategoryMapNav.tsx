'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react';
import { formatSlugToLabel } from '@/lib/taxonomy-utils';

interface SubtopicGroup {
  subtopic: string | undefined;
  posts: { slug: string; title: string }[];
}

interface CategoryMapNavProps {
  categories: { slug: string; label: string }[];
  activeCategory: string;
  activeLabel: string;
  groups: SubtopicGroup[];
}

export function CategoryMapNav({ categories, activeCategory, activeLabel, groups }: CategoryMapNavProps) {
  const [expanded, setExpanded] = useState(true);
  const [collapsedClusters, setCollapsedClusters] = useState<Set<string>>(new Set());
  const totalPosts = groups.reduce((n, g) => n + g.posts.length, 0);

  const toggleCluster = (id: string) => {
    setCollapsedClusters((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <nav className="flex flex-col gap-1 font-body text-sm text-ink-soft">
      <Link
        href="/"
        className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-forest hover:bg-forest/10 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" /> All Topics
      </Link>
      <div className="my-3 border-t border-rule" />
      {categories.map((cat) => (
        <div key={cat.slug} className="flex flex-col gap-1">
          {cat.slug === activeCategory ? (
            <>
              <button
                type="button"
                onClick={() => setExpanded((e) => !e)}
                aria-expanded={expanded}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[14px] font-semibold text-forest"
              >
                <span>{activeLabel}</span>
                {totalPosts > 0 && (
                  expanded ? <ChevronDown className="h-3.5 w-3.5 shrink-0" /> : <ChevronRight className="h-3.5 w-3.5 shrink-0" />
                )}
              </button>
              {expanded && groups.map((group) => {
                const id = group.subtopic ?? 'general';
                const clusterCollapsed = collapsedClusters.has(id);
                const hasLabel = Boolean(group.subtopic);
                return (
                  <div key={id} className="flex flex-col gap-0.5">
                    {hasLabel && (
                      <button
                        type="button"
                        onClick={() => toggleCluster(id)}
                        aria-expanded={!clusterCollapsed}
                        className="flex items-center justify-between gap-1 pl-5 pr-3 py-1 text-left font-utility text-[10.5px] font-semibold uppercase tracking-wider text-ochre hover:text-forest"
                      >
                        <span>{formatSlugToLabel(group.subtopic!)}</span>
                        {clusterCollapsed ? <ChevronRight className="h-3 w-3 shrink-0" /> : <ChevronDown className="h-3 w-3 shrink-0" />}
                      </button>
                    )}
                    {!clusterCollapsed && group.posts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/${activeCategory}/${post.slug}`}
                        className="pl-8 pr-3 py-1 text-[13px] rounded-lg hover:text-forest transition-colors opacity-80 hover:opacity-100"
                      >
                        {post.title}
                      </Link>
                    ))}
                  </div>
                );
              })}
            </>
          ) : (
            <Link
              href={`/${cat.slug}`}
              className="px-3 py-2 rounded-lg transition-colors hover:bg-paper hover:text-forest"
            >
              {cat.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
