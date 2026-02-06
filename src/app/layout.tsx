import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:["300", "400", "500", "600", "700",]
})

export const metadata: Metadata = {
  title: "Maylon Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}  antialiased bg-slate-900`}
      >
        <Navbar />
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}
