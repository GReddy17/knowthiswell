import React from 'react';
import { ListChecks } from 'lucide-react';

interface ActionChecklistProps {
  items: string[];
}

export function ActionChecklist({ items }: ActionChecklistProps) {
  const normalizedItems = Array.isArray(items) ? items :
    typeof items === 'string' ? JSON.parse(items) : [];

  if (normalizedItems.length === 0) return null;

  return (
    <section className="my-8">
      <div className="mb-4 flex items-center gap-2">
        <ListChecks className="h-5 w-5 text-forest" />
        <h3 className="font-display text-lg font-bold text-ink">What to do next</h3>
      </div>
      <ul className="space-y-1">
        {normalizedItems.map((item: string, idx: number) => (
          <li key={idx} className="group grid grid-cols-[20px_1fr] gap-3 py-2 text-sm leading-relaxed text-ink/80">
            <div className="mt-1 h-4 w-4 shrink-0 rounded border border-rule bg-paper transition-colors group-hover:border-forest group-hover:bg-forest/10" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
