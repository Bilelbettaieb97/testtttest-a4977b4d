import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Clock, Send, Calendar, CheckCircle2, Sparkles, ArrowRight, Zap } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Validation schema
const contactSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  company: z.string().trim().min(2, "Le nom de l'entreprise est requis").max(100),
  phone: z.string().trim().optional(),
  project: z.string().min(1, "Veuillez sélectionner un type de projet"),
  budget: z.string().optional(),
  main_challenge: z.string().min(1, "Veuillez sélectionner votre principal défi"),
  message: z.string().trim().max(1000).optional(),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    project: "",
    budget: "",
    main_challenge: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validation
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const newErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      toast({
        title: "Erreur de validation",
        description: "Veuillez vérifier les champs du formulaire.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone || null,
          project: formData.project,
          budget: formData.budget || null,
          main_challenge: formData.main_challenge,
          message: formData.message || null,
        }]);

      if (error) throw error;

      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons sous 24h avec votre audit personnalisé.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        project: "",
        budget: "",
        main_challenge: "",
        message: ""
      });
    } catch (error: any) {
      console.error("Contact form error:", error);
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openCalendly = () => {
    window.open('https://calendly.com/convertilab-5bsc/30min', '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@convertilab.fr",
      subtitle: "Réponse sous 2h",
      gradient: "from-violet-600 via-purple-600 to-indigo-600"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "07 83 49 47 09",
      subtitle: "Lun-Ven 9h-18h",
      gradient: "from-purple-600 via-pink-600 to-rose-600"
    },
    {
      icon: Clock,
      title: "Consultation gratuite",
      content: "30 minutes offertes",
      subtitle: "Planifiez maintenant",
      gradient: "from-orange-600 via-amber-600 to-yellow-600"
    }
  ];

  const benefits = [
    { icon: CheckCircle2, text: "+35% de conversions minimum" },
    { icon: Zap, text: "Livraison sous 7 jours" },
    { icon: Sparkles, text: "Accompagnement personnalisé" },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      {/* Grille de fond */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 text-violet-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-violet-500/10">
            <Sparkles className="w-5 h-5 mr-2" />
            Contactez-nous
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Prêt à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 animate-pulse">
              booster
            </span>{" "}
            vos conversions ?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Consultation gratuite de 30 minutes pour transformer vos visiteurs en clients
          </p>
          <Button 
            onClick={openCalendly}
            size="lg"
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 text-white px-8 py-4 font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Prendre rendez-vous maintenant
          </Button>
        </div>

        <div 
          ref={formRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-700 delay-200 ${
            formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div 
                  key={index} 
                  className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-slate-700/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Effet de brillance au hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${info.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>

                  <div className="relative flex items-start gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
                      <IconComponent className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-1 text-lg">{info.title}</h4>
                      <p className="text-violet-300 font-semibold mb-0.5">{info.content}</p>
                      <p className="text-slate-400 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Benefits Card */}
            <div className="relative bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-pink-600/5"></div>
              <div className="relative">
                <h4 className="font-bold text-white text-xl mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-violet-400" />
                  Résultats garantis
                </h4>
                <ul className="space-y-3">
                  {benefits.map((benefit, idx) => {
                    const IconComponent = benefit.icon;
                    return (
                      <li key={idx} className="flex items-center gap-3 text-slate-300">
                        <div className="w-6 h-6 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        {benefit.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 sm:p-8 overflow-hidden">
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-purple-600/5 to-pink-600/5"></div>
              
              <div className="relative">
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Contact rapide</h3>
                  <p className="text-slate-400">Recevez votre audit personnalisé sous 24h</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nom & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block font-semibold">
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-500 focus:border-violet-500 transition-colors"
                        placeholder="Votre nom"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block font-semibold">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-500 focus:border-violet-500 transition-colors"
                        placeholder="votre@email.com"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Entreprise & Téléphone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="text-white mb-2 block font-semibold">
                        Entreprise *
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-500 focus:border-violet-500 transition-colors"
                        placeholder="Nom de votre entreprise"
                      />
                      {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-white mb-2 block font-semibold">
                        Téléphone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-500 focus:border-violet-500 transition-colors"
                        placeholder="06 XX XX XX XX"
                      />
                    </div>
                  </div>

                  {/* Type de projet & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="project" className="text-white mb-2 block font-semibold">
                        Type de projet *
                      </Label>
                      <select
                        id="project"
                        name="project"
                        required
                        value={formData.project}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-slate-800/50 border border-slate-700/50 rounded-md text-white focus:border-violet-500 focus:outline-none transition-colors"
                      >
                        <option value="" className="bg-slate-900">Sélectionnez</option>
                        <option value="audit" className="bg-slate-900">Audit de conversion</option>
                        <option value="landing" className="bg-slate-900">Landing Page</option>
                        <option value="funnel" className="bg-slate-900">Tunnel de vente</option>
                        <option value="optimization" className="bg-slate-900">Optimisation site existant</option>
                        <option value="custom" className="bg-slate-900">Projet sur mesure</option>
                      </select>
                      {errors.project && <p className="text-red-400 text-xs mt-1">{errors.project}</p>}
                    </div>

                    <div>
                      <Label htmlFor="budget" className="text-white mb-2 block font-semibold">
                        Budget envisagé
                      </Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-slate-800/50 border border-slate-700/50 rounded-md text-white focus:border-violet-500 focus:outline-none transition-colors"
                      >
                        <option value="" className="bg-slate-900">Sélectionnez</option>
                        <option value="<2k" className="bg-slate-900">Moins de 2 000€</option>
                        <option value="2k-5k" className="bg-slate-900">2 000€ - 5 000€</option>
                        <option value="5k-10k" className="bg-slate-900">5 000€ - 10 000€</option>
                        <option value="10k+" className="bg-slate-900">Plus de 10 000€</option>
                      </select>
                    </div>
                  </div>

                  {/* Principal défi */}
                  <div>
                    <Label htmlFor="main_challenge" className="text-white mb-2 block font-semibold">
                      Principal défi actuel *
                    </Label>
                    <select
                      id="main_challenge"
                      name="main_challenge"
                      required
                      value={formData.main_challenge}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-slate-800/50 border border-slate-700/50 rounded-md text-white focus:border-violet-500 focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-slate-900">Sélectionnez votre principal défi</option>
                      <option value="traffic" className="bg-slate-900">Manque de trafic</option>
                      <option value="conversion" className="bg-slate-900">Faible taux de conversion</option>
                      <option value="leads" className="bg-slate-900">Pas assez de leads qualifiés</option>
                      <option value="sales" className="bg-slate-900">Difficultés à transformer en ventes</option>
                      <option value="retention" className="bg-slate-900">Fidélisation client</option>
                      <option value="other" className="bg-slate-900">Autre</option>
                    </select>
                    {errors.main_challenge && <p className="text-red-400 text-xs mt-1">{errors.main_challenge}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block font-semibold">
                      Décrivez votre projet
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-slate-800/50 border-slate-700/50 text-white placeholder-slate-500 focus:border-violet-500 transition-colors min-h-[100px]"
                      placeholder="Parlez-nous de vos objectifs, contraintes spécifiques, ou toute information importante..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 hover:from-violet-700 hover:via-purple-700 hover:to-pink-700 text-white py-4 font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>Envoi en cours...</>
                    ) : (
                      <>
                        Recevoir mon audit gratuit
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-slate-400 text-center leading-relaxed">
                    ✅ Audit personnalisé sous 24h • ✅ Recommandations concrètes • ✅ 100% gratuit
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
