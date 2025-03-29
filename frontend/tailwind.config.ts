import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#354259',    // Deep navy
        'accent': '#CDC2AE',     // Warm taupe
        'background': '#FAF0E6', // Light linen
        'text': '#B2B2B2',      // Soft gray
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Add the scrollbar plugin
  ],
};

export default config;