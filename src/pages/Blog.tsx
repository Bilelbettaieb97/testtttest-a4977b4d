import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogCard from "@/components/blog/BlogCard";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { blogArticles } from "@/data/blogArticles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Search } from "lucide-react";

const categories = ["Tous", "Business", "Web Design", "SEO", "Technique"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = blogArticles.filter(article => {
    const matchesCategory = selectedCategory === "Tous" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = filteredArticles[0];
  const otherArticles = filteredArticles.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/50 to-white">
      <SEO 
        url="/blog"
        title="Blog - Conseils Web, SEO et Business"
        description="Articles et guides sur la création de sites web, le SEO, le marketing digital et les stratégies pour développer votre business en ligne."
        keywords="blog web design, conseils SEO, création site web, marketing digital, business en ligne"
      />
      
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "https://convertilab.fr/" },
        { name: "Blog", url: "https://convertilab.fr/blog" }
      ]} />
      
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <BlogHeader />
          
          {/* Search & Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-gray-200 focus:border-purple-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 border-0" 
                    : "border-gray-200 hover:border-purple-300"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Aucun article trouvé pour cette recherche.</p>
              <Button 
                variant="link" 
                onClick={() => { setSearchQuery(""); setSelectedCategory("Tous"); }}
                className="text-purple-600 mt-2"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          ) : (
            <>
              {/* Featured Article */}
              {featuredArticle && (
                <div className="mb-12">
                  <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-0">
                    ⭐ Article à la une
                  </Badge>
                  <BlogCard article={featuredArticle} featured />
                </div>
              )}

              {/* Articles Grid */}
              {otherArticles.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherArticles.map(article => (
                    <BlogCard key={article.slug} article={article} />
                  ))}
                </div>
              )}
            </>
          )}

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Recevez nos meilleurs conseils
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour recevoir des conseils exclusifs sur le web et le business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Votre email" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
