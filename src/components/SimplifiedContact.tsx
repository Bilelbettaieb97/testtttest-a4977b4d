
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MessageSquare, Calendar } from "lucide-react";

const SimplifiedContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            project: formData.project,
            message: formData.message
          }
        ]);

      if (error) throw error;

      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons sous 24h.",
      });

      setFormData({ name: "", email: "", project: "", message: "" });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openCalendly = () => {
    window.open('https://calendly.com/bilel-bettaieb-naboo', '_blank');
  };

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-purple-50 to-pink-50" itemScope itemType="https://schema.org/ContactPage">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            Audit <span className="text-purple-600">Gratuit</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Découvrez comment augmenter vos conversions dès maintenant
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-lg sm:text-xl text-center">Demander un audit</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" itemScope itemType="https://schema.org/ContactForm">
                <Input
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="text-sm sm:text-base"
                  itemProp="name"
                />
                <Input
                  type="email"
                  placeholder="Email professionnel"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="text-sm sm:text-base"
                  itemProp="email"
                />
                <Input
                  placeholder="Type de projet"
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  required
                  className="text-sm sm:text-base"
                />
                <Textarea
                  placeholder="Décrivez votre besoin..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="text-sm sm:text-base"
                  itemProp="message"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-sm sm:text-base py-2 sm:py-3"
                >
                  {isSubmitting ? "Envoi..." : "Recevoir mon audit"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
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
              <CardContent className="p-4 sm:p-6 text-center">
                <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2 sm:mb-3" />
                <h3 className="font-bold text-sm sm:text-base mb-1 sm:mb-2">Réponse sous 24h</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Audit gratuit avec recommandations personnalisées
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedContact;
