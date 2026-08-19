'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { List, ChevronRight, LayoutGrid, List as ListIcon } from 'lucide-react';
import { formatSlugToLabel } from '@/lib/taxonomy-utils';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  readingTimeMinutes: number;
  lastReviewed?: string;
}

interface Group {
  subtopic: string | undefined;
  posts: Post[];
}

interface CategoryHubClientProps {
  groups: Group[];
  category: string;
}

export function CategoryHubClient({ groups, category }: CategoryHubClientProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Merge groups with only 1 post into a "General" collection to avoid 50 rows of singletons
  const majorGroups = groups.filter(g => g.posts.length > 1);
  const generalPosts = groups
    .filter(g => g.posts.length === 1)
    .flatMap(g => g.posts);

  const displayGroups = [
    ...majorGroups,
    generalPosts.length > 0 ? { subtopic: undefined, posts: generalPosts } : null
  ].filter(Boolean) as Group[];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    displayGroups.forEach((group) => {
      const id = group.subtopic ?? 'general';
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [displayGroups]);

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_240px]">
      <div className="space-y-12">
        {/* Header Controls */}
        <div className="flex items-center justify-between mb-8">
          {/* Mobile Jump Rail (Hidden on lg) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide lg:hidden">
            <List className="h-4 w-4 text-ink-soft shrink-0" />
            <nav className="flex gap-2">
              {displayGroups.map((group) => {
                const id = group.subtopic ?? 'general';
                const isActive = activeId === id;
                return (
                  <Link
                    key={id}
                    href={`#${id}`}
                    className={`whitespace-nowrap rounded-full border px-3 py-1 text-xs font-utility transition-all ${
                      isActive
                        ? 'border-forest bg-forest text-paper shadow-sm'
                        : 'border-rule bg-paper text-ink-soft hover:border-forest hover:text-forest'
                    }`}
                  >
                    {group.subtopic ? formatSlugToLabel(group.subtopic) : 'General'}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-1 bg-rule-soft p-1 rounded-lg ml-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md transition-all ${
                viewMode === 'grid' ? 'bg-paper text-forest shadow-sm' : 'text-ink-soft hover:text-forest'
              }`}
              title="Grid View"
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md transition-all ${
                viewMode === 'list' ? 'bg-paper text-forest shadow-sm' : 'text-ink-soft hover:text-forest'
              }`}
              title="List View"
            >
              <ListIcon size={16} />
            </button>
          </div>
        </div>

        <div className="space-y-16">
          {displayGroups.map((group) => {
            return (
              <section
                key={group.subtopic ?? 'general'}
                className="mb-12 scroll-mt-24"
                id={group.subtopic ?? 'general'}
              >
                {group.subtopic && (
                  <h2 className="mb-5 font-display text-2xl font-bold text-ink">
                    {formatSlugToLabel(group.subtopic)}
                  </h2>
                )}
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
                    {group.posts.map((post) => (
                      <Link
                        key={post.slug}
                        id={post.slug}
                        href={`/${category}/${post.slug}`}
                        className="group relative flex flex-col h-full rounded-2xl border border-rule bg-paper p-5 transition-all hover:border-forest hover:shadow-sm hover:-translate-y-1"
                        onClick={(e) => {
                          if (window.location.hash === `#${post.slug}`) {
                            e.preventDefault();
                          }
                        }}
                      >
                        <h3 className="mb-2 font-display text-lg text-ink group-hover:text-forest transition-colors leading-tight">
                          {post.title}
                        </h3>
                        <p className="mb-5 flex-1 max-w-[50ch] font-body text-xs leading-relaxed text-ink-soft line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-3 font-utility text-[10px] text-ochre shrink-0">
                          <span className="flex items-center gap-1">
                            <span className="text-[9px]">⏱</span> {post.readingTimeMinutes} min
                          </span>
                          {post.lastReviewed && (
                            <span className="flex items-center gap-1">
                              <span className="text-[9px]">✓</span> Fact-reviewed
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {group.posts.map((post) => (
                      <Link
                        key={post.slug}
                        id={post.slug}
                        href={`/${category}/${post.slug}`}
                        className="group flex items-center gap-4 p-3 rounded-xl border border-rule bg-paper transition-all hover:border-forest hover:bg-forest/5"
                        onClick={(e) => {
                          if (window.location.hash === `#${post.slug}`) {
                            e.preventDefault();
                          }
                        }}
                      >
                        <div className="shrink-0 h-10 w-10 rounded-lg bg-rule-soft flex items-center justify-center text-forest font-display font-bold">
                          {post.title.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-base text-ink group-hover:text-forest transition-colors truncate">
                            {post.title}
                          </h3>
                          <p className="text-xs text-ink-soft line-clamp-1">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="hidden sm:flex items-center gap-3 font-utility text-[10px] text-ochre shrink-0">
                          <span className="flex items-center gap-1">
                            <span className="text-[9px]">⏱</span> {post.readingTimeMinutes} min
                          </span>
                          {post.lastReviewed && (
                            <span className="flex items-center gap-1">
                              <span className="text-[9px]">✓</span> Fact-reviewed
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>

      </div>

      {/* Desktop Right TOC */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 self-start">
          <p className="mb-4 font-utility text-[11px] uppercase tracking-widest text-ochre">
            In this Topic
          </p>
          <nav className="flex flex-col gap-1 font-body text-sm">
            {groups.map((group) => (
              <div key={group.subtopic ?? 'general'} className="flex flex-col gap-1">
                {group.posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`#${post.slug}`}
                    className={`group flex items-center justify-between px-3 py-1.5 rounded-lg transition-all ${
                      activeId === post.slug
                        ? 'bg-forest/10 text-forest font-medium'
                        : 'text-ink-soft hover:bg-paper hover:text-forest'
                    }`}
                  >
                    <span className={`truncate ${activeId === post.slug ? 'font-semibold' : ''}`}>
                      {post.title}
                    </span>
                    {activeId === post.slug && <ChevronRight size={12} className="shrink-0" />}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
}
