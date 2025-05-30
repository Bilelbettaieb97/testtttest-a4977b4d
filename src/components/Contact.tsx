
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    project: "",
    budget: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const openCalendly = () => {
    window.open('https://calendly.com/convertilab/30min?back=1&month=2025-05', '_blank');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-purple-600" />,
      title: "Email",
      content: "contact@convertilab.fr",
      subtitle: "Réponse sous 2h"
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-600" />,
      title: "Téléphone",
      content: "07 83 49 47 09",
      subtitle: "Lun-Ven 9h-18h"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Consultation gratuite",
      content: "30 minutes offertes",
      subtitle: "Planifiez maintenant"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Prêt à <span className="text-purple-400">booster</span> vos conversions ?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Consultation gratuite de 30 minutes pour transformer vos visiteurs en clients.
          </p>
          <Button 
            onClick={openCalendly}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105 mb-8"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Prendre rendez-vous maintenant
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="mr-4 mt-1">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                    <p className="text-purple-300 font-medium">{info.content}</p>
                    <p className="text-gray-400 text-sm">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-400/30">
              <h4 className="font-bold text-lg mb-2">Résultats garantis</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✅ +35% de conversions minimum</li>
                <li>✅ Livraison sous 7 jours</li>
                <li>✅ Accompagnement personnalisé</li>
              </ul>
            </div>
          </div>

          {/* Simplified Contact Form */}
          <div className="lg:col-span-1">
            <Card className="bg-white/5 backdrop-blur-sm border-purple-400/30 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Contact rapide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Nom *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-purple-400/30 text-white placeholder-gray-400"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-purple-400/30 text-white placeholder-gray-400"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="project" className="text-white">Projet *</Label>
                    <select
                      id="project"
                      name="project"
                      required
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white/10 border border-purple-400/30 rounded-md text-white"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="landing">Landing Page</option>
                      <option value="audit">Audit de conversion</option>
                      <option value="custom">Projet sur mesure</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/10 border-purple-400/30 text-white placeholder-gray-400"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 font-semibold"
                  >
                    Envoyer
                    <Send className="ml-2 w-5 h-5" />
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

export default Contact;
