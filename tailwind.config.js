// tailwind.config.js

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        h1: "2.5rem", // Ændrer størrelsen af h1
        h2: "2.5rem", // Ændrer størrelsen af h2
        h3: "2.0rem", // Ændrer størrelsen af h3
      },
      fontWeight: {
        h1: "bold", // Gør h1 fed
      },
      textColor: {
        h1: "#3490dc", // Ændrer tekstfarven for h1
      },
    },
  },
  plugins: [],
};
