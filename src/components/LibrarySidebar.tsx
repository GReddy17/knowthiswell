'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronDown,
  BookOpen,
  Pin,
  PinOff,
  Folder,
  FileText
} from 'lucide-react';

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
  const pathname = usePathname();

  // Interactivity State
  const [isPinned, setIsPinned] = useState(false);
  const [expandedWidth, setExpandedWidth] = useState(256);
  const [currentWidth, setCurrentWidth] = useState(256);
  const [isResizing, setIsResizing] = useState(false);

  const COLLAPSED_WIDTH = 64;
  const MIN_WIDTH = 200;
  const MAX_WIDTH = 600;

  const sidebarRef = useRef<HTMLElement>(null);

  const toggle = (id: string) => {
    const next = new Set(expanded);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpanded(next);
  };

  useEffect(() => {
    if (pathname && pathname !== '/') {
      const category = pathname.split('/')[1];
      if (category) {
        setExpanded(prev => {
          const next = new Set(prev);
          next.add(category);
          return next;
        });
      }
    }
  }, [pathname]);

  // Resize Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      const newWidth = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, e.clientX));
      setCurrentWidth(newWidth);
      setExpandedWidth(newWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  // Initial Width Set
  useEffect(() => {
    if (!isPinned) {
      setCurrentWidth(COLLAPSED_WIDTH);
    }
  }, [isPinned]);

  if (pathname === '/') return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-forest text-paper shadow-xl md:hidden"
      aria-label="Toggle Library"
    >
      <BookOpen size={20} />
    </button>
  );

  const isCollapsed = currentWidth <= 80;

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
        ref={sidebarRef}
        onMouseEnter={() => {
          if (!isPinned) setCurrentWidth(expandedWidth);
        }}
        onMouseLeave={() => {
          if (!isPinned) setCurrentWidth(COLLAPSED_WIDTH);
        }}
        style={{
          width: currentWidth,
          transition: isResizing ? 'none' : 'width 0.2s ease-in-out'
        }}
        className={`fixed left-0 top-0 z-50 h-full border-r border-rule bg-paper transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-rule">
            {!isCollapsed ? (
              <h2 className="font-display text-lg font-semibold text-ink truncate">Library</h2>
            ) : (
              <BookOpen size={20} className="text-forest shrink-0" />
            )}
            <div className="flex items-center gap-1">
              {!isCollapsed && (
                <button
                  onClick={() => setIsPinned(!isPinned)}
                  className="p-1 text-ink-soft hover:text-forest transition-colors"
                  title={isPinned ? 'Unpin' : 'Pin'}
                >
                  {isPinned ? <PinOff size={14} /> : <Pin size={14} />}
                </button>
              )}
              <button onClick={() => setIsOpen(false)} className="md:hidden p-1 text-ink-soft hover:text-forest">
                ✕
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
            <div className="space-y-1">
              {categories.map((cat) => {
                const isActive = pathname?.startsWith(`/${cat.id}`);
                return (
                  <div key={cat.id} className="group">
                    <button
                      onClick={() => toggle(cat.id)}
                      className={`flex w-full items-center justify-between rounded px-2 py-1.5 text-left transition-colors ${
                        isActive
                          ? 'bg-rule-soft text-forest font-semibold'
                          : 'text-ink-soft hover:bg-rule-soft hover:text-forest'
                      }`}
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <Folder size={14} className={isActive ? 'text-forest' : 'text-ink-soft'} />
                        {!isCollapsed && (
                          <span className="truncate font-utility text-[13px]">{cat.label}</span>
                        )}
                      </div>
                      {!isCollapsed && (
                        cat.posts.length > 0 || cat.subtopics.length > 0 ? (
                          expanded.has(cat.id) ? <ChevronDown size={14} /> : <ChevronRight size={14} />
                        ) : null
                      )}
                    </button>

                    {expanded.has(cat.id) && !isCollapsed && (
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
                                  className={`flex items-center gap-2 rounded px-2 py-1 text-[13px] font-body transition-colors ${
                                    pathname === post.href
                                      ? 'bg-forest-tint text-forest font-medium'
                                      : 'text-ink-soft hover:bg-rule-soft hover:text-forest'
                                  }`}
                                >
                                  <FileText size={12} />
                                  <span className="truncate">{post.label}</span>
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
                                className={`flex items-center gap-2 rounded px-2 py-1 text-[13px] font-body transition-colors ${
                                  pathname === post.href
                                    ? 'bg-forest-tint text-forest font-medium'
                                    : 'text-ink-soft hover:bg-rule-soft hover:text-forest'
                                }`}
                                >
                                  <FileText size={12} />
                                  <span className="truncate">{post.label}</span>
                                </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </aside>

      {/* Resize Handle */}
      <div
        onMouseDown={() => setIsResizing(true)}
        className="fixed left-0 top-0 z-50 h-full w-1 cursor-col-resize bg-transparent hover:bg-forest/30 transition-colors"
        style={{ left: currentWidth }}
      />
    </>
  );
}
