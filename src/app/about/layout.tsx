import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Al Mezoon | 25+ Years of Stone Excellence in UAE",
  description: "Discover Al Mezoon's story - UAE's leading marble and granite specialist since 2000. 25+ years of experience, 3000+ annual projects, and premium stone craftsmanship in Sharjah.",
  keywords: "Al Mezoon history, marble company UAE, granite specialists Sharjah, stone fabrication experience, UAE marble suppliers",
  openGraph: {
    title: "About Al Mezoon | 25+ Years of Stone Excellence in UAE",
    description: "Discover Al Mezoon's story - UAE's leading marble and granite specialist since 2000. 25+ years of experience, 3000+ annual projects, and premium stone craftsmanship in Sharjah.",
    siteName: "Al Mezoon Marbles & Granites",
    locale: "en_AE",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 