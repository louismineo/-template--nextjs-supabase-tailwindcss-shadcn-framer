import type { Config } from "tailwindcss";
//import { shadcnTheme } from "@shadcn/ui";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@shadcn/ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  //plugins: [shadcnTheme],
};

export default config;
