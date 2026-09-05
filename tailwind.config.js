/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './lib/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7F0',
        sand: '#F3EAD9',
        charcoal: '#2B2A28',
        teal: {
          DEFAULT: '#1F6E5C',
          dark: '#164F42',
          light: '#3E9B84',
        },
        marigold: '#F2A93B',
        clay: '#E8DFD1',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(31, 110, 92, 0.18)',
        card: '0 4px 24px -8px rgba(43, 42, 40, 0.12)',
        lift: '0 20px 50px -16px rgba(31, 110, 92, 0.28)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
