/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020817",
        "blue-glow": "#3b82f6",
        "cyan-glow": "#06b6d4",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glitch1: {
          '0%, 100%': { transform: 'translate(0)', clipPath: 'inset(0 0 100% 0)' },
          '20%': { transform: 'translate(-3px, 2px)', clipPath: 'inset(20% 0 60% 0)' },
          '40%': { transform: 'translate(3px, -2px)', clipPath: 'inset(60% 0 20% 0)' },
          '60%': { transform: 'translate(-2px, 1px)', clipPath: 'inset(80% 0 5% 0)' },
          '80%': { transform: 'translate(2px, -1px)', clipPath: 'inset(5% 0 80% 0)' },
        },
        glitch2: {
          '0%, 100%': { transform: 'translate(0)', clipPath: 'inset(0 0 100% 0)' },
          '20%': { transform: 'translate(3px, -2px)', clipPath: 'inset(40% 0 40% 0)' },
          '40%': { transform: 'translate(-3px, 2px)', clipPath: 'inset(10% 0 70% 0)' },
          '60%': { transform: 'translate(2px, 1px)', clipPath: 'inset(70% 0 10% 0)' },
          '80%': { transform: 'translate(-2px, -1px)', clipPath: 'inset(30% 0 50% 0)' },
        },
        pulse_slow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(59, 130, 246, 0.5)' },
          '50%': { borderColor: 'rgba(6, 182, 212, 0.9)' },
        },
        spinslow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 300ms ease-in forwards',
        spinslow: 'spin 60s linear infinite',
        glitch1: 'glitch1 3s infinite steps(1)',
        glitch2: 'glitch2 3s infinite steps(1)',
        pulse_slow: 'pulse_slow 3s ease-in-out infinite',
        scan: 'scan 8s linear infinite',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        borderGlow: 'borderGlow 2s ease-in-out infinite',
        matrix: 'matrix 10s linear infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "blue-grid": "linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px)",
        "shimmer-blue": "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)",
      },
    },
  },
  plugins: [],
};
