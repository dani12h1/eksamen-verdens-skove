module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: { Sintony: "var(--font-sintony)" },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        orange: "#E6863B",
        hvid: "#FFFFFF",
        skrift_sort: "#454545f",
        grøn: "#507D66",
        grå: "#454545",
        lys_grå: "#F7F7F7",
        hover_orange: "#C77638",
      },
    },
  },
  plugins: [],
};
