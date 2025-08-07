import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stone Care & Design Blog UAE | Marble Granite Tips | Al Mezoon Experts",
  description: "Expert stone care tips, design trends, and maintenance guides for UAE climate. Professional advice on marble, granite selection and care from Al Mezoon specialists.",
  keywords: "marble care UAE, granite maintenance Dubai, stone design trends, UAE climate stone care, marble cleaning tips",
  openGraph: {
    title: "Stone Care & Design Blog UAE | Marble Granite Tips | Al Mezoon Experts",
    description: "Expert stone care tips, design trends, and maintenance guides for UAE climate. Professional advice on marble, granite selection and care from Al Mezoon specialists.",
    siteName: "Al Mezoon Marbles & Granites",
    locale: "en_AE",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 