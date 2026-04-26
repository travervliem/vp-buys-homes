import { AREAS } from './areas'
import { FAQS } from './faqs'

const PHONE_RAW = '+19125156060'
const EMAIL = 'leads@vpbuyshomes.com'
const ADDRESS = {
  street: '123 Main Street',
  city: 'Statesboro',
  state: 'GA',
  zip: '30458',
  country: 'US',
}

export function orgJsonLd(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'RealEstateAgent'],
    '@id': `${siteUrl}/#organization`,
    name: 'VP Buys Homes',
    alternateName: 'VP Equities LLC',
    description: 'We buy houses for cash in Statesboro, Rincon, Savannah, Metter, and Springfield, GA. No repairs, no fees, no commissions. Cash offer in 24 hours. Close in as little as 7 days.',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    telephone: PHONE_RAW,
    email: EMAIL,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.zip,
      addressCountry: ADDRESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.4488,
      longitude: -81.7832,
    },
    areaServed: AREAS.map(a => ({
      '@type': 'City',
      name: a.name,
      containedIn: { '@type': 'AdministrativeArea', name: `${a.county}, ${a.state}` },
    })),
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '20:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday','Sunday'], opens: '09:00', closes: '17:00' },
    ],
    sameAs: [
      'https://www.facebook.com/vpbuyshomes',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cash Home Buying Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cash Home Purchase', description: 'We buy houses in any condition for cash. No repairs, no commissions.' } },
      ],
    },
  }
}

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function breadcrumbJsonLd(items: { name: string; href: string }[], siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.href}`,
    })),
  }
}

export function localBusinessAreaJsonLd(city: string, county: string, siteUrl: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'RealEstateAgent'],
    name: `VP Buys Homes — ${city}, GA`,
    url: `${siteUrl}/areas/${slug}`,
    telephone: PHONE_RAW,
    areaServed: { '@type': 'City', name: city, containedIn: { '@type': 'AdministrativeArea', name: `${county}, GA` } },
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: 'GA',
      addressCountry: 'US',
    },
  }
}

// Per-pairing FAQPage schema. Use ONLY on pages that visibly render the same
// FAQ items — Google flags FAQ structured data that doesn't match what the
// user sees.
export function pageFaqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

// Service schema for an intersection page (city × situation). Pairs with
// LocalBusiness above to give Google a clean topical signal: this page is
// about a specific service offered to a specific city.
export function intersectionServiceJsonLd(args: {
  siteUrl: string
  city: string
  county: string
  citySlug: string
  situationSlug: string
  situationLabel: string  // e.g. "Foreclosure"
  description: string     // the page meta description
}) {
  const { siteUrl, city, county, citySlug, situationSlug, situationLabel, description } = args
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Cash Home Purchase — ${situationLabel} — ${city}, GA`,
    serviceType: `Cash home purchase for homeowners facing ${situationLabel.toLowerCase()}`,
    description,
    url: `${siteUrl}/areas/${citySlug}/${situationSlug}`,
    provider: {
      '@type': ['LocalBusiness', 'RealEstateAgent'],
      name: 'VP Buys Homes',
      telephone: PHONE_RAW,
    },
    areaServed: {
      '@type': 'City',
      name: city,
      containedIn: { '@type': 'AdministrativeArea', name: `${county}, GA` },
    },
  }
}

// Situation pillar page LocalBusiness — same shape as the area version,
// but scoped to "GA" rather than a single city.
export function localBusinessSituationJsonLd(args: { siteUrl: string; situationSlug: string; situationLabel: string }) {
  const { siteUrl, situationSlug, situationLabel } = args
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'RealEstateAgent'],
    name: `VP Buys Homes — ${situationLabel} — Georgia`,
    url: `${siteUrl}/situations/${situationSlug}`,
    telephone: PHONE_RAW,
    areaServed: { '@type': 'AdministrativeArea', name: 'Georgia, US' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: ADDRESS.city,
      addressRegion: 'GA',
      addressCountry: 'US',
    },
  }
}
