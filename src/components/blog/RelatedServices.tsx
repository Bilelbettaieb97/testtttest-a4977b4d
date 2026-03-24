import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, FileText, Store, Search, Palette, Megaphone } from "lucide-react";

interface ServiceLink {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const servicesByCategory: Record<string, ServiceLink[]> = {
  "Business": [
    { icon: <FileText className="w-5 h-5" />, title: "Site Vitrine", description: "Présentez votre activité dès 300€", href: "/services/sites-web/site-vitrine" },
    { icon: <Rocket className="w-5 h-5" />, title: "Landing Page", description: "Convertissez vos visiteurs dès 300€", href: "/services/sites-web/landing-page" },
  ],
  "Web Design": [
    { icon: <Palette className="w-5 h-5" />, title: "Design UI/UX", description: "Interfaces intuitives et esthétiques", href: "/services/design/design-ui-ux" },
    { icon: <FileText className="w-5 h-5" />, title: "Identité Visuelle", description: "Logo et charte graphique sur-mesure", href: "/services/design/identite-visuelle" },
  ],
  "SEO": [
    { icon: <Search className="w-5 h-5" />, title: "Référencement SEO", description: "Page 1 Google durablement", href: "/services/seo/referencement-seo" },
    { icon: <Search className="w-5 h-5" />, title: "Audit SEO", description: "Diagnostic complet de visibilité", href: "/services/seo/audit-seo" },
  ],
  "Technique": [
    { icon: <Store className="w-5 h-5" />, title: "Site E-commerce", description: "Boutique en ligne dès 800€", href: "/services/sites-web/site-ecommerce" },
    { icon: <Megaphone className="w-5 h-5" />, title: "Google Ads", description: "Campagnes publicitaires ciblées", href: "/services/sea/google-ads" },
  ],
};

interface RelatedServicesProps {
  category: string;
}

const RelatedServices = ({ category }: RelatedServicesProps) => {
  const services = servicesByCategory[category] || servicesByCategory["Business"];

  return (
    <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/10">
      <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
        <Rocket className="w-5 h-5 text-primary" />
        Services associés
      </h3>
      
      <div className="space-y-4">
        {services.map((service, index) => (
          <Link 
            key={index}
            to={service.href}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-card transition-colors group"
          >
            <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              {service.icon}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
          </Link>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link to="/contact">
            Demander un devis gratuit
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default RelatedServices;
