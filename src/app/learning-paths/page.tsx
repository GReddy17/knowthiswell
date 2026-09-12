import Link from 'next/link';
import type { Metadata } from 'next';
import { Map } from 'lucide-react';
import { getAllLearningPaths } from '@/content/learning-paths';

export const metadata: Metadata = {
  title: 'Learning Paths — KnowThisWell',
  description: 'Guided, sequenced routes through KnowThisWell\'s existing posts — a curated order to read them in, not a new course platform.',
  alternates: { canonical: '/learning-paths' },
};

export default function LearningPathsIndexPage() {
  const paths = getAllLearningPaths();

  return (
    <div className="mx-auto max-w-[900px] px-5 py-14 md:px-10">
      <div className="mb-2 font-utility text-[12.5px] uppercase tracking-[0.1em] text-forest">
        Learning Paths
      </div>
      <h1 className="mb-4 font-display text-[2.5rem] leading-tight text-ink md:text-[3.5rem]">
        Guided routes through what&apos;s already here
      </h1>
      <p className="mb-12 max-w-[65ch] font-body text-xl italic text-ink-soft leading-relaxed">
        Each path sequences existing KnowThisWell posts into a logical order for a
        specific real-world goal — free, no sign-up, no new content required to start.
      </p>

      <div className="flex flex-col gap-6">
        {paths.map((path) => (
          <Link
            key={path.slug}
            href={`/learning-paths/${path.slug}`}
            className="block rounded-2xl border border-rule bg-white p-6 transition-colors hover:border-forest"
          >
            <div className="mb-2 flex items-center gap-2">
              <Map className="h-5 w-5 text-ochre" />
              <span className="font-utility text-[11px] uppercase tracking-wider text-ochre">
                {path.steps.length} steps
              </span>
            </div>
            <h2 className="mb-2 font-display text-2xl font-bold text-ink">{path.title}</h2>
            <p className="font-body text-base text-ink-soft">{path.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
