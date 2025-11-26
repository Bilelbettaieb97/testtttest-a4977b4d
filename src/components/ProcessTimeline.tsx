import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ProcessTimeline = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const steps = [
    {
      icon: MessageSquare,
      title: "1. Consultation Gratuite",
      description: "On discute de votre projet, vos objectifs et votre budget",
      duration: "30 min",
      color: "from-blue-500 to-cyan-500",
      delay: "delay-0"
    },
    {
      icon: Lightbulb,
      title: "2. Design & Maquette",
      description: "On crée des maquettes personnalisées qui reflètent votre vision",
      duration: "2-3 jours",
      color: "from-purple-500 to-pink-500",
      delay: "delay-100"
    },
    {
      icon: Code,
      title: "3. Développement",
      description: "On code votre site avec les meilleures technologies",
      duration: "1-2 semaines",
      color: "from-orange-500 to-red-500",
      delay: "delay-200"
    },
    {
      icon: CheckCircle,
      title: "4. Tests & Ajustements",
      description: "On teste tout et on ajuste selon vos retours",
      duration: "2-3 jours",
      color: "from-green-500 to-emerald-500",
      delay: "delay-300"
    },
    {
      icon: Rocket,
      title: "5. Mise en Ligne",
      description: "Votre site est en ligne et on vous forme à son utilisation",
      duration: "1 jour",
      color: "from-indigo-500 to-violet-500",
      delay: "delay-[400ms]"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            Notre Processus
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            De l'idée au <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">succès</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un processus simple et transparent pour créer votre site web parfait
          </p>
        </div>

        <div ref={ref} className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-200 via-pink-200 to-purple-200"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? "lg:pr-1/2" : "lg:pl-1/2 lg:text-right"
                } ${isVisible ? `animate-fade-in ${step.delay}` : "opacity-0"}`}
              >
                <div className={`lg:${index % 2 === 0 ? "mr-12" : "ml-12"}`}>
                  <div className="group bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                    
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className={`flex-1 ${index % 2 === 0 ? "" : "lg:text-right"}`}>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 mb-3">{step.description}</p>
                        <div className={`inline-flex items-center bg-gradient-to-r ${step.color} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {step.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA at the end */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 inline-block">
            <p className="text-white text-lg font-semibold mb-2">
              ⚡ Délai moyen de livraison : 2-4 semaines
            </p>
            <p className="text-purple-100 text-sm">
              De la première consultation à la mise en ligne
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
