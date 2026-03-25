import { Helmet, HelmetProvider } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  structuredData?: object;
}

const defaultMeta = {
  title: "Agence Web Paris & Île-de-France | ConvertiLab",
  description: "Agence web à Paris & Rueil-Malmaison : création site internet, SEO, Google Ads, Meta Ads. +50 clients, +280% de CA moyen. Devis gratuit.",
  keywords: "agence web Paris, création site internet, SEO Paris, Google Ads Île-de-France, agence digitale Rueil-Malmaison, marketing digital Paris",
  image: "https://convertilab.com/og-image.png",
  url: "https://convertilab.com"
};

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  noindex = false,
  structuredData
}: SEOProps) => {
  const fullTitle = title 
    ? `${title} | ConvertiLab` 
    : defaultMeta.title;
  const metaDescription = description || defaultMeta.description;
  const metaKeywords = keywords || defaultMeta.keywords;
  const metaImage = image || defaultMeta.image;
  const metaUrl = url ? `${defaultMeta.url}${url}` : defaultMeta.url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      <link rel="canonical" href={metaUrl} />
      <link rel="alternate" hrefLang="fr" href={metaUrl} />
      <link rel="alternate" hrefLang="x-default" href={metaUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content="ConvertiLab" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={metaUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Additional SEO */}
      <meta name="geo.region" content="FR-92" />
      <meta name="geo.placename" content="Rueil-Malmaison" />
      <meta name="geo.position" content="48.8769;2.1894" />
      <meta name="ICBM" content="48.8769, 2.1894" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export { SEO, HelmetProvider };
