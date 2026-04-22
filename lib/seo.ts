const PHONE = '(912) 515-6060'
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
    areaServed: [
      { '@type': 'City', name: 'Statesboro', containedIn: { '@type': 'AdministrativeArea', name: 'Bulloch County, GA' } },
      { '@type': 'City', name: 'Rincon', containedIn: { '@type': 'AdministrativeArea', name: 'Effingham County, GA' } },
      { '@type': 'City', name: 'Savannah', containedIn: { '@type': 'AdministrativeArea', name: 'Chatham County, GA' } },
      { '@type': 'City', name: 'Metter', containedIn: { '@type': 'AdministrativeArea', name: 'Candler County, GA' } },
      { '@type': 'City', name: 'Springfield', containedIn: { '@type': 'AdministrativeArea', name: 'Effingham County, GA' } },
      { '@type': 'City', name: 'Swainsboro', containedIn: { '@type': 'AdministrativeArea', name: 'Emanuel County, GA' } },
      { '@type': 'City', name: 'Claxton', containedIn: { '@type': 'AdministrativeArea', name: 'Evans County, GA' } },
      { '@type': 'City', name: 'Vidalia', containedIn: { '@type': 'AdministrativeArea', name: 'Toombs County, GA' } },
    ],
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
  const faqs = [
    { q: 'How fast can you make a cash offer on my house?', a: 'We deliver a written cash offer within 24 hours of your submission — often the same day. There is no obligation to accept.' },
    { q: 'Do I need to make repairs before you buy my house?', a: 'No. We buy houses in any condition — fire damage, foundation issues, outdated systems, full of belongings. You take what you want and leave the rest.' },
    { q: 'Are there fees or commissions when you buy my house?', a: 'None. We are not real estate agents. We charge no commissions, no listing fees, and we typically cover standard closing costs.' },
    { q: 'How do I choose my closing date?', a: 'You pick it. We can close in as little as 7 days or give you 30–60 days if you need time to move.' },
    { q: 'Can you buy my house if I am behind on payments or facing foreclosure?', a: 'Often yes — but timing is critical. Contact us immediately. A quick sale can stop foreclosure before auction.' },
    { q: 'Do you buy houses outside of Statesboro, GA?', a: 'Yes. We buy across Southeast Georgia — Statesboro, Rincon, Savannah, Metter, Springfield, Swainsboro, Claxton, Vidalia, and surrounding Bulloch, Effingham, Chatham, and Emanuel counties.' },
    { q: 'How do you calculate your cash offer?', a: 'We look at recent comparable sales in your area, the property condition, and cost of any work needed. We share a clear, written offer with no pressure.' },
    { q: 'Will you buy an inherited or estate property?', a: 'Yes. We regularly purchase inherited and probate properties as-is, working with your attorney if needed.' },
  ]
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
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
