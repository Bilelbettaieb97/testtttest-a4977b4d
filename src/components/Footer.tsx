
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">ConvertiLab</h3>
            <p className="text-gray-300 mb-4">
              Landing pages qui convertissent vraiment.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Facebook className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Landing pages</li>
              <li>Audit conversion</li>
              <li>Tests A/B</li>
              <li>Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-purple-400" />
                <span>contact@convertilab.fr</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-purple-400" />
                <span>07 83 49 47 09</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter - Simplifié */}
        <div className="bg-purple-900/30 rounded-lg p-6 mb-8">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">Conseils conversion gratuits</h4>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Votre email..." 
                className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-purple-400 text-white placeholder-gray-300"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 px-6 py-3">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; 2024 ConvertiLab. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
