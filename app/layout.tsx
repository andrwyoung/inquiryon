import type { Metadata } from "next";
import { Mulish, Chivo, Rajdhani } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const chivo = Chivo({
  variable: "--font-header",
  subsets: ["latin"],
});

const mulish = Mulish({
  variable: "--font-body",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: "600",
});

export const metadata: Metadata = {
  title: "Inquiryon",
  description: "AI that asks questions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} ${rajdhani.variable} ${chivo.variable} antialiased`}
      >
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
