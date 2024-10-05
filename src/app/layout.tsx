import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Inter, Playfair_Display } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Kenzie Evan",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} ${playfairDisplay.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
