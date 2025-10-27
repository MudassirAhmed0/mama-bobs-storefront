import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Providers from "@/providers";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/layout/Index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mama Bobs",
  description: "Bringing Good Old-Fashioned Bad Taste Back to the Masses!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
        >
          <Toaster />

          {/* <Layout> */}
          {children}
          {/* </Layout> */}
        </body>
      </Providers>
    </html>
  );
}
