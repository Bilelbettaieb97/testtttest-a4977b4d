import { Building2, ShoppingBag, Utensils, Home, Dumbbell, Sparkles, GraduationCap, Briefcase, Star, TrendingUp, Users } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const ClientLogos = () => {
  const clients = [
    { name: "Boutique Élégance", icon: ShoppingBag, color: "text-purple-600" },
    { name: "Le Gourmet", icon: Utensils, color: "text-orange-600" },
    { name: "Prestige Habitat", icon: Home, color: "text-blue-600" },
    { name: "FitZone Studio", icon: Dumbbell, color: "text-red-600" },
    { name: "Belle Vie", icon: Sparkles, color: "text-pink-600" },
    { name: "SkillsUp", icon: GraduationCap, color: "text-indigo-600" },
    { name: "ConsultPro", icon: Briefcase, color: "text-cyan-600" },
    { name: "TechStart", icon: Building2, color: "text-green-600" },
  ];

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
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2 text-gray-900">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix}
                  duration={2500}
                />
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Clients */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Ils nous font confiance
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-4 bg-white rounded-xl border-2 border-gray-100 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className={`${client.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                <client.icon className="w-8 h-8" />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
