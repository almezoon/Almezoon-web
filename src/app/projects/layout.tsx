import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stone Projects Portfolio UAE | Luxury Marble & Granite Installations | Al Mezoon",
  description: "View our premium stone projects across UAE: luxury kitchens, commercial spaces, hotel installations. Partner with Cosentino, IKEA, Danube Homes. 200+ completed projects.",
  keywords: "marble projects UAE, granite installations Dubai, luxury kitchen portfolio, commercial stone projects, hotel marble installations",
  openGraph: {
    title: "Stone Projects Portfolio UAE | Luxury Marble & Granite Installations | Al Mezoon",
    description: "View our premium stone projects across UAE: luxury kitchens, commercial spaces, hotel installations. Partner with Cosentino, IKEA, Danube Homes. 200+ completed projects.",
    siteName: "Al Mezoon Marbles & Granites",
    locale: "en_AE",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 