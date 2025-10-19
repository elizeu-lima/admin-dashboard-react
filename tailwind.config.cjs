// Tailwind v2 config - MODO CLÁSSICO (não JIT)
module.exports = {
  // REMOVIDO mode: 'jit' - usando modo clássico
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    },
  },
  // CRÍTICO: No Tailwind v2 modo clássico, habilitar variantes dark
  variants: {
    extend: {
      backgroundColor: ['dark', 'hover', 'focus'],
      textColor: ['dark', 'hover', 'focus'],
      borderColor: ['dark', 'hover', 'focus'],
      gradientColorStops: ['dark'],
      placeholderColor: ['dark'],
      divideColor: ['dark'],
      ringColor: ['dark', 'focus'],
      ringOffsetColor: ['dark'],
      ringOpacity: ['dark'],
      boxShadow: ['dark'],
    }
  },
  plugins: [],
}