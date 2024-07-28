import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        Oswald: ["Oswald", "sans serif"],
        Inter: ["Inter"],
        Poppins: ["Poppins"],
      },
      backgroundImage: {
        heroLight:
          "url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')",
        heroDark:
          "url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')",
      },
      colors: {
        primary: "#c9189d",
      },
    },
  },
  plugins: [],
};
export default config;
