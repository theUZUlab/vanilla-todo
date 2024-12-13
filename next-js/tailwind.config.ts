import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#333333',
        'medium-gray': '#4F4F4F',
        'light-gray': '#BDBDBD',
        'soft-gray': '#E0E0E0',
        'off-white': '#F2F2F2',
      },
      fontFamily: {
        sans: ['Pretendard', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
