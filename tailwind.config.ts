import type { Config } from "tailwindcss";
import { COLORS } from "./lib/colors";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: { extend: { colors: { dusty: COLORS }, fontFamily: { serif: ["var(--font-serif)"], sans: ["var(--font-sans)"], script: ["var(--font-script)"] } } },
  plugins: [],
};
export default config;
