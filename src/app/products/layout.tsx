import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Stone Collection | Marble, Granite & Quartzite | Al Mezoon",
  description: "Explore our premium stone collection of marble, granite, quartzite, and natural stones. Each piece carefully selected for beauty, durability, and unique characteristics.",
  keywords: "marble UAE, granite Dubai, quartzite Sharjah, natural stone collection, premium stone products",
  openGraph: {
    title: "Premium Stone Collection | Marble, Granite & Quartzite | Al Mezoon",
    description: "Explore our premium stone collection of marble, granite, quartzite, and natural stones. Each piece carefully selected for beauty, durability, and unique characteristics.",
    siteName: "Al Mezoon Marbles & Granites",
    locale: "en_AE",
    type: "website",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 