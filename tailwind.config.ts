import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#484385",
        tint: "#b179d0",
        secondary: "#f25c54",
        "navy-blue": "#413e65",
        // background: "#ffffff",
        // foreground: "#000000",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
