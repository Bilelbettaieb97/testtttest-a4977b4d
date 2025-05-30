
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ShoppingCart, Globe, Utensils, Heart, Car, Home, Briefcase, Camera, Users, TrendingUp, Clock, Star } from "lucide-react";
import PortfolioCard from "./portfolio/PortfolioCard";
import PortfolioHeader from "./portfolio/PortfolioHeader";
import PortfolioCTA from "./portfolio/PortfolioCTA";

const Portfolio = () => {
  // Réduire le nombre de cas pour améliorer les performances
  const cases = [
    {
      icon: <ShoppingCart className="w-6 h-6 text-green-600" />,
      sector: "E-commerce",
      client: "Boutique Élégance",
      title: "Site e-commerce haute conversion",
      description: "Refonte complète avec optimisation du tunnel de vente et paiement sécurisé.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      metrics: [
        { label: "Ventes", value: "+340%", icon: TrendingUp },
        { label: "Conversion", value: "4.8%", icon: Star },
        { label: "Temps", value: "1.2s", icon: Clock }
      ],
      technologies: ["React", "Stripe"],
      results: "CA multiplié par 3 en 6 mois",
      testimonial: "Notre boutique en ligne génère plus que notre magasin physique !",
      author: "Sophie Martineau"
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      sector: "Médical",
      client: "Cabinet Dr. Laurent",
      title: "Site médical avec prise de RDV",
      description: "Site professionnel avec système de réservation en ligne.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      metrics: [
        { label: "RDV", value: "85%", icon: Users },
        { label: "Patients", value: "+180", icon: TrendingUp },
        { label: "Note", value: "9.8/10", icon: Star }
      ],
      technologies: ["Next.js", "Calendly"],
      results: "70% d'appels en moins",
      testimonial: "Nos patients adorent prendre RDV 24h/24 !",
      author: "Dr. Laurent"
    },
    {
      icon: <Utensils className="w-6 h-6 text-purple-600" />,
      sector: "Restaurant",
      client: "Le Gourmet",
      title: "Site gastronomique avec commande",
      description: "Site vitrine avec menu interactif et réservations en ligne.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      metrics: [
        { label: "Réservations", value: "+250%", icon: Users },
        { label: "Commandes", value: "+400%", icon: ShoppingCart },
        { label: "Avis", value: "4.9★", icon: Star }
      ],
      technologies: ["WordPress", "WooCommerce"],
      results: "60% de CA en plus pendant Covid",
      testimonial: "Le site nous a sauvés pendant les fermetures !",
      author: "Pierre Dubois"
    },
    {
      icon: <Home className="w-6 h-6 text-indigo-600" />,
      sector: "Immobilier",
      client: "Prestige Habitat",
      title: "Plateforme immobilière moderne",
      description: "Site avec recherche avancée et visite virtuelle.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      metrics: [
        { label: "Visiteurs", value: "+300%", icon: Users },
        { label: "Demandes", value: "+180%", icon: TrendingUp },
        { label: "Conversion", value: "8.2%", icon: Star }
      ],
      technologies: ["React", "Maps"],
      results: "30% de vente plus rapide",
      testimonial: "Nous sommes l'agence de référence !",
      author: "Catherine Moreau"
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 relative overflow-hidden" id="portfolio">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <PortfolioHeader />

        <div className="mb-8 relative">
          <Carousel className="w-full max-w-6xl mx-auto" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {cases.map((caseStudy, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <PortfolioCard caseStudy={caseStudy} />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex -left-12 bg-white shadow-lg border-2 border-purple-200 text-purple-600 w-10 h-10" />
            <CarouselNext className="hidden md:flex -right-12 bg-white shadow-lg border-2 border-purple-200 text-purple-600 w-10 h-10" />
          </Carousel>
          
          <div className="flex md:hidden justify-center mt-3 text-sm text-gray-500">
            <span>Glissez pour voir plus →</span>
          </div>
        </div>

        <PortfolioCTA />
      </div>
    </section>
  );
};

export default Portfolio;
