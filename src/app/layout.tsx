import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EVERMARK TATTOO & GENTS MAKEOVER STUDIO | Premium Tattoo & Grooming Kerala",
  description: "Experience premium tattoos, custom body piercings, and high-end men's salon grooming services at Evermark Tattoo Studio. Kerala's ultimate destination for self-expression.",
  keywords: [
    "Tattoo Studio",
    "Tattoo Shop Near Me",
    "Piercing Studio",
    "Men's Grooming",
    "Tattoo Artist",
    "Evermark Tattoo",
    "Best Tattoo Shop Kerala",
    "Portrait Tattoos",
    "Realism Tattoos",
    "Men's Salon"
  ],
  authors: [{ name: "Evermark Tattoo" }],
  openGraph: {
    title: "EVERMARK TATTOO & GENTS MAKEOVER STUDIO | Premium Tattoo & Grooming",
    description: "Experience premium tattoos, custom body piercings, and high-end men's salon grooming services at Evermark Tattoo Studio.",
    url: "https://evermarktattoo.com",
    siteName: "Evermark Tattoo & Gents Makeover Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Evermark Tattoo & Grooming Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EVERMARK TATTOO & GENTS MAKEOVER STUDIO",
    description: "Experience premium tattoos, custom body piercings, and high-end men's salon grooming services at Evermark Tattoo Studio.",
    images: ["https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "name": "EVERMARK TATTOO & GENTS MAKEOVER STUDIO",
    "image": "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop",
    "priceRange": "$$",
    "telephone": "+91 92071 12354",
    "email": "evermarktattoo2025@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Evermark Tattoo & Gents Makeover",
      "addressLocality": "Kerala",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.0",
      "longitude": "76.0"
    },
    "url": "https://evermarktattoo.com",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://www.instagram.com/evermarktattoo?igsh=dGxnamZiejBuYnVv",
      "https://maps.app.goo.gl/gbTWFv32HK2RpdxX8"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full dark antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#111111] text-white font-sans selection:bg-[#C7A26A] selection:text-[#111111]">
        {children}
      </body>
    </html>
  );
}
