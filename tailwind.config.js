/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.*",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#adb5bd',
        'light-gray': '#F4F7FA',
        'orange': '#ED762F',
        'blue': '#4994EC',
        'light-blue': '#F4FCFF',
      },
      backgroundImage: {
        'plane': "url('/src/assets/img/plane-icon.svg')",
        'check': "url('/src/assets/img/check-icon.svg')",
        'gray-linear': 'linear-gradient(90deg, #eff3f8 8%, #e0e4e9 18%, #eff3f8 33%)',
      },
      keyframes: {
        line: {
          '0%': {
            left: '-30%',
          },
          '100%': { 
            left: '100%',
          },
        }
      },
      animation: {
        line: 'line 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

