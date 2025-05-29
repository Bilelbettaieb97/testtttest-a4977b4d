
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Calendar, Send, Clock, Target, Shield } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const SimplifiedContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
            project_type: formData.project,
            message: formData.message
          }
        ]);

      if (error) {
        throw error;
      }

      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons sous 2h.",
      });

      setFormData({
        name: "",
        email: "",
        project: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
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
    <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Prêt à <span className="text-purple-400">booster</span> vos conversions ?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-4 sm:mb-6">
            Consultation gratuite de 30 minutes pour transformer vos visiteurs en clients.
          </p>
          <Button 
            onClick={openCalendly}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold transition-all duration-300 transform hover:scale-105 mb-6 sm:mb-8"
          >
            <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            Prendre rendez-vous
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info - Version mobile compacte */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 mb-6">
              <div className="flex items-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-3" />
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">contact@convertilab.fr</h4>
                  <p className="text-gray-400 text-xs">Réponse sous 2h</p>
                </div>
              </div>
              <div className="flex items-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-3" />
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">07 83 49 47 09</h4>
                  <p className="text-gray-400 text-xs">Lun-Ven 9h-18h</p>
                </div>
              </div>
              <div className="flex items-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-3" />
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">30 min offertes</h4>
                  <p className="text-gray-400 text-xs">Consultation gratuite</p>
                </div>
              </div>
            </div>

            {/* Garanties - Version compacte */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-400/30">
              <h4 className="font-bold text-base sm:text-lg mb-3">Résultats garantis</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-gray-300 text-sm">
                <div className="flex items-center">
                  <Shield className="w-3 h-3 mr-2 text-green-400" />
                  <span>+35% minimum</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-3 h-3 mr-2 text-green-400" />
                  <span>7 jours max</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-2 text-green-400" />
                  <span>Suivi 3 mois</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Version mobile optimisée */}
          <div className="lg:col-span-1">
            <Card className="bg-white/5 backdrop-blur-sm border-purple-400/30 text-white">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-center">
                  Contact rapide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white text-sm">Nom *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-purple-400/30 text-white placeholder-gray-400 text-sm"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-white text-sm">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-purple-400/30 text-white placeholder-gray-400 text-sm"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="project" className="text-white text-sm">Projet *</Label>
                    <select
                      id="project"
                      name="project"
                      required
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full p-2 sm:p-3 bg-white/10 border border-purple-400/30 rounded-md text-white text-sm"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="landing">Landing Page</option>
                      <option value="audit">Audit de conversion</option>
                      <option value="custom">Projet sur mesure</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white text-sm">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/10 border-purple-400/30 text-white placeholder-gray-400 text-sm min-h-[80px]"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 sm:py-4 font-semibold text-sm sm:text-base"
                  >
                    {isSubmitting ? "Envoi..." : "Envoyer"}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedContact;
