/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // Tilføj dine globale skrifttyper her
        custom: ["Your Font", "sans-serif"],
      },
      colors: {
        // Tilføj dine globale farver her
        orange: "#E6863B",
        hvid: "#FFFFFF",
        skrift_sort: "#454545f",
        grøn: "#507D66",
        grå: "#454545",
        hover_orange: "#C77638",
      },
    },
  },
  plugins: [],
};
