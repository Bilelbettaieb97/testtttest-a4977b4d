import { Building2, ShoppingBag, Utensils, Home, Dumbbell, Sparkles, GraduationCap, Briefcase, Star, TrendingUp, Users, Shield, Award, Clock, CheckCircle2 } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ClientLogos = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: guaranteesRef, isVisible: guaranteesVisible } = useScrollAnimation({ threshold: 0.2 });

  const clients = [
    { name: "E-commerce", icon: ShoppingBag, gradient: "from-purple-600 to-pink-600" },
    { name: "Restaurant", icon: Utensils, gradient: "from-orange-600 to-amber-600" },
    { name: "Immobilier", icon: Home, gradient: "from-blue-600 to-cyan-600" },
    { name: "Fitness", icon: Dumbbell, gradient: "from-red-600 to-rose-600" },
    { name: "Beauté", icon: Sparkles, gradient: "from-pink-600 to-purple-600" },
    { name: "Formation", icon: GraduationCap, gradient: "from-indigo-600 to-violet-600" },
    { name: "B2B", icon: Briefcase, gradient: "from-cyan-600 to-blue-600" },
    { name: "Tech", icon: Building2, gradient: "from-green-600 to-emerald-600" },
  ];

  const stats = [
    {
      icon: Users,
      value: 150,
      suffix: "+",
      label: "Sites créés",
      gradient: "from-violet-600 via-blue-600 to-cyan-600"
    },
    {
      icon: TrendingUp,
      value: 280,
      suffix: "%",
      label: "CA moyen clients",
      gradient: "from-emerald-600 via-green-600 to-teal-600"
    },
    {
      icon: Star,
      value: 98,
      suffix: "%",
      label: "Clients satisfaits",
      gradient: "from-purple-600 via-pink-600 to-rose-600"
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "Garantie Résultat",
      description: "+30% de conversions ou refait gratuitement",
      gradient: "from-violet-600 to-purple-600"
    },
    {
      icon: Clock,
      title: "Livraison Express",
      description: "7 jours max ou 50% de réduction",
      gradient: "from-orange-600 to-amber-600"
    },
    {
      icon: Users,
      title: "Support Premium",
      description: "3 mois d'accompagnement inclus",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Google Partner 5+ ans d'expérience",
      gradient: "from-emerald-600 to-green-600"
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Stats */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto transition-all duration-700 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-slate-700/50 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
              
              <div className="relative text-center">
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-4xl font-bold mb-2 text-white">
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={2500}
                  />
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees + Clients combined */}
        <div 
          ref={guaranteesRef}
          className={`transition-all duration-700 delay-200 ${
            guaranteesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Guarantees Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-xl p-5 hover:border-slate-700/50 transition-all duration-500 overflow-hidden"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${guarantee.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
                
                <div className="relative">
                  <div className={`w-10 h-10 bg-gradient-to-br ${guarantee.gradient} rounded-lg flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <guarantee.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm">{guarantee.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{guarantee.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Clients - Compact version */}
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-4">Secteurs d'expertise</p>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-2 px-4 py-2 bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-full hover:border-slate-700/50 transition-all duration-300"
                >
                  <div className={`w-8 h-8 bg-gradient-to-br ${client.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <client.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-medium text-slate-300">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
