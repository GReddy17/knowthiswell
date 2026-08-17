import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        forest: 'var(--forest)',
        'forest-dark': 'var(--forest-dark)',
        'forest-tint': 'var(--forest-tint)',
        ochre: 'var(--ochre)',
        brick: 'var(--brick)',
        'brick-tint': 'var(--brick-tint)',
        rule: 'var(--rule)',
        'rule-soft': 'var(--rule-soft)',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'ui-serif', 'serif'],
        body: ['var(--font-newsreader)', 'ui-serif', 'serif'],
        utility: ['var(--font-public-sans)', 'ui-sans-serif', 'system-ui'],
      },
      maxWidth: {
        measure: '68ch',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--ink)',
            '--tw-prose-links': 'var(--forest)',
            maxWidth: '68ch',
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
