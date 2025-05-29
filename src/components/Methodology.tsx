
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Search, Palette, PenTool, Code, Rocket } from "lucide-react";

const Methodology = () => {
  const steps = [
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "Compréhension de vos objectifs",
      description: "Nous échangeons pour bien cerner vos besoins, votre cible et vos enjeux business."
    },
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Recherche et benchmark",
      description: "Analyse de la concurrence, tendances du secteur et attentes utilisateurs."
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-600" />,
      title: "Conception UX/UI",
      description: "Création de maquettes graphiques qui garantissent une navigation fluide et intuitive."
    },
    {
      icon: <PenTool className="w-8 h-8 text-green-600" />,
      title: "Copywriting persuasif",
      description: "Rédaction de contenus clairs, impactants et adaptés à votre audience."
    },
    {
      icon: <Code className="w-8 h-8 text-orange-600" />,
      title: "Développement & intégration",
      description: "Développement technique, intégration des outils et optimisation mobile."
    },
    {
      icon: <Rocket className="w-8 h-8 text-red-600" />,
      title: "Tests & lancement",
      description: "Tests fonctionnels et A/B avant déploiement, suivi et analyse des performances."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Notre <span className="text-purple-600">Méthodologie</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Notre processus en 6 étapes pour garantir le succès de votre projet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
                  <div className="bg-gray-100 rounded-full p-3">
                    {step.icon}
                  </div>
                </div>
                <div className="mt-8">
                  <div className="text-sm font-bold text-purple-600 mb-3">ÉTAPE {index + 1}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
