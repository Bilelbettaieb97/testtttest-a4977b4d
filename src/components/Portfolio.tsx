
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ShoppingCart, Star, ArrowRight, Users, TrendingUp, Clock, Award } from "lucide-react";

const Portfolio = () => {
  const cases = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-green-600" />,
      sector: "E-commerce Mode",
      client: "Boutique Élégance",
      title: "Site e-commerce haute conversion",
      description: "Refonte complète d'une boutique de mode féminine avec optimisation du tunnel de vente et intégration paiement sécurisé.",
      image: "/api/placeholder/600/400",
      metrics: [
        { label: "Ventes", value: "+340%", icon: TrendingUp },
        { label: "Conversion", value: "4.8%", icon: Star },
        { label: "Temps charge", value: "1.2s", icon: Clock }
      ],
      technologies: ["React", "Stripe", "Analytics"],
      results: "Chiffre d'affaires multiplié par 3 en 6 mois",
      testimonial: "Notre boutique en ligne génère maintenant plus que notre magasin physique !",
      author: "Sophie Martineau, Directrice"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      sector: "Santé & Médical",
      client: "Cabinet Dr. Laurent",
      title: "Site médical avec prise de RDV",
      description: "Création d'un site professionnel pour cabinet médical avec système de réservation en ligne et présentation des services.",
      image: "/api/placeholder/600/400",
      metrics: [
        { label: "RDV en ligne", value: "85%", icon: Users },
        { label: "Patients/mois", value: "+180", icon: TrendingUp },
        { label: "Satisfaction", value: "9.8/10", icon: Star }
      ],
      technologies: ["Next.js", "Calendly", "RGPD"],
      results: "Réduction de 70% des appels téléphoniques",
      testimonial: "Nos patients adorent pouvoir prendre RDV 24h/24. Notre planning est optimisé !",
      author: "Dr. Laurent, Médecin généraliste"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      sector: "Restauration",
      client: "Restaurant Le Gourmet",
      title: "Site gastronomique avec commande",
      description: "Site vitrine élégant avec menu interactif, réservations en ligne et système de commande à emporter.",
      image: "/api/placeholder/600/400",
      metrics: [
        { label: "Réservations", value: "+250%", icon: Users },
        { label: "Commandes", value: "+400%", icon: ShoppingCart },
        { label: "Avis Google", value: "4.9★", icon: Star }
      ],
      technologies: ["WordPress", "WooCommerce", "Maps"],
      results: "Augmentation de 60% du CA pendant le confinement",
      testimonial: "Grâce au site, nous avons maintenu notre activité même pendant les fermetures !",
      author: "Pierre Dubois, Chef propriétaire"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 relative overflow-hidden" id="portfolio">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header with Social Proof */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4 mr-2" />
            Portfolio Clients Satisfaits
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Réalisations</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Découvrez comment nous avons transformé les entreprises de nos clients avec des sites web performants
          </p>

          {/* Quick Stats for Social Proof */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mb-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-600">150+</div>
              <div className="text-sm text-gray-600 font-medium">Sites créés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-green-600">+280%</div>
              <div className="text-sm text-gray-600 font-medium">CA moyen client</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600">98%</div>
              <div className="text-sm text-gray-600 font-medium">Clients satisfaits</div>
            </div>
          </div>
        </div>

        {/* Enhanced Case Studies */}
        <div className="space-y-12 sm:space-y-16 mb-16">
          {cases.map((caseStudy, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  {caseStudy.icon}
                  <Badge variant="outline" className="bg-white border-purple-200 text-purple-700 font-semibold">
                    {caseStudy.sector}
                  </Badge>
                </div>
                
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-lg text-purple-600 font-semibold mb-4">{caseStudy.client}</p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {caseStudy.description}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {caseStudy.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                      <metric.icon className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                      <div className="text-xl font-bold text-gray-900">{metric.value}</div>
                      <div className="text-xs text-gray-600 font-medium">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudy.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-purple-100 text-purple-700">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Results Highlight */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 mb-6">
                  <div className="text-green-800 font-bold text-lg mb-2">Résultat clé :</div>
                  <div className="text-green-700 font-semibold">{caseStudy.results}</div>
                </div>

                {/* Testimonial */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-3">"{caseStudy.testimonial}"</p>
                  <div className="text-sm font-semibold text-gray-900">{caseStudy.author}</div>
                </div>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-2 shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300">
                    <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <div className="text-gray-500 font-semibold">Aperçu du site</div>
                        <div className="text-gray-400 text-sm">{caseStudy.client}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-50"></div>
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Prêt à rejoindre nos clients satisfaits ?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez comment nous pouvons transformer votre présence digitale et booster vos ventes
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Obtenir mon devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <div className="text-sm text-gray-500 font-medium">
                ✅ Consultation gratuite • ✅ Devis sous 24h • ✅ Accompagnement complet
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
