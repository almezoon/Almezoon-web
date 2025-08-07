import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stone Services UAE | Kitchen Countertops, Flooring & Installation | Al Mezoon",
  description: "Complete stone services in UAE: kitchen countertops, bathroom vanities, flooring, wall cladding. Expert fabrication and installation by Al Mezoon - 25+ years experience.",
  keywords: "kitchen countertops UAE, bathroom vanities Dubai, marble flooring Sharjah, granite installation, stone fabrication services",
  openGraph: {
    title: "Stone Services UAE | Kitchen Countertops, Flooring & Installation | Al Mezoon",
    description: "Complete stone services in UAE: kitchen countertops, bathroom vanities, flooring, wall cladding. Expert fabrication and installation by Al Mezoon - 25+ years experience.",
    siteName: "Al Mezoon Marbles & Granites",
    locale: "en_AE",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 