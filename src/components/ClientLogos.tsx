import { Building2, ShoppingBag, Utensils, Home, Dumbbell, Sparkles, GraduationCap, Briefcase } from "lucide-react";

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

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-white to-pink-50 opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Ils nous font confiance
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
            +150 entreprises partenaires
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
