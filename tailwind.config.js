// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme'); // Required for extending the font family

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // The 'extend' object is where all our customizations live.
    extend: {
      // For the `next/font` optimization from Phase 3
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      
      // For the consistent spacing system from Phase 2
      spacing: {
        'section-sm': '4rem',
        'section-md': '6rem',
        'section-lg': '8rem',
      },
      
      // For our custom color palette
      colors: {
        'light-bg': '#F8F9FA',
        'light-text': '#212529',
        'light-card': '#FFFFFF',
        'light-accent': '#007BFF',
        'dark-bg': '#1A1A1A',
        'dark-text': '#E9ECEF',
        'dark-card': '#2C2C2C',
        'dark-accent': '#4D94FF',
        'dark-subtle': '#6c757d',
      },
    },
  },
  
  // For the typography plugin from Phase 2
  plugins: [require('@tailwindcss/typography')],
};
