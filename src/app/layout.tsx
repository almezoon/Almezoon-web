import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Mezoon Marbles & Granites - Premium Stone Solutions in UAE",
  description: "Leading UAE-based supplier, fabricator, and installer of marble, granite, quartz, and porcelain. Trusted for over 25 years to deliver timeless stone craftsmanship in Sharjah.",
  keywords: "marble, granite, quartz, porcelain, kitchen countertops, fabrication, installation, Sharjah, UAE, Al Mezoon",
  openGraph: {
    title: "Al Mezoon Marbles & Granites - Premium Stone Solutions",
    description: "25+ years of excellence in natural stone industry. Premium marble, granite, and quartz solutions across the UAE.",
    siteName: "Al Mezoon Marbles & Granites",
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
