/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arsenal_font: ["Arsenal", "sans-serif"],
        karla_font: ["Karla", "serif"],
      },
      colors: {
        kid_bg: "#E7E7E1",
        kid_white: "#fff",
        kid_black: "#161412",
        kid_black_bluish: "#162533",
        kid_gray: "#dddddd",
        kid_light_gray: "#eeeeee",
      },
      boxShadow: {
        "3xl": "0 5px 20px rgb(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
