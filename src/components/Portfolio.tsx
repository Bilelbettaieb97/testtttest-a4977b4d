import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ShoppingCart, Utensils, Home, Users, TrendingUp, Clock, Star, ChevronLeft, ChevronRight, Dumbbell, Sparkles, BookOpen, Briefcase } from "lucide-react";
import PortfolioCard from "./portfolio/PortfolioCard";
import PortfolioHeader from "./portfolio/PortfolioHeader";
import PortfolioCTA from "./portfolio/PortfolioCTA";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.webp";
import portfolioRestaurant from "@/assets/portfolio-restaurant.webp";
import portfolioImmobilier from "@/assets/portfolio-immobilier.webp";
import portfolioFitness from "@/assets/portfolio-fitness.webp";
import portfolioBeaute from "@/assets/portfolio-beaute.webp";
import portfolioFormation from "@/assets/portfolio-formation.webp";
import portfolioB2B from "@/assets/portfolio-b2b.webp";
import portfolioArancini from "@/assets/portfolio-arancini.jpg";

const Portfolio = () => {
  const cases = [
    {
      icon: <Utensils className="w-6 h-6 text-orange-600" />,
      sector: "Restauration",
      client: "Monsieur Arancini",
      title: "Site vitrine premium pour artisan sicilien",
      description: "Création de site web vitrine avec design UI/UX premium, optimisation mobile et structuration de l'offre produit.",
      image: portfolioArancini,
      metrics: [
        { label: "Crédibilité", value: "+100%", icon: TrendingUp },
        { label: "Saveurs", value: "15+", icon: Star },
        { label: "Certifié", value: "HACCP", icon: Star }
      ],
      technologies: ["Site Vitrine", "Design UI/UX", "Branding"],
      results: "Image de marque premium",
      testimonial: "Très sérieux et réactifs, ils m'ont fait un très joli site web avec de bons conseils et du professionnalisme. Je recommande vivement !",
      author: "Monsieur Arancini",
      slug: undefined
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-green-600" />,
      sector: "E-commerce",
      client: "Boutique Élégance",
      title: "Stratégie digitale e-commerce complète",
      description: "SEO + Google Shopping + Meta Ads + refonte site pour une boutique de mode en ligne.",
      image: portfolioEcommerce,
      metrics: [
        { label: "CA en ligne", value: "+340%", icon: TrendingUp },
        { label: "ROAS", value: "x4.8", icon: Star },
        { label: "CPA", value: "-55%", icon: Clock }
      ],
      technologies: ["SEO", "Google Ads", "Meta Ads"],
      results: "CA multiplié par 3 en 6 mois",
      testimonial: "Notre boutique en ligne génère plus que notre magasin physique !",
      author: "Sophie Martineau",
      slug: "boutique-elegance"
    },
    {
      icon: <Utensils className="w-6 h-6 text-purple-600" />,
      sector: "Restaurant",
      client: "Le Gourmet",
      title: "Acquisition locale multi-canal",
      description: "Google Ads local + SEO + gestion réseaux sociaux pour un restaurant gastronomique.",
      image: portfolioRestaurant,
      metrics: [
        { label: "Réservations", value: "+250%", icon: Users },
        { label: "Visibilité", value: "Top 3", icon: Star },
        { label: "Avis Google", value: "4.9★", icon: Star }
      ],
      technologies: ["SEO Local", "Google Ads", "Social Media"],
      results: "60% de CA en plus",
      testimonial: "On ne pouvait plus gérer toutes les réservations !",
      author: "Pierre Dubois",
      slug: "le-gourmet"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-pink-600" />,
      sector: "Beauté & Bien-être",
      client: "Institut Belle Vie",
      title: "Social Media + Meta Ads + SEO",
      description: "Stratégie Instagram/Facebook + publicité Meta + référencement local.",
      image: portfolioBeaute,
      metrics: [
        { label: "Réservations", value: "+280%", icon: Users },
        { label: "Abonnés IG", value: "+5K", icon: Star },
        { label: "Engagement", value: "8.5%", icon: TrendingUp }
      ],
      technologies: ["Meta Ads", "Instagram", "SEO Local"],
      results: "Carnet complet 3 semaines à l'avance",
      testimonial: "Nous n'avons plus jamais de créneaux vides !",
      author: "Émilie Bernard",
      slug: "institut-belle-vie"
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-red-600" />,
      sector: "Sport & Fitness",
      client: "FitZone Studio",
      title: "Funnel d'acquisition complet",
      description: "Landing page + Google Ads + Meta Ads + email marketing pour acquisition d'abonnés.",
      image: portfolioFitness,
      metrics: [
        { label: "Membres", value: "+420%", icon: Users },
        { label: "Coût/Lead", value: "3.20€", icon: TrendingUp },
        { label: "Rétention", value: "89%", icon: Star }
      ],
      technologies: ["Google Ads", "Meta Ads", "Email"],
      results: "3x plus de membres actifs",
      testimonial: "Le marketing digital a révolutionné notre salle !",
      author: "Marc Leroy",
      slug: "fitzone-studio"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-cyan-600" />,
      sector: "Services B2B",
      client: "ConsultPro",
      title: "Génération de leads B2B",
      description: "SEO + LinkedIn + Google Ads + site optimisé conversion pour un cabinet de conseil.",
      image: portfolioB2B,
      metrics: [
        { label: "Leads", value: "+460%", icon: Users },
        { label: "Conversion", value: "12.3%", icon: Star },
        { label: "ROI", value: "850%", icon: TrendingUp }
      ],
      technologies: ["SEO", "LinkedIn Ads", "Google Ads"],
      results: "Pipeline commercial multiplié par 5",
      testimonial: "Le meilleur investissement marketing de l'année !",
      author: "Laurent Dupuis",
      slug: "consultpro"
    }
  ];

  return (
    <section className="pt-4 sm:pt-6 pb-8 sm:pb-12 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 relative overflow-hidden" id="portfolio">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <PortfolioHeader />

        <div className="mb-8 relative" style={{ minHeight: '420px', contentVisibility: 'auto', containIntrinsicSize: 'auto 420px' } as React.CSSProperties}>
          <Carousel className="w-full max-w-6xl mx-auto" opts={{ align: "start", loop: true, containScroll: "trimSnaps" }}>
            <CarouselContent className="-ml-2 md:-ml-4 items-stretch" style={{ willChange: 'transform' }}>
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
