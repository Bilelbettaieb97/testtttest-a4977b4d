
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
      color: "bg-gradient-to-br from-purple-500 to-violet-600",
      accent: "from-purple-100 to-violet-100"
    },
    {
      text: "L'équipe de ConvertiLab a révolutionné notre approche. Leurs landing pages nous ont permis de générer 2.3M€ de CA supplémentaire cette année.",
      author: "Thomas Laurent",
      role: "CEO & Fondateur",
      company: "EcoGreen Energy",
      rating: 5,
      metric: "+2.3M€ CA",
      avatar: "T",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      accent: "from-green-100 to-emerald-100"
    },
    {
      text: "Incroyable ! Notre coût d'acquisition client a diminué de 65% tout en doublant notre volume de leads qualifiés. Une vraie transformation.",
      author: "Sophie Martin",
      role: "Responsable Acquisition",
      company: "FinanceUp",
      rating: 5,
      metric: "-65% CAC",
      avatar: "S",
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
      accent: "from-pink-100 to-rose-100"
    },
    {
      text: "Professionnel, réactif et surtout efficace ! Nos pages convertissent maintenant 5x mieux qu'avant. Je recommande les yeux fermés.",
      author: "Alexandre Chen",
      role: "Growth Manager",
      company: "SaaS Analytics Pro",
      rating: 5,
      metric: "×5 conversions",
      avatar: "A",
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
      accent: "from-blue-100 to-cyan-100"
    },
    {
      text: "Résultats dépassant toutes nos attentes. +180% de leads qualifiés en 2 mois. L'investissement s'est rentabilisé en 3 semaines !",
      author: "Isabelle Durand",
      role: "Directrice Commerciale",
      company: "Immobilier Premium",
      rating: 5,
      metric: "+180% leads",
      avatar: "I",
      color: "bg-gradient-to-br from-indigo-500 to-purple-600",
      accent: "from-indigo-100 to-purple-100"
    },
    {
      text: "Une approche scientifique qui fonctionne ! Notre landing page mobile convertit maintenant 4x mieux. Équipe au top !",
      author: "Julien Moreau",
      role: "Digital Manager",
      company: "Fashion Trends",
      rating: 5,
      metric: "×4 mobile",
      avatar: "J",
      color: "bg-gradient-to-br from-orange-500 to-red-600",
      accent: "from-orange-100 to-red-100"
    }
  ];

  const stats = [
    { 
      icon: TrendingUp, 
      value: "98%", 
      label: "Taux de satisfaction", 
      color: "text-green-600",
      bg: "from-green-500 to-emerald-500"
    },
    { 
      icon: Users, 
      value: "127", 
      label: "Clients accompagnés", 
      color: "text-blue-600",
      bg: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Zap, 
      value: "35%", 
      label: "Amélioration minimum", 
      color: "text-purple-600",
      bg: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-slate-50 via-purple-50/50 to-pink-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-32 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            Témoignages Clients
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Ils nous font confiance
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Découvrez comment nous avons transformé leurs résultats avec des landing pages optimisées
          </p>
          
          {/* Enhanced quick stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="group flex items-center gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.bg} rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.accent} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              <CardContent className="p-8 relative z-10">
                {/* Enhanced quote icon */}
                <div className="relative">
                  <Quote className="w-10 h-10 text-purple-300 mb-6" />
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20"></div>
                </div>
                
                {/* Enhanced rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-700 mb-8 leading-relaxed italic text-lg">
                  "{testimonial.text}"
                </p>
                
                {/* Enhanced metric highlight */}
                <div className={`bg-gradient-to-r ${testimonial.accent} p-4 rounded-xl mb-8 border border-white/50`}>
                  <div className="text-gray-800 font-bold text-xl text-center">
                    {testimonial.metric}
                  </div>
                </div>
                
                {/* Enhanced author info */}
                <div className="flex items-center">
                  <div className={`w-16 h-16 ${testimonial.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                    <div className="text-sm text-gray-600 mb-1">{testimonial.role}</div>
                    <div className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced trust badges */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-3 text-lg font-bold text-gray-800">
              <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
              <span>Rejoignez</span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">+127 entreprises</span>
              <span>qui nous font confiance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
