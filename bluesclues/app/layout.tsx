import type { Metadata } from "next";
import { Eczar } from "next/font/google";
import "./globals.css";

const eczar = Eczar({
  variable: "--font-eczar",  // will be used in the css file
  subsets: ["latin"], // only need english A-Z
});

export const metadata: Metadata = {
  title: "Aaron Lam",
  description: "Portfolio by Aaron",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${eczar.variable} ${eczar.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
