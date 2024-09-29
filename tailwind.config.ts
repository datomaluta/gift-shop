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
      backgroundImage: {
        birthday:
          "linear-gradient(90deg, rgba(72,67,133,0.7315301120448179) 0%, rgba(242,92,84,0.4150035014005602) 100%), url('/images/occasions/birthday.jpg')",
        anniversary:
          "linear-gradient(90deg, rgba(72,67,133,0.7315301120448179) 0%, rgba(242,92,84,0.4150035014005602) 100%), url('/images/occasions/anniversary.jpg')",
        graduation:
          "linear-gradient(90deg, rgba(72,67,133,0.7315301120448179) 0%, rgba(242,92,84,0.4150035014005602) 100%), url('/images/occasions/graduation.jpg')",
        holidays:
          "linear-gradient(90deg, rgba(72,67,133,0.7315301120448179) 0%, rgba(242,92,84,0.4150035014005602) 100%), url('/images/occasions/holidays.jpg')",
        "hover-grad":
          "linear-gradient(90deg, rgba(0,0,0,0.7315301120448179) 0%, rgba(124,124,124,0.4150035014005602) 100%)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
