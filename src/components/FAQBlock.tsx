'use client';
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQBlockProps {
  items: FAQItem[];
}

export function FAQBlock({ items }: FAQBlockProps) {
  const normalizedItems = Array.isArray(items) ? items :
    typeof items === 'string' ? JSON.parse(items) : [];

  if (normalizedItems.length === 0) return null;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="my-8">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="h-5 w-5 text-ink-soft" />
        <h3 className="font-display text-lg font-bold text-ink">FAQ</h3>
      </div>
      <div className="divide-y divide-rule">
        {normalizedItems.map((item: FAQItem, idx: number) => (
          <div
            key={idx}
            className="py-3"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="flex w-full items-center justify-between text-left font-semibold text-sm text-ink hover:text-forest transition-colors"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`h-4 w-4 text-ink-soft transition-transform ${
                  openIndex === idx ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === idx && (
              <div className="pt-2 text-sm text-ink/80 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
