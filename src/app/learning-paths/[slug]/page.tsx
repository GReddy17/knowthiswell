import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BookOpen } from 'lucide-react';
import { getAllLearningPaths, getLearningPathBySlug } from '@/content/learning-paths';
import { getPostBySlug } from '@/lib/content';
import { getCategoryLabel } from '@/lib/taxonomy';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLearningPaths().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = getLearningPathBySlug(slug);
  if (!path) return {};
  return {
    title: `${path.title} — Learning Path — KnowThisWell`,
    description: path.description,
    alternates: { canonical: `/learning-paths/${path.slug}` },
  };
}

export default async function LearningPathPage({ params }: PageProps) {
  const { slug } = await params;
  const path = getLearningPathBySlug(slug);
  if (!path) notFound();

  const steps = await Promise.all(
    path.steps.map(async (step) => {
      const post = await getPostBySlug(step.category, step.slug);
      return { ...step, post };
    })
  );

  return (
    <div className="mx-auto max-w-[820px] px-5 py-14 md:px-10">
      <div className="mb-2 font-utility text-[12.5px] uppercase tracking-[0.1em] text-forest">
        Learning Path
      </div>
      <h1 className="mb-4 font-display text-[2.5rem] leading-tight text-ink md:text-[3.5rem]">
        {path.title}
      </h1>
      <p className="mb-12 max-w-[65ch] font-body text-xl italic text-ink-soft leading-relaxed">
        {path.description}
      </p>

      <ol className="flex flex-col gap-4">
        {steps.map((step, i) => (
          <li key={`${step.category}/${step.slug}`}>
            {step.post ? (
              <Link
                href={`/${step.category}/${step.slug}`}
                className="flex items-start gap-4 rounded-xl border border-rule bg-white p-4 transition-colors hover:border-forest"
              >
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest font-utility text-xs font-bold text-paper">
                  {i + 1}
                </span>
                <div>
                  <div className="mb-1 font-utility text-[10.5px] uppercase tracking-wider text-ink-soft">
                    {getCategoryLabel(step.category)}
                  </div>
                  <h3 className="mb-1 font-display text-lg font-bold text-ink">{step.post.title}</h3>
                  <p className="font-body text-sm text-ink-soft">{step.post.excerpt}</p>
                </div>
              </Link>
            ) : (
              <div className="flex items-start gap-4 rounded-xl border border-dashed border-rule bg-paper/50 p-4 opacity-60">
                <BookOpen className="mt-1 h-6 w-6 shrink-0 text-ink/30" />
                <p className="font-body text-sm text-ink-soft">Step {i + 1} — coming soon.</p>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
