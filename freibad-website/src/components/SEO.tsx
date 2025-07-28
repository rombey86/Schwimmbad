import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export function generateMetadata({
  title = 'Freibad Schwimmbad retten',
  description = 'Unterstützen Sie uns dabei, unser geliebtes Freibad zu retten! Informieren Sie sich über den aktuellen Stand, unterschreiben Sie die Petition und helfen Sie mit Ihrer Spende.',
  keywords = ['Freibad', 'Schwimmbad', 'retten', 'Petition', 'Spenden', 'Bürgerentscheid', 'Sanierung'],
  image = '/images/freibad-hero.jpg',
  url = 'https://freibad-schwimmbad.de',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags
}: SEOProps): Metadata {
  const fullTitle = title === 'Freibad Schwimmbad retten' ? title : `${title} | Freibad Schwimmbad retten`
  
  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: author ? [{ name: author }] : [{ name: 'Förderverein Freibad Schwimmbad e.V.' }],
    creator: 'Förderverein Freibad Schwimmbad e.V.',
    publisher: 'Förderverein Freibad Schwimmbad e.V.',
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
    openGraph: {
      type,
      locale: 'de_DE',
      url,
      title: fullTitle,
      description,
      siteName: 'Freibad Schwimmbad retten',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : ['Förderverein Freibad Schwimmbad e.V.'],
        section,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@freibad_schwimmbad',
      site: '@freibad_schwimmbad',
    },
    alternates: {
      canonical: url,
    },
    category: section || 'Bürgerinitiativen',
    classification: 'Gemeinnützige Organisation',
    other: {
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'Freibad retten',
      'mobile-web-app-capable': 'yes',
      'msapplication-TileColor': '#2563eb',
      'theme-color': '#2563eb',
    },
  }
}

// Strukturierte Daten für die Organisation
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Förderverein Freibad Schwimmbad e.V.',
  url: 'https://freibad-schwimmbad.de',
  logo: 'https://freibad-schwimmbad.de/images/logo.png',
  description: 'Förderverein zur Rettung und Erhaltung des Freibads Schwimmbad',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Schwimmbad',
    addressCountry: 'DE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+49-123-456789',
    contactType: 'customer service',
    email: 'info@freibad-schwimmbad.de',
  },
  sameAs: [
    'https://facebook.com/freibad.schwimmbad',
    'https://instagram.com/freibad_schwimmbad',
    'https://twitter.com/freibad_schwimmbad',
  ],
}

// Strukturierte Daten für das Freibad
export const placeSchema = {
  '@context': 'https://schema.org',
  '@type': 'AquaticCenter',
  name: 'Freibad Schwimmbad',
  description: 'Historisches Freibad mit 50m-Becken, Sprungturm und Liegewiese',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Freibadstraße 1',
    addressLocality: 'Schwimmbad',
    postalCode: '12345',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.5200,
    longitude: 13.4050,
  },
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: '50m Schwimmbecken',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Sprungturm',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Liegewiese',
      value: true,
    },
  ],
  openingHours: 'Mo-So 09:00-20:00',
  telephone: '+49-123-456789',
  url: 'https://freibad-schwimmbad.de',
}

// Strukturierte Daten für Artikel
export function generateArticleSchema(
  title: string,
  description: string,
  publishedTime: string,
  modifiedTime: string,
  author: string,
  image: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: [image],
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Förderverein Freibad Schwimmbad e.V.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://freibad-schwimmbad.de/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

// Strukturierte Daten für Events
export function generateEventSchema(
  name: string,
  description: string,
  startDate: string,
  endDate: string,
  location: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: location,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Freibadstraße 1',
        addressLocality: 'Schwimmbad',
        postalCode: '12345',
        addressCountry: 'DE',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Förderverein Freibad Schwimmbad e.V.',
      url: 'https://freibad-schwimmbad.de',
    },
  }
}