import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface MistakeItem {
  mistake: string;
  fix: string;
}

interface MistakeListProps {
  items: MistakeItem[];
}

export function MistakeList({ items }: MistakeListProps) {
  const normalizedItems = Array.isArray(items) ? items :
    typeof items === 'string' ? JSON.parse(items) : [];

  if (normalizedItems.length === 0) return null;

  return (
    <section className="my-8">
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle className="h-5 w-5 text-red-600" />
        <h3 className="font-display text-lg font-bold text-ink">Common Mistakes</h3>
      </div>
      <div className="divide-y divide-rule">
        {normalizedItems.map((item: MistakeItem, idx: number) => (
          <div key={idx} className="grid grid-cols-[22px_1fr] gap-3 py-3">
            <div className="text-red-600 font-bold">✕</div>
            <div>
              <p className="text-sm font-medium text-red-900 mb-1">{item.mistake}</p>
              <p className="text-sm text-forest">→ {item.fix}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
