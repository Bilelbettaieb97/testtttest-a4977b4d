
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ShoppingCart, Star, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const cases = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-green-600" />,
      client: "Boutique Mode — E-commerce",
      title: "Site e-commerce moderne et performant",
      description: "Création complète d'une boutique en ligne avec système de paiement intégré et design mobile-first.",
      metrics: ["+200% ventes", "50ms temps de chargement", "100% mobile-friendly"]
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      client: "Cabinet Médical — Site Vitrine",
      title: "Présence digitale professionnelle",
      description: "Site vitrine avec prise de rendez-vous en ligne et présentation des services médicaux.",
      metrics: ["Design moderne", "Réservation en ligne", "SEO optimisé"]
    }
  ];

  const testimonials = [
    {
      text: "ConvertiLab a créé exactement le site que nous imaginions. Professionnel, à l'écoute et livraison dans les délais !",
      author: "Sophie M.",
      role: "Directrice",
      rating: 5
    },
    {
      text: "Notre nouveau site e-commerce fonctionne parfaitement. L'équipe nous a accompagnés de A à Z avec beaucoup de patience.",
      author: "Pierre L.",
      role: "E-commerçant",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-purple-600">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-uns des sites web que nous avons créés
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center mb-4">
                  {caseStudy.icon}
                  <span className="ml-3 text-sm font-semibold text-purple-600">{caseStudy.client}</span>
                </div>
                <CardTitle className="text-2xl text-gray-900">{caseStudy.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{caseStudy.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {caseStudy.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center p-3 bg-white rounded-lg">
                      <div className="text-lg font-bold text-purple-600">{metric}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Témoignages <span className="text-purple-600">clients</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold"
          >
            Voir plus de réalisations
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
