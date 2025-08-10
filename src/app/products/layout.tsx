import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Premium Marble & Granite Collection | Al Mezoon UAE",
  description: "Explore our premium collection of marble, granite, quartz, and natural stone products. Sourced from the finest quarries worldwide and available across UAE including Dubai, Sharjah, and Abu Dhabi.",
  keywords: "marble UAE, granite Dubai, quartz countertops Sharjah, premium stone UAE, luxury marble Dubai, kitchen countertops UAE, bathroom vanities, marble flooring Dubai, stone fabrication UAE, marble suppliers Sharjah, granite installation, marble maintenance UAE, stone restoration Dubai, marble polishing UAE, natural stone Abu Dhabi",
  openGraph: {
    title: "Premium Marble & Stone Collection | Al Mezoon UAE",
    description: "Discover our exquisite collection of premium marble, granite, and natural stones. Each piece carefully selected for beauty, durability, and unique characteristics. Available across UAE.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Al Mezoon Marbles & Granites - Premium Stone Collection"
      }
    ],
    locale: "en_AE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Marble & Stone Collection | Al Mezoon UAE",
    description: "Discover our exquisite collection of premium marble, granite, and natural stones. Each piece carefully selected for beauty, durability, and unique characteristics.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "https://almezoon-uae.com/products"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  other: {
    "geo.region": "AE",
    "geo.placename": "United Arab Emirates",
    "product:category": "Home & Garden > Decor > Flooring",
    "product:availability": "in stock",
    "og:site_name": "Al Mezoon Marbles & Granites"
  }
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 