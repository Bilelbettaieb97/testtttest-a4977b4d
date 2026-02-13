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
  title: "ConvertiLab - Agence Marketing Digital Paris | SEO, Ads, Social Media",
  description: "Agence de marketing digital à Paris. SEO, Google Ads, Meta Ads, Social Media, Email Marketing, création de sites web. Stratégies data-driven pour booster votre croissance.",
  keywords: "agence marketing digital, SEO, Google Ads, Meta Ads, social media, email marketing, création site web, marketing digital Paris",
  image: "https://storage.googleapis.com/gpt-engineer-file-uploads/GexdTExH3INRxljHBMsWqAtBwGy2/social-images/social-1764690270670-Capture d'écran 2025-12-01 à 13.25.00.png",
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
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={metaUrl} />

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
