import Link from 'next/link';
import { getAllCategories } from '@/lib/content';
import { getCategoryLabel, getCategoryDescription } from '@/lib/taxonomy';

export default async function HomePage() {
  const categories = await getAllCategories();

  return (
    <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-10">
      <h1 className="mb-4 max-w-[22ch] font-display text-4xl leading-tight text-ink md:text-5xl">
        A practical knowledge library for 2026 and beyond.
      </h1>
      <p className="mb-14 max-w-[60ch] font-body text-lg italic text-ink-soft">
        A growing collection of clearly written, fact-reviewed entries on
        money, career, health, technology, and civic life — the things
        worth actually understanding.
      </p>

      <div className="grid grid-cols-1 gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/${category}`}
            className="group bg-paper p-7 transition-colors hover:bg-forest-tint"
          >
            <h2 className="mb-2 font-display text-xl text-ink group-hover:text-forest">
              {getCategoryLabel(category)}
            </h2>
            <p className="font-utility text-[13.5px] leading-relaxed text-ink-soft">
              {getCategoryDescription(category) ?? 'No description yet.'}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
