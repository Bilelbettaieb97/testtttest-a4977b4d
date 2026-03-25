import { Globe, ShoppingCart, Search, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Création de site vitrine",
    description: "Un site professionnel pour présenter votre activité et générer des contacts qualifiés.",
    link: "/services/site-vitrine",
  },
  {
    icon: ShoppingCart,
    title: "Création de site e-commerce",
    description: "Vendez vos produits en ligne avec une boutique optimisée pour la conversion.",
    link: "/services/site-ecommerce",
  },
  {
    icon: Search,
    title: "Optimisation SEO",
    description: "Positionnez-vous sur Google et attirez des clients gratuitement.",
    link: "/services/referencement-seo",
  },
  {
    icon: Megaphone,
    title: "Marketing digital",
    description: "Publicité, CRM, stratégie d'acquisition.",
    link: "/services/google-ads",
  },
];

const HomepageServices = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
          Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">services</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.link}
              className="group bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageServices;
