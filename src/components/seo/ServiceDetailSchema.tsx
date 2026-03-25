import { Helmet } from 'react-helmet-async';

interface ServiceDetailProps {
  name: string;
  description: string;
  url: string;
  price?: string;
  image?: string;
}

const ServiceDetailSchema = ({ name, description, url, price, image }: ServiceDetailProps) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": `https://convertilab.com${url}`,
    "provider": {
      "@type": "ProfessionalService",
      "name": "ConvertiLab",
      "url": "https://convertilab.com",
      "telephone": "+33616477245",
      "email": "Contact@convertilab.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1 Rue du 4 Septembre",
        "addressLocality": "Rueil-Malmaison",
        "postalCode": "92500",
        "addressRegion": "Île-de-France",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.8769,
        "longitude": 2.1894
      },
      "priceRange": "€€"
    },
    "areaServed": [
      { "@type": "City", "name": "Paris" },
      { "@type": "AdministrativeArea", "name": "Île-de-France" },
      { "@type": "Country", "name": "France" }
    ],
    "serviceType": name
  };

  if (price) {
    schema.offers = {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    };
  }

  if (image) {
    schema.image = image;
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ServiceDetailSchema;
