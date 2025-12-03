import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getArticleBySlug, getRelatedArticles } from "@/data/blogArticles";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Helmet } from "react-helmet-async";

const BlogArticle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = getArticleBySlug(slug || "");
  const relatedArticles = getRelatedArticles(slug || "", 3);

  if (!article) {
    navigate("/blog");
    return null;
  }

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "image": article.image,
    "datePublished": article.publishedAt,
    "dateModified": article.publishedAt,
    "author": {
      "@type": "Organization",
      "name": article.author.name,
      "url": "https://convertilab.fr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ConvertiLab",
      "logo": {
        "@type": "ImageObject",
        "url": "https://convertilab.fr/favicon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://convertilab.fr/blog/${article.slug}`
    },
    "keywords": article.tags.join(", ")
  };

  const shareUrl = `https://convertilab.fr/blog/${article.slug}`;
  const shareText = encodeURIComponent(article.title);

  // Convert markdown-like content to HTML
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 mb-4">{line.replace('## ', '')}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-bold text-gray-900 mt-8 mb-3">{line.replace('### ', '')}</h3>;
        }
        // Blockquote
        if (line.startsWith('> ')) {
          return (
            <blockquote key={index} className="border-l-4 border-purple-500 pl-4 py-2 my-6 bg-purple-50 rounded-r-lg italic text-gray-700">
              {line.replace('> ', '').replace(/"/g, '')}
            </blockquote>
          );
        }
        // List items
        if (line.startsWith('- ')) {
          return (
            <li key={index} className="ml-6 mb-2 text-gray-700 list-disc">
              {line.replace('- ', '')}
            </li>
          );
        }
        // Checkbox items
        if (line.startsWith('- [ ] ')) {
          return (
            <li key={index} className="ml-6 mb-2 text-gray-700 list-none flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-gray-300 rounded"></span>
              {line.replace('- [ ] ', '')}
            </li>
          );
        }
        // Empty lines
        if (line.trim() === '') {
          return <br key={index} />;
        }
        // Bold text and links
        let processedLine = line
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-purple-600 hover:underline">$1</a>');
        
        // Regular paragraphs
        return (
          <p 
            key={index} 
            className="text-gray-700 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: processedLine }}
          />
        );
      });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        url={`/blog/${article.slug}`}
        title={article.title}
        description={article.metaDescription}
        image={article.image}
        type="article"
        keywords={article.tags.join(', ')}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      <BreadcrumbSchema 
        items={[
          { name: 'Accueil', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: article.title, url: `/blog/${article.slug}` }
        ]}
      />
      
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
            <div className="container mx-auto max-w-4xl">
              <Button
                variant="ghost"
                onClick={() => navigate("/blog")}
                className="text-white hover:bg-white/20 mb-4 -ml-2"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au blog
              </Button>
              
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 mb-4">
                {article.category}
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime} de lecture
                </span>
                <span className="flex items-center gap-2">
                  Par {article.author.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="py-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-gray-600">
                  #{tag}
                </Badge>
              ))}
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              {formatContent(article.content)}
            </article>

            {/* Share */}
            <Card className="mt-12 p-6 bg-gray-50 border-0">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Share2 className="w-5 h-5" />
                  <span className="font-medium">Partager cet article</span>
                </div>
                <div className="flex gap-3">
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#0077b5] text-white rounded-lg hover:opacity-90 transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#1da1f2] text-white rounded-lg hover:opacity-90 transition"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#1877f2] text-white rounded-lg hover:opacity-90 transition"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">Besoin d'un site web professionnel ?</h3>
              <p className="text-lg opacity-90 mb-6">
                Discutons de votre projet et obtenez un devis gratuit sous 24h
              </p>
              <Link to="/#contact">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3">
                  Demander un devis gratuit
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="bg-gray-50 py-16 mt-12">
            <div className="container mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                Articles similaires
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {relatedArticles.map(relatedArticle => (
                  <BlogCard key={relatedArticle.slug} article={relatedArticle} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogArticle;
