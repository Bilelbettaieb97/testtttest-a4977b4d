
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
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
    // Here you would typically send the data to your backend
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-purple-600" />,
      title: "Email",
      content: "contact@convertilab.fr",
      subtitle: "Réponse sous 2h en moyenne"
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-600" />,
      title: "Téléphone",
      content: "+33 1 23 45 67 89",
      subtitle: "Lun-Ven 9h-18h"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-600" />,
      title: "Localisation",
      content: "Paris, France",
      subtitle: "Interventions partout en France"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Disponibilité",
      content: "Consultation gratuite",
      subtitle: "Planifiez votre appel"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Prêt à <span className="text-purple-400">booster</span> vos conversions ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons 
            transformer vos visiteurs en clients.
          </p>
          <div className="flex justify-center">
            <div className="bg-green-500/20 text-green-400 px-6 py-3 rounded-full font-semibold flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Consultation gratuite de 30 minutes offerte
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-8">Contactez-nous</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-all duration-300">
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
              <h4 className="font-bold text-lg mb-2">Pourquoi nous choisir ?</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✅ +5 ans d'expertise en conversion</li>
                <li>✅ +100 projets réalisés avec succès</li>
                <li>✅ Augmentation moyenne de +35% des conversions</li>
                <li>✅ Accompagnement personnalisé</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 backdrop-blur-sm border-purple-400/30 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Demandez votre consultation gratuite
                </CardTitle>
                <p className="text-center text-gray-300">
                  Remplissez ce formulaire et nous vous recontacterons sous 24h
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-white">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-white">Entreprise</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-white/10 border-purple-400/30 text-white placeholder-gray-400"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/10 border-purple-400/30 text-white placeholder-gray-400"
                        placeholder="+33 1 23 45 67 89"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="project" className="text-white">Type de projet *</Label>
                      <select
                        id="project"
                        name="project"
                        required
                        value={formData.project}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-white/10 border border-purple-400/30 rounded-md text-white"
                      >
                        <option value="">Sélectionnez votre projet</option>
                        <option value="starter">Pack Starter - Landing Page Produit</option>
                        <option value="lead-generation">Pack Lead Generation</option>
                        <option value="lead-magnet">Pack Lead Magnet</option>
                        <option value="audit">Audit de page existante</option>
                        <option value="custom">Projet sur mesure</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="budget" className="text-white">Budget approximatif</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-white/10 border border-purple-400/30 rounded-md text-white"
                      >
                        <option value="">Sélectionnez votre budget</option>
                        <option value="1000-2500">1 000 - 2 500 €</option>
                        <option value="2500-5000">2 500 - 5 000 €</option>
                        <option value="5000-10000">5 000 - 10 000 €</option>
                        <option value="10000+">Plus de 10 000 €</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Décrivez votre projet *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/10 border-purple-400/30 text-white placeholder-gray-400 min-h-[120px]"
                      placeholder="Décrivez votre projet, vos objectifs, votre cible... Plus vous nous en direz, mieux nous pourrons vous aider !"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Envoyer ma demande
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <p className="text-sm text-gray-400 text-center">
                    En envoyant ce formulaire, vous acceptez d'être recontacté par ConvertiLab. 
                    Vos données sont protégées et ne seront jamais partagées.
                  </p>
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
