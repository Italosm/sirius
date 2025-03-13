import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sanity/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-secondary)',
        'primary-contrast': 'var(--color-primary-contrast)',
        secondary: 'var(--color-secondary)',
        'secondary-contrast': 'var(--color-secondary-contrast)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        paper: 'var(--color-paper)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        'text-error': 'var(--color-text-error)',
        'button-primary': 'var(--color-button-primary)',
        'button-primary-hover': 'var(--color-button-primary-hover)',
        'button-secondary': 'var(--color-button-secondary)',
        'button-secondary-hover': 'var(--color-button-secondary-hover)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        border: 'var(--color-border)',
        overlay: 'var(--color-overlay)',
      },
    },
  },
  plugins: [],
};

export default config;
