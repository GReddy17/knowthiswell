import Link from 'next/link';
import { getAllTaxonomy } from '@/lib/taxonomy';

export default async function TopicsIndexPage() {
  const allTopics = getAllTaxonomy();

  const phases = [1, 2, 3, 4, 5];

  return (
    <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-10">
      <header className="mb-16 text-center">
        <div className="mb-2 font-utility text-[12.5px] uppercase tracking-[0.1em] text-forest">
          Knowledge Map
        </div>
        <h1 className="font-display text-[2.75rem] leading-tight text-ink md:text-[3.5rem]">
          Explore the Library
        </h1>
        <p className="mt-6 max-w-[60ch] mx-auto font-body text-lg text-ink-soft">
          A curated collection of essential knowledge, structured in phases from fundamentals to deep dives.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {phases.map((phase) => {
          const phaseTopics = allTopics.filter(t => t.phase === phase);
          if (phaseTopics.length === 0) return null;

          return (
            <section key={phase} className="flex flex-col">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-white font-utility text-xs font-bold">
                  {phase}
                </span>
                <h2 className="font-display text-xl text-ink">
                  Phase {phase}
                </h2>
              </div>
              <ul className="flex flex-col gap-3">
                {phaseTopics.map((topic) => (
                  <li key={topic.slug}>
                    <Link
                      href={`/${topic.slug}`}
                      className="group flex items-center justify-between rounded-lg border border-rule p-4 transition-colors hover:border-forest hover:bg-forest/5"
                    >
                      <div className="flex flex-col">
                        <span className="font-display text-lg text-ink group-hover:text-forest">
                          {topic.label}
                        </span>
                        {topic.description && (
                          <span className="mt-1 text-sm font-body text-ink-soft line-clamp-1">
                            {topic.description}
                          </span>
                        )}
                      </div>
                      {topic.status === 'coming-soon' && (
                        <span className="shrink-0 px-2 py-1 text-[10px] font-utility uppercase tracking-wider bg-ochre/20 text-ochre rounded border border-ochre/30">
                          Soon
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
