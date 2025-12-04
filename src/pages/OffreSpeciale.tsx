import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Check, Clock, Users, Zap, Star, ArrowRight, Phone, Sparkles, Shield, Award, TrendingUp } from 'lucide-react';
import { countryCodes } from '@/data/countryCodes';
import { SEO } from "@/components/SEO";
import { ProductSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import portfolioEcommerce from '@/assets/portfolio-ecommerce.jpg';
import portfolioRestaurant from '@/assets/portfolio-restaurant.jpg';
import portfolioBeaute from '@/assets/portfolio-beaute.jpg';
import portfolioFitness from '@/assets/portfolio-fitness.jpg';
import portfolioB2B from '@/assets/portfolio-b2b.jpg';
import portfolioImmobilier from '@/assets/portfolio-immobilier.jpg';

const TOTAL_SPOTS = 10;

const OffreSpeciale = () => {
  const { toast } = useToast();
  const [spotsRemaining, setSpotsRemaining] = useState(TOTAL_SPOTS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+33',
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
      // Validate phone number (at least 6 digits)
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length < 6) {
        toast({
          title: "Numéro invalide",
          description: "Veuillez entrer un numéro de téléphone valide (au moins 6 chiffres).",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      const { error } = await supabase
        .from('offer_reservations')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: `${formData.countryCode} ${phoneDigits}`,
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
        // Track Google Ads conversion
        if (typeof window !== 'undefined' && (window as any).trackFormConversion) {
          (window as any).trackFormConversion();
        }
        
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

  const testimonials = [
    {
      stars: 5,
      text: "Un site livré super vite, très pro. Résultat : plus de demandes que jamais.",
      author: "Sarah",
      role: "Coach bien-être"
    },
    {
      stars: 5,
      text: "J'avais un petit budget, et pourtant le site est digne d'une vraie agence.",
      author: "Julien",
      role: "Artisan plombier"
    },
    {
      stars: 5,
      text: "Mon business avait besoin d'un site moderne : excellent travail.",
      author: "Mélissa",
      role: "Entrepreneure"
    }
  ];

  const badges = [
    { icon: Award, text: "+150 sites créés", color: "text-purple-400" },
    { icon: Star, text: "4,9/5 satisfaction client", color: "text-yellow-400" },
    { icon: TrendingUp, text: "+80 petites entreprises", color: "text-green-400" }
  ];

  const exampleSites = [
    { image: portfolioEcommerce, title: "E-commerce", description: "Boutiques en ligne performantes" },
    { image: portfolioRestaurant, title: "Restaurants", description: "Sites avec réservation en ligne" },
    { image: portfolioBeaute, title: "Beauté & Bien-être", description: "Plateformes de booking élégantes" },
    { image: portfolioFitness, title: "Fitness & Sport", description: "Sites pour coachs et salles de sport" },
    { image: portfolioB2B, title: "B2B & Agences", description: "Sites corporate professionnels" },
    { image: portfolioImmobilier, title: "Immobilier", description: "Vitrines pour agences immobilières" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <SEO 
        url="/offre-speciale"
        title="Offre Spéciale - Site Web Pro à 300€"
        description="Offre limitée : obtenez un site web professionnel pour seulement 300€. Design personnalisé, livraison en 7 jours, hébergement 1 an inclus. Places limitées !"
        keywords="offre spéciale site web, site web pas cher, site internet 300 euros, création site web promotion, site vitrine pas cher"
      />
      <ProductSchema 
        offer={{
          name: "Site Web Professionnel - Offre Spéciale",
          description: "Site web moderne et responsive avec design personnalisé, livré en 7 jours. Hébergement 1 an inclus, support 30 jours.",
          price: "300",
          currency: "EUR",
          availability: "https://schema.org/LimitedAvailability"
        }}
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Accueil', url: 'https://convertilab.fr/' },
          { name: 'Offre Spéciale', url: 'https://convertilab.fr/offre-speciale' }
        ]}
      />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-lg sm:text-xl">
            Converti<span className="text-purple-400">Lab</span>
          </Link>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-red-500/20 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-red-500/30">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
            <span className="text-red-400 font-bold text-xs sm:text-base">{spotsRemaining} places</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-gray-400 hover:text-white">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-600" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Offre Spéciale</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-yellow-500/20 text-yellow-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-yellow-500/30">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">OFFRE LIMITÉE – </span>{spotsRemaining} PLACES
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Site web pro pour{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  300€
                </span>
              </h1>
              
              <p className="text-base sm:text-xl text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                Un site moderne, rapide et optimisé pour convertir vos visiteurs en clients.
              </p>
              
              <p className="text-sm sm:text-lg text-green-400 font-semibold mb-6 sm:mb-8 flex items-center justify-center lg:justify-start gap-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>Paiement uniquement après validation.</span>
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-6 sm:mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                    <div className="p-1.5 sm:p-2 bg-purple-500/20 rounded-lg flex-shrink-0">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                    </div>
                    <span className="text-xs sm:text-base">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Price Comparison - Hidden on mobile, shown on lg+ */}
              <div className="hidden lg:block bg-white/5 rounded-2xl p-6 border border-white/10 mb-8">
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
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
                {!isReserved ? (
                  <>
                    {/* Spots Counter */}
                    <div className="text-center mb-4 sm:mb-8">
                      <div className="flex justify-center gap-1 sm:gap-2 mb-3 sm:mb-4 flex-wrap">
                        {[...Array(TOTAL_SPOTS)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold transition-all ${
                              i < (TOTAL_SPOTS - spotsRemaining)
                                ? 'bg-red-500/30 text-red-400 border border-red-500/50'
                                : 'bg-green-500/30 text-green-400 border border-green-500/50'
                            }`}
                          >
                            {i < (TOTAL_SPOTS - spotsRemaining) ? '✓' : i + 1}
                          </div>
                        ))}
                      </div>
                      <p className="text-white font-semibold text-sm sm:text-base">
                        <span className="text-green-400">{spotsRemaining}</span> places disponibles sur {TOTAL_SPOTS}
                      </p>
                    </div>

                    <h2 className="text-lg sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6">
                      Réservez votre place maintenant
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-300 text-sm sm:text-base">Nom complet *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 text-sm sm:text-base h-10 sm:h-11"
                          placeholder="Jean Dupont"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-300 text-sm sm:text-base">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 text-sm sm:text-base h-10 sm:h-11"
                          placeholder="jean@exemple.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-gray-300 text-sm sm:text-base">Téléphone *</Label>
                        <div className="flex gap-2">
                          <Select
                            value={formData.countryCode}
                            onValueChange={(value) => setFormData({ ...formData, countryCode: value })}
                          >
                            <SelectTrigger className="w-[140px] sm:w-[160px] bg-white/10 border-white/20 text-white h-10 sm:h-11">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="max-h-[300px] bg-gray-900 border-white/20">
                              {countryCodes.map((country) => (
                                <SelectItem 
                                  key={`${country.code}-${country.country}`} 
                                  value={country.code}
                                  className="text-white hover:bg-white/10 focus:bg-white/10"
                                >
                                  <span className="flex items-center gap-2">
                                    <span>{country.flag}</span>
                                    <span className="text-xs sm:text-sm">{country.code}</span>
                                  </span>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-500 text-sm sm:text-base h-10 sm:h-11"
                            placeholder="6 12 34 56 78"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="company" className="text-gray-300 text-sm sm:text-base">Entreprise</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 text-sm sm:text-base h-10 sm:h-11"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting || spotsRemaining <= 0}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 sm:py-6 text-sm sm:text-lg font-bold rounded-xl transition-all transform hover:scale-[1.02]"
                      >
                        {isSubmitting ? 'Réservation...' : spotsRemaining <= 0 ? 'Offre épuisée' : 'Réserver ma place à 300€'}
                      </Button>

                      <p className="text-center text-green-400 text-xs sm:text-sm font-medium flex items-center justify-center gap-1 sm:gap-2">
                        <Shield className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>Paiement après validation du projet.</span>
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
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 text-yellow-400">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Offre jusqu'à épuisement des places</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-10 sm:py-16 px-3 sm:px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-3 sm:mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            Découvrez ce que nos clients disent de notre travail
          </p>

          {/* Testimonials */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-purple-500/30 transition-all"
              >
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-3 sm:mb-4 italic text-sm sm:text-base">"{testimonial.text}"</p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">{testimonial.author}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 bg-white/5 px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-white/10"
              >
                <badge.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${badge.color}`} />
                <span className="text-white font-semibold text-xs sm:text-base">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Sites Section */}
      <section className="py-12 sm:py-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-3 sm:mb-4">
            À quoi ressemble un site à 300€ ?
          </h2>
          <p className="text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            Voici des exemples de sites que nous créons. Qualité pro garantie.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8">
            {exampleSites.map((site, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={site.image}
                    alt={site.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 sm:p-6">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-bold text-sm sm:text-lg mb-0.5 sm:mb-1 group-hover:text-purple-300 transition-colors duration-300">{site.title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden sm:block">{site.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          <p className="text-center text-purple-400 mt-6 sm:mt-8 font-medium text-sm sm:text-base">
            + Des dizaines d'autres projets réalisés
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 sm:py-20 px-3 sm:px-4 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
            Ce qui est inclus
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-2 sm:gap-4">
            {included.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10"
              >
                <div className="p-0.5 sm:p-1 bg-green-500/20 rounded-full flex-shrink-0">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                </div>
                <span className="text-gray-200 text-xs sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Questions fréquentes
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                q: "Pourquoi ce prix si bas ?",
                a: "C'est une offre de lancement limitée pour constituer notre portfolio. Une fois les 10 places prises, le prix reviendra à 890€."
              },
              {
                q: "Quel type de site puis-je avoir ?",
                a: "Un site vitrine de 1 à 5 pages. Parfait pour artisans, freelances, PME."
              },
              {
                q: "Combien de temps pour avoir mon site ?",
                a: "Votre site sera livré en 7 jours ouvrés après validation de la maquette."
              },
              {
                q: "Y a-t-il des frais cachés ?",
                a: "Non. Le prix de 300€ inclut tout : design, développement, hébergement 1 an, et certificat SSL."
              },
              {
                q: "Quand dois-je payer ?",
                a: "Aucun paiement à la réservation ! Vous ne payez qu'après validation du projet final."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10">
                <h3 className="text-sm sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-xs sm:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-8 sm:py-12 px-3 sm:px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ne manquez pas cette opportunité !
          </h2>
          <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
            Seulement <strong>{spotsRemaining} places</strong> restantes
          </p>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg font-bold"
          >
            Réserver ma place
          </Button>
          <p className="text-white/60 text-xs sm:text-sm mt-3 sm:mt-4">
            Paiement après validation
          </p>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-6 sm:py-8 px-3 sm:px-4 bg-gray-900 border-t border-white/10">
        <div className="container mx-auto text-center text-gray-400 text-sm sm:text-base">
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
