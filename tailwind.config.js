/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-dark': '#0a0a1a',
        'cosmic-darker': '#050510',
        'neon-cyan': '#00f0ff',
        'neon-blue': '#0066ff',
        'neon-pink': '#ff00ff',
        'neon-purple': '#8b00ff',
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(90deg, #00f0ff 0%, #0066ff 25%, #ff00ff 75%, #8b00ff 100%)',
        'gradient-neon-vertical': 'linear-gradient(180deg, #00f0ff 0%, #0066ff 25%, #ff00ff 75%, #8b00ff 100%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3)',
        'neon-pink': '0 0 20px rgba(255, 0, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.3)',
        'neon-purple': '0 0 20px rgba(139, 0, 255, 0.5), 0 0 40px rgba(139, 0, 255, 0.3)',
        'neon-glow': '0 0 30px rgba(0, 240, 255, 0.4), 0 0 60px rgba(255, 0, 255, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.8', filter: 'brightness(1)' },
          '100%': { opacity: '1', filter: 'brightness(1.2)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

