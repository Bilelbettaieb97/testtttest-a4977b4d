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

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default WebSiteSchema;
