/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Color-Green-Light": 'hsl(148, 38%, 91%)',
        "Color-Green-Medium": 'hsl(169, 82%, 27%)',
        "Color-Red": 'hsl(0, 66%, 54%)',
        "Color-White": 'hsl(0, 0%, 100%)',
        "Color-Grey-Medium": 'hsl(186, 15%, 59%)',
        "Color-Grey-Dark": 'hsl(187, 24%, 22%)',
      },
      fontFamily: {
        "Karla" : ["Karla", "sans-serif"]
      }
    },
  },
  plugins: [],
}

