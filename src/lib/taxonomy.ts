import fs from 'node:fs';
import path from 'node:path';

const TAXONOMY_PATH = path.join(process.cwd(), 'content', 'taxonomy.json');

interface TaxonomyEntry {
  label: string;
  description?: string;
  phase?: number;
  status?: 'active' | 'coming-soon';
}

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

export function getCategoryPhase(category: string): number | undefined {
  const registry = loadRegistry();
  return registry[category]?.phase;
}

export function getAllTaxonomy() {
  const registry = loadRegistry();
  return Object.entries(registry).map(([slug, entry]) => ({
    slug,
    ...entry,
  }));
}

export const ALL_GLOSSARY_LETTERS: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
