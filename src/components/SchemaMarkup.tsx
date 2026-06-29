import { businessInfo, services, products } from "@/lib/data";

const siteUrl = "https://sancheticomputers.com";

export default function SchemaMarkup() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: "Sancheti Computers",
    alternateName: "SC Computers Bengaluru",
    description: "Trusted IT hardware, software, laptop, desktop, networking and accessories provider in Bengaluru since 2012. Serving B2C, B2B & GEM.",
    url: siteUrl,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${businessInfo.address.street}, ${businessInfo.address.area}`,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9716,
      longitude: 77.5726,
    },
    map: {
      "@type": "Map",
      mapUrl: businessInfo.googleMapsUrl,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    priceRange: "₹₹",
    image: `${siteUrl}/logo.svg`,
    logo: `${siteUrl}/logo.svg`,
    founder: {
      "@type": "Person",
      name: businessInfo.owner,
    },
    foundingDate: String(businessInfo.established),
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 5,
      maxValue: 20,
    },
    sameAs: Object.values(businessInfo.social).filter((url) => url !== "#"),
    areaServed: [
      {
        "@type": "City",
        name: "Bengaluru",
        "@id": "https://www.wikidata.org/wiki/Q1355",
      },
      {
        "@type": "State",
        name: "Karnataka",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Products and Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Rajesh Kumar" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Great Prices & Quality Products. Sancheti Computers has been my go-to store for all IT needs.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Priya Sharma" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Best price compared to other stores, genuine service. Very professional team.",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sancheti Computers",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/products?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sancheti Computers",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessInfo.phone,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Kannada"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${businessInfo.address.street}, ${businessInfo.address.area}`,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.pincode,
      addressCountry: "IN",
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` },
      { "@type": "ListItem", position: 3, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 4, name: "Products", item: `${siteUrl}/products` },
      { "@type": "ListItem", position: 5, name: "Contact", item: `${siteUrl}/contact` },
    ],
  };

  const productSchema = products.slice(0, 6).map((p) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    category: p.category,
    brand: p.name.split(" ")[0],
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: p.price.replace(/[^0-9]/g, ""),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Sancheti Computers",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "10",
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {productSchema.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
