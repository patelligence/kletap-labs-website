import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patelligence AI — AI Operations for Small Businesses",
  description:
    "Patelligence AI automates customer follow-up, scheduling, intake, reviews, and admin workflows for small businesses. Built by Kletap Labs.",
  keywords: [
    "Patelligence AI",
    "AI automation",
    "small business AI",
    "missed call text back",
    "appointment scheduling AI",
    "lead follow-up automation",
    "AI customer support",
    "Kletap Labs",
  ],
  authors: [{ name: "Patelligence AI" }],
  openGraph: {
    title: "Patelligence AI — AI Operations for Small Businesses",
    description:
      "Automate customer follow-up, scheduling, intake, reviews, and admin work with Patelligence AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
