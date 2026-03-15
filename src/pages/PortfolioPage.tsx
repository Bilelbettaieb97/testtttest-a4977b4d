import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PortfolioComponent from '@/components/Portfolio';
import { BreadcrumbSchema, LocalBusinessSchema, ReviewsSchema } from '@/components/seo/StructuredData';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const PortfolioPage = () => {
  const breadcrumbItems = [
    { name: "Accueil", url: "https://convertilab.com/" },
    { name: "Portfolio", url: "https://convertilab.com/portfolio" }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio & Résultats Clients | +280% de CA Moyen | ConvertiLab</title>
        <meta name="description" content="Découvrez nos études de cas : +50 clients accompagnés, +280% de CA moyen. E-commerce, restaurants, B2B, beauté. Résultats concrets et mesurables." />
        <meta name="keywords" content="portfolio web, réalisations sites web, études de cas, résultats clients, création site web" />
        <link rel="canonical" href="https://convertilab.com/portfolio" />
        <meta property="og:title" content="Portfolio & Résultats Clients | ConvertiLab" />
        <meta property="og:description" content="+50 clients, +280% de CA moyen. Découvrez comment nos stratégies transforment les business de nos clients." />
        <meta property="og:url" content="https://convertilab.com/portfolio" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <Navigation />
      
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/">Accueil</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Portfolio</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Études de cas vérifiables</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Des Résultats Qui <span className="text-primary">Parlent d'Eux-Mêmes</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              +50 entreprises nous ont fait confiance. Voici leurs résultats concrets, mesurables et vérifiables.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg">
                <Link to="/contact">
                  Obtenir les mêmes résultats
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium text-foreground">4.9/5</span>
                <span>de satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span><strong className="text-foreground">+50</strong> clients accompagnés</span>
              </div>
            </div>
          </div>
        </section>
        
        <PortfolioComponent />

        {/* Bottom service CTA */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <p className="text-muted-foreground mb-4">Vous avez un projet en tête ?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default PortfolioPage;
