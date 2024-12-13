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
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Pretendard', 'Arial', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        custom: '5px 5px 5px 0 rgba(0, 0, 0, 0.3)', // X: 5, Y: 5, Blur: 5, Spread: 0, Color: rgba(0, 0, 0, 0.3)
      },
    },
  },
  plugins: [],
} satisfies Config;
