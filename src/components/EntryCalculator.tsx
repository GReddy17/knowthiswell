'use client';

import { useMemo, useState } from 'react';

export interface CalcField {
  key: string;
  label: string;
  defaultValue: number;
  step?: number;
  suffix?: string; // e.g. "%" or "yrs", shown as a hint, not enforced
}

/**
 * Named formula registry. A `compute` function prop CANNOT be passed from
 * an MDX post body (a Server Component) into this Client Component —
 * React strips functions at the RSC serialization boundary, which fails
 * the static export build entirely. Authors instead select a formula by
 * name; add new formulas here as new calculator types are needed across
 * topics (loan amortization, BMI, rule of 72, etc.).
 */
const FORMULAS: Record<string, (values: Record<string, number>) => number> = {
  compoundGrowth: (v) => v.principal * Math.pow(1 + v.rate / 100, v.years),
  simpleInterest: (v) => v.principal * (1 + (v.rate / 100) * v.years),
  ruleOf72: (v) => 72 / v.rate, // years to double
  loanMonthlyPayment: (v) => {
    const monthlyRate = v.rate / 100 / 12;
    const numPayments = v.years * 12;
    if (monthlyRate === 0) return v.principal / numPayments;
    return (
      (v.principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    );
  },
  estimateBoilingPointFromAltitude: (v) => {
    // Approximate formula: boiling point drops by ~1C every 300m
    return 100 - (v.altitudeMeters / 285);
  },
};

interface EntryCalculatorProps {
  title: string;
  fields: CalcField[];
  resultLabel: string;
  formula: keyof typeof FORMULAS;
  formatResult?: 'currency' | 'years' | 'number';
}

function formatValue(v: number, format: EntryCalculatorProps['formatResult']): string {
  if (Number.isNaN(v) || !Number.isFinite(v)) return '—';
  if (format === 'years') return `${v.toFixed(1)} years`;
  if (format === 'number') return v.toLocaleString('en-US', { maximumFractionDigits: 2 });
  return '$' + Math.round(v).toLocaleString('en-US');
}

/**
 * Generic interactive calculator. Each entry selects a named formula
 * (see FORMULAS above) and its own field set, so the same component
 * serves compound growth, loan payments, rule-of-72, etc. Pure
 * client-side — no network call, safe for static export.
 */
export function EntryCalculator({
  title,
  fields,
  resultLabel,
  formula,
  formatResult = 'currency',
}: EntryCalculatorProps) {
  const normalizedFields = Array.isArray(fields) ? fields :
    typeof fields === 'string' ? JSON.parse(fields) : [];

  if (normalizedFields.length === 0) return null;

  const [values, setValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(normalizedFields.map((f: CalcField) => [f.key, f.defaultValue]))
  );

  const result = useMemo(() => {
    const compute = FORMULAS[formula];
    if (!compute) return NaN;
    try {
      return compute(values);
    } catch {
      return NaN;
    }
  }, [values, formula]);

  return (
    <div className="my-5 border border-rule bg-white p-5 rounded-lg">
      <div className="mb-3 font-utility text-xs uppercase tracking-wider text-ink-soft">
        {title}
      </div>

      <div className="mb-4 flex flex-wrap gap-4">
        {normalizedFields.map((f: CalcField) => (
          <div key={f.key} className="min-w-[130px] flex-1">
            <label
              htmlFor={f.key}
              className="mb-1.5 block font-utility text-xs text-ink-soft"
            >
              {f.label}{f.suffix ? ` (${f.suffix})` : ''}
            </label>
            <input
              id={f.key}
              type="number"
              step={f.step ?? 1}
              value={values[f.key]}
              onChange={(e) =>
                setValues((v) => ({ ...v, [f.key]: parseFloat(e.target.value) || 0 }))
              }
              className="w-full rounded-[3px] border border-rule bg-paper px-2.5 py-2 font-body text-base text-ink focus:border-forest focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-forest"
            />
          </div>
        ))}
      </div>

      <div className="border-t border-rule pt-3.5">
        <span className="mb-1.5 block font-utility text-[11px] uppercase tracking-wide text-ink-soft">
          {resultLabel}
        </span>
        <span className="font-display text-[28px] text-forest">
          {formatValue(result, formatResult)}
        </span>
      </div>
    </div>
  );
}
