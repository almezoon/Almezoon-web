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
  description: "Leading UAE-based supplier, fabricator, and installer of marble, granite, quartz, and porcelain. Trusted for over 25 years to deliver timeless stone craftsmanship in Sharjah. 3000+ kitchens annually.",
  keywords: "marble suppliers UAE, granite Dubai, kitchen countertops Sharjah, stone fabrication, marble installation, granite countertops, quartz UAE, bathroom vanities, flooring Dubai",
  authors: [{ name: "Al Mezoon Marbles & Granites" }],
  creator: "Al Mezoon Marbles & Granites",
  publisher: "Al Mezoon Marbles & Granites",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://almezoon-uae.com",
  },
  openGraph: {
    title: "Al Mezoon Marbles & Granites - Premium Stone Solutions",
    description: "25+ years of excellence in natural stone industry. Premium marble, granite, and quartz solutions across the UAE. 3000+ kitchens annually.",
    siteName: "Al Mezoon Marbles & Granites",
    locale: "en_AE",
    type: "website",
    url: "https://almezoon-uae.com",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Al Mezoon Marbles & Granites - Premium Stone Solutions UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Mezoon Marbles & Granites - Premium Stone Solutions in UAE",
    description: "Leading UAE stone specialists. 25+ years experience, 3000+ kitchens annually. Premium marble, granite & quartz solutions.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/images/logo.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  other: {
    "geo.region": "AE-SH",
    "geo.placename": "Sharjah",
    "geo.position": "25.3463;55.4209",
    "ICBM": "25.3463, 55.4209",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Al Mezoon Marbles & Granites Industries LLC",
  "image": "https://almezoon-uae.com/images/logo.png",
  "description": "Leading UAE-based supplier, fabricator, and installer of marble, granite, quartz, and porcelain. Trusted for over 25 years.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Al Sajja Industrial Area",
    "addressLocality": "Sharjah",
    "addressCountry": "AE",
    "postalCode": "60720"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.3463,
    "longitude": 55.4209
  },
  "url": "https://almezoon-uae.com",
  "telephone": "+97165311778",
  "email": "info@almezoon-uae.com",
  "openingHours": [
    "Mo-Th 08:00-18:00",
    "Fr-Sa 09:00-16:00"
  ],
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "currenciesAccepted": "AED",
  "areaServed": [
    {
      "@type": "City",
      "name": "Dubai"
    },
    {
      "@type": "City", 
      "name": "Abu Dhabi"
    },
    {
      "@type": "City",
      "name": "Sharjah"
    },
    {
      "@type": "City",
      "name": "Ajman"
    }
  ],
  "serviceType": [
    "Stone Fabrication",
    "Kitchen Countertops",
    "Bathroom Vanities", 
    "Flooring Installation",
    "Wall Cladding",
    "Stone Restoration"
  ],
  "yearEstablished": "2000",
  "foundingDate": "2000-01-01",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  },
  "sameAs": [
    "https://www.instagram.com/almezoon_2000/",
    "https://www.facebook.com/profile.php?id=100063595631081"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#d97706" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Al Mezoon" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="32x32" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased arabic-support`}
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        <div id="main-content">
          {children}
        </div>
        
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/97165311778"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 whatsapp-green rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 no-print"
          aria-label="Chat with us on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
