
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, TrendingUp, Users, Zap } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Grâce à ConvertiLab, notre taux de conversion est passé de 1.2% à 4.8% en seulement 6 semaines. Le ROI de notre investissement a été de 740% !",
      author: "Marie Dubois",
      role: "Directrice Marketing",
      company: "TechStart Solutions",
      rating: 5,
      metric: "+300% conversions",
      avatar: "M",
      color: "bg-purple-500"
    },
    {
      text: "L'équipe de ConvertiLab a révolutionné notre approche. Leurs landing pages nous ont permis de générer 2.3M€ de CA supplémentaire cette année.",
      author: "Thomas Laurent",
      role: "CEO & Fondateur",
      company: "EcoGreen Energy",
      rating: 5,
      metric: "+2.3M€ CA",
      avatar: "T",
      color: "bg-green-500"
    },
    {
      text: "Incroyable ! Notre coût d'acquisition client a diminué de 65% tout en doublant notre volume de leads qualifiés. Une vraie transformation.",
      author: "Sophie Martin",
      role: "Responsable Acquisition",
      company: "FinanceUp",
      rating: 5,
      metric: "-65% CAC",
      avatar: "S",
      color: "bg-pink-500"
    },
    {
      text: "Professionnel, réactif et surtout efficace ! Nos pages convertissent maintenant 5x mieux qu'avant. Je recommande les yeux fermés.",
      author: "Alexandre Chen",
      role: "Growth Manager",
      company: "SaaS Analytics Pro",
      rating: 5,
      metric: "×5 conversions",
      avatar: "A",
      color: "bg-blue-500"
    },
    {
      text: "Résultats dépassant toutes nos attentes. +180% de leads qualifiés en 2 mois. L'investissement s'est rentabilisé en 3 semaines !",
      author: "Isabelle Durand",
      role: "Directrice Commerciale",
      company: "Immobilier Premium",
      rating: 5,
      metric: "+180% leads",
      avatar: "I",
      color: "bg-indigo-500"
    },
    {
      text: "Une approche scientifique qui fonctionne ! Notre landing page mobile convertit maintenant 4x mieux. Équipe au top !",
      author: "Julien Moreau",
      role: "Digital Manager",
      company: "Fashion Trends",
      rating: 5,
      metric: "×4 mobile",
      avatar: "J",
      color: "bg-orange-500"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "98%", label: "Taux de satisfaction", color: "text-green-500" },
    { icon: Users, value: "127", label: "Clients accompagnés", color: "text-blue-500" },
    { icon: Zap, value: "35%", label: "Amélioration minimum", color: "text-purple-500" }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ils nous font <span className="text-purple-600">confiance</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Découvrez comment nous avons transformé leurs résultats avec des landing pages optimisées
          </p>
          
          {/* Quick stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-purple-400 mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                {/* Metric highlight */}
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-lg mb-6">
                  <div className="text-purple-700 font-bold text-lg text-center">
                    {testimonial.metric}
                  </div>
                </div>
                
                {/* Author info */}
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-purple-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              Rejoignez +127 entreprises qui nous font confiance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
