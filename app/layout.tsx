import type { Metadata } from "next";

import { Plus_Jakarta_Sans, Outfit, Caveat } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/Navbar";

import { Footer } from "@/components/Footer";
import { UnicornLoader } from "@/components/UnicornLoader";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const fontPrimary = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
});


const fontHeading = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

const fontHandwritten = Caveat({
  subsets: ["latin"],
  variable: "--font-handwritten",
});

export const metadata: Metadata = {
  title: "Agentic AI - Custom Solutions",
  description: "Custom Agentic AI Solutions for Intelligent Business Automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${fontPrimary.variable} ${fontHeading.variable} ${fontHandwritten.variable} font-sans antialiased bg-black text-white relative`}>
        <ScrollProgress />
        <div className="noise-overlay" />
        <Navbar />
        {children}
        <Footer />
        <UnicornLoader />
      </body>
    </html>
  );
}



