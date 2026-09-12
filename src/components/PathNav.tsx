import Link from 'next/link';
import { LearningPathStep } from '@/content/learning-paths';

interface PathNavProps {
  pathTitle: string;
  pathSlug: string;
  stepIndex: number;
  totalSteps: number;
  prev: LearningPathStep | null;
  next: LearningPathStep | null;
}

/**
 * Shown on any post that's part of a Learning Path (see
 * content/learning-paths/index.ts) — gives the reader a guided
 * sequence through existing content without any new gating/login,
 * per the roadmap's Learning Paths Phase 1 scope.
 */
export function PathNav({ pathTitle, pathSlug, stepIndex, totalSteps, prev, next }: PathNavProps) {
  return (
    <nav
      aria-label={`Learning path: ${pathTitle}`}
      className="my-8 rounded-lg border border-rule bg-white p-4"
    >
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <Link
          href={`/learning-paths/${pathSlug}`}
          className="font-utility text-[11px] uppercase tracking-[0.12em] text-ochre hover:text-forest"
        >
          Path: {pathTitle}
        </Link>
        <span className="font-utility text-[11px] text-ink-soft">
          Step {stepIndex} of {totalSteps}
        </span>
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-rule pt-2.5">
        {prev ? (
          <Link
            href={`/${prev.category}/${prev.slug}`}
            className="font-body text-sm text-ink-soft hover:text-forest"
          >
            ← Previous
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/${next.category}/${next.slug}`}
            className="font-body text-sm text-ink-soft hover:text-forest"
          >
            Next →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}
