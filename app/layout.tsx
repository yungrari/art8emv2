import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Background from "@/components/background";

import "./globals.css";

const vcrOsdMono = localFont({
  src: "./fonts/VCROSDMono.woff2",
  variable: "--vcr-osd-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ART.8M",
  description:
    "ART.8M is a professional video creator and content manager specializing in unique, bold, and creative visual content for social media.",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vcrOsdMono.className} antialiased`}
      >
        <Background />
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
