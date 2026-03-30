import { useMemo, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ShoppingCart, Utensils, Home, Users, TrendingUp, Clock, Star, ChevronLeft, ChevronRight, Sparkles, BookOpen, Briefcase, LayoutGrid, Globe, Rocket, Camera } from "lucide-react";
import PortfolioCard from "./portfolio/PortfolioCard";
import PortfolioHeader from "./portfolio/PortfolioHeader";
import PortfolioCTA from "./portfolio/PortfolioCTA";
import portfolioArancini from "@/assets/portfolio-arancini-hero.webp";
import portfolioFunestore from "@/assets/portfolio-funestore-hero.webp";
import portfolioPapapret from "@/assets/portfolio-papapret-hero.webp";
import portfolioAcb from "@/assets/portfolio-acb-hero.webp";
import portfolioEleva from "@/assets/portfolio-eleva-hero.webp";
import portfolioAdsb from "@/assets/portfolio-adsb-hero.webp";
import portfolioAsi from "@/assets/portfolio-asi-hero.webp";
import portfolioTrievent from "@/assets/portfolio-trievent-hero.webp";
import portfolioTemplezen from "@/assets/portfolio-templezen-hero.webp";
import portfolioInstitutNomad from "@/assets/portfolio-institut-nomad-hero.webp";
import portfolioAhstudio from "@/assets/portfolio-ahstudio-hero.webp";
import portfolioVinoboat from "@/assets/portfolio-vinoboat-hero.webp";
import portfolioCouleursable from "@/assets/portfolio-couleursable-hero.webp";
import portfolioFilmreel from "@/assets/portfolio-filmreel-hero.webp";
import portfolioArtdesroses from "@/assets/portfolio-artdesroses-hero.webp";
import portfolioSegermes from "@/assets/portfolio-segermes-hero.webp";
import portfolioSpectacle from "@/assets/portfolio-spectacle-hero.webp";
import portfolioEcrindeseoul from "@/assets/portfolio-ecrindeseoul-hero.webp";

interface PortfolioProps {
  activeCategory?: string;
}

const homepageCategories = [
  { id: "all", label: "Tous", icon: LayoutGrid },
  { id: "site-vitrine", label: "Sites Vitrine", icon: Globe },
  { id: "e-commerce", label: "E-commerce", icon: ShoppingCart },
  { id: "landing-page", label: "Landing Pages", icon: Rocket },
  { id: "portfolio", label: "Portfolios", icon: Camera },
];

const Portfolio = ({ activeCategory: externalCategory }: PortfolioProps) => {
  const [internalCategory, setInternalCategory] = useState("all");
  const isHomepage = externalCategory === undefined;
  const activeCategory = isHomepage ? internalCategory : externalCategory;
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
      slug: "monsieur-arancini",
      category: "site-vitrine"
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
      slug: "funestore",
      category: "e-commerce"
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
      slug: "papapret",
      category: "landing-page"
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
      slug: "acb-renovation",
      category: "site-vitrine"
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
      slug: "eleva-conciergerie",
      category: "site-vitrine"
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
      slug: "adsb-wissembourg",
      category: "site-vitrine"
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
      slug: "alliance-securite-incendie",
      category: "site-vitrine"
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
      slug: "trievent",
      category: "site-vitrine"
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
      slug: "temple-zen",
      category: "site-vitrine"
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
      slug: "institut-nomad",
      category: "site-vitrine"
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
      slug: "ah-studio",
      category: "portfolio"
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
      slug: "vinoboat",
      category: "landing-page"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      sector: "Coiffure / Beauté",
      client: "Couleur Sable by K",
      title: "Site vitrine premium pour salon de coiffure",
      description: "Site élégant avec mise en valeur du savoir-faire, structuration des prestations et optimisation pour la prise de rendez-vous.",
      image: portfolioCouleursable,
      metrics: [
        { label: "Expérience", value: "35+ ans", icon: Star },
        { label: "Produits", value: "100% naturels", icon: TrendingUp },
        { label: "Réservation", value: "En ligne", icon: Clock }
      ],
      technologies: ["Site Vitrine", "Design Beauté", "UX Booking"],
      results: "Image salon premium",
      testimonial: "Le site reflète parfaitement l'image de mon salon. Il est élégant, clair et met vraiment en valeur mon travail.",
      author: "Couleur Sable by K",
      slug: "couleur-sable",
      category: "site-vitrine"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-orange-500" />,
      sector: "Production Vidéo",
      client: "FilmReel Gallery",
      title: "Site portfolio cinématographique pour agence créative",
      description: "Site immersif avec design cinématographique, showreel vidéo et portfolio créatif premium.",
      image: portfolioFilmreel,
      metrics: [
        { label: "Impact", value: "Wow", icon: Star },
        { label: "Projets", value: "Portfolio", icon: TrendingUp },
        { label: "Booking", value: "En ligne", icon: Clock }
      ],
      technologies: ["Site Portfolio", "Design Ciné", "Motion"],
      results: "Image ultra premium",
      testimonial: "Le site met parfaitement en valeur mon univers créatif. L'effet visuel est incroyable.",
      author: "FilmReel Gallery",
      slug: "filmreel-gallery",
      category: "portfolio"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-rose-700" />,
      sector: "E-commerce / Art",
      client: "Art des Roses",
      title: "E-commerce artistique pour vente d'œuvres",
      description: "Site e-commerce avec design artistique immersif, catalogue d'œuvres et parcours d'achat optimisé.",
      image: portfolioArtdesroses,
      metrics: [
        { label: "Galerie", value: "24/7", icon: Clock },
        { label: "Œuvres", value: "En ligne", icon: TrendingUp },
        { label: "Ventes", value: "Direct", icon: Star }
      ],
      technologies: ["E-commerce", "Design Art", "UX Achat"],
      results: "Digitalisation des ventes",
      testimonial: "Le site met parfaitement en valeur mes œuvres et me permet enfin de les vendre en ligne.",
      author: "Art des Roses",
      slug: "art-des-roses",
      category: "e-commerce"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-yellow-700" />,
      sector: "E-commerce Premium",
      client: "Segermès",
      title: "E-commerce premium pour huile d'olive haut de gamme",
      description: "Site e-commerce luxe avec storytelling de marque, catalogue produits et parcours d'achat premium.",
      image: portfolioSegermes,
      metrics: [
        { label: "Depuis", value: "1950", icon: Star },
        { label: "Qualité", value: "Bio", icon: TrendingUp },
        { label: "Ventes", value: "En ligne", icon: Clock }
      ],
      technologies: ["E-commerce", "Design Luxe", "Storytelling"],
      results: "Positionnement premium",
      testimonial: "Le site reflète parfaitement la qualité et le positionnement premium de notre marque.",
      author: "Segermès",
      slug: "segermes",
      category: "e-commerce"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-pink-500" />,
      sector: "Événementiel / Spectacle",
      client: "Spectacle",
      title: "Landing page événementielle pour spectacle",
      description: "Landing page immersive avec design dynamique, présentation du spectacle et optimisation pour la réservation.",
      image: portfolioSpectacle,
      metrics: [
        { label: "Impact", value: "Immersif", icon: Star },
        { label: "Réservation", value: "En ligne", icon: TrendingUp },
        { label: "Promotion", value: "Digital", icon: Clock }
      ],
      technologies: ["Landing Page", "Design Événementiel", "UX Conversion"],
      results: "Promotion digitale réussie",
      testimonial: "Le site met parfaitement en valeur notre spectacle. Il est dynamique et donne immédiatement envie.",
      author: "Spectacle",
      slug: "spectacle",
      category: "landing-page"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-rose-400" />,
      sector: "Cosmétique / K-Beauty",
      client: "L'Écrin de Séoul",
      title: "Site e-commerce pour boutique cosmétique coréenne",
      description: "Site vitrine e-commerce avec design K-beauty raffiné, catalogue produits skincare et parcours d'achat optimisé.",
      image: portfolioEcrindeseoul,
      metrics: [
        { label: "Niche", value: "K-Beauty", icon: Star },
        { label: "Produits", value: "En ligne", icon: TrendingUp },
        { label: "UX", value: "Premium", icon: Clock }
      ],
      technologies: ["E-commerce", "Design Beauté", "Branding K-Beauty"],
      results: "Positionnement K-beauty moderne",
      testimonial: "Le site reflète parfaitement l'univers de la K-beauty. Il est moderne, clair et donne vraiment envie de découvrir les produits.",
      author: "L'Écrin de Séoul",
      slug: "ecrin-de-seoul",
      category: "e-commerce"
    }
  ];

  const isFiltered = activeCategory && activeCategory !== "all";

  const filteredCases = useMemo(() => {
    if (!isFiltered) return cases;
    return cases.filter(c => c.category === activeCategory);
  }, [activeCategory]);

  // Keep dedicated filtered grid behavior only on /portfolio page
  if (isFiltered && !isHomepage) {
    return (
      <section className="py-8 sm:py-12 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 relative overflow-hidden" id="portfolio">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <p className="text-center text-muted-foreground mb-6 font-medium">
            {filteredCases.length} projet{filteredCases.length > 1 ? 's' : ''} trouvé{filteredCases.length > 1 ? 's' : ''}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredCases.map((caseStudy, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
                <PortfolioCard caseStudy={caseStudy} />
              </div>
            ))}
          </div>
          <PortfolioCTA />
        </div>
      </section>
    );
  }

  return (
    <section className="pt-4 sm:pt-6 pb-8 sm:pb-12 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 relative overflow-hidden" id="portfolio">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {isHomepage && <PortfolioHeader />}

        {/* Category filter for homepage */}
        {isHomepage && (
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
            {homepageCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = internalCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setInternalCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border-2 ${
                    isActive
                      ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105'
                      : 'bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground hover:shadow-md'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Always carousel on homepage, filtered or not */}
        {isHomepage ? (
          <div className="mb-8 relative" style={{ minHeight: '420px', contentVisibility: 'auto', containIntrinsicSize: 'auto 420px' } as React.CSSProperties}>
            {/* Swipe hint - above carousel on mobile */}
            <div className="flex md:hidden justify-center mb-4 text-sm text-gray-600 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mx-auto w-fit shadow-lg border border-purple-100">
              <ChevronLeft className="w-4 h-4 mr-1 text-purple-600" />
              <span className="font-medium">Glissez pour voir plus d'exemples</span>
              <ChevronRight className="w-4 h-4 ml-1 text-purple-600" />
            </div>

            <Carousel className="w-full max-w-6xl mx-auto" opts={{ align: "start", loop: true, containScroll: "trimSnaps" }}>
              <CarouselContent className="-ml-2 md:-ml-4 items-stretch" style={{ willChange: 'transform' }}>
                {filteredCases.map((caseStudy, index) => (
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
          </div>
        ) : (
          <>
            <p className="text-center text-muted-foreground mb-6 font-medium">
              {filteredCases.length} projet{filteredCases.length > 1 ? 's' : ''} trouvé{filteredCases.length > 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredCases.map((caseStudy, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
                  <PortfolioCard caseStudy={caseStudy} />
                </div>
              ))}
            </div>
          </>
        )}

        <PortfolioCTA />
      </div>
    </section>
  );
};

export default Portfolio;
