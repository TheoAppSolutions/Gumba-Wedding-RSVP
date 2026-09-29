import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Dancing_Script } from "next/font/google";
import "./globals.css";
const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-serif" });
const sans = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sans" });
const script = Dancing_Script({ subsets: ["latin"], variable: "--font-script" });
export const metadata: Metadata = { title: "Raymund & Vanessa — RSVP", description: "Join us in celebrating the wedding of Raymund & Vanessa." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={`${serif.variable} ${sans.variable} ${script.variable}`}>{children}</body></html>);
}
