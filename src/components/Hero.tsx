
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ConvertiLab
            </h1>
            <div className="flex justify-center items-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-gray-300">+100 projets réussis</span>
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
            Des landing pages qui transforment
            <span className="text-purple-400"> vos visiteurs</span>
            <br />
            en <span className="text-pink-400">clients</span>
          </h2>

          {/* Value Proposition */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Chez ConvertiLab, nous créons des landing pages sur mesure, pensées pour 
            capter l'attention, convaincre et maximiser vos conversions. Que vous lanciez 
            un produit, une campagne ou que vous souhaitiez booster vos ventes, nos experts 
            en design, copywriting et optimisation conversion sont à vos côtés.
          </p>

          {/* CTA Section */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Consultation gratuite
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-purple-400 text-white bg-transparent hover:bg-purple-400/10 px-8 py-4 text-lg"
            >
              Voir nos réalisations
            </Button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold text-purple-400 mb-2">+35%</div>
              <div className="text-gray-300">Augmentation moyenne des conversions</div>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold text-pink-400 mb-2">100+</div>
              <div className="text-gray-300">Projets réalisés avec succès</div>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-300">Années d'expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
