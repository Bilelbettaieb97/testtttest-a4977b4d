import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    text: "ConvertiLab a créé un site magnifique qui dépasse toutes nos attentes. Notre chiffre d'affaires en ligne a augmenté de 250% depuis le lancement !",
    author: "Marie Dubois",
    role: "Directrice Marketing",
    company: "Boutique Éthique",
    rating: 5,
    metric: "+250% CA en ligne",
    avatar: "M",
    color: "bg-gradient-to-br from-purple-500 to-violet-600",
    accent: "from-purple-100 to-violet-100"
  }, {
    text: "Équipe professionnelle et à l'écoute. Notre site vitrine reflète parfaitement notre image de marque. Je recommande vivement !",
    author: "Thomas Laurent",
    role: "CEO & Fondateur",
    company: "Cabinet Conseil",
    rating: 5,
    metric: "Site parfait",
    avatar: "T",
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
    accent: "from-green-100 to-emerald-100"
  }, {
    text: "Développement impeccable ! Notre application web fonctionne parfaitement et nos clients adorent l'interface intuitive.",
    author: "Sophie Martin",
    role: "Product Manager",
    company: "TechStart",
    rating: 5,
    metric: "Interface parfaite",
    avatar: "S",
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
    accent: "from-pink-100 to-rose-100"
  }, {
    text: "Livraison dans les délais, communication excellente et résultat au-delà de nos espérances. Une équipe au top !",
    author: "Alexandre Chen",
    role: "Directeur Digital",
    company: "Agence Créative",
    rating: 5,
    metric: "Délais respectés",
    avatar: "A",
    color: "bg-gradient-to-br from-blue-500 to-cyan-600",
    accent: "from-blue-100 to-cyan-100"
  }, {
    text: "Refonte complète de notre site e-commerce. Performance et design au rendez-vous. Nos ventes en ligne ont explosé !",
    author: "Isabelle Durand",
    role: "Responsable E-commerce",
    company: "Mode Lifestyle",
    rating: 5,
    metric: "Ventes x3",
    avatar: "I",
    color: "bg-gradient-to-br from-indigo-500 to-purple-600",
    accent: "from-indigo-100 to-purple-100"
  }, {
    text: "Formation complète incluse ! Nous savons maintenant gérer notre site en autonomie. Service après-vente exemplaire.",
    author: "Julien Moreau",
    role: "Gérant",
    company: "Restaurant Gastronomique",
    rating: 5,
    metric: "Autonomie totale",
    avatar: "J",
    color: "bg-gradient-to-br from-orange-500 to-red-600",
    accent: "from-orange-100 to-red-100"
  }];
  return <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 via-purple-50/50 to-pink-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-32 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            Témoignages Clients
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Ils nous font confiance
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les retours de nos clients sur leurs nouveaux sites web
          </p>
        </div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-10 max-w-5xl mx-auto">
          {testimonials.slice(0, 4).map((testimonial, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.accent} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              <CardContent className="p-4 sm:p-8 relative z-10">
                {/* Enhanced quote icon */}
                <div className="relative">
                  <Quote className="w-10 h-10 text-purple-300 mb-6" />
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20"></div>
                </div>
                
                {/* Enhanced rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-700 mb-4 sm:mb-8 leading-relaxed italic text-base sm:text-lg">
                  "{testimonial.text}"
                </p>
                
                {/* Enhanced metric highlight */}
                <div className={`bg-gradient-to-r ${testimonial.accent} p-3 sm:p-4 rounded-xl mb-4 sm:mb-8 border border-white/50`}>
                  <div className="text-gray-800 font-bold text-lg sm:text-xl text-center">
                    {testimonial.metric}
                  </div>
                </div>
                
                {/* Enhanced author info */}
                <div className="flex items-center">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${testimonial.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-base sm:text-xl mr-3 sm:mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.author}</div>
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">{testimonial.role}</div>
                    <div className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Enhanced trust badges */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 py-px px-[10px]">
            <div className="flex items-center gap-3 text-lg font-bold text-gray-800">
              <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
              <span>Rejoignez</span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">+150 entreprises</span>
              <span>​qui nous font confiance</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;