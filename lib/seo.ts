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

export function localBusinessAreaJsonLd(
  city: string,
  county: string,
  siteUrl: string,
  slug: string,
  dates?: { datePublished?: string; dateModified?: string },
) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'RealEstateAgent'],
    '@id': `${siteUrl}/areas/${slug}#business`,
    name: `VP Buys Homes — ${city}, GA`,
    url: `${siteUrl}/areas/${slug}`,
    telephone: PHONE_RAW,
    email: EMAIL,
    priceRange: '$$',
    areaServed: { '@type': 'City', name: city, containedIn: { '@type': 'AdministrativeArea', name: `${county}, GA` } },
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: 'GA',
      addressCountry: 'US',
    },
    parentOrganization: { '@id': `${siteUrl}/#organization` },
    ...(dates?.datePublished ? { datePublished: dates.datePublished } : {}),
    ...(dates?.dateModified ? { dateModified: dates.dateModified } : {}),
  }
}

type ArticleInput = {
  title: string
  description: string
  slug: string
  category?: string
  datePublished: string
  dateModified?: string
}

export function articleJsonLd(post: ArticleInput, siteUrl: string) {
  const url = `${siteUrl}/blog/${post.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.title,
    description: post.description,
    url,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    ...(post.category ? { articleSection: post.category } : {}),
    author: {
      '@type': 'Organization',
      name: 'VP Buys Homes',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'VP Buys Homes',
      logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png` },
    },
  }
}

type HowToStep = { name: string; text: string }

export function howToJsonLd(input: {
  name: string
  description: string
  url: string
  totalTime?: string
  steps: HowToStep[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: input.name,
    description: input.description,
    ...(input.totalTime ? { totalTime: input.totalTime } : {}),
    step: input.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${input.url}#step-${i + 1}`,
    })),
  }
}

type CollectionItem = { title: string; slug: string; description?: string }

export function collectionPageJsonLd(input: {
  name: string
  description: string
  url: string
  siteUrl: string
  items: CollectionItem[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: input.name,
    description: input.description,
    url: input.url,
    isPartOf: { '@type': 'WebSite', name: 'VP Buys Homes', url: input.siteUrl },
    mainEntity: {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      numberOfItems: input.items.length,
      itemListElement: input.items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${input.siteUrl}/blog/${item.slug}`,
        name: item.title,
      })),
    },
  }
}
