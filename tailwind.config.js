/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#070b14',
        elev: '#0c1220',
        elev2: '#111a2c',
        ink: '#eaf1fb',
        inkdim: '#a7b4c8',
        inkmute: '#6a788f',
        background: '#070b14',
        surface: 'rgba(255, 255, 255, 0.05)',
        surfaceHover: 'rgba(255, 255, 255, 0.08)',
        primary: '#38bdf8',
        secondary: '#7c7bf7',
        accent: {
          DEFAULT: '#38bdf8',
          2: '#7c7bf7',
          3: '#2dd4bf',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'signal': 'linear-gradient(115deg, #38bdf8 0%, #7c7bf7 100%)',
        'glass': 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
      boxShadow: {
        'signal': '0 18px 44px -18px rgba(56,189,248,0.45)',
        'glow': '0 0 30px rgba(56,189,248,0.35)',
      },
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.1)',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'float-slow': 'floatY 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
