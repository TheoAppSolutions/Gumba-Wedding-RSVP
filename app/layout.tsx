import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Dancing_Script } from "next/font/google";
import "./globals.css";
const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-serif" });
const sans = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sans" });
const script = Dancing_Script({ subsets: ["latin"], variable: "--font-script" });
export const metadata: Metadata = { title: "Raymund’s 60th Birthday — RSVP", description: "Join us for Raymund’s 60th birthday on December 21, 2026 in Tacloban City." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={`${serif.variable} ${sans.variable} ${script.variable}`}>{children}</body></html>);
}
