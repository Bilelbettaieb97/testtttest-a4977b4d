import { Helmet } from 'react-helmet-async';

interface BlogArticleItem {
  title: string;
  slug: string;
  publishedAt: string;
}

const BlogListingSchema = ({ articles }: { articles: BlogArticleItem[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Blog ConvertiLab - Conseils Web, SEO et Marketing Digital",
    "description": "Articles et guides pratiques sur la création de sites web, le SEO et le marketing digital.",
    "url": "https://convertilab.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "ConvertiLab",
      "logo": {
        "@type": "ImageObject",
        "url": "https://convertilab.com/favicon.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": articles.slice(0, 10).map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://convertilab.com/blog/${article.slug}`,
        "name": article.title
      }))
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

export default BlogListingSchema;
