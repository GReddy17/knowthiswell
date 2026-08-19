interface ResponsiveImageProps {
  /** Base filename without extension or size suffix, e.g. "compound-growth-chart" */
  name: string;
  alt: string; // required — no default, forces authors to write real alt text
  caption?: string;
}

/**
 * Renders the output of scripts/process-images.mjs. Plain <img> with a
 * srcset rather than next/image on purpose: the responsive 480/720/1440w
 * WebP variants are already generated at build time via sharp, so
 * next/image's runtime optimizer would just re-process an already-
 * optimized asset on every request (and bill Vercel's Image Optimization
 * API for it) with no quality/size benefit.
 */
export function ResponsiveImage({ name, alt, caption }: ResponsiveImageProps) {
  return (
    <figure className="my-8">
      <img
        src={`/images/${name}-720w.webp`}
        srcSet={`/images/${name}-480w.webp 480w, /images/${name}-720w.webp 720w, /images/${name}-1440w.webp 1440w`}
        sizes="(max-width: 720px) 100vw, 720px"
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full border border-rule"
      />
      {caption && (
        <figcaption className="mt-2 font-utility text-[13px] text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
