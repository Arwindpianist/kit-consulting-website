export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'KIT Consulting',
    alternateName: 'KITCON',
    url: 'https://kitengineeringconsulting.net',
    logo: 'https://kitengineeringconsulting.net/icon',
    description: 'Professional engineering consulting services specializing in Construction Execution, Tendering, and Process Optimization for energy and manufacturing sectors in Malaysia and Southeast Asia.',
    foundingDate: '2014',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kuala Lumpur',
      addressCountry: 'MY',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+60-12-9100417',
      contactType: 'Customer Service',
      email: 'info@kitengineeringconsulting.net',
      areaServed: ['MY', 'SG', 'BN', 'TH'],
      availableLanguage: ['English', 'Malay'],
    },
    areaServed: {
      '@type': 'Country',
      name: 'Malaysia',
    },
    slogan: 'Engineering Solutions for Tomorrow\'s Industries',
    knowsAbout: [
      'Construction Execution',
      'Tendering Support',
      'Technical Due Diligence',
      'Remote Engineering',
      'Process Optimization',
      'Oil and Gas Engineering',
      'Power Plant Engineering',
      'Chemical Plant Engineering',
      'Pipeline Engineering',
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 3.139,
        longitude: 101.6869,
      },
      geoRadius: '500000',
    },
    award: [
      'Petronas Approved Contractor',
      'Shell Malaysia Trusted Partner',
      '11+ Years Industry Excellence',
    ],
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'KIT Consulting',
    description: 'Engineering consultancy verified on Google Business, delivering tendering strategy and technical due diligence across Kuala Lumpur and Southeast Asia.',
    url: 'https://kitengineeringconsulting.net',
    telephone: '+60-12-9100417',
    email: 'info@kitengineeringconsulting.net',
    image: 'https://kitengineeringconsulting.net/opengraph-image.png',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Level 32, Q Sentral, 2A Jalan Stesen Sentral 2',
      addressLocality: 'Kuala Lumpur',
      postalCode: '50470',
      addressRegion: 'Wilayah Persekutuan Kuala Lumpur',
      addressCountry: 'MY',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 3.1329,
      longitude: 101.6865,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://g.page/r/CXO2VjS02kEDEBM/review',
      'https://www.linkedin.com/company/kit-consulting',
    ],
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'KIT Consulting',
      url: 'https://kitengineeringconsulting.net',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Malaysia',
    },
    url: service.url,
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

