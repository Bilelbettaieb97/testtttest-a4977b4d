import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Check, Clock, Users, Zap, Star, ArrowRight, Phone, Mail, Building2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const TOTAL_SPOTS = 10;

const OffreSpeciale = () => {
  const { toast } = useToast();
  const [spotsRemaining, setSpotsRemaining] = useState(TOTAL_SPOTS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [isReserved, setIsReserved] = useState(false);

  // Fetch remaining spots
  useEffect(() => {
    const fetchSpots = async () => {
      const { count } = await supabase
        .from('offer_reservations')
        .select('*', { count: 'exact', head: true });
      
      if (count !== null) {
        setSpotsRemaining(Math.max(0, TOTAL_SPOTS - count));
      }
    };
    fetchSpots();

    // Real-time subscription
    const channel = supabase
      .channel('offer-reservations')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'offer_reservations' },
        () => {
          setSpotsRemaining(prev => Math.max(0, prev - 1));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (spotsRemaining <= 0) {
      toast({
        title: "Offre épuisée",
        description: "Désolé, toutes les places ont été prises.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('offer_reservations')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          company: formData.company.trim()
        });

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Email déjà enregistré",
            description: "Vous avez déjà réservé votre place !",
            variant: "destructive"
          });
        } else {
          throw error;
        }
      } else {
        setIsReserved(true);
        toast({
          title: "Place réservée ! 🎉",
          description: "Nous vous contacterons sous 24h pour démarrer votre projet."
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    { icon: Zap, text: "Site livré en 7 jours" },
    { icon: Star, text: "Design 100% personnalisé" },
    { icon: Phone, text: "Support dédié inclus" },
    { icon: Check, text: "Hébergement 1 an offert" }
  ];

  const included = [
    "Site vitrine responsive (mobile + desktop)",
    "Jusqu'à 5 pages",
    "Formulaire de contact",
    "Optimisation SEO de base",
    "Certificat SSL (HTTPS)",
    "Hébergement 1 an inclus",
    "Formation à la gestion du site",
    "Support technique 30 jours"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-xl">
            WebCraft<span className="text-purple-400">Studio</span>
          </Link>
          <div className="flex items-center gap-2 bg-red-500/20 px-4 py-2 rounded-full border border-red-500/30">
            <Users className="w-4 h-4 text-red-400" />
            <span className="text-red-400 font-bold">{spotsRemaining} places restantes</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-500/30">
                <Sparkles className="w-4 h-4" />
                OFFRE LIMITÉE - 10 PLACES SEULEMENT
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Votre site web professionnel à{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  300€
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Offre exceptionnelle pour les <strong className="text-white">10 premiers clients</strong>. 
                Un site web moderne, responsive et optimisé pour convertir vos visiteurs en clients.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <feature.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Price Comparison */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Prix habituel</p>
                    <p className="text-2xl text-gray-500 line-through">890€</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-purple-400 text-sm font-medium">Prix offre spéciale</p>
                    <p className="text-4xl font-bold text-white">300€</p>
                  </div>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -66%
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8 rounded-3xl">
                {!isReserved ? (
                  <>
                    {/* Spots Counter */}
                    <div className="text-center mb-8">
                      <div className="flex justify-center gap-2 mb-4">
                        {[...Array(TOTAL_SPOTS)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                              i < (TOTAL_SPOTS - spotsRemaining)
                                ? 'bg-red-500/30 text-red-400 border border-red-500/50'
                                : 'bg-green-500/30 text-green-400 border border-green-500/50'
                            }`}
                          >
                            {i < (TOTAL_SPOTS - spotsRemaining) ? '✓' : i + 1}
                          </div>
                        ))}
                      </div>
                      <p className="text-white font-semibold">
                        <span className="text-green-400">{spotsRemaining}</span> places disponibles sur {TOTAL_SPOTS}
                      </p>
                    </div>

                    <h2 className="text-2xl font-bold text-white text-center mb-6">
                      Réservez votre place maintenant
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-300">Nom complet *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                          placeholder="Jean Dupont"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-300">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                          placeholder="jean@exemple.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-gray-300">Téléphone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                          placeholder="06 12 34 56 78"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company" className="text-gray-300">Entreprise</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting || spotsRemaining <= 0}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-bold rounded-xl transition-all transform hover:scale-[1.02]"
                      >
                        {isSubmitting ? 'Réservation en cours...' : spotsRemaining <= 0 ? 'Offre épuisée' : 'Réserver ma place à 300€'}
                      </Button>

                      <p className="text-center text-gray-400 text-sm">
                        Paiement après validation du projet. Aucun engagement.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">Place réservée ! 🎉</h2>
                    <p className="text-gray-300 mb-6">
                      Merci {formData.name} ! Nous vous contacterons sous 24h pour discuter de votre projet.
                    </p>
                    <Link to="/">
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        Retour à l'accueil
                      </Button>
                    </Link>
                  </div>
                )}
              </Card>

              {/* Urgency */}
              <div className="flex items-center justify-center gap-2 mt-4 text-yellow-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Offre valable jusqu'à épuisement des places</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Ce qui est inclus dans l'offre
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {included.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <div className="p-1 bg-green-500/20 rounded-full">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Questions fréquentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Pourquoi ce prix si bas ?",
                a: "C'est une offre de lancement limitée pour constituer notre portfolio et obtenir des témoignages clients. Une fois les 10 places prises, le prix reviendra à 890€."
              },
              {
                q: "Quel type de site puis-je avoir ?",
                a: "Un site vitrine professionnel de 1 à 5 pages : page d'accueil, services, à propos, contact, etc. Parfait pour artisans, freelances, PME."
              },
              {
                q: "Combien de temps pour avoir mon site ?",
                a: "Votre site sera livré en 7 jours ouvrés après validation de la maquette."
              },
              {
                q: "Y a-t-il des frais cachés ?",
                a: "Non. Le prix de 300€ inclut tout : design, développement, hébergement 1 an, et certificat SSL."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ne manquez pas cette opportunité !
          </h2>
          <p className="text-white/80 mb-6">
            Seulement <strong>{spotsRemaining} places</strong> restantes à ce prix exceptionnel
          </p>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg font-bold"
          >
            Réserver ma place maintenant
          </Button>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-white/10">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2024 WebCraftStudio. Tous droits réservés.</p>
          <Link to="/" className="text-purple-400 hover:underline mt-2 inline-block">
            Retour au site principal
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default OffreSpeciale;
