
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ShoppingCart, Utensils, Home, Users, TrendingUp, Clock, Star, ChevronLeft, ChevronRight, Dumbbell, Sparkles, BookOpen, Briefcase } from "lucide-react";
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
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-red-600" />,
      sector: "Sport & Fitness",
      client: "FitZone Studio",
      title: "Plateforme fitness avec abonnements",
      description: "Site avec réservation de cours, suivi d'entraînement et paiement en ligne.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      metrics: [
        { label: "Membres", value: "+420%", icon: Users },
        { label: "Réservations", value: "95%", icon: TrendingUp },
        { label: "Rétention", value: "89%", icon: Star }
      ],
      technologies: ["React", "Stripe"],
      results: "3x plus de membres actifs",
      testimonial: "La digitalisation a révolutionné notre salle !",
      author: "Marc Leroy"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-pink-600" />,
      sector: "Beauté & Bien-être",
      client: "Institut Belle Vie",
      title: "Site spa avec réservation en ligne",
      description: "Plateforme élégante avec booking, packages et programme de fidélité.",
      image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      metrics: [
        { label: "Réservations", value: "+280%", icon: Users },
        { label: "Packages", value: "+190%", icon: ShoppingCart },
        { label: "Satisfaction", value: "9.6/10", icon: Star }
      ],
      technologies: ["WordPress", "Bookly"],
      results: "Carnet complet 3 semaines à l'avance",
      testimonial: "Nous n'avons plus jamais de créneaux vides !",
      author: "Émilie Bernard"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-orange-600" />,
      sector: "Formation",
      client: "SkillsUp Academy",
      title: "Plateforme e-learning moderne",
      description: "Site de formation en ligne avec vidéos, quiz et certifications.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      metrics: [
        { label: "Étudiants", value: "+550%", icon: Users },
        { label: "Cours vendus", value: "+380%", icon: TrendingUp },
        { label: "Complétion", value: "78%", icon: Star }
      ],
      technologies: ["React", "Vimeo"],
      results: "200+ étudiants actifs quotidiennement",
      testimonial: "Notre plateforme rivalise avec les géants !",
      author: "Thomas Petit"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-cyan-600" />,
      sector: "Services B2B",
      client: "ConsultPro",
      title: "Site corporate avec génération de leads",
      description: "Site vitrine optimisé SEO avec formulaires intelligents et tunnel de conversion.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      metrics: [
        { label: "Leads", value: "+460%", icon: Users },
        { label: "Conversion", value: "12.3%", icon: Star },
        { label: "ROI", value: "850%", icon: TrendingUp }
      ],
      technologies: ["Next.js", "HubSpot"],
      results: "Pipeline commercial multiplié par 5",
      testimonial: "Le meilleur investissement de l'année !",
      author: "Laurent Dupuis"
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
            
            <CarouselPrevious className="hidden md:flex -left-12 bg-white shadow-xl border-2 border-purple-200 text-purple-600 w-12 h-12 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 hover:scale-110">
              <ChevronLeft className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="hidden md:flex -right-12 bg-white shadow-xl border-2 border-purple-200 text-purple-600 w-12 h-12 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 hover:scale-110">
              <ChevronRight className="h-6 w-6" />
            </CarouselNext>
          </Carousel>
          
          <div className="flex md:hidden justify-center mt-4 text-sm text-gray-600 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mx-auto w-fit shadow-lg border border-purple-100">
            <ChevronLeft className="w-4 h-4 mr-1 text-purple-600" />
            <span className="font-medium">Glissez pour voir plus d'exemples</span>
            <ChevronRight className="w-4 h-4 ml-1 text-purple-600" />
          </div>
        </div>

        <PortfolioCTA />
      </div>
    </section>
  );
};

export default Portfolio;
