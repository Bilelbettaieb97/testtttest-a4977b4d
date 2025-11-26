import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Globe, Code, Smartphone, ShoppingCart, Star, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { useToast } from "@/hooks/use-toast";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase environment variables are not set");
}

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

const Footer = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const services = [
    { name: "Design Web Créatif", href: "#services" },
    { name: "Développement Expert", href: "#services" },
    { name: "Site E-commerce", href: "#offers" },
    { name: "Application Web", href: "#offers" },
    { name: "Optimisation SEO", href: "#services" },
    { name: "Maintenance Web", href: "#services" }
  ];

  const sectors = [
    { name: "E-commerce & Mode", icon: ShoppingCart },
    { name: "Santé & Médical", icon: Globe },
    { name: "Restauration", icon: Star },
    { name: "Immobilier", icon: Globe },
    { name: "Services B2B", icon: Code },
    { name: "Startups Tech", icon: Smartphone }
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer votre email",
        variant: "destructive",
      });
      return;
    }
    
    if (!emailRegex.test(newsletterEmail)) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer un email valide",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email: newsletterEmail.trim() }]);

      if (error) {
        // Si l'email existe déjà, on redirige quand même vers la page de confirmation
        if ((error as any).code === '23505') {
          setNewsletterEmail("");
          navigate("/newsletter-confirmation");
          return;
        }

        console.error('Newsletter submission error:', error);
        toast({
          title: "Erreur",
          description: "Une erreur s'est produite. Veuillez réessayer.",
          variant: "destructive",
        });
      } else {
        setNewsletterEmail("");
        navigate("/newsletter-confirmation");
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 sm:pt-20 pb-8 sm:pb-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          
          {/* Brand & Description */}
          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              ConvertiLab
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Agence web spécialisée dans la création de sites performants qui convertissent vraiment. Design unique et développement expert.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <div className="p-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 cursor-pointer transition-colors duration-300">
                <Linkedin className="w-5 h-5 text-purple-400 hover:text-purple-300" />
              </div>
              <div className="p-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 cursor-pointer transition-colors duration-300">
                <Twitter className="w-5 h-5 text-purple-400 hover:text-purple-300" />
              </div>
              <div className="p-2 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 cursor-pointer transition-colors duration-300">
                <Facebook className="w-5 h-5 text-purple-400 hover:text-purple-300" />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl p-4 border border-purple-500/20">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-purple-400">150+</div>
                  <div className="text-xs text-gray-400">Sites créés</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-green-400">98%</div>
                  <div className="text-xs text-gray-400">Clients satisfaits</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2 text-purple-400" />
              Nos Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-gray-300 hover:text-purple-400 transition-colors cursor-pointer text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Secteurs d'expertise */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-purple-400" />
              Secteurs d'expertise
            </h4>
            <div className="space-y-3">
              {sectors.map((sector, index) => (
                <div key={index} className="flex items-center text-gray-300 hover:text-purple-400 transition-colors text-sm group cursor-pointer">
                  <sector.icon className="w-4 h-4 mr-3 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  {sector.name}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center hover:text-purple-400 transition-colors group cursor-pointer">
                <div className="p-2 bg-purple-600/20 rounded-lg mr-3 group-hover:bg-purple-600/30 transition-colors">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-xs">contact@convertilab.fr</div>
                </div>
              </div>
              
              <div className="flex items-center hover:text-purple-400 transition-colors group cursor-pointer">
                <div className="p-2 bg-purple-600/20 rounded-lg mr-3 group-hover:bg-purple-600/30 transition-colors">
                  <Phone className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Téléphone</div>
                  <div className="text-xs">07 83 49 47 09</div>
                </div>
              </div>
              
              <div className="flex items-center hover:text-purple-400 transition-colors group">
                <div className="p-2 bg-purple-600/20 rounded-lg mr-3 group-hover:bg-purple-600/30 transition-colors">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Localisation</div>
                  <div className="text-xs">Paris, France</div>
                </div>
              </div>
            </div>

            {/* CTA Footer */}
            <div className="pt-4">
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 text-sm"
              >
                Devis Gratuit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter - Enhanced */}
        <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl p-8 sm:p-10 mb-8 sm:mb-12 backdrop-blur-sm border border-purple-500/20">
          <div className="text-center max-w-3xl mx-auto">
            <h4 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              📧 Conseils création web gratuits
            </h4>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Recevez nos meilleures stratégies, tendances design et conseils techniques pour optimiser votre présence digitale
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Votre email professionnel..." 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-purple-400/50 text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all disabled:opacity-50"
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Envoi..." : "S'abonner"}
              </Button>
            </form>
            <div className="text-xs text-gray-400 mt-3">
              ✅ Pas de spam • ✅ Contenu premium • ✅ Désabonnement simple
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2024 ConvertiLab. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <button className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Mentions légales
              </button>
              <button className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                CGV
              </button>
              <button className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Politique de confidentialité
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
