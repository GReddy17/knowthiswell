import React from 'react';
import { BookOpen } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
}

interface GlossaryStripProps {
  terms: GlossaryTerm[];
}

export function GlossaryStrip({ terms }: GlossaryStripProps) {
  const normalizedTerms = Array.isArray(terms) ? terms :
    typeof terms === 'string' ? JSON.parse(terms) : [];

  if (normalizedTerms.length === 0) return null;

  return (
    <section className="my-8">
      <div className="mb-4 flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-ink-soft" />
        <h3 className="font-display text-lg font-bold text-ink">Related terms</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {normalizedTerms.map((item: GlossaryTerm, idx: number) => (
          <div key={idx} className="group relative rounded-full bg-forest/10 px-3 py-1 text-xs font-medium text-forest border border-transparent hover:border-forest transition-colors cursor-default">
            {item.term}
            <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block z-10 w-48 p-2 rounded-md bg-ink text-paper text-[11px] leading-tight shadow-lg">
              {item.definition}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
