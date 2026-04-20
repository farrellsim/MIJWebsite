/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1F3C',
          dark: '#091629',
          light: '#162d52',
          muted: '#1e3a5f',
        },
        brand: {
          DEFAULT: '#0A6EBD',
          dark: '#085fa3',
          light: '#1a7fd1',
          xlight: '#dbeeff',
        },
        'sky-accent': '#0099E6',
        'sky-pale': '#E8F6FD',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

