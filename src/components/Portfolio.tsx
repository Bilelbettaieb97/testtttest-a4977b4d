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
import portfolioArancini from "@/assets/portfolio-arancini-hero.png";
import portfolioFunestore from "@/assets/portfolio-funestore-hero.png";
import portfolioPapapret from "@/assets/portfolio-papapret-hero.png";
import portfolioAcb from "@/assets/portfolio-acb-hero.png";
import portfolioEleva from "@/assets/portfolio-eleva-hero.png";
import portfolioAdsb from "@/assets/portfolio-adsb-hero.png";
import portfolioAsi from "@/assets/portfolio-asi-hero.png";
import portfolioTrievent from "@/assets/portfolio-trievent-hero.png";
import portfolioTemplezen from "@/assets/portfolio-templezen-hero.png";
import portfolioInstitutNomad from "@/assets/portfolio-institut-nomad-hero.png";
import portfolioAhstudio from "@/assets/portfolio-ahstudio-hero.png";
import portfolioVinoboat from "@/assets/portfolio-vinoboat-hero.png";
import portfolioCouleursable from "@/assets/portfolio-couleursable-hero.png";

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
      slug: "monsieur-arancini"
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-purple-600" />,
      sector: "E-commerce B2B",
      client: "Funestore",
      title: "E-commerce B2B pour le secteur funéraire",
      description: "Création de site e-commerce avec catalogue professionnel, parcours d'achat optimisé et espace client réservé.",
      image: portfolioFunestore,
      metrics: [
        { label: "Catalogue", value: "24/7", icon: Clock },
        { label: "Commandes", value: "En ligne", icon: TrendingUp },
        { label: "Réductions", value: "-30%", icon: Star }
      ],
      technologies: ["E-commerce", "UX Design", "B2B"],
      results: "Digitalisation complète",
      testimonial: "Billel a pris le temps de bien comprendre notre écosystème et de proposer un magnifique site dans un domaine assez feutré et confidentiel.",
      author: "Funestore",
      slug: "funestore"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
      sector: "Formation / Infoproduit",
      client: "PapaPrêt",
      title: "Landing page haute conversion pour formation",
      description: "Landing page avec tunnel de vente, copywriting persuasif et design UX optimisé pour la conversion.",
      image: portfolioPapapret,
      metrics: [
        { label: "Papas formés", value: "15K+", icon: Users },
        { label: "Note", value: "4.9/5", icon: Star },
        { label: "Livraison", value: "24h", icon: Clock }
      ],
      technologies: ["Landing Page", "Copywriting", "UX Conversion"],
      results: "Tunnel de vente optimisé",
      testimonial: "Un vrai partenaire très réactif qui pense votre projet pour enclencher une compréhension immédiate et un passage à l'acte d'achat.",
      author: "Gilles",
      slug: "papapret"
    },
    {
      icon: <Home className="w-6 h-6 text-orange-600" />,
      sector: "BTP / Rénovation",
      client: "ACB Rénovation",
      title: "Site vitrine BTP avec génération de devis",
      description: "Site professionnel avec structuration des services, optimisation UX pour leads et appels à l'action devis gratuit.",
      image: portfolioAcb,
      metrics: [
        { label: "Expérience", value: "12+ ans", icon: Star },
        { label: "Devis", value: "Gratuit", icon: TrendingUp },
        { label: "Garantie", value: "Décennale", icon: Star }
      ],
      technologies: ["Site Vitrine", "SEO Local", "UX Leads"],
      results: "Présence digitale pro",
      testimonial: "Réactivité impressionnante et compréhension de mes besoins. Le site a été fait dans la journée. Déjà 2 collègues vont travailler avec lui.",
      author: "ACB Rénovation",
      slug: "acb-renovation"
    },
    {
      icon: <Home className="w-6 h-6 text-amber-700" />,
      sector: "Conciergerie / Immobilier",
      client: "Eleva Conciergerie",
      title: "Site premium pour conciergerie locative",
      description: "Site haut de gamme avec estimation gratuite, tunnel de conversion et design luxueux pour conciergerie de location courte durée.",
      image: portfolioEleva,
      metrics: [
        { label: "Propriétaires", value: "+50", icon: Users },
        { label: "Note", value: "4.9/5", icon: Star },
        { label: "Réponse", value: "24h", icon: Clock }
      ],
      technologies: ["Site Vitrine", "UX Premium", "Conversion"],
      results: "Positionnement premium",
      testimonial: "Le site est incroyable, très professionnel et surtout pensé pour vendre. Le rendu est premium et optimisé pour convertir.",
      author: "Eleva Conciergerie",
      slug: "eleva-conciergerie"
    },
    {
      icon: <Users className="w-6 h-6 text-red-600" />,
      sector: "Association",
      client: "ADSB Wissembourg",
      title: "Site vitrine pour association de donneurs de sang",
      description: "Site web avec design engageant, structuration des collectes et appels à l'action pour le don de sang.",
      image: portfolioAdsb,
      metrics: [
        { label: "Mission", value: "Sauver", icon: Star },
        { label: "Collectes", value: "Agenda", icon: Clock },
        { label: "Dons", value: "En ligne", icon: TrendingUp }
      ],
      technologies: ["Site Vitrine", "UX Design", "Engagement"],
      results: "Visibilité digitale",
      testimonial: "Un travail très professionnel sur un projet technique complexe. Le site est clair, moderne et permet de présenter efficacement notre solution.",
      author: "ADSB Wissembourg",
      slug: "adsb-wissembourg"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-red-600" />,
      sector: "Sécurité Incendie",
      client: "Alliance Sécurité Incendie",
      title: "Site vitrine B2B sécurité incendie",
      description: "Site professionnel avec structuration des services techniques, génération de leads et mise en avant de l'expertise.",
      image: portfolioAsi,
      metrics: [
        { label: "Copropriétés", value: "150+", icon: Users },
        { label: "Conformité", value: "98%", icon: Star },
        { label: "Intervention", value: "24h", icon: Clock }
      ],
      technologies: ["Site Vitrine", "UX B2B", "Génération Leads"],
      results: "Positionnement expert",
      testimonial: "Un site très professionnel qui reflète parfaitement notre expertise et nous aide à présenter efficacement nos services.",
      author: "Alliance Sécurité Incendie",
      slug: "alliance-securite-incendie"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-green-600" />,
      sector: "Recyclage / Événementiel",
      client: "Tri Event",
      title: "Site vitrine éco-responsable recyclage événementiel",
      description: "Site moderne avec positionnement écologique, structuration de l'offre tri/recyclage et CTAs pour devis.",
      image: portfolioTrievent,
      metrics: [
        { label: "Engagement", value: "Éco", icon: Star },
        { label: "Services", value: "Complet", icon: TrendingUp },
        { label: "Devis", value: "Gratuit", icon: Clock }
      ],
      technologies: ["Site Vitrine", "Design Éco", "UX"],
      results: "Positionnement écologique",
      testimonial: "Le site reflète parfaitement notre engagement écologique et notre activité. Le rendu est professionnel et clair.",
      author: "Tri Event",
      slug: "trievent"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      sector: "Bien-être / Massage",
      client: "Le Temple de l'Énergie",
      title: "Site vitrine immersif pour espace bien-être",
      description: "Site apaisant avec design zen premium, structuration des prestations et optimisation pour la prise de rendez-vous.",
      image: portfolioTemplezen,
      metrics: [
        { label: "Ambiance", value: "Premium", icon: Star },
        { label: "Prestations", value: "Claires", icon: TrendingUp },
        { label: "Réservation", value: "En ligne", icon: Clock }
      ],
      technologies: ["Site Vitrine", "Design Zen", "UX Booking"],
      results: "Image haut de gamme",
      testimonial: "Le site reflète parfaitement l'univers que je voulais transmettre. C'est élégant, apaisant et très professionnel.",
      author: "Le Temple de l'Énergie",
      slug: "temple-zen"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-yellow-600" />,
      sector: "Éducation / Pédagogie",
      client: "Institut Nomad",
      title: "Site vitrine pour accompagnement éducatif alternatif",
      description: "Site institutionnel moderne avec structuration d'une offre éducative complexe et optimisation UX pour prise de contact.",
      image: portfolioInstitutNomad,
      metrics: [
        { label: "Pôles", value: "3", icon: Star },
        { label: "Satisfaction", value: "95%", icon: TrendingUp },
        { label: "Autonomie", value: "Admin", icon: Users }
      ],
      technologies: ["Site Vitrine", "Design Institutionnel", "UX Contact"],
      results: "Positionnement éducatif unique",
      testimonial: "Convertilab a compris rapidement ce que je souhaitais mettre en avant. Il a rendu mon site plus professionnel avec une grande autonomie de gestion.",
      author: "Institut Nomad",
      slug: "institut-nomad"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-rose-600" />,
      sector: "Photographie / Branding",
      client: "AH Studio Caen",
      title: "Site vitrine portfolio pour photographe professionnel",
      description: "Site visuel premium avec portfolio photo, structuration des offres shooting et optimisation pour la prise de rendez-vous.",
      image: portfolioAhstudio,
      metrics: [
        { label: "Portfolio", value: "Premium", icon: Star },
        { label: "Prestations", value: "Claires", icon: TrendingUp },
        { label: "Réservation", value: "En ligne", icon: Clock }
      ],
      technologies: ["Site Vitrine", "Design Visuel", "UX Portfolio"],
      results: "Image professionnelle renforcée",
      testimonial: "De l'idée à la finition, Bilel nous accompagne tout le long. Disponible et accessible, mon expérience client est plus que parfaite.",
      author: "AH Studio Caen",
      slug: "ah-studio"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-blue-600" />,
      sector: "Tourisme de Luxe",
      client: "Vinoboat Prestige",
      title: "Landing page premium pour expérience nautique de luxe",
      description: "Landing page haut de gamme avec design immersif, copywriting émotionnel et optimisation UX pour la réservation.",
      image: portfolioVinoboat,
      metrics: [
        { label: "Note", value: "4.9/5", icon: Star },
        { label: "Clients", value: "500+", icon: Users },
        { label: "Réservation", value: "En ligne", icon: Clock }
      ],
      technologies: ["Landing Page", "Design Luxe", "UX Booking"],
      results: "Positionnement premium exclusif",
      testimonial: "Le site est exactement à l'image de notre service : élégant, premium et immersif.",
      author: "Vinoboat Prestige",
      slug: "vinoboat"
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
