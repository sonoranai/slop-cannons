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
  title: "Slop Cannons: Rethinking Organizations for the Age of AI",
  description:
    "An indictment of the modern engineering organization and a blueprint for the compression. By engineers, for engineers.",
  openGraph: {
    title: "Slop Cannons: Rethinking Organizations for the Age of AI",
    description:
      "An indictment of the modern engineering organization and a blueprint for the compression.",
    type: "website",
    url: "https://slopcannons.com",
    siteName: "Slop Cannons",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slop Cannons: Rethinking Organizations for the Age of AI",
    description:
      "An indictment of the modern engineering organization and a blueprint for the compression.",
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
