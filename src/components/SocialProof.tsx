import { Star, TrendingUp, Users, Zap, Award, CheckCircle } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const SocialProof = () => {
  const stats = [
    {
      icon: Users,
      value: 150,
      suffix: "+",
      label: "Sites créés",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      value: 280,
      suffix: "%",
      label: "CA moyen clients",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Star,
      value: 98,
      suffix: "%",
      label: "Clients satisfaits",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Zap,
      value: 2,
      suffix: "s",
      label: "Temps de chargement",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const achievements = [
    { icon: Award, text: "Meilleure agence web 2024", color: "text-yellow-500" },
    { icon: CheckCircle, text: "100% projets livrés à temps", color: "text-green-500" },
    { icon: Star, text: "Note moyenne 4.9/5", color: "text-orange-500" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <Star className="w-4 h-4 mr-2" />
            Résultats Prouvés
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Des chiffres qui parlent
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Notre expertise au service de votre réussite digitale
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2 text-white">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix}
                  duration={2500}
                />
              </div>
              <div className="text-purple-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
            >
              <achievement.icon className={`w-6 h-6 ${achievement.color} flex-shrink-0`} />
              <span className="text-white font-medium text-sm">{achievement.text}</span>
            </div>
          ))}
        </div>

        {/* Live activity indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <div className="relative flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-white font-medium">
              <strong className="text-green-400">12 personnes</strong> consultent actuellement nos services
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
