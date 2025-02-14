import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Adjust this based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#F6F1EB', // Your custom background color
        'custom-accent': '#DAC0A3', // Your custom accent color
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Add the scrollbar plugin
  ],
};

export default config;