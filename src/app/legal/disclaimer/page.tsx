export const metadata = { title: 'Content Disclaimer' };

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-measure px-5 py-14 font-body text-ink md:px-10">
      <h1 className="mb-6 font-display text-4xl">Content Disclaimer</h1>

      <p className="mb-6 text-ink-soft">
        KnowThisWell publishes reference content researched from public sources — encyclopedic references,
        government and institutional data, academic and news publications — and drafted with the help of
        AI-assisted research and writing tools, then edited by our team before publishing. That process catches most
        mistakes, but not all of them: a source can be outdated, an AI drafting step can introduce an inaccuracy, or
        an entry can simply get something wrong.
      </p>

      <h2 className="mb-3 mt-10 font-display text-2xl">No warranty, no professional advice</h2>
      <p className="mb-6 text-ink-soft">
        All content on this site is provided for general informational purposes only, &quot;as is,&quot; without
        warranty of any kind, express or implied, including as to accuracy, completeness, or fitness for a
        particular purpose. Nothing here is professional medical, legal, financial, or safety advice, and none of it
        should replace consulting a qualified professional about your specific situation. Health-related entries in
        particular are written for general literacy, not as a substitute for a doctor, pharmacist, or emergency
        services.
      </p>

      <h2 className="mb-3 mt-10 font-display text-2xl">Limitation of liability</h2>
      <p className="mb-6 text-ink-soft">
        To the fullest extent permitted by law, KnowThisWell and its authors disclaim all liability for any loss,
        injury, or damage arising from reliance on information found on this site. Use it as a starting point,
        check the sources cited at the bottom of each entry, and consult a qualified professional before acting on
        anything that matters.
      </p>

      <h2 className="mb-3 mt-10 font-display text-2xl">Tell us if something&apos;s wrong</h2>
      <p className="mb-6 text-ink-soft">
        Every entry has a feedback form at the bottom for reporting an inaccuracy or requesting a topic we haven&apos;t
        covered yet. We review genuine submissions and correct real errors — each entry&apos;s &quot;last reviewed&quot;
        date updates whenever we act on one.
      </p>

      <p className="mt-10 text-sm text-ink-soft">
        <strong>NOTE:</strong> this page is a plain-language disclaimer, not a substitute for legal advice specific
        to this site&apos;s operation — it should be reviewed by a lawyer if that level of assurance is needed.
      </p>
    </div>
  );
}
