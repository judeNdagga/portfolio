import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Jude Ndagga",
  description: "Jude's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
