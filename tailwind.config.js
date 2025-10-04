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

  	extend: {
      colors: {
        primary: "#FF6363",
        secondary: "#3A86FF",
        accent: "#8338EC",
        border: "#E0E0E0",
      },
      boxShadow: {
        custom: "0px 4px 54px 10px rgba(18, 19, 21, 0.06)",
      },
  	},
  },
  plugins: [require("tailwindcss-animate")],
}
