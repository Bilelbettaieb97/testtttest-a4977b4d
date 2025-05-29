
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 sm:pt-20 pb-8 sm:pb-10">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              ConvertiLab
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Landing pages qui convertissent vraiment. Spécialistes en optimisation de conversion.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-300 hover:scale-110" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-300 hover:scale-110" />
              <Facebook className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-300 hover:scale-110" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-white">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Landing pages</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Audit conversion</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Tests A/B</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-white">Contact</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center hover:text-purple-400 transition-colors">
                <Mail className="w-5 h-5 mr-3 text-purple-400" />
                <span>contact@convertilab.fr</span>
              </div>
              <div className="flex items-center hover:text-purple-400 transition-colors">
                <Phone className="w-5 h-5 mr-3 text-purple-400" />
                <span>07 83 49 47 09</span>
              </div>
              <div className="flex items-center hover:text-purple-400 transition-colors">
                <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter - Enhanced */}
        <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl p-8 sm:p-10 mb-8 sm:mb-12 backdrop-blur-sm border border-purple-500/20">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              Conseils conversion gratuits
            </h4>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Recevez nos meilleures stratégies de conversion directement dans votre boîte mail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre email..." 
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-purple-400/50 text-white placeholder-gray-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-gray-400">
          <p>&copy; 2024 ConvertiLab. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
