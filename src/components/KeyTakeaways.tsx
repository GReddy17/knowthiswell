import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface KeyTakeawaysProps {
  points: string[];
}

export function KeyTakeaways({ points }: KeyTakeawaysProps) {
  if (!points || (Array.isArray(points) && points.length === 0)) {
    return (
      <div className="my-8 p-4 border border-dashed border-red-300 bg-red-50 rounded-lg text-red-800 text-xs font-mono">
        <strong>Debug: KeyTakeaways missing points.</strong> Received: {JSON.stringify(points)}
      </div>
    );
  }

  // Fallback for when points is a string (parsing error)
  const normalizedPoints = typeof points === 'string'
    ? [points]
    : Array.isArray(points) ? points : [];

  if (normalizedPoints.length === 0) {
    return <div className="my-8 p-4 border border-dashed border-rule text-ink-soft text-xs italic">Key Takeaways: No points provided.</div>;
  }

  return (
    <section className="my-8 rounded-md border-l-4 border-forest bg-forest/10 p-5">
      <div className="mb-3 flex items-center gap-2">
        <CheckCircle2 className="h-5 w-5 text-forest" />
        <h3 className="font-utility text-xs uppercase tracking-wider font-bold text-forest">Key Takeaways</h3>
      </div>
      <ul className="space-y-3">
        {normalizedPoints.map((point, idx) => (
          <li key={idx} className="flex gap-3 text-sm leading-relaxed text-ink/90">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest/20 text-[11px] font-bold text-forest">
              {idx + 1}
            </span>
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
