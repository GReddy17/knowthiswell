import fs from 'node:fs';
import path from 'node:path';
export { formatSlugToLabel } from './taxonomy-utils';
const TAXONOMY_PATH = path.join(process.cwd(), 'content', 'taxonomy.json');

interface TaxonomyEntry {
  label: string;
  description?: string;
  focusGroup?: string;
  phase?: number;
  status?: 'active' | 'coming-soon';
  comingSoonPreview?: string[];
}

/** Homepage-only grouping of categories by what they're actually for,
 *  so "Explore by Focus" doesn't have to show all 43 categories with
 *  equal weight. Order here is display order. Purely a display grouping
 *  on top of the real categories — not a new taxonomy layer, no new URLs.
 *  See `seo-committee/SKILL.md` §0.6 for why a real Domain layer was
 *  rejected. */
export const FOCUS_GROUPS: { id: string; label: string; description: string }[] = [
  { id: 'foundations', label: 'Foundations', description: 'The building blocks — how the world works, measured and explained plainly.' },
  { id: 'world-society', label: 'World & Society', description: 'Geography, history, and the civic and cultural context around us.' },
  { id: 'money-career', label: 'Money & Career', description: 'The financial and professional fundamentals no one formally teaches.' },
  { id: 'health-home', label: 'Health & Home', description: 'Your body and your living space — the maintenance basics of both.' },
  { id: 'technology', label: 'Technology', description: 'How computers, devices, and the systems behind them actually work.' },
  { id: 'culture-leisure', label: 'Culture & Leisure', description: 'Arts, entertainment, sport, and the things people do for their own sake.' },
];

interface TaxonomyRegistry {
  [category: string]: TaxonomyEntry;
}

let _registry: TaxonomyRegistry | null = null;

function loadRegistry(): TaxonomyRegistry {
  if (_registry) return _registry;
  if (!fs.existsSync(TAXONOMY_PATH)) {
    _registry = {};
    return _registry;
  }
  _registry = JSON.parse(fs.readFileSync(TAXONOMY_PATH, 'utf-8'));
  return _registry!;
}

/** Human-readable label for a category. Falls back to the raw folder
 *  name (e.g. "test-folder") if it has no entry in taxonomy.json yet —
 *  a new topic folder should never crash a page, just look plain until
 *  someone adds a proper label. */

export function getCategoryLabel(category: string): string {
  const registry = loadRegistry();
  const label = registry[category]?.label ?? category;
  return label.replace(/-/g, ' ');
}

export function getCategoryDescription(category: string): string | undefined {
  const registry = loadRegistry();
  return registry[category]?.description;
}

export function getCategoryStatus(category: string): 'active' | 'coming-soon' | undefined {
  const registry = loadRegistry();
  return registry[category]?.status;
}

export function getCategoryFocusGroup(category: string): string | undefined {
  const registry = loadRegistry();
  return registry[category]?.focusGroup;
}

export function getCategoryPhase(category: string): number | undefined {
  const registry = loadRegistry();
  return registry[category]?.phase;
}

/** Short list of what's planned for a not-yet-written category, shown on
 *  its empty-state hub page instead of a generic "coming soon" message.
 *  Only populated for near-term (Phase 2-3) categories today. */
export function getCategoryComingSoonPreview(category: string): string[] | undefined {
  const registry = loadRegistry();
  return registry[category]?.comingSoonPreview;
}

export function getAllTaxonomy() {
  const registry = loadRegistry();
  return Object.entries(registry).map(([slug, entry]) => ({
    slug,
    ...entry,
  }));
}

/** Category slugs in the order they're declared in taxonomy.json — that
 *  declaration order IS the basic-to-advanced numbering (01-27) the
 *  content is authored under, so anywhere categories are listed should
 *  sort by this instead of alphabetically. */
export function getCategoryOrder(): string[] {
  return Object.keys(loadRegistry());
}

export const ALL_GLOSSARY_LETTERS: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
