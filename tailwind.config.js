/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        ui: {
          blue: '#1A202C',
          white: '#EDEEEE',
          green: {
            high: '#ADFF2F',
            low: '#68D391'
          }
        }
      }
    },
  },
  plugins: [],
}
