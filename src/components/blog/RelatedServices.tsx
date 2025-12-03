import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, FileText, Store, Wrench, Search, Palette } from "lucide-react";

interface ServiceLink {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const servicesByCategory: Record<string, ServiceLink[]> = {
  "Business": [
    { icon: <FileText className="w-5 h-5" />, title: "Site Vitrine", description: "Présentez votre activité professionnellement", href: "/services" },
    { icon: <Rocket className="w-5 h-5" />, title: "Landing Page", description: "Convertissez vos visiteurs en clients", href: "/services" },
  ],
  "Web Design": [
    { icon: <Palette className="w-5 h-5" />, title: "Design Personnalisé", description: "Un design unique qui vous ressemble", href: "/services" },
    { icon: <FileText className="w-5 h-5" />, title: "Site Vitrine", description: "Design moderne et responsive", href: "/services" },
  ],
  "SEO": [
    { icon: <Search className="w-5 h-5" />, title: "Optimisation SEO", description: "Améliorez votre visibilité Google", href: "/services" },
    { icon: <FileText className="w-5 h-5" />, title: "Site Optimisé", description: "Sites conçus pour le référencement", href: "/services" },
  ],
  "Technique": [
    { icon: <Wrench className="w-5 h-5" />, title: "Maintenance Web", description: "Support et mises à jour régulières", href: "/services" },
    { icon: <Store className="w-5 h-5" />, title: "E-commerce", description: "Solutions techniques performantes", href: "/services" },
  ],
};

interface RelatedServicesProps {
  category: string;
}

const RelatedServices = ({ category }: RelatedServicesProps) => {
  const services = servicesByCategory[category] || servicesByCategory["Business"];

  return (
    <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Rocket className="w-5 h-5 text-purple-600" />
        Services associés
      </h3>
      
      <div className="space-y-4">
        {services.map((service, index) => (
          <Link 
            key={index}
            to={service.href}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/80 transition-colors group"
          >
            <div className="p-2 bg-purple-100 rounded-lg text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              {service.icon}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors mt-1" />
          </Link>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-purple-200">
        <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
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
