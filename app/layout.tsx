import type { Metadata } from "next";

import { Inter } from "next/font/google";
import StarsCanvas from "@/components/main/StarBackground";

import Navbar from "@/components/main/Navbar";
import { Providers } from "@/providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Space Portfólio",
  description: "This is my space portfolio"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />

        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}