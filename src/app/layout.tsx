import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SLOP CANNONS",
  description:
    "Most engineering orgs are built to explain work, not to do it. A blueprint for putting the people who understand the problem in the builder\u2019s seat.",
  authors: [{ name: "Jason Neill", url: "https://www.linkedin.com/in/jasonneill/" }],
  openGraph: {
    title: "SLOP CANNONS — Rethinking Organizations for the Age of AI",
    description:
      "Most engineering orgs are built to explain work, not to do it. A blueprint for putting the people who understand the problem in the builder\u2019s seat.",
    type: "article",
    url: "https://slopcannons.com",
    siteName: "Slop Cannons",
    authors: ["Jason Neill"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SLOP CANNONS",
    description:
      "Most engineering orgs are built to explain work, not to do it. A blueprint for putting the people who understand the problem in the builder\u2019s seat.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
