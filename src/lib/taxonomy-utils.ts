/**
 * Formats a slug into a human-readable label.
 * e.g. "matter-and-states-of-matter" -> "Matter and States of Matter"
 */
export function formatSlugToLabel(slug: string): string {
  if (!slug) return '';
  return slug
    .split('-')
    .map((word, index) => {
      if (index === 0) return word.charAt(0).toUpperCase() + word.slice(1);
      const lows = ['and', 'of', 'the', 'in', 'on', 'at', 'with', 'for'];
      return lows.includes(word) ? word : word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}
