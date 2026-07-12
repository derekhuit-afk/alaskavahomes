import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  verification: { google: "-RqTiM9DiuuUk60yjFrKoiIdQFMu1XMPqta9Ip64sH0" },
  title: 'Alaska VA Home Loans | AlaskaVAHomes.com | Derek Huit NMLS #203980',
  description:
    'VA home loans in Alaska — Anchorage, JBER, Wasilla, Eielson, Fairbanks. Zero down, no PMI, seller-paid closing allowed. 18 years experience, $1B+ originated. Powered by Cardinal Financial (NMLS #66247).',
  keywords: [
    'Alaska VA loan', 'Anchorage VA loan', 'JBER VA loan', 'VA home loan Alaska',
    'Wasilla VA loan', 'Eielson VA loan', 'Fairbanks VA loan', 'Fort Wainwright VA loan',
    'Alaska military mortgage', 'PCS Alaska mortgage', 'VA home loan PCS orders',
    'Derek Huit', 'Cardinal Financial Alaska VA', 'NMLS 203980',
    'Alaska veteran home loan', 'Alaska military homebuyer',
  ].join(', '),
  authors: [{ name: 'Derek Huit', url: 'https://alaskavahomes.com' }],
  robots: 'index, follow',
  metadataBase: new URL('https://alaskavahomes.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Alaska VA Home Loans | AlaskaVAHomes.com',
    description: 'VA home loans in Alaska, built for PCS buyers. Anchorage, JBER, Wasilla, Eielson, Fairbanks.',
    url: 'https://alaskavahomes.com',
    siteName: 'AlaskaVAHomes.com',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alaska VA Home Loans | AlaskaVAHomes.com',
    description: 'VA home loans in Alaska, built for PCS buyers.',
  },
  icons: { icon: '/favicon.svg' },
  other: {
    'geo.region': 'US-AK',
    'geo.placename': 'Anchorage, Alaska',
  },
};

// JSON-LD structured data: Person + LocalBusiness + WebSite
// This is what Google AI Overviews, Perplexity, and ChatGPT extract for citations
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://alaskavahomes.com/#derek-huit',
      name: 'Derek Huit',
      jobTitle: 'Loan Originator',
      description: '18-year mortgage industry veteran based in Anchorage, Alaska. NMLS #203980. Over $1 billion in home loans originated.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Anchorage',
        addressRegion: 'AK',
        addressCountry: 'US',
      },
      identifier: { '@type': 'PropertyValue', propertyID: 'NMLS', value: '203980' },
      worksFor: {
        '@type': 'FinancialService',
        '@id': 'https://alaskavahomes.com/#cardinal-financial',
        name: 'Cardinal Financial Company, Limited Partnership',
        identifier: { '@type': 'PropertyValue', propertyID: 'NMLS', value: '66247' },
      },
      url: 'https://alaskavahomes.com',
      sameAs: [
        'https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/203980',
        'https://loanak.com',
        'https://usa.loan',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://alaskavahomes.com/#business',
      name: 'AlaskaVAHomes.com — Derek Huit',
      description: 'VA home loan origination for Alaska veterans, active-duty military, and PCS buyers.',
      image: 'https://alaskavahomes.com/favicon.svg',
      url: 'https://alaskavahomes.com',
      telephone: '',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Anchorage',
        addressRegion: 'AK',
        postalCode: '99501',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 61.2181, longitude: -149.9003 },
      areaServed: [
        { '@type': 'State', name: 'Alaska' },
        { '@type': 'City', name: 'Anchorage' },
        { '@type': 'City', name: 'Wasilla' },
        { '@type': 'City', name: 'Fairbanks' },
        { '@type': 'City', name: 'Eagle River' },
        { '@type': 'City', name: 'Palmer' },
        { '@type': 'Place', name: 'Joint Base Elmendorf-Richardson (JBER)' },
        { '@type': 'Place', name: 'Eielson Air Force Base' },
        { '@type': 'Place', name: 'Fort Wainwright' },
      ],
      priceRange: '$',
      paymentAccepted: 'VA Home Loan, Conventional, FHA, USDA',
      employee: { '@id': 'https://alaskavahomes.com/#derek-huit' },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://alaskavahomes.com/#website',
      url: 'https://alaskavahomes.com',
      name: 'AlaskaVAHomes.com',
      publisher: { '@id': 'https://alaskavahomes.com/#business' },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
