import { site } from '@/lib/site.config';
import './globals.css';

export const metadata = {
  metadataBase: new URL(site.seo.url),
  title: site.seo.title,
  description: site.seo.description,
  keywords: site.seo.keywords,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: site.seo.url,
    siteName: site.name,
    locale: 'en_IN',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.seo.url },
};

export const viewport = {
  themeColor: '#1F6E5C',
  width: 'device-width',
  initialScale: 1,
};

function LocalBusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'PetStore'],
    name: site.name,
    description: site.seo.description,
    telephone: site.phoneDisplay,
    url: site.seo.url,
    image: site.seo.url + '/og-image.jpg',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.address.line1}, ${site.address.line2}, ${site.address.line3}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.pincode,
      addressCountry: site.address.country,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.rating,
      reviewCount: '227',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      opens: '10:00',
    },
    areaServed: site.serviceArea.map((a) => ({ '@type': 'Place', name: a })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Nunito:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
