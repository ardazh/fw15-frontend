/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  daisyui: {
    themes: [
      {
        defaultTheme: {
          "primary": "#4c3f91",
          "secondary": "#373a42",
        }
      }
    ]
  },
  plugins: [
    require("daisyui"),
    require('tailwind-scrollbar-hide')
  ]
}