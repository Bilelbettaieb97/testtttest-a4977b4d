
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Search, Palette, Code, Rocket } from "lucide-react";

const Methodology = () => {
  const steps = [
    {
      icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />,
      title: "Analyse",
      description: "Compréhension de vos objectifs et cible"
    },
    {
      icon: <Search className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Recherche",
      description: "Benchmark concurrence et tendances"
    },
    {
      icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600" />,
      title: "Design",
      description: "Maquettes UX/UI optimisées conversion"
    },
    {
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />,
      title: "Développement",
      description: "Intégration technique et mobile"
    },
    {
      icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />,
      title: "Lancement",
      description: "Tests A/B et suivi performances"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Notre <span className="text-purple-600">Méthode</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Processus en 5 étapes pour garantir votre succès
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
                  <div className="bg-gray-100 rounded-full p-2">
                    {step.icon}
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-xs font-bold text-purple-600 mb-2">ÉTAPE {index + 1}</div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
