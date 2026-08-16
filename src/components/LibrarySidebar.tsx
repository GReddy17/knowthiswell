'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, BookOpen } from 'lucide-react';

interface SidebarItem {
  label: string;
  href: string;
}

interface CategoryFolder {
  id: string;
  label: string;
  posts: SidebarItem[];
  subtopics: {
    id: string;
    label: string;
    posts: SidebarItem[];
  }[];
}

interface LibrarySidebarProps {
  categories: CategoryFolder[];
}

export function LibrarySidebar({ categories }: LibrarySidebarProps) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (id: string) => {
    const next = new Set(expanded);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpanded(next);
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-forest text-paper shadow-xl md:hidden"
        aria-label="Toggle Library"
      >
        <BookOpen size={20} />
      </button>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm transition-opacity md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Panel */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-64 border-r border-rule bg-paper transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4 border-b border-rule">
            <h2 className="font-display text-lg font-semibold text-ink">Library</h2>
            <button onClick={() => setIsOpen(false)} className="md:hidden p-1 text-ink-soft hover:text-forest">
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
            <div className="space-y-1">
              {categories.map((cat) => (
                <div key={cat.id} className="group">
                  <button
                    onClick={() => toggle(cat.id)}
                    className="flex w-full items-center justify-between rounded px-2 py-1.5 text-left font-utility text-[13px] text-ink-soft hover:bg-rule-soft hover:text-forest transition-colors"
                  >
                    <span className="truncate">{cat.label}</span>
                    {cat.posts.length > 0 || cat.subtopics.length > 0 ? (
                      expanded.has(cat.id) ? <ChevronDown size={14} /> : <ChevronRight size={14} />
                    ) : null}
                  </button>

                  {expanded.has(cat.id) && (
                    <div className="ml-3 mt-1 border-l border-rule-soft pl-2 space-y-1">
                      {/* Subtopics */}
                      {cat.subtopics.map((sub) => (
                        <div key={sub.id} className="mb-2">
                          <p className="px-2 py-1 font-utility text-[11px] uppercase tracking-wider text-ochre opacity-70">
                            {sub.label}
                          </p>
                          <div className="space-y-0.5">
                            {sub.posts.map((post) => (
                              <Link
                                key={post.href}
                                href={post.href}
                                className="block rounded px-2 py-1 text-[13px] font-body text-ink-soft hover:bg-rule-soft hover:text-forest transition-colors"
                              >
                                {post.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                      {/* Root posts in category */}
                      {cat.posts.length > 0 && (
                        <div className="space-y-0.5 pb-2">
                          {cat.posts.map((post) => (
                            <Link
                              key={post.href}
                              href={post.href}
                              className="block rounded px-2 py-1 text-[13px] font-body text-ink-soft hover:bg-rule-soft hover:text-forest transition-colors"
                            >
                              {post.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
