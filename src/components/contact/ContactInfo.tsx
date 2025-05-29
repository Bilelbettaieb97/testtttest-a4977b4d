
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageSquare, Calendar } from "lucide-react";

const ContactInfo = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/bilel-bettaieb-naboo', '_blank');
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card className="shadow-lg">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center mb-3">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mr-2 sm:mr-3" />
            <h3 className="font-semibold text-sm sm:text-base">Réservez un appel</h3>
          </div>
          <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
            Discutons de votre projet en 15 minutes
          </p>
          <Button 
            onClick={openCalendly}
            variant="outline" 
            className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 text-sm"
          >
            Prendre rendez-vous
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <Card className="shadow-lg">
          <CardContent className="p-3 sm:p-4 text-center">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mx-auto mb-1 sm:mb-2" />
            <p className="text-xs sm:text-sm font-medium" itemProp="telephone">07 83 49 47 09</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardContent className="p-3 sm:p-4 text-center">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mx-auto mb-1 sm:mb-2" />
            <p className="text-xs sm:text-sm font-medium" itemProp="email">contact@convertilab.fr</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-purple-50 border-purple-200 shadow-lg">
        <CardContent className="p-4 sm:p-6">
          <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2 sm:mb-3" />
          <h3 className="font-bold text-sm sm:text-base mb-2 text-center">Pourquoi nos audits sont efficaces ?</h3>
          <ul className="text-gray-600 text-xs sm:text-sm space-y-1">
            <li>✅ Analyse complète de votre funnel</li>
            <li>✅ Recommandations chiffrées</li>
            <li>✅ Plan d'action prioritisé</li>
            <li>✅ Exemples concrets d'optimisation</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
