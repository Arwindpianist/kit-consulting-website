import type { Metadata } from "next"

const SITE_URL = "https://kitconsulting.com"
const SITE_NAME = "KIT Consulting"
const COMPANY_EMAIL = "kit.engineering.consulting@gmail.com"
const COMPANY_PHONE = "+60129100417"

interface PageMetadata {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function generateMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadata): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`
  const url = `${SITE_URL}${path}`

  const defaultKeywords = [
    "engineering consulting",
    "EPCC project management",
    "tendering support",
    "technical due diligence",
    "remote engineering",
    "construction execution",
    "process optimization",
    "Malaysia",
  ]

  const allKeywords = [...defaultKeywords, ...keywords].join(", ")

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: SITE_NAME }],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
  }
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Expert engineering consultancy specializing in construction execution, tendering strategies, and process optimization for energy and manufacturing sectors.",
  email: COMPANY_EMAIL,
  telephone: COMPANY_PHONE,
  address: {
    "@type": "PostalAddress",
    addressCountry: "MY",
    addressLocality: "Malaysia",
  },
  sameAs: [
    // Add social media URLs here when available
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    contactType: "Customer Service",
    availableLanguage: ["English"],
  },
  areaServed: {
    "@type": "Place",
    name: "Malaysia",
  },
  serviceType: [
    "EPCC Project Management",
    "Tendering Support",
    "Technical Due Diligence",
    "Remote Engineering Solutions",
  ],
}


