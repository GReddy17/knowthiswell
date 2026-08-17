import React from 'react';

interface DiagramBlockProps {
  title: string;
  type?: 'flow' | 'comparison' | 'detail';
  svgSrc: string;
  altText: string;
}

export function DiagramBlock({ title, type = 'flow', svgSrc, altText }: DiagramBlockProps) {
  return (
    <figure className="my-10 overflow-hidden rounded-xl border border-rule bg-paper shadow-sm">
      <figcaption className="border-b border-rule bg-paper/50 px-4 py-2 text-center font-utility text-xs font-medium text-ink-soft">
        {title}
      </figcaption>
      <div className="p-4">
        <img
          src={svgSrc}
          alt={altText}
          className="h-auto w-full object-contain"
          loading="lazy"
        />
      </div>
    </figure>
  );
}
