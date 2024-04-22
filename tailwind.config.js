/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "515px",
        md: "700px",
        lg: "940px",
        xl: "1115px",
        "2xl": "1300px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        Cairo: ["Cairo", "sans-serif"],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        error: "var(--error)",
      },
    },
    screens: {
      xl: { max: "1200px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "560px" },
      xs: { max: "400px" },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
