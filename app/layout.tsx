import "./globals.css";
import { Inter, Oxanium } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SponsorStrip from "@/components/SponsorStrip";

import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oxanium = Oxanium({ subsets: ["latin"], variable: "--font-oxanium" });

export const metadata = {
  title: {
    default: "AConversationAboutAI.com",
    template: "%s | AConversationAboutAI.com",
  },
  description: "Daily AI news, tools, and insights — all in one place.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oxanium.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <SponsorStrip />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
