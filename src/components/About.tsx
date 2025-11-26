import { Award, Code, Shield, Target, Users, Zap, TrendingUp, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 });

  const values = [
    {
      icon: Award,
      title: "Excellence technique",
      description: "Technologies modernes et performantes pour des sites web qui se démarquent",
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      glowColor: "shadow-violet-500/20"
    },
    {
      icon: Code,
      title: "Créativité sur mesure",
      description: "Chaque projet est unique et reflète parfaitement votre identité de marque",
      gradient: "from-blue-600 via-cyan-600 to-sky-600",
      glowColor: "shadow-blue-500/20"
    },
    {
      icon: Shield,
      title: "Accompagnement complet",
      description: "De l'idée au lancement, nous sommes à vos côtés à chaque étape",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      glowColor: "shadow-emerald-500/20"
    }
  ];

  const highlights = [
    { icon: Target, text: "Vision claire de vos objectifs" },
    { icon: Users, text: "Équipe dédiée et passionnée" },
    { icon: Zap, text: "Livraison rapide et efficace" },
    { icon: Heart, text: "Relation client privilégiée" },
  ];

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
      
      {/* Grille de fond */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 text-violet-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-violet-500/10">
            <Sparkles className="w-5 h-5 mr-2" />
            À propos
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Bienvenue chez{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 animate-pulse">
              ConvertiLab
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Agence web créative spécialisée dans la création de sites internet sur mesure. 
            Notre équipe de designers et développeurs passionnés transforme vos idées en 
            expériences digitales exceptionnelles qui marquent les esprits.
          </p>
        </div>

        {/* Values Grid */}
        <div 
          ref={valuesRef}
          className={`mb-20 transition-all duration-700 delay-200 ${
            valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Notre approche
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-8 hover:border-slate-700/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Effet de brillance au hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>

                  <div className="relative text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl ${value.glowColor} group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                      <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-pink-400 transition-all duration-300">
                      {value.title}
                    </h4>
                    <p className="text-slate-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlights */}
        <div 
          ref={statsRef}
          className={`transition-all duration-700 delay-300 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-violet-500/20 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-pink-600/5"></div>
            
            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Ce qui nous différencie
                </h3>
                <p className="text-slate-300">
                  Une expertise technique combinée à une approche humaine
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, idx) => {
                  const IconComponent = highlight.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl hover:border-violet-500/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-slate-300 font-medium">{highlight.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
