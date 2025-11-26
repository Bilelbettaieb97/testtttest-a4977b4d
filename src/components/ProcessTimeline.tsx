import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ProcessTimeline = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Consultation Gratuite",
      description: "On discute de votre projet, vos objectifs et votre budget",
      duration: "30 min",
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      glowColor: "shadow-violet-500/20",
      delay: "delay-0"
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Design & Maquette",
      description: "On crée des maquettes personnalisées qui reflètent votre vision",
      duration: "2-3 jours",
      gradient: "from-purple-600 via-pink-600 to-rose-600",
      glowColor: "shadow-pink-500/20",
      delay: "delay-100"
    },
    {
      icon: Code,
      number: "03",
      title: "Développement",
      description: "On code votre site avec les meilleures technologies",
      duration: "1-2 semaines",
      gradient: "from-orange-600 via-amber-600 to-yellow-600",
      glowColor: "shadow-orange-500/20",
      delay: "delay-200"
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Tests & Ajustements",
      description: "On teste tout et on ajuste selon vos retours",
      duration: "2-3 jours",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      glowColor: "shadow-emerald-500/20",
      delay: "delay-300"
    },
    {
      icon: Rocket,
      number: "05",
      title: "Mise en Ligne",
      description: "Votre site est en ligne et on vous forme à son utilisation",
      duration: "1 jour",
      gradient: "from-blue-600 via-cyan-600 to-sky-600",
      glowColor: "shadow-blue-500/20",
      delay: "delay-[400ms]"
    }
  ];

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      {/* Grille de fond */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 text-violet-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-violet-500/10">
            <Rocket className="w-5 h-5 mr-2" />
            Notre Processus
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            De l'idée au{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 animate-pulse">
              succès
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Un processus simple et transparent en 5 étapes pour créer votre site web parfait
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${
                  isVisible ? `animate-fade-in ${step.delay}` : "opacity-0"
                }`}
              >
                {/* Connecteur pour desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-[72px] top-full w-0.5 h-8 bg-gradient-to-b from-slate-700 to-transparent -bottom-8"></div>
                )}

                <div className="group relative">
                  {/* Carte principale */}
                  <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 sm:p-8 hover:border-slate-700/50 transition-all duration-500 overflow-hidden">
                    {/* Effet de brillance au hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Glow effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>

                    <div className="relative flex flex-col sm:flex-row items-start gap-6">
                      {/* Numéro et icône */}
                      <div className="flex items-center gap-4 sm:gap-6">
                        {/* Numéro d'étape */}
                        <div className="relative">
                          <div className={`text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br ${step.gradient} opacity-30`}>
                            {step.number}
                          </div>
                        </div>

                        {/* Icône */}
                        <div className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-2xl ${step.glowColor} group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 flex-shrink-0`}>
                          <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                          
                          {/* Cercle animé au hover */}
                          <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:scale-125 group-hover:border-white/0 transition-all duration-500"></div>
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="flex-1 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-pink-400 transition-all duration-300">
                            {step.title}
                          </h3>
                          
                          {/* Badge durée */}
                          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${step.gradient} rounded-full text-white text-sm font-bold shadow-lg ${step.glowColor} whitespace-nowrap`}>
                            <Clock className="w-4 h-4" />
                            {step.duration}
                          </div>
                        </div>

                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                          {step.description}
                        </p>

                        {/* Flèche suivant sur mobile */}
                        {index < steps.length - 1 && (
                          <div className="flex items-center gap-2 text-slate-500 text-sm pt-2 lg:hidden">
                            <ArrowRight className="w-4 h-4" />
                            <span>Étape suivante</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 px-8 py-4 rounded-2xl">
            <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-pulse"></div>
            <p className="text-slate-300 text-base sm:text-lg">
              <span className="font-bold text-white">Délai moyen : 2-4 semaines</span> de consultation à mise en ligne
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
