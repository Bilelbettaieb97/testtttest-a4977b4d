import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Star, Clock } from "lucide-react";
import { ShoppingCart, Utensils, Home, Users, Sparkles, BookOpen, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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

interface CaseStudyData {
  client: string;
  sector: string;
  title: string;
  image: string;
  slug: string;
  category: "site-vitrine" | "landing-page" | "e-commerce" | "portfolio";
}

const allCaseStudies: CaseStudyData[] = [
  { client: "Monsieur Arancini", sector: "Restauration", title: "Site vitrine premium pour artisan sicilien", image: portfolioArancini, slug: "monsieur-arancini", category: "site-vitrine" },
  { client: "ACB Rénovation", sector: "BTP / Rénovation", title: "Site vitrine BTP avec génération de devis", image: portfolioAcb, slug: "acb-renovation", category: "site-vitrine" },
  { client: "Eleva Conciergerie", sector: "Conciergerie / Immobilier", title: "Site premium pour conciergerie locative", image: portfolioEleva, slug: "eleva-conciergerie", category: "site-vitrine" },
  { client: "ADSB Wissembourg", sector: "Association", title: "Site vitrine pour association de donneurs de sang", image: portfolioAdsb, slug: "adsb-wissembourg", category: "site-vitrine" },
  { client: "Alliance Sécurité Incendie", sector: "Sécurité Incendie", title: "Site vitrine B2B pour sécurité incendie", image: portfolioAsi, slug: "alliance-securite-incendie", category: "site-vitrine" },
  { client: "Tri Event", sector: "Recyclage / Événementiel", title: "Site vitrine éco-responsable pour recyclage", image: portfolioTrievent, slug: "trievent", category: "site-vitrine" },
  { client: "Le Temple de l'Énergie", sector: "Bien-être / Massage", title: "Site vitrine immersif pour espace bien-être", image: portfolioTemplezen, slug: "temple-zen", category: "site-vitrine" },
  { client: "Institut Nomad", sector: "Éducation", title: "Site vitrine pour accompagnement éducatif", image: portfolioInstitutNomad, slug: "institut-nomad", category: "site-vitrine" },
  { client: "AH Studio Caen", sector: "Photographie", title: "Site portfolio pour photographe professionnel", image: portfolioAhstudio, slug: "ah-studio", category: "site-vitrine" },
  { client: "Couleur Sable by K", sector: "Coiffure / Beauté", title: "Site vitrine premium pour salon de coiffure", image: portfolioCouleursable, slug: "couleur-sable", category: "site-vitrine" },
  { client: "FilmReel Gallery", sector: "Production Vidéo", title: "Site portfolio cinématographique", image: portfolioFilmreel, slug: "filmreel-gallery", category: "site-vitrine" },
  { client: "PapaPrêt", sector: "Formation / Infoproduit", title: "Landing page haute conversion pour formation", image: portfolioPapapret, slug: "papapret", category: "landing-page" },
  { client: "Vinoboat Prestige", sector: "Tourisme de Luxe", title: "Landing page premium nautique de luxe", image: portfolioVinoboat, slug: "vinoboat", category: "landing-page" },
  { client: "Spectacle", sector: "Événementiel", title: "Landing page événementielle pour spectacle", image: portfolioSpectacle, slug: "spectacle", category: "landing-page" },
  { client: "Funestore", sector: "E-commerce B2B", title: "E-commerce B2B pour le secteur funéraire", image: portfolioFunestore, slug: "funestore", category: "e-commerce" },
  { client: "Art des Roses", sector: "E-commerce / Art", title: "E-commerce artistique pour vente d'œuvres", image: portfolioArtdesroses, slug: "art-des-roses", category: "e-commerce" },
  { client: "Segermès", sector: "E-commerce / Alimentaire", title: "E-commerce premium huile d'olive haut de gamme", image: portfolioSegermes, slug: "segermes", category: "e-commerce" },
  { client: "L'Écrin de Séoul", sector: "Cosmétique / K-Beauty", title: "E-commerce cosmétique coréenne", image: portfolioEcrindeseoul, slug: "ecrin-de-seoul", category: "e-commerce" },
];

interface ServiceCaseStudiesProps {
  category: "site-vitrine" | "landing-page" | "e-commerce";
  title?: string;
  subtitle?: string;
  max?: number;
}

const ServiceCaseStudies = ({ category, title, subtitle, max }: ServiceCaseStudiesProps) => {
  const filtered = allCaseStudies.filter(c => c.category === category);
  const displayed = max ? filtered.slice(0, max) : filtered;

  if (displayed.length === 0) return null;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {title || "Nos réalisations"}
          </h2>
          <p className="text-muted-foreground">
            {subtitle || `Découvrez nos projets récents`}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayed.map((study) => (
            <Link
              key={study.slug}
              to={`/etude-de-cas/${study.slug}`}
              className="group block rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <AspectRatio ratio={16 / 10}>
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </AspectRatio>
              <div className="p-5">
                <Badge variant="secondary" className="mb-2 text-xs">{study.sector}</Badge>
                <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {study.client}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{study.title}</p>
                <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                  Voir l'étude de cas
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/portfolio">
              Voir tous nos projets
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCaseStudies;
