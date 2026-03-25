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
import { Search, ArrowRight, Rocket, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const categories = ["Tous", "Business", "Web Design", "SEO", "Technique"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const filteredArticles = blogArticles.filter(article => {
    const matchesCategory = selectedCategory === "Tous" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = filteredArticles[0];
  const otherArticles = filteredArticles.slice(1);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribing(true);
    try {
      const { error } = await supabase.from("newsletter_subscriptions").insert({ email: newsletterEmail });
      if (error) throw error;
      toast({ title: "✅ Inscription réussie !", description: "Vous recevrez nos prochains articles par email." });
      setNewsletterEmail("");
    } catch {
      toast({ title: "Erreur", description: "Veuillez réessayer.", variant: "destructive" });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        url="/blog"
        title="Blog - Conseils Web, SEO et Business"
        description="Articles et guides pratiques sur la création de sites web, le SEO et le marketing digital. Conseils d'experts pour développer votre business en ligne."
        keywords="blog web design, conseils SEO, création site web, marketing digital, business en ligne"
      />
      
      <BreadcrumbSchema items={[
        { name: "Accueil", url: "/" },
        { name: "Blog", url: "/blog" }
      ]} />
      
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/">Accueil</Link></BreadcrumbLink>
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
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary text-primary-foreground border-0" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">Aucun article trouvé pour cette recherche.</p>
              <Button 
                variant="link" 
                onClick={() => { setSearchQuery(""); setSelectedCategory("Tous"); }}
                className="text-primary mt-2"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          ) : (
            <>
              {/* Featured Article */}
              {featuredArticle && (
                <div className="mb-12">
                  <Badge className="mb-4 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-0">
                    ⭐ Article à la une
                  </Badge>
                  <BlogCard article={featuredArticle} featured />
                </div>
              )}

              {/* Inline CTA — Service promotion after featured */}
              <div className="mb-12 p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/5">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Rocket className="w-7 h-7" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      Besoin d'un site web qui convertit ?
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Landing page dès 300€, site vitrine dès 300€. Prix fixe, livraison garantie, satisfaction assurée.
                    </p>
                  </div>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground flex-shrink-0">
                    <Link to="/contact">
                      Devis gratuit
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Articles Grid */}
              {otherArticles.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherArticles.map((article, index) => (
                    <>
                      <BlogCard key={article.slug} article={article} />
                      {/* Lead magnet after 3rd article */}
                      {index === 2 && otherArticles.length > 3 && (
                        <div key="lead-magnet" className="md:col-span-2 lg:col-span-3 p-6 sm:p-8 rounded-2xl bg-muted/50 border border-border my-4">
                          <div className="max-w-2xl mx-auto text-center">
                            <h3 className="text-xl font-bold text-foreground mb-2">
                              📥 Guide gratuit : 10 erreurs qui tuent la conversion de votre site
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                              Rejoignez +2 000 entrepreneurs et recevez notre guide + nos meilleurs articles chaque semaine.
                            </p>
                            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                              <Input
                                type="email"
                                placeholder="Votre email professionnel"
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                required
                              />
                              <Button type="submit" disabled={isSubscribing} className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 flex-shrink-0">
                                {isSubscribing ? "..." : "Recevoir le guide"}
                              </Button>
                            </form>
                            <div className="flex flex-wrap justify-center gap-4 mt-3 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" /> Gratuit</span>
                              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" /> Pas de spam</span>
                              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" /> Désinscription en 1 clic</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Bottom Newsletter CTA */}
          <div className="mt-16 bg-primary rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Ne manquez aucun conseil
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Recevez nos meilleurs articles et guides exclusifs directement dans votre boîte mail. Rejoignez +2 000 entrepreneurs.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Votre email" 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="bg-background text-foreground"
              />
              <Button type="submit" disabled={isSubscribing} className="bg-background text-foreground hover:bg-background/90 font-semibold px-8">
                {isSubscribing ? "..." : "S'inscrire gratuitement"}
              </Button>
            </form>
            <p className="text-primary-foreground/60 text-xs mt-4">
              ✅ Gratuit · 🔒 Pas de spam · 1 email/semaine max
            </p>
          </div>

          {/* Service CTA bottom */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Vous avez un projet web en tête ?</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/contact">
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
