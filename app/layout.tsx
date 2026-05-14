import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kletap Labs — AI-Powered Systems for Modern Businesses",
  description:
    "Kletap Labs is a venture studio building AI automation workflows, intelligent tools, and SaaS products that help businesses operate faster, smarter, and leaner.",
  keywords: [
    "AI automation",
    "venture studio",
    "Patelligence AI",
    "VetFlow AI",
    "BRRRBoard",
    "FamKnows",
    "AI workflows",
    "SaaS for small business",
  ],
  authors: [{ name: "Kletap Labs" }],
  openGraph: {
    title: "Kletap Labs — AI-Powered Systems for Modern Businesses",
    description:
      "A venture studio building AI automation, intelligent tools, and niche SaaS products.",
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
