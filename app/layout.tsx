import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Toaster } from "sonner"
import { generateOrganizationSchema } from "./schema"

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
    "EPCC project management malaysia",
    "construction execution malaysia",
    "tendering support malaysia",
    "tendering strategies",
    "technical due diligence",
    "remote engineering solutions",
    "process optimization",
    "project management kuala lumpur",
    "engineering consultancy malaysia",
    "oil and gas consulting malaysia",
    "petronas contractor",
    "shell malaysia contractor",
    "hess malaysia contractor",
    "power plant due diligence",
    "chemical plant assessment",
    "energy sector consulting",
    "brownfield modification",
    "pipeline project management",
    "wellhead platform engineering",
    "EPCIC contractor malaysia",
    "north malay basin projects",
    "kuala lumpur engineering services",
    "infrastrucutre engineering malaysia",
    "industrial plant consulting"
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
    description: "Your trusted partner in Construction Execution, Tendering and Process Optimization. 11+ years of excellence in EPCC project management across Malaysia and Southeast Asia.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
      </head>
      <body className={manrope.className}>
        <div className="fixed inset-0 z-0 bg-slate-50">
          <BackgroundBeams />
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
