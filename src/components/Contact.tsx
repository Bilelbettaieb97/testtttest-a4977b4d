import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, CheckCircle2, Star, Users, Clock, Shield, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const openCalendly = () => {
    window.open('https://calendly.com/convertilab-5bsc/30min', '_blank');
  };

  const stats = [
    { value: "+150", label: "Projets livrés" },
    { value: "98%", label: "Clients satisfaits" },
    { value: "24h", label: "Temps de réponse" },
  ];

  const guarantees = [
    { icon: Shield, text: "Devis gratuit sans engagement" },
    { icon: Clock, text: "Livraison dans les délais" },
    { icon: Star, text: "Satisfaction garantie" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div 
        ref={sectionRef}
        className={`container mx-auto px-4 relative z-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold mb-4">
            Contactez-nous
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Lancez votre projet
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Obtenez une estimation personnalisée en moins de 2 minutes
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex justify-center gap-8 md:gap-16 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-purple-600">{stat.value}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Form - Main focus */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 order-1 lg:order-2 space-y-6">
              {/* Call CTA */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-800">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/20">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Préférez un appel ?
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">
                    30 min de consultation gratuite pour discuter de votre projet
                  </p>
                  <Button 
                    onClick={openCalendly}
                    className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 h-12 rounded-xl font-semibold"
                  >
                    Réserver un créneau
                  </Button>
                </div>
              </div>

              {/* Contact Quick Info */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-lg border border-slate-200 dark:border-slate-800">
                <div className="space-y-4">
                  <a href="mailto:Contact@convertilab.com" className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white text-sm">Contact@convertilab.com</p>
                      <p className="text-xs text-slate-500">Réponse sous 2h</p>
                    </div>
                  </a>
                  <a href="tel:+33616477245" className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                    <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white text-sm">+33 6 16 47 72 45</p>
                      <p className="text-xs text-slate-500">Lun-Ven 9h-18h</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-3 rounded-xl">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white text-sm">Rueil-Malmaison (92)</p>
                      <p className="text-xs text-slate-500">Paris & Île-de-France</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-5 text-white">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Nos garanties
                </h4>
                <ul className="space-y-3">
                  {guarantees.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <li key={idx} className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        {item.text}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white dark:border-slate-950 flex items-center justify-center">
                      <Users className="w-3 h-3 text-white" />
                    </div>
                  ))}
                </div>
                <span>+150 entrepreneurs en Île-de-France nous font confiance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
