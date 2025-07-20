import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#154930',      // Mid green
        background: '#ECE3CE',   // Light beige
        text: '#3A4D39',         // Dark green
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],                // For body
        serif: ['Playfair Display', 'serif'],         // For headings
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Custom scrollbar plugin
  ],
};

export default config;
