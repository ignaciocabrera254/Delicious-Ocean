"use client";

import { businessData, faqData } from '../data';

export default function SEO() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SeafoodStore",
    "name": businessData.name,
    "image": "https://images.unsplash.com/photo-1614705574384-5a3962b1a511?auto=format&fit=crop&w=1200",
    "@id": "https://deliciousocean.cl",
    "url": "https://deliciousocean.cl",
    "telephone": businessData.telephone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessData.address.streetAddress,
      "addressLocality": businessData.address.addressLocality,
      "addressRegion": businessData.address.addressRegion,
      "postalCode": "1450000",
      "addressCountry": businessData.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessData.geo.latitude,
      "longitude": businessData.geo.longitude
    },
    "openingHoursSpecification": businessData.openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.dayOfWeek,
      "opens": hours.opens,
      "closes": hours.closes
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
