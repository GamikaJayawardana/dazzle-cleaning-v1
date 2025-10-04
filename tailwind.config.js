/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    container: {
      center:true,
      padding: "15px"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px"
    },
    fontFamily:{
      primary: ['var(--font-montserrat)'],
      secondary: ['var(--font-open-sans)'],
    },

  	extend: {
      colors: {
        primary: "#000B58",
        secondary: "#00AEEF",
        accent: "#00AEEF",
        border: "#E0E0E0",
      },
      boxShadow: {
        custom: "0px 4px 54px 10px rgba(18, 19, 21, 0.06)",
      },
      backgroundImage:{
        hero: "url(/assets/img/hero/bg.jpg)"
      }
  	},
  },
  plugins: [require("tailwindcss-animate")],
}
