import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { WavyBackground } from "@/components/ui/wavy-background"
import { Toaster } from "sonner"

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://kitengineeringconsulting.net'),
  title: {
    default: "KIT Consulting | KITCON - Engineering & Project Management Solutions",
    template: "%s | KIT Consulting"
  },
  description:
    "KIT Consulting (KITCON) - Your trusted partner in Construction Execution, Tendering and Process Optimization. Expert EPCC project management, technical due diligence, and remote engineering solutions across Malaysia and Southeast Asia.",
  keywords: [
    "kit consulting",
    "kitcon",
    "kit engineering consulting",
    "engineering consulting malaysia",
    "EPCC project management",
    "construction execution malaysia",
    "tendering support",
    "technical due diligence",
    "remote engineering solutions",
    "process optimization",
    "project management kuala lumpur",
    "engineering consultancy malaysia",
    "construction consultants",
    "industrial engineering",
    "oil and gas consulting",
    "infrastructure projects malaysia"
  ],
  authors: [{ name: "KIT Consulting", url: "https://kitengineeringconsulting.net" }],
  creator: "KIT Consulting",
  publisher: "KIT Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kitengineeringconsulting.net",
    siteName: "KIT Consulting | KITCON",
    title: "KIT Consulting | KITCON - Engineering & Project Management Solutions",
    description: "Your trusted partner in Construction Execution, Tendering and Process Optimization. 15+ years of excellence in EPCC project management across Malaysia and Southeast Asia.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "KIT Consulting - Engineering Excellence",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KIT Consulting | KITCON - Engineering & Project Management Solutions",
    description: "Your trusted partner in Construction Execution, Tendering and Process Optimization.",
    images: ["/opengraph-image.png"],
    creator: "@kitconsulting",
  },
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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon', sizes: '32x32' },
    ],
    apple: '/apple-icon',
  },
  verification: {
    // Add these later when you set up
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className="fixed inset-0 z-0">
          <WavyBackground
            backgroundFill="#f1f5f9"
            colors={["#0066cc", "#003366", "#38bdf8", "#60a5fa", "#3b82f6"]}
            waveWidth={50}
            blur={10}
            speed="slow"
            waveOpacity={0.3}
            containerClassName="h-full w-full"
          />
        </div>
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  )
}
