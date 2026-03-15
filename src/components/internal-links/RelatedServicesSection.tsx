import { Link } from "react-router-dom";
import { ArrowRight, Globe, Search, Megaphone, Palette, FileText, ShoppingCart, Rocket, TrendingUp, ClipboardCheck } from "lucide-react";

interface ServiceLink {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const allServices: ServiceLink[] = [
  { icon: <Rocket className="w-5 h-5" />, title: "Landing Page", description: "Page de conversion dès 490€, livrée en 5-7 jours", href: "/services/sites-web/landing-page" },
  { icon: <FileText className="w-5 h-5" />, title: "Site Vitrine", description: "Jusqu'à 5 pages sur-mesure dès 990€", href: "/services/sites-web/site-vitrine" },
  { icon: <ShoppingCart className="w-5 h-5" />, title: "Site E-commerce", description: "Boutique en ligne performante dès 2490€", href: "/services/sites-web/site-ecommerce" },
  { icon: <Search className="w-5 h-5" />, title: "Référencement SEO", description: "Atteignez la page 1 de Google durablement", href: "/services/seo/referencement-seo" },
  { icon: <ClipboardCheck className="w-5 h-5" />, title: "Audit SEO", description: "Diagnostic complet de votre visibilité", href: "/services/seo/audit-seo" },
  { icon: <Megaphone className="w-5 h-5" />, title: "Google Ads", description: "Campagnes Search, Shopping & Display", href: "/services/sea/google-ads" },
  { icon: <TrendingUp className="w-5 h-5" />, title: "Meta Ads", description: "Publicités Facebook & Instagram ciblées", href: "/services/sea/meta-ads" },
  { icon: <Palette className="w-5 h-5" />, title: "Design UI/UX", description: "Interfaces intuitives qui convertissent", href: "/services/design/design-ui-ux" },
  { icon: <Globe className="w-5 h-5" />, title: "Identité Visuelle", description: "Logo et charte graphique sur-mesure", href: "/services/design/identite-visuelle" },
];

interface RelatedServicesSectionProps {
  /** URLs to exclude (e.g. current page) */
  exclude?: string[];
  /** Max items to show */
  max?: number;
  /** Section title */
  title?: string;
}

const RelatedServicesSection = ({ exclude = [], max = 4, title = "Services connexes" }: RelatedServicesSectionProps) => {
  const filtered = allServices.filter(s => !exclude.includes(s.href)).slice(0, max);

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {filtered.map((service, i) => (
            <Link
              key={i}
              to={service.href}
              className="group flex flex-col p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {service.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 flex-grow">{service.description}</p>
              <span className="text-xs font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                En savoir plus <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
            Voir tous nos services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedServicesSection;
