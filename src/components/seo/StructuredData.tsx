import { Helmet } from 'react-helmet-async';

// Organization Schema
export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ConvertiLab",
    "url": "https://convertilab.com",
    "logo": "https://convertilab.com/favicon.png",
    "description": "Agence de marketing digital spécialisée en SEO, publicité en ligne, social media et création de sites web",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressCountry": "France"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33783494709",
      "contactType": "customer service",
      "email": "contact@convertilab.com",
      "availableLanguage": ["French"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/convertilab"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Local Business Schema
export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ConvertiLab",
    "image": "https://convertilab.com/favicon.png",
    "description": "Agence de marketing digital spécialisée en SEO, publicité en ligne, social media et création de sites web",
    "@id": "https://convertilab.com",
    "url": "https://convertilab.com",
    "telephone": "+33783494709",
    "email": "contact@convertilab.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressCountry": "FR"
    },
    "priceRange": "€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Services Schema
export const ServicesSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Marketing Digital",
    "provider": {
      "@type": "Organization",
      "name": "ConvertiLab",
      "url": "https://convertilab.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Marketing Digital ConvertiLab",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Référencement Naturel",
            "description": "Stratégie SEO complète pour dominer les résultats Google"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Publicité Google Ads & Meta Ads",
            "description": "Campagnes publicitaires ciblées pour générer des leads et des ventes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Management",
            "description": "Gestion et stratégie réseaux sociaux pour développer votre communauté"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Création de Sites Web",
            "description": "Sites web performants optimisés pour la conversion"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSchema = ({ faqs }: { faqs: FAQItem[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Review/Testimonial Schema
interface Review {
  author: string;
  reviewBody: string;
  rating: number;
}

export const ReviewsSchema = ({ reviews }: { reviews: Review[] }) => {
  const aggregateRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ConvertiLab",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.toFixed(1),
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": reviews.length.toString()
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://convertilab.com${item.url}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Product/Offer Schema (for special offers)
interface ProductOffer {
  name: string;
  description: string;
  price: string;
  currency?: string;
  availability?: string;
}

export const ProductSchema = ({ offer }: { offer: ProductOffer }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": offer.name,
    "description": offer.description,
    "brand": {
      "@type": "Organization",
      "name": "ConvertiLab"
    },
    "offers": {
      "@type": "Offer",
      "price": offer.price,
      "priceCurrency": offer.currency || "EUR",
      "availability": offer.availability || "https://schema.org/LimitedAvailability",
      "seller": {
        "@type": "Organization",
        "name": "ConvertiLab"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Case Study/Article Schema
interface CaseStudyData {
  title: string;
  description: string;
  image: string;
  datePublished?: string;
  author?: string;
}

export const CaseStudySchema = ({ caseStudy }: { caseStudy: CaseStudyData }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.description,
    "image": caseStudy.image,
    "datePublished": caseStudy.datePublished || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": caseStudy.author || "ConvertiLab"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ConvertiLab",
      "logo": {
        "@type": "ImageObject",
        "url": "https://convertilab.com/favicon.png"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
