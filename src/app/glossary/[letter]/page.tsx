import Link from 'next/link';
import { getTermsByLetter, ALL_GLOSSARY_LETTERS } from '@/lib/content';

interface PageProps {
  params: Promise<{ letter: string }>;
}

export async function generateStaticParams() {
  return ALL_GLOSSARY_LETTERS.map((letter) => ({ letter }));
}

export default async function GlossaryLetterPage({ params }: PageProps) {
  const { letter: letterParam } = await params;
  const letter = letterParam.toUpperCase();
  const terms = getTermsByLetter(letterParam); // [{ term, slug, category }]

  return (
    <div className="mx-auto max-w-[820px] px-5 py-14 md:px-10">
      <div className="mb-2 font-utility text-[12.5px] uppercase tracking-[0.1em] text-forest">
        Glossary
      </div>
      <h1 className="mb-8 font-display text-[2.5rem] text-ink">{letter}</h1>

      {/* A–Z jump nav */}
      <nav
        aria-label="Jump to letter"
        className="mb-10 flex flex-wrap gap-1 border-b border-rule pb-6"
      >
        {ALL_GLOSSARY_LETTERS.map((l) => (
          <Link
            key={l}
            href={`/glossary/${l}`}
            className={`h-8 w-8 rounded-full text-center font-utility text-sm leading-8 ${
              l === letterParam
                ? 'bg-forest text-paper'
                : 'text-ink-soft hover:bg-rule-soft'
            }`}
          >
            {l.toUpperCase()}
          </Link>
        ))}
      </nav>

      {terms.length === 0 ? (
        <p className="font-body text-ink-soft">No entries yet under {letter}.</p>
      ) : (
        <ul className="divide-y divide-rule">
          {terms.map((t) => (
            <li key={t.slug} className="flex items-baseline justify-between gap-4 py-4">
              <Link href={`/${t.category}/${t.slug}`} className="font-body text-lg text-ink hover:text-forest">
                {t.term}
              </Link>
              <span className="whitespace-nowrap font-utility text-xs uppercase tracking-wide text-ochre">
                {t.category}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
