
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 sm:pt-12 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-3 sm:mb-4">ConvertiLab</h3>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Landing pages qui convertissent vraiment.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
              <li>Landing pages</li>
              <li>Audit conversion</li>
              <li>Tests A/B</li>
              <li>Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <div className="flex items-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-purple-400" />
                <span>contact@convertilab.fr</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-purple-400" />
                <span>07 83 49 47 09</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-purple-400" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter - Version mobile simplifiée */}
        <div className="bg-purple-900/30 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="text-center">
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Conseils conversion gratuits</h4>
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre email..." 
                className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border border-purple-400 text-white placeholder-gray-300 text-sm sm:text-base"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 sm:pt-6 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2024 ConvertiLab. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
