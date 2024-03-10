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
    <html lang="en">
      <body className={generalFont.className}>{children}</body>
    </html>
  )
};

export default RootLayout;

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
