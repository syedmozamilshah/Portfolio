/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0A0F0D',
        'neon-green': '#00FFAB',
        'neon-blue': '#00B2FF',
        'dark-gray': '#1a1a1a',
        'light-gray': '#2a2a2a',
        'terminal-green': '#39FF14',
      },
      fontFamily: {
        'mono': ['IBM Plex Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typewriter': 'typewriter 3s steps(11) 1s 1 normal both',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        glow: {
          '0%': { 
            'box-shadow': '0 0 5px #00FFAB, 0 0 10px #00FFAB, 0 0 15px #00FFAB',
          },
          '100%': { 
            'box-shadow': '0 0 10px #00FFAB, 0 0 20px #00FFAB, 0 0 30px #00FFAB',
          },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

