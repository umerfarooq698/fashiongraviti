/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Syne"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        noir: {
          DEFAULT: '#09090b',
          pure: '#000000',
          elevated: '#111115',
          card: '#15151a',
          border: '#24242e',
          subtle: '#3b3b48',
        },
        alabaster: {
          DEFAULT: '#faf8f5',
          pure: '#ffffff',
          elevated: '#f3eee6',
          card: '#eae3d6',
          border: '#dcd3c2',
          subtle: '#b0a491',
        },
        crimson: {
          DEFAULT: '#8f121d',
          dark: '#630c14',
          light: '#ba1b29',
        },
        gold: {
          DEFAULT: '#c59d54',
          light: '#e1bf7b',
          dark: '#9d7734',
        },
        sage: {
          DEFAULT: '#5d6b5c',
          light: '#859684',
        }
      },
      letterSpacing: {
        'ultra-wide': '0.28em',
        'mega-wide': '0.45em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.35 },
        }
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 22s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
