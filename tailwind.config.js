/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Primary — Deep Forest Green
        forest: {
          DEFAULT: '#1B4332',
          900: '#0F2A20',
          700: '#1B4332',
          600: '#2D6A4F',
          500: '#40916C',
          400: '#52796F',
          300: '#74A892',
        },
        // Secondary — Mountain Blue
        mountain: {
          DEFAULT: '#1D3557',
          900: '#152844',
          700: '#1D3557',
          500: '#457B9D',
          300: '#7FA8C9',
        },
        // Accent — Golden Yellow
        gold: {
          DEFAULT: '#E0A82E',
          600: '#C8941E',
          500: '#E0A82E',
          400: '#EBC067',
          200: '#F4E1B0',
        },
        // Background — Soft White / Mist
        mist: {
          DEFAULT: '#F7F8F5',
          100: '#FBFCFA',
          200: '#EFF2ED',
          300: '#E3E8E0',
        },
        ink: '#13201A',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(15, 42, 32, 0.18)',
        lift: '0 24px 60px -18px rgba(15, 42, 32, 0.30)',
        glass: '0 8px 32px rgba(15, 42, 32, 0.12)',
        gold: '0 12px 30px -10px rgba(224, 168, 46, 0.45)',
      },
      backgroundImage: {
        'forest-fade': 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
        'mountain-fade': 'linear-gradient(135deg, #1D3557 0%, #457B9D 100%)',
        'gold-fade': 'linear-gradient(135deg, #E0A82E 0%, #EBC067 100%)',
        'mist-radial': 'radial-gradient(1200px 600px at 50% -10%, rgba(69,123,157,0.18), transparent)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
}
