// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mechsuit: ["Mechsuit"],
        sans: ["Outfit", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      colors: {
        primary: "#FF7046",
        secondary: "#3ABFBC",
        orangeBrand: "#FF7046",
        blueBrand: "#3ABFBC",
      },
    },
  },
  plugins: [],
};
