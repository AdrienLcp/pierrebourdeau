import type { Metadata } from 'next'

import { LOCALES, type I18n, type Locale } from '@/i18n'

export const METADATA = {
  email: 'contact@pierrebourdeau.com',
  name: 'Pierre Bourdeau',
  phone: {
    formatted: '06 95 21 01 63',
    href: '+33695210163'
  },
  socials: {
    behance: 'https://www.behance.net/',
    dribbble: 'https://dribbble.com/',
    instagram: 'https://www.instagram.com/pierre_bourdeau/',
    linkedin: 'https://www.linkedin.com/in/uxpierrebourdeau/'
  }
} as const

const creatorName = METADATA.name
const title = `${METADATA.name} - UX/UI Designer`
const shortName = `${METADATA.name} - Portfolio`
const description = `${METADATA.name}, UX/UI Designer freelance à Nantes. Passionné par les designs centrés sur l'utilisateur, il crée des interfaces web et mobiles intuitives. Il collabore avec des startups et entreprises pour améliorer l'expérience utilisateur avec des méthodes qualitatives.`
const baseUrl = 'https://www.pierrebourdeau.com'

export const getBaseMetadata = (): Metadata => {
  const baseMetadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: title,
    description: description,
    applicationName: shortName,
    authors: [
      {
        name: creatorName,
        url: baseUrl
      }
    ],
    generator: 'Next.js',
    publisher: 'Vercel',
    referrer: 'origin',
    keywords: [
      METADATA.name,
      'UX/UI Designer',
      'UX/UI portfolio',
      'UX/UI Design Nantes'
    ],
    creator: creatorName,
    robots: {
      follow: true,
      index: true
    },
    icons: [], // TODO
    assets: [], // TODO
    formatDetection: {
      telephone: true,
      date: true,
      address: true,
      email: true,
      url: true
    },
    category: 'Portfolio',
    classification: 'UX/UI Design',
    openGraph: {
      determiner: '',
      type: 'website',
      url: baseUrl,
      title: title,
      description: description,
      siteName: shortName,
      emails: [METADATA.email],
      locale: 'fr',
      images: [], // TODO
      countryName: 'France',
      alternateLocale: ['en']
    },
    twitter: {
      card: 'summary',
      title: title,
      description: description,
      images: [] // TODO
    }
  }

  return baseMetadata
}

export const getBaseLocalizedMetadata = (currentLocale: Locale, i18n: I18n): Metadata => {
  const baseMetadata = getBaseMetadata()
  const description = i18n('metadata.description')

  const localizedMetadata: Metadata = {
    ...baseMetadata,
    description,
    openGraph: {
      ...baseMetadata.openGraph,
      description,
      locale: currentLocale,
      alternateLocale: [...LOCALES.filter(locale => locale !== currentLocale)]
    },
    twitter: {
      description: description
    }
  }

  return localizedMetadata
}

export const getLocalizedMetadataTitle = (i18n: I18n, title: string): string => {
  return `${title} ${i18n('metadata.title')}`
}
