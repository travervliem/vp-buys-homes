// Schema.org JSON-LD builders. Render the results with `<JsonLd data={...} />`
// (components/JsonLd.tsx). All business identity comes from `lib/site.ts`.

import { AREAS, areaHref } from './areas'
import { FAQS, type Faq } from './faqs'
import { intersectionHref, situationHref, type SituationSlug } from './situations/data'
import { SITE, absoluteUrl } from './site'

// City-level only: there is no public street address, so none is published.
const ADDRESS = {
  city: 'Statesboro',
  state: 'GA',
  country: 'US',
}

const LOCAL_BUSINESS_TYPE = ['LocalBusiness', 'RealEstateAgent']

function cityNode(name: string, county: string, state = 'GA') {
  return {
    '@type': 'City',
    name,
    containedIn: { '@type': 'AdministrativeArea', name: `${county}, ${state}` },
  }
}

export function orgJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': LOCAL_BUSINESS_TYPE,
    '@id': absoluteUrl('/#organization'),
    name: SITE.name,
    alternateName: SITE.legalName,
    description: 'We buy houses for cash in Statesboro, Rincon, Savannah, Metter, and Springfield, GA. No repairs, no fees, no commissions. Cash offer in 48 hours. Close in as little as 7 days.',
    url: SITE.url,
    logo: absoluteUrl('/logo.png'),
    telephone: SITE.phoneE164,
    email: SITE.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      addressCountry: ADDRESS.country,
    },
    areaServed: AREAS.map(a => cityNode(a.name, a.county, a.state)),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cash Home Buying Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cash Home Purchase', description: 'We buy houses in any condition for cash. No repairs, no commissions.' } },
      ],
    },
  }
}

// FAQPage schema. Defaults to the site-wide FAQ. Pass items to describe a
// page-specific FAQ — but ONLY on pages that visibly render those same items;
// Google flags FAQ structured data that doesn't match what the user sees.
export function faqJsonLd(items: Faq[] = FAQS) {
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

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  }
}

export function localBusinessAreaJsonLd(city: string, county: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': LOCAL_BUSINESS_TYPE,
    name: `${SITE.name} — ${city}, GA`,
    url: absoluteUrl(areaHref(slug)),
    telephone: SITE.phoneE164,
    areaServed: cityNode(city, county),
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: 'GA',
      addressCountry: 'US',
    },
  }
}

// Service schema for an intersection page (city × situation). Pairs with
// LocalBusiness above to give Google a clean topical signal: this page is
// about a specific service offered to a specific city.
export function intersectionServiceJsonLd(args: {
  city: string
  county: string
  citySlug: string
  situationSlug: SituationSlug
  situationLabel: string  // e.g. "Foreclosure"
  description: string     // the page meta description
}) {
  const { city, county, citySlug, situationSlug, situationLabel, description } = args
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Cash Home Purchase — ${situationLabel} — ${city}, GA`,
    serviceType: `Cash home purchase for homeowners facing ${situationLabel.toLowerCase()}`,
    description,
    url: absoluteUrl(intersectionHref(citySlug, situationSlug)),
    provider: {
      '@type': LOCAL_BUSINESS_TYPE,
      name: SITE.name,
      telephone: SITE.phoneE164,
    },
    areaServed: cityNode(city, county),
  }
}

// Situation pillar page LocalBusiness — same shape as the area version,
// but scoped to "GA" rather than a single city.
export function localBusinessSituationJsonLd(args: { situationSlug: SituationSlug; situationLabel: string }) {
  const { situationSlug, situationLabel } = args
  return {
    '@context': 'https://schema.org',
    '@type': LOCAL_BUSINESS_TYPE,
    name: `${SITE.name} — ${situationLabel} — Georgia`,
    url: absoluteUrl(situationHref(situationSlug)),
    telephone: SITE.phoneE164,
    areaServed: { '@type': 'AdministrativeArea', name: 'Georgia, US' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: ADDRESS.city,
      addressRegion: 'GA',
      addressCountry: 'US',
    },
  }
}
