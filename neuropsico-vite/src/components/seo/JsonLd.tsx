import { faqItems, pricingPackage } from '@/data/content'
import { absoluteUrl, siteMeta } from '@/data/siteMeta'

function buildSchemaGraph() {
  const orgId = `${siteMeta.siteUrl}/#organization`
  const businessId = `${siteMeta.siteUrl}/#localbusiness`
  const personId = `${siteMeta.siteUrl}/#person`
  const websiteId = `${siteMeta.siteUrl}/#website`
  const ogImage = absoluteUrl(siteMeta.ogImagePath)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: siteMeta.name,
        url: siteMeta.siteUrl,
        logo: ogImage,
        image: ogImage,
        email: siteMeta.email,
        telephone: `+${siteMeta.phoneRaw}`,
        sameAs: [siteMeta.instagram],
      },
      {
        '@type': ['LocalBusiness', 'MedicalBusiness'],
        '@id': businessId,
        name: siteMeta.name,
        description: siteMeta.description,
        url: siteMeta.siteUrl,
        image: ogImage,
        telephone: `+${siteMeta.phoneRaw}`,
        email: siteMeta.email,
        priceRange: siteMeta.priceRange,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteMeta.address.street,
          addressLocality: siteMeta.address.city,
          addressRegion: siteMeta.address.region,
          postalCode: siteMeta.address.postalCode,
          addressCountry: siteMeta.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteMeta.geo.latitude,
          longitude: siteMeta.geo.longitude,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: siteMeta.hours.days,
            opens: siteMeta.hours.opens,
            closes: siteMeta.hours.closes,
          },
        ],
        parentOrganization: { '@id': orgId },
        employee: { '@id': personId },
        areaServed: {
          '@type': 'City',
          name: 'Boa Vista',
        },
        makesOffer: {
          '@type': 'Offer',
          name: pricingPackage.name,
          description: pricingPackage.subtitle,
          price: pricingPackage.price,
          priceCurrency: 'BRL',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: siteMeta.professional.name,
        honorificPrefix: siteMeta.professional.honorific,
        jobTitle: siteMeta.professional.jobTitle,
        image: absoluteUrl(siteMeta.professional.imagePath),
        worksFor: { '@id': orgId },
        url: siteMeta.siteUrl,
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteMeta.siteUrl,
        name: siteMeta.name,
        description: siteMeta.description,
        inLanguage: 'pt-BR',
        publisher: { '@id': orgId },
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteMeta.siteUrl}/#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteMeta.siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Início',
            item: siteMeta.siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: siteMeta.serviceType,
            item: `${siteMeta.siteUrl}/#servicos`,
          },
        ],
      },
    ],
  }
}

export function JsonLd() {
  const schema = buildSchemaGraph()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
