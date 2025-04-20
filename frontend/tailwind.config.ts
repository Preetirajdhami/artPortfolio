import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4F6F52',    // Deep green
        'accent': '#CDC2AE',     // Warm taupe
        'background': '#ECE3CE', // Light linen
        'text': '#3A4D39',      // Soft gray
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Add the scrollbar plugin
  ],
};

export default config;