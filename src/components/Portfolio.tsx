
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Star, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const cases = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      client: "Client A — E-commerce",
      title: "Augmentation du taux de conversion de 35%",
      description: "Création d'une landing page produit pour un e-commerce. Résultat : +35% de conversion en 3 mois.",
      metrics: ["+35% conversion", "+50% revenus", "-25% coût d'acquisition"]
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      client: "Client B — B2B SaaS",
      title: "Génération de leads qualifiés x2",
      description: "Optimisation d'une landing page B2B avec campagne A/B testing. Résultat : doublement des leads qualifiés.",
      metrics: ["x2 leads qualifiés", "+60% taux de qualification", "+40% ROI"]
    }
  ];

  const testimonials = [
    {
      text: "Grâce à ConvertiLab, notre campagne a dépassé toutes nos attentes. Leurs conseils et leur expertise ont fait la différence.",
      author: "Marie D.",
      role: "Responsable Marketing",
      rating: 5
    },
    {
      text: "Une équipe à l'écoute, réactive, qui a su comprendre notre univers et booster nos ventes en un temps record.",
      author: "Thomas L.",
      role: "CEO",
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
            Exemples de succès ConvertiLab
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
            Voir plus de cas clients
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
