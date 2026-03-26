import { Helmet } from 'react-helmet-async';

const WebSiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ConvertiLab",
    "alternateName": "ConvertiLab - Agence Web Paris",
    "url": "https://convertilab.com",
    "description": "Agence web à Paris & Rueil-Malmaison : création de sites internet, SEO, Google Ads, Meta Ads.",
    "publisher": {
      "@type": "Organization",
      "name": "ConvertiLab",
      "logo": {
        "@type": "ImageObject",
        "url": "https://convertilab.com/favicon.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://convertilab.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "fr-FR"
  };

  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Navigation principale",
    "hasPart": [
      { "@type": "WebPage", "name": "Accueil", "url": "https://convertilab.com/" },
      { "@type": "WebPage", "name": "Services", "url": "https://convertilab.com/services" },
      { "@type": "WebPage", "name": "Maquette Gratuite", "url": "https://convertilab.com/demande-maquette" },
      { "@type": "WebPage", "name": "Portfolio", "url": "https://convertilab.com/portfolio" },
      { "@type": "WebPage", "name": "Blog", "url": "https://convertilab.com/blog" },
      { "@type": "WebPage", "name": "Contact", "url": "https://convertilab.com/contact" },
      { "@type": "WebPage", "name": "À propos", "url": "https://convertilab.com/a-propos" }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(siteNavigationSchema)}
      </script>
    </Helmet>
  );
};

export default WebSiteSchema;
