import { FC, ReactNode } from "react";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const generalFont = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nur Muhammad Arief Kurniawan",
  description: "This is my portofolio website",
};

interface Prop {
  children: ReactNode;
}

const RootLayout: FC<Prop> = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={generalFont.className}>{children}</body>
    </html>
  )
};

export default RootLayout;
