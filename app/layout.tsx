import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Vortex } from "@/components/ui/vortex"
import { Toaster } from "sonner"

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "KIT Consulting | Engineering & Project Management Solutions",
  description:
    "Your trusted partner in Construction Execution, Tendering and Process Optimization. Expert EPCC project management, technical due diligence, and remote engineering solutions.",
  keywords:
    "engineering consulting, EPCC project management, tendering support, technical due diligence, remote engineering, construction execution",
  authors: [{ name: "KIT Consulting" }],
  openGraph: {
    title: "KIT Consulting | Engineering & Project Management Solutions",
    description: "Your trusted partner in Construction Execution, Tendering and Process Optimization.",
    url: "https://kitconsulting.com",
    siteName: "KIT Consulting",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KIT Consulting | Engineering & Project Management Solutions",
    description: "Your trusted partner in Construction Execution, Tendering and Process Optimization.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
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
          <Vortex
            particleCount={200}
            baseHue={210}
            rangeHue={60}
            baseSpeed={0.05}
            rangeSpeed={0.4}
            backgroundColor="#f1f5f9"
            className="h-full w-full"
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
