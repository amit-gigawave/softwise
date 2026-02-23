import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { UnicornLoader } from "@/components/UnicornLoader";

const fontPrimary = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
});

const fontHeading = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
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
      <body className={`${fontPrimary.variable} ${fontHeading.variable} font-sans antialiased bg-black text-white`}>
        <Navbar />
        {children}
        <UnicornLoader />
      </body>
    </html>
  );
}
